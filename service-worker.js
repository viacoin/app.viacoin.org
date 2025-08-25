// Basic service worker for Viacoin website
self.addEventListener('install', function(event) {
  console.log('Service Worker installing.');
});

self.addEventListener('activate', function(event) {
  console.log('Service Worker activating.');
});

self.addEventListener('fetch', function(event) {
  // Let the browser do its default thing for requests
});
