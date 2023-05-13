import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
	integrations: [mdx(), preact()],
	site: 'https://cryptizism.github.io',
  	base: '/sqa-resources',
});
