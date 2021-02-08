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
    "revision": "e6bac2c6d8d560ca073b718c0af66d89"
  },
  {
    "url": "about/index.html",
    "revision": "a613dc58295ffdb9b6062431c69c4999"
  },
  {
    "url": "about/using-vue.html",
    "revision": "02bac224428b2bce3d652a60c09d3fb4"
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
    "url": "assets/js/11.2a35594e.js",
    "revision": "239e94b8df9fa3e816438de40c29126c"
  },
  {
    "url": "assets/js/12.a781762d.js",
    "revision": "67b68e73c084e32e22429771269f5747"
  },
  {
    "url": "assets/js/13.8c72424d.js",
    "revision": "d1b3cf32a4fa9c3171f84c9d971aeead"
  },
  {
    "url": "assets/js/14.f83168b8.js",
    "revision": "e1b17d12c7a5e817f81689c90291973d"
  },
  {
    "url": "assets/js/15.b6e4f16f.js",
    "revision": "9e7d7d858a282fdef4450e989da8ed5a"
  },
  {
    "url": "assets/js/16.5d7bbab7.js",
    "revision": "9068fc9428b37011ce1f1a76134975d4"
  },
  {
    "url": "assets/js/17.acc4979a.js",
    "revision": "95f277cd168a9552108d6e451ee1d678"
  },
  {
    "url": "assets/js/18.3907bdbb.js",
    "revision": "fbb93b5507301a93d6e3a8b59bb4e485"
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
    "url": "assets/js/app.6005db3b.js",
    "revision": "4351ff5c8d42409e8e5b326210441828"
  },
  {
    "url": "ico.png",
    "revision": "a4f54ff308f883a47f00331f73f7d2d5"
  },
  {
    "url": "index.html",
    "revision": "b68d608ac7d10bec8cd5ff707b786fe2"
  },
  {
    "url": "logo.png",
    "revision": "4bcfa22e266e1a02472f94ee283ace74"
  },
  {
    "url": "techtalk/ci-cd-github-actions.html",
    "revision": "c092f8ae9a3f0dde027ad7be4115ed96"
  },
  {
    "url": "techtalk/deploy-server-deployer.html",
    "revision": "c827ec07c2acd87379fb90addadbdfb5"
  },
  {
    "url": "techtalk/git-flow.html",
    "revision": "bd1b391ea62f61248592e5b215c8d377"
  },
  {
    "url": "techtalk/index.html",
    "revision": "a2f44adf13d9f3102511e393544d47f4"
  },
  {
    "url": "techtalk/laravel-cache-everything.html",
    "revision": "7d6a5e89986c3f852d7f4c7678397cbf"
  },
  {
    "url": "techtalk/qa-hieu-qua.html",
    "revision": "e4d4b6242349e885d1c38f3ffc7d95c0"
  },
  {
    "url": "techtalk/scale-up-monolithic.html",
    "revision": "583454e30a7523029fbcb1d8d32c771b"
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
