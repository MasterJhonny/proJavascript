const VERSION = 'v2'

self.addEventListener('install', event => {
    event.waitUntil(precache())
})

async function precache(){
    const cache = await caches.open(VERSION)
    return cache.addAll([
        '/',
        '/repasoServis.html'
    ])
}
