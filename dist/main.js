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

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ "./main.scss");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/model */ "./js/model.ts");
/* harmony import */ var _js_subViews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/subViews */ "./js/subViews.ts");
/* harmony import */ var _js_contoller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/contoller */ "./js/contoller.ts");
/* harmony import */ var _js_mainView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/mainView */ "./js/mainView.ts");






/***/ }),

/***/ "./js/contoller.ts":
/*!*************************!*\
  !*** ./js/contoller.ts ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./js/model.ts");
/* harmony import */ var _subViews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subViews */ "./js/subViews.ts");
/* harmony import */ var _mainView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainView */ "./js/mainView.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Controller = /*#__PURE__*/function () {
  function Controller(model, view) {
    var _this = this;

    _classCallCheck(this, Controller);

    _defineProperty(this, "model", void 0);

    _defineProperty(this, "view", void 0);

    _defineProperty(this, "init", function () {
      _this.view.subscribe(_this);

      _this.view.init();

      _this.model.init();
    });

    this.model = model;
    this.view = view;
    this.view.options = this.model.dataForView;
    this.init();
  }

  _createClass(Controller, [{
    key: "updateModel",
    value: function updateModel(option) {
      if (option === 'default') {
        this.model.defaultValue = Number(this.view.form.defaultInput.value);
        console.log("this is ".concat(option, " thing"));
      }

      if (option === 'right') {
        this.model.rightValue = Number(this.view.form.rightInput.value);
      }
    }
  }]);

  return Controller;
}(); // for Each parent


var plugin = new Controller(new _model__WEBPACK_IMPORTED_MODULE_0__["Model"](), new _mainView__WEBPACK_IMPORTED_MODULE_2__["View"](new _subViews__WEBPACK_IMPORTED_MODULE_1__["Form"]({}), new _subViews__WEBPACK_IMPORTED_MODULE_1__["Styles"]({}), new _subViews__WEBPACK_IMPORTED_MODULE_1__["ProgressBar"]({}), new _subViews__WEBPACK_IMPORTED_MODULE_1__["Thumb"]({})));
plugin;

/***/ }),

/***/ "./js/mainView.ts":
/*!************************!*\
  !*** ./js/mainView.ts ***!
  \************************/
/*! exports provided: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var View = /*#__PURE__*/function () {
  function View(form, styles, progressBar, thumb) {
    var _this = this;

    _classCallCheck(this, View);

    _defineProperty(this, "form", void 0);

    _defineProperty(this, "styles", void 0);

    _defineProperty(this, "progressBar", void 0);

    _defineProperty(this, "thumb", void 0);

    _defineProperty(this, "options", void 0);

    _defineProperty(this, "observers", void 0);

    _defineProperty(this, "init", function () {
      _this.form.isDouble = _this.options.isRange;
      _this.styles.isDouble = _this.options.isRange;
      _this.progressBar.isDouble = _this.options.isRange;
      _this.thumb.isDouble = _this.options.isRange;

      _this.form.createForm();

      _this.form.createInput();

      _this.form.setMin(_this.options.min);

      _this.form.setMax(_this.options.max);

      _this.styles.createStyles();

      _this.styles.createTrack();

      _this.progressBar.parent = _this.styles.style;

      _this.progressBar.createProgressBar();

      _this.thumb.parent = _this.styles.style;

      _this.thumb.createThumb();

      _this.setInput();

      _this.eventInput();
    });

    _defineProperty(this, "setInput", function () {
      _this.form.setInputValue(_this.options.defaultValue, _this.options.rightValue);

      var placeDefault = _this.progressBar.calcPercent(Number(_this.form.defaultInput.value), Number(_this.form.defaultInput.min), Number(_this.form.defaultInput.max));

      var placeRight = _this.form.rightInput ? _this.progressBar.calcPercent(Number(_this.form.rightInput.value), Number(_this.form.rightInput.min), Number(_this.form.rightInput.max)) : NaN;

      _this.progressBar.setDefault(placeDefault, placeRight);

      if (_this.options.rightProgressBar) {
        _this.progressBar.setRight(placeDefault);
      }

      _this.thumb.placeThumb(placeDefault, placeRight);
    });

    _defineProperty(this, "eventInput", function () {
      _this.form.defaultInput.addEventListener('input', function () {
        _this.options.defaultValue = Number(_this.form.defaultInput.value);

        _this.setInput();

        _this.observers.forEach(function (observer) {
          observer.updateModel('default');
        });
      });

      _this.form.rightInput.addEventListener('input', function () {
        _this.options.rightValue = Number(_this.form.rightInput.value);

        _this.setInput();

        _this.observers.forEach(function (observer) {
          observer.updateModel('right');
        });
      });
    });

    this.form = form;
    this.styles = styles;
    this.progressBar = progressBar;
    this.thumb = thumb; // this options are only an example, the plugin works with options from the model
    // view gets options from model via controller

    this.options = {
      min: 0,
      max: 100,
      defaultValue: 10,
      rightValue: 50,
      isRange: true,
      rightProgressBar: false
    };
    this.observers = [];
  }

  _createClass(View, [{
    key: "subscribe",
    value: function subscribe(observer) {
      this.observers.push(observer);
    }
  }]);

  return View;
}();



/***/ }),

/***/ "./js/model.ts":
/*!*********************!*\
  !*** ./js/model.ts ***!
  \*********************/
/*! exports provided: Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Model = function Model() {
  _classCallCheck(this, Model);

  _defineProperty(this, "min", void 0);

  _defineProperty(this, "max", void 0);

  _defineProperty(this, "defaultValue", void 0);

  _defineProperty(this, "rightValue", void 0);

  _defineProperty(this, "isRange", void 0);

  _defineProperty(this, "rightProgressBar", void 0);

  _defineProperty(this, "isOutData", void 0);

  _defineProperty(this, "dataForView", void 0);

  _defineProperty(this, "init", function () {
    console.log('from Model');
  });

  this.min = 0;
  this.max = 100;
  this.defaultValue = 10;
  this.rightValue = 50;
  this.isRange = true;
  this.rightProgressBar = true;
  this.isOutData = false;
  this.dataForView = {
    min: this.min,
    max: this.max,
    defaultValue: this.defaultValue,
    rightValue: this.rightValue,
    isRange: this.isRange,
    rightProgressBar: this.rightProgressBar
  };
};



/***/ }),

/***/ "./js/subViews.ts":
/*!************************!*\
  !*** ./js/subViews.ts ***!
  \************************/
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var rangeSlider = document.querySelector('.range-slider'); //querySelectorAll and forEach are needed for independence

var Form = /*#__PURE__*/function () {
  function Form(options) {
    _classCallCheck(this, Form);

    _defineProperty(this, "isDouble", void 0);

    _defineProperty(this, "parent", void 0);

    _defineProperty(this, "form", void 0);

    _defineProperty(this, "defaultInput", void 0);

    _defineProperty(this, "rightInput", void 0);

    this.isDouble = options.isDouble ? options.isDouble : false;
    this.parent = options.parent ? options.parent : rangeSlider;
  }

  _createClass(Form, [{
    key: "createForm",
    value: function createForm() {
      this.form = document.createElement('div');
      this.form.classList.add('range-slider__form');
      this.parent.append(this.form);
    }
  }, {
    key: "createInput",
    value: function createInput() {
      if (this.isDouble) {
        this.defaultInput = document.createElement('input');
        this.defaultInput.type = 'range';
        this.defaultInput.classList.add('range-slider__input');
        this.defaultInput.classList.add('range-slider__input_left');
        this.form.append(this.defaultInput);
        this.rightInput = document.createElement('input');
        this.rightInput.type = 'range';
        this.rightInput.classList.add('range-slider__input');
        this.rightInput.classList.add('range-slider__input_right');
        this.form.append(this.rightInput);
      } else {
        this.defaultInput = document.createElement('input');
        this.defaultInput.type = 'range';
        this.defaultInput.classList.add('range-slider__input');
        this.form.append(this.defaultInput);
      }
    }
  }, {
    key: "setInputValue",
    value: function setInputValue(value) {
      var rightValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NaN;
      this.defaultInput.value = String(value);

      if (this.isDouble) {
        this.rightInput.value = String(rightValue);
      }
    }
  }, {
    key: "setMin",
    value: function setMin() {
      var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this.defaultInput.min = String(min);

      if (this.isDouble) {
        this.rightInput.min = String(min);
      }
    }
  }, {
    key: "setMax",
    value: function setMax() {
      var max = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
      this.defaultInput.max = String(max);

      if (this.isDouble) {
        this.rightInput.max = String(max);
      }
    }
  }]);

  return Form;
}();

var Styles = /*#__PURE__*/function () {
  function Styles(options) {
    _classCallCheck(this, Styles);

    _defineProperty(this, "isDouble", void 0);

    _defineProperty(this, "parent", void 0);

    _defineProperty(this, "style", void 0);

    _defineProperty(this, "track", void 0);

    this.isDouble = options.isDouble ? options.isDouble : false;
    this.parent = options.parent ? options.parent : rangeSlider;
  }

  _createClass(Styles, [{
    key: "createStyles",
    value: function createStyles() {
      this.style = document.createElement('div');
      this.style.classList.add('range-slider__style');
      this.parent.append(this.style);
    }
  }, {
    key: "createTrack",
    value: function createTrack() {
      this.track = document.createElement('div');
      this.track.classList.add('range-slider__track');
      this.style.append(this.track);
    }
  }]);

  return Styles;
}();

var ProgressBar = /*#__PURE__*/function () {
  function ProgressBar(options) {
    _classCallCheck(this, ProgressBar);

    _defineProperty(this, "isDouble", void 0);

    _defineProperty(this, "parent", void 0);

    _defineProperty(this, "bar", void 0);

    this.isDouble = options.isDouble ? options.isDouble : false;
    this.parent = document.querySelector('.range-slider__style');
  }

  _createClass(ProgressBar, [{
    key: "createProgressBar",
    value: function createProgressBar() {
      this.bar = document.createElement('div');
      this.bar.classList.add('range-slider__progress-bar');
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

      if (!this.isDouble) {
        this.bar.style.right = 100 - percent + '%';
        this.bar.style.left = String(0);
      } else {
        this.bar.style.left = percent + '%';
        this.bar.style.right = 100 - percentRight + '%';
      }
    }
  }, {
    key: "setRight",
    value: function setRight(percent) {
      if (!this.isDouble) {
        this.bar.style.left = percent + '%';
        this.bar.style.right = String(0);
      }
    }
  }]);

  return ProgressBar;
}();

var Thumb = /*#__PURE__*/function () {
  function Thumb(options) {
    _classCallCheck(this, Thumb);

    _defineProperty(this, "isDouble", void 0);

    _defineProperty(this, "parent", void 0);

    _defineProperty(this, "thumbDefault", void 0);

    _defineProperty(this, "thumbRight", void 0);

    this.isDouble = options.isDouble ? options.isDouble : false;
    this.parent = document.querySelector('.range-slider__style');
  }

  _createClass(Thumb, [{
    key: "createThumb",
    value: function createThumb() {
      if (this.isDouble) {
        this.thumbDefault = document.createElement('div');
        this.thumbDefault.classList.add('range-slider__thumb');
        this.thumbDefault.classList.add('range-slider__thumb_left');
        this.parent.append(this.thumbDefault);
        this.thumbRight = document.createElement('div');
        this.thumbRight.classList.add('range-slider__thumb');
        this.thumbRight.classList.add('range-slider__thumb_right');
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

      if (this.isDouble) {
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
  !*** multi @babel/polyfill ./index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"../node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./index.ts */"./index.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vanMvY29udG9sbGVyLnRzIiwid2VicGFjazovLy8uL2pzL21haW5WaWV3LnRzIiwid2VicGFjazovLy8uL2pzL21vZGVsLnRzIiwid2VicGFjazovLy8uL2pzL3N1YlZpZXdzLnRzIiwid2VicGFjazovLy8uL21haW4uc2NzcyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwibW9kZWwiLCJ2aWV3Iiwic3Vic2NyaWJlIiwiaW5pdCIsIm9wdGlvbnMiLCJkYXRhRm9yVmlldyIsIm9wdGlvbiIsImRlZmF1bHRWYWx1ZSIsIk51bWJlciIsImZvcm0iLCJkZWZhdWx0SW5wdXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJyaWdodFZhbHVlIiwicmlnaHRJbnB1dCIsInBsdWdpbiIsIk1vZGVsIiwiVmlldyIsIkZvcm0iLCJTdHlsZXMiLCJQcm9ncmVzc0JhciIsIlRodW1iIiwic3R5bGVzIiwicHJvZ3Jlc3NCYXIiLCJ0aHVtYiIsImlzRG91YmxlIiwiaXNSYW5nZSIsImNyZWF0ZUZvcm0iLCJjcmVhdGVJbnB1dCIsInNldE1pbiIsIm1pbiIsInNldE1heCIsIm1heCIsImNyZWF0ZVN0eWxlcyIsImNyZWF0ZVRyYWNrIiwicGFyZW50Iiwic3R5bGUiLCJjcmVhdGVQcm9ncmVzc0JhciIsImNyZWF0ZVRodW1iIiwic2V0SW5wdXQiLCJldmVudElucHV0Iiwic2V0SW5wdXRWYWx1ZSIsInBsYWNlRGVmYXVsdCIsImNhbGNQZXJjZW50IiwicGxhY2VSaWdodCIsIk5hTiIsInNldERlZmF1bHQiLCJyaWdodFByb2dyZXNzQmFyIiwic2V0UmlnaHQiLCJwbGFjZVRodW1iIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9ic2VydmVycyIsImZvckVhY2giLCJvYnNlcnZlciIsInVwZGF0ZU1vZGVsIiwicHVzaCIsImlzT3V0RGF0YSIsInJhbmdlU2xpZGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsInR5cGUiLCJTdHJpbmciLCJ0cmFjayIsImJhciIsInBlcmNlbnQiLCJwZXJjZW50UmlnaHQiLCJyaWdodCIsImxlZnQiLCJ0aHVtYkRlZmF1bHQiLCJ0aHVtYlJpZ2h0IiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFF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QjtBQUNIO0FBQ0o7OzsrQkFDVUosTyxFQUFtRDtBQUFBLFVBQWxDQyxZQUFrQyx1RUFBWHhCLEdBQVc7QUFDMUQsV0FBSzJCLFlBQUwsQ0FBa0JwQyxLQUFsQixDQUF3Qm1DLElBQXhCLEdBQStCSCxPQUFPLEdBQUcsR0FBekM7O0FBQ0EsVUFBSSxLQUFLM0MsUUFBVCxFQUFtQjtBQUNmLGFBQUtnRCxVQUFMLENBQWdCckMsS0FBaEIsQ0FBc0JrQyxLQUF0QixHQUErQixNQUFNRCxZQUFQLEdBQXVCLEdBQXJEO0FBQ0g7QUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSkw7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIlxuXG5pbXBvcnQgJy4vbWFpbi5zY3NzJ1xuXG5pbXBvcnQgJy4vanMvbW9kZWwnXG5pbXBvcnQgJy4vanMvc3ViVmlld3MnXG5pbXBvcnQgJy4vanMvY29udG9sbGVyJ1xuaW1wb3J0ICcuL2pzL21haW5WaWV3J1xuXG4iLCJpbXBvcnQge01vZGVsfSBmcm9tICcuL21vZGVsJ1xuaW1wb3J0IHtGb3JtLCBTdHlsZXMsIFByb2dyZXNzQmFyLCBUaHVtYn0gZnJvbSAnLi9zdWJWaWV3cydcbmltcG9ydCB7Vmlld30gZnJvbSAnLi9tYWluVmlldydcblxuY2xhc3MgQ29udHJvbGxlciB7XG4gICAgbW9kZWw6IE1vZGVsXG4gICAgdmlldzogVmlld1xuICAgIGNvbnN0cnVjdG9yKG1vZGVsOiBNb2RlbCwgdmlldzogVmlldykge1xuICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWxcbiAgICAgICAgdGhpcy52aWV3ID0gdmlld1xuICAgICAgICB0aGlzLnZpZXcub3B0aW9ucyA9IHRoaXMubW9kZWwuZGF0YUZvclZpZXdcbiAgICAgICAgdGhpcy5pbml0KCkgXG4gICAgfVxuICAgIGluaXQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMudmlldy5zdWJzY3JpYmUodGhpcylcbiAgICAgICAgdGhpcy52aWV3LmluaXQoKVxuICAgICAgICB0aGlzLm1vZGVsLmluaXQoKSAgXG4gICAgfVxuICAgIHVwZGF0ZU1vZGVsKG9wdGlvbjogc3RyaW5nKSB7XG4gICAgICAgIGlmIChvcHRpb24gPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5kZWZhdWx0VmFsdWUgPSBOdW1iZXIodGhpcy52aWV3LmZvcm0uZGVmYXVsdElucHV0LnZhbHVlKVxuICAgICAgICAgICAgY29uc29sZS5sb2coYHRoaXMgaXMgJHtvcHRpb259IHRoaW5nYClcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnJpZ2h0VmFsdWUgPSBOdW1iZXIodGhpcy52aWV3LmZvcm0ucmlnaHRJbnB1dC52YWx1ZSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBmb3IgRWFjaCBwYXJlbnRcblxuY29uc3QgcGx1Z2luID0gbmV3IENvbnRyb2xsZXIoXG4gICAgbmV3IE1vZGVsKCksIFxuICAgIG5ldyBWaWV3KFxuICAgICAgICBuZXcgRm9ybSh7fSksIFxuICAgICAgICBuZXcgU3R5bGVzKHt9KSwgXG4gICAgICAgIG5ldyBQcm9ncmVzc0Jhcih7fSksIFxuICAgICAgICBuZXcgVGh1bWIoe30pXG4gICAgKVxuKVxucGx1Z2luIiwiaW1wb3J0IHtGb3JtLCBTdHlsZXMsIFByb2dyZXNzQmFyLCBUaHVtYn0gZnJvbSAnLi9zdWJWaWV3cydcblxuaW50ZXJmYWNlIElEYXRhIHtcbiAgICBtaW46IG51bWJlclxuICAgIG1heDogbnVtYmVyXG4gICAgZGVmYXVsdFZhbHVlOiBudW1iZXJcbiAgICByaWdodFZhbHVlOiBudW1iZXJcbiAgICBpc1JhbmdlOiBib29sZWFuXG4gICAgcmlnaHRQcm9ncmVzc0JhcjogYm9vbGVhblxufVxuaW50ZXJmYWNlIElPYnNlcnZlciB7XG4gICAgdXBkYXRlTW9kZWwoYXJnMDogc3RyaW5nKTogdm9pZFxufVxuXG5jbGFzcyBWaWV3IHtcbiAgICBmb3JtOiBGb3JtXG4gICAgc3R5bGVzOiBTdHlsZXNcbiAgICBwcm9ncmVzc0JhcjogUHJvZ3Jlc3NCYXJcbiAgICB0aHVtYjogVGh1bWJcbiAgICBvcHRpb25zOiBJRGF0YVxuICAgIG9ic2VydmVyczogSU9ic2VydmVyW11cbiAgICBjb25zdHJ1Y3Rvcihmb3JtOiBGb3JtLCBzdHlsZXM6IFN0eWxlcywgcHJvZ3Jlc3NCYXI6IFByb2dyZXNzQmFyLCB0aHVtYjogVGh1bWIpIHtcbiAgICAgICAgdGhpcy5mb3JtID0gZm9ybVxuICAgICAgICB0aGlzLnN0eWxlcyA9IHN0eWxlc1xuICAgICAgICB0aGlzLnByb2dyZXNzQmFyID0gcHJvZ3Jlc3NCYXJcbiAgICAgICAgdGhpcy50aHVtYiA9IHRodW1iXG5cbiAgICAgICAgLy8gdGhpcyBvcHRpb25zIGFyZSBvbmx5IGFuIGV4YW1wbGUsIHRoZSBwbHVnaW4gd29ya3Mgd2l0aCBvcHRpb25zIGZyb20gdGhlIG1vZGVsXG4gICAgICAgIC8vIHZpZXcgZ2V0cyBvcHRpb25zIGZyb20gbW9kZWwgdmlhIGNvbnRyb2xsZXJcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IDEwLFxuICAgICAgICAgICAgcmlnaHRWYWx1ZTogNTAsXG4gICAgICAgICAgICBpc1JhbmdlOiB0cnVlLFxuICAgICAgICAgICAgcmlnaHRQcm9ncmVzc0JhcjogZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW11cbiAgICB9XG4gICAgc3Vic2NyaWJlKG9ic2VydmVyOiBJT2JzZXJ2ZXIpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChvYnNlcnZlcilcbiAgICB9XG4gICAgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgXG5cbiAgICAgICAgdGhpcy5mb3JtLmlzRG91YmxlID0gdGhpcy5vcHRpb25zLmlzUmFuZ2VcbiAgICAgICAgdGhpcy5zdHlsZXMuaXNEb3VibGUgPSB0aGlzLm9wdGlvbnMuaXNSYW5nZVxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLmlzRG91YmxlID0gdGhpcy5vcHRpb25zLmlzUmFuZ2VcbiAgICAgICAgdGhpcy50aHVtYi5pc0RvdWJsZSA9IHRoaXMub3B0aW9ucy5pc1JhbmdlXG5cbiAgICAgICAgdGhpcy5mb3JtLmNyZWF0ZUZvcm0oKVxuICAgICAgICB0aGlzLmZvcm0uY3JlYXRlSW5wdXQoKVxuICAgICAgICB0aGlzLmZvcm0uc2V0TWluKHRoaXMub3B0aW9ucy5taW4pXG4gICAgICAgIHRoaXMuZm9ybS5zZXRNYXgodGhpcy5vcHRpb25zLm1heClcblxuICAgICAgICB0aGlzLnN0eWxlcy5jcmVhdGVTdHlsZXMoKVxuICAgICAgICB0aGlzLnN0eWxlcy5jcmVhdGVUcmFjaygpXG5cbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5wYXJlbnQgPSB0aGlzLnN0eWxlcy5zdHlsZVxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLmNyZWF0ZVByb2dyZXNzQmFyKCkgXG5cbiAgICAgICAgdGhpcy50aHVtYi5wYXJlbnQgPSB0aGlzLnN0eWxlcy5zdHlsZVxuICAgICAgICB0aGlzLnRodW1iLmNyZWF0ZVRodW1iKClcblxuICAgICAgICB0aGlzLnNldElucHV0KClcbiAgICAgICAgdGhpcy5ldmVudElucHV0KClcblxuICAgICAgICBcbiAgICAgICAgXG4gICAgfSAvLyDQvdCw0LTQviDRgNCw0LfQsdC40YLRjCDQv9C+INGB0LDQsdCy0YzRjtGP0LwsINCwINC30LTQtdGB0Ywg0YLQvtC70YzQutC+INC40YUg0LzQtdGC0L7QtNGLINCy0YvQt9GL0LLQsNGC0YxcblxuICAgIHNldElucHV0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmZvcm0uc2V0SW5wdXRWYWx1ZSh0aGlzLm9wdGlvbnMuZGVmYXVsdFZhbHVlLCB0aGlzLm9wdGlvbnMucmlnaHRWYWx1ZSlcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHBsYWNlRGVmYXVsdDogbnVtYmVyID0gdGhpcy5wcm9ncmVzc0Jhci5jYWxjUGVyY2VudChcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQudmFsdWUpLCBcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQubWluKSwgXG4gICAgICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0Lm1heCkpXG4gICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IHBsYWNlUmlnaHQ6IG51bWJlciA9IHRoaXMuZm9ybS5yaWdodElucHV0ID8gXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyLmNhbGNQZXJjZW50KFxuICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0ucmlnaHRJbnB1dC52YWx1ZSksIFxuICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0ucmlnaHRJbnB1dC5taW4pLCBcbiAgICAgICAgICAgICAgICBOdW1iZXIodGhpcy5mb3JtLnJpZ2h0SW5wdXQubWF4KSkgXG4gICAgICAgICAgICAgICAgOiBOYU4gXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5zZXREZWZhdWx0KHBsYWNlRGVmYXVsdCwgcGxhY2VSaWdodClcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmlnaHRQcm9ncmVzc0JhcikgeyBcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuc2V0UmlnaHQocGxhY2VEZWZhdWx0KSBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGh1bWIucGxhY2VUaHVtYihwbGFjZURlZmF1bHQsIHBsYWNlUmlnaHQpXG5cbiAgICAgICAgXG4gICAgfVxuICAgIGV2ZW50SW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZGVmYXVsdFZhbHVlID0gTnVtYmVyKHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQudmFsdWUpXG4gICAgICAgICAgICB0aGlzLnNldElucHV0KClcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLnVwZGF0ZU1vZGVsKCdkZWZhdWx0JylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuZm9ybS5yaWdodElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUgPSBOdW1iZXIodGhpcy5mb3JtLnJpZ2h0SW5wdXQudmFsdWUpXG4gICAgICAgICAgICB0aGlzLnNldElucHV0KClcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLnVwZGF0ZU1vZGVsKCdyaWdodCcpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCB7Vmlld30iLCJpbnRlcmZhY2UgSURhdGEge1xuICAgIG1pbjogbnVtYmVyXG4gICAgbWF4OiBudW1iZXJcbiAgICBkZWZhdWx0VmFsdWU6IG51bWJlclxuICAgIHJpZ2h0VmFsdWU6IG51bWJlclxuICAgIGlzUmFuZ2U6IGJvb2xlYW5cbiAgICByaWdodFByb2dyZXNzQmFyOiBib29sZWFuXG59XG5cbmNsYXNzIE1vZGVsIHtcbiAgICBtaW46IG51bWJlclxuICAgIG1heDogbnVtYmVyXG4gICAgZGVmYXVsdFZhbHVlOiBudW1iZXJcbiAgICByaWdodFZhbHVlPzogbnVtYmVyXG4gICAgaXNSYW5nZTogYm9vbGVhblxuICAgIHJpZ2h0UHJvZ3Jlc3NCYXI/OiBib29sZWFuXG4gICAgaXNPdXREYXRhPzogYm9vbGVhblxuICAgIGRhdGFGb3JWaWV3OiBJRGF0YVxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1pbiA9IDBcbiAgICAgICAgdGhpcy5tYXggPSAxMDBcbiAgICAgICAgdGhpcy5kZWZhdWx0VmFsdWUgPSAxMFxuICAgICAgICB0aGlzLnJpZ2h0VmFsdWUgPSA1MFxuICAgICAgICB0aGlzLmlzUmFuZ2UgPSB0cnVlXG4gICAgICAgIHRoaXMucmlnaHRQcm9ncmVzc0JhciA9IHRydWVcbiAgICAgICAgdGhpcy5pc091dERhdGEgPSBmYWxzZVxuICAgICAgICB0aGlzLmRhdGFGb3JWaWV3ID0ge1xuICAgICAgICAgICAgbWluOiB0aGlzLm1pbixcbiAgICAgICAgICAgIG1heDogdGhpcy5tYXgsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IHRoaXMuZGVmYXVsdFZhbHVlLFxuICAgICAgICAgICAgcmlnaHRWYWx1ZTogdGhpcy5yaWdodFZhbHVlLFxuICAgICAgICAgICAgaXNSYW5nZTogdGhpcy5pc1JhbmdlLFxuICAgICAgICAgICAgcmlnaHRQcm9ncmVzc0JhcjogdGhpcy5yaWdodFByb2dyZXNzQmFyXG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Zyb20gTW9kZWwnKVxuICAgIH1cbn1cblxuZXhwb3J0IHtNb2RlbH0iLCJjb25zdCByYW5nZVNsaWRlcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZ2Utc2xpZGVyJykgYXMgSFRNTERpdkVsZW1lbnRcbi8vcXVlcnlTZWxlY3RvckFsbCBhbmQgZm9yRWFjaCBhcmUgbmVlZGVkIGZvciBpbmRlcGVuZGVuY2VcblxuXG5cbmludGVyZmFjZSBJT3B0aW9ucyB7XG4gICAgaXNEb3VibGU/OiBib29sZWFuXG4gICAgcGFyZW50PzogSFRNTERpdkVsZW1lbnRcbn1cblxuY2xhc3MgRm9ybSB7XG4gICAgXG4gICAgaXNEb3VibGU6IGJvb2xlYW5cbiAgICBwYXJlbnQ6IEhUTUxEaXZFbGVtZW50XG4gICAgZm9ybSE6IEhUTUxEaXZFbGVtZW50XG4gICAgZGVmYXVsdElucHV0ITogSFRNTElucHV0RWxlbWVudFxuICAgIHJpZ2h0SW5wdXQhOiBIVE1MSW5wdXRFbGVtZW50XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJT3B0aW9ucykge1xuICAgICAgICB0aGlzLmlzRG91YmxlID0gb3B0aW9ucy5pc0RvdWJsZSA/IG9wdGlvbnMuaXNEb3VibGUgOiBmYWxzZVxuICAgICAgICB0aGlzLnBhcmVudCA9IG9wdGlvbnMucGFyZW50ID8gb3B0aW9ucy5wYXJlbnQgOiByYW5nZVNsaWRlclxuICAgIH1cbiAgICBcbiAgICBjcmVhdGVGb3JtKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZvcm0gPSA8SFRNTERpdkVsZW1lbnQ+KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKVxuICAgICAgICB0aGlzLmZvcm0uY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19mb3JtJylcbiAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kKHRoaXMuZm9ybSlcbiAgICB9XG4gICAgXG4gICAgY3JlYXRlSW5wdXQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0LnR5cGUgPSAncmFuZ2UnXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0JykgXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0X2xlZnQnKVxuICAgICAgICAgICAgdGhpcy5mb3JtLmFwcGVuZCh0aGlzLmRlZmF1bHRJbnB1dClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0LnR5cGUgPSAncmFuZ2UnXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19pbnB1dCcpXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19pbnB1dF9yaWdodCcpXG4gICAgICAgICAgICB0aGlzLmZvcm0uYXBwZW5kKHRoaXMucmlnaHRJbnB1dClcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC50eXBlID0gJ3JhbmdlJ1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19pbnB1dCcpXG4gICAgICAgICAgICB0aGlzLmZvcm0uYXBwZW5kKHRoaXMuZGVmYXVsdElucHV0KVxuICAgICAgICB9XG4gICAgfVxuICAgIHNldElucHV0VmFsdWUodmFsdWU6IG51bWJlciwgcmlnaHRWYWx1ZTogbnVtYmVyID0gTmFOKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVmYXVsdElucHV0LnZhbHVlID0gU3RyaW5nKHZhbHVlKVxuICAgICAgICBpZiAodGhpcy5pc0RvdWJsZSkgeyAgIFxuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0LnZhbHVlID0gU3RyaW5nKHJpZ2h0VmFsdWUpXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0TWluKG1pbjogbnVtYmVyID0gMCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC5taW4gPSBTdHJpbmcobWluKVxuICAgICAgICBpZiAodGhpcy5pc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0Lm1pbiA9IFN0cmluZyhtaW4pXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0TWF4KG1heDogbnVtYmVyID0gMTAwKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVmYXVsdElucHV0Lm1heCA9IFN0cmluZyhtYXgpXG4gICAgICAgIGlmICh0aGlzLmlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQubWF4ID0gU3RyaW5nKG1heClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgU3R5bGVzIHtcbiAgICBpc0RvdWJsZTogYm9vbGVhblxuICAgIHBhcmVudDogSFRNTERpdkVsZW1lbnRcbiAgICBzdHlsZSE6IEhUTUxEaXZFbGVtZW50XG4gICAgdHJhY2shOiBIVE1MRGl2RWxlbWVudFxuXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogSU9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5pc0RvdWJsZSA9IG9wdGlvbnMuaXNEb3VibGUgPyBvcHRpb25zLmlzRG91YmxlIDogZmFsc2VcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBvcHRpb25zLnBhcmVudCA/IG9wdGlvbnMucGFyZW50IDogcmFuZ2VTbGlkZXJcbiAgICB9XG4gICAgXG4gICAgY3JlYXRlU3R5bGVzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGhpcy5zdHlsZS5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3N0eWxlJylcbiAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kKHRoaXMuc3R5bGUpXG4gICAgfVxuICAgIFxuICAgIGNyZWF0ZVRyYWNrKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRyYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGhpcy50cmFjay5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3RyYWNrJylcbiAgICAgICAgdGhpcy5zdHlsZS5hcHBlbmQodGhpcy50cmFjaylcbiAgICB9XG59XG5cbmNsYXNzIFByb2dyZXNzQmFyIHtcbiAgICBpc0RvdWJsZTogYm9vbGVhblxuICAgIHBhcmVudDogSFRNTERpdkVsZW1lbnRcbiAgICBiYXIhOiBIVE1MRGl2RWxlbWVudFxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElPcHRpb25zKSB7XG4gICAgICAgIHRoaXMuaXNEb3VibGUgPSBvcHRpb25zLmlzRG91YmxlID8gb3B0aW9ucy5pc0RvdWJsZSA6IGZhbHNlXG4gICAgICAgIHRoaXMucGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmdlLXNsaWRlcl9fc3R5bGUnKSBhcyBIVE1MRGl2RWxlbWVudFxuICAgIH1cbiAgICBjcmVhdGVQcm9ncmVzc0JhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5iYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0aGlzLmJhci5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3Byb2dyZXNzLWJhcicpXG4gICAgICAgIHRoaXMucGFyZW50LmFwcGVuZCh0aGlzLmJhcilcbiAgICB9XG4gICAgY2FsY1BlcmNlbnQodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuICgodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbikpICogMTAwXG4gICAgfVxuICAgIHNldERlZmF1bHQocGVyY2VudDogbnVtYmVyLCBwZXJjZW50UmlnaHQ6IG51bWJlciA9IE5hTik6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLnJpZ2h0ID0gKDEwMCAtIHBlcmNlbnQpICsgJyUnXG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5sZWZ0ID0gU3RyaW5nKDApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5sZWZ0ID0gcGVyY2VudCArICclJ1xuICAgICAgICAgICAgdGhpcy5iYXIuc3R5bGUucmlnaHQgPSAoMTAwIC0gcGVyY2VudFJpZ2h0KSArICclJ1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldFJpZ2h0KHBlcmNlbnQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLmxlZnQgPSBwZXJjZW50ICsgJyUnXG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5yaWdodCA9IFN0cmluZygwKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBUaHVtYiB7XG4gICAgaXNEb3VibGU6IGJvb2xlYW5cbiAgICBwYXJlbnQ6IEhUTUxEaXZFbGVtZW50XG4gICAgdGh1bWJEZWZhdWx0ITogSFRNTERpdkVsZW1lbnRcbiAgICB0aHVtYlJpZ2h0ITogSFRNTERpdkVsZW1lbnRcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElPcHRpb25zKSB7XG4gICAgICAgIHRoaXMuaXNEb3VibGUgPSBvcHRpb25zLmlzRG91YmxlID8gb3B0aW9ucy5pc0RvdWJsZSA6IGZhbHNlXG4gICAgICAgIHRoaXMucGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmdlLXNsaWRlcl9fc3R5bGUnKSBhcyBIVE1MRGl2RWxlbWVudFxuICAgIH1cbiAgICBjcmVhdGVUaHVtYigpIHtcbiAgICAgICAgaWYodGhpcy5pc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYicpXG4gICAgICAgICAgICB0aGlzLnRodW1iRGVmYXVsdC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3RodW1iX2xlZnQnKVxuICAgICAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kKHRoaXMudGh1bWJEZWZhdWx0KVxuXG4gICAgICAgICAgICB0aGlzLnRodW1iUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdGhpcy50aHVtYlJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdGh1bWInKVxuICAgICAgICAgICAgdGhpcy50aHVtYlJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdGh1bWJfcmlnaHQnKVxuICAgICAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kKHRoaXMudGh1bWJSaWdodClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGh1bWJEZWZhdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHRoaXMudGh1bWJEZWZhdWx0LmNsYXNzTmFtZSA9ICdyYW5nZS1zbGlkZXJfX3RodW1iJ1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kKHRoaXMudGh1bWJEZWZhdWx0KVxuICAgICAgICB9XG4gICAgfVxuICAgIHBsYWNlVGh1bWIocGVyY2VudDogbnVtYmVyLCBwZXJjZW50UmlnaHQ6IG51bWJlciA9IE5hTik6IHZvaWQge1xuICAgICAgICB0aGlzLnRodW1iRGVmYXVsdC5zdHlsZS5sZWZ0ID0gcGVyY2VudCArICclJ1xuICAgICAgICBpZiAodGhpcy5pc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy50aHVtYlJpZ2h0LnN0eWxlLnJpZ2h0ID0gKDEwMCAtIHBlcmNlbnRSaWdodCkgKyAnJSdcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHtGb3JtLCBTdHlsZXMsIFByb2dyZXNzQmFyLCBUaHVtYn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MDA2Mjg3Nzg3MzlcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL2hvbWUveGVuYS9SYW5nZS1zbGlkZXIvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInJlbG9hZEFsbFwiOnRydWUsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9