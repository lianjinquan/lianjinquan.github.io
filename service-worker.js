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

var precacheConfig = [["E:/blog/public/2020/01/14/java/代码规范/index.html","371a146df89f1ab44482e01a695877b1"],["E:/blog/public/2020/01/14/oracle/oracle/index.html","6fa6ff3b3737d50773992f487e92886f"],["E:/blog/public/2020/01/14/oracle/oracle概述/index.html","ad9083c152cb9e0f05bf0770e23892cf"],["E:/blog/public/2020/02/29/java/分布式/index.html","75308dd7bc366a9953fd461f0d05f323"],["E:/blog/public/2020/02/29/mysql/mysql/index.html","2bb085f5adc171ed90ccce0b5dda152e"],["E:/blog/public/2020/02/29/mysql/索引/index.html","276e612eb03765117819ade572332695"],["E:/blog/public/2020/02/29/redis/redis/index.html","4dd819f4cfc6f41275f80703ebe7af93"],["E:/blog/public/2020/03/07/java/异常/index.html","855b9c3e76c99186d0d727875c0f5129"],["E:/blog/public/2020/03/09/redis/redis基础/index.html","c857e1bd12936eba3119379ca9a05a91"],["E:/blog/public/2020/03/11/mysql/数据库设计规范/index.html","a56ac521762115b62359aa346d1269cb"],["E:/blog/public/2020/03/11/spring boot/springboot/index.html","0e7e228d8fe7bc972e070a6456705fd3"],["E:/blog/public/2020/03/11/事务/事务/index.html","3420fedfd710a83c6aa4cbcfdce9b682"],["E:/blog/public/2020/03/11/线程/多线程/index.html","02bf90d06988e575aa818455c62d91c4"],["E:/blog/public/2020/03/11/线程/并发/index.html","9cf411d3f3fa9865c9e4f6b9742e594d"],["E:/blog/public/2020/03/11/线程/线程池/index.html","060de9e41c52f5658194c202dc952f56"],["E:/blog/public/2020/08/21/java/集合/index.html","e47ac6ae0325c8d0ac14aa1961595774"],["E:/blog/public/2020/08/22/java/java基础/index.html","b0ca2f04550a474c419dac127911b852"],["E:/blog/public/2020/08/23/linux/linux/index.html","2ccb8547e7748d3f77473f4f507bc745"],["E:/blog/public/2020/08/30/linux/linux的文件权限与目录配置/index.html","a9b2c1e54cccedd216d5c16e07fb0bba"],["E:/blog/public/Gallery/index.html","fb12bf1dbee1ffc1543f072a8a0564c0"],["E:/blog/public/Gallery/marvel/index.html","f7376d9b842bfb25fe1870888e8050ab"],["E:/blog/public/Gallery/ohmygirl/index.html","a129ce1f81ef19726c3f0eaf53036e97"],["E:/blog/public/Gallery/wallpaper/index.html","7333c4edccee40cc4ae8d9bfa241bb76"],["E:/blog/public/about/index.html","13815bb23cc09577c8b7e28c5785ac84"],["E:/blog/public/archives/2020/01/index.html","77b6df91ed5b782c3702bd19fbc8b590"],["E:/blog/public/archives/2020/02/index.html","ff03c6c2bd722ca20385b7c27b387cde"],["E:/blog/public/archives/2020/03/index.html","3db4d13480be1338fceb1265741f7e1f"],["E:/blog/public/archives/2020/08/index.html","b74ca8497785175c6984e40ce206d9cf"],["E:/blog/public/archives/2020/index.html","cf1ea9c0042ffd9c2a37150fb12e3041"],["E:/blog/public/archives/2020/page/2/index.html","e3c732dc850ce428355e7834e5c53cda"],["E:/blog/public/archives/index.html","7579225664f1714b182af61be2f2fda1"],["E:/blog/public/archives/page/2/index.html","5f94129b79b1c8b5b75e467fc60cc28f"],["E:/blog/public/categories/Oracle/index.html","509d944e7dc56c90030f9c59a70b2bb2"],["E:/blog/public/categories/index.html","f3d95cf5417a9e213377c9c37474ec21"],["E:/blog/public/categories/java/index.html","ba76533e0cdecf674429c43f5e9152e1"],["E:/blog/public/categories/linux/index.html","0f6d2cd2c6fd73bd630626a814983de3"],["E:/blog/public/categories/mysql/index.html","8d5575219535c968cf7925650f2ee7e8"],["E:/blog/public/categories/redis/index.html","b00ce7fb7f28948a92a4b9456e743cd7"],["E:/blog/public/categories/redis基础/index.html","d84feb65ba53b65be1d16a0e29cc6dca"],["E:/blog/public/categories/springboot/index.html","c22af9aa71e54b0a53c31b43ed18d938"],["E:/blog/public/categories/事务/index.html","472f9d2eb83ce229dd5f25b0f81bad51"],["E:/blog/public/categories/代码规范/index.html","0a753262bd0e5b5c0a3e7abb5ea730e1"],["E:/blog/public/categories/分布式/index.html","b75a58f6fac56fa3cf2c5c2c13869af2"],["E:/blog/public/categories/多线程/index.html","abb69962163133659ea5e28e5a9330a3"],["E:/blog/public/categories/异常/index.html","3e416f373ab9316815f0c2a84ffbfd0b"],["E:/blog/public/categories/数据库设计规范/index.html","6604bc91f548e0e76ff3882518ff5368"],["E:/blog/public/categories/索引/index.html","52d7936c1c0a2fb44b0ced58c9b01939"],["E:/blog/public/css/APlayer.min.css","23e04b27a764c86627313552571f4b11"],["E:/blog/public/css/custom.css","4047f7bf45e5d0b702870762a1faabd4"],["E:/blog/public/css/index.css","1a9d32945195a00053855eb3053b9692"],["E:/blog/public/css/less.css","44b0fd20399399aefc207089fc6444d8"],["E:/blog/public/css/tag.css","a5ada7bfc46c5481effe7dffd27b1177"],["E:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/public/images/01.png","c13a8cead336d7d7c581e621c2a649f2"],["E:/blog/public/images/02.jpg","8f22921a13bdb9ef79a784647b413362"],["E:/blog/public/images/03.png","b4a0df886b51ff1ad3275a245645aa15"],["E:/blog/public/images/04.jpg","43505b5e4a0a38c13cfe0b14a7037bca"],["E:/blog/public/images/BeanFactory Bean生命周期.png","00262e32b2d0077ebc92056dcbaee3f4"],["E:/blog/public/images/Spring 框架的 7 个模块.gif","ac382952d4f122f7d7d50d81950586f0"],["E:/blog/public/images/SpringMVC的执行流程.png","a932dadbd4a1e2f39b37dba562ba1828"],["E:/blog/public/images/SpringMvc执行流程.png","ae9b4c4e3daa99f1f014096342abaf26"],["E:/blog/public/images/Springmvc系统分层.png","b84880ebca399b1421af8c74c046d369"],["E:/blog/public/images/aof持久化.png","0015602001059d3564dc944fd357235a"],["E:/blog/public/images/backage.jpg","0acd62167392d46c59b0d0f8deefbcc4"],["E:/blog/public/images/dump.png","b4f55e1dec6c160d90b458d2db707698"],["E:/blog/public/images/get与post区别.png","78f60b099c7137d7da12ca0f1975ce9e"],["E:/blog/public/images/mysql存储大小.png","e00f19d308b58c81d1da4cfe8c7c04ae"],["E:/blog/public/images/rdb持久化.png","828e1e27c73e39abf855ee57959b9846"],["E:/blog/public/images/redis持久化.png","9c956b44e607cf7528a3219f0946ca6b"],["E:/blog/public/images/redis持久化2.png","c8582ebeb09abd7977a05036dbab7a06"],["E:/blog/public/images/冒泡排序.gif","4700503d1944f2cc25ea073339203b27"],["E:/blog/public/images/可见性问题.png","5bdeefd733c45b710c00b6bc182e7a1d"],["E:/blog/public/images/并发编程.jpg","1934c77529315f1ac43a0485b551ec9e"],["E:/blog/public/images/并行.png","1ec9c7937efecacde958eddd5f738c0b"],["E:/blog/public/images/打印4种情况.png","9a2ae8b73f52713f19aa0a14cec232e1"],["E:/blog/public/images/数据库事务的隔离级别.png","c584d1dbe0d04a3c39c4dcccedb94c28"],["E:/blog/public/images/线程切换.png","2046b1dc422564350b0e22a6570e8ee9"],["E:/blog/public/images/线程池.png","7d42d7149d5008f5ea71a3105ae4f11d"],["E:/blog/public/images/线程池参数.png","79025d4da1fff9997684220cc0fcf1b8"],["E:/blog/public/images/线程池参数顺序.png","130d484535fd9849e0170e42a37dc1cc"],["E:/blog/public/images/线程状态转换.png","1dd89e14b06d81d45cdd5ed2b442f358"],["E:/blog/public/images/线程生命周期.jpg","aef061e8705de8f30d8b39b3a66ea192"],["E:/blog/public/images/线程生命周期.png","f3f0e87092e9fc7edc31529620c45846"],["E:/blog/public/images/线程的生命周期.png","e1aa23736f3a18a8b0a190751cff52d3"],["E:/blog/public/images/进程.png","d59d7442389e6eb558f8de5aaadb8041"],["E:/blog/public/images/配置文件优先级.jpg","32e5aea241c61dee4d3d75b0815ccc15"],["E:/blog/public/images/集合.png","0060fd5e31f2660ceefb4feccef08bda"],["E:/blog/public/images/集合2.png","c75d4c55996ffd9d779ffe9295a75e8b"],["E:/blog/public/images/集合3.jpg","028237c2b37f496bf97b6b15685b4584"],["E:/blog/public/images/集合分类.png","d5d107d4f337f1f58d68922c4b1e3c69"],["E:/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/blog/public/index.html","f7c4091b2b9b3554fccd922743e9d31c"],["E:/blog/public/js/main.js","b6e408c9b509ce2b80cc5ce998b6502b"],["E:/blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["E:/blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["E:/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["E:/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["E:/blog/public/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["E:/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["E:/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["E:/blog/public/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["E:/blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["E:/blog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/blog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["E:/blog/public/link/index.html","bf79dce0ac76fdbef74999ac8f417157"],["E:/blog/public/movies/index.html","9f487c2f05fb2d91ae498705549702e5"],["E:/blog/public/music/index.html","69e571e4263b7daa1f7de4726958cc2e"],["E:/blog/public/page/2/index.html","b2542d769b776af5db5f8d11f20141cd"],["E:/blog/public/photos/index.html","ceb1d74c5ffe0b1fd796c3a441b72626"],["E:/blog/public/tags/Oracle/index.html","5e6c22b031f7f1a8cf3703108614871f"],["E:/blog/public/tags/index.html","89ab9031995cebff653a1e0ad75784b0"],["E:/blog/public/tags/java/index.html","068d53fa3ad052e5761cb4f0cbf758d6"],["E:/blog/public/tags/linux/index.html","57f14f151cb2722e5211f28167faedfa"],["E:/blog/public/tags/mysql/index.html","6dd616db67593a8be91bd92197401a63"],["E:/blog/public/tags/redis/index.html","4bdad0f976d8516378ce9097081a7b3b"],["E:/blog/public/tags/redis基础/index.html","01a3e470e5724467d2270a794ab764c5"],["E:/blog/public/tags/springboot/index.html","cc00d012ad2245a981ef1ab712e1dca0"],["E:/blog/public/tags/事务/index.html","8103019968fc6b3984ab43046f548a9b"],["E:/blog/public/tags/代码规范/index.html","4221ad0a3bc978a5fd6574468891ed4a"],["E:/blog/public/tags/分布式/index.html","177b0e79756b3110a67dfae49858a815"],["E:/blog/public/tags/多线程/index.html","b346436a8b8dd4fd14fa864a728f02f1"],["E:/blog/public/tags/异常/index.html","5ffe7c2fe7dfef4cf00a20821c6c3976"],["E:/blog/public/tags/数据库设计规范/index.html","2263a0ed08276e2bba688db9f0d135a7"],["E:/blog/public/tags/索引/index.html","192ae4937e87c6ac25b692d7622d2d29"]];
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







