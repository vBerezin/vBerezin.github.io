!function(s){function e(e){for(var r,c,i=e[0],a=e[1],d=e[2],p=0,u=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(t,c)&&t[c]&&u.push(t[c][0]),t[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(s[r]=a[r]);for(l&&l(e);u.length;)u.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var s,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var a=n[i];0!==t[a]&&(r=!1)}r&&(o.splice(e--,1),s=c(c.s=n[0]))}return s}var r={},t={"video-production":0},o=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return s[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=s,c.c=r,c.d=function(s,e,n){c.o(s,e)||Object.defineProperty(s,e,{enumerable:!0,get:n})},c.r=function(s){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},c.t=function(s,e){if(1&e&&(s=c(s)),8&e)return s;if(4&e&&"object"==typeof s&&s&&s.__esModule)return s;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:s}),2&e&&"string"!=typeof s)for(var r in s)c.d(n,r,function(e){return s[e]}.bind(null,r));return n},c.n=function(s){var e=s&&s.__esModule?function(){return s.default}:function(){return s};return c.d(e,"a",e),e},c.o=function(s,e){return Object.prototype.hasOwnProperty.call(s,e)},c.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var l=a;o.push(["./src/pages/video-production/index.js","common"]),n()}({"./src/containers/breadcrumbs/index.js":
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
/*! no static exports found */function(s,e,n){},"./src/containers/play/index.js":
/*!**************************************!*\
  !*** ./src/containers/play/index.js ***!
  \**************************************/
/*! no exports provided */function(s,e,n){"use strict";n.r(e);n(/*! ./styles.scss */"./src/containers/play/styles.scss")},"./src/containers/play/styles.scss":
/*!*****************************************!*\
  !*** ./src/containers/play/styles.scss ***!
  \*****************************************/
/*! no static exports found */function(s,e,n){},"./src/containers/sectionCatalog/index.js":
/*!************************************************!*\
  !*** ./src/containers/sectionCatalog/index.js ***!
  \************************************************/
/*! no exports provided */function(s,e,n){"use strict";n.r(e);var r=n(/*! @babel/runtime/helpers/defineProperty */"./node_modules/@babel/runtime/helpers/defineProperty.js"),t=n.n(r),o=(n(/*! ./styles.scss */"./src/containers/sectionCatalog/styles.scss"),n(/*! ~components/section */"./src/components/section/index.js"),n(/*! ~components/sectionTitle */"./src/components/sectionTitle/index.js"),n(/*! ~components/sectionHead */"./src/components/sectionHead/index.js"),n(/*! ~components/container */"./src/components/container/index.js"),n(/*! ~components/image */"./src/components/image/index.js"),n(/*! ~components/picture */"./src/components/picture/index.js"),n(/*! ~containers/video */"./src/containers/video/index.js"),n(/*! ~scripts/utils/Handlers */"./src/scripts/utils/Handlers.js")),c=n(/*! ~components/swiper */"./src/components/swiper/index.js"),i=n(/*! ~components/swiperScrollbar */"./src/components/swiperScrollbar/index.js"),a=n(/*! ~components/breakpoints */"./src/components/breakpoints/index.js");!function(){var s=document.querySelector(".js-sectionCatalog");if(!s)return!1;var e=new Map,n=s.querySelectorAll("[data-tab]"),r=s.querySelectorAll('[data-ref="slider"]');var d=new o.Handlers.Click({tab:function(s){var e,r=s.target;e=r.dataset.tab,n.forEach((function(s){var n=s.dataset.tab;s.classList.toggle("is-active",n===e)}))}});s.addEventListener("click",d),r.forEach((function(s){var n=s.querySelectorAll('[data-ref="slide"]'),r=s.closest("[data-tab]"),o=s.dataset.reverse;console.log(s.dataset);var d=r.querySelector('[data-ref="scrollbar"]'),l=c.Swiper.init(s,{modules:[i.Scrollbar],spaceBetween:0,loop:!1,slidesPerView:1,centeredSlides:!0,breakpoints:t()({},a.Breakpoints.points.md,{slidesPerView:1,initialSlide:o?n.length-1:0,scrollbar:{el:d,hide:!1,draggable:!0}})});e.set(r.dataset.tab,l)}))}()},"./src/containers/sectionCatalog/styles.scss":
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
/*! no static exports found */function(s,e,n){},"./src/containers/sectionPartners/index.js":
/*!*************************************************!*\
  !*** ./src/containers/sectionPartners/index.js ***!
  \*************************************************/
/*! no exports provided */function(s,e,n){"use strict";n.r(e);var r=n(/*! @babel/runtime/helpers/defineProperty */"./node_modules/@babel/runtime/helpers/defineProperty.js"),t=n.n(r),o=(n(/*! ./style.scss */"./src/containers/sectionPartners/style.scss"),n(/*! ~components/swiper */"./src/components/swiper/index.js")),c=n(/*! ~components/breakpoints */"./src/components/breakpoints/index.js");n(/*! ~components/section */"./src/components/section/index.js"),n(/*! ~components/sectionHead */"./src/components/sectionHead/index.js"),n(/*! ~components/sectionTitle */"./src/components/sectionTitle/index.js"),n(/*! ~components/container */"./src/components/container/index.js"),n(/*! ~components/image */"./src/components/image/index.js");!function(){var s=document.querySelector(".js-sectionPartners");if(!s)return null;var e=s.querySelector('[data-ref="slider"]'),n={modules:[o.Grid],loop:!1,slidesPerView:2,spaceBetween:20,grid:{fill:"row",rows:2},breakpoints:t()({},c.Breakpoints.points.sm,{slidesPerView:3,spaceBetween:40,grid:{fill:"row",rows:2}})},r=null;c.Breakpoints.once(["xxs","xs","sm"],(function(){r=o.Swiper.init(e,n)}),(function(){r=o.Swiper.destroy(r)}))}()},"./src/containers/sectionPartners/style.scss":
/*!***************************************************!*\
  !*** ./src/containers/sectionPartners/style.scss ***!
  \***************************************************/
/*! no static exports found */function(s,e,n){},"./src/containers/sectionPricing/index.js":
/*!************************************************!*\
  !*** ./src/containers/sectionPricing/index.js ***!
  \************************************************/
/*! no exports provided */function(s,e,n){"use strict";n.r(e);var r=n(/*! @babel/runtime/helpers/defineProperty */"./node_modules/@babel/runtime/helpers/defineProperty.js"),t=n.n(r),o=(n(/*! ./styles.scss */"./src/containers/sectionPricing/styles.scss"),n(/*! ~components/section */"./src/components/section/index.js"),n(/*! ~components/sectionTitle */"./src/components/sectionTitle/index.js"),n(/*! ~components/sectionHead */"./src/components/sectionHead/index.js"),n(/*! ~components/container */"./src/components/container/index.js"),n(/*! ~components/button */"./src/components/button/index.js"),n(/*! ~components/picture */"./src/components/picture/index.js"),n(/*! ~components/image */"./src/components/image/index.js"),n(/*! ~containers/popupSales */"./src/containers/popupSales/index.js"),n(/*! ~components/swiper */"./src/components/swiper/index.js")),c=n(/*! ~components/breakpoints */"./src/components/breakpoints/index.js");!function(){var s=document.querySelector(".js-sectionPricing");if(!s)return null;var e=s.querySelector('[data-ref="slider"]'),n={modules:[o.Grid],loop:!1,slidesPerView:1,grid:{fill:"row",rows:2},breakpoints:t()({},c.Breakpoints.points.sm,{spaceBetween:10})},r=null;c.Breakpoints.once(["xxs","xs","sm"],(function(){r=o.Swiper.init(e,n)}),(function(){r=o.Swiper.destroy(r)}))}()},"./src/containers/sectionPricing/styles.scss":
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
/*! no exports provided */function(s,e,n){"use strict";n.r(e);n(/*! ./styles.scss */"./src/containers/sectionWorks/styles.scss"),n(/*! ~components/section */"./src/components/section/index.js"),n(/*! ~components/sectionHead */"./src/components/sectionHead/index.js"),n(/*! ~components/sectionTitle */"./src/components/sectionTitle/index.js"),n(/*! ~components/container */"./src/components/container/index.js"),n(/*! ~components/icon */"./src/components/icon/index.js"),n(/*! ~components/image */"./src/components/image/index.js");var r=n(/*! ~components/swiper */"./src/components/swiper/index.js"),t=n(/*! ~components/swiperPagination */"./src/components/swiperPagination/index.js");n(/*! ~containers/workCard */"./src/containers/workCard/index.js");!function(){var s=document.querySelector(".js-sectionWorks");if(!s)return null;var e=s.querySelector('[data-ref="slider"]'),n=s.querySelector('[data-ref="slider.prev"]'),o=s.querySelector('[data-ref="slider.next"]'),c=s.querySelector('[data-ref="pagination"]');new r.Swiper.init(e,{modules:[r.Grid,t.Pagination],slidesPerView:2,loop:!1,spaceBetween:0,grid:{fill:"row",rows:2},pagination:{el:c,enabled:!0,clickable:!0},breakpoints:{1024:{slidesPerView:3,spaceBetween:20}},on:{init:function(s){n.addEventListener("click",(function(){return s.slidePrev()})),o.addEventListener("click",(function(){return s.slideNext()}))}}})}()},"./src/containers/sectionWorks/styles.scss":
/*!*************************************************!*\
  !*** ./src/containers/sectionWorks/styles.scss ***!
  \*************************************************/
/*! no static exports found */function(s,e,n){},"./src/containers/video/index.js":
/*!***************************************!*\
  !*** ./src/containers/video/index.js ***!
  \***************************************/
/*! no exports provided */function(s,e,n){"use strict";n.r(e);n(/*! ./styles.scss */"./src/containers/video/styles.scss"),n(/*! ~containers/play */"./src/containers/play/index.js")},"./src/containers/video/styles.scss":
/*!******************************************!*\
  !*** ./src/containers/video/styles.scss ***!
  \******************************************/
/*! no static exports found */function(s,e,n){},"./src/containers/workCard/index.js":
/*!******************************************!*\
  !*** ./src/containers/workCard/index.js ***!
  \******************************************/
/*! no exports provided */function(s,e,n){"use strict";n.r(e);n(/*! ./styles.scss */"./src/containers/workCard/styles.scss"),n(/*! ~containers/video */"./src/containers/video/index.js")},"./src/containers/workCard/styles.scss":
/*!*********************************************!*\
  !*** ./src/containers/workCard/styles.scss ***!
  \*********************************************/
/*! no static exports found */function(s,e,n){},"./src/pages/video-production/index.js":
/*!*********************************************!*\
  !*** ./src/pages/video-production/index.js ***!
  \*********************************************/
/*! no exports provided */function(s,e,n){"use strict";n.r(e);n(/*! ~styles/common.scss */"./src/styles/common.scss"),n(/*! ~scripts/common */"./src/scripts/common.js"),n(/*! ~icons/sprite/symbol/sprite.scss */"./src/icons/sprite/symbol/sprite.scss"),n(/*! ~components/container */"./src/components/container/index.js"),n(/*! ~components/button */"./src/components/button/index.js"),n(/*! ~containers/layoutPage */"./src/containers/layoutPage/index.js"),n(/*! ~containers/header */"./src/containers/header/index.js"),n(/*! ~containers/heroVideo */"./src/containers/heroVideo/index.js"),n(/*! ~containers/sectionCeo */"./src/containers/sectionCeo/index.js"),n(/*! ~containers/sectionCatalog */"./src/containers/sectionCatalog/index.js"),n(/*! ~containers/sectionFeedback */"./src/containers/sectionFeedback/index.js"),n(/*! ~containers/sectionPartners */"./src/containers/sectionPartners/index.js"),n(/*! ~containers/sectionSteps */"./src/containers/sectionSteps/index.js"),n(/*! ~containers/sectionPricing */"./src/containers/sectionPricing/index.js"),n(/*! ~containers/sectionWorks */"./src/containers/sectionWorks/index.js"),n(/*! ~containers/footer */"./src/containers/footer/index.js"),n(/*! ~containers/popupVideo */"./src/containers/popupVideo/index.js"),n(/*! ./style.scss */"./src/pages/video-production/style.scss")},"./src/pages/video-production/style.scss":
/*!***********************************************!*\
  !*** ./src/pages/video-production/style.scss ***!
  \***********************************************/
/*! no static exports found */function(s,e,n){}});