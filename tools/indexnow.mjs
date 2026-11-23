// Tell IndexNow search engines (Bing, Yandex, Seznam, Naver) about every URL in the live sitemap.
// Run after a production deploy: node tools/indexnow.mjs [--dry]
// The key file lives at public/<key>.txt and is served at https://pbfishing.app/<key>.txt.
import { readdirSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const HOST = "pbfishing.app";
const keyFile = readdirSync(join(ROOT, "public")).find((f) => /^[0-9a-f]{32}\.txt$/.test(f));
if (!keyFile) throw new Error("no IndexNow key file in public/");
const key = readFileSync(join(ROOT, "public", keyFile), "utf8").trim();

const index = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const maps = [...index.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const urls = [];
for (const m of maps) urls.push(...[...(await (await fetch(m)).text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((x) => x[1]));
console.log(`${urls.length} URLs from ${maps.length} sitemaps`);

const keyOk = (await (await fetch(`https://${HOST}/${keyFile}`)).text()).trim() === key;
if (!keyOk) throw new Error(`https://${HOST}/${keyFile} doesn't serve the key yet — deploy first`);
if (process.argv.includes("--dry")) process.exit(0);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key, keyLocation: `https://${HOST}/${keyFile}`, urlList: urls.slice(0, 10000) }),
});
console.log("IndexNow:", res.status, res.statusText, "(200/202 = accepted)");
