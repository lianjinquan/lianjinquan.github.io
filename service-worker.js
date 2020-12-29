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

var precacheConfig = [["E:/blog/public/2020/09/12/mysql/mysql01/index.html","15b49c8bf09e7551aa1038e979d1429a"],["E:/blog/public/2020/09/12/mysql/mysql02/index.html","332933d343a92fc7716bf14c9eb77466"],["E:/blog/public/2020/09/13/python/python01/index.html","d29a92b2ca70d970fceacf4ce7c7498e"],["E:/blog/public/2020/09/15/tomcat/tomcat01/index.html","bf58142b329f5710211017061265bf4d"],["E:/blog/public/2020/09/17/springboot/springboot01/index.html","97f344c8b3ebe6a86923e08e369fe321"],["E:/blog/public/2020/09/19/jvm/jvm01/index.html","d6a45b8f696e04649d7afdb18fc355c9"],["E:/blog/public/2020/09/20/jvm/jvm02/index.html","82084d5ae66a391f2050856aa9ca52de"],["E:/blog/public/2020/10/11/jvm/jvm03/index.html","e5068e69d822f25a09e21c0a25d479cc"],["E:/blog/public/2020/10/11/jvm/jvm04/index.html","e636c4aa64d8d27d0bd4731357cb85b6"],["E:/blog/public/2020/11/09/springcloud/springcloud02/index.html","d30ee1dd689411e448d1d312401ad3d5"],["E:/blog/public/2020/11/17/springcloud/springcloud01/index.html","acf8ea56dd78301c1ad13e7f9928eb3d"],["E:/blog/public/2020/11/29/maven/maven01/index.html","d7b47b3ea47df5078b701e858853e7f7"],["E:/blog/public/2020/12/01/linux/linux02/index.html","f494e0887ea91e9e3da1e25f0658259b"],["E:/blog/public/2020/12/07/linux/linux01/index.html","c3f75f2df3e486abdfb7e92555984b34"],["E:/blog/public/2020/12/18/linux/linux03/index.html","b86b060186bd76e962a836bc6c8aff97"],["E:/blog/public/2020/12/24/linux/linux04/index.html","0bfeae7431dfde761e0f38fa0ad1d757"],["E:/blog/public/2020/12/25/linux/linux05/index.html","7f5cc4561d66d207fb739fd467492916"],["E:/blog/public/Gallery/index.html","3b59a0561dd50948f732daf8fa7fff2f"],["E:/blog/public/Gallery/marvel/index.html","e512024f3065cc1c477079094e0d3d26"],["E:/blog/public/Gallery/ohmygirl/index.html","0a035a795dde3ca25908bbb0ab47541d"],["E:/blog/public/Gallery/wallpaper/index.html","8ac725362b0faa639245b1e9c7d4394c"],["E:/blog/public/about/index.html","60a521f4aa3b6e9f28325a671f0448a0"],["E:/blog/public/archives/2020/09/index.html","4e277403e671d68da47067a344512a49"],["E:/blog/public/archives/2020/10/index.html","c6b3f34b77f2ad1ac8bbec599d5bc23a"],["E:/blog/public/archives/2020/11/index.html","2d766f44298f49b0382a17fae7595828"],["E:/blog/public/archives/2020/12/index.html","c1aab7918dd3d9270d9fcaf23be673b6"],["E:/blog/public/archives/2020/index.html","b9fa98d376862a79ef70a0e3756df4b3"],["E:/blog/public/archives/2020/page/2/index.html","19836ddc08474feec6019f9745d4179a"],["E:/blog/public/archives/index.html","6382de08496d0d0555db9eb87d75ade1"],["E:/blog/public/archives/page/2/index.html","9a53a3d3402aa192881b70e96ef3327c"],["E:/blog/public/categories/index.html","ba5c09e4acf7cae68df4efed79760f97"],["E:/blog/public/categories/jvm/index.html","acde58b01cfc5a34bc8e25a6755936cd"],["E:/blog/public/categories/linux/index.html","3f1b6ee68c4140ca99f085bb2a9d043e"],["E:/blog/public/categories/maven/index.html","f1c8d8eb233370276d52ffb6e9669acd"],["E:/blog/public/categories/mysql/index.html","663275e552b3441ecfae70375a6992fd"],["E:/blog/public/categories/python/index.html","4ad44732056a63d32057608416313222"],["E:/blog/public/categories/springBoot/index.html","b604f774cb83124fde10a730331f4b83"],["E:/blog/public/categories/springCloud/index.html","11ef13b210ed6869d49d254d1bf664d6"],["E:/blog/public/categories/tomcat/index.html","d66409827c66ed48b93a3c927e1e741f"],["E:/blog/public/css/APlayer.min.css","23e04b27a764c86627313552571f4b11"],["E:/blog/public/css/custom.css","4047f7bf45e5d0b702870762a1faabd4"],["E:/blog/public/css/index.css","f70097ade2077e55b009f5908803e077"],["E:/blog/public/css/less.css","11abb8788866d08affb7f51053bbc306"],["E:/blog/public/css/tag.css","a5ada7bfc46c5481effe7dffd27b1177"],["E:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/public/ebook/index.html","92d1edf6f28cf99fd2f903876cc668d3"],["E:/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/blog/public/index.html","665bc08fd32d578ed394be8681dd27b4"],["E:/blog/public/js/botui.js","9bd324283e8898e4b488a7903a7e9ed6"],["E:/blog/public/js/less.js","36157af40f1fa2bd38447017170258d3"],["E:/blog/public/js/main.js","daa594fa296eadb9c43910113c5f8341"],["E:/blog/public/js/sakura.js","d259eedc4ec9687b501f075693a5afbd"],["E:/blog/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/blog/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/blog/public/js/style.js","5e4dd5aa78a8fc4bac45ae6866b1bcea"],["E:/blog/public/js/timeDate.js","a09793407ca641e40673dab7c07012e9"],["E:/blog/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/blog/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/blog/public/link/index.html","f98c71cb7c4495cd04585d8bb5f829f2"],["E:/blog/public/movies/index.html","44a2f383172a8424b6b60482e3648e28"],["E:/blog/public/music/index.html","6771854c5e8feb0df607b1d760d1987c"],["E:/blog/public/page/2/index.html","c0522bb3d215f7ed3e2479722ad6bcc9"],["E:/blog/public/photos/index.html","03ea4b541965364f7f826fda41ef8235"],["E:/blog/public/tags/index.html","5fbc1a0b547e1205b58206678071e6c4"],["E:/blog/public/tags/jvm/index.html","ad7a9410180edd6faada92ccd2589b3e"],["E:/blog/public/tags/linux/index.html","252d1e241a9bbc83132a35a887396f96"],["E:/blog/public/tags/maven/index.html","125ef0078080a48e300b2888846bc508"],["E:/blog/public/tags/mysql/index.html","14413cb0a4c56f6493498240c4a39e6f"],["E:/blog/public/tags/python/index.html","696baaf525ad6240e9e87ec5c0fbb467"],["E:/blog/public/tags/springBoot/index.html","05f9b695b998b8b8c8f0c57bc7273eba"],["E:/blog/public/tags/springCloud/index.html","5113eee4a5daca1552c5d36996f41829"],["E:/blog/public/tags/tomcat/index.html","71e34a9f3b93e6192d1d3d612f7eee90"]];
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







