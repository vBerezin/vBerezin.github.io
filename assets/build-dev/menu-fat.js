(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["menu-fat"],{

/***/ "./common/classes/class-menu-fat.js":
/*!******************************************!*\
  !*** ./common/classes/class-menu-fat.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @description жирное меню
 * прячет не влезающие пункты меню в гамбурер
 * */
var MenuFat =
/*#__PURE__*/
function () {
  function MenuFat(root, options) {
    _classCallCheck(this, MenuFat);

    if (!root) {
      return new Error(_typeof(root));
    }

    this.options = _extends({
      toggleText: '<span></span><span></span><span></span><span></span>',
      class: ''
    }, options);
    this.root = root;
    this.wrapper = this.makeWrapper(root);
    this.rootWidth = Math.ceil(root.offsetWidth);
    this.children = root.tagName === 'UL' ? root.children : root.querySelector('ul').children;
    this.nav = {
      el: this.makeNav(),
      active: false
    };
    this.helper = this.makeHelper();
    this.itemsStorage = this.storeItemsData(this.children);
    this.itemsWidth = this.getItemsWidth(this.itemsStorage);
    this.dataStorage = {
      cropped: [],
      visible: []
    };
    this.root.parentNode.appendChild(this.wrapper);
    this.wrapper.appendChild(this.root);
    this.wrapper.appendChild(this.helper.el);
    this.wrapper.appendChild(this.nav.el);
    this.calculate();
    this.bindEvents();
  }

  _createClass(MenuFat, [{
    key: "storeItemsData",
    value: function storeItemsData(nodes) {
      return _toConsumableArray(nodes).map(function (node) {
        var item = node;
        var width = Math.ceil(node.offsetWidth); // если элемент не видимый

        if (width === 0) {
          var display = node.style.display;
          item.style.display = '';
          width = Math.ceil(node.offsetWidth);
          item.style.display = display;
        }

        return {
          node: node,
          width: width
        };
      });
    }
  }, {
    key: "getItemsWidth",
    value: function getItemsWidth(storage) {
      var width = 0;
      storage.forEach(function (item) {
        width += item.width;
      });
      return width;
    }
  }, {
    key: "activate",
    value: function activate() {
      this.wrapper.classList.add('is-active');
      this.helper.el.style.display = 'block';
      this.rootWidth = Math.ceil(this.root.offsetWidth);
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      this.wrapper.classList.remove('is-active');
      this.helper.el.style.display = 'none';
      this.nav.el.style.display = 'none';
      this.rootWidth = Math.ceil(this.root.offsetWidth);
    }
  }, {
    key: "calculate",
    value: function calculate() {
      var _this = this;

      var _this$dataStorage = this.dataStorage,
          cropped = _this$dataStorage.cropped,
          visible = _this$dataStorage.visible;
      this.deactivate();

      if (this.itemsWidth > this.rootWidth) {
        this.activate();
        cropped = [];
        visible = [];
        this.itemsWidth = 0;
        this.itemsStorage.forEach(function (item) {
          _this.itemsWidth += item.width;

          if (_this.itemsWidth > _this.rootWidth) {
            cropped.push(item);
          } else {
            visible.push(item);
          }
        });
      } else {
        visible = cropped;
        cropped = [];
      }

      visible.forEach(function (item) {
        return _this.resetItem(item.node);
      });
      cropped.forEach(function (item) {
        return _this.cropItem(item.node);
      });
      this.dataStorage.cropped = cropped;
      this.dataStorage.visible = visible;
      this.renderNav(cropped);
      return {
        cropped: cropped,
        visible: visible
      };
    }
  }, {
    key: "makeWrapper",
    value: function makeWrapper(root) {
      var wrapper = document.createElement('nav');
      wrapper.className = "c-menu-fat ".concat(this.options.class);
      return wrapper;
    }
  }, {
    key: "makeHelper",
    value: function makeHelper() {
      var helper = document.createElement('div');
      var toggle = document.createElement('button');
      toggle.className = 'c-menu-fat__toggle';
      toggle.innerHTML = this.options.toggleText;
      helper.className = 'c-menu-fat__helper';
      helper.appendChild(toggle);
      return {
        el: helper,
        toggle: toggle
      };
    }
  }, {
    key: "makeNav",
    value: function makeNav() {
      var nav = document.createElement('div');
      nav.className = 'c-menu-fat__nav';
      return nav;
    }
  }, {
    key: "renderNav",
    value: function renderNav(nodes) {
      var items = nodes ? nodes.map(function (item) {
        return "<li>".concat(item.node.innerHTML, "</li>");
      }).join('') : '';
      this.nav.el.innerHTML = "<ul>".concat(items, "</ul>");
      return this.nav;
    }
  }, {
    key: "cropItem",
    value: function cropItem(node) {
      var item = node;
      item.style.display = 'none';
      return item;
    }
  }, {
    key: "resetItem",
    value: function resetItem(node) {
      var item = node;
      item.style.display = '';
      return item;
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this2 = this;

      var timer;

      var windowResizeHandler = function windowResizeHandler() {
        clearTimeout(timer);
        timer = setTimeout(function () {
          _this2.calculate();
        }, 500);
      };

      var windowClickHandler = function windowClickHandler() {
        _this2.close();
      };

      var toggleHandler = function toggleHandler(event) {
        event.preventDefault();
        event.stopPropagation();

        if (_this2.nav.active) {
          _this2.close();
        } else {
          _this2.open();
        }
      };

      this.nav.el.addEventListener('click', function (event) {
        return event.stopPropagation();
      });
      this.nav.el.addEventListener('touchstart', function (event) {
        return event.stopPropagation();
      });
      this.helper.toggle.addEventListener('click', toggleHandler);
      window.addEventListener('resize', windowResizeHandler);
      window.addEventListener('click', windowClickHandler);
      window.addEventListener('load', function () {
        _this2.refresh();

        _this2.calculate();
      });
    }
    /**
     * @public { open }
     * */

  }, {
    key: "open",
    value: function open() {
      this.nav.el.style.display = 'block';
      this.nav.active = true;
      this.helper.toggle.classList.add('is-active');
    }
    /**
     * @public { close }
     * */

  }, {
    key: "close",
    value: function close() {
      this.nav.el.style.display = 'none';
      this.nav.active = false;
      this.helper.toggle.classList.remove('is-active');
    }
    /**
     * @public { refresh } обновляет данные о ширине пунктов меню
     * */

  }, {
    key: "refresh",
    value: function refresh() {
      this.itemsStorage = this.storeItemsData(this.children);
      this.itemsWidth = this.getItemsWidth(this.itemsStorage);
      return this;
    }
  }]);

  return MenuFat;
}();

/* harmony default export */ __webpack_exports__["default"] = (MenuFat);

/***/ })

}]);
//# sourceMappingURL=menu-fat.js.map