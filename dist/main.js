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
      overThumbElement: settings.overThumbElement
    }), new _mvc_view_ts__WEBPACK_IMPORTED_MODULE_1__["View"](this, new _mvc_subViews_ts__WEBPACK_IMPORTED_MODULE_0__["Form"](), new _mvc_subViews_ts__WEBPACK_IMPORTED_MODULE_0__["Styles"](), new _mvc_subViews_ts__WEBPACK_IMPORTED_MODULE_0__["ProgressBar"](), new _mvc_subViews_ts__WEBPACK_IMPORTED_MODULE_0__["Thumb"]()));
    return plugin;
  };
})(jQuery);

$('#first-range-slider').rangeSlider({
  isRange: true,
  leftValue: 10,
  rightValue: 60,
  overThumbElement: true
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
  overThumbElement: true
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

    _defineProperty(this, "overThumbElement", void 0);

    _defineProperty(this, "dataForView", void 0);

    _defineProperty(this, "observers", void 0);

    this.min = options.min ? options.min : 0;
    this.max = options.max ? options.max : 100;
    this.defaultValue = options.defaultValue ? options.defaultValue : 50;
    this.rightValue = options.rightValue ? options.rightValue : 60;
    this.isRange = options.isRange;
    this.rightProgressBar = options.rightProgressBar;
    this.overThumbElement = options.overThumbElement;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4gc3luYyBcXC4odHN8c2NzcykkIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2pxdWVyeS5tYWluLmQudHMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5zY3NzIiwid2VicGFjazovLy8uL212Yy9jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL212Yy9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9tdmMvc3ViVmlld3MudHMiLCJ3ZWJwYWNrOi8vLy4vbXZjL3ZpZXcudHMiXSwibmFtZXMiOlsiaW1wb3J0QWxsIiwiciIsImtleXMiLCJmb3JFYWNoIiwicmVxdWlyZSIsIiQiLCJmbiIsInJhbmdlU2xpZGVyIiwic2V0dGluZ3MiLCJwbHVnaW4iLCJDb250cm9sbGVyIiwiTW9kZWwiLCJtaW4iLCJtYXgiLCJkZWZhdWx0VmFsdWUiLCJpbml0aWFsVmFsdWUiLCJsZWZ0VmFsdWUiLCJyaWdodFZhbHVlIiwiaXNSYW5nZSIsInJpZ2h0UHJvZ3Jlc3NCYXIiLCJvdmVyVGh1bWJFbGVtZW50IiwiVmlldyIsIkZvcm0iLCJTdHlsZXMiLCJQcm9ncmVzc0JhciIsIlRodW1iIiwialF1ZXJ5IiwibW9kZWwiLCJ2aWV3Iiwic3Vic2NyaWJlIiwiaW5pdCIsIm9wdGlvbnMiLCJkYXRhRm9yVmlldyIsIm9wdGlvbiIsIm5ld1ZhbHVlIiwibGltaXRUb2dnbGUiLCJzZXRJbnB1dCIsIm9ic2VydmVycyIsIm9ic2VydmVyIiwicHVzaCIsInVwZGF0ZVZpZXciLCJwYXJlbnQiLCJpc0RvdWJsZSIsImNyZWF0ZUZvcm0iLCJjcmVhdGVJbnB1dCIsInNldE1pbiIsInNldE1heCIsImZvcm0iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmQiLCJkZWZhdWx0SW5wdXQiLCJ0eXBlIiwicmlnaHRJbnB1dCIsInZhbHVlIiwiTmFOIiwiU3RyaW5nIiwiY3JlYXRlU3R5bGVzIiwiY3JlYXRlVHJhY2siLCJzdHlsZSIsInRyYWNrIiwiYmFyIiwicGVyY2VudCIsInBlcmNlbnRSaWdodCIsImxlZnQiLCJyaWdodCIsInRvZ2dsZUVsZW1lbnQiLCJjcmVhdGVUaHVtYiIsImNyZWF0ZVRodW1iRWxlbWVudCIsInRodW1iRGVmYXVsdCIsInRodW1iUmlnaHQiLCJzZXRUaHVtYlZhbHVlIiwiY2xhc3NOYW1lIiwicmlnaHRQYXJlbnQiLCJ0aHVtYk91dHB1dFJpZ2h0IiwidGh1bWJPdXRwdXQiLCJ0ZXh0Q29udGVudCIsInN0eWxlcyIsInByb2dyZXNzQmFyIiwidGh1bWIiLCJjcmVhdGVXcmFwcGVyIiwid3JhcHBlciIsImNyZWF0ZVByb2dyZXNzQmFyIiwiZXZlbnRJbnB1dCIsIm9ubW91c2Vkb3duIiwiZWxlbSIsImV2ZW50Q2xpY2siLCJldmVudEhvdmVyIiwiZXZlbnRBY3RpdmUiLCJzZXRJbnB1dFZhbHVlIiwicGxhY2VEZWZhdWx0IiwiY2FsY1BlcmNlbnQiLCJOdW1iZXIiLCJwbGFjZVJpZ2h0Iiwic2V0RGVmYXVsdCIsInNldFJpZ2h0IiwicGxhY2VUaHVtYiIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1cGRhdGVNb2RlbCIsInJlbW92ZSIsImNvb3JkcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlbmd0aCIsImN1cnJlbnRQb3NpdGlvbiIsInBhZ2VYIiwiY2FsY1ZhbHVlIiwiaGFsZk9mQmFyIiwiaXNSaWdodFRyYWNrIiwiaXNSaWdodEJhciIsImRpYXBhc29uIiwiTWF0aCIsInJvdW5kIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlC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SCxTQUZEO0FBS0gsT0FiRCxNQWFPO0FBQ0gsYUFBS2EsSUFBTCxDQUFVTSxZQUFWLENBQXVCRyxLQUF2QixHQUErQkUsTUFBTSxDQUFDeEIsUUFBRCxDQUFyQztBQUNBLGFBQUtILE9BQUwsQ0FBYWpCLFlBQWIsR0FBNEJvQixRQUE1QjtBQUVBLGFBQUsrQyxLQUFMLENBQVdpQixVQUFYLENBQXNCLEtBQUtuRSxPQUFMLENBQWFiLE9BQW5DLEVBQTRDOEMsT0FBNUM7O0FBRUEsWUFBSSxLQUFLakMsT0FBTCxDQUFhWixnQkFBakIsRUFBbUM7QUFDL0IsZUFBSzZELFdBQUwsQ0FBaUJpQixRQUFqQixDQUEwQixLQUFLbEUsT0FBTCxDQUFhYixPQUF2QyxFQUFnRDhDLE9BQWhEO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsZUFBS2dCLFdBQUwsQ0FBaUJnQixVQUFqQixDQUE0QixLQUFLakUsT0FBTCxDQUFhYixPQUF6QyxFQUFrRDhDLE9BQWxEO0FBQ0g7O0FBRUQsYUFBSzNCLFNBQUwsQ0FBZWxDLE9BQWYsQ0FBdUIsVUFBQW1DLFFBQVEsRUFBSTtBQUMvQkEsa0JBQVEsQ0FBQzhELFdBQVQsQ0FBcUIsU0FBckIsRUFBZ0NsRSxRQUFoQztBQUNILFNBRkQ7QUFLSDtBQUNKOzs7OEJBQ1M4QixPLEVBRWtDO0FBQUEsVUFEeENwRCxHQUN3Qyx1RUFEMUIsS0FBS21CLE9BQUwsQ0FBYW5CLEdBQ2E7QUFBQSxVQUF4Q0MsR0FBd0MsdUVBQTFCLEtBQUtrQixPQUFMLENBQWFsQixHQUFhO0FBQ3BDLFVBQUlrRyxRQUFnQixHQUFHbEcsR0FBRyxHQUFHRCxHQUE3QjtBQUNBLGFBQU9vRyxJQUFJLENBQUNDLEtBQUwsQ0FBV0YsUUFBUSxJQUFJbEcsR0FBRyxHQUFLa0csUUFBRCxHQUFhL0MsT0FBZCxHQUF5QixHQUFuQyxDQUFuQixDQUFQO0FBQ1AiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vanF1ZXJ5Lm1haW4uZC50c1wiOiBcIi4vanF1ZXJ5Lm1haW4uZC50c1wiLFxuXHRcIi4vbWFpbi5zY3NzXCI6IFwiLi9tYWluLnNjc3NcIixcblx0XCIuL212Yy9jb250cm9sbGVyLnRzXCI6IFwiLi9tdmMvY29udHJvbGxlci50c1wiLFxuXHRcIi4vbXZjL21vZGVsLnRzXCI6IFwiLi9tdmMvbW9kZWwudHNcIixcblx0XCIuL212Yy9zdWJWaWV3cy50c1wiOiBcIi4vbXZjL3N1YlZpZXdzLnRzXCIsXG5cdFwiLi9tdmMvdmlldy50c1wiOiBcIi4vbXZjL3ZpZXcudHNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgXFxcXC4odHN8c2NzcykkXCI7IiwiZnVuY3Rpb24gaW1wb3J0QWxsKHIpIHtcbiAgci5rZXlzKCkuZm9yRWFjaChyKVxufVxuXG5pbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuLycsIHRydWUsIC9cXC4odHN8c2NzcykkLykpIiwiXG5pbXBvcnQge0Zvcm0sIFN0eWxlcywgUHJvZ3Jlc3NCYXIsIFRodW1ifSBmcm9tICcuL212Yy9zdWJWaWV3cy50cydcbmltcG9ydCB7Vmlld30gZnJvbSAnLi9tdmMvdmlldy50cydcbmltcG9ydCB7TW9kZWx9IGZyb20gJy4vbXZjL21vZGVsLnRzJ1xuaW1wb3J0IHtDb250cm9sbGVyfSBmcm9tICcuL212Yy9jb250cm9sbGVyJ1xuXG5cbihmdW5jdGlvbigkOiBKUXVlcnlTdGF0aWMpIHtcbiAgICAkLmZuLnJhbmdlU2xpZGVyID0gZnVuY3Rpb24oc2V0dGluZ3M6IHtcbiAgICAgICAgbWluPzogbnVtYmVyXG4gICAgICAgIG1heD86IG51bWJlclxuICAgICAgICBpbml0aWFsVmFsdWU/OiBudW1iZXJcbiAgICAgICAgbGVmdFZhbHVlPzogbnVtYmVyXG4gICAgICAgIGRlZmF1bHRWYWx1ZT86IG51bWJlclxuICAgICAgICByaWdodFZhbHVlPzogbnVtYmVyXG4gICAgICAgIGlzUmFuZ2U/OiBib29sZWFuXG4gICAgICAgIHJpZ2h0UHJvZ3Jlc3NCYXI/OiBib29sZWFuXG4gICAgICAgIG92ZXJUaHVtYkVsZW1lbnQ/OiBib29sZWFuXG4gICAgfSkge1xuICAgICAgICBjb25zdCBwbHVnaW4gPSBuZXcgQ29udHJvbGxlcihcbiAgICAgICAgICAgIG5ldyBNb2RlbCh7XG4gICAgICAgICAgICAgICAgbWluOiBzZXR0aW5ncy5taW4sXG4gICAgICAgICAgICAgICAgbWF4OiBzZXR0aW5ncy5tYXgsXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBzZXR0aW5ncy5pbml0aWFsVmFsdWUgfHwgc2V0dGluZ3MubGVmdFZhbHVlLFxuICAgICAgICAgICAgICAgIHJpZ2h0VmFsdWU6IHNldHRpbmdzLnJpZ2h0VmFsdWUsXG4gICAgICAgICAgICAgICAgaXNSYW5nZTogc2V0dGluZ3MuaXNSYW5nZSxcbiAgICAgICAgICAgICAgICByaWdodFByb2dyZXNzQmFyOiBzZXR0aW5ncy5yaWdodFByb2dyZXNzQmFyLFxuICAgICAgICAgICAgICAgIG92ZXJUaHVtYkVsZW1lbnQ6IHNldHRpbmdzLm92ZXJUaHVtYkVsZW1lbnRcbiAgICAgICAgICAgIH0pLCBcbiAgICAgICAgICAgIG5ldyBWaWV3KCBcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIG5ldyBGb3JtKCksXG4gICAgICAgICAgICAgICAgbmV3IFN0eWxlcygpLFxuICAgICAgICAgICAgICAgIG5ldyBQcm9ncmVzc0JhcigpLFxuICAgICAgICAgICAgICAgIG5ldyBUaHVtYigpIFxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIHJldHVybiBwbHVnaW5cbiAgICB9XG59KShqUXVlcnkpXG5cbiQoJyNmaXJzdC1yYW5nZS1zbGlkZXInKS5yYW5nZVNsaWRlcih7XG4gICAgaXNSYW5nZTogdHJ1ZSxcbiAgICBsZWZ0VmFsdWU6IDEwLFxuICAgIHJpZ2h0VmFsdWU6IDYwLFxuICAgIG92ZXJUaHVtYkVsZW1lbnQ6IHRydWVcbn0pXG4kKCcjc2Vjb25kLXJhbmdlLXNsaWRlcicpLnJhbmdlU2xpZGVyKHtcbiAgICBpc1JhbmdlOiB0cnVlLFxuICAgIGxlZnRWYWx1ZTogNDAsXG4gICAgcmlnaHRWYWx1ZTogNzAsXG4gICAgb3ZlclRodW1iRWxlbWVudDogdHJ1ZVxufSlcbiQoJyN0aGlyZC1yYW5nZS1zbGlkZXInKS5yYW5nZVNsaWRlcih7XG4gICAgbWluOiAwLFxuICAgIG1heDogMzAsXG4gICAgaW5pdGlhbFZhbHVlOiAyMCxcbiAgICByaWdodFByb2dyZXNzQmFyOiB0cnVlLFxuICAgIG92ZXJUaHVtYkVsZW1lbnQ6IHRydWVcbn0pXG4kKCcjZm9ydGgtcmFuZ2Utc2xpZGVyJykucmFuZ2VTbGlkZXIoe1xuICAgIGluaXRpYWxWYWx1ZTogMjAsXG4gICAgcmlnaHRQcm9ncmVzc0JhcjogZmFsc2UsXG4gICAgb3ZlclRodW1iRWxlbWVudDogdHJ1ZVxufSlcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MDEyMzczMjk1MTFcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL2hvbWUveGVuYS9SYW5nZS1zbGlkZXIvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInJlbG9hZEFsbFwiOnRydWUsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJpbXBvcnQge01vZGVsfSBmcm9tICcuL21vZGVsJ1xuaW1wb3J0IHtWaWV3fSBmcm9tICcuL3ZpZXcnXG5cbmNsYXNzIENvbnRyb2xsZXIge1xuICAgIG1vZGVsOiBNb2RlbFxuICAgIHZpZXc6IFZpZXdcbiAgICBjb25zdHJ1Y3Rvcihtb2RlbDogTW9kZWwsIHZpZXc6IFZpZXcpIHtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsXG4gICAgICAgIHRoaXMudmlldyA9IHZpZXdcbiAgICAgICAgdGhpcy52aWV3Lm9wdGlvbnMgPSB0aGlzLm1vZGVsLmRhdGFGb3JWaWV3XG4gICAgICAgIHRoaXMuaW5pdCgpIFxuICAgIH1cbiAgICBpbml0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnZpZXcuc3Vic2NyaWJlKHRoaXMpXG4gICAgICAgIHRoaXMubW9kZWwuc3Vic2NyaWJlKHRoaXMpXG4gICAgICAgIHRoaXMudmlldy5pbml0KClcbiAgICB9XG4gICAgdXBkYXRlTW9kZWwob3B0aW9uOiBzdHJpbmcsIG5ld1ZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMubW9kZWwuaXNSYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5saW1pdFRvZ2dsZShvcHRpb24sIG5ld1ZhbHVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5kZWZhdWx0VmFsdWUgPSBuZXdWYWx1ZVxuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZVZpZXcoKSB7XG4gICAgICAgIHRoaXMudmlldy5vcHRpb25zLmRlZmF1bHRWYWx1ZSA9IHRoaXMubW9kZWwuZGVmYXVsdFZhbHVlXG4gICAgICAgIHRoaXMudmlldy5vcHRpb25zLnJpZ2h0VmFsdWUgPSB0aGlzLm1vZGVsLnJpZ2h0VmFsdWVcbiAgICAgICAgdGhpcy52aWV3LnNldElucHV0KClcbiAgICB9XG59XG5cbmV4cG9ydCB7Q29udHJvbGxlcn0iLCJpbnRlcmZhY2UgSURhdGEge1xuICAgIG1pbjogbnVtYmVyXG4gICAgbWF4OiBudW1iZXJcbiAgICBkZWZhdWx0VmFsdWU6IG51bWJlclxuICAgIHJpZ2h0VmFsdWU6IG51bWJlclxuICAgIGlzUmFuZ2U6IGJvb2xlYW5cbiAgICByaWdodFByb2dyZXNzQmFyOiBib29sZWFuXG4gICAgb3ZlclRodW1iRWxlbWVudDogYm9vbGVhblxufVxuaW50ZXJmYWNlIElPYnNlcnZlck1vZGVsIHtcbiAgICB1cGRhdGVWaWV3KCk6IHZvaWRcbn1cblxuY2xhc3MgTW9kZWwge1xuICAgIG1pbjogbnVtYmVyXG4gICAgbWF4OiBudW1iZXJcbiAgICBkZWZhdWx0VmFsdWU6IG51bWJlclxuICAgIHJpZ2h0VmFsdWU6IG51bWJlclxuICAgIGlzUmFuZ2U6IGJvb2xlYW5cbiAgICByaWdodFByb2dyZXNzQmFyOiBib29sZWFuXG4gICAgb3ZlclRodW1iRWxlbWVudDogYm9vbGVhblxuICAgIGRhdGFGb3JWaWV3OiBJRGF0YVxuICAgIG9ic2VydmVyczogSU9ic2VydmVyTW9kZWxbXVxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElEYXRhKSB7XG4gICAgICAgIHRoaXMubWluID0gb3B0aW9ucy5taW4gPyBvcHRpb25zLm1pbiA6IDBcbiAgICAgICAgdGhpcy5tYXggPSBvcHRpb25zLm1heCA/IG9wdGlvbnMubWF4IDogMTAwXG4gICAgICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gb3B0aW9ucy5kZWZhdWx0VmFsdWUgPyBvcHRpb25zLmRlZmF1bHRWYWx1ZSA6IDUwXG4gICAgICAgIHRoaXMucmlnaHRWYWx1ZSA9IG9wdGlvbnMucmlnaHRWYWx1ZSA/IG9wdGlvbnMucmlnaHRWYWx1ZSA6IDYwXG4gICAgICAgIHRoaXMuaXNSYW5nZSA9IG9wdGlvbnMuaXNSYW5nZVxuICAgICAgICB0aGlzLnJpZ2h0UHJvZ3Jlc3NCYXIgPSBvcHRpb25zLnJpZ2h0UHJvZ3Jlc3NCYXJcbiAgICAgICAgdGhpcy5vdmVyVGh1bWJFbGVtZW50ID0gb3B0aW9ucy5vdmVyVGh1bWJFbGVtZW50XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW11cbiAgICAgICAgdGhpcy5kYXRhRm9yVmlldyA9IHtcbiAgICAgICAgICAgIG1pbjogdGhpcy5taW4sXG4gICAgICAgICAgICBtYXg6IHRoaXMubWF4LFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiB0aGlzLmRlZmF1bHRWYWx1ZSxcbiAgICAgICAgICAgIHJpZ2h0VmFsdWU6IHRoaXMucmlnaHRWYWx1ZSxcbiAgICAgICAgICAgIGlzUmFuZ2U6IHRoaXMuaXNSYW5nZSxcbiAgICAgICAgICAgIHJpZ2h0UHJvZ3Jlc3NCYXI6IHRoaXMucmlnaHRQcm9ncmVzc0JhcixcbiAgICAgICAgICAgIG92ZXJUaHVtYkVsZW1lbnQ6IHRoaXMub3ZlclRodW1iRWxlbWVudFxuICAgICAgICB9XG4gICAgfVxuICAgIHN1YnNjcmliZShvYnNlcnZlcjogSU9ic2VydmVyTW9kZWwpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChvYnNlcnZlcilcbiAgICB9XG4gICAgbGltaXRUb2dnbGUob3B0aW9uOiBzdHJpbmcsIG5ld1ZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgc3dpdGNoIChvcHRpb24pIHtcbiAgICAgICAgICAgIGNhc2UoJ2RlZmF1bHQnKTpcblxuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA8IHRoaXMucmlnaHRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IG5ld1ZhbHVlXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51cGRhdGVWaWV3KClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FzZSgncmlnaHQnKTpcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA+IHRoaXMuZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRWYWx1ZSA9IG5ld1ZhbHVlXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51cGRhdGVWaWV3KClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59XG5cbmV4cG9ydCB7TW9kZWx9IiwiY2xhc3MgRm9ybSB7XG4gICAgZm9ybSE6IEhUTUxEaXZFbGVtZW50XG4gICAgZGVmYXVsdElucHV0ITogSFRNTElucHV0RWxlbWVudFxuICAgIHJpZ2h0SW5wdXQhOiBIVE1MSW5wdXRFbGVtZW50XG5cbiAgICBpbml0KHBhcmVudDogSFRNTERpdkVsZW1lbnQsIGlzRG91YmxlOiBib29sZWFuLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jcmVhdGVGb3JtKHBhcmVudClcbiAgICAgICAgdGhpcy5jcmVhdGVJbnB1dChpc0RvdWJsZSlcbiAgICAgICAgdGhpcy5zZXRNaW4oaXNEb3VibGUsIG1pbilcbiAgICAgICAgdGhpcy5zZXRNYXgoaXNEb3VibGUsIG1heClcbiAgICB9XG5cbiAgICBjcmVhdGVGb3JtKHBhcmVudDogSFRNTERpdkVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mb3JtID0gPEhUTUxEaXZFbGVtZW50Pihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSlcbiAgICAgICAgdGhpcy5mb3JtLmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fZm9ybScpXG4gICAgICAgIHBhcmVudC5hcHBlbmQodGhpcy5mb3JtKVxuICAgIH1cbiAgICBcbiAgICBjcmVhdGVJbnB1dChpc0RvdWJsZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAoaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQudHlwZSA9ICdyYW5nZSdcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9faW5wdXQnKSBcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9faW5wdXRfbGVmdCcpXG4gICAgICAgICAgICB0aGlzLmZvcm0uYXBwZW5kKHRoaXMuZGVmYXVsdElucHV0KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQudHlwZSA9ICdyYW5nZSdcbiAgICAgICAgICAgIHRoaXMucmlnaHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0JylcbiAgICAgICAgICAgIHRoaXMucmlnaHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0X3JpZ2h0JylcbiAgICAgICAgICAgIHRoaXMuZm9ybS5hcHBlbmQodGhpcy5yaWdodElucHV0KVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0LnR5cGUgPSAncmFuZ2UnXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0JylcbiAgICAgICAgICAgIHRoaXMuZm9ybS5hcHBlbmQodGhpcy5kZWZhdWx0SW5wdXQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0SW5wdXRWYWx1ZShpc0RvdWJsZTogYm9vbGVhbiwgdmFsdWU6IG51bWJlciwgcmlnaHRWYWx1ZTogbnVtYmVyID0gTmFOKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVmYXVsdElucHV0LnZhbHVlID0gU3RyaW5nKHZhbHVlKVxuICAgICAgICBpZiAoaXNEb3VibGUpIHsgICBcbiAgICAgICAgICAgIHRoaXMucmlnaHRJbnB1dC52YWx1ZSA9IFN0cmluZyhyaWdodFZhbHVlKVxuICAgICAgICB9XG4gICAgfVxuICAgIHNldE1pbihpc0RvdWJsZTogYm9vbGVhbiwgbWluOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQubWluID0gU3RyaW5nKG1pbilcbiAgICAgICAgaWYgKGlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQubWluID0gU3RyaW5nKG1pbilcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRNYXgoaXNEb3VibGU6IGJvb2xlYW4sIG1heDogbnVtYmVyID0gMTAwKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVmYXVsdElucHV0Lm1heCA9IFN0cmluZyhtYXgpXG4gICAgICAgIGlmIChpc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0Lm1heCA9IFN0cmluZyhtYXgpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIFN0eWxlcyB7XG4gICAgc3R5bGUhOiBIVE1MRGl2RWxlbWVudFxuICAgIHRyYWNrITogSFRNTERpdkVsZW1lbnRcblxuICAgIGluaXQocGFyZW50OiBIVE1MRGl2RWxlbWVudCkge1xuICAgICAgICB0aGlzLmNyZWF0ZVN0eWxlcyhwYXJlbnQpXG4gICAgICAgIHRoaXMuY3JlYXRlVHJhY2soKVxuICAgIH1cbiAgICBcbiAgICBjcmVhdGVTdHlsZXMocGFyZW50OiBIVE1MRGl2RWxlbWVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGhpcy5zdHlsZS5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3N0eWxlJylcbiAgICAgICAgcGFyZW50LmFwcGVuZCh0aGlzLnN0eWxlKVxuICAgIH1cbiAgICBcbiAgICBjcmVhdGVUcmFjaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50cmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRoaXMudHJhY2suY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190cmFjaycpXG4gICAgICAgIHRoaXMuc3R5bGUuYXBwZW5kKHRoaXMudHJhY2spXG4gICAgfVxufVxuXG5jbGFzcyBQcm9ncmVzc0JhciB7XG4gICAgYmFyITogSFRNTERpdkVsZW1lbnRcbiAgICBjcmVhdGVQcm9ncmVzc0JhcihwYXJlbnQ6IEhUTUxEaXZFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGhpcy5iYXIuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19wcm9ncmVzcy1iYXInKVxuICAgICAgICBwYXJlbnQuYXBwZW5kKHRoaXMuYmFyKVxuICAgIH1cbiAgICBjYWxjUGVyY2VudCh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gKCh2YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKSkgKiAxMDBcbiAgICB9XG4gICAgc2V0RGVmYXVsdChpc0RvdWJsZTogYm9vbGVhbiwgcGVyY2VudDogbnVtYmVyLCBwZXJjZW50UmlnaHQ6IG51bWJlciA9IE5hTik6IHZvaWQge1xuICAgICAgICBpZiAoaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLmxlZnQgPSBwZXJjZW50ICsgJyUnXG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5yaWdodCA9ICgxMDAgLSBwZXJjZW50UmlnaHQpICsgJyUnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5yaWdodCA9ICgxMDAgLSBwZXJjZW50KSArICclJ1xuICAgICAgICAgICAgdGhpcy5iYXIuc3R5bGUubGVmdCA9IFN0cmluZygwKVxuICAgICAgICB9XG4gICAgfVxuICAgIHNldFJpZ2h0KGlzRG91YmxlOiBib29sZWFuLCBwZXJjZW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFpc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy5iYXIuc3R5bGUubGVmdCA9IHBlcmNlbnQgKyAnJSdcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLnJpZ2h0ID0gU3RyaW5nKDApXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIFRodW1iIHtcblxuICAgIHRodW1iRGVmYXVsdCE6IEhUTUxEaXZFbGVtZW50XG4gICAgdGh1bWJSaWdodCE6IEhUTUxEaXZFbGVtZW50XG4gICAgdGh1bWJPdXRwdXQhOiBIVE1MRGl2RWxlbWVudFxuICAgIHRodW1iT3V0cHV0UmlnaHQ/OiBIVE1MRGl2RWxlbWVudFxuXG4gICAgaW5pdCAocGFyZW50OiBIVE1MRGl2RWxlbWVudCwgXG4gICAgICAgIGlzRG91YmxlOiBib29sZWFuLCBcbiAgICAgICAgdG9nZ2xlRWxlbWVudDogYm9vbGVhbiwgXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogbnVtYmVyLCBcbiAgICAgICAgcmlnaHRWYWx1ZT86IG51bWJlcikge1xuXG4gICAgICAgIHRoaXMuY3JlYXRlVGh1bWIocGFyZW50LCBpc0RvdWJsZSlcbiAgICAgICAgaWYgKHRvZ2dsZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVGh1bWJFbGVtZW50KGlzRG91YmxlLCB0aGlzLnRodW1iRGVmYXVsdCwgdGhpcy50aHVtYlJpZ2h0KVxuICAgICAgICAgICAgdGhpcy5zZXRUaHVtYlZhbHVlKGlzRG91YmxlLCBkZWZhdWx0VmFsdWUsIHJpZ2h0VmFsdWUpXG4gICAgICAgIH1cbiAgICB9XG4gICAgY3JlYXRlVGh1bWIocGFyZW50OiBIVE1MRGl2RWxlbWVudCwgaXNEb3VibGU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYoaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMudGh1bWJEZWZhdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHRoaXMudGh1bWJEZWZhdWx0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdGh1bWInKVxuICAgICAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYl9sZWZ0JylcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmQodGhpcy50aHVtYkRlZmF1bHQpXG5cbiAgICAgICAgICAgIHRoaXMudGh1bWJSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB0aGlzLnRodW1iUmlnaHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYicpXG4gICAgICAgICAgICB0aGlzLnRodW1iUmlnaHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYl9yaWdodCcpXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kKHRoaXMudGh1bWJSaWdodClcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQuY2xhc3NOYW1lID0gJ3JhbmdlLXNsaWRlcl9fdGh1bWInXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kKHRoaXMudGh1bWJEZWZhdWx0KVxuXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVUaHVtYkVsZW1lbnQoaXNEb3VibGU6IGJvb2xlYW4sIHBhcmVudDogSFRNTERpdkVsZW1lbnQsIHJpZ2h0UGFyZW50PzogSFRNTERpdkVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLnRodW1iT3V0cHV0UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdGhpcy50aHVtYk91dHB1dFJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdmFsdWUtdGh1bWInKVxuICAgICAgICAgICAgcmlnaHRQYXJlbnQhLmFwcGVuZCh0aGlzLnRodW1iT3V0cHV0UmlnaHQpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aHVtYk91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRoaXMudGh1bWJPdXRwdXQuY2xhc3NOYW1lID0gJ3JhbmdlLXNsaWRlcl9fdmFsdWUtdGh1bWInXG4gICAgICAgIHBhcmVudC5hcHBlbmQodGhpcy50aHVtYk91dHB1dClcbiAgICB9XG4gICAgc2V0VGh1bWJWYWx1ZShpc0RvdWJsZTogYm9vbGVhbiwgdmFsdWU6IG51bWJlciwgcmlnaHRWYWx1ZT86IG51bWJlcikge1xuICAgICAgICB0aGlzLnRodW1iT3V0cHV0LnRleHRDb250ZW50ID0gU3RyaW5nKHZhbHVlKVxuICAgICAgICBpZiAoaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMudGh1bWJPdXRwdXRSaWdodCEudGV4dENvbnRlbnQgPSBTdHJpbmcocmlnaHRWYWx1ZSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcGxhY2VUaHVtYihpc0RvdWJsZTogYm9vbGVhbiwgcGVyY2VudDogbnVtYmVyLCBwZXJjZW50UmlnaHQ6IG51bWJlciA9IE5hTik6IHZvaWQge1xuICAgICAgICB0aGlzLnRodW1iRGVmYXVsdC5zdHlsZS5sZWZ0ID0gcGVyY2VudCArICclJ1xuICAgICAgICBpZiAoaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMudGh1bWJSaWdodC5zdHlsZS5yaWdodCA9ICgxMDAgLSBwZXJjZW50UmlnaHQpICsgJyUnXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7Rm9ybSwgU3R5bGVzLCBQcm9ncmVzc0JhciwgVGh1bWJ9IiwiXG5pbXBvcnQge0Zvcm0sIFN0eWxlcywgUHJvZ3Jlc3NCYXIsIFRodW1ifSBmcm9tICcuL3N1YlZpZXdzJ1xuXG5pbnRlcmZhY2UgSURhdGEge1xuICAgIG1pbjogbnVtYmVyXG4gICAgbWF4OiBudW1iZXJcbiAgICBkZWZhdWx0VmFsdWU6IG51bWJlclxuICAgIHJpZ2h0VmFsdWU6IG51bWJlclxuICAgIGlzUmFuZ2U6IGJvb2xlYW5cbiAgICByaWdodFByb2dyZXNzQmFyOiBib29sZWFuXG4gICAgb3ZlclRodW1iRWxlbWVudDogYm9vbGVhblxufVxuaW50ZXJmYWNlIElPYnNlcnZlclZpZXcge1xuICAgIHVwZGF0ZU1vZGVsKGFyZzA6IHN0cmluZywgYXJnMTogbnVtYmVyKTogdm9pZFxufVxuXG5jbGFzcyBWaWV3IHtcbiAgICBwYXJlbnQ6IEhUTUxFbGVtZW50XG4gICAgd3JhcHBlciE6IEhUTUxEaXZFbGVtZW50XG5cbiAgICBmb3JtOiBGb3JtXG4gICAgc3R5bGVzOiBTdHlsZXNcbiAgICBwcm9ncmVzc0JhcjogUHJvZ3Jlc3NCYXJcbiAgICB0aHVtYjogVGh1bWJcbiAgICBvcHRpb25zOiBJRGF0YVxuICAgIG9ic2VydmVyczogSU9ic2VydmVyVmlld1tdXG4gICAgY29uc3RydWN0b3IocGFyZW50OiBIVE1MRWxlbWVudCwgZm9ybTogRm9ybSwgc3R5bGVzOiBTdHlsZXMsIHByb2dyZXNzQmFyOiBQcm9ncmVzc0JhciwgdGh1bWI6IFRodW1iKSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50XG4gICAgICAgIHRoaXMuZm9ybSA9IGZvcm1cbiAgICAgICAgdGhpcy5zdHlsZXMgPSBzdHlsZXNcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JhciA9IHByb2dyZXNzQmFyXG4gICAgICAgIHRoaXMudGh1bWIgPSB0aHVtYlxuXG4gICAgLy8gZGVmYXVsdCBkYXRhXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiAxMCxcbiAgICAgICAgICAgIHJpZ2h0VmFsdWU6IDUwLFxuICAgICAgICAgICAgaXNSYW5nZTogdHJ1ZSxcbiAgICAgICAgICAgIHJpZ2h0UHJvZ3Jlc3NCYXI6IGZhbHNlLFxuICAgICAgICAgICAgb3ZlclRodW1iRWxlbWVudDogdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXVxuICAgIH1cbiAgICBzdWJzY3JpYmUob2JzZXJ2ZXI6IElPYnNlcnZlclZpZXcpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChvYnNlcnZlcilcbiAgICB9XG4gICAgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5jcmVhdGVXcmFwcGVyKClcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZm9ybS5pbml0KFxuICAgICAgICAgICAgdGhpcy53cmFwcGVyLCBcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pc1JhbmdlLCBcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5taW4sIFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1heFxuICAgICAgICApXG4gICAgICAgIHRoaXMuc3R5bGVzLmluaXQodGhpcy53cmFwcGVyKVxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLmNyZWF0ZVByb2dyZXNzQmFyKHRoaXMuc3R5bGVzLnN0eWxlKVxuICAgICAgICB0aGlzLnRodW1iLmluaXQoXG4gICAgICAgICAgICB0aGlzLnN0eWxlcy5zdHlsZSxcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pc1JhbmdlLFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm92ZXJUaHVtYkVsZW1lbnQsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZGVmYXVsdFZhbHVlLFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnJpZ2h0VmFsdWVcbiAgICAgICAgKVxuICAgICAgICBcblxuICAgICAgICB0aGlzLnNldElucHV0KClcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZXZlbnRJbnB1dCgpXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuYmFyLm9ubW91c2Vkb3duID0gZWxlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50Q2xpY2soZWxlbSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0eWxlcy50cmFjay5vbm1vdXNlZG93biA9IGVsZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5ldmVudENsaWNrKGVsZW0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ldmVudEhvdmVyKClcbiAgICAgICAgdGhpcy5ldmVudEFjdGl2ZSgpXG4gICAgfSBcblxuICAgIGNyZWF0ZVdyYXBwZXIgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMud3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRoaXMud3JhcHBlci5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXInKVxuICAgICAgICB0aGlzLnBhcmVudC5hcHBlbmQodGhpcy53cmFwcGVyKVxuICAgIH1cblxuICAgIHNldElucHV0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmZvcm0uc2V0SW5wdXRWYWx1ZSh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgdGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSwgdGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBwbGFjZURlZmF1bHQ6IG51bWJlciA9IHRoaXMucHJvZ3Jlc3NCYXIuY2FsY1BlcmNlbnQoXG4gICAgICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0LnZhbHVlKSwgXG4gICAgICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0Lm1pbiksIFxuICAgICAgICAgICAgICAgICAgICBOdW1iZXIodGhpcy5mb3JtLmRlZmF1bHRJbnB1dC5tYXgpKVxuICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICBjb25zdCBwbGFjZVJpZ2h0OiBudW1iZXIgPSB0aGlzLmZvcm0ucmlnaHRJbnB1dCA/IFxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5jYWxjUGVyY2VudChcbiAgICAgICAgICAgICAgICBOdW1iZXIodGhpcy5mb3JtLnJpZ2h0SW5wdXQudmFsdWUpLCBcbiAgICAgICAgICAgICAgICBOdW1iZXIodGhpcy5mb3JtLnJpZ2h0SW5wdXQubWluKSwgXG4gICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5yaWdodElucHV0Lm1heCkpIFxuICAgICAgICAgICAgICAgIDogTmFOIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuc2V0RGVmYXVsdCh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGxhY2VEZWZhdWx0LCBwbGFjZVJpZ2h0KVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yaWdodFByb2dyZXNzQmFyKSB7IFxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5zZXRSaWdodCh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGxhY2VEZWZhdWx0KSBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGh1bWIucGxhY2VUaHVtYih0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGxhY2VEZWZhdWx0LCBwbGFjZVJpZ2h0KVxuXG4gICAgICAgIFxuICAgIH1cbiAgICBldmVudElucHV0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmZvcm0uZGVmYXVsdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSA9IE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0LnZhbHVlKVxuICAgICAgICAgICAgdGhpcy5zZXRJbnB1dCgpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLnVwZGF0ZU1vZGVsKCdkZWZhdWx0JywgTnVtYmVyKHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQudmFsdWUpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMudGh1bWIuc2V0VGh1bWJWYWx1ZSh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSwgdGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUpXG4gICAgICAgIH0pXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNSYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtLnJpZ2h0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUgPSBOdW1iZXIodGhpcy5mb3JtLnJpZ2h0SW5wdXQudmFsdWUpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJbnB1dCgpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVwZGF0ZU1vZGVsKCdyaWdodCcsIE51bWJlcih0aGlzLmZvcm0ucmlnaHRJbnB1dC52YWx1ZSkpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aGlzLnRodW1iLnNldFRodW1iVmFsdWUodGhpcy5vcHRpb25zLmlzUmFuZ2UsIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZGVmYXVsdFZhbHVlLCB0aGlzLm9wdGlvbnMucmlnaHRWYWx1ZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgZXZlbnRDbGljayhlbGVtOiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGNvb3JkczogRE9NUmVjdCA9IHRoaXMuc3R5bGVzLnRyYWNrLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIGNvbnN0IGxlbmd0aDogbnVtYmVyID0gY29vcmRzLnJpZ2h0IC0gY29vcmRzLmxlZnRcbiAgICAgICAgY29uc3QgY3VycmVudFBvc2l0aW9uOiBudW1iZXIgPSBlbGVtLnBhZ2VYIC0gY29vcmRzLmxlZnRcbiAgICAgICAgY29uc3QgcGVyY2VudDogbnVtYmVyID0gY3VycmVudFBvc2l0aW9uL2xlbmd0aCAqIDEwMFxuXG4gICAgICAgIGNvbnN0IHBsYWNlRGVmYXVsdDogbnVtYmVyID0gdGhpcy5wcm9ncmVzc0Jhci5jYWxjUGVyY2VudChcbiAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0LnZhbHVlKSwgXG4gICAgICAgICAgICBOdW1iZXIodGhpcy5mb3JtLmRlZmF1bHRJbnB1dC5taW4pLCBcbiAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0Lm1heCkpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBuZXdWYWx1ZTogbnVtYmVyID0gdGhpcy5jYWxjVmFsdWUocGVyY2VudClcbiAgICAgICAgY29uc3QgaGFsZk9mQmFyOiBudW1iZXIgPSAodGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUgKyB0aGlzLm9wdGlvbnMuZGVmYXVsdFZhbHVlKSAvIDJcbiAgICBcbiAgICAgICAgY29uc3QgaXNSaWdodFRyYWNrOiBib29sZWFuID0gdGhpcy5vcHRpb25zLmlzUmFuZ2UgJiYgbmV3VmFsdWUgPiB0aGlzLm9wdGlvbnMucmlnaHRWYWx1ZVxuICAgICAgICBjb25zdCBpc1JpZ2h0QmFyID0gdGhpcy5vcHRpb25zLmlzUmFuZ2UgJiYgbmV3VmFsdWUgPiBoYWxmT2ZCYXJcblxuICAgICAgICBpZihpc1JpZ2h0VHJhY2sgfHwgaXNSaWdodEJhcikge1xuICAgICAgICAgICAgdGhpcy5mb3JtLnJpZ2h0SW5wdXQudmFsdWUgPSBTdHJpbmcobmV3VmFsdWUpXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMucmlnaHRWYWx1ZSA9IG5ld1ZhbHVlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMudGh1bWIucGxhY2VUaHVtYih0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGxhY2VEZWZhdWx0LCBwZXJjZW50KVxuXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnNldERlZmF1bHQodGhpcy5vcHRpb25zLmlzUmFuZ2UsIHBsYWNlRGVmYXVsdCwgcGVyY2VudClcblxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIudXBkYXRlTW9kZWwoJ3JpZ2h0JywgbmV3VmFsdWUpXG4gICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQudmFsdWUgPSBTdHJpbmcobmV3VmFsdWUpXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZGVmYXVsdFZhbHVlID0gbmV3VmFsdWVcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy50aHVtYi5wbGFjZVRodW1iKHRoaXMub3B0aW9ucy5pc1JhbmdlLCBwZXJjZW50KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJpZ2h0UHJvZ3Jlc3NCYXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnNldFJpZ2h0KHRoaXMub3B0aW9ucy5pc1JhbmdlLCBwZXJjZW50KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnNldERlZmF1bHQodGhpcy5vcHRpb25zLmlzUmFuZ2UsIHBlcmNlbnQpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLnVwZGF0ZU1vZGVsKCdkZWZhdWx0JywgbmV3VmFsdWUpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYWxjVmFsdWUocGVyY2VudDogbnVtYmVyLCBcbiAgICAgICAgbWluOiBudW1iZXIgPSB0aGlzLm9wdGlvbnMubWluLCBcbiAgICAgICAgbWF4OiBudW1iZXIgPSB0aGlzLm9wdGlvbnMubWF4KTogbnVtYmVyIHtcbiAgICAgICAgICAgIGxldCBkaWFwYXNvbjogbnVtYmVyID0gbWF4IC0gbWluXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChkaWFwYXNvbiAtIChtYXggLSAoKGRpYXBhc29uKSAqIHBlcmNlbnQpIC8gMTAwKSlcbiAgICB9XG4gICAgXG4gICAgZXZlbnRIb3ZlciA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5mb3JtLmRlZmF1bHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm92ZXJUaHVtYkVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iT3V0cHV0LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktYmxvY2snKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50aHVtYi50aHVtYkRlZmF1bHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYl9ob3ZlcicpXG4gICAgICAgIH0pXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNSYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtLnJpZ2h0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMub3ZlclRodW1iRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iT3V0cHV0UmlnaHQ/LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktYmxvY2snKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iUmlnaHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYl9ob3ZlcicpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mb3JtLmRlZmF1bHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMub3ZlclRodW1iRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGh1bWIudGh1bWJPdXRwdXQuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1ibG9jaycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iRGVmYXVsdC5jbGFzc0xpc3QucmVtb3ZlKCdyYW5nZS1zbGlkZXJfX3RodW1iX2hvdmVyJylcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pc1JhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm0ucmlnaHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm92ZXJUaHVtYkVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHVtYi50aHVtYk91dHB1dFJpZ2h0Py5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LWJsb2NrJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy50aHVtYi50aHVtYlJpZ2h0LmNsYXNzTGlzdC5yZW1vdmUoJ3JhbmdlLXNsaWRlcl9fdGh1bWJfaG92ZXInKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBldmVudEFjdGl2ZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5mb3JtLmRlZmF1bHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iRGVmYXVsdC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3RodW1iX2FjdGl2ZScpXG4gICAgICAgIH0pXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNSYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtLnJpZ2h0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudGh1bWIudGh1bWJSaWdodC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3RodW1iX2FjdGl2ZScpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mb3JtLmRlZmF1bHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50aHVtYi50aHVtYkRlZmF1bHQuY2xhc3NMaXN0LnJlbW92ZSgncmFuZ2Utc2xpZGVyX190aHVtYl9hY3RpdmUnKVxuICAgICAgICB9KVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlzUmFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5yaWdodElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHVtYi50aHVtYlJpZ2h0LmNsYXNzTGlzdC5yZW1vdmUoJ3JhbmdlLXNsaWRlcl9fdGh1bWJfYWN0aXZlJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCB7Vmlld31cbiJdLCJzb3VyY2VSb290IjoiIn0=