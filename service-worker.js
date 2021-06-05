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

var precacheConfig = [["D:/blog/public/2020/09/12/mysql/mysql01/index.html","20fc1b5c47fce985268bba1afed30fc2"],["D:/blog/public/2020/09/12/mysql/mysql02/index.html","043d45b87bae685c900152e1371fddcd"],["D:/blog/public/2020/09/13/python/python01/index.html","6d198cb305fe668b2cc93f10f7a60e30"],["D:/blog/public/2020/09/15/tomcat/tomcat01/index.html","5fb27f8aa4e9ff516bd563ddffd19980"],["D:/blog/public/2020/09/17/springboot/springboot01/index.html","ce238f6dce6d36d6b9177dcf9c394699"],["D:/blog/public/2020/09/19/jvm/jvm01/index.html","a25044514d76468698e183cd01f28050"],["D:/blog/public/2020/09/20/jvm/jvm02/index.html","802a0c205a74e08c44fe9a386bcaaec5"],["D:/blog/public/2020/10/11/jvm/jvm03/index.html","5f2db5f5f6454eadaa40eb312704317a"],["D:/blog/public/2020/10/11/jvm/jvm04/index.html","3133303334fbb180a74cb8ad72d96d4c"],["D:/blog/public/2020/11/29/maven/maven01/index.html","07f23e7ff822bf9f00dd199dcaa13109"],["D:/blog/public/2020/12/01/linux/linux02/index.html","795e2e390af9b30d2378d3a4ff142769"],["D:/blog/public/2020/12/07/java/java8/index.html","d6a3ea7639aedab61a0aca832f21565a"],["D:/blog/public/2020/12/07/linux/linux01/index.html","2c32772c0cb90892a753649ffed27924"],["D:/blog/public/2020/12/07/spring/spring/index.html","721365809ee63146577ee9774bfe3f23"],["D:/blog/public/2020/12/28/docker/docker01/index.html","188db184f2a160ac9c55384236b6c8f5"],["D:/blog/public/2021/04/04/redis/redis01/index.html","630cf18b51a90bd69bab63c4a3ecc4a0"],["D:/blog/public/about/index.html","98df8d631079a247fa5325bd86c71aed"],["D:/blog/public/archives/2020/09/index.html","ce69a1ff344aeeb2eedf5ec0a6a906ba"],["D:/blog/public/archives/2020/10/index.html","828d2a6fbac543a2b0c9a052b3e646a8"],["D:/blog/public/archives/2020/11/index.html","e9055e163c50631accf30eccbb58c240"],["D:/blog/public/archives/2020/12/index.html","83436a09f51a38fcd30f9ef0cb784150"],["D:/blog/public/archives/2020/index.html","bab3484544ba9ec6dd32c4a58edc6069"],["D:/blog/public/archives/2020/page/2/index.html","9d6e2cb721612cc384cdba38e190fc5f"],["D:/blog/public/archives/2021/04/index.html","ee5abd30b8ecde304b5b9bb4dc00d11e"],["D:/blog/public/archives/2021/index.html","e38e2f15b06a10eebda9db0832ab87fb"],["D:/blog/public/archives/index.html","3b8abeda89d8d3f5df8580312801ff18"],["D:/blog/public/archives/page/2/index.html","a0fe7d917ea7470528184ccb7154d5c2"],["D:/blog/public/categories/docker/index.html","92ac672ffeb63f8d6a3400075dc47ad1"],["D:/blog/public/categories/index.html","0092ae8e26c92858fcb748eb93dbd7c5"],["D:/blog/public/categories/java/index.html","86220e192b95ee5879b9f5c5d1e00c54"],["D:/blog/public/categories/jvm/index.html","a6741e02fd63c801c19aaf53e515b5c6"],["D:/blog/public/categories/linux/index.html","fc9abc90cb968cec12e2f0902d4ca548"],["D:/blog/public/categories/maven/index.html","f02bb3bff2cfbbf88c59be49e971d718"],["D:/blog/public/categories/mysql/index.html","38434474de32a20dd987d9cc76f0a1fa"],["D:/blog/public/categories/python/index.html","41f6428a31adb2fb0f1ba62d04868c62"],["D:/blog/public/categories/redis/index.html","b11e6eac59aeceac684f950699e224e5"],["D:/blog/public/categories/spring/index.html","f2f2b80683b8771a7af7c76e3f55571e"],["D:/blog/public/categories/springBoot/index.html","bf75e2324a595180a2976746b0af71b2"],["D:/blog/public/categories/tomcat/index.html","81195a1357f8152f0a721fd58b978eb7"],["D:/blog/public/css/APlayer.min.css","23e04b27a764c86627313552571f4b11"],["D:/blog/public/css/custom.css","4047f7bf45e5d0b702870762a1faabd4"],["D:/blog/public/css/index.css","7f8127f3daf6800112dc0f74cc243415"],["D:/blog/public/css/less.css","11abb8788866d08affb7f51053bbc306"],["D:/blog/public/css/tag.css","a5ada7bfc46c5481effe7dffd27b1177"],["D:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/ebook/index.html","cd200da95f6afd9ceae1cfbc7e296e9c"],["D:/blog/public/gallery/animal/index.html","0afca779d2f4ea27fb88d8279a3baffe"],["D:/blog/public/gallery/index.html","5d48d50fb2d367677ebf02c6790c4440"],["D:/blog/public/gallery/word/index.html","e83c48f4ecb8aa11b8791f0dfe309f51"],["D:/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/blog/public/index.html","6c68538789db79ef9d286c48e3a378c8"],["D:/blog/public/js/botui.js","9bd324283e8898e4b488a7903a7e9ed6"],["D:/blog/public/js/less.js","36157af40f1fa2bd38447017170258d3"],["D:/blog/public/js/main.js","5641b1a6b817df7d81f465c27ed538d9"],["D:/blog/public/js/sakura.js","d259eedc4ec9687b501f075693a5afbd"],["D:/blog/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["D:/blog/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["D:/blog/public/js/style.js","5e4dd5aa78a8fc4bac45ae6866b1bcea"],["D:/blog/public/js/timeDate.js","a09793407ca641e40673dab7c07012e9"],["D:/blog/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["D:/blog/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["D:/blog/public/link/index.html","ee7516cf8c40ff68ffc72f4da4a64e07"],["D:/blog/public/movies/index.html","31acf453d6615d8b2b87d4d46a4aa735"],["D:/blog/public/music/index.html","962d117cbb4d30fe4fc7b61e8fe5499f"],["D:/blog/public/page/2/index.html","51c91d0c20789ea0653bd272649aba93"],["D:/blog/public/photos/index.html","b76ee57674a2996088c3969d820f2547"],["D:/blog/public/tags/docker/index.html","fb552481bc0c634f1523552e430e5885"],["D:/blog/public/tags/index.html","29ba2aa758ded61f2fa05a67cdeabf91"],["D:/blog/public/tags/java/index.html","25f79eedc2eff07b9dd91f2f24f4394b"],["D:/blog/public/tags/jvm/index.html","c34ec984e333fee723c682026327ce46"],["D:/blog/public/tags/linux/index.html","55baf7c652374e0be66e19dac9143060"],["D:/blog/public/tags/maven/index.html","11ee15a70b7eb71fb56e422091c8f75b"],["D:/blog/public/tags/mysql/index.html","002edb3707c32f9dad6b91027c318c77"],["D:/blog/public/tags/python/index.html","51d1dae26013a2520382c7b2b26af51d"],["D:/blog/public/tags/redis/index.html","2753f6b307ff9fe4db92db6b2f35c1d8"],["D:/blog/public/tags/spring/index.html","5cf476a974a8e729d356f2e492549818"],["D:/blog/public/tags/springBoot/index.html","657ed724bf512e460cd3241534a41223"],["D:/blog/public/tags/tomcat/index.html","055ccc5c8a6c6937d80b6fb93dd82d71"]];
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







