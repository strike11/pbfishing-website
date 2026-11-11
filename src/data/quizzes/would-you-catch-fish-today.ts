import type { Quiz } from "../quiz-types";

const quiz: Quiz = {
  slug: "would-you-catch-fish-today",
  title: "Would you catch fish today? The fishing conditions quiz",
  seoTitle: "Would You Catch Fish Today? Fishing Conditions Quiz",
  description: "Cold fronts, falling pressure, muddy water, solunar tables. Ten real-world scenarios test how well you read fishing conditions, with honest answers.",
  intro: "Fronts, wind, rain, pressure, the moon: everyone has a theory about what turns the bite on. Ten situations, ten decisions. Each answer comes with what the evidence actually says, including where nobody really knows.",
  kind: "trivia",
  icon: "gauge",
  tint: "steel",
  minutes: 3,
  keyword: "best fishing conditions quiz",
  art: "icons:gauge,wind,cloud-rain",
  published: "2026-11-11",
  questions: [
    {
      q: "A cold front blew through last night.", sub: "Bluebird sky, north wind, cool morning. What's your plan?", icon: "wind", tint: "steel",
      options: [
        { label: "Burn a buzzbait across the flats", sub: "Fast and loud", icon: "zap", tint: "orange" },
        { label: "Slow down, downsize, fish tight to cover", sub: "Or a bit deeper", icon: "turtle", tint: "forest", correct: true },
        { label: "Stay home. Fish won't eat for days", sub: "Pointless after a front", icon: "house-plus", tint: "navy" },
        { label: "Fish open water in the middle of the lake", sub: "Fish scatter after fronts", icon: "waves", tint: "steel" },
      ],
      explain: "After a front, many anglers find fish hold tighter to cover or a little deeper and hit less aggressively. Slower, smaller baits usually work better. It's a tougher day, not a dead one. See [fishing after rain, wind or a cold front](/blog/fishing-after-rain-wind-cold-front).",
    },
    {
      q: "The barometer is falling ahead of a storm.", sub: "What does the evidence say about falling pressure?", icon: "gauge", tint: "gold",
      options: [
        { label: "It's proven to trigger a feeding frenzy", sub: "Fish feel it in their swim bladder", icon: "trending-down", tint: "orange" },
        { label: "It shuts fish down completely", sub: "Don't bother", icon: "x-circle", tint: "navy" },
        { label: "Often a good bite, but the cause is unclear", sub: "Clouds, wind and light change too", icon: "circle-help", tint: "forest", correct: true },
        { label: "Pressure only matters in saltwater", sub: "Tides, not lakes", icon: "waves", tint: "steel" },
      ],
      explain: "Plenty of anglers report a good pre-front bite, but studies haven't separated pressure from the clouds, wind and light that change with it. For scale: a 10-millibar drop is about what a fish feels swimming 4 inches shallower. See [barometric pressure and fishing](/blog/barometric-pressure-and-fishing).",
    },
    {
      q: "A steady wind has blown into one bank all day.", sub: "Which bank do you fish?", icon: "wind", tint: "forest",
      options: [
        { label: "The calm bank, out of the wind", sub: "Easier to cast", icon: "sun", tint: "gold" },
        { label: "The windblown bank", sub: "Waves breaking on it", icon: "waves", tint: "forest", correct: true },
        { label: "Doesn't matter", sub: "Fish ignore the wind", icon: "circle-off", tint: "steel" },
        { label: "The deepest water in the middle", sub: "Away from both banks", icon: "arrow-down-to-line", tint: "navy" },
      ],
      explain: "Usually the windblown bank. Wind pushes plankton and baitfish toward it and the chop breaks up light, so predators feed more boldly. One exception: in very cold early spring, a calm, sunny pocket can be warmer and better.",
    },
    {
      q: "Heavy rain last night. A creek is pouring muddy water into the lake.", sub: "Where do you start?", icon: "cloud-rain", tint: "navy",
      options: [
        { label: "Right in the middle of the mud", sub: "Fish love dirty water", icon: "cloudy", tint: "orange" },
        { label: "Far from the creek, in the clearest water", sub: "Avoid the mud", icon: "droplet", tint: "steel" },
        { label: "Along the edge where muddy meets clear", sub: "With a loud or bright lure", icon: "spline", tint: "forest", correct: true },
        { label: "Anywhere. Rain shuts the lake down", sub: "Wait a week", icon: "x-circle", tint: "navy" },
      ],
      explain: "The mudline is the classic spot: inflows carry food, and predators ambush along the edge of the stained water. Use baits fish can find by sound or flash, like a spinnerbait or a dark soft plastic. See [fishing after rain, wind or a cold front](/blog/fishing-after-rain-wind-cold-front).",
    },
    {
      q: "July, 1 p.m., 94°F, not a cloud in the sky.", sub: "You only have this window. What gives you the best shot?", icon: "sun", tint: "orange",
      options: [
        { label: "Topwater on shallow flats", sub: "Fish are up in the heat", icon: "sunrise", tint: "gold" },
        { label: "Deeper water or heavy shade", sub: "Docks, thick grass, ledges", icon: "arrow-down-to-line", tint: "forest", correct: true },
        { label: "The shallowest, warmest cove", sub: "Fish like warm water", icon: "thermometer", tint: "orange" },
        { label: "Nothing works in summer", sub: "Fish don't eat at midday", icon: "circle-off", tint: "navy" },
      ],
      explain: "Midday summer fish usually slide deeper or under shade: docks, matted grass, ledges and brush piles. You can still catch them; the easy shallow bite is mostly early and late. See [the best time to fish](/blog/best-time-to-fish).",
    },
    {
      q: "Early spring, 46°F water.", sub: "Where's the warmest water on a sunny afternoon?", icon: "thermometer", tint: "steel",
      options: [
        { label: "Shallow bays on the north side of the lake", sub: "They face the southern sun", icon: "sun-medium", tint: "gold", correct: true },
        { label: "The deepest basin", sub: "Deep water stays warmer", icon: "arrow-down-to-line", tint: "navy" },
        { label: "The windblown south shore", sub: "Waves mix in warm water", icon: "wind", tint: "steel" },
        { label: "It's the same everywhere", sub: "Lakes warm evenly", icon: "equal", tint: "forest" },
      ],
      explain: "In the Northern Hemisphere, the north shore gets the most direct sun and is sheltered from cold north winds, so its shallow, dark-bottomed bays warm first, especially by mid-afternoon. A few degrees can make those spots the best in the lake. See [water temperature and fish activity](/blog/water-temperature-and-fish-activity).",
    },
    {
      q: "Largemouth bass start spawning when the water reaches about...", icon: "flower-2", tint: "forest",
      options: [
        { label: "45°F", sub: "Just after ice-out", icon: "snowflake", tint: "navy" },
        { label: "About 60°F and into the 60s", sub: "Mid-spring", icon: "flower-2", tint: "forest", correct: true },
        { label: "80°F", sub: "Early summer", icon: "sun", tint: "orange" },
        { label: "Water temperature doesn't matter", sub: "It's all day length", icon: "calendar-days", tint: "steel" },
      ],
      explain: "Texas Parks and Wildlife puts the start of largemouth spawning at about 60°F, and most bedding happens as the water warms through the 60s. That's why the spawn can be in February in South Florida and June up north. See [water temperature and fish activity](/blog/water-temperature-and-fish-activity).",
    },
    {
      q: "Walleye spawn peaks at what water temperature?", icon: "fish", tint: "gold",
      options: [
        { label: "Mid-30s°F", sub: "Under the ice", icon: "snowflake", tint: "steel" },
        { label: "42 to 50°F", sub: "Right after ice-out", icon: "thermometer", tint: "gold", correct: true },
        { label: "60 to 65°F", sub: "With the bass", icon: "sprout", tint: "forest" },
        { label: "70 to 75°F", sub: "Early summer", icon: "sun", tint: "orange" },
      ],
      explain: "The Minnesota DNR says walleye spawning peaks at 42 to 50°F, usually just after ice-out on rocky shorelines and in rivers. Many states close or restrict walleye fishing during the spawn, so check your regulations.",
    },
    {
      q: "Your solunar table says the major period is 2 to 4 p.m.", sub: "What's the honest take?", icon: "moon", tint: "navy",
      options: [
        { label: "Plan the whole trip around it", sub: "The moon rules the bite", icon: "moon-star", tint: "navy" },
        { label: "Fish it if you're there, but don't bet the day on it", sub: "Weak evidence either way", icon: "scale", tint: "forest", correct: true },
        { label: "It's proven science", sub: "Moon gravity moves fish", icon: "graduation-cap", tint: "gold" },
        { label: "Avoid that window", sub: "Fish are resting", icon: "ban", tint: "orange" },
      ],
      explain: "The evidence is weak. A 2023 study in SN Applied Sciences tested popular solunar tables against trout catch data and found no link; air temperature predicted catches better. Weather, water temperature and light matter more. See [do solunar tables work](/blog/do-solunar-tables-work).",
    },
    {
      q: "Gin-clear water and bright sun. Why are fish so hard to catch?", icon: "eye", tint: "steel",
      options: [
        { label: "They can see you, your line and your lure clearly", sub: "And they hold tighter or deeper", icon: "eye", tint: "steel", correct: true },
        { label: "Sunlight hurts their eyes, so they stop eating", sub: "Fish go blind in sun", icon: "sun", tint: "gold" },
        { label: "Clear water has no food in it", sub: "Nothing to eat", icon: "circle-off", tint: "forest" },
        { label: "They don't. Clear water is the easiest", sub: "Fish see the lure better", icon: "thumbs-up", tint: "orange" },
      ],
      explain: "In clear water fish spot anglers, boats and heavy line from far away, and on bright days they tend to hold near shade or deeper. Longer casts, lighter fluorocarbon and natural colors help. A ripple on the water or a cloudy day evens the odds.",
    },
  ],
  results: [
    {
      slug: "weather-wise", title: "Weather-wise angler", tagline: "You read the water before you read the forecast. And you know what nobody knows.", icon: "gauge", tint: "gold", minScore: 9,
      body: [
        "You know how fronts, wind, mud and water temperature move fish, and you didn't fall for the easy myths about the moon or the barometer. That's the hardest part: knowing which signals matter and which ones just feel like they should.",
        "The next level is **your own data**. General rules are a starting point, but every lake has quirks. The anglers who get really good track their own trips and see which conditions actually produced on their water.",
      ],
      tips: [
        "Log the water temperature, wind and sky for every fish, including the slow days.",
        "Compare your best trips: same wind direction? Same week of the year? See [what to record in a fishing log](/blog/fishing-log-what-to-record).",
        "Try the [Fishing IQ quiz](/quiz/fishing-iq) to test records, biology and rules.",
      ],
      links: [
        { href: "/blog/fishing-log-what-to-record", label: "What to record in a fishing log" },
        { href: "/blog/barometric-pressure-and-fishing", label: "Barometric pressure and fishing" },
        { href: "/quiz/fishing-iq", label: "Quiz: what's your fishing IQ?" },
      ],
      app: { title: "A forecast, plus your own record", text: "PB Fishing gives a daily bite forecast and live conditions, and saves a weather and pressure snapshot with every catch. Conditions matter; nothing guarantees a bite." },
    },
    {
      slug: "reads-the-water", title: "Reads the water", tagline: "You'd find fish on most days. A couple of conditions still fool you.", icon: "waves", tint: "forest", minScore: 7,
      body: [
        "You've got the fundamentals: wind, cover, temperature and fronts. The questions you missed are probably the ones where common fishing wisdom and the evidence disagree, like pressure and solunar tables.",
        "Fishing advice is full of confident rules. The honest version is usually \"this tends to help, here's why, and here's when it doesn't.\" Knowing the exceptions is what turns a good day into a consistent season.",
      ],
      tips: [
        "Read what the research says about the barometer: [barometric pressure and fishing](/blog/barometric-pressure-and-fishing).",
        "Use water temperature as your calendar: [water temperature and fish activity](/blog/water-temperature-and-fish-activity).",
        "On your next post-front day, try going slower and smaller instead of staying home.",
      ],
      links: [
        { href: "/blog/water-temperature-and-fish-activity", label: "Water temperature and fish activity" },
        { href: "/blog/do-solunar-tables-work", label: "Do solunar tables work?" },
        { href: "/blog/fishing-after-rain-wind-cold-front", label: "Fishing after rain, wind or a cold front" },
      ],
      app: { title: "See the conditions before you go", text: "PB Fishing has live conditions and a daily bite forecast for 20,000+ US waters; Premium adds an hourly forecast and species odds." },
    },
    {
      slug: "getting-the-read", title: "Getting the read", tagline: "You know the bite changes. Now learn why.", icon: "cloud-sun", tint: "steel", minScore: 4,
      body: [
        "You've got a feel for some conditions but a few classic situations tripped you up. That's normal: most fishing knowledge is passed around as rules of thumb, and some of them are wrong.",
        "Start with the two things that matter most and are easiest to check: **water temperature** and **light**. Temperature tells you where fish are in their season; light tells you how shallow and how bold they'll be today.",
      ],
      tips: [
        "Buy a cheap water thermometer, or read the temp on your graph, every trip.",
        "Fish the first and last two hours of daylight in summer: [the best time to fish](/blog/best-time-to-fish).",
        "After rain, look for the mudline before you look for a new lure.",
        "Retake this quiz after a few trips and see what changed.",
      ],
      links: [
        { href: "/blog/best-time-to-fish", label: "The best time to fish" },
        { href: "/blog/water-temperature-and-fish-activity", label: "Water temperature and fish activity" },
        { href: "/blog/why-am-i-not-catching-fish", label: "Why am I not catching fish?" },
      ],
      app: { title: "Conditions saved with every catch", text: "Each catch you log in PB Fishing keeps the date, water, weather and pressure, so you can look back at what was happening the day they bit." },
    },
    {
      slug: "still-guessing", title: "Still guessing", tagline: "The fish aren't random. They just look that way at first.", icon: "circle-help", tint: "navy", minScore: 0,
      body: [
        "Conditions can feel like a coin flip when you're starting out. They aren't. Fish respond to temperature, light, wind and food in fairly predictable ways, and a few simple rules will put you on more fish right away.",
        "Three to start with: fish **early and late** in summer, fish the **windblown bank**, and after a cold front **slow down** instead of giving up.",
      ],
      tips: [
        "Start with [why am I not catching fish](/blog/why-am-i-not-catching-fish).",
        "Read [the best time to fish](/blog/best-time-to-fish) before your next trip.",
        "Learn how weather changes things: [fishing after rain, wind or a cold front](/blog/fishing-after-rain-wind-cold-front).",
        "Keep notes on every trip, even the skunked ones. Patterns show up faster than you'd think.",
      ],
      links: [
        { href: "/blog/why-am-i-not-catching-fish", label: "Why am I not catching fish?" },
        { href: "/blog/best-time-to-fish", label: "The best time to fish" },
        { href: "/blog/fishing-for-beginners", label: "Fishing for beginners" },
      ],
      app: { title: "A free daily bite forecast", text: "PB Fishing's free plan includes a daily bite forecast, a trip planner for up to 2 trips and unlimited catch logging. It's a starting point; conditions matter, and nothing guarantees a bite." },
    },
  ],
  faq: [
    { q: "What is the best weather for fishing?", a: "Stable or slowly changing weather with some cloud cover and a light wind is a good bet for most freshwater fish. Low light at dawn and dusk helps too. See [the best time to fish](/blog/best-time-to-fish)." },
    { q: "Do fish bite after a cold front?", a: "Yes, but usually slower. Fish often move tighter to cover or deeper and take smaller, slower baits for a day or two. See [fishing after rain, wind or a cold front](/blog/fishing-after-rain-wind-cold-front)." },
    { q: "Does barometric pressure affect fishing?", a: "Possibly, but it's hard to prove because pressure changes come with wind, clouds and temperature changes. Treat a falling barometer as a sign of changing weather, not a guarantee. See [barometric pressure and fishing](/blog/barometric-pressure-and-fishing)." },
  ],
};
export default quiz;
