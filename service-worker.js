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

var precacheConfig = [["E:/blog/public/2020/01/14/java/代码规范/index.html","242d9c875017ebdd9549507a0cb7d455"],["E:/blog/public/2020/01/14/oracle/oracle/index.html","28c0ac76c0c3c0e79b0798f1386bcff8"],["E:/blog/public/2020/01/14/oracle/oracle概述/index.html","16dc7159641ee4d1cc8adc44d585cbed"],["E:/blog/public/2020/02/29/java/分布式/index.html","ac97f5f56f16bb2cfe16e663a1861fd9"],["E:/blog/public/2020/02/29/mysql/mysql/index.html","6c46b63c65406feae565ec7b3251562a"],["E:/blog/public/2020/02/29/mysql/索引/index.html","01ce92273d0f3fe3a1ca3287a3edee41"],["E:/blog/public/2020/02/29/redis/redis/index.html","81ba0e559f127eea08852524a1c5d72b"],["E:/blog/public/2020/03/07/java/异常/index.html","5a3336b3edbf9aa41bcc252b96f63e0f"],["E:/blog/public/2020/03/09/java/面试/index.html","69b01d7254d7e429e9f9b7040bfa0829"],["E:/blog/public/2020/03/09/redis/redis基础/index.html","1c7ed769588fcd591247ecc93fc0903d"],["E:/blog/public/2020/03/11/mysql/数据库设计规范/index.html","20461331945cc8f2ad5e529115595f98"],["E:/blog/public/2020/03/11/spring boot/springboot/index.html","a652130001214dcedd5576b15cacf60f"],["E:/blog/public/2020/03/11/事务/事务/index.html","ab5b7e3a14179feb3302c504a86202fb"],["E:/blog/public/2020/03/11/线程/多线程/index.html","dd1231441cfa9a81a279ec6a67693191"],["E:/blog/public/2020/03/11/线程/并发/index.html","0e592a8394b6116c1b1b004263f7bf69"],["E:/blog/public/2020/03/11/线程/线程池/index.html","b44f06026f2191114482654c702c75fa"],["E:/blog/public/2020/08/21/java/集合/index.html","300fec3f3ba8abf3d0e3bafdba557491"],["E:/blog/public/2020/08/22/java/java基础/index.html","f8bd5f06ff769e7b838a768386dafe48"],["E:/blog/public/2020/08/23/linux/linux/index.html","cd1014862768ab3c2ba3e6085dba3c0b"],["E:/blog/public/2020/08/30/linux/linux的文件权限与目录配置/index.html","50a8dcf27521f05a183eef1e7c850a7e"],["E:/blog/public/Gallery/index.html","551b42ee745a2dce92178b504a7891f9"],["E:/blog/public/Gallery/marvel/index.html","c75f491ea231180c2715ab402eca1448"],["E:/blog/public/Gallery/ohmygirl/index.html","cd31e122efbaaecc41df593a4340e9c4"],["E:/blog/public/Gallery/wallpaper/index.html","feced7f271093863028420a6e1b42227"],["E:/blog/public/about/index.html","c3079dcd2dbb2840e17804eb1f82c674"],["E:/blog/public/archives/2020/01/index.html","9d59ba9d4132a4150bd8098cf7be1bff"],["E:/blog/public/archives/2020/02/index.html","c2c2cedfc3134125548bcc588166e03e"],["E:/blog/public/archives/2020/03/index.html","fd88e1fb20ccd03f3ec0bd2f1a8d4892"],["E:/blog/public/archives/2020/08/index.html","8bf41ffe714862aa982392691804d268"],["E:/blog/public/archives/2020/index.html","f9308443c90aecc88cb3fb9291bac91b"],["E:/blog/public/archives/2020/page/2/index.html","dd1d5c5e12611493155411f53ec5f049"],["E:/blog/public/archives/index.html","520d24f8ea2df26a80c04e6f77e9c7a4"],["E:/blog/public/archives/page/2/index.html","eb3b78646f8e48a408ec4cc7c99b5f39"],["E:/blog/public/categories/Oracle/index.html","0e447d4138fe4077e56f10b76b70d64b"],["E:/blog/public/categories/index.html","17d552b04faeba7f14602aae44fa2d59"],["E:/blog/public/categories/java/index.html","a19b2c4b6cea083eef4107ed3d83f317"],["E:/blog/public/categories/linux/index.html","eac87a5ee3f8e16ddbfb8ce92df0d3c8"],["E:/blog/public/categories/mysql/index.html","a622d942300c0173de7c70bda7f3895c"],["E:/blog/public/categories/redis/index.html","76ff27950cc7e530e831788357ae4d15"],["E:/blog/public/categories/redis基础/index.html","cf2954f2ff11c1c83f4416c226b34a18"],["E:/blog/public/categories/springboot/index.html","8fbf296740a8213efa6f37ad9b5e40a4"],["E:/blog/public/categories/事务/index.html","fc624d5cad61627a1128de77e77f500f"],["E:/blog/public/categories/代码规范/index.html","bfd12005ba541d8fb6200b3897c1ce05"],["E:/blog/public/categories/分布式/index.html","1190de7e9224d54d323948823e65b412"],["E:/blog/public/categories/多线程/index.html","1b6ca13002c28fa4fbdd27e7a395a27f"],["E:/blog/public/categories/异常/index.html","75a43f8421851e31512023392a9693a1"],["E:/blog/public/categories/数据库设计规范/index.html","7442940bb04e2fde6b9395af969c566d"],["E:/blog/public/categories/索引/index.html","9504db9657b8f893772c71324f948db5"],["E:/blog/public/categories/面试/index.html","2a2b2c75b5e4ae41eb5232cd8647bd19"],["E:/blog/public/css/APlayer.min.css","23e04b27a764c86627313552571f4b11"],["E:/blog/public/css/custom.css","4047f7bf45e5d0b702870762a1faabd4"],["E:/blog/public/css/index.css","0ef8eede83f0441c6c16f1225115d424"],["E:/blog/public/css/less.css","44b0fd20399399aefc207089fc6444d8"],["E:/blog/public/css/tag.css","a5ada7bfc46c5481effe7dffd27b1177"],["E:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/public/images/01.png","c13a8cead336d7d7c581e621c2a649f2"],["E:/blog/public/images/02.jpg","8f22921a13bdb9ef79a784647b413362"],["E:/blog/public/images/03.png","b4a0df886b51ff1ad3275a245645aa15"],["E:/blog/public/images/04.jpg","43505b5e4a0a38c13cfe0b14a7037bca"],["E:/blog/public/images/BeanFactory Bean生命周期.png","00262e32b2d0077ebc92056dcbaee3f4"],["E:/blog/public/images/Spring 框架的 7 个模块.gif","ac382952d4f122f7d7d50d81950586f0"],["E:/blog/public/images/SpringMVC的执行流程.png","a932dadbd4a1e2f39b37dba562ba1828"],["E:/blog/public/images/SpringMvc执行流程.png","ae9b4c4e3daa99f1f014096342abaf26"],["E:/blog/public/images/Springmvc系统分层.png","b84880ebca399b1421af8c74c046d369"],["E:/blog/public/images/aof持久化.png","0015602001059d3564dc944fd357235a"],["E:/blog/public/images/backage.jpg","0acd62167392d46c59b0d0f8deefbcc4"],["E:/blog/public/images/dump.png","b4f55e1dec6c160d90b458d2db707698"],["E:/blog/public/images/get与post区别.png","78f60b099c7137d7da12ca0f1975ce9e"],["E:/blog/public/images/mysql存储大小.png","e00f19d308b58c81d1da4cfe8c7c04ae"],["E:/blog/public/images/rdb持久化.png","828e1e27c73e39abf855ee57959b9846"],["E:/blog/public/images/redis持久化.png","9c956b44e607cf7528a3219f0946ca6b"],["E:/blog/public/images/redis持久化2.png","c8582ebeb09abd7977a05036dbab7a06"],["E:/blog/public/images/冒泡排序.gif","4700503d1944f2cc25ea073339203b27"],["E:/blog/public/images/可见性问题.png","5bdeefd733c45b710c00b6bc182e7a1d"],["E:/blog/public/images/并发编程.jpg","1934c77529315f1ac43a0485b551ec9e"],["E:/blog/public/images/并行.png","1ec9c7937efecacde958eddd5f738c0b"],["E:/blog/public/images/打印4种情况.png","9a2ae8b73f52713f19aa0a14cec232e1"],["E:/blog/public/images/数据库事务的隔离级别.png","c584d1dbe0d04a3c39c4dcccedb94c28"],["E:/blog/public/images/线程切换.png","2046b1dc422564350b0e22a6570e8ee9"],["E:/blog/public/images/线程池.png","7d42d7149d5008f5ea71a3105ae4f11d"],["E:/blog/public/images/线程池参数.png","79025d4da1fff9997684220cc0fcf1b8"],["E:/blog/public/images/线程池参数顺序.png","130d484535fd9849e0170e42a37dc1cc"],["E:/blog/public/images/线程状态转换.png","1dd89e14b06d81d45cdd5ed2b442f358"],["E:/blog/public/images/线程生命周期.jpg","aef061e8705de8f30d8b39b3a66ea192"],["E:/blog/public/images/线程生命周期.png","f3f0e87092e9fc7edc31529620c45846"],["E:/blog/public/images/线程的生命周期.png","e1aa23736f3a18a8b0a190751cff52d3"],["E:/blog/public/images/进程.png","d59d7442389e6eb558f8de5aaadb8041"],["E:/blog/public/images/配置文件优先级.jpg","32e5aea241c61dee4d3d75b0815ccc15"],["E:/blog/public/images/集合.png","0060fd5e31f2660ceefb4feccef08bda"],["E:/blog/public/images/集合2.png","c75d4c55996ffd9d779ffe9295a75e8b"],["E:/blog/public/images/集合3.jpg","028237c2b37f496bf97b6b15685b4584"],["E:/blog/public/images/集合分类.png","d5d107d4f337f1f58d68922c4b1e3c69"],["E:/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/public/img/avatar.jpg","90d70b57961af087b88b8041c5f329f3"],["E:/blog/public/img/favicon.jpg","75edba6ec0c01ba862a9f66f383b620a"],["E:/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/blog/public/index.html","329a912b7a6a0a772b59a86a419458f9"],["E:/blog/public/js/main.js","b6e408c9b509ce2b80cc5ce998b6502b"],["E:/blog/public/js/search/algolia.js","eea439cb041f1bd54dd5f294b89ac54d"],["E:/blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["E:/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["E:/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["E:/blog/public/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["E:/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["E:/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["E:/blog/public/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["E:/blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["E:/blog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/blog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["E:/blog/public/link/index.html","71228a596a421fc0e2a2f231aa79b46b"],["E:/blog/public/movies/index.html","cfeda055f640180a3f2908944cafa9f4"],["E:/blog/public/music/index.html","0d6c2a2e188c168d03a30f24f8342790"],["E:/blog/public/page/2/index.html","bc78d5a6dd93b4f1db68c2cc7f24e8ff"],["E:/blog/public/photos/index.html","e3acc8ff8f032dc880ab06013e3c9f51"],["E:/blog/public/tags/Oracle/index.html","54ee692e222ae2d0eb16895dfc78221d"],["E:/blog/public/tags/index.html","038389f1b91a725097427513ea497161"],["E:/blog/public/tags/java/index.html","e90ed0d6172db0b845333d201ee12f18"],["E:/blog/public/tags/linux/index.html","a92fdeb8f283f26313c39aa397d8f3fd"],["E:/blog/public/tags/mysql/index.html","7e080c14e51d6bf32d6b9f990e2240f2"],["E:/blog/public/tags/redis/index.html","92ff93cee22b0c93422f05a1559f525f"],["E:/blog/public/tags/redis基础/index.html","3924b5e896ad1eaa03d982d038f7a6da"],["E:/blog/public/tags/springboot/index.html","ae62b7029d9b48e9ed72e685fb2451ff"],["E:/blog/public/tags/事务/index.html","85e4fe8db6859f856a5778d6f33a0de6"],["E:/blog/public/tags/代码规范/index.html","35ee4f207b13acff7c8d247044342272"],["E:/blog/public/tags/分布式/index.html","b10f8fe18c1e6acb918a10cc481eebda"],["E:/blog/public/tags/多线程/index.html","699d4ef86bb9242289a7f228b6b98ce6"],["E:/blog/public/tags/异常/index.html","05a42bc6b334b887dc3c034006485067"],["E:/blog/public/tags/数据库设计规范/index.html","630ac120d41c233ef596a3755b5c5d00"],["E:/blog/public/tags/索引/index.html","6c123f43eddf4a695ac1d23a5ccc6dee"],["E:/blog/public/tags/面试/index.html","a5e0830ffdd6c98a9e4cb3bda826f11d"]];
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







