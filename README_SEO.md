SEO & Geo Guide

Files added/updated:
- `index.html`, `about.html`, `gallery.html`, `projectPage.html` — added meta description, keywords, canonical link, Open Graph, Twitter tags, geo meta tags, and JSON-LD structured data. NOTE: many fields use placeholders (`https://example.com`, `LAT`, `LON`, `City Name`, `Region/State`, `ZIP`, `Country`). Replace them with your real domain and location data before publishing.
- `media/favicon.svg` — SVG favicon already added. PNG fallback uses `media/logo.png`.
- `sitemap.xml` — basic sitemap listing the main pages. Update URLs to your production domain.
- `robots.txt` — references `https://example.com/sitemap.xml`. Update domain as needed.

How to customize (quick):
1. Replace `https://example.com` in all meta tags, canonical links, JSON-LD, sitemap, and robots.txt with your real site URL (e.g. `https://jessicareminder.com`).
2. Replace geo placeholders in meta tags and JSON-LD with your real coordinates and region.
   - `meta name="geo.position" content="LAT;LON"`
   - JSON-LD `geo.latitude` / `geo.longitude`
3. Add social profile links to the JSON-LD `sameAs` array for richer search presence.
4. Validate structured data via Google Rich Results Test: https://search.google.com/test/rich-results
5. Submit `sitemap.xml` to Google Search Console and other webmaster tools.
6. (Optional) Generate a multi-resolution `favicon.ico` for older browsers; see commands in the repo root `README`.

Testing locally:
- Serve the folder (e.g., `npx http-server .` or `python3 -m http.server`) and open pages.
- Visit `/sitemap.xml` and `/robots.txt` to confirm they are accessible.

If you want, I can:
- Replace placeholders with your real domain and coordinates if you provide them.
- Generate `favicon.ico` from `media/logo.png` (requires ImageMagick installed locally or I can add PNG variants and HTML references).
- Add `hreflang` tags if you plan to serve multiple languages.
