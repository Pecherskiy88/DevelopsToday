webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store/reducers/postsReducer.js":
/*!****************************************!*\
  !*** ./store/reducers/postsReducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ \"./store/types.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar GET_POSTS_INIT = _types__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].GET_POSTS_INIT,\n    GET_POSTS_SUCCESS = _types__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].GET_POSTS_SUCCESS,\n    GET_POSTS_FAILURE = _types__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].GET_POSTS_FAILURE,\n    GET_CURRENT_POST_INIT = _types__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].GET_CURRENT_POST_INIT,\n    GET_CURRENT_POST_SUCCESS = _types__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].GET_CURRENT_POST_SUCCESS,\n    GET_CURRENT_POST_FAILURE = _types__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].GET_CURRENT_POST_FAILURE,\n    CREATE_POST_INIT = _types__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].CREATE_POST_INIT,\n    CREATE_POST_SUCCESS = _types__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].CREATE_POST_SUCCESS,\n    CREATE_POST_FAILURE = _types__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].CREATE_POST_FAILURE,\n    CLEAR_STORE = _types__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].CLEAR_STORE;\nvar initialPostsState = {\n  data: [],\n  loading: false,\n  loaded: false,\n  error: false,\n  errorData: {}\n};\n\nvar postsReducer = function postsReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialPostsState;\n\n  var _ref = arguments.length > 1 ? arguments[1] : undefined,\n      type = _ref.type,\n      payload = _ref.payload;\n\n  switch (type) {\n    case GET_POSTS_INIT:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: true,\n        loaded: false,\n        error: false,\n        errorData: {}\n      });\n\n    case GET_POSTS_SUCCESS:\n      {\n        var data = payload.data;\n        return _objectSpread(_objectSpread({}, state), {}, {\n          data: data,\n          loading: false,\n          loaded: true,\n          error: false,\n          errorData: {}\n        });\n      }\n\n    case GET_POSTS_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: false,\n        loaded: false,\n        error: true,\n        errorData: payload\n      });\n\n    case CLEAR_STORE:\n      return _objectSpread(_objectSpread({}, state), initialPostsState);\n\n    default:\n      return state;\n  }\n};\n\nvar initialCurrentPostState = {\n  post: {\n    title: '',\n    body: '',\n    id: null\n  },\n  loading: false,\n  loaded: false,\n  error: false,\n  errorData: {}\n};\n\nvar currentPostReducer = function currentPostReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialCurrentPostState;\n\n  var _ref2 = arguments.length > 1 ? arguments[1] : undefined,\n      type = _ref2.type,\n      payload = _ref2.payload;\n\n  switch (type) {\n    case GET_CURRENT_POST_INIT:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: true,\n        loaded: false,\n        error: false,\n        errorData: {}\n      });\n\n    case GET_CURRENT_POST_SUCCESS:\n      {\n        var data = payload.data;\n        return _objectSpread(_objectSpread({}, state), {}, {\n          post: data,\n          loading: false,\n          loaded: true,\n          error: false,\n          errorData: {}\n        });\n      }\n\n    case GET_CURRENT_POST_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: false,\n        loaded: false,\n        error: true,\n        errorData: payload\n      });\n\n    case CLEAR_STORE:\n      return _objectSpread(_objectSpread({}, state), initialCurrentPostState);\n\n    default:\n      return state;\n  }\n};\n\nvar initialCreatePostState = {\n  sending: false,\n  sent: false,\n  error: false,\n  errorData: {}\n};\n\nvar createPostReducer = function createPostReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialCreatePostState;\n\n  var _ref3 = arguments.length > 1 ? arguments[1] : undefined,\n      type = _ref3.type,\n      payload = _ref3.payload;\n\n  switch (type) {\n    case GET_CURRENT_POST_INIT:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: true,\n        loaded: false,\n        error: false,\n        errorData: {}\n      });\n\n    case GET_CURRENT_POST_SUCCESS:\n      {\n        var data = payload.data;\n        return _objectSpread(_objectSpread({}, state), {}, {\n          post: data,\n          loading: false,\n          loaded: true,\n          error: false,\n          errorData: {}\n        });\n      }\n\n    case GET_CURRENT_POST_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: false,\n        loaded: false,\n        error: true,\n        errorData: payload\n      });\n\n    case CLEAR_STORE:\n      return _objectSpread(_objectSpread({}, state), initialCurrentPostState);\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"combineReducers\"])({\n  postsListData: postsReducer,\n  currentPost: currentPostReducer\n}));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9wb3N0c1JlZHVjZXIuanM/NjgwYyJdLCJuYW1lcyI6WyJHRVRfUE9TVFNfSU5JVCIsImFjdGlvblR5cGVzIiwiR0VUX1BPU1RTX1NVQ0NFU1MiLCJHRVRfUE9TVFNfRkFJTFVSRSIsIkdFVF9DVVJSRU5UX1BPU1RfSU5JVCIsIkdFVF9DVVJSRU5UX1BPU1RfU1VDQ0VTUyIsIkdFVF9DVVJSRU5UX1BPU1RfRkFJTFVSRSIsIkNSRUFURV9QT1NUX0lOSVQiLCJDUkVBVEVfUE9TVF9TVUNDRVNTIiwiQ1JFQVRFX1BPU1RfRkFJTFVSRSIsIkNMRUFSX1NUT1JFIiwiaW5pdGlhbFBvc3RzU3RhdGUiLCJkYXRhIiwibG9hZGluZyIsImxvYWRlZCIsImVycm9yIiwiZXJyb3JEYXRhIiwicG9zdHNSZWR1Y2VyIiwic3RhdGUiLCJ0eXBlIiwicGF5bG9hZCIsImluaXRpYWxDdXJyZW50UG9zdFN0YXRlIiwicG9zdCIsInRpdGxlIiwiYm9keSIsImlkIiwiY3VycmVudFBvc3RSZWR1Y2VyIiwiaW5pdGlhbENyZWF0ZVBvc3RTdGF0ZSIsInNlbmRpbmciLCJzZW50IiwiY3JlYXRlUG9zdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJwb3N0c0xpc3REYXRhIiwiY3VycmVudFBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0lBR0lBLGMsR0FVQUMsa0QsQ0FWQUQsYztJQUNBRSxpQixHQVNBRCxrRCxDQVRBQyxpQjtJQUNBQyxpQixHQVFBRixrRCxDQVJBRSxpQjtJQUNBQyxxQixHQU9BSCxrRCxDQVBBRyxxQjtJQUNBQyx3QixHQU1BSixrRCxDQU5BSSx3QjtJQUNBQyx3QixHQUtBTCxrRCxDQUxBSyx3QjtJQUNBQyxnQixHQUlBTixrRCxDQUpBTSxnQjtJQUNBQyxtQixHQUdBUCxrRCxDQUhBTyxtQjtJQUNBQyxtQixHQUVBUixrRCxDQUZBUSxtQjtJQUNBQyxXLEdBQ0FULGtELENBREFTLFc7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Y2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgYWN0aW9uVHlwZXMgfSBmcm9tICcuLi90eXBlcyc7XG5cbmNvbnN0IHtcbiAgICBHRVRfUE9TVFNfSU5JVCxcbiAgICBHRVRfUE9TVFNfU1VDQ0VTUyxcbiAgICBHRVRfUE9TVFNfRkFJTFVSRSxcbiAgICBHRVRfQ1VSUkVOVF9QT1NUX0lOSVQsXG4gICAgR0VUX0NVUlJFTlRfUE9TVF9TVUNDRVNTLFxuICAgIEdFVF9DVVJSRU5UX1BPU1RfRkFJTFVSRSxcbiAgICBDUkVBVEVfUE9TVF9JTklULFxuICAgIENSRUFURV9QT1NUX1NVQ0NFU1MsXG4gICAgQ1JFQVRFX1BPU1RfRkFJTFVSRSxcbiAgICBDTEVBUl9TVE9SRSxcbn0gPSBhY3Rpb25UeXBlcztcblxuY29uc3QgaW5pdGlhbFBvc3RzU3RhdGUgPSB7XG4gICAgZGF0YTogW10sXG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgbG9hZGVkOiBmYWxzZSxcbiAgICBlcnJvcjogZmFsc2UsXG4gICAgZXJyb3JEYXRhOiB7fSxcbn07XG5cbmNvbnN0IHBvc3RzUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxQb3N0c1N0YXRlLCB7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIEdFVF9QT1NUU19JTklUOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IHRydWUsIGxvYWRlZDogZmFsc2UsIGVycm9yOiBmYWxzZSwgZXJyb3JEYXRhOiB7fSB9O1xuICAgICAgICBjYXNlIEdFVF9QT1NUU19TVUNDRVNTOiB7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHBheWxvYWQ7XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZGF0YSwgbG9hZGluZzogZmFsc2UsIGxvYWRlZDogdHJ1ZSwgZXJyb3I6IGZhbHNlLCBlcnJvckRhdGE6IHt9IH07XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBHRVRfUE9TVFNfRkFJTFVSRTpcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgbG9hZGVkOiBmYWxzZSwgZXJyb3I6IHRydWUsIGVycm9yRGF0YTogcGF5bG9hZCB9O1xuICAgICAgICBjYXNlIENMRUFSX1NUT1JFOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmluaXRpYWxQb3N0c1N0YXRlIH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuY29uc3QgaW5pdGlhbEN1cnJlbnRQb3N0U3RhdGUgPSB7XG4gICAgcG9zdDoge1xuICAgICAgICB0aXRsZTogJycsXG4gICAgICAgIGJvZHk6ICcnLFxuICAgICAgICBpZDogbnVsbCxcbiAgICB9LFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIGxvYWRlZDogZmFsc2UsXG4gICAgZXJyb3I6IGZhbHNlLFxuICAgIGVycm9yRGF0YToge30sXG59O1xuXG5jb25zdCBjdXJyZW50UG9zdFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsQ3VycmVudFBvc3RTdGF0ZSwgeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBHRVRfQ1VSUkVOVF9QT1NUX0lOSVQ6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZSwgbG9hZGVkOiBmYWxzZSwgZXJyb3I6IGZhbHNlLCBlcnJvckRhdGE6IHt9IH07XG4gICAgICAgIGNhc2UgR0VUX0NVUlJFTlRfUE9TVF9TVUNDRVNTOiB7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHBheWxvYWQ7XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcG9zdDogZGF0YSwgbG9hZGluZzogZmFsc2UsIGxvYWRlZDogdHJ1ZSwgZXJyb3I6IGZhbHNlLCBlcnJvckRhdGE6IHt9IH07XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBHRVRfQ1VSUkVOVF9QT1NUX0ZBSUxVUkU6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIGxvYWRlZDogZmFsc2UsIGVycm9yOiB0cnVlLCBlcnJvckRhdGE6IHBheWxvYWQgfTtcbiAgICAgICAgY2FzZSBDTEVBUl9TVE9SRTpcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5pbml0aWFsQ3VycmVudFBvc3RTdGF0ZSB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbmNvbnN0IGluaXRpYWxDcmVhdGVQb3N0U3RhdGUgPSB7XG4gICAgc2VuZGluZzogZmFsc2UsXG4gICAgc2VudDogZmFsc2UsXG4gICAgZXJyb3I6IGZhbHNlLFxuICAgIGVycm9yRGF0YToge30sXG59O1xuXG5jb25zdCBjcmVhdGVQb3N0UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxDcmVhdGVQb3N0U3RhdGUsIHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgR0VUX0NVUlJFTlRfUE9TVF9JTklUOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IHRydWUsIGxvYWRlZDogZmFsc2UsIGVycm9yOiBmYWxzZSwgZXJyb3JEYXRhOiB7fSB9O1xuICAgICAgICBjYXNlIEdFVF9DVVJSRU5UX1BPU1RfU1VDQ0VTUzoge1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBwYXlsb2FkO1xuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBvc3Q6IGRhdGEsIGxvYWRpbmc6IGZhbHNlLCBsb2FkZWQ6IHRydWUsIGVycm9yOiBmYWxzZSwgZXJyb3JEYXRhOiB7fSB9O1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgR0VUX0NVUlJFTlRfUE9TVF9GQUlMVVJFOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBsb2FkZWQ6IGZhbHNlLCBlcnJvcjogdHJ1ZSwgZXJyb3JEYXRhOiBwYXlsb2FkIH07XG4gICAgICAgIGNhc2UgQ0xFQVJfU1RPUkU6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uaW5pdGlhbEN1cnJlbnRQb3N0U3RhdGUgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICAgIHBvc3RzTGlzdERhdGE6IHBvc3RzUmVkdWNlcixcbiAgICBjdXJyZW50UG9zdDogY3VycmVudFBvc3RSZWR1Y2VyLFxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/reducers/postsReducer.js\n");

/***/ })

})