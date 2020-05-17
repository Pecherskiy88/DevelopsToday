webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store/reducers/postsReducer.js":
/*!****************************************!*\
  !*** ./store/reducers/postsReducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ \"./store/types.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar GET_POSTS_INIT = _types__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].GET_POSTS_INIT,\n    GET_POSTS_SUCCESS = _types__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].GET_POSTS_SUCCESS,\n    GET_POSTS_FAILURE = _types__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].GET_POSTS_FAILURE,\n    CLEAR_STORE = _types__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].CLEAR_STORE;\nvar initialPostsState = {\n  data: [],\n  loading: false,\n  loaded: false,\n  error: false,\n  errorData: {}\n};\n\nvar postsReducer = function postsReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialPostsState;\n\n  var _ref = arguments.length > 1 ? arguments[1] : undefined,\n      type = _ref.type,\n      payload = _ref.payload;\n\n  switch (type) {\n    case GET_POSTS_INIT:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: true,\n        loaded: false,\n        error: false,\n        errorData: {}\n      });\n\n    case GET_POSTS_SUCCESS:\n      {\n        var data = payload.data;\n        return _objectSpread(_objectSpread({}, state), {}, {\n          data: data,\n          loading: false,\n          loaded: true,\n          error: false,\n          errorData: {}\n        });\n      }\n\n    case GET_POSTS_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: false,\n        loaded: false,\n        error: true,\n        errorData: payload\n      });\n\n    case CLEAR_STORE:\n      return _objectSpread(_objectSpread({}, state), initialPostsState);\n\n    default:\n      return state;\n  }\n};\n\nvar initialCurrentPostState = {\n  post: {\n    title: ''\n  }\n};\n\nvar currentPostReducer = function currentPostReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialCurrentPostState;\n\n  var _ref2 = arguments.length > 1 ? arguments[1] : undefined,\n      type = _ref2.type,\n      payload = _ref2.payload;\n\n  switch (type) {\n    case GET_POSTS_INIT:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: true,\n        loaded: false,\n        error: false,\n        errorData: {}\n      });\n\n    case GET_POSTS_SUCCESS:\n      {\n        var data = payload.data;\n        return _objectSpread(_objectSpread({}, state), {}, {\n          data: data,\n          loading: false,\n          loaded: true,\n          error: false,\n          errorData: {}\n        });\n      }\n\n    case GET_POSTS_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: false,\n        loaded: false,\n        error: true,\n        errorData: payload\n      });\n\n    case CLEAR_STORE:\n      return _objectSpread(_objectSpread({}, state), initialPostsState);\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"combineReducers\"])({\n  postsListData: postsReducer,\n  currentPost: currentPostReducer\n}));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9wb3N0c1JlZHVjZXIuanM/NjgwYyJdLCJuYW1lcyI6WyJHRVRfUE9TVFNfSU5JVCIsImFjdGlvblR5cGVzIiwiR0VUX1BPU1RTX1NVQ0NFU1MiLCJHRVRfUE9TVFNfRkFJTFVSRSIsIkNMRUFSX1NUT1JFIiwiaW5pdGlhbFBvc3RzU3RhdGUiLCJkYXRhIiwibG9hZGluZyIsImxvYWRlZCIsImVycm9yIiwiZXJyb3JEYXRhIiwicG9zdHNSZWR1Y2VyIiwic3RhdGUiLCJ0eXBlIiwicGF5bG9hZCIsImluaXRpYWxDdXJyZW50UG9zdFN0YXRlIiwicG9zdCIsInRpdGxlIiwiY3VycmVudFBvc3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwicG9zdHNMaXN0RGF0YSIsImN1cnJlbnRQb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtJQUVRQSxjLEdBQXNFQyxrRCxDQUF0RUQsYztJQUFnQkUsaUIsR0FBc0RELGtELENBQXREQyxpQjtJQUFtQkMsaUIsR0FBbUNGLGtELENBQW5DRSxpQjtJQUFtQkMsVyxHQUFnQkgsa0QsQ0FBaEJHLFc7QUFFOUQsSUFBTUMsaUJBQWlCLEdBQUc7QUFDdEJDLE1BQUksRUFBRSxFQURnQjtBQUV0QkMsU0FBTyxFQUFFLEtBRmE7QUFHdEJDLFFBQU0sRUFBRSxLQUhjO0FBSXRCQyxPQUFLLEVBQUUsS0FKZTtBQUt0QkMsV0FBUyxFQUFFO0FBTFcsQ0FBMUI7O0FBUUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBa0Q7QUFBQSxNQUFqREMsS0FBaUQsdUVBQXpDUCxpQkFBeUM7O0FBQUE7QUFBQSxNQUFwQlEsSUFBb0IsUUFBcEJBLElBQW9CO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjOztBQUNuRSxVQUFRRCxJQUFSO0FBQ0ksU0FBS2IsY0FBTDtBQUNJLDZDQUFZWSxLQUFaO0FBQW1CTCxlQUFPLEVBQUUsSUFBNUI7QUFBa0NDLGNBQU0sRUFBRSxLQUExQztBQUFpREMsYUFBSyxFQUFFLEtBQXhEO0FBQStEQyxpQkFBUyxFQUFFO0FBQTFFOztBQUNKLFNBQUtSLGlCQUFMO0FBQXdCO0FBQUEsWUFDWkksSUFEWSxHQUNIUSxPQURHLENBQ1pSLElBRFk7QUFFcEIsK0NBQVlNLEtBQVo7QUFBbUJOLGNBQUksRUFBSkEsSUFBbkI7QUFBeUJDLGlCQUFPLEVBQUUsS0FBbEM7QUFBeUNDLGdCQUFNLEVBQUUsSUFBakQ7QUFBdURDLGVBQUssRUFBRSxLQUE5RDtBQUFxRUMsbUJBQVMsRUFBRTtBQUFoRjtBQUNIOztBQUNELFNBQUtQLGlCQUFMO0FBQ0ksNkNBQVlTLEtBQVo7QUFBbUJMLGVBQU8sRUFBRSxLQUE1QjtBQUFtQ0MsY0FBTSxFQUFFLEtBQTNDO0FBQWtEQyxhQUFLLEVBQUUsSUFBekQ7QUFBK0RDLGlCQUFTLEVBQUVJO0FBQTFFOztBQUNKLFNBQUtWLFdBQUw7QUFDSSw2Q0FBWVEsS0FBWixHQUFzQlAsaUJBQXRCOztBQUNKO0FBQ0ksYUFBT08sS0FBUDtBQVpSO0FBY0gsQ0FmRDs7QUFpQkEsSUFBTUcsdUJBQXVCLEdBQUc7QUFDNUJDLE1BQUksRUFBRTtBQUNGQyxTQUFLLEVBQUU7QUFETDtBQURzQixDQUFoQzs7QUFNQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQXdEO0FBQUEsTUFBdkROLEtBQXVELHVFQUEvQ0csdUJBQStDOztBQUFBO0FBQUEsTUFBcEJGLElBQW9CLFNBQXBCQSxJQUFvQjtBQUFBLE1BQWRDLE9BQWMsU0FBZEEsT0FBYzs7QUFDL0UsVUFBUUQsSUFBUjtBQUNJLFNBQUtiLGNBQUw7QUFDSSw2Q0FBWVksS0FBWjtBQUFtQkwsZUFBTyxFQUFFLElBQTVCO0FBQWtDQyxjQUFNLEVBQUUsS0FBMUM7QUFBaURDLGFBQUssRUFBRSxLQUF4RDtBQUErREMsaUJBQVMsRUFBRTtBQUExRTs7QUFDSixTQUFLUixpQkFBTDtBQUF3QjtBQUFBLFlBQ1pJLElBRFksR0FDSFEsT0FERyxDQUNaUixJQURZO0FBRXBCLCtDQUFZTSxLQUFaO0FBQW1CTixjQUFJLEVBQUpBLElBQW5CO0FBQXlCQyxpQkFBTyxFQUFFLEtBQWxDO0FBQXlDQyxnQkFBTSxFQUFFLElBQWpEO0FBQXVEQyxlQUFLLEVBQUUsS0FBOUQ7QUFBcUVDLG1CQUFTLEVBQUU7QUFBaEY7QUFDSDs7QUFDRCxTQUFLUCxpQkFBTDtBQUNJLDZDQUFZUyxLQUFaO0FBQW1CTCxlQUFPLEVBQUUsS0FBNUI7QUFBbUNDLGNBQU0sRUFBRSxLQUEzQztBQUFrREMsYUFBSyxFQUFFLElBQXpEO0FBQStEQyxpQkFBUyxFQUFFSTtBQUExRTs7QUFDSixTQUFLVixXQUFMO0FBQ0ksNkNBQVlRLEtBQVosR0FBc0JQLGlCQUF0Qjs7QUFDSjtBQUNJLGFBQU9PLEtBQVA7QUFaUjtBQWNILENBZkQ7O0FBaUJlTyw0SEFBZSxDQUFDO0FBQzNCQyxlQUFhLEVBQUVULFlBRFk7QUFFM0JVLGFBQVcsRUFBRUg7QUFGYyxDQUFELENBQTlCIiwiZmlsZSI6Ii4vc3RvcmUvcmVkdWNlcnMvcG9zdHNSZWR1Y2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgYWN0aW9uVHlwZXMgfSBmcm9tICcuLi90eXBlcyc7XG5cbmNvbnN0IHsgR0VUX1BPU1RTX0lOSVQsIEdFVF9QT1NUU19TVUNDRVNTLCBHRVRfUE9TVFNfRkFJTFVSRSwgQ0xFQVJfU1RPUkUgfSA9IGFjdGlvblR5cGVzO1xuXG5jb25zdCBpbml0aWFsUG9zdHNTdGF0ZSA9IHtcbiAgICBkYXRhOiBbXSxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBsb2FkZWQ6IGZhbHNlLFxuICAgIGVycm9yOiBmYWxzZSxcbiAgICBlcnJvckRhdGE6IHt9LFxufTtcblxuY29uc3QgcG9zdHNSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFBvc3RzU3RhdGUsIHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgR0VUX1BPU1RTX0lOSVQ6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZSwgbG9hZGVkOiBmYWxzZSwgZXJyb3I6IGZhbHNlLCBlcnJvckRhdGE6IHt9IH07XG4gICAgICAgIGNhc2UgR0VUX1BPU1RTX1NVQ0NFU1M6IHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcGF5bG9hZDtcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBkYXRhLCBsb2FkaW5nOiBmYWxzZSwgbG9hZGVkOiB0cnVlLCBlcnJvcjogZmFsc2UsIGVycm9yRGF0YToge30gfTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIEdFVF9QT1NUU19GQUlMVVJFOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBsb2FkZWQ6IGZhbHNlLCBlcnJvcjogdHJ1ZSwgZXJyb3JEYXRhOiBwYXlsb2FkIH07XG4gICAgICAgIGNhc2UgQ0xFQVJfU1RPUkU6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uaW5pdGlhbFBvc3RzU3RhdGUgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG5jb25zdCBpbml0aWFsQ3VycmVudFBvc3RTdGF0ZSA9IHtcbiAgICBwb3N0OiB7XG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICB9LFxufTtcblxuY29uc3QgY3VycmVudFBvc3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbEN1cnJlbnRQb3N0U3RhdGUsIHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgR0VUX1BPU1RTX0lOSVQ6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZSwgbG9hZGVkOiBmYWxzZSwgZXJyb3I6IGZhbHNlLCBlcnJvckRhdGE6IHt9IH07XG4gICAgICAgIGNhc2UgR0VUX1BPU1RTX1NVQ0NFU1M6IHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcGF5bG9hZDtcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBkYXRhLCBsb2FkaW5nOiBmYWxzZSwgbG9hZGVkOiB0cnVlLCBlcnJvcjogZmFsc2UsIGVycm9yRGF0YToge30gfTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIEdFVF9QT1NUU19GQUlMVVJFOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBsb2FkZWQ6IGZhbHNlLCBlcnJvcjogdHJ1ZSwgZXJyb3JEYXRhOiBwYXlsb2FkIH07XG4gICAgICAgIGNhc2UgQ0xFQVJfU1RPUkU6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uaW5pdGlhbFBvc3RzU3RhdGUgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICAgIHBvc3RzTGlzdERhdGE6IHBvc3RzUmVkdWNlcixcbiAgICBjdXJyZW50UG9zdDogY3VycmVudFBvc3RSZWR1Y2VyLFxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/reducers/postsReducer.js\n");

/***/ })

})