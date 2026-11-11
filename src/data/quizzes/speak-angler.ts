import type { Quiz } from "../quiz-types";

const quiz: Quiz = {
  slug: "speak-angler",
  title: "Do you speak angler? The fishing slang quiz",
  seoTitle: "Fishing Slang Quiz: Do You Speak Angler? (10 Questions)",
  description: "Skunked, hawg, dink, spot burning, googan, bump board. Ten questions on the slang you hear at the boat ramp, with a plain-English answer for each one.",
  intro: "Half of fishing is understanding what the guy at the ramp just said. Ten words you'll hear on the water and in every fishing forum. Pick the meaning, see the explanation, and find out how fluent you are.",
  kind: "trivia",
  icon: "message-square-quote",
  tint: "gold",
  minutes: 2,
  keyword: "fishing slang quiz",
  art: "icons:message-square-quote,fish,ruler",
  published: "2026-11-11",
  questions: [
    {
      q: "Your buddy says he got skunked. What happened?", icon: "circle-off", tint: "steel",
      options: [
        { label: "He caught nothing", sub: "Zero fish all trip", icon: "circle-off", tint: "navy", correct: true },
        { label: "A skunk raided the cooler", sub: "Bank fishing hazard", icon: "package", tint: "forest" },
        { label: "He lost a big one at the boat", sub: "Line snapped", icon: "zap", tint: "orange" },
        { label: "He got rained out", sub: "Never made a cast", icon: "cloud-rain", tint: "steel" },
      ],
      explain: "**Skunked** means you fished and caught nothing. It happens to everyone, and the fix is usually timing and location, not a new lure. See [why am I not catching fish](/blog/why-am-i-not-catching-fish).",
    },
    {
      q: "Someone at the ramp holds up a hawg. What is it?", icon: "fish", tint: "gold",
      options: [
        { label: "A small, skinny fish", sub: "Barely legal", icon: "minimize-2", tint: "steel" },
        { label: "A big, heavy fish", sub: "Usually a bass", icon: "maximize-2", tint: "gold", correct: true },
        { label: "A carp", sub: "Garbage fish to some", icon: "fish-off", tint: "forest" },
        { label: "A fish caught by snagging", sub: "Foul-hooked", icon: "fishing-hook", tint: "orange" },
      ],
      explain: "A **hawg** (also hog, lunker, toad, slob or pig) is a big fish, most often a big bass. What counts as one depends on your water: see [what is a good size bass](/blog/what-is-a-good-size-bass).",
    },
    {
      q: "And a dink?", icon: "minimize-2", tint: "steel",
      options: [
        { label: "A fish that jumped off", sub: "Lost at the boat", icon: "undo-2", tint: "orange" },
        { label: "A cheap lure", sub: "Bargain-bin bait", icon: "tag", tint: "gold" },
        { label: "A small fish", sub: "Usually short of keeper size", icon: "fish", tint: "forest", correct: true },
        { label: "A light bite", sub: "Barely felt it", icon: "activity", tint: "navy" },
      ],
      explain: "A **dink** is a small fish, the opposite of a hawg. Catching dinks all day is a sign to change spots or upsize your bait if you're after bigger fish.",
    },
    {
      q: "What does PB stand for?", icon: "trophy", tint: "gold",
      options: [
        { label: "Pro Bass", sub: "A tournament division", icon: "medal", tint: "orange" },
        { label: "Personal best", sub: "Your biggest fish of a species", icon: "trophy", tint: "gold", correct: true },
        { label: "Power bait", sub: "Dough bait for trout", icon: "egg", tint: "forest" },
        { label: "Pound of bass", sub: "A tournament weight unit", icon: "scale", tint: "steel" },
      ],
      explain: "**PB** means personal best: the longest or heaviest fish you've caught of a species. \"New PB by 2 pounds\" is the best sentence in fishing. A PB is only as good as the measurement, so use a flat board and a photo: [how to measure a fish](/blog/how-to-measure-a-fish).",
    },
    {
      q: "A forum thread says someone is spot burning. What did they do?", icon: "flame", tint: "orange",
      options: [
        { label: "Revealed a fishing spot publicly", sub: "Name, pin or obvious landmarks", icon: "map-pin", tint: "orange", correct: true },
        { label: "Fished one spot until it died", sub: "Caught everything in it", icon: "trending-down", tint: "steel" },
        { label: "Had a campfire on the bank", sub: "Burn ban violation", icon: "flame", tint: "gold" },
        { label: "Raced to someone else's spot", sub: "Cut them off", icon: "zap", tint: "navy" },
      ],
      explain: "**Spot burning** is giving away a fishing spot in public, usually in a post with the lake name, a map pin or recognizable landmarks. Anglers hate it because popular spots get pressured fast.",
    },
    {
      q: "What's a honey hole?", icon: "lock", tint: "forest",
      options: [
        { label: "A bait shop that sells good worms", sub: "Local secret", icon: "store", tint: "gold" },
        { label: "A deep hole in a river bend", sub: "Any river pool", icon: "arrow-down-to-line", tint: "navy" },
        { label: "A spot that keeps producing, and you keep quiet about", sub: "Your secret water", icon: "lock", tint: "forest", correct: true },
        { label: "A stocked pond", sub: "Easy fishing", icon: "droplets", tint: "steel" },
      ],
      explain: "A **honey hole** is a reliable spot you'd rather not share. It's the reason anglers answer \"where'd you catch it?\" with \"in the water.\"",
    },
    {
      q: "Someone calls a guy on the dock a googan. What do they mean?", sub: "It's not a compliment.", icon: "glasses", tint: "navy",
      options: [
        { label: "A fishing guide", sub: "Gets paid to fish", icon: "compass", tint: "forest" },
        { label: "A clueless, showy rookie", sub: "All gear, no clue", icon: "glasses", tint: "orange", correct: true },
        { label: "A fish warden", sub: "Checking licenses", icon: "badge-check", tint: "steel" },
        { label: "Someone who keeps every fish", sub: "Fills the cooler", icon: "package", tint: "gold" },
      ],
      explain: "A **googan** is a newbie who acts like a pro, or anyone doing something clueless on the water. It's teasing, and most anglers admit they were one once.",
    },
    {
      q: "What's a bump board for?", icon: "ruler", tint: "steel",
      options: [
        { label: "Measuring fish", sub: "Nose against the stop", icon: "ruler", tint: "steel", correct: true },
        { label: "Protecting the boat at the dock", sub: "A bumper", icon: "anchor", tint: "navy" },
        { label: "Cutting bait", sub: "A fillet board", icon: "utensils", tint: "orange" },
        { label: "Storing lures in the boat", sub: "A tackle tray", icon: "package", tint: "gold" },
      ],
      explain: "A **bump board** is a measuring board with a stop at one end. You bump the fish's nose against it, close the mouth and read total length at the tail. It's the standard in catch-photo-release tournaments.",
    },
    {
      q: "\"We limited out by 9 a.m.\" What happened?", icon: "check-circle-2", tint: "forest",
      options: [
        { label: "Ran out of bait", sub: "Had to stop early", icon: "x-circle", tint: "orange" },
        { label: "Hit the legal time limit", sub: "Fishing hours ended", icon: "clock", tint: "steel" },
        { label: "Caught the maximum number allowed", sub: "Daily bag or tournament limit", icon: "check-circle-2", tint: "forest", correct: true },
        { label: "Fished every spot on the lake", sub: "Nowhere left to go", icon: "map", tint: "navy" },
      ],
      explain: "To **limit out** is to catch the most fish you're allowed to keep, either the daily bag limit set by your state or a tournament's limit, like five bass. Limits vary by state, species and water, so check before you keep fish.",
    },
    {
      q: "The forecast shows a bite window at 6 p.m. What is it?", icon: "clock-3", tint: "gold",
      options: [
        { label: "When the bait shop closes", sub: "Last chance for minnows", icon: "store", tint: "steel" },
        { label: "A period when fish are expected to feed more", sub: "A good time to be casting", icon: "clock-3", tint: "gold", correct: true },
        { label: "The legal fishing hours", sub: "Set by the state", icon: "file-badge", tint: "navy" },
        { label: "A gap in the weeds", sub: "Where you cast", icon: "grid-3x3", tint: "forest" },
      ],
      explain: "A **bite window** is a stretch of time when fish are more likely to feed, often around dawn, dusk or a weather change. It's a probability, not a promise. See [the best time to fish](/blog/best-time-to-fish).",
    },
  ],
  results: [
    {
      slug: "native-speaker", title: "Native speaker", tagline: "Hawgs, dinks, honey holes. You could run the weigh-in microphone.", icon: "crown", tint: "gold", minScore: 9,
      body: [
        "You know the language, which usually means you've put in the time on the water. You've been skunked, you've caught a hawg, and you've probably told someone your fish was caught \"in the water.\"",
        "The next step for a fluent angler is the numbers behind the words. A **hawg** in one state is an average fish in another, and a **PB** only counts if it's measured right.",
      ],
      tips: [
        "Find out what really counts as big for your water: [what is a good size bass](/blog/what-is-a-good-size-bass).",
        "Measure every PB on a bump board with the mouth closed: [how to measure a fish](/blog/how-to-measure-a-fish).",
        "Test the other side of your fishing brain: [Fishing IQ quiz](/quiz/fishing-iq).",
      ],
      links: [
        { href: "/blog/what-is-a-good-size-bass", label: "What is a good size bass?" },
        { href: "/quiz/fishing-iq", label: "Quiz: what's your fishing IQ?" },
        { href: "/quiz/guess-the-weight", label: "Quiz: guess the weight" },
      ],
      app: { title: "Put a number on the hawg", text: "PB Fishing logs your catch with a side-profile photo, length and weight, and keeps your personal best per species. Photo-backed catches go on state and national leaderboards." },
    },
    {
      slug: "ramp-regular", title: "Ramp regular", tagline: "You talk the talk. One or two words still sneak past you.", icon: "anchor", tint: "steel", minScore: 7,
      body: [
        "You've spent enough time around boat ramps and fishing forums to follow most conversations. The words you missed are usually the ones from a corner of fishing you don't do much: tournaments, measuring rules or spot etiquette.",
        "The biggest gap between ramp regulars and the old hands is usually **recording**. Regulars remember the good days; the old hands wrote them down.",
      ],
      tips: [
        "Start a simple log with five fields: date, water, time, bait and weather. See [what to record in a fishing log](/blog/fishing-log-what-to-record).",
        "Learn bump-board measuring before your next PB shows up.",
        "Try the [would you catch fish today quiz](/quiz/would-you-catch-fish-today) to test your conditions knowledge.",
      ],
      links: [
        { href: "/blog/fishing-log-what-to-record", label: "What to record in a fishing log" },
        { href: "/blog/how-to-measure-a-fish", label: "How to measure a fish" },
        { href: "/quiz/would-you-catch-fish-today", label: "Quiz: would you catch fish today?" },
      ],
      app: { title: "A log that fills itself in", text: "PB Fishing saves the date, water and weather with every catch photo, so your log has the details even when you forget to write them down. Logging is free and unlimited." },
    },
    {
      slug: "weekend-angler", title: "Weekend angler", tagline: "You know skunked. You're working on the rest.", icon: "sun", tint: "forest", minScore: 4,
      body: [
        "You know the basics and you've clearly been fishing, but forum threads still lose you now and then. That's normal: a lot of fishing slang comes from bass tournaments and online fishing communities, not from the dock.",
        "The quickest way to pick up the language is to fish with people who've done it longer, and to read up on the things they argue about: lures, conditions and where to fish.",
      ],
      tips: [
        "Read [fishing for beginners](/blog/fishing-for-beginners) for the gear and terms that matter most.",
        "Learn what moves the bite: [the best time to fish](/blog/best-time-to-fish).",
        "Keep every catch photo. Your first season's fish are your baseline PBs.",
      ],
      links: [
        { href: "/blog/fishing-for-beginners", label: "Fishing for beginners" },
        { href: "/blog/best-time-to-fish", label: "The best time to fish" },
        { href: "/quiz/what-kind-of-angler-are-you", label: "Quiz: what kind of angler are you?" },
      ],
      app: { title: "Every fish counts as a start", text: "PB Fishing is free for catch logging. Snap a photo and the app helps identify the species and estimate the length, and your personal bests are tracked from the first fish." },
    },
    {
      slug: "dock-rookie", title: "Dock rookie", tagline: "Everybody starts here. Now you know what a dink is.", icon: "sprout", tint: "navy", minScore: 0,
      body: [
        "Fishing has its own language, and nobody is born speaking it. Now you know that getting **skunked** means zero fish, a **hawg** is a big one and a **dink** is a small one, and that's half of every conversation at the ramp.",
        "The good news: the words come fast once you're on the water. Start with simple gear, easy-access water and fish that bite, like bluegill and crappie.",
      ],
      tips: [
        "Start with [fishing for beginners: what you actually need](/blog/fishing-for-beginners).",
        "Check whether you need a license before your first trip: [catch and release license rules](/blog/do-you-need-a-fishing-license-for-catch-and-release).",
        "Find an easy spot near you, like [Texas beginner spots](/fishing/texas/beginner-fishing-spots) or [Michigan beginner spots](/fishing/michigan/beginner-fishing-spots).",
        "Take the quiz again after a few trips. You'll be surprised.",
      ],
      links: [
        { href: "/blog/fishing-for-beginners", label: "Fishing for beginners" },
        { href: "/blog/do-you-need-a-fishing-license-for-catch-and-release", label: "Do you need a license for catch and release?" },
        { href: "/fishing", label: "Fishing guides by state" },
      ],
      app: { title: "Your first PB starts here", text: "PB Fishing is free for unlimited catch logging. Take a photo, log the species and length, and your first fish of each species becomes your first personal best." },
    },
  ],
  faq: [
    { q: "What does skunked mean in fishing?", a: "Getting skunked means you went fishing and caught nothing. It happens to everyone; see [why am I not catching fish](/blog/why-am-i-not-catching-fish) for the usual fixes." },
    { q: "What's the difference between a hawg and a dink?", a: "A hawg is a big fish, usually a big bass. A dink is a small one, often below the keeper size." },
    { q: "Is googan an insult?", a: "Mildly. It's teasing for a showy or clueless angler. Use it with friends, not strangers at the ramp." },
  ],
};
export default quiz;
