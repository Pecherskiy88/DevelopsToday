webpackHotUpdate("static/development/pages/posts/[id].js",{

/***/ "./store/actions/postsActions.js":
/*!***************************************!*\
  !*** ./store/actions/postsActions.js ***!
  \***************************************/
/*! exports provided: getPosts, getCurrentPost, clearStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPosts\", function() { return getPosts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCurrentPost\", function() { return getCurrentPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearStore\", function() { return clearStore; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api */ \"./store/api/index.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ \"./store/types.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar GET_POSTS_INIT = _types__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].GET_POSTS_INIT,\n    GET_POSTS_SUCCESS = _types__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].GET_POSTS_SUCCESS,\n    GET_POSTS_FAILURE = _types__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].GET_POSTS_FAILURE,\n    GET_CURRENT_POST_INIT = _types__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].GET_CURRENT_POST_INIT,\n    GET_CURRENT_POST_SUCCESS = _types__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].GET_CURRENT_POST_SUCCESS,\n    GET_CURRENT_POST_FAILURE = _types__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].GET_CURRENT_POST_FAILURE,\n    CREATE_POST_INIT = _types__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].CREATE_POST_INIT,\n    CREATE_POST_SUCCESS = _types__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].CREATE_POST_SUCCESS,\n    CLEAR_STORE = _types__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].CLEAR_STORE;\nvar getPosts = function getPosts(params) {\n  return function (dispatch) {\n    dispatch({\n      type: GET_POSTS_INIT\n    });\n    Object(_api__WEBPACK_IMPORTED_MODULE_1__[\"getPostsApi\"])(params).then(function (response) {\n      dispatch({\n        type: GET_POSTS_SUCCESS,\n        payload: _objectSpread({}, response)\n      });\n    })[\"catch\"](function (error) {\n      dispatch({\n        type: GET_POSTS_FAILURE,\n        payload: _objectSpread({}, error)\n      });\n    });\n  };\n};\nvar getCurrentPost = function getCurrentPost(id) {\n  return function (dispatch) {\n    dispatch({\n      type: GET_CURRENT_POST_INIT\n    });\n    Object(_api__WEBPACK_IMPORTED_MODULE_1__[\"getCurrentPostApi\"])(id).then(function (response) {\n      dispatch({\n        type: GET_CURRENT_POST_SUCCESS,\n        payload: _objectSpread({}, response)\n      });\n    })[\"catch\"](function (error) {\n      dispatch({\n        type: GET_CURRENT_POST_FAILURE,\n        payload: _objectSpread({}, error)\n      });\n    });\n  };\n};\nvar clearStore = function clearStore() {\n  return {\n    type: CLEAR_STORE\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3Bvc3RzQWN0aW9ucy5qcz8yYzAxIl0sIm5hbWVzIjpbIkdFVF9QT1NUU19JTklUIiwiYWN0aW9uVHlwZXMiLCJHRVRfUE9TVFNfU1VDQ0VTUyIsIkdFVF9QT1NUU19GQUlMVVJFIiwiR0VUX0NVUlJFTlRfUE9TVF9JTklUIiwiR0VUX0NVUlJFTlRfUE9TVF9TVUNDRVNTIiwiR0VUX0NVUlJFTlRfUE9TVF9GQUlMVVJFIiwiQ1JFQVRFX1BPU1RfSU5JVCIsIkNSRUFURV9QT1NUX1NVQ0NFU1MiLCJDTEVBUl9TVE9SRSIsImdldFBvc3RzIiwicGFyYW1zIiwiZGlzcGF0Y2giLCJ0eXBlIiwiZ2V0UG9zdHNBcGkiLCJ0aGVuIiwicmVzcG9uc2UiLCJwYXlsb2FkIiwiZXJyb3IiLCJnZXRDdXJyZW50UG9zdCIsImlkIiwiZ2V0Q3VycmVudFBvc3RBcGkiLCJjbGVhclN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtJQUdJQSxjLEdBU0FDLGtELENBVEFELGM7SUFDQUUsaUIsR0FRQUQsa0QsQ0FSQUMsaUI7SUFDQUMsaUIsR0FPQUYsa0QsQ0FQQUUsaUI7SUFDQUMscUIsR0FNQUgsa0QsQ0FOQUcscUI7SUFDQUMsd0IsR0FLQUosa0QsQ0FMQUksd0I7SUFDQUMsd0IsR0FJQUwsa0QsQ0FKQUssd0I7SUFDQUMsZ0IsR0FHQU4sa0QsQ0FIQU0sZ0I7SUFDQUMsbUIsR0FFQVAsa0QsQ0FGQU8sbUI7SUFDQUMsVyxHQUNBUixrRCxDQURBUSxXO0FBR0csSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsTUFBRDtBQUFBLFNBQVksVUFBQ0MsUUFBRCxFQUFjO0FBQzlDQSxZQUFRLENBQUM7QUFDTEMsVUFBSSxFQUFFYjtBQURELEtBQUQsQ0FBUjtBQUdBYyw0REFBVyxDQUFDSCxNQUFELENBQVgsQ0FDS0ksSUFETCxDQUNVLFVBQUNDLFFBQUQsRUFBYztBQUNoQkosY0FBUSxDQUFDO0FBQ0xDLFlBQUksRUFBRVgsaUJBREQ7QUFFTGUsZUFBTyxvQkFBT0QsUUFBUDtBQUZGLE9BQUQsQ0FBUjtBQUlILEtBTkwsV0FPVyxVQUFDRSxLQUFELEVBQVc7QUFDZE4sY0FBUSxDQUFDO0FBQ0xDLFlBQUksRUFBRVYsaUJBREQ7QUFFTGMsZUFBTyxvQkFBT0MsS0FBUDtBQUZGLE9BQUQsQ0FBUjtBQUlILEtBWkw7QUFhSCxHQWpCdUI7QUFBQSxDQUFqQjtBQW1CQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEVBQUQ7QUFBQSxTQUFRLFVBQUNSLFFBQUQsRUFBYztBQUNoREEsWUFBUSxDQUFDO0FBQ0xDLFVBQUksRUFBRVQ7QUFERCxLQUFELENBQVI7QUFHQWlCLGtFQUFpQixDQUFDRCxFQUFELENBQWpCLENBQ0tMLElBREwsQ0FDVSxVQUFDQyxRQUFELEVBQWM7QUFDaEJKLGNBQVEsQ0FBQztBQUNMQyxZQUFJLEVBQUVSLHdCQUREO0FBRUxZLGVBQU8sb0JBQU9ELFFBQVA7QUFGRixPQUFELENBQVI7QUFJSCxLQU5MLFdBT1csVUFBQ0UsS0FBRCxFQUFXO0FBQ2ROLGNBQVEsQ0FBQztBQUNMQyxZQUFJLEVBQUVQLHdCQUREO0FBRUxXLGVBQU8sb0JBQU9DLEtBQVA7QUFGRixPQUFELENBQVI7QUFJSCxLQVpMO0FBYUgsR0FqQjZCO0FBQUEsQ0FBdkI7QUFtQkEsSUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxTQUFPO0FBQzdCVCxRQUFJLEVBQUVKO0FBRHVCLEdBQVA7QUFBQSxDQUFuQiIsImZpbGUiOiIuL3N0b3JlL2FjdGlvbnMvcG9zdHNBY3Rpb25zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UG9zdHNBcGksIGdldEN1cnJlbnRQb3N0QXBpIH0gZnJvbSAnLi4vYXBpJztcbmltcG9ydCB7IGFjdGlvblR5cGVzIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCB7XG4gICAgR0VUX1BPU1RTX0lOSVQsXG4gICAgR0VUX1BPU1RTX1NVQ0NFU1MsXG4gICAgR0VUX1BPU1RTX0ZBSUxVUkUsXG4gICAgR0VUX0NVUlJFTlRfUE9TVF9JTklULFxuICAgIEdFVF9DVVJSRU5UX1BPU1RfU1VDQ0VTUyxcbiAgICBHRVRfQ1VSUkVOVF9QT1NUX0ZBSUxVUkUsXG4gICAgQ1JFQVRFX1BPU1RfSU5JVCxcbiAgICBDUkVBVEVfUE9TVF9TVUNDRVNTLFxuICAgIENMRUFSX1NUT1JFLFxufSA9IGFjdGlvblR5cGVzO1xuXG5leHBvcnQgY29uc3QgZ2V0UG9zdHMgPSAocGFyYW1zKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEdFVF9QT1NUU19JTklULFxuICAgIH0pO1xuICAgIGdldFBvc3RzQXBpKHBhcmFtcylcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogR0VUX1BPU1RTX1NVQ0NFU1MsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogeyAuLi5yZXNwb25zZSB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBHRVRfUE9TVFNfRkFJTFVSRSxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7IC4uLmVycm9yIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudFBvc3QgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogR0VUX0NVUlJFTlRfUE9TVF9JTklULFxuICAgIH0pO1xuICAgIGdldEN1cnJlbnRQb3N0QXBpKGlkKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBHRVRfQ1VSUkVOVF9QT1NUX1NVQ0NFU1MsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogeyAuLi5yZXNwb25zZSB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBHRVRfQ1VSUkVOVF9QT1NUX0ZBSUxVUkUsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogeyAuLi5lcnJvciB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGNsZWFyU3RvcmUgPSAoKSA9PiAoe1xuICAgIHR5cGU6IENMRUFSX1NUT1JFLFxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/actions/postsActions.js\n");

/***/ })

})