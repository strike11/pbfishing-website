// Lint Markdown content against docs/content-brief.md without running a build.
// Usage: node tools/validate-content.mjs [files...]   (no args = every file under src/content)
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, relative, basename, dirname } from "node:path";
import { parse } from "yaml";

const ROOT = join(dirname(new URL(import.meta.url).pathname), "..");
const CONTENT = join(ROOT, "src/content");
const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : f.endsWith(".md") ? [join(d, f)] : []));
const files = process.argv.slice(2).length ? process.argv.slice(2).map((f) => (f.startsWith("/") ? f : join(process.cwd(), f))) : walk(CONTENT);

const PLAN = readFileSync(join(ROOT, "docs/content-brief.md"), "utf8");
const BLOG = ["best-fishing-apps", "is-fishbrain-worth-it", "fishbrain-alternatives", "pb-fishing-vs-fishbrain", "best-fishing-log-apps", "fishing-leaderboard-apps", "how-to-measure-a-fish", "what-is-a-good-size-bass", "largemouth-bass-weight-chart", "how-to-catch-a-personal-best-bass", "how-to-release-a-fish", "fishing-log-what-to-record", "how-to-find-fishing-spots", "best-time-to-fish", "do-solunar-tables-work", "barometric-pressure-and-fishing", "fishing-after-rain-wind-cold-front", "water-temperature-and-fish-activity", "fishing-for-beginners", "do-you-need-a-fishing-license-for-catch-and-release", "why-am-i-not-catching-fish", "90-10-rule-fishing", "best-bass-lures-by-season"];
const SPECIES = ["largemouth-bass", "smallmouth-bass", "crappie", "channel-catfish", "walleye", "bluegill", "rainbow-trout"];
const ART_SPECIES = readdirSync(join(ROOT, "src/assets/species")).filter((f) => f.endsWith(".jpg")).map((f) => f.slice(0, -4));
const STATES = ["texas", "florida", "minnesota", "michigan", "tennessee"];
const STATE_SUB = ["", "best-lakes", "bass-fishing", "fish-species-seasons", "fishing-license", "state-record-fish", "beginner-fishing-spots"];
const QUIZ = ["what-kind-of-angler-are-you", "bass-lure-picker", "freshwater-or-saltwater", "speak-angler", "guess-the-weight", "would-you-catch-fish-today", "fishing-iq"];
const okPath = new Set([
  "/", "/blog", "/fishing", "/species", "/quiz", "/tools/fish-weight-calculator", "/support", "/about", "/privacy-policy", "/eula",
  ...BLOG.map((s) => `/blog/${s}`), ...SPECIES.map((s) => `/species/${s}`), ...QUIZ.map((s) => `/quiz/${s}`),
  ...STATES.flatMap((s) => STATE_SUB.map((p) => (p ? `/fishing/${s}/${p}` : `/fishing/${s}`))),
  ...["how-to", "apps", "tips", "gear", "conditions", "beginners", "records"].map((c) => `/blog/category/${c}`),
]);
const BANNED = /\b(ultimate|game[- ]changer|unlock|elevate|dive in|delve|unleash|revolutioniz|seamless|in today's world|verified records?|photo-verified|never get skunked)\b/i;

let errors = 0, warns = 0;
const err = (f, m) => { errors++; console.log(`✗ ${relative(ROOT, f)}: ${m}`); };
const warn = (f, m) => { warns++; console.log(`! ${relative(ROOT, f)}: ${m}`); };

for (const f of files) {
  if (!existsSync(f)) { err(f, "file not found"); continue; }
  const raw = readFileSync(f, "utf8");
  const m = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(raw);
  if (!m) { err(f, "missing frontmatter"); continue; }
  let fm;
  try { fm = parse(m[1]); } catch (e) { err(f, `YAML: ${e.message.split("\n")[0]}`); continue; }
  const body = m[2];
  const col = relative(CONTENT, f).split("/")[0];
  for (const k of ["title", "description", "keyword", "published", "art", "heroAlt", "lede"]) if (!fm[k]) err(f, `missing ${k}`);
  if (fm.title?.length > 80) err(f, `title ${fm.title.length} chars (max 80)`);
  if (fm.seoTitle && fm.seoTitle.length > 70) err(f, `seoTitle ${fm.seoTitle.length} chars (max 70)`);
  const t = fm.seoTitle ?? fm.title ?? "";
  if (t.length + 13 > 70) warn(f, `<title> will be ${t.length + 13} chars with " | PB Fishing"; consider a shorter seoTitle`);
  if (fm.description && (fm.description.length < 110 || fm.description.length > 170)) err(f, `description ${fm.description.length} chars (110–170)`);
  if (fm.art && !/^(species|state|icons|screen):[a-z0-9,-]+$/.test(fm.art)) err(f, `bad art "${fm.art}"`);
  if (fm.art?.startsWith("species:") && !ART_SPECIES.includes(fm.art.slice(8))) err(f, `no species art "${fm.art.slice(8)}"`);
  if (fm.art?.startsWith("icons:")) for (const i of fm.art.slice(6).split(",")) if (!existsSync(join(ROOT, "node_modules/lucide-static/icons", `${i}.svg`))) err(f, `unknown lucide icon "${i}"`);
  if (fm.art?.startsWith("state:") && !STATES.includes(fm.art.slice(6))) err(f, `state art only for ${STATES.join(", ")}`);
  if (!Array.isArray(fm.faq) || fm.faq.length < 3) warn(f, "fewer than 3 FAQ entries");
  for (const q of fm.faq ?? []) if (!q.q || !q.a) err(f, "faq entries need q and a");
  for (const s of fm.sources ?? []) { if (!s.title || !/^https?:\/\//.test(s.url ?? "")) err(f, `bad source ${JSON.stringify(s)}`); }
  if (col === "blog") {
    if (!["how-to", "apps", "tips", "gear", "conditions", "beginners", "records"].includes(fm.category)) err(f, `bad category ${fm.category}`);
    if (!["listicle", "guide", "comparison", "explainer"].includes(fm.kind)) err(f, `bad kind ${fm.kind}`);
    if (!BLOG.includes(basename(f, ".md"))) warn(f, "slug is not in the URL plan");
    for (const r of fm.related ?? []) if (!BLOG.includes(r)) err(f, `related "${r}" not in plan`);
  }
  if (col === "species") for (const k of ["name", "scientific", "family", "facts"]) if (!fm[k]) err(f, `missing ${k}`);
  if (col === "states") {
    if (!STATES.includes(fm.state)) err(f, `state "${fm.state}"`);
    const types = { hub: "hub", "best-lakes": "best-lakes", "bass-fishing": "bass-fishing", "species-seasons": "species-seasons", "fishing-license": "fishing-license", "state-record-fish": "state-record-fish", "beginner-spots": "beginner-spots" };
    if (types[basename(f, ".md")] !== fm.type) err(f, `type "${fm.type}" must match file name`);
  }
  if (/^#\s/m.test(body)) err(f, "body contains an H1 (# ...); use ## and below");
  if ((body.match(/^## /gm) ?? []).length < 3) warn(f, "fewer than 3 ## sections");
  const words = body.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  console.log(`  ${relative(ROOT, f)}: ${words} words`);
  if (words < 700) warn(f, `only ${words} words`);
  if (BANNED.test(body + fm.title + fm.description)) err(f, `banned phrase: "${(body + fm.title + fm.description).match(BANNED)[0]}"`);
  if (/\bAI\b/.test(fm.title + (fm.seoTitle ?? "")) || /^#+ .*\bAI\b/m.test(body)) err(f, `"AI" in title or heading`);
  for (const [, href] of body.matchAll(/\]\((\/[^)\s#]*)/g)) if (!okPath.has(href.replace(/\/$/, "") || "/")) err(f, `internal link not in plan: ${href}`);
  for (const [, href] of (fm.lede + JSON.stringify(fm.faq ?? []) + JSON.stringify(fm.takeaways ?? "")).matchAll(/\]\((\/[^)\s#]*)/g)) if (!okPath.has(href)) err(f, `internal link not in plan: ${href}`);
  if ((body.match(/class="callout/g) ?? []).length > 2) warn(f, "more than two callouts");
  if (/—.*—.*—/.test(body)) warn(f, "lots of em dashes; prefer commas, colons or full stops");
}
console.log(`\n${files.length} files, ${errors} errors, ${warns} warnings`);
process.exit(errors ? 1 : 0);
