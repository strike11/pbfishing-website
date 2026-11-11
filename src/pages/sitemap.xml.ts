import { groups, xml } from "@/lib/sitemap";
import { SITE } from "@/lib/site";
export async function GET() {
  const g = await groups();
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${Object.entries(g)
    .filter(([, urls]) => urls.length)
    .map(([k, urls]) => {
      const last = urls.map((u) => u.lastmod).filter(Boolean).sort().at(-1);
      return `  <sitemap><loc>${SITE}/sitemap-${k}.xml</loc>${last ? `<lastmod>${last}</lastmod>` : ""}</sitemap>`;
    })
    .join("\n")}\n</sitemapindex>\n`;
  return xml(body);
}
