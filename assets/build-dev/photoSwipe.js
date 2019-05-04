(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["photoSwipe"],{

/***/ "./common/jquery-plugins/photoswipe.js":
/*!*********************************************!*\
  !*** ./common/jquery-plugins/photoswipe.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(jQuery) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* HTML
* a(href="image-large.jpg" data-size="800x600")
*	img(src="image-small.jpg")
* */
var photoSwipe = {
  init: function init() {
    return false;
  },
  open: function open() {
    return false;
  }
};

(function ($) {
  var PhotoSwipeUI_Default = function PhotoSwipeUI_Default(a, b) {
    var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v = this,
        w = !1,
        x = !0,
        y = !0,
        z = {
      barsSize: {
        top: 44,
        bottom: "auto"
      },
      closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
      timeToIdle: 4e3,
      timeToIdleOutside: 1e3,
      loadingIndicatorDelay: 1e3,
      addCaptionHTMLFn: function addCaptionHTMLFn(a, b) {
        return a.title ? (b.children[0].innerHTML = a.title, !0) : (b.children[0].innerHTML = "", !1);
      },
      closeEl: !0,
      captionEl: !0,
      fullscreenEl: !0,
      zoomEl: !0,
      shareEl: !0,
      counterEl: !0,
      arrowEl: !0,
      preloaderEl: !0,
      tapToClose: !1,
      tapToToggleControls: !0,
      clickToCloseNonZoomable: !0,
      shareButtons: [{
        id: "facebook",
        label: "Share on Facebook",
        url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
      }, {
        id: "twitter",
        label: "Tweet",
        url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
      }, {
        id: "pinterest",
        label: "Pin it",
        url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
      }, {
        id: "download",
        label: "Download image",
        url: "{{raw_image_url}}",
        download: !0
      }],
      getImageURLForShare: function getImageURLForShare() {
        return a.currItem.src || "";
      },
      getPageURLForShare: function getPageURLForShare() {
        return window.location.href;
      },
      getTextForShare: function getTextForShare() {
        return a.currItem.title || "";
      },
      indexIndicatorSep: " / "
    },
        A = function A(a) {
      if (r) return !0;
      a = a || window.event, q.timeToIdle && q.mouseUsed && !k && K();

      for (var c, d, e = a.target || a.srcElement, f = e.className, g = 0; g < S.length; g++) {
        c = S[g], c.onTap && f.indexOf("pswp__" + c.name) > -1 && (c.onTap(), d = !0);
      }

      if (d) {
        a.stopPropagation && a.stopPropagation(), r = !0;
        var h = b.features.isOldAndroid ? 600 : 30;
        s = setTimeout(function () {
          r = !1;
        }, h);
      }
    },
        B = function B() {
      return !a.likelyTouchDevice || q.mouseUsed || screen.width > 1200;
    },
        C = function C(a, c, d) {
      b[(d ? "add" : "remove") + "Class"](a, "pswp__" + c);
    },
        D = function D() {
      var a = 1 === q.getNumItemsFn();
      a !== p && (C(d, "ui--one-slide", a), p = a);
    },
        E = function E() {
      C(i, "share-modal--hidden", y);
    },
        F = function F() {
      return y = !y, y ? (b.removeClass(i, "pswp__share-modal--fade-in"), setTimeout(function () {
        y && E();
      }, 300)) : (E(), setTimeout(function () {
        y || b.addClass(i, "pswp__share-modal--fade-in");
      }, 30)), y || H(), !1;
    },
        G = function G(b) {
      b = b || window.event;
      var c = b.target || b.srcElement;
      return a.shout("shareLinkClick", b, c), c.href ? c.hasAttribute("download") ? !0 : (window.open(c.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), y || F(), !1) : !1;
    },
        H = function H() {
      for (var a, b, c, d, e, f = "", g = 0; g < q.shareButtons.length; g++) {
        a = q.shareButtons[g], c = q.getImageURLForShare(a), d = q.getPageURLForShare(a), e = q.getTextForShare(a), b = a.url.replace("{{url}}", encodeURIComponent(d)).replace("{{image_url}}", encodeURIComponent(c)).replace("{{raw_image_url}}", c).replace("{{text}}", encodeURIComponent(e)), f += '<a href="' + b + '" target="_blank" class="pswp__share--' + a.id + '"' + (a.download ? "download" : "") + ">" + a.label + "</a>", q.parseShareButtonOut && (f = q.parseShareButtonOut(a, f));
      }

      i.children[0].innerHTML = f, i.children[0].onclick = G;
    },
        I = function I(a) {
      for (var c = 0; c < q.closeElClasses.length; c++) {
        if (b.hasClass(a, "pswp__" + q.closeElClasses[c])) return !0;
      }
    },
        J = 0,
        K = function K() {
      clearTimeout(u), J = 0, k && v.setIdle(!1);
    },
        L = function L(a) {
      a = a ? a : window.event;
      var b = a.relatedTarget || a.toElement;
      b && "HTML" !== b.nodeName || (clearTimeout(u), u = setTimeout(function () {
        v.setIdle(!0);
      }, q.timeToIdleOutside));
    },
        M = function M() {
      q.fullscreenEl && (c || (c = v.getFullscreenAPI()), c ? (b.bind(document, c.eventK, v.updateFullscreen), v.updateFullscreen(), b.addClass(a.template, "pswp--supports-fs")) : b.removeClass(a.template, "pswp--supports-fs"));
    },
        N = function N() {
      q.preloaderEl && (O(!0), l("beforeChange", function () {
        clearTimeout(o), o = setTimeout(function () {
          a.currItem && a.currItem.loading ? (!a.allowProgressiveImg() || a.currItem.img && !a.currItem.img.naturalWidth) && O(!1) : O(!0);
        }, q.loadingIndicatorDelay);
      }), l("imageLoadComplete", function (b, c) {
        a.currItem === c && O(!0);
      }));
    },
        O = function O(a) {
      n !== a && (C(m, "preloader--active", !a), n = a);
    },
        P = function P(a) {
      var c = a.vGap;

      if (B()) {
        var g = q.barsSize;
        if (q.captionEl && "auto" === g.bottom) {
          if (f || (f = b.createEl("pswp__caption pswp__caption--fake"), f.appendChild(b.createEl("pswp__caption__center")), d.insertBefore(f, e), b.addClass(d, "pswp__ui--fit")), q.addCaptionHTMLFn(a, f, !0)) {
            var h = f.clientHeight;
            c.bottom = parseInt(h, 10) || 44;
          } else c.bottom = g.top;
        } else c.bottom = "auto" === g.bottom ? 0 : g.bottom;
        c.top = g.top;
      } else c.top = c.bottom = 0;
    },
        Q = function Q() {
      q.timeToIdle && l("mouseUsed", function () {
        b.bind(document, "mousemove", K), b.bind(document, "mouseout", L), t = setInterval(function () {
          J++, 2 === J && v.setIdle(!0);
        }, q.timeToIdle / 2);
      });
    },
        R = function R() {
      l("onVerticalDrag", function (a) {
        x && .95 > a ? v.hideControls() : !x && a >= .95 && v.showControls();
      });
      var a;
      l("onPinchClose", function (b) {
        x && .9 > b ? (v.hideControls(), a = !0) : a && !x && b > .9 && v.showControls();
      }), l("zoomGestureEnded", function () {
        a = !1, a && !x && v.showControls();
      });
    },
        S = [{
      name: "caption",
      option: "captionEl",
      onInit: function onInit(a) {
        e = a;
      }
    }, {
      name: "share-modal",
      option: "shareEl",
      onInit: function onInit(a) {
        i = a;
      },
      onTap: function onTap() {
        F();
      }
    }, {
      name: "button--share",
      option: "shareEl",
      onInit: function onInit(a) {
        h = a;
      },
      onTap: function onTap() {
        F();
      }
    }, {
      name: "button--zoom",
      option: "zoomEl",
      onTap: a.toggleDesktopZoom
    }, {
      name: "counter",
      option: "counterEl",
      onInit: function onInit(a) {
        g = a;
      }
    }, {
      name: "button--close",
      option: "closeEl",
      onTap: a.close
    }, {
      name: "button--arrow--left",
      option: "arrowEl",
      onTap: a.prev
    }, {
      name: "button--arrow--right",
      option: "arrowEl",
      onTap: a.next
    }, {
      name: "button--fs",
      option: "fullscreenEl",
      onTap: function onTap() {
        c.isFullscreen() ? c.exit() : c.enter();
      }
    }, {
      name: "preloader",
      option: "preloaderEl",
      onInit: function onInit(a) {
        m = a;
      }
    }],
        T = function T() {
      var a,
          c,
          e,
          f = function f(d) {
        if (d) for (var f = d.length, g = 0; f > g; g++) {
          a = d[g], c = a.className;

          for (var h = 0; h < S.length; h++) {
            e = S[h], c.indexOf("pswp__" + e.name) > -1 && (q[e.option] ? (b.removeClass(a, "pswp__element--disabled"), e.onInit && e.onInit(a)) : b.addClass(a, "pswp__element--disabled"));
          }
        }
      };

      f(d.children);
      var g = b.getChildByClass(d, "pswp__top-bar");
      g && f(g.children);
    };

    v.init = function () {
      b.extend(a.options, z, !0), q = a.options, d = b.getChildByClass(a.scrollWrap, "pswp__ui"), l = a.listen, R(), l("beforeChange", v.update), l("doubleTap", function (b) {
        var c = a.currItem.initialZoomLevel;
        a.getZoomLevel() !== c ? a.zoomTo(c, b, 333) : a.zoomTo(q.getDoubleTapZoom(!1, a.currItem), b, 333);
      }), l("preventDragEvent", function (a, b, c) {
        var d = a.target || a.srcElement;
        d && d.className && a.type.indexOf("mouse") > -1 && (d.className.indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(d.tagName)) && (c.prevent = !1);
      }), l("bindEvents", function () {
        b.bind(d, "pswpTap click", A), b.bind(a.scrollWrap, "pswpTap", v.onGlobalTap), a.likelyTouchDevice || b.bind(a.scrollWrap, "mouseover", v.onMouseOver);
      }), l("unbindEvents", function () {
        y || F(), t && clearInterval(t), b.unbind(document, "mouseout", L), b.unbind(document, "mousemove", K), b.unbind(d, "pswpTap click", A), b.unbind(a.scrollWrap, "pswpTap", v.onGlobalTap), b.unbind(a.scrollWrap, "mouseover", v.onMouseOver), c && (b.unbind(document, c.eventK, v.updateFullscreen), c.isFullscreen() && (q.hideAnimationDuration = 0, c.exit()), c = null);
      }), l("destroy", function () {
        q.captionEl && (f && d.removeChild(f), b.removeClass(e, "pswp__caption--empty")), i && (i.children[0].onclick = null), b.removeClass(d, "pswp__ui--over-close"), b.addClass(d, "pswp__ui--hidden"), v.setIdle(!1);
      }), q.showAnimationDuration || b.removeClass(d, "pswp__ui--hidden"), l("initialZoomIn", function () {
        q.showAnimationDuration && b.removeClass(d, "pswp__ui--hidden");
      }), l("initialZoomOut", function () {
        b.addClass(d, "pswp__ui--hidden");
      }), l("parseVerticalMargin", P), T(), q.shareEl && h && i && (y = !0), D(), Q(), M(), N();
    }, v.setIdle = function (a) {
      k = a, C(d, "ui--idle", a);
    }, v.update = function () {
      x && a.currItem ? (v.updateIndexIndicator(), q.captionEl && (q.addCaptionHTMLFn(a.currItem, e), C(e, "caption--empty", !a.currItem.title)), w = !0) : w = !1, y || F(), D();
    }, v.updateFullscreen = function (d) {
      d && setTimeout(function () {
        a.setScrollOffset(0, b.getScrollY());
      }, 50), b[(c.isFullscreen() ? "add" : "remove") + "Class"](a.template, "pswp--fs");
    }, v.updateIndexIndicator = function () {
      q.counterEl && (g.innerHTML = a.getCurrentIndex() + 1 + q.indexIndicatorSep + q.getNumItemsFn());
    }, v.onGlobalTap = function (c) {
      c = c || window.event;
      var d = c.target || c.srcElement;
      if (!r) if (c.detail && "mouse" === c.detail.pointerType) {
        if (I(d)) return void a.close();
        b.hasClass(d, "pswp__img") && (1 === a.getZoomLevel() && a.getZoomLevel() <= a.currItem.fitRatio ? q.clickToCloseNonZoomable && a.close() : a.toggleDesktopZoom(c.detail.releasePoint));
      } else if (q.tapToToggleControls && (x ? v.hideControls() : v.showControls()), q.tapToClose && (b.hasClass(d, "pswp__img") || I(d))) return void a.close();
    }, v.onMouseOver = function (a) {
      a = a || window.event;
      var b = a.target || a.srcElement;
      C(d, "ui--over-close", I(b));
    }, v.hideControls = function () {
      b.addClass(d, "pswp__ui--hidden"), x = !1;
    }, v.showControls = function () {
      x = !0, w || v.update(), b.removeClass(d, "pswp__ui--hidden");
    }, v.supportsFullscreen = function () {
      var a = document;
      return !!(a.exitFullscreen || a.mozCancelFullScreen || a.webkitExitFullscreen || a.msExitFullscreen);
    }, v.getFullscreenAPI = function () {
      var b,
          c = document.documentElement,
          d = "fullscreenchange";
      return c.requestFullscreen ? b = {
        enterK: "requestFullscreen",
        exitK: "exitFullscreen",
        elementK: "fullscreenElement",
        eventK: d
      } : c.mozRequestFullScreen ? b = {
        enterK: "mozRequestFullScreen",
        exitK: "mozCancelFullScreen",
        elementK: "mozFullScreenElement",
        eventK: "moz" + d
      } : c.webkitRequestFullscreen ? b = {
        enterK: "webkitRequestFullscreen",
        exitK: "webkitExitFullscreen",
        elementK: "webkitFullscreenElement",
        eventK: "webkit" + d
      } : c.msRequestFullscreen && (b = {
        enterK: "msRequestFullscreen",
        exitK: "msExitFullscreen",
        elementK: "msFullscreenElement",
        eventK: "MSFullscreenChange"
      }), b && (b.enter = function () {
        return j = q.closeOnScroll, q.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? a.template[this.enterK]() : void a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT);
      }, b.exit = function () {
        return q.closeOnScroll = j, document[this.exitK]();
      }, b.isFullscreen = function () {
        return document[this.elementK];
      }), b;
    };
  };

  var PhotoSwipe = function PhotoSwipe(a, b, c, d) {
    var e = {
      features: null,
      bind: function bind(a, b, c, d) {
        var e = (d ? "remove" : "add") + "EventListener";
        b = b.split(" ");

        for (var f = 0; f < b.length; f++) {
          b[f] && a[e](b[f], c, !1);
        }
      },
      isArray: function isArray(a) {
        return a instanceof Array;
      },
      createEl: function createEl(a, b) {
        var c = document.createElement(b || "div");
        return a && (c.className = a), c;
      },
      getScrollY: function getScrollY() {
        var a = window.pageYOffset;
        return void 0 !== a ? a : document.documentElement.scrollTop;
      },
      unbind: function unbind(a, b, c) {
        e.bind(a, b, c, !0);
      },
      removeClass: function removeClass(a, b) {
        var c = new RegExp("(\\s|^)" + b + "(\\s|$)");
        a.className = a.className.replace(c, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
      },
      addClass: function addClass(a, b) {
        e.hasClass(a, b) || (a.className += (a.className ? " " : "") + b);
      },
      hasClass: function hasClass(a, b) {
        return a.className && new RegExp("(^|\\s)" + b + "(\\s|$)").test(a.className);
      },
      getChildByClass: function getChildByClass(a, b) {
        for (var c = a.firstChild; c;) {
          if (e.hasClass(c, b)) return c;
          c = c.nextSibling;
        }
      },
      arraySearch: function arraySearch(a, b, c) {
        for (var d = a.length; d--;) {
          if (a[d][c] === b) return d;
        }

        return -1;
      },
      extend: function extend(a, b, c) {
        for (var d in b) {
          if (b.hasOwnProperty(d)) {
            if (c && a.hasOwnProperty(d)) continue;
            a[d] = b[d];
          }
        }
      },
      easing: {
        sine: {
          out: function out(a) {
            return Math.sin(a * (Math.PI / 2));
          },
          inOut: function inOut(a) {
            return -(Math.cos(Math.PI * a) - 1) / 2;
          }
        },
        cubic: {
          out: function out(a) {
            return --a * a * a + 1;
          }
        }
      },
      detectFeatures: function detectFeatures() {
        if (e.features) return e.features;
        var a = e.createEl(),
            b = a.style,
            c = "",
            d = {};

        if (d.oldIE = document.all && !document.addEventListener, d.touch = "ontouchstart" in window, window.requestAnimationFrame && (d.raf = window.requestAnimationFrame, d.caf = window.cancelAnimationFrame), d.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !d.pointerEvent) {
          var f = navigator.userAgent;

          if (/iP(hone|od)/.test(navigator.platform)) {
            var g = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
            g && g.length > 0 && (g = parseInt(g[1], 10), g >= 1 && 8 > g && (d.isOldIOSPhone = !0));
          }

          var h = f.match(/Android\s([0-9\.]*)/),
              i = h ? h[1] : 0;
          i = parseFloat(i), i >= 1 && (4.4 > i && (d.isOldAndroid = !0), d.androidVersion = i), d.isMobileOpera = /opera mini|opera mobi/i.test(f);
        }

        for (var j, k, l = ["transform", "perspective", "animationName"], m = ["", "webkit", "Moz", "ms", "O"], n = 0; 4 > n; n++) {
          c = m[n];

          for (var o = 0; 3 > o; o++) {
            j = l[o], k = c + (c ? j.charAt(0).toUpperCase() + j.slice(1) : j), !d[j] && k in b && (d[j] = k);
          }

          c && !d.raf && (c = c.toLowerCase(), d.raf = window[c + "RequestAnimationFrame"], d.raf && (d.caf = window[c + "CancelAnimationFrame"] || window[c + "CancelRequestAnimationFrame"]));
        }

        if (!d.raf) {
          var p = 0;
          d.raf = function (a) {
            var b = new Date().getTime(),
                c = Math.max(0, 16 - (b - p)),
                d = window.setTimeout(function () {
              a(b + c);
            }, c);
            return p = b + c, d;
          }, d.caf = function (a) {
            clearTimeout(a);
          };
        }

        return d.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, e.features = d, d;
      }
    };
    e.detectFeatures(), e.features.oldIE && (e.bind = function (a, b, c, d) {
      b = b.split(" ");

      for (var e, f = (d ? "detach" : "attach") + "Event", g = function g() {
        c.handleEvent.call(c);
      }, h = 0; h < b.length; h++) {
        if (e = b[h]) if ("object" == _typeof(c) && c.handleEvent) {
          if (d) {
            if (!c["oldIE" + e]) return !1;
          } else c["oldIE" + e] = g;

          a[f]("on" + e, c["oldIE" + e]);
        } else a[f]("on" + e, c);
      }
    });
    var f = this,
        g = 25,
        h = 3,
        i = {
      allowPanToNext: !0,
      spacing: .12,
      bgOpacity: 1,
      mouseUsed: !1,
      loop: !0,
      pinchToClose: !0,
      closeOnScroll: !0,
      closeOnVerticalDrag: !0,
      hideAnimationDuration: 333,
      showAnimationDuration: 333,
      showHideOpacity: !1,
      focus: !0,
      escKey: !0,
      arrowKeys: !0,
      mainScrollEndFriction: .35,
      panEndFriction: .35,
      isClickableElement: function isClickableElement(a) {
        return "A" === a.tagName;
      },
      getDoubleTapZoom: function getDoubleTapZoom(a, b) {
        return a ? 1 : b.initialZoomLevel < .7 ? 1 : 1.5;
      },
      maxSpreadZoom: 2,
      scaleMode: "fit",
      modal: !0,
      alwaysFadeIn: !1
    };
    e.extend(i, d);

    var j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v,
        w,
        x,
        y,
        z,
        A,
        B,
        C,
        D,
        E,
        F,
        G,
        H,
        I,
        J,
        K,
        L,
        M,
        N,
        O,
        P,
        Q,
        R,
        S,
        T,
        U,
        V,
        W,
        X,
        Y,
        Z,
        $,
        _,
        ab,
        bb,
        cb,
        db,
        eb,
        fb,
        gb,
        hb,
        ib,
        jb,
        kb,
        lb,
        mb = function mb() {
      return {
        x: 0,
        y: 0
      };
    },
        nb = mb(),
        ob = mb(),
        pb = mb(),
        qb = {},
        rb = 0,
        sb = mb(),
        tb = 0,
        ub = !0,
        vb = [],
        wb = {},
        xb = function xb(a, b) {
      e.extend(f, b.publicMethods), vb.push(a);
    },
        yb = function yb(a) {
      var b = $c();
      return a > b - 1 ? a - b : 0 > a ? b + a : a;
    },
        zb = {},
        Ab = function Ab(a, b) {
      return zb[a] || (zb[a] = []), zb[a].push(b);
    },
        Bb = function Bb(a) {
      var b = zb[a];

      if (b) {
        var c = Array.prototype.slice.call(arguments);
        c.shift();

        for (var d = 0; d < b.length; d++) {
          b[d].apply(f, c);
        }
      }
    },
        Cb = function Cb() {
      return new Date().getTime();
    },
        Db = function Db(a) {
      jb = a, f.bg.style.opacity = a * i.bgOpacity;
    },
        Eb = function Eb(a, b, c, d) {
      a[F] = u + b + "px, " + c + "px" + v + " scale(" + d + ")";
    },
        Fb = function Fb() {
      eb && Eb(eb, pb.x, pb.y, s);
    },
        Gb = function Gb(a) {
      a.container && Eb(a.container.style, a.initialPosition.x, a.initialPosition.y, a.initialZoomLevel);
    },
        Hb = function Hb(a, b) {
      b[F] = u + a + "px, 0px" + v;
    },
        Ib = function Ib(a, b) {
      if (!i.loop && b) {
        var c = m + (sb.x * rb - a) / sb.x,
            d = Math.round(a - rc.x);
        (0 > c && d > 0 || c >= $c() - 1 && 0 > d) && (a = rc.x + d * i.mainScrollEndFriction);
      }

      rc.x = a, Hb(a, n);
    },
        Jb = function Jb(a, b) {
      var c = sc[a] - y[a];
      return ob[a] + nb[a] + c - c * (b / t);
    },
        Kb = function Kb(a, b) {
      a.x = b.x, a.y = b.y, b.id && (a.id = b.id);
    },
        Lb = function Lb(a) {
      a.x = Math.round(a.x), a.y = Math.round(a.y);
    },
        Mb = null,
        Nb = function Nb() {
      Mb && (e.unbind(document, "mousemove", Nb), e.addClass(a, "pswp--has_mouse"), i.mouseUsed = !0, Bb("mouseUsed")), Mb = setTimeout(function () {
        Mb = null;
      }, 100);
    },
        Ob = function Ob() {
      e.bind(document, "keydown", f), O.transform && e.bind(f.scrollWrap, "click", f), i.mouseUsed || e.bind(document, "mousemove", Nb), e.bind(window, "resize scroll", f), Bb("bindEvents");
    },
        Pb = function Pb() {
      e.unbind(window, "resize", f), e.unbind(window, "scroll", r.scroll), e.unbind(document, "keydown", f), e.unbind(document, "mousemove", Nb), O.transform && e.unbind(f.scrollWrap, "click", f), V && e.unbind(window, p, f), Bb("unbindEvents");
    },
        Qb = function Qb(a, b) {
      var c = gd(f.currItem, qb, a);
      return b && (db = c), c;
    },
        Rb = function Rb(a) {
      return a || (a = f.currItem), a.initialZoomLevel;
    },
        Sb = function Sb(a) {
      return a || (a = f.currItem), a.w > 0 ? i.maxSpreadZoom : 1;
    },
        Tb = function Tb(a, b, c, d) {
      return d === f.currItem.initialZoomLevel ? (c[a] = f.currItem.initialPosition[a], !0) : (c[a] = Jb(a, d), c[a] > b.min[a] ? (c[a] = b.min[a], !0) : c[a] < b.max[a] ? (c[a] = b.max[a], !0) : !1);
    },
        Ub = function Ub() {
      if (F) {
        var b = O.perspective && !H;
        return u = "translate" + (b ? "3d(" : "("), void (v = O.perspective ? ", 0px)" : ")");
      }

      F = "left", e.addClass(a, "pswp--ie"), Hb = function Hb(a, b) {
        b.left = a + "px";
      }, Gb = function Gb(a) {
        var b = a.container.style,
            c = a.fitRatio * a.w,
            d = a.fitRatio * a.h;
        b.width = c + "px", b.height = d + "px", b.left = a.initialPosition.x + "px", b.top = a.initialPosition.y + "px";
      }, Fb = function Fb() {
        if (eb) {
          var a = eb,
              b = f.currItem,
              c = b.fitRatio * b.w,
              d = b.fitRatio * b.h;
          a.width = c + "px", a.height = d + "px", a.left = pb.x + "px", a.top = pb.y + "px";
        }
      };
    },
        Vb = function Vb(a) {
      var b = "";
      i.escKey && 27 === a.keyCode ? b = "close" : i.arrowKeys && (37 === a.keyCode ? b = "prev" : 39 === a.keyCode && (b = "next")), b && (a.ctrlKey || a.altKey || a.shiftKey || a.metaKey || (a.preventDefault ? a.preventDefault() : a.returnValue = !1, f[b]()));
    },
        Wb = function Wb(a) {
      a && (Y || X || fb || T) && (a.preventDefault(), a.stopPropagation());
    },
        Xb = function Xb() {
      f.setScrollOffset(0, e.getScrollY());
    },
        Yb = {},
        Zb = 0,
        $b = function $b(a) {
      Yb[a] && (Yb[a].raf && J(Yb[a].raf), Zb--, delete Yb[a]);
    },
        _b = function _b(a) {
      Yb[a] && $b(a), Yb[a] || (Zb++, Yb[a] = {});
    },
        ac = function ac() {
      for (var a in Yb) {
        Yb.hasOwnProperty(a) && $b(a);
      }
    },
        bc = function bc(a, b, c, d, e, f, g) {
      var h,
          i = Cb();

      _b(a);

      var j = function j() {
        if (Yb[a]) {
          if (h = Cb() - i, h >= d) return $b(a), f(c), void (g && g());
          f((c - b) * e(h / d) + b), Yb[a].raf = I(j);
        }
      };

      j();
    },
        cc = {
      shout: Bb,
      listen: Ab,
      viewportSize: qb,
      options: i,
      isMainScrollAnimating: function isMainScrollAnimating() {
        return fb;
      },
      getZoomLevel: function getZoomLevel() {
        return s;
      },
      getCurrentIndex: function getCurrentIndex() {
        return m;
      },
      isDragging: function isDragging() {
        return V;
      },
      isZooming: function isZooming() {
        return ab;
      },
      setScrollOffset: function setScrollOffset(a, b) {
        y.x = a, N = y.y = b;
      },
      applyZoomPan: function applyZoomPan(a, b, c) {
        pb.x = b, pb.y = c, s = a, Fb();
      },
      init: function init() {
        if (!j && !k) {
          var c;
          f.framework = e, f.template = a, f.bg = e.getChildByClass(a, "pswp__bg"), K = a.className, j = !0, O = e.detectFeatures(), I = O.raf, J = O.caf, F = O.transform, M = O.oldIE, f.scrollWrap = e.getChildByClass(a, "pswp__scroll-wrap"), f.container = e.getChildByClass(f.scrollWrap, "pswp__container"), n = f.container.style, f.itemHolders = z = [{
            el: f.container.children[0],
            wrap: 0,
            index: -1
          }, {
            el: f.container.children[1],
            wrap: 0,
            index: -1
          }, {
            el: f.container.children[2],
            wrap: 0,
            index: -1
          }], z[0].el.style.display = z[2].el.style.display = "none", Ub(), r = {
            resize: f.updateSize,
            scroll: Xb,
            keydown: Vb,
            click: Wb
          };
          var d = O.isOldIOSPhone || O.isOldAndroid || O.isMobileOpera;

          for (O.animationName && O.transform && !d || (i.showAnimationDuration = i.hideAnimationDuration = 0), c = 0; c < vb.length; c++) {
            f["init" + vb[c]]();
          }

          if (b) {
            var g = f.ui = new b(f, e);
            g.init();
          }

          Bb("firstUpdate"), m = m || i.index || 0, (isNaN(m) || 0 > m || m >= $c()) && (m = 0), f.currItem = Zc(m), (O.isOldIOSPhone || O.isOldAndroid) && (ub = !1), i.modal && (a.setAttribute("aria-hidden", "false"), ub ? a.style.position = "fixed" : (a.style.position = "absolute", a.style.top = e.getScrollY() + "px")), void 0 === N && (Bb("initialLayout"), N = L = e.getScrollY());
          var l = "pswp--open ";

          for (i.mainClass && (l += i.mainClass + " "), i.showHideOpacity && (l += "pswp--animate_opacity "), l += H ? "pswp--touch" : "pswp--notouch", l += O.animationName ? " pswp--css_animation" : "", l += O.svg ? " pswp--svg" : "", e.addClass(a, l), f.updateSize(), o = -1, tb = null, c = 0; h > c; c++) {
            Hb((c + o) * sb.x, z[c].el.style);
          }

          M || e.bind(f.scrollWrap, q, f), Ab("initialZoomInEnd", function () {
            f.setContent(z[0], m - 1), f.setContent(z[2], m + 1), z[0].el.style.display = z[2].el.style.display = "block", i.focus && a.focus(), Ob();
          }), f.setContent(z[1], m), f.updateCurrItem(), Bb("afterInit"), ub || (w = setInterval(function () {
            Zb || V || ab || s !== f.currItem.initialZoomLevel || f.updateSize();
          }, 1e3)), e.addClass(a, "pswp--visible");
        }
      },
      close: function close() {
        j && (j = !1, k = !0, Bb("close"), Pb(), ad(f.currItem, null, !0, f.destroy));
      },
      destroy: function destroy() {
        Bb("destroy"), Vc && clearTimeout(Vc), i.modal && (a.setAttribute("aria-hidden", "true"), a.className = K), w && clearInterval(w), e.unbind(f.scrollWrap, q, f), e.unbind(window, "scroll", f), xc(), ac(), zb = null;
      },
      panTo: function panTo(a, b, c) {
        c || (a > db.min.x ? a = db.min.x : a < db.max.x && (a = db.max.x), b > db.min.y ? b = db.min.y : b < db.max.y && (b = db.max.y)), pb.x = a, pb.y = b, Fb();
      },
      handleEvent: function handleEvent(a) {
        a = a || window.event, r[a.type] && r[a.type](a);
      },
      goTo: function goTo(a) {
        a = yb(a);
        var b = a - m;
        tb = b, m = a, f.currItem = Zc(m), rb -= b, Ib(sb.x * rb), ac(), fb = !1, f.updateCurrItem();
      },
      next: function next() {
        f.goTo(m + 1);
      },
      prev: function prev() {
        f.goTo(m - 1);
      },
      updateCurrZoomItem: function updateCurrZoomItem(a) {
        if (a && Bb("beforeChange", 0), z[1].el.children.length) {
          var b = z[1].el.children[0];
          eb = e.hasClass(b, "pswp__zoom-wrap") ? b.style : null;
        } else eb = null;

        db = f.currItem.bounds, t = s = f.currItem.initialZoomLevel, pb.x = db.center.x, pb.y = db.center.y, a && Bb("afterChange");
      },
      invalidateCurrItems: function invalidateCurrItems() {
        x = !0;

        for (var a = 0; h > a; a++) {
          z[a].item && (z[a].item.needsUpdate = !0);
        }
      },
      updateCurrItem: function updateCurrItem(a) {
        if (0 !== tb) {
          var b,
              c = Math.abs(tb);

          if (!(a && 2 > c)) {
            f.currItem = Zc(m), Bb("beforeChange", tb), c >= h && (o += tb + (tb > 0 ? -h : h), c = h);

            for (var d = 0; c > d; d++) {
              tb > 0 ? (b = z.shift(), z[h - 1] = b, o++, Hb((o + 2) * sb.x, b.el.style), f.setContent(b, m - c + d + 1 + 1)) : (b = z.pop(), z.unshift(b), o--, Hb(o * sb.x, b.el.style), f.setContent(b, m + c - d - 1 - 1));
            }

            if (eb && 1 === Math.abs(tb)) {
              var e = Zc(A);
              e.initialZoomLevel !== s && (gd(e, qb), Gb(e));
            }

            tb = 0, f.updateCurrZoomItem(), A = m, Bb("afterChange");
          }
        }
      },
      updateSize: function updateSize(b) {
        if (!ub) {
          var c = e.getScrollY();
          if (N !== c && (a.style.top = c + "px", N = c), !b && wb.x === window.innerWidth && wb.y === window.innerHeight) return;
          wb.x = window.innerWidth, wb.y = window.innerHeight, a.style.height = wb.y + "px";
        }

        if (qb.x = f.scrollWrap.clientWidth, qb.y = f.scrollWrap.clientHeight, y = {
          x: 0,
          y: N
        }, sb.x = qb.x + Math.round(qb.x * i.spacing), sb.y = qb.y, Ib(sb.x * rb), Bb("beforeResize"), void 0 !== o) {
          for (var d, g, j, k = 0; h > k; k++) {
            d = z[k], Hb((k + o) * sb.x, d.el.style), j = m + k - 1, i.loop && $c() > 2 && (j = yb(j)), g = Zc(j), g && (x || g.needsUpdate || !g.bounds) ? (f.cleanSlide(g), f.setContent(d, j), 1 === k && (f.currItem = g, f.updateCurrZoomItem(!0)), g.needsUpdate = !1) : -1 === d.index && j >= 0 && f.setContent(d, j), g && g.container && (gd(g, qb), Gb(g));
          }

          x = !1;
        }

        t = s = f.currItem.initialZoomLevel, db = f.currItem.bounds, db && (pb.x = db.center.x, pb.y = db.center.y, Fb()), Bb("resize");
      },
      zoomTo: function zoomTo(a, b, c, d, f) {
        b && (t = s, sc.x = Math.abs(b.x) - pb.x, sc.y = Math.abs(b.y) - pb.y, Kb(ob, pb));
        var g = Qb(a, !1),
            h = {};
        Tb("x", g, h, a), Tb("y", g, h, a);
        var i = s,
            j = {
          x: pb.x,
          y: pb.y
        };
        Lb(h);

        var k = function k(b) {
          1 === b ? (s = a, pb.x = h.x, pb.y = h.y) : (s = (a - i) * b + i, pb.x = (h.x - j.x) * b + j.x, pb.y = (h.y - j.y) * b + j.y), f && f(b), Fb();
        };

        c ? bc("customZoomTo", 0, 1, c, d || e.easing.sine.inOut, k) : k(1);
      }
    },
        dc = 30,
        ec = 10,
        fc = {},
        gc = {},
        hc = {},
        ic = {},
        jc = {},
        kc = [],
        lc = {},
        mc = [],
        nc = {},
        oc = 0,
        pc = mb(),
        qc = 0,
        rc = mb(),
        sc = mb(),
        tc = mb(),
        uc = function uc(a, b) {
      return a.x === b.x && a.y === b.y;
    },
        vc = function vc(a, b) {
      return Math.abs(a.x - b.x) < g && Math.abs(a.y - b.y) < g;
    },
        wc = function wc(a, b) {
      return nc.x = Math.abs(a.x - b.x), nc.y = Math.abs(a.y - b.y), Math.sqrt(nc.x * nc.x + nc.y * nc.y);
    },
        xc = function xc() {
      Z && (J(Z), Z = null);
    },
        yc = function yc() {
      V && (Z = I(yc), Oc());
    },
        zc = function zc() {
      return !("fit" === i.scaleMode && s === f.currItem.initialZoomLevel);
    },
        Ac = function Ac(a, b) {
      return a ? a.className && a.className.indexOf("pswp__scroll-wrap") > -1 ? !1 : b(a) ? a : Ac(a.parentNode, b) : !1;
    },
        Bc = {},
        Cc = function Cc(a, b) {
      return Bc.prevent = !Ac(a.target, i.isClickableElement), Bb("preventDragEvent", a, b, Bc), Bc.prevent;
    },
        Dc = function Dc(a, b) {
      return b.x = a.pageX, b.y = a.pageY, b.id = a.identifier, b;
    },
        Ec = function Ec(a, b, c) {
      c.x = .5 * (a.x + b.x), c.y = .5 * (a.y + b.y);
    },
        Fc = function Fc(a, b, c) {
      if (a - Q > 50) {
        var d = mc.length > 2 ? mc.shift() : {};
        d.x = b, d.y = c, mc.push(d), Q = a;
      }
    },
        Gc = function Gc() {
      var a = pb.y - f.currItem.initialPosition.y;
      return 1 - Math.abs(a / (qb.y / 2));
    },
        Hc = {},
        Ic = {},
        Jc = [],
        Kc = function Kc(a) {
      for (; Jc.length > 0;) {
        Jc.pop();
      }

      return G ? (lb = 0, kc.forEach(function (a) {
        0 === lb ? Jc[0] = a : 1 === lb && (Jc[1] = a), lb++;
      })) : a.type.indexOf("touch") > -1 ? a.touches && a.touches.length > 0 && (Jc[0] = Dc(a.touches[0], Hc), a.touches.length > 1 && (Jc[1] = Dc(a.touches[1], Ic))) : (Hc.x = a.pageX, Hc.y = a.pageY, Hc.id = "", Jc[0] = Hc), Jc;
    },
        Lc = function Lc(a, b) {
      var c,
          d,
          e,
          g,
          h = 0,
          j = pb[a] + b[a],
          k = b[a] > 0,
          l = rc.x + b.x,
          m = rc.x - lc.x;
      return c = j > db.min[a] || j < db.max[a] ? i.panEndFriction : 1, j = pb[a] + b[a] * c, !i.allowPanToNext && s !== f.currItem.initialZoomLevel || (eb ? "h" !== gb || "x" !== a || X || (k ? (j > db.min[a] && (c = i.panEndFriction, h = db.min[a] - j, d = db.min[a] - ob[a]), (0 >= d || 0 > m) && $c() > 1 ? (g = l, 0 > m && l > lc.x && (g = lc.x)) : db.min.x !== db.max.x && (e = j)) : (j < db.max[a] && (c = i.panEndFriction, h = j - db.max[a], d = ob[a] - db.max[a]), (0 >= d || m > 0) && $c() > 1 ? (g = l, m > 0 && l < lc.x && (g = lc.x)) : db.min.x !== db.max.x && (e = j))) : g = l, "x" !== a) ? void (fb || $ || s > f.currItem.fitRatio && (pb[a] += b[a] * c)) : (void 0 !== g && (Ib(g, !0), $ = g === lc.x ? !1 : !0), db.min.x !== db.max.x && (void 0 !== e ? pb.x = e : $ || (pb.x += b.x * c)), void 0 !== g);
    },
        Mc = function Mc(a) {
      if (!("mousedown" === a.type && a.button > 0)) {
        if (Yc) return void a.preventDefault();

        if (!U || "mousedown" !== a.type) {
          if (Cc(a, !0) && a.preventDefault(), Bb("pointerDown"), G) {
            var b = e.arraySearch(kc, a.pointerId, "id");
            0 > b && (b = kc.length), kc[b] = {
              x: a.pageX,
              y: a.pageY,
              id: a.pointerId
            };
          }

          var c = Kc(a),
              d = c.length;
          _ = null, ac(), V && 1 !== d || (V = hb = !0, e.bind(window, p, f), S = kb = ib = T = $ = Y = W = X = !1, gb = null, Bb("firstTouchStart", c), Kb(ob, pb), nb.x = nb.y = 0, Kb(ic, c[0]), Kb(jc, ic), lc.x = sb.x * rb, mc = [{
            x: ic.x,
            y: ic.y
          }], Q = P = Cb(), Qb(s, !0), xc(), yc()), !ab && d > 1 && !fb && !$ && (t = s, X = !1, ab = W = !0, nb.y = nb.x = 0, Kb(ob, pb), Kb(fc, c[0]), Kb(gc, c[1]), Ec(fc, gc, tc), sc.x = Math.abs(tc.x) - pb.x, sc.y = Math.abs(tc.y) - pb.y, bb = cb = wc(fc, gc));
        }
      }
    },
        Nc = function Nc(a) {
      if (a.preventDefault(), G) {
        var b = e.arraySearch(kc, a.pointerId, "id");

        if (b > -1) {
          var c = kc[b];
          c.x = a.pageX, c.y = a.pageY;
        }
      }

      if (V) {
        var d = Kc(a);
        if (gb || Y || ab) _ = d;else {
          var f = Math.abs(d[0].x - ic.x) - Math.abs(d[0].y - ic.y);
          Math.abs(f) >= ec && (gb = f > 0 ? "h" : "v", _ = d);
        }
      }
    },
        Oc = function Oc() {
      if (_) {
        var a = _.length;
        if (0 !== a) if (Kb(fc, _[0]), hc.x = fc.x - ic.x, hc.y = fc.y - ic.y, ab && a > 1) {
          if (ic.x = fc.x, ic.y = fc.y, !hc.x && !hc.y && uc(_[1], gc)) return;
          Kb(gc, _[1]), X || (X = !0, Bb("zoomGestureStarted"));
          var b = wc(fc, gc),
              c = Tc(b);
          c > f.currItem.initialZoomLevel + f.currItem.initialZoomLevel / 15 && (kb = !0);
          var d = 1,
              e = Rb(),
              g = Sb();
          if (e > c) {
            if (i.pinchToClose && !kb && t <= f.currItem.initialZoomLevel) {
              var h = e - c,
                  j = 1 - h / (e / 1.2);
              Db(j), Bb("onPinchClose", j), ib = !0;
            } else d = (e - c) / e, d > 1 && (d = 1), c = e - d * (e / 3);
          } else c > g && (d = (c - g) / (6 * e), d > 1 && (d = 1), c = g + d * e);
          0 > d && (d = 0), bb = b, Ec(fc, gc, pc), nb.x += pc.x - tc.x, nb.y += pc.y - tc.y, Kb(tc, pc), pb.x = Jb("x", c), pb.y = Jb("y", c), S = c > s, s = c, Fb();
        } else {
          if (!gb) return;
          if (hb && (hb = !1, Math.abs(hc.x) >= ec && (hc.x -= _[0].x - jc.x), Math.abs(hc.y) >= ec && (hc.y -= _[0].y - jc.y)), ic.x = fc.x, ic.y = fc.y, 0 === hc.x && 0 === hc.y) return;

          if ("v" === gb && i.closeOnVerticalDrag && !zc()) {
            nb.y += hc.y, pb.y += hc.y;
            var k = Gc();
            return T = !0, Bb("onVerticalDrag", k), Db(k), void Fb();
          }

          Fc(Cb(), fc.x, fc.y), Y = !0, db = f.currItem.bounds;
          var l = Lc("x", hc);
          l || (Lc("y", hc), Lb(pb), Fb());
        }
      }
    },
        Pc = function Pc(a) {
      if (O.isOldAndroid) {
        if (U && "mouseup" === a.type) return;
        a.type.indexOf("touch") > -1 && (clearTimeout(U), U = setTimeout(function () {
          U = 0;
        }, 600));
      }

      Bb("pointerUp"), Cc(a, !1) && a.preventDefault();
      var b;

      if (G) {
        var c = e.arraySearch(kc, a.pointerId, "id");
        if (c > -1) if (b = kc.splice(c, 1)[0], navigator.pointerEnabled) b.type = a.pointerType || "mouse";else {
          var d = {
            4: "mouse",
            2: "touch",
            3: "pen"
          };
          b.type = d[a.pointerType], b.type || (b.type = a.pointerType || "mouse");
        }
      }

      var g,
          h = Kc(a),
          i = h.length;
      if ("mouseup" === a.type && (i = 0), 2 === i) return _ = null, !0;
      1 === i && Kb(jc, h[0]), 0 !== i || gb || fb || (b || ("mouseup" === a.type ? b = {
        x: a.pageX,
        y: a.pageY,
        type: "mouse"
      } : a.changedTouches && a.changedTouches[0] && (b = {
        x: a.changedTouches[0].pageX,
        y: a.changedTouches[0].pageY,
        type: "touch"
      })), Bb("touchRelease", a, b));
      var j = -1;
      if (0 === i && (V = !1, e.unbind(window, p, f), xc(), ab ? j = 0 : -1 !== qc && (j = Cb() - qc)), qc = 1 === i ? Cb() : -1, g = -1 !== j && 150 > j ? "zoom" : "swipe", ab && 2 > i && (ab = !1, 1 === i && (g = "zoomPointerUp"), Bb("zoomGestureEnded")), _ = null, Y || X || fb || T) if (ac(), R || (R = Qc()), R.calculateSwipeSpeed("x"), T) {
        var k = Gc();
        if (.6 > k) f.close();else {
          var l = pb.y,
              m = jb;
          bc("verticalDrag", 0, 1, 300, e.easing.cubic.out, function (a) {
            pb.y = (f.currItem.initialPosition.y - l) * a + l, Db((1 - m) * a + m), Fb();
          }), Bb("onVerticalDrag", 1);
        }
      } else {
        if (($ || fb) && 0 === i) {
          var n = Sc(g, R);
          if (n) return;
          g = "zoomPointerUp";
        }

        if (!fb) return "swipe" !== g ? void Uc() : void (!$ && s > f.currItem.fitRatio && Rc(R));
      }
    },
        Qc = function Qc() {
      var a,
          b,
          c = {
        lastFlickOffset: {},
        lastFlickDist: {},
        lastFlickSpeed: {},
        slowDownRatio: {},
        slowDownRatioReverse: {},
        speedDecelerationRatio: {},
        speedDecelerationRatioAbs: {},
        distanceOffset: {},
        backAnimDestination: {},
        backAnimStarted: {},
        calculateSwipeSpeed: function calculateSwipeSpeed(d) {
          mc.length > 1 ? (a = Cb() - Q + 50, b = mc[mc.length - 2][d]) : (a = Cb() - P, b = jc[d]), c.lastFlickOffset[d] = ic[d] - b, c.lastFlickDist[d] = Math.abs(c.lastFlickOffset[d]), c.lastFlickSpeed[d] = c.lastFlickDist[d] > 20 ? c.lastFlickOffset[d] / a : 0, Math.abs(c.lastFlickSpeed[d]) < .1 && (c.lastFlickSpeed[d] = 0), c.slowDownRatio[d] = .95, c.slowDownRatioReverse[d] = 1 - c.slowDownRatio[d], c.speedDecelerationRatio[d] = 1;
        },
        calculateOverBoundsAnimOffset: function calculateOverBoundsAnimOffset(a, b) {
          c.backAnimStarted[a] || (pb[a] > db.min[a] ? c.backAnimDestination[a] = db.min[a] : pb[a] < db.max[a] && (c.backAnimDestination[a] = db.max[a]), void 0 !== c.backAnimDestination[a] && (c.slowDownRatio[a] = .7, c.slowDownRatioReverse[a] = 1 - c.slowDownRatio[a], c.speedDecelerationRatioAbs[a] < .05 && (c.lastFlickSpeed[a] = 0, c.backAnimStarted[a] = !0, bc("bounceZoomPan" + a, pb[a], c.backAnimDestination[a], b || 300, e.easing.sine.out, function (b) {
            pb[a] = b, Fb();
          }))));
        },
        calculateAnimOffset: function calculateAnimOffset(a) {
          c.backAnimStarted[a] || (c.speedDecelerationRatio[a] = c.speedDecelerationRatio[a] * (c.slowDownRatio[a] + c.slowDownRatioReverse[a] - c.slowDownRatioReverse[a] * c.timeDiff / 10), c.speedDecelerationRatioAbs[a] = Math.abs(c.lastFlickSpeed[a] * c.speedDecelerationRatio[a]), c.distanceOffset[a] = c.lastFlickSpeed[a] * c.speedDecelerationRatio[a] * c.timeDiff, pb[a] += c.distanceOffset[a]);
        },
        panAnimLoop: function panAnimLoop() {
          return Yb.zoomPan && (Yb.zoomPan.raf = I(c.panAnimLoop), c.now = Cb(), c.timeDiff = c.now - c.lastNow, c.lastNow = c.now, c.calculateAnimOffset("x"), c.calculateAnimOffset("y"), Fb(), c.calculateOverBoundsAnimOffset("x"), c.calculateOverBoundsAnimOffset("y"), c.speedDecelerationRatioAbs.x < .05 && c.speedDecelerationRatioAbs.y < .05) ? (pb.x = Math.round(pb.x), pb.y = Math.round(pb.y), Fb(), void $b("zoomPan")) : void 0;
        }
      };
      return c;
    },
        Rc = function Rc(a) {
      return a.calculateSwipeSpeed("y"), db = f.currItem.bounds, a.backAnimDestination = {}, a.backAnimStarted = {}, Math.abs(a.lastFlickSpeed.x) <= .05 && Math.abs(a.lastFlickSpeed.y) <= .05 ? (a.speedDecelerationRatioAbs.x = a.speedDecelerationRatioAbs.y = 0, a.calculateOverBoundsAnimOffset("x"), a.calculateOverBoundsAnimOffset("y"), !0) : (_b("zoomPan"), a.lastNow = Cb(), void a.panAnimLoop());
    },
        Sc = function Sc(a, b) {
      var c;
      fb || (oc = m);
      var d;

      if ("swipe" === a) {
        var g = ic.x - jc.x,
            h = b.lastFlickDist.x < 10;
        g > dc && (h || b.lastFlickOffset.x > 20) ? d = -1 : -dc > g && (h || b.lastFlickOffset.x < -20) && (d = 1);
      }

      var j;
      d && (m += d, 0 > m ? (m = i.loop ? $c() - 1 : 0, j = !0) : m >= $c() && (m = i.loop ? 0 : $c() - 1, j = !0), (!j || i.loop) && (tb += d, rb -= d, c = !0));
      var k,
          l = sb.x * rb,
          n = Math.abs(l - rc.x);
      return c || l > rc.x == b.lastFlickSpeed.x > 0 ? (k = Math.abs(b.lastFlickSpeed.x) > 0 ? n / Math.abs(b.lastFlickSpeed.x) : 333, k = Math.min(k, 400), k = Math.max(k, 250)) : k = 333, oc === m && (c = !1), fb = !0, Bb("mainScrollAnimStart"), bc("mainScroll", rc.x, l, k, e.easing.cubic.out, Ib, function () {
        ac(), fb = !1, oc = -1, (c || oc !== m) && f.updateCurrItem(), Bb("mainScrollAnimComplete");
      }), c && f.updateCurrItem(!0), c;
    },
        Tc = function Tc(a) {
      return 1 / cb * a * t;
    },
        Uc = function Uc() {
      var a = s,
          b = Rb(),
          c = Sb();
      b > s ? a = b : s > c && (a = c);
      var d,
          g = 1,
          h = jb;
      return ib && !S && !kb && b > s ? (f.close(), !0) : (ib && (d = function d(a) {
        Db((g - h) * a + h);
      }), f.zoomTo(a, 0, 300, e.easing.cubic.out, d), !0);
    };

    xb("Gestures", {
      publicMethods: {
        initGestures: function initGestures() {
          var a = function a(_a, b, c, d, e) {
            B = _a + b, C = _a + c, D = _a + d, E = e ? _a + e : "";
          };

          G = O.pointerEvent, G && O.touch && (O.touch = !1), G ? navigator.pointerEnabled ? a("pointer", "down", "move", "up", "cancel") : a("MSPointer", "Down", "Move", "Up", "Cancel") : O.touch ? (a("touch", "start", "move", "end", "cancel"), H = !0) : a("mouse", "down", "move", "up"), p = C + " " + D + " " + E, q = B, G && !H && (H = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), f.likelyTouchDevice = H, r[B] = Mc, r[C] = Nc, r[D] = Pc, E && (r[E] = r[D]), O.touch && (q += " mousedown", p += " mousemove mouseup", r.mousedown = r[B], r.mousemove = r[C], r.mouseup = r[D]), H || (i.allowPanToNext = !1);
        }
      }
    });

    var Vc,
        Wc,
        Xc,
        Yc,
        Zc,
        $c,
        _c,
        ad = function ad(b, c, d, g) {
      Vc && clearTimeout(Vc), Yc = !0, Xc = !0;
      var h;
      b.initialLayout ? (h = b.initialLayout, b.initialLayout = null) : h = i.getThumbBoundsFn && i.getThumbBoundsFn(m);

      var j = d ? i.hideAnimationDuration : i.showAnimationDuration,
          k = function k() {
        $b("initialZoom"), d ? (f.template.removeAttribute("style"), f.bg.removeAttribute("style")) : (Db(1), c && (c.style.display = "block"), e.addClass(a, "pswp--animated-in"), Bb("initialZoom" + (d ? "OutEnd" : "InEnd"))), g && g(), Yc = !1;
      };

      if (!j || !h || void 0 === h.x) {
        var n = function n() {
          Bb("initialZoom" + (d ? "Out" : "In")), s = b.initialZoomLevel, Kb(pb, b.initialPosition), Fb(), a.style.opacity = d ? 0 : 1, Db(1), k();
        };

        return void n();
      }

      var o = function o() {
        var c = l,
            g = !f.currItem.src || f.currItem.loadError || i.showHideOpacity;
        b.miniImg && (b.miniImg.style.webkitBackfaceVisibility = "hidden"), d || (s = h.w / b.w, pb.x = h.x, pb.y = h.y - L, f[g ? "template" : "bg"].style.opacity = .001, Fb()), _b("initialZoom"), d && !c && e.removeClass(a, "pswp--animated-in"), g && (d ? e[(c ? "remove" : "add") + "Class"](a, "pswp--animate_opacity") : setTimeout(function () {
          e.addClass(a, "pswp--animate_opacity");
        }, 30)), Vc = setTimeout(function () {
          if (Bb("initialZoom" + (d ? "Out" : "In")), d) {
            var f = h.w / b.w,
                i = {
              x: pb.x,
              y: pb.y
            },
                l = s,
                m = jb,
                n = function n(b) {
              1 === b ? (s = f, pb.x = h.x, pb.y = h.y - N) : (s = (f - l) * b + l, pb.x = (h.x - i.x) * b + i.x, pb.y = (h.y - N - i.y) * b + i.y), Fb(), g ? a.style.opacity = 1 - b : Db(m - b * m);
            };

            c ? bc("initialZoom", 0, 1, j, e.easing.cubic.out, n, k) : (n(1), Vc = setTimeout(k, j + 20));
          } else s = b.initialZoomLevel, Kb(pb, b.initialPosition), Fb(), Db(1), g ? a.style.opacity = 1 : Db(1), Vc = setTimeout(k, j + 20);
        }, d ? 25 : 90);
      };

      o();
    },
        bd = {},
        cd = [],
        dd = {
      index: 0,
      errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
      forceProgressiveLoading: !1,
      preload: [1, 1],
      getNumItemsFn: function getNumItemsFn() {
        return Wc.length;
      }
    },
        ed = function ed() {
      return {
        center: {
          x: 0,
          y: 0
        },
        max: {
          x: 0,
          y: 0
        },
        min: {
          x: 0,
          y: 0
        }
      };
    },
        fd = function fd(a, b, c) {
      var d = a.bounds;
      d.center.x = Math.round((bd.x - b) / 2), d.center.y = Math.round((bd.y - c) / 2) + a.vGap.top, d.max.x = b > bd.x ? Math.round(bd.x - b) : d.center.x, d.max.y = c > bd.y ? Math.round(bd.y - c) + a.vGap.top : d.center.y, d.min.x = b > bd.x ? 0 : d.center.x, d.min.y = c > bd.y ? a.vGap.top : d.center.y;
    },
        gd = function gd(a, b, c) {
      if (a.src && !a.loadError) {
        var d = !c;

        if (d && (a.vGap || (a.vGap = {
          top: 0,
          bottom: 0
        }), Bb("parseVerticalMargin", a)), bd.x = b.x, bd.y = b.y - a.vGap.top - a.vGap.bottom, d) {
          var e = bd.x / a.w,
              f = bd.y / a.h;
          a.fitRatio = f > e ? e : f;
          var g = i.scaleMode;
          "orig" === g ? c = 1 : "fit" === g && (c = a.fitRatio), c > 1 && (c = 1), a.initialZoomLevel = c, a.bounds || (a.bounds = ed());
        }

        if (!c) return;
        return fd(a, a.w * c, a.h * c), d && c === a.initialZoomLevel && (a.initialPosition = a.bounds.center), a.bounds;
      }

      return a.w = a.h = 0, a.initialZoomLevel = a.fitRatio = 1, a.bounds = ed(), a.initialPosition = a.bounds.center, a.bounds;
    },
        hd = function hd(a, b, c, d, e, g) {
      if (!b.loadError) {
        var h,
            j = f.isDragging() && !f.isZooming(),
            k = a === m || f.isMainScrollAnimating() || j;
        !e && (H || i.alwaysFadeIn) && k && (h = !0), d && (h && (d.style.opacity = 0), b.imageAppended = !0, c.appendChild(d), h && setTimeout(function () {
          d.style.opacity = 1, g && setTimeout(function () {
            b && b.loaded && b.placeholder && (b.placeholder.style.display = "none", b.placeholder = null);
          }, 500);
        }, 50));
      }
    },
        id = function id(a) {
      a.loading = !0, a.loaded = !1;

      var b = a.img = e.createEl("pswp__img", "img"),
          c = function c() {
        a.loading = !1, a.loaded = !0, a.loadComplete ? a.loadComplete(a) : a.img = null, b.onload = b.onerror = null, b = null;
      };

      return b.onload = c, b.onerror = function () {
        a.loadError = !0, c();
      }, b.src = a.src, b;
    },
        jd = function jd(a, b) {
      return a.src && a.loadError && a.container ? (b && (a.container.innerHTML = ""), a.container.innerHTML = i.errorMsg.replace("%url%", a.src), !0) : void 0;
    },
        kd = function kd() {
      if (cd.length) {
        for (var a, b = 0; b < cd.length; b++) {
          a = cd[b], a.holder.index === a.index && hd(a.index, a.item, a.baseDiv, a.img);
        }

        cd = [];
      }
    };

    xb("Controller", {
      publicMethods: {
        lazyLoadItem: function lazyLoadItem(a) {
          a = yb(a);
          var b = Zc(a);
          b && b.src && !b.loaded && !b.loading && (Bb("gettingData", a, b), id(b));
        },
        initController: function initController() {
          e.extend(i, dd, !0), f.items = Wc = c, Zc = f.getItemAt, $c = i.getNumItemsFn, _c = i.loop, $c() < 3 && (i.loop = !1), Ab("beforeChange", function (a) {
            var b,
                c = i.preload,
                d = null === a ? !0 : a > 0,
                e = Math.min(c[0], $c()),
                g = Math.min(c[1], $c());

            for (b = 1; (d ? g : e) >= b; b++) {
              f.lazyLoadItem(m + b);
            }

            for (b = 1; (d ? e : g) >= b; b++) {
              f.lazyLoadItem(m - b);
            }
          }), Ab("initialLayout", function () {
            f.currItem.initialLayout = i.getThumbBoundsFn && i.getThumbBoundsFn(m);
          }), Ab("mainScrollAnimComplete", kd), Ab("initialZoomInEnd", kd), Ab("destroy", function () {
            for (var a, b = 0; b < Wc.length; b++) {
              a = Wc[b], a.container && (a.container = null), a.placeholder && (a.placeholder = null), a.img && (a.img = null), a.preloader && (a.preloader = null), a.loadError && (a.loaded = a.loadError = !1);
            }

            cd = null;
          });
        },
        getItemAt: function getItemAt(a) {
          return a >= 0 && void 0 !== Wc[a] ? Wc[a] : !1;
        },
        allowProgressiveImg: function allowProgressiveImg() {
          return i.forceProgressiveLoading || !H || i.mouseUsed || screen.width > 1200;
        },
        setContent: function setContent(a, b) {
          i.loop && (b = yb(b));
          var c = f.getItemAt(a.index);
          c && (c.container = null);
          var d,
              g = f.getItemAt(b);
          if (!g) return void (a.el.innerHTML = "");
          Bb("gettingData", b, g), a.index = b, a.item = g;
          var h = g.container = e.createEl("pswp__zoom-wrap");
          if (!g.src && g.html && (g.html.tagName ? h.appendChild(g.html) : h.innerHTML = g.html), jd(g), !g.src || g.loadError || g.loaded) g.src && !g.loadError && (d = e.createEl("pswp__img", "img"), d.style.webkitBackfaceVisibility = "hidden", d.style.opacity = 1, d.src = g.src, hd(b, g, h, d, !0));else {
            if (g.loadComplete = function (c) {
              if (j) {
                if (c.img && (c.img.style.webkitBackfaceVisibility = "hidden"), a && a.index === b) {
                  if (jd(c, !0)) return c.loadComplete = c.img = null, gd(c, qb), Gb(c), void (a.index === m && f.updateCurrZoomItem());
                  c.imageAppended ? !Yc && c.placeholder && (c.placeholder.style.display = "none", c.placeholder = null) : O.transform && (fb || Yc) ? cd.push({
                    item: c,
                    baseDiv: h,
                    img: c.img,
                    index: b,
                    holder: a
                  }) : hd(b, c, h, c.img, fb || Yc);
                }

                c.loadComplete = null, c.img = null, Bb("imageLoadComplete", b, c);
              }
            }, e.features.transform) {
              var k = "pswp__img pswp__img--placeholder";
              k += g.msrc ? "" : " pswp__img--placeholder--blank";
              var l = e.createEl(k, g.msrc ? "img" : "");
              g.msrc && (l.src = g.msrc), l.style.width = g.w + "px", l.style.height = g.h + "px", h.appendChild(l), g.placeholder = l;
            }

            g.loading || id(g), f.allowProgressiveImg() && (!Xc && O.transform ? cd.push({
              item: g,
              baseDiv: h,
              img: g.img,
              index: b,
              holder: a
            }) : hd(b, g, h, g.img, !0, !0));
          }
          gd(g, qb), Xc || b !== m ? Gb(g) : (eb = h.style, ad(g, d || g.img)), a.el.innerHTML = "", a.el.appendChild(h);
        },
        cleanSlide: function cleanSlide(a) {
          a.img && (a.img.onload = a.img.onerror = null), a.loaded = a.loading = a.img = a.imageAppended = !1;
        }
      }
    });

    var ld,
        md = {},
        nd = function nd(a, b, c) {
      var d = document.createEvent("CustomEvent"),
          e = {
        origEvent: a,
        target: a.target,
        releasePoint: b,
        pointerType: c || "touch"
      };
      d.initCustomEvent("pswpTap", !0, !0, e), a.target.dispatchEvent(d);
    };

    xb("Tap", {
      publicMethods: {
        initTap: function initTap() {
          Ab("firstTouchStart", f.onTapStart), Ab("touchRelease", f.onTapRelease), Ab("destroy", function () {
            md = {}, ld = null;
          });
        },
        onTapStart: function onTapStart(a) {
          a.length > 1 && (clearTimeout(ld), ld = null);
        },
        onTapRelease: function onTapRelease(a, b) {
          if (b && !Y && !W && !Zb) {
            var c = b;
            if (ld && (clearTimeout(ld), ld = null, vc(c, md))) return void Bb("doubleTap", c);
            if ("mouse" === b.type) return void nd(a, b, "mouse");
            var d = a.target.tagName.toUpperCase();
            if ("BUTTON" === d || e.hasClass(a.target, "pswp__single-tap")) return void nd(a, b);
            Kb(md, c), ld = setTimeout(function () {
              nd(a, b), ld = null;
            }, 300);
          }
        }
      }
    });
    var od;
    xb("DesktopZoom", {
      publicMethods: {
        initDesktopZoom: function initDesktopZoom() {
          M || (H ? Ab("mouseUsed", function () {
            f.setupDesktopZoom();
          }) : f.setupDesktopZoom(!0));
        },
        setupDesktopZoom: function setupDesktopZoom(b) {
          od = {};
          var c = "wheel mousewheel DOMMouseScroll";
          Ab("bindEvents", function () {
            e.bind(a, c, f.handleMouseWheel);
          }), Ab("unbindEvents", function () {
            od && e.unbind(a, c, f.handleMouseWheel);
          }), f.mouseZoomedIn = !1;

          var d,
              g = function g() {
            f.mouseZoomedIn && (e.removeClass(a, "pswp--zoomed-in"), f.mouseZoomedIn = !1), 1 > s ? e.addClass(a, "pswp--zoom-allowed") : e.removeClass(a, "pswp--zoom-allowed"), h();
          },
              h = function h() {
            d && (e.removeClass(a, "pswp--dragging"), d = !1);
          };

          Ab("resize", g), Ab("afterChange", g), Ab("pointerDown", function () {
            f.mouseZoomedIn && (d = !0, e.addClass(a, "pswp--dragging"));
          }), Ab("pointerUp", h), b || g();
        },
        handleMouseWheel: function handleMouseWheel(a) {
          if (s <= f.currItem.fitRatio) return i.closeOnScroll ? F && Math.abs(a.deltaY) > 2 && (l = !0, f.close()) : a.preventDefault(), !0;
          if (a.preventDefault(), a.stopPropagation(), od.x = 0, "deltaX" in a) od.x = a.deltaX, od.y = a.deltaY;else if ("wheelDelta" in a) a.wheelDeltaX && (od.x = -.16 * a.wheelDeltaX), od.y = a.wheelDeltaY ? -.16 * a.wheelDeltaY : -.16 * a.wheelDelta;else {
            if (!("detail" in a)) return;
            od.y = a.detail;
          }
          Qb(s, !0), f.panTo(pb.x - od.x, pb.y - od.y);
        },
        toggleDesktopZoom: function toggleDesktopZoom(b) {
          b = b || {
            x: qb.x / 2,
            y: qb.y / 2 + N
          };
          var c = i.getDoubleTapZoom(!0, f.currItem),
              d = s === c;
          f.mouseZoomedIn = !d, f.zoomTo(d ? f.currItem.initialZoomLevel : c, b, 333), e[(d ? "remove" : "add") + "Class"](a, "pswp--zoomed-in");
        }
      }
    });

    var pd,
        qd,
        rd,
        sd,
        td,
        ud,
        vd,
        wd,
        xd,
        yd,
        zd,
        Ad,
        Bd = {
      history: !0,
      galleryUID: 1
    },
        Cd = function Cd() {
      return zd.hash.substring(1);
    },
        Dd = function Dd() {
      pd && clearTimeout(pd), rd && clearTimeout(rd);
    },
        Ed = function Ed() {
      var a = Cd(),
          b = {};
      if (a.length < 5) return b;

      for (var c = a.split("&"), d = 0; d < c.length; d++) {
        if (c[d]) {
          var e = c[d].split("=");
          e.length < 2 || (b[e[0]] = e[1]);
        }
      }

      return b.pid = parseInt(b.pid, 10) - 1, b.pid < 0 && (b.pid = 0), b;
    },
        Fd = function Fd() {
      if (rd && clearTimeout(rd), Zb || V) return void (rd = setTimeout(Fd, 500));
      sd ? clearTimeout(qd) : sd = !0;
      var a = vd + "&gid=" + i.galleryUID + "&pid=" + (m + 1);
      wd || -1 === zd.hash.indexOf(a) && (yd = !0);
      var b = zd.href.split("#")[0] + "#" + a;
      Ad ? "#" + a !== window.location.hash && history[wd ? "replaceState" : "pushState"]("", document.title, b) : wd ? zd.replace(b) : zd.hash = a, wd = !0, qd = setTimeout(function () {
        sd = !1;
      }, 60);
    };

    xb("History", {
      publicMethods: {
        initHistory: function initHistory() {
          if (e.extend(i, Bd, !0), i.history) {
            zd = window.location, yd = !1, xd = !1, wd = !1, vd = Cd(), Ad = "pushState" in history, vd.indexOf("gid=") > -1 && (vd = vd.split("&gid=")[0], vd = vd.split("?gid=")[0]), Ab("afterChange", f.updateURL), Ab("unbindEvents", function () {
              e.unbind(window, "hashchange", f.onHashChange);
            });

            var a = function a() {
              ud = !0, xd || (yd ? history.back() : vd ? zd.hash = vd : Ad ? history.pushState("", document.title, zd.pathname + zd.search) : zd.hash = ""), Dd();
            };

            Ab("unbindEvents", function () {
              l && a();
            }), Ab("destroy", function () {
              ud || a();
            }), Ab("firstUpdate", function () {
              m = Ed().pid;
            });
            var b = vd.indexOf("pid=");
            b > -1 && (vd = vd.substring(0, b), "&" === vd.slice(-1) && (vd = vd.slice(0, -1))), setTimeout(function () {
              j && e.bind(window, "hashchange", f.onHashChange);
            }, 40);
          }
        },
        onHashChange: function onHashChange() {
          return Cd() === vd ? (xd = !0, void f.close()) : void (sd || (td = !0, f.goTo(Ed().pid), td = !1));
        },
        updateURL: function updateURL() {
          Dd(), td || (wd ? pd = setTimeout(Fd, 800) : Fd());
        }
      }
    }), e.extend(f, cc);
  };

  var initPhotoSwipeFromDOM = function initPhotoSwipeFromDOM(gallerySelector) {
    var parseThumbnailElements = function parseThumbnailElements(el) {
      // var thumbElements = el.childNodes,
      //    numNodes = thumbElements.length,
      var hrefs = [];
      var items = [];
      var anchor = jQuery(el).find('[data-size]');
      anchor.each(function () {
        var size = jQuery(this).attr('data-size').split('x');
        var href = jQuery(this).attr('href');
        var item = {
          src: href,
          w: parseInt(size[0], 10),
          h: parseInt(size[1], 10),
          author: jQuery(this).attr('data-author')
        };
        item.title = jQuery(this).attr('title');
        item.el = jQuery(this);
        item.o = {
          src: item.src,
          w: item.w,
          h: item.h
        };
        var filter = hrefs.filter(function (item) {
          return item === href;
        });

        if (!filter.length) {
          items.push(item);
          hrefs.push(href);
        }
      });
      return items;
    }; // find nearest parent element


    var closest = function closest(el, fn) {
      return el && (fn(el) ? el : closest(el.parentNode, fn));
    };

    var onThumbnailsClick = function onThumbnailsClick(e) {
      e = e || window.event;
      e.preventDefault ? e.preventDefault() : e.returnValue = false;
      var eTarget = e.target || e.srcElement;

      if (!clickedListItem) {
        return;
      }

      var clickedGallery = clickedListItem.parentNode;
      var childNodes = clickedListItem.parentNode.childNodes,
          numChildNodes = childNodes.length,
          nodeIndex = 0,
          index;

      for (var i = 0; i < numChildNodes; i++) {
        if (childNodes[i].nodeType !== 1) {
          continue;
        }

        if (childNodes[i] === clickedListItem) {
          index = nodeIndex;
          break;
        }

        nodeIndex++;
      }

      if (index >= 0) {
        openPhotoSwipe(index, clickedGallery);
      }

      return false;
    };

    var photoswipeParseHash = function photoswipeParseHash() {
      var hash = window.location.hash.substring(1),
          params = {};

      if (hash.length < 5) {
        // pid=1
        return params;
      }

      var vars = hash.split('&');

      for (var i = 0; i < vars.length; i++) {
        if (!vars[i]) {
          continue;
        }

        var pair = vars[i].split('=');

        if (pair.length < 2) {
          continue;
        }

        params[pair[0]] = pair[1];
      }

      if (params.gid) {
        params.gid = parseInt(params.gid, 10);
      }

      if (!params.hasOwnProperty('pid')) {
        return params;
      }

      params.pid = parseInt(params.pid, 10);
      return params;
    };

    var openPhotoSwipe = function openPhotoSwipe(src, galleryElement, disableAnimation) {
      var pswpElement = document.querySelectorAll('.pswp')[0],
          gallery,
          options,
          history = false;

      if (jQuery('body').hasClass('all-ajax-content')) {
        history = false;
      }

      var items = parseThumbnailElements(galleryElement);
      var number = 0;

      if (src) {
        items.forEach(function (item, index) {
          if (item.src === src) {
            number = index;
            return false;
          }
        });
      } // define options (if needed)


      options = {
        index: number,
        history: history,
        galleryUID: galleryElement.attr('data-pswp-uid'),
        getThumbBoundsFn: function getThumbBoundsFn(index) {
          return false;
        },
        addCaptionHTMLFn: function addCaptionHTMLFn(item, captionEl, isFake) {
          if (!item.title) {
            captionEl.children[0].innerText = '';
            return false;
          }

          captionEl.children[0].innerHTML = item.title; //+  '<br/><small>Photo: ' + item.author + '</small>';

          return true;
        }
      };
      var radios = document.getElementsByName('gallery-style');

      for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
          if (radios[i].id == 'radio-all-controls') {} else if (radios[i].id == 'radio-minimal-black') {
            options.mainClass = 'pswp--minimal--dark';
            options.barsSize = {
              top: 0,
              bottom: 0
            };
            options.captionEl = false;
            options.fullscreenEl = false;
            options.shareEl = false;
            options.bgOpacity = 0.85;
            options.tapToClose = true;
            options.tapToToggleControls = false;
          }

          break;
        }
      }

      if (disableAnimation) {
        options.showAnimationDuration = 0;
      } // Pass data to PhotoSwipe and initialize it


      gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options); // see: http://photoswipe.com/documentation/responsive-images.html

      var realViewportWidth,
          useLargeImages = false,
          firstResize = true,
          imageSrcWillChange;
      gallery.listen('beforeResize', function () {
        var dpiRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
        dpiRatio = Math.min(dpiRatio, 2.5);
        realViewportWidth = gallery.viewportSize.x * dpiRatio;

        if (realViewportWidth >= 1200 || !gallery.likelyTouchDevice && realViewportWidth > 800 || screen.width > 1200) {
          if (!useLargeImages) {
            useLargeImages = true;
            imageSrcWillChange = true;
          }
        } else {
          if (useLargeImages) {
            useLargeImages = false;
            imageSrcWillChange = true;
          }
        }

        if (imageSrcWillChange && !firstResize) {
          gallery.invalidateCurrItems();
        }

        if (firstResize) {
          firstResize = false;
        }

        imageSrcWillChange = false;
      });
      gallery.listen('gettingData', function (index, item) {
        //if( useLargeImages ) {
        item.src = item.o.src;
        item.w = item.o.w;
        item.h = item.o.h; // } else {
        //     item.src = item.m.src;
        //     item.w = item.m.w;
        //     item.h = item.m.h;
        // }
      });
      gallery.init();
      photoSwipe.open = openPhotoSwipe;
    }; // select all gallery elements
    //var galleryElements = document.querySelectorAll( gallerySelector );
    // for(var i = 0, l = galleryElements.length; i < l; i++) {
    //     galleryElements[i].setAttribute('data-pswp-uid', i+1);
    //     galleryElements[i].onclick = onThumbnailsClick;
    // }


    var galleryElements = jQuery(gallerySelector);
    galleryElements.each(function (index) {
      var $this = jQuery(this);
      $this.attr('data-pswp-uid', index);
      $this.off('click');
      $this.on('click', '[data-size]', function (e) {
        e.preventDefault();
        openPhotoSwipe(jQuery(this).attr('href'), $this);
      }).on('click', '[data-pswp-open]', function (e) {
        e.preventDefault();
        openPhotoSwipe(0, $this);
      });
    }); // var galleryElements = $(this).find(gallerySelector);
    // alert(galleryElements.length);
    // Parse URL and open gallery if it contains #&pid=3&gid=1

    var hashData = photoswipeParseHash();

    if (hashData.pid > 0 && hashData.gid > 0) {//openPhotoSwipe(hashData.pid - 1, galleryElements.eq(hashData.gid - 1));
    }
  };

  photoSwipe.init = initPhotoSwipeFromDOM;
  $(document).ready(function () {
    $('<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"> <div class="pswp__bg"></div><div class="pswp__scroll-wrap"> <div class="pswp__container"> <div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"> <div class="pswp__top-bar"> <div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button> <button style="display: none;" class="pswp__button pswp__button--share" title="Share"></button> <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button> <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button> <div class="pswp__preloader"> <div class="pswp__preloader__icn"> <div class="pswp__preloader__cut"> <div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"> <div class="pswp__share-tooltip"></div></div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button> <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button> <div class="pswp__caption"> <div class="pswp__caption__center"></div></div></div></div></div>').appendTo($('body'));
  });
})(jQuery);

/* harmony default export */ __webpack_exports__["default"] = (photoSwipe);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ })

}]);
//# sourceMappingURL=photoSwipe.js.map