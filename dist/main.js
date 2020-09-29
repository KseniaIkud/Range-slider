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
  overThumbElement: true,
  isRange: true,
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

        (_this$thumb$thumbOutp = _this.thumb.thumbOutputRight) === null || _this$thumb$thumbOutp === void 0 ? void 0 : _this$thumb$thumbOutp.classList.add('range-slider__value-thumb_vertical');
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
      // for vertical slider it works different
      var coords = this.styles.track.getBoundingClientRect();
      var length = coords.right - coords.left;
      var currentPosition = elem.pageX - coords.left;
      var percent;

      if (this.options.isVertical) {
        currentPosition = elem.pageY - coords.top;
        length = coords.bottom - coords.top;

        if (length < currentPosition) {
          currentPosition = length;
        }
      }

      percent = currentPosition / length * 100; // if (percent > 100) {
      //     percent = 100
      // }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4gc3luYyBcXC4odHN8c2NzcykkIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2pxdWVyeS5tYWluLmQudHMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5zY3NzIiwid2VicGFjazovLy8uL212Yy9jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL212Yy9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9tdmMvc3ViVmlld3MudHMiLCJ3ZWJwYWNrOi8vLy4vbXZjL3ZpZXcudHMiXSwibmFtZXMiOlsiaW1wb3J0QWxsIiwiciIsImtleXMiLCJmb3JFYWNoIiwicmVxdWlyZSIsIiQiLCJmbiIsInJhbmdlU2xpZGVyIiwic2V0dGluZ3MiLCJwbHVnaW4iLCJDb250cm9sbGVyIiwiTW9kZWwiLCJtaW4iLCJtYXgiLCJkZWZhdWx0VmFsdWUiLCJpbml0aWFsVmFsdWUiLCJsZWZ0VmFsdWUiLCJyaWdodFZhbHVlIiwiaXNSYW5nZSIsInJpZ2h0UHJvZ3Jlc3NCYXIiLCJvdmVyVGh1bWJFbGVtZW50Iiwic3RlcCIsImlzVmVydGljYWwiLCJWaWV3IiwiRm9ybSIsIlN0eWxlcyIsIlByb2dyZXNzQmFyIiwiVGh1bWIiLCJqUXVlcnkiLCJtb2RlbCIsInZpZXciLCJzdWJzY3JpYmUiLCJpbml0Iiwib3B0aW9ucyIsImRhdGFGb3JWaWV3Iiwib3B0aW9uIiwibmV3VmFsdWUiLCJ1cGRhdGUiLCJzZXRJbnB1dCIsIm9ic2VydmVycyIsIm9ic2VydmVyIiwicHVzaCIsImxpbWl0VG9nZ2xlIiwibGltaXRTdGVwIiwidXBkYXRlVmlldyIsImNvbnNvbGUiLCJsb2ciLCJjYWxjTmVhcmVzdCIsInJvdW5kVG9NaW4iLCJwYXJlbnQiLCJpc0RvdWJsZSIsImNyZWF0ZUZvcm0iLCJjcmVhdGVJbnB1dCIsInNldE1pbiIsInNldE1heCIsImZvcm0iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmQiLCJkZWZhdWx0SW5wdXQiLCJ0eXBlIiwicmlnaHRJbnB1dCIsInZhbHVlIiwiTmFOIiwiU3RyaW5nIiwiY3JlYXRlU3R5bGVzIiwiY3JlYXRlVHJhY2siLCJzdHlsZSIsInRyYWNrIiwiYmFyIiwicGVyY2VudCIsInBlcmNlbnRSaWdodCIsImxlZnQiLCJyaWdodCIsInRvZ2dsZUVsZW1lbnQiLCJjcmVhdGVUaHVtYiIsImNyZWF0ZVRodW1iRWxlbWVudCIsInRodW1iRGVmYXVsdCIsInRodW1iUmlnaHQiLCJzZXRUaHVtYlZhbHVlIiwiY2xhc3NOYW1lIiwicmlnaHRQYXJlbnQiLCJ0aHVtYk91dHB1dFJpZ2h0IiwidGh1bWJPdXRwdXQiLCJ0ZXh0Q29udGVudCIsInN0eWxlcyIsInByb2dyZXNzQmFyIiwidGh1bWIiLCJjcmVhdGVXcmFwcGVyIiwid3JhcHBlciIsImNyZWF0ZVByb2dyZXNzQmFyIiwiZXZlbnRJbnB1dCIsIm9ubW91c2Vkb3duIiwiZWxlbSIsImV2ZW50Q2xpY2siLCJldmVudEhvdmVyIiwiZXZlbnRBY3RpdmUiLCJzZXRJbnB1dFZhbHVlIiwicGxhY2VEZWZhdWx0IiwiY2FsY1BlcmNlbnQiLCJOdW1iZXIiLCJwbGFjZVJpZ2h0Iiwic2V0RGVmYXVsdCIsInNldFJpZ2h0IiwicGxhY2VUaHVtYiIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1cGRhdGVNb2RlbCIsInJlbW92ZSIsImNvb3JkcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlbmd0aCIsImN1cnJlbnRQb3NpdGlvbiIsInBhZ2VYIiwicGFnZVkiLCJ0b3AiLCJib3R0b20iLCJjYWxjVmFsdWUiLCJoYWxmT2ZCYXIiLCJpc1JpZ2h0VHJhY2siLCJpc1JpZ2h0QmFyIiwiZGlhcGFzb24iLCJNYXRoIiwicm91bmQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFD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LHVFQUQxQixLQUFLcUIsT0FBTCxDQUFhckIsR0FDYTtBQUFBLFVBQXhDQyxHQUF3Qyx1RUFBMUIsS0FBS29CLE9BQUwsQ0FBYXBCLEdBQWE7QUFDcEMsVUFBSTZHLFFBQWdCLEdBQUc3RyxHQUFHLEdBQUdELEdBQTdCO0FBQ0EsYUFBTytHLElBQUksQ0FBQ0MsS0FBTCxDQUFXRixRQUFRLElBQUk3RyxHQUFHLEdBQUs2RyxRQUFELEdBQWFsRCxPQUFkLEdBQXlCLEdBQW5DLENBQW5CLENBQVA7QUFDUCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9qcXVlcnkubWFpbi5kLnRzXCI6IFwiLi9qcXVlcnkubWFpbi5kLnRzXCIsXG5cdFwiLi9tYWluLnNjc3NcIjogXCIuL21haW4uc2Nzc1wiLFxuXHRcIi4vbXZjL2NvbnRyb2xsZXIudHNcIjogXCIuL212Yy9jb250cm9sbGVyLnRzXCIsXG5cdFwiLi9tdmMvbW9kZWwudHNcIjogXCIuL212Yy9tb2RlbC50c1wiLFxuXHRcIi4vbXZjL3N1YlZpZXdzLnRzXCI6IFwiLi9tdmMvc3ViVmlld3MudHNcIixcblx0XCIuL212Yy92aWV3LnRzXCI6IFwiLi9tdmMvdmlldy50c1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLih0c3xzY3NzKSRcIjsiLCJmdW5jdGlvbiBpbXBvcnRBbGwocikge1xuICByLmtleXMoKS5mb3JFYWNoKHIpXG59XG5cbmltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4vJywgdHJ1ZSwgL1xcLih0c3xzY3NzKSQvKSkiLCJcbmltcG9ydCB7Rm9ybSwgU3R5bGVzLCBQcm9ncmVzc0JhciwgVGh1bWJ9IGZyb20gJy4vbXZjL3N1YlZpZXdzLnRzJ1xuaW1wb3J0IHtWaWV3fSBmcm9tICcuL212Yy92aWV3LnRzJ1xuaW1wb3J0IHtNb2RlbH0gZnJvbSAnLi9tdmMvbW9kZWwudHMnXG5pbXBvcnQge0NvbnRyb2xsZXJ9IGZyb20gJy4vbXZjL2NvbnRyb2xsZXInXG5cblxuKGZ1bmN0aW9uKCQ6IEpRdWVyeVN0YXRpYykge1xuICAgICQuZm4ucmFuZ2VTbGlkZXIgPSBmdW5jdGlvbihzZXR0aW5nczoge1xuICAgICAgICBtaW4/OiBudW1iZXJcbiAgICAgICAgbWF4PzogbnVtYmVyXG4gICAgICAgIGluaXRpYWxWYWx1ZT86IG51bWJlclxuICAgICAgICBsZWZ0VmFsdWU/OiBudW1iZXJcbiAgICAgICAgZGVmYXVsdFZhbHVlPzogbnVtYmVyXG4gICAgICAgIHJpZ2h0VmFsdWU/OiBudW1iZXJcbiAgICAgICAgaXNSYW5nZT86IGJvb2xlYW5cbiAgICAgICAgcmlnaHRQcm9ncmVzc0Jhcj86IGJvb2xlYW5cbiAgICAgICAgb3ZlclRodW1iRWxlbWVudD86IGJvb2xlYW5cbiAgICAgICAgc3RlcD86IG51bWJlclxuICAgICAgICBpc1ZlcnRpY2FsPzogYm9vbGVhblxuICAgIH0pIHtcbiAgICAgICAgY29uc3QgcGx1Z2luID0gbmV3IENvbnRyb2xsZXIoXG4gICAgICAgICAgICBuZXcgTW9kZWwoe1xuICAgICAgICAgICAgICAgIG1pbjogc2V0dGluZ3MubWluLFxuICAgICAgICAgICAgICAgIG1heDogc2V0dGluZ3MubWF4LFxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogc2V0dGluZ3MuaW5pdGlhbFZhbHVlIHx8IHNldHRpbmdzLmxlZnRWYWx1ZSxcbiAgICAgICAgICAgICAgICByaWdodFZhbHVlOiBzZXR0aW5ncy5yaWdodFZhbHVlLFxuICAgICAgICAgICAgICAgIGlzUmFuZ2U6IHNldHRpbmdzLmlzUmFuZ2UsXG4gICAgICAgICAgICAgICAgcmlnaHRQcm9ncmVzc0Jhcjogc2V0dGluZ3MucmlnaHRQcm9ncmVzc0JhcixcbiAgICAgICAgICAgICAgICBvdmVyVGh1bWJFbGVtZW50OiBzZXR0aW5ncy5vdmVyVGh1bWJFbGVtZW50LFxuICAgICAgICAgICAgICAgIHN0ZXA6IHNldHRpbmdzLnN0ZXAsXG4gICAgICAgICAgICAgICAgaXNWZXJ0aWNhbDogc2V0dGluZ3MuaXNWZXJ0aWNhbFxuICAgICAgICAgICAgfSksIFxuICAgICAgICAgICAgbmV3IFZpZXcoIFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgbmV3IEZvcm0oKSxcbiAgICAgICAgICAgICAgICBuZXcgU3R5bGVzKCksXG4gICAgICAgICAgICAgICAgbmV3IFByb2dyZXNzQmFyKCksXG4gICAgICAgICAgICAgICAgbmV3IFRodW1iKCkgXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIHBsdWdpblxuICAgIH1cbn0pKGpRdWVyeSlcblxuXG4kKCcjZmlyc3QtcmFuZ2Utc2xpZGVyJykucmFuZ2VTbGlkZXIoe1xuICAgIGlzUmFuZ2U6IHRydWUsXG4gICAgbGVmdFZhbHVlOiAxNSxcbiAgICByaWdodFZhbHVlOiA2MCxcbiAgICBvdmVyVGh1bWJFbGVtZW50OiB0cnVlLFxuICAgIHN0ZXA6IDNcbn0pXG4kKCcjc2Vjb25kLXJhbmdlLXNsaWRlcicpLnJhbmdlU2xpZGVyKHtcbiAgICBsZWZ0VmFsdWU6IDQwLFxuICAgIHJpZ2h0VmFsdWU6IDcwLFxuICAgIG92ZXJUaHVtYkVsZW1lbnQ6IGZhbHNlXG59KVxuJCgnI3RoaXJkLXJhbmdlLXNsaWRlcicpLnJhbmdlU2xpZGVyKHtcbiAgICBtaW46IDAsXG4gICAgbWF4OiAzMCxcbiAgICBpbml0aWFsVmFsdWU6IDIwLFxuICAgIHJpZ2h0UHJvZ3Jlc3NCYXI6IHRydWUsXG4gICAgb3ZlclRodW1iRWxlbWVudDogdHJ1ZVxufSlcbiQoJyNmb3J0aC1yYW5nZS1zbGlkZXInKS5yYW5nZVNsaWRlcih7XG4gICAgaW5pdGlhbFZhbHVlOiAyMCxcbiAgICBvdmVyVGh1bWJFbGVtZW50OiB0cnVlLFxuICAgIGlzUmFuZ2U6IHRydWUsXG4gICAgc3RlcDogMTAsXG4gICAgbWF4OiAxMDAsXG4gICAgaXNWZXJ0aWNhbDogdHJ1ZVxufSlcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MDEzMzgyMDAxNjRcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL2hvbWUveGVuYS9SYW5nZS1zbGlkZXIvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInJlbG9hZEFsbFwiOnRydWUsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJpbXBvcnQge01vZGVsfSBmcm9tICcuL21vZGVsJ1xuaW1wb3J0IHtWaWV3fSBmcm9tICcuL3ZpZXcnXG5cbmNsYXNzIENvbnRyb2xsZXIge1xuICAgIG1vZGVsOiBNb2RlbFxuICAgIHZpZXc6IFZpZXdcbiAgICBjb25zdHJ1Y3Rvcihtb2RlbDogTW9kZWwsIHZpZXc6IFZpZXcpIHtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsXG4gICAgICAgIHRoaXMudmlldyA9IHZpZXdcbiAgICAgICAgdGhpcy52aWV3Lm9wdGlvbnMgPSB0aGlzLm1vZGVsLmRhdGFGb3JWaWV3XG4gICAgICAgIHRoaXMuaW5pdCgpIFxuICAgIH1cbiAgICBpbml0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnZpZXcuc3Vic2NyaWJlKHRoaXMpXG4gICAgICAgIHRoaXMubW9kZWwuc3Vic2NyaWJlKHRoaXMpXG4gICAgICAgIHRoaXMudmlldy5pbml0KClcbiAgICB9XG4gICAgdXBkYXRlTW9kZWwob3B0aW9uOiBzdHJpbmcsIG5ld1ZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5tb2RlbC51cGRhdGUob3B0aW9uLCBuZXdWYWx1ZSlcbiAgICB9XG4gICAgdXBkYXRlVmlldygpIHtcbiAgICAgICAgdGhpcy52aWV3Lm9wdGlvbnMuZGVmYXVsdFZhbHVlID0gdGhpcy5tb2RlbC5kZWZhdWx0VmFsdWVcbiAgICAgICAgdGhpcy52aWV3Lm9wdGlvbnMucmlnaHRWYWx1ZSA9IHRoaXMubW9kZWwucmlnaHRWYWx1ZVxuICAgICAgICB0aGlzLnZpZXcuc2V0SW5wdXQoKVxuICAgIH1cbn1cblxuZXhwb3J0IHtDb250cm9sbGVyfSIsImludGVyZmFjZSBJRGF0YSB7XG4gICAgbWluOiBudW1iZXJcbiAgICBtYXg6IG51bWJlclxuICAgIGRlZmF1bHRWYWx1ZTogbnVtYmVyXG4gICAgcmlnaHRWYWx1ZTogbnVtYmVyXG4gICAgaXNSYW5nZTogYm9vbGVhblxuICAgIHJpZ2h0UHJvZ3Jlc3NCYXI6IGJvb2xlYW5cbiAgICBvdmVyVGh1bWJFbGVtZW50OiBib29sZWFuXG4gICAgaXNWZXJ0aWNhbDogYm9vbGVhblxuICAgIHN0ZXA/OiBudW1iZXJcbn1cbmludGVyZmFjZSBJT2JzZXJ2ZXJNb2RlbCB7XG4gICAgdXBkYXRlVmlldygpOiB2b2lkXG59XG5cbmNsYXNzIE1vZGVsIHtcbiAgICBtaW46IG51bWJlclxuICAgIG1heDogbnVtYmVyXG4gICAgZGVmYXVsdFZhbHVlOiBudW1iZXJcbiAgICByaWdodFZhbHVlOiBudW1iZXJcbiAgICBpc1JhbmdlOiBib29sZWFuXG4gICAgcmlnaHRQcm9ncmVzc0JhcjogYm9vbGVhblxuICAgIG92ZXJUaHVtYkVsZW1lbnQ6IGJvb2xlYW5cbiAgICBkYXRhRm9yVmlldzogSURhdGFcbiAgICBzdGVwOiBudW1iZXJcbiAgICBpc1ZlcnRpY2FsOiBib29sZWFuXG4gICAgb2JzZXJ2ZXJzOiBJT2JzZXJ2ZXJNb2RlbFtdXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogSURhdGEpIHtcbiAgICAgICAgdGhpcy5taW4gPSBvcHRpb25zLm1pbiA/IG9wdGlvbnMubWluIDogMFxuICAgICAgICB0aGlzLm1heCA9IG9wdGlvbnMubWF4ID8gb3B0aW9ucy5tYXggOiAxMDBcbiAgICAgICAgdGhpcy5kZWZhdWx0VmFsdWUgPSBvcHRpb25zLmRlZmF1bHRWYWx1ZSA/IG9wdGlvbnMuZGVmYXVsdFZhbHVlIDogNTBcbiAgICAgICAgdGhpcy5yaWdodFZhbHVlID0gb3B0aW9ucy5yaWdodFZhbHVlID8gb3B0aW9ucy5yaWdodFZhbHVlIDogNjBcbiAgICAgICAgdGhpcy5pc1JhbmdlID0gb3B0aW9ucy5pc1JhbmdlXG4gICAgICAgIHRoaXMucmlnaHRQcm9ncmVzc0JhciA9IG9wdGlvbnMucmlnaHRQcm9ncmVzc0JhclxuICAgICAgICB0aGlzLm92ZXJUaHVtYkVsZW1lbnQgPSBvcHRpb25zLm92ZXJUaHVtYkVsZW1lbnRcbiAgICAgICAgdGhpcy5zdGVwID0gb3B0aW9ucy5zdGVwID8gb3B0aW9ucy5zdGVwIDogMVxuICAgICAgICB0aGlzLmlzVmVydGljYWwgPSBvcHRpb25zLmlzVmVydGljYWxcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXVxuICAgICAgICB0aGlzLmRhdGFGb3JWaWV3ID0ge1xuICAgICAgICAgICAgbWluOiB0aGlzLm1pbixcbiAgICAgICAgICAgIG1heDogdGhpcy5tYXgsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IHRoaXMuZGVmYXVsdFZhbHVlLFxuICAgICAgICAgICAgcmlnaHRWYWx1ZTogdGhpcy5yaWdodFZhbHVlLFxuICAgICAgICAgICAgaXNSYW5nZTogdGhpcy5pc1JhbmdlLFxuICAgICAgICAgICAgcmlnaHRQcm9ncmVzc0JhcjogdGhpcy5yaWdodFByb2dyZXNzQmFyLFxuICAgICAgICAgICAgb3ZlclRodW1iRWxlbWVudDogdGhpcy5vdmVyVGh1bWJFbGVtZW50LFxuICAgICAgICAgICAgaXNWZXJ0aWNhbDogdGhpcy5pc1ZlcnRpY2FsXG4gICAgICAgIH1cbiAgICB9XG4gICAgc3Vic2NyaWJlKG9ic2VydmVyOiBJT2JzZXJ2ZXJNb2RlbCkge1xuICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKVxuICAgIH1cbiAgICB1cGRhdGUob3B0aW9uOiBzdHJpbmcsIG5ld1ZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5saW1pdFRvZ2dsZShvcHRpb24sIG5ld1ZhbHVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5saW1pdFN0ZXAobmV3VmFsdWUpXG4gICAgICAgIH1cbiAgICB9XG4gICAgbGltaXRUb2dnbGUob3B0aW9uOiBzdHJpbmcsIG5ld1ZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgc3dpdGNoIChvcHRpb24pIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FzZSgnZGVmYXVsdCcpOlxuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA8IHRoaXMucmlnaHRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpbWl0U3RlcChuZXdWYWx1ZSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVwZGF0ZVZpZXcoKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXNlKCdyaWdodCcpOlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlID4gdGhpcy5kZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saW1pdFN0ZXAobmV3VmFsdWUsICdyaWdodCcpXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQsNC70Y/RgNC80LAnKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVwZGF0ZVZpZXcoKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICBsaW1pdFN0ZXAobmV3VmFsdWU6IG51bWJlciwgb3B0aW9uOiBzdHJpbmcgPSAnZGVmYXVsdCcpIHtcblxuICAgICAgICBzd2l0Y2gob3B0aW9uKSB7XG4gICAgICAgICAgICBjYXNlKCdkZWZhdWx0Jyk6IFxuICAgICAgICAgICAgaWYobmV3VmFsdWUgJSB0aGlzLnN0ZXAgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IG5ld1ZhbHVlXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gdGhpcy5jYWxjTmVhcmVzdChuZXdWYWx1ZSlcbiAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudXBkYXRlVmlldygpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrXG5cblxuICAgICAgICAgICAgY2FzZSgncmlnaHQnKTpcbiAgICAgICAgICAgIGlmKG5ld1ZhbHVlICUgdGhpcy5zdGVwID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodFZhbHVlID0gbmV3VmFsdWVcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodFZhbHVlID0gdGhpcy5jYWxjTmVhcmVzdChuZXdWYWx1ZSlcbiAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudXBkYXRlVmlldygpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGNhbGNOZWFyZXN0KG5ld1ZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBsZXQgcm91bmRUb01pbiA9IG5ld1ZhbHVlIC0gKG5ld1ZhbHVlICUgdGhpcy5zdGVwKVxuICAgICAgICBpZiAoKG5ld1ZhbHVlICUgdGhpcy5zdGVwKSA+ICh0aGlzLnN0ZXAgLyAyKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RlcCArIHJvdW5kVG9NaW5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm91bmRUb01pblxuICAgIH1cbn1cblxuZXhwb3J0IHtNb2RlbH0iLCJjbGFzcyBGb3JtIHtcbiAgICBmb3JtITogSFRNTERpdkVsZW1lbnRcbiAgICBkZWZhdWx0SW5wdXQhOiBIVE1MSW5wdXRFbGVtZW50XG4gICAgcmlnaHRJbnB1dCE6IEhUTUxJbnB1dEVsZW1lbnRcblxuICAgIGluaXQocGFyZW50OiBIVE1MRGl2RWxlbWVudCwgaXNEb3VibGU6IGJvb2xlYW4sIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZUZvcm0ocGFyZW50KVxuICAgICAgICB0aGlzLmNyZWF0ZUlucHV0KGlzRG91YmxlKVxuICAgICAgICB0aGlzLnNldE1pbihpc0RvdWJsZSwgbWluKVxuICAgICAgICB0aGlzLnNldE1heChpc0RvdWJsZSwgbWF4KVxuICAgIH1cblxuICAgIGNyZWF0ZUZvcm0ocGFyZW50OiBIVE1MRGl2RWxlbWVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZvcm0gPSA8SFRNTERpdkVsZW1lbnQ+KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKVxuICAgICAgICB0aGlzLmZvcm0uY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19mb3JtJylcbiAgICAgICAgcGFyZW50LmFwcGVuZCh0aGlzLmZvcm0pXG4gICAgfVxuICAgIFxuICAgIGNyZWF0ZUlucHV0KGlzRG91YmxlOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGlmIChpc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC50eXBlID0gJ3JhbmdlJ1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19pbnB1dCcpIFxuICAgICAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19pbnB1dF9sZWZ0JylcbiAgICAgICAgICAgIHRoaXMuZm9ybS5hcHBlbmQodGhpcy5kZWZhdWx0SW5wdXQpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMucmlnaHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgIHRoaXMucmlnaHRJbnB1dC50eXBlID0gJ3JhbmdlJ1xuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9faW5wdXQnKVxuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9faW5wdXRfcmlnaHQnKVxuICAgICAgICAgICAgdGhpcy5mb3JtLmFwcGVuZCh0aGlzLnJpZ2h0SW5wdXQpXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQudHlwZSA9ICdyYW5nZSdcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9faW5wdXQnKVxuICAgICAgICAgICAgdGhpcy5mb3JtLmFwcGVuZCh0aGlzLmRlZmF1bHRJbnB1dClcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRJbnB1dFZhbHVlKGlzRG91YmxlOiBib29sZWFuLCB2YWx1ZTogbnVtYmVyLCByaWdodFZhbHVlOiBudW1iZXIgPSBOYU4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQudmFsdWUgPSBTdHJpbmcodmFsdWUpXG4gICAgICAgIGlmIChpc0RvdWJsZSkgeyAgIFxuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0LnZhbHVlID0gU3RyaW5nKHJpZ2h0VmFsdWUpXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0TWluKGlzRG91YmxlOiBib29sZWFuLCBtaW46IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC5taW4gPSBTdHJpbmcobWluKVxuICAgICAgICBpZiAoaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHRJbnB1dC5taW4gPSBTdHJpbmcobWluKVxuICAgICAgICB9XG4gICAgfVxuICAgIHNldE1heChpc0RvdWJsZTogYm9vbGVhbiwgbWF4OiBudW1iZXIgPSAxMDApOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQubWF4ID0gU3RyaW5nKG1heClcbiAgICAgICAgaWYgKGlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQubWF4ID0gU3RyaW5nKG1heClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgU3R5bGVzIHtcbiAgICBzdHlsZSE6IEhUTUxEaXZFbGVtZW50XG4gICAgdHJhY2shOiBIVE1MRGl2RWxlbWVudFxuXG4gICAgaW5pdChwYXJlbnQ6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuY3JlYXRlU3R5bGVzKHBhcmVudClcbiAgICAgICAgdGhpcy5jcmVhdGVUcmFjaygpXG4gICAgfVxuICAgIFxuICAgIGNyZWF0ZVN0eWxlcyhwYXJlbnQ6IEhUTUxEaXZFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0aGlzLnN0eWxlLmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fc3R5bGUnKVxuICAgICAgICBwYXJlbnQuYXBwZW5kKHRoaXMuc3R5bGUpXG4gICAgfVxuICAgIFxuICAgIGNyZWF0ZVRyYWNrKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRyYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGhpcy50cmFjay5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3RyYWNrJylcbiAgICAgICAgdGhpcy5zdHlsZS5hcHBlbmQodGhpcy50cmFjaylcbiAgICB9XG59XG5cbmNsYXNzIFByb2dyZXNzQmFyIHtcbiAgICBiYXIhOiBIVE1MRGl2RWxlbWVudFxuICAgIGNyZWF0ZVByb2dyZXNzQmFyKHBhcmVudDogSFRNTERpdkVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5iYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0aGlzLmJhci5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3Byb2dyZXNzLWJhcicpXG4gICAgICAgIHBhcmVudC5hcHBlbmQodGhpcy5iYXIpXG4gICAgfVxuICAgIGNhbGNQZXJjZW50KHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAoKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pKSAqIDEwMFxuICAgIH1cbiAgICBzZXREZWZhdWx0KGlzRG91YmxlOiBib29sZWFuLCBwZXJjZW50OiBudW1iZXIsIHBlcmNlbnRSaWdodDogbnVtYmVyID0gTmFOKTogdm9pZCB7XG4gICAgICAgIGlmIChpc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy5iYXIuc3R5bGUubGVmdCA9IHBlcmNlbnQgKyAnJSdcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLnJpZ2h0ID0gKDEwMCAtIHBlcmNlbnRSaWdodCkgKyAnJSdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLnJpZ2h0ID0gKDEwMCAtIHBlcmNlbnQpICsgJyUnXG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5sZWZ0ID0gU3RyaW5nKDApXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0UmlnaHQoaXNEb3VibGU6IGJvb2xlYW4sIHBlcmNlbnQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAoIWlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5sZWZ0ID0gcGVyY2VudCArICclJ1xuICAgICAgICAgICAgdGhpcy5iYXIuc3R5bGUucmlnaHQgPSBTdHJpbmcoMClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgVGh1bWIge1xuXG4gICAgdGh1bWJEZWZhdWx0ITogSFRNTERpdkVsZW1lbnRcbiAgICB0aHVtYlJpZ2h0ITogSFRNTERpdkVsZW1lbnRcbiAgICB0aHVtYk91dHB1dCE6IEhUTUxEaXZFbGVtZW50XG4gICAgdGh1bWJPdXRwdXRSaWdodD86IEhUTUxEaXZFbGVtZW50XG5cbiAgICBpbml0IChwYXJlbnQ6IEhUTUxEaXZFbGVtZW50LCBcbiAgICAgICAgaXNEb3VibGU6IGJvb2xlYW4sIFxuICAgICAgICB0b2dnbGVFbGVtZW50OiBib29sZWFuLCBcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBudW1iZXIsIFxuICAgICAgICByaWdodFZhbHVlPzogbnVtYmVyKSB7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVUaHVtYihwYXJlbnQsIGlzRG91YmxlKVxuICAgICAgICBpZiAodG9nZ2xlRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVUaHVtYkVsZW1lbnQoaXNEb3VibGUsIHRoaXMudGh1bWJEZWZhdWx0LCB0aGlzLnRodW1iUmlnaHQpXG4gICAgICAgICAgICB0aGlzLnNldFRodW1iVmFsdWUoaXNEb3VibGUsIGRlZmF1bHRWYWx1ZSwgcmlnaHRWYWx1ZSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVUaHVtYihwYXJlbnQ6IEhUTUxEaXZFbGVtZW50LCBpc0RvdWJsZTogYm9vbGVhbikge1xuICAgICAgICBpZihpc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYicpXG4gICAgICAgICAgICB0aGlzLnRodW1iRGVmYXVsdC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3RodW1iX2xlZnQnKVxuICAgICAgICAgICAgcGFyZW50LmFwcGVuZCh0aGlzLnRodW1iRGVmYXVsdClcblxuICAgICAgICAgICAgdGhpcy50aHVtYlJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHRoaXMudGh1bWJSaWdodC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3RodW1iJylcbiAgICAgICAgICAgIHRoaXMudGh1bWJSaWdodC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3RodW1iX3JpZ2h0JylcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmQodGhpcy50aHVtYlJpZ2h0KVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRodW1iRGVmYXVsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB0aGlzLnRodW1iRGVmYXVsdC5jbGFzc05hbWUgPSAncmFuZ2Utc2xpZGVyX190aHVtYidcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmQodGhpcy50aHVtYkRlZmF1bHQpXG5cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZVRodW1iRWxlbWVudChpc0RvdWJsZTogYm9vbGVhbiwgcGFyZW50OiBIVE1MRGl2RWxlbWVudCwgcmlnaHRQYXJlbnQ/OiBIVE1MRGl2RWxlbWVudCkge1xuICAgICAgICBpZiAoaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMudGh1bWJPdXRwdXRSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAgICAgdGhpcy50aHVtYk91dHB1dFJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdmFsdWUtdGh1bWInKVxuICAgICAgICAgICAgcmlnaHRQYXJlbnQhLmFwcGVuZCh0aGlzLnRodW1iT3V0cHV0UmlnaHQpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aHVtYk91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICB0aGlzLnRodW1iT3V0cHV0LmNsYXNzTmFtZSA9ICdyYW5nZS1zbGlkZXJfX3ZhbHVlLXRodW1iJ1xuICAgICAgICBwYXJlbnQuYXBwZW5kKHRoaXMudGh1bWJPdXRwdXQpXG4gICAgfVxuICAgIHNldFRodW1iVmFsdWUoaXNEb3VibGU6IGJvb2xlYW4sIHZhbHVlOiBudW1iZXIsIHJpZ2h0VmFsdWU/OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy50aHVtYk91dHB1dC50ZXh0Q29udGVudCA9IFN0cmluZyh2YWx1ZSlcbiAgICAgICAgaWYgKGlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLnRodW1iT3V0cHV0UmlnaHQhLnRleHRDb250ZW50ID0gU3RyaW5nKHJpZ2h0VmFsdWUpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cblxuICAgIHBsYWNlVGh1bWIoaXNEb3VibGU6IGJvb2xlYW4sIHBlcmNlbnQ6IG51bWJlciwgcGVyY2VudFJpZ2h0OiBudW1iZXIgPSBOYU4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQuc3R5bGUubGVmdCA9IHBlcmNlbnQgKyAnJSdcbiAgICAgICAgaWYgKGlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLnRodW1iUmlnaHQuc3R5bGUucmlnaHQgPSAoMTAwIC0gcGVyY2VudFJpZ2h0KSArICclJ1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQge0Zvcm0sIFN0eWxlcywgUHJvZ3Jlc3NCYXIsIFRodW1ifSIsIlxuaW1wb3J0IHtGb3JtLCBTdHlsZXMsIFByb2dyZXNzQmFyLCBUaHVtYn0gZnJvbSAnLi9zdWJWaWV3cydcblxuaW50ZXJmYWNlIElEYXRhIHtcbiAgICBtaW46IG51bWJlclxuICAgIG1heDogbnVtYmVyXG4gICAgZGVmYXVsdFZhbHVlOiBudW1iZXJcbiAgICByaWdodFZhbHVlOiBudW1iZXJcbiAgICBpc1JhbmdlOiBib29sZWFuXG4gICAgcmlnaHRQcm9ncmVzc0JhcjogYm9vbGVhblxuICAgIG92ZXJUaHVtYkVsZW1lbnQ6IGJvb2xlYW5cbiAgICBpc1ZlcnRpY2FsOiBib29sZWFuXG59XG5pbnRlcmZhY2UgSU9ic2VydmVyVmlldyB7XG4gICAgdXBkYXRlTW9kZWwoYXJnMDogc3RyaW5nLCBhcmcxOiBudW1iZXIpOiB2b2lkXG59XG5cbmNsYXNzIFZpZXcge1xuICAgIHBhcmVudDogSFRNTEVsZW1lbnRcbiAgICB3cmFwcGVyITogSFRNTERpdkVsZW1lbnRcblxuICAgIGZvcm06IEZvcm1cbiAgICBzdHlsZXM6IFN0eWxlc1xuICAgIHByb2dyZXNzQmFyOiBQcm9ncmVzc0JhclxuICAgIHRodW1iOiBUaHVtYlxuICAgIG9wdGlvbnM6IElEYXRhXG4gICAgb2JzZXJ2ZXJzOiBJT2JzZXJ2ZXJWaWV3W11cbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQ6IEhUTUxFbGVtZW50LCBmb3JtOiBGb3JtLCBzdHlsZXM6IFN0eWxlcywgcHJvZ3Jlc3NCYXI6IFByb2dyZXNzQmFyLCB0aHVtYjogVGh1bWIpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnRcbiAgICAgICAgdGhpcy5mb3JtID0gZm9ybVxuICAgICAgICB0aGlzLnN0eWxlcyA9IHN0eWxlc1xuICAgICAgICB0aGlzLnByb2dyZXNzQmFyID0gcHJvZ3Jlc3NCYXJcbiAgICAgICAgdGhpcy50aHVtYiA9IHRodW1iXG5cbiAgICAvLyBkZWZhdWx0IGRhdGFcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IDEwLFxuICAgICAgICAgICAgcmlnaHRWYWx1ZTogNTAsXG4gICAgICAgICAgICBpc1JhbmdlOiB0cnVlLFxuICAgICAgICAgICAgcmlnaHRQcm9ncmVzc0JhcjogZmFsc2UsXG4gICAgICAgICAgICBvdmVyVGh1bWJFbGVtZW50OiB0cnVlLFxuICAgICAgICAgICAgaXNWZXJ0aWNhbDogZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW11cbiAgICB9XG4gICAgc3Vic2NyaWJlKG9ic2VydmVyOiBJT2JzZXJ2ZXJWaWV3KSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpXG4gICAgfVxuICAgIGluaXQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuY3JlYXRlV3JhcHBlcigpXG4gICAgICAgIFxuICAgICAgICB0aGlzLmZvcm0uaW5pdChcbiAgICAgICAgICAgIHRoaXMud3JhcHBlciwgXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaXNSYW5nZSwgXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubWluLCBcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tYXhcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnN0eWxlcy5pbml0KHRoaXMud3JhcHBlcilcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5jcmVhdGVQcm9ncmVzc0Jhcih0aGlzLnN0eWxlcy5zdHlsZSlcbiAgICAgICAgdGhpcy50aHVtYi5pbml0KFxuICAgICAgICAgICAgdGhpcy5zdHlsZXMuc3R5bGUsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaXNSYW5nZSxcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vdmVyVGh1bWJFbGVtZW50LFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSxcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5yaWdodFZhbHVlXG4gICAgICAgIClcbiAgICAgICAgXG5cbiAgICAgICAgdGhpcy5zZXRJbnB1dCgpXG4gICAgICAgIFxuICAgICAgICB0aGlzLmV2ZW50SW5wdXQoKVxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLmJhci5vbm1vdXNlZG93biA9IGVsZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5ldmVudENsaWNrKGVsZW0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdHlsZXMudHJhY2sub25tb3VzZWRvd24gPSBlbGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRDbGljayhlbGVtKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXZlbnRIb3ZlcigpXG4gICAgICAgIHRoaXMuZXZlbnRBY3RpdmUoKVxuICAgICAgICBpZih0aGlzLm9wdGlvbnMuaXNWZXJ0aWNhbCkge1xuICAgICAgICAgICAgdGhpcy53cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl92ZXJ0aWNhbCcpXG4gICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iT3V0cHV0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdmFsdWUtdGh1bWJfdmVydGljYWwnKVxuICAgICAgICAgICAgdGhpcy50aHVtYi50aHVtYk91dHB1dFJpZ2h0Py5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3ZhbHVlLXRodW1iX3ZlcnRpY2FsJylcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICBjcmVhdGVXcmFwcGVyID0gKCkgPT4ge1xuICAgICAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0aGlzLndyYXBwZXIuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyJylcbiAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kKHRoaXMud3JhcHBlcilcbiAgICB9XG5cbiAgICBzZXRJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5mb3JtLnNldElucHV0VmFsdWUodGhpcy5vcHRpb25zLmlzUmFuZ2UsIHRoaXMub3B0aW9ucy5kZWZhdWx0VmFsdWUsIHRoaXMub3B0aW9ucy5yaWdodFZhbHVlKVxuICAgICAgICBcbiAgICAgICAgY29uc3QgcGxhY2VEZWZhdWx0OiBudW1iZXIgPSB0aGlzLnByb2dyZXNzQmFyLmNhbGNQZXJjZW50KFxuICAgICAgICAgICAgICAgICAgICBOdW1iZXIodGhpcy5mb3JtLmRlZmF1bHRJbnB1dC52YWx1ZSksIFxuICAgICAgICAgICAgICAgICAgICBOdW1iZXIodGhpcy5mb3JtLmRlZmF1bHRJbnB1dC5taW4pLCBcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQubWF4KSlcbiAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgY29uc3QgcGxhY2VSaWdodDogbnVtYmVyID0gdGhpcy5mb3JtLnJpZ2h0SW5wdXQgPyBcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuY2FsY1BlcmNlbnQoXG4gICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5yaWdodElucHV0LnZhbHVlKSwgXG4gICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5yaWdodElucHV0Lm1pbiksIFxuICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0ucmlnaHRJbnB1dC5tYXgpKSBcbiAgICAgICAgICAgICAgICA6IE5hTiBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnNldERlZmF1bHQodGhpcy5vcHRpb25zLmlzUmFuZ2UsIHBsYWNlRGVmYXVsdCwgcGxhY2VSaWdodClcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmlnaHRQcm9ncmVzc0JhcikgeyBcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuc2V0UmlnaHQodGhpcy5vcHRpb25zLmlzUmFuZ2UsIHBsYWNlRGVmYXVsdCkgXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRodW1iLnBsYWNlVGh1bWIodGhpcy5vcHRpb25zLmlzUmFuZ2UsIHBsYWNlRGVmYXVsdCwgcGxhY2VSaWdodClcblxuICAgICAgICBcbiAgICB9XG4gICAgZXZlbnRJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5mb3JtLmRlZmF1bHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kZWZhdWx0VmFsdWUgPSBOdW1iZXIodGhpcy5mb3JtLmRlZmF1bHRJbnB1dC52YWx1ZSlcbiAgICAgICAgICAgIHRoaXMuc2V0SW5wdXQoKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci51cGRhdGVNb2RlbCgnZGVmYXVsdCcsIE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0LnZhbHVlKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLnRodW1iLnNldFRodW1iVmFsdWUodGhpcy5vcHRpb25zLmlzUmFuZ2UsIFxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kZWZhdWx0VmFsdWUsIHRoaXMub3B0aW9ucy5yaWdodFZhbHVlKVxuICAgICAgICB9KVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlzUmFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5yaWdodElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5yaWdodFZhbHVlID0gTnVtYmVyKHRoaXMuZm9ybS5yaWdodElucHV0LnZhbHVlKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0SW5wdXQoKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51cGRhdGVNb2RlbCgncmlnaHQnLCBOdW1iZXIodGhpcy5mb3JtLnJpZ2h0SW5wdXQudmFsdWUpKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy50aHVtYi5zZXRUaHVtYlZhbHVlKHRoaXMub3B0aW9ucy5pc1JhbmdlLCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSwgdGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIGV2ZW50Q2xpY2soZWxlbTogTW91c2VFdmVudCkgeyAvLyBmb3IgdmVydGljYWwgc2xpZGVyIGl0IHdvcmtzIGRpZmZlcmVudFxuICAgICAgICBjb25zdCBjb29yZHM6IERPTVJlY3QgPSB0aGlzLnN0eWxlcy50cmFjay5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICBsZXQgbGVuZ3RoOiBudW1iZXIgPSBjb29yZHMucmlnaHQgLSBjb29yZHMubGVmdFxuICAgICAgICBsZXQgY3VycmVudFBvc2l0aW9uOiBudW1iZXIgPSBlbGVtLnBhZ2VYIC0gY29vcmRzLmxlZnRcbiAgICAgICAgbGV0IHBlcmNlbnQ6IG51bWJlclxuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNWZXJ0aWNhbCkge1xuICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uID0gZWxlbS5wYWdlWSAtIGNvb3Jkcy50b3BcbiAgICAgICAgICAgIGxlbmd0aCA9IGNvb3Jkcy5ib3R0b20gLSBjb29yZHMudG9wXG4gICAgICAgICAgICBpZiAobGVuZ3RoIDwgY3VycmVudFBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uID0gbGVuZ3RoXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBwZXJjZW50ID0gY3VycmVudFBvc2l0aW9uL2xlbmd0aCAqIDEwMFxuICAgICAgICAvLyBpZiAocGVyY2VudCA+IDEwMCkge1xuICAgICAgICAvLyAgICAgcGVyY2VudCA9IDEwMFxuICAgICAgICAvLyB9XG5cbiAgICAgICAgY29uc3QgcGxhY2VEZWZhdWx0OiBudW1iZXIgPSB0aGlzLnByb2dyZXNzQmFyLmNhbGNQZXJjZW50KFxuICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQudmFsdWUpLCBcbiAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0Lm1pbiksIFxuICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQubWF4KSlcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlOiBudW1iZXIgPSB0aGlzLmNhbGNWYWx1ZShwZXJjZW50KVxuICAgICAgICBjb25zdCBoYWxmT2ZCYXI6IG51bWJlciA9ICh0aGlzLm9wdGlvbnMucmlnaHRWYWx1ZSArIHRoaXMub3B0aW9ucy5kZWZhdWx0VmFsdWUpIC8gMlxuICAgIFxuICAgICAgICBjb25zdCBpc1JpZ2h0VHJhY2s6IGJvb2xlYW4gPSB0aGlzLm9wdGlvbnMuaXNSYW5nZSAmJiBuZXdWYWx1ZSA+IHRoaXMub3B0aW9ucy5yaWdodFZhbHVlXG4gICAgICAgIGNvbnN0IGlzUmlnaHRCYXIgPSB0aGlzLm9wdGlvbnMuaXNSYW5nZSAmJiBuZXdWYWx1ZSA+IGhhbGZPZkJhclxuXG4gICAgICAgIGlmKGlzUmlnaHRUcmFjayB8fCBpc1JpZ2h0QmFyKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm0ucmlnaHRJbnB1dC52YWx1ZSA9IFN0cmluZyhuZXdWYWx1ZSlcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5yaWdodFZhbHVlID0gbmV3VmFsdWVcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy50aHVtYi5wbGFjZVRodW1iKHRoaXMub3B0aW9ucy5pc1JhbmdlLCBwbGFjZURlZmF1bHQsIHBlcmNlbnQpXG5cbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuc2V0RGVmYXVsdCh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGxhY2VEZWZhdWx0LCBwZXJjZW50KVxuXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci51cGRhdGVNb2RlbCgncmlnaHQnLCBuZXdWYWx1ZSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy50aHVtYi5zZXRUaHVtYlZhbHVlKHRoaXMub3B0aW9ucy5pc1JhbmdlLCBcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZGVmYXVsdFZhbHVlLCB0aGlzLm9wdGlvbnMucmlnaHRWYWx1ZSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQudmFsdWUgPSBTdHJpbmcobmV3VmFsdWUpXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZGVmYXVsdFZhbHVlID0gbmV3VmFsdWVcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy50aHVtYi5wbGFjZVRodW1iKHRoaXMub3B0aW9ucy5pc1JhbmdlLCBwZXJjZW50KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJpZ2h0UHJvZ3Jlc3NCYXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnNldFJpZ2h0KHRoaXMub3B0aW9ucy5pc1JhbmdlLCBwZXJjZW50KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnNldERlZmF1bHQodGhpcy5vcHRpb25zLmlzUmFuZ2UsIHBlcmNlbnQpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci51cGRhdGVNb2RlbCgnZGVmYXVsdCcsIG5ld1ZhbHVlKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgdGhpcy50aHVtYi5zZXRUaHVtYlZhbHVlKHRoaXMub3B0aW9ucy5pc1JhbmdlLCBcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZGVmYXVsdFZhbHVlLCB0aGlzLm9wdGlvbnMucmlnaHRWYWx1ZSlcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuICAgIGNhbGNWYWx1ZShwZXJjZW50OiBudW1iZXIsIFxuICAgICAgICBtaW46IG51bWJlciA9IHRoaXMub3B0aW9ucy5taW4sIFxuICAgICAgICBtYXg6IG51bWJlciA9IHRoaXMub3B0aW9ucy5tYXgpOiBudW1iZXIge1xuICAgICAgICAgICAgbGV0IGRpYXBhc29uOiBudW1iZXIgPSBtYXggLSBtaW5cbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKGRpYXBhc29uIC0gKG1heCAtICgoZGlhcGFzb24pICogcGVyY2VudCkgLyAxMDApKVxuICAgIH1cbiAgICBcbiAgICBldmVudEhvdmVyID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmZvcm0uZGVmYXVsdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMub3ZlclRodW1iRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGh1bWIudGh1bWJPdXRwdXQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX192YWx1ZS10aHVtYl9iaWcnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50aHVtYi50aHVtYkRlZmF1bHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYl9ob3ZlcicpXG4gICAgICAgIH0pXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNSYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtLnJpZ2h0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMub3ZlclRodW1iRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iT3V0cHV0UmlnaHQ/LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdmFsdWUtdGh1bWJfYmlnJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy50aHVtYi50aHVtYlJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdGh1bWJfaG92ZXInKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm92ZXJUaHVtYkVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iT3V0cHV0LmNsYXNzTGlzdC5yZW1vdmUoJ3JhbmdlLXNsaWRlcl9fdmFsdWUtdGh1bWJfYmlnJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudGh1bWIudGh1bWJEZWZhdWx0LmNsYXNzTGlzdC5yZW1vdmUoJ3JhbmdlLXNsaWRlcl9fdGh1bWJfaG92ZXInKVxuICAgICAgICB9KVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlzUmFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5yaWdodElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMub3ZlclRodW1iRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iT3V0cHV0UmlnaHQ/LmNsYXNzTGlzdC5yZW1vdmUoJ3JhbmdlLXNsaWRlcl9fdmFsdWUtdGh1bWJfYmlnJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy50aHVtYi50aHVtYlJpZ2h0LmNsYXNzTGlzdC5yZW1vdmUoJ3JhbmdlLXNsaWRlcl9fdGh1bWJfaG92ZXInKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBldmVudEFjdGl2ZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5mb3JtLmRlZmF1bHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iRGVmYXVsdC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3RodW1iX2FjdGl2ZScpXG4gICAgICAgIH0pXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNSYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtLnJpZ2h0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudGh1bWIudGh1bWJSaWdodC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3RodW1iX2FjdGl2ZScpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mb3JtLmRlZmF1bHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50aHVtYi50aHVtYkRlZmF1bHQuY2xhc3NMaXN0LnJlbW92ZSgncmFuZ2Utc2xpZGVyX190aHVtYl9hY3RpdmUnKVxuICAgICAgICB9KVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlzUmFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5yaWdodElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHVtYi50aHVtYlJpZ2h0LmNsYXNzTGlzdC5yZW1vdmUoJ3JhbmdlLXNsaWRlcl9fdGh1bWJfYWN0aXZlJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCB7Vmlld31cbiJdLCJzb3VyY2VSb290IjoiIn0=