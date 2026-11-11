import type { Quiz } from "../quiz-types";

const quiz: Quiz = {
  slug: "bass-lure-picker",
  title: "Which bass lure should you tie on today?",
  seoTitle: "Bass Lure Picker: What Lure to Use Today (6 Questions)",
  description: "Six questions about today's water temp, clarity, sky, wind, cover and fish mood. Get the bass lure to tie on first, with weight, color and retrieve.",
  intro: "Standing at the ramp with 40 lures and no plan? Tell us what the water and the weather are doing. Six questions, under a minute, and you get one lure to start with plus the weight, color and retrieve that fit.",
  kind: "personality",
  icon: "fishing-hook",
  tint: "orange",
  minutes: 1,
  keyword: "what bass lure to use today",
  art: "icons:fishing-hook,thermometer,wind",
  published: "2026-11-11",
  questions: [
    {
      q: "What's the water temperature?", sub: "Use your graph, a thermometer or a good guess from the season.", icon: "thermometer", tint: "steel",
      options: [
        { label: "Under 50°F", sub: "Winter, or the first warm-up", icon: "snowflake", tint: "navy", scores: { jerkbait: 3, finesse: 2, "texas-rig": 1 } },
        { label: "50 to 60°F", sub: "Early spring, fish moving shallow", icon: "sprout", tint: "forest", scores: { jerkbait: 2, squarebill: 2, spinnerbait: 1 } },
        { label: "60 to 72°F", sub: "Spawn and post-spawn", icon: "flower-2", tint: "gold", scores: { "texas-rig": 2, finesse: 2, topwater: 1 } },
        { label: "Over 75°F", sub: "Summer pattern", icon: "sun", tint: "orange", scores: { topwater: 2, "texas-rig": 2, finesse: 1 } },
        { label: "Falling from 70 toward 55°F", sub: "Fall, bait moving into creeks", icon: "leaf", tint: "orange", scores: { spinnerbait: 3, squarebill: 2, topwater: 2 } },
      ],
    },
    {
      q: "How clear is the water?", sub: "Lower a white lure and see where it disappears.", icon: "eye", tint: "forest",
      options: [
        { label: "Gin clear", sub: "I can see bottom in 8 feet or more", icon: "droplet", tint: "steel", scores: { finesse: 3, jerkbait: 2 } },
        { label: "Light green", sub: "Lure vanishes around 4 to 6 feet", icon: "droplets", tint: "forest", scores: { squarebill: 2, jerkbait: 1, topwater: 1 } },
        { label: "Stained", sub: "One to three feet of visibility", icon: "cloud-fog", tint: "gold", scores: { spinnerbait: 2, squarebill: 2, "texas-rig": 1 } },
        { label: "Muddy", sub: "Under a foot, chocolate milk", icon: "cloudy", tint: "orange", scores: { spinnerbait: 2, "texas-rig": 2 } },
      ],
    },
    {
      q: "What's the sky doing?", icon: "cloud-sun", tint: "gold",
      options: [
        { label: "Bluebird and bright", sub: "Not a cloud, high sun", icon: "sun", tint: "gold", scores: { finesse: 2, "texas-rig": 2 } },
        { label: "Overcast", sub: "Low, flat clouds all day", icon: "cloudy", tint: "steel", scores: { spinnerbait: 2, topwater: 2, squarebill: 1 } },
        { label: "Dawn or dusk", sub: "Low light, first or last hour", icon: "sunrise", tint: "orange", scores: { topwater: 3, spinnerbait: 1 } },
        { label: "Light rain", sub: "Drizzle on the water", icon: "cloud-drizzle", tint: "navy", scores: { spinnerbait: 1, topwater: 2, squarebill: 1 } },
      ],
    },
    {
      q: "How hard is the wind blowing?", icon: "wind", tint: "steel",
      options: [
        { label: "Dead calm", sub: "Glass, you can see every ripple", icon: "waves", tint: "navy", scores: { topwater: 2, finesse: 2 } },
        { label: "Light ripple", sub: "Under 8 mph", icon: "wind", tint: "steel", scores: { jerkbait: 2, squarebill: 1, topwater: 1 } },
        { label: "Steady 10 to 15 mph", sub: "Waves slapping the bank", icon: "wind", tint: "forest", scores: { spinnerbait: 3, squarebill: 1, jerkbait: 2 } },
        { label: "Howling", sub: "Hard to hold the boat on a spot", icon: "tornado", tint: "orange", scores: { spinnerbait: 2, "texas-rig": 2 } },
      ],
    },
    {
      q: "Where are you fishing?", sub: "Pick the cover or depth in front of you.", icon: "map-pin", tint: "forest",
      options: [
        { label: "Shallow wood", sub: "Stumps and laydowns, 1 to 4 feet", icon: "tree-deciduous", tint: "forest", scores: { squarebill: 3, spinnerbait: 2 } },
        { label: "Thick grass or matted weeds", sub: "Hydrilla, milfoil, pads", icon: "sprout", tint: "gold", scores: { "texas-rig": 3, topwater: 2 } },
        { label: "Docks", sub: "Shade, posts, boat lanes", icon: "anchor", tint: "steel", scores: { "texas-rig": 2, finesse: 2 } },
        { label: "Points and flats, 6 to 15 feet", sub: "Open water with some rock", icon: "mountain", tint: "navy", scores: { jerkbait: 2, finesse: 2 } },
        { label: "Deep offshore, 20 feet plus", sub: "Ledges, humps, brush piles", icon: "arrow-down-to-line", tint: "navy", scores: { finesse: 3, "texas-rig": 1 } },
      ],
    },
    {
      q: "What are the fish doing?", sub: "Your best read of the last half hour.", icon: "activity", tint: "orange",
      options: [
        { label: "Busting bait on top", sub: "Swirls and splashes", icon: "zap", tint: "gold", scores: { topwater: 3, spinnerbait: 1 } },
        { label: "Chasing shad shallow", sub: "Bait flickering on the bank", icon: "fish", tint: "orange", scores: { spinnerbait: 2, squarebill: 2 } },
        { label: "Suspended, not biting", sub: "Marking fish off the bottom", icon: "gauge", tint: "steel", scores: { jerkbait: 3, finesse: 1 } },
        { label: "Tight to cover and lazy", sub: "One or two short strikes", icon: "turtle", tint: "forest", scores: { "texas-rig": 3, finesse: 1 } },
        { label: "No idea yet", sub: "Haven't found them", icon: "search", tint: "navy", scores: { squarebill: 2, spinnerbait: 1 } },
      ],
    },
  ],
  results: [
    {
      slug: "finesse", title: "Drop shot or Ned rig", tagline: "Clear water, bright sky, tough bite. Go small and be patient.", icon: "target", tint: "navy",
      body: [
        "Your answers add up to **pressured or neutral fish in clear water**: bright sun, calm, deep, or right after a front. Big moving baits get looked at and refused. Small, natural baits on light line get eaten.",
        "**Drop shot:** a 1/4 oz weight (3/8 oz deeper than 25 feet), a 12 to 18 inch leader, a size 1 or 1/0 drop shot hook, and a 3.5 to 4.5 inch minnow or finesse worm, nose-hooked. **Ned rig:** a 1/10 to 1/6 oz mushroom-style jig head with a 2.5 to 3 inch floating stick bait. **Color:** green pumpkin, watermelon or a natural shad. **Line:** 6 to 8 lb fluorocarbon leader on 10 to 15 lb braid.",
        "**Retrieve:** for the drop shot, keep the weight on bottom and shake slack line so the bait quivers in place. For the Ned, drag and hop it slowly along the bottom with long pauses. Set the hook with a steady sweep, not a big snap, on light line.",
      ],
      tips: [
        "Use your graph or a contour map to find deep fish first, then drop on them vertically.",
        "After a cold front, downsize and slow down rather than going home. See [barometric pressure and fishing](/blog/barometric-pressure-and-fishing).",
        "Finesse rigs catch lots of dinks. Move spots when you're only catching small fish.",
        "A spinning rod in medium-light power with a fast tip makes light-line hooksets easier.",
      ],
      links: [
        { href: "/blog/best-bass-lures-by-season", label: "Best bass lures by season" },
        { href: "/blog/barometric-pressure-and-fishing", label: "Barometric pressure and fishing" },
        { href: "/species/smallmouth-bass", label: "Smallmouth bass guide" },
      ],
      app: { title: "Grind out the tough days, then compare", text: "PB Fishing logs every catch with conditions, free and unlimited. Premium catch insights show trends across trips, like which tough days still produced." },
    },
    {
      slug: "jerkbait", title: "Suspending jerkbait", tagline: "Cold, clear and suspended. Jerk, jerk, pause, and wait longer than feels right.", icon: "hourglass", tint: "steel",
      body: [
        "Your answers say **cold or cool water, decent clarity and fish holding off the bottom**. A suspending jerkbait darts, then hangs dead still in front of a lethargic bass. In water under 50°F that pause is everything; it's one of the few baits that catches big cold-water fish without moving fast.",
        "**Size:** a 4 to 4.5 inch (about 110 mm) suspending jerkbait that runs 4 to 8 feet. **Color:** translucent ghost minnow or clear shad in clear water, a solid shad or chartreuse pattern in light stain. **Line:** 8 to 12 lb fluorocarbon helps it get down and stay down.",
        "**Retrieve:** crank it down, then two sharp jerks on slack line and a pause. Start with 3 to 5 seconds of pause in the 50s, and 10 seconds or more when the water is in the low 40s. Most bites come during the pause, often as a tick or just weight on the line.",
      ],
      tips: [
        "Change only one thing at a time: pause length first, then cadence, then color.",
        "Fish points and the first drop near spawning flats in late winter and early spring.",
        "Smallmouth in clear lakes love a jerkbait. See the [smallmouth bass guide](/species/smallmouth-bass).",
        "On a slick, calm day, switch to a finesse rig; jerkbaits work best with at least a ripple.",
      ],
      links: [
        { href: "/blog/best-bass-lures-by-season", label: "Best bass lures by season" },
        { href: "/species/smallmouth-bass", label: "Smallmouth bass guide" },
        { href: "/fishing/michigan/bass-fishing", label: "Bass fishing in Michigan" },
      ],
      app: { title: "Cold-water bites are worth logging", text: "Winter fish are few, so every one tells you something. PB Fishing saves the conditions snapshot with the photo, so you can compare cold-water trips side by side." },
    },
    {
      slug: "topwater", title: "Topwater", tagline: "Low light, calm water and fish looking up. The best bite in bass fishing.", icon: "sunrise", tint: "gold",
      body: [
        "Your conditions say **fish are feeding up in the water column**: dawn or dusk, overcast, warm water, bait getting busted. That's topwater time. Nothing else gives you the blow-up, and when it's on, nothing else catches them faster.",
        "**Pick by situation:** a 3/8 to 1/2 oz walking bait over open water and points, a 1/4 to 3/8 oz popper near docks and grass edges on calm mornings, a 1/4 to 3/8 oz buzzbait over shallow flats and wood, and a hollow-body frog over matted grass. **Color:** bone or white on bright days, clear or shad over clear water, black at dawn, dusk and night.",
        "**Retrieve:** walk the dog with steady rod-tip twitches on slack line. Pause after a miss; a bass that blew up often eats again within seconds. Wait until you feel the weight before you set the hook, especially on a frog.",
      ],
      tips: [
        "Be on the water at first light in summer; the topwater window often closes when the sun gets on the water.",
        "Throw it into the wind-protected side on breezy days so the bait still works naturally.",
        "Use monofilament or braid, not fluorocarbon; fluorocarbon sinks and drags the nose down.",
        "Read [the best time to fish](/blog/best-time-to-fish) to plan around low-light hours.",
      ],
      links: [
        { href: "/blog/best-bass-lures-by-season", label: "Best bass lures by season" },
        { href: "/blog/best-time-to-fish", label: "The best time to fish" },
        { href: "/fishing/florida/bass-fishing", label: "Bass fishing in Florida" },
      ],
      app: { title: "Plan for the low-light hours", text: "PB Fishing gives a daily bite forecast and live conditions for 20,000+ US waters, and Premium adds an hourly forecast. Conditions matter, but nothing guarantees a blow-up." },
    },
    {
      slug: "texas-rig", title: "Texas-rigged soft plastic", tagline: "Fish are tight to cover. Put it in their face and wait.", icon: "fishing-hook", tint: "forest",
      body: [
        "Your conditions say **bass are buried in cover and not chasing**. That's bright sun, thick grass, docks or a hot summer afternoon. A Texas rig is weedless, falls straight down into holes, and stays in the strike zone as long as you want.",
        "**Setup:** a 5 to 6 inch creature bait or craw, or a 7 to 10 inch worm in summer. A 3/0 to 5/0 offset or straight-shank hook. Bullet weight: 1/8 to 1/4 oz on open bottom and around docks, 3/8 to 1/2 oz for flipping wood, and 1 to 1-1/2 oz to punch through matted grass. **Color:** green pumpkin in clear to light-green water, junebug or black and blue in stained or muddy water.",
        "**Retrieve:** flip or pitch to the target, let it hit bottom, then hop it once or twice and pull it out. Most bites come on the fall, so watch your line. When the water is under 55°F, a 3/8 to 1/2 oz jig with a craw trailer does the same job with a bulkier, slower fall.",
      ],
      tips: [
        "Peg the weight with a bobber stop when you fish thick cover so the bait and weight stay together.",
        "Use 15 to 20 lb fluorocarbon around docks and wood, and 50 to 65 lb braid for punching mats.",
        "Shady side of the dock first on a sunny day; fish slide under the walkway as the sun climbs.",
        "In summer, fish it early and late shallow, and deeper midday. See [the best time to fish](/blog/best-time-to-fish).",
      ],
      links: [
        { href: "/blog/best-bass-lures-by-season", label: "Best bass lures by season" },
        { href: "/fishing/florida/bass-fishing", label: "Bass fishing in Florida" },
        { href: "/fishing/texas/bass-fishing", label: "Bass fishing in Texas" },
      ],
      app: { title: "The heavy one goes on the board", text: "When a flipping bite hands you a big one, a side-profile photo in PB Fishing logs the length and weight and keeps your personal best for that species." },
    },
    {
      slug: "squarebill", title: "Squarebill crankbait", tagline: "Shallow wood, warming water. Bang it off everything.", icon: "zap", tint: "orange",
      body: [
        "Your answers point to **active fish in shallow cover**. A squarebill dives 2 to 5 feet and its square lip bounces off stumps, rocks and laydowns instead of hanging up. That erratic deflection is what draws reaction strikes from bass that ignore a straight retrieve.",
        "**Size:** a 1.5 or 2.5 size squarebill, roughly 3/8 to 1/2 oz. **Color:** a natural shad pattern in light-green water, chartreuse with a black or blue back in stained water, and red or orange crawfish colors in early spring when the water is in the 50s.",
        "**Retrieve:** steady and medium-fast, aiming to hit cover. When the bait deflects, pause for a beat and let it float up; that's when a lot of fish eat. Fish it on 12 to 15 lb fluorocarbon or monofilament with a moderate rod so fish don't tear off the trebles.",
      ],
      tips: [
        "Make three casts to every piece of wood from different angles before moving on.",
        "Early spring: red crankbaits around rock and wood in 50 to 58°F water are a time-tested pattern. See [water temperature and fish activity](/blog/water-temperature-and-fish-activity).",
        "If you're not finding fish, a squarebill is a search bait. Cover a bank fast, then slow down where you get bit.",
        "Keep a spare tied on. A snagged crankbait on a stump is a five-minute fix you don't want during a bite.",
      ],
      links: [
        { href: "/blog/best-bass-lures-by-season", label: "Best bass lures by season" },
        { href: "/blog/water-temperature-and-fish-activity", label: "Water temperature and fish activity" },
        { href: "/fishing/tennessee/bass-fishing", label: "Bass fishing in Tennessee" },
      ],
      app: { title: "Know which bank was hot", text: "Log each fish with a photo in PB Fishing and the water and conditions are saved with it. Your personal best per species is tracked automatically." },
    },
    {
      slug: "spinnerbait", title: "Spinnerbait", tagline: "Wind, stain and shad. Throw the blade and cover water.", icon: "sparkles", tint: "gold",
      body: [
        "Your conditions say **moving fish and limited visibility**. A spinnerbait is built for that: the blades flash and thump, the wire arm deflects off wood, and bass find it by vibration through their lateral line even when they can't see it well. It shines on a windy bank in stained water, and it's the classic fall bait when shad pile into creek arms.",
        "**Weight:** 3/8 oz for 1 to 5 feet, 1/2 oz when it's windy or you want it a bit deeper. **Blades:** double willow in clearer water and wind (more flash), a Colorado or willow-Colorado combo in muddy water (more thump). **Color:** white or white-chartreuse in stained water, a translucent shad pattern in clearer water, chartreuse-white or black with a gold Colorado blade when it's muddy.",
        "**Retrieve:** cast past the target, keep the bait just under the surface or slow-roll it so the blades tick the top of the cover, and let it bump stumps. A flutter after a deflection draws a lot of strikes. If fish short-strike, add a trailer hook.",
      ],
      tips: [
        "Fish the windblown bank first. Wind pushes bait and breaks up the light, and that's where a spinnerbait earns its keep.",
        "In muddy water after rain, slow down and go bigger on the Colorado blade. See [fishing after rain, wind or a cold front](/blog/fishing-after-rain-wind-cold-front).",
        "Match the bait size to the shad you see. Small fall shad, smaller blades.",
        "Swap to a squarebill if fish follow but won't commit; the hard deflection can trigger them.",
      ],
      links: [
        { href: "/blog/best-bass-lures-by-season", label: "Best bass lures by season" },
        { href: "/blog/fishing-after-rain-wind-cold-front", label: "Fishing after rain, wind or a cold front" },
        { href: "/species/largemouth-bass", label: "Largemouth bass guide" },
      ],
      app: { title: "Remember what the wind was doing", text: "PB Fishing saves the date, water, weather and pressure with every catch, so next fall you can see which windy days actually produced on the spinnerbait." },
    },
  ],
  faq: [
    { q: "What is the best all-around bass lure?", a: "There isn't one. A Texas-rigged soft plastic catches bass in the most situations, but a spinnerbait, squarebill or jerkbait will beat it when the water, wind and temperature favor them. See [best bass lures by season](/blog/best-bass-lures-by-season)." },
    { q: "What color lure should I use in muddy water?", a: "Dark or bright, with vibration: black and blue, or chartreuse and white with a Colorado blade. Fish rely on their lateral line more than their eyes when visibility is under a foot." },
    { q: "Does water temperature really change which lure works?", a: "Yes. Bass are cold-blooded, so water temperature sets how far they'll chase. Under 50°F, slow baits with pauses work best; from about 60 to 80°F, moving and topwater baits come into play. See [water temperature and fish activity](/blog/water-temperature-and-fish-activity)." },
  ],
};
export default quiz;
