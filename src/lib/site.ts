export const SITE = "https://pbfishing.app";
export const SITE_NAME = "PB Fishing";
export const ORG = "UZSPOWER LLC";
export const APP_NAME = "PB Fishing: Catch & Compete";
export const SUPPORT_EMAIL = "support@pbfishing.app";

import { APP_ID, APP_STORE, APP_STORE_PROVIDER_TOKEN, appLink as _appLink } from "./applink.mjs";
export { APP_ID, APP_STORE, APP_STORE_PROVIDER_TOKEN };

export type Placement = "header" | "hero" | "inline" | "end" | "sticky" | "footer" | "quiz-result" | "state" | "banner" | "calculator" | "toc" | "mid";

/**
 * App Store link tagged for attribution.
 * - ct (campaign token, max 40 chars) is what App Store Connect reports installs by.
 * - utm_* lets web analytics see the same campaign.
 * `campaign` is the page group (blog, state, quiz, home...), `content` the page slug, `placement` where on the page.
 */
export const appLink = (campaign: string, content: string, placement: Placement = "inline"): string => _appLink(campaign, content, placement);

export const abs = (path: string) => (path.startsWith("http") ? path : `${SITE}${path === "/" ? "" : path}` || SITE);

export const fmtDate = (iso: string | Date) =>
  new Date(typeof iso === "string" ? `${iso.slice(0, 10)}T12:00:00Z` : iso).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric", timeZone: "UTC",
  });

export const isoDate = (d: string | Date) => (typeof d === "string" ? d.slice(0, 10) : d.toISOString().slice(0, 10));

/** The organisation and app entities every page can point at by @id. */
export const ORG_LD = {
  "@type": "Organization",
  "@id": `${SITE}/#org`,
  name: SITE_NAME,
  legalName: ORG,
  url: `${SITE}/`,
  logo: { "@type": "ImageObject", url: `${SITE}/brand/pb-logo-512.png`, width: 512, height: 512 },
  email: SUPPORT_EMAIL,
  sameAs: [APP_STORE],
};

export const APP_LD = {
  "@type": "MobileApplication",
  "@id": `${SITE}/#app`,
  name: APP_NAME,
  operatingSystem: "iOS 17.6 or later",
  applicationCategory: "LifestyleApplication",
  url: APP_STORE,
  downloadUrl: APP_STORE,
  installUrl: APP_STORE,
  image: `${SITE}/brand/pb-logo-512.png`,
  description:
    "Photo-backed fishing log, personal bests, state and national leaderboards, bite forecasts and trip planning for US anglers.",
  publisher: { "@id": `${SITE}/#org` },
  offers: [
    { "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD" },
    { "@type": "Offer", name: "Premium yearly", price: "29.99", priceCurrency: "USD" },
    { "@type": "Offer", name: "Premium monthly", price: "3.99", priceCurrency: "USD" },
  ],
};
