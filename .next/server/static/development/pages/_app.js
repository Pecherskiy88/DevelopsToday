module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./store/index.js");
/* harmony import */ var _style_main_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style/main.css */ "./style/main.css");
/* harmony import */ var _style_main_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_main_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/pecherkiy/Documents/DevelopsToday/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_0___default.a {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
      store: _store__WEBPACK_IMPORTED_MODULE_4__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }
    })));
  }

}

const makestore = () => _store__WEBPACK_IMPORTED_MODULE_4__["default"];

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__["createWrapper"])(makestore);
/* harmony default export */ __webpack_exports__["default"] = (wrapper.withRedux(MyApp));

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./store/reducers/index.js");




const initialState = {};
const middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a];
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware)));
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./store/reducers/index.js":
/*!*********************************!*\
  !*** ./store/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _postsReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postsReducer */ "./store/reducers/postsReducer.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  postsData: _postsReducer__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./store/reducers/postsReducer.js":
/*!****************************************!*\
  !*** ./store/reducers/postsReducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./store/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const {
  GET_POSTS_INIT,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  GET_CURRENT_POST_INIT,
  GET_CURRENT_POST_SUCCESS,
  GET_CURRENT_POST_FAILURE,
  CREATE_POST_INIT,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
  SET_FIELD_VALUE,
  CLEAR_STORE
} = _types__WEBPACK_IMPORTED_MODULE_1__["actionTypes"];
const initialPostsState = {
  data: [],
  loading: false,
  loaded: false,
  error: false,
  errorData: {}
};

const postsReducer = (state = initialPostsState, {
  type,
  payload
}) => {
  switch (type) {
    case GET_POSTS_INIT:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true,
        loaded: false,
        error: false,
        errorData: {}
      });

    case GET_POSTS_SUCCESS:
      {
        const {
          data
        } = payload;
        return _objectSpread(_objectSpread({}, state), {}, {
          data,
          loading: false,
          loaded: true,
          error: false,
          errorData: {}
        });
      }

    case GET_POSTS_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        loaded: false,
        error: true,
        errorData: payload
      });

    case CLEAR_STORE:
      return _objectSpread(_objectSpread({}, state), initialPostsState);

    default:
      return state;
  }
};

const initialCurrentPostState = {
  post: {
    title: '',
    body: '',
    id: null
  },
  loading: false,
  loaded: false,
  error: false,
  errorData: {}
};

const currentPostReducer = (state = initialCurrentPostState, {
  type,
  payload
}) => {
  switch (type) {
    case GET_CURRENT_POST_INIT:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true,
        loaded: false,
        error: false,
        errorData: {}
      });

    case GET_CURRENT_POST_SUCCESS:
      {
        const {
          data
        } = payload;
        return _objectSpread(_objectSpread({}, state), {}, {
          post: data,
          loading: false,
          loaded: true,
          error: false,
          errorData: {}
        });
      }

    case GET_CURRENT_POST_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        loaded: false,
        error: true,
        errorData: payload
      });

    case CLEAR_STORE:
      return _objectSpread(_objectSpread({}, state), initialCurrentPostState);

    default:
      return state;
  }
};

const initialCreatePostState = {
  title: '',
  body: '',
  sending: false,
  sent: false,
  error: false,
  errorData: {}
};

const createPostReducer = (state = initialCreatePostState, {
  type,
  payload
}) => {
  switch (type) {
    case CREATE_POST_INIT:
      return _objectSpread(_objectSpread({}, state), {}, {
        sending: true,
        sent: false,
        error: false,
        errorData: {}
      });

    case CREATE_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        sending: false,
        sent: true,
        error: false,
        errorData: {}
      });

    case CREATE_POST_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        sending: false,
        sent: false,
        error: true,
        errorData: payload
      });

    case SET_FIELD_VALUE:
      {
        const {
          name,
          value
        } = payload;
        return _objectSpread(_objectSpread({}, state), {}, {
          [name]: value,
          sending: false,
          sent: false,
          error: false,
          errorData: {}
        });
      }

    case CLEAR_STORE:
      return _objectSpread(_objectSpread({}, state), initialCreatePostState);

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  postsListData: postsReducer,
  currentPost: currentPostReducer,
  createPost: createPostReducer
}));

/***/ }),

/***/ "./store/types.js":
/*!************************!*\
  !*** ./store/types.js ***!
  \************************/
/*! exports provided: actionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
const actionTypes = {
  GET_POSTS_INIT: 'GET_POSTS_INIT',
  GET_POSTS_SUCCESS: 'GET_POSTS_SUCCESS',
  GET_POSTS_FAILURE: 'GET_POSTS_FAILURE',
  GET_CURRENT_POST_INIT: 'GET_CURRENT_POST_INIT',
  GET_CURRENT_POST_SUCCESS: 'GET_CURRENT_POST_SUCCESS',
  GET_CURRENT_POST_FAILURE: 'GET_CURRENT_POST_FAILURE',
  CREATE_POST_INIT: 'CREATE_POST_INIT',
  CREATE_POST_SUCCESS: 'CREATE_POST_SUCCESS',
  CREATE_POST_FAILURE: 'CREATE_POST_FAILURE',
  SET_FIELD_VALUE: 'SET_FIELD_VALUE',
  CLEAR_STORE: 'CLEAR_STORE'
};

/***/ }),

/***/ "./style/main.css":
/*!************************!*\
  !*** ./style/main.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvcG9zdHNSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3R5cGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOlsiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsIkNvbnRhaW5lciIsImNyZWF0ZVVybCIsImRlZmF1bHQiLCJfcmVhY3QiLCJfdXRpbHMiLCJBcHBJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJfcmVmIiwiQ29tcG9uZW50IiwiY3R4IiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIkFwcCIsImNvbXBvbmVudERpZENhdGNoIiwiZXJyb3IiLCJfZXJyb3JJbmZvIiwicmVuZGVyIiwicm91dGVyIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJwcm9wcyIsImNyZWF0ZUVsZW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJ1cmwiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwid2FybkNvbnRhaW5lciIsIndhcm5VcmwiLCJleGVjT25jZSIsImNvbnNvbGUiLCJ3YXJuIiwicCIsImNoaWxkcmVuIiwicGF0aG5hbWUiLCJhc1BhdGgiLCJxdWVyeSIsImJhY2siLCJwdXNoIiwiYXMiLCJwdXNoVG8iLCJocmVmIiwicHVzaFJvdXRlIiwicHVzaFVybCIsInJlcGxhY2UiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwiTXlBcHAiLCJzdG9yZSIsIm1ha2VzdG9yZSIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwid2l0aFJlZHV4IiwiaW5pdGlhbFN0YXRlIiwibWlkZGxld2FyZSIsInRodW5rIiwiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlciIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJjb21iaW5lUmVkdWNlcnMiLCJwb3N0c0RhdGEiLCJwb3N0c1JlZHVjZXIiLCJHRVRfUE9TVFNfSU5JVCIsIkdFVF9QT1NUU19TVUNDRVNTIiwiR0VUX1BPU1RTX0ZBSUxVUkUiLCJHRVRfQ1VSUkVOVF9QT1NUX0lOSVQiLCJHRVRfQ1VSUkVOVF9QT1NUX1NVQ0NFU1MiLCJHRVRfQ1VSUkVOVF9QT1NUX0ZBSUxVUkUiLCJDUkVBVEVfUE9TVF9JTklUIiwiQ1JFQVRFX1BPU1RfU1VDQ0VTUyIsIkNSRUFURV9QT1NUX0ZBSUxVUkUiLCJTRVRfRklFTERfVkFMVUUiLCJDTEVBUl9TVE9SRSIsImFjdGlvblR5cGVzIiwiaW5pdGlhbFBvc3RzU3RhdGUiLCJkYXRhIiwibG9hZGluZyIsImxvYWRlZCIsImVycm9yRGF0YSIsInN0YXRlIiwidHlwZSIsInBheWxvYWQiLCJpbml0aWFsQ3VycmVudFBvc3RTdGF0ZSIsInBvc3QiLCJ0aXRsZSIsImJvZHkiLCJpZCIsImN1cnJlbnRQb3N0UmVkdWNlciIsImluaXRpYWxDcmVhdGVQb3N0U3RhdGUiLCJzZW5kaW5nIiwic2VudCIsImNyZWF0ZVBvc3RSZWR1Y2VyIiwibmFtZSIsInZhbHVlIiwicG9zdHNMaXN0RGF0YSIsImN1cnJlbnRQb3N0IiwiY3JlYXRlUG9zdCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLCtEOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDTkEsaUJBQWlCLG1CQUFPLENBQUMsaUVBQW1COzs7Ozs7Ozs7Ozs7O0FDQS9COztBQUFBLElBQUlBLHNCQUFzQixHQUFDQyxtQkFBTyxDQUFDLG9IQUFELENBQWxDOztBQUFtRkMsT0FBTyxDQUFDQyxVQUFSLEdBQW1CLElBQW5CO0FBQXdCRCxPQUFPLENBQUNFLFNBQVIsR0FBa0JBLFNBQWxCO0FBQTRCRixPQUFPLENBQUNHLFNBQVIsR0FBa0JBLFNBQWxCO0FBQTRCSCxPQUFPLENBQUNJLE9BQVIsR0FBZ0IsS0FBSyxDQUFyQjs7QUFBdUIsSUFBSUMsTUFBTSxHQUFDUCxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBRCxDQUFSLENBQWpDOztBQUFvRCxJQUFJTyxNQUFNLEdBQUNQLG1CQUFPLENBQUMsMERBQUQsQ0FBbEI7O0FBQStDQyxPQUFPLENBQUNPLGVBQVIsR0FBd0JELE1BQU0sQ0FBQ0MsZUFBL0I7QUFBK0M7Ozs7O0FBR3RWLGVBQWVDLGtCQUFmLENBQWtDQyxJQUFsQyxFQUF1QztBQUFDLE1BQUc7QUFBQ0MsYUFBRDtBQUFXQztBQUFYLE1BQWdCRixJQUFuQjtBQUF3QixNQUFJRyxTQUFTLEdBQUMsTUFBSyxDQUFDLEdBQUVOLE1BQU0sQ0FBQ08sbUJBQVYsRUFBK0JILFNBQS9CLEVBQXlDQyxHQUF6QyxDQUFuQjtBQUFpRSxTQUFNO0FBQUNDO0FBQUQsR0FBTjtBQUFtQjs7QUFBQSxNQUFNRSxHQUFOLFNBQWtCVCxNQUFNLENBQUNELE9BQVAsQ0FBZU0sU0FBakMsQ0FBMEM7QUFBQztBQUNsTTtBQUNBO0FBQ0FLLG1CQUFpQixDQUFDQyxLQUFELEVBQU9DLFVBQVAsRUFBa0I7QUFBQyxVQUFNRCxLQUFOO0FBQWE7O0FBQUFFLFFBQU0sR0FBRTtBQUFDLFFBQUc7QUFBQ0MsWUFBRDtBQUFRVCxlQUFSO0FBQWtCRSxlQUFsQjtBQUE0QlEsYUFBNUI7QUFBb0NDO0FBQXBDLFFBQTZDLEtBQUtDLEtBQXJEO0FBQTJELFdBQU0sYUFBYWpCLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlbUIsYUFBZixDQUE2QmIsU0FBN0IsRUFBdUNjLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBaUJiLFNBQWpCLEVBQTJCO0FBQzFNO0FBQ0EsTUFBRVEsT0FBTyxJQUFFQyxPQUFYLElBQW9CO0FBQUNLLFNBQUcsRUFBQ3ZCLFNBQVMsQ0FBQ2dCLE1BQUQ7QUFBZCxLQUFwQixHQUE0QyxFQUZtSSxDQUF2QyxDQUFuQjtBQUVuRTs7QUFMK0k7O0FBSzlJbkIsT0FBTyxDQUFDSSxPQUFSLEdBQWdCVSxHQUFoQjtBQUFvQkEsR0FBRyxDQUFDYSxtQkFBSixHQUF3Qm5CLGtCQUF4QjtBQUEyQ00sR0FBRyxDQUFDYyxlQUFKLEdBQW9CcEIsa0JBQXBCO0FBQXVDLElBQUlxQixhQUFKO0FBQWtCLElBQUlDLE9BQUo7O0FBQVksVUFBdUM7QUFBQ0QsZUFBYSxHQUFDLENBQUMsR0FBRXZCLE1BQU0sQ0FBQ3lCLFFBQVYsRUFBb0IsTUFBSTtBQUFDQyxXQUFPLENBQUNDLElBQVIsQ0FBYSxvSUFBYjtBQUFvSixHQUE3SyxDQUFkO0FBQTZMSCxTQUFPLEdBQUMsQ0FBQyxHQUFFeEIsTUFBTSxDQUFDeUIsUUFBVixFQUFvQixNQUFJO0FBQUNDLFdBQU8sQ0FBQ2hCLEtBQVIsQ0FBYyx1RkFBZDtBQUF3RyxHQUFqSSxDQUFSO0FBQTRJLEMsQ0FBQTs7O0FBQ3hpQixTQUFTZCxTQUFULENBQW1CZ0MsQ0FBbkIsRUFBcUI7QUFBQyxZQUF1Q0wsYUFBYTtBQUFHLFNBQU9LLENBQUMsQ0FBQ0MsUUFBVDtBQUFtQjs7QUFBQSxTQUFTaEMsU0FBVCxDQUFtQmdCLE1BQW5CLEVBQTBCO0FBQUM7QUFDM0gsTUFBRztBQUFDaUIsWUFBRDtBQUFVQyxVQUFWO0FBQWlCQztBQUFqQixNQUF3Qm5CLE1BQTNCO0FBQWtDLFNBQU07QUFBQyxRQUFJbUIsS0FBSixHQUFXO0FBQUMsZ0JBQXVDUixPQUFPO0FBQUcsYUFBT1EsS0FBUDtBQUFjLEtBQTVFOztBQUE2RSxRQUFJRixRQUFKLEdBQWM7QUFBQyxnQkFBdUNOLE9BQU87QUFBRyxhQUFPTSxRQUFQO0FBQWlCLEtBQTlKOztBQUErSixRQUFJQyxNQUFKLEdBQVk7QUFBQyxnQkFBdUNQLE9BQU87QUFBRyxhQUFPTyxNQUFQO0FBQWUsS0FBNU87O0FBQTZPRSxRQUFJLEVBQUMsTUFBSTtBQUFDLGdCQUF1Q1QsT0FBTztBQUFHWCxZQUFNLENBQUNvQixJQUFQO0FBQWUsS0FBdlQ7QUFBd1RDLFFBQUksRUFBQyxDQUFDZCxHQUFELEVBQUtlLEVBQUwsS0FBVTtBQUFDLGdCQUF1Q1gsT0FBTztBQUFHLGFBQU9YLE1BQU0sQ0FBQ3FCLElBQVAsQ0FBWWQsR0FBWixFQUFnQmUsRUFBaEIsQ0FBUDtBQUE0QixLQUFyWjtBQUFzWkMsVUFBTSxFQUFDLENBQUNDLElBQUQsRUFBTUYsRUFBTixLQUFXO0FBQUMsZ0JBQXVDWCxPQUFPO0FBQUcsVUFBSWMsU0FBUyxHQUFDSCxFQUFFLEdBQUNFLElBQUQsR0FBTSxFQUF0QjtBQUF5QixVQUFJRSxPQUFPLEdBQUNKLEVBQUUsSUFBRUUsSUFBaEI7QUFBcUIsYUFBT3hCLE1BQU0sQ0FBQ3FCLElBQVAsQ0FBWUksU0FBWixFQUFzQkMsT0FBdEIsQ0FBUDtBQUF1QyxLQUEvaUI7QUFBZ2pCQyxXQUFPLEVBQUMsQ0FBQ3BCLEdBQUQsRUFBS2UsRUFBTCxLQUFVO0FBQUMsZ0JBQXVDWCxPQUFPO0FBQUcsYUFBT1gsTUFBTSxDQUFDMkIsT0FBUCxDQUFlcEIsR0FBZixFQUFtQmUsRUFBbkIsQ0FBUDtBQUErQixLQUFucEI7QUFBb3BCTSxhQUFTLEVBQUMsQ0FBQ0osSUFBRCxFQUFNRixFQUFOLEtBQVc7QUFBQyxnQkFBdUNYLE9BQU87QUFBRyxVQUFJa0IsWUFBWSxHQUFDUCxFQUFFLEdBQUNFLElBQUQsR0FBTSxFQUF6QjtBQUE0QixVQUFJTSxVQUFVLEdBQUNSLEVBQUUsSUFBRUUsSUFBbkI7QUFBd0IsYUFBT3hCLE1BQU0sQ0FBQzJCLE9BQVAsQ0FBZUUsWUFBZixFQUE0QkMsVUFBNUIsQ0FBUDtBQUFnRDtBQUEvekIsR0FBTjtBQUF3MEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWMTJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNQyxLQUFOLFNBQW9CcEMsK0NBQXBCLENBQXdCO0FBQ3BCSSxRQUFNLEdBQUc7QUFDTCxVQUFNO0FBQUVSLGVBQUY7QUFBYUU7QUFBYixRQUEyQixLQUFLVSxLQUF0QztBQUNBLFdBQ0ksTUFBQyxvREFBRDtBQUFVLFdBQUssRUFBRTZCLDhDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxTQUFELGVBQWV2QyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FESixDQURKO0FBS0g7O0FBUm1COztBQVd4QixNQUFNd0MsU0FBUyxHQUFHLE1BQU1ELDhDQUF4Qjs7QUFDQSxNQUFNRSxPQUFPLEdBQUdDLHdFQUFhLENBQUNGLFNBQUQsQ0FBN0I7QUFFZUMsc0VBQU8sQ0FBQ0UsU0FBUixDQUFrQkwsS0FBbEIsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUN0QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsTUFBTU0sWUFBWSxHQUFHLEVBQXJCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLENBQUNDLGtEQUFELENBQW5CO0FBRUEsTUFBTVAsS0FBSyxHQUFHUSx5REFBVyxDQUFDQyxpREFBRCxFQUFjSixZQUFkLEVBQTRCSyxvRkFBbUIsQ0FBQ0MsNkRBQWUsQ0FBQyxHQUFHTCxVQUFKLENBQWhCLENBQS9DLENBQXpCO0FBRWVOLG9FQUFmLEU7Ozs7Ozs7Ozs7OztBQ1hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVlWSw0SEFBZSxDQUFDO0FBQzNCQyxXQUFTLEVBQUVDLHFEQUFZQTtBQURJLENBQUQsQ0FBOUIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFFQSxNQUFNO0FBQ0ZDLGdCQURFO0FBRUZDLG1CQUZFO0FBR0ZDLG1CQUhFO0FBSUZDLHVCQUpFO0FBS0ZDLDBCQUxFO0FBTUZDLDBCQU5FO0FBT0ZDLGtCQVBFO0FBUUZDLHFCQVJFO0FBU0ZDLHFCQVRFO0FBVUZDLGlCQVZFO0FBV0ZDO0FBWEUsSUFZRkMsa0RBWko7QUFjQSxNQUFNQyxpQkFBaUIsR0FBRztBQUN0QkMsTUFBSSxFQUFFLEVBRGdCO0FBRXRCQyxTQUFPLEVBQUUsS0FGYTtBQUd0QkMsUUFBTSxFQUFFLEtBSGM7QUFJdEJqRSxPQUFLLEVBQUUsS0FKZTtBQUt0QmtFLFdBQVMsRUFBRTtBQUxXLENBQTFCOztBQVFBLE1BQU1qQixZQUFZLEdBQUcsQ0FBQ2tCLEtBQUssR0FBR0wsaUJBQVQsRUFBNEI7QUFBRU0sTUFBRjtBQUFRQztBQUFSLENBQTVCLEtBQWtEO0FBQ25FLFVBQVFELElBQVI7QUFDSSxTQUFLbEIsY0FBTDtBQUNJLDZDQUFZaUIsS0FBWjtBQUFtQkgsZUFBTyxFQUFFLElBQTVCO0FBQWtDQyxjQUFNLEVBQUUsS0FBMUM7QUFBaURqRSxhQUFLLEVBQUUsS0FBeEQ7QUFBK0RrRSxpQkFBUyxFQUFFO0FBQTFFOztBQUNKLFNBQUtmLGlCQUFMO0FBQXdCO0FBQ3BCLGNBQU07QUFBRVk7QUFBRixZQUFXTSxPQUFqQjtBQUNBLCtDQUFZRixLQUFaO0FBQW1CSixjQUFuQjtBQUF5QkMsaUJBQU8sRUFBRSxLQUFsQztBQUF5Q0MsZ0JBQU0sRUFBRSxJQUFqRDtBQUF1RGpFLGVBQUssRUFBRSxLQUE5RDtBQUFxRWtFLG1CQUFTLEVBQUU7QUFBaEY7QUFDSDs7QUFDRCxTQUFLZCxpQkFBTDtBQUNJLDZDQUFZZSxLQUFaO0FBQW1CSCxlQUFPLEVBQUUsS0FBNUI7QUFBbUNDLGNBQU0sRUFBRSxLQUEzQztBQUFrRGpFLGFBQUssRUFBRSxJQUF6RDtBQUErRGtFLGlCQUFTLEVBQUVHO0FBQTFFOztBQUNKLFNBQUtULFdBQUw7QUFDSSw2Q0FBWU8sS0FBWixHQUFzQkwsaUJBQXRCOztBQUNKO0FBQ0ksYUFBT0ssS0FBUDtBQVpSO0FBY0gsQ0FmRDs7QUFpQkEsTUFBTUcsdUJBQXVCLEdBQUc7QUFDNUJDLE1BQUksRUFBRTtBQUNGQyxTQUFLLEVBQUUsRUFETDtBQUVGQyxRQUFJLEVBQUUsRUFGSjtBQUdGQyxNQUFFLEVBQUU7QUFIRixHQURzQjtBQU01QlYsU0FBTyxFQUFFLEtBTm1CO0FBTzVCQyxRQUFNLEVBQUUsS0FQb0I7QUFRNUJqRSxPQUFLLEVBQUUsS0FScUI7QUFTNUJrRSxXQUFTLEVBQUU7QUFUaUIsQ0FBaEM7O0FBWUEsTUFBTVMsa0JBQWtCLEdBQUcsQ0FBQ1IsS0FBSyxHQUFHRyx1QkFBVCxFQUFrQztBQUFFRixNQUFGO0FBQVFDO0FBQVIsQ0FBbEMsS0FBd0Q7QUFDL0UsVUFBUUQsSUFBUjtBQUNJLFNBQUtmLHFCQUFMO0FBQ0ksNkNBQVljLEtBQVo7QUFBbUJILGVBQU8sRUFBRSxJQUE1QjtBQUFrQ0MsY0FBTSxFQUFFLEtBQTFDO0FBQWlEakUsYUFBSyxFQUFFLEtBQXhEO0FBQStEa0UsaUJBQVMsRUFBRTtBQUExRTs7QUFDSixTQUFLWix3QkFBTDtBQUErQjtBQUMzQixjQUFNO0FBQUVTO0FBQUYsWUFBV00sT0FBakI7QUFDQSwrQ0FBWUYsS0FBWjtBQUFtQkksY0FBSSxFQUFFUixJQUF6QjtBQUErQkMsaUJBQU8sRUFBRSxLQUF4QztBQUErQ0MsZ0JBQU0sRUFBRSxJQUF2RDtBQUE2RGpFLGVBQUssRUFBRSxLQUFwRTtBQUEyRWtFLG1CQUFTLEVBQUU7QUFBdEY7QUFDSDs7QUFDRCxTQUFLWCx3QkFBTDtBQUNJLDZDQUFZWSxLQUFaO0FBQW1CSCxlQUFPLEVBQUUsS0FBNUI7QUFBbUNDLGNBQU0sRUFBRSxLQUEzQztBQUFrRGpFLGFBQUssRUFBRSxJQUF6RDtBQUErRGtFLGlCQUFTLEVBQUVHO0FBQTFFOztBQUNKLFNBQUtULFdBQUw7QUFDSSw2Q0FBWU8sS0FBWixHQUFzQkcsdUJBQXRCOztBQUNKO0FBQ0ksYUFBT0gsS0FBUDtBQVpSO0FBY0gsQ0FmRDs7QUFpQkEsTUFBTVMsc0JBQXNCLEdBQUc7QUFDM0JKLE9BQUssRUFBRSxFQURvQjtBQUUzQkMsTUFBSSxFQUFFLEVBRnFCO0FBRzNCSSxTQUFPLEVBQUUsS0FIa0I7QUFJM0JDLE1BQUksRUFBRSxLQUpxQjtBQUszQjlFLE9BQUssRUFBRSxLQUxvQjtBQU0zQmtFLFdBQVMsRUFBRTtBQU5nQixDQUEvQjs7QUFTQSxNQUFNYSxpQkFBaUIsR0FBRyxDQUFDWixLQUFLLEdBQUdTLHNCQUFULEVBQWlDO0FBQUVSLE1BQUY7QUFBUUM7QUFBUixDQUFqQyxLQUF1RDtBQUM3RSxVQUFRRCxJQUFSO0FBQ0ksU0FBS1osZ0JBQUw7QUFDSSw2Q0FBWVcsS0FBWjtBQUFtQlUsZUFBTyxFQUFFLElBQTVCO0FBQWtDQyxZQUFJLEVBQUUsS0FBeEM7QUFBK0M5RSxhQUFLLEVBQUUsS0FBdEQ7QUFBNkRrRSxpQkFBUyxFQUFFO0FBQXhFOztBQUNKLFNBQUtULG1CQUFMO0FBQ0ksNkNBQVlVLEtBQVo7QUFBbUJVLGVBQU8sRUFBRSxLQUE1QjtBQUFtQ0MsWUFBSSxFQUFFLElBQXpDO0FBQStDOUUsYUFBSyxFQUFFLEtBQXREO0FBQTZEa0UsaUJBQVMsRUFBRTtBQUF4RTs7QUFDSixTQUFLUixtQkFBTDtBQUNJLDZDQUFZUyxLQUFaO0FBQW1CVSxlQUFPLEVBQUUsS0FBNUI7QUFBbUNDLFlBQUksRUFBRSxLQUF6QztBQUFnRDlFLGFBQUssRUFBRSxJQUF2RDtBQUE2RGtFLGlCQUFTLEVBQUVHO0FBQXhFOztBQUNKLFNBQUtWLGVBQUw7QUFBc0I7QUFDbEIsY0FBTTtBQUFFcUIsY0FBRjtBQUFRQztBQUFSLFlBQWtCWixPQUF4QjtBQUNBLCtDQUFZRixLQUFaO0FBQW1CLFdBQUNhLElBQUQsR0FBUUMsS0FBM0I7QUFBa0NKLGlCQUFPLEVBQUUsS0FBM0M7QUFBa0RDLGNBQUksRUFBRSxLQUF4RDtBQUErRDlFLGVBQUssRUFBRSxLQUF0RTtBQUE2RWtFLG1CQUFTLEVBQUU7QUFBeEY7QUFDSDs7QUFDRCxTQUFLTixXQUFMO0FBQ0ksNkNBQVlPLEtBQVosR0FBc0JTLHNCQUF0Qjs7QUFDSjtBQUNJLGFBQU9ULEtBQVA7QUFkUjtBQWdCSCxDQWpCRDs7QUFtQmVwQiw0SEFBZSxDQUFDO0FBQzNCbUMsZUFBYSxFQUFFakMsWUFEWTtBQUUzQmtDLGFBQVcsRUFBRVIsa0JBRmM7QUFHM0JTLFlBQVUsRUFBRUw7QUFIZSxDQUFELENBQTlCLEU7Ozs7Ozs7Ozs7OztBQ25HQTtBQUFBO0FBQU8sTUFBTWxCLFdBQVcsR0FBRztBQUN2QlgsZ0JBQWMsRUFBRSxnQkFETztBQUV2QkMsbUJBQWlCLEVBQUUsbUJBRkk7QUFHdkJDLG1CQUFpQixFQUFFLG1CQUhJO0FBSXZCQyx1QkFBcUIsRUFBRSx1QkFKQTtBQUt2QkMsMEJBQXdCLEVBQUUsMEJBTEg7QUFNdkJDLDBCQUF3QixFQUFFLDBCQU5IO0FBT3ZCQyxrQkFBZ0IsRUFBRSxrQkFQSztBQVF2QkMscUJBQW1CLEVBQUUscUJBUkU7QUFTdkJDLHFCQUFtQixFQUFFLHFCQVRFO0FBVXZCQyxpQkFBZSxFQUFFLGlCQVZNO0FBV3ZCQyxhQUFXLEVBQUU7QUFYVSxDQUFwQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVAsK0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoic3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5Db250YWluZXI9Q29udGFpbmVyO2V4cG9ydHMuY3JlYXRlVXJsPWNyZWF0ZVVybDtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTtleHBvcnRzLkFwcEluaXRpYWxQcm9wcz1fdXRpbHMuQXBwSW5pdGlhbFByb3BzOy8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9hc3luYyBmdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoX3JlZil7dmFye0NvbXBvbmVudCxjdHh9PV9yZWY7dmFyIHBhZ2VQcm9wcz1hd2FpdCgwLF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShDb21wb25lbnQsY3R4KTtyZXR1cm57cGFnZVByb3BzfTt9Y2xhc3MgQXBwIGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50ey8vIEtlcHQgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4vLyBXaGVuIHNvbWVvbmUgZW5kZWQgQXBwIHRoZXkgY291bGQgY2FsbCBgc3VwZXIuY29tcG9uZW50RGlkQ2F0Y2hgLlxuLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsX2Vycm9ySW5mbyl7dGhyb3cgZXJyb3I7fXJlbmRlcigpe3Zhcntyb3V0ZXIsQ29tcG9uZW50LHBhZ2VQcm9wcyxfX05fU1NHLF9fTl9TU1B9PXRoaXMucHJvcHM7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe30scGFnZVByb3BzLC8vIHdlIGRvbid0IGFkZCB0aGUgbGVnYWN5IFVSTCBwcm9wIGlmIGl0J3MgdXNpbmcgbm9uLWxlZ2FjeVxuLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiEoX19OX1NTR3x8X19OX1NTUCk/e3VybDpjcmVhdGVVcmwocm91dGVyKX06e30pKTt9fWV4cG9ydHMuZGVmYXVsdD1BcHA7QXBwLm9yaWdHZXRJbml0aWFsUHJvcHM9YXBwR2V0SW5pdGlhbFByb3BzO0FwcC5nZXRJbml0aWFsUHJvcHM9YXBwR2V0SW5pdGlhbFByb3BzO3ZhciB3YXJuQ29udGFpbmVyO3ZhciB3YXJuVXJsO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt3YXJuQ29udGFpbmVyPSgwLF91dGlscy5leGVjT25jZSkoKCk9Pntjb25zb2xlLndhcm4oXCJXYXJuaW5nOiB0aGUgYENvbnRhaW5lcmAgaW4gYF9hcHBgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHNob3VsZCBiZSByZW1vdmVkLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkXCIpO30pO3dhcm5Vcmw9KDAsX3V0aWxzLmV4ZWNPbmNlKSgoKT0+e2NvbnNvbGUuZXJyb3IoXCJXYXJuaW5nOiB0aGUgJ3VybCcgcHJvcGVydHkgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3VybC1kZXByZWNhdGVkXCIpO30pO30vLyBAZGVwcmVjYXRlZCBub29wIGZvciBub3cgdW50aWwgcmVtb3ZhbFxuZnVuY3Rpb24gQ29udGFpbmVyKHApe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5Db250YWluZXIoKTtyZXR1cm4gcC5jaGlsZHJlbjt9ZnVuY3Rpb24gY3JlYXRlVXJsKHJvdXRlcil7Ly8gVGhpcyBpcyB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgcmVmZXJlbmNlcyB0aGUgcm91dGVyIG9iamVjdCBhdCBjYWxsIHRpbWVcbnZhcntwYXRobmFtZSxhc1BhdGgscXVlcnl9PXJvdXRlcjtyZXR1cm57Z2V0IHF1ZXJ5KCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiBxdWVyeTt9LGdldCBwYXRobmFtZSgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gcGF0aG5hbWU7fSxnZXQgYXNQYXRoKCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiBhc1BhdGg7fSxiYWNrOigpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JvdXRlci5iYWNrKCk7fSxwdXNoOih1cmwsYXMpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiByb3V0ZXIucHVzaCh1cmwsYXMpO30scHVzaFRvOihocmVmLGFzKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTt2YXIgcHVzaFJvdXRlPWFzP2hyZWY6Jyc7dmFyIHB1c2hVcmw9YXN8fGhyZWY7cmV0dXJuIHJvdXRlci5wdXNoKHB1c2hSb3V0ZSxwdXNoVXJsKTt9LHJlcGxhY2U6KHVybCxhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHJvdXRlci5yZXBsYWNlKHVybCxhcyk7fSxyZXBsYWNlVG86KGhyZWYsYXMpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3ZhciByZXBsYWNlUm91dGU9YXM/aHJlZjonJzt2YXIgcmVwbGFjZVVybD1hc3x8aHJlZjtyZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLHJlcGxhY2VVcmwpO319O30iLCJpbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3JlJztcblxuaW1wb3J0ICcuLi9zdHlsZS9tYWluLmNzcyc7XG5cbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFrZXN0b3JlID0gKCkgPT4gc3RvcmU7XG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihtYWtlc3RvcmUpO1xuXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChNeUFwcCk7XG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xuXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xuY29uc3QgbWlkZGxld2FyZSA9IFt0aHVua107XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCBwb3N0c1JlZHVjZXIgZnJvbSAnLi9wb3N0c1JlZHVjZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICAgIHBvc3RzRGF0YTogcG9zdHNSZWR1Y2VyLFxufSk7XG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBhY3Rpb25UeXBlcyB9IGZyb20gJy4uL3R5cGVzJztcblxuY29uc3Qge1xuICAgIEdFVF9QT1NUU19JTklULFxuICAgIEdFVF9QT1NUU19TVUNDRVNTLFxuICAgIEdFVF9QT1NUU19GQUlMVVJFLFxuICAgIEdFVF9DVVJSRU5UX1BPU1RfSU5JVCxcbiAgICBHRVRfQ1VSUkVOVF9QT1NUX1NVQ0NFU1MsXG4gICAgR0VUX0NVUlJFTlRfUE9TVF9GQUlMVVJFLFxuICAgIENSRUFURV9QT1NUX0lOSVQsXG4gICAgQ1JFQVRFX1BPU1RfU1VDQ0VTUyxcbiAgICBDUkVBVEVfUE9TVF9GQUlMVVJFLFxuICAgIFNFVF9GSUVMRF9WQUxVRSxcbiAgICBDTEVBUl9TVE9SRSxcbn0gPSBhY3Rpb25UeXBlcztcblxuY29uc3QgaW5pdGlhbFBvc3RzU3RhdGUgPSB7XG4gICAgZGF0YTogW10sXG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgbG9hZGVkOiBmYWxzZSxcbiAgICBlcnJvcjogZmFsc2UsXG4gICAgZXJyb3JEYXRhOiB7fSxcbn07XG5cbmNvbnN0IHBvc3RzUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxQb3N0c1N0YXRlLCB7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIEdFVF9QT1NUU19JTklUOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IHRydWUsIGxvYWRlZDogZmFsc2UsIGVycm9yOiBmYWxzZSwgZXJyb3JEYXRhOiB7fSB9O1xuICAgICAgICBjYXNlIEdFVF9QT1NUU19TVUNDRVNTOiB7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHBheWxvYWQ7XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZGF0YSwgbG9hZGluZzogZmFsc2UsIGxvYWRlZDogdHJ1ZSwgZXJyb3I6IGZhbHNlLCBlcnJvckRhdGE6IHt9IH07XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBHRVRfUE9TVFNfRkFJTFVSRTpcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgbG9hZGVkOiBmYWxzZSwgZXJyb3I6IHRydWUsIGVycm9yRGF0YTogcGF5bG9hZCB9O1xuICAgICAgICBjYXNlIENMRUFSX1NUT1JFOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmluaXRpYWxQb3N0c1N0YXRlIH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuY29uc3QgaW5pdGlhbEN1cnJlbnRQb3N0U3RhdGUgPSB7XG4gICAgcG9zdDoge1xuICAgICAgICB0aXRsZTogJycsXG4gICAgICAgIGJvZHk6ICcnLFxuICAgICAgICBpZDogbnVsbCxcbiAgICB9LFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIGxvYWRlZDogZmFsc2UsXG4gICAgZXJyb3I6IGZhbHNlLFxuICAgIGVycm9yRGF0YToge30sXG59O1xuXG5jb25zdCBjdXJyZW50UG9zdFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsQ3VycmVudFBvc3RTdGF0ZSwgeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBHRVRfQ1VSUkVOVF9QT1NUX0lOSVQ6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZSwgbG9hZGVkOiBmYWxzZSwgZXJyb3I6IGZhbHNlLCBlcnJvckRhdGE6IHt9IH07XG4gICAgICAgIGNhc2UgR0VUX0NVUlJFTlRfUE9TVF9TVUNDRVNTOiB7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHBheWxvYWQ7XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcG9zdDogZGF0YSwgbG9hZGluZzogZmFsc2UsIGxvYWRlZDogdHJ1ZSwgZXJyb3I6IGZhbHNlLCBlcnJvckRhdGE6IHt9IH07XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBHRVRfQ1VSUkVOVF9QT1NUX0ZBSUxVUkU6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIGxvYWRlZDogZmFsc2UsIGVycm9yOiB0cnVlLCBlcnJvckRhdGE6IHBheWxvYWQgfTtcbiAgICAgICAgY2FzZSBDTEVBUl9TVE9SRTpcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5pbml0aWFsQ3VycmVudFBvc3RTdGF0ZSB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbmNvbnN0IGluaXRpYWxDcmVhdGVQb3N0U3RhdGUgPSB7XG4gICAgdGl0bGU6ICcnLFxuICAgIGJvZHk6ICcnLFxuICAgIHNlbmRpbmc6IGZhbHNlLFxuICAgIHNlbnQ6IGZhbHNlLFxuICAgIGVycm9yOiBmYWxzZSxcbiAgICBlcnJvckRhdGE6IHt9LFxufTtcblxuY29uc3QgY3JlYXRlUG9zdFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsQ3JlYXRlUG9zdFN0YXRlLCB7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIENSRUFURV9QT1NUX0lOSVQ6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc2VuZGluZzogdHJ1ZSwgc2VudDogZmFsc2UsIGVycm9yOiBmYWxzZSwgZXJyb3JEYXRhOiB7fSB9O1xuICAgICAgICBjYXNlIENSRUFURV9QT1NUX1NVQ0NFU1M6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc2VuZGluZzogZmFsc2UsIHNlbnQ6IHRydWUsIGVycm9yOiBmYWxzZSwgZXJyb3JEYXRhOiB7fSB9O1xuICAgICAgICBjYXNlIENSRUFURV9QT1NUX0ZBSUxVUkU6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc2VuZGluZzogZmFsc2UsIHNlbnQ6IGZhbHNlLCBlcnJvcjogdHJ1ZSwgZXJyb3JEYXRhOiBwYXlsb2FkIH07XG4gICAgICAgIGNhc2UgU0VUX0ZJRUxEX1ZBTFVFOiB7XG4gICAgICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBwYXlsb2FkO1xuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIFtuYW1lXTogdmFsdWUsIHNlbmRpbmc6IGZhbHNlLCBzZW50OiBmYWxzZSwgZXJyb3I6IGZhbHNlLCBlcnJvckRhdGE6IHt9IH07XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDTEVBUl9TVE9SRTpcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5pbml0aWFsQ3JlYXRlUG9zdFN0YXRlIH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgICBwb3N0c0xpc3REYXRhOiBwb3N0c1JlZHVjZXIsXG4gICAgY3VycmVudFBvc3Q6IGN1cnJlbnRQb3N0UmVkdWNlcixcbiAgICBjcmVhdGVQb3N0OiBjcmVhdGVQb3N0UmVkdWNlcixcbn0pO1xuIiwiZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xuICAgIEdFVF9QT1NUU19JTklUOiAnR0VUX1BPU1RTX0lOSVQnLFxuICAgIEdFVF9QT1NUU19TVUNDRVNTOiAnR0VUX1BPU1RTX1NVQ0NFU1MnLFxuICAgIEdFVF9QT1NUU19GQUlMVVJFOiAnR0VUX1BPU1RTX0ZBSUxVUkUnLFxuICAgIEdFVF9DVVJSRU5UX1BPU1RfSU5JVDogJ0dFVF9DVVJSRU5UX1BPU1RfSU5JVCcsXG4gICAgR0VUX0NVUlJFTlRfUE9TVF9TVUNDRVNTOiAnR0VUX0NVUlJFTlRfUE9TVF9TVUNDRVNTJyxcbiAgICBHRVRfQ1VSUkVOVF9QT1NUX0ZBSUxVUkU6ICdHRVRfQ1VSUkVOVF9QT1NUX0ZBSUxVUkUnLFxuICAgIENSRUFURV9QT1NUX0lOSVQ6ICdDUkVBVEVfUE9TVF9JTklUJyxcbiAgICBDUkVBVEVfUE9TVF9TVUNDRVNTOiAnQ1JFQVRFX1BPU1RfU1VDQ0VTUycsXG4gICAgQ1JFQVRFX1BPU1RfRkFJTFVSRTogJ0NSRUFURV9QT1NUX0ZBSUxVUkUnLFxuICAgIFNFVF9GSUVMRF9WQUxVRTogJ1NFVF9GSUVMRF9WQUxVRScsXG4gICAgQ0xFQVJfU1RPUkU6ICdDTEVBUl9TVE9SRScsXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9