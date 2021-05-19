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

var precacheConfig = [["D:/blog/public/2020/09/12/mysql/mysql01/index.html","d7b3975a5cc587010e0feb3adeab70cb"],["D:/blog/public/2020/09/12/mysql/mysql02/index.html","f6df0c29ad0a202b1b4650f1050964b9"],["D:/blog/public/2020/09/13/python/python01/index.html","972fa109f689600834036753c9422690"],["D:/blog/public/2020/09/15/tomcat/tomcat01/index.html","b455d54482709246ad458b32c2c2440f"],["D:/blog/public/2020/09/17/springboot/springboot01/index.html","85dfb68e21700125b31017a2b0ba4f42"],["D:/blog/public/2020/09/19/jvm/jvm01/index.html","5bd9666b2596b021e11970430ac55068"],["D:/blog/public/2020/09/20/jvm/jvm02/index.html","5e3a79ec3d0bce34a0334b112cd49db1"],["D:/blog/public/2020/10/11/jvm/jvm03/index.html","596fd7fbec732c2a860595a71d0253a5"],["D:/blog/public/2020/10/11/jvm/jvm04/index.html","d4824f88f2a8fdac2856ad0e128812ea"],["D:/blog/public/2020/11/09/springcloud/eureka/index.html","c9b5a6a0fcfa64d732cb627837307a03"],["D:/blog/public/2020/11/17/springcloud/springcloud01/index.html","9d6fa9870086fcac76f71e1f77882584"],["D:/blog/public/2020/11/29/maven/maven01/index.html","03c3253aa47740e670cba1c9cf84c6ed"],["D:/blog/public/2020/12/01/linux/linux02/index.html","b2a1157e59840ec7c2f0f97c9947e87f"],["D:/blog/public/2020/12/07/java/java8/index.html","231716e17736e88402c3d225bab5aa6d"],["D:/blog/public/2020/12/07/linux/linux01/index.html","da7aebbd53d1e613d6df4faf72842542"],["D:/blog/public/2020/12/28/docker/docker01/index.html","0e08aad7dfe1dddf643ef536fcfa8644"],["D:/blog/public/2021/01/21/springcloud/consul/index.html","4535fccba29b6d224d435b6e2d467e91"],["D:/blog/public/2021/01/22/springcloud/ribbon/index.html","8927094e29a59b1e9aa3931d4ef917ac"],["D:/blog/public/2021/04/04/redis/redis01/index.html","98aea384c3afb617e24365f54df88743"],["D:/blog/public/about/index.html","e371a923dbc7d2fe58eaad599354bb85"],["D:/blog/public/archives/2020/09/index.html","004e33cdef5fedd2452f6e85ea690a1b"],["D:/blog/public/archives/2020/10/index.html","366ce4bea019e570b5486c720ab3ecd0"],["D:/blog/public/archives/2020/11/index.html","2073e5b0e9e1195a6f03a58d02a2cdf6"],["D:/blog/public/archives/2020/12/index.html","aa114c5d8f7bcf12cbb2f8af5d879a70"],["D:/blog/public/archives/2020/index.html","a7d8cadefb2e5e882ae3fa7ae3dab2a4"],["D:/blog/public/archives/2020/page/2/index.html","a832d9ef3212f69fe605a23bce50ee43"],["D:/blog/public/archives/2021/01/index.html","297673d1a06af00d14623db1d6235ab1"],["D:/blog/public/archives/2021/04/index.html","b90103f91db0744ec290b380dd2771a2"],["D:/blog/public/archives/2021/index.html","dfe70435e79421ea6e3d29355941fac9"],["D:/blog/public/archives/index.html","6e29d4a4dcfa6a0b6612c56a25f4b8f4"],["D:/blog/public/archives/page/2/index.html","7b44aba125eaa1a004db0e9774750f6e"],["D:/blog/public/categories/docker/index.html","17d4349a78e1a15ce139476c1bc63cae"],["D:/blog/public/categories/index.html","7dea97b056d0fda552b25da5b9a25348"],["D:/blog/public/categories/java/index.html","59b5aa6ec850447d3c6b325df238ec26"],["D:/blog/public/categories/jvm/index.html","456e42a43b5e8a86f20a9771a991dc22"],["D:/blog/public/categories/linux/index.html","ba0c2c67440468b58f28ee50b2e45bfd"],["D:/blog/public/categories/maven/index.html","a20b3867f3f5166ac7d33560555a3e0a"],["D:/blog/public/categories/mysql/index.html","76baaaf98fc84902a9a19539eab34a53"],["D:/blog/public/categories/python/index.html","09253882ef4bfa5891dd6f3f9c445a12"],["D:/blog/public/categories/redis/index.html","1baf762af076a323d51738f8ba074f78"],["D:/blog/public/categories/springBoot/index.html","18438c205f53f8a15328bcea2408f79a"],["D:/blog/public/categories/springCloud/index.html","caa1cb522f5e9ff355fbb31bf0c12a0c"],["D:/blog/public/categories/tomcat/index.html","fe6ff63319cb8d87d3aae2207bc6c862"],["D:/blog/public/css/APlayer.min.css","23e04b27a764c86627313552571f4b11"],["D:/blog/public/css/custom.css","4047f7bf45e5d0b702870762a1faabd4"],["D:/blog/public/css/index.css","7f8127f3daf6800112dc0f74cc243415"],["D:/blog/public/css/less.css","11abb8788866d08affb7f51053bbc306"],["D:/blog/public/css/tag.css","a5ada7bfc46c5481effe7dffd27b1177"],["D:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/ebook/index.html","560bc766fcd3bded8a907f22c2cc7759"],["D:/blog/public/gallery/animal/index.html","a5de279ab25486f574127c2325be31c6"],["D:/blog/public/gallery/index.html","eaa0cc98245c313b6bbd963c6bc5c333"],["D:/blog/public/gallery/word/index.html","4722115d918924073e2264d2815745f4"],["D:/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/blog/public/index.html","24aae4125c18b9fa4e0dea9276baec74"],["D:/blog/public/js/botui.js","9bd324283e8898e4b488a7903a7e9ed6"],["D:/blog/public/js/less.js","36157af40f1fa2bd38447017170258d3"],["D:/blog/public/js/main.js","5641b1a6b817df7d81f465c27ed538d9"],["D:/blog/public/js/sakura.js","d259eedc4ec9687b501f075693a5afbd"],["D:/blog/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["D:/blog/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["D:/blog/public/js/style.js","5e4dd5aa78a8fc4bac45ae6866b1bcea"],["D:/blog/public/js/timeDate.js","a09793407ca641e40673dab7c07012e9"],["D:/blog/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["D:/blog/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["D:/blog/public/link/index.html","b6a6c6b1f910978f9ed348adb981ea87"],["D:/blog/public/movies/index.html","31499a91de6687f4f14f6bdb8b3706bb"],["D:/blog/public/music/index.html","be25a2faa3cf464a8730c440bb4f2bb6"],["D:/blog/public/page/2/index.html","9decbc612ca8b19e617827149d0f8851"],["D:/blog/public/photos/index.html","f15105c05b4ac9feb4519996f6404634"],["D:/blog/public/tags/docker/index.html","dc32be497d8cd1b67ba3b27a39a0120c"],["D:/blog/public/tags/index.html","1dcbf65b8b61222beb7cfcc9e99735e7"],["D:/blog/public/tags/java/index.html","b6027d13bd2d9cb8c1c267a9de901d8d"],["D:/blog/public/tags/jvm/index.html","04e0e8f010da1b99685c29960a887da2"],["D:/blog/public/tags/linux/index.html","a1f140f06d48eee90603b0c166c7bc07"],["D:/blog/public/tags/maven/index.html","27e5ef369d680ca74f17640b3739767c"],["D:/blog/public/tags/mysql/index.html","280a5b929a80713cf663ac5cc00b3088"],["D:/blog/public/tags/python/index.html","e9bb470157ff2bb7441d7c569baa8e15"],["D:/blog/public/tags/redis/index.html","3945f89238de61f015e5f13005540627"],["D:/blog/public/tags/springBoot/index.html","fb9e96bfe712fd549b2ca661dcfd8e4f"],["D:/blog/public/tags/springCloud/index.html","d9410ce891eb574adee594fc003879d1"],["D:/blog/public/tags/tomcat/index.html","a702df9ef7c151d5863e20ee2b74f08a"]];
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







