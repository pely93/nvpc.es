import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// Sitemap generates sitemap-index.xml/sitemap-0.xml automatically from every
// page emitted at build time — required by the SEO brief and cheaper than
// maintaining a manual URL list by hand.
export default defineConfig({
  site: "https://nvpc.es",
  integrations: [tailwind(), sitemap()],
});
