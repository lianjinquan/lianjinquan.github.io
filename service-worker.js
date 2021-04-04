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

var precacheConfig = [["E:/blog/public/2020/09/12/mysql/mysql01/index.html","ba7acd4c52e8d9148f3f7ed39345dac7"],["E:/blog/public/2020/09/12/mysql/mysql02/index.html","1ac9c1d323ee56220c202c1eaf9f7bf7"],["E:/blog/public/2020/09/13/python/python01/index.html","97a8e255859cf21e8e4a8cccbb5ff6ac"],["E:/blog/public/2020/09/15/tomcat/tomcat01/index.html","c80912dff44c4cc1ac05b374545b4e9f"],["E:/blog/public/2020/09/17/springboot/springboot01/index.html","a062ef4c83b7edb3b0a84c2795cc1744"],["E:/blog/public/2020/09/19/jvm/jvm01/index.html","1169133e447cb5a5c8384caea02e1d39"],["E:/blog/public/2020/09/20/jvm/jvm02/index.html","b1a9224617f002349aefac87b2df1e9b"],["E:/blog/public/2020/10/11/jvm/jvm03/index.html","b2074f79fa2c407e434ae099f184e2a8"],["E:/blog/public/2020/10/11/jvm/jvm04/index.html","626056c857edb6bc0639752b78ac6f9e"],["E:/blog/public/2020/11/09/springcloud/eureka/index.html","87e2bad294fa1ffeae7e7a4b439fb9f1"],["E:/blog/public/2020/11/17/springcloud/springcloud01/index.html","bec73223f9fee0aac2ad99ae598a1a21"],["E:/blog/public/2020/11/29/maven/maven01/index.html","e9cf400932cbdfc23e65a1fc585ada2f"],["E:/blog/public/2020/12/01/linux/linux02/index.html","fe1b20b414cb46eaa8eff46b96619e36"],["E:/blog/public/2020/12/07/linux/linux01/index.html","e07bf78f64cccab696bf363884a6ec01"],["E:/blog/public/2020/12/18/linux/linux03/index.html","4b5e91aced1347d5c175729980672d9d"],["E:/blog/public/2020/12/24/linux/linux04/index.html","61e2665124d99d97d4ee88c4ec93cee4"],["E:/blog/public/2020/12/25/linux/linux05/index.html","f6064217ebc3adbe455b8917c544bbe8"],["E:/blog/public/2020/12/28/docker/docker01/index.html","30e56c77b20237df26dbe1d4e76e50e9"],["E:/blog/public/2021/01/21/springcloud/consul/index.html","391ae549d30f8d85e3eb792e3509bafc"],["E:/blog/public/2021/01/22/springcloud/ribbon/index.html","1665c89e27518c86c6740b4ffc23fc9c"],["E:/blog/public/2021/04/04/redis/redis01/index.html","176d9b66c80d543bf1c82f819a60e4c6"],["E:/blog/public/about/index.html","1363311a109e3df6d50f4a4fe66c210b"],["E:/blog/public/archives/2020/09/index.html","a2de269f838843ecfa82d91d335a6302"],["E:/blog/public/archives/2020/10/index.html","a2188e6c68b8aed049f7a6a78e471e40"],["E:/blog/public/archives/2020/11/index.html","a76a67a04ff74053b6d5fb65b12f7f98"],["E:/blog/public/archives/2020/12/index.html","176ce0c6f0f7e6b0df1e4814828c5f8b"],["E:/blog/public/archives/2020/index.html","7af6c3ac557339e1899d3ab63f90f521"],["E:/blog/public/archives/2020/page/2/index.html","48955510abda283fc674c39edcf8d5e5"],["E:/blog/public/archives/2021/01/index.html","6d43986310b418d2d6b9fac17e603343"],["E:/blog/public/archives/2021/04/index.html","99ce43f2036900582fad59286cf59f74"],["E:/blog/public/archives/2021/index.html","4c67453d8318971e8a7af950a9f4df2e"],["E:/blog/public/archives/index.html","a55ae6111f4bab45b7c628e12dcf25f5"],["E:/blog/public/archives/page/2/index.html","fc3a7a983d344977a18955038ec5b935"],["E:/blog/public/archives/page/3/index.html","794339ec8800221fb7ddea9ca71ccd85"],["E:/blog/public/categories/docker/index.html","79f031472d2a2b205850e9d6cae803e6"],["E:/blog/public/categories/index.html","0a6a06d397d491a1f038b67dc4cf9e12"],["E:/blog/public/categories/jvm/index.html","fc7160a9698bfb1cdfd48dcf9ba88d64"],["E:/blog/public/categories/linux/index.html","d5798d41106fa4ffee28fe3ff243d2c3"],["E:/blog/public/categories/maven/index.html","8f7c3c792d3ce64fdaee9fb49c1fcd30"],["E:/blog/public/categories/mysql/index.html","74496097de88e567657aee3efd43ca8f"],["E:/blog/public/categories/python/index.html","864d8fdbcd5303fb7d5fc351e9af3fac"],["E:/blog/public/categories/redis/index.html","b0a3ed5343267adfa66b0befcfab7023"],["E:/blog/public/categories/springBoot/index.html","ba736e7b630ee5eab3eeafe57ade15fe"],["E:/blog/public/categories/springCloud/index.html","1d5fdcec0e507eccdecc9a7874e911d3"],["E:/blog/public/categories/tomcat/index.html","d17f29d45f37742baacb9e3450457e52"],["E:/blog/public/css/APlayer.min.css","23e04b27a764c86627313552571f4b11"],["E:/blog/public/css/custom.css","4047f7bf45e5d0b702870762a1faabd4"],["E:/blog/public/css/index.css","6f715b07fb36fcf516d71ee004e9b376"],["E:/blog/public/css/less.css","11abb8788866d08affb7f51053bbc306"],["E:/blog/public/css/tag.css","a5ada7bfc46c5481effe7dffd27b1177"],["E:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/public/ebook/index.html","263a25c2cb9413a339256b0981540fd1"],["E:/blog/public/gallery/animal/index.html","2898e284c1ea38edcea4e23cada5f84b"],["E:/blog/public/gallery/index.html","c0e15de814bcbbf62ed0310c6b0b7ad8"],["E:/blog/public/gallery/word/index.html","e03cf407c5bd73a3deff3bfa1832d888"],["E:/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/public/index.html","888011755434b65e5b989eb8c0d4910d"],["E:/blog/public/js/botui.js","9bd324283e8898e4b488a7903a7e9ed6"],["E:/blog/public/js/less.js","36157af40f1fa2bd38447017170258d3"],["E:/blog/public/js/main.js","5641b1a6b817df7d81f465c27ed538d9"],["E:/blog/public/js/sakura.js","d259eedc4ec9687b501f075693a5afbd"],["E:/blog/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/blog/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/blog/public/js/style.js","5e4dd5aa78a8fc4bac45ae6866b1bcea"],["E:/blog/public/js/timeDate.js","a09793407ca641e40673dab7c07012e9"],["E:/blog/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/blog/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/blog/public/link/index.html","7274661a1849ba0a9fec1f1da3605629"],["E:/blog/public/movies/index.html","610fd35fb49a62e106edc698b2c6f39b"],["E:/blog/public/music/index.html","f358897a0c1422929f99dd9ab56b9ed3"],["E:/blog/public/page/2/index.html","59b65805b8b48c451f533acf4aed034b"],["E:/blog/public/page/3/index.html","07cd01ae5391fae82185baec190ed5ff"],["E:/blog/public/photos/index.html","6ba6a8f0b16160428676e0e149f4b89e"],["E:/blog/public/tags/docker/index.html","6d6ef96d25783fc73e75fb8330da2601"],["E:/blog/public/tags/index.html","82f58b6fb45c958de345b8fc8f487383"],["E:/blog/public/tags/jvm/index.html","fa29728b5fe81c79df541608e9c82990"],["E:/blog/public/tags/linux/index.html","dfdf50d9c36c1bf0e6fc444abff52ca9"],["E:/blog/public/tags/maven/index.html","b5f4a80c17fea570939ae014d57ed861"],["E:/blog/public/tags/mysql/index.html","26a4326105390843b4b7b321fd07f2d1"],["E:/blog/public/tags/python/index.html","acd13d524e92536959a0733f89460fbd"],["E:/blog/public/tags/redis/index.html","2a53ed3006941c2bce89a2d35f5391e8"],["E:/blog/public/tags/springBoot/index.html","e257faba2b7cbf89cda846b798354df8"],["E:/blog/public/tags/springCloud/index.html","d38d8a6f1a6a717e64b896ea404a743e"],["E:/blog/public/tags/tomcat/index.html","ae8132c6dfaaa8052f3075a304e1b745"]];
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







