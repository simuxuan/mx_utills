/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["_"] = factory();
	else
		root["_"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fc: () => (/* reexport safe */ _src_fc_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _src_fc_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/fc/index.js */ \"./lib/src/fc/index.js\");\n\r\n\r\n// 这样暴露出去，导入直接就是这个对象\r\n\r\n\r\n// 相当于 { fc } == _.default \r\n// export default {\r\n//     fc\r\n// }\n\n//# sourceURL=webpack://_/./lib/index.js?");

/***/ }),

/***/ "./lib/src/fc/control.js":
/*!*******************************!*\
  !*** ./lib/src/fc/control.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   lockHandler: () => (/* binding */ lockHandler),\n/* harmony export */   once: () => (/* binding */ once)\n/* harmony export */ });\n/**\r\n * @description 控制一段时间只执行一次\r\n * @param {function} func\r\n * @param {number}   long\r\n */\r\n\r\nconst once = (func, long = 500) => {\r\n  let isLock = false;\r\n  let handler = null;\r\n  let unlock = () => {\r\n    handler && clearTimeout(handler);\r\n    // 花500ms解锁\r\n    handler = setTimeout(function () {\r\n      isLock = false;\r\n      handler = null;\r\n    }, long);\r\n  };\r\n\r\n  return (...args) => {\r\n    if (isLock) {\r\n      return;\r\n    }\r\n    isLock = true;\r\n    unlock();\r\n    return func.apply(undefined, args);\r\n  };\r\n};\r\n\r\n/**\r\n * @description 控制异步函数在其执行时间内只能触发一次\r\n * @param {function} asyncFn -- 异步函数\r\n */\r\nconst lockHandler = function (asyncFn) {\r\n  let lock = false;\r\n  const unlock = async (...args) => {\r\n    await asyncFn(...args);\r\n    lock = false;\r\n  };\r\n  return async (...args) => {\r\n    if (lock) return;\r\n    lock = true;\r\n    unlock(...args);\r\n  };\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://_/./lib/src/fc/control.js?");

/***/ }),

/***/ "./lib/src/fc/index.js":
/*!*****************************!*\
  !*** ./lib/src/fc/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _control_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control.js */ \"./lib/src/fc/control.js\");\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n  ..._control_js__WEBPACK_IMPORTED_MODULE_0__\r\n});\n\n//# sourceURL=webpack://_/./lib/src/fc/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./lib/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});