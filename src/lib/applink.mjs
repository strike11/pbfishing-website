// Shared by site.ts (pages) and rehype-article.mjs (markdown). Keep plain JS so the Astro config can import it.
export const APP_ID = "6773752665";
export const APP_STORE = `https://apps.apple.com/us/app/pb-fishing-catch-compete/id${APP_ID}`;
/** App Store Connect provider token ("pt"): App Store Connect → App Analytics → Campaigns. Empty until known. */
export const APP_STORE_PROVIDER_TOKEN = "";

export const PLAY_ID = "com.uzspowerllc.pbfishing";
export const PLAY_STORE = `https://play.google.com/store/apps/details?id=${PLAY_ID}`;

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

/**
 * Google Play link tagged for attribution. Play reads install attribution from `referrer`,
 * a URL-encoded query string of utm_* params (shows up in Play Console → Acquisition reports).
 */
export function playLink(campaign, content, placement = "inline") {
  const r = new URLSearchParams();
  r.set("utm_source", "pbfishing.app");
  r.set("utm_medium", "organic");
  r.set("utm_campaign", campaign);
  r.set("utm_content", `${content}__${placement}`);
  const p = new URLSearchParams();
  p.set("id", PLAY_ID);
  p.set("referrer", r.toString());
  return `https://play.google.com/store/apps/details?${p.toString()}`;
}
