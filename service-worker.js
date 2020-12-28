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

var precacheConfig = [["E:/blog/public/2020/09/12/mysql/mysql01/index.html","15b49c8bf09e7551aa1038e979d1429a"],["E:/blog/public/2020/09/12/mysql/mysql02/index.html","332933d343a92fc7716bf14c9eb77466"],["E:/blog/public/2020/09/13/python/python01/index.html","d29a92b2ca70d970fceacf4ce7c7498e"],["E:/blog/public/2020/09/15/tomcat/tomcat01/index.html","bf58142b329f5710211017061265bf4d"],["E:/blog/public/2020/09/17/springboot/springboot01/index.html","97f344c8b3ebe6a86923e08e369fe321"],["E:/blog/public/2020/09/19/jvm/jvm01/index.html","d6a45b8f696e04649d7afdb18fc355c9"],["E:/blog/public/2020/09/20/jvm/jvm02/index.html","82084d5ae66a391f2050856aa9ca52de"],["E:/blog/public/2020/10/11/jvm/jvm03/index.html","e5068e69d822f25a09e21c0a25d479cc"],["E:/blog/public/2020/10/11/jvm/jvm04/index.html","e636c4aa64d8d27d0bd4731357cb85b6"],["E:/blog/public/2020/11/09/springcloud/springcloud02/index.html","d30ee1dd689411e448d1d312401ad3d5"],["E:/blog/public/2020/11/17/springcloud/springcloud01/index.html","acf8ea56dd78301c1ad13e7f9928eb3d"],["E:/blog/public/2020/11/29/maven/maven01/index.html","d7b47b3ea47df5078b701e858853e7f7"],["E:/blog/public/2020/12/01/linux/linux02/index.html","f494e0887ea91e9e3da1e25f0658259b"],["E:/blog/public/2020/12/07/linux/linux01/index.html","c3f75f2df3e486abdfb7e92555984b34"],["E:/blog/public/2020/12/18/linux/linux03/index.html","b86b060186bd76e962a836bc6c8aff97"],["E:/blog/public/2020/12/24/linux/linux04/index.html","0bfeae7431dfde761e0f38fa0ad1d757"],["E:/blog/public/2020/12/25/linux/linux05/index.html","48e2b6f91b75dd7062ee67e66611b18e"],["E:/blog/public/Gallery/index.html","0a61d286b3d4521cdfbc88c4b88afff2"],["E:/blog/public/Gallery/marvel/index.html","89976f12292226068fcd8669744cd4fe"],["E:/blog/public/Gallery/ohmygirl/index.html","fd5dc46a21da5616beae34cb69ab1c83"],["E:/blog/public/Gallery/wallpaper/index.html","80930c0800baef1a15c655b9730127b4"],["E:/blog/public/about/index.html","e347bb444411d18ab9669ebbdc739da7"],["E:/blog/public/archives/2020/09/index.html","0d0f77abf0464c9b527d052806e1b5b9"],["E:/blog/public/archives/2020/10/index.html","1d57d6f6ad5a851bcd40c07539a6cc1e"],["E:/blog/public/archives/2020/11/index.html","8ef9557e2c9a579d9bc23cf2eec90074"],["E:/blog/public/archives/2020/12/index.html","2e02dbf4578aeabfb13782af22ea2580"],["E:/blog/public/archives/2020/index.html","47c6e0df7e4231056cf6205bae339658"],["E:/blog/public/archives/2020/page/2/index.html","f1ee6ea9f9aa29452df889ce532277b7"],["E:/blog/public/archives/index.html","733462b42c8485f57b72bf97bcc03bfa"],["E:/blog/public/archives/page/2/index.html","1e399c9819c95f7959149ea9c52b4891"],["E:/blog/public/categories/index.html","b20eb7f1dc7ab19f960954aac1525c43"],["E:/blog/public/categories/jvm/index.html","0e570c21c44edd7d88ad8e8af71638f1"],["E:/blog/public/categories/linux/index.html","9f3889467268a95607bccd65571a35c0"],["E:/blog/public/categories/maven/index.html","8c7f7fbb40eb11eb1eb216042b5ecba4"],["E:/blog/public/categories/mysql/index.html","4a4e9b52445480d67cb7137780e6365b"],["E:/blog/public/categories/python/index.html","5e89f89bb58be2738d894aa848a8e135"],["E:/blog/public/categories/springBoot/index.html","de0f0528dab898b088622fbfe9a4696a"],["E:/blog/public/categories/springCloud/index.html","11baf8f204b8bac9278b8758f31a9bbd"],["E:/blog/public/categories/tomcat/index.html","c52c2f7509e118340594235e93a77609"],["E:/blog/public/css/APlayer.min.css","23e04b27a764c86627313552571f4b11"],["E:/blog/public/css/custom.css","4047f7bf45e5d0b702870762a1faabd4"],["E:/blog/public/css/index.css","f70097ade2077e55b009f5908803e077"],["E:/blog/public/css/less.css","11abb8788866d08affb7f51053bbc306"],["E:/blog/public/css/tag.css","a5ada7bfc46c5481effe7dffd27b1177"],["E:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/public/ebook/index.html","3692be70db88f093fe439e72112ee6ae"],["E:/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/blog/public/index.html","fef402149a287523c4114ea9fe20ff3e"],["E:/blog/public/js/botui.js","9bd324283e8898e4b488a7903a7e9ed6"],["E:/blog/public/js/less.js","36157af40f1fa2bd38447017170258d3"],["E:/blog/public/js/main.js","daa594fa296eadb9c43910113c5f8341"],["E:/blog/public/js/sakura.js","d259eedc4ec9687b501f075693a5afbd"],["E:/blog/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/blog/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/blog/public/js/style.js","5e4dd5aa78a8fc4bac45ae6866b1bcea"],["E:/blog/public/js/timeDate.js","a09793407ca641e40673dab7c07012e9"],["E:/blog/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/blog/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/blog/public/link/index.html","e85fbccb5749ff16bd2432af76916998"],["E:/blog/public/movies/index.html","b27a07d02fb64c56638ad995dca5dcac"],["E:/blog/public/music/index.html","0968abb722451e5524864cbb0fb4d545"],["E:/blog/public/page/2/index.html","e0d7b176e814f93a12e8d33ce63df3b1"],["E:/blog/public/photos/index.html","a16ecda4aef180d3b4b64c551f2e1651"],["E:/blog/public/tags/index.html","67296eefcdfb71ed65c258afb0340936"],["E:/blog/public/tags/jvm/index.html","3dbbb4d6063e6fa4eba7a779dde693a0"],["E:/blog/public/tags/linux/index.html","92f563522ded87bc131e816d458559d2"],["E:/blog/public/tags/maven/index.html","3e303b385ff451a5975771a4a1837d44"],["E:/blog/public/tags/mysql/index.html","a461b90ee0c4ef3ac29bf4a80900bf16"],["E:/blog/public/tags/python/index.html","70340417bd0a9d5fe2a21edb4d30eb02"],["E:/blog/public/tags/springBoot/index.html","6744e02b43b621692690744c55940d20"],["E:/blog/public/tags/springCloud/index.html","a1dbde49f0c75cc550e633a8e6b5469f"],["E:/blog/public/tags/tomcat/index.html","c7420f9ef71bbb81527449a7f1f7eb6b"]];
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







