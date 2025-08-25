# viacoin.org

Viacoin website app source. Static site built with Vite and deployed to GitHub Pages.

## Stack

- Vite 5 (see [vite.config.js](vite.config.js))
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
- Public assets copied as-is from [public/](public/):
  - [public/config.json](public/config.json) -> /config.json
  - [public/service-worker.js](public/service-worker.js) -> /service-worker.js (if present)
  - [public/CNAME](public/CNAME) -> /CNAME (for custom domain)
- Base path is "/" (configured in [vite.config.js](vite.config.js))

Service worker registration occurs in [src/viacoin.js](src/viacoin.js) at [navigator.serviceWorker.register()](src/viacoin.js:7).

## Deploy (GitHub Pages via gh-pages)

Publish the dist/ folder to the gh-pages branch:

```
npm run deploy
```

Repository settings required:
- Settings -> Pages -> Source: gh-pages (branch), root
- Custom domain: viacoin.org (CNAME)
- Enforce HTTPS: enabled

The domain file [public/CNAME](public/CNAME) contains "viacoin.org" and is copied to dist/CNAME at build time.

Optional: To silence a Node v23 deprecation about SSH-style URLs, you may point gh-pages to the HTTPS remote explicitly:

```
gh-pages -d dist -b gh-pages -r https://github.com/viacoin/app.viacoin.org.git
```

If you choose this, update the deploy script in [package.json](package.json) accordingly.

### Known deprecation warnings on Node v23

- [DEP0040] punycode deprecation: harmless
- [DEP0170] invalid URL for SSH remote: cosmetic; can be avoided with the -r flag above

## Built With

- [Vite](https://vitejs.dev/)
- [Preact](https://preactjs.com/)
- [Bulma](https://bulma.io/)

## Versioning

We use [SemVer](http://semver.org/) for versioning. For available versions, see the [tags on this repository](https://github.com/viacoin/app.viacoin.org/tags).

## Authors

- Yudao - Initial work

See also the list of [contributors](https://github.com/viacoin/app.viacoin.org/contributors).

## License

This project is licensed under the MIT License - see [LICENSE](LICENSE).

## Acknowledgments

- Thank you Stephen for all your open mind
