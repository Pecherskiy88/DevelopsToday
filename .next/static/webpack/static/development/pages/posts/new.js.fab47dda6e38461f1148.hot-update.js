webpackHotUpdate("static/development/pages/posts/new.js",{

/***/ "./pages/posts/new.js":
/*!****************************!*\
  !*** ./pages/posts/new.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_postsActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/postsActions */ \"./store/actions/postsActions.js\");\n/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/selectors */ \"./store/selectors.js\");\n/* harmony import */ var _components_Common_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Common/Header */ \"./components/Common/Header.js\");\n/* harmony import */ var _components_Common_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Common/Button */ \"./components/Common/Button.js\");\n/* harmony import */ var _components_CreatePostPage_CreatePost__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/CreatePostPage/CreatePost */ \"./components/CreatePostPage/CreatePost/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/pecherkiy/Documents/DevelopsToday/pages/posts/new.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nvar NewPost = function NewPost() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"])();\n  var postData = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(function (state) {\n    return Object(_store_selectors__WEBPACK_IMPORTED_MODULE_5__[\"createPostSelector\"])(state);\n  });\n  var title = postData.title,\n      body = postData.body,\n      sent = postData.sent;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    return function () {\n      return dispatch(Object(_store_actions_postsActions__WEBPACK_IMPORTED_MODULE_4__[\"clearStore\"])());\n    };\n  }, []);\n\n  var handleChange = function handleChange(e) {\n    var _e$target = e.target,\n        name = _e$target.name,\n        value = _e$target.value;\n    dispatch(Object(_store_actions_postsActions__WEBPACK_IMPORTED_MODULE_4__[\"setFieldValue\"])(name, value));\n  };\n\n  var onSubmit = function onSubmit() {\n    var minTitleSymbols = 2;\n    var minBodySymbols = 5;\n\n    if (title.length >= minTitleSymbols && body.length >= minBodySymbols) {\n      dispatch(Object(_store_actions_postsActions__WEBPACK_IMPORTED_MODULE_4__[\"sendPost\"])({\n        title: title,\n        body: body\n      }));\n\n      if (sent) {\n        router.push('/');\n      }\n    } else {\n      window.alert(\"\\n            Min symbols for Title: \".concat(minTitleSymbols, \" and your Story: \").concat(minBodySymbols));\n    }\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Common_Header__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  }), __jsx(_components_Common_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 21\n    }\n  }, \"BACK\"))), __jsx(_components_CreatePostPage_CreatePost__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onChange: handleChange,\n    onClick: onSubmit,\n    titleValue: title,\n    bodyValue: body,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }\n  }));\n};\n\n_s(NewPost, \"DrxzWBJo1LtCjzHLjApKeZURv5U=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"], react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"]];\n});\n\n_c = NewPost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewPost);\n\nvar _c;\n\n$RefreshReg$(_c, \"NewPost\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy9uZXcuanM/NGNjMSJdLCJuYW1lcyI6WyJOZXdQb3N0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInBvc3REYXRhIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImNyZWF0ZVBvc3RTZWxlY3RvciIsInRpdGxlIiwiYm9keSIsInNlbnQiLCJ1c2VFZmZlY3QiLCJjbGVhclN0b3JlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNldEZpZWxkVmFsdWUiLCJvblN1Ym1pdCIsIm1pblRpdGxlU3ltYm9scyIsIm1pbkJvZHlTeW1ib2xzIiwibGVuZ3RoIiwic2VuZFBvc3QiLCJwdXNoIiwid2luZG93IiwiYWxlcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ2xCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBRUEsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQywyRUFBa0IsQ0FBQ0QsS0FBRCxDQUE3QjtBQUFBLEdBQUQsQ0FBNUI7QUFKa0IsTUFLVkUsS0FMVSxHQUtZSixRQUxaLENBS1ZJLEtBTFU7QUFBQSxNQUtIQyxJQUxHLEdBS1lMLFFBTFosQ0FLSEssSUFMRztBQUFBLE1BS0dDLElBTEgsR0FLWU4sUUFMWixDQUtHTSxJQUxIO0FBT2xCQyx5REFBUyxDQUFDLFlBQU07QUFDWixXQUFPO0FBQUEsYUFBTVQsUUFBUSxDQUFDVSw4RUFBVSxFQUFYLENBQWQ7QUFBQSxLQUFQO0FBQ0gsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFBQSxvQkFDQUEsQ0FBQyxDQUFDQyxNQURGO0FBQUEsUUFDaEJDLElBRGdCLGFBQ2hCQSxJQURnQjtBQUFBLFFBQ1ZDLEtBRFUsYUFDVkEsS0FEVTtBQUV4QmYsWUFBUSxDQUFDZ0IsaUZBQWEsQ0FBQ0YsSUFBRCxFQUFPQyxLQUFQLENBQWQsQ0FBUjtBQUNILEdBSEQ7O0FBS0EsTUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNuQixRQUFNQyxlQUFlLEdBQUcsQ0FBeEI7QUFDQSxRQUFNQyxjQUFjLEdBQUcsQ0FBdkI7O0FBRUEsUUFBSWIsS0FBSyxDQUFDYyxNQUFOLElBQWdCRixlQUFoQixJQUFtQ1gsSUFBSSxDQUFDYSxNQUFMLElBQWVELGNBQXRELEVBQXNFO0FBQ2xFbkIsY0FBUSxDQUFDcUIsNEVBQVEsQ0FBQztBQUFFZixhQUFLLEVBQUxBLEtBQUY7QUFBU0MsWUFBSSxFQUFKQTtBQUFULE9BQUQsQ0FBVCxDQUFSOztBQUNBLFVBQUlDLElBQUosRUFBVTtBQUNOVixjQUFNLENBQUN3QixJQUFQLENBQVksR0FBWjtBQUNIO0FBQ0osS0FMRCxNQUtPO0FBQ0hDLFlBQU0sQ0FBQ0MsS0FBUCxnREFDeUJOLGVBRHpCLDhCQUM0REMsY0FENUQ7QUFFSDtBQUNKLEdBYkQ7O0FBZUEsU0FDSSxtRUFDSSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLENBREosQ0FGSixFQU9JLE1BQUMsNkVBQUQ7QUFBWSxZQUFRLEVBQUVSLFlBQXRCO0FBQW9DLFdBQU8sRUFBRU0sUUFBN0M7QUFBdUQsY0FBVSxFQUFFWCxLQUFuRTtBQUEwRSxhQUFTLEVBQUVDLElBQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixDQURKO0FBV0gsQ0ExQ0Q7O0dBQU1WLE87VUFDYUUscUQsRUFDRUUsdUQsRUFFQUUsdUQ7OztLQUpmTixPO0FBNENTQSxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Bvc3RzL25ldy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBzZXRGaWVsZFZhbHVlLCBzZW5kUG9zdCwgY2xlYXJTdG9yZSB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMvcG9zdHNBY3Rpb25zJztcbmltcG9ydCB7IGNyZWF0ZVBvc3RTZWxlY3RvciB9IGZyb20gJy4uLy4uL3N0b3JlL3NlbGVjdG9ycyc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db21tb24vSGVhZGVyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db21tb24vQnV0dG9uJztcbmltcG9ydCBDcmVhdGVQb3N0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ3JlYXRlUG9zdFBhZ2UvQ3JlYXRlUG9zdCc7XG5cbmNvbnN0IE5ld1Bvc3QgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gICAgY29uc3QgcG9zdERhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IGNyZWF0ZVBvc3RTZWxlY3RvcihzdGF0ZSkpO1xuICAgIGNvbnN0IHsgdGl0bGUsIGJvZHksIHNlbnQgfSA9IHBvc3REYXRhO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmV0dXJuICgpID0+IGRpc3BhdGNoKGNsZWFyU3RvcmUoKSk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgICAgIGRpc3BhdGNoKHNldEZpZWxkVmFsdWUobmFtZSwgdmFsdWUpKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25TdWJtaXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1pblRpdGxlU3ltYm9scyA9IDI7XG4gICAgICAgIGNvbnN0IG1pbkJvZHlTeW1ib2xzID0gNTtcblxuICAgICAgICBpZiAodGl0bGUubGVuZ3RoID49IG1pblRpdGxlU3ltYm9scyAmJiBib2R5Lmxlbmd0aCA+PSBtaW5Cb2R5U3ltYm9scykge1xuICAgICAgICAgICAgZGlzcGF0Y2goc2VuZFBvc3QoeyB0aXRsZSwgYm9keSB9KSk7XG4gICAgICAgICAgICBpZiAoc2VudCkge1xuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoYFxuICAgICAgICAgICAgTWluIHN5bWJvbHMgZm9yIFRpdGxlOiAke21pblRpdGxlU3ltYm9sc30gYW5kIHlvdXIgU3Rvcnk6ICR7bWluQm9keVN5bWJvbHN9YCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgIDxCdXR0b24+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGE+QkFDSzwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxDcmVhdGVQb3N0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IG9uQ2xpY2s9e29uU3VibWl0fSB0aXRsZVZhbHVlPXt0aXRsZX0gYm9keVZhbHVlPXtib2R5fSAvPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3UG9zdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/new.js\n");

/***/ })

})