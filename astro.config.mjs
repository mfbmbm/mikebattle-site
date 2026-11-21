import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Your live address. Used for the sitemap, canonical links and link previews.
// No trailing slashes, so page addresses match the old Webflow ones exactly
// (e.g. /book-notes/on-writing-stephen-king) and Google keeps its rankings.
export default defineConfig({
  site: 'https://www.mikebattle.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
});
