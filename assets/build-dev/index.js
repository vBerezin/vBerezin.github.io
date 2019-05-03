window["index"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"initMask":"initMask","input-file":"input-file","menu-app":"menu-app","photoSwipe":"photoSwipe","tabs":"tabs","textarea":"textarea"}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/build-dev/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./common/owl-carousel.js":
/*!********************************!*\
  !*** ./common/owl-carousel.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! owl.carousel */ "../../../node_modules/owl.carousel/dist/owl.carousel.js");
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(owl_carousel__WEBPACK_IMPORTED_MODULE_0__);


if (typeof $.fn.owlCarousel === 'function') {
  $.fn.owlCarousel.Constructor.Plugins.Navigation.Defaults.navText = ['<svg class="c-icon c-icon-svg c-icon-svg-left"><use xlink:href="/assets/images/icons.svg#left"></use></svg>', '<svg class="c-icon c-icon-svg c-icon-svg-right"><use xlink:href="/assets/images/icons.svg#right"></use></svg>'];
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./common/sections.js":
/*!****************************!*\
  !*** ./common/sections.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sections_works__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sections/works */ "./common/sections/works.js");
/* harmony import */ var _sections_partners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/partners */ "./common/sections/partners.js");
/* harmony import */ var _sections_reviews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/reviews */ "./common/sections/reviews.js");




/***/ }),

/***/ "./common/sections/partners.js":
/*!*************************************!*\
  !*** ./common/sections/partners.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _owl_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../owl-carousel */ "./common/owl-carousel.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }



(function () {
  var section = document.querySelector('.js-section-partners');
  if (!section) return false;
  var slider = section.querySelector('[data-action="partners.slider"]');
  var nav = section.querySelector('[data-action="partners.nav"]');
  var btns = nav.querySelectorAll('button');
  $(slider).addClass('owl-carousel').owlCarousel({
    items: 3,
    margin: 0,
    loop: false,
    nav: false,
    dots: false,
    onInitialized: function onInitialized() {
      nav.style.display = '';

      _toConsumableArray(btns).forEach(function (node) {
        var btn = node;
        var action = btn.dataset.action;

        btn.onclick = function (event) {
          $(slider).trigger("".concat(action, ".owl.carousel"));
          event.preventDefault();
        };
      });
    }
  });
  return section;
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./common/sections/reviews.js":
/*!************************************!*\
  !*** ./common/sections/reviews.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _owl_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../owl-carousel */ "./common/owl-carousel.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }



(function () {
  var items = document.querySelectorAll('.js-item-review');
  if (!items) return false;

  function init(item) {
    var btn = item.querySelector('[data-action="review.more"]');

    btn.onclick = function (event) {
      item.classList.toggle('is-expanded');
      event.preventDefault();
      btn.parentNode.removeChild(btn);
    };
  }

  _toConsumableArray(items).forEach(function (item) {
    return init(item);
  });

  return items;
})();

/***/ }),

/***/ "./common/sections/works.js":
/*!**********************************!*\
  !*** ./common/sections/works.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./common/app.js");
/* harmony import */ var _owl_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../owl-carousel */ "./common/owl-carousel.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }




(function () {
  var section = document.querySelector('.js-section-works');
  if (!section) return false;
  var current = 0;
  var items = section.querySelectorAll('.js-works-item');
  var slider = section.querySelector('[data-action="works.slider"]');
  var slides = slider.children;
  var btnPrev = section.querySelector('[data-action="works.slider.prev"]');
  var btnNext = section.querySelector('[data-action="works.slider.next"]');

  function thumbsCrop(thumbsOuter, gallery) {
    var button = document.createElement('button');
    button.dataset.action = 'item.thumbs.more';
    button.style.display = 'none';
    thumbsOuter.parentNode.appendChild(button);
    var thumbs = thumbsOuter.children;

    button.onclick = function (event) {
      gallery.querySelector('.owl-item.active [data-size]').click();
      event.preventDefault();
    };

    function update() {
      var itemsWidth = 0;
      var hiddenCount = 0;

      _toConsumableArray(thumbs).forEach(function (node) {
        var item = node;
        item.style.display = '';
        itemsWidth += item.offsetWidth + parseInt(getComputedStyle(item).marginRight, 10);

        if (itemsWidth > thumbsOuter.offsetWidth) {
          item.style.display = 'none';
          hiddenCount += 1;
        } else {
          item.style.display = '';
        }
      });

      if (hiddenCount) {
        button.style.display = '';
        button.innerText = "+".concat(hiddenCount);
      } else {
        button.style.display = 'none';
      }
    }

    return update;
  }

  function setSlide(index) {
    if (slides[index]) {
      current = index;

      _toConsumableArray(slides).forEach(function (node, i) {
        var item = node;

        if (index === i) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });

      btnPrev.classList.remove('is-disabled');
      btnPrev.disabled = false;
      btnNext.classList.remove('is-disabled');
      btnNext.disabled = false;

      if (current === 0) {
        btnPrev.classList.add('is-disabled');
        btnPrev.disabled = true;
      }

      if (current === slides.length - 1) {
        btnNext.classList.add('is-disabled');
        btnNext.disabled = true;
      }
    }

    if (items[index]) items[index].updateThumbs();
  }

  function init(item) {
    var gallery = item.querySelector('[data-action="item.slider"]');
    var thumbs = item.querySelector('[data-action="item.thumbs"]');
    __webpack_require__.e(/*! import() | photoSwipe */ "photoSwipe").then(__webpack_require__.bind(null, /*! ../jquery-plugins/photoswipe */ "./common/jquery-plugins/photoswipe.js")).then(function (module) {
      var photoSwipe = module.default;
      photoSwipe.init(gallery);
      return photoSwipe;
    }).catch(function (error) {
      return error;
    });

    function setThumb(pos) {
      _toConsumableArray(thumbs.children).forEach(function (node, index) {
        if (index === pos) {
          node.classList.add('is-active');
        } else {
          node.classList.remove('is-active');
        }
      });
    }

    $(gallery).addClass('owl-carousel').owlCarousel({
      items: 1,
      loop: false,
      nav: false,
      dots: false,
      onInitialized: function onInitialized(event) {
        setThumb(event.item.index);
      },
      onTranslated: function onTranslated(event) {
        setThumb(event.item.index);
      }
    });

    _toConsumableArray(thumbs.children).forEach(function (node, index) {
      var thumb = node;

      thumb.onclick = function (event) {
        event.preventDefault();
        $(gallery).trigger('to.owl.carousel', index);
      };
    });

    return {
      updateThumbs: thumbsCrop(thumbs, gallery)
    };
  }

  var actions = {
    'works.slider.next': function worksSliderNext() {
      var target = Math.min(current + 1, slides.length);
      setSlide(target);
    },
    'works.slider.prev': function worksSliderPrev() {
      var target = Math.max(current - 1, 0);
      setSlide(target);
    }
  };
  [btnPrev, btnNext].forEach(function (node) {
    var btn = node;

    btn.onclick = function (event) {
      var action = btn.dataset.action;

      if (actions[action]) {
        actions[action]();
        event.preventDefault();
      }
    };
  });
  items = _toConsumableArray(items).map(function (item) {
    return init(item);
  });
  setSlide(current);
  _app__WEBPACK_IMPORTED_MODULE_0__["default"].breakpoints.onChange(function () {
    if (items[current]) items[current].updateThumbs();
  });
  return section;
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/base */ "./common/base.js");
/* harmony import */ var _common_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/forms */ "./common/forms.js");
/* harmony import */ var _common_scroll_top__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/scroll-top */ "./common/scroll-top.js");
/* harmony import */ var _common_lazy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/lazy */ "./common/lazy.js");
/* harmony import */ var _common_seo_goals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/seo-goals */ "./common/seo-goals.js");
/* harmony import */ var _common_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/menu */ "./common/menu.js");
/* harmony import */ var _common_sections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/sections */ "./common/sections.js");
/* harmony import */ var _common_maps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/maps */ "./common/maps.js");









/***/ }),

/***/ 0:
/*!***************************************!*\
  !*** multi ./polyfills.js ./index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./polyfills.js */"./polyfills.js");
module.exports = __webpack_require__(/*! ./index.js */"./index.js");


/***/ })

/******/ })["default"];
//# sourceMappingURL=index.js.map