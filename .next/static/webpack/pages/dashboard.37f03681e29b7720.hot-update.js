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

/***/ "./src/pages/dashboard.js":
/*!********************************!*\
  !*** ./src/pages/dashboard.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DashboardPage; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dashboard_components_loginHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard/components/loginHeader */ \"./src/dashboard/components/loginHeader.jsx\");\n/* harmony import */ var _dashboard_components_loginFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard/components/loginFooter */ \"./src/dashboard/components/loginFooter.jsx\");\n/* harmony import */ var _dashboard_screens_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboard/screens/index */ \"./src/dashboard/screens/index.jsx\");\n\n\n\n\n\nfunction DashboardPage() {\n    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_1___default()), null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"title\", null, \"Escrit\\xf3rio K\\xfcster - Dashboard\"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n        name: \"description\",\n        content: \"Dashboard da plataforma do Escrit\\xf3rio K\\xfcster.\"\n    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n        name: \"viewport\",\n        content: \"width=device-width, initial-scale=1\"\n    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_dashboard_components_loginHeader__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        onButtonClick: handleButtonClick\n    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_dashboard_screens_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_dashboard_components_loginFooter__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null));\n}\n_c = DashboardPage;\nvar _c;\n$RefreshReg$(_c, \"DashboardPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGFzaGJvYXJkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ0c7QUFDaUM7QUFDQTtBQUNYO0FBRW5DLFNBQVNLO0lBQ3RCLHFCQUNFTCwwREFBQSxDQUFBQSx1REFBQSxzQkFDRUEsMERBQUEsQ0FBQ0Msa0RBQUlBLEVBQUEsb0JBQ0hELDBEQUFBLGdCQUFPLHdDQUFxQyxjQUM1Q0EsMERBQUE7UUFBTVEsTUFBSztRQUFjQyxTQUFRO0lBQStDLElBQUcsY0FDbkZULDBEQUFBO1FBQU1RLE1BQUs7UUFBV0MsU0FBUTtJQUFxQyxJQUFHLGNBQ3RFVCwwREFBQTtRQUFNVSxLQUFJO1FBQU9DLE1BQUs7SUFBYyxLQUMvQixjQUNQWCwwREFBQSxDQUFDRSx5RUFBV0EsRUFBQTtRQUFDVSxlQUFlQztJQUFrQixJQUFHLGNBQ2pEYiwwREFBQSxDQUFDSSxnRUFBU0EsRUFBQSxPQUFHLGNBQ2JKLDBEQUFBLENBQUNHLHlFQUFXQSxFQUFBO0FBR2xCO0tBZHdCRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZGFzaGJvYXJkLmpzPzM2NjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTG9naW5IZWFkZXIgZnJvbSAnLi4vZGFzaGJvYXJkL2NvbXBvbmVudHMvbG9naW5IZWFkZXInO1xyXG5pbXBvcnQgTG9naW5Gb290ZXIgZnJvbSAnLi4vZGFzaGJvYXJkL2NvbXBvbmVudHMvbG9naW5Gb290ZXInO1xyXG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJy4uL2Rhc2hib2FyZC9zY3JlZW5zL2luZGV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZFBhZ2UoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Fc2NyaXTDs3JpbyBLw7xzdGVyIC0gRGFzaGJvYXJkPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiRGFzaGJvYXJkIGRhIHBsYXRhZm9ybWEgZG8gRXNjcml0w7NyaW8gS8O8c3Rlci5cIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxMb2dpbkhlYWRlciBvbkJ1dHRvbkNsaWNrPXtoYW5kbGVCdXR0b25DbGlja30gLz5cclxuICAgICAgPERhc2hib2FyZCAvPlxyXG4gICAgICA8TG9naW5Gb290ZXIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZCIsIkxvZ2luSGVhZGVyIiwiTG9naW5Gb290ZXIiLCJEYXNoYm9hcmQiLCJEYXNoYm9hcmRQYWdlIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwibmFtZSIsImNvbnRlbnQiLCJyZWwiLCJocmVmIiwib25CdXR0b25DbGljayIsImhhbmRsZUJ1dHRvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/dashboard.js\n"));

/***/ })

});