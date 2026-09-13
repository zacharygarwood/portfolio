// Bump CACHE_VERSION whenever you deploy changed files.
const CACHE_VERSION = 'zg-v15';
const PRECACHE = [
    "/",
    "/index.html",
    "/misc.html",
    "/projects.html",
    "/photos.html",
    "/movies.html",
    "/books.html",
    "/styles.css",
    "/fonts/InterVariable.woff2",
    "/images/favicon.ico",
    "/images/kirby.webp"
];

// Install: grab just the pages, css and font up front - small and fast.
// Everything else is cached the first time it is actually viewed.
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_VERSION)
            .then(function (cache) { return cache.addAll(PRECACHE); })
            .then(function () { return self.skipWaiting(); })
    );
});

// Activate: drop caches from older versions.
self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (keys) {
            return Promise.all(keys.filter(function (k) { return k !== CACHE_VERSION; })
                                   .map(function (k) { return caches.delete(k); }));
        }).then(function () { return self.clients.claim(); })
    );
});

// Everything else - pulled down quietly a few seconds after the first page is
// interactive, so that by the time you click around, nothing needs the network.
const WARM_COMMON = [
    "/images/autoclip.webp",
    "/images/books/1984.webp",
    "/images/books/a-short-history-of-nearly-everything.webp",
    "/images/books/abundance.webp",
    "/images/books/mickey-7.webp",
    "/images/books/the-strength-of-the-few.webp",
    "/images/books/the-will-of-the-many.webp",
    "/images/diagram.webp",
    "/images/edge-detection-poster.webp",
    "/images/edge-detection.mp4",
    "/images/explosion.webp",
    "/images/flounder-poster.webp",
    "/images/flounder.mp4",
    "/images/mafs-poster.webp",
    "/images/mafs.mp4",
    "/images/movies/bugonia.webp",
    "/images/movies/fantastic-mr-fox.webp",
    "/images/movies/kill-bill.webp",
    "/images/movies/mickey-17.webp",
    "/images/movies/reservoir-dogs.webp",
    "/images/movies/the-backrooms.webp",
    "/images/movies/the-godfather.webp",
    "/images/movies/the-grand-budapest-hotel.webp",
    "/images/movies/the-invite.webp",
    "/images/movies/the-lighthouse.webp",
    "/images/movies/the-naked-gun.webp",
    "/images/movies/the-odyssey.webp",
    "/images/movies/whiplash.webp",
    "/images/pairplot.webp",
    "/images/pokemon-poster.webp",
    "/images/pokemon.mp4",
    "/images/prod-hamster-poster.webp",
    "/images/prod-hamster.mp4",
    "/images/quietfold.webp",
    "/images/sightlines.webp"
];

// The photo page ships two widths; only the one this screen will actually
// request is worth caching, so a 1x laptop never downloads the 2x set.
const WARM_PHOTOS_1X = [
    "/images/photos/aerial-bw-800.webp",
    "/images/photos/arret-sign-800.webp",
    "/images/photos/basilica-at-night-800.webp",
    "/images/photos/bronze-doors-800.webp",
    "/images/photos/canal-bridge-800.webp",
    "/images/photos/church-steeple-800.webp",
    "/images/photos/city-buildings-800.webp",
    "/images/photos/cloud-gate-800.webp",
    "/images/photos/coastal-arch-800.webp",
    "/images/photos/dome-oculus-800.webp",
    "/images/photos/farm-fields-800.webp",
    "/images/photos/foggy-ridge-800.webp",
    "/images/photos/graffiti-mural-800.webp",
    "/images/photos/high-rise-bw-800.webp",
    "/images/photos/hillside-bw-800.webp",
    "/images/photos/hotel-at-night-800.webp",
    "/images/photos/lake-800.webp",
    "/images/photos/manhattan-aerial-800.webp",
    "/images/photos/old-buildings-800.webp",
    "/images/photos/park-bench-800.webp",
    "/images/photos/prairie-sunset-800.webp",
    "/images/photos/river-dusk-800.webp",
    "/images/photos/rose-window-bw-800.webp",
    "/images/photos/stone-facade-800.webp",
    "/images/photos/stone-tower-800.webp",
    "/images/photos/waterfall-800.webp"
];
const WARM_PHOTOS_2X = [
    "/images/photos/aerial-bw.webp",
    "/images/photos/arret-sign.webp",
    "/images/photos/basilica-at-night.webp",
    "/images/photos/bronze-doors.webp",
    "/images/photos/canal-bridge.webp",
    "/images/photos/church-steeple.webp",
    "/images/photos/city-buildings.webp",
    "/images/photos/cloud-gate.webp",
    "/images/photos/coastal-arch.webp",
    "/images/photos/dome-oculus.webp",
    "/images/photos/farm-fields.webp",
    "/images/photos/foggy-ridge.webp",
    "/images/photos/graffiti-mural.webp",
    "/images/photos/high-rise-bw.webp",
    "/images/photos/hillside-bw.webp",
    "/images/photos/hotel-at-night.webp",
    "/images/photos/lake.webp",
    "/images/photos/manhattan-aerial.webp",
    "/images/photos/old-buildings.webp",
    "/images/photos/park-bench.webp",
    "/images/photos/prairie-sunset.webp",
    "/images/photos/river-dusk.webp",
    "/images/photos/rose-window-bw.webp",
    "/images/photos/stone-facade.webp",
    "/images/photos/stone-tower.webp",
    "/images/photos/waterfall.webp"
];

async function warmCache(dpr) {
    const cache = await caches.open(CACHE_VERSION);
    const list = WARM_COMMON.concat(dpr > 1.5 ? WARM_PHOTOS_2X : WARM_PHOTOS_1X);
    const pending = (await Promise.all(
        list.map(async u => (await cache.match(u)) ? null : u))).filter(Boolean);
    // four at a time: fills the cache without hogging the connection
    for (let i = 0; i < pending.length; i += 4) {
        await Promise.all(pending.slice(i, i + 4).map(u =>
            fetch(u).then(res => res.ok && cache.put(u, res)).catch(() => {})));
    }
}

self.addEventListener('message', function (event) {
    if (event.data && event.data.type === 'warm') event.waitUntil(warmCache(event.data.dpr || 1));
});

self.addEventListener('fetch', function (event) {
    const req = event.request;
    if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;

    const dest = req.destination;

    // HTML: serve the cached page immediately, then refresh it in the background,
    // so clicking between pages never waits on the network.
    if (req.mode === 'navigate' || dest === 'document') {
        event.respondWith(
            caches.match(req).then(function (hit) {
                const net = fetch(req).then(function (res) {
                    const copy = res.clone();
                    caches.open(CACHE_VERSION).then(function (c) { c.put(req, copy); });
                    return res;
                }).catch(function () { return hit; });
                return hit || net;
            })
        );
        return;
    }

    // CSS and fonts: serve instantly from cache, refresh in the background.
    if (dest === 'style' || dest === 'font') {
        event.respondWith(
            caches.match(req).then(function (hit) {
                const net = fetch(req).then(function (res) {
                    const copy = res.clone();
                    caches.open(CACHE_VERSION).then(function (c) { c.put(req, copy); });
                    return res;
                }).catch(function () { return hit; });
                return hit || net;
            })
        );
        return;
    }

    // Images and video: cache first - these never change in place.
    event.respondWith(
        caches.match(req).then(function (hit) {
            return hit || fetch(req).then(function (res) {
                if (res.ok && res.status === 200) {
                    const copy = res.clone();
                    caches.open(CACHE_VERSION).then(function (c) { c.put(req, copy); });
                }
                return res;
            });
        })
    );
});
