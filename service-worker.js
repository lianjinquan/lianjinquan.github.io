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

var precacheConfig = [["E:/blog/public/2020/01/14/java/代码规范/index.html","9e96e63d2bf76817f36f3e2b7dae2893"],["E:/blog/public/2020/01/14/oracle/oracle/index.html","53cb2150b99859608c26f1f70dc8c4bf"],["E:/blog/public/2020/01/14/oracle/oracle概述/index.html","be66184e37bf52e8e13b60f907ab7ae8"],["E:/blog/public/2020/02/29/java/分布式/index.html","af6a51c40a99ea2d3a8347096c67a0e2"],["E:/blog/public/2020/02/29/mysql/mysql/index.html","30ffde72e658f8bc80256aff0662717d"],["E:/blog/public/2020/02/29/mysql/索引/index.html","7911c8fce707d9c8fac90af0bea854d6"],["E:/blog/public/2020/02/29/redis/redis/index.html","c0ffb2527d5d59d6f40920d705220d93"],["E:/blog/public/2020/03/07/java/异常/index.html","3b7f4c2e7cf1c626bb49dce953bf0706"],["E:/blog/public/2020/03/09/redis/redis基础/index.html","34b06392d7de5c77a48b3ca92f11c670"],["E:/blog/public/2020/03/11/mysql/数据库设计规范/index.html","9c3a94943d2046322cf13d52ea6e4bea"],["E:/blog/public/2020/03/11/spring boot/springboot/index.html","194af0eb8fd7fd439179864ba7effe1e"],["E:/blog/public/2020/03/11/事务/事务/index.html","e45c0783c58a44a28a969e19f506e874"],["E:/blog/public/2020/03/11/线程/多线程/index.html","b23e148a93ea0d4ee0120985c47e63c2"],["E:/blog/public/2020/03/11/线程/并发/index.html","0a4f6207121fd23f4387e446275122ea"],["E:/blog/public/2020/03/11/线程/线程池/index.html","a9b8176cd51004eae97cb9e6581b0c80"],["E:/blog/public/2020/08/21/java/集合/index.html","156cff8b6feddc99ab03dde9671276b8"],["E:/blog/public/2020/08/22/java/java基础/index.html","d5ef3a795b44943c1dec40f49ab7e03f"],["E:/blog/public/2020/08/23/linux/linux/index.html","1f4239705ae56f255dfe0f44fb9af655"],["E:/blog/public/2020/08/30/linux/linux的文件权限与目录配置/index.html","85cbb283743b2f169b95331c9eaff07a"],["E:/blog/public/2020/09/13/python/超实用的you-get视频下载工具/index.html","d7e762524c8110ca147949e31827261b"],["E:/blog/public/Gallery/index.html","45d041f3a5302e12dcc4523e70329554"],["E:/blog/public/Gallery/marvel/index.html","55fefa31998b8ac01e3be96ecabfea6e"],["E:/blog/public/Gallery/ohmygirl/index.html","dba64060cde08514debb65c09fe3e78e"],["E:/blog/public/Gallery/wallpaper/index.html","f07fa85cd9481c41f24871301e2397d0"],["E:/blog/public/about/index.html","dfad434f174158b9043c00830528d4fe"],["E:/blog/public/archives/2020/01/index.html","0e0fb3590f67dc0ea8f190d9204c53bb"],["E:/blog/public/archives/2020/02/index.html","4cda53e7a6d645da9e703b960d3bcf77"],["E:/blog/public/archives/2020/03/index.html","e061f79760d94b834216654e845575d8"],["E:/blog/public/archives/2020/08/index.html","1ad7385469d79ecd78fd491fc55bdf90"],["E:/blog/public/archives/2020/09/index.html","31d820aa0b620a52c14eae626fea63e4"],["E:/blog/public/archives/2020/index.html","2e6a09093339dd5161a21d7585aa1df8"],["E:/blog/public/archives/2020/page/2/index.html","1e7cf45cd73266e6929c69aae7801f9d"],["E:/blog/public/archives/index.html","70ce23e70d679fd39809c1d77a191c46"],["E:/blog/public/archives/page/2/index.html","c091767e837b3f16c729dfd50c1a041d"],["E:/blog/public/categories/Oracle/index.html","e50c0efb4c5c7bbe0bfad0a5b883ce97"],["E:/blog/public/categories/index.html","139701dcd207c4cc5ae18e8663b1f918"],["E:/blog/public/categories/java/index.html","35410490dc4923952f0274b869fbe8e2"],["E:/blog/public/categories/linux/index.html","5d4358213beec60f2b604e8102d3f5da"],["E:/blog/public/categories/mysql/index.html","bbe7a6a73253b132928d42a169277c5c"],["E:/blog/public/categories/python/index.html","9386fdb59dd8d5a35af61baacfd4b2d8"],["E:/blog/public/categories/redis/index.html","34c419efe3f458bc1a5b572b57de766a"],["E:/blog/public/categories/redis基础/index.html","8e154468715cc1ac55cab56b889f0c01"],["E:/blog/public/categories/springboot/index.html","266d64d1acb0e696bd7a9f2b4cb5b51d"],["E:/blog/public/categories/事务/index.html","231ef6ef93627197ef2867d886c1d032"],["E:/blog/public/categories/代码规范/index.html","ea7953171e9b63d44071108139aa9f75"],["E:/blog/public/categories/分布式/index.html","f4b28b6eec9d1e9f56065067099e44cd"],["E:/blog/public/categories/多线程/index.html","52f49a34d99d9c86f2af2fa33e6bb61a"],["E:/blog/public/categories/异常/index.html","9828fdc1e1ede7429f6bf370b61361fd"],["E:/blog/public/categories/数据库设计规范/index.html","790a5fa94113d0029709652ce21816ae"],["E:/blog/public/categories/索引/index.html","c439c98bead1a9ee484256fa4bc02889"],["E:/blog/public/css/APlayer.min.css","23e04b27a764c86627313552571f4b11"],["E:/blog/public/css/custom.css","4047f7bf45e5d0b702870762a1faabd4"],["E:/blog/public/css/index.css","3caa804cbf0bac014ae45c9cc3a04f3a"],["E:/blog/public/css/less.css","de262e3d324b42ef1f3dee9da9a036c0"],["E:/blog/public/css/tag.css","a5ada7bfc46c5481effe7dffd27b1177"],["E:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/public/images/01.png","c13a8cead336d7d7c581e621c2a649f2"],["E:/blog/public/images/02.jpg","8f22921a13bdb9ef79a784647b413362"],["E:/blog/public/images/03.png","b4a0df886b51ff1ad3275a245645aa15"],["E:/blog/public/images/04.jpg","43505b5e4a0a38c13cfe0b14a7037bca"],["E:/blog/public/images/BeanFactory Bean生命周期.png","00262e32b2d0077ebc92056dcbaee3f4"],["E:/blog/public/images/Spring 框架的 7 个模块.gif","ac382952d4f122f7d7d50d81950586f0"],["E:/blog/public/images/SpringMVC的执行流程.png","a932dadbd4a1e2f39b37dba562ba1828"],["E:/blog/public/images/SpringMvc执行流程.png","ae9b4c4e3daa99f1f014096342abaf26"],["E:/blog/public/images/Springmvc系统分层.png","b84880ebca399b1421af8c74c046d369"],["E:/blog/public/images/aof持久化.png","0015602001059d3564dc944fd357235a"],["E:/blog/public/images/backage.jpg","0acd62167392d46c59b0d0f8deefbcc4"],["E:/blog/public/images/dump.png","b4f55e1dec6c160d90b458d2db707698"],["E:/blog/public/images/get与post区别.png","78f60b099c7137d7da12ca0f1975ce9e"],["E:/blog/public/images/mysql存储大小.png","e00f19d308b58c81d1da4cfe8c7c04ae"],["E:/blog/public/images/rdb持久化.png","828e1e27c73e39abf855ee57959b9846"],["E:/blog/public/images/redis持久化.png","9c956b44e607cf7528a3219f0946ca6b"],["E:/blog/public/images/redis持久化2.png","c8582ebeb09abd7977a05036dbab7a06"],["E:/blog/public/images/冒泡排序.gif","4700503d1944f2cc25ea073339203b27"],["E:/blog/public/images/可见性问题.png","5bdeefd733c45b710c00b6bc182e7a1d"],["E:/blog/public/images/并发编程.jpg","1934c77529315f1ac43a0485b551ec9e"],["E:/blog/public/images/并行.png","1ec9c7937efecacde958eddd5f738c0b"],["E:/blog/public/images/打印4种情况.png","9a2ae8b73f52713f19aa0a14cec232e1"],["E:/blog/public/images/数据库事务的隔离级别.png","c584d1dbe0d04a3c39c4dcccedb94c28"],["E:/blog/public/images/线程切换.png","2046b1dc422564350b0e22a6570e8ee9"],["E:/blog/public/images/线程池.png","7d42d7149d5008f5ea71a3105ae4f11d"],["E:/blog/public/images/线程池参数.png","79025d4da1fff9997684220cc0fcf1b8"],["E:/blog/public/images/线程池参数顺序.png","130d484535fd9849e0170e42a37dc1cc"],["E:/blog/public/images/线程状态转换.png","1dd89e14b06d81d45cdd5ed2b442f358"],["E:/blog/public/images/线程生命周期.jpg","aef061e8705de8f30d8b39b3a66ea192"],["E:/blog/public/images/线程生命周期.png","f3f0e87092e9fc7edc31529620c45846"],["E:/blog/public/images/线程的生命周期.png","e1aa23736f3a18a8b0a190751cff52d3"],["E:/blog/public/images/进程.png","d59d7442389e6eb558f8de5aaadb8041"],["E:/blog/public/images/配置文件优先级.jpg","32e5aea241c61dee4d3d75b0815ccc15"],["E:/blog/public/images/集合.png","0060fd5e31f2660ceefb4feccef08bda"],["E:/blog/public/images/集合2.png","c75d4c55996ffd9d779ffe9295a75e8b"],["E:/blog/public/images/集合3.jpg","028237c2b37f496bf97b6b15685b4584"],["E:/blog/public/images/集合分类.png","d5d107d4f337f1f58d68922c4b1e3c69"],["E:/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/blog/public/index.html","238f8299edbbc209d35bb53afe37fb5b"],["E:/blog/public/js/main.js","b6e408c9b509ce2b80cc5ce998b6502b"],["E:/blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["E:/blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["E:/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["E:/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["E:/blog/public/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["E:/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["E:/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["E:/blog/public/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["E:/blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["E:/blog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/blog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["E:/blog/public/link/index.html","a7f7ef15bdec6cf029dde0a63b85c3d4"],["E:/blog/public/movies/index.html","02e7334e044eb8806424343cbc0c6481"],["E:/blog/public/music/index.html","cfd86152b58ce707b70a3ed3d63ebcf4"],["E:/blog/public/page/2/index.html","79df25b03308c4d53c6f93b62f541c2d"],["E:/blog/public/photos/index.html","3364ab4f6bdf7ef109208a7f9842d2da"],["E:/blog/public/tags/Oracle/index.html","3504651104159f20e9c43c1e92842795"],["E:/blog/public/tags/index.html","eaf6ac7fdec38a20df990056ff7fb461"],["E:/blog/public/tags/java/index.html","ad8dcf250e9f2b2b9e8c123e71a06ffe"],["E:/blog/public/tags/linux/index.html","414116b07c52795d72b4959657677830"],["E:/blog/public/tags/mysql/index.html","8e3387174498b88f577a95b105be530e"],["E:/blog/public/tags/python/index.html","0bce1f4a091045b8c3c30a6c4bcd97df"],["E:/blog/public/tags/redis/index.html","1563660875a0a94fbf3cdac4589fb9ea"],["E:/blog/public/tags/redis基础/index.html","861b9f1ff59158a5a8c6b5e86630da90"],["E:/blog/public/tags/springboot/index.html","7aa3083ab139338ccb8a60fe1623a5a1"],["E:/blog/public/tags/事务/index.html","17248d53d06dac3127a390a29710a3fd"],["E:/blog/public/tags/代码规范/index.html","70a2f75a6bb604d1ec5500870dbebaa8"],["E:/blog/public/tags/分布式/index.html","33914e6d249bd22bdab6102d44395b53"],["E:/blog/public/tags/多线程/index.html","6321acd3cea592f34199a8cf580d0736"],["E:/blog/public/tags/异常/index.html","ecfeebf9f8bd2aadaaa15fccc69f42f6"],["E:/blog/public/tags/数据库设计规范/index.html","56d9f75ccf958cfcd615563779149109"],["E:/blog/public/tags/索引/index.html","e8ac3c2a124183449e73e5f448cba944"]];
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







