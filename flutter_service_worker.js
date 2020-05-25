'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "2417239720a23b9165f0b7c099806999",
"/": "2417239720a23b9165f0b7c099806999",
"main.dart.js": "8e9517c0032ce2faf74ac3c9aecf6d92",
"favicon.png": "49f6d4532ebdeb1ab7d52f8197c754b1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "90e3ba50c4fc35dfdf58dbb2b1e853c0",
"assets/LICENSE": "e5f8949cd2db314ce7ce320da0fa6538",
"assets/AssetManifest.json": "a43271d6f84156d545861b24d05c963a",
"assets/FontManifest.json": "580ff1a5d08679ded8fcf5c6848cece7",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/logo.jpg": "72d8e4a91a21994c6f60df72f671aaa3"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
