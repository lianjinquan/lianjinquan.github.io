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

var precacheConfig = [["E:/blog/public/2020/09/12/mysql/mysql01/index.html","577d033796270b7a2e312e8ccddc014b"],["E:/blog/public/2020/09/12/mysql/mysql02/index.html","d246f9ba63d5890ee3b6fd37028650e1"],["E:/blog/public/2020/09/13/python/python01/index.html","128c616d8f8bf43aa9294474a0a3f81d"],["E:/blog/public/2020/09/15/tomcat/tomcat01/index.html","2c84b58e0aad665d2ebc0d53a5ae1122"],["E:/blog/public/2020/09/17/springboot/springboot01/index.html","d1091b2b88647c7acf4872fa12a8c56e"],["E:/blog/public/2020/09/19/jvm/jvm01/index.html","04e5a5e61169e59aee6843473b1321c0"],["E:/blog/public/2020/09/20/jvm/jvm02/index.html","d0ad885281e4818619439616228be860"],["E:/blog/public/2020/10/11/jvm/jvm03/index.html","e0be5ad4b1ad2f34dedca089d2a36a35"],["E:/blog/public/2020/10/11/jvm/jvm04/index.html","c9ffb9d40d84e30154847a560858f353"],["E:/blog/public/2020/11/09/springcloud/eureka/index.html","552ffe7ab9a1daecd8c566479d8dcb38"],["E:/blog/public/2020/11/17/springcloud/springcloud01/index.html","f5a474e07c902fd67b5d4f3b1af4ce59"],["E:/blog/public/2020/11/29/maven/maven01/index.html","569644325c1e9f2628118fa931a4defb"],["E:/blog/public/2020/12/01/linux/linux02/index.html","e8b075bf00528a6f38327377a00881c2"],["E:/blog/public/2020/12/07/linux/linux01/index.html","abe6ab8cdffb3361a705366b0ec53bfb"],["E:/blog/public/2020/12/28/docker/docker01/index.html","ed0dc8c2a0d374326c2ba74de0ce2b9e"],["E:/blog/public/2021/01/21/springcloud/consul/index.html","1e9abb0cabe0b88b86a123df47e89bdc"],["E:/blog/public/2021/01/22/springcloud/ribbon/index.html","62edfded203eeb8a2aa0beed738812d3"],["E:/blog/public/2021/04/04/redis/redis01/index.html","6a429b3e8e045447f9c0412ce2b6bcaf"],["E:/blog/public/about/index.html","9fcfe5888cdfc8b6a936125d72b95684"],["E:/blog/public/archives/2020/09/index.html","fc1729ef51ded7f68c3321744218b0fa"],["E:/blog/public/archives/2020/10/index.html","dd83f861bf82b5006688dd0304ff18fc"],["E:/blog/public/archives/2020/11/index.html","a3d42ab917e3e349ccee7a72bc39de94"],["E:/blog/public/archives/2020/12/index.html","8bf5d3ef0cbafbf3e280c92af4e7dc05"],["E:/blog/public/archives/2020/index.html","3e99e8f2e5307f1332e54382ce7baef5"],["E:/blog/public/archives/2020/page/2/index.html","fb8f7877c0140c1c1acba4382df6d496"],["E:/blog/public/archives/2021/01/index.html","9c2d18ae3bd0650176e573f64152d395"],["E:/blog/public/archives/2021/04/index.html","5bb9f46a5e420f8eec807f83446f1339"],["E:/blog/public/archives/2021/index.html","eed83bb54bb182012823af399f16f109"],["E:/blog/public/archives/index.html","83e46ae7ced2a0cc2aef588f8e90e3dc"],["E:/blog/public/archives/page/2/index.html","4c173a23352895e2f3087d7929aec406"],["E:/blog/public/categories/docker/index.html","44daa899a0d5bef0ea3a964208ac4fe2"],["E:/blog/public/categories/index.html","fe9833dc187ab70d6d1a4f095d14095b"],["E:/blog/public/categories/jvm/index.html","e89cb2b045eb4f5afd50c34ceed62bf6"],["E:/blog/public/categories/linux/index.html","af26b076c1644344608708d0526eae54"],["E:/blog/public/categories/maven/index.html","44cedde5bab61b2e8555de672794745f"],["E:/blog/public/categories/mysql/index.html","1276ad0ffaabb88052cca44b11259718"],["E:/blog/public/categories/python/index.html","de496c0310349a16f034aad86b17a2d2"],["E:/blog/public/categories/redis/index.html","3d18748c6561c60069ab4399ee79ad58"],["E:/blog/public/categories/springBoot/index.html","db933200ee578410146f59783f50cb44"],["E:/blog/public/categories/springCloud/index.html","4732cb8c7c5a3f7a55fdad3243c8833a"],["E:/blog/public/categories/tomcat/index.html","72ecc71f80654f04f7a7e4ac888efe4d"],["E:/blog/public/css/APlayer.min.css","23e04b27a764c86627313552571f4b11"],["E:/blog/public/css/custom.css","4047f7bf45e5d0b702870762a1faabd4"],["E:/blog/public/css/index.css","6f715b07fb36fcf516d71ee004e9b376"],["E:/blog/public/css/less.css","11abb8788866d08affb7f51053bbc306"],["E:/blog/public/css/tag.css","a5ada7bfc46c5481effe7dffd27b1177"],["E:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/public/ebook/index.html","33bbd9aca997ede443e9edbcd84316eb"],["E:/blog/public/gallery/animal/index.html","94ae9e0ef2700d12214058ff60e124e2"],["E:/blog/public/gallery/index.html","a0fa34e438482cbc14cb7b28ce7d10fd"],["E:/blog/public/gallery/word/index.html","257aa2c853573fa24d68b2d6546ca056"],["E:/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/public/index.html","0ba60a37ece99053a12b34b0acede95a"],["E:/blog/public/js/botui.js","9bd324283e8898e4b488a7903a7e9ed6"],["E:/blog/public/js/less.js","36157af40f1fa2bd38447017170258d3"],["E:/blog/public/js/main.js","5641b1a6b817df7d81f465c27ed538d9"],["E:/blog/public/js/sakura.js","d259eedc4ec9687b501f075693a5afbd"],["E:/blog/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/blog/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/blog/public/js/style.js","5e4dd5aa78a8fc4bac45ae6866b1bcea"],["E:/blog/public/js/timeDate.js","a09793407ca641e40673dab7c07012e9"],["E:/blog/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/blog/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/blog/public/link/index.html","088eff7c1bd7da47e95c192d137d1140"],["E:/blog/public/movies/index.html","39ea9dbc4d67c1f395d84159c16c8d54"],["E:/blog/public/music/index.html","f7a4c08adf9d5f936dc277d6aae9f2f4"],["E:/blog/public/page/2/index.html","12779d5dbbece3beb7e85b9304a9ada7"],["E:/blog/public/photos/index.html","b676057f0e64afdce7d6f44bd83e8b3d"],["E:/blog/public/tags/docker/index.html","bdb6e8da4f0911dbbfc9662f4e6a542f"],["E:/blog/public/tags/index.html","15608c9722cac9afafcff917a9218653"],["E:/blog/public/tags/jvm/index.html","7621d7b4f7910de06c26de5b3ac1db3e"],["E:/blog/public/tags/linux/index.html","6667b033ecff28d9f5d8e56c5ba22f60"],["E:/blog/public/tags/maven/index.html","a2a7fff1484cc3902ab1f0b8c425d7a5"],["E:/blog/public/tags/mysql/index.html","c557fcac103af4cc9ce48794a85d4085"],["E:/blog/public/tags/python/index.html","b0c52c1a2b51510d2ef77d277d9e5e0a"],["E:/blog/public/tags/redis/index.html","3669ac3e9bcc8a4bfc1c86dad318e415"],["E:/blog/public/tags/springBoot/index.html","7d782b2daf0518e601b84764654de94d"],["E:/blog/public/tags/springCloud/index.html","68848aaaceea12fbc238b200823d44bb"],["E:/blog/public/tags/tomcat/index.html","73e1dbdcb456ebbd61d69462308ce68d"]];
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







