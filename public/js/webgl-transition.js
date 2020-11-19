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

/***/ "./resources/js/webgl/demo7.js":
/*!*************************************!*\
  !*** ./resources/js/webgl/demo7.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// planetary
var sketch = new Sketch({
  debug: true,
  uniforms: {
    intensity: {
      value: 50.,
      type: 'f',
      min: 1.,
      max: 100
    }
  },
  fragment: "\n\t\tuniform float time;\n\t\tuniform float progress;\n\t\tuniform float intensity;\n\t\tuniform float width;\n\t\tuniform float scaleX;\n\t\tuniform float scaleY;\n\t\tuniform float transition;\n\t\tuniform float radius;\n\t\tuniform float swipe;\n\t\tuniform sampler2D texture1;\n\t\tuniform sampler2D texture2;\n\t\tuniform sampler2D displacement;\n\t\tuniform vec4 resolution;\n\t\tvarying vec2 vUv;\n\t\tmat2 rotate(float a) {\n\t\t\tfloat s = sin(a);\n\t\t\tfloat c = cos(a);\n\t\t\treturn mat2(c, -s, s, c);\n\t\t}\n\t\tconst float PI = 3.1415;\n\t\tconst float angle1 = PI *0.25;\n\t\tconst float angle2 = -PI *0.75;\n\n\n\t\tvoid main()\t{\n\t\t\tvec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);\n\n\t\t\tvec2 uvDivided = fract(newUV*vec2(intensity,1.));\n\n\n\t\t\tvec2 uvDisplaced1 = newUV + rotate(3.1415926/4.)*uvDivided*progress*0.1;\n\t\t\tvec2 uvDisplaced2 = newUV + rotate(3.1415926/4.)*uvDivided*(1. - progress)*0.1;\n\n\t\t\tvec4 t1 = texture2D(texture1,uvDisplaced1);\n\t\t\tvec4 t2 = texture2D(texture2,uvDisplaced2);\n\n\t\t\tgl_FragColor = mix(t1, t2, progress);\n\n\t\t}\n\n\t"
});

/***/ }),

/***/ 2:
/*!*******************************************!*\
  !*** multi ./resources/js/webgl/demo7.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bicskas/sites/mugenrace/resources/js/webgl/demo7.js */"./resources/js/webgl/demo7.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3dlYmdsL2RlbW83LmpzIl0sIm5hbWVzIjpbInNrZXRjaCIsIlNrZXRjaCIsImRlYnVnIiwidW5pZm9ybXMiLCJpbnRlbnNpdHkiLCJ2YWx1ZSIsInR5cGUiLCJtaW4iLCJtYXgiLCJmcmFnbWVudCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0EsSUFBSUEsTUFBTSxHQUFHLElBQUlDLE1BQUosQ0FBVztBQUNwQkMsT0FBSyxFQUFFLElBRGE7QUFFcEJDLFVBQVEsRUFBRTtBQUNOQyxhQUFTLEVBQUU7QUFBQ0MsV0FBSyxFQUFFLEdBQVI7QUFBYUMsVUFBSSxFQUFFLEdBQW5CO0FBQXdCQyxTQUFHLEVBQUUsRUFBN0I7QUFBaUNDLFNBQUcsRUFBRTtBQUF0QztBQURMLEdBRlU7QUFLcEJDLFVBQVE7QUFMWSxDQUFYLENBQWIsQyIsImZpbGUiOiIvanMvd2ViZ2wtdHJhbnNpdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG4iLCIvLyBwbGFuZXRhcnlcbmxldCBza2V0Y2ggPSBuZXcgU2tldGNoKHtcbiAgICBkZWJ1ZzogdHJ1ZSxcbiAgICB1bmlmb3Jtczoge1xuICAgICAgICBpbnRlbnNpdHk6IHt2YWx1ZTogNTAuLCB0eXBlOiAnZicsIG1pbjogMS4sIG1heDogMTAwfVxuICAgIH0sXG4gICAgZnJhZ21lbnQ6IGBcblx0XHR1bmlmb3JtIGZsb2F0IHRpbWU7XG5cdFx0dW5pZm9ybSBmbG9hdCBwcm9ncmVzcztcblx0XHR1bmlmb3JtIGZsb2F0IGludGVuc2l0eTtcblx0XHR1bmlmb3JtIGZsb2F0IHdpZHRoO1xuXHRcdHVuaWZvcm0gZmxvYXQgc2NhbGVYO1xuXHRcdHVuaWZvcm0gZmxvYXQgc2NhbGVZO1xuXHRcdHVuaWZvcm0gZmxvYXQgdHJhbnNpdGlvbjtcblx0XHR1bmlmb3JtIGZsb2F0IHJhZGl1cztcblx0XHR1bmlmb3JtIGZsb2F0IHN3aXBlO1xuXHRcdHVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmUxO1xuXHRcdHVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmUyO1xuXHRcdHVuaWZvcm0gc2FtcGxlcjJEIGRpc3BsYWNlbWVudDtcblx0XHR1bmlmb3JtIHZlYzQgcmVzb2x1dGlvbjtcblx0XHR2YXJ5aW5nIHZlYzIgdlV2O1xuXHRcdG1hdDIgcm90YXRlKGZsb2F0IGEpIHtcblx0XHRcdGZsb2F0IHMgPSBzaW4oYSk7XG5cdFx0XHRmbG9hdCBjID0gY29zKGEpO1xuXHRcdFx0cmV0dXJuIG1hdDIoYywgLXMsIHMsIGMpO1xuXHRcdH1cblx0XHRjb25zdCBmbG9hdCBQSSA9IDMuMTQxNTtcblx0XHRjb25zdCBmbG9hdCBhbmdsZTEgPSBQSSAqMC4yNTtcblx0XHRjb25zdCBmbG9hdCBhbmdsZTIgPSAtUEkgKjAuNzU7XG5cblxuXHRcdHZvaWQgbWFpbigpXHR7XG5cdFx0XHR2ZWMyIG5ld1VWID0gKHZVdiAtIHZlYzIoMC41KSkqcmVzb2x1dGlvbi56dyArIHZlYzIoMC41KTtcblxuXHRcdFx0dmVjMiB1dkRpdmlkZWQgPSBmcmFjdChuZXdVVip2ZWMyKGludGVuc2l0eSwxLikpO1xuXG5cblx0XHRcdHZlYzIgdXZEaXNwbGFjZWQxID0gbmV3VVYgKyByb3RhdGUoMy4xNDE1OTI2LzQuKSp1dkRpdmlkZWQqcHJvZ3Jlc3MqMC4xO1xuXHRcdFx0dmVjMiB1dkRpc3BsYWNlZDIgPSBuZXdVViArIHJvdGF0ZSgzLjE0MTU5MjYvNC4pKnV2RGl2aWRlZCooMS4gLSBwcm9ncmVzcykqMC4xO1xuXG5cdFx0XHR2ZWM0IHQxID0gdGV4dHVyZTJEKHRleHR1cmUxLHV2RGlzcGxhY2VkMSk7XG5cdFx0XHR2ZWM0IHQyID0gdGV4dHVyZTJEKHRleHR1cmUyLHV2RGlzcGxhY2VkMik7XG5cblx0XHRcdGdsX0ZyYWdDb2xvciA9IG1peCh0MSwgdDIsIHByb2dyZXNzKTtcblxuXHRcdH1cblxuXHRgXG59KTtcblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=