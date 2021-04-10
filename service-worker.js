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

var precacheConfig = [["E:/blog/public/2020/09/12/mysql/mysql01/index.html","ba7acd4c52e8d9148f3f7ed39345dac7"],["E:/blog/public/2020/09/12/mysql/mysql02/index.html","1ac9c1d323ee56220c202c1eaf9f7bf7"],["E:/blog/public/2020/09/13/python/python01/index.html","97a8e255859cf21e8e4a8cccbb5ff6ac"],["E:/blog/public/2020/09/15/tomcat/tomcat01/index.html","c80912dff44c4cc1ac05b374545b4e9f"],["E:/blog/public/2020/09/17/springboot/springboot01/index.html","a062ef4c83b7edb3b0a84c2795cc1744"],["E:/blog/public/2020/09/19/jvm/jvm01/index.html","1169133e447cb5a5c8384caea02e1d39"],["E:/blog/public/2020/09/20/jvm/jvm02/index.html","b1a9224617f002349aefac87b2df1e9b"],["E:/blog/public/2020/10/11/jvm/jvm03/index.html","b2074f79fa2c407e434ae099f184e2a8"],["E:/blog/public/2020/10/11/jvm/jvm04/index.html","626056c857edb6bc0639752b78ac6f9e"],["E:/blog/public/2020/11/09/springcloud/eureka/index.html","5196db89861b86cd59e6f1a4d47917bc"],["E:/blog/public/2020/11/17/springcloud/springcloud01/index.html","a2086d065cd464b6b7e9035e9322fe3a"],["E:/blog/public/2020/11/29/maven/maven01/index.html","e9cf400932cbdfc23e65a1fc585ada2f"],["E:/blog/public/2020/12/01/linux/linux02/index.html","c847465d0cf147e027e11b0460c6bcea"],["E:/blog/public/2020/12/07/linux/linux01/index.html","87d76f07d2c82d1d97bb6300dda7c60c"],["E:/blog/public/2020/12/18/linux/linux03/index.html","350de64a10692f7e8a826b6e7de5524f"],["E:/blog/public/2020/12/24/linux/linux04/index.html","61e2665124d99d97d4ee88c4ec93cee4"],["E:/blog/public/2020/12/25/linux/linux05/index.html","536e24b703809fad188a82e920b0dc79"],["E:/blog/public/2020/12/28/docker/docker01/index.html","30e56c77b20237df26dbe1d4e76e50e9"],["E:/blog/public/2021/01/21/springcloud/consul/index.html","45b17aa53b1674619c069f76995de12d"],["E:/blog/public/2021/01/22/springcloud/ribbon/index.html","1665c89e27518c86c6740b4ffc23fc9c"],["E:/blog/public/2021/04/04/redis/redis01/index.html","2365a1608e55776990c93de48eac1382"],["E:/blog/public/about/index.html","565c103e60c59dd4ef77a333a266e6cd"],["E:/blog/public/archives/2020/09/index.html","774878675054449adb921b9d213b14a3"],["E:/blog/public/archives/2020/10/index.html","98aefed46e223b9ca1739c963d92e69d"],["E:/blog/public/archives/2020/11/index.html","743ed94bca813ce1745efca356d62d7e"],["E:/blog/public/archives/2020/12/index.html","546b40485781e92678655eb399d17f27"],["E:/blog/public/archives/2020/index.html","2c0a328f03b0bc722b0d642d1c51647a"],["E:/blog/public/archives/2020/page/2/index.html","d76817a01e4b62bbc5bd9dcff22da068"],["E:/blog/public/archives/2021/01/index.html","8c209457f633a0c8068ddd333b3f9e66"],["E:/blog/public/archives/2021/04/index.html","fc373daea14250398eed65c4fc772a4b"],["E:/blog/public/archives/2021/index.html","e50ac33ffdda28faa356ea435bbbaab4"],["E:/blog/public/archives/index.html","0443f8be06f431b33cbc1c6efbfda045"],["E:/blog/public/archives/page/2/index.html","abacbec6053f123718ccaf2152958334"],["E:/blog/public/archives/page/3/index.html","fc9477c9501a8e254b8b9dc08204301a"],["E:/blog/public/categories/docker/index.html","07ca39b511b2dd2a54ce2e8080ebce3a"],["E:/blog/public/categories/index.html","cdec0c21ba4bdbc18d1a46e6450283bc"],["E:/blog/public/categories/jvm/index.html","7d5085887dd4862fbdd9eb5afe116d51"],["E:/blog/public/categories/linux/index.html","729b27daa2151bb3e01187eb8e1f30ad"],["E:/blog/public/categories/maven/index.html","7084eef5ceebecece5359c691ebec64b"],["E:/blog/public/categories/mysql/index.html","b9401d500a96e229e00ff143bc6b7206"],["E:/blog/public/categories/python/index.html","43ac9c7df8f5c40326aa8537ee761e85"],["E:/blog/public/categories/redis/index.html","ddb0f5ece6906797df25bdb0cd14df8f"],["E:/blog/public/categories/springBoot/index.html","b53f2af91c8e7e48a8e86f0ae9e8dc03"],["E:/blog/public/categories/springCloud/index.html","95baf48589f52a4c60e777137cca28a1"],["E:/blog/public/categories/tomcat/index.html","c6f65e5a1910676d0daff2ad74798233"],["E:/blog/public/css/APlayer.min.css","23e04b27a764c86627313552571f4b11"],["E:/blog/public/css/custom.css","4047f7bf45e5d0b702870762a1faabd4"],["E:/blog/public/css/index.css","6f715b07fb36fcf516d71ee004e9b376"],["E:/blog/public/css/less.css","11abb8788866d08affb7f51053bbc306"],["E:/blog/public/css/tag.css","a5ada7bfc46c5481effe7dffd27b1177"],["E:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/public/ebook/index.html","ec76275d1a9ecba7a23b324433e44417"],["E:/blog/public/gallery/animal/index.html","c61ae68a35c85bf9472d219b76a32ba3"],["E:/blog/public/gallery/index.html","486d90354acaeefd63b523ae0be12a57"],["E:/blog/public/gallery/word/index.html","65a2bf54de518a295e5941eab12aa860"],["E:/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/public/index.html","f1b7a8ae75dcd2cca09b7159c303b681"],["E:/blog/public/js/botui.js","9bd324283e8898e4b488a7903a7e9ed6"],["E:/blog/public/js/less.js","36157af40f1fa2bd38447017170258d3"],["E:/blog/public/js/main.js","5641b1a6b817df7d81f465c27ed538d9"],["E:/blog/public/js/sakura.js","d259eedc4ec9687b501f075693a5afbd"],["E:/blog/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/blog/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/blog/public/js/style.js","5e4dd5aa78a8fc4bac45ae6866b1bcea"],["E:/blog/public/js/timeDate.js","a09793407ca641e40673dab7c07012e9"],["E:/blog/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/blog/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/blog/public/link/index.html","950707f508a02a2c3cefdb83f15782ee"],["E:/blog/public/movies/index.html","0bd8d29891116fca69c3abaabefc7bec"],["E:/blog/public/music/index.html","f82e3693781af4fb818071178c880e74"],["E:/blog/public/page/2/index.html","30282a861e646c22605feaf2d6b489f8"],["E:/blog/public/page/3/index.html","5e0eb18cf55c3c2a4d892b60236a0115"],["E:/blog/public/photos/index.html","81fdc5b49caa2e88ef135694b3cd2642"],["E:/blog/public/tags/docker/index.html","e06203c9bebc46f826d2fe5445a7a6a1"],["E:/blog/public/tags/index.html","dbcff4c64c421866bd06fc2c36019ea1"],["E:/blog/public/tags/jvm/index.html","301fa0c900ca39c9f8e2ae9994819fe9"],["E:/blog/public/tags/linux/index.html","0c56e0c413a2ea71f19cb2859c61f310"],["E:/blog/public/tags/maven/index.html","4a76c023e08518b33eb3185fe3dedbdb"],["E:/blog/public/tags/mysql/index.html","1417c71197008f1743cf0b37a3a61b73"],["E:/blog/public/tags/python/index.html","c233aaf924b4972a0933fa522d99af6c"],["E:/blog/public/tags/redis/index.html","faf9a64a9c709617cd4ebb2290899d10"],["E:/blog/public/tags/springBoot/index.html","536b14ccbc8791683eb99b7baa67b391"],["E:/blog/public/tags/springCloud/index.html","11aa2e8b0486fc79da11d46776738246"],["E:/blog/public/tags/tomcat/index.html","f189b39317be25a0fd82a8c75272c4db"]];
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







