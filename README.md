# viacoin.org

Viacoin website app source. Static site built with Vite and deployed on Cloudflare Pages.

## Stack
- Vite 5 (see vite.config.js)
- Preact (via preact/compat)
- Bulma (SASS)

## Getting Started

### Prerequisites
- Node.js 18+ (tested with v23.6.0)
- npm 9+ (comes with Node)

### Install
```
npm install
```

### Develop
```
npm run dev
```

Vite will print the local dev server URL. You can also use:
```
npm run start
npm run preview
```

## Build
```
npm run build
```

- Output directory: dist/
- Public assets copied as-is from public/:
  - public/config.json -> /config.json
  - public/service-worker.js -> /service-worker.js (if present)
  - public/robots.txt -> /robots.txt
  - public/sitemap.xml -> /sitemap.xml
  - public/_headers -> /_headers (Cloudflare Pages headers)
- Base path is "/" (configured in vite.config.js)

Service worker registration occurs in src/viacoin.js at navigator.serviceWorker.register().

## Deploy (Cloudflare Pages)

This repository is deployed via Cloudflare Pages. A typical Pages setup for this project:

- Framework preset: None
- Build command: npm run build
- Output directory: dist
- Root directory: /
- Node version: 20.x LTS
- Production branch: repository default (e.g., main)
- Preview builds: enabled for pull requests and non-production branches

Custom domain:
- Attach viacoin.org to the Pages project in the Cloudflare dashboard (ensure the certificate shows Active).
- Do not include public/CNAME. Cloudflare Pages does not use a CNAME file; if present it will be served as a static file.

Headers and caching:
- public/_headers is included to set caching and security headers (copied to dist/_headers).
  - Long-term immutable caching for hashed assets under /assets/*
  - No-store for /service-worker.js and /index.html to ensure fast updates
  - No-cache for /config.json so runtime data is always fresh
  - Security headers including a CSP tailored for:
    - Google Fonts (fonts.googleapis.com, fonts.gstatic.com)
    - jsDelivr (particles.js)
    - Google Analytics (www.google-analytics.com, stats.g.doubleclick.net)
- If you introduce other third-party resources (videos, APIs, analytics), update the CSP in public/_headers accordingly.

SEO files:
- Robots and sitemap live in public/ and are copied to the site root.

## Runtime config
- public/config.json is fetched at runtime from /config.json.
- It is intentionally set to no-cache via _headers so clients always pick up updates.

## Troubleshooting
- 404s on JS/CSS after deploy:
  - Confirm base: "/" in vite.config.js for apex domain hosting.
- Stale content after deploy:
  - Service workers can cache aggressively. Hard refresh or unregister the SW in DevTools (Application → Service Workers).
- CSP violations (blocked resources):
  - Check the browser console for CSP errors and extend the policy in public/_headers as needed.

## Legacy (GitHub Pages)
- A legacy script (npm run deploy) remains in package.json for publishing to the gh-pages branch, but Cloudflare Pages is the primary and recommended deployment path now.
- You can safely ignore this script; it may be removed after the migration is fully complete.

## Built With
- Vite: https://vitejs.dev/
- Preact: https://preactjs.com/
- Bulma: https://bulma.io/

## Versioning
We use SemVer for versioning. For available versions, see the tags on this repository.

## Authors
- Yudao - Initial work

See also the list of contributors.

## License
This project is licensed under the MIT License - see LICENSE.

## Acknowledgments
- Thank you Stephen for all your open mind
