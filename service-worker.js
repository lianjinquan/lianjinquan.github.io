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

var precacheConfig = [["E:/blog/public/2020/01/14/java/代码规范/index.html","21c4253f7db4f1e7fdb6bcc010efbd81"],["E:/blog/public/2020/01/14/oracle/oracle/index.html","608b89d4e67383bb7f768082f920fedc"],["E:/blog/public/2020/01/14/oracle/oracle概述/index.html","91b5ac279cb06fe40c2b0d4e9bbef7f3"],["E:/blog/public/2020/02/29/java/分布式/index.html","71caa04e8e60c4cc7e0e2e929278143e"],["E:/blog/public/2020/02/29/mysql/mysql/index.html","bedab7414abf3daf2205bc225591dada"],["E:/blog/public/2020/02/29/mysql/索引/index.html","5ecc8559a64b24dc7068a12359723e48"],["E:/blog/public/2020/02/29/redis/redis/index.html","8ebe479523649e8483156737700e2809"],["E:/blog/public/2020/03/07/java/异常/index.html","f30fdf01dd30f96c0dcad8d18d033ade"],["E:/blog/public/2020/03/09/redis/redis基础/index.html","fdea9b9379d51d25c2735b8f4fa463b7"],["E:/blog/public/2020/03/11/mysql/数据库设计规范/index.html","13f5e1472e0073e3a91598c5d45fd876"],["E:/blog/public/2020/03/11/spring boot/springboot/index.html","50b1a6c7403a01d46eb78ce6b7cc5251"],["E:/blog/public/2020/03/11/事务/事务/index.html","74147a0a09716648f105397e1c09137d"],["E:/blog/public/2020/03/11/线程/多线程/index.html","2b108c54ef35ba97114d63b6f1863c13"],["E:/blog/public/2020/03/11/线程/并发/index.html","24f0ecb80d6859f22f6b8fa6d32c2f18"],["E:/blog/public/2020/03/11/线程/线程池/index.html","b248e0aa8b1c41f9a32cd02c2d39dcf9"],["E:/blog/public/2020/08/21/java/集合/index.html","7526ff8a4221198bc70fa6a4fb083e5a"],["E:/blog/public/2020/08/22/java/java基础/index.html","b88a61fc57790aaf854d2bef274daaea"],["E:/blog/public/2020/08/23/linux/linux/index.html","fd9722937a2946f2262fb1854c071ac4"],["E:/blog/public/2020/08/30/linux/linux的文件权限与目录配置/index.html","28e7aceab143587bc52daa3f01675e1f"],["E:/blog/public/2020/09/13/python/超实用的you-get视频下载工具/index.html","b96ede5ebf0709fd3fba877a9ec257e7"],["E:/blog/public/Gallery/index.html","24c5a8f1ea4751267514a7b1d49e6ef6"],["E:/blog/public/Gallery/marvel/index.html","aed7e6c8f9af7c2f5d64b3136dc08fb1"],["E:/blog/public/Gallery/ohmygirl/index.html","fc2157badceb3007ae2008f36d1ec816"],["E:/blog/public/Gallery/wallpaper/index.html","410c8129b02fd0c4fcbe25cc0e17084e"],["E:/blog/public/about/index.html","b1551b2ca1acd9384ccbc676fd5c3644"],["E:/blog/public/archives/2020/01/index.html","8fc691fc3fabbba9c4882a1d4ef4ba0b"],["E:/blog/public/archives/2020/02/index.html","7745ead3e7cbfc1650c3a71567be6cde"],["E:/blog/public/archives/2020/03/index.html","88a90943fdffa784a2133c36a2f301c3"],["E:/blog/public/archives/2020/08/index.html","e8dbc6a0ccea143cb94eba0b65bd83fe"],["E:/blog/public/archives/2020/09/index.html","db5c493a08ae409672f586524c249d1d"],["E:/blog/public/archives/2020/index.html","8fb55d2473bf87ae9ff174336fa4eed3"],["E:/blog/public/archives/2020/page/2/index.html","7ad07e9400c79a938008284db1217964"],["E:/blog/public/archives/index.html","7c73e0a7159ae649096fa498d6fb3084"],["E:/blog/public/archives/page/2/index.html","ccd460072caec17b1a72dfe3c7dc0075"],["E:/blog/public/categories/Oracle/index.html","2805062ee9f883783237e092406e9f46"],["E:/blog/public/categories/index.html","ad63030a6209422f0e458428ae71f4e9"],["E:/blog/public/categories/java/index.html","4ac0092bd158ba241ed74caf66fee2bd"],["E:/blog/public/categories/linux/index.html","3a0380244227aae62c8a13516176b077"],["E:/blog/public/categories/mysql/index.html","e850086bf75244ced54d99b7da67cc46"],["E:/blog/public/categories/python/index.html","04ec54dc10c9132e3690a4ecaa348994"],["E:/blog/public/categories/redis/index.html","aafb29d9fb3065696bb37e7bc7732bc0"],["E:/blog/public/categories/redis基础/index.html","266d04359ad43f8e6fa393c8a610462b"],["E:/blog/public/categories/springboot/index.html","0b2372625a133dbdfede11e8afd7a4e2"],["E:/blog/public/categories/事务/index.html","761bffa017867e95a7b1267b165c7c3f"],["E:/blog/public/categories/代码规范/index.html","dc5ffe3afb29bf55f9adb57c8ef099ff"],["E:/blog/public/categories/分布式/index.html","d791fbb4fffa092f586d224158f54d9f"],["E:/blog/public/categories/多线程/index.html","921d02db5875306cbc8ae6f1a7014e3e"],["E:/blog/public/categories/异常/index.html","304314434b4ce2f1a92fddcb8402b6ca"],["E:/blog/public/categories/数据库设计规范/index.html","bc2b1855018bc68bcd7f4272c7b38779"],["E:/blog/public/categories/索引/index.html","c40e0bf7f55fccba6ae09566bfa1e862"],["E:/blog/public/css/APlayer.min.css","23e04b27a764c86627313552571f4b11"],["E:/blog/public/css/custom.css","4047f7bf45e5d0b702870762a1faabd4"],["E:/blog/public/css/index.css","3caa804cbf0bac014ae45c9cc3a04f3a"],["E:/blog/public/css/less.css","5194a8fd13b2d553a928b89b38b74197"],["E:/blog/public/css/tag.css","a5ada7bfc46c5481effe7dffd27b1177"],["E:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/public/images/01.png","c13a8cead336d7d7c581e621c2a649f2"],["E:/blog/public/images/02.jpg","8f22921a13bdb9ef79a784647b413362"],["E:/blog/public/images/03.png","b4a0df886b51ff1ad3275a245645aa15"],["E:/blog/public/images/04.jpg","43505b5e4a0a38c13cfe0b14a7037bca"],["E:/blog/public/images/BeanFactory Bean生命周期.png","00262e32b2d0077ebc92056dcbaee3f4"],["E:/blog/public/images/Spring 框架的 7 个模块.gif","ac382952d4f122f7d7d50d81950586f0"],["E:/blog/public/images/SpringMVC的执行流程.png","a932dadbd4a1e2f39b37dba562ba1828"],["E:/blog/public/images/SpringMvc执行流程.png","ae9b4c4e3daa99f1f014096342abaf26"],["E:/blog/public/images/Springmvc系统分层.png","b84880ebca399b1421af8c74c046d369"],["E:/blog/public/images/aof持久化.png","0015602001059d3564dc944fd357235a"],["E:/blog/public/images/backage.jpg","0acd62167392d46c59b0d0f8deefbcc4"],["E:/blog/public/images/dump.png","b4f55e1dec6c160d90b458d2db707698"],["E:/blog/public/images/get与post区别.png","78f60b099c7137d7da12ca0f1975ce9e"],["E:/blog/public/images/mysql存储大小.png","e00f19d308b58c81d1da4cfe8c7c04ae"],["E:/blog/public/images/rdb持久化.png","828e1e27c73e39abf855ee57959b9846"],["E:/blog/public/images/redis持久化.png","9c956b44e607cf7528a3219f0946ca6b"],["E:/blog/public/images/redis持久化2.png","c8582ebeb09abd7977a05036dbab7a06"],["E:/blog/public/images/冒泡排序.gif","4700503d1944f2cc25ea073339203b27"],["E:/blog/public/images/可见性问题.png","5bdeefd733c45b710c00b6bc182e7a1d"],["E:/blog/public/images/并发编程.jpg","1934c77529315f1ac43a0485b551ec9e"],["E:/blog/public/images/并行.png","1ec9c7937efecacde958eddd5f738c0b"],["E:/blog/public/images/打印4种情况.png","9a2ae8b73f52713f19aa0a14cec232e1"],["E:/blog/public/images/数据库事务的隔离级别.png","c584d1dbe0d04a3c39c4dcccedb94c28"],["E:/blog/public/images/线程切换.png","2046b1dc422564350b0e22a6570e8ee9"],["E:/blog/public/images/线程池.png","7d42d7149d5008f5ea71a3105ae4f11d"],["E:/blog/public/images/线程池参数.png","79025d4da1fff9997684220cc0fcf1b8"],["E:/blog/public/images/线程池参数顺序.png","130d484535fd9849e0170e42a37dc1cc"],["E:/blog/public/images/线程状态转换.png","1dd89e14b06d81d45cdd5ed2b442f358"],["E:/blog/public/images/线程生命周期.jpg","aef061e8705de8f30d8b39b3a66ea192"],["E:/blog/public/images/线程生命周期.png","f3f0e87092e9fc7edc31529620c45846"],["E:/blog/public/images/线程的生命周期.png","e1aa23736f3a18a8b0a190751cff52d3"],["E:/blog/public/images/进程.png","d59d7442389e6eb558f8de5aaadb8041"],["E:/blog/public/images/配置文件优先级.jpg","32e5aea241c61dee4d3d75b0815ccc15"],["E:/blog/public/images/集合.png","0060fd5e31f2660ceefb4feccef08bda"],["E:/blog/public/images/集合2.png","c75d4c55996ffd9d779ffe9295a75e8b"],["E:/blog/public/images/集合3.jpg","028237c2b37f496bf97b6b15685b4584"],["E:/blog/public/images/集合分类.png","d5d107d4f337f1f58d68922c4b1e3c69"],["E:/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/blog/public/index.html","0fb76dcfde7802fd6c23294afacec9e6"],["E:/blog/public/js/main.js","b6e408c9b509ce2b80cc5ce998b6502b"],["E:/blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["E:/blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["E:/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["E:/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["E:/blog/public/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["E:/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["E:/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["E:/blog/public/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["E:/blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["E:/blog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/blog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["E:/blog/public/link/index.html","62c7fa29ec8ab1872796486ac2a07d61"],["E:/blog/public/movies/index.html","ab6da0c192894e8d1606aa7a3447763b"],["E:/blog/public/music/index.html","e2cba0a48af26ea19859963719417a53"],["E:/blog/public/page/2/index.html","b1312ca3fe77bd72b7338917ffc6fea3"],["E:/blog/public/photos/index.html","a794b2b36d02035b544cec4c14593d6e"],["E:/blog/public/tags/Oracle/index.html","5405c091ae4910043f864a9cd41207a0"],["E:/blog/public/tags/index.html","21e152cee6aa43a635fbc4b2c4d86bdb"],["E:/blog/public/tags/java/index.html","f1aaade0b9d75d56c3217238483d72d8"],["E:/blog/public/tags/linux/index.html","f118ca8a9b8a1e7d22a4f9bb749b2378"],["E:/blog/public/tags/mysql/index.html","51a221f0fd514b8ae421858bae529463"],["E:/blog/public/tags/python/index.html","9a51842720ed936e1a0bb1ee9039b829"],["E:/blog/public/tags/redis/index.html","76e8ebe53812ab22a5cf0394635a1ed0"],["E:/blog/public/tags/redis基础/index.html","6fee7c315db678869aa7488cd71e2c8a"],["E:/blog/public/tags/springboot/index.html","61b23ad6e5e046f60195d9d53fc2306c"],["E:/blog/public/tags/事务/index.html","9ec9aaf888660f067e165804c9656d5b"],["E:/blog/public/tags/代码规范/index.html","5142ec465a9e6b5e45cd9d131df90c53"],["E:/blog/public/tags/分布式/index.html","ff680fb704e53524713f76a8b5997130"],["E:/blog/public/tags/多线程/index.html","6a41b0890d2a01d078c9b89b3447ec19"],["E:/blog/public/tags/异常/index.html","6d78f07f1cd2a80330ca467c1d9f5f22"],["E:/blog/public/tags/数据库设计规范/index.html","cdff2b8c929bc7a999ea8dbfbbc67ff4"],["E:/blog/public/tags/索引/index.html","7d72793b320e4c32f589f0acbfa75b85"]];
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







