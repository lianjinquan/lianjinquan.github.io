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

var precacheConfig = [["E:/blog/public/2020/09/12/mysql/mysql01/index.html","15b49c8bf09e7551aa1038e979d1429a"],["E:/blog/public/2020/09/12/mysql/mysql02/index.html","332933d343a92fc7716bf14c9eb77466"],["E:/blog/public/2020/09/13/python/python01/index.html","d29a92b2ca70d970fceacf4ce7c7498e"],["E:/blog/public/2020/09/15/tomcat/tomcat01/index.html","bf58142b329f5710211017061265bf4d"],["E:/blog/public/2020/09/17/springboot/springboot01/index.html","97f344c8b3ebe6a86923e08e369fe321"],["E:/blog/public/2020/09/19/jvm/jvm01/index.html","d6a45b8f696e04649d7afdb18fc355c9"],["E:/blog/public/2020/09/20/jvm/jvm02/index.html","82084d5ae66a391f2050856aa9ca52de"],["E:/blog/public/2020/10/11/jvm/jvm03/index.html","e019be88502be28407620b8f0b60d03d"],["E:/blog/public/2020/10/11/jvm/jvm04/index.html","77485aa31738fd37e985ffb2abf48e41"],["E:/blog/public/2020/11/09/springcloud/springcloud02/index.html","d30ee1dd689411e448d1d312401ad3d5"],["E:/blog/public/2020/11/17/springcloud/springcloud01/index.html","acf8ea56dd78301c1ad13e7f9928eb3d"],["E:/blog/public/2020/11/29/maven/maven01/index.html","d7b47b3ea47df5078b701e858853e7f7"],["E:/blog/public/2020/12/01/linux/linux02/index.html","83294df9e8f1ec9511702593e01f542e"],["E:/blog/public/2020/12/07/linux/linux01/index.html","5ca5b40d7505df02248a3512b9f14d06"],["E:/blog/public/2020/12/18/linux/linux03/index.html","b8ddc31da2ac265d3a3947cb771fc7fc"],["E:/blog/public/2020/12/24/linux/linux04/index.html","ea373c54a923430add56ee3a1566c273"],["E:/blog/public/2020/12/25/linux/linux05/index.html","6be14466b869626f314e87383555e09d"],["E:/blog/public/Gallery/index.html","081534b0c4a191634f5d53c4232e41d3"],["E:/blog/public/Gallery/marvel/index.html","fedf4ba06cdaee395c9006a317465cf3"],["E:/blog/public/Gallery/ohmygirl/index.html","22036fe73442d63296423c8c9e284fbe"],["E:/blog/public/Gallery/wallpaper/index.html","06215ac267c51ac66d576d456d7faf8d"],["E:/blog/public/about/index.html","5a3246d1d8f6541372201b6b4f06e353"],["E:/blog/public/archives/2020/09/index.html","c309a71f30f16df5f76e548bdcb3a477"],["E:/blog/public/archives/2020/10/index.html","59a067ee4b68871ab605fe0a5f38e6a1"],["E:/blog/public/archives/2020/11/index.html","0e5ecc43a94648159f4a2a7eca54e1be"],["E:/blog/public/archives/2020/12/index.html","124c5842bd9f022c86c1478e0a958b94"],["E:/blog/public/archives/2020/index.html","bf7523cd436562dba6190d27f2b7ca19"],["E:/blog/public/archives/2020/page/2/index.html","64fc7a670750a114dc69257a2aef180c"],["E:/blog/public/archives/index.html","bb2e8f475d788b1cc2d2c910c6872852"],["E:/blog/public/archives/page/2/index.html","019fd27c4fbe77b30ea5680e8be4b44d"],["E:/blog/public/categories/index.html","2ceb8695f742a325eb57ccd7fcaaf3b3"],["E:/blog/public/categories/jvm/index.html","b4503b8239ec608b4b2709c2bfad827c"],["E:/blog/public/categories/linux/index.html","de1d3461b87558ed6eeb485af46b3c2b"],["E:/blog/public/categories/maven/index.html","04347ffd3e6368be7439a3eaa00f43a6"],["E:/blog/public/categories/mysql/index.html","a69746c6679c8d8eb6db6de79c9c9a8e"],["E:/blog/public/categories/python/index.html","f7d49d384d7ad71028d86e83d7bd28bd"],["E:/blog/public/categories/springBoot/index.html","bd996e3f647652a815fe1505abd430cf"],["E:/blog/public/categories/springCloud/index.html","9b9735b607d92c8f8bb0439c820c1200"],["E:/blog/public/categories/tomcat/index.html","09f8bc5d8d1168f51317f97791520bdb"],["E:/blog/public/css/APlayer.min.css","23e04b27a764c86627313552571f4b11"],["E:/blog/public/css/custom.css","4047f7bf45e5d0b702870762a1faabd4"],["E:/blog/public/css/index.css","f70097ade2077e55b009f5908803e077"],["E:/blog/public/css/less.css","11abb8788866d08affb7f51053bbc306"],["E:/blog/public/css/tag.css","a5ada7bfc46c5481effe7dffd27b1177"],["E:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/public/ebook/index.html","6f2fccf8ca0733d55c5cb4920c0f75f1"],["E:/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/blog/public/index.html","ef61577de6fd85f0828ce1aff4649803"],["E:/blog/public/js/botui.js","9bd324283e8898e4b488a7903a7e9ed6"],["E:/blog/public/js/less.js","36157af40f1fa2bd38447017170258d3"],["E:/blog/public/js/main.js","daa594fa296eadb9c43910113c5f8341"],["E:/blog/public/js/sakura.js","d259eedc4ec9687b501f075693a5afbd"],["E:/blog/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/blog/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/blog/public/js/style.js","5e4dd5aa78a8fc4bac45ae6866b1bcea"],["E:/blog/public/js/timeDate.js","a09793407ca641e40673dab7c07012e9"],["E:/blog/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/blog/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/blog/public/link/index.html","c604b0c76ca97d9944a9e31ac0383e75"],["E:/blog/public/movies/index.html","b1e03e5f648d1228b986067e2ed9fca3"],["E:/blog/public/music/index.html","2146760a18e37f9fc4eddf83d5ab29bf"],["E:/blog/public/page/2/index.html","7714f33c4a7cff8e2669a40590542748"],["E:/blog/public/photos/index.html","0e6d82a5e4734bcb7b2e0e76cceda808"],["E:/blog/public/tags/index.html","22bd2b7054df521d6903f7090d8b6be9"],["E:/blog/public/tags/jvm/index.html","8c7c9ac0319c54ec2f921086e70a5944"],["E:/blog/public/tags/linux/index.html","95a0f24c9ed0e7a3b746e896c381ea08"],["E:/blog/public/tags/maven/index.html","1b4dc9b28c0377a084f07874cad2e84a"],["E:/blog/public/tags/mysql/index.html","0cc022235aa6fc2649b8c5bb43e4425d"],["E:/blog/public/tags/python/index.html","fcaca91e219120a1a8b615c6a73d4e32"],["E:/blog/public/tags/springBoot/index.html","e9bf9a69d7b77becf1be4e8531b93926"],["E:/blog/public/tags/springCloud/index.html","9f54230a6a93aca02bdd889f8588c284"],["E:/blog/public/tags/tomcat/index.html","ded00afe90dc22e5e2d3de856011b29d"]];
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







