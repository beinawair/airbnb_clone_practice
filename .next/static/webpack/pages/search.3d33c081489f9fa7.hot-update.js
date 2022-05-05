"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var date_fns_esm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/esm */ \"./node_modules/date-fns/esm/index.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction search() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var _query = router.query, location = _query.location, startDate = _query.startDate, endDate = _query.endDate, numberOfGuest = _query.numberOfGuest;\n    var formatedStartDate = (0,date_fns_esm__WEBPACK_IMPORTED_MODULE_4__.format)(new Date(startDate), \"dd MMMM yy\");\n    var formatedEndDate = (0,date_fns_esm__WEBPACK_IMPORTED_MODULE_4__.format)(new Date(endDate), \"dd MMMM yy\");\n    var range = \"\".concat(formatedStartDate, \" - \").concat(formatedEndDate);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/beinawair/Dev/Exercises/airbnb_clone_practice/pages/search.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"flex-grow pt-14 px-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-xs\",\n                            children: [\n                                \"300+ Stays - \",\n                                range,\n                                \" - \",\n                                numberOfGuest,\n                                \" guests\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/beinawair/Dev/Exercises/airbnb_clone_practice/pages/search.js\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-3xl font-semibold mt-2 mb-6\",\n                            children: [\n                                \"Stays in \",\n                                location\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/beinawair/Dev/Exercises/airbnb_clone_practice/pages/search.js\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"buttonFilter\",\n                                    children: \"Cancellation Flexibility\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/beinawair/Dev/Exercises/airbnb_clone_practice/pages/search.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"buttonFilter\",\n                                    children: \"Type of Place\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/beinawair/Dev/Exercises/airbnb_clone_practice/pages/search.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"buttonFilter\",\n                                    children: \"Price\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/beinawair/Dev/Exercises/airbnb_clone_practice/pages/search.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"buttonFilter\",\n                                    children: \"Rooms and Beds\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/beinawair/Dev/Exercises/airbnb_clone_practice/pages/search.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"buttonFilter\",\n                                    children: \"More Filters\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/beinawair/Dev/Exercises/airbnb_clone_practice/pages/search.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/beinawair/Dev/Exercises/airbnb_clone_practice/pages/search.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/beinawair/Dev/Exercises/airbnb_clone_practice/pages/search.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/beinawair/Dev/Exercises/airbnb_clone_practice/pages/search.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/beinawair/Dev/Exercises/airbnb_clone_practice/pages/search.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/beinawair/Dev/Exercises/airbnb_clone_practice/pages/search.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(search, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (search);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZWFyY2guanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUEwQztBQUNBO0FBQ0Y7QUFDRjs7QUFFdEMsU0FBU0ksTUFBTSxHQUFHOztJQUNoQixJQUFNQyxNQUFNLEdBQUdILHNEQUFTLEVBQUU7SUFDMUIsSUFBd0RHLE1BQVksR0FBWkEsTUFBTSxDQUFDQyxLQUFLLEVBQTVEQyxRQUFRLEdBQXdDRixNQUFZLENBQTVERSxRQUFRLEVBQUVDLFNBQVMsR0FBNkJILE1BQVksQ0FBbERHLFNBQVMsRUFBRUMsT0FBTyxHQUFvQkosTUFBWSxDQUF2Q0ksT0FBTyxFQUFFQyxhQUFhLEdBQUtMLE1BQVksQ0FBOUJLLGFBQWE7SUFFbkQsSUFBTUMsaUJBQWlCLEdBQUdSLG9EQUFNLENBQUMsSUFBSVMsSUFBSSxDQUFDSixTQUFTLENBQUMsRUFBRSxZQUFZLENBQUM7SUFDbkUsSUFBTUssZUFBZSxHQUFHVixvREFBTSxDQUFDLElBQUlTLElBQUksQ0FBQ0gsT0FBTyxDQUFDLEVBQUUsWUFBWSxDQUFDO0lBQy9ELElBQU1LLEtBQUssR0FBRyxFQUFDLENBQXlCRCxNQUFlLENBQXRDRixpQkFBaUIsRUFBQyxLQUFHLENBQWtCLFFBQWhCRSxlQUFlLENBQUU7SUFFekQscUJBQ0UsOERBQUNFLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLFVBQVU7OzBCQUN2Qiw4REFBQ2hCLDBEQUFNOzs7O29CQUFHOzBCQUVWLDhEQUFDaUIsTUFBSTtnQkFBQ0QsU0FBUyxFQUFDLE1BQU07MEJBQ3BCLDRFQUFDRSxTQUFPO29CQUFDRixTQUFTLEVBQUMsc0JBQXNCOztzQ0FDdkMsOERBQUNHLEdBQUM7NEJBQUNILFNBQVMsRUFBQyxTQUFTOztnQ0FBQyxlQUNSO2dDQUFDRixLQUFLO2dDQUFDLEtBQUc7Z0NBQUNKLGFBQWE7Z0NBQUMsU0FDeEM7Ozs7OztnQ0FBSTtzQ0FFSiw4REFBQ1UsSUFBRTs0QkFBQ0osU0FBUyxFQUFDLGtDQUFrQzs7Z0NBQUMsV0FDdEM7Z0NBQUNULFFBQVE7Ozs7OztnQ0FDZjtzQ0FFTCw4REFBQ1EsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLHNFQUFzRTs7OENBQ25GLDhEQUFDRyxHQUFDO29DQUFDSCxTQUFTLEVBQUMsY0FBYzs4Q0FBQywwQkFBd0I7Ozs7O3dDQUFJOzhDQUN4RCw4REFBQ0csR0FBQztvQ0FBQ0gsU0FBUyxFQUFDLGNBQWM7OENBQUMsZUFBYTs7Ozs7d0NBQUk7OENBQzdDLDhEQUFDRyxHQUFDO29DQUFDSCxTQUFTLEVBQUMsY0FBYzs4Q0FBQyxPQUFLOzs7Ozt3Q0FBSTs4Q0FDckMsOERBQUNHLEdBQUM7b0NBQUNILFNBQVMsRUFBQyxjQUFjOzhDQUFDLGdCQUFjOzs7Ozt3Q0FBSTs4Q0FDOUMsOERBQUNHLEdBQUM7b0NBQUNILFNBQVMsRUFBQyxjQUFjOzhDQUFDLGNBQVk7Ozs7O3dDQUFJOzs7Ozs7Z0NBQ3hDOzs7Ozs7d0JBQ0U7Ozs7O29CQUNMOzBCQUVQLDhEQUFDZiwwREFBTTs7OztvQkFBRzs7Ozs7O1lBQ04sQ0FDTjtDQUNIO0dBbkNRRyxNQUFNOztRQUNFRixrREFBUzs7O0FBb0MxQiwrREFBZUUsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NlYXJjaC5qcz85MjBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucy9lc20nO1xuXG5mdW5jdGlvbiBzZWFyY2goKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGxvY2F0aW9uLCBzdGFydERhdGUsIGVuZERhdGUsIG51bWJlck9mR3Vlc3QgfSA9IHJvdXRlci5xdWVyeTtcblxuICBjb25zdCBmb3JtYXRlZFN0YXJ0RGF0ZSA9IGZvcm1hdChuZXcgRGF0ZShzdGFydERhdGUpLCAnZGQgTU1NTSB5eScpO1xuICBjb25zdCBmb3JtYXRlZEVuZERhdGUgPSBmb3JtYXQobmV3IERhdGUoZW5kRGF0ZSksICdkZCBNTU1NIHl5Jyk7XG4gIGNvbnN0IHJhbmdlID0gYCR7Zm9ybWF0ZWRTdGFydERhdGV9IC0gJHtmb3JtYXRlZEVuZERhdGV9YDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW5cIj5cbiAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgcHQtMTQgcHgtNlwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHNcIj5cbiAgICAgICAgICAgIDMwMCsgU3RheXMgLSB7cmFuZ2V9IC0ge251bWJlck9mR3Vlc3R9IGd1ZXN0c1xuICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LXNlbWlib2xkIG10LTIgbWItNlwiPlxuICAgICAgICAgICAgU3RheXMgaW4ge2xvY2F0aW9ufVxuICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzppbmxpbmUtZmxleCBtYi01IHNwYWNlLXgtMyB0ZXh0LWdyYXktODAwIHdoaXRlc3BhY2Utbm93cmFwXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJidXR0b25GaWx0ZXJcIj5DYW5jZWxsYXRpb24gRmxleGliaWxpdHk8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJidXR0b25GaWx0ZXJcIj5UeXBlIG9mIFBsYWNlPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYnV0dG9uRmlsdGVyXCI+UHJpY2U8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJidXR0b25GaWx0ZXJcIj5Sb29tcyBhbmQgQmVkczwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJ1dHRvbkZpbHRlclwiPk1vcmUgRmlsdGVyczwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaDtcbiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJGb290ZXIiLCJ1c2VSb3V0ZXIiLCJmb3JtYXQiLCJzZWFyY2giLCJyb3V0ZXIiLCJxdWVyeSIsImxvY2F0aW9uIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsIm51bWJlck9mR3Vlc3QiLCJmb3JtYXRlZFN0YXJ0RGF0ZSIsIkRhdGUiLCJmb3JtYXRlZEVuZERhdGUiLCJyYW5nZSIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJzZWN0aW9uIiwicCIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/search.js\n");

/***/ })

});