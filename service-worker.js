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

var precacheConfig = [["E:/blog/public/2020/09/12/mysql/mysql01/index.html","073f5d472ac389c17fb38844339b7af3"],["E:/blog/public/2020/09/12/mysql/mysql02/index.html","47b0211d2a5ca3bec963df5c28e786e7"],["E:/blog/public/2020/09/13/python/python01/index.html","4cd79370b86d7f74302ff6ecf9782b1b"],["E:/blog/public/2020/09/15/tomcat/tomcat01/index.html","762bba4c7b576cbc91341bcce38b358a"],["E:/blog/public/2020/09/17/springboot/springboot01/index.html","d17af571c0876e01034a6942be234729"],["E:/blog/public/2020/09/19/jvm/jvm01/index.html","5d80cc732f4736753372a80b1d9b73f6"],["E:/blog/public/2020/09/20/jvm/jvm02/index.html","4cf089570121faea4b5fa58a6ca9caf4"],["E:/blog/public/2020/10/11/jvm/jvm03/index.html","d1cede0b2b3c9d2dab78d6bef9692dfc"],["E:/blog/public/2020/10/11/jvm/jvm04/index.html","d104b9c71060746b11a99b3c8bc64c1f"],["E:/blog/public/2020/11/09/springcloud/springcloud02/index.html","b35b2d42cf44423af01a9af0d6773ac8"],["E:/blog/public/2020/11/17/springcloud/springcloud01/index.html","0728a5c59225ab333c63ad4461d868b4"],["E:/blog/public/2020/11/29/maven/maven01/index.html","922b32f050ae92288bc37d90f62d371c"],["E:/blog/public/2020/12/01/linux/linux02/index.html","fb11995da0ed0160f50807f6553f92f6"],["E:/blog/public/2020/12/07/linux/linux01/index.html","3cdf5faa58e027a505c1065c2addf881"],["E:/blog/public/2020/12/18/linux/linux03/index.html","94679ff6d194f35f691bc0620504171b"],["E:/blog/public/Gallery/index.html","674f8d5ddda7ba431fd9dfbf4758b60a"],["E:/blog/public/Gallery/marvel/index.html","efc0dc4691fbaa26150c02b58674cd9c"],["E:/blog/public/Gallery/ohmygirl/index.html","79b2a3345c7786ba8dc29f1824dd6beb"],["E:/blog/public/Gallery/wallpaper/index.html","b54cb0e5def9ab749df4ce35cc041548"],["E:/blog/public/about/index.html","b8bf401e176a545be220082d1a94ccea"],["E:/blog/public/archives/2020/09/index.html","f713ed23efa6ba7dcc9e48a572cc68eb"],["E:/blog/public/archives/2020/10/index.html","cd2b36103ed6c3f993b82cad3ef48538"],["E:/blog/public/archives/2020/11/index.html","0ef1539358da2fccfc3be67a5258bab9"],["E:/blog/public/archives/2020/12/index.html","96e1a1d572c31f6981d1c3a34c6ec16f"],["E:/blog/public/archives/2020/index.html","e61920eca57092218388df3e3f38b24c"],["E:/blog/public/archives/2020/page/2/index.html","cbb85b2028a2816afb16ce01464ca8e6"],["E:/blog/public/archives/index.html","4186475675cfc2b8c778d958880391fe"],["E:/blog/public/archives/page/2/index.html","3b0f9f6ed12d42faac078b5bd328b2e6"],["E:/blog/public/categories/index.html","9ac2f3c82fe1d9c23f8b94f0f7e09602"],["E:/blog/public/categories/jvm/index.html","5efc52b54811f36f21d305650fca30b8"],["E:/blog/public/categories/linux/index.html","e9d30eb30d5156aa6676bd9653a9ebb3"],["E:/blog/public/categories/maven/index.html","d5d2f46b25d03fc0172c72de4a5c1c3b"],["E:/blog/public/categories/mysql/index.html","fe1a6f89bd30c81cfd403ed21d18533e"],["E:/blog/public/categories/python/index.html","12b93899f8f7c27f43ea916bb76b65d9"],["E:/blog/public/categories/springBoot/index.html","d7e99cb2184e1295dc8833f1edde0c6a"],["E:/blog/public/categories/springCloud/index.html","18a1bb0dcc8163d895b46eb179f35ea0"],["E:/blog/public/categories/tomcat/index.html","d1d0f56ad3e7077f9e3569d250834ced"],["E:/blog/public/css/APlayer.min.css","23e04b27a764c86627313552571f4b11"],["E:/blog/public/css/custom.css","4047f7bf45e5d0b702870762a1faabd4"],["E:/blog/public/css/index.css","7b5b513be4d8f1ef5c32bd77327480de"],["E:/blog/public/css/less.css","8d88ab0d90bdf21845699194befd983d"],["E:/blog/public/css/tag.css","a5ada7bfc46c5481effe7dffd27b1177"],["E:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/public/ebook/index.html","6bfd16671649f7f4b4ef76eababa8ea5"],["E:/blog/public/images/01.png","c13a8cead336d7d7c581e621c2a649f2"],["E:/blog/public/images/02.jpg","8f22921a13bdb9ef79a784647b413362"],["E:/blog/public/images/03.png","b4a0df886b51ff1ad3275a245645aa15"],["E:/blog/public/images/04.jpg","43505b5e4a0a38c13cfe0b14a7037bca"],["E:/blog/public/images/BeanFactory Bean生命周期.png","00262e32b2d0077ebc92056dcbaee3f4"],["E:/blog/public/images/Spring 框架的 7 个模块.gif","ac382952d4f122f7d7d50d81950586f0"],["E:/blog/public/images/SpringMVC的执行流程.png","a932dadbd4a1e2f39b37dba562ba1828"],["E:/blog/public/images/SpringMvc执行流程.png","ae9b4c4e3daa99f1f014096342abaf26"],["E:/blog/public/images/Springmvc系统分层.png","b84880ebca399b1421af8c74c046d369"],["E:/blog/public/images/aof持久化.png","0015602001059d3564dc944fd357235a"],["E:/blog/public/images/backage.jpg","0acd62167392d46c59b0d0f8deefbcc4"],["E:/blog/public/images/dump.png","b4f55e1dec6c160d90b458d2db707698"],["E:/blog/public/images/get与post区别.png","78f60b099c7137d7da12ca0f1975ce9e"],["E:/blog/public/images/mysql存储大小.png","e00f19d308b58c81d1da4cfe8c7c04ae"],["E:/blog/public/images/rdb持久化.png","828e1e27c73e39abf855ee57959b9846"],["E:/blog/public/images/redis持久化.png","9c956b44e607cf7528a3219f0946ca6b"],["E:/blog/public/images/redis持久化2.png","c8582ebeb09abd7977a05036dbab7a06"],["E:/blog/public/images/冒泡排序.gif","4700503d1944f2cc25ea073339203b27"],["E:/blog/public/images/可见性问题.png","5bdeefd733c45b710c00b6bc182e7a1d"],["E:/blog/public/images/并发编程.jpg","1934c77529315f1ac43a0485b551ec9e"],["E:/blog/public/images/并行.png","1ec9c7937efecacde958eddd5f738c0b"],["E:/blog/public/images/打印4种情况.png","9a2ae8b73f52713f19aa0a14cec232e1"],["E:/blog/public/images/数据库事务的隔离级别.png","c584d1dbe0d04a3c39c4dcccedb94c28"],["E:/blog/public/images/线程切换.png","2046b1dc422564350b0e22a6570e8ee9"],["E:/blog/public/images/线程池.png","7d42d7149d5008f5ea71a3105ae4f11d"],["E:/blog/public/images/线程池参数.png","79025d4da1fff9997684220cc0fcf1b8"],["E:/blog/public/images/线程池参数顺序.png","130d484535fd9849e0170e42a37dc1cc"],["E:/blog/public/images/线程状态转换.png","1dd89e14b06d81d45cdd5ed2b442f358"],["E:/blog/public/images/线程生命周期.jpg","aef061e8705de8f30d8b39b3a66ea192"],["E:/blog/public/images/线程生命周期.png","f3f0e87092e9fc7edc31529620c45846"],["E:/blog/public/images/线程的生命周期.png","e1aa23736f3a18a8b0a190751cff52d3"],["E:/blog/public/images/进程.png","d59d7442389e6eb558f8de5aaadb8041"],["E:/blog/public/images/配置文件优先级.jpg","32e5aea241c61dee4d3d75b0815ccc15"],["E:/blog/public/images/集合.png","0060fd5e31f2660ceefb4feccef08bda"],["E:/blog/public/images/集合2.png","c75d4c55996ffd9d779ffe9295a75e8b"],["E:/blog/public/images/集合3.jpg","028237c2b37f496bf97b6b15685b4584"],["E:/blog/public/images/集合分类.png","d5d107d4f337f1f58d68922c4b1e3c69"],["E:/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/blog/public/index.html","794633f7373fc25669199d9c0769899c"],["E:/blog/public/js/less.js","0c224c4750b7373c22caa4a395fafe10"],["E:/blog/public/js/main.js","bcb975fcc4b9608ccfa3bc6004b38b65"],["E:/blog/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/blog/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/blog/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/blog/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/blog/public/link/index.html","b3978f3317e30c3eb411f7c183de1e88"],["E:/blog/public/movies/index.html","55310a5a26405ab5dec3d3debfd70332"],["E:/blog/public/music/index.html","a7ad97ceba86f04a51161101b51e008d"],["E:/blog/public/page/2/index.html","eee7b84e21e8cff988cec91267e83f71"],["E:/blog/public/photos/index.html","75cd9ae482e2aaff7f1739f8cdbbbf2c"],["E:/blog/public/tags/index.html","b19387ebe14d690247e18ea700cc8299"],["E:/blog/public/tags/jvm/index.html","a92525208d2a6b1e501f246a57ed6daa"],["E:/blog/public/tags/linux/index.html","6cdabb6aba2cfb6079e8ead0f01922cc"],["E:/blog/public/tags/maven/index.html","7b68fad897bc5d104b9377db1b56dfa6"],["E:/blog/public/tags/mysql/index.html","92fd6ce0da8e58ced888455331294ae5"],["E:/blog/public/tags/python/index.html","5e74e40e0090f2385ab0051383b13bac"],["E:/blog/public/tags/springBoot/index.html","c9379ffe32287286d7c011d2a51f8699"],["E:/blog/public/tags/springCloud/index.html","10bb6d181b993a446aad96de1eca3270"],["E:/blog/public/tags/tomcat/index.html","520f74a9de03ce319786326339b3dac2"]];
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







