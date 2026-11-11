import type { Quiz } from "../quiz-types";

const quiz: Quiz = {
  slug: "fishing-iq",
  title: "What's your fishing IQ?",
  seoTitle: "Fishing IQ Quiz: Records, Biology, Knots and Rules",
  description: "World records, fish biology, knots, licenses, slot limits and species ID. Ten questions, each with a sourced answer. How much do you really know about fishing?",
  intro: "Ten questions that separate the people who fish from the people who know fishing: world records and their strange histories, how fish sense the world, knots, rules and ID. Every answer comes with the facts behind it.",
  kind: "trivia",
  icon: "brain",
  tint: "navy",
  minutes: 3,
  keyword: "fishing trivia quiz",
  art: "icons:brain,trophy,fish",
  published: "2026-11-11",
  questions: [
    {
      q: "How heavy is the world-record largemouth bass?", icon: "trophy", tint: "gold",
      options: [
        { label: "18 lb 2 oz", icon: "scale", tint: "steel" },
        { label: "20 lb 0 oz", icon: "scale", tint: "forest" },
        { label: "22 lb 4 oz", icon: "trophy", tint: "gold", correct: true },
        { label: "25 lb 1 oz", icon: "scale", tint: "orange" },
      ],
      explain: "**22 lb 4 oz.** George Perry caught it at Montgomery Lake, Georgia, on June 2, 1932. It's the most famous record in freshwater fishing. See the [largemouth bass guide](/species/largemouth-bass).",
    },
    {
      q: "Who shares that largemouth world record with George Perry?", icon: "users", tint: "steel",
      options: [
        { label: "Nobody. Perry's fish stands alone", sub: "Unbeaten since 1932", icon: "user", tint: "navy" },
        { label: "Manabu Kurita, Lake Biwa, Japan", sub: "Caught in 2009", icon: "globe", tint: "gold", correct: true },
        { label: "A California angler", sub: "Caught in the 1990s", icon: "sun", tint: "orange" },
        { label: "A Texas ShareLunker angler", sub: "Caught in the 1980s", icon: "star", tint: "forest" },
      ],
      explain: "Manabu Kurita caught a 22 lb 4 oz (10.12 kg) bass at Lake Biwa on July 2, 2009, and the IGFA recognized it as a tie in January 2010. It was slightly heavier than Perry's fish, but IGFA rules require a record under 25 lb to be beaten by at least 2 ounces.",
    },
    {
      q: "The world-record smallmouth, 11 lb 15 oz from Dale Hollow Lake in 1955, has an odd history. What happened?", icon: "history", tint: "orange",
      options: [
        { label: "It was weighed on a grocery scale and rounded up", sub: "Then corrected", icon: "scale", tint: "steel" },
        { label: "Thrown out in 1996, reinstated in 2005", sub: "After a cheating claim was rejected", icon: "rotate-ccw", tint: "orange", correct: true },
        { label: "It was later found to be a largemouth", sub: "Misidentified", icon: "search", tint: "forest" },
        { label: "Nothing. It's never been questioned", sub: "Clean since 1955", icon: "check-circle-2", tint: "navy" },
      ],
      explain: "David Hayes's smallmouth was struck from the IGFA record book in 1996 after an affidavit claimed weight had been added to it, and John Gorman's 10 lb 14 oz Dale Hollow fish took its place. In 2005 the IGFA reinstated Hayes after new evidence, including polygraph results. Hayes caught it on July 9, 1955; Dale Hollow sits on the Tennessee–Kentucky line.",
    },
    {
      q: "What does a fish's lateral line do?", icon: "activity", tint: "steel",
      options: [
        { label: "Senses vibration and water movement", sub: "Like touch at a distance", icon: "activity", tint: "steel", correct: true },
        { label: "Helps the fish breathe", sub: "Pulls oxygen from water", icon: "wind", tint: "forest" },
        { label: "Controls buoyancy", sub: "Fills the swim bladder", icon: "gauge", tint: "navy" },
        { label: "Shows the fish's age", sub: "Like tree rings", icon: "ruler", tint: "gold" },
      ],
      explain: "The lateral line is a row of sensory organs that detects movement, vibration and pressure changes in the water. Fish use it to find prey, avoid obstacles and school, which is why rattling and thumping lures work in muddy water.",
    },
    {
      q: "Who guards a largemouth bass nest?", icon: "shield", tint: "forest",
      options: [
        { label: "The female", sub: "She lays and stays", icon: "user", tint: "orange" },
        { label: "The male", sub: "He builds it and guards it", icon: "shield", tint: "forest", correct: true },
        { label: "Both, in shifts", sub: "Taking turns", icon: "users", tint: "steel" },
        { label: "Nobody. Eggs are left alone", sub: "Scattered and abandoned", icon: "circle-off", tint: "navy" },
      ],
      explain: "The male fans out the nest, then guards the eggs and the fry after the female leaves. That's why bedding bass strike at lures: they're defending the nest, not feeding. Some states restrict fishing for bedding bass.",
    },
    {
      q: "You only practice catch and release. Do you need a fishing license?", icon: "file-badge", tint: "gold",
      options: [
        { label: "No. Releasing the fish makes it legal", sub: "You didn't keep anything", icon: "hand", tint: "steel" },
        { label: "Generally yes. Catching is fishing, even if you release", sub: "Unless an exemption applies", icon: "file-badge", tint: "gold", correct: true },
        { label: "Only if you use live bait", sub: "Lures are exempt", icon: "fishing-hook", tint: "forest" },
        { label: "Only on public lakes over 100 acres", sub: "Small water is exempt", icon: "map", tint: "navy" },
      ],
      explain: "In general, a license covers the act of fishing, not keeping fish, so catch and release still requires one. States do have exemptions, such as age limits and free fishing days, and they differ. See [do you need a fishing license for catch and release](/blog/do-you-need-a-fishing-license-for-catch-and-release).",
    },
    {
      q: "Which knot is this?", sub: "Double the line, pass it through the eye, tie a loose overhand knot, then pass the loop over the lure.", icon: "spline", tint: "orange",
      options: [
        { label: "Improved clinch knot", icon: "spline", tint: "steel" },
        { label: "Palomar knot", icon: "spline", tint: "orange", correct: true },
        { label: "Uni knot", icon: "spline", tint: "forest" },
        { label: "Blood knot", icon: "spline", tint: "navy" },
      ],
      explain: "That's the **Palomar**: a doubled line through the eye, an overhand knot, and the loop pulled over the lure. It's simple, strong and a favorite for braid and drop shots. The improved clinch uses wraps around the standing line instead.",
    },
    {
      q: "A lake has a 14 to 18 inch protected slot on bass. You catch a 16-incher.", sub: "Example numbers, not a real lake.", icon: "ruler", tint: "steel",
      options: [
        { label: "Keep it. It's in the slot", sub: "Slot means legal", icon: "check-circle-2", tint: "orange" },
        { label: "Release it", sub: "Protected means it goes back", icon: "undo-2", tint: "forest", correct: true },
        { label: "Keep it only if it's your first fish", sub: "One per day", icon: "calendar-days", tint: "gold" },
        { label: "It depends on the weight", sub: "Slots are in pounds", icon: "scale", tint: "navy" },
      ],
      explain: "A **protected slot** means fish inside that length range must be released; you may keep fish shorter or longer, within the bag limit. Agencies use slots to protect the size class that does most of the spawning or to grow bigger fish. Always measure on a flat board: [how to measure a fish](/blog/how-to-measure-a-fish).",
    },
    {
      q: "Bass ID: with its mouth closed, the upper jaw reaches past the back of the eye. What did you catch?", icon: "search", tint: "forest",
      options: [
        { label: "Largemouth bass", icon: "fish", tint: "forest", correct: true },
        { label: "Smallmouth bass", icon: "fish", tint: "orange" },
        { label: "Spotted bass", icon: "fish", tint: "gold" },
        { label: "White bass", icon: "fish", tint: "steel" },
      ],
      explain: "A **largemouth**'s upper jaw extends past the rear edge of the eye. On smallmouth and spotted bass it does not reach past the eye. Largemouth also have a deep notch between the two parts of the dorsal fin. See the [largemouth](/species/largemouth-bass) and [smallmouth](/species/smallmouth-bass) guides.",
    },
    {
      q: "A crappie has 7 spines on its dorsal fin. Which crappie is it?", icon: "fish", tint: "navy",
      options: [
        { label: "White crappie", icon: "fish", tint: "steel" },
        { label: "Black crappie", icon: "fish", tint: "navy", correct: true },
        { label: "Can't tell without a DNA test", icon: "circle-help", tint: "gold" },
        { label: "Spine count doesn't differ", icon: "equal", tint: "forest" },
      ],
      explain: "Black crappie usually have 7 or 8 dorsal spines; white crappie usually have 6, according to the Michigan and Wisconsin DNRs. Whites also tend to show vertical bars, blacks a random speckle. Hybrids exist, so check a couple of features. See the [crappie guide](/species/crappie).",
    },
  ],
  results: [
    {
      slug: "fishing-professor", title: "Fishing professor", tagline: "Records, biology, rules and knots. You could teach the class.", icon: "graduation-cap", tint: "gold", minScore: 9,
      body: [
        "You know fishing on and off the water: the records and their stories, how fish actually sense and spawn, and the rules most anglers only half know. That's rare.",
        "People who know this much usually care about **doing it right**: measuring honestly, releasing fish well and knowing the regulations before the warden asks.",
      ],
      tips: [
        "Know your own state's record list, not just the world records: [Tennessee](/fishing/tennessee/state-record-fish), [Texas](/fishing/texas/state-record-fish), [Minnesota](/fishing/minnesota/state-record-fish).",
        "Brush up on fish handling: [how to release a fish](/blog/how-to-release-a-fish).",
        "Try the [guess the weight quiz](/quiz/guess-the-weight). It's harder than it looks.",
      ],
      links: [
        { href: "/fishing/tennessee/state-record-fish", label: "Tennessee state record fish" },
        { href: "/blog/how-to-release-a-fish", label: "How to release a fish" },
        { href: "/quiz/guess-the-weight", label: "Quiz: guess the weight" },
      ],
      app: { title: "Records need a photo", text: "Fish stories are free. In PB Fishing, a catch on the leaderboard needs a photo, with the length, weight and state shown. Rankings reset every six months." },
    },
    {
      slug: "seasoned-angler", title: "Seasoned angler", tagline: "You know more than most at the ramp. A trivia detail or two got away.", icon: "award", tint: "orange", minScore: 7,
      body: [
        "You clearly fish a lot and pay attention. The misses here are usually the stranger corners of fishing: the record-book politics, a rule you don't run into often, or an ID detail on a species you rarely catch.",
        "Those details matter more than they seem. Misidentifying a fish or misreading a slot is how honest anglers end up with a ticket.",
      ],
      tips: [
        "Learn the ID features of every species you might keep: the [species guides](/species) are a good place to start.",
        "Before a trip to new water, read the special regulations for that lake.",
        "Check the record history of your state: [Michigan state records](/fishing/michigan/state-record-fish).",
      ],
      links: [
        { href: "/species", label: "Species guides" },
        { href: "/fishing/michigan/state-record-fish", label: "Michigan state record fish" },
        { href: "/blog/how-to-measure-a-fish", label: "How to measure a fish" },
      ],
      app: { title: "Know your water before you go", text: "PB Fishing lists 20,000+ US waters with species and conditions, and links to each state's official license and regulation pages." },
    },
    {
      slug: "solid-basics", title: "Solid basics", tagline: "You know your way around a lake. Time to learn the stories behind it.", icon: "book-open", tint: "steel", minScore: 4,
      body: [
        "You've got the practical side down, and the misses are mostly the trivia and the rules. That's how most anglers learn: on the water first, the details later.",
        "The rules are worth learning on purpose. **Licenses, slot limits and species ID** are where good intentions don't count, and the fixes are quick reads.",
      ],
      tips: [
        "Read [do you need a fishing license for catch and release](/blog/do-you-need-a-fishing-license-for-catch-and-release).",
        "Learn to measure properly: mouth closed, tail pinched, on a flat board. See [how to measure a fish](/blog/how-to-measure-a-fish).",
        "Pick one species and learn it well: the [largemouth bass guide](/species/largemouth-bass).",
      ],
      links: [
        { href: "/blog/do-you-need-a-fishing-license-for-catch-and-release", label: "Do you need a license for catch and release?" },
        { href: "/species/largemouth-bass", label: "Largemouth bass guide" },
        { href: "/quiz/speak-angler", label: "Quiz: do you speak angler?" },
      ],
      app: { title: "Help with the ID", text: "Not sure what you caught? Snap a photo in PB Fishing and the app helps identify the species and estimate the length. The free plan includes 5 photo IDs." },
    },
    {
      slug: "fresh-hook", title: "Fresh hook", tagline: "Lots to learn, and that's the fun part. Every expert started here.", icon: "sprout", tint: "navy", minScore: 0,
      body: [
        "Most of these questions are things anglers pick up over years, so don't sweat the score. You now know the world-record bass weighs 22 lb 4 oz, that bass find lures with their lateral line, and that catch and release generally still needs a license.",
        "The best next step is to fish more and learn one thing per trip. Start with the basics: license, simple gear and easy water.",
      ],
      tips: [
        "Start with [fishing for beginners](/blog/fishing-for-beginners).",
        "Check your state's license rules: [Florida](/fishing/florida/fishing-license), [Tennessee](/fishing/tennessee/fishing-license).",
        "Learn one knot well. The Palomar is the easiest strong one.",
        "Find an easy spot: [Tennessee beginner spots](/fishing/tennessee/beginner-fishing-spots).",
      ],
      links: [
        { href: "/blog/fishing-for-beginners", label: "Fishing for beginners" },
        { href: "/fishing", label: "Fishing guides by state" },
        { href: "/quiz/what-kind-of-angler-are-you", label: "Quiz: what kind of angler are you?" },
      ],
      app: { title: "Start your log free", text: "PB Fishing is free for unlimited catch logging, and links to each state's official license and regulation pages so you can check the rules before you go." },
    },
  ],
  faq: [
    { q: "What is the world record largemouth bass?", a: "22 lb 4 oz, caught by George Perry at Montgomery Lake, Georgia, in 1932, and tied by Manabu Kurita at Lake Biwa, Japan, in 2009. See the [largemouth bass guide](/species/largemouth-bass)." },
    { q: "What is the world record smallmouth bass?", a: "11 lb 15 oz, caught by David Hayes at Dale Hollow Lake on the Tennessee–Kentucky line in 1955. The IGFA removed it in 1996 and reinstated it in 2005. See the [smallmouth bass guide](/species/smallmouth-bass)." },
    { q: "What is a slot limit in fishing?", a: "A length range with special rules. In a protected slot, fish inside the range must be released. The exact numbers are set lake by lake, so check your state's regulations." },
  ],
};
export default quiz;
