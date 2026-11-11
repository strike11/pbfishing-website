import { allPosts, allSpecies, allStatePages, statePath, CATEGORY_LABEL } from "./content";
import { QUIZZES } from "@/data/quizzes";
import { SITE } from "./site";

export interface Url { loc: string; lastmod?: string }
const day = (d?: Date | string) => (d ? new Date(d).toISOString().slice(0, 10) : undefined);
export const BUILD_DAY = day(new Date());

export async function groups(): Promise<Record<string, Url[]>> {
  const posts = await allPosts();
  const species = await allSpecies();
  const states = await allStatePages();
  const newest = (xs: { data: { published: Date; updated?: Date } }[]) => day(xs.map((x) => x.data.updated ?? x.data.published).sort((a, b) => +b - +a)[0]);
  return {
    pages: [
      { loc: "/", lastmod: newest(posts) },
      { loc: "/blog", lastmod: newest(posts) },
      ...Object.keys(CATEGORY_LABEL).filter((c) => posts.some((p) => p.data.category === c)).map((c) => ({ loc: `/blog/category/${c}`, lastmod: newest(posts.filter((p) => p.data.category === c)) })),
      { loc: "/fishing", lastmod: newest(states) },
      { loc: "/species", lastmod: newest(species) },
      { loc: "/quiz" },
      { loc: "/tools/fish-weight-calculator" },
      { loc: "/about" },
      { loc: "/support" },
      { loc: "/obalus-partner" },
    ],
    blog: posts.map((p) => ({ loc: `/blog/${p.id}`, lastmod: day(p.data.updated ?? p.data.published) })),
    species: species.map((s) => ({ loc: `/species/${s.id}`, lastmod: day(s.data.updated ?? s.data.published) })),
    states: states.map((s) => ({ loc: statePath(s), lastmod: day(s.data.updated ?? s.data.published) })),
    quizzes: QUIZZES.map((q) => ({ loc: `/quiz/${q.slug}`, lastmod: q.published })),
  };
}

export const urlset = (urls: Url[]) =>
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `  <url><loc>${SITE}${u.loc === "/" ? "/" : u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ""}</url>`)
    .join("\n")}\n</urlset>\n`;

export const xml = (body: string) => new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
