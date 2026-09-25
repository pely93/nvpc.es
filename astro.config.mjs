import { copyFile } from "node:fs/promises";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { visit } from "unist-util-visit";

// The review site keeps its repository path; OVH serves the production build at /.
const production = process.env.DEPLOY_TARGET === "ovh";
const base = production ? "/" : "/nvpc.es";
const site = production ? "https://nvpc.es" : "https://pely93.github.io";

function rewriteInternalMarkdownLinks() {
  return (tree) => {
    visit(tree, "link", (node) => {
      if (!production && node.url.startsWith("/") && !node.url.startsWith(`${base}/`) && node.url !== base) {
        node.url = `${base}${node.url}`;
      }
    });
  };
}

// Sitemap generates sitemap-index.xml/sitemap-0.xml automatically from every
// page emitted at build time — required by the SEO brief and cheaper than
// maintaining a manual URL list by hand.
export default defineConfig({
  site,
  base,
  integrations: [tailwind(), sitemap({
    filter: (page) => !page.endsWith("/casos-de-exito/"),
  }), {
    name: "sitemap-standard-alias",
    hooks: { "astro:build:done": async ({ dir }) => {
      await copyFile(new URL("sitemap-index.xml", dir), new URL("sitemap.xml", dir));
    } },
  }],
  markdown: {
    remarkPlugins: [rewriteInternalMarkdownLinks],
  },
});
