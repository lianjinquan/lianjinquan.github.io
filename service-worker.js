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

var precacheConfig = [["E:/blog/public/2020/01/14/java/代码规范/index.html","d19f5eb12ee9b331e83c3efea8fe45f3"],["E:/blog/public/2020/01/14/oracle/oracle/index.html","80eb816186fe6721d752a6db192629a3"],["E:/blog/public/2020/01/14/oracle/oracle概述/index.html","e37bc2f925d1a478f3f18cb109678e36"],["E:/blog/public/2020/02/29/java/分布式/index.html","0cb69543639e34ac04b8c15017cce215"],["E:/blog/public/2020/02/29/mysql/mysql/index.html","66a517de052fdb9b6a00f568d7cd9bd1"],["E:/blog/public/2020/02/29/mysql/索引/index.html","0c17d0084229a273936f326bdf476bc0"],["E:/blog/public/2020/02/29/redis/redis/index.html","57472f96088c0d0b351f44873a1b7c1f"],["E:/blog/public/2020/03/07/java/异常/index.html","5677fcbd90dbf905cac9f1d52fc5fa6b"],["E:/blog/public/2020/03/09/java/面试/index.html","6a1def73b2029b9406d099739a9b47d4"],["E:/blog/public/2020/03/09/redis/redis基础/index.html","0d04f37c22488d8bddbc65b611a22a8d"],["E:/blog/public/2020/03/11/mysql/数据库设计规范/index.html","aa791c1ae4709bff58b09798f71fda12"],["E:/blog/public/2020/03/11/spring boot/springboot/index.html","cd5a2c258e1a04f76318bba2240e94d3"],["E:/blog/public/2020/03/11/事务/事务/index.html","9b598666d9dc1f7b0bb86b18b192c902"],["E:/blog/public/2020/03/11/线程/多线程/index.html","0a74170752a74a8f822dedd7dbcc161f"],["E:/blog/public/2020/03/11/线程/并发/index.html","e1b87ca653d8ad0b9da2daae155eef2a"],["E:/blog/public/2020/03/11/线程/线程池/index.html","12225a2102e93360711cb11170f1eec7"],["E:/blog/public/2020/08/21/java/集合/index.html","53ea2fd086ae7399fdf3e8c0b3918d9b"],["E:/blog/public/2020/08/22/java/java基础/index.html","53e68de7aa16760d56aff1fb7fee87e7"],["E:/blog/public/2020/08/23/linux/linux/index.html","2b9bda96fef06b65305fd71475531849"],["E:/blog/public/2020/08/30/linux/linux的文件权限与目录配置/index.html","1676fe1b8ec4902312c26cbeac482bd4"],["E:/blog/public/Gallery/index.html","b1304242e164d0e84713aff78a99af23"],["E:/blog/public/Gallery/marvel/index.html","7c3d2b0048c1549b08bde6dd025b31a9"],["E:/blog/public/Gallery/ohmygirl/index.html","b0e4ce03b9eeb65570fa45555aeedf5d"],["E:/blog/public/Gallery/wallpaper/index.html","874d1930ad83b992883eb107bad0843c"],["E:/blog/public/about/index.html","50d1d838661c3142931de4aa3c0365f4"],["E:/blog/public/archives/2020/01/index.html","20a3f0ad0a438ac995710bbc5fe7eb40"],["E:/blog/public/archives/2020/02/index.html","062a4841c66e3f25a01cc6b0372b850b"],["E:/blog/public/archives/2020/03/index.html","15d840e0fb6ac92797e5f521b3d6c46f"],["E:/blog/public/archives/2020/08/index.html","8d9268ec6c8c2a7e4f611664760396e7"],["E:/blog/public/archives/2020/index.html","e313a6bdbc6d9cd5ade701f8ec46ed81"],["E:/blog/public/archives/2020/page/2/index.html","82ad34c61d879e860a573ece095ffaab"],["E:/blog/public/archives/index.html","6ff5ceef67c5cbc4e3b4ac637fed6709"],["E:/blog/public/archives/page/2/index.html","54ec6efcc9a4d148b40fdd5ffa69cd3b"],["E:/blog/public/categories/Oracle/index.html","c2106a67ec299511272aa7dae19031fc"],["E:/blog/public/categories/index.html","27870aef4e14c9231d31d9672663faad"],["E:/blog/public/categories/java/index.html","a88ef8484ffb3142816008a7fbaedb45"],["E:/blog/public/categories/linux/index.html","48335aa85eaba76c807f7be41df76060"],["E:/blog/public/categories/mysql/index.html","5238e74ccfcfbf51420e060a831a3ac8"],["E:/blog/public/categories/redis/index.html","c755e8f886d4c770d3fb597c45c3ca8d"],["E:/blog/public/categories/redis基础/index.html","4deea02ebe5bb64f9362cd0b178f5a49"],["E:/blog/public/categories/springboot/index.html","cb96a10f6a09e8f8c3355deeff7e35e3"],["E:/blog/public/categories/事务/index.html","a07c7cf3a161cbef8dc6f6bf45480b80"],["E:/blog/public/categories/代码规范/index.html","77a0f814e886f193717b06b2a2d0ad84"],["E:/blog/public/categories/分布式/index.html","2eaca4cc4fd7501a77f656c2050ea15b"],["E:/blog/public/categories/多线程/index.html","7d3132339dc39a77e2447c9140b617cd"],["E:/blog/public/categories/异常/index.html","f349877a055f1d757adb56154ad13d73"],["E:/blog/public/categories/数据库设计规范/index.html","34b334b10bbf67f501aea505b842338d"],["E:/blog/public/categories/索引/index.html","674262213abec05bfe449cb11026181b"],["E:/blog/public/categories/面试/index.html","e9e37aa2b0864f628b37c981b41e6a16"],["E:/blog/public/css/APlayer.min.css","23e04b27a764c86627313552571f4b11"],["E:/blog/public/css/custom.css","4047f7bf45e5d0b702870762a1faabd4"],["E:/blog/public/css/index.css","6be2922c86db195ae16c782b0dc87426"],["E:/blog/public/css/less.css","44b0fd20399399aefc207089fc6444d8"],["E:/blog/public/css/tag.css","a5ada7bfc46c5481effe7dffd27b1177"],["E:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/public/images/01.png","c13a8cead336d7d7c581e621c2a649f2"],["E:/blog/public/images/02.jpg","8f22921a13bdb9ef79a784647b413362"],["E:/blog/public/images/03.png","b4a0df886b51ff1ad3275a245645aa15"],["E:/blog/public/images/04.jpg","43505b5e4a0a38c13cfe0b14a7037bca"],["E:/blog/public/images/BeanFactory Bean生命周期.png","00262e32b2d0077ebc92056dcbaee3f4"],["E:/blog/public/images/Spring 框架的 7 个模块.gif","ac382952d4f122f7d7d50d81950586f0"],["E:/blog/public/images/SpringMVC的执行流程.png","a932dadbd4a1e2f39b37dba562ba1828"],["E:/blog/public/images/SpringMvc执行流程.png","ae9b4c4e3daa99f1f014096342abaf26"],["E:/blog/public/images/Springmvc系统分层.png","b84880ebca399b1421af8c74c046d369"],["E:/blog/public/images/aof持久化.png","0015602001059d3564dc944fd357235a"],["E:/blog/public/images/backage.jpg","0acd62167392d46c59b0d0f8deefbcc4"],["E:/blog/public/images/dump.png","b4f55e1dec6c160d90b458d2db707698"],["E:/blog/public/images/get与post区别.png","78f60b099c7137d7da12ca0f1975ce9e"],["E:/blog/public/images/mysql存储大小.png","e00f19d308b58c81d1da4cfe8c7c04ae"],["E:/blog/public/images/rdb持久化.png","828e1e27c73e39abf855ee57959b9846"],["E:/blog/public/images/redis持久化.png","9c956b44e607cf7528a3219f0946ca6b"],["E:/blog/public/images/redis持久化2.png","c8582ebeb09abd7977a05036dbab7a06"],["E:/blog/public/images/冒泡排序.gif","4700503d1944f2cc25ea073339203b27"],["E:/blog/public/images/可见性问题.png","5bdeefd733c45b710c00b6bc182e7a1d"],["E:/blog/public/images/并发编程.jpg","1934c77529315f1ac43a0485b551ec9e"],["E:/blog/public/images/并行.png","1ec9c7937efecacde958eddd5f738c0b"],["E:/blog/public/images/打印4种情况.png","9a2ae8b73f52713f19aa0a14cec232e1"],["E:/blog/public/images/数据库事务的隔离级别.png","c584d1dbe0d04a3c39c4dcccedb94c28"],["E:/blog/public/images/线程切换.png","2046b1dc422564350b0e22a6570e8ee9"],["E:/blog/public/images/线程池.png","7d42d7149d5008f5ea71a3105ae4f11d"],["E:/blog/public/images/线程池参数.png","79025d4da1fff9997684220cc0fcf1b8"],["E:/blog/public/images/线程池参数顺序.png","130d484535fd9849e0170e42a37dc1cc"],["E:/blog/public/images/线程状态转换.png","1dd89e14b06d81d45cdd5ed2b442f358"],["E:/blog/public/images/线程生命周期.jpg","aef061e8705de8f30d8b39b3a66ea192"],["E:/blog/public/images/线程生命周期.png","f3f0e87092e9fc7edc31529620c45846"],["E:/blog/public/images/线程的生命周期.png","e1aa23736f3a18a8b0a190751cff52d3"],["E:/blog/public/images/进程.png","d59d7442389e6eb558f8de5aaadb8041"],["E:/blog/public/images/配置文件优先级.jpg","32e5aea241c61dee4d3d75b0815ccc15"],["E:/blog/public/images/集合.png","0060fd5e31f2660ceefb4feccef08bda"],["E:/blog/public/images/集合2.png","c75d4c55996ffd9d779ffe9295a75e8b"],["E:/blog/public/images/集合3.jpg","028237c2b37f496bf97b6b15685b4584"],["E:/blog/public/images/集合分类.png","d5d107d4f337f1f58d68922c4b1e3c69"],["E:/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/public/img/avatar.jpg","90d70b57961af087b88b8041c5f329f3"],["E:/blog/public/img/favicon.jpg","75edba6ec0c01ba862a9f66f383b620a"],["E:/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/blog/public/index.html","9f0b68a0fc05d9509a636f40fcb8c93c"],["E:/blog/public/js/search/algolia.js","eea439cb041f1bd54dd5f294b89ac54d"],["E:/blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["E:/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["E:/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["E:/blog/public/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["E:/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["E:/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["E:/blog/public/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["E:/blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["E:/blog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/blog/public/link/index.html","92c5ecbfab1c53e103bd7ec2b0f0a886"],["E:/blog/public/movies/index.html","d63236a957b62755166cd577e1f304b7"],["E:/blog/public/music/index.html","7bf52e9876534a3444eb01fd9539cb43"],["E:/blog/public/page/2/index.html","c21a693ea39464eb19787e15e74accb9"],["E:/blog/public/photos/index.html","7743f9abdbe11a49aed924707760393e"],["E:/blog/public/tags/Oracle/index.html","43c30347ebf356bcb3fff803ea2cc2f6"],["E:/blog/public/tags/index.html","89ca89b22473f6d7c0a886f82d463331"],["E:/blog/public/tags/java/index.html","a298b558209ef7b47c509ab2213f4111"],["E:/blog/public/tags/linux/index.html","b6881fad358fda44325bd718c6b5b639"],["E:/blog/public/tags/mysql/index.html","2aba4d3112a792acdcc457f2fec5b49b"],["E:/blog/public/tags/redis/index.html","02c216c42e2ee7865ef30d9ec9993d71"],["E:/blog/public/tags/redis基础/index.html","e8b1692fa82e8554b5cad9f765a4deaf"],["E:/blog/public/tags/springboot/index.html","abcce59d3796c508d0090327697807ff"],["E:/blog/public/tags/事务/index.html","f85ab7c3d8a54091b14a9b05d58753a6"],["E:/blog/public/tags/代码规范/index.html","3e3393091fc79f31dc5cb18ba81aa5bf"],["E:/blog/public/tags/分布式/index.html","9869e6401e270f6e2f28074234672cfb"],["E:/blog/public/tags/多线程/index.html","74b90fb6e068c82eb79d218ea8147d68"],["E:/blog/public/tags/异常/index.html","785d6aa22a593a972f66373537e58a9f"],["E:/blog/public/tags/数据库设计规范/index.html","2e70cb3914c128028e36335785359b12"],["E:/blog/public/tags/索引/index.html","963fb429b29ee076e55746c63d741b53"],["E:/blog/public/tags/面试/index.html","5a64b4b0493c189c0fe7e4662158d816"]];
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







