import { getCollection, type CollectionEntry } from "astro:content";
import type { ImageMetadata } from "astro";
import { STATE_PAGES, stateBySlug, statePagePath, type StatePageType } from "@/data/states";

export type Post = CollectionEntry<"blog">;
export type Species = CollectionEntry<"species">;
export type StatePage = CollectionEntry<"states">;

const ART = import.meta.glob<{ default: ImageMetadata }>("/src/assets/art/**/*.{jpg,png,webp}", { eager: true });
const FALLBACK = import.meta.glob<{ default: ImageMetadata }>("/src/assets/brand/hero-water.jpg", { eager: true });

/** Hero image for an entry (rendered by tools/art.mjs). Falls back to the brand water photo. */
export function heroFor(collection: "blog" | "species" | "states" | "quiz" | "pages", id: string): ImageMetadata {
  const key = Object.keys(ART).find((k) => k.replace(/\.(jpg|png|webp)$/, "").endsWith(`/art/${collection}/${id}`));
  return (key ? ART[key] : Object.values(FALLBACK)[0]).default;
}
export const ogFor = (collection: string, id: string) => `/og/${collection}/${id}.jpg`;

export const CATEGORY_LABEL: Record<Post["data"]["category"], string> = {
  "how-to": "How-to guides",
  apps: "Fishing apps",
  tips: "Tips & tactics",
  gear: "Gear & lures",
  conditions: "Weather & conditions",
  beginners: "Beginners",
  records: "Records & PBs",
};
export const CATEGORY_BLURB: Record<Post["data"]["category"], string> = {
  "how-to": "Step-by-step guides for the things anglers actually get stuck on: measuring a fish, finding a spot, rigging, releasing.",
  apps: "Honest comparisons of fishing apps, what each is good at, and what it costs.",
  tips: "Tactics that put more fish in the boat, from bite windows to reading structure.",
  gear: "Lures, line and tackle, chosen by season, water and species.",
  conditions: "Weather, pressure, wind, moon and water temperature, and how much each really matters.",
  beginners: "Everything a first-season angler needs: gear, licences, spots and the first fish.",
  records: "Personal bests, state records and how to measure and log a fish that counts.",
};

const live = <T extends { data: { draft: boolean } }>(e: T) => !e.data.draft;
const byDate = <T extends { data: { published: Date } }>(a: T, b: T) => +b.data.published - +a.data.published;

export const allPosts = async () => (await getCollection("blog")).filter(live).sort(byDate);
export const allSpecies = async () => (await getCollection("species")).filter(live).sort((a, b) => a.data.name.localeCompare(b.data.name));
export const allStatePages = async () => (await getCollection("states")).filter(live);

/** State page entries are stored as <state>/<type>.md; the hub is <state>/hub.md. */
export const stateOf = (e: StatePage) => stateBySlug(e.data.state)!;
export const statePath = (e: StatePage) => statePagePath(e.data.state, e.data.type as StatePageType);

export async function statePagesFor(state: string) {
  const pages = (await allStatePages()).filter((p) => p.data.state === state);
  return STATE_PAGES.map((sp) => ({ ...sp, entry: pages.find((p) => p.data.type === sp.type) })).filter((x) => x.entry);
}

/** Related posts: hand-picked first, then same category, then newest. */
export async function relatedPosts(post: Post, n = 3) {
  const posts = await allPosts();
  const picked = post.data.related.map((s) => posts.find((p) => p.id === s)).filter((p): p is Post => !!p && p.id !== post.id);
  const same = posts.filter((p) => p.id !== post.id && p.data.category === post.data.category && !picked.includes(p));
  const rest = posts.filter((p) => p.id !== post.id && !picked.includes(p) && !same.includes(p));
  return [...picked, ...same, ...rest].slice(0, n);
}

export function wordCount(body: string | undefined) {
  return (body ?? "").replace(/```[\s\S]*?```/g, "").replace(/[#>*_|`[\]()-]/g, " ").split(/\s+/).filter(Boolean).length;
}
export const readingMinutes = (body: string | undefined) => Math.max(3, Math.round(wordCount(body) / 230));

/** Strip the light Markdown used in FAQ answers for JSON-LD. */
export const plain = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/[*_`]/g, "");

/** Inline Markdown (bold, italics, links) for short strings like ledes, takeaways and FAQ answers. */
export function inline(s: string) {
  const esc = s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return esc
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, t, u) => `<a href="${u}"${/^https?:/.test(u) && !u.includes("pbfishing.app") ? ' rel="noopener"' : ""}>${t}</a>`)
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*([^*]+)\*/g, "$1<em>$2</em>");
}
