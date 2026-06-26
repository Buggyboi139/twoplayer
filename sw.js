const CACHE_NAME = 'two-player-app-v2';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './landing.css',
  './manifest.json',
  './dirty_guesser_web/index.html',
  './dirty_guesser_web/css/styles.css',
  './dirty_guesser_web/js/game.js',
  './dirty_guesser_web/data/scenarios.json',
  './dirty_guesser_web/audio/buzzer.mp3',
  './dirty_guesser_web/audio/chaching.mp3',
  './dirty_guesser_web/audio/click.mp3',
  './dirty_guesser_web/audio/ding.mp3',
  './dirty_guesser_web/icon-192.png',
  './dirty_guesser_web/icon-512.png',
  './neonfeud/index.html',
  './neonfeud/styles.css',
  './neonfeud/script.js',
  './neonfeud/packs.json',
  './neonfeud/audio/buzzer.mp3',
  './neonfeud/audio/chaching.mp3',
  './neonfeud/audio/click.mp3',
  './neonfeud/audio/ding.mp3',
  './neonfeud/icon-192.png',
  './neonfeud/icon-512.png',
  './neonpantry_panic/index.html',
  './neonpantry_panic/style.css',
  './neonpantry_panic/game.js',
  './neonpantry_panic/icon-192.png',
  './neonpantry_panic/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
          return Promise.resolve();
        })
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') {
    return;
  }

  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) {
    return;
  }

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match(event.request).then(response => response || caches.match('./index.html')))
    );
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(networkResponse => {
        const copy = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        return networkResponse;
      })
      .catch(() => caches.match(event.request))
  );
});
