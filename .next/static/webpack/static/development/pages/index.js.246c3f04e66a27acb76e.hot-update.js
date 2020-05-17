webpackHotUpdate("static/development/pages/index.js",{

/***/ "./store/types.js":
/*!************************!*\
  !*** ./store/types.js ***!
  \************************/
/*! exports provided: actionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"actionTypes\", function() { return actionTypes; });\nvar actionTypes = {\n  GET_POSTS_INIT: 'GET_POSTS_INIT',\n  GET_POSTS_SUCCESS: 'GET_POSTS_SUCCESS',\n  GET_POSTS_FAILURE: 'GET_POSTS_FAILURE',\n  // GET_CURRENT_POST_INIT: GET_CURRENT_POST_INIT,\n  GET_CURRENT_POST_SUCCESS: GET_CURRENT_POST_SUCCESS,\n  GET_CURRENT_POST_FAILURE: GET_CURRENT_POST_FAILURE,\n  CLEAR_STORE: 'CLEAR_STORE'\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS90eXBlcy5qcz8wYzdmIl0sIm5hbWVzIjpbImFjdGlvblR5cGVzIiwiR0VUX1BPU1RTX0lOSVQiLCJHRVRfUE9TVFNfU1VDQ0VTUyIsIkdFVF9QT1NUU19GQUlMVVJFIiwiR0VUX0NVUlJFTlRfUE9TVF9TVUNDRVNTIiwiR0VUX0NVUlJFTlRfUE9TVF9GQUlMVVJFIiwiQ0xFQVJfU1RPUkUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBTyxJQUFNQSxXQUFXLEdBQUc7QUFDdkJDLGdCQUFjLEVBQUUsZ0JBRE87QUFFdkJDLG1CQUFpQixFQUFFLG1CQUZJO0FBR3ZCQyxtQkFBaUIsRUFBRSxtQkFISTtBQUl2QjtBQUNBQywwQkFBd0IsRUFBRUEsd0JBTEg7QUFNdkJDLDBCQUF3QixFQUFFQSx3QkFOSDtBQU92QkMsYUFBVyxFQUFFO0FBUFUsQ0FBcEIiLCJmaWxlIjoiLi9zdG9yZS90eXBlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcbiAgICBHRVRfUE9TVFNfSU5JVDogJ0dFVF9QT1NUU19JTklUJyxcbiAgICBHRVRfUE9TVFNfU1VDQ0VTUzogJ0dFVF9QT1NUU19TVUNDRVNTJyxcbiAgICBHRVRfUE9TVFNfRkFJTFVSRTogJ0dFVF9QT1NUU19GQUlMVVJFJyxcbiAgICAvLyBHRVRfQ1VSUkVOVF9QT1NUX0lOSVQ6IEdFVF9DVVJSRU5UX1BPU1RfSU5JVCxcbiAgICBHRVRfQ1VSUkVOVF9QT1NUX1NVQ0NFU1M6IEdFVF9DVVJSRU5UX1BPU1RfU1VDQ0VTUyxcbiAgICBHRVRfQ1VSUkVOVF9QT1NUX0ZBSUxVUkU6IEdFVF9DVVJSRU5UX1BPU1RfRkFJTFVSRSxcbiAgICBDTEVBUl9TVE9SRTogJ0NMRUFSX1NUT1JFJyxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/types.js\n");

/***/ })

})