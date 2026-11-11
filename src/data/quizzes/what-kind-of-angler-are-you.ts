import type { Quiz } from "../quiz-types";

const quiz: Quiz = {
  slug: "what-kind-of-angler-are-you",
  title: "What kind of angler are you?",
  seoTitle: "What Kind of Angler Are You? 7-Question Fishing Quiz",
  description: "Seven quick questions about how you fish, what you chase and what makes a good day. Find your angler type and the next step that fits it.",
  intro: "Some anglers want one giant fish. Some want to beat everyone at the ramp. Some just want to see new water. Seven questions, about a minute, and you get the habits that fit your type.",
  kind: "personality",
  icon: "fish",
  tint: "steel",
  minutes: 1,
  keyword: "what kind of angler are you quiz",
  art: "icons:fish,trophy,map",
  published: "2026-11-11",
  questions: [
    {
      q: "It's 5 a.m. Why are you up?", sub: "Pick the one that gets you out of bed.", icon: "alarm-clock", tint: "orange",
      options: [
        { label: "A bigger fish than my last one", sub: "The PB isn't going to beat itself", icon: "arrow-up-circle", tint: "gold", scores: { "trophy-hunter": 3 } },
        { label: "Weigh-in is at 3 p.m.", sub: "Points, bags, standings", icon: "trophy", tint: "orange", scores: { "tournament-grinder": 3 } },
        { label: "A lake I've never fished", sub: "New water, new questions", icon: "map", tint: "forest", scores: { explorer: 3 } },
        { label: "The bite should be on", sub: "I've been tracking the pattern", icon: "line-chart", tint: "steel", scores: { "pattern-keeper": 3 } },
        { label: "My buddy said he'd drive", sub: "And I'm still learning", icon: "users", tint: "navy", scores: { "first-season": 3 } },
      ],
    },
    {
      q: "What does a great day look like?", icon: "sun", tint: "gold",
      options: [
        { label: "One fish. The fish.", sub: "Zero bites and one giant is a win", icon: "medal", tint: "gold", scores: { "trophy-hunter": 3 } },
        { label: "Five keepers that add up", sub: "Consistency wins", icon: "scale", tint: "orange", scores: { "tournament-grinder": 3 } },
        { label: "Three spots, three species", sub: "Variety is the fun part", icon: "compass", tint: "forest", scores: { explorer: 3 } },
        { label: "I figured out why they bit", sub: "Then it happened twice", icon: "lightbulb", tint: "steel", scores: { "pattern-keeper": 3 } },
        { label: "I didn't get skunked", sub: "A bent rod is a good day", icon: "smile", tint: "navy", scores: { "first-season": 3 } },
      ],
    },
    {
      q: "Someone asks where you caught it.", sub: "Be honest.", icon: "message-circle", tint: "steel",
      options: [
        { label: "\"In the water.\"", sub: "Spots stay secret", icon: "lock", tint: "navy", scores: { "trophy-hunter": 2, "tournament-grinder": 2 } },
        { label: "General area, no pin", sub: "Lake name is fine", icon: "map-pin", tint: "forest", scores: { explorer: 2, "pattern-keeper": 1 } },
        { label: "Water temp, depth, lure", sub: "The how matters more than the where", icon: "thermometer", tint: "steel", scores: { "pattern-keeper": 3 } },
        { label: "I'll tell them everything", sub: "I'd want someone to tell me", icon: "hand-heart", tint: "gold", scores: { "first-season": 2, explorer: 1 } },
      ],
    },
    {
      q: "How do you remember past catches?", icon: "book-open", tint: "forest",
      options: [
        { label: "A camera roll with 4,000 fish", sub: "Somewhere in there", icon: "images", tint: "steel", scores: { "first-season": 1, explorer: 1, "trophy-hunter": 1 } },
        { label: "Notebook or spreadsheet", sub: "Date, water, weather, bait", icon: "notebook-pen", tint: "forest", scores: { "pattern-keeper": 3 } },
        { label: "Tournament results", sub: "The scorecard is the memory", icon: "list-ordered", tint: "orange", scores: { "tournament-grinder": 3 } },
        { label: "I remember the big ones", sub: "Every inch of them", icon: "ruler", tint: "gold", scores: { "trophy-hunter": 3 } },
        { label: "I don't, really", sub: "Should I?", icon: "circle-help", tint: "navy", scores: { "first-season": 2 } },
      ],
    },
    {
      q: "Pick a tackle box.", icon: "package", tint: "orange",
      options: [
        { label: "Swimbaits and giant jigs", sub: "Big bait, big fish", icon: "fish", tint: "gold", scores: { "trophy-hunter": 3 } },
        { label: "Rigged rods for every situation", sub: "Seven on the deck, minimum", icon: "layers", tint: "orange", scores: { "tournament-grinder": 3 } },
        { label: "A bit of everything", sub: "Never know what's in the next lake", icon: "shapes", tint: "forest", scores: { explorer: 3 } },
        { label: "Labelled by season and depth", sub: "It's a system", icon: "folder-tree", tint: "steel", scores: { "pattern-keeper": 3 } },
        { label: "Whatever the store guy said", sub: "Worms and bobbers", icon: "shopping-bag", tint: "navy", scores: { "first-season": 3 } },
      ],
    },
    {
      q: "A cold front just blew through.", sub: "Bluebird sky, wind from the north.", icon: "wind", tint: "steel",
      options: [
        { label: "Slow down, go big, wait it out", sub: "The giant still has to eat", icon: "hourglass", tint: "gold", scores: { "trophy-hunter": 2, "pattern-keeper": 1 } },
        { label: "Downsize and grind out a limit", sub: "Finesse until the bag is full", icon: "target", tint: "orange", scores: { "tournament-grinder": 3 } },
        { label: "Perfect time to try somewhere new", sub: "Nothing to lose", icon: "route", tint: "forest", scores: { explorer: 3 } },
        { label: "Check what worked last front", sub: "I logged it", icon: "history", tint: "steel", scores: { "pattern-keeper": 3 } },
        { label: "Is that bad?", sub: "Asking for a friend", icon: "cloud-sun", tint: "navy", scores: { "first-season": 3 } },
      ],
    },
    {
      q: "What would you brag about?", icon: "megaphone", tint: "gold",
      options: [
        { label: "A new personal best", sub: "Measured, photographed, done", icon: "trophy", tint: "gold", scores: { "trophy-hunter": 3 } },
        { label: "Top 3 in my state", sub: "Rank beats words", icon: "bar-chart-3", tint: "orange", scores: { "tournament-grinder": 3 } },
        { label: "Fished 12 lakes this year", sub: "And 9 species", icon: "globe", tint: "forest", scores: { explorer: 3 } },
        { label: "Called the bite before it happened", sub: "The log was right", icon: "calendar-check", tint: "steel", scores: { "pattern-keeper": 3 } },
        { label: "My first keeper", sub: "Everyone starts somewhere", icon: "party-popper", tint: "navy", scores: { "first-season": 3 } },
      ],
    },
  ],
  results: [
    {
      slug: "trophy-hunter", title: "The Trophy Hunter", tagline: "You'd trade ten small fish for one fish worth measuring twice.", icon: "trophy", tint: "gold",
      body: [
        "You fish for the number. Not the count of fish, the length and weight of one of them. You'll throw a big swimbait all day for two bites because one of them might be the fish you talk about for a decade.",
        "Trophy hunters tend to fish **big-fish water at big-fish times**: pre-spawn, the first warm days of spring, the low-light hours, the last hour before a front. The catch is that big fish are rare by definition, so the only way to know you're getting better is to measure honestly and keep the record.",
        "The common mistake: estimating. A 7-pound bass loses or gains a pound every time the story is told. A side-profile photo on a board settles it.",
      ],
      tips: [
        "Measure every fish you'd want to remember on a flat board, mouth closed, tail pinched. See [how to measure a fish](/blog/how-to-measure-a-fish).",
        "Use a length-to-weight formula when you don't carry a scale: [fish weight calculator](/tools/fish-weight-calculator).",
        "Fish the pre-spawn window in your state; the heaviest bass of the year are caught then.",
        "Know your state record so you know what a real giant looks like: [Texas](/fishing/texas/state-record-fish), [Florida](/fishing/florida/state-record-fish).",
      ],
      links: [
        { href: "/blog/how-to-measure-a-fish", label: "How to measure a fish (and get it right)" },
        { href: "/tools/fish-weight-calculator", label: "Fish weight calculator" },
        { href: "/species/largemouth-bass", label: "Largemouth bass guide" },
      ],
      app: { title: "A PB that holds up", text: "PB Fishing keeps your personal best per species, backed by the photo, the length and the conditions. When the next one beats it, you'll know by how much." },
    },
    {
      slug: "tournament-grinder", title: "The Tournament Grinder", tagline: "Five fish, a full livewell and a number on the board. Every trip is a weigh-in.", icon: "bar-chart-3", tint: "orange",
      body: [
        "You fish to compete, even when nobody else knows it's a competition. You'd rather have a solid limit than gamble on one bite, and you change baits, depths and spots fast when it isn't working.",
        "Grinders get better through **reps and feedback**. The feedback most anglers never get is where they actually stand: against the guys at the club, against the state, against last season's version of themselves.",
        "The trap is chasing everyone else's spots. Burned spots get pressured. The anglers who climb fish their own patterns and track them.",
      ],
      tips: [
        "Rig rods for the three patterns that cover most of a day: moving bait, bottom bait, finesse.",
        "After each trip, write down the water temp, depth and bait for every fish over your average size.",
        "Practice culling: know the length of your smallest fish in the well.",
        "Read [bass fishing by state](/fishing/texas/bass-fishing) before travelling to a new circuit lake.",
      ],
      links: [
        { href: "/blog/best-bass-lures-by-season", label: "Best bass lures by season" },
        { href: "/fishing", label: "Fishing guides by state" },
        { href: "/quiz/bass-lure-picker", label: "Quiz: which bass lure fits today?" },
      ],
      app: { title: "Rankings backed by photos", text: "PB Fishing ranks photo-backed catches by species on state and national leaderboards that reset every six months, so a new season is always a fresh shot." },
    },
    {
      slug: "explorer", title: "The Explorer", tagline: "The best spot is the one you haven't fished yet.", icon: "compass", tint: "forest",
      body: [
        "For you, the fun is the first cast on unfamiliar water. You read the map, guess where the fish should be, and find out. A new species is worth more than a bigger version of an old one.",
        "Explorers catch fewer fish per trip than people who pound one lake, and that's fine. What helps is **doing the homework before the drive**: what lives in that water, what the regulations are, where the public access is.",
        "The risk is the long drive to a skunk. A little research about seasons and access points cuts that down a lot.",
      ],
      tips: [
        "Pick a state guide and fish one new lake from its list each month: [Minnesota](/fishing/minnesota/best-lakes), [Michigan](/fishing/michigan/best-lakes), [Tennessee](/fishing/tennessee/best-lakes).",
        "Check license and special regulations before you cross a state line: some waters have their own limits.",
        "Keep a species list. Trying for a new species is the fastest way to learn new techniques.",
        "Start each new water at the obvious structure: points, inlets, weed edges, docks.",
      ],
      links: [
        { href: "/fishing", label: "Fishing guides by state" },
        { href: "/blog/how-to-find-fishing-spots", label: "How to find good fishing spots" },
        { href: "/species", label: "Species guides" },
      ],
      app: { title: "20,000+ named waters, one map", text: "PB Fishing has 20,000+ US waters with species, conditions and a bite forecast, plus a trip planner and links to each state's license page." },
    },
    {
      slug: "pattern-keeper", title: "The Pattern Keeper", tagline: "You don't believe in luck. You believe in water temperature.", icon: "line-chart", tint: "steel",
      body: [
        "You want to know **why** the fish bit, so you can make it happen again. You notice the wind direction, the pressure trend, the depth, the time of day. You probably have a notebook somewhere, or wish you'd kept one.",
        "This is the type that improves fastest over the years, because every trip adds data. The limit is how well that data is kept: notes on paper get lost, and photos in a camera roll don't remember the weather.",
        "The trick is logging the boring trips too. The days you didn't catch tell you as much as the days you did.",
      ],
      tips: [
        "Log every catch with water, time, temperature, wind and bait. Five fields is enough.",
        "Compare your best days: same moon phase? Same wind? Same week of the year?",
        "Read up on what really moves the bite: [barometric pressure and fishing](/blog/barometric-pressure-and-fishing).",
        "Use [water temperature](/blog/water-temperature-and-fish-activity) as your seasonal calendar, not the date.",
      ],
      links: [
        { href: "/blog/fishing-log-what-to-record", label: "What to record in a fishing log" },
        { href: "/blog/best-time-to-fish", label: "The best time to fish, by season" },
        { href: "/blog/barometric-pressure-and-fishing", label: "Barometric pressure and fishing" },
      ],
      app: { title: "Your log does the remembering", text: "Every PB Fishing catch saves the date, water and conditions automatically, and Premium insights show the patterns behind your best fish." },
    },
    {
      slug: "first-season", title: "The First-Season Angler", tagline: "Everybody started here. The fish don't know you're new.", icon: "sprout", tint: "navy",
      body: [
        "You're early in the journey, and that's the best place to be: every trip teaches you something. You don't need expensive gear. You need a license, a simple rod, live bait or a few basic lures, and water where fish are easy to reach from shore.",
        "Most beginners quit after a few skunked trips because nobody told them **when and where** to go. Fish early or late, near structure, and in spring and fall when fish are shallow.",
        "Keep a photo of every fish. Your first year of catches is the baseline you'll measure everything against.",
      ],
      tips: [
        "Start with [fishing for beginners: what you actually need](/blog/fishing-for-beginners).",
        "Get the right license first; most states sell them online in five minutes. See [Texas](/fishing/texas/fishing-license) or [Florida](/fishing/florida/fishing-license).",
        "Fish for bluegill and crappie first. They're everywhere and they bite.",
        "Try a stocked park pond or a beginner spot from your state guide: [Minnesota beginner spots](/fishing/minnesota/beginner-fishing-spots).",
      ],
      links: [
        { href: "/blog/fishing-for-beginners", label: "Fishing for beginners" },
        { href: "/fishing", label: "Find your state guide" },
        { href: "/quiz/freshwater-or-saltwater", label: "Quiz: freshwater or saltwater?" },
      ],
      app: { title: "Your first PB starts the log", text: "PB Fishing is free for catch logging. Snap a photo, the app helps identify the species and estimate the length, and your first fish becomes your first personal best." },
    },
  ],
  faq: [
    { q: "Is this quiz scientific?", a: "No. It's a quick way to name what you already enjoy about fishing and to point you to guides that fit it. Most anglers are a mix of two types." },
    { q: "Can my angler type change?", a: "Yes, and it usually does. Many anglers start as first-season anglers, become explorers, and end up keeping patterns or chasing trophies." },
  ],
};
export default quiz;
