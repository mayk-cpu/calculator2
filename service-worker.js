const { cache } = require("react");

const CACHE_NAME = "calculator-v1";

const urlsToCache = [
    "/calculator2/",
    "/calculator2/index.html",
    "/calculator2/style.css",
    "/calculator2/script.js",
    "/calculator2/favicon.png",
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache)=> {
            console.log("Кэширование файлов");
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", (event) => {
event.responWith(
    caches.match(event.request)
    .then((Response) => {
        return Response || fetch(event.request);
    })
);
});
