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

var precacheConfig = [["D:/blog/public/2020/09/12/mysql/mysql01/index.html","20fc1b5c47fce985268bba1afed30fc2"],["D:/blog/public/2020/09/12/mysql/mysql02/index.html","043d45b87bae685c900152e1371fddcd"],["D:/blog/public/2020/09/13/python/python01/index.html","6d198cb305fe668b2cc93f10f7a60e30"],["D:/blog/public/2020/09/15/tomcat/tomcat01/index.html","5fb27f8aa4e9ff516bd563ddffd19980"],["D:/blog/public/2020/09/17/springboot/springboot01/index.html","ce238f6dce6d36d6b9177dcf9c394699"],["D:/blog/public/2020/09/19/jvm/jvm01/index.html","a25044514d76468698e183cd01f28050"],["D:/blog/public/2020/09/20/jvm/jvm02/index.html","802a0c205a74e08c44fe9a386bcaaec5"],["D:/blog/public/2020/10/11/jvm/jvm03/index.html","5f2db5f5f6454eadaa40eb312704317a"],["D:/blog/public/2020/10/11/jvm/jvm04/index.html","3133303334fbb180a74cb8ad72d96d4c"],["D:/blog/public/2020/11/29/maven/maven01/index.html","07f23e7ff822bf9f00dd199dcaa13109"],["D:/blog/public/2020/12/01/linux/linux02/index.html","795e2e390af9b30d2378d3a4ff142769"],["D:/blog/public/2020/12/07/java/java8/index.html","d6a3ea7639aedab61a0aca832f21565a"],["D:/blog/public/2020/12/07/linux/linux01/index.html","2c32772c0cb90892a753649ffed27924"],["D:/blog/public/2020/12/07/spring/spring/index.html","721365809ee63146577ee9774bfe3f23"],["D:/blog/public/2020/12/28/docker/docker01/index.html","188db184f2a160ac9c55384236b6c8f5"],["D:/blog/public/2021/04/04/redis/redis01/index.html","630cf18b51a90bd69bab63c4a3ecc4a0"],["D:/blog/public/about/index.html","720d23eeec0edf2734685c40e856a41e"],["D:/blog/public/archives/2020/09/index.html","a9e1cb8ff813c8cd5504606bfd4431a0"],["D:/blog/public/archives/2020/10/index.html","2f6a5828ce51ae6e6bb00ef2bb043855"],["D:/blog/public/archives/2020/11/index.html","06a5adc93be678f2cc98138f875dd522"],["D:/blog/public/archives/2020/12/index.html","1616b6e5737770bd27fa57b01aef4dcc"],["D:/blog/public/archives/2020/index.html","4e1134e04b7cf95a516c00ca56a938d7"],["D:/blog/public/archives/2020/page/2/index.html","44279035a91dab378686a9f4774926fb"],["D:/blog/public/archives/2021/04/index.html","e69218ecd38b34edfb30d35cd19466b3"],["D:/blog/public/archives/2021/index.html","56320f5a7922fcd27fa8d8f56f6efd22"],["D:/blog/public/archives/index.html","f4bc19893dd2c8b0e95eaf3291b71030"],["D:/blog/public/archives/page/2/index.html","349e8d54e992957d46e3e3a73522d192"],["D:/blog/public/categories/docker/index.html","909d8031e09d93193361f85302a354dc"],["D:/blog/public/categories/index.html","6991f0950e165343e479acd28cb5b03c"],["D:/blog/public/categories/java/index.html","7121ba251386778e5c14020ba535026d"],["D:/blog/public/categories/jvm/index.html","2d19324b9324677c911807060b45953c"],["D:/blog/public/categories/linux/index.html","e592ec8bd8962b5566428d30ae17c0f8"],["D:/blog/public/categories/maven/index.html","5e6a0690ff96bea734d27ebb38c6dd89"],["D:/blog/public/categories/mysql/index.html","8da2c0fa04ae52620f46c5bec6af8c44"],["D:/blog/public/categories/python/index.html","cd3f44d49e572a4059b89058380028bf"],["D:/blog/public/categories/redis/index.html","ba4ae2219712e7884f0e5fe481c677e2"],["D:/blog/public/categories/spring/index.html","3ff733728c70891f066bb483434a65cd"],["D:/blog/public/categories/springBoot/index.html","9f037baafbed3d43c178e6d73a979705"],["D:/blog/public/categories/tomcat/index.html","0cb873ba826cc28579a234292b23d728"],["D:/blog/public/css/APlayer.min.css","23e04b27a764c86627313552571f4b11"],["D:/blog/public/css/custom.css","4047f7bf45e5d0b702870762a1faabd4"],["D:/blog/public/css/index.css","7f8127f3daf6800112dc0f74cc243415"],["D:/blog/public/css/less.css","11abb8788866d08affb7f51053bbc306"],["D:/blog/public/css/tag.css","a5ada7bfc46c5481effe7dffd27b1177"],["D:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/ebook/index.html","1b8e4d0703dd9cca7497a5e5cba52e16"],["D:/blog/public/gallery/animal/index.html","51a64a119d4a06a600e7b71a927dba60"],["D:/blog/public/gallery/index.html","23acf7cde5abdc62bab21b8b189b5f45"],["D:/blog/public/gallery/word/index.html","8557b64964facf50f742e1829f284e17"],["D:/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/blog/public/index.html","46dc328d296b29c3ab3a979e43755820"],["D:/blog/public/js/botui.js","9bd324283e8898e4b488a7903a7e9ed6"],["D:/blog/public/js/less.js","36157af40f1fa2bd38447017170258d3"],["D:/blog/public/js/main.js","5641b1a6b817df7d81f465c27ed538d9"],["D:/blog/public/js/sakura.js","d259eedc4ec9687b501f075693a5afbd"],["D:/blog/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["D:/blog/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["D:/blog/public/js/style.js","5e4dd5aa78a8fc4bac45ae6866b1bcea"],["D:/blog/public/js/timeDate.js","a09793407ca641e40673dab7c07012e9"],["D:/blog/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["D:/blog/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["D:/blog/public/link/index.html","2764593eaa8769a103ab13b904fa7be9"],["D:/blog/public/movies/index.html","4a81e49fb1fd8131668c68fe3b574e5e"],["D:/blog/public/music/index.html","cb201f601fd6515ce9c64f3134859d42"],["D:/blog/public/page/2/index.html","32fe422d2589a452f9b666eed5dbe58e"],["D:/blog/public/photos/index.html","7df1362cb6da979c290da356c5701e50"],["D:/blog/public/tags/docker/index.html","0ff38ccb37165497459faf5184999750"],["D:/blog/public/tags/index.html","13c49730dfe6ca77036784b61214cee2"],["D:/blog/public/tags/java/index.html","d8a126cbb294a02dfccb1e4723179906"],["D:/blog/public/tags/jvm/index.html","bd77dd47c29e10ce4f1059414de066f1"],["D:/blog/public/tags/linux/index.html","2571a24bd6b81a6041fc4f6f0cfef5e4"],["D:/blog/public/tags/maven/index.html","660f6a387a71102b58b3b31d775330d7"],["D:/blog/public/tags/mysql/index.html","a53b583a7e99a550dd89c05463c299c9"],["D:/blog/public/tags/python/index.html","8c306d78c50ea797ea6cbe59413350fb"],["D:/blog/public/tags/redis/index.html","869a07704153cecc0c6311efebb09c66"],["D:/blog/public/tags/spring/index.html","c464c40703d3b53b43eec04fee56cc27"],["D:/blog/public/tags/springBoot/index.html","9dbf8fe7ac74435cf5e829c5ed211b7f"],["D:/blog/public/tags/tomcat/index.html","dd9f175b7cdbf4260b686b094e316eb4"]];
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







