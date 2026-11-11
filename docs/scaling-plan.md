# Scaling plan: from the 5-state pilot to all 50 states

## What the pilot proved

- One state = 7 pages (hub, best lakes, bass fishing, species & seasons, license & rules, state records, beginner spots), about 11,000–14,000 researched words, every fee/record/limit sourced to the state agency.
- The template, art pipeline (`tools/art.mjs`), validator (`tools/validate-content.mjs`) and post-build checks scale without code changes. Adding a state is content + one line in `src/data/states.ts`.

## Order (by search demand from research/customer-voice.md §6 and the bass-angler audience)

| Wave | States | Why |
|---|---|---|
| 1 | California, Ohio, North Carolina, Wisconsin, Pennsylvania | Highest autocomplete volume for "fishing license <state>" and "best lakes in <state>" after the pilot |
| 2 | Georgia, Alabama, South Carolina, Missouri, Arkansas | Big bass states (Guntersville, Lake Seminole, Santee Cooper, Table Rock, Bull Shoals) |
| 3 | Oklahoma, Kentucky, New York, Illinois, Indiana | Large licence sales, reservoir bass, Great Lakes |
| 4 | Louisiana, Mississippi, Virginia, Iowa, Kansas | Crappie/catfish/bass, mid-size demand |
| 5 | Colorado, Idaho, Montana, Wyoming, Utah, Oregon, Washington | Trout and fly; the bass page becomes a "trout & bass" page where bass is minor |
| 6 | Arizona, New Mexico, Nevada, Nebraska, South Dakota, North Dakota, West Virginia | Smaller demand |
| 7 | Maine, Vermont, New Hampshire, Massachusetts, Connecticut, Rhode Island, New Jersey, Delaware, Maryland | Northeast; saltwater licence nuances |
| 8 | Alaska, Hawaii | Different species mix; replace "bass fishing" with "salmon" (AK) and "shore fishing" (HI) |

## Effort estimate

| Step | Per state | 45 states |
|---|---|---|
| Research + writing (one writer agent per state, 5 in parallel, same brief as the pilot) | 20–30 min wall time, ~300–450k tokens | 9 waves × ~30 min ≈ 5 h wall time, ~15–20M tokens |
| Art + build + validator | 2 min | ~1.5 h |
| Human fact check (licence fees, records, slot limits: the pages where a mistake costs the reader a fine) | 30–45 min | 25–35 h |
| Total | | about 1 working week for one reviewer, spread over 4–6 weeks of publishing |

## Publishing cadence (avoid a scaled-content footprint)

- Publish 5–10 states a week, not 300 pages at once. Each wave goes live after its fact check.
- Licence and best-lakes pages before the spring rise: Google Trends shows "fishing license" climbing from early April and peaking mid-June. Waves 1–4 should be live by mid-March 2027.
- Watch Search Console per wave: indexed vs submitted, impressions per page type. If a page type underperforms (e.g. beginner spots), improve the template before the next wave rather than multiplying it.
- Re-check fees and records every January (most agencies publish new regulations Jan–Mar). `updated:` in frontmatter drives `dateModified` and the sitemap.

## Next content beyond states

- National listicles that link every state page: "Biggest bass ever caught in each state", "Fishing license cost by state (2027 table)", "Free fishing days by state 2027".
- More species guides (spotted bass, striped bass, northern pike, yellow perch, flathead and blue catfish, brown/brook trout, muskie, redfish, speckled trout) using the public-domain illustrations already downloaded.
- Seasonal: ice fishing app/guide (Oct–Nov), spring pre-spawn bass by state (Feb–Mar).
- More quizzes from research §8.2: "Is it a state record?", "Name that fish", "Legal or not?", "Are you a spot burner?".
