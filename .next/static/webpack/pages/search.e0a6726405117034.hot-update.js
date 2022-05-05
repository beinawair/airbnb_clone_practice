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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var date_fns_esm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/esm */ \"./node_modules/date-fns/esm/index.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction search() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var _query = router.query, location = _query.location, startDate = _query.startDate, endDate = _query.endDate, numberOfGuest = _query.numberOfGuest;\n    var formatedStartDate = (0,date_fns_esm__WEBPACK_IMPORTED_MODULE_4__.format)(new Date(startDate), \"dd MMMM yy\");\n    var formatedEndDate = (0,date_fns_esm__WEBPACK_IMPORTED_MODULE_4__.format)(new Date(endDate), \"dd MMMM yy\");\n    var range = \"\".concat(formatedStartDate, \" - \").concat(formatedEndDate);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                placeholder: \"\".concat(location, \" | \").concat(range, \" | \").concat(numberOfGuest, \" guests \")\n            }, void 0, false, {\n                fileName: \"/Users/beinawair/Dev/Exercises/airbnb_clone_practice/pages/search.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"flex-grow pt-14 px-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-xs\",\n                            children: [\n                                \"300+ Stays - \",\n                                range,\n                                \" - \",\n                                numberOfGuest,\n                                \" guests\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/beinawair/Dev/Exercises/airbnb_clone_practice/pages/search.js\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-3xl font-semibold mt-2 mb-6\",\n                            children: [\n                                \"Stays in \",\n                                location\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/beinawair/Dev/Exercises/airbnb_clone_practice/pages/search.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"buttonFilter\",\n                                    children: \"Cancellation Flexibility\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/beinawair/Dev/Exercises/airbnb_clone_practice/pages/search.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"buttonFilter\",\n                                    children: \"Type of Place\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/beinawair/Dev/Exercises/airbnb_clone_practice/pages/search.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"buttonFilter\",\n                                    children: \"Price\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/beinawair/Dev/Exercises/airbnb_clone_practice/pages/search.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"buttonFilter\",\n                                    children: \"Rooms and Beds\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/beinawair/Dev/Exercises/airbnb_clone_practice/pages/search.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"buttonFilter\",\n                                    children: \"More Filters\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/beinawair/Dev/Exercises/airbnb_clone_practice/pages/search.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/beinawair/Dev/Exercises/airbnb_clone_practice/pages/search.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/beinawair/Dev/Exercises/airbnb_clone_practice/pages/search.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/beinawair/Dev/Exercises/airbnb_clone_practice/pages/search.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/beinawair/Dev/Exercises/airbnb_clone_practice/pages/search.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/beinawair/Dev/Exercises/airbnb_clone_practice/pages/search.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(search, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (search);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZWFyY2guanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUEwQztBQUNBO0FBQ0Y7QUFDRjs7QUFFdEMsU0FBU0ksTUFBTSxHQUFHOztJQUNoQixJQUFNQyxNQUFNLEdBQUdILHNEQUFTLEVBQUU7SUFDMUIsSUFBd0RHLE1BQVksR0FBWkEsTUFBTSxDQUFDQyxLQUFLLEVBQTVEQyxRQUFRLEdBQXdDRixNQUFZLENBQTVERSxRQUFRLEVBQUVDLFNBQVMsR0FBNkJILE1BQVksQ0FBbERHLFNBQVMsRUFBRUMsT0FBTyxHQUFvQkosTUFBWSxDQUF2Q0ksT0FBTyxFQUFFQyxhQUFhLEdBQUtMLE1BQVksQ0FBOUJLLGFBQWE7SUFFbkQsSUFBTUMsaUJBQWlCLEdBQUdSLG9EQUFNLENBQUMsSUFBSVMsSUFBSSxDQUFDSixTQUFTLENBQUMsRUFBRSxZQUFZLENBQUM7SUFDbkUsSUFBTUssZUFBZSxHQUFHVixvREFBTSxDQUFDLElBQUlTLElBQUksQ0FBQ0gsT0FBTyxDQUFDLEVBQUUsWUFBWSxDQUFDO0lBQy9ELElBQU1LLEtBQUssR0FBRyxFQUFDLENBQXlCRCxNQUFlLENBQXRDRixpQkFBaUIsRUFBQyxLQUFHLENBQWtCLFFBQWhCRSxlQUFlLENBQUU7SUFFekQscUJBQ0UsOERBQUNFLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLFVBQVU7OzBCQUN2Qiw4REFBQ2hCLDBEQUFNO2dCQUNMaUIsV0FBVyxFQUFFLEVBQUMsQ0FBZ0JILE1BQUssQ0FBbkJQLFFBQVEsRUFBQyxLQUFHLENBQVEsQ0FBS0csTUFBYSxDQUF4QkksS0FBSyxFQUFDLEtBQUcsQ0FBZ0IsT0FBUSxDQUF0QkosYUFBYSxFQUFDLFVBQVEsQ0FBQzs7Ozs7b0JBQ2hFOzBCQUVGLDhEQUFDUSxNQUFJO2dCQUFDRixTQUFTLEVBQUMsTUFBTTswQkFDcEIsNEVBQUNHLFNBQU87b0JBQUNILFNBQVMsRUFBQyxzQkFBc0I7O3NDQUN2Qyw4REFBQ0ksR0FBQzs0QkFBQ0osU0FBUyxFQUFDLFNBQVM7O2dDQUFDLGVBQ1I7Z0NBQUNGLEtBQUs7Z0NBQUMsS0FBRztnQ0FBQ0osYUFBYTtnQ0FBQyxTQUN4Qzs7Ozs7O2dDQUFJO3NDQUVKLDhEQUFDVyxJQUFFOzRCQUFDTCxTQUFTLEVBQUMsa0NBQWtDOztnQ0FBQyxXQUN0QztnQ0FBQ1QsUUFBUTs7Ozs7O2dDQUNmO3NDQUVMLDhEQUFDUSxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsc0VBQXNFOzs4Q0FDbkYsOERBQUNJLEdBQUM7b0NBQUNKLFNBQVMsRUFBQyxjQUFjOzhDQUFDLDBCQUF3Qjs7Ozs7d0NBQUk7OENBQ3hELDhEQUFDSSxHQUFDO29DQUFDSixTQUFTLEVBQUMsY0FBYzs4Q0FBQyxlQUFhOzs7Ozt3Q0FBSTs4Q0FDN0MsOERBQUNJLEdBQUM7b0NBQUNKLFNBQVMsRUFBQyxjQUFjOzhDQUFDLE9BQUs7Ozs7O3dDQUFJOzhDQUNyQyw4REFBQ0ksR0FBQztvQ0FBQ0osU0FBUyxFQUFDLGNBQWM7OENBQUMsZ0JBQWM7Ozs7O3dDQUFJOzhDQUM5Qyw4REFBQ0ksR0FBQztvQ0FBQ0osU0FBUyxFQUFDLGNBQWM7OENBQUMsY0FBWTs7Ozs7d0NBQUk7Ozs7OztnQ0FDeEM7Ozs7Ozt3QkFDRTs7Ozs7b0JBQ0w7MEJBRVAsOERBQUNmLDBEQUFNOzs7O29CQUFHOzs7Ozs7WUFDTixDQUNOO0NBQ0g7R0FyQ1FHLE1BQU07O1FBQ0VGLGtEQUFTOzs7QUFzQzFCLCtEQUFlRSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzPzkyMGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zL2VzbSc7XG5cbmZ1bmN0aW9uIHNlYXJjaCgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgbG9jYXRpb24sIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgbnVtYmVyT2ZHdWVzdCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIGNvbnN0IGZvcm1hdGVkU3RhcnREYXRlID0gZm9ybWF0KG5ldyBEYXRlKHN0YXJ0RGF0ZSksICdkZCBNTU1NIHl5Jyk7XG4gIGNvbnN0IGZvcm1hdGVkRW5kRGF0ZSA9IGZvcm1hdChuZXcgRGF0ZShlbmREYXRlKSwgJ2RkIE1NTU0geXknKTtcbiAgY29uc3QgcmFuZ2UgPSBgJHtmb3JtYXRlZFN0YXJ0RGF0ZX0gLSAke2Zvcm1hdGVkRW5kRGF0ZX1gO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlblwiPlxuICAgICAgPEhlYWRlclxuICAgICAgICBwbGFjZWhvbGRlcj17YCR7bG9jYXRpb259IHwgJHtyYW5nZX0gfCAke251bWJlck9mR3Vlc3R9IGd1ZXN0cyBgfVxuICAgICAgLz5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgcHQtMTQgcHgtNlwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHNcIj5cbiAgICAgICAgICAgIDMwMCsgU3RheXMgLSB7cmFuZ2V9IC0ge251bWJlck9mR3Vlc3R9IGd1ZXN0c1xuICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LXNlbWlib2xkIG10LTIgbWItNlwiPlxuICAgICAgICAgICAgU3RheXMgaW4ge2xvY2F0aW9ufVxuICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzppbmxpbmUtZmxleCBtYi01IHNwYWNlLXgtMyB0ZXh0LWdyYXktODAwIHdoaXRlc3BhY2Utbm93cmFwXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJidXR0b25GaWx0ZXJcIj5DYW5jZWxsYXRpb24gRmxleGliaWxpdHk8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJidXR0b25GaWx0ZXJcIj5UeXBlIG9mIFBsYWNlPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYnV0dG9uRmlsdGVyXCI+UHJpY2U8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJidXR0b25GaWx0ZXJcIj5Sb29tcyBhbmQgQmVkczwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJ1dHRvbkZpbHRlclwiPk1vcmUgRmlsdGVyczwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaDtcbiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJGb290ZXIiLCJ1c2VSb3V0ZXIiLCJmb3JtYXQiLCJzZWFyY2giLCJyb3V0ZXIiLCJxdWVyeSIsImxvY2F0aW9uIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsIm51bWJlck9mR3Vlc3QiLCJmb3JtYXRlZFN0YXJ0RGF0ZSIsIkRhdGUiLCJmb3JtYXRlZEVuZERhdGUiLCJyYW5nZSIsImRpdiIsImNsYXNzTmFtZSIsInBsYWNlaG9sZGVyIiwibWFpbiIsInNlY3Rpb24iLCJwIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/search.js\n");

/***/ })

});