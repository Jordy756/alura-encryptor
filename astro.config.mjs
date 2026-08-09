import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://alura-encryptor.vercel.app',
  integrations: [sitemap()],
  fonts: [
    {
      name: 'Montserrat',
      cssVariable: '--font-montserrat',
      provider: fontProviders.google(),
      weights: [400, 600],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
      formats: ['woff2'],
      fallbacks: ['sans-serif', 'system-ui'],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
