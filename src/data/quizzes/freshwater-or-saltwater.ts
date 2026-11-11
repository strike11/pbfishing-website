import type { Quiz } from "../quiz-types";

const quiz: Quiz = {
  slug: "freshwater-or-saltwater",
  title: "Freshwater or saltwater: which kind of fishing fits you?",
  seoTitle: "Freshwater or Saltwater Fishing? Take the 7-Question Quiz",
  description: "Bass boat, redfish flats, surf, trout stream or ice shack? Seven questions match you to the kind of fishing that fits, plus the state guides to start with.",
  intro: "Freshwater and saltwater are two different sports with different gear, licenses and seasons. Tell us where you'd stand, what you'd chase and what weather you can take. Seven questions, about a minute.",
  kind: "personality",
  icon: "waves",
  tint: "navy",
  minutes: 1,
  keyword: "freshwater or saltwater fishing quiz",
  art: "icons:waves,fish,snowflake",
  published: "2026-11-11",
  questions: [
    {
      q: "Where do you want to be standing?", sub: "Pick the picture that looks like a good Saturday.", icon: "map-pin", tint: "forest",
      options: [
        { label: "On a boat on a big reservoir", sub: "Points, docks, grass lines", icon: "sailboat", tint: "steel", scores: { "freshwater-bass": 3, "inshore-saltwater": 1 } },
        { label: "In a skiff or kayak on a shallow bay", sub: "Grass flats and mangroves", icon: "sun", tint: "orange", scores: { "inshore-saltwater": 3 } },
        { label: "On a pier or the beach", sub: "Rod in a sand spike, bucket of bait", icon: "umbrella", tint: "gold", scores: { "surf-and-pier": 3 } },
        { label: "Knee-deep in a cold creek", sub: "Riffles, pools, no one around", icon: "trees", tint: "forest", scores: { "trout-streams": 3 } },
        { label: "On a frozen lake", sub: "Auger, bucket, heater", icon: "snowflake", tint: "navy", scores: { "ice-angler": 3 } },
      ],
    },
    {
      q: "Pick a fish.", icon: "fish", tint: "steel",
      options: [
        { label: "Largemouth bass", sub: "Lives in lakes and ponds nearly everywhere", icon: "fish", tint: "forest", scores: { "freshwater-bass": 3 } },
        { label: "Redfish and snook", sub: "Copper backs and big runs", icon: "fish-symbol", tint: "orange", scores: { "inshore-saltwater": 3 } },
        { label: "Whatever's running", sub: "Whiting, pompano, sheepshead, mackerel", icon: "shell", tint: "gold", scores: { "surf-and-pier": 3 } },
        { label: "Rainbow and brown trout", sub: "Spots, colors, clear water", icon: "sparkles", tint: "steel", scores: { "trout-streams": 3 } },
        { label: "Walleye, perch and crappie", sub: "Through eight inches of ice", icon: "snowflake", tint: "navy", scores: { "ice-angler": 3 } },
      ],
    },
    {
      q: "What weather can you live with?", icon: "cloud-sun", tint: "gold",
      options: [
        { label: "Heat and humidity", sub: "Sunscreen and a buff", icon: "sun", tint: "orange", scores: { "inshore-saltwater": 2, "surf-and-pier": 1 } },
        { label: "Wind and salt spray", sub: "Waves don't bother me", icon: "wind", tint: "steel", scores: { "surf-and-pier": 2, "inshore-saltwater": 1 } },
        { label: "Cool, drizzly mornings", sub: "Waders and a rain shell", icon: "cloud-drizzle", tint: "forest", scores: { "trout-streams": 2, "freshwater-bass": 1 } },
        { label: "Single digits", sub: "The colder the better, as long as it's solid", icon: "snowflake", tint: "navy", scores: { "ice-angler": 3 } },
        { label: "A mild spring weekend", sub: "I'm not a hero", icon: "sprout", tint: "gold", scores: { "freshwater-bass": 2, "trout-streams": 1 } },
      ],
    },
    {
      q: "Pick a gear setup.", sub: "Price isn't the question. Fun is.", icon: "package", tint: "orange",
      options: [
        { label: "Several baitcasters on a deck", sub: "One for every lure", icon: "layers", tint: "forest", scores: { "freshwater-bass": 3 } },
        { label: "A 7-foot spinning rod and a popping cork", sub: "Saltwater-rated reel, braid", icon: "fishing-rod", tint: "orange", scores: { "inshore-saltwater": 3 } },
        { label: "A 10-foot rod and pyramid sinkers", sub: "Cast past the second sandbar", icon: "anchor", tint: "gold", scores: { "surf-and-pier": 3 } },
        { label: "A fly rod or an ultralight", sub: "Small spinners, light line", icon: "feather", tint: "steel", scores: { "trout-streams": 3 } },
        { label: "Short jig rods and an auger", sub: "Plus a flasher, if I'm honest", icon: "drill", tint: "navy", scores: { "ice-angler": 3 } },
      ],
    },
    {
      q: "What makes the day for you?", icon: "smile", tint: "gold",
      options: [
        { label: "A big bass on a lure I chose", sub: "Figured it out myself", icon: "trophy", tint: "gold", scores: { "freshwater-bass": 3 } },
        { label: "Sight-casting to a tailing fish", sub: "See it, cast, watch it eat", icon: "eye", tint: "orange", scores: { "inshore-saltwater": 3 } },
        { label: "Never knowing what's on the line", sub: "Every bite is a surprise", icon: "circle-help", tint: "gold", scores: { "surf-and-pier": 3 } },
        { label: "A wild fish in a beautiful place", sub: "Then let it go", icon: "mountain", tint: "forest", scores: { "trout-streams": 3 } },
        { label: "Friends in a shack and a fish fry", sub: "Perch on the table", icon: "users", tint: "navy", scores: { "ice-angler": 3 } },
      ],
    },
    {
      q: "What water is closest to you?", icon: "map", tint: "steel",
      options: [
        { label: "The Gulf or Atlantic coast", sub: "Salt within an hour", icon: "waves", tint: "orange", scores: { "inshore-saltwater": 2, "surf-and-pier": 2 } },
        { label: "Reservoirs and farm ponds", sub: "The South and Midwest", icon: "droplets", tint: "forest", scores: { "freshwater-bass": 3 } },
        { label: "Mountains and cold rivers", sub: "Appalachians, Rockies, northern woods", icon: "mountain-snow", tint: "steel", scores: { "trout-streams": 3 } },
        { label: "Lakes that freeze every winter", sub: "Upper Midwest or New England", icon: "snowflake", tint: "navy", scores: { "ice-angler": 2, "freshwater-bass": 1 } },
      ],
    },
    {
      q: "What do you do with the fish?", icon: "hand", tint: "forest",
      options: [
        { label: "Photo, measure, release", sub: "Every time", icon: "camera", tint: "steel", scores: { "freshwater-bass": 2, "trout-streams": 2 } },
        { label: "Keep a legal one for dinner", sub: "Inside the slot", icon: "ruler", tint: "orange", scores: { "inshore-saltwater": 2, "surf-and-pier": 1 } },
        { label: "Fill the cooler for a fish fry", sub: "Within the limit", icon: "utensils", tint: "gold", scores: { "ice-angler": 2, "surf-and-pier": 2 } },
        { label: "Depends on the fish", sub: "Big ones go back", icon: "scale", tint: "navy", scores: { "freshwater-bass": 1, "inshore-saltwater": 1, "ice-angler": 1 } },
      ],
    },
  ],
  results: [
    {
      slug: "freshwater-bass", title: "Freshwater bass angler", tagline: "Lakes, ponds and a lure for every situation. Bass are your fish.", icon: "fish", tint: "forest",
      body: [
        "You want **choices and control**: picking the lure, reading the cover, figuring out the pattern. Largemouth bass fit that perfectly. They live in lakes and ponds across the country, they hit artificial lures all year, and a big one is a real trophy.",
        "Bass fishing is also the easiest to start close to home. A farm pond, a city lake or a reservoir all hold fish, and you only need a freshwater license. The learning curve is in the details: water temperature, cover and lure choice.",
        "The South grows the biggest largemouth because the season is long. Texas and Florida both run trophy programs and have lakes famous for double-digit fish, while Tennessee and Michigan add excellent smallmouth water.",
      ],
      tips: [
        "Start with one rod and three lures: a Texas-rigged worm, a spinnerbait and a squarebill. Our [bass lure picker](/quiz/bass-lure-picker) tells you which to tie on.",
        "Read your state's bass page: [Texas](/fishing/texas/bass-fishing), [Florida](/fishing/florida/bass-fishing) or [Tennessee](/fishing/tennessee/bass-fishing).",
        "Learn to measure on a flat board so your PB is a real number. See [how to measure a fish](/blog/how-to-measure-a-fish).",
        "Fish the spring pre-spawn: the heaviest bass of the year are caught then.",
      ],
      links: [
        { href: "/species/largemouth-bass", label: "Largemouth bass guide" },
        { href: "/fishing/texas/bass-fishing", label: "Bass fishing in Texas" },
        { href: "/fishing/florida/bass-fishing", label: "Bass fishing in Florida" },
        { href: "/quiz/bass-lure-picker", label: "Quiz: which bass lure fits today?" },
      ],
      app: { title: "Your bass PB, photo-backed", text: "PB Fishing tracks your personal best per species automatically and ranks photo-backed catches on state and national leaderboards that reset every six months." },
    },
    {
      slug: "inshore-saltwater", title: "Inshore saltwater angler", tagline: "Shallow bays, moving tide and a redfish tail in the grass.", icon: "sun", tint: "orange",
      body: [
        "You want **sight fishing and hard-pulling fish**. Inshore means bays, flats, mangroves, marsh and backcountry creeks, where redfish, snook and spotted seatrout feed in water you can often see through. The tide matters more than the time of day.",
        "Florida is the capital of inshore fishing, from the Panhandle grass flats to the mangroves of the southwest coast. Note that Florida sells **separate freshwater and saltwater licenses**, and redfish and snook have size slots and seasonal rules that vary by region. Check the state's own regulations before you keep anything.",
        "Starter setup: a 7-foot medium spinning rod, a 2500 to 3000 size saltwater-rated reel, 10 to 15 lb braid and a 20 to 30 lb fluorocarbon leader. Live shrimp under a popping cork, or a 1/8 to 1/4 oz jig head with a paddle-tail, catch almost everything inshore.",
      ],
      tips: [
        "Plan around tide: moving water, especially the first hours of the outgoing, beats slack tide.",
        "Read the [Florida fishing license guide](/fishing/florida/fishing-license) before your first trip.",
        "Use the [Florida species and seasons calendar](/fishing/florida/fish-species-seasons) to know what's running each month.",
        "Rinse reels with fresh water after every trip. Salt eats bearings fast.",
        "Handle slot fish carefully and release them quickly: [how to release a fish](/blog/how-to-release-a-fish).",
      ],
      links: [
        { href: "/fishing/florida", label: "Fishing in Florida" },
        { href: "/fishing/florida/fishing-license", label: "Florida fishing license" },
        { href: "/fishing/florida/fish-species-seasons", label: "Florida fish species and seasons" },
      ],
      app: { title: "Log the tide you caught it on", text: "PB Fishing saves the date, water and weather with each photo, so you can see later which days on the flats produced your best redfish." },
    },
    {
      slug: "surf-and-pier", title: "Surf and pier angler", tagline: "A cooler, a sand spike and no idea what bites next. That's the fun.", icon: "umbrella", tint: "gold",
      body: [
        "You like **variety and simplicity**. From a pier or the beach, one rig can catch whiting, pompano, sheepshead around the pilings, Spanish mackerel in summer and a bull red when fall arrives. No boat, no guide, and the next bite could be anything.",
        "The Texas Gulf coast and Florida's piers and beaches are some of the best surf fishing in the country. In Texas, saltwater fishing requires a saltwater endorsement on top of the base license. Rules change by state, so read the license page before the trip.",
        "Starter setup: a 9 to 11 foot surf rod, a 4000 to 6000 size reel, 2 to 4 oz pyramid or sputnik sinkers, and a double-drop rig with size 2 to 1/0 circle hooks. Fresh shrimp and sand fleas are the most dependable baits.",
      ],
      tips: [
        "Fish the troughs between sandbars; that's where the waves wash food and where fish cruise.",
        "Early morning and late afternoon on a moving tide beat midday at slack tide.",
        "Check the [Texas fishing license page](/fishing/texas/fishing-license) for the saltwater endorsement before your first coastal trip.",
        "Bring a measuring board. Many surf species have minimum sizes, and guessing is how anglers get tickets.",
      ],
      links: [
        { href: "/fishing/texas", label: "Fishing in Texas" },
        { href: "/fishing/texas/fishing-license", label: "Texas fishing license" },
        { href: "/fishing/florida/beginner-fishing-spots", label: "Beginner fishing spots in Florida" },
        { href: "/blog/fishing-for-beginners", label: "Fishing for beginners" },
      ],
      app: { title: "Ten species, one log", text: "PB Fishing keeps a personal best for every species you log, so a pier season with ten species gives you ten PBs to beat. Logging is free and unlimited." },
    },
    {
      slug: "trout-streams", title: "Trout stream angler", tagline: "Cold water, quiet woods and a fish with colors you can't fake.", icon: "trees", tint: "steel",
      body: [
        "You fish for **the place as much as the fish**. Trout live in cold, clean water: mountain creeks, spring-fed streams and tailwaters below dams. Reading a riffle and drifting a fly or a small spinner through it is a skill that takes years and never gets old.",
        "Tennessee and Michigan are both great trout country. Tennessee has wild trout in the Great Smoky Mountains and cold tailwaters below TVA dams, such as the Clinch and South Holston rivers, that hold trout all year. Michigan has classic rivers like the Au Sable, Manistee and Pere Marquette.",
        "Starter setup: a 9-foot 5-weight fly rod, or an ultralight spinning rod with 4 to 6 lb line and 1/16 to 1/8 oz inline spinners. On tailwaters, check the dam's generation schedule; the water can rise fast when turbines start.",
      ],
      tips: [
        "Approach from downstream and stay low. Trout face into the current and spook from shadows.",
        "Read [Tennessee's species and seasons](/fishing/tennessee/fish-species-seasons) or the [Michigan fishing guide](/fishing/michigan) before your first trip.",
        "Learn the [rainbow trout guide](/species/rainbow-trout): water temperature decides where they hold.",
        "Release wild trout fast and keep them in the water: [how to release a fish](/blog/how-to-release-a-fish).",
      ],
      links: [
        { href: "/fishing/tennessee", label: "Fishing in Tennessee" },
        { href: "/fishing/michigan", label: "Fishing in Michigan" },
        { href: "/species/rainbow-trout", label: "Rainbow trout guide" },
      ],
      app: { title: "Works where the signal doesn't", text: "Trout water often has no cell service. PB Fishing stores catches logged with no signal on your phone and uploads them when you're back online." },
    },
    {
      slug: "ice-angler", title: "Ice angler", tagline: "Hardwater season is the best season. Drill, drop, jig.", icon: "snowflake", tint: "navy",
      body: [
        "You like **community, comfort and a full bucket**. Ice fishing turns a frozen lake into a village of shacks, and walleye, yellow perch, crappie and bluegill bite all winter. It's also the easiest way to fish deep water without a boat.",
        "Minnesota is ice-fishing country, with thousands of lakes that freeze every year. Safety comes first: the Minnesota DNR's guideline is at least **4 inches of new, clear ice** to walk on, and twice that for white, snow-packed ice. No ice is guaranteed safe, so check it yourself as you go.",
        "Starter setup: a 24 to 32 inch ice rod, 2 to 4 lb line and small jigs with waxworms for panfish, or 1/8 to 1/4 oz jigging spoons tipped with a minnow head for walleye. A hand auger, a bucket and spikes or picks around your neck cover the basics.",
      ],
      tips: [
        "Check ice thickness every few steps with a spud bar or auger, especially near inlets and pressure ridges.",
        "Fish first ice and late ice; those are often the best bites of the winter.",
        "Start with the [Minnesota best lakes guide](/fishing/minnesota/best-lakes) and the [walleye guide](/species/walleye).",
        "Walleye bite best at dawn and dusk under the ice too. Plan your hours around them.",
      ],
      links: [
        { href: "/fishing/minnesota", label: "Fishing in Minnesota" },
        { href: "/fishing/minnesota/best-lakes", label: "Best lakes in Minnesota" },
        { href: "/fishing/minnesota/fish-species-seasons", label: "Minnesota fish species and seasons" },
        { href: "/species/walleye", label: "Walleye guide" },
      ],
      app: { title: "Log through the ice, sync later", text: "PB Fishing stores catches logged out on the ice with no signal and uploads them when you're back online. Your walleye and perch PBs are tracked automatically." },
    },
  ],
  faq: [
    { q: "Is saltwater or freshwater fishing better for beginners?", a: "Freshwater is usually easier to start: there's a pond or lake near most people, gear is cheaper and doesn't corrode. Pier fishing is the easiest way into saltwater because you don't need a boat. See [fishing for beginners](/blog/fishing-for-beginners)." },
    { q: "Do I need a different license for saltwater fishing?", a: "Often, yes. Many coastal states sell separate freshwater and saltwater licenses or require a saltwater endorsement. Check your state's page, for example [Florida](/fishing/florida/fishing-license) or [Texas](/fishing/texas/fishing-license)." },
    { q: "Can I use freshwater gear in saltwater?", a: "For a few trips, yes, but rinse it with fresh water every time. Salt corrodes bearings, guides and hooks quickly, so a saltwater-rated reel is worth it if you go often." },
  ],
};
export default quiz;
