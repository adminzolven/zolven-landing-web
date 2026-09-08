// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: replace with the real production domain once it's confirmed.
const SITE_URL = 'https://www.zolven.com';

// https://astro.build/config
export default defineConfig({
	site: SITE_URL,
	integrations: [sitemap()],
});
