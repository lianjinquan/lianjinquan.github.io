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

var precacheConfig = [["E:/blog/public/2020/09/12/mysql/mysql01/index.html","bde257010240542cc1f173ff94fe1631"],["E:/blog/public/2020/09/12/mysql/mysql02/index.html","ab6566bbecb55bba8ff1e96c8a856ee8"],["E:/blog/public/2020/09/13/python/python01/index.html","43e7f160823f7666df48affeca9b199d"],["E:/blog/public/2020/09/15/tomcat/tomcat01/index.html","8ee49e8b0dd65d1059481a29bd651403"],["E:/blog/public/2020/09/17/springboot/springboot01/index.html","9610374a21d461e3f24d3b26503f623c"],["E:/blog/public/2020/09/19/jvm/jvm01/index.html","54a4c102dfa2c1cbd0214385065bf02e"],["E:/blog/public/2020/09/20/jvm/jvm02/index.html","6475161c36ab5463dd94ea77052df3c4"],["E:/blog/public/2020/10/11/jvm/jvm03/index.html","aded8ab6f137a0877e2dc506e72933c2"],["E:/blog/public/2020/10/11/jvm/jvm04/index.html","882c62116337e97072d1801ec84c7d59"],["E:/blog/public/2020/11/09/springcloud/springcloud02/index.html","0179b39a561ff2725e84e9e5296ac235"],["E:/blog/public/2020/11/17/springcloud/springcloud01/index.html","9dcf6adfa203bd7bf89142bac87c30c4"],["E:/blog/public/2020/11/29/maven/maven01/index.html","69312c10bb1191cfc59457ab78306561"],["E:/blog/public/2020/12/01/linux/linux02/index.html","c5bfc51cbad75ec0e5b5fea33aacabea"],["E:/blog/public/2020/12/07/linux/linux01/index.html","a4689bfade6365623e23d9671e4d837e"],["E:/blog/public/2020/12/18/linux/linux03/index.html","0a53290977d235742efc12d5ada614f8"],["E:/blog/public/2020/12/24/linux/linux04/index.html","6314ca9d1a9e371c23baa6fec8ac57d6"],["E:/blog/public/2020/12/25/linux/linux05/index.html","44c251eec4a7eb280b3736747e1a9660"],["E:/blog/public/2021/01/21/springcloud/springcloud03/index.html","10ec65e60ac5b0134ba8448b735e1b89"],["E:/blog/public/about/index.html","eff6d667a6c205cf9addc8e5db242978"],["E:/blog/public/archives/2020/09/index.html","603f1b6ed2b658e6aaecdf79f365df5c"],["E:/blog/public/archives/2020/10/index.html","15eaa6b093f6ad4bf0662fa3f59a3c38"],["E:/blog/public/archives/2020/11/index.html","11a48529e35e1b738d6063eaf1158f7a"],["E:/blog/public/archives/2020/12/index.html","56d25ca28aad3097a415b8eb42b4d48f"],["E:/blog/public/archives/2020/index.html","cb214af8707f9751791f3670af60094b"],["E:/blog/public/archives/2020/page/2/index.html","cbe36bd6b015513db887152bdb4a5154"],["E:/blog/public/archives/2021/01/index.html","ec05f1862a4a5ed77d87131590db0131"],["E:/blog/public/archives/2021/index.html","32fe414d9027dadd78cf2bcf4958db64"],["E:/blog/public/archives/index.html","d68daccaa4bdf10c259e6e8a70c7544c"],["E:/blog/public/archives/page/2/index.html","97a3a097b9ef894deb17ac1528af399e"],["E:/blog/public/categories/index.html","8792fbe28351c5009e3bb219e846586e"],["E:/blog/public/categories/jvm/index.html","55425470867b849842d960a1b61912e7"],["E:/blog/public/categories/linux/index.html","7b4506b4256cb3eb16b12253adede802"],["E:/blog/public/categories/maven/index.html","b092ae855f72127555ba425df18b0709"],["E:/blog/public/categories/mysql/index.html","ba730d9ef638387978cbd32e7f22f3d1"],["E:/blog/public/categories/python/index.html","023288c7cfa151627bb276ecbb341973"],["E:/blog/public/categories/springBoot/index.html","ca4c190afb547ab4c509f7574f6ff0b4"],["E:/blog/public/categories/springCloud/index.html","d6bb62525b85d31ad0106d2b5c72da92"],["E:/blog/public/categories/tomcat/index.html","d0c09fe6fdea31c2a577e5f93bf1a725"],["E:/blog/public/css/APlayer.min.css","23e04b27a764c86627313552571f4b11"],["E:/blog/public/css/custom.css","4047f7bf45e5d0b702870762a1faabd4"],["E:/blog/public/css/index.css","f70097ade2077e55b009f5908803e077"],["E:/blog/public/css/less.css","11abb8788866d08affb7f51053bbc306"],["E:/blog/public/css/tag.css","a5ada7bfc46c5481effe7dffd27b1177"],["E:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/public/ebook/index.html","ae99d8423f522f0aa563a0d5ace6181b"],["E:/blog/public/gallery/animal/index.html","1943a32bf565bceaf9f0fa65d17ee7e8"],["E:/blog/public/gallery/index.html","4698f11d7fabd577f6c4f810f7e0d842"],["E:/blog/public/gallery/word/index.html","2d2f42aa66f7ff1062717fdf71a9dc1e"],["E:/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/blog/public/index.html","951708477cb3bc7e3b7fb42465a6e3fb"],["E:/blog/public/js/botui.js","9bd324283e8898e4b488a7903a7e9ed6"],["E:/blog/public/js/less.js","36157af40f1fa2bd38447017170258d3"],["E:/blog/public/js/main.js","daa594fa296eadb9c43910113c5f8341"],["E:/blog/public/js/sakura.js","d259eedc4ec9687b501f075693a5afbd"],["E:/blog/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/blog/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/blog/public/js/style.js","5e4dd5aa78a8fc4bac45ae6866b1bcea"],["E:/blog/public/js/timeDate.js","a09793407ca641e40673dab7c07012e9"],["E:/blog/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/blog/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/blog/public/link/index.html","8b2936faa8b02f01fd1c6d3825b2099e"],["E:/blog/public/movies/index.html","6b2c56ecd40b72b6f83db617110fb305"],["E:/blog/public/music/index.html","ce61f9499bc6345a0a0bf69731aaa5df"],["E:/blog/public/page/2/index.html","5a42284a456ecc4ad70775cea6e0233c"],["E:/blog/public/photos/index.html","2ac5652968480ffac22cc9f530025aa6"],["E:/blog/public/tags/index.html","0d3bcadfcc832378881438a1688fb1f8"],["E:/blog/public/tags/jvm/index.html","99a018184e14985f7430e9b138453fb1"],["E:/blog/public/tags/linux/index.html","4039f73016aeb857b4089cd05465db58"],["E:/blog/public/tags/maven/index.html","dd9f0dfb9b1105504f9bd30e6c43cd57"],["E:/blog/public/tags/mysql/index.html","fbca47801ad787f84f873ada6ff7acd4"],["E:/blog/public/tags/python/index.html","75faa134d8032ad31108dab28150c15d"],["E:/blog/public/tags/springBoot/index.html","171eff10b5b6e5ea2e191734365fd2c6"],["E:/blog/public/tags/springCloud/index.html","2349eaffcd763c3c77054c912da1a3ea"],["E:/blog/public/tags/tomcat/index.html","bccc47c6750512ad64b91fac94f8c914"]];
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







