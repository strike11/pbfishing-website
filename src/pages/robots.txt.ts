// Same rules the Tilda site published (legal pages and the share page stay out of search), plus the sitemap index.
export function GET() {
  return new Response(
    `User-agent: *\nDisallow: /page147409633.html\nDisallow: /eula\nDisallow: /page147516373.html\nDisallow: /privacy-policy\nDisallow: /page255801903.html\nDisallow: /post\nAllow: /\n\nSitemap: https://pbfishing.app/sitemap.xml\n`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
}
