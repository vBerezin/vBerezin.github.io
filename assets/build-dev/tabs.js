(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["tabs"],{

/***/ "./common/modules/tabs.js":
/*!********************************!*\
  !*** ./common/modules/tabs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var tabs = function tabs(node) {
  if (!node) return false;

  var links = _toConsumableArray(node.querySelectorAll('[data-tab]'));

  if (!links) return false;
  var activeLink = links.filter(function (link) {
    return link.matches('.is-active');
  });

  var tabsArr = _toConsumableArray(node.querySelectorAll('[data-tab-id]'));

  function toggleTab(id) {
    links.forEach(function (link) {
      var target = link;

      if (target.dataset.tab === id) {
        target.classList.add('is-active');
      } else {
        target.classList.remove('is-active');
      }
    });
    tabsArr.forEach(function (tab) {
      var target = tab;

      if (target.dataset.tabId === id) {
        target.style.display = '';
      } else {
        target.style.display = 'none';
      }
    });
  }

  if (activeLink.length) {
    toggleTab(activeLink[0].dataset.tab);
  } else {
    toggleTab(links[0].dataset.tab);
  }

  node.addEventListener('click', function (event) {
    if (event.target.dataset && event.target.dataset.tab) {
      toggleTab(event.target.dataset.tab);
      event.preventDefault();
    }
  });
  return tabsArr;
};

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ })

}]);
//# sourceMappingURL=tabs.js.map