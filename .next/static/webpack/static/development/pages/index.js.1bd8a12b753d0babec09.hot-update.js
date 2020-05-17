webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MainPage/PostsList/index.js":
/*!************************************************!*\
  !*** ./components/MainPage/PostsList/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/pecherkiy/Documents/DevelopsToday/components/MainPage/PostsList/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar PostsList = function PostsList(_ref) {\n  var postsArray = _ref.postsArray;\n  var renderItems = postsArray.length > 0 ? postsArray.map(function (el) {\n    return __jsx(StyleItem, {\n      key: el.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 19\n      }\n    }, __jsx(StyleTitle, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 23\n      }\n    }, el.title), __jsx(StyleText, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 23\n      }\n    }, el.body));\n  }) : [];\n  return __jsx(StyleList, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 12\n    }\n  }, renderItems);\n};\n\n_c = PostsList;\nPostsList.defaultProps = {\n  postsArray: [{\n    title: '',\n    body: '',\n    id: Date.now()\n  }]\n};\nPostsList.propTypes = {\n  postsArray: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostsList);\nvar StyleList = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ul.withConfig({\n  displayName: \"PostsList__StyleList\",\n  componentId: \"sc-13wnspi-0\"\n})([\"width:80%;margin:0 auto;list-style:none;\"]);\n_c2 = StyleList;\nvar StyleItem = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].li.withConfig({\n  displayName: \"PostsList__StyleItem\",\n  componentId: \"sc-13wnspi-1\"\n})([\"margin:1rem,0;border-top:1px solid #728a94;border-bottom:1px solid #728a94;\"]);\n_c3 = StyleItem;\nvar StyleTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].h3.withConfig({\n  displayName: \"PostsList__StyleTitle\",\n  componentId: \"sc-13wnspi-2\"\n})([\"font-size:20px;font-weight:400;\"]);\n_c4 = StyleTitle;\nvar StyleText = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].p.withConfig({\n  displayName: \"PostsList__StyleText\",\n  componentId: \"sc-13wnspi-3\"\n})([\"color:#728a94;font-weight:400;font-size:14px;\"]);\n_c5 = StyleText;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"PostsList\");\n$RefreshReg$(_c2, \"StyleList\");\n$RefreshReg$(_c3, \"StyleItem\");\n$RefreshReg$(_c4, \"StyleTitle\");\n$RefreshReg$(_c5, \"StyleText\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01haW5QYWdlL1Bvc3RzTGlzdC9pbmRleC5qcz83MmRjIl0sIm5hbWVzIjpbIlBvc3RzTGlzdCIsInBvc3RzQXJyYXkiLCJyZW5kZXJJdGVtcyIsImxlbmd0aCIsIm1hcCIsImVsIiwiaWQiLCJ0aXRsZSIsImJvZHkiLCJkZWZhdWx0UHJvcHMiLCJEYXRlIiwibm93IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJTdHlsZUxpc3QiLCJzdHlsZWQiLCJ1bCIsIlN0eWxlSXRlbSIsImxpIiwiU3R5bGVUaXRsZSIsImgzIiwiU3R5bGVUZXh0IiwicCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFvQjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFDbEMsTUFBTUMsV0FBVyxHQUNiRCxVQUFVLENBQUNFLE1BQVgsR0FBb0IsQ0FBcEIsR0FDTUYsVUFBVSxDQUFDRyxHQUFYLENBQWUsVUFBQ0MsRUFBRDtBQUFBLFdBQ1gsTUFBQyxTQUFEO0FBQVcsU0FBRyxFQUFFQSxFQUFFLENBQUNDLEVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFhRCxFQUFFLENBQUNFLEtBQWhCLENBREosRUFFSSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFZRixFQUFFLENBQUNHLElBQWYsQ0FGSixDQURXO0FBQUEsR0FBZixDQUROLEdBT00sRUFSVjtBQVVBLFNBQU8sTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBWU4sV0FBWixDQUFQO0FBQ0gsQ0FaRDs7S0FBTUYsUztBQWNOQSxTQUFTLENBQUNTLFlBQVYsR0FBeUI7QUFDckJSLFlBQVUsRUFBRSxDQUNSO0FBQ0lNLFNBQUssRUFBRSxFQURYO0FBRUlDLFFBQUksRUFBRSxFQUZWO0FBR0lGLE1BQUUsRUFBRUksSUFBSSxDQUFDQyxHQUFMO0FBSFIsR0FEUTtBQURTLENBQXpCO0FBVUFYLFNBQVMsQ0FBQ1ksU0FBVixHQUFzQjtBQUNsQlgsWUFBVSxFQUFFWSxpREFBUyxDQUFDQyxPQUFWLENBQWtCRCxpREFBUyxDQUFDRSxNQUE1QixFQUFvQ0M7QUFEOUIsQ0FBdEI7QUFJZWhCLHdFQUFmO0FBRUEsSUFBTWlCLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsRUFBVjtBQUFBO0FBQUE7QUFBQSxnREFBZjtNQUFNRixTO0FBTU4sSUFBTUcsU0FBUyxHQUFHRix5REFBTSxDQUFDRyxFQUFWO0FBQUE7QUFBQTtBQUFBLG1GQUFmO01BQU1ELFM7QUFNTixJQUFNRSxVQUFVLEdBQUdKLHlEQUFNLENBQUNLLEVBQVY7QUFBQTtBQUFBO0FBQUEsdUNBQWhCO01BQU1ELFU7QUFLTixJQUFNRSxTQUFTLEdBQUdOLHlEQUFNLENBQUNPLENBQVY7QUFBQTtBQUFBO0FBQUEscURBQWY7TUFBTUQsUyIsImZpbGUiOiIuL2NvbXBvbmVudHMvTWFpblBhZ2UvUG9zdHNMaXN0L2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBQb3N0c0xpc3QgPSAoeyBwb3N0c0FycmF5IH0pID0+IHtcbiAgICBjb25zdCByZW5kZXJJdGVtcyA9XG4gICAgICAgIHBvc3RzQXJyYXkubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBwb3N0c0FycmF5Lm1hcCgoZWwpID0+IChcbiAgICAgICAgICAgICAgICAgIDxTdHlsZUl0ZW0ga2V5PXtlbC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFN0eWxlVGl0bGU+e2VsLnRpdGxlfTwvU3R5bGVUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVUZXh0PntlbC5ib2R5fTwvU3R5bGVUZXh0PlxuICAgICAgICAgICAgICAgICAgPC9TdHlsZUl0ZW0+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICA6IFtdO1xuXG4gICAgcmV0dXJuIDxTdHlsZUxpc3Q+e3JlbmRlckl0ZW1zfTwvU3R5bGVMaXN0Pjtcbn07XG5cblBvc3RzTGlzdC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcG9zdHNBcnJheTogW1xuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICBib2R5OiAnJyxcbiAgICAgICAgICAgIGlkOiBEYXRlLm5vdygpLFxuICAgICAgICB9LFxuICAgIF0sXG59O1xuXG5Qb3N0c0xpc3QucHJvcFR5cGVzID0ge1xuICAgIHBvc3RzQXJyYXk6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0c0xpc3Q7XG5cbmNvbnN0IFN0eWxlTGlzdCA9IHN0eWxlZC51bGBcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG5gO1xuXG5jb25zdCBTdHlsZUl0ZW0gPSBzdHlsZWQubGlgXG4gICAgbWFyZ2luOiAxcmVtLCAwO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNzI4YTk0O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzI4YTk0O1xuYDtcblxuY29uc3QgU3R5bGVUaXRsZSA9IHN0eWxlZC5oM2BcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbmA7XG5cbmNvbnN0IFN0eWxlVGV4dCA9IHN0eWxlZC5wYFxuICAgIGNvbG9yOiAjNzI4YTk0O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MainPage/PostsList/index.js\n");

/***/ })

})