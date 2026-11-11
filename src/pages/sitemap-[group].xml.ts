import { groups, urlset, xml } from "@/lib/sitemap";
export async function getStaticPaths() {
  const g = await groups();
  return Object.keys(g).filter((k) => g[k].length).map((group) => ({ params: { group } }));
}
export async function GET({ params }: { params: { group: string } }) {
  const g = await groups();
  return xml(urlset(g[params.group]));
}
