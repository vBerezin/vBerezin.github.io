/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/classApplyDescriptorGet.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classApplyDescriptorGet.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

module.exports = _classApplyDescriptorGet;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classApplyDescriptorSet.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classApplyDescriptorSet.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }

    descriptor.value = value;
  }
}

module.exports = _classApplyDescriptorSet;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classExtractFieldDescriptor.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classExtractFieldDescriptor.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }

  return privateMap.get(receiver);
}

module.exports = _classExtractFieldDescriptor;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classPrivateFieldGet.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classPrivateFieldGet.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classApplyDescriptorGet = __webpack_require__(/*! ./classApplyDescriptorGet.js */ "./node_modules/@babel/runtime/helpers/classApplyDescriptorGet.js");

var classExtractFieldDescriptor = __webpack_require__(/*! ./classExtractFieldDescriptor.js */ "./node_modules/@babel/runtime/helpers/classExtractFieldDescriptor.js");

function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = classExtractFieldDescriptor(receiver, privateMap, "get");
  return classApplyDescriptorGet(receiver, descriptor);
}

module.exports = _classPrivateFieldGet;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classPrivateFieldSet.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classPrivateFieldSet.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classApplyDescriptorSet = __webpack_require__(/*! ./classApplyDescriptorSet.js */ "./node_modules/@babel/runtime/helpers/classApplyDescriptorSet.js");

var classExtractFieldDescriptor = __webpack_require__(/*! ./classExtractFieldDescriptor.js */ "./node_modules/@babel/runtime/helpers/classExtractFieldDescriptor.js");

function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = classExtractFieldDescriptor(receiver, privateMap, "set");
  classApplyDescriptorSet(receiver, descriptor, value);
  return value;
}

module.exports = _classPrivateFieldSet;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
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
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./src/components/dropdown/index.js":
/*!******************************************!*\
  !*** ./src/components/dropdown/index.js ***!
  \******************************************/
/*! exports provided: Dropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);


var instances = [];
var Dropdown = /*#__PURE__*/function () {
  function Dropdown(element) {
    var _this = this;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Dropdown);
    this.el = element;
    this._head = this.el.querySelector('.dropdown__head');
    this._value = this.el.querySelector('.dropdown__value');
    this.select = element.querySelector('select');
    this.options = element.querySelectorAll('option,.dropdown__option');
    this.value = this.select.value;
    this.disabled = this.select.disabled;
    instances.push(this);
    this.el.classList.toggle('is-disabled', this.disabled);
    this.select.addEventListener('change', function () {
      _this.value = _this.select.value;
    });
    this.el.addEventListener('click', function (event) {
      event.stopPropagation();
      if (!_this.disabled) {
        instances.forEach(function (instance) {
          if (instance !== _this) {
            instance.close();
          }
        });
        var option = event.target.closest('.dropdown__option');
        if (option) {
          _this.value = option.dataset.value;
          _this.close();
        }
      }
    });
    this._head.addEventListener('click', function () {
      if (!_this.disabled) {
        _this.el.classList.toggle('is-active');
      }
    });
    document.addEventListener('click', function () {
      return _this.close();
    });
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Dropdown, [{
    key: "close",
    value: function close() {
      this.el.classList.remove('is-active');
    }
  }, {
    key: "value",
    set: function set(value) {
      this._value.innerText = value;
      this.el.classList.toggle('has-value', value);
      this.options.forEach(function (option) {
        var optionValue = option.value || option.dataset.value;
        var isSelected = optionValue === value;
        option.classList.toggle('is-selected', isSelected);
        if (option.tagName === 'OPTION') {
          if (isSelected) {
            option.setAttribute('selected', '');
          } else {
            option.removeAttribute('selected');
          }
        }
      });
    }
  }]);
  return Dropdown;
}();

/***/ }),

/***/ "./src/components/form-calc/form-calc__range/index.js":
/*!************************************************************!*\
  !*** ./src/components/form-calc/form-calc__range/index.js ***!
  \************************************************************/
/*! exports provided: FormRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRange", function() { return FormRange; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../range */ "./src/components/range/index.js");



var FormRange = /*#__PURE__*/function () {
  function FormRange(node) {
    var _this = this;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FormRange);
    this.el = node;
    this._slider = this.el.querySelector('.form-calc__range-slider');
    this._from = this.el.querySelector('.form-calc__range-from');
    this._to = this.el.querySelector('.form-calc__range-to');
    this.slider = new _range__WEBPACK_IMPORTED_MODULE_2__["Range"](this._slider);
    this._values = [this._from.value, this._to.value];
    this.slider.values = this._values;
    this.slider.onslide = function (values) {
      _this.values = values;
      _this._from.dispatchEvent(new Event('change', {
        bubbles: true
      }));
      _this._to.dispatchEvent(new Event('change', {
        bubbles: true
      }));
    };
    this._from.addEventListener('change', function () {
      return _this.onChange();
    });
    this._to.addEventListener('change', function () {
      return _this.onChange();
    });
    this._from.addEventListener('keyup', function () {
      return _this.onInput();
    });
    this._from.addEventListener('focus', function () {
      return _this.onFocus();
    });
    this._from.addEventListener('blur', function () {
      return _this.onBlur();
    });
    this._to.addEventListener('keyup', function () {
      return _this.onInput();
    });
    this._to.addEventListener('focus', function () {
      return _this.onFocus();
    });
    this._to.addEventListener('blur', function () {
      return _this.onBlur();
    });
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(FormRange, [{
    key: "onInput",
    value: function onInput() {
      var fromValue = this.filter(this._from.value);
      var toValue = this.filter(this._to.value);
      if (fromValue > this.slider.max) {
        this._from.value = this.slider.max;
      }
      if (fromValue < this.slider.min) {
        this._from.value = this.slider.min;
      }
      if (toValue > this.slider.max) {
        this._to.value = this.slider.max;
      }
      if (toValue < this.slider.min) {
        this._to.value = this.slider.min;
      }
    }
  }, {
    key: "onFocus",
    value: function onFocus() {
      this._from.value = this.filter(this._from.value);
      this._to.value = this.filter(this._to.value);
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      this._from.value = "".concat(Number(this._from.value).toLocaleString(), " ").concat(this._from.dataset.units);
      this._to.value = "".concat(Number(this._to.value).toLocaleString(), " ").concat(this._to.dataset.units);
    }
  }, {
    key: "onChange",
    value: function onChange() {
      this._values = [this._from.value, this._to.value];
      this.slider.values = this._values;
    }
  }, {
    key: "values",
    get: function get() {
      return this._values;
    },
    set: function set(values) {
      this._from.value = "".concat(values[0].toLocaleString(), " ").concat(this._from.dataset.units);
      this._to.value = "".concat(values[1].toLocaleString(), " ").concat(this._to.dataset.units);
      this._values = values;
    }
  }, {
    key: "filter",
    value: function filter(value) {
      var string = value.toString().replace(/\D/mg, '');
      return parseInt(string);
    }
  }]);
  return FormRange;
}();

/***/ }),

/***/ "./src/components/form-calc/index.js":
/*!*******************************************!*\
  !*** ./src/components/form-calc/index.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_helpers_documentReady__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../js/helpers/documentReady */ "./src/js/helpers/documentReady.js");
/* harmony import */ var _js_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../js/App */ "./src/js/App.js");
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dropdown */ "./src/components/dropdown/index.js");
/* harmony import */ var _form_calc_range__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-calc__range */ "./src/components/form-calc/form-calc__range/index.js");




function initDropdown() {
  try {
    var nodes = document.querySelectorAll('.js-dropdown');
    if (!nodes || !nodes.length) return false;
    nodes.forEach(function (node) {
      return new _dropdown__WEBPACK_IMPORTED_MODULE_2__["Dropdown"](node);
    });
  } catch (error) {
    _js_App__WEBPACK_IMPORTED_MODULE_1__["App"].debug(error);
  }
}
function initRange() {
  try {
    var nodes = document.querySelectorAll('.js-form-calc-range');
    if (!nodes || !nodes.length) return false;
    return nodes.forEach(function (node) {
      return new _form_calc_range__WEBPACK_IMPORTED_MODULE_3__["FormRange"](node);
    });
  } catch (error) {
    _js_App__WEBPACK_IMPORTED_MODULE_1__["App"].debug(error);
  }
}
Object(_js_helpers_documentReady__WEBPACK_IMPORTED_MODULE_0__["documentReady"])(function () {
  initDropdown();
  initRange();
});

/***/ }),

/***/ "./src/components/range/index.js":
/*!***************************************!*\
  !*** ./src/components/range/index.js ***!
  \***************************************/
/*! exports provided: Range */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/classPrivateFieldSet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__);




function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
var _values = /*#__PURE__*/new WeakMap();
var _slider = /*#__PURE__*/new WeakMap();
var _onchange = /*#__PURE__*/new WeakMap();
var _onslide = /*#__PURE__*/new WeakMap();
var Range = /*#__PURE__*/function () {
  function Range(node) {
    var _this = this;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Range);
    _classPrivateFieldInitSpec(this, _values, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _slider, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _onchange, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _onslide, {
      writable: true,
      value: void 0
    });
    this.el = node;
    _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3___default()(this, _slider, document.createElement('div'));
    this.min = this.filter(this.el.dataset.min);
    this.max = this.filter(this.el.dataset.max);
    _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3___default()(this, _onchange, new Set());
    _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3___default()(this, _onslide, new Set());
    this.el.appendChild(_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2___default()(this, _slider));
    $(_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2___default()(this, _slider)).slider({
      range: true,
      min: this.min,
      max: this.max,
      orientation: 'horizontal',
      create: function create(event, ui) {
        _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3___default()(_this, _values, ui.values);
        _this.trigger('change');
      },
      change: function change(event, ui) {
        _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3___default()(_this, _values, ui.values);
        _this.trigger('change');
      },
      slide: function slide(event, ui) {
        _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3___default()(_this, _values, ui.values);
        _this.trigger('slide');
      }
    });
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Range, [{
    key: "onchange",
    set: function set(callback) {
      _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2___default()(this, _onchange).add(callback);
    }
  }, {
    key: "onslide",
    set: function set(callback) {
      _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2___default()(this, _onslide).add(callback);
    }
  }, {
    key: "values",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2___default()(this, _values);
    },
    set: function set(values) {
      var _this2 = this;
      var val = values.map(function (value) {
        var number = _this2.filter(value);
        if (number > _this2.max) return _this2.max;
        if (number < _this2.min) return _this2.min;
        return number;
      });
      $(_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2___default()(this, _slider)).slider('option', 'values', val);
      _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3___default()(this, _values, val);
    }
  }, {
    key: "trigger",
    value: function trigger(name) {
      var _this3 = this;
      if (name === 'change') {
        Array.from(_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2___default()(this, _onchange)).forEach(function (callback) {
          callback(_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2___default()(_this3, _values));
        });
      }
      if (name === 'slide') {
        Array.from(_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2___default()(this, _onslide)).forEach(function (callback) {
          callback(_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2___default()(_this3, _values));
        });
      }
      return this;
    }
  }, {
    key: "filter",
    value: function filter(value) {
      var string = value.toString().replace(/\D/mg, '');
      return parseInt(string);
    }
  }]);
  return Range;
}();

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_form_calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/form-calc */ "./src/components/form-calc/index.js");


/***/ }),

/***/ "./src/js/App.js":
/*!***********************!*\
  !*** ./src/js/App.js ***!
  \***********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = function () {
  var debug = console.info;
  return {
    debug: debug
  };
}();


/***/ }),

/***/ "./src/js/helpers/documentReady.js":
/*!*****************************************!*\
  !*** ./src/js/helpers/documentReady.js ***!
  \*****************************************/
/*! exports provided: documentReady */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "documentReady", function() { return documentReady; });
function documentReady(callback) {
  if (document.readyState === 'loading') {
    return document.addEventListener('DOMContentLoaded', function () {
      return callback(document);
    });
  }
  return callback(document);
}

/***/ })

/******/ });
//# sourceMappingURL=index.js.map