webpackHotUpdate("static/development/pages/posts/[id].js",{

/***/ "./store/api/index.js":
/*!****************************!*\
  !*** ./store/api/index.js ***!
  \****************************/
/*! exports provided: URL, getPostsApi, getCurrentPostApi, createPostApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"URL\", function() { return URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPostsApi\", function() { return getPostsApi; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCurrentPostApi\", function() { return getCurrentPostApi; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPostApi\", function() { return createPostApi; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar URL = 'https://simple-blog-api.crew.red/posts';\nvar getPostsApi = function getPostsApi(requestParams) {\n  // Для случаев когда requestParams может быть много(sort, search, page etc.) URL для примера.\n  var defaultProps = {\n    url: URL\n  };\n\n  var params = _objectSpread(_objectSpread({}, defaultProps), requestParams);\n\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(params.url);\n};\nvar getCurrentPostApi = function getCurrentPostApi(id) {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"\".concat(URL, \"/\").concat(id));\n};\nvar createPostApi = function createPostApi(data) {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"\".concat(URL, \"/\").concat(id));\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9hcGkvaW5kZXguanM/ODY4MyJdLCJuYW1lcyI6WyJVUkwiLCJnZXRQb3N0c0FwaSIsInJlcXVlc3RQYXJhbXMiLCJkZWZhdWx0UHJvcHMiLCJ1cmwiLCJwYXJhbXMiLCJheGlvcyIsImdldCIsImdldEN1cnJlbnRQb3N0QXBpIiwiaWQiLCJjcmVhdGVQb3N0QXBpIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLEdBQUcsR0FBRyx3Q0FBWjtBQUVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLGFBQUQsRUFBbUI7QUFDMUM7QUFDQSxNQUFNQyxZQUFZLEdBQUc7QUFDakJDLE9BQUcsRUFBRUo7QUFEWSxHQUFyQjs7QUFJQSxNQUFNSyxNQUFNLG1DQUFRRixZQUFSLEdBQXlCRCxhQUF6QixDQUFaOztBQUVBLFNBQU9JLDRDQUFLLENBQUNDLEdBQU4sQ0FBVUYsTUFBTSxDQUFDRCxHQUFqQixDQUFQO0FBQ0gsQ0FUTTtBQVdBLElBQU1JLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsRUFBRDtBQUFBLFNBQVFILDRDQUFLLENBQUNDLEdBQU4sV0FBYVAsR0FBYixjQUFvQlMsRUFBcEIsRUFBUjtBQUFBLENBQTFCO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxJQUFEO0FBQUEsU0FBVUwsNENBQUssQ0FBQ0MsR0FBTixXQUFhUCxHQUFiLGNBQW9CUyxFQUFwQixFQUFWO0FBQUEsQ0FBdEIiLCJmaWxlIjoiLi9zdG9yZS9hcGkvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgY29uc3QgVVJMID0gJ2h0dHBzOi8vc2ltcGxlLWJsb2ctYXBpLmNyZXcucmVkL3Bvc3RzJztcblxuZXhwb3J0IGNvbnN0IGdldFBvc3RzQXBpID0gKHJlcXVlc3RQYXJhbXMpID0+IHtcbiAgICAvLyDQlNC70Y8g0YHQu9GD0YfQsNC10LIg0LrQvtCz0LTQsCByZXF1ZXN0UGFyYW1zINC80L7QttC10YIg0LHRi9GC0Ywg0LzQvdC+0LPQvihzb3J0LCBzZWFyY2gsIHBhZ2UgZXRjLikgVVJMINC00LvRjyDQv9GA0LjQvNC10YDQsC5cbiAgICBjb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHVybDogVVJMLFxuICAgIH07XG5cbiAgICBjb25zdCBwYXJhbXMgPSB7IC4uLmRlZmF1bHRQcm9wcywgLi4ucmVxdWVzdFBhcmFtcyB9O1xuXG4gICAgcmV0dXJuIGF4aW9zLmdldChwYXJhbXMudXJsKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50UG9zdEFwaSA9IChpZCkgPT4gYXhpb3MuZ2V0KGAke1VSTH0vJHtpZH1gKTtcbmV4cG9ydCBjb25zdCBjcmVhdGVQb3N0QXBpID0gKGRhdGEpID0+IGF4aW9zLmdldChgJHtVUkx9LyR7aWR9YCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/api/index.js\n");

/***/ })

})