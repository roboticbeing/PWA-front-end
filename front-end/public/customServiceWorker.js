importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}


// Cache name
const CACHE_NAME = 'static-cache-v1';

// Files to cache
const FILES_TO_CACHE = ['index.html',
                        'favicon.ico',
                        'moves-logo-144.png',
                        'moves-logo-192.png',
                        'moves-logo-512.png'];

// ServiceWorker install event
self.addEventListener('install', event => {
    console.log('The service worker is being installed.');

    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
          console.log('[ServiceWorker] Pre-caching files');
          return cache.addAll(FILES_TO_CACHE);
        })
    );

    self.skipWaiting();
});

// ServiceWorker activate event
self.addEventListener('activate', (evt) => {
    console.log('The service worker is being activated.');
    
    // Remove previous cached data from disk.
    evt.waitUntil(
      caches.keys().then((keyList) => {
        return Promise.all(keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache', key);
            return caches.delete(key);
          }
        }));
      })
  );
  
    self.clients.claim();
});

// ServiceWorker fetch event
self.addEventListener('fetch', (evt) => {
    console.log('The service worker is fetching.', evt.request.url);
    if (evt.request.mode !== 'navigate') {
        // Not a page navigation, bail.
        return;
    }
    evt.respondWith(
        fetch(evt.request)
          .catch(() => {
            return caches.open(CACHE_NAME)
                .then((cache) => {
                  return cache.match('.');
                });
          })
    );  
});