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

/***/ "./src/dashboard/screens/AdminDashboard.jsx":
/*!**************************************************!*\
  !*** ./src/dashboard/screens/AdminDashboard.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tables_tabelaContato__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tables/tabelaContato */ \"./src/dashboard/tables/tabelaContato.js\");\nvar _s = $RefreshSig$();\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(o);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _iterableToArrayLimit(r, l) {\n    var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"];\n    if (null != t) {\n        var e, n, i, u, a = [], f = !0, o = !1;\n        try {\n            if (i = (t = t.call(r)).next, 0 === l) {\n                if (Object(t) !== t) return;\n                f = !1;\n            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);\n        } catch (r) {\n            o = !0, n = r;\n        } finally{\n            try {\n                if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return;\n            } finally{\n                if (o) throw n;\n            }\n        }\n        return a;\n    }\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\n\n\n\n\n\nvar AdminDashboard = function AdminDashboard(_ref) {\n    _s();\n    var activeComponent = _ref.activeComponent;\n    var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"), _useState2 = _slicedToArray(_useState, 2), fullName = _useState2[0], setFullName = _useState2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        var storedFullName = localStorage.getItem(\"nome\");\n        if (storedFullName) {\n            setFullName(storedFullName);\n        }\n    }, []);\n    var firstName = fullName.split(\" \")[0];\n    var content;\n    switch(activeComponent){\n        case \"home\":\n            content = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"Conte\\xfado da p\\xe1gina inicial\");\n            break;\n        case \"about\":\n            content = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"Conte\\xfado da p\\xe1gina sobre\");\n            break;\n        case \"contact\":\n            content = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"Conte\\xfado da p\\xe1gina de contato\");\n            break;\n        default:\n            content = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"404 - P\\xe1gina n\\xe3o encontrada\");\n    }\n    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, content);\n};\n_s(AdminDashboard, \"6tcCUJem28piTJsPtoaTdMv36hQ=\");\n_c = AdminDashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdminDashboard);\nvar _c;\n$RefreshReg$(_c, \"AdminDashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGFzaGJvYXJkL3NjcmVlbnMvQWRtaW5EYXNoYm9hcmQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNrQjtBQUMrQjtBQUN2QjtBQUNLO0FBRXhELElBQU1VLGlCQUFpQixTQUFqQkEsZUFBY0MsSUFBQTs7SUFBNEIsSUFBdEJDLGtCQUFlRCxLQUFmQyxlQUFlO0lBQ3JDLElBQUFDLFlBQWdDWiwrQ0FBUUEsQ0FBQyxLQUFHYSxhQUFBQyxlQUFBRixXQUFBLElBQXJDRyxXQUFRRixVQUFBLEtBQUVHLGNBQVdILFVBQUE7SUFFNUJaLGdEQUFTQSxDQUFDO1FBQ04sSUFBTWdCLGlCQUFpQkMsYUFBYUMsT0FBTyxDQUFDO1FBQzVDLElBQUlGLGdCQUFnQjtZQUNoQkQsWUFBWUM7UUFDaEI7SUFDSixHQUFHLEVBQUU7SUFFTCxJQUFNRyxZQUFZTCxTQUFTTSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFFeEMsSUFBSUM7SUFFSixPQUFRWDtRQUNKLEtBQUs7WUFDSFcsVUFBTyxjQUFHdkIsMERBQUEsY0FBSztZQUNmO1FBQ0YsS0FBSztZQUNIdUIsVUFBTyxjQUFHdkIsMERBQUEsY0FBSztZQUNmO1FBQ0YsS0FBSztZQUNIdUIsVUFBTyxjQUFHdkIsMERBQUEsY0FBSztZQUNmO1FBQ0Y7WUFDRXVCLFVBQU8sY0FBR3ZCLDBEQUFBLGNBQUs7SUFDckI7SUFHQSxxQkFDSUEsMERBQUEsY0FDS3VCO0FBR2I7R0FsQ01iO0tBQUFBO0FBb0NOLCtEQUFlQSxjQUFjQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9kYXNoYm9hcmQvc2NyZWVucy9BZG1pbkRhc2hib2FyZC5qc3g/MGYyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFR5cG9ncmFwaHksIEJ1dHRvbiwgR3JpZCwgUGFwZXIgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IENvbnRhdG9zVGFibGUgZnJvbSAnLi4vdGFibGVzL3RhYmVsYUNvbnRhdG8nO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9hZG1pbkRhc2hib2FyZC5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IEFkbWluRGFzaGJvYXJkID0gKHsgYWN0aXZlQ29tcG9uZW50IH0pID0+IHtcclxuICAgIGNvbnN0IFtmdWxsTmFtZSwgc2V0RnVsbE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3RvcmVkRnVsbE5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbm9tZScpO1xyXG4gICAgICAgIGlmIChzdG9yZWRGdWxsTmFtZSkge1xyXG4gICAgICAgICAgICBzZXRGdWxsTmFtZShzdG9yZWRGdWxsTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGZpcnN0TmFtZSA9IGZ1bGxOYW1lLnNwbGl0KCcgJylbMF07XHJcblxyXG4gICAgbGV0IGNvbnRlbnQ7XHJcblxyXG4gICAgc3dpdGNoIChhY3RpdmVDb21wb25lbnQpIHtcclxuICAgICAgICBjYXNlICdob21lJzpcclxuICAgICAgICAgIGNvbnRlbnQgPSA8ZGl2PkNvbnRlw7pkbyBkYSBww6FnaW5hIGluaWNpYWw8L2Rpdj47XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhYm91dCc6XHJcbiAgICAgICAgICBjb250ZW50ID0gPGRpdj5Db250ZcO6ZG8gZGEgcMOhZ2luYSBzb2JyZTwvZGl2PjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2NvbnRhY3QnOlxyXG4gICAgICAgICAgY29udGVudCA9IDxkaXY+Q29udGXDumRvIGRhIHDDoWdpbmEgZGUgY29udGF0bzwvZGl2PjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBjb250ZW50ID0gPGRpdj40MDQgLSBQw6FnaW5hIG7Do28gZW5jb250cmFkYTwvZGl2PjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7Y29udGVudH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbkRhc2hib2FyZDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNvbnRhaW5lciIsIlR5cG9ncmFwaHkiLCJCdXR0b24iLCJHcmlkIiwiUGFwZXIiLCJDb250YXRvc1RhYmxlIiwic3R5bGVzIiwiQWRtaW5EYXNoYm9hcmQiLCJfcmVmIiwiYWN0aXZlQ29tcG9uZW50IiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiZnVsbE5hbWUiLCJzZXRGdWxsTmFtZSIsInN0b3JlZEZ1bGxOYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZpcnN0TmFtZSIsInNwbGl0IiwiY29udGVudCIsImNyZWF0ZUVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/dashboard/screens/AdminDashboard.jsx\n"));

/***/ })

});