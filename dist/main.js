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
      rightProgressBar: settings.rightProgressBar,
      overThumbElement: settings.overThumbElement,
      step: settings.step,
      isVertical: settings.isVertical
    }), new _mvc_view_ts__WEBPACK_IMPORTED_MODULE_1__["View"](this, new _mvc_subViews_ts__WEBPACK_IMPORTED_MODULE_0__["Form"](), new _mvc_subViews_ts__WEBPACK_IMPORTED_MODULE_0__["Styles"](), new _mvc_subViews_ts__WEBPACK_IMPORTED_MODULE_0__["ProgressBar"](), new _mvc_subViews_ts__WEBPACK_IMPORTED_MODULE_0__["Thumb"]()));
    return plugin;
  };
})(jQuery);

$('#first-range-slider').rangeSlider({
  isRange: true,
  leftValue: 15,
  rightValue: 60,
  overThumbElement: true,
  step: 3
});
$('#second-range-slider').rangeSlider({
  leftValue: 40,
  rightValue: 70,
  overThumbElement: false
});
$('#third-range-slider').rangeSlider({
  min: 0,
  max: 30,
  initialValue: 20,
  rightProgressBar: true,
  overThumbElement: true
});
$('#forth-range-slider').rangeSlider({
  initialValue: 20,
  isRange: true,
  overThumbElement: true,
  step: 10,
  max: 100,
  isVertical: true
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
      this.model.update(option, newValue);
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

    _defineProperty(this, "overThumbElement", void 0);

    _defineProperty(this, "dataForView", void 0);

    _defineProperty(this, "step", void 0);

    _defineProperty(this, "isVertical", void 0);

    _defineProperty(this, "observers", void 0);

    this.min = options.min ? options.min : 0;
    this.max = options.max ? options.max : 100;
    this.defaultValue = options.defaultValue ? options.defaultValue : 50;
    this.rightValue = options.rightValue ? options.rightValue : 60;
    this.isRange = options.isRange;
    this.rightProgressBar = options.rightProgressBar;
    this.overThumbElement = options.overThumbElement;
    this.step = options.step ? options.step : 1;
    this.isVertical = options.isVertical;
    this.observers = [];
    this.dataForView = {
      min: this.min,
      max: this.max,
      defaultValue: this.defaultValue,
      rightValue: this.rightValue,
      isRange: this.isRange,
      rightProgressBar: this.rightProgressBar,
      overThumbElement: this.overThumbElement,
      isVertical: this.isVertical
    };
  }

  _createClass(Model, [{
    key: "subscribe",
    value: function subscribe(observer) {
      this.observers.push(observer);
    }
  }, {
    key: "update",
    value: function update(option, newValue) {
      if (this.isRange) {
        this.limitToggle(option, newValue);
      } else {
        this.limitStep(newValue);
      }
    }
  }, {
    key: "limitToggle",
    value: function limitToggle(option, newValue) {
      switch (option) {
        case 'default':
          if (newValue < this.rightValue) {
            this.limitStep(newValue);
          } else {
            this.observers.forEach(function (observer) {
              observer.updateView();
            });
          }

          break;

        case 'right':
          if (newValue > this.defaultValue) {
            this.limitStep(newValue, 'right');
          } else {
            console.log('алярма');
            this.observers.forEach(function (observer) {
              observer.updateView();
            });
          }

      }
    }
  }, {
    key: "limitStep",
    value: function limitStep(newValue) {
      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';

      switch (option) {
        case 'default':
          if (newValue % this.step === 0) {
            this.defaultValue = newValue;
          } else {
            this.defaultValue = this.calcNearest(newValue);
            this.observers.forEach(function (observer) {
              observer.updateView();
            });
          }

          break;

        case 'right':
          if (newValue % this.step === 0) {
            this.rightValue = newValue;
          } else {
            this.rightValue = this.calcNearest(newValue);
            this.observers.forEach(function (observer) {
              observer.updateView();
            });
          }

          break;
      }
    }
  }, {
    key: "calcNearest",
    value: function calcNearest(newValue) {
      var roundToMin = newValue - newValue % this.step;

      if (newValue % this.step > this.step / 2) {
        return this.step + roundToMin;
      }

      return roundToMin;
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

    _defineProperty(this, "thumbOutput", void 0);

    _defineProperty(this, "thumbOutputRight", void 0);
  }

  _createClass(Thumb, [{
    key: "init",
    value: function init(parent, isDouble, toggleElement, defaultValue, rightValue) {
      this.createThumb(parent, isDouble);

      if (toggleElement) {
        this.createThumbElement(isDouble, this.thumbDefault, this.thumbRight);
        this.setThumbValue(isDouble, defaultValue, rightValue);
      }
    }
  }, {
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
    key: "createThumbElement",
    value: function createThumbElement(isDouble, parent, rightParent) {
      if (isDouble) {
        this.thumbOutputRight = document.createElement('p');
        this.thumbOutputRight.classList.add('range-slider__value-thumb');
        rightParent.append(this.thumbOutputRight);
      }

      this.thumbOutput = document.createElement('p');
      this.thumbOutput.className = 'range-slider__value-thumb';
      parent.append(this.thumbOutput);
    }
  }, {
    key: "setThumbValue",
    value: function setThumbValue(isDouble, value, rightValue) {
      this.thumbOutput.textContent = String(value);

      if (isDouble) {
        this.thumbOutputRight.textContent = String(rightValue);
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

      _this.thumb.init(_this.styles.style, _this.options.isRange, _this.options.overThumbElement, _this.options.defaultValue, _this.options.rightValue);

      _this.setInput();

      _this.eventInput();

      _this.progressBar.bar.onmousedown = function (elem) {
        _this.eventClick(elem);
      };

      _this.styles.track.onmousedown = function (elem) {
        _this.eventClick(elem);
      };

      _this.eventHover();

      _this.eventActive();

      if (_this.options.isVertical) {
        var _this$thumb$thumbOutp;

        _this.wrapper.classList.add('range-slider_vertical');

        _this.thumb.thumbOutput.classList.add('range-slider__value-thumb_vertical');

        (_this$thumb$thumbOutp = _this.thumb.thumbOutputRight) === null || _this$thumb$thumbOutp === void 0 ? void 0 : _this$thumb$thumbOutp.classList.add('range-slider__value-thumb_Vertical');
      }
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

        _this.thumb.setThumbValue(_this.options.isRange, _this.options.defaultValue, _this.options.rightValue);
      });

      if (_this.options.isRange) {
        _this.form.rightInput.addEventListener('input', function () {
          _this.options.rightValue = Number(_this.form.rightInput.value);

          _this.setInput();

          _this.observers.forEach(function (observer) {
            observer.updateModel('right', Number(_this.form.rightInput.value));
          });

          _this.thumb.setThumbValue(_this.options.isRange, _this.options.defaultValue, _this.options.rightValue);
        });
      }
    });

    _defineProperty(this, "eventHover", function () {
      _this.form.defaultInput.addEventListener('mouseover', function () {
        if (_this.options.overThumbElement) {
          _this.thumb.thumbOutput.classList.add('range-slider__value-thumb_big');
        }

        _this.thumb.thumbDefault.classList.add('range-slider__thumb_hover');
      });

      if (_this.options.isRange) {
        _this.form.rightInput.addEventListener('mouseover', function () {
          if (_this.options.overThumbElement) {
            var _this$thumb$thumbOutp2;

            (_this$thumb$thumbOutp2 = _this.thumb.thumbOutputRight) === null || _this$thumb$thumbOutp2 === void 0 ? void 0 : _this$thumb$thumbOutp2.classList.add('range-slider__value-thumb_big');
          }

          _this.thumb.thumbRight.classList.add('range-slider__thumb_hover');
        });
      }

      _this.form.defaultInput.addEventListener('mouseout', function () {
        if (_this.options.overThumbElement) {
          _this.thumb.thumbOutput.classList.remove('range-slider__value-thumb_big');
        }

        _this.thumb.thumbDefault.classList.remove('range-slider__thumb_hover');
      });

      if (_this.options.isRange) {
        _this.form.rightInput.addEventListener('mouseout', function () {
          if (_this.options.overThumbElement) {
            var _this$thumb$thumbOutp3;

            (_this$thumb$thumbOutp3 = _this.thumb.thumbOutputRight) === null || _this$thumb$thumbOutp3 === void 0 ? void 0 : _this$thumb$thumbOutp3.classList.remove('range-slider__value-thumb_big');
          }

          _this.thumb.thumbRight.classList.remove('range-slider__thumb_hover');
        });
      }
    });

    _defineProperty(this, "eventActive", function () {
      _this.form.defaultInput.addEventListener('mousedown', function () {
        _this.thumb.thumbDefault.classList.add('range-slider__thumb_active');
      });

      if (_this.options.isRange) {
        _this.form.rightInput.addEventListener('mousedown', function () {
          _this.thumb.thumbRight.classList.add('range-slider__thumb_active');
        });
      }

      _this.form.defaultInput.addEventListener('mouseup', function () {
        _this.thumb.thumbDefault.classList.remove('range-slider__thumb_active');
      });

      if (_this.options.isRange) {
        _this.form.rightInput.addEventListener('mouseup', function () {
          _this.thumb.thumbRight.classList.remove('range-slider__thumb_active');
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
      rightProgressBar: false,
      overThumbElement: true,
      isVertical: false
    };
    this.observers = [];
  }

  _createClass(View, [{
    key: "subscribe",
    value: function subscribe(observer) {
      this.observers.push(observer);
    }
  }, {
    key: "eventClick",
    value: function eventClick(elem) {
      var coords = this.styles.track.getBoundingClientRect();
      var length = coords.right - coords.left;
      var currentPosition = elem.pageX - coords.left;
      var percent = currentPosition / length * 100;
      var placeDefault = this.progressBar.calcPercent(Number(this.form.defaultInput.value), Number(this.form.defaultInput.min), Number(this.form.defaultInput.max));
      var newValue = this.calcValue(percent);
      var halfOfBar = (this.options.rightValue + this.options.defaultValue) / 2;
      var isRightTrack = this.options.isRange && newValue > this.options.rightValue;
      var isRightBar = this.options.isRange && newValue > halfOfBar;

      if (isRightTrack || isRightBar) {
        this.form.rightInput.value = String(newValue);
        this.options.rightValue = newValue;
        this.thumb.placeThumb(this.options.isRange, placeDefault, percent);
        this.progressBar.setDefault(this.options.isRange, placeDefault, percent);
        this.observers.forEach(function (observer) {
          observer.updateModel('right', newValue);
        });
        this.thumb.setThumbValue(this.options.isRange, this.options.defaultValue, this.options.rightValue);
      } else {
        this.form.defaultInput.value = String(newValue);
        this.options.defaultValue = newValue;
        this.thumb.placeThumb(this.options.isRange, percent);

        if (this.options.rightProgressBar) {
          this.progressBar.setRight(this.options.isRange, percent);
        } else {
          this.progressBar.setDefault(this.options.isRange, percent);
        }

        this.observers.forEach(function (observer) {
          observer.updateModel('default', newValue);
        });
        this.thumb.setThumbValue(this.options.isRange, this.options.defaultValue, this.options.rightValue);
      }
    }
  }, {
    key: "calcValue",
    value: function calcValue(percent) {
      var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.options.min;
      var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.options.max;
      var diapason = max - min;
      return Math.round(diapason - (max - diapason * percent / 100));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4gc3luYyBcXC4odHN8c2NzcykkIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2pxdWVyeS5tYWluLmQudHMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5zY3NzIiwid2VicGFjazovLy8uL212Yy9jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL212Yy9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9tdmMvc3ViVmlld3MudHMiLCJ3ZWJwYWNrOi8vLy4vbXZjL3ZpZXcudHMiXSwibmFtZXMiOlsiaW1wb3J0QWxsIiwiciIsImtleXMiLCJmb3JFYWNoIiwicmVxdWlyZSIsIiQiLCJmbiIsInJhbmdlU2xpZGVyIiwic2V0dGluZ3MiLCJwbHVnaW4iLCJDb250cm9sbGVyIiwiTW9kZWwiLCJtaW4iLCJtYXgiLCJkZWZhdWx0VmFsdWUiLCJpbml0aWFsVmFsdWUiLCJsZWZ0VmFsdWUiLCJyaWdodFZhbHVlIiwiaXNSYW5nZSIsInJpZ2h0UHJvZ3Jlc3NCYXIiLCJvdmVyVGh1bWJFbGVtZW50Iiwic3RlcCIsImlzVmVydGljYWwiLCJWaWV3IiwiRm9ybSIsIlN0eWxlcyIsIlByb2dyZXNzQmFyIiwiVGh1bWIiLCJqUXVlcnkiLCJtb2RlbCIsInZpZXciLCJzdWJzY3JpYmUiLCJpbml0Iiwib3B0aW9ucyIsImRhdGFGb3JWaWV3Iiwib3B0aW9uIiwibmV3VmFsdWUiLCJ1cGRhdGUiLCJzZXRJbnB1dCIsIm9ic2VydmVycyIsIm9ic2VydmVyIiwicHVzaCIsImxpbWl0VG9nZ2xlIiwibGltaXRTdGVwIiwidXBkYXRlVmlldyIsImNvbnNvbGUiLCJsb2ciLCJjYWxjTmVhcmVzdCIsInJvdW5kVG9NaW4iLCJwYXJlbnQiLCJpc0RvdWJsZSIsImNyZWF0ZUZvcm0iLCJjcmVhdGVJbnB1dCIsInNldE1pbiIsInNldE1heCIsImZvcm0iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmQiLCJkZWZhdWx0SW5wdXQiLCJ0eXBlIiwicmlnaHRJbnB1dCIsInZhbHVlIiwiTmFOIiwiU3RyaW5nIiwiY3JlYXRlU3R5bGVzIiwiY3JlYXRlVHJhY2siLCJzdHlsZSIsInRyYWNrIiwiYmFyIiwicGVyY2VudCIsInBlcmNlbnRSaWdodCIsImxlZnQiLCJyaWdodCIsInRvZ2dsZUVsZW1lbnQiLCJjcmVhdGVUaHVtYiIsImNyZWF0ZVRodW1iRWxlbWVudCIsInRodW1iRGVmYXVsdCIsInRodW1iUmlnaHQiLCJzZXRUaHVtYlZhbHVlIiwiY2xhc3NOYW1lIiwicmlnaHRQYXJlbnQiLCJ0aHVtYk91dHB1dFJpZ2h0IiwidGh1bWJPdXRwdXQiLCJ0ZXh0Q29udGVudCIsInN0eWxlcyIsInByb2dyZXNzQmFyIiwidGh1bWIiLCJjcmVhdGVXcmFwcGVyIiwid3JhcHBlciIsImNyZWF0ZVByb2dyZXNzQmFyIiwiZXZlbnRJbnB1dCIsIm9ubW91c2Vkb3duIiwiZWxlbSIsImV2ZW50Q2xpY2siLCJldmVudEhvdmVyIiwiZXZlbnRBY3RpdmUiLCJzZXRJbnB1dFZhbHVlIiwicGxhY2VEZWZhdWx0IiwiY2FsY1BlcmNlbnQiLCJOdW1iZXIiLCJwbGFjZVJpZ2h0Iiwic2V0RGVmYXVsdCIsInNldFJpZ2h0IiwicGxhY2VUaHVtYiIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1cGRhdGVNb2RlbCIsInJlbW92ZSIsImNvb3JkcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlbmd0aCIsImN1cnJlbnRQb3NpdGlvbiIsInBhZ2VYIiwiY2FsY1ZhbHVlIiwiaGFsZk9mQmFyIiwiaXNSaWdodFRyYWNrIiwiaXNSaWdodEJhciIsImRpYXBhc29uIiwiTWF0aCIsInJvdW5kIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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Zm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2pxdWVyeS5tYWluLmQudHNcIjogXCIuL2pxdWVyeS5tYWluLmQudHNcIixcblx0XCIuL21haW4uc2Nzc1wiOiBcIi4vbWFpbi5zY3NzXCIsXG5cdFwiLi9tdmMvY29udHJvbGxlci50c1wiOiBcIi4vbXZjL2NvbnRyb2xsZXIudHNcIixcblx0XCIuL212Yy9tb2RlbC50c1wiOiBcIi4vbXZjL21vZGVsLnRzXCIsXG5cdFwiLi9tdmMvc3ViVmlld3MudHNcIjogXCIuL212Yy9zdWJWaWV3cy50c1wiLFxuXHRcIi4vbXZjL3ZpZXcudHNcIjogXCIuL212Yy92aWV3LnRzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgcmVjdXJzaXZlIFxcXFwuKHRzfHNjc3MpJFwiOyIsImZ1bmN0aW9uIGltcG9ydEFsbChyKSB7XG4gIHIua2V5cygpLmZvckVhY2gocilcbn1cblxuaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi8nLCB0cnVlLCAvXFwuKHRzfHNjc3MpJC8pKSIsIlxuaW1wb3J0IHtGb3JtLCBTdHlsZXMsIFByb2dyZXNzQmFyLCBUaHVtYn0gZnJvbSAnLi9tdmMvc3ViVmlld3MudHMnXG5pbXBvcnQge1ZpZXd9IGZyb20gJy4vbXZjL3ZpZXcudHMnXG5pbXBvcnQge01vZGVsfSBmcm9tICcuL212Yy9tb2RlbC50cydcbmltcG9ydCB7Q29udHJvbGxlcn0gZnJvbSAnLi9tdmMvY29udHJvbGxlcidcblxuXG4oZnVuY3Rpb24oJDogSlF1ZXJ5U3RhdGljKSB7XG4gICAgJC5mbi5yYW5nZVNsaWRlciA9IGZ1bmN0aW9uKHNldHRpbmdzOiB7XG4gICAgICAgIG1pbj86IG51bWJlclxuICAgICAgICBtYXg/OiBudW1iZXJcbiAgICAgICAgaW5pdGlhbFZhbHVlPzogbnVtYmVyXG4gICAgICAgIGxlZnRWYWx1ZT86IG51bWJlclxuICAgICAgICBkZWZhdWx0VmFsdWU/OiBudW1iZXJcbiAgICAgICAgcmlnaHRWYWx1ZT86IG51bWJlclxuICAgICAgICBpc1JhbmdlPzogYm9vbGVhblxuICAgICAgICByaWdodFByb2dyZXNzQmFyPzogYm9vbGVhblxuICAgICAgICBvdmVyVGh1bWJFbGVtZW50PzogYm9vbGVhblxuICAgICAgICBzdGVwPzogbnVtYmVyXG4gICAgICAgIGlzVmVydGljYWw/OiBib29sZWFuXG4gICAgfSkge1xuICAgICAgICBjb25zdCBwbHVnaW4gPSBuZXcgQ29udHJvbGxlcihcbiAgICAgICAgICAgIG5ldyBNb2RlbCh7XG4gICAgICAgICAgICAgICAgbWluOiBzZXR0aW5ncy5taW4sXG4gICAgICAgICAgICAgICAgbWF4OiBzZXR0aW5ncy5tYXgsXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBzZXR0aW5ncy5pbml0aWFsVmFsdWUgfHwgc2V0dGluZ3MubGVmdFZhbHVlLFxuICAgICAgICAgICAgICAgIHJpZ2h0VmFsdWU6IHNldHRpbmdzLnJpZ2h0VmFsdWUsXG4gICAgICAgICAgICAgICAgaXNSYW5nZTogc2V0dGluZ3MuaXNSYW5nZSxcbiAgICAgICAgICAgICAgICByaWdodFByb2dyZXNzQmFyOiBzZXR0aW5ncy5yaWdodFByb2dyZXNzQmFyLFxuICAgICAgICAgICAgICAgIG92ZXJUaHVtYkVsZW1lbnQ6IHNldHRpbmdzLm92ZXJUaHVtYkVsZW1lbnQsXG4gICAgICAgICAgICAgICAgc3RlcDogc2V0dGluZ3Muc3RlcCxcbiAgICAgICAgICAgICAgICBpc1ZlcnRpY2FsOiBzZXR0aW5ncy5pc1ZlcnRpY2FsXG4gICAgICAgICAgICB9KSwgXG4gICAgICAgICAgICBuZXcgVmlldyggXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBuZXcgRm9ybSgpLFxuICAgICAgICAgICAgICAgIG5ldyBTdHlsZXMoKSxcbiAgICAgICAgICAgICAgICBuZXcgUHJvZ3Jlc3NCYXIoKSxcbiAgICAgICAgICAgICAgICBuZXcgVGh1bWIoKSBcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICByZXR1cm4gcGx1Z2luXG4gICAgfVxufSkoalF1ZXJ5KVxuXG5cbiQoJyNmaXJzdC1yYW5nZS1zbGlkZXInKS5yYW5nZVNsaWRlcih7XG4gICAgaXNSYW5nZTogdHJ1ZSxcbiAgICBsZWZ0VmFsdWU6IDE1LFxuICAgIHJpZ2h0VmFsdWU6IDYwLFxuICAgIG92ZXJUaHVtYkVsZW1lbnQ6IHRydWUsXG4gICAgc3RlcDogM1xufSlcbiQoJyNzZWNvbmQtcmFuZ2Utc2xpZGVyJykucmFuZ2VTbGlkZXIoe1xuICAgIGxlZnRWYWx1ZTogNDAsXG4gICAgcmlnaHRWYWx1ZTogNzAsXG4gICAgb3ZlclRodW1iRWxlbWVudDogZmFsc2Vcbn0pXG4kKCcjdGhpcmQtcmFuZ2Utc2xpZGVyJykucmFuZ2VTbGlkZXIoe1xuICAgIG1pbjogMCxcbiAgICBtYXg6IDMwLFxuICAgIGluaXRpYWxWYWx1ZTogMjAsXG4gICAgcmlnaHRQcm9ncmVzc0JhcjogdHJ1ZSxcbiAgICBvdmVyVGh1bWJFbGVtZW50OiB0cnVlXG59KVxuJCgnI2ZvcnRoLXJhbmdlLXNsaWRlcicpLnJhbmdlU2xpZGVyKHtcbiAgICBpbml0aWFsVmFsdWU6IDIwLFxuICAgIGlzUmFuZ2U6IHRydWUsXG4gICAgb3ZlclRodW1iRWxlbWVudDogdHJ1ZSxcbiAgICBzdGVwOiAxMCxcbiAgICBtYXg6IDEwMCxcbiAgICBpc1ZlcnRpY2FsOiB0cnVlXG59KVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYwMTMzMDYwOTU1OVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvaG9tZS94ZW5hL1JhbmdlLXNsaWRlci9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicmVsb2FkQWxsXCI6dHJ1ZSxcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsImltcG9ydCB7TW9kZWx9IGZyb20gJy4vbW9kZWwnXG5pbXBvcnQge1ZpZXd9IGZyb20gJy4vdmlldydcblxuY2xhc3MgQ29udHJvbGxlciB7XG4gICAgbW9kZWw6IE1vZGVsXG4gICAgdmlldzogVmlld1xuICAgIGNvbnN0cnVjdG9yKG1vZGVsOiBNb2RlbCwgdmlldzogVmlldykge1xuICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWxcbiAgICAgICAgdGhpcy52aWV3ID0gdmlld1xuICAgICAgICB0aGlzLnZpZXcub3B0aW9ucyA9IHRoaXMubW9kZWwuZGF0YUZvclZpZXdcbiAgICAgICAgdGhpcy5pbml0KCkgXG4gICAgfVxuICAgIGluaXQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMudmlldy5zdWJzY3JpYmUodGhpcylcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJzY3JpYmUodGhpcylcbiAgICAgICAgdGhpcy52aWV3LmluaXQoKVxuICAgIH1cbiAgICB1cGRhdGVNb2RlbChvcHRpb246IHN0cmluZywgbmV3VmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLm1vZGVsLnVwZGF0ZShvcHRpb24sIG5ld1ZhbHVlKVxuICAgIH1cbiAgICB1cGRhdGVWaWV3KCkge1xuICAgICAgICB0aGlzLnZpZXcub3B0aW9ucy5kZWZhdWx0VmFsdWUgPSB0aGlzLm1vZGVsLmRlZmF1bHRWYWx1ZVxuICAgICAgICB0aGlzLnZpZXcub3B0aW9ucy5yaWdodFZhbHVlID0gdGhpcy5tb2RlbC5yaWdodFZhbHVlXG4gICAgICAgIHRoaXMudmlldy5zZXRJbnB1dCgpXG4gICAgfVxufVxuXG5leHBvcnQge0NvbnRyb2xsZXJ9IiwiaW50ZXJmYWNlIElEYXRhIHtcbiAgICBtaW46IG51bWJlclxuICAgIG1heDogbnVtYmVyXG4gICAgZGVmYXVsdFZhbHVlOiBudW1iZXJcbiAgICByaWdodFZhbHVlOiBudW1iZXJcbiAgICBpc1JhbmdlOiBib29sZWFuXG4gICAgcmlnaHRQcm9ncmVzc0JhcjogYm9vbGVhblxuICAgIG92ZXJUaHVtYkVsZW1lbnQ6IGJvb2xlYW5cbiAgICBpc1ZlcnRpY2FsOiBib29sZWFuXG4gICAgc3RlcD86IG51bWJlclxufVxuaW50ZXJmYWNlIElPYnNlcnZlck1vZGVsIHtcbiAgICB1cGRhdGVWaWV3KCk6IHZvaWRcbn1cblxuY2xhc3MgTW9kZWwge1xuICAgIG1pbjogbnVtYmVyXG4gICAgbWF4OiBudW1iZXJcbiAgICBkZWZhdWx0VmFsdWU6IG51bWJlclxuICAgIHJpZ2h0VmFsdWU6IG51bWJlclxuICAgIGlzUmFuZ2U6IGJvb2xlYW5cbiAgICByaWdodFByb2dyZXNzQmFyOiBib29sZWFuXG4gICAgb3ZlclRodW1iRWxlbWVudDogYm9vbGVhblxuICAgIGRhdGFGb3JWaWV3OiBJRGF0YVxuICAgIHN0ZXA6IG51bWJlclxuICAgIGlzVmVydGljYWw6IGJvb2xlYW5cbiAgICBvYnNlcnZlcnM6IElPYnNlcnZlck1vZGVsW11cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJRGF0YSkge1xuICAgICAgICB0aGlzLm1pbiA9IG9wdGlvbnMubWluID8gb3B0aW9ucy5taW4gOiAwXG4gICAgICAgIHRoaXMubWF4ID0gb3B0aW9ucy5tYXggPyBvcHRpb25zLm1heCA6IDEwMFxuICAgICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IG9wdGlvbnMuZGVmYXVsdFZhbHVlID8gb3B0aW9ucy5kZWZhdWx0VmFsdWUgOiA1MFxuICAgICAgICB0aGlzLnJpZ2h0VmFsdWUgPSBvcHRpb25zLnJpZ2h0VmFsdWUgPyBvcHRpb25zLnJpZ2h0VmFsdWUgOiA2MFxuICAgICAgICB0aGlzLmlzUmFuZ2UgPSBvcHRpb25zLmlzUmFuZ2VcbiAgICAgICAgdGhpcy5yaWdodFByb2dyZXNzQmFyID0gb3B0aW9ucy5yaWdodFByb2dyZXNzQmFyXG4gICAgICAgIHRoaXMub3ZlclRodW1iRWxlbWVudCA9IG9wdGlvbnMub3ZlclRodW1iRWxlbWVudFxuICAgICAgICB0aGlzLnN0ZXAgPSBvcHRpb25zLnN0ZXAgPyBvcHRpb25zLnN0ZXAgOiAxXG4gICAgICAgIHRoaXMuaXNWZXJ0aWNhbCA9IG9wdGlvbnMuaXNWZXJ0aWNhbFxuICAgICAgICB0aGlzLm9ic2VydmVycyA9IFtdXG4gICAgICAgIHRoaXMuZGF0YUZvclZpZXcgPSB7XG4gICAgICAgICAgICBtaW46IHRoaXMubWluLFxuICAgICAgICAgICAgbWF4OiB0aGlzLm1heCxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdGhpcy5kZWZhdWx0VmFsdWUsXG4gICAgICAgICAgICByaWdodFZhbHVlOiB0aGlzLnJpZ2h0VmFsdWUsXG4gICAgICAgICAgICBpc1JhbmdlOiB0aGlzLmlzUmFuZ2UsXG4gICAgICAgICAgICByaWdodFByb2dyZXNzQmFyOiB0aGlzLnJpZ2h0UHJvZ3Jlc3NCYXIsXG4gICAgICAgICAgICBvdmVyVGh1bWJFbGVtZW50OiB0aGlzLm92ZXJUaHVtYkVsZW1lbnQsXG4gICAgICAgICAgICBpc1ZlcnRpY2FsOiB0aGlzLmlzVmVydGljYWxcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdWJzY3JpYmUob2JzZXJ2ZXI6IElPYnNlcnZlck1vZGVsKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpXG4gICAgfVxuICAgIHVwZGF0ZShvcHRpb246IHN0cmluZywgbmV3VmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmxpbWl0VG9nZ2xlKG9wdGlvbiwgbmV3VmFsdWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxpbWl0U3RlcChuZXdWYWx1ZSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBsaW1pdFRvZ2dsZShvcHRpb246IHN0cmluZywgbmV3VmFsdWU6IG51bWJlcikge1xuICAgICAgICBzd2l0Y2ggKG9wdGlvbikge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXNlKCdkZWZhdWx0Jyk6XG4gICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlIDwgdGhpcy5yaWdodFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGltaXRTdGVwKG5ld1ZhbHVlKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudXBkYXRlVmlldygpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UoJ3JpZ2h0Jyk6XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUgPiB0aGlzLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpbWl0U3RlcChuZXdWYWx1ZSwgJ3JpZ2h0JylcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ9Cw0LvRj9GA0LzQsCcpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudXBkYXRlVmlldygpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIGxpbWl0U3RlcChuZXdWYWx1ZTogbnVtYmVyLCBvcHRpb246IHN0cmluZyA9ICdkZWZhdWx0Jykge1xuXG4gICAgICAgIHN3aXRjaChvcHRpb24pIHtcbiAgICAgICAgICAgIGNhc2UoJ2RlZmF1bHQnKTogXG4gICAgICAgICAgICBpZihuZXdWYWx1ZSAlIHRoaXMuc3RlcCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gbmV3VmFsdWVcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0VmFsdWUgPSB0aGlzLmNhbGNOZWFyZXN0KG5ld1ZhbHVlKVxuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51cGRhdGVWaWV3KClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWtcblxuXG4gICAgICAgICAgICBjYXNlKCdyaWdodCcpOlxuICAgICAgICAgICAgaWYobmV3VmFsdWUgJSB0aGlzLnN0ZXAgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0VmFsdWUgPSBuZXdWYWx1ZVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0VmFsdWUgPSB0aGlzLmNhbGNOZWFyZXN0KG5ld1ZhbHVlKVxuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51cGRhdGVWaWV3KClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgY2FsY05lYXJlc3QobmV3VmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGxldCByb3VuZFRvTWluID0gbmV3VmFsdWUgLSAobmV3VmFsdWUgJSB0aGlzLnN0ZXApXG4gICAgICAgIGlmICgobmV3VmFsdWUgJSB0aGlzLnN0ZXApID4gKHRoaXMuc3RlcCAvIDIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGVwICsgcm91bmRUb01pblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb3VuZFRvTWluXG4gICAgfVxufVxuXG5leHBvcnQge01vZGVsfSIsImNsYXNzIEZvcm0ge1xuICAgIGZvcm0hOiBIVE1MRGl2RWxlbWVudFxuICAgIGRlZmF1bHRJbnB1dCE6IEhUTUxJbnB1dEVsZW1lbnRcbiAgICByaWdodElucHV0ITogSFRNTElucHV0RWxlbWVudFxuXG4gICAgaW5pdChwYXJlbnQ6IEhUTUxEaXZFbGVtZW50LCBpc0RvdWJsZTogYm9vbGVhbiwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3JlYXRlRm9ybShwYXJlbnQpXG4gICAgICAgIHRoaXMuY3JlYXRlSW5wdXQoaXNEb3VibGUpXG4gICAgICAgIHRoaXMuc2V0TWluKGlzRG91YmxlLCBtaW4pXG4gICAgICAgIHRoaXMuc2V0TWF4KGlzRG91YmxlLCBtYXgpXG4gICAgfVxuXG4gICAgY3JlYXRlRm9ybShwYXJlbnQ6IEhUTUxEaXZFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZm9ybSA9IDxIVE1MRGl2RWxlbWVudD4oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpXG4gICAgICAgIHRoaXMuZm9ybS5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2Zvcm0nKVxuICAgICAgICBwYXJlbnQuYXBwZW5kKHRoaXMuZm9ybSlcbiAgICB9XG4gICAgXG4gICAgY3JlYXRlSW5wdXQoaXNEb3VibGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKGlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0LnR5cGUgPSAncmFuZ2UnXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0JykgXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0X2xlZnQnKVxuICAgICAgICAgICAgdGhpcy5mb3JtLmFwcGVuZCh0aGlzLmRlZmF1bHRJbnB1dClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0LnR5cGUgPSAncmFuZ2UnXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19pbnB1dCcpXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19pbnB1dF9yaWdodCcpXG4gICAgICAgICAgICB0aGlzLmZvcm0uYXBwZW5kKHRoaXMucmlnaHRJbnB1dClcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC50eXBlID0gJ3JhbmdlJ1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19pbnB1dCcpXG4gICAgICAgICAgICB0aGlzLmZvcm0uYXBwZW5kKHRoaXMuZGVmYXVsdElucHV0KVxuICAgICAgICB9XG4gICAgfVxuICAgIHNldElucHV0VmFsdWUoaXNEb3VibGU6IGJvb2xlYW4sIHZhbHVlOiBudW1iZXIsIHJpZ2h0VmFsdWU6IG51bWJlciA9IE5hTik6IHZvaWQge1xuICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC52YWx1ZSA9IFN0cmluZyh2YWx1ZSlcbiAgICAgICAgaWYgKGlzRG91YmxlKSB7ICAgXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQudmFsdWUgPSBTdHJpbmcocmlnaHRWYWx1ZSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRNaW4oaXNEb3VibGU6IGJvb2xlYW4sIG1pbjogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVmYXVsdElucHV0Lm1pbiA9IFN0cmluZyhtaW4pXG4gICAgICAgIGlmIChpc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0Lm1pbiA9IFN0cmluZyhtaW4pXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0TWF4KGlzRG91YmxlOiBib29sZWFuLCBtYXg6IG51bWJlciA9IDEwMCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC5tYXggPSBTdHJpbmcobWF4KVxuICAgICAgICBpZiAoaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHRJbnB1dC5tYXggPSBTdHJpbmcobWF4KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBTdHlsZXMge1xuICAgIHN0eWxlITogSFRNTERpdkVsZW1lbnRcbiAgICB0cmFjayE6IEhUTUxEaXZFbGVtZW50XG5cbiAgICBpbml0KHBhcmVudDogSFRNTERpdkVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVTdHlsZXMocGFyZW50KVxuICAgICAgICB0aGlzLmNyZWF0ZVRyYWNrKClcbiAgICB9XG4gICAgXG4gICAgY3JlYXRlU3R5bGVzKHBhcmVudDogSFRNTERpdkVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRoaXMuc3R5bGUuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19zdHlsZScpXG4gICAgICAgIHBhcmVudC5hcHBlbmQodGhpcy5zdHlsZSlcbiAgICB9XG4gICAgXG4gICAgY3JlYXRlVHJhY2soKTogdm9pZCB7XG4gICAgICAgIHRoaXMudHJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0aGlzLnRyYWNrLmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdHJhY2snKVxuICAgICAgICB0aGlzLnN0eWxlLmFwcGVuZCh0aGlzLnRyYWNrKVxuICAgIH1cbn1cblxuY2xhc3MgUHJvZ3Jlc3NCYXIge1xuICAgIGJhciE6IEhUTUxEaXZFbGVtZW50XG4gICAgY3JlYXRlUHJvZ3Jlc3NCYXIocGFyZW50OiBIVE1MRGl2RWxlbWVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRoaXMuYmFyLmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fcHJvZ3Jlc3MtYmFyJylcbiAgICAgICAgcGFyZW50LmFwcGVuZCh0aGlzLmJhcilcbiAgICB9XG4gICAgY2FsY1BlcmNlbnQodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuICgodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbikpICogMTAwXG4gICAgfVxuICAgIHNldERlZmF1bHQoaXNEb3VibGU6IGJvb2xlYW4sIHBlcmNlbnQ6IG51bWJlciwgcGVyY2VudFJpZ2h0OiBudW1iZXIgPSBOYU4pOiB2b2lkIHtcbiAgICAgICAgaWYgKGlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5sZWZ0ID0gcGVyY2VudCArICclJ1xuICAgICAgICAgICAgdGhpcy5iYXIuc3R5bGUucmlnaHQgPSAoMTAwIC0gcGVyY2VudFJpZ2h0KSArICclJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5iYXIuc3R5bGUucmlnaHQgPSAoMTAwIC0gcGVyY2VudCkgKyAnJSdcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLmxlZnQgPSBTdHJpbmcoMClcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRSaWdodChpc0RvdWJsZTogYm9vbGVhbiwgcGVyY2VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICghaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLmxlZnQgPSBwZXJjZW50ICsgJyUnXG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5yaWdodCA9IFN0cmluZygwKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBUaHVtYiB7XG5cbiAgICB0aHVtYkRlZmF1bHQhOiBIVE1MRGl2RWxlbWVudFxuICAgIHRodW1iUmlnaHQhOiBIVE1MRGl2RWxlbWVudFxuICAgIHRodW1iT3V0cHV0ITogSFRNTERpdkVsZW1lbnRcbiAgICB0aHVtYk91dHB1dFJpZ2h0PzogSFRNTERpdkVsZW1lbnRcblxuICAgIGluaXQgKHBhcmVudDogSFRNTERpdkVsZW1lbnQsIFxuICAgICAgICBpc0RvdWJsZTogYm9vbGVhbiwgXG4gICAgICAgIHRvZ2dsZUVsZW1lbnQ6IGJvb2xlYW4sIFxuICAgICAgICBkZWZhdWx0VmFsdWU6IG51bWJlciwgXG4gICAgICAgIHJpZ2h0VmFsdWU/OiBudW1iZXIpIHtcblxuICAgICAgICB0aGlzLmNyZWF0ZVRodW1iKHBhcmVudCwgaXNEb3VibGUpXG4gICAgICAgIGlmICh0b2dnbGVFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVRodW1iRWxlbWVudChpc0RvdWJsZSwgdGhpcy50aHVtYkRlZmF1bHQsIHRoaXMudGh1bWJSaWdodClcbiAgICAgICAgICAgIHRoaXMuc2V0VGh1bWJWYWx1ZShpc0RvdWJsZSwgZGVmYXVsdFZhbHVlLCByaWdodFZhbHVlKVxuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZVRodW1iKHBhcmVudDogSFRNTERpdkVsZW1lbnQsIGlzRG91YmxlOiBib29sZWFuKSB7XG4gICAgICAgIGlmKGlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLnRodW1iRGVmYXVsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB0aGlzLnRodW1iRGVmYXVsdC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3RodW1iJylcbiAgICAgICAgICAgIHRoaXMudGh1bWJEZWZhdWx0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdGh1bWJfbGVmdCcpXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kKHRoaXMudGh1bWJEZWZhdWx0KVxuXG4gICAgICAgICAgICB0aGlzLnRodW1iUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdGhpcy50aHVtYlJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdGh1bWInKVxuICAgICAgICAgICAgdGhpcy50aHVtYlJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdGh1bWJfcmlnaHQnKVxuICAgICAgICAgICAgcGFyZW50LmFwcGVuZCh0aGlzLnRodW1iUmlnaHQpXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGh1bWJEZWZhdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHRoaXMudGh1bWJEZWZhdWx0LmNsYXNzTmFtZSA9ICdyYW5nZS1zbGlkZXJfX3RodW1iJ1xuICAgICAgICAgICAgcGFyZW50LmFwcGVuZCh0aGlzLnRodW1iRGVmYXVsdClcblxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG4gICAgY3JlYXRlVGh1bWJFbGVtZW50KGlzRG91YmxlOiBib29sZWFuLCBwYXJlbnQ6IEhUTUxEaXZFbGVtZW50LCByaWdodFBhcmVudD86IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgICAgIGlmIChpc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy50aHVtYk91dHB1dFJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgICAgICB0aGlzLnRodW1iT3V0cHV0UmlnaHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX192YWx1ZS10aHVtYicpXG4gICAgICAgICAgICByaWdodFBhcmVudCEuYXBwZW5kKHRoaXMudGh1bWJPdXRwdXRSaWdodClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRodW1iT3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIHRoaXMudGh1bWJPdXRwdXQuY2xhc3NOYW1lID0gJ3JhbmdlLXNsaWRlcl9fdmFsdWUtdGh1bWInXG4gICAgICAgIHBhcmVudC5hcHBlbmQodGhpcy50aHVtYk91dHB1dClcbiAgICB9XG4gICAgc2V0VGh1bWJWYWx1ZShpc0RvdWJsZTogYm9vbGVhbiwgdmFsdWU6IG51bWJlciwgcmlnaHRWYWx1ZT86IG51bWJlcikge1xuICAgICAgICB0aGlzLnRodW1iT3V0cHV0LnRleHRDb250ZW50ID0gU3RyaW5nKHZhbHVlKVxuICAgICAgICBpZiAoaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMudGh1bWJPdXRwdXRSaWdodCEudGV4dENvbnRlbnQgPSBTdHJpbmcocmlnaHRWYWx1ZSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcGxhY2VUaHVtYihpc0RvdWJsZTogYm9vbGVhbiwgcGVyY2VudDogbnVtYmVyLCBwZXJjZW50UmlnaHQ6IG51bWJlciA9IE5hTik6IHZvaWQge1xuICAgICAgICB0aGlzLnRodW1iRGVmYXVsdC5zdHlsZS5sZWZ0ID0gcGVyY2VudCArICclJ1xuICAgICAgICBpZiAoaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMudGh1bWJSaWdodC5zdHlsZS5yaWdodCA9ICgxMDAgLSBwZXJjZW50UmlnaHQpICsgJyUnXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7Rm9ybSwgU3R5bGVzLCBQcm9ncmVzc0JhciwgVGh1bWJ9IiwiXG5pbXBvcnQge0Zvcm0sIFN0eWxlcywgUHJvZ3Jlc3NCYXIsIFRodW1ifSBmcm9tICcuL3N1YlZpZXdzJ1xuXG5pbnRlcmZhY2UgSURhdGEge1xuICAgIG1pbjogbnVtYmVyXG4gICAgbWF4OiBudW1iZXJcbiAgICBkZWZhdWx0VmFsdWU6IG51bWJlclxuICAgIHJpZ2h0VmFsdWU6IG51bWJlclxuICAgIGlzUmFuZ2U6IGJvb2xlYW5cbiAgICByaWdodFByb2dyZXNzQmFyOiBib29sZWFuXG4gICAgb3ZlclRodW1iRWxlbWVudDogYm9vbGVhblxuICAgIGlzVmVydGljYWw6IGJvb2xlYW5cbn1cbmludGVyZmFjZSBJT2JzZXJ2ZXJWaWV3IHtcbiAgICB1cGRhdGVNb2RlbChhcmcwOiBzdHJpbmcsIGFyZzE6IG51bWJlcik6IHZvaWRcbn1cblxuY2xhc3MgVmlldyB7XG4gICAgcGFyZW50OiBIVE1MRWxlbWVudFxuICAgIHdyYXBwZXIhOiBIVE1MRGl2RWxlbWVudFxuXG4gICAgZm9ybTogRm9ybVxuICAgIHN0eWxlczogU3R5bGVzXG4gICAgcHJvZ3Jlc3NCYXI6IFByb2dyZXNzQmFyXG4gICAgdGh1bWI6IFRodW1iXG4gICAgb3B0aW9uczogSURhdGFcbiAgICBvYnNlcnZlcnM6IElPYnNlcnZlclZpZXdbXVxuICAgIGNvbnN0cnVjdG9yKHBhcmVudDogSFRNTEVsZW1lbnQsIGZvcm06IEZvcm0sIHN0eWxlczogU3R5bGVzLCBwcm9ncmVzc0JhcjogUHJvZ3Jlc3NCYXIsIHRodW1iOiBUaHVtYikge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudFxuICAgICAgICB0aGlzLmZvcm0gPSBmb3JtXG4gICAgICAgIHRoaXMuc3R5bGVzID0gc3R5bGVzXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSBwcm9ncmVzc0JhclxuICAgICAgICB0aGlzLnRodW1iID0gdGh1bWJcblxuICAgIC8vIGRlZmF1bHQgZGF0YVxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogMTAsXG4gICAgICAgICAgICByaWdodFZhbHVlOiA1MCxcbiAgICAgICAgICAgIGlzUmFuZ2U6IHRydWUsXG4gICAgICAgICAgICByaWdodFByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgICAgICAgIG92ZXJUaHVtYkVsZW1lbnQ6IHRydWUsXG4gICAgICAgICAgICBpc1ZlcnRpY2FsOiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXVxuICAgIH1cbiAgICBzdWJzY3JpYmUob2JzZXJ2ZXI6IElPYnNlcnZlclZpZXcpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChvYnNlcnZlcilcbiAgICB9XG4gICAgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5jcmVhdGVXcmFwcGVyKClcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZm9ybS5pbml0KFxuICAgICAgICAgICAgdGhpcy53cmFwcGVyLCBcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pc1JhbmdlLCBcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5taW4sIFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1heFxuICAgICAgICApXG4gICAgICAgIHRoaXMuc3R5bGVzLmluaXQodGhpcy53cmFwcGVyKVxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLmNyZWF0ZVByb2dyZXNzQmFyKHRoaXMuc3R5bGVzLnN0eWxlKVxuICAgICAgICB0aGlzLnRodW1iLmluaXQoXG4gICAgICAgICAgICB0aGlzLnN0eWxlcy5zdHlsZSxcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pc1JhbmdlLFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm92ZXJUaHVtYkVsZW1lbnQsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZGVmYXVsdFZhbHVlLFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnJpZ2h0VmFsdWVcbiAgICAgICAgKVxuICAgICAgICBcblxuICAgICAgICB0aGlzLnNldElucHV0KClcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZXZlbnRJbnB1dCgpXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuYmFyLm9ubW91c2Vkb3duID0gZWxlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50Q2xpY2soZWxlbSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0eWxlcy50cmFjay5vbm1vdXNlZG93biA9IGVsZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5ldmVudENsaWNrKGVsZW0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ldmVudEhvdmVyKClcbiAgICAgICAgdGhpcy5ldmVudEFjdGl2ZSgpXG4gICAgICAgIGlmKHRoaXMub3B0aW9ucy5pc1ZlcnRpY2FsKSB7XG4gICAgICAgICAgICB0aGlzLndyYXBwZXIuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX3ZlcnRpY2FsJylcbiAgICAgICAgICAgIHRoaXMudGh1bWIudGh1bWJPdXRwdXQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX192YWx1ZS10aHVtYl92ZXJ0aWNhbCcpXG4gICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iT3V0cHV0UmlnaHQ/LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdmFsdWUtdGh1bWJfVmVydGljYWwnKVxuICAgICAgICB9XG4gICAgfSBcblxuICAgIGNyZWF0ZVdyYXBwZXIgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMud3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRoaXMud3JhcHBlci5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXInKVxuICAgICAgICB0aGlzLnBhcmVudC5hcHBlbmQodGhpcy53cmFwcGVyKVxuICAgIH1cblxuICAgIHNldElucHV0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmZvcm0uc2V0SW5wdXRWYWx1ZSh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgdGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSwgdGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBwbGFjZURlZmF1bHQ6IG51bWJlciA9IHRoaXMucHJvZ3Jlc3NCYXIuY2FsY1BlcmNlbnQoXG4gICAgICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0LnZhbHVlKSwgXG4gICAgICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0Lm1pbiksIFxuICAgICAgICAgICAgICAgICAgICBOdW1iZXIodGhpcy5mb3JtLmRlZmF1bHRJbnB1dC5tYXgpKVxuICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICBjb25zdCBwbGFjZVJpZ2h0OiBudW1iZXIgPSB0aGlzLmZvcm0ucmlnaHRJbnB1dCA/IFxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5jYWxjUGVyY2VudChcbiAgICAgICAgICAgICAgICBOdW1iZXIodGhpcy5mb3JtLnJpZ2h0SW5wdXQudmFsdWUpLCBcbiAgICAgICAgICAgICAgICBOdW1iZXIodGhpcy5mb3JtLnJpZ2h0SW5wdXQubWluKSwgXG4gICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5yaWdodElucHV0Lm1heCkpIFxuICAgICAgICAgICAgICAgIDogTmFOIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuc2V0RGVmYXVsdCh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGxhY2VEZWZhdWx0LCBwbGFjZVJpZ2h0KVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yaWdodFByb2dyZXNzQmFyKSB7IFxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5zZXRSaWdodCh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGxhY2VEZWZhdWx0KSBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGh1bWIucGxhY2VUaHVtYih0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGxhY2VEZWZhdWx0LCBwbGFjZVJpZ2h0KVxuXG4gICAgICAgIFxuICAgIH1cbiAgICBldmVudElucHV0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmZvcm0uZGVmYXVsdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSA9IE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0LnZhbHVlKVxuICAgICAgICAgICAgdGhpcy5zZXRJbnB1dCgpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLnVwZGF0ZU1vZGVsKCdkZWZhdWx0JywgTnVtYmVyKHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQudmFsdWUpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMudGh1bWIuc2V0VGh1bWJWYWx1ZSh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSwgdGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUpXG4gICAgICAgIH0pXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNSYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtLnJpZ2h0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUgPSBOdW1iZXIodGhpcy5mb3JtLnJpZ2h0SW5wdXQudmFsdWUpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJbnB1dCgpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVwZGF0ZU1vZGVsKCdyaWdodCcsIE51bWJlcih0aGlzLmZvcm0ucmlnaHRJbnB1dC52YWx1ZSkpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aGlzLnRodW1iLnNldFRodW1iVmFsdWUodGhpcy5vcHRpb25zLmlzUmFuZ2UsIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZGVmYXVsdFZhbHVlLCB0aGlzLm9wdGlvbnMucmlnaHRWYWx1ZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgZXZlbnRDbGljayhlbGVtOiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGNvb3JkczogRE9NUmVjdCA9IHRoaXMuc3R5bGVzLnRyYWNrLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIGNvbnN0IGxlbmd0aDogbnVtYmVyID0gY29vcmRzLnJpZ2h0IC0gY29vcmRzLmxlZnRcbiAgICAgICAgY29uc3QgY3VycmVudFBvc2l0aW9uOiBudW1iZXIgPSBlbGVtLnBhZ2VYIC0gY29vcmRzLmxlZnRcbiAgICAgICAgY29uc3QgcGVyY2VudDogbnVtYmVyID0gY3VycmVudFBvc2l0aW9uL2xlbmd0aCAqIDEwMFxuXG4gICAgICAgIGNvbnN0IHBsYWNlRGVmYXVsdDogbnVtYmVyID0gdGhpcy5wcm9ncmVzc0Jhci5jYWxjUGVyY2VudChcbiAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0LnZhbHVlKSwgXG4gICAgICAgICAgICBOdW1iZXIodGhpcy5mb3JtLmRlZmF1bHRJbnB1dC5taW4pLCBcbiAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0Lm1heCkpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBuZXdWYWx1ZTogbnVtYmVyID0gdGhpcy5jYWxjVmFsdWUocGVyY2VudClcbiAgICAgICAgY29uc3QgaGFsZk9mQmFyOiBudW1iZXIgPSAodGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUgKyB0aGlzLm9wdGlvbnMuZGVmYXVsdFZhbHVlKSAvIDJcbiAgICBcbiAgICAgICAgY29uc3QgaXNSaWdodFRyYWNrOiBib29sZWFuID0gdGhpcy5vcHRpb25zLmlzUmFuZ2UgJiYgbmV3VmFsdWUgPiB0aGlzLm9wdGlvbnMucmlnaHRWYWx1ZVxuICAgICAgICBjb25zdCBpc1JpZ2h0QmFyID0gdGhpcy5vcHRpb25zLmlzUmFuZ2UgJiYgbmV3VmFsdWUgPiBoYWxmT2ZCYXJcblxuICAgICAgICBpZihpc1JpZ2h0VHJhY2sgfHwgaXNSaWdodEJhcikge1xuICAgICAgICAgICAgdGhpcy5mb3JtLnJpZ2h0SW5wdXQudmFsdWUgPSBTdHJpbmcobmV3VmFsdWUpXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMucmlnaHRWYWx1ZSA9IG5ld1ZhbHVlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMudGh1bWIucGxhY2VUaHVtYih0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGxhY2VEZWZhdWx0LCBwZXJjZW50KVxuXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnNldERlZmF1bHQodGhpcy5vcHRpb25zLmlzUmFuZ2UsIHBsYWNlRGVmYXVsdCwgcGVyY2VudClcblxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIudXBkYXRlTW9kZWwoJ3JpZ2h0JywgbmV3VmFsdWUpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB0aGlzLnRodW1iLnNldFRodW1iVmFsdWUodGhpcy5vcHRpb25zLmlzUmFuZ2UsIFxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kZWZhdWx0VmFsdWUsIHRoaXMub3B0aW9ucy5yaWdodFZhbHVlKVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZvcm0uZGVmYXVsdElucHV0LnZhbHVlID0gU3RyaW5nKG5ld1ZhbHVlKVxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSA9IG5ld1ZhbHVlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMudGh1bWIucGxhY2VUaHVtYih0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGVyY2VudClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yaWdodFByb2dyZXNzQmFyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5zZXRSaWdodCh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGVyY2VudClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5zZXREZWZhdWx0KHRoaXMub3B0aW9ucy5pc1JhbmdlLCBwZXJjZW50KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIudXBkYXRlTW9kZWwoJ2RlZmF1bHQnLCBuZXdWYWx1ZSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHRoaXMudGh1bWIuc2V0VGh1bWJWYWx1ZSh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSwgdGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUpXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYWxjVmFsdWUocGVyY2VudDogbnVtYmVyLCBcbiAgICAgICAgbWluOiBudW1iZXIgPSB0aGlzLm9wdGlvbnMubWluLCBcbiAgICAgICAgbWF4OiBudW1iZXIgPSB0aGlzLm9wdGlvbnMubWF4KTogbnVtYmVyIHtcbiAgICAgICAgICAgIGxldCBkaWFwYXNvbjogbnVtYmVyID0gbWF4IC0gbWluXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChkaWFwYXNvbiAtIChtYXggLSAoKGRpYXBhc29uKSAqIHBlcmNlbnQpIC8gMTAwKSlcbiAgICB9XG4gICAgXG4gICAgZXZlbnRIb3ZlciA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5mb3JtLmRlZmF1bHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm92ZXJUaHVtYkVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iT3V0cHV0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdmFsdWUtdGh1bWJfYmlnJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudGh1bWIudGh1bWJEZWZhdWx0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdGh1bWJfaG92ZXInKVxuICAgICAgICB9KVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlzUmFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5yaWdodElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm92ZXJUaHVtYkVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHVtYi50aHVtYk91dHB1dFJpZ2h0Py5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3ZhbHVlLXRodW1iX2JpZycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudGh1bWIudGh1bWJSaWdodC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3RodW1iX2hvdmVyJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZvcm0uZGVmYXVsdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5vdmVyVGh1bWJFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHVtYi50aHVtYk91dHB1dC5jbGFzc0xpc3QucmVtb3ZlKCdyYW5nZS1zbGlkZXJfX3ZhbHVlLXRodW1iX2JpZycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iRGVmYXVsdC5jbGFzc0xpc3QucmVtb3ZlKCdyYW5nZS1zbGlkZXJfX3RodW1iX2hvdmVyJylcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pc1JhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm0ucmlnaHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm92ZXJUaHVtYkVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHVtYi50aHVtYk91dHB1dFJpZ2h0Py5jbGFzc0xpc3QucmVtb3ZlKCdyYW5nZS1zbGlkZXJfX3ZhbHVlLXRodW1iX2JpZycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudGh1bWIudGh1bWJSaWdodC5jbGFzc0xpc3QucmVtb3ZlKCdyYW5nZS1zbGlkZXJfX3RodW1iX2hvdmVyJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgZXZlbnRBY3RpdmUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50aHVtYi50aHVtYkRlZmF1bHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYl9hY3RpdmUnKVxuICAgICAgICB9KVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlzUmFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5yaWdodElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iUmlnaHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYl9hY3RpdmUnKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudGh1bWIudGh1bWJEZWZhdWx0LmNsYXNzTGlzdC5yZW1vdmUoJ3JhbmdlLXNsaWRlcl9fdGh1bWJfYWN0aXZlJylcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pc1JhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm0ucmlnaHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudGh1bWIudGh1bWJSaWdodC5jbGFzc0xpc3QucmVtb3ZlKCdyYW5nZS1zbGlkZXJfX3RodW1iX2FjdGl2ZScpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIFxufVxuXG5leHBvcnQge1ZpZXd9XG4iXSwic291cmNlUm9vdCI6IiJ9