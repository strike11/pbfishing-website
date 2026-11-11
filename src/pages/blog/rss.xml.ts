import { allPosts } from "@/lib/content";
import { SITE } from "@/lib/site";
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
export async function GET() {
  const posts = await allPosts();
  const items = posts.map((p) => `<item><title>${esc(p.data.title)}</title><link>${SITE}/blog/${p.id}</link><guid>${SITE}/blog/${p.id}</guid><pubDate>${p.data.published.toUTCString()}</pubDate><description>${esc(p.data.description)}</description></item>`).join("");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>PB Fishing blog</title><link>${SITE}/blog</link><description>Fishing guides, app comparisons and state guides from PB Fishing.</description><language>en-us</language>${items}</channel></rss>`, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
