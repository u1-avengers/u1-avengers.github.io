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
    "revision": "5ea0e5be4f68122554b71b0e562076e3"
  },
  {
    "url": "assets/css/0.styles.cfcd309d.css",
    "revision": "5e29ada26f7f2c8c53de03f3b39ad2c5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9f1ebcc9.js",
    "revision": "2371269a50abcbff1cb9ee4d45040610"
  },
  {
    "url": "assets/js/11.1ac44408.js",
    "revision": "1128d662c419fd91c815950004dc06bb"
  },
  {
    "url": "assets/js/12.85c627eb.js",
    "revision": "0729bc7ad424a7b5c0fd15446538c532"
  },
  {
    "url": "assets/js/13.cffb8607.js",
    "revision": "dd0389118a6c81b41a93f338b6455130"
  },
  {
    "url": "assets/js/14.0d09eea6.js",
    "revision": "f19f79e1e60b0637177613d3da544f31"
  },
  {
    "url": "assets/js/15.08a01023.js",
    "revision": "74e0168a2b9aa61b052bd98498c330f5"
  },
  {
    "url": "assets/js/16.00a23946.js",
    "revision": "e81549ccf7815eaa1fd13949965f2e5d"
  },
  {
    "url": "assets/js/17.4e3d0279.js",
    "revision": "13f0a8417d7e501fd11df24ca2f39d6f"
  },
  {
    "url": "assets/js/18.1c5e0cd0.js",
    "revision": "fbf377b278629c7734819f64eddd8df3"
  },
  {
    "url": "assets/js/19.bfc5ae49.js",
    "revision": "31e628015ddfac1e6b8897b71382d992"
  },
  {
    "url": "assets/js/2.b0d4b1ce.js",
    "revision": "7109b7d3e9d44bfdcf667444111f7b8e"
  },
  {
    "url": "assets/js/20.49459dc6.js",
    "revision": "304a4010fec50d3c9c4037b64d21a74d"
  },
  {
    "url": "assets/js/3.49cda12c.js",
    "revision": "208ff478233faadbb594610d9c687938"
  },
  {
    "url": "assets/js/4.38c359fc.js",
    "revision": "39018bbf3ab7e40b01677c31297568e0"
  },
  {
    "url": "assets/js/5.67c69bd1.js",
    "revision": "f5111c02f2ce84e5c88ed548093168a3"
  },
  {
    "url": "assets/js/6.3085526c.js",
    "revision": "53e912fa6969de4ff23db4981f5d0de7"
  },
  {
    "url": "assets/js/7.a6281889.js",
    "revision": "4f9d66375e07f3ffbb8c15ef482a5f52"
  },
  {
    "url": "assets/js/8.8858a9a5.js",
    "revision": "a18ec877cf8d0397f02ad43254935f79"
  },
  {
    "url": "assets/js/9.9a035e05.js",
    "revision": "b636d441f9d4d61e35a6b5fbe492acf1"
  },
  {
    "url": "assets/js/app.4b01407a.js",
    "revision": "b2713e08190d133f74c4a6a0164aab24"
  },
  {
    "url": "ico-192.png",
    "revision": "b812db4a747aeac01e2525b809769fb6"
  },
  {
    "url": "ico-512.png",
    "revision": "8d02302f6094f8e564cd8ae8d6b75fea"
  },
  {
    "url": "ico.png",
    "revision": "a4f54ff308f883a47f00331f73f7d2d5"
  },
  {
    "url": "index.html",
    "revision": "9d77b0c7ab3b5a0e0f075a056bb3e991"
  },
  {
    "url": "logo.png",
    "revision": "4bcfa22e266e1a02472f94ee283ace74"
  },
  {
    "url": "product/index.html",
    "revision": "2a0d892e3cf53271dcc43f2de3b75fdf"
  },
  {
    "url": "product/push-goal/index.html",
    "revision": "22bda57a7a29d4a65620715595f1199b"
  },
  {
    "url": "product/remind-pull-request/index.html",
    "revision": "a8ada6283f8da59dfde769c0550a5352"
  },
  {
    "url": "techtalk/ci-cd-github-actions/index.html",
    "revision": "b9cda03c4e684b7a3c6bd7aa456f69f8"
  },
  {
    "url": "techtalk/deploy-server-deployer/index.html",
    "revision": "309dac74990ea5e8492a4eaa983f521b"
  },
  {
    "url": "techtalk/git-flow/index.html",
    "revision": "6b992198c64ca6724d1b61ba25fbee63"
  },
  {
    "url": "techtalk/index.html",
    "revision": "3330c1fc147b8decfed0814467768ca3"
  },
  {
    "url": "techtalk/laravel-cache-everything/index.html",
    "revision": "be1b2836909a16d1986c195f8c481b0b"
  },
  {
    "url": "techtalk/qa-hieu-qua/index.html",
    "revision": "3f0dfde7a02f3f9e72fce0f1848861a1"
  },
  {
    "url": "techtalk/scale-up-monolithic/index.html",
    "revision": "51ee17de12964cd2a2bfdac228b80960"
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
