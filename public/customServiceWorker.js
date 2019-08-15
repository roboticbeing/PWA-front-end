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
                        'moves-logo-512.png',
                        'asset-manifest.json',
                        'manifest.json',

                        'moves_home.jpg',
                        'img/moves_home.jpg',
                        'static/media/moves_home.6fa08262.jpg',
                        
                        'icons/charity.png',
                        'icons/charity@2x.png',
                        'icons/email.png',
                        'icons/email@2x.png',
                        'icons/heart.png',
                        'icons/heart@2x.png',
                        'icons/help.png',
                        'icons/help@2x.png',
                        'icons/libra.png',
                        'icons/libra@2x.png',
                        'icons/man-user.png',
                        'icons/man-user@2x.png',
                        'icons/map-location.png',
                        'icons/map-location@2x.png',
                        'icons/slumber.png',
                        'icons/slumber@2x.png',
                        'icons/speaking.png',
                        'icons/speaking@2x.png',
                        'icons/thief.png',
                        'icons/thief@2x.png',
                        'icons/Masks/asdasdadasd.png',
                        'icons/Masks/charity.png',
                        'icons/Masks/charity@2x.png',
                        'icons/Masks/email.png',
                        'icons/Masks/email@2x.png',
                        'icons/Masks/heart.png',
                        'icons/Masks/heart@2x.png',
                        'icons/Masks/help.png',
                        'icons/Masks/help@2x.png',
                        'icons/Masks/libra.png',
                        'icons/Masks/libra@2x.png',
                        'icons/Masks/man-user.png',
                        'icons/Masks/man-user@2x.png',
                        'icons/Masks/map-location.png',
                        'icons/Masks/map-location@2x.png',
                        'icons/Masks/slumber.png',
                        'icons/Masks/slumber@2x.png',
                        'icons/Masks/speaking.png',
                        'icons/Masks/speaking@2x.png',
                        'icons/Masks/thief.png',
                        'icons/Masks/thief@2x.png',
                        'icons/Original/charity.png',
                        'icons/Original/charity@2x.png',
                        'icons/Original/email.png',
                        'icons/Original/email@2x.png',
                        'icons/Original/heart.png',
                        'icons/Original/heart@2x.png',
                        'icons/Original/help.png',
                        'icons/Original/help@2x.png',
                        'icons/Original/libra.png',
                        'icons/Original/libra@2x.png',
                        'icons/Original/man-user.png',
                        'icons/Original/man-user@2x.png',
                        'icons/Original/map-location.png',
                        'icons/Original/map-location@2x.png',
                        'icons/Original/slumber.png',
                        'icons/Original/slumber@2x.png',
                        'icons/Original/speaking.png',
                        'icons/Original/speaking@2x.png',
                        'icons/Original/thief.png',
                        'icons/Original/thief@2x.png',
                        'icons/white/charity.png',
                        'icons/white/charity@2x.png',
                        'icons/white/email.png',
                        'icons/white/email@2x.png',
                        'icons/white/heart.png',
                        'icons/white/heart@2x.png',
                        'icons/white/help.png',
                        'icons/white/help@2x.png',
                        'icons/white/libra.png',
                        'icons/white/libra@2x.png',
                        'icons/white/man-user.png',
                        'icons/white/man-user@2x.png',
                        'icons/white/map-location.png',
                        'icons/white/map-location@2x.png',
                        'icons/white/slumber.png',
                        'icons/white/slumber@2x.png',
                        'icons/white/speaking.png',
                        'icons/white/speaking@2x.png',
                        'icons/white/thief.png',
                        'icons/white/thief@2x.png',
                        'img/moves_cover.png',
                        'img/moves_logo_large.png',
                        'img/moves_logo_large_white.png',
                      ];

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