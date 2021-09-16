const VERSION = 'v1'

self.addEventListener('install', event => {
    event.waitUntil(precache());
})

self.addEventListener('fetch', event => {
    const request = event.request
    // solo get
    if(request.method !== 'GET') {
        return;
    }

    // buscar en cache
    event.respondWith(cacheResponse(request));

    event.waitUntil(updateCache(request));

})


// la ruta de los archivos debe esta bien escrita
async function precache() {
    const cache = await caches.open(VERSION)
    return cache.addAll([  
        '/',
        '/index.html',
        '/assets/main.js',
        '/assets/MediaPlayer.js',
        '/plugins/AutoPlay.js',
        '/plugins/AutoPause.js',
        '/assets/index.css',
        '/assets/big-buck-bunny.mp4'
])
}


async function cacheResponse(request) {
    const cache = await caches.open(VERSION)
    const response = await cache.match(request)
    return response || fetch(request)
} 

async function updateCache(request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response);
}