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

      console.log(this.model.rightValue, this.view.options.rightValue, this.view.form.rightInput.value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4gc3luYyBcXC4odHN8c2NzcykkIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2pxdWVyeS5tYWluLmQudHMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5zY3NzIiwid2VicGFjazovLy8uL212Yy9jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL212Yy9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9tdmMvc3ViVmlld3MudHMiLCJ3ZWJwYWNrOi8vLy4vbXZjL3ZpZXcudHMiXSwibmFtZXMiOlsiaW1wb3J0QWxsIiwiciIsImtleXMiLCJmb3JFYWNoIiwicmVxdWlyZSIsIiQiLCJmbiIsInJhbmdlU2xpZGVyIiwic2V0dGluZ3MiLCJwbHVnaW4iLCJDb250cm9sbGVyIiwiTW9kZWwiLCJtaW4iLCJtYXgiLCJkZWZhdWx0VmFsdWUiLCJpbml0aWFsVmFsdWUiLCJsZWZ0VmFsdWUiLCJyaWdodFZhbHVlIiwiaXNSYW5nZSIsInJpZ2h0UHJvZ3Jlc3NCYXIiLCJWaWV3IiwiRm9ybSIsIlN0eWxlcyIsIlByb2dyZXNzQmFyIiwiVGh1bWIiLCJqUXVlcnkiLCJtb2RlbCIsInZpZXciLCJzdWJzY3JpYmUiLCJpbml0Iiwib3B0aW9ucyIsImRhdGFGb3JWaWV3Iiwib3B0aW9uIiwibmV3VmFsdWUiLCJsaW1pdFRvZ2dsZSIsImNvbnNvbGUiLCJsb2ciLCJmb3JtIiwicmlnaHRJbnB1dCIsInZhbHVlIiwic2V0SW5wdXQiLCJvYnNlcnZlcnMiLCJvYnNlcnZlciIsInB1c2giLCJ1cGRhdGVWaWV3IiwicGFyZW50IiwiaXNEb3VibGUiLCJjcmVhdGVGb3JtIiwiY3JlYXRlSW5wdXQiLCJzZXRNaW4iLCJzZXRNYXgiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmQiLCJkZWZhdWx0SW5wdXQiLCJ0eXBlIiwiTmFOIiwiU3RyaW5nIiwiY3JlYXRlU3R5bGVzIiwiY3JlYXRlVHJhY2siLCJzdHlsZSIsInRyYWNrIiwiYmFyIiwicGVyY2VudCIsInBlcmNlbnRSaWdodCIsImxlZnQiLCJyaWdodCIsInRodW1iRGVmYXVsdCIsInRodW1iUmlnaHQiLCJjbGFzc05hbWUiLCJzdHlsZXMiLCJwcm9ncmVzc0JhciIsInRodW1iIiwiY3JlYXRlV3JhcHBlciIsIndyYXBwZXIiLCJjcmVhdGVQcm9ncmVzc0JhciIsImNyZWF0ZVRodW1iIiwiZXZlbnRJbnB1dCIsInNldElucHV0VmFsdWUiLCJwbGFjZURlZmF1bHQiLCJjYWxjUGVyY2VudCIsIk51bWJlciIsInBsYWNlUmlnaHQiLCJzZXREZWZhdWx0Iiwic2V0UmlnaHQiLCJwbGFjZVRodW1iIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVwZGF0ZU1vZGVsIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3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QkEsV0FBbkI7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWIsQ0FMaUcsQ0FPckc7O0FBQ0ksU0FBSzVDLE9BQUwsR0FBZTtBQUNYbEIsU0FBRyxFQUFFLENBRE07QUFFWEMsU0FBRyxFQUFFLEdBRk07QUFHWEMsa0JBQVksRUFBRSxFQUhIO0FBSVhHLGdCQUFVLEVBQUUsRUFKRDtBQUtYQyxhQUFPLEVBQUUsSUFMRTtBQU1YQyxzQkFBZ0IsRUFBRTtBQU5QLEtBQWY7QUFTQSxTQUFLc0IsU0FBTCxHQUFpQixFQUFqQjtBQUNIOzs7OzhCQUNTQyxRLEVBQXlCO0FBQy9CLFdBQUtELFNBQUwsQ0FBZUUsSUFBZixDQUFvQkQsUUFBcEI7QUFDSCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9qcXVlcnkubWFpbi5kLnRzXCI6IFwiLi9qcXVlcnkubWFpbi5kLnRzXCIsXG5cdFwiLi9tYWluLnNjc3NcIjogXCIuL21haW4uc2Nzc1wiLFxuXHRcIi4vbXZjL2NvbnRyb2xsZXIudHNcIjogXCIuL212Yy9jb250cm9sbGVyLnRzXCIsXG5cdFwiLi9tdmMvbW9kZWwudHNcIjogXCIuL212Yy9tb2RlbC50c1wiLFxuXHRcIi4vbXZjL3N1YlZpZXdzLnRzXCI6IFwiLi9tdmMvc3ViVmlld3MudHNcIixcblx0XCIuL212Yy92aWV3LnRzXCI6IFwiLi9tdmMvdmlldy50c1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLih0c3xzY3NzKSRcIjsiLCJmdW5jdGlvbiBpbXBvcnRBbGwocikge1xuICByLmtleXMoKS5mb3JFYWNoKHIpXG59XG5cbmltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4vJywgdHJ1ZSwgL1xcLih0c3xzY3NzKSQvKSkiLCJcbmltcG9ydCB7Rm9ybSwgU3R5bGVzLCBQcm9ncmVzc0JhciwgVGh1bWJ9IGZyb20gJy4vbXZjL3N1YlZpZXdzLnRzJ1xuaW1wb3J0IHtWaWV3fSBmcm9tICcuL212Yy92aWV3LnRzJ1xuaW1wb3J0IHtNb2RlbH0gZnJvbSAnLi9tdmMvbW9kZWwudHMnXG5pbXBvcnQge0NvbnRyb2xsZXJ9IGZyb20gJy4vbXZjL2NvbnRyb2xsZXInXG5cblxuKGZ1bmN0aW9uKCQ6IEpRdWVyeVN0YXRpYykge1xuICAgICQuZm4ucmFuZ2VTbGlkZXIgPSBmdW5jdGlvbihzZXR0aW5nczoge1xuICAgICAgICBtaW4/OiBudW1iZXJcbiAgICAgICAgbWF4PzogbnVtYmVyXG4gICAgICAgIGluaXRpYWxWYWx1ZT86IG51bWJlclxuICAgICAgICBsZWZ0VmFsdWU/OiBudW1iZXJcbiAgICAgICAgZGVmYXVsdFZhbHVlPzogbnVtYmVyXG4gICAgICAgIHJpZ2h0VmFsdWU/OiBudW1iZXJcbiAgICAgICAgaXNSYW5nZT86IGJvb2xlYW5cbiAgICAgICAgcmlnaHRQcm9ncmVzc0Jhcj86IGJvb2xlYW5cbiAgICB9KSB7XG4gICAgICAgIGNvbnN0IHBsdWdpbiA9IG5ldyBDb250cm9sbGVyKFxuICAgICAgICAgICAgbmV3IE1vZGVsKHtcbiAgICAgICAgICAgICAgICBtaW46IHNldHRpbmdzLm1pbixcbiAgICAgICAgICAgICAgICBtYXg6IHNldHRpbmdzLm1heCxcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IHNldHRpbmdzLmluaXRpYWxWYWx1ZSB8fCBzZXR0aW5ncy5sZWZ0VmFsdWUsXG4gICAgICAgICAgICAgICAgcmlnaHRWYWx1ZTogc2V0dGluZ3MucmlnaHRWYWx1ZSxcbiAgICAgICAgICAgICAgICBpc1JhbmdlOiBzZXR0aW5ncy5pc1JhbmdlLFxuICAgICAgICAgICAgICAgIHJpZ2h0UHJvZ3Jlc3NCYXI6IHNldHRpbmdzLnJpZ2h0UHJvZ3Jlc3NCYXJcbiAgICAgICAgICAgIH0pLCBcbiAgICAgICAgICAgIG5ldyBWaWV3KCBcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIG5ldyBGb3JtKCksXG4gICAgICAgICAgICAgICAgbmV3IFN0eWxlcygpLFxuICAgICAgICAgICAgICAgIG5ldyBQcm9ncmVzc0JhcigpLFxuICAgICAgICAgICAgICAgIG5ldyBUaHVtYigpIFxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIHJldHVybiBwbHVnaW5cbiAgICB9XG59KShqUXVlcnkpXG5cbiQoJyNmaXJzdC1yYW5nZS1zbGlkZXInKS5yYW5nZVNsaWRlcih7XG4gICAgaXNSYW5nZTogdHJ1ZSxcbiAgICBsZWZ0VmFsdWU6IDEwLFxuICAgIHJpZ2h0VmFsdWU6IDYwXG59KVxuJCgnI3NlY29uZC1yYW5nZS1zbGlkZXInKS5yYW5nZVNsaWRlcih7XG4gICAgaXNSYW5nZTogdHJ1ZSxcbiAgICBsZWZ0VmFsdWU6IDQwLFxuICAgIHJpZ2h0VmFsdWU6IDcwXG59KVxuJCgnI3RoaXJkLXJhbmdlLXNsaWRlcicpLnJhbmdlU2xpZGVyKHtcbiAgICBtaW46IDAsXG4gICAgbWF4OiAzMCxcbiAgICBpbml0aWFsVmFsdWU6IDIwLFxuICAgIHJpZ2h0UHJvZ3Jlc3NCYXI6IHRydWVcbn0pXG4kKCcjZm9ydGgtcmFuZ2Utc2xpZGVyJykucmFuZ2VTbGlkZXIoe1xuICAgIGluaXRpYWxWYWx1ZTogMjAsXG4gICAgcmlnaHRQcm9ncmVzc0JhcjogZmFsc2Vcbn0pXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjAwOTc3Njg2MzczXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9ob21lL3hlbmEvUmFuZ2Utc2xpZGVyL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJyZWxvYWRBbGxcIjp0cnVlLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiaW1wb3J0IHtNb2RlbH0gZnJvbSAnLi9tb2RlbCdcbmltcG9ydCB7Vmlld30gZnJvbSAnLi92aWV3J1xuXG5jbGFzcyBDb250cm9sbGVyIHtcbiAgICBtb2RlbDogTW9kZWxcbiAgICB2aWV3OiBWaWV3XG4gICAgY29uc3RydWN0b3IobW9kZWw6IE1vZGVsLCB2aWV3OiBWaWV3KSB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbFxuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3XG4gICAgICAgIHRoaXMudmlldy5vcHRpb25zID0gdGhpcy5tb2RlbC5kYXRhRm9yVmlld1xuICAgICAgICB0aGlzLmluaXQoKSBcbiAgICB9XG4gICAgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy52aWV3LnN1YnNjcmliZSh0aGlzKVxuICAgICAgICB0aGlzLm1vZGVsLnN1YnNjcmliZSh0aGlzKVxuICAgICAgICB0aGlzLnZpZXcuaW5pdCgpXG4gICAgfVxuICAgIHVwZGF0ZU1vZGVsKG9wdGlvbjogc3RyaW5nLCBuZXdWYWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmlzUmFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwubGltaXRUb2dnbGUob3B0aW9uLCBuZXdWYWx1ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZGVmYXVsdFZhbHVlID0gbmV3VmFsdWVcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1vZGVsLnJpZ2h0VmFsdWUsIHRoaXMudmlldy5vcHRpb25zLnJpZ2h0VmFsdWUsIHRoaXMudmlldy5mb3JtLnJpZ2h0SW5wdXQudmFsdWUpXG4gICAgfVxuICAgIHVwZGF0ZVZpZXcoKSB7XG4gICAgICAgIHRoaXMudmlldy5vcHRpb25zLmRlZmF1bHRWYWx1ZSA9IHRoaXMubW9kZWwuZGVmYXVsdFZhbHVlXG4gICAgICAgIHRoaXMudmlldy5vcHRpb25zLnJpZ2h0VmFsdWUgPSB0aGlzLm1vZGVsLnJpZ2h0VmFsdWVcbiAgICAgICAgdGhpcy52aWV3LnNldElucHV0KClcbiAgICB9XG59XG5cbmV4cG9ydCB7Q29udHJvbGxlcn0iLCJpbnRlcmZhY2UgSURhdGEge1xuICAgIG1pbjogbnVtYmVyXG4gICAgbWF4OiBudW1iZXJcbiAgICBkZWZhdWx0VmFsdWU6IG51bWJlclxuICAgIHJpZ2h0VmFsdWU6IG51bWJlclxuICAgIGlzUmFuZ2U6IGJvb2xlYW5cbiAgICByaWdodFByb2dyZXNzQmFyOiBib29sZWFuXG59XG5pbnRlcmZhY2UgSU9ic2VydmVyTW9kZWwge1xuICAgIHVwZGF0ZVZpZXcoKTogdm9pZFxufVxuXG5jbGFzcyBNb2RlbCB7XG4gICAgbWluOiBudW1iZXJcbiAgICBtYXg6IG51bWJlclxuICAgIGRlZmF1bHRWYWx1ZTogbnVtYmVyXG4gICAgcmlnaHRWYWx1ZTogbnVtYmVyXG4gICAgaXNSYW5nZTogYm9vbGVhblxuICAgIHJpZ2h0UHJvZ3Jlc3NCYXI6IGJvb2xlYW5cbiAgICBkYXRhRm9yVmlldzogSURhdGFcbiAgICBvYnNlcnZlcnM6IElPYnNlcnZlck1vZGVsW11cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJRGF0YSkge1xuICAgICAgICB0aGlzLm1pbiA9IG9wdGlvbnMubWluID8gb3B0aW9ucy5taW4gOiAwXG4gICAgICAgIHRoaXMubWF4ID0gb3B0aW9ucy5tYXggPyBvcHRpb25zLm1heCA6IDEwMFxuICAgICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IG9wdGlvbnMuZGVmYXVsdFZhbHVlID8gb3B0aW9ucy5kZWZhdWx0VmFsdWUgOiA1MFxuICAgICAgICB0aGlzLnJpZ2h0VmFsdWUgPSBvcHRpb25zLnJpZ2h0VmFsdWUgPyBvcHRpb25zLnJpZ2h0VmFsdWUgOiA2MFxuICAgICAgICB0aGlzLmlzUmFuZ2UgPSBvcHRpb25zLmlzUmFuZ2UgPyBvcHRpb25zLmlzUmFuZ2UgOiBmYWxzZVxuICAgICAgICB0aGlzLnJpZ2h0UHJvZ3Jlc3NCYXIgPSBvcHRpb25zLnJpZ2h0UHJvZ3Jlc3NCYXIgPyBvcHRpb25zLnJpZ2h0UHJvZ3Jlc3NCYXIgOiBmYWxzZVxuICAgICAgICB0aGlzLm9ic2VydmVycyA9IFtdXG4gICAgICAgIHRoaXMuZGF0YUZvclZpZXcgPSB7XG4gICAgICAgICAgICBtaW46IHRoaXMubWluLFxuICAgICAgICAgICAgbWF4OiB0aGlzLm1heCxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdGhpcy5kZWZhdWx0VmFsdWUsXG4gICAgICAgICAgICByaWdodFZhbHVlOiB0aGlzLnJpZ2h0VmFsdWUsXG4gICAgICAgICAgICBpc1JhbmdlOiB0aGlzLmlzUmFuZ2UsXG4gICAgICAgICAgICByaWdodFByb2dyZXNzQmFyOiB0aGlzLnJpZ2h0UHJvZ3Jlc3NCYXJcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdWJzY3JpYmUob2JzZXJ2ZXI6IElPYnNlcnZlck1vZGVsKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpXG4gICAgfVxuICAgIGxpbWl0VG9nZ2xlKG9wdGlvbjogc3RyaW5nLCBuZXdWYWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHN3aXRjaCAob3B0aW9uKSB7XG4gICAgICAgICAgICBjYXNlKCdkZWZhdWx0Jyk6XG5cbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUgPCB0aGlzLnJpZ2h0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0VmFsdWUgPSBuZXdWYWx1ZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudXBkYXRlVmlldygpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UoJ3JpZ2h0Jyk6XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUgPiB0aGlzLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0VmFsdWUgPSBuZXdWYWx1ZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudXBkYXRlVmlldygpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufVxuXG5leHBvcnQge01vZGVsfSIsImNsYXNzIEZvcm0ge1xuICAgIGZvcm0hOiBIVE1MRGl2RWxlbWVudFxuICAgIGRlZmF1bHRJbnB1dCE6IEhUTUxJbnB1dEVsZW1lbnRcbiAgICByaWdodElucHV0ITogSFRNTElucHV0RWxlbWVudFxuXG4gICAgaW5pdChwYXJlbnQ6IEhUTUxEaXZFbGVtZW50LCBpc0RvdWJsZTogYm9vbGVhbiwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3JlYXRlRm9ybShwYXJlbnQpXG4gICAgICAgIHRoaXMuY3JlYXRlSW5wdXQoaXNEb3VibGUpXG4gICAgICAgIHRoaXMuc2V0TWluKGlzRG91YmxlLCBtaW4pXG4gICAgICAgIHRoaXMuc2V0TWF4KGlzRG91YmxlLCBtYXgpXG4gICAgfVxuXG4gICAgY3JlYXRlRm9ybShwYXJlbnQ6IEhUTUxEaXZFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZm9ybSA9IDxIVE1MRGl2RWxlbWVudD4oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpXG4gICAgICAgIHRoaXMuZm9ybS5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2Zvcm0nKVxuICAgICAgICBwYXJlbnQuYXBwZW5kKHRoaXMuZm9ybSlcbiAgICB9XG4gICAgXG4gICAgY3JlYXRlSW5wdXQoaXNEb3VibGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKGlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0LnR5cGUgPSAncmFuZ2UnXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0JykgXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0X2xlZnQnKVxuICAgICAgICAgICAgdGhpcy5mb3JtLmFwcGVuZCh0aGlzLmRlZmF1bHRJbnB1dClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0LnR5cGUgPSAncmFuZ2UnXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19pbnB1dCcpXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19pbnB1dF9yaWdodCcpXG4gICAgICAgICAgICB0aGlzLmZvcm0uYXBwZW5kKHRoaXMucmlnaHRJbnB1dClcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC50eXBlID0gJ3JhbmdlJ1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19pbnB1dCcpXG4gICAgICAgICAgICB0aGlzLmZvcm0uYXBwZW5kKHRoaXMuZGVmYXVsdElucHV0KVxuICAgICAgICB9XG4gICAgfVxuICAgIHNldElucHV0VmFsdWUoaXNEb3VibGU6IGJvb2xlYW4sIHZhbHVlOiBudW1iZXIsIHJpZ2h0VmFsdWU6IG51bWJlciA9IE5hTik6IHZvaWQge1xuICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC52YWx1ZSA9IFN0cmluZyh2YWx1ZSlcbiAgICAgICAgaWYgKGlzRG91YmxlKSB7ICAgXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQudmFsdWUgPSBTdHJpbmcocmlnaHRWYWx1ZSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRNaW4oaXNEb3VibGU6IGJvb2xlYW4sIG1pbjogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVmYXVsdElucHV0Lm1pbiA9IFN0cmluZyhtaW4pXG4gICAgICAgIGlmIChpc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0Lm1pbiA9IFN0cmluZyhtaW4pXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0TWF4KGlzRG91YmxlOiBib29sZWFuLCBtYXg6IG51bWJlciA9IDEwMCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC5tYXggPSBTdHJpbmcobWF4KVxuICAgICAgICBpZiAoaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHRJbnB1dC5tYXggPSBTdHJpbmcobWF4KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBTdHlsZXMge1xuICAgIHN0eWxlITogSFRNTERpdkVsZW1lbnRcbiAgICB0cmFjayE6IEhUTUxEaXZFbGVtZW50XG5cbiAgICBpbml0KHBhcmVudDogSFRNTERpdkVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVTdHlsZXMocGFyZW50KVxuICAgICAgICB0aGlzLmNyZWF0ZVRyYWNrKClcbiAgICB9XG4gICAgXG4gICAgY3JlYXRlU3R5bGVzKHBhcmVudDogSFRNTERpdkVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRoaXMuc3R5bGUuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19zdHlsZScpXG4gICAgICAgIHBhcmVudC5hcHBlbmQodGhpcy5zdHlsZSlcbiAgICB9XG4gICAgXG4gICAgY3JlYXRlVHJhY2soKTogdm9pZCB7XG4gICAgICAgIHRoaXMudHJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0aGlzLnRyYWNrLmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdHJhY2snKVxuICAgICAgICB0aGlzLnN0eWxlLmFwcGVuZCh0aGlzLnRyYWNrKVxuICAgIH1cbn1cblxuY2xhc3MgUHJvZ3Jlc3NCYXIge1xuICAgIGJhciE6IEhUTUxEaXZFbGVtZW50XG4gICAgY3JlYXRlUHJvZ3Jlc3NCYXIocGFyZW50OiBIVE1MRGl2RWxlbWVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRoaXMuYmFyLmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fcHJvZ3Jlc3MtYmFyJylcbiAgICAgICAgcGFyZW50LmFwcGVuZCh0aGlzLmJhcilcbiAgICB9XG4gICAgY2FsY1BlcmNlbnQodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuICgodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbikpICogMTAwXG4gICAgfVxuICAgIHNldERlZmF1bHQoaXNEb3VibGU6IGJvb2xlYW4sIHBlcmNlbnQ6IG51bWJlciwgcGVyY2VudFJpZ2h0OiBudW1iZXIgPSBOYU4pOiB2b2lkIHtcbiAgICAgICAgaWYgKGlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5sZWZ0ID0gcGVyY2VudCArICclJ1xuICAgICAgICAgICAgdGhpcy5iYXIuc3R5bGUucmlnaHQgPSAoMTAwIC0gcGVyY2VudFJpZ2h0KSArICclJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5iYXIuc3R5bGUucmlnaHQgPSAoMTAwIC0gcGVyY2VudCkgKyAnJSdcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLmxlZnQgPSBTdHJpbmcoMClcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRSaWdodChpc0RvdWJsZTogYm9vbGVhbiwgcGVyY2VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICghaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLmxlZnQgPSBwZXJjZW50ICsgJyUnXG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5yaWdodCA9IFN0cmluZygwKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBUaHVtYiB7XG5cbiAgICB0aHVtYkRlZmF1bHQhOiBIVE1MRGl2RWxlbWVudFxuICAgIHRodW1iUmlnaHQhOiBIVE1MRGl2RWxlbWVudFxuXG4gICAgY3JlYXRlVGh1bWIocGFyZW50OiBIVE1MRGl2RWxlbWVudCwgaXNEb3VibGU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYoaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMudGh1bWJEZWZhdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHRoaXMudGh1bWJEZWZhdWx0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdGh1bWInKVxuICAgICAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYl9sZWZ0JylcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmQodGhpcy50aHVtYkRlZmF1bHQpXG5cbiAgICAgICAgICAgIHRoaXMudGh1bWJSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB0aGlzLnRodW1iUmlnaHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYicpXG4gICAgICAgICAgICB0aGlzLnRodW1iUmlnaHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYl9yaWdodCcpXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kKHRoaXMudGh1bWJSaWdodClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGh1bWJEZWZhdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHRoaXMudGh1bWJEZWZhdWx0LmNsYXNzTmFtZSA9ICdyYW5nZS1zbGlkZXJfX3RodW1iJ1xuICAgICAgICAgICAgcGFyZW50LmFwcGVuZCh0aGlzLnRodW1iRGVmYXVsdClcbiAgICAgICAgfVxuICAgIH1cbiAgICBwbGFjZVRodW1iKGlzRG91YmxlOiBib29sZWFuLCBwZXJjZW50OiBudW1iZXIsIHBlcmNlbnRSaWdodDogbnVtYmVyID0gTmFOKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGh1bWJEZWZhdWx0LnN0eWxlLmxlZnQgPSBwZXJjZW50ICsgJyUnXG4gICAgICAgIGlmIChpc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy50aHVtYlJpZ2h0LnN0eWxlLnJpZ2h0ID0gKDEwMCAtIHBlcmNlbnRSaWdodCkgKyAnJSdcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHtGb3JtLCBTdHlsZXMsIFByb2dyZXNzQmFyLCBUaHVtYn0iLCJpbXBvcnQge0Zvcm0sIFN0eWxlcywgUHJvZ3Jlc3NCYXIsIFRodW1ifSBmcm9tICcuL3N1YlZpZXdzJ1xuXG5pbnRlcmZhY2UgSURhdGEge1xuICAgIG1pbjogbnVtYmVyXG4gICAgbWF4OiBudW1iZXJcbiAgICBkZWZhdWx0VmFsdWU6IG51bWJlclxuICAgIHJpZ2h0VmFsdWU6IG51bWJlclxuICAgIGlzUmFuZ2U6IGJvb2xlYW5cbiAgICByaWdodFByb2dyZXNzQmFyOiBib29sZWFuXG59XG5pbnRlcmZhY2UgSU9ic2VydmVyVmlldyB7XG4gICAgdXBkYXRlTW9kZWwoYXJnMDogc3RyaW5nLCBhcmcxOiBudW1iZXIpOiB2b2lkXG59XG5cbmNsYXNzIFZpZXcge1xuICAgIHBhcmVudDogSFRNTEVsZW1lbnRcbiAgICB3cmFwcGVyITogSFRNTERpdkVsZW1lbnRcblxuICAgIGZvcm06IEZvcm1cbiAgICBzdHlsZXM6IFN0eWxlc1xuICAgIHByb2dyZXNzQmFyOiBQcm9ncmVzc0JhclxuICAgIHRodW1iOiBUaHVtYlxuICAgIG9wdGlvbnM6IElEYXRhXG4gICAgb2JzZXJ2ZXJzOiBJT2JzZXJ2ZXJWaWV3W11cbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQ6IEhUTUxFbGVtZW50LCBmb3JtOiBGb3JtLCBzdHlsZXM6IFN0eWxlcywgcHJvZ3Jlc3NCYXI6IFByb2dyZXNzQmFyLCB0aHVtYjogVGh1bWIpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnRcbiAgICAgICAgdGhpcy5mb3JtID0gZm9ybVxuICAgICAgICB0aGlzLnN0eWxlcyA9IHN0eWxlc1xuICAgICAgICB0aGlzLnByb2dyZXNzQmFyID0gcHJvZ3Jlc3NCYXJcbiAgICAgICAgdGhpcy50aHVtYiA9IHRodW1iXG5cbiAgICAvLyBkZWZhdWx0IGRhdGFcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IDEwLFxuICAgICAgICAgICAgcmlnaHRWYWx1ZTogNTAsXG4gICAgICAgICAgICBpc1JhbmdlOiB0cnVlLFxuICAgICAgICAgICAgcmlnaHRQcm9ncmVzc0JhcjogZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW11cbiAgICB9XG4gICAgc3Vic2NyaWJlKG9ic2VydmVyOiBJT2JzZXJ2ZXJWaWV3KSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpXG4gICAgfVxuICAgIGluaXQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuY3JlYXRlV3JhcHBlcigpXG5cbiAgICAgICAgdGhpcy5mb3JtLmluaXQoXG4gICAgICAgICAgICB0aGlzLndyYXBwZXIsIFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlzUmFuZ2UsIFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1pbiwgXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubWF4XG4gICAgICAgIClcbiAgICAgICAgdGhpcy5zdHlsZXMuaW5pdCh0aGlzLndyYXBwZXIpXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuY3JlYXRlUHJvZ3Jlc3NCYXIodGhpcy5zdHlsZXMuc3R5bGUpXG4gICAgICAgIHRoaXMudGh1bWIuY3JlYXRlVGh1bWIodGhpcy5zdHlsZXMuc3R5bGUsIHRoaXMub3B0aW9ucy5pc1JhbmdlKVxuICAgICAgICBcbiAgICAgICAgXG5cbiAgICAgICAgdGhpcy5zZXRJbnB1dCgpXG4gICAgICAgIHRoaXMuZXZlbnRJbnB1dCgpXG4gIFxuICAgIH0gXG5cbiAgICBjcmVhdGVXcmFwcGVyID0gKCkgPT4ge1xuICAgICAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0aGlzLndyYXBwZXIuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyJylcbiAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kKHRoaXMud3JhcHBlcilcbiAgICB9XG5cbiAgICBzZXRJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5mb3JtLnNldElucHV0VmFsdWUodGhpcy5vcHRpb25zLmlzUmFuZ2UsIHRoaXMub3B0aW9ucy5kZWZhdWx0VmFsdWUsIHRoaXMub3B0aW9ucy5yaWdodFZhbHVlKVxuICAgICAgICBcbiAgICAgICAgY29uc3QgcGxhY2VEZWZhdWx0OiBudW1iZXIgPSB0aGlzLnByb2dyZXNzQmFyLmNhbGNQZXJjZW50KFxuICAgICAgICAgICAgICAgICAgICBOdW1iZXIodGhpcy5mb3JtLmRlZmF1bHRJbnB1dC52YWx1ZSksIFxuICAgICAgICAgICAgICAgICAgICBOdW1iZXIodGhpcy5mb3JtLmRlZmF1bHRJbnB1dC5taW4pLCBcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQubWF4KSlcbiAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgY29uc3QgcGxhY2VSaWdodDogbnVtYmVyID0gdGhpcy5mb3JtLnJpZ2h0SW5wdXQgPyBcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuY2FsY1BlcmNlbnQoXG4gICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5yaWdodElucHV0LnZhbHVlKSwgXG4gICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5yaWdodElucHV0Lm1pbiksIFxuICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0ucmlnaHRJbnB1dC5tYXgpKSBcbiAgICAgICAgICAgICAgICA6IE5hTiBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnNldERlZmF1bHQodGhpcy5vcHRpb25zLmlzUmFuZ2UsIHBsYWNlRGVmYXVsdCwgcGxhY2VSaWdodClcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmlnaHRQcm9ncmVzc0JhcikgeyBcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuc2V0UmlnaHQodGhpcy5vcHRpb25zLmlzUmFuZ2UsIHBsYWNlRGVmYXVsdCkgXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRodW1iLnBsYWNlVGh1bWIodGhpcy5vcHRpb25zLmlzUmFuZ2UsIHBsYWNlRGVmYXVsdCwgcGxhY2VSaWdodClcblxuICAgICAgICBcbiAgICB9XG4gICAgZXZlbnRJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5mb3JtLmRlZmF1bHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kZWZhdWx0VmFsdWUgPSBOdW1iZXIodGhpcy5mb3JtLmRlZmF1bHRJbnB1dC52YWx1ZSlcbiAgICAgICAgICAgIHRoaXMuc2V0SW5wdXQoKVxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIudXBkYXRlTW9kZWwoJ2RlZmF1bHQnLCBOdW1iZXIodGhpcy5mb3JtLmRlZmF1bHRJbnB1dC52YWx1ZSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlzUmFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5yaWdodElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5yaWdodFZhbHVlID0gTnVtYmVyKHRoaXMuZm9ybS5yaWdodElucHV0LnZhbHVlKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0SW5wdXQoKVxuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51cGRhdGVNb2RlbCgncmlnaHQnLCBOdW1iZXIodGhpcy5mb3JtLnJpZ2h0SW5wdXQudmFsdWUpKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIFxufVxuXG5leHBvcnQge1ZpZXd9XG4iXSwic291cmNlUm9vdCI6IiJ9