const CACHE='theory-sprint-audit-v26-integrated-learning-flow';
const ASSETS=['./','./index.html','./course-data.js','./course-data-audit02.js','./course-data-audit03.js','./course-data-audit04.js','./course-data-audit05.js','./exam-structure.js','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request))));
