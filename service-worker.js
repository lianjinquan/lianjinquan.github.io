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

var precacheConfig = [["E:/blog/public/2020/01/14/java/代码规范/index.html","20333a9dd90e29256cab68287689a1d2"],["E:/blog/public/2020/01/14/oracle/oracle/index.html","c1ce86922a71455577452500d8a52c1d"],["E:/blog/public/2020/01/14/oracle/oracle概述/index.html","7cc0650d72767e90d24c7c319f8e4880"],["E:/blog/public/2020/02/29/java/分布式/index.html","c2fe241dedcb47cceff4eb289b86186c"],["E:/blog/public/2020/02/29/mysql/mysql/index.html","cb3b8bfc0130c112609762e056a2cde4"],["E:/blog/public/2020/02/29/mysql/索引/index.html","a0dad9528c1156067768042a556fb41a"],["E:/blog/public/2020/02/29/redis/redis/index.html","3a8570964d54487cb11e2ad8920cc217"],["E:/blog/public/2020/03/07/java/异常/index.html","9e815b13b623a38c0f9bc8bc0bd7b815"],["E:/blog/public/2020/03/09/java/面试/index.html","5d3865a1ee19ef40e06d538818d25a81"],["E:/blog/public/2020/03/09/redis/redis基础/index.html","5feddb036adce8a9887e2f5aa40ac0a3"],["E:/blog/public/2020/03/11/mysql/数据库设计规范/index.html","94b65c7f184e6d870a2e48ed231d7998"],["E:/blog/public/2020/03/11/spring boot/springboot/index.html","d9756a8e0d406b50219c281c9d26bf50"],["E:/blog/public/2020/03/11/事务/事务/index.html","e18de342bf7e5c10c4555bb70e63aa05"],["E:/blog/public/2020/03/11/线程/多线程/index.html","0e386b850c5bf8daf8d6d21a9565e6f2"],["E:/blog/public/2020/03/11/线程/并发/index.html","4fea900783cf249c974148cc0e68ea08"],["E:/blog/public/2020/03/11/线程/线程池/index.html","d2d125727f3144601673e2456da1c737"],["E:/blog/public/2020/08/21/java/集合/index.html","384833355680571eac827c3c59f29cce"],["E:/blog/public/2020/08/22/java/java基础/index.html","1a95ad6431d7e1914dfb771751d72e4f"],["E:/blog/public/2020/08/23/linux/linux/index.html","a30a26c6874e1e6f4ce650a75ad6cfb3"],["E:/blog/public/2020/08/30/linux/linux的文件权限与目录配置/index.html","203ba86edbc1a2ebf7f51b03904c5c4b"],["E:/blog/public/Gallery/index.html","5c7cbe3c526c720115238cf8dfdb7cf0"],["E:/blog/public/Gallery/marvel/index.html","7ca0c84add9fc78727af5b67e7eb9def"],["E:/blog/public/Gallery/ohmygirl/index.html","f0e44abe9fb71bdd31e063afd56e3739"],["E:/blog/public/Gallery/wallpaper/index.html","43b82848c2d45089ce0d003cc4b26a8d"],["E:/blog/public/about/index.html","6e13c5b2086ec596e647233dbfac9076"],["E:/blog/public/archives/2020/01/index.html","8420a2778793322838221fce936f00e1"],["E:/blog/public/archives/2020/02/index.html","e48102d264096338fa40d3d2f14dbf21"],["E:/blog/public/archives/2020/03/index.html","2f1a50c0fb5c6747e9be60c59b1aacdc"],["E:/blog/public/archives/2020/08/index.html","fc3245ce7c1dad78806b6066bb3bb6ab"],["E:/blog/public/archives/2020/index.html","26145129ff5f37d965aff707b51e7d68"],["E:/blog/public/archives/2020/page/2/index.html","52afcf89dbe86e8a39bbdcea42de3fcf"],["E:/blog/public/archives/index.html","40cfa0edc9686921fc4c38b22e1d5631"],["E:/blog/public/archives/page/2/index.html","af7298d82432fecd541e595191eaf4f1"],["E:/blog/public/categories/Oracle/index.html","a0ce6bd9b1f1dc29bdca377d0dc6b9ab"],["E:/blog/public/categories/index.html","d64a7b71f9c4605489706114c2b46250"],["E:/blog/public/categories/java/index.html","4b910bd105aa7e5cd97379aeafbc8cd2"],["E:/blog/public/categories/linux/index.html","fc27a37335d6c18d2ba367dcaafccdd3"],["E:/blog/public/categories/mysql/index.html","d5ec6c88ecfc86894b535fcb4cfbf205"],["E:/blog/public/categories/redis/index.html","3e5850a077d8960c99778209d6107374"],["E:/blog/public/categories/redis基础/index.html","eee0913e312e544c0d109ce6536f2640"],["E:/blog/public/categories/springboot/index.html","7c715691bd6313c2abe346b97ef26eb3"],["E:/blog/public/categories/事务/index.html","9ed221e2036c954e1f7e894bdd2593ed"],["E:/blog/public/categories/代码规范/index.html","5cdc09bbe2d79b89eb7e1003728ad787"],["E:/blog/public/categories/分布式/index.html","a951f6beba57183aaa244f10873b6ecf"],["E:/blog/public/categories/多线程/index.html","2de4cf8a556e63e6915ec08d4bb5f1ee"],["E:/blog/public/categories/异常/index.html","531af9ddb1c8b3dd13defeaf7af358c3"],["E:/blog/public/categories/数据库设计规范/index.html","dc0691b4382138b2c9cc1c68486e84c8"],["E:/blog/public/categories/索引/index.html","9ba30bb8fd3345233746ce8970d6071b"],["E:/blog/public/categories/面试/index.html","eb35b06d20bd93b125f8427ba1d78f10"],["E:/blog/public/css/APlayer.min.css","23e04b27a764c86627313552571f4b11"],["E:/blog/public/css/custom.css","4047f7bf45e5d0b702870762a1faabd4"],["E:/blog/public/css/index.css","6be2922c86db195ae16c782b0dc87426"],["E:/blog/public/css/less.css","44b0fd20399399aefc207089fc6444d8"],["E:/blog/public/css/tag.css","a5ada7bfc46c5481effe7dffd27b1177"],["E:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/public/images/01.png","c13a8cead336d7d7c581e621c2a649f2"],["E:/blog/public/images/02.jpg","8f22921a13bdb9ef79a784647b413362"],["E:/blog/public/images/03.png","b4a0df886b51ff1ad3275a245645aa15"],["E:/blog/public/images/04.jpg","43505b5e4a0a38c13cfe0b14a7037bca"],["E:/blog/public/images/BeanFactory Bean生命周期.png","00262e32b2d0077ebc92056dcbaee3f4"],["E:/blog/public/images/Spring 框架的 7 个模块.gif","ac382952d4f122f7d7d50d81950586f0"],["E:/blog/public/images/SpringMVC的执行流程.png","a932dadbd4a1e2f39b37dba562ba1828"],["E:/blog/public/images/SpringMvc执行流程.png","ae9b4c4e3daa99f1f014096342abaf26"],["E:/blog/public/images/Springmvc系统分层.png","b84880ebca399b1421af8c74c046d369"],["E:/blog/public/images/aof持久化.png","0015602001059d3564dc944fd357235a"],["E:/blog/public/images/backage.jpg","0acd62167392d46c59b0d0f8deefbcc4"],["E:/blog/public/images/dump.png","b4f55e1dec6c160d90b458d2db707698"],["E:/blog/public/images/get与post区别.png","78f60b099c7137d7da12ca0f1975ce9e"],["E:/blog/public/images/mysql存储大小.png","e00f19d308b58c81d1da4cfe8c7c04ae"],["E:/blog/public/images/rdb持久化.png","828e1e27c73e39abf855ee57959b9846"],["E:/blog/public/images/redis持久化.png","9c956b44e607cf7528a3219f0946ca6b"],["E:/blog/public/images/redis持久化2.png","c8582ebeb09abd7977a05036dbab7a06"],["E:/blog/public/images/冒泡排序.gif","4700503d1944f2cc25ea073339203b27"],["E:/blog/public/images/可见性问题.png","5bdeefd733c45b710c00b6bc182e7a1d"],["E:/blog/public/images/并发编程.jpg","1934c77529315f1ac43a0485b551ec9e"],["E:/blog/public/images/并行.png","1ec9c7937efecacde958eddd5f738c0b"],["E:/blog/public/images/打印4种情况.png","9a2ae8b73f52713f19aa0a14cec232e1"],["E:/blog/public/images/数据库事务的隔离级别.png","c584d1dbe0d04a3c39c4dcccedb94c28"],["E:/blog/public/images/线程切换.png","2046b1dc422564350b0e22a6570e8ee9"],["E:/blog/public/images/线程池.png","7d42d7149d5008f5ea71a3105ae4f11d"],["E:/blog/public/images/线程池参数.png","79025d4da1fff9997684220cc0fcf1b8"],["E:/blog/public/images/线程池参数顺序.png","130d484535fd9849e0170e42a37dc1cc"],["E:/blog/public/images/线程状态转换.png","1dd89e14b06d81d45cdd5ed2b442f358"],["E:/blog/public/images/线程生命周期.jpg","aef061e8705de8f30d8b39b3a66ea192"],["E:/blog/public/images/线程生命周期.png","f3f0e87092e9fc7edc31529620c45846"],["E:/blog/public/images/线程的生命周期.png","e1aa23736f3a18a8b0a190751cff52d3"],["E:/blog/public/images/进程.png","d59d7442389e6eb558f8de5aaadb8041"],["E:/blog/public/images/配置文件优先级.jpg","32e5aea241c61dee4d3d75b0815ccc15"],["E:/blog/public/images/集合.png","0060fd5e31f2660ceefb4feccef08bda"],["E:/blog/public/images/集合2.png","c75d4c55996ffd9d779ffe9295a75e8b"],["E:/blog/public/images/集合3.jpg","028237c2b37f496bf97b6b15685b4584"],["E:/blog/public/images/集合分类.png","d5d107d4f337f1f58d68922c4b1e3c69"],["E:/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/public/img/avatar.jpg","90d70b57961af087b88b8041c5f329f3"],["E:/blog/public/img/favicon.jpg","75edba6ec0c01ba862a9f66f383b620a"],["E:/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/blog/public/index.html","261d94f9d77ad4b5355bc1461fde345e"],["E:/blog/public/js/search/algolia.js","eea439cb041f1bd54dd5f294b89ac54d"],["E:/blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["E:/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["E:/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["E:/blog/public/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["E:/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["E:/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["E:/blog/public/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["E:/blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["E:/blog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/blog/public/link/index.html","bfe4dadff77f47cb13ca1482da8bef0e"],["E:/blog/public/movies/index.html","df8e4ba746c6720b5a3b0f2d48d692df"],["E:/blog/public/music/index.html","63c102a72ee1d5e8223221e9cd426383"],["E:/blog/public/page/2/index.html","8796e2b5249386e7fa66b64e1af62acb"],["E:/blog/public/photos/index.html","67f37a9c56e52f398fc9fc144ea1bb25"],["E:/blog/public/tags/Oracle/index.html","615f220bb4c9f6dd013ff61865d0b198"],["E:/blog/public/tags/index.html","90aca839c223f1f374b986ebcb602fbc"],["E:/blog/public/tags/java/index.html","59f43325564337d77c622a5b5c9594d6"],["E:/blog/public/tags/linux/index.html","db492ae0108b8fa3f87ab83213aed0d6"],["E:/blog/public/tags/mysql/index.html","12697b95652099359a83cb2fc547ccd9"],["E:/blog/public/tags/redis/index.html","79b3cb4aad5cb87a1154e62a1f1848ad"],["E:/blog/public/tags/redis基础/index.html","f6fab2f7123690f1779b5e4e7f167367"],["E:/blog/public/tags/springboot/index.html","8138a85e2e2b24c4a13632e6bfc636f1"],["E:/blog/public/tags/事务/index.html","7bfb755de9410a3b6a3de10daebb5950"],["E:/blog/public/tags/代码规范/index.html","432c5a155515a37622c7f314477b6e46"],["E:/blog/public/tags/分布式/index.html","b56f70bba69c2d056c9d07cbe5db080a"],["E:/blog/public/tags/多线程/index.html","d22af3a0daa40f4659b595b3a0293581"],["E:/blog/public/tags/异常/index.html","92db8951229077bcb6b2a15ba7389278"],["E:/blog/public/tags/数据库设计规范/index.html","d0d232c35fbcffc15dd303f2a81f61f0"],["E:/blog/public/tags/索引/index.html","3bcbd9f54e9e101d6b265676d2fab8b2"],["E:/blog/public/tags/面试/index.html","7686a43be1a50355cb2d697edaf2c3f0"]];
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







