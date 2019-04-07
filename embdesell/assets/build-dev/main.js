window["main"] =
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
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([1,"common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./common/classes/class-tooltip.js":
/*!*****************************************!*\
  !*** ./common/classes/class-tooltip.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tooltip =
/*#__PURE__*/
function () {
  function Tooltip(obj, position, content) {
    _classCallCheck(this, Tooltip);

    this.el = obj;
    this.position = position || 'bottom';
    this.content = content || '';
    this.tooltip = this.create();
    this.setPosition();
    this.bindEvents();
  }

  _createClass(Tooltip, [{
    key: "create",
    value: function create() {
      var tooltip = document.createElement('div');
      tooltip.className = 'c-tooltip';
      tooltip.innerHTML = this.content;
      tooltip.style.position = 'absolute';
      document.body.appendChild(tooltip);
      tooltip.style.display = 'none';
      return tooltip;
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      this.el.addEventListener('mouseenter', function () {
        _this.showTooltip();
      });
      this.el.addEventListener('mouseleave', function () {
        _this.hideTooltip();
      });
      window.addEventListener('scroll', function () {
        _this.setPosition();
      });
      window.addEventListener('resize', function () {
        _this.setPosition();
      });
    }
  }, {
    key: "setPosition",
    value: function setPosition() {
      var _this2 = this;

      var tooltipClass = "c-tooltip--".concat(this.position);
      var position = {
        left: null,
        top: null
      };

      switch (this.position) {
        case 'bottom':
          (function () {
            position.left = _this2.getPosition().center;
            position.top = _this2.getPosition().bottom;
          })();

          break;

        case 'top':
          (function () {
            position.left = _this2.getPosition().center;
            position.top = _this2.getPosition().top;
          })();

          break;

        case 'left':
          (function () {
            position.left = _this2.getPosition().left;
            position.top = _this2.getPosition().middle;
          })();

          break;

        case 'right':
          (function () {
            position.left = _this2.getPosition().right;
            position.top = _this2.getPosition().middle;
          })();

          break;

        default:
          (function () {
            position.left = _this2.getPosition().center;
            position.top = _this2.getPosition().top;
          })();

      }

      this.tooltip.classList.add(tooltipClass);
      this.tooltip.style.left = "".concat(position.left, "px");
      this.tooltip.style.top = "".concat(position.top, "px");
      return position;
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      var el = this.el,
          tooltip = this.tooltip;
      var elOffset = {
        top: el.getBoundingClientRect().top + window.pageYOffset - document.body.clientTop,
        left: el.getBoundingClientRect().left + window.pageXOffset - document.body.clientLeft
      };
      return {
        center: function () {
          return elOffset.left + el.offsetWidth / 2 - tooltip.offsetWidth / 2;
        }(),
        top: function () {
          return elOffset.top - tooltip.offsetHeight;
        }(),
        bottom: function () {
          return elOffset.top + el.offsetHeight;
        }(),
        middle: function () {
          return elOffset.top + el.offsetHeight / 2 - tooltip.offsetHeight / 2;
        }(),
        left: function () {
          return elOffset.left - tooltip.offsetWidth;
        }(),
        right: function () {
          return elOffset.left + el.offsetWidth;
        }()
      };
    }
  }, {
    key: "showTooltip",
    value: function showTooltip() {
      this.tooltip.style.display = 'block';
      this.setPosition();
      this.onShow(this.tooltip);
    }
  }, {
    key: "hideTooltip",
    value: function hideTooltip() {
      this.onHide(this.tooltip);
      this.tooltip.style.display = 'none';
    }
  }, {
    key: "onShow",
    value: function onShow() {
      return false;
    }
  }, {
    key: "onHide",
    value: function onHide() {
      return false;
    }
  }]);

  return Tooltip;
}();

/* harmony default export */ __webpack_exports__["default"] = (Tooltip);

/***/ }),

/***/ "./common/components/table-wrapper.js":
/*!********************************************!*\
  !*** ./common/components/table-wrapper.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var tableWrapper = function tableWrapper(table) {
  var timer;
  var wrapper = document.createElement('div');
  wrapper.className = 'c-table-wrapper';
  table.parentNode.appendChild(wrapper);
  wrapper.appendChild(table);

  var handler = function handler() {
    clearTimeout(timer);
    timer = setTimeout(function () {
      if (table.offsetWidth > wrapper.offsetWidth) {
        wrapper.classList.add('is-active');
      } else {
        wrapper.classList.remove('is-active');
      }
    }, 500);
  };

  document.addEventListener('DOMContentLoaded', handler);
  window.addEventListener('resize', handler);
  window.addEventListener('load', handler);
};

/* harmony default export */ __webpack_exports__["default"] = (tableWrapper);

/***/ }),

/***/ "./common/tables.js":
/*!**************************!*\
  !*** ./common/tables.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_table_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/table-wrapper */ "./common/components/table-wrapper.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


var tables = document.getElementsByTagName('table');

if (tables && tables.length) {
  _toConsumableArray(tables).forEach(function (table) {
    return Object(_components_table_wrapper__WEBPACK_IMPORTED_MODULE_0__["default"])(table);
  });
}

/***/ }),

/***/ "./common/tooltip.js":
/*!***************************!*\
  !*** ./common/tooltip.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_class_tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/class-tooltip */ "./common/classes/class-tooltip.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }



(function () {
  var nodes = document.querySelectorAll('[data-tooltip]');
  if (!nodes) return false;
  return _toConsumableArray(nodes).map(function (node) {
    var content = node.dataset.tooltip;
    var position = node.dataset.position;
    if (!content) return null;
    return new _classes_class_tooltip__WEBPACK_IMPORTED_MODULE_0__["default"](node, position, content);
  });
})();

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_owl_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/owl-carousel */ "./common/owl-carousel.js");
/* harmony import */ var _common_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/base */ "./common/base.js");
/* harmony import */ var _common_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/forms */ "./common/forms.js");
/* harmony import */ var _common_lazy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/lazy */ "./common/lazy.js");
/* harmony import */ var _common_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/menu */ "./common/menu.js");
/* harmony import */ var _common_tables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/tables */ "./common/tables.js");
/* harmony import */ var _common_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/tooltip */ "./common/tooltip.js");








/***/ }),

/***/ 1:
/*!**************************************!*\
  !*** multi ./polyfills.js ./main.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./polyfills.js */"./polyfills.js");
module.exports = __webpack_require__(/*! ./main.js */"./main.js");


/***/ })

/******/ })["default"];
//# sourceMappingURL=main.js.map