import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const faq = z.array(z.object({ q: z.string(), a: z.string() })).default([]);
const sources = z
  .array(z.object({ title: z.string(), url: z.string().url(), publisher: z.string().optional() }))
  .default([]);
/**
 * Hero art spec, rendered by tools/art.mjs into src/assets/art/<collection>/<slug>.jpg and public/og/...:
 *   species:<species-slug>  public-domain USFWS illustration on the topo backdrop
 *   state:<state-slug>      state outline on the topo backdrop
 *   icons:<lucide>,<lucide> gold line icons on the topo backdrop
 *   screen:<hero|catch-log|leaderboard|conditions|map>  app screenshot in a phone
 */
const art = z.string().regex(/^(species|state|icons|screen):[a-z0-9,-]+$/);

const common = {
  title: z.string().max(80),
  /** <title> when it should differ from the H1 (keep ≤ 60 chars). */
  seoTitle: z.string().max(70).optional(),
  description: z.string().min(110).max(170),
  keyword: z.string(),
  published: z.coerce.date(),
  updated: z.coerce.date().optional(),
  art,
  heroAlt: z.string(),
  lede: z.string(),
  takeaways: z.array(z.string()).default([]),
  faq,
  sources,
  /** Mid-article app CTA copy; defaults per collection. */
  cta: z.object({ title: z.string(), text: z.string() }).optional(),
  draft: z.boolean().default(false),
};

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    ...common,
    category: z.enum(["how-to", "apps", "tips", "gear", "conditions", "beginners", "records"]),
    kind: z.enum(["listicle", "guide", "comparison", "explainer"]),
    related: z.array(z.string()).default([]),
    states: z.array(z.string()).default([]),
    species: z.array(z.string()).default([]),
  }),
});

const species = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/species" }),
  schema: z.object({
    ...common,
    name: z.string(),
    scientific: z.string(),
    family: z.string(),
    /** Short facts table shown at the top. */
    facts: z.array(z.object({ label: z.string(), value: z.string() })),
    related: z.array(z.string()).default([]),
    states: z.array(z.string()).default([]),
  }),
});

const states = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/states" }),
  schema: z.object({
    ...common,
    state: z.string(),
    type: z.enum(["hub", "best-lakes", "species-seasons", "fishing-license", "state-record-fish", "beginner-spots", "bass-fishing"]),
    /** Short label for the state sub-navigation. */
    nav: z.string().optional(),
    species: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, species, states };
