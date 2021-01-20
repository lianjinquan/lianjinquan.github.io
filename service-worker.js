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

var precacheConfig = [["E:/blog/public/2020/09/12/mysql/mysql01/index.html","d4eace1ac5cdbe11a651fb337f152177"],["E:/blog/public/2020/09/12/mysql/mysql02/index.html","86e1f80ef35f51d88cd70ad08aa69bb7"],["E:/blog/public/2020/09/13/python/python01/index.html","2dd5e9949aaf92b16cc0e77db0bff3ae"],["E:/blog/public/2020/09/15/tomcat/tomcat01/index.html","65e6189fbaa81f3ea77ed4439e44deb7"],["E:/blog/public/2020/09/17/springboot/springboot01/index.html","3cd8f977da01734795844aaccbd9f4ee"],["E:/blog/public/2020/09/19/jvm/jvm01/index.html","b21050a26a17902d7490e109067b0d60"],["E:/blog/public/2020/09/20/jvm/jvm02/index.html","2defa6f850793b8054e79840ac8a064e"],["E:/blog/public/2020/10/11/jvm/jvm03/index.html","58e41a7094057f67c14bca90121d1abd"],["E:/blog/public/2020/10/11/jvm/jvm04/index.html","d037686edc650290a247b42f07b4d112"],["E:/blog/public/2020/11/09/springcloud/springcloud02/index.html","26b293b5d2579ed3a0f5470ef96d651a"],["E:/blog/public/2020/11/17/springcloud/springcloud01/index.html","b5394259d031ee258b8b9acf488a97cc"],["E:/blog/public/2020/11/29/maven/maven01/index.html","37eb17ee918f431f1f74ec689e396883"],["E:/blog/public/2020/12/01/linux/linux02/index.html","4e0ee01d6982e1ad1824e974de4ca3c6"],["E:/blog/public/2020/12/07/linux/linux01/index.html","a2fc5492138d8da933a352fa3f15755c"],["E:/blog/public/2020/12/18/linux/linux03/index.html","3461a3c6de206fadef50d0243a1c7d64"],["E:/blog/public/2020/12/24/linux/linux04/index.html","8b6411748090baf5589407ae384f4b22"],["E:/blog/public/2020/12/25/linux/linux05/index.html","4e00abbb60bbc483060b30834c38ec26"],["E:/blog/public/Gallery/index.html","5d47d112c7d93a5363eba6764abf5996"],["E:/blog/public/Gallery/marvel/index.html","1d3bdc9e22396dca672b36e8bf99f813"],["E:/blog/public/Gallery/ohmygirl/index.html","dedda6024f2b08a251103a3629e64271"],["E:/blog/public/Gallery/wallpaper/index.html","e20fc5d505141178e23e78e4eb0177cd"],["E:/blog/public/about/index.html","c25e2b0af9b33a7a627b2cae156b6ddb"],["E:/blog/public/archives/2020/09/index.html","4c2586b9edd821c23f0bde501379b148"],["E:/blog/public/archives/2020/10/index.html","5ffb5073e56cc79494e19866e9f929e0"],["E:/blog/public/archives/2020/11/index.html","a6bc5e5745ec75834b66917ae4c1694d"],["E:/blog/public/archives/2020/12/index.html","046ecea4693dcb410a9b1b86aae86c3a"],["E:/blog/public/archives/2020/index.html","51caea079f027c7211220dc1db896e27"],["E:/blog/public/archives/2020/page/2/index.html","736340264043dc9e29135155c624acfd"],["E:/blog/public/archives/index.html","2c56aedf3032f1cbebe5a5d76f760fc4"],["E:/blog/public/archives/page/2/index.html","230ccd979c1e22212ad4a3ca2ebc903c"],["E:/blog/public/categories/index.html","bc3b7419a6c82036ac1a3eddaafe9195"],["E:/blog/public/categories/jvm/index.html","ae54943a0dcf95fe804aea1127182ab9"],["E:/blog/public/categories/linux/index.html","b0622e1ecbe100bbc64659197f07db48"],["E:/blog/public/categories/maven/index.html","ca703f8b1ab17263ee487f92b6201f33"],["E:/blog/public/categories/mysql/index.html","9de1119998d8a5a72b430b27732e70cf"],["E:/blog/public/categories/python/index.html","d39a8abd95b133ec1f4b6949e4ded146"],["E:/blog/public/categories/springBoot/index.html","f99e69d19b2309ccb0ba06458fa85679"],["E:/blog/public/categories/springCloud/index.html","3d3668bd3fd11b37c7036153fc6e7994"],["E:/blog/public/categories/tomcat/index.html","5dc2a13b142044fb706975b3c420260a"],["E:/blog/public/css/APlayer.min.css","23e04b27a764c86627313552571f4b11"],["E:/blog/public/css/custom.css","4047f7bf45e5d0b702870762a1faabd4"],["E:/blog/public/css/index.css","f70097ade2077e55b009f5908803e077"],["E:/blog/public/css/less.css","11abb8788866d08affb7f51053bbc306"],["E:/blog/public/css/tag.css","a5ada7bfc46c5481effe7dffd27b1177"],["E:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/public/ebook/index.html","c6f61bf88fbfb3ce0f96e3be5607b649"],["E:/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/blog/public/index.html","a3f069db4bc7c2f80d3677cdb1ad4610"],["E:/blog/public/js/botui.js","9bd324283e8898e4b488a7903a7e9ed6"],["E:/blog/public/js/less.js","36157af40f1fa2bd38447017170258d3"],["E:/blog/public/js/main.js","daa594fa296eadb9c43910113c5f8341"],["E:/blog/public/js/sakura.js","d259eedc4ec9687b501f075693a5afbd"],["E:/blog/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/blog/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/blog/public/js/style.js","5e4dd5aa78a8fc4bac45ae6866b1bcea"],["E:/blog/public/js/timeDate.js","a09793407ca641e40673dab7c07012e9"],["E:/blog/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/blog/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/blog/public/link/index.html","8c6c0853c2663ae111b253aa1246d61d"],["E:/blog/public/movies/index.html","302d3a3011efb01b39d45d67deb6595a"],["E:/blog/public/music/index.html","6b19fd67d38629b5ecb82972491dd0fa"],["E:/blog/public/page/2/index.html","8634f427554bb3fa3aad1e28ffad5780"],["E:/blog/public/photos/index.html","72ddb6fd1f6dc675414972cf808ce65f"],["E:/blog/public/tags/index.html","1503e91e8cb3c9c199e1af4ff89d2858"],["E:/blog/public/tags/jvm/index.html","19fedf7c79749b8451e5f85fcee52400"],["E:/blog/public/tags/linux/index.html","8db63321d07062073a6a3ee66f70ffe8"],["E:/blog/public/tags/maven/index.html","3bee4e8177aef6d937ee0ae47150bf96"],["E:/blog/public/tags/mysql/index.html","d7412881b7b16eb7c785a9e2225ea0ed"],["E:/blog/public/tags/python/index.html","fc3c1affaaf77b0d2148fa333e855514"],["E:/blog/public/tags/springBoot/index.html","b2581279137f62e510b3c04b0570a794"],["E:/blog/public/tags/springCloud/index.html","830beb9d98aec15dfcbc44d5510b1099"],["E:/blog/public/tags/tomcat/index.html","3f620bd64da13eb6e633adbac84e1dda"]];
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







