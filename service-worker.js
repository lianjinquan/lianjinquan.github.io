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

var precacheConfig = [["E:/blog/public/2020/01/14/java/代码规范/index.html","1d1f98dae6075aa58523c5bd5e298b36"],["E:/blog/public/2020/01/14/oracle/oracle/index.html","67f6f4957370ab9df08597d2922ed9aa"],["E:/blog/public/2020/01/14/oracle/oracle概述/index.html","a5a798cae1daee6c229b367eeff85edf"],["E:/blog/public/2020/02/29/java/分布式/index.html","81a5e9537143c24f6f65c2b803bfc49c"],["E:/blog/public/2020/02/29/mysql/mysql/index.html","bea8f5fd81b15dc7f52f1cbe32a03a6f"],["E:/blog/public/2020/02/29/mysql/索引/index.html","720745efcc1b27526ad227e5afc7a026"],["E:/blog/public/2020/02/29/redis/redis/index.html","22326e775236e6917d91f595f2698353"],["E:/blog/public/2020/03/07/java/异常/index.html","d61ba9a47dcdf45fe146408fbb6c7c25"],["E:/blog/public/2020/03/09/java/面试/index.html","2d1608a4ebaa0d358005944c3cbe0bef"],["E:/blog/public/2020/03/09/redis/redis基础/index.html","a9badcb841b739f63a6c6fe017cf8eb2"],["E:/blog/public/2020/03/11/mysql/数据库设计规范/index.html","1aadbc6e8022d77a0e85785693645189"],["E:/blog/public/2020/03/11/spring boot/springboot/index.html","376ef1035ab1ba6112be84e23c77e39d"],["E:/blog/public/2020/03/11/事务/事务/index.html","bacfc5981b7fc01a03605c18cdbcfd8f"],["E:/blog/public/2020/03/11/线程/多线程/index.html","b97f621c5ded903e4f08ab573795f475"],["E:/blog/public/2020/03/11/线程/并发/index.html","c4c5ba5aa6e825c6607f056cc26d0d2f"],["E:/blog/public/2020/03/11/线程/线程池/index.html","3b93b8957e956721fa8f18d911cc4513"],["E:/blog/public/2020/08/21/java/集合/index.html","54e68c10636bcdfbd0f06c29b2290f30"],["E:/blog/public/2020/08/22/java/java基础/index.html","c37cf7e667bb4780f5bff3b17c3458a2"],["E:/blog/public/2020/08/23/linux/linux/index.html","f5d31b301c183d584f380834999675f1"],["E:/blog/public/2020/08/30/linux/linux的文件权限与目录配置/index.html","f0424682fa051f0e379c1e386070776a"],["E:/blog/public/Gallery/index.html","2e417caffa89fb9ea58c448daa8feb6d"],["E:/blog/public/Gallery/marvel/index.html","96aef5bda4f5f51d5346b3e287529de7"],["E:/blog/public/Gallery/ohmygirl/index.html","a7279ee952499325eb5fc7f47611ea9d"],["E:/blog/public/Gallery/wallpaper/index.html","0565f7a116094057434fb8a86617c481"],["E:/blog/public/about/index.html","144c3c0b2706a5d035790b25e360a723"],["E:/blog/public/archives/2020/01/index.html","1e2b105f69422df585f09e6479d0aa43"],["E:/blog/public/archives/2020/02/index.html","5c279526231dd5f24ea8e02be98367ab"],["E:/blog/public/archives/2020/03/index.html","a470209f2e2c535532e02577a4b5d7e8"],["E:/blog/public/archives/2020/08/index.html","df7cc25fa7a1d3549d516f9f7e607b9f"],["E:/blog/public/archives/2020/index.html","9ec8f3f06ace3b80e73508d0dd9ff19c"],["E:/blog/public/archives/2020/page/2/index.html","a28ac9e1bdafa55ace9fcaa3064a6672"],["E:/blog/public/archives/index.html","f9f1528210d38288bc3330d63ad0131c"],["E:/blog/public/archives/page/2/index.html","31100509c3927cb518cb45db1f98d576"],["E:/blog/public/categories/Oracle/index.html","fd6e1b2c071ae927447fd21ed6285f71"],["E:/blog/public/categories/index.html","81ce8ef534ffd8260d3cdf30378e5015"],["E:/blog/public/categories/java/index.html","ee8834cb56ea7e1ef4f84f7a75ad7ea0"],["E:/blog/public/categories/linux/index.html","b1393492fb23eb3cfb10755338f4fe2f"],["E:/blog/public/categories/mysql/index.html","2315e4fd12a0a2aa83c901a2a8d1956a"],["E:/blog/public/categories/redis/index.html","94457e2b722b89b603220789800093f8"],["E:/blog/public/categories/redis基础/index.html","8529793b9be643951bcb6c945b50275d"],["E:/blog/public/categories/springboot/index.html","cd587548372bb8b4b3f4d58452ff86c0"],["E:/blog/public/categories/事务/index.html","031d33d1e14504cb89fa8553a5191e1d"],["E:/blog/public/categories/代码规范/index.html","a0eab7d30f4df7c69d32226b84e021a8"],["E:/blog/public/categories/分布式/index.html","0a33de54dd9a681f6a3ea230b5148f71"],["E:/blog/public/categories/多线程/index.html","3c5cd7f856c50a32015527d76a68f470"],["E:/blog/public/categories/异常/index.html","222dba33e3ac3478e44794b271d429a1"],["E:/blog/public/categories/数据库设计规范/index.html","9df7fb22335c05cafc2ef1162471482e"],["E:/blog/public/categories/索引/index.html","04d0b4d44636cb2fbac3d75567e22c63"],["E:/blog/public/categories/面试/index.html","c25b92394d1d808e8582bf57502c69dc"],["E:/blog/public/css/APlayer.min.css","23e04b27a764c86627313552571f4b11"],["E:/blog/public/css/custom.css","4047f7bf45e5d0b702870762a1faabd4"],["E:/blog/public/css/index.css","d40a2533bab7ef96d31d81d1e072230d"],["E:/blog/public/css/less.css","44b0fd20399399aefc207089fc6444d8"],["E:/blog/public/css/tag.css","a5ada7bfc46c5481effe7dffd27b1177"],["E:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/public/images/01.png","c13a8cead336d7d7c581e621c2a649f2"],["E:/blog/public/images/02.jpg","8f22921a13bdb9ef79a784647b413362"],["E:/blog/public/images/03.png","b4a0df886b51ff1ad3275a245645aa15"],["E:/blog/public/images/04.jpg","43505b5e4a0a38c13cfe0b14a7037bca"],["E:/blog/public/images/BeanFactory Bean生命周期.png","00262e32b2d0077ebc92056dcbaee3f4"],["E:/blog/public/images/Spring 框架的 7 个模块.gif","ac382952d4f122f7d7d50d81950586f0"],["E:/blog/public/images/SpringMVC的执行流程.png","a932dadbd4a1e2f39b37dba562ba1828"],["E:/blog/public/images/SpringMvc执行流程.png","ae9b4c4e3daa99f1f014096342abaf26"],["E:/blog/public/images/Springmvc系统分层.png","b84880ebca399b1421af8c74c046d369"],["E:/blog/public/images/aof持久化.png","0015602001059d3564dc944fd357235a"],["E:/blog/public/images/backage.jpg","0acd62167392d46c59b0d0f8deefbcc4"],["E:/blog/public/images/dump.png","b4f55e1dec6c160d90b458d2db707698"],["E:/blog/public/images/get与post区别.png","78f60b099c7137d7da12ca0f1975ce9e"],["E:/blog/public/images/mysql存储大小.png","e00f19d308b58c81d1da4cfe8c7c04ae"],["E:/blog/public/images/rdb持久化.png","828e1e27c73e39abf855ee57959b9846"],["E:/blog/public/images/redis持久化.png","9c956b44e607cf7528a3219f0946ca6b"],["E:/blog/public/images/redis持久化2.png","c8582ebeb09abd7977a05036dbab7a06"],["E:/blog/public/images/冒泡排序.gif","4700503d1944f2cc25ea073339203b27"],["E:/blog/public/images/可见性问题.png","5bdeefd733c45b710c00b6bc182e7a1d"],["E:/blog/public/images/并发编程.jpg","1934c77529315f1ac43a0485b551ec9e"],["E:/blog/public/images/并行.png","1ec9c7937efecacde958eddd5f738c0b"],["E:/blog/public/images/打印4种情况.png","9a2ae8b73f52713f19aa0a14cec232e1"],["E:/blog/public/images/数据库事务的隔离级别.png","c584d1dbe0d04a3c39c4dcccedb94c28"],["E:/blog/public/images/线程切换.png","2046b1dc422564350b0e22a6570e8ee9"],["E:/blog/public/images/线程池.png","7d42d7149d5008f5ea71a3105ae4f11d"],["E:/blog/public/images/线程池参数.png","79025d4da1fff9997684220cc0fcf1b8"],["E:/blog/public/images/线程池参数顺序.png","130d484535fd9849e0170e42a37dc1cc"],["E:/blog/public/images/线程状态转换.png","1dd89e14b06d81d45cdd5ed2b442f358"],["E:/blog/public/images/线程生命周期.jpg","aef061e8705de8f30d8b39b3a66ea192"],["E:/blog/public/images/线程生命周期.png","f3f0e87092e9fc7edc31529620c45846"],["E:/blog/public/images/线程的生命周期.png","e1aa23736f3a18a8b0a190751cff52d3"],["E:/blog/public/images/进程.png","d59d7442389e6eb558f8de5aaadb8041"],["E:/blog/public/images/配置文件优先级.jpg","32e5aea241c61dee4d3d75b0815ccc15"],["E:/blog/public/images/集合.png","0060fd5e31f2660ceefb4feccef08bda"],["E:/blog/public/images/集合2.png","c75d4c55996ffd9d779ffe9295a75e8b"],["E:/blog/public/images/集合3.jpg","028237c2b37f496bf97b6b15685b4584"],["E:/blog/public/images/集合分类.png","d5d107d4f337f1f58d68922c4b1e3c69"],["E:/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/public/img/avatar.jpg","90d70b57961af087b88b8041c5f329f3"],["E:/blog/public/img/favicon.jpg","75edba6ec0c01ba862a9f66f383b620a"],["E:/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/blog/public/index.html","467dc9fa5c641a07225cc521c348149a"],["E:/blog/public/js/APlayer.min.js","46cd907eeef5f628fc7197715e012d07"],["E:/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/blog/public/js/botui.js","9bd324283e8898e4b488a7903a7e9ed6"],["E:/blog/public/js/ip_content.js","92bacff50587527d43589642a7caecff"],["E:/blog/public/js/less.js","0c224c4750b7373c22caa4a395fafe10"],["E:/blog/public/js/main.js","83086cbc797c743e17a9c592e6d36dd7"],["E:/blog/public/js/sakura.js","d259eedc4ec9687b501f075693a5afbd"],["E:/blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["E:/blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["E:/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["E:/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["E:/blog/public/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["E:/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["E:/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["E:/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["E:/blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["E:/blog/public/js/timeDate.js","a09793407ca641e40673dab7c07012e9"],["E:/blog/public/js/tw_cn.js","5b26f58076202394a66cde8b885f3225"],["E:/blog/public/js/utils.js","b04af39def288f877195692f094bafd6"],["E:/blog/public/link/index.html","9ae601b4faeea1d55b57df9a4ae32c79"],["E:/blog/public/movies/index.html","ed251cfac97aef003b8e41c3fb4dbb1c"],["E:/blog/public/music/index.html","4908a2148257f105a657f94b91143d03"],["E:/blog/public/page/2/index.html","238ef17e2d7ba45981e631316af2714e"],["E:/blog/public/photos/index.html","bb571c8c980b40ffd369d6e19a050359"],["E:/blog/public/tags/Oracle/index.html","54a6225fc46ab82164f4b0f9d82e25e6"],["E:/blog/public/tags/index.html","7bbc217065b6f0285f60a2b0f454d2b3"],["E:/blog/public/tags/java/index.html","69e2d9b311ccd4bafde61e99a6ea9705"],["E:/blog/public/tags/linux/index.html","db034ac8f3f4c1bd568f72cb49a3950a"],["E:/blog/public/tags/mysql/index.html","95eb688dd264ff563c92114f8b2b2b09"],["E:/blog/public/tags/redis/index.html","d430e0b807fa219c4a67d180e285294e"],["E:/blog/public/tags/redis基础/index.html","e2e73d4a3f805dfce31741db70f36e6f"],["E:/blog/public/tags/springboot/index.html","bdc94e4cb2d4b22a95e06c09c98b5dda"],["E:/blog/public/tags/事务/index.html","95919a755f88cd961c5247948bf2c32e"],["E:/blog/public/tags/代码规范/index.html","17ebe6cec0370b7a16be595198b6e571"],["E:/blog/public/tags/分布式/index.html","383b40a35b3e496b4f46987f85face8d"],["E:/blog/public/tags/多线程/index.html","bc51417eb545cf43bac8b9d2c9e317fd"],["E:/blog/public/tags/异常/index.html","72192e630ecc3826688363dafc75fe23"],["E:/blog/public/tags/数据库设计规范/index.html","34a589d795613019aee4ddd1950a2675"],["E:/blog/public/tags/索引/index.html","fa38ddf6318d86f9e43a9e20fe2c99df"],["E:/blog/public/tags/面试/index.html","e05b72064f323bbb47ce7fd1cf029260"]];
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







