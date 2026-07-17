# Surfaced

Marketing site for Surfaced, an independent Australian technology cost and efficiency advisory.

Built with [Astro](https://astro.build) (static output, minimal JavaScript), deployed to GitHub Pages via GitHub Actions.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home: the promise, the three tiers, the sample savings register |
| `/approach` | Our approach: the trust ladder, three kinds of value, operating commitments |
| `/contact` | Book a diagnostic: contact form (Formspree) |
| `/estimate` | Free illustrative savings estimate tool (client-side only) |

## Local development

```bash
npm install
npm run dev        # dev server at http://localhost:4321
npm run build      # static build to ./dist
npm run preview    # serve the built site locally
```

## Before going live: swap in the Formspree form ID

The contact form and the optional email capture on the estimate page both post to a placeholder endpoint:

```
https://formspree.io/f/YOUR_FORM_ID
```

Create a form at [formspree.io](https://formspree.io), then replace `YOUR_FORM_ID` in these two files:

- `src/pages/contact.astro`
- `src/pages/estimate.astro`

The fallback contact email shown on form errors (`hello@surfaced.com.au`) is also a placeholder: update it in the same two files if the real address differs.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site with the official Astro action and publishes it to GitHub Pages. In the repository settings, under **Settings → Pages**, set **Source** to **GitHub Actions** (one-time step).

## Custom domain

The site is configured for the root custom domain `surfaced.com.au`:

- `astro.config.mjs` sets `site: 'https://surfaced.com.au'` and `base: '/'`
- `public/CNAME` contains `surfaced.com.au`

To connect the domain:

1. In **Settings → Pages → Custom domain**, enter `surfaced.com.au` and save.
2. At your DNS provider, add the four GitHub Pages apex `A` records (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153), and optionally a `www` CNAME to `<owner>.github.io`.
3. Wait for the DNS check to pass, then tick **Enforce HTTPS**.

Until the domain is connected, preview the site locally (`npm run dev`) or via the repository's GitHub Pages URL. Note: if the site is ever served from a project subpath (`https://<owner>.github.io/<repo-name>/`) instead of a custom domain, change `base` in `astro.config.mjs` to `'/<repo-name>/'`.
