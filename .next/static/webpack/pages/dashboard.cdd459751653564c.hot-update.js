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

/***/ "./src/dashboard/components/Header.js":
/*!********************************************!*\
  !*** ./src/dashboard/components/Header.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/AppBar */ \"./node_modules/@mui/material/AppBar/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Toolbar */ \"./node_modules/@mui/material/Toolbar/index.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/IconButton */ \"./node_modules/@mui/material/IconButton/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Tooltip */ \"./node_modules/@mui/material/Tooltip/index.js\");\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"./node_modules/@mui/icons-material/Menu.js\");\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/MenuItem */ \"./node_modules/@mui/material/MenuItem/index.js\");\n/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Menu */ \"./node_modules/@mui/material/Menu/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_header_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/header.module.css */ \"./src/dashboard/styles/header.module.css\");\n/* harmony import */ var _styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Divider */ \"./node_modules/@mui/material/Divider/index.js\");\nvar _s = $RefreshSig$();\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(o);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _iterableToArrayLimit(r, l) {\n    var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"];\n    if (null != t) {\n        var e, n, i, u, a = [], f = !0, o = !1;\n        try {\n            if (i = (t = t.call(r)).next, 0 === l) {\n                if (Object(t) !== t) return;\n                f = !1;\n            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);\n        } catch (r) {\n            o = !0, n = r;\n        } finally{\n            try {\n                if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return;\n            } finally{\n                if (o) throw n;\n            }\n        }\n        return a;\n    }\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Header() {\n    _s();\n    var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), _useState2 = _slicedToArray(_useState, 2), menuOpen = _useState2[0], setMenuOpen = _useState2[1];\n    var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), _useState4 = _slicedToArray(_useState3, 2), anchorEl = _useState4[0], setAnchorEl = _useState4[1];\n    var handleClick = function handleClick(event) {\n        setMenuOpen(true);\n        setAnchorEl(event.currentTarget);\n    };\n    var handleClose = function handleClose() {\n        setMenuOpen(false);\n        setAnchorEl(null);\n    };\n    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"header\", {\n        className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().header)\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        position: \"static\",\n        sx: {\n            backgroundColor: \"#070E26\",\n            zIndex: menuOpen ? 1100 : 1000\n        }\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        component: \"div\",\n        sx: {\n            flexGrow: 1\n        }\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/\"\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n        src: \"/images/Logo.webp\",\n        alt: \"Logo do escrit\\xf3rio\",\n        width: 136,\n        height: 50,\n        priority: true\n    }))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        title: \"Menu\"\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        size: \"large\",\n        edge: \"end\",\n        color: \"inherit\",\n        \"aria-label\": \"menu\",\n        \"aria-controls\": \"menu\",\n        \"aria-haspopup\": \"true\",\n        \"aria-expanded\": menuOpen ? \"true\" : \"false\",\n        onClick: handleClick,\n        sx: {\n            display: {\n                xs: \"block\",\n                md: \"none\"\n            },\n            mr: 0\n        }\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        id: \"menu\",\n        anchorEl: anchorEl,\n        open: menuOpen,\n        onClose: handleClose,\n        onClick: handleClose,\n        anchorOrigin: {\n            vertical: \"bottom\",\n            horizontal: \"left\"\n        },\n        transformOrigin: {\n            vertical: \"top\",\n            horizontal: \"left\"\n        },\n        getcontentanchorel: null,\n        keepMounted: true,\n        sx: {\n            marginTop: \"10px\"\n        }\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/\",\n        className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"link-menu\"])\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        onClick: handleClose,\n        sx: {\n            width: \"45vw\",\n            justifyContent: \"center\",\n            paddingRight: \"16px\",\n            \"&:hover\": {\n                backgroundColor: \"#070e2636\",\n                color: \"black\"\n            }\n        }\n    }, \"Home\")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_12__[\"default\"], null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/about\",\n        className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"link-menu\"])\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        onClick: handleClose,\n        sx: {\n            width: \"45vw\",\n            justifyContent: \"center\",\n            paddingRight: \"16px\",\n            \"&:hover\": {\n                backgroundColor: \"#070e2636\",\n                color: \"black\"\n            }\n        }\n    }, \"Sobre n\\xf3s\")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_12__[\"default\"], null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/services\",\n        className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"link-menu\"])\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        onClick: handleClose,\n        sx: {\n            width: \"45vw\",\n            justifyContent: \"center\",\n            paddingRight: \"16px\",\n            \"&:hover\": {\n                backgroundColor: \"#070e2636\",\n                color: \"black\"\n            }\n        }\n    }, \"Solu\\xe7\\xf5es\")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_12__[\"default\"], null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/contact\",\n        className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"link-menu\"])\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        onClick: handleClose,\n        sx: {\n            width: \"45vw\",\n            justifyContent: \"center\",\n            paddingRight: \"16px\",\n            \"&:hover\": {\n                backgroundColor: \"#070e2636\",\n                color: \"black\"\n            }\n        }\n    }, \"Contato \")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_12__[\"default\"], null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/budget\",\n        className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"link-orcamento\"])\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        onClick: handleClose,\n        sx: {\n            width: \"45vw\",\n            justifyContent: \"center\",\n            paddingRight: \"16px\",\n            \"&:hover\": {\n                backgroundColor: \"#070e2636\",\n                color: \"black\"\n            }\n        }\n    }, \"Or\\xe7amento\")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_12__[\"default\"], null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/login\",\n        className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"link-menu\"]),\n        style: {\n            borderLeft: {\n                xs: \"none\",\n                md: \"1px solid white\"\n            }\n        }\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        onClick: handleClose,\n        sx: {\n            width: \"45vw\",\n            fontWeight: \"bold\",\n            justifyContent: \"center\",\n            paddingTop: \"15px\",\n            paddingRight: \"16px\",\n            \"&:hover\": {\n                backgroundColor: \"#070e2636\",\n                color: \"black\"\n            }\n        }\n    }, \"\\xc1rea do cliente\"))), menuOpen && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n        className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().overlay),\n        sx: {\n            position: \"fixed\",\n            top: 0,\n            left: 0,\n            width: \"100%\",\n            height: \"100%\",\n            backgroundColor: \"rgba(0, 0, 0, 0.5)\",\n            zIndex: 1099\n        },\n        onClick: handleClose\n    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n        sx: {\n            display: {\n                xs: \"none\",\n                md: \"flex\"\n            }\n        }\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/\",\n        className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"link-menu\"])\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n        color: \"inherit\"\n    }, \"Home\")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/about\",\n        className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"link-menu\"])\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n        color: \"inherit\"\n    }, \"Sobre n\\xf3s\")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/services\",\n        className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"link-menu\"])\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n        color: \"inherit\"\n    }, \"Solu\\xe7\\xf5es\")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/contact\",\n        className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"link-menu\"])\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n        color: \"inherit\"\n    }, \"Contato\")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/budget\",\n        className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"link-orcamento\"])\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n        color: \"inherit\"\n    }, \"Or\\xe7amento\")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/login\",\n        className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"link-cliente\"]),\n        style: {\n            borderLeft: \"1px solid white\"\n        }\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n        color: \"inherit\"\n    }, \"\\xc1rea do cliente\"))))));\n}\n_s(Header, \"TB2jB4sTNHFG8c84ETC5BoCsHuk=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLEdBQUMsa0JBQXlCLGNBQ3JHL0MsMERBQUEsQ0FBQ1ksa0RBQUlBLEVBQUE7UUFBQzBCLE1BQUs7UUFBWVAsV0FBV2xCLCtFQUFrQjtJQUFFLGlCQUFDYiwwREFBQSxDQUFDVyw2REFBTUEsRUFBQTtRQUFDb0MsT0FBTTtJQUFTLEdBQUMsb0JBQXdCLGNBQ3ZHL0MsMERBQUEsQ0FBQ1ksa0RBQUlBLEVBQUE7UUFBQzBCLE1BQUs7UUFBV1AsV0FBV2xCLCtFQUFrQjtJQUFFLGlCQUFDYiwwREFBQSxDQUFDVyw2REFBTUEsRUFBQTtRQUFDb0MsT0FBTTtJQUFTLEdBQUMsYUFBdUIsY0FDckcvQywwREFBQSxDQUFDWSxrREFBSUEsRUFBQTtRQUFDMEIsTUFBSztRQUFVUCxXQUFXbEIsb0ZBQXVCO0lBQUUsaUJBQUNiLDBEQUFBLENBQUNXLDZEQUFNQSxFQUFBO1FBQUNvQyxPQUFNO0lBQVMsR0FBQyxrQkFBeUIsY0FDM0cvQywwREFBQSxDQUFDWSxrREFBSUEsRUFBQTtRQUFDMEIsTUFBSztRQUFTUCxXQUFXbEIsa0ZBQXVCO1FBQUNvRCxPQUFPO1lBQUVDLFlBQVk7UUFBa0I7SUFBRSxpQkFBQ2xFLDBEQUFBLENBQUNXLDZEQUFNQSxFQUFBO1FBQUNvQyxPQUFNO0lBQVMsR0FBQztBQU1qSjtHQW5Hd0IvQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZGFzaGJvYXJkL2NvbXBvbmVudHMvSGVhZGVyLmpzPzQ1ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXBwQmFyJztcclxuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbGJhcic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG11aS9tYXRlcmlhbC9NZW51SXRlbSc7XHJcbmltcG9ydCBNZW51IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTWVudSc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9oZWFkZXIubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EaXZpZGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICAgIGNvbnN0IFttZW51T3Blbiwgc2V0TWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldE1lbnVPcGVuKHRydWUpO1xyXG4gICAgICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRNZW51T3BlbihmYWxzZSk7XHJcbiAgICAgICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlc1snaGVhZGVyJ119PlxyXG4gICAgICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnIzA3MEUyNicsIHpJbmRleDogbWVudU9wZW4gPyAxMTAwIDogMTAwMCB9fT5cclxuICAgICAgICAgICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImRpdlwiIHN4PXt7IGZsZXhHcm93OiAxIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCBJbWFnZSBzcmM9XCIvaW1hZ2VzL0xvZ28ud2VicFwiIGFsdD1cIkxvZ28gZG8gZXNjcml0w7NyaW9cIiB3aWR0aD17MTM2fSBoZWlnaHQ9ezUwfSBwcmlvcml0eS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJNZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZT1cImVuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cIm1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD17bWVudU9wZW4gPyAndHJ1ZScgOiAnZmFsc2UnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBkaXNwbGF5OiB7IHhzOiAnYmxvY2snLCBtZDogJ25vbmUnIH0sIG1yOiAwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibWVudVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17bWVudU9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yT3JpZ2luPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWw6ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogJ2xlZnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRjb250ZW50YW5jaG9yZWw9e251bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtlZXBNb3VudGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IG1hcmdpblRvcDogJzEwcHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT17c3R5bGVzWydsaW5rLW1lbnUnXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9IHN4PXt7IHdpZHRoOiAnNDV2dycsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgcGFkZGluZ1JpZ2h0OiAnMTZweCcsICcmOmhvdmVyJzogeyBiYWNrZ3JvdW5kQ29sb3I6ICcjMDcwZTI2MzYnLCBjb2xvcjogJ2JsYWNrJyB9IH19PkhvbWU8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIiBjbGFzc05hbWU9e3N0eWxlc1snbGluay1tZW51J119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfSBzeD17eyB3aWR0aDogJzQ1dncnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHBhZGRpbmdSaWdodDogJzE2cHgnLCAnJjpob3Zlcic6IHsgYmFja2dyb3VuZENvbG9yOiAnIzA3MGUyNjM2JywgY29sb3I6ICdibGFjaycgfSB9fT5Tb2JyZSBuw7NzPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NlcnZpY2VzXCIgY2xhc3NOYW1lPXtzdHlsZXNbJ2xpbmstbWVudSddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gc3g9e3sgd2lkdGg6ICc0NXZ3JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBwYWRkaW5nUmlnaHQ6ICcxNnB4JywgJyY6aG92ZXInOiB7IGJhY2tncm91bmRDb2xvcjogJyMwNzBlMjYzNicsIGNvbG9yOiAnYmxhY2snIH0gfX0+U29sdcOnw7VlczwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCIgY2xhc3NOYW1lPXtzdHlsZXNbJ2xpbmstbWVudSddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gc3g9e3sgd2lkdGg6ICc0NXZ3JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBwYWRkaW5nUmlnaHQ6ICcxNnB4JywgJyY6aG92ZXInOiB7IGJhY2tncm91bmRDb2xvcjogJyMwNzBlMjYzNicsIGNvbG9yOiAnYmxhY2snIH0gfX0+Q29udGF0byA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYnVkZ2V0XCIgY2xhc3NOYW1lPXtzdHlsZXNbJ2xpbmstb3JjYW1lbnRvJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfSBzeD17eyB3aWR0aDogJzQ1dncnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHBhZGRpbmdSaWdodDogJzE2cHgnLCAnJjpob3Zlcic6IHsgYmFja2dyb3VuZENvbG9yOiAnIzA3MGUyNjM2JywgY29sb3I6ICdibGFjaycgfSB9fT5PcsOnYW1lbnRvPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCIgY2xhc3NOYW1lPXtzdHlsZXNbJ2xpbmstbWVudSddfSBzdHlsZT17eyBib3JkZXJMZWZ0OiB7IHhzOiAnbm9uZScsIG1kOiAnMXB4IHNvbGlkIHdoaXRlJyB9IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfSBzeD17eyB3aWR0aDogJzQ1dncnLGZvbnRXZWlnaHQ6ICdib2xkJyAsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgcGFkZGluZ1RvcDogJzE1cHgnLCBwYWRkaW5nUmlnaHQ6ICcxNnB4JywgJyY6aG92ZXInOiB7IGJhY2tncm91bmRDb2xvcjogJyMwNzBlMjYzNicsIGNvbG9yOiAnYmxhY2snIH0gfX0+w4FyZWEgZG8gY2xpZW50ZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAge21lbnVPcGVuICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbJ292ZXJsYXknXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBwb3NpdGlvbjogJ2ZpeGVkJywgdG9wOiAwLCBsZWZ0OiAwLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjUpJywgekluZGV4OiAxMDk5IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6IHsgeHM6ICdub25lJywgbWQ6ICdmbGV4JyB9IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT17c3R5bGVzWydsaW5rLW1lbnUnXX0+PEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIj5Ib21lPC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCIgY2xhc3NOYW1lPXtzdHlsZXNbJ2xpbmstbWVudSddfT48QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiPlNvYnJlIG7Ds3M8L0J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2VydmljZXNcIiBjbGFzc05hbWU9e3N0eWxlc1snbGluay1tZW51J119PjxCdXR0b24gY29sb3I9XCJpbmhlcml0XCI+U29sdcOnw7VlczwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCIgY2xhc3NOYW1lPXtzdHlsZXNbJ2xpbmstbWVudSddfT48QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiPkNvbnRhdG88L0J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYnVkZ2V0XCIgY2xhc3NOYW1lPXtzdHlsZXNbJ2xpbmstb3JjYW1lbnRvJ119PjxCdXR0b24gY29sb3I9XCJpbmhlcml0XCI+T3LDp2FtZW50bzwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiIGNsYXNzTmFtZT17c3R5bGVzWydsaW5rLWNsaWVudGUnXX0gc3R5bGU9e3sgYm9yZGVyTGVmdDogXCIxcHggc29saWQgd2hpdGVcIiB9fT48QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiPsOBcmVhIGRvIGNsaWVudGU8L0J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQXBwQmFyIiwiQm94IiwiVG9vbGJhciIsIkljb25CdXR0b24iLCJUeXBvZ3JhcGh5IiwiVG9vbHRpcCIsIk1lbnVJY29uIiwiTWVudUl0ZW0iLCJNZW51IiwiQnV0dG9uIiwiTGluayIsInN0eWxlcyIsIkltYWdlIiwiRGl2aWRlciIsIkhlYWRlciIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm1lbnVPcGVuIiwic2V0TWVudU9wZW4iLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJoYW5kbGVDbGljayIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNsb3NlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInBvc2l0aW9uIiwic3giLCJiYWNrZ3JvdW5kQ29sb3IiLCJ6SW5kZXgiLCJjb21wb25lbnQiLCJmbGV4R3JvdyIsImhyZWYiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInByaW9yaXR5IiwidGl0bGUiLCJzaXplIiwiZWRnZSIsImNvbG9yIiwib25DbGljayIsImRpc3BsYXkiLCJ4cyIsIm1kIiwibXIiLCJpZCIsIm9wZW4iLCJvbkNsb3NlIiwiYW5jaG9yT3JpZ2luIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwidHJhbnNmb3JtT3JpZ2luIiwiZ2V0Y29udGVudGFuY2hvcmVsIiwia2VlcE1vdW50ZWQiLCJtYXJnaW5Ub3AiLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmdSaWdodCIsInN0eWxlIiwiYm9yZGVyTGVmdCIsImZvbnRXZWlnaHQiLCJwYWRkaW5nVG9wIiwidG9wIiwibGVmdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/dashboard/components/Header.js\n"));

/***/ })

});