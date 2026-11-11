# PB Fishing content brief

Read this whole file before writing. Also read `research/customer-voice.md` (Russian prose, English quotes): every page must answer a real pain, question or phrase from it. Use anglers' own vocabulary (PB, skunked, bite window, honey hole, dink, hawg, bank fishing, bump board).

Goal: outrank Fishbrain, FishAngler, Fishbox, Fishing Points, BassForecast, state-agency pages and big media (Bassmaster, Wired2Fish, Take Me Fishing) for the target query by being **more specific, more honest and more useful**, then move the reader to the PB Fishing iOS app.

Google's scaled-content-abuse and helpful-content rules apply. A page that would read the same with another state, lake or species name swapped in is a failure. Each page must contain facts, numbers, names, tables and judgement that only belong on that page.

## Product facts you may use (and nothing beyond them)

PB Fishing (iPhone, iOS 17.6+; no Android) by UZSPOWER LLC.
- Photo-backed catch log: snap a side-profile photo; log species, length, weight; the app helps identify the species and estimate length from the photo. Date, water and a conditions snapshot (weather, pressure) are saved with the catch.
- Catches logged with no signal are stored on the phone and uploaded when you're back online.
- Personal bests per species, tracked automatically.
- Leaderboards by species: national and state ("Local"). Rankings reset every six months (seasons, e.g. "Season H1 2026"). A leaderboard entry shows angler name, **state**, length and weight. It does **not** show the lake or coordinates.
- 20,000+ named US waters with species, seasonal activity, community ratings, live conditions and a bite forecast; trip planner; tackle guidance; links to each state's official license/regulation pages.
- Community: 24-hour stories, feed (For You / Following), likes, comments, saves.
- Free forever: unlimited catch logging, 5 photo identifications, top-10 leaderboard preview, daily bite forecast, trip planner up to 2 trips.
- Premium: $3.99/month or $29.99/year (7-day free trial on yearly; "$2.50 a month"). Adds unlimited photo IDs, hourly bite forecast + species odds, full national leaderboard, catch insights & trends, advanced stats, predictive hotspots, unlimited trips, 10-day weather & catch history. Billed by Apple; cancel in iPhone Settings → Subscriptions.

Never claim: "verified" records (say **photo-backed**), accuracy numbers, user counts beyond "12,000+ anglers" (avoid even that in articles), ratings, "learns from your history", CSV export, Android, "never get skunked", that spots are private in the feed/community. Don't put "AI" in titles or headings.

## Voice

- Rugged, community, honest. Plain American English, short sentences, second person. Sound like an experienced angler at the ramp, not a marketer.
- No hype words: ultimate, game-changer, unlock, elevate, dive in, delve, unleash, revolutionize, seamless, "in today's world". No em-dash chains. No emoji.
- Specific beats general: name lakes, lures with weights and colors, depths, water temps (°F), months, real records with weight, angler and date.
- Admit limits and trade-offs, including where a competitor is better (customer-voice §7 "Где не стоит спорить").
- Competitors: nominative, factual, dated ("as of November 2026, Fishbrain Pro lists at $79.99/year in the US App Store"). No mockery, no logos, no screenshots of their apps. Verify prices on the App Store pages (`https://apps.apple.com/us/app/...`) before stating them; if you can't verify, say "about" and cite where you saw it.
- App mentions: one natural mention in the body where it truly solves the problem being discussed, plus the automatic CTA blocks the template adds. No more. The article must be worth reading for someone who never installs the app.

## Facts, sources, safety

- Every regulation, fee, season, limit, record, stocking claim and statistic must come from a source you actually opened (state agency site or PDF, USFWS, NOAA, IGFA, peer-reviewed or university extension pages, RBFF/Take Me Fishing). Put the important ones in `sources` frontmatter (title, url, publisher). Prefer official URLs.
- Licence pages: state "as of November 2026 (checked on the agency site)". Give resident/non-resident prices, age exemptions, free fishing days, where to buy, what counts as fishing, saltwater vs freshwater, and link to the exact agency page. If a fact can't be confirmed, leave it out rather than guess.
- Records: weight (lb-oz), angler, water, date, from the agency's record list. Note line-class/method categories if the state has them.
- Quotes from research: you may paraphrase pains ("anglers on r/bassfishing complain that...") but never invent testimonials or present research quotes as reviews of PB Fishing. Max one short quote (<15 words) per page, attributed to the subreddit or app store.
- Safety: ice thickness, boating, and consumption advisories get a one-line pointer to the official source when relevant.

## Files and frontmatter

Markdown files, UTF-8, no MDX. The H1 comes from `title`; **do not write an H1 in the body**. Start the body with a paragraph, then `##` sections. Use `###` for sub-sections. GitHub tables are welcome (they get a scrollable styled wrapper). Use `> ` for a single pull quote at most. Use plain Markdown links for internal links (`/blog/slug`, `/fishing/texas/best-lakes`, `/species/walleye`, `/quiz/slug`, `/tools/fish-weight-calculator`).

Callout boxes: write a raw HTML paragraph exactly like `<p class="callout"><strong>Tip:</strong> text</p>` or `<p class="callout warn"><strong>Check first:</strong> text</p>`. Max two per page.

Common fields (all collections):

```yaml
title: "Best Fishing Apps of 2026: Honest Picks for iPhone"   # H1, ≤ 80 chars, sentence case or title case consistently
seoTitle: "Best Fishing Apps 2026: Free vs Paid, Honestly Compared"  # optional <title>, ≤ 60 chars ideal (site name is appended)
description: "140–165 characters. Answers the query and gives a reason to click. No quotes inside unless escaped."
keyword: "best fishing apps"          # primary query
published: 2026-11-11
updated: 2026-11-11                   # optional
art: "icons:smartphone,trophy,map"    # hero art spec, see below
heroAlt: "Gold line drawing of a phone, trophy and map over lake contour lines"
lede: "One or two sentences under the H1. Inline **bold** and [links](/x) allowed."
takeaways:                            # 3–5 bullets, the short answer (featured-snippet bait)
  - "..."
faq:                                  # 3–6 real questions, preferably verbatim People-also-ask from the research
  - q: "Is Fishbrain free?"
    a: "Answer in 1–3 sentences. Inline links allowed."
sources:
  - title: "Fishing License Requirements"
    url: "https://tpwd.texas.gov/..."
    publisher: "Texas Parks and Wildlife Department"
cta:                                  # optional custom copy for the mid-article app box
  title: "Short headline tied to this page's pain"
  text: "One or two sentences, honest, using only the product facts above."
```

`art` options (the illustration pipeline renders them; pick what fits):
- `species:<slug>`: public-domain fish illustration. Slugs available: largemouth-bass, smallmouth-bass, spotted-bass, striped-bass, white-bass, white-crappie, black-crappie, bluegill, redear-sunfish, pumpkinseed, channel-catfish, blue-catfish, flathead-catfish, rainbow-trout, brown-trout, brook-trout, lake-trout, walleye, sauger, muskellunge, yellow-perch, common-carp, red-drum, spotted-seatrout, alligator-gar, paddlefish.
- `state:<state-slug>`: the state outline.
- `icons:<lucide>,<lucide>[,<lucide>]`: 1–3 Lucide icon names (https://lucide.dev, check the name exists in `node_modules/lucide-static/icons/<name>.svg`), e.g. `smartphone`, `trophy`, `ruler`, `scale`, `thermometer`, `moon`, `wind`, `cloud-rain`, `gauge`, `map`, `map-pin`, `compass`, `fish`, `fishing-hook`, `fishing-rod`, `notebook-pen`, `calendar-days`, `sun`, `anchor`, `waves`, `camera`, `badge-check`, `file-badge`, `life-buoy`.
- `screen:<hero|catch-log|leaderboard|conditions|map>`: a real PB Fishing screenshot in a phone (use only on app-focused posts).

### Blog posts → `src/content/blog/<slug>.md`, URL `/blog/<slug>`

Extra fields:
```yaml
category: apps            # how-to | apps | tips | gear | conditions | beginners | records
kind: listicle            # listicle | guide | comparison | explainer
related: [other-slug, other-slug]   # 2–4 blog slugs from the plan below
states: [texas, florida]  # optional pilot states this post is relevant to
species: [largemouth-bass] # optional species slugs (see species list)
```
Listicles: each item is an `## 1. Name` heading (number, dot, space) so the page gets ItemList structured data.

### Species guides → `src/content/species/<slug>.md`, URL `/species/<slug>`

Extra fields:
```yaml
name: "Largemouth bass"
scientific: "Micropterus salmoides"
family: "Sunfish family (Centrarchidae)"
facts:   # 6–9 rows shown as a table at the top
  - { label: "Average size", value: "1–3 lb, 12–18 in" }
  - { label: "World record", value: "22 lb 4 oz, George Perry, Montgomery Lake, Georgia, 1932 (tied: Manabu Kurita, Lake Biwa, Japan, 2009)" }
related: [blog-slug]
states: [texas, florida]   # pilot states with good fishing for it
```

### State pages → `src/content/states/<state>/<type>.md`

`type` values and file names (URL in brackets):
- `hub.md` → `/fishing/<state>`: overview: what makes the state's fishing distinctive, top species, best regions, seasons at a glance, licence in two lines, links into every sub-page. 900–1,300 words.
- `best-lakes.md` → `/fishing/<state>/best-lakes`: 10–15 lakes/rivers/reservoirs with location (nearest city), size, main species, what each is best for and when, bank/boat access, notable regulations (slot limits). One `##` per water. Table summary at top. 1,800–2,800 words.
- `bass-fishing.md` → `/fishing/<state>/bass-fishing`: bass species present (largemouth/Florida/smallmouth/spotted/Guadalupe...), seasonal pattern by month for that state's climate, top bass waters, lures that work there, regulations specific to bass, trophy programs (e.g. ShareLunker, TrophyCatch). 1,500–2,200 words.
- `species-seasons.md` → `/fishing/<state>/fish-species-seasons`: month-by-month calendar table (what bites, where), 8–12 key species with a short section each, spawning periods, closed seasons. 1,500–2,200 words.
- `fishing-license.md` → `/fishing/<state>/fishing-license`: who needs one, exemptions (age, seniors, disabled, military, free days, private ponds), prices table resident/non-resident/short-term/lifetime, saltwater vs freshwater endorsements, how to buy (online, phone, retailers), carry digital, penalties if documented, key general rules (limits pointer), links. 1,200–1,800 words. Every number sourced.
- `state-record-fish.md` → `/fishing/<state>/state-record-fish`: records table (species, weight, angler, water, year) for 12–25 popular species straight from the agency list, the stories behind 3–4 notable records, how to submit a record (certified scale, witnesses, ID), how rare a trophy is, link to the agency list. 1,200–1,800 words.
- `beginner-spots.md` → `/fishing/<state>/beginner-fishing-spots`: 10–15 easy-access spots near major cities (piers, stocked park ponds, community fishing programs, state parks with loaner tackle), what you'll catch, family tips, free fishing days, simple rigs. 1,300–2,000 words.

Extra fields:
```yaml
state: texas
type: best-lakes
species: [largemouth-bass, crappie]   # species slugs for cross-links
```
The template adds: state sub-navigation, a box linking the official agency, FAQ, sources, CTA, links to the other state pages. In the body, link to sibling pages with the URL patterns above and to relevant blog posts and species guides.

## The URL plan (link only to these, they will exist)

Blog (`/blog/<slug>`):
- apps: best-fishing-apps, is-fishbrain-worth-it, fishbrain-alternatives, pb-fishing-vs-fishbrain, best-fishing-log-apps, fishing-leaderboard-apps
- records: how-to-measure-a-fish, what-is-a-good-size-bass, largemouth-bass-weight-chart, how-to-catch-a-personal-best-bass
- how-to: how-to-release-a-fish, fishing-log-what-to-record, how-to-find-fishing-spots
- conditions: best-time-to-fish, do-solunar-tables-work, barometric-pressure-and-fishing, fishing-after-rain-wind-cold-front, water-temperature-and-fish-activity
- beginners: fishing-for-beginners, do-you-need-a-fishing-license-for-catch-and-release
- tips: why-am-i-not-catching-fish, 90-10-rule-fishing
- gear: best-bass-lures-by-season

Species (`/species/<slug>`): largemouth-bass, smallmouth-bass, crappie, channel-catfish, walleye, bluegill, rainbow-trout.

States (`/fishing/<state>/...`): texas, florida, minnesota, michigan, tennessee, each with the seven pages above. Hubs: `/fishing`, `/species`, `/blog`, `/quiz`.

Tool: `/tools/fish-weight-calculator` (length → weight by species, plus length-and-girth formula).

Quizzes (`/quiz/<slug>`): what-kind-of-angler-are-you, bass-lure-picker, freshwater-or-saltwater, speak-angler, guess-the-weight, would-you-catch-fish-today, fishing-iq.

## Before you finish

Run `node tools/validate-content.mjs <your files>` and fix every error. Don't run `npm run build` or `astro` commands (other writers share the folder). Don't edit files outside your assignment. Don't commit.
