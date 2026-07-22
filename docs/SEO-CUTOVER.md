# SEO cutover checklist (WordPress → this site)

Use this when you point **sonomarinpest.com** at the new static site. Until then, GitHub Pages preview stays at:

`https://tylerprobst.github.io/sonomarinpest/`

Canonical tags, schema, and sitemap already use **`https://sonomarinpest.com`** so they are production-ready.

---

## Before cutover

1. [ ] Finish QA on GitHub Pages (forms, phones, key city/service pages).
2. [ ] Export / note Google Search Console property for the live domain.
3. [ ] Confirm Google Business Profile website URL plan (update after DNS works).
4. [ ] Keep WordPress live until 301s are verified.

## GitHub Pages + custom domain

1. Repo **Settings → Pages → Custom domain**: `sonomarinpest.com` (and `www` if used).
2. Add `public/CNAME` containing:

   ```
   sonomarinpest.com
   ```

3. In `.github/workflows/deploy.yml`, set:

   ```yaml
   GITHUB_PAGES: "false"
   ```

   so `basePath` is empty and assets load at `/images/...`.

4. DNS at your registrar (typical GitHub Pages records):
   - Apex: A records to GitHub Pages IPs (see current GitHub docs)
   - `www`: CNAME to `tylerprobst.github.io`
5. Enable HTTPS in Pages settings after DNS propagates.

## Redirects (critical for SEO)

Alias and legacy URLs must not stay as full duplicates.

| Host | How |
|------|-----|
| **Netlify / Cloudflare Pages** | Use `public/_redirects` (already populated) |
| **Vercel** | Use `vercel.json` redirects (already populated) |
| **GitHub Pages alone** | Soft redirects via app routes (`RedirectPage` + noindex + canonical). Prefer a host with real **301** if you can. |

Verify these paths 301 (or soft-redirect) to primaries:

- `/ant-control-services/` → `/ants/`
- `/spider-control-services/` → `/spiders/`
- `/cockroach-control-services/` → `/cockroaches/`
- `/flea-control-services/` → `/fleas/`
- `/carpenter-bee-control-services/` → `/carpenter-bees/`
- `/pest-control-in-santa-rosa/` → `/pest-control-santa-rosa/`
- `/pest-control-in-petaluma/` → `/pest-control-petaluma/`
- `/sono-marin-pest/` → `/`
- `/sono-marin-pest-solutions/` → `/about-us/`

Also map any other high-traffic WP URLs from Search Console / old sitemap.

## After DNS works

1. [ ] Open homepage, a city page, a service page, contact form, phone links.
2. [ ] Submit `https://sonomarinpest.com/sitemap.xml` in Search Console.
3. [ ] Request indexing for: `/`, `/rodents/`, `/pest-control-santa-rosa/`, `/pest-control-sonoma-county/`, `/pest-control-marin-county/`.
4. [ ] Update Google Business Profile website URL.
5. [ ] Monitor Coverage / Page indexing for 2–4 weeks.
6. [ ] Only then decommission WordPress.

## Do not

- Launch without redirects for known WP URLs.
- Change primary service/city URLs again soon after launch.
- Leave both old WP and new site indexable on the same domain without 301s.
- Inflate review counts in schema.

## Optional: live Google reviews on build

Set `GOOGLE_MAPS_API_KEY` in CI secrets and keep Places API enabled so `prebuild` refreshes `content/generated/google-reviews.json`.
