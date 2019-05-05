(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["prouctGallery"],{

/***/ "./common/product-card.js":
/*!********************************!*\
  !*** ./common/product-card.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./common/app.js");
/* harmony import */ var _jquery_plugins_owl_destroy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jquery-plugins/owl-destroy */ "./common/jquery-plugins/owl-destroy.js");



var prouctGallery = function prouctGallery(context) {
  var product = $(context).find('.js-product-gal');
  if (!product.length) return false;
  var slider = product.find('[data-action="product.slider"]');
  var thumbs = product.find('[data-action="product.thumbs"]');
  var thumbsHover = false;

  function setThumb(index) {
    thumbs.find('[data-index]').removeClass('is-active');
    thumbs.find("[data-index=".concat(index, "]")).addClass('is-active');

    if (!thumbsHover) {
      thumbs.trigger('to.owl.carousel', index);
    }
  }

  if (slider.children().length > 1) {
    _app__WEBPACK_IMPORTED_MODULE_0__["default"].breakpoints.onBreakpoint('xxs xs', function () {
      thumbs.hide(0);
      Object(_jquery_plugins_owl_destroy__WEBPACK_IMPORTED_MODULE_1__["default"])(slider);
    }, function () {
      slider.addClass('owl-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: false,
        nav: true,
        onInitialized: function onInitialized(event) {
          setThumb(event.item.index);
        },
        onTranslated: function onTranslated(event) {
          setThumb(event.item.index);
        },
        responsive: {
          550: {
            nav: false
          }
        }
      });
      thumbs.show(0);
      thumbs.addClass('owl-carousel').owlCarousel({
        nav: true,
        dots: false,
        loop: false,
        items: 4,
        margin: 20,
        autoWidth: true
      });
      thumbs.on('click', '[data-index]', function (event) {
        slider.trigger('to.owl.carousel', +$(this).data('index'));
        event.preventDefault();
      }).on('mouseenter', function () {
        thumbsHover = true;
      }).on('mouseleave', function () {
        thumbsHover = false;
      });
    });
  } else {
    thumbs.remove();
  }

  return product;
};

/* harmony default export */ __webpack_exports__["default"] = (prouctGallery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ })

}]);
//# sourceMappingURL=prouctGallery.js.map