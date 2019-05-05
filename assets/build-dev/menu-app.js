(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["menu-app"],{

/***/ "./common/classes/class-menu-app.js":
/*!******************************************!*\
  !*** ./common/classes/class-menu-app.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @description мобильное меню
 * @param {object} data - { title, url, active, children:{dataN}},{...},{N}
 * @public {open} открыть меню
 * @public {close} закрыть меню
 * */
var MenuApp =
/*#__PURE__*/
function () {
  function MenuApp(data, options) {
    _classCallCheck(this, MenuApp);

    if (!data || _typeof(data) !== 'object') {
      return new Error('data must be JSON');
    }

    this.options = _extends({
      title: 'Меню',
      dropdownBtn: '<svg class="c-icon c-icon-svg c-icon-svg-right">' + '<use xlink:href="/assets/images/icons.svg#right"></use></svg>',
      closeBtn: '<svg class="c-icon c-icon-svg c-icon-svg-close">' + '<use xlink:href="/assets/images/icons.svg#close"></use></svg>',
      backBtn: '<svg class="c-icon c-icon-svg c-icon-svg-left">' + '<use xlink:href="/assets/images/icons.svg#left"></use></svg>',
      onOpen: function onOpen() {
        return false;
      },
      onClose: function onClose() {
        return false;
      }
    }, options);
    this.data = data;
    this.active = false;
    this.current = [];
    this.menu = this.createMenu();
    this.overlay = this.makeOverlay();
  }

  _createClass(MenuApp, [{
    key: "makeItem",
    value: function makeItem(item, index) {
      var delay = "".concat(index * 50, "ms");
      var dataAttr = "data-action=\"dropdown\" data-index=\"".concat(index, "\"");
      var activeClass = item.active ? 'is-active' : '';
      var dropdownClass = '';
      var toggle = '';
      var link = "<span class=\"c-menu-app__item-link\">".concat(item.title, "</span>");

      if (item.children) {
        dropdownClass = 'has-dropdown';
        toggle = "<button ".concat(dataAttr, " class=\"c-menu-app__toggle\">").concat(this.options.dropdownBtn, "</button>");
        link = "<span ".concat(dataAttr, " class=\"c-menu-app__item-link\">").concat(item.title, "</span>");
      }

      if (!item.active && item.url) {
        var urls = [window.location.href, window.location.pathname + window.location.search, window.location.pathname];
        urls.forEach(function (url) {
          if (url === item.url) {
            activeClass = 'is-active';
            return activeClass;
          }

          return url;
        });
      }

      if (item.url) {
        link = "<a class=\"c-menu-app__item-link\" href=\"".concat(item.url, "\">").concat(item.title, "</a>");
      }

      return "<div class=\"c-menu-app__item ".concat(activeClass, " ").concat(dropdownClass, "\" \n            style=\"animation-delay:").concat(delay, "\">").concat(link).concat(toggle, "</div>");
    }
  }, {
    key: "makeList",
    value: function makeList(root) {
      var _this = this;

      var items = root.map(function (item, index) {
        return "<li>".concat(_this.makeItem(item, index), "</li>");
      });
      return "<ul>".concat(items.join(''), "</ul>");
    }
  }, {
    key: "getItem",
    value: function getItem(path) {
      var target = this.data;
      path.forEach(function (index) {
        var newTarget = target[index];

        if (target.children && target.children[index] && target.children[index].children) {
          newTarget = target.children[index];
        }

        if (newTarget) target = newTarget;
      });
      return target;
    }
  }, {
    key: "render",
    value: function render(title, menu) {
      var btnBack = "<button class=\"c-menu-app__back\" \n                    data-action=\"back\">".concat(this.options.backBtn, "</button>");
      if (!this.current.length) btnBack = '';
      return "<div class=\"c-menu-app__head\">".concat(btnBack, "\n            <button class=\"c-menu-app__close\"\n                data-action=\"close\">").concat(this.options.closeBtn, "</button>\n            <div class=\"c-menu-app__title\" \n                data-action=\"back\">").concat(title || this.options.title, "</div>\n            </div>\n            <div class=\"c-menu-app__body\"><div class=\"c-menu-app__nav\">").concat(menu, "</div></div>");
    }
  }, {
    key: "open",
    value: function open(callback) {
      if (!this.menu) return false;
      this.menu.classList.add('is-active');
      this.active = true;
      this.menu.style.display = 'block';
      this.overlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
      if (callback && typeof callback === 'function') callback(this.menu);
      if (typeof this.options.onOpen === 'function') this.options.onOpen(this.menu);
      return this.menu;
    }
  }, {
    key: "close",
    value: function close(callback) {
      if (!this.menu) return false;
      this.menu.classList.remove('is-active');
      this.active = false;
      this.menu.style.display = 'none';
      this.overlay.style.display = 'none';
      document.body.style.overflow = '';
      if (callback && typeof callback === 'function') callback(this.menu);
      if (typeof this.options.onClose === 'function') this.options.onClose(this.menu);
      return this.menu;
    }
  }, {
    key: "bindEvents",
    value: function bindEvents(menu) {
      var _this2 = this;

      var actions = {
        dropdown: function dropdown(target) {
          var index = target.dataset.index;

          _this2.current.push(index);

          var item = _this2.getItem(_this2.current);

          _this2.menu.innerHTML = _this2.render(item.title, _this2.makeList(item.children));
          return _this2.menu;
        },
        back: function back() {
          if (!_this2.current.length) return false;

          _this2.current.pop();

          var item = _this2.getItem(_this2.current);

          var dropdown = item.children || item;
          var title = item.title || _this2.options.title;
          _this2.menu.innerHTML = _this2.render(title, _this2.makeList(dropdown));
          return _this2.menu;
        },
        close: function close() {
          return _this2.close();
        }
      };
      menu.addEventListener('click', function (event) {
        var target = event.target;

        while (target !== menu) {
          if (target.dataset && target.dataset.action) {
            var action = target.dataset.action;
            if (actions[action]) actions[action](target);
            event.preventDefault();
            break;
          }

          target = target.parentNode;
        }
      });
    }
  }, {
    key: "makeOverlay",
    value: function makeOverlay() {
      var _this3 = this;

      var overlay = document.createElement('div');
      overlay.className = 'c-menu-app-overlay';
      overlay.style.display = 'none';
      this.overlay = overlay;

      this.overlay.onclick = function () {
        _this3.close();
      };

      return overlay;
    }
  }, {
    key: "createMenu",
    value: function createMenu() {
      this.menu = document.createElement('nav');
      this.menu.className = 'c-menu-app';
      this.menu.style.display = 'none';
      this.menu.innerHTML = this.render(this.options.title, this.makeList(this.data));
      this.bindEvents(this.menu);
      return this.menu;
    }
  }]);

  return MenuApp;
}();

/* harmony default export */ __webpack_exports__["default"] = (MenuApp);

/***/ })

}]);
//# sourceMappingURL=menu-app.js.map