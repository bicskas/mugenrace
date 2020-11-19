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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/js/webgl/dat-gui.js":
/*!***************************************!*\
  !*** ./resources/js/webgl/dat-gui.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * dat-gui JavaScript Controller Library
 * http://code.google.com/p/dat-gui
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? t(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function (e) {
  "use strict";

  function t(e, t) {
    var n = e.__state.conversionName.toString(),
        o = Math.round(e.r),
        i = Math.round(e.g),
        r = Math.round(e.b),
        s = e.a,
        a = Math.round(e.h),
        l = e.s.toFixed(1),
        d = e.v.toFixed(1);

    if (t || "THREE_CHAR_HEX" === n || "SIX_CHAR_HEX" === n) {
      for (var c = e.hex.toString(16); c.length < 6;) {
        c = "0" + c;
      }

      return "#" + c;
    }

    return "CSS_RGB" === n ? "rgb(" + o + "," + i + "," + r + ")" : "CSS_RGBA" === n ? "rgba(" + o + "," + i + "," + r + "," + s + ")" : "HEX" === n ? "0x" + e.hex.toString(16) : "RGB_ARRAY" === n ? "[" + o + "," + i + "," + r + "]" : "RGBA_ARRAY" === n ? "[" + o + "," + i + "," + r + "," + s + "]" : "RGB_OBJ" === n ? "{r:" + o + ",g:" + i + ",b:" + r + "}" : "RGBA_OBJ" === n ? "{r:" + o + ",g:" + i + ",b:" + r + ",a:" + s + "}" : "HSV_OBJ" === n ? "{h:" + a + ",s:" + l + ",v:" + d + "}" : "HSVA_OBJ" === n ? "{h:" + a + ",s:" + l + ",v:" + d + ",a:" + s + "}" : "unknown format";
  }

  function n(e, t, n) {
    Object.defineProperty(e, t, {
      get: function get() {
        return "RGB" === this.__state.space ? this.__state[t] : (I.recalculateRGB(this, t, n), this.__state[t]);
      },
      set: function set(e) {
        "RGB" !== this.__state.space && (I.recalculateRGB(this, t, n), this.__state.space = "RGB"), this.__state[t] = e;
      }
    });
  }

  function o(e, t) {
    Object.defineProperty(e, t, {
      get: function get() {
        return "HSV" === this.__state.space ? this.__state[t] : (I.recalculateHSV(this), this.__state[t]);
      },
      set: function set(e) {
        "HSV" !== this.__state.space && (I.recalculateHSV(this), this.__state.space = "HSV"), this.__state[t] = e;
      }
    });
  }

  function i(e) {
    if ("0" === e || S.isUndefined(e)) return 0;
    var t = e.match(U);
    return S.isNull(t) ? 0 : parseFloat(t[1]);
  }

  function r(e) {
    var t = e.toString();
    return t.indexOf(".") > -1 ? t.length - t.indexOf(".") - 1 : 0;
  }

  function s(e, t) {
    var n = Math.pow(10, t);
    return Math.round(e * n) / n;
  }

  function a(e, t, n, o, i) {
    return o + (e - t) / (n - t) * (i - o);
  }

  function l(e, t, n, o) {
    e.style.background = "", S.each(ee, function (i) {
      e.style.cssText += "background: " + i + "linear-gradient(" + t + ", " + n + " 0%, " + o + " 100%); ";
    });
  }

  function d(e) {
    e.style.background = "", e.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", e.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";
  }

  function c(e, t, n) {
    var o = document.createElement("li");
    return t && o.appendChild(t), n ? e.__ul.insertBefore(o, n) : e.__ul.appendChild(o), e.onResize(), o;
  }

  function u(e) {
    X.unbind(window, "resize", e.__resizeHandler), e.saveToLocalStorageIfPossible && X.unbind(window, "unload", e.saveToLocalStorageIfPossible);
  }

  function _(e, t) {
    var n = e.__preset_select[e.__preset_select.selectedIndex];
    n.innerHTML = t ? n.value + "*" : n.value;
  }

  function h(e, t, n) {
    if (n.__li = t, n.__gui = e, S.extend(n, {
      options: function options(t) {
        if (arguments.length > 1) {
          var o = n.__li.nextElementSibling;
          return n.remove(), f(e, n.object, n.property, {
            before: o,
            factoryArgs: [S.toArray(arguments)]
          });
        }

        if (S.isArray(t) || S.isObject(t)) {
          var i = n.__li.nextElementSibling;
          return n.remove(), f(e, n.object, n.property, {
            before: i,
            factoryArgs: [t]
          });
        }
      },
      name: function name(e) {
        return n.__li.firstElementChild.firstElementChild.innerHTML = e, n;
      },
      listen: function listen() {
        return n.__gui.listen(n), n;
      },
      remove: function remove() {
        return n.__gui.remove(n), n;
      }
    }), n instanceof q) {
      var o = new Q(n.object, n.property, {
        min: n.__min,
        max: n.__max,
        step: n.__step
      });
      S.each(["updateDisplay", "onChange", "onFinishChange", "step", "min", "max"], function (e) {
        var t = n[e],
            i = o[e];

        n[e] = o[e] = function () {
          var e = Array.prototype.slice.call(arguments);
          return i.apply(o, e), t.apply(n, e);
        };
      }), X.addClass(t, "has-slider"), n.domElement.insertBefore(o.domElement, n.domElement.firstElementChild);
    } else if (n instanceof Q) {
      var i = function i(t) {
        if (S.isNumber(n.__min) && S.isNumber(n.__max)) {
          var o = n.__li.firstElementChild.firstElementChild.innerHTML,
              i = n.__gui.__listening.indexOf(n) > -1;
          n.remove();
          var r = f(e, n.object, n.property, {
            before: n.__li.nextElementSibling,
            factoryArgs: [n.__min, n.__max, n.__step]
          });
          return r.name(o), i && r.listen(), r;
        }

        return t;
      };

      n.min = S.compose(i, n.min), n.max = S.compose(i, n.max);
    } else n instanceof K ? (X.bind(t, "click", function () {
      X.fakeEvent(n.__checkbox, "click");
    }), X.bind(n.__checkbox, "click", function (e) {
      e.stopPropagation();
    })) : n instanceof Z ? (X.bind(t, "click", function () {
      X.fakeEvent(n.__button, "click");
    }), X.bind(t, "mouseover", function () {
      X.addClass(n.__button, "hover");
    }), X.bind(t, "mouseout", function () {
      X.removeClass(n.__button, "hover");
    })) : n instanceof $ && (X.addClass(t, "color"), n.updateDisplay = S.compose(function (e) {
      return t.style.borderLeftColor = n.__color.toString(), e;
    }, n.updateDisplay), n.updateDisplay());

    n.setValue = S.compose(function (t) {
      return e.getRoot().__preset_select && n.isModified() && _(e.getRoot(), !0), t;
    }, n.setValue);
  }

  function p(e, t) {
    var n = e.getRoot(),
        o = n.__rememberedObjects.indexOf(t.object);

    if (-1 !== o) {
      var i = n.__rememberedObjectIndecesToControllers[o];

      if (void 0 === i && (i = {}, n.__rememberedObjectIndecesToControllers[o] = i), i[t.property] = t, n.load && n.load.remembered) {
        var r = n.load.remembered,
            s = void 0;
        if (r[e.preset]) s = r[e.preset];else {
          if (!r[se]) return;
          s = r[se];
        }

        if (s[o] && void 0 !== s[o][t.property]) {
          var a = s[o][t.property];
          t.initialValue = a, t.setValue(a);
        }
      }
    }
  }

  function f(e, t, n, o) {
    if (void 0 === t[n]) throw new Error('Object "' + t + '" has no property "' + n + '"');
    var i = void 0;
    if (o.color) i = new $(t, n);else {
      var r = [t, n].concat(o.factoryArgs);
      i = ne.apply(e, r);
    }
    o.before instanceof z && (o.before = o.before.__li), p(e, i), X.addClass(i.domElement, "c");
    var s = document.createElement("span");
    X.addClass(s, "property-name"), s.innerHTML = i.property;
    var a = document.createElement("div");
    a.appendChild(s), a.appendChild(i.domElement);
    var l = c(e, a, o.before);
    return X.addClass(l, he.CLASS_CONTROLLER_ROW), i instanceof $ ? X.addClass(l, "color") : X.addClass(l, H(i.getValue())), h(e, l, i), e.__controllers.push(i), i;
  }

  function m(e, t) {
    return document.location.href + "." + t;
  }

  function g(e, t, n) {
    var o = document.createElement("option");
    o.innerHTML = t, o.value = t, e.__preset_select.appendChild(o), n && (e.__preset_select.selectedIndex = e.__preset_select.length - 1);
  }

  function b(e, t) {
    t.style.display = e.useLocalStorage ? "block" : "none";
  }

  function v(e) {
    var t = e.__save_row = document.createElement("li");
    X.addClass(e.domElement, "has-save"), e.__ul.insertBefore(t, e.__ul.firstChild), X.addClass(t, "save-row");
    var n = document.createElement("span");
    n.innerHTML = "&nbsp;", X.addClass(n, "button gears");
    var o = document.createElement("span");
    o.innerHTML = "Save", X.addClass(o, "button"), X.addClass(o, "save");
    var i = document.createElement("span");
    i.innerHTML = "New", X.addClass(i, "button"), X.addClass(i, "save-as");
    var r = document.createElement("span");
    r.innerHTML = "Revert", X.addClass(r, "button"), X.addClass(r, "revert");
    var s = e.__preset_select = document.createElement("select");

    if (e.load && e.load.remembered ? S.each(e.load.remembered, function (t, n) {
      g(e, n, n === e.preset);
    }) : g(e, se, !1), X.bind(s, "change", function () {
      for (var t = 0; t < e.__preset_select.length; t++) {
        e.__preset_select[t].innerHTML = e.__preset_select[t].value;
      }

      e.preset = this.value;
    }), t.appendChild(s), t.appendChild(n), t.appendChild(o), t.appendChild(i), t.appendChild(r), ae) {
      var a = document.getElementById("dg-local-explain"),
          l = document.getElementById("dg-local-storage");
      document.getElementById("dg-save-locally").style.display = "block", "true" === localStorage.getItem(m(e, "isLocal")) && l.setAttribute("checked", "checked"), b(e, a), X.bind(l, "change", function () {
        e.useLocalStorage = !e.useLocalStorage, b(e, a);
      });
    }

    var d = document.getElementById("dg-new-constructor");
    X.bind(d, "keydown", function (e) {
      !e.metaKey || 67 !== e.which && 67 !== e.keyCode || le.hide();
    }), X.bind(n, "click", function () {
      d.innerHTML = JSON.stringify(e.getSaveObject(), void 0, 2), le.show(), d.focus(), d.select();
    }), X.bind(o, "click", function () {
      e.save();
    }), X.bind(i, "click", function () {
      var t = prompt("Enter a new preset name.");
      t && e.saveAs(t);
    }), X.bind(r, "click", function () {
      e.revert();
    });
  }

  function y(e) {
    function t(t) {
      return t.preventDefault(), e.width += i - t.clientX, e.onResize(), i = t.clientX, !1;
    }

    function n() {
      X.removeClass(e.__closeButton, he.CLASS_DRAG), X.unbind(window, "mousemove", t), X.unbind(window, "mouseup", n);
    }

    function o(o) {
      return o.preventDefault(), i = o.clientX, X.addClass(e.__closeButton, he.CLASS_DRAG), X.bind(window, "mousemove", t), X.bind(window, "mouseup", n), !1;
    }

    var i = void 0;
    e.__resize_handle = document.createElement("div"), S.extend(e.__resize_handle.style, {
      width: "6px",
      marginLeft: "-3px",
      height: "200px",
      cursor: "ew-resize",
      position: "absolute"
    }), X.bind(e.__resize_handle, "mousedown", o), X.bind(e.__closeButton, "mousedown", o), e.domElement.insertBefore(e.__resize_handle, e.domElement.firstElementChild);
  }

  function w(e, t) {
    e.domElement.style.width = t + "px", e.__save_row && e.autoPlace && (e.__save_row.style.width = t + "px"), e.__closeButton && (e.__closeButton.style.width = t + "px");
  }

  function x(e, t) {
    var n = {};
    return S.each(e.__rememberedObjects, function (o, i) {
      var r = {},
          s = e.__rememberedObjectIndecesToControllers[i];
      S.each(s, function (e, n) {
        r[n] = t ? e.initialValue : e.getValue();
      }), n[i] = r;
    }), n;
  }

  function E(e) {
    for (var t = 0; t < e.__preset_select.length; t++) {
      e.__preset_select[t].value === e.preset && (e.__preset_select.selectedIndex = t);
    }
  }

  function C(e) {
    0 !== e.length && oe.call(window, function () {
      C(e);
    }), S.each(e, function (e) {
      e.updateDisplay();
    });
  }

  var A = Array.prototype.forEach,
      k = Array.prototype.slice,
      S = {
    BREAK: {},
    extend: function extend(e) {
      return this.each(k.call(arguments, 1), function (t) {
        (this.isObject(t) ? Object.keys(t) : []).forEach(function (n) {
          this.isUndefined(t[n]) || (e[n] = t[n]);
        }.bind(this));
      }, this), e;
    },
    defaults: function defaults(e) {
      return this.each(k.call(arguments, 1), function (t) {
        (this.isObject(t) ? Object.keys(t) : []).forEach(function (n) {
          this.isUndefined(e[n]) && (e[n] = t[n]);
        }.bind(this));
      }, this), e;
    },
    compose: function compose() {
      var e = k.call(arguments);
      return function () {
        for (var t = k.call(arguments), n = e.length - 1; n >= 0; n--) {
          t = [e[n].apply(this, t)];
        }

        return t[0];
      };
    },
    each: function each(e, t, n) {
      if (e) if (A && e.forEach && e.forEach === A) e.forEach(t, n);else if (e.length === e.length + 0) {
        var o = void 0,
            i = void 0;

        for (o = 0, i = e.length; o < i; o++) {
          if (o in e && t.call(n, e[o], o) === this.BREAK) return;
        }
      } else for (var r in e) {
        if (t.call(n, e[r], r) === this.BREAK) return;
      }
    },
    defer: function defer(e) {
      setTimeout(e, 0);
    },
    debounce: function debounce(e, t, n) {
      var o = void 0;
      return function () {
        var i = this,
            r = arguments,
            s = n || !o;
        clearTimeout(o), o = setTimeout(function () {
          o = null, n || e.apply(i, r);
        }, t), s && e.apply(i, r);
      };
    },
    toArray: function toArray(e) {
      return e.toArray ? e.toArray() : k.call(e);
    },
    isUndefined: function isUndefined(e) {
      return void 0 === e;
    },
    isNull: function isNull(e) {
      return null === e;
    },
    isNaN: function (e) {
      function t(t) {
        return e.apply(this, arguments);
      }

      return t.toString = function () {
        return e.toString();
      }, t;
    }(function (e) {
      return isNaN(e);
    }),
    isArray: Array.isArray || function (e) {
      return e.constructor === Array;
    },
    isObject: function isObject(e) {
      return e === Object(e);
    },
    isNumber: function isNumber(e) {
      return e === e + 0;
    },
    isString: function isString(e) {
      return e === e + "";
    },
    isBoolean: function isBoolean(e) {
      return !1 === e || !0 === e;
    },
    isFunction: function isFunction(e) {
      return "[object Function]" === Object.prototype.toString.call(e);
    }
  },
      O = [{
    litmus: S.isString,
    conversions: {
      THREE_CHAR_HEX: {
        read: function read(e) {
          var t = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
          return null !== t && {
            space: "HEX",
            hex: parseInt("0x" + t[1].toString() + t[1].toString() + t[2].toString() + t[2].toString() + t[3].toString() + t[3].toString(), 0)
          };
        },
        write: t
      },
      SIX_CHAR_HEX: {
        read: function read(e) {
          var t = e.match(/^#([A-F0-9]{6})$/i);
          return null !== t && {
            space: "HEX",
            hex: parseInt("0x" + t[1].toString(), 0)
          };
        },
        write: t
      },
      CSS_RGB: {
        read: function read(e) {
          var t = e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
          return null !== t && {
            space: "RGB",
            r: parseFloat(t[1]),
            g: parseFloat(t[2]),
            b: parseFloat(t[3])
          };
        },
        write: t
      },
      CSS_RGBA: {
        read: function read(e) {
          var t = e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
          return null !== t && {
            space: "RGB",
            r: parseFloat(t[1]),
            g: parseFloat(t[2]),
            b: parseFloat(t[3]),
            a: parseFloat(t[4])
          };
        },
        write: t
      }
    }
  }, {
    litmus: S.isNumber,
    conversions: {
      HEX: {
        read: function read(e) {
          return {
            space: "HEX",
            hex: e,
            conversionName: "HEX"
          };
        },
        write: function write(e) {
          return e.hex;
        }
      }
    }
  }, {
    litmus: S.isArray,
    conversions: {
      RGB_ARRAY: {
        read: function read(e) {
          return 3 === e.length && {
            space: "RGB",
            r: e[0],
            g: e[1],
            b: e[2]
          };
        },
        write: function write(e) {
          return [e.r, e.g, e.b];
        }
      },
      RGBA_ARRAY: {
        read: function read(e) {
          return 4 === e.length && {
            space: "RGB",
            r: e[0],
            g: e[1],
            b: e[2],
            a: e[3]
          };
        },
        write: function write(e) {
          return [e.r, e.g, e.b, e.a];
        }
      }
    }
  }, {
    litmus: S.isObject,
    conversions: {
      RGBA_OBJ: {
        read: function read(e) {
          return !!(S.isNumber(e.r) && S.isNumber(e.g) && S.isNumber(e.b) && S.isNumber(e.a)) && {
            space: "RGB",
            r: e.r,
            g: e.g,
            b: e.b,
            a: e.a
          };
        },
        write: function write(e) {
          return {
            r: e.r,
            g: e.g,
            b: e.b,
            a: e.a
          };
        }
      },
      RGB_OBJ: {
        read: function read(e) {
          return !!(S.isNumber(e.r) && S.isNumber(e.g) && S.isNumber(e.b)) && {
            space: "RGB",
            r: e.r,
            g: e.g,
            b: e.b
          };
        },
        write: function write(e) {
          return {
            r: e.r,
            g: e.g,
            b: e.b
          };
        }
      },
      HSVA_OBJ: {
        read: function read(e) {
          return !!(S.isNumber(e.h) && S.isNumber(e.s) && S.isNumber(e.v) && S.isNumber(e.a)) && {
            space: "HSV",
            h: e.h,
            s: e.s,
            v: e.v,
            a: e.a
          };
        },
        write: function write(e) {
          return {
            h: e.h,
            s: e.s,
            v: e.v,
            a: e.a
          };
        }
      },
      HSV_OBJ: {
        read: function read(e) {
          return !!(S.isNumber(e.h) && S.isNumber(e.s) && S.isNumber(e.v)) && {
            space: "HSV",
            h: e.h,
            s: e.s,
            v: e.v
          };
        },
        write: function write(e) {
          return {
            h: e.h,
            s: e.s,
            v: e.v
          };
        }
      }
    }
  }],
      T = void 0,
      L = void 0,
      R = function R() {
    L = !1;
    var e = arguments.length > 1 ? S.toArray(arguments) : arguments[0];
    return S.each(O, function (t) {
      if (t.litmus(e)) return S.each(t.conversions, function (t, n) {
        if (T = t.read(e), !1 === L && !1 !== T) return L = T, T.conversionName = n, T.conversion = t, S.BREAK;
      }), S.BREAK;
    }), L;
  },
      B = void 0,
      N = {
    hsv_to_rgb: function hsv_to_rgb(e, t, n) {
      var o = Math.floor(e / 60) % 6,
          i = e / 60 - Math.floor(e / 60),
          r = n * (1 - t),
          s = n * (1 - i * t),
          a = n * (1 - (1 - i) * t),
          l = [[n, a, r], [s, n, r], [r, n, a], [r, s, n], [a, r, n], [n, r, s]][o];
      return {
        r: 255 * l[0],
        g: 255 * l[1],
        b: 255 * l[2]
      };
    },
    rgb_to_hsv: function rgb_to_hsv(e, t, n) {
      var o = Math.min(e, t, n),
          i = Math.max(e, t, n),
          r = i - o,
          s = void 0,
          a = void 0;
      return 0 === i ? {
        h: NaN,
        s: 0,
        v: 0
      } : (a = r / i, s = e === i ? (t - n) / r : t === i ? 2 + (n - e) / r : 4 + (e - t) / r, (s /= 6) < 0 && (s += 1), {
        h: 360 * s,
        s: a,
        v: i / 255
      });
    },
    rgb_to_hex: function rgb_to_hex(e, t, n) {
      var o = this.hex_with_component(0, 2, e);
      return o = this.hex_with_component(o, 1, t), o = this.hex_with_component(o, 0, n);
    },
    component_from_hex: function component_from_hex(e, t) {
      return e >> 8 * t & 255;
    },
    hex_with_component: function hex_with_component(e, t, n) {
      return n << (B = 8 * t) | e & ~(255 << B);
    }
  },
      H = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
  },
      F = function F(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  },
      P = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }

    return function (t, n, o) {
      return n && e(t.prototype, n), o && e(t, o), t;
    };
  }(),
      j = function e(t, n, o) {
    null === t && (t = Function.prototype);
    var i = Object.getOwnPropertyDescriptor(t, n);

    if (void 0 === i) {
      var r = Object.getPrototypeOf(t);
      return null === r ? void 0 : e(r, n, o);
    }

    if ("value" in i) return i.value;
    var s = i.get;
    if (void 0 !== s) return s.call(o);
  },
      D = function D(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + _typeof(t));
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  },
      V = function V(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != _typeof(t) && "function" != typeof t ? e : t;
  },
      I = function () {
    function e() {
      if (F(this, e), this.__state = R.apply(this, arguments), !1 === this.__state) throw new Error("Failed to interpret color arguments");
      this.__state.a = this.__state.a || 1;
    }

    return P(e, [{
      key: "toString",
      value: function value() {
        return t(this);
      }
    }, {
      key: "toHexString",
      value: function value() {
        return t(this, !0);
      }
    }, {
      key: "toOriginal",
      value: function value() {
        return this.__state.conversion.write(this);
      }
    }]), e;
  }();

  I.recalculateRGB = function (e, t, n) {
    if ("HEX" === e.__state.space) e.__state[t] = N.component_from_hex(e.__state.hex, n);else {
      if ("HSV" !== e.__state.space) throw new Error("Corrupted color state");
      S.extend(e.__state, N.hsv_to_rgb(e.__state.h, e.__state.s, e.__state.v));
    }
  }, I.recalculateHSV = function (e) {
    var t = N.rgb_to_hsv(e.r, e.g, e.b);
    S.extend(e.__state, {
      s: t.s,
      v: t.v
    }), S.isNaN(t.h) ? S.isUndefined(e.__state.h) && (e.__state.h = 0) : e.__state.h = t.h;
  }, I.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"], n(I.prototype, "r", 2), n(I.prototype, "g", 1), n(I.prototype, "b", 0), o(I.prototype, "h"), o(I.prototype, "s"), o(I.prototype, "v"), Object.defineProperty(I.prototype, "a", {
    get: function get() {
      return this.__state.a;
    },
    set: function set(e) {
      this.__state.a = e;
    }
  }), Object.defineProperty(I.prototype, "hex", {
    get: function get() {
      return "HEX" !== !this.__state.space && (this.__state.hex = N.rgb_to_hex(this.r, this.g, this.b)), this.__state.hex;
    },
    set: function set(e) {
      this.__state.space = "HEX", this.__state.hex = e;
    }
  });

  var z = function () {
    function e(t, n) {
      F(this, e), this.initialValue = t[n], this.domElement = document.createElement("div"), this.object = t, this.property = n, this.__onChange = void 0, this.__onFinishChange = void 0;
    }

    return P(e, [{
      key: "onChange",
      value: function value(e) {
        return this.__onChange = e, this;
      }
    }, {
      key: "onFinishChange",
      value: function value(e) {
        return this.__onFinishChange = e, this;
      }
    }, {
      key: "setValue",
      value: function value(e) {
        return this.object[this.property] = e, this.__onChange && this.__onChange.call(this, e), this.updateDisplay(), this;
      }
    }, {
      key: "getValue",
      value: function value() {
        return this.object[this.property];
      }
    }, {
      key: "updateDisplay",
      value: function value() {
        return this;
      }
    }, {
      key: "isModified",
      value: function value() {
        return this.initialValue !== this.getValue();
      }
    }]), e;
  }(),
      M = {
    HTMLEvents: ["change"],
    MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"],
    KeyboardEvents: ["keydown"]
  },
      G = {};

  S.each(M, function (e, t) {
    S.each(e, function (e) {
      G[e] = t;
    });
  });

  var U = /(\d+(\.\d+)?)px/,
      X = {
    makeSelectable: function makeSelectable(e, t) {
      void 0 !== e && void 0 !== e.style && (e.onselectstart = t ? function () {
        return !1;
      } : function () {}, e.style.MozUserSelect = t ? "auto" : "none", e.style.KhtmlUserSelect = t ? "auto" : "none", e.unselectable = t ? "on" : "off");
    },
    makeFullscreen: function makeFullscreen(e, t, n) {
      var o = n,
          i = t;
      S.isUndefined(i) && (i = !0), S.isUndefined(o) && (o = !0), e.style.position = "absolute", i && (e.style.left = 0, e.style.right = 0), o && (e.style.top = 0, e.style.bottom = 0);
    },
    fakeEvent: function fakeEvent(e, t, n, o) {
      var i = n || {},
          r = G[t];
      if (!r) throw new Error("Event type " + t + " not supported.");
      var s = document.createEvent(r);

      switch (r) {
        case "MouseEvents":
          var a = i.x || i.clientX || 0,
              l = i.y || i.clientY || 0;
          s.initMouseEvent(t, i.bubbles || !1, i.cancelable || !0, window, i.clickCount || 1, 0, 0, a, l, !1, !1, !1, !1, 0, null);
          break;

        case "KeyboardEvents":
          var d = s.initKeyboardEvent || s.initKeyEvent;
          S.defaults(i, {
            cancelable: !0,
            ctrlKey: !1,
            altKey: !1,
            shiftKey: !1,
            metaKey: !1,
            keyCode: void 0,
            charCode: void 0
          }), d(t, i.bubbles || !1, i.cancelable, window, i.ctrlKey, i.altKey, i.shiftKey, i.metaKey, i.keyCode, i.charCode);
          break;

        default:
          s.initEvent(t, i.bubbles || !1, i.cancelable || !0);
      }

      S.defaults(s, o), e.dispatchEvent(s);
    },
    bind: function bind(e, t, n, o) {
      var i = o || !1;
      return e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent && e.attachEvent("on" + t, n), X;
    },
    unbind: function unbind(e, t, n, o) {
      var i = o || !1;
      return e.removeEventListener ? e.removeEventListener(t, n, i) : e.detachEvent && e.detachEvent("on" + t, n), X;
    },
    addClass: function addClass(e, t) {
      if (void 0 === e.className) e.className = t;else if (e.className !== t) {
        var n = e.className.split(/ +/);
        -1 === n.indexOf(t) && (n.push(t), e.className = n.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""));
      }
      return X;
    },
    removeClass: function removeClass(e, t) {
      if (t) {
        if (e.className === t) e.removeAttribute("class");else {
          var n = e.className.split(/ +/),
              o = n.indexOf(t);
          -1 !== o && (n.splice(o, 1), e.className = n.join(" "));
        }
      } else e.className = void 0;
      return X;
    },
    hasClass: function hasClass(e, t) {
      return new RegExp("(?:^|\\s+)" + t + "(?:\\s+|$)").test(e.className) || !1;
    },
    getWidth: function getWidth(e) {
      var t = getComputedStyle(e);
      return i(t["border-left-width"]) + i(t["border-right-width"]) + i(t["padding-left"]) + i(t["padding-right"]) + i(t.width);
    },
    getHeight: function getHeight(e) {
      var t = getComputedStyle(e);
      return i(t["border-top-width"]) + i(t["border-bottom-width"]) + i(t["padding-top"]) + i(t["padding-bottom"]) + i(t.height);
    },
    getOffset: function getOffset(e) {
      var t = e,
          n = {
        left: 0,
        top: 0
      };
      if (t.offsetParent) do {
        n.left += t.offsetLeft, n.top += t.offsetTop, t = t.offsetParent;
      } while (t);
      return n;
    },
    isActive: function isActive(e) {
      return e === document.activeElement && (e.type || e.href);
    }
  },
      K = function (e) {
    function t(e, n) {
      F(this, t);
      var o = V(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)),
          i = o;
      return o.__prev = o.getValue(), o.__checkbox = document.createElement("input"), o.__checkbox.setAttribute("type", "checkbox"), X.bind(o.__checkbox, "change", function () {
        i.setValue(!i.__prev);
      }, !1), o.domElement.appendChild(o.__checkbox), o.updateDisplay(), o;
    }

    return D(t, z), P(t, [{
      key: "setValue",
      value: function value(e) {
        var n = j(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setValue", this).call(this, e);
        return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), n;
      }
    }, {
      key: "updateDisplay",
      value: function value() {
        return !0 === this.getValue() ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = !0, this.__prev = !0) : (this.__checkbox.checked = !1, this.__prev = !1), j(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this);
      }
    }]), t;
  }(),
      Y = function (e) {
    function t(e, n, o) {
      F(this, t);
      var i = V(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)),
          r = o,
          s = i;

      if (i.__select = document.createElement("select"), S.isArray(r)) {
        var a = {};
        S.each(r, function (e) {
          a[e] = e;
        }), r = a;
      }

      return S.each(r, function (e, t) {
        var n = document.createElement("option");
        n.innerHTML = t, n.setAttribute("value", e), s.__select.appendChild(n);
      }), i.updateDisplay(), X.bind(i.__select, "change", function () {
        var e = this.options[this.selectedIndex].value;
        s.setValue(e);
      }), i.domElement.appendChild(i.__select), i;
    }

    return D(t, z), P(t, [{
      key: "setValue",
      value: function value(e) {
        var n = j(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setValue", this).call(this, e);
        return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), n;
      }
    }, {
      key: "updateDisplay",
      value: function value() {
        return X.isActive(this.__select) ? this : (this.__select.value = this.getValue(), j(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this));
      }
    }]), t;
  }(),
      J = function (e) {
    function t(e, n) {
      function o() {
        r.setValue(r.__input.value);
      }

      F(this, t);
      var i = V(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)),
          r = i;
      return i.__input = document.createElement("input"), i.__input.setAttribute("type", "text"), X.bind(i.__input, "keyup", o), X.bind(i.__input, "change", o), X.bind(i.__input, "blur", function () {
        r.__onFinishChange && r.__onFinishChange.call(r, r.getValue());
      }), X.bind(i.__input, "keydown", function (e) {
        13 === e.keyCode && this.blur();
      }), i.updateDisplay(), i.domElement.appendChild(i.__input), i;
    }

    return D(t, z), P(t, [{
      key: "updateDisplay",
      value: function value() {
        return X.isActive(this.__input) || (this.__input.value = this.getValue()), j(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this);
      }
    }]), t;
  }(),
      W = function (e) {
    function t(e, n, o) {
      F(this, t);
      var i = V(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)),
          s = o || {};
      return i.__min = s.min, i.__max = s.max, i.__step = s.step, S.isUndefined(i.__step) ? 0 === i.initialValue ? i.__impliedStep = 1 : i.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(i.initialValue)) / Math.LN10)) / 10 : i.__impliedStep = i.__step, i.__precision = r(i.__impliedStep), i;
    }

    return D(t, z), P(t, [{
      key: "setValue",
      value: function value(e) {
        var n = e;
        return void 0 !== this.__min && n < this.__min ? n = this.__min : void 0 !== this.__max && n > this.__max && (n = this.__max), void 0 !== this.__step && n % this.__step != 0 && (n = Math.round(n / this.__step) * this.__step), j(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setValue", this).call(this, n);
      }
    }, {
      key: "min",
      value: function value(e) {
        return this.__min = e, this;
      }
    }, {
      key: "max",
      value: function value(e) {
        return this.__max = e, this;
      }
    }, {
      key: "step",
      value: function value(e) {
        return this.__step = e, this.__impliedStep = e, this.__precision = r(e), this;
      }
    }]), t;
  }(),
      Q = function (e) {
    function t(e, n, o) {
      function i() {
        l.__onFinishChange && l.__onFinishChange.call(l, l.getValue());
      }

      function r(e) {
        var t = d - e.clientY;
        l.setValue(l.getValue() + t * l.__impliedStep), d = e.clientY;
      }

      function s() {
        X.unbind(window, "mousemove", r), X.unbind(window, "mouseup", s), i();
      }

      F(this, t);
      var a = V(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, o));
      a.__truncationSuspended = !1;
      var l = a,
          d = void 0;
      return a.__input = document.createElement("input"), a.__input.setAttribute("type", "text"), X.bind(a.__input, "change", function () {
        var e = parseFloat(l.__input.value);
        S.isNaN(e) || l.setValue(e);
      }), X.bind(a.__input, "blur", function () {
        i();
      }), X.bind(a.__input, "mousedown", function (e) {
        X.bind(window, "mousemove", r), X.bind(window, "mouseup", s), d = e.clientY;
      }), X.bind(a.__input, "keydown", function (e) {
        13 === e.keyCode && (l.__truncationSuspended = !0, this.blur(), l.__truncationSuspended = !1, i());
      }), a.updateDisplay(), a.domElement.appendChild(a.__input), a;
    }

    return D(t, W), P(t, [{
      key: "updateDisplay",
      value: function value() {
        return this.__input.value = this.__truncationSuspended ? this.getValue() : s(this.getValue(), this.__precision), j(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this);
      }
    }]), t;
  }(),
      q = function (e) {
    function t(e, n, o, i, r) {
      function s(e) {
        e.preventDefault();

        var t = _.__background.getBoundingClientRect();

        return _.setValue(a(e.clientX, t.left, t.right, _.__min, _.__max)), !1;
      }

      function l() {
        X.unbind(window, "mousemove", s), X.unbind(window, "mouseup", l), _.__onFinishChange && _.__onFinishChange.call(_, _.getValue());
      }

      function d(e) {
        var t = e.touches[0].clientX,
            n = _.__background.getBoundingClientRect();

        _.setValue(a(t, n.left, n.right, _.__min, _.__max));
      }

      function c() {
        X.unbind(window, "touchmove", d), X.unbind(window, "touchend", c), _.__onFinishChange && _.__onFinishChange.call(_, _.getValue());
      }

      F(this, t);
      var u = V(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, {
        min: o,
        max: i,
        step: r
      })),
          _ = u;
      return u.__background = document.createElement("div"), u.__foreground = document.createElement("div"), X.bind(u.__background, "mousedown", function (e) {
        document.activeElement.blur(), X.bind(window, "mousemove", s), X.bind(window, "mouseup", l), s(e);
      }), X.bind(u.__background, "touchstart", function (e) {
        1 === e.touches.length && (X.bind(window, "touchmove", d), X.bind(window, "touchend", c), d(e));
      }), X.addClass(u.__background, "slider"), X.addClass(u.__foreground, "slider-fg"), u.updateDisplay(), u.__background.appendChild(u.__foreground), u.domElement.appendChild(u.__background), u;
    }

    return D(t, W), P(t, [{
      key: "updateDisplay",
      value: function value() {
        var e = (this.getValue() - this.__min) / (this.__max - this.__min);

        return this.__foreground.style.width = 100 * e + "%", j(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this);
      }
    }]), t;
  }(),
      Z = function (e) {
    function t(e, n, o) {
      F(this, t);
      var i = V(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)),
          r = i;
      return i.__button = document.createElement("div"), i.__button.innerHTML = void 0 === o ? "Fire" : o, X.bind(i.__button, "click", function (e) {
        return e.preventDefault(), r.fire(), !1;
      }), X.addClass(i.__button, "button"), i.domElement.appendChild(i.__button), i;
    }

    return D(t, z), P(t, [{
      key: "fire",
      value: function value() {
        this.__onChange && this.__onChange.call(this), this.getValue().call(this.object), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue());
      }
    }]), t;
  }(),
      $ = function (e) {
    function t(e, n) {
      function o(e) {
        u(e), X.bind(window, "mousemove", u), X.bind(window, "touchmove", u), X.bind(window, "mouseup", r), X.bind(window, "touchend", r);
      }

      function i(e) {
        _(e), X.bind(window, "mousemove", _), X.bind(window, "touchmove", _), X.bind(window, "mouseup", s), X.bind(window, "touchend", s);
      }

      function r() {
        X.unbind(window, "mousemove", u), X.unbind(window, "touchmove", u), X.unbind(window, "mouseup", r), X.unbind(window, "touchend", r), c();
      }

      function s() {
        X.unbind(window, "mousemove", _), X.unbind(window, "touchmove", _), X.unbind(window, "mouseup", s), X.unbind(window, "touchend", s), c();
      }

      function a() {
        var e = R(this.value);
        !1 !== e ? (p.__color.__state = e, p.setValue(p.__color.toOriginal())) : this.value = p.__color.toString();
      }

      function c() {
        p.__onFinishChange && p.__onFinishChange.call(p, p.__color.toOriginal());
      }

      function u(e) {
        -1 === e.type.indexOf("touch") && e.preventDefault();

        var t = p.__saturation_field.getBoundingClientRect(),
            n = e.touches && e.touches[0] || e,
            o = n.clientX,
            i = n.clientY,
            r = (o - t.left) / (t.right - t.left),
            s = 1 - (i - t.top) / (t.bottom - t.top);

        return s > 1 ? s = 1 : s < 0 && (s = 0), r > 1 ? r = 1 : r < 0 && (r = 0), p.__color.v = s, p.__color.s = r, p.setValue(p.__color.toOriginal()), !1;
      }

      function _(e) {
        -1 === e.type.indexOf("touch") && e.preventDefault();

        var t = p.__hue_field.getBoundingClientRect(),
            n = 1 - ((e.touches && e.touches[0] || e).clientY - t.top) / (t.bottom - t.top);

        return n > 1 ? n = 1 : n < 0 && (n = 0), p.__color.h = 360 * n, p.setValue(p.__color.toOriginal()), !1;
      }

      F(this, t);
      var h = V(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
      h.__color = new I(h.getValue()), h.__temp = new I(0);
      var p = h;
      h.domElement = document.createElement("div"), X.makeSelectable(h.domElement, !1), h.__selector = document.createElement("div"), h.__selector.className = "selector", h.__saturation_field = document.createElement("div"), h.__saturation_field.className = "saturation-field", h.__field_knob = document.createElement("div"), h.__field_knob.className = "field-knob", h.__field_knob_border = "2px solid ", h.__hue_knob = document.createElement("div"), h.__hue_knob.className = "hue-knob", h.__hue_field = document.createElement("div"), h.__hue_field.className = "hue-field", h.__input = document.createElement("input"), h.__input.type = "text", h.__input_textShadow = "0 1px 1px ", X.bind(h.__input, "keydown", function (e) {
        13 === e.keyCode && a.call(this);
      }), X.bind(h.__input, "blur", a), X.bind(h.__selector, "mousedown", function () {
        X.addClass(this, "drag").bind(window, "mouseup", function () {
          X.removeClass(p.__selector, "drag");
        });
      }), X.bind(h.__selector, "touchstart", function () {
        X.addClass(this, "drag").bind(window, "touchend", function () {
          X.removeClass(p.__selector, "drag");
        });
      });
      var f = document.createElement("div");
      return S.extend(h.__selector.style, {
        width: "122px",
        height: "102px",
        padding: "3px",
        backgroundColor: "#222",
        boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
      }), S.extend(h.__field_knob.style, {
        position: "absolute",
        width: "12px",
        height: "12px",
        border: h.__field_knob_border + (h.__color.v < .5 ? "#fff" : "#000"),
        boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
        borderRadius: "12px",
        zIndex: 1
      }), S.extend(h.__hue_knob.style, {
        position: "absolute",
        width: "15px",
        height: "2px",
        borderRight: "4px solid #fff",
        zIndex: 1
      }), S.extend(h.__saturation_field.style, {
        width: "100px",
        height: "100px",
        border: "1px solid #555",
        marginRight: "3px",
        display: "inline-block",
        cursor: "pointer"
      }), S.extend(f.style, {
        width: "100%",
        height: "100%",
        background: "none"
      }), l(f, "top", "rgba(0,0,0,0)", "#000"), S.extend(h.__hue_field.style, {
        width: "15px",
        height: "100px",
        border: "1px solid #555",
        cursor: "ns-resize",
        position: "absolute",
        top: "3px",
        right: "3px"
      }), d(h.__hue_field), S.extend(h.__input.style, {
        outline: "none",
        textAlign: "center",
        color: "#fff",
        border: 0,
        fontWeight: "bold",
        textShadow: h.__input_textShadow + "rgba(0,0,0,0.7)"
      }), X.bind(h.__saturation_field, "mousedown", o), X.bind(h.__saturation_field, "touchstart", o), X.bind(h.__field_knob, "mousedown", o), X.bind(h.__field_knob, "touchstart", o), X.bind(h.__hue_field, "mousedown", i), X.bind(h.__hue_field, "touchstart", i), h.__saturation_field.appendChild(f), h.__selector.appendChild(h.__field_knob), h.__selector.appendChild(h.__saturation_field), h.__selector.appendChild(h.__hue_field), h.__hue_field.appendChild(h.__hue_knob), h.domElement.appendChild(h.__input), h.domElement.appendChild(h.__selector), h.updateDisplay(), h;
    }

    return D(t, z), P(t, [{
      key: "updateDisplay",
      value: function value() {
        var e = R(this.getValue());

        if (!1 !== e) {
          var t = !1;
          S.each(I.COMPONENTS, function (n) {
            if (!S.isUndefined(e[n]) && !S.isUndefined(this.__color.__state[n]) && e[n] !== this.__color.__state[n]) return t = !0, {};
          }, this), t && S.extend(this.__color.__state, e);
        }

        S.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1;
        var n = this.__color.v < .5 || this.__color.s > .5 ? 255 : 0,
            o = 255 - n;
        S.extend(this.__field_knob.style, {
          marginLeft: 100 * this.__color.s - 7 + "px",
          marginTop: 100 * (1 - this.__color.v) - 7 + "px",
          backgroundColor: this.__temp.toHexString(),
          border: this.__field_knob_border + "rgb(" + n + "," + n + "," + n + ")"
        }), this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px", this.__temp.s = 1, this.__temp.v = 1, l(this.__saturation_field, "left", "#fff", this.__temp.toHexString()), this.__input.value = this.__color.toString(), S.extend(this.__input.style, {
          backgroundColor: this.__color.toHexString(),
          color: "rgb(" + n + "," + n + "," + n + ")",
          textShadow: this.__input_textShadow + "rgba(" + o + "," + o + "," + o + ",.7)"
        });
      }
    }]), t;
  }(),
      ee = ["-moz-", "-o-", "-webkit-", "-ms-", ""],
      te = {
    load: function load(e, t) {
      var n = t || document,
          o = n.createElement("link");
      o.type = "text/css", o.rel = "stylesheet", o.href = e, n.getElementsByTagName("head")[0].appendChild(o);
    },
    inject: function inject(e, t) {
      var n = t || document,
          o = document.createElement("style");
      o.type = "text/css", o.innerHTML = e;
      var i = n.getElementsByTagName("head")[0];

      try {
        i.appendChild(o);
      } catch (e) {}
    }
  },
      ne = function ne(e, t) {
    var n = e[t];
    return S.isArray(arguments[2]) || S.isObject(arguments[2]) ? new Y(e, t, arguments[2]) : S.isNumber(n) ? S.isNumber(arguments[2]) && S.isNumber(arguments[3]) ? S.isNumber(arguments[4]) ? new q(e, t, arguments[2], arguments[3], arguments[4]) : new q(e, t, arguments[2], arguments[3]) : S.isNumber(arguments[4]) ? new Q(e, t, {
      min: arguments[2],
      max: arguments[3],
      step: arguments[4]
    }) : new Q(e, t, {
      min: arguments[2],
      max: arguments[3]
    }) : S.isString(n) ? new J(e, t) : S.isFunction(n) ? new Z(e, t, "") : S.isBoolean(n) ? new K(e, t) : null;
  },
      oe = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
    setTimeout(e, 1e3 / 60);
  },
      ie = function () {
    function e() {
      F(this, e), this.backgroundElement = document.createElement("div"), S.extend(this.backgroundElement.style, {
        backgroundColor: "rgba(0,0,0,0.8)",
        top: 0,
        left: 0,
        display: "none",
        zIndex: "1000",
        opacity: 0,
        WebkitTransition: "opacity 0.2s linear",
        transition: "opacity 0.2s linear"
      }), X.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), S.extend(this.domElement.style, {
        position: "fixed",
        display: "none",
        zIndex: "1001",
        opacity: 0,
        WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear",
        transition: "transform 0.2s ease-out, opacity 0.2s linear"
      }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement);
      var t = this;
      X.bind(this.backgroundElement, "click", function () {
        t.hide();
      });
    }

    return P(e, [{
      key: "show",
      value: function value() {
        var e = this;
        this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), S.defer(function () {
          e.backgroundElement.style.opacity = 1, e.domElement.style.opacity = 1, e.domElement.style.webkitTransform = "scale(1)";
        });
      }
    }, {
      key: "hide",
      value: function value() {
        var e = this,
            t = function t() {
          e.domElement.style.display = "none", e.backgroundElement.style.display = "none", X.unbind(e.domElement, "webkitTransitionEnd", t), X.unbind(e.domElement, "transitionend", t), X.unbind(e.domElement, "oTransitionEnd", t);
        };

        X.bind(this.domElement, "webkitTransitionEnd", t), X.bind(this.domElement, "transitionend", t), X.bind(this.domElement, "oTransitionEnd", t), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)";
      }
    }, {
      key: "layout",
      value: function value() {
        this.domElement.style.left = window.innerWidth / 2 - X.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - X.getHeight(this.domElement) / 2 + "px";
      }
    }]), e;
  }(),
      re = function (e) {
    if (e && "undefined" != typeof window) {
      var t = document.createElement("style");
      return t.setAttribute("type", "text/css"), t.innerHTML = e, document.head.appendChild(t), e;
    }
  }(".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n");

  te.inject(re);

  var se = "Default",
      ae = function () {
    try {
      return !!window.localStorage;
    } catch (e) {
      return !1;
    }
  }(),
      le = void 0,
      de = !0,
      ce = void 0,
      ue = !1,
      _e = [],
      he = function e(t) {
    var n = this,
        o = t || {};
    this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), X.addClass(this.domElement, "dg"), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], o = S.defaults(o, {
      closeOnTop: !1,
      autoPlace: !0,
      width: e.DEFAULT_WIDTH
    }), o = S.defaults(o, {
      resizable: o.autoPlace,
      hideable: o.autoPlace
    }), S.isUndefined(o.load) ? o.load = {
      preset: se
    } : o.preset && (o.load.preset = o.preset), S.isUndefined(o.parent) && o.hideable && _e.push(this), o.resizable = S.isUndefined(o.parent) && o.resizable, o.autoPlace && S.isUndefined(o.scrollable) && (o.scrollable = !0);
    var i = ae && "true" === localStorage.getItem(m(this, "isLocal")),
        r = void 0,
        s = void 0;

    if (Object.defineProperties(this, {
      parent: {
        get: function get() {
          return o.parent;
        }
      },
      scrollable: {
        get: function get() {
          return o.scrollable;
        }
      },
      autoPlace: {
        get: function get() {
          return o.autoPlace;
        }
      },
      closeOnTop: {
        get: function get() {
          return o.closeOnTop;
        }
      },
      preset: {
        get: function get() {
          return n.parent ? n.getRoot().preset : o.load.preset;
        },
        set: function set(e) {
          n.parent ? n.getRoot().preset = e : o.load.preset = e, E(this), n.revert();
        }
      },
      width: {
        get: function get() {
          return o.width;
        },
        set: function set(e) {
          o.width = e, w(n, e);
        }
      },
      name: {
        get: function get() {
          return o.name;
        },
        set: function set(e) {
          o.name = e, s && (s.innerHTML = o.name);
        }
      },
      closed: {
        get: function get() {
          return o.closed;
        },
        set: function set(t) {
          o.closed = t, o.closed ? X.addClass(n.__ul, e.CLASS_CLOSED) : X.removeClass(n.__ul, e.CLASS_CLOSED), this.onResize(), n.__closeButton && (n.__closeButton.innerHTML = t ? e.TEXT_OPEN : e.TEXT_CLOSED);
        }
      },
      load: {
        get: function get() {
          return o.load;
        }
      },
      useLocalStorage: {
        get: function get() {
          return i;
        },
        set: function set(e) {
          ae && (i = e, e ? X.bind(window, "unload", r) : X.unbind(window, "unload", r), localStorage.setItem(m(n, "isLocal"), e));
        }
      }
    }), S.isUndefined(o.parent)) {
      if (this.closed = o.closed || !1, X.addClass(this.domElement, e.CLASS_MAIN), X.makeSelectable(this.domElement, !1), ae && i) {
        n.useLocalStorage = !0;
        var a = localStorage.getItem(m(this, "gui"));
        a && (o.load = JSON.parse(a));
      }

      this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = e.TEXT_CLOSED, X.addClass(this.__closeButton, e.CLASS_CLOSE_BUTTON), o.closeOnTop ? (X.addClass(this.__closeButton, e.CLASS_CLOSE_TOP), this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0])) : (X.addClass(this.__closeButton, e.CLASS_CLOSE_BOTTOM), this.domElement.appendChild(this.__closeButton)), X.bind(this.__closeButton, "click", function () {
        n.closed = !n.closed;
      });
    } else {
      void 0 === o.closed && (o.closed = !0);
      var l = document.createTextNode(o.name);
      X.addClass(l, "controller-name"), s = c(n, l);
      X.addClass(this.__ul, e.CLASS_CLOSED), X.addClass(s, "title"), X.bind(s, "click", function (e) {
        return e.preventDefault(), n.closed = !n.closed, !1;
      }), o.closed || (this.closed = !1);
    }

    o.autoPlace && (S.isUndefined(o.parent) && (de && (ce = document.createElement("div"), X.addClass(ce, "dg"), X.addClass(ce, e.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(ce), de = !1), ce.appendChild(this.domElement), X.addClass(this.domElement, e.CLASS_AUTO_PLACE)), this.parent || w(n, o.width)), this.__resizeHandler = function () {
      n.onResizeDebounced();
    }, X.bind(window, "resize", this.__resizeHandler), X.bind(this.__ul, "webkitTransitionEnd", this.__resizeHandler), X.bind(this.__ul, "transitionend", this.__resizeHandler), X.bind(this.__ul, "oTransitionEnd", this.__resizeHandler), this.onResize(), o.resizable && y(this), r = function r() {
      ae && "true" === localStorage.getItem(m(n, "isLocal")) && localStorage.setItem(m(n, "gui"), JSON.stringify(n.getSaveObject()));
    }, this.saveToLocalStorageIfPossible = r, o.parent || function () {
      var e = n.getRoot();
      e.width += 1, S.defer(function () {
        e.width -= 1;
      });
    }();
  };

  he.toggleHide = function () {
    ue = !ue, S.each(_e, function (e) {
      e.domElement.style.display = ue ? "none" : "";
    });
  }, he.CLASS_AUTO_PLACE = "a", he.CLASS_AUTO_PLACE_CONTAINER = "ac", he.CLASS_MAIN = "main", he.CLASS_CONTROLLER_ROW = "cr", he.CLASS_TOO_TALL = "taller-than-window", he.CLASS_CLOSED = "closed", he.CLASS_CLOSE_BUTTON = "close-button", he.CLASS_CLOSE_TOP = "close-top", he.CLASS_CLOSE_BOTTOM = "close-bottom", he.CLASS_DRAG = "drag", he.DEFAULT_WIDTH = 245, he.TEXT_CLOSED = "Close Controls", he.TEXT_OPEN = "Open Controls", he._keydownHandler = function (e) {
    "text" === document.activeElement.type || 72 !== e.which && 72 !== e.keyCode || he.toggleHide();
  }, X.bind(window, "keydown", he._keydownHandler, !1), S.extend(he.prototype, {
    add: function add(e, t) {
      return f(this, e, t, {
        factoryArgs: Array.prototype.slice.call(arguments, 2)
      });
    },
    addColor: function addColor(e, t) {
      return f(this, e, t, {
        color: !0
      });
    },
    remove: function remove(e) {
      this.__ul.removeChild(e.__li), this.__controllers.splice(this.__controllers.indexOf(e), 1);
      var t = this;
      S.defer(function () {
        t.onResize();
      });
    },
    destroy: function destroy() {
      if (this.parent) throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");
      this.autoPlace && ce.removeChild(this.domElement);
      var e = this;
      S.each(this.__folders, function (t) {
        e.removeFolder(t);
      }), X.unbind(window, "keydown", he._keydownHandler, !1), u(this);
    },
    addFolder: function addFolder(e) {
      if (void 0 !== this.__folders[e]) throw new Error('You already have a folder in this GUI by the name "' + e + '"');
      var t = {
        name: e,
        parent: this
      };
      t.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[e] && (t.closed = this.load.folders[e].closed, t.load = this.load.folders[e]);
      var n = new he(t);
      this.__folders[e] = n;
      var o = c(this, n.domElement);
      return X.addClass(o, "folder"), n;
    },
    removeFolder: function removeFolder(e) {
      this.__ul.removeChild(e.domElement.parentElement), delete this.__folders[e.name], this.load && this.load.folders && this.load.folders[e.name] && delete this.load.folders[e.name], u(e);
      var t = this;
      S.each(e.__folders, function (t) {
        e.removeFolder(t);
      }), S.defer(function () {
        t.onResize();
      });
    },
    open: function open() {
      this.closed = !1;
    },
    close: function close() {
      this.closed = !0;
    },
    hide: function hide() {
      this.domElement.style.display = "none";
    },
    show: function show() {
      this.domElement.style.display = "";
    },
    onResize: function onResize() {
      var e = this.getRoot();

      if (e.scrollable) {
        var t = X.getOffset(e.__ul).top,
            n = 0;
        S.each(e.__ul.childNodes, function (t) {
          e.autoPlace && t === e.__save_row || (n += X.getHeight(t));
        }), window.innerHeight - t - 20 < n ? (X.addClass(e.domElement, he.CLASS_TOO_TALL), e.__ul.style.height = window.innerHeight - t - 20 + "px") : (X.removeClass(e.domElement, he.CLASS_TOO_TALL), e.__ul.style.height = "auto");
      }

      e.__resize_handle && S.defer(function () {
        e.__resize_handle.style.height = e.__ul.offsetHeight + "px";
      }), e.__closeButton && (e.__closeButton.style.width = e.width + "px");
    },
    onResizeDebounced: S.debounce(function () {
      this.onResize();
    }, 50),
    remember: function remember() {
      if (S.isUndefined(le) && ((le = new ie()).domElement.innerHTML = '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n\n    </div>\n\n  </div>\n\n</div>'), this.parent) throw new Error("You can only call remember on a top level GUI.");
      var e = this;
      S.each(Array.prototype.slice.call(arguments), function (t) {
        0 === e.__rememberedObjects.length && v(e), -1 === e.__rememberedObjects.indexOf(t) && e.__rememberedObjects.push(t);
      }), this.autoPlace && w(this, this.width);
    },
    getRoot: function getRoot() {
      for (var e = this; e.parent;) {
        e = e.parent;
      }

      return e;
    },
    getSaveObject: function getSaveObject() {
      var e = this.load;
      return e.closed = this.closed, this.__rememberedObjects.length > 0 && (e.preset = this.preset, e.remembered || (e.remembered = {}), e.remembered[this.preset] = x(this)), e.folders = {}, S.each(this.__folders, function (t, n) {
        e.folders[n] = t.getSaveObject();
      }), e;
    },
    save: function save() {
      this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = x(this), _(this, !1), this.saveToLocalStorageIfPossible();
    },
    saveAs: function saveAs(e) {
      this.load.remembered || (this.load.remembered = {}, this.load.remembered[se] = x(this, !0)), this.load.remembered[e] = x(this), this.preset = e, g(this, e, !0), this.saveToLocalStorageIfPossible();
    },
    revert: function revert(e) {
      S.each(this.__controllers, function (t) {
        this.getRoot().load.remembered ? p(e || this.getRoot(), t) : t.setValue(t.initialValue), t.__onFinishChange && t.__onFinishChange.call(t, t.getValue());
      }, this), S.each(this.__folders, function (e) {
        e.revert(e);
      }), e || _(this.getRoot(), !1);
    },
    listen: function listen(e) {
      var t = 0 === this.__listening.length;
      this.__listening.push(e), t && C(this.__listening);
    },
    updateDisplay: function updateDisplay() {
      S.each(this.__controllers, function (e) {
        e.updateDisplay();
      }), S.each(this.__folders, function (e) {
        e.updateDisplay();
      });
    }
  });
  var pe = {
    Color: I,
    math: N,
    interpret: R
  },
      fe = {
    Controller: z,
    BooleanController: K,
    OptionController: Y,
    StringController: J,
    NumberController: W,
    NumberControllerBox: Q,
    NumberControllerSlider: q,
    FunctionController: Z,
    ColorController: $
  },
      me = {
    dom: X
  },
      ge = {
    GUI: he
  },
      be = he,
      ve = {
    color: pe,
    controllers: fe,
    dom: me,
    gui: ge,
    GUI: be
  };
  e.color = pe, e.controllers = fe, e.dom = me, e.gui = ge, e.GUI = be, e["default"] = ve, Object.defineProperty(e, "__esModule", {
    value: !0
  });
});

/***/ }),

/***/ "./resources/js/webgl/gsap.js":
/*!************************************!*\
  !*** ./resources/js/webgl/gsap.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * VERSION: 2.1.3
 * DATE: 2019-05-17
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope =  true && module.exports && "undefined" != typeof global ? global : this || window;

(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";

  _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (a, b, c) {
    var d = function d(a) {
      var b,
          c = [],
          d = a.length;

      for (b = 0; b !== d; c.push(a[b++])) {
        ;
      }

      return c;
    },
        e = function e(a, b, c) {
      var d,
          e,
          f = a.cycle;

      for (d in f) {
        e = f[d], a[d] = "function" == typeof e ? e(c, b[c], b) : e[c % e.length];
      }

      delete a.cycle;
    },
        f = function f(a) {
      if ("function" == typeof a) return a;
      var b = "object" == _typeof(a) ? a : {
        each: a
      },
          c = b.ease,
          d = b.from || 0,
          e = b.base || 0,
          f = {},
          g = isNaN(d),
          h = b.axis,
          i = {
        center: .5,
        end: 1
      }[d] || 0;
      return function (a, j, k) {
        var l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u = (k || b).length,
            v = f[u];

        if (!v) {
          if (t = "auto" === b.grid ? 0 : (b.grid || [1 / 0])[0], !t) {
            for (r = -(1 / 0); r < (r = k[t++].getBoundingClientRect().left) && u > t;) {
              ;
            }

            t--;
          }

          for (v = f[u] = [], l = g ? Math.min(t, u) * i - .5 : d % t, m = g ? u * i / t - .5 : d / t | 0, r = 0, s = 1 / 0, q = 0; u > q; q++) {
            n = q % t - l, o = m - (q / t | 0), v[q] = p = h ? Math.abs("y" === h ? o : n) : Math.sqrt(n * n + o * o), p > r && (r = p), s > p && (s = p);
          }

          v.max = r - s, v.min = s, v.v = u = b.amount || b.each * (t > u ? u - 1 : h ? "y" === h ? u / t : t : Math.max(t, u / t)) || 0, v.b = 0 > u ? e - u : e;
        }

        return u = (v[a] - v.min) / v.max, v.b + (c ? c.getRatio(u) : u) * v.v;
      };
    },
        g = function g(a, b, d) {
      c.call(this, a, b, d), this._cycle = 0, this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = g.prototype.render;
    },
        h = 1e-8,
        i = c._internals,
        j = i.isSelector,
        k = i.isArray,
        l = g.prototype = c.to({}, .1, {}),
        m = [];

    g.version = "2.1.3", l.constructor = g, l.kill()._gc = !1, g.killTweensOf = g.killDelayedCallsTo = c.killTweensOf, g.getTweensOf = c.getTweensOf, g.lagSmoothing = c.lagSmoothing, g.ticker = c.ticker, g.render = c.render, g.distribute = f, l.invalidate = function () {
      return this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), c.prototype.invalidate.call(this);
    }, l.updateTo = function (a, b) {
      var d,
          e = this,
          f = e.ratio,
          g = e.vars.immediateRender || a.immediateRender;
      b && e._startTime < e._timeline._time && (e._startTime = e._timeline._time, e._uncache(!1), e._gc ? e._enabled(!0, !1) : e._timeline.insert(e, e._startTime - e._delay));

      for (d in a) {
        e.vars[d] = a[d];
      }

      if (e._initted || g) if (b) e._initted = !1, g && e.render(0, !0, !0);else if (e._gc && e._enabled(!0, !1), e._notifyPluginsOfEnabled && e._firstPT && c._onPluginEvent("_onDisable", e), e._time / e._duration > .998) {
        var h = e._totalTime;
        e.render(0, !0, !1), e._initted = !1, e.render(h, !0, !1);
      } else if (e._initted = !1, e._init(), e._time > 0 || g) for (var i, j = 1 / (1 - f), k = e._firstPT; k;) {
        i = k.s + k.c, k.c *= j, k.s = i - k.c, k = k._next;
      }
      return e;
    }, l.render = function (a, b, d) {
      this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
      var e,
          f,
          g,
          j,
          k,
          l,
          m,
          n,
          o,
          p = this,
          q = p._dirty ? p.totalDuration() : p._totalDuration,
          r = p._time,
          s = p._totalTime,
          t = p._cycle,
          u = p._duration,
          v = p._rawPrevTime;
      if (a >= q - h && a >= 0 ? (p._totalTime = q, p._cycle = p._repeat, p._yoyo && 0 !== (1 & p._cycle) ? (p._time = 0, p.ratio = p._ease._calcEnd ? p._ease.getRatio(0) : 0) : (p._time = u, p.ratio = p._ease._calcEnd ? p._ease.getRatio(1) : 1), p._reversed || (e = !0, f = "onComplete", d = d || p._timeline.autoRemoveChildren), 0 === u && (p._initted || !p.vars.lazy || d) && (p._startTime === p._timeline._duration && (a = 0), (0 > v || 0 >= a && a >= -h || v === h && "isPause" !== p.data) && v !== a && (d = !0, v > h && (f = "onReverseComplete")), p._rawPrevTime = n = !b || a || v === a ? a : h)) : h > a ? (p._totalTime = p._time = p._cycle = 0, p.ratio = p._ease._calcEnd ? p._ease.getRatio(0) : 0, (0 !== s || 0 === u && v > 0) && (f = "onReverseComplete", e = p._reversed), a > -h ? a = 0 : 0 > a && (p._active = !1, 0 === u && (p._initted || !p.vars.lazy || d) && (v >= 0 && (d = !0), p._rawPrevTime = n = !b || a || v === a ? a : h)), p._initted || (d = !0)) : (p._totalTime = p._time = a, 0 !== p._repeat && (j = u + p._repeatDelay, p._cycle = p._totalTime / j >> 0, 0 !== p._cycle && p._cycle === p._totalTime / j && a >= s && p._cycle--, p._time = p._totalTime - p._cycle * j, p._yoyo && 0 !== (1 & p._cycle) && (p._time = u - p._time, o = p._yoyoEase || p.vars.yoyoEase, o && (p._yoyoEase || (o !== !0 || p._initted ? p._yoyoEase = o = o === !0 ? p._ease : o instanceof Ease ? o : Ease.map[o] : (o = p.vars.ease, p._yoyoEase = o = o ? o instanceof Ease ? o : "function" == typeof o ? new Ease(o, p.vars.easeParams) : Ease.map[o] || c.defaultEase : c.defaultEase)), p.ratio = o ? 1 - o.getRatio((u - p._time) / u) : 0)), p._time > u ? p._time = u : p._time < 0 && (p._time = 0)), p._easeType && !o ? (k = p._time / u, l = p._easeType, m = p._easePower, (1 === l || 3 === l && k >= .5) && (k = 1 - k), 3 === l && (k *= 2), 1 === m ? k *= k : 2 === m ? k *= k * k : 3 === m ? k *= k * k * k : 4 === m && (k *= k * k * k * k), p.ratio = 1 === l ? 1 - k : 2 === l ? k : p._time / u < .5 ? k / 2 : 1 - k / 2) : o || (p.ratio = p._ease.getRatio(p._time / u))), r === p._time && !d && t === p._cycle) return void (s !== p._totalTime && p._onUpdate && (b || p._callback("onUpdate")));

      if (!p._initted) {
        if (p._init(), !p._initted || p._gc) return;
        if (!d && p._firstPT && (p.vars.lazy !== !1 && p._duration || p.vars.lazy && !p._duration)) return p._time = r, p._totalTime = s, p._rawPrevTime = v, p._cycle = t, i.lazyTweens.push(p), void (p._lazy = [a, b]);
        !p._time || e || o ? e && this._ease._calcEnd && !o && (p.ratio = p._ease.getRatio(0 === p._time ? 0 : 1)) : p.ratio = p._ease.getRatio(p._time / u);
      }

      for (p._lazy !== !1 && (p._lazy = !1), p._active || !p._paused && p._time !== r && a >= 0 && (p._active = !0), 0 === s && (2 === p._initted && a > 0 && p._init(), p._startAt && (a >= 0 ? p._startAt.render(a, !0, d) : f || (f = "_dummyGS")), p.vars.onStart && (0 !== p._totalTime || 0 === u) && (b || p._callback("onStart"))), g = p._firstPT; g;) {
        g.f ? g.t[g.p](g.c * p.ratio + g.s) : g.t[g.p] = g.c * p.ratio + g.s, g = g._next;
      }

      p._onUpdate && (0 > a && p._startAt && p._startTime && p._startAt.render(a, !0, d), b || (p._totalTime !== s || f) && p._callback("onUpdate")), p._cycle !== t && (b || p._gc || p.vars.onRepeat && p._callback("onRepeat")), f && (!p._gc || d) && (0 > a && p._startAt && !p._onUpdate && p._startTime && p._startAt.render(a, !0, d), e && (p._timeline.autoRemoveChildren && p._enabled(!1, !1), p._active = !1), !b && p.vars[f] && p._callback(f), 0 === u && p._rawPrevTime === h && n !== h && (p._rawPrevTime = 0));
    }, g.to = function (a, b, c) {
      return new g(a, b, c);
    }, g.from = function (a, b, c) {
      return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new g(a, b, c);
    }, g.fromTo = function (a, b, c, d) {
      return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new g(a, b, d);
    }, g.staggerTo = g.allTo = function (a, b, h, i, l, n, o) {
      var p,
          q,
          r,
          s,
          t = [],
          u = f(h.stagger || i),
          v = h.cycle,
          w = (h.startAt || m).cycle;

      for (k(a) || ("string" == typeof a && (a = c.selector(a) || a), j(a) && (a = d(a))), a = a || [], p = a.length - 1, r = 0; p >= r; r++) {
        q = {};

        for (s in h) {
          q[s] = h[s];
        }

        if (v && (e(q, a, r), null != q.duration && (b = q.duration, delete q.duration)), w) {
          w = q.startAt = {};

          for (s in h.startAt) {
            w[s] = h.startAt[s];
          }

          e(q.startAt, a, r);
        }

        q.delay = u(r, a[r], a) + (q.delay || 0), r === p && l && (q.onComplete = function () {
          h.onComplete && h.onComplete.apply(h.onCompleteScope || this, arguments), l.apply(o || h.callbackScope || this, n || m);
        }), t[r] = new g(a[r], b, q);
      }

      return t;
    }, g.staggerFrom = g.allFrom = function (a, b, c, d, e, f, h) {
      return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, g.staggerTo(a, b, c, d, e, f, h);
    }, g.staggerFromTo = g.allFromTo = function (a, b, c, d, e, f, h, i) {
      return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, g.staggerTo(a, b, d, e, f, h, i);
    }, g.delayedCall = function (a, b, c, d, e) {
      return new g(b, 0, {
        delay: a,
        onComplete: b,
        onCompleteParams: c,
        callbackScope: d,
        onReverseComplete: b,
        onReverseCompleteParams: c,
        immediateRender: !1,
        useFrames: e,
        overwrite: 0
      });
    }, g.set = function (a, b) {
      return new g(a, 0, b);
    }, g.isTweening = function (a) {
      return c.getTweensOf(a, !0).length > 0;
    };

    var n = function n(a, b) {
      for (var d = [], e = 0, f = a._first; f;) {
        f instanceof c ? d[e++] = f : (b && (d[e++] = f), d = d.concat(n(f, b)), e = d.length), f = f._next;
      }

      return d;
    },
        o = g.getAllTweens = function (b) {
      return n(a._rootTimeline, b).concat(n(a._rootFramesTimeline, b));
    };

    g.killAll = function (a, c, d, e) {
      null == c && (c = !0), null == d && (d = !0);
      var f,
          g,
          h,
          i = o(0 != e),
          j = i.length,
          k = c && d && e;

      for (h = 0; j > h; h++) {
        g = i[h], (k || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && (a ? g.totalTime(g._reversed ? 0 : g.totalDuration()) : g._enabled(!1, !1));
      }
    }, g.killChildTweensOf = function (a, b) {
      if (null != a) {
        var e,
            f,
            h,
            l,
            m,
            n = i.tweenLookup;
        if ("string" == typeof a && (a = c.selector(a) || a), j(a) && (a = d(a)), k(a)) for (l = a.length; --l > -1;) {
          g.killChildTweensOf(a[l], b);
        } else {
          e = [];

          for (h in n) {
            for (f = n[h].target.parentNode; f;) {
              f === a && (e = e.concat(n[h].tweens)), f = f.parentNode;
            }
          }

          for (m = e.length, l = 0; m > l; l++) {
            b && e[l].totalTime(e[l].totalDuration()), e[l]._enabled(!1, !1);
          }
        }
      }
    };

    var p = function p(a, c, d, e) {
      c = c !== !1, d = d !== !1, e = e !== !1;

      for (var f, g, h = o(e), i = c && d && e, j = h.length; --j > -1;) {
        g = h[j], (i || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && g.paused(a);
      }
    };

    return g.pauseAll = function (a, b, c) {
      p(!0, a, b, c);
    }, g.resumeAll = function (a, b, c) {
      p(!1, a, b, c);
    }, g.globalTimeScale = function (b) {
      var d = a._rootTimeline,
          e = c.ticker.time;
      return arguments.length ? (b = b || h, d._startTime = e - (e - d._startTime) * d._timeScale / b, d = a._rootFramesTimeline, e = c.ticker.frame, d._startTime = e - (e - d._startTime) * d._timeScale / b, d._timeScale = a._rootTimeline._timeScale = b, b) : d._timeScale;
    }, l.progress = function (a, b) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this.duration() ? this._time / this._duration : this.ratio;
    }, l.totalProgress = function (a, b) {
      return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration();
    }, l.time = function (a, b) {
      if (!arguments.length) return this._time;
      this._dirty && this.totalDuration();
      var c = this._duration,
          d = this._cycle,
          e = d * (c + this._repeatDelay);
      return a > c && (a = c), this.totalTime(this._yoyo && 1 & d ? c - a + e : this._repeat ? a + e : a, b);
    }, l.duration = function (b) {
      return arguments.length ? a.prototype.duration.call(this, b) : this._duration;
    }, l.totalDuration = function (a) {
      return arguments.length ? -1 === this._repeat ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration);
    }, l.repeat = function (a) {
      return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat;
    }, l.repeatDelay = function (a) {
      return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay;
    }, l.yoyo = function (a) {
      return arguments.length ? (this._yoyo = a, this) : this._yoyo;
    }, g;
  }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (a, b, c) {
    var d = function d(a) {
      b.call(this, a);
      var c,
          d,
          e = this,
          f = e.vars;
      e._labels = {}, e.autoRemoveChildren = !!f.autoRemoveChildren, e.smoothChildTiming = !!f.smoothChildTiming, e._sortChildren = !0, e._onUpdate = f.onUpdate;

      for (d in f) {
        c = f[d], i(c) && -1 !== c.join("").indexOf("{self}") && (f[d] = e._swapSelfInParams(c));
      }

      i(f.tweens) && e.add(f.tweens, 0, f.align, f.stagger);
    },
        e = 1e-8,
        f = c._internals,
        g = d._internals = {},
        h = f.isSelector,
        i = f.isArray,
        j = f.lazyTweens,
        k = f.lazyRender,
        l = _gsScope._gsDefine.globals,
        m = function m(a) {
      var b,
          c = {};

      for (b in a) {
        c[b] = a[b];
      }

      return c;
    },
        n = function n(a, b, c) {
      var d,
          e,
          f = a.cycle;

      for (d in f) {
        e = f[d], a[d] = "function" == typeof e ? e(c, b[c], b) : e[c % e.length];
      }

      delete a.cycle;
    },
        o = g.pauseCallback = function () {},
        p = function p(a) {
      var b,
          c = [],
          d = a.length;

      for (b = 0; b !== d; c.push(a[b++])) {
        ;
      }

      return c;
    },
        q = function q(a, b, c, d) {
      var e = "immediateRender";
      return e in b || (b[e] = !(c && c[e] === !1 || d)), b;
    },
        r = function r(a) {
      if ("function" == typeof a) return a;
      var b = "object" == _typeof(a) ? a : {
        each: a
      },
          c = b.ease,
          d = b.from || 0,
          e = b.base || 0,
          f = {},
          g = isNaN(d),
          h = b.axis,
          i = {
        center: .5,
        end: 1
      }[d] || 0;
      return function (a, j, k) {
        var l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u = (k || b).length,
            v = f[u];

        if (!v) {
          if (t = "auto" === b.grid ? 0 : (b.grid || [1 / 0])[0], !t) {
            for (r = -(1 / 0); r < (r = k[t++].getBoundingClientRect().left) && u > t;) {
              ;
            }

            t--;
          }

          for (v = f[u] = [], l = g ? Math.min(t, u) * i - .5 : d % t, m = g ? u * i / t - .5 : d / t | 0, r = 0, s = 1 / 0, q = 0; u > q; q++) {
            n = q % t - l, o = m - (q / t | 0), v[q] = p = h ? Math.abs("y" === h ? o : n) : Math.sqrt(n * n + o * o), p > r && (r = p), s > p && (s = p);
          }

          v.max = r - s, v.min = s, v.v = u = b.amount || b.each * (t > u ? u - 1 : h ? "y" === h ? u / t : t : Math.max(t, u / t)) || 0, v.b = 0 > u ? e - u : e;
        }

        return u = (v[a] - v.min) / v.max, v.b + (c ? c.getRatio(u) : u) * v.v;
      };
    },
        s = d.prototype = new b();

    return d.version = "2.1.3", d.distribute = r, s.constructor = d, s.kill()._gc = s._forcingPlayhead = s._hasPause = !1, s.to = function (a, b, d, e) {
      var f = d.repeat && l.TweenMax || c;
      return b ? this.add(new f(a, b, d), e) : this.set(a, d, e);
    }, s.from = function (a, b, d, e) {
      return this.add((d.repeat && l.TweenMax || c).from(a, b, q(this, d)), e);
    }, s.fromTo = function (a, b, d, e, f) {
      var g = e.repeat && l.TweenMax || c;
      return e = q(this, e, d), b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f);
    }, s.staggerTo = function (a, b, e, f, g, i, j, k) {
      var l,
          o,
          q = new d({
        onComplete: i,
        onCompleteParams: j,
        callbackScope: k,
        smoothChildTiming: this.smoothChildTiming
      }),
          s = r(e.stagger || f),
          t = e.startAt,
          u = e.cycle;

      for ("string" == typeof a && (a = c.selector(a) || a), a = a || [], h(a) && (a = p(a)), o = 0; o < a.length; o++) {
        l = m(e), t && (l.startAt = m(t), t.cycle && n(l.startAt, a, o)), u && (n(l, a, o), null != l.duration && (b = l.duration, delete l.duration)), q.to(a[o], b, l, s(o, a[o], a));
      }

      return this.add(q, g);
    }, s.staggerFrom = function (a, b, c, d, e, f, g, h) {
      return c.runBackwards = !0, this.staggerTo(a, b, q(this, c), d, e, f, g, h);
    }, s.staggerFromTo = function (a, b, c, d, e, f, g, h, i) {
      return d.startAt = c, this.staggerTo(a, b, q(this, d, c), e, f, g, h, i);
    }, s.call = function (a, b, d, e) {
      return this.add(c.delayedCall(0, a, b, d), e);
    }, s.set = function (a, b, d) {
      return this.add(new c(a, 0, q(this, b, null, !0)), d);
    }, d.exportRoot = function (a, b) {
      a = a || {}, null == a.smoothChildTiming && (a.smoothChildTiming = !0);
      var e,
          f,
          g,
          h,
          i = new d(a),
          j = i._timeline;

      for (null == b && (b = !0), j._remove(i, !0), i._startTime = 0, i._rawPrevTime = i._time = i._totalTime = j._time, g = j._first; g;) {
        h = g._next, b && g instanceof c && g.target === g.vars.onComplete || (f = g._startTime - g._delay, 0 > f && (e = 1), i.add(g, f)), g = h;
      }

      return j.add(i, 0), e && i.totalDuration(), i;
    }, s.add = function (e, f, g, h) {
      var j,
          k,
          l,
          m,
          n,
          o,
          p = this;

      if ("number" != typeof f && (f = p._parseTimeOrLabel(f, 0, !0, e)), !(e instanceof a)) {
        if (e instanceof Array || e && e.push && i(e)) {
          for (g = g || "normal", h = h || 0, j = f, k = e.length, l = 0; k > l; l++) {
            i(m = e[l]) && (m = new d({
              tweens: m
            })), p.add(m, j), "string" != typeof m && "function" != typeof m && ("sequence" === g ? j = m._startTime + m.totalDuration() / m._timeScale : "start" === g && (m._startTime -= m.delay())), j += h;
          }

          return p._uncache(!0);
        }

        if ("string" == typeof e) return p.addLabel(e, f);
        if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
        e = c.delayedCall(0, e);
      }

      if (b.prototype.add.call(p, e, f), (e._time || !e._duration && e._initted) && (j = (p.rawTime() - e._startTime) * e._timeScale, (!e._duration || Math.abs(Math.max(0, Math.min(e.totalDuration(), j))) - e._totalTime > 1e-5) && e.render(j, !1, !1)), (p._gc || p._time === p._duration) && !p._paused && p._duration < p.duration()) for (n = p, o = n.rawTime() > e._startTime; n._timeline;) {
        o && n._timeline.smoothChildTiming ? n.totalTime(n._totalTime, !0) : n._gc && n._enabled(!0, !1), n = n._timeline;
      }
      return p;
    }, s.remove = function (b) {
      if (b instanceof a) {
        this._remove(b, !1);

        var c = b._timeline = b.vars.useFrames ? a._rootFramesTimeline : a._rootTimeline;
        return b._startTime = (b._paused ? b._pauseTime : c._time) - (b._reversed ? b.totalDuration() - b._totalTime : b._totalTime) / b._timeScale, this;
      }

      if (b instanceof Array || b && b.push && i(b)) {
        for (var d = b.length; --d > -1;) {
          this.remove(b[d]);
        }

        return this;
      }

      return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b);
    }, s._remove = function (a, c) {
      b.prototype._remove.call(this, a, c);

      var d = this._last;
      return d ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this;
    }, s.append = function (a, b) {
      return this.add(a, this._parseTimeOrLabel(null, b, !0, a));
    }, s.insert = s.insertMultiple = function (a, b, c, d) {
      return this.add(a, b || 0, c, d);
    }, s.appendMultiple = function (a, b, c, d) {
      return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d);
    }, s.addLabel = function (a, b) {
      return this._labels[a] = this._parseTimeOrLabel(b), this;
    }, s.addPause = function (a, b, d, e) {
      var f = c.delayedCall(0, o, d, e || this);
      return f.vars.onComplete = f.vars.onReverseComplete = b, f.data = "isPause", this._hasPause = !0, this.add(f, a);
    }, s.removeLabel = function (a) {
      return delete this._labels[a], this;
    }, s.getLabelTime = function (a) {
      return null != this._labels[a] ? this._labels[a] : -1;
    }, s._parseTimeOrLabel = function (b, c, d, e) {
      var f, g;
      if (e instanceof a && e.timeline === this) this.remove(e);else if (e && (e instanceof Array || e.push && i(e))) for (g = e.length; --g > -1;) {
        e[g] instanceof a && e[g].timeline === this && this.remove(e[g]);
      }
      if (f = "number" != typeof b || c ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof c) return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - f : 0, d);
      if (c = c || 0, "string" != typeof b || !isNaN(b) && null == this._labels[b]) null == b && (b = f);else {
        if (g = b.indexOf("="), -1 === g) return null == this._labels[b] ? d ? this._labels[b] = f + c : c : this._labels[b] + c;
        c = parseInt(b.charAt(g - 1) + "1", 10) * Number(b.substr(g + 1)), b = g > 1 ? this._parseTimeOrLabel(b.substr(0, g - 1), 0, d) : f;
      }
      return Number(b) + c;
    }, s.seek = function (a, b) {
      return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), b !== !1);
    }, s.stop = function () {
      return this.paused(!0);
    }, s.gotoAndPlay = function (a, b) {
      return this.play(a, b);
    }, s.gotoAndStop = function (a, b) {
      return this.pause(a, b);
    }, s.render = function (a, b, c) {
      this._gc && this._enabled(!0, !1);
      var d,
          f,
          g,
          h,
          i,
          l,
          m,
          n,
          o = this,
          p = o._time,
          q = o._dirty ? o.totalDuration() : o._totalDuration,
          r = o._startTime,
          s = o._timeScale,
          t = o._paused;

      if (p !== o._time && (a += o._time - p), o._hasPause && !o._forcingPlayhead && !b) {
        if (a > p) for (d = o._first; d && d._startTime <= a && !l;) {
          d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === o._rawPrevTime || (l = d), d = d._next;
        } else for (d = o._last; d && d._startTime >= a && !l;) {
          d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (l = d), d = d._prev;
        }
        l && (o._time = o._totalTime = a = l._startTime, n = o._startTime + (o._reversed ? o._duration - a : a) / o._timeScale);
      }

      if (a >= q - e && a >= 0) o._totalTime = o._time = q, o._reversed || o._hasPausedChild() || (f = !0, h = "onComplete", i = !!o._timeline.autoRemoveChildren, 0 === o._duration && (0 >= a && a >= -e || o._rawPrevTime < 0 || o._rawPrevTime === e) && o._rawPrevTime !== a && o._first && (i = !0, o._rawPrevTime > e && (h = "onReverseComplete"))), o._rawPrevTime = o._duration || !b || a || o._rawPrevTime === a ? a : e, a = q + 1e-4;else if (e > a) {
        if (o._totalTime = o._time = 0, a > -e && (a = 0), (0 !== p || 0 === o._duration && o._rawPrevTime !== e && (o._rawPrevTime > 0 || 0 > a && o._rawPrevTime >= 0)) && (h = "onReverseComplete", f = o._reversed), 0 > a) o._active = !1, o._timeline.autoRemoveChildren && o._reversed ? (i = f = !0, h = "onReverseComplete") : o._rawPrevTime >= 0 && o._first && (i = !0), o._rawPrevTime = a;else {
          if (o._rawPrevTime = o._duration || !b || a || o._rawPrevTime === a ? a : e, 0 === a && f) for (d = o._first; d && 0 === d._startTime;) {
            d._duration || (f = !1), d = d._next;
          }
          a = 0, o._initted || (i = !0);
        }
      } else o._totalTime = o._time = o._rawPrevTime = a;

      if (o._time !== p && o._first || c || i || l) {
        if (o._initted || (o._initted = !0), o._active || !o._paused && o._time !== p && a > 0 && (o._active = !0), 0 === p && o.vars.onStart && (0 === o._time && o._duration || b || o._callback("onStart")), m = o._time, m >= p) for (d = o._first; d && (g = d._next, m === o._time && (!o._paused || t));) {
          (d._active || d._startTime <= m && !d._paused && !d._gc) && (l === d && (o.pause(), o._pauseTime = n), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = g;
        } else for (d = o._last; d && (g = d._prev, m === o._time && (!o._paused || t));) {
          if (d._active || d._startTime <= p && !d._paused && !d._gc) {
            if (l === d) {
              for (l = d._prev; l && l.endTime() > o._time;) {
                l.render(l._reversed ? l.totalDuration() - (a - l._startTime) * l._timeScale : (a - l._startTime) * l._timeScale, b, c), l = l._prev;
              }

              l = null, o.pause(), o._pauseTime = n;
            }

            d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c);
          }

          d = g;
        }
        o._onUpdate && (b || (j.length && k(), o._callback("onUpdate"))), h && (o._gc || (r === o._startTime || s !== o._timeScale) && (0 === o._time || q >= o.totalDuration()) && (f && (j.length && k(), o._timeline.autoRemoveChildren && o._enabled(!1, !1), o._active = !1), !b && o.vars[h] && o._callback(h)));
      }
    }, s._hasPausedChild = function () {
      for (var a = this._first; a;) {
        if (a._paused || a instanceof d && a._hasPausedChild()) return !0;
        a = a._next;
      }

      return !1;
    }, s.getChildren = function (a, b, d, e) {
      e = e || -9999999999;

      for (var f = [], g = this._first, h = 0; g;) {
        g._startTime < e || (g instanceof c ? b !== !1 && (f[h++] = g) : (d !== !1 && (f[h++] = g), a !== !1 && (f = f.concat(g.getChildren(!0, b, d)), h = f.length))), g = g._next;
      }

      return f;
    }, s.getTweensOf = function (a, b) {
      var d,
          e,
          f = this._gc,
          g = [],
          h = 0;

      for (f && this._enabled(!0, !0), d = c.getTweensOf(a), e = d.length; --e > -1;) {
        (d[e].timeline === this || b && this._contains(d[e])) && (g[h++] = d[e]);
      }

      return f && this._enabled(!1, !0), g;
    }, s.recent = function () {
      return this._recent;
    }, s._contains = function (a) {
      for (var b = a.timeline; b;) {
        if (b === this) return !0;
        b = b.timeline;
      }

      return !1;
    }, s.shiftChildren = function (a, b, c) {
      c = c || 0;

      for (var d, e = this._first, f = this._labels; e;) {
        e._startTime >= c && (e._startTime += a), e = e._next;
      }

      if (b) for (d in f) {
        f[d] >= c && (f[d] += a);
      }
      return this._uncache(!0);
    }, s._kill = function (a, b) {
      if (!a && !b) return this._enabled(!1, !1);

      for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1;) {
        c[d]._kill(a, b) && (e = !0);
      }

      return e;
    }, s.clear = function (a) {
      var b = this.getChildren(!1, !0, !0),
          c = b.length;

      for (this._time = this._totalTime = 0; --c > -1;) {
        b[c]._enabled(!1, !1);
      }

      return a !== !1 && (this._labels = {}), this._uncache(!0);
    }, s.invalidate = function () {
      for (var b = this._first; b;) {
        b.invalidate(), b = b._next;
      }

      return a.prototype.invalidate.call(this);
    }, s._enabled = function (a, c) {
      if (a === this._gc) for (var d = this._first; d;) {
        d._enabled(a, !0), d = d._next;
      }
      return b.prototype._enabled.call(this, a, c);
    }, s.totalTime = function (b, c, d) {
      this._forcingPlayhead = !0;
      var e = a.prototype.totalTime.apply(this, arguments);
      return this._forcingPlayhead = !1, e;
    }, s.duration = function (a) {
      return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this) : (this._dirty && this.totalDuration(), this._duration);
    }, s.totalDuration = function (a) {
      if (!arguments.length) {
        if (this._dirty) {
          for (var b, c, d = 0, e = this, f = e._last, g = 999999999999; f;) {
            b = f._prev, f._dirty && f.totalDuration(), f._startTime > g && e._sortChildren && !f._paused && !e._calculatingDuration ? (e._calculatingDuration = 1, e.add(f, f._startTime - f._delay), e._calculatingDuration = 0) : g = f._startTime, f._startTime < 0 && !f._paused && (d -= f._startTime, e._timeline.smoothChildTiming && (e._startTime += f._startTime / e._timeScale, e._time -= f._startTime, e._totalTime -= f._startTime, e._rawPrevTime -= f._startTime), e.shiftChildren(-f._startTime, !1, -9999999999), g = 0), c = f._startTime + f._totalDuration / f._timeScale, c > d && (d = c), f = b;
          }

          e._duration = e._totalDuration = d, e._dirty = !1;
        }

        return this._totalDuration;
      }

      return a && this.totalDuration() ? this.timeScale(this._totalDuration / a) : this;
    }, s.paused = function (b) {
      if (b === !1 && this._paused) for (var c = this._first; c;) {
        c._startTime === this._time && "isPause" === c.data && (c._rawPrevTime = 0), c = c._next;
      }
      return a.prototype.paused.apply(this, arguments);
    }, s.usesFrames = function () {
      for (var b = this._timeline; b._timeline;) {
        b = b._timeline;
      }

      return b === a._rootFramesTimeline;
    }, s.rawTime = function (a) {
      return a && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(a) - this._startTime) * this._timeScale;
    }, d;
  }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (a, b, c) {
    var d = function d(b) {
      a.call(this, b), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !!this.vars.yoyo, this._dirty = !0;
    },
        e = 1e-8,
        f = b._internals,
        g = f.lazyTweens,
        h = f.lazyRender,
        i = _gsScope._gsDefine.globals,
        j = new c(null, null, 1, 0),
        k = d.prototype = new a();

    return k.constructor = d, k.kill()._gc = !1, d.version = "2.1.3", k.invalidate = function () {
      return this._yoyo = !!this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), a.prototype.invalidate.call(this);
    }, k.addCallback = function (a, c, d, e) {
      return this.add(b.delayedCall(0, a, d, e), c);
    }, k.removeCallback = function (a, b) {
      if (a) if (null == b) this._kill(null, a);else for (var c = this.getTweensOf(a, !1), d = c.length, e = this._parseTimeOrLabel(b); --d > -1;) {
        c[d]._startTime === e && c[d]._enabled(!1, !1);
      }
      return this;
    }, k.removePause = function (b) {
      return this.removeCallback(a._internals.pauseCallback, b);
    }, k.tweenTo = function (a, c) {
      c = c || {};
      var d,
          e,
          f,
          g = {
        ease: j,
        useFrames: this.usesFrames(),
        immediateRender: !1,
        lazy: !1
      },
          h = c.repeat && i.TweenMax || b;

      for (e in c) {
        g[e] = c[e];
      }

      return g.time = this._parseTimeOrLabel(a), d = Math.abs(Number(g.time) - this._time) / this._timeScale || .001, f = new h(this, d, g), g.onStart = function () {
        f.target.paused(!0), f.vars.time === f.target.time() || d !== f.duration() || f.isFromTo || f.duration(Math.abs(f.vars.time - f.target.time()) / f.target._timeScale).render(f.time(), !0, !0), c.onStart && c.onStart.apply(c.onStartScope || c.callbackScope || f, c.onStartParams || []);
      }, f;
    }, k.tweenFromTo = function (a, b, c) {
      c = c || {}, a = this._parseTimeOrLabel(a), c.startAt = {
        onComplete: this.seek,
        onCompleteParams: [a],
        callbackScope: this
      }, c.immediateRender = c.immediateRender !== !1;
      var d = this.tweenTo(b, c);
      return d.isFromTo = 1, d.duration(Math.abs(d.vars.time - a) / this._timeScale || .001);
    }, k.render = function (a, b, c) {
      this._gc && this._enabled(!0, !1);
      var d,
          f,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p = this,
          q = p._time,
          r = p._dirty ? p.totalDuration() : p._totalDuration,
          s = p._duration,
          t = p._totalTime,
          u = p._startTime,
          v = p._timeScale,
          w = p._rawPrevTime,
          x = p._paused,
          y = p._cycle;
      if (q !== p._time && (a += p._time - q), a >= r - e && a >= 0) p._locked || (p._totalTime = r, p._cycle = p._repeat), p._reversed || p._hasPausedChild() || (f = !0, j = "onComplete", k = !!p._timeline.autoRemoveChildren, 0 === p._duration && (0 >= a && a >= -e || 0 > w || w === e) && w !== a && p._first && (k = !0, w > e && (j = "onReverseComplete"))), p._rawPrevTime = p._duration || !b || a || p._rawPrevTime === a ? a : e, p._yoyo && 1 & p._cycle ? p._time = a = 0 : (p._time = s, a = s + 1e-4);else if (e > a) {
        if (p._locked || (p._totalTime = p._cycle = 0), p._time = 0, a > -e && (a = 0), (0 !== q || 0 === s && w !== e && (w > 0 || 0 > a && w >= 0) && !p._locked) && (j = "onReverseComplete", f = p._reversed), 0 > a) p._active = !1, p._timeline.autoRemoveChildren && p._reversed ? (k = f = !0, j = "onReverseComplete") : w >= 0 && p._first && (k = !0), p._rawPrevTime = a;else {
          if (p._rawPrevTime = s || !b || a || p._rawPrevTime === a ? a : e, 0 === a && f) for (d = p._first; d && 0 === d._startTime;) {
            d._duration || (f = !1), d = d._next;
          }
          a = 0, p._initted || (k = !0);
        }
      } else 0 === s && 0 > w && (k = !0), p._time = p._rawPrevTime = a, p._locked || (p._totalTime = a, 0 !== p._repeat && (l = s + p._repeatDelay, p._cycle = p._totalTime / l >> 0, p._cycle && p._cycle === p._totalTime / l && a >= t && p._cycle--, p._time = p._totalTime - p._cycle * l, p._yoyo && 1 & p._cycle && (p._time = s - p._time), p._time > s ? (p._time = s, a = s + 1e-4) : p._time < 0 ? p._time = a = 0 : a = p._time));

      if (p._hasPause && !p._forcingPlayhead && !b) {
        if (a = p._time, a > q || p._repeat && y !== p._cycle) for (d = p._first; d && d._startTime <= a && !m;) {
          d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === p._rawPrevTime || (m = d), d = d._next;
        } else for (d = p._last; d && d._startTime >= a && !m;) {
          d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (m = d), d = d._prev;
        }
        m && (o = p._startTime + (p._reversed ? p._duration - m._startTime : m._startTime) / p._timeScale, m._startTime < s && (p._time = p._rawPrevTime = a = m._startTime, p._totalTime = a + p._cycle * (p._totalDuration + p._repeatDelay)));
      }

      if (p._cycle !== y && !p._locked) {
        var z = p._yoyo && 0 !== (1 & y),
            A = z === (p._yoyo && 0 !== (1 & p._cycle)),
            B = p._totalTime,
            C = p._cycle,
            D = p._rawPrevTime,
            E = p._time;
        if (p._totalTime = y * s, p._cycle < y ? z = !z : p._totalTime += s, p._time = q, p._rawPrevTime = 0 === s ? w - 1e-4 : w, p._cycle = y, p._locked = !0, q = z ? 0 : s, p.render(q, b, 0 === s), b || p._gc || p.vars.onRepeat && (p._cycle = C, p._locked = !1, p._callback("onRepeat")), q !== p._time) return;
        if (A && (p._cycle = y, p._locked = !0, q = z ? s + 1e-4 : -1e-4, p.render(q, !0, !1)), p._locked = !1, p._paused && !x) return;
        p._time = E, p._totalTime = B, p._cycle = C, p._rawPrevTime = D;
      }

      if (!(p._time !== q && p._first || c || k || m)) return void (t !== p._totalTime && p._onUpdate && (b || p._callback("onUpdate")));
      if (p._initted || (p._initted = !0), p._active || !p._paused && p._totalTime !== t && a > 0 && (p._active = !0), 0 === t && p.vars.onStart && (0 === p._totalTime && p._totalDuration || b || p._callback("onStart")), n = p._time, n >= q) for (d = p._first; d && (i = d._next, n === p._time && (!p._paused || x));) {
        (d._active || d._startTime <= p._time && !d._paused && !d._gc) && (m === d && (p.pause(), p._pauseTime = o), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = i;
      } else for (d = p._last; d && (i = d._prev, n === p._time && (!p._paused || x));) {
        if (d._active || d._startTime <= q && !d._paused && !d._gc) {
          if (m === d) {
            for (m = d._prev; m && m.endTime() > p._time;) {
              m.render(m._reversed ? m.totalDuration() - (a - m._startTime) * m._timeScale : (a - m._startTime) * m._timeScale, b, c), m = m._prev;
            }

            m = null, p.pause(), p._pauseTime = o;
          }

          d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c);
        }

        d = i;
      }
      p._onUpdate && (b || (g.length && h(), p._callback("onUpdate"))), j && (p._locked || p._gc || (u === p._startTime || v !== p._timeScale) && (0 === p._time || r >= p.totalDuration()) && (f && (g.length && h(), p._timeline.autoRemoveChildren && p._enabled(!1, !1), p._active = !1), !b && p.vars[j] && p._callback(j)));
    }, k.getActive = function (a, b, c) {
      var d,
          e,
          f = [],
          g = this.getChildren(a || null == a, b || null == a, !!c),
          h = 0,
          i = g.length;

      for (d = 0; i > d; d++) {
        e = g[d], e.isActive() && (f[h++] = e);
      }

      return f;
    }, k.getLabelAfter = function (a) {
      a || 0 !== a && (a = this._time);
      var b,
          c = this.getLabelsArray(),
          d = c.length;

      for (b = 0; d > b; b++) {
        if (c[b].time > a) return c[b].name;
      }

      return null;
    }, k.getLabelBefore = function (a) {
      null == a && (a = this._time);

      for (var b = this.getLabelsArray(), c = b.length; --c > -1;) {
        if (b[c].time < a) return b[c].name;
      }

      return null;
    }, k.getLabelsArray = function () {
      var a,
          b = [],
          c = 0;

      for (a in this._labels) {
        b[c++] = {
          time: this._labels[a],
          name: a
        };
      }

      return b.sort(function (a, b) {
        return a.time - b.time;
      }), b;
    }, k.invalidate = function () {
      return this._locked = !1, a.prototype.invalidate.call(this);
    }, k.progress = function (a, b) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration() || 0;
    }, k.totalProgress = function (a, b) {
      return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration() || 0;
    }, k.totalDuration = function (b) {
      return arguments.length ? -1 !== this._repeat && b ? this.timeScale(this.totalDuration() / b) : this : (this._dirty && (a.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration);
    }, k.time = function (a, b) {
      if (!arguments.length) return this._time;
      this._dirty && this.totalDuration();
      var c = this._duration,
          d = this._cycle,
          e = d * (c + this._repeatDelay);
      return a > c && (a = c), this.totalTime(this._yoyo && 1 & d ? c - a + e : this._repeat ? a + e : a, b);
    }, k.repeat = function (a) {
      return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat;
    }, k.repeatDelay = function (a) {
      return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay;
    }, k.yoyo = function (a) {
      return arguments.length ? (this._yoyo = a, this) : this._yoyo;
    }, k.currentLabel = function (a) {
      return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + e);
    }, d;
  }, !0), function () {
    var a = 180 / Math.PI,
        b = [],
        c = [],
        d = [],
        e = {},
        f = _gsScope._gsDefine.globals,
        g = function g(a, b, c, d) {
      c === d && (c = d - (d - b) / 1e6), a === b && (b = a + (c - a) / 1e6), this.a = a, this.b = b, this.c = c, this.d = d, this.da = d - a, this.ca = c - a, this.ba = b - a;
    },
        h = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
        i = function i(a, b, c, d) {
      var e = {
        a: a
      },
          f = {},
          g = {},
          h = {
        c: d
      },
          i = (a + b) / 2,
          j = (b + c) / 2,
          k = (c + d) / 2,
          l = (i + j) / 2,
          m = (j + k) / 2,
          n = (m - l) / 8;
      return e.b = i + (a - i) / 4, f.b = l + n, e.c = f.a = (e.b + f.b) / 2, f.c = g.a = (l + m) / 2, g.b = m - n, h.b = k + (d - k) / 4, g.c = h.a = (g.b + h.b) / 2, [e, f, g, h];
    },
        j = function j(a, e, f, g, h) {
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
          w = a.length - 1,
          x = 0,
          y = a[0].a;

      for (j = 0; w > j; j++) {
        n = a[x], k = n.a, l = n.d, m = a[x + 1].d, h ? (t = b[j], u = c[j], v = (u + t) * e * .25 / (g ? .5 : d[j] || .5), o = l - (l - k) * (g ? .5 * e : 0 !== t ? v / t : 0), p = l + (m - l) * (g ? .5 * e : 0 !== u ? v / u : 0), q = l - (o + ((p - o) * (3 * t / (t + u) + .5) / 4 || 0))) : (o = l - (l - k) * e * .5, p = l + (m - l) * e * .5, q = l - (o + p) / 2), o += q, p += q, n.c = r = o, 0 !== j ? n.b = y : n.b = y = n.a + .6 * (n.c - n.a), n.da = l - k, n.ca = r - k, n.ba = y - k, f ? (s = i(k, y, r, l), a.splice(x, 1, s[0], s[1], s[2], s[3]), x += 4) : x++, y = p;
      }

      n = a[x], n.b = y, n.c = y + .4 * (n.d - y), n.da = n.d - n.a, n.ca = n.c - n.a, n.ba = y - n.a, f && (s = i(n.a, y, n.c, n.d), a.splice(x, 1, s[0], s[1], s[2], s[3]));
    },
        k = function k(a, d, e, f) {
      var h,
          i,
          j,
          k,
          l,
          m,
          n = [];
      if (f) for (a = [f].concat(a), i = a.length; --i > -1;) {
        "string" == typeof (m = a[i][d]) && "=" === m.charAt(1) && (a[i][d] = f[d] + Number(m.charAt(0) + m.substr(2)));
      }
      if (h = a.length - 2, 0 > h) return n[0] = new g(a[0][d], 0, 0, a[0][d]), n;

      for (i = 0; h > i; i++) {
        j = a[i][d], k = a[i + 1][d], n[i] = new g(j, 0, 0, k), e && (l = a[i + 2][d], b[i] = (b[i] || 0) + (k - j) * (k - j), c[i] = (c[i] || 0) + (l - k) * (l - k));
      }

      return n[i] = new g(a[i][d], 0, 0, a[i + 1][d]), n;
    },
        l = function l(a, f, g, i, _l, m) {
      var n,
          o,
          p,
          q,
          r,
          s,
          t,
          u,
          v = {},
          w = [],
          x = m || a[0];
      _l = "string" == typeof _l ? "," + _l + "," : h, null == f && (f = 1);

      for (o in a[0]) {
        w.push(o);
      }

      if (a.length > 1) {
        for (u = a[a.length - 1], t = !0, n = w.length; --n > -1;) {
          if (o = w[n], Math.abs(x[o] - u[o]) > .05) {
            t = !1;
            break;
          }
        }

        t && (a = a.concat(), m && a.unshift(m), a.push(a[1]), m = a[a.length - 3]);
      }

      for (b.length = c.length = d.length = 0, n = w.length; --n > -1;) {
        o = w[n], e[o] = -1 !== _l.indexOf("," + o + ","), v[o] = k(a, o, e[o], m);
      }

      for (n = b.length; --n > -1;) {
        b[n] = Math.sqrt(b[n]), c[n] = Math.sqrt(c[n]);
      }

      if (!i) {
        for (n = w.length; --n > -1;) {
          if (e[o]) for (p = v[w[n]], s = p.length - 1, q = 0; s > q; q++) {
            r = p[q + 1].da / c[q] + p[q].da / b[q] || 0, d[q] = (d[q] || 0) + r * r;
          }
        }

        for (n = d.length; --n > -1;) {
          d[n] = Math.sqrt(d[n]);
        }
      }

      for (n = w.length, q = g ? 4 : 1; --n > -1;) {
        o = w[n], p = v[o], j(p, f, g, i, e[o]), t && (p.splice(0, q), p.splice(p.length - q, q));
      }

      return v;
    },
        m = function m(a, b, c) {
      b = b || "soft";
      var d,
          e,
          f,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p = {},
          q = "cubic" === b ? 3 : 2,
          r = "soft" === b,
          s = [];
      if (r && c && (a = [c].concat(a)), null == a || a.length < q + 1) throw "invalid Bezier data";

      for (m in a[0]) {
        s.push(m);
      }

      for (j = s.length; --j > -1;) {
        for (m = s[j], p[m] = i = [], n = 0, l = a.length, k = 0; l > k; k++) {
          d = null == c ? a[k][m] : "string" == typeof (o = a[k][m]) && "=" === o.charAt(1) ? c[m] + Number(o.charAt(0) + o.substr(2)) : Number(o), r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2), i[n++] = d;
        }

        for (l = n - q + 1, n = 0, k = 0; l > k; k += q) {
          d = i[k], e = i[k + 1], f = i[k + 2], h = 2 === q ? 0 : i[k + 3], i[n++] = o = 3 === q ? new g(d, e, f, h) : new g(d, (2 * e + d) / 3, (2 * e + f) / 3, f);
        }

        i.length = n;
      }

      return p;
    },
        n = function n(a, b, c) {
      for (var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length; --p > -1;) {
        for (m = a[p], f = m.a, g = m.d - f, h = m.c - f, i = m.b - f, d = e = 0, k = 1; c >= k; k++) {
          j = o * k, l = 1 - j, d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j), n = p * c + k - 1, b[n] = (b[n] || 0) + d * d;
        }
      }
    },
        o = function o(a, b) {
      b = b >> 0 || 6;
      var c,
          d,
          e,
          f,
          g = [],
          h = [],
          i = 0,
          j = 0,
          k = b - 1,
          l = [],
          m = [];

      for (c in a) {
        n(a[c], g, b);
      }

      for (e = g.length, d = 0; e > d; d++) {
        i += Math.sqrt(g[d]), f = d % b, m[f] = i, f === k && (j += i, f = d / b >> 0, l[f] = m, h[f] = j, i = 0, m = []);
      }

      return {
        length: j,
        lengths: h,
        segments: l
      };
    },
        p = _gsScope._gsDefine.plugin({
      propName: "bezier",
      priority: -1,
      version: "1.3.9",
      API: 2,
      global: !0,
      init: function init(a, b, c) {
        this._target = a, b instanceof Array && (b = {
          values: b
        }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10);
        var d,
            e,
            f,
            g,
            h,
            i = b.values || [],
            j = {},
            k = i[0],
            n = b.autoRotate || c.vars.orientToBezier;
        this._autoRotate = n ? n instanceof Array ? n : [["x", "y", "rotation", n === !0 ? 0 : Number(n) || 0]] : null;

        for (d in k) {
          this._props.push(d);
        }

        for (f = this._props.length; --f > -1;) {
          d = this._props[f], this._overwriteProps.push(d), e = this._func[d] = "function" == typeof a[d], j[d] = e ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : parseFloat(a[d]), h || j[d] !== i[0][d] && (h = j);
        }

        if (this._beziers = "cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type ? l(i, isNaN(b.curviness) ? 1 : b.curviness, !1, "thruBasic" === b.type, b.correlate, h) : m(i, b.type, j), this._segCount = this._beziers[d].length, this._timeRes) {
          var p = o(this._beziers, this._timeRes);
          this._length = p.length, this._lengths = p.lengths, this._segments = p.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length;
        }

        if (n = this._autoRotate) for (this._initialRotations = [], n[0] instanceof Array || (this._autoRotate = n = [n]), f = n.length; --f > -1;) {
          for (g = 0; 3 > g; g++) {
            d = n[f][g], this._func[d] = "function" == typeof a[d] ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)] : !1;
          }

          d = n[f][2], this._initialRotations[f] = (this._func[d] ? this._func[d].call(this._target) : this._target[d]) || 0, this._overwriteProps.push(d);
        }
        return this._startRatio = c.vars.runBackwards ? 1 : 0, !0;
      },
      set: function set(b) {
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
            n = this._segCount,
            o = this._func,
            p = this._target,
            q = b !== this._startRatio;

        if (this._timeRes) {
          if (k = this._lengths, l = this._curSeg, m = b * this._length, e = this._li, m > this._l2 && n - 1 > e) {
            for (j = n - 1; j > e && (this._l2 = k[++e]) <= m;) {
              ;
            }

            this._l1 = k[e - 1], this._li = e, this._curSeg = l = this._segments[e], this._s2 = l[this._s1 = this._si = 0];
          } else if (m < this._l1 && e > 0) {
            for (; e > 0 && (this._l1 = k[--e]) >= m;) {
              ;
            }

            0 === e && m < this._l1 ? this._l1 = 0 : e++, this._l2 = k[e], this._li = e, this._curSeg = l = this._segments[e], this._s1 = l[(this._si = l.length - 1) - 1] || 0, this._s2 = l[this._si];
          }

          if (c = e, m -= this._l1, e = this._si, m > this._s2 && e < l.length - 1) {
            for (j = l.length - 1; j > e && (this._s2 = l[++e]) <= m;) {
              ;
            }

            this._s1 = l[e - 1], this._si = e;
          } else if (m < this._s1 && e > 0) {
            for (; e > 0 && (this._s1 = l[--e]) >= m;) {
              ;
            }

            0 === e && m < this._s1 ? this._s1 = 0 : e++, this._s2 = l[e], this._si = e;
          }

          h = 1 === b ? 1 : (e + (m - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
        } else c = 0 > b ? 0 : b >= 1 ? n - 1 : n * b >> 0, h = (b - c * (1 / n)) * n;

        for (d = 1 - h, e = this._props.length; --e > -1;) {
          f = this._props[e], g = this._beziers[f][c], i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a, this._mod[f] && (i = this._mod[f](i, p)), o[f] ? p[f](i) : p[f] = i;
        }

        if (this._autoRotate) {
          var r,
              s,
              t,
              u,
              v,
              w,
              x,
              y = this._autoRotate;

          for (e = y.length; --e > -1;) {
            f = y[e][2], w = y[e][3] || 0, x = y[e][4] === !0 ? 1 : a, g = this._beziers[y[e][0]], r = this._beziers[y[e][1]], g && r && (g = g[c], r = r[c], s = g.a + (g.b - g.a) * h, u = g.b + (g.c - g.b) * h, s += (u - s) * h, u += (g.c + (g.d - g.c) * h - u) * h, t = r.a + (r.b - r.a) * h, v = r.b + (r.c - r.b) * h, t += (v - t) * h, v += (r.c + (r.d - r.c) * h - v) * h, i = q ? Math.atan2(v - t, u - s) * x + w : this._initialRotations[e], this._mod[f] && (i = this._mod[f](i, p)), o[f] ? p[f](i) : p[f] = i);
          }
        }
      }
    }),
        q = p.prototype;

    p.bezierThrough = l, p.cubicToQuadratic = i, p._autoCSS = !0, p.quadraticToCubic = function (a, b, c) {
      return new g(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
    }, p._cssRegister = function () {
      var a = f.CSSPlugin;

      if (a) {
        var b = a._internals,
            c = b._parseToProxy,
            d = b._setPluginRatio,
            e = b.CSSPropTween;

        b._registerComplexSpecialProp("bezier", {
          parser: function parser(a, b, f, g, h, i) {
            b instanceof Array && (b = {
              values: b
            }), i = new p();
            var j,
                k,
                l,
                m = b.values,
                n = m.length - 1,
                o = [],
                q = {};
            if (0 > n) return h;

            for (j = 0; n >= j; j++) {
              l = c(a, m[j], g, h, i, n !== j), o[j] = l.end;
            }

            for (k in b) {
              q[k] = b[k];
            }

            return q.values = o, h = new e(a, "bezier", 0, 0, l.pt, 2), h.data = l, h.plugin = i, h.setRatio = d, 0 === q.autoRotate && (q.autoRotate = !0), !q.autoRotate || q.autoRotate instanceof Array || (j = q.autoRotate === !0 ? 0 : Number(q.autoRotate), q.autoRotate = null != l.end.left ? [["left", "top", "rotation", j, !1]] : null != l.end.x ? [["x", "y", "rotation", j, !1]] : !1), q.autoRotate && (g._transform || g._enableTransforms(!1), l.autoRotate = g._target._gsTransform, l.proxy.rotation = l.autoRotate.rotation || 0, g._overwriteProps.push("rotation")), i._onInitTween(l.proxy, q, g._tween), h;
          }
        });
      }
    }, q._mod = function (a) {
      for (var b, c = this._overwriteProps, d = c.length; --d > -1;) {
        b = a[c[d]], b && "function" == typeof b && (this._mod[c[d]] = b);
      }
    }, q._kill = function (a) {
      var b,
          c,
          d = this._props;

      for (b in this._beziers) {
        if (b in a) for (delete this._beziers[b], delete this._func[b], c = d.length; --c > -1;) {
          d[c] === b && d.splice(c, 1);
        }
      }

      if (d = this._autoRotate) for (c = d.length; --c > -1;) {
        a[d[c][2]] && d.splice(c, 1);
      }
      return this._super._kill.call(this, a);
    };
  }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (a, b) {
    var c,
        d,
        e,
        f,
        g = function g() {
      a.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = g.prototype.setRatio;
    },
        h = _gsScope._gsDefine.globals,
        i = {},
        j = g.prototype = new a("css");

    j.constructor = g, g.version = "2.1.3", g.API = 2, g.defaultTransformPerspective = 0, g.defaultSkewType = "compensated", g.defaultSmoothOrigin = !0, j = "px", g.suffixMap = {
      top: j,
      right: j,
      bottom: j,
      left: j,
      width: j,
      height: j,
      fontSize: j,
      padding: j,
      margin: j,
      perspective: j,
      lineHeight: ""
    };

    var k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
        t = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
        u = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
        v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi,
        w = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
        x = /(?:\d|\-|\+|=|#|\.)*/g,
        y = /opacity *= *([^)]*)/i,
        z = /opacity:([^;]*)/i,
        A = /alpha\(opacity *=.+?\)/i,
        B = /^(rgb|hsl)/,
        C = /([A-Z])/g,
        D = /-([a-z])/gi,
        E = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
        F = function F(a, b) {
      return b.toUpperCase();
    },
        G = /(?:Left|Right|Width)/i,
        H = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
        I = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
        J = /,(?=[^\)]*(?:\(|$))/gi,
        K = /[\s,\(]/i,
        L = Math.PI / 180,
        M = 180 / Math.PI,
        N = {},
        O = {
      style: {}
    },
        P = _gsScope.document || {
      createElement: function createElement() {
        return O;
      }
    },
        Q = function Q(a, b) {
      var c = P.createElementNS ? P.createElementNS(b || "http://www.w3.org/1999/xhtml", a) : P.createElement(a);
      return c.style ? c : P.createElement(a);
    },
        R = Q("div"),
        S = Q("img"),
        T = g._internals = {
      _specialProps: i
    },
        U = (_gsScope.navigator || {}).userAgent || "",
        V = function () {
      var a = U.indexOf("Android"),
          b = Q("a");
      return m = -1 !== U.indexOf("Safari") && -1 === U.indexOf("Chrome") && (-1 === a || parseFloat(U.substr(a + 8, 2)) > 3), o = m && parseFloat(U.substr(U.indexOf("Version/") + 8, 2)) < 6, n = -1 !== U.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(U) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(U)) && (p = parseFloat(RegExp.$1)), b ? (b.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(b.style.opacity)) : !1;
    }(),
        W = function W(a) {
      return y.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
    },
        X = function X(a) {
      _gsScope.console && console.log(a);
    },
        Y = "",
        Z = "",
        $ = function $(a, b) {
      b = b || R;
      var c,
          d,
          e = b.style;
      if (void 0 !== e[a]) return a;

      for (a = a.charAt(0).toUpperCase() + a.substr(1), c = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; --d > -1 && void 0 === e[c[d] + a];) {
        ;
      }

      return d >= 0 ? (Z = 3 === d ? "ms" : c[d], Y = "-" + Z.toLowerCase() + "-", Z + a) : null;
    },
        _ = "undefined" != typeof window ? window : P.defaultView || {
      getComputedStyle: function getComputedStyle() {}
    },
        aa = function aa(a) {
      return _.getComputedStyle(a);
    },
        ba = g.getStyle = function (a, b, c, d, e) {
      var f;
      return V || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || aa(a)) ? f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(C, "-$1").toLowerCase()) : a.currentStyle && (f = a.currentStyle[b]), null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : W(a);
    },
        ca = T.convertToPixels = function (a, c, d, e, f) {
      if ("px" === e || !e && "lineHeight" !== c) return d;
      if ("auto" === e || !d) return 0;
      var h,
          i,
          j,
          k = G.test(c),
          l = a,
          m = R.style,
          n = 0 > d,
          o = 1 === d;
      if (n && (d = -d), o && (d *= 100), "lineHeight" !== c || e) {
        if ("%" === e && -1 !== c.indexOf("border")) h = d / 100 * (k ? a.clientWidth : a.clientHeight);else {
          if (m.cssText = "border:0 solid red;position:" + ba(a, "position") + ";line-height:0;", "%" !== e && l.appendChild && "v" !== e.charAt(0) && "rem" !== e) m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;else {
            if (l = a.parentNode || P.body, -1 !== ba(l, "display").indexOf("flex") && (m.position = "absolute"), i = l._gsCache, j = b.ticker.frame, i && k && i.time === j) return i.width * d / 100;
            m[k ? "width" : "height"] = d + e;
          }
          l.appendChild(R), h = parseFloat(R[k ? "offsetWidth" : "offsetHeight"]), l.removeChild(R), k && "%" === e && g.cacheWidths !== !1 && (i = l._gsCache = l._gsCache || {}, i.time = j, i.width = h / d * 100), 0 !== h || f || (h = ca(a, c, d, e, !0));
        }
      } else i = aa(a).lineHeight, a.style.lineHeight = d, h = parseFloat(aa(a).lineHeight), a.style.lineHeight = i;
      return o && (h /= 100), n ? -h : h;
    },
        da = T.calculateOffset = function (a, b, c) {
      if ("absolute" !== ba(a, "position", c)) return 0;
      var d = "left" === b ? "Left" : "Top",
          e = ba(a, "margin" + d, c);
      return a["offset" + d] - (ca(a, b, parseFloat(e), e.replace(x, "")) || 0);
    },
        ea = function ea(a, b) {
      var c,
          d,
          e,
          f = {};
      if (b = b || aa(a, null)) {
        if (c = b.length) for (; --c > -1;) {
          e = b[c], (-1 === e.indexOf("-transform") || Fa === e) && (f[e.replace(D, F)] = b.getPropertyValue(e));
        } else for (c in b) {
          (-1 === c.indexOf("Transform") || Ea === c) && (f[c] = b[c]);
        }
      } else if (b = a.currentStyle || a.style) for (c in b) {
        "string" == typeof c && void 0 === f[c] && (f[c.replace(D, F)] = b[c]);
      }
      return V || (f.opacity = W(a)), d = Ta(a, b, !1), f.rotation = d.rotation, f.skewX = d.skewX, f.scaleX = d.scaleX, f.scaleY = d.scaleY, f.x = d.x, f.y = d.y, Ha && (f.z = d.z, f.rotationX = d.rotationX, f.rotationY = d.rotationY, f.scaleZ = d.scaleZ), f.filters && delete f.filters, f;
    },
        fa = function fa(a, b, c, d, e) {
      var f,
          g,
          h,
          i = {},
          j = a.style;

      for (g in c) {
        "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(w, "") ? f : 0 : da(a, g), void 0 !== j[g] && (h = new ua(j, g, j[g], h)));
      }

      if (d) for (g in d) {
        "className" !== g && (i[g] = d[g]);
      }
      return {
        difs: i,
        firstMPT: h
      };
    },
        ga = {
      width: ["Left", "Right"],
      height: ["Top", "Bottom"]
    },
        ha = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
        ia = function ia(a, b, c) {
      if ("svg" === (a.nodeName + "").toLowerCase()) return (c || aa(a))[b] || 0;
      if (a.getCTM && Qa(a)) return a.getBBox()[b] || 0;
      var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
          e = ga[b],
          f = e.length;

      for (c = c || aa(a, null); --f > -1;) {
        d -= parseFloat(ba(a, "padding" + e[f], c, !0)) || 0, d -= parseFloat(ba(a, "border" + e[f] + "Width", c, !0)) || 0;
      }

      return d;
    },
        ja = function ja(a, b) {
      if ("contain" === a || "auto" === a || "auto auto" === a) return a + " ";
      (null == a || "" === a) && (a = "0 0");
      var c,
          d = a.split(" "),
          e = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : d[0],
          f = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : d[1];

      if (d.length > 3 && !b) {
        for (d = a.split(", ").join(",").split(","), a = [], c = 0; c < d.length; c++) {
          a.push(ja(d[c]));
        }

        return a.join(",");
      }

      return null == f ? f = "center" === e ? "50%" : "0" : "center" === f && (f = "50%"), ("center" === e || isNaN(parseFloat(e)) && -1 === (e + "").indexOf("=")) && (e = "50%"), a = e + " " + f + (d.length > 2 ? " " + d[2] : ""), b && (b.oxp = -1 !== e.indexOf("%"), b.oyp = -1 !== f.indexOf("%"), b.oxr = "=" === e.charAt(1), b.oyr = "=" === f.charAt(1), b.ox = parseFloat(e.replace(w, "")), b.oy = parseFloat(f.replace(w, "")), b.v = a), b || a;
    },
        ka = function ka(a, b) {
      return "function" == typeof a && (a = a(r, q)), "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b) || 0;
    },
        la = function la(a, b) {
      "function" == typeof a && (a = a(r, q));
      var c = "string" == typeof a && "=" === a.charAt(1);
      return "string" == typeof a && "v" === a.charAt(a.length - 2) && (a = (c ? a.substr(0, 2) : 0) + window["inner" + ("vh" === a.substr(-2) ? "Height" : "Width")] * (parseFloat(c ? a.substr(2) : a) / 100)), null == a ? b : c ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a) || 0;
    },
        ma = function ma(a, b, c, d) {
      var e,
          f,
          g,
          h,
          i,
          j = 1e-6;
      return "function" == typeof a && (a = a(r, q)), null == a ? h = b : "number" == typeof a ? h = a : (e = 360, f = a.split("_"), i = "=" === a.charAt(1), g = (i ? parseInt(a.charAt(0) + "1", 10) * parseFloat(f[0].substr(2)) : parseFloat(f[0])) * (-1 === a.indexOf("rad") ? 1 : M) - (i ? 0 : b), f.length && (d && (d[c] = b + g), -1 !== a.indexOf("short") && (g %= e, g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)), -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * e) % e - (g / e | 0) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (g / e | 0) * e)), h = b + g), j > h && h > -j && (h = 0), h;
    },
        na = {
      aqua: [0, 255, 255],
      lime: [0, 255, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, 255],
      navy: [0, 0, 128],
      white: [255, 255, 255],
      fuchsia: [255, 0, 255],
      olive: [128, 128, 0],
      yellow: [255, 255, 0],
      orange: [255, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [255, 0, 0],
      pink: [255, 192, 203],
      cyan: [0, 255, 255],
      transparent: [255, 255, 255, 0]
    },
        oa = function oa(a, b, c) {
      return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a, 255 * (1 > 6 * a ? b + (c - b) * a * 6 : .5 > a ? c : 2 > 3 * a ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0;
    },
        pa = g.parseColor = function (a, b) {
      var c, d, e, f, g, h, i, j, k, l, m;
      if (a) {
        if ("number" == typeof a) c = [a >> 16, a >> 8 & 255, 255 & a];else {
          if ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), na[a]) c = na[a];else if ("#" === a.charAt(0)) 4 === a.length && (d = a.charAt(1), e = a.charAt(2), f = a.charAt(3), a = "#" + d + d + e + e + f + f), a = parseInt(a.substr(1), 16), c = [a >> 16, a >> 8 & 255, 255 & a];else if ("hsl" === a.substr(0, 3)) {
            if (c = m = a.match(s), b) {
              if (-1 !== a.indexOf("=")) return a.match(t);
            } else g = Number(c[0]) % 360 / 360, h = Number(c[1]) / 100, i = Number(c[2]) / 100, e = .5 >= i ? i * (h + 1) : i + h - i * h, d = 2 * i - e, c.length > 3 && (c[3] = Number(c[3])), c[0] = oa(g + 1 / 3, d, e), c[1] = oa(g, d, e), c[2] = oa(g - 1 / 3, d, e);
          } else c = a.match(s) || na.transparent;
          c[0] = Number(c[0]), c[1] = Number(c[1]), c[2] = Number(c[2]), c.length > 3 && (c[3] = Number(c[3]));
        }
      } else c = na.black;
      return b && !m && (d = c[0] / 255, e = c[1] / 255, f = c[2] / 255, j = Math.max(d, e, f), k = Math.min(d, e, f), i = (j + k) / 2, j === k ? g = h = 0 : (l = j - k, h = i > .5 ? l / (2 - j - k) : l / (j + k), g = j === d ? (e - f) / l + (f > e ? 6 : 0) : j === e ? (f - d) / l + 2 : (d - e) / l + 4, g *= 60), c[0] = g + .5 | 0, c[1] = 100 * h + .5 | 0, c[2] = 100 * i + .5 | 0), c;
    },
        qa = function qa(a, b) {
      var c,
          d,
          e,
          f = a.match(ra) || [],
          g = 0,
          h = "";
      if (!f.length) return a;

      for (c = 0; c < f.length; c++) {
        d = f[c], e = a.substr(g, a.indexOf(d, g) - g), g += e.length + d.length, d = pa(d, b), 3 === d.length && d.push(1), h += e + (b ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : "rgba(" + d.join(",")) + ")";
      }

      return h + a.substr(g);
    },
        ra = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";

    for (j in na) {
      ra += "|" + j + "\\b";
    }

    ra = new RegExp(ra + ")", "gi"), g.colorStringFilter = function (a) {
      var b,
          c = a[0] + " " + a[1];
      ra.test(c) && (b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla("), a[0] = qa(a[0], b), a[1] = qa(a[1], b)), ra.lastIndex = 0;
    }, b.defaultStringFilter || (b.defaultStringFilter = g.colorStringFilter);

    var sa = function sa(a, b, c, d) {
      if (null == a) return function (a) {
        return a;
      };
      var e,
          f = b ? (a.match(ra) || [""])[0] : "",
          g = a.split(f).join("").match(u) || [],
          h = a.substr(0, a.indexOf(g[0])),
          i = ")" === a.charAt(a.length - 1) ? ")" : "",
          j = -1 !== a.indexOf(" ") ? " " : ",",
          k = g.length,
          l = k > 0 ? g[0].replace(s, "") : "";
      return k ? e = b ? function (a) {
        var b, m, n, o;
        if ("number" == typeof a) a += l;else if (d && J.test(a)) {
          for (o = a.replace(J, "|").split("|"), n = 0; n < o.length; n++) {
            o[n] = e(o[n]);
          }

          return o.join(",");
        }
        if (b = (a.match(ra) || [f])[0], m = a.split(b).join("").match(u) || [], n = m.length, k > n--) for (; ++n < k;) {
          m[n] = c ? m[(n - 1) / 2 | 0] : g[n];
        }
        return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "");
      } : function (a) {
        var b, f, m;
        if ("number" == typeof a) a += l;else if (d && J.test(a)) {
          for (f = a.replace(J, "|").split("|"), m = 0; m < f.length; m++) {
            f[m] = e(f[m]);
          }

          return f.join(",");
        }
        if (b = a.match("," === j ? u : v) || [], m = b.length, k > m--) for (; ++m < k;) {
          b[m] = c ? b[(m - 1) / 2 | 0] : g[m];
        }
        return (h && "none" !== a ? a.substr(0, a.indexOf(b[0])) || h : h) + b.join(j) + i;
      } : function (a) {
        return a;
      };
    },
        ta = function ta(a) {
      return a = a.split(","), function (b, c, d, e, f, g, h) {
        var i,
            j = (c + "").split(" ");

        for (h = {}, i = 0; 4 > i; i++) {
          h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];
        }

        return e.parse(b, h, f, g);
      };
    },
        ua = (T._setPluginRatio = function (a) {
      this.plugin.setRatio(a);

      for (var b, c, d, e, f, g = this.data, h = g.proxy, i = g.firstMPT, j = 1e-6; i;) {
        b = h[i.v], i.r ? b = i.r(b) : j > b && b > -j && (b = 0), i.t[i.p] = b, i = i._next;
      }

      if (g.autoRotate && (g.autoRotate.rotation = g.mod ? g.mod.call(this._tween, h.rotation, this.t, this._tween) : h.rotation), 1 === a || 0 === a) for (i = g.firstMPT, f = 1 === a ? "e" : "b"; i;) {
        if (c = i.t, c.type) {
          if (1 === c.type) {
            for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++) {
              e += c["xn" + d] + c["xs" + (d + 1)];
            }

            c[f] = e;
          }
        } else c[f] = c.s + c.xs0;

        i = i._next;
      }
    }, function (a, b, c, d, e) {
      this.t = a, this.p = b, this.v = c, this.r = e, d && (d._prev = this, this._next = d);
    }),
        va = (T._parseToProxy = function (a, b, c, d, e, f) {
      var g,
          h,
          i,
          j,
          k,
          l = d,
          m = {},
          n = {},
          o = c._transform,
          p = N;

      for (c._transform = null, N = b, d = k = c.parse(a, b, d, e), N = p, f && (c._transform = o, l && (l._prev = null, l._prev && (l._prev._next = null))); d && d !== l;) {
        if (d.type <= 1 && (h = d.p, n[h] = d.s + d.c, m[h] = d.s, f || (j = new ua(d, "s", h, j, d.r), d.c = 0), 1 === d.type)) for (g = d.l; --g > 0;) {
          i = "xn" + g, h = d.p + "_" + i, n[h] = d.data[i], m[h] = d[i], f || (j = new ua(d, i, h, j, d.rxp[i]));
        }
        d = d._next;
      }

      return {
        proxy: m,
        end: n,
        firstMPT: j,
        pt: k
      };
    }, T.CSSPropTween = function (a, b, d, e, g, h, i, j, k, l, m) {
      this.t = a, this.p = b, this.s = d, this.c = e, this.n = i || b, a instanceof va || f.push(this.n), this.r = j ? "function" == typeof j ? j : Math.round : j, this.type = h || 0, k && (this.pr = k, c = !0), this.b = void 0 === l ? d : l, this.e = void 0 === m ? d + e : m, g && (this._next = g, g._prev = this);
    }),
        wa = function wa(a, b, c, d, e, f) {
      var g = new va(a, b, c, d - c, e, -1, f);
      return g.b = c, g.e = g.xs0 = d, g;
    },
        xa = g.parseComplex = function (a, b, c, d, e, f, h, i, j, l) {
      c = c || f || "", "function" == typeof d && (d = d(r, q)), h = new va(a, b, 0, 0, h, l ? 2 : 1, null, !1, i, c, d), d += "", e && ra.test(d + c) && (d = [c, d], g.colorStringFilter(d), c = d[0], d = d[1]);
      var m,
          n,
          o,
          p,
          u,
          v,
          w,
          x,
          y,
          z,
          A,
          B,
          C,
          D = c.split(", ").join(",").split(" "),
          E = d.split(", ").join(",").split(" "),
          F = D.length,
          G = k !== !1;

      for ((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (-1 !== (d + c).indexOf("rgb") || -1 !== (d + c).indexOf("hsl") ? (D = D.join(" ").replace(J, ", ").split(" "), E = E.join(" ").replace(J, ", ").split(" ")) : (D = D.join(" ").split(",").join(", ").split(" "), E = E.join(" ").split(",").join(", ").split(" ")), F = D.length), F !== E.length && (D = (f || "").split(" "), F = D.length), h.plugin = j, h.setRatio = l, ra.lastIndex = 0, m = 0; F > m; m++) {
        if (p = D[m], u = E[m] + "", x = parseFloat(p), x || 0 === x) h.appendXtra("", x, ka(u, x), u.replace(t, ""), G && -1 !== u.indexOf("px") ? Math.round : !1, !0);else if (e && ra.test(p)) B = u.indexOf(")") + 1, B = ")" + (B ? u.substr(B) : ""), C = -1 !== u.indexOf("hsl") && V, z = u, p = pa(p, C), u = pa(u, C), y = p.length + u.length > 6, y && !V && 0 === u[3] ? (h["xs" + h.l] += h.l ? " transparent" : "transparent", h.e = h.e.split(E[m]).join("transparent")) : (V || (y = !1), C ? h.appendXtra(z.substr(0, z.indexOf("hsl")) + (y ? "hsla(" : "hsl("), p[0], ka(u[0], p[0]), ",", !1, !0).appendXtra("", p[1], ka(u[1], p[1]), "%,", !1).appendXtra("", p[2], ka(u[2], p[2]), y ? "%," : "%" + B, !1) : h.appendXtra(z.substr(0, z.indexOf("rgb")) + (y ? "rgba(" : "rgb("), p[0], u[0] - p[0], ",", Math.round, !0).appendXtra("", p[1], u[1] - p[1], ",", Math.round).appendXtra("", p[2], u[2] - p[2], y ? "," : B, Math.round), y && (p = p.length < 4 ? 1 : p[3], h.appendXtra("", p, (u.length < 4 ? 1 : u[3]) - p, B, !1))), ra.lastIndex = 0;else if (v = p.match(s)) {
          if (w = u.match(t), !w || w.length !== v.length) return h;

          for (o = 0, n = 0; n < v.length; n++) {
            A = v[n], z = p.indexOf(A, o), h.appendXtra(p.substr(o, z - o), Number(A), ka(w[n], A), "", G && "px" === p.substr(z + A.length, 2) ? Math.round : !1, 0 === n), o = z + A.length;
          }

          h["xs" + h.l] += p.substr(o);
        } else h["xs" + h.l] += h.l || h["xs" + h.l] ? " " + u : u;
      }

      if (-1 !== d.indexOf("=") && h.data) {
        for (B = h.xs0 + h.data.s, m = 1; m < h.l; m++) {
          B += h["xs" + m] + h.data["xn" + m];
        }

        h.e = B + h["xs" + m];
      }

      return h.l || (h.type = -1, h.xs0 = h.e), h.xfirst || h;
    },
        ya = 9;

    for (j = va.prototype, j.l = j.pr = 0; --ya > 0;) {
      j["xn" + ya] = 0, j["xs" + ya] = "";
    }

    j.xs0 = "", j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null, j.appendXtra = function (a, b, c, d, e, f) {
      var g = this,
          h = g.l;
      return g["xs" + h] += f && (h || g["xs" + h]) ? " " + a : a || "", c || 0 === h || g.plugin ? (g.l++, g.type = g.setRatio ? 2 : 1, g["xs" + g.l] = d || "", h > 0 ? (g.data["xn" + h] = b + c, g.rxp["xn" + h] = e, g["xn" + h] = b, g.plugin || (g.xfirst = new va(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr), g.xfirst.xs0 = 0), g) : (g.data = {
        s: b + c
      }, g.rxp = {}, g.s = b, g.c = c, g.r = e, g)) : (g["xs" + h] += b + (d || ""), g);
    };

    var za = function za(a, b) {
      b = b || {}, this.p = b.prefix ? $(a) || a : a, i[a] = i[this.p] = this, this.format = b.formatter || sa(b.defaultValue, b.color, b.collapsible, b.multi), b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, this.keyword = b.keyword, this.dflt = b.defaultValue, this.allowFunc = b.allowFunc, this.pr = b.priority || 0;
    },
        Aa = T._registerComplexSpecialProp = function (a, b, c) {
      "object" != _typeof(b) && (b = {
        parser: c
      });
      var d,
          e,
          f = a.split(","),
          g = b.defaultValue;

      for (c = c || [g], d = 0; d < f.length; d++) {
        b.prefix = 0 === d && b.prefix, b.defaultValue = c[d] || g, e = new za(f[d], b);
      }
    },
        Ba = T._registerPluginProp = function (a) {
      if (!i[a]) {
        var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
        Aa(a, {
          parser: function parser(a, c, d, e, f, g, j) {
            var k = h.com.greensock.plugins[b];
            return k ? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j)) : (X("Error: " + b + " js file not loaded."), f);
          }
        });
      }
    };

    j = za.prototype, j.parseComplex = function (a, b, c, d, e, f) {
      var g,
          h,
          i,
          j,
          k,
          l,
          m = this.keyword;

      if (this.multi && (J.test(c) || J.test(b) ? (h = b.replace(J, "|").split("|"), i = c.replace(J, "|").split("|")) : m && (h = [b], i = [c])), i) {
        for (j = i.length > h.length ? i.length : h.length, g = 0; j > g; g++) {
          b = h[g] = h[g] || this.dflt, c = i[g] = i[g] || this.dflt, m && (k = b.indexOf(m), l = c.indexOf(m), k !== l && (-1 === l ? h[g] = h[g].split(m).join("") : -1 === k && (h[g] += " " + m)));
        }

        b = h.join(", "), c = i.join(", ");
      }

      return xa(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f);
    }, j.parse = function (a, b, c, d, f, g, h) {
      return this.parseComplex(a.style, this.format(ba(a, this.p, e, !1, this.dflt)), this.format(b), f, g);
    }, g.registerSpecialProp = function (a, b, c) {
      Aa(a, {
        parser: function parser(a, d, e, f, g, h, i) {
          var j = new va(a, e, 0, 0, g, 2, e, !1, c);
          return j.plugin = h, j.setRatio = b(a, d, f._tween, e), j;
        },
        priority: c
      });
    }, g.useSVGTransformAttr = !0;

    var Ca,
        Da = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
        Ea = $("transform"),
        Fa = Y + "transform",
        Ga = $("transformOrigin"),
        Ha = null !== $("perspective"),
        Ia = T.Transform = function () {
      this.perspective = parseFloat(g.defaultTransformPerspective) || 0, this.force3D = g.defaultForce3D !== !1 && Ha ? g.defaultForce3D || "auto" : !1;
    },
        Ja = _gsScope.SVGElement,
        Ka = function Ka(a, b, c) {
      var d,
          e = P.createElementNS("http://www.w3.org/2000/svg", a),
          f = /([a-z])([A-Z])/g;

      for (d in c) {
        e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
      }

      return b.appendChild(e), e;
    },
        La = P.documentElement || {},
        Ma = function () {
      var a,
          b,
          c,
          d = p || /Android/i.test(U) && !_gsScope.chrome;
      return P.createElementNS && La.appendChild && !d && (a = Ka("svg", La), b = Ka("rect", a, {
        width: 100,
        height: 50,
        x: 100
      }), c = b.getBoundingClientRect().width, b.style[Ga] = "50% 50%", b.style[Ea] = "scaleX(0.5)", d = c === b.getBoundingClientRect().width && !(n && Ha), La.removeChild(a)), d;
    }(),
        Na = function Na(a, b, c, d, e, f) {
      var h,
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
          v = a._gsTransform,
          w = Sa(a, !0);
      v && (t = v.xOrigin, u = v.yOrigin), (!d || (h = d.split(" ")).length < 2) && (n = a.getBBox(), 0 === n.x && 0 === n.y && n.width + n.height === 0 && (n = {
        x: parseFloat(a.hasAttribute("x") ? a.getAttribute("x") : a.hasAttribute("cx") ? a.getAttribute("cx") : 0) || 0,
        y: parseFloat(a.hasAttribute("y") ? a.getAttribute("y") : a.hasAttribute("cy") ? a.getAttribute("cy") : 0) || 0,
        width: 0,
        height: 0
      }), b = ja(b).split(" "), h = [(-1 !== b[0].indexOf("%") ? parseFloat(b[0]) / 100 * n.width : parseFloat(b[0])) + n.x, (-1 !== b[1].indexOf("%") ? parseFloat(b[1]) / 100 * n.height : parseFloat(b[1])) + n.y]), c.xOrigin = k = parseFloat(h[0]), c.yOrigin = l = parseFloat(h[1]), d && w !== Ra && (m = w[0], n = w[1], o = w[2], p = w[3], q = w[4], r = w[5], s = m * p - n * o, s && (i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s, j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s, k = c.xOrigin = h[0] = i, l = c.yOrigin = h[1] = j)), v && (f && (c.xOffset = v.xOffset, c.yOffset = v.yOffset, v = c), e || e !== !1 && g.defaultSmoothOrigin !== !1 ? (i = k - t, j = l - u, v.xOffset += i * w[0] + j * w[2] - i, v.yOffset += i * w[1] + j * w[3] - j) : v.xOffset = v.yOffset = 0), f || a.setAttribute("data-svg-origin", h.join(" "));
    },
        Oa = function Oa(a) {
      var b,
          c = Q("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
          d = this.parentNode,
          e = this.nextSibling,
          f = this.style.cssText;
      if (La.appendChild(c), c.appendChild(this), this.style.display = "block", a) try {
        b = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Oa;
      } catch (g) {} else this._originalGetBBox && (b = this._originalGetBBox());
      return e ? d.insertBefore(this, e) : d.appendChild(this), La.removeChild(c), this.style.cssText = f, b;
    },
        Pa = function Pa(a) {
      try {
        return a.getBBox();
      } catch (b) {
        return Oa.call(a, !0);
      }
    },
        Qa = function Qa(a) {
      return !(!Ja || !a.getCTM || a.parentNode && !a.ownerSVGElement || !Pa(a));
    },
        Ra = [1, 0, 0, 1, 0, 0],
        Sa = function Sa(a, b) {
      var c,
          d,
          e,
          f,
          g,
          h,
          i,
          j = a._gsTransform || new Ia(),
          k = 1e5,
          l = a.style;
      if (Ea ? d = ba(a, Fa, null, !0) : a.currentStyle && (d = a.currentStyle.filter.match(H), d = d && 4 === d.length ? [d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), j.x || 0, j.y || 0].join(",") : ""), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, Ea && c && !a.offsetParent && a !== La && (f = l.display, l.display = "block", i = a.parentNode, i && a.offsetParent || (g = 1, h = a.nextSibling, La.appendChild(a)), d = ba(a, Fa, null, !0), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, f ? l.display = f : Xa(l, "display"), g && (h ? i.insertBefore(a, h) : i ? i.appendChild(a) : La.removeChild(a))), (j.svg || a.getCTM && Qa(a)) && (c && -1 !== (l[Ea] + "").indexOf("matrix") && (d = l[Ea], c = 0), e = a.getAttribute("transform"), c && e && (e = a.transform.baseVal.consolidate().matrix, d = "matrix(" + e.a + "," + e.b + "," + e.c + "," + e.d + "," + e.e + "," + e.f + ")", c = 0)), c) return Ra;

      for (e = (d || "").match(s) || [], ya = e.length; --ya > -1;) {
        f = Number(e[ya]), e[ya] = (g = f - (f |= 0)) ? (g * k + (0 > g ? -.5 : .5) | 0) / k + f : f;
      }

      return b && e.length > 6 ? [e[0], e[1], e[4], e[5], e[12], e[13]] : e;
    },
        Ta = T.getTransform = function (a, c, d, e) {
      if (a._gsTransform && d && !e) return a._gsTransform;
      var f,
          h,
          i,
          j,
          k,
          l,
          m = d ? a._gsTransform || new Ia() : new Ia(),
          n = m.scaleX < 0,
          o = 2e-5,
          p = 1e5,
          q = Ha ? parseFloat(ba(a, Ga, c, !1, "0 0 0").split(" ")[2]) || m.zOrigin || 0 : 0,
          r = parseFloat(g.defaultTransformPerspective) || 0;

      if (m.svg = !(!a.getCTM || !Qa(a)), m.svg && (Na(a, ba(a, Ga, c, !1, "50% 50%") + "", m, a.getAttribute("data-svg-origin")), Ca = g.useSVGTransformAttr || Ma), f = Sa(a), f !== Ra) {
        if (16 === f.length) {
          var s,
              t,
              u,
              v,
              w,
              x = f[0],
              y = f[1],
              z = f[2],
              A = f[3],
              B = f[4],
              C = f[5],
              D = f[6],
              E = f[7],
              F = f[8],
              G = f[9],
              H = f[10],
              I = f[12],
              J = f[13],
              K = f[14],
              L = f[11],
              N = Math.atan2(D, H);
          m.zOrigin && (K = -m.zOrigin, I = F * K - f[12], J = G * K - f[13], K = H * K + m.zOrigin - f[14]), m.rotationX = N * M, N && (v = Math.cos(-N), w = Math.sin(-N), s = B * v + F * w, t = C * v + G * w, u = D * v + H * w, F = B * -w + F * v, G = C * -w + G * v, H = D * -w + H * v, L = E * -w + L * v, B = s, C = t, D = u), N = Math.atan2(-z, H), m.rotationY = N * M, N && (v = Math.cos(-N), w = Math.sin(-N), s = x * v - F * w, t = y * v - G * w, u = z * v - H * w, G = y * w + G * v, H = z * w + H * v, L = A * w + L * v, x = s, y = t, z = u), N = Math.atan2(y, x), m.rotation = N * M, N && (v = Math.cos(N), w = Math.sin(N), s = x * v + y * w, t = B * v + C * w, u = F * v + G * w, y = y * v - x * w, C = C * v - B * w, G = G * v - F * w, x = s, B = t, F = u), m.rotationX && Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 && (m.rotationX = m.rotation = 0, m.rotationY = 180 - m.rotationY), N = Math.atan2(B, C), m.scaleX = (Math.sqrt(x * x + y * y + z * z) * p + .5 | 0) / p, m.scaleY = (Math.sqrt(C * C + D * D) * p + .5 | 0) / p, m.scaleZ = (Math.sqrt(F * F + G * G + H * H) * p + .5 | 0) / p, x /= m.scaleX, B /= m.scaleY, y /= m.scaleX, C /= m.scaleY, Math.abs(N) > o ? (m.skewX = N * M, B = 0, "simple" !== m.skewType && (m.scaleY *= 1 / Math.cos(N))) : m.skewX = 0, m.perspective = L ? 1 / (0 > L ? -L : L) : 0, m.x = I, m.y = J, m.z = K, m.svg && (m.x -= m.xOrigin - (m.xOrigin * x - m.yOrigin * B), m.y -= m.yOrigin - (m.yOrigin * y - m.xOrigin * C));
        } else if (!Ha || e || !f.length || m.x !== f[4] || m.y !== f[5] || !m.rotationX && !m.rotationY) {
          var O = f.length >= 6,
              P = O ? f[0] : 1,
              Q = f[1] || 0,
              R = f[2] || 0,
              S = O ? f[3] : 1;
          m.x = f[4] || 0, m.y = f[5] || 0, i = Math.sqrt(P * P + Q * Q), j = Math.sqrt(S * S + R * R), k = P || Q ? Math.atan2(Q, P) * M : m.rotation || 0, l = R || S ? Math.atan2(R, S) * M + k : m.skewX || 0, m.scaleX = i, m.scaleY = j, m.rotation = k, m.skewX = l, Ha && (m.rotationX = m.rotationY = m.z = 0, m.perspective = r, m.scaleZ = 1), m.svg && (m.x -= m.xOrigin - (m.xOrigin * P + m.yOrigin * R), m.y -= m.yOrigin - (m.xOrigin * Q + m.yOrigin * S));
        }

        Math.abs(m.skewX) > 90 && Math.abs(m.skewX) < 270 && (n ? (m.scaleX *= -1, m.skewX += m.rotation <= 0 ? 180 : -180, m.rotation += m.rotation <= 0 ? 180 : -180) : (m.scaleY *= -1, m.skewX += m.skewX <= 0 ? 180 : -180)), m.zOrigin = q;

        for (h in m) {
          m[h] < o && m[h] > -o && (m[h] = 0);
        }
      }

      return d && (a._gsTransform = m, m.svg && (Ca && a.style[Ea] ? b.delayedCall(.001, function () {
        Xa(a.style, Ea);
      }) : !Ca && a.getAttribute("transform") && b.delayedCall(.001, function () {
        a.removeAttribute("transform");
      }))), m;
    },
        Ua = function Ua(a) {
      var b,
          c,
          d = this.data,
          e = -d.rotation * L,
          f = e + d.skewX * L,
          g = 1e5,
          h = (Math.cos(e) * d.scaleX * g | 0) / g,
          i = (Math.sin(e) * d.scaleX * g | 0) / g,
          j = (Math.sin(f) * -d.scaleY * g | 0) / g,
          k = (Math.cos(f) * d.scaleY * g | 0) / g,
          l = this.t.style,
          m = this.t.currentStyle;

      if (m) {
        c = i, i = -j, j = -c, b = m.filter, l.filter = "";
        var n,
            o,
            q = this.t.offsetWidth,
            r = this.t.offsetHeight,
            s = "absolute" !== m.position,
            t = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k,
            u = d.x + q * d.xPercent / 100,
            v = d.y + r * d.yPercent / 100;

        if (null != d.ox && (n = (d.oxp ? q * d.ox * .01 : d.ox) - q / 2, o = (d.oyp ? r * d.oy * .01 : d.oy) - r / 2, u += n - (n * h + o * i), v += o - (n * j + o * k)), s ? (n = q / 2, o = r / 2, t += ", Dx=" + (n - (n * h + o * i) + u) + ", Dy=" + (o - (n * j + o * k) + v) + ")") : t += ", sizingMethod='auto expand')", -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? l.filter = b.replace(I, t) : l.filter = t + " " + b, (0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === t.indexOf("Dx=0, Dy=0") || y.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf(b.indexOf("Alpha")) && l.removeAttribute("filter")), !s) {
          var w,
              z,
              A,
              B = 8 > p ? 1 : -1;

          for (n = d.ieOffsetX || 0, o = d.ieOffsetY || 0, d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + u), d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + v), ya = 0; 4 > ya; ya++) {
            z = ha[ya], w = m[z], c = -1 !== w.indexOf("px") ? parseFloat(w) : ca(this.t, z, parseFloat(w), w.replace(x, "")) || 0, A = c !== d[z] ? 2 > ya ? -d.ieOffsetX : -d.ieOffsetY : 2 > ya ? n - d.ieOffsetX : o - d.ieOffsetY, l[z] = (d[z] = Math.round(c - A * (0 === ya || 2 === ya ? 1 : B))) + "px";
          }
        }
      }
    },
        Va = T.set3DTransformRatio = T.setTransformRatio = function (a) {
      var b,
          c,
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
          z = this.data,
          A = this.t.style,
          B = z.rotation,
          C = z.rotationX,
          D = z.rotationY,
          E = z.scaleX,
          F = z.scaleY,
          G = z.scaleZ,
          H = z.x,
          I = z.y,
          J = z.z,
          K = z.svg,
          M = z.perspective,
          N = z.force3D,
          O = z.skewY,
          P = z.skewX;
      if (O && (P += O, B += O), ((1 === a || 0 === a) && "auto" === N && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !N) && !J && !M && !D && !C && 1 === G || Ca && K || !Ha) return void (B || P || K ? (B *= L, x = P * L, y = 1e5, c = Math.cos(B) * E, f = Math.sin(B) * E, d = Math.sin(B - x) * -F, g = Math.cos(B - x) * F, x && "simple" === z.skewType && (b = Math.tan(x - O * L), b = Math.sqrt(1 + b * b), d *= b, g *= b, O && (b = Math.tan(O * L), b = Math.sqrt(1 + b * b), c *= b, f *= b)), K && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset, Ca && (z.xPercent || z.yPercent) && (q = this.t.getBBox(), H += .01 * z.xPercent * q.width, I += .01 * z.yPercent * q.height), q = 1e-6, q > H && H > -q && (H = 0), q > I && I > -q && (I = 0)), u = (c * y | 0) / y + "," + (f * y | 0) / y + "," + (d * y | 0) / y + "," + (g * y | 0) / y + "," + H + "," + I + ")", K && Ca ? this.t.setAttribute("transform", "matrix(" + u) : A[Ea] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + u) : A[Ea] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + F + "," + H + "," + I + ")");
      if (n && (q = 1e-4, q > E && E > -q && (E = G = 2e-5), q > F && F > -q && (F = G = 2e-5), !M || z.z || z.rotationX || z.rotationY || (M = 0)), B || P) B *= L, r = c = Math.cos(B), s = f = Math.sin(B), P && (B -= P * L, r = Math.cos(B), s = Math.sin(B), "simple" === z.skewType && (b = Math.tan((P - O) * L), b = Math.sqrt(1 + b * b), r *= b, s *= b, z.skewY && (b = Math.tan(O * L), b = Math.sqrt(1 + b * b), c *= b, f *= b))), d = -s, g = r;else {
        if (!(D || C || 1 !== G || M || K)) return void (A[Ea] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) translate3d(" : "translate3d(") + H + "px," + I + "px," + J + "px)" + (1 !== E || 1 !== F ? " scale(" + E + "," + F + ")" : ""));
        c = g = 1, d = f = 0;
      }
      k = 1, e = h = i = j = l = m = 0, o = M ? -1 / M : 0, p = z.zOrigin, q = 1e-6, v = ",", w = "0", B = D * L, B && (r = Math.cos(B), s = Math.sin(B), i = -s, l = o * -s, e = c * s, h = f * s, k = r, o *= r, c *= r, f *= r), B = C * L, B && (r = Math.cos(B), s = Math.sin(B), b = d * r + e * s, t = g * r + h * s, j = k * s, m = o * s, e = d * -s + e * r, h = g * -s + h * r, k *= r, o *= r, d = b, g = t), 1 !== G && (e *= G, h *= G, k *= G, o *= G), 1 !== F && (d *= F, g *= F, j *= F, m *= F), 1 !== E && (c *= E, f *= E, i *= E, l *= E), (p || K) && (p && (H += e * -p, I += h * -p, J += k * -p + p), K && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset), q > H && H > -q && (H = w), q > I && I > -q && (I = w), q > J && J > -q && (J = 0)), u = z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix3d(" : "matrix3d(", u += (q > c && c > -q ? w : c) + v + (q > f && f > -q ? w : f) + v + (q > i && i > -q ? w : i), u += v + (q > l && l > -q ? w : l) + v + (q > d && d > -q ? w : d) + v + (q > g && g > -q ? w : g), C || D || 1 !== G ? (u += v + (q > j && j > -q ? w : j) + v + (q > m && m > -q ? w : m) + v + (q > e && e > -q ? w : e), u += v + (q > h && h > -q ? w : h) + v + (q > k && k > -q ? w : k) + v + (q > o && o > -q ? w : o) + v) : u += ",0,0,0,0,1,0,", u += H + v + I + v + J + v + (M ? 1 + -J / M : 1) + ")", A[Ea] = u;
    };

    j = Ia.prototype, j.x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = j.xOffset = j.yOffset = 0, j.scaleX = j.scaleY = j.scaleZ = 1, Aa("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
      parser: function parser(a, b, c, d, f, h, i) {
        if (d._lastParsedTransform === i) return f;
        d._lastParsedTransform = i;
        var j = i.scale && "function" == typeof i.scale ? i.scale : 0;
        j && (i.scale = j(r, a));
        var k,
            l,
            m,
            n,
            o,
            p,
            s,
            t,
            u,
            v = a._gsTransform,
            w = a.style,
            x = 1e-6,
            y = Da.length,
            z = i,
            A = {},
            B = "transformOrigin",
            C = Ta(a, e, !0, z.parseTransform),
            D = z.transform && ("function" == typeof z.transform ? z.transform(r, q) : z.transform);
        if (C.skewType = z.skewType || C.skewType || g.defaultSkewType, d._transform = C, "rotationZ" in z && (z.rotation = z.rotationZ), D && "string" == typeof D && Ea) l = R.style, l[Ea] = D, l.display = "block", l.position = "absolute", -1 !== D.indexOf("%") && (l.width = ba(a, "width"), l.height = ba(a, "height")), P.body.appendChild(R), k = Ta(R, null, !1), "simple" === C.skewType && (k.scaleY *= Math.cos(k.skewX * L)), C.svg && (p = C.xOrigin, s = C.yOrigin, k.x -= C.xOffset, k.y -= C.yOffset, (z.transformOrigin || z.svgOrigin) && (D = {}, Na(a, ja(z.transformOrigin), D, z.svgOrigin, z.smoothOrigin, !0), p = D.xOrigin, s = D.yOrigin, k.x -= D.xOffset - C.xOffset, k.y -= D.yOffset - C.yOffset), (p || s) && (t = Sa(R, !0), k.x -= p - (p * t[0] + s * t[2]), k.y -= s - (p * t[1] + s * t[3]))), P.body.removeChild(R), k.perspective || (k.perspective = C.perspective), null != z.xPercent && (k.xPercent = la(z.xPercent, C.xPercent)), null != z.yPercent && (k.yPercent = la(z.yPercent, C.yPercent));else if ("object" == _typeof(z)) {
          if (k = {
            scaleX: la(null != z.scaleX ? z.scaleX : z.scale, C.scaleX),
            scaleY: la(null != z.scaleY ? z.scaleY : z.scale, C.scaleY),
            scaleZ: la(z.scaleZ, C.scaleZ),
            x: la(z.x, C.x),
            y: la(z.y, C.y),
            z: la(z.z, C.z),
            xPercent: la(z.xPercent, C.xPercent),
            yPercent: la(z.yPercent, C.yPercent),
            perspective: la(z.transformPerspective, C.perspective)
          }, o = z.directionalRotation, null != o) if ("object" == _typeof(o)) for (l in o) {
            z[l] = o[l];
          } else z.rotation = o;
          "string" == typeof z.x && -1 !== z.x.indexOf("%") && (k.x = 0, k.xPercent = la(z.x, C.xPercent)), "string" == typeof z.y && -1 !== z.y.indexOf("%") && (k.y = 0, k.yPercent = la(z.y, C.yPercent)), k.rotation = ma("rotation" in z ? z.rotation : "shortRotation" in z ? z.shortRotation + "_short" : C.rotation, C.rotation, "rotation", A), Ha && (k.rotationX = ma("rotationX" in z ? z.rotationX : "shortRotationX" in z ? z.shortRotationX + "_short" : C.rotationX || 0, C.rotationX, "rotationX", A), k.rotationY = ma("rotationY" in z ? z.rotationY : "shortRotationY" in z ? z.shortRotationY + "_short" : C.rotationY || 0, C.rotationY, "rotationY", A)), k.skewX = ma(z.skewX, C.skewX), k.skewY = ma(z.skewY, C.skewY);
        }

        for (Ha && null != z.force3D && (C.force3D = z.force3D, n = !0), m = C.force3D || C.z || C.rotationX || C.rotationY || k.z || k.rotationX || k.rotationY || k.perspective, m || null == z.scale || (k.scaleZ = 1); --y > -1;) {
          u = Da[y], D = k[u] - C[u], (D > x || -x > D || null != z[u] || null != N[u]) && (n = !0, f = new va(C, u, C[u], D, f), u in A && (f.e = A[u]), f.xs0 = 0, f.plugin = h, d._overwriteProps.push(f.n));
        }

        return D = "function" == typeof z.transformOrigin ? z.transformOrigin(r, q) : z.transformOrigin, C.svg && (D || z.svgOrigin) && (p = C.xOffset, s = C.yOffset, Na(a, ja(D), k, z.svgOrigin, z.smoothOrigin), f = wa(C, "xOrigin", (v ? C : k).xOrigin, k.xOrigin, f, B), f = wa(C, "yOrigin", (v ? C : k).yOrigin, k.yOrigin, f, B), (p !== C.xOffset || s !== C.yOffset) && (f = wa(C, "xOffset", v ? p : C.xOffset, C.xOffset, f, B), f = wa(C, "yOffset", v ? s : C.yOffset, C.yOffset, f, B)), D = "0px 0px"), (D || Ha && m && C.zOrigin) && (Ea ? (n = !0, u = Ga, D || (D = (ba(a, u, e, !1, "50% 50%") + "").split(" "), D = D[0] + " " + D[1] + " " + C.zOrigin + "px"), D += "", f = new va(w, u, 0, 0, f, -1, B), f.b = w[u], f.plugin = h, Ha ? (l = C.zOrigin, D = D.split(" "), C.zOrigin = (D.length > 2 ? parseFloat(D[2]) : l) || 0, f.xs0 = f.e = D[0] + " " + (D[1] || "50%") + " 0px", f = new va(C, "zOrigin", 0, 0, f, -1, f.n), f.b = l, f.xs0 = f.e = C.zOrigin) : f.xs0 = f.e = D) : ja(D + "", C)), n && (d._transformType = C.svg && Ca || !m && 3 !== this._transformType ? 2 : 3), j && (i.scale = j), f;
      },
      allowFunc: !0,
      prefix: !0
    }), Aa("boxShadow", {
      defaultValue: "0px 0px 0px 0px #999",
      prefix: !0,
      color: !0,
      multi: !0,
      keyword: "inset"
    }), Aa("clipPath", {
      defaultValue: "inset(0%)",
      prefix: !0,
      multi: !0,
      formatter: sa("inset(0% 0% 0% 0%)", !1, !0)
    }), Aa("borderRadius", {
      defaultValue: "0px",
      parser: function parser(a, b, c, f, g, h) {
        b = this.format(b);
        var i,
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
            v,
            w,
            x,
            y = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
            z = a.style;

        for (q = parseFloat(a.offsetWidth), r = parseFloat(a.offsetHeight), i = b.split(" "), j = 0; j < y.length; j++) {
          this.p.indexOf("border") && (y[j] = $(y[j])), m = l = ba(a, y[j], e, !1, "0px"), -1 !== m.indexOf(" ") && (l = m.split(" "), m = l[0], l = l[1]), n = k = i[j], o = parseFloat(m), t = m.substr((o + "").length), u = "=" === n.charAt(1), u ? (p = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), p *= parseFloat(n), s = n.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(n), s = n.substr((p + "").length)), "" === s && (s = d[c] || t), s !== t && (v = ca(a, "borderLeft", o, t), w = ca(a, "borderTop", o, t), "%" === s ? (m = v / q * 100 + "%", l = w / r * 100 + "%") : "em" === s ? (x = ca(a, "borderLeft", 1, "em"), m = v / x + "em", l = w / x + "em") : (m = v + "px", l = w + "px"), u && (n = parseFloat(m) + p + s, k = parseFloat(l) + p + s)), g = xa(z, y[j], m + " " + l, n + " " + k, !1, "0px", g);
        }

        return g;
      },
      prefix: !0,
      formatter: sa("0px 0px 0px 0px", !1, !0)
    }), Aa("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
      defaultValue: "0px",
      parser: function parser(a, b, c, d, f, g) {
        return xa(a.style, c, this.format(ba(a, c, e, !1, "0px 0px")), this.format(b), !1, "0px", f);
      },
      prefix: !0,
      formatter: sa("0px 0px", !1, !0)
    }), Aa("backgroundPosition", {
      defaultValue: "0 0",
      parser: function parser(a, b, c, d, f, g) {
        var h,
            i,
            j,
            k,
            l,
            m,
            n = "background-position",
            o = e || aa(a, null),
            q = this.format((o ? p ? o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y") : o.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),
            r = this.format(b);

        if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && r.split(",").length < 2 && (m = ba(a, "backgroundImage").replace(E, ""), m && "none" !== m)) {
          for (h = q.split(" "), i = r.split(" "), S.setAttribute("src", m), j = 2; --j > -1;) {
            q = h[j], k = -1 !== q.indexOf("%"), k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - S.width : a.offsetHeight - S.height, h[j] = k ? parseFloat(q) / 100 * l + "px" : parseFloat(q) / l * 100 + "%");
          }

          q = h.join(" ");
        }

        return this.parseComplex(a.style, q, r, f, g);
      },
      formatter: ja
    }), Aa("backgroundSize", {
      defaultValue: "0 0",
      formatter: function formatter(a) {
        return a += "", "co" === a.substr(0, 2) ? a : ja(-1 === a.indexOf(" ") ? a + " " + a : a);
      }
    }), Aa("perspective", {
      defaultValue: "0px",
      prefix: !0
    }), Aa("perspectiveOrigin", {
      defaultValue: "50% 50%",
      prefix: !0
    }), Aa("transformStyle", {
      prefix: !0
    }), Aa("backfaceVisibility", {
      prefix: !0
    }), Aa("userSelect", {
      prefix: !0
    }), Aa("margin", {
      parser: ta("marginTop,marginRight,marginBottom,marginLeft")
    }), Aa("padding", {
      parser: ta("paddingTop,paddingRight,paddingBottom,paddingLeft")
    }), Aa("clip", {
      defaultValue: "rect(0px,0px,0px,0px)",
      parser: function parser(a, b, c, d, f, g) {
        var h, i, j;
        return 9 > p ? (i = a.currentStyle, j = 8 > p ? " " : ",", h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")", b = this.format(b).split(",").join(j)) : (h = this.format(ba(a, this.p, e, !1, this.dflt)), b = this.format(b)), this.parseComplex(a.style, h, b, f, g);
      }
    }), Aa("textShadow", {
      defaultValue: "0px 0px 0px #999",
      color: !0,
      multi: !0
    }), Aa("autoRound,strictUnits", {
      parser: function parser(a, b, c, d, e) {
        return e;
      }
    }), Aa("border", {
      defaultValue: "0px solid #000",
      parser: function parser(a, b, c, d, f, g) {
        var h = ba(a, "borderTopWidth", e, !1, "0px"),
            i = this.format(b).split(" "),
            j = i[0].replace(x, "");
        return "px" !== j && (h = parseFloat(h) / ca(a, "borderTopWidth", 1, j) + j), this.parseComplex(a.style, this.format(h + " " + ba(a, "borderTopStyle", e, !1, "solid") + " " + ba(a, "borderTopColor", e, !1, "#000")), i.join(" "), f, g);
      },
      color: !0,
      formatter: function formatter(a) {
        var b = a.split(" ");
        return b[0] + " " + (b[1] || "solid") + " " + (a.match(ra) || ["#000"])[0];
      }
    }), Aa("borderWidth", {
      parser: ta("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
    }), Aa("float,cssFloat,styleFloat", {
      parser: function parser(a, b, c, d, e, f) {
        var g = a.style,
            h = "cssFloat" in g ? "cssFloat" : "styleFloat";
        return new va(g, h, 0, 0, e, -1, c, !1, 0, g[h], b);
      }
    });

    var Wa = function Wa(a) {
      var b,
          c = this.t,
          d = c.filter || ba(this.data, "filter") || "",
          e = this.s + this.c * a | 0;
      100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), b = !ba(this.data, "filter")) : (c.filter = d.replace(A, ""), b = !0)), b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"), -1 === d.indexOf("pacity") ? 0 === e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")") : c.filter = d.replace(y, "opacity=" + e));
    };

    Aa("opacity,alpha,autoAlpha", {
      defaultValue: "1",
      parser: function parser(a, b, c, d, f, g) {
        var h = parseFloat(ba(a, "opacity", e, !1, "1")),
            i = a.style,
            j = "autoAlpha" === c;
        return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h), j && 1 === h && "hidden" === ba(a, "visibility", e) && 0 !== b && (h = 0), V ? f = new va(i, "opacity", h, b - h, f) : (f = new va(i, "opacity", 100 * h, 100 * (b - h), f), f.xn1 = j ? 1 : 0, i.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", f.e = "alpha(opacity=" + (f.s + f.c) + ")", f.data = a, f.plugin = g, f.setRatio = Wa), j && (f = new va(i, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit"), f.xs0 = "inherit", d._overwriteProps.push(f.n), d._overwriteProps.push(c)), f;
      }
    });

    var Xa = function Xa(a, b) {
      b && (a.removeProperty ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) && (b = "-" + b), a.removeProperty(b.replace(C, "-$1").toLowerCase())) : a.removeAttribute(b));
    },
        Ya = function Ya(a) {
      if (this.t._gsClassPT = this, 1 === a || 0 === a) {
        this.t.setAttribute("class", 0 === a ? this.b : this.e);

        for (var b = this.data, c = this.t.style; b;) {
          b.v ? c[b.p] = b.v : Xa(c, b.p), b = b._next;
        }

        1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null);
      } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e);
    };

    Aa("className", {
      parser: function parser(a, b, d, f, g, h, i) {
        var j,
            k,
            l,
            m,
            n,
            o = a.getAttribute("class") || "",
            p = a.style.cssText;

        if (g = f._classNamePT = new va(a, d, 0, 0, g, 2), g.setRatio = Ya, g.pr = -11, c = !0, g.b = o, k = ea(a, e), l = a._gsClassPT) {
          for (m = {}, n = l.data; n;) {
            m[n.p] = 1, n = n._next;
          }

          l.setRatio(1);
        }

        return a._gsClassPT = g, g.e = "=" !== b.charAt(1) ? b : o.replace(new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), a.setAttribute("class", g.e), j = fa(a, k, ea(a), i, m), a.setAttribute("class", o), g.data = j.firstMPT, a.style.cssText !== p && (a.style.cssText = p), g = g.xfirst = f.parse(a, j.difs, g, h);
      }
    });

    var Za = function Za(a) {
      if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
        var b,
            c,
            d,
            e,
            f,
            g = this.t.style,
            h = i.transform.parse;
        if ("all" === this.e) g.cssText = "", e = !0;else for (b = this.e.split(" ").join("").split(","), d = b.length; --d > -1;) {
          c = b[d], i[c] && (i[c].parse === h ? e = !0 : c = "transformOrigin" === c ? Ga : i[c].p), Xa(g, c);
        }
        e && (Xa(g, Ea), f = this.t._gsTransform, f && (f.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform));
      }
    };

    for (Aa("clearProps", {
      parser: function parser(a, b, d, e, f) {
        return f = new va(a, d, 0, 0, f, 2), f.setRatio = Za, f.e = b, f.pr = -10, f.data = e._tween, c = !0, f;
      }
    }), j = "bezier,throwProps,physicsProps,physics2D".split(","), ya = j.length; ya--;) {
      Ba(j[ya]);
    }

    j = g.prototype, j._firstPT = j._lastParsedTransform = j._transform = null, j._onInitTween = function (a, b, h, j) {
      if (!a.nodeType) return !1;
      this._target = q = a, this._tween = h, this._vars = b, r = j, k = b.autoRound, c = !1, d = b.suffixMap || g.suffixMap, e = aa(a, ""), f = this._overwriteProps;
      var n,
          p,
          s,
          t,
          u,
          v,
          w,
          x,
          y,
          A = a.style;

      if (l && "" === A.zIndex && (n = ba(a, "zIndex", e), ("auto" === n || "" === n) && this._addLazySet(A, "zIndex", 0)), "string" == typeof b && (t = A.cssText, n = ea(a, e), A.cssText = t + ";" + b, n = fa(a, n, ea(a)).difs, !V && z.test(b) && (n.opacity = parseFloat(RegExp.$1)), b = n, A.cssText = t), b.className ? this._firstPT = p = i.className.parse(a, b.className, "className", this, null, null, b) : this._firstPT = p = this.parse(a, b, null), this._transformType) {
        for (y = 3 === this._transformType, Ea ? m && (l = !0, "" === A.zIndex && (w = ba(a, "zIndex", e), ("auto" === w || "" === w) && this._addLazySet(A, "zIndex", 0)), o && this._addLazySet(A, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (y ? "visible" : "hidden"))) : A.zoom = 1, s = p; s && s._next;) {
          s = s._next;
        }

        x = new va(a, "transform", 0, 0, null, 2), this._linkCSSP(x, null, s), x.setRatio = Ea ? Va : Ua, x.data = this._transform || Ta(a, e, !0), x.tween = h, x.pr = -1, f.pop();
      }

      if (c) {
        for (; p;) {
          for (v = p._next, s = t; s && s.pr > p.pr;) {
            s = s._next;
          }

          (p._prev = s ? s._prev : u) ? p._prev._next = p : t = p, (p._next = s) ? s._prev = p : u = p, p = v;
        }

        this._firstPT = t;
      }

      return !0;
    }, j.parse = function (a, b, c, f) {
      var g,
          h,
          j,
          l,
          m,
          n,
          o,
          p,
          s,
          t,
          u = a.style;

      for (g in b) {
        if (n = b[g], h = i[g], "function" != typeof n || h && h.allowFunc || (n = n(r, q)), h) c = h.parse(a, n, g, this, c, f, b);else {
          if ("--" === g.substr(0, 2)) {
            this._tween._propLookup[g] = this._addTween.call(this._tween, a.style, "setProperty", aa(a).getPropertyValue(g) + "", n + "", g, !1, g);
            continue;
          }

          m = ba(a, g, e) + "", s = "string" == typeof n, "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || s && B.test(n) ? (s || (n = pa(n), n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"), c = xa(u, g, m, n, !0, "transparent", c, 0, f)) : s && K.test(n) ? c = xa(u, g, m, n, !0, null, c, 0, f) : (j = parseFloat(m), o = j || 0 === j ? m.substr((j + "").length) : "", ("" === m || "auto" === m) && ("width" === g || "height" === g ? (j = ia(a, g, e), o = "px") : "left" === g || "top" === g ? (j = da(a, g, e), o = "px") : (j = "opacity" !== g ? 0 : 1, o = "")), t = s && "=" === n.charAt(1), t ? (l = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), l *= parseFloat(n), p = n.replace(x, "")) : (l = parseFloat(n), p = s ? n.replace(x, "") : ""), "" === p && (p = g in d ? d[g] : o), n = l || 0 === l ? (t ? l + j : l) + p : b[g], o !== p && ("" !== p || "lineHeight" === g) && (l || 0 === l) && j && (j = ca(a, g, j, o), "%" === p ? (j /= ca(a, g, 100, "%") / 100, b.strictUnits !== !0 && (m = j + "%")) : "em" === p || "rem" === p || "vw" === p || "vh" === p ? j /= ca(a, g, 1, p) : "px" !== p && (l = ca(a, g, l, p), p = "px"), t && (l || 0 === l) && (n = l + j + p)), t && (l += j), !j && 0 !== j || !l && 0 !== l ? void 0 !== u[g] && (n || n + "" != "NaN" && null != n) ? (c = new va(u, g, l || j || 0, 0, c, -1, g, !1, 0, m, n), c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m) : X("invalid " + g + " tween value: " + b[g]) : (c = new va(u, g, j, l - j, c, 0, g, k !== !1 && ("px" === p || "zIndex" === g), 0, m, n), c.xs0 = p));
        }
        f && c && !c.plugin && (c.plugin = f);
      }

      return c;
    }, j.setRatio = function (a) {
      var b,
          c,
          d,
          e = this._firstPT,
          f = 1e-6;
      if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time) {
        if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6) for (; e;) {
          if (b = e.c * a + e.s, e.r ? b = e.r(b) : f > b && b > -f && (b = 0), e.type) {
            if (1 === e.type) {
              if (d = e.l, 2 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;else {
                for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) {
                  c += e["xn" + d] + e["xs" + (d + 1)];
                }

                e.t[e.p] = c;
              }
            } else -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a);
          } else e.t[e.p] = b + e.xs0;
          e = e._next;
        } else for (; e;) {
          2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a), e = e._next;
        }
      } else for (; e;) {
        if (2 !== e.type) {
          if (e.r && -1 !== e.type) {
            if (b = e.r(e.s + e.c), e.type) {
              if (1 === e.type) {
                for (d = e.l, c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) {
                  c += e["xn" + d] + e["xs" + (d + 1)];
                }

                e.t[e.p] = c;
              }
            } else e.t[e.p] = b + e.xs0;
          } else e.t[e.p] = e.e;
        } else e.setRatio(a);
        e = e._next;
      }
    }, j._enableTransforms = function (a) {
      this._transform = this._transform || Ta(this._target, e, !0), this._transformType = this._transform.svg && Ca || !a && 3 !== this._transformType ? 2 : 3;
    };

    var $a = function $a(a) {
      this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0);
    };

    j._addLazySet = function (a, b, c) {
      var d = this._firstPT = new va(a, b, 0, 0, this._firstPT, 2);
      d.e = c, d.setRatio = $a, d.data = this;
    }, j._linkCSSP = function (a, b, c, d) {
      return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, d = !0), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._next = b, a._prev = c), a;
    }, j._mod = function (a) {
      for (var b = this._firstPT; b;) {
        "function" == typeof a[b.p] && (b.r = a[b.p]), b = b._next;
      }
    }, j._kill = function (b) {
      var c,
          d,
          e,
          f = b;

      if (b.autoAlpha || b.alpha) {
        f = {};

        for (d in b) {
          f[d] = b[d];
        }

        f.opacity = 1, f.autoAlpha && (f.visibility = 1);
      }

      for (b.className && (c = this._classNamePT) && (e = c.xfirst, e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next), c._next && this._linkCSSP(c._next, c._next._next, e._prev), this._classNamePT = null), c = this._firstPT; c;) {
        c.plugin && c.plugin !== d && c.plugin._kill && (c.plugin._kill(b), d = c.plugin), c = c._next;
      }

      return a.prototype._kill.call(this, f);
    };

    var _a = function _a(a, b, c) {
      var d, e, f, g;
      if (a.slice) for (e = a.length; --e > -1;) {
        _a(a[e], b, c);
      } else for (d = a.childNodes, e = d.length; --e > -1;) {
        f = d[e], g = f.type, f.style && (b.push(ea(f)), c && c.push(f)), 1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || _a(f, b, c);
      }
    };

    return g.cascadeTo = function (a, c, d) {
      var e,
          f,
          g,
          h,
          i = b.to(a, c, d),
          j = [i],
          k = [],
          l = [],
          m = [],
          n = b._internals.reservedProps;

      for (a = i._targets || i.target, _a(a, k, m), i.render(c, !0, !0), _a(a, l), i.render(0, !0, !0), i._enabled(!0), e = m.length; --e > -1;) {
        if (f = fa(m[e], k[e], l[e]), f.firstMPT) {
          f = f.difs;

          for (g in d) {
            n[g] && (f[g] = d[g]);
          }

          h = {};

          for (g in f) {
            h[g] = k[e][g];
          }

          j.push(b.fromTo(m[e], c, h, f));
        }
      }

      return j;
    }, a.activate([g]), g;
  }, !0), function () {
    var a = _gsScope._gsDefine.plugin({
      propName: "roundProps",
      version: "1.7.0",
      priority: -1,
      API: 2,
      init: function init(a, b, c) {
        return this._tween = c, !0;
      }
    }),
        b = function b(a) {
      var b = 1 > a ? Math.pow(10, (a + "").length - 2) : 1;
      return function (c) {
        return (Math.round(c / a) * a * b | 0) / b;
      };
    },
        c = function c(a, b) {
      for (; a;) {
        a.f || a.blob || (a.m = b || Math.round), a = a._next;
      }
    },
        d = a.prototype;

    d._onInitAllProps = function () {
      var a,
          d,
          e,
          f,
          g = this._tween,
          h = g.vars.roundProps,
          i = {},
          j = g._propLookup.roundProps;
      if ("object" != _typeof(h) || h.push) for ("string" == typeof h && (h = h.split(",")), e = h.length; --e > -1;) {
        i[h[e]] = Math.round;
      } else for (f in h) {
        i[f] = b(h[f]);
      }

      for (f in i) {
        for (a = g._firstPT; a;) {
          d = a._next, a.pg ? a.t._mod(i) : a.n === f && (2 === a.f && a.t ? c(a.t._firstPT, i[f]) : (this._add(a.t, f, a.s, a.c, i[f]), d && (d._prev = a._prev), a._prev ? a._prev._next = d : g._firstPT === a && (g._firstPT = d), a._next = a._prev = null, g._propLookup[f] = j)), a = d;
        }
      }

      return !1;
    }, d._add = function (a, b, c, d, e) {
      this._addTween(a, b, c, c + d, b, e || Math.round), this._overwriteProps.push(b);
    };
  }(), function () {
    _gsScope._gsDefine.plugin({
      propName: "attr",
      API: 2,
      version: "0.6.1",
      init: function init(a, b, c, d) {
        var e, f;
        if ("function" != typeof a.setAttribute) return !1;

        for (e in b) {
          f = b[e], "function" == typeof f && (f = f(d, a)), this._addTween(a, "setAttribute", a.getAttribute(e) + "", f + "", e, !1, e), this._overwriteProps.push(e);
        }

        return !0;
      }
    });
  }(), _gsScope._gsDefine.plugin({
    propName: "directionalRotation",
    version: "0.3.1",
    API: 2,
    init: function init(a, b, c, d) {
      "object" != _typeof(b) && (b = {
        rotation: b
      }), this.finals = {};
      var e,
          f,
          g,
          h,
          i,
          j,
          k = b.useRadians === !0 ? 2 * Math.PI : 360,
          l = 1e-6;

      for (e in b) {
        "useRadians" !== e && (h = b[e], "function" == typeof h && (h = h(d, a)), j = (h + "").split("_"), f = j[0], g = parseFloat("function" != typeof a[e] ? a[e] : a[e.indexOf("set") || "function" != typeof a["get" + e.substr(3)] ? e : "get" + e.substr(3)]()), h = this.finals[e] = "string" == typeof f && "=" === f.charAt(1) ? g + parseInt(f.charAt(0) + "1", 10) * Number(f.substr(2)) : Number(f) || 0, i = h - g, j.length && (f = j.join("_"), -1 !== f.indexOf("short") && (i %= k, i !== i % (k / 2) && (i = 0 > i ? i + k : i - k)), -1 !== f.indexOf("_cw") && 0 > i ? i = (i + 9999999999 * k) % k - (i / k | 0) * k : -1 !== f.indexOf("ccw") && i > 0 && (i = (i - 9999999999 * k) % k - (i / k | 0) * k)), (i > l || -l > i) && (this._addTween(a, e, g, g + i, e), this._overwriteProps.push(e)));
      }

      return !0;
    },
    set: function set(a) {
      var b;
      if (1 !== a) this._super.setRatio.call(this, a);else for (b = this._firstPT; b;) {
        b.f ? b.t[b.p](this.finals[b.p]) : b.t[b.p] = this.finals[b.p], b = b._next;
      }
    }
  })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (a) {
    var b,
        c,
        d,
        e,
        f = _gsScope.GreenSockGlobals || _gsScope,
        g = f.com.greensock,
        h = 2 * Math.PI,
        i = Math.PI / 2,
        j = g._class,
        k = function k(b, c) {
      var d = j("easing." + b, function () {}, !0),
          e = d.prototype = new a();
      return e.constructor = d, e.getRatio = c, d;
    },
        l = a.register || function () {},
        m = function m(a, b, c, d, e) {
      var f = j("easing." + a, {
        easeOut: new b(),
        easeIn: new c(),
        easeInOut: new d()
      }, !0);
      return l(f, a), f;
    },
        n = function n(a, b, c) {
      this.t = a, this.v = b, c && (this.next = c, c.prev = this, this.c = c.v - b, this.gap = c.t - a);
    },
        o = function o(b, c) {
      var d = j("easing." + b, function (a) {
        this._p1 = a || 0 === a ? a : 1.70158, this._p2 = 1.525 * this._p1;
      }, !0),
          e = d.prototype = new a();
      return e.constructor = d, e.getRatio = c, e.config = function (a) {
        return new d(a);
      }, d;
    },
        p = m("Back", o("BackOut", function (a) {
      return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1;
    }), o("BackIn", function (a) {
      return a * a * ((this._p1 + 1) * a - this._p1);
    }), o("BackInOut", function (a) {
      return (a *= 2) < 1 ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2);
    })),
        q = j("easing.SlowMo", function (a, b, c) {
      b = b || 0 === b ? b : .7, null == a ? a = .7 : a > 1 && (a = 1), this._p = 1 !== a ? b : 0, this._p1 = (1 - a) / 2, this._p2 = a, this._p3 = this._p1 + this._p2, this._calcEnd = c === !0;
    }, !0),
        r = q.prototype = new a();

    return r.constructor = q, r.getRatio = function (a) {
      var b = a + (.5 - a) * this._p;
      return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 === a ? 0 : 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b;
    }, q.ease = new q(.7, .7), r.config = q.config = function (a, b, c) {
      return new q(a, b, c);
    }, b = j("easing.SteppedEase", function (a, b) {
      a = a || 1, this._p1 = 1 / a, this._p2 = a + (b ? 0 : 1), this._p3 = b ? 1 : 0;
    }, !0), r = b.prototype = new a(), r.constructor = b, r.getRatio = function (a) {
      return 0 > a ? a = 0 : a >= 1 && (a = .999999999), ((this._p2 * a | 0) + this._p3) * this._p1;
    }, r.config = b.config = function (a, c) {
      return new b(a, c);
    }, c = j("easing.ExpoScaleEase", function (a, b, c) {
      this._p1 = Math.log(b / a), this._p2 = b - a, this._p3 = a, this._ease = c;
    }, !0), r = c.prototype = new a(), r.constructor = c, r.getRatio = function (a) {
      return this._ease && (a = this._ease.getRatio(a)), (this._p3 * Math.exp(this._p1 * a) - this._p3) / this._p2;
    }, r.config = c.config = function (a, b, d) {
      return new c(a, b, d);
    }, d = j("easing.RoughEase", function (b) {
      b = b || {};

      for (var c, d, e, f, g, h, i = b.taper || "none", j = [], k = 0, l = 0 | (b.points || 20), m = l, o = b.randomize !== !1, p = b.clamp === !0, q = b.template instanceof a ? b.template : null, r = "number" == typeof b.strength ? .4 * b.strength : .4; --m > -1;) {
        c = o ? Math.random() : 1 / l * m, d = q ? q.getRatio(c) : c, "none" === i ? e = r : "out" === i ? (f = 1 - c, e = f * f * r) : "in" === i ? e = c * c * r : .5 > c ? (f = 2 * c, e = f * f * .5 * r) : (f = 2 * (1 - c), e = f * f * .5 * r), o ? d += Math.random() * e - .5 * e : m % 2 ? d += .5 * e : d -= .5 * e, p && (d > 1 ? d = 1 : 0 > d && (d = 0)), j[k++] = {
          x: c,
          y: d
        };
      }

      for (j.sort(function (a, b) {
        return a.x - b.x;
      }), h = new n(1, 1, null), m = l; --m > -1;) {
        g = j[m], h = new n(g.x, g.y, h);
      }

      this._prev = new n(0, 0, 0 !== h.t ? h : h.next);
    }, !0), r = d.prototype = new a(), r.constructor = d, r.getRatio = function (a) {
      var b = this._prev;

      if (a > b.t) {
        for (; b.next && a >= b.t;) {
          b = b.next;
        }

        b = b.prev;
      } else for (; b.prev && a <= b.t;) {
        b = b.prev;
      }

      return this._prev = b, b.v + (a - b.t) / b.gap * b.c;
    }, r.config = function (a) {
      return new d(a);
    }, d.ease = new d(), m("Bounce", k("BounceOut", function (a) {
      return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375;
    }), k("BounceIn", function (a) {
      return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375);
    }), k("BounceInOut", function (a) {
      var b = .5 > a;
      return a = b ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, b ? .5 * (1 - a) : .5 * a + .5;
    })), m("Circ", k("CircOut", function (a) {
      return Math.sqrt(1 - (a -= 1) * a);
    }), k("CircIn", function (a) {
      return -(Math.sqrt(1 - a * a) - 1);
    }), k("CircInOut", function (a) {
      return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1);
    })), e = function e(b, c, d) {
      var e = j("easing." + b, function (a, b) {
        this._p1 = a >= 1 ? a : 1, this._p2 = (b || d) / (1 > a ? a : 1), this._p3 = this._p2 / h * (Math.asin(1 / this._p1) || 0), this._p2 = h / this._p2;
      }, !0),
          f = e.prototype = new a();
      return f.constructor = e, f.getRatio = c, f.config = function (a, b) {
        return new e(a, b);
      }, e;
    }, m("Elastic", e("ElasticOut", function (a) {
      return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * this._p2) + 1;
    }, .3), e("ElasticIn", function (a) {
      return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2));
    }, .3), e("ElasticInOut", function (a) {
      return (a *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) * .5 + 1;
    }, .45)), m("Expo", k("ExpoOut", function (a) {
      return 1 - Math.pow(2, -10 * a);
    }), k("ExpoIn", function (a) {
      return Math.pow(2, 10 * (a - 1)) - .001;
    }), k("ExpoInOut", function (a) {
      return (a *= 2) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)));
    })), m("Sine", k("SineOut", function (a) {
      return Math.sin(a * i);
    }), k("SineIn", function (a) {
      return -Math.cos(a * i) + 1;
    }), k("SineInOut", function (a) {
      return -.5 * (Math.cos(Math.PI * a) - 1);
    })), j("easing.EaseLookup", {
      find: function find(b) {
        return a.map[b];
      }
    }, !0), l(f.SlowMo, "SlowMo", "ease,"), l(d, "RoughEase", "ease,"), l(b, "SteppedEase", "ease,"), p;
  }, !0);
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (a, b) {
  "use strict";

  var c = {},
      d = a.document,
      e = a.GreenSockGlobals = a.GreenSockGlobals || a,
      f = e[b];
  if (f) return  true && module.exports && (module.exports = f), f;

  var g,
      h,
      i,
      j,
      k,
      l = function l(a) {
    var b,
        c = a.split("."),
        d = e;

    for (b = 0; b < c.length; b++) {
      d[c[b]] = d = d[c[b]] || {};
    }

    return d;
  },
      m = l("com.greensock"),
      n = 1e-8,
      o = function o(a) {
    var b,
        c = [],
        d = a.length;

    for (b = 0; b !== d; c.push(a[b++])) {
      ;
    }

    return c;
  },
      p = function p() {},
      q = function () {
    var a = Object.prototype.toString,
        b = a.call([]);
    return function (c) {
      return null != c && (c instanceof Array || "object" == _typeof(c) && !!c.push && a.call(c) === b);
    };
  }(),
      r = {},
      s = function s(d, f, g, h) {
    this.sc = r[d] ? r[d].sc : [], r[d] = this, this.gsClass = null, this.func = g;
    var i = [];
    this.check = function (j) {
      for (var k, m, n, o, p = f.length, q = p; --p > -1;) {
        (k = r[f[p]] || new s(f[p], [])).gsClass ? (i[p] = k.gsClass, q--) : j && k.sc.push(this);
      }

      if (0 === q && g) {
        if (m = ("com.greensock." + d).split("."), n = m.pop(), o = l(m.join("."))[n] = this.gsClass = g.apply(g, i), h) if (e[n] = c[n] = o,  true && module.exports) {
          if (d === b) {
            module.exports = c[b] = o;

            for (p in c) {
              o[p] = c[p];
            }
          } else c[b] && (c[b][n] = o);
        } else  true && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
          return o;
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

        for (p = 0; p < this.sc.length; p++) {
          this.sc[p].check();
        }
      }
    }, this.check(!0);
  },
      t = a._gsDefine = function (a, b, c, d) {
    return new s(a, b, c, d);
  },
      u = m._class = function (a, b, c) {
    return b = b || function () {}, t(a, [], function () {
      return b;
    }, c), b;
  };

  t.globals = e;

  var v = [0, 0, 1, 1],
      w = u("easing.Ease", function (a, b, c, d) {
    this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? v.concat(b) : v;
  }, !0),
      x = w.map = {},
      y = w.register = function (a, b, c, d) {
    for (var e, f, g, h, i = b.split(","), j = i.length, k = (c || "easeIn,easeOut,easeInOut").split(","); --j > -1;) {
      for (f = i[j], e = d ? u("easing." + f, null, !0) : m.easing[f] || {}, g = k.length; --g > -1;) {
        h = k[g], x[f + "." + h] = x[h + f] = e[h] = a.getRatio ? a : a[h] || new a();
      }
    }
  };

  for (i = w.prototype, i._calcEnd = !1, i.getRatio = function (a) {
    if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
    var b = this._type,
        c = this._power,
        d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
    return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2;
  }, g = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], h = g.length; --h > -1;) {
    i = g[h] + ",Power" + h, y(new w(null, null, 1, h), i, "easeOut", !0), y(new w(null, null, 2, h), i, "easeIn" + (0 === h ? ",easeNone" : "")), y(new w(null, null, 3, h), i, "easeInOut");
  }

  x.linear = m.easing.Linear.easeIn, x.swing = m.easing.Quad.easeInOut;
  var z = u("events.EventDispatcher", function (a) {
    this._listeners = {}, this._eventTarget = a || this;
  });
  i = z.prototype, i.addEventListener = function (a, b, c, d, e) {
    e = e || 0;
    var f,
        g,
        h = this._listeners[a],
        i = 0;

    for (this !== j || k || j.wake(), null == h && (this._listeners[a] = h = []), g = h.length; --g > -1;) {
      f = h[g], f.c === b && f.s === c ? h.splice(g, 1) : 0 === i && f.pr < e && (i = g + 1);
    }

    h.splice(i, 0, {
      c: b,
      s: c,
      up: d,
      pr: e
    });
  }, i.removeEventListener = function (a, b) {
    var c,
        d = this._listeners[a];
    if (d) for (c = d.length; --c > -1;) {
      if (d[c].c === b) return void d.splice(c, 1);
    }
  }, i.dispatchEvent = function (a) {
    var b,
        c,
        d,
        e = this._listeners[a];
    if (e) for (b = e.length, b > 1 && (e = e.slice(0)), c = this._eventTarget; --b > -1;) {
      d = e[b], d && (d.up ? d.c.call(d.s || c, {
        type: a,
        target: c
      }) : d.c.call(d.s || c));
    }
  };

  var A = a.requestAnimationFrame,
      B = a.cancelAnimationFrame,
      C = Date.now || function () {
    return new Date().getTime();
  },
      D = C();

  for (g = ["ms", "moz", "webkit", "o"], h = g.length; --h > -1 && !A;) {
    A = a[g[h] + "RequestAnimationFrame"], B = a[g[h] + "CancelAnimationFrame"] || a[g[h] + "CancelRequestAnimationFrame"];
  }

  u("Ticker", function (a, b) {
    var c,
        e,
        f,
        g,
        h,
        i = this,
        l = C(),
        m = b !== !1 && A ? "auto" : !1,
        o = 500,
        q = 33,
        r = "tick",
        s = function s(a) {
      var b,
          d,
          j = C() - D;
      j > o && (l += j - q), D += j, i.time = (D - l) / 1e3, b = i.time - h, (!c || b > 0 || a === !0) && (i.frame++, h += b + (b >= g ? .004 : g - b), d = !0), a !== !0 && (f = e(s)), d && i.dispatchEvent(r);
    };

    z.call(i), i.time = i.frame = 0, i.tick = function () {
      s(!0);
    }, i.lagSmoothing = function (a, b) {
      return arguments.length ? (o = a || 1 / n, void (q = Math.min(b, o, 0))) : 1 / n > o;
    }, i.sleep = function () {
      null != f && (m && B ? B(f) : clearTimeout(f), e = p, f = null, i === j && (k = !1));
    }, i.wake = function (a) {
      null !== f ? i.sleep() : a ? l += -D + (D = C()) : i.frame > 10 && (D = C() - o + 5), e = 0 === c ? p : m && A ? A : function (a) {
        return setTimeout(a, 1e3 * (h - i.time) + 1 | 0);
      }, i === j && (k = !0), s(2);
    }, i.fps = function (a) {
      return arguments.length ? (c = a, g = 1 / (c || 60), h = this.time + g, void i.wake()) : c;
    }, i.useRAF = function (a) {
      return arguments.length ? (i.sleep(), m = a, void i.fps(c)) : m;
    }, i.fps(a), setTimeout(function () {
      "auto" === m && i.frame < 5 && "hidden" !== (d || {}).visibilityState && i.useRAF(!1);
    }, 1500);
  }), i = m.Ticker.prototype = new m.events.EventDispatcher(), i.constructor = m.Ticker;
  var E = u("core.Animation", function (a, b) {
    if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = !!b.immediateRender, this.data = b.data, this._reversed = !!b.reversed, Z) {
      k || j.wake();
      var c = this.vars.useFrames ? Y : Z;
      c.add(this, c._time), this.vars.paused && this.paused(!0);
    }
  });
  j = E.ticker = new m.Ticker(), i = E.prototype, i._dirty = i._gc = i._initted = i._paused = !1, i._totalTime = i._time = 0, i._rawPrevTime = -1, i._next = i._last = i._onUpdate = i._timeline = i.timeline = null, i._paused = !1;

  var F = function F() {
    k && C() - D > 2e3 && ("hidden" !== (d || {}).visibilityState || !j.lagSmoothing()) && j.wake();
    var a = setTimeout(F, 2e3);
    a.unref && a.unref();
  };

  F(), i.play = function (a, b) {
    return null != a && this.seek(a, b), this.reversed(!1).paused(!1);
  }, i.pause = function (a, b) {
    return null != a && this.seek(a, b), this.paused(!0);
  }, i.resume = function (a, b) {
    return null != a && this.seek(a, b), this.paused(!1);
  }, i.seek = function (a, b) {
    return this.totalTime(Number(a), b !== !1);
  }, i.restart = function (a, b) {
    return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0);
  }, i.reverse = function (a, b) {
    return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1);
  }, i.render = function (a, b, c) {}, i.invalidate = function () {
    return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this;
  }, i.isActive = function () {
    var a,
        b = this._timeline,
        c = this._startTime;
    return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime(!0)) >= c && a < c + this.totalDuration() / this._timeScale - n;
  }, i._enabled = function (a, b) {
    return k || j.wake(), this._gc = !a, this._active = this.isActive(), b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1;
  }, i._kill = function (a, b) {
    return this._enabled(!1, !1);
  }, i.kill = function (a, b) {
    return this._kill(a, b), this;
  }, i._uncache = function (a) {
    for (var b = a ? this : this.timeline; b;) {
      b._dirty = !0, b = b.timeline;
    }

    return this;
  }, i._swapSelfInParams = function (a) {
    for (var b = a.length, c = a.concat(); --b > -1;) {
      "{self}" === a[b] && (c[b] = this);
    }

    return c;
  }, i._callback = function (a) {
    var b = this.vars,
        c = b[a],
        d = b[a + "Params"],
        e = b[a + "Scope"] || b.callbackScope || this,
        f = d ? d.length : 0;

    switch (f) {
      case 0:
        c.call(e);
        break;

      case 1:
        c.call(e, d[0]);
        break;

      case 2:
        c.call(e, d[0], d[1]);
        break;

      default:
        c.apply(e, d);
    }
  }, i.eventCallback = function (a, b, c, d) {
    if ("on" === (a || "").substr(0, 2)) {
      var e = this.vars;
      if (1 === arguments.length) return e[a];
      null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = q(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b);
    }

    return this;
  }, i.delay = function (a) {
    return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay;
  }, i.duration = function (a) {
    return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration);
  }, i.totalDuration = function (a) {
    return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration;
  }, i.time = function (a, b) {
    return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time;
  }, i.totalTime = function (a, b, c) {
    if (k || j.wake(), !arguments.length) return this._totalTime;

    if (this._timeline) {
      if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
        this._dirty && this.totalDuration();
        var d = this._totalDuration,
            e = this._timeline;
        if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline) for (; e._timeline;) {
          e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline;
        }
      }

      this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && (K.length && _(), this.render(a, b, !1), K.length && _());
    }

    return this;
  }, i.progress = i.totalProgress = function (a, b) {
    var c = this.duration();
    return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio;
  }, i.startTime = function (a) {
    return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime;
  }, i.endTime = function (a) {
    return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale;
  }, i.timeScale = function (a) {
    if (!arguments.length) return this._timeScale;
    var b, c;

    for (a = a || n, this._timeline && this._timeline.smoothChildTiming && (b = this._pauseTime, c = b || 0 === b ? b : this._timeline.totalTime(), this._startTime = c - (c - this._startTime) * this._timeScale / a), this._timeScale = a, c = this.timeline; c && c.timeline;) {
      c._dirty = !0, c.totalDuration(), c = c.timeline;
    }

    return this;
  }, i.reversed = function (a) {
    return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed;
  }, i.paused = function (a) {
    if (!arguments.length) return this._paused;
    var b,
        c,
        d = this._timeline;
    return a != this._paused && d && (k || a || j.wake(), b = d.rawTime(), c = b - this._pauseTime, !a && d.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = this.isActive(), !a && 0 !== c && this._initted && this.duration() && (b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, this.render(b, b === this._totalTime, !0))), this._gc && !a && this._enabled(!0, !1), this;
  };
  var G = u("core.SimpleTimeline", function (a) {
    E.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0;
  });
  i = G.prototype = new E(), i.constructor = G, i.kill()._gc = !1, i._first = i._last = i._recent = null, i._sortChildren = !1, i.add = i.insert = function (a, b, c, d) {
    var e, f;
    if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = this.rawTime() - (a._timeline.rawTime() - a._pauseTime)), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), e = this._last, this._sortChildren) for (f = a._startTime; e && e._startTime > f;) {
      e = e._prev;
    }
    return e ? (a._next = e._next, e._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = e, this._recent = a, this._timeline && this._uncache(!0), this;
  }, i._remove = function (a, b) {
    return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this;
  }, i.render = function (a, b, c) {
    var d,
        e = this._first;

    for (this._totalTime = this._time = this._rawPrevTime = a; e;) {
      d = e._next, (e._active || a >= e._startTime && !e._paused && !e._gc) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d;
    }
  }, i.rawTime = function () {
    return k || j.wake(), this._totalTime;
  };

  var H = u("TweenLite", function (b, c, d) {
    if (E.call(this, c, d), this.render = H.prototype.render, null == b) throw "Cannot tween a null target.";
    this.target = b = "string" != typeof b ? b : H.selector(b) || b;
    var e,
        f,
        g,
        h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType),
        i = this.vars.overwrite;
    if (this._overwrite = i = null == i ? X[H.defaultOverwrite] : "number" == typeof i ? i >> 0 : X[i], (h || b instanceof Array || b.push && q(b)) && "number" != typeof b[0]) for (this._targets = g = o(b), this._propLookup = [], this._siblings = [], e = 0; e < g.length; e++) {
      f = g[e], f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(o(f))) : (this._siblings[e] = aa(f, this, !1), 1 === i && this._siblings[e].length > 1 && ca(f, this, null, 1, this._siblings[e])) : (f = g[e--] = H.selector(f), "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1);
    } else this._propLookup = {}, this._siblings = aa(b, this, !1), 1 === i && this._siblings.length > 1 && ca(b, this, null, 1, this._siblings);
    (this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -n, this.render(Math.min(0, -this._delay)));
  }, !0),
      I = function I(b) {
    return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType);
  },
      J = function J(a, b) {
    var c,
        d = {};

    for (c in a) {
      W[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!T[c] || T[c] && T[c]._autoCSS) || (d[c] = a[c], delete a[c]);
    }

    a.css = d;
  };

  i = H.prototype = new E(), i.constructor = H, i.kill()._gc = !1, i.ratio = 0, i._firstPT = i._targets = i._overwrittenProps = i._startAt = null, i._notifyPluginsOfEnabled = i._lazy = !1, H.version = "2.1.3", H.defaultEase = i._ease = new w(null, null, 1, 1), H.defaultOverwrite = "auto", H.ticker = j, H.autoSleep = 120, H.lagSmoothing = function (a, b) {
    j.lagSmoothing(a, b);
  }, H.selector = a.$ || a.jQuery || function (b) {
    var c = a.$ || a.jQuery;
    return c ? (H.selector = c, c(b)) : (d || (d = a.document), d ? d.querySelectorAll ? d.querySelectorAll(b) : d.getElementById("#" === b.charAt(0) ? b.substr(1) : b) : b);
  };

  var K = [],
      L = {},
      M = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
      N = /[\+-]=-?[\.\d]/,
      O = function O(a) {
    for (var b, c = this._firstPT, d = 1e-6; c;) {
      b = c.blob ? 1 === a && null != this.end ? this.end : a ? this.join("") : this.start : c.c * a + c.s, c.m ? b = c.m.call(this._tween, b, this._target || c.t, this._tween) : d > b && b > -d && !c.blob && (b = 0), c.f ? c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b, c = c._next;
    }
  },
      P = function P(a) {
    return (1e3 * a | 0) / 1e3 + "";
  },
      Q = function Q(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = [],
        m = 0,
        n = "",
        o = 0;

    for (l.start = a, l.end = b, a = l[0] = a + "", b = l[1] = b + "", c && (c(l), a = l[0], b = l[1]), l.length = 0, e = a.match(M) || [], f = b.match(M) || [], d && (d._next = null, d.blob = 1, l._firstPT = l._applyPT = d), i = f.length, h = 0; i > h; h++) {
      k = f[h], j = b.substr(m, b.indexOf(k, m) - m), n += j || !h ? j : ",", m += j.length, o ? o = (o + 1) % 5 : "rgba(" === j.substr(-5) && (o = 1), k === e[h] || e.length <= h ? n += k : (n && (l.push(n), n = ""), g = parseFloat(e[h]), l.push(g), l._firstPT = {
        _next: l._firstPT,
        t: l,
        p: l.length - 1,
        s: g,
        c: ("=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * parseFloat(k.substr(2)) : parseFloat(k) - g) || 0,
        f: 0,
        m: o && 4 > o ? Math.round : P
      }), m += k.length;
    }

    return n += b.substr(m), n && l.push(n), l.setRatio = O, N.test(b) && (l.end = null), l;
  },
      R = function R(a, b, c, d, e, f, g, h, i) {
    "function" == typeof d && (d = d(i || 0, a));

    var j,
        k = _typeof(a[b]),
        l = "function" !== k ? "" : b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3),
        m = "get" !== c ? c : l ? g ? a[l](g) : a[l]() : a[b],
        n = "string" == typeof d && "=" === d.charAt(1),
        o = {
      t: a,
      p: b,
      s: m,
      f: "function" === k,
      pg: 0,
      n: e || b,
      m: f ? "function" == typeof f ? f : Math.round : 0,
      pr: 0,
      c: n ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - m || 0
    };

    return ("number" != typeof m || "number" != typeof d && !n) && (g || isNaN(m) || !n && isNaN(d) || "boolean" == typeof m || "boolean" == typeof d ? (o.fp = g, j = Q(m, n ? parseFloat(o.s) + o.c + (o.s + "").replace(/[0-9\-\.]/g, "") : d, h || H.defaultStringFilter, o), o = {
      t: j,
      p: "setRatio",
      s: 0,
      c: 1,
      f: 2,
      pg: 0,
      n: e || b,
      pr: 0,
      m: 0
    }) : (o.s = parseFloat(m), n || (o.c = parseFloat(d) - o.s || 0))), o.c ? ((o._next = this._firstPT) && (o._next._prev = o), this._firstPT = o, o) : void 0;
  },
      S = H._internals = {
    isArray: q,
    isSelector: I,
    lazyTweens: K,
    blobDif: Q
  },
      T = H._plugins = {},
      U = S.tweenLookup = {},
      V = 0,
      W = S.reservedProps = {
    ease: 1,
    delay: 1,
    overwrite: 1,
    onComplete: 1,
    onCompleteParams: 1,
    onCompleteScope: 1,
    useFrames: 1,
    runBackwards: 1,
    startAt: 1,
    onUpdate: 1,
    onUpdateParams: 1,
    onUpdateScope: 1,
    onStart: 1,
    onStartParams: 1,
    onStartScope: 1,
    onReverseComplete: 1,
    onReverseCompleteParams: 1,
    onReverseCompleteScope: 1,
    onRepeat: 1,
    onRepeatParams: 1,
    onRepeatScope: 1,
    easeParams: 1,
    yoyo: 1,
    immediateRender: 1,
    repeat: 1,
    repeatDelay: 1,
    data: 1,
    paused: 1,
    reversed: 1,
    autoCSS: 1,
    lazy: 1,
    onOverwrite: 1,
    callbackScope: 1,
    stringFilter: 1,
    id: 1,
    yoyoEase: 1,
    stagger: 1
  },
      X = {
    none: 0,
    all: 1,
    auto: 2,
    concurrent: 3,
    allOnStart: 4,
    preexisting: 5,
    "true": 1,
    "false": 0
  },
      Y = E._rootFramesTimeline = new G(),
      Z = E._rootTimeline = new G(),
      $ = 30,
      _ = S.lazyRender = function () {
    var a,
        b,
        c = K.length;

    for (L = {}, a = 0; c > a; a++) {
      b = K[a], b && b._lazy !== !1 && (b.render(b._lazy[0], b._lazy[1], !0), b._lazy = !1);
    }

    K.length = 0;
  };

  Z._startTime = j.time, Y._startTime = j.frame, Z._active = Y._active = !0, setTimeout(_, 1), E._updateRoot = H.render = function () {
    var a, b, c;

    if (K.length && _(), Z.render((j.time - Z._startTime) * Z._timeScale, !1, !1), Y.render((j.frame - Y._startTime) * Y._timeScale, !1, !1), K.length && _(), j.frame >= $) {
      $ = j.frame + (parseInt(H.autoSleep, 10) || 120);

      for (c in U) {
        for (b = U[c].tweens, a = b.length; --a > -1;) {
          b[a]._gc && b.splice(a, 1);
        }

        0 === b.length && delete U[c];
      }

      if (c = Z._first, (!c || c._paused) && H.autoSleep && !Y._first && 1 === j._listeners.tick.length) {
        for (; c && c._paused;) {
          c = c._next;
        }

        c || j.sleep();
      }
    }
  }, j.addEventListener("tick", E._updateRoot);

  var aa = function aa(a, b, c) {
    var d,
        e,
        f = a._gsTweenID;
    if (U[f || (a._gsTweenID = f = "t" + V++)] || (U[f] = {
      target: a,
      tweens: []
    }), b && (d = U[f].tweens, d[e = d.length] = b, c)) for (; --e > -1;) {
      d[e] === b && d.splice(e, 1);
    }
    return U[f].tweens;
  },
      ba = function ba(a, b, c, d) {
    var e,
        f,
        g = a.vars.onOverwrite;
    return g && (e = g(a, b, c, d)), g = H.onOverwrite, g && (f = g(a, b, c, d)), e !== !1 && f !== !1;
  },
      ca = function ca(a, b, c, d, e) {
    var f, g, h, i;

    if (1 === d || d >= 4) {
      for (i = e.length, f = 0; i > f; f++) {
        if ((h = e[f]) !== b) h._gc || h._kill(null, a, b) && (g = !0);else if (5 === d) break;
      }

      return g;
    }

    var j,
        k = b._startTime + n,
        l = [],
        m = 0,
        o = 0 === b._duration;

    for (f = e.length; --f > -1;) {
      (h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || da(b, 0, o), 0 === da(h, j, o) && (l[m++] = h)) : h._startTime <= k && h._startTime + h.totalDuration() / h._timeScale > k && ((o || !h._initted) && k - h._startTime <= 2 * n || (l[m++] = h)));
    }

    for (f = m; --f > -1;) {
      if (h = l[f], i = h._firstPT, 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || !h._firstPT && h._initted && i) {
        if (2 !== d && !ba(h, b)) continue;
        h._enabled(!1, !1) && (g = !0);
      }
    }

    return g;
  },
      da = function da(a, b, c) {
    for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) {
      if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
      d = d._timeline;
    }

    return f /= e, f > b ? f - b : c && f === b || !a._initted && 2 * n > f - b ? n : (f += a.totalDuration() / a._timeScale / e) > b + n ? 0 : f - b - n;
  };

  i._init = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = this.vars,
        h = this._overwrittenProps,
        i = this._duration,
        j = !!g.immediateRender,
        k = g.ease,
        l = this._startAt;

    if (g.startAt) {
      l && (l.render(-1, !0), l.kill()), e = {};

      for (d in g.startAt) {
        e[d] = g.startAt[d];
      }

      if (e.data = "isStart", e.overwrite = !1, e.immediateRender = !0, e.lazy = j && g.lazy !== !1, e.startAt = e.delay = null, e.onUpdate = g.onUpdate, e.onUpdateParams = g.onUpdateParams, e.onUpdateScope = g.onUpdateScope || g.callbackScope || this, this._startAt = H.to(this.target || {}, 0, e), j) if (this._time > 0) this._startAt = null;else if (0 !== i) return;
    } else if (g.runBackwards && 0 !== i) if (l) l.render(-1, !0), l.kill(), this._startAt = null;else {
      0 !== this._time && (j = !1), c = {};

      for (d in g) {
        W[d] && "autoCSS" !== d || (c[d] = g[d]);
      }

      if (c.overwrite = 0, c.data = "isFromStart", c.lazy = j && g.lazy !== !1, c.immediateRender = j, this._startAt = H.to(this.target, 0, c), j) {
        if (0 === this._time) return;
      } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
    }

    if (this._ease = k = k ? k instanceof w ? k : "function" == typeof k ? new w(k, g.easeParams) : x[k] || H.defaultEase : H.defaultEase, g.easeParams instanceof Array && k.config && (this._ease = k.config.apply(k, g.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (f = this._targets.length, a = 0; f > a; a++) {
      this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], h ? h[a] : null, a) && (b = !0);
    } else b = this._initProps(this.target, this._propLookup, this._siblings, h, 0);
    if (b && H._onPluginEvent("_onInitAllProps", this), h && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), g.runBackwards) for (c = this._firstPT; c;) {
      c.s += c.c, c.c = -c.c, c = c._next;
    }
    this._onUpdate = g.onUpdate, this._initted = !0;
  }, i._initProps = function (b, c, d, e, f) {
    var g, h, i, j, k, l;
    if (null == b) return !1;
    L[b._gsTweenID] && _(), this.vars.css || b.style && b !== a && b.nodeType && T.css && this.vars.autoCSS !== !1 && J(this.vars, b);

    for (g in this.vars) {
      if (l = this.vars[g], W[g]) l && (l instanceof Array || l.push && q(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[g] = l = this._swapSelfInParams(l, this));else if (T[g] && (j = new T[g]())._onInitTween(b, this.vars[g], this, f)) {
        for (this._firstPT = k = {
          _next: this._firstPT,
          t: j,
          p: "setRatio",
          s: 0,
          c: 1,
          f: 1,
          n: g,
          pg: 1,
          pr: j._priority,
          m: 0
        }, h = j._overwriteProps.length; --h > -1;) {
          c[j._overwriteProps[h]] = this._firstPT;
        }

        (j._priority || j._onInitAllProps) && (i = !0), (j._onDisable || j._onEnable) && (this._notifyPluginsOfEnabled = !0), k._next && (k._next._prev = k);
      } else c[g] = R.call(this, b, g, "get", l, g, 0, null, this.vars.stringFilter, f);
    }

    return e && this._kill(e, b) ? this._initProps(b, c, d, e, f) : this._overwrite > 1 && this._firstPT && d.length > 1 && ca(b, this, c, this._overwrite, d) ? (this._kill(c, b), this._initProps(b, c, d, e, f)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (L[b._gsTweenID] = !0), i);
  }, i.render = function (a, b, c) {
    var d,
        e,
        f,
        g,
        h = this,
        i = h._time,
        j = h._duration,
        k = h._rawPrevTime;
    if (a >= j - n && a >= 0) h._totalTime = h._time = j, h.ratio = h._ease._calcEnd ? h._ease.getRatio(1) : 1, h._reversed || (d = !0, e = "onComplete", c = c || h._timeline.autoRemoveChildren), 0 === j && (h._initted || !h.vars.lazy || c) && (h._startTime === h._timeline._duration && (a = 0), (0 > k || 0 >= a && a >= -n || k === n && "isPause" !== h.data) && k !== a && (c = !0, k > n && (e = "onReverseComplete")), h._rawPrevTime = g = !b || a || k === a ? a : n);else if (n > a) h._totalTime = h._time = 0, h.ratio = h._ease._calcEnd ? h._ease.getRatio(0) : 0, (0 !== i || 0 === j && k > 0) && (e = "onReverseComplete", d = h._reversed), a > -n ? a = 0 : 0 > a && (h._active = !1, 0 === j && (h._initted || !h.vars.lazy || c) && (k >= 0 && (k !== n || "isPause" !== h.data) && (c = !0), h._rawPrevTime = g = !b || a || k === a ? a : n)), (!h._initted || h._startAt && h._startAt.progress()) && (c = !0);else if (h._totalTime = h._time = a, h._easeType) {
      var l = a / j,
          m = h._easeType,
          o = h._easePower;
      (1 === m || 3 === m && l >= .5) && (l = 1 - l), 3 === m && (l *= 2), 1 === o ? l *= l : 2 === o ? l *= l * l : 3 === o ? l *= l * l * l : 4 === o && (l *= l * l * l * l), h.ratio = 1 === m ? 1 - l : 2 === m ? l : .5 > a / j ? l / 2 : 1 - l / 2;
    } else h.ratio = h._ease.getRatio(a / j);

    if (h._time !== i || c) {
      if (!h._initted) {
        if (h._init(), !h._initted || h._gc) return;
        if (!c && h._firstPT && (h.vars.lazy !== !1 && h._duration || h.vars.lazy && !h._duration)) return h._time = h._totalTime = i, h._rawPrevTime = k, K.push(h), void (h._lazy = [a, b]);
        h._time && !d ? h.ratio = h._ease.getRatio(h._time / j) : d && h._ease._calcEnd && (h.ratio = h._ease.getRatio(0 === h._time ? 0 : 1));
      }

      for (h._lazy !== !1 && (h._lazy = !1), h._active || !h._paused && h._time !== i && a >= 0 && (h._active = !0), 0 === i && (h._startAt && (a >= 0 ? h._startAt.render(a, !0, c) : e || (e = "_dummyGS")), h.vars.onStart && (0 !== h._time || 0 === j) && (b || h._callback("onStart"))), f = h._firstPT; f;) {
        f.f ? f.t[f.p](f.c * h.ratio + f.s) : f.t[f.p] = f.c * h.ratio + f.s, f = f._next;
      }

      h._onUpdate && (0 > a && h._startAt && a !== -1e-4 && h._startAt.render(a, !0, c), b || (h._time !== i || d || c) && h._callback("onUpdate")), e && (!h._gc || c) && (0 > a && h._startAt && !h._onUpdate && a !== -1e-4 && h._startAt.render(a, !0, c), d && (h._timeline.autoRemoveChildren && h._enabled(!1, !1), h._active = !1), !b && h.vars[e] && h._callback(e), 0 === j && h._rawPrevTime === n && g !== n && (h._rawPrevTime = 0));
    }
  }, i._kill = function (a, b, c) {
    if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._lazy = !1, this._enabled(!1, !1);
    b = "string" != typeof b ? b || this._targets || this.target : H.selector(b) || b;
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline,
        n = this._firstPT;
    if ((q(b) || I(b)) && "number" != typeof b[0]) for (d = b.length; --d > -1;) {
      this._kill(a, b[d], c) && (i = !0);
    } else {
      if (this._targets) {
        for (d = this._targets.length; --d > -1;) {
          if (b === this._targets[d]) {
            h = this._propLookup[d] || {}, this._overwrittenProps = this._overwrittenProps || [], e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all";
            break;
          }
        }
      } else {
        if (b !== this.target) return !1;
        h = this._propLookup, e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all";
      }

      if (h) {
        if (j = a || h, k = a !== e && "all" !== e && a !== h && ("object" != _typeof(a) || !a._tempKill), c && (H.onOverwrite || this.vars.onOverwrite)) {
          for (f in j) {
            h[f] && (l || (l = []), l.push(f));
          }

          if ((l || !a) && !ba(this, c, b, l)) return !1;
        }

        for (f in j) {
          (g = h[f]) && (m && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s, i = !0), g.pg && g.t._kill(j) && (i = !0), g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next = g._next : g === this._firstPT && (this._firstPT = g._next), g._next && (g._next._prev = g._prev), g._next = g._prev = null), delete h[f]), k && (e[f] = 1);
        }

        !this._firstPT && this._initted && n && this._enabled(!1, !1);
      }
    }
    return i;
  }, i.invalidate = function () {
    this._notifyPluginsOfEnabled && H._onPluginEvent("_onDisable", this);
    var a = this._time;
    return this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], E.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -n, this.render(a, !1, this.vars.lazy !== !1)), this;
  }, i._enabled = function (a, b) {
    if (k || j.wake(), a && this._gc) {
      var c,
          d = this._targets;
      if (d) for (c = d.length; --c > -1;) {
        this._siblings[c] = aa(d[c], this, !0);
      } else this._siblings = aa(this.target, this, !0);
    }

    return E.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? H._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1;
  }, H.to = function (a, b, c) {
    return new H(a, b, c);
  }, H.from = function (a, b, c) {
    return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new H(a, b, c);
  }, H.fromTo = function (a, b, c, d) {
    return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new H(a, b, d);
  }, H.delayedCall = function (a, b, c, d, e) {
    return new H(b, 0, {
      delay: a,
      onComplete: b,
      onCompleteParams: c,
      callbackScope: d,
      onReverseComplete: b,
      onReverseCompleteParams: c,
      immediateRender: !1,
      lazy: !1,
      useFrames: e,
      overwrite: 0
    });
  }, H.set = function (a, b) {
    return new H(a, 0, b);
  }, H.getTweensOf = function (a, b) {
    if (null == a) return [];
    a = "string" != typeof a ? a : H.selector(a) || a;
    var c, d, e, f;

    if ((q(a) || I(a)) && "number" != typeof a[0]) {
      for (c = a.length, d = []; --c > -1;) {
        d = d.concat(H.getTweensOf(a[c], b));
      }

      for (c = d.length; --c > -1;) {
        for (f = d[c], e = c; --e > -1;) {
          f === d[e] && d.splice(c, 1);
        }
      }
    } else if (a._gsTweenID) for (d = aa(a).concat(), c = d.length; --c > -1;) {
      (d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
    }

    return d || [];
  }, H.killTweensOf = H.killDelayedCallsTo = function (a, b, c) {
    "object" == _typeof(b) && (c = b, b = !1);

    for (var d = H.getTweensOf(a, b), e = d.length; --e > -1;) {
      d[e]._kill(c, a);
    }
  };
  var ea = u("plugins.TweenPlugin", function (a, b) {
    this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = ea.prototype;
  }, !0);

  if (i = ea.prototype, ea.version = "1.19.0", ea.API = 2, i._firstPT = null, i._addTween = R, i.setRatio = O, i._kill = function (a) {
    var b,
        c = this._overwriteProps,
        d = this._firstPT;
    if (null != a[this._propName]) this._overwriteProps = [];else for (b = c.length; --b > -1;) {
      null != a[c[b]] && c.splice(b, 1);
    }

    for (; d;) {
      null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
    }

    return !1;
  }, i._mod = i._roundProps = function (a) {
    for (var b, c = this._firstPT; c;) {
      b = a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")], b && "function" == typeof b && (2 === c.f ? c.t._applyPT.m = b : c.m = b), c = c._next;
    }
  }, H._onPluginEvent = function (a, b) {
    var c,
        d,
        e,
        f,
        g,
        h = b._firstPT;

    if ("_onInitAllProps" === a) {
      for (; h;) {
        for (g = h._next, d = e; d && d.pr > h.pr;) {
          d = d._next;
        }

        (h._prev = d ? d._prev : f) ? h._prev._next = h : e = h, (h._next = d) ? d._prev = h : f = h, h = g;
      }

      h = b._firstPT = e;
    }

    for (; h;) {
      h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
    }

    return c;
  }, ea.activate = function (a) {
    for (var b = a.length; --b > -1;) {
      a[b].API === ea.API && (T[new a[b]()._propName] = a[b]);
    }

    return !0;
  }, t.plugin = function (a) {
    if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
    var b,
        c = a.propName,
        d = a.priority || 0,
        e = a.overwriteProps,
        f = {
      init: "_onInitTween",
      set: "setRatio",
      kill: "_kill",
      round: "_mod",
      mod: "_mod",
      initAll: "_onInitAllProps"
    },
        g = u("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function () {
      ea.call(this, c, d), this._overwriteProps = e || [];
    }, a.global === !0),
        h = g.prototype = new ea(c);
    h.constructor = g, g.API = a.API;

    for (b in f) {
      "function" == typeof a[b] && (h[f[b]] = a[b]);
    }

    return g.version = a.version, ea.activate([g]), g;
  }, g = a._gsQueue) {
    for (h = 0; h < g.length; h++) {
      g[h]();
    }

    for (i in r) {
      r[i].func || a.console.log("GSAP encountered missing dependency: " + i);
    }
  }

  k = !1;
}( true && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./resources/js/webgl/sketch.js":
/*!**************************************!*\
  !*** ./resources/js/webgl/sketch.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sketch =
/*#__PURE__*/
function () {
  function Sketch(opts) {
    var _this = this;

    _classCallCheck(this, Sketch);

    this.scene = new THREE.Scene();
    this.vertex = "varying vec2 vUv;void main() {vUv = uv;gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );}";
    this.fragment = opts.fragment;
    this.uniforms = opts.uniforms;
    this.renderer = new THREE.WebGLRenderer();
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0xeeeeee, 1);
    this.duration = opts.duration || 1;
    this.debug = opts.debug || false;
    this.easing = opts.easing || 'easeInOut';
    this.clicker = document.getElementById("content");
    this.container = document.getElementById("slider");
    this.images = JSON.parse(this.container.getAttribute('data-images'));
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.container.appendChild(this.renderer.domElement);
    this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.001, 1000);
    this.camera.position.set(0, 0, 2);
    this.time = 0;
    this.current = 0;
    this.textures = [];
    this.paused = true;
    this.initiate(function () {
      console.log(_this.textures);

      _this.setupResize();

      _this.settings();

      _this.addObjects();

      _this.resize();

      _this.clickEvent();

      _this.play();
    });
  }

  _createClass(Sketch, [{
    key: "initiate",
    value: function initiate(cb) {
      var promises = [];
      var that = this;
      this.images.forEach(function (url, i) {
        var promise = new Promise(function (resolve) {
          that.textures[i] = new THREE.TextureLoader().load(url, resolve);
        });
        promises.push(promise);
      });
      Promise.all(promises).then(function () {
        cb();
      });
    }
  }, {
    key: "clickEvent",
    value: function clickEvent() {
      var _this2 = this;

      this.clicker.addEventListener('click', function () {
        _this2.next();
      });
    }
  }, {
    key: "settings",
    value: function settings() {
      var _this3 = this;

      var that = this;
      if (this.debug) this.gui = new dat.GUI();
      this.settings = {
        progress: 0.5
      }; // if(this.debug) this.gui.add(this.settings, "progress", 0, 1, 0.01);

      Object.keys(this.uniforms).forEach(function (item) {
        _this3.settings[item] = _this3.uniforms[item].value;
        if (_this3.debug) _this3.gui.add(_this3.settings, item, _this3.uniforms[item].min, _this3.uniforms[item].max, 0.01);
      });
    }
  }, {
    key: "setupResize",
    value: function setupResize() {
      window.addEventListener("resize", this.resize.bind(this));
    }
  }, {
    key: "resize",
    value: function resize() {
      this.width = this.container.offsetWidth;
      this.height = this.container.offsetHeight;
      this.renderer.setSize(this.width, this.height);
      this.camera.aspect = this.width / this.height; // image cover

      this.imageAspect = this.textures[0].image.height / this.textures[0].image.width;
      var a1;
      var a2;

      if (this.height / this.width > this.imageAspect) {
        a1 = this.width / this.height * this.imageAspect;
        a2 = 1;
      } else {
        a1 = 1;
        a2 = this.height / this.width / this.imageAspect;
      }

      this.material.uniforms.resolution.value.x = this.width;
      this.material.uniforms.resolution.value.y = this.height;
      this.material.uniforms.resolution.value.z = a1;
      this.material.uniforms.resolution.value.w = a2;
      var dist = this.camera.position.z;
      var height = 1;
      this.camera.fov = 2 * (180 / Math.PI) * Math.atan(height / (2 * dist));
      this.plane.scale.x = this.camera.aspect;
      this.plane.scale.y = 1;
      this.camera.updateProjectionMatrix();
    }
  }, {
    key: "addObjects",
    value: function addObjects() {
      var that = this;
      this.material = new THREE.ShaderMaterial({
        extensions: {
          derivatives: "#extension GL_OES_standard_derivatives : enable"
        },
        side: THREE.DoubleSide,
        uniforms: {
          time: {
            type: "f",
            value: 0
          },
          progress: {
            type: "f",
            value: 0
          },
          border: {
            type: "f",
            value: 0
          },
          intensity: {
            type: "f",
            value: 0
          },
          scaleX: {
            type: "f",
            value: 40
          },
          scaleY: {
            type: "f",
            value: 40
          },
          transition: {
            type: "f",
            value: 40
          },
          swipe: {
            type: "f",
            value: 0
          },
          width: {
            type: "f",
            value: 0
          },
          radius: {
            type: "f",
            value: 0
          },
          texture1: {
            type: "f",
            value: this.textures[0]
          },
          texture2: {
            type: "f",
            value: this.textures[1]
          },
          displacement: {
            type: "f",
            value: new THREE.TextureLoader().load('img/disp1.jpg')
          },
          resolution: {
            type: "v4",
            value: new THREE.Vector4()
          }
        },
        // wireframe: true,
        vertexShader: this.vertex,
        fragmentShader: this.fragment
      });
      this.geometry = new THREE.PlaneGeometry(1, 1, 2, 2);
      this.plane = new THREE.Mesh(this.geometry, this.material);
      this.scene.add(this.plane);
    }
  }, {
    key: "stop",
    value: function stop() {
      this.paused = true;
    }
  }, {
    key: "play",
    value: function play() {
      this.paused = false;
      this.render();
    }
  }, {
    key: "next",
    value: function next() {
      var _this4 = this;

      if (this.isRunning) return;
      this.isRunning = true;
      var len = this.textures.length;
      var nextTexture = this.textures[(this.current + 1) % len];
      this.material.uniforms.texture2.value = nextTexture;
      var tl = new TimelineMax();
      tl.to(this.material.uniforms.progress, this.duration, {
        value: 1,
        ease: Power2[this.easing],
        onComplete: function onComplete() {
          console.log('FINISH');
          _this4.current = (_this4.current + 1) % len;
          _this4.material.uniforms.texture1.value = nextTexture;
          _this4.material.uniforms.progress.value = 0;
          _this4.isRunning = false;
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      if (this.paused) return;
      this.time += 0.05;
      this.material.uniforms.time.value = this.time; // this.material.uniforms.progress.value = this.settings.progress;

      Object.keys(this.uniforms).forEach(function (item) {
        _this5.material.uniforms[item].value = _this5.settings[item];
      }); // this.camera.position.z = 3;
      // this.plane.rotation.y = 0.4*Math.sin(this.time)
      // this.plane.rotation.x = 0.5*Math.sin(0.4*this.time)

      requestAnimationFrame(this.render.bind(this));
      this.renderer.render(this.scene, this.camera);
    }
  }]);

  return Sketch;
}();

/***/ }),

/***/ "./resources/js/webgl/three.js":
/*!*************************************!*\
  !*** ./resources/js/webgl/three.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}// threejs.org/license
(function(k,Ba){"object"===( false?undefined:_typeof(exports))&&"undefined"!==typeof module?Ba(exports): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (Ba),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):(undefined);})(this,function(k){function Ba(){}function w(a,b){this.x=a||0;this.y=b||0;}function ua(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._w=void 0!==d?d:1;}function n(a,b,c){this.x=a||0;this.y=b||0;this.z=c||0;}function Y(){this.elements=[1,0,0,0,1,0,0,0,1];0<arguments.length&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.");}function W(a,b,c,d,e,f,g,h,l,m){Object.defineProperty(this,"id",{value:Ri++});this.uuid=L.generateUUID();this.name="";this.image=void 0!==a?a:W.DEFAULT_IMAGE;this.mipmaps=[];this.mapping=void 0!==b?b:W.DEFAULT_MAPPING;this.wrapS=void 0!==c?c:1001;this.wrapT=void 0!==d?d:1001;this.magFilter=void 0!==e?e:1006;this.minFilter=void 0!==f?f:1008;this.anisotropy=void 0!==l?l:1;this.format=void 0!==g?g:1023;this.type=void 0!==h?h:1009;this.offset=new w(0,0);this.repeat=new w(1,1);this.center=new w(0,0);this.rotation=0;this.matrixAutoUpdate=!0;this.matrix=new Y();this.generateMipmaps=!0;this.premultiplyAlpha=!1;this.flipY=!0;this.unpackAlignment=4;this.encoding=void 0!==m?m:3E3;this.version=0;this.onUpdate=null;}function aa(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=void 0!==d?d:1;}function la(a,b,c){this.width=a;this.height=b;this.scissor=new aa(0,0,a,b);this.scissorTest=!1;this.viewport=new aa(0,0,a,b);c=c||{};this.texture=new W(void 0,void 0,c.wrapS,c.wrapT,c.magFilter,c.minFilter,c.format,c.type,c.anisotropy,c.encoding);this.texture.image={};this.texture.image.width=a;this.texture.image.height=b;this.texture.generateMipmaps=void 0!==c.generateMipmaps?c.generateMipmaps:!1;this.texture.minFilter=void 0!==c.minFilter?c.minFilter:1006;this.depthBuffer=void 0!==c.depthBuffer?c.depthBuffer:!0;this.stencilBuffer=void 0!==c.stencilBuffer?c.stencilBuffer:!0;this.depthTexture=void 0!==c.depthTexture?c.depthTexture:null;}function Of(a,b,c){la.call(this,a,b,c);this.samples=4;}function U(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];0<arguments.length&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.");}function Qb(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._order=d||Qb.DefaultOrder;}function Pf(){this.mask=1;}function B(){Object.defineProperty(this,"id",{value:Si++});this.uuid=L.generateUUID();this.name="";this.type="Object3D";this.parent=null;this.children=[];this.up=B.DefaultUp.clone();var a=new n(),b=new Qb(),c=new ua(),d=new n(1,1,1);b._onChange(function(){c.setFromEuler(b,!1);});c._onChange(function(){b.setFromQuaternion(c,void 0,!1);});Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:a},rotation:{configurable:!0,enumerable:!0,value:b},quaternion:{configurable:!0,enumerable:!0,value:c},scale:{configurable:!0,enumerable:!0,value:d},modelViewMatrix:{value:new U()},normalMatrix:{value:new Y()}});this.matrix=new U();this.matrixWorld=new U();this.matrixAutoUpdate=B.DefaultMatrixAutoUpdate;this.matrixWorldNeedsUpdate=!1;this.layers=new Pf();this.visible=!0;this.receiveShadow=this.castShadow=!1;this.frustumCulled=!0;this.renderOrder=0;this.userData={};}function wd(){B.call(this);this.type="Scene";this.overrideMaterial=this.fog=this.background=null;this.autoUpdate=!0;"undefined"!==typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}));}function ab(a,b){this.min=void 0!==a?a:new n(Infinity,Infinity,Infinity);this.max=void 0!==b?b:new n(-Infinity,-Infinity,-Infinity);}function Qf(a,b,c,d,e){var f;var g=0;for(f=a.length-3;g<=f;g+=3){Rb.fromArray(a,g);var h=e.x*Math.abs(Rb.x)+e.y*Math.abs(Rb.y)+e.z*Math.abs(Rb.z),l=b.dot(Rb),m=c.dot(Rb),q=d.dot(Rb);if(Math.max(-Math.max(l,m,q),Math.min(l,m,q))>h)return!1;}return!0;}function nb(a,b){this.center=void 0!==a?a:new n();this.radius=void 0!==b?b:0;}function Sb(a,b){this.origin=void 0!==a?a:new n();this.direction=void 0!==b?b:new n();}function R(a,b,c){this.a=void 0!==a?a:new n();this.b=void 0!==b?b:new n();this.c=void 0!==c?c:new n();}function H(a,b,c){return void 0===b&&void 0===c?this.set(a):this.setRGB(a,b,c);}function Rf(a,b,c){0>c&&(c+=1);1<c&&--c;return c<1/6?a+6*(b-a)*c:.5>c?b:c<2/3?a+6*(b-a)*(2/3-c):a;}function Sf(a){return .04045>a?.0773993808*a:Math.pow(.9478672986*a+.0521327014,2.4);}function Tf(a){return .0031308>a?12.92*a:1.055*Math.pow(a,.41666)-.055;}function zc(a,b,c,d,e,f){this.a=a;this.b=b;this.c=c;this.normal=d&&d.isVector3?d:new n();this.vertexNormals=Array.isArray(d)?d:[];this.color=e&&e.isColor?e:new H();this.vertexColors=Array.isArray(e)?e:[];this.materialIndex=void 0!==f?f:0;}function M(){Object.defineProperty(this,"id",{value:Ti++});this.uuid=L.generateUUID();this.name="";this.type="Material";this.fog=!0;this.blending=1;this.side=0;this.vertexTangents=this.flatShading=!1;this.vertexColors=0;this.opacity=1;this.transparent=!1;this.blendSrc=204;this.blendDst=205;this.blendEquation=100;this.blendEquationAlpha=this.blendDstAlpha=this.blendSrcAlpha=null;this.depthFunc=3;this.depthWrite=this.depthTest=!0;this.stencilWriteMask=255;this.stencilFunc=519;this.stencilRef=0;this.stencilFuncMask=255;this.stencilZPass=this.stencilZFail=this.stencilFail=7680;this.stencilWrite=!1;this.clippingPlanes=null;this.clipShadows=this.clipIntersection=!1;this.shadowSide=null;this.colorWrite=!0;this.precision=null;this.polygonOffset=!1;this.polygonOffsetUnits=this.polygonOffsetFactor=0;this.dithering=!1;this.alphaTest=0;this.premultipliedAlpha=!1;this.toneMapped=this.visible=!0;this.userData={};this.needsUpdate=!0;}function Ga(a){M.call(this);this.type="MeshBasicMaterial";this.color=new H(16777215);this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.envMap=this.alphaMap=this.specularMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphTargets=this.skinning=!1;this.setValues(a);}function O(a,b,c){if(Array.isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="";this.array=a;this.itemSize=b;this.count=void 0!==a?a.length/b:0;this.normalized=!0===c;this.dynamic=!1;this.updateRange={offset:0,count:-1};this.version=0;}function xd(a,b,c){O.call(this,new Int8Array(a),b,c);}function yd(a,b,c){O.call(this,new Uint8Array(a),b,c);}function zd(a,b,c){O.call(this,new Uint8ClampedArray(a),b,c);}function Ad(a,b,c){O.call(this,new Int16Array(a),b,c);}function Tb(a,b,c){O.call(this,new Uint16Array(a),b,c);}function Bd(a,b,c){O.call(this,new Int32Array(a),b,c);}function Ub(a,b,c){O.call(this,new Uint32Array(a),b,c);}function A(a,b,c){O.call(this,new Float32Array(a),b,c);}function Cd(a,b,c){O.call(this,new Float64Array(a),b,c);}function jh(){this.vertices=[];this.normals=[];this.colors=[];this.uvs=[];this.uvs2=[];this.groups=[];this.morphTargets={};this.skinWeights=[];this.skinIndices=[];this.boundingSphere=this.boundingBox=null;this.groupsNeedUpdate=this.uvsNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.verticesNeedUpdate=!1;}function kh(a){if(0===a.length)return-Infinity;for(var b=a[0],c=1,d=a.length;c<d;++c){a[c]>b&&(b=a[c]);}return b;}function E(){Object.defineProperty(this,"id",{value:Ui+=2});this.uuid=L.generateUUID();this.name="";this.type="BufferGeometry";this.index=null;this.attributes={};this.morphAttributes={};this.groups=[];this.boundingSphere=this.boundingBox=null;this.drawRange={start:0,count:Infinity};this.userData={};}function ja(a,b){B.call(this);this.type="Mesh";this.geometry=void 0!==a?a:new E();this.material=void 0!==b?b:new Ga({color:16777215*Math.random()});this.drawMode=0;this.updateMorphTargets();}function lh(a,b,c,d,e,f,g,h){if(null===(1===b.side?d.intersectTriangle(g,f,e,!0,h):d.intersectTriangle(e,f,g,2!==b.side,h)))return null;Ee.copy(h);Ee.applyMatrix4(a.matrixWorld);b=c.ray.origin.distanceTo(Ee);return b<c.near||b>c.far?null:{distance:b,point:Ee.clone(),object:a};}function Fe(a,b,c,d,e,f,g,h,l,m,q){Vb.fromBufferAttribute(e,l);Wb.fromBufferAttribute(e,m);Xb.fromBufferAttribute(e,q);e=a.morphTargetInfluences;if(b.morphTargets&&f&&e){Uf.set(0,0,0);Vf.set(0,0,0);Wf.set(0,0,0);for(var u=0,t=f.length;u<t;u++){var k=e[u],p=f[u];0!==k&&(mh.fromBufferAttribute(p,l),nh.fromBufferAttribute(p,m),oh.fromBufferAttribute(p,q),Uf.addScaledVector(mh.sub(Vb),k),Vf.addScaledVector(nh.sub(Wb),k),Wf.addScaledVector(oh.sub(Xb),k));}Vb.add(Uf);Wb.add(Vf);Xb.add(Wf);}if(a=lh(a,b,c,d,Vb,Wb,Xb,Dd))g&&(Ac.fromBufferAttribute(g,l),Bc.fromBufferAttribute(g,m),Cc.fromBufferAttribute(g,q),a.uv=R.getUV(Dd,Vb,Wb,Xb,Ac,Bc,Cc,new w())),h&&(Ac.fromBufferAttribute(h,l),Bc.fromBufferAttribute(h,m),Cc.fromBufferAttribute(h,q),a.uv2=R.getUV(Dd,Vb,Wb,Xb,Ac,Bc,Cc,new w())),g=new zc(l,m,q),R.getNormal(Vb,Wb,Xb,g.normal),a.face=g;return a;}function F(){Object.defineProperty(this,"id",{value:Vi+=2});this.uuid=L.generateUUID();this.name="";this.type="Geometry";this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.groupsNeedUpdate=this.lineDistancesNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.uvsNeedUpdate=this.verticesNeedUpdate=this.elementsNeedUpdate=!1;}function Yb(a){var b={},c;for(c in a){b[c]={};for(var d in a[c]){var e=a[c][d];e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture)?b[c][d]=e.clone():Array.isArray(e)?b[c][d]=e.slice():b[c][d]=e;}}return b;}function Da(a){for(var b={},c=0;c<a.length;c++){var d=Yb(a[c]),e;for(e in d){b[e]=d[e];}}return b;}function ma(a){M.call(this);this.type="ShaderMaterial";this.defines={};this.uniforms={};this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";this.linewidth=1;this.wireframe=!1;this.wireframeLinewidth=1;this.morphNormals=this.morphTargets=this.skinning=this.clipping=this.lights=this.fog=!1;this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1};this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]};this.index0AttributeName=void 0;this.uniformsNeedUpdate=!1;void 0!==a&&(void 0!==a.attributes&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(a));}function bb(){B.call(this);this.type="Camera";this.matrixWorldInverse=new U();this.projectionMatrix=new U();this.projectionMatrixInverse=new U();}function na(a,b,c,d){bb.call(this);this.type="PerspectiveCamera";this.fov=void 0!==a?a:50;this.zoom=1;this.near=void 0!==c?c:.1;this.far=void 0!==d?d:2E3;this.focus=10;this.aspect=void 0!==b?b:1;this.view=null;this.filmGauge=35;this.filmOffset=0;this.updateProjectionMatrix();}function Dc(a,b,c,d){B.call(this);this.type="CubeCamera";var e=new na(90,1,a,b);e.up.set(0,-1,0);e.lookAt(new n(1,0,0));this.add(e);var f=new na(90,1,a,b);f.up.set(0,-1,0);f.lookAt(new n(-1,0,0));this.add(f);var g=new na(90,1,a,b);g.up.set(0,0,1);g.lookAt(new n(0,1,0));this.add(g);var h=new na(90,1,a,b);h.up.set(0,0,-1);h.lookAt(new n(0,-1,0));this.add(h);var l=new na(90,1,a,b);l.up.set(0,-1,0);l.lookAt(new n(0,0,1));this.add(l);var m=new na(90,1,a,b);m.up.set(0,-1,0);m.lookAt(new n(0,0,-1));this.add(m);d=d||{format:1022,magFilter:1006,minFilter:1006};this.renderTarget=new Ab(c,c,d);this.renderTarget.texture.name="CubeCamera";this.update=function(a,b){null===this.parent&&this.updateMatrixWorld();var c=a.getRenderTarget(),d=this.renderTarget,q=d.texture.generateMipmaps;d.texture.generateMipmaps=!1;a.setRenderTarget(d,0);a.render(b,e);a.setRenderTarget(d,1);a.render(b,f);a.setRenderTarget(d,2);a.render(b,g);a.setRenderTarget(d,3);a.render(b,h);a.setRenderTarget(d,4);a.render(b,l);d.texture.generateMipmaps=q;a.setRenderTarget(d,5);a.render(b,m);a.setRenderTarget(c);};this.clear=function(a,b,c,d){for(var e=a.getRenderTarget(),f=this.renderTarget,g=0;6>g;g++){a.setRenderTarget(f,g),a.clear(b,c,d);}a.setRenderTarget(e);};}function Ab(a,b,c){la.call(this,a,b,c);}function Zb(a,b,c,d,e,f,g,h,l,m,q,u){W.call(this,null,f,g,h,l,m,d,e,q,u);this.image={data:a||null,width:b||1,height:c||1};this.magFilter=void 0!==l?l:1003;this.minFilter=void 0!==m?m:1003;this.flipY=this.generateMipmaps=!1;this.unpackAlignment=1;this.needsUpdate=!0;}function cb(a,b){this.normal=void 0!==a?a:new n(1,0,0);this.constant=void 0!==b?b:0;}function Ed(a,b,c,d,e,f){this.planes=[void 0!==a?a:new cb(),void 0!==b?b:new cb(),void 0!==c?c:new cb(),void 0!==d?d:new cb(),void 0!==e?e:new cb(),void 0!==f?f:new cb()];}function Xf(){function a(e,f){!1!==c&&(d(e,f),b.requestAnimationFrame(a));}var b=null,c=!1,d=null;return{start:function start(){!0!==c&&null!==d&&(b.requestAnimationFrame(a),c=!0);},stop:function stop(){c=!1;},setAnimationLoop:function setAnimationLoop(a){d=a;},setContext:function setContext(a){b=a;}};}function Wi(a){function b(b,c){var d=b.array,e=b.dynamic?35048:35044,h=a.createBuffer();a.bindBuffer(c,h);a.bufferData(c,d,e);b.onUploadCallback();c=5126;d instanceof Float32Array?c=5126:d instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):d instanceof Uint16Array?c=5123:d instanceof Int16Array?c=5122:d instanceof Uint32Array?c=5125:d instanceof Int32Array?c=5124:d instanceof Int8Array?c=5120:d instanceof Uint8Array&&(c=5121);return{buffer:h,type:c,bytesPerElement:d.BYTES_PER_ELEMENT,version:b.version};}var c=new WeakMap();return{get:function get(a){a.isInterleavedBufferAttribute&&(a=a.data);return c.get(a);},remove:function remove(b){b.isInterleavedBufferAttribute&&(b=b.data);var d=c.get(b);d&&(a.deleteBuffer(d.buffer),c["delete"](b));},update:function update(d,e){d.isInterleavedBufferAttribute&&(d=d.data);var f=c.get(d);if(void 0===f)c.set(d,b(d,e));else if(f.version<d.version){var g=d,h=g.array,l=g.updateRange;a.bindBuffer(e,f.buffer);!1===g.dynamic?a.bufferData(e,h,35044):-1===l.count?a.bufferSubData(e,0,h):0===l.count?console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually."):(a.bufferSubData(e,l.offset*h.BYTES_PER_ELEMENT,h.subarray(l.offset,l.offset+l.count)),l.count=-1);f.version=d.version;}}};}function Fd(a,b,c,d){F.call(this);this.type="PlaneGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};this.fromBufferGeometry(new $b(a,b,c,d));this.mergeVertices();}function $b(a,b,c,d){E.call(this);this.type="PlaneBufferGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};a=a||1;b=b||1;var e=a/2,f=b/2;c=Math.floor(c)||1;d=Math.floor(d)||1;var g=c+1,h=d+1,l=a/c,m=b/d,q=[],u=[],t=[],k=[];for(a=0;a<h;a++){var p=a*m-f;for(b=0;b<g;b++){u.push(b*l-e,-p,0),t.push(0,0,1),k.push(b/c),k.push(1-a/d);}}for(a=0;a<d;a++){for(b=0;b<c;b++){e=b+g*(a+1),f=b+1+g*(a+1),h=b+1+g*a,q.push(b+g*a,e,h),q.push(e,f,h);}}this.setIndex(q);this.addAttribute("position",new A(u,3));this.addAttribute("normal",new A(t,3));this.addAttribute("uv",new A(k,2));}function Xi(a,b,c,d){function e(a,c){b.buffers.color.setClear(a.r,a.g,a.b,c,d);}var f=new H(0),g=0,h,l,m=null,q=0;return{getClearColor:function getClearColor(){return f;},setClearColor:function setClearColor(a,b){f.set(a);g=void 0!==b?b:1;e(f,g);},getClearAlpha:function getClearAlpha(){return g;},setClearAlpha:function setClearAlpha(a){g=a;e(f,g);},render:function render(b,d,k,p){d=d.background;k=a.vr;(k=k.getSession&&k.getSession())&&"additive"===k.environmentBlendMode&&(d=null);null===d?(e(f,g),m=null,q=0):d&&d.isColor&&(e(d,1),p=!0,m=null,q=0);(a.autoClear||p)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil);if(d&&(d.isCubeTexture||d.isWebGLRenderTargetCube)){void 0===l&&(l=new ja(new Gd(1,1,1),new ma({type:"BackgroundCubeMaterial",uniforms:Yb(db.cube.uniforms),vertexShader:db.cube.vertexShader,fragmentShader:db.cube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.removeAttribute("normal"),l.geometry.removeAttribute("uv"),l.onBeforeRender=function(a,b,c){this.matrixWorld.copyPosition(c.matrixWorld);},Object.defineProperty(l.material,"map",{get:function get(){return this.uniforms.tCube.value;}}),c.update(l));p=d.isWebGLRenderTargetCube?d.texture:d;l.material.uniforms.tCube.value=p;l.material.uniforms.tFlip.value=d.isWebGLRenderTargetCube?1:-1;if(m!==d||q!==p.version)l.material.needsUpdate=!0,m=d,q=p.version;b.unshift(l,l.geometry,l.material,0,0,null);}else if(d&&d.isTexture){void 0===h&&(h=new ja(new $b(2,2),new ma({type:"BackgroundMaterial",uniforms:Yb(db.background.uniforms),vertexShader:db.background.vertexShader,fragmentShader:db.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.removeAttribute("normal"),Object.defineProperty(h.material,"map",{get:function get(){return this.uniforms.t2D.value;}}),c.update(h));h.material.uniforms.t2D.value=d;!0===d.matrixAutoUpdate&&d.updateMatrix();h.material.uniforms.uvTransform.value.copy(d.matrix);if(m!==d||q!==d.version)h.material.needsUpdate=!0,m=d,q=d.version;b.unshift(h,h.geometry,h.material,0,0,null);}}};}function Yi(a,b,c,d){var e;this.setMode=function(a){e=a;};this.render=function(b,d){a.drawArrays(e,b,d);c.update(d,e);};this.renderInstances=function(f,g,h,l){if(0!==l){if(d.isWebGL2){f=a;var m="drawArraysInstanced";}else if(f=b.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",null===f){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return;}f[m](e,g,h,l);c.update(h,e,l);}};}function Zi(a,b,c){function d(b){if("highp"===b){if(0<a.getShaderPrecisionFormat(35633,36338).precision&&0<a.getShaderPrecisionFormat(35632,36338).precision)return"highp";b="mediump";}return"mediump"===b&&0<a.getShaderPrecisionFormat(35633,36337).precision&&0<a.getShaderPrecisionFormat(35632,36337).precision?"mediump":"lowp";}var e,f="undefined"!==typeof WebGL2RenderingContext&&a instanceof WebGL2RenderingContext,g=void 0!==c.precision?c.precision:"highp",h=d(g);h!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",h,"instead."),g=h);c=!0===c.logarithmicDepthBuffer;h=a.getParameter(34930);var l=a.getParameter(35660),m=a.getParameter(3379),q=a.getParameter(34076),u=a.getParameter(34921),t=a.getParameter(36347),k=a.getParameter(36348),p=a.getParameter(36349),v=0<l,x=f||!!b.get("OES_texture_float"),n=v&&x,y=f?a.getParameter(36183):0;return{isWebGL2:f,getMaxAnisotropy:function getMaxAnisotropy(){if(void 0!==e)return e;var c=b.get("EXT_texture_filter_anisotropic");return e=null!==c?a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0;},getMaxPrecision:d,precision:g,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:l,maxTextureSize:m,maxCubemapSize:q,maxAttributes:u,maxVertexUniforms:t,maxVaryings:k,maxFragmentUniforms:p,vertexTextures:v,floatFragmentTextures:x,floatVertexTextures:n,maxSamples:y};}function $i(){function a(){m.value!==d&&(m.value=d,m.needsUpdate=0<e);c.numPlanes=e;c.numIntersection=0;}function b(a,b,d,e){var f=null!==a?a.length:0,g=null;if(0!==f){g=m.value;if(!0!==e||null===g){e=d+4*f;b=b.matrixWorldInverse;l.getNormalMatrix(b);if(null===g||g.length<e)g=new Float32Array(e);for(e=0;e!==f;++e,d+=4){h.copy(a[e]).applyMatrix4(b,l),h.normal.toArray(g,d),g[d+3]=h.constant;}}m.value=g;m.needsUpdate=!0;}c.numPlanes=f;return g;}var c=this,d=null,e=0,f=!1,g=!1,h=new cb(),l=new Y(),m={value:null,needsUpdate:!1};this.uniform=m;this.numIntersection=this.numPlanes=0;this.init=function(a,c,g){var h=0!==a.length||c||0!==e||f;f=c;d=b(a,g,0);e=a.length;return h;};this.beginShadows=function(){g=!0;b(null);};this.endShadows=function(){g=!1;a();};this.setState=function(c,h,l,k,p,v){if(!f||null===c||0===c.length||g&&!l)g?b(null):a();else{l=g?0:e;var q=4*l,u=p.clippingState||null;m.value=u;u=b(c,k,q,v);for(c=0;c!==q;++c){u[c]=d[c];}p.clippingState=u;this.numIntersection=h?this.numPlanes:0;this.numPlanes+=l;}};}function aj(a){var b={};return{get:function get(c){if(void 0!==b[c])return b[c];switch(c){case"WEBGL_depth_texture":var d=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":d=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":d=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":d=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:d=a.getExtension(c);}null===d&&console.warn("THREE.WebGLRenderer: "+c+" extension not supported.");return b[c]=d;}};}function bj(a,b,c){function d(a){var e=a.target;a=f.get(e);null!==a.index&&b.remove(a.index);for(var h in a.attributes){b.remove(a.attributes[h]);}e.removeEventListener("dispose",d);f["delete"](e);if(h=g.get(a))b.remove(h),g["delete"](a);c.memory.geometries--;}function e(a){var c=[],d=a.index,e=a.attributes.position;if(null!==d){var f=d.array;d=d.version;e=0;for(var h=f.length;e<h;e+=3){var k=f[e+0],p=f[e+1],v=f[e+2];c.push(k,p,p,v,v,k);}}else for(f=e.array,d=e.version,e=0,h=f.length/3-1;e<h;e+=3){k=e+0,p=e+1,v=e+2,c.push(k,p,p,v,v,k);}c=new(65535<kh(c)?Ub:Tb)(c,1);c.version=d;b.update(c,34963);(f=g.get(a))&&b.remove(f);g.set(a,c);}var f=new WeakMap(),g=new WeakMap();return{get:function get(a,b){var e=f.get(b);if(e)return e;b.addEventListener("dispose",d);b.isBufferGeometry?e=b:b.isGeometry&&(void 0===b._bufferGeometry&&(b._bufferGeometry=new E().setFromObject(a)),e=b._bufferGeometry);f.set(b,e);c.memory.geometries++;return e;},update:function update(a){var c=a.index,d=a.attributes;null!==c&&b.update(c,34963);for(var e in d){b.update(d[e],34962);}a=a.morphAttributes;for(e in a){c=a[e];d=0;for(var f=c.length;d<f;d++){b.update(c[d],34962);}}},getWireframeAttribute:function getWireframeAttribute(a){var b=g.get(a);if(b){var c=a.index;null!==c&&b.version<c.version&&e(a);}else e(a);return g.get(a);}};}function cj(a,b,c,d){var e,f,g;this.setMode=function(a){e=a;};this.setIndex=function(a){f=a.type;g=a.bytesPerElement;};this.render=function(b,d){a.drawElements(e,d,f,b*g);c.update(d,e);};this.renderInstances=function(h,l,m,q){if(0!==q){if(d.isWebGL2){h=a;var u="drawElementsInstanced";}else if(h=b.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",null===h){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return;}h[u](e,m,f,l*g,q);c.update(m,e,q);}};}function dj(a){var b={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:b,programs:null,autoReset:!0,reset:function reset(){b.frame++;b.calls=0;b.triangles=0;b.points=0;b.lines=0;},update:function update(a,d,e){e=e||1;b.calls++;switch(d){case 4:b.triangles+=a/3*e;break;case 5:case 6:b.triangles+=e*(a-2);break;case 1:b.lines+=a/2*e;break;case 3:b.lines+=e*(a-1);break;case 2:b.lines+=e*a;break;case 0:b.points+=e*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);}}};}function ej(a,b){return Math.abs(b[1])-Math.abs(a[1]);}function fj(a){var b={},c=new Float32Array(8);return{update:function update(d,e,f,g){var h=d.morphTargetInfluences,l=h.length;d=b[e.id];if(void 0===d){d=[];for(var m=0;m<l;m++){d[m]=[m,0];}b[e.id]=d;}var q=f.morphTargets&&e.morphAttributes.position;f=f.morphNormals&&e.morphAttributes.normal;for(m=0;m<l;m++){var u=d[m];0!==u[1]&&(q&&e.removeAttribute("morphTarget"+m),f&&e.removeAttribute("morphNormal"+m));}for(m=0;m<l;m++){u=d[m],u[0]=m,u[1]=h[m];}d.sort(ej);for(m=0;8>m;m++){if(u=d[m])if(h=u[0],l=u[1]){q&&e.addAttribute("morphTarget"+m,q[h]);f&&e.addAttribute("morphNormal"+m,f[h]);c[m]=l;continue;}c[m]=0;}g.getUniforms().setValue(a,"morphTargetInfluences",c);}};}function gj(a,b,c,d){var e={};return{update:function update(a){var f=d.render.frame,h=a.geometry,l=b.get(a,h);e[l.id]!==f&&(h.isGeometry&&l.updateFromObject(a),b.update(l),e[l.id]=f);a.isInstancedMesh&&c.update(a.instanceMatrix,34962);return l;},dispose:function dispose(){e={};}};}function ob(a,b,c,d,e,f,g,h,l,m){a=void 0!==a?a:[];W.call(this,a,void 0!==b?b:301,c,d,e,f,void 0!==g?g:1022,h,l,m);this.flipY=!1;}function Ec(a,b,c,d){W.call(this,null);this.image={data:a||null,width:b||1,height:c||1,depth:d||1};this.minFilter=this.magFilter=1003;this.wrapR=1001;this.flipY=this.generateMipmaps=!1;this.needsUpdate=!0;}function Fc(a,b,c,d){W.call(this,null);this.image={data:a||null,width:b||1,height:c||1,depth:d||1};this.minFilter=this.magFilter=1003;this.wrapR=1001;this.flipY=this.generateMipmaps=!1;this.needsUpdate=!0;}function Gc(a,b,c){var d=a[0];if(0>=d||0<d)return a;var e=b*c,f=ph[e];void 0===f&&(f=new Float32Array(e),ph[e]=f);if(0!==b)for(d.toArray(f,0),d=1,e=0;d!==b;++d){e+=c,a[d].toArray(f,e);}return f;}function La(a,b){if(a.length!==b.length)return!1;for(var c=0,d=a.length;c<d;c++){if(a[c]!==b[c])return!1;}return!0;}function Ha(a,b){for(var c=0,d=b.length;c<d;c++){a[c]=b[c];}}function qh(a,b){var c=rh[b];void 0===c&&(c=new Int32Array(b),rh[b]=c);for(var d=0;d!==b;++d){c[d]=a.allocateTextureUnit();}return c;}function hj(a,b){var c=this.cache;c[0]!==b&&(a.uniform1f(this.addr,b),c[0]=b);}function ij(a,b){var c=this.cache;if(void 0!==b.x){if(c[0]!==b.x||c[1]!==b.y)a.uniform2f(this.addr,b.x,b.y),c[0]=b.x,c[1]=b.y;}else La(c,b)||(a.uniform2fv(this.addr,b),Ha(c,b));}function jj(a,b){var c=this.cache;if(void 0!==b.x){if(c[0]!==b.x||c[1]!==b.y||c[2]!==b.z)a.uniform3f(this.addr,b.x,b.y,b.z),c[0]=b.x,c[1]=b.y,c[2]=b.z;}else if(void 0!==b.r){if(c[0]!==b.r||c[1]!==b.g||c[2]!==b.b)a.uniform3f(this.addr,b.r,b.g,b.b),c[0]=b.r,c[1]=b.g,c[2]=b.b;}else La(c,b)||(a.uniform3fv(this.addr,b),Ha(c,b));}function kj(a,b){var c=this.cache;if(void 0!==b.x){if(c[0]!==b.x||c[1]!==b.y||c[2]!==b.z||c[3]!==b.w)a.uniform4f(this.addr,b.x,b.y,b.z,b.w),c[0]=b.x,c[1]=b.y,c[2]=b.z,c[3]=b.w;}else La(c,b)||(a.uniform4fv(this.addr,b),Ha(c,b));}function lj(a,b){var c=this.cache,d=b.elements;void 0===d?La(c,b)||(a.uniformMatrix2fv(this.addr,!1,b),Ha(c,b)):La(c,d)||(sh.set(d),a.uniformMatrix2fv(this.addr,!1,sh),Ha(c,d));}function mj(a,b){var c=this.cache,d=b.elements;void 0===d?La(c,b)||(a.uniformMatrix3fv(this.addr,!1,b),Ha(c,b)):La(c,d)||(th.set(d),a.uniformMatrix3fv(this.addr,!1,th),Ha(c,d));}function nj(a,b){var c=this.cache,d=b.elements;void 0===d?La(c,b)||(a.uniformMatrix4fv(this.addr,!1,b),Ha(c,b)):La(c,d)||(uh.set(d),a.uniformMatrix4fv(this.addr,!1,uh),Ha(c,d));}function oj(a,b,c){var d=this.cache,e=c.allocateTextureUnit();d[0]!==e&&(a.uniform1i(this.addr,e),d[0]=e);c.safeSetTexture2D(b||vh,e);}function pj(a,b,c){var d=this.cache,e=c.allocateTextureUnit();d[0]!==e&&(a.uniform1i(this.addr,e),d[0]=e);c.setTexture2DArray(b||qj,e);}function rj(a,b,c){var d=this.cache,e=c.allocateTextureUnit();d[0]!==e&&(a.uniform1i(this.addr,e),d[0]=e);c.setTexture3D(b||sj,e);}function tj(a,b,c){var d=this.cache,e=c.allocateTextureUnit();d[0]!==e&&(a.uniform1i(this.addr,e),d[0]=e);c.safeSetTextureCube(b||wh,e);}function uj(a,b){var c=this.cache;c[0]!==b&&(a.uniform1i(this.addr,b),c[0]=b);}function vj(a,b){var c=this.cache;La(c,b)||(a.uniform2iv(this.addr,b),Ha(c,b));}function wj(a,b){var c=this.cache;La(c,b)||(a.uniform3iv(this.addr,b),Ha(c,b));}function xj(a,b){var c=this.cache;La(c,b)||(a.uniform4iv(this.addr,b),Ha(c,b));}function yj(a){switch(a){case 5126:return hj;case 35664:return ij;case 35665:return jj;case 35666:return kj;case 35674:return lj;case 35675:return mj;case 35676:return nj;case 35678:case 36198:return oj;case 35679:return rj;case 35680:return tj;case 36289:return pj;case 5124:case 35670:return uj;case 35667:case 35671:return vj;case 35668:case 35672:return wj;case 35669:case 35673:return xj;}}function zj(a,b){a.uniform1fv(this.addr,b);}function Aj(a,b){a.uniform1iv(this.addr,b);}function Bj(a,b){a.uniform2iv(this.addr,b);}function Cj(a,b){a.uniform3iv(this.addr,b);}function Dj(a,b){a.uniform4iv(this.addr,b);}function Ej(a,b){b=Gc(b,this.size,2);a.uniform2fv(this.addr,b);}function Fj(a,b){b=Gc(b,this.size,3);a.uniform3fv(this.addr,b);}function Gj(a,b){b=Gc(b,this.size,4);a.uniform4fv(this.addr,b);}function Hj(a,b){b=Gc(b,this.size,4);a.uniformMatrix2fv(this.addr,!1,b);}function Ij(a,b){b=Gc(b,this.size,9);a.uniformMatrix3fv(this.addr,!1,b);}function Jj(a,b){b=Gc(b,this.size,16);a.uniformMatrix4fv(this.addr,!1,b);}function Kj(a,b,c){var d=b.length,e=qh(c,d);a.uniform1iv(this.addr,e);for(a=0;a!==d;++a){c.safeSetTexture2D(b[a]||vh,e[a]);}}function Lj(a,b,c){var d=b.length,e=qh(c,d);a.uniform1iv(this.addr,e);for(a=0;a!==d;++a){c.safeSetTextureCube(b[a]||wh,e[a]);}}function Mj(a){switch(a){case 5126:return zj;case 35664:return Ej;case 35665:return Fj;case 35666:return Gj;case 35674:return Hj;case 35675:return Ij;case 35676:return Jj;case 35678:return Kj;case 35680:return Lj;case 5124:case 35670:return Aj;case 35667:case 35671:return Bj;case 35668:case 35672:return Cj;case 35669:case 35673:return Dj;}}function Nj(a,b,c){this.id=a;this.addr=c;this.cache=[];this.setValue=yj(b.type);}function xh(a,b,c){this.id=a;this.addr=c;this.cache=[];this.size=b.size;this.setValue=Mj(b.type);}function yh(a){this.id=a;this.seq=[];this.map={};}function Bb(a,b){this.seq=[];this.map={};for(var c=a.getProgramParameter(b,35718),d=0;d<c;++d){var e=a.getActiveUniform(b,d),f=a.getUniformLocation(b,e.name),g=this,h=e.name,l=h.length;for(Yf.lastIndex=0;;){var m=Yf.exec(h),q=Yf.lastIndex,u=m[1],k=m[3];"]"===m[2]&&(u|=0);if(void 0===k||"["===k&&q+2===l){h=g;e=void 0===k?new Nj(u,e,f):new xh(u,e,f);h.seq.push(e);h.map[e.id]=e;break;}else k=g.map[u],void 0===k&&(k=new yh(u),u=g,g=k,u.seq.push(g),u.map[g.id]=g),g=k;}}}function zh(a,b,c){b=a.createShader(b);a.shaderSource(b,c);a.compileShader(b);return b;}function Ah(a){switch(a){case 3E3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];case 3002:return["RGBE","( value )"];case 3004:return["RGBM","( value, 7.0 )"];case 3005:return["RGBM","( value, 16.0 )"];case 3006:return["RGBD","( value, 256.0 )"];case 3007:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case 3003:return["LogLuv","( value )"];default:throw Error("unsupported encoding: "+a);}}function Bh(a,b,c){var d=a.getShaderParameter(b,35713),e=a.getShaderInfoLog(b).trim();if(d&&""===e)return"";a=a.getShaderSource(b).split("\n");for(b=0;b<a.length;b++){a[b]=b+1+": "+a[b];}a=a.join("\n");return"THREE.WebGLShader: gl.getShaderInfoLog() "+c+"\n"+e+a;}function Ge(a,b){b=Ah(b);return"vec4 "+a+"( vec4 value ) { return "+b[0]+"ToLinear"+b[1]+"; }";}function Oj(a,b){b=Ah(b);return"vec4 "+a+"( vec4 value ) { return LinearTo"+b[0]+b[1]+"; }";}function Pj(a,b){switch(b){case 1:b="Linear";break;case 2:b="Reinhard";break;case 3:b="Uncharted2";break;case 4:b="OptimizedCineon";break;case 5:b="ACESFilmic";break;default:throw Error("unsupported toneMapping: "+b);}return"vec3 "+a+"( vec3 color ) { return "+b+"ToneMapping( color ); }";}function Qj(a,b,c){a=a||{};return[a.derivatives||b.envMapCubeUV||b.bumpMap||b.tangentSpaceNormalMap||b.clearcoatNormalMap||b.flatShading?"#extension GL_OES_standard_derivatives : enable":"",(a.fragDepth||b.logarithmicDepthBuffer)&&c.get("EXT_frag_depth")?"#extension GL_EXT_frag_depth : enable":"",a.drawBuffers&&c.get("WEBGL_draw_buffers")?"#extension GL_EXT_draw_buffers : require":"",(a.shaderTextureLOD||b.envMap)&&c.get("EXT_shader_texture_lod")?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Hd).join("\n");}function Rj(a){var b=[],c;for(c in a){var d=a[c];!1!==d&&b.push("#define "+c+" "+d);}return b.join("\n");}function Hd(a){return""!==a;}function Ch(a,b){return a.replace(/NUM_DIR_LIGHTS/g,b.numDirLights).replace(/NUM_SPOT_LIGHTS/g,b.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,b.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,b.numPointLights).replace(/NUM_HEMI_LIGHTS/g,b.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,b.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,b.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,b.numPointLightShadows);}function Dh(a,b){return a.replace(/NUM_CLIPPING_PLANES/g,b.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,b.numClippingPlanes-b.numClipIntersection);}function Zf(a,b){a=N[b];if(void 0===a)throw Error("Can not resolve #include <"+b+">");return a.replace($f,Zf);}function Eh(a,b,c,d){a="";for(b=parseInt(b);b<parseInt(c);b++){a+=d.replace(/\[ i \]/g,"[ "+b+" ]").replace(/UNROLLED_LOOP_INDEX/g,b);}return a;}function Fh(a){var b="precision "+a.precision+" float;\nprecision "+a.precision+" int;";"highp"===a.precision?b+="\n#define HIGH_PRECISION":"mediump"===a.precision?b+="\n#define MEDIUM_PRECISION":"lowp"===a.precision&&(b+="\n#define LOW_PRECISION");return b;}function Sj(a){var b="SHADOWMAP_TYPE_BASIC";1===a.shadowMapType?b="SHADOWMAP_TYPE_PCF":2===a.shadowMapType?b="SHADOWMAP_TYPE_PCF_SOFT":3===a.shadowMapType&&(b="SHADOWMAP_TYPE_VSM");return b;}function Tj(a,b){var c="ENVMAP_TYPE_CUBE";if(a.envMap)switch(b.envMap.mapping){case 301:case 302:c="ENVMAP_TYPE_CUBE";break;case 306:case 307:c="ENVMAP_TYPE_CUBE_UV";break;case 303:case 304:c="ENVMAP_TYPE_EQUIREC";break;case 305:c="ENVMAP_TYPE_SPHERE";}return c;}function Uj(a,b){var c="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(b.envMap.mapping){case 302:case 304:c="ENVMAP_MODE_REFRACTION";}return c;}function Vj(a,b){var c="ENVMAP_BLENDING_MULTIPLY";if(a.envMap)switch(b.combine){case 0:c="ENVMAP_BLENDING_MULTIPLY";break;case 1:c="ENVMAP_BLENDING_MIX";break;case 2:c="ENVMAP_BLENDING_ADD";}return c;}function Wj(a,b,c,d,e,f){var g=a.getContext(),h=d.defines,l=e.vertexShader,m=e.fragmentShader,q=Sj(f),u=Tj(f,d),k=Uj(f,d),r=Vj(f,d),p=0<a.gammaFactor?a.gammaFactor:1,v=f.isWebGL2?"":Qj(d.extensions,f,b),x=Rj(h),n=g.createProgram(),y=(h=a.getRenderTarget())&&h.isWebGLMultiviewRenderTarget?h.numViews:0;d.isRawShaderMaterial?(h=[x].filter(Hd).join("\n"),0<h.length&&(h+="\n"),b=[v,x].filter(Hd).join("\n"),0<b.length&&(b+="\n")):(h=[Fh(f),"#define SHADER_NAME "+e.name,x,f.instancing?"#define USE_INSTANCING":"",f.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+p,"#define MAX_BONES "+f.maxBones,f.useFog&&f.fog?"#define USE_FOG":"",f.useFog&&f.fogExp2?"#define FOG_EXP2":"",f.map?"#define USE_MAP":"",f.envMap?"#define USE_ENVMAP":"",f.envMap?"#define "+k:"",f.lightMap?"#define USE_LIGHTMAP":"",f.aoMap?"#define USE_AOMAP":"",f.emissiveMap?"#define USE_EMISSIVEMAP":"",f.bumpMap?"#define USE_BUMPMAP":"",f.normalMap?"#define USE_NORMALMAP":"",f.normalMap&&f.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",f.normalMap&&f.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",f.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",f.displacementMap&&f.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",f.specularMap?"#define USE_SPECULARMAP":"",f.roughnessMap?"#define USE_ROUGHNESSMAP":"",f.metalnessMap?"#define USE_METALNESSMAP":"",f.alphaMap?"#define USE_ALPHAMAP":"",f.vertexTangents?"#define USE_TANGENT":"",f.vertexColors?"#define USE_COLOR":"",f.vertexUvs?"#define USE_UV":"",f.flatShading?"#define FLAT_SHADED":"",f.skinning?"#define USE_SKINNING":"",f.useVertexTexture?"#define BONE_TEXTURE":"",f.morphTargets?"#define USE_MORPHTARGETS":"",f.morphNormals&&!1===f.flatShading?"#define USE_MORPHNORMALS":"",f.doubleSided?"#define DOUBLE_SIDED":"",f.flipSided?"#define FLIP_SIDED":"",f.shadowMapEnabled?"#define USE_SHADOWMAP":"",f.shadowMapEnabled?"#define "+q:"",f.sizeAttenuation?"#define USE_SIZEATTENUATION":"",f.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",f.logarithmicDepthBuffer&&(f.isWebGL2||b.get("EXT_frag_depth"))?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","#ifdef USE_INSTANCING"," attribute mat4 instanceMatrix;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#ifdef USE_COLOR","\tattribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif","\n"].filter(Hd).join("\n"),b=[v,Fh(f),"#define SHADER_NAME "+e.name,x,f.alphaTest?"#define ALPHATEST "+f.alphaTest+(f.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+p,f.useFog&&f.fog?"#define USE_FOG":"",f.useFog&&f.fogExp2?"#define FOG_EXP2":"",f.map?"#define USE_MAP":"",f.matcap?"#define USE_MATCAP":"",f.envMap?"#define USE_ENVMAP":"",f.envMap?"#define "+u:"",f.envMap?"#define "+k:"",f.envMap?"#define "+r:"",f.lightMap?"#define USE_LIGHTMAP":"",f.aoMap?"#define USE_AOMAP":"",f.emissiveMap?"#define USE_EMISSIVEMAP":"",f.bumpMap?"#define USE_BUMPMAP":"",f.normalMap?"#define USE_NORMALMAP":"",f.normalMap&&f.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",f.normalMap&&f.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",f.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",f.specularMap?"#define USE_SPECULARMAP":"",f.roughnessMap?"#define USE_ROUGHNESSMAP":"",f.metalnessMap?"#define USE_METALNESSMAP":"",f.alphaMap?"#define USE_ALPHAMAP":"",f.sheen?"#define USE_SHEEN":"",f.vertexTangents?"#define USE_TANGENT":"",f.vertexColors?"#define USE_COLOR":"",f.vertexUvs?"#define USE_UV":"",f.gradientMap?"#define USE_GRADIENTMAP":"",f.flatShading?"#define FLAT_SHADED":"",f.doubleSided?"#define DOUBLE_SIDED":"",f.flipSided?"#define FLIP_SIDED":"",f.shadowMapEnabled?"#define USE_SHADOWMAP":"",f.shadowMapEnabled?"#define "+q:"",f.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",f.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",f.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",f.logarithmicDepthBuffer&&(f.isWebGL2||b.get("EXT_frag_depth"))?"#define USE_LOGDEPTHBUF_EXT":"",(d.extensions&&d.extensions.shaderTextureLOD||f.envMap)&&(f.isWebGL2||b.get("EXT_shader_texture_lod"))?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;",0!==f.toneMapping?"#define TONE_MAPPING":"",0!==f.toneMapping?N.tonemapping_pars_fragment:"",0!==f.toneMapping?Pj("toneMapping",f.toneMapping):"",f.dithering?"#define DITHERING":"",f.outputEncoding||f.mapEncoding||f.matcapEncoding||f.envMapEncoding||f.emissiveMapEncoding?N.encodings_pars_fragment:"",f.mapEncoding?Ge("mapTexelToLinear",f.mapEncoding):"",f.matcapEncoding?Ge("matcapTexelToLinear",f.matcapEncoding):"",f.envMapEncoding?Ge("envMapTexelToLinear",f.envMapEncoding):"",f.emissiveMapEncoding?Ge("emissiveMapTexelToLinear",f.emissiveMapEncoding):"",f.outputEncoding?Oj("linearToOutputTexel",f.outputEncoding):"",f.depthPacking?"#define DEPTH_PACKING "+d.depthPacking:"","\n"].filter(Hd).join("\n"));l=l.replace($f,Zf);l=Ch(l,f);l=Dh(l,f);m=m.replace($f,Zf);m=Ch(m,f);m=Dh(m,f);l=l.replace(Gh,Eh);m=m.replace(Gh,Eh);f.isWebGL2&&!d.isRawShaderMaterial&&(q=!1,u=/^\s*#version\s+300\s+es\s*\n/,d.isShaderMaterial&&null!==l.match(u)&&null!==m.match(u)&&(q=!0,l=l.replace(u,""),m=m.replace(u,"")),h="#version 300 es\n\n#define attribute in\n#define varying out\n#define texture2D texture\n"+h,b=["#version 300 es\n\n#define varying in",q?"":"out highp vec4 pc_fragColor;",q?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth\n#define texture2D texture\n#define textureCube texture\n#define texture2DProj textureProj\n#define texture2DLodEXT textureLod\n#define texture2DProjLodEXT textureProjLod\n#define textureCubeLodEXT textureLod\n#define texture2DGradEXT textureGrad\n#define texture2DProjGradEXT textureProjGrad\n#define textureCubeGradEXT textureGrad"].join("\n")+"\n"+b,0<y&&(h=h.replace("#version 300 es\n",["#version 300 es\n\n#extension GL_OVR_multiview2 : require","layout(num_views = "+y+") in;","#define VIEW_ID gl_ViewID_OVR"].join("\n")),h=h.replace("uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;",["uniform mat4 modelViewMatrices["+y+"];","uniform mat4 projectionMatrices["+y+"];","uniform mat4 viewMatrices["+y+"];","uniform mat3 normalMatrices["+y+"];","#define modelViewMatrix modelViewMatrices[VIEW_ID]\n#define projectionMatrix projectionMatrices[VIEW_ID]\n#define viewMatrix viewMatrices[VIEW_ID]\n#define normalMatrix normalMatrices[VIEW_ID]"].join("\n")),b=b.replace("#version 300 es\n","#version 300 es\n\n#extension GL_OVR_multiview2 : require\n#define VIEW_ID gl_ViewID_OVR"),b=b.replace("uniform mat4 viewMatrix;",["uniform mat4 viewMatrices["+y+"];","#define viewMatrix viewMatrices[VIEW_ID]"].join("\n"))));m=b+m;l=zh(g,35633,h+l);m=zh(g,35632,m);g.attachShader(n,l);g.attachShader(n,m);void 0!==d.index0AttributeName?g.bindAttribLocation(n,0,d.index0AttributeName):!0===f.morphTargets&&g.bindAttribLocation(n,0,"position");g.linkProgram(n);if(a.debug.checkShaderErrors){a=g.getProgramInfoLog(n).trim();f=g.getShaderInfoLog(l).trim();q=g.getShaderInfoLog(m).trim();k=u=!0;if(!1===g.getProgramParameter(n,35714))u=!1,r=Bh(g,l,"vertex"),p=Bh(g,m,"fragment"),console.error("THREE.WebGLProgram: shader error: ",g.getError(),"35715",g.getProgramParameter(n,35715),"gl.getProgramInfoLog",a,r,p);else if(""!==a)console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",a);else if(""===f||""===q)k=!1;k&&(this.diagnostics={runnable:u,material:d,programLog:a,vertexShader:{log:f,prefix:h},fragmentShader:{log:q,prefix:b}});}g.deleteShader(l);g.deleteShader(m);var V;this.getUniforms=function(){void 0===V&&(V=new Bb(g,n));return V;};var P;this.getAttributes=function(){if(void 0===P){for(var a={},b=g.getProgramParameter(n,35721),c=0;c<b;c++){var d=g.getActiveAttrib(n,c).name;a[d]=g.getAttribLocation(n,d);}P=a;}return P;};this.destroy=function(){g.deleteProgram(n);this.program=void 0;};this.name=e.name;this.id=Xj++;this.code=c;this.usedTimes=1;this.program=n;this.vertexShader=l;this.fragmentShader=m;this.numMultiviewViews=y;return this;}function Yj(a,b,c){function d(a,b){if(a)a.isTexture?c=a.encoding:a.isWebGLRenderTarget&&(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),c=a.texture.encoding);else var c=3E3;3E3===c&&b&&(c=3007);return c;}var e=[],f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"phong",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},g="precision supportsVertexTextures instancing map mapEncoding matcap matcapEncoding envMap envMapMode envMapEncoding lightMap aoMap emissiveMap emissiveMapEncoding bumpMap normalMap objectSpaceNormalMap tangentSpaceNormalMap clearcoatNormalMap displacementMap specularMap roughnessMap metalnessMap gradientMap alphaMap combine vertexColors vertexTangents fog useFog fogExp2 flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights numRectAreaLights shadowMapEnabled shadowMapType toneMapping physicallyCorrectLights alphaTest doubleSided flipSided numClippingPlanes numClipIntersection depthPacking dithering sheen".split(" ");this.getParameters=function(b,e,g,q,u,k,r){var h=f[b.type];if(r.isSkinnedMesh){var l=r.skeleton.bones;if(c.floatVertexTextures)l=1024;else{var m=Math.min(Math.floor((c.maxVertexUniforms-20)/4),l.length);m<l.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+l.length+" bones. This GPU supports "+m+"."),l=0):l=m;}}else l=0;m=c.precision;null!==b.precision&&(m=c.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));var t=a.getRenderTarget();return{isWebGL2:c.isWebGL2,shaderID:h,precision:m,instancing:!0===r.isInstancedMesh,supportsVertexTextures:c.vertexTextures,outputEncoding:d(t?t.texture:null,a.gammaOutput),map:!!b.map,mapEncoding:d(b.map,a.gammaInput),matcap:!!b.matcap,matcapEncoding:d(b.matcap,a.gammaInput),envMap:!!b.envMap,envMapMode:b.envMap&&b.envMap.mapping,envMapEncoding:d(b.envMap,a.gammaInput),envMapCubeUV:!!b.envMap&&(306===b.envMap.mapping||307===b.envMap.mapping),lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,emissiveMapEncoding:d(b.emissiveMap,a.gammaInput),bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:1===b.normalMapType,tangentSpaceNormalMap:0===b.normalMapType,clearcoatNormalMap:!!b.clearcoatNormalMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,alphaMap:!!b.alphaMap,gradientMap:!!b.gradientMap,sheen:!!b.sheen,combine:b.combine,vertexTangents:b.normalMap&&b.vertexTangents,vertexColors:b.vertexColors,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatNormalMap,fog:!!q,useFog:b.fog,fogExp2:q&&q.isFogExp2,flatShading:b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:c.logarithmicDepthBuffer,skinning:b.skinning&&0<l,maxBones:l,useVertexTexture:c.floatVertexTextures,morphTargets:b.morphTargets,morphNormals:b.morphNormals,maxMorphTargets:a.maxMorphTargets,maxMorphNormals:a.maxMorphNormals,numDirLights:e.directional.length,numPointLights:e.point.length,numSpotLights:e.spot.length,numRectAreaLights:e.rectArea.length,numHemiLights:e.hemi.length,numDirLightShadows:e.directionalShadowMap.length,numPointLightShadows:e.pointShadowMap.length,numSpotLightShadows:e.spotShadowMap.length,numClippingPlanes:u,numClipIntersection:k,dithering:b.dithering,shadowMapEnabled:a.shadowMap.enabled&&0<g.length,shadowMapType:a.shadowMap.type,toneMapping:b.toneMapped?a.toneMapping:0,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,alphaTest:b.alphaTest,doubleSided:2===b.side,flipSided:1===b.side,depthPacking:void 0!==b.depthPacking?b.depthPacking:!1};};this.getProgramCode=function(b,c){var d=[];c.shaderID?d.push(c.shaderID):(d.push(b.fragmentShader),d.push(b.vertexShader));if(void 0!==b.defines)for(var e in b.defines){d.push(e),d.push(b.defines[e]);}for(e=0;e<g.length;e++){d.push(c[g[e]]);}d.push(b.onBeforeCompile.toString());d.push(a.gammaOutput);d.push(a.gammaFactor);return d.join();};this.acquireProgram=function(c,d,f,g){for(var h,l=0,m=e.length;l<m;l++){var q=e[l];if(q.code===g){h=q;++h.usedTimes;break;}}void 0===h&&(h=new Wj(a,b,g,c,d,f),e.push(h));return h;};this.releaseProgram=function(a){if(0===--a.usedTimes){var b=e.indexOf(a);e[b]=e[e.length-1];e.pop();a.destroy();}};this.programs=e;}function Zj(){var a=new WeakMap();return{get:function get(b){var c=a.get(b);void 0===c&&(c={},a.set(b,c));return c;},remove:function remove(b){a["delete"](b);},update:function update(b,c,d){a.get(b)[c]=d;},dispose:function dispose(){a=new WeakMap();}};}function ak(a,b){return a.groupOrder!==b.groupOrder?a.groupOrder-b.groupOrder:a.renderOrder!==b.renderOrder?a.renderOrder-b.renderOrder:a.program!==b.program?a.program.id-b.program.id:a.material.id!==b.material.id?a.material.id-b.material.id:a.z!==b.z?a.z-b.z:a.id-b.id;}function bk(a,b){return a.groupOrder!==b.groupOrder?a.groupOrder-b.groupOrder:a.renderOrder!==b.renderOrder?a.renderOrder-b.renderOrder:a.z!==b.z?b.z-a.z:a.id-b.id;}function Hh(){function a(a,d,e,m,q,u){var g=b[c];void 0===g?(g={id:a.id,object:a,geometry:d,material:e,program:e.program||f,groupOrder:m,renderOrder:a.renderOrder,z:q,group:u},b[c]=g):(g.id=a.id,g.object=a,g.geometry=d,g.material=e,g.program=e.program||f,g.groupOrder=m,g.renderOrder=a.renderOrder,g.z=q,g.group=u);c++;return g;}var b=[],c=0,d=[],e=[],f={id:-1};return{opaque:d,transparent:e,init:function init(){c=0;d.length=0;e.length=0;},push:function push(b,c,f,m,q,u){b=a(b,c,f,m,q,u);(!0===f.transparent?e:d).push(b);},unshift:function unshift(b,c,f,m,q,u){b=a(b,c,f,m,q,u);(!0===f.transparent?e:d).unshift(b);},sort:function sort(){1<d.length&&d.sort(ak);1<e.length&&e.sort(bk);}};}function ck(){function a(c){c=c.target;c.removeEventListener("dispose",a);b["delete"](c);}var b=new WeakMap();return{get:function get(c,d){var e=b.get(c);if(void 0===e){var f=new Hh();b.set(c,new WeakMap());b.get(c).set(d,f);c.addEventListener("dispose",a);}else f=e.get(d),void 0===f&&(f=new Hh(),e.set(d,f));return f;},dispose:function dispose(){b=new WeakMap();}};}function dk(){var a={};return{get:function get(b){if(void 0!==a[b.id])return a[b.id];switch(b.type){case"DirectionalLight":var c={direction:new n(),color:new H(),shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new w()};break;case"SpotLight":c={position:new n(),direction:new n(),color:new H(),distance:0,coneCos:0,penumbraCos:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new w()};break;case"PointLight":c={position:new n(),color:new H(),distance:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new w(),shadowCameraNear:1,shadowCameraFar:1E3};break;case"HemisphereLight":c={direction:new n(),skyColor:new H(),groundColor:new H()};break;case"RectAreaLight":c={color:new H(),position:new n(),halfWidth:new n(),halfHeight:new n()};}return a[b.id]=c;}};}function ek(a,b){return(b.castShadow?1:0)-(a.castShadow?1:0);}function fk(){for(var a=new dk(),b={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],point:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},c=0;9>c;c++){b.probe.push(new n());}var d=new n(),e=new U(),f=new U();return{setup:function setup(c,h,l){for(var g=0,q=0,u=0,k=0;9>k;k++){b.probe[k].set(0,0,0);}var r=h=0,p=0,v=0,n=0,z=0,y=0,V=0;l=l.matrixWorldInverse;c.sort(ek);k=0;for(var P=c.length;k<P;k++){var C=c[k],Cb=C.color,w=C.intensity,A=C.distance,wa=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)g+=Cb.r*w,q+=Cb.g*w,u+=Cb.b*w;else if(C.isLightProbe)for(wa=0;9>wa;wa++){b.probe[wa].addScaledVector(C.sh.coefficients[wa],w);}else if(C.isDirectionalLight){var G=a.get(C);G.color.copy(C.color).multiplyScalar(C.intensity);G.direction.setFromMatrixPosition(C.matrixWorld);d.setFromMatrixPosition(C.target.matrixWorld);G.direction.sub(d);G.direction.transformDirection(l);if(G.shadow=C.castShadow)w=C.shadow,G.shadowBias=w.bias,G.shadowRadius=w.radius,G.shadowMapSize=w.mapSize,b.directionalShadowMap[h]=wa,b.directionalShadowMatrix[h]=C.shadow.matrix,z++;b.directional[h]=G;h++;}else if(C.isSpotLight){G=a.get(C);G.position.setFromMatrixPosition(C.matrixWorld);G.position.applyMatrix4(l);G.color.copy(Cb).multiplyScalar(w);G.distance=A;G.direction.setFromMatrixPosition(C.matrixWorld);d.setFromMatrixPosition(C.target.matrixWorld);G.direction.sub(d);G.direction.transformDirection(l);G.coneCos=Math.cos(C.angle);G.penumbraCos=Math.cos(C.angle*(1-C.penumbra));G.decay=C.decay;if(G.shadow=C.castShadow)w=C.shadow,G.shadowBias=w.bias,G.shadowRadius=w.radius,G.shadowMapSize=w.mapSize,b.spotShadowMap[p]=wa,b.spotShadowMatrix[p]=C.shadow.matrix,V++;b.spot[p]=G;p++;}else if(C.isRectAreaLight)G=a.get(C),G.color.copy(Cb).multiplyScalar(w),G.position.setFromMatrixPosition(C.matrixWorld),G.position.applyMatrix4(l),f.identity(),e.copy(C.matrixWorld),e.premultiply(l),f.extractRotation(e),G.halfWidth.set(.5*C.width,0,0),G.halfHeight.set(0,.5*C.height,0),G.halfWidth.applyMatrix4(f),G.halfHeight.applyMatrix4(f),b.rectArea[v]=G,v++;else if(C.isPointLight){G=a.get(C);G.position.setFromMatrixPosition(C.matrixWorld);G.position.applyMatrix4(l);G.color.copy(C.color).multiplyScalar(C.intensity);G.distance=C.distance;G.decay=C.decay;if(G.shadow=C.castShadow)w=C.shadow,G.shadowBias=w.bias,G.shadowRadius=w.radius,G.shadowMapSize=w.mapSize,G.shadowCameraNear=w.camera.near,G.shadowCameraFar=w.camera.far,b.pointShadowMap[r]=wa,b.pointShadowMatrix[r]=C.shadow.matrix,y++;b.point[r]=G;r++;}else C.isHemisphereLight&&(G=a.get(C),G.direction.setFromMatrixPosition(C.matrixWorld),G.direction.transformDirection(l),G.direction.normalize(),G.skyColor.copy(C.color).multiplyScalar(w),G.groundColor.copy(C.groundColor).multiplyScalar(w),b.hemi[n]=G,n++);}b.ambient[0]=g;b.ambient[1]=q;b.ambient[2]=u;c=b.hash;if(c.directionalLength!==h||c.pointLength!==r||c.spotLength!==p||c.rectAreaLength!==v||c.hemiLength!==n||c.numDirectionalShadows!==z||c.numPointShadows!==y||c.numSpotShadows!==V)b.directional.length=h,b.spot.length=p,b.rectArea.length=v,b.point.length=r,b.hemi.length=n,b.directionalShadowMap.length=z,b.pointShadowMap.length=y,b.spotShadowMap.length=V,b.directionalShadowMatrix.length=z,b.pointShadowMatrix.length=y,b.spotShadowMatrix.length=V,c.directionalLength=h,c.pointLength=r,c.spotLength=p,c.rectAreaLength=v,c.hemiLength=n,c.numDirectionalShadows=z,c.numPointShadows=y,c.numSpotShadows=V,b.version=gk++;},state:b};}function Ih(){var a=new fk(),b=[],c=[];return{init:function init(){b.length=0;c.length=0;},state:{lightsArray:b,shadowsArray:c,lights:a},setupLights:function setupLights(d){a.setup(b,c,d);},pushLight:function pushLight(a){b.push(a);},pushShadow:function pushShadow(a){c.push(a);}};}function hk(){function a(c){c=c.target;c.removeEventListener("dispose",a);b["delete"](c);}var b=new WeakMap();return{get:function get(c,d){if(!1===b.has(c)){var e=new Ih();b.set(c,new WeakMap());b.get(c).set(d,e);c.addEventListener("dispose",a);}else!1===b.get(c).has(d)?(e=new Ih(),b.get(c).set(d,e)):e=b.get(c).get(d);return e;},dispose:function dispose(){b=new WeakMap();}};}function Db(a){M.call(this);this.type="MeshDepthMaterial";this.depthPacking=3200;this.morphTargets=this.skinning=!1;this.displacementMap=this.alphaMap=this.map=null;this.displacementScale=1;this.displacementBias=0;this.wireframe=!1;this.wireframeLinewidth=1;this.fog=!1;this.setValues(a);}function Eb(a){M.call(this);this.type="MeshDistanceMaterial";this.referencePosition=new n();this.nearDistance=1;this.farDistance=1E3;this.morphTargets=this.skinning=!1;this.displacementMap=this.alphaMap=this.map=null;this.displacementScale=1;this.displacementBias=0;this.fog=!1;this.setValues(a);}function Jh(a,b,c){function d(b,c,d,e,f,g){var h=b.geometry;var l=m;var p=b.customDepthMaterial;d.isPointLight&&(l=q,p=b.customDistanceMaterial);p?l=p:(p=!1,c.morphTargets&&(h&&h.isBufferGeometry?p=h.morphAttributes&&h.morphAttributes.position&&0<h.morphAttributes.position.length:h&&h.isGeometry&&(p=h.morphTargets&&0<h.morphTargets.length)),b.isSkinnedMesh&&!1===c.skinning&&console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",b),b=b.isSkinnedMesh&&c.skinning,h=0,p&&(h|=1),b&&(h|=2),l=l[h]);a.localClippingEnabled&&!0===c.clipShadows&&0!==c.clippingPlanes.length&&(h=l.uuid,p=c.uuid,b=u[h],void 0===b&&(b={},u[h]=b),h=b[p],void 0===h&&(h=l.clone(),b[p]=h),l=h);l.visible=c.visible;l.wireframe=c.wireframe;l.side=3===g?null!=c.shadowSide?c.shadowSide:c.side:null!=c.shadowSide?c.shadowSide:k[c.side];l.clipShadows=c.clipShadows;l.clippingPlanes=c.clippingPlanes;l.clipIntersection=c.clipIntersection;l.wireframeLinewidth=c.wireframeLinewidth;l.linewidth=c.linewidth;d.isPointLight&&l.isMeshDistanceMaterial&&(l.referencePosition.setFromMatrixPosition(d.matrixWorld),l.nearDistance=e,l.farDistance=f);return l;}function e(c,g,h,l,m){if(!1!==c.visible){if(c.layers.test(g.layers)&&(c.isMesh||c.isLine||c.isPoints)&&(c.castShadow||c.receiveShadow&&3===m)&&(!c.frustumCulled||f.intersectsObject(c))){c.modelViewMatrix.multiplyMatrices(h.matrixWorldInverse,c.matrixWorld);var q=b.update(c),u=c.material;if(Array.isArray(u))for(var k=q.groups,p=0,t=k.length;p<t;p++){var r=k[p],v=u[r.materialIndex];v&&v.visible&&(v=d(c,v,l,h.near,h.far,m),a.renderBufferDirect(h,null,q,v,c,r));}else u.visible&&(v=d(c,u,l,h.near,h.far,m),a.renderBufferDirect(h,null,q,v,c,null));}c=c.children;q=0;for(u=c.length;q<u;q++){e(c[q],g,h,l,m);}}}var f=new Ed(),g=new w(),h=new w(),l=new aa(),m=Array(4),q=Array(4),u={},k={0:1,1:0,2:2},r=new ma({defines:{SAMPLE_RATE:.25,HALF_SAMPLE_RATE:.125},uniforms:{shadow_pass:{value:null},resolution:{value:new w()},radius:{value:4}},vertexShader:"void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",fragmentShader:"uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n  float mean = 0.0;\n  float squared_mean = 0.0;\n  \n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy  ) / resolution ) );\n  for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n    #ifdef HORIZONAL_PASS\n      vec2 distribution = decodeHalfRGBA ( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n      mean += distribution.x;\n      squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n    #else\n      float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0,  i )  * radius ) / resolution ) );\n      mean += depth;\n      squared_mean += depth * depth;\n    #endif\n  }\n  mean = mean * HALF_SAMPLE_RATE;\n  squared_mean = squared_mean * HALF_SAMPLE_RATE;\n  float std_dev = pow( squared_mean - mean * mean, 0.5 );\n  gl_FragColor = encodeHalfRGBA( vec2( mean, std_dev ) );\n}"}),p=r.clone();p.defines.HORIZONAL_PASS=1;var v=new E();v.addAttribute("position",new O(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));var n=new ja(v,r);for(v=0;4!==v;++v){var z=0!==(v&1),y=0!==(v&2),V=new Db({depthPacking:3201,morphTargets:z,skinning:y});m[v]=V;z=new Eb({morphTargets:z,skinning:y});q[v]=z;}var P=this;this.enabled=!1;this.autoUpdate=!0;this.needsUpdate=!1;this.type=1;this.render=function(d,m,q){if(!1!==P.enabled&&(!1!==P.autoUpdate||!1!==P.needsUpdate)&&0!==d.length){var u=a.getRenderTarget(),k=a.getActiveCubeFace(),t=a.getActiveMipmapLevel(),v=a.state;v.setBlending(0);v.buffers.color.setClear(1,1,1,1);v.buffers.depth.setTest(!0);v.setScissorTest(!1);for(var x=0,y=d.length;x<y;x++){var z=d[x],T=z.shadow;if(void 0===T)console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");else{g.copy(T.mapSize);var X=T.getFrameExtents();g.multiply(X);h.copy(T.mapSize);if(g.x>c||g.y>c)console.warn("THREE.WebGLShadowMap:",z,"has shadow exceeding max texture size, reducing"),g.x>c&&(h.x=Math.floor(c/X.x),g.x=h.x*X.x,T.mapSize.x=h.x),g.y>c&&(h.y=Math.floor(c/X.y),g.y=h.y*X.y,T.mapSize.y=h.y);null!==T.map||T.isPointLightShadow||3!==this.type||(X={minFilter:1006,magFilter:1006,format:1023},T.map=new la(g.x,g.y,X),T.map.texture.name=z.name+".shadowMap",T.mapPass=new la(g.x,g.y,X),T.camera.updateProjectionMatrix());null===T.map&&(X={minFilter:1003,magFilter:1003,format:1023},T.map=new la(g.x,g.y,X),T.map.texture.name=z.name+".shadowMap",T.camera.updateProjectionMatrix());a.setRenderTarget(T.map);a.clear();X=T.getViewportCount();for(var V=0;V<X;V++){var C=T.getViewport(V);l.set(h.x*C.x,h.y*C.y,h.x*C.z,h.y*C.w);v.viewport(l);T.updateMatrices(z,q,V);f=T.getFrustum();e(m,q,T.camera,z,this.type);}T.isPointLightShadow||3!==this.type||(z=T,T=q,X=b.update(n),r.uniforms.shadow_pass.value=z.map.texture,r.uniforms.resolution.value=z.mapSize,r.uniforms.radius.value=z.radius,a.setRenderTarget(z.mapPass),a.clear(),a.renderBufferDirect(T,null,X,r,n,null),p.uniforms.shadow_pass.value=z.mapPass.texture,p.uniforms.resolution.value=z.mapSize,p.uniforms.radius.value=z.radius,a.setRenderTarget(z.map),a.clear(),a.renderBufferDirect(T,null,X,p,n,null));}}P.needsUpdate=!1;a.setRenderTarget(u,k,t);}};}function ik(a,b,c,d){function e(b,c,d){var e=new Uint8Array(4),f=a.createTexture();a.bindTexture(b,f);a.texParameteri(b,10241,9728);a.texParameteri(b,10240,9728);for(b=0;b<d;b++){a.texImage2D(c+b,0,6408,1,1,0,6408,5121,e);}return f;}function f(c,e){z[c]=1;0===y[c]&&(a.enableVertexAttribArray(c),y[c]=1);V[c]!==e&&((d.isWebGL2?a:b.get("ANGLE_instanced_arrays"))[d.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](c,e),V[c]=e);}function g(b){!0!==P[b]&&(a.enable(b),P[b]=!0);}function h(b){!1!==P[b]&&(a.disable(b),P[b]=!1);}function l(b,d,e,f,l,m,q,u){if(0===b)A&&(h(3042),A=!1);else if(A||(g(3042),A=!0),5!==b){if(b!==B||u!==T){if(100!==wa||100!==E)a.blendEquation(32774),E=wa=100;if(u)switch(b){case 1:a.blendFuncSeparate(1,771,1,771);break;case 2:a.blendFunc(1,1);break;case 3:a.blendFuncSeparate(0,0,769,771);break;case 4:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);}else switch(b){case 1:a.blendFuncSeparate(770,771,1,771);break;case 2:a.blendFunc(770,1);break;case 3:a.blendFunc(0,769);break;case 4:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);}H=I=ag=G=null;B=b;T=u;}}else{l=l||d;m=m||e;q=q||f;if(d!==wa||l!==E)a.blendEquationSeparate(c.convert(d),c.convert(l)),wa=d,E=l;if(e!==G||f!==ag||m!==I||q!==H)a.blendFuncSeparate(c.convert(e),c.convert(f),c.convert(m),c.convert(q)),G=e,ag=f,I=m,H=q;B=b;T=null;}}function m(b){X!==b&&(b?a.frontFace(2304):a.frontFace(2305),X=b);}function q(b){0!==b?(g(2884),b!==bg&&(1===b?a.cullFace(1029):2===b?a.cullFace(1028):a.cullFace(1032))):h(2884);bg=b;}function u(b,c,d){if(b){if(g(32823),ha!==c||bc!==d)a.polygonOffset(c,d),ha=c,bc=d;}else h(32823);}function k(b){void 0===b&&(b=33984+D-1);Pa!==b&&(a.activeTexture(b),Pa=b);}var r=new function(){var b=!1,c=new aa(),d=null,e=new aa(0,0,0,0);return{setMask:function setMask(c){d===c||b||(a.colorMask(c,c,c,c),d=c);},setLocked:function setLocked(a){b=a;},setClear:function setClear(b,d,f,g,h){!0===h&&(b*=g,d*=g,f*=g);c.set(b,d,f,g);!1===e.equals(c)&&(a.clearColor(b,d,f,g),e.copy(c));},reset:function reset(){b=!1;d=null;e.set(-1,0,0,0);}};}(),p=new function(){var b=!1,c=null,d=null,e=null;return{setTest:function setTest(a){a?g(2929):h(2929);},setMask:function setMask(d){c===d||b||(a.depthMask(d),c=d);},setFunc:function setFunc(b){if(d!==b){if(b)switch(b){case 0:a.depthFunc(512);break;case 1:a.depthFunc(519);break;case 2:a.depthFunc(513);break;case 3:a.depthFunc(515);break;case 4:a.depthFunc(514);break;case 5:a.depthFunc(518);break;case 6:a.depthFunc(516);break;case 7:a.depthFunc(517);break;default:a.depthFunc(515);}else a.depthFunc(515);d=b;}},setLocked:function setLocked(a){b=a;},setClear:function setClear(b){e!==b&&(a.clearDepth(b),e=b);},reset:function reset(){b=!1;e=d=c=null;}};}(),v=new function(){var b=!1,c=null,d=null,e=null,f=null,l=null,m=null,q=null,u=null;return{setTest:function setTest(a){b||(a?g(2960):h(2960));},setMask:function setMask(d){c===d||b||(a.stencilMask(d),c=d);},setFunc:function setFunc(b,c,g){if(d!==b||e!==c||f!==g)a.stencilFunc(b,c,g),d=b,e=c,f=g;},setOp:function setOp(b,c,d){if(l!==b||m!==c||q!==d)a.stencilOp(b,c,d),l=b,m=c,q=d;},setLocked:function setLocked(a){b=a;},setClear:function setClear(b){u!==b&&(a.clearStencil(b),u=b);},reset:function reset(){b=!1;u=q=m=l=f=e=d=c=null;}};}(),n=a.getParameter(34921),z=new Uint8Array(n),y=new Uint8Array(n),V=new Uint8Array(n),P={},C=null,w=null,A=null,B=null,wa=null,G=null,ag=null,E=null,I=null,H=null,T=!1,X=null,bg=null,ac=null,ha=null,bc=null,D=a.getParameter(35661),dg=!1;n=0;n=a.getParameter(7938);-1!==n.indexOf("WebGL")?(n=parseFloat(/^WebGL ([0-9])/.exec(n)[1]),dg=1<=n):-1!==n.indexOf("OpenGL ES")&&(n=parseFloat(/^OpenGL ES ([0-9])/.exec(n)[1]),dg=2<=n);var Pa=null,eg={},F=new aa(),O=new aa(),K={};K[3553]=e(3553,3553,1);K[34067]=e(34067,34069,6);r.setClear(0,0,0,1);p.setClear(1);v.setClear(0);g(2929);p.setFunc(3);m(!1);q(1);g(2884);l(0);return{buffers:{color:r,depth:p,stencil:v},initAttributes:function initAttributes(){for(var a=0,b=z.length;a<b;a++){z[a]=0;}},enableAttribute:function enableAttribute(a){f(a,0);},enableAttributeAndDivisor:f,disableUnusedAttributes:function disableUnusedAttributes(){for(var b=0,c=y.length;b!==c;++b){y[b]!==z[b]&&(a.disableVertexAttribArray(b),y[b]=0);}},enable:g,disable:h,getCompressedTextureFormats:function getCompressedTextureFormats(){if(null===C&&(C=[],b.get("WEBGL_compressed_texture_pvrtc")||b.get("WEBGL_compressed_texture_s3tc")||b.get("WEBGL_compressed_texture_etc1")||b.get("WEBGL_compressed_texture_astc")))for(var c=a.getParameter(34467),d=0;d<c.length;d++){C.push(c[d]);}return C;},useProgram:function useProgram(b){return w!==b?(a.useProgram(b),w=b,!0):!1;},setBlending:l,setMaterial:function setMaterial(a,b){2===a.side?h(2884):g(2884);var c=1===a.side;b&&(c=!c);m(c);1===a.blending&&!1===a.transparent?l(0):l(a.blending,a.blendEquation,a.blendSrc,a.blendDst,a.blendEquationAlpha,a.blendSrcAlpha,a.blendDstAlpha,a.premultipliedAlpha);p.setFunc(a.depthFunc);p.setTest(a.depthTest);p.setMask(a.depthWrite);r.setMask(a.colorWrite);b=a.stencilWrite;v.setTest(b);b&&(v.setMask(a.stencilWriteMask),v.setFunc(a.stencilFunc,a.stencilRef,a.stencilFuncMask),v.setOp(a.stencilFail,a.stencilZFail,a.stencilZPass));u(a.polygonOffset,a.polygonOffsetFactor,a.polygonOffsetUnits);},setFlipSided:m,setCullFace:q,setLineWidth:function setLineWidth(b){b!==ac&&(dg&&a.lineWidth(b),ac=b);},setPolygonOffset:u,setScissorTest:function setScissorTest(a){a?g(3089):h(3089);},activeTexture:k,bindTexture:function bindTexture(b,c){null===Pa&&k();var d=eg[Pa];void 0===d&&(d={type:void 0,texture:void 0},eg[Pa]=d);if(d.type!==b||d.texture!==c)a.bindTexture(b,c||K[b]),d.type=b,d.texture=c;},compressedTexImage2D:function compressedTexImage2D(){try{a.compressedTexImage2D.apply(a,arguments);}catch(Z){console.error("THREE.WebGLState:",Z);}},texImage2D:function texImage2D(){try{a.texImage2D.apply(a,arguments);}catch(Z){console.error("THREE.WebGLState:",Z);}},texImage3D:function texImage3D(){try{a.texImage3D.apply(a,arguments);}catch(Z){console.error("THREE.WebGLState:",Z);}},scissor:function scissor(b){!1===F.equals(b)&&(a.scissor(b.x,b.y,b.z,b.w),F.copy(b));},viewport:function viewport(b){!1===O.equals(b)&&(a.viewport(b.x,b.y,b.z,b.w),O.copy(b));},reset:function reset(){for(var b=0;b<y.length;b++){1===y[b]&&(a.disableVertexAttribArray(b),y[b]=0);}P={};Pa=C=null;eg={};bg=X=B=w=null;r.reset();p.reset();v.reset();}};}function jk(a,b,c,d,e,f,g){function h(a,b){return E?new OffscreenCanvas(a,b):document.createElementNS("http://www.w3.org/1999/xhtml","canvas");}function l(a,b,c,d){var e=1;if(a.width>d||a.height>d)e=d/Math.max(a.width,a.height);if(1>e||!0===b){if("undefined"!==typeof HTMLImageElement&&a instanceof HTMLImageElement||"undefined"!==typeof HTMLCanvasElement&&a instanceof HTMLCanvasElement||"undefined"!==typeof ImageBitmap&&a instanceof ImageBitmap)return d=b?L.floorPowerOfTwo:Math.floor,b=d(e*a.width),e=d(e*a.height),void 0===G&&(G=h(b,e)),c=c?h(b,e):G,c.width=b,c.height=e,c.getContext("2d").drawImage(a,0,0,b,e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+a.width+"x"+a.height+") to ("+b+"x"+e+")."),c;"data"in a&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+a.width+"x"+a.height+").");}return a;}function m(a){return L.isPowerOfTwo(a.width)&&L.isPowerOfTwo(a.height);}function q(a,b){return a.generateMipmaps&&b&&1003!==a.minFilter&&1006!==a.minFilter;}function u(b,c,e,f){a.generateMipmap(b);d.get(c).__maxMipLevel=Math.log(Math.max(e,f))*Math.LOG2E;}function k(a,c){if(!e.isWebGL2)return a;var d=a;6403===a&&(5126===c&&(d=33326),5131===c&&(d=33325),5121===c&&(d=33321));6407===a&&(5126===c&&(d=34837),5131===c&&(d=34843),5121===c&&(d=32849));6408===a&&(5126===c&&(d=34836),5131===c&&(d=34842),5121===c&&(d=32856));33325===d||33326===d||34842===d||34836===d?b.get("EXT_color_buffer_float"):(34843===d||34837===d)&&console.warn("THREE.WebGLRenderer: Floating point textures with RGB format not supported. Please use RGBA instead.");return d;}function r(a){return 1003===a||1004===a||1005===a?9728:9729;}function p(b){b=b.target;b.removeEventListener("dispose",p);var c=d.get(b);void 0!==c.__webglInit&&(a.deleteTexture(c.__webglTexture),d.remove(b));b.isVideoTexture&&wa["delete"](b);g.memory.textures--;}function v(b){b=b.target;b.removeEventListener("dispose",v);var c=d.get(b),e=d.get(b.texture);if(b){void 0!==e.__webglTexture&&a.deleteTexture(e.__webglTexture);b.depthTexture&&b.depthTexture.dispose();if(b.isWebGLRenderTargetCube)for(e=0;6>e;e++){a.deleteFramebuffer(c.__webglFramebuffer[e]),c.__webglDepthbuffer&&a.deleteRenderbuffer(c.__webglDepthbuffer[e]);}else a.deleteFramebuffer(c.__webglFramebuffer),c.__webglDepthbuffer&&a.deleteRenderbuffer(c.__webglDepthbuffer);if(b.isWebGLMultiviewRenderTarget){a.deleteTexture(c.__webglColorTexture);a.deleteTexture(c.__webglDepthStencilTexture);g.memory.textures-=2;e=0;for(var f=c.__webglViewFramebuffers.length;e<f;e++){a.deleteFramebuffer(c.__webglViewFramebuffers[e]);}}d.remove(b.texture);d.remove(b);}g.memory.textures--;}function n(a,b){var e=d.get(a);if(a.isVideoTexture){var f=g.render.frame;wa.get(a)!==f&&(wa.set(a,f),a.update());}if(0<a.version&&e.__version!==a.version)if(f=a.image,void 0===f)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(!1===f.complete)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{C(e,a,b);return;}c.activeTexture(33984+b);c.bindTexture(3553,e.__webglTexture);}function z(b,g){if(6===b.image.length){var h=d.get(b);if(0<b.version&&h.__version!==b.version){P(h,b);c.activeTexture(33984+g);c.bindTexture(34067,h.__webglTexture);a.pixelStorei(37440,b.flipY);var p=b&&b.isCompressedTexture;g=b.image[0]&&b.image[0].isDataTexture;for(var t=[],r=0;6>r;r++){t[r]=p||g?g?b.image[r].image:b.image[r]:l(b.image[r],!1,!0,e.maxCubemapSize);}var v=t[0],n=m(v)||e.isWebGL2,x=f.convert(b.format),y=f.convert(b.type),z=k(x,y);V(34067,b,n);if(p){for(r=0;6>r;r++){var T=t[r].mipmaps;for(p=0;p<T.length;p++){var X=T[p];1023!==b.format&&1022!==b.format?-1<c.getCompressedTextureFormats().indexOf(x)?c.compressedTexImage2D(34069+r,p,z,X.width,X.height,0,X.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):c.texImage2D(34069+r,p,z,X.width,X.height,0,x,y,X.data);}}h.__maxMipLevel=T.length-1;}else{T=b.mipmaps;for(r=0;6>r;r++){if(g)for(c.texImage2D(34069+r,0,z,t[r].width,t[r].height,0,x,y,t[r].data),p=0;p<T.length;p++){X=T[p],X=X.image[r].image,c.texImage2D(34069+r,p+1,z,X.width,X.height,0,x,y,X.data);}else for(c.texImage2D(34069+r,0,z,x,y,t[r]),p=0;p<T.length;p++){X=T[p],c.texImage2D(34069+r,p+1,z,x,y,X.image[r]);}}h.__maxMipLevel=T.length;}q(b,n)&&u(34067,b,v.width,v.height);h.__version=b.version;if(b.onUpdate)b.onUpdate(b);}else c.activeTexture(33984+g),c.bindTexture(34067,h.__webglTexture);}}function y(a,b){c.activeTexture(33984+b);c.bindTexture(34067,d.get(a).__webglTexture);}function V(c,g,h){h?(a.texParameteri(c,10242,f.convert(g.wrapS)),a.texParameteri(c,10243,f.convert(g.wrapT)),32879!==c&&35866!==c||a.texParameteri(c,32882,f.convert(g.wrapR)),a.texParameteri(c,10240,f.convert(g.magFilter)),a.texParameteri(c,10241,f.convert(g.minFilter))):(a.texParameteri(c,10242,33071),a.texParameteri(c,10243,33071),32879!==c&&35866!==c||a.texParameteri(c,32882,33071),1001===g.wrapS&&1001===g.wrapT||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(c,10240,r(g.magFilter)),a.texParameteri(c,10241,r(g.minFilter)),1003!==g.minFilter&&1006!==g.minFilter&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));!(h=b.get("EXT_texture_filter_anisotropic"))||1015===g.type&&null===b.get("OES_texture_float_linear")||1016===g.type&&null===(e.isWebGL2||b.get("OES_texture_half_float_linear"))||!(1<g.anisotropy||d.get(g).__currentAnisotropy)||(a.texParameterf(c,h.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,e.getMaxAnisotropy())),d.get(g).__currentAnisotropy=g.anisotropy);}function P(b,c){void 0===b.__webglInit&&(b.__webglInit=!0,c.addEventListener("dispose",p),b.__webglTexture=a.createTexture(),g.memory.textures++);}function C(b,d,g){var h=3553;d.isDataTexture2DArray&&(h=35866);d.isDataTexture3D&&(h=32879);P(b,d);c.activeTexture(33984+g);c.bindTexture(h,b.__webglTexture);a.pixelStorei(37440,d.flipY);a.pixelStorei(37441,d.premultiplyAlpha);a.pixelStorei(3317,d.unpackAlignment);g=e.isWebGL2?!1:1001!==d.wrapS||1001!==d.wrapT||1003!==d.minFilter&&1006!==d.minFilter;g=g&&!1===m(d.image);g=l(d.image,g,!1,e.maxTextureSize);var p=m(g)||e.isWebGL2,t=f.convert(d.format),r=f.convert(d.type),v=k(t,r);V(h,d,p);var n=d.mipmaps;if(d.isDepthTexture){v=6402;if(1015===d.type){if(!e.isWebGL2)throw Error("Float Depth Texture only supported in WebGL2.0");v=36012;}else e.isWebGL2&&(v=33189);1026===d.format&&6402===v&&1012!==d.type&&1014!==d.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),d.type=1012,r=f.convert(d.type));1027===d.format&&(v=34041,1020!==d.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),d.type=1020,r=f.convert(d.type)));c.texImage2D(3553,0,v,g.width,g.height,0,t,r,null);}else if(d.isDataTexture){if(0<n.length&&p){for(var x=0,y=n.length;x<y;x++){h=n[x],c.texImage2D(3553,x,v,h.width,h.height,0,t,r,h.data);}d.generateMipmaps=!1;b.__maxMipLevel=n.length-1;}else c.texImage2D(3553,0,v,g.width,g.height,0,t,r,g.data),b.__maxMipLevel=0;}else if(d.isCompressedTexture){x=0;for(y=n.length;x<y;x++){h=n[x],1023!==d.format&&1022!==d.format?-1<c.getCompressedTextureFormats().indexOf(t)?c.compressedTexImage2D(3553,x,v,h.width,h.height,0,h.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):c.texImage2D(3553,x,v,h.width,h.height,0,t,r,h.data);}b.__maxMipLevel=n.length-1;}else if(d.isDataTexture2DArray)c.texImage3D(35866,0,v,g.width,g.height,g.depth,0,t,r,g.data),b.__maxMipLevel=0;else if(d.isDataTexture3D)c.texImage3D(32879,0,v,g.width,g.height,g.depth,0,t,r,g.data),b.__maxMipLevel=0;else if(0<n.length&&p){x=0;for(y=n.length;x<y;x++){h=n[x],c.texImage2D(3553,x,v,t,r,h);}d.generateMipmaps=!1;b.__maxMipLevel=n.length-1;}else c.texImage2D(3553,0,v,t,r,g),b.__maxMipLevel=0;q(d,p)&&u(3553,d,g.width,g.height);b.__version=d.version;if(d.onUpdate)d.onUpdate(d);}function w(b,e,g,h){var l=f.convert(e.texture.format),m=f.convert(e.texture.type),q=k(l,m);c.texImage2D(h,0,q,e.width,e.height,0,l,m,null);a.bindFramebuffer(36160,b);a.framebufferTexture2D(36160,g,h,d.get(e.texture).__webglTexture,0);a.bindFramebuffer(36160,null);}function A(b,c,d){a.bindRenderbuffer(36161,b);if(c.depthBuffer&&!c.stencilBuffer)d?(d=B(c),a.renderbufferStorageMultisample(36161,d,33189,c.width,c.height)):a.renderbufferStorage(36161,33189,c.width,c.height),a.framebufferRenderbuffer(36160,36096,36161,b);else if(c.depthBuffer&&c.stencilBuffer)d?(d=B(c),a.renderbufferStorageMultisample(36161,d,35056,c.width,c.height)):a.renderbufferStorage(36161,34041,c.width,c.height),a.framebufferRenderbuffer(36160,33306,36161,b);else{b=f.convert(c.texture.format);var e=f.convert(c.texture.type);b=k(b,e);d?(d=B(c),a.renderbufferStorageMultisample(36161,d,b,c.width,c.height)):a.renderbufferStorage(36161,b,c.width,c.height);}a.bindRenderbuffer(36161,null);}function B(a){return e.isWebGL2&&a.isWebGLMultisampleRenderTarget?Math.min(e.maxSamples,a.samples):0;}var wa=new WeakMap(),G,E="undefined"!==typeof OffscreenCanvas&&null!==new OffscreenCanvas(1,1).getContext("2d"),I=0,H=!1,D=!1;this.allocateTextureUnit=function(){var a=I;a>=e.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+a+" texture units while this GPU supports only "+e.maxTextures);I+=1;return a;};this.resetTextureUnits=function(){I=0;};this.setTexture2D=n;this.setTexture2DArray=function(a,b){var e=d.get(a);0<a.version&&e.__version!==a.version?C(e,a,b):(c.activeTexture(33984+b),c.bindTexture(35866,e.__webglTexture));};this.setTexture3D=function(a,b){var e=d.get(a);0<a.version&&e.__version!==a.version?C(e,a,b):(c.activeTexture(33984+b),c.bindTexture(32879,e.__webglTexture));};this.setTextureCube=z;this.setTextureCubeDynamic=y;this.setupRenderTarget=function(h){var l=d.get(h),p=d.get(h.texture);h.addEventListener("dispose",v);p.__webglTexture=a.createTexture();g.memory.textures++;var t=!0===h.isWebGLRenderTargetCube,r=!0===h.isWebGLMultisampleRenderTarget,x=!0===h.isWebGLMultiviewRenderTarget,y=m(h)||e.isWebGL2;if(t){l.__webglFramebuffer=[];for(var z=0;6>z;z++){l.__webglFramebuffer[z]=a.createFramebuffer();}}else if(l.__webglFramebuffer=a.createFramebuffer(),r){if(e.isWebGL2){l.__webglMultisampledFramebuffer=a.createFramebuffer();l.__webglColorRenderbuffer=a.createRenderbuffer();a.bindRenderbuffer(36161,l.__webglColorRenderbuffer);r=f.convert(h.texture.format);var C=f.convert(h.texture.type);r=k(r,C);C=B(h);a.renderbufferStorageMultisample(36161,C,r,h.width,h.height);a.bindFramebuffer(36160,l.__webglMultisampledFramebuffer);a.framebufferRenderbuffer(36160,36064,36161,l.__webglColorRenderbuffer);a.bindRenderbuffer(36161,null);h.depthBuffer&&(l.__webglDepthRenderbuffer=a.createRenderbuffer(),A(l.__webglDepthRenderbuffer,h,!0));a.bindFramebuffer(36160,null);}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");}else if(x){z=h.width;var P=h.height;r=h.numViews;a.bindFramebuffer(36160,l.__webglFramebuffer);var G=b.get("OVR_multiview2");g.memory.textures+=2;C=a.createTexture();a.bindTexture(35866,C);a.texParameteri(35866,10240,9728);a.texParameteri(35866,10241,9728);a.texImage3D(35866,0,32856,z,P,r,0,6408,5121,null);G.framebufferTextureMultiviewOVR(36160,36064,C,0,0,r);var wa=a.createTexture();a.bindTexture(35866,wa);a.texParameteri(35866,10240,9728);a.texParameteri(35866,10241,9728);a.texImage3D(35866,0,35056,z,P,r,0,34041,34042,null);G.framebufferTextureMultiviewOVR(36160,33306,wa,0,0,r);P=Array(r);for(z=0;z<r;++z){P[z]=a.createFramebuffer(),a.bindFramebuffer(36160,P[z]),a.framebufferTextureLayer(36160,36064,C,0,z);}l.__webglColorTexture=C;l.__webglDepthStencilTexture=wa;l.__webglViewFramebuffers=P;a.bindFramebuffer(36160,null);a.bindTexture(35866,null);}if(t){c.bindTexture(34067,p.__webglTexture);V(34067,h.texture,y);for(z=0;6>z;z++){w(l.__webglFramebuffer[z],h,36064,34069+z);}q(h.texture,y)&&u(34067,h.texture,h.width,h.height);c.bindTexture(34067,null);}else x||(c.bindTexture(3553,p.__webglTexture),V(3553,h.texture,y),w(l.__webglFramebuffer,h,36064,3553),q(h.texture,y)&&u(3553,h.texture,h.width,h.height),c.bindTexture(3553,null));if(h.depthBuffer){l=d.get(h);p=!0===h.isWebGLRenderTargetCube;if(h.depthTexture){if(p)throw Error("target.depthTexture not supported in Cube render targets");if(h&&h.isWebGLRenderTargetCube)throw Error("Depth Texture with cube render targets is not supported");a.bindFramebuffer(36160,l.__webglFramebuffer);if(!h.depthTexture||!h.depthTexture.isDepthTexture)throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");d.get(h.depthTexture).__webglTexture&&h.depthTexture.image.width===h.width&&h.depthTexture.image.height===h.height||(h.depthTexture.image.width=h.width,h.depthTexture.image.height=h.height,h.depthTexture.needsUpdate=!0);n(h.depthTexture,0);l=d.get(h.depthTexture).__webglTexture;if(1026===h.depthTexture.format)a.framebufferTexture2D(36160,36096,3553,l,0);else if(1027===h.depthTexture.format)a.framebufferTexture2D(36160,33306,3553,l,0);else throw Error("Unknown depthTexture format");}else if(p)for(l.__webglDepthbuffer=[],p=0;6>p;p++){a.bindFramebuffer(36160,l.__webglFramebuffer[p]),l.__webglDepthbuffer[p]=a.createRenderbuffer(),A(l.__webglDepthbuffer[p],h);}else a.bindFramebuffer(36160,l.__webglFramebuffer),l.__webglDepthbuffer=a.createRenderbuffer(),A(l.__webglDepthbuffer,h);a.bindFramebuffer(36160,null);}};this.updateRenderTargetMipmap=function(a){var b=a.texture,f=m(a)||e.isWebGL2;if(q(b,f)){f=a.isWebGLRenderTargetCube?34067:3553;var g=d.get(b).__webglTexture;c.bindTexture(f,g);u(f,b,a.width,a.height);c.bindTexture(f,null);}};this.updateMultisampleRenderTarget=function(b){if(b.isWebGLMultisampleRenderTarget)if(e.isWebGL2){var c=d.get(b);a.bindFramebuffer(36008,c.__webglMultisampledFramebuffer);a.bindFramebuffer(36009,c.__webglFramebuffer);c=b.width;var f=b.height,g=16384;b.depthBuffer&&(g|=256);b.stencilBuffer&&(g|=1024);a.blitFramebuffer(0,0,c,f,0,0,c,f,g,9728);}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");};this.safeSetTexture2D=function(a,b){a&&a.isWebGLRenderTarget&&(!1===H&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),H=!0),a=a.texture);n(a,b);};this.safeSetTextureCube=function(a,b){a&&a.isWebGLRenderTargetCube&&(!1===D&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),D=!0),a=a.texture);a&&a.isCubeTexture||Array.isArray(a.image)&&6===a.image.length?z(a,b):y(a,b);};}function Kh(a,b,c){return{convert:function convert(a){if(1E3===a)return 10497;if(1001===a)return 33071;if(1002===a)return 33648;if(1003===a)return 9728;if(1004===a)return 9984;if(1005===a)return 9986;if(1006===a)return 9729;if(1007===a)return 9985;if(1008===a)return 9987;if(1009===a)return 5121;if(1017===a)return 32819;if(1018===a)return 32820;if(1019===a)return 33635;if(1010===a)return 5120;if(1011===a)return 5122;if(1012===a)return 5123;if(1013===a)return 5124;if(1014===a)return 5125;if(1015===a)return 5126;if(1016===a){if(c.isWebGL2)return 5131;var d=b.get("OES_texture_half_float");if(null!==d)return d.HALF_FLOAT_OES;}if(1021===a)return 6406;if(1022===a)return 6407;if(1023===a)return 6408;if(1024===a)return 6409;if(1025===a)return 6410;if(1026===a)return 6402;if(1027===a)return 34041;if(1028===a)return 6403;if(100===a)return 32774;if(101===a)return 32778;if(102===a)return 32779;if(200===a)return 0;if(201===a)return 1;if(202===a)return 768;if(203===a)return 769;if(204===a)return 770;if(205===a)return 771;if(206===a)return 772;if(207===a)return 773;if(208===a)return 774;if(209===a)return 775;if(210===a)return 776;if(33776===a||33777===a||33778===a||33779===a)if(d=b.get("WEBGL_compressed_texture_s3tc"),null!==d){if(33776===a)return d.COMPRESSED_RGB_S3TC_DXT1_EXT;if(33777===a)return d.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(33778===a)return d.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(33779===a)return d.COMPRESSED_RGBA_S3TC_DXT5_EXT;}if(35840===a||35841===a||35842===a||35843===a)if(d=b.get("WEBGL_compressed_texture_pvrtc"),null!==d){if(35840===a)return d.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(35841===a)return d.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(35842===a)return d.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(35843===a)return d.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;}if(36196===a&&(d=b.get("WEBGL_compressed_texture_etc1"),null!==d))return d.COMPRESSED_RGB_ETC1_WEBGL;if(37808===a||37809===a||37810===a||37811===a||37812===a||37813===a||37814===a||37815===a||37816===a||37817===a||37818===a||37819===a||37820===a||37821===a)if(d=b.get("WEBGL_compressed_texture_astc"),null!==d)return a;if(103===a||104===a){if(c.isWebGL2){if(103===a)return 32775;if(104===a)return 32776;}d=b.get("EXT_blend_minmax");if(null!==d){if(103===a)return d.MIN_EXT;if(104===a)return d.MAX_EXT;}}if(1020===a){if(c.isWebGL2)return 34042;d=b.get("WEBGL_depth_texture");if(null!==d)return d.UNSIGNED_INT_24_8_WEBGL;}return 0;}};}function fg(a,b,c,d){la.call(this,a,b,d);this.stencilBuffer=this.depthBuffer=!1;this.numViews=c;}function kk(a,b){function c(a){if(a.isArrayCamera)return a.cameras;q[0]=a;return q;}function d(a){if(void 0===a.isArrayCamera)return!0;a=a.cameras;if(a.length>r)return!1;for(var b=1,c=a.length;b<c;b++){if(a[0].viewport.z!==a[b].viewport.z||a[0].viewport.w!==a[b].viewport.w)return!1;}return!0;}var e=a.extensions,f=a.properties,g,h,l,m,q,u,k,r=0;this.isAvailable=function(){if(void 0===k){var a=e.get("OVR_multiview2");if(k=null!==a&&!1===b.getContextAttributes().antialias)for(r=b.getParameter(a.MAX_VIEWS_OVR),g=new fg(0,0,2),u=new w(),m=[],l=[],q=[],a=0;a<r;a++){m[a]=new U(),l[a]=new Y();}}return k;};this.attachCamera=function(b){if(!1!==d(b)){(h=a.getRenderTarget())?u.set(h.width,h.height):a.getDrawingBufferSize(u);if(b.isArrayCamera){var c=b.cameras[0].viewport;g.setSize(c.z,c.w);g.setNumViews(b.cameras.length);}else g.setSize(u.x,u.y),g.setNumViews(2);a.setRenderTarget(g);}};this.detachCamera=function(c){if(g===a.getRenderTarget()){a.setRenderTarget(h);var d=g,e=d.numViews,l=f.get(d).__webglViewFramebuffers,m=d.width;d=d.height;if(c.isArrayCamera)for(var q=0;q<e;q++){var k=c.cameras[q].viewport,p=k.x,r=k.y,t=p+k.z;k=r+k.w;b.bindFramebuffer(36008,l[q]);b.blitFramebuffer(0,0,m,d,p,r,t,k,16384,9728);}else b.bindFramebuffer(36008,l[0]),b.blitFramebuffer(0,0,m,d,0,0,u.x,u.y,16384,9728);}};this.updateCameraProjectionMatricesUniform=function(a,d){a=c(a);for(var e=0;e<a.length;e++){m[e].copy(a[e].projectionMatrix);}d.setValue(b,"projectionMatrices",m);};this.updateCameraViewMatricesUniform=function(a,d){a=c(a);for(var e=0;e<a.length;e++){m[e].copy(a[e].matrixWorldInverse);}d.setValue(b,"viewMatrices",m);};this.updateObjectMatricesUniforms=function(a,d,e){d=c(d);for(var f=0;f<d.length;f++){m[f].multiplyMatrices(d[f].matrixWorldInverse,a.matrixWorld),l[f].getNormalMatrix(m[f]);}e.setValue(b,"modelViewMatrices",m);e.setValue(b,"normalMatrices",l);};}function Hc(){B.call(this);this.type="Group";}function Jd(a){na.call(this);this.cameras=a||[];}function Lh(a,b,c){Mh.setFromMatrixPosition(b.matrixWorld);Nh.setFromMatrixPosition(c.matrixWorld);var d=Mh.distanceTo(Nh),e=b.projectionMatrix.elements,f=c.projectionMatrix.elements,g=e[14]/(e[10]-1);c=e[14]/(e[10]+1);var h=(e[9]+1)/e[5],l=(e[9]-1)/e[5],m=(e[8]-1)/e[0],q=(f[8]+1)/f[0];e=g*m;f=g*q;q=d/(-m+q);m=q*-m;b.matrixWorld.decompose(a.position,a.quaternion,a.scale);a.translateX(m);a.translateZ(q);a.matrixWorld.compose(a.position,a.quaternion,a.scale);a.matrixWorldInverse.getInverse(a.matrixWorld);b=g+q;g=c+q;a.projectionMatrix.makePerspective(e-m,f+(d-m),h*c/g*b,l*c/g*b,b,g);}function gg(a){function b(){return null!==h&&!0===h.isPresenting;}function c(){if(b()){var c=h.getEyeParameters("left");e=2*c.renderWidth*r;f=c.renderHeight*r;Cb=a.getPixelRatio();a.getSize(C);a.setDrawingBufferSize(e,f,1);y.viewport.set(0,0,e/2,f);V.viewport.set(e/2,0,e/2,f);B.start();g.dispatchEvent({type:"sessionstart"});}else g.enabled&&a.setDrawingBufferSize(C.width,C.height,Cb),B.stop(),g.dispatchEvent({type:"sessionend"});}function d(a,b){null!==b&&4===b.length&&a.set(b[0]*e,b[1]*f,b[2]*e,b[3]*f);}var e,f,g=this,h=null,l=null,m=null,q=[],u=new U(),k=new U(),r=1,p="local-floor";"undefined"!==typeof window&&"VRFrameData"in window&&(l=new window.VRFrameData(),window.addEventListener("vrdisplaypresentchange",c,!1));var v=new U(),x=new ua(),z=new n(),y=new na();y.viewport=new aa();y.layers.enable(1);var V=new na();V.viewport=new aa();V.layers.enable(2);var P=new Jd([y,V]);P.layers.enable(1);P.layers.enable(2);var C=new w(),Cb,A=[];this.enabled=!1;this.getController=function(a){var b=q[a];void 0===b&&(b=new Hc(),b.matrixAutoUpdate=!1,b.visible=!1,q[a]=b);return b;};this.getDevice=function(){return h;};this.setDevice=function(a){void 0!==a&&(h=a);B.setContext(a);};this.setFramebufferScaleFactor=function(a){r=a;};this.setReferenceSpaceType=function(a){p=a;};this.setPoseTarget=function(a){void 0!==a&&(m=a);};this.getCamera=function(a){var c="local-floor"===p?1.6:0;if(!1===b())return a.position.set(0,c,0),a.rotation.set(0,0,0),a;h.depthNear=a.near;h.depthFar=a.far;h.getFrameData(l);if("local-floor"===p){var e=h.stageParameters;e?u.fromArray(e.sittingToStandingTransform):u.makeTranslation(0,c,0);}c=l.pose;e=null!==m?m:a;e.matrix.copy(u);e.matrix.decompose(e.position,e.quaternion,e.scale);null!==c.orientation&&(x.fromArray(c.orientation),e.quaternion.multiply(x));null!==c.position&&(x.setFromRotationMatrix(u),z.fromArray(c.position),z.applyQuaternion(x),e.position.add(z));e.updateMatrixWorld();y.near=a.near;V.near=a.near;y.far=a.far;V.far=a.far;y.matrixWorldInverse.fromArray(l.leftViewMatrix);V.matrixWorldInverse.fromArray(l.rightViewMatrix);k.getInverse(u);"local-floor"===p&&(y.matrixWorldInverse.multiply(k),V.matrixWorldInverse.multiply(k));a=e.parent;null!==a&&(v.getInverse(a.matrixWorld),y.matrixWorldInverse.multiply(v),V.matrixWorldInverse.multiply(v));y.matrixWorld.getInverse(y.matrixWorldInverse);V.matrixWorld.getInverse(V.matrixWorldInverse);y.projectionMatrix.fromArray(l.leftProjectionMatrix);V.projectionMatrix.fromArray(l.rightProjectionMatrix);Lh(P,y,V);a=h.getLayers();a.length&&(a=a[0],d(y.viewport,a.leftBounds),d(V.viewport,a.rightBounds));a:for(a=0;a<q.length;a++){c=q[a];b:{e=a;for(var f=navigator.getGamepads&&navigator.getGamepads(),g=0,r=0,t=f.length;g<t;g++){var n=f[g];if(n&&("Daydream Controller"===n.id||"Gear VR Controller"===n.id||"Oculus Go Controller"===n.id||"OpenVR Gamepad"===n.id||n.id.startsWith("Oculus Touch")||n.id.startsWith("HTC Vive Focus")||n.id.startsWith("Spatial Controller"))){if(r===e){e=n;break b;}r++;}}e=void 0;}if(void 0!==e&&void 0!==e.pose){if(null===e.pose)break a;f=e.pose;!1===f.hasPosition&&c.position.set(.2,-.6,-.05);null!==f.position&&c.position.fromArray(f.position);null!==f.orientation&&c.quaternion.fromArray(f.orientation);c.matrix.compose(c.position,c.quaternion,c.scale);c.matrix.premultiply(u);c.matrix.decompose(c.position,c.quaternion,c.scale);c.matrixWorldNeedsUpdate=!0;c.visible=!0;f="Daydream Controller"===e.id?0:1;void 0===A[a]&&(A[a]=!1);A[a]!==e.buttons[f].pressed&&(A[a]=e.buttons[f].pressed,!0===A[a]?c.dispatchEvent({type:"selectstart"}):(c.dispatchEvent({type:"selectend"}),c.dispatchEvent({type:"select"})));}else c.visible=!1;}return P;};this.getStandingMatrix=function(){return u;};this.isPresenting=b;var B=new Xf();this.setAnimationLoop=function(a){B.setAnimationLoop(a);b()&&B.start();};this.submitFrame=function(){b()&&h.submitFrame();};this.dispose=function(){"undefined"!==typeof window&&window.removeEventListener("vrdisplaypresentchange",c);};this.setFrameOfReferenceType=function(){console.warn("THREE.WebVRManager: setFrameOfReferenceType() has been deprecated.");};}function Oh(a,b){function c(){return null!==l&&null!==m;}function d(a){for(var b=0;b<k.length;b++){r[b]===a.inputSource&&k[b].dispatchEvent({type:a.type});}}function e(){a.setFramebuffer(null);a.setRenderTarget(a.getRenderTarget());y.stop();h.dispatchEvent({type:"sessionend"});}function f(a){m=a;y.setContext(l);y.start();h.dispatchEvent({type:"sessionstart"});}function g(a,b){null===b?a.matrixWorld.copy(a.matrix):a.matrixWorld.multiplyMatrices(b.matrixWorld,a.matrix);a.matrixWorldInverse.getInverse(a.matrixWorld);}var h=this,l=null,m=null,q="local-floor",u=null,k=[],r=[],p=new na();p.layers.enable(1);p.viewport=new aa();var n=new na();n.layers.enable(2);n.viewport=new aa();var x=new Jd([p,n]);x.layers.enable(1);x.layers.enable(2);this.enabled=!1;this.getController=function(a){var b=k[a];void 0===b&&(b=new Hc(),b.matrixAutoUpdate=!1,b.visible=!1,k[a]=b);return b;};this.setFramebufferScaleFactor=function(){};this.setReferenceSpaceType=function(a){q=a;};this.getSession=function(){return l;};this.setSession=function(a){l=a;null!==l&&(l.addEventListener("select",d),l.addEventListener("selectstart",d),l.addEventListener("selectend",d),l.addEventListener("end",e),l.updateRenderState({baseLayer:new XRWebGLLayer(l,b)}),l.requestReferenceSpace(q).then(f),r=l.inputSources,l.addEventListener("inputsourceschange",function(){r=l.inputSources;console.log(r);for(var a=0;a<k.length;a++){k[a].userData.inputSource=r[a];}}));};this.getCamera=function(a){if(c()){var b=a.parent,d=x.cameras;g(x,b);for(var e=0;e<d.length;e++){g(d[e],b);}a.matrixWorld.copy(x.matrixWorld);a=a.children;e=0;for(b=a.length;e<b;e++){a[e].updateMatrixWorld(!0);}Lh(x,p,n);return x;}return a;};this.isPresenting=c;var z=null,y=new Xf();y.setAnimationLoop(function(b,c){u=c.getViewerPose(m);if(null!==u){var d=u.views,e=l.renderState.baseLayer;a.setFramebuffer(e.framebuffer);for(var f=0;f<d.length;f++){var g=d[f],h=e.getViewport(g),q=x.cameras[f];q.matrix.fromArray(g.transform.inverse.matrix).getInverse(q.matrix);q.projectionMatrix.fromArray(g.projectionMatrix);q.viewport.set(h.x,h.y,h.width,h.height);0===f&&x.matrix.copy(q.matrix);}}for(f=0;f<k.length;f++){d=k[f];if(e=r[f])if(e=c.getPose(e.targetRaySpace,m),null!==e){d.matrix.fromArray(e.transform.matrix);d.matrix.decompose(d.position,d.rotation,d.scale);d.visible=!0;continue;}d.visible=!1;}z&&z(b);});this.setAnimationLoop=function(a){z=a;};this.dispose=function(){};this.getStandingMatrix=function(){console.warn("THREE.WebXRManager: getStandingMatrix() is no longer needed.");return new U();};this.getDevice=function(){console.warn("THREE.WebXRManager: getDevice() has been deprecated.");};this.setDevice=function(){console.warn("THREE.WebXRManager: setDevice() has been deprecated.");};this.setFrameOfReferenceType=function(){console.warn("THREE.WebXRManager: setFrameOfReferenceType() has been deprecated.");};this.submitFrame=function(){};}function hg(a){var b;function c(){ra=new aj(J);Ea=new Zi(J,ra,a);!1===Ea.isWebGL2&&(ra.get("WEBGL_depth_texture"),ra.get("OES_texture_float"),ra.get("OES_texture_half_float"),ra.get("OES_texture_half_float_linear"),ra.get("OES_standard_derivatives"),ra.get("OES_element_index_uint"),ra.get("ANGLE_instanced_arrays"));ra.get("OES_texture_float_linear");la=new Kh(J,ra,Ea);ba=new ik(J,ra,la,Ea);ba.scissor(ca.copy(ja).multiplyScalar(fa).floor());ba.viewport(W.copy(ia).multiplyScalar(fa).floor());ea=new dj(J);Y=new Zj();R=new jk(J,ra,ba,Y,Ea,la,ea);pa=new Wi(J);xa=new bj(J,pa,ea);sa=new gj(J,xa,pa,ea);ya=new fj(J);oa=new Yj(F,ra,Ea);va=new ck();ua=new hk();ma=new Xi(F,ba,sa,A);Aa=new Yi(J,ra,ea,Ea);Ba=new cj(J,ra,ea,Ea);ea.programs=oa.programs;F.capabilities=Ea;F.extensions=ra;F.properties=Y;F.renderLists=va;F.state=ba;F.info=ea;}function d(a){a.preventDefault();console.log("THREE.WebGLRenderer: Context Lost.");O=!0;}function e(){console.log("THREE.WebGLRenderer: Context Restored.");O=!1;c();}function f(a){a=a.target;a.removeEventListener("dispose",f);g(a);Y.remove(a);}function g(a){var b=Y.get(a).program;a.program=void 0;void 0!==b&&oa.releaseProgram(b);}function h(a,b){a.render(function(a){F.renderBufferImmediate(a,b);});}function l(a,b,c,d){if(!1!==a.visible){if(a.layers.test(b.layers))if(a.isGroup)c=a.renderOrder;else if(a.isLOD)!0===a.autoUpdate&&a.update(b);else if(a.isLight)D.pushLight(a),a.castShadow&&D.pushShadow(a);else if(a.isSprite){if(!a.frustumCulled||cg.intersectsSprite(a)){d&&Fb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(Id);var e=sa.update(a),f=a.material;f.visible&&G.push(a,e,f,c,Fb.z,null);}}else if(a.isImmediateRenderObject)d&&Fb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(Id),G.push(a,null,a.material,c,Fb.z,null);else if(a.isMesh||a.isLine||a.isPoints)if(a.isSkinnedMesh&&a.skeleton.frame!==ea.render.frame&&(a.skeleton.update(),a.skeleton.frame=ea.render.frame),!a.frustumCulled||cg.intersectsObject(a))if(d&&Fb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(Id),e=sa.update(a),f=a.material,Array.isArray(f))for(var g=e.groups,h=0,m=g.length;h<m;h++){var q=g[h],k=f[q.materialIndex];k&&k.visible&&G.push(a,e,k,c,Fb.z,q);}else f.visible&&G.push(a,e,f,c,Fb.z,null);a=a.children;h=0;for(m=a.length;h<m;h++){l(a[h],b,c,d);}}}function m(a,b,c,d){for(var e=0,f=a.length;e<f;e++){var g=a[e],h=g.object,l=g.geometry,m=void 0===d?g.material:d;g=g.group;if(c.isArrayCamera){if(Pa=c,ka.enabled&&ta.isAvailable())q(h,b,c,l,m,g);else for(var k=c.cameras,u=0,p=k.length;u<p;u++){var r=k[u];h.layers.test(r.layers)&&(ba.viewport(W.copy(r.viewport)),D.setupLights(r),q(h,b,r,l,m,g));}}else Pa=null,q(h,b,c,l,m,g);}}function q(a,c,d,e,f,g){a.onBeforeRender(F,c,d,e,f,g);D=ua.get(c,Pa||d);a.modelViewMatrix.multiplyMatrices(d.matrixWorldInverse,a.matrixWorld);a.normalMatrix.getNormalMatrix(a.modelViewMatrix);if(a.isImmediateRenderObject){ba.setMaterial(f);var l=k(d,c.fog,f,a);bc=b=null;S=!1;h(a,l);}else F.renderBufferDirect(d,c.fog,e,f,a,g);a.onAfterRender(F,c,d,e,f,g);D=ua.get(c,Pa||d);}function u(a,b,c){var d=Y.get(a),e=D.state.lights,h=e.state.version;c=oa.getParameters(a,e.state,D.state.shadowsArray,b,Oa.numPlanes,Oa.numIntersection,c);var l=oa.getProgramCode(a,c),m=d.program,q=!0;if(void 0===m)a.addEventListener("dispose",f);else if(m.code!==l)g(a);else{if(d.lightsStateVersion!==h)d.lightsStateVersion=h;else if(void 0!==c.shaderID)return;q=!1;}q&&(c.shaderID?(l=db[c.shaderID],d.shader={name:a.type,uniforms:Yb(l.uniforms),vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}):d.shader={name:a.type,uniforms:a.uniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader},a.onBeforeCompile(d.shader,F),l=oa.getProgramCode(a,c),m=oa.acquireProgram(a,d.shader,c,l),d.program=m,a.program=m);c=m.getAttributes();if(a.morphTargets)for(l=a.numSupportedMorphTargets=0;l<F.maxMorphTargets;l++){0<=c["morphTarget"+l]&&a.numSupportedMorphTargets++;}if(a.morphNormals)for(l=a.numSupportedMorphNormals=0;l<F.maxMorphNormals;l++){0<=c["morphNormal"+l]&&a.numSupportedMorphNormals++;}c=d.shader.uniforms;if(!a.isShaderMaterial&&!a.isRawShaderMaterial||!0===a.clipping)d.numClippingPlanes=Oa.numPlanes,d.numIntersection=Oa.numIntersection,c.clippingPlanes=Oa.uniform;d.fog=b;d.needsLights=a.isMeshLambertMaterial||a.isMeshPhongMaterial||a.isMeshStandardMaterial||a.isShadowMaterial||a.isShaderMaterial&&!0===a.lights;d.lightsStateVersion=h;d.needsLights&&(c.ambientLightColor.value=e.state.ambient,c.lightProbe.value=e.state.probe,c.directionalLights.value=e.state.directional,c.spotLights.value=e.state.spot,c.rectAreaLights.value=e.state.rectArea,c.pointLights.value=e.state.point,c.hemisphereLights.value=e.state.hemi,c.directionalShadowMap.value=e.state.directionalShadowMap,c.directionalShadowMatrix.value=e.state.directionalShadowMatrix,c.spotShadowMap.value=e.state.spotShadowMap,c.spotShadowMatrix.value=e.state.spotShadowMatrix,c.pointShadowMap.value=e.state.pointShadowMap,c.pointShadowMatrix.value=e.state.pointShadowMatrix);a=d.program.getUniforms();a=Bb.seqWithValue(a.seq,c);d.uniformsList=a;}function k(a,b,c,d){R.resetTextureUnits();var e=Y.get(c),f=D.state.lights;He&&(qa||a!==Q)&&Oa.setState(c.clippingPlanes,c.clipIntersection,c.clipShadows,a,e,a===Q&&c.id===ha);!1===c.needsUpdate&&(void 0===e.program?c.needsUpdate=!0:c.fog&&e.fog!==b?c.needsUpdate=!0:e.needsLights&&e.lightsStateVersion!==f.state.version?c.needsUpdate=!0:void 0===e.numClippingPlanes||e.numClippingPlanes===Oa.numPlanes&&e.numIntersection===Oa.numIntersection||(c.needsUpdate=!0));c.needsUpdate&&(u(c,b,d),c.needsUpdate=!1);var g=!1,h=!1,l=!1;f=e.program;var m=f.getUniforms(),q=e.shader.uniforms;ba.useProgram(f.program)&&(l=h=g=!0);c.id!==ha&&(ha=c.id,h=!0);if(g||Q!==a){0<f.numMultiviewViews?ta.updateCameraProjectionMatricesUniform(a,m):m.setValue(J,"projectionMatrix",a.projectionMatrix);Ea.logarithmicDepthBuffer&&m.setValue(J,"logDepthBufFC",2/(Math.log(a.far+1)/Math.LN2));Q!==a&&(Q=a,l=h=!0);if(c.isShaderMaterial||c.isMeshPhongMaterial||c.isMeshStandardMaterial||c.envMap)g=m.map.cameraPosition,void 0!==g&&g.setValue(J,Fb.setFromMatrixPosition(a.matrixWorld));if(c.isMeshPhongMaterial||c.isMeshLambertMaterial||c.isMeshBasicMaterial||c.isMeshStandardMaterial||c.isShaderMaterial||c.skinning)0<f.numMultiviewViews?ta.updateCameraViewMatricesUniform(a,m):m.setValue(J,"viewMatrix",a.matrixWorldInverse);}if(c.skinning&&(m.setOptional(J,d,"bindMatrix"),m.setOptional(J,d,"bindMatrixInverse"),g=d.skeleton)){var k=g.bones;if(Ea.floatVertexTextures){if(void 0===g.boneTexture){k=Math.sqrt(4*k.length);k=L.ceilPowerOfTwo(k);k=Math.max(k,4);var t=new Float32Array(k*k*4);t.set(g.boneMatrices);var n=new Zb(t,k,k,1023,1015);g.boneMatrices=t;g.boneTexture=n;g.boneTextureSize=k;}m.setValue(J,"boneTexture",g.boneTexture,R);m.setValue(J,"boneTextureSize",g.boneTextureSize);}else m.setOptional(J,g,"boneMatrices");}if(h||e.receiveShadow!==d.receiveShadow)e.receiveShadow=d.receiveShadow,m.setValue(J,"receiveShadow",d.receiveShadow);h&&(m.setValue(J,"toneMappingExposure",F.toneMappingExposure),m.setValue(J,"toneMappingWhitePoint",F.toneMappingWhitePoint),e.needsLights&&(h=l,q.ambientLightColor.needsUpdate=h,q.lightProbe.needsUpdate=h,q.directionalLights.needsUpdate=h,q.pointLights.needsUpdate=h,q.spotLights.needsUpdate=h,q.rectAreaLights.needsUpdate=h,q.hemisphereLights.needsUpdate=h),b&&c.fog&&(q.fogColor.value.copy(b.color),b.isFog?(q.fogNear.value=b.near,q.fogFar.value=b.far):b.isFogExp2&&(q.fogDensity.value=b.density)),c.isMeshBasicMaterial?r(q,c):c.isMeshLambertMaterial?(r(q,c),c.emissiveMap&&(q.emissiveMap.value=c.emissiveMap)):c.isMeshPhongMaterial?(r(q,c),c.isMeshToonMaterial?(p(q,c),c.gradientMap&&(q.gradientMap.value=c.gradientMap)):p(q,c)):c.isMeshStandardMaterial?(r(q,c),c.isMeshPhysicalMaterial?(v(q,c),q.reflectivity.value=c.reflectivity,q.clearcoat.value=c.clearcoat,q.clearcoatRoughness.value=c.clearcoatRoughness,c.sheen&&q.sheen.value.copy(c.sheen),c.clearcoatNormalMap&&(q.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),q.clearcoatNormalMap.value=c.clearcoatNormalMap,1===c.side&&q.clearcoatNormalScale.value.negate()),q.transparency.value=c.transparency):v(q,c)):c.isMeshMatcapMaterial?(r(q,c),c.matcap&&(q.matcap.value=c.matcap),c.bumpMap&&(q.bumpMap.value=c.bumpMap,q.bumpScale.value=c.bumpScale,1===c.side&&(q.bumpScale.value*=-1)),c.normalMap&&(q.normalMap.value=c.normalMap,q.normalScale.value.copy(c.normalScale),1===c.side&&q.normalScale.value.negate()),c.displacementMap&&(q.displacementMap.value=c.displacementMap,q.displacementScale.value=c.displacementScale,q.displacementBias.value=c.displacementBias)):c.isMeshDepthMaterial?(r(q,c),c.displacementMap&&(q.displacementMap.value=c.displacementMap,q.displacementScale.value=c.displacementScale,q.displacementBias.value=c.displacementBias)):c.isMeshDistanceMaterial?(r(q,c),c.displacementMap&&(q.displacementMap.value=c.displacementMap,q.displacementScale.value=c.displacementScale,q.displacementBias.value=c.displacementBias),q.referencePosition.value.copy(c.referencePosition),q.nearDistance.value=c.nearDistance,q.farDistance.value=c.farDistance):c.isMeshNormalMaterial?(r(q,c),c.bumpMap&&(q.bumpMap.value=c.bumpMap,q.bumpScale.value=c.bumpScale,1===c.side&&(q.bumpScale.value*=-1)),c.normalMap&&(q.normalMap.value=c.normalMap,q.normalScale.value.copy(c.normalScale),1===c.side&&q.normalScale.value.negate()),c.displacementMap&&(q.displacementMap.value=c.displacementMap,q.displacementScale.value=c.displacementScale,q.displacementBias.value=c.displacementBias)):c.isLineBasicMaterial?(q.diffuse.value.copy(c.color),q.opacity.value=c.opacity,c.isLineDashedMaterial&&(q.dashSize.value=c.dashSize,q.totalSize.value=c.dashSize+c.gapSize,q.scale.value=c.scale)):c.isPointsMaterial?(q.diffuse.value.copy(c.color),q.opacity.value=c.opacity,q.size.value=c.size*fa,q.scale.value=.5*Z,q.map.value=c.map,null!==c.map&&(!0===c.map.matrixAutoUpdate&&c.map.updateMatrix(),q.uvTransform.value.copy(c.map.matrix))):c.isSpriteMaterial?(q.diffuse.value.copy(c.color),q.opacity.value=c.opacity,q.rotation.value=c.rotation,q.map.value=c.map,null!==c.map&&(!0===c.map.matrixAutoUpdate&&c.map.updateMatrix(),q.uvTransform.value.copy(c.map.matrix))):c.isShadowMaterial&&(q.color.value.copy(c.color),q.opacity.value=c.opacity),void 0!==q.ltc_1&&(q.ltc_1.value=I.LTC_1),void 0!==q.ltc_2&&(q.ltc_2.value=I.LTC_2),Bb.upload(J,e.uniformsList,q,R));c.isShaderMaterial&&!0===c.uniformsNeedUpdate&&(Bb.upload(J,e.uniformsList,q,R),c.uniformsNeedUpdate=!1);c.isSpriteMaterial&&m.setValue(J,"center",d.center);0<f.numMultiviewViews?ta.updateObjectMatricesUniforms(d,a,m):(m.setValue(J,"modelViewMatrix",d.modelViewMatrix),m.setValue(J,"normalMatrix",d.normalMatrix));m.setValue(J,"modelMatrix",d.matrixWorld);return f;}function r(a,b){a.opacity.value=b.opacity;b.color&&a.diffuse.value.copy(b.color);b.emissive&&a.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity);b.map&&(a.map.value=b.map);b.alphaMap&&(a.alphaMap.value=b.alphaMap);b.specularMap&&(a.specularMap.value=b.specularMap);b.envMap&&(a.envMap.value=b.envMap,a.flipEnvMap.value=b.envMap.isCubeTexture?-1:1,a.reflectivity.value=b.reflectivity,a.refractionRatio.value=b.refractionRatio,a.maxMipLevel.value=Y.get(b.envMap).__maxMipLevel);b.lightMap&&(a.lightMap.value=b.lightMap,a.lightMapIntensity.value=b.lightMapIntensity);b.aoMap&&(a.aoMap.value=b.aoMap,a.aoMapIntensity.value=b.aoMapIntensity);if(b.map)var c=b.map;else b.specularMap?c=b.specularMap:b.displacementMap?c=b.displacementMap:b.normalMap?c=b.normalMap:b.bumpMap?c=b.bumpMap:b.roughnessMap?c=b.roughnessMap:b.metalnessMap?c=b.metalnessMap:b.alphaMap?c=b.alphaMap:b.emissiveMap&&(c=b.emissiveMap);void 0!==c&&(c.isWebGLRenderTarget&&(c=c.texture),!0===c.matrixAutoUpdate&&c.updateMatrix(),a.uvTransform.value.copy(c.matrix));}function p(a,b){a.specular.value.copy(b.specular);a.shininess.value=Math.max(b.shininess,1E-4);b.emissiveMap&&(a.emissiveMap.value=b.emissiveMap);b.bumpMap&&(a.bumpMap.value=b.bumpMap,a.bumpScale.value=b.bumpScale,1===b.side&&(a.bumpScale.value*=-1));b.normalMap&&(a.normalMap.value=b.normalMap,a.normalScale.value.copy(b.normalScale),1===b.side&&a.normalScale.value.negate());b.displacementMap&&(a.displacementMap.value=b.displacementMap,a.displacementScale.value=b.displacementScale,a.displacementBias.value=b.displacementBias);}function v(a,b){a.roughness.value=b.roughness;a.metalness.value=b.metalness;b.roughnessMap&&(a.roughnessMap.value=b.roughnessMap);b.metalnessMap&&(a.metalnessMap.value=b.metalnessMap);b.emissiveMap&&(a.emissiveMap.value=b.emissiveMap);b.bumpMap&&(a.bumpMap.value=b.bumpMap,a.bumpScale.value=b.bumpScale,1===b.side&&(a.bumpScale.value*=-1));b.normalMap&&(a.normalMap.value=b.normalMap,a.normalScale.value.copy(b.normalScale),1===b.side&&a.normalScale.value.negate());b.displacementMap&&(a.displacementMap.value=b.displacementMap,a.displacementScale.value=b.displacementScale,a.displacementBias.value=b.displacementBias);b.envMap&&(a.envMapIntensity.value=b.envMapIntensity);}a=a||{};var x=void 0!==a.canvas?a.canvas:document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),z=void 0!==a.context?a.context:null,y=void 0!==a.alpha?a.alpha:!1,V=void 0!==a.depth?a.depth:!0,P=void 0!==a.stencil?a.stencil:!0,C=void 0!==a.antialias?a.antialias:!1,A=void 0!==a.premultipliedAlpha?a.premultipliedAlpha:!0,B=void 0!==a.preserveDrawingBuffer?a.preserveDrawingBuffer:!1,E=void 0!==a.powerPreference?a.powerPreference:"default",H=void 0!==a.failIfMajorPerformanceCaveat?a.failIfMajorPerformanceCaveat:!1,G=null,D=null;this.domElement=x;this.debug={checkShaderErrors:!0};this.sortObjects=this.autoClearStencil=this.autoClearDepth=this.autoClearColor=this.autoClear=!0;this.clippingPlanes=[];this.localClippingEnabled=!1;this.gammaFactor=2;this.physicallyCorrectLights=this.gammaOutput=this.gammaInput=!1;this.toneMappingWhitePoint=this.toneMappingExposure=this.toneMapping=1;this.maxMorphTargets=8;this.maxMorphNormals=4;var F=this,O=!1,M=null,T=0,X=0,N=null,ac=null,ha=-1;var bc=b=null;var S=!1;var Q=null,Pa=null,W=new aa(),ca=new aa(),da=null,K=x.width,Z=x.height,fa=1,ia=new aa(0,0,K,Z),ja=new aa(0,0,K,Z),na=!1,cg=new Ed(),Oa=new $i(),He=!1,qa=!1,Id=new U(),Fb=new n();try{y={alpha:y,depth:V,stencil:P,antialias:C,premultipliedAlpha:A,preserveDrawingBuffer:B,powerPreference:E,failIfMajorPerformanceCaveat:H,xrCompatible:!0};x.addEventListener("webglcontextlost",d,!1);x.addEventListener("webglcontextrestored",e,!1);var J=z||x.getContext("webgl",y)||x.getContext("experimental-webgl",y);if(null===J){if(null!==x.getContext("webgl"))throw Error("Error creating WebGL context with your selected attributes.");throw Error("Error creating WebGL context.");}void 0===J.getShaderPrecisionFormat&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1};});}catch(Ph){throw console.error("THREE.WebGLRenderer: "+Ph.message),Ph;}var ra,Ea,ba,ea,Y,R,pa,xa,sa,oa,va,ua,ma,ya,Aa,Ba,la;c();var ka="undefined"!==typeof navigator&&"xr"in navigator&&"supportsSession"in navigator.xr?new Oh(F,J):new gg(F);this.vr=ka;var ta=new kk(F,J),Da=new Jh(F,sa,Ea.maxTextureSize);this.shadowMap=Da;this.getContext=function(){return J;};this.getContextAttributes=function(){return J.getContextAttributes();};this.forceContextLoss=function(){var a=ra.get("WEBGL_lose_context");a&&a.loseContext();};this.forceContextRestore=function(){var a=ra.get("WEBGL_lose_context");a&&a.restoreContext();};this.getPixelRatio=function(){return fa;};this.setPixelRatio=function(a){void 0!==a&&(fa=a,this.setSize(K,Z,!1));};this.getSize=function(a){void 0===a&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),a=new w());return a.set(K,Z);};this.setSize=function(a,b,c){ka.isPresenting()?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(K=a,Z=b,x.width=Math.floor(a*fa),x.height=Math.floor(b*fa),!1!==c&&(x.style.width=a+"px",x.style.height=b+"px"),this.setViewport(0,0,a,b));};this.getDrawingBufferSize=function(a){void 0===a&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),a=new w());return a.set(K*fa,Z*fa).floor();};this.setDrawingBufferSize=function(a,b,c){K=a;Z=b;fa=c;x.width=Math.floor(a*c);x.height=Math.floor(b*c);this.setViewport(0,0,a,b);};this.getCurrentViewport=function(a){void 0===a&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),a=new aa());return a.copy(W);};this.getViewport=function(a){return a.copy(ia);};this.setViewport=function(a,b,c,d){a.isVector4?ia.set(a.x,a.y,a.z,a.w):ia.set(a,b,c,d);ba.viewport(W.copy(ia).multiplyScalar(fa).floor());};this.getScissor=function(a){return a.copy(ja);};this.setScissor=function(a,b,c,d){a.isVector4?ja.set(a.x,a.y,a.z,a.w):ja.set(a,b,c,d);ba.scissor(ca.copy(ja).multiplyScalar(fa).floor());};this.getScissorTest=function(){return na;};this.setScissorTest=function(a){ba.setScissorTest(na=a);};this.getClearColor=function(){return ma.getClearColor();};this.setClearColor=function(){ma.setClearColor.apply(ma,arguments);};this.getClearAlpha=function(){return ma.getClearAlpha();};this.setClearAlpha=function(){ma.setClearAlpha.apply(ma,arguments);};this.clear=function(a,b,c){var d=0;if(void 0===a||a)d|=16384;if(void 0===b||b)d|=256;if(void 0===c||c)d|=1024;J.clear(d);};this.clearColor=function(){this.clear(!0,!1,!1);};this.clearDepth=function(){this.clear(!1,!0,!1);};this.clearStencil=function(){this.clear(!1,!1,!0);};this.dispose=function(){x.removeEventListener("webglcontextlost",d,!1);x.removeEventListener("webglcontextrestored",e,!1);va.dispose();ua.dispose();Y.dispose();sa.dispose();ka.dispose();za.stop();};this.renderBufferImmediate=function(a,b){ba.initAttributes();var c=Y.get(a);a.hasPositions&&!c.position&&(c.position=J.createBuffer());a.hasNormals&&!c.normal&&(c.normal=J.createBuffer());a.hasUvs&&!c.uv&&(c.uv=J.createBuffer());a.hasColors&&!c.color&&(c.color=J.createBuffer());b=b.getAttributes();a.hasPositions&&(J.bindBuffer(34962,c.position),J.bufferData(34962,a.positionArray,35048),ba.enableAttribute(b.position),J.vertexAttribPointer(b.position,3,5126,!1,0,0));a.hasNormals&&(J.bindBuffer(34962,c.normal),J.bufferData(34962,a.normalArray,35048),ba.enableAttribute(b.normal),J.vertexAttribPointer(b.normal,3,5126,!1,0,0));a.hasUvs&&(J.bindBuffer(34962,c.uv),J.bufferData(34962,a.uvArray,35048),ba.enableAttribute(b.uv),J.vertexAttribPointer(b.uv,2,5126,!1,0,0));a.hasColors&&(J.bindBuffer(34962,c.color),J.bufferData(34962,a.colorArray,35048),ba.enableAttribute(b.color),J.vertexAttribPointer(b.color,3,5126,!1,0,0));ba.disableUnusedAttributes();J.drawArrays(4,0,a.count);a.count=0;};this.renderBufferDirect=function(a,c,d,e,f,g){var h=f.isMesh&&0>f.matrixWorld.determinant();ba.setMaterial(e,h);var l=k(a,c,e,f),m=!1;if(b!==d.id||bc!==l.id||S!==(!0===e.wireframe))b=d.id,bc=l.id,S=!0===e.wireframe,m=!0;f.morphTargetInfluences&&(ya.update(f,d,e,l),m=!0);h=d.index;var q=d.attributes.position;c=1;!0===e.wireframe&&(h=xa.getWireframeAttribute(d),c=2);a=Aa;if(null!==h){var u=pa.get(h);a=Ba;a.setIndex(u);}if(m){if(!1!==Ea.isWebGL2||!f.isInstancedMesh&&!d.isInstancedBufferGeometry||null!==ra.get("ANGLE_instanced_arrays")){ba.initAttributes();m=d.attributes;l=l.getAttributes();var r=e.defaultAttributeValues;for(w in l){var p=l[w];if(0<=p){var t=m[w];if(void 0!==t){var n=t.normalized,v=t.itemSize,x=pa.get(t);if(void 0!==x){var y=x.buffer,z=x.type;x=x.bytesPerElement;if(t.isInterleavedBufferAttribute){var C=t.data,V=C.stride;t=t.offset;C&&C.isInstancedInterleavedBuffer?(ba.enableAttributeAndDivisor(p,C.meshPerAttribute),void 0===d.maxInstancedCount&&(d.maxInstancedCount=C.meshPerAttribute*C.count)):ba.enableAttribute(p);J.bindBuffer(34962,y);J.vertexAttribPointer(p,v,z,n,V*x,t*x);}else t.isInstancedBufferAttribute?(ba.enableAttributeAndDivisor(p,t.meshPerAttribute),void 0===d.maxInstancedCount&&(d.maxInstancedCount=t.meshPerAttribute*t.count)):ba.enableAttribute(p),J.bindBuffer(34962,y),J.vertexAttribPointer(p,v,z,n,0,0);}}else if("instanceMatrix"===w)x=pa.get(f.instanceMatrix),void 0!==x&&(y=x.buffer,z=x.type,ba.enableAttributeAndDivisor(p+0,1),ba.enableAttributeAndDivisor(p+1,1),ba.enableAttributeAndDivisor(p+2,1),ba.enableAttributeAndDivisor(p+3,1),J.bindBuffer(34962,y),J.vertexAttribPointer(p+0,4,z,!1,64,0),J.vertexAttribPointer(p+1,4,z,!1,64,16),J.vertexAttribPointer(p+2,4,z,!1,64,32),J.vertexAttribPointer(p+3,4,z,!1,64,48));else if(void 0!==r&&(n=r[w],void 0!==n))switch(n.length){case 2:J.vertexAttrib2fv(p,n);break;case 3:J.vertexAttrib3fv(p,n);break;case 4:J.vertexAttrib4fv(p,n);break;default:J.vertexAttrib1fv(p,n);}}}ba.disableUnusedAttributes();}null!==h&&J.bindBuffer(34963,u.buffer);}u=Infinity;null!==h?u=h.count:void 0!==q&&(u=q.count);h=d.drawRange.start*c;q=null!==g?g.start*c:0;var w=Math.max(h,q);g=Math.max(0,Math.min(u,h+d.drawRange.count*c,q+(null!==g?g.count*c:Infinity))-1-w+1);if(0!==g){if(f.isMesh){if(!0===e.wireframe)ba.setLineWidth(e.wireframeLinewidth*(null===N?fa:1)),a.setMode(1);else switch(f.drawMode){case 0:a.setMode(4);break;case 1:a.setMode(5);break;case 2:a.setMode(6);}}else f.isLine?(e=e.linewidth,void 0===e&&(e=1),ba.setLineWidth(e*(null===N?fa:1)),f.isLineSegments?a.setMode(1):f.isLineLoop?a.setMode(2):a.setMode(3)):f.isPoints?a.setMode(0):f.isSprite&&a.setMode(4);f.isInstancedMesh?a.renderInstances(d,w,g,f.count):d.isInstancedBufferGeometry?a.renderInstances(d,w,g,d.maxInstancedCount):a.render(w,g);}};this.compile=function(a,b){D=ua.get(a,b);D.init();a.traverse(function(a){a.isLight&&(D.pushLight(a),a.castShadow&&D.pushShadow(a));});D.setupLights(b);a.traverse(function(b){if(b.material)if(Array.isArray(b.material))for(var c=0;c<b.material.length;c++){u(b.material[c],a.fog,b);}else u(b.material,a.fog,b);});};var Ca=null,za=new Xf();za.setAnimationLoop(function(a){ka.isPresenting()||Ca&&Ca(a);});"undefined"!==typeof window&&za.setContext(window);this.setAnimationLoop=function(a){Ca=a;ka.setAnimationLoop(a);za.start();};this.render=function(a,c,d,e){if(void 0!==d){console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead.");var f=d;}if(void 0!==e){console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead.");var g=e;}c&&c.isCamera?O||(bc=b=null,S=!1,ha=-1,Q=null,!0===a.autoUpdate&&a.updateMatrixWorld(),null===c.parent&&c.updateMatrixWorld(),ka.enabled&&(c=ka.getCamera(c)),D=ua.get(a,c),D.init(),a.onBeforeRender(F,a,c,f||N),Id.multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse),cg.setFromMatrix(Id),qa=this.localClippingEnabled,He=Oa.init(this.clippingPlanes,qa,c),G=va.get(a,c),G.init(),l(a,c,0,F.sortObjects),!0===F.sortObjects&&G.sort(),He&&Oa.beginShadows(),Da.render(D.state.shadowsArray,a,c),D.setupLights(c),He&&Oa.endShadows(),this.info.autoReset&&this.info.reset(),void 0!==f&&this.setRenderTarget(f),ka.enabled&&ta.isAvailable()&&ta.attachCamera(c),ma.render(G,a,c,g),d=G.opaque,e=G.transparent,a.overrideMaterial?(f=a.overrideMaterial,d.length&&m(d,a,c,f),e.length&&m(e,a,c,f)):(d.length&&m(d,a,c),e.length&&m(e,a,c)),a.onAfterRender(F,a,c),null!==N&&(R.updateRenderTargetMipmap(N),R.updateMultisampleRenderTarget(N)),ba.buffers.depth.setTest(!0),ba.buffers.depth.setMask(!0),ba.buffers.color.setMask(!0),ba.setPolygonOffset(!1),ka.enabled&&(ta.isAvailable()&&ta.detachCamera(c),ka.submitFrame()),D=G=null):console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");};this.setFramebuffer=function(a){M!==a&&J.bindFramebuffer(36160,a);M=a;};this.getActiveCubeFace=function(){return T;};this.getActiveMipmapLevel=function(){return X;};this.getRenderTarget=function(){return N;};this.setRenderTarget=function(a,b,c){N=a;T=b;X=c;a&&void 0===Y.get(a).__webglFramebuffer&&R.setupRenderTarget(a);var d=M,e=!1;a?(d=Y.get(a).__webglFramebuffer,a.isWebGLRenderTargetCube?(d=d[b||0],e=!0):d=a.isWebGLMultisampleRenderTarget?Y.get(a).__webglMultisampledFramebuffer:d,W.copy(a.viewport),ca.copy(a.scissor),da=a.scissorTest):(W.copy(ia).multiplyScalar(fa).floor(),ca.copy(ja).multiplyScalar(fa).floor(),da=na);ac!==d&&(J.bindFramebuffer(36160,d),ac=d);ba.viewport(W);ba.scissor(ca);ba.setScissorTest(da);e&&(a=Y.get(a.texture),J.framebufferTexture2D(36160,36064,34069+(b||0),a.__webglTexture,c||0));};this.readRenderTargetPixels=function(a,b,c,d,e,f,g){if(a&&a.isWebGLRenderTarget){var h=Y.get(a).__webglFramebuffer;a.isWebGLRenderTargetCube&&void 0!==g&&(h=h[g]);if(h){g=!1;h!==ac&&(J.bindFramebuffer(36160,h),g=!0);try{var l=a.texture,m=l.format,q=l.type;1023!==m&&la.convert(m)!==J.getParameter(35739)?console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."):1009===q||la.convert(q)===J.getParameter(35738)||1015===q&&(Ea.isWebGL2||ra.get("OES_texture_float")||ra.get("WEBGL_color_buffer_float"))||1016===q&&(Ea.isWebGL2?ra.get("EXT_color_buffer_float"):ra.get("EXT_color_buffer_half_float"))?36053===J.checkFramebufferStatus(36160)?0<=b&&b<=a.width-d&&0<=c&&c<=a.height-e&&J.readPixels(b,c,d,e,la.convert(m),la.convert(q),f):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete."):console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");}finally{g&&J.bindFramebuffer(36160,ac);}}}else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");};this.copyFramebufferToTexture=function(a,b,c){var d=b.image.width,e=b.image.height,f=la.convert(b.format);R.setTexture2D(b,0);J.copyTexImage2D(3553,c||0,f,a.x,a.y,d,e,0);};this.copyTextureToTexture=function(a,b,c,d){var e=b.image.width,f=b.image.height,g=la.convert(c.format),h=la.convert(c.type);R.setTexture2D(c,0);b.isDataTexture?J.texSubImage2D(3553,d||0,a.x,a.y,e,f,g,h,b.image.data):J.texSubImage2D(3553,d||0,a.x,a.y,g,h,b.image);};"undefined"!==typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}));}function Ie(a,b){this.name="";this.color=new H(a);this.density=void 0!==b?b:2.5E-4;}function Je(a,b,c){this.name="";this.color=new H(a);this.near=void 0!==b?b:1;this.far=void 0!==c?c:1E3;}function Gb(a,b){this.array=a;this.stride=b;this.count=void 0!==a?a.length/b:0;this.dynamic=!1;this.updateRange={offset:0,count:-1};this.version=0;}function Kd(a,b,c,d){this.data=a;this.itemSize=b;this.offset=c;this.normalized=!0===d;}function Hb(a){M.call(this);this.type="SpriteMaterial";this.color=new H(16777215);this.map=null;this.rotation=0;this.transparent=this.sizeAttenuation=!0;this.setValues(a);}function Ld(a){B.call(this);this.type="Sprite";if(void 0===Ic){Ic=new E();var b=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]);b=new Gb(b,5);Ic.setIndex([0,1,2,0,2,3]);Ic.addAttribute("position",new Kd(b,3,0,!1));Ic.addAttribute("uv",new Kd(b,2,3,!1));}this.geometry=Ic;this.material=void 0!==a?a:new Hb();this.center=new w(.5,.5);}function Ke(a,b,c,d,e,f){Jc.subVectors(a,c).addScalar(.5).multiply(d);void 0!==e?(Md.x=f*Jc.x-e*Jc.y,Md.y=e*Jc.x+f*Jc.y):Md.copy(Jc);a.copy(b);a.x+=Md.x;a.y+=Md.y;a.applyMatrix4(Qh);}function Nd(){B.call(this);this.type="LOD";Object.defineProperties(this,{levels:{enumerable:!0,value:[]}});this.autoUpdate=!0;}function Od(a,b){a&&a.isGeometry&&console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");ja.call(this,a,b);this.type="SkinnedMesh";this.bindMode="attached";this.bindMatrix=new U();this.bindMatrixInverse=new U();}function Le(a,b){a=a||[];this.bones=a.slice(0);this.boneMatrices=new Float32Array(16*this.bones.length);this.frame=-1;if(void 0===b)this.calculateInverses();else if(this.bones.length===b.length)this.boneInverses=b.slice(0);else for(console.warn("THREE.Skeleton boneInverses is the wrong length."),this.boneInverses=[],a=0,b=this.bones.length;a<b;a++){this.boneInverses.push(new U());}}function ig(){B.call(this);this.type="Bone";}function jg(a,b,c){ja.call(this,a,b);this.instanceMatrix=new O(new Float32Array(16*c),16);this.count=c;}function Q(a){M.call(this);this.type="LineBasicMaterial";this.color=new H(16777215);this.linewidth=1;this.linejoin=this.linecap="round";this.setValues(a);}function xa(a,b,c){1===c&&console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead.");B.call(this);this.type="Line";this.geometry=void 0!==a?a:new E();this.material=void 0!==b?b:new Q({color:16777215*Math.random()});}function ca(a,b){xa.call(this,a,b);this.type="LineSegments";}function Me(a,b){xa.call(this,a,b);this.type="LineLoop";}function Qa(a){M.call(this);this.type="PointsMaterial";this.color=new H(16777215);this.map=null;this.size=1;this.sizeAttenuation=!0;this.morphTargets=!1;this.setValues(a);}function Kc(a,b){B.call(this);this.type="Points";this.geometry=void 0!==a?a:new E();this.material=void 0!==b?b:new Qa({color:16777215*Math.random()});this.updateMorphTargets();}function kg(a,b,c,d,e,f,g){var h=lg.distanceSqToPoint(a);h<c&&(c=new n(),lg.closestPointToPoint(a,c),c.applyMatrix4(d),a=e.ray.origin.distanceTo(c),a<e.near||a>e.far||f.push({distance:a,distanceToRay:Math.sqrt(h),point:c,index:b,face:null,object:g}));}function mg(a,b,c,d,e,f,g,h,l){W.call(this,a,b,c,d,e,f,g,h,l);this.format=void 0!==g?g:1022;this.minFilter=void 0!==f?f:1006;this.magFilter=void 0!==e?e:1006;this.generateMipmaps=!1;}function Lc(a,b,c,d,e,f,g,h,l,m,q,k){W.call(this,null,f,g,h,l,m,d,e,q,k);this.image={width:b,height:c};this.mipmaps=a;this.generateMipmaps=this.flipY=!1;}function Pd(a,b,c,d,e,f,g,h,l){W.call(this,a,b,c,d,e,f,g,h,l);this.needsUpdate=!0;}function Qd(a,b,c,d,e,f,g,h,l,m){m=void 0!==m?m:1026;if(1026!==m&&1027!==m)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");void 0===c&&1026===m&&(c=1012);void 0===c&&1027===m&&(c=1020);W.call(this,null,d,e,f,g,h,m,c,l);this.image={width:a,height:b};this.magFilter=void 0!==g?g:1003;this.minFilter=void 0!==h?h:1003;this.generateMipmaps=this.flipY=!1;}function Mc(a){E.call(this);this.type="WireframeGeometry";var b=[],c,d,e,f=[0,0],g={},h=["a","b","c"];if(a&&a.isGeometry){var l=a.faces;var m=0;for(d=l.length;m<d;m++){var q=l[m];for(c=0;3>c;c++){var k=q[h[c]];var t=q[h[(c+1)%3]];f[0]=Math.min(k,t);f[1]=Math.max(k,t);k=f[0]+","+f[1];void 0===g[k]&&(g[k]={index1:f[0],index2:f[1]});}}for(k in g){m=g[k],h=a.vertices[m.index1],b.push(h.x,h.y,h.z),h=a.vertices[m.index2],b.push(h.x,h.y,h.z);}}else if(a&&a.isBufferGeometry)if(h=new n(),null!==a.index){l=a.attributes.position;q=a.index;var r=a.groups;0===r.length&&(r=[{start:0,count:q.count,materialIndex:0}]);a=0;for(e=r.length;a<e;++a){for(m=r[a],c=m.start,d=m.count,m=c,d=c+d;m<d;m+=3){for(c=0;3>c;c++){k=q.getX(m+c),t=q.getX(m+(c+1)%3),f[0]=Math.min(k,t),f[1]=Math.max(k,t),k=f[0]+","+f[1],void 0===g[k]&&(g[k]={index1:f[0],index2:f[1]});}}}for(k in g){m=g[k],h.fromBufferAttribute(l,m.index1),b.push(h.x,h.y,h.z),h.fromBufferAttribute(l,m.index2),b.push(h.x,h.y,h.z);}}else for(l=a.attributes.position,m=0,d=l.count/3;m<d;m++){for(c=0;3>c;c++){g=3*m+c,h.fromBufferAttribute(l,g),b.push(h.x,h.y,h.z),g=3*m+(c+1)%3,h.fromBufferAttribute(l,g),b.push(h.x,h.y,h.z);}}this.addAttribute("position",new A(b,3));}function Rd(a,b,c){F.call(this);this.type="ParametricGeometry";this.parameters={func:a,slices:b,stacks:c};this.fromBufferGeometry(new Nc(a,b,c));this.mergeVertices();}function Nc(a,b,c){E.call(this);this.type="ParametricBufferGeometry";this.parameters={func:a,slices:b,stacks:c};var d=[],e=[],f=[],g=[],h=new n(),l=new n(),m=new n(),q=new n(),k=new n(),t,r;3>a.length&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");var p=b+1;for(t=0;t<=c;t++){var v=t/c;for(r=0;r<=b;r++){var x=r/b;a(x,v,l);e.push(l.x,l.y,l.z);0<=x-1E-5?(a(x-1E-5,v,m),q.subVectors(l,m)):(a(x+1E-5,v,m),q.subVectors(m,l));0<=v-1E-5?(a(x,v-1E-5,m),k.subVectors(l,m)):(a(x,v+1E-5,m),k.subVectors(m,l));h.crossVectors(q,k).normalize();f.push(h.x,h.y,h.z);g.push(x,v);}}for(t=0;t<c;t++){for(r=0;r<b;r++){a=t*p+r+1,h=(t+1)*p+r+1,l=(t+1)*p+r,d.push(t*p+r,a,l),d.push(a,h,l);}}this.setIndex(d);this.addAttribute("position",new A(e,3));this.addAttribute("normal",new A(f,3));this.addAttribute("uv",new A(g,2));}function Sd(a,b,c,d){F.call(this);this.type="PolyhedronGeometry";this.parameters={vertices:a,indices:b,radius:c,detail:d};this.fromBufferGeometry(new Ca(a,b,c,d));this.mergeVertices();}function Ca(a,b,c,d){function e(a){h.push(a.x,a.y,a.z);}function f(b,c){b*=3;c.x=a[b+0];c.y=a[b+1];c.z=a[b+2];}function g(a,b,c,d){0>d&&1===a.x&&(l[b]=a.x-1);0===c.x&&0===c.z&&(l[b]=d/2/Math.PI+.5);}E.call(this);this.type="PolyhedronBufferGeometry";this.parameters={vertices:a,indices:b,radius:c,detail:d};c=c||1;d=d||0;var h=[],l=[];(function(a){for(var c=new n(),d=new n(),g=new n(),h=0;h<b.length;h+=3){f(b[h+0],c);f(b[h+1],d);f(b[h+2],g);var l,m,k=c,z=d,y=g,w=Math.pow(2,a),P=[];for(m=0;m<=w;m++){P[m]=[];var C=k.clone().lerp(y,m/w),A=z.clone().lerp(y,m/w),B=w-m;for(l=0;l<=B;l++){P[m][l]=0===l&&m===w?C:C.clone().lerp(A,l/B);}}for(m=0;m<w;m++){for(l=0;l<2*(w-m)-1;l++){k=Math.floor(l/2),0===l%2?(e(P[m][k+1]),e(P[m+1][k]),e(P[m][k])):(e(P[m][k+1]),e(P[m+1][k+1]),e(P[m+1][k]));}}}})(d);(function(a){for(var b=new n(),c=0;c<h.length;c+=3){b.x=h[c+0],b.y=h[c+1],b.z=h[c+2],b.normalize().multiplyScalar(a),h[c+0]=b.x,h[c+1]=b.y,h[c+2]=b.z;}})(c);(function(){for(var a=new n(),b=0;b<h.length;b+=3){a.x=h[b+0],a.y=h[b+1],a.z=h[b+2],l.push(Math.atan2(a.z,-a.x)/2/Math.PI+.5,1-(Math.atan2(-a.y,Math.sqrt(a.x*a.x+a.z*a.z))/Math.PI+.5));}a=new n();b=new n();for(var c=new n(),d=new n(),e=new w(),f=new w(),k=new w(),x=0,z=0;x<h.length;x+=9,z+=6){a.set(h[x+0],h[x+1],h[x+2]);b.set(h[x+3],h[x+4],h[x+5]);c.set(h[x+6],h[x+7],h[x+8]);e.set(l[z+0],l[z+1]);f.set(l[z+2],l[z+3]);k.set(l[z+4],l[z+5]);d.copy(a).add(b).add(c).divideScalar(3);var y=Math.atan2(d.z,-d.x);g(e,z+0,a,y);g(f,z+2,b,y);g(k,z+4,c,y);}for(a=0;a<l.length;a+=6){b=l[a+0],c=l[a+2],d=l[a+4],e=Math.min(b,c,d),.9<Math.max(b,c,d)&&.1>e&&(.2>b&&(l[a+0]+=1),.2>c&&(l[a+2]+=1),.2>d&&(l[a+4]+=1));}})();this.addAttribute("position",new A(h,3));this.addAttribute("normal",new A(h.slice(),3));this.addAttribute("uv",new A(l,2));0===d?this.computeVertexNormals():this.normalizeNormals();}function Td(a,b){F.call(this);this.type="TetrahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Oc(a,b));this.mergeVertices();}function Oc(a,b){Ca.call(this,[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],a,b);this.type="TetrahedronBufferGeometry";this.parameters={radius:a,detail:b};}function Ud(a,b){F.call(this);this.type="OctahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new cc(a,b));this.mergeVertices();}function cc(a,b){Ca.call(this,[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],a,b);this.type="OctahedronBufferGeometry";this.parameters={radius:a,detail:b};}function Vd(a,b){F.call(this);this.type="IcosahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Pc(a,b));this.mergeVertices();}function Pc(a,b){var c=(1+Math.sqrt(5))/2;Ca.call(this,[-1,c,0,1,c,0,-1,-c,0,1,-c,0,0,-1,c,0,1,c,0,-1,-c,0,1,-c,c,0,-1,c,0,1,-c,0,-1,-c,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],a,b);this.type="IcosahedronBufferGeometry";this.parameters={radius:a,detail:b};}function Wd(a,b){F.call(this);this.type="DodecahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Qc(a,b));this.mergeVertices();}function Qc(a,b){var c=(1+Math.sqrt(5))/2,d=1/c;Ca.call(this,[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-d,-c,0,-d,c,0,d,-c,0,d,c,-d,-c,0,-d,c,0,d,-c,0,d,c,0,-c,0,-d,c,0,-d,-c,0,d,c,0,d],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],a,b);this.type="DodecahedronBufferGeometry";this.parameters={radius:a,detail:b};}function Xd(a,b,c,d,e,f){F.call(this);this.type="TubeGeometry";this.parameters={path:a,tubularSegments:b,radius:c,radialSegments:d,closed:e};void 0!==f&&console.warn("THREE.TubeGeometry: taper has been removed.");a=new dc(a,b,c,d,e);this.tangents=a.tangents;this.normals=a.normals;this.binormals=a.binormals;this.fromBufferGeometry(a);this.mergeVertices();}function dc(a,b,c,d,e){function f(e){q=a.getPointAt(e/b,q);var f=g.normals[e];e=g.binormals[e];for(t=0;t<=d;t++){var m=t/d*Math.PI*2,k=Math.sin(m);m=-Math.cos(m);l.x=m*f.x+k*e.x;l.y=m*f.y+k*e.y;l.z=m*f.z+k*e.z;l.normalize();p.push(l.x,l.y,l.z);h.x=q.x+c*l.x;h.y=q.y+c*l.y;h.z=q.z+c*l.z;r.push(h.x,h.y,h.z);}}E.call(this);this.type="TubeBufferGeometry";this.parameters={path:a,tubularSegments:b,radius:c,radialSegments:d,closed:e};b=b||64;c=c||1;d=d||8;e=e||!1;var g=a.computeFrenetFrames(b,e);this.tangents=g.tangents;this.normals=g.normals;this.binormals=g.binormals;var h=new n(),l=new n(),m=new w(),q=new n(),k,t,r=[],p=[],v=[],x=[];for(k=0;k<b;k++){f(k);}f(!1===e?b:0);for(k=0;k<=b;k++){for(t=0;t<=d;t++){m.x=k/b,m.y=t/d,v.push(m.x,m.y);}}(function(){for(t=1;t<=b;t++){for(k=1;k<=d;k++){var a=(d+1)*t+(k-1),c=(d+1)*t+k,e=(d+1)*(t-1)+k;x.push((d+1)*(t-1)+(k-1),a,e);x.push(a,c,e);}}})();this.setIndex(x);this.addAttribute("position",new A(r,3));this.addAttribute("normal",new A(p,3));this.addAttribute("uv",new A(v,2));}function Yd(a,b,c,d,e,f,g){F.call(this);this.type="TorusKnotGeometry";this.parameters={radius:a,tube:b,tubularSegments:c,radialSegments:d,p:e,q:f};void 0!==g&&console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead.");this.fromBufferGeometry(new Rc(a,b,c,d,e,f));this.mergeVertices();}function Rc(a,b,c,d,e,f){function g(a,b,c,d,e){var f=Math.sin(a);b=c/b*a;c=Math.cos(b);e.x=d*(2+c)*.5*Math.cos(a);e.y=d*(2+c)*f*.5;e.z=d*Math.sin(b)*.5;}E.call(this);this.type="TorusKnotBufferGeometry";this.parameters={radius:a,tube:b,tubularSegments:c,radialSegments:d,p:e,q:f};a=a||1;b=b||.4;c=Math.floor(c)||64;d=Math.floor(d)||8;e=e||2;f=f||3;var h=[],l=[],m=[],q=[],k,t=new n(),r=new n(),p=new n(),v=new n(),x=new n(),z=new n(),y=new n();for(k=0;k<=c;++k){var w=k/c*e*Math.PI*2;g(w,e,f,a,p);g(w+.01,e,f,a,v);z.subVectors(v,p);y.addVectors(v,p);x.crossVectors(z,y);y.crossVectors(x,z);x.normalize();y.normalize();for(w=0;w<=d;++w){var P=w/d*Math.PI*2,C=-b*Math.cos(P);P=b*Math.sin(P);t.x=p.x+(C*y.x+P*x.x);t.y=p.y+(C*y.y+P*x.y);t.z=p.z+(C*y.z+P*x.z);l.push(t.x,t.y,t.z);r.subVectors(t,p).normalize();m.push(r.x,r.y,r.z);q.push(k/c);q.push(w/d);}}for(w=1;w<=c;w++){for(k=1;k<=d;k++){a=(d+1)*w+(k-1),b=(d+1)*w+k,e=(d+1)*(w-1)+k,h.push((d+1)*(w-1)+(k-1),a,e),h.push(a,b,e);}}this.setIndex(h);this.addAttribute("position",new A(l,3));this.addAttribute("normal",new A(m,3));this.addAttribute("uv",new A(q,2));}function Zd(a,b,c,d,e){F.call(this);this.type="TorusGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};this.fromBufferGeometry(new Sc(a,b,c,d,e));this.mergeVertices();}function Sc(a,b,c,d,e){E.call(this);this.type="TorusBufferGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};a=a||1;b=b||.4;c=Math.floor(c)||8;d=Math.floor(d)||6;e=e||2*Math.PI;var f=[],g=[],h=[],l=[],m=new n(),q=new n(),k=new n(),t,r;for(t=0;t<=c;t++){for(r=0;r<=d;r++){var p=r/d*e,v=t/c*Math.PI*2;q.x=(a+b*Math.cos(v))*Math.cos(p);q.y=(a+b*Math.cos(v))*Math.sin(p);q.z=b*Math.sin(v);g.push(q.x,q.y,q.z);m.x=a*Math.cos(p);m.y=a*Math.sin(p);k.subVectors(q,m).normalize();h.push(k.x,k.y,k.z);l.push(r/d);l.push(t/c);}}for(t=1;t<=c;t++){for(r=1;r<=d;r++){a=(d+1)*(t-1)+r-1,b=(d+1)*(t-1)+r,e=(d+1)*t+r,f.push((d+1)*t+r-1,a,e),f.push(a,b,e);}}this.setIndex(f);this.addAttribute("position",new A(g,3));this.addAttribute("normal",new A(h,3));this.addAttribute("uv",new A(l,2));}function Rh(a,b,c,d,e){for(var f,g=0,h=b,l=c-d;h<c;h+=d){g+=(a[l]-a[h])*(a[h+1]+a[l+1]),l=h;}if(e===0<g)for(e=b;e<c;e+=d){f=Sh(e,a[e],a[e+1],f);}else for(e=c-d;e>=b;e-=d){f=Sh(e,a[e],a[e+1],f);}f&&ec(f,f.next)&&($d(f),f=f.next);return f;}function ae(a,b){if(!a)return a;b||(b=a);do{var c=!1;if(a.steiner||!ec(a,a.next)&&0!==sa(a.prev,a,a.next))a=a.next;else{$d(a);a=b=a.prev;if(a===a.next)break;c=!0;}}while(c||a!==b);return b;}function be(a,b,c,d,e,f,g){if(a){if(!g&&f){var h=a,l=h;do{null===l.z&&(l.z=ng(l.x,l.y,d,e,f)),l.prevZ=l.prev,l=l.nextZ=l.next;}while(l!==h);l.prevZ.nextZ=null;l.prevZ=null;h=l;var m,q,k,t,r=1;do{l=h;var p=h=null;for(q=0;l;){q++;var n=l;for(m=k=0;m<r&&(k++,n=n.nextZ,n);m++){;}for(t=r;0<k||0<t&&n;){0!==k&&(0===t||!n||l.z<=n.z)?(m=l,l=l.nextZ,k--):(m=n,n=n.nextZ,t--),p?p.nextZ=m:h=m,m.prevZ=p,p=m;}l=n;}p.nextZ=null;r*=2;}while(1<q);}for(h=a;a.prev!==a.next;){l=a.prev;n=a.next;if(f)p=lk(a,d,e,f);else a:if(p=a,q=p.prev,k=p,r=p.next,0<=sa(q,k,r))p=!1;else{for(m=p.next.next;m!==p.prev;){if(Tc(q.x,q.y,k.x,k.y,r.x,r.y,m.x,m.y)&&0<=sa(m.prev,m,m.next)){p=!1;break a;}m=m.next;}p=!0;}if(p)b.push(l.i/c),b.push(a.i/c),b.push(n.i/c),$d(a),h=a=n.next;else if(a=n,a===h){if(!g)be(ae(a),b,c,d,e,f,1);else if(1===g){g=b;h=c;l=a;do{n=l.prev,p=l.next.next,!ec(n,p)&&Th(n,l,l.next,p)&&ce(n,p)&&ce(p,n)&&(g.push(n.i/h),g.push(l.i/h),g.push(p.i/h),$d(l),$d(l.next),l=a=p),l=l.next;}while(l!==a);a=l;be(a,b,c,d,e,f,2);}else if(2===g)a:{g=a;do{for(h=g.next.next;h!==g.prev;){if(l=g.i!==h.i){l=g;n=h;if(p=l.next.i!==n.i&&l.prev.i!==n.i){b:{p=l;do{if(p.i!==l.i&&p.next.i!==l.i&&p.i!==n.i&&p.next.i!==n.i&&Th(p,p.next,l,n)){p=!0;break b;}p=p.next;}while(p!==l);p=!1;}p=!p;}if(p=p&&ce(l,n)&&ce(n,l)){p=l;q=!1;k=(l.x+n.x)/2;n=(l.y+n.y)/2;do{p.y>n!==p.next.y>n&&p.next.y!==p.y&&k<(p.next.x-p.x)*(n-p.y)/(p.next.y-p.y)+p.x&&(q=!q),p=p.next;}while(p!==l);p=q;}l=p;}if(l){a=Uh(g,h);g=ae(g,g.next);a=ae(a,a.next);be(g,b,c,d,e,f);be(a,b,c,d,e,f);break a;}h=h.next;}g=g.next;}while(g!==a);}break;}}}}function lk(a,b,c,d){var e=a.prev,f=a.next;if(0<=sa(e,a,f))return!1;var g=e.x>a.x?e.x>f.x?e.x:f.x:a.x>f.x?a.x:f.x,h=e.y>a.y?e.y>f.y?e.y:f.y:a.y>f.y?a.y:f.y,l=ng(e.x<a.x?e.x<f.x?e.x:f.x:a.x<f.x?a.x:f.x,e.y<a.y?e.y<f.y?e.y:f.y:a.y<f.y?a.y:f.y,b,c,d);b=ng(g,h,b,c,d);c=a.prevZ;for(d=a.nextZ;c&&c.z>=l&&d&&d.z<=b;){if(c!==a.prev&&c!==a.next&&Tc(e.x,e.y,a.x,a.y,f.x,f.y,c.x,c.y)&&0<=sa(c.prev,c,c.next))return!1;c=c.prevZ;if(d!==a.prev&&d!==a.next&&Tc(e.x,e.y,a.x,a.y,f.x,f.y,d.x,d.y)&&0<=sa(d.prev,d,d.next))return!1;d=d.nextZ;}for(;c&&c.z>=l;){if(c!==a.prev&&c!==a.next&&Tc(e.x,e.y,a.x,a.y,f.x,f.y,c.x,c.y)&&0<=sa(c.prev,c,c.next))return!1;c=c.prevZ;}for(;d&&d.z<=b;){if(d!==a.prev&&d!==a.next&&Tc(e.x,e.y,a.x,a.y,f.x,f.y,d.x,d.y)&&0<=sa(d.prev,d,d.next))return!1;d=d.nextZ;}return!0;}function mk(a,b){return a.x-b.x;}function nk(a,b){var c=b,d=a.x,e=a.y,f=-Infinity;do{if(e<=c.y&&e>=c.next.y&&c.next.y!==c.y){var g=c.x+(e-c.y)*(c.next.x-c.x)/(c.next.y-c.y);if(g<=d&&g>f){f=g;if(g===d){if(e===c.y)return c;if(e===c.next.y)return c.next;}var h=c.x<c.next.x?c:c.next;}}c=c.next;}while(c!==b);if(!h)return null;if(d===f)return h.prev;b=h;g=h.x;var l=h.y,m=Infinity;for(c=h.next;c!==b;){if(d>=c.x&&c.x>=g&&d!==c.x&&Tc(e<l?d:f,e,g,l,e<l?f:d,e,c.x,c.y)){var q=Math.abs(e-c.y)/(d-c.x);(q<m||q===m&&c.x>h.x)&&ce(c,a)&&(h=c,m=q);}c=c.next;}return h;}function ng(a,b,c,d,e){a=32767*(a-c)*e;b=32767*(b-d)*e;a=(a|a<<8)&16711935;a=(a|a<<4)&252645135;a=(a|a<<2)&858993459;b=(b|b<<8)&16711935;b=(b|b<<4)&252645135;b=(b|b<<2)&858993459;return(a|a<<1)&1431655765|((b|b<<1)&1431655765)<<1;}function ok(a){var b=a,c=a;do{if(b.x<c.x||b.x===c.x&&b.y<c.y)c=b;b=b.next;}while(b!==a);return c;}function Tc(a,b,c,d,e,f,g,h){return 0<=(e-g)*(b-h)-(a-g)*(f-h)&&0<=(a-g)*(d-h)-(c-g)*(b-h)&&0<=(c-g)*(f-h)-(e-g)*(d-h);}function sa(a,b,c){return(b.y-a.y)*(c.x-b.x)-(b.x-a.x)*(c.y-b.y);}function ec(a,b){return a.x===b.x&&a.y===b.y;}function Th(a,b,c,d){return ec(a,c)&&ec(b,d)||ec(a,d)&&ec(c,b)?!0:0<sa(a,b,c)!==0<sa(a,b,d)&&0<sa(c,d,a)!==0<sa(c,d,b);}function ce(a,b){return 0>sa(a.prev,a,a.next)?0<=sa(a,b,a.next)&&0<=sa(a,a.prev,b):0>sa(a,b,a.prev)||0>sa(a,a.next,b);}function Uh(a,b){var c=new og(a.i,a.x,a.y),d=new og(b.i,b.x,b.y),e=a.next,f=b.prev;a.next=b;b.prev=a;c.next=e;e.prev=c;d.next=c;c.prev=d;f.next=d;d.prev=f;return d;}function Sh(a,b,c,d){a=new og(a,b,c);d?(a.next=d.next,a.prev=d,d.next.prev=a,d.next=a):(a.prev=a,a.next=a);return a;}function $d(a){a.next.prev=a.prev;a.prev.next=a.next;a.prevZ&&(a.prevZ.nextZ=a.nextZ);a.nextZ&&(a.nextZ.prevZ=a.prevZ);}function og(a,b,c){this.i=a;this.x=b;this.y=c;this.nextZ=this.prevZ=this.z=this.next=this.prev=null;this.steiner=!1;}function Vh(a){var b=a.length;2<b&&a[b-1].equals(a[0])&&a.pop();}function Wh(a,b){for(var c=0;c<b.length;c++){a.push(b[c].x),a.push(b[c].y);}}function fc(a,b){F.call(this);this.type="ExtrudeGeometry";this.parameters={shapes:a,options:b};this.fromBufferGeometry(new eb(a,b));this.mergeVertices();}function eb(a,b){function c(a){function c(a,b,c){b||console.error("THREE.ExtrudeGeometry: vec does not exist");return b.clone().multiplyScalar(c).add(a);}function g(a,b,c){var d=a.x-b.x;var e=a.y-b.y;var f=c.x-a.x;var g=c.y-a.y,h=d*d+e*e;if(Math.abs(d*g-e*f)>Number.EPSILON){var l=Math.sqrt(h),m=Math.sqrt(f*f+g*g);h=b.x-e/l;b=b.y+d/l;g=((c.x-g/m-h)*g-(c.y+f/m-b)*f)/(d*g-e*f);f=h+d*g-a.x;d=b+e*g-a.y;e=f*f+d*d;if(2>=e)return new w(f,d);e=Math.sqrt(e/2);}else a=!1,d>Number.EPSILON?f>Number.EPSILON&&(a=!0):d<-Number.EPSILON?f<-Number.EPSILON&&(a=!0):Math.sign(e)===Math.sign(g)&&(a=!0),a?(f=-e,e=Math.sqrt(h)):(f=d,d=e,e=Math.sqrt(h/2));return new w(f/e,d/e);}function h(a,b){for(K=a.length;0<=--K;){var c=K;var f=K-1;0>f&&(f=a.length-1);var g,h=y+2*E;for(g=0;g<h;g++){var l=Y*g,m=Y*(g+1),q=b+f+l,k=b+f+m;m=b+c+m;p(b+c+l);p(q);p(m);p(q);p(k);p(m);l=e.length/3;l=G.generateSideWallUV(d,e,l-6,l-3,l-2,l-1);v(l[0]);v(l[1]);v(l[3]);v(l[1]);v(l[2]);v(l[3]);}}}function l(a,b,c){x.push(a);x.push(b);x.push(c);}function k(a,b,c){p(a);p(b);p(c);a=e.length/3;a=G.generateTopUV(d,e,a-3,a-2,a-1);v(a[0]);v(a[1]);v(a[2]);}function p(a){e.push(x[3*a]);e.push(x[3*a+1]);e.push(x[3*a+2]);}function v(a){f.push(a.x);f.push(a.y);}var x=[],z=void 0!==b.curveSegments?b.curveSegments:12,y=void 0!==b.steps?b.steps:1,V=void 0!==b.depth?b.depth:100,P=void 0!==b.bevelEnabled?b.bevelEnabled:!0,C=void 0!==b.bevelThickness?b.bevelThickness:6,A=void 0!==b.bevelSize?b.bevelSize:C-2,B=void 0!==b.bevelOffset?b.bevelOffset:0,E=void 0!==b.bevelSegments?b.bevelSegments:3,D=b.extrudePath,G=void 0!==b.UVGenerator?b.UVGenerator:pk;void 0!==b.amount&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),V=b.amount);var F=!1;if(D){var H=D.getSpacedPoints(y);F=!0;P=!1;var I=D.computeFrenetFrames(y,!1);var O=new n();var T=new n();var X=new n();}P||(B=A=C=E=0);var M;z=a.extractPoints(z);a=z.shape;var N=z.holes;if(!pb.isClockWise(a)){a=a.reverse();var ha=0;for(M=N.length;ha<M;ha++){var L=N[ha];pb.isClockWise(L)&&(N[ha]=L.reverse());}}var U=pb.triangulateShape(a,N),W=a;ha=0;for(M=N.length;ha<M;ha++){L=N[ha],a=a.concat(L);}var Q,Y=a.length,S,ca=U.length;z=[];var K=0;var Z=W.length;var fa=Z-1;for(Q=K+1;K<Z;K++,fa++,Q++){fa===Z&&(fa=0),Q===Z&&(Q=0),z[K]=g(W[K],W[fa],W[Q]);}D=[];var ea=z.concat();ha=0;for(M=N.length;ha<M;ha++){L=N[ha];var aa=[];K=0;Z=L.length;fa=Z-1;for(Q=K+1;K<Z;K++,fa++,Q++){fa===Z&&(fa=0),Q===Z&&(Q=0),aa[K]=g(L[K],L[fa],L[Q]);}D.push(aa);ea=ea.concat(aa);}for(fa=0;fa<E;fa++){Z=fa/E;var da=C*Math.cos(Z*Math.PI/2);Q=A*Math.sin(Z*Math.PI/2)+B;K=0;for(Z=W.length;K<Z;K++){var R=c(W[K],z[K],Q);l(R.x,R.y,-da);}ha=0;for(M=N.length;ha<M;ha++){for(L=N[ha],aa=D[ha],K=0,Z=L.length;K<Z;K++){R=c(L[K],aa[K],Q),l(R.x,R.y,-da);}}}Q=A+B;for(K=0;K<Y;K++){R=P?c(a[K],ea[K],Q):a[K],F?(T.copy(I.normals[0]).multiplyScalar(R.x),O.copy(I.binormals[0]).multiplyScalar(R.y),X.copy(H[0]).add(T).add(O),l(X.x,X.y,X.z)):l(R.x,R.y,0);}for(Z=1;Z<=y;Z++){for(K=0;K<Y;K++){R=P?c(a[K],ea[K],Q):a[K],F?(T.copy(I.normals[Z]).multiplyScalar(R.x),O.copy(I.binormals[Z]).multiplyScalar(R.y),X.copy(H[Z]).add(T).add(O),l(X.x,X.y,X.z)):l(R.x,R.y,V/y*Z);}}for(fa=E-1;0<=fa;fa--){Z=fa/E;da=C*Math.cos(Z*Math.PI/2);Q=A*Math.sin(Z*Math.PI/2)+B;K=0;for(Z=W.length;K<Z;K++){R=c(W[K],z[K],Q),l(R.x,R.y,V+da);}ha=0;for(M=N.length;ha<M;ha++){for(L=N[ha],aa=D[ha],K=0,Z=L.length;K<Z;K++){R=c(L[K],aa[K],Q),F?l(R.x,R.y+H[y-1].y,H[y-1].x+da):l(R.x,R.y,V+da);}}}(function(){var a=e.length/3;if(P){var b=0*Y;for(K=0;K<ca;K++){S=U[K],k(S[2]+b,S[1]+b,S[0]+b);}b=Y*(y+2*E);for(K=0;K<ca;K++){S=U[K],k(S[0]+b,S[1]+b,S[2]+b);}}else{for(K=0;K<ca;K++){S=U[K],k(S[2],S[1],S[0]);}for(K=0;K<ca;K++){S=U[K],k(S[0]+Y*y,S[1]+Y*y,S[2]+Y*y);}}d.addGroup(a,e.length/3-a,0);})();(function(){var a=e.length/3,b=0;h(W,b);b+=W.length;ha=0;for(M=N.length;ha<M;ha++){L=N[ha],h(L,b),b+=L.length;}d.addGroup(a,e.length/3-a,1);})();}E.call(this);this.type="ExtrudeBufferGeometry";this.parameters={shapes:a,options:b};a=Array.isArray(a)?a:[a];for(var d=this,e=[],f=[],g=0,h=a.length;g<h;g++){c(a[g]);}this.addAttribute("position",new A(e,3));this.addAttribute("uv",new A(f,2));this.computeVertexNormals();}function Xh(a,b,c){c.shapes=[];if(Array.isArray(a))for(var d=0,e=a.length;d<e;d++){c.shapes.push(a[d].uuid);}else c.shapes.push(a.uuid);void 0!==b.extrudePath&&(c.options.extrudePath=b.extrudePath.toJSON());return c;}function de(a,b){F.call(this);this.type="TextGeometry";this.parameters={text:a,parameters:b};this.fromBufferGeometry(new Uc(a,b));this.mergeVertices();}function Uc(a,b){b=b||{};var c=b.font;if(!c||!c.isFont)return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new F();a=c.generateShapes(a,b.size);b.depth=void 0!==b.height?b.height:50;void 0===b.bevelThickness&&(b.bevelThickness=10);void 0===b.bevelSize&&(b.bevelSize=8);void 0===b.bevelEnabled&&(b.bevelEnabled=!1);eb.call(this,a,b);this.type="TextBufferGeometry";}function ee(a,b,c,d,e,f,g){F.call(this);this.type="SphereGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};this.fromBufferGeometry(new Ib(a,b,c,d,e,f,g));this.mergeVertices();}function Ib(a,b,c,d,e,f,g){E.call(this);this.type="SphereBufferGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};a=a||1;b=Math.max(3,Math.floor(b)||8);c=Math.max(2,Math.floor(c)||6);d=void 0!==d?d:0;e=void 0!==e?e:2*Math.PI;f=void 0!==f?f:0;g=void 0!==g?g:Math.PI;var h=Math.min(f+g,Math.PI),l,m,q=0,k=[],t=new n(),r=new n(),p=[],v=[],x=[],z=[];for(m=0;m<=c;m++){var y=[],w=m/c,P=0;0==m&&0==f?P=.5/b:m==c&&h==Math.PI&&(P=-.5/b);for(l=0;l<=b;l++){var C=l/b;t.x=-a*Math.cos(d+C*e)*Math.sin(f+w*g);t.y=a*Math.cos(f+w*g);t.z=a*Math.sin(d+C*e)*Math.sin(f+w*g);v.push(t.x,t.y,t.z);r.copy(t).normalize();x.push(r.x,r.y,r.z);z.push(C+P,1-w);y.push(q++);}k.push(y);}for(m=0;m<c;m++){for(l=0;l<b;l++){a=k[m][l+1],d=k[m][l],e=k[m+1][l],g=k[m+1][l+1],(0!==m||0<f)&&p.push(a,d,g),(m!==c-1||h<Math.PI)&&p.push(d,e,g);}}this.setIndex(p);this.addAttribute("position",new A(v,3));this.addAttribute("normal",new A(x,3));this.addAttribute("uv",new A(z,2));}function fe(a,b,c,d,e,f){F.call(this);this.type="RingGeometry";this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:f};this.fromBufferGeometry(new Vc(a,b,c,d,e,f));this.mergeVertices();}function Vc(a,b,c,d,e,f){E.call(this);this.type="RingBufferGeometry";this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:f};a=a||.5;b=b||1;e=void 0!==e?e:0;f=void 0!==f?f:2*Math.PI;c=void 0!==c?Math.max(3,c):8;d=void 0!==d?Math.max(1,d):1;var g=[],h=[],l=[],m=[],q=a,k=(b-a)/d,t=new n(),r=new w(),p,v;for(p=0;p<=d;p++){for(v=0;v<=c;v++){a=e+v/c*f,t.x=q*Math.cos(a),t.y=q*Math.sin(a),h.push(t.x,t.y,t.z),l.push(0,0,1),r.x=(t.x/b+1)/2,r.y=(t.y/b+1)/2,m.push(r.x,r.y);}q+=k;}for(p=0;p<d;p++){for(b=p*(c+1),v=0;v<c;v++){a=v+b,e=a+c+1,f=a+c+2,q=a+1,g.push(a,e,q),g.push(e,f,q);}}this.setIndex(g);this.addAttribute("position",new A(h,3));this.addAttribute("normal",new A(l,3));this.addAttribute("uv",new A(m,2));}function ge(a,b,c,d){F.call(this);this.type="LatheGeometry";this.parameters={points:a,segments:b,phiStart:c,phiLength:d};this.fromBufferGeometry(new Wc(a,b,c,d));this.mergeVertices();}function Wc(a,b,c,d){E.call(this);this.type="LatheBufferGeometry";this.parameters={points:a,segments:b,phiStart:c,phiLength:d};b=Math.floor(b)||12;c=c||0;d=d||2*Math.PI;d=L.clamp(d,0,2*Math.PI);var e=[],f=[],g=[],h=1/b,l=new n(),m=new w(),q;for(q=0;q<=b;q++){var k=c+q*h*d;var t=Math.sin(k),r=Math.cos(k);for(k=0;k<=a.length-1;k++){l.x=a[k].x*t,l.y=a[k].y,l.z=a[k].x*r,f.push(l.x,l.y,l.z),m.x=q/b,m.y=k/(a.length-1),g.push(m.x,m.y);}}for(q=0;q<b;q++){for(k=0;k<a.length-1;k++){c=k+q*a.length,h=c+a.length,l=c+a.length+1,m=c+1,e.push(c,h,m),e.push(h,l,m);}}this.setIndex(e);this.addAttribute("position",new A(f,3));this.addAttribute("uv",new A(g,2));this.computeVertexNormals();if(d===2*Math.PI)for(d=this.attributes.normal.array,e=new n(),f=new n(),g=new n(),c=b*a.length*3,k=q=0;q<a.length;q++,k+=3){e.x=d[k+0],e.y=d[k+1],e.z=d[k+2],f.x=d[c+k+0],f.y=d[c+k+1],f.z=d[c+k+2],g.addVectors(e,f).normalize(),d[k+0]=d[c+k+0]=g.x,d[k+1]=d[c+k+1]=g.y,d[k+2]=d[c+k+2]=g.z;}}function gc(a,b){F.call(this);this.type="ShapeGeometry";"object"===_typeof(b)&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),b=b.curveSegments);this.parameters={shapes:a,curveSegments:b};this.fromBufferGeometry(new hc(a,b));this.mergeVertices();}function hc(a,b){function c(a){var c,h=e.length/3;a=a.extractPoints(b);var m=a.shape,k=a.holes;!1===pb.isClockWise(m)&&(m=m.reverse());a=0;for(c=k.length;a<c;a++){var q=k[a];!0===pb.isClockWise(q)&&(k[a]=q.reverse());}var n=pb.triangulateShape(m,k);a=0;for(c=k.length;a<c;a++){q=k[a],m=m.concat(q);}a=0;for(c=m.length;a<c;a++){q=m[a],e.push(q.x,q.y,0),f.push(0,0,1),g.push(q.x,q.y);}a=0;for(c=n.length;a<c;a++){m=n[a],d.push(m[0]+h,m[1]+h,m[2]+h),l+=3;}}E.call(this);this.type="ShapeBufferGeometry";this.parameters={shapes:a,curveSegments:b};b=b||12;var d=[],e=[],f=[],g=[],h=0,l=0;if(!1===Array.isArray(a))c(a);else for(var m=0;m<a.length;m++){c(a[m]),this.addGroup(h,l,m),h+=l,l=0;}this.setIndex(d);this.addAttribute("position",new A(e,3));this.addAttribute("normal",new A(f,3));this.addAttribute("uv",new A(g,2));}function Yh(a,b){b.shapes=[];if(Array.isArray(a))for(var c=0,d=a.length;c<d;c++){b.shapes.push(a[c].uuid);}else b.shapes.push(a.uuid);return b;}function Xc(a,b){E.call(this);this.type="EdgesGeometry";this.parameters={thresholdAngle:b};var c=[];b=Math.cos(L.DEG2RAD*(void 0!==b?b:1));var d=[0,0],e={},f=["a","b","c"];if(a.isBufferGeometry){var g=new F();g.fromBufferGeometry(a);}else g=a.clone();g.mergeVertices();g.computeFaceNormals();a=g.vertices;g=g.faces;for(var h=0,l=g.length;h<l;h++){for(var m=g[h],k=0;3>k;k++){var u=m[f[k]];var n=m[f[(k+1)%3]];d[0]=Math.min(u,n);d[1]=Math.max(u,n);u=d[0]+","+d[1];void 0===e[u]?e[u]={index1:d[0],index2:d[1],face1:h,face2:void 0}:e[u].face2=h;}}for(u in e){if(d=e[u],void 0===d.face2||g[d.face1].normal.dot(g[d.face2].normal)<=b)f=a[d.index1],c.push(f.x,f.y,f.z),f=a[d.index2],c.push(f.x,f.y,f.z);}this.addAttribute("position",new A(c,3));}function ic(a,b,c,d,e,f,g,h){F.call(this);this.type="CylinderGeometry";this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f,thetaStart:g,thetaLength:h};this.fromBufferGeometry(new qb(a,b,c,d,e,f,g,h));this.mergeVertices();}function qb(a,b,c,d,e,f,g,h){function l(c){var e,f=new w(),l=new n(),q=0,v=!0===c?a:b,y=!0===c?1:-1;var A=p;for(e=1;e<=d;e++){u.push(0,x*y,0),t.push(0,y,0),r.push(.5,.5),p++;}var B=p;for(e=0;e<=d;e++){var E=e/d*h+g,D=Math.cos(E);E=Math.sin(E);l.x=v*E;l.y=x*y;l.z=v*D;u.push(l.x,l.y,l.z);t.push(0,y,0);f.x=.5*D+.5;f.y=.5*E*y+.5;r.push(f.x,f.y);p++;}for(e=0;e<d;e++){f=A+e,l=B+e,!0===c?k.push(l,l+1,f):k.push(l+1,l,f),q+=3;}m.addGroup(z,q,!0===c?1:2);z+=q;}E.call(this);this.type="CylinderBufferGeometry";this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f,thetaStart:g,thetaLength:h};var m=this;a=void 0!==a?a:1;b=void 0!==b?b:1;c=c||1;d=Math.floor(d)||8;e=Math.floor(e)||1;f=void 0!==f?f:!1;g=void 0!==g?g:0;h=void 0!==h?h:2*Math.PI;var k=[],u=[],t=[],r=[],p=0,v=[],x=c/2,z=0;(function(){var f,l,q=new n(),w=new n(),A=0,B=(b-a)/c;for(l=0;l<=e;l++){var E=[],D=l/e,G=D*(b-a)+a;for(f=0;f<=d;f++){var F=f/d,H=F*h+g,I=Math.sin(H);H=Math.cos(H);w.x=G*I;w.y=-D*c+x;w.z=G*H;u.push(w.x,w.y,w.z);q.set(I,B,H).normalize();t.push(q.x,q.y,q.z);r.push(F,1-D);E.push(p++);}v.push(E);}for(f=0;f<d;f++){for(l=0;l<e;l++){q=v[l+1][f],w=v[l+1][f+1],B=v[l][f+1],k.push(v[l][f],q,B),k.push(q,w,B),A+=6;}}m.addGroup(z,A,0);z+=A;})();!1===f&&(0<a&&l(!0),0<b&&l(!1));this.setIndex(k);this.addAttribute("position",new A(u,3));this.addAttribute("normal",new A(t,3));this.addAttribute("uv",new A(r,2));}function he(a,b,c,d,e,f,g){ic.call(this,0,a,b,c,d,e,f,g);this.type="ConeGeometry";this.parameters={radius:a,height:b,radialSegments:c,heightSegments:d,openEnded:e,thetaStart:f,thetaLength:g};}function ie(a,b,c,d,e,f,g){qb.call(this,0,a,b,c,d,e,f,g);this.type="ConeBufferGeometry";this.parameters={radius:a,height:b,radialSegments:c,heightSegments:d,openEnded:e,thetaStart:f,thetaLength:g};}function je(a,b,c,d){F.call(this);this.type="CircleGeometry";this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};this.fromBufferGeometry(new Yc(a,b,c,d));this.mergeVertices();}function Yc(a,b,c,d){E.call(this);this.type="CircleBufferGeometry";this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};a=a||1;b=void 0!==b?Math.max(3,b):8;c=void 0!==c?c:0;d=void 0!==d?d:2*Math.PI;var e=[],f=[],g=[],h=[],l,m=new n(),k=new w();f.push(0,0,0);g.push(0,0,1);h.push(.5,.5);var u=0;for(l=3;u<=b;u++,l+=3){var t=c+u/b*d;m.x=a*Math.cos(t);m.y=a*Math.sin(t);f.push(m.x,m.y,m.z);g.push(0,0,1);k.x=(f[l]/a+1)/2;k.y=(f[l+1]/a+1)/2;h.push(k.x,k.y);}for(l=1;l<=b;l++){e.push(l,l+1,0);}this.setIndex(e);this.addAttribute("position",new A(f,3));this.addAttribute("normal",new A(g,3));this.addAttribute("uv",new A(h,2));}function jc(a){M.call(this);this.type="ShadowMaterial";this.color=new H(0);this.transparent=!0;this.setValues(a);}function Zc(a){ma.call(this,a);this.type="RawShaderMaterial";}function fb(a){M.call(this);this.defines={STANDARD:""};this.type="MeshStandardMaterial";this.color=new H(16777215);this.metalness=this.roughness=.5;this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new H(0);this.emissiveIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=null;this.normalMapType=0;this.normalScale=new w(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.envMap=this.alphaMap=this.metalnessMap=this.roughnessMap=null;this.envMapIntensity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a);}function kc(a){fb.call(this);this.defines={STANDARD:"",PHYSICAL:""};this.type="MeshPhysicalMaterial";this.reflectivity=.5;this.clearcoatRoughness=this.clearcoat=0;this.sheen=null;this.clearcoatNormalScale=new w(1,1);this.clearcoatNormalMap=null;this.transparency=0;this.setValues(a);}function Ra(a){M.call(this);this.type="MeshPhongMaterial";this.color=new H(16777215);this.specular=new H(1118481);this.shininess=30;this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new H(0);this.emissiveIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=null;this.normalMapType=0;this.normalScale=new w(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.envMap=this.alphaMap=this.specularMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a);}function lc(a){Ra.call(this);this.defines={TOON:""};this.type="MeshToonMaterial";this.gradientMap=null;this.setValues(a);}function mc(a){M.call(this);this.type="MeshNormalMaterial";this.bumpMap=null;this.bumpScale=1;this.normalMap=null;this.normalMapType=0;this.normalScale=new w(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.wireframe=!1;this.wireframeLinewidth=1;this.morphNormals=this.morphTargets=this.skinning=this.fog=!1;this.setValues(a);}function nc(a){M.call(this);this.type="MeshLambertMaterial";this.color=new H(16777215);this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new H(0);this.emissiveIntensity=1;this.envMap=this.alphaMap=this.specularMap=this.emissiveMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a);}function oc(a){M.call(this);this.defines={MATCAP:""};this.type="MeshMatcapMaterial";this.color=new H(16777215);this.bumpMap=this.map=this.matcap=null;this.bumpScale=1;this.normalMap=null;this.normalMapType=0;this.normalScale=new w(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.alphaMap=null;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a);}function pc(a){Q.call(this);this.type="LineDashedMaterial";this.scale=1;this.dashSize=3;this.gapSize=1;this.setValues(a);}function Ia(a,b,c,d){this.parameterPositions=a;this._cachedIndex=0;this.resultBuffer=void 0!==d?d:new b.constructor(c);this.sampleValues=b;this.valueSize=c;}function Ne(a,b,c,d){Ia.call(this,a,b,c,d);this._offsetNext=this._weightNext=this._offsetPrev=this._weightPrev=-0;}function ke(a,b,c,d){Ia.call(this,a,b,c,d);}function Oe(a,b,c,d){Ia.call(this,a,b,c,d);}function oa(a,b,c,d){if(void 0===a)throw Error("THREE.KeyframeTrack: track name is undefined");if(void 0===b||0===b.length)throw Error("THREE.KeyframeTrack: no keyframes in track named "+a);this.name=a;this.times=pa.convertArray(b,this.TimeBufferType);this.values=pa.convertArray(c,this.ValueBufferType);this.setInterpolation(d||this.DefaultInterpolation);}function Pe(a,b,c){oa.call(this,a,b,c);}function Qe(a,b,c,d){oa.call(this,a,b,c,d);}function $c(a,b,c,d){oa.call(this,a,b,c,d);}function Re(a,b,c,d){Ia.call(this,a,b,c,d);}function le(a,b,c,d){oa.call(this,a,b,c,d);}function Se(a,b,c,d){oa.call(this,a,b,c,d);}function ad(a,b,c,d){oa.call(this,a,b,c,d);}function Ma(a,b,c){this.name=a;this.tracks=c;this.duration=void 0!==b?b:-1;this.uuid=L.generateUUID();0>this.duration&&this.resetDuration();}function qk(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return $c;case"vector":case"vector2":case"vector3":case"vector4":return ad;case"color":return Qe;case"quaternion":return le;case"bool":case"boolean":return Pe;case"string":return Se;}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+a);}function rk(a){if(void 0===a.type)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");var b=qk(a.type);if(void 0===a.times){var c=[],d=[];pa.flattenJSON(a.keys,c,d,"value");a.times=c;a.values=d;}return void 0!==b.parse?b.parse(a):new b(a.name,a.times,a.values,a.interpolation);}function pg(a,b,c){var d=this,e=!1,f=0,g=0,h=void 0,l=[];this.onStart=void 0;this.onLoad=a;this.onProgress=b;this.onError=c;this.itemStart=function(a){g++;if(!1===e&&void 0!==d.onStart)d.onStart(a,f,g);e=!0;};this.itemEnd=function(a){f++;if(void 0!==d.onProgress)d.onProgress(a,f,g);if(f===g&&(e=!1,void 0!==d.onLoad))d.onLoad();};this.itemError=function(a){if(void 0!==d.onError)d.onError(a);};this.resolveURL=function(a){return h?h(a):a;};this.setURLModifier=function(a){h=a;return this;};this.addHandler=function(a,b){l.push(a,b);return this;};this.removeHandler=function(a){a=l.indexOf(a);-1!==a&&l.splice(a,2);return this;};this.getHandler=function(a){for(var b=0,c=l.length;b<c;b+=2){var d=l[b+1];if(l[b].test(a))return d;}return null;};}function S(a){this.manager=void 0!==a?a:Zh;this.crossOrigin="anonymous";this.resourcePath=this.path="";}function Na(a){S.call(this,a);}function qg(a){S.call(this,a);}function rg(a){S.call(this,a);}function Te(a){S.call(this,a);}function bd(a){S.call(this,a);}function Ue(a){S.call(this,a);}function Ve(a){S.call(this,a);}function D(){this.type="Curve";this.arcLengthDivisions=200;}function Ja(a,b,c,d,e,f,g,h){D.call(this);this.type="EllipseCurve";this.aX=a||0;this.aY=b||0;this.xRadius=c||1;this.yRadius=d||1;this.aStartAngle=e||0;this.aEndAngle=f||2*Math.PI;this.aClockwise=g||!1;this.aRotation=h||0;}function cd(a,b,c,d,e,f){Ja.call(this,a,b,c,c,d,e,f);this.type="ArcCurve";}function sg(){var a=0,b=0,c=0,d=0;return{initCatmullRom:function initCatmullRom(e,f,g,h,l){e=l*(g-e);h=l*(h-f);a=f;b=e;c=-3*f+3*g-2*e-h;d=2*f-2*g+e+h;},initNonuniformCatmullRom:function initNonuniformCatmullRom(e,f,g,h,l,m,k){e=((f-e)/l-(g-e)/(l+m)+(g-f)/m)*m;h=((g-f)/m-(h-f)/(m+k)+(h-g)/k)*m;a=f;b=e;c=-3*f+3*g-2*e-h;d=2*f-2*g+e+h;},calc:function calc(e){var f=e*e;return a+b*e+c*f+d*f*e;}};}function ya(a,b,c,d){D.call(this);this.type="CatmullRomCurve3";this.points=a||[];this.closed=b||!1;this.curveType=c||"centripetal";this.tension=d||.5;}function $h(a,b,c,d,e){b=.5*(d-b);e=.5*(e-c);var f=a*a;return(2*c-2*d+b+e)*a*f+(-3*c+3*d-2*b-e)*f+b*a+c;}function me(a,b,c,d){var e=1-a;return e*e*b+2*(1-a)*a*c+a*a*d;}function ne(a,b,c,d,e){var f=1-a,g=1-a;return f*f*f*b+3*g*g*a*c+3*(1-a)*a*a*d+a*a*a*e;}function Sa(a,b,c,d){D.call(this);this.type="CubicBezierCurve";this.v0=a||new w();this.v1=b||new w();this.v2=c||new w();this.v3=d||new w();}function gb(a,b,c,d){D.call(this);this.type="CubicBezierCurve3";this.v0=a||new n();this.v1=b||new n();this.v2=c||new n();this.v3=d||new n();}function za(a,b){D.call(this);this.type="LineCurve";this.v1=a||new w();this.v2=b||new w();}function Ta(a,b){D.call(this);this.type="LineCurve3";this.v1=a||new n();this.v2=b||new n();}function Ua(a,b,c){D.call(this);this.type="QuadraticBezierCurve";this.v0=a||new w();this.v1=b||new w();this.v2=c||new w();}function hb(a,b,c){D.call(this);this.type="QuadraticBezierCurve3";this.v0=a||new n();this.v1=b||new n();this.v2=c||new n();}function Va(a){D.call(this);this.type="SplineCurve";this.points=a||[];}function rb(){D.call(this);this.type="CurvePath";this.curves=[];this.autoClose=!1;}function Wa(a){rb.call(this);this.type="Path";this.currentPoint=new w();a&&this.setFromPoints(a);}function Jb(a){Wa.call(this,a);this.uuid=L.generateUUID();this.type="Shape";this.holes=[];}function da(a,b){B.call(this);this.type="Light";this.color=new H(a);this.intensity=void 0!==b?b:1;this.receiveShadow=void 0;}function We(a,b,c){da.call(this,a,c);this.type="HemisphereLight";this.castShadow=void 0;this.position.copy(B.DefaultUp);this.updateMatrix();this.groundColor=new H(b);}function ib(a){this.camera=a;this.bias=0;this.radius=1;this.mapSize=new w(512,512);this.mapPass=this.map=null;this.matrix=new U();this._frustum=new Ed();this._frameExtents=new w(1,1);this._viewportCount=1;this._viewports=[new aa(0,0,1,1)];}function Xe(){ib.call(this,new na(50,1,.5,500));}function Ye(a,b,c,d,e,f){da.call(this,a,b);this.type="SpotLight";this.position.copy(B.DefaultUp);this.updateMatrix();this.target=new B();Object.defineProperty(this,"power",{get:function get(){return this.intensity*Math.PI;},set:function set(a){this.intensity=a/Math.PI;}});this.distance=void 0!==c?c:0;this.angle=void 0!==d?d:Math.PI/3;this.penumbra=void 0!==e?e:0;this.decay=void 0!==f?f:1;this.shadow=new Xe();}function tg(){ib.call(this,new na(90,1,.5,500));this._frameExtents=new w(4,2);this._viewportCount=6;this._viewports=[new aa(2,1,1,1),new aa(0,1,1,1),new aa(3,1,1,1),new aa(1,1,1,1),new aa(3,0,1,1),new aa(1,0,1,1)];this._cubeDirections=[new n(1,0,0),new n(-1,0,0),new n(0,0,1),new n(0,0,-1),new n(0,1,0),new n(0,-1,0)];this._cubeUps=[new n(0,1,0),new n(0,1,0),new n(0,1,0),new n(0,1,0),new n(0,0,1),new n(0,0,-1)];}function Ze(a,b,c,d){da.call(this,a,b);this.type="PointLight";Object.defineProperty(this,"power",{get:function get(){return 4*this.intensity*Math.PI;},set:function set(a){this.intensity=a/(4*Math.PI);}});this.distance=void 0!==c?c:0;this.decay=void 0!==d?d:1;this.shadow=new tg();}function oe(a,b,c,d,e,f){bb.call(this);this.type="OrthographicCamera";this.zoom=1;this.view=null;this.left=void 0!==a?a:-1;this.right=void 0!==b?b:1;this.top=void 0!==c?c:1;this.bottom=void 0!==d?d:-1;this.near=void 0!==e?e:.1;this.far=void 0!==f?f:2E3;this.updateProjectionMatrix();}function $e(){ib.call(this,new oe(-5,5,5,-5,.5,500));}function af(a,b){da.call(this,a,b);this.type="DirectionalLight";this.position.copy(B.DefaultUp);this.updateMatrix();this.target=new B();this.shadow=new $e();}function bf(a,b){da.call(this,a,b);this.type="AmbientLight";this.castShadow=void 0;}function cf(a,b,c,d){da.call(this,a,b);this.type="RectAreaLight";this.width=void 0!==c?c:10;this.height=void 0!==d?d:10;}function df(a){S.call(this,a);this.textures={};}function ef(){E.call(this);this.type="InstancedBufferGeometry";this.maxInstancedCount=void 0;}function ff(a,b,c,d){"number"===typeof c&&(d=c,c=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));O.call(this,a,b,c);this.meshPerAttribute=d||1;}function gf(a){S.call(this,a);}function hf(a){S.call(this,a);}function ug(a){"undefined"===typeof createImageBitmap&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported.");"undefined"===typeof fetch&&console.warn("THREE.ImageBitmapLoader: fetch() not supported.");S.call(this,a);this.options=void 0;}function vg(){this.type="ShapePath";this.color=new H();this.subPaths=[];this.currentPath=null;}function wg(a){this.type="Font";this.data=a;}function xg(a){S.call(this,a);}function jf(a){S.call(this,a);}function kf(){this.coefficients=[];for(var a=0;9>a;a++){this.coefficients.push(new n());}}function Xa(a,b){da.call(this,void 0,b);this.sh=void 0!==a?a:new kf();}function yg(a,b,c){Xa.call(this,void 0,c);a=new H().set(a);c=new H().set(b);b=new n(a.r,a.g,a.b);a=new n(c.r,c.g,c.b);c=Math.sqrt(Math.PI);var d=c*Math.sqrt(.75);this.sh.coefficients[0].copy(b).add(a).multiplyScalar(c);this.sh.coefficients[1].copy(b).sub(a).multiplyScalar(d);}function zg(a,b){Xa.call(this,void 0,b);a=new H().set(a);this.sh.coefficients[0].set(a.r,a.g,a.b).multiplyScalar(2*Math.sqrt(Math.PI));}function ai(){this.type="StereoCamera";this.aspect=1;this.eyeSep=.064;this.cameraL=new na();this.cameraL.layers.enable(1);this.cameraL.matrixAutoUpdate=!1;this.cameraR=new na();this.cameraR.layers.enable(2);this.cameraR.matrixAutoUpdate=!1;this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null};}function Ag(a){this.autoStart=void 0!==a?a:!0;this.elapsedTime=this.oldTime=this.startTime=0;this.running=!1;}function Bg(){B.call(this);this.type="AudioListener";this.context=Cg.getContext();this.gain=this.context.createGain();this.gain.connect(this.context.destination);this.filter=null;this.timeDelta=0;this._clock=new Ag();}function dd(a){B.call(this);this.type="Audio";this.listener=a;this.context=a.context;this.gain=this.context.createGain();this.gain.connect(a.getInput());this.autoplay=!1;this.buffer=null;this.detune=0;this.loop=!1;this.offset=this.startTime=0;this.duration=void 0;this.playbackRate=1;this.isPlaying=!1;this.hasPlaybackControl=!0;this.sourceType="empty";this.filters=[];}function Dg(a){dd.call(this,a);this.panner=this.context.createPanner();this.panner.panningModel="HRTF";this.panner.connect(this.gain);}function Eg(a,b){this.analyser=a.context.createAnalyser();this.analyser.fftSize=void 0!==b?b:2048;this.data=new Uint8Array(this.analyser.frequencyBinCount);a.getOutput().connect(this.analyser);}function Fg(a,b,c){this.binding=a;this.valueSize=c;a=Float64Array;switch(b){case"quaternion":b=this._slerp;break;case"string":case"bool":a=Array;b=this._select;break;default:b=this._lerp;}this.buffer=new a(4*c);this._mixBufferRegion=b;this.referenceCount=this.useCount=this.cumulativeWeight=0;}function bi(a,b,c){c=c||Aa.parseTrackName(b);this._targetGroup=a;this._bindings=a.subscribe_(b,c);}function Aa(a,b,c){this.path=b;this.parsedPath=c||Aa.parseTrackName(b);this.node=Aa.findNode(a,this.parsedPath.nodeName)||a;this.rootNode=a;}function ci(){this.uuid=L.generateUUID();this._objects=Array.prototype.slice.call(arguments);this.nCachedObjects_=0;var a={};this._indicesByUUID=a;for(var b=0,c=arguments.length;b!==c;++b){a[arguments[b].uuid]=b;}this._paths=[];this._parsedPaths=[];this._bindings=[];this._bindingsIndicesByPath={};var d=this;this.stats={objects:{get total(){return d._objects.length;},get inUse(){return this.total-d.nCachedObjects_;}},get bindingsPerObject(){return d._bindings.length;}};}function di(a,b,c){this._mixer=a;this._clip=b;this._localRoot=c||null;a=b.tracks;b=a.length;c=Array(b);for(var d={endingStart:2400,endingEnd:2400},e=0;e!==b;++e){var f=a[e].createInterpolant(null);c[e]=f;f.settings=d;}this._interpolantSettings=d;this._interpolants=c;this._propertyBindings=Array(b);this._weightInterpolant=this._timeScaleInterpolant=this._byClipCacheIndex=this._cacheIndex=null;this.loop=2201;this._loopCount=-1;this._startTime=null;this.time=0;this._effectiveWeight=this.weight=this._effectiveTimeScale=this.timeScale=1;this.repetitions=Infinity;this.paused=!1;this.enabled=!0;this.clampWhenFinished=!1;this.zeroSlopeAtEnd=this.zeroSlopeAtStart=!0;}function Gg(a){this._root=a;this._initMemoryManager();this.time=this._accuIndex=0;this.timeScale=1;}function lf(a,b){"string"===typeof a&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),a=b);this.value=a;}function Hg(a,b,c){Gb.call(this,a,b);this.meshPerAttribute=c||1;}function ei(a,b,c,d){this.ray=new Sb(a,b);this.near=c||0;this.far=d||Infinity;this.camera=null;this.params={Mesh:{},Line:{},LOD:{},Points:{threshold:1},Sprite:{}};Object.defineProperties(this.params,{PointCloud:{get:function get(){console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points.");return this.Points;}}});}function fi(a,b){return a.distance-b.distance;}function Ig(a,b,c,d){if(!1!==a.visible&&(a.raycast(b,c),!0===d)){a=a.children;d=0;for(var e=a.length;d<e;d++){Ig(a[d],b,c,!0);}}}function gi(a,b,c){this.radius=void 0!==a?a:1;this.phi=void 0!==b?b:0;this.theta=void 0!==c?c:0;return this;}function hi(a,b,c){this.radius=void 0!==a?a:1;this.theta=void 0!==b?b:0;this.y=void 0!==c?c:0;return this;}function Jg(a,b){this.min=void 0!==a?a:new w(Infinity,Infinity);this.max=void 0!==b?b:new w(-Infinity,-Infinity);}function Kg(a,b){this.start=void 0!==a?a:new n();this.end=void 0!==b?b:new n();}function pe(a){B.call(this);this.material=a;this.render=function(){};}function qe(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;a=void 0!==c?c:16711680;d=void 0!==d?d:1;b=0;(c=this.object.geometry)&&c.isGeometry?b=3*c.faces.length:c&&c.isBufferGeometry&&(b=c.attributes.normal.count);c=new E();b=new A(6*b,3);c.addAttribute("position",b);ca.call(this,c,new Q({color:a,linewidth:d}));this.matrixAutoUpdate=!1;this.update();}function ed(a,b){B.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.color=b;a=new E();b=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(var c=0,d=1;32>c;c++,d++){var e=c/32*Math.PI*2,f=d/32*Math.PI*2;b.push(Math.cos(e),Math.sin(e),1,Math.cos(f),Math.sin(f),1);}a.addAttribute("position",new A(b,3));b=new Q({fog:!1});this.cone=new ca(a,b);this.add(this.cone);this.update();}function ii(a){var b=[];a&&a.isBone&&b.push(a);for(var c=0;c<a.children.length;c++){b.push.apply(b,ii(a.children[c]));}return b;}function fd(a){for(var b=ii(a),c=new E(),d=[],e=[],f=new H(0,0,1),g=new H(0,1,0),h=0;h<b.length;h++){var l=b[h];l.parent&&l.parent.isBone&&(d.push(0,0,0),d.push(0,0,0),e.push(f.r,f.g,f.b),e.push(g.r,g.g,g.b));}c.addAttribute("position",new A(d,3));c.addAttribute("color",new A(e,3));d=new Q({vertexColors:2,depthTest:!1,depthWrite:!1,transparent:!0});ca.call(this,c,d);this.root=a;this.bones=b;this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;}function gd(a,b,c){this.light=a;this.light.updateMatrixWorld();this.color=c;a=new Ib(b,4,2);b=new Ga({wireframe:!0,fog:!1});ja.call(this,a,b);this.matrix=this.light.matrixWorld;this.matrixAutoUpdate=!1;this.update();}function hd(a,b){this.type="RectAreaLightHelper";this.light=a;this.color=b;a=new E();a.addAttribute("position",new A([1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],3));a.computeBoundingSphere();b=new Q({fog:!1});xa.call(this,a,b);a=new E();a.addAttribute("position",new A([1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],3));a.computeBoundingSphere();this.add(new ja(a,new Ga({side:1,fog:!1})));this.update();}function id(a,b,c){B.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.color=c;a=new cc(b);a.rotateY(.5*Math.PI);this.material=new Ga({wireframe:!0,fog:!1});void 0===this.color&&(this.material.vertexColors=2);b=a.getAttribute("position");b=new Float32Array(3*b.count);a.addAttribute("color",new O(b,3));this.add(new ja(a,this.material));this.update();}function jd(a,b){this.lightProbe=a;this.size=b;a=new ma({defines:{GAMMA_OUTPUT:""},uniforms:{sh:{value:this.lightProbe.sh.coefficients},intensity:{value:this.lightProbe.intensity}},vertexShader:"varying vec3 vNormal;\nvoid main() {\n\tvNormal = normalize( normalMatrix * normal );\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader:"#define RECIPROCAL_PI 0.318309886\nvec3 inverseTransformDirection( in vec3 normal, in mat4 matrix ) {\n\t// matrix is assumed to be orthogonal\n\treturn normalize( ( vec4( normal, 0.0 ) * matrix ).xyz );\n}\nvec3 linearToOutput( in vec3 a ) {\n\t#ifdef GAMMA_OUTPUT\n\t\treturn pow( a, vec3( 1.0 / float( GAMMA_FACTOR ) ) );\n\t#else\n\t\treturn a;\n\t#endif\n}\n// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\t// normal is assumed to have unit length\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\t// band 0\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\t// band 1\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\t// band 2\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nuniform vec3 sh[ 9 ]; // sh coefficients\nuniform float intensity; // light probe intensity\nvarying vec3 vNormal;\nvoid main() {\n\tvec3 normal = normalize( vNormal );\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, sh );\n\tvec3 outgoingLight = RECIPROCAL_PI * irradiance * intensity;\n\toutgoingLight = linearToOutput( outgoingLight );\n\tgl_FragColor = vec4( outgoingLight, 1.0 );\n}"});b=new Ib(1,32,16);ja.call(this,b,a);this.onBeforeRender();}function mf(a,b,c,d){a=a||10;b=b||10;c=new H(void 0!==c?c:4473924);d=new H(void 0!==d?d:8947848);var e=b/2,f=a/b,g=a/2;a=[];for(var h=[],l=0,m=0,k=-g;l<=b;l++,k+=f){a.push(-g,0,k,g,0,k);a.push(k,0,-g,k,0,g);var n=l===e?c:d;n.toArray(h,m);m+=3;n.toArray(h,m);m+=3;n.toArray(h,m);m+=3;n.toArray(h,m);m+=3;}b=new E();b.addAttribute("position",new A(a,3));b.addAttribute("color",new A(h,3));c=new Q({vertexColors:2});ca.call(this,b,c);}function nf(a,b,c,d,e,f){a=a||10;b=b||16;c=c||8;d=d||64;e=new H(void 0!==e?e:4473924);f=new H(void 0!==f?f:8947848);var g=[],h=[],l;for(l=0;l<=b;l++){var m=l/b*2*Math.PI;var k=Math.sin(m)*a;m=Math.cos(m)*a;g.push(0,0,0);g.push(k,0,m);var n=l&1?e:f;h.push(n.r,n.g,n.b);h.push(n.r,n.g,n.b);}for(l=0;l<=c;l++){n=l&1?e:f;var t=a-a/c*l;for(b=0;b<d;b++){m=b/d*2*Math.PI,k=Math.sin(m)*t,m=Math.cos(m)*t,g.push(k,0,m),h.push(n.r,n.g,n.b),m=(b+1)/d*2*Math.PI,k=Math.sin(m)*t,m=Math.cos(m)*t,g.push(k,0,m),h.push(n.r,n.g,n.b);}}a=new E();a.addAttribute("position",new A(g,3));a.addAttribute("color",new A(h,3));g=new Q({vertexColors:2});ca.call(this,a,g);}function kd(a,b,c,d){this.audio=a;this.range=b||1;this.divisionsInnerAngle=c||16;this.divisionsOuterAngle=d||2;a=new E();b=new Float32Array(3*(3*(this.divisionsInnerAngle+2*this.divisionsOuterAngle)+3));a.addAttribute("position",new O(b,3));b=new Q({color:65280});c=new Q({color:16776960});xa.call(this,a,[c,b]);this.update();}function re(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;a=void 0!==c?c:16776960;d=void 0!==d?d:1;b=0;(c=this.object.geometry)&&c.isGeometry?b=c.faces.length:console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");c=new E();b=new A(6*b,3);c.addAttribute("position",b);ca.call(this,c,new Q({color:a,linewidth:d}));this.matrixAutoUpdate=!1;this.update();}function ld(a,b,c){B.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.color=c;void 0===b&&(b=1);a=new E();a.addAttribute("position",new A([-b,b,0,b,b,0,b,-b,0,-b,-b,0,-b,b,0],3));b=new Q({fog:!1});this.lightPlane=new xa(a,b);this.add(this.lightPlane);a=new E();a.addAttribute("position",new A([0,0,0,0,0,1],3));this.targetLine=new xa(a,b);this.add(this.targetLine);this.update();}function se(a){function b(a,b,d){c(a,d);c(b,d);}function c(a,b){f.push(0,0,0);g.push(b.r,b.g,b.b);void 0===h[a]&&(h[a]=[]);h[a].push(f.length/3-1);}var d=new E(),e=new Q({color:16777215,vertexColors:1}),f=[],g=[],h={},l=new H(16755200),m=new H(16711680),k=new H(43775),n=new H(16777215),t=new H(3355443);b("n1","n2",l);b("n2","n4",l);b("n4","n3",l);b("n3","n1",l);b("f1","f2",l);b("f2","f4",l);b("f4","f3",l);b("f3","f1",l);b("n1","f1",l);b("n2","f2",l);b("n3","f3",l);b("n4","f4",l);b("p","n1",m);b("p","n2",m);b("p","n3",m);b("p","n4",m);b("u1","u2",k);b("u2","u3",k);b("u3","u1",k);b("c","t",n);b("p","c",t);b("cn1","cn2",t);b("cn3","cn4",t);b("cf1","cf2",t);b("cf3","cf4",t);d.addAttribute("position",new A(f,3));d.addAttribute("color",new A(g,3));ca.call(this,d,e);this.camera=a;this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.pointMap=h;this.update();}function qa(a,b,c,d,e,f,g){of.set(e,f,g).unproject(d);a=b[a];if(void 0!==a)for(c=c.getAttribute("position"),b=0,d=a.length;b<d;b++){c.setXYZ(a[b],of.x,of.y,of.z);}}function sb(a,b){this.object=a;void 0===b&&(b=16776960);a=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]);var c=new Float32Array(24),d=new E();d.setIndex(new O(a,1));d.addAttribute("position",new O(c,3));ca.call(this,d,new Q({color:b}));this.matrixAutoUpdate=!1;this.update();}function te(a,b){this.type="Box3Helper";this.box=a;b=b||16776960;a=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]);var c=new E();c.setIndex(new O(a,1));c.addAttribute("position",new A([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],3));ca.call(this,c,new Q({color:b}));this.geometry.computeBoundingSphere();}function ue(a,b,c){this.type="PlaneHelper";this.plane=a;this.size=void 0===b?1:b;a=void 0!==c?c:16776960;b=new E();b.addAttribute("position",new A([1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],3));b.computeBoundingSphere();xa.call(this,b,new Q({color:a}));b=new E();b.addAttribute("position",new A([1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],3));b.computeBoundingSphere();this.add(new ja(b,new Ga({color:a,opacity:.2,transparent:!0,depthWrite:!1})));}function tb(a,b,c,d,e,f){B.call(this);void 0===a&&(a=new n(0,0,1));void 0===b&&(b=new n(0,0,0));void 0===c&&(c=1);void 0===d&&(d=16776960);void 0===e&&(e=.2*c);void 0===f&&(f=.2*e);void 0===pf&&(pf=new E(),pf.addAttribute("position",new A([0,0,0,0,1,0],3)),Lg=new qb(0,.5,1,5,1),Lg.translate(0,-.5,0));this.position.copy(b);this.line=new xa(pf,new Q({color:d}));this.line.matrixAutoUpdate=!1;this.add(this.line);this.cone=new ja(Lg,new Ga({color:d}));this.cone.matrixAutoUpdate=!1;this.add(this.cone);this.setDirection(a);this.setLength(c,e,f);}function ve(a){a=a||1;var b=[0,0,0,a,0,0,0,0,0,0,a,0,0,0,0,0,0,a];a=new E();a.addAttribute("position",new A(b,3));a.addAttribute("color",new A([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],3));b=new Q({vertexColors:2});ca.call(this,a,b);}function ji(a){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");ya.call(this,a);this.type="catmullrom";this.closed=!0;}function ki(a){console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");ya.call(this,a);this.type="catmullrom";}function Mg(a){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead.");ya.call(this,a);this.type="catmullrom";}void 0===Number.EPSILON&&(Number.EPSILON=Math.pow(2,-52));void 0===Number.isInteger&&(Number.isInteger=function(a){return"number"===typeof a&&isFinite(a)&&Math.floor(a)===a;});void 0===Math.sign&&(Math.sign=function(a){return 0>a?-1:0<a?1:+a;});!1==="name"in Function.prototype&&Object.defineProperty(Function.prototype,"name",{get:function get(){return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1];}});void 0===Object.assign&&(Object.assign=function(a){if(void 0===a||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var d=arguments[c];if(void 0!==d&&null!==d)for(var e in d){Object.prototype.hasOwnProperty.call(d,e)&&(b[e]=d[e]);}}return b;});Object.assign(Ba.prototype,{addEventListener:function addEventListener(a,b){void 0===this._listeners&&(this._listeners={});var c=this._listeners;void 0===c[a]&&(c[a]=[]);-1===c[a].indexOf(b)&&c[a].push(b);},hasEventListener:function hasEventListener(a,b){if(void 0===this._listeners)return!1;var c=this._listeners;return void 0!==c[a]&&-1!==c[a].indexOf(b);},removeEventListener:function removeEventListener(a,b){void 0!==this._listeners&&(a=this._listeners[a],void 0!==a&&(b=a.indexOf(b),-1!==b&&a.splice(b,1)));},dispatchEvent:function dispatchEvent(a){if(void 0!==this._listeners){var b=this._listeners[a.type];if(void 0!==b){a.target=this;b=b.slice(0);for(var c=0,d=b.length;c<d;c++){b[c].call(this,a);}}}}});for(var va=[],we=0;256>we;we++){va[we]=(16>we?"0":"")+we.toString(16);}var L={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function generateUUID(){var a=4294967295*Math.random()|0,b=4294967295*Math.random()|0,c=4294967295*Math.random()|0,d=4294967295*Math.random()|0;return(va[a&255]+va[a>>8&255]+va[a>>16&255]+va[a>>24&255]+"-"+va[b&255]+va[b>>8&255]+"-"+va[b>>16&15|64]+va[b>>24&255]+"-"+va[c&63|128]+va[c>>8&255]+"-"+va[c>>16&255]+va[c>>24&255]+va[d&255]+va[d>>8&255]+va[d>>16&255]+va[d>>24&255]).toUpperCase();},clamp:function clamp(a,b,c){return Math.max(b,Math.min(c,a));},euclideanModulo:function euclideanModulo(a,b){return(a%b+b)%b;},mapLinear:function mapLinear(a,b,c,d,e){return d+(a-b)*(e-d)/(c-b);},lerp:function lerp(a,b,c){return(1-c)*a+c*b;},smoothstep:function smoothstep(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*(3-2*a);},smootherstep:function smootherstep(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*a*(a*(6*a-15)+10);},randInt:function randInt(a,b){return a+Math.floor(Math.random()*(b-a+1));},randFloat:function randFloat(a,b){return a+Math.random()*(b-a);},randFloatSpread:function randFloatSpread(a){return a*(.5-Math.random());},degToRad:function degToRad(a){return a*L.DEG2RAD;},radToDeg:function radToDeg(a){return a*L.RAD2DEG;},isPowerOfTwo:function isPowerOfTwo(a){return 0===(a&a-1)&&0!==a;},ceilPowerOfTwo:function ceilPowerOfTwo(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2));},floorPowerOfTwo:function floorPowerOfTwo(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2));}};Object.defineProperties(w.prototype,{width:{get:function get(){return this.x;},set:function set(a){this.x=a;}},height:{get:function get(){return this.y;},set:function set(a){this.y=a;}}});Object.assign(w.prototype,{isVector2:!0,set:function set(a,b){this.x=a;this.y=b;return this;},setScalar:function setScalar(a){this.y=this.x=a;return this;},setX:function setX(a){this.x=a;return this;},setY:function setY(a){this.y=a;return this;},setComponent:function setComponent(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;default:throw Error("index is out of range: "+a);}return this;},getComponent:function getComponent(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+a);}},clone:function clone(){return new this.constructor(this.x,this.y);},copy:function copy(a){this.x=a.x;this.y=a.y;return this;},add:function add(a,b){if(void 0!==b)return console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;return this;},addScalar:function addScalar(a){this.x+=a;this.y+=a;return this;},addVectors:function addVectors(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this;},addScaledVector:function addScaledVector(a,b){this.x+=a.x*b;this.y+=a.y*b;return this;},sub:function sub(a,b){if(void 0!==b)return console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;return this;},subScalar:function subScalar(a){this.x-=a;this.y-=a;return this;},subVectors:function subVectors(a,b){this.x=a.x-b.x;this.y=a.y-b.y;return this;},multiply:function multiply(a){this.x*=a.x;this.y*=a.y;return this;},multiplyScalar:function multiplyScalar(a){this.x*=a;this.y*=a;return this;},divide:function divide(a){this.x/=a.x;this.y/=a.y;return this;},divideScalar:function divideScalar(a){return this.multiplyScalar(1/a);},applyMatrix3:function applyMatrix3(a){var b=this.x,c=this.y;a=a.elements;this.x=a[0]*b+a[3]*c+a[6];this.y=a[1]*b+a[4]*c+a[7];return this;},min:function min(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);return this;},max:function max(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);return this;},clamp:function clamp(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));return this;},clampScalar:function clampScalar(a,b){this.x=Math.max(a,Math.min(b,this.x));this.y=Math.max(a,Math.min(b,this.y));return this;},clampLength:function clampLength(a,b){var c=this.length();return this.divideScalar(c||1).multiplyScalar(Math.max(a,Math.min(b,c)));},floor:function floor(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this;},ceil:function ceil(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this;},round:function round(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this;},roundToZero:function roundToZero(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);return this;},negate:function negate(){this.x=-this.x;this.y=-this.y;return this;},dot:function dot(a){return this.x*a.x+this.y*a.y;},cross:function cross(a){return this.x*a.y-this.y*a.x;},lengthSq:function lengthSq(){return this.x*this.x+this.y*this.y;},length:function length(){return Math.sqrt(this.x*this.x+this.y*this.y);},manhattanLength:function manhattanLength(){return Math.abs(this.x)+Math.abs(this.y);},normalize:function normalize(){return this.divideScalar(this.length()||1);},angle:function angle(){var a=Math.atan2(this.y,this.x);0>a&&(a+=2*Math.PI);return a;},distanceTo:function distanceTo(a){return Math.sqrt(this.distanceToSquared(a));},distanceToSquared:function distanceToSquared(a){var b=this.x-a.x;a=this.y-a.y;return b*b+a*a;},manhattanDistanceTo:function manhattanDistanceTo(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y);},setLength:function setLength(a){return this.normalize().multiplyScalar(a);},lerp:function lerp(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;return this;},lerpVectors:function lerpVectors(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a);},equals:function equals(a){return a.x===this.x&&a.y===this.y;},fromArray:function fromArray(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];return this;},toArray:function toArray(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;return a;},fromBufferAttribute:function fromBufferAttribute(a,b,c){void 0!==c&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute().");this.x=a.getX(b);this.y=a.getY(b);return this;},rotateAround:function rotateAround(a,b){var c=Math.cos(b);b=Math.sin(b);var d=this.x-a.x,e=this.y-a.y;this.x=d*c-e*b+a.x;this.y=d*b+e*c+a.y;return this;}});Object.assign(ua,{slerp:function slerp(a,b,c,d){return c.copy(a).slerp(b,d);},slerpFlat:function slerpFlat(a,b,c,d,e,f,g){var h=c[d+0],l=c[d+1],m=c[d+2];c=c[d+3];d=e[f+0];var k=e[f+1],n=e[f+2];e=e[f+3];if(c!==e||h!==d||l!==k||m!==n){f=1-g;var t=h*d+l*k+m*n+c*e,r=0<=t?1:-1,p=1-t*t;p>Number.EPSILON&&(p=Math.sqrt(p),t=Math.atan2(p,t*r),f=Math.sin(f*t)/p,g=Math.sin(g*t)/p);r*=g;h=h*f+d*r;l=l*f+k*r;m=m*f+n*r;c=c*f+e*r;f===1-g&&(g=1/Math.sqrt(h*h+l*l+m*m+c*c),h*=g,l*=g,m*=g,c*=g);}a[b]=h;a[b+1]=l;a[b+2]=m;a[b+3]=c;}});Object.defineProperties(ua.prototype,{x:{get:function get(){return this._x;},set:function set(a){this._x=a;this._onChangeCallback();}},y:{get:function get(){return this._y;},set:function set(a){this._y=a;this._onChangeCallback();}},z:{get:function get(){return this._z;},set:function set(a){this._z=a;this._onChangeCallback();}},w:{get:function get(){return this._w;},set:function set(a){this._w=a;this._onChangeCallback();}}});Object.assign(ua.prototype,{isQuaternion:!0,set:function set(a,b,c,d){this._x=a;this._y=b;this._z=c;this._w=d;this._onChangeCallback();return this;},clone:function clone(){return new this.constructor(this._x,this._y,this._z,this._w);},copy:function copy(a){this._x=a.x;this._y=a.y;this._z=a.z;this._w=a.w;this._onChangeCallback();return this;},setFromEuler:function setFromEuler(a,b){if(!a||!a.isEuler)throw Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");var c=a._x,d=a._y,e=a._z;a=a.order;var f=Math.cos,g=Math.sin,h=f(c/2),l=f(d/2);f=f(e/2);c=g(c/2);d=g(d/2);e=g(e/2);"XYZ"===a?(this._x=c*l*f+h*d*e,this._y=h*d*f-c*l*e,this._z=h*l*e+c*d*f,this._w=h*l*f-c*d*e):"YXZ"===a?(this._x=c*l*f+h*d*e,this._y=h*d*f-c*l*e,this._z=h*l*e-c*d*f,this._w=h*l*f+c*d*e):"ZXY"===a?(this._x=c*l*f-h*d*e,this._y=h*d*f+c*l*e,this._z=h*l*e+c*d*f,this._w=h*l*f-c*d*e):"ZYX"===a?(this._x=c*l*f-h*d*e,this._y=h*d*f+c*l*e,this._z=h*l*e-c*d*f,this._w=h*l*f+c*d*e):"YZX"===a?(this._x=c*l*f+h*d*e,this._y=h*d*f+c*l*e,this._z=h*l*e-c*d*f,this._w=h*l*f-c*d*e):"XZY"===a&&(this._x=c*l*f-h*d*e,this._y=h*d*f-c*l*e,this._z=h*l*e+c*d*f,this._w=h*l*f+c*d*e);!1!==b&&this._onChangeCallback();return this;},setFromAxisAngle:function setFromAxisAngle(a,b){b/=2;var c=Math.sin(b);this._x=a.x*c;this._y=a.y*c;this._z=a.z*c;this._w=Math.cos(b);this._onChangeCallback();return this;},setFromRotationMatrix:function setFromRotationMatrix(a){var b=a.elements,c=b[0];a=b[4];var d=b[8],e=b[1],f=b[5],g=b[9],h=b[2],l=b[6];b=b[10];var m=c+f+b;0<m?(c=.5/Math.sqrt(m+1),this._w=.25/c,this._x=(l-g)*c,this._y=(d-h)*c,this._z=(e-a)*c):c>f&&c>b?(c=2*Math.sqrt(1+c-f-b),this._w=(l-g)/c,this._x=.25*c,this._y=(a+e)/c,this._z=(d+h)/c):f>b?(c=2*Math.sqrt(1+f-c-b),this._w=(d-h)/c,this._x=(a+e)/c,this._y=.25*c,this._z=(g+l)/c):(c=2*Math.sqrt(1+b-c-f),this._w=(e-a)/c,this._x=(d+h)/c,this._y=(g+l)/c,this._z=.25*c);this._onChangeCallback();return this;},setFromUnitVectors:function setFromUnitVectors(a,b){var c=a.dot(b)+1;1E-6>c?(c=0,Math.abs(a.x)>Math.abs(a.z)?(this._x=-a.y,this._y=a.x,this._z=0):(this._x=0,this._y=-a.z,this._z=a.y)):(this._x=a.y*b.z-a.z*b.y,this._y=a.z*b.x-a.x*b.z,this._z=a.x*b.y-a.y*b.x);this._w=c;return this.normalize();},angleTo:function angleTo(a){return 2*Math.acos(Math.abs(L.clamp(this.dot(a),-1,1)));},rotateTowards:function rotateTowards(a,b){var c=this.angleTo(a);if(0===c)return this;this.slerp(a,Math.min(1,b/c));return this;},inverse:function inverse(){return this.conjugate();},conjugate:function conjugate(){this._x*=-1;this._y*=-1;this._z*=-1;this._onChangeCallback();return this;},dot:function dot(a){return this._x*a._x+this._y*a._y+this._z*a._z+this._w*a._w;},lengthSq:function lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w;},length:function length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w);},normalize:function normalize(){var a=this.length();0===a?(this._z=this._y=this._x=0,this._w=1):(a=1/a,this._x*=a,this._y*=a,this._z*=a,this._w*=a);this._onChangeCallback();return this;},multiply:function multiply(a,b){return void 0!==b?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(a,b)):this.multiplyQuaternions(this,a);},premultiply:function premultiply(a){return this.multiplyQuaternions(a,this);},multiplyQuaternions:function multiplyQuaternions(a,b){var c=a._x,d=a._y,e=a._z;a=a._w;var f=b._x,g=b._y,h=b._z;b=b._w;this._x=c*b+a*f+d*h-e*g;this._y=d*b+a*g+e*f-c*h;this._z=e*b+a*h+c*g-d*f;this._w=a*b-c*f-d*g-e*h;this._onChangeCallback();return this;},slerp:function slerp(a,b){if(0===b)return this;if(1===b)return this.copy(a);var c=this._x,d=this._y,e=this._z,f=this._w,g=f*a._w+c*a._x+d*a._y+e*a._z;0>g?(this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=-a._z,g=-g):this.copy(a);if(1<=g)return this._w=f,this._x=c,this._y=d,this._z=e,this;a=1-g*g;if(a<=Number.EPSILON)return g=1-b,this._w=g*f+b*this._w,this._x=g*c+b*this._x,this._y=g*d+b*this._y,this._z=g*e+b*this._z,this.normalize(),this._onChangeCallback(),this;a=Math.sqrt(a);var h=Math.atan2(a,g);g=Math.sin((1-b)*h)/a;b=Math.sin(b*h)/a;this._w=f*g+this._w*b;this._x=c*g+this._x*b;this._y=d*g+this._y*b;this._z=e*g+this._z*b;this._onChangeCallback();return this;},equals:function equals(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w;},fromArray:function fromArray(a,b){void 0===b&&(b=0);this._x=a[b];this._y=a[b+1];this._z=a[b+2];this._w=a[b+3];this._onChangeCallback();return this;},toArray:function toArray(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+3]=this._w;return a;},_onChange:function _onChange(a){this._onChangeCallback=a;return this;},_onChangeCallback:function _onChangeCallback(){}});var Ng=new n(),li=new ua();Object.assign(n.prototype,{isVector3:!0,set:function set(a,b,c){this.x=a;this.y=b;this.z=c;return this;},setScalar:function setScalar(a){this.z=this.y=this.x=a;return this;},setX:function setX(a){this.x=a;return this;},setY:function setY(a){this.y=a;return this;},setZ:function setZ(a){this.z=a;return this;},setComponent:function setComponent(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;default:throw Error("index is out of range: "+a);}return this;},getComponent:function getComponent(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+a);}},clone:function clone(){return new this.constructor(this.x,this.y,this.z);},copy:function copy(a){this.x=a.x;this.y=a.y;this.z=a.z;return this;},add:function add(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;return this;},addScalar:function addScalar(a){this.x+=a;this.y+=a;this.z+=a;return this;},addVectors:function addVectors(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;return this;},addScaledVector:function addScaledVector(a,b){this.x+=a.x*b;this.y+=a.y*b;this.z+=a.z*b;return this;},sub:function sub(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;return this;},subScalar:function subScalar(a){this.x-=a;this.y-=a;this.z-=a;return this;},subVectors:function subVectors(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;return this;},multiply:function multiply(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(a,b);this.x*=a.x;this.y*=a.y;this.z*=a.z;return this;},multiplyScalar:function multiplyScalar(a){this.x*=a;this.y*=a;this.z*=a;return this;},multiplyVectors:function multiplyVectors(a,b){this.x=a.x*b.x;this.y=a.y*b.y;this.z=a.z*b.z;return this;},applyEuler:function applyEuler(a){a&&a.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.");return this.applyQuaternion(li.setFromEuler(a));},applyAxisAngle:function applyAxisAngle(a,b){return this.applyQuaternion(li.setFromAxisAngle(a,b));},applyMatrix3:function applyMatrix3(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[3]*c+a[6]*d;this.y=a[1]*b+a[4]*c+a[7]*d;this.z=a[2]*b+a[5]*c+a[8]*d;return this;},applyMatrix4:function applyMatrix4(a){var b=this.x,c=this.y,d=this.z;a=a.elements;var e=1/(a[3]*b+a[7]*c+a[11]*d+a[15]);this.x=(a[0]*b+a[4]*c+a[8]*d+a[12])*e;this.y=(a[1]*b+a[5]*c+a[9]*d+a[13])*e;this.z=(a[2]*b+a[6]*c+a[10]*d+a[14])*e;return this;},applyQuaternion:function applyQuaternion(a){var b=this.x,c=this.y,d=this.z,e=a.x,f=a.y,g=a.z;a=a.w;var h=a*b+f*d-g*c,l=a*c+g*b-e*d,m=a*d+e*c-f*b;b=-e*b-f*c-g*d;this.x=h*a+b*-e+l*-g-m*-f;this.y=l*a+b*-f+m*-e-h*-g;this.z=m*a+b*-g+h*-f-l*-e;return this;},project:function project(a){return this.applyMatrix4(a.matrixWorldInverse).applyMatrix4(a.projectionMatrix);},unproject:function unproject(a){return this.applyMatrix4(a.projectionMatrixInverse).applyMatrix4(a.matrixWorld);},transformDirection:function transformDirection(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d;this.y=a[1]*b+a[5]*c+a[9]*d;this.z=a[2]*b+a[6]*c+a[10]*d;return this.normalize();},divide:function divide(a){this.x/=a.x;this.y/=a.y;this.z/=a.z;return this;},divideScalar:function divideScalar(a){return this.multiplyScalar(1/a);},min:function min(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);this.z=Math.min(this.z,a.z);return this;},max:function max(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);this.z=Math.max(this.z,a.z);return this;},clamp:function clamp(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));this.z=Math.max(a.z,Math.min(b.z,this.z));return this;},clampScalar:function clampScalar(a,b){this.x=Math.max(a,Math.min(b,this.x));this.y=Math.max(a,Math.min(b,this.y));this.z=Math.max(a,Math.min(b,this.z));return this;},clampLength:function clampLength(a,b){var c=this.length();return this.divideScalar(c||1).multiplyScalar(Math.max(a,Math.min(b,c)));},floor:function floor(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);return this;},ceil:function ceil(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);return this;},round:function round(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);return this;},roundToZero:function roundToZero(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);return this;},negate:function negate(){this.x=-this.x;this.y=-this.y;this.z=-this.z;return this;},dot:function dot(a){return this.x*a.x+this.y*a.y+this.z*a.z;},lengthSq:function lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z;},length:function length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);},manhattanLength:function manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z);},normalize:function normalize(){return this.divideScalar(this.length()||1);},setLength:function setLength(a){return this.normalize().multiplyScalar(a);},lerp:function lerp(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;return this;},lerpVectors:function lerpVectors(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a);},cross:function cross(a,b){return void 0!==b?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(a,b)):this.crossVectors(this,a);},crossVectors:function crossVectors(a,b){var c=a.x,d=a.y;a=a.z;var e=b.x,f=b.y;b=b.z;this.x=d*b-a*f;this.y=a*e-c*b;this.z=c*f-d*e;return this;},projectOnVector:function projectOnVector(a){var b=a.dot(this)/a.lengthSq();return this.copy(a).multiplyScalar(b);},projectOnPlane:function projectOnPlane(a){Ng.copy(this).projectOnVector(a);return this.sub(Ng);},reflect:function reflect(a){return this.sub(Ng.copy(a).multiplyScalar(2*this.dot(a)));},angleTo:function angleTo(a){var b=Math.sqrt(this.lengthSq()*a.lengthSq());0===b&&console.error("THREE.Vector3: angleTo() can't handle zero length vectors.");a=this.dot(a)/b;return Math.acos(L.clamp(a,-1,1));},distanceTo:function distanceTo(a){return Math.sqrt(this.distanceToSquared(a));},distanceToSquared:function distanceToSquared(a){var b=this.x-a.x,c=this.y-a.y;a=this.z-a.z;return b*b+c*c+a*a;},manhattanDistanceTo:function manhattanDistanceTo(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)+Math.abs(this.z-a.z);},setFromSpherical:function setFromSpherical(a){return this.setFromSphericalCoords(a.radius,a.phi,a.theta);},setFromSphericalCoords:function setFromSphericalCoords(a,b,c){var d=Math.sin(b)*a;this.x=d*Math.sin(c);this.y=Math.cos(b)*a;this.z=d*Math.cos(c);return this;},setFromCylindrical:function setFromCylindrical(a){return this.setFromCylindricalCoords(a.radius,a.theta,a.y);},setFromCylindricalCoords:function setFromCylindricalCoords(a,b,c){this.x=a*Math.sin(b);this.y=c;this.z=a*Math.cos(b);return this;},setFromMatrixPosition:function setFromMatrixPosition(a){a=a.elements;this.x=a[12];this.y=a[13];this.z=a[14];return this;},setFromMatrixScale:function setFromMatrixScale(a){var b=this.setFromMatrixColumn(a,0).length(),c=this.setFromMatrixColumn(a,1).length();a=this.setFromMatrixColumn(a,2).length();this.x=b;this.y=c;this.z=a;return this;},setFromMatrixColumn:function setFromMatrixColumn(a,b){return this.fromArray(a.elements,4*b);},equals:function equals(a){return a.x===this.x&&a.y===this.y&&a.z===this.z;},fromArray:function fromArray(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];return this;},toArray:function toArray(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;return a;},fromBufferAttribute:function fromBufferAttribute(a,b,c){void 0!==c&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute().");this.x=a.getX(b);this.y=a.getY(b);this.z=a.getZ(b);return this;}});var qc=new n();Object.assign(Y.prototype,{isMatrix3:!0,set:function set(a,b,c,d,e,f,g,h,l){var m=this.elements;m[0]=a;m[1]=d;m[2]=g;m[3]=b;m[4]=e;m[5]=h;m[6]=c;m[7]=f;m[8]=l;return this;},identity:function identity(){this.set(1,0,0,0,1,0,0,0,1);return this;},clone:function clone(){return new this.constructor().fromArray(this.elements);},copy:function copy(a){var b=this.elements;a=a.elements;b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];return this;},setFromMatrix4:function setFromMatrix4(a){a=a.elements;this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]);return this;},applyToBufferAttribute:function applyToBufferAttribute(a){for(var b=0,c=a.count;b<c;b++){qc.x=a.getX(b),qc.y=a.getY(b),qc.z=a.getZ(b),qc.applyMatrix3(this),a.setXYZ(b,qc.x,qc.y,qc.z);}return a;},multiply:function multiply(a){return this.multiplyMatrices(this,a);},premultiply:function premultiply(a){return this.multiplyMatrices(a,this);},multiplyMatrices:function multiplyMatrices(a,b){var c=a.elements,d=b.elements;b=this.elements;a=c[0];var e=c[3],f=c[6],g=c[1],h=c[4],l=c[7],m=c[2],k=c[5];c=c[8];var n=d[0],t=d[3],r=d[6],p=d[1],v=d[4],x=d[7],z=d[2],y=d[5];d=d[8];b[0]=a*n+e*p+f*z;b[3]=a*t+e*v+f*y;b[6]=a*r+e*x+f*d;b[1]=g*n+h*p+l*z;b[4]=g*t+h*v+l*y;b[7]=g*r+h*x+l*d;b[2]=m*n+k*p+c*z;b[5]=m*t+k*v+c*y;b[8]=m*r+k*x+c*d;return this;},multiplyScalar:function multiplyScalar(a){var b=this.elements;b[0]*=a;b[3]*=a;b[6]*=a;b[1]*=a;b[4]*=a;b[7]*=a;b[2]*=a;b[5]*=a;b[8]*=a;return this;},determinant:function determinant(){var a=this.elements,b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],g=a[5],h=a[6],l=a[7];a=a[8];return b*f*a-b*g*l-c*e*a+c*g*h+d*e*l-d*f*h;},getInverse:function getInverse(a,b){a&&a.isMatrix4&&console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.");var c=a.elements;a=this.elements;var d=c[0],e=c[1],f=c[2],g=c[3],h=c[4],l=c[5],m=c[6],k=c[7];c=c[8];var n=c*h-l*k,t=l*m-c*g,r=k*g-h*m,p=d*n+e*t+f*r;if(0===p){if(!0===b)throw Error("THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0");console.warn("THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0");return this.identity();}b=1/p;a[0]=n*b;a[1]=(f*k-c*e)*b;a[2]=(l*e-f*h)*b;a[3]=t*b;a[4]=(c*d-f*m)*b;a[5]=(f*g-l*d)*b;a[6]=r*b;a[7]=(e*m-k*d)*b;a[8]=(h*d-e*g)*b;return this;},transpose:function transpose(){var a=this.elements;var b=a[1];a[1]=a[3];a[3]=b;b=a[2];a[2]=a[6];a[6]=b;b=a[5];a[5]=a[7];a[7]=b;return this;},getNormalMatrix:function getNormalMatrix(a){return this.setFromMatrix4(a).getInverse(this).transpose();},transposeIntoArray:function transposeIntoArray(a){var b=this.elements;a[0]=b[0];a[1]=b[3];a[2]=b[6];a[3]=b[1];a[4]=b[4];a[5]=b[7];a[6]=b[2];a[7]=b[5];a[8]=b[8];return this;},setUvTransform:function setUvTransform(a,b,c,d,e,f,g){var h=Math.cos(e);e=Math.sin(e);this.set(c*h,c*e,-c*(h*f+e*g)+f+a,-d*e,d*h,-d*(-e*f+h*g)+g+b,0,0,1);},scale:function scale(a,b){var c=this.elements;c[0]*=a;c[3]*=a;c[6]*=a;c[1]*=b;c[4]*=b;c[7]*=b;return this;},rotate:function rotate(a){var b=Math.cos(a);a=Math.sin(a);var c=this.elements,d=c[0],e=c[3],f=c[6],g=c[1],h=c[4],l=c[7];c[0]=b*d+a*g;c[3]=b*e+a*h;c[6]=b*f+a*l;c[1]=-a*d+b*g;c[4]=-a*e+b*h;c[7]=-a*f+b*l;return this;},translate:function translate(a,b){var c=this.elements;c[0]+=a*c[2];c[3]+=a*c[5];c[6]+=a*c[8];c[1]+=b*c[2];c[4]+=b*c[5];c[7]+=b*c[8];return this;},equals:function equals(a){var b=this.elements;a=a.elements;for(var c=0;9>c;c++){if(b[c]!==a[c])return!1;}return!0;},fromArray:function fromArray(a,b){void 0===b&&(b=0);for(var c=0;9>c;c++){this.elements[c]=a[c+b];}return this;},toArray:function toArray(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];return a;}});var md,Kb={getDataURL:function getDataURL(a){if("undefined"==typeof HTMLCanvasElement)return a.src;if(!(a instanceof HTMLCanvasElement)){void 0===md&&(md=document.createElementNS("http://www.w3.org/1999/xhtml","canvas"));md.width=a.width;md.height=a.height;var b=md.getContext("2d");a instanceof ImageData?b.putImageData(a,0,0):b.drawImage(a,0,0,a.width,a.height);a=md;}return 2048<a.width||2048<a.height?a.toDataURL("image/jpeg",.6):a.toDataURL("image/png");}},Ri=0;W.DEFAULT_IMAGE=void 0;W.DEFAULT_MAPPING=300;W.prototype=Object.assign(Object.create(Ba.prototype),{constructor:W,isTexture:!0,updateMatrix:function updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y);},clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.name=a.name;this.image=a.image;this.mipmaps=a.mipmaps.slice(0);this.mapping=a.mapping;this.wrapS=a.wrapS;this.wrapT=a.wrapT;this.magFilter=a.magFilter;this.minFilter=a.minFilter;this.anisotropy=a.anisotropy;this.format=a.format;this.type=a.type;this.offset.copy(a.offset);this.repeat.copy(a.repeat);this.center.copy(a.center);this.rotation=a.rotation;this.matrixAutoUpdate=a.matrixAutoUpdate;this.matrix.copy(a.matrix);this.generateMipmaps=a.generateMipmaps;this.premultiplyAlpha=a.premultiplyAlpha;this.flipY=a.flipY;this.unpackAlignment=a.unpackAlignment;this.encoding=a.encoding;return this;},toJSON:function toJSON(a){var b=void 0===a||"string"===typeof a;if(!b&&void 0!==a.textures[this.uuid])return a.textures[this.uuid];var c={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(void 0!==this.image){var d=this.image;void 0===d.uuid&&(d.uuid=L.generateUUID());if(!b&&void 0===a.images[d.uuid]){if(Array.isArray(d)){var e=[];for(var f=0,g=d.length;f<g;f++){e.push(Kb.getDataURL(d[f]));}}else e=Kb.getDataURL(d);a.images[d.uuid]={uuid:d.uuid,url:e};}c.image=d.uuid;}b||(a.textures[this.uuid]=c);return c;},dispose:function dispose(){this.dispatchEvent({type:"dispose"});},transformUv:function transformUv(a){if(300!==this.mapping)return a;a.applyMatrix3(this.matrix);if(0>a.x||1<a.x)switch(this.wrapS){case 1E3:a.x-=Math.floor(a.x);break;case 1001:a.x=0>a.x?0:1;break;case 1002:a.x=1===Math.abs(Math.floor(a.x)%2)?Math.ceil(a.x)-a.x:a.x-Math.floor(a.x);}if(0>a.y||1<a.y)switch(this.wrapT){case 1E3:a.y-=Math.floor(a.y);break;case 1001:a.y=0>a.y?0:1;break;case 1002:a.y=1===Math.abs(Math.floor(a.y)%2)?Math.ceil(a.y)-a.y:a.y-Math.floor(a.y);}this.flipY&&(a.y=1-a.y);return a;}});Object.defineProperty(W.prototype,"needsUpdate",{set:function set(a){!0===a&&this.version++;}});Object.defineProperties(aa.prototype,{width:{get:function get(){return this.z;},set:function set(a){this.z=a;}},height:{get:function get(){return this.w;},set:function set(a){this.w=a;}}});Object.assign(aa.prototype,{isVector4:!0,set:function set(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this;},setScalar:function setScalar(a){this.w=this.z=this.y=this.x=a;return this;},setX:function setX(a){this.x=a;return this;},setY:function setY(a){this.y=a;return this;},setZ:function setZ(a){this.z=a;return this;},setW:function setW(a){this.w=a;return this;},setComponent:function setComponent(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;case 3:this.w=b;break;default:throw Error("index is out of range: "+a);}return this;},getComponent:function getComponent(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+a);}},clone:function clone(){return new this.constructor(this.x,this.y,this.z,this.w);},copy:function copy(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=void 0!==a.w?a.w:1;return this;},add:function add(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;this.w+=a.w;return this;},addScalar:function addScalar(a){this.x+=a;this.y+=a;this.z+=a;this.w+=a;return this;},addVectors:function addVectors(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this;},addScaledVector:function addScaledVector(a,b){this.x+=a.x*b;this.y+=a.y*b;this.z+=a.z*b;this.w+=a.w*b;return this;},sub:function sub(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;this.w-=a.w;return this;},subScalar:function subScalar(a){this.x-=a;this.y-=a;this.z-=a;this.w-=a;return this;},subVectors:function subVectors(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;this.w=a.w-b.w;return this;},multiplyScalar:function multiplyScalar(a){this.x*=a;this.y*=a;this.z*=a;this.w*=a;return this;},applyMatrix4:function applyMatrix4(a){var b=this.x,c=this.y,d=this.z,e=this.w;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12]*e;this.y=a[1]*b+a[5]*c+a[9]*d+a[13]*e;this.z=a[2]*b+a[6]*c+a[10]*d+a[14]*e;this.w=a[3]*b+a[7]*c+a[11]*d+a[15]*e;return this;},divideScalar:function divideScalar(a){return this.multiplyScalar(1/a);},setAxisAngleFromQuaternion:function setAxisAngleFromQuaternion(a){this.w=2*Math.acos(a.w);var b=Math.sqrt(1-a.w*a.w);1E-4>b?(this.x=1,this.z=this.y=0):(this.x=a.x/b,this.y=a.y/b,this.z=a.z/b);return this;},setAxisAngleFromRotationMatrix:function setAxisAngleFromRotationMatrix(a){a=a.elements;var b=a[0];var c=a[4];var d=a[8],e=a[1],f=a[5],g=a[9];var h=a[2];var l=a[6];var m=a[10];if(.01>Math.abs(c-e)&&.01>Math.abs(d-h)&&.01>Math.abs(g-l)){if(.1>Math.abs(c+e)&&.1>Math.abs(d+h)&&.1>Math.abs(g+l)&&.1>Math.abs(b+f+m-3))return this.set(1,0,0,0),this;a=Math.PI;b=(b+1)/2;f=(f+1)/2;m=(m+1)/2;c=(c+e)/4;d=(d+h)/4;g=(g+l)/4;b>f&&b>m?.01>b?(l=0,c=h=.707106781):(l=Math.sqrt(b),h=c/l,c=d/l):f>m?.01>f?(l=.707106781,h=0,c=.707106781):(h=Math.sqrt(f),l=c/h,c=g/h):.01>m?(h=l=.707106781,c=0):(c=Math.sqrt(m),l=d/c,h=g/c);this.set(l,h,c,a);return this;}a=Math.sqrt((l-g)*(l-g)+(d-h)*(d-h)+(e-c)*(e-c));.001>Math.abs(a)&&(a=1);this.x=(l-g)/a;this.y=(d-h)/a;this.z=(e-c)/a;this.w=Math.acos((b+f+m-1)/2);return this;},min:function min(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);this.z=Math.min(this.z,a.z);this.w=Math.min(this.w,a.w);return this;},max:function max(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);this.z=Math.max(this.z,a.z);this.w=Math.max(this.w,a.w);return this;},clamp:function clamp(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));this.z=Math.max(a.z,Math.min(b.z,this.z));this.w=Math.max(a.w,Math.min(b.w,this.w));return this;},clampScalar:function clampScalar(a,b){this.x=Math.max(a,Math.min(b,this.x));this.y=Math.max(a,Math.min(b,this.y));this.z=Math.max(a,Math.min(b,this.z));this.w=Math.max(a,Math.min(b,this.w));return this;},clampLength:function clampLength(a,b){var c=this.length();return this.divideScalar(c||1).multiplyScalar(Math.max(a,Math.min(b,c)));},floor:function floor(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);this.w=Math.floor(this.w);return this;},ceil:function ceil(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);this.w=Math.ceil(this.w);return this;},round:function round(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);this.w=Math.round(this.w);return this;},roundToZero:function roundToZero(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);this.w=0>this.w?Math.ceil(this.w):Math.floor(this.w);return this;},negate:function negate(){this.x=-this.x;this.y=-this.y;this.z=-this.z;this.w=-this.w;return this;},dot:function dot(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w;},lengthSq:function lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w;},length:function length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);},manhattanLength:function manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w);},normalize:function normalize(){return this.divideScalar(this.length()||1);},setLength:function setLength(a){return this.normalize().multiplyScalar(a);},lerp:function lerp(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;this.w+=(a.w-this.w)*b;return this;},lerpVectors:function lerpVectors(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a);},equals:function equals(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&a.w===this.w;},fromArray:function fromArray(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];this.w=a[b+3];return this;},toArray:function toArray(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;a[b+3]=this.w;return a;},fromBufferAttribute:function fromBufferAttribute(a,b,c){void 0!==c&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute().");this.x=a.getX(b);this.y=a.getY(b);this.z=a.getZ(b);this.w=a.getW(b);return this;}});la.prototype=Object.assign(Object.create(Ba.prototype),{constructor:la,isWebGLRenderTarget:!0,setSize:function setSize(a,b){if(this.width!==a||this.height!==b)this.width=a,this.height=b,this.texture.image.width=a,this.texture.image.height=b,this.dispose();this.viewport.set(0,0,a,b);this.scissor.set(0,0,a,b);},clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.width=a.width;this.height=a.height;this.viewport.copy(a.viewport);this.texture=a.texture.clone();this.depthBuffer=a.depthBuffer;this.stencilBuffer=a.stencilBuffer;this.depthTexture=a.depthTexture;return this;},dispose:function dispose(){this.dispatchEvent({type:"dispose"});}});Of.prototype=Object.assign(Object.create(la.prototype),{constructor:Of,isWebGLMultisampleRenderTarget:!0,copy:function copy(a){la.prototype.copy.call(this,a);this.samples=a.samples;return this;}});var Ka=new n(),ea=new U(),sk=new n(0,0,0),tk=new n(1,1,1),Lb=new n(),qf=new n(),ka=new n();Object.assign(U.prototype,{isMatrix4:!0,set:function set(a,b,c,d,e,f,g,h,l,m,k,n,t,r,p,v){var q=this.elements;q[0]=a;q[4]=b;q[8]=c;q[12]=d;q[1]=e;q[5]=f;q[9]=g;q[13]=h;q[2]=l;q[6]=m;q[10]=k;q[14]=n;q[3]=t;q[7]=r;q[11]=p;q[15]=v;return this;},identity:function identity(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this;},clone:function clone(){return new U().fromArray(this.elements);},copy:function copy(a){var b=this.elements;a=a.elements;b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=a[12];b[13]=a[13];b[14]=a[14];b[15]=a[15];return this;},copyPosition:function copyPosition(a){var b=this.elements;a=a.elements;b[12]=a[12];b[13]=a[13];b[14]=a[14];return this;},extractBasis:function extractBasis(a,b,c){a.setFromMatrixColumn(this,0);b.setFromMatrixColumn(this,1);c.setFromMatrixColumn(this,2);return this;},makeBasis:function makeBasis(a,b,c){this.set(a.x,b.x,c.x,0,a.y,b.y,c.y,0,a.z,b.z,c.z,0,0,0,0,1);return this;},extractRotation:function extractRotation(a){var b=this.elements,c=a.elements,d=1/Ka.setFromMatrixColumn(a,0).length(),e=1/Ka.setFromMatrixColumn(a,1).length();a=1/Ka.setFromMatrixColumn(a,2).length();b[0]=c[0]*d;b[1]=c[1]*d;b[2]=c[2]*d;b[3]=0;b[4]=c[4]*e;b[5]=c[5]*e;b[6]=c[6]*e;b[7]=0;b[8]=c[8]*a;b[9]=c[9]*a;b[10]=c[10]*a;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this;},makeRotationFromEuler:function makeRotationFromEuler(a){a&&a.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var b=this.elements,c=a.x,d=a.y,e=a.z,f=Math.cos(c);c=Math.sin(c);var g=Math.cos(d);d=Math.sin(d);var h=Math.cos(e);e=Math.sin(e);if("XYZ"===a.order){a=f*h;var l=f*e,m=c*h,k=c*e;b[0]=g*h;b[4]=-g*e;b[8]=d;b[1]=l+m*d;b[5]=a-k*d;b[9]=-c*g;b[2]=k-a*d;b[6]=m+l*d;b[10]=f*g;}else"YXZ"===a.order?(a=g*h,l=g*e,m=d*h,k=d*e,b[0]=a+k*c,b[4]=m*c-l,b[8]=f*d,b[1]=f*e,b[5]=f*h,b[9]=-c,b[2]=l*c-m,b[6]=k+a*c,b[10]=f*g):"ZXY"===a.order?(a=g*h,l=g*e,m=d*h,k=d*e,b[0]=a-k*c,b[4]=-f*e,b[8]=m+l*c,b[1]=l+m*c,b[5]=f*h,b[9]=k-a*c,b[2]=-f*d,b[6]=c,b[10]=f*g):"ZYX"===a.order?(a=f*h,l=f*e,m=c*h,k=c*e,b[0]=g*h,b[4]=m*d-l,b[8]=a*d+k,b[1]=g*e,b[5]=k*d+a,b[9]=l*d-m,b[2]=-d,b[6]=c*g,b[10]=f*g):"YZX"===a.order?(a=f*g,l=f*d,m=c*g,k=c*d,b[0]=g*h,b[4]=k-a*e,b[8]=m*e+l,b[1]=e,b[5]=f*h,b[9]=-c*h,b[2]=-d*h,b[6]=l*e+m,b[10]=a-k*e):"XZY"===a.order&&(a=f*g,l=f*d,m=c*g,k=c*d,b[0]=g*h,b[4]=-e,b[8]=d*h,b[1]=a*e+k,b[5]=f*h,b[9]=l*e-m,b[2]=m*e-l,b[6]=c*h,b[10]=k*e+a);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this;},makeRotationFromQuaternion:function makeRotationFromQuaternion(a){return this.compose(sk,a,tk);},lookAt:function lookAt(a,b,c){var d=this.elements;ka.subVectors(a,b);0===ka.lengthSq()&&(ka.z=1);ka.normalize();Lb.crossVectors(c,ka);0===Lb.lengthSq()&&(1===Math.abs(c.z)?ka.x+=1E-4:ka.z+=1E-4,ka.normalize(),Lb.crossVectors(c,ka));Lb.normalize();qf.crossVectors(ka,Lb);d[0]=Lb.x;d[4]=qf.x;d[8]=ka.x;d[1]=Lb.y;d[5]=qf.y;d[9]=ka.y;d[2]=Lb.z;d[6]=qf.z;d[10]=ka.z;return this;},multiply:function multiply(a,b){return void 0!==b?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(a,b)):this.multiplyMatrices(this,a);},premultiply:function premultiply(a){return this.multiplyMatrices(a,this);},multiplyMatrices:function multiplyMatrices(a,b){var c=a.elements,d=b.elements;b=this.elements;a=c[0];var e=c[4],f=c[8],g=c[12],h=c[1],l=c[5],m=c[9],k=c[13],n=c[2],t=c[6],r=c[10],p=c[14],v=c[3],x=c[7],z=c[11];c=c[15];var y=d[0],w=d[4],A=d[8],C=d[12],B=d[1],E=d[5],D=d[9],F=d[13],G=d[2],H=d[6],I=d[10],L=d[14],M=d[3],N=d[7],O=d[11];d=d[15];b[0]=a*y+e*B+f*G+g*M;b[4]=a*w+e*E+f*H+g*N;b[8]=a*A+e*D+f*I+g*O;b[12]=a*C+e*F+f*L+g*d;b[1]=h*y+l*B+m*G+k*M;b[5]=h*w+l*E+m*H+k*N;b[9]=h*A+l*D+m*I+k*O;b[13]=h*C+l*F+m*L+k*d;b[2]=n*y+t*B+r*G+p*M;b[6]=n*w+t*E+r*H+p*N;b[10]=n*A+t*D+r*I+p*O;b[14]=n*C+t*F+r*L+p*d;b[3]=v*y+x*B+z*G+c*M;b[7]=v*w+x*E+z*H+c*N;b[11]=v*A+x*D+z*I+c*O;b[15]=v*C+x*F+z*L+c*d;return this;},multiplyScalar:function multiplyScalar(a){var b=this.elements;b[0]*=a;b[4]*=a;b[8]*=a;b[12]*=a;b[1]*=a;b[5]*=a;b[9]*=a;b[13]*=a;b[2]*=a;b[6]*=a;b[10]*=a;b[14]*=a;b[3]*=a;b[7]*=a;b[11]*=a;b[15]*=a;return this;},applyToBufferAttribute:function applyToBufferAttribute(a){for(var b=0,c=a.count;b<c;b++){Ka.x=a.getX(b),Ka.y=a.getY(b),Ka.z=a.getZ(b),Ka.applyMatrix4(this),a.setXYZ(b,Ka.x,Ka.y,Ka.z);}return a;},determinant:function determinant(){var a=this.elements,b=a[0],c=a[4],d=a[8],e=a[12],f=a[1],g=a[5],h=a[9],l=a[13],m=a[2],k=a[6],n=a[10],t=a[14];return a[3]*(+e*h*k-d*l*k-e*g*n+c*l*n+d*g*t-c*h*t)+a[7]*(+b*h*t-b*l*n+e*f*n-d*f*t+d*l*m-e*h*m)+a[11]*(+b*l*k-b*g*t-e*f*k+c*f*t+e*g*m-c*l*m)+a[15]*(-d*g*m-b*h*k+b*g*n+d*f*k-c*f*n+c*h*m);},transpose:function transpose(){var a=this.elements;var b=a[1];a[1]=a[4];a[4]=b;b=a[2];a[2]=a[8];a[8]=b;b=a[6];a[6]=a[9];a[9]=b;b=a[3];a[3]=a[12];a[12]=b;b=a[7];a[7]=a[13];a[13]=b;b=a[11];a[11]=a[14];a[14]=b;return this;},setPosition:function setPosition(a,b,c){var d=this.elements;a.isVector3?(d[12]=a.x,d[13]=a.y,d[14]=a.z):(d[12]=a,d[13]=b,d[14]=c);return this;},getInverse:function getInverse(a,b){var c=this.elements,d=a.elements;a=d[0];var e=d[1],f=d[2],g=d[3],h=d[4],l=d[5],m=d[6],k=d[7],n=d[8],t=d[9],r=d[10],p=d[11],v=d[12],x=d[13],z=d[14];d=d[15];var y=t*z*k-x*r*k+x*m*p-l*z*p-t*m*d+l*r*d,w=v*r*k-n*z*k-v*m*p+h*z*p+n*m*d-h*r*d,A=n*x*k-v*t*k+v*l*p-h*x*p-n*l*d+h*t*d,C=v*t*m-n*x*m-v*l*r+h*x*r+n*l*z-h*t*z,B=a*y+e*w+f*A+g*C;if(0===B){if(!0===b)throw Error("THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0");console.warn("THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0");return this.identity();}b=1/B;c[0]=y*b;c[1]=(x*r*g-t*z*g-x*f*p+e*z*p+t*f*d-e*r*d)*b;c[2]=(l*z*g-x*m*g+x*f*k-e*z*k-l*f*d+e*m*d)*b;c[3]=(t*m*g-l*r*g-t*f*k+e*r*k+l*f*p-e*m*p)*b;c[4]=w*b;c[5]=(n*z*g-v*r*g+v*f*p-a*z*p-n*f*d+a*r*d)*b;c[6]=(v*m*g-h*z*g-v*f*k+a*z*k+h*f*d-a*m*d)*b;c[7]=(h*r*g-n*m*g+n*f*k-a*r*k-h*f*p+a*m*p)*b;c[8]=A*b;c[9]=(v*t*g-n*x*g-v*e*p+a*x*p+n*e*d-a*t*d)*b;c[10]=(h*x*g-v*l*g+v*e*k-a*x*k-h*e*d+a*l*d)*b;c[11]=(n*l*g-h*t*g-n*e*k+a*t*k+h*e*p-a*l*p)*b;c[12]=C*b;c[13]=(n*x*f-v*t*f+v*e*r-a*x*r-n*e*z+a*t*z)*b;c[14]=(v*l*f-h*x*f-v*e*m+a*x*m+h*e*z-a*l*z)*b;c[15]=(h*t*f-n*l*f+n*e*m-a*t*m-h*e*r+a*l*r)*b;return this;},scale:function scale(a){var b=this.elements,c=a.x,d=a.y;a=a.z;b[0]*=c;b[4]*=d;b[8]*=a;b[1]*=c;b[5]*=d;b[9]*=a;b[2]*=c;b[6]*=d;b[10]*=a;b[3]*=c;b[7]*=d;b[11]*=a;return this;},getMaxScaleOnAxis:function getMaxScaleOnAxis(){var a=this.elements;return Math.sqrt(Math.max(a[0]*a[0]+a[1]*a[1]+a[2]*a[2],a[4]*a[4]+a[5]*a[5]+a[6]*a[6],a[8]*a[8]+a[9]*a[9]+a[10]*a[10]));},makeTranslation:function makeTranslation(a,b,c){this.set(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1);return this;},makeRotationX:function makeRotationX(a){var b=Math.cos(a);a=Math.sin(a);this.set(1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1);return this;},makeRotationY:function makeRotationY(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1);return this;},makeRotationZ:function makeRotationZ(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1);return this;},makeRotationAxis:function makeRotationAxis(a,b){var c=Math.cos(b);b=Math.sin(b);var d=1-c,e=a.x,f=a.y;a=a.z;var g=d*e,h=d*f;this.set(g*e+c,g*f-b*a,g*a+b*f,0,g*f+b*a,h*f+c,h*a-b*e,0,g*a-b*f,h*a+b*e,d*a*a+c,0,0,0,0,1);return this;},makeScale:function makeScale(a,b,c){this.set(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1);return this;},makeShear:function makeShear(a,b,c){this.set(1,b,c,0,a,1,c,0,a,b,1,0,0,0,0,1);return this;},compose:function compose(a,b,c){var d=this.elements,e=b._x,f=b._y,g=b._z,h=b._w,l=e+e,m=f+f,k=g+g;b=e*l;var n=e*m;e*=k;var t=f*m;f*=k;g*=k;l*=h;m*=h;h*=k;k=c.x;var r=c.y;c=c.z;d[0]=(1-(t+g))*k;d[1]=(n+h)*k;d[2]=(e-m)*k;d[3]=0;d[4]=(n-h)*r;d[5]=(1-(b+g))*r;d[6]=(f+l)*r;d[7]=0;d[8]=(e+m)*c;d[9]=(f-l)*c;d[10]=(1-(b+t))*c;d[11]=0;d[12]=a.x;d[13]=a.y;d[14]=a.z;d[15]=1;return this;},decompose:function decompose(a,b,c){var d=this.elements,e=Ka.set(d[0],d[1],d[2]).length(),f=Ka.set(d[4],d[5],d[6]).length(),g=Ka.set(d[8],d[9],d[10]).length();0>this.determinant()&&(e=-e);a.x=d[12];a.y=d[13];a.z=d[14];ea.copy(this);a=1/e;d=1/f;var h=1/g;ea.elements[0]*=a;ea.elements[1]*=a;ea.elements[2]*=a;ea.elements[4]*=d;ea.elements[5]*=d;ea.elements[6]*=d;ea.elements[8]*=h;ea.elements[9]*=h;ea.elements[10]*=h;b.setFromRotationMatrix(ea);c.x=e;c.y=f;c.z=g;return this;},makePerspective:function makePerspective(a,b,c,d,e,f){void 0===f&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");var g=this.elements;g[0]=2*e/(b-a);g[4]=0;g[8]=(b+a)/(b-a);g[12]=0;g[1]=0;g[5]=2*e/(c-d);g[9]=(c+d)/(c-d);g[13]=0;g[2]=0;g[6]=0;g[10]=-(f+e)/(f-e);g[14]=-2*f*e/(f-e);g[3]=0;g[7]=0;g[11]=-1;g[15]=0;return this;},makeOrthographic:function makeOrthographic(a,b,c,d,e,f){var g=this.elements,h=1/(b-a),l=1/(c-d),m=1/(f-e);g[0]=2*h;g[4]=0;g[8]=0;g[12]=-((b+a)*h);g[1]=0;g[5]=2*l;g[9]=0;g[13]=-((c+d)*l);g[2]=0;g[6]=0;g[10]=-2*m;g[14]=-((f+e)*m);g[3]=0;g[7]=0;g[11]=0;g[15]=1;return this;},equals:function equals(a){var b=this.elements;a=a.elements;for(var c=0;16>c;c++){if(b[c]!==a[c])return!1;}return!0;},fromArray:function fromArray(a,b){void 0===b&&(b=0);for(var c=0;16>c;c++){this.elements[c]=a[c+b];}return this;},toArray:function toArray(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];a[b+9]=c[9];a[b+10]=c[10];a[b+11]=c[11];a[b+12]=c[12];a[b+13]=c[13];a[b+14]=c[14];a[b+15]=c[15];return a;}});var mi=new U(),ni=new ua();Qb.RotationOrders="XYZ YZX ZXY XZY YXZ ZYX".split(" ");Qb.DefaultOrder="XYZ";Object.defineProperties(Qb.prototype,{x:{get:function get(){return this._x;},set:function set(a){this._x=a;this._onChangeCallback();}},y:{get:function get(){return this._y;},set:function set(a){this._y=a;this._onChangeCallback();}},z:{get:function get(){return this._z;},set:function set(a){this._z=a;this._onChangeCallback();}},order:{get:function get(){return this._order;},set:function set(a){this._order=a;this._onChangeCallback();}}});Object.assign(Qb.prototype,{isEuler:!0,set:function set(a,b,c,d){this._x=a;this._y=b;this._z=c;this._order=d||this._order;this._onChangeCallback();return this;},clone:function clone(){return new this.constructor(this._x,this._y,this._z,this._order);},copy:function copy(a){this._x=a._x;this._y=a._y;this._z=a._z;this._order=a._order;this._onChangeCallback();return this;},setFromRotationMatrix:function setFromRotationMatrix(a,b,c){var d=L.clamp,e=a.elements;a=e[0];var f=e[4],g=e[8],h=e[1],l=e[5],m=e[9],k=e[2],n=e[6];e=e[10];b=b||this._order;"XYZ"===b?(this._y=Math.asin(d(g,-1,1)),.9999999>Math.abs(g)?(this._x=Math.atan2(-m,e),this._z=Math.atan2(-f,a)):(this._x=Math.atan2(n,l),this._z=0)):"YXZ"===b?(this._x=Math.asin(-d(m,-1,1)),.9999999>Math.abs(m)?(this._y=Math.atan2(g,e),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-k,a),this._z=0)):"ZXY"===b?(this._x=Math.asin(d(n,-1,1)),.9999999>Math.abs(n)?(this._y=Math.atan2(-k,e),this._z=Math.atan2(-f,l)):(this._y=0,this._z=Math.atan2(h,a))):"ZYX"===b?(this._y=Math.asin(-d(k,-1,1)),.9999999>Math.abs(k)?(this._x=Math.atan2(n,e),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-f,l))):"YZX"===b?(this._z=Math.asin(d(h,-1,1)),.9999999>Math.abs(h)?(this._x=Math.atan2(-m,l),this._y=Math.atan2(-k,a)):(this._x=0,this._y=Math.atan2(g,e))):"XZY"===b?(this._z=Math.asin(-d(f,-1,1)),.9999999>Math.abs(f)?(this._x=Math.atan2(n,l),this._y=Math.atan2(g,a)):(this._x=Math.atan2(-m,e),this._y=0)):console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: "+b);this._order=b;!1!==c&&this._onChangeCallback();return this;},setFromQuaternion:function setFromQuaternion(a,b,c){mi.makeRotationFromQuaternion(a);return this.setFromRotationMatrix(mi,b,c);},setFromVector3:function setFromVector3(a,b){return this.set(a.x,a.y,a.z,b||this._order);},reorder:function reorder(a){ni.setFromEuler(this);return this.setFromQuaternion(ni,a);},equals:function equals(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order;},fromArray:function fromArray(a){this._x=a[0];this._y=a[1];this._z=a[2];void 0!==a[3]&&(this._order=a[3]);this._onChangeCallback();return this;},toArray:function toArray(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+3]=this._order;return a;},toVector3:function toVector3(a){return a?a.set(this._x,this._y,this._z):new n(this._x,this._y,this._z);},_onChange:function _onChange(a){this._onChangeCallback=a;return this;},_onChangeCallback:function _onChangeCallback(){}});Object.assign(Pf.prototype,{set:function set(a){this.mask=1<<a|0;},enable:function enable(a){this.mask=this.mask|1<<a|0;},enableAll:function enableAll(){this.mask=-1;},toggle:function toggle(a){this.mask^=1<<a|0;},disable:function disable(a){this.mask&=~(1<<a|0);},disableAll:function disableAll(){this.mask=0;},test:function test(a){return 0!==(this.mask&a.mask);}});var Si=0,oi=new n(),nd=new ua(),ub=new U(),rf=new n(),xe=new n(),uk=new n(),vk=new ua(),pi=new n(1,0,0),qi=new n(0,1,0),ri=new n(0,0,1),wk={type:"added"},xk={type:"removed"};B.DefaultUp=new n(0,1,0);B.DefaultMatrixAutoUpdate=!0;B.prototype=Object.assign(Object.create(Ba.prototype),{constructor:B,isObject3D:!0,onBeforeRender:function onBeforeRender(){},onAfterRender:function onAfterRender(){},applyMatrix:function applyMatrix(a){this.matrixAutoUpdate&&this.updateMatrix();this.matrix.premultiply(a);this.matrix.decompose(this.position,this.quaternion,this.scale);},applyQuaternion:function applyQuaternion(a){this.quaternion.premultiply(a);return this;},setRotationFromAxisAngle:function setRotationFromAxisAngle(a,b){this.quaternion.setFromAxisAngle(a,b);},setRotationFromEuler:function setRotationFromEuler(a){this.quaternion.setFromEuler(a,!0);},setRotationFromMatrix:function setRotationFromMatrix(a){this.quaternion.setFromRotationMatrix(a);},setRotationFromQuaternion:function setRotationFromQuaternion(a){this.quaternion.copy(a);},rotateOnAxis:function rotateOnAxis(a,b){nd.setFromAxisAngle(a,b);this.quaternion.multiply(nd);return this;},rotateOnWorldAxis:function rotateOnWorldAxis(a,b){nd.setFromAxisAngle(a,b);this.quaternion.premultiply(nd);return this;},rotateX:function rotateX(a){return this.rotateOnAxis(pi,a);},rotateY:function rotateY(a){return this.rotateOnAxis(qi,a);},rotateZ:function rotateZ(a){return this.rotateOnAxis(ri,a);},translateOnAxis:function translateOnAxis(a,b){oi.copy(a).applyQuaternion(this.quaternion);this.position.add(oi.multiplyScalar(b));return this;},translateX:function translateX(a){return this.translateOnAxis(pi,a);},translateY:function translateY(a){return this.translateOnAxis(qi,a);},translateZ:function translateZ(a){return this.translateOnAxis(ri,a);},localToWorld:function localToWorld(a){return a.applyMatrix4(this.matrixWorld);},worldToLocal:function worldToLocal(a){return a.applyMatrix4(ub.getInverse(this.matrixWorld));},lookAt:function lookAt(a,b,c){a.isVector3?rf.copy(a):rf.set(a,b,c);a=this.parent;this.updateWorldMatrix(!0,!1);xe.setFromMatrixPosition(this.matrixWorld);this.isCamera||this.isLight?ub.lookAt(xe,rf,this.up):ub.lookAt(rf,xe,this.up);this.quaternion.setFromRotationMatrix(ub);a&&(ub.extractRotation(a.matrixWorld),nd.setFromRotationMatrix(ub),this.quaternion.premultiply(nd.inverse()));},add:function add(a){if(1<arguments.length){for(var b=0;b<arguments.length;b++){this.add(arguments[b]);}return this;}if(a===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",a),this;a&&a.isObject3D?(null!==a.parent&&a.parent.remove(a),a.parent=this,this.children.push(a),a.dispatchEvent(wk)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",a);return this;},remove:function remove(a){if(1<arguments.length){for(var b=0;b<arguments.length;b++){this.remove(arguments[b]);}return this;}b=this.children.indexOf(a);-1!==b&&(a.parent=null,this.children.splice(b,1),a.dispatchEvent(xk));return this;},attach:function attach(a){this.updateWorldMatrix(!0,!1);ub.getInverse(this.matrixWorld);null!==a.parent&&(a.parent.updateWorldMatrix(!0,!1),ub.multiply(a.parent.matrixWorld));a.applyMatrix(ub);a.updateWorldMatrix(!1,!1);this.add(a);return this;},getObjectById:function getObjectById(a){return this.getObjectByProperty("id",a);},getObjectByName:function getObjectByName(a){return this.getObjectByProperty("name",a);},getObjectByProperty:function getObjectByProperty(a,b){if(this[a]===b)return this;for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c].getObjectByProperty(a,b);if(void 0!==e)return e;}},getWorldPosition:function getWorldPosition(a){void 0===a&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),a=new n());this.updateMatrixWorld(!0);return a.setFromMatrixPosition(this.matrixWorld);},getWorldQuaternion:function getWorldQuaternion(a){void 0===a&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),a=new ua());this.updateMatrixWorld(!0);this.matrixWorld.decompose(xe,a,uk);return a;},getWorldScale:function getWorldScale(a){void 0===a&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),a=new n());this.updateMatrixWorld(!0);this.matrixWorld.decompose(xe,vk,a);return a;},getWorldDirection:function getWorldDirection(a){void 0===a&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),a=new n());this.updateMatrixWorld(!0);var b=this.matrixWorld.elements;return a.set(b[8],b[9],b[10]).normalize();},raycast:function raycast(){},traverse:function traverse(a){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++){b[c].traverse(a);}},traverseVisible:function traverseVisible(a){if(!1!==this.visible){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++){b[c].traverseVisible(a);}}},traverseAncestors:function traverseAncestors(a){var b=this.parent;null!==b&&(a(b),b.traverseAncestors(a));},updateMatrix:function updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);this.matrixWorldNeedsUpdate=!0;},updateMatrixWorld:function updateMatrixWorld(a){this.matrixAutoUpdate&&this.updateMatrix();if(this.matrixWorldNeedsUpdate||a)null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=this.children,c=0,d=b.length;c<d;c++){b[c].updateMatrixWorld(a);}},updateWorldMatrix:function updateWorldMatrix(a,b){var c=this.parent;!0===a&&null!==c&&c.updateWorldMatrix(!0,!1);this.matrixAutoUpdate&&this.updateMatrix();null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(!0===b)for(a=this.children,b=0,c=a.length;b<c;b++){a[b].updateWorldMatrix(!1,!0);}},toJSON:function toJSON(a){function b(b,c){void 0===b[c.uuid]&&(b[c.uuid]=c.toJSON(a));return c.uuid;}function c(a){var b=[],c;for(c in a){var d=a[c];delete d.metadata;b.push(d);}return b;}var d=void 0===a||"string"===typeof a,e={};d&&(a={geometries:{},materials:{},textures:{},images:{},shapes:{}},e.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});var f={};f.uuid=this.uuid;f.type=this.type;""!==this.name&&(f.name=this.name);!0===this.castShadow&&(f.castShadow=!0);!0===this.receiveShadow&&(f.receiveShadow=!0);!1===this.visible&&(f.visible=!1);!1===this.frustumCulled&&(f.frustumCulled=!1);0!==this.renderOrder&&(f.renderOrder=this.renderOrder);"{}"!==JSON.stringify(this.userData)&&(f.userData=this.userData);f.layers=this.layers.mask;f.matrix=this.matrix.toArray();!1===this.matrixAutoUpdate&&(f.matrixAutoUpdate=!1);this.isMesh&&0!==this.drawMode&&(f.drawMode=this.drawMode);if(this.isMesh||this.isLine||this.isPoints){f.geometry=b(a.geometries,this.geometry);var g=this.geometry.parameters;if(void 0!==g&&void 0!==g.shapes)if(g=g.shapes,Array.isArray(g))for(var h=0,l=g.length;h<l;h++){b(a.shapes,g[h]);}else b(a.shapes,g);}if(void 0!==this.material)if(Array.isArray(this.material)){g=[];h=0;for(l=this.material.length;h<l;h++){g.push(b(a.materials,this.material[h]));}f.material=g;}else f.material=b(a.materials,this.material);if(0<this.children.length)for(f.children=[],h=0;h<this.children.length;h++){f.children.push(this.children[h].toJSON(a).object);}if(d){d=c(a.geometries);h=c(a.materials);l=c(a.textures);var m=c(a.images);g=c(a.shapes);0<d.length&&(e.geometries=d);0<h.length&&(e.materials=h);0<l.length&&(e.textures=l);0<m.length&&(e.images=m);0<g.length&&(e.shapes=g);}e.object=f;return e;},clone:function clone(a){return new this.constructor().copy(this,a);},copy:function copy(a,b){void 0===b&&(b=!0);this.name=a.name;this.up.copy(a.up);this.position.copy(a.position);this.quaternion.copy(a.quaternion);this.scale.copy(a.scale);this.matrix.copy(a.matrix);this.matrixWorld.copy(a.matrixWorld);this.matrixAutoUpdate=a.matrixAutoUpdate;this.matrixWorldNeedsUpdate=a.matrixWorldNeedsUpdate;this.layers.mask=a.layers.mask;this.visible=a.visible;this.castShadow=a.castShadow;this.receiveShadow=a.receiveShadow;this.frustumCulled=a.frustumCulled;this.renderOrder=a.renderOrder;this.userData=JSON.parse(JSON.stringify(a.userData));if(!0===b)for(b=0;b<a.children.length;b++){this.add(a.children[b].clone());}return this;}});wd.prototype=Object.assign(Object.create(B.prototype),{constructor:wd,isScene:!0,copy:function copy(a,b){B.prototype.copy.call(this,a,b);null!==a.background&&(this.background=a.background.clone());null!==a.fog&&(this.fog=a.fog.clone());null!==a.overrideMaterial&&(this.overrideMaterial=a.overrideMaterial.clone());this.autoUpdate=a.autoUpdate;this.matrixAutoUpdate=a.matrixAutoUpdate;return this;},toJSON:function toJSON(a){var b=B.prototype.toJSON.call(this,a);null!==this.background&&(b.object.background=this.background.toJSON(a));null!==this.fog&&(b.object.fog=this.fog.toJSON());return b;},dispose:function dispose(){this.dispatchEvent({type:"dispose"});}});var vb=[new n(),new n(),new n(),new n(),new n(),new n(),new n(),new n()],jb=new n(),od=new n(),pd=new n(),qd=new n(),Mb=new n(),Nb=new n(),rc=new n(),ye=new n(),sf=new n(),tf=new n(),Rb=new n();Object.assign(ab.prototype,{isBox3:!0,set:function set(a,b){this.min.copy(a);this.max.copy(b);return this;},setFromArray:function setFromArray(a){for(var b=Infinity,c=Infinity,d=Infinity,e=-Infinity,f=-Infinity,g=-Infinity,h=0,l=a.length;h<l;h+=3){var m=a[h],k=a[h+1],n=a[h+2];m<b&&(b=m);k<c&&(c=k);n<d&&(d=n);m>e&&(e=m);k>f&&(f=k);n>g&&(g=n);}this.min.set(b,c,d);this.max.set(e,f,g);return this;},setFromBufferAttribute:function setFromBufferAttribute(a){for(var b=Infinity,c=Infinity,d=Infinity,e=-Infinity,f=-Infinity,g=-Infinity,h=0,l=a.count;h<l;h++){var m=a.getX(h),k=a.getY(h),n=a.getZ(h);m<b&&(b=m);k<c&&(c=k);n<d&&(d=n);m>e&&(e=m);k>f&&(f=k);n>g&&(g=n);}this.min.set(b,c,d);this.max.set(e,f,g);return this;},setFromPoints:function setFromPoints(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++){this.expandByPoint(a[b]);}return this;},setFromCenterAndSize:function setFromCenterAndSize(a,b){b=jb.copy(b).multiplyScalar(.5);this.min.copy(a).sub(b);this.max.copy(a).add(b);return this;},setFromObject:function setFromObject(a){this.makeEmpty();return this.expandByObject(a);},clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.min.copy(a.min);this.max.copy(a.max);return this;},makeEmpty:function makeEmpty(){this.min.x=this.min.y=this.min.z=Infinity;this.max.x=this.max.y=this.max.z=-Infinity;return this;},isEmpty:function isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z;},getCenter:function getCenter(a){void 0===a&&(console.warn("THREE.Box3: .getCenter() target is now required"),a=new n());return this.isEmpty()?a.set(0,0,0):a.addVectors(this.min,this.max).multiplyScalar(.5);},getSize:function getSize(a){void 0===a&&(console.warn("THREE.Box3: .getSize() target is now required"),a=new n());return this.isEmpty()?a.set(0,0,0):a.subVectors(this.max,this.min);},expandByPoint:function expandByPoint(a){this.min.min(a);this.max.max(a);return this;},expandByVector:function expandByVector(a){this.min.sub(a);this.max.add(a);return this;},expandByScalar:function expandByScalar(a){this.min.addScalar(-a);this.max.addScalar(a);return this;},expandByObject:function expandByObject(a){var b;a.updateWorldMatrix(!1,!1);var c=a.geometry;if(void 0!==c)if(c.isGeometry){var d=c.vertices;c=0;for(b=d.length;c<b;c++){jb.copy(d[c]),jb.applyMatrix4(a.matrixWorld),this.expandByPoint(jb);}}else if(c.isBufferGeometry&&(d=c.attributes.position,void 0!==d))for(c=0,b=d.count;c<b;c++){jb.fromBufferAttribute(d,c).applyMatrix4(a.matrixWorld),this.expandByPoint(jb);}a=a.children;c=0;for(b=a.length;c<b;c++){this.expandByObject(a[c]);}return this;},containsPoint:function containsPoint(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y||a.z<this.min.z||a.z>this.max.z?!1:!0;},containsBox:function containsBox(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z;},getParameter:function getParameter(a,b){void 0===b&&(console.warn("THREE.Box3: .getParameter() target is now required"),b=new n());return b.set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z));},intersectsBox:function intersectsBox(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y||a.max.z<this.min.z||a.min.z>this.max.z?!1:!0;},intersectsSphere:function intersectsSphere(a){this.clampPoint(a.center,jb);return jb.distanceToSquared(a.center)<=a.radius*a.radius;},intersectsPlane:function intersectsPlane(a){if(0<a.normal.x){var b=a.normal.x*this.min.x;var c=a.normal.x*this.max.x;}else b=a.normal.x*this.max.x,c=a.normal.x*this.min.x;0<a.normal.y?(b+=a.normal.y*this.min.y,c+=a.normal.y*this.max.y):(b+=a.normal.y*this.max.y,c+=a.normal.y*this.min.y);0<a.normal.z?(b+=a.normal.z*this.min.z,c+=a.normal.z*this.max.z):(b+=a.normal.z*this.max.z,c+=a.normal.z*this.min.z);return b<=-a.constant&&c>=-a.constant;},intersectsTriangle:function intersectsTriangle(a){if(this.isEmpty())return!1;this.getCenter(ye);sf.subVectors(this.max,ye);od.subVectors(a.a,ye);pd.subVectors(a.b,ye);qd.subVectors(a.c,ye);Mb.subVectors(pd,od);Nb.subVectors(qd,pd);rc.subVectors(od,qd);a=[0,-Mb.z,Mb.y,0,-Nb.z,Nb.y,0,-rc.z,rc.y,Mb.z,0,-Mb.x,Nb.z,0,-Nb.x,rc.z,0,-rc.x,-Mb.y,Mb.x,0,-Nb.y,Nb.x,0,-rc.y,rc.x,0];if(!Qf(a,od,pd,qd,sf))return!1;a=[1,0,0,0,1,0,0,0,1];if(!Qf(a,od,pd,qd,sf))return!1;tf.crossVectors(Mb,Nb);a=[tf.x,tf.y,tf.z];return Qf(a,od,pd,qd,sf);},clampPoint:function clampPoint(a,b){void 0===b&&(console.warn("THREE.Box3: .clampPoint() target is now required"),b=new n());return b.copy(a).clamp(this.min,this.max);},distanceToPoint:function distanceToPoint(a){return jb.copy(a).clamp(this.min,this.max).sub(a).length();},getBoundingSphere:function getBoundingSphere(a){void 0===a&&console.error("THREE.Box3: .getBoundingSphere() target is now required");this.getCenter(a.center);a.radius=.5*this.getSize(jb).length();return a;},intersect:function intersect(a){this.min.max(a.min);this.max.min(a.max);this.isEmpty()&&this.makeEmpty();return this;},union:function union(a){this.min.min(a.min);this.max.max(a.max);return this;},applyMatrix4:function applyMatrix4(a){if(this.isEmpty())return this;vb[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(a);vb[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(a);vb[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(a);vb[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(a);vb[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(a);vb[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(a);vb[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(a);vb[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(a);this.setFromPoints(vb);return this;},translate:function translate(a){this.min.add(a);this.max.add(a);return this;},equals:function equals(a){return a.min.equals(this.min)&&a.max.equals(this.max);}});var yk=new ab();Object.assign(nb.prototype,{set:function set(a,b){this.center.copy(a);this.radius=b;return this;},setFromPoints:function setFromPoints(a,b){var c=this.center;void 0!==b?c.copy(b):yk.setFromPoints(a).getCenter(c);for(var d=b=0,e=a.length;d<e;d++){b=Math.max(b,c.distanceToSquared(a[d]));}this.radius=Math.sqrt(b);return this;},clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.center.copy(a.center);this.radius=a.radius;return this;},empty:function empty(){return 0>=this.radius;},containsPoint:function containsPoint(a){return a.distanceToSquared(this.center)<=this.radius*this.radius;},distanceToPoint:function distanceToPoint(a){return a.distanceTo(this.center)-this.radius;},intersectsSphere:function intersectsSphere(a){var b=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=b*b;},intersectsBox:function intersectsBox(a){return a.intersectsSphere(this);},intersectsPlane:function intersectsPlane(a){return Math.abs(a.distanceToPoint(this.center))<=this.radius;},clampPoint:function clampPoint(a,b){var c=this.center.distanceToSquared(a);void 0===b&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),b=new n());b.copy(a);c>this.radius*this.radius&&(b.sub(this.center).normalize(),b.multiplyScalar(this.radius).add(this.center));return b;},getBoundingBox:function getBoundingBox(a){void 0===a&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),a=new ab());a.set(this.center,this.center);a.expandByScalar(this.radius);return a;},applyMatrix4:function applyMatrix4(a){this.center.applyMatrix4(a);this.radius*=a.getMaxScaleOnAxis();return this;},translate:function translate(a){this.center.add(a);return this;},equals:function equals(a){return a.center.equals(this.center)&&a.radius===this.radius;}});var wb=new n(),Og=new n(),uf=new n(),Ob=new n(),Pg=new n(),vf=new n(),Qg=new n();Object.assign(Sb.prototype,{set:function set(a,b){this.origin.copy(a);this.direction.copy(b);return this;},clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.origin.copy(a.origin);this.direction.copy(a.direction);return this;},at:function at(a,b){void 0===b&&(console.warn("THREE.Ray: .at() target is now required"),b=new n());return b.copy(this.direction).multiplyScalar(a).add(this.origin);},lookAt:function lookAt(a){this.direction.copy(a).sub(this.origin).normalize();return this;},recast:function recast(a){this.origin.copy(this.at(a,wb));return this;},closestPointToPoint:function closestPointToPoint(a,b){void 0===b&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),b=new n());b.subVectors(a,this.origin);a=b.dot(this.direction);return 0>a?b.copy(this.origin):b.copy(this.direction).multiplyScalar(a).add(this.origin);},distanceToPoint:function distanceToPoint(a){return Math.sqrt(this.distanceSqToPoint(a));},distanceSqToPoint:function distanceSqToPoint(a){var b=wb.subVectors(a,this.origin).dot(this.direction);if(0>b)return this.origin.distanceToSquared(a);wb.copy(this.direction).multiplyScalar(b).add(this.origin);return wb.distanceToSquared(a);},distanceSqToSegment:function distanceSqToSegment(a,b,c,d){Og.copy(a).add(b).multiplyScalar(.5);uf.copy(b).sub(a).normalize();Ob.copy(this.origin).sub(Og);var e=.5*a.distanceTo(b),f=-this.direction.dot(uf),g=Ob.dot(this.direction),h=-Ob.dot(uf),l=Ob.lengthSq(),m=Math.abs(1-f*f);if(0<m){a=f*h-g;b=f*g-h;var k=e*m;0<=a?b>=-k?b<=k?(e=1/m,a*=e,b*=e,f=a*(a+f*b+2*g)+b*(f*a+b+2*h)+l):(b=e,a=Math.max(0,-(f*b+g)),f=-a*a+b*(b+2*h)+l):(b=-e,a=Math.max(0,-(f*b+g)),f=-a*a+b*(b+2*h)+l):b<=-k?(a=Math.max(0,-(-f*e+g)),b=0<a?-e:Math.min(Math.max(-e,-h),e),f=-a*a+b*(b+2*h)+l):b<=k?(a=0,b=Math.min(Math.max(-e,-h),e),f=b*(b+2*h)+l):(a=Math.max(0,-(f*e+g)),b=0<a?e:Math.min(Math.max(-e,-h),e),f=-a*a+b*(b+2*h)+l);}else b=0<f?-e:e,a=Math.max(0,-(f*b+g)),f=-a*a+b*(b+2*h)+l;c&&c.copy(this.direction).multiplyScalar(a).add(this.origin);d&&d.copy(uf).multiplyScalar(b).add(Og);return f;},intersectSphere:function intersectSphere(a,b){wb.subVectors(a.center,this.origin);var c=wb.dot(this.direction),d=wb.dot(wb)-c*c;a=a.radius*a.radius;if(d>a)return null;a=Math.sqrt(a-d);d=c-a;c+=a;return 0>d&&0>c?null:0>d?this.at(c,b):this.at(d,b);},intersectsSphere:function intersectsSphere(a){return this.distanceSqToPoint(a.center)<=a.radius*a.radius;},distanceToPlane:function distanceToPlane(a){var b=a.normal.dot(this.direction);if(0===b)return 0===a.distanceToPoint(this.origin)?0:null;a=-(this.origin.dot(a.normal)+a.constant)/b;return 0<=a?a:null;},intersectPlane:function intersectPlane(a,b){a=this.distanceToPlane(a);return null===a?null:this.at(a,b);},intersectsPlane:function intersectsPlane(a){var b=a.distanceToPoint(this.origin);return 0===b||0>a.normal.dot(this.direction)*b?!0:!1;},intersectBox:function intersectBox(a,b){var c=1/this.direction.x;var d=1/this.direction.y;var e=1/this.direction.z,f=this.origin;if(0<=c){var g=(a.min.x-f.x)*c;c*=a.max.x-f.x;}else g=(a.max.x-f.x)*c,c*=a.min.x-f.x;if(0<=d){var h=(a.min.y-f.y)*d;d*=a.max.y-f.y;}else h=(a.max.y-f.y)*d,d*=a.min.y-f.y;if(g>d||h>c)return null;if(h>g||g!==g)g=h;if(d<c||c!==c)c=d;0<=e?(h=(a.min.z-f.z)*e,a=(a.max.z-f.z)*e):(h=(a.max.z-f.z)*e,a=(a.min.z-f.z)*e);if(g>a||h>c)return null;if(h>g||g!==g)g=h;if(a<c||c!==c)c=a;return 0>c?null:this.at(0<=g?g:c,b);},intersectsBox:function intersectsBox(a){return null!==this.intersectBox(a,wb);},intersectTriangle:function intersectTriangle(a,b,c,d,e){Pg.subVectors(b,a);vf.subVectors(c,a);Qg.crossVectors(Pg,vf);b=this.direction.dot(Qg);if(0<b){if(d)return null;d=1;}else if(0>b)d=-1,b=-b;else return null;Ob.subVectors(this.origin,a);a=d*this.direction.dot(vf.crossVectors(Ob,vf));if(0>a)return null;c=d*this.direction.dot(Pg.cross(Ob));if(0>c||a+c>b)return null;a=-d*Ob.dot(Qg);return 0>a?null:this.at(a/b,e);},applyMatrix4:function applyMatrix4(a){this.origin.applyMatrix4(a);this.direction.transformDirection(a);return this;},equals:function equals(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction);}});var Ya=new n(),xb=new n(),Rg=new n(),yb=new n(),rd=new n(),sd=new n(),si=new n(),Sg=new n(),Tg=new n(),Ug=new n();Object.assign(R,{getNormal:function getNormal(a,b,c,d){void 0===d&&(console.warn("THREE.Triangle: .getNormal() target is now required"),d=new n());d.subVectors(c,b);Ya.subVectors(a,b);d.cross(Ya);a=d.lengthSq();return 0<a?d.multiplyScalar(1/Math.sqrt(a)):d.set(0,0,0);},getBarycoord:function getBarycoord(a,b,c,d,e){Ya.subVectors(d,b);xb.subVectors(c,b);Rg.subVectors(a,b);a=Ya.dot(Ya);b=Ya.dot(xb);c=Ya.dot(Rg);var f=xb.dot(xb);d=xb.dot(Rg);var g=a*f-b*b;void 0===e&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),e=new n());if(0===g)return e.set(-2,-1,-1);g=1/g;f=(f*c-b*d)*g;a=(a*d-b*c)*g;return e.set(1-f-a,a,f);},containsPoint:function containsPoint(a,b,c,d){R.getBarycoord(a,b,c,d,yb);return 0<=yb.x&&0<=yb.y&&1>=yb.x+yb.y;},getUV:function getUV(a,b,c,d,e,f,g,h){this.getBarycoord(a,b,c,d,yb);h.set(0,0);h.addScaledVector(e,yb.x);h.addScaledVector(f,yb.y);h.addScaledVector(g,yb.z);return h;},isFrontFacing:function isFrontFacing(a,b,c,d){Ya.subVectors(c,b);xb.subVectors(a,b);return 0>Ya.cross(xb).dot(d)?!0:!1;}});Object.assign(R.prototype,{set:function set(a,b,c){this.a.copy(a);this.b.copy(b);this.c.copy(c);return this;},setFromPointsAndIndices:function setFromPointsAndIndices(a,b,c,d){this.a.copy(a[b]);this.b.copy(a[c]);this.c.copy(a[d]);return this;},clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.a.copy(a.a);this.b.copy(a.b);this.c.copy(a.c);return this;},getArea:function getArea(){Ya.subVectors(this.c,this.b);xb.subVectors(this.a,this.b);return .5*Ya.cross(xb).length();},getMidpoint:function getMidpoint(a){void 0===a&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),a=new n());return a.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3);},getNormal:function getNormal(a){return R.getNormal(this.a,this.b,this.c,a);},getPlane:function getPlane(a){void 0===a&&(console.warn("THREE.Triangle: .getPlane() target is now required"),a=new n());return a.setFromCoplanarPoints(this.a,this.b,this.c);},getBarycoord:function getBarycoord(a,b){return R.getBarycoord(a,this.a,this.b,this.c,b);},getUV:function getUV(a,b,c,d,e){return R.getUV(a,this.a,this.b,this.c,b,c,d,e);},containsPoint:function containsPoint(a){return R.containsPoint(a,this.a,this.b,this.c);},isFrontFacing:function isFrontFacing(a){return R.isFrontFacing(this.a,this.b,this.c,a);},intersectsBox:function intersectsBox(a){return a.intersectsTriangle(this);},closestPointToPoint:function closestPointToPoint(a,b){void 0===b&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),b=new n());var c=this.a,d=this.b,e=this.c;rd.subVectors(d,c);sd.subVectors(e,c);Sg.subVectors(a,c);var f=rd.dot(Sg),g=sd.dot(Sg);if(0>=f&&0>=g)return b.copy(c);Tg.subVectors(a,d);var h=rd.dot(Tg),l=sd.dot(Tg);if(0<=h&&l<=h)return b.copy(d);var m=f*l-h*g;if(0>=m&&0<=f&&0>=h)return d=f/(f-h),b.copy(c).addScaledVector(rd,d);Ug.subVectors(a,e);a=rd.dot(Ug);var k=sd.dot(Ug);if(0<=k&&a<=k)return b.copy(e);f=a*g-f*k;if(0>=f&&0<=g&&0>=k)return m=g/(g-k),b.copy(c).addScaledVector(sd,m);g=h*k-a*l;if(0>=g&&0<=l-h&&0<=a-k)return si.subVectors(e,d),m=(l-h)/(l-h+(a-k)),b.copy(d).addScaledVector(si,m);e=1/(g+f+m);d=f*e;m*=e;return b.copy(c).addScaledVector(rd,d).addScaledVector(sd,m);},equals:function equals(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&a.c.equals(this.c);}});var zk={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fa={h:0,s:0,l:0},wf={h:0,s:0,l:0};Object.assign(H.prototype,{isColor:!0,r:1,g:1,b:1,set:function set(a){a&&a.isColor?this.copy(a):"number"===typeof a?this.setHex(a):"string"===typeof a&&this.setStyle(a);return this;},setScalar:function setScalar(a){this.b=this.g=this.r=a;return this;},setHex:function setHex(a){a=Math.floor(a);this.r=(a>>16&255)/255;this.g=(a>>8&255)/255;this.b=(a&255)/255;return this;},setRGB:function setRGB(a,b,c){this.r=a;this.g=b;this.b=c;return this;},setHSL:function setHSL(a,b,c){a=L.euclideanModulo(a,1);b=L.clamp(b,0,1);c=L.clamp(c,0,1);0===b?this.r=this.g=this.b=c:(b=.5>=c?c*(1+b):c+b-c*b,c=2*c-b,this.r=Rf(c,b,a+1/3),this.g=Rf(c,b,a),this.b=Rf(c,b,a-1/3));return this;},setStyle:function setStyle(a){function b(b){void 0!==b&&1>parseFloat(b)&&console.warn("THREE.Color: Alpha component of "+a+" will be ignored.");}var c;if(c=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(a)){var d=c[2];switch(c[1]){case"rgb":case"rgba":if(c=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))return this.r=Math.min(255,parseInt(c[1],10))/255,this.g=Math.min(255,parseInt(c[2],10))/255,this.b=Math.min(255,parseInt(c[3],10))/255,b(c[5]),this;if(c=/^(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))return this.r=Math.min(100,parseInt(c[1],10))/100,this.g=Math.min(100,parseInt(c[2],10))/100,this.b=Math.min(100,parseInt(c[3],10))/100,b(c[5]),this;break;case"hsl":case"hsla":if(c=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)){d=parseFloat(c[1])/360;var e=parseInt(c[2],10)/100,f=parseInt(c[3],10)/100;b(c[5]);return this.setHSL(d,e,f);}}}else if(c=/^#([A-Fa-f0-9]+)$/.exec(a)){c=c[1];d=c.length;if(3===d)return this.r=parseInt(c.charAt(0)+c.charAt(0),16)/255,this.g=parseInt(c.charAt(1)+c.charAt(1),16)/255,this.b=parseInt(c.charAt(2)+c.charAt(2),16)/255,this;if(6===d)return this.r=parseInt(c.charAt(0)+c.charAt(1),16)/255,this.g=parseInt(c.charAt(2)+c.charAt(3),16)/255,this.b=parseInt(c.charAt(4)+c.charAt(5),16)/255,this;}a&&0<a.length&&(c=zk[a],void 0!==c?this.setHex(c):console.warn("THREE.Color: Unknown color "+a));return this;},clone:function clone(){return new this.constructor(this.r,this.g,this.b);},copy:function copy(a){this.r=a.r;this.g=a.g;this.b=a.b;return this;},copyGammaToLinear:function copyGammaToLinear(a,b){void 0===b&&(b=2);this.r=Math.pow(a.r,b);this.g=Math.pow(a.g,b);this.b=Math.pow(a.b,b);return this;},copyLinearToGamma:function copyLinearToGamma(a,b){void 0===b&&(b=2);b=0<b?1/b:1;this.r=Math.pow(a.r,b);this.g=Math.pow(a.g,b);this.b=Math.pow(a.b,b);return this;},convertGammaToLinear:function convertGammaToLinear(a){this.copyGammaToLinear(this,a);return this;},convertLinearToGamma:function convertLinearToGamma(a){this.copyLinearToGamma(this,a);return this;},copySRGBToLinear:function copySRGBToLinear(a){this.r=Sf(a.r);this.g=Sf(a.g);this.b=Sf(a.b);return this;},copyLinearToSRGB:function copyLinearToSRGB(a){this.r=Tf(a.r);this.g=Tf(a.g);this.b=Tf(a.b);return this;},convertSRGBToLinear:function convertSRGBToLinear(){this.copySRGBToLinear(this);return this;},convertLinearToSRGB:function convertLinearToSRGB(){this.copyLinearToSRGB(this);return this;},getHex:function getHex(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0;},getHexString:function getHexString(){return("000000"+this.getHex().toString(16)).slice(-6);},getHSL:function getHSL(a){void 0===a&&(console.warn("THREE.Color: .getHSL() target is now required"),a={h:0,s:0,l:0});var b=this.r,c=this.g,d=this.b,e=Math.max(b,c,d),f=Math.min(b,c,d),g,h=(f+e)/2;if(f===e)f=g=0;else{var l=e-f;f=.5>=h?l/(e+f):l/(2-e-f);switch(e){case b:g=(c-d)/l+(c<d?6:0);break;case c:g=(d-b)/l+2;break;case d:g=(b-c)/l+4;}g/=6;}a.h=g;a.s=f;a.l=h;return a;},getStyle:function getStyle(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")";},offsetHSL:function offsetHSL(a,b,c){this.getHSL(Fa);Fa.h+=a;Fa.s+=b;Fa.l+=c;this.setHSL(Fa.h,Fa.s,Fa.l);return this;},add:function add(a){this.r+=a.r;this.g+=a.g;this.b+=a.b;return this;},addColors:function addColors(a,b){this.r=a.r+b.r;this.g=a.g+b.g;this.b=a.b+b.b;return this;},addScalar:function addScalar(a){this.r+=a;this.g+=a;this.b+=a;return this;},sub:function sub(a){this.r=Math.max(0,this.r-a.r);this.g=Math.max(0,this.g-a.g);this.b=Math.max(0,this.b-a.b);return this;},multiply:function multiply(a){this.r*=a.r;this.g*=a.g;this.b*=a.b;return this;},multiplyScalar:function multiplyScalar(a){this.r*=a;this.g*=a;this.b*=a;return this;},lerp:function lerp(a,b){this.r+=(a.r-this.r)*b;this.g+=(a.g-this.g)*b;this.b+=(a.b-this.b)*b;return this;},lerpHSL:function lerpHSL(a,b){this.getHSL(Fa);a.getHSL(wf);a=L.lerp(Fa.h,wf.h,b);var c=L.lerp(Fa.s,wf.s,b);b=L.lerp(Fa.l,wf.l,b);this.setHSL(a,c,b);return this;},equals:function equals(a){return a.r===this.r&&a.g===this.g&&a.b===this.b;},fromArray:function fromArray(a,b){void 0===b&&(b=0);this.r=a[b];this.g=a[b+1];this.b=a[b+2];return this;},toArray:function toArray(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.r;a[b+1]=this.g;a[b+2]=this.b;return a;},toJSON:function toJSON(){return this.getHex();}});Object.assign(zc.prototype,{clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.a=a.a;this.b=a.b;this.c=a.c;this.normal.copy(a.normal);this.color.copy(a.color);this.materialIndex=a.materialIndex;for(var b=0,c=a.vertexNormals.length;b<c;b++){this.vertexNormals[b]=a.vertexNormals[b].clone();}b=0;for(c=a.vertexColors.length;b<c;b++){this.vertexColors[b]=a.vertexColors[b].clone();}return this;}});var Ti=0;M.prototype=Object.assign(Object.create(Ba.prototype),{constructor:M,isMaterial:!0,onBeforeCompile:function onBeforeCompile(){},setValues:function setValues(a){if(void 0!==a)for(var b in a){var c=a[b];if(void 0===c)console.warn("THREE.Material: '"+b+"' parameter is undefined.");else if("shading"===b)console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=1===c?!0:!1;else{var d=this[b];void 0===d?console.warn("THREE."+this.type+": '"+b+"' is not a property of this material."):d&&d.isColor?d.set(c):d&&d.isVector3&&c&&c.isVector3?d.copy(c):this[b]=c;}}},toJSON:function toJSON(a){function b(a){var b=[],c;for(c in a){var d=a[c];delete d.metadata;b.push(d);}return b;}var c=void 0===a||"string"===typeof a;c&&(a={textures:{},images:{}});var d={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};d.uuid=this.uuid;d.type=this.type;""!==this.name&&(d.name=this.name);this.color&&this.color.isColor&&(d.color=this.color.getHex());void 0!==this.roughness&&(d.roughness=this.roughness);void 0!==this.metalness&&(d.metalness=this.metalness);this.sheen&&this.sheen.isColor&&(d.sheen=this.sheen.getHex());this.emissive&&this.emissive.isColor&&(d.emissive=this.emissive.getHex());this.emissiveIntensity&&1!==this.emissiveIntensity&&(d.emissiveIntensity=this.emissiveIntensity);this.specular&&this.specular.isColor&&(d.specular=this.specular.getHex());void 0!==this.shininess&&(d.shininess=this.shininess);void 0!==this.clearcoat&&(d.clearcoat=this.clearcoat);void 0!==this.clearcoatRoughness&&(d.clearcoatRoughness=this.clearcoatRoughness);this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(d.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(a).uuid,d.clearcoatNormalScale=this.clearcoatNormalScale.toArray());this.map&&this.map.isTexture&&(d.map=this.map.toJSON(a).uuid);this.matcap&&this.matcap.isTexture&&(d.matcap=this.matcap.toJSON(a).uuid);this.alphaMap&&this.alphaMap.isTexture&&(d.alphaMap=this.alphaMap.toJSON(a).uuid);this.lightMap&&this.lightMap.isTexture&&(d.lightMap=this.lightMap.toJSON(a).uuid);this.aoMap&&this.aoMap.isTexture&&(d.aoMap=this.aoMap.toJSON(a).uuid,d.aoMapIntensity=this.aoMapIntensity);this.bumpMap&&this.bumpMap.isTexture&&(d.bumpMap=this.bumpMap.toJSON(a).uuid,d.bumpScale=this.bumpScale);this.normalMap&&this.normalMap.isTexture&&(d.normalMap=this.normalMap.toJSON(a).uuid,d.normalMapType=this.normalMapType,d.normalScale=this.normalScale.toArray());this.displacementMap&&this.displacementMap.isTexture&&(d.displacementMap=this.displacementMap.toJSON(a).uuid,d.displacementScale=this.displacementScale,d.displacementBias=this.displacementBias);this.roughnessMap&&this.roughnessMap.isTexture&&(d.roughnessMap=this.roughnessMap.toJSON(a).uuid);this.metalnessMap&&this.metalnessMap.isTexture&&(d.metalnessMap=this.metalnessMap.toJSON(a).uuid);this.emissiveMap&&this.emissiveMap.isTexture&&(d.emissiveMap=this.emissiveMap.toJSON(a).uuid);this.specularMap&&this.specularMap.isTexture&&(d.specularMap=this.specularMap.toJSON(a).uuid);this.envMap&&this.envMap.isTexture&&(d.envMap=this.envMap.toJSON(a).uuid,d.reflectivity=this.reflectivity,d.refractionRatio=this.refractionRatio,void 0!==this.combine&&(d.combine=this.combine),void 0!==this.envMapIntensity&&(d.envMapIntensity=this.envMapIntensity));this.gradientMap&&this.gradientMap.isTexture&&(d.gradientMap=this.gradientMap.toJSON(a).uuid);void 0!==this.size&&(d.size=this.size);void 0!==this.sizeAttenuation&&(d.sizeAttenuation=this.sizeAttenuation);1!==this.blending&&(d.blending=this.blending);!0===this.flatShading&&(d.flatShading=this.flatShading);0!==this.side&&(d.side=this.side);0!==this.vertexColors&&(d.vertexColors=this.vertexColors);1>this.opacity&&(d.opacity=this.opacity);!0===this.transparent&&(d.transparent=this.transparent);d.depthFunc=this.depthFunc;d.depthTest=this.depthTest;d.depthWrite=this.depthWrite;d.stencilWrite=this.stencilWrite;d.stencilWriteMask=this.stencilWriteMask;d.stencilFunc=this.stencilFunc;d.stencilRef=this.stencilRef;d.stencilFuncMask=this.stencilFuncMask;d.stencilFail=this.stencilFail;d.stencilZFail=this.stencilZFail;d.stencilZPass=this.stencilZPass;this.rotation&&0!==this.rotation&&(d.rotation=this.rotation);!0===this.polygonOffset&&(d.polygonOffset=!0);0!==this.polygonOffsetFactor&&(d.polygonOffsetFactor=this.polygonOffsetFactor);0!==this.polygonOffsetUnits&&(d.polygonOffsetUnits=this.polygonOffsetUnits);this.linewidth&&1!==this.linewidth&&(d.linewidth=this.linewidth);void 0!==this.dashSize&&(d.dashSize=this.dashSize);void 0!==this.gapSize&&(d.gapSize=this.gapSize);void 0!==this.scale&&(d.scale=this.scale);!0===this.dithering&&(d.dithering=!0);0<this.alphaTest&&(d.alphaTest=this.alphaTest);!0===this.premultipliedAlpha&&(d.premultipliedAlpha=this.premultipliedAlpha);!0===this.wireframe&&(d.wireframe=this.wireframe);1<this.wireframeLinewidth&&(d.wireframeLinewidth=this.wireframeLinewidth);"round"!==this.wireframeLinecap&&(d.wireframeLinecap=this.wireframeLinecap);"round"!==this.wireframeLinejoin&&(d.wireframeLinejoin=this.wireframeLinejoin);!0===this.morphTargets&&(d.morphTargets=!0);!0===this.morphNormals&&(d.morphNormals=!0);!0===this.skinning&&(d.skinning=!0);!1===this.visible&&(d.visible=!1);!1===this.toneMapped&&(d.toneMapped=!1);"{}"!==JSON.stringify(this.userData)&&(d.userData=this.userData);c&&(c=b(a.textures),a=b(a.images),0<c.length&&(d.textures=c),0<a.length&&(d.images=a));return d;},clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.name=a.name;this.fog=a.fog;this.blending=a.blending;this.side=a.side;this.flatShading=a.flatShading;this.vertexColors=a.vertexColors;this.opacity=a.opacity;this.transparent=a.transparent;this.blendSrc=a.blendSrc;this.blendDst=a.blendDst;this.blendEquation=a.blendEquation;this.blendSrcAlpha=a.blendSrcAlpha;this.blendDstAlpha=a.blendDstAlpha;this.blendEquationAlpha=a.blendEquationAlpha;this.depthFunc=a.depthFunc;this.depthTest=a.depthTest;this.depthWrite=a.depthWrite;this.stencilWrite=a.stencilWrite;this.stencilWriteMask=a.stencilWriteMask;this.stencilFunc=a.stencilFunc;this.stencilRef=a.stencilRef;this.stencilFuncMask=a.stencilFuncMask;this.stencilFail=a.stencilFail;this.stencilZFail=a.stencilZFail;this.stencilZPass=a.stencilZPass;this.colorWrite=a.colorWrite;this.precision=a.precision;this.polygonOffset=a.polygonOffset;this.polygonOffsetFactor=a.polygonOffsetFactor;this.polygonOffsetUnits=a.polygonOffsetUnits;this.dithering=a.dithering;this.alphaTest=a.alphaTest;this.premultipliedAlpha=a.premultipliedAlpha;this.visible=a.visible;this.toneMapped=a.toneMapped;this.userData=JSON.parse(JSON.stringify(a.userData));this.clipShadows=a.clipShadows;this.clipIntersection=a.clipIntersection;var b=a.clippingPlanes,c=null;if(null!==b){var d=b.length;c=Array(d);for(var e=0;e!==d;++e){c[e]=b[e].clone();}}this.clippingPlanes=c;this.shadowSide=a.shadowSide;return this;},dispose:function dispose(){this.dispatchEvent({type:"dispose"});}});Ga.prototype=Object.create(M.prototype);Ga.prototype.constructor=Ga;Ga.prototype.isMeshBasicMaterial=!0;Ga.prototype.copy=function(a){M.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;return this;};Object.defineProperty(O.prototype,"needsUpdate",{set:function set(a){!0===a&&this.version++;}});Object.assign(O.prototype,{isBufferAttribute:!0,onUploadCallback:function onUploadCallback(){},setDynamic:function setDynamic(a){this.dynamic=a;return this;},copy:function copy(a){this.name=a.name;this.array=new a.array.constructor(a.array);this.itemSize=a.itemSize;this.count=a.count;this.normalized=a.normalized;this.dynamic=a.dynamic;return this;},copyAt:function copyAt(a,b,c){a*=this.itemSize;c*=b.itemSize;for(var d=0,e=this.itemSize;d<e;d++){this.array[a+d]=b.array[c+d];}return this;},copyArray:function copyArray(a){this.array.set(a);return this;},copyColorsArray:function copyColorsArray(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",d),f=new H());b[c++]=f.r;b[c++]=f.g;b[c++]=f.b;}return this;},copyVector2sArray:function copyVector2sArray(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",d),f=new w());b[c++]=f.x;b[c++]=f.y;}return this;},copyVector3sArray:function copyVector3sArray(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",d),f=new n());b[c++]=f.x;b[c++]=f.y;b[c++]=f.z;}return this;},copyVector4sArray:function copyVector4sArray(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",d),f=new aa());b[c++]=f.x;b[c++]=f.y;b[c++]=f.z;b[c++]=f.w;}return this;},set:function set(a,b){void 0===b&&(b=0);this.array.set(a,b);return this;},getX:function getX(a){return this.array[a*this.itemSize];},setX:function setX(a,b){this.array[a*this.itemSize]=b;return this;},getY:function getY(a){return this.array[a*this.itemSize+1];},setY:function setY(a,b){this.array[a*this.itemSize+1]=b;return this;},getZ:function getZ(a){return this.array[a*this.itemSize+2];},setZ:function setZ(a,b){this.array[a*this.itemSize+2]=b;return this;},getW:function getW(a){return this.array[a*this.itemSize+3];},setW:function setW(a,b){this.array[a*this.itemSize+3]=b;return this;},setXY:function setXY(a,b,c){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;return this;},setXYZ:function setXYZ(a,b,c,d){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;this.array[a+2]=d;return this;},setXYZW:function setXYZW(a,b,c,d,e){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;this.array[a+2]=d;this.array[a+3]=e;return this;},onUpload:function onUpload(a){this.onUploadCallback=a;return this;},clone:function clone(){return new this.constructor(this.array,this.itemSize).copy(this);},toJSON:function toJSON(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};}});xd.prototype=Object.create(O.prototype);xd.prototype.constructor=xd;yd.prototype=Object.create(O.prototype);yd.prototype.constructor=yd;zd.prototype=Object.create(O.prototype);zd.prototype.constructor=zd;Ad.prototype=Object.create(O.prototype);Ad.prototype.constructor=Ad;Tb.prototype=Object.create(O.prototype);Tb.prototype.constructor=Tb;Bd.prototype=Object.create(O.prototype);Bd.prototype.constructor=Bd;Ub.prototype=Object.create(O.prototype);Ub.prototype.constructor=Ub;A.prototype=Object.create(O.prototype);A.prototype.constructor=A;Cd.prototype=Object.create(O.prototype);Cd.prototype.constructor=Cd;Object.assign(jh.prototype,{computeGroups:function computeGroups(a){var b=[],c=void 0;a=a.faces;for(var d=0;d<a.length;d++){var e=a[d];if(e.materialIndex!==c){c=e.materialIndex;void 0!==f&&(f.count=3*d-f.start,b.push(f));var f={start:3*d,materialIndex:c};}}void 0!==f&&(f.count=3*d-f.start,b.push(f));this.groups=b;},fromGeometry:function fromGeometry(a){var b=a.faces,c=a.vertices,d=a.faceVertexUvs,e=d[0]&&0<d[0].length,f=d[1]&&0<d[1].length,g=a.morphTargets,h=g.length;if(0<h){var l=[];for(var m=0;m<h;m++){l[m]={name:g[m].name,data:[]};}this.morphTargets.position=l;}var k=a.morphNormals,n=k.length;if(0<n){var t=[];for(m=0;m<n;m++){t[m]={name:k[m].name,data:[]};}this.morphTargets.normal=t;}var r=a.skinIndices,p=a.skinWeights,v=r.length===c.length,x=p.length===c.length;0<c.length&&0===b.length&&console.error("THREE.DirectGeometry: Faceless geometries are not supported.");for(m=0;m<b.length;m++){var z=b[m];this.vertices.push(c[z.a],c[z.b],c[z.c]);var y=z.vertexNormals;3===y.length?this.normals.push(y[0],y[1],y[2]):(y=z.normal,this.normals.push(y,y,y));y=z.vertexColors;3===y.length?this.colors.push(y[0],y[1],y[2]):(y=z.color,this.colors.push(y,y,y));!0===e&&(y=d[0][m],void 0!==y?this.uvs.push(y[0],y[1],y[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",m),this.uvs.push(new w(),new w(),new w())));!0===f&&(y=d[1][m],void 0!==y?this.uvs2.push(y[0],y[1],y[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",m),this.uvs2.push(new w(),new w(),new w())));for(y=0;y<h;y++){var A=g[y].vertices;l[y].data.push(A[z.a],A[z.b],A[z.c]);}for(y=0;y<n;y++){A=k[y].vertexNormals[m],t[y].data.push(A.a,A.b,A.c);}v&&this.skinIndices.push(r[z.a],r[z.b],r[z.c]);x&&this.skinWeights.push(p[z.a],p[z.b],p[z.c]);}this.computeGroups(a);this.verticesNeedUpdate=a.verticesNeedUpdate;this.normalsNeedUpdate=a.normalsNeedUpdate;this.colorsNeedUpdate=a.colorsNeedUpdate;this.uvsNeedUpdate=a.uvsNeedUpdate;this.groupsNeedUpdate=a.groupsNeedUpdate;null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());return this;}});var Ui=1,kb=new U(),Vg=new B(),xf=new n(),sc=new ab(),Wg=new ab(),Za=new n();E.prototype=Object.assign(Object.create(Ba.prototype),{constructor:E,isBufferGeometry:!0,getIndex:function getIndex(){return this.index;},setIndex:function setIndex(a){Array.isArray(a)?this.index=new(65535<kh(a)?Ub:Tb)(a,1):this.index=a;},addAttribute:function addAttribute(a,b,c){return b&&b.isBufferAttribute||b&&b.isInterleavedBufferAttribute?"index"===a?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(b),this):this.setAttribute(a,b):(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.addAttribute(a,new O(b,c)));},getAttribute:function getAttribute(a){return this.attributes[a];},setAttribute:function setAttribute(a,b){this.attributes[a]=b;return this;},removeAttribute:function removeAttribute(a){delete this.attributes[a];return this;},addGroup:function addGroup(a,b,c){this.groups.push({start:a,count:b,materialIndex:void 0!==c?c:0});},clearGroups:function clearGroups(){this.groups=[];},setDrawRange:function setDrawRange(a,b){this.drawRange.start=a;this.drawRange.count=b;},applyMatrix:function applyMatrix(a){var b=this.attributes.position;void 0!==b&&(a.applyToBufferAttribute(b),b.needsUpdate=!0);var c=this.attributes.normal;void 0!==c&&(b=new Y().getNormalMatrix(a),b.applyToBufferAttribute(c),c.needsUpdate=!0);c=this.attributes.tangent;void 0!==c&&(b=new Y().getNormalMatrix(a),b.applyToBufferAttribute(c),c.needsUpdate=!0);null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere();return this;},rotateX:function rotateX(a){kb.makeRotationX(a);this.applyMatrix(kb);return this;},rotateY:function rotateY(a){kb.makeRotationY(a);this.applyMatrix(kb);return this;},rotateZ:function rotateZ(a){kb.makeRotationZ(a);this.applyMatrix(kb);return this;},translate:function translate(a,b,c){kb.makeTranslation(a,b,c);this.applyMatrix(kb);return this;},scale:function scale(a,b,c){kb.makeScale(a,b,c);this.applyMatrix(kb);return this;},lookAt:function lookAt(a){Vg.lookAt(a);Vg.updateMatrix();this.applyMatrix(Vg.matrix);return this;},center:function center(){this.computeBoundingBox();this.boundingBox.getCenter(xf).negate();this.translate(xf.x,xf.y,xf.z);return this;},setFromObject:function setFromObject(a){var b=a.geometry;if(a.isPoints||a.isLine){a=new A(3*b.vertices.length,3);var c=new A(3*b.colors.length,3);this.addAttribute("position",a.copyVector3sArray(b.vertices));this.addAttribute("color",c.copyColorsArray(b.colors));b.lineDistances&&b.lineDistances.length===b.vertices.length&&(a=new A(b.lineDistances.length,1),this.addAttribute("lineDistance",a.copyArray(b.lineDistances)));null!==b.boundingSphere&&(this.boundingSphere=b.boundingSphere.clone());null!==b.boundingBox&&(this.boundingBox=b.boundingBox.clone());}else a.isMesh&&b&&b.isGeometry&&this.fromGeometry(b);return this;},setFromPoints:function setFromPoints(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c];b.push(e.x,e.y,e.z||0);}this.addAttribute("position",new A(b,3));return this;},updateFromObject:function updateFromObject(a){var b=a.geometry;if(a.isMesh){var c=b.__directGeometry;!0===b.elementsNeedUpdate&&(c=void 0,b.elementsNeedUpdate=!1);if(void 0===c)return this.fromGeometry(b);c.verticesNeedUpdate=b.verticesNeedUpdate;c.normalsNeedUpdate=b.normalsNeedUpdate;c.colorsNeedUpdate=b.colorsNeedUpdate;c.uvsNeedUpdate=b.uvsNeedUpdate;c.groupsNeedUpdate=b.groupsNeedUpdate;b.verticesNeedUpdate=!1;b.normalsNeedUpdate=!1;b.colorsNeedUpdate=!1;b.uvsNeedUpdate=!1;b.groupsNeedUpdate=!1;b=c;}!0===b.verticesNeedUpdate&&(c=this.attributes.position,void 0!==c&&(c.copyVector3sArray(b.vertices),c.needsUpdate=!0),b.verticesNeedUpdate=!1);!0===b.normalsNeedUpdate&&(c=this.attributes.normal,void 0!==c&&(c.copyVector3sArray(b.normals),c.needsUpdate=!0),b.normalsNeedUpdate=!1);!0===b.colorsNeedUpdate&&(c=this.attributes.color,void 0!==c&&(c.copyColorsArray(b.colors),c.needsUpdate=!0),b.colorsNeedUpdate=!1);b.uvsNeedUpdate&&(c=this.attributes.uv,void 0!==c&&(c.copyVector2sArray(b.uvs),c.needsUpdate=!0),b.uvsNeedUpdate=!1);b.lineDistancesNeedUpdate&&(c=this.attributes.lineDistance,void 0!==c&&(c.copyArray(b.lineDistances),c.needsUpdate=!0),b.lineDistancesNeedUpdate=!1);b.groupsNeedUpdate&&(b.computeGroups(a.geometry),this.groups=b.groups,b.groupsNeedUpdate=!1);return this;},fromGeometry:function fromGeometry(a){a.__directGeometry=new jh().fromGeometry(a);return this.fromDirectGeometry(a.__directGeometry);},fromDirectGeometry:function fromDirectGeometry(a){var b=new Float32Array(3*a.vertices.length);this.addAttribute("position",new O(b,3).copyVector3sArray(a.vertices));0<a.normals.length&&(b=new Float32Array(3*a.normals.length),this.addAttribute("normal",new O(b,3).copyVector3sArray(a.normals)));0<a.colors.length&&(b=new Float32Array(3*a.colors.length),this.addAttribute("color",new O(b,3).copyColorsArray(a.colors)));0<a.uvs.length&&(b=new Float32Array(2*a.uvs.length),this.addAttribute("uv",new O(b,2).copyVector2sArray(a.uvs)));0<a.uvs2.length&&(b=new Float32Array(2*a.uvs2.length),this.addAttribute("uv2",new O(b,2).copyVector2sArray(a.uvs2)));this.groups=a.groups;for(var c in a.morphTargets){b=[];for(var d=a.morphTargets[c],e=0,f=d.length;e<f;e++){var g=d[e],h=new A(3*g.data.length,3);h.name=g.name;b.push(h.copyVector3sArray(g.data));}this.morphAttributes[c]=b;}0<a.skinIndices.length&&(c=new A(4*a.skinIndices.length,4),this.addAttribute("skinIndex",c.copyVector4sArray(a.skinIndices)));0<a.skinWeights.length&&(c=new A(4*a.skinWeights.length,4),this.addAttribute("skinWeight",c.copyVector4sArray(a.skinWeights)));null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());return this;},computeBoundingBox:function computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new ab());var a=this.attributes.position,b=this.morphAttributes.position;if(void 0!==a){if(this.boundingBox.setFromBufferAttribute(a),b){a=0;for(var c=b.length;a<c;a++){sc.setFromBufferAttribute(b[a]),this.boundingBox.expandByPoint(sc.min),this.boundingBox.expandByPoint(sc.max);}}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this);},computeBoundingSphere:function computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new nb());var a=this.attributes.position,b=this.morphAttributes.position;if(a){var c=this.boundingSphere.center;sc.setFromBufferAttribute(a);if(b)for(var d=0,e=b.length;d<e;d++){var f=b[d];Wg.setFromBufferAttribute(f);sc.expandByPoint(Wg.min);sc.expandByPoint(Wg.max);}sc.getCenter(c);var g=0;d=0;for(e=a.count;d<e;d++){Za.fromBufferAttribute(a,d),g=Math.max(g,c.distanceToSquared(Za));}if(b)for(d=0,e=b.length;d<e;d++){f=b[d];a=0;for(var h=f.count;a<h;a++){Za.fromBufferAttribute(f,a),g=Math.max(g,c.distanceToSquared(Za));}}this.boundingSphere.radius=Math.sqrt(g);isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this);}},computeFaceNormals:function computeFaceNormals(){},computeVertexNormals:function computeVertexNormals(){var a=this.index,b=this.attributes;if(b.position){var c=b.position.array;if(void 0===b.normal)this.addAttribute("normal",new O(new Float32Array(c.length),3));else for(var d=b.normal.array,e=0,f=d.length;e<f;e++){d[e]=0;}d=b.normal.array;var g=new n(),h=new n(),l=new n(),m=new n(),k=new n();if(a){var u=a.array;e=0;for(f=a.count;e<f;e+=3){a=3*u[e+0];var t=3*u[e+1];var r=3*u[e+2];g.fromArray(c,a);h.fromArray(c,t);l.fromArray(c,r);m.subVectors(l,h);k.subVectors(g,h);m.cross(k);d[a]+=m.x;d[a+1]+=m.y;d[a+2]+=m.z;d[t]+=m.x;d[t+1]+=m.y;d[t+2]+=m.z;d[r]+=m.x;d[r+1]+=m.y;d[r+2]+=m.z;}}else for(e=0,f=c.length;e<f;e+=9){g.fromArray(c,e),h.fromArray(c,e+3),l.fromArray(c,e+6),m.subVectors(l,h),k.subVectors(g,h),m.cross(k),d[e]=m.x,d[e+1]=m.y,d[e+2]=m.z,d[e+3]=m.x,d[e+4]=m.y,d[e+5]=m.z,d[e+6]=m.x,d[e+7]=m.y,d[e+8]=m.z;}this.normalizeNormals();b.normal.needsUpdate=!0;}},merge:function merge(a,b){if(a&&a.isBufferGeometry){void 0===b&&(b=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));var c=this.attributes,d;for(d in c){if(void 0!==a.attributes[d]){var e=c[d].array,f=a.attributes[d],g=f.array,h=f.itemSize*b;f=Math.min(g.length,e.length-h);for(var l=0;l<f;l++,h++){e[h]=g[l];}}}return this;}console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",a);},normalizeNormals:function normalizeNormals(){for(var a=this.attributes.normal,b=0,c=a.count;b<c;b++){Za.x=a.getX(b),Za.y=a.getY(b),Za.z=a.getZ(b),Za.normalize(),a.setXYZ(b,Za.x,Za.y,Za.z);}},toNonIndexed:function toNonIndexed(){function a(a,b){var c=a.array;a=a.itemSize;for(var d=new c.constructor(b.length*a),e,f=0,g=0,h=b.length;g<h;g++){e=b[g]*a;for(var l=0;l<a;l++){d[f++]=c[e++];}}return new O(d,a);}if(null===this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;var b=new E(),c=this.index.array,d=this.attributes,e;for(e in d){var f=d[e];f=a(f,c);b.addAttribute(e,f);}var g=this.morphAttributes;for(e in g){var h=[],l=g[e];d=0;for(var m=l.length;d<m;d++){f=l[d],f=a(f,c),h.push(f);}b.morphAttributes[e]=h;}c=this.groups;d=0;for(e=c.length;d<e;d++){f=c[d],b.addGroup(f.start,f.count,f.materialIndex);}return b;},toJSON:function toJSON(){var a={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};a.uuid=this.uuid;a.type=this.type;""!==this.name&&(a.name=this.name);0<Object.keys(this.userData).length&&(a.userData=this.userData);if(void 0!==this.parameters){var b=this.parameters;for(m in b){void 0!==b[m]&&(a[m]=b[m]);}return a;}a.data={attributes:{}};b=this.index;null!==b&&(a.data.index={type:b.array.constructor.name,array:Array.prototype.slice.call(b.array)});var c=this.attributes;for(m in c){b=c[m];var d=b.toJSON();""!==b.name&&(d.name=b.name);a.data.attributes[m]=d;}c={};var e=!1;for(m in this.morphAttributes){for(var f=this.morphAttributes[m],g=[],h=0,l=f.length;h<l;h++){b=f[h],d=b.toJSON(),""!==b.name&&(d.name=b.name),g.push(d);}0<g.length&&(c[m]=g,e=!0);}e&&(a.data.morphAttributes=c);var m=this.groups;0<m.length&&(a.data.groups=JSON.parse(JSON.stringify(m)));m=this.boundingSphere;null!==m&&(a.data.boundingSphere={center:m.center.toArray(),radius:m.radius});return a;},clone:function clone(){return new E().copy(this);},copy:function copy(a){var b;this.index=null;this.attributes={};this.morphAttributes={};this.groups=[];this.boundingSphere=this.boundingBox=null;this.name=a.name;var c=a.index;null!==c&&this.setIndex(c.clone());c=a.attributes;for(g in c){this.addAttribute(g,c[g].clone());}var d=a.morphAttributes;for(g in d){var e=[],f=d[g];c=0;for(b=f.length;c<b;c++){e.push(f[c].clone());}this.morphAttributes[g]=e;}var g=a.groups;c=0;for(b=g.length;c<b;c++){d=g[c],this.addGroup(d.start,d.count,d.materialIndex);}g=a.boundingBox;null!==g&&(this.boundingBox=g.clone());g=a.boundingSphere;null!==g&&(this.boundingSphere=g.clone());this.drawRange.start=a.drawRange.start;this.drawRange.count=a.drawRange.count;this.userData=a.userData;return this;},dispose:function dispose(){this.dispatchEvent({type:"dispose"});}});var ti=new U(),tc=new Sb(),Xg=new nb(),Vb=new n(),Wb=new n(),Xb=new n(),mh=new n(),nh=new n(),oh=new n(),Uf=new n(),Vf=new n(),Wf=new n(),Ac=new w(),Bc=new w(),Cc=new w(),Dd=new n(),Ee=new n();ja.prototype=Object.assign(Object.create(B.prototype),{constructor:ja,isMesh:!0,setDrawMode:function setDrawMode(a){this.drawMode=a;},copy:function copy(a){B.prototype.copy.call(this,a);this.drawMode=a.drawMode;void 0!==a.morphTargetInfluences&&(this.morphTargetInfluences=a.morphTargetInfluences.slice());void 0!==a.morphTargetDictionary&&(this.morphTargetDictionary=Object.assign({},a.morphTargetDictionary));return this;},updateMorphTargets:function updateMorphTargets(){var a=this.geometry;if(a.isBufferGeometry){a=a.morphAttributes;var b=Object.keys(a);if(0<b.length){var c=a[b[0]];if(void 0!==c)for(this.morphTargetInfluences=[],this.morphTargetDictionary={},a=0,b=c.length;a<b;a++){var d=c[a].name||String(a);this.morphTargetInfluences.push(0);this.morphTargetDictionary[d]=a;}}}else a=a.morphTargets,void 0!==a&&0<a.length&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");},raycast:function raycast(a,b){var c=this.geometry,d=this.material,e=this.matrixWorld;if(void 0!==d&&(null===c.boundingSphere&&c.computeBoundingSphere(),Xg.copy(c.boundingSphere),Xg.applyMatrix4(e),!1!==a.ray.intersectsSphere(Xg)&&(ti.getInverse(e),tc.copy(a.ray).applyMatrix4(ti),null===c.boundingBox||!1!==tc.intersectsBox(c.boundingBox))))if(c.isBufferGeometry){var f=c.index;e=c.attributes.position;var g=c.morphAttributes.position,h=c.attributes.uv,l=c.attributes.uv2,m=c.groups,k=c.drawRange,n,t;if(null!==f){if(Array.isArray(d)){var r=0;for(n=m.length;r<n;r++){var p=m[r];var v=d[p.materialIndex];var x=Math.max(p.start,k.start);for(t=c=Math.min(p.start+p.count,k.start+k.count);x<t;x+=3){c=f.getX(x);var z=f.getX(x+1);var y=f.getX(x+2);if(c=Fe(this,v,a,tc,e,g,h,l,c,z,y))c.faceIndex=Math.floor(x/3),c.face.materialIndex=p.materialIndex,b.push(c);}}}else for(x=Math.max(0,k.start),c=Math.min(f.count,k.start+k.count),r=x,n=c;r<n;r+=3){if(c=f.getX(r),z=f.getX(r+1),y=f.getX(r+2),c=Fe(this,d,a,tc,e,g,h,l,c,z,y))c.faceIndex=Math.floor(r/3),b.push(c);}}else if(void 0!==e)if(Array.isArray(d))for(r=0,n=m.length;r<n;r++){for(p=m[r],v=d[p.materialIndex],x=Math.max(p.start,k.start),t=c=Math.min(p.start+p.count,k.start+k.count);x<t;x+=3){if(c=x,z=x+1,y=x+2,c=Fe(this,v,a,tc,e,g,h,l,c,z,y))c.faceIndex=Math.floor(x/3),c.face.materialIndex=p.materialIndex,b.push(c);}}else for(x=Math.max(0,k.start),c=Math.min(e.count,k.start+k.count),r=x,n=c;r<n;r+=3){if(c=r,z=r+1,y=r+2,c=Fe(this,d,a,tc,e,g,h,l,c,z,y))c.faceIndex=Math.floor(r/3),b.push(c);}}else if(c.isGeometry)for(e=Array.isArray(d),g=c.vertices,h=c.faces,c=c.faceVertexUvs[0],0<c.length&&(f=c),r=0,n=h.length;r<n;r++){if(p=h[r],c=e?d[p.materialIndex]:d,void 0!==c&&(l=g[p.a],m=g[p.b],k=g[p.c],c=lh(this,c,a,tc,l,m,k,Dd)))f&&f[r]&&(v=f[r],Ac.copy(v[0]),Bc.copy(v[1]),Cc.copy(v[2]),c.uv=R.getUV(Dd,l,m,k,Ac,Bc,Cc,new w())),c.face=p,c.faceIndex=r,b.push(c);}},clone:function clone(){return new this.constructor(this.geometry,this.material).copy(this);}});var Vi=0,lb=new U(),Yg=new B(),yf=new n();F.prototype=Object.assign(Object.create(Ba.prototype),{constructor:F,isGeometry:!0,applyMatrix:function applyMatrix(a){for(var b=new Y().getNormalMatrix(a),c=0,d=this.vertices.length;c<d;c++){this.vertices[c].applyMatrix4(a);}c=0;for(d=this.faces.length;c<d;c++){a=this.faces[c];a.normal.applyMatrix3(b).normalize();for(var e=0,f=a.vertexNormals.length;e<f;e++){a.vertexNormals[e].applyMatrix3(b).normalize();}}null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere();this.normalsNeedUpdate=this.verticesNeedUpdate=!0;return this;},rotateX:function rotateX(a){lb.makeRotationX(a);this.applyMatrix(lb);return this;},rotateY:function rotateY(a){lb.makeRotationY(a);this.applyMatrix(lb);return this;},rotateZ:function rotateZ(a){lb.makeRotationZ(a);this.applyMatrix(lb);return this;},translate:function translate(a,b,c){lb.makeTranslation(a,b,c);this.applyMatrix(lb);return this;},scale:function scale(a,b,c){lb.makeScale(a,b,c);this.applyMatrix(lb);return this;},lookAt:function lookAt(a){Yg.lookAt(a);Yg.updateMatrix();this.applyMatrix(Yg.matrix);return this;},fromBufferGeometry:function fromBufferGeometry(a){function b(a,b,d,e){var f=void 0===h?[]:[c.colors[a].clone(),c.colors[b].clone(),c.colors[d].clone()],k=void 0===g?[]:[new n().fromArray(g,3*a),new n().fromArray(g,3*b),new n().fromArray(g,3*d)];e=new zc(a,b,d,k,f,e);c.faces.push(e);void 0!==l&&c.faceVertexUvs[0].push([new w().fromArray(l,2*a),new w().fromArray(l,2*b),new w().fromArray(l,2*d)]);void 0!==m&&c.faceVertexUvs[1].push([new w().fromArray(m,2*a),new w().fromArray(m,2*b),new w().fromArray(m,2*d)]);}var c=this,d=null!==a.index?a.index.array:void 0,e=a.attributes;if(void 0===e.position)return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."),this;var f=e.position.array,g=void 0!==e.normal?e.normal.array:void 0,h=void 0!==e.color?e.color.array:void 0,l=void 0!==e.uv?e.uv.array:void 0,m=void 0!==e.uv2?e.uv2.array:void 0;void 0!==m&&(this.faceVertexUvs[1]=[]);for(e=0;e<f.length;e+=3){c.vertices.push(new n().fromArray(f,e)),void 0!==h&&c.colors.push(new H().fromArray(h,e));}var k=a.groups;if(0<k.length)for(e=0;e<k.length;e++){f=k[e];var u=f.start,t=u;for(u+=f.count;t<u;t+=3){void 0!==d?b(d[t],d[t+1],d[t+2],f.materialIndex):b(t,t+1,t+2,f.materialIndex);}}else if(void 0!==d)for(e=0;e<d.length;e+=3){b(d[e],d[e+1],d[e+2]);}else for(e=0;e<f.length/3;e+=3){b(e,e+1,e+2);}this.computeFaceNormals();null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());return this;},center:function center(){this.computeBoundingBox();this.boundingBox.getCenter(yf).negate();this.translate(yf.x,yf.y,yf.z);return this;},normalize:function normalize(){this.computeBoundingSphere();var a=this.boundingSphere.center,b=this.boundingSphere.radius;b=0===b?1:1/b;var c=new U();c.set(b,0,0,-b*a.x,0,b,0,-b*a.y,0,0,b,-b*a.z,0,0,0,1);this.applyMatrix(c);return this;},computeFaceNormals:function computeFaceNormals(){for(var a=new n(),b=new n(),c=0,d=this.faces.length;c<d;c++){var e=this.faces[c],f=this.vertices[e.a],g=this.vertices[e.b];a.subVectors(this.vertices[e.c],g);b.subVectors(f,g);a.cross(b);a.normalize();e.normal.copy(a);}},computeVertexNormals:function computeVertexNormals(a){void 0===a&&(a=!0);var b;var c=Array(this.vertices.length);var d=0;for(b=this.vertices.length;d<b;d++){c[d]=new n();}if(a){var e=new n(),f=new n();a=0;for(d=this.faces.length;a<d;a++){b=this.faces[a];var g=this.vertices[b.a];var h=this.vertices[b.b];var l=this.vertices[b.c];e.subVectors(l,h);f.subVectors(g,h);e.cross(f);c[b.a].add(e);c[b.b].add(e);c[b.c].add(e);}}else for(this.computeFaceNormals(),a=0,d=this.faces.length;a<d;a++){b=this.faces[a],c[b.a].add(b.normal),c[b.b].add(b.normal),c[b.c].add(b.normal);}d=0;for(b=this.vertices.length;d<b;d++){c[d].normalize();}a=0;for(d=this.faces.length;a<d;a++){b=this.faces[a],g=b.vertexNormals,3===g.length?(g[0].copy(c[b.a]),g[1].copy(c[b.b]),g[2].copy(c[b.c])):(g[0]=c[b.a].clone(),g[1]=c[b.b].clone(),g[2]=c[b.c].clone());}0<this.faces.length&&(this.normalsNeedUpdate=!0);},computeFlatVertexNormals:function computeFlatVertexNormals(){var a;this.computeFaceNormals();var b=0;for(a=this.faces.length;b<a;b++){var c=this.faces[b];var d=c.vertexNormals;3===d.length?(d[0].copy(c.normal),d[1].copy(c.normal),d[2].copy(c.normal)):(d[0]=c.normal.clone(),d[1]=c.normal.clone(),d[2]=c.normal.clone());}0<this.faces.length&&(this.normalsNeedUpdate=!0);},computeMorphNormals:function computeMorphNormals(){var a,b;var c=0;for(b=this.faces.length;c<b;c++){var d=this.faces[c];d.__originalFaceNormal?d.__originalFaceNormal.copy(d.normal):d.__originalFaceNormal=d.normal.clone();d.__originalVertexNormals||(d.__originalVertexNormals=[]);var e=0;for(a=d.vertexNormals.length;e<a;e++){d.__originalVertexNormals[e]?d.__originalVertexNormals[e].copy(d.vertexNormals[e]):d.__originalVertexNormals[e]=d.vertexNormals[e].clone();}}var f=new F();f.faces=this.faces;e=0;for(a=this.morphTargets.length;e<a;e++){if(!this.morphNormals[e]){this.morphNormals[e]={};this.morphNormals[e].faceNormals=[];this.morphNormals[e].vertexNormals=[];d=this.morphNormals[e].faceNormals;var g=this.morphNormals[e].vertexNormals;c=0;for(b=this.faces.length;c<b;c++){var h=new n();var l={a:new n(),b:new n(),c:new n()};d.push(h);g.push(l);}}g=this.morphNormals[e];f.vertices=this.morphTargets[e].vertices;f.computeFaceNormals();f.computeVertexNormals();c=0;for(b=this.faces.length;c<b;c++){d=this.faces[c],h=g.faceNormals[c],l=g.vertexNormals[c],h.copy(d.normal),l.a.copy(d.vertexNormals[0]),l.b.copy(d.vertexNormals[1]),l.c.copy(d.vertexNormals[2]);}}c=0;for(b=this.faces.length;c<b;c++){d=this.faces[c],d.normal=d.__originalFaceNormal,d.vertexNormals=d.__originalVertexNormals;}},computeBoundingBox:function computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new ab());this.boundingBox.setFromPoints(this.vertices);},computeBoundingSphere:function computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new nb());this.boundingSphere.setFromPoints(this.vertices);},merge:function merge(a,b,c){if(a&&a.isGeometry){var d,e=this.vertices.length,f=this.vertices,g=a.vertices,h=this.faces,l=a.faces,m=this.colors,k=a.colors;void 0===c&&(c=0);void 0!==b&&(d=new Y().getNormalMatrix(b));for(var n=0,t=g.length;n<t;n++){var r=g[n].clone();void 0!==b&&r.applyMatrix4(b);f.push(r);}n=0;for(t=k.length;n<t;n++){m.push(k[n].clone());}n=0;for(t=l.length;n<t;n++){g=l[n];var p=g.vertexNormals;k=g.vertexColors;m=new zc(g.a+e,g.b+e,g.c+e);m.normal.copy(g.normal);void 0!==d&&m.normal.applyMatrix3(d).normalize();b=0;for(f=p.length;b<f;b++){r=p[b].clone(),void 0!==d&&r.applyMatrix3(d).normalize(),m.vertexNormals.push(r);}m.color.copy(g.color);b=0;for(f=k.length;b<f;b++){r=k[b],m.vertexColors.push(r.clone());}m.materialIndex=g.materialIndex+c;h.push(m);}n=0;for(t=a.faceVertexUvs.length;n<t;n++){for(c=a.faceVertexUvs[n],void 0===this.faceVertexUvs[n]&&(this.faceVertexUvs[n]=[]),b=0,f=c.length;b<f;b++){d=c[b];e=[];h=0;for(l=d.length;h<l;h++){e.push(d[h].clone());}this.faceVertexUvs[n].push(e);}}}else console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",a);},mergeMesh:function mergeMesh(a){a&&a.isMesh?(a.matrixAutoUpdate&&a.updateMatrix(),this.merge(a.geometry,a.matrix)):console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",a);},mergeVertices:function mergeVertices(){var a={},b=[],c=[],d=Math.pow(10,4),e;var f=0;for(e=this.vertices.length;f<e;f++){var g=this.vertices[f];g=Math.round(g.x*d)+"_"+Math.round(g.y*d)+"_"+Math.round(g.z*d);void 0===a[g]?(a[g]=f,b.push(this.vertices[f]),c[f]=b.length-1):c[f]=c[a[g]];}a=[];f=0;for(e=this.faces.length;f<e;f++){for(d=this.faces[f],d.a=c[d.a],d.b=c[d.b],d.c=c[d.c],d=[d.a,d.b,d.c],g=0;3>g;g++){if(d[g]===d[(g+1)%3]){a.push(f);break;}}}for(f=a.length-1;0<=f;f--){for(d=a[f],this.faces.splice(d,1),c=0,e=this.faceVertexUvs.length;c<e;c++){this.faceVertexUvs[c].splice(d,1);}}f=this.vertices.length-b.length;this.vertices=b;return f;},setFromPoints:function setFromPoints(a){this.vertices=[];for(var b=0,c=a.length;b<c;b++){var d=a[b];this.vertices.push(new n(d.x,d.y,d.z||0));}return this;},sortFacesByMaterialIndex:function sortFacesByMaterialIndex(){for(var a=this.faces,b=a.length,c=0;c<b;c++){a[c]._id=c;}a.sort(function(a,b){return a.materialIndex-b.materialIndex;});var d=this.faceVertexUvs[0],e=this.faceVertexUvs[1],f,g;d&&d.length===b&&(f=[]);e&&e.length===b&&(g=[]);for(c=0;c<b;c++){var h=a[c]._id;f&&f.push(d[h]);g&&g.push(e[h]);}f&&(this.faceVertexUvs[0]=f);g&&(this.faceVertexUvs[1]=g);},toJSON:function toJSON(){function a(a,b,c){return c?a|1<<b:a&~(1<<b);}function b(a){var b=a.x.toString()+a.y.toString()+a.z.toString();if(void 0!==k[b])return k[b];k[b]=l.length/3;l.push(a.x,a.y,a.z);return k[b];}function c(a){var b=a.r.toString()+a.g.toString()+a.b.toString();if(void 0!==u[b])return u[b];u[b]=n.length;n.push(a.getHex());return u[b];}function d(a){var b=a.x.toString()+a.y.toString();if(void 0!==r[b])return r[b];r[b]=t.length/2;t.push(a.x,a.y);return r[b];}var e={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};e.uuid=this.uuid;e.type=this.type;""!==this.name&&(e.name=this.name);if(void 0!==this.parameters){var f=this.parameters,g;for(g in f){void 0!==f[g]&&(e[g]=f[g]);}return e;}f=[];for(g=0;g<this.vertices.length;g++){var h=this.vertices[g];f.push(h.x,h.y,h.z);}h=[];var l=[],k={},n=[],u={},t=[],r={};for(g=0;g<this.faces.length;g++){var p=this.faces[g],v=void 0!==this.faceVertexUvs[0][g],x=0<p.normal.length(),z=0<p.vertexNormals.length,y=1!==p.color.r||1!==p.color.g||1!==p.color.b,w=0<p.vertexColors.length,A=0;A=a(A,0,0);A=a(A,1,!0);A=a(A,2,!1);A=a(A,3,v);A=a(A,4,x);A=a(A,5,z);A=a(A,6,y);A=a(A,7,w);h.push(A);h.push(p.a,p.b,p.c);h.push(p.materialIndex);v&&(v=this.faceVertexUvs[0][g],h.push(d(v[0]),d(v[1]),d(v[2])));x&&h.push(b(p.normal));z&&(x=p.vertexNormals,h.push(b(x[0]),b(x[1]),b(x[2])));y&&h.push(c(p.color));w&&(p=p.vertexColors,h.push(c(p[0]),c(p[1]),c(p[2])));}e.data={};e.data.vertices=f;e.data.normals=l;0<n.length&&(e.data.colors=n);0<t.length&&(e.data.uvs=[t]);e.data.faces=h;return e;},clone:function clone(){return new F().copy(this);},copy:function copy(a){var b,c,d;this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.name=a.name;var e=a.vertices;var f=0;for(b=e.length;f<b;f++){this.vertices.push(e[f].clone());}e=a.colors;f=0;for(b=e.length;f<b;f++){this.colors.push(e[f].clone());}e=a.faces;f=0;for(b=e.length;f<b;f++){this.faces.push(e[f].clone());}f=0;for(b=a.faceVertexUvs.length;f<b;f++){var g=a.faceVertexUvs[f];void 0===this.faceVertexUvs[f]&&(this.faceVertexUvs[f]=[]);e=0;for(c=g.length;e<c;e++){var h=g[e],l=[];var k=0;for(d=h.length;k<d;k++){l.push(h[k].clone());}this.faceVertexUvs[f].push(l);}}k=a.morphTargets;f=0;for(b=k.length;f<b;f++){d={};d.name=k[f].name;if(void 0!==k[f].vertices)for(d.vertices=[],e=0,c=k[f].vertices.length;e<c;e++){d.vertices.push(k[f].vertices[e].clone());}if(void 0!==k[f].normals)for(d.normals=[],e=0,c=k[f].normals.length;e<c;e++){d.normals.push(k[f].normals[e].clone());}this.morphTargets.push(d);}k=a.morphNormals;f=0;for(b=k.length;f<b;f++){d={};if(void 0!==k[f].vertexNormals)for(d.vertexNormals=[],e=0,c=k[f].vertexNormals.length;e<c;e++){g=k[f].vertexNormals[e],h={},h.a=g.a.clone(),h.b=g.b.clone(),h.c=g.c.clone(),d.vertexNormals.push(h);}if(void 0!==k[f].faceNormals)for(d.faceNormals=[],e=0,c=k[f].faceNormals.length;e<c;e++){d.faceNormals.push(k[f].faceNormals[e].clone());}this.morphNormals.push(d);}e=a.skinWeights;f=0;for(b=e.length;f<b;f++){this.skinWeights.push(e[f].clone());}e=a.skinIndices;f=0;for(b=e.length;f<b;f++){this.skinIndices.push(e[f].clone());}e=a.lineDistances;f=0;for(b=e.length;f<b;f++){this.lineDistances.push(e[f]);}f=a.boundingBox;null!==f&&(this.boundingBox=f.clone());f=a.boundingSphere;null!==f&&(this.boundingSphere=f.clone());this.elementsNeedUpdate=a.elementsNeedUpdate;this.verticesNeedUpdate=a.verticesNeedUpdate;this.uvsNeedUpdate=a.uvsNeedUpdate;this.normalsNeedUpdate=a.normalsNeedUpdate;this.colorsNeedUpdate=a.colorsNeedUpdate;this.lineDistancesNeedUpdate=a.lineDistancesNeedUpdate;this.groupsNeedUpdate=a.groupsNeedUpdate;return this;},dispose:function dispose(){this.dispatchEvent({type:"dispose"});}});var Zg=function(a){function b(b,d,e,f,g,h){a.call(this);this.type="BoxGeometry";this.parameters={width:b,height:d,depth:e,widthSegments:f,heightSegments:g,depthSegments:h};this.fromBufferGeometry(new Gd(b,d,e,f,g,h));this.mergeVertices();}a&&(b.__proto__=a);b.prototype=Object.create(a&&a.prototype);return b.prototype.constructor=b;}(F),Gd=function(a){function b(b,d,e,f,g,h){function c(a,b,c,d,e,f,g,h,l,m,w){var x=f/l,z=g/m,y=f/2,A=g/2,C=h/2;g=l+1;var B=m+1,E=f=0,D,F,G=new n();for(F=0;F<B;F++){var H=F*z-A;for(D=0;D<g;D++){G[a]=(D*x-y)*d,G[b]=H*e,G[c]=C,u.push(G.x,G.y,G.z),G[a]=0,G[b]=0,G[c]=0<h?1:-1,t.push(G.x,G.y,G.z),r.push(D/l),r.push(1-F/m),f+=1;}}for(F=0;F<m;F++){for(D=0;D<l;D++){a=p+D+g*(F+1),b=p+(D+1)+g*(F+1),c=p+(D+1)+g*F,q.push(p+D+g*F,a,c),q.push(a,b,c),E+=6;}}k.addGroup(v,E,w);v+=E;p+=f;}a.call(this);this.type="BoxBufferGeometry";this.parameters={width:b,height:d,depth:e,widthSegments:f,heightSegments:g,depthSegments:h};var k=this;b=b||1;d=d||1;e=e||1;f=Math.floor(f)||1;g=Math.floor(g)||1;h=Math.floor(h)||1;var q=[],u=[],t=[],r=[],p=0,v=0;c("z","y","x",-1,-1,e,d,b,h,g,0);c("z","y","x",1,-1,e,d,-b,h,g,1);c("x","z","y",1,1,b,e,d,f,h,2);c("x","z","y",1,-1,b,e,-d,f,h,3);c("x","y","z",1,-1,b,d,e,f,g,4);c("x","y","z",-1,-1,b,d,-e,f,g,5);this.setIndex(q);this.addAttribute("position",new A(u,3));this.addAttribute("normal",new A(t,3));this.addAttribute("uv",new A(r,2));}a&&(b.__proto__=a);b.prototype=Object.create(a&&a.prototype);return b.prototype.constructor=b;}(E),Ak={clone:Yb,merge:Da};ma.prototype=Object.create(M.prototype);ma.prototype.constructor=ma;ma.prototype.isShaderMaterial=!0;ma.prototype.copy=function(a){M.prototype.copy.call(this,a);this.fragmentShader=a.fragmentShader;this.vertexShader=a.vertexShader;this.uniforms=Yb(a.uniforms);this.defines=Object.assign({},a.defines);this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.lights=a.lights;this.clipping=a.clipping;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;this.extensions=a.extensions;return this;};ma.prototype.toJSON=function(a){var b=M.prototype.toJSON.call(this,a);b.uniforms={};for(var c in this.uniforms){var d=this.uniforms[c].value;b.uniforms[c]=d&&d.isTexture?{type:"t",value:d.toJSON(a).uuid}:d&&d.isColor?{type:"c",value:d.getHex()}:d&&d.isVector2?{type:"v2",value:d.toArray()}:d&&d.isVector3?{type:"v3",value:d.toArray()}:d&&d.isVector4?{type:"v4",value:d.toArray()}:d&&d.isMatrix3?{type:"m3",value:d.toArray()}:d&&d.isMatrix4?{type:"m4",value:d.toArray()}:{value:d};}0<Object.keys(this.defines).length&&(b.defines=this.defines);b.vertexShader=this.vertexShader;b.fragmentShader=this.fragmentShader;a={};for(var e in this.extensions){!0===this.extensions[e]&&(a[e]=!0);}0<Object.keys(a).length&&(b.extensions=a);return b;};bb.prototype=Object.assign(Object.create(B.prototype),{constructor:bb,isCamera:!0,copy:function copy(a,b){B.prototype.copy.call(this,a,b);this.matrixWorldInverse.copy(a.matrixWorldInverse);this.projectionMatrix.copy(a.projectionMatrix);this.projectionMatrixInverse.copy(a.projectionMatrixInverse);return this;},getWorldDirection:function getWorldDirection(a){void 0===a&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),a=new n());this.updateMatrixWorld(!0);var b=this.matrixWorld.elements;return a.set(-b[8],-b[9],-b[10]).normalize();},updateMatrixWorld:function updateMatrixWorld(a){B.prototype.updateMatrixWorld.call(this,a);this.matrixWorldInverse.getInverse(this.matrixWorld);},clone:function clone(){return new this.constructor().copy(this);}});na.prototype=Object.assign(Object.create(bb.prototype),{constructor:na,isPerspectiveCamera:!0,copy:function copy(a,b){bb.prototype.copy.call(this,a,b);this.fov=a.fov;this.zoom=a.zoom;this.near=a.near;this.far=a.far;this.focus=a.focus;this.aspect=a.aspect;this.view=null===a.view?null:Object.assign({},a.view);this.filmGauge=a.filmGauge;this.filmOffset=a.filmOffset;return this;},setFocalLength:function setFocalLength(a){a=.5*this.getFilmHeight()/a;this.fov=2*L.RAD2DEG*Math.atan(a);this.updateProjectionMatrix();},getFocalLength:function getFocalLength(){var a=Math.tan(.5*L.DEG2RAD*this.fov);return .5*this.getFilmHeight()/a;},getEffectiveFOV:function getEffectiveFOV(){return 2*L.RAD2DEG*Math.atan(Math.tan(.5*L.DEG2RAD*this.fov)/this.zoom);},getFilmWidth:function getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1);},getFilmHeight:function getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1);},setViewOffset:function setViewOffset(a,b,c,d,e,f){this.aspect=a/b;null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1});this.view.enabled=!0;this.view.fullWidth=a;this.view.fullHeight=b;this.view.offsetX=c;this.view.offsetY=d;this.view.width=e;this.view.height=f;this.updateProjectionMatrix();},clearViewOffset:function clearViewOffset(){null!==this.view&&(this.view.enabled=!1);this.updateProjectionMatrix();},updateProjectionMatrix:function updateProjectionMatrix(){var a=this.near,b=a*Math.tan(.5*L.DEG2RAD*this.fov)/this.zoom,c=2*b,d=this.aspect*c,e=-.5*d,f=this.view;if(null!==this.view&&this.view.enabled){var g=f.fullWidth,h=f.fullHeight;e+=f.offsetX*d/g;b-=f.offsetY*c/h;d*=f.width/g;c*=f.height/h;}f=this.filmOffset;0!==f&&(e+=a*f/this.getFilmWidth());this.projectionMatrix.makePerspective(e,e+d,b,b-c,a,this.far);this.projectionMatrixInverse.getInverse(this.projectionMatrix);},toJSON:function toJSON(a){a=B.prototype.toJSON.call(this,a);a.object.fov=this.fov;a.object.zoom=this.zoom;a.object.near=this.near;a.object.far=this.far;a.object.focus=this.focus;a.object.aspect=this.aspect;null!==this.view&&(a.object.view=Object.assign({},this.view));a.object.filmGauge=this.filmGauge;a.object.filmOffset=this.filmOffset;return a;}});Dc.prototype=Object.create(B.prototype);Dc.prototype.constructor=Dc;Ab.prototype=Object.create(la.prototype);Ab.prototype.constructor=Ab;Ab.prototype.isWebGLRenderTargetCube=!0;Ab.prototype.fromEquirectangularTexture=function(a,b){this.texture.type=b.type;this.texture.format=b.format;this.texture.encoding=b.encoding;var c=new wd(),d=new ma({type:"CubemapFromEquirect",uniforms:Yb({tEquirect:{value:null}}),vertexShader:"varying vec3 vWorldDirection;\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",fragmentShader:"uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}",side:1,blending:0});d.uniforms.tEquirect.value=b;b=new ja(new Gd(5,5,5),d);c.add(b);d=new Dc(1,10,1);d.renderTarget=this;d.renderTarget.texture.name="CubeCameraTexture";d.update(a,c);b.geometry.dispose();b.material.dispose();return this;};Zb.prototype=Object.create(W.prototype);Zb.prototype.constructor=Zb;Zb.prototype.isDataTexture=!0;var $g=new n(),Bk=new n(),Ck=new Y();Object.assign(cb.prototype,{isPlane:!0,set:function set(a,b){this.normal.copy(a);this.constant=b;return this;},setComponents:function setComponents(a,b,c,d){this.normal.set(a,b,c);this.constant=d;return this;},setFromNormalAndCoplanarPoint:function setFromNormalAndCoplanarPoint(a,b){this.normal.copy(a);this.constant=-b.dot(this.normal);return this;},setFromCoplanarPoints:function setFromCoplanarPoints(a,b,c){b=$g.subVectors(c,b).cross(Bk.subVectors(a,b)).normalize();this.setFromNormalAndCoplanarPoint(b,a);return this;},clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.normal.copy(a.normal);this.constant=a.constant;return this;},normalize:function normalize(){var a=1/this.normal.length();this.normal.multiplyScalar(a);this.constant*=a;return this;},negate:function negate(){this.constant*=-1;this.normal.negate();return this;},distanceToPoint:function distanceToPoint(a){return this.normal.dot(a)+this.constant;},distanceToSphere:function distanceToSphere(a){return this.distanceToPoint(a.center)-a.radius;},projectPoint:function projectPoint(a,b){void 0===b&&(console.warn("THREE.Plane: .projectPoint() target is now required"),b=new n());return b.copy(this.normal).multiplyScalar(-this.distanceToPoint(a)).add(a);},intersectLine:function intersectLine(a,b){void 0===b&&(console.warn("THREE.Plane: .intersectLine() target is now required"),b=new n());var c=a.delta($g),d=this.normal.dot(c);if(0===d){if(0===this.distanceToPoint(a.start))return b.copy(a.start);}else if(d=-(a.start.dot(this.normal)+this.constant)/d,!(0>d||1<d))return b.copy(c).multiplyScalar(d).add(a.start);},intersectsLine:function intersectsLine(a){var b=this.distanceToPoint(a.start);a=this.distanceToPoint(a.end);return 0>b&&0<a||0>a&&0<b;},intersectsBox:function intersectsBox(a){return a.intersectsPlane(this);},intersectsSphere:function intersectsSphere(a){return a.intersectsPlane(this);},coplanarPoint:function coplanarPoint(a){void 0===a&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),a=new n());return a.copy(this.normal).multiplyScalar(-this.constant);},applyMatrix4:function applyMatrix4(a,b){b=b||Ck.getNormalMatrix(a);a=this.coplanarPoint($g).applyMatrix4(a);b=this.normal.applyMatrix3(b).normalize();this.constant=-a.dot(b);return this;},translate:function translate(a){this.constant-=a.dot(this.normal);return this;},equals:function equals(a){return a.normal.equals(this.normal)&&a.constant===this.constant;}});var td=new nb(),zf=new n();Object.assign(Ed.prototype,{set:function set(a,b,c,d,e,f){var g=this.planes;g[0].copy(a);g[1].copy(b);g[2].copy(c);g[3].copy(d);g[4].copy(e);g[5].copy(f);return this;},clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){for(var b=this.planes,c=0;6>c;c++){b[c].copy(a.planes[c]);}return this;},setFromMatrix:function setFromMatrix(a){var b=this.planes,c=a.elements;a=c[0];var d=c[1],e=c[2],f=c[3],g=c[4],h=c[5],l=c[6],k=c[7],n=c[8],u=c[9],t=c[10],r=c[11],p=c[12],v=c[13],x=c[14];c=c[15];b[0].setComponents(f-a,k-g,r-n,c-p).normalize();b[1].setComponents(f+a,k+g,r+n,c+p).normalize();b[2].setComponents(f+d,k+h,r+u,c+v).normalize();b[3].setComponents(f-d,k-h,r-u,c-v).normalize();b[4].setComponents(f-e,k-l,r-t,c-x).normalize();b[5].setComponents(f+e,k+l,r+t,c+x).normalize();return this;},intersectsObject:function intersectsObject(a){var b=a.geometry;null===b.boundingSphere&&b.computeBoundingSphere();td.copy(b.boundingSphere).applyMatrix4(a.matrixWorld);return this.intersectsSphere(td);},intersectsSprite:function intersectsSprite(a){td.center.set(0,0,0);td.radius=.7071067811865476;td.applyMatrix4(a.matrixWorld);return this.intersectsSphere(td);},intersectsSphere:function intersectsSphere(a){var b=this.planes,c=a.center;a=-a.radius;for(var d=0;6>d;d++){if(b[d].distanceToPoint(c)<a)return!1;}return!0;},intersectsBox:function intersectsBox(a){for(var b=this.planes,c=0;6>c;c++){var d=b[c];zf.x=0<d.normal.x?a.max.x:a.min.x;zf.y=0<d.normal.y?a.max.y:a.min.y;zf.z=0<d.normal.z?a.max.z:a.min.z;if(0>d.distanceToPoint(zf))return!1;}return!0;},containsPoint:function containsPoint(a){for(var b=this.planes,c=0;6>c;c++){if(0>b[c].distanceToPoint(a))return!1;}return!0;}});var N={alphamap_fragment:"#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",alphamap_pars_fragment:"#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",alphatest_fragment:"#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",aomap_fragment:"#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",aomap_pars_fragment:"#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",begin_vertex:"vec3 transformed = vec3( position );",beginnormal_vertex:"vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",bsdfs:"vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha  = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",bumpmap_pars_fragment:"#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",clipping_planes_fragment:"#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",clipping_planes_pars_fragment:"#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",clipping_planes_pars_vertex:"#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvarying vec3 vViewPosition;\n#endif",clipping_planes_vertex:"#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif",color_fragment:"#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",color_pars_fragment:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",color_pars_vertex:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",color_vertex:"#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",common:"#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n  return m[ 2 ][ 3 ] == - 1.0;\n}",cube_uv_reflection_fragment:"#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV( sampler2D envMap, vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif",defaultnormal_vertex:"vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\ttransformedNormal = mat3( instanceMatrix ) * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = normalMatrix * objectTangent;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",displacementmap_pars_vertex:"#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",displacementmap_vertex:"#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",emissivemap_fragment:"#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",emissivemap_pars_fragment:"#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",encodings_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",encodings_pars_fragment:"\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",envmap_fragment:"#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",envmap_common_pars_fragment:"#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",envmap_pars_fragment:"#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",envmap_pars_vertex:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",envmap_physical_pars_fragment:"#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t  vec3 reflectVec = reflect( -viewDir, normal );\n\t\t  reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t  vec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryReflectVec, roughness );\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",envmap_vertex:"#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",fog_vertex:"#ifdef USE_FOG\n\tfogDepth = -mvPosition.z;\n#endif",fog_pars_vertex:"#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",fog_fragment:"#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",fog_pars_fragment:"#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",gradientmap_pars_fragment:"#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif",lightmap_fragment:"#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif",lightmap_pars_fragment:"#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",lights_lambert_vertex:"vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif",lights_pars_begin:"uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",lights_phong_fragment:"BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",lights_phong_pars_fragment:"varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",lights_physical_fragment:"PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = saturate( clearcoat );\tmaterial.clearcoatRoughness = clamp( clearcoatRoughness, 0.04, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif",lights_physical_pars_fragment:"struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",lights_fragment_begin:"\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec3( pointLight.shadow, directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec3( spotLight.shadow, directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec3( directionalLight.shadow, directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",lights_fragment_maps:"#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif",lights_fragment_end:"#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",logdepthbuf_fragment:"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 1.0 ? log2( vFragDepth ) * logDepthBufFC * 0.5 : gl_FragCoord.z;\n#endif",logdepthbuf_pars_fragment:"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",logdepthbuf_pars_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",logdepthbuf_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",map_fragment:"#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",map_pars_fragment:"#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",map_particle_fragment:"#ifdef USE_MAP\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif",map_particle_pars_fragment:"#ifdef USE_MAP\n\tuniform mat3 uvTransform;\n\tuniform sampler2D map;\n#endif",metalnessmap_fragment:"float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",metalnessmap_pars_fragment:"#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",morphnormal_vertex:"#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif",morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",morphtarget_vertex:"#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",normal_fragment_begin:"#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\tbitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",normal_fragment_maps:"#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\t#ifdef USE_TANGENT\n\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, normalScale, normalMap );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif",normalmap_pars_fragment:"#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec2 normalScale, in sampler2D normalMap ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy *= normalScale;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tbool frontFacing = dot( cross( S, T ), N ) > 0.0;\n\t\t\tmapN.xy *= ( float( frontFacing ) * 2.0 - 1.0 );\n\t\t#else\n\t\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif",clearcoat_normal_fragment_begin:"#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",clearcoat_normal_fragment_maps:"#ifdef USE_CLEARCOAT_NORMALMAP\n\t#ifdef USE_TANGENT\n\t\tmat3 vTBN = mat3( tangent, bitangent, clearcoatNormal );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = clearcoatNormalScale * mapN.xy;\n\t\tclearcoatNormal = normalize( vTBN * mapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatNormalScale, clearcoatNormalMap );\n\t#endif\n#endif",clearcoat_normalmap_pars_fragment:"#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",packing:"vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 encodeHalfRGBA ( vec2 v ) {\n\tvec4 encoded = vec4( 0.0 );\n\tconst vec2 offset = vec2( 1.0 / 255.0, 0.0 );\n\tencoded.xy = vec2( v.x, fract( v.x * 255.0 ) );\n\tencoded.xy = encoded.xy - ( encoded.yy * offset );\n\tencoded.zw = vec2( v.y, fract( v.y * 255.0 ) );\n\tencoded.zw = encoded.zw - ( encoded.ww * offset );\n\treturn encoded;\n}\nvec2 decodeHalfRGBA( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",premultiplied_alpha_fragment:"#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",project_vertex:"vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",dithering_fragment:"#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",dithering_pars_fragment:"#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",roughnessmap_fragment:"float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",roughnessmap_pars_fragment:"#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",shadowmap_pars_fragment:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn decodeHalfRGBA( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = ( floor( uv * size - 0.5 ) + 0.5 ) * texelSize;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",shadowmap_pars_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",shadowmap_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif",shadowmask_pars_fragment:"float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= all( bvec2( directionalLight.shadow, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= all( bvec2( spotLight.shadow, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= all( bvec2( pointLight.shadow, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}",skinbase_vertex:"#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",skinning_pars_vertex:"#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",skinning_vertex:"#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",skinnormal_vertex:"#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",specularmap_fragment:"float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",specularmap_pars_fragment:"#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",tonemapping_fragment:"#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",tonemapping_pars_fragment:"#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );\n}",uv_pars_fragment:"#ifdef USE_UV\n\tvarying vec2 vUv;\n#endif",uv_pars_vertex:"#ifdef USE_UV\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif",uv_vertex:"#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",uv2_pars_fragment:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",uv2_pars_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",uv2_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",worldpos_vertex:"#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",background_frag:"uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",background_vert:"varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",cube_frag:"uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",cube_vert:"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",depth_frag:"#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}",depth_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}",distanceRGBA_frag:"#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",distanceRGBA_vert:"#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",equirect_frag:"uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",equirect_vert:"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",linedashed_frag:"uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",linedashed_vert:"uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",meshbasic_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",meshbasic_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",meshlambert_frag:"uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshlambert_vert:"#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",meshmatcap_frag:"#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",meshmatcap_vert:"#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",meshphong_frag:"#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshphong_vert:"#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",meshphysical_frag:"#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSPARENCY\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSPARENCY\n\tuniform float transparency;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSPARENCY\n\t\tdiffuseColor.a *= saturate( 1. - transparency + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshphysical_vert:"#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",normal_frag:"#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",normal_vert:"#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",points_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",points_vert:"uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",shadow_frag:"uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}",shadow_vert:"#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",sprite_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",sprite_vert:"uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}"},I={common:{diffuse:{value:new H(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new Y()},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new w(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:2.5E-4},fogNear:{value:1},fogFar:{value:2E3},fogColor:{value:new H(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}}},points:{diffuse:{value:new H(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},uvTransform:{value:new Y()}},sprite:{diffuse:{value:new H(15658734)},opacity:{value:1},center:{value:new w(.5,.5)},rotation:{value:0},map:{value:null},uvTransform:{value:new Y()}}},db={basic:{uniforms:Da([I.common,I.specularmap,I.envmap,I.aomap,I.lightmap,I.fog]),vertexShader:N.meshbasic_vert,fragmentShader:N.meshbasic_frag},lambert:{uniforms:Da([I.common,I.specularmap,I.envmap,I.aomap,I.lightmap,I.emissivemap,I.fog,I.lights,{emissive:{value:new H(0)}}]),vertexShader:N.meshlambert_vert,fragmentShader:N.meshlambert_frag},phong:{uniforms:Da([I.common,I.specularmap,I.envmap,I.aomap,I.lightmap,I.emissivemap,I.bumpmap,I.normalmap,I.displacementmap,I.gradientmap,I.fog,I.lights,{emissive:{value:new H(0)},specular:{value:new H(1118481)},shininess:{value:30}}]),vertexShader:N.meshphong_vert,fragmentShader:N.meshphong_frag},standard:{uniforms:Da([I.common,I.envmap,I.aomap,I.lightmap,I.emissivemap,I.bumpmap,I.normalmap,I.displacementmap,I.roughnessmap,I.metalnessmap,I.fog,I.lights,{emissive:{value:new H(0)},roughness:{value:.5},metalness:{value:.5},envMapIntensity:{value:1}}]),vertexShader:N.meshphysical_vert,fragmentShader:N.meshphysical_frag},matcap:{uniforms:Da([I.common,I.bumpmap,I.normalmap,I.displacementmap,I.fog,{matcap:{value:null}}]),vertexShader:N.meshmatcap_vert,fragmentShader:N.meshmatcap_frag},points:{uniforms:Da([I.points,I.fog]),vertexShader:N.points_vert,fragmentShader:N.points_frag},dashed:{uniforms:Da([I.common,I.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:N.linedashed_vert,fragmentShader:N.linedashed_frag},depth:{uniforms:Da([I.common,I.displacementmap]),vertexShader:N.depth_vert,fragmentShader:N.depth_frag},normal:{uniforms:Da([I.common,I.bumpmap,I.normalmap,I.displacementmap,{opacity:{value:1}}]),vertexShader:N.normal_vert,fragmentShader:N.normal_frag},sprite:{uniforms:Da([I.sprite,I.fog]),vertexShader:N.sprite_vert,fragmentShader:N.sprite_frag},background:{uniforms:{uvTransform:{value:new Y()},t2D:{value:null}},vertexShader:N.background_vert,fragmentShader:N.background_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:N.cube_vert,fragmentShader:N.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:N.equirect_vert,fragmentShader:N.equirect_frag},distanceRGBA:{uniforms:Da([I.common,I.displacementmap,{referencePosition:{value:new n()},nearDistance:{value:1},farDistance:{value:1E3}}]),vertexShader:N.distanceRGBA_vert,fragmentShader:N.distanceRGBA_frag},shadow:{uniforms:Da([I.lights,I.fog,{color:{value:new H(0)},opacity:{value:1}}]),vertexShader:N.shadow_vert,fragmentShader:N.shadow_frag}};db.physical={uniforms:Da([db.standard.uniforms,{transparency:{value:0},clearcoat:{value:0},clearcoatRoughness:{value:0},sheen:{value:new H(0)},clearcoatNormalScale:{value:new w(1,1)},clearcoatNormalMap:{value:null}}]),vertexShader:N.meshphysical_vert,fragmentShader:N.meshphysical_frag};Fd.prototype=Object.create(F.prototype);Fd.prototype.constructor=Fd;$b.prototype=Object.create(E.prototype);$b.prototype.constructor=$b;ob.prototype=Object.create(W.prototype);ob.prototype.constructor=ob;ob.prototype.isCubeTexture=!0;Object.defineProperty(ob.prototype,"images",{get:function get(){return this.image;},set:function set(a){this.image=a;}});Ec.prototype=Object.create(W.prototype);Ec.prototype.constructor=Ec;Ec.prototype.isDataTexture2DArray=!0;Fc.prototype=Object.create(W.prototype);Fc.prototype.constructor=Fc;Fc.prototype.isDataTexture3D=!0;var vh=new W(),qj=new Ec(),sj=new Fc(),wh=new ob(),ph=[],rh=[],uh=new Float32Array(16),th=new Float32Array(9),sh=new Float32Array(4);xh.prototype.updateCache=function(a){var b=this.cache;a instanceof Float32Array&&b.length!==a.length&&(this.cache=new Float32Array(a.length));Ha(b,a);};yh.prototype.setValue=function(a,b,c){for(var d=this.seq,e=0,f=d.length;e!==f;++e){var g=d[e];g.setValue(a,b[g.id],c);}};var Yf=/([\w\d_]+)(\])?(\[|\.)?/g;Bb.prototype.setValue=function(a,b,c,d){b=this.map[b];void 0!==b&&b.setValue(a,c,d);};Bb.prototype.setOptional=function(a,b,c){b=b[c];void 0!==b&&this.setValue(a,c,b);};Bb.upload=function(a,b,c,d){for(var e=0,f=b.length;e!==f;++e){var g=b[e],h=c[g.id];!1!==h.needsUpdate&&g.setValue(a,h.value,d);}};Bb.seqWithValue=function(a,b){for(var c=[],d=0,e=a.length;d!==e;++d){var f=a[d];f.id in b&&c.push(f);}return c;};var Xj=0,$f=/^[ \t]*#include +<([\w\d./]+)>/gm,Gh=/#pragma unroll_loop[\s]+?for \( int i = (\d+); i < (\d+); i \+\+ \) \{([\s\S]+?)(?=\})\}/g,gk=0;Db.prototype=Object.create(M.prototype);Db.prototype.constructor=Db;Db.prototype.isMeshDepthMaterial=!0;Db.prototype.copy=function(a){M.prototype.copy.call(this,a);this.depthPacking=a.depthPacking;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.map=a.map;this.alphaMap=a.alphaMap;this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;return this;};Eb.prototype=Object.create(M.prototype);Eb.prototype.constructor=Eb;Eb.prototype.isMeshDistanceMaterial=!0;Eb.prototype.copy=function(a){M.prototype.copy.call(this,a);this.referencePosition.copy(a.referencePosition);this.nearDistance=a.nearDistance;this.farDistance=a.farDistance;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.map=a.map;this.alphaMap=a.alphaMap;this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;return this;};fg.prototype=Object.assign(Object.create(la.prototype),{constructor:fg,isWebGLMultiviewRenderTarget:!0,copy:function copy(a){la.prototype.copy.call(this,a);this.numViews=a.numViews;return this;},setNumViews:function setNumViews(a){this.numViews!==a&&(this.numViews=a,this.dispose());return this;}});Hc.prototype=Object.assign(Object.create(B.prototype),{constructor:Hc,isGroup:!0});Jd.prototype=Object.assign(Object.create(na.prototype),{constructor:Jd,isArrayCamera:!0});var Mh=new n(),Nh=new n();Object.assign(gg.prototype,Ba.prototype);Object.assign(Oh.prototype,Ba.prototype);Object.assign(Ie.prototype,{isFogExp2:!0,clone:function clone(){return new Ie(this.color,this.density);},toJSON:function toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density};}});Object.assign(Je.prototype,{isFog:!0,clone:function clone(){return new Je(this.color,this.near,this.far);},toJSON:function toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far};}});Object.defineProperty(Gb.prototype,"needsUpdate",{set:function set(a){!0===a&&this.version++;}});Object.assign(Gb.prototype,{isInterleavedBuffer:!0,onUploadCallback:function onUploadCallback(){},setDynamic:function setDynamic(a){this.dynamic=a;return this;},copy:function copy(a){this.array=new a.array.constructor(a.array);this.count=a.count;this.stride=a.stride;this.dynamic=a.dynamic;return this;},copyAt:function copyAt(a,b,c){a*=this.stride;c*=b.stride;for(var d=0,e=this.stride;d<e;d++){this.array[a+d]=b.array[c+d];}return this;},set:function set(a,b){void 0===b&&(b=0);this.array.set(a,b);return this;},clone:function clone(){return new this.constructor().copy(this);},onUpload:function onUpload(a){this.onUploadCallback=a;return this;}});Object.defineProperties(Kd.prototype,{count:{get:function get(){return this.data.count;}},array:{get:function get(){return this.data.array;}}});Object.assign(Kd.prototype,{isInterleavedBufferAttribute:!0,setX:function setX(a,b){this.data.array[a*this.data.stride+this.offset]=b;return this;},setY:function setY(a,b){this.data.array[a*this.data.stride+this.offset+1]=b;return this;},setZ:function setZ(a,b){this.data.array[a*this.data.stride+this.offset+2]=b;return this;},setW:function setW(a,b){this.data.array[a*this.data.stride+this.offset+3]=b;return this;},getX:function getX(a){return this.data.array[a*this.data.stride+this.offset];},getY:function getY(a){return this.data.array[a*this.data.stride+this.offset+1];},getZ:function getZ(a){return this.data.array[a*this.data.stride+this.offset+2];},getW:function getW(a){return this.data.array[a*this.data.stride+this.offset+3];},setXY:function setXY(a,b,c){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;return this;},setXYZ:function setXYZ(a,b,c,d){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;this.data.array[a+2]=d;return this;},setXYZW:function setXYZW(a,b,c,d,e){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;this.data.array[a+2]=d;this.data.array[a+3]=e;return this;}});Hb.prototype=Object.create(M.prototype);Hb.prototype.constructor=Hb;Hb.prototype.isSpriteMaterial=!0;Hb.prototype.copy=function(a){M.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.rotation=a.rotation;this.sizeAttenuation=a.sizeAttenuation;return this;};var Ic,ze=new n(),ud=new n(),vd=new n(),Jc=new w(),Md=new w(),Qh=new U(),Af=new n(),Ae=new n(),Bf=new n(),ui=new w(),ah=new w(),vi=new w();Ld.prototype=Object.assign(Object.create(B.prototype),{constructor:Ld,isSprite:!0,raycast:function raycast(a,b){null===a.camera&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');ud.setFromMatrixScale(this.matrixWorld);Qh.copy(a.camera.matrixWorld);this.modelViewMatrix.multiplyMatrices(a.camera.matrixWorldInverse,this.matrixWorld);vd.setFromMatrixPosition(this.modelViewMatrix);a.camera.isPerspectiveCamera&&!1===this.material.sizeAttenuation&&ud.multiplyScalar(-vd.z);var c=this.material.rotation;if(0!==c){var d=Math.cos(c);var e=Math.sin(c);}c=this.center;Ke(Af.set(-.5,-.5,0),vd,c,ud,e,d);Ke(Ae.set(.5,-.5,0),vd,c,ud,e,d);Ke(Bf.set(.5,.5,0),vd,c,ud,e,d);ui.set(0,0);ah.set(1,0);vi.set(1,1);var f=a.ray.intersectTriangle(Af,Ae,Bf,!1,ze);if(null===f&&(Ke(Ae.set(-.5,.5,0),vd,c,ud,e,d),ah.set(0,1),f=a.ray.intersectTriangle(Af,Bf,Ae,!1,ze),null===f))return;e=a.ray.origin.distanceTo(ze);e<a.near||e>a.far||b.push({distance:e,point:ze.clone(),uv:R.getUV(ze,Af,Ae,Bf,ui,ah,vi,new w()),face:null,object:this});},clone:function clone(){return new this.constructor(this.material).copy(this);},copy:function copy(a){B.prototype.copy.call(this,a);void 0!==a.center&&this.center.copy(a.center);return this;}});var Cf=new n(),wi=new n();Nd.prototype=Object.assign(Object.create(B.prototype),{constructor:Nd,isLOD:!0,copy:function copy(a){B.prototype.copy.call(this,a,!1);a=a.levels;for(var b=0,c=a.length;b<c;b++){var d=a[b];this.addLevel(d.object.clone(),d.distance);}return this;},addLevel:function addLevel(a,b){void 0===b&&(b=0);b=Math.abs(b);for(var c=this.levels,d=0;d<c.length&&!(b<c[d].distance);d++){;}c.splice(d,0,{distance:b,object:a});this.add(a);return this;},getObjectForDistance:function getObjectForDistance(a){for(var b=this.levels,c=1,d=b.length;c<d&&!(a<b[c].distance);c++){;}return b[c-1].object;},raycast:function raycast(a,b){Cf.setFromMatrixPosition(this.matrixWorld);var c=a.ray.origin.distanceTo(Cf);this.getObjectForDistance(c).raycast(a,b);},update:function update(a){var b=this.levels;if(1<b.length){Cf.setFromMatrixPosition(a.matrixWorld);wi.setFromMatrixPosition(this.matrixWorld);a=Cf.distanceTo(wi);b[0].object.visible=!0;for(var c=1,d=b.length;c<d;c++){if(a>=b[c].distance)b[c-1].object.visible=!1,b[c].object.visible=!0;else break;}for(;c<d;c++){b[c].object.visible=!1;}}},toJSON:function toJSON(a){a=B.prototype.toJSON.call(this,a);a.object.levels=[];for(var b=this.levels,c=0,d=b.length;c<d;c++){var e=b[c];a.object.levels.push({object:e.object.uuid,distance:e.distance});}return a;}});Od.prototype=Object.assign(Object.create(ja.prototype),{constructor:Od,isSkinnedMesh:!0,bind:function bind(a,b){this.skeleton=a;void 0===b&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),b=this.matrixWorld);this.bindMatrix.copy(b);this.bindMatrixInverse.getInverse(b);},pose:function pose(){this.skeleton.pose();},normalizeSkinWeights:function normalizeSkinWeights(){for(var a=new aa(),b=this.geometry.attributes.skinWeight,c=0,d=b.count;c<d;c++){a.x=b.getX(c);a.y=b.getY(c);a.z=b.getZ(c);a.w=b.getW(c);var e=1/a.manhattanLength();Infinity!==e?a.multiplyScalar(e):a.set(1,0,0,0);b.setXYZW(c,a.x,a.y,a.z,a.w);}},updateMatrixWorld:function updateMatrixWorld(a){ja.prototype.updateMatrixWorld.call(this,a);"attached"===this.bindMode?this.bindMatrixInverse.getInverse(this.matrixWorld):"detached"===this.bindMode?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode);},clone:function clone(){return new this.constructor(this.geometry,this.material).copy(this);}});var xi=new U(),Dk=new U();Object.assign(Le.prototype,{calculateInverses:function calculateInverses(){this.boneInverses=[];for(var a=0,b=this.bones.length;a<b;a++){var c=new U();this.bones[a]&&c.getInverse(this.bones[a].matrixWorld);this.boneInverses.push(c);}},pose:function pose(){var a,b;var c=0;for(b=this.bones.length;c<b;c++){(a=this.bones[c])&&a.matrixWorld.getInverse(this.boneInverses[c]);}c=0;for(b=this.bones.length;c<b;c++){if(a=this.bones[c])a.parent&&a.parent.isBone?(a.matrix.getInverse(a.parent.matrixWorld),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale);}},update:function update(){for(var a=this.bones,b=this.boneInverses,c=this.boneMatrices,d=this.boneTexture,e=0,f=a.length;e<f;e++){xi.multiplyMatrices(a[e]?a[e].matrixWorld:Dk,b[e]),xi.toArray(c,16*e);}void 0!==d&&(d.needsUpdate=!0);},clone:function clone(){return new Le(this.bones,this.boneInverses);},getBoneByName:function getBoneByName(a){for(var b=0,c=this.bones.length;b<c;b++){var d=this.bones[b];if(d.name===a)return d;}}});ig.prototype=Object.assign(Object.create(B.prototype),{constructor:ig,isBone:!0});jg.prototype=Object.assign(Object.create(ja.prototype),{constructor:jg,isInstancedMesh:!0,raycast:function raycast(){},setMatrixAt:function setMatrixAt(a,b){b.toArray(this.instanceMatrix.array,16*a);},updateMorphTargets:function updateMorphTargets(){}});Q.prototype=Object.create(M.prototype);Q.prototype.constructor=Q;Q.prototype.isLineBasicMaterial=!0;Q.prototype.copy=function(a){M.prototype.copy.call(this,a);this.color.copy(a.color);this.linewidth=a.linewidth;this.linecap=a.linecap;this.linejoin=a.linejoin;return this;};var yi=new n(),zi=new n(),Ai=new U(),Df=new Sb(),Be=new nb();xa.prototype=Object.assign(Object.create(B.prototype),{constructor:xa,isLine:!0,computeLineDistances:function computeLineDistances(){var a=this.geometry;if(a.isBufferGeometry){if(null===a.index){for(var b=a.attributes.position,c=[0],d=1,e=b.count;d<e;d++){yi.fromBufferAttribute(b,d-1),zi.fromBufferAttribute(b,d),c[d]=c[d-1],c[d]+=yi.distanceTo(zi);}a.addAttribute("lineDistance",new A(c,1));}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");}else if(a.isGeometry)for(b=a.vertices,c=a.lineDistances,c[0]=0,d=1,e=b.length;d<e;d++){c[d]=c[d-1],c[d]+=b[d-1].distanceTo(b[d]);}return this;},raycast:function raycast(a,b){var c=a.linePrecision,d=this.geometry,e=this.matrixWorld;null===d.boundingSphere&&d.computeBoundingSphere();Be.copy(d.boundingSphere);Be.applyMatrix4(e);Be.radius+=c;if(!1!==a.ray.intersectsSphere(Be)){Ai.getInverse(e);Df.copy(a.ray).applyMatrix4(Ai);c/=(this.scale.x+this.scale.y+this.scale.z)/3;c*=c;var f=new n(),g=new n();e=new n();var h=new n(),l=this&&this.isLineSegments?2:1;if(d.isBufferGeometry){var k=d.index,q=d.attributes.position.array;if(null!==k){k=k.array;d=0;for(var u=k.length-1;d<u;d+=l){var t=k[d+1];f.fromArray(q,3*k[d]);g.fromArray(q,3*t);t=Df.distanceSqToSegment(f,g,h,e);t>c||(h.applyMatrix4(this.matrixWorld),t=a.ray.origin.distanceTo(h),t<a.near||t>a.far||b.push({distance:t,point:e.clone().applyMatrix4(this.matrixWorld),index:d,face:null,faceIndex:null,object:this}));}}else for(d=0,u=q.length/3-1;d<u;d+=l){f.fromArray(q,3*d),g.fromArray(q,3*d+3),t=Df.distanceSqToSegment(f,g,h,e),t>c||(h.applyMatrix4(this.matrixWorld),t=a.ray.origin.distanceTo(h),t<a.near||t>a.far||b.push({distance:t,point:e.clone().applyMatrix4(this.matrixWorld),index:d,face:null,faceIndex:null,object:this}));}}else if(d.isGeometry)for(f=d.vertices,g=f.length,d=0;d<g-1;d+=l){t=Df.distanceSqToSegment(f[d],f[d+1],h,e),t>c||(h.applyMatrix4(this.matrixWorld),t=a.ray.origin.distanceTo(h),t<a.near||t>a.far||b.push({distance:t,point:e.clone().applyMatrix4(this.matrixWorld),index:d,face:null,faceIndex:null,object:this}));}}},clone:function clone(){return new this.constructor(this.geometry,this.material).copy(this);}});var Ef=new n(),Ff=new n();ca.prototype=Object.assign(Object.create(xa.prototype),{constructor:ca,isLineSegments:!0,computeLineDistances:function computeLineDistances(){var a=this.geometry;if(a.isBufferGeometry){if(null===a.index){for(var b=a.attributes.position,c=[],d=0,e=b.count;d<e;d+=2){Ef.fromBufferAttribute(b,d),Ff.fromBufferAttribute(b,d+1),c[d]=0===d?0:c[d-1],c[d+1]=c[d]+Ef.distanceTo(Ff);}a.addAttribute("lineDistance",new A(c,1));}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");}else if(a.isGeometry)for(b=a.vertices,c=a.lineDistances,d=0,e=b.length;d<e;d+=2){Ef.copy(b[d]),Ff.copy(b[d+1]),c[d]=0===d?0:c[d-1],c[d+1]=c[d]+Ef.distanceTo(Ff);}return this;}});Me.prototype=Object.assign(Object.create(xa.prototype),{constructor:Me,isLineLoop:!0});Qa.prototype=Object.create(M.prototype);Qa.prototype.constructor=Qa;Qa.prototype.isPointsMaterial=!0;Qa.prototype.copy=function(a){M.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.size=a.size;this.sizeAttenuation=a.sizeAttenuation;this.morphTargets=a.morphTargets;return this;};var Bi=new U(),lg=new Sb(),Ce=new nb(),Gf=new n();Kc.prototype=Object.assign(Object.create(B.prototype),{constructor:Kc,isPoints:!0,raycast:function raycast(a,b){var c=this.geometry,d=this.matrixWorld,e=a.params.Points.threshold;null===c.boundingSphere&&c.computeBoundingSphere();Ce.copy(c.boundingSphere);Ce.applyMatrix4(d);Ce.radius+=e;if(!1!==a.ray.intersectsSphere(Ce))if(Bi.getInverse(d),lg.copy(a.ray).applyMatrix4(Bi),e/=(this.scale.x+this.scale.y+this.scale.z)/3,e*=e,c.isBufferGeometry){var f=c.index;c=c.attributes.position.array;if(null!==f){var g=f.array;f=0;for(var h=g.length;f<h;f++){var l=g[f];Gf.fromArray(c,3*l);kg(Gf,l,e,d,a,b,this);}}else for(f=0,g=c.length/3;f<g;f++){Gf.fromArray(c,3*f),kg(Gf,f,e,d,a,b,this);}}else for(c=c.vertices,f=0,g=c.length;f<g;f++){kg(c[f],f,e,d,a,b,this);}},updateMorphTargets:function updateMorphTargets(){var a=this.geometry;if(a.isBufferGeometry){a=a.morphAttributes;var b=Object.keys(a);if(0<b.length){var c=a[b[0]];if(void 0!==c)for(this.morphTargetInfluences=[],this.morphTargetDictionary={},a=0,b=c.length;a<b;a++){var d=c[a].name||String(a);this.morphTargetInfluences.push(0);this.morphTargetDictionary[d]=a;}}}else a=a.morphTargets,void 0!==a&&0<a.length&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");},clone:function clone(){return new this.constructor(this.geometry,this.material).copy(this);}});mg.prototype=Object.assign(Object.create(W.prototype),{constructor:mg,isVideoTexture:!0,update:function update(){var a=this.image;a.readyState>=a.HAVE_CURRENT_DATA&&(this.needsUpdate=!0);}});Lc.prototype=Object.create(W.prototype);Lc.prototype.constructor=Lc;Lc.prototype.isCompressedTexture=!0;Pd.prototype=Object.create(W.prototype);Pd.prototype.constructor=Pd;Pd.prototype.isCanvasTexture=!0;Qd.prototype=Object.create(W.prototype);Qd.prototype.constructor=Qd;Qd.prototype.isDepthTexture=!0;Mc.prototype=Object.create(E.prototype);Mc.prototype.constructor=Mc;Rd.prototype=Object.create(F.prototype);Rd.prototype.constructor=Rd;Nc.prototype=Object.create(E.prototype);Nc.prototype.constructor=Nc;Sd.prototype=Object.create(F.prototype);Sd.prototype.constructor=Sd;Ca.prototype=Object.create(E.prototype);Ca.prototype.constructor=Ca;Td.prototype=Object.create(F.prototype);Td.prototype.constructor=Td;Oc.prototype=Object.create(Ca.prototype);Oc.prototype.constructor=Oc;Ud.prototype=Object.create(F.prototype);Ud.prototype.constructor=Ud;cc.prototype=Object.create(Ca.prototype);cc.prototype.constructor=cc;Vd.prototype=Object.create(F.prototype);Vd.prototype.constructor=Vd;Pc.prototype=Object.create(Ca.prototype);Pc.prototype.constructor=Pc;Wd.prototype=Object.create(F.prototype);Wd.prototype.constructor=Wd;Qc.prototype=Object.create(Ca.prototype);Qc.prototype.constructor=Qc;Xd.prototype=Object.create(F.prototype);Xd.prototype.constructor=Xd;dc.prototype=Object.create(E.prototype);dc.prototype.constructor=dc;dc.prototype.toJSON=function(){var a=E.prototype.toJSON.call(this);a.path=this.parameters.path.toJSON();return a;};Yd.prototype=Object.create(F.prototype);Yd.prototype.constructor=Yd;Rc.prototype=Object.create(E.prototype);Rc.prototype.constructor=Rc;Zd.prototype=Object.create(F.prototype);Zd.prototype.constructor=Zd;Sc.prototype=Object.create(E.prototype);Sc.prototype.constructor=Sc;var Ek={triangulate:function triangulate(a,b,c){c=c||2;var d=b&&b.length,e=d?b[0]*c:a.length,f=Rh(a,0,e,c,!0),g=[];if(!f||f.next===f.prev)return g;var h;if(d){var l=c;d=[];var k;var n=0;for(k=b.length;n<k;n++){var u=b[n]*l;var t=n<k-1?b[n+1]*l:a.length;u=Rh(a,u,t,l,!1);u===u.next&&(u.steiner=!0);d.push(ok(u));}d.sort(mk);for(n=0;n<d.length;n++){b=d[n];l=f;if(l=nk(b,l))b=Uh(l,b),ae(b,b.next);f=ae(f,f.next);}}if(a.length>80*c){var r=h=a[0];var p=d=a[1];for(l=c;l<e;l+=c){n=a[l],b=a[l+1],n<r&&(r=n),b<p&&(p=b),n>h&&(h=n),b>d&&(d=b);}h=Math.max(h-r,d-p);h=0!==h?1/h:0;}be(f,g,c,r,p,h);return g;}},pb={area:function area(a){for(var b=a.length,c=0,d=b-1,e=0;e<b;d=e++){c+=a[d].x*a[e].y-a[e].x*a[d].y;}return .5*c;},isClockWise:function isClockWise(a){return 0>pb.area(a);},triangulateShape:function triangulateShape(a,b){var c=[],d=[],e=[];Vh(a);Wh(c,a);var f=a.length;b.forEach(Vh);for(a=0;a<b.length;a++){d.push(f),f+=b[a].length,Wh(c,b[a]);}b=Ek.triangulate(c,d);for(a=0;a<b.length;a+=3){e.push(b.slice(a,a+3));}return e;}};fc.prototype=Object.create(F.prototype);fc.prototype.constructor=fc;fc.prototype.toJSON=function(){var a=F.prototype.toJSON.call(this);return Xh(this.parameters.shapes,this.parameters.options,a);};eb.prototype=Object.create(E.prototype);eb.prototype.constructor=eb;eb.prototype.toJSON=function(){var a=E.prototype.toJSON.call(this);return Xh(this.parameters.shapes,this.parameters.options,a);};var pk={generateTopUV:function generateTopUV(a,b,c,d,e){a=b[3*d];d=b[3*d+1];var f=b[3*e];e=b[3*e+1];return[new w(b[3*c],b[3*c+1]),new w(a,d),new w(f,e)];},generateSideWallUV:function generateSideWallUV(a,b,c,d,e,f){a=b[3*c];var g=b[3*c+1];c=b[3*c+2];var h=b[3*d],l=b[3*d+1];d=b[3*d+2];var k=b[3*e],n=b[3*e+1];e=b[3*e+2];var u=b[3*f],t=b[3*f+1];b=b[3*f+2];return .01>Math.abs(g-l)?[new w(a,1-c),new w(h,1-d),new w(k,1-e),new w(u,1-b)]:[new w(g,1-c),new w(l,1-d),new w(n,1-e),new w(t,1-b)];}};de.prototype=Object.create(F.prototype);de.prototype.constructor=de;Uc.prototype=Object.create(eb.prototype);Uc.prototype.constructor=Uc;ee.prototype=Object.create(F.prototype);ee.prototype.constructor=ee;Ib.prototype=Object.create(E.prototype);Ib.prototype.constructor=Ib;fe.prototype=Object.create(F.prototype);fe.prototype.constructor=fe;Vc.prototype=Object.create(E.prototype);Vc.prototype.constructor=Vc;ge.prototype=Object.create(F.prototype);ge.prototype.constructor=ge;Wc.prototype=Object.create(E.prototype);Wc.prototype.constructor=Wc;gc.prototype=Object.create(F.prototype);gc.prototype.constructor=gc;gc.prototype.toJSON=function(){var a=F.prototype.toJSON.call(this);return Yh(this.parameters.shapes,a);};hc.prototype=Object.create(E.prototype);hc.prototype.constructor=hc;hc.prototype.toJSON=function(){var a=E.prototype.toJSON.call(this);return Yh(this.parameters.shapes,a);};Xc.prototype=Object.create(E.prototype);Xc.prototype.constructor=Xc;ic.prototype=Object.create(F.prototype);ic.prototype.constructor=ic;qb.prototype=Object.create(E.prototype);qb.prototype.constructor=qb;he.prototype=Object.create(ic.prototype);he.prototype.constructor=he;ie.prototype=Object.create(qb.prototype);ie.prototype.constructor=ie;je.prototype=Object.create(F.prototype);je.prototype.constructor=je;Yc.prototype=Object.create(E.prototype);Yc.prototype.constructor=Yc;var ta=Object.freeze({WireframeGeometry:Mc,ParametricGeometry:Rd,ParametricBufferGeometry:Nc,TetrahedronGeometry:Td,TetrahedronBufferGeometry:Oc,OctahedronGeometry:Ud,OctahedronBufferGeometry:cc,IcosahedronGeometry:Vd,IcosahedronBufferGeometry:Pc,DodecahedronGeometry:Wd,DodecahedronBufferGeometry:Qc,PolyhedronGeometry:Sd,PolyhedronBufferGeometry:Ca,TubeGeometry:Xd,TubeBufferGeometry:dc,TorusKnotGeometry:Yd,TorusKnotBufferGeometry:Rc,TorusGeometry:Zd,TorusBufferGeometry:Sc,TextGeometry:de,TextBufferGeometry:Uc,SphereGeometry:ee,SphereBufferGeometry:Ib,RingGeometry:fe,RingBufferGeometry:Vc,PlaneGeometry:Fd,PlaneBufferGeometry:$b,LatheGeometry:ge,LatheBufferGeometry:Wc,ShapeGeometry:gc,ShapeBufferGeometry:hc,ExtrudeGeometry:fc,ExtrudeBufferGeometry:eb,EdgesGeometry:Xc,ConeGeometry:he,ConeBufferGeometry:ie,CylinderGeometry:ic,CylinderBufferGeometry:qb,CircleGeometry:je,CircleBufferGeometry:Yc,BoxGeometry:Zg,BoxBufferGeometry:Gd});jc.prototype=Object.create(M.prototype);jc.prototype.constructor=jc;jc.prototype.isShadowMaterial=!0;jc.prototype.copy=function(a){M.prototype.copy.call(this,a);this.color.copy(a.color);return this;};Zc.prototype=Object.create(ma.prototype);Zc.prototype.constructor=Zc;Zc.prototype.isRawShaderMaterial=!0;fb.prototype=Object.create(M.prototype);fb.prototype.constructor=fb;fb.prototype.isMeshStandardMaterial=!0;fb.prototype.copy=function(a){M.prototype.copy.call(this,a);this.defines={STANDARD:""};this.color.copy(a.color);this.roughness=a.roughness;this.metalness=a.metalness;this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalMapType=a.normalMapType;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.roughnessMap=a.roughnessMap;this.metalnessMap=a.metalnessMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.envMapIntensity=a.envMapIntensity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this;};kc.prototype=Object.create(fb.prototype);kc.prototype.constructor=kc;kc.prototype.isMeshPhysicalMaterial=!0;kc.prototype.copy=function(a){fb.prototype.copy.call(this,a);this.defines={STANDARD:"",PHYSICAL:""};this.reflectivity=a.reflectivity;this.clearcoat=a.clearcoat;this.clearcoatRoughness=a.clearcoatRoughness;this.sheen=a.sheen?(this.sheen||new H()).copy(a.sheen):null;this.clearcoatNormalMap=a.clearcoatNormalMap;this.clearcoatNormalScale.copy(a.clearcoatNormalScale);this.transparency=a.transparency;return this;};Ra.prototype=Object.create(M.prototype);Ra.prototype.constructor=Ra;Ra.prototype.isMeshPhongMaterial=!0;Ra.prototype.copy=function(a){M.prototype.copy.call(this,a);this.color.copy(a.color);this.specular.copy(a.specular);this.shininess=a.shininess;this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalMapType=a.normalMapType;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this;};lc.prototype=Object.create(Ra.prototype);lc.prototype.constructor=lc;lc.prototype.isMeshToonMaterial=!0;lc.prototype.copy=function(a){Ra.prototype.copy.call(this,a);this.gradientMap=a.gradientMap;return this;};mc.prototype=Object.create(M.prototype);mc.prototype.constructor=mc;mc.prototype.isMeshNormalMaterial=!0;mc.prototype.copy=function(a){M.prototype.copy.call(this,a);this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalMapType=a.normalMapType;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this;};nc.prototype=Object.create(M.prototype);nc.prototype.constructor=nc;nc.prototype.isMeshLambertMaterial=!0;nc.prototype.copy=function(a){M.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this;};oc.prototype=Object.create(M.prototype);oc.prototype.constructor=oc;oc.prototype.isMeshMatcapMaterial=!0;oc.prototype.copy=function(a){M.prototype.copy.call(this,a);this.defines={MATCAP:""};this.color.copy(a.color);this.matcap=a.matcap;this.map=a.map;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalMapType=a.normalMapType;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.alphaMap=a.alphaMap;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this;};pc.prototype=Object.create(Q.prototype);pc.prototype.constructor=pc;pc.prototype.isLineDashedMaterial=!0;pc.prototype.copy=function(a){Q.prototype.copy.call(this,a);this.scale=a.scale;this.dashSize=a.dashSize;this.gapSize=a.gapSize;return this;};var Fk=Object.freeze({ShadowMaterial:jc,SpriteMaterial:Hb,RawShaderMaterial:Zc,ShaderMaterial:ma,PointsMaterial:Qa,MeshPhysicalMaterial:kc,MeshStandardMaterial:fb,MeshPhongMaterial:Ra,MeshToonMaterial:lc,MeshNormalMaterial:mc,MeshLambertMaterial:nc,MeshDepthMaterial:Db,MeshDistanceMaterial:Eb,MeshBasicMaterial:Ga,MeshMatcapMaterial:oc,LineDashedMaterial:pc,LineBasicMaterial:Q,Material:M}),pa={arraySlice:function arraySlice(a,b,c){return pa.isTypedArray(a)?new a.constructor(a.subarray(b,void 0!==c?c:a.length)):a.slice(b,c);},convertArray:function convertArray(a,b,c){return!a||!c&&a.constructor===b?a:"number"===typeof b.BYTES_PER_ELEMENT?new b(a):Array.prototype.slice.call(a);},isTypedArray:function isTypedArray(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView);},getKeyframeOrder:function getKeyframeOrder(a){for(var b=a.length,c=Array(b),d=0;d!==b;++d){c[d]=d;}c.sort(function(b,c){return a[b]-a[c];});return c;},sortedArray:function sortedArray(a,b,c){for(var d=a.length,e=new a.constructor(d),f=0,g=0;g!==d;++f){for(var h=c[f]*b,l=0;l!==b;++l){e[g++]=a[h+l];}}return e;},flattenJSON:function flattenJSON(a,b,c,d){for(var e=1,f=a[0];void 0!==f&&void 0===f[d];){f=a[e++];}if(void 0!==f){var g=f[d];if(void 0!==g)if(Array.isArray(g)){do{g=f[d],void 0!==g&&(b.push(f.time),c.push.apply(c,g)),f=a[e++];}while(void 0!==f);}else if(void 0!==g.toArray){do{g=f[d],void 0!==g&&(b.push(f.time),g.toArray(c,c.length)),f=a[e++];}while(void 0!==f);}else{do{g=f[d],void 0!==g&&(b.push(f.time),c.push(g)),f=a[e++];}while(void 0!==f);}}}};Object.assign(Ia.prototype,{evaluate:function evaluate(a){var b=this.parameterPositions,c=this._cachedIndex,d=b[c],e=b[c-1];a:{b:{c:{d:if(!(a<d)){for(var f=c+2;;){if(void 0===d){if(a<e)break d;this._cachedIndex=c=b.length;return this.afterEnd_(c-1,a,e);}if(c===f)break;e=d;d=b[++c];if(a<d)break b;}d=b.length;break c;}if(a>=e)break a;else{f=b[1];a<f&&(c=2,e=f);for(f=c-2;;){if(void 0===e)return this._cachedIndex=0,this.beforeStart_(0,a,d);if(c===f)break;d=e;e=b[--c-1];if(a>=e)break b;}d=c;c=0;}}for(;c<d;){e=c+d>>>1,a<b[e]?d=e:c=e+1;}d=b[c];e=b[c-1];if(void 0===e)return this._cachedIndex=0,this.beforeStart_(0,a,d);if(void 0===d)return this._cachedIndex=c=b.length,this.afterEnd_(c-1,e,a);}this._cachedIndex=c;this.intervalChanged_(c,e,d);}return this.interpolate_(c,e,a,d);},settings:null,DefaultSettings_:{},getSettings_:function getSettings_(){return this.settings||this.DefaultSettings_;},copySampleValue_:function copySampleValue_(a){var b=this.resultBuffer,c=this.sampleValues,d=this.valueSize;a*=d;for(var e=0;e!==d;++e){b[e]=c[a+e];}return b;},interpolate_:function interpolate_(){throw Error("call to abstract method");},intervalChanged_:function intervalChanged_(){}});Object.assign(Ia.prototype,{beforeStart_:Ia.prototype.copySampleValue_,afterEnd_:Ia.prototype.copySampleValue_});Ne.prototype=Object.assign(Object.create(Ia.prototype),{constructor:Ne,DefaultSettings_:{endingStart:2400,endingEnd:2400},intervalChanged_:function intervalChanged_(a,b,c){var d=this.parameterPositions,e=a-2,f=a+1,g=d[e],h=d[f];if(void 0===g)switch(this.getSettings_().endingStart){case 2401:e=a;g=2*b-c;break;case 2402:e=d.length-2;g=b+d[e]-d[e+1];break;default:e=a,g=c;}if(void 0===h)switch(this.getSettings_().endingEnd){case 2401:f=a;h=2*c-b;break;case 2402:f=1;h=c+d[1]-d[0];break;default:f=a-1,h=b;}a=.5*(c-b);d=this.valueSize;this._weightPrev=a/(b-g);this._weightNext=a/(h-c);this._offsetPrev=e*d;this._offsetNext=f*d;},interpolate_:function interpolate_(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;var h=a-g,l=this._offsetPrev,k=this._offsetNext,n=this._weightPrev,u=this._weightNext,t=(c-b)/(d-b);c=t*t;d=c*t;b=-n*d+2*n*c-n*t;n=(1+n)*d+(-1.5-2*n)*c+(-.5+n)*t+1;t=(-1-u)*d+(1.5+u)*c+.5*t;u=u*d-u*c;for(c=0;c!==g;++c){e[c]=b*f[l+c]+n*f[h+c]+t*f[a+c]+u*f[k+c];}return e;}});ke.prototype=Object.assign(Object.create(Ia.prototype),{constructor:ke,interpolate_:function interpolate_(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;var h=a-g;b=(c-b)/(d-b);c=1-b;for(d=0;d!==g;++d){e[d]=f[h+d]*c+f[a+d]*b;}return e;}});Oe.prototype=Object.assign(Object.create(Ia.prototype),{constructor:Oe,interpolate_:function interpolate_(a){return this.copySampleValue_(a-1);}});Object.assign(oa,{toJSON:function toJSON(a){var b=a.constructor;if(void 0!==b.toJSON)b=b.toJSON(a);else{b={name:a.name,times:pa.convertArray(a.times,Array),values:pa.convertArray(a.values,Array)};var c=a.getInterpolation();c!==a.DefaultInterpolation&&(b.interpolation=c);}b.type=a.ValueTypeName;return b;}});Object.assign(oa.prototype,{constructor:oa,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:2301,InterpolantFactoryMethodDiscrete:function InterpolantFactoryMethodDiscrete(a){return new Oe(this.times,this.values,this.getValueSize(),a);},InterpolantFactoryMethodLinear:function InterpolantFactoryMethodLinear(a){return new ke(this.times,this.values,this.getValueSize(),a);},InterpolantFactoryMethodSmooth:function InterpolantFactoryMethodSmooth(a){return new Ne(this.times,this.values,this.getValueSize(),a);},setInterpolation:function setInterpolation(a){switch(a){case 2300:var b=this.InterpolantFactoryMethodDiscrete;break;case 2301:b=this.InterpolantFactoryMethodLinear;break;case 2302:b=this.InterpolantFactoryMethodSmooth;}if(void 0===b){b="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(void 0===this.createInterpolant)if(a!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(b);console.warn("THREE.KeyframeTrack:",b);return this;}this.createInterpolant=b;return this;},getInterpolation:function getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;}},getValueSize:function getValueSize(){return this.values.length/this.times.length;},shift:function shift(a){if(0!==a)for(var b=this.times,c=0,d=b.length;c!==d;++c){b[c]+=a;}return this;},scale:function scale(a){if(1!==a)for(var b=this.times,c=0,d=b.length;c!==d;++c){b[c]*=a;}return this;},trim:function trim(a,b){for(var c=this.times,d=c.length,e=0,f=d-1;e!==d&&c[e]<a;){++e;}for(;-1!==f&&c[f]>b;){--f;}++f;if(0!==e||f!==d)e>=f&&(f=Math.max(f,1),e=f-1),a=this.getValueSize(),this.times=pa.arraySlice(c,e,f),this.values=pa.arraySlice(this.values,e*a,f*a);return this;},validate:function validate(){var a=!0,b=this.getValueSize();0!==b-Math.floor(b)&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),a=!1);var c=this.times;b=this.values;var d=c.length;0===d&&(console.error("THREE.KeyframeTrack: Track is empty.",this),a=!1);for(var e=null,f=0;f!==d;f++){var g=c[f];if("number"===typeof g&&isNaN(g)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,f,g);a=!1;break;}if(null!==e&&e>g){console.error("THREE.KeyframeTrack: Out of order keys.",this,f,g,e);a=!1;break;}e=g;}if(void 0!==b&&pa.isTypedArray(b))for(f=0,c=b.length;f!==c;++f){if(d=b[f],isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,f,d);a=!1;break;}}return a;},optimize:function optimize(){for(var a=this.times,b=this.values,c=this.getValueSize(),d=2302===this.getInterpolation(),e=1,f=a.length-1,g=1;g<f;++g){var h=!1,l=a[g];if(l!==a[g+1]&&(1!==g||l!==l[0]))if(d)h=!0;else{var k=g*c,n=k-c,u=k+c;for(l=0;l!==c;++l){var t=b[k+l];if(t!==b[n+l]||t!==b[u+l]){h=!0;break;}}}if(h){if(g!==e)for(a[e]=a[g],h=g*c,k=e*c,l=0;l!==c;++l){b[k+l]=b[h+l];}++e;}}if(0<f){a[e]=a[f];h=f*c;k=e*c;for(l=0;l!==c;++l){b[k+l]=b[h+l];}++e;}e!==a.length&&(this.times=pa.arraySlice(a,0,e),this.values=pa.arraySlice(b,0,e*c));return this;},clone:function clone(){var a=pa.arraySlice(this.times,0),b=pa.arraySlice(this.values,0);a=new this.constructor(this.name,a,b);a.createInterpolant=this.createInterpolant;return a;}});Pe.prototype=Object.assign(Object.create(oa.prototype),{constructor:Pe,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});Qe.prototype=Object.assign(Object.create(oa.prototype),{constructor:Qe,ValueTypeName:"color"});$c.prototype=Object.assign(Object.create(oa.prototype),{constructor:$c,ValueTypeName:"number"});Re.prototype=Object.assign(Object.create(Ia.prototype),{constructor:Re,interpolate_:function interpolate_(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;b=(c-b)/(d-b);for(c=a+g;a!==c;a+=4){ua.slerpFlat(e,0,f,a-g,f,a,b);}return e;}});le.prototype=Object.assign(Object.create(oa.prototype),{constructor:le,ValueTypeName:"quaternion",DefaultInterpolation:2301,InterpolantFactoryMethodLinear:function InterpolantFactoryMethodLinear(a){return new Re(this.times,this.values,this.getValueSize(),a);},InterpolantFactoryMethodSmooth:void 0});Se.prototype=Object.assign(Object.create(oa.prototype),{constructor:Se,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});ad.prototype=Object.assign(Object.create(oa.prototype),{constructor:ad,ValueTypeName:"vector"});Object.assign(Ma,{parse:function parse(a){for(var b=[],c=a.tracks,d=1/(a.fps||1),e=0,f=c.length;e!==f;++e){b.push(rk(c[e]).scale(d));}return new Ma(a.name,a.duration,b);},toJSON:function toJSON(a){var b=[],c=a.tracks;a={name:a.name,duration:a.duration,tracks:b,uuid:a.uuid};for(var d=0,e=c.length;d!==e;++d){b.push(oa.toJSON(c[d]));}return a;},CreateFromMorphTargetSequence:function CreateFromMorphTargetSequence(a,b,c,d){for(var e=b.length,f=[],g=0;g<e;g++){var h=[],l=[];h.push((g+e-1)%e,g,(g+1)%e);l.push(0,1,0);var k=pa.getKeyframeOrder(h);h=pa.sortedArray(h,1,k);l=pa.sortedArray(l,1,k);d||0!==h[0]||(h.push(e),l.push(l[0]));f.push(new $c(".morphTargetInfluences["+b[g].name+"]",h,l).scale(1/c));}return new Ma(a,-1,f);},findByName:function findByName(a,b){var c=a;Array.isArray(a)||(c=a.geometry&&a.geometry.animations||a.animations);for(a=0;a<c.length;a++){if(c[a].name===b)return c[a];}return null;},CreateClipsFromMorphTargetSequences:function CreateClipsFromMorphTargetSequences(a,b,c){for(var d={},e=/^([\w-]*?)([\d]+)$/,f=0,g=a.length;f<g;f++){var h=a[f],l=h.name.match(e);if(l&&1<l.length){var k=l[1];(l=d[k])||(d[k]=l=[]);l.push(h);}}a=[];for(k in d){a.push(Ma.CreateFromMorphTargetSequence(k,d[k],b,c));}return a;},parseAnimation:function parseAnimation(a,b){if(!a)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;var c=function c(a,b,_c,d,e){if(0!==_c.length){var f=[],g=[];pa.flattenJSON(_c,f,g,d);0!==f.length&&e.push(new a(b,f,g));}},d=[],e=a.name||"default",f=a.length||-1,g=a.fps||30;a=a.hierarchy||[];for(var h=0;h<a.length;h++){var l=a[h].keys;if(l&&0!==l.length)if(l[0].morphTargets){f={};for(var k=0;k<l.length;k++){if(l[k].morphTargets)for(var n=0;n<l[k].morphTargets.length;n++){f[l[k].morphTargets[n]]=-1;}}for(var u in f){var t=[],r=[];for(n=0;n!==l[k].morphTargets.length;++n){var p=l[k];t.push(p.time);r.push(p.morphTarget===u?1:0);}d.push(new $c(".morphTargetInfluence["+u+"]",t,r));}f=f.length*(g||1);}else k=".bones["+b[h].name+"]",c(ad,k+".position",l,"pos",d),c(le,k+".quaternion",l,"rot",d),c(ad,k+".scale",l,"scl",d);}return 0===d.length?null:new Ma(e,f,d);}});Object.assign(Ma.prototype,{resetDuration:function resetDuration(){for(var a=0,b=0,c=this.tracks.length;b!==c;++b){var d=this.tracks[b];a=Math.max(a,d.times[d.times.length-1]);}this.duration=a;return this;},trim:function trim(){for(var a=0;a<this.tracks.length;a++){this.tracks[a].trim(0,this.duration);}return this;},validate:function validate(){for(var a=!0,b=0;b<this.tracks.length;b++){a=a&&this.tracks[b].validate();}return a;},optimize:function optimize(){for(var a=0;a<this.tracks.length;a++){this.tracks[a].optimize();}return this;},clone:function clone(){for(var a=[],b=0;b<this.tracks.length;b++){a.push(this.tracks[b].clone());}return new Ma(this.name,this.duration,a);}});var uc={enabled:!1,files:{},add:function add(a,b){!1!==this.enabled&&(this.files[a]=b);},get:function get(a){if(!1!==this.enabled)return this.files[a];},remove:function remove(a){delete this.files[a];},clear:function clear(){this.files={};}},Zh=new pg();Object.assign(S.prototype,{load:function load(){},parse:function parse(){},setCrossOrigin:function setCrossOrigin(a){this.crossOrigin=a;return this;},setPath:function setPath(a){this.path=a;return this;},setResourcePath:function setResourcePath(a){this.resourcePath=a;return this;}});var $a={};Na.prototype=Object.assign(Object.create(S.prototype),{constructor:Na,load:function load(a,b,c,d){void 0===a&&(a="");void 0!==this.path&&(a=this.path+a);a=this.manager.resolveURL(a);var e=this,f=uc.get(a);if(void 0!==f)return e.manager.itemStart(a),setTimeout(function(){b&&b(f);e.manager.itemEnd(a);},0),f;if(void 0!==$a[a])$a[a].push({onLoad:b,onProgress:c,onError:d});else{var g=a.match(/^data:(.*?)(;base64)?,(.*)$/);if(g){c=g[1];var h=!!g[2];g=g[3];g=decodeURIComponent(g);h&&(g=atob(g));try{var l=(this.responseType||"").toLowerCase();switch(l){case"arraybuffer":case"blob":var k=new Uint8Array(g.length);for(h=0;h<g.length;h++){k[h]=g.charCodeAt(h);}var n="blob"===l?new Blob([k.buffer],{type:c}):k.buffer;break;case"document":n=new DOMParser().parseFromString(g,c);break;case"json":n=JSON.parse(g);break;default:n=g;}setTimeout(function(){b&&b(n);e.manager.itemEnd(a);},0);}catch(t){setTimeout(function(){d&&d(t);e.manager.itemError(a);e.manager.itemEnd(a);},0);}}else{$a[a]=[];$a[a].push({onLoad:b,onProgress:c,onError:d});var u=new XMLHttpRequest();u.open("GET",a,!0);u.addEventListener("load",function(b){var c=this.response;uc.add(a,c);var d=$a[a];delete $a[a];if(200===this.status||0===this.status){0===this.status&&console.warn("THREE.FileLoader: HTTP Status 0 received.");for(var f=0,g=d.length;f<g;f++){var h=d[f];if(h.onLoad)h.onLoad(c);}}else{f=0;for(g=d.length;f<g;f++){if(h=d[f],h.onError)h.onError(b);}e.manager.itemError(a);}e.manager.itemEnd(a);},!1);u.addEventListener("progress",function(b){for(var c=$a[a],d=0,e=c.length;d<e;d++){var f=c[d];if(f.onProgress)f.onProgress(b);}},!1);u.addEventListener("error",function(b){var c=$a[a];delete $a[a];for(var d=0,f=c.length;d<f;d++){var g=c[d];if(g.onError)g.onError(b);}e.manager.itemError(a);e.manager.itemEnd(a);},!1);u.addEventListener("abort",function(b){var c=$a[a];delete $a[a];for(var d=0,f=c.length;d<f;d++){var g=c[d];if(g.onError)g.onError(b);}e.manager.itemError(a);e.manager.itemEnd(a);},!1);void 0!==this.responseType&&(u.responseType=this.responseType);void 0!==this.withCredentials&&(u.withCredentials=this.withCredentials);u.overrideMimeType&&u.overrideMimeType(void 0!==this.mimeType?this.mimeType:"text/plain");for(h in this.requestHeader){u.setRequestHeader(h,this.requestHeader[h]);}u.send(null);}e.manager.itemStart(a);return u;}},setResponseType:function setResponseType(a){this.responseType=a;return this;},setWithCredentials:function setWithCredentials(a){this.withCredentials=a;return this;},setMimeType:function setMimeType(a){this.mimeType=a;return this;},setRequestHeader:function setRequestHeader(a){this.requestHeader=a;return this;}});qg.prototype=Object.assign(Object.create(S.prototype),{constructor:qg,load:function load(a,b,c,d){var e=this,f=new Na(e.manager);f.setPath(e.path);f.load(a,function(a){b(e.parse(JSON.parse(a)));},c,d);},parse:function parse(a){for(var b=[],c=0;c<a.length;c++){var d=Ma.parse(a[c]);b.push(d);}return b;}});rg.prototype=Object.assign(Object.create(S.prototype),{constructor:rg,load:function load(a,b,c,d){function e(e){l.load(a[e],function(a){a=f.parse(a,!0);g[e]={width:a.width,height:a.height,format:a.format,mipmaps:a.mipmaps};k+=1;6===k&&(1===a.mipmapCount&&(h.minFilter=1006),h.format=a.format,h.needsUpdate=!0,b&&b(h));},c,d);}var f=this,g=[],h=new Lc();h.image=g;var l=new Na(this.manager);l.setPath(this.path);l.setResponseType("arraybuffer");if(Array.isArray(a))for(var k=0,n=0,u=a.length;n<u;++n){e(n);}else l.load(a,function(a){a=f.parse(a,!0);if(a.isCubemap)for(var c=a.mipmaps.length/a.mipmapCount,d=0;d<c;d++){g[d]={mipmaps:[]};for(var e=0;e<a.mipmapCount;e++){g[d].mipmaps.push(a.mipmaps[d*a.mipmapCount+e]),g[d].format=a.format,g[d].width=a.width,g[d].height=a.height;}}else h.image.width=a.width,h.image.height=a.height,h.mipmaps=a.mipmaps;1===a.mipmapCount&&(h.minFilter=1006);h.format=a.format;h.needsUpdate=!0;b&&b(h);},c,d);return h;}});Te.prototype=Object.assign(Object.create(S.prototype),{constructor:Te,load:function load(a,b,c,d){var e=this,f=new Zb(),g=new Na(this.manager);g.setResponseType("arraybuffer");g.setPath(this.path);g.load(a,function(a){if(a=e.parse(a))void 0!==a.image?f.image=a.image:void 0!==a.data&&(f.image.width=a.width,f.image.height=a.height,f.image.data=a.data),f.wrapS=void 0!==a.wrapS?a.wrapS:1001,f.wrapT=void 0!==a.wrapT?a.wrapT:1001,f.magFilter=void 0!==a.magFilter?a.magFilter:1006,f.minFilter=void 0!==a.minFilter?a.minFilter:1008,f.anisotropy=void 0!==a.anisotropy?a.anisotropy:1,void 0!==a.format&&(f.format=a.format),void 0!==a.type&&(f.type=a.type),void 0!==a.mipmaps&&(f.mipmaps=a.mipmaps),1===a.mipmapCount&&(f.minFilter=1006),f.needsUpdate=!0,b&&b(f,a);},c,d);return f;}});bd.prototype=Object.assign(Object.create(S.prototype),{constructor:bd,load:function load(a,b,c,d){function e(){l.removeEventListener("load",e,!1);l.removeEventListener("error",f,!1);uc.add(a,this);b&&b(this);g.manager.itemEnd(a);}function f(b){l.removeEventListener("load",e,!1);l.removeEventListener("error",f,!1);d&&d(b);g.manager.itemError(a);g.manager.itemEnd(a);}void 0!==this.path&&(a=this.path+a);a=this.manager.resolveURL(a);var g=this,h=uc.get(a);if(void 0!==h)return g.manager.itemStart(a),setTimeout(function(){b&&b(h);g.manager.itemEnd(a);},0),h;var l=document.createElementNS("http://www.w3.org/1999/xhtml","img");l.addEventListener("load",e,!1);l.addEventListener("error",f,!1);"data:"!==a.substr(0,5)&&void 0!==this.crossOrigin&&(l.crossOrigin=this.crossOrigin);g.manager.itemStart(a);l.src=a;return l;}});Ue.prototype=Object.assign(Object.create(S.prototype),{constructor:Ue,load:function load(a,b,c,d){function e(c){g.load(a[c],function(a){f.images[c]=a;h++;6===h&&(f.needsUpdate=!0,b&&b(f));},void 0,d);}var f=new ob(),g=new bd(this.manager);g.setCrossOrigin(this.crossOrigin);g.setPath(this.path);var h=0;for(c=0;c<a.length;++c){e(c);}return f;}});Ve.prototype=Object.assign(Object.create(S.prototype),{constructor:Ve,load:function load(a,b,c,d){var e=new W(),f=new bd(this.manager);f.setCrossOrigin(this.crossOrigin);f.setPath(this.path);f.load(a,function(c){e.image=c;c=0<a.search(/\.jpe?g($|\?)/i)||0===a.search(/^data:image\/jpeg/);e.format=c?1022:1023;e.needsUpdate=!0;void 0!==b&&b(e);},c,d);return e;}});Object.assign(D.prototype,{getPoint:function getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.");return null;},getPointAt:function getPointAt(a,b){a=this.getUtoTmapping(a);return this.getPoint(a,b);},getPoints:function getPoints(a){void 0===a&&(a=5);for(var b=[],c=0;c<=a;c++){b.push(this.getPoint(c/a));}return b;},getSpacedPoints:function getSpacedPoints(a){void 0===a&&(a=5);for(var b=[],c=0;c<=a;c++){b.push(this.getPointAt(c/a));}return b;},getLength:function getLength(){var a=this.getLengths();return a[a.length-1];},getLengths:function getLengths(a){void 0===a&&(a=this.arcLengthDivisions);if(this.cacheArcLengths&&this.cacheArcLengths.length===a+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var b=[],c=this.getPoint(0),d,e=0;b.push(0);for(d=1;d<=a;d++){var f=this.getPoint(d/a);e+=f.distanceTo(c);b.push(e);c=f;}return this.cacheArcLengths=b;},updateArcLengths:function updateArcLengths(){this.needsUpdate=!0;this.getLengths();},getUtoTmapping:function getUtoTmapping(a,b){var c=this.getLengths(),d=c.length;b=b?b:a*c[d-1];for(var e=0,f=d-1,g;e<=f;){if(a=Math.floor(e+(f-e)/2),g=c[a]-b,0>g)e=a+1;else if(0<g)f=a-1;else{f=a;break;}}a=f;if(c[a]===b)return a/(d-1);e=c[a];return(a+(b-e)/(c[a+1]-e))/(d-1);},getTangent:function getTangent(a){var b=a-1E-4;a+=1E-4;0>b&&(b=0);1<a&&(a=1);b=this.getPoint(b);return this.getPoint(a).clone().sub(b).normalize();},getTangentAt:function getTangentAt(a){a=this.getUtoTmapping(a);return this.getTangent(a);},computeFrenetFrames:function computeFrenetFrames(a,b){var c=new n(),d=[],e=[],f=[],g=new n(),h=new U(),l;for(l=0;l<=a;l++){var k=l/a;d[l]=this.getTangentAt(k);d[l].normalize();}e[0]=new n();f[0]=new n();l=Number.MAX_VALUE;k=Math.abs(d[0].x);var q=Math.abs(d[0].y),u=Math.abs(d[0].z);k<=l&&(l=k,c.set(1,0,0));q<=l&&(l=q,c.set(0,1,0));u<=l&&c.set(0,0,1);g.crossVectors(d[0],c).normalize();e[0].crossVectors(d[0],g);f[0].crossVectors(d[0],e[0]);for(l=1;l<=a;l++){e[l]=e[l-1].clone(),f[l]=f[l-1].clone(),g.crossVectors(d[l-1],d[l]),g.length()>Number.EPSILON&&(g.normalize(),c=Math.acos(L.clamp(d[l-1].dot(d[l]),-1,1)),e[l].applyMatrix4(h.makeRotationAxis(g,c))),f[l].crossVectors(d[l],e[l]);}if(!0===b)for(c=Math.acos(L.clamp(e[0].dot(e[a]),-1,1)),c/=a,0<d[0].dot(g.crossVectors(e[0],e[a]))&&(c=-c),l=1;l<=a;l++){e[l].applyMatrix4(h.makeRotationAxis(d[l],c*l)),f[l].crossVectors(d[l],e[l]);}return{tangents:d,normals:e,binormals:f};},clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.arcLengthDivisions=a.arcLengthDivisions;return this;},toJSON:function toJSON(){var a={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};a.arcLengthDivisions=this.arcLengthDivisions;a.type=this.type;return a;},fromJSON:function fromJSON(a){this.arcLengthDivisions=a.arcLengthDivisions;return this;}});Ja.prototype=Object.create(D.prototype);Ja.prototype.constructor=Ja;Ja.prototype.isEllipseCurve=!0;Ja.prototype.getPoint=function(a,b){b=b||new w();for(var c=2*Math.PI,d=this.aEndAngle-this.aStartAngle,e=Math.abs(d)<Number.EPSILON;0>d;){d+=c;}for(;d>c;){d-=c;}d<Number.EPSILON&&(d=e?0:c);!0!==this.aClockwise||e||(d=d===c?-c:d-c);c=this.aStartAngle+a*d;a=this.aX+this.xRadius*Math.cos(c);var f=this.aY+this.yRadius*Math.sin(c);0!==this.aRotation&&(c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),e=a-this.aX,f-=this.aY,a=e*c-f*d+this.aX,f=e*d+f*c+this.aY);return b.set(a,f);};Ja.prototype.copy=function(a){D.prototype.copy.call(this,a);this.aX=a.aX;this.aY=a.aY;this.xRadius=a.xRadius;this.yRadius=a.yRadius;this.aStartAngle=a.aStartAngle;this.aEndAngle=a.aEndAngle;this.aClockwise=a.aClockwise;this.aRotation=a.aRotation;return this;};Ja.prototype.toJSON=function(){var a=D.prototype.toJSON.call(this);a.aX=this.aX;a.aY=this.aY;a.xRadius=this.xRadius;a.yRadius=this.yRadius;a.aStartAngle=this.aStartAngle;a.aEndAngle=this.aEndAngle;a.aClockwise=this.aClockwise;a.aRotation=this.aRotation;return a;};Ja.prototype.fromJSON=function(a){D.prototype.fromJSON.call(this,a);this.aX=a.aX;this.aY=a.aY;this.xRadius=a.xRadius;this.yRadius=a.yRadius;this.aStartAngle=a.aStartAngle;this.aEndAngle=a.aEndAngle;this.aClockwise=a.aClockwise;this.aRotation=a.aRotation;return this;};cd.prototype=Object.create(Ja.prototype);cd.prototype.constructor=cd;cd.prototype.isArcCurve=!0;var Hf=new n(),bh=new sg(),ch=new sg(),dh=new sg();ya.prototype=Object.create(D.prototype);ya.prototype.constructor=ya;ya.prototype.isCatmullRomCurve3=!0;ya.prototype.getPoint=function(a,b){b=b||new n();var c=this.points,d=c.length;a*=d-(this.closed?0:1);var e=Math.floor(a);a-=e;this.closed?e+=0<e?0:(Math.floor(Math.abs(e)/d)+1)*d:0===a&&e===d-1&&(e=d-2,a=1);if(this.closed||0<e)var f=c[(e-1)%d];else Hf.subVectors(c[0],c[1]).add(c[0]),f=Hf;var g=c[e%d];var h=c[(e+1)%d];this.closed||e+2<d?c=c[(e+2)%d]:(Hf.subVectors(c[d-1],c[d-2]).add(c[d-1]),c=Hf);if("centripetal"===this.curveType||"chordal"===this.curveType){var l="chordal"===this.curveType?.5:.25;d=Math.pow(f.distanceToSquared(g),l);e=Math.pow(g.distanceToSquared(h),l);l=Math.pow(h.distanceToSquared(c),l);1E-4>e&&(e=1);1E-4>d&&(d=e);1E-4>l&&(l=e);bh.initNonuniformCatmullRom(f.x,g.x,h.x,c.x,d,e,l);ch.initNonuniformCatmullRom(f.y,g.y,h.y,c.y,d,e,l);dh.initNonuniformCatmullRom(f.z,g.z,h.z,c.z,d,e,l);}else"catmullrom"===this.curveType&&(bh.initCatmullRom(f.x,g.x,h.x,c.x,this.tension),ch.initCatmullRom(f.y,g.y,h.y,c.y,this.tension),dh.initCatmullRom(f.z,g.z,h.z,c.z,this.tension));b.set(bh.calc(a),ch.calc(a),dh.calc(a));return b;};ya.prototype.copy=function(a){D.prototype.copy.call(this,a);this.points=[];for(var b=0,c=a.points.length;b<c;b++){this.points.push(a.points[b].clone());}this.closed=a.closed;this.curveType=a.curveType;this.tension=a.tension;return this;};ya.prototype.toJSON=function(){var a=D.prototype.toJSON.call(this);a.points=[];for(var b=0,c=this.points.length;b<c;b++){a.points.push(this.points[b].toArray());}a.closed=this.closed;a.curveType=this.curveType;a.tension=this.tension;return a;};ya.prototype.fromJSON=function(a){D.prototype.fromJSON.call(this,a);this.points=[];for(var b=0,c=a.points.length;b<c;b++){var d=a.points[b];this.points.push(new n().fromArray(d));}this.closed=a.closed;this.curveType=a.curveType;this.tension=a.tension;return this;};Sa.prototype=Object.create(D.prototype);Sa.prototype.constructor=Sa;Sa.prototype.isCubicBezierCurve=!0;Sa.prototype.getPoint=function(a,b){b=b||new w();var c=this.v0,d=this.v1,e=this.v2,f=this.v3;b.set(ne(a,c.x,d.x,e.x,f.x),ne(a,c.y,d.y,e.y,f.y));return b;};Sa.prototype.copy=function(a){D.prototype.copy.call(this,a);this.v0.copy(a.v0);this.v1.copy(a.v1);this.v2.copy(a.v2);this.v3.copy(a.v3);return this;};Sa.prototype.toJSON=function(){var a=D.prototype.toJSON.call(this);a.v0=this.v0.toArray();a.v1=this.v1.toArray();a.v2=this.v2.toArray();a.v3=this.v3.toArray();return a;};Sa.prototype.fromJSON=function(a){D.prototype.fromJSON.call(this,a);this.v0.fromArray(a.v0);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);this.v3.fromArray(a.v3);return this;};gb.prototype=Object.create(D.prototype);gb.prototype.constructor=gb;gb.prototype.isCubicBezierCurve3=!0;gb.prototype.getPoint=function(a,b){b=b||new n();var c=this.v0,d=this.v1,e=this.v2,f=this.v3;b.set(ne(a,c.x,d.x,e.x,f.x),ne(a,c.y,d.y,e.y,f.y),ne(a,c.z,d.z,e.z,f.z));return b;};gb.prototype.copy=function(a){D.prototype.copy.call(this,a);this.v0.copy(a.v0);this.v1.copy(a.v1);this.v2.copy(a.v2);this.v3.copy(a.v3);return this;};gb.prototype.toJSON=function(){var a=D.prototype.toJSON.call(this);a.v0=this.v0.toArray();a.v1=this.v1.toArray();a.v2=this.v2.toArray();a.v3=this.v3.toArray();return a;};gb.prototype.fromJSON=function(a){D.prototype.fromJSON.call(this,a);this.v0.fromArray(a.v0);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);this.v3.fromArray(a.v3);return this;};za.prototype=Object.create(D.prototype);za.prototype.constructor=za;za.prototype.isLineCurve=!0;za.prototype.getPoint=function(a,b){b=b||new w();1===a?b.copy(this.v2):(b.copy(this.v2).sub(this.v1),b.multiplyScalar(a).add(this.v1));return b;};za.prototype.getPointAt=function(a,b){return this.getPoint(a,b);};za.prototype.getTangent=function(){return this.v2.clone().sub(this.v1).normalize();};za.prototype.copy=function(a){D.prototype.copy.call(this,a);this.v1.copy(a.v1);this.v2.copy(a.v2);return this;};za.prototype.toJSON=function(){var a=D.prototype.toJSON.call(this);a.v1=this.v1.toArray();a.v2=this.v2.toArray();return a;};za.prototype.fromJSON=function(a){D.prototype.fromJSON.call(this,a);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);return this;};Ta.prototype=Object.create(D.prototype);Ta.prototype.constructor=Ta;Ta.prototype.isLineCurve3=!0;Ta.prototype.getPoint=function(a,b){b=b||new n();1===a?b.copy(this.v2):(b.copy(this.v2).sub(this.v1),b.multiplyScalar(a).add(this.v1));return b;};Ta.prototype.getPointAt=function(a,b){return this.getPoint(a,b);};Ta.prototype.copy=function(a){D.prototype.copy.call(this,a);this.v1.copy(a.v1);this.v2.copy(a.v2);return this;};Ta.prototype.toJSON=function(){var a=D.prototype.toJSON.call(this);a.v1=this.v1.toArray();a.v2=this.v2.toArray();return a;};Ta.prototype.fromJSON=function(a){D.prototype.fromJSON.call(this,a);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);return this;};Ua.prototype=Object.create(D.prototype);Ua.prototype.constructor=Ua;Ua.prototype.isQuadraticBezierCurve=!0;Ua.prototype.getPoint=function(a,b){b=b||new w();var c=this.v0,d=this.v1,e=this.v2;b.set(me(a,c.x,d.x,e.x),me(a,c.y,d.y,e.y));return b;};Ua.prototype.copy=function(a){D.prototype.copy.call(this,a);this.v0.copy(a.v0);this.v1.copy(a.v1);this.v2.copy(a.v2);return this;};Ua.prototype.toJSON=function(){var a=D.prototype.toJSON.call(this);a.v0=this.v0.toArray();a.v1=this.v1.toArray();a.v2=this.v2.toArray();return a;};Ua.prototype.fromJSON=function(a){D.prototype.fromJSON.call(this,a);this.v0.fromArray(a.v0);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);return this;};hb.prototype=Object.create(D.prototype);hb.prototype.constructor=hb;hb.prototype.isQuadraticBezierCurve3=!0;hb.prototype.getPoint=function(a,b){b=b||new n();var c=this.v0,d=this.v1,e=this.v2;b.set(me(a,c.x,d.x,e.x),me(a,c.y,d.y,e.y),me(a,c.z,d.z,e.z));return b;};hb.prototype.copy=function(a){D.prototype.copy.call(this,a);this.v0.copy(a.v0);this.v1.copy(a.v1);this.v2.copy(a.v2);return this;};hb.prototype.toJSON=function(){var a=D.prototype.toJSON.call(this);a.v0=this.v0.toArray();a.v1=this.v1.toArray();a.v2=this.v2.toArray();return a;};hb.prototype.fromJSON=function(a){D.prototype.fromJSON.call(this,a);this.v0.fromArray(a.v0);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);return this;};Va.prototype=Object.create(D.prototype);Va.prototype.constructor=Va;Va.prototype.isSplineCurve=!0;Va.prototype.getPoint=function(a,b){b=b||new w();var c=this.points,d=(c.length-1)*a;a=Math.floor(d);d-=a;var e=c[0===a?a:a-1],f=c[a],g=c[a>c.length-2?c.length-1:a+1];c=c[a>c.length-3?c.length-1:a+2];b.set($h(d,e.x,f.x,g.x,c.x),$h(d,e.y,f.y,g.y,c.y));return b;};Va.prototype.copy=function(a){D.prototype.copy.call(this,a);this.points=[];for(var b=0,c=a.points.length;b<c;b++){this.points.push(a.points[b].clone());}return this;};Va.prototype.toJSON=function(){var a=D.prototype.toJSON.call(this);a.points=[];for(var b=0,c=this.points.length;b<c;b++){a.points.push(this.points[b].toArray());}return a;};Va.prototype.fromJSON=function(a){D.prototype.fromJSON.call(this,a);this.points=[];for(var b=0,c=a.points.length;b<c;b++){var d=a.points[b];this.points.push(new w().fromArray(d));}return this;};var eh=Object.freeze({ArcCurve:cd,CatmullRomCurve3:ya,CubicBezierCurve:Sa,CubicBezierCurve3:gb,EllipseCurve:Ja,LineCurve:za,LineCurve3:Ta,QuadraticBezierCurve:Ua,QuadraticBezierCurve3:hb,SplineCurve:Va});rb.prototype=Object.assign(Object.create(D.prototype),{constructor:rb,add:function add(a){this.curves.push(a);},closePath:function closePath(){var a=this.curves[0].getPoint(0),b=this.curves[this.curves.length-1].getPoint(1);a.equals(b)||this.curves.push(new za(b,a));},getPoint:function getPoint(a){var b=a*this.getLength(),c=this.getCurveLengths();for(a=0;a<c.length;){if(c[a]>=b)return b=c[a]-b,a=this.curves[a],c=a.getLength(),a.getPointAt(0===c?0:1-b/c);a++;}return null;},getLength:function getLength(){var a=this.getCurveLengths();return a[a.length-1];},updateArcLengths:function updateArcLengths(){this.needsUpdate=!0;this.cacheLengths=null;this.getCurveLengths();},getCurveLengths:function getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;for(var a=[],b=0,c=0,d=this.curves.length;c<d;c++){b+=this.curves[c].getLength(),a.push(b);}return this.cacheLengths=a;},getSpacedPoints:function getSpacedPoints(a){void 0===a&&(a=40);for(var b=[],c=0;c<=a;c++){b.push(this.getPoint(c/a));}this.autoClose&&b.push(b[0]);return b;},getPoints:function getPoints(a){a=a||12;for(var b=[],c,d=0,e=this.curves;d<e.length;d++){var f=e[d];f=f.getPoints(f&&f.isEllipseCurve?2*a:f&&(f.isLineCurve||f.isLineCurve3)?1:f&&f.isSplineCurve?a*f.points.length:a);for(var g=0;g<f.length;g++){var h=f[g];c&&c.equals(h)||(b.push(h),c=h);}}this.autoClose&&1<b.length&&!b[b.length-1].equals(b[0])&&b.push(b[0]);return b;},copy:function copy(a){D.prototype.copy.call(this,a);this.curves=[];for(var b=0,c=a.curves.length;b<c;b++){this.curves.push(a.curves[b].clone());}this.autoClose=a.autoClose;return this;},toJSON:function toJSON(){var a=D.prototype.toJSON.call(this);a.autoClose=this.autoClose;a.curves=[];for(var b=0,c=this.curves.length;b<c;b++){a.curves.push(this.curves[b].toJSON());}return a;},fromJSON:function fromJSON(a){D.prototype.fromJSON.call(this,a);this.autoClose=a.autoClose;this.curves=[];for(var b=0,c=a.curves.length;b<c;b++){var d=a.curves[b];this.curves.push(new eh[d.type]().fromJSON(d));}return this;}});Wa.prototype=Object.assign(Object.create(rb.prototype),{constructor:Wa,setFromPoints:function setFromPoints(a){this.moveTo(a[0].x,a[0].y);for(var b=1,c=a.length;b<c;b++){this.lineTo(a[b].x,a[b].y);}},moveTo:function moveTo(a,b){this.currentPoint.set(a,b);},lineTo:function lineTo(a,b){var c=new za(this.currentPoint.clone(),new w(a,b));this.curves.push(c);this.currentPoint.set(a,b);},quadraticCurveTo:function quadraticCurveTo(a,b,c,d){a=new Ua(this.currentPoint.clone(),new w(a,b),new w(c,d));this.curves.push(a);this.currentPoint.set(c,d);},bezierCurveTo:function bezierCurveTo(a,b,c,d,e,f){a=new Sa(this.currentPoint.clone(),new w(a,b),new w(c,d),new w(e,f));this.curves.push(a);this.currentPoint.set(e,f);},splineThru:function splineThru(a){var b=[this.currentPoint.clone()].concat(a);b=new Va(b);this.curves.push(b);this.currentPoint.copy(a[a.length-1]);},arc:function arc(a,b,c,d,e,f){this.absarc(a+this.currentPoint.x,b+this.currentPoint.y,c,d,e,f);},absarc:function absarc(a,b,c,d,e,f){this.absellipse(a,b,c,c,d,e,f);},ellipse:function ellipse(a,b,c,d,e,f,g,h){this.absellipse(a+this.currentPoint.x,b+this.currentPoint.y,c,d,e,f,g,h);},absellipse:function absellipse(a,b,c,d,e,f,g,h){a=new Ja(a,b,c,d,e,f,g,h);0<this.curves.length&&(b=a.getPoint(0),b.equals(this.currentPoint)||this.lineTo(b.x,b.y));this.curves.push(a);a=a.getPoint(1);this.currentPoint.copy(a);},copy:function copy(a){rb.prototype.copy.call(this,a);this.currentPoint.copy(a.currentPoint);return this;},toJSON:function toJSON(){var a=rb.prototype.toJSON.call(this);a.currentPoint=this.currentPoint.toArray();return a;},fromJSON:function fromJSON(a){rb.prototype.fromJSON.call(this,a);this.currentPoint.fromArray(a.currentPoint);return this;}});Jb.prototype=Object.assign(Object.create(Wa.prototype),{constructor:Jb,getPointsHoles:function getPointsHoles(a){for(var b=[],c=0,d=this.holes.length;c<d;c++){b[c]=this.holes[c].getPoints(a);}return b;},extractPoints:function extractPoints(a){return{shape:this.getPoints(a),holes:this.getPointsHoles(a)};},copy:function copy(a){Wa.prototype.copy.call(this,a);this.holes=[];for(var b=0,c=a.holes.length;b<c;b++){this.holes.push(a.holes[b].clone());}return this;},toJSON:function toJSON(){var a=Wa.prototype.toJSON.call(this);a.uuid=this.uuid;a.holes=[];for(var b=0,c=this.holes.length;b<c;b++){a.holes.push(this.holes[b].toJSON());}return a;},fromJSON:function fromJSON(a){Wa.prototype.fromJSON.call(this,a);this.uuid=a.uuid;this.holes=[];for(var b=0,c=a.holes.length;b<c;b++){var d=a.holes[b];this.holes.push(new Wa().fromJSON(d));}return this;}});da.prototype=Object.assign(Object.create(B.prototype),{constructor:da,isLight:!0,copy:function copy(a){B.prototype.copy.call(this,a);this.color.copy(a.color);this.intensity=a.intensity;return this;},toJSON:function toJSON(a){a=B.prototype.toJSON.call(this,a);a.object.color=this.color.getHex();a.object.intensity=this.intensity;void 0!==this.groundColor&&(a.object.groundColor=this.groundColor.getHex());void 0!==this.distance&&(a.object.distance=this.distance);void 0!==this.angle&&(a.object.angle=this.angle);void 0!==this.decay&&(a.object.decay=this.decay);void 0!==this.penumbra&&(a.object.penumbra=this.penumbra);void 0!==this.shadow&&(a.object.shadow=this.shadow.toJSON());return a;}});We.prototype=Object.assign(Object.create(da.prototype),{constructor:We,isHemisphereLight:!0,copy:function copy(a){da.prototype.copy.call(this,a);this.groundColor.copy(a.groundColor);return this;}});Object.assign(ib.prototype,{_projScreenMatrix:new U(),_lightPositionWorld:new n(),_lookTarget:new n(),getViewportCount:function getViewportCount(){return this._viewportCount;},getFrustum:function getFrustum(){return this._frustum;},updateMatrices:function updateMatrices(a){var b=this.camera,c=this.matrix,d=this._projScreenMatrix,e=this._lookTarget,f=this._lightPositionWorld;f.setFromMatrixPosition(a.matrixWorld);b.position.copy(f);e.setFromMatrixPosition(a.target.matrixWorld);b.lookAt(e);b.updateMatrixWorld();d.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse);this._frustum.setFromMatrix(d);c.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1);c.multiply(b.projectionMatrix);c.multiply(b.matrixWorldInverse);},getViewport:function getViewport(a){return this._viewports[a];},getFrameExtents:function getFrameExtents(){return this._frameExtents;},copy:function copy(a){this.camera=a.camera.clone();this.bias=a.bias;this.radius=a.radius;this.mapSize.copy(a.mapSize);return this;},clone:function clone(){return new this.constructor().copy(this);},toJSON:function toJSON(){var a={};0!==this.bias&&(a.bias=this.bias);1!==this.radius&&(a.radius=this.radius);if(512!==this.mapSize.x||512!==this.mapSize.y)a.mapSize=this.mapSize.toArray();a.camera=this.camera.toJSON(!1).object;delete a.camera.matrix;return a;}});Xe.prototype=Object.assign(Object.create(ib.prototype),{constructor:Xe,isSpotLightShadow:!0,updateMatrices:function updateMatrices(a,b,c){var d=this.camera,e=2*L.RAD2DEG*a.angle,f=this.mapSize.width/this.mapSize.height,g=a.distance||d.far;if(e!==d.fov||f!==d.aspect||g!==d.far)d.fov=e,d.aspect=f,d.far=g,d.updateProjectionMatrix();ib.prototype.updateMatrices.call(this,a,b,c);}});Ye.prototype=Object.assign(Object.create(da.prototype),{constructor:Ye,isSpotLight:!0,copy:function copy(a){da.prototype.copy.call(this,a);this.distance=a.distance;this.angle=a.angle;this.penumbra=a.penumbra;this.decay=a.decay;this.target=a.target.clone();this.shadow=a.shadow.clone();return this;}});tg.prototype=Object.assign(Object.create(ib.prototype),{constructor:tg,isPointLightShadow:!0,updateMatrices:function updateMatrices(a,b,c){b=this.camera;var d=this.matrix,e=this._lightPositionWorld,f=this._lookTarget,g=this._projScreenMatrix;e.setFromMatrixPosition(a.matrixWorld);b.position.copy(e);f.copy(b.position);f.add(this._cubeDirections[c]);b.up.copy(this._cubeUps[c]);b.lookAt(f);b.updateMatrixWorld();d.makeTranslation(-e.x,-e.y,-e.z);g.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse);this._frustum.setFromMatrix(g);}});Ze.prototype=Object.assign(Object.create(da.prototype),{constructor:Ze,isPointLight:!0,copy:function copy(a){da.prototype.copy.call(this,a);this.distance=a.distance;this.decay=a.decay;this.shadow=a.shadow.clone();return this;}});oe.prototype=Object.assign(Object.create(bb.prototype),{constructor:oe,isOrthographicCamera:!0,copy:function copy(a,b){bb.prototype.copy.call(this,a,b);this.left=a.left;this.right=a.right;this.top=a.top;this.bottom=a.bottom;this.near=a.near;this.far=a.far;this.zoom=a.zoom;this.view=null===a.view?null:Object.assign({},a.view);return this;},setViewOffset:function setViewOffset(a,b,c,d,e,f){null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1});this.view.enabled=!0;this.view.fullWidth=a;this.view.fullHeight=b;this.view.offsetX=c;this.view.offsetY=d;this.view.width=e;this.view.height=f;this.updateProjectionMatrix();},clearViewOffset:function clearViewOffset(){null!==this.view&&(this.view.enabled=!1);this.updateProjectionMatrix();},updateProjectionMatrix:function updateProjectionMatrix(){var a=(this.right-this.left)/(2*this.zoom),b=(this.top-this.bottom)/(2*this.zoom),c=(this.right+this.left)/2,d=(this.top+this.bottom)/2,e=c-a;c+=a;a=d+b;b=d-b;if(null!==this.view&&this.view.enabled){c=this.zoom/(this.view.width/this.view.fullWidth);b=this.zoom/(this.view.height/this.view.fullHeight);var f=(this.right-this.left)/this.view.width;d=(this.top-this.bottom)/this.view.height;e+=this.view.offsetX/c*f;c=e+this.view.width/c*f;a-=this.view.offsetY/b*d;b=a-this.view.height/b*d;}this.projectionMatrix.makeOrthographic(e,c,a,b,this.near,this.far);this.projectionMatrixInverse.getInverse(this.projectionMatrix);},toJSON:function toJSON(a){a=B.prototype.toJSON.call(this,a);a.object.zoom=this.zoom;a.object.left=this.left;a.object.right=this.right;a.object.top=this.top;a.object.bottom=this.bottom;a.object.near=this.near;a.object.far=this.far;null!==this.view&&(a.object.view=Object.assign({},this.view));return a;}});$e.prototype=Object.assign(Object.create(ib.prototype),{constructor:$e,isDirectionalLightShadow:!0,updateMatrices:function updateMatrices(a,b,c){ib.prototype.updateMatrices.call(this,a,b,c);}});af.prototype=Object.assign(Object.create(da.prototype),{constructor:af,isDirectionalLight:!0,copy:function copy(a){da.prototype.copy.call(this,a);this.target=a.target.clone();this.shadow=a.shadow.clone();return this;}});bf.prototype=Object.assign(Object.create(da.prototype),{constructor:bf,isAmbientLight:!0});cf.prototype=Object.assign(Object.create(da.prototype),{constructor:cf,isRectAreaLight:!0,copy:function copy(a){da.prototype.copy.call(this,a);this.width=a.width;this.height=a.height;return this;},toJSON:function toJSON(a){a=da.prototype.toJSON.call(this,a);a.object.width=this.width;a.object.height=this.height;return a;}});df.prototype=Object.assign(Object.create(S.prototype),{constructor:df,load:function load(a,b,c,d){var e=this,f=new Na(e.manager);f.setPath(e.path);f.load(a,function(a){b(e.parse(JSON.parse(a)));},c,d);},parse:function parse(a){function b(a){void 0===c[a]&&console.warn("THREE.MaterialLoader: Undefined texture",a);return c[a];}var c=this.textures,d=new Fk[a.type]();void 0!==a.uuid&&(d.uuid=a.uuid);void 0!==a.name&&(d.name=a.name);void 0!==a.color&&d.color.setHex(a.color);void 0!==a.roughness&&(d.roughness=a.roughness);void 0!==a.metalness&&(d.metalness=a.metalness);void 0!==a.sheen&&(d.sheen=new H().setHex(a.sheen));void 0!==a.emissive&&d.emissive.setHex(a.emissive);void 0!==a.specular&&d.specular.setHex(a.specular);void 0!==a.shininess&&(d.shininess=a.shininess);void 0!==a.clearcoat&&(d.clearcoat=a.clearcoat);void 0!==a.clearcoatRoughness&&(d.clearcoatRoughness=a.clearcoatRoughness);void 0!==a.vertexColors&&(d.vertexColors=a.vertexColors);void 0!==a.fog&&(d.fog=a.fog);void 0!==a.flatShading&&(d.flatShading=a.flatShading);void 0!==a.blending&&(d.blending=a.blending);void 0!==a.combine&&(d.combine=a.combine);void 0!==a.side&&(d.side=a.side);void 0!==a.opacity&&(d.opacity=a.opacity);void 0!==a.transparent&&(d.transparent=a.transparent);void 0!==a.alphaTest&&(d.alphaTest=a.alphaTest);void 0!==a.depthTest&&(d.depthTest=a.depthTest);void 0!==a.depthWrite&&(d.depthWrite=a.depthWrite);void 0!==a.colorWrite&&(d.colorWrite=a.colorWrite);void 0!==a.stencilWrite&&(d.stencilWrite=a.stencilWrite);void 0!==a.stencilWriteMask&&(d.stencilWriteMask=a.stencilWriteMask);void 0!==a.stencilFunc&&(d.stencilFunc=a.stencilFunc);void 0!==a.stencilRef&&(d.stencilRef=a.stencilRef);void 0!==a.stencilFuncMask&&(d.stencilFuncMask=a.stencilFuncMask);void 0!==a.stencilFail&&(d.stencilFail=a.stencilFail);void 0!==a.stencilZFail&&(d.stencilZFail=a.stencilZFail);void 0!==a.stencilZPass&&(d.stencilZPass=a.stencilZPass);void 0!==a.wireframe&&(d.wireframe=a.wireframe);void 0!==a.wireframeLinewidth&&(d.wireframeLinewidth=a.wireframeLinewidth);void 0!==a.wireframeLinecap&&(d.wireframeLinecap=a.wireframeLinecap);void 0!==a.wireframeLinejoin&&(d.wireframeLinejoin=a.wireframeLinejoin);void 0!==a.rotation&&(d.rotation=a.rotation);1!==a.linewidth&&(d.linewidth=a.linewidth);void 0!==a.dashSize&&(d.dashSize=a.dashSize);void 0!==a.gapSize&&(d.gapSize=a.gapSize);void 0!==a.scale&&(d.scale=a.scale);void 0!==a.polygonOffset&&(d.polygonOffset=a.polygonOffset);void 0!==a.polygonOffsetFactor&&(d.polygonOffsetFactor=a.polygonOffsetFactor);void 0!==a.polygonOffsetUnits&&(d.polygonOffsetUnits=a.polygonOffsetUnits);void 0!==a.skinning&&(d.skinning=a.skinning);void 0!==a.morphTargets&&(d.morphTargets=a.morphTargets);void 0!==a.morphNormals&&(d.morphNormals=a.morphNormals);void 0!==a.dithering&&(d.dithering=a.dithering);void 0!==a.visible&&(d.visible=a.visible);void 0!==a.toneMapped&&(d.toneMapped=a.toneMapped);void 0!==a.userData&&(d.userData=a.userData);if(void 0!==a.uniforms)for(var e in a.uniforms){var f=a.uniforms[e];d.uniforms[e]={};switch(f.type){case"t":d.uniforms[e].value=b(f.value);break;case"c":d.uniforms[e].value=new H().setHex(f.value);break;case"v2":d.uniforms[e].value=new w().fromArray(f.value);break;case"v3":d.uniforms[e].value=new n().fromArray(f.value);break;case"v4":d.uniforms[e].value=new aa().fromArray(f.value);break;case"m3":d.uniforms[e].value=new Y().fromArray(f.value);case"m4":d.uniforms[e].value=new U().fromArray(f.value);break;default:d.uniforms[e].value=f.value;}}void 0!==a.defines&&(d.defines=a.defines);void 0!==a.vertexShader&&(d.vertexShader=a.vertexShader);void 0!==a.fragmentShader&&(d.fragmentShader=a.fragmentShader);if(void 0!==a.extensions)for(var g in a.extensions){d.extensions[g]=a.extensions[g];}void 0!==a.shading&&(d.flatShading=1===a.shading);void 0!==a.size&&(d.size=a.size);void 0!==a.sizeAttenuation&&(d.sizeAttenuation=a.sizeAttenuation);void 0!==a.map&&(d.map=b(a.map));void 0!==a.matcap&&(d.matcap=b(a.matcap));void 0!==a.alphaMap&&(d.alphaMap=b(a.alphaMap),d.transparent=!0);void 0!==a.bumpMap&&(d.bumpMap=b(a.bumpMap));void 0!==a.bumpScale&&(d.bumpScale=a.bumpScale);void 0!==a.normalMap&&(d.normalMap=b(a.normalMap));void 0!==a.normalMapType&&(d.normalMapType=a.normalMapType);void 0!==a.normalScale&&(e=a.normalScale,!1===Array.isArray(e)&&(e=[e,e]),d.normalScale=new w().fromArray(e));void 0!==a.displacementMap&&(d.displacementMap=b(a.displacementMap));void 0!==a.displacementScale&&(d.displacementScale=a.displacementScale);void 0!==a.displacementBias&&(d.displacementBias=a.displacementBias);void 0!==a.roughnessMap&&(d.roughnessMap=b(a.roughnessMap));void 0!==a.metalnessMap&&(d.metalnessMap=b(a.metalnessMap));void 0!==a.emissiveMap&&(d.emissiveMap=b(a.emissiveMap));void 0!==a.emissiveIntensity&&(d.emissiveIntensity=a.emissiveIntensity);void 0!==a.specularMap&&(d.specularMap=b(a.specularMap));void 0!==a.envMap&&(d.envMap=b(a.envMap));void 0!==a.envMapIntensity&&(d.envMapIntensity=a.envMapIntensity);void 0!==a.reflectivity&&(d.reflectivity=a.reflectivity);void 0!==a.refractionRatio&&(d.refractionRatio=a.refractionRatio);void 0!==a.lightMap&&(d.lightMap=b(a.lightMap));void 0!==a.lightMapIntensity&&(d.lightMapIntensity=a.lightMapIntensity);void 0!==a.aoMap&&(d.aoMap=b(a.aoMap));void 0!==a.aoMapIntensity&&(d.aoMapIntensity=a.aoMapIntensity);void 0!==a.gradientMap&&(d.gradientMap=b(a.gradientMap));void 0!==a.clearcoatNormalMap&&(d.clearcoatNormalMap=b(a.clearcoatNormalMap));void 0!==a.clearcoatNormalScale&&(d.clearcoatNormalScale=new w().fromArray(a.clearcoatNormalScale));return d;},setTextures:function setTextures(a){this.textures=a;return this;}});var fh={decodeText:function decodeText(a){if("undefined"!==typeof TextDecoder)return new TextDecoder().decode(a);for(var b="",c=0,d=a.length;c<d;c++){b+=String.fromCharCode(a[c]);}try{return decodeURIComponent(escape(b));}catch(e){return b;}},extractUrlBase:function extractUrlBase(a){var b=a.lastIndexOf("/");return-1===b?"./":a.substr(0,b+1);}};ef.prototype=Object.assign(Object.create(E.prototype),{constructor:ef,isInstancedBufferGeometry:!0,copy:function copy(a){E.prototype.copy.call(this,a);this.maxInstancedCount=a.maxInstancedCount;return this;},clone:function clone(){return new this.constructor().copy(this);},toJSON:function toJSON(){var a=E.prototype.toJSON.call(this);a.maxInstancedCount=this.maxInstancedCount;a.isInstancedBufferGeometry=!0;return a;}});ff.prototype=Object.assign(Object.create(O.prototype),{constructor:ff,isInstancedBufferAttribute:!0,copy:function copy(a){O.prototype.copy.call(this,a);this.meshPerAttribute=a.meshPerAttribute;return this;},toJSON:function toJSON(){var a=O.prototype.toJSON.call(this);a.meshPerAttribute=this.meshPerAttribute;a.isInstancedBufferAttribute=!0;return a;}});gf.prototype=Object.assign(Object.create(S.prototype),{constructor:gf,load:function load(a,b,c,d){var e=this,f=new Na(e.manager);f.setPath(e.path);f.load(a,function(a){b(e.parse(JSON.parse(a)));},c,d);},parse:function parse(a){var b=a.isInstancedBufferGeometry?new ef():new E(),c=a.data.index;if(void 0!==c){var d=new gh[c.type](c.array);b.setIndex(new O(d,1));}c=a.data.attributes;for(var e in c){var f=c[e];d=new gh[f.type](f.array);d=new(f.isInstancedBufferAttribute?ff:O)(d,f.itemSize,f.normalized);void 0!==f.name&&(d.name=f.name);b.addAttribute(e,d);}var g=a.data.morphAttributes;if(g)for(e in g){var h=g[e],l=[];c=0;for(var k=h.length;c<k;c++){f=h[c],d=new gh[f.type](f.array),d=new O(d,f.itemSize,f.normalized),void 0!==f.name&&(d.name=f.name),l.push(d);}b.morphAttributes[e]=l;}e=a.data.groups||a.data.drawcalls||a.data.offsets;if(void 0!==e)for(c=0,f=e.length;c!==f;++c){d=e[c],b.addGroup(d.start,d.count,d.materialIndex);}c=a.data.boundingSphere;void 0!==c&&(e=new n(),void 0!==c.center&&e.fromArray(c.center),b.boundingSphere=new nb(e,c.radius));a.name&&(b.name=a.name);a.userData&&(b.userData=a.userData);return b;}});var gh={Int8Array:Int8Array,Uint8Array:Uint8Array,Uint8ClampedArray:"undefined"!==typeof Uint8ClampedArray?Uint8ClampedArray:Uint8Array,Int16Array:Int16Array,Uint16Array:Uint16Array,Int32Array:Int32Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array};hf.prototype=Object.assign(Object.create(S.prototype),{constructor:hf,load:function load(a,b,c,d){var e=this,f=""===this.path?fh.extractUrlBase(a):this.path;this.resourcePath=this.resourcePath||f;f=new Na(e.manager);f.setPath(this.path);f.load(a,function(c){var f=null;try{f=JSON.parse(c);}catch(l){void 0!==d&&d(l);console.error("THREE:ObjectLoader: Can't parse "+a+".",l.message);return;}c=f.metadata;void 0===c||void 0===c.type||"geometry"===c.type.toLowerCase()?console.error("THREE.ObjectLoader: Can't load "+a):e.parse(f,b);},c,d);},parse:function parse(a,b){var c=this.parseShape(a.shapes);c=this.parseGeometries(a.geometries,c);var d=this.parseImages(a.images,function(){void 0!==b&&b(e);});d=this.parseTextures(a.textures,d);d=this.parseMaterials(a.materials,d);var e=this.parseObject(a.object,c,d);a.animations&&(e.animations=this.parseAnimations(a.animations));void 0!==a.images&&0!==a.images.length||void 0===b||b(e);return e;},parseShape:function parseShape(a){var b={};if(void 0!==a)for(var c=0,d=a.length;c<d;c++){var e=new Jb().fromJSON(a[c]);b[e.uuid]=e;}return b;},parseGeometries:function parseGeometries(a,b){var c={};if(void 0!==a)for(var d=new gf(),e=0,f=a.length;e<f;e++){var g=a[e];switch(g.type){case"PlaneGeometry":case"PlaneBufferGeometry":var h=new ta[g.type](g.width,g.height,g.widthSegments,g.heightSegments);break;case"BoxGeometry":case"BoxBufferGeometry":case"CubeGeometry":h=new ta[g.type](g.width,g.height,g.depth,g.widthSegments,g.heightSegments,g.depthSegments);break;case"CircleGeometry":case"CircleBufferGeometry":h=new ta[g.type](g.radius,g.segments,g.thetaStart,g.thetaLength);break;case"CylinderGeometry":case"CylinderBufferGeometry":h=new ta[g.type](g.radiusTop,g.radiusBottom,g.height,g.radialSegments,g.heightSegments,g.openEnded,g.thetaStart,g.thetaLength);break;case"ConeGeometry":case"ConeBufferGeometry":h=new ta[g.type](g.radius,g.height,g.radialSegments,g.heightSegments,g.openEnded,g.thetaStart,g.thetaLength);break;case"SphereGeometry":case"SphereBufferGeometry":h=new ta[g.type](g.radius,g.widthSegments,g.heightSegments,g.phiStart,g.phiLength,g.thetaStart,g.thetaLength);break;case"DodecahedronGeometry":case"DodecahedronBufferGeometry":case"IcosahedronGeometry":case"IcosahedronBufferGeometry":case"OctahedronGeometry":case"OctahedronBufferGeometry":case"TetrahedronGeometry":case"TetrahedronBufferGeometry":h=new ta[g.type](g.radius,g.detail);break;case"RingGeometry":case"RingBufferGeometry":h=new ta[g.type](g.innerRadius,g.outerRadius,g.thetaSegments,g.phiSegments,g.thetaStart,g.thetaLength);break;case"TorusGeometry":case"TorusBufferGeometry":h=new ta[g.type](g.radius,g.tube,g.radialSegments,g.tubularSegments,g.arc);break;case"TorusKnotGeometry":case"TorusKnotBufferGeometry":h=new ta[g.type](g.radius,g.tube,g.tubularSegments,g.radialSegments,g.p,g.q);break;case"TubeGeometry":case"TubeBufferGeometry":h=new ta[g.type](new eh[g.path.type]().fromJSON(g.path),g.tubularSegments,g.radius,g.radialSegments,g.closed);break;case"LatheGeometry":case"LatheBufferGeometry":h=new ta[g.type](g.points,g.segments,g.phiStart,g.phiLength);break;case"PolyhedronGeometry":case"PolyhedronBufferGeometry":h=new ta[g.type](g.vertices,g.indices,g.radius,g.details);break;case"ShapeGeometry":case"ShapeBufferGeometry":h=[];for(var l=0,k=g.shapes.length;l<k;l++){var n=b[g.shapes[l]];h.push(n);}h=new ta[g.type](h,g.curveSegments);break;case"ExtrudeGeometry":case"ExtrudeBufferGeometry":h=[];l=0;for(k=g.shapes.length;l<k;l++){n=b[g.shapes[l]],h.push(n);}l=g.options.extrudePath;void 0!==l&&(g.options.extrudePath=new eh[l.type]().fromJSON(l));h=new ta[g.type](h,g.options);break;case"BufferGeometry":case"InstancedBufferGeometry":h=d.parse(g);break;case"Geometry":"THREE"in window&&"LegacyJSONLoader"in THREE?h=new THREE.LegacyJSONLoader().parse(g,this.resourcePath).geometry:console.error('THREE.ObjectLoader: You have to import LegacyJSONLoader in order load geometry data of type "Geometry".');break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+g.type+'"');continue;}h.uuid=g.uuid;void 0!==g.name&&(h.name=g.name);!0===h.isBufferGeometry&&void 0!==g.userData&&(h.userData=g.userData);c[g.uuid]=h;}return c;},parseMaterials:function parseMaterials(a,b){var c={},d={};if(void 0!==a){var e=new df();e.setTextures(b);b=0;for(var f=a.length;b<f;b++){var g=a[b];if("MultiMaterial"===g.type){for(var h=[],l=0;l<g.materials.length;l++){var k=g.materials[l];void 0===c[k.uuid]&&(c[k.uuid]=e.parse(k));h.push(c[k.uuid]);}d[g.uuid]=h;}else void 0===c[g.uuid]&&(c[g.uuid]=e.parse(g)),d[g.uuid]=c[g.uuid];}}return d;},parseAnimations:function parseAnimations(a){for(var b=[],c=0;c<a.length;c++){var d=a[c],e=Ma.parse(d);void 0!==d.uuid&&(e.uuid=d.uuid);b.push(e);}return b;},parseImages:function parseImages(a,b){function c(a){d.manager.itemStart(a);return f.load(a,function(){d.manager.itemEnd(a);},void 0,function(){d.manager.itemError(a);d.manager.itemEnd(a);});}var d=this,e={};if(void 0!==a&&0<a.length){b=new pg(b);var f=new bd(b);f.setCrossOrigin(this.crossOrigin);b=0;for(var g=a.length;b<g;b++){var h=a[b],l=h.url;if(Array.isArray(l)){e[h.uuid]=[];for(var k=0,n=l.length;k<n;k++){var u=l[k];u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(u)?u:d.resourcePath+u;e[h.uuid].push(c(u));}}else u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(h.url)?h.url:d.resourcePath+h.url,e[h.uuid]=c(u);}}return e;},parseTextures:function parseTextures(a,b){function c(a,b){if("number"===typeof a)return a;console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",a);return b[a];}var d={};if(void 0!==a)for(var e=0,f=a.length;e<f;e++){var g=a[e];void 0===g.image&&console.warn('THREE.ObjectLoader: No "image" specified for',g.uuid);void 0===b[g.image]&&console.warn("THREE.ObjectLoader: Undefined image",g.image);var h=Array.isArray(b[g.image])?new ob(b[g.image]):new W(b[g.image]);h.needsUpdate=!0;h.uuid=g.uuid;void 0!==g.name&&(h.name=g.name);void 0!==g.mapping&&(h.mapping=c(g.mapping,Gk));void 0!==g.offset&&h.offset.fromArray(g.offset);void 0!==g.repeat&&h.repeat.fromArray(g.repeat);void 0!==g.center&&h.center.fromArray(g.center);void 0!==g.rotation&&(h.rotation=g.rotation);void 0!==g.wrap&&(h.wrapS=c(g.wrap[0],Ci),h.wrapT=c(g.wrap[1],Ci));void 0!==g.format&&(h.format=g.format);void 0!==g.type&&(h.type=g.type);void 0!==g.encoding&&(h.encoding=g.encoding);void 0!==g.minFilter&&(h.minFilter=c(g.minFilter,Di));void 0!==g.magFilter&&(h.magFilter=c(g.magFilter,Di));void 0!==g.anisotropy&&(h.anisotropy=g.anisotropy);void 0!==g.flipY&&(h.flipY=g.flipY);void 0!==g.premultiplyAlpha&&(h.premultiplyAlpha=g.premultiplyAlpha);void 0!==g.unpackAlignment&&(h.unpackAlignment=g.unpackAlignment);d[g.uuid]=h;}return d;},parseObject:function parseObject(a,b,c){function d(a){void 0===b[a]&&console.warn("THREE.ObjectLoader: Undefined geometry",a);return b[a];}function e(a){if(void 0!==a){if(Array.isArray(a)){for(var b=[],d=0,e=a.length;d<e;d++){var f=a[d];void 0===c[f]&&console.warn("THREE.ObjectLoader: Undefined material",f);b.push(c[f]);}return b;}void 0===c[a]&&console.warn("THREE.ObjectLoader: Undefined material",a);return c[a];}}switch(a.type){case"Scene":var f=new wd();void 0!==a.background&&Number.isInteger(a.background)&&(f.background=new H(a.background));void 0!==a.fog&&("Fog"===a.fog.type?f.fog=new Je(a.fog.color,a.fog.near,a.fog.far):"FogExp2"===a.fog.type&&(f.fog=new Ie(a.fog.color,a.fog.density)));break;case"PerspectiveCamera":f=new na(a.fov,a.aspect,a.near,a.far);void 0!==a.focus&&(f.focus=a.focus);void 0!==a.zoom&&(f.zoom=a.zoom);void 0!==a.filmGauge&&(f.filmGauge=a.filmGauge);void 0!==a.filmOffset&&(f.filmOffset=a.filmOffset);void 0!==a.view&&(f.view=Object.assign({},a.view));break;case"OrthographicCamera":f=new oe(a.left,a.right,a.top,a.bottom,a.near,a.far);void 0!==a.zoom&&(f.zoom=a.zoom);void 0!==a.view&&(f.view=Object.assign({},a.view));break;case"AmbientLight":f=new bf(a.color,a.intensity);break;case"DirectionalLight":f=new af(a.color,a.intensity);break;case"PointLight":f=new Ze(a.color,a.intensity,a.distance,a.decay);break;case"RectAreaLight":f=new cf(a.color,a.intensity,a.width,a.height);break;case"SpotLight":f=new Ye(a.color,a.intensity,a.distance,a.angle,a.penumbra,a.decay);break;case"HemisphereLight":f=new We(a.color,a.groundColor,a.intensity);break;case"SkinnedMesh":console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");case"Mesh":f=d(a.geometry);var g=e(a.material);f=f.bones&&0<f.bones.length?new Od(f,g):new ja(f,g);void 0!==a.drawMode&&f.setDrawMode(a.drawMode);break;case"LOD":f=new Nd();break;case"Line":f=new xa(d(a.geometry),e(a.material),a.mode);break;case"LineLoop":f=new Me(d(a.geometry),e(a.material));break;case"LineSegments":f=new ca(d(a.geometry),e(a.material));break;case"PointCloud":case"Points":f=new Kc(d(a.geometry),e(a.material));break;case"Sprite":f=new Ld(e(a.material));break;case"Group":f=new Hc();break;default:f=new B();}f.uuid=a.uuid;void 0!==a.name&&(f.name=a.name);void 0!==a.matrix?(f.matrix.fromArray(a.matrix),void 0!==a.matrixAutoUpdate&&(f.matrixAutoUpdate=a.matrixAutoUpdate),f.matrixAutoUpdate&&f.matrix.decompose(f.position,f.quaternion,f.scale)):(void 0!==a.position&&f.position.fromArray(a.position),void 0!==a.rotation&&f.rotation.fromArray(a.rotation),void 0!==a.quaternion&&f.quaternion.fromArray(a.quaternion),void 0!==a.scale&&f.scale.fromArray(a.scale));void 0!==a.castShadow&&(f.castShadow=a.castShadow);void 0!==a.receiveShadow&&(f.receiveShadow=a.receiveShadow);a.shadow&&(void 0!==a.shadow.bias&&(f.shadow.bias=a.shadow.bias),void 0!==a.shadow.radius&&(f.shadow.radius=a.shadow.radius),void 0!==a.shadow.mapSize&&f.shadow.mapSize.fromArray(a.shadow.mapSize),void 0!==a.shadow.camera&&(f.shadow.camera=this.parseObject(a.shadow.camera)));void 0!==a.visible&&(f.visible=a.visible);void 0!==a.frustumCulled&&(f.frustumCulled=a.frustumCulled);void 0!==a.renderOrder&&(f.renderOrder=a.renderOrder);void 0!==a.userData&&(f.userData=a.userData);void 0!==a.layers&&(f.layers.mask=a.layers);if(void 0!==a.children){g=a.children;for(var h=0;h<g.length;h++){f.add(this.parseObject(g[h],b,c));}}if("LOD"===a.type)for(a=a.levels,g=0;g<a.length;g++){h=a[g];var l=f.getObjectByProperty("uuid",h.object);void 0!==l&&f.addLevel(l,h.distance);}return f;}});var Gk={UVMapping:300,CubeReflectionMapping:301,CubeRefractionMapping:302,EquirectangularReflectionMapping:303,EquirectangularRefractionMapping:304,SphericalReflectionMapping:305,CubeUVReflectionMapping:306,CubeUVRefractionMapping:307},Ci={RepeatWrapping:1E3,ClampToEdgeWrapping:1001,MirroredRepeatWrapping:1002},Di={NearestFilter:1003,NearestMipmapNearestFilter:1004,NearestMipmapLinearFilter:1005,LinearFilter:1006,LinearMipmapNearestFilter:1007,LinearMipmapLinearFilter:1008};ug.prototype=Object.assign(Object.create(S.prototype),{constructor:ug,setOptions:function setOptions(a){this.options=a;return this;},load:function load(a,b,c,d){void 0===a&&(a="");void 0!==this.path&&(a=this.path+a);a=this.manager.resolveURL(a);var e=this,f=uc.get(a);if(void 0!==f)return e.manager.itemStart(a),setTimeout(function(){b&&b(f);e.manager.itemEnd(a);},0),f;fetch(a).then(function(a){return a.blob();}).then(function(a){return void 0===e.options?createImageBitmap(a):createImageBitmap(a,e.options);}).then(function(c){uc.add(a,c);b&&b(c);e.manager.itemEnd(a);})["catch"](function(b){d&&d(b);e.manager.itemError(a);e.manager.itemEnd(a);});e.manager.itemStart(a);}});Object.assign(vg.prototype,{moveTo:function moveTo(a,b){this.currentPath=new Wa();this.subPaths.push(this.currentPath);this.currentPath.moveTo(a,b);},lineTo:function lineTo(a,b){this.currentPath.lineTo(a,b);},quadraticCurveTo:function quadraticCurveTo(a,b,c,d){this.currentPath.quadraticCurveTo(a,b,c,d);},bezierCurveTo:function bezierCurveTo(a,b,c,d,e,f){this.currentPath.bezierCurveTo(a,b,c,d,e,f);},splineThru:function splineThru(a){this.currentPath.splineThru(a);},toShapes:function toShapes(a,b){function c(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c],f=new Jb();f.curves=e.curves;b.push(f);}return b;}function d(a,b){for(var c=b.length,d=!1,e=c-1,f=0;f<c;e=f++){var g=b[e],h=b[f],l=h.x-g.x,k=h.y-g.y;if(Math.abs(k)>Number.EPSILON){if(0>k&&(g=b[f],l=-l,h=b[e],k=-k),!(a.y<g.y||a.y>h.y))if(a.y===g.y){if(a.x===g.x)return!0;}else{e=k*(a.x-g.x)-l*(a.y-g.y);if(0===e)return!0;0>e||(d=!d);}}else if(a.y===g.y&&(h.x<=a.x&&a.x<=g.x||g.x<=a.x&&a.x<=h.x))return!0;}return d;}var e=pb.isClockWise,f=this.subPaths;if(0===f.length)return[];if(!0===b)return c(f);b=[];if(1===f.length){var g=f[0];var h=new Jb();h.curves=g.curves;b.push(h);return b;}var l=!e(f[0].getPoints());l=a?!l:l;h=[];var k=[],n=[],u=0;k[u]=void 0;n[u]=[];for(var t=0,r=f.length;t<r;t++){g=f[t];var p=g.getPoints();var v=e(p);(v=a?!v:v)?(!l&&k[u]&&u++,k[u]={s:new Jb(),p:p},k[u].s.curves=g.curves,l&&u++,n[u]=[]):n[u].push({h:g,p:p[0]});}if(!k[0])return c(f);if(1<k.length){t=!1;a=[];e=0;for(f=k.length;e<f;e++){h[e]=[];}e=0;for(f=k.length;e<f;e++){for(g=n[e],v=0;v<g.length;v++){l=g[v];u=!0;for(p=0;p<k.length;p++){d(l.p,k[p].p)&&(e!==p&&a.push({froms:e,tos:p,hole:v}),u?(u=!1,h[p].push(l)):t=!0);}u&&h[e].push(l);}}0<a.length&&(t||(n=h));}t=0;for(e=k.length;t<e;t++){for(h=k[t].s,b.push(h),a=n[t],f=0,g=a.length;f<g;f++){h.holes.push(a[f].h);}}return b;}});Object.assign(wg.prototype,{isFont:!0,generateShapes:function generateShapes(a,b){void 0===b&&(b=100);var c=[],d=b;b=this.data;var e=Array.from?Array.from(a):String(a).split("");d/=b.resolution;var f=(b.boundingBox.yMax-b.boundingBox.yMin+b.underlineThickness)*d;a=[];for(var g=0,h=0,l=0;l<e.length;l++){var k=e[l];if("\n"===k)g=0,h-=f;else{var n=k;k=d;var u=g,t=h,r=b,p=r.glyphs[n]||r.glyphs["?"];if(p){n=new vg();if(p.o){r=p._cachedOutline||(p._cachedOutline=p.o.split(" "));for(var v=0,x=r.length;v<x;){switch(r[v++]){case"m":var w=r[v++]*k+u;var y=r[v++]*k+t;n.moveTo(w,y);break;case"l":w=r[v++]*k+u;y=r[v++]*k+t;n.lineTo(w,y);break;case"q":var A=r[v++]*k+u;var B=r[v++]*k+t;var C=r[v++]*k+u;var D=r[v++]*k+t;n.quadraticCurveTo(C,D,A,B);break;case"b":A=r[v++]*k+u,B=r[v++]*k+t,C=r[v++]*k+u,D=r[v++]*k+t,w=r[v++]*k+u,y=r[v++]*k+t,n.bezierCurveTo(C,D,w,y,A,B);}}}k={offsetX:p.ha*k,path:n};}else console.error('THREE.Font: character "'+n+'" does not exists in font family '+r.familyName+"."),k=void 0;g+=k.offsetX;a.push(k.path);}}b=0;for(e=a.length;b<e;b++){Array.prototype.push.apply(c,a[b].toShapes());}return c;}});xg.prototype=Object.assign(Object.create(S.prototype),{constructor:xg,load:function load(a,b,c,d){var e=this,f=new Na(this.manager);f.setPath(this.path);f.load(a,function(a){try{var c=JSON.parse(a);}catch(l){console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),c=JSON.parse(a.substring(65,a.length-2));}a=e.parse(c);b&&b(a);},c,d);},parse:function parse(a){return new wg(a);}});var If,Cg={getContext:function getContext(){void 0===If&&(If=new(window.AudioContext||window.webkitAudioContext)());return If;},setContext:function setContext(a){If=a;}};jf.prototype=Object.assign(Object.create(S.prototype),{constructor:jf,load:function load(a,b,c,d){var e=new Na(this.manager);e.setResponseType("arraybuffer");e.setPath(this.path);e.load(a,function(a){a=a.slice(0);Cg.getContext().decodeAudioData(a,function(a){b(a);});},c,d);}});Object.assign(kf.prototype,{isSphericalHarmonics3:!0,set:function set(a){for(var b=0;9>b;b++){this.coefficients[b].copy(a[b]);}return this;},zero:function zero(){for(var a=0;9>a;a++){this.coefficients[a].set(0,0,0);}return this;},getAt:function getAt(a,b){var c=a.x,d=a.y;a=a.z;var e=this.coefficients;b.copy(e[0]).multiplyScalar(.282095);b.addScale(e[1],.488603*d);b.addScale(e[2],.488603*a);b.addScale(e[3],.488603*c);b.addScale(e[4],1.092548*c*d);b.addScale(e[5],1.092548*d*a);b.addScale(e[6],.315392*(3*a*a-1));b.addScale(e[7],1.092548*c*a);b.addScale(e[8],.546274*(c*c-d*d));return b;},getIrradianceAt:function getIrradianceAt(a,b){var c=a.x,d=a.y;a=a.z;var e=this.coefficients;b.copy(e[0]).multiplyScalar(.886227);b.addScale(e[1],1.023328*d);b.addScale(e[2],1.023328*a);b.addScale(e[3],1.023328*c);b.addScale(e[4],.858086*c*d);b.addScale(e[5],.858086*d*a);b.addScale(e[6],.743125*a*a-.247708);b.addScale(e[7],.858086*c*a);b.addScale(e[8],.429043*(c*c-d*d));return b;},add:function add(a){for(var b=0;9>b;b++){this.coefficients[b].add(a.coefficients[b]);}return this;},scale:function scale(a){for(var b=0;9>b;b++){this.coefficients[b].multiplyScalar(a);}return this;},lerp:function lerp(a,b){for(var c=0;9>c;c++){this.coefficients[c].lerp(a.coefficients[c],b);}return this;},equals:function equals(a){for(var b=0;9>b;b++){if(!this.coefficients[b].equals(a.coefficients[b]))return!1;}return!0;},copy:function copy(a){return this.set(a.coefficients);},clone:function clone(){return new this.constructor().copy(this);},fromArray:function fromArray(a,b){void 0===b&&(b=0);for(var c=this.coefficients,d=0;9>d;d++){c[d].fromArray(a,b+3*d);}return this;},toArray:function toArray(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);for(var c=this.coefficients,d=0;9>d;d++){c[d].toArray(a,b+3*d);}return a;}});Object.assign(kf,{getBasisAt:function getBasisAt(a,b){var c=a.x,d=a.y;a=a.z;b[0]=.282095;b[1]=.488603*d;b[2]=.488603*a;b[3]=.488603*c;b[4]=1.092548*c*d;b[5]=1.092548*d*a;b[6]=.315392*(3*a*a-1);b[7]=1.092548*c*a;b[8]=.546274*(c*c-d*d);}});Xa.prototype=Object.assign(Object.create(da.prototype),{constructor:Xa,isLightProbe:!0,copy:function copy(a){da.prototype.copy.call(this,a);this.sh.copy(a.sh);this.intensity=a.intensity;return this;},toJSON:function toJSON(a){return da.prototype.toJSON.call(this,a);}});yg.prototype=Object.assign(Object.create(Xa.prototype),{constructor:yg,isHemisphereLightProbe:!0,copy:function copy(a){Xa.prototype.copy.call(this,a);return this;},toJSON:function toJSON(a){return Xa.prototype.toJSON.call(this,a);}});zg.prototype=Object.assign(Object.create(Xa.prototype),{constructor:zg,isAmbientLightProbe:!0,copy:function copy(a){Xa.prototype.copy.call(this,a);return this;},toJSON:function toJSON(a){return Xa.prototype.toJSON.call(this,a);}});var Ei=new U(),Fi=new U();Object.assign(ai.prototype,{update:function update(a){var b=this._cache;if(b.focus!==a.focus||b.fov!==a.fov||b.aspect!==a.aspect*this.aspect||b.near!==a.near||b.far!==a.far||b.zoom!==a.zoom||b.eyeSep!==this.eyeSep){b.focus=a.focus;b.fov=a.fov;b.aspect=a.aspect*this.aspect;b.near=a.near;b.far=a.far;b.zoom=a.zoom;b.eyeSep=this.eyeSep;var c=a.projectionMatrix.clone(),d=b.eyeSep/2,e=d*b.near/b.focus,f=b.near*Math.tan(L.DEG2RAD*b.fov*.5)/b.zoom;Fi.elements[12]=-d;Ei.elements[12]=d;d=-f*b.aspect+e;var g=f*b.aspect+e;c.elements[0]=2*b.near/(g-d);c.elements[8]=(g+d)/(g-d);this.cameraL.projectionMatrix.copy(c);d=-f*b.aspect-e;g=f*b.aspect-e;c.elements[0]=2*b.near/(g-d);c.elements[8]=(g+d)/(g-d);this.cameraR.projectionMatrix.copy(c);}this.cameraL.matrixWorld.copy(a.matrixWorld).multiply(Fi);this.cameraR.matrixWorld.copy(a.matrixWorld).multiply(Ei);}});Object.assign(Ag.prototype,{start:function start(){this.oldTime=this.startTime=("undefined"===typeof performance?Date:performance).now();this.elapsedTime=0;this.running=!0;},stop:function stop(){this.getElapsedTime();this.autoStart=this.running=!1;},getElapsedTime:function getElapsedTime(){this.getDelta();return this.elapsedTime;},getDelta:function getDelta(){var a=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){var b=("undefined"===typeof performance?Date:performance).now();a=(b-this.oldTime)/1E3;this.oldTime=b;this.elapsedTime+=a;}return a;}});var vc=new n(),Gi=new ua(),Hk=new n(),wc=new n();Bg.prototype=Object.assign(Object.create(B.prototype),{constructor:Bg,getInput:function getInput(){return this.gain;},removeFilter:function removeFilter(){null!==this.filter&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null);return this;},getFilter:function getFilter(){return this.filter;},setFilter:function setFilter(a){null!==this.filter?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination);this.filter=a;this.gain.connect(this.filter);this.filter.connect(this.context.destination);return this;},getMasterVolume:function getMasterVolume(){return this.gain.gain.value;},setMasterVolume:function setMasterVolume(a){this.gain.gain.setTargetAtTime(a,this.context.currentTime,.01);return this;},updateMatrixWorld:function updateMatrixWorld(a){B.prototype.updateMatrixWorld.call(this,a);a=this.context.listener;var b=this.up;this.timeDelta=this._clock.getDelta();this.matrixWorld.decompose(vc,Gi,Hk);wc.set(0,0,-1).applyQuaternion(Gi);if(a.positionX){var c=this.context.currentTime+this.timeDelta;a.positionX.linearRampToValueAtTime(vc.x,c);a.positionY.linearRampToValueAtTime(vc.y,c);a.positionZ.linearRampToValueAtTime(vc.z,c);a.forwardX.linearRampToValueAtTime(wc.x,c);a.forwardY.linearRampToValueAtTime(wc.y,c);a.forwardZ.linearRampToValueAtTime(wc.z,c);a.upX.linearRampToValueAtTime(b.x,c);a.upY.linearRampToValueAtTime(b.y,c);a.upZ.linearRampToValueAtTime(b.z,c);}else a.setPosition(vc.x,vc.y,vc.z),a.setOrientation(wc.x,wc.y,wc.z,b.x,b.y,b.z);}});dd.prototype=Object.assign(Object.create(B.prototype),{constructor:dd,getOutput:function getOutput(){return this.gain;},setNodeSource:function setNodeSource(a){this.hasPlaybackControl=!1;this.sourceType="audioNode";this.source=a;this.connect();return this;},setMediaElementSource:function setMediaElementSource(a){this.hasPlaybackControl=!1;this.sourceType="mediaNode";this.source=this.context.createMediaElementSource(a);this.connect();return this;},setMediaStreamSource:function setMediaStreamSource(a){this.hasPlaybackControl=!1;this.sourceType="mediaStreamNode";this.source=this.context.createMediaStreamSource(a);this.connect();return this;},setBuffer:function setBuffer(a){this.buffer=a;this.sourceType="buffer";this.autoplay&&this.play();return this;},play:function play(){if(!0===this.isPlaying)console.warn("THREE.Audio: Audio is already playing.");else if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else{var a=this.context.createBufferSource();a.buffer=this.buffer;a.loop=this.loop;a.onended=this.onEnded.bind(this);this.startTime=this.context.currentTime;a.start(this.startTime,this.offset,this.duration);this.isPlaying=!0;this.source=a;this.setDetune(this.detune);this.setPlaybackRate(this.playbackRate);return this.connect();}},pause:function pause(){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return!0===this.isPlaying&&(this.source.stop(),this.source.onended=null,this.offset+=(this.context.currentTime-this.startTime)*this.playbackRate,this.isPlaying=!1),this;},stop:function stop(){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.source.stop(),this.source.onended=null,this.offset=0,this.isPlaying=!1,this;},connect:function connect(){if(0<this.filters.length){this.source.connect(this.filters[0]);for(var a=1,b=this.filters.length;a<b;a++){this.filters[a-1].connect(this.filters[a]);}this.filters[this.filters.length-1].connect(this.getOutput());}else this.source.connect(this.getOutput());return this;},disconnect:function disconnect(){if(0<this.filters.length){this.source.disconnect(this.filters[0]);for(var a=1,b=this.filters.length;a<b;a++){this.filters[a-1].disconnect(this.filters[a]);}this.filters[this.filters.length-1].disconnect(this.getOutput());}else this.source.disconnect(this.getOutput());return this;},getFilters:function getFilters(){return this.filters;},setFilters:function setFilters(a){a||(a=[]);!0===this.isPlaying?(this.disconnect(),this.filters=a,this.connect()):this.filters=a;return this;},setDetune:function setDetune(a){this.detune=a;if(void 0!==this.source.detune)return!0===this.isPlaying&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this;},getDetune:function getDetune(){return this.detune;},getFilter:function getFilter(){return this.getFilters()[0];},setFilter:function setFilter(a){return this.setFilters(a?[a]:[]);},setPlaybackRate:function setPlaybackRate(a){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.playbackRate=a,!0===this.isPlaying&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this;},getPlaybackRate:function getPlaybackRate(){return this.playbackRate;},onEnded:function onEnded(){this.isPlaying=!1;},getLoop:function getLoop(){return!1===this.hasPlaybackControl?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop;},setLoop:function setLoop(a){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.loop=a,!0===this.isPlaying&&(this.source.loop=this.loop),this;},getVolume:function getVolume(){return this.gain.gain.value;},setVolume:function setVolume(a){this.gain.gain.setTargetAtTime(a,this.context.currentTime,.01);return this;}});var xc=new n(),Hi=new ua(),Ik=new n(),yc=new n();Dg.prototype=Object.assign(Object.create(dd.prototype),{constructor:Dg,getOutput:function getOutput(){return this.panner;},getRefDistance:function getRefDistance(){return this.panner.refDistance;},setRefDistance:function setRefDistance(a){this.panner.refDistance=a;return this;},getRolloffFactor:function getRolloffFactor(){return this.panner.rolloffFactor;},setRolloffFactor:function setRolloffFactor(a){this.panner.rolloffFactor=a;return this;},getDistanceModel:function getDistanceModel(){return this.panner.distanceModel;},setDistanceModel:function setDistanceModel(a){this.panner.distanceModel=a;return this;},getMaxDistance:function getMaxDistance(){return this.panner.maxDistance;},setMaxDistance:function setMaxDistance(a){this.panner.maxDistance=a;return this;},setDirectionalCone:function setDirectionalCone(a,b,c){this.panner.coneInnerAngle=a;this.panner.coneOuterAngle=b;this.panner.coneOuterGain=c;return this;},updateMatrixWorld:function updateMatrixWorld(a){B.prototype.updateMatrixWorld.call(this,a);if(!0!==this.hasPlaybackControl||!1!==this.isPlaying)if(this.matrixWorld.decompose(xc,Hi,Ik),yc.set(0,0,1).applyQuaternion(Hi),a=this.panner,a.positionX){var b=this.context.currentTime+this.listener.timeDelta;a.positionX.linearRampToValueAtTime(xc.x,b);a.positionY.linearRampToValueAtTime(xc.y,b);a.positionZ.linearRampToValueAtTime(xc.z,b);a.orientationX.linearRampToValueAtTime(yc.x,b);a.orientationY.linearRampToValueAtTime(yc.y,b);a.orientationZ.linearRampToValueAtTime(yc.z,b);}else a.setPosition(xc.x,xc.y,xc.z),a.setOrientation(yc.x,yc.y,yc.z);}});Object.assign(Eg.prototype,{getFrequencyData:function getFrequencyData(){this.analyser.getByteFrequencyData(this.data);return this.data;},getAverageFrequency:function getAverageFrequency(){for(var a=0,b=this.getFrequencyData(),c=0;c<b.length;c++){a+=b[c];}return a/b.length;}});Object.assign(Fg.prototype,{accumulate:function accumulate(a,b){var c=this.buffer,d=this.valueSize;a=a*d+d;var e=this.cumulativeWeight;if(0===e){for(e=0;e!==d;++e){c[a+e]=c[e];}e=b;}else e+=b,this._mixBufferRegion(c,a,0,b/e,d);this.cumulativeWeight=e;},apply:function apply(a){var b=this.valueSize,c=this.buffer;a=a*b+b;var d=this.cumulativeWeight,e=this.binding;this.cumulativeWeight=0;1>d&&this._mixBufferRegion(c,a,3*b,1-d,b);d=b;for(var f=b+b;d!==f;++d){if(c[d]!==c[d+b]){e.setValue(c,a);break;}}},saveOriginalState:function saveOriginalState(){var a=this.buffer,b=this.valueSize,c=3*b;this.binding.getValue(a,c);for(var d=b;d!==c;++d){a[d]=a[c+d%b];}this.cumulativeWeight=0;},restoreOriginalState:function restoreOriginalState(){this.binding.setValue(this.buffer,3*this.valueSize);},_select:function _select(a,b,c,d,e){if(.5<=d)for(d=0;d!==e;++d){a[b+d]=a[c+d];}},_slerp:function _slerp(a,b,c,d){ua.slerpFlat(a,b,a,b,a,c,d);},_lerp:function _lerp(a,b,c,d,e){for(var f=1-d,g=0;g!==e;++g){var h=b+g;a[h]=a[h]*f+a[c+g]*d;}}});var Jk=/[\[\]\.:\/]/g,Kk="[^"+"\\[\\]\\.:\\/".replace("\\.","")+"]",Lk=/((?:WC+[\/:])*)/.source.replace("WC","[^\\[\\]\\.:\\/]"),Mk=/(WCOD+)?/.source.replace("WCOD",Kk),Nk=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC","[^\\[\\]\\.:\\/]"),Ok=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC","[^\\[\\]\\.:\\/]"),Pk=new RegExp("^"+Lk+Mk+Nk+Ok+"$"),Qk=["material","materials","bones"];Object.assign(bi.prototype,{getValue:function getValue(a,b){this.bind();var c=this._bindings[this._targetGroup.nCachedObjects_];void 0!==c&&c.getValue(a,b);},setValue:function setValue(a,b){for(var c=this._bindings,d=this._targetGroup.nCachedObjects_,e=c.length;d!==e;++d){c[d].setValue(a,b);}},bind:function bind(){for(var a=this._bindings,b=this._targetGroup.nCachedObjects_,c=a.length;b!==c;++b){a[b].bind();}},unbind:function unbind(){for(var a=this._bindings,b=this._targetGroup.nCachedObjects_,c=a.length;b!==c;++b){a[b].unbind();}}});Object.assign(Aa,{Composite:bi,create:function create(a,b,c){return a&&a.isAnimationObjectGroup?new Aa.Composite(a,b,c):new Aa(a,b,c);},sanitizeNodeName:function sanitizeNodeName(a){return a.replace(/\s/g,"_").replace(Jk,"");},parseTrackName:function parseTrackName(a){var b=Pk.exec(a);if(!b)throw Error("PropertyBinding: Cannot parse trackName: "+a);b={nodeName:b[2],objectName:b[3],objectIndex:b[4],propertyName:b[5],propertyIndex:b[6]};var c=b.nodeName&&b.nodeName.lastIndexOf(".");if(void 0!==c&&-1!==c){var d=b.nodeName.substring(c+1);-1!==Qk.indexOf(d)&&(b.nodeName=b.nodeName.substring(0,c),b.objectName=d);}if(null===b.propertyName||0===b.propertyName.length)throw Error("PropertyBinding: can not parse propertyName from trackName: "+a);return b;},findNode:function findNode(a,b){if(!b||""===b||"root"===b||"."===b||-1===b||b===a.name||b===a.uuid)return a;if(a.skeleton){var c=a.skeleton.getBoneByName(b);if(void 0!==c)return c;}if(a.children){var d=function d(a){for(var c=0;c<a.length;c++){var e=a[c];if(e.name===b||e.uuid===b||(e=d(e.children)))return e;}return null;};if(a=d(a.children))return a;}return null;}});Object.assign(Aa.prototype,{_getValue_unavailable:function _getValue_unavailable(){},_setValue_unavailable:function _setValue_unavailable(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(a,b){a[b]=this.node[this.propertyName];},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d){a[b++]=c[d];}},function(a,b){a[b]=this.resolvedProperty[this.propertyIndex];},function(a,b){this.resolvedProperty.toArray(a,b);}],SetterByBindingTypeAndVersioning:[[function(a,b){this.targetObject[this.propertyName]=a[b];},function(a,b){this.targetObject[this.propertyName]=a[b];this.targetObject.needsUpdate=!0;},function(a,b){this.targetObject[this.propertyName]=a[b];this.targetObject.matrixWorldNeedsUpdate=!0;}],[function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d){c[d]=a[b++];}},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d){c[d]=a[b++];}this.targetObject.needsUpdate=!0;},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d){c[d]=a[b++];}this.targetObject.matrixWorldNeedsUpdate=!0;}],[function(a,b){this.resolvedProperty[this.propertyIndex]=a[b];},function(a,b){this.resolvedProperty[this.propertyIndex]=a[b];this.targetObject.needsUpdate=!0;},function(a,b){this.resolvedProperty[this.propertyIndex]=a[b];this.targetObject.matrixWorldNeedsUpdate=!0;}],[function(a,b){this.resolvedProperty.fromArray(a,b);},function(a,b){this.resolvedProperty.fromArray(a,b);this.targetObject.needsUpdate=!0;},function(a,b){this.resolvedProperty.fromArray(a,b);this.targetObject.matrixWorldNeedsUpdate=!0;}]],getValue:function getValue(a,b){this.bind();this.getValue(a,b);},setValue:function setValue(a,b){this.bind();this.setValue(a,b);},bind:function bind(){var a=this.node,b=this.parsedPath,c=b.objectName,d=b.propertyName,e=b.propertyIndex;a||(this.node=a=Aa.findNode(this.rootNode,b.nodeName)||this.rootNode);this.getValue=this._getValue_unavailable;this.setValue=this._setValue_unavailable;if(a){if(c){var f=b.objectIndex;switch(c){case"materials":if(!a.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return;}if(!a.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return;}a=a.material.materials;break;case"bones":if(!a.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return;}a=a.skeleton.bones;for(c=0;c<a.length;c++){if(a[c].name===f){f=c;break;}}break;default:if(void 0===a[c]){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return;}a=a[c];}if(void 0!==f){if(void 0===a[f]){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,a);return;}a=a[f];}}f=a[d];if(void 0===f)console.error("THREE.PropertyBinding: Trying to update property for track: "+b.nodeName+"."+d+" but it wasn't found.",a);else{b=this.Versioning.None;this.targetObject=a;void 0!==a.needsUpdate?b=this.Versioning.NeedsUpdate:void 0!==a.matrixWorldNeedsUpdate&&(b=this.Versioning.MatrixWorldNeedsUpdate);c=this.BindingType.Direct;if(void 0!==e){if("morphTargetInfluences"===d){if(!a.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return;}if(a.geometry.isBufferGeometry){if(!a.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return;}for(c=0;c<this.node.geometry.morphAttributes.position.length;c++){if(a.geometry.morphAttributes.position[c].name===e){e=c;break;}}}else{if(!a.geometry.morphTargets){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.",this);return;}for(c=0;c<this.node.geometry.morphTargets.length;c++){if(a.geometry.morphTargets[c].name===e){e=c;break;}}}}c=this.BindingType.ArrayElement;this.resolvedProperty=f;this.propertyIndex=e;}else void 0!==f.fromArray&&void 0!==f.toArray?(c=this.BindingType.HasFromToArray,this.resolvedProperty=f):Array.isArray(f)?(c=this.BindingType.EntireArray,this.resolvedProperty=f):this.propertyName=d;this.getValue=this.GetterByBindingType[c];this.setValue=this.SetterByBindingTypeAndVersioning[c][b];}}else console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");},unbind:function unbind(){this.node=null;this.getValue=this._getValue_unbound;this.setValue=this._setValue_unbound;}});Object.assign(Aa.prototype,{_getValue_unbound:Aa.prototype.getValue,_setValue_unbound:Aa.prototype.setValue});Object.assign(ci.prototype,{isAnimationObjectGroup:!0,add:function add(){for(var a=this._objects,b=a.length,c=this.nCachedObjects_,d=this._indicesByUUID,e=this._paths,f=this._parsedPaths,g=this._bindings,h=g.length,l=void 0,k=0,n=arguments.length;k!==n;++k){var u=arguments[k],t=u.uuid,r=d[t];if(void 0===r){r=b++;d[t]=r;a.push(u);t=0;for(var p=h;t!==p;++t){g[t].push(new Aa(u,e[t],f[t]));}}else if(r<c){l=a[r];var v=--c;p=a[v];d[p.uuid]=r;a[r]=p;d[t]=v;a[v]=u;t=0;for(p=h;t!==p;++t){var w=g[t],z=w[r];w[r]=w[v];void 0===z&&(z=new Aa(u,e[t],f[t]));w[v]=z;}}else a[r]!==l&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");}this.nCachedObjects_=c;},remove:function remove(){for(var a=this._objects,b=this.nCachedObjects_,c=this._indicesByUUID,d=this._bindings,e=d.length,f=0,g=arguments.length;f!==g;++f){var h=arguments[f],l=h.uuid,k=c[l];if(void 0!==k&&k>=b){var n=b++,u=a[n];c[u.uuid]=k;a[k]=u;c[l]=n;a[n]=h;h=0;for(l=e;h!==l;++h){u=d[h];var t=u[k];u[k]=u[n];u[n]=t;}}}this.nCachedObjects_=b;},uncache:function uncache(){for(var a=this._objects,b=a.length,c=this.nCachedObjects_,d=this._indicesByUUID,e=this._bindings,f=e.length,g=0,h=arguments.length;g!==h;++g){var l=arguments[g].uuid,k=d[l];if(void 0!==k)if(delete d[l],k<c){l=--c;var n=a[l],u=--b,t=a[u];d[n.uuid]=k;a[k]=n;d[t.uuid]=l;a[l]=t;a.pop();n=0;for(t=f;n!==t;++n){var r=e[n],p=r[u];r[k]=r[l];r[l]=p;r.pop();}}else for(u=--b,t=a[u],d[t.uuid]=k,a[k]=t,a.pop(),n=0,t=f;n!==t;++n){r=e[n],r[k]=r[u],r.pop();}}this.nCachedObjects_=c;},subscribe_:function subscribe_(a,b){var c=this._bindingsIndicesByPath,d=c[a],e=this._bindings;if(void 0!==d)return e[d];var f=this._paths,g=this._parsedPaths,h=this._objects,l=this.nCachedObjects_,k=Array(h.length);d=e.length;c[a]=d;f.push(a);g.push(b);e.push(k);c=l;for(d=h.length;c!==d;++c){k[c]=new Aa(h[c],a,b);}return k;},unsubscribe_:function unsubscribe_(a){var b=this._bindingsIndicesByPath,c=b[a];if(void 0!==c){var d=this._paths,e=this._parsedPaths,f=this._bindings,g=f.length-1,h=f[g];b[a[g]]=c;f[c]=h;f.pop();e[c]=e[g];e.pop();d[c]=d[g];d.pop();}}});Object.assign(di.prototype,{play:function play(){this._mixer._activateAction(this);return this;},stop:function stop(){this._mixer._deactivateAction(this);return this.reset();},reset:function reset(){this.paused=!1;this.enabled=!0;this.time=0;this._loopCount=-1;this._startTime=null;return this.stopFading().stopWarping();},isRunning:function isRunning(){return this.enabled&&!this.paused&&0!==this.timeScale&&null===this._startTime&&this._mixer._isActiveAction(this);},isScheduled:function isScheduled(){return this._mixer._isActiveAction(this);},startAt:function startAt(a){this._startTime=a;return this;},setLoop:function setLoop(a,b){this.loop=a;this.repetitions=b;return this;},setEffectiveWeight:function setEffectiveWeight(a){this.weight=a;this._effectiveWeight=this.enabled?a:0;return this.stopFading();},getEffectiveWeight:function getEffectiveWeight(){return this._effectiveWeight;},fadeIn:function fadeIn(a){return this._scheduleFading(a,0,1);},fadeOut:function fadeOut(a){return this._scheduleFading(a,1,0);},crossFadeFrom:function crossFadeFrom(a,b,c){a.fadeOut(b);this.fadeIn(b);if(c){c=this._clip.duration;var d=a._clip.duration,e=c/d;a.warp(1,d/c,b);this.warp(e,1,b);}return this;},crossFadeTo:function crossFadeTo(a,b,c){return a.crossFadeFrom(this,b,c);},stopFading:function stopFading(){var a=this._weightInterpolant;null!==a&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(a));return this;},setEffectiveTimeScale:function setEffectiveTimeScale(a){this.timeScale=a;this._effectiveTimeScale=this.paused?0:a;return this.stopWarping();},getEffectiveTimeScale:function getEffectiveTimeScale(){return this._effectiveTimeScale;},setDuration:function setDuration(a){this.timeScale=this._clip.duration/a;return this.stopWarping();},syncWith:function syncWith(a){this.time=a.time;this.timeScale=a.timeScale;return this.stopWarping();},halt:function halt(a){return this.warp(this._effectiveTimeScale,0,a);},warp:function warp(a,b,c){var d=this._mixer,e=d.time,f=this._timeScaleInterpolant,g=this.timeScale;null===f&&(this._timeScaleInterpolant=f=d._lendControlInterpolant());d=f.parameterPositions;f=f.sampleValues;d[0]=e;d[1]=e+c;f[0]=a/g;f[1]=b/g;return this;},stopWarping:function stopWarping(){var a=this._timeScaleInterpolant;null!==a&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(a));return this;},getMixer:function getMixer(){return this._mixer;},getClip:function getClip(){return this._clip;},getRoot:function getRoot(){return this._localRoot||this._mixer._root;},_update:function _update(a,b,c,d){if(this.enabled){var e=this._startTime;if(null!==e){b=(a-e)*c;if(0>b||0===c)return;this._startTime=null;b*=c;}b*=this._updateTimeScale(a);c=this._updateTime(b);a=this._updateWeight(a);if(0<a){b=this._interpolants;e=this._propertyBindings;for(var f=0,g=b.length;f!==g;++f){b[f].evaluate(c),e[f].accumulate(d,a);}}}else this._updateWeight(a);},_updateWeight:function _updateWeight(a){var b=0;if(this.enabled){b=this.weight;var c=this._weightInterpolant;if(null!==c){var d=c.evaluate(a)[0];b*=d;a>c.parameterPositions[1]&&(this.stopFading(),0===d&&(this.enabled=!1));}}return this._effectiveWeight=b;},_updateTimeScale:function _updateTimeScale(a){var b=0;if(!this.paused){b=this.timeScale;var c=this._timeScaleInterpolant;if(null!==c){var d=c.evaluate(a)[0];b*=d;a>c.parameterPositions[1]&&(this.stopWarping(),0===b?this.paused=!0:this.timeScale=b);}}return this._effectiveTimeScale=b;},_updateTime:function _updateTime(a){var b=this.time+a,c=this._clip.duration,d=this.loop,e=this._loopCount,f=2202===d;if(0===a)return-1===e?b:f&&1===(e&1)?c-b:b;if(2200===d)a:{if(-1===e&&(this._loopCount=0,this._setEndings(!0,!0,!1)),b>=c)b=c;else if(0>b)b=0;else{this.time=b;break a;}this.clampWhenFinished?this.paused=!0:this.enabled=!1;this.time=b;this._mixer.dispatchEvent({type:"finished",action:this,direction:0>a?-1:1});}else{-1===e&&(0<=a?(e=0,this._setEndings(!0,0===this.repetitions,f)):this._setEndings(0===this.repetitions,!0,f));if(b>=c||0>b){d=Math.floor(b/c);b-=c*d;e+=Math.abs(d);var g=this.repetitions-e;0>=g?(this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=b=0<a?c:0,this._mixer.dispatchEvent({type:"finished",action:this,direction:0<a?1:-1})):(1===g?(a=0>a,this._setEndings(a,!a,f)):this._setEndings(!1,!1,f),this._loopCount=e,this.time=b,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:d}));}else this.time=b;if(f&&1===(e&1))return c-b;}return b;},_setEndings:function _setEndings(a,b,c){var d=this._interpolantSettings;c?(d.endingStart=2401,d.endingEnd=2401):(d.endingStart=a?this.zeroSlopeAtStart?2401:2400:2402,d.endingEnd=b?this.zeroSlopeAtEnd?2401:2400:2402);},_scheduleFading:function _scheduleFading(a,b,c){var d=this._mixer,e=d.time,f=this._weightInterpolant;null===f&&(this._weightInterpolant=f=d._lendControlInterpolant());d=f.parameterPositions;f=f.sampleValues;d[0]=e;f[0]=b;d[1]=e+a;f[1]=c;return this;}});Gg.prototype=Object.assign(Object.create(Ba.prototype),{constructor:Gg,_bindAction:function _bindAction(a,b){var c=a._localRoot||this._root,d=a._clip.tracks,e=d.length,f=a._propertyBindings;a=a._interpolants;var g=c.uuid,h=this._bindingsByRootAndName,k=h[g];void 0===k&&(k={},h[g]=k);for(h=0;h!==e;++h){var m=d[h],n=m.name,u=k[n];if(void 0===u){u=f[h];if(void 0!==u){null===u._cacheIndex&&(++u.referenceCount,this._addInactiveBinding(u,g,n));continue;}u=new Fg(Aa.create(c,n,b&&b._propertyBindings[h].binding.parsedPath),m.ValueTypeName,m.getValueSize());++u.referenceCount;this._addInactiveBinding(u,g,n);}f[h]=u;a[h].resultBuffer=u.buffer;}},_activateAction:function _activateAction(a){if(!this._isActiveAction(a)){if(null===a._cacheIndex){var b=(a._localRoot||this._root).uuid,c=a._clip.uuid,d=this._actionsByClip[c];this._bindAction(a,d&&d.knownActions[0]);this._addInactiveAction(a,c,b);}b=a._propertyBindings;c=0;for(d=b.length;c!==d;++c){var e=b[c];0===e.useCount++&&(this._lendBinding(e),e.saveOriginalState());}this._lendAction(a);}},_deactivateAction:function _deactivateAction(a){if(this._isActiveAction(a)){for(var b=a._propertyBindings,c=0,d=b.length;c!==d;++c){var e=b[c];0===--e.useCount&&(e.restoreOriginalState(),this._takeBackBinding(e));}this._takeBackAction(a);}},_initMemoryManager:function _initMemoryManager(){this._actions=[];this._nActiveActions=0;this._actionsByClip={};this._bindings=[];this._nActiveBindings=0;this._bindingsByRootAndName={};this._controlInterpolants=[];this._nActiveControlInterpolants=0;var a=this;this.stats={actions:{get total(){return a._actions.length;},get inUse(){return a._nActiveActions;}},bindings:{get total(){return a._bindings.length;},get inUse(){return a._nActiveBindings;}},controlInterpolants:{get total(){return a._controlInterpolants.length;},get inUse(){return a._nActiveControlInterpolants;}}};},_isActiveAction:function _isActiveAction(a){a=a._cacheIndex;return null!==a&&a<this._nActiveActions;},_addInactiveAction:function _addInactiveAction(a,b,c){var d=this._actions,e=this._actionsByClip,f=e[b];void 0===f?(f={knownActions:[a],actionByRoot:{}},a._byClipCacheIndex=0,e[b]=f):(b=f.knownActions,a._byClipCacheIndex=b.length,b.push(a));a._cacheIndex=d.length;d.push(a);f.actionByRoot[c]=a;},_removeInactiveAction:function _removeInactiveAction(a){var b=this._actions,c=b[b.length-1],d=a._cacheIndex;c._cacheIndex=d;b[d]=c;b.pop();a._cacheIndex=null;b=a._clip.uuid;c=this._actionsByClip;d=c[b];var e=d.knownActions,f=e[e.length-1],g=a._byClipCacheIndex;f._byClipCacheIndex=g;e[g]=f;e.pop();a._byClipCacheIndex=null;delete d.actionByRoot[(a._localRoot||this._root).uuid];0===e.length&&delete c[b];this._removeInactiveBindingsForAction(a);},_removeInactiveBindingsForAction:function _removeInactiveBindingsForAction(a){a=a._propertyBindings;for(var b=0,c=a.length;b!==c;++b){var d=a[b];0===--d.referenceCount&&this._removeInactiveBinding(d);}},_lendAction:function _lendAction(a){var b=this._actions,c=a._cacheIndex,d=this._nActiveActions++,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e;},_takeBackAction:function _takeBackAction(a){var b=this._actions,c=a._cacheIndex,d=--this._nActiveActions,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e;},_addInactiveBinding:function _addInactiveBinding(a,b,c){var d=this._bindingsByRootAndName,e=d[b],f=this._bindings;void 0===e&&(e={},d[b]=e);e[c]=a;a._cacheIndex=f.length;f.push(a);},_removeInactiveBinding:function _removeInactiveBinding(a){var b=this._bindings,c=a.binding,d=c.rootNode.uuid;c=c.path;var e=this._bindingsByRootAndName,f=e[d],g=b[b.length-1];a=a._cacheIndex;g._cacheIndex=a;b[a]=g;b.pop();delete f[c];0===Object.keys(f).length&&delete e[d];},_lendBinding:function _lendBinding(a){var b=this._bindings,c=a._cacheIndex,d=this._nActiveBindings++,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e;},_takeBackBinding:function _takeBackBinding(a){var b=this._bindings,c=a._cacheIndex,d=--this._nActiveBindings,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e;},_lendControlInterpolant:function _lendControlInterpolant(){var a=this._controlInterpolants,b=this._nActiveControlInterpolants++,c=a[b];void 0===c&&(c=new ke(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),c.__cacheIndex=b,a[b]=c);return c;},_takeBackControlInterpolant:function _takeBackControlInterpolant(a){var b=this._controlInterpolants,c=a.__cacheIndex,d=--this._nActiveControlInterpolants,e=b[d];a.__cacheIndex=d;b[d]=a;e.__cacheIndex=c;b[c]=e;},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function clipAction(a,b){var c=b||this._root,d=c.uuid;c="string"===typeof a?Ma.findByName(c,a):a;a=null!==c?c.uuid:a;var e=this._actionsByClip[a],f=null;if(void 0!==e){f=e.actionByRoot[d];if(void 0!==f)return f;f=e.knownActions[0];null===c&&(c=f._clip);}if(null===c)return null;b=new di(this,c,b);this._bindAction(b,f);this._addInactiveAction(b,a,d);return b;},existingAction:function existingAction(a,b){var c=b||this._root;b=c.uuid;c="string"===typeof a?Ma.findByName(c,a):a;a=this._actionsByClip[c?c.uuid:a];return void 0!==a?a.actionByRoot[b]||null:null;},stopAllAction:function stopAllAction(){for(var a=this._actions,b=this._nActiveActions,c=this._bindings,d=this._nActiveBindings,e=this._nActiveBindings=this._nActiveActions=0;e!==b;++e){a[e].reset();}for(e=0;e!==d;++e){c[e].useCount=0;}return this;},update:function update(a){a*=this.timeScale;for(var b=this._actions,c=this._nActiveActions,d=this.time+=a,e=Math.sign(a),f=this._accuIndex^=1,g=0;g!==c;++g){b[g]._update(d,a,e,f);}a=this._bindings;b=this._nActiveBindings;for(g=0;g!==b;++g){a[g].apply(f);}return this;},setTime:function setTime(a){for(var b=this.time=0;b<this._actions.length;b++){this._actions[b].time=0;}return this.update(a);},getRoot:function getRoot(){return this._root;},uncacheClip:function uncacheClip(a){var b=this._actions;a=a.uuid;var c=this._actionsByClip,d=c[a];if(void 0!==d){d=d.knownActions;for(var e=0,f=d.length;e!==f;++e){var g=d[e];this._deactivateAction(g);var h=g._cacheIndex,k=b[b.length-1];g._cacheIndex=null;g._byClipCacheIndex=null;k._cacheIndex=h;b[h]=k;b.pop();this._removeInactiveBindingsForAction(g);}delete c[a];}},uncacheRoot:function uncacheRoot(a){a=a.uuid;var b=this._actionsByClip;for(d in b){var c=b[d].actionByRoot[a];void 0!==c&&(this._deactivateAction(c),this._removeInactiveAction(c));}var d=this._bindingsByRootAndName[a];if(void 0!==d)for(var e in d){a=d[e],a.restoreOriginalState(),this._removeInactiveBinding(a);}},uncacheAction:function uncacheAction(a,b){a=this.existingAction(a,b);null!==a&&(this._deactivateAction(a),this._removeInactiveAction(a));}});lf.prototype.clone=function(){return new lf(void 0===this.value.clone?this.value:this.value.clone());};Hg.prototype=Object.assign(Object.create(Gb.prototype),{constructor:Hg,isInstancedInterleavedBuffer:!0,copy:function copy(a){Gb.prototype.copy.call(this,a);this.meshPerAttribute=a.meshPerAttribute;return this;}});Object.assign(ei.prototype,{linePrecision:1,set:function set(a,b){this.ray.set(a,b);},setFromCamera:function setFromCamera(a,b){b&&b.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(b.matrixWorld),this.ray.direction.set(a.x,a.y,.5).unproject(b).sub(this.ray.origin).normalize(),this.camera=b):b&&b.isOrthographicCamera?(this.ray.origin.set(a.x,a.y,(b.near+b.far)/(b.near-b.far)).unproject(b),this.ray.direction.set(0,0,-1).transformDirection(b.matrixWorld),this.camera=b):console.error("THREE.Raycaster: Unsupported camera type.");},intersectObject:function intersectObject(a,b,c){c=c||[];Ig(a,this,c,b);c.sort(fi);return c;},intersectObjects:function intersectObjects(a,b,c){c=c||[];if(!1===Array.isArray(a))return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),c;for(var d=0,e=a.length;d<e;d++){Ig(a[d],this,c,b);}c.sort(fi);return c;}});Object.assign(gi.prototype,{set:function set(a,b,c){this.radius=a;this.phi=b;this.theta=c;return this;},clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.radius=a.radius;this.phi=a.phi;this.theta=a.theta;return this;},makeSafe:function makeSafe(){this.phi=Math.max(1E-6,Math.min(Math.PI-1E-6,this.phi));return this;},setFromVector3:function setFromVector3(a){return this.setFromCartesianCoords(a.x,a.y,a.z);},setFromCartesianCoords:function setFromCartesianCoords(a,b,c){this.radius=Math.sqrt(a*a+b*b+c*c);0===this.radius?this.phi=this.theta=0:(this.theta=Math.atan2(a,c),this.phi=Math.acos(L.clamp(b/this.radius,-1,1)));return this;}});Object.assign(hi.prototype,{set:function set(a,b,c){this.radius=a;this.theta=b;this.y=c;return this;},clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.radius=a.radius;this.theta=a.theta;this.y=a.y;return this;},setFromVector3:function setFromVector3(a){return this.setFromCartesianCoords(a.x,a.y,a.z);},setFromCartesianCoords:function setFromCartesianCoords(a,b,c){this.radius=Math.sqrt(a*a+c*c);this.theta=Math.atan2(a,c);this.y=b;return this;}});var Ii=new w();Object.assign(Jg.prototype,{set:function set(a,b){this.min.copy(a);this.max.copy(b);return this;},setFromPoints:function setFromPoints(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++){this.expandByPoint(a[b]);}return this;},setFromCenterAndSize:function setFromCenterAndSize(a,b){b=Ii.copy(b).multiplyScalar(.5);this.min.copy(a).sub(b);this.max.copy(a).add(b);return this;},clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.min.copy(a.min);this.max.copy(a.max);return this;},makeEmpty:function makeEmpty(){this.min.x=this.min.y=Infinity;this.max.x=this.max.y=-Infinity;return this;},isEmpty:function isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y;},getCenter:function getCenter(a){void 0===a&&(console.warn("THREE.Box2: .getCenter() target is now required"),a=new w());return this.isEmpty()?a.set(0,0):a.addVectors(this.min,this.max).multiplyScalar(.5);},getSize:function getSize(a){void 0===a&&(console.warn("THREE.Box2: .getSize() target is now required"),a=new w());return this.isEmpty()?a.set(0,0):a.subVectors(this.max,this.min);},expandByPoint:function expandByPoint(a){this.min.min(a);this.max.max(a);return this;},expandByVector:function expandByVector(a){this.min.sub(a);this.max.add(a);return this;},expandByScalar:function expandByScalar(a){this.min.addScalar(-a);this.max.addScalar(a);return this;},containsPoint:function containsPoint(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y?!1:!0;},containsBox:function containsBox(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y;},getParameter:function getParameter(a,b){void 0===b&&(console.warn("THREE.Box2: .getParameter() target is now required"),b=new w());return b.set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y));},intersectsBox:function intersectsBox(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y?!1:!0;},clampPoint:function clampPoint(a,b){void 0===b&&(console.warn("THREE.Box2: .clampPoint() target is now required"),b=new w());return b.copy(a).clamp(this.min,this.max);},distanceToPoint:function distanceToPoint(a){return Ii.copy(a).clamp(this.min,this.max).sub(a).length();},intersect:function intersect(a){this.min.max(a.min);this.max.min(a.max);return this;},union:function union(a){this.min.min(a.min);this.max.max(a.max);return this;},translate:function translate(a){this.min.add(a);this.max.add(a);return this;},equals:function equals(a){return a.min.equals(this.min)&&a.max.equals(this.max);}});var Ji=new n(),Jf=new n();Object.assign(Kg.prototype,{set:function set(a,b){this.start.copy(a);this.end.copy(b);return this;},clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.start.copy(a.start);this.end.copy(a.end);return this;},getCenter:function getCenter(a){void 0===a&&(console.warn("THREE.Line3: .getCenter() target is now required"),a=new n());return a.addVectors(this.start,this.end).multiplyScalar(.5);},delta:function delta(a){void 0===a&&(console.warn("THREE.Line3: .delta() target is now required"),a=new n());return a.subVectors(this.end,this.start);},distanceSq:function distanceSq(){return this.start.distanceToSquared(this.end);},distance:function distance(){return this.start.distanceTo(this.end);},at:function at(a,b){void 0===b&&(console.warn("THREE.Line3: .at() target is now required"),b=new n());return this.delta(b).multiplyScalar(a).add(this.start);},closestPointToPointParameter:function closestPointToPointParameter(a,b){Ji.subVectors(a,this.start);Jf.subVectors(this.end,this.start);a=Jf.dot(Jf);a=Jf.dot(Ji)/a;b&&(a=L.clamp(a,0,1));return a;},closestPointToPoint:function closestPointToPoint(a,b,c){a=this.closestPointToPointParameter(a,b);void 0===c&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),c=new n());return this.delta(c).multiplyScalar(a).add(this.start);},applyMatrix4:function applyMatrix4(a){this.start.applyMatrix4(a);this.end.applyMatrix4(a);return this;},equals:function equals(a){return a.start.equals(this.start)&&a.end.equals(this.end);}});pe.prototype=Object.create(B.prototype);pe.prototype.constructor=pe;pe.prototype.isImmediateRenderObject=!0;var mb=new n(),zb=new n(),hh=new Y(),Rk=["a","b","c"];qe.prototype=Object.create(ca.prototype);qe.prototype.constructor=qe;qe.prototype.update=function(){this.object.updateMatrixWorld(!0);hh.getNormalMatrix(this.object.matrixWorld);var a=this.object.matrixWorld,b=this.geometry.attributes.position,c=this.object.geometry;if(c&&c.isGeometry)for(var d=c.vertices,e=c.faces,f=c=0,g=e.length;f<g;f++){for(var h=e[f],k=0,m=h.vertexNormals.length;k<m;k++){var n=h.vertexNormals[k];mb.copy(d[h[Rk[k]]]).applyMatrix4(a);zb.copy(n).applyMatrix3(hh).normalize().multiplyScalar(this.size).add(mb);b.setXYZ(c,mb.x,mb.y,mb.z);c+=1;b.setXYZ(c,zb.x,zb.y,zb.z);c+=1;}}else if(c&&c.isBufferGeometry)for(d=c.attributes.position,e=c.attributes.normal,k=c=0,m=d.count;k<m;k++){mb.set(d.getX(k),d.getY(k),d.getZ(k)).applyMatrix4(a),zb.set(e.getX(k),e.getY(k),e.getZ(k)),zb.applyMatrix3(hh).normalize().multiplyScalar(this.size).add(mb),b.setXYZ(c,mb.x,mb.y,mb.z),c+=1,b.setXYZ(c,zb.x,zb.y,zb.z),c+=1;}b.needsUpdate=!0;};var Ki=new n();ed.prototype=Object.create(B.prototype);ed.prototype.constructor=ed;ed.prototype.dispose=function(){this.cone.geometry.dispose();this.cone.material.dispose();};ed.prototype.update=function(){this.light.updateMatrixWorld();var a=this.light.distance?this.light.distance:1E3,b=a*Math.tan(this.light.angle);this.cone.scale.set(b,b,a);Ki.setFromMatrixPosition(this.light.target.matrixWorld);this.cone.lookAt(Ki);void 0!==this.color?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color);};var Pb=new n(),Kf=new U(),ih=new U();fd.prototype=Object.create(ca.prototype);fd.prototype.constructor=fd;fd.prototype.updateMatrixWorld=function(a){var b=this.bones,c=this.geometry,d=c.getAttribute("position");ih.getInverse(this.root.matrixWorld);for(var e=0,f=0;e<b.length;e++){var g=b[e];g.parent&&g.parent.isBone&&(Kf.multiplyMatrices(ih,g.matrixWorld),Pb.setFromMatrixPosition(Kf),d.setXYZ(f,Pb.x,Pb.y,Pb.z),Kf.multiplyMatrices(ih,g.parent.matrixWorld),Pb.setFromMatrixPosition(Kf),d.setXYZ(f+1,Pb.x,Pb.y,Pb.z),f+=2);}c.getAttribute("position").needsUpdate=!0;B.prototype.updateMatrixWorld.call(this,a);};gd.prototype=Object.create(ja.prototype);gd.prototype.constructor=gd;gd.prototype.dispose=function(){this.geometry.dispose();this.material.dispose();};gd.prototype.update=function(){void 0!==this.color?this.material.color.set(this.color):this.material.color.copy(this.light.color);};hd.prototype=Object.create(xa.prototype);hd.prototype.constructor=hd;hd.prototype.update=function(){this.scale.set(.5*this.light.width,.5*this.light.height,1);if(void 0!==this.color)this.material.color.set(this.color),this.children[0].material.color.set(this.color);else{this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);var a=this.material.color,b=Math.max(a.r,a.g,a.b);1<b&&a.multiplyScalar(1/b);this.children[0].material.color.copy(this.material.color);}};hd.prototype.dispose=function(){this.geometry.dispose();this.material.dispose();this.children[0].geometry.dispose();this.children[0].material.dispose();};var Sk=new n(),Li=new H(),Mi=new H();id.prototype=Object.create(B.prototype);id.prototype.constructor=id;id.prototype.dispose=function(){this.children[0].geometry.dispose();this.children[0].material.dispose();};id.prototype.update=function(){var a=this.children[0];if(void 0!==this.color)this.material.color.set(this.color);else{var b=a.geometry.getAttribute("color");Li.copy(this.light.color);Mi.copy(this.light.groundColor);for(var c=0,d=b.count;c<d;c++){var e=c<d/2?Li:Mi;b.setXYZ(c,e.r,e.g,e.b);}b.needsUpdate=!0;}a.lookAt(Sk.setFromMatrixPosition(this.light.matrixWorld).negate());};jd.prototype=Object.create(ja.prototype);jd.prototype.constructor=jd;jd.prototype.dispose=function(){this.geometry.dispose();this.material.dispose();};jd.prototype.onBeforeRender=function(){this.position.copy(this.lightProbe.position);this.scale.set(1,1,1).multiplyScalar(this.size);this.material.uniforms.intensity.value=this.lightProbe.intensity;};mf.prototype=Object.assign(Object.create(ca.prototype),{constructor:mf,copy:function copy(a){ca.prototype.copy.call(this,a);this.geometry.copy(a.geometry);this.material.copy(a.material);return this;},clone:function clone(){return new this.constructor().copy(this);}});nf.prototype=Object.create(ca.prototype);nf.prototype.constructor=nf;kd.prototype=Object.create(xa.prototype);kd.prototype.constructor=kd;kd.prototype.update=function(){function a(a,b,d,e){d=(b-a)/d;r.setXYZ(k,0,0,0);m++;for(n=a;n<b;n+=d){u=k+m,r.setXYZ(u,Math.sin(n)*c,0,Math.cos(n)*c),r.setXYZ(u+1,Math.sin(Math.min(n+d,b))*c,0,Math.cos(Math.min(n+d,b))*c),r.setXYZ(u+2,0,0,0),m+=3;}t.addGroup(k,m,e);k+=m;m=0;}var b=this.audio,c=this.range,d=this.divisionsInnerAngle,e=this.divisionsOuterAngle,f=L.degToRad(b.panner.coneInnerAngle);b=L.degToRad(b.panner.coneOuterAngle);var g=f/2,h=b/2,k=0,m=0,n,u,t=this.geometry,r=t.attributes.position;t.clearGroups();a(-h,-g,e,0);a(-g,g,d,1);a(g,h,e,0);r.needsUpdate=!0;f===b&&(this.material[0].visible=!1);};kd.prototype.dispose=function(){this.geometry.dispose();this.material[0].dispose();this.material[1].dispose();};var De=new n(),Lf=new n(),Ni=new Y();re.prototype=Object.create(ca.prototype);re.prototype.constructor=re;re.prototype.update=function(){this.object.updateMatrixWorld(!0);Ni.getNormalMatrix(this.object.matrixWorld);var a=this.object.matrixWorld,b=this.geometry.attributes.position,c=this.object.geometry,d=c.vertices;c=c.faces;for(var e=0,f=0,g=c.length;f<g;f++){var h=c[f],k=h.normal;De.copy(d[h.a]).add(d[h.b]).add(d[h.c]).divideScalar(3).applyMatrix4(a);Lf.copy(k).applyMatrix3(Ni).normalize().multiplyScalar(this.size).add(De);b.setXYZ(e,De.x,De.y,De.z);e+=1;b.setXYZ(e,Lf.x,Lf.y,Lf.z);e+=1;}b.needsUpdate=!0;};var Oi=new n(),Mf=new n(),Pi=new n();ld.prototype=Object.create(B.prototype);ld.prototype.constructor=ld;ld.prototype.dispose=function(){this.lightPlane.geometry.dispose();this.lightPlane.material.dispose();this.targetLine.geometry.dispose();this.targetLine.material.dispose();};ld.prototype.update=function(){Oi.setFromMatrixPosition(this.light.matrixWorld);Mf.setFromMatrixPosition(this.light.target.matrixWorld);Pi.subVectors(Mf,Oi);this.lightPlane.lookAt(Mf);void 0!==this.color?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color));this.targetLine.lookAt(Mf);this.targetLine.scale.z=Pi.length();};var of=new n(),ia=new bb();se.prototype=Object.create(ca.prototype);se.prototype.constructor=se;se.prototype.update=function(){var a=this.geometry,b=this.pointMap;ia.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse);qa("c",b,a,ia,0,0,-1);qa("t",b,a,ia,0,0,1);qa("n1",b,a,ia,-1,-1,-1);qa("n2",b,a,ia,1,-1,-1);qa("n3",b,a,ia,-1,1,-1);qa("n4",b,a,ia,1,1,-1);qa("f1",b,a,ia,-1,-1,1);qa("f2",b,a,ia,1,-1,1);qa("f3",b,a,ia,-1,1,1);qa("f4",b,a,ia,1,1,1);qa("u1",b,a,ia,.7,1.1,-1);qa("u2",b,a,ia,-.7,1.1,-1);qa("u3",b,a,ia,0,2,-1);qa("cf1",b,a,ia,-1,0,1);qa("cf2",b,a,ia,1,0,1);qa("cf3",b,a,ia,0,-1,1);qa("cf4",b,a,ia,0,1,1);qa("cn1",b,a,ia,-1,0,-1);qa("cn2",b,a,ia,1,0,-1);qa("cn3",b,a,ia,0,-1,-1);qa("cn4",b,a,ia,0,1,-1);a.getAttribute("position").needsUpdate=!0;};var Nf=new ab();sb.prototype=Object.create(ca.prototype);sb.prototype.constructor=sb;sb.prototype.update=function(a){void 0!==a&&console.warn("THREE.BoxHelper: .update() has no longer arguments.");void 0!==this.object&&Nf.setFromObject(this.object);if(!Nf.isEmpty()){a=Nf.min;var b=Nf.max,c=this.geometry.attributes.position,d=c.array;d[0]=b.x;d[1]=b.y;d[2]=b.z;d[3]=a.x;d[4]=b.y;d[5]=b.z;d[6]=a.x;d[7]=a.y;d[8]=b.z;d[9]=b.x;d[10]=a.y;d[11]=b.z;d[12]=b.x;d[13]=b.y;d[14]=a.z;d[15]=a.x;d[16]=b.y;d[17]=a.z;d[18]=a.x;d[19]=a.y;d[20]=a.z;d[21]=b.x;d[22]=a.y;d[23]=a.z;c.needsUpdate=!0;this.geometry.computeBoundingSphere();}};sb.prototype.setFromObject=function(a){this.object=a;this.update();return this;};sb.prototype.copy=function(a){ca.prototype.copy.call(this,a);this.object=a.object;return this;};sb.prototype.clone=function(){return new this.constructor().copy(this);};te.prototype=Object.create(ca.prototype);te.prototype.constructor=te;te.prototype.updateMatrixWorld=function(a){var b=this.box;b.isEmpty()||(b.getCenter(this.position),b.getSize(this.scale),this.scale.multiplyScalar(.5),B.prototype.updateMatrixWorld.call(this,a));};ue.prototype=Object.create(xa.prototype);ue.prototype.constructor=ue;ue.prototype.updateMatrixWorld=function(a){var b=-this.plane.constant;1E-8>Math.abs(b)&&(b=1E-8);this.scale.set(.5*this.size,.5*this.size,b);this.children[0].material.side=0>b?1:0;this.lookAt(this.plane.normal);B.prototype.updateMatrixWorld.call(this,a);};var Qi=new n(),pf,Lg;tb.prototype=Object.create(B.prototype);tb.prototype.constructor=tb;tb.prototype.setDirection=function(a){.99999<a.y?this.quaternion.set(0,0,0,1):-.99999>a.y?this.quaternion.set(1,0,0,0):(Qi.set(a.z,0,-a.x).normalize(),this.quaternion.setFromAxisAngle(Qi,Math.acos(a.y)));};tb.prototype.setLength=function(a,b,c){void 0===b&&(b=.2*a);void 0===c&&(c=.2*b);this.line.scale.set(1,Math.max(1E-4,a-b),1);this.line.updateMatrix();this.cone.scale.set(c,b,c);this.cone.position.y=a;this.cone.updateMatrix();};tb.prototype.setColor=function(a){this.line.material.color.set(a);this.cone.material.color.set(a);};tb.prototype.copy=function(a){B.prototype.copy.call(this,a,!1);this.line.copy(a.line);this.cone.copy(a.cone);return this;};tb.prototype.clone=function(){return new this.constructor().copy(this);};ve.prototype=Object.create(ca.prototype);ve.prototype.constructor=ve;D.create=function(a,b){console.log("THREE.Curve.create() has been deprecated");a.prototype=Object.create(D.prototype);a.prototype.constructor=a;a.prototype.getPoint=b;return a;};Object.assign(rb.prototype,{createPointsGeometry:function createPointsGeometry(a){console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");a=this.getPoints(a);return this.createGeometry(a);},createSpacedPointsGeometry:function createSpacedPointsGeometry(a){console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");a=this.getSpacedPoints(a);return this.createGeometry(a);},createGeometry:function createGeometry(a){console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");for(var b=new F(),c=0,d=a.length;c<d;c++){var e=a[c];b.vertices.push(new n(e.x,e.y,e.z||0));}return b;}});Object.assign(Wa.prototype,{fromPoints:function fromPoints(a){console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints().");this.setFromPoints(a);}});ji.prototype=Object.create(ya.prototype);ki.prototype=Object.create(ya.prototype);Mg.prototype=Object.create(ya.prototype);Object.assign(Mg.prototype,{initFromArray:function initFromArray(){console.error("THREE.Spline: .initFromArray() has been removed.");},getControlPointsArray:function getControlPointsArray(){console.error("THREE.Spline: .getControlPointsArray() has been removed.");},reparametrizeByArcLength:function reparametrizeByArcLength(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.");}});mf.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.");};fd.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.");};Object.assign(S.prototype,{extractUrlBase:function extractUrlBase(a){console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead.");return fh.extractUrlBase(a);}});S.Handlers={add:function add(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.");},get:function get(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.");}};Object.assign(hf.prototype,{setTexturePath:function setTexturePath(a){console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath().");return this.setResourcePath(a);}});Object.assign(Jg.prototype,{center:function center(a){console.warn("THREE.Box2: .center() has been renamed to .getCenter().");return this.getCenter(a);},empty:function empty(){console.warn("THREE.Box2: .empty() has been renamed to .isEmpty().");return this.isEmpty();},isIntersectionBox:function isIntersectionBox(a){console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a);},size:function size(a){console.warn("THREE.Box2: .size() has been renamed to .getSize().");return this.getSize(a);}});Object.assign(ab.prototype,{center:function center(a){console.warn("THREE.Box3: .center() has been renamed to .getCenter().");return this.getCenter(a);},empty:function empty(){console.warn("THREE.Box3: .empty() has been renamed to .isEmpty().");return this.isEmpty();},isIntersectionBox:function isIntersectionBox(a){console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a);},isIntersectionSphere:function isIntersectionSphere(a){console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().");return this.intersectsSphere(a);},size:function size(a){console.warn("THREE.Box3: .size() has been renamed to .getSize().");return this.getSize(a);}});Kg.prototype.center=function(a){console.warn("THREE.Line3: .center() has been renamed to .getCenter().");return this.getCenter(a);};Object.assign(L,{random16:function random16(){console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead.");return Math.random();},nearestPowerOfTwo:function nearestPowerOfTwo(a){console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo().");return L.floorPowerOfTwo(a);},nextPowerOfTwo:function nextPowerOfTwo(a){console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo().");return L.ceilPowerOfTwo(a);}});Object.assign(Y.prototype,{flattenToArrayOffset:function flattenToArrayOffset(a,b){console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");return this.toArray(a,b);},multiplyVector3:function multiplyVector3(a){console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");return a.applyMatrix3(this);},multiplyVector3Array:function multiplyVector3Array(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.");},applyToBuffer:function applyToBuffer(a){console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.");return this.applyToBufferAttribute(a);},applyToVector3Array:function applyToVector3Array(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.");}});Object.assign(U.prototype,{extractPosition:function extractPosition(a){console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().");return this.copyPosition(a);},flattenToArrayOffset:function flattenToArrayOffset(a,b){console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");return this.toArray(a,b);},getPosition:function getPosition(){console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");return new n().setFromMatrixColumn(this,3);},setRotationFromQuaternion:function setRotationFromQuaternion(a){console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");return this.makeRotationFromQuaternion(a);},multiplyToArray:function multiplyToArray(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");},multiplyVector3:function multiplyVector3(a){console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this);},multiplyVector4:function multiplyVector4(a){console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this);},multiplyVector3Array:function multiplyVector3Array(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.");},rotateAxis:function rotateAxis(a){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");a.transformDirection(this);},crossVector:function crossVector(a){console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this);},translate:function translate(){console.error("THREE.Matrix4: .translate() has been removed.");},rotateX:function rotateX(){console.error("THREE.Matrix4: .rotateX() has been removed.");},rotateY:function rotateY(){console.error("THREE.Matrix4: .rotateY() has been removed.");},rotateZ:function rotateZ(){console.error("THREE.Matrix4: .rotateZ() has been removed.");},rotateByAxis:function rotateByAxis(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.");},applyToBuffer:function applyToBuffer(a){console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.");return this.applyToBufferAttribute(a);},applyToVector3Array:function applyToVector3Array(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.");},makeFrustum:function makeFrustum(a,b,c,d,e,f){console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead.");return this.makePerspective(a,b,d,c,e,f);}});cb.prototype.isIntersectionLine=function(a){console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().");return this.intersectsLine(a);};ua.prototype.multiplyVector3=function(a){console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");return a.applyQuaternion(this);};Object.assign(Sb.prototype,{isIntersectionBox:function isIntersectionBox(a){console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a);},isIntersectionPlane:function isIntersectionPlane(a){console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().");return this.intersectsPlane(a);},isIntersectionSphere:function isIntersectionSphere(a){console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().");return this.intersectsSphere(a);}});Object.assign(R.prototype,{area:function area(){console.warn("THREE.Triangle: .area() has been renamed to .getArea().");return this.getArea();},barycoordFromPoint:function barycoordFromPoint(a,b){console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().");return this.getBarycoord(a,b);},midpoint:function midpoint(a){console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint().");return this.getMidpoint(a);},normal:function normal(a){console.warn("THREE.Triangle: .normal() has been renamed to .getNormal().");return this.getNormal(a);},plane:function plane(a){console.warn("THREE.Triangle: .plane() has been renamed to .getPlane().");return this.getPlane(a);}});Object.assign(R,{barycoordFromPoint:function barycoordFromPoint(a,b,c,d,e){console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().");return R.getBarycoord(a,b,c,d,e);},normal:function normal(a,b,c,d){console.warn("THREE.Triangle: .normal() has been renamed to .getNormal().");return R.getNormal(a,b,c,d);}});Object.assign(Jb.prototype,{extractAllPoints:function extractAllPoints(a){console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead.");return this.extractPoints(a);},extrude:function extrude(a){console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead.");return new fc(this,a);},makeGeometry:function makeGeometry(a){console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead.");return new gc(this,a);}});Object.assign(w.prototype,{fromAttribute:function fromAttribute(a,b,c){console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute().");return this.fromBufferAttribute(a,b,c);},distanceToManhattan:function distanceToManhattan(a){console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo().");return this.manhattanDistanceTo(a);},lengthManhattan:function lengthManhattan(){console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength().");return this.manhattanLength();}});Object.assign(n.prototype,{setEulerFromRotationMatrix:function setEulerFromRotationMatrix(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.");},setEulerFromQuaternion:function setEulerFromQuaternion(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.");},getPositionFromMatrix:function getPositionFromMatrix(a){console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");return this.setFromMatrixPosition(a);},getScaleFromMatrix:function getScaleFromMatrix(a){console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");return this.setFromMatrixScale(a);},getColumnFromMatrix:function getColumnFromMatrix(a,b){console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");return this.setFromMatrixColumn(b,a);},applyProjection:function applyProjection(a){console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead.");return this.applyMatrix4(a);},fromAttribute:function fromAttribute(a,b,c){console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute().");return this.fromBufferAttribute(a,b,c);},distanceToManhattan:function distanceToManhattan(a){console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo().");return this.manhattanDistanceTo(a);},lengthManhattan:function lengthManhattan(){console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength().");return this.manhattanLength();}});Object.assign(aa.prototype,{fromAttribute:function fromAttribute(a,b,c){console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute().");return this.fromBufferAttribute(a,b,c);},lengthManhattan:function lengthManhattan(){console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength().");return this.manhattanLength();}});Object.assign(F.prototype,{computeTangents:function computeTangents(){console.error("THREE.Geometry: .computeTangents() has been removed.");},computeLineDistances:function computeLineDistances(){console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.");}});Object.assign(B.prototype,{getChildByName:function getChildByName(a){console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");return this.getObjectByName(a);},renderDepth:function renderDepth(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.");},translate:function translate(a,b){console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");return this.translateOnAxis(b,a);},getWorldRotation:function getWorldRotation(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.");}});Object.defineProperties(B.prototype,{eulerOrder:{get:function get(){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");return this.rotation.order;},set:function set(a){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");this.rotation.order=a;}},useQuaternion:{get:function get(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");},set:function set(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");}}});Object.defineProperties(Nd.prototype,{objects:{get:function get(){console.warn("THREE.LOD: .objects has been renamed to .levels.");return this.levels;}}});Object.defineProperty(Le.prototype,"useVertexTexture",{get:function get(){console.warn("THREE.Skeleton: useVertexTexture has been removed.");},set:function set(){console.warn("THREE.Skeleton: useVertexTexture has been removed.");}});Od.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.");};Object.defineProperty(D.prototype,"__arcLengthDivisions",{get:function get(){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.");return this.arcLengthDivisions;},set:function set(a){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.");this.arcLengthDivisions=a;}});na.prototype.setLens=function(a,b){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup.");void 0!==b&&(this.filmGauge=b);this.setFocalLength(a);};Object.defineProperties(da.prototype,{onlyShadow:{set:function set(){console.warn("THREE.Light: .onlyShadow has been removed.");}},shadowCameraFov:{set:function set(a){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov.");this.shadow.camera.fov=a;}},shadowCameraLeft:{set:function set(a){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left.");this.shadow.camera.left=a;}},shadowCameraRight:{set:function set(a){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right.");this.shadow.camera.right=a;}},shadowCameraTop:{set:function set(a){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top.");this.shadow.camera.top=a;}},shadowCameraBottom:{set:function set(a){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.");this.shadow.camera.bottom=a;}},shadowCameraNear:{set:function set(a){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near.");this.shadow.camera.near=a;}},shadowCameraFar:{set:function set(a){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far.");this.shadow.camera.far=a;}},shadowCameraVisible:{set:function set(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.");}},shadowBias:{set:function set(a){console.warn("THREE.Light: .shadowBias is now .shadow.bias.");this.shadow.bias=a;}},shadowDarkness:{set:function set(){console.warn("THREE.Light: .shadowDarkness has been removed.");}},shadowMapWidth:{set:function set(a){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.");this.shadow.mapSize.width=a;}},shadowMapHeight:{set:function set(a){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.");this.shadow.mapSize.height=a;}}});Object.defineProperties(O.prototype,{length:{get:function get(){console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead.");return this.array.length;}}});Object.assign(O.prototype,{copyIndicesArray:function copyIndicesArray(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.");},setArray:function setArray(a){console.warn("THREE.BufferAttribute: .setArray has been deprecated. Use BufferGeometry .setAttribute to replace/resize attribute buffers");this.count=void 0!==a?a.length/this.itemSize:0;this.array=a;return this;}});Object.assign(E.prototype,{addIndex:function addIndex(a){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().");this.setIndex(a);},addDrawCall:function addDrawCall(a,b,c){void 0!==c&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.");console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup().");this.addGroup(a,b);},clearDrawCalls:function clearDrawCalls(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().");this.clearGroups();},computeTangents:function computeTangents(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.");},computeOffsets:function computeOffsets(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.");}});Object.defineProperties(E.prototype,{drawcalls:{get:function get(){console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups.");return this.groups;}},offsets:{get:function get(){console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups.");return this.groups;}}});Object.assign(Gb.prototype,{setArray:function setArray(a){console.warn("THREE.InterleavedBuffer: .setArray has been deprecated. Use BufferGeometry .setAttribute to replace/resize attribute buffers");this.count=void 0!==a?a.length/this.stride:0;this.array=a;return this;}});Object.assign(eb.prototype,{getArrays:function getArrays(){console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.");},addShapeList:function addShapeList(){console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.");},addShape:function addShape(){console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.");}});Object.defineProperties(lf.prototype,{dynamic:{set:function set(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.");}},onUpdate:{value:function value(){console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead.");return this;}}});Object.defineProperties(M.prototype,{wrapAround:{get:function get(){console.warn("THREE.Material: .wrapAround has been removed.");},set:function set(){console.warn("THREE.Material: .wrapAround has been removed.");}},overdraw:{get:function get(){console.warn("THREE.Material: .overdraw has been removed.");},set:function set(){console.warn("THREE.Material: .overdraw has been removed.");}},wrapRGB:{get:function get(){console.warn("THREE.Material: .wrapRGB has been removed.");return new H();}},shading:{get:function get(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.");},set:function set(a){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.");this.flatShading=1===a;}},stencilMask:{get:function get(){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead.");return this.stencilFuncMask;},set:function set(a){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead.");this.stencilFuncMask=a;}}});Object.defineProperties(Ra.prototype,{metal:{get:function get(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead.");return!1;},set:function set(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead");}}});Object.defineProperties(ma.prototype,{derivatives:{get:function get(){console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");return this.extensions.derivatives;},set:function set(a){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");this.extensions.derivatives=a;}}});Object.assign(hg.prototype,{clearTarget:function clearTarget(a,b,c,d){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead.");this.setRenderTarget(a);this.clear(b,c,d);},animate:function animate(a){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop().");this.setAnimationLoop(a);},getCurrentRenderTarget:function getCurrentRenderTarget(){console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget().");return this.getRenderTarget();},getMaxAnisotropy:function getMaxAnisotropy(){console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy().");return this.capabilities.getMaxAnisotropy();},getPrecision:function getPrecision(){console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision.");return this.capabilities.precision;},resetGLState:function resetGLState(){console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset().");return this.state.reset();},supportsFloatTextures:function supportsFloatTextures(){console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' ).");return this.extensions.get("OES_texture_float");},supportsHalfFloatTextures:function supportsHalfFloatTextures(){console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' ).");return this.extensions.get("OES_texture_half_float");},supportsStandardDerivatives:function supportsStandardDerivatives(){console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' ).");return this.extensions.get("OES_standard_derivatives");},supportsCompressedTextureS3TC:function supportsCompressedTextureS3TC(){console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' ).");return this.extensions.get("WEBGL_compressed_texture_s3tc");},supportsCompressedTexturePVRTC:function supportsCompressedTexturePVRTC(){console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' ).");return this.extensions.get("WEBGL_compressed_texture_pvrtc");},supportsBlendMinMax:function supportsBlendMinMax(){console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' ).");return this.extensions.get("EXT_blend_minmax");},supportsVertexTextures:function supportsVertexTextures(){console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures.");return this.capabilities.vertexTextures;},supportsInstancedArrays:function supportsInstancedArrays(){console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' ).");return this.extensions.get("ANGLE_instanced_arrays");},enableScissorTest:function enableScissorTest(a){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().");this.setScissorTest(a);},initMaterial:function initMaterial(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");},addPrePlugin:function addPrePlugin(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");},addPostPlugin:function addPostPlugin(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");},updateShadowMap:function updateShadowMap(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.");},setFaceCulling:function setFaceCulling(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.");},allocTextureUnit:function allocTextureUnit(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.");},setTexture:function setTexture(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.");},setTexture2D:function setTexture2D(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.");},setTextureCube:function setTextureCube(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.");},getActiveMipMapLevel:function getActiveMipMapLevel(){console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel().");return this.getActiveMipmapLevel();}});Object.defineProperties(hg.prototype,{shadowMapEnabled:{get:function get(){return this.shadowMap.enabled;},set:function set(a){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.");this.shadowMap.enabled=a;}},shadowMapType:{get:function get(){return this.shadowMap.type;},set:function set(a){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.");this.shadowMap.type=a;}},shadowMapCullFace:{get:function get(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");},set:function set(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");}},context:{get:function get(){console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead.");return this.getContext();}}});Object.defineProperties(Jh.prototype,{cullFace:{get:function get(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");},set:function set(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");}},renderReverseSided:{get:function get(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");},set:function set(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");}},renderSingleSided:{get:function get(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");},set:function set(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");}}});Object.defineProperties(Ab.prototype,{activeCubeFace:{set:function set(){console.warn("THREE.WebGLRenderTargetCube: .activeCubeFace has been removed. It is now the second parameter of WebGLRenderer.setRenderTarget().");}},activeMipMapLevel:{set:function set(){console.warn("THREE.WebGLRenderTargetCube: .activeMipMapLevel has been removed. It is now the third parameter of WebGLRenderer.setRenderTarget().");}}});Object.defineProperties(la.prototype,{wrapS:{get:function get(){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");return this.texture.wrapS;},set:function set(a){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");this.texture.wrapS=a;}},wrapT:{get:function get(){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");return this.texture.wrapT;},set:function set(a){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");this.texture.wrapT=a;}},magFilter:{get:function get(){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");return this.texture.magFilter;},set:function set(a){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");this.texture.magFilter=a;}},minFilter:{get:function get(){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");return this.texture.minFilter;},set:function set(a){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");this.texture.minFilter=a;}},anisotropy:{get:function get(){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");return this.texture.anisotropy;},set:function set(a){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");this.texture.anisotropy=a;}},offset:{get:function get(){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");return this.texture.offset;},set:function set(a){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");this.texture.offset=a;}},repeat:{get:function get(){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");return this.texture.repeat;},set:function set(a){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");this.texture.repeat=a;}},format:{get:function get(){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");return this.texture.format;},set:function set(a){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");this.texture.format=a;}},type:{get:function get(){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");return this.texture.type;},set:function set(a){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");this.texture.type=a;}},generateMipmaps:{get:function get(){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");return this.texture.generateMipmaps;},set:function set(a){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");this.texture.generateMipmaps=a;}}});Object.defineProperties(gg.prototype,{standing:{set:function set(){console.warn("THREE.WebVRManager: .standing has been removed.");}},userHeight:{set:function set(){console.warn("THREE.WebVRManager: .userHeight has been removed.");}}});dd.prototype.load=function(a){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");var b=this;new jf().load(a,function(a){b.setBuffer(a);});return this;};Eg.prototype.getData=function(){console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData().");return this.getFrequencyData();};Dc.prototype.updateCubeMap=function(a,b){console.warn("THREE.CubeCamera: .updateCubeMap() is now .update().");return this.update(a,b);};Kb.crossOrigin=void 0;Kb.loadTexture=function(a,b,c,d){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");var e=new Ve();e.setCrossOrigin(this.crossOrigin);a=e.load(a,c,void 0,d);b&&(a.mapping=b);return a;};Kb.loadTextureCube=function(a,b,c,d){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");var e=new Ue();e.setCrossOrigin(this.crossOrigin);a=e.load(a,c,void 0,d);b&&(a.mapping=b);return a;};Kb.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.");};Kb.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.");};"undefined"!==typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"109"}}));k.ACESFilmicToneMapping=5;k.AddEquation=100;k.AddOperation=2;k.AdditiveBlending=2;k.AlphaFormat=1021;k.AlwaysDepth=1;k.AlwaysStencilFunc=519;k.AmbientLight=bf;k.AmbientLightProbe=zg;k.AnimationClip=Ma;k.AnimationLoader=qg;k.AnimationMixer=Gg;k.AnimationObjectGroup=ci;k.AnimationUtils=pa;k.ArcCurve=cd;k.ArrayCamera=Jd;k.ArrowHelper=tb;k.Audio=dd;k.AudioAnalyser=Eg;k.AudioContext=Cg;k.AudioListener=Bg;k.AudioLoader=jf;k.AxesHelper=ve;k.AxisHelper=function(a){console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper.");return new ve(a);};k.BackSide=1;k.BasicDepthPacking=3200;k.BasicShadowMap=0;k.BinaryTextureLoader=function(a){console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader.");return new Te(a);};k.Bone=ig;k.BooleanKeyframeTrack=Pe;k.BoundingBoxHelper=function(a,b){console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead.");return new sb(a,b);};k.Box2=Jg;k.Box3=ab;k.Box3Helper=te;k.BoxBufferGeometry=Gd;k.BoxGeometry=Zg;k.BoxHelper=sb;k.BufferAttribute=O;k.BufferGeometry=E;k.BufferGeometryLoader=gf;k.ByteType=1010;k.Cache=uc;k.Camera=bb;k.CameraHelper=se;k.CanvasRenderer=function(){console.error("THREE.CanvasRenderer has been removed");};k.CanvasTexture=Pd;k.CatmullRomCurve3=ya;k.CineonToneMapping=4;k.CircleBufferGeometry=Yc;k.CircleGeometry=je;k.ClampToEdgeWrapping=1001;k.Clock=Ag;k.ClosedSplineCurve3=ji;k.Color=H;k.ColorKeyframeTrack=Qe;k.CompressedTexture=Lc;k.CompressedTextureLoader=rg;k.ConeBufferGeometry=ie;k.ConeGeometry=he;k.CubeCamera=Dc;k.CubeGeometry=Zg;k.CubeReflectionMapping=301;k.CubeRefractionMapping=302;k.CubeTexture=ob;k.CubeTextureLoader=Ue;k.CubeUVReflectionMapping=306;k.CubeUVRefractionMapping=307;k.CubicBezierCurve=Sa;k.CubicBezierCurve3=gb;k.CubicInterpolant=Ne;k.CullFaceBack=1;k.CullFaceFront=2;k.CullFaceFrontBack=3;k.CullFaceNone=0;k.Curve=D;k.CurvePath=rb;k.CustomBlending=5;k.CylinderBufferGeometry=qb;k.CylinderGeometry=ic;k.Cylindrical=hi;k.DataTexture=Zb;k.DataTexture2DArray=Ec;k.DataTexture3D=Fc;k.DataTextureLoader=Te;k.DecrementStencilOp=7683;k.DecrementWrapStencilOp=34056;k.DefaultLoadingManager=Zh;k.DepthFormat=1026;k.DepthStencilFormat=1027;k.DepthTexture=Qd;k.DirectionalLight=af;k.DirectionalLightHelper=ld;k.DirectionalLightShadow=$e;k.DiscreteInterpolant=Oe;k.DodecahedronBufferGeometry=Qc;k.DodecahedronGeometry=Wd;k.DoubleSide=2;k.DstAlphaFactor=206;k.DstColorFactor=208;k.DynamicBufferAttribute=function(a,b){console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead.");return new O(a,b).setDynamic(!0);};k.EdgesGeometry=Xc;k.EdgesHelper=function(a,b){console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead.");return new ca(new Xc(a.geometry),new Q({color:void 0!==b?b:16777215}));};k.EllipseCurve=Ja;k.EqualDepth=4;k.EqualStencilFunc=514;k.EquirectangularReflectionMapping=303;k.EquirectangularRefractionMapping=304;k.Euler=Qb;k.EventDispatcher=Ba;k.ExtrudeBufferGeometry=eb;k.ExtrudeGeometry=fc;k.Face3=zc;k.Face4=function(a,b,c,d,e,f,g){console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");return new zc(a,b,c,e,f,g);};k.FaceColors=1;k.FaceNormalsHelper=re;k.FileLoader=Na;k.FlatShading=1;k.Float32Attribute=function(a,b){console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead.");return new A(a,b);};k.Float32BufferAttribute=A;k.Float64Attribute=function(a,b){console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead.");return new Cd(a,b);};k.Float64BufferAttribute=Cd;k.FloatType=1015;k.Fog=Je;k.FogExp2=Ie;k.Font=wg;k.FontLoader=xg;k.FrontFaceDirectionCCW=1;k.FrontFaceDirectionCW=0;k.FrontSide=0;k.Frustum=Ed;k.GammaEncoding=3007;k.Geometry=F;k.GeometryUtils={merge:function merge(a,b,c){console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");if(b.isMesh){b.matrixAutoUpdate&&b.updateMatrix();var d=b.matrix;b=b.geometry;}a.merge(b,d,c);},center:function center(a){console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");return a.center();}};k.GreaterDepth=6;k.GreaterEqualDepth=5;k.GreaterEqualStencilFunc=518;k.GreaterStencilFunc=516;k.GridHelper=mf;k.Group=Hc;k.HalfFloatType=1016;k.HemisphereLight=We;k.HemisphereLightHelper=id;k.HemisphereLightProbe=yg;k.IcosahedronBufferGeometry=Pc;k.IcosahedronGeometry=Vd;k.ImageBitmapLoader=ug;k.ImageLoader=bd;k.ImageUtils=Kb;k.ImmediateRenderObject=pe;k.IncrementStencilOp=7682;k.IncrementWrapStencilOp=34055;k.InstancedBufferAttribute=ff;k.InstancedBufferGeometry=ef;k.InstancedInterleavedBuffer=Hg;k.InstancedMesh=jg;k.Int16Attribute=function(a,b){console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead.");return new Ad(a,b);};k.Int16BufferAttribute=Ad;k.Int32Attribute=function(a,b){console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead.");return new Bd(a,b);};k.Int32BufferAttribute=Bd;k.Int8Attribute=function(a,b){console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead.");return new xd(a,b);};k.Int8BufferAttribute=xd;k.IntType=1013;k.InterleavedBuffer=Gb;k.InterleavedBufferAttribute=Kd;k.Interpolant=Ia;k.InterpolateDiscrete=2300;k.InterpolateLinear=2301;k.InterpolateSmooth=2302;k.InvertStencilOp=5386;k.JSONLoader=function(){console.error("THREE.JSONLoader has been removed.");};k.KeepStencilOp=7680;k.KeyframeTrack=oa;k.LOD=Nd;k.LatheBufferGeometry=Wc;k.LatheGeometry=ge;k.Layers=Pf;k.LensFlare=function(){console.error("THREE.LensFlare has been moved to /examples/js/objects/Lensflare.js");};k.LessDepth=2;k.LessEqualDepth=3;k.LessEqualStencilFunc=515;k.LessStencilFunc=513;k.Light=da;k.LightProbe=Xa;k.LightProbeHelper=jd;k.LightShadow=ib;k.Line=xa;k.Line3=Kg;k.LineBasicMaterial=Q;k.LineCurve=za;k.LineCurve3=Ta;k.LineDashedMaterial=pc;k.LineLoop=Me;k.LinePieces=1;k.LineSegments=ca;k.LineStrip=0;k.LinearEncoding=3E3;k.LinearFilter=1006;k.LinearInterpolant=ke;k.LinearMipMapLinearFilter=1008;k.LinearMipMapNearestFilter=1007;k.LinearMipmapLinearFilter=1008;k.LinearMipmapNearestFilter=1007;k.LinearToneMapping=1;k.Loader=S;k.LoaderUtils=fh;k.LoadingManager=pg;k.LogLuvEncoding=3003;k.LoopOnce=2200;k.LoopPingPong=2202;k.LoopRepeat=2201;k.LuminanceAlphaFormat=1025;k.LuminanceFormat=1024;k.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2};k.Material=M;k.MaterialLoader=df;k.Math=L;k.Matrix3=Y;k.Matrix4=U;k.MaxEquation=104;k.Mesh=ja;k.MeshBasicMaterial=Ga;k.MeshDepthMaterial=Db;k.MeshDistanceMaterial=Eb;k.MeshFaceMaterial=function(a){console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead.");return a;};k.MeshLambertMaterial=nc;k.MeshMatcapMaterial=oc;k.MeshNormalMaterial=mc;k.MeshPhongMaterial=Ra;k.MeshPhysicalMaterial=kc;k.MeshStandardMaterial=fb;k.MeshToonMaterial=lc;k.MinEquation=103;k.MirroredRepeatWrapping=1002;k.MixOperation=1;k.MultiMaterial=function(a){void 0===a&&(a=[]);console.warn("THREE.MultiMaterial has been removed. Use an Array instead.");a.isMultiMaterial=!0;a.materials=a;a.clone=function(){return a.slice();};return a;};k.MultiplyBlending=4;k.MultiplyOperation=0;k.NearestFilter=1003;k.NearestMipMapLinearFilter=1005;k.NearestMipMapNearestFilter=1004;k.NearestMipmapLinearFilter=1005;k.NearestMipmapNearestFilter=1004;k.NeverDepth=0;k.NeverStencilFunc=512;k.NoBlending=0;k.NoColors=0;k.NoToneMapping=0;k.NormalBlending=1;k.NotEqualDepth=7;k.NotEqualStencilFunc=517;k.NumberKeyframeTrack=$c;k.Object3D=B;k.ObjectLoader=hf;k.ObjectSpaceNormalMap=1;k.OctahedronBufferGeometry=cc;k.OctahedronGeometry=Ud;k.OneFactor=201;k.OneMinusDstAlphaFactor=207;k.OneMinusDstColorFactor=209;k.OneMinusSrcAlphaFactor=205;k.OneMinusSrcColorFactor=203;k.OrthographicCamera=oe;k.PCFShadowMap=1;k.PCFSoftShadowMap=2;k.ParametricBufferGeometry=Nc;k.ParametricGeometry=Rd;k.Particle=function(a){console.warn("THREE.Particle has been renamed to THREE.Sprite.");return new Ld(a);};k.ParticleBasicMaterial=function(a){console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial.");return new Qa(a);};k.ParticleSystem=function(a,b){console.warn("THREE.ParticleSystem has been renamed to THREE.Points.");return new Kc(a,b);};k.ParticleSystemMaterial=function(a){console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial.");return new Qa(a);};k.Path=Wa;k.PerspectiveCamera=na;k.Plane=cb;k.PlaneBufferGeometry=$b;k.PlaneGeometry=Fd;k.PlaneHelper=ue;k.PointCloud=function(a,b){console.warn("THREE.PointCloud has been renamed to THREE.Points.");return new Kc(a,b);};k.PointCloudMaterial=function(a){console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial.");return new Qa(a);};k.PointLight=Ze;k.PointLightHelper=gd;k.Points=Kc;k.PointsMaterial=Qa;k.PolarGridHelper=nf;k.PolyhedronBufferGeometry=Ca;k.PolyhedronGeometry=Sd;k.PositionalAudio=Dg;k.PositionalAudioHelper=kd;k.PropertyBinding=Aa;k.PropertyMixer=Fg;k.QuadraticBezierCurve=Ua;k.QuadraticBezierCurve3=hb;k.Quaternion=ua;k.QuaternionKeyframeTrack=le;k.QuaternionLinearInterpolant=Re;k.REVISION="109";k.RGBADepthPacking=3201;k.RGBAFormat=1023;k.RGBA_ASTC_10x10_Format=37819;k.RGBA_ASTC_10x5_Format=37816;k.RGBA_ASTC_10x6_Format=37817;k.RGBA_ASTC_10x8_Format=37818;k.RGBA_ASTC_12x10_Format=37820;k.RGBA_ASTC_12x12_Format=37821;k.RGBA_ASTC_4x4_Format=37808;k.RGBA_ASTC_5x4_Format=37809;k.RGBA_ASTC_5x5_Format=37810;k.RGBA_ASTC_6x5_Format=37811;k.RGBA_ASTC_6x6_Format=37812;k.RGBA_ASTC_8x5_Format=37813;k.RGBA_ASTC_8x6_Format=37814;k.RGBA_ASTC_8x8_Format=37815;k.RGBA_PVRTC_2BPPV1_Format=35843;k.RGBA_PVRTC_4BPPV1_Format=35842;k.RGBA_S3TC_DXT1_Format=33777;k.RGBA_S3TC_DXT3_Format=33778;k.RGBA_S3TC_DXT5_Format=33779;k.RGBDEncoding=3006;k.RGBEEncoding=3002;k.RGBEFormat=1023;k.RGBFormat=1022;k.RGBM16Encoding=3005;k.RGBM7Encoding=3004;k.RGB_ETC1_Format=36196;k.RGB_PVRTC_2BPPV1_Format=35841;k.RGB_PVRTC_4BPPV1_Format=35840;k.RGB_S3TC_DXT1_Format=33776;k.RawShaderMaterial=Zc;k.Ray=Sb;k.Raycaster=ei;k.RectAreaLight=cf;k.RectAreaLightHelper=hd;k.RedFormat=1028;k.ReinhardToneMapping=2;k.RepeatWrapping=1E3;k.ReplaceStencilOp=7681;k.ReverseSubtractEquation=102;k.RingBufferGeometry=Vc;k.RingGeometry=fe;k.Scene=wd;k.SceneUtils={createMultiMaterialObject:function createMultiMaterialObject(){console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js");},detach:function detach(){console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js");},attach:function attach(){console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js");}};k.ShaderChunk=N;k.ShaderLib=db;k.ShaderMaterial=ma;k.ShadowMaterial=jc;k.Shape=Jb;k.ShapeBufferGeometry=hc;k.ShapeGeometry=gc;k.ShapePath=vg;k.ShapeUtils=pb;k.ShortType=1011;k.Skeleton=Le;k.SkeletonHelper=fd;k.SkinnedMesh=Od;k.SmoothShading=2;k.Sphere=nb;k.SphereBufferGeometry=Ib;k.SphereGeometry=ee;k.Spherical=gi;k.SphericalHarmonics3=kf;k.SphericalReflectionMapping=305;k.Spline=Mg;k.SplineCurve=Va;k.SplineCurve3=ki;k.SpotLight=Ye;k.SpotLightHelper=ed;k.SpotLightShadow=Xe;k.Sprite=Ld;k.SpriteMaterial=Hb;k.SrcAlphaFactor=204;k.SrcAlphaSaturateFactor=210;k.SrcColorFactor=202;k.StereoCamera=ai;k.StringKeyframeTrack=Se;k.SubtractEquation=101;k.SubtractiveBlending=3;k.TOUCH={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3};k.TangentSpaceNormalMap=0;k.TetrahedronBufferGeometry=Oc;k.TetrahedronGeometry=Td;k.TextBufferGeometry=Uc;k.TextGeometry=de;k.Texture=W;k.TextureLoader=Ve;k.TorusBufferGeometry=Sc;k.TorusGeometry=Zd;k.TorusKnotBufferGeometry=Rc;k.TorusKnotGeometry=Yd;k.Triangle=R;k.TriangleFanDrawMode=2;k.TriangleStripDrawMode=1;k.TrianglesDrawMode=0;k.TubeBufferGeometry=dc;k.TubeGeometry=Xd;k.UVMapping=300;k.Uint16Attribute=function(a,b){console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead.");return new Tb(a,b);};k.Uint16BufferAttribute=Tb;k.Uint32Attribute=function(a,b){console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead.");return new Ub(a,b);};k.Uint32BufferAttribute=Ub;k.Uint8Attribute=function(a,b){console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead.");return new yd(a,b);};k.Uint8BufferAttribute=yd;k.Uint8ClampedAttribute=function(a,b){console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead.");return new zd(a,b);};k.Uint8ClampedBufferAttribute=zd;k.Uncharted2ToneMapping=3;k.Uniform=lf;k.UniformsLib=I;k.UniformsUtils=Ak;k.UnsignedByteType=1009;k.UnsignedInt248Type=1020;k.UnsignedIntType=1014;k.UnsignedShort4444Type=1017;k.UnsignedShort5551Type=1018;k.UnsignedShort565Type=1019;k.UnsignedShortType=1012;k.VSMShadowMap=3;k.Vector2=w;k.Vector3=n;k.Vector4=aa;k.VectorKeyframeTrack=ad;k.Vertex=function(a,b,c){console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead.");return new n(a,b,c);};k.VertexColors=2;k.VertexNormalsHelper=qe;k.VideoTexture=mg;k.WebGLMultisampleRenderTarget=Of;k.WebGLRenderTarget=la;k.WebGLRenderTargetCube=Ab;k.WebGLRenderer=hg;k.WebGLUtils=Kh;k.WireframeGeometry=Mc;k.WireframeHelper=function(a,b){console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead.");return new ca(new Mc(a.geometry),new Q({color:void 0!==b?b:16777215}));};k.WrapAroundEnding=2402;k.XHRLoader=function(a){console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader.");return new Na(a);};k.ZeroCurvatureEnding=2400;k.ZeroFactor=200;k.ZeroSlopeEnding=2401;k.ZeroStencilOp=0;k.sRGBEncoding=3001;Object.defineProperty(k,"__esModule",{value:!0});});

/***/ }),

/***/ 2:
/*!***************************************************************************************************************************************!*\
  !*** multi ./resources/js/webgl/three.js ./resources/js/webgl/dat-gui.js ./resources/js/webgl/gsap.js ./resources/js/webgl/sketch.js ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/bicskas/sites/mugenrace/resources/js/webgl/three.js */"./resources/js/webgl/three.js");
__webpack_require__(/*! /Users/bicskas/sites/mugenrace/resources/js/webgl/dat-gui.js */"./resources/js/webgl/dat-gui.js");
__webpack_require__(/*! /Users/bicskas/sites/mugenrace/resources/js/webgl/gsap.js */"./resources/js/webgl/gsap.js");
module.exports = __webpack_require__(/*! /Users/bicskas/sites/mugenrace/resources/js/webgl/sketch.js */"./resources/js/webgl/sketch.js");


/***/ })

/******/ });