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

var precacheConfig = [["E:/blog/public/2020/01/14/java/代码规范/index.html","dd4f078a2d4e46bc7a8e60c9176eea12"],["E:/blog/public/2020/01/14/oracle/oracle/index.html","c40c80bbfc26e9229d82e05cea53e4b6"],["E:/blog/public/2020/01/14/oracle/oracle概述/index.html","ee62fcdfccface03f9cf9da8bfc8983f"],["E:/blog/public/2020/02/29/java/分布式/index.html","6a02df1c5735fbbc5fac18a9615c04d6"],["E:/blog/public/2020/02/29/mysql/mysql/index.html","bdd25c01a5bfd8e8bcdd9ccf21f36728"],["E:/blog/public/2020/02/29/mysql/索引/index.html","44da5e61d9a38976c749ca05cbf465de"],["E:/blog/public/2020/02/29/redis/redis/index.html","76a39f3c25b0b12fc7ca42b9c0390c38"],["E:/blog/public/2020/03/07/java/异常/index.html","2b3164da636f682d2eaa901f566a9667"],["E:/blog/public/2020/03/09/java/面试/index.html","a003fa2d7eae5d6e8884fa8ec80a19a1"],["E:/blog/public/2020/03/09/redis/redis基础/index.html","9b49e0c5e5514fea333b52f9a41c71c7"],["E:/blog/public/2020/03/11/mysql/数据库设计规范/index.html","86386ae54b665faee9a2e2e1a80030ed"],["E:/blog/public/2020/03/11/spring boot/springboot/index.html","a274ce810e73f855a381f77e806c1e5a"],["E:/blog/public/2020/03/11/事务/事务/index.html","6a24aa9e25edf0ad60631ff85b10c0c2"],["E:/blog/public/2020/03/11/线程/多线程/index.html","913e642c8b62ce1238b49da7d78943ff"],["E:/blog/public/2020/03/11/线程/并发/index.html","5dc5186cbb0bdd1b2f63156a0b1201a6"],["E:/blog/public/2020/03/11/线程/线程池/index.html","c975148811b97aeaf85e21e52271f5f0"],["E:/blog/public/2020/08/21/java/集合/index.html","a5246a10f86deb30db36a9925776de76"],["E:/blog/public/2020/08/22/java/java基础/index.html","e4f6ad234f0963e22e7a56d7b4f6af97"],["E:/blog/public/2020/08/23/linux/linux/index.html","0092bc38f7aceced5eaf559253057e51"],["E:/blog/public/2020/08/30/linux/linux的文件权限与目录配置/index.html","63aa5b98df30157a5530f535fa2997af"],["E:/blog/public/Gallery/index.html","65c2f29c792c9bd2c6057b346abdfe35"],["E:/blog/public/Gallery/marvel/index.html","dcc9095a930a5332acf22470b9574f77"],["E:/blog/public/Gallery/ohmygirl/index.html","0529cb4479f948fc7e5670bb3609ba2b"],["E:/blog/public/Gallery/wallpaper/index.html","ae69cf1ecf8719a25ff0d6db5d89bd58"],["E:/blog/public/about/index.html","add4944f14d27c18dcfb6f6c12afb942"],["E:/blog/public/archives/2020/01/index.html","d25cdc46dcd74b5ee56e3361d7d8eb9b"],["E:/blog/public/archives/2020/02/index.html","5d5b4f38517285825e1e48c7faa8e87c"],["E:/blog/public/archives/2020/03/index.html","b2e76698220f9d280fee82b5856dbaaa"],["E:/blog/public/archives/2020/08/index.html","4642794466e66f685b4dfca78163a105"],["E:/blog/public/archives/2020/index.html","973cdf50a96b576f0bafde0a30526a79"],["E:/blog/public/archives/2020/page/2/index.html","50c8806ab0867b0caf54de075cf87366"],["E:/blog/public/archives/index.html","bc7c13a36ce187de836abfba908b072e"],["E:/blog/public/archives/page/2/index.html","268f09c1e8058b6ebc822f71b9af98d0"],["E:/blog/public/categories/Oracle/index.html","01f0f326db1149a68726d05113494706"],["E:/blog/public/categories/index.html","03668fe180307d9b62c67f5f82ea89ea"],["E:/blog/public/categories/java/index.html","1f929c2c641d959123d75a60a3317e8b"],["E:/blog/public/categories/linux/index.html","e8c32604a74cad87e12f18665c9da4a4"],["E:/blog/public/categories/mysql/index.html","bda3c6bfc75ff6b9d299fc1cfbc6bf75"],["E:/blog/public/categories/redis/index.html","74a519728e95370fca4aaba5e1575fc3"],["E:/blog/public/categories/redis基础/index.html","f040a4ed7069fd0e135056f402a9cd5f"],["E:/blog/public/categories/springboot/index.html","c64a272161d2d1b34379e53e02f9ea8f"],["E:/blog/public/categories/事务/index.html","319602229c3a30e28bf66552d2466a54"],["E:/blog/public/categories/代码规范/index.html","c14bd574bb7d079591c6217bf25648bc"],["E:/blog/public/categories/分布式/index.html","60a00d6ce5fb526af94467d7aabaaf54"],["E:/blog/public/categories/多线程/index.html","3b7cfe1cff809f90edc9883b002e2156"],["E:/blog/public/categories/异常/index.html","5f7ea049ae844a3df27dee32a7f7eeee"],["E:/blog/public/categories/数据库设计规范/index.html","7c8b3cc440389533de8a7de2ac84509d"],["E:/blog/public/categories/索引/index.html","330b31aab034df438a2f15864371a735"],["E:/blog/public/categories/面试/index.html","ae7060a2fd043c081f08db3b4dd35b35"],["E:/blog/public/css/APlayer.min.css","23e04b27a764c86627313552571f4b11"],["E:/blog/public/css/custom.css","4047f7bf45e5d0b702870762a1faabd4"],["E:/blog/public/css/index.css","d40a2533bab7ef96d31d81d1e072230d"],["E:/blog/public/css/less.css","44b0fd20399399aefc207089fc6444d8"],["E:/blog/public/css/tag.css","a5ada7bfc46c5481effe7dffd27b1177"],["E:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/public/images/01.png","c13a8cead336d7d7c581e621c2a649f2"],["E:/blog/public/images/02.jpg","8f22921a13bdb9ef79a784647b413362"],["E:/blog/public/images/03.png","b4a0df886b51ff1ad3275a245645aa15"],["E:/blog/public/images/04.jpg","43505b5e4a0a38c13cfe0b14a7037bca"],["E:/blog/public/images/BeanFactory Bean生命周期.png","00262e32b2d0077ebc92056dcbaee3f4"],["E:/blog/public/images/Spring 框架的 7 个模块.gif","ac382952d4f122f7d7d50d81950586f0"],["E:/blog/public/images/SpringMVC的执行流程.png","a932dadbd4a1e2f39b37dba562ba1828"],["E:/blog/public/images/SpringMvc执行流程.png","ae9b4c4e3daa99f1f014096342abaf26"],["E:/blog/public/images/Springmvc系统分层.png","b84880ebca399b1421af8c74c046d369"],["E:/blog/public/images/aof持久化.png","0015602001059d3564dc944fd357235a"],["E:/blog/public/images/backage.jpg","0acd62167392d46c59b0d0f8deefbcc4"],["E:/blog/public/images/dump.png","b4f55e1dec6c160d90b458d2db707698"],["E:/blog/public/images/get与post区别.png","78f60b099c7137d7da12ca0f1975ce9e"],["E:/blog/public/images/mysql存储大小.png","e00f19d308b58c81d1da4cfe8c7c04ae"],["E:/blog/public/images/rdb持久化.png","828e1e27c73e39abf855ee57959b9846"],["E:/blog/public/images/redis持久化.png","9c956b44e607cf7528a3219f0946ca6b"],["E:/blog/public/images/redis持久化2.png","c8582ebeb09abd7977a05036dbab7a06"],["E:/blog/public/images/冒泡排序.gif","4700503d1944f2cc25ea073339203b27"],["E:/blog/public/images/可见性问题.png","5bdeefd733c45b710c00b6bc182e7a1d"],["E:/blog/public/images/并发编程.jpg","1934c77529315f1ac43a0485b551ec9e"],["E:/blog/public/images/并行.png","1ec9c7937efecacde958eddd5f738c0b"],["E:/blog/public/images/打印4种情况.png","9a2ae8b73f52713f19aa0a14cec232e1"],["E:/blog/public/images/数据库事务的隔离级别.png","c584d1dbe0d04a3c39c4dcccedb94c28"],["E:/blog/public/images/线程切换.png","2046b1dc422564350b0e22a6570e8ee9"],["E:/blog/public/images/线程池.png","7d42d7149d5008f5ea71a3105ae4f11d"],["E:/blog/public/images/线程池参数.png","79025d4da1fff9997684220cc0fcf1b8"],["E:/blog/public/images/线程池参数顺序.png","130d484535fd9849e0170e42a37dc1cc"],["E:/blog/public/images/线程状态转换.png","1dd89e14b06d81d45cdd5ed2b442f358"],["E:/blog/public/images/线程生命周期.jpg","aef061e8705de8f30d8b39b3a66ea192"],["E:/blog/public/images/线程生命周期.png","f3f0e87092e9fc7edc31529620c45846"],["E:/blog/public/images/线程的生命周期.png","e1aa23736f3a18a8b0a190751cff52d3"],["E:/blog/public/images/进程.png","d59d7442389e6eb558f8de5aaadb8041"],["E:/blog/public/images/配置文件优先级.jpg","32e5aea241c61dee4d3d75b0815ccc15"],["E:/blog/public/images/集合.png","0060fd5e31f2660ceefb4feccef08bda"],["E:/blog/public/images/集合2.png","c75d4c55996ffd9d779ffe9295a75e8b"],["E:/blog/public/images/集合3.jpg","028237c2b37f496bf97b6b15685b4584"],["E:/blog/public/images/集合分类.png","d5d107d4f337f1f58d68922c4b1e3c69"],["E:/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/public/img/avatar.jpg","90d70b57961af087b88b8041c5f329f3"],["E:/blog/public/img/favicon.jpg","75edba6ec0c01ba862a9f66f383b620a"],["E:/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/blog/public/index.html","f697a49ae7941a00b3ae2e9768aa2c68"],["E:/blog/public/js/APlayer.min.js","46cd907eeef5f628fc7197715e012d07"],["E:/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/blog/public/js/botui.js","9bd324283e8898e4b488a7903a7e9ed6"],["E:/blog/public/js/ip_content.js","92bacff50587527d43589642a7caecff"],["E:/blog/public/js/less.js","0c224c4750b7373c22caa4a395fafe10"],["E:/blog/public/js/main.js","83086cbc797c743e17a9c592e6d36dd7"],["E:/blog/public/js/sakura.js","d259eedc4ec9687b501f075693a5afbd"],["E:/blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["E:/blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["E:/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["E:/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["E:/blog/public/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["E:/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["E:/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["E:/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["E:/blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["E:/blog/public/js/timeDate.js","a09793407ca641e40673dab7c07012e9"],["E:/blog/public/js/tw_cn.js","5b26f58076202394a66cde8b885f3225"],["E:/blog/public/js/utils.js","b04af39def288f877195692f094bafd6"],["E:/blog/public/link/index.html","4056ec8ab2e69ecb0a688ce6040649ad"],["E:/blog/public/movies/index.html","776f76cf30972ffc031bcefc51071866"],["E:/blog/public/music/index.html","49e0f3c45f3461f531ac7564d246d8b8"],["E:/blog/public/page/2/index.html","4af59e3eee7c565d1637fa087e214e19"],["E:/blog/public/photos/index.html","b6a05c3260a84a1c5f9349abffad903a"],["E:/blog/public/tags/Oracle/index.html","508d170d65bffc9eed1587a06f41f2b4"],["E:/blog/public/tags/index.html","fbce1f8ead872cbb5f70153255931860"],["E:/blog/public/tags/java/index.html","f7189a5d9a245febcb664668157f0d88"],["E:/blog/public/tags/linux/index.html","238962c105c89fa5d41b91bc9b5206ca"],["E:/blog/public/tags/mysql/index.html","62727009c1697047a219f6e7ce125c23"],["E:/blog/public/tags/redis/index.html","e9b1822ca569602ed2f2b4ec615ebd36"],["E:/blog/public/tags/redis基础/index.html","3cb5d70d01dd8947bf8d69b444a331e0"],["E:/blog/public/tags/springboot/index.html","5bc1ee27f216af6fffb5bc454d166b4f"],["E:/blog/public/tags/事务/index.html","c612ebabe2a4d9edbaa4badb4035b217"],["E:/blog/public/tags/代码规范/index.html","772edca6767cb5935e73aa53ba6d77ee"],["E:/blog/public/tags/分布式/index.html","ea93bcbbc2b9a2384a86c533adf3726a"],["E:/blog/public/tags/多线程/index.html","9d2477d7a143c609ac30ed8ce30f851c"],["E:/blog/public/tags/异常/index.html","65533674954740097caeaeb517963234"],["E:/blog/public/tags/数据库设计规范/index.html","f11b06adc94dd3da6a2ba0ef5f8a4ea8"],["E:/blog/public/tags/索引/index.html","f41f3c6242fe38d1b0cb327964c2d410"],["E:/blog/public/tags/面试/index.html","6b1dd97728f77ea1d9254a62f4db1a98"]];
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







