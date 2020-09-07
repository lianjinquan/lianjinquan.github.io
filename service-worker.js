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

var precacheConfig = [["E:/blog/public/2020/01/14/java/代码规范/index.html","5153162df231d80f6f0e240a8fb55155"],["E:/blog/public/2020/01/14/oracle/oracle/index.html","da2cb4735477cf24cf619ef9c41f9527"],["E:/blog/public/2020/01/14/oracle/oracle概述/index.html","c7908f30769d3519524da93a9d7249f3"],["E:/blog/public/2020/02/29/java/分布式/index.html","06b00f7cf921859d471138f93d9214d7"],["E:/blog/public/2020/02/29/mysql/mysql/index.html","0ba60bbeb28db3dc14720f7eedfb6c3b"],["E:/blog/public/2020/02/29/mysql/索引/index.html","c9473decc564d3fd1fc7948d633252fe"],["E:/blog/public/2020/02/29/redis/redis/index.html","88e90c14ee10c1d8d320d5fa087f355d"],["E:/blog/public/2020/03/07/java/异常/index.html","2db8eda3dc4b68719262d314969a96eb"],["E:/blog/public/2020/03/09/redis/redis基础/index.html","0e09935c7910254019c8b8e74848134b"],["E:/blog/public/2020/03/11/mysql/数据库设计规范/index.html","adf0205f0a7cbb499ccc166214860730"],["E:/blog/public/2020/03/11/spring boot/springboot/index.html","61fe3ac607c63613b0f7ddb20f739229"],["E:/blog/public/2020/03/11/事务/事务/index.html","1054b20a332a0a5b19b8434132e8686b"],["E:/blog/public/2020/03/11/线程/多线程/index.html","c3851a14aab998014e23ed827accb1a2"],["E:/blog/public/2020/03/11/线程/并发/index.html","30a43efd612eb571700c2e00d980ab71"],["E:/blog/public/2020/03/11/线程/线程池/index.html","2dfbdc3427790df7f7132902852381c2"],["E:/blog/public/2020/08/21/java/集合/index.html","5fb06617ce7382ffda9c8a19966b6c50"],["E:/blog/public/2020/08/22/java/java基础/index.html","5773e215da7c56558dfe8f03f9ae7e21"],["E:/blog/public/2020/08/23/linux/linux/index.html","d9c44883b9bda9f47f5493701519f1e6"],["E:/blog/public/2020/08/30/linux/linux的文件权限与目录配置/index.html","b63b04398d83345910a8f703892ca777"],["E:/blog/public/Gallery/index.html","1a66819a95ca38d7fc2da466f4812452"],["E:/blog/public/Gallery/marvel/index.html","efa649ebe40b2880087888790807487f"],["E:/blog/public/Gallery/ohmygirl/index.html","494b7be3bc52833341774aff878fff6a"],["E:/blog/public/Gallery/wallpaper/index.html","91008ee1ad31ecfebd9a713aa0039596"],["E:/blog/public/about/index.html","69d828bb75928deb26254a07907108df"],["E:/blog/public/archives/2020/01/index.html","bab0cf5b7175b9c367ed9806190ffb16"],["E:/blog/public/archives/2020/02/index.html","e8f88d00c2a3487bd5d1e3b4f1f78bd0"],["E:/blog/public/archives/2020/03/index.html","573a88c5bc535ac3529f2f5ece32811d"],["E:/blog/public/archives/2020/08/index.html","8507f08516f1b7c6086335a4768cee4b"],["E:/blog/public/archives/2020/index.html","32ab693b9b332164500e400669827ac3"],["E:/blog/public/archives/2020/page/2/index.html","e20eac42891defb728d7722343be9eb1"],["E:/blog/public/archives/index.html","0be1e34ff8bc6e5882a07989ecc0d2f6"],["E:/blog/public/archives/page/2/index.html","3a1150ad93837f01d3210a57ec1e6ec9"],["E:/blog/public/categories/Oracle/index.html","ccd45a3c8ac8c87e2af2f9515a3255d3"],["E:/blog/public/categories/index.html","6d120d5f8fdec087f8b2412d92c98c87"],["E:/blog/public/categories/java/index.html","93118e6ff76a6ad5a818e5ce1064ba8c"],["E:/blog/public/categories/linux/index.html","15bedd03d1a614fd084258978dbb01bd"],["E:/blog/public/categories/mysql/index.html","071dea68df46e4be8b2af2e5121e31d2"],["E:/blog/public/categories/redis/index.html","260ba06d4e8b2ca07519cf35405c9d3a"],["E:/blog/public/categories/redis基础/index.html","98d4be2c96974c7124e6bae7f0d378d3"],["E:/blog/public/categories/springboot/index.html","f5533c7e45055b563b10280d06f926cc"],["E:/blog/public/categories/事务/index.html","8676863e6249eb5f3b6faeebc228272e"],["E:/blog/public/categories/代码规范/index.html","05fa9fe5604a93dfce24a507f0fc6dd0"],["E:/blog/public/categories/分布式/index.html","336a42946ca5db58a6e99216ca509112"],["E:/blog/public/categories/多线程/index.html","102685afc1d1e16572b835bc841e2897"],["E:/blog/public/categories/异常/index.html","8113eb241bf52706e7d817378035c77f"],["E:/blog/public/categories/数据库设计规范/index.html","4eb8e87fbd5a950d48dc9db67b8e6e95"],["E:/blog/public/categories/索引/index.html","6912d525b00b453334881fb77413c33f"],["E:/blog/public/css/APlayer.min.css","23e04b27a764c86627313552571f4b11"],["E:/blog/public/css/custom.css","4047f7bf45e5d0b702870762a1faabd4"],["E:/blog/public/css/index.css","0ef8eede83f0441c6c16f1225115d424"],["E:/blog/public/css/less.css","44b0fd20399399aefc207089fc6444d8"],["E:/blog/public/css/tag.css","a5ada7bfc46c5481effe7dffd27b1177"],["E:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/public/images/01.png","c13a8cead336d7d7c581e621c2a649f2"],["E:/blog/public/images/02.jpg","8f22921a13bdb9ef79a784647b413362"],["E:/blog/public/images/03.png","b4a0df886b51ff1ad3275a245645aa15"],["E:/blog/public/images/04.jpg","43505b5e4a0a38c13cfe0b14a7037bca"],["E:/blog/public/images/BeanFactory Bean生命周期.png","00262e32b2d0077ebc92056dcbaee3f4"],["E:/blog/public/images/Spring 框架的 7 个模块.gif","ac382952d4f122f7d7d50d81950586f0"],["E:/blog/public/images/SpringMVC的执行流程.png","a932dadbd4a1e2f39b37dba562ba1828"],["E:/blog/public/images/SpringMvc执行流程.png","ae9b4c4e3daa99f1f014096342abaf26"],["E:/blog/public/images/Springmvc系统分层.png","b84880ebca399b1421af8c74c046d369"],["E:/blog/public/images/aof持久化.png","0015602001059d3564dc944fd357235a"],["E:/blog/public/images/backage.jpg","0acd62167392d46c59b0d0f8deefbcc4"],["E:/blog/public/images/dump.png","b4f55e1dec6c160d90b458d2db707698"],["E:/blog/public/images/get与post区别.png","78f60b099c7137d7da12ca0f1975ce9e"],["E:/blog/public/images/mysql存储大小.png","e00f19d308b58c81d1da4cfe8c7c04ae"],["E:/blog/public/images/rdb持久化.png","828e1e27c73e39abf855ee57959b9846"],["E:/blog/public/images/redis持久化.png","9c956b44e607cf7528a3219f0946ca6b"],["E:/blog/public/images/redis持久化2.png","c8582ebeb09abd7977a05036dbab7a06"],["E:/blog/public/images/冒泡排序.gif","4700503d1944f2cc25ea073339203b27"],["E:/blog/public/images/可见性问题.png","5bdeefd733c45b710c00b6bc182e7a1d"],["E:/blog/public/images/并发编程.jpg","1934c77529315f1ac43a0485b551ec9e"],["E:/blog/public/images/并行.png","1ec9c7937efecacde958eddd5f738c0b"],["E:/blog/public/images/打印4种情况.png","9a2ae8b73f52713f19aa0a14cec232e1"],["E:/blog/public/images/数据库事务的隔离级别.png","c584d1dbe0d04a3c39c4dcccedb94c28"],["E:/blog/public/images/线程切换.png","2046b1dc422564350b0e22a6570e8ee9"],["E:/blog/public/images/线程池.png","7d42d7149d5008f5ea71a3105ae4f11d"],["E:/blog/public/images/线程池参数.png","79025d4da1fff9997684220cc0fcf1b8"],["E:/blog/public/images/线程池参数顺序.png","130d484535fd9849e0170e42a37dc1cc"],["E:/blog/public/images/线程状态转换.png","1dd89e14b06d81d45cdd5ed2b442f358"],["E:/blog/public/images/线程生命周期.jpg","aef061e8705de8f30d8b39b3a66ea192"],["E:/blog/public/images/线程生命周期.png","f3f0e87092e9fc7edc31529620c45846"],["E:/blog/public/images/线程的生命周期.png","e1aa23736f3a18a8b0a190751cff52d3"],["E:/blog/public/images/进程.png","d59d7442389e6eb558f8de5aaadb8041"],["E:/blog/public/images/配置文件优先级.jpg","32e5aea241c61dee4d3d75b0815ccc15"],["E:/blog/public/images/集合.png","0060fd5e31f2660ceefb4feccef08bda"],["E:/blog/public/images/集合2.png","c75d4c55996ffd9d779ffe9295a75e8b"],["E:/blog/public/images/集合3.jpg","028237c2b37f496bf97b6b15685b4584"],["E:/blog/public/images/集合分类.png","d5d107d4f337f1f58d68922c4b1e3c69"],["E:/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/public/img/avatar.jpg","90d70b57961af087b88b8041c5f329f3"],["E:/blog/public/img/favicon.jpg","75edba6ec0c01ba862a9f66f383b620a"],["E:/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/blog/public/index.html","401c8b50f9716a0ca5366476e72b3403"],["E:/blog/public/js/main.js","b6e408c9b509ce2b80cc5ce998b6502b"],["E:/blog/public/js/search/algolia.js","eea439cb041f1bd54dd5f294b89ac54d"],["E:/blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["E:/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["E:/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["E:/blog/public/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["E:/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["E:/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["E:/blog/public/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["E:/blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["E:/blog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/blog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["E:/blog/public/link/index.html","e7d18f9e095680a7aebe3fbb30848ae7"],["E:/blog/public/movies/index.html","d90615abb37c25c3cce9287123f73f55"],["E:/blog/public/music/index.html","6aa4bc69f21f11e13afd199ab5276025"],["E:/blog/public/page/2/index.html","c386579f49c3ba13477eaef40e0b541f"],["E:/blog/public/photos/index.html","3e57c31dcf0776bcf0d0f94d03de6491"],["E:/blog/public/tags/Oracle/index.html","1fd62fa5e904e1ee5267302ebde91683"],["E:/blog/public/tags/index.html","9a169dce92808f64753fca95cca86614"],["E:/blog/public/tags/java/index.html","ad117bc8632f2d95b92398bd298e199d"],["E:/blog/public/tags/linux/index.html","d489e4145a361f7af1aae5b0031eebb5"],["E:/blog/public/tags/mysql/index.html","9861d7d09cb7dbc5c0636efa5e7999fc"],["E:/blog/public/tags/redis/index.html","b5e6cfdc586f11a22e23e90228231668"],["E:/blog/public/tags/redis基础/index.html","6c7a65afa009c6824f1ef02f019b0ab0"],["E:/blog/public/tags/springboot/index.html","c93a5087e72852c1e9167c49a429bfbd"],["E:/blog/public/tags/事务/index.html","884e217b9b4aed05bfa2c7581923eefe"],["E:/blog/public/tags/代码规范/index.html","d1fef48d10679adfe837d7d5b729afe1"],["E:/blog/public/tags/分布式/index.html","245f95ab87a84110d43fe90c73117c80"],["E:/blog/public/tags/多线程/index.html","19453f91a8f542484591623e55ca6842"],["E:/blog/public/tags/异常/index.html","ccac2f033076491176322c2d1085541d"],["E:/blog/public/tags/数据库设计规范/index.html","d0e91016fd0ac2abb358f14913a3e251"],["E:/blog/public/tags/索引/index.html","a795d111e181935aa6f51ccd11ee2f74"]];
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







