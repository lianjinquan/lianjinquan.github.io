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

var precacheConfig = [["E:/blog/public/2020/09/12/mysql/mysql01/index.html","ad314138976b0352b28c020ea10379ad"],["E:/blog/public/2020/09/12/mysql/mysql02/index.html","b7cc99ca153946c6fb238f028bc0c819"],["E:/blog/public/2020/09/13/python/python01/index.html","dc0ce5167c995ee6a46301fddca94ab7"],["E:/blog/public/2020/09/15/tomcat/tomcat01/index.html","16c91ca1057f39c2d36c506c2af0f6d7"],["E:/blog/public/2020/09/17/springboot/springboot01/index.html","d7e6e8c2bbed8670c48f9527d39d8d60"],["E:/blog/public/2020/09/19/jvm/jvm01/index.html","7bca0845efd70c88532ba8e93f0b6cc0"],["E:/blog/public/2020/09/20/jvm/jvm02/index.html","207d1961329e2f7340e7ab5235941b33"],["E:/blog/public/2020/10/11/jvm/jvm03/index.html","72b7fd2d07f25b3f31d06eed2fdf82c1"],["E:/blog/public/2020/10/11/jvm/jvm04/index.html","9af2dcbd995f42a674c8eeacd83475c8"],["E:/blog/public/2020/11/09/springcloud/eureka/index.html","143f78b1e6f04a817b41d4ddc3f855cf"],["E:/blog/public/2020/11/17/springcloud/springcloud01/index.html","1354dbb242aecc49be345ff20cc3895d"],["E:/blog/public/2020/11/29/maven/maven01/index.html","828eceb3153d62edbea1f6abbdacdd8b"],["E:/blog/public/2020/12/01/linux/linux02/index.html","8e223ebd9f396e5b482189d807ef4a83"],["E:/blog/public/2020/12/07/linux/linux01/index.html","eaf621ff541218efc42ab53035f7cf53"],["E:/blog/public/2020/12/28/docker/docker01/index.html","8df9c24d1a3128eec4e4564c2547d7df"],["E:/blog/public/2021/01/21/springcloud/consul/index.html","f12e450ef92416f8356813f7c0941b2d"],["E:/blog/public/2021/01/22/springcloud/ribbon/index.html","a6eb7d17607d36facd62c504a6cd9a22"],["E:/blog/public/2021/04/04/redis/redis01/index.html","c60b69e31c1afb1edd61baadf976a6c9"],["E:/blog/public/about/index.html","6804f7b749fd6e8341cacb979446b00a"],["E:/blog/public/archives/2020/09/index.html","5cc8b837d7550e4d61dbb5a65fb812fb"],["E:/blog/public/archives/2020/10/index.html","880b8c22f5bf490584c9b8faa60cbed3"],["E:/blog/public/archives/2020/11/index.html","81421e4efa71c57a201379c86d894e21"],["E:/blog/public/archives/2020/12/index.html","7354c622341f5227c859cf5300c01f64"],["E:/blog/public/archives/2020/index.html","10a871984768a8861235feb106541d88"],["E:/blog/public/archives/2020/page/2/index.html","a4464dee3d441ff3dcb39c8573b6aeff"],["E:/blog/public/archives/2021/01/index.html","13897f5c6a50dd9196bee90c64446430"],["E:/blog/public/archives/2021/04/index.html","9511722035bf34446213b6886babc6a1"],["E:/blog/public/archives/2021/index.html","896d4df23608fbfb4631ba24fe883bc9"],["E:/blog/public/archives/index.html","56aacbd4d2d8ebb55ddd6882fb28cbce"],["E:/blog/public/archives/page/2/index.html","9f95b0e247e01fcc5d358da7c265d1f4"],["E:/blog/public/categories/docker/index.html","4a96f6a208ec23f8d5b293fd29d129cb"],["E:/blog/public/categories/index.html","ea78f812c03fc6d9314d9f6b5b5322c4"],["E:/blog/public/categories/jvm/index.html","370ccf0bd2c01d1896c8194f73a02e54"],["E:/blog/public/categories/linux/index.html","b96523ce3ed1d3df2ad96785434e6359"],["E:/blog/public/categories/maven/index.html","7c459fdd1b682c0da4a6542d2755829c"],["E:/blog/public/categories/mysql/index.html","7b0609584adbd90a5f5988eab36ac321"],["E:/blog/public/categories/python/index.html","eae050b360c44bff5be849ec5c92c96d"],["E:/blog/public/categories/redis/index.html","ba039c795407a0398eebbed3088747c4"],["E:/blog/public/categories/springBoot/index.html","9c1a4123f6b2c45ad2b70bf6081682d6"],["E:/blog/public/categories/springCloud/index.html","2a940d82ffb375c94a28ef763448ac44"],["E:/blog/public/categories/tomcat/index.html","85dec4b6500e7da34ecad92aae02484f"],["E:/blog/public/css/APlayer.min.css","23e04b27a764c86627313552571f4b11"],["E:/blog/public/css/custom.css","4047f7bf45e5d0b702870762a1faabd4"],["E:/blog/public/css/index.css","7f8127f3daf6800112dc0f74cc243415"],["E:/blog/public/css/less.css","11abb8788866d08affb7f51053bbc306"],["E:/blog/public/css/tag.css","a5ada7bfc46c5481effe7dffd27b1177"],["E:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/public/ebook/index.html","18c49e7b13f22e45d8095282dc588048"],["E:/blog/public/gallery/animal/index.html","8d5f16432e3c552a2e9e53004209c450"],["E:/blog/public/gallery/index.html","f4cf9d11e4a322cecf603cf63a774b60"],["E:/blog/public/gallery/word/index.html","a900a5211499a49e718688e8e478f6f6"],["E:/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/public/index.html","e9ee0fa6564c3914861662028a588364"],["E:/blog/public/js/botui.js","9bd324283e8898e4b488a7903a7e9ed6"],["E:/blog/public/js/less.js","36157af40f1fa2bd38447017170258d3"],["E:/blog/public/js/main.js","5641b1a6b817df7d81f465c27ed538d9"],["E:/blog/public/js/sakura.js","d259eedc4ec9687b501f075693a5afbd"],["E:/blog/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/blog/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/blog/public/js/style.js","5e4dd5aa78a8fc4bac45ae6866b1bcea"],["E:/blog/public/js/timeDate.js","a09793407ca641e40673dab7c07012e9"],["E:/blog/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/blog/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/blog/public/link/index.html","68c8d2afb3b87087de0869cf8eb79e2e"],["E:/blog/public/movies/index.html","93381df0462fbc8748c1dc77fca42379"],["E:/blog/public/music/index.html","3fb3d97f50ee480e4954ab35f458f571"],["E:/blog/public/page/2/index.html","da33113fc216e2281d84056fc73d3834"],["E:/blog/public/photos/index.html","abacab3a01c77f2c4a7d6f54f8ad5b5d"],["E:/blog/public/tags/docker/index.html","b16f632de9bed499ac742d203a134288"],["E:/blog/public/tags/index.html","882641788d159fd5130bf602f3af5ee8"],["E:/blog/public/tags/jvm/index.html","d429d33702808a664d9cb39a601e4990"],["E:/blog/public/tags/linux/index.html","9416efde15e4ae58156396fdbdbca0c7"],["E:/blog/public/tags/maven/index.html","ebdf6ead1e196005f9951dbe6c1e2cd0"],["E:/blog/public/tags/mysql/index.html","23b534ca52be7dfa1a7fafecfbcf37d9"],["E:/blog/public/tags/python/index.html","c3da0572d347e8f86945ba99f100dd42"],["E:/blog/public/tags/redis/index.html","18d7c5c9349c0d0191d763b955c1797f"],["E:/blog/public/tags/springBoot/index.html","eed28c7f406899a7412185a0afc73d04"],["E:/blog/public/tags/springCloud/index.html","cd953412bd7a925cf74b80a9f09939d1"],["E:/blog/public/tags/tomcat/index.html","1560c4257ba568ed1cd61e8422e15433"]];
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







