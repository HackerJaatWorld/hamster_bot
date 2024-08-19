// sw.js
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('offline-cache').then((cache) => {
            return cache.addAll(['https://cdn.jsdelivr.net/gh/HackerJaatWorld/hamster_bot@0.0.1/no%20internet/offline.html']);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match('https://cdn.jsdelivr.net/gh/HackerJaatWorld/hamster_bot@0.0.1/no%20internet/offline.html');
        })
    );
});
