// Service Worker
var cache_version = "offline-storage_v1";
var cached_files = [
    "/~dbaer2/memes/",
    "/~dbaer2/memes/index.html",
    "/~dbaer2/memes/manifest.json",
    "/~dbaer2/memes/JallaBot.js",
    "/~dbaer2/memes/icons/Icon-38.png",
    "/~dbaer2/memes/icons/Icon-57.png",
    "/~dbaer2/memes/icons/Icon-115.png",
    "/~dbaer2/memes/icons/Icon-115.png", 
];
self.addEventListener("install", event => {
   console.log("Service worker installed");
   event.waitUntil(
    caches.open(cache_version)
    .then(cache => {
            cache.add(cached_files[1]);
            console.log(cached_files[1] + " cached successfully");
            cache.add(cached_files[2]);
            console.log(cached_files[2] + " cached successfully");
            cache.add(cached_files[3]);
            console.log(cached_files[3] + " cached successfully");
            cache.add(cached_files[4]);
            console.log(cached_files[4] + " cached successfully");
            cache.add(cached_files[5]);
            console.log(cached_files[5] + " cached successfully");
            cache.add(cached_files[6]);
            console.log(cached_files[6] + " cached successfully");
            cache.add(cached_files[7]);
            console.log(cached_files[7] + " cached successfully");

        self.skipWaiting();
    }))
});
self.addEventListener("activate", event => {
   console.log("Service worker activated");
   event.waitUntil(
    caches.keys().then(cache_values => {
        return Promise.all(
            cache_values.map(key => {
                if(key !== cache_version) {
                    console.log('Service Worker Updating');
                    return caches.delete(key);
                } 
            }))  
        }))});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then((cacheData) => {
            return cacheData || fetch(event.request)
            .then(fetchResponse=>{
                console.log(fetchResponse);
                caches.open(cache_version).then(cache =>{
                    cache.put(event.request, fetchResponse.clone());
                    return fetchResponse;
                })
            })
        }))});