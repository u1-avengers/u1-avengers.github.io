/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "df7ab234e1f13bf03f3e19eb4b14d22b"
  },
  {
    "url": "about/index.html",
    "revision": "9dcc31bfaad6d334b26c8f12be1a1d10"
  },
  {
    "url": "about/using-vue/index.html",
    "revision": "bb0088c09a5a22f99db46b221c739d66"
  },
  {
    "url": "assets/css/0.styles.146cde17.css",
    "revision": "462766c8567d72c63e9b598b1424d839"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.cc899a3a.js",
    "revision": "e0664d54d84e45af8e76d5340317cdc1"
  },
  {
    "url": "assets/js/11.2291566a.js",
    "revision": "b35782a32b4fd8544a4beecc40cb4bfd"
  },
  {
    "url": "assets/js/12.135f114e.js",
    "revision": "6908780b1f3b8ed5c5e87b1b9e320a8a"
  },
  {
    "url": "assets/js/13.f5dd65bb.js",
    "revision": "eb055f67b9d2573d59a1f0c4c0ff0763"
  },
  {
    "url": "assets/js/14.8a94389e.js",
    "revision": "47b2b072f325b70af9a3c23a505063b0"
  },
  {
    "url": "assets/js/15.0b81a6b0.js",
    "revision": "c793807424bea28e8b78e6b600fc4e8b"
  },
  {
    "url": "assets/js/16.fc17541a.js",
    "revision": "b1bd195b4369d3411512ebfed4b7c10a"
  },
  {
    "url": "assets/js/17.fa90f8dd.js",
    "revision": "c3e35aba207b9ac708f578059dcbd5fb"
  },
  {
    "url": "assets/js/18.149b9d61.js",
    "revision": "f7b2302f8a0d3dff26d999ce2f4f386f"
  },
  {
    "url": "assets/js/19.7b9f9086.js",
    "revision": "89de8193489da5df131b17a82c7ce1a6"
  },
  {
    "url": "assets/js/2.d64fea93.js",
    "revision": "a0cda0c5b70b4d3d0b20d63ad411cfa1"
  },
  {
    "url": "assets/js/20.7099a468.js",
    "revision": "464c0065e4ae0cec88a11fd1f8e8b323"
  },
  {
    "url": "assets/js/21.06e62f82.js",
    "revision": "66b5daf4aac60d8306caa3328fa2f927"
  },
  {
    "url": "assets/js/3.b1298170.js",
    "revision": "29712012900f3c325f6c952a95e45ad5"
  },
  {
    "url": "assets/js/4.283e86bd.js",
    "revision": "976662b2daaf76950a419f6708ddf35d"
  },
  {
    "url": "assets/js/5.6ff91546.js",
    "revision": "c99e5d4c6ac8d98333a0dabe8c176ff8"
  },
  {
    "url": "assets/js/6.b64f2c5b.js",
    "revision": "0948d7e88facb7d0e38d0e07425f6abc"
  },
  {
    "url": "assets/js/7.ebd76072.js",
    "revision": "ccaf7692d58df85d3153780695e9ab35"
  },
  {
    "url": "assets/js/8.e71e632b.js",
    "revision": "cabe6f3697d231f3d9d3e50ae3d89c0a"
  },
  {
    "url": "assets/js/9.acba90cf.js",
    "revision": "0e6a24e802962aac477485c29586cf58"
  },
  {
    "url": "assets/js/app.8cd5ac0b.js",
    "revision": "9d4d3f5dc3982059efd377a297b5f632"
  },
  {
    "url": "ico.png",
    "revision": "a4f54ff308f883a47f00331f73f7d2d5"
  },
  {
    "url": "index.html",
    "revision": "85e1e3c71d746b841a5c2d4ecfbb9164"
  },
  {
    "url": "logo.png",
    "revision": "4bcfa22e266e1a02472f94ee283ace74"
  },
  {
    "url": "techtalk/ci-cd-github-actions/index.html",
    "revision": "f6b6cb1ac078e646a0dd1de395185813"
  },
  {
    "url": "techtalk/deploy-server-deployer/index.html",
    "revision": "0a860ee887e3257575d9e61dfd3d7108"
  },
  {
    "url": "techtalk/git-flow/index.html",
    "revision": "e5ea4dc2cdc937dd8389663c26e2d58b"
  },
  {
    "url": "techtalk/index.html",
    "revision": "67a1589bf5a60a06de6d2f34519e2fb0"
  },
  {
    "url": "techtalk/laravel-cache-everything/index.html",
    "revision": "876c0328a80f6fe5879e1d1b410a8e15"
  },
  {
    "url": "techtalk/qa-hieu-qua/index.html",
    "revision": "643b0c28a1886f80d9e73d776d50fa95"
  },
  {
    "url": "techtalk/scale-up-monolithic/index.html",
    "revision": "d998bb64a011eb1b47b4c79f6394d242"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
