(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["input-file"],{

/***/ "./common/classes/class-input-file.js":
/*!********************************************!*\
  !*** ./common/classes/class-input-file.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// TODO: multiple, images
var InputFile =
/*#__PURE__*/
function () {
  function InputFile(input, options) {
    var _this = this;

    _classCallCheck(this, InputFile);

    this.input = input;
    this.values = null;
    this.options = _extends({
      buttonText: 'Browse',
      clearText: 'Remove'
    }, options || {});
    this.wrapper = this.makeWrapper();
    this.button = this.makeButton();
    this.clear = this.makeClear();
    input.addEventListener('change', function () {
      var files = input.files;

      if (files.length) {
        _this.values = files;
        _this.button.innerHTML = files[0].name;

        _this.wrapper.classList.add('has-file');
      } else {
        _this.values = null;
        _this.button.innerHTML = _this.options.buttonText;

        _this.wrapper.classList.remove('has-file');
      }

      if (typeof _this.onChange === 'function') _this.onChange();
    });
    this.input.parentNode.appendChild(this.wrapper);
    this.wrapper.appendChild(this.input);
    this.wrapper.appendChild(this.button);
    this.wrapper.appendChild(this.clear);
  }

  _createClass(InputFile, [{
    key: "makeWrapper",
    value: function makeWrapper() {
      var wrapper = document.createElement('div');
      wrapper.className = 'c-input-file';
      return wrapper;
    }
  }, {
    key: "makeButton",
    value: function makeButton() {
      var _this2 = this;

      var btn = document.createElement('button');
      btn.className = 'c-input-file__btn';
      btn.innerHTML = this.options.buttonText;

      btn.onclick = function (event) {
        _this2.input.click();

        event.preventDefault();
      };

      return btn;
    }
  }, {
    key: "makeClear",
    value: function makeClear() {
      var _this3 = this;

      var btn = document.createElement('button');
      btn.className = 'c-input-file__clear';
      btn.innerHTML = this.options.clearText;

      btn.onclick = function (event) {
        _this3.input.value('');

        event.preventDefault();
        if (typeof _this3.onChange === 'function') _this3.onChange();
      };

      return btn;
    }
  }, {
    key: "onChange",
    value: function onChange() {
      return false;
    }
  }]);

  return InputFile;
}();

/* harmony default export */ __webpack_exports__["default"] = (InputFile);

/***/ })

}]);
//# sourceMappingURL=input-file.js.map