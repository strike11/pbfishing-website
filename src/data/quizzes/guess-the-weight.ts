import type { Quiz } from "../quiz-types";

/*
 * Answers come from the standard-weight (Ws) equations fisheries biologists use:
 *   log10(W, grams) = a + b * log10(total length, mm)
 * largemouth a=-5.528 b=3.273 · smallmouth a=-5.329 b=3.200 · walleye a=-5.453 b=3.180
 * bluegill a=-5.374 b=3.316 · black crappie a=-5.618 b=3.345 · channel catfish a=-5.800 b=3.294
 * rainbow trout (lentic) a=-4.898 b=2.990
 * Computed values: LMB 20 in 2,130 g / 24 in 3,868 g; SMB 18 in 1,525 g; walleye 28 in 4,134 g;
 * bluegill 10 in 399 g; black crappie 14 in 822 g; channel catfish 30 in 4,934 g; rainbow 20 in 1,558 g.
 */
const quiz: Quiz = {
  slug: "guess-the-weight",
  title: "Guess the weight: how heavy is that fish?",
  seoTitle: "Guess the Fish Weight Quiz: Length to Weight, 8 Fish",
  description: "A 20-inch bass weighs how much? Guess the weight of 8 fish from their length, then see the real number from the formula fisheries biologists use.",
  intro: "Every angler thinks they can eyeball a fish's weight. Most are off by a pound or more. Eight fish, eight lengths: guess the weight, then see the number from the standard-weight formulas biologists use.",
  kind: "trivia",
  icon: "scale",
  tint: "gold",
  minutes: 2,
  keyword: "fish weight by length quiz",
  art: "icons:scale,ruler,fish",
  published: "2026-11-11",
  questions: [
    {
      q: "A 20-inch largemouth bass in normal condition weighs about...", sub: "Measured on a board, mouth closed.", icon: "ruler", tint: "forest",
      options: [
        { label: "2.5 lb", sub: "A solid keeper", icon: "scale", tint: "steel" },
        { label: "3.5 lb", sub: "Nice fish", icon: "scale", tint: "navy" },
        { label: "4.7 lb", sub: "Bragging size", icon: "scale", tint: "gold", correct: true },
        { label: "6.5 lb", sub: "A real hawg", icon: "scale", tint: "orange" },
        { label: "8 lb", sub: "Wall-mount territory", icon: "scale", tint: "forest" },
      ],
      explain: "**About 4.7 lb** (4 lb 11 oz). The standard-weight equation gives 2,130 g for 508 mm. A fat pre-spawn female can be a pound heavier, a skinny post-spawn fish a pound lighter. Try your own fish in the [fish weight calculator](/tools/fish-weight-calculator).",
    },
    {
      q: "Your bass is 20 inches. Your buddy's is 24. How much heavier is his?", sub: "Only 4 inches longer.", icon: "scale", tint: "orange",
      options: [
        { label: "About 20% heavier", sub: "Length and weight grow together", icon: "trending-up", tint: "steel" },
        { label: "About 50% heavier", sub: "A pound or two more", icon: "trending-up", tint: "forest" },
        { label: "Almost twice as heavy", sub: "Close to double", icon: "trending-up", tint: "gold", correct: true },
        { label: "Three times as heavy", sub: "Weight triples", icon: "trending-up", tint: "orange" },
      ],
      explain: "**Almost double.** A 24-inch largemouth comes out at about 8.5 lb (3,868 g) against 4.7 lb at 20 inches. Weight grows with roughly the cube of length, so each extra inch on a big fish adds far more than an inch on a small one. See the [largemouth bass weight chart](/blog/largemouth-bass-weight-chart).",
    },
    {
      q: "An 18-inch smallmouth bass weighs about...", icon: "fish", tint: "steel",
      options: [
        { label: "2.3 lb", icon: "scale", tint: "steel" },
        { label: "3.4 lb", icon: "scale", tint: "gold", correct: true },
        { label: "4.5 lb", icon: "scale", tint: "forest" },
        { label: "5.5 lb", icon: "scale", tint: "orange" },
      ],
      explain: "**About 3.4 lb** (3 lb 6 oz): 457 mm works out to about 1,525 g on the smallmouth standard-weight curve. At the same length, smallmouth and largemouth weigh almost the same; the formulas differ by only a few percent. See the [smallmouth bass guide](/species/smallmouth-bass).",
    },
    {
      q: "A 28-inch walleye weighs about...", icon: "fish", tint: "gold",
      options: [
        { label: "6 lb", icon: "scale", tint: "steel" },
        { label: "7.5 lb", icon: "scale", tint: "forest" },
        { label: "9 lb", icon: "scale", tint: "gold", correct: true },
        { label: "11.5 lb", icon: "scale", tint: "orange" },
      ],
      explain: "**About 9.1 lb** (9 lb 2 oz): 711 mm comes out at about 4,134 g. Walleye are long and slim, so a 28-incher sounds bigger than it weighs next to a bass. A 30-inch walleye is about 11.4 lb. See the [walleye guide](/species/walleye) or run it in the [fish weight calculator](/tools/fish-weight-calculator).",
    },
    {
      q: "A 10-inch bluegill weighs about...", sub: "That's a giant bluegill.", icon: "fish", tint: "forest",
      options: [
        { label: "6 oz", icon: "scale", tint: "steel" },
        { label: "10 oz", icon: "scale", tint: "navy" },
        { label: "14 oz", icon: "scale", tint: "gold", correct: true },
        { label: "1 lb 8 oz", icon: "scale", tint: "orange" },
      ],
      explain: "**About 14 oz** (0.88 lb): 254 mm gives about 399 g. Bluegill are deep-bodied, so they weigh a lot for their length. An 11-incher pushes past a pound. See the [bluegill guide](/species/bluegill).",
    },
    {
      q: "A 14-inch black crappie weighs about...", sub: "A true slab.", icon: "fish", tint: "navy",
      options: [
        { label: "1 lb", icon: "scale", tint: "steel" },
        { label: "1.8 lb", icon: "scale", tint: "gold", correct: true },
        { label: "2.6 lb", icon: "scale", tint: "forest" },
        { label: "3.4 lb", icon: "scale", tint: "orange" },
      ],
      explain: "**About 1.8 lb** (1 lb 13 oz): 356 mm comes to about 822 g. A 12-inch crappie is only about 1.1 lb, so those last two inches add more than half a pound. See the [crappie guide](/species/crappie).",
    },
    {
      q: "A 30-inch channel catfish weighs about...", icon: "fish", tint: "orange",
      options: [
        { label: "6 lb", icon: "scale", tint: "steel" },
        { label: "8.5 lb", icon: "scale", tint: "forest" },
        { label: "11 lb", icon: "scale", tint: "gold", correct: true },
        { label: "15 lb", icon: "scale", tint: "orange" },
      ],
      explain: "**About 10.9 lb** (10 lb 14 oz): 762 mm gives about 4,934 g. Catfish vary a lot with their last meal; a well-fed fish can beat the formula by a couple of pounds. See the [channel catfish guide](/species/channel-catfish).",
    },
    {
      q: "A 20-inch rainbow trout from a lake weighs about...", sub: "Same length as the bass in question 1.", icon: "fish", tint: "steel",
      options: [
        { label: "2 lb", icon: "scale", tint: "steel" },
        { label: "3.4 lb", icon: "scale", tint: "gold", correct: true },
        { label: "4.7 lb", sub: "Same as the bass", icon: "scale", tint: "forest" },
        { label: "6 lb", icon: "scale", tint: "orange" },
      ],
      explain: "**About 3.4 lb** (3 lb 7 oz): the lake (lentic) rainbow trout equation gives about 1,558 g for 508 mm, more than a pound lighter than a 20-inch largemouth. Trout are built for current: long and slim. See the [rainbow trout guide](/species/rainbow-trout).",
    },
  ],
  results: [
    {
      slug: "human-scale", title: "Human scale", tagline: "You could guess weights at the county fair. Eight for eight.", icon: "scale", tint: "gold", minScore: 8,
      body: [
        "You know how length turns into weight across species, which most anglers never learn. You know that walleye and trout run light for their length, bluegill and bass run heavy, and that a few inches on a big fish adds pounds.",
        "That instinct is useful on the water: it tells you when a fish is special before you ever reach for a scale. The formulas give a fish in good condition, so a real fish can still be 10% or more either side.",
      ],
      tips: [
        "Measure total length on a flat board, mouth closed, tail pinched: [how to measure a fish](/blog/how-to-measure-a-fish).",
        "For a heavy-bodied fish, the length-and-girth formula in the [fish weight calculator](/tools/fish-weight-calculator) is closer than length alone.",
        "See where your PB stands: [what is a good size bass](/blog/what-is-a-good-size-bass).",
      ],
      links: [
        { href: "/tools/fish-weight-calculator", label: "Fish weight calculator" },
        { href: "/blog/largemouth-bass-weight-chart", label: "Largemouth bass weight chart" },
        { href: "/quiz/fishing-iq", label: "Quiz: what's your fishing IQ?" },
      ],
      app: { title: "Length, weight and a photo", text: "PB Fishing logs your catch with a side-profile photo, length and weight, helps estimate length from the photo, and keeps your personal best per species." },
    },
    {
      slug: "good-eye", title: "Good eye", tagline: "You're usually within a few ounces. Your fish stories are mostly true.", icon: "eye", tint: "forest", minScore: 6,
      body: [
        "You have a solid sense of how heavy fish are. The ones you missed were probably the species you catch less, or the jump from 20 to 24 inches that fools nearly everyone.",
        "The thing to remember: weight grows with roughly the **cube of length**. Going from 10 to 11 inches adds about 5 ounces to a bluegill; going from 24 to 25 inches adds more than a pound to a largemouth.",
      ],
      tips: [
        "Keep the [largemouth bass weight chart](/blog/largemouth-bass-weight-chart) in mind for your home water.",
        "Use the [fish weight calculator](/tools/fish-weight-calculator) when you don't carry a scale.",
        "Photograph every fish on a board. The photo settles the argument later.",
      ],
      links: [
        { href: "/blog/largemouth-bass-weight-chart", label: "Largemouth bass weight chart" },
        { href: "/tools/fish-weight-calculator", label: "Fish weight calculator" },
        { href: "/blog/how-to-measure-a-fish", label: "How to measure a fish" },
      ],
      app: { title: "Fish stories are free. Records need a photo.", text: "In PB Fishing every catch keeps its photo, length and weight, and your personal best per species updates automatically when you beat it." },
    },
    {
      slug: "fish-story-teller", title: "Fish story teller", tagline: "Your fish get a little heavier every time you tell it. Everyone's do.", icon: "message-circle", tint: "orange", minScore: 3,
      body: [
        "You got some right, but your eye for weight wanders, which puts you in good company. It is easy to overestimate long, thin fish like walleye and trout, and to underestimate how fast big fish gain weight.",
        "The fix is simple: **measure, don't guess**. A board and a formula beat an eyeball every time, and a photo on the board keeps everyone honest.",
      ],
      tips: [
        "Buy a bump board. It's the cheapest upgrade to your fishing stories.",
        "Plug your next fish into the [fish weight calculator](/tools/fish-weight-calculator).",
        "Learn proper technique: [how to measure a fish](/blog/how-to-measure-a-fish).",
        "Take the quiz again after studying the [largemouth bass weight chart](/blog/largemouth-bass-weight-chart).",
      ],
      links: [
        { href: "/tools/fish-weight-calculator", label: "Fish weight calculator" },
        { href: "/blog/how-to-measure-a-fish", label: "How to measure a fish" },
        { href: "/blog/what-is-a-good-size-bass", label: "What is a good size bass?" },
      ],
      app: { title: "Caught a PB without a scale?", text: "Get a weight estimate in the calculator, then log the fish in PB Fishing with a photo and length. The app helps estimate the length from the photo." },
    },
    {
      slug: "every-fish-is-five-pounds", title: "Every fish is five pounds", tagline: "To you, a fish weighs whatever the story needs. Time to meet a ruler.", icon: "ruler", tint: "navy", minScore: 0,
      body: [
        "Guessing fish weight is genuinely hard, and most people are way off until they've handled a lot of fish on a board and a scale. Now you've seen the real numbers: a 20-inch bass is under 5 lb, and a 28-inch walleye is about 9.",
        "The good news is that you don't need to guess. Length is easy to measure, and a standard formula turns it into a solid weight estimate.",
      ],
      tips: [
        "Start with [how to measure a fish](/blog/how-to-measure-a-fish).",
        "Use the [fish weight calculator](/tools/fish-weight-calculator) for any species in this quiz.",
        "Check what's actually big where you fish: [what is a good size bass](/blog/what-is-a-good-size-bass).",
      ],
      links: [
        { href: "/tools/fish-weight-calculator", label: "Fish weight calculator" },
        { href: "/blog/how-to-measure-a-fish", label: "How to measure a fish" },
        { href: "/blog/fishing-for-beginners", label: "Fishing for beginners" },
      ],
      app: { title: "Let the photo do the measuring", text: "PB Fishing is free for catch logging. Snap a side-profile photo and the app helps identify the species and estimate the length." },
    },
  ],
  faq: [
    { q: "How do you estimate a fish's weight from its length?", a: "Fisheries biologists use a standard-weight equation for each species: log10(weight in grams) = a + b × log10(length in mm). The [fish weight calculator](/tools/fish-weight-calculator) does the math for you." },
    { q: "How accurate are length-to-weight formulas?", a: "They describe a fish in typical good condition. Real fish vary, sometimes by 10% or more: pre-spawn females and well-fed catfish run heavy, post-spawn fish run light. A certified scale is the only way to know for a record." },
    { q: "How much does a 20-inch bass weigh?", a: "About 4.7 lb for a largemouth in normal condition, according to the standard-weight equation. See the [largemouth bass weight chart](/blog/largemouth-bass-weight-chart) for other lengths." },
  ],
};
export default quiz;
