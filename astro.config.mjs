// @ts-check
import { defineConfig } from "astro/config";
import { rehypeArticle } from "./src/lib/rehype-article.mjs";

export default defineConfig({
  site: "https://pbfishing.app",
  trailingSlash: "never",
  // /eula -> eula.html, /blog/x -> blog/x.html: matches Vercel cleanUrls and the URLs the Tilda site used.
  build: { format: "file", inlineStylesheets: "always" },
  compressHTML: true,
  prefetch: false,
  markdown: {
    rehypePlugins: [rehypeArticle],
    smartypants: true,
  },
  image: {
    responsiveStyles: false,
  },
});
