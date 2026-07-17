// @ts-check
import { defineConfig } from 'astro/config';

// Built for the root custom domain. If the site is ever served from a
// project subpath instead, change base to '/<repo-name>/'.
export default defineConfig({
  site: 'https://surfaced.com.au',
  base: '/',
  output: 'static',
});
