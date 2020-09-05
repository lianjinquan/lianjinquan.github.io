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

var precacheConfig = [["E:/blog/public/2020/01/14/java/代码规范/index.html","ad990a7084aa746524b2a5decd2f75c6"],["E:/blog/public/2020/01/14/oracle/oracle/index.html","49de7f4d111c39cb47c89585e6cd2fa9"],["E:/blog/public/2020/01/14/oracle/oracle概述/index.html","143fe94ef478406c6743f7ab7db893fc"],["E:/blog/public/2020/02/29/java/分布式/index.html","690d90abf13fb80198d1e924a525e7e9"],["E:/blog/public/2020/02/29/mysql/mysql/index.html","38bef71d61ef042253f7406657df94b1"],["E:/blog/public/2020/02/29/mysql/索引/index.html","afad586a3da047a632047f5a53a29a64"],["E:/blog/public/2020/02/29/redis/redis/index.html","611c3d3b6a2c5514e1d603936f19ed8d"],["E:/blog/public/2020/03/07/java/异常/index.html","016b0f9b496e1040787ff8522e68a2e0"],["E:/blog/public/2020/03/09/java/面试/index.html","11c9c7c0f84bdb1d25887d028643ea88"],["E:/blog/public/2020/03/09/redis/redis基础/index.html","41ec96a444ec1d78ee9440d498544bbb"],["E:/blog/public/2020/03/11/mysql/数据库设计规范/index.html","d33ae14879ad4b499700dfd79f74c50e"],["E:/blog/public/2020/03/11/spring boot/springboot/index.html","e69f9728536a2c9108b7ad5edead93e7"],["E:/blog/public/2020/03/11/事务/事务/index.html","ba13ce64130073090681fe99bdf62ab8"],["E:/blog/public/2020/03/11/线程/多线程/index.html","676800835a1044f725a3bfe9b88314d9"],["E:/blog/public/2020/03/11/线程/并发/index.html","764d6600518004620245db42dc35eb0e"],["E:/blog/public/2020/03/11/线程/线程池/index.html","78892f70ebff596cb6d0885c2dd98d99"],["E:/blog/public/2020/08/21/java/集合/index.html","5443e1d9abf9b877f0c8c8100828e350"],["E:/blog/public/2020/08/22/java/java基础/index.html","70be64ade828e8f813b07e0f1cd95388"],["E:/blog/public/2020/08/23/linux/linux/index.html","4e212d5b11bc66ee1a8c4f1a0b91fd37"],["E:/blog/public/2020/08/30/linux/linux的文件权限与目录配置/index.html","372be1a70abcc6f4cc6280129c6624ba"],["E:/blog/public/Gallery/index.html","7545aa52a691daafb91204d9d84be3b5"],["E:/blog/public/Gallery/marvel/index.html","f6af20a92b12f861194b2499c324e45c"],["E:/blog/public/Gallery/ohmygirl/index.html","76b5160638c7d0dbf24dc7fd9a60ca1d"],["E:/blog/public/Gallery/wallpaper/index.html","994c3972e789f635e86d58eb8286e365"],["E:/blog/public/about/index.html","27de2351cddf3911abbdcc0f4cdfd612"],["E:/blog/public/archives/2020/01/index.html","bb9e491f7a60569d9f8b9091e79ee476"],["E:/blog/public/archives/2020/02/index.html","dcd980229a6f52237f05e112505f27e8"],["E:/blog/public/archives/2020/03/index.html","64884184096220648fec34cb702e0fa2"],["E:/blog/public/archives/2020/08/index.html","b0bd45cd1c2793c80bae1bea24ee0cc6"],["E:/blog/public/archives/2020/index.html","fee84756db935ab6facdac2c6c5aa859"],["E:/blog/public/archives/2020/page/2/index.html","7fd64d9f270a5bb3b05bd1601cc2517a"],["E:/blog/public/archives/index.html","3e661efa759618874b6ea375be97a6ba"],["E:/blog/public/archives/page/2/index.html","44cc1317aa388bd0aebb6cc5de62c402"],["E:/blog/public/categories/Oracle/index.html","26c477a276963d1cb0c50921fb845242"],["E:/blog/public/categories/index.html","99737e737dd405efc2b1cc9b3c4d01c0"],["E:/blog/public/categories/java/index.html","39692fd740fbf9a2ef382b0813a345a4"],["E:/blog/public/categories/linux/index.html","bc9a43c4071e1885dd65b736989df718"],["E:/blog/public/categories/mysql/index.html","9eca915ebae8b1e2aefffa19b45210ae"],["E:/blog/public/categories/redis/index.html","78cf3f74e452d23aa12e28f6c95d1a91"],["E:/blog/public/categories/redis基础/index.html","bf89aeebb5d11d6d153de09fe23aa2d5"],["E:/blog/public/categories/springboot/index.html","76d3a410ea90cb5514087f409f1de829"],["E:/blog/public/categories/事务/index.html","9772275d42d23b2a30922ddec5f8c97e"],["E:/blog/public/categories/代码规范/index.html","b10b3f01aaab81ac9def9be7986e04a1"],["E:/blog/public/categories/分布式/index.html","05bab957054a75db291f70064dc9dbb4"],["E:/blog/public/categories/多线程/index.html","59c6494bf004dcb797ed17392366ac91"],["E:/blog/public/categories/异常/index.html","c505a0b401e901244f188b9eab7e3efd"],["E:/blog/public/categories/数据库设计规范/index.html","160c22dc2f4735861df938539b54a153"],["E:/blog/public/categories/索引/index.html","2ab09ab7c5b5e9692d5c554ee6281d13"],["E:/blog/public/categories/面试/index.html","1bfd138009986d1732c27491bd5ab2bf"],["E:/blog/public/css/APlayer.min.css","23e04b27a764c86627313552571f4b11"],["E:/blog/public/css/custom.css","4047f7bf45e5d0b702870762a1faabd4"],["E:/blog/public/css/index.css","6be2922c86db195ae16c782b0dc87426"],["E:/blog/public/css/less.css","44b0fd20399399aefc207089fc6444d8"],["E:/blog/public/css/tag.css","a5ada7bfc46c5481effe7dffd27b1177"],["E:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/public/images/01.png","c13a8cead336d7d7c581e621c2a649f2"],["E:/blog/public/images/02.jpg","8f22921a13bdb9ef79a784647b413362"],["E:/blog/public/images/03.png","b4a0df886b51ff1ad3275a245645aa15"],["E:/blog/public/images/04.jpg","43505b5e4a0a38c13cfe0b14a7037bca"],["E:/blog/public/images/BeanFactory Bean生命周期.png","00262e32b2d0077ebc92056dcbaee3f4"],["E:/blog/public/images/Spring 框架的 7 个模块.gif","ac382952d4f122f7d7d50d81950586f0"],["E:/blog/public/images/SpringMVC的执行流程.png","a932dadbd4a1e2f39b37dba562ba1828"],["E:/blog/public/images/SpringMvc执行流程.png","ae9b4c4e3daa99f1f014096342abaf26"],["E:/blog/public/images/Springmvc系统分层.png","b84880ebca399b1421af8c74c046d369"],["E:/blog/public/images/aof持久化.png","0015602001059d3564dc944fd357235a"],["E:/blog/public/images/backage.jpg","0acd62167392d46c59b0d0f8deefbcc4"],["E:/blog/public/images/dump.png","b4f55e1dec6c160d90b458d2db707698"],["E:/blog/public/images/get与post区别.png","78f60b099c7137d7da12ca0f1975ce9e"],["E:/blog/public/images/mysql存储大小.png","e00f19d308b58c81d1da4cfe8c7c04ae"],["E:/blog/public/images/rdb持久化.png","828e1e27c73e39abf855ee57959b9846"],["E:/blog/public/images/redis持久化.png","9c956b44e607cf7528a3219f0946ca6b"],["E:/blog/public/images/redis持久化2.png","c8582ebeb09abd7977a05036dbab7a06"],["E:/blog/public/images/冒泡排序.gif","4700503d1944f2cc25ea073339203b27"],["E:/blog/public/images/可见性问题.png","5bdeefd733c45b710c00b6bc182e7a1d"],["E:/blog/public/images/并发编程.jpg","1934c77529315f1ac43a0485b551ec9e"],["E:/blog/public/images/并行.png","1ec9c7937efecacde958eddd5f738c0b"],["E:/blog/public/images/打印4种情况.png","9a2ae8b73f52713f19aa0a14cec232e1"],["E:/blog/public/images/数据库事务的隔离级别.png","c584d1dbe0d04a3c39c4dcccedb94c28"],["E:/blog/public/images/线程切换.png","2046b1dc422564350b0e22a6570e8ee9"],["E:/blog/public/images/线程池.png","7d42d7149d5008f5ea71a3105ae4f11d"],["E:/blog/public/images/线程池参数.png","79025d4da1fff9997684220cc0fcf1b8"],["E:/blog/public/images/线程池参数顺序.png","130d484535fd9849e0170e42a37dc1cc"],["E:/blog/public/images/线程状态转换.png","1dd89e14b06d81d45cdd5ed2b442f358"],["E:/blog/public/images/线程生命周期.jpg","aef061e8705de8f30d8b39b3a66ea192"],["E:/blog/public/images/线程生命周期.png","f3f0e87092e9fc7edc31529620c45846"],["E:/blog/public/images/线程的生命周期.png","e1aa23736f3a18a8b0a190751cff52d3"],["E:/blog/public/images/进程.png","d59d7442389e6eb558f8de5aaadb8041"],["E:/blog/public/images/配置文件优先级.jpg","32e5aea241c61dee4d3d75b0815ccc15"],["E:/blog/public/images/集合.png","0060fd5e31f2660ceefb4feccef08bda"],["E:/blog/public/images/集合2.png","c75d4c55996ffd9d779ffe9295a75e8b"],["E:/blog/public/images/集合3.jpg","028237c2b37f496bf97b6b15685b4584"],["E:/blog/public/images/集合分类.png","d5d107d4f337f1f58d68922c4b1e3c69"],["E:/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/public/img/avatar.jpg","90d70b57961af087b88b8041c5f329f3"],["E:/blog/public/img/favicon.jpg","75edba6ec0c01ba862a9f66f383b620a"],["E:/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/blog/public/index.html","634463d4aef2bd3c37f96f89c957e1e8"],["E:/blog/public/js/search/algolia.js","eea439cb041f1bd54dd5f294b89ac54d"],["E:/blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["E:/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["E:/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["E:/blog/public/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["E:/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["E:/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["E:/blog/public/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["E:/blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["E:/blog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/blog/public/link/index.html","ca36d5eb9e37168148e89abcb1b29473"],["E:/blog/public/movies/index.html","5dcdb51dc2ecdd478499cec58262bbda"],["E:/blog/public/music/index.html","d96185e2dff99caa460542e4889e5e51"],["E:/blog/public/page/2/index.html","1c3daa071b3838c8c85b7de7c7a2d9f3"],["E:/blog/public/photos/index.html","64054f0e17ee9ea835f1b0803f23e995"],["E:/blog/public/tags/Oracle/index.html","58cbed15048e97d60701940c256b65b6"],["E:/blog/public/tags/index.html","227ca753eea387a71217bc9e44f675b7"],["E:/blog/public/tags/java/index.html","802aeadd640a7785c4fcc7a77299da15"],["E:/blog/public/tags/linux/index.html","19ee81ba07c2f4b1065b8ebd964641c1"],["E:/blog/public/tags/mysql/index.html","c70ccfbe2896b43ff3374380b7266594"],["E:/blog/public/tags/redis/index.html","3e50f224d7437c7a936e91b0e41d71b6"],["E:/blog/public/tags/redis基础/index.html","7c21dad8e04f051f812d76a3fcc2e002"],["E:/blog/public/tags/springboot/index.html","ac047b53fd55101c749dc755a1b5fdab"],["E:/blog/public/tags/事务/index.html","1abaa906e0d40fdf7b5bb5aad030dd89"],["E:/blog/public/tags/代码规范/index.html","e6f918e2db07eddfd8cefb47c6e4775f"],["E:/blog/public/tags/分布式/index.html","5df8cce7da7180f77526d2015c308a43"],["E:/blog/public/tags/多线程/index.html","f30c1e2c6e4b2726c5431548d2c9fefc"],["E:/blog/public/tags/异常/index.html","6df9ebf20e052ebbcc76912d6711ce9a"],["E:/blog/public/tags/数据库设计规范/index.html","71eac5be6b2285f0d06d938e800dbb2e"],["E:/blog/public/tags/索引/index.html","ae85c843a3b6745f77bf855f55a0a537"],["E:/blog/public/tags/面试/index.html","cdb53b030503f79117c2cc24428ed014"]];
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







