// Kippenlogboek: app-bestanden bewaren zodat de app ook zonder bereik opent.
// Gegevens (Supabase) worden nooit gecachet; die bewaart de app zelf.
const CACHE = "kippenlogboek-v2";
const FILES = ["./", "index.html", "manifest.webmanifest", "icon.svg", "icon-192.png", "kippen.jpg",
  "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).catch(() => {})); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.hostname.endsWith("supabase.co")) return;
  // eerst netwerk (altijd de nieuwste versie), anders de bewaarde kopie
  e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); if (r.ok) caches.open(CACHE).then(c => c.put(e.request, copy)); return r; })
    .catch(() => caches.match(e.request).then(r => r || caches.match("index.html"))));
});
