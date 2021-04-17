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

var precacheConfig = [["E:/blog/public/2020/09/12/mysql/mysql01/index.html","d7b3975a5cc587010e0feb3adeab70cb"],["E:/blog/public/2020/09/12/mysql/mysql02/index.html","f6df0c29ad0a202b1b4650f1050964b9"],["E:/blog/public/2020/09/13/python/python01/index.html","972fa109f689600834036753c9422690"],["E:/blog/public/2020/09/15/tomcat/tomcat01/index.html","b455d54482709246ad458b32c2c2440f"],["E:/blog/public/2020/09/17/springboot/springboot01/index.html","85dfb68e21700125b31017a2b0ba4f42"],["E:/blog/public/2020/09/19/jvm/jvm01/index.html","5bd9666b2596b021e11970430ac55068"],["E:/blog/public/2020/09/20/jvm/jvm02/index.html","5e3a79ec3d0bce34a0334b112cd49db1"],["E:/blog/public/2020/10/11/jvm/jvm03/index.html","596fd7fbec732c2a860595a71d0253a5"],["E:/blog/public/2020/10/11/jvm/jvm04/index.html","d4824f88f2a8fdac2856ad0e128812ea"],["E:/blog/public/2020/11/09/springcloud/eureka/index.html","c9b5a6a0fcfa64d732cb627837307a03"],["E:/blog/public/2020/11/17/springcloud/springcloud01/index.html","9d6fa9870086fcac76f71e1f77882584"],["E:/blog/public/2020/11/29/maven/maven01/index.html","03c3253aa47740e670cba1c9cf84c6ed"],["E:/blog/public/2020/12/01/linux/linux02/index.html","b2a1157e59840ec7c2f0f97c9947e87f"],["E:/blog/public/2020/12/07/java/java8/index.html","21893099f258afa036747a766eefc146"],["E:/blog/public/2020/12/07/linux/linux01/index.html","da7aebbd53d1e613d6df4faf72842542"],["E:/blog/public/2020/12/28/docker/docker01/index.html","3cd7917b152ed7b167cd51212da56490"],["E:/blog/public/2021/01/21/springcloud/consul/index.html","4535fccba29b6d224d435b6e2d467e91"],["E:/blog/public/2021/01/22/springcloud/ribbon/index.html","8927094e29a59b1e9aa3931d4ef917ac"],["E:/blog/public/2021/04/04/redis/redis01/index.html","98aea384c3afb617e24365f54df88743"],["E:/blog/public/about/index.html","9f58b46ba80c01c8b6df987dafc0f563"],["E:/blog/public/archives/2020/09/index.html","b50f73a1cbe92a99980b75f5cd1866a3"],["E:/blog/public/archives/2020/10/index.html","d2d007838933c024fd8f9c99480d2403"],["E:/blog/public/archives/2020/11/index.html","9458afa39ad7e3e84006f48c8f64da46"],["E:/blog/public/archives/2020/12/index.html","053c1d0bbdc06744db3832702bac328b"],["E:/blog/public/archives/2020/index.html","e880d52bd5959d91b40f83235f5ec2d2"],["E:/blog/public/archives/2020/page/2/index.html","7cdd6634af6bcef9f2b5669cb72ce4ec"],["E:/blog/public/archives/2021/01/index.html","633fa3c808cf8c363689a8158a9e9b80"],["E:/blog/public/archives/2021/04/index.html","c8333b797c32b3eef3cb03f2bd8a6949"],["E:/blog/public/archives/2021/index.html","161f6f046d51085bfda9c5f05f31e644"],["E:/blog/public/archives/index.html","be9073dcfbd723d615ae7ec74fae3f22"],["E:/blog/public/archives/page/2/index.html","8aed42b40dd11282ec239be4af844ec2"],["E:/blog/public/categories/docker/index.html","d7c5389de5dd2277051b811933f11896"],["E:/blog/public/categories/index.html","175704c4dff509c07dd154e67062c9fe"],["E:/blog/public/categories/java/index.html","0a860f90acd02545707e1443f04953c6"],["E:/blog/public/categories/jvm/index.html","5520619a4c22fa246ef04bb734037e28"],["E:/blog/public/categories/linux/index.html","ab708ff01eac18f4b4ffc73be530792c"],["E:/blog/public/categories/maven/index.html","c0a2201307d1fbd0c53fc24d4b51e682"],["E:/blog/public/categories/mysql/index.html","07a844b88a2bbcc0da7bc8dcf81d0f39"],["E:/blog/public/categories/python/index.html","730dca698910d0eab56a7b6eb39a7d90"],["E:/blog/public/categories/redis/index.html","0024112b9d84edbe293bd135b3073701"],["E:/blog/public/categories/springBoot/index.html","2b8c184166c0f6a0db9b8424b4aa4975"],["E:/blog/public/categories/springCloud/index.html","cc7acc22cca97824cedb620d6e1016b3"],["E:/blog/public/categories/tomcat/index.html","bf2120f68cd700c4067a69fb5fcd86a9"],["E:/blog/public/css/APlayer.min.css","23e04b27a764c86627313552571f4b11"],["E:/blog/public/css/custom.css","4047f7bf45e5d0b702870762a1faabd4"],["E:/blog/public/css/index.css","7f8127f3daf6800112dc0f74cc243415"],["E:/blog/public/css/less.css","11abb8788866d08affb7f51053bbc306"],["E:/blog/public/css/tag.css","a5ada7bfc46c5481effe7dffd27b1177"],["E:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/public/ebook/index.html","b6a7d8c90dcfed3ed4c66ce2cfa008b1"],["E:/blog/public/gallery/animal/index.html","c8796494ca63b8e9ab8ce831b2a2543b"],["E:/blog/public/gallery/index.html","921c80a9ad1b2f9662cbf9d58fcc3e16"],["E:/blog/public/gallery/word/index.html","61192c927a44c265dc03b6c44d38eb91"],["E:/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/public/index.html","02b2b68c3a942bfc81cd7aa387fc8750"],["E:/blog/public/js/botui.js","9bd324283e8898e4b488a7903a7e9ed6"],["E:/blog/public/js/less.js","36157af40f1fa2bd38447017170258d3"],["E:/blog/public/js/main.js","5641b1a6b817df7d81f465c27ed538d9"],["E:/blog/public/js/sakura.js","d259eedc4ec9687b501f075693a5afbd"],["E:/blog/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/blog/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/blog/public/js/style.js","5e4dd5aa78a8fc4bac45ae6866b1bcea"],["E:/blog/public/js/timeDate.js","a09793407ca641e40673dab7c07012e9"],["E:/blog/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/blog/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/blog/public/link/index.html","a9b269b52da35f21e1805c243157edee"],["E:/blog/public/movies/index.html","67db31b71b251ba3d76d2f6324784c48"],["E:/blog/public/music/index.html","ef5347a207c44337e187dfa599dbd058"],["E:/blog/public/page/2/index.html","b495c3bdab7bacfbb922fdb5c103c629"],["E:/blog/public/photos/index.html","a74ebff06ab2d8a5cd00072e7ad7035e"],["E:/blog/public/tags/docker/index.html","4bf96669aac6f4a6f73f118fc162c484"],["E:/blog/public/tags/index.html","18496075c59936b120507a9827ea8975"],["E:/blog/public/tags/java/index.html","a47736b5d4101fe93dfcaa512d519be6"],["E:/blog/public/tags/jvm/index.html","613b54d039e6b2f6853960bb6b33e974"],["E:/blog/public/tags/linux/index.html","971e2df020d2bfb44fd7e44e9bbf6d5f"],["E:/blog/public/tags/maven/index.html","7004f4c71e79e46903add10877e2ea29"],["E:/blog/public/tags/mysql/index.html","455d82633fc4831292f1f0253c7f52ed"],["E:/blog/public/tags/python/index.html","ecd63a274d1f254ecd64629ae7e963dd"],["E:/blog/public/tags/redis/index.html","b813a38ab36d0b57ff8011d09a5f1545"],["E:/blog/public/tags/springBoot/index.html","45411f6621b36f2d144b3133278f53b3"],["E:/blog/public/tags/springCloud/index.html","c4bfa0d63a364088c90709be1d1da1c3"],["E:/blog/public/tags/tomcat/index.html","a5b44c65dd45a8c64ad09f961e2a5794"]];
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







