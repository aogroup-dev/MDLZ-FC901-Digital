define("e11dcbe6-01d3-4e01-a211-81cf639ea06f_0.0.1", ["@microsoft/sp-property-pane","@microsoft/sp-core-library","@microsoft/sp-webpart-base","react","react-dom","HelloWorldWebPartStrings"], function(__WEBPACK_EXTERNAL_MODULE__26ea__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_br4S__, __WEBPACK_EXTERNAL_MODULE_cDcd__, __WEBPACK_EXTERNAL_MODULE_faye__, __WEBPACK_EXTERNAL_MODULE_hI9z__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "GFLV");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00tv":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ref--6-2!./lib/webparts/helloWorld/components/HelloWorld.module.css ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".allNews_2d5c284f{display:block}input[type=radio],input[type=radio]+div{display:none}input[type=radio]:checked+div{display:block}hr{border:.05em solid #fff}.listData_2d5c284f{background-color:#e2ebf3;padding:20px}.allNews_2d5c284f>ul>li{clear:both}.filters_2d5c284f,label{display:block}label{background-color:#2d6eaa;color:#fff;cursor:pointer;font-family:MDLZ,sans-serif;font-size:22px;margin-bottom:2px;padding:10px 20px;text-transform:uppercase;width:100%}label.active_2d5c284f{color:#2d6eaa}ul{list-style:none;padding:0}ul.listNews_2d5c284f li a{color:#000;display:inline-block;padding:5px 0;text-decoration:none;width:50%}div.pagination_2d5c284f{display:-ms-flexbox;display:flex}div.pagination_2d5c284f ul{margin-left:auto}div.pagination_2d5c284f ul li{display:inline}div.pagination_2d5c284f ul li a{color:#81a8cc;list-style:none;padding:5px 10px;text-decoration:none}div.pagination_2d5c284f ul li a.active_2d5c284f{border:1px solid #81a8cc;color:#2d6eaa}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "26ea":
/*!**********************************************!*\
  !*** external "@microsoft/sp-property-pane" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__26ea__;

/***/ }),

/***/ "9SGU":
/*!**********************************************************!*\
  !*** ./lib/webparts/helloWorld/components/HelloWorld.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HelloWorld_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HelloWorld.module.scss */ "nen0");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var HelloWorld = /** @class */ (function (_super) {
    __extends(HelloWorld, _super);
    function HelloWorld() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloWorld.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", { className: _HelloWorld_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].allNews },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "All News"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { htmlFor: "news_head" }, "HEADLINES"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "radio", name: "news_acc", id: "news_head" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _HelloWorld_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listData },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _HelloWorld_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].filters },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, "Filter by year"),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", null),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: _HelloWorld_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listNews },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"))),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _HelloWorld_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].pagination },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: _HelloWorld_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].active, href: "#" }, "1")),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#" }, "2")),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#" }, "3"))))))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { htmlFor: "news_all" }, "ALLOCATIONS"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "radio", name: "news_acc", id: "news_all" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _HelloWorld_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listData },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "filters" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, "Filter by year"),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", null),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: _HelloWorld_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listNews },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"))),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _HelloWorld_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].pagination },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: _HelloWorld_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].active, href: "#" }, "1")),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#" }, "2")),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#" }, "3"))))))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { htmlFor: "news_dsd" }, "DSD Retail"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "radio", name: "news_acc", id: "news_dsd" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _HelloWorld_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listData },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "filters" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, "Filter by year"),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", null),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: _HelloWorld_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listNews },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"))),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _HelloWorld_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].pagination },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: _HelloWorld_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].active, href: "#" }, "1")),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#" }, "2")),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#" }, "3"))))))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { htmlFor: "news_info" }, "Informational"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "radio", name: "news_acc", id: "news_info" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _HelloWorld_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listData },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "filters" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, "Filter by year"),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", null),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: _HelloWorld_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listNews },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"))),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _HelloWorld_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].pagination },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: _HelloWorld_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].active, href: "#" }, "1")),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#" }, "2")),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#" }, "3"))))))))));
    };
    return HelloWorld;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (HelloWorld);


/***/ }),

/***/ "GFLV":
/*!******************************************************!*\
  !*** ./lib/webparts/helloWorld/HelloWorldWebPart.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-property-pane */ "26ea");
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ "br4S");
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! HelloWorldWebPartStrings */ "hI9z");
/* harmony import */ var HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_HelloWorld__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/HelloWorld */ "9SGU");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var HelloWorldWebPart = /** @class */ (function (_super) {
    __extends(HelloWorldWebPart, _super);
    function HelloWorldWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isDarkTheme = false;
        _this._environmentMessage = '';
        return _this;
    }
    HelloWorldWebPart.prototype.render = function () {
        var element = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_HelloWorld__WEBPACK_IMPORTED_MODULE_6__["default"], {
            description: this.properties.description,
            isDarkTheme: this._isDarkTheme,
            environmentMessage: this._environmentMessage,
            hasTeamsContext: !!this.context.sdks.microsoftTeams,
            userDisplayName: this.context.pageContext.user.displayName
        });
        react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](element, this.domElement);
    };
    HelloWorldWebPart.prototype.onInit = function () {
        var _this = this;
        return this._getEnvironmentMessage().then(function (message) {
            _this._environmentMessage = message;
        });
    };
    HelloWorldWebPart.prototype._getEnvironmentMessage = function () {
        var _this = this;
        if (!!this.context.sdks.microsoftTeams) { // running in Teams, office.com or Outlook
            return this.context.sdks.microsoftTeams.teamsJs.app.getContext()
                .then(function (context) {
                var environmentMessage = '';
                switch (context.app.host.name) {
                    case 'Office': // running in Office
                        environmentMessage = _this.context.isServedFromLocalhost ? HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_5__["AppLocalEnvironmentOffice"] : HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_5__["AppOfficeEnvironment"];
                        break;
                    case 'Outlook': // running in Outlook
                        environmentMessage = _this.context.isServedFromLocalhost ? HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_5__["AppLocalEnvironmentOutlook"] : HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_5__["AppOutlookEnvironment"];
                        break;
                    case 'Teams': // running in Teams
                        environmentMessage = _this.context.isServedFromLocalhost ? HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_5__["AppLocalEnvironmentTeams"] : HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_5__["AppTeamsTabEnvironment"];
                        break;
                    default:
                        throw new Error('Unknown host');
                }
                return environmentMessage;
            });
        }
        return Promise.resolve(this.context.isServedFromLocalhost ? HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_5__["AppLocalEnvironmentSharePoint"] : HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_5__["AppSharePointEnvironment"]);
    };
    HelloWorldWebPart.prototype.onThemeChanged = function (currentTheme) {
        if (!currentTheme) {
            return;
        }
        this._isDarkTheme = !!currentTheme.isInverted;
        var semanticColors = currentTheme.semanticColors;
        if (semanticColors) {
            this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
            this.domElement.style.setProperty('--link', semanticColors.link || null);
            this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered || null);
        }
    };
    HelloWorldWebPart.prototype.onDispose = function () {
        react_dom__WEBPACK_IMPORTED_MODULE_1__["unmountComponentAtNode"](this.domElement);
    };
    Object.defineProperty(HelloWorldWebPart.prototype, "dataVersion", {
        get: function () {
            return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Version"].parse('1.0');
        },
        enumerable: false,
        configurable: true
    });
    HelloWorldWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_5__["PropertyPaneDescription"]
                    },
                    groups: [
                        {
                            groupName: HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_5__["BasicGroupName"],
                            groupFields: [
                                Object(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__["PropertyPaneTextField"])('description', {
                                    label: HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_5__["DescriptionFieldLabel"]
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return HelloWorldWebPart;
}(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__["BaseClientSideWebPart"]));
/* harmony default export */ __webpack_exports__["default"] = (HelloWorldWebPart);


/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "br4S":
/*!*********************************************!*\
  !*** external "@microsoft/sp-webpart-base" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_br4S__;

/***/ }),

/***/ "cDcd":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cDcd__;

/***/ }),

/***/ "faye":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_faye__;

/***/ }),

/***/ "hI9z":
/*!*******************************************!*\
  !*** external "HelloWorldWebPartStrings" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_hI9z__;

/***/ }),

/***/ "nen0":
/*!**********************************************************************!*\
  !*** ./lib/webparts/helloWorld/components/HelloWorld.module.scss.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./HelloWorld.module.css */ "tojx");
var styles = {
    allNews: 'allNews_2d5c284f',
    listData: 'listData_2d5c284f',
    filters: 'filters_2d5c284f',
    active: 'active_2d5c284f',
    listNews: 'listNews_2d5c284f',
    pagination: 'pagination_2d5c284f'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "tojx":
/*!******************************************************************!*\
  !*** ./lib/webparts/helloWorld/components/HelloWorld.module.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-2!./HelloWorld.module.css */ "00tv");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/load-themed-styles/lib/index.js */ "xMn6");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "vicT":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "xMn6":
/*!*****************************************************************!*\
  !*** ./node_modules/@microsoft/load-themed-styles/lib/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitStyles = exports.detokenize = exports.clearStyles = exports.loadTheme = exports.flush = exports.configureRunMode = exports.configureLoadStyles = exports.loadStyles = void 0;
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
const _root = typeof window === 'undefined' ? global : window; // eslint-disable-line @typescript-eslint/no-explicit-any
// Nonce string to inject into script tag if one provided. This is used in CSP (Content Security Policy).
const _styleNonce = _root && _root.CSPSettings && _root.CSPSettings.nonce;
const _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
const _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
const now = () => typeof performance !== 'undefined' && !!performance.now ? performance.now() : Date.now();
function measure(func) {
    const start = now();
    func();
    const end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    let state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = Object.assign(Object.assign({}, state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* Mode.sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = Object.assign(Object.assign({}, state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync = false) {
    measure(() => {
        const styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        const { mode, buffer, flushTimer } = _themeState.runState;
        if (loadAsync || mode === 1 /* Mode.async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
exports.configureRunMode = configureRunMode;
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(() => {
        const styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        const mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
exports.flush = flush;
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(() => {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 * @param option - specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option = 3 /* ClearStyleOptions.all */) {
    if (option === 3 /* ClearStyleOptions.all */ || option === 2 /* ClearStyleOptions.onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* ClearStyleOptions.all */ || option === 1 /* ClearStyleOptions.onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
exports.clearStyles = clearStyles;
function clearStylesInternal(records) {
    records.forEach((styleRecord) => {
        const styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        const themableStyles = [];
        for (const styleRecord of _themeState.registeredThemableStyles) {
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* ClearStyleOptions.onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    const { theme } = _themeState;
    let themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    const resolvedArray = (splitStyleArray || []).map((currentValue) => {
        const themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            const themedValue = theme ? theme[themeSlot] : undefined;
            const defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme &&
                !themedValue &&
                console &&
                !(themeSlot in theme) &&
                "boolean" !== 'undefined' &&
                true) {
                console.warn(`Theming value not provided for "${themeSlot}". Falling back to "${defaultValue}".`);
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    const result = [];
    if (styles) {
        let pos = 0; // Current position in styles.
        let tokenMatch;
        while ((tokenMatch = _themeTokenRegex.exec(styles))) {
            const matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    if (typeof document === 'undefined') {
        return;
    }
    const head = document.getElementsByTagName('head')[0];
    const styleElement = document.createElement('style');
    const { styleString, themable } = resolveThemableArray(styleArray);
    styleElement.setAttribute('data-load-themed-styles', 'true');
    if (_styleNonce) {
        styleElement.setAttribute('nonce', _styleNonce);
    }
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    const ev = document.createEvent('HTMLEvents');
    ev.initEvent('styleinsert', true /* bubbleEvent */, false /* cancelable */);
    ev.args = {
        newStyle: styleElement
    };
    document.dispatchEvent(ev);
    const record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../sp-build-web/node_modules/webpack/buildin/global.js */ "vicT")))

/***/ })

/******/ })});;
//# sourceMappingURL=hello-world-web-part.js.map