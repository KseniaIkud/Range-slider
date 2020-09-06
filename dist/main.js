/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ "./main.scss");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/model */ "./js/model.js");
/* harmony import */ var _js_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/view */ "./js/view.js");
/* harmony import */ var _js_contoller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/contoller */ "./js/contoller.js");
 // import './js/single-range'



 // let test = require('./js/contoller')
// console.log(test.test)
// console.log(test.test2)

/***/ }),

/***/ "./js/contoller.js":
/*!*************************!*\
  !*** ./js/contoller.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./js/model.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./js/view.js");


var form = new _view__WEBPACK_IMPORTED_MODULE_1__["Form"]({
  isDouble: _model__WEBPACK_IMPORTED_MODULE_0__["default"].isRange
});
form.createForm();
form.createInput();
form.setMin(_model__WEBPACK_IMPORTED_MODULE_0__["default"].min);
form.setMax(_model__WEBPACK_IMPORTED_MODULE_0__["default"].max);
var styles = new _view__WEBPACK_IMPORTED_MODULE_1__["Styles"]({
  isDouble: _model__WEBPACK_IMPORTED_MODULE_0__["default"].isRange
});
styles.createStyles();
styles.createTrack();
var progressBar = new _view__WEBPACK_IMPORTED_MODULE_1__["ProgressBar"]({
  isDouble: _model__WEBPACK_IMPORTED_MODULE_0__["default"].isRange
});
progressBar.createProgressBar();
var thumb = new _view__WEBPACK_IMPORTED_MODULE_1__["Thumb"]({
  isDouble: _model__WEBPACK_IMPORTED_MODULE_0__["default"].isRange
});
thumb.createThumb(); // events

var eventInput = function eventInput() {
  form.setInputValue(_model__WEBPACK_IMPORTED_MODULE_0__["default"].defaultValue, _model__WEBPACK_IMPORTED_MODULE_0__["default"].rightValue);
  var placeDefault = progressBar.calcPercent(form.defaultInput.value, form.defaultInput.min, form.defaultInput.max);
  var placeRight = form.rightInput ? progressBar.calcPercent(form.rightInput.value, form.rightInput.min, form.rightInput.max) : NaN;
  progressBar.setDefault(placeDefault, placeRight);

  if (_model__WEBPACK_IMPORTED_MODULE_0__["default"].rightProgressBar) {
    progressBar.setRight(placeDefault, placeRight);
  }

  thumb.placeThumb(placeDefault, placeRight);
};

eventInput();
form.defaultInput.addEventListener('input', function () {
  _model__WEBPACK_IMPORTED_MODULE_0__["default"].defaultValue = form.defaultInput.value;
  eventInput();
});

if (_model__WEBPACK_IMPORTED_MODULE_0__["default"].isRange) {
  form.rightInput.addEventListener('input', function () {
    _model__WEBPACK_IMPORTED_MODULE_0__["default"].rightValue = form.rightInput.value;
    eventInput();
  });
}

/***/ }),

/***/ "./js/model.js":
/*!*********************!*\
  !*** ./js/model.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DefaultRange = function DefaultRange(options) {
  _classCallCheck(this, DefaultRange);

  this.isRange = options.isRange;
  this.rightProgressBar = options.rightProgressBar;
  this.defaultValue = options.defaultValue;
  this.rightValue = options.rightValue;
  this.isOutData = options.isOutData;
  this.min = options.min;
  this.max = options.max;
};

var model;
/* harmony default export */ __webpack_exports__["default"] = (model = new DefaultRange({
  isRange: true,
  rightProgressBar: true,
  defaultValue: 20,
  rightValue: 45,
  min: 10,
  max: 50
}));

/***/ }),

/***/ "./js/view.js":
/*!********************!*\
  !*** ./js/view.js ***!
  \********************/
/*! exports provided: Form, Styles, ProgressBar, Thumb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Styles", function() { return Styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBar", function() { return ProgressBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Thumb", function() { return Thumb; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var rangeSlider = document.querySelector('.range-slider');

var Form = /*#__PURE__*/function () {
  function Form() {
    var isDouble = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : rangeSlider;

    _classCallCheck(this, Form);

    this.isDouble = isDouble; // boolean

    this.parent = parent; // DOM
  }

  _createClass(Form, [{
    key: "createForm",
    value: function createForm() {
      this.form = document.createElement('div');
      this.form.classList = 'range-slider__form';
      this.parent.append(this.form);
    }
  }, {
    key: "createInput",
    value: function createInput() {
      if (this.isDouble.isDouble) {
        this.defaultInput = document.createElement('input');
        this.defaultInput.type = 'range';
        this.defaultInput.classList = 'range-slider__input range-slider__input_left';
        this.form.append(this.defaultInput);
        this.rightInput = document.createElement('input');
        this.rightInput.type = 'range';
        this.rightInput.classList = 'range-slider__input range-slider__input_right';
        this.form.append(this.rightInput);
      } else {
        this.defaultInput = document.createElement('input');
        this.defaultInput.type = 'range';
        this.defaultInput.classList = 'range-slider__input';
        this.form.append(this.defaultInput);
      }
    }
  }, {
    key: "setInputValue",
    value: function setInputValue(value) {
      var rightValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NaN;
      this.defaultInput.value = +value;

      if (this.isDouble.isDouble) {
        this.rightInput.value = +rightValue;
      }
    }
  }, {
    key: "setMin",
    value: function setMin(min) {
      this.defaultInput.min = +min;

      if (this.isDouble.isDouble) {
        this.rightInput.min = +min;
      }
    }
  }, {
    key: "setMax",
    value: function setMax(max) {
      this.defaultInput.max = +max;

      if (this.isDouble.isDouble) {
        this.rightInput.max = +max;
      }
    }
  }]);

  return Form;
}();

var Styles = /*#__PURE__*/function () {
  function Styles() {
    var isDouble = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : rangeSlider;

    _classCallCheck(this, Styles);

    this.isDouble = isDouble;
    this.parent = parent;
  }

  _createClass(Styles, [{
    key: "createStyles",
    value: function createStyles() {
      this.style = document.createElement('div');
      this.style.classList = 'range-slider__style';
      this.parent.append(this.style);
    }
  }, {
    key: "createTrack",
    value: function createTrack() {
      this.track = document.createElement('div');
      this.track.classList = 'range-slider__track';
      this.style.append(this.track);
    }
  }]);

  return Styles;
}();

var ProgressBar = /*#__PURE__*/function () {
  function ProgressBar() {
    var isDouble = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.querySelector('.range-slider__style');

    _classCallCheck(this, ProgressBar);

    this.isDouble = isDouble;
    this.parent = parent;
  }

  _createClass(ProgressBar, [{
    key: "createProgressBar",
    value: function createProgressBar() {
      this.bar = document.createElement('div');
      this.bar.classList = 'range-slider__progress-bar';
      this.parent.append(this.bar);
    }
  }, {
    key: "calcPercent",
    value: function calcPercent(value, min, max) {
      return (value - min) / (max - min) * 100;
    }
  }, {
    key: "setDefault",
    value: function setDefault(percent) {
      var percentRight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NaN;

      if (!this.isDouble.isDouble) {
        this.bar.style.right = 100 - +percent + '%';
        this.bar.style.left = 0;
      } else {
        this.bar.style.left = +percent + '%';
        this.bar.style.right = 100 - +percentRight + '%';
      }
    }
  }, {
    key: "setRight",
    value: function setRight(percent) {
      if (!this.isDouble.isDouble) {
        this.bar.style.left = +percent + '%';
        this.bar.style.right = 0;
      }
    }
  }]);

  return ProgressBar;
}();

var Thumb = /*#__PURE__*/function () {
  function Thumb() {
    var isDouble = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.querySelector('.range-slider__style');

    _classCallCheck(this, Thumb);

    this.isDouble = isDouble;
    this.parent = parent;
  }

  _createClass(Thumb, [{
    key: "createThumb",
    value: function createThumb() {
      if (this.isDouble.isDouble) {
        this.thumbDefault = document.createElement('div');
        this.thumbDefault.classList = 'range-slider__thumb range-slider__thumb_left';
        this.parent.append(this.thumbDefault);
        this.thumbRight = document.createElement('div');
        this.thumbRight.classList = 'range-slider__thumb range-slider__thumb_right';
        this.parent.append(this.thumbRight);
      } else {
        this.thumbDefault = document.createElement('div');
        this.thumbDefault.className = 'range-slider__thumb';
        this.parent.append(this.thumbDefault);
      }
    }
  }, {
    key: "placeThumb",
    value: function placeThumb(percent) {
      var percentRight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NaN;
      this.thumbDefault.style.left = percent + '%';

      if (this.isDouble.isDouble) {
        this.thumbRight.style.right = 100 - percentRight + '%';
      }
    }
  }]);

  return Thumb;
}();



/***/ }),

/***/ "./main.scss":
/*!*******************!*\
  !*** ./main.scss ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi @babel/polyfill ./index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"../node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./index.js */"./index.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map