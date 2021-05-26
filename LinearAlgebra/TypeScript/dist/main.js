/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _matrices_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matrices/matrix */ \"./src/matrices/matrix.ts\");\n\r\nconst testBaseMatrix2 = () => {\r\n    console.log(\"TestEqual\");\r\n    _matrices_matrix__WEBPACK_IMPORTED_MODULE_0__.TestBaseMatrix2.test_equal();\r\n    console.log(\"TestCreate\");\r\n    _matrices_matrix__WEBPACK_IMPORTED_MODULE_0__.TestBaseMatrix2.test_create();\r\n    console.log(\"TestZero\");\r\n    _matrices_matrix__WEBPACK_IMPORTED_MODULE_0__.TestBaseMatrix2.test_zero();\r\n    console.log(\"TestAdd\");\r\n    _matrices_matrix__WEBPACK_IMPORTED_MODULE_0__.TestBaseMatrix2.test_add();\r\n    console.log(\"TestSub\");\r\n    _matrices_matrix__WEBPACK_IMPORTED_MODULE_0__.TestBaseMatrix2.test_sub();\r\n    console.log(\"TestIdentity\");\r\n    _matrices_matrix__WEBPACK_IMPORTED_MODULE_0__.TestBaseMatrix2.test_identity();\r\n    console.log(\"TestScalarMulti\");\r\n    _matrices_matrix__WEBPACK_IMPORTED_MODULE_0__.TestBaseMatrix2.test_scalar_multiply();\r\n    console.log(\"TestMatrixMulti\");\r\n    _matrices_matrix__WEBPACK_IMPORTED_MODULE_0__.TestBaseMatrix2.test_matrix_multiply();\r\n};\r\nconst main = () => {\r\n    testBaseMatrix2();\r\n};\r\nwindow.onload = main;\r\n\n\n//# sourceURL=webpack://basic_canvas/./src/main.ts?");

/***/ }),

/***/ "./src/matrices/matrix.ts":
/*!********************************!*\
  !*** ./src/matrices/matrix.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TestBaseMatrix2\": () => (/* reexport safe */ _test_test_base_matrix2__WEBPACK_IMPORTED_MODULE_0__.TestBaseMatrix2)\n/* harmony export */ });\n/* harmony import */ var _test_test_base_matrix2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test/test_base_matrix2 */ \"./src/matrices/test/test_base_matrix2.ts\");\n\r\n\n\n//# sourceURL=webpack://basic_canvas/./src/matrices/matrix.ts?");

/***/ }),

/***/ "./src/matrices/matrix2.ts":
/*!*********************************!*\
  !*** ./src/matrices/matrix2.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"create\": () => (/* binding */ create),\n/* harmony export */   \"equal\": () => (/* binding */ equal),\n/* harmony export */   \"zero\": () => (/* binding */ zero),\n/* harmony export */   \"identity\": () => (/* binding */ identity),\n/* harmony export */   \"add\": () => (/* binding */ add),\n/* harmony export */   \"sub\": () => (/* binding */ sub),\n/* harmony export */   \"scalarMultiply\": () => (/* binding */ scalarMultiply),\n/* harmony export */   \"multiply\": () => (/* binding */ multiply)\n/* harmony export */ });\n/**\r\n * @todo Create English Version\r\n */\r\n// import { BaseMatrix } from \"./base_matrix\";\r\n/*\r\nclass Matrix2 implements BaseMatrix {\r\n  private matrix: Float32Array;\r\n  constructor(matrix: Float32Array = new Float32Array(4)) {\r\n    this.matrix = matrix;\r\n  }\r\n}*/\r\n// 関数の設計\r\n// クラス実装のメソッド\r\n/**\r\n * @description Creating a 2x2 Matrix\r\n * @static create: (a11: number, a12: number, a21: number, a22: number\r\n * @param {number} a11 a11 is a scalar value\r\n * @param {number} a12 a12 is a scalar value\r\n * @param {number} a21 a21 is a scalar value\r\n * @param {number} a22 a22 is a scalar value\r\n * @returns matrix\r\n */\r\nconst create = (a11, a12, a21, a22) => {\r\n    const matrix = new Float32Array(4);\r\n    matrix[0] = a11;\r\n    matrix[1] = a12;\r\n    matrix[2] = a21;\r\n    matrix[3] = a22;\r\n    return matrix;\r\n};\r\n/**\r\n * @description Equality Matrix4\r\n * @method\r\n * @param {Float32Array} a Matrix A\r\n * @param {Float32Array} b Matrix B\r\n * @returns flag\r\n */\r\nconst equal = (a, b) => {\r\n    let flag = false;\r\n    let sum = 0;\r\n    if (a.length === b.length) {\r\n        [...Array(a.length).keys()].forEach((count) => {\r\n            if (a[count] === b[count]) {\r\n                sum += 1;\r\n            }\r\n        });\r\n    }\r\n    else {\r\n        throw new Error(\"Error Matrix A and B do not have the same size\");\r\n    }\r\n    if (sum === 4) {\r\n        flag = true;\r\n        return flag;\r\n    }\r\n    return flag;\r\n};\r\n/**\r\n * @description Zero Matrix\r\n * @method\r\n * @returns matrix\r\n */\r\nconst zero = () => {\r\n    const matrix = new Float32Array(4);\r\n    matrix[0] = 0;\r\n    matrix[1] = 0;\r\n    matrix[2] = 0;\r\n    matrix[3] = 0;\r\n    return matrix;\r\n};\r\n/**\r\n * @description Identity Matrix\r\n * @method\r\n * @returns matrix\r\n */\r\nconst identity = () => {\r\n    const matrix = new Float32Array(4);\r\n    matrix[0] = 1;\r\n    matrix[1] = 0;\r\n    matrix[2] = 0;\r\n    matrix[3] = 1;\r\n    return matrix;\r\n};\r\n/**\r\n * @description matrix addition\r\n * @param {Float32Array} a Matrix A\r\n * @param {Float32Array} b Matrix B\r\n * @returns matrix\r\n */\r\nconst add = (a, b) => {\r\n    const matrix = new Float32Array(4);\r\n    if (a.length === b.length) {\r\n        [...Array(a.length).keys()].forEach((count) => {\r\n            matrix[count] = a[count] + b[count];\r\n        });\r\n    }\r\n    else {\r\n        throw new Error(\"Error Matrix A and B do not have the same size\");\r\n    }\r\n    return matrix;\r\n};\r\n/**\r\n * @description matrix matrix subtraction\r\n * @param {Float32Array} a Matrix A\r\n * @param {Float32Array} b Matrix B\r\n * @returns matrix\r\n */\r\nconst sub = (a, b) => {\r\n    const matrix = new Float32Array(4);\r\n    if (a.length === b.length) {\r\n        [...Array(a.length).keys()].forEach((count) => {\r\n            matrix[count] = a[count] - b[count];\r\n        });\r\n    }\r\n    else {\r\n        throw new Error(\"Error Matrix A and B do not have the same size\");\r\n    }\r\n    return matrix;\r\n};\r\n/**\r\n * @description scalar multiple\r\n * @param s scalar value\r\n * @param a matrix A\r\n * @returns matrix\r\n */\r\nconst scalarMultiply = (s, a) => {\r\n    const matrix = new Float32Array(4);\r\n    if (a.length === 4) {\r\n        [...Array(a.length).keys()].forEach((count) => {\r\n            matrix[count] = s * a[count];\r\n        });\r\n    }\r\n    else {\r\n        throw new Error(\"Error The number of matrix components is four.\");\r\n    }\r\n    return matrix;\r\n};\r\n/**\r\n * @description matrix multiply\r\n * @param a matrix A\r\n * @param b matrix B\r\n * @returns matrix\r\n */\r\nconst multiply = (a, b) => {\r\n    const matrix = new Float32Array(4);\r\n    if (a.length === 4 && b.length === 4) {\r\n        matrix[0] = a[0] * b[0] + a[1] * b[2];\r\n        matrix[1] = a[0] * b[1] + a[1] * b[3];\r\n        matrix[2] = a[2] * b[0] + a[3] * b[2];\r\n        matrix[3] = a[2] * b[1] + a[3] * b[3];\r\n    }\r\n    else {\r\n        throw new Error(\"The number of components of matrix A and matrix B is 4 each.\");\r\n    }\r\n    return matrix;\r\n};\r\n\n\n//# sourceURL=webpack://basic_canvas/./src/matrices/matrix2.ts?");

/***/ }),

/***/ "./src/matrices/test/test_base_matrix2.ts":
/*!************************************************!*\
  !*** ./src/matrices/test/test_base_matrix2.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TestBaseMatrix2\": () => (/* binding */ TestBaseMatrix2)\n/* harmony export */ });\n/* harmony import */ var _matrix2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matrix2 */ \"./src/matrices/matrix2.ts\");\n\r\nclass TestBaseMatrix2 {\r\n}\r\nTestBaseMatrix2.test_equal = () => {\r\n    const matrix1 = new Float32Array([1.0, 0.0, 0.0, 1.0]);\r\n    const matrix2 = new Float32Array([1.0, 0.0, 0.0, 1.0]);\r\n    console.log(matrix1.length === matrix2.length);\r\n    console.log(_matrix2__WEBPACK_IMPORTED_MODULE_0__.equal(matrix1, matrix2));\r\n};\r\nTestBaseMatrix2.test_create = () => {\r\n    const matrix1 = _matrix2__WEBPACK_IMPORTED_MODULE_0__.create(1.0, 0.0, 0.0, 1.0);\r\n    const testMatrix = new Float32Array([1.0, 0.0, 0.0, 1.0]);\r\n    console.log(matrix1.length === 4);\r\n    console.log(_matrix2__WEBPACK_IMPORTED_MODULE_0__.equal(matrix1, testMatrix));\r\n};\r\nTestBaseMatrix2.test_zero = () => {\r\n    const matrix1 = _matrix2__WEBPACK_IMPORTED_MODULE_0__.zero();\r\n    const matrix2 = new Float32Array([0.0, 0.0, 0.0, 0.0]);\r\n    console.log(matrix1.length === 4 && matrix2.length === 4);\r\n    console.log(_matrix2__WEBPACK_IMPORTED_MODULE_0__.equal(matrix1, matrix2));\r\n};\r\nTestBaseMatrix2.test_add = () => {\r\n    const matrix1 = _matrix2__WEBPACK_IMPORTED_MODULE_0__.create(10, 20, 30, 40);\r\n    const matrix2 = _matrix2__WEBPACK_IMPORTED_MODULE_0__.create(10, 20, 30, 40);\r\n    console.log(matrix1.length === 4 && matrix2.length === 4);\r\n    const test_matrix1 = _matrix2__WEBPACK_IMPORTED_MODULE_0__.add(matrix1, matrix2);\r\n    const test_matrix2 = _matrix2__WEBPACK_IMPORTED_MODULE_0__.create(20, 40, 60, 80);\r\n    console.log(_matrix2__WEBPACK_IMPORTED_MODULE_0__.equal(test_matrix1, test_matrix2) === true);\r\n};\r\nTestBaseMatrix2.test_sub = () => {\r\n    const matrix1 = _matrix2__WEBPACK_IMPORTED_MODULE_0__.create(10, 20, 30, 40);\r\n    const matrix2 = _matrix2__WEBPACK_IMPORTED_MODULE_0__.create(10, 20, 30, 40);\r\n    console.log(matrix1.length === 4 && matrix2.length === 4);\r\n    const test_matrix1 = _matrix2__WEBPACK_IMPORTED_MODULE_0__.sub(matrix1, matrix2);\r\n    const test_matrix2 = _matrix2__WEBPACK_IMPORTED_MODULE_0__.create(0, 0, 0, 0);\r\n    console.log(_matrix2__WEBPACK_IMPORTED_MODULE_0__.equal(test_matrix1, test_matrix2) === true);\r\n};\r\nTestBaseMatrix2.test_identity = () => {\r\n    const matrix = _matrix2__WEBPACK_IMPORTED_MODULE_0__.identity();\r\n    console.log(matrix.length === 4);\r\n    const test_matrix = _matrix2__WEBPACK_IMPORTED_MODULE_0__.create(1, 0, 0, 1);\r\n    console.log(_matrix2__WEBPACK_IMPORTED_MODULE_0__.equal(matrix, test_matrix));\r\n};\r\nTestBaseMatrix2.test_scalar_multiply = () => {\r\n    const s = 2;\r\n    const matrixA = _matrix2__WEBPACK_IMPORTED_MODULE_0__.create(10, 20, 30, 40);\r\n    console.log(matrixA.length === 4);\r\n    const matrix = _matrix2__WEBPACK_IMPORTED_MODULE_0__.scalarMultiply(s, matrixA);\r\n    const test_matrix = _matrix2__WEBPACK_IMPORTED_MODULE_0__.create(20, 40, 60, 80);\r\n    console.log(_matrix2__WEBPACK_IMPORTED_MODULE_0__.equal(matrix, test_matrix));\r\n};\r\nTestBaseMatrix2.test_matrix_multiply = () => {\r\n    const matrixA = _matrix2__WEBPACK_IMPORTED_MODULE_0__.create(1, 2, 3, 4);\r\n    const matrixB = _matrix2__WEBPACK_IMPORTED_MODULE_0__.create(5, 6, 7, 8);\r\n    console.log(matrixA.length === 4 && matrixB.length === 4);\r\n    const matrix1 = _matrix2__WEBPACK_IMPORTED_MODULE_0__.multiply(matrixA, matrixB);\r\n    const test_matrix1 = _matrix2__WEBPACK_IMPORTED_MODULE_0__.create(19, 22, 43, 50);\r\n    console.log(_matrix2__WEBPACK_IMPORTED_MODULE_0__.equal(matrix1, test_matrix1) === true);\r\n};\r\n\n\n//# sourceURL=webpack://basic_canvas/./src/matrices/test/test_base_matrix2.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;