"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/screens/dashboard/CollaboratorDashboard.jsx":
/*!*********************************************************!*\
  !*** ./src/screens/dashboard/CollaboratorDashboard.jsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\nvar _s = $RefreshSig$();\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(o);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _iterableToArrayLimit(r, l) {\n    var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"];\n    if (null != t) {\n        var e, n, i, u, a = [], f = !0, o = !1;\n        try {\n            if (i = (t = t.call(r)).next, 0 === l) {\n                if (Object(t) !== t) return;\n                f = !1;\n            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);\n        } catch (r) {\n            o = !0, n = r;\n        } finally{\n            try {\n                if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return;\n            } finally{\n                if (o) throw n;\n            }\n        }\n        return a;\n    }\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\n\n\n\nvar CollaboratorDashboard = function CollaboratorDashboard() {\n    _s();\n    var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"), _useState2 = _slicedToArray(_useState, 2), fullName = _useState2[0], setFullName = _useState2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        var storedFullName = localStorage.getItem(\"nome\");\n        setFullName(storedFullName);\n    }, []);\n    var firstName = fullName.split(\" \")[0];\n    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Bem-vindo, \", firstName, \"!\"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Voc\\xea \\xe9 um colaborador!\"));\n};\n_s(CollaboratorDashboard, \"6tcCUJem28piTJsPtoaTdMv36hQ=\");\n_c = CollaboratorDashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CollaboratorDashboard);\nvar _c;\n$RefreshReg$(_c, \"CollaboratorDashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyZWVucy9kYXNoYm9hcmQvQ29sbGFib3JhdG9yRGFzaGJvYXJkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ2tCO0FBQ0o7QUFFdkMsSUFBTUksd0JBQXdCLFNBQXhCQTs7SUFDRixJQUFBQyxZQUFnQ0osK0NBQVFBLENBQUMsS0FBR0ssYUFBQUMsZUFBQUYsV0FBQSxJQUFyQ0csV0FBUUYsVUFBQSxLQUFFRyxjQUFXSCxVQUFBO0lBRTVCSixnREFBU0EsQ0FBQztRQUNOLElBQU1RLGlCQUFpQkMsYUFBYUMsT0FBTyxDQUFDO1FBQzVDSCxZQUFZQztJQUNoQixHQUFHLEVBQUU7SUFFTCxJQUFNRyxZQUFZTCxTQUFTTSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFFeEMscUJBQ0lkLDBEQUFBLDRCQUNJQSwwREFBQSxhQUFJLGVBQVlhLFdBQVUsTUFBTSxjQUVoQ2IsMERBQUEsWUFBRztBQUdmO0dBakJNSTtLQUFBQTtBQW1CTiwrREFBZUEscUJBQXFCQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zY3JlZW5zL2Rhc2hib2FyZC9Db2xsYWJvcmF0b3JEYXNoYm9hcmQuanN4PzFmNGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgQ29sbGFib3JhdG9yRGFzaGJvYXJkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2Z1bGxOYW1lLCBzZXRGdWxsTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBzdG9yZWRGdWxsTmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdub21lJyk7XHJcbiAgICAgICAgc2V0RnVsbE5hbWUoc3RvcmVkRnVsbE5hbWUpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGZpcnN0TmFtZSA9IGZ1bGxOYW1lLnNwbGl0KCcgJylbMF07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+QmVtLXZpbmRvLCB7Zmlyc3ROYW1lfSE8L2gxPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPHA+Vm9jw6ogw6kgdW0gY29sYWJvcmFkb3IhPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbGxhYm9yYXRvckRhc2hib2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJDb2xsYWJvcmF0b3JEYXNoYm9hcmQiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJmdWxsTmFtZSIsInNldEZ1bGxOYW1lIiwic3RvcmVkRnVsbE5hbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmlyc3ROYW1lIiwic3BsaXQiLCJjcmVhdGVFbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/screens/dashboard/CollaboratorDashboard.jsx\n"));

/***/ })

});