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

/***/ "./src/dashboard/pages/Admin.jsx":
/*!***************************************!*\
  !*** ./src/dashboard/pages/Admin.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Admin; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./src/dashboard/components/Header.js\");\n/* harmony import */ var _screens_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../screens/home */ \"./src/dashboard/screens/home.js\");\n/* harmony import */ var _screens_clients__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../screens/clients */ \"./src/dashboard/screens/clients.js\");\n/* harmony import */ var _screens_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../screens/contact */ \"./src/dashboard/screens/contact.js\");\n/* harmony import */ var _screens_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../screens/services */ \"./src/dashboard/screens/services.js\");\n/* harmony import */ var _screens_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../screens/settings */ \"./src/dashboard/screens/settings.js\");\nvar _s = $RefreshSig$();\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(o);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _iterableToArrayLimit(r, l) {\n    var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"];\n    if (null != t) {\n        var e, n, i, u, a = [], f = !0, o = !1;\n        try {\n            if (i = (t = t.call(r)).next, 0 === l) {\n                if (Object(t) !== t) return;\n                f = !1;\n            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);\n        } catch (r) {\n            o = !0, n = r;\n        } finally{\n            try {\n                if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return;\n            } finally{\n                if (o) throw n;\n            }\n        }\n        return a;\n    }\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\n\n\n // Verifique o caminho do import\n\n\n\n\n\nfunction Admin() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"), _useState2 = _slicedToArray(_useState, 2), userType = _useState2[0], setUserType = _useState2[1];\n    var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"home\"), _useState4 = _slicedToArray(_useState3, 2), currentPage = _useState4[0], setCurrentPage = _useState4[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        var token = localStorage.getItem(\"token\");\n        if (!token) {\n            router.push(\"/login\");\n            return;\n        }\n        var storedUserType = localStorage.getItem(\"tipo\");\n        if (!storedUserType) {\n            router.push(\"/login\");\n            return;\n        }\n        setUserType(storedUserType);\n    }, [\n        router\n    ]);\n    var onPageChange = function onPageChange(page) {\n        setCurrentPage(page);\n    };\n    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        onPageChange: onPageChange\n    }), currentPage === \"home\" && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_screens_home__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), currentPage === \"clients\" && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_screens_clients__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), currentPage === \"contact\" && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_screens_contact__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null), currentPage === \"services\" && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_screens_services__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null), currentPage === \"settings\" && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_screens_settings__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null));\n}\n_s(Admin, \"JSGtUSycOh4QGA9W/XiMelUCTsk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Admin;\nvar _c;\n$RefreshReg$(_c, \"Admin\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGFzaGJvYXJkL3BhZ2VzL0FkbWluLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ1g7QUFDRyxDQUFDO0FBQ1Q7QUFDTTtBQUNBO0FBQ0U7QUFDQTtBQUUzQixTQUFTVTs7SUFDdEIsSUFBTUMsU0FBU1Isc0RBQVNBO0lBQ3hCLElBQUFTLFlBQWdDWCwrQ0FBUUEsQ0FBQyxLQUFHWSxhQUFBQyxlQUFBRixXQUFBLElBQXJDRyxXQUFRRixVQUFBLEtBQUVHLGNBQVdILFVBQUE7SUFDNUIsSUFBQUksYUFBc0NoQiwrQ0FBUUEsQ0FBQyxTQUFPaUIsYUFBQUosZUFBQUcsWUFBQSxJQUEvQ0UsY0FBV0QsVUFBQSxLQUFFRSxpQkFBY0YsVUFBQTtJQUVsQ2hCLGdEQUFTQSxDQUFDO1FBQ1IsSUFBTW1CLFFBQVFDLGFBQWFDLE9BQU8sQ0FBQztRQUNuQyxJQUFJLENBQUNGLE9BQU87WUFDVlYsT0FBT2EsSUFBSSxDQUFDO1lBQ1o7UUFDRjtRQUVBLElBQU1DLGlCQUFpQkgsYUFBYUMsT0FBTyxDQUFDO1FBQzVDLElBQUksQ0FBQ0UsZ0JBQWdCO1lBQ25CZCxPQUFPYSxJQUFJLENBQUM7WUFDWjtRQUNGO1FBQ0FSLFlBQVlTO0lBQ2QsR0FBRztRQUFDZDtLQUFPO0lBRVgsSUFBTWUsZUFBZSxTQUFmQSxhQUFnQkMsSUFBSTtRQUN4QlAsZUFBZU87SUFDakI7SUFFQSxxQkFDRTNCLDBEQUFBLDRCQUNFQSwwREFBQSxDQUFDSSwwREFBTUEsRUFBQTtRQUFDc0IsY0FBY0E7SUFBYSxJQUNsQ1AsZ0JBQWdCLFVBQU0sY0FBSW5CLDBEQUFBLENBQUNLLHFEQUFJQSxFQUFBLE9BQy9CYyxnQkFBZ0IsYUFBUyxjQUFJbkIsMERBQUEsQ0FBQ00sd0RBQU9BLEVBQUEsT0FDckNhLGdCQUFnQixhQUFTLGNBQUluQiwwREFBQSxDQUFDTyx3REFBT0EsRUFBQSxPQUNyQ1ksZ0JBQWdCLGNBQVUsY0FBSW5CLDBEQUFBLENBQUNRLHlEQUFRQSxFQUFBLE9BQ3ZDVyxnQkFBZ0IsY0FBVSxjQUFJbkIsMERBQUEsQ0FBQ1MseURBQVFBLEVBQUE7QUFHOUM7R0FsQ3dCQzs7UUFDUFAsa0RBQVNBOzs7S0FERk8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2Rhc2hib2FyZC9wYWdlcy9BZG1pbi5qc3g/OWUyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJzsgLy8gVmVyaWZpcXVlIG8gY2FtaW5obyBkbyBpbXBvcnRcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi4vc2NyZWVucy9ob21lJztcclxuaW1wb3J0IENsaWVudHMgZnJvbSAnLi4vc2NyZWVucy9jbGllbnRzJztcclxuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi4vc2NyZWVucy9jb250YWN0JztcclxuaW1wb3J0IFNlcnZpY2VzIGZyb20gJy4uL3NjcmVlbnMvc2VydmljZXMnO1xyXG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi4vc2NyZWVucy9zZXR0aW5ncyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZG1pbigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbdXNlclR5cGUsIHNldFVzZXJUeXBlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKCdob21lJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgaWYgKCF0b2tlbikge1xyXG4gICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdG9yZWRVc2VyVHlwZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aXBvJyk7XHJcbiAgICBpZiAoIXN0b3JlZFVzZXJUeXBlKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2V0VXNlclR5cGUoc3RvcmVkVXNlclR5cGUpO1xyXG4gIH0sIFtyb3V0ZXJdKTtcclxuXHJcbiAgY29uc3Qgb25QYWdlQ2hhbmdlID0gKHBhZ2UpID0+IHtcclxuICAgIHNldEN1cnJlbnRQYWdlKHBhZ2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyIG9uUGFnZUNoYW5nZT17b25QYWdlQ2hhbmdlfSAvPlxyXG4gICAgICB7Y3VycmVudFBhZ2UgPT09ICdob21lJyAmJiA8SG9tZSAvPn1cclxuICAgICAge2N1cnJlbnRQYWdlID09PSAnY2xpZW50cycgJiYgPENsaWVudHMgLz59XHJcbiAgICAgIHtjdXJyZW50UGFnZSA9PT0gJ2NvbnRhY3QnICYmIDxDb250YWN0IC8+fVxyXG4gICAgICB7Y3VycmVudFBhZ2UgPT09ICdzZXJ2aWNlcycgJiYgPFNlcnZpY2VzIC8+fVxyXG4gICAgICB7Y3VycmVudFBhZ2UgPT09ICdzZXR0aW5ncycgJiYgPFNldHRpbmdzIC8+fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkhlYWRlciIsIkhvbWUiLCJDbGllbnRzIiwiQ29udGFjdCIsIlNlcnZpY2VzIiwiU2V0dGluZ3MiLCJBZG1pbiIsInJvdXRlciIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInVzZXJUeXBlIiwic2V0VXNlclR5cGUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwdXNoIiwic3RvcmVkVXNlclR5cGUiLCJvblBhZ2VDaGFuZ2UiLCJwYWdlIiwiY3JlYXRlRWxlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/dashboard/pages/Admin.jsx\n"));

/***/ })

});