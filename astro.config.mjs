import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { visit } from "unist-util-visit";

// GitHub Pages de proyecto sirve el sitio en /<nombre-del-repo>/, sin
// posibilidad de elegir otra subruta. El repositorio se llama "nvpc.es",
// así que la URL real es pely93.github.io/nvpc.es/ (verificado en el log
// del deploy: "Evaluated environment url: https://pely93.github.io/nvpc.es/").
const base = "/nvpc.es";

// Los enlaces internos escritos a mano en el contenido Markdown (p. ej.
// "[tarifas](/tarifas/)") no pasan por ningún componente de Astro, así que
// Astro no les añade `base` automáticamente. Este plugin remark reescribe
// cualquier enlace que empiece por "/" para que incluya la subruta de
// GitHub Pages, evitando enlaces rotos dentro de artículos y fichas de servicio.
function rewriteInternalMarkdownLinks() {
  return (tree) => {
    visit(tree, "link", (node) => {
      if (node.url.startsWith("/") && !node.url.startsWith(`${base}/`) && node.url !== base) {
        node.url = `${base}${node.url}`;
      }
    });
  };
}

// Sitemap generates sitemap-index.xml/sitemap-0.xml automatically from every
// page emitted at build time — required by the SEO brief and cheaper than
// maintaining a manual URL list by hand.
export default defineConfig({
  site: "https://pely93.github.io",
  base,
  integrations: [tailwind(), sitemap()],
  markdown: {
    remarkPlugins: [rewriteInternalMarkdownLinks],
  },
});
