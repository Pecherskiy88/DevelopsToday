webpackHotUpdate("static/development/pages/posts/[id].js",{

/***/ "./pages/posts/[id].js":
/*!*****************************!*\
  !*** ./pages/posts/[id].js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_postsActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/postsActions */ \"./store/actions/postsActions.js\");\n/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/selectors */ \"./store/selectors.js\");\n/* harmony import */ var _components_Common_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Common/Header */ \"./components/Common/Header.js\");\n/* harmony import */ var _components_Common_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Common/Button */ \"./components/Common/Button.js\");\n/* harmony import */ var _components_CurrentPostPage_Post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/CurrentPostPage/Post */ \"./components/CurrentPostPage/Post/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/pecherkiy/Documents/DevelopsToday/pages/posts/[id].js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nvar CurrentPost = function CurrentPost() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var id = router.query.id;\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"])();\n  var currentPost = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(function (state) {\n    return Object(_store_selectors__WEBPACK_IMPORTED_MODULE_5__[\"currentPostDataSelector\"])(state);\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    dispatch(Object(_store_actions_postsActions__WEBPACK_IMPORTED_MODULE_4__[\"getCurrentPost\"])(id));\n    return function () {\n      return Object(_store_actions_postsActions__WEBPACK_IMPORTED_MODULE_4__[\"clearStore\"])();\n    };\n  }, []);\n  var post = currentPost.post;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Common_Header__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }), __jsx(_components_Common_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 21\n    }\n  }, \"BACK\"))), __jsx(_components_CurrentPostPage_Post__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    post: post,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }));\n};\n\n_s(CurrentPost, \"pGGvTP/2fIrQCfgq7cbmbNBOopc=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"], react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"]];\n});\n\n_c = CurrentPost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CurrentPost);\n\nvar _c;\n\n$RefreshReg$(_c, \"CurrentPost\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy8uanM/Yzg2ZiJdLCJuYW1lcyI6WyJDdXJyZW50UG9zdCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiY3VycmVudFBvc3QiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiY3VycmVudFBvc3REYXRhU2VsZWN0b3IiLCJ1c2VFZmZlY3QiLCJnZXRDdXJyZW50UG9zdCIsImNsZWFyU3RvcmUiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUN0QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRHNCLE1BRWRDLEVBRmMsR0FFUEYsTUFBTSxDQUFDRyxLQUZBLENBRWRELEVBRmM7QUFJdEIsTUFBTUUsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLFdBQVcsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0MsZ0ZBQXVCLENBQUNELEtBQUQsQ0FBbEM7QUFBQSxHQUFELENBQS9CO0FBRUFFLHlEQUFTLENBQUMsWUFBTTtBQUNaTixZQUFRLENBQUNPLGtGQUFjLENBQUNULEVBQUQsQ0FBZixDQUFSO0FBQ0EsV0FBTztBQUFBLGFBQU1VLDhFQUFVLEVBQWhCO0FBQUEsS0FBUDtBQUNILEdBSFEsRUFHTixFQUhNLENBQVQ7QUFQc0IsTUFZZEMsSUFaYyxHQVlMUCxXQVpLLENBWWRPLElBWmM7QUFjdEIsU0FDSSxtRUFDSSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLENBREosQ0FGSixFQU9JLE1BQUMsd0VBQUQ7QUFBTSxRQUFJLEVBQUVBLElBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBKLENBREo7QUFXSCxDQXpCRDs7R0FBTWQsVztVQUNhRSxxRCxFQUdFSSx1RCxFQUNHRSx1RDs7O0tBTGxCUixXO0FBMkJTQSwwRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Bvc3RzL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgZ2V0Q3VycmVudFBvc3QsIGNsZWFyU3RvcmUgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL3Bvc3RzQWN0aW9ucyc7XG5pbXBvcnQgeyBjdXJyZW50UG9zdERhdGFTZWxlY3RvciB9IGZyb20gJy4uLy4uL3N0b3JlL3NlbGVjdG9ycyc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db21tb24vSGVhZGVyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db21tb24vQnV0dG9uJztcbmltcG9ydCBQb3N0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ3VycmVudFBvc3RQYWdlL1Bvc3QnO1xuXG5jb25zdCBDdXJyZW50UG9zdCA9ICgpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3QgY3VycmVudFBvc3QgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IGN1cnJlbnRQb3N0RGF0YVNlbGVjdG9yKHN0YXRlKSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChnZXRDdXJyZW50UG9zdChpZCkpO1xuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJTdG9yZSgpO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IHsgcG9zdCB9ID0gY3VycmVudFBvc3Q7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgPEJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICA8YT5CQUNLPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPFBvc3QgcG9zdD17cG9zdH0gLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1cnJlbnRQb3N0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[id].js\n");

/***/ })

})