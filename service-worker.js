importScripts('workbox-sw.prod.v2.1.3.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "app.bundle.837c49f82ed0bbace3ab.css",
    "revision": "09d2e9de36fe13598ab0c7571c88d620"
  },
  {
    "url": "app.bundle.837c49f82ed0bbace3ab.js",
    "revision": "4857d4ae3d2b95d989b704aa8d3603f7"
  },
  {
    "url": "fonts.css",
    "revision": "329dd04b3b38ff48c9688b7b4942138d"
  },
  {
    "url": "index.html",
    "revision": "d189905b7140ded89de43f2f7a13e527"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
