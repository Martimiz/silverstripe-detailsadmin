/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = ReactRouter;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lib_ReactRouteRegister__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lib_ReactRouteRegister___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lib_ReactRouteRegister__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_Config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_Config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lib_Config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_DetailsAdmin__ = __webpack_require__(4);






document.addEventListener('DOMContentLoaded', function () {
    var sectionConfig = __WEBPACK_IMPORTED_MODULE_2_lib_Config___default.a.get('sections');

    for (var i = 0; i < sectionConfig.length; i++) {
        var section = sectionConfig[i];

        if ('detailsAdmin' in section) {
            __WEBPACK_IMPORTED_MODULE_1_lib_ReactRouteRegister___default.a.add({
                path: section.url,
                component: Object(__WEBPACK_IMPORTED_MODULE_0_react_router__["withRouter"])(__WEBPACK_IMPORTED_MODULE_3__containers_DetailsAdmin__["a" /* default */])
            });
        }
    }
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactRouteRegister;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = Config;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Component */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_Toolbar_Toolbar__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_Toolbar_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components_Toolbar_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_containers_FormBuilderLoader_FormBuilderLoader__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_containers_FormBuilderLoader_FormBuilderLoader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_containers_FormBuilderLoader_FormBuilderLoader__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var schemaUrl = '';
var treeClassTitle = '';

var DetailsAdmin = function (_Component) {
  _inherits(DetailsAdmin, _Component);

  function DetailsAdmin() {
    _classCallCheck(this, DetailsAdmin);

    return _possibleConstructorReturn(this, (DetailsAdmin.__proto__ || Object.getPrototypeOf(DetailsAdmin)).apply(this, arguments));
  }

  _createClass(DetailsAdmin, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var sectionName = window.ss.detailsadmin;
      var currentSection = this.props.sectionConfig.find(function (section) {
        return section.name === sectionName;
      });
      schemaUrl = currentSection.form.detailsEditForm.schemaUrl;
      treeClassTitle = currentSection.treeClassTitle;
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'fill-height' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_components_Toolbar_Toolbar___default.a,
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            null,
            treeClassTitle
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'panel panel--padded panel--scrollable flexbox-area-grow' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_containers_FormBuilderLoader_FormBuilderLoader___default.a, {
            schemaUrl: schemaUrl
          })
        )
      );
    }
  }]);

  return DetailsAdmin;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

DetailsAdmin.defaultProps = {
  sectionConfig: {},
  params: {}
};

function mapDispatchToProps() {
  return {};
}

function mapStateToProps(state) {
  var sectionConfig = state.config.sections;
  return {
    sectionConfig: sectionConfig
  };
}



/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_router__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(DetailsAdmin)));

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = ReactRedux;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = Toolbar;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = FormBuilderLoader;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map