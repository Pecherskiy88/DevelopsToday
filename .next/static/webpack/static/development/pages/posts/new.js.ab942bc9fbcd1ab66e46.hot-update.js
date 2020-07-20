webpackHotUpdate("static/development/pages/posts/new.js",{

/***/ "./components/CreatePostPage/CreatePost/index.js":
/*!*******************************************************!*\
  !*** ./components/CreatePostPage/CreatePost/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Common_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Common/Button */ \"./components/Common/Button.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/pecherkiy/Documents/DevelopsToday/components/CreatePostPage/CreatePost/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar CreatePost = function CreatePost(props) {\n  return __jsx(StyleDiv, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, __jsx(StyleInput, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n    placeholder: \"Title\",\n    name: \"title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }\n  })), __jsx(StyleArea, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n    placeholder: \"Type your story...\",\n    name: \"body\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }\n  })), __jsx(_Common_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    primary: true,\n    onClick: props.onClick,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }, \"Upload\"));\n};\n\n_c = CreatePost;\nCreatePost.propTypes = {\n  titleValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  bodyValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,\n  onClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreatePost);\nvar StyleDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"CreatePost__StyleDiv\",\n  componentId: \"sc-130d4yy-0\"\n})([\"width:80%;margin:0 auto;padding:36px 0;display:flex;justify-content:center;align-items:center;flex-wrap:wrap;\"]);\n_c2 = StyleDiv;\nvar StyleInput = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].input.withConfig({\n  displayName: \"CreatePost__StyleInput\",\n  componentId: \"sc-130d4yy-1\"\n})([\"width:100%;height:40px;border-radius:5px;padding-left:10px;font-size:20px;\"]);\n_c3 = StyleInput;\nvar StyleArea = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].textarea.withConfig({\n  displayName: \"CreatePost__StyleArea\",\n  componentId: \"sc-130d4yy-2\"\n})([\"width:100%;min-height:200px;border-radius:5px;padding-left:10px;padding-top:10px;font-size:16px;margin-top:30px;\"]);\n_c4 = StyleArea;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"CreatePost\");\n$RefreshReg$(_c2, \"StyleDiv\");\n$RefreshReg$(_c3, \"StyleInput\");\n$RefreshReg$(_c4, \"StyleArea\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NyZWF0ZVBvc3RQYWdlL0NyZWF0ZVBvc3QvaW5kZXguanM/ZDAxOSJdLCJuYW1lcyI6WyJDcmVhdGVQb3N0IiwicHJvcHMiLCJvbkNsaWNrIiwicHJvcFR5cGVzIiwidGl0bGVWYWx1ZSIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvZHlWYWx1ZSIsIm9uQ2hhbmdlIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJTdHlsZURpdiIsInN0eWxlZCIsImRpdiIsIlN0eWxlSW5wdXQiLCJpbnB1dCIsIlN0eWxlQXJlYSIsInRleHRhcmVhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUMxQixTQUNJLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxVQUFELHlGQUFnQkEsS0FBaEI7QUFBdUIsZUFBVyxFQUFDLE9BQW5DO0FBQTJDLFFBQUksRUFBQyxPQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREosRUFFSSxNQUFDLFNBQUQseUZBQWVBLEtBQWY7QUFBc0IsZUFBVyxFQUFDLG9CQUFsQztBQUF1RCxRQUFJLEVBQUMsTUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUZKLEVBR0ksTUFBQyxzREFBRDtBQUFRLFdBQU8sTUFBZjtBQUFnQixXQUFPLEVBQUVBLEtBQUssQ0FBQ0MsT0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKLENBREo7QUFTSCxDQVZEOztLQUFNRixVO0FBWU5BLFVBQVUsQ0FBQ0csU0FBWCxHQUF1QjtBQUNuQkMsWUFBVSxFQUFFQyxpREFBUyxDQUFDQyxNQURIO0FBRW5CQyxXQUFTLEVBQUVGLGlEQUFTLENBQUNDLE1BRkY7QUFHbkJFLFVBQVEsRUFBRUgsaURBQVMsQ0FBQ0ksSUFBVixDQUFlQyxVQUhOO0FBSW5CUixTQUFPLEVBQUVHLGlEQUFTLENBQUNJLElBQVYsQ0FBZUM7QUFKTCxDQUF2QjtBQU9lVix5RUFBZjtBQUVBLElBQU1XLFFBQVEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxxSEFBZDtNQUFNRixRO0FBVU4sSUFBTUcsVUFBVSxHQUFHRix5REFBTSxDQUFDRyxLQUFWO0FBQUE7QUFBQTtBQUFBLGtGQUFoQjtNQUFNRCxVO0FBUU4sSUFBTUUsU0FBUyxHQUFHSix5REFBTSxDQUFDSyxRQUFWO0FBQUE7QUFBQTtBQUFBLHdIQUFmO01BQU1ELFMiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NyZWF0ZVBvc3RQYWdlL0NyZWF0ZVBvc3QvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL0NvbW1vbi9CdXR0b24nO1xuXG5jb25zdCBDcmVhdGVQb3N0ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlRGl2PlxuICAgICAgICAgICAgPFN0eWxlSW5wdXQgey4uLnByb3BzfSBwbGFjZWhvbGRlcj1cIlRpdGxlXCIgbmFtZT1cInRpdGxlXCIgLz5cbiAgICAgICAgICAgIDxTdHlsZUFyZWEgey4uLnByb3BzfSBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBzdG9yeS4uLlwiIG5hbWU9XCJib2R5XCIgLz5cbiAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cbiAgICAgICAgICAgICAgICBVcGxvYWRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1N0eWxlRGl2PlxuICAgICk7XG59O1xuXG5DcmVhdGVQb3N0LnByb3BUeXBlcyA9IHtcbiAgICB0aXRsZVZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGJvZHlWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlUG9zdDtcblxuY29uc3QgU3R5bGVEaXYgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMzZweCAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5gO1xuXG5jb25zdCBTdHlsZUlucHV0ID0gc3R5bGVkLmlucHV0YFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbmA7XG5cbmNvbnN0IFN0eWxlQXJlYSA9IHN0eWxlZC50ZXh0YXJlYWBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CreatePostPage/CreatePost/index.js\n");

/***/ })

})