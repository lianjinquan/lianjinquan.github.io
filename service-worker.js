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

var precacheConfig = [["E:/blog/public/2020/01/14/java/代码规范/index.html","0b89e8887beaa6086771f84030de3f5d"],["E:/blog/public/2020/01/14/oracle/oracle/index.html","eb9a85ac0cb91b1bae48cb88fcc76dcf"],["E:/blog/public/2020/01/14/oracle/oracle概述/index.html","63901c1561b4d15edd971875f0f6e3fa"],["E:/blog/public/2020/02/29/java/分布式/index.html","556c494d4cac44bab94b8d67fd898135"],["E:/blog/public/2020/02/29/mysql/mysql/index.html","fb29e54dd01bf26ca825b7f4e3352b9f"],["E:/blog/public/2020/02/29/mysql/索引/index.html","ba6be6e7d2f32d59ba459cfa5a1a3b61"],["E:/blog/public/2020/02/29/redis/redis/index.html","134396a7a49d0ec91fea4b97b0aa96e2"],["E:/blog/public/2020/03/07/java/异常/index.html","fb5744549ad826a3afe2120b5b119363"],["E:/blog/public/2020/03/09/redis/redis基础/index.html","24776f73509ff07dfb7611aeba0e15ed"],["E:/blog/public/2020/03/11/mysql/数据库设计规范/index.html","20bf61350a334d0755d311daaf0c2049"],["E:/blog/public/2020/03/11/spring boot/springboot/index.html","c90fce973aded2ab6edd132cd871ad61"],["E:/blog/public/2020/03/11/事务/事务/index.html","0519f706b935a645d0cb8f98ab99b746"],["E:/blog/public/2020/03/11/线程/多线程/index.html","826ced25de879e3b194653350d97cdd8"],["E:/blog/public/2020/03/11/线程/并发/index.html","37885fe97b59686acb1af770ee4586dd"],["E:/blog/public/2020/03/11/线程/线程池/index.html","c76da2269bcd4eb854006d37d310a4ff"],["E:/blog/public/2020/08/21/java/集合/index.html","1641e7ff6493289f7a584db04b8c08f5"],["E:/blog/public/2020/08/22/java/java基础/index.html","a61c2a8683918d90eef3ab5d459e72a6"],["E:/blog/public/2020/08/23/linux/linux/index.html","250b9b5de5e98ea3ea8f5cfb7fe1a042"],["E:/blog/public/2020/08/30/linux/linux的文件权限与目录配置/index.html","86d78ca8fff38bf8f3d74bc8f5487775"],["E:/blog/public/2020/09/13/python/超实用的you-get视频下载工具/index.html","7afa2c6c6cf21ac19d17052ae56b0d73"],["E:/blog/public/Gallery/index.html","f48ef27da2ea32faa5b71c9af9a0228b"],["E:/blog/public/Gallery/marvel/index.html","db103f02de79fbb7e985b592bd58697b"],["E:/blog/public/Gallery/ohmygirl/index.html","8d3aa524dd7a849ad338904f8978ed1a"],["E:/blog/public/Gallery/wallpaper/index.html","7e9078aef321d61195ebe46315a3a333"],["E:/blog/public/about/index.html","a829dddac34a50d2310e264c47f56478"],["E:/blog/public/archives/2020/01/index.html","428cb3eb33b40222f4c093ec80bf2014"],["E:/blog/public/archives/2020/02/index.html","3ac8ef7850dba37f20d8a779f5d3bc49"],["E:/blog/public/archives/2020/03/index.html","d22402850a5c92cf4a614830a1ae76c6"],["E:/blog/public/archives/2020/08/index.html","372902ef75f85d6ed2b2861138a1679c"],["E:/blog/public/archives/2020/09/index.html","31fc5964397d09aee481ecba984642e7"],["E:/blog/public/archives/2020/index.html","07859acfad25e96a7e38620ebc36a407"],["E:/blog/public/archives/2020/page/2/index.html","6869315b333e092c8ab451febcfabc5c"],["E:/blog/public/archives/index.html","e5ed205a43bb2c1b1d36d3e4fbae60c8"],["E:/blog/public/archives/page/2/index.html","ee037f750c7f25202682f302173037f0"],["E:/blog/public/categories/Oracle/index.html","c2500a6c25323f2a9d6d5a20d538156b"],["E:/blog/public/categories/index.html","050db00e905b30a1444852001e0479e7"],["E:/blog/public/categories/java/index.html","949153afca0a34e63f019a53dce1db00"],["E:/blog/public/categories/linux/index.html","40605569d387a1733e25779aa702efcb"],["E:/blog/public/categories/mysql/index.html","065888bc954408a0b8d3ce6c2748d169"],["E:/blog/public/categories/python/index.html","b53eeb2e2bde46b269fa4608eb7949f8"],["E:/blog/public/categories/redis/index.html","b3c3c630ea6993ff4d6f60db99dface3"],["E:/blog/public/categories/redis基础/index.html","88fcfb05edcc84ac700ebff3a9db8a30"],["E:/blog/public/categories/springboot/index.html","03a1981d48ca4079cb3286d06d12db48"],["E:/blog/public/categories/事务/index.html","932f7ae27c96b9fea7609ab4d5f2cfda"],["E:/blog/public/categories/代码规范/index.html","d116c98e60f0d97fe21c3a7ab6453e94"],["E:/blog/public/categories/分布式/index.html","a02fc5e34284c428a5669d721187775d"],["E:/blog/public/categories/多线程/index.html","e44cf85e39c4f36bc48a7e80ce58c18f"],["E:/blog/public/categories/异常/index.html","99977dce1ec9c54b14bf4d61f5c06bec"],["E:/blog/public/categories/数据库设计规范/index.html","76fc3978c3a9f2b4f6e57fa823c1d31b"],["E:/blog/public/categories/索引/index.html","e4ff06412319d3b83085f718633729a0"],["E:/blog/public/css/APlayer.min.css","23e04b27a764c86627313552571f4b11"],["E:/blog/public/css/custom.css","4047f7bf45e5d0b702870762a1faabd4"],["E:/blog/public/css/index.css","18341695e02d670989438921a3284a59"],["E:/blog/public/css/less.css","44b0fd20399399aefc207089fc6444d8"],["E:/blog/public/css/tag.css","a5ada7bfc46c5481effe7dffd27b1177"],["E:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/public/images/01.png","c13a8cead336d7d7c581e621c2a649f2"],["E:/blog/public/images/02.jpg","8f22921a13bdb9ef79a784647b413362"],["E:/blog/public/images/03.png","b4a0df886b51ff1ad3275a245645aa15"],["E:/blog/public/images/04.jpg","43505b5e4a0a38c13cfe0b14a7037bca"],["E:/blog/public/images/BeanFactory Bean生命周期.png","00262e32b2d0077ebc92056dcbaee3f4"],["E:/blog/public/images/Spring 框架的 7 个模块.gif","ac382952d4f122f7d7d50d81950586f0"],["E:/blog/public/images/SpringMVC的执行流程.png","a932dadbd4a1e2f39b37dba562ba1828"],["E:/blog/public/images/SpringMvc执行流程.png","ae9b4c4e3daa99f1f014096342abaf26"],["E:/blog/public/images/Springmvc系统分层.png","b84880ebca399b1421af8c74c046d369"],["E:/blog/public/images/aof持久化.png","0015602001059d3564dc944fd357235a"],["E:/blog/public/images/backage.jpg","0acd62167392d46c59b0d0f8deefbcc4"],["E:/blog/public/images/dump.png","b4f55e1dec6c160d90b458d2db707698"],["E:/blog/public/images/get与post区别.png","78f60b099c7137d7da12ca0f1975ce9e"],["E:/blog/public/images/mysql存储大小.png","e00f19d308b58c81d1da4cfe8c7c04ae"],["E:/blog/public/images/rdb持久化.png","828e1e27c73e39abf855ee57959b9846"],["E:/blog/public/images/redis持久化.png","9c956b44e607cf7528a3219f0946ca6b"],["E:/blog/public/images/redis持久化2.png","c8582ebeb09abd7977a05036dbab7a06"],["E:/blog/public/images/冒泡排序.gif","4700503d1944f2cc25ea073339203b27"],["E:/blog/public/images/可见性问题.png","5bdeefd733c45b710c00b6bc182e7a1d"],["E:/blog/public/images/并发编程.jpg","1934c77529315f1ac43a0485b551ec9e"],["E:/blog/public/images/并行.png","1ec9c7937efecacde958eddd5f738c0b"],["E:/blog/public/images/打印4种情况.png","9a2ae8b73f52713f19aa0a14cec232e1"],["E:/blog/public/images/数据库事务的隔离级别.png","c584d1dbe0d04a3c39c4dcccedb94c28"],["E:/blog/public/images/线程切换.png","2046b1dc422564350b0e22a6570e8ee9"],["E:/blog/public/images/线程池.png","7d42d7149d5008f5ea71a3105ae4f11d"],["E:/blog/public/images/线程池参数.png","79025d4da1fff9997684220cc0fcf1b8"],["E:/blog/public/images/线程池参数顺序.png","130d484535fd9849e0170e42a37dc1cc"],["E:/blog/public/images/线程状态转换.png","1dd89e14b06d81d45cdd5ed2b442f358"],["E:/blog/public/images/线程生命周期.jpg","aef061e8705de8f30d8b39b3a66ea192"],["E:/blog/public/images/线程生命周期.png","f3f0e87092e9fc7edc31529620c45846"],["E:/blog/public/images/线程的生命周期.png","e1aa23736f3a18a8b0a190751cff52d3"],["E:/blog/public/images/进程.png","d59d7442389e6eb558f8de5aaadb8041"],["E:/blog/public/images/配置文件优先级.jpg","32e5aea241c61dee4d3d75b0815ccc15"],["E:/blog/public/images/集合.png","0060fd5e31f2660ceefb4feccef08bda"],["E:/blog/public/images/集合2.png","c75d4c55996ffd9d779ffe9295a75e8b"],["E:/blog/public/images/集合3.jpg","028237c2b37f496bf97b6b15685b4584"],["E:/blog/public/images/集合分类.png","d5d107d4f337f1f58d68922c4b1e3c69"],["E:/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/blog/public/index.html","5d8c1879cbefb1f6e0c6f4d8e0c46c98"],["E:/blog/public/js/main.js","b6e408c9b509ce2b80cc5ce998b6502b"],["E:/blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["E:/blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["E:/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["E:/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["E:/blog/public/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["E:/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["E:/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["E:/blog/public/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["E:/blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["E:/blog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/blog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["E:/blog/public/link/index.html","ba295b46421d5f7d4e123631c679f7a0"],["E:/blog/public/movies/index.html","688d644f0934ecd23a1afbc45bb6d93f"],["E:/blog/public/music/index.html","4cd978cb09f246127845ae61b320af5e"],["E:/blog/public/page/2/index.html","32fa5702a81945f4f01dd9ea55911740"],["E:/blog/public/photos/index.html","6d292a6941c3113f254d7e1953bbe4c5"],["E:/blog/public/tags/Oracle/index.html","db00a8dd32b33c25254746a3a5dccd7e"],["E:/blog/public/tags/index.html","ae768550e940576093a3537d0d5bbb5a"],["E:/blog/public/tags/java/index.html","cc13938f95295e4500786f2a07cc17d7"],["E:/blog/public/tags/linux/index.html","aacd5d537621a894809dd5d19b8832c2"],["E:/blog/public/tags/mysql/index.html","a796f57ab1a3d034018126cfd37e2e2e"],["E:/blog/public/tags/python/index.html","31536f4a8f29b52c578f61ff26f0facd"],["E:/blog/public/tags/redis/index.html","49167d4608aacc2277104e7191a9137e"],["E:/blog/public/tags/redis基础/index.html","c900dc85cdbfcfcda7aad0103954f11f"],["E:/blog/public/tags/springboot/index.html","04904e728ee21150865e8310cbf8847e"],["E:/blog/public/tags/事务/index.html","8bb285758bce59ef1313065a04853f5e"],["E:/blog/public/tags/代码规范/index.html","6cd5c98714527730bdc48f124ada2a72"],["E:/blog/public/tags/分布式/index.html","d77de76f1e33186c77d8b3a61c9601d2"],["E:/blog/public/tags/多线程/index.html","c90f0aec1baed150af1bcc690eeef91b"],["E:/blog/public/tags/异常/index.html","8ef7c89f7ca72676cabb327906f663f1"],["E:/blog/public/tags/数据库设计规范/index.html","c26c88891e54a0854ccc365b6b7bb1ca"],["E:/blog/public/tags/索引/index.html","e7dfa47bb018504c6fcb5608e5a96e24"]];
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







