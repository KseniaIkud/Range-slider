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
    key: "update",
    value: function update(option) {
      if (option === 'default') {
        this.model.defaultValue = Number(this.view.form.defaultInput.value);
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
          observer.update('default');
        });
      });

      _this.form.rightInput.addEventListener('input', function () {
        _this.options.rightValue = Number(_this.form.rightInput.value);

        _this.setInput();

        _this.observers.forEach(function (observer) {
          observer.update('default');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vanMvY29udG9sbGVyLnRzIiwid2VicGFjazovLy8uL2pzL21haW5WaWV3LnRzIiwid2VicGFjazovLy8uL2pzL21vZGVsLnRzIiwid2VicGFjazovLy8uL2pzL3N1YlZpZXdzLnRzIiwid2VicGFjazovLy8uL21haW4uc2NzcyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwibW9kZWwiLCJ2aWV3Iiwic3Vic2NyaWJlIiwiaW5pdCIsIm9wdGlvbnMiLCJkYXRhRm9yVmlldyIsIm9wdGlvbiIsImRlZmF1bHRWYWx1ZSIsIk51bWJlciIsImZvcm0iLCJkZWZhdWx0SW5wdXQiLCJ2YWx1ZSIsInJpZ2h0VmFsdWUiLCJyaWdodElucHV0IiwicGx1Z2luIiwiTW9kZWwiLCJWaWV3IiwiRm9ybSIsIlN0eWxlcyIsIlByb2dyZXNzQmFyIiwiVGh1bWIiLCJzdHlsZXMiLCJwcm9ncmVzc0JhciIsInRodW1iIiwiaXNEb3VibGUiLCJpc1JhbmdlIiwiY3JlYXRlRm9ybSIsImNyZWF0ZUlucHV0Iiwic2V0TWluIiwibWluIiwic2V0TWF4IiwibWF4IiwiY3JlYXRlU3R5bGVzIiwiY3JlYXRlVHJhY2siLCJwYXJlbnQiLCJzdHlsZSIsImNyZWF0ZVByb2dyZXNzQmFyIiwiY3JlYXRlVGh1bWIiLCJzZXRJbnB1dCIsImV2ZW50SW5wdXQiLCJzZXRJbnB1dFZhbHVlIiwicGxhY2VEZWZhdWx0IiwiY2FsY1BlcmNlbnQiLCJwbGFjZVJpZ2h0IiwiTmFOIiwic2V0RGVmYXVsdCIsInJpZ2h0UHJvZ3Jlc3NCYXIiLCJzZXRSaWdodCIsInBsYWNlVGh1bWIiLCJhZGRFdmVudExpc3RlbmVyIiwib2JzZXJ2ZXJzIiwiZm9yRWFjaCIsIm9ic2VydmVyIiwidXBkYXRlIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJpc091dERhdGEiLCJyYW5nZVNsaWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmQiLCJ0eXBlIiwiU3RyaW5nIiwidHJhY2siLCJiYXIiLCJwZXJjZW50IiwicGVyY2VudFJpZ2h0IiwicmlnaHQiLCJsZWZ0IiwidGh1bWJEZWZhdWx0IiwidGh1bWJSaWdodCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2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dUVBQVgxQixHQUFXO0FBQzFELFdBQUs2QixZQUFMLENBQWtCdEMsS0FBbEIsQ0FBd0JxQyxJQUF4QixHQUErQkgsT0FBTyxHQUFHLEdBQXpDOztBQUNBLFVBQUksS0FBSzdDLFFBQVQsRUFBbUI7QUFDZixhQUFLa0QsVUFBTCxDQUFnQnZDLEtBQWhCLENBQXNCb0MsS0FBdEIsR0FBK0IsTUFBTUQsWUFBUCxHQUF1QixHQUFyRDtBQUNIO0FBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0pMO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJcblxuaW1wb3J0ICcuL21haW4uc2NzcydcblxuaW1wb3J0ICcuL2pzL21vZGVsJ1xuaW1wb3J0ICcuL2pzL3N1YlZpZXdzJ1xuaW1wb3J0ICcuL2pzL2NvbnRvbGxlcidcbmltcG9ydCAnLi9qcy9tYWluVmlldydcblxuIiwiaW1wb3J0IHtNb2RlbH0gZnJvbSAnLi9tb2RlbCdcbmltcG9ydCB7Rm9ybSwgU3R5bGVzLCBQcm9ncmVzc0JhciwgVGh1bWJ9IGZyb20gJy4vc3ViVmlld3MnXG5pbXBvcnQge1ZpZXd9IGZyb20gJy4vbWFpblZpZXcnXG5cbmNsYXNzIENvbnRyb2xsZXIge1xuICAgIG1vZGVsOiBNb2RlbFxuICAgIHZpZXc6IFZpZXdcbiAgICBjb25zdHJ1Y3Rvcihtb2RlbDogTW9kZWwsIHZpZXc6IFZpZXcpIHtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsXG4gICAgICAgIHRoaXMudmlldyA9IHZpZXdcbiAgICAgICAgdGhpcy52aWV3Lm9wdGlvbnMgPSB0aGlzLm1vZGVsLmRhdGFGb3JWaWV3XG4gICAgICAgIHRoaXMuaW5pdCgpIFxuICAgIH1cbiAgICBpbml0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnZpZXcuc3Vic2NyaWJlKHRoaXMpXG4gICAgICAgIHRoaXMudmlldy5pbml0KClcbiAgICAgICAgdGhpcy5tb2RlbC5pbml0KCkgIFxuICAgIH1cbiAgICB1cGRhdGUob3B0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKG9wdGlvbiA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmRlZmF1bHRWYWx1ZSA9IE51bWJlcih0aGlzLnZpZXcuZm9ybS5kZWZhdWx0SW5wdXQudmFsdWUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5yaWdodFZhbHVlID0gTnVtYmVyKHRoaXMudmlldy5mb3JtLnJpZ2h0SW5wdXQudmFsdWUpXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gZm9yIEVhY2ggcGFyZW50XG5cbmNvbnN0IHBsdWdpbiA9IG5ldyBDb250cm9sbGVyKFxuICAgIG5ldyBNb2RlbCgpLCBcbiAgICBuZXcgVmlldyhcbiAgICAgICAgbmV3IEZvcm0oe30pLCBcbiAgICAgICAgbmV3IFN0eWxlcyh7fSksIFxuICAgICAgICBuZXcgUHJvZ3Jlc3NCYXIoe30pLCBcbiAgICAgICAgbmV3IFRodW1iKHt9KVxuICAgIClcbilcbnBsdWdpbiIsImltcG9ydCB7Rm9ybSwgU3R5bGVzLCBQcm9ncmVzc0JhciwgVGh1bWJ9IGZyb20gJy4vc3ViVmlld3MnXG5cbmludGVyZmFjZSBJRGF0YSB7XG4gICAgbWluOiBudW1iZXJcbiAgICBtYXg6IG51bWJlclxuICAgIGRlZmF1bHRWYWx1ZTogbnVtYmVyXG4gICAgcmlnaHRWYWx1ZTogbnVtYmVyXG4gICAgaXNSYW5nZTogYm9vbGVhblxuICAgIHJpZ2h0UHJvZ3Jlc3NCYXI6IGJvb2xlYW5cbn1cbmludGVyZmFjZSBJT2JzZXJ2ZXIge1xuICAgIHVwZGF0ZShhcmcwOiBzdHJpbmcpOiB2b2lkXG59XG5cbmNsYXNzIFZpZXcge1xuICAgIGZvcm06IEZvcm1cbiAgICBzdHlsZXM6IFN0eWxlc1xuICAgIHByb2dyZXNzQmFyOiBQcm9ncmVzc0JhclxuICAgIHRodW1iOiBUaHVtYlxuICAgIG9wdGlvbnM6IElEYXRhXG4gICAgb2JzZXJ2ZXJzOiBJT2JzZXJ2ZXJbXVxuICAgIGNvbnN0cnVjdG9yKGZvcm06IEZvcm0sIHN0eWxlczogU3R5bGVzLCBwcm9ncmVzc0JhcjogUHJvZ3Jlc3NCYXIsIHRodW1iOiBUaHVtYikge1xuICAgICAgICB0aGlzLmZvcm0gPSBmb3JtXG4gICAgICAgIHRoaXMuc3R5bGVzID0gc3R5bGVzXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSBwcm9ncmVzc0JhclxuICAgICAgICB0aGlzLnRodW1iID0gdGh1bWJcblxuICAgICAgICAvLyB0aGlzIG9wdGlvbnMgYXJlIG9ubHkgYW4gZXhhbXBsZSwgdGhlIHBsdWdpbiB3b3JrcyB3aXRoIG9wdGlvbnMgZnJvbSB0aGUgbW9kZWxcbiAgICAgICAgLy8gdmlldyBnZXRzIG9wdGlvbnMgZnJvbSBtb2RlbCB2aWEgY29udHJvbGxlclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogMTAsXG4gICAgICAgICAgICByaWdodFZhbHVlOiA1MCxcbiAgICAgICAgICAgIGlzUmFuZ2U6IHRydWUsXG4gICAgICAgICAgICByaWdodFByb2dyZXNzQmFyOiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXVxuICAgIH1cbiAgICBzdWJzY3JpYmUob2JzZXJ2ZXI6IElPYnNlcnZlcikge1xuICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKVxuICAgIH1cbiAgICBpbml0ID0gKCkgPT4ge1xuICAgICAgICBcblxuICAgICAgICB0aGlzLmZvcm0uaXNEb3VibGUgPSB0aGlzLm9wdGlvbnMuaXNSYW5nZVxuICAgICAgICB0aGlzLnN0eWxlcy5pc0RvdWJsZSA9IHRoaXMub3B0aW9ucy5pc1JhbmdlXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuaXNEb3VibGUgPSB0aGlzLm9wdGlvbnMuaXNSYW5nZVxuICAgICAgICB0aGlzLnRodW1iLmlzRG91YmxlID0gdGhpcy5vcHRpb25zLmlzUmFuZ2VcblxuICAgICAgICB0aGlzLmZvcm0uY3JlYXRlRm9ybSgpXG4gICAgICAgIHRoaXMuZm9ybS5jcmVhdGVJbnB1dCgpXG4gICAgICAgIHRoaXMuZm9ybS5zZXRNaW4odGhpcy5vcHRpb25zLm1pbilcbiAgICAgICAgdGhpcy5mb3JtLnNldE1heCh0aGlzLm9wdGlvbnMubWF4KVxuXG4gICAgICAgIHRoaXMuc3R5bGVzLmNyZWF0ZVN0eWxlcygpXG4gICAgICAgIHRoaXMuc3R5bGVzLmNyZWF0ZVRyYWNrKClcblxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnBhcmVudCA9IHRoaXMuc3R5bGVzLnN0eWxlXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuY3JlYXRlUHJvZ3Jlc3NCYXIoKSBcblxuICAgICAgICB0aGlzLnRodW1iLnBhcmVudCA9IHRoaXMuc3R5bGVzLnN0eWxlXG4gICAgICAgIHRoaXMudGh1bWIuY3JlYXRlVGh1bWIoKVxuXG4gICAgICAgIHRoaXMuc2V0SW5wdXQoKVxuICAgICAgICB0aGlzLmV2ZW50SW5wdXQoKVxuXG4gICAgICAgIFxuICAgICAgICBcbiAgICB9IC8vINC90LDQtNC+INGA0LDQt9Cx0LjRgtGMINC/0L4g0YHQsNCx0LLRjNGO0Y/QvCwg0LAg0LfQtNC10YHRjCDRgtC+0LvRjNC60L4g0LjRhSDQvNC10YLQvtC00Ysg0LLRi9C30YvQstCw0YLRjFxuXG4gICAgc2V0SW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuZm9ybS5zZXRJbnB1dFZhbHVlKHRoaXMub3B0aW9ucy5kZWZhdWx0VmFsdWUsIHRoaXMub3B0aW9ucy5yaWdodFZhbHVlKVxuICAgICAgICBcbiAgICAgICAgY29uc3QgcGxhY2VEZWZhdWx0OiBudW1iZXIgPSB0aGlzLnByb2dyZXNzQmFyLmNhbGNQZXJjZW50KFxuICAgICAgICAgICAgICAgICAgICBOdW1iZXIodGhpcy5mb3JtLmRlZmF1bHRJbnB1dC52YWx1ZSksIFxuICAgICAgICAgICAgICAgICAgICBOdW1iZXIodGhpcy5mb3JtLmRlZmF1bHRJbnB1dC5taW4pLCBcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQubWF4KSlcbiAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgY29uc3QgcGxhY2VSaWdodDogbnVtYmVyID0gdGhpcy5mb3JtLnJpZ2h0SW5wdXQgPyBcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuY2FsY1BlcmNlbnQoXG4gICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5yaWdodElucHV0LnZhbHVlKSwgXG4gICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5yaWdodElucHV0Lm1pbiksIFxuICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0ucmlnaHRJbnB1dC5tYXgpKSBcbiAgICAgICAgICAgICAgICA6IE5hTiBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnNldERlZmF1bHQocGxhY2VEZWZhdWx0LCBwbGFjZVJpZ2h0KVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yaWdodFByb2dyZXNzQmFyKSB7IFxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5zZXRSaWdodChwbGFjZURlZmF1bHQpIFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50aHVtYi5wbGFjZVRodW1iKHBsYWNlRGVmYXVsdCwgcGxhY2VSaWdodClcblxuICAgICAgICBcbiAgICB9XG4gICAgZXZlbnRJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5mb3JtLmRlZmF1bHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kZWZhdWx0VmFsdWUgPSBOdW1iZXIodGhpcy5mb3JtLmRlZmF1bHRJbnB1dC52YWx1ZSlcbiAgICAgICAgICAgIHRoaXMuc2V0SW5wdXQoKVxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIudXBkYXRlKCdkZWZhdWx0JylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuZm9ybS5yaWdodElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUgPSBOdW1iZXIodGhpcy5mb3JtLnJpZ2h0SW5wdXQudmFsdWUpXG4gICAgICAgICAgICB0aGlzLnNldElucHV0KClcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLnVwZGF0ZSgnZGVmYXVsdCcpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCB7Vmlld30iLCJpbnRlcmZhY2UgSURhdGEge1xuICAgIG1pbjogbnVtYmVyXG4gICAgbWF4OiBudW1iZXJcbiAgICBkZWZhdWx0VmFsdWU6IG51bWJlclxuICAgIHJpZ2h0VmFsdWU6IG51bWJlclxuICAgIGlzUmFuZ2U6IGJvb2xlYW5cbiAgICByaWdodFByb2dyZXNzQmFyOiBib29sZWFuXG59XG5cbmNsYXNzIE1vZGVsIHtcbiAgICBtaW46IG51bWJlclxuICAgIG1heDogbnVtYmVyXG4gICAgZGVmYXVsdFZhbHVlOiBudW1iZXJcbiAgICByaWdodFZhbHVlPzogbnVtYmVyXG4gICAgaXNSYW5nZTogYm9vbGVhblxuICAgIHJpZ2h0UHJvZ3Jlc3NCYXI/OiBib29sZWFuXG4gICAgaXNPdXREYXRhPzogYm9vbGVhblxuICAgIGRhdGFGb3JWaWV3OiBJRGF0YVxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1pbiA9IDBcbiAgICAgICAgdGhpcy5tYXggPSAxMDBcbiAgICAgICAgdGhpcy5kZWZhdWx0VmFsdWUgPSAxMFxuICAgICAgICB0aGlzLnJpZ2h0VmFsdWUgPSA1MFxuICAgICAgICB0aGlzLmlzUmFuZ2UgPSB0cnVlXG4gICAgICAgIHRoaXMucmlnaHRQcm9ncmVzc0JhciA9IHRydWVcbiAgICAgICAgdGhpcy5pc091dERhdGEgPSBmYWxzZVxuICAgICAgICB0aGlzLmRhdGFGb3JWaWV3ID0ge1xuICAgICAgICAgICAgbWluOiB0aGlzLm1pbixcbiAgICAgICAgICAgIG1heDogdGhpcy5tYXgsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IHRoaXMuZGVmYXVsdFZhbHVlLFxuICAgICAgICAgICAgcmlnaHRWYWx1ZTogdGhpcy5yaWdodFZhbHVlLFxuICAgICAgICAgICAgaXNSYW5nZTogdGhpcy5pc1JhbmdlLFxuICAgICAgICAgICAgcmlnaHRQcm9ncmVzc0JhcjogdGhpcy5yaWdodFByb2dyZXNzQmFyXG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Zyb20gTW9kZWwnKVxuICAgIH1cbn1cblxuZXhwb3J0IHtNb2RlbH0iLCJjb25zdCByYW5nZVNsaWRlcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZ2Utc2xpZGVyJykgYXMgSFRNTERpdkVsZW1lbnRcbi8vcXVlcnlTZWxlY3RvckFsbCBhbmQgZm9yRWFjaCBhcmUgbmVlZGVkIGZvciBpbmRlcGVuZGVuY2VcblxuXG5cbmludGVyZmFjZSBJT3B0aW9ucyB7XG4gICAgaXNEb3VibGU/OiBib29sZWFuXG4gICAgcGFyZW50PzogSFRNTERpdkVsZW1lbnRcbn1cblxuY2xhc3MgRm9ybSB7XG4gICAgXG4gICAgaXNEb3VibGU6IGJvb2xlYW5cbiAgICBwYXJlbnQ6IEhUTUxEaXZFbGVtZW50XG4gICAgZm9ybSE6IEhUTUxEaXZFbGVtZW50XG4gICAgZGVmYXVsdElucHV0ITogSFRNTElucHV0RWxlbWVudFxuICAgIHJpZ2h0SW5wdXQhOiBIVE1MSW5wdXRFbGVtZW50XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJT3B0aW9ucykge1xuICAgICAgICB0aGlzLmlzRG91YmxlID0gb3B0aW9ucy5pc0RvdWJsZSA/IG9wdGlvbnMuaXNEb3VibGUgOiBmYWxzZVxuICAgICAgICB0aGlzLnBhcmVudCA9IG9wdGlvbnMucGFyZW50ID8gb3B0aW9ucy5wYXJlbnQgOiByYW5nZVNsaWRlclxuICAgIH1cbiAgICBcbiAgICBjcmVhdGVGb3JtKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZvcm0gPSA8SFRNTERpdkVsZW1lbnQ+KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKVxuICAgICAgICB0aGlzLmZvcm0uY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19mb3JtJylcbiAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kKHRoaXMuZm9ybSlcbiAgICB9XG4gICAgXG4gICAgY3JlYXRlSW5wdXQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0LnR5cGUgPSAncmFuZ2UnXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0JykgXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0X2xlZnQnKVxuICAgICAgICAgICAgdGhpcy5mb3JtLmFwcGVuZCh0aGlzLmRlZmF1bHRJbnB1dClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0LnR5cGUgPSAncmFuZ2UnXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19pbnB1dCcpXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19pbnB1dF9yaWdodCcpXG4gICAgICAgICAgICB0aGlzLmZvcm0uYXBwZW5kKHRoaXMucmlnaHRJbnB1dClcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC50eXBlID0gJ3JhbmdlJ1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19pbnB1dCcpXG4gICAgICAgICAgICB0aGlzLmZvcm0uYXBwZW5kKHRoaXMuZGVmYXVsdElucHV0KVxuICAgICAgICB9XG4gICAgfVxuICAgIHNldElucHV0VmFsdWUodmFsdWU6IG51bWJlciwgcmlnaHRWYWx1ZTogbnVtYmVyID0gTmFOKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVmYXVsdElucHV0LnZhbHVlID0gU3RyaW5nKHZhbHVlKVxuICAgICAgICBpZiAodGhpcy5pc0RvdWJsZSkgeyAgIFxuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0LnZhbHVlID0gU3RyaW5nKHJpZ2h0VmFsdWUpXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0TWluKG1pbjogbnVtYmVyID0gMCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC5taW4gPSBTdHJpbmcobWluKVxuICAgICAgICBpZiAodGhpcy5pc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0Lm1pbiA9IFN0cmluZyhtaW4pXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0TWF4KG1heDogbnVtYmVyID0gMTAwKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVmYXVsdElucHV0Lm1heCA9IFN0cmluZyhtYXgpXG4gICAgICAgIGlmICh0aGlzLmlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQubWF4ID0gU3RyaW5nKG1heClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgU3R5bGVzIHtcbiAgICBpc0RvdWJsZTogYm9vbGVhblxuICAgIHBhcmVudDogSFRNTERpdkVsZW1lbnRcbiAgICBzdHlsZSE6IEhUTUxEaXZFbGVtZW50XG4gICAgdHJhY2shOiBIVE1MRGl2RWxlbWVudFxuXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogSU9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5pc0RvdWJsZSA9IG9wdGlvbnMuaXNEb3VibGUgPyBvcHRpb25zLmlzRG91YmxlIDogZmFsc2VcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBvcHRpb25zLnBhcmVudCA/IG9wdGlvbnMucGFyZW50IDogcmFuZ2VTbGlkZXJcbiAgICB9XG4gICAgXG4gICAgY3JlYXRlU3R5bGVzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGhpcy5zdHlsZS5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3N0eWxlJylcbiAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kKHRoaXMuc3R5bGUpXG4gICAgfVxuICAgIFxuICAgIGNyZWF0ZVRyYWNrKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRyYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGhpcy50cmFjay5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3RyYWNrJylcbiAgICAgICAgdGhpcy5zdHlsZS5hcHBlbmQodGhpcy50cmFjaylcbiAgICB9XG59XG5cbmNsYXNzIFByb2dyZXNzQmFyIHtcbiAgICBpc0RvdWJsZTogYm9vbGVhblxuICAgIHBhcmVudDogSFRNTERpdkVsZW1lbnRcbiAgICBiYXIhOiBIVE1MRGl2RWxlbWVudFxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElPcHRpb25zKSB7XG4gICAgICAgIHRoaXMuaXNEb3VibGUgPSBvcHRpb25zLmlzRG91YmxlID8gb3B0aW9ucy5pc0RvdWJsZSA6IGZhbHNlXG4gICAgICAgIHRoaXMucGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmdlLXNsaWRlcl9fc3R5bGUnKSBhcyBIVE1MRGl2RWxlbWVudFxuICAgIH1cbiAgICBjcmVhdGVQcm9ncmVzc0JhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5iYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0aGlzLmJhci5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3Byb2dyZXNzLWJhcicpXG4gICAgICAgIHRoaXMucGFyZW50LmFwcGVuZCh0aGlzLmJhcilcbiAgICB9XG4gICAgY2FsY1BlcmNlbnQodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuICgodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbikpICogMTAwXG4gICAgfVxuICAgIHNldERlZmF1bHQocGVyY2VudDogbnVtYmVyLCBwZXJjZW50UmlnaHQ6IG51bWJlciA9IE5hTik6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLnJpZ2h0ID0gKDEwMCAtIHBlcmNlbnQpICsgJyUnXG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5sZWZ0ID0gU3RyaW5nKDApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5sZWZ0ID0gcGVyY2VudCArICclJ1xuICAgICAgICAgICAgdGhpcy5iYXIuc3R5bGUucmlnaHQgPSAoMTAwIC0gcGVyY2VudFJpZ2h0KSArICclJ1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldFJpZ2h0KHBlcmNlbnQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLmxlZnQgPSBwZXJjZW50ICsgJyUnXG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5yaWdodCA9IFN0cmluZygwKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBUaHVtYiB7XG4gICAgaXNEb3VibGU6IGJvb2xlYW5cbiAgICBwYXJlbnQ6IEhUTUxEaXZFbGVtZW50XG4gICAgdGh1bWJEZWZhdWx0ITogSFRNTERpdkVsZW1lbnRcbiAgICB0aHVtYlJpZ2h0ITogSFRNTERpdkVsZW1lbnRcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElPcHRpb25zKSB7XG4gICAgICAgIHRoaXMuaXNEb3VibGUgPSBvcHRpb25zLmlzRG91YmxlID8gb3B0aW9ucy5pc0RvdWJsZSA6IGZhbHNlXG4gICAgICAgIHRoaXMucGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmdlLXNsaWRlcl9fc3R5bGUnKSBhcyBIVE1MRGl2RWxlbWVudFxuICAgIH1cbiAgICBjcmVhdGVUaHVtYigpIHtcbiAgICAgICAgaWYodGhpcy5pc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYicpXG4gICAgICAgICAgICB0aGlzLnRodW1iRGVmYXVsdC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3RodW1iX2xlZnQnKVxuICAgICAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kKHRoaXMudGh1bWJEZWZhdWx0KVxuXG4gICAgICAgICAgICB0aGlzLnRodW1iUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdGhpcy50aHVtYlJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdGh1bWInKVxuICAgICAgICAgICAgdGhpcy50aHVtYlJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdGh1bWJfcmlnaHQnKVxuICAgICAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kKHRoaXMudGh1bWJSaWdodClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGh1bWJEZWZhdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHRoaXMudGh1bWJEZWZhdWx0LmNsYXNzTmFtZSA9ICdyYW5nZS1zbGlkZXJfX3RodW1iJ1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kKHRoaXMudGh1bWJEZWZhdWx0KVxuICAgICAgICB9XG4gICAgfVxuICAgIHBsYWNlVGh1bWIocGVyY2VudDogbnVtYmVyLCBwZXJjZW50UmlnaHQ6IG51bWJlciA9IE5hTik6IHZvaWQge1xuICAgICAgICB0aGlzLnRodW1iRGVmYXVsdC5zdHlsZS5sZWZ0ID0gcGVyY2VudCArICclJ1xuICAgICAgICBpZiAodGhpcy5pc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy50aHVtYlJpZ2h0LnN0eWxlLnJpZ2h0ID0gKDEwMCAtIHBlcmNlbnRSaWdodCkgKyAnJSdcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHtGb3JtLCBTdHlsZXMsIFByb2dyZXNzQmFyLCBUaHVtYn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MDA2MDk1MzUzNDBcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL2hvbWUveGVuYS9SYW5nZS1zbGlkZXIvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInJlbG9hZEFsbFwiOnRydWUsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9