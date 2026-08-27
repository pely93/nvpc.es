import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  // Vite deriva import.meta.env.BASE_URL de esta opción `base`, no de un
  // `define` manual. Se fija al mismo valor que `base` en astro.config.mjs
  // para que withBase() se comporte igual en los tests que en el sitio construido.
  base: "/nvpc-web/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
