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
	"./jquery.main.d.ts": "./jquery.main.d.ts",
	"./main.scss": "./main.scss",
	"./mvc/controller.ts": "./mvc/controller.ts",
	"./mvc/model.ts": "./mvc/model.ts",
	"./mvc/subViews.ts": "./mvc/subViews.ts",
	"./mvc/view.ts": "./mvc/view.ts"
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

/***/ "./jquery.main.d.ts":
/*!**************************!*\
  !*** ./jquery.main.d.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mvc_subViews_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mvc/subViews.ts */ "./mvc/subViews.ts");
/* harmony import */ var _mvc_view_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mvc/view.ts */ "./mvc/view.ts");
/* harmony import */ var _mvc_model_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mvc/model.ts */ "./mvc/model.ts");
/* harmony import */ var _mvc_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mvc/controller */ "./mvc/controller.ts");





(function ($) {
  $.fn.rangeSlider = function (settings) {
    var plugin = new _mvc_controller__WEBPACK_IMPORTED_MODULE_3__["Controller"](new _mvc_model_ts__WEBPACK_IMPORTED_MODULE_2__["Model"]({
      min: settings.min,
      max: settings.max,
      defaultValue: settings.initialValue || settings.leftValue,
      rightValue: settings.rightValue,
      isRange: settings.isRange,
      rightProgressBar: settings.rightProgressBar
    }), new _mvc_view_ts__WEBPACK_IMPORTED_MODULE_1__["View"](this, new _mvc_subViews_ts__WEBPACK_IMPORTED_MODULE_0__["Form"](), new _mvc_subViews_ts__WEBPACK_IMPORTED_MODULE_0__["Styles"](), new _mvc_subViews_ts__WEBPACK_IMPORTED_MODULE_0__["ProgressBar"](), new _mvc_subViews_ts__WEBPACK_IMPORTED_MODULE_0__["Thumb"]()));
    return plugin;
  };
})(jQuery);

$('#first-range-slider').rangeSlider({
  isRange: true,
  leftValue: 10,
  rightValue: 60
});
$('#second-range-slider').rangeSlider({
  isRange: true,
  leftValue: 40,
  rightValue: 70
});
$('#third-range-slider').rangeSlider({
  min: 0,
  max: 30,
  initialValue: 20,
  rightProgressBar: true
});
$('#forth-range-slider').rangeSlider({
  initialValue: 20,
  rightProgressBar: false
});

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

/***/ "./mvc/controller.ts":
/*!***************************!*\
  !*** ./mvc/controller.ts ***!
  \***************************/
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

      _this.model.subscribe(_this);

      _this.view.init();
    });

    this.model = model;
    this.view = view;
    this.view.options = this.model.dataForView;
    this.init();
  }

  _createClass(Controller, [{
    key: "updateModel",
    value: function updateModel(option, newValue) {
      if (this.model.isRange) {
        this.model.limitToggle(option, newValue);
      } else {
        this.model.defaultValue = newValue;
      }
    }
  }, {
    key: "updateView",
    value: function updateView() {
      this.view.options.defaultValue = this.model.defaultValue;
      this.view.options.rightValue = this.model.rightValue;
      this.view.setInput();
    }
  }]);

  return Controller;
}();



/***/ }),

/***/ "./mvc/model.ts":
/*!**********************!*\
  !*** ./mvc/model.ts ***!
  \**********************/
/*! exports provided: Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Model = /*#__PURE__*/function () {
  function Model(options) {
    _classCallCheck(this, Model);

    _defineProperty(this, "min", void 0);

    _defineProperty(this, "max", void 0);

    _defineProperty(this, "defaultValue", void 0);

    _defineProperty(this, "rightValue", void 0);

    _defineProperty(this, "isRange", void 0);

    _defineProperty(this, "rightProgressBar", void 0);

    _defineProperty(this, "dataForView", void 0);

    _defineProperty(this, "observers", void 0);

    this.min = options.min ? options.min : 0;
    this.max = options.max ? options.max : 100;
    this.defaultValue = options.defaultValue ? options.defaultValue : 50;
    this.rightValue = options.rightValue ? options.rightValue : 60;
    this.isRange = options.isRange ? options.isRange : false;
    this.rightProgressBar = options.rightProgressBar ? options.rightProgressBar : false;
    this.observers = [];
    this.dataForView = {
      min: this.min,
      max: this.max,
      defaultValue: this.defaultValue,
      rightValue: this.rightValue,
      isRange: this.isRange,
      rightProgressBar: this.rightProgressBar
    };
  }

  _createClass(Model, [{
    key: "subscribe",
    value: function subscribe(observer) {
      this.observers.push(observer);
    }
  }, {
    key: "limitToggle",
    value: function limitToggle(option, newValue) {
      switch (option) {
        case 'default':
          if (newValue < this.rightValue) {
            this.defaultValue = newValue;
          } else {
            this.observers.forEach(function (observer) {
              observer.updateView();
            });
          }

          break;

        case 'right':
          if (newValue > this.defaultValue) {
            this.rightValue = newValue;
          } else {
            this.observers.forEach(function (observer) {
              observer.updateView();
            });
          }

      }
    }
  }]);

  return Model;
}();



/***/ }),

/***/ "./mvc/subViews.ts":
/*!*************************!*\
  !*** ./mvc/subViews.ts ***!
  \*************************/
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

var Form = /*#__PURE__*/function () {
  function Form() {
    _classCallCheck(this, Form);

    _defineProperty(this, "form", void 0);

    _defineProperty(this, "defaultInput", void 0);

    _defineProperty(this, "rightInput", void 0);
  }

  _createClass(Form, [{
    key: "init",
    value: function init(parent, isDouble, min, max) {
      this.createForm(parent);
      this.createInput(isDouble);
      this.setMin(isDouble, min);
      this.setMax(isDouble, max);
    }
  }, {
    key: "createForm",
    value: function createForm(parent) {
      this.form = document.createElement('div');
      this.form.classList.add('range-slider__form');
      parent.append(this.form);
    }
  }, {
    key: "createInput",
    value: function createInput(isDouble) {
      if (isDouble) {
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
    value: function setInputValue(isDouble, value) {
      var rightValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : NaN;
      this.defaultInput.value = String(value);

      if (isDouble) {
        this.rightInput.value = String(rightValue);
      }
    }
  }, {
    key: "setMin",
    value: function setMin(isDouble, min) {
      this.defaultInput.min = String(min);

      if (isDouble) {
        this.rightInput.min = String(min);
      }
    }
  }, {
    key: "setMax",
    value: function setMax(isDouble) {
      var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
      this.defaultInput.max = String(max);

      if (isDouble) {
        this.rightInput.max = String(max);
      }
    }
  }]);

  return Form;
}();

var Styles = /*#__PURE__*/function () {
  function Styles() {
    _classCallCheck(this, Styles);

    _defineProperty(this, "style", void 0);

    _defineProperty(this, "track", void 0);
  }

  _createClass(Styles, [{
    key: "init",
    value: function init(parent) {
      this.createStyles(parent);
      this.createTrack();
    }
  }, {
    key: "createStyles",
    value: function createStyles(parent) {
      this.style = document.createElement('div');
      this.style.classList.add('range-slider__style');
      parent.append(this.style);
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
  function ProgressBar() {
    _classCallCheck(this, ProgressBar);

    _defineProperty(this, "bar", void 0);
  }

  _createClass(ProgressBar, [{
    key: "createProgressBar",
    value: function createProgressBar(parent) {
      this.bar = document.createElement('div');
      this.bar.classList.add('range-slider__progress-bar');
      parent.append(this.bar);
    }
  }, {
    key: "calcPercent",
    value: function calcPercent(value, min, max) {
      return (value - min) / (max - min) * 100;
    }
  }, {
    key: "setDefault",
    value: function setDefault(isDouble, percent) {
      var percentRight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : NaN;

      if (isDouble) {
        this.bar.style.left = percent + '%';
        this.bar.style.right = 100 - percentRight + '%';
      } else {
        this.bar.style.right = 100 - percent + '%';
        this.bar.style.left = String(0);
      }
    }
  }, {
    key: "setRight",
    value: function setRight(isDouble, percent) {
      if (!isDouble) {
        this.bar.style.left = percent + '%';
        this.bar.style.right = String(0);
      }
    }
  }]);

  return ProgressBar;
}();

var Thumb = /*#__PURE__*/function () {
  function Thumb() {
    _classCallCheck(this, Thumb);

    _defineProperty(this, "thumbDefault", void 0);

    _defineProperty(this, "thumbRight", void 0);
  }

  _createClass(Thumb, [{
    key: "createThumb",
    value: function createThumb(parent, isDouble) {
      if (isDouble) {
        this.thumbDefault = document.createElement('div');
        this.thumbDefault.classList.add('range-slider__thumb');
        this.thumbDefault.classList.add('range-slider__thumb_left');
        parent.append(this.thumbDefault);
        this.thumbRight = document.createElement('div');
        this.thumbRight.classList.add('range-slider__thumb');
        this.thumbRight.classList.add('range-slider__thumb_right');
        parent.append(this.thumbRight);
      } else {
        this.thumbDefault = document.createElement('div');
        this.thumbDefault.className = 'range-slider__thumb';
        parent.append(this.thumbDefault);
      }
    }
  }, {
    key: "placeThumb",
    value: function placeThumb(isDouble, percent) {
      var percentRight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : NaN;
      this.thumbDefault.style.left = percent + '%';

      if (isDouble) {
        this.thumbRight.style.right = 100 - percentRight + '%';
      }
    }
  }]);

  return Thumb;
}();



/***/ }),

/***/ "./mvc/view.ts":
/*!*********************!*\
  !*** ./mvc/view.ts ***!
  \*********************/
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
  function View(parent, form, styles, progressBar, thumb) {
    var _this = this;

    _classCallCheck(this, View);

    _defineProperty(this, "parent", void 0);

    _defineProperty(this, "wrapper", void 0);

    _defineProperty(this, "form", void 0);

    _defineProperty(this, "styles", void 0);

    _defineProperty(this, "progressBar", void 0);

    _defineProperty(this, "thumb", void 0);

    _defineProperty(this, "options", void 0);

    _defineProperty(this, "observers", void 0);

    _defineProperty(this, "init", function () {
      _this.createWrapper();

      _this.form.init(_this.wrapper, _this.options.isRange, _this.options.min, _this.options.max);

      _this.styles.init(_this.wrapper);

      _this.progressBar.createProgressBar(_this.styles.style);

      _this.thumb.createThumb(_this.styles.style, _this.options.isRange);

      _this.setInput();

      _this.eventInput();

      _this.eventClick();
    });

    _defineProperty(this, "createWrapper", function () {
      _this.wrapper = document.createElement('div');

      _this.wrapper.classList.add('range-slider');

      _this.parent.append(_this.wrapper);
    });

    _defineProperty(this, "setInput", function () {
      _this.form.setInputValue(_this.options.isRange, _this.options.defaultValue, _this.options.rightValue);

      var placeDefault = _this.progressBar.calcPercent(Number(_this.form.defaultInput.value), Number(_this.form.defaultInput.min), Number(_this.form.defaultInput.max));

      var placeRight = _this.form.rightInput ? _this.progressBar.calcPercent(Number(_this.form.rightInput.value), Number(_this.form.rightInput.min), Number(_this.form.rightInput.max)) : NaN;

      _this.progressBar.setDefault(_this.options.isRange, placeDefault, placeRight);

      if (_this.options.rightProgressBar) {
        _this.progressBar.setRight(_this.options.isRange, placeDefault);
      }

      _this.thumb.placeThumb(_this.options.isRange, placeDefault, placeRight);
    });

    _defineProperty(this, "eventInput", function () {
      _this.form.defaultInput.addEventListener('input', function () {
        _this.options.defaultValue = Number(_this.form.defaultInput.value);

        _this.setInput();

        _this.observers.forEach(function (observer) {
          observer.updateModel('default', Number(_this.form.defaultInput.value));
        });
      });

      if (_this.options.isRange) {
        _this.form.rightInput.addEventListener('input', function () {
          _this.options.rightValue = Number(_this.form.rightInput.value);

          _this.setInput();

          _this.observers.forEach(function (observer) {
            observer.updateModel('right', Number(_this.form.rightInput.value));
          });
        });
      }
    });

    _defineProperty(this, "eventClick", function () {
      var coords = _this.styles.track.getBoundingClientRect();

      var length = coords.right - coords.left;
      var currentPosition;
      var percent;

      _this.styles.track.onmousedown = function (e) {
        currentPosition = e.pageX - coords.left;
        percent = currentPosition / length * 100;

        _this.thumb.placeThumb(_this.options.isRange, percent);

        _this.progressBar.setDefault(_this.options.isRange, percent);
      };

      _this.progressBar.bar.onmousemove = function (e) {
        currentPosition = e.pageX - coords.left;
        percent = currentPosition / length * 100;

        _this.thumb.placeThumb(_this.options.isRange, percent);

        _this.progressBar.setDefault(_this.options.isRange, percent);
      };
    });

    this.parent = parent;
    this.form = form;
    this.styles = styles;
    this.progressBar = progressBar;
    this.thumb = thumb; // default data

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4gc3luYyBcXC4odHN8c2NzcykkIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2pxdWVyeS5tYWluLmQudHMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5zY3NzIiwid2VicGFjazovLy8uL212Yy9jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL212Yy9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9tdmMvc3ViVmlld3MudHMiLCJ3ZWJwYWNrOi8vLy4vbXZjL3ZpZXcudHMiXSwibmFtZXMiOlsiaW1wb3J0QWxsIiwiciIsImtleXMiLCJmb3JFYWNoIiwicmVxdWlyZSIsIiQiLCJmbiIsInJhbmdlU2xpZGVyIiwic2V0dGluZ3MiLCJwbHVnaW4iLCJDb250cm9sbGVyIiwiTW9kZWwiLCJtaW4iLCJtYXgiLCJkZWZhdWx0VmFsdWUiLCJpbml0aWFsVmFsdWUiLCJsZWZ0VmFsdWUiLCJyaWdodFZhbHVlIiwiaXNSYW5nZSIsInJpZ2h0UHJvZ3Jlc3NCYXIiLCJWaWV3IiwiRm9ybSIsIlN0eWxlcyIsIlByb2dyZXNzQmFyIiwiVGh1bWIiLCJqUXVlcnkiLCJtb2RlbCIsInZpZXciLCJzdWJzY3JpYmUiLCJpbml0Iiwib3B0aW9ucyIsImRhdGFGb3JWaWV3Iiwib3B0aW9uIiwibmV3VmFsdWUiLCJsaW1pdFRvZ2dsZSIsInNldElucHV0Iiwib2JzZXJ2ZXJzIiwib2JzZXJ2ZXIiLCJwdXNoIiwidXBkYXRlVmlldyIsInBhcmVudCIsImlzRG91YmxlIiwiY3JlYXRlRm9ybSIsImNyZWF0ZUlucHV0Iiwic2V0TWluIiwic2V0TWF4IiwiZm9ybSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsImRlZmF1bHRJbnB1dCIsInR5cGUiLCJyaWdodElucHV0IiwidmFsdWUiLCJOYU4iLCJTdHJpbmciLCJjcmVhdGVTdHlsZXMiLCJjcmVhdGVUcmFjayIsInN0eWxlIiwidHJhY2siLCJiYXIiLCJwZXJjZW50IiwicGVyY2VudFJpZ2h0IiwibGVmdCIsInJpZ2h0IiwidGh1bWJEZWZhdWx0IiwidGh1bWJSaWdodCIsImNsYXNzTmFtZSIsInN0eWxlcyIsInByb2dyZXNzQmFyIiwidGh1bWIiLCJjcmVhdGVXcmFwcGVyIiwid3JhcHBlciIsImNyZWF0ZVByb2dyZXNzQmFyIiwiY3JlYXRlVGh1bWIiLCJldmVudElucHV0IiwiZXZlbnRDbGljayIsInNldElucHV0VmFsdWUiLCJwbGFjZURlZmF1bHQiLCJjYWxjUGVyY2VudCIsIk51bWJlciIsInBsYWNlUmlnaHQiLCJzZXREZWZhdWx0Iiwic2V0UmlnaHQiLCJwbGFjZVRodW1iIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVwZGF0ZU1vZGVsIiwiY29vcmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGVuZ3RoIiwiY3VycmVudFBvc2l0aW9uIiwib25tb3VzZWRvd24iLCJlIiwicGFnZVgiLCJvbm1vdXNlbW92ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNB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YixDQUxpRyxDQU9yRzs7QUFDSSxTQUFLMUMsT0FBTCxHQUFlO0FBQ1hsQixTQUFHLEVBQUUsQ0FETTtBQUVYQyxTQUFHLEVBQUUsR0FGTTtBQUdYQyxrQkFBWSxFQUFFLEVBSEg7QUFJWEcsZ0JBQVUsRUFBRSxFQUpEO0FBS1hDLGFBQU8sRUFBRSxJQUxFO0FBTVhDLHNCQUFnQixFQUFFO0FBTlAsS0FBZjtBQVNBLFNBQUtpQixTQUFMLEdBQWlCLEVBQWpCO0FBQ0g7Ozs7OEJBQ1NDLFEsRUFBeUI7QUFDL0IsV0FBS0QsU0FBTCxDQUFlRSxJQUFmLENBQW9CRCxRQUFwQjtBQUNIIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2pxdWVyeS5tYWluLmQudHNcIjogXCIuL2pxdWVyeS5tYWluLmQudHNcIixcblx0XCIuL21haW4uc2Nzc1wiOiBcIi4vbWFpbi5zY3NzXCIsXG5cdFwiLi9tdmMvY29udHJvbGxlci50c1wiOiBcIi4vbXZjL2NvbnRyb2xsZXIudHNcIixcblx0XCIuL212Yy9tb2RlbC50c1wiOiBcIi4vbXZjL21vZGVsLnRzXCIsXG5cdFwiLi9tdmMvc3ViVmlld3MudHNcIjogXCIuL212Yy9zdWJWaWV3cy50c1wiLFxuXHRcIi4vbXZjL3ZpZXcudHNcIjogXCIuL212Yy92aWV3LnRzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgcmVjdXJzaXZlIFxcXFwuKHRzfHNjc3MpJFwiOyIsImZ1bmN0aW9uIGltcG9ydEFsbChyKSB7XG4gIHIua2V5cygpLmZvckVhY2gocilcbn1cblxuaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi8nLCB0cnVlLCAvXFwuKHRzfHNjc3MpJC8pKSIsIlxuaW1wb3J0IHtGb3JtLCBTdHlsZXMsIFByb2dyZXNzQmFyLCBUaHVtYn0gZnJvbSAnLi9tdmMvc3ViVmlld3MudHMnXG5pbXBvcnQge1ZpZXd9IGZyb20gJy4vbXZjL3ZpZXcudHMnXG5pbXBvcnQge01vZGVsfSBmcm9tICcuL212Yy9tb2RlbC50cydcbmltcG9ydCB7Q29udHJvbGxlcn0gZnJvbSAnLi9tdmMvY29udHJvbGxlcidcblxuXG4oZnVuY3Rpb24oJDogSlF1ZXJ5U3RhdGljKSB7XG4gICAgJC5mbi5yYW5nZVNsaWRlciA9IGZ1bmN0aW9uKHNldHRpbmdzOiB7XG4gICAgICAgIG1pbj86IG51bWJlclxuICAgICAgICBtYXg/OiBudW1iZXJcbiAgICAgICAgaW5pdGlhbFZhbHVlPzogbnVtYmVyXG4gICAgICAgIGxlZnRWYWx1ZT86IG51bWJlclxuICAgICAgICBkZWZhdWx0VmFsdWU/OiBudW1iZXJcbiAgICAgICAgcmlnaHRWYWx1ZT86IG51bWJlclxuICAgICAgICBpc1JhbmdlPzogYm9vbGVhblxuICAgICAgICByaWdodFByb2dyZXNzQmFyPzogYm9vbGVhblxuICAgIH0pIHtcbiAgICAgICAgY29uc3QgcGx1Z2luID0gbmV3IENvbnRyb2xsZXIoXG4gICAgICAgICAgICBuZXcgTW9kZWwoe1xuICAgICAgICAgICAgICAgIG1pbjogc2V0dGluZ3MubWluLFxuICAgICAgICAgICAgICAgIG1heDogc2V0dGluZ3MubWF4LFxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogc2V0dGluZ3MuaW5pdGlhbFZhbHVlIHx8IHNldHRpbmdzLmxlZnRWYWx1ZSxcbiAgICAgICAgICAgICAgICByaWdodFZhbHVlOiBzZXR0aW5ncy5yaWdodFZhbHVlLFxuICAgICAgICAgICAgICAgIGlzUmFuZ2U6IHNldHRpbmdzLmlzUmFuZ2UsXG4gICAgICAgICAgICAgICAgcmlnaHRQcm9ncmVzc0Jhcjogc2V0dGluZ3MucmlnaHRQcm9ncmVzc0JhclxuICAgICAgICAgICAgfSksIFxuICAgICAgICAgICAgbmV3IFZpZXcoIFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgbmV3IEZvcm0oKSxcbiAgICAgICAgICAgICAgICBuZXcgU3R5bGVzKCksXG4gICAgICAgICAgICAgICAgbmV3IFByb2dyZXNzQmFyKCksXG4gICAgICAgICAgICAgICAgbmV3IFRodW1iKCkgXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIHBsdWdpblxuICAgIH1cbn0pKGpRdWVyeSlcblxuJCgnI2ZpcnN0LXJhbmdlLXNsaWRlcicpLnJhbmdlU2xpZGVyKHtcbiAgICBpc1JhbmdlOiB0cnVlLFxuICAgIGxlZnRWYWx1ZTogMTAsXG4gICAgcmlnaHRWYWx1ZTogNjBcbn0pXG4kKCcjc2Vjb25kLXJhbmdlLXNsaWRlcicpLnJhbmdlU2xpZGVyKHtcbiAgICBpc1JhbmdlOiB0cnVlLFxuICAgIGxlZnRWYWx1ZTogNDAsXG4gICAgcmlnaHRWYWx1ZTogNzBcbn0pXG4kKCcjdGhpcmQtcmFuZ2Utc2xpZGVyJykucmFuZ2VTbGlkZXIoe1xuICAgIG1pbjogMCxcbiAgICBtYXg6IDMwLFxuICAgIGluaXRpYWxWYWx1ZTogMjAsXG4gICAgcmlnaHRQcm9ncmVzc0JhcjogdHJ1ZVxufSlcbiQoJyNmb3J0aC1yYW5nZS1zbGlkZXInKS5yYW5nZVNsaWRlcih7XG4gICAgaW5pdGlhbFZhbHVlOiAyMCxcbiAgICByaWdodFByb2dyZXNzQmFyOiBmYWxzZVxufSlcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MDA5ODMzOTE4NzFcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL2hvbWUveGVuYS9SYW5nZS1zbGlkZXIvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInJlbG9hZEFsbFwiOnRydWUsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJpbXBvcnQge01vZGVsfSBmcm9tICcuL21vZGVsJ1xuaW1wb3J0IHtWaWV3fSBmcm9tICcuL3ZpZXcnXG5cbmNsYXNzIENvbnRyb2xsZXIge1xuICAgIG1vZGVsOiBNb2RlbFxuICAgIHZpZXc6IFZpZXdcbiAgICBjb25zdHJ1Y3Rvcihtb2RlbDogTW9kZWwsIHZpZXc6IFZpZXcpIHtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsXG4gICAgICAgIHRoaXMudmlldyA9IHZpZXdcbiAgICAgICAgdGhpcy52aWV3Lm9wdGlvbnMgPSB0aGlzLm1vZGVsLmRhdGFGb3JWaWV3XG4gICAgICAgIHRoaXMuaW5pdCgpIFxuICAgIH1cbiAgICBpbml0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnZpZXcuc3Vic2NyaWJlKHRoaXMpXG4gICAgICAgIHRoaXMubW9kZWwuc3Vic2NyaWJlKHRoaXMpXG4gICAgICAgIHRoaXMudmlldy5pbml0KClcbiAgICB9XG4gICAgdXBkYXRlTW9kZWwob3B0aW9uOiBzdHJpbmcsIG5ld1ZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMubW9kZWwuaXNSYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5saW1pdFRvZ2dsZShvcHRpb24sIG5ld1ZhbHVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5kZWZhdWx0VmFsdWUgPSBuZXdWYWx1ZVxuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZVZpZXcoKSB7XG4gICAgICAgIHRoaXMudmlldy5vcHRpb25zLmRlZmF1bHRWYWx1ZSA9IHRoaXMubW9kZWwuZGVmYXVsdFZhbHVlXG4gICAgICAgIHRoaXMudmlldy5vcHRpb25zLnJpZ2h0VmFsdWUgPSB0aGlzLm1vZGVsLnJpZ2h0VmFsdWVcbiAgICAgICAgdGhpcy52aWV3LnNldElucHV0KClcbiAgICB9XG59XG5cbmV4cG9ydCB7Q29udHJvbGxlcn0iLCJpbnRlcmZhY2UgSURhdGEge1xuICAgIG1pbjogbnVtYmVyXG4gICAgbWF4OiBudW1iZXJcbiAgICBkZWZhdWx0VmFsdWU6IG51bWJlclxuICAgIHJpZ2h0VmFsdWU6IG51bWJlclxuICAgIGlzUmFuZ2U6IGJvb2xlYW5cbiAgICByaWdodFByb2dyZXNzQmFyOiBib29sZWFuXG59XG5pbnRlcmZhY2UgSU9ic2VydmVyTW9kZWwge1xuICAgIHVwZGF0ZVZpZXcoKTogdm9pZFxufVxuXG5jbGFzcyBNb2RlbCB7XG4gICAgbWluOiBudW1iZXJcbiAgICBtYXg6IG51bWJlclxuICAgIGRlZmF1bHRWYWx1ZTogbnVtYmVyXG4gICAgcmlnaHRWYWx1ZTogbnVtYmVyXG4gICAgaXNSYW5nZTogYm9vbGVhblxuICAgIHJpZ2h0UHJvZ3Jlc3NCYXI6IGJvb2xlYW5cbiAgICBkYXRhRm9yVmlldzogSURhdGFcbiAgICBvYnNlcnZlcnM6IElPYnNlcnZlck1vZGVsW11cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJRGF0YSkge1xuICAgICAgICB0aGlzLm1pbiA9IG9wdGlvbnMubWluID8gb3B0aW9ucy5taW4gOiAwXG4gICAgICAgIHRoaXMubWF4ID0gb3B0aW9ucy5tYXggPyBvcHRpb25zLm1heCA6IDEwMFxuICAgICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IG9wdGlvbnMuZGVmYXVsdFZhbHVlID8gb3B0aW9ucy5kZWZhdWx0VmFsdWUgOiA1MFxuICAgICAgICB0aGlzLnJpZ2h0VmFsdWUgPSBvcHRpb25zLnJpZ2h0VmFsdWUgPyBvcHRpb25zLnJpZ2h0VmFsdWUgOiA2MFxuICAgICAgICB0aGlzLmlzUmFuZ2UgPSBvcHRpb25zLmlzUmFuZ2UgPyBvcHRpb25zLmlzUmFuZ2UgOiBmYWxzZVxuICAgICAgICB0aGlzLnJpZ2h0UHJvZ3Jlc3NCYXIgPSBvcHRpb25zLnJpZ2h0UHJvZ3Jlc3NCYXIgPyBvcHRpb25zLnJpZ2h0UHJvZ3Jlc3NCYXIgOiBmYWxzZVxuICAgICAgICB0aGlzLm9ic2VydmVycyA9IFtdXG4gICAgICAgIHRoaXMuZGF0YUZvclZpZXcgPSB7XG4gICAgICAgICAgICBtaW46IHRoaXMubWluLFxuICAgICAgICAgICAgbWF4OiB0aGlzLm1heCxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdGhpcy5kZWZhdWx0VmFsdWUsXG4gICAgICAgICAgICByaWdodFZhbHVlOiB0aGlzLnJpZ2h0VmFsdWUsXG4gICAgICAgICAgICBpc1JhbmdlOiB0aGlzLmlzUmFuZ2UsXG4gICAgICAgICAgICByaWdodFByb2dyZXNzQmFyOiB0aGlzLnJpZ2h0UHJvZ3Jlc3NCYXJcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdWJzY3JpYmUob2JzZXJ2ZXI6IElPYnNlcnZlck1vZGVsKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpXG4gICAgfVxuICAgIGxpbWl0VG9nZ2xlKG9wdGlvbjogc3RyaW5nLCBuZXdWYWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHN3aXRjaCAob3B0aW9uKSB7XG4gICAgICAgICAgICBjYXNlKCdkZWZhdWx0Jyk6XG5cbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUgPCB0aGlzLnJpZ2h0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0VmFsdWUgPSBuZXdWYWx1ZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudXBkYXRlVmlldygpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UoJ3JpZ2h0Jyk6XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUgPiB0aGlzLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0VmFsdWUgPSBuZXdWYWx1ZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudXBkYXRlVmlldygpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufVxuXG5leHBvcnQge01vZGVsfSIsImNsYXNzIEZvcm0ge1xuICAgIGZvcm0hOiBIVE1MRGl2RWxlbWVudFxuICAgIGRlZmF1bHRJbnB1dCE6IEhUTUxJbnB1dEVsZW1lbnRcbiAgICByaWdodElucHV0ITogSFRNTElucHV0RWxlbWVudFxuXG4gICAgaW5pdChwYXJlbnQ6IEhUTUxEaXZFbGVtZW50LCBpc0RvdWJsZTogYm9vbGVhbiwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3JlYXRlRm9ybShwYXJlbnQpXG4gICAgICAgIHRoaXMuY3JlYXRlSW5wdXQoaXNEb3VibGUpXG4gICAgICAgIHRoaXMuc2V0TWluKGlzRG91YmxlLCBtaW4pXG4gICAgICAgIHRoaXMuc2V0TWF4KGlzRG91YmxlLCBtYXgpXG4gICAgfVxuXG4gICAgY3JlYXRlRm9ybShwYXJlbnQ6IEhUTUxEaXZFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZm9ybSA9IDxIVE1MRGl2RWxlbWVudD4oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpXG4gICAgICAgIHRoaXMuZm9ybS5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2Zvcm0nKVxuICAgICAgICBwYXJlbnQuYXBwZW5kKHRoaXMuZm9ybSlcbiAgICB9XG4gICAgXG4gICAgY3JlYXRlSW5wdXQoaXNEb3VibGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKGlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0LnR5cGUgPSAncmFuZ2UnXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0JykgXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0X2xlZnQnKVxuICAgICAgICAgICAgdGhpcy5mb3JtLmFwcGVuZCh0aGlzLmRlZmF1bHRJbnB1dClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0LnR5cGUgPSAncmFuZ2UnXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19pbnB1dCcpXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19pbnB1dF9yaWdodCcpXG4gICAgICAgICAgICB0aGlzLmZvcm0uYXBwZW5kKHRoaXMucmlnaHRJbnB1dClcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC50eXBlID0gJ3JhbmdlJ1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19pbnB1dCcpXG4gICAgICAgICAgICB0aGlzLmZvcm0uYXBwZW5kKHRoaXMuZGVmYXVsdElucHV0KVxuICAgICAgICB9XG4gICAgfVxuICAgIHNldElucHV0VmFsdWUoaXNEb3VibGU6IGJvb2xlYW4sIHZhbHVlOiBudW1iZXIsIHJpZ2h0VmFsdWU6IG51bWJlciA9IE5hTik6IHZvaWQge1xuICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC52YWx1ZSA9IFN0cmluZyh2YWx1ZSlcbiAgICAgICAgaWYgKGlzRG91YmxlKSB7ICAgXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQudmFsdWUgPSBTdHJpbmcocmlnaHRWYWx1ZSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRNaW4oaXNEb3VibGU6IGJvb2xlYW4sIG1pbjogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVmYXVsdElucHV0Lm1pbiA9IFN0cmluZyhtaW4pXG4gICAgICAgIGlmIChpc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0Lm1pbiA9IFN0cmluZyhtaW4pXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0TWF4KGlzRG91YmxlOiBib29sZWFuLCBtYXg6IG51bWJlciA9IDEwMCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC5tYXggPSBTdHJpbmcobWF4KVxuICAgICAgICBpZiAoaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHRJbnB1dC5tYXggPSBTdHJpbmcobWF4KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBTdHlsZXMge1xuICAgIHN0eWxlITogSFRNTERpdkVsZW1lbnRcbiAgICB0cmFjayE6IEhUTUxEaXZFbGVtZW50XG5cbiAgICBpbml0KHBhcmVudDogSFRNTERpdkVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVTdHlsZXMocGFyZW50KVxuICAgICAgICB0aGlzLmNyZWF0ZVRyYWNrKClcbiAgICB9XG4gICAgXG4gICAgY3JlYXRlU3R5bGVzKHBhcmVudDogSFRNTERpdkVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRoaXMuc3R5bGUuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19zdHlsZScpXG4gICAgICAgIHBhcmVudC5hcHBlbmQodGhpcy5zdHlsZSlcbiAgICB9XG4gICAgXG4gICAgY3JlYXRlVHJhY2soKTogdm9pZCB7XG4gICAgICAgIHRoaXMudHJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0aGlzLnRyYWNrLmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdHJhY2snKVxuICAgICAgICB0aGlzLnN0eWxlLmFwcGVuZCh0aGlzLnRyYWNrKVxuICAgIH1cbn1cblxuY2xhc3MgUHJvZ3Jlc3NCYXIge1xuICAgIGJhciE6IEhUTUxEaXZFbGVtZW50XG4gICAgY3JlYXRlUHJvZ3Jlc3NCYXIocGFyZW50OiBIVE1MRGl2RWxlbWVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRoaXMuYmFyLmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fcHJvZ3Jlc3MtYmFyJylcbiAgICAgICAgcGFyZW50LmFwcGVuZCh0aGlzLmJhcilcbiAgICB9XG4gICAgY2FsY1BlcmNlbnQodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuICgodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbikpICogMTAwXG4gICAgfVxuICAgIHNldERlZmF1bHQoaXNEb3VibGU6IGJvb2xlYW4sIHBlcmNlbnQ6IG51bWJlciwgcGVyY2VudFJpZ2h0OiBudW1iZXIgPSBOYU4pOiB2b2lkIHtcbiAgICAgICAgaWYgKGlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5sZWZ0ID0gcGVyY2VudCArICclJ1xuICAgICAgICAgICAgdGhpcy5iYXIuc3R5bGUucmlnaHQgPSAoMTAwIC0gcGVyY2VudFJpZ2h0KSArICclJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5iYXIuc3R5bGUucmlnaHQgPSAoMTAwIC0gcGVyY2VudCkgKyAnJSdcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLmxlZnQgPSBTdHJpbmcoMClcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRSaWdodChpc0RvdWJsZTogYm9vbGVhbiwgcGVyY2VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICghaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLmxlZnQgPSBwZXJjZW50ICsgJyUnXG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5yaWdodCA9IFN0cmluZygwKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBUaHVtYiB7XG5cbiAgICB0aHVtYkRlZmF1bHQhOiBIVE1MRGl2RWxlbWVudFxuICAgIHRodW1iUmlnaHQhOiBIVE1MRGl2RWxlbWVudFxuXG4gICAgY3JlYXRlVGh1bWIocGFyZW50OiBIVE1MRGl2RWxlbWVudCwgaXNEb3VibGU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYoaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMudGh1bWJEZWZhdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHRoaXMudGh1bWJEZWZhdWx0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdGh1bWInKVxuICAgICAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYl9sZWZ0JylcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmQodGhpcy50aHVtYkRlZmF1bHQpXG5cbiAgICAgICAgICAgIHRoaXMudGh1bWJSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB0aGlzLnRodW1iUmlnaHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYicpXG4gICAgICAgICAgICB0aGlzLnRodW1iUmlnaHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYl9yaWdodCcpXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kKHRoaXMudGh1bWJSaWdodClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGh1bWJEZWZhdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHRoaXMudGh1bWJEZWZhdWx0LmNsYXNzTmFtZSA9ICdyYW5nZS1zbGlkZXJfX3RodW1iJ1xuICAgICAgICAgICAgcGFyZW50LmFwcGVuZCh0aGlzLnRodW1iRGVmYXVsdClcbiAgICAgICAgfVxuICAgIH1cbiAgICBwbGFjZVRodW1iKGlzRG91YmxlOiBib29sZWFuLCBwZXJjZW50OiBudW1iZXIsIHBlcmNlbnRSaWdodDogbnVtYmVyID0gTmFOKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGh1bWJEZWZhdWx0LnN0eWxlLmxlZnQgPSBwZXJjZW50ICsgJyUnXG4gICAgICAgIGlmIChpc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy50aHVtYlJpZ2h0LnN0eWxlLnJpZ2h0ID0gKDEwMCAtIHBlcmNlbnRSaWdodCkgKyAnJSdcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHtGb3JtLCBTdHlsZXMsIFByb2dyZXNzQmFyLCBUaHVtYn0iLCJpbXBvcnQgeyBldmVudCB9IGZyb20gJ2pxdWVyeSdcbmltcG9ydCB7Rm9ybSwgU3R5bGVzLCBQcm9ncmVzc0JhciwgVGh1bWJ9IGZyb20gJy4vc3ViVmlld3MnXG5cbmludGVyZmFjZSBJRGF0YSB7XG4gICAgbWluOiBudW1iZXJcbiAgICBtYXg6IG51bWJlclxuICAgIGRlZmF1bHRWYWx1ZTogbnVtYmVyXG4gICAgcmlnaHRWYWx1ZTogbnVtYmVyXG4gICAgaXNSYW5nZTogYm9vbGVhblxuICAgIHJpZ2h0UHJvZ3Jlc3NCYXI6IGJvb2xlYW5cbn1cbmludGVyZmFjZSBJT2JzZXJ2ZXJWaWV3IHtcbiAgICB1cGRhdGVNb2RlbChhcmcwOiBzdHJpbmcsIGFyZzE6IG51bWJlcik6IHZvaWRcbn1cblxuY2xhc3MgVmlldyB7XG4gICAgcGFyZW50OiBIVE1MRWxlbWVudFxuICAgIHdyYXBwZXIhOiBIVE1MRGl2RWxlbWVudFxuXG4gICAgZm9ybTogRm9ybVxuICAgIHN0eWxlczogU3R5bGVzXG4gICAgcHJvZ3Jlc3NCYXI6IFByb2dyZXNzQmFyXG4gICAgdGh1bWI6IFRodW1iXG4gICAgb3B0aW9uczogSURhdGFcbiAgICBvYnNlcnZlcnM6IElPYnNlcnZlclZpZXdbXVxuICAgIGNvbnN0cnVjdG9yKHBhcmVudDogSFRNTEVsZW1lbnQsIGZvcm06IEZvcm0sIHN0eWxlczogU3R5bGVzLCBwcm9ncmVzc0JhcjogUHJvZ3Jlc3NCYXIsIHRodW1iOiBUaHVtYikge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudFxuICAgICAgICB0aGlzLmZvcm0gPSBmb3JtXG4gICAgICAgIHRoaXMuc3R5bGVzID0gc3R5bGVzXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSBwcm9ncmVzc0JhclxuICAgICAgICB0aGlzLnRodW1iID0gdGh1bWJcblxuICAgIC8vIGRlZmF1bHQgZGF0YVxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogMTAsXG4gICAgICAgICAgICByaWdodFZhbHVlOiA1MCxcbiAgICAgICAgICAgIGlzUmFuZ2U6IHRydWUsXG4gICAgICAgICAgICByaWdodFByb2dyZXNzQmFyOiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXVxuICAgIH1cbiAgICBzdWJzY3JpYmUob2JzZXJ2ZXI6IElPYnNlcnZlclZpZXcpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChvYnNlcnZlcilcbiAgICB9XG4gICAgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5jcmVhdGVXcmFwcGVyKClcblxuICAgICAgICB0aGlzLmZvcm0uaW5pdChcbiAgICAgICAgICAgIHRoaXMud3JhcHBlciwgXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaXNSYW5nZSwgXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubWluLCBcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tYXhcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnN0eWxlcy5pbml0KHRoaXMud3JhcHBlcilcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5jcmVhdGVQcm9ncmVzc0Jhcih0aGlzLnN0eWxlcy5zdHlsZSlcbiAgICAgICAgdGhpcy50aHVtYi5jcmVhdGVUaHVtYih0aGlzLnN0eWxlcy5zdHlsZSwgdGhpcy5vcHRpb25zLmlzUmFuZ2UpXG4gICAgICAgIFxuICAgICAgICBcblxuICAgICAgICB0aGlzLnNldElucHV0KClcbiAgICAgICAgdGhpcy5ldmVudElucHV0KClcbiAgICAgICAgdGhpcy5ldmVudENsaWNrKClcbiAgXG4gICAgfSBcblxuICAgIGNyZWF0ZVdyYXBwZXIgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMud3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRoaXMud3JhcHBlci5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXInKVxuICAgICAgICB0aGlzLnBhcmVudC5hcHBlbmQodGhpcy53cmFwcGVyKVxuICAgIH1cblxuICAgIHNldElucHV0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmZvcm0uc2V0SW5wdXRWYWx1ZSh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgdGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSwgdGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBwbGFjZURlZmF1bHQ6IG51bWJlciA9IHRoaXMucHJvZ3Jlc3NCYXIuY2FsY1BlcmNlbnQoXG4gICAgICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0LnZhbHVlKSwgXG4gICAgICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0Lm1pbiksIFxuICAgICAgICAgICAgICAgICAgICBOdW1iZXIodGhpcy5mb3JtLmRlZmF1bHRJbnB1dC5tYXgpKVxuICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICBjb25zdCBwbGFjZVJpZ2h0OiBudW1iZXIgPSB0aGlzLmZvcm0ucmlnaHRJbnB1dCA/IFxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5jYWxjUGVyY2VudChcbiAgICAgICAgICAgICAgICBOdW1iZXIodGhpcy5mb3JtLnJpZ2h0SW5wdXQudmFsdWUpLCBcbiAgICAgICAgICAgICAgICBOdW1iZXIodGhpcy5mb3JtLnJpZ2h0SW5wdXQubWluKSwgXG4gICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5yaWdodElucHV0Lm1heCkpIFxuICAgICAgICAgICAgICAgIDogTmFOIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuc2V0RGVmYXVsdCh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGxhY2VEZWZhdWx0LCBwbGFjZVJpZ2h0KVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yaWdodFByb2dyZXNzQmFyKSB7IFxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5zZXRSaWdodCh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGxhY2VEZWZhdWx0KSBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGh1bWIucGxhY2VUaHVtYih0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGxhY2VEZWZhdWx0LCBwbGFjZVJpZ2h0KVxuXG4gICAgICAgIFxuICAgIH1cbiAgICBldmVudElucHV0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmZvcm0uZGVmYXVsdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSA9IE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0LnZhbHVlKVxuICAgICAgICAgICAgdGhpcy5zZXRJbnB1dCgpXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci51cGRhdGVNb2RlbCgnZGVmYXVsdCcsIE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0LnZhbHVlKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNSYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtLnJpZ2h0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUgPSBOdW1iZXIodGhpcy5mb3JtLnJpZ2h0SW5wdXQudmFsdWUpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJbnB1dCgpXG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVwZGF0ZU1vZGVsKCdyaWdodCcsIE51bWJlcih0aGlzLmZvcm0ucmlnaHRJbnB1dC52YWx1ZSkpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgZXZlbnRDbGljayA9ICgpID0+IHtcbiAgICAgICAgbGV0IGNvb3JkczogRE9NUmVjdCA9IHRoaXMuc3R5bGVzLnRyYWNrLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIGxldCBsZW5ndGg6IG51bWJlciA9IGNvb3Jkcy5yaWdodCAtIGNvb3Jkcy5sZWZ0XG4gICAgICAgIGxldCBjdXJyZW50UG9zaXRpb246IG51bWJlciAgICAgXG4gICAgICAgIGxldCBwZXJjZW50OiBudW1iZXIgIFxuICAgICAgICB0aGlzLnN0eWxlcy50cmFjay5vbm1vdXNlZG93biA9IGUgPT4ge1xuICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uID0gZS5wYWdlWCAtIGNvb3Jkcy5sZWZ0XG4gICAgICAgICAgICBwZXJjZW50ID0gY3VycmVudFBvc2l0aW9uL2xlbmd0aCAqIDEwMFxuICAgICAgICAgICAgdGhpcy50aHVtYi5wbGFjZVRodW1iKHRoaXMub3B0aW9ucy5pc1JhbmdlLCBwZXJjZW50KVxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5zZXREZWZhdWx0KHRoaXMub3B0aW9ucy5pc1JhbmdlLCBwZXJjZW50KVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuYmFyLm9ubW91c2Vtb3ZlID0gZSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50UG9zaXRpb24gPSBlLnBhZ2VYIC0gY29vcmRzLmxlZnRcbiAgICAgICAgICAgIHBlcmNlbnQgPSBjdXJyZW50UG9zaXRpb24vbGVuZ3RoICogMTAwXG4gICAgICAgICAgICB0aGlzLnRodW1iLnBsYWNlVGh1bWIodGhpcy5vcHRpb25zLmlzUmFuZ2UsIHBlcmNlbnQpXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnNldERlZmF1bHQodGhpcy5vcHRpb25zLmlzUmFuZ2UsIHBlcmNlbnQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCB7Vmlld31cbiJdLCJzb3VyY2VSb290IjoiIn0=