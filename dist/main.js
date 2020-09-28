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
      step: settings.step
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
  isRange: true,
  leftValue: 40,
  rightValue: 70,
  overThumbElement: true
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
  rightProgressBar: false,
  overThumbElement: true,
  step: 10
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

    _defineProperty(this, "observers", void 0);

    this.min = options.min ? options.min : 0;
    this.max = options.max ? options.max : 100;
    this.defaultValue = options.defaultValue ? options.defaultValue : 50;
    this.rightValue = options.rightValue ? options.rightValue : 60;
    this.isRange = options.isRange;
    this.rightProgressBar = options.rightProgressBar;
    this.overThumbElement = options.overThumbElement;
    this.step = options.step ? options.step : 1;
    this.observers = [];
    this.dataForView = {
      min: this.min,
      max: this.max,
      defaultValue: this.defaultValue,
      rightValue: this.rightValue,
      isRange: this.isRange,
      rightProgressBar: this.rightProgressBar,
      overThumbElement: this.overThumbElement
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
        this.thumbOutputRight = document.createElement('div');
        this.thumbOutputRight.classList.add('range-slider__value-thumb');
        rightParent.append(this.thumbOutputRight);
      }

      this.thumbOutput = document.createElement('div');
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
          _this.thumb.thumbOutput.classList.add('display-block');
        }

        _this.thumb.thumbDefault.classList.add('range-slider__thumb_hover');
      });

      if (_this.options.isRange) {
        _this.form.rightInput.addEventListener('mouseover', function () {
          if (_this.options.overThumbElement) {
            var _this$thumb$thumbOutp;

            (_this$thumb$thumbOutp = _this.thumb.thumbOutputRight) === null || _this$thumb$thumbOutp === void 0 ? void 0 : _this$thumb$thumbOutp.classList.add('display-block');
          }

          _this.thumb.thumbRight.classList.add('range-slider__thumb_hover');
        });
      }

      _this.form.defaultInput.addEventListener('mouseout', function () {
        if (_this.options.overThumbElement) {
          _this.thumb.thumbOutput.classList.remove('display-block');
        }

        _this.thumb.thumbDefault.classList.remove('range-slider__thumb_hover');
      });

      if (_this.options.isRange) {
        _this.form.rightInput.addEventListener('mouseout', function () {
          if (_this.options.overThumbElement) {
            var _this$thumb$thumbOutp2;

            (_this$thumb$thumbOutp2 = _this.thumb.thumbOutputRight) === null || _this$thumb$thumbOutp2 === void 0 ? void 0 : _this$thumb$thumbOutp2.classList.remove('display-block');
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
      overThumbElement: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4gc3luYyBcXC4odHN8c2NzcykkIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2pxdWVyeS5tYWluLmQudHMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5zY3NzIiwid2VicGFjazovLy8uL212Yy9jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL212Yy9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9tdmMvc3ViVmlld3MudHMiLCJ3ZWJwYWNrOi8vLy4vbXZjL3ZpZXcudHMiXSwibmFtZXMiOlsiaW1wb3J0QWxsIiwiciIsImtleXMiLCJmb3JFYWNoIiwicmVxdWlyZSIsIiQiLCJmbiIsInJhbmdlU2xpZGVyIiwic2V0dGluZ3MiLCJwbHVnaW4iLCJDb250cm9sbGVyIiwiTW9kZWwiLCJtaW4iLCJtYXgiLCJkZWZhdWx0VmFsdWUiLCJpbml0aWFsVmFsdWUiLCJsZWZ0VmFsdWUiLCJyaWdodFZhbHVlIiwiaXNSYW5nZSIsInJpZ2h0UHJvZ3Jlc3NCYXIiLCJvdmVyVGh1bWJFbGVtZW50Iiwic3RlcCIsIlZpZXciLCJGb3JtIiwiU3R5bGVzIiwiUHJvZ3Jlc3NCYXIiLCJUaHVtYiIsImpRdWVyeSIsIm1vZGVsIiwidmlldyIsInN1YnNjcmliZSIsImluaXQiLCJvcHRpb25zIiwiZGF0YUZvclZpZXciLCJvcHRpb24iLCJuZXdWYWx1ZSIsInVwZGF0ZSIsInNldElucHV0Iiwib2JzZXJ2ZXJzIiwib2JzZXJ2ZXIiLCJwdXNoIiwibGltaXRUb2dnbGUiLCJsaW1pdFN0ZXAiLCJ1cGRhdGVWaWV3IiwiY2FsY05lYXJlc3QiLCJyb3VuZFRvTWluIiwicGFyZW50IiwiaXNEb3VibGUiLCJjcmVhdGVGb3JtIiwiY3JlYXRlSW5wdXQiLCJzZXRNaW4iLCJzZXRNYXgiLCJmb3JtIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kIiwiZGVmYXVsdElucHV0IiwidHlwZSIsInJpZ2h0SW5wdXQiLCJ2YWx1ZSIsIk5hTiIsIlN0cmluZyIsImNyZWF0ZVN0eWxlcyIsImNyZWF0ZVRyYWNrIiwic3R5bGUiLCJ0cmFjayIsImJhciIsInBlcmNlbnQiLCJwZXJjZW50UmlnaHQiLCJsZWZ0IiwicmlnaHQiLCJ0b2dnbGVFbGVtZW50IiwiY3JlYXRlVGh1bWIiLCJjcmVhdGVUaHVtYkVsZW1lbnQiLCJ0aHVtYkRlZmF1bHQiLCJ0aHVtYlJpZ2h0Iiwic2V0VGh1bWJWYWx1ZSIsImNsYXNzTmFtZSIsInJpZ2h0UGFyZW50IiwidGh1bWJPdXRwdXRSaWdodCIsInRodW1iT3V0cHV0IiwidGV4dENvbnRlbnQiLCJzdHlsZXMiLCJwcm9ncmVzc0JhciIsInRodW1iIiwiY3JlYXRlV3JhcHBlciIsIndyYXBwZXIiLCJjcmVhdGVQcm9ncmVzc0JhciIsImV2ZW50SW5wdXQiLCJvbm1vdXNlZG93biIsImVsZW0iLCJldmVudENsaWNrIiwiZXZlbnRIb3ZlciIsImV2ZW50QWN0aXZlIiwic2V0SW5wdXRWYWx1ZSIsInBsYWNlRGVmYXVsdCIsImNhbGNQZXJjZW50IiwiTnVtYmVyIiwicGxhY2VSaWdodCIsInNldERlZmF1bHQiLCJzZXRSaWdodCIsInBsYWNlVGh1bWIiLCJhZGRFdmVudExpc3RlbmVyIiwidXBkYXRlTW9kZWwiLCJyZW1vdmUiLCJjb29yZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsZW5ndGgiLCJjdXJyZW50UG9zaXRpb24iLCJwYWdlWCIsImNhbGNWYWx1ZSIsImhhbGZPZkJhciIsImlzUmlnaHRUcmFjayIsImlzUmlnaHRCYXIiLCJkaWFwYXNvbiIsIk1hdGgiLCJyb3VuZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVB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QUtjLE9BQUwsQ0FBYWxCLFlBRGpCLEVBQytCLEtBQUtrQixPQUFMLENBQWFmLFVBRDVDO0FBR0g7QUFDSjs7OzhCQUNTb0QsTyxFQUVrQztBQUFBLFVBRHhDekQsR0FDd0MsdUVBRDFCLEtBQUtvQixPQUFMLENBQWFwQixHQUNhO0FBQUEsVUFBeENDLEdBQXdDLHVFQUExQixLQUFLbUIsT0FBTCxDQUFhbkIsR0FBYTtBQUNwQyxVQUFJdUcsUUFBZ0IsR0FBR3ZHLEdBQUcsR0FBR0QsR0FBN0I7QUFDQSxhQUFPeUcsSUFBSSxDQUFDQyxLQUFMLENBQVdGLFFBQVEsSUFBSXZHLEdBQUcsR0FBS3VHLFFBQUQsR0FBYS9DLE9BQWQsR0FBeUIsR0FBbkMsQ0FBbkIsQ0FBUDtBQUNQIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2pxdWVyeS5tYWluLmQudHNcIjogXCIuL2pxdWVyeS5tYWluLmQudHNcIixcblx0XCIuL21haW4uc2Nzc1wiOiBcIi4vbWFpbi5zY3NzXCIsXG5cdFwiLi9tdmMvY29udHJvbGxlci50c1wiOiBcIi4vbXZjL2NvbnRyb2xsZXIudHNcIixcblx0XCIuL212Yy9tb2RlbC50c1wiOiBcIi4vbXZjL21vZGVsLnRzXCIsXG5cdFwiLi9tdmMvc3ViVmlld3MudHNcIjogXCIuL212Yy9zdWJWaWV3cy50c1wiLFxuXHRcIi4vbXZjL3ZpZXcudHNcIjogXCIuL212Yy92aWV3LnRzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgcmVjdXJzaXZlIFxcXFwuKHRzfHNjc3MpJFwiOyIsImZ1bmN0aW9uIGltcG9ydEFsbChyKSB7XG4gIHIua2V5cygpLmZvckVhY2gocilcbn1cblxuaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi8nLCB0cnVlLCAvXFwuKHRzfHNjc3MpJC8pKSIsIlxuaW1wb3J0IHtGb3JtLCBTdHlsZXMsIFByb2dyZXNzQmFyLCBUaHVtYn0gZnJvbSAnLi9tdmMvc3ViVmlld3MudHMnXG5pbXBvcnQge1ZpZXd9IGZyb20gJy4vbXZjL3ZpZXcudHMnXG5pbXBvcnQge01vZGVsfSBmcm9tICcuL212Yy9tb2RlbC50cydcbmltcG9ydCB7Q29udHJvbGxlcn0gZnJvbSAnLi9tdmMvY29udHJvbGxlcidcblxuXG4oZnVuY3Rpb24oJDogSlF1ZXJ5U3RhdGljKSB7XG4gICAgJC5mbi5yYW5nZVNsaWRlciA9IGZ1bmN0aW9uKHNldHRpbmdzOiB7XG4gICAgICAgIG1pbj86IG51bWJlclxuICAgICAgICBtYXg/OiBudW1iZXJcbiAgICAgICAgaW5pdGlhbFZhbHVlPzogbnVtYmVyXG4gICAgICAgIGxlZnRWYWx1ZT86IG51bWJlclxuICAgICAgICBkZWZhdWx0VmFsdWU/OiBudW1iZXJcbiAgICAgICAgcmlnaHRWYWx1ZT86IG51bWJlclxuICAgICAgICBpc1JhbmdlPzogYm9vbGVhblxuICAgICAgICByaWdodFByb2dyZXNzQmFyPzogYm9vbGVhblxuICAgICAgICBvdmVyVGh1bWJFbGVtZW50PzogYm9vbGVhblxuICAgICAgICBzdGVwPzogbnVtYmVyXG4gICAgfSkge1xuICAgICAgICBjb25zdCBwbHVnaW4gPSBuZXcgQ29udHJvbGxlcihcbiAgICAgICAgICAgIG5ldyBNb2RlbCh7XG4gICAgICAgICAgICAgICAgbWluOiBzZXR0aW5ncy5taW4sXG4gICAgICAgICAgICAgICAgbWF4OiBzZXR0aW5ncy5tYXgsXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBzZXR0aW5ncy5pbml0aWFsVmFsdWUgfHwgc2V0dGluZ3MubGVmdFZhbHVlLFxuICAgICAgICAgICAgICAgIHJpZ2h0VmFsdWU6IHNldHRpbmdzLnJpZ2h0VmFsdWUsXG4gICAgICAgICAgICAgICAgaXNSYW5nZTogc2V0dGluZ3MuaXNSYW5nZSxcbiAgICAgICAgICAgICAgICByaWdodFByb2dyZXNzQmFyOiBzZXR0aW5ncy5yaWdodFByb2dyZXNzQmFyLFxuICAgICAgICAgICAgICAgIG92ZXJUaHVtYkVsZW1lbnQ6IHNldHRpbmdzLm92ZXJUaHVtYkVsZW1lbnQsXG4gICAgICAgICAgICAgICAgc3RlcDogc2V0dGluZ3Muc3RlcFxuICAgICAgICAgICAgfSksIFxuICAgICAgICAgICAgbmV3IFZpZXcoIFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgbmV3IEZvcm0oKSxcbiAgICAgICAgICAgICAgICBuZXcgU3R5bGVzKCksXG4gICAgICAgICAgICAgICAgbmV3IFByb2dyZXNzQmFyKCksXG4gICAgICAgICAgICAgICAgbmV3IFRodW1iKCkgXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIHBsdWdpblxuICAgIH1cbn0pKGpRdWVyeSlcblxuXG4kKCcjZmlyc3QtcmFuZ2Utc2xpZGVyJykucmFuZ2VTbGlkZXIoe1xuICAgIGlzUmFuZ2U6IHRydWUsXG4gICAgbGVmdFZhbHVlOiAxNSxcbiAgICByaWdodFZhbHVlOiA2MCxcbiAgICBvdmVyVGh1bWJFbGVtZW50OiB0cnVlLFxuICAgIHN0ZXA6IDNcbn0pXG4kKCcjc2Vjb25kLXJhbmdlLXNsaWRlcicpLnJhbmdlU2xpZGVyKHtcbiAgICBpc1JhbmdlOiB0cnVlLFxuICAgIGxlZnRWYWx1ZTogNDAsXG4gICAgcmlnaHRWYWx1ZTogNzAsXG4gICAgb3ZlclRodW1iRWxlbWVudDogdHJ1ZVxufSlcbiQoJyN0aGlyZC1yYW5nZS1zbGlkZXInKS5yYW5nZVNsaWRlcih7XG4gICAgbWluOiAwLFxuICAgIG1heDogMzAsXG4gICAgaW5pdGlhbFZhbHVlOiAyMCxcbiAgICByaWdodFByb2dyZXNzQmFyOiB0cnVlLFxuICAgIG92ZXJUaHVtYkVsZW1lbnQ6IHRydWVcbn0pXG4kKCcjZm9ydGgtcmFuZ2Utc2xpZGVyJykucmFuZ2VTbGlkZXIoe1xuICAgIGluaXRpYWxWYWx1ZTogMjAsXG4gICAgcmlnaHRQcm9ncmVzc0JhcjogZmFsc2UsXG4gICAgb3ZlclRodW1iRWxlbWVudDogdHJ1ZSxcbiAgICBzdGVwOiAxMFxufSlcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MDEzMTM5NDQwOTVcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL2hvbWUveGVuYS9SYW5nZS1zbGlkZXIvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInJlbG9hZEFsbFwiOnRydWUsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJpbXBvcnQge01vZGVsfSBmcm9tICcuL21vZGVsJ1xuaW1wb3J0IHtWaWV3fSBmcm9tICcuL3ZpZXcnXG5cbmNsYXNzIENvbnRyb2xsZXIge1xuICAgIG1vZGVsOiBNb2RlbFxuICAgIHZpZXc6IFZpZXdcbiAgICBjb25zdHJ1Y3Rvcihtb2RlbDogTW9kZWwsIHZpZXc6IFZpZXcpIHtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsXG4gICAgICAgIHRoaXMudmlldyA9IHZpZXdcbiAgICAgICAgdGhpcy52aWV3Lm9wdGlvbnMgPSB0aGlzLm1vZGVsLmRhdGFGb3JWaWV3XG4gICAgICAgIHRoaXMuaW5pdCgpIFxuICAgIH1cbiAgICBpbml0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnZpZXcuc3Vic2NyaWJlKHRoaXMpXG4gICAgICAgIHRoaXMubW9kZWwuc3Vic2NyaWJlKHRoaXMpXG4gICAgICAgIHRoaXMudmlldy5pbml0KClcbiAgICB9XG4gICAgdXBkYXRlTW9kZWwob3B0aW9uOiBzdHJpbmcsIG5ld1ZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5tb2RlbC51cGRhdGUob3B0aW9uLCBuZXdWYWx1ZSlcbiAgICB9XG4gICAgdXBkYXRlVmlldygpIHtcbiAgICAgICAgdGhpcy52aWV3Lm9wdGlvbnMuZGVmYXVsdFZhbHVlID0gdGhpcy5tb2RlbC5kZWZhdWx0VmFsdWVcbiAgICAgICAgdGhpcy52aWV3Lm9wdGlvbnMucmlnaHRWYWx1ZSA9IHRoaXMubW9kZWwucmlnaHRWYWx1ZVxuICAgICAgICB0aGlzLnZpZXcuc2V0SW5wdXQoKVxuICAgIH1cbn1cblxuZXhwb3J0IHtDb250cm9sbGVyfSIsImludGVyZmFjZSBJRGF0YSB7XG4gICAgbWluOiBudW1iZXJcbiAgICBtYXg6IG51bWJlclxuICAgIGRlZmF1bHRWYWx1ZTogbnVtYmVyXG4gICAgcmlnaHRWYWx1ZTogbnVtYmVyXG4gICAgaXNSYW5nZTogYm9vbGVhblxuICAgIHJpZ2h0UHJvZ3Jlc3NCYXI6IGJvb2xlYW5cbiAgICBvdmVyVGh1bWJFbGVtZW50OiBib29sZWFuXG4gICAgc3RlcD86IG51bWJlclxufVxuaW50ZXJmYWNlIElPYnNlcnZlck1vZGVsIHtcbiAgICB1cGRhdGVWaWV3KCk6IHZvaWRcbn1cblxuY2xhc3MgTW9kZWwge1xuICAgIG1pbjogbnVtYmVyXG4gICAgbWF4OiBudW1iZXJcbiAgICBkZWZhdWx0VmFsdWU6IG51bWJlclxuICAgIHJpZ2h0VmFsdWU6IG51bWJlclxuICAgIGlzUmFuZ2U6IGJvb2xlYW5cbiAgICByaWdodFByb2dyZXNzQmFyOiBib29sZWFuXG4gICAgb3ZlclRodW1iRWxlbWVudDogYm9vbGVhblxuICAgIGRhdGFGb3JWaWV3OiBJRGF0YVxuICAgIHN0ZXA6IG51bWJlclxuICAgIG9ic2VydmVyczogSU9ic2VydmVyTW9kZWxbXVxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElEYXRhKSB7XG4gICAgICAgIHRoaXMubWluID0gb3B0aW9ucy5taW4gPyBvcHRpb25zLm1pbiA6IDBcbiAgICAgICAgdGhpcy5tYXggPSBvcHRpb25zLm1heCA/IG9wdGlvbnMubWF4IDogMTAwXG4gICAgICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gb3B0aW9ucy5kZWZhdWx0VmFsdWUgPyBvcHRpb25zLmRlZmF1bHRWYWx1ZSA6IDUwXG4gICAgICAgIHRoaXMucmlnaHRWYWx1ZSA9IG9wdGlvbnMucmlnaHRWYWx1ZSA/IG9wdGlvbnMucmlnaHRWYWx1ZSA6IDYwXG4gICAgICAgIHRoaXMuaXNSYW5nZSA9IG9wdGlvbnMuaXNSYW5nZVxuICAgICAgICB0aGlzLnJpZ2h0UHJvZ3Jlc3NCYXIgPSBvcHRpb25zLnJpZ2h0UHJvZ3Jlc3NCYXJcbiAgICAgICAgdGhpcy5vdmVyVGh1bWJFbGVtZW50ID0gb3B0aW9ucy5vdmVyVGh1bWJFbGVtZW50XG4gICAgICAgIHRoaXMuc3RlcCA9IG9wdGlvbnMuc3RlcCA/IG9wdGlvbnMuc3RlcCA6IDFcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXVxuICAgICAgICB0aGlzLmRhdGFGb3JWaWV3ID0ge1xuICAgICAgICAgICAgbWluOiB0aGlzLm1pbixcbiAgICAgICAgICAgIG1heDogdGhpcy5tYXgsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IHRoaXMuZGVmYXVsdFZhbHVlLFxuICAgICAgICAgICAgcmlnaHRWYWx1ZTogdGhpcy5yaWdodFZhbHVlLFxuICAgICAgICAgICAgaXNSYW5nZTogdGhpcy5pc1JhbmdlLFxuICAgICAgICAgICAgcmlnaHRQcm9ncmVzc0JhcjogdGhpcy5yaWdodFByb2dyZXNzQmFyLFxuICAgICAgICAgICAgb3ZlclRodW1iRWxlbWVudDogdGhpcy5vdmVyVGh1bWJFbGVtZW50XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3Vic2NyaWJlKG9ic2VydmVyOiBJT2JzZXJ2ZXJNb2RlbCkge1xuICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKVxuICAgIH1cbiAgICB1cGRhdGUob3B0aW9uOiBzdHJpbmcsIG5ld1ZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5saW1pdFRvZ2dsZShvcHRpb24sIG5ld1ZhbHVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5saW1pdFN0ZXAobmV3VmFsdWUpXG4gICAgICAgIH1cbiAgICB9XG4gICAgbGltaXRUb2dnbGUob3B0aW9uOiBzdHJpbmcsIG5ld1ZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgc3dpdGNoIChvcHRpb24pIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FzZSgnZGVmYXVsdCcpOlxuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA8IHRoaXMucmlnaHRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpbWl0U3RlcChuZXdWYWx1ZSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVwZGF0ZVZpZXcoKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXNlKCdyaWdodCcpOlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlID4gdGhpcy5kZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saW1pdFN0ZXAobmV3VmFsdWUsICdyaWdodCcpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51cGRhdGVWaWV3KClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgbGltaXRTdGVwKG5ld1ZhbHVlOiBudW1iZXIsIG9wdGlvbjogc3RyaW5nID0gJ2RlZmF1bHQnKSB7XG5cbiAgICAgICAgc3dpdGNoKG9wdGlvbikge1xuICAgICAgICAgICAgY2FzZSgnZGVmYXVsdCcpOiBcbiAgICAgICAgICAgIGlmKG5ld1ZhbHVlICUgdGhpcy5zdGVwID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0VmFsdWUgPSBuZXdWYWx1ZVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IHRoaXMuY2FsY05lYXJlc3QobmV3VmFsdWUpXG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVwZGF0ZVZpZXcoKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVha1xuXG5cbiAgICAgICAgICAgIGNhc2UoJ3JpZ2h0Jyk6XG4gICAgICAgICAgICBpZihuZXdWYWx1ZSAlIHRoaXMuc3RlcCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmlnaHRWYWx1ZSA9IG5ld1ZhbHVlXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmlnaHRWYWx1ZSA9IHRoaXMuY2FsY05lYXJlc3QobmV3VmFsdWUpXG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVwZGF0ZVZpZXcoKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgIH1cbiAgICBjYWxjTmVhcmVzdChuZXdWYWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHJvdW5kVG9NaW4gPSBuZXdWYWx1ZSAtIChuZXdWYWx1ZSAlIHRoaXMuc3RlcClcbiAgICAgICAgaWYgKChuZXdWYWx1ZSAlIHRoaXMuc3RlcCkgPiAodGhpcy5zdGVwIC8gMikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0ZXAgKyByb3VuZFRvTWluXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvdW5kVG9NaW5cbiAgICB9XG59XG5cbmV4cG9ydCB7TW9kZWx9IiwiY2xhc3MgRm9ybSB7XG4gICAgZm9ybSE6IEhUTUxEaXZFbGVtZW50XG4gICAgZGVmYXVsdElucHV0ITogSFRNTElucHV0RWxlbWVudFxuICAgIHJpZ2h0SW5wdXQhOiBIVE1MSW5wdXRFbGVtZW50XG5cbiAgICBpbml0KHBhcmVudDogSFRNTERpdkVsZW1lbnQsIGlzRG91YmxlOiBib29sZWFuLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jcmVhdGVGb3JtKHBhcmVudClcbiAgICAgICAgdGhpcy5jcmVhdGVJbnB1dChpc0RvdWJsZSlcbiAgICAgICAgdGhpcy5zZXRNaW4oaXNEb3VibGUsIG1pbilcbiAgICAgICAgdGhpcy5zZXRNYXgoaXNEb3VibGUsIG1heClcbiAgICB9XG5cbiAgICBjcmVhdGVGb3JtKHBhcmVudDogSFRNTERpdkVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mb3JtID0gPEhUTUxEaXZFbGVtZW50Pihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSlcbiAgICAgICAgdGhpcy5mb3JtLmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fZm9ybScpXG4gICAgICAgIHBhcmVudC5hcHBlbmQodGhpcy5mb3JtKVxuICAgIH1cbiAgICBcbiAgICBjcmVhdGVJbnB1dChpc0RvdWJsZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAoaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQudHlwZSA9ICdyYW5nZSdcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9faW5wdXQnKSBcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9faW5wdXRfbGVmdCcpXG4gICAgICAgICAgICB0aGlzLmZvcm0uYXBwZW5kKHRoaXMuZGVmYXVsdElucHV0KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQudHlwZSA9ICdyYW5nZSdcbiAgICAgICAgICAgIHRoaXMucmlnaHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0JylcbiAgICAgICAgICAgIHRoaXMucmlnaHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0X3JpZ2h0JylcbiAgICAgICAgICAgIHRoaXMuZm9ybS5hcHBlbmQodGhpcy5yaWdodElucHV0KVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0LnR5cGUgPSAncmFuZ2UnXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0JylcbiAgICAgICAgICAgIHRoaXMuZm9ybS5hcHBlbmQodGhpcy5kZWZhdWx0SW5wdXQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0SW5wdXRWYWx1ZShpc0RvdWJsZTogYm9vbGVhbiwgdmFsdWU6IG51bWJlciwgcmlnaHRWYWx1ZTogbnVtYmVyID0gTmFOKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVmYXVsdElucHV0LnZhbHVlID0gU3RyaW5nKHZhbHVlKVxuICAgICAgICBpZiAoaXNEb3VibGUpIHsgICBcbiAgICAgICAgICAgIHRoaXMucmlnaHRJbnB1dC52YWx1ZSA9IFN0cmluZyhyaWdodFZhbHVlKVxuICAgICAgICB9XG4gICAgfVxuICAgIHNldE1pbihpc0RvdWJsZTogYm9vbGVhbiwgbWluOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQubWluID0gU3RyaW5nKG1pbilcbiAgICAgICAgaWYgKGlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQubWluID0gU3RyaW5nKG1pbilcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRNYXgoaXNEb3VibGU6IGJvb2xlYW4sIG1heDogbnVtYmVyID0gMTAwKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVmYXVsdElucHV0Lm1heCA9IFN0cmluZyhtYXgpXG4gICAgICAgIGlmIChpc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0Lm1heCA9IFN0cmluZyhtYXgpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIFN0eWxlcyB7XG4gICAgc3R5bGUhOiBIVE1MRGl2RWxlbWVudFxuICAgIHRyYWNrITogSFRNTERpdkVsZW1lbnRcblxuICAgIGluaXQocGFyZW50OiBIVE1MRGl2RWxlbWVudCkge1xuICAgICAgICB0aGlzLmNyZWF0ZVN0eWxlcyhwYXJlbnQpXG4gICAgICAgIHRoaXMuY3JlYXRlVHJhY2soKVxuICAgIH1cbiAgICBcbiAgICBjcmVhdGVTdHlsZXMocGFyZW50OiBIVE1MRGl2RWxlbWVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGhpcy5zdHlsZS5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3N0eWxlJylcbiAgICAgICAgcGFyZW50LmFwcGVuZCh0aGlzLnN0eWxlKVxuICAgIH1cbiAgICBcbiAgICBjcmVhdGVUcmFjaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50cmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRoaXMudHJhY2suY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190cmFjaycpXG4gICAgICAgIHRoaXMuc3R5bGUuYXBwZW5kKHRoaXMudHJhY2spXG4gICAgfVxufVxuXG5jbGFzcyBQcm9ncmVzc0JhciB7XG4gICAgYmFyITogSFRNTERpdkVsZW1lbnRcbiAgICBjcmVhdGVQcm9ncmVzc0JhcihwYXJlbnQ6IEhUTUxEaXZFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGhpcy5iYXIuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19wcm9ncmVzcy1iYXInKVxuICAgICAgICBwYXJlbnQuYXBwZW5kKHRoaXMuYmFyKVxuICAgIH1cbiAgICBjYWxjUGVyY2VudCh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gKCh2YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKSkgKiAxMDBcbiAgICB9XG4gICAgc2V0RGVmYXVsdChpc0RvdWJsZTogYm9vbGVhbiwgcGVyY2VudDogbnVtYmVyLCBwZXJjZW50UmlnaHQ6IG51bWJlciA9IE5hTik6IHZvaWQge1xuICAgICAgICBpZiAoaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLmxlZnQgPSBwZXJjZW50ICsgJyUnXG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5yaWdodCA9ICgxMDAgLSBwZXJjZW50UmlnaHQpICsgJyUnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5yaWdodCA9ICgxMDAgLSBwZXJjZW50KSArICclJ1xuICAgICAgICAgICAgdGhpcy5iYXIuc3R5bGUubGVmdCA9IFN0cmluZygwKVxuICAgICAgICB9XG4gICAgfVxuICAgIHNldFJpZ2h0KGlzRG91YmxlOiBib29sZWFuLCBwZXJjZW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFpc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy5iYXIuc3R5bGUubGVmdCA9IHBlcmNlbnQgKyAnJSdcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLnJpZ2h0ID0gU3RyaW5nKDApXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIFRodW1iIHtcblxuICAgIHRodW1iRGVmYXVsdCE6IEhUTUxEaXZFbGVtZW50XG4gICAgdGh1bWJSaWdodCE6IEhUTUxEaXZFbGVtZW50XG4gICAgdGh1bWJPdXRwdXQhOiBIVE1MRGl2RWxlbWVudFxuICAgIHRodW1iT3V0cHV0UmlnaHQ/OiBIVE1MRGl2RWxlbWVudFxuXG4gICAgaW5pdCAocGFyZW50OiBIVE1MRGl2RWxlbWVudCwgXG4gICAgICAgIGlzRG91YmxlOiBib29sZWFuLCBcbiAgICAgICAgdG9nZ2xlRWxlbWVudDogYm9vbGVhbiwgXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogbnVtYmVyLCBcbiAgICAgICAgcmlnaHRWYWx1ZT86IG51bWJlcikge1xuXG4gICAgICAgIHRoaXMuY3JlYXRlVGh1bWIocGFyZW50LCBpc0RvdWJsZSlcbiAgICAgICAgaWYgKHRvZ2dsZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVGh1bWJFbGVtZW50KGlzRG91YmxlLCB0aGlzLnRodW1iRGVmYXVsdCwgdGhpcy50aHVtYlJpZ2h0KVxuICAgICAgICAgICAgdGhpcy5zZXRUaHVtYlZhbHVlKGlzRG91YmxlLCBkZWZhdWx0VmFsdWUsIHJpZ2h0VmFsdWUpXG4gICAgICAgIH1cbiAgICB9XG4gICAgY3JlYXRlVGh1bWIocGFyZW50OiBIVE1MRGl2RWxlbWVudCwgaXNEb3VibGU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYoaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMudGh1bWJEZWZhdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHRoaXMudGh1bWJEZWZhdWx0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdGh1bWInKVxuICAgICAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYl9sZWZ0JylcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmQodGhpcy50aHVtYkRlZmF1bHQpXG5cbiAgICAgICAgICAgIHRoaXMudGh1bWJSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB0aGlzLnRodW1iUmlnaHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYicpXG4gICAgICAgICAgICB0aGlzLnRodW1iUmlnaHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYl9yaWdodCcpXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kKHRoaXMudGh1bWJSaWdodClcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQuY2xhc3NOYW1lID0gJ3JhbmdlLXNsaWRlcl9fdGh1bWInXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kKHRoaXMudGh1bWJEZWZhdWx0KVxuXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVUaHVtYkVsZW1lbnQoaXNEb3VibGU6IGJvb2xlYW4sIHBhcmVudDogSFRNTERpdkVsZW1lbnQsIHJpZ2h0UGFyZW50PzogSFRNTERpdkVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLnRodW1iT3V0cHV0UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdGhpcy50aHVtYk91dHB1dFJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdmFsdWUtdGh1bWInKVxuICAgICAgICAgICAgcmlnaHRQYXJlbnQhLmFwcGVuZCh0aGlzLnRodW1iT3V0cHV0UmlnaHQpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aHVtYk91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRoaXMudGh1bWJPdXRwdXQuY2xhc3NOYW1lID0gJ3JhbmdlLXNsaWRlcl9fdmFsdWUtdGh1bWInXG4gICAgICAgIHBhcmVudC5hcHBlbmQodGhpcy50aHVtYk91dHB1dClcbiAgICB9XG4gICAgc2V0VGh1bWJWYWx1ZShpc0RvdWJsZTogYm9vbGVhbiwgdmFsdWU6IG51bWJlciwgcmlnaHRWYWx1ZT86IG51bWJlcikge1xuICAgICAgICB0aGlzLnRodW1iT3V0cHV0LnRleHRDb250ZW50ID0gU3RyaW5nKHZhbHVlKVxuICAgICAgICBpZiAoaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMudGh1bWJPdXRwdXRSaWdodCEudGV4dENvbnRlbnQgPSBTdHJpbmcocmlnaHRWYWx1ZSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcGxhY2VUaHVtYihpc0RvdWJsZTogYm9vbGVhbiwgcGVyY2VudDogbnVtYmVyLCBwZXJjZW50UmlnaHQ6IG51bWJlciA9IE5hTik6IHZvaWQge1xuICAgICAgICB0aGlzLnRodW1iRGVmYXVsdC5zdHlsZS5sZWZ0ID0gcGVyY2VudCArICclJ1xuICAgICAgICBpZiAoaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMudGh1bWJSaWdodC5zdHlsZS5yaWdodCA9ICgxMDAgLSBwZXJjZW50UmlnaHQpICsgJyUnXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7Rm9ybSwgU3R5bGVzLCBQcm9ncmVzc0JhciwgVGh1bWJ9IiwiXG5pbXBvcnQge0Zvcm0sIFN0eWxlcywgUHJvZ3Jlc3NCYXIsIFRodW1ifSBmcm9tICcuL3N1YlZpZXdzJ1xuXG5pbnRlcmZhY2UgSURhdGEge1xuICAgIG1pbjogbnVtYmVyXG4gICAgbWF4OiBudW1iZXJcbiAgICBkZWZhdWx0VmFsdWU6IG51bWJlclxuICAgIHJpZ2h0VmFsdWU6IG51bWJlclxuICAgIGlzUmFuZ2U6IGJvb2xlYW5cbiAgICByaWdodFByb2dyZXNzQmFyOiBib29sZWFuXG4gICAgb3ZlclRodW1iRWxlbWVudDogYm9vbGVhblxufVxuaW50ZXJmYWNlIElPYnNlcnZlclZpZXcge1xuICAgIHVwZGF0ZU1vZGVsKGFyZzA6IHN0cmluZywgYXJnMTogbnVtYmVyKTogdm9pZFxufVxuXG5jbGFzcyBWaWV3IHtcbiAgICBwYXJlbnQ6IEhUTUxFbGVtZW50XG4gICAgd3JhcHBlciE6IEhUTUxEaXZFbGVtZW50XG5cbiAgICBmb3JtOiBGb3JtXG4gICAgc3R5bGVzOiBTdHlsZXNcbiAgICBwcm9ncmVzc0JhcjogUHJvZ3Jlc3NCYXJcbiAgICB0aHVtYjogVGh1bWJcbiAgICBvcHRpb25zOiBJRGF0YVxuICAgIG9ic2VydmVyczogSU9ic2VydmVyVmlld1tdXG4gICAgY29uc3RydWN0b3IocGFyZW50OiBIVE1MRWxlbWVudCwgZm9ybTogRm9ybSwgc3R5bGVzOiBTdHlsZXMsIHByb2dyZXNzQmFyOiBQcm9ncmVzc0JhciwgdGh1bWI6IFRodW1iKSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50XG4gICAgICAgIHRoaXMuZm9ybSA9IGZvcm1cbiAgICAgICAgdGhpcy5zdHlsZXMgPSBzdHlsZXNcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JhciA9IHByb2dyZXNzQmFyXG4gICAgICAgIHRoaXMudGh1bWIgPSB0aHVtYlxuXG4gICAgLy8gZGVmYXVsdCBkYXRhXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiAxMCxcbiAgICAgICAgICAgIHJpZ2h0VmFsdWU6IDUwLFxuICAgICAgICAgICAgaXNSYW5nZTogdHJ1ZSxcbiAgICAgICAgICAgIHJpZ2h0UHJvZ3Jlc3NCYXI6IGZhbHNlLFxuICAgICAgICAgICAgb3ZlclRodW1iRWxlbWVudDogdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXVxuICAgIH1cbiAgICBzdWJzY3JpYmUob2JzZXJ2ZXI6IElPYnNlcnZlclZpZXcpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChvYnNlcnZlcilcbiAgICB9XG4gICAgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5jcmVhdGVXcmFwcGVyKClcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZm9ybS5pbml0KFxuICAgICAgICAgICAgdGhpcy53cmFwcGVyLCBcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pc1JhbmdlLCBcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5taW4sIFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1heFxuICAgICAgICApXG4gICAgICAgIHRoaXMuc3R5bGVzLmluaXQodGhpcy53cmFwcGVyKVxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLmNyZWF0ZVByb2dyZXNzQmFyKHRoaXMuc3R5bGVzLnN0eWxlKVxuICAgICAgICB0aGlzLnRodW1iLmluaXQoXG4gICAgICAgICAgICB0aGlzLnN0eWxlcy5zdHlsZSxcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pc1JhbmdlLFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm92ZXJUaHVtYkVsZW1lbnQsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZGVmYXVsdFZhbHVlLFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnJpZ2h0VmFsdWVcbiAgICAgICAgKVxuICAgICAgICBcblxuICAgICAgICB0aGlzLnNldElucHV0KClcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZXZlbnRJbnB1dCgpXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuYmFyLm9ubW91c2Vkb3duID0gZWxlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50Q2xpY2soZWxlbSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0eWxlcy50cmFjay5vbm1vdXNlZG93biA9IGVsZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5ldmVudENsaWNrKGVsZW0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ldmVudEhvdmVyKClcbiAgICAgICAgdGhpcy5ldmVudEFjdGl2ZSgpXG4gICAgfSBcblxuICAgIGNyZWF0ZVdyYXBwZXIgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMud3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRoaXMud3JhcHBlci5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXInKVxuICAgICAgICB0aGlzLnBhcmVudC5hcHBlbmQodGhpcy53cmFwcGVyKVxuICAgIH1cblxuICAgIHNldElucHV0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmZvcm0uc2V0SW5wdXRWYWx1ZSh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgdGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSwgdGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBwbGFjZURlZmF1bHQ6IG51bWJlciA9IHRoaXMucHJvZ3Jlc3NCYXIuY2FsY1BlcmNlbnQoXG4gICAgICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0LnZhbHVlKSwgXG4gICAgICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0Lm1pbiksIFxuICAgICAgICAgICAgICAgICAgICBOdW1iZXIodGhpcy5mb3JtLmRlZmF1bHRJbnB1dC5tYXgpKVxuICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICBjb25zdCBwbGFjZVJpZ2h0OiBudW1iZXIgPSB0aGlzLmZvcm0ucmlnaHRJbnB1dCA/IFxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5jYWxjUGVyY2VudChcbiAgICAgICAgICAgICAgICBOdW1iZXIodGhpcy5mb3JtLnJpZ2h0SW5wdXQudmFsdWUpLCBcbiAgICAgICAgICAgICAgICBOdW1iZXIodGhpcy5mb3JtLnJpZ2h0SW5wdXQubWluKSwgXG4gICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5yaWdodElucHV0Lm1heCkpIFxuICAgICAgICAgICAgICAgIDogTmFOIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuc2V0RGVmYXVsdCh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGxhY2VEZWZhdWx0LCBwbGFjZVJpZ2h0KVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yaWdodFByb2dyZXNzQmFyKSB7IFxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5zZXRSaWdodCh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGxhY2VEZWZhdWx0KSBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGh1bWIucGxhY2VUaHVtYih0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGxhY2VEZWZhdWx0LCBwbGFjZVJpZ2h0KVxuXG4gICAgICAgIFxuICAgIH1cbiAgICBldmVudElucHV0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmZvcm0uZGVmYXVsdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSA9IE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0LnZhbHVlKVxuICAgICAgICAgICAgdGhpcy5zZXRJbnB1dCgpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLnVwZGF0ZU1vZGVsKCdkZWZhdWx0JywgTnVtYmVyKHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQudmFsdWUpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMudGh1bWIuc2V0VGh1bWJWYWx1ZSh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSwgdGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUpXG4gICAgICAgIH0pXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNSYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtLnJpZ2h0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUgPSBOdW1iZXIodGhpcy5mb3JtLnJpZ2h0SW5wdXQudmFsdWUpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJbnB1dCgpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVwZGF0ZU1vZGVsKCdyaWdodCcsIE51bWJlcih0aGlzLmZvcm0ucmlnaHRJbnB1dC52YWx1ZSkpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aGlzLnRodW1iLnNldFRodW1iVmFsdWUodGhpcy5vcHRpb25zLmlzUmFuZ2UsIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZGVmYXVsdFZhbHVlLCB0aGlzLm9wdGlvbnMucmlnaHRWYWx1ZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgZXZlbnRDbGljayhlbGVtOiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGNvb3JkczogRE9NUmVjdCA9IHRoaXMuc3R5bGVzLnRyYWNrLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIGNvbnN0IGxlbmd0aDogbnVtYmVyID0gY29vcmRzLnJpZ2h0IC0gY29vcmRzLmxlZnRcbiAgICAgICAgY29uc3QgY3VycmVudFBvc2l0aW9uOiBudW1iZXIgPSBlbGVtLnBhZ2VYIC0gY29vcmRzLmxlZnRcbiAgICAgICAgY29uc3QgcGVyY2VudDogbnVtYmVyID0gY3VycmVudFBvc2l0aW9uL2xlbmd0aCAqIDEwMFxuXG4gICAgICAgIGNvbnN0IHBsYWNlRGVmYXVsdDogbnVtYmVyID0gdGhpcy5wcm9ncmVzc0Jhci5jYWxjUGVyY2VudChcbiAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0LnZhbHVlKSwgXG4gICAgICAgICAgICBOdW1iZXIodGhpcy5mb3JtLmRlZmF1bHRJbnB1dC5taW4pLCBcbiAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0Lm1heCkpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBuZXdWYWx1ZTogbnVtYmVyID0gdGhpcy5jYWxjVmFsdWUocGVyY2VudClcbiAgICAgICAgY29uc3QgaGFsZk9mQmFyOiBudW1iZXIgPSAodGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUgKyB0aGlzLm9wdGlvbnMuZGVmYXVsdFZhbHVlKSAvIDJcbiAgICBcbiAgICAgICAgY29uc3QgaXNSaWdodFRyYWNrOiBib29sZWFuID0gdGhpcy5vcHRpb25zLmlzUmFuZ2UgJiYgbmV3VmFsdWUgPiB0aGlzLm9wdGlvbnMucmlnaHRWYWx1ZVxuICAgICAgICBjb25zdCBpc1JpZ2h0QmFyID0gdGhpcy5vcHRpb25zLmlzUmFuZ2UgJiYgbmV3VmFsdWUgPiBoYWxmT2ZCYXJcblxuICAgICAgICBpZihpc1JpZ2h0VHJhY2sgfHwgaXNSaWdodEJhcikge1xuICAgICAgICAgICAgdGhpcy5mb3JtLnJpZ2h0SW5wdXQudmFsdWUgPSBTdHJpbmcobmV3VmFsdWUpXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMucmlnaHRWYWx1ZSA9IG5ld1ZhbHVlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMudGh1bWIucGxhY2VUaHVtYih0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGxhY2VEZWZhdWx0LCBwZXJjZW50KVxuXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnNldERlZmF1bHQodGhpcy5vcHRpb25zLmlzUmFuZ2UsIHBsYWNlRGVmYXVsdCwgcGVyY2VudClcblxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIudXBkYXRlTW9kZWwoJ3JpZ2h0JywgbmV3VmFsdWUpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB0aGlzLnRodW1iLnNldFRodW1iVmFsdWUodGhpcy5vcHRpb25zLmlzUmFuZ2UsIFxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kZWZhdWx0VmFsdWUsIHRoaXMub3B0aW9ucy5yaWdodFZhbHVlKVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZvcm0uZGVmYXVsdElucHV0LnZhbHVlID0gU3RyaW5nKG5ld1ZhbHVlKVxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSA9IG5ld1ZhbHVlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMudGh1bWIucGxhY2VUaHVtYih0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGVyY2VudClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yaWdodFByb2dyZXNzQmFyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5zZXRSaWdodCh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGVyY2VudClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5zZXREZWZhdWx0KHRoaXMub3B0aW9ucy5pc1JhbmdlLCBwZXJjZW50KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIudXBkYXRlTW9kZWwoJ2RlZmF1bHQnLCBuZXdWYWx1ZSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHRoaXMudGh1bWIuc2V0VGh1bWJWYWx1ZSh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSwgdGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUpXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYWxjVmFsdWUocGVyY2VudDogbnVtYmVyLCBcbiAgICAgICAgbWluOiBudW1iZXIgPSB0aGlzLm9wdGlvbnMubWluLCBcbiAgICAgICAgbWF4OiBudW1iZXIgPSB0aGlzLm9wdGlvbnMubWF4KTogbnVtYmVyIHtcbiAgICAgICAgICAgIGxldCBkaWFwYXNvbjogbnVtYmVyID0gbWF4IC0gbWluXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChkaWFwYXNvbiAtIChtYXggLSAoKGRpYXBhc29uKSAqIHBlcmNlbnQpIC8gMTAwKSlcbiAgICB9XG4gICAgXG4gICAgZXZlbnRIb3ZlciA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5mb3JtLmRlZmF1bHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm92ZXJUaHVtYkVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iT3V0cHV0LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktYmxvY2snKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50aHVtYi50aHVtYkRlZmF1bHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYl9ob3ZlcicpXG4gICAgICAgIH0pXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNSYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtLnJpZ2h0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMub3ZlclRodW1iRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iT3V0cHV0UmlnaHQ/LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktYmxvY2snKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iUmlnaHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYl9ob3ZlcicpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mb3JtLmRlZmF1bHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMub3ZlclRodW1iRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGh1bWIudGh1bWJPdXRwdXQuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1ibG9jaycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iRGVmYXVsdC5jbGFzc0xpc3QucmVtb3ZlKCdyYW5nZS1zbGlkZXJfX3RodW1iX2hvdmVyJylcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pc1JhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm0ucmlnaHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm92ZXJUaHVtYkVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHVtYi50aHVtYk91dHB1dFJpZ2h0Py5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LWJsb2NrJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy50aHVtYi50aHVtYlJpZ2h0LmNsYXNzTGlzdC5yZW1vdmUoJ3JhbmdlLXNsaWRlcl9fdGh1bWJfaG92ZXInKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBldmVudEFjdGl2ZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5mb3JtLmRlZmF1bHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iRGVmYXVsdC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3RodW1iX2FjdGl2ZScpXG4gICAgICAgIH0pXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNSYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtLnJpZ2h0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudGh1bWIudGh1bWJSaWdodC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3RodW1iX2FjdGl2ZScpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mb3JtLmRlZmF1bHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50aHVtYi50aHVtYkRlZmF1bHQuY2xhc3NMaXN0LnJlbW92ZSgncmFuZ2Utc2xpZGVyX190aHVtYl9hY3RpdmUnKVxuICAgICAgICB9KVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlzUmFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5yaWdodElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHVtYi50aHVtYlJpZ2h0LmNsYXNzTGlzdC5yZW1vdmUoJ3JhbmdlLXNsaWRlcl9fdGh1bWJfYWN0aXZlJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCB7Vmlld31cbiJdLCJzb3VyY2VSb290IjoiIn0=