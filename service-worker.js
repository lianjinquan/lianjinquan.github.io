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

var precacheConfig = [["E:/blog/public/2020/01/14/java/代码规范/index.html","237b529d0d51287dbf45ba7bae96051d"],["E:/blog/public/2020/01/14/oracle/oracle/index.html","5af4ac82e69a2922e588ca58ff35a0b5"],["E:/blog/public/2020/01/14/oracle/oracle概述/index.html","9e30ca880fc2d2a27d615d7e7aa2b835"],["E:/blog/public/2020/02/29/java/分布式/index.html","ab9e3eb405b4a311ed224360c7681e8d"],["E:/blog/public/2020/02/29/mysql/mysql/index.html","c5de9a732fc596c6dac89da798a535dd"],["E:/blog/public/2020/02/29/mysql/索引/index.html","2c225ac89899c9edbb76a1596819d577"],["E:/blog/public/2020/02/29/redis/redis/index.html","d2f45543659503fa05836514f7040c67"],["E:/blog/public/2020/03/07/java/异常/index.html","5d7f136333bef1cbf455e0839b5d5ec9"],["E:/blog/public/2020/03/09/java/面试/index.html","4860e6237942f9e07beb4d1b09986378"],["E:/blog/public/2020/03/09/redis/redis基础/index.html","1b98aea0e95cfe5c1b7c744297e7b058"],["E:/blog/public/2020/03/11/mysql/数据库设计规范/index.html","6cdbc00a5c12abda0e94dd4ed2727f3b"],["E:/blog/public/2020/03/11/spring boot/springboot/index.html","77bb4728c2acdc9e0208babc46f45002"],["E:/blog/public/2020/03/11/事务/事务/index.html","3cacbf8a37f5b91e6c21521a527af81b"],["E:/blog/public/2020/03/11/线程/多线程/index.html","7e80a5d6c5f87cc2753e772193603381"],["E:/blog/public/2020/03/11/线程/并发/index.html","744f483f265e21316bb3af4941e5d65e"],["E:/blog/public/2020/03/11/线程/线程池/index.html","b2cec5948cf5c28f3e91c252792d2a64"],["E:/blog/public/2020/08/21/java/集合/index.html","73a8630f8b99120a511bd81d6e3423ea"],["E:/blog/public/2020/08/22/java/java基础/index.html","ad5d0d32ddbe5a85feb6cbc296bff0e4"],["E:/blog/public/2020/08/23/linux/linux/index.html","747d1d2f803fd55f99115151efa0fdde"],["E:/blog/public/2020/08/30/linux/linux的文件权限与目录配置/index.html","011ca5d37755297d550ae4979795c510"],["E:/blog/public/Gallery/index.html","11a2b94f2c9b105186f847736cc5865f"],["E:/blog/public/Gallery/marvel/index.html","fab1daf3d0365759ec9983a785232c27"],["E:/blog/public/Gallery/ohmygirl/index.html","71e82f1538951d4f16c3aaebffc00208"],["E:/blog/public/Gallery/wallpaper/index.html","11e9fdf16d5a4cc8692100974cabd4a6"],["E:/blog/public/about/index.html","5c4ae42a6567a90bee1c645f22e6d038"],["E:/blog/public/archives/2020/01/index.html","095c928d4a5d34ac87086360c5b81d9b"],["E:/blog/public/archives/2020/02/index.html","fe0bd4f72ad5e87290b4015f918967c0"],["E:/blog/public/archives/2020/03/index.html","2a8e8ea82386821d2f7cce1c75bdc32f"],["E:/blog/public/archives/2020/08/index.html","20ddc9231cc36986619af1bd4b083c9e"],["E:/blog/public/archives/2020/index.html","5c13035f9ce8d18977fd2b7eab1afd67"],["E:/blog/public/archives/2020/page/2/index.html","c5ce09198c7f3e775f2304d867f2c8ad"],["E:/blog/public/archives/index.html","10cfdda6ebf405a7acae2c01e6e66935"],["E:/blog/public/archives/page/2/index.html","3e8a17f15d4996e2bdc89a0649879287"],["E:/blog/public/categories/Oracle/index.html","3b675671ae55a4efad4252b22fba1f95"],["E:/blog/public/categories/index.html","cb7ce97d448dbc408410f4fc56daad7e"],["E:/blog/public/categories/java/index.html","7b5fb5ee0a952f17963a0b51154ce716"],["E:/blog/public/categories/linux/index.html","0ad378744cdee604d893d58f79f63365"],["E:/blog/public/categories/mysql/index.html","b530915c7426f7a606dac30f22077616"],["E:/blog/public/categories/redis/index.html","17fc448e96577ffd7ebf5857a9117eef"],["E:/blog/public/categories/redis基础/index.html","a795fcca8528aea6104a6205067ed10e"],["E:/blog/public/categories/springboot/index.html","35c97decf6e0fcc374e4e4c28472c1d6"],["E:/blog/public/categories/事务/index.html","a29e272a41583e0e9ab4a2cf8ae31de1"],["E:/blog/public/categories/代码规范/index.html","141ad5d344521373bce703882337e97e"],["E:/blog/public/categories/分布式/index.html","8e600bea2140a5b0cb3c95bc86ef8121"],["E:/blog/public/categories/多线程/index.html","b0b42f6ab620bc0ac98459c70a99a2a8"],["E:/blog/public/categories/异常/index.html","92b029428a534dfd8eb98aebd1ed3aac"],["E:/blog/public/categories/数据库设计规范/index.html","edb33addfed712b181f39d608a89ec02"],["E:/blog/public/categories/索引/index.html","5fcac7595c4bc5e215ac4d7c4bd63ee4"],["E:/blog/public/categories/面试/index.html","cb052e2cb6e5a71f5742207ee555666f"],["E:/blog/public/css/APlayer.min.css","23e04b27a764c86627313552571f4b11"],["E:/blog/public/css/custom.css","4047f7bf45e5d0b702870762a1faabd4"],["E:/blog/public/css/index.css","6be2922c86db195ae16c782b0dc87426"],["E:/blog/public/css/less.css","44b0fd20399399aefc207089fc6444d8"],["E:/blog/public/css/tag.css","a5ada7bfc46c5481effe7dffd27b1177"],["E:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/public/images/01.png","c13a8cead336d7d7c581e621c2a649f2"],["E:/blog/public/images/02.jpg","8f22921a13bdb9ef79a784647b413362"],["E:/blog/public/images/03.png","b4a0df886b51ff1ad3275a245645aa15"],["E:/blog/public/images/04.jpg","43505b5e4a0a38c13cfe0b14a7037bca"],["E:/blog/public/images/BeanFactory Bean生命周期.png","00262e32b2d0077ebc92056dcbaee3f4"],["E:/blog/public/images/Spring 框架的 7 个模块.gif","ac382952d4f122f7d7d50d81950586f0"],["E:/blog/public/images/SpringMVC的执行流程.png","a932dadbd4a1e2f39b37dba562ba1828"],["E:/blog/public/images/SpringMvc执行流程.png","ae9b4c4e3daa99f1f014096342abaf26"],["E:/blog/public/images/Springmvc系统分层.png","b84880ebca399b1421af8c74c046d369"],["E:/blog/public/images/aof持久化.png","0015602001059d3564dc944fd357235a"],["E:/blog/public/images/backage.jpg","0acd62167392d46c59b0d0f8deefbcc4"],["E:/blog/public/images/dump.png","b4f55e1dec6c160d90b458d2db707698"],["E:/blog/public/images/get与post区别.png","78f60b099c7137d7da12ca0f1975ce9e"],["E:/blog/public/images/mysql存储大小.png","e00f19d308b58c81d1da4cfe8c7c04ae"],["E:/blog/public/images/rdb持久化.png","828e1e27c73e39abf855ee57959b9846"],["E:/blog/public/images/redis持久化.png","9c956b44e607cf7528a3219f0946ca6b"],["E:/blog/public/images/redis持久化2.png","c8582ebeb09abd7977a05036dbab7a06"],["E:/blog/public/images/冒泡排序.gif","4700503d1944f2cc25ea073339203b27"],["E:/blog/public/images/可见性问题.png","5bdeefd733c45b710c00b6bc182e7a1d"],["E:/blog/public/images/并发编程.jpg","1934c77529315f1ac43a0485b551ec9e"],["E:/blog/public/images/并行.png","1ec9c7937efecacde958eddd5f738c0b"],["E:/blog/public/images/打印4种情况.png","9a2ae8b73f52713f19aa0a14cec232e1"],["E:/blog/public/images/数据库事务的隔离级别.png","c584d1dbe0d04a3c39c4dcccedb94c28"],["E:/blog/public/images/线程切换.png","2046b1dc422564350b0e22a6570e8ee9"],["E:/blog/public/images/线程池.png","7d42d7149d5008f5ea71a3105ae4f11d"],["E:/blog/public/images/线程池参数.png","79025d4da1fff9997684220cc0fcf1b8"],["E:/blog/public/images/线程池参数顺序.png","130d484535fd9849e0170e42a37dc1cc"],["E:/blog/public/images/线程状态转换.png","1dd89e14b06d81d45cdd5ed2b442f358"],["E:/blog/public/images/线程生命周期.jpg","aef061e8705de8f30d8b39b3a66ea192"],["E:/blog/public/images/线程生命周期.png","f3f0e87092e9fc7edc31529620c45846"],["E:/blog/public/images/线程的生命周期.png","e1aa23736f3a18a8b0a190751cff52d3"],["E:/blog/public/images/进程.png","d59d7442389e6eb558f8de5aaadb8041"],["E:/blog/public/images/配置文件优先级.jpg","32e5aea241c61dee4d3d75b0815ccc15"],["E:/blog/public/images/集合.png","0060fd5e31f2660ceefb4feccef08bda"],["E:/blog/public/images/集合2.png","c75d4c55996ffd9d779ffe9295a75e8b"],["E:/blog/public/images/集合3.jpg","028237c2b37f496bf97b6b15685b4584"],["E:/blog/public/images/集合分类.png","d5d107d4f337f1f58d68922c4b1e3c69"],["E:/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/public/img/avatar.jpg","90d70b57961af087b88b8041c5f329f3"],["E:/blog/public/img/favicon.jpg","75edba6ec0c01ba862a9f66f383b620a"],["E:/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/blog/public/index.html","aa4cd08f778242d02278dfbca1b6dfd9"],["E:/blog/public/js/search/algolia.js","eea439cb041f1bd54dd5f294b89ac54d"],["E:/blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["E:/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["E:/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["E:/blog/public/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["E:/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["E:/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["E:/blog/public/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["E:/blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["E:/blog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/blog/public/link/index.html","d47774eb0b8c50aa59e7af2b92a2be5d"],["E:/blog/public/movies/index.html","1d7cc3761d379268dc76ba506ee66c2d"],["E:/blog/public/music/index.html","b77c45924a7b25fa10dd1fe2a8936846"],["E:/blog/public/page/2/index.html","1649a3cd1161546c6893a0c46ca9044e"],["E:/blog/public/photos/index.html","f9ca17323689f7dc52ac00663c5a8c19"],["E:/blog/public/tags/Oracle/index.html","751a5d322d2fdbacbba99dde94dcb17e"],["E:/blog/public/tags/index.html","1cd7982f6007ffe392afa2156ca07829"],["E:/blog/public/tags/java/index.html","93b769be1b4e46893553d4f28f4c533f"],["E:/blog/public/tags/linux/index.html","bd57212baa5b6bade7208fba802365af"],["E:/blog/public/tags/mysql/index.html","6991a225238ea7d7ce12462212d960cc"],["E:/blog/public/tags/redis/index.html","6381c7f37be1fcf3633fb3767f688615"],["E:/blog/public/tags/redis基础/index.html","3295a8ec028528c41a311da8baf13710"],["E:/blog/public/tags/springboot/index.html","20d4149f1e83e8fcd53908a8dda7ca1b"],["E:/blog/public/tags/事务/index.html","26b48ec0654db49778f082517662ec7c"],["E:/blog/public/tags/代码规范/index.html","403f0d5948fd592fc13f693bfc13a566"],["E:/blog/public/tags/分布式/index.html","120295554c0646f87db2fccd4f6d27d5"],["E:/blog/public/tags/多线程/index.html","e2f86db05c6941855592518ede5f8834"],["E:/blog/public/tags/异常/index.html","39f11e7a38f8a255fe3f931d7bb846f4"],["E:/blog/public/tags/数据库设计规范/index.html","05d02320b70409b295d0260d7708f881"],["E:/blog/public/tags/索引/index.html","beae6dfe1782b59ea7b3d2f8f7a909ac"],["E:/blog/public/tags/面试/index.html","5c94b30fa55e417669d218524e157b91"]];
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







