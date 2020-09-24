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

/***/ "./ sync recursive \\.(ts|scss)$":
/*!***************************!*\
  !*** . sync \.(ts|scss)$ ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./js/contoller.ts": "./js/contoller.ts",
	"./js/mainView.ts": "./js/mainView.ts",
	"./js/model.ts": "./js/model.ts",
	"./js/subViews.ts": "./js/subViews.ts",
	"./main.scss": "./main.scss",
	"./main.ts": "./main.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive \\.(ts|scss)$";

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function importAll(r) {
  r.keys().forEach(r);
}

importAll(__webpack_require__("./ sync recursive \\.(ts|scss)$"));

/***/ }),

/***/ "./js/contoller.ts":
/*!*************************!*\
  !*** ./js/contoller.ts ***!
  \*************************/
/*! exports provided: Controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
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
      }

      if (option === 'right') {
        this.model.rightValue = Number(this.view.form.rightInput.value);
      }
    }
  }]);

  return Controller;
}();



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

      if (_this.options.isRange) {
        _this.form.rightInput.addEventListener('input', function () {
          _this.options.rightValue = Number(_this.form.rightInput.value);

          _this.setInput();

          _this.observers.forEach(function (observer) {
            observer.updateModel('right');
          });
        });
      }
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

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_subViews__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/subViews */ "./js/subViews.ts");
/* harmony import */ var _js_mainView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/mainView */ "./js/mainView.ts");
/* harmony import */ var _js_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/model */ "./js/model.ts");
/* harmony import */ var _js_contoller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/contoller */ "./js/contoller.ts");





(function ($) {
  $.fn.rangeSlider = function () {
    var plugin = new _js_contoller__WEBPACK_IMPORTED_MODULE_3__["Controller"](new _js_model__WEBPACK_IMPORTED_MODULE_2__["Model"](), new _js_mainView__WEBPACK_IMPORTED_MODULE_1__["View"](new _js_subViews__WEBPACK_IMPORTED_MODULE_0__["Form"]({}), new _js_subViews__WEBPACK_IMPORTED_MODULE_0__["Styles"]({}), new _js_subViews__WEBPACK_IMPORTED_MODULE_0__["ProgressBar"]({}), new _js_subViews__WEBPACK_IMPORTED_MODULE_0__["Thumb"]({})));
    return plugin;
  };
})(jQuery); // const rangeSliders: NodeList = document.querySelectorAll('.range-slider') as NodeList
//         rangeSliders.forEach(rangeSlider => {
//         })


$('#first-range-slider').rangeSlider();
$('#second-range-slider').rangeSlider();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4gc3luYyBcXC4odHN8c2NzcykkIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2pzL2NvbnRvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9qcy9tYWluVmlldy50cyIsIndlYnBhY2s6Ly8vLi9qcy9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9qcy9zdWJWaWV3cy50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbWFpbi50cyJdLCJuYW1lcyI6WyJpbXBvcnRBbGwiLCJyIiwia2V5cyIsImZvckVhY2giLCJyZXF1aXJlIiwiQ29udHJvbGxlciIsIm1vZGVsIiwidmlldyIsInN1YnNjcmliZSIsImluaXQiLCJvcHRpb25zIiwiZGF0YUZvclZpZXciLCJvcHRpb24iLCJkZWZhdWx0VmFsdWUiLCJOdW1iZXIiLCJmb3JtIiwiZGVmYXVsdElucHV0IiwidmFsdWUiLCJyaWdodFZhbHVlIiwicmlnaHRJbnB1dCIsIlZpZXciLCJzdHlsZXMiLCJwcm9ncmVzc0JhciIsInRodW1iIiwiaXNEb3VibGUiLCJpc1JhbmdlIiwiY3JlYXRlRm9ybSIsImNyZWF0ZUlucHV0Iiwic2V0TWluIiwibWluIiwic2V0TWF4IiwibWF4IiwiY3JlYXRlU3R5bGVzIiwiY3JlYXRlVHJhY2siLCJwYXJlbnQiLCJzdHlsZSIsImNyZWF0ZVByb2dyZXNzQmFyIiwiY3JlYXRlVGh1bWIiLCJzZXRJbnB1dCIsImV2ZW50SW5wdXQiLCJzZXRJbnB1dFZhbHVlIiwicGxhY2VEZWZhdWx0IiwiY2FsY1BlcmNlbnQiLCJwbGFjZVJpZ2h0IiwiTmFOIiwic2V0RGVmYXVsdCIsInJpZ2h0UHJvZ3Jlc3NCYXIiLCJzZXRSaWdodCIsInBsYWNlVGh1bWIiLCJhZGRFdmVudExpc3RlbmVyIiwib2JzZXJ2ZXJzIiwib2JzZXJ2ZXIiLCJ1cGRhdGVNb2RlbCIsInB1c2giLCJNb2RlbCIsImNvbnNvbGUiLCJsb2ciLCJpc091dERhdGEiLCJyYW5nZVNsaWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkZvcm0iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kIiwidHlwZSIsIlN0cmluZyIsIlN0eWxlcyIsInRyYWNrIiwiUHJvZ3Jlc3NCYXIiLCJiYXIiLCJwZXJjZW50IiwicGVyY2VudFJpZ2h0IiwicmlnaHQiLCJsZWZ0IiwiVGh1bWIiLCJ0aHVtYkRlZmF1bHQiLCJ0aHVtYlJpZ2h0IiwiY2xhc3NOYW1lIiwiJCIsImZuIiwicGx1Z2luIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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LENBQVkrQixNQUFaLENBQW1CLEtBQUtZLFlBQXhCO0FBQ0g7QUFDSjs7OytCQUNVTCxPLEVBQW1EO0FBQUEsVUFBbENDLFlBQWtDLHVFQUFYN0IsR0FBVztBQUMxRCxXQUFLaUMsWUFBTCxDQUFrQjFDLEtBQWxCLENBQXdCd0MsSUFBeEIsR0FBK0JILE9BQU8sR0FBRyxHQUF6Qzs7QUFDQSxVQUFJLEtBQUtoRCxRQUFULEVBQW1CO0FBQ2YsYUFBS3NELFVBQUwsQ0FBZ0IzQyxLQUFoQixDQUFzQnVDLEtBQXRCLEdBQStCLE1BQU1ELFlBQVAsR0FBdUIsR0FBckQ7QUFDSDtBQUNKOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9KTDtBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkOzs7Ozs7Ozs7Ozs7O0FDSkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMsVUFBU08sQ0FBVCxFQUFZO0FBQ1RBLEdBQUMsQ0FBQ0MsRUFBRixDQUFLdkIsV0FBTCxHQUFtQixZQUFXO0FBQzFCLFFBQU13QixNQUFNLEdBQUcsSUFBSTdFLHdEQUFKLENBQ1gsSUFBSWlELCtDQUFKLEVBRFcsRUFFWCxJQUFJbEMsaURBQUosQ0FDSSxJQUFJeUMsaURBQUosQ0FBUyxFQUFULENBREosRUFFSSxJQUFJTyxtREFBSixDQUFXLEVBQVgsQ0FGSixFQUdJLElBQUlFLHdEQUFKLENBQWdCLEVBQWhCLENBSEosRUFJSSxJQUFJTSxrREFBSixDQUFVLEVBQVYsQ0FKSixDQUZXLENBQWY7QUFTQSxXQUFPTSxNQUFQO0FBQ0gsR0FYRDtBQVlILENBYkQsRUFhR0MsTUFiSCxFLENBY0E7QUFDQTtBQUVBOzs7QUFDQUgsQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJ0QixXQUF6QjtBQUNBc0IsQ0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJ0QixXQUExQixHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2pzL2NvbnRvbGxlci50c1wiOiBcIi4vanMvY29udG9sbGVyLnRzXCIsXG5cdFwiLi9qcy9tYWluVmlldy50c1wiOiBcIi4vanMvbWFpblZpZXcudHNcIixcblx0XCIuL2pzL21vZGVsLnRzXCI6IFwiLi9qcy9tb2RlbC50c1wiLFxuXHRcIi4vanMvc3ViVmlld3MudHNcIjogXCIuL2pzL3N1YlZpZXdzLnRzXCIsXG5cdFwiLi9tYWluLnNjc3NcIjogXCIuL21haW4uc2Nzc1wiLFxuXHRcIi4vbWFpbi50c1wiOiBcIi4vbWFpbi50c1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLih0c3xzY3NzKSRcIjsiLCJmdW5jdGlvbiBpbXBvcnRBbGwocikge1xuICByLmtleXMoKS5mb3JFYWNoKHIpXG59XG5cbmltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4vJywgdHJ1ZSwgL1xcLih0c3xzY3NzKSQvKSkiLCJpbXBvcnQge01vZGVsfSBmcm9tICcuL21vZGVsJ1xuaW1wb3J0IHtWaWV3fSBmcm9tICcuL21haW5WaWV3J1xuXG5jbGFzcyBDb250cm9sbGVyIHtcbiAgICBtb2RlbDogTW9kZWxcbiAgICB2aWV3OiBWaWV3XG4gICAgY29uc3RydWN0b3IobW9kZWw6IE1vZGVsLCB2aWV3OiBWaWV3KSB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbFxuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3XG4gICAgICAgIHRoaXMudmlldy5vcHRpb25zID0gdGhpcy5tb2RlbC5kYXRhRm9yVmlld1xuICAgICAgICB0aGlzLmluaXQoKSBcbiAgICB9XG4gICAgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy52aWV3LnN1YnNjcmliZSh0aGlzKVxuICAgICAgICB0aGlzLnZpZXcuaW5pdCgpXG4gICAgICAgIHRoaXMubW9kZWwuaW5pdCgpICBcbiAgICB9XG4gICAgdXBkYXRlTW9kZWwob3B0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKG9wdGlvbiA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmRlZmF1bHRWYWx1ZSA9IE51bWJlcih0aGlzLnZpZXcuZm9ybS5kZWZhdWx0SW5wdXQudmFsdWUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5yaWdodFZhbHVlID0gTnVtYmVyKHRoaXMudmlldy5mb3JtLnJpZ2h0SW5wdXQudmFsdWUpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7Q29udHJvbGxlcn1cbiIsImltcG9ydCB7Rm9ybSwgU3R5bGVzLCBQcm9ncmVzc0JhciwgVGh1bWJ9IGZyb20gJy4vc3ViVmlld3MnXG5cbmludGVyZmFjZSBJRGF0YSB7XG4gICAgbWluOiBudW1iZXJcbiAgICBtYXg6IG51bWJlclxuICAgIGRlZmF1bHRWYWx1ZTogbnVtYmVyXG4gICAgcmlnaHRWYWx1ZTogbnVtYmVyXG4gICAgaXNSYW5nZTogYm9vbGVhblxuICAgIHJpZ2h0UHJvZ3Jlc3NCYXI6IGJvb2xlYW5cbn1cbmludGVyZmFjZSBJT2JzZXJ2ZXIge1xuICAgIHVwZGF0ZU1vZGVsKGFyZzA6IHN0cmluZyk6IHZvaWRcbn1cblxuY2xhc3MgVmlldyB7XG4gICAgZm9ybTogRm9ybVxuICAgIHN0eWxlczogU3R5bGVzXG4gICAgcHJvZ3Jlc3NCYXI6IFByb2dyZXNzQmFyXG4gICAgdGh1bWI6IFRodW1iXG4gICAgb3B0aW9uczogSURhdGFcbiAgICBvYnNlcnZlcnM6IElPYnNlcnZlcltdXG4gICAgY29uc3RydWN0b3IoZm9ybTogRm9ybSwgc3R5bGVzOiBTdHlsZXMsIHByb2dyZXNzQmFyOiBQcm9ncmVzc0JhciwgdGh1bWI6IFRodW1iKSB7XG4gICAgICAgIHRoaXMuZm9ybSA9IGZvcm1cbiAgICAgICAgdGhpcy5zdHlsZXMgPSBzdHlsZXNcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JhciA9IHByb2dyZXNzQmFyXG4gICAgICAgIHRoaXMudGh1bWIgPSB0aHVtYlxuXG4gICAgICAgIC8vIHRoaXMgb3B0aW9ucyBhcmUgb25seSBhbiBleGFtcGxlLCB0aGUgcGx1Z2luIHdvcmtzIHdpdGggb3B0aW9ucyBmcm9tIHRoZSBtb2RlbFxuICAgICAgICAvLyB2aWV3IGdldHMgb3B0aW9ucyBmcm9tIG1vZGVsIHZpYSBjb250cm9sbGVyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiAxMCxcbiAgICAgICAgICAgIHJpZ2h0VmFsdWU6IDUwLFxuICAgICAgICAgICAgaXNSYW5nZTogdHJ1ZSxcbiAgICAgICAgICAgIHJpZ2h0UHJvZ3Jlc3NCYXI6IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9ic2VydmVycyA9IFtdXG4gICAgfVxuICAgIHN1YnNjcmliZShvYnNlcnZlcjogSU9ic2VydmVyKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpXG4gICAgfVxuICAgIGluaXQgPSAoKSA9PiB7XG5cbiAgICAgICAgdGhpcy5mb3JtLmlzRG91YmxlID0gdGhpcy5vcHRpb25zLmlzUmFuZ2VcbiAgICAgICAgdGhpcy5zdHlsZXMuaXNEb3VibGUgPSB0aGlzLm9wdGlvbnMuaXNSYW5nZVxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLmlzRG91YmxlID0gdGhpcy5vcHRpb25zLmlzUmFuZ2VcbiAgICAgICAgdGhpcy50aHVtYi5pc0RvdWJsZSA9IHRoaXMub3B0aW9ucy5pc1JhbmdlXG5cbiAgICAgICAgdGhpcy5mb3JtLmNyZWF0ZUZvcm0oKVxuICAgICAgICB0aGlzLmZvcm0uY3JlYXRlSW5wdXQoKVxuICAgICAgICB0aGlzLmZvcm0uc2V0TWluKHRoaXMub3B0aW9ucy5taW4pXG4gICAgICAgIHRoaXMuZm9ybS5zZXRNYXgodGhpcy5vcHRpb25zLm1heClcblxuICAgICAgICB0aGlzLnN0eWxlcy5jcmVhdGVTdHlsZXMoKVxuICAgICAgICB0aGlzLnN0eWxlcy5jcmVhdGVUcmFjaygpXG5cbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5wYXJlbnQgPSB0aGlzLnN0eWxlcy5zdHlsZVxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLmNyZWF0ZVByb2dyZXNzQmFyKCkgXG5cbiAgICAgICAgdGhpcy50aHVtYi5wYXJlbnQgPSB0aGlzLnN0eWxlcy5zdHlsZVxuICAgICAgICB0aGlzLnRodW1iLmNyZWF0ZVRodW1iKClcblxuICAgICAgICB0aGlzLnNldElucHV0KClcbiAgICAgICAgdGhpcy5ldmVudElucHV0KClcbiAgXG4gICAgfSBcblxuICAgIHNldElucHV0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmZvcm0uc2V0SW5wdXRWYWx1ZSh0aGlzLm9wdGlvbnMuZGVmYXVsdFZhbHVlLCB0aGlzLm9wdGlvbnMucmlnaHRWYWx1ZSlcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHBsYWNlRGVmYXVsdDogbnVtYmVyID0gdGhpcy5wcm9ncmVzc0Jhci5jYWxjUGVyY2VudChcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQudmFsdWUpLCBcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQubWluKSwgXG4gICAgICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0Lm1heCkpXG4gICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IHBsYWNlUmlnaHQ6IG51bWJlciA9IHRoaXMuZm9ybS5yaWdodElucHV0ID8gXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyLmNhbGNQZXJjZW50KFxuICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0ucmlnaHRJbnB1dC52YWx1ZSksIFxuICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0ucmlnaHRJbnB1dC5taW4pLCBcbiAgICAgICAgICAgICAgICBOdW1iZXIodGhpcy5mb3JtLnJpZ2h0SW5wdXQubWF4KSkgXG4gICAgICAgICAgICAgICAgOiBOYU4gXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5zZXREZWZhdWx0KHBsYWNlRGVmYXVsdCwgcGxhY2VSaWdodClcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmlnaHRQcm9ncmVzc0JhcikgeyBcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuc2V0UmlnaHQocGxhY2VEZWZhdWx0KSBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGh1bWIucGxhY2VUaHVtYihwbGFjZURlZmF1bHQsIHBsYWNlUmlnaHQpXG5cbiAgICAgICAgXG4gICAgfVxuICAgIGV2ZW50SW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZGVmYXVsdFZhbHVlID0gTnVtYmVyKHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQudmFsdWUpXG4gICAgICAgICAgICB0aGlzLnNldElucHV0KClcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLnVwZGF0ZU1vZGVsKCdkZWZhdWx0JylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNSYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtLnJpZ2h0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUgPSBOdW1iZXIodGhpcy5mb3JtLnJpZ2h0SW5wdXQudmFsdWUpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJbnB1dCgpXG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVwZGF0ZU1vZGVsKCdyaWdodCcpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCB7Vmlld30iLCJpbnRlcmZhY2UgSURhdGEge1xuICAgIG1pbjogbnVtYmVyXG4gICAgbWF4OiBudW1iZXJcbiAgICBkZWZhdWx0VmFsdWU6IG51bWJlclxuICAgIHJpZ2h0VmFsdWU6IG51bWJlclxuICAgIGlzUmFuZ2U6IGJvb2xlYW5cbiAgICByaWdodFByb2dyZXNzQmFyOiBib29sZWFuXG59XG5cbmNsYXNzIE1vZGVsIHtcbiAgICBtaW46IG51bWJlclxuICAgIG1heDogbnVtYmVyXG4gICAgZGVmYXVsdFZhbHVlOiBudW1iZXJcbiAgICByaWdodFZhbHVlPzogbnVtYmVyXG4gICAgaXNSYW5nZTogYm9vbGVhblxuICAgIHJpZ2h0UHJvZ3Jlc3NCYXI/OiBib29sZWFuXG4gICAgaXNPdXREYXRhPzogYm9vbGVhblxuICAgIGRhdGFGb3JWaWV3OiBJRGF0YVxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1pbiA9IDBcbiAgICAgICAgdGhpcy5tYXggPSAxMDBcbiAgICAgICAgdGhpcy5kZWZhdWx0VmFsdWUgPSAxMFxuICAgICAgICB0aGlzLnJpZ2h0VmFsdWUgPSA1MFxuICAgICAgICB0aGlzLmlzUmFuZ2UgPSB0cnVlXG4gICAgICAgIHRoaXMucmlnaHRQcm9ncmVzc0JhciA9IHRydWVcbiAgICAgICAgdGhpcy5pc091dERhdGEgPSBmYWxzZVxuICAgICAgICB0aGlzLmRhdGFGb3JWaWV3ID0ge1xuICAgICAgICAgICAgbWluOiB0aGlzLm1pbixcbiAgICAgICAgICAgIG1heDogdGhpcy5tYXgsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IHRoaXMuZGVmYXVsdFZhbHVlLFxuICAgICAgICAgICAgcmlnaHRWYWx1ZTogdGhpcy5yaWdodFZhbHVlLFxuICAgICAgICAgICAgaXNSYW5nZTogdGhpcy5pc1JhbmdlLFxuICAgICAgICAgICAgcmlnaHRQcm9ncmVzc0JhcjogdGhpcy5yaWdodFByb2dyZXNzQmFyXG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Zyb20gTW9kZWwnKVxuICAgIH1cbn1cblxuZXhwb3J0IHtNb2RlbH0iLCJjb25zdCByYW5nZVNsaWRlcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZ2Utc2xpZGVyJykgYXMgSFRNTERpdkVsZW1lbnRcbi8vcXVlcnlTZWxlY3RvckFsbCBhbmQgZm9yRWFjaCBhcmUgbmVlZGVkIGZvciBpbmRlcGVuZGVuY2VcblxuXG5cbmludGVyZmFjZSBJT3B0aW9ucyB7XG4gICAgaXNEb3VibGU/OiBib29sZWFuXG4gICAgcGFyZW50PzogSFRNTERpdkVsZW1lbnRcbn1cblxuY2xhc3MgRm9ybSB7XG4gICAgXG4gICAgaXNEb3VibGU6IGJvb2xlYW5cbiAgICBwYXJlbnQ6IEhUTUxEaXZFbGVtZW50XG4gICAgZm9ybSE6IEhUTUxEaXZFbGVtZW50XG4gICAgZGVmYXVsdElucHV0ITogSFRNTElucHV0RWxlbWVudFxuICAgIHJpZ2h0SW5wdXQhOiBIVE1MSW5wdXRFbGVtZW50XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJT3B0aW9ucykge1xuICAgICAgICB0aGlzLmlzRG91YmxlID0gb3B0aW9ucy5pc0RvdWJsZSA/IG9wdGlvbnMuaXNEb3VibGUgOiBmYWxzZVxuICAgICAgICB0aGlzLnBhcmVudCA9IG9wdGlvbnMucGFyZW50ID8gb3B0aW9ucy5wYXJlbnQgOiByYW5nZVNsaWRlclxuICAgIH1cbiAgICBcbiAgICBjcmVhdGVGb3JtKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZvcm0gPSA8SFRNTERpdkVsZW1lbnQ+KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKVxuICAgICAgICB0aGlzLmZvcm0uY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19mb3JtJylcbiAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kKHRoaXMuZm9ybSlcbiAgICB9XG4gICAgXG4gICAgY3JlYXRlSW5wdXQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0LnR5cGUgPSAncmFuZ2UnXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0JykgXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0X2xlZnQnKVxuICAgICAgICAgICAgdGhpcy5mb3JtLmFwcGVuZCh0aGlzLmRlZmF1bHRJbnB1dClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0LnR5cGUgPSAncmFuZ2UnXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19pbnB1dCcpXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19pbnB1dF9yaWdodCcpXG4gICAgICAgICAgICB0aGlzLmZvcm0uYXBwZW5kKHRoaXMucmlnaHRJbnB1dClcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC50eXBlID0gJ3JhbmdlJ1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19pbnB1dCcpXG4gICAgICAgICAgICB0aGlzLmZvcm0uYXBwZW5kKHRoaXMuZGVmYXVsdElucHV0KVxuICAgICAgICB9XG4gICAgfVxuICAgIHNldElucHV0VmFsdWUodmFsdWU6IG51bWJlciwgcmlnaHRWYWx1ZTogbnVtYmVyID0gTmFOKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVmYXVsdElucHV0LnZhbHVlID0gU3RyaW5nKHZhbHVlKVxuICAgICAgICBpZiAodGhpcy5pc0RvdWJsZSkgeyAgIFxuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0LnZhbHVlID0gU3RyaW5nKHJpZ2h0VmFsdWUpXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0TWluKG1pbjogbnVtYmVyID0gMCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC5taW4gPSBTdHJpbmcobWluKVxuICAgICAgICBpZiAodGhpcy5pc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0Lm1pbiA9IFN0cmluZyhtaW4pXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0TWF4KG1heDogbnVtYmVyID0gMTAwKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVmYXVsdElucHV0Lm1heCA9IFN0cmluZyhtYXgpXG4gICAgICAgIGlmICh0aGlzLmlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQubWF4ID0gU3RyaW5nKG1heClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgU3R5bGVzIHtcbiAgICBpc0RvdWJsZTogYm9vbGVhblxuICAgIHBhcmVudDogSFRNTERpdkVsZW1lbnRcbiAgICBzdHlsZSE6IEhUTUxEaXZFbGVtZW50XG4gICAgdHJhY2shOiBIVE1MRGl2RWxlbWVudFxuXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogSU9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5pc0RvdWJsZSA9IG9wdGlvbnMuaXNEb3VibGUgPyBvcHRpb25zLmlzRG91YmxlIDogZmFsc2VcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBvcHRpb25zLnBhcmVudCA/IG9wdGlvbnMucGFyZW50IDogcmFuZ2VTbGlkZXJcbiAgICB9XG4gICAgXG4gICAgY3JlYXRlU3R5bGVzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGhpcy5zdHlsZS5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3N0eWxlJylcbiAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kKHRoaXMuc3R5bGUpXG4gICAgfVxuICAgIFxuICAgIGNyZWF0ZVRyYWNrKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRyYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGhpcy50cmFjay5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3RyYWNrJylcbiAgICAgICAgdGhpcy5zdHlsZS5hcHBlbmQodGhpcy50cmFjaylcbiAgICB9XG59XG5cbmNsYXNzIFByb2dyZXNzQmFyIHtcbiAgICBpc0RvdWJsZTogYm9vbGVhblxuICAgIHBhcmVudDogSFRNTERpdkVsZW1lbnRcbiAgICBiYXIhOiBIVE1MRGl2RWxlbWVudFxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElPcHRpb25zKSB7XG4gICAgICAgIHRoaXMuaXNEb3VibGUgPSBvcHRpb25zLmlzRG91YmxlID8gb3B0aW9ucy5pc0RvdWJsZSA6IGZhbHNlXG4gICAgICAgIHRoaXMucGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmdlLXNsaWRlcl9fc3R5bGUnKSBhcyBIVE1MRGl2RWxlbWVudFxuICAgIH1cbiAgICBjcmVhdGVQcm9ncmVzc0JhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5iYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0aGlzLmJhci5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3Byb2dyZXNzLWJhcicpXG4gICAgICAgIHRoaXMucGFyZW50LmFwcGVuZCh0aGlzLmJhcilcbiAgICB9XG4gICAgY2FsY1BlcmNlbnQodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuICgodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbikpICogMTAwXG4gICAgfVxuICAgIHNldERlZmF1bHQocGVyY2VudDogbnVtYmVyLCBwZXJjZW50UmlnaHQ6IG51bWJlciA9IE5hTik6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLnJpZ2h0ID0gKDEwMCAtIHBlcmNlbnQpICsgJyUnXG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5sZWZ0ID0gU3RyaW5nKDApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5sZWZ0ID0gcGVyY2VudCArICclJ1xuICAgICAgICAgICAgdGhpcy5iYXIuc3R5bGUucmlnaHQgPSAoMTAwIC0gcGVyY2VudFJpZ2h0KSArICclJ1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldFJpZ2h0KHBlcmNlbnQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLmxlZnQgPSBwZXJjZW50ICsgJyUnXG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5yaWdodCA9IFN0cmluZygwKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBUaHVtYiB7XG4gICAgaXNEb3VibGU6IGJvb2xlYW5cbiAgICBwYXJlbnQ6IEhUTUxEaXZFbGVtZW50XG4gICAgdGh1bWJEZWZhdWx0ITogSFRNTERpdkVsZW1lbnRcbiAgICB0aHVtYlJpZ2h0ITogSFRNTERpdkVsZW1lbnRcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElPcHRpb25zKSB7XG4gICAgICAgIHRoaXMuaXNEb3VibGUgPSBvcHRpb25zLmlzRG91YmxlID8gb3B0aW9ucy5pc0RvdWJsZSA6IGZhbHNlXG4gICAgICAgIHRoaXMucGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmdlLXNsaWRlcl9fc3R5bGUnKSBhcyBIVE1MRGl2RWxlbWVudFxuICAgIH1cbiAgICBjcmVhdGVUaHVtYigpIHtcbiAgICAgICAgaWYodGhpcy5pc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYicpXG4gICAgICAgICAgICB0aGlzLnRodW1iRGVmYXVsdC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3RodW1iX2xlZnQnKVxuICAgICAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kKHRoaXMudGh1bWJEZWZhdWx0KVxuXG4gICAgICAgICAgICB0aGlzLnRodW1iUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdGhpcy50aHVtYlJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdGh1bWInKVxuICAgICAgICAgICAgdGhpcy50aHVtYlJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdGh1bWJfcmlnaHQnKVxuICAgICAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kKHRoaXMudGh1bWJSaWdodClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGh1bWJEZWZhdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHRoaXMudGh1bWJEZWZhdWx0LmNsYXNzTmFtZSA9ICdyYW5nZS1zbGlkZXJfX3RodW1iJ1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kKHRoaXMudGh1bWJEZWZhdWx0KVxuICAgICAgICB9XG4gICAgfVxuICAgIHBsYWNlVGh1bWIocGVyY2VudDogbnVtYmVyLCBwZXJjZW50UmlnaHQ6IG51bWJlciA9IE5hTik6IHZvaWQge1xuICAgICAgICB0aGlzLnRodW1iRGVmYXVsdC5zdHlsZS5sZWZ0ID0gcGVyY2VudCArICclJ1xuICAgICAgICBpZiAodGhpcy5pc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy50aHVtYlJpZ2h0LnN0eWxlLnJpZ2h0ID0gKDEwMCAtIHBlcmNlbnRSaWdodCkgKyAnJSdcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHtGb3JtLCBTdHlsZXMsIFByb2dyZXNzQmFyLCBUaHVtYn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MDA5NDgzNDY1OTFcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL2hvbWUveGVuYS9SYW5nZS1zbGlkZXIvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInJlbG9hZEFsbFwiOnRydWUsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJcblxuaW1wb3J0IHtGb3JtLCBTdHlsZXMsIFByb2dyZXNzQmFyLCBUaHVtYn0gZnJvbSAnLi9qcy9zdWJWaWV3cydcbmltcG9ydCB7Vmlld30gZnJvbSAnLi9qcy9tYWluVmlldydcbmltcG9ydCB7TW9kZWx9IGZyb20gJy4vanMvbW9kZWwnXG5pbXBvcnQge0NvbnRyb2xsZXJ9IGZyb20gJy4vanMvY29udG9sbGVyJ1xuXG4oZnVuY3Rpb24oJCkge1xuICAgICQuZm4ucmFuZ2VTbGlkZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgcGx1Z2luID0gbmV3IENvbnRyb2xsZXIoXG4gICAgICAgICAgICBuZXcgTW9kZWwoKSwgXG4gICAgICAgICAgICBuZXcgVmlldyhcbiAgICAgICAgICAgICAgICBuZXcgRm9ybSh7fSksIFxuICAgICAgICAgICAgICAgIG5ldyBTdHlsZXMoe30pLFxuICAgICAgICAgICAgICAgIG5ldyBQcm9ncmVzc0Jhcih7fSksXG4gICAgICAgICAgICAgICAgbmV3IFRodW1iKHt9KSBcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICByZXR1cm4gcGx1Z2luXG4gICAgfVxufSkoalF1ZXJ5KVxuLy8gY29uc3QgcmFuZ2VTbGlkZXJzOiBOb2RlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYW5nZS1zbGlkZXInKSBhcyBOb2RlTGlzdFxuLy8gICAgICAgICByYW5nZVNsaWRlcnMuZm9yRWFjaChyYW5nZVNsaWRlciA9PiB7XG4gICAgICAgICAgICBcbi8vICAgICAgICAgfSlcbiQoJyNmaXJzdC1yYW5nZS1zbGlkZXInKS5yYW5nZVNsaWRlcigpXG4kKCcjc2Vjb25kLXJhbmdlLXNsaWRlcicpLnJhbmdlU2xpZGVyKCkiXSwic291cmNlUm9vdCI6IiJ9