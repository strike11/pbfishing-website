# pbfishing.app

Marketing site, blog, state fishing guides and quizzes for the PB Fishing iOS app. Static [Astro](https://astro.build) site deployed on Vercel (`pbfishing-website`, team `uzspower-llc`). Migrated from Tilda in November 2026; every Tilda URL still works.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server on http://localhost:4321 |
| `npm run build` | Static build into `dist/`, then `tools/postbuild-check.mjs` (broken links, titles, canonicals, Tilda leftovers) |
| `npm run preview` | Serve `dist/` |
| `node tools/validate-content.mjs [files]` | Lint Markdown content against `docs/content-brief.md` |
| `node tools/art.mjs [--force] [filter]` | Render hero art (`src/assets/art/`) and social cards (`public/og/`) from each page's `art:` field |
| `python3 -I tools/fetch_species_art.py` | Download public-domain fish illustrations (licence checked via the Commons API) |
| `node tools/credits.mjs` | Regenerate `content/image-credits.md` |

## Where things live

- `research/customer-voice.md`: what anglers say (App Store reviews, Reddit, Google). Every page is grounded in it.
- `docs/content-brief.md`: writing rules, product facts, frontmatter, URL plan.
- `src/content/blog/*.md` → `/blog/<slug>`; `src/content/species/*.md` → `/species/<slug>`; `src/content/states/<state>/<type>.md` → `/fishing/<state>[/<page>]`.
- `src/data/quizzes/*.ts` → `/quiz/<slug>` and shareable results at `/quiz/<slug>/<result>` (noindex).
- `src/data/states.ts`: all 50 states + official agencies; `LIVE_STATES` lists states with full guides.
- `src/pages/tools/fish-weight-calculator.astro` uses `src/data/weight-equations.json`.
- Legacy pages kept 1:1 in content: `src/legacy/*.html` (EULA, privacy, Obalus landing, `/post` share card).
- `src/lib/applink.mjs`: every App Store link carries `ct` (App Store Connect campaign token) and `utm_*`. Set `APP_STORE_PROVIDER_TOKEN` to your `pt` value to see installs per campaign in App Store Connect.

## URLs that must keep working

`/eula`, `/privacy-policy`, `/support`, `/obalus-partner`, `/post?id=...` (share card, calls the `post-preview` Supabase function), and the Tilda `/pageNNN` redirects in `vercel.json`.

## Adding a state

1. Add `src/content/states/<state>/{hub,best-lakes,bass-fishing,species-seasons,fishing-license,state-record-fish,beginner-spots}.md` (see the brief).
2. Add the slug to `LIVE_STATES` in `src/data/states.ts` and to `STATES` in `tools/validate-content.mjs`.
3. `node tools/art.mjs && node tools/credits.mjs && npm run build`.
