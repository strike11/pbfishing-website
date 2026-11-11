// Shared by site.ts (pages) and rehype-article.mjs (markdown). Keep plain JS so the Astro config can import it.
export const APP_ID = "6773752665";
export const APP_STORE = `https://apps.apple.com/us/app/pb-fishing-catch-compete/id${APP_ID}`;
/** App Store Connect provider token ("pt"): App Store Connect → App Analytics → Campaigns. Empty until known. */
export const APP_STORE_PROVIDER_TOKEN = "";

export function appLink(campaign, content, placement = "inline") {
  const ct = `${campaign}-${content}-${placement}`.replace(/[^a-z0-9-]/gi, "-").replace(/-+/g, "-").slice(0, 40);
  const p = new URLSearchParams();
  if (APP_STORE_PROVIDER_TOKEN) p.set("pt", APP_STORE_PROVIDER_TOKEN);
  p.set("ct", ct);
  p.set("mt", "8");
  p.set("utm_source", "pbfishing.app");
  p.set("utm_medium", "organic");
  p.set("utm_campaign", campaign);
  p.set("utm_content", `${content}__${placement}`);
  return `${APP_STORE}?${p.toString()}`;
}
