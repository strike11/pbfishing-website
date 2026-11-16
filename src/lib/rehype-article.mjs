// Rehype plugin for every Markdown page (blog, species, states):
// - wraps tables in a horizontally scrollable box,
// - lazy-loads images,
// - marks external links rel="noopener",
// - inserts one app call to action before the third H2 (or at the end of shorter pages),
//   tagged with the page's campaign so installs can be attributed.
import { appLink, playLink } from "./applink.mjs";

const h = (tagName, properties = {}, children = []) => ({
  type: "element", tagName, properties,
  children: children.map((c) => (typeof c === "string" ? { type: "text", value: c } : c)),
});

const DEFAULTS = {
  blog: {
    title: "Log it once, keep it forever",
    text: "PB Fishing turns every catch into a photo-backed record: species, length, weight, water and conditions. Your personal bests update themselves, and you can see where you rank in your state.",
  },
  species: {
    title: "Track your personal best for this species",
    text: "Snap a side-profile photo and PB Fishing logs the species, length and conditions, then ranks your best fish on state and national leaderboards.",
  },
  states: {
    title: "See who is catching what in your state",
    text: "PB Fishing has a live leaderboard for every state, 20,000+ named US waters and a bite forecast for the one you are heading to. Catch logging is free.",
  },
};

function collectionOf(path) {
  const m = /content\/(blog|species|states)\/(.+)\.md$/.exec(path.replace(/\\/g, "/"));
  if (!m) return null;
  return { collection: m[1], slug: m[2].replace(/\//g, "-").replace(/-index$/, "") };
}

const APPLE_SVG = "M16.37 12.6c-.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.62-1.7-3.19-1.73-1.36-.14-2.65.8-3.34.8-.69 0-1.75-.78-2.88-.76-1.48.02-2.85.86-3.61 2.19-1.54 2.67-.39 6.63 1.11 8.8.73 1.06 1.6 2.25 2.75 2.21 1.1-.04 1.52-.71 2.85-.71 1.33 0 1.71.71 2.88.69 1.19-.02 1.94-1.08 2.66-2.15.84-1.23 1.19-2.42 1.21-2.48-.03-.01-2.32-.89-2.32-3.55zM14.17 6.13c.61-.74 1.02-1.76.91-2.78-.88.04-1.94.59-2.57 1.32-.56.65-1.06 1.69-.93 2.69.98.08 1.98-.5 2.59-1.23z";
const PLAY_PATHS = [
  ["#00a0ff", "M3.61 1.81 13.79 12 3.61 22.19a1.5 1.5 0 0 1-.61-1.24V3.05c0-.52.24-.97.61-1.24z"],
  ["#ffd500", "m17.1 15.31-3.31-3.31 3.31-3.31 3.99 2.27c1.13.64 1.13 1.44 0 2.08l-3.99 2.27z"],
  ["#ff3a44", "M17.1 15.31 13.79 12 3.61 22.19c.37.39.98.44 1.67.05l11.82-6.93z"],
  ["#00f076", "M17.1 8.69 5.28 1.76c-.69-.39-1.3-.34-1.67.05L13.79 12l3.31-3.31z"],
];

/** Same markup as src/components/StoreBadges.astro. */
function storeBadges(campaign, slug, placement) {
  const svg = (children, fill) => h("svg", { viewBox: "0 0 24 24", ariaHidden: "true", ...(fill ? { fill } : {}) }, children);
  return h("div", { className: ["store-badges"] }, [
    h("a", { className: ["store-badge"], href: appLink(campaign, slug, placement), dataCta: placement, dataStore: "apple" }, [
      svg([h("path", { d: APPLE_SVG })], "currentColor"),
      h("span", {}, [h("small", {}, ["Download on the"]), "App Store"]),
    ]),
    h("a", { className: ["store-badge", "store-badge-play"], href: playLink(campaign, slug, placement), dataCta: placement, dataStore: "google" }, [
      svg(PLAY_PATHS.map(([fill, d]) => h("path", { fill, d }))),
      h("span", {}, [h("small", {}, ["GET IT ON"]), "Google Play"]),
    ]),
  ]);
}

function cta(where, fm) {
  const copy = fm?.cta ?? DEFAULTS[where.collection];
  const campaign = where.collection === "states" ? "state" : where.collection;
  return h("aside", { className: ["app-cta"], ariaLabel: "PB Fishing app" }, [
    h("img", { className: ["app-icon"], src: "/brand/pb-logo-192.png", alt: "", width: 64, height: 64, loading: "lazy" }),
    h("div", {}, [
      h("p", { className: ["h3"], role: "heading", ariaLevel: "2" }, [copy.title]),
      h("p", {}, [copy.text]),
      h("div", { className: ["cta-row"] }, [
        storeBadges(campaign, where.slug, "mid"),
        h("span", { className: ["cta-note"] }, ["iPhone and Android · free catch log · Premium optional"]),
      ]),
    ]),
  ]);
}

export function rehypeArticle() {
  return (tree, file) => {
    const where = collectionOf(file.path || file.history?.[0] || "");
    const walk = (node, parent) => {
      if (node.type === "element") {
        if (node.tagName === "table" && parent && !(parent.properties?.className || []).includes("table-scroll")) {
          const i = parent.children.indexOf(node);
          parent.children[i] = h("div", { className: ["table-scroll"], tabIndex: 0, role: "region", ariaLabel: "Table" }, [node]);
          return;
        }
        if (node.tagName === "img") {
          node.properties.loading ??= "lazy";
          node.properties.decoding ??= "async";
        }
        if (node.tagName === "a" && /^https?:\/\//.test(String(node.properties.href || "")) && !String(node.properties.href).includes("pbfishing.app")) {
          node.properties.rel = ["noopener"];
        }
      }
      for (const c of [...(node.children || [])]) walk(c, node);
    };
    walk(tree, null);

    if (!where) return;
    const fm = file.data?.astro?.frontmatter;
    const h2s = tree.children.filter((n) => n.type === "element" && n.tagName === "h2");
    const target = h2s[2] ?? h2s[h2s.length - 1];
    const node = cta(where, fm);
    if (target && h2s.length >= 3) tree.children.splice(tree.children.indexOf(target), 0, node);
    else tree.children.push(node);
  };
}
