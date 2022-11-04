'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ac71e0db167cb665e2d2222473b38202",
"assets/assets/i18n/en.json": "b0b89c90990728e4eaf838b5328609be",
"assets/assets/i18n/vi.json": "b0b89c90990728e4eaf838b5328609be",
"assets/assets/icons/bottom_menu/bag.svg": "bb52a7abcacf01087b024cefdd34681e",
"assets/assets/icons/bottom_menu/cart.svg": "50e194e1e8443f32768a9e2962de40de",
"assets/assets/icons/bottom_menu/favorites.svg": "1ce04ace4edbbda76717bfd307ddb69d",
"assets/assets/icons/bottom_menu/home.svg": "03763d9987a1611f20bcda8fd177412a",
"assets/assets/icons/bottom_menu/profile.svg": "accc2feee9af0eef999fc6b253b79cb8",
"assets/assets/icons/favourites/bag.png": "7f3f834f3f2992e205e6b528f649dc2e",
"assets/assets/icons/favourites/fav_cart.svg": "e371ed59c106ee2e4f00229673270364",
"assets/assets/icons/products/star.svg": "b14c42407f64d9307d84fb3f2ad0c7f4",
"assets/assets/icons/products/star_fav.svg": "90c59f0bf821d13886e04fe715bc862f",
"assets/assets/icons/signin/facebook.png": "8c7631f3a624efc70789afa55a19c91f",
"assets/assets/icons/signin/google.png": "82942152307ac66b21d03291282fd0b2",
"assets/assets/images/checkout/alepay.png": "50699101857e358672d196091c7f17d0",
"assets/assets/images/checkout/bags.png": "b50a9cb8d90f333b501b2525faafe0f9",
"assets/assets/images/checkout/cart/product1.png": "43f8058ff3e290508a7a266705cbc798",
"assets/assets/images/checkout/cart/product2.png": "bdba453341ac1cccbd0c0189964c060e",
"assets/assets/images/checkout/cart/product3.png": "0d2e48e1acd7222ff668f9ceabcd83d3",
"assets/assets/images/checkout/cart/promo_bg1.png": "277bfb5558299a180ca81010c1af6887",
"assets/assets/images/checkout/cart/promo_bg2.png": "34731085abe240ab995d118b3bc73c8a",
"assets/assets/images/checkout/cod.png": "62510438a3d87d6b2af237fb1f191c63",
"assets/assets/images/checkout/cod2.png": "8455ad26a316aab0ae54affedb4a1017",
"assets/assets/images/checkout/cod3.png": "35970d88757b10f694c4f7c8e0380482",
"assets/assets/images/checkout/dark_card.png": "0d9c3b376fc826f27f227440d6809383",
"assets/assets/images/checkout/dhl.png": "411bef1431844aae4ae879f962834c70",
"assets/assets/images/checkout/fedex.png": "a956d18b7d1b9c2c8b590dd0d6b1fe89",
"assets/assets/images/checkout/light_card.png": "49875706e896e5d149b7b069fc2f0278",
"assets/assets/images/checkout/mastercard.png": "27f7695e2302d552a6bd535127f14eaf",
"assets/assets/images/checkout/success.png": "0f48cb6cc24d4fb3b73f6cc574159a95",
"assets/assets/images/checkout/usps.png": "1c53f9f4b068c52dec1db4613dff4221",
"assets/assets/images/products/shortdress.png": "4d483ca63c2e4fea5a88c0b87064cbba",
"assets/assets/images/products/shortdress2.png": "b25671ea465cc765d8cbcd46b346941d",
"assets/assets/placeholder.png": "4cf0008b7542056258541fdac5d07a6d",
"assets/assets/profile/user-profile.jpeg": "399215af81812a4444bb6e0d2ea6c70e",
"assets/assets/splash/bottombanner.png": "a7b1b0fc7ec7f2386a52b1e1688cffd5",
"assets/assets/splash/firstbanner.jpg": "4e4d05137480c3931d3c4b607b01fe10",
"assets/assets/splash/main3.png": "6e4f4d46ca4c654a7077f92f4960cd95",
"assets/assets/splash/sidebanner.png": "145dfb9748ed6705c5837e4bb4e4dd2d",
"assets/assets/splash/splash-home.png": "323c2b834a5e4758993f2869b0ab9437",
"assets/assets/splash/splash-search.png": "34afd4346df0eea932f334f5cca72336",
"assets/assets/splash/topbanner.png": "7ceb646ff90b5d93805b35af81ec6e2d",
"assets/assets/thumbs/category/accessories.png": "61bf5bb8593f8b619f1b60eb2bad29a9",
"assets/assets/thumbs/category/blouse.png": "8877178828168d25d878e6faba46a855",
"assets/assets/thumbs/category/clothes.png": "7f73a0c7339915718e2633ad377150b6",
"assets/assets/thumbs/category/new.png": "0fa842ac02ee3f7ab58be957b5c459c2",
"assets/assets/thumbs/category/pullover.png": "43f8058ff3e290508a7a266705cbc798",
"assets/assets/thumbs/category/shirt.png": "f94ce06ff115c949d0f65c12a74e0987",
"assets/assets/thumbs/category/shoes.png": "02b421cb9bcdd11279c976f6a48d2991",
"assets/assets/thumbs/category/topbanner1.png": "7ceb646ff90b5d93805b35af81ec6e2d",
"assets/assets/thumbs/category/tshirt.png": "be98306ac05489ef12c0bcece6c03e4c",
"assets/assets/thumbs/dress/dress1.png": "ad66a6085a72d9984721e224080307b8",
"assets/assets/thumbs/dress/dress2.png": "f42eb44ec3126de749b74f26febefbda",
"assets/assets/thumbs/products/blouse.png": "90bced4fe7a3df96ed8508f477650a02",
"assets/assets/thumbs/products/tshirt-spanish.png": "6f2ea7ce1ab82b6b844b0023e6db5f71",
"assets/assets/thumbs/shirt/shirt1.png": "02bc0791106e2106429c1b6555553eb5",
"assets/assets/thumbs/shirt/shirt2.png": "fde1bf73c14c088cf89208419f481f96",
"assets/FontManifest.json": "0596d1bb2ab7118f7937f8cdb55f8d9f",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/fonts/Montserrat-Black.ttf": "27e3649bab7c62fa21b8837c4842e40e",
"assets/fonts/Montserrat-BlackItalic.ttf": "d9b6ba595b059fc5d48e8f52c30f73b3",
"assets/fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/fonts/Montserrat-BoldItalic.ttf": "1b38414956c666bd1df78fe5b9c84756",
"assets/fonts/Montserrat-ExtraBold.ttf": "19ba7aa52a78c3896558ac1c0a5fb4c7",
"assets/fonts/Montserrat-ExtraBoldItalic.ttf": "52a50ca037f2f96fa567404dc3c5bdfb",
"assets/fonts/Montserrat-ExtraLight.ttf": "570a244cacd3d78b8c75ac5dd622f537",
"assets/fonts/Montserrat-ExtraLightItalic.ttf": "1170df5548b7e238df5fa14b6f1a753e",
"assets/fonts/Montserrat-Light.ttf": "409c7f79a42e56c785f50ed37535f0be",
"assets/fonts/Montserrat-LightItalic.ttf": "01c4560c9c15069b6700ce7ad2e49a9c",
"assets/fonts/Montserrat-Medium.ttf": "c8b6e083af3f94009801989c3739425e",
"assets/fonts/Montserrat-MediumItalic.ttf": "40a74702035bf9ef19053c84ce9a58b9",
"assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/Montserrat-SemiBold.ttf": "c641dbee1d75892e4d88bdc31560c91b",
"assets/fonts/Montserrat-SemiBoldItalic.ttf": "83c1ec1f1db9a6416791f7d9d29536f2",
"assets/fonts/Montserrat-Thin.ttf": "43dd5b7a3d277362d5e801e5353e3a01",
"assets/fonts/Montserrat-ThinItalic.ttf": "3c2b290f95cd5b33c3ead2911064a2ab",
"assets/NOTICES": "678c8a0f49a58f389cd6b8e6261da5a1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "f00de1f742223b7cf4cec1c2a0cd9764",
"canvaskit/canvaskit.wasm": "efe4a5da0205bb8d8c5aca7dad981abd",
"canvaskit/profiling/canvaskit.js": "411ee45f5abb57975ee5243310c6953e",
"canvaskit/profiling/canvaskit.wasm": "c6681b1a749ad902eefcba11fed1cb3f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e65e562fcd06f26e5329cc96517d5342",
"/": "e65e562fcd06f26e5329cc96517d5342",
"main.dart.js": "fc3d06f6006cbb6bba80a034fba66159",
"manifest.json": "ff524dae189777cc65c059874b1e370c",
"version.json": "51ab77c5cf9b0910047a41eae36b3ba2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
