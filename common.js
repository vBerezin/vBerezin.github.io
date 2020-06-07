(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "../node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/classPrivateFieldGet.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/classPrivateFieldGet.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = privateMap.get(receiver);

  if (!descriptor) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

module.exports = _classPrivateFieldGet;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/classPrivateFieldSet.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/classPrivateFieldSet.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = privateMap.get(receiver);

  if (!descriptor) {
    throw new TypeError("attempted to set private field on non-instance");
  }

  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }

    descriptor.value = value;
  }

  return value;
}

module.exports = _classPrivateFieldSet;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/createClass.js":
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/createClass.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!***************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "../node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "../node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "../node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./blocks/breakpoints/index.js":
/*!*************************************!*\
  !*** ./blocks/breakpoints/index.js ***!
  \*************************************/
/*! exports provided: Breakpoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breakpoints", function() { return Breakpoints; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "../node_modules/@babel/runtime/helpers/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "../node_modules/@babel/runtime/helpers/classPrivateFieldSet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__);






function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var Breakpoints = /*#__PURE__*/function () {
  function Breakpoints(points) {
    var _this = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Breakpoints);

    _refresh.add(this);

    _stream.set(this, {
      writable: true,
      value: void 0
    });

    _media.set(this, {
      writable: true,
      value: void 0
    });

    this.current = '';
    this.points = {};

    _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4___default()(this, _media, []);

    _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4___default()(this, _stream, new Set());

    Object.entries(points).forEach(function (_ref) {
      var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
          name = _ref2[0],
          screen = _ref2[1];

      var screenSize = parseInt(screen, 10);
      var media = window.matchMedia("(min-width: ".concat(screenSize, "px)"));
      media.addListener(function () {
        return _classPrivateMethodGet(_this, _refresh, _refresh2).call(_this);
      });

      _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(_this, _media).push({
        name: name,
        screen: screenSize,
        media: media
      });

      _this.points[name] = screenSize;
    });

    _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _media).sort(function (a, b) {
      return a.screen - b.screen;
    });

    _classPrivateMethodGet(this, _refresh, _refresh2).call(this);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Breakpoints, [{
    key: "indexOf",
    value: function indexOf(points) {
      var _this2 = this;

      /**
       * проверяет совпадает ли с текущим
       * */
      var matches = [].concat(points).filter(function (point) {
        return point === _this2.current;
      });
      return matches.length ? matches : null;
    }
  }, {
    key: "once",
    value: function once(points, fn, cb) {
      var _this3 = this;

      /**
       * один раз fn или cb
       * */
      var allowFn = true;
      var allowCb = true;

      var handler = function handler(args) {
        if (_this3.indexOf(points)) {
          if (fn && allowFn) {
            allowFn = false;
            allowCb = true;
            return fn(args);
          }
        } else if (cb && allowCb) {
          allowCb = false;
          allowFn = true;
          return cb(args);
        }
      };

      _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _stream).add(handler);

      handler(this.current);
    }
  }, {
    key: "on",
    value: function on(points, fn, cb) {
      var _this4 = this;

      /**
       * каждый раз fn или cb
       * */
      var handler = function handler(args) {
        if (_this4.indexOf(points)) {
          if (fn) {
            return fn(args);
          }
        } else if (cb) {
          return cb(args);
        }
      };

      _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _stream).add(handler);

      handler(this.current);
    }
  }, {
    key: "change",
    value: function change(callback) {
      var _this5 = this;

      /**
       * при изменении
       * */
      var last = this.current;

      if (this.current) {
        callback(this.current);
      }

      _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _stream).add(function (args) {
        if (_this5.current !== last) {
          last = _this5.current;
          callback(args);
        }
      });
    }
  }]);

  return Breakpoints;
}();

var _stream = new WeakMap();

var _media = new WeakMap();

var _refresh = new WeakSet();

var _refresh2 = function _refresh2() {
  var _this6 = this;

  var active = _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _media).filter(function (point) {
    return point.media.matches;
  });

  this.current = active.length ? active.slice(-1)[0].name : null;

  _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3___default()(this, _stream).forEach(function (callback) {
    return callback(_this6.current);
  });
};

/***/ }),

/***/ "./blocks/lazy-iframe/index.js":
/*!*************************************!*\
  !*** ./blocks/lazy-iframe/index.js ***!
  \*************************************/
/*! exports provided: LazyIframe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyIframe", function() { return LazyIframe; });
/* harmony import */ var _blocks_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~blocks/observer */ "./blocks/observer/index.js");

function LazyIframe(node) {
  return new Promise(function (resolve, reject) {
    _blocks_observer__WEBPACK_IMPORTED_MODULE_0__["Observer"].observe({
      node: node,
      once: true,
      callback: function callback(isVisible) {
        if (isVisible) {
          node.onload = resolve(node);
          node.onerror = reject(node);
          node.src = node.dataset.src;
          node.removeAttribute('data-src');
        }
      }
    });
  });
}

/***/ }),

/***/ "./blocks/lazy-image/index.js":
/*!************************************!*\
  !*** ./blocks/lazy-image/index.js ***!
  \************************************/
/*! exports provided: LazyImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyImage", function() { return LazyImage; });
/* harmony import */ var _blocks_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~blocks/observer */ "./blocks/observer/index.js");


function loadImg(_ref) {
  var _ref$src = _ref.src,
      src = _ref$src === void 0 ? '' : _ref$src,
      _ref$srcset = _ref.srcset,
      srcset = _ref$srcset === void 0 ? '' : _ref$srcset,
      _ref$alt = _ref.alt,
      alt = _ref$alt === void 0 ? '' : _ref$alt,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title;
  return new Promise(function (resolve, reject) {
    var img = new Image();
    img.alt = alt || title;
    img.title = title;

    img.onload = function () {
      resolve(img);
    };

    img.onerror = function () {
      reject(new Error("load error: ".concat(img.currentSrc)));
    };

    img.src = src;
    img.srcset = srcset;
  });
}

function LazyImage(node) {
  return new Promise(function (resolve, reject) {
    _blocks_observer__WEBPACK_IMPORTED_MODULE_0__["Observer"].observe({
      node: node,
      once: true,
      callback: function callback(isVisible) {
        if (isVisible) {
          loadImg(node.dataset).then(function (img) {
            node.parentNode.replaceChild(img, node);
            resolve(img);
          }).catch(reject);
        }
      }
    });
  });
}

/***/ }),

/***/ "./blocks/observer/index.js":
/*!**********************************!*\
  !*** ./blocks/observer/index.js ***!
  \**********************************/
/*! exports provided: Observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return Observer; });
var storage = new WeakMap();

var entryHandler = function entryHandler(_ref) {
  var entry = _ref.entry,
      observer = _ref.observer;
  var target = entry.target,
      isIntersecting = entry.isIntersecting;

  var _storage$get = storage.get(target),
      once = _storage$get.once,
      callback = _storage$get.callback;

  if (once && isIntersecting) {
    observer.unobserve(target);
  }

  return callback(isIntersecting);
};

var intersectionObserver = new IntersectionObserver(function (entries, observer) {
  entries.filter(function (entry) {
    return storage.has(entry.target);
  }).forEach(function (entry) {
    return entryHandler({
      entry: entry,
      observer: observer
    });
  });
}, {
  root: null,
  rootMargin: '0% 0px',
  threshold: 0.05
});

var observe = function observe(_ref2) {
  var node = _ref2.node,
      callback = _ref2.callback,
      _ref2$once = _ref2.once,
      once = _ref2$once === void 0 ? false : _ref2$once;
  storage.set(node, {
    callback: callback,
    once: once
  });
  intersectionObserver.observe(node);
  return node;
};

var unobserve = function unobserve(node) {
  intersectionObserver.unobserve(node);
  storage.delete(node);
};

var Observer = {
  observe: observe,
  unobserve: unobserve
};

/***/ }),

/***/ "./common/scripts/app.js":
/*!*******************************!*\
  !*** ./common/scripts/app.js ***!
  \*******************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _common_styles_breakpoints_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~common/styles/breakpoints.scss */ "./common/styles/breakpoints.scss");
/* harmony import */ var _common_styles_breakpoints_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_common_styles_breakpoints_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~blocks/breakpoints */ "./blocks/breakpoints/index.js");
/* harmony import */ var _common_scripts_utils_stream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~common/scripts/utils/stream */ "./common/scripts/utils/stream.js");



var App = function () {
  var debug = console.info;
  var breakpoints = new _blocks_breakpoints__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"](_common_styles_breakpoints_scss__WEBPACK_IMPORTED_MODULE_0__);
  var lang = document.documentElement.getAttribute('lang');
  return {
    breakpoints: breakpoints,
    lang: lang ? lang.toLowerCase() : null,
    stream: new _common_scripts_utils_stream__WEBPACK_IMPORTED_MODULE_2__["Stream"](),
    debug: debug
  };
}();

/***/ }),

/***/ "./common/scripts/common.js":
/*!**********************************!*\
  !*** ./common/scripts/common.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_scripts_lazy_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~common/scripts/lazy-loader */ "./common/scripts/lazy-loader.js");
/* harmony import */ var _common_scripts_utils_document_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~common/scripts/utils/document-ready */ "./common/scripts/utils/document-ready.js");


Object(_common_scripts_utils_document_ready__WEBPACK_IMPORTED_MODULE_1__["documentReady"])(_common_scripts_lazy_loader__WEBPACK_IMPORTED_MODULE_0__["LazyLoader"].init);

/***/ }),

/***/ "./common/scripts/lazy-loader.js":
/*!***************************************!*\
  !*** ./common/scripts/lazy-loader.js ***!
  \***************************************/
/*! exports provided: LazyLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyLoader", function() { return LazyLoader; });
/* harmony import */ var _common_scripts_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~common/scripts/app */ "./common/scripts/app.js");
/* harmony import */ var _blocks_lazy_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~blocks/lazy-image */ "./blocks/lazy-image/index.js");
/* harmony import */ var _blocks_lazy_iframe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~blocks/lazy-iframe */ "./blocks/lazy-iframe/index.js");




function onLoad(node) {
  node.classList.add('a-opacity', 'is-animated');
}

function init(context) {
  try {
    var nodes = context.querySelectorAll('img[data-src], iframe[data-src]');
    nodes.forEach(function (node) {
      var tagName = node.tagName;

      switch (tagName.toLowerCase()) {
        case 'img':
          return new _blocks_lazy_image__WEBPACK_IMPORTED_MODULE_1__["LazyImage"](node).then(onLoad);

        case 'iframe':
          return new _blocks_lazy_iframe__WEBPACK_IMPORTED_MODULE_2__["LazyIframe"](node).then(onLoad);

        default:
          return false;
      }
    });
  } catch (e) {
    _common_scripts_app__WEBPACK_IMPORTED_MODULE_0__["App"].debug(e);
  }
}

var LazyLoader = {
  init: init
};

/***/ }),

/***/ "./common/scripts/utils/document-ready.js":
/*!************************************************!*\
  !*** ./common/scripts/utils/document-ready.js ***!
  \************************************************/
/*! exports provided: documentReady */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "documentReady", function() { return documentReady; });
function documentReady(callback) {
  if (document.readyState === 'loading') {
    return document.addEventListener('DOMContentLoaded', callback(document));
  }

  return callback(document);
}

/***/ }),

/***/ "./common/scripts/utils/stream.js":
/*!****************************************!*\
  !*** ./common/scripts/utils/stream.js ***!
  \****************************************/
/*! exports provided: Stream */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stream", function() { return Stream; });
/**
 * @function { add } - Добавляет коллбек на событие
 * @function { remove } - Удаляет коллбек на событие
 * @function { trigger } - Запускает все коллбеки события
 * @function { triggerAll } - Запускает все события
 * */
function Stream() {
  var _this = this;

  this.storage = new Map();

  this.add = function (name, fn) {
    if (_this.storage.has(name)) {
      _this.storage.get(name).add(fn);

      return _this;
    }

    _this.storage.set(name, new Set([fn]));

    return _this;
  };

  this.remove = function (name, fn) {
    if (!_this.storage.has(name)) {
      return false;
    }

    _this.storage.get(name).delete(fn);

    if (!_this.storage.get(name).size) {
      _this.storage.delete(name);
    }

    return _this;
  };

  this.trigger = function (name, args) {
    if (!_this.storage.has(name) || !_this.storage.get(name).size) {
      return false;
    }

    _this.storage.get(name).forEach(function (fn) {
      return fn(args);
    });

    return _this;
  };
}

/***/ }),

/***/ "./common/styles/breakpoints.scss":
/*!****************************************!*\
  !*** ./common/styles/breakpoints.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"425px","sm":"768px","md":"1024px","lg":"1280px","xl":"1440px","xxl":"1680px","xxs":"0"};
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=common.js.map