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

var precacheConfig = [["E:/blog/public/2020/01/14/java/代码规范/index.html","f279e0f3eddf79700beb4741066d5858"],["E:/blog/public/2020/01/14/oracle/oracle/index.html","42f04a25c7cd8b9980ee674c80e022a7"],["E:/blog/public/2020/01/14/oracle/oracle概述/index.html","e893c57240ee63a4b617377b4e2ca0cf"],["E:/blog/public/2020/02/29/java/分布式/index.html","b999f38bd65c89246683967d638629ec"],["E:/blog/public/2020/02/29/mysql/mysql/index.html","fbe85eeb5bee8884255fa90cc6778f03"],["E:/blog/public/2020/02/29/mysql/索引/index.html","b740a51c1b71ef304a44048840e568f2"],["E:/blog/public/2020/02/29/redis/redis/index.html","b979480ff096a0ff503955ce9a357cee"],["E:/blog/public/2020/03/07/java/异常/index.html","bbef38f535958ab96b78227c299ef502"],["E:/blog/public/2020/03/09/redis/redis基础/index.html","27e76e7d5974c0792ea8cd2c1035f8df"],["E:/blog/public/2020/03/11/mysql/数据库设计规范/index.html","07c76b07a8f641332a25e5d56a26538b"],["E:/blog/public/2020/03/11/spring boot/springboot/index.html","76f5c8dca854f5e277e11fa29940e577"],["E:/blog/public/2020/03/11/事务/事务/index.html","8cdc0b51051e4a3da8e478c4e99ac0fe"],["E:/blog/public/2020/03/11/线程/多线程/index.html","5dab087a2b2977cb904a152148f4c642"],["E:/blog/public/2020/03/11/线程/并发/index.html","e70595bda5f0c3046ee55702405411a6"],["E:/blog/public/2020/03/11/线程/线程池/index.html","accf217f12b1965fbceb06b9b8b6b039"],["E:/blog/public/2020/08/21/java/集合/index.html","fe67f0106bb909226fff86cc3e761cbc"],["E:/blog/public/2020/08/22/java/java基础/index.html","b3d99fb2395ab5b6f0573514d6dfa391"],["E:/blog/public/2020/08/23/linux/linux/index.html","55743d398001e22511e5a73d7b6dc8cc"],["E:/blog/public/2020/08/30/linux/linux的文件权限与目录配置/index.html","a19882feead81fc13bc1b8b3160b24b5"],["E:/blog/public/2020/09/13/python/超实用的you-get视频下载工具/index.html","d99ec68ff6d28a3d417687df522a0ac4"],["E:/blog/public/Gallery/index.html","230f4dfbe843f067a5ec4b54c2af315d"],["E:/blog/public/Gallery/marvel/index.html","d5bdc2c34d7b917e5eb0832db960a210"],["E:/blog/public/Gallery/ohmygirl/index.html","60075aa5c749c802c90ec6a3e26917ea"],["E:/blog/public/Gallery/wallpaper/index.html","0607be2993725259d978e1d5f7579578"],["E:/blog/public/about/index.html","9ff05081a8795eccad571700faace56f"],["E:/blog/public/archives/2020/01/index.html","13edfea3f9933fb8abea39721f94b720"],["E:/blog/public/archives/2020/02/index.html","8527c7042b90bb504bb6be24a92ef5ef"],["E:/blog/public/archives/2020/03/index.html","1e42f6a7a518182d209e112b7288e7fb"],["E:/blog/public/archives/2020/08/index.html","01323913bf25a9ef3011b35a065676de"],["E:/blog/public/archives/2020/09/index.html","04c965531f5e024f7acff21cfa868f35"],["E:/blog/public/archives/2020/index.html","72c3ad38562fbf8b08a4c0e75ce783b7"],["E:/blog/public/archives/2020/page/2/index.html","1d7b5b23548eff0f1a92534c4f9ab2f4"],["E:/blog/public/archives/index.html","d4fad2d2dfd32edda866fd8894aec744"],["E:/blog/public/archives/page/2/index.html","e8391b8e27fc4418cfbd0db42907fb0d"],["E:/blog/public/categories/Oracle/index.html","14d9e35d9ae3d7d08b4177b0f88246cc"],["E:/blog/public/categories/index.html","f8a0ee21d32cdad90e7321d401e4ff13"],["E:/blog/public/categories/java/index.html","bb85012df7f861284ba415cc2d654b1c"],["E:/blog/public/categories/linux/index.html","da0b1caa478614e60d4665728ed8bbb3"],["E:/blog/public/categories/mysql/index.html","de2b230915c82cff3b88fdeb3080e552"],["E:/blog/public/categories/python/index.html","58c8edca3221e1d515e26a34869079b3"],["E:/blog/public/categories/redis/index.html","e2bc7502376c2096c72455cc300a7f7c"],["E:/blog/public/categories/redis基础/index.html","cb189bce9a9876fc3b3ae74a1db543dd"],["E:/blog/public/categories/springboot/index.html","3daa967d0bbcc38f0f58fa704d124993"],["E:/blog/public/categories/事务/index.html","57e9e80095fc35ecc39dd95b44e55fa7"],["E:/blog/public/categories/代码规范/index.html","8e967c073ccb0bfea29f5a18ddb90485"],["E:/blog/public/categories/分布式/index.html","87b7abcfc595fdbc366cca98bde40123"],["E:/blog/public/categories/多线程/index.html","96b9be48cd4bb84e08876b12c7a0ba3d"],["E:/blog/public/categories/异常/index.html","799e5443e0852130557cbe2ee3fa2daa"],["E:/blog/public/categories/数据库设计规范/index.html","2663b623c08cd76039c0f85839098879"],["E:/blog/public/categories/索引/index.html","f4e8cfd8185796e0cecb5ec5cd18b589"],["E:/blog/public/css/APlayer.min.css","23e04b27a764c86627313552571f4b11"],["E:/blog/public/css/custom.css","4047f7bf45e5d0b702870762a1faabd4"],["E:/blog/public/css/index.css","3caa804cbf0bac014ae45c9cc3a04f3a"],["E:/blog/public/css/less.css","de262e3d324b42ef1f3dee9da9a036c0"],["E:/blog/public/css/tag.css","a5ada7bfc46c5481effe7dffd27b1177"],["E:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/public/images/01.png","c13a8cead336d7d7c581e621c2a649f2"],["E:/blog/public/images/02.jpg","8f22921a13bdb9ef79a784647b413362"],["E:/blog/public/images/03.png","b4a0df886b51ff1ad3275a245645aa15"],["E:/blog/public/images/04.jpg","43505b5e4a0a38c13cfe0b14a7037bca"],["E:/blog/public/images/BeanFactory Bean生命周期.png","00262e32b2d0077ebc92056dcbaee3f4"],["E:/blog/public/images/Spring 框架的 7 个模块.gif","ac382952d4f122f7d7d50d81950586f0"],["E:/blog/public/images/SpringMVC的执行流程.png","a932dadbd4a1e2f39b37dba562ba1828"],["E:/blog/public/images/SpringMvc执行流程.png","ae9b4c4e3daa99f1f014096342abaf26"],["E:/blog/public/images/Springmvc系统分层.png","b84880ebca399b1421af8c74c046d369"],["E:/blog/public/images/aof持久化.png","0015602001059d3564dc944fd357235a"],["E:/blog/public/images/backage.jpg","0acd62167392d46c59b0d0f8deefbcc4"],["E:/blog/public/images/dump.png","b4f55e1dec6c160d90b458d2db707698"],["E:/blog/public/images/get与post区别.png","78f60b099c7137d7da12ca0f1975ce9e"],["E:/blog/public/images/mysql存储大小.png","e00f19d308b58c81d1da4cfe8c7c04ae"],["E:/blog/public/images/rdb持久化.png","828e1e27c73e39abf855ee57959b9846"],["E:/blog/public/images/redis持久化.png","9c956b44e607cf7528a3219f0946ca6b"],["E:/blog/public/images/redis持久化2.png","c8582ebeb09abd7977a05036dbab7a06"],["E:/blog/public/images/冒泡排序.gif","4700503d1944f2cc25ea073339203b27"],["E:/blog/public/images/可见性问题.png","5bdeefd733c45b710c00b6bc182e7a1d"],["E:/blog/public/images/并发编程.jpg","1934c77529315f1ac43a0485b551ec9e"],["E:/blog/public/images/并行.png","1ec9c7937efecacde958eddd5f738c0b"],["E:/blog/public/images/打印4种情况.png","9a2ae8b73f52713f19aa0a14cec232e1"],["E:/blog/public/images/数据库事务的隔离级别.png","c584d1dbe0d04a3c39c4dcccedb94c28"],["E:/blog/public/images/线程切换.png","2046b1dc422564350b0e22a6570e8ee9"],["E:/blog/public/images/线程池.png","7d42d7149d5008f5ea71a3105ae4f11d"],["E:/blog/public/images/线程池参数.png","79025d4da1fff9997684220cc0fcf1b8"],["E:/blog/public/images/线程池参数顺序.png","130d484535fd9849e0170e42a37dc1cc"],["E:/blog/public/images/线程状态转换.png","1dd89e14b06d81d45cdd5ed2b442f358"],["E:/blog/public/images/线程生命周期.jpg","aef061e8705de8f30d8b39b3a66ea192"],["E:/blog/public/images/线程生命周期.png","f3f0e87092e9fc7edc31529620c45846"],["E:/blog/public/images/线程的生命周期.png","e1aa23736f3a18a8b0a190751cff52d3"],["E:/blog/public/images/进程.png","d59d7442389e6eb558f8de5aaadb8041"],["E:/blog/public/images/配置文件优先级.jpg","32e5aea241c61dee4d3d75b0815ccc15"],["E:/blog/public/images/集合.png","0060fd5e31f2660ceefb4feccef08bda"],["E:/blog/public/images/集合2.png","c75d4c55996ffd9d779ffe9295a75e8b"],["E:/blog/public/images/集合3.jpg","028237c2b37f496bf97b6b15685b4584"],["E:/blog/public/images/集合分类.png","d5d107d4f337f1f58d68922c4b1e3c69"],["E:/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/blog/public/index.html","cbf3b3a19a93e83374665162d6925d31"],["E:/blog/public/js/main.js","b6e408c9b509ce2b80cc5ce998b6502b"],["E:/blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["E:/blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["E:/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["E:/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["E:/blog/public/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["E:/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["E:/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["E:/blog/public/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["E:/blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["E:/blog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/blog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["E:/blog/public/link/index.html","b187a6ae5406060358c9c378de67212a"],["E:/blog/public/movies/index.html","da8b6102059fddd94dd1c67a6467d035"],["E:/blog/public/music/index.html","140df10bfd1c0705252fd1442a4ae9f9"],["E:/blog/public/page/2/index.html","a087c9025952f0c3a2a1944384b584be"],["E:/blog/public/photos/index.html","51e6296fa013fdc028979b88dfaa218b"],["E:/blog/public/tags/Oracle/index.html","bb531175a501da6b3858534d4890bc42"],["E:/blog/public/tags/index.html","e69a7dfef78d34f5bcae8dae0cc3896c"],["E:/blog/public/tags/java/index.html","ed9204f3bc4c6431066c0abfa0337d22"],["E:/blog/public/tags/linux/index.html","8f71d5cd6d4cd9f56f06935e76f2fa17"],["E:/blog/public/tags/mysql/index.html","889b6977eca2054bdfaedaf50b91cc36"],["E:/blog/public/tags/python/index.html","cac91c64f670a5b1831f6b707eb3f30c"],["E:/blog/public/tags/redis/index.html","7a9634d6083209f52a5d56c71a82be01"],["E:/blog/public/tags/redis基础/index.html","0e2273f729fd58615594bdd56c8dadfe"],["E:/blog/public/tags/springboot/index.html","e0f33a6ecc73441cef458b257cd6241f"],["E:/blog/public/tags/事务/index.html","497dcf8c3c142f15f061baef0d0aa3ba"],["E:/blog/public/tags/代码规范/index.html","ca106e705a5353fb456502afcf60de7d"],["E:/blog/public/tags/分布式/index.html","c09953ff8b420ad1a3e8ff64dae46eeb"],["E:/blog/public/tags/多线程/index.html","4ee2baf7e591595316e2d39bdd0f6f15"],["E:/blog/public/tags/异常/index.html","3da7ebf468f44d55af390a4cde2ba37e"],["E:/blog/public/tags/数据库设计规范/index.html","c1637beac2aa66cd97f1044dba634fa2"],["E:/blog/public/tags/索引/index.html","7fd8a6e926f17895c55a0ab196340979"]];
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







