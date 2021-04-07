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

var precacheConfig = [["E:/blog/public/2020/09/12/mysql/mysql01/index.html","ba7acd4c52e8d9148f3f7ed39345dac7"],["E:/blog/public/2020/09/12/mysql/mysql02/index.html","1ac9c1d323ee56220c202c1eaf9f7bf7"],["E:/blog/public/2020/09/13/python/python01/index.html","97a8e255859cf21e8e4a8cccbb5ff6ac"],["E:/blog/public/2020/09/15/tomcat/tomcat01/index.html","c80912dff44c4cc1ac05b374545b4e9f"],["E:/blog/public/2020/09/17/springboot/springboot01/index.html","a062ef4c83b7edb3b0a84c2795cc1744"],["E:/blog/public/2020/09/19/jvm/jvm01/index.html","2d3aff754c32fe0f93ea67a31b9f8d50"],["E:/blog/public/2020/09/20/jvm/jvm02/index.html","3e38661c17305f84154a46e2fef5a8bc"],["E:/blog/public/2020/10/11/jvm/jvm03/index.html","cf7496940b1ac9fc18772e6e2a64b6bb"],["E:/blog/public/2020/10/11/jvm/jvm04/index.html","de78f4e577edca322836f77e489028e3"],["E:/blog/public/2020/11/09/springcloud/eureka/index.html","11f8eb5e80f1b438fd3daf2a155d820b"],["E:/blog/public/2020/11/17/springcloud/springcloud01/index.html","bec73223f9fee0aac2ad99ae598a1a21"],["E:/blog/public/2020/11/29/maven/maven01/index.html","e9cf400932cbdfc23e65a1fc585ada2f"],["E:/blog/public/2020/12/01/linux/linux02/index.html","08fca036671a7f4f5b9f314ce3c4eae6"],["E:/blog/public/2020/12/07/linux/linux01/index.html","b49da4d6e4aca13348ccf6a341975cdd"],["E:/blog/public/2020/12/18/linux/linux03/index.html","4b5e91aced1347d5c175729980672d9d"],["E:/blog/public/2020/12/24/linux/linux04/index.html","61e2665124d99d97d4ee88c4ec93cee4"],["E:/blog/public/2020/12/25/linux/linux05/index.html","536e24b703809fad188a82e920b0dc79"],["E:/blog/public/2020/12/28/docker/docker01/index.html","30e56c77b20237df26dbe1d4e76e50e9"],["E:/blog/public/2021/01/21/springcloud/consul/index.html","3dcb512b92e2bde745a0cc4d40726eae"],["E:/blog/public/2021/01/22/springcloud/ribbon/index.html","31e0c978615478e3b9f9e686e347bcc0"],["E:/blog/public/2021/04/04/redis/redis01/index.html","b395b274f2d3e948793cc1a355ef2f2e"],["E:/blog/public/about/index.html","1b29780cfc3a8ec8be7df5c75d303049"],["E:/blog/public/archives/2020/09/index.html","5b05662b52f3a2ee63d3bf4d787c7e0f"],["E:/blog/public/archives/2020/10/index.html","4a7dd426918a41fcbe4a11da8dfc30c9"],["E:/blog/public/archives/2020/11/index.html","874cbb742f1ce2f330074da2bd3417d7"],["E:/blog/public/archives/2020/12/index.html","2c3c4a2961fa8f3efd48fa75267cf3f9"],["E:/blog/public/archives/2020/index.html","12529a9868c59b64e0ec03706fe49132"],["E:/blog/public/archives/2020/page/2/index.html","58e9e2d2d498acbb57a1cf91e08a4d48"],["E:/blog/public/archives/2021/01/index.html","09e916ccf812816493286e96f0c07a88"],["E:/blog/public/archives/2021/04/index.html","08da26fdc21330e7bd7389e4e6c58681"],["E:/blog/public/archives/2021/index.html","06b9ba3c134d5f45b1ed8a8ec586026f"],["E:/blog/public/archives/index.html","1fbd0a8b430707625f7f445ca0e4e385"],["E:/blog/public/archives/page/2/index.html","fb84977e9f7ed4834ea0fe3274dd393f"],["E:/blog/public/archives/page/3/index.html","74dce50d63cfecc7bef14c5a9e5c4068"],["E:/blog/public/categories/docker/index.html","d0dd7a62fab51155762f3d5cac2384ec"],["E:/blog/public/categories/index.html","ed34f227dd49e2c17ebb39365c364bbf"],["E:/blog/public/categories/jvm/index.html","9020798b472ef816c9f543de0d3d290f"],["E:/blog/public/categories/linux/index.html","cad8026d91b23d572eec00a1932ca47a"],["E:/blog/public/categories/maven/index.html","168f2544f114302a00f16f07908e4c69"],["E:/blog/public/categories/mysql/index.html","de3785ed77a98f0288fa746cb342b3ba"],["E:/blog/public/categories/python/index.html","4638844b5d7d9a9a1ecef8706a808285"],["E:/blog/public/categories/redis/index.html","ffcddf033d2574af8d4eff02078c921b"],["E:/blog/public/categories/springBoot/index.html","29b3fd774ed05e4a73e6bc528e291321"],["E:/blog/public/categories/springCloud/index.html","07fc265b1f25e6f2c8e62d08ae4b5e8c"],["E:/blog/public/categories/tomcat/index.html","02c8875f65be7e29d834eb72a2c599c8"],["E:/blog/public/css/APlayer.min.css","23e04b27a764c86627313552571f4b11"],["E:/blog/public/css/custom.css","4047f7bf45e5d0b702870762a1faabd4"],["E:/blog/public/css/index.css","6f715b07fb36fcf516d71ee004e9b376"],["E:/blog/public/css/less.css","11abb8788866d08affb7f51053bbc306"],["E:/blog/public/css/tag.css","a5ada7bfc46c5481effe7dffd27b1177"],["E:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/public/ebook/index.html","08702b3c1c7d3b318df1393117a0e947"],["E:/blog/public/gallery/animal/index.html","60ea7e0ef0d5600f32d6572a8f8ad9ea"],["E:/blog/public/gallery/index.html","3c7f20219e2a617401290017ddd8b229"],["E:/blog/public/gallery/word/index.html","35ac256d61d0754e7c5de4e090962c63"],["E:/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/public/index.html","4e695da62718d7c1610330e325f2c72c"],["E:/blog/public/js/botui.js","9bd324283e8898e4b488a7903a7e9ed6"],["E:/blog/public/js/less.js","36157af40f1fa2bd38447017170258d3"],["E:/blog/public/js/main.js","5641b1a6b817df7d81f465c27ed538d9"],["E:/blog/public/js/sakura.js","d259eedc4ec9687b501f075693a5afbd"],["E:/blog/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/blog/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/blog/public/js/style.js","5e4dd5aa78a8fc4bac45ae6866b1bcea"],["E:/blog/public/js/timeDate.js","a09793407ca641e40673dab7c07012e9"],["E:/blog/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/blog/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/blog/public/link/index.html","7c8dd63a35ec7db3f05767b288704739"],["E:/blog/public/movies/index.html","da5f407578ed5ff2affeb06244faf923"],["E:/blog/public/music/index.html","2507104c8d387a2c7dc302d0a13cddc3"],["E:/blog/public/page/2/index.html","319d636eb703b01cebbd7fcb2eef0da6"],["E:/blog/public/page/3/index.html","f7851353cf322b74264f6231753dde18"],["E:/blog/public/photos/index.html","333a47109e711a3d2709ce55a7a79927"],["E:/blog/public/tags/docker/index.html","3ad2180991d09fd8fa20a3c616bae082"],["E:/blog/public/tags/index.html","f9dead6c989cbe609a336c82fa90c5e0"],["E:/blog/public/tags/jvm/index.html","2e8145686e4312d2c320a11f229d105e"],["E:/blog/public/tags/linux/index.html","49e73b2fc669c6e1e810f86c41dc8797"],["E:/blog/public/tags/maven/index.html","98bdebfbc760a42c82379b7cb115c4c2"],["E:/blog/public/tags/mysql/index.html","d58adff8e85d7f54658297385d76f741"],["E:/blog/public/tags/python/index.html","cf691376a2d41531ea2a379b685622ef"],["E:/blog/public/tags/redis/index.html","8057875f79c0402482f811bdfe1b20af"],["E:/blog/public/tags/springBoot/index.html","ffa7ca8b603c11247b4f2a71a08257f6"],["E:/blog/public/tags/springCloud/index.html","f603df87c3cf0538b9eb1130d00a5688"],["E:/blog/public/tags/tomcat/index.html","33bfe39ec9369f8a6c9f2268b97aae83"]];
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







