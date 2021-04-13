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

var precacheConfig = [["E:/blog/public/2020/09/12/mysql/mysql01/index.html","ba7acd4c52e8d9148f3f7ed39345dac7"],["E:/blog/public/2020/09/12/mysql/mysql02/index.html","1ac9c1d323ee56220c202c1eaf9f7bf7"],["E:/blog/public/2020/09/13/python/python01/index.html","97a8e255859cf21e8e4a8cccbb5ff6ac"],["E:/blog/public/2020/09/15/tomcat/tomcat01/index.html","c80912dff44c4cc1ac05b374545b4e9f"],["E:/blog/public/2020/09/17/springboot/springboot01/index.html","a062ef4c83b7edb3b0a84c2795cc1744"],["E:/blog/public/2020/09/19/jvm/jvm01/index.html","1169133e447cb5a5c8384caea02e1d39"],["E:/blog/public/2020/09/20/jvm/jvm02/index.html","b1a9224617f002349aefac87b2df1e9b"],["E:/blog/public/2020/10/11/jvm/jvm03/index.html","b2074f79fa2c407e434ae099f184e2a8"],["E:/blog/public/2020/10/11/jvm/jvm04/index.html","626056c857edb6bc0639752b78ac6f9e"],["E:/blog/public/2020/11/09/springcloud/eureka/index.html","87e2bad294fa1ffeae7e7a4b439fb9f1"],["E:/blog/public/2020/11/17/springcloud/springcloud01/index.html","bec73223f9fee0aac2ad99ae598a1a21"],["E:/blog/public/2020/11/29/maven/maven01/index.html","e9cf400932cbdfc23e65a1fc585ada2f"],["E:/blog/public/2020/12/01/linux/linux02/index.html","c847465d0cf147e027e11b0460c6bcea"],["E:/blog/public/2020/12/07/linux/linux01/index.html","87d76f07d2c82d1d97bb6300dda7c60c"],["E:/blog/public/2020/12/18/linux/linux03/index.html","350de64a10692f7e8a826b6e7de5524f"],["E:/blog/public/2020/12/24/linux/linux04/index.html","61e2665124d99d97d4ee88c4ec93cee4"],["E:/blog/public/2020/12/25/linux/linux05/index.html","536e24b703809fad188a82e920b0dc79"],["E:/blog/public/2020/12/28/docker/docker01/index.html","30e56c77b20237df26dbe1d4e76e50e9"],["E:/blog/public/2021/01/21/springcloud/consul/index.html","391ae549d30f8d85e3eb792e3509bafc"],["E:/blog/public/2021/01/22/springcloud/ribbon/index.html","1665c89e27518c86c6740b4ffc23fc9c"],["E:/blog/public/2021/04/04/redis/redis01/index.html","e3c6a23843b04370138ebdc54e8225af"],["E:/blog/public/about/index.html","dd2c1c69ee29d1136681efd921fcd5f0"],["E:/blog/public/archives/2020/09/index.html","a0675eeb5d73c5ba81a4254fde06f8b1"],["E:/blog/public/archives/2020/10/index.html","e66c71a6edfd0257da0fa2566bb7eb42"],["E:/blog/public/archives/2020/11/index.html","c154b2a4e0a410b9bb495325b0e69a61"],["E:/blog/public/archives/2020/12/index.html","312b2e6ef51280793bbbcdb1deac26fe"],["E:/blog/public/archives/2020/index.html","2191153694acc99e4b62d56bb6677a16"],["E:/blog/public/archives/2020/page/2/index.html","fab6dadd8e6b398e834bd9257044aaf5"],["E:/blog/public/archives/2021/01/index.html","85e129c12835536ac9aee20208ad12e0"],["E:/blog/public/archives/2021/04/index.html","98bdeede37016ab6e038c6c892c06aa7"],["E:/blog/public/archives/2021/index.html","7ef746149f70f96625d7fd525aa80688"],["E:/blog/public/archives/index.html","b6e2414c8138e001eb5de02e78eb187d"],["E:/blog/public/archives/page/2/index.html","831f843dc400334186c82516813b3849"],["E:/blog/public/archives/page/3/index.html","d14fc60b5f65259df9efcbe12b935f01"],["E:/blog/public/categories/docker/index.html","12dcce3fe9596cde8bfb4326b773a84c"],["E:/blog/public/categories/index.html","d3ed61c6cd06e5b1aecb064ad6c16316"],["E:/blog/public/categories/jvm/index.html","3e480cec4a8a072aeeece9722f905d61"],["E:/blog/public/categories/linux/index.html","8827da2a9f1a05c1cc7b547775c5f49a"],["E:/blog/public/categories/maven/index.html","eb95de99164514fd79dac3276c9edeea"],["E:/blog/public/categories/mysql/index.html","e169023366f184b2fd7c168bbbf43f99"],["E:/blog/public/categories/python/index.html","9010fc1df3f882e94b898ba533c0f1c0"],["E:/blog/public/categories/redis/index.html","59e2c99cc96d30f10bb260f0935909df"],["E:/blog/public/categories/springBoot/index.html","11789f125ec08666b5526cd92081e36a"],["E:/blog/public/categories/springCloud/index.html","09addfd447bd882c6b32dcb8e2f5e779"],["E:/blog/public/categories/tomcat/index.html","ab7aa28dc39df9a529cd1d0263fb0417"],["E:/blog/public/css/APlayer.min.css","23e04b27a764c86627313552571f4b11"],["E:/blog/public/css/custom.css","4047f7bf45e5d0b702870762a1faabd4"],["E:/blog/public/css/index.css","6f715b07fb36fcf516d71ee004e9b376"],["E:/blog/public/css/less.css","11abb8788866d08affb7f51053bbc306"],["E:/blog/public/css/tag.css","a5ada7bfc46c5481effe7dffd27b1177"],["E:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/public/ebook/index.html","59e968e426e5196c30d438bf81cc35fd"],["E:/blog/public/gallery/animal/index.html","a5106cab0d2cbd4948dbc9f1abf72fe1"],["E:/blog/public/gallery/index.html","b101a7e91467c8191d07d153770eda9b"],["E:/blog/public/gallery/word/index.html","a41b7637587bc144b8ca148635bdf5b8"],["E:/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/public/index.html","92edc1768606ae5cbc6fb050db5fb3c0"],["E:/blog/public/js/botui.js","9bd324283e8898e4b488a7903a7e9ed6"],["E:/blog/public/js/less.js","36157af40f1fa2bd38447017170258d3"],["E:/blog/public/js/main.js","5641b1a6b817df7d81f465c27ed538d9"],["E:/blog/public/js/sakura.js","d259eedc4ec9687b501f075693a5afbd"],["E:/blog/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/blog/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/blog/public/js/style.js","5e4dd5aa78a8fc4bac45ae6866b1bcea"],["E:/blog/public/js/timeDate.js","a09793407ca641e40673dab7c07012e9"],["E:/blog/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/blog/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/blog/public/link/index.html","eaa2d1355c1a8994b5518f8204e72dc1"],["E:/blog/public/movies/index.html","62804ec1f871c08961bf551b42e8654c"],["E:/blog/public/music/index.html","fbd1a8d6e5abc27525ee0e97e72af070"],["E:/blog/public/page/2/index.html","173e2516da8f621eba3a301255d91b46"],["E:/blog/public/page/3/index.html","5703010d0b69d0d2b293a10be7839c5c"],["E:/blog/public/photos/index.html","7923699c15a04f471f85d2428165148f"],["E:/blog/public/tags/docker/index.html","4e914a0137a9ddc63319ddd7d3115637"],["E:/blog/public/tags/index.html","01b388329283414df1013a13bbc6e43b"],["E:/blog/public/tags/jvm/index.html","0529eed8566246d2f96e3757384b69aa"],["E:/blog/public/tags/linux/index.html","d02c49d0fc8d1a6d489413ab9d48dc6e"],["E:/blog/public/tags/maven/index.html","c7c6c91183e85923bc7a404b13e37f39"],["E:/blog/public/tags/mysql/index.html","0612d87810217a4bf03906ba797f555d"],["E:/blog/public/tags/python/index.html","0793cb7c1d430c60be128c7b5c22156e"],["E:/blog/public/tags/redis/index.html","1b3f7161ae0902ac8343c46ed4245663"],["E:/blog/public/tags/springBoot/index.html","1ec18acbbc607f538aea905fe22f080f"],["E:/blog/public/tags/springCloud/index.html","d1d48f4c99a0d0f644d8b71a0e3c5969"],["E:/blog/public/tags/tomcat/index.html","fa8ff48f2dfbad4b08bd7a45f4d1a66b"]];
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







