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
/* harmony import */ var _js_subViews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/subViews */ "./js/subViews.ts");
/* harmony import */ var _js_mainView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/mainView */ "./js/mainView.ts");
/* harmony import */ var _js_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/model */ "./js/model.ts");
/* harmony import */ var _js_contoller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/contoller */ "./js/contoller.ts");





var rangeSliders = document.querySelectorAll('.range-slider');
rangeSliders.forEach(function (rangeSlider) {
  var plugin = new _js_contoller__WEBPACK_IMPORTED_MODULE_4__["Controller"](new _js_model__WEBPACK_IMPORTED_MODULE_3__["Model"](), new _js_mainView__WEBPACK_IMPORTED_MODULE_2__["View"](new _js_subViews__WEBPACK_IMPORTED_MODULE_1__["Form"]({
    parent: rangeSlider
  }), new _js_subViews__WEBPACK_IMPORTED_MODULE_1__["Styles"]({
    parent: rangeSlider
  }), new _js_subViews__WEBPACK_IMPORTED_MODULE_1__["ProgressBar"]({}), new _js_subViews__WEBPACK_IMPORTED_MODULE_1__["Thumb"]({})));
  plugin;
}); // const app = new Controller(
//     new Model(), 
//     new View(
//         new Form({}), 
//         new Styles({}), 
//         new ProgressBar({}), 
//         new Thumb({})
//     )
// )
// app

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

      console.log(this.model.defaultValue);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vanMvY29udG9sbGVyLnRzIiwid2VicGFjazovLy8uL2pzL21haW5WaWV3LnRzIiwid2VicGFjazovLy8uL2pzL21vZGVsLnRzIiwid2VicGFjazovLy8uL2pzL3N1YlZpZXdzLnRzIiwid2VicGFjazovLy8uL21haW4uc2NzcyJdLCJuYW1lcyI6WyJyYW5nZVNsaWRlcnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwicmFuZ2VTbGlkZXIiLCJwbHVnaW4iLCJDb250cm9sbGVyIiwiTW9kZWwiLCJWaWV3IiwiRm9ybSIsInBhcmVudCIsIlN0eWxlcyIsIlByb2dyZXNzQmFyIiwiVGh1bWIiLCJtb2RlbCIsInZpZXciLCJzdWJzY3JpYmUiLCJpbml0Iiwib3B0aW9ucyIsImRhdGFGb3JWaWV3Iiwib3B0aW9uIiwiZGVmYXVsdFZhbHVlIiwiTnVtYmVyIiwiZm9ybSIsImRlZmF1bHRJbnB1dCIsInZhbHVlIiwicmlnaHRWYWx1ZSIsInJpZ2h0SW5wdXQiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwicHJvZ3Jlc3NCYXIiLCJ0aHVtYiIsImlzRG91YmxlIiwiaXNSYW5nZSIsImNyZWF0ZUZvcm0iLCJjcmVhdGVJbnB1dCIsInNldE1pbiIsIm1pbiIsInNldE1heCIsIm1heCIsImNyZWF0ZVN0eWxlcyIsImNyZWF0ZVRyYWNrIiwic3R5bGUiLCJjcmVhdGVQcm9ncmVzc0JhciIsImNyZWF0ZVRodW1iIiwic2V0SW5wdXQiLCJldmVudElucHV0Iiwic2V0SW5wdXRWYWx1ZSIsInBsYWNlRGVmYXVsdCIsImNhbGNQZXJjZW50IiwicGxhY2VSaWdodCIsIk5hTiIsInNldERlZmF1bHQiLCJyaWdodFByb2dyZXNzQmFyIiwic2V0UmlnaHQiLCJwbGFjZVRodW1iIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9ic2VydmVycyIsIm9ic2VydmVyIiwidXBkYXRlTW9kZWwiLCJwdXNoIiwiaXNPdXREYXRhIiwicXVlcnlTZWxlY3RvciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmQiLCJ0eXBlIiwiU3RyaW5nIiwidHJhY2siLCJiYXIiLCJwZXJjZW50IiwicGVyY2VudFJpZ2h0IiwicmlnaHQiLCJsZWZ0IiwidGh1bWJEZWZhdWx0IiwidGh1bWJSaWdodCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVB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Q0EsYUFBS1csVUFBTCxDQUFnQlosU0FBaEIsQ0FBMEJDLEdBQTFCLENBQThCLDJCQUE5QjtBQUNBLGFBQUt4RCxNQUFMLENBQVl5RCxNQUFaLENBQW1CLEtBQUtVLFVBQXhCO0FBQ0gsT0FWRCxNQVVPO0FBQ0gsYUFBS0QsWUFBTCxHQUFvQjNFLFFBQVEsQ0FBQytELGFBQVQsQ0FBdUIsS0FBdkIsQ0FBcEI7QUFDQSxhQUFLWSxZQUFMLENBQWtCRSxTQUFsQixHQUE4QixxQkFBOUI7QUFDQSxhQUFLcEUsTUFBTCxDQUFZeUQsTUFBWixDQUFtQixLQUFLUyxZQUF4QjtBQUNIO0FBQ0o7OzsrQkFDVUosTyxFQUFtRDtBQUFBLFVBQWxDQyxZQUFrQyx1RUFBWHJCLEdBQVc7QUFDMUQsV0FBS3dCLFlBQUwsQ0FBa0JqQyxLQUFsQixDQUF3QmdDLElBQXhCLEdBQStCSCxPQUFPLEdBQUcsR0FBekM7O0FBQ0EsVUFBSSxLQUFLdkMsUUFBVCxFQUFtQjtBQUNmLGFBQUs0QyxVQUFMLENBQWdCbEMsS0FBaEIsQ0FBc0IrQixLQUF0QixHQUErQixNQUFNRCxZQUFQLEdBQXVCLEdBQXJEO0FBQ0g7QUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSkw7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIlxuXG5pbXBvcnQgJy4vbWFpbi5zY3NzJ1xuXG5cbmltcG9ydCB7Rm9ybSwgU3R5bGVzLCBQcm9ncmVzc0JhciwgVGh1bWJ9IGZyb20gJy4vanMvc3ViVmlld3MnXG5pbXBvcnQge1ZpZXd9IGZyb20gJy4vanMvbWFpblZpZXcnXG5pbXBvcnQge01vZGVsfSBmcm9tICcuL2pzL21vZGVsJ1xuaW1wb3J0IHtDb250cm9sbGVyfSBmcm9tICcuL2pzL2NvbnRvbGxlcidcblxuXG5jb25zdCByYW5nZVNsaWRlcnM6IE5vZGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhbmdlLXNsaWRlcicpIGFzIE5vZGVMaXN0XG5yYW5nZVNsaWRlcnMuZm9yRWFjaChyYW5nZVNsaWRlciA9PiB7XG4gICAgY29uc3QgcGx1Z2luID0gbmV3IENvbnRyb2xsZXIoXG4gICAgICAgIG5ldyBNb2RlbCgpLCBcbiAgICAgICAgbmV3IFZpZXcoXG4gICAgICAgICAgICBuZXcgRm9ybSh7XG4gICAgICAgICAgICAgICAgcGFyZW50OiByYW5nZVNsaWRlciBhcyBIVE1MRGl2RWxlbWVudFxuICAgICAgICAgICAgfSksIFxuICAgICAgICAgICAgbmV3IFN0eWxlcyh7XG4gICAgICAgICAgICAgICAgcGFyZW50OiByYW5nZVNsaWRlciBhcyBIVE1MRGl2RWxlbWVudFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBuZXcgUHJvZ3Jlc3NCYXIoe30pLFxuICAgICAgICAgICAgbmV3IFRodW1iKHt9KSBcbiAgICAgICAgKVxuICAgIClcbiAgICBwbHVnaW5cbn0pO1xuXG5cblxuXG4vLyBjb25zdCBhcHAgPSBuZXcgQ29udHJvbGxlcihcbi8vICAgICBuZXcgTW9kZWwoKSwgXG4vLyAgICAgbmV3IFZpZXcoXG4vLyAgICAgICAgIG5ldyBGb3JtKHt9KSwgXG4vLyAgICAgICAgIG5ldyBTdHlsZXMoe30pLCBcbi8vICAgICAgICAgbmV3IFByb2dyZXNzQmFyKHt9KSwgXG4vLyAgICAgICAgIG5ldyBUaHVtYih7fSlcbi8vICAgICApXG4vLyApXG4vLyBhcHBcblxuIiwiaW1wb3J0IHtNb2RlbH0gZnJvbSAnLi9tb2RlbCdcbmltcG9ydCB7Vmlld30gZnJvbSAnLi9tYWluVmlldydcblxuY2xhc3MgQ29udHJvbGxlciB7XG4gICAgbW9kZWw6IE1vZGVsXG4gICAgdmlldzogVmlld1xuICAgIGNvbnN0cnVjdG9yKG1vZGVsOiBNb2RlbCwgdmlldzogVmlldykge1xuICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWxcbiAgICAgICAgdGhpcy52aWV3ID0gdmlld1xuICAgICAgICB0aGlzLnZpZXcub3B0aW9ucyA9IHRoaXMubW9kZWwuZGF0YUZvclZpZXdcbiAgICAgICAgdGhpcy5pbml0KCkgXG4gICAgfVxuICAgIGluaXQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMudmlldy5zdWJzY3JpYmUodGhpcylcbiAgICAgICAgdGhpcy52aWV3LmluaXQoKVxuICAgICAgICB0aGlzLm1vZGVsLmluaXQoKSAgXG4gICAgfVxuICAgIHVwZGF0ZU1vZGVsKG9wdGlvbjogc3RyaW5nKSB7XG4gICAgICAgIGlmIChvcHRpb24gPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5kZWZhdWx0VmFsdWUgPSBOdW1iZXIodGhpcy52aWV3LmZvcm0uZGVmYXVsdElucHV0LnZhbHVlKVxuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwucmlnaHRWYWx1ZSA9IE51bWJlcih0aGlzLnZpZXcuZm9ybS5yaWdodElucHV0LnZhbHVlKVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubW9kZWwuZGVmYXVsdFZhbHVlKVxuICAgIH1cbn1cblxuZXhwb3J0IHtDb250cm9sbGVyfVxuIiwiaW1wb3J0IHtGb3JtLCBTdHlsZXMsIFByb2dyZXNzQmFyLCBUaHVtYn0gZnJvbSAnLi9zdWJWaWV3cydcblxuaW50ZXJmYWNlIElEYXRhIHtcbiAgICBtaW46IG51bWJlclxuICAgIG1heDogbnVtYmVyXG4gICAgZGVmYXVsdFZhbHVlOiBudW1iZXJcbiAgICByaWdodFZhbHVlOiBudW1iZXJcbiAgICBpc1JhbmdlOiBib29sZWFuXG4gICAgcmlnaHRQcm9ncmVzc0JhcjogYm9vbGVhblxufVxuaW50ZXJmYWNlIElPYnNlcnZlciB7XG4gICAgdXBkYXRlTW9kZWwoYXJnMDogc3RyaW5nKTogdm9pZFxufVxuXG5jbGFzcyBWaWV3IHtcbiAgICBmb3JtOiBGb3JtXG4gICAgc3R5bGVzOiBTdHlsZXNcbiAgICBwcm9ncmVzc0JhcjogUHJvZ3Jlc3NCYXJcbiAgICB0aHVtYjogVGh1bWJcbiAgICBvcHRpb25zOiBJRGF0YVxuICAgIG9ic2VydmVyczogSU9ic2VydmVyW11cbiAgICBjb25zdHJ1Y3Rvcihmb3JtOiBGb3JtLCBzdHlsZXM6IFN0eWxlcywgcHJvZ3Jlc3NCYXI6IFByb2dyZXNzQmFyLCB0aHVtYjogVGh1bWIpIHtcbiAgICAgICAgdGhpcy5mb3JtID0gZm9ybVxuICAgICAgICB0aGlzLnN0eWxlcyA9IHN0eWxlc1xuICAgICAgICB0aGlzLnByb2dyZXNzQmFyID0gcHJvZ3Jlc3NCYXJcbiAgICAgICAgdGhpcy50aHVtYiA9IHRodW1iXG5cbiAgICAgICAgLy8gdGhpcyBvcHRpb25zIGFyZSBvbmx5IGFuIGV4YW1wbGUsIHRoZSBwbHVnaW4gd29ya3Mgd2l0aCBvcHRpb25zIGZyb20gdGhlIG1vZGVsXG4gICAgICAgIC8vIHZpZXcgZ2V0cyBvcHRpb25zIGZyb20gbW9kZWwgdmlhIGNvbnRyb2xsZXJcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IDEwLFxuICAgICAgICAgICAgcmlnaHRWYWx1ZTogNTAsXG4gICAgICAgICAgICBpc1JhbmdlOiB0cnVlLFxuICAgICAgICAgICAgcmlnaHRQcm9ncmVzc0JhcjogZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW11cbiAgICB9XG4gICAgc3Vic2NyaWJlKG9ic2VydmVyOiBJT2JzZXJ2ZXIpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChvYnNlcnZlcilcbiAgICB9XG4gICAgaW5pdCA9ICgpID0+IHtcblxuICAgICAgICB0aGlzLmZvcm0uaXNEb3VibGUgPSB0aGlzLm9wdGlvbnMuaXNSYW5nZVxuICAgICAgICB0aGlzLnN0eWxlcy5pc0RvdWJsZSA9IHRoaXMub3B0aW9ucy5pc1JhbmdlXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuaXNEb3VibGUgPSB0aGlzLm9wdGlvbnMuaXNSYW5nZVxuICAgICAgICB0aGlzLnRodW1iLmlzRG91YmxlID0gdGhpcy5vcHRpb25zLmlzUmFuZ2VcblxuICAgICAgICB0aGlzLmZvcm0uY3JlYXRlRm9ybSgpXG4gICAgICAgIHRoaXMuZm9ybS5jcmVhdGVJbnB1dCgpXG4gICAgICAgIHRoaXMuZm9ybS5zZXRNaW4odGhpcy5vcHRpb25zLm1pbilcbiAgICAgICAgdGhpcy5mb3JtLnNldE1heCh0aGlzLm9wdGlvbnMubWF4KVxuXG4gICAgICAgIHRoaXMuc3R5bGVzLmNyZWF0ZVN0eWxlcygpXG4gICAgICAgIHRoaXMuc3R5bGVzLmNyZWF0ZVRyYWNrKClcblxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnBhcmVudCA9IHRoaXMuc3R5bGVzLnN0eWxlXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuY3JlYXRlUHJvZ3Jlc3NCYXIoKSBcblxuICAgICAgICB0aGlzLnRodW1iLnBhcmVudCA9IHRoaXMuc3R5bGVzLnN0eWxlXG4gICAgICAgIHRoaXMudGh1bWIuY3JlYXRlVGh1bWIoKVxuXG4gICAgICAgIHRoaXMuc2V0SW5wdXQoKVxuICAgICAgICB0aGlzLmV2ZW50SW5wdXQoKVxuICBcbiAgICB9IFxuXG4gICAgc2V0SW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuZm9ybS5zZXRJbnB1dFZhbHVlKHRoaXMub3B0aW9ucy5kZWZhdWx0VmFsdWUsIHRoaXMub3B0aW9ucy5yaWdodFZhbHVlKVxuICAgICAgICBcbiAgICAgICAgY29uc3QgcGxhY2VEZWZhdWx0OiBudW1iZXIgPSB0aGlzLnByb2dyZXNzQmFyLmNhbGNQZXJjZW50KFxuICAgICAgICAgICAgICAgICAgICBOdW1iZXIodGhpcy5mb3JtLmRlZmF1bHRJbnB1dC52YWx1ZSksIFxuICAgICAgICAgICAgICAgICAgICBOdW1iZXIodGhpcy5mb3JtLmRlZmF1bHRJbnB1dC5taW4pLCBcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQubWF4KSlcbiAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgY29uc3QgcGxhY2VSaWdodDogbnVtYmVyID0gdGhpcy5mb3JtLnJpZ2h0SW5wdXQgPyBcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuY2FsY1BlcmNlbnQoXG4gICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5yaWdodElucHV0LnZhbHVlKSwgXG4gICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5yaWdodElucHV0Lm1pbiksIFxuICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0ucmlnaHRJbnB1dC5tYXgpKSBcbiAgICAgICAgICAgICAgICA6IE5hTiBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnNldERlZmF1bHQocGxhY2VEZWZhdWx0LCBwbGFjZVJpZ2h0KVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yaWdodFByb2dyZXNzQmFyKSB7IFxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5zZXRSaWdodChwbGFjZURlZmF1bHQpIFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50aHVtYi5wbGFjZVRodW1iKHBsYWNlRGVmYXVsdCwgcGxhY2VSaWdodClcblxuICAgICAgICBcbiAgICB9XG4gICAgZXZlbnRJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5mb3JtLmRlZmF1bHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kZWZhdWx0VmFsdWUgPSBOdW1iZXIodGhpcy5mb3JtLmRlZmF1bHRJbnB1dC52YWx1ZSlcbiAgICAgICAgICAgIHRoaXMuc2V0SW5wdXQoKVxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIudXBkYXRlTW9kZWwoJ2RlZmF1bHQnKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pc1JhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm0ucmlnaHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMucmlnaHRWYWx1ZSA9IE51bWJlcih0aGlzLmZvcm0ucmlnaHRJbnB1dC52YWx1ZSlcbiAgICAgICAgICAgICAgICB0aGlzLnNldElucHV0KClcbiAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudXBkYXRlTW9kZWwoJ3JpZ2h0JylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbn1cblxuZXhwb3J0IHtWaWV3fSIsImludGVyZmFjZSBJRGF0YSB7XG4gICAgbWluOiBudW1iZXJcbiAgICBtYXg6IG51bWJlclxuICAgIGRlZmF1bHRWYWx1ZTogbnVtYmVyXG4gICAgcmlnaHRWYWx1ZTogbnVtYmVyXG4gICAgaXNSYW5nZTogYm9vbGVhblxuICAgIHJpZ2h0UHJvZ3Jlc3NCYXI6IGJvb2xlYW5cbn1cblxuY2xhc3MgTW9kZWwge1xuICAgIG1pbjogbnVtYmVyXG4gICAgbWF4OiBudW1iZXJcbiAgICBkZWZhdWx0VmFsdWU6IG51bWJlclxuICAgIHJpZ2h0VmFsdWU/OiBudW1iZXJcbiAgICBpc1JhbmdlOiBib29sZWFuXG4gICAgcmlnaHRQcm9ncmVzc0Jhcj86IGJvb2xlYW5cbiAgICBpc091dERhdGE/OiBib29sZWFuXG4gICAgZGF0YUZvclZpZXc6IElEYXRhXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubWluID0gMFxuICAgICAgICB0aGlzLm1heCA9IDEwMFxuICAgICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IDEwXG4gICAgICAgIHRoaXMucmlnaHRWYWx1ZSA9IDUwXG4gICAgICAgIHRoaXMuaXNSYW5nZSA9IHRydWVcbiAgICAgICAgdGhpcy5yaWdodFByb2dyZXNzQmFyID0gdHJ1ZVxuICAgICAgICB0aGlzLmlzT3V0RGF0YSA9IGZhbHNlXG4gICAgICAgIHRoaXMuZGF0YUZvclZpZXcgPSB7XG4gICAgICAgICAgICBtaW46IHRoaXMubWluLFxuICAgICAgICAgICAgbWF4OiB0aGlzLm1heCxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdGhpcy5kZWZhdWx0VmFsdWUsXG4gICAgICAgICAgICByaWdodFZhbHVlOiB0aGlzLnJpZ2h0VmFsdWUsXG4gICAgICAgICAgICBpc1JhbmdlOiB0aGlzLmlzUmFuZ2UsXG4gICAgICAgICAgICByaWdodFByb2dyZXNzQmFyOiB0aGlzLnJpZ2h0UHJvZ3Jlc3NCYXJcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbml0ID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZnJvbSBNb2RlbCcpXG4gICAgfVxufVxuXG5leHBvcnQge01vZGVsfSIsImNvbnN0IHJhbmdlU2xpZGVyOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5nZS1zbGlkZXInKSBhcyBIVE1MRGl2RWxlbWVudFxuLy9xdWVyeVNlbGVjdG9yQWxsIGFuZCBmb3JFYWNoIGFyZSBuZWVkZWQgZm9yIGluZGVwZW5kZW5jZVxuXG5cblxuaW50ZXJmYWNlIElPcHRpb25zIHtcbiAgICBpc0RvdWJsZT86IGJvb2xlYW5cbiAgICBwYXJlbnQ/OiBIVE1MRGl2RWxlbWVudFxufVxuXG5jbGFzcyBGb3JtIHtcbiAgICBcbiAgICBpc0RvdWJsZTogYm9vbGVhblxuICAgIHBhcmVudDogSFRNTERpdkVsZW1lbnRcbiAgICBmb3JtITogSFRNTERpdkVsZW1lbnRcbiAgICBkZWZhdWx0SW5wdXQhOiBIVE1MSW5wdXRFbGVtZW50XG4gICAgcmlnaHRJbnB1dCE6IEhUTUxJbnB1dEVsZW1lbnRcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElPcHRpb25zKSB7XG4gICAgICAgIHRoaXMuaXNEb3VibGUgPSBvcHRpb25zLmlzRG91YmxlID8gb3B0aW9ucy5pc0RvdWJsZSA6IGZhbHNlXG4gICAgICAgIHRoaXMucGFyZW50ID0gb3B0aW9ucy5wYXJlbnQgPyBvcHRpb25zLnBhcmVudCA6IHJhbmdlU2xpZGVyXG4gICAgfVxuICAgIFxuICAgIGNyZWF0ZUZvcm0oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZm9ybSA9IDxIVE1MRGl2RWxlbWVudD4oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpXG4gICAgICAgIHRoaXMuZm9ybS5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2Zvcm0nKVxuICAgICAgICB0aGlzLnBhcmVudC5hcHBlbmQodGhpcy5mb3JtKVxuICAgIH1cbiAgICBcbiAgICBjcmVhdGVJbnB1dCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQudHlwZSA9ICdyYW5nZSdcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9faW5wdXQnKSBcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9faW5wdXRfbGVmdCcpXG4gICAgICAgICAgICB0aGlzLmZvcm0uYXBwZW5kKHRoaXMuZGVmYXVsdElucHV0KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQudHlwZSA9ICdyYW5nZSdcbiAgICAgICAgICAgIHRoaXMucmlnaHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0JylcbiAgICAgICAgICAgIHRoaXMucmlnaHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0X3JpZ2h0JylcbiAgICAgICAgICAgIHRoaXMuZm9ybS5hcHBlbmQodGhpcy5yaWdodElucHV0KVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0LnR5cGUgPSAncmFuZ2UnXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0JylcbiAgICAgICAgICAgIHRoaXMuZm9ybS5hcHBlbmQodGhpcy5kZWZhdWx0SW5wdXQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0SW5wdXRWYWx1ZSh2YWx1ZTogbnVtYmVyLCByaWdodFZhbHVlOiBudW1iZXIgPSBOYU4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQudmFsdWUgPSBTdHJpbmcodmFsdWUpXG4gICAgICAgIGlmICh0aGlzLmlzRG91YmxlKSB7ICAgXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQudmFsdWUgPSBTdHJpbmcocmlnaHRWYWx1ZSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRNaW4obWluOiBudW1iZXIgPSAwKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVmYXVsdElucHV0Lm1pbiA9IFN0cmluZyhtaW4pXG4gICAgICAgIGlmICh0aGlzLmlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQubWluID0gU3RyaW5nKG1pbilcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRNYXgobWF4OiBudW1iZXIgPSAxMDApOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQubWF4ID0gU3RyaW5nKG1heClcbiAgICAgICAgaWYgKHRoaXMuaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHRJbnB1dC5tYXggPSBTdHJpbmcobWF4KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBTdHlsZXMge1xuICAgIGlzRG91YmxlOiBib29sZWFuXG4gICAgcGFyZW50OiBIVE1MRGl2RWxlbWVudFxuICAgIHN0eWxlITogSFRNTERpdkVsZW1lbnRcbiAgICB0cmFjayE6IEhUTUxEaXZFbGVtZW50XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJT3B0aW9ucykge1xuICAgICAgICB0aGlzLmlzRG91YmxlID0gb3B0aW9ucy5pc0RvdWJsZSA/IG9wdGlvbnMuaXNEb3VibGUgOiBmYWxzZVxuICAgICAgICB0aGlzLnBhcmVudCA9IG9wdGlvbnMucGFyZW50ID8gb3B0aW9ucy5wYXJlbnQgOiByYW5nZVNsaWRlclxuICAgIH1cbiAgICBcbiAgICBjcmVhdGVTdHlsZXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0aGlzLnN0eWxlLmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fc3R5bGUnKVxuICAgICAgICB0aGlzLnBhcmVudC5hcHBlbmQodGhpcy5zdHlsZSlcbiAgICB9XG4gICAgXG4gICAgY3JlYXRlVHJhY2soKTogdm9pZCB7XG4gICAgICAgIHRoaXMudHJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0aGlzLnRyYWNrLmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdHJhY2snKVxuICAgICAgICB0aGlzLnN0eWxlLmFwcGVuZCh0aGlzLnRyYWNrKVxuICAgIH1cbn1cblxuY2xhc3MgUHJvZ3Jlc3NCYXIge1xuICAgIGlzRG91YmxlOiBib29sZWFuXG4gICAgcGFyZW50OiBIVE1MRGl2RWxlbWVudFxuICAgIGJhciE6IEhUTUxEaXZFbGVtZW50XG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogSU9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5pc0RvdWJsZSA9IG9wdGlvbnMuaXNEb3VibGUgPyBvcHRpb25zLmlzRG91YmxlIDogZmFsc2VcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZ2Utc2xpZGVyX19zdHlsZScpIGFzIEhUTUxEaXZFbGVtZW50XG4gICAgfVxuICAgIGNyZWF0ZVByb2dyZXNzQmFyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRoaXMuYmFyLmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fcHJvZ3Jlc3MtYmFyJylcbiAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kKHRoaXMuYmFyKVxuICAgIH1cbiAgICBjYWxjUGVyY2VudCh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gKCh2YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKSkgKiAxMDBcbiAgICB9XG4gICAgc2V0RGVmYXVsdChwZXJjZW50OiBudW1iZXIsIHBlcmNlbnRSaWdodDogbnVtYmVyID0gTmFOKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy5iYXIuc3R5bGUucmlnaHQgPSAoMTAwIC0gcGVyY2VudCkgKyAnJSdcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLmxlZnQgPSBTdHJpbmcoMClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLmxlZnQgPSBwZXJjZW50ICsgJyUnXG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5yaWdodCA9ICgxMDAgLSBwZXJjZW50UmlnaHQpICsgJyUnXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0UmlnaHQocGVyY2VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy5iYXIuc3R5bGUubGVmdCA9IHBlcmNlbnQgKyAnJSdcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLnJpZ2h0ID0gU3RyaW5nKDApXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIFRodW1iIHtcbiAgICBpc0RvdWJsZTogYm9vbGVhblxuICAgIHBhcmVudDogSFRNTERpdkVsZW1lbnRcbiAgICB0aHVtYkRlZmF1bHQhOiBIVE1MRGl2RWxlbWVudFxuICAgIHRodW1iUmlnaHQhOiBIVE1MRGl2RWxlbWVudFxuXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogSU9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5pc0RvdWJsZSA9IG9wdGlvbnMuaXNEb3VibGUgPyBvcHRpb25zLmlzRG91YmxlIDogZmFsc2VcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZ2Utc2xpZGVyX19zdHlsZScpIGFzIEhUTUxEaXZFbGVtZW50XG4gICAgfVxuICAgIGNyZWF0ZVRodW1iKCkge1xuICAgICAgICBpZih0aGlzLmlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLnRodW1iRGVmYXVsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB0aGlzLnRodW1iRGVmYXVsdC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3RodW1iJylcbiAgICAgICAgICAgIHRoaXMudGh1bWJEZWZhdWx0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdGh1bWJfbGVmdCcpXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5hcHBlbmQodGhpcy50aHVtYkRlZmF1bHQpXG5cbiAgICAgICAgICAgIHRoaXMudGh1bWJSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB0aGlzLnRodW1iUmlnaHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYicpXG4gICAgICAgICAgICB0aGlzLnRodW1iUmlnaHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYl9yaWdodCcpXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5hcHBlbmQodGhpcy50aHVtYlJpZ2h0KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQuY2xhc3NOYW1lID0gJ3JhbmdlLXNsaWRlcl9fdGh1bWInXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5hcHBlbmQodGhpcy50aHVtYkRlZmF1bHQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcGxhY2VUaHVtYihwZXJjZW50OiBudW1iZXIsIHBlcmNlbnRSaWdodDogbnVtYmVyID0gTmFOKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGh1bWJEZWZhdWx0LnN0eWxlLmxlZnQgPSBwZXJjZW50ICsgJyUnXG4gICAgICAgIGlmICh0aGlzLmlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLnRodW1iUmlnaHQuc3R5bGUucmlnaHQgPSAoMTAwIC0gcGVyY2VudFJpZ2h0KSArICclJ1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQge0Zvcm0sIFN0eWxlcywgUHJvZ3Jlc3NCYXIsIFRodW1ifVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYwMDg1Nzk1ODg2MVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvaG9tZS94ZW5hL1JhbmdlLXNsaWRlci9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicmVsb2FkQWxsXCI6dHJ1ZSxcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=