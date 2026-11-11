// After `astro build`: fail on broken internal links, missing titles/descriptions/canonicals, duplicate titles,
// and the old Tilda leftovers. Prints a page count.
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";
const DIST = join(process.cwd(), "dist");
const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
const all = walk(DIST);
const html = all.filter((f) => f.endsWith(".html"));
const exists = (p) => {
  const clean = p.split(/[?#]/)[0].replace(/\/$/, "") || "/";
  if (clean === "/") return existsSync(join(DIST, "index.html"));
  return [clean, `${clean}.html`, `${clean}/index.html`].some((c) => existsSync(join(DIST, c)));
};
let bad = 0;
const titles = new Map();
for (const f of html) {
  const s = readFileSync(f, "utf8");
  const rel = "/" + relative(DIST, f).replace(/\.html$/, "").replace(/(^|\/)index$/, "");
  const noindex = /name="robots" content="noindex/.test(s);
  const t = /<title>([^<]*)<\/title>/.exec(s)?.[1];
  if (!t) { console.log(`✗ ${rel}: no <title>`); bad++; }
  if (!/name="description" content="[^"]{50,}"/.test(s)) { console.log(`✗ ${rel}: missing/short description`); bad++; }
  if (!/rel="canonical"/.test(s)) { console.log(`✗ ${rel}: no canonical`); bad++; }
  if (/allrecords|tilda|[" ]t-records\b|Made on Tilda/i.test(s)) { console.log(`✗ ${rel}: Tilda leftover`); bad++; }
  if (!noindex && t) { if (titles.has(t)) { console.log(`✗ duplicate title "${t}": ${rel} and ${titles.get(t)}`); bad++; } else titles.set(t, rel); }
  for (const [, href] of s.matchAll(/href="(\/[^"]*)"/g)) {
    if (href.startsWith("//")) continue;
    if (!exists(href)) { console.log(`✗ ${rel}: broken link ${href}`); bad++; }
  }
  for (const [, src] of s.matchAll(/(?:src|srcset)="(\/[^" ,]+)/g)) if (!exists(src)) { console.log(`✗ ${rel}: missing asset ${src}`); bad++; }
}
const indexable = html.filter((f) => !/name="robots" content="noindex/.test(readFileSync(f, "utf8")));
console.log(`\n${html.length} HTML pages (${indexable.length} indexable), ${bad} problems`);
process.exit(bad ? 1 : 0);
