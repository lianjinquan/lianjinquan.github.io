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

var precacheConfig = [["E:/blog/public/2020/01/14/java/代码规范/index.html","1d1f98dae6075aa58523c5bd5e298b36"],["E:/blog/public/2020/01/14/oracle/oracle/index.html","67f6f4957370ab9df08597d2922ed9aa"],["E:/blog/public/2020/01/14/oracle/oracle概述/index.html","a5a798cae1daee6c229b367eeff85edf"],["E:/blog/public/2020/02/29/java/分布式/index.html","81a5e9537143c24f6f65c2b803bfc49c"],["E:/blog/public/2020/02/29/mysql/mysql/index.html","bea8f5fd81b15dc7f52f1cbe32a03a6f"],["E:/blog/public/2020/02/29/mysql/索引/index.html","720745efcc1b27526ad227e5afc7a026"],["E:/blog/public/2020/02/29/redis/redis/index.html","22326e775236e6917d91f595f2698353"],["E:/blog/public/2020/03/07/java/异常/index.html","d61ba9a47dcdf45fe146408fbb6c7c25"],["E:/blog/public/2020/03/09/java/面试/index.html","2d1608a4ebaa0d358005944c3cbe0bef"],["E:/blog/public/2020/03/09/redis/redis基础/index.html","a9badcb841b739f63a6c6fe017cf8eb2"],["E:/blog/public/2020/03/11/mysql/数据库设计规范/index.html","1aadbc6e8022d77a0e85785693645189"],["E:/blog/public/2020/03/11/spring boot/springboot/index.html","6bbbb15689b9899730d73b76d9ce96a2"],["E:/blog/public/2020/03/11/事务/事务/index.html","91f98988430ab74a3252c9e618fc7034"],["E:/blog/public/2020/03/11/线程/多线程/index.html","8909c77e3d6ccd031ea367cc6dba56d5"],["E:/blog/public/2020/03/11/线程/并发/index.html","c4c5ba5aa6e825c6607f056cc26d0d2f"],["E:/blog/public/2020/03/11/线程/线程池/index.html","7d9c607b9c7e2dcce4570c36f7bdb157"],["E:/blog/public/2020/08/21/java/集合/index.html","54e68c10636bcdfbd0f06c29b2290f30"],["E:/blog/public/2020/08/22/java/java基础/index.html","c37cf7e667bb4780f5bff3b17c3458a2"],["E:/blog/public/2020/08/23/linux/linux/index.html","f5d31b301c183d584f380834999675f1"],["E:/blog/public/2020/08/30/linux/linux的文件权限与目录配置/index.html","f0424682fa051f0e379c1e386070776a"],["E:/blog/public/Gallery/index.html","ee7050201bc64a37c33289282c9a7fc8"],["E:/blog/public/Gallery/marvel/index.html","1cf5710aa78c02efe4e529fe9eae89ea"],["E:/blog/public/Gallery/ohmygirl/index.html","ecb778ce2a0093cefb33e68e4f35a5ca"],["E:/blog/public/Gallery/wallpaper/index.html","69b477dbb0a38272397630a166821e26"],["E:/blog/public/about/index.html","8e24fb2eff04c67c1d69ada8d874362d"],["E:/blog/public/archives/2020/01/index.html","cb6082759653fcad012533ff0caf9177"],["E:/blog/public/archives/2020/02/index.html","af10f44e9ed43aba4756def2be491bb2"],["E:/blog/public/archives/2020/03/index.html","6356b2a4f5d5f8089f7fbbd1c6d9de8e"],["E:/blog/public/archives/2020/08/index.html","d0f2d0191c78d80dadf6a4997059aa46"],["E:/blog/public/archives/2020/index.html","5375ab41496b749432a39836a94fcb56"],["E:/blog/public/archives/2020/page/2/index.html","b1d5a67d8922202cb1bfa5eb3c17024f"],["E:/blog/public/archives/index.html","c7ef1f7ae3cc4bbd843b9ce4e9783ed7"],["E:/blog/public/archives/page/2/index.html","51a43d7ef34a6e6f88abe357c091884e"],["E:/blog/public/categories/Oracle/index.html","c603ac6fdda2f78b750ab496cdbc9b82"],["E:/blog/public/categories/index.html","19503d31ee2f724de89427ca26f7ab24"],["E:/blog/public/categories/java/index.html","876f01c3030dbae35f8f161ee082ade5"],["E:/blog/public/categories/linux/index.html","50a480950bdab39b5111c77229e18453"],["E:/blog/public/categories/mysql/index.html","ae4550060189b2884b720850aca7a975"],["E:/blog/public/categories/redis/index.html","8a398e2b003d07648c0975ad631151b8"],["E:/blog/public/categories/redis基础/index.html","bfd2ad89ebdd187af331417a7fb2dd60"],["E:/blog/public/categories/springboot/index.html","92b3344256200d105643c8b768b10735"],["E:/blog/public/categories/事务/index.html","22b997f28888628445e9038c8490e174"],["E:/blog/public/categories/代码规范/index.html","994c7f2c04cc3a694ad46ff9f146cb3a"],["E:/blog/public/categories/分布式/index.html","c94c08227ecc3f675d58c529f45753ac"],["E:/blog/public/categories/多线程/index.html","2ee75cfe0f0f57e4a01da299de72cfe6"],["E:/blog/public/categories/异常/index.html","a8007f6f8efef58e1e8721fdb5dad4a3"],["E:/blog/public/categories/数据库设计规范/index.html","33db76bcb1f7de281694af55d1ee0c01"],["E:/blog/public/categories/索引/index.html","635d232efb09b2e582ae6f2636e984a4"],["E:/blog/public/categories/面试/index.html","4c84ba24ff168c4d65b321ca8d64bf3d"],["E:/blog/public/css/APlayer.min.css","23e04b27a764c86627313552571f4b11"],["E:/blog/public/css/custom.css","4047f7bf45e5d0b702870762a1faabd4"],["E:/blog/public/css/index.css","d40a2533bab7ef96d31d81d1e072230d"],["E:/blog/public/css/less.css","44b0fd20399399aefc207089fc6444d8"],["E:/blog/public/css/tag.css","a5ada7bfc46c5481effe7dffd27b1177"],["E:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/public/images/01.png","c13a8cead336d7d7c581e621c2a649f2"],["E:/blog/public/images/02.jpg","8f22921a13bdb9ef79a784647b413362"],["E:/blog/public/images/03.png","b4a0df886b51ff1ad3275a245645aa15"],["E:/blog/public/images/04.jpg","43505b5e4a0a38c13cfe0b14a7037bca"],["E:/blog/public/images/BeanFactory Bean生命周期.png","00262e32b2d0077ebc92056dcbaee3f4"],["E:/blog/public/images/Spring 框架的 7 个模块.gif","ac382952d4f122f7d7d50d81950586f0"],["E:/blog/public/images/SpringMVC的执行流程.png","a932dadbd4a1e2f39b37dba562ba1828"],["E:/blog/public/images/SpringMvc执行流程.png","ae9b4c4e3daa99f1f014096342abaf26"],["E:/blog/public/images/Springmvc系统分层.png","b84880ebca399b1421af8c74c046d369"],["E:/blog/public/images/aof持久化.png","0015602001059d3564dc944fd357235a"],["E:/blog/public/images/backage.jpg","0acd62167392d46c59b0d0f8deefbcc4"],["E:/blog/public/images/dump.png","b4f55e1dec6c160d90b458d2db707698"],["E:/blog/public/images/get与post区别.png","78f60b099c7137d7da12ca0f1975ce9e"],["E:/blog/public/images/mysql存储大小.png","e00f19d308b58c81d1da4cfe8c7c04ae"],["E:/blog/public/images/rdb持久化.png","828e1e27c73e39abf855ee57959b9846"],["E:/blog/public/images/redis持久化.png","9c956b44e607cf7528a3219f0946ca6b"],["E:/blog/public/images/redis持久化2.png","c8582ebeb09abd7977a05036dbab7a06"],["E:/blog/public/images/冒泡排序.gif","4700503d1944f2cc25ea073339203b27"],["E:/blog/public/images/可见性问题.png","5bdeefd733c45b710c00b6bc182e7a1d"],["E:/blog/public/images/并发编程.jpg","1934c77529315f1ac43a0485b551ec9e"],["E:/blog/public/images/并行.png","1ec9c7937efecacde958eddd5f738c0b"],["E:/blog/public/images/打印4种情况.png","9a2ae8b73f52713f19aa0a14cec232e1"],["E:/blog/public/images/数据库事务的隔离级别.png","c584d1dbe0d04a3c39c4dcccedb94c28"],["E:/blog/public/images/线程切换.png","2046b1dc422564350b0e22a6570e8ee9"],["E:/blog/public/images/线程池.png","7d42d7149d5008f5ea71a3105ae4f11d"],["E:/blog/public/images/线程池参数.png","79025d4da1fff9997684220cc0fcf1b8"],["E:/blog/public/images/线程池参数顺序.png","130d484535fd9849e0170e42a37dc1cc"],["E:/blog/public/images/线程状态转换.png","1dd89e14b06d81d45cdd5ed2b442f358"],["E:/blog/public/images/线程生命周期.jpg","aef061e8705de8f30d8b39b3a66ea192"],["E:/blog/public/images/线程生命周期.png","f3f0e87092e9fc7edc31529620c45846"],["E:/blog/public/images/线程的生命周期.png","e1aa23736f3a18a8b0a190751cff52d3"],["E:/blog/public/images/进程.png","d59d7442389e6eb558f8de5aaadb8041"],["E:/blog/public/images/配置文件优先级.jpg","32e5aea241c61dee4d3d75b0815ccc15"],["E:/blog/public/images/集合.png","0060fd5e31f2660ceefb4feccef08bda"],["E:/blog/public/images/集合2.png","c75d4c55996ffd9d779ffe9295a75e8b"],["E:/blog/public/images/集合3.jpg","028237c2b37f496bf97b6b15685b4584"],["E:/blog/public/images/集合分类.png","d5d107d4f337f1f58d68922c4b1e3c69"],["E:/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/public/img/avatar.jpg","90d70b57961af087b88b8041c5f329f3"],["E:/blog/public/img/favicon.jpg","75edba6ec0c01ba862a9f66f383b620a"],["E:/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/blog/public/index.html","f00999a1b7414dd4e0001150448534d4"],["E:/blog/public/js/APlayer.min.js","46cd907eeef5f628fc7197715e012d07"],["E:/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/blog/public/js/botui.js","9bd324283e8898e4b488a7903a7e9ed6"],["E:/blog/public/js/ip_content.js","92bacff50587527d43589642a7caecff"],["E:/blog/public/js/less.js","0c224c4750b7373c22caa4a395fafe10"],["E:/blog/public/js/main.js","83086cbc797c743e17a9c592e6d36dd7"],["E:/blog/public/js/sakura.js","d259eedc4ec9687b501f075693a5afbd"],["E:/blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["E:/blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["E:/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["E:/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["E:/blog/public/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["E:/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["E:/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["E:/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["E:/blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["E:/blog/public/js/timeDate.js","a09793407ca641e40673dab7c07012e9"],["E:/blog/public/js/tw_cn.js","5b26f58076202394a66cde8b885f3225"],["E:/blog/public/js/utils.js","b04af39def288f877195692f094bafd6"],["E:/blog/public/link/index.html","a6cf595d0f491ed31e75b7173a59b198"],["E:/blog/public/movies/index.html","da8749868b275714406f63aae7db1f4a"],["E:/blog/public/music/index.html","dd7982fb357e8a8be91d3fa9e55c47ba"],["E:/blog/public/page/2/index.html","58f3ebd49b6cc5d58e5d5cb2793e845f"],["E:/blog/public/photos/index.html","1198720b3fffea4e160b9a523f2f2b61"],["E:/blog/public/tags/Oracle/index.html","5180748b4070e3cc2eefeda746d820f6"],["E:/blog/public/tags/index.html","12b196fb39c0e8f961312b89d764dfd0"],["E:/blog/public/tags/java/index.html","2ef6607f31a8523c1075b1682b0b6ba4"],["E:/blog/public/tags/linux/index.html","731a614545c3ac12e0b0ce1615698d66"],["E:/blog/public/tags/mysql/index.html","aade6c5c4b0666d7861a4074238f9953"],["E:/blog/public/tags/redis/index.html","959f7546d6c1b9ea2d5a47b6ab6691bb"],["E:/blog/public/tags/redis基础/index.html","a6fe44240162f0f61224d7cbbe2fbe72"],["E:/blog/public/tags/springboot/index.html","a7ac13a72e02bc8b97a1e2232599b0b6"],["E:/blog/public/tags/事务/index.html","f0f363e8f0ea6102d7ab178c212d5e00"],["E:/blog/public/tags/代码规范/index.html","52ad8897520d399d9958a2611ac0abd3"],["E:/blog/public/tags/分布式/index.html","58484265907191b50aa4e3eec7ef344e"],["E:/blog/public/tags/多线程/index.html","29a6d2da103abef86afd7db34ae7ba4b"],["E:/blog/public/tags/异常/index.html","5fb94a04a0200ac533976d9ce941fcb0"],["E:/blog/public/tags/数据库设计规范/index.html","7e9888a594226e5261b24792784c6a54"],["E:/blog/public/tags/索引/index.html","5a8d87d91af92857eef3ca975018033f"],["E:/blog/public/tags/面试/index.html","8f282ff80e0b297a28e0f00ffde7c9be"]];
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







