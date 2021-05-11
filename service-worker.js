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

var precacheConfig = [["D:/blog/public/2020/09/12/mysql/mysql01/index.html","d7b3975a5cc587010e0feb3adeab70cb"],["D:/blog/public/2020/09/12/mysql/mysql02/index.html","f6df0c29ad0a202b1b4650f1050964b9"],["D:/blog/public/2020/09/13/python/python01/index.html","972fa109f689600834036753c9422690"],["D:/blog/public/2020/09/15/tomcat/tomcat01/index.html","b455d54482709246ad458b32c2c2440f"],["D:/blog/public/2020/09/17/springboot/springboot01/index.html","85dfb68e21700125b31017a2b0ba4f42"],["D:/blog/public/2020/09/19/jvm/jvm01/index.html","39a9bc04614d9b01fee66a8c1f4bddcd"],["D:/blog/public/2020/09/20/jvm/jvm02/index.html","f2db679c307536344921b9385ed9e9d5"],["D:/blog/public/2020/10/11/jvm/jvm03/index.html","3f0c06d21872f62eeea58ed0b0af8c68"],["D:/blog/public/2020/10/11/jvm/jvm04/index.html","f160680fc4bc348dfe8a6618e4e0556b"],["D:/blog/public/2020/11/09/springcloud/eureka/index.html","73b4152540e9a0060028cf774a809a59"],["D:/blog/public/2020/11/17/springcloud/springcloud01/index.html","9d6fa9870086fcac76f71e1f77882584"],["D:/blog/public/2020/11/29/maven/maven01/index.html","03c3253aa47740e670cba1c9cf84c6ed"],["D:/blog/public/2020/12/01/linux/linux02/index.html","b2a1157e59840ec7c2f0f97c9947e87f"],["D:/blog/public/2020/12/07/java/java8/index.html","eaabd6d558e5ee04f0db52e2171e1349"],["D:/blog/public/2020/12/07/linux/linux01/index.html","da7aebbd53d1e613d6df4faf72842542"],["D:/blog/public/2020/12/28/docker/docker01/index.html","3cd7917b152ed7b167cd51212da56490"],["D:/blog/public/2021/01/21/springcloud/consul/index.html","4535fccba29b6d224d435b6e2d467e91"],["D:/blog/public/2021/01/22/springcloud/ribbon/index.html","8927094e29a59b1e9aa3931d4ef917ac"],["D:/blog/public/2021/04/04/redis/redis01/index.html","98aea384c3afb617e24365f54df88743"],["D:/blog/public/about/index.html","5f4a6ddd68bfc9900b5dd01678e7a2fe"],["D:/blog/public/archives/2020/09/index.html","c8c156291736266560847511b0f3055e"],["D:/blog/public/archives/2020/10/index.html","6f2a9985436941854fd7ed02b2579a67"],["D:/blog/public/archives/2020/11/index.html","b8500814c4e374c282eb16ef615fd180"],["D:/blog/public/archives/2020/12/index.html","ab1c88c5ae1285f5d939fa17d4d136a9"],["D:/blog/public/archives/2020/index.html","52f88584c737015cdcc8d350cbd2c88b"],["D:/blog/public/archives/2020/page/2/index.html","a3aa0a62f25cc691dbb26053e83bba56"],["D:/blog/public/archives/2021/01/index.html","4cd07380b8831485bc9ca48cbc84aac4"],["D:/blog/public/archives/2021/04/index.html","97dbb0321c6cbc9bd5078239ca0b744c"],["D:/blog/public/archives/2021/index.html","023443b01a3b1d54de4209a2ea91778f"],["D:/blog/public/archives/index.html","88347dfc7f784e54a4ed573ba980f351"],["D:/blog/public/archives/page/2/index.html","8d8737f30c5cff50c11d2debee873d8b"],["D:/blog/public/categories/docker/index.html","e1ef13d6ab14f3efe6d75504b1fbf18b"],["D:/blog/public/categories/index.html","9ab6481b26a3c626b8dac5ba1fac61f8"],["D:/blog/public/categories/java/index.html","40679e85b777c53f328cf706d75235f6"],["D:/blog/public/categories/jvm/index.html","242a9120db706f66bc65baeb1d82052e"],["D:/blog/public/categories/linux/index.html","7099b3694c54c29bc2e6e5d1b76f3bcd"],["D:/blog/public/categories/maven/index.html","4e6372019af2a547580a6f1a306d5553"],["D:/blog/public/categories/mysql/index.html","f7dd84afd25c0d662b3017e54a9967d0"],["D:/blog/public/categories/python/index.html","6368c98b4ccc18e875e5346db6fb242c"],["D:/blog/public/categories/redis/index.html","8e6ac8f4bc40c531074bb99a7c63a8d9"],["D:/blog/public/categories/springBoot/index.html","f8f256180ff79b73e5fd6a9cb98f56c1"],["D:/blog/public/categories/springCloud/index.html","e80133d7114605126afc1def73df636c"],["D:/blog/public/categories/tomcat/index.html","80000eaa5efd7a0819030352c41acc29"],["D:/blog/public/css/APlayer.min.css","23e04b27a764c86627313552571f4b11"],["D:/blog/public/css/custom.css","4047f7bf45e5d0b702870762a1faabd4"],["D:/blog/public/css/index.css","7f8127f3daf6800112dc0f74cc243415"],["D:/blog/public/css/less.css","11abb8788866d08affb7f51053bbc306"],["D:/blog/public/css/tag.css","a5ada7bfc46c5481effe7dffd27b1177"],["D:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/ebook/index.html","0738a51cc00d581d234e7e46e5d18588"],["D:/blog/public/gallery/animal/index.html","cc956a0426713b0ac674cbd4c353fd4c"],["D:/blog/public/gallery/index.html","e5f632e4fd33dfc3c205a0fdef701355"],["D:/blog/public/gallery/word/index.html","ee391ba8e929355c9fcda5e9c0955731"],["D:/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/blog/public/index.html","0fab92e79c1033fe54a6bed2e323261a"],["D:/blog/public/js/botui.js","9bd324283e8898e4b488a7903a7e9ed6"],["D:/blog/public/js/less.js","36157af40f1fa2bd38447017170258d3"],["D:/blog/public/js/main.js","5641b1a6b817df7d81f465c27ed538d9"],["D:/blog/public/js/sakura.js","d259eedc4ec9687b501f075693a5afbd"],["D:/blog/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["D:/blog/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["D:/blog/public/js/style.js","5e4dd5aa78a8fc4bac45ae6866b1bcea"],["D:/blog/public/js/timeDate.js","a09793407ca641e40673dab7c07012e9"],["D:/blog/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["D:/blog/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["D:/blog/public/link/index.html","ef11a161eacd0bd1c863ba55e98dc28e"],["D:/blog/public/movies/index.html","227e558e42b9af92e6e734ce8d9fef68"],["D:/blog/public/music/index.html","afa501b05a2d02b08a5db9790e4e3bf3"],["D:/blog/public/page/2/index.html","67747c4f5443a2537bc288e899a753e8"],["D:/blog/public/photos/index.html","8138a969c7a8069c3a0560b9e2948236"],["D:/blog/public/tags/docker/index.html","a934deb012b30bc53f25c3c9f7c9a456"],["D:/blog/public/tags/index.html","caadfb5f9fa640068fefd22da95d9605"],["D:/blog/public/tags/java/index.html","6af284551815768db74b21b04f7baaea"],["D:/blog/public/tags/jvm/index.html","7b211f87cd2d2fa50c92ae142bd06b5c"],["D:/blog/public/tags/linux/index.html","c31149f392053f387373fff9197b9fbc"],["D:/blog/public/tags/maven/index.html","5db2feb09ffdeb39c0fc8663504e91b1"],["D:/blog/public/tags/mysql/index.html","7483dfc21808839d99dc7b351b7ed45a"],["D:/blog/public/tags/python/index.html","f96b7bd02bcac8ae6119d502598e76d1"],["D:/blog/public/tags/redis/index.html","5c9e38016afb3b83c94b9ffc2b9156d0"],["D:/blog/public/tags/springBoot/index.html","6c51813458846359f4f521dc3313d141"],["D:/blog/public/tags/springCloud/index.html","49ab8178de6fc69473cad4833eecb43a"],["D:/blog/public/tags/tomcat/index.html","984f518dee356046f687b76f78c52ecd"]];
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







