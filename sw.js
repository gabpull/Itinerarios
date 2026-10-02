const CACHE = "japon-itinerario-v25";
const FILES = [
  "./",
  "./index.html",
  "./css/styles.css?v=25",
  "./js/app.js?v=25",
  "./js/itinerary.js?v=25",
  "./manifest.webmanifest",
  "./icon.svg",
  "./audio/p01.mp3",
  "./audio/p02.mp3",
  "./audio/p03.mp3",
  "./audio/p04.mp3",
  "./audio/p05.mp3",
  "./audio/p06.mp3",
  "./audio/p07.mp3",
  "./audio/p08.mp3",
  "./audio/p09.mp3",
  "./audio/p10.mp3",
  "./audio/p11.mp3",
  "./audio/p12.mp3",
  "./audio/p13.mp3",
  "./audio/p14.mp3",
  "./audio/p15.mp3",
  "./audio/p16.mp3",
  "./audio/p17.mp3",
  "./audio/p18.mp3",
  "./audio/p19.mp3",
  "./audio/p20.mp3",
  "./audio/p21.mp3",
  "./audio/p22.mp3",
  "./audio/p23.mp3",
  "./audio/p24.mp3",
  "./audio/p25.mp3",
  "./audio/p26.mp3",
  "./audio/p27.mp3",
  "./audio/p28.mp3",
  "./audio/p29.mp3",
  "./audio/p30.mp3",
  "./audio/p31.mp3",
  "./audio/p32.mp3",
  "./audio/p33.mp3",
  "./audio/p34.mp3",
  "./audio/p35.mp3",
  "./audio/p36.mp3",
  "./audio/p37.mp3",
  "./audio/p38.mp3",
  "./audio/p39.mp3",
  "./audio/p40.mp3",
  "./audio/p41.mp3",
  "./audio/p42.mp3",
  "./audio/p43.mp3",
  "./audio/p44.mp3",
  "./audio/p45.mp3",
  "./audio/p46.mp3",
  "./audio/p47.mp3",
  "./audio/p48.mp3",
  "./audio/p49.mp3",
  "./audio/p50.mp3",
  "./audio/p51.mp3",
  "./audio/p52.mp3",
  "./audio/p53.mp3",
  "./audio/p54.mp3",
  "./audio/p55.mp3",
  "./audio/p56.mp3",
  "./audio/p57.mp3",
  "./audio/p58.mp3",
  "./audio/p59.mp3",
  "./audio/p60.mp3",
  "./audio/p61.mp3",
  "./audio/p62.mp3",
  "./audio/p63.mp3",
  "./audio/p64.mp3",
  "./audio/p65.mp3",
  "./audio/p66.mp3",
  "./audio/p67.mp3",
  "./audio/p68.mp3",
  "./audio/p69.mp3",
  "./audio/p70.mp3",
  "./audio/p71.mp3",
  "./audio/p72.mp3",
  "./audio/p73.mp3",
  "./audio/p74.mp3",
  "./audio/p75.mp3",
  "./audio/p76.mp3",
  "./audio/p77.mp3",
  "./audio/p78.mp3",
  "./audio/p79.mp3",
  "./audio/p80.mp3"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.addAll(FILES);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (key) { return key !== CACHE; })
          .map(function (key) { return caches.delete(key); })
      );
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") return;
  var url = new URL(event.request.url);
  if (url.origin !== location.origin) return;
  event.respondWith(
    fetch(event.request).then(function (response) {
      if (response && response.ok) {
        var copy = response.clone();
        caches.open(CACHE).then(function (cache) { cache.put(event.request, copy); });
      }
      return response;
    }).catch(function () {
      return caches.match(event.request);
    })
  );
});
