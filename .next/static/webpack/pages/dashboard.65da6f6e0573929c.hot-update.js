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

/***/ "./src/dashboard/components/Main.js":
/*!******************************************!*\
  !*** ./src/dashboard/components/Main.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _screens_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../screens/home */ \"./src/dashboard/screens/home.js\");\n/* harmony import */ var _screens_clients__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../screens/clients */ \"./src/dashboard/screens/clients.js\");\n/* harmony import */ var _screens_gerenciamento__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../screens/gerenciamento */ \"./src/dashboard/screens/gerenciamento.js\");\n/* harmony import */ var _screens_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../screens/services */ \"./src/dashboard/screens/services.js\");\n/* harmony import */ var _screens_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../screens/settings */ \"./src/dashboard/screens/settings.js\");\n/* harmony import */ var _screens_notFound__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../screens/notFound */ \"./src/dashboard/screens/notFound.js\");\n\n\n\n\n\n\n\nfunction Main(_ref) {\n    var currentPage = _ref.currentPage;\n    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"main\", {\n        styl: true\n    }, currentPage === \"home\" && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_screens_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), currentPage === \"clients\" && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_screens_clients__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), currentPage === \"contact\" && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_screens_gerenciamento__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), currentPage === \"services\" && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_screens_services__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), currentPage === \"settings\" && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_screens_settings__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null), ![\n        \"home\",\n        \"clients\",\n        \"contact\",\n        \"services\",\n        \"settings\"\n    ].includes(currentPage) && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_screens_notFound__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null));\n}\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGFzaGJvYXJkL2NvbXBvbmVudHMvTWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUI7QUFDUztBQUNNO0FBQ007QUFDSjtBQUNBO0FBQ0E7QUFFM0IsU0FBU08sS0FBSUMsSUFBQTtJQUFrQixJQUFmQyxjQUFXRCxLQUFYQyxXQUFXO0lBQ3hDLHFCQUNFVCwwREFBQTtRQUFNVyxNQUFJO0lBQUEsR0FDTEYsZ0JBQWdCLFVBQU0sY0FBSVQsMERBQUEsQ0FBQ0MscURBQUlBLEVBQUEsT0FDL0JRLGdCQUFnQixhQUFTLGNBQUlULDBEQUFBLENBQUNFLHdEQUFPQSxFQUFBLE9BQ3JDTyxnQkFBZ0IsYUFBUyxjQUFJVCwwREFBQSxDQUFDRyw4REFBT0EsRUFBQSxPQUNyQ00sZ0JBQWdCLGNBQVUsY0FBSVQsMERBQUEsQ0FBQ0kseURBQVFBLEVBQUEsT0FDdkNLLGdCQUFnQixjQUFVLGNBQUlULDBEQUFBLENBQUNLLHlEQUFRQSxFQUFBLE9BQ3ZDLENBQUM7UUFBQztRQUFRO1FBQVc7UUFBVztRQUFZO0tBQVcsQ0FBQ08sUUFBUSxDQUFDSCxnQkFBWSxjQUFJVCwwREFBQSxDQUFDTSx5REFBUUEsRUFBQTtBQUduRztLQVh3QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2Rhc2hib2FyZC9jb21wb25lbnRzL01haW4uanM/MWJmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuLi9zY3JlZW5zL2hvbWUnO1xyXG5pbXBvcnQgQ2xpZW50cyBmcm9tICcuLi9zY3JlZW5zL2NsaWVudHMnO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLi9zY3JlZW5zL2dlcmVuY2lhbWVudG8nO1xyXG5pbXBvcnQgU2VydmljZXMgZnJvbSAnLi4vc2NyZWVucy9zZXJ2aWNlcyc7XHJcbmltcG9ydCBTZXR0aW5ncyBmcm9tICcuLi9zY3JlZW5zL3NldHRpbmdzJztcclxuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4uL3NjcmVlbnMvbm90Rm91bmQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbih7IGN1cnJlbnRQYWdlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gc3R5bD5cclxuICAgICAgICB7Y3VycmVudFBhZ2UgPT09ICdob21lJyAmJiA8SG9tZSAvPn1cclxuICAgICAgICB7Y3VycmVudFBhZ2UgPT09ICdjbGllbnRzJyAmJiA8Q2xpZW50cyAvPn1cclxuICAgICAgICB7Y3VycmVudFBhZ2UgPT09ICdjb250YWN0JyAmJiA8Q29udGFjdCAvPn1cclxuICAgICAgICB7Y3VycmVudFBhZ2UgPT09ICdzZXJ2aWNlcycgJiYgPFNlcnZpY2VzIC8+fVxyXG4gICAgICAgIHtjdXJyZW50UGFnZSA9PT0gJ3NldHRpbmdzJyAmJiA8U2V0dGluZ3MgLz59XHJcbiAgICAgICAgeyFbJ2hvbWUnLCAnY2xpZW50cycsICdjb250YWN0JywgJ3NlcnZpY2VzJywgJ3NldHRpbmdzJ10uaW5jbHVkZXMoY3VycmVudFBhZ2UpICYmIDxOb3RGb3VuZCAvPn1cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiSG9tZSIsIkNsaWVudHMiLCJDb250YWN0IiwiU2VydmljZXMiLCJTZXR0aW5ncyIsIk5vdEZvdW5kIiwiTWFpbiIsIl9yZWYiLCJjdXJyZW50UGFnZSIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsIiwiaW5jbHVkZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/dashboard/components/Main.js\n"));

/***/ })

});