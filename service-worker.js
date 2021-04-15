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

var precacheConfig = [["E:/blog/public/2020/09/12/mysql/mysql01/index.html","083a8f607b38cc02c625002f469844cf"],["E:/blog/public/2020/09/12/mysql/mysql02/index.html","4283c778d47997494af34881e7c75d24"],["E:/blog/public/2020/09/13/python/python01/index.html","7a618f30c8f70d4710c0640420512f38"],["E:/blog/public/2020/09/15/tomcat/tomcat01/index.html","6dc0af5cdb42a919fc27b992de071756"],["E:/blog/public/2020/09/17/springboot/springboot01/index.html","fb2b2df8bce4643150a1d7a6c240eb3c"],["E:/blog/public/2020/09/19/jvm/jvm01/index.html","13095998abb4ff0090b2d98459f6c71a"],["E:/blog/public/2020/09/20/jvm/jvm02/index.html","3a7cc9aaae482b37b7ea5f8d8606b244"],["E:/blog/public/2020/10/11/jvm/jvm03/index.html","58ba74dcdd96173d346ad5e3afcbd89c"],["E:/blog/public/2020/10/11/jvm/jvm04/index.html","80b12e3e82341da583d7830df4131569"],["E:/blog/public/2020/11/09/springcloud/eureka/index.html","eafa05d22289064bc58510b6f02a1bca"],["E:/blog/public/2020/11/17/springcloud/springcloud01/index.html","6308c60d4fe23dec407b2ff344fa2e70"],["E:/blog/public/2020/11/29/maven/maven01/index.html","a9c598e19409945610ac0fe7d0a673c9"],["E:/blog/public/2020/12/01/linux/linux02/index.html","2773dc8524e90bdf04c1e91650e52a3e"],["E:/blog/public/2020/12/07/linux/linux01/index.html","91270f5be5f7e0301831c55f1e2acdb3"],["E:/blog/public/2020/12/24/linux/linux04/index.html","1caebeb6e6404160f172f91fbd2c15e0"],["E:/blog/public/2020/12/25/linux/linux05/index.html","92a72101bdaa7573ebf408e4ba87587e"],["E:/blog/public/2020/12/28/docker/docker01/index.html","fecbf86158a5356c5cfc5c0b7a7350d5"],["E:/blog/public/2021/01/21/springcloud/consul/index.html","56662917661dbd1d0918c9e22b245274"],["E:/blog/public/2021/01/22/springcloud/ribbon/index.html","8f11897c693bf888ce5fae7f3f0f2a94"],["E:/blog/public/2021/04/04/redis/redis01/index.html","874c87e4c70387a20c6cfd846aa8f2f9"],["E:/blog/public/about/index.html","f3bbc889ee5e819d27bce2a2e4689543"],["E:/blog/public/archives/2020/09/index.html","688056b88c86292db3d2b8f8242dd619"],["E:/blog/public/archives/2020/10/index.html","c17e815e30e62c7fff6303c43dec3691"],["E:/blog/public/archives/2020/11/index.html","5ee987fcd1181a3c732c832a54dfc329"],["E:/blog/public/archives/2020/12/index.html","319ed11983bf0311d527697b55991401"],["E:/blog/public/archives/2020/index.html","d64a384c02b63f0b8b1f5cd79a53ef8a"],["E:/blog/public/archives/2020/page/2/index.html","dae0640e5b962ae872f5a00fa089e135"],["E:/blog/public/archives/2021/01/index.html","f4068567f0e0aed1c8dfe4fa07e55752"],["E:/blog/public/archives/2021/04/index.html","1af3b41a3ebf396baad4842208a9ee44"],["E:/blog/public/archives/2021/index.html","fc928c8a954001b1f18a806fc267040d"],["E:/blog/public/archives/index.html","34477f50f9448bc16d61f432d499e6b4"],["E:/blog/public/archives/page/2/index.html","ef1d12f894fa4bff7dfba719c5e8a5fc"],["E:/blog/public/categories/docker/index.html","bdd741e8575eb5eefbe39c79af3926eb"],["E:/blog/public/categories/index.html","4dbb191e468648942f944dc56b9e979c"],["E:/blog/public/categories/jvm/index.html","ca0b43a2d875a187cfeda7affeb81c3d"],["E:/blog/public/categories/linux/index.html","3243f65b09d73c4585fdc78aa21bd225"],["E:/blog/public/categories/maven/index.html","1c449bd2c314e9e60ce0e7f0e4cc793d"],["E:/blog/public/categories/mysql/index.html","cef8a7326499afc225049dcce0994dcd"],["E:/blog/public/categories/python/index.html","a03dd22e1a206bec6670f37305063777"],["E:/blog/public/categories/redis/index.html","3bc7ddddd24ed03db70a3ff6659aaede"],["E:/blog/public/categories/springBoot/index.html","562e5bd6a4a155b97800403bbb8a5e13"],["E:/blog/public/categories/springCloud/index.html","59d0641b88112667d8b2fac37f01dfbc"],["E:/blog/public/categories/tomcat/index.html","863d7d59f751badae14e3bfd80acd6dd"],["E:/blog/public/css/APlayer.min.css","23e04b27a764c86627313552571f4b11"],["E:/blog/public/css/custom.css","4047f7bf45e5d0b702870762a1faabd4"],["E:/blog/public/css/index.css","6f715b07fb36fcf516d71ee004e9b376"],["E:/blog/public/css/less.css","11abb8788866d08affb7f51053bbc306"],["E:/blog/public/css/tag.css","a5ada7bfc46c5481effe7dffd27b1177"],["E:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/public/ebook/index.html","c4a9a866f27170e9e28400bd56f8ac4f"],["E:/blog/public/gallery/animal/index.html","15be9d4baff4a65995efaee6499ef15c"],["E:/blog/public/gallery/index.html","ec31d636b3d3ef643af8aa4b40ed67ed"],["E:/blog/public/gallery/word/index.html","e2aaa39261b56e65f9efacd107e72261"],["E:/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/public/index.html","13b535a3efa89dd304aef4ce02fca965"],["E:/blog/public/js/botui.js","9bd324283e8898e4b488a7903a7e9ed6"],["E:/blog/public/js/less.js","36157af40f1fa2bd38447017170258d3"],["E:/blog/public/js/main.js","5641b1a6b817df7d81f465c27ed538d9"],["E:/blog/public/js/sakura.js","d259eedc4ec9687b501f075693a5afbd"],["E:/blog/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/blog/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/blog/public/js/style.js","5e4dd5aa78a8fc4bac45ae6866b1bcea"],["E:/blog/public/js/timeDate.js","a09793407ca641e40673dab7c07012e9"],["E:/blog/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/blog/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/blog/public/link/index.html","6adfc09053904339c3bbb4d652a760a6"],["E:/blog/public/movies/index.html","399add5a3ad2e439b66bbcba4c28f209"],["E:/blog/public/music/index.html","3a3ceccfd37de59c090a62f465cab88f"],["E:/blog/public/page/2/index.html","2a222f72027e319e5fc3e845aa21d454"],["E:/blog/public/photos/index.html","22d55f4456b3925ccd3be5e5fba6e456"],["E:/blog/public/tags/docker/index.html","477adb9bb1a142cf32531c7ab1ef785e"],["E:/blog/public/tags/index.html","c8255cf88d6fbab2a06ee0a3a2296768"],["E:/blog/public/tags/jvm/index.html","0fe006762b2b2fb3d054df4ce5e38781"],["E:/blog/public/tags/linux/index.html","729e97d7e838dc2da16455486ee9eb5a"],["E:/blog/public/tags/maven/index.html","73fb0ea708da7682d73904445cc3a479"],["E:/blog/public/tags/mysql/index.html","5905069942c2f140130358112ff08c0d"],["E:/blog/public/tags/python/index.html","8e179adf59d9b34c792db851dee234a8"],["E:/blog/public/tags/redis/index.html","ede6ff5648745c2b628df0d7772e03a2"],["E:/blog/public/tags/springBoot/index.html","62f5c156c2c2454453c2b1645ac5d904"],["E:/blog/public/tags/springCloud/index.html","6a7d1056a07a36ca847d3bba78469d34"],["E:/blog/public/tags/tomcat/index.html","2c3001e82621e2ab476370f2d381f966"]];
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







