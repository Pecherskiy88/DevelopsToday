webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _store_actions_postsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/actions/postsActions */ \"./store/actions/postsActions.js\");\n/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/selectors */ \"./store/selectors.js\");\n/* harmony import */ var _components_Common_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Common/Header */ \"./components/Common/Header.js\");\n/* harmony import */ var _components_Common_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Common/Button */ \"./components/Common/Button.js\");\n/* harmony import */ var _components_MainPage_PostsList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MainPage/PostsList */ \"./components/MainPage/PostsList/index.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/pecherkiy/Documents/DevelopsToday/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    text-align: end;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\n\nvar IndexPage = function IndexPage() {\n  _s();\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n  var postListData = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(function (state) {\n    return Object(_store_selectors__WEBPACK_IMPORTED_MODULE_6__[\"postListDataSelector\"])(state);\n  });\n  var createPostData = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(function (state) {\n    return Object(_store_selectors__WEBPACK_IMPORTED_MODULE_6__[\"createPostSelector\"])(state);\n  });\n  var sent = createPostData.sent;\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    dispatch(Object(_store_actions_postsActions__WEBPACK_IMPORTED_MODULE_5__[\"getPosts\"])());\n    return function () {\n      return dispatch(Object(_store_actions_postsActions__WEBPACK_IMPORTED_MODULE_5__[\"clearStore\"])());\n    };\n  }, [sent]);\n  var data = postListData.data; // Сортируем, новые посты в начале списка\n\n  var sortedData = data.length > 0 ? data.sort(function (a, b) {\n    if (a.id > b.id) {\n      return -1;\n    }\n  }) : data;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Common_Header__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }), __jsx(StyleDiv, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }, __jsx(_components_Common_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    primary: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 17\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/posts/new\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 21\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 25\n    }\n  }, \"Write post\")))), __jsx(_components_MainPage_PostsList__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    postsArray: sortedData,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }));\n};\n\n_s(IndexPage, \"oBbmuNgFK/nvhEvbj9JnuUqvhBg=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"]];\n});\n\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\nvar StyleDiv = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject());\n_c2 = StyleDiv;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"IndexPage\");\n$RefreshReg$(_c2, \"StyleDiv\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4UGFnZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJwb3N0TGlzdERhdGEiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdExpc3REYXRhU2VsZWN0b3IiLCJjcmVhdGVQb3N0RGF0YSIsImNyZWF0ZVBvc3RTZWxlY3RvciIsInNlbnQiLCJ1c2VFZmZlY3QiLCJnZXRQb3N0cyIsImNsZWFyU3RvcmUiLCJkYXRhIiwic29ydGVkRGF0YSIsImxlbmd0aCIsInNvcnQiLCJhIiwiYiIsImlkIiwiU3R5bGVEaXYiLCJzdHlsZWQiLCJkaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUNwQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQyw2RUFBb0IsQ0FBQ0QsS0FBRCxDQUEvQjtBQUFBLEdBQUQsQ0FBaEM7QUFDQSxNQUFNRSxjQUFjLEdBQUdILCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdHLDJFQUFrQixDQUFDSCxLQUFELENBQTdCO0FBQUEsR0FBRCxDQUFsQztBQUhvQixNQUlaSSxJQUpZLEdBSUhGLGNBSkcsQ0FJWkUsSUFKWTtBQU1wQkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pULFlBQVEsQ0FBQ1UsNEVBQVEsRUFBVCxDQUFSO0FBQ0EsV0FBTztBQUFBLGFBQU1WLFFBQVEsQ0FBQ1csOEVBQVUsRUFBWCxDQUFkO0FBQUEsS0FBUDtBQUNILEdBSFEsRUFHTixDQUFDSCxJQUFELENBSE0sQ0FBVDtBQU5vQixNQVdaSSxJQVhZLEdBV0hWLFlBWEcsQ0FXWlUsSUFYWSxFQWFwQjs7QUFDQSxNQUFNQyxVQUFVLEdBQ1pELElBQUksQ0FBQ0UsTUFBTCxHQUFjLENBQWQsR0FDTUYsSUFBSSxDQUFDRyxJQUFMLENBQVUsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDaEIsUUFBSUQsQ0FBQyxDQUFDRSxFQUFGLEdBQU9ELENBQUMsQ0FBQ0MsRUFBYixFQUFpQjtBQUNiLGFBQU8sQ0FBQyxDQUFSO0FBQ0g7QUFDSixHQUpELENBRE4sR0FNTU4sSUFQVjtBQVNBLFNBQ0ksbUVBQ0ksTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSSxNQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsaUVBQUQ7QUFBUSxXQUFPLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsWUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixDQURKLENBREosQ0FGSixFQVVJLE1BQUMsc0VBQUQ7QUFBVyxjQUFVLEVBQUVDLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWSixDQURKO0FBY0gsQ0FyQ0Q7O0dBQU1kLFM7VUFDZUUsdUQsRUFDSUUsdUQsRUFDRUEsdUQ7OztLQUhyQkosUztBQXVDU0Esd0VBQWY7QUFFQSxJQUFNb0IsUUFBUSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFkO01BQU1GLFEiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IGdldFBvc3RzLCBjbGVhclN0b3JlIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9wb3N0c0FjdGlvbnMnO1xuaW1wb3J0IHsgcG9zdExpc3REYXRhU2VsZWN0b3IsIGNyZWF0ZVBvc3RTZWxlY3RvciB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycyc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vSGVhZGVyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vQnV0dG9uJztcbmltcG9ydCBQb3N0c0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9NYWluUGFnZS9Qb3N0c0xpc3QnO1xuXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IHBvc3RMaXN0RGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gcG9zdExpc3REYXRhU2VsZWN0b3Ioc3RhdGUpKTtcbiAgICBjb25zdCBjcmVhdGVQb3N0RGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gY3JlYXRlUG9zdFNlbGVjdG9yKHN0YXRlKSk7XG4gICAgY29uc3QgeyBzZW50IH0gPSBjcmVhdGVQb3N0RGF0YTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGdldFBvc3RzKCkpO1xuICAgICAgICByZXR1cm4gKCkgPT4gZGlzcGF0Y2goY2xlYXJTdG9yZSgpKTtcbiAgICB9LCBbc2VudF0pO1xuXG4gICAgY29uc3QgeyBkYXRhIH0gPSBwb3N0TGlzdERhdGE7XG5cbiAgICAvLyDQodC+0YDRgtC40YDRg9C10LwsINC90L7QstGL0LUg0L/QvtGB0YLRiyDQsiDQvdCw0YfQsNC70LUg0YHQv9C40YHQutCwXG4gICAgY29uc3Qgc29ydGVkRGF0YSA9XG4gICAgICAgIGRhdGEubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBkYXRhLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChhLmlkID4gYi5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogZGF0YTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICA8U3R5bGVEaXY+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3RzL25ld1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+V3JpdGUgcG9zdDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9TdHlsZURpdj5cblxuICAgICAgICAgICAgPFBvc3RzTGlzdCBwb3N0c0FycmF5PXtzb3J0ZWREYXRhfSAvPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xuXG5jb25zdCBTdHlsZURpdiA9IHN0eWxlZC5kaXZgXG4gICAgdGV4dC1hbGlnbjogZW5kO1xuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})