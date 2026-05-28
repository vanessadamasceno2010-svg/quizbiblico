const CACHE_NAME = 'bible-quiz-v2';
const urlsToCache = [
    '/',
    '/index.html',
    '/css/style.css',
    '/js/questions.js',
    '/js/achievements.js',
    '/js/daily-rewards.js',
    '/js/game.js',
    '/js/app.js'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        ).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request)
                .then(fetchRes => {
                    if (fetchRes.status === 200) {
                        const clone = fetchRes.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                    }
                    return fetchRes;
                })
                .catch(() => caches.match('/index.html'))
            )
    );
});