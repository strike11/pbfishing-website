/**
 * The 50 states. `live` states have their full page set under /fishing/<slug>.
 * `agency` is the state's official fish & wildlife agency (URLs checked by tools/check-links.mjs).
 */
export interface State {
  slug: string;
  name: string;
  abbr: string;
  agency: string;
  agencyUrl: string;
  live?: boolean;
  /** Short line used on the states hub card. */
  blurb?: string;
}

export const STATES: State[] = [
  { slug: "alabama", name: "Alabama", abbr: "AL", agency: "Alabama Department of Conservation and Natural Resources", agencyUrl: "https://www.outdooralabama.com/" },
  { slug: "alaska", name: "Alaska", abbr: "AK", agency: "Alaska Department of Fish and Game", agencyUrl: "https://www.adfg.alaska.gov/" },
  { slug: "arizona", name: "Arizona", abbr: "AZ", agency: "Arizona Game and Fish Department", agencyUrl: "https://www.azgfd.com/" },
  { slug: "arkansas", name: "Arkansas", abbr: "AR", agency: "Arkansas Game and Fish Commission", agencyUrl: "https://www.agfc.com/" },
  { slug: "california", name: "California", abbr: "CA", agency: "California Department of Fish and Wildlife", agencyUrl: "https://wildlife.ca.gov/" },
  { slug: "colorado", name: "Colorado", abbr: "CO", agency: "Colorado Parks and Wildlife", agencyUrl: "https://cpw.state.co.us/" },
  { slug: "connecticut", name: "Connecticut", abbr: "CT", agency: "Connecticut Department of Energy and Environmental Protection", agencyUrl: "https://portal.ct.gov/deep" },
  { slug: "delaware", name: "Delaware", abbr: "DE", agency: "Delaware Division of Fish and Wildlife", agencyUrl: "https://dnrec.delaware.gov/fish-wildlife/" },
  { slug: "florida", name: "Florida", abbr: "FL", agency: "Florida Fish and Wildlife Conservation Commission", agencyUrl: "https://myfwc.com/" },
  { slug: "georgia", name: "Georgia", abbr: "GA", agency: "Georgia Wildlife Resources Division", agencyUrl: "https://georgiawildlife.com/" },
  { slug: "hawaii", name: "Hawaii", abbr: "HI", agency: "Hawaii Division of Aquatic Resources", agencyUrl: "https://dlnr.hawaii.gov/dar/" },
  { slug: "idaho", name: "Idaho", abbr: "ID", agency: "Idaho Department of Fish and Game", agencyUrl: "https://idfg.idaho.gov/" },
  { slug: "illinois", name: "Illinois", abbr: "IL", agency: "Illinois Department of Natural Resources", agencyUrl: "https://dnr.illinois.gov/" },
  { slug: "indiana", name: "Indiana", abbr: "IN", agency: "Indiana Department of Natural Resources", agencyUrl: "https://www.in.gov/dnr/" },
  { slug: "iowa", name: "Iowa", abbr: "IA", agency: "Iowa Department of Natural Resources", agencyUrl: "https://www.iowadnr.gov/" },
  { slug: "kansas", name: "Kansas", abbr: "KS", agency: "Kansas Department of Wildlife and Parks", agencyUrl: "https://ksoutdoors.gov/" },
  { slug: "kentucky", name: "Kentucky", abbr: "KY", agency: "Kentucky Department of Fish and Wildlife Resources", agencyUrl: "https://fw.ky.gov/" },
  { slug: "louisiana", name: "Louisiana", abbr: "LA", agency: "Louisiana Department of Wildlife and Fisheries", agencyUrl: "https://www.wlf.louisiana.gov/" },
  { slug: "maine", name: "Maine", abbr: "ME", agency: "Maine Department of Inland Fisheries and Wildlife", agencyUrl: "https://www.maine.gov/ifw/" },
  { slug: "maryland", name: "Maryland", abbr: "MD", agency: "Maryland Department of Natural Resources", agencyUrl: "https://dnr.maryland.gov/" },
  { slug: "massachusetts", name: "Massachusetts", abbr: "MA", agency: "MassWildlife", agencyUrl: "https://www.mass.gov/orgs/division-of-fisheries-and-wildlife" },
  { slug: "michigan", name: "Michigan", abbr: "MI", agency: "Michigan Department of Natural Resources", agencyUrl: "https://www.michigan.gov/dnr" },
  { slug: "minnesota", name: "Minnesota", abbr: "MN", agency: "Minnesota Department of Natural Resources", agencyUrl: "https://www.dnr.state.mn.us/" },
  { slug: "mississippi", name: "Mississippi", abbr: "MS", agency: "Mississippi Department of Wildlife, Fisheries, and Parks", agencyUrl: "https://www.mdwfp.com/" },
  { slug: "missouri", name: "Missouri", abbr: "MO", agency: "Missouri Department of Conservation", agencyUrl: "https://mdc.mo.gov/" },
  { slug: "montana", name: "Montana", abbr: "MT", agency: "Montana Fish, Wildlife & Parks", agencyUrl: "https://fwp.mt.gov/" },
  { slug: "nebraska", name: "Nebraska", abbr: "NE", agency: "Nebraska Game and Parks Commission", agencyUrl: "https://outdoornebraska.gov/" },
  { slug: "nevada", name: "Nevada", abbr: "NV", agency: "Nevada Department of Wildlife", agencyUrl: "https://www.ndow.org/" },
  { slug: "new-hampshire", name: "New Hampshire", abbr: "NH", agency: "New Hampshire Fish and Game Department", agencyUrl: "https://www.wildlife.nh.gov/" },
  { slug: "new-jersey", name: "New Jersey", abbr: "NJ", agency: "New Jersey Division of Fish and Wildlife", agencyUrl: "https://dep.nj.gov/njfw/" },
  { slug: "new-mexico", name: "New Mexico", abbr: "NM", agency: "New Mexico Department of Game and Fish", agencyUrl: "https://www.wildlife.state.nm.us/" },
  { slug: "new-york", name: "New York", abbr: "NY", agency: "New York State Department of Environmental Conservation", agencyUrl: "https://dec.ny.gov/" },
  { slug: "north-carolina", name: "North Carolina", abbr: "NC", agency: "North Carolina Wildlife Resources Commission", agencyUrl: "https://www.ncwildlife.org/" },
  { slug: "north-dakota", name: "North Dakota", abbr: "ND", agency: "North Dakota Game and Fish Department", agencyUrl: "https://gf.nd.gov/" },
  { slug: "ohio", name: "Ohio", abbr: "OH", agency: "Ohio Department of Natural Resources, Division of Wildlife", agencyUrl: "https://ohiodnr.gov/discover-and-learn/safety-conservation/about-ODNR/wildlife" },
  { slug: "oklahoma", name: "Oklahoma", abbr: "OK", agency: "Oklahoma Department of Wildlife Conservation", agencyUrl: "https://www.wildlifedepartment.com/" },
  { slug: "oregon", name: "Oregon", abbr: "OR", agency: "Oregon Department of Fish and Wildlife", agencyUrl: "https://myodfw.com/" },
  { slug: "pennsylvania", name: "Pennsylvania", abbr: "PA", agency: "Pennsylvania Fish and Boat Commission", agencyUrl: "https://www.fishandboat.com/" },
  { slug: "rhode-island", name: "Rhode Island", abbr: "RI", agency: "Rhode Island Department of Environmental Management", agencyUrl: "https://dem.ri.gov/" },
  { slug: "south-carolina", name: "South Carolina", abbr: "SC", agency: "South Carolina Department of Natural Resources", agencyUrl: "https://www.dnr.sc.gov/" },
  { slug: "south-dakota", name: "South Dakota", abbr: "SD", agency: "South Dakota Game, Fish and Parks", agencyUrl: "https://gfp.sd.gov/" },
  { slug: "tennessee", name: "Tennessee", abbr: "TN", agency: "Tennessee Wildlife Resources Agency", agencyUrl: "https://www.tn.gov/twra.html" },
  { slug: "texas", name: "Texas", abbr: "TX", agency: "Texas Parks and Wildlife Department", agencyUrl: "https://tpwd.texas.gov/" },
  { slug: "utah", name: "Utah", abbr: "UT", agency: "Utah Division of Wildlife Resources", agencyUrl: "https://wildlife.utah.gov/" },
  { slug: "vermont", name: "Vermont", abbr: "VT", agency: "Vermont Fish and Wildlife Department", agencyUrl: "https://vtfishandwildlife.com/" },
  { slug: "virginia", name: "Virginia", abbr: "VA", agency: "Virginia Department of Wildlife Resources", agencyUrl: "https://dwr.virginia.gov/" },
  { slug: "washington", name: "Washington", abbr: "WA", agency: "Washington Department of Fish and Wildlife", agencyUrl: "https://wdfw.wa.gov/" },
  { slug: "west-virginia", name: "West Virginia", abbr: "WV", agency: "West Virginia Division of Natural Resources", agencyUrl: "https://wvdnr.gov/" },
  { slug: "wisconsin", name: "Wisconsin", abbr: "WI", agency: "Wisconsin Department of Natural Resources", agencyUrl: "https://dnr.wisconsin.gov/" },
  { slug: "wyoming", name: "Wyoming", abbr: "WY", agency: "Wyoming Game and Fish Department", agencyUrl: "https://wgfd.wyo.gov/" },
];

/** Pilot states with full page sets. Keep in sync with src/content/states/<slug>/. */
export const LIVE_STATES = ["texas", "florida", "minnesota", "michigan", "tennessee"];
for (const s of STATES) s.live = LIVE_STATES.includes(s.slug);

export const stateBySlug = (slug: string) => STATES.find((s) => s.slug === slug);

/** The page types every live state gets, in sub-navigation order. */
export const STATE_PAGES = [
  { type: "hub", slug: "", nav: "Overview" },
  { type: "best-lakes", slug: "best-lakes", nav: "Best lakes & rivers" },
  { type: "bass-fishing", slug: "bass-fishing", nav: "Bass fishing" },
  { type: "species-seasons", slug: "fish-species-seasons", nav: "Species & seasons" },
  { type: "fishing-license", slug: "fishing-license", nav: "License & rules" },
  { type: "state-record-fish", slug: "state-record-fish", nav: "State records" },
  { type: "beginner-spots", slug: "beginner-fishing-spots", nav: "Beginner spots" },
] as const;
export type StatePageType = (typeof STATE_PAGES)[number]["type"];
export const statePagePath = (state: string, type: StatePageType) => {
  const p = STATE_PAGES.find((x) => x.type === type)!;
  return p.slug ? `/fishing/${state}/${p.slug}` : `/fishing/${state}`;
};
