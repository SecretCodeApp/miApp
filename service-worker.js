const cacheName = 'mi-web-app-v1';
const assets = [
  '/',
  '/index.html', 
  '/script.js'
  // Agrega aquí otros recursos que necesites cachear.
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(assets))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
