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

/***/ "./src/screens/dashboard/UserDashboard.jsx":
/*!*************************************************!*\
  !*** ./src/screens/dashboard/UserDashboard.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserDashboard; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_dashboard_userDashboard_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/dashboard/userDashboard.module.css */ \"./src/styles/dashboard/userDashboard.module.css\");\n/* harmony import */ var _styles_dashboard_userDashboard_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_dashboard_userDashboard_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _s = $RefreshSig$();\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(o);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _iterableToArrayLimit(r, l) {\n    var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"];\n    if (null != t) {\n        var e, n, i, u, a = [], f = !0, o = !1;\n        try {\n            if (i = (t = t.call(r)).next, 0 === l) {\n                if (Object(t) !== t) return;\n                f = !1;\n            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);\n        } catch (r) {\n            o = !0, n = r;\n        } finally{\n            try {\n                if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return;\n            } finally{\n                if (o) throw n;\n            }\n        }\n        return a;\n    }\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\n\n\n\n\nfunction UserDashboard() {\n    _s();\n    var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"), _useState2 = _slicedToArray(_useState, 2), fullName = _useState2[0], setFullName = _useState2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        var storedFullName = localStorage.getItem(\"nome\");\n        if (storedFullName) {\n            setFullName(storedFullName);\n        }\n    }, []);\n    var firstName = fullName.split(\" \")[0];\n    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: (_styles_dashboard_userDashboard_module_css__WEBPACK_IMPORTED_MODULE_3___default().dashboard)\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n        className: (_styles_dashboard_userDashboard_module_css__WEBPACK_IMPORTED_MODULE_3___default().titulo)\n    }, \"Seja bem-vindo(a), \", userName, \"!\"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n        className: (_styles_dashboard_userDashboard_module_css__WEBPACK_IMPORTED_MODULE_3___default().paragrafo)\n    }, \"No momento a \\xe1rea do usu\\xe1rio encontra-se em constru\\xe7\\xe3o.\"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: (_styles_dashboard_userDashboard_module_css__WEBPACK_IMPORTED_MODULE_3___default().imageContainer)\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n        src: \"/images/construcao.webp\",\n        alt: \"Em constru\\xe7\\xe3o\",\n        className: (_styles_dashboard_userDashboard_module_css__WEBPACK_IMPORTED_MODULE_3___default().desktopImage),\n        width: 470,\n        height: 350,\n        fetchPriority: \"high\"\n    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n        src: \"/images/construcao.webp\",\n        alt: \"Em constru\\xe7\\xe3o\",\n        className: (_styles_dashboard_userDashboard_module_css__WEBPACK_IMPORTED_MODULE_3___default().mobileImage),\n        width: 300,\n        height: 250,\n        fetchPriority: \"high\"\n    })));\n}\n_s(UserDashboard, \"6tcCUJem28piTJsPtoaTdMv36hQ=\");\n_c = UserDashboard;\nvar _c;\n$RefreshReg$(_c, \"UserDashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyZWVucy9kYXNoYm9hcmQvVXNlckRhc2hib2FyZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDWDtBQUNUO0FBQ3NDO0FBRXJELFNBQVNNOztJQUNwQixJQUFBQyxZQUFnQ04sK0NBQVFBLENBQUMsS0FBR08sYUFBQUMsZUFBQUYsV0FBQSxJQUFyQ0csV0FBUUYsVUFBQSxLQUFFRyxjQUFXSCxVQUFBO0lBRTVCTixnREFBU0EsQ0FBQztRQUNOLElBQU1VLGlCQUFpQkMsYUFBYUMsT0FBTyxDQUFDO1FBQzVDLElBQUlGLGdCQUFnQjtZQUNoQkQsWUFBWUM7UUFDaEI7SUFDSixHQUFHLEVBQUU7SUFFTCxJQUFNRyxZQUFZTCxTQUFTTSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFFeEMscUJBQ0loQiwwREFBQTtRQUFLa0IsV0FBV2IsNkZBQU9jO0lBQVUsaUJBQzdCbkIsMERBQUE7UUFBSWtCLFdBQVdiLDBGQUFPZTtJQUFPLEdBQUMsdUJBQW9CQyxVQUFTLE1BQU0sY0FDakVyQiwwREFBQTtRQUFHa0IsV0FBV2IsNkZBQU9pQjtJQUFVLEdBQUMsd0VBQTJELGNBRTNGdEIsMERBQUE7UUFBS2tCLFdBQVdiLGtHQUFPa0I7SUFBZSxpQkFDbEN2QiwwREFBQSxDQUFDSSxtREFBS0EsRUFBQTtRQUNGb0IsS0FBSTtRQUNKQyxLQUFJO1FBQ0pQLFdBQVdiLGdHQUFvQjtRQUMvQnNCLE9BQU87UUFDUEMsUUFBUTtRQUNSQyxlQUFjO0lBQU0sSUFDdEIsY0FDRjdCLDBEQUFBLENBQUNJLG1EQUFLQSxFQUFBO1FBQ0ZvQixLQUFJO1FBQ0pDLEtBQUk7UUFDSlAsV0FBV2IsK0ZBQW1CO1FBQzlCc0IsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLGVBQWM7SUFBTTtBQUt4QztHQXJDd0J2QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2NyZWVucy9kYXNoYm9hcmQvVXNlckRhc2hib2FyZC5qc3g/MGNiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2Rhc2hib2FyZC91c2VyRGFzaGJvYXJkLm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckRhc2hib2FyZCgpIHtcclxuICAgIGNvbnN0IFtmdWxsTmFtZSwgc2V0RnVsbE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3RvcmVkRnVsbE5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbm9tZScpO1xyXG4gICAgICAgIGlmIChzdG9yZWRGdWxsTmFtZSkge1xyXG4gICAgICAgICAgICBzZXRGdWxsTmFtZShzdG9yZWRGdWxsTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGZpcnN0TmFtZSA9IGZ1bGxOYW1lLnNwbGl0KCcgJylbMF07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhc2hib2FyZH0+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXR1bG99PlNlamEgYmVtLXZpbmRvKGEpLCB7dXNlck5hbWV9ITwvaDE+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBhcmFncmFmb30+Tm8gbW9tZW50byBhIMOhcmVhIGRvIHVzdcOhcmlvIGVuY29udHJhLXNlIGVtIGNvbnN0cnXDp8Ojby48L3A+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2NvbnN0cnVjYW8ud2VicFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIkVtIGNvbnN0cnXDp8Ojb1wiIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRlc2t0b3BJbWFnZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQ3MH0gXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszNTB9IFxyXG4gICAgICAgICAgICAgICAgICAgIGZldGNoUHJpb3JpdHk9XCJoaWdoXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9jb25zdHJ1Y2FvLndlYnBcIiBcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJFbSBjb25zdHJ1w6fDo29cIiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2JpbGVJbWFnZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwMH0gXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyNTB9IFxyXG4gICAgICAgICAgICAgICAgICAgIGZldGNoUHJpb3JpdHk9XCJoaWdoXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkltYWdlIiwic3R5bGVzIiwiVXNlckRhc2hib2FyZCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImZ1bGxOYW1lIiwic2V0RnVsbE5hbWUiLCJzdG9yZWRGdWxsTmFtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmaXJzdE5hbWUiLCJzcGxpdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJkYXNoYm9hcmQiLCJ0aXR1bG8iLCJ1c2VyTmFtZSIsInBhcmFncmFmbyIsImltYWdlQ29udGFpbmVyIiwic3JjIiwiYWx0IiwiZGVza3RvcEltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJmZXRjaFByaW9yaXR5IiwibW9iaWxlSW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/screens/dashboard/UserDashboard.jsx\n"));

/***/ })

});