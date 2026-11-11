// PB Fishing illustration pipeline.
// Every page declares `art:` in its frontmatter (species:<slug> | state:<slug> | icons:a,b,c | screen:<name>).
// This script draws a navy "lake contour" backdrop (bathymetry-style isolines from seeded noise) and composes the motif:
//   - src/assets/art/<collection>/<id>.jpg  1600×900 hero (Astro turns it into AVIF/WebP at several widths)
//   - public/og/<collection>/<id>.jpg       1200×630 social card with the title
// Also: quiz cards (/og/quiz/<slug>[-<result>].jpg) and fixed pages (/og/default.jpg, /og/pages/*.jpg).
// Usage: node tools/art.mjs [--force] [filter]
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import sharp from "sharp";
import { parse } from "yaml";
import { feature } from "topojson-client";
import { geoConicConformal, geoPath } from "d3-geo";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const FORCE = process.argv.includes("--force");
const FILTER = process.argv.slice(2).find((a) => !a.startsWith("--"));
const NAVY = "#1b3a4b", DEEP = "#12293a", GOLD = "#d4a017", GOLD2 = "#eec639", BONE = "#f5f0e8";
const FONT = "Helvetica Neue, Helvetica, Arial, sans-serif";

function rng(seed) {
  let s = 2166136261;
  for (const c of seed) s = Math.imul(s ^ c.charCodeAt(0), 16777619) >>> 0;
  return () => ((s = (Math.imul(s, 1664525) + 1013904223) >>> 0) / 4294967296);
}
const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const r1 = (n) => Math.round(n * 10) / 10;

/** Smooth value noise → marching-squares isolines, like a lake depth chart. */
function contours(W, H, seed, { levels = 13, cell = 14, opacity = 1 } = {}) {
  const rand = rng(seed);
  const gw = Math.ceil(W / cell) + 1, gh = Math.ceil(H / cell) + 1;
  const octaves = [[5, 1], [11, 0.45], [23, 0.2]].map(([n, amp]) => {
    const g = Array.from({ length: (n + 2) * (n + 2) }, () => rand());
    return { n, amp, g };
  });
  const smooth = (t) => t * t * (3 - 2 * t);
  const sample = (x, y) => {
    let v = 0, tot = 0;
    for (const { n, amp, g } of octaves) {
      const fx = (x / W) * n, fy = (y / H) * n * (H / W) * 1.6;
      const ix = Math.floor(fx), iy = Math.floor(fy), tx = smooth(fx - ix), ty = smooth(fy - iy);
      const at = (a, b) => g[((b % (n + 2)) + n + 2) % (n + 2) * (n + 2) + (((a % (n + 2)) + n + 2) % (n + 2))];
      const top = at(ix, iy) * (1 - tx) + at(ix + 1, iy) * tx;
      const bot = at(ix, iy + 1) * (1 - tx) + at(ix + 1, iy + 1) * tx;
      v += (top * (1 - ty) + bot * ty) * amp; tot += amp;
    }
    return v / tot;
  };
  const f = new Float32Array(gw * gh);
  for (let j = 0; j < gh; j++) for (let i = 0; i < gw; i++) f[j * gw + i] = sample(i * cell, j * cell);
  let min = Infinity, max = -Infinity;
  for (const v of f) { min = Math.min(min, v); max = Math.max(max, v); }
  let out = "";
  for (let l = 1; l <= levels; l++) {
    const iso = min + ((max - min) * l) / (levels + 1);
    let d = "";
    for (let j = 0; j < gh - 1; j++) for (let i = 0; i < gw - 1; i++) {
      const a = f[j * gw + i], b = f[j * gw + i + 1], c = f[(j + 1) * gw + i + 1], e = f[(j + 1) * gw + i];
      const idx = (a > iso ? 8 : 0) | (b > iso ? 4 : 0) | (c > iso ? 2 : 0) | (e > iso ? 1 : 0);
      if (idx === 0 || idx === 15) continue;
      const x = i * cell, y = j * cell;
      const lerp = (p, q) => (iso - p) / (q - p);
      const T = [x + cell * lerp(a, b), y], R = [x + cell, y + cell * lerp(b, c)], B = [x + cell * lerp(e, c), y + cell], L = [x, y + cell * lerp(a, e)];
      const segs = { 1: [[L, B]], 2: [[B, R]], 3: [[L, R]], 4: [[T, R]], 5: [[L, T], [B, R]], 6: [[T, B]], 7: [[L, T]], 8: [[L, T]], 9: [[T, B]], 10: [[T, R], [L, B]], 11: [[T, R]], 12: [[L, R]], 13: [[B, R]], 14: [[L, B]] }[idx];
      for (const [p, q] of segs) d += `M${r1(p[0])} ${r1(p[1])}L${r1(q[0])} ${r1(q[1])}`;
    }
    const major = l % 4 === 0;
    out += `<path d="${d}" fill="none" stroke="${GOLD}" stroke-width="${major ? 1.8 : 1}" stroke-opacity="${(major ? 0.42 : 0.2) * opacity}" stroke-linecap="round"/>`;
  }
  return out;
}

function backdrop(W, H, seed) {
  return `<defs>
    <radialGradient id="bg" cx="68%" cy="40%" r="85%"><stop offset="0" stop-color="#26506a"/><stop offset=".55" stop-color="${NAVY}"/><stop offset="1" stop-color="${DEEP}"/></radialGradient>
    <linearGradient id="fade" x1="0" x2="1"><stop offset="0" stop-color="${DEEP}" stop-opacity=".92"/><stop offset=".55" stop-color="${DEEP}" stop-opacity=".35"/><stop offset="1" stop-color="${DEEP}" stop-opacity="0"/></linearGradient>
    <filter id="sh" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="18" stdDeviation="22" flood-color="#000" flood-opacity=".38"/></filter>
    <pattern id="hatch" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><line x1="0" y1="0" x2="0" y2="9" stroke="${GOLD}" stroke-width="1.2" stroke-opacity=".35"/></pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>${contours(W, H, seed)}`;
}

const ICON_DIR = join(ROOT, "node_modules/lucide-static/icons");
function iconInner(name) {
  const svg = readFileSync(join(ICON_DIR, `${name}.svg`), "utf8");
  return svg.replace(/<!--[\s\S]*?-->/g, "").replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "");
}
function iconsMotif(names, cx, cy, size) {
  const n = names.length, gap = size * 1.25;
  return names.map((name, k) => {
    const x = cx + (k - (n - 1) / 2) * gap, y = cy + (n === 3 && k === 1 ? -size * 0.12 : 0);
    const s = size / 24 * 0.56;
    return `<g filter="url(#sh)"><circle cx="${x}" cy="${y}" r="${size / 2}" fill="${DEEP}" fill-opacity=".72" stroke="${GOLD}" stroke-opacity=".75" stroke-width="2.5"/>
      <circle cx="${x}" cy="${y}" r="${size / 2 + 16}" fill="none" stroke="${GOLD}" stroke-opacity=".28" stroke-width="1.2"/></g>
      <g transform="translate(${x - 12 * s} ${y - 12 * s}) scale(${s})" fill="none" stroke="${GOLD2}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${iconInner(name)}</g>`;
  }).join("");
}

let US;
function stateMotif(slug, x, y, w, h) {
  US ??= JSON.parse(readFileSync(join(ROOT, "node_modules/us-atlas/states-10m.json"), "utf8"));
  const name = slug.split("-").map((p) => p[0].toUpperCase() + p.slice(1)).join(" ");
  const fc = feature(US, US.objects.states);
  const f = fc.features.find((s) => s.properties.name === name);
  if (!f) throw new Error(`no geometry for ${name}`);
  const proj = geoConicConformal().parallels([29.5, 45.5]).rotate([96, 0]).fitExtent([[x, y], [x + w, y + h]], f);
  const d = geoPath(proj)(f);
  return `<g filter="url(#sh)"><path d="${d}" fill="${DEEP}" fill-opacity=".85"/></g><path d="${d}" fill="url(#hatch)"/><path d="${d}" fill="none" stroke="${GOLD2}" stroke-width="4" stroke-linejoin="round"/>`;
}

async function cardImage(file, w, h, { pad = 28, bg = "#ffffff", fit = "contain", radius = 28 } = {}) {
  const inner = await sharp(file).resize(w - pad * 2, h - pad * 2, { fit, background: bg }).flatten({ background: bg }).toBuffer();
  const mask = Buffer.from(`<svg width="${w}" height="${h}"><rect width="${w}" height="${h}" rx="${radius}" fill="#fff"/></svg>`);
  return sharp({ create: { width: w, height: h, channels: 4, background: bg } })
    .composite([{ input: inner, left: pad, top: pad }, { input: mask, blend: "dest-in" }]).png().toBuffer();
}

function wrap(text, max) {
  const words = text.split(/\s+/), lines = [];
  let cur = "";
  for (const w of words) { if ((cur + " " + w).trim().length > max) { lines.push(cur.trim()); cur = w; } else cur += " " + w; }
  if (cur.trim()) lines.push(cur.trim());
  return lines;
}

const SCREENS = { hero: "hero", "catch-log": "catch-log", leaderboard: "leaderboard", conditions: "conditions", map: "map" };

/** Render one illustration. mode "hero" = 1600×900 no text; "og" = 1200×630 with kicker + title. */
async function render(spec, seed, mode, { title = "", kicker = "" } = {}) {
  const W = mode === "hero" ? 1600 : 1200, H = mode === "hero" ? 900 : 630;
  const [kind, arg] = spec.split(":");
  // Motif box: centred on hero; right side on og.
  const box = mode === "hero" ? { x: W * 0.16, y: H * 0.12, w: W * 0.68, h: H * 0.76 } : { x: W * 0.56, y: H * 0.12, w: W * 0.4, h: H * 0.76 };
  let motif = "";
  const overlays = [];
  if (kind === "icons") motif = iconsMotif(arg.split(",").slice(0, 3), box.x + box.w / 2, box.y + box.h / 2, mode === "hero" ? (arg.split(",").length > 2 ? 230 : 280) : (arg.split(",").length > 1 ? 120 : 190));
  else if (kind === "state") motif = stateMotif(arg, box.x + 20, box.y + 10, box.w - 40, box.h - 20);
  else if (kind === "species") {
    const file = join(ROOT, "src/assets/species", `${arg}.jpg`);
    const cw = Math.round(box.w * (mode === "hero" ? 0.92 : 1)), ch = Math.round(Math.min(box.h * 0.82, cw * 0.56));
    const dark = ["bluegill", "walleye"].includes(arg);
    const card = await cardImage(file, cw, ch, { bg: dark ? "#0b0f14" : "#ffffff", pad: dark ? 8 : 26, fit: "contain" });
    overlays.push({ input: card, left: Math.round(box.x + (box.w - cw) / 2), top: Math.round(box.y + (box.h - ch) / 2) });
    motif = `<rect x="${box.x + (box.w - cw) / 2}" y="${box.y + (box.h - ch) / 2}" width="${cw}" height="${ch}" rx="28" fill="#000" filter="url(#sh)"/>`;
  } else if (kind === "screen") {
    const file = join(ROOT, "src/assets/screens", `${SCREENS[arg]}.png`);
    const ch = Math.round(box.h * (mode === "hero" ? 1.0 : 1.0)), cw = Math.round(ch * (1242 / 2688));
    const card = await cardImage(file, cw, ch, { pad: 0, bg: BONE, fit: "cover", radius: 26 });
    overlays.push({ input: card, left: Math.round(box.x + (box.w - cw) / 2), top: Math.round(box.y + (box.h - ch) / 2) });
    motif = `<rect x="${box.x + (box.w - cw) / 2}" y="${box.y + (box.h - ch) / 2}" width="${cw}" height="${ch}" rx="26" fill="#000" filter="url(#sh)"/>`;
  }
  let text = "";
  if (mode === "og") {
    const lines = wrap(title, title.length > 46 ? 22 : 20).slice(0, 4);
    const fs = lines.length > 3 ? 50 : 58;
    const y0 = H / 2 - ((lines.length - 1) * fs * 1.08) / 2 + 10;
    text = `<rect width="${W * 0.62}" height="${H}" fill="url(#fade)"/>
      ${kicker ? `<text x="64" y="${y0 - fs - 18}" font-family="${FONT}" font-size="22" font-weight="700" letter-spacing="3" fill="${GOLD2}">${esc(kicker.toUpperCase())}</text>` : ""}
      ${lines.map((l, i) => `<text x="62" y="${y0 + i * fs * 1.08}" font-family="${FONT}" font-size="${fs}" font-weight="800" fill="${BONE}" letter-spacing="-1">${esc(l)}</text>`).join("")}
      <text x="118" y="${H - 52}" font-family="${FONT}" font-size="24" font-weight="700" fill="${BONE}" fill-opacity=".9">PB Fishing</text>
      <text x="250" y="${H - 52}" font-family="${FONT}" font-size="22" fill="${BONE}" fill-opacity=".55">pbfishing.app</text>`;
    overlays.push({ input: await sharp(join(ROOT, "public/brand/pb-logo-white-160.png")).resize(44, 44).toBuffer(), left: 62, top: H - 88 });
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${backdrop(W, H, seed)}${motif}${text}</svg>`;
  let img = sharp(Buffer.from(svg));
  if (overlays.length) img = sharp(await img.png().toBuffer()).composite(overlays);
  return img.jpeg({ quality: mode === "hero" ? 88 : 82, mozjpeg: true }).toBuffer();
}

async function out(path, buf) { mkdirSync(dirname(path), { recursive: true }); writeFileSync(path, buf); }

const walk = (d) => (existsSync(d) ? readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : f.endsWith(".md") ? [join(d, f)] : [])) : []);
const KICKER = { blog: { apps: "Fishing apps", "how-to": "How-to", tips: "Tips", gear: "Gear", conditions: "Conditions", beginners: "Beginners", records: "Records & PBs" } };
const STATE_NAV = { hub: "Fishing guide", "best-lakes": "Best lakes", "bass-fishing": "Bass fishing", "species-seasons": "Species & seasons", "fishing-license": "License & rules", "state-record-fish": "State records", "beginner-spots": "Beginner spots" };

const jobs = [];
const SAMPLE = process.argv.indexOf("--sample");
if (SAMPLE > 0) {
  const [spec, dest] = process.argv.slice(SAMPLE + 1);
  await out(`${dest}-hero.jpg`, await render(spec, spec, "hero"));
  await out(`${dest}-og.jpg`, await render(spec, spec, "og", { title: "Texas fishing license 2026: who needs one and what it costs", kicker: "Texas · License & rules" }));
  process.exit(0);
}
for (const col of ["blog", "species", "states"]) {
  for (const file of walk(join(ROOT, "src/content", col))) {
    const fm = parse(/^---\n([\s\S]*?)\n---/.exec(readFileSync(file, "utf8"))[1]);
    if (!fm.art) continue;
    const id = relative(join(ROOT, "src/content", col), file).replace(/\.md$/, "").replace(/\//g, "-").replace(/-hub$/, "");
    const stateName = fm.state ? fm.state.split("-").map((p) => p[0].toUpperCase() + p.slice(1)).join(" ") : "";
    const kicker = col === "blog" ? KICKER.blog[fm.category] : col === "species" ? "Species guide" : `${stateName} · ${STATE_NAV[fm.type] ?? ""}`;
    jobs.push({ col, id, spec: fm.art, title: fm.title, kicker, src: file });
  }
}
const quizMods = readdirSync(join(ROOT, "src/data/quizzes")).filter((f) => f.endsWith(".ts"));
for (const f of quizMods) {
  const src = readFileSync(join(ROOT, "src/data/quizzes", f), "utf8");
  const slug = /slug:\s*"([^"]+)"/.exec(src)[1];
  const title = /title:\s*"((?:[^"\\]|\\.)+)"/.exec(src)[1].replace(/\\"/g, '"');
  const art = /art:\s*"([^"]+)"/.exec(src)?.[1] ?? "icons:fish";
  jobs.push({ col: "quiz", id: slug, spec: art, title, kicker: "Free fishing quiz", ogOnly: true, src: join(ROOT, "src/data/quizzes", f) });
  // results: slug + title pairs inside the results array
  const resBlock = src.slice(src.indexOf("results:"));
  for (const m of resBlock.matchAll(/slug:\s*"([^"]+)",\s*title:\s*"((?:[^"\\]|\\.)+)"[\s\S]*?icon:\s*"([^"]+)"/g)) {
    jobs.push({ col: "quiz", id: `${slug}-${m[1]}`, spec: `icons:${m[3]}`, title: m[2].replace(/\\"/g, '"'), kicker: `${title.replace(/\?$/, "")}: result`, ogOnly: true, src: join(ROOT, "src/data/quizzes", f) });
  }
}
jobs.push({ col: "pages", id: "default", spec: "screen:hero", title: "Measure. Rank. Improve.", kicker: "Catch log · leaderboards · trips", ogOnly: true, ogPath: "public/og/default.jpg" });
jobs.push({ col: "pages", id: "fish-weight-calculator", spec: "icons:ruler,scale", title: "Fish weight calculator: length to weight by species", kicker: "Free tool", ogOnly: true });

let done = 0, skipped = 0;
for (const j of jobs) {
  if (FILTER && !`${j.col}/${j.id}`.includes(FILTER)) continue;
  const heroPath = join(ROOT, "src/assets/art", j.col, `${j.id}.jpg`);
  const ogPath = join(ROOT, j.ogPath ?? join("public/og", j.col, `${j.id}.jpg`));
  const fresh = (p) => existsSync(p) && (!j.src || statSync(p).mtimeMs > statSync(j.src).mtimeMs);
  if (!FORCE && fresh(ogPath) && (j.ogOnly || fresh(heroPath))) { skipped++; continue; }
  try {
    if (!j.ogOnly) await out(heroPath, await render(j.spec, `${j.col}/${j.id}`, "hero"));
    await out(ogPath, await render(j.spec, `${j.col}/${j.id}`, "og", { title: j.title, kicker: j.kicker }));
    done++;
    console.log(`✓ ${j.col}/${j.id} (${j.spec})`);
  } catch (e) {
    console.log(`✗ ${j.col}/${j.id}: ${e.message}`);
  }
}
console.log(`${done} rendered, ${skipped} up to date`);
