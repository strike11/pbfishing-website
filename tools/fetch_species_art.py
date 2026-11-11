"""Download public-domain / CC0 fish illustrations from Wikimedia Commons.

Each file's licence is read from the Commons API (extmetadata) and anything that is not
Public domain or CC0 is skipped. Writes src/assets/species/<slug>.jpg and
src/data/species-credits.json (source page, author, licence) for content/image-credits.md.
Usage: python3 -I tools/fetch_species_art.py
"""
import json, os, re, sys, time, urllib.parse, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "src/assets/species")
CREDITS = os.path.join(ROOT, "src/data/species-credits.json")
UA = "pbfishing-site-build/1.0 (static site; image licence check)"

FILES = {
    "largemouth-bass": "Largemouth bass - DPLA - (white background).jpg",
    "smallmouth-bass": "Micropterus dolomieu smallmouth bass fish.jpg",
    "spotted-bass": "Micropterus punctulatus.jpg",
    "striped-bass": "Striped bass morone saxatilis fish (white background).jpg",
    "white-bass": "Morone chrysops white bass fish (white background).jpg",
    "white-crappie": "White crappie pomoxis annularis (white background).jpg",
    "black-crappie": "Black Crappie (Pomoxis nigromaculatus).jpg",
    "bluegill": "Bluegill (Lepomis macrochirus) black background.jpg",
    "redear-sunfish": "Redearsunfishnctc (white background).jpg",
    "channel-catfish": "Ictalurus punctatus (white background).png",
    "blue-catfish": "Blue catfish ictalurus furcatus fish (white background).jpg",
    "flathead-catfish": "Flathead catfish (white background).jpg",
    "rainbow-trout": "Oncorhynchus mykiss mid res 150dpi whiteBG.jpg",
    "brown-trout": "Brown trout FWS white background.jpg",
    "brook-trout": "Brook trout.jpg",
    "lake-trout": "Lake trout USFWS.png",
    "walleye": "Walleye (Sander vitreus).jpg",
    "sauger": "Saugernctc.jpg",
    "muskellunge": "Muskellunge (Duane Raver).png",
    "chain-pickerel": "Chain pickerel (Duane Raver).png",
    "yellow-perch": "Yellow perch fish perca flavescens.jpg",
    "common-carp": "Common carp (white background).jpg",
    "red-drum": "Red drum sciaenops ocellata.jpg",
    "spotted-seatrout": "Spotted seatrout fish cynoscion nebulosus.jpg",
    "alligator-gar": "Alligator gar fish.jpg",
    "paddlefish": "Paddlefish (white background).jpg",
    "pumpkinseed": "Pumpkinseed fish lepomis gibbosus.jpg",
}
EXTRA = json.loads(sys.argv[1]) if len(sys.argv) > 1 else {}
FILES.update(EXTRA)
OK = {"public domain", "cc0", "pd", "pdm"}

def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    for i in range(5):
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                return r.read()
        except Exception as e:
            time.sleep(3 * (i + 1))
    raise RuntimeError(url)

def strip(html):
    return re.sub(r"<[^>]+>", "", html or "").strip()

os.makedirs(OUT, exist_ok=True)
credits = json.load(open(CREDITS)) if os.path.exists(CREDITS) else {}
for slug, title in FILES.items():
    if slug in credits and os.path.exists(os.path.join(OUT, slug + ".jpg")):
        continue
    q = urllib.parse.urlencode({"action": "query", "titles": "File:" + title, "prop": "imageinfo",
        "iiprop": "url|extmetadata|size", "iiurlwidth": 1600, "format": "json"})
    data = json.loads(get("https://commons.wikimedia.org/w/api.php?" + q))
    page = next(iter(data["query"]["pages"].values()))
    if "imageinfo" not in page:
        print("MISSING", slug, title); continue
    ii = page["imageinfo"][0]; md = ii.get("extmetadata", {})
    lic = strip(md.get("LicenseShortName", {}).get("value", ""))
    if not any(k in lic.lower() for k in OK):
        print("SKIP licence", slug, lic); continue
    src = ii.get("thumburl") or ii["url"]
    try:
        raw = get(src)
    except RuntimeError:
        print("FAIL download", slug); continue
    tmp = os.path.join(OUT, slug + ".src")
    open(tmp, "wb").write(raw)
    os.system(f'sips -s format jpeg -s formatOptions 90 "{tmp}" --out "{os.path.join(OUT, slug + ".jpg")}" >/dev/null 2>&1')
    os.remove(tmp)
    credits[slug] = {
        "file": title,
        "page": ii.get("descriptionurl"),
        "author": strip(md.get("Artist", {}).get("value", "")),
        "credit": strip(md.get("Credit", {}).get("value", ""))[:200],
        "licence": lic,
        "description": strip(md.get("ImageDescription", {}).get("value", ""))[:200],
    }
    print("OK", slug, lic, "|", credits[slug]["author"][:60])
    json.dump(credits, open(CREDITS, "w"), indent=2, ensure_ascii=False)
    time.sleep(1.5)
os.makedirs(os.path.dirname(CREDITS), exist_ok=True)
json.dump(credits, open(CREDITS, "w"), indent=2, ensure_ascii=False)
