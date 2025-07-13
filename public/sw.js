
self.addEventListener('install', event => {
  event.waitUntil(caches.open('static-cache').then(cache => {
    return cache.addAll([
      '/',
      '/manifest.webmanifest'
    ]);
  }));
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request);
    })
  );
});
