webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _store_actions_postsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/actions/postsActions */ \"./store/actions/postsActions.js\");\n/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/selectors */ \"./store/selectors.js\");\n/* harmony import */ var _components_Common_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Common/Header */ \"./components/Common/Header.js\");\n/* harmony import */ var _components_Common_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Common/Button */ \"./components/Common/Button.js\");\n/* harmony import */ var _components_MainPage_PostsList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MainPage/PostsList */ \"./components/MainPage/PostsList/index.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/pecherkiy/Documents/DevelopsToday/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    text-align: end;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\n\nvar IndexPage = function IndexPage() {\n  _s();\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n  var postListData = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(function (state) {\n    return Object(_store_selectors__WEBPACK_IMPORTED_MODULE_6__[\"postListDataSelector\"])(state);\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    dispatch(Object(_store_actions_postsActions__WEBPACK_IMPORTED_MODULE_5__[\"getPosts\"])());\n    return function () {\n      return dispatch(Object(_store_actions_postsActions__WEBPACK_IMPORTED_MODULE_5__[\"clearStore\"])());\n    };\n  }, []);\n  var data = postListData.data;\n  var sortedData = data.length > 0 ? data.sort(function (a, b) {\n    if (a.id > b.id) {\n      return -1;\n    }\n  }) : data;\n  console.log('sortedData: ', sortedData);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Common_Header__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }), __jsx(StyleDiv, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }, __jsx(_components_Common_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    primary: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 17\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/posts/new\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 21\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 25\n    }\n  }, \"Write post\")))), __jsx(_components_MainPage_PostsList__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    postsArray: data,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }));\n};\n\n_s(IndexPage, \"KAiaIK5LsaRc+axhAiv9gvKjkfA=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"]];\n});\n\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\nvar StyleDiv = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject());\n_c2 = StyleDiv;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"IndexPage\");\n$RefreshReg$(_c2, \"StyleDiv\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4UGFnZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJwb3N0TGlzdERhdGEiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdExpc3REYXRhU2VsZWN0b3IiLCJ1c2VFZmZlY3QiLCJnZXRQb3N0cyIsImNsZWFyU3RvcmUiLCJkYXRhIiwic29ydGVkRGF0YSIsImxlbmd0aCIsInNvcnQiLCJhIiwiYiIsImlkIiwiY29uc29sZSIsImxvZyIsIlN0eWxlRGl2Iiwic3R5bGVkIiwiZGl2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDcEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLFlBQVksR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0MsNkVBQW9CLENBQUNELEtBQUQsQ0FBL0I7QUFBQSxHQUFELENBQWhDO0FBRUFFLHlEQUFTLENBQUMsWUFBTTtBQUNaTixZQUFRLENBQUNPLDRFQUFRLEVBQVQsQ0FBUjtBQUNBLFdBQU87QUFBQSxhQUFNUCxRQUFRLENBQUNRLDhFQUFVLEVBQVgsQ0FBZDtBQUFBLEtBQVA7QUFDSCxHQUhRLEVBR04sRUFITSxDQUFUO0FBSm9CLE1BU1pDLElBVFksR0FTSFAsWUFURyxDQVNaTyxJQVRZO0FBVXBCLE1BQU1DLFVBQVUsR0FDWkQsSUFBSSxDQUFDRSxNQUFMLEdBQWMsQ0FBZCxHQUNNRixJQUFJLENBQUNHLElBQUwsQ0FBVSxVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNoQixRQUFJRCxDQUFDLENBQUNFLEVBQUYsR0FBT0QsQ0FBQyxDQUFDQyxFQUFiLEVBQWlCO0FBQ2IsYUFBTyxDQUFDLENBQVI7QUFDSDtBQUNKLEdBSkQsQ0FETixHQU1NTixJQVBWO0FBUUFPLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJQLFVBQTVCO0FBQ0EsU0FDSSxtRUFDSSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxpRUFBRDtBQUFRLFdBQU8sTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxZQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLENBREosQ0FESixDQUZKLEVBVUksTUFBQyxzRUFBRDtBQUFXLGNBQVUsRUFBRUQsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZKLENBREo7QUFjSCxDQWpDRDs7R0FBTVYsUztVQUNlRSx1RCxFQUNJRSx1RDs7O0tBRm5CSixTO0FBbUNTQSx3RUFBZjtBQUVBLElBQU1tQixRQUFRLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQWQ7TUFBTUYsUSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgZ2V0UG9zdHMsIGNsZWFyU3RvcmUgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL3Bvc3RzQWN0aW9ucyc7XG5pbXBvcnQgeyBwb3N0TGlzdERhdGFTZWxlY3RvciB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycyc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vSGVhZGVyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vQnV0dG9uJztcbmltcG9ydCBQb3N0c0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9NYWluUGFnZS9Qb3N0c0xpc3QnO1xuXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IHBvc3RMaXN0RGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gcG9zdExpc3REYXRhU2VsZWN0b3Ioc3RhdGUpKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGdldFBvc3RzKCkpO1xuICAgICAgICByZXR1cm4gKCkgPT4gZGlzcGF0Y2goY2xlYXJTdG9yZSgpKTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCB7IGRhdGEgfSA9IHBvc3RMaXN0RGF0YTtcbiAgICBjb25zdCBzb3J0ZWREYXRhID1cbiAgICAgICAgZGF0YS5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IGRhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKGEuaWQgPiBiLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBkYXRhO1xuICAgIGNvbnNvbGUubG9nKCdzb3J0ZWREYXRhOiAnLCBzb3J0ZWREYXRhKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgPFN0eWxlRGl2PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0cy9uZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPldyaXRlIHBvc3Q8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvU3R5bGVEaXY+XG5cbiAgICAgICAgICAgIDxQb3N0c0xpc3QgcG9zdHNBcnJheT17ZGF0YX0gLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcblxuY29uc3QgU3R5bGVEaXYgPSBzdHlsZWQuZGl2YFxuICAgIHRleHQtYWxpZ246IGVuZDtcbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})