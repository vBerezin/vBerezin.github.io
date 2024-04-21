!function(s){function e(e){for(var t,r,i=e[0],a=e[1],d=e[2],l=0,u=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&u.push(c[r][0]),c[r]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(s[t]=a[t]);for(p&&p(e);u.length;)u.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var s,e=0;e<o.length;e++){for(var n=o[e],t=!0,i=1;i<n.length;i++){var a=n[i];0!==c[a]&&(t=!1)}t&&(o.splice(e--,1),s=r(r.s=n[0]))}return s}var t={},c={"video-production":0},o=[];function r(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return s[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=s,r.c=t,r.d=function(s,e,n){r.o(s,e)||Object.defineProperty(s,e,{enumerable:!0,get:n})},r.r=function(s){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},r.t=function(s,e){if(1&e&&(s=r(s)),8&e)return s;if(4&e&&"object"==typeof s&&s&&s.__esModule)return s;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:s}),2&e&&"string"!=typeof s)for(var t in s)r.d(n,t,function(e){return s[e]}.bind(null,t));return n},r.n=function(s){var e=s&&s.__esModule?function(){return s.default}:function(){return s};return r.d(e,"a",e),e},r.o=function(s,e){return Object.prototype.hasOwnProperty.call(s,e)},r.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var p=a;o.push(["./src/pages/video-production/index.js","common"]),n()}({"./src/components/play/index.js":
/*!**************************************!*\
  !*** ./src/components/play/index.js ***!
  \**************************************/
/*! no exports provided */function(s,e,n){"use strict";n.r(e);n(/*! ./styles.scss */"./src/components/play/styles.scss")},"./src/components/play/styles.scss":
/*!*****************************************!*\
  !*** ./src/components/play/styles.scss ***!
  \*****************************************/
/*! no static exports found */function(s,e,n){},"./src/containers/breadcrumbs/index.js":
/*!*********************************************!*\
  !*** ./src/containers/breadcrumbs/index.js ***!
  \*********************************************/
/*! no exports provided */function(s,e,n){"use strict";n.r(e);n(/*! ~components/icon */"./src/components/icon/index.js"),n(/*! ./styles.scss */"./src/containers/breadcrumbs/styles.scss")},"./src/containers/breadcrumbs/styles.scss":
/*!************************************************!*\
  !*** ./src/containers/breadcrumbs/styles.scss ***!
  \************************************************/
/*! no static exports found */function(s,e,n){},"./src/containers/heroVideo/index.js":
/*!*******************************************!*\
  !*** ./src/containers/heroVideo/index.js ***!
  \*******************************************/
/*! no exports provided */function(s,e,n){"use strict";n.r(e);n(/*! ~components/container */"./src/components/container/index.js"),n(/*! ~components/button */"./src/components/button/index.js"),n(/*! ~components/image */"./src/components/image/index.js"),n(/*! ~containers/breadcrumbs */"./src/containers/breadcrumbs/index.js"),n(/*! ~containers/video */"./src/containers/video/index.js"),n(/*! ./style.scss */"./src/containers/heroVideo/style.scss")},"./src/containers/heroVideo/style.scss":
/*!*********************************************!*\
  !*** ./src/containers/heroVideo/style.scss ***!
  \*********************************************/
/*! no static exports found */function(s,e,n){},"./src/containers/sectionCatalog/index.js":
/*!************************************************!*\
  !*** ./src/containers/sectionCatalog/index.js ***!
  \************************************************/
/*! no exports provided */function(s,e,n){"use strict";n.r(e);var t=n(/*! @babel/runtime/helpers/defineProperty */"./node_modules/@babel/runtime/helpers/defineProperty.js"),c=n.n(t),o=(n(/*! ./styles.scss */"./src/containers/sectionCatalog/styles.scss"),n(/*! ~components/section */"./src/components/section/index.js"),n(/*! ~components/sectionTitle */"./src/components/sectionTitle/index.js"),n(/*! ~components/sectionHead */"./src/components/sectionHead/index.js"),n(/*! ~components/container */"./src/components/container/index.js"),n(/*! ~components/image */"./src/components/image/index.js"),n(/*! ~components/picture */"./src/components/picture/index.js"),n(/*! ~containers/video */"./src/containers/video/index.js"),n(/*! ~scripts/utils/Handlers */"./src/scripts/utils/Handlers.js")),r=n(/*! ~components/swiper */"./src/components/swiper/index.js"),i=n(/*! ~components/breakpoints */"./src/components/breakpoints/index.js");!function(){var s=document.querySelector(".js-sectionCatalog");if(!s)return!1;var e=new Map,n=s.querySelectorAll("[data-tab]"),t=s.querySelectorAll('[data-ref="slider"]'),a=s.querySelectorAll(".play");var d=new o.Handlers.Click({tab:function(s){var e,t=s.target;e=t.dataset.tab,n.forEach((function(s){var n=s.dataset.tab;s.classList.toggle("is-active",n===e)}))}});s.addEventListener("click",d),t.forEach((function(s){var n=s.closest("[data-tab]"),t=r.Swiper.init(s,{loop:!0,slidesPerView:"auto",centeredSlides:!0,longSwipes:!1,spaceBetween:0,breakpoints:c()({},i.Breakpoints.points.md,{loop:!0,longSwipes:!0,centeredSlides:!1})});e.set(n.dataset.tab,t)})),i.Breakpoints.once(["xxs","xs","sm"],(function(){a.forEach((function(s){return s.classList.add("play--green")}))}),(function(){a.forEach((function(s){return s.classList.remove("play--green")}))}))}()},"./src/containers/sectionCatalog/styles.scss":
/*!***************************************************!*\
  !*** ./src/containers/sectionCatalog/styles.scss ***!
  \***************************************************/
/*! no static exports found */function(s,e,n){},"./src/containers/sectionCeo/index.js":
/*!********************************************!*\
  !*** ./src/containers/sectionCeo/index.js ***!
  \********************************************/
/*! no exports provided */function(s,e,n){"use strict";n.r(e);n(/*! ~components/section */"./src/components/section/index.js"),n(/*! ~components/container */"./src/components/container/index.js"),n(/*! ~containers/iconBox */"./src/containers/iconBox/index.js"),n(/*! ~components/image */"./src/components/image/index.js"),n(/*! ./styles.scss */"./src/containers/sectionCeo/styles.scss")},"./src/containers/sectionCeo/styles.scss":
/*!***********************************************!*\
  !*** ./src/containers/sectionCeo/styles.scss ***!
  \***********************************************/
/*! no static exports found */function(s,e,n){},"./src/containers/sectionFeedback2/index.js":
/*!**************************************************!*\
  !*** ./src/containers/sectionFeedback2/index.js ***!
  \**************************************************/
/*! no exports provided */function(s,e,n){"use strict";n.r(e);n(/*! ./style.scss */"./src/containers/sectionFeedback2/style.scss"),n(/*! ~components/section */"./src/components/section/index.js"),n(/*! ~components/sectionTitle */"./src/components/sectionTitle/index.js"),n(/*! ~components/container */"./src/components/container/index.js"),n(/*! ~components/button */"./src/components/button/index.js"),n(/*! ~components/input */"./src/components/input/index.js"),n(/*! ~components/feedbackSuccess */"./src/components/feedbackSuccess/index.js")},"./src/containers/sectionFeedback2/style.scss":
/*!****************************************************!*\
  !*** ./src/containers/sectionFeedback2/style.scss ***!
  \****************************************************/
/*! no static exports found */function(s,e,n){},"./src/containers/sectionPartners/index.js":
/*!*************************************************!*\
  !*** ./src/containers/sectionPartners/index.js ***!
  \*************************************************/
/*! no exports provided */function(s,e,n){"use strict";n.r(e);var t=n(/*! @babel/runtime/helpers/defineProperty */"./node_modules/@babel/runtime/helpers/defineProperty.js"),c=n.n(t),o=(n(/*! ./style.scss */"./src/containers/sectionPartners/style.scss"),n(/*! ~components/swiper */"./src/components/swiper/index.js")),r=n(/*! ~components/breakpoints */"./src/components/breakpoints/index.js");n(/*! ~components/section */"./src/components/section/index.js"),n(/*! ~components/sectionHead */"./src/components/sectionHead/index.js"),n(/*! ~components/sectionTitle */"./src/components/sectionTitle/index.js"),n(/*! ~components/container */"./src/components/container/index.js"),n(/*! ~components/image */"./src/components/image/index.js");!function(){var s=document.querySelector(".js-sectionPartners");if(!s)return null;var e=s.querySelector('[data-ref="slider"]'),n={modules:[o.Grid],loop:!1,slidesPerView:2,spaceBetween:20,grid:{fill:"row",rows:2},breakpoints:c()({},r.Breakpoints.points.sm,{slidesPerView:3,spaceBetween:40,grid:{fill:"row",rows:2}})},t=null;r.Breakpoints.once(["xxs","xs","sm"],(function(){t=o.Swiper.init(e,n)}),(function(){t=o.Swiper.destroy(t)}))}()},"./src/containers/sectionPartners/style.scss":
/*!***************************************************!*\
  !*** ./src/containers/sectionPartners/style.scss ***!
  \***************************************************/
/*! no static exports found */function(s,e,n){},"./src/containers/sectionPricing/index.js":
/*!************************************************!*\
  !*** ./src/containers/sectionPricing/index.js ***!
  \************************************************/
/*! no exports provided */function(s,e,n){"use strict";n.r(e);var t=n(/*! @babel/runtime/helpers/defineProperty */"./node_modules/@babel/runtime/helpers/defineProperty.js"),c=n.n(t),o=(n(/*! ./styles.scss */"./src/containers/sectionPricing/styles.scss"),n(/*! ~components/section */"./src/components/section/index.js"),n(/*! ~components/sectionTitle */"./src/components/sectionTitle/index.js"),n(/*! ~components/sectionHead */"./src/components/sectionHead/index.js"),n(/*! ~components/container */"./src/components/container/index.js"),n(/*! ~components/button */"./src/components/button/index.js"),n(/*! ~components/picture */"./src/components/picture/index.js"),n(/*! ~components/image */"./src/components/image/index.js"),n(/*! ~containers/popupSales */"./src/containers/popupSales/index.js"),n(/*! ~components/swiper */"./src/components/swiper/index.js")),r=n(/*! ~components/breakpoints */"./src/components/breakpoints/index.js");!function(){var s=document.querySelector(".js-sectionPricing");if(!s)return null;var e=s.querySelector('[data-ref="slider"]'),n={modules:[o.Grid],loop:!1,slidesPerView:1,grid:{fill:"row",rows:2},breakpoints:c()({},r.Breakpoints.points.sm,{spaceBetween:10})},t=null;r.Breakpoints.once(["xxs","xs","sm"],(function(){t=o.Swiper.init(e,n)}),(function(){t=o.Swiper.destroy(t)}))}()},"./src/containers/sectionPricing/styles.scss":
/*!***************************************************!*\
  !*** ./src/containers/sectionPricing/styles.scss ***!
  \***************************************************/
/*! no static exports found */function(s,e,n){},"./src/containers/sectionSteps/index.js":
/*!**********************************************!*\
  !*** ./src/containers/sectionSteps/index.js ***!
  \**********************************************/
/*! no exports provided */function(s,e,n){"use strict";n.r(e);n(/*! ./styles.scss */"./src/containers/sectionSteps/styles.scss"),n(/*! ~components/picture */"./src/components/picture/index.js"),n(/*! ~components/section */"./src/components/section/index.js"),n(/*! ~components/sectionTitle */"./src/components/sectionTitle/index.js"),n(/*! ~components/sectionHead */"./src/components/sectionHead/index.js"),n(/*! ~components/container */"./src/components/container/index.js")},"./src/containers/sectionSteps/styles.scss":
/*!*************************************************!*\
  !*** ./src/containers/sectionSteps/styles.scss ***!
  \*************************************************/
/*! no static exports found */function(s,e,n){},"./src/containers/sectionWorks/index.js":
/*!**********************************************!*\
  !*** ./src/containers/sectionWorks/index.js ***!
  \**********************************************/
/*! no exports provided */function(s,e,n){"use strict";n.r(e);n(/*! ./styles.scss */"./src/containers/sectionWorks/styles.scss"),n(/*! ~components/section */"./src/components/section/index.js"),n(/*! ~components/sectionHead */"./src/components/sectionHead/index.js"),n(/*! ~components/sectionTitle */"./src/components/sectionTitle/index.js"),n(/*! ~components/container */"./src/components/container/index.js"),n(/*! ~components/icon */"./src/components/icon/index.js"),n(/*! ~components/image */"./src/components/image/index.js");var t=n(/*! ~components/swiper */"./src/components/swiper/index.js"),c=n(/*! ~components/swiperPagination */"./src/components/swiperPagination/index.js");n(/*! ~containers/workCard */"./src/containers/workCard/index.js");!function(){var s=document.querySelector(".js-sectionWorks");if(!s)return null;var e=s.querySelector('[data-ref="slider"]'),n=s.querySelector('[data-ref="slider.prev"]'),o=s.querySelector('[data-ref="slider.next"]'),r=s.querySelector('[data-ref="pagination"]');new t.Swiper.init(e,{modules:[t.Grid,c.Pagination],slidesPerView:2,loop:!1,spaceBetween:0,grid:{fill:"row",rows:2},pagination:{el:r,enabled:!0,clickable:!0},breakpoints:{1024:{slidesPerView:3,spaceBetween:20}},on:{init:function(s){n.addEventListener("click",(function(){return s.slidePrev()})),o.addEventListener("click",(function(){return s.slideNext()}))}}})}()},"./src/containers/sectionWorks/styles.scss":
/*!*************************************************!*\
  !*** ./src/containers/sectionWorks/styles.scss ***!
  \*************************************************/
/*! no static exports found */function(s,e,n){},"./src/containers/video/index.js":
/*!***************************************!*\
  !*** ./src/containers/video/index.js ***!
  \***************************************/
/*! no exports provided */function(s,e,n){"use strict";n.r(e);n(/*! ./styles.scss */"./src/containers/video/styles.scss"),n(/*! ~components/play */"./src/components/play/index.js")},"./src/containers/video/styles.scss":
/*!******************************************!*\
  !*** ./src/containers/video/styles.scss ***!
  \******************************************/
/*! no static exports found */function(s,e,n){},"./src/containers/workCard/index.js":
/*!******************************************!*\
  !*** ./src/containers/workCard/index.js ***!
  \******************************************/
/*! no exports provided */function(s,e,n){"use strict";n.r(e);n(/*! ./styles.scss */"./src/containers/workCard/styles.scss"),n(/*! ~components/button */"./src/components/button/index.js"),n(/*! ~components/image */"./src/components/image/index.js")},"./src/containers/workCard/styles.scss":
/*!*********************************************!*\
  !*** ./src/containers/workCard/styles.scss ***!
  \*********************************************/
/*! no static exports found */function(s,e,n){},"./src/pages/video-production/index.js":
/*!*********************************************!*\
  !*** ./src/pages/video-production/index.js ***!
  \*********************************************/
/*! no exports provided */function(s,e,n){"use strict";n.r(e);n(/*! ~styles/common.scss */"./src/styles/common.scss"),n(/*! ~scripts/common */"./src/scripts/common.js"),n(/*! ~icons/sprite/symbol/sprite.scss */"./src/icons/sprite/symbol/sprite.scss"),n(/*! ~components/container */"./src/components/container/index.js"),n(/*! ~components/button */"./src/components/button/index.js"),n(/*! ~containers/layoutPage */"./src/containers/layoutPage/index.js"),n(/*! ~containers/header */"./src/containers/header/index.js"),n(/*! ~containers/heroVideo */"./src/containers/heroVideo/index.js"),n(/*! ~containers/sectionCeo */"./src/containers/sectionCeo/index.js"),n(/*! ~containers/sectionCatalog */"./src/containers/sectionCatalog/index.js"),n(/*! ~containers/sectionFeedback2 */"./src/containers/sectionFeedback2/index.js"),n(/*! ~containers/sectionPartners */"./src/containers/sectionPartners/index.js"),n(/*! ~containers/sectionSteps */"./src/containers/sectionSteps/index.js"),n(/*! ~containers/sectionPricing */"./src/containers/sectionPricing/index.js"),n(/*! ~containers/sectionWorks */"./src/containers/sectionWorks/index.js"),n(/*! ~containers/footer */"./src/containers/footer/index.js"),n(/*! ./style.scss */"./src/pages/video-production/style.scss")},"./src/pages/video-production/style.scss":
/*!***********************************************!*\
  !*** ./src/pages/video-production/style.scss ***!
  \***********************************************/
/*! no static exports found */function(s,e,n){}});