# Sono-Marin Pest Solutions — Website

Static Next.js rebuild of [sonomarinpest.com](https://sonomarinpest.com): modern design, strong local SEO, Google reviews support, and GorillaDesk contact form.

**Repo:** [github.com/tylerprobst/sonomarinpest](https://github.com/tylerprobst/sonomarinpest)

## Stack

- **Next.js** (App Router) with `output: 'export'` → pure static `out/`
- TypeScript + Tailwind CSS v4
- Deployed via **GitHub Actions → GitHub Pages**

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Local dev does **not** use the `/sonomarinpest` base path.

## Build static site

```bash
npm run build
```

Output is in `out/`.

For a GitHub Pages–style build (with `basePath: /sonomarinpest`):

```bash
GITHUB_PAGES=true npm run build
```

### Live Google reviews

On every build, `prebuild` runs `scripts/fetch-google-reviews.ts`:

1. Copy `.env.example` → `.env.local`
2. Enable **Places API (New)** in Google Cloud
3. Set `GOOGLE_MAPS_API_KEY` (and optionally `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`)
4. Rebuild

Without a key, the site uses seed data in `content/generated/google-reviews.json` plus curated featured testimonials.

## GorillaDesk form

Inline iframe embed (`account_id=83906303`) on estimate sections, plus `embed.js` for auto-height.

## SEO

- Canonicals, schema, and sitemap use **`https://sonomarinpest.com`**
- Alias URLs soft-redirect with **noindex** (see `content/redirects.ts`)
- Host 301 maps: `public/_redirects`, `vercel.json`
- Cutover steps: [`docs/SEO-CUTOVER.md`](docs/SEO-CUTOVER.md)

## Deploy (GitHub Pages)

Workflow: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)

On every push to `main`:

1. `npm ci` + `GITHUB_PAGES=true npm run build`
2. Uploads `out/` as a Pages artifact
3. Deploys with `actions/deploy-pages`

### One-time repo setup

1. Open **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. After the first green workflow, site is at:  
   **https://tylerprobst.github.io/sonomarinpest/**

### Custom domain (e.g. sonomarinpest.com)

1. In Pages settings, add custom domain and follow DNS instructions
2. In `.github/workflows/deploy.yml`, set `GITHUB_PAGES: "false"` (removes `/sonomarinpest` base path)
3. Optionally add `public/CNAME` with `sonomarinpest.com`

### Other hosts

| Host | Notes |
|------|--------|
| **Vercel / Netlify / Cloudflare** | Build `npm run build` (no `GITHUB_PAGES`); publish `out/` |
| **Hostinger / cPanel** | Upload `out/` to `public_html` |

## Project layout

- `app/` — routes (WordPress-compatible paths where possible)
- `components/` — UI, layout, reviews, forms
- `content/` — services, locations, blog, reviews, site NAP
- `lib/` — SEO, schema.org JSON-LD, Places API helper
- `scripts/fetch-google-reviews.ts` — prebuild review sync
- `.github/workflows/deploy.yml` — GitHub Pages deploy

## License

Private business website for Sono-Marin Pest Solutions.
