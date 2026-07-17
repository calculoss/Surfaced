// @ts-check
import { defineConfig } from 'astro/config';

// Target is the root custom domain (site + base '/'). Until the domain is
// connected, base is set to the project subpath so the GitHub Pages preview
// at calculoss.github.io/Surfaced/ works fully. When surfaced.com.au is
// connected in the Pages settings, change base back to '/'.
export default defineConfig({
  site: 'https://surfaced.com.au',
  base: '/Surfaced/',
  output: 'static',
});
