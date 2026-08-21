import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Root user site (repo named your-username.github.io) — no `base` needed.
// If you deploy to a PROJECT repo instead (e.g. github.com/you/my-blog),
// change `site` to 'https://your-username.github.io/my-blog' and add
// `base: '/my-blog'` below.
export default defineConfig({
  site: 'https://your-username.github.io',
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'tokyo-night',
    },
  },
});
