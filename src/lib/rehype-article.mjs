// Rehype plugin for every Markdown page (blog, species, states):
// - wraps tables in a horizontally scrollable box,
// - lazy-loads images,
// - marks external links rel="noopener",
// - inserts one app call to action before the third H2 (or at the end of shorter pages),
//   tagged with the page's campaign so installs can be attributed.
import { appLink } from "./applink.mjs";

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

function cta(where, fm) {
  const copy = fm?.cta ?? DEFAULTS[where.collection];
  const campaign = where.collection === "states" ? "state" : where.collection;
  return h("aside", { className: ["app-cta"], ariaLabel: "PB Fishing app" }, [
    h("img", { className: ["app-icon"], src: "/brand/pb-logo-192.png", alt: "", width: 64, height: 64, loading: "lazy" }),
    h("div", {}, [
      h("p", { className: ["h3"], role: "heading", ariaLevel: "2" }, [copy.title]),
      h("p", {}, [copy.text]),
      h("div", { className: ["cta-row"] }, [
        h("a", { className: ["btn", "btn-gold"], href: appLink(campaign, where.slug, "mid"), dataCta: "mid" }, ["Get PB Fishing free"]),
        h("span", { className: ["cta-note"] }, ["iPhone · free catch log · Premium optional"]),
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
