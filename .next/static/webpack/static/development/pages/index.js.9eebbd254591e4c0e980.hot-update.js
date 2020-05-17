webpackHotUpdate("static/development/pages/index.js",{

/***/ "./store/selectors.js":
/*!****************************!*\
  !*** ./store/selectors.js ***!
  \****************************/
/*! exports provided: postListDataSelector, currentPostDataSelector, createPostSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postListDataSelector\", function() { return postListDataSelector; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"currentPostDataSelector\", function() { return currentPostDataSelector; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPostSelector\", function() { return createPostSelector; });\nvar postListDataSelector = function postListDataSelector(state) {\n  return state.postsData.postsListData;\n};\nvar currentPostDataSelector = function currentPostDataSelector(state) {\n  return state.postsData.currentPost;\n};\nvar createPostSelector = function createPostSelector(state) {\n  return state.postsData.createPost;\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9zZWxlY3RvcnMuanM/ZTUzMSJdLCJuYW1lcyI6WyJwb3N0TGlzdERhdGFTZWxlY3RvciIsInN0YXRlIiwicG9zdHNEYXRhIiwicG9zdHNMaXN0RGF0YSIsImN1cnJlbnRQb3N0RGF0YVNlbGVjdG9yIiwiY3VycmVudFBvc3QiLCJjcmVhdGVQb3N0U2VsZWN0b3IiLCJjcmVhdGVQb3N0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU1BLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsU0FBTixDQUFnQkMsYUFBM0I7QUFBQSxDQUE3QjtBQUNBLElBQU1DLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsQ0FBQ0gsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsU0FBTixDQUFnQkcsV0FBM0I7QUFBQSxDQUFoQztBQUNBLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0wsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsU0FBTixDQUFnQkssVUFBM0I7QUFBQSxDQUEzQiIsImZpbGUiOiIuL3N0b3JlL3NlbGVjdG9ycy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwb3N0TGlzdERhdGFTZWxlY3RvciA9IChzdGF0ZSkgPT4gc3RhdGUucG9zdHNEYXRhLnBvc3RzTGlzdERhdGE7XG5leHBvcnQgY29uc3QgY3VycmVudFBvc3REYXRhU2VsZWN0b3IgPSAoc3RhdGUpID0+IHN0YXRlLnBvc3RzRGF0YS5jdXJyZW50UG9zdDtcbmV4cG9ydCBjb25zdCBjcmVhdGVQb3N0U2VsZWN0b3IgPSAoc3RhdGUpID0+IHN0YXRlLnBvc3RzRGF0YS5jcmVhdGVQb3N0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/selectors.js\n");

/***/ })

})