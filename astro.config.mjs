import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { visit } from "unist-util-visit";

const base = "/nvpc-web";

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
  output: "static",
  site: "https://pely93.github.io/nvpc-web",
  // El repositorio se publica como GitHub Pages de proyecto
  // (pely93.github.io/nvpc-web/), no en la raíz del dominio, así que Astro
  // necesita conocer esta subruta para generar rutas de build correctas.
  base,
  integrations: [tailwind(), sitemap()],
  markdown: {
    remarkPlugins: [rewriteInternalMarkdownLinks],
  },
});
