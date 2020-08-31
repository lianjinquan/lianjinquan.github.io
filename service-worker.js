/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["E:/blog/public/2020/01/14/java/代码规范/index.html","8e9ee60f6442b3070f06bf72397626b6"],["E:/blog/public/2020/01/14/oracle/oracle/index.html","cac88721b4adca4670f8037b1df15742"],["E:/blog/public/2020/01/14/oracle/oracle概述/index.html","1825302e60ae11733858e2b1b35bba98"],["E:/blog/public/2020/02/29/java/分布式/index.html","b190c02eebd85d1cf0c24910ff8da1a8"],["E:/blog/public/2020/02/29/mysql/mysql/index.html","d7654b1c559bc5d9b3b4d22811052084"],["E:/blog/public/2020/02/29/mysql/索引/index.html","3cbc28274ee033d24e0c7653de15297f"],["E:/blog/public/2020/02/29/redis/redis/index.html","7cddb01849e488565a9d3f4d2f50549b"],["E:/blog/public/2020/03/07/java/异常/index.html","17f48cb9072b1c42f5a9cc2d6fadba63"],["E:/blog/public/2020/03/09/java/面试/index.html","bb952fe0664006c696cd4efaf7b5a5df"],["E:/blog/public/2020/03/09/redis/redis基础/index.html","5bccc46783bdeef16c082ef335fab5e7"],["E:/blog/public/2020/03/11/mysql/数据库设计规范/index.html","caf02a0215dc1c4dc029af0b62f12d04"],["E:/blog/public/2020/03/11/spring boot/springboot/index.html","1bc340180727d2607e8398c86ca47262"],["E:/blog/public/2020/03/11/事务/事务/index.html","91949edbad194d3d7c033ae2b05b3b5a"],["E:/blog/public/2020/03/11/线程/多线程/index.html","fa4b43395d4df7337ec0c3bb187f9759"],["E:/blog/public/2020/03/11/线程/并发/index.html","f07bfdf424db4e198248a7cc33a0acc3"],["E:/blog/public/2020/03/11/线程/线程池/index.html","58e0ba3e7e35ba0817b7d1bda977f4d1"],["E:/blog/public/2020/08/21/java/集合/index.html","fcb3672644f591d1d048da45a3807110"],["E:/blog/public/2020/08/22/java/java基础/index.html","23736fab6f80ab40bfd1766d03c68482"],["E:/blog/public/2020/08/23/linux/linux/index.html","4fc53a323da9e1353b8ca8b6ecf53349"],["E:/blog/public/2020/08/30/linux/linux的文件权限与目录配置/index.html","dcbeaf8d5e21164ba725ee0fcd3e2c65"],["E:/blog/public/Gallery/index.html","4faae086ab217a9e4dc8fb27ef5bae45"],["E:/blog/public/Gallery/marvel/index.html","a23a9770ce69ecc19dfd8fcd216df95a"],["E:/blog/public/Gallery/ohmygirl/index.html","4b9f16352de89e9b09e2e40aa99ff068"],["E:/blog/public/Gallery/wallpaper/index.html","4c6cda38082f28db7115b0b6bcfebd63"],["E:/blog/public/about/index.html","cdd935ec3adc44e927b3a1fec7eb95b4"],["E:/blog/public/archives/2020/01/index.html","cdf9c9b9147cd6bc83bfc9601679b0d6"],["E:/blog/public/archives/2020/02/index.html","b0393c811a89aa5e1b707f64d2f3f010"],["E:/blog/public/archives/2020/03/index.html","01f322592091f73074a38fd0ab9f4d83"],["E:/blog/public/archives/2020/08/index.html","f714ce8ddaafd52b759373cd72e215bc"],["E:/blog/public/archives/2020/index.html","fe52b19ac270f2a7f666b2e0c6bcb5a9"],["E:/blog/public/archives/2020/page/2/index.html","340ea987bead9d085d73bc781ceb5814"],["E:/blog/public/archives/index.html","9090583029a47e5f9b6edd087e507d99"],["E:/blog/public/archives/page/2/index.html","934c483af424317f330c020eeff192a9"],["E:/blog/public/categories/Oracle/index.html","67f196ade77a5e52608f30584bee8508"],["E:/blog/public/categories/index.html","2d2f5e914f5d9f2e2d968b528b5d2fe8"],["E:/blog/public/categories/java/index.html","0e372ebb7a684eef809a00e83277dd3f"],["E:/blog/public/categories/linux/index.html","4da3479071f0ff7c4f6f8138e0f1a9dd"],["E:/blog/public/categories/mysql/index.html","18fd22a70b81ff045686a27f91d5ef12"],["E:/blog/public/categories/redis/index.html","8821af0efacddbfc9a12574afd15f673"],["E:/blog/public/categories/redis基础/index.html","4c1ec6601de747072785bd1ab5e37cac"],["E:/blog/public/categories/springboot/index.html","87cb8214f7b144fcb85040e1c906cd55"],["E:/blog/public/categories/事务/index.html","c1695362cf9d9a339b28710157bc1411"],["E:/blog/public/categories/代码规范/index.html","f3bbcd1cdddb9009401c0c62d8408666"],["E:/blog/public/categories/分布式/index.html","690eece4b9c1443da6cf11ae1f76bddb"],["E:/blog/public/categories/多线程/index.html","8428702a32bc1bc1be892d0ab15a7361"],["E:/blog/public/categories/异常/index.html","b4804bca81c2f4f6ddd009576221280c"],["E:/blog/public/categories/数据库设计规范/index.html","ba3f5ea4cd94f4f801ea78fe1492dcec"],["E:/blog/public/categories/索引/index.html","2fb7773f15fc44f7837bab962e2488f5"],["E:/blog/public/categories/面试/index.html","00b9c0a7e8e63b3fa302f1430b30c927"],["E:/blog/public/css/APlayer.min.css","23e04b27a764c86627313552571f4b11"],["E:/blog/public/css/custom.css","4047f7bf45e5d0b702870762a1faabd4"],["E:/blog/public/css/index.css","d40a2533bab7ef96d31d81d1e072230d"],["E:/blog/public/css/less.css","44b0fd20399399aefc207089fc6444d8"],["E:/blog/public/css/tag.css","a5ada7bfc46c5481effe7dffd27b1177"],["E:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/public/images/01.png","c13a8cead336d7d7c581e621c2a649f2"],["E:/blog/public/images/02.jpg","8f22921a13bdb9ef79a784647b413362"],["E:/blog/public/images/03.png","b4a0df886b51ff1ad3275a245645aa15"],["E:/blog/public/images/04.jpg","43505b5e4a0a38c13cfe0b14a7037bca"],["E:/blog/public/images/BeanFactory Bean生命周期.png","00262e32b2d0077ebc92056dcbaee3f4"],["E:/blog/public/images/Spring 框架的 7 个模块.gif","ac382952d4f122f7d7d50d81950586f0"],["E:/blog/public/images/SpringMVC的执行流程.png","a932dadbd4a1e2f39b37dba562ba1828"],["E:/blog/public/images/SpringMvc执行流程.png","ae9b4c4e3daa99f1f014096342abaf26"],["E:/blog/public/images/Springmvc系统分层.png","b84880ebca399b1421af8c74c046d369"],["E:/blog/public/images/aof持久化.png","0015602001059d3564dc944fd357235a"],["E:/blog/public/images/backage.jpg","0acd62167392d46c59b0d0f8deefbcc4"],["E:/blog/public/images/dump.png","b4f55e1dec6c160d90b458d2db707698"],["E:/blog/public/images/get与post区别.png","78f60b099c7137d7da12ca0f1975ce9e"],["E:/blog/public/images/mysql存储大小.png","e00f19d308b58c81d1da4cfe8c7c04ae"],["E:/blog/public/images/rdb持久化.png","828e1e27c73e39abf855ee57959b9846"],["E:/blog/public/images/redis持久化.png","9c956b44e607cf7528a3219f0946ca6b"],["E:/blog/public/images/redis持久化2.png","c8582ebeb09abd7977a05036dbab7a06"],["E:/blog/public/images/冒泡排序.gif","4700503d1944f2cc25ea073339203b27"],["E:/blog/public/images/可见性问题.png","5bdeefd733c45b710c00b6bc182e7a1d"],["E:/blog/public/images/并发编程.jpg","1934c77529315f1ac43a0485b551ec9e"],["E:/blog/public/images/并行.png","1ec9c7937efecacde958eddd5f738c0b"],["E:/blog/public/images/打印4种情况.png","9a2ae8b73f52713f19aa0a14cec232e1"],["E:/blog/public/images/数据库事务的隔离级别.png","c584d1dbe0d04a3c39c4dcccedb94c28"],["E:/blog/public/images/线程切换.png","2046b1dc422564350b0e22a6570e8ee9"],["E:/blog/public/images/线程池.png","7d42d7149d5008f5ea71a3105ae4f11d"],["E:/blog/public/images/线程池参数.png","79025d4da1fff9997684220cc0fcf1b8"],["E:/blog/public/images/线程池参数顺序.png","130d484535fd9849e0170e42a37dc1cc"],["E:/blog/public/images/线程状态转换.png","1dd89e14b06d81d45cdd5ed2b442f358"],["E:/blog/public/images/线程生命周期.jpg","aef061e8705de8f30d8b39b3a66ea192"],["E:/blog/public/images/线程生命周期.png","f3f0e87092e9fc7edc31529620c45846"],["E:/blog/public/images/线程的生命周期.png","e1aa23736f3a18a8b0a190751cff52d3"],["E:/blog/public/images/进程.png","d59d7442389e6eb558f8de5aaadb8041"],["E:/blog/public/images/配置文件优先级.jpg","32e5aea241c61dee4d3d75b0815ccc15"],["E:/blog/public/images/集合.png","0060fd5e31f2660ceefb4feccef08bda"],["E:/blog/public/images/集合2.png","c75d4c55996ffd9d779ffe9295a75e8b"],["E:/blog/public/images/集合3.jpg","028237c2b37f496bf97b6b15685b4584"],["E:/blog/public/images/集合分类.png","d5d107d4f337f1f58d68922c4b1e3c69"],["E:/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/public/img/avatar.jpg","90d70b57961af087b88b8041c5f329f3"],["E:/blog/public/img/favicon.jpg","75edba6ec0c01ba862a9f66f383b620a"],["E:/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/blog/public/index.html","51bc843bf60a851c6c228d08041eea43"],["E:/blog/public/js/APlayer.min.js","46cd907eeef5f628fc7197715e012d07"],["E:/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/blog/public/js/botui.js","9bd324283e8898e4b488a7903a7e9ed6"],["E:/blog/public/js/ip_content.js","92bacff50587527d43589642a7caecff"],["E:/blog/public/js/less.js","665e0f4083d90cd0247b94e4bfdbb0b1"],["E:/blog/public/js/main.js","83086cbc797c743e17a9c592e6d36dd7"],["E:/blog/public/js/sakura.js","d259eedc4ec9687b501f075693a5afbd"],["E:/blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["E:/blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["E:/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["E:/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["E:/blog/public/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["E:/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["E:/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["E:/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["E:/blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["E:/blog/public/js/timeDate.js","a09793407ca641e40673dab7c07012e9"],["E:/blog/public/js/tw_cn.js","5b26f58076202394a66cde8b885f3225"],["E:/blog/public/js/utils.js","b04af39def288f877195692f094bafd6"],["E:/blog/public/link/index.html","8e87fb6019b9853b59ac914973197806"],["E:/blog/public/movies/index.html","7b7b73b3a44a8b068e7de69f0d375642"],["E:/blog/public/music/index.html","c8528500d31f926886ee6951019503e6"],["E:/blog/public/page/2/index.html","a3465a3671fec5f506a7a118ace20858"],["E:/blog/public/photos/index.html","21c8ddff04da4d8515b6502911008b17"],["E:/blog/public/tags/Oracle/index.html","a253170f1c3f7744cad6c7f6b73f2439"],["E:/blog/public/tags/index.html","0f02aaaffdca55599d2c990ef524afc4"],["E:/blog/public/tags/java/index.html","cbddc9037e8b1cb042d404672d1c8115"],["E:/blog/public/tags/linux/index.html","e88b53573d2edbf32f22c025fb7a503d"],["E:/blog/public/tags/mysql/index.html","b512bd4835dce7ddd47edc65d63956a7"],["E:/blog/public/tags/redis/index.html","37bb0bc6db22a51eea02b913f46b8c97"],["E:/blog/public/tags/redis基础/index.html","bae71aab075c31c00f70f5d67f39b484"],["E:/blog/public/tags/springboot/index.html","d82e31fa4f0da539b32ed45520cf4951"],["E:/blog/public/tags/事务/index.html","9242c4663ca3799234ff5ccf5ab71e79"],["E:/blog/public/tags/代码规范/index.html","8d7d174078db3ac10e0e215b2a58edef"],["E:/blog/public/tags/分布式/index.html","40c948234ce497ffb30c7c312ef903d5"],["E:/blog/public/tags/多线程/index.html","09d746c7b570f88bd0e6418a18f2812b"],["E:/blog/public/tags/异常/index.html","b8a8edae8fd5de21b9662bf26346b3c2"],["E:/blog/public/tags/数据库设计规范/index.html","d0fb27aaec823b06e07bba7464ac7caf"],["E:/blog/public/tags/索引/index.html","a57e1274618fb6c828ef6e04ea6bb6c0"],["E:/blog/public/tags/面试/index.html","d2b75b61f2af0aedf4a7dfa8966d03de"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







