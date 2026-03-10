const CACHE_NAME = 'sentinela-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  'https://raw.githubusercontent.com/kauanunes171220-alt/Sentinela-H-drica-/main/sentinela%20hidrica.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
