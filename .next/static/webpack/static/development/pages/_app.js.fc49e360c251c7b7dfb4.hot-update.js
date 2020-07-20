webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store/reducers/postsReducer.js":
/*!****************************************!*\
  !*** ./store/reducers/postsReducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ \"./store/types.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar GET_POSTS_INIT = _types__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].GET_POSTS_INIT,\n    GET_POSTS_SUCCESS = _types__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].GET_POSTS_SUCCESS,\n    GET_POSTS_FAILURE = _types__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].GET_POSTS_FAILURE,\n    GET_CURRENT_POST_INIT = _types__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].GET_CURRENT_POST_INIT,\n    GET_CURRENT_POST_SUCCESS = _types__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].GET_CURRENT_POST_SUCCESS,\n    GET_CURRENT_POST_FAILURE = _types__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].GET_CURRENT_POST_FAILURE,\n    CREATE_POST_INIT = _types__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].CREATE_POST_INIT,\n    CREATE_POST_SUCCESS = _types__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].CREATE_POST_SUCCESS,\n    CREATE_POST_FAILURE = _types__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].CREATE_POST_FAILURE,\n    CLEAR_STORE = _types__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].CLEAR_STORE;\nvar initialPostsState = {\n  data: [],\n  loading: false,\n  loaded: false,\n  error: false,\n  errorData: {}\n};\n\nvar postsReducer = function postsReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialPostsState;\n\n  var _ref = arguments.length > 1 ? arguments[1] : undefined,\n      type = _ref.type,\n      payload = _ref.payload;\n\n  switch (type) {\n    case GET_POSTS_INIT:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: true,\n        loaded: false,\n        error: false,\n        errorData: {}\n      });\n\n    case GET_POSTS_SUCCESS:\n      {\n        var data = payload.data;\n        return _objectSpread(_objectSpread({}, state), {}, {\n          data: data,\n          loading: false,\n          loaded: true,\n          error: false,\n          errorData: {}\n        });\n      }\n\n    case GET_POSTS_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: false,\n        loaded: false,\n        error: true,\n        errorData: payload\n      });\n\n    case CLEAR_STORE:\n      return _objectSpread(_objectSpread({}, state), initialPostsState);\n\n    default:\n      return state;\n  }\n};\n\nvar initialCurrentPostState = {\n  post: {\n    title: '',\n    body: '',\n    id: null\n  },\n  loading: false,\n  loaded: false,\n  error: false,\n  errorData: {}\n};\n\nvar currentPostReducer = function currentPostReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialCurrentPostState;\n\n  var _ref2 = arguments.length > 1 ? arguments[1] : undefined,\n      type = _ref2.type,\n      payload = _ref2.payload;\n\n  switch (type) {\n    case GET_CURRENT_POST_INIT:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: true,\n        loaded: false,\n        error: false,\n        errorData: {}\n      });\n\n    case GET_CURRENT_POST_SUCCESS:\n      {\n        var data = payload.data;\n        return _objectSpread(_objectSpread({}, state), {}, {\n          post: data,\n          loading: false,\n          loaded: true,\n          error: false,\n          errorData: {}\n        });\n      }\n\n    case GET_CURRENT_POST_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: false,\n        loaded: false,\n        error: true,\n        errorData: payload\n      });\n\n    case CLEAR_STORE:\n      return _objectSpread(_objectSpread({}, state), initialCurrentPostState);\n\n    default:\n      return state;\n  }\n};\n\nvar initialCreatePostState = {\n  sending: false,\n  sent: false,\n  error: false,\n  errorData: {}\n};\n\nvar createPostReducer = function createPostReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialCreatePostState;\n\n  var _ref3 = arguments.length > 1 ? arguments[1] : undefined,\n      type = _ref3.type,\n      payload = _ref3.payload;\n\n  switch (type) {\n    case GET_CURRENT_POST_INIT:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        sending: true,\n        sent: false,\n        error: false,\n        errorData: {}\n      });\n\n    case GET_CURRENT_POST_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        sending: false,\n        sent: true,\n        error: false,\n        errorData: {}\n      });\n\n    case GET_CURRENT_POST_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        sending: false,\n        sent: false,\n        error: true,\n        errorData: payload\n      });\n\n    case CLEAR_STORE:\n      return _objectSpread(_objectSpread({}, state), initialCreatePostState);\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"combineReducers\"])({\n  postsListData: postsReducer,\n  currentPost: currentPostReducer,\n  createPost: createPostReducer\n}));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9wb3N0c1JlZHVjZXIuanM/NjgwYyJdLCJuYW1lcyI6WyJHRVRfUE9TVFNfSU5JVCIsImFjdGlvblR5cGVzIiwiR0VUX1BPU1RTX1NVQ0NFU1MiLCJHRVRfUE9TVFNfRkFJTFVSRSIsIkdFVF9DVVJSRU5UX1BPU1RfSU5JVCIsIkdFVF9DVVJSRU5UX1BPU1RfU1VDQ0VTUyIsIkdFVF9DVVJSRU5UX1BPU1RfRkFJTFVSRSIsIkNSRUFURV9QT1NUX0lOSVQiLCJDUkVBVEVfUE9TVF9TVUNDRVNTIiwiQ1JFQVRFX1BPU1RfRkFJTFVSRSIsIkNMRUFSX1NUT1JFIiwiaW5pdGlhbFBvc3RzU3RhdGUiLCJkYXRhIiwibG9hZGluZyIsImxvYWRlZCIsImVycm9yIiwiZXJyb3JEYXRhIiwicG9zdHNSZWR1Y2VyIiwic3RhdGUiLCJ0eXBlIiwicGF5bG9hZCIsImluaXRpYWxDdXJyZW50UG9zdFN0YXRlIiwicG9zdCIsInRpdGxlIiwiYm9keSIsImlkIiwiY3VycmVudFBvc3RSZWR1Y2VyIiwiaW5pdGlhbENyZWF0ZVBvc3RTdGF0ZSIsInNlbmRpbmciLCJzZW50IiwiY3JlYXRlUG9zdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJwb3N0c0xpc3REYXRhIiwiY3VycmVudFBvc3QiLCJjcmVhdGVQb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtJQUdJQSxjLEdBVUFDLGtELENBVkFELGM7SUFDQUUsaUIsR0FTQUQsa0QsQ0FUQUMsaUI7SUFDQUMsaUIsR0FRQUYsa0QsQ0FSQUUsaUI7SUFDQUMscUIsR0FPQUgsa0QsQ0FQQUcscUI7SUFDQUMsd0IsR0FNQUosa0QsQ0FOQUksd0I7SUFDQUMsd0IsR0FLQUwsa0QsQ0FMQUssd0I7SUFDQUMsZ0IsR0FJQU4sa0QsQ0FKQU0sZ0I7SUFDQUMsbUIsR0FHQVAsa0QsQ0FIQU8sbUI7SUFDQUMsbUIsR0FFQVIsa0QsQ0FGQVEsbUI7SUFDQUMsVyxHQUNB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QyxTQUFPLEVBQUUsS0FEa0I7QUFFM0JDLE1BQUksRUFBRSxLQUZxQjtBQUczQmQsT0FBSyxFQUFFLEtBSG9CO0FBSTNCQyxXQUFTLEVBQUU7QUFKZ0IsQ0FBL0I7O0FBT0EsSUFBTWMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUF1RDtBQUFBLE1BQXREWixLQUFzRCx1RUFBOUNTLHNCQUE4Qzs7QUFBQTtBQUFBLE1BQXBCUixJQUFvQixTQUFwQkEsSUFBb0I7QUFBQSxNQUFkQyxPQUFjLFNBQWRBLE9BQWM7O0FBQzdFLFVBQVFELElBQVI7QUFDSSxTQUFLZixxQkFBTDtBQUNJLDZDQUFZYyxLQUFaO0FBQW1CVSxlQUFPLEVBQUUsSUFBNUI7QUFBa0NDLFlBQUksRUFBRSxLQUF4QztBQUErQ2QsYUFBSyxFQUFFLEtBQXREO0FBQTZEQyxpQkFBUyxFQUFFO0FBQXhFOztBQUNKLFNBQUtYLHdCQUFMO0FBQ0ksNkNBQVlhLEtBQVo7QUFBbUJVLGVBQU8sRUFBRSxLQUE1QjtBQUFtQ0MsWUFBSSxFQUFFLElBQXpDO0FBQStDZCxhQUFLLEVBQUUsS0FBdEQ7QUFBNkRDLGlCQUFTLEVBQUU7QUFBeEU7O0FBQ0osU0FBS1Ysd0JBQUw7QUFDSSw2Q0FBWVksS0FBWjtBQUFtQlUsZUFBTyxFQUFFLEtBQTVCO0FBQW1DQyxZQUFJLEVBQUUsS0FBekM7QUFBZ0RkLGFBQUssRUFBRSxJQUF2RDtBQUE2REMsaUJBQVMsRUFBRUk7QUFBeEU7O0FBQ0osU0FBS1YsV0FBTDtBQUNJLDZDQUFZUSxLQUFaLEdBQXNCUyxzQkFBdEI7O0FBQ0o7QUFDSSxhQUFPVCxLQUFQO0FBVlI7QUFZSCxDQWJEOztBQWVlYSw0SEFBZSxDQUFDO0FBQzNCQyxlQUFhLEVBQUVmLFlBRFk7QUFFM0JnQixhQUFXLEVBQUVQLGtCQUZjO0FBRzNCUSxZQUFVLEVBQUVKO0FBSGUsQ0FBRCxDQUE5QiIsImZpbGUiOiIuL3N0b3JlL3JlZHVjZXJzL3Bvc3RzUmVkdWNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGFjdGlvblR5cGVzIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCB7XG4gICAgR0VUX1BPU1RTX0lOSVQsXG4gICAgR0VUX1BPU1RTX1NVQ0NFU1MsXG4gICAgR0VUX1BPU1RTX0ZBSUxVUkUsXG4gICAgR0VUX0NVUlJFTlRfUE9TVF9JTklULFxuICAgIEdFVF9DVVJSRU5UX1BPU1RfU1VDQ0VTUyxcbiAgICBHRVRfQ1VSUkVOVF9QT1NUX0ZBSUxVUkUsXG4gICAgQ1JFQVRFX1BPU1RfSU5JVCxcbiAgICBDUkVBVEVfUE9TVF9TVUNDRVNTLFxuICAgIENSRUFURV9QT1NUX0ZBSUxVUkUsXG4gICAgQ0xFQVJfU1RPUkUsXG59ID0gYWN0aW9uVHlwZXM7XG5cbmNvbnN0IGluaXRpYWxQb3N0c1N0YXRlID0ge1xuICAgIGRhdGE6IFtdLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIGxvYWRlZDogZmFsc2UsXG4gICAgZXJyb3I6IGZhbHNlLFxuICAgIGVycm9yRGF0YToge30sXG59O1xuXG5jb25zdCBwb3N0c1JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsUG9zdHNTdGF0ZSwgeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBHRVRfUE9TVFNfSU5JVDpcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlLCBsb2FkZWQ6IGZhbHNlLCBlcnJvcjogZmFsc2UsIGVycm9yRGF0YToge30gfTtcbiAgICAgICAgY2FzZSBHRVRfUE9TVFNfU1VDQ0VTUzoge1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBwYXlsb2FkO1xuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGRhdGEsIGxvYWRpbmc6IGZhbHNlLCBsb2FkZWQ6IHRydWUsIGVycm9yOiBmYWxzZSwgZXJyb3JEYXRhOiB7fSB9O1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgR0VUX1BPU1RTX0ZBSUxVUkU6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIGxvYWRlZDogZmFsc2UsIGVycm9yOiB0cnVlLCBlcnJvckRhdGE6IHBheWxvYWQgfTtcbiAgICAgICAgY2FzZSBDTEVBUl9TVE9SRTpcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5pbml0aWFsUG9zdHNTdGF0ZSB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbmNvbnN0IGluaXRpYWxDdXJyZW50UG9zdFN0YXRlID0ge1xuICAgIHBvc3Q6IHtcbiAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICBib2R5OiAnJyxcbiAgICAgICAgaWQ6IG51bGwsXG4gICAgfSxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBsb2FkZWQ6IGZhbHNlLFxuICAgIGVycm9yOiBmYWxzZSxcbiAgICBlcnJvckRhdGE6IHt9LFxufTtcblxuY29uc3QgY3VycmVudFBvc3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbEN1cnJlbnRQb3N0U3RhdGUsIHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgR0VUX0NVUlJFTlRfUE9TVF9JTklUOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IHRydWUsIGxvYWRlZDogZmFsc2UsIGVycm9yOiBmYWxzZSwgZXJyb3JEYXRhOiB7fSB9O1xuICAgICAgICBjYXNlIEdFVF9DVVJSRU5UX1BPU1RfU1VDQ0VTUzoge1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBwYXlsb2FkO1xuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBvc3Q6IGRhdGEsIGxvYWRpbmc6IGZhbHNlLCBsb2FkZWQ6IHRydWUsIGVycm9yOiBmYWxzZSwgZXJyb3JEYXRhOiB7fSB9O1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgR0VUX0NVUlJFTlRfUE9TVF9GQUlMVVJFOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBsb2FkZWQ6IGZhbHNlLCBlcnJvcjogdHJ1ZSwgZXJyb3JEYXRhOiBwYXlsb2FkIH07XG4gICAgICAgIGNhc2UgQ0xFQVJfU1RPUkU6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uaW5pdGlhbEN1cnJlbnRQb3N0U3RhdGUgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG5jb25zdCBpbml0aWFsQ3JlYXRlUG9zdFN0YXRlID0ge1xuICAgIHNlbmRpbmc6IGZhbHNlLFxuICAgIHNlbnQ6IGZhbHNlLFxuICAgIGVycm9yOiBmYWxzZSxcbiAgICBlcnJvckRhdGE6IHt9LFxufTtcblxuY29uc3QgY3JlYXRlUG9zdFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsQ3JlYXRlUG9zdFN0YXRlLCB7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIEdFVF9DVVJSRU5UX1BPU1RfSU5JVDpcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzZW5kaW5nOiB0cnVlLCBzZW50OiBmYWxzZSwgZXJyb3I6IGZhbHNlLCBlcnJvckRhdGE6IHt9IH07XG4gICAgICAgIGNhc2UgR0VUX0NVUlJFTlRfUE9TVF9TVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHNlbmRpbmc6IGZhbHNlLCBzZW50OiB0cnVlLCBlcnJvcjogZmFsc2UsIGVycm9yRGF0YToge30gfTtcbiAgICAgICAgY2FzZSBHRVRfQ1VSUkVOVF9QT1NUX0ZBSUxVUkU6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc2VuZGluZzogZmFsc2UsIHNlbnQ6IGZhbHNlLCBlcnJvcjogdHJ1ZSwgZXJyb3JEYXRhOiBwYXlsb2FkIH07XG4gICAgICAgIGNhc2UgQ0xFQVJfU1RPUkU6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uaW5pdGlhbENyZWF0ZVBvc3RTdGF0ZSB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgcG9zdHNMaXN0RGF0YTogcG9zdHNSZWR1Y2VyLFxuICAgIGN1cnJlbnRQb3N0OiBjdXJyZW50UG9zdFJlZHVjZXIsXG4gICAgY3JlYXRlUG9zdDogY3JlYXRlUG9zdFJlZHVjZXIsXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/reducers/postsReducer.js\n");

/***/ })

})