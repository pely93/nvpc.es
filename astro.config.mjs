import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pely93.github.io',
  base: '/nvpc-web',
  integrations: [tailwind(), sitemap()],
});
