const cacheName = "v1";
const cacheAssets = [
    'index.html'
]

// Service worker installing
self.addEventListener('install', e => {
    console.log('service worker installing');
    e.waitUntil(
        caches
        .open(cacheName)
        .then(cache => {
            console.log('service worker caching files!');
            cache.addAll(cacheAssets);
        })
        .then(() => self.skipWaiting())
    );
})

// Service worker activating
self.addEventListener('activate', e => {
    console.log('service worker activate');
    // Remove old caches
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache !== cacheName) {
                        console.log('clearing old cache files...');
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// Service worker fetching
self.addEventListener('fetch', e => {
    console.log('Fetching start');
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});