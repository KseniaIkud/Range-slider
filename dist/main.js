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

      _this.progressBar.bar.onmousedown = function (elem) {
        _this.eventClick(elem);
      };

      _this.styles.track.onmousedown = function (elem) {
        _this.eventClick(elem);
      };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4gc3luYyBcXC4odHN8c2NzcykkIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2pxdWVyeS5tYWluLmQudHMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5zY3NzIiwid2VicGFjazovLy8uL212Yy9jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL212Yy9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9tdmMvc3ViVmlld3MudHMiLCJ3ZWJwYWNrOi8vLy4vbXZjL3ZpZXcudHMiXSwibmFtZXMiOlsiaW1wb3J0QWxsIiwiciIsImtleXMiLCJmb3JFYWNoIiwicmVxdWlyZSIsIiQiLCJmbiIsInJhbmdlU2xpZGVyIiwic2V0dGluZ3MiLCJwbHVnaW4iLCJDb250cm9sbGVyIiwiTW9kZWwiLCJtaW4iLCJtYXgiLCJkZWZhdWx0VmFsdWUiLCJpbml0aWFsVmFsdWUiLCJsZWZ0VmFsdWUiLCJyaWdodFZhbHVlIiwiaXNSYW5nZSIsInJpZ2h0UHJvZ3Jlc3NCYXIiLCJWaWV3IiwiRm9ybSIsIlN0eWxlcyIsIlByb2dyZXNzQmFyIiwiVGh1bWIiLCJqUXVlcnkiLCJtb2RlbCIsInZpZXciLCJzdWJzY3JpYmUiLCJpbml0Iiwib3B0aW9ucyIsImRhdGFGb3JWaWV3Iiwib3B0aW9uIiwibmV3VmFsdWUiLCJsaW1pdFRvZ2dsZSIsInNldElucHV0Iiwib2JzZXJ2ZXJzIiwib2JzZXJ2ZXIiLCJwdXNoIiwidXBkYXRlVmlldyIsInBhcmVudCIsImlzRG91YmxlIiwiY3JlYXRlRm9ybSIsImNyZWF0ZUlucHV0Iiwic2V0TWluIiwic2V0TWF4IiwiZm9ybSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsImRlZmF1bHRJbnB1dCIsInR5cGUiLCJyaWdodElucHV0IiwidmFsdWUiLCJOYU4iLCJTdHJpbmciLCJjcmVhdGVTdHlsZXMiLCJjcmVhdGVUcmFjayIsInN0eWxlIiwidHJhY2siLCJiYXIiLCJwZXJjZW50IiwicGVyY2VudFJpZ2h0IiwibGVmdCIsInJpZ2h0IiwidGh1bWJEZWZhdWx0IiwidGh1bWJSaWdodCIsImNsYXNzTmFtZSIsInN0eWxlcyIsInByb2dyZXNzQmFyIiwidGh1bWIiLCJjcmVhdGVXcmFwcGVyIiwid3JhcHBlciIsImNyZWF0ZVByb2dyZXNzQmFyIiwiY3JlYXRlVGh1bWIiLCJldmVudElucHV0Iiwib25tb3VzZWRvd24iLCJlbGVtIiwiZXZlbnRDbGljayIsInNldElucHV0VmFsdWUiLCJwbGFjZURlZmF1bHQiLCJjYWxjUGVyY2VudCIsIk51bWJlciIsInBsYWNlUmlnaHQiLCJzZXREZWZhdWx0Iiwic2V0UmlnaHQiLCJwbGFjZVRodW1iIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVwZGF0ZU1vZGVsIiwiY29vcmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGVuZ3RoIiwiY3VycmVudFBvc2l0aW9uIiwicGFnZVgiLCJjYWxjVmFsdWUiLCJoYWxmT2ZCYXIiLCJpc1JpZ2h0VHJhY2siLCJpc1JpZ2h0QmFyIiwiZGlhcGFzb24iLCJNYXRoIiwicm91bmQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQix1QkFBdUI7UUFDdkM7OztRQUdBO1FBQ0E7UUFDQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEOzs7Ozs7Ozs7OztBQzNCQSxTQUFTQSxTQUFULENBQW1CQyxDQUFuQixFQUFzQjtBQUNwQkEsR0FBQyxDQUFDQyxJQUFGLEdBQVNDLE9BQVQsQ0FBaUJGLENBQWpCO0FBQ0Q7O0FBRURELFNBQVMsQ0FBQ0ksc0RBQUQsQ0FBVCxDOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsQ0FBQyxVQUFTQyxDQUFULEVBQTBCO0FBQ3ZCQSxHQUFDLENBQUNDLEVBQUYsQ0FBS0MsV0FBTCxHQUFtQixVQUFTQyxRQUFULEVBU2hCO0FBQ0MsUUFBTUMsTUFBTSxHQUFHLElBQUlDLDBEQUFKLENBQ1gsSUFBSUMsbURBQUosQ0FBVTtBQUNOQyxTQUFHLEVBQUVKLFFBQVEsQ0FBQ0ksR0FEUjtBQUVOQyxTQUFHLEVBQUVMLFFBQVEsQ0FBQ0ssR0FGUjtBQUdOQyxrQkFBWSxFQUFFTixRQUFRLENBQUNPLFlBQVQsSUFBeUJQLFFBQVEsQ0FBQ1EsU0FIMUM7QUFJTkMsZ0JBQVUsRUFBRVQsUUFBUSxDQUFDUyxVQUpmO0FBS05DLGFBQU8sRUFBRVYsUUFBUSxDQUFDVSxPQUxaO0FBTU5DLHNCQUFnQixFQUFFWCxRQUFRLENBQUNXO0FBTnJCLEtBQVYsQ0FEVyxFQVNYLElBQUlDLGlEQUFKLENBQ0ksSUFESixFQUVJLElBQUlDLHFEQUFKLEVBRkosRUFHSSxJQUFJQyx1REFBSixFQUhKLEVBSUksSUFBSUMsNERBQUosRUFKSixFQUtJLElBQUlDLHNEQUFKLEVBTEosQ0FUVyxDQUFmO0FBaUJBLFdBQU9mLE1BQVA7QUFDSCxHQTVCRDtBQTZCSCxDQTlCRCxFQThCR2dCLE1BOUJIOztBQWdDQXBCLENBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCRSxXQUF6QixDQUFxQztBQUNqQ1csU0FBTyxFQUFFLElBRHdCO0FBRWpDRixXQUFTLEVBQUUsRUFGc0I7QUFHakNDLFlBQVUsRUFBRTtBQUhxQixDQUFyQztBQUtBWixDQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQkUsV0FBMUIsQ0FBc0M7QUFDbENXLFNBQU8sRUFBRSxJQUR5QjtBQUVsQ0YsV0FBUyxFQUFFLEVBRnVCO0FBR2xDQyxZQUFVLEVBQUU7QUFIc0IsQ0FBdEM7QUFLQVosQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJFLFdBQXpCLENBQXFDO0FBQ2pDSyxLQUFHLEVBQUUsQ0FENEI7QUFFakNDLEtBQUcsRUFBRSxFQUY0QjtBQUdqQ0UsY0FBWSxFQUFFLEVBSG1CO0FBSWpDSSxrQkFBZ0IsRUFBRTtBQUplLENBQXJDO0FBTUFkLENBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCRSxXQUF6QixDQUFxQztBQUNqQ1EsY0FBWSxFQUFFLEVBRG1CO0FBRWpDSSxrQkFBZ0IsRUFBRTtBQUZlLENBQXJDLEU7Ozs7Ozs7Ozs7O0FDdkRBO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDSENULFU7QUFHRixzQkFBWWdCLEtBQVosRUFBMEJDLElBQTFCLEVBQXNDO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEsa0NBTS9CLFlBQU07QUFDVCxXQUFJLENBQUNBLElBQUwsQ0FBVUMsU0FBVixDQUFvQixLQUFwQjs7QUFDQSxXQUFJLENBQUNGLEtBQUwsQ0FBV0UsU0FBWCxDQUFxQixLQUFyQjs7QUFDQSxXQUFJLENBQUNELElBQUwsQ0FBVUUsSUFBVjtBQUNILEtBVnFDOztBQUNsQyxTQUFLSCxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQSxJQUFMLENBQVVHLE9BQVYsR0FBb0IsS0FBS0osS0FBTCxDQUFXSyxXQUEvQjtBQUNBLFNBQUtGLElBQUw7QUFDSDs7OztnQ0FNV0csTSxFQUFnQkMsUSxFQUFrQjtBQUMxQyxVQUFJLEtBQUtQLEtBQUwsQ0FBV1IsT0FBZixFQUF3QjtBQUNwQixhQUFLUSxLQUFMLENBQVdRLFdBQVgsQ0FBdUJGLE1BQXZCLEVBQStCQyxRQUEvQjtBQUNILE9BRkQsTUFFTztBQUNILGFBQUtQLEtBQUwsQ0FBV1osWUFBWCxHQUEwQm1CLFFBQTFCO0FBQ0g7QUFDSjs7O2lDQUNZO0FBQ1QsV0FBS04sSUFBTCxDQUFVRyxPQUFWLENBQWtCaEIsWUFBbEIsR0FBaUMsS0FBS1ksS0FBTCxDQUFXWixZQUE1QztBQUNBLFdBQUthLElBQUwsQ0FBVUcsT0FBVixDQUFrQmIsVUFBbEIsR0FBK0IsS0FBS1MsS0FBTCxDQUFXVCxVQUExQztBQUNBLFdBQUtVLElBQUwsQ0FBVVEsUUFBVjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDaEJDeEIsSztBQVNGLGlCQUFZbUIsT0FBWixFQUE0QjtBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUN4QixTQUFLbEIsR0FBTCxHQUFXa0IsT0FBTyxDQUFDbEIsR0FBUixHQUFja0IsT0FBTyxDQUFDbEIsR0FBdEIsR0FBNEIsQ0FBdkM7QUFDQSxTQUFLQyxHQUFMLEdBQVdpQixPQUFPLENBQUNqQixHQUFSLEdBQWNpQixPQUFPLENBQUNqQixHQUF0QixHQUE0QixHQUF2QztBQUNBLFNBQUtDLFlBQUwsR0FBb0JnQixPQUFPLENBQUNoQixZQUFSLEdBQXVCZ0IsT0FBTyxDQUFDaEIsWUFBL0IsR0FBOEMsRUFBbEU7QUFDQSxTQUFLRyxVQUFMLEdBQWtCYSxPQUFPLENBQUNiLFVBQVIsR0FBcUJhLE9BQU8sQ0FBQ2IsVUFBN0IsR0FBMEMsRUFBNUQ7QUFDQSxTQUFLQyxPQUFMLEdBQWVZLE9BQU8sQ0FBQ1osT0FBUixHQUFrQlksT0FBTyxDQUFDWixPQUExQixHQUFvQyxLQUFuRDtBQUNBLFNBQUtDLGdCQUFMLEdBQXdCVyxPQUFPLENBQUNYLGdCQUFSLEdBQTJCVyxPQUFPLENBQUNYLGdCQUFuQyxHQUFzRCxLQUE5RTtBQUNBLFNBQUtpQixTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsU0FBS0wsV0FBTCxHQUFtQjtBQUNmbkIsU0FBRyxFQUFFLEtBQUtBLEdBREs7QUFFZkMsU0FBRyxFQUFFLEtBQUtBLEdBRks7QUFHZkMsa0JBQVksRUFBRSxLQUFLQSxZQUhKO0FBSWZHLGdCQUFVLEVBQUUsS0FBS0EsVUFKRjtBQUtmQyxhQUFPLEVBQUUsS0FBS0EsT0FMQztBQU1mQyxzQkFBZ0IsRUFBRSxLQUFLQTtBQU5SLEtBQW5CO0FBUUg7Ozs7OEJBQ1NrQixRLEVBQTBCO0FBQ2hDLFdBQUtELFNBQUwsQ0FBZUUsSUFBZixDQUFvQkQsUUFBcEI7QUFDSDs7O2dDQUNXTCxNLEVBQWdCQyxRLEVBQWtCO0FBQzFDLGNBQVFELE1BQVI7QUFDSSxhQUFLLFNBQUw7QUFFSSxjQUFJQyxRQUFRLEdBQUcsS0FBS2hCLFVBQXBCLEVBQWdDO0FBQzVCLGlCQUFLSCxZQUFMLEdBQW9CbUIsUUFBcEI7QUFDSCxXQUZELE1BRU87QUFDSCxpQkFBS0csU0FBTCxDQUFlakMsT0FBZixDQUF1QixVQUFBa0MsUUFBUSxFQUFJO0FBQy9CQSxzQkFBUSxDQUFDRSxVQUFUO0FBQ0gsYUFGRDtBQUdIOztBQUVEOztBQUVKLGFBQUssT0FBTDtBQUVJLGNBQUlOLFFBQVEsR0FBRyxLQUFLbkIsWUFBcEIsRUFBa0M7QUFDOUIsaUJBQUtHLFVBQUwsR0FBa0JnQixRQUFsQjtBQUNILFdBRkQsTUFFTztBQUNILGlCQUFLRyxTQUFMLENBQWVqQyxPQUFmLENBQXVCLFVBQUFrQyxRQUFRLEVBQUk7QUFDL0JBLHNCQUFRLENBQUNFLFVBQVQ7QUFDSCxhQUZEO0FBR0g7O0FBckJUO0FBeUJIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDbkVDbEIsSTs7Ozs7Ozs7Ozs7Ozt5QkFLR21CLE0sRUFBd0JDLFEsRUFBbUI3QixHLEVBQWFDLEcsRUFBbUI7QUFDNUUsV0FBSzZCLFVBQUwsQ0FBZ0JGLE1BQWhCO0FBQ0EsV0FBS0csV0FBTCxDQUFpQkYsUUFBakI7QUFDQSxXQUFLRyxNQUFMLENBQVlILFFBQVosRUFBc0I3QixHQUF0QjtBQUNBLFdBQUtpQyxNQUFMLENBQVlKLFFBQVosRUFBc0I1QixHQUF0QjtBQUNIOzs7K0JBRVUyQixNLEVBQThCO0FBQ3JDLFdBQUtNLElBQUwsR0FBNkJDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUE3QjtBQUNBLFdBQUtGLElBQUwsQ0FBVUcsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0Isb0JBQXhCO0FBQ0FWLFlBQU0sQ0FBQ1csTUFBUCxDQUFjLEtBQUtMLElBQW5CO0FBQ0g7OztnQ0FFV0wsUSxFQUF5QjtBQUNqQyxVQUFJQSxRQUFKLEVBQWM7QUFDVixhQUFLVyxZQUFMLEdBQW9CTCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBcEI7QUFDQSxhQUFLSSxZQUFMLENBQWtCQyxJQUFsQixHQUF5QixPQUF6QjtBQUNBLGFBQUtELFlBQUwsQ0FBa0JILFNBQWxCLENBQTRCQyxHQUE1QixDQUFnQyxxQkFBaEM7QUFDQSxhQUFLRSxZQUFMLENBQWtCSCxTQUFsQixDQUE0QkMsR0FBNUIsQ0FBZ0MsMEJBQWhDO0FBQ0EsYUFBS0osSUFBTCxDQUFVSyxNQUFWLENBQWlCLEtBQUtDLFlBQXRCO0FBRUEsYUFBS0UsVUFBTCxHQUFrQlAsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWxCO0FBQ0EsYUFBS00sVUFBTCxDQUFnQkQsSUFBaEIsR0FBdUIsT0FBdkI7QUFDQSxhQUFLQyxVQUFMLENBQWdCTCxTQUFoQixDQUEwQkMsR0FBMUIsQ0FBOEIscUJBQTlCO0FBQ0EsYUFBS0ksVUFBTCxDQUFnQkwsU0FBaEIsQ0FBMEJDLEdBQTFCLENBQThCLDJCQUE5QjtBQUNBLGFBQUtKLElBQUwsQ0FBVUssTUFBVixDQUFpQixLQUFLRyxVQUF0QjtBQUVILE9BYkQsTUFhTztBQUNILGFBQUtGLFlBQUwsR0FBb0JMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFwQjtBQUNBLGFBQUtJLFlBQUwsQ0FBa0JDLElBQWxCLEdBQXlCLE9BQXpCO0FBQ0EsYUFBS0QsWUFBTCxDQUFrQkgsU0FBbEIsQ0FBNEJDLEdBQTVCLENBQWdDLHFCQUFoQztBQUNBLGFBQUtKLElBQUwsQ0FBVUssTUFBVixDQUFpQixLQUFLQyxZQUF0QjtBQUNIO0FBQ0o7OztrQ0FDYVgsUSxFQUFtQmMsSyxFQUErQztBQUFBLFVBQWhDdEMsVUFBZ0MsdUVBQVh1QyxHQUFXO0FBQzVFLFdBQUtKLFlBQUwsQ0FBa0JHLEtBQWxCLEdBQTBCRSxNQUFNLENBQUNGLEtBQUQsQ0FBaEM7O0FBQ0EsVUFBSWQsUUFBSixFQUFjO0FBQ1YsYUFBS2EsVUFBTCxDQUFnQkMsS0FBaEIsR0FBd0JFLE1BQU0sQ0FBQ3hDLFVBQUQsQ0FBOUI7QUFDSDtBQUNKOzs7MkJBQ013QixRLEVBQW1CN0IsRyxFQUFtQjtBQUN6QyxXQUFLd0MsWUFBTCxDQUFrQnhDLEdBQWxCLEdBQXdCNkMsTUFBTSxDQUFDN0MsR0FBRCxDQUE5Qjs7QUFDQSxVQUFJNkIsUUFBSixFQUFjO0FBQ1YsYUFBS2EsVUFBTCxDQUFnQjFDLEdBQWhCLEdBQXNCNkMsTUFBTSxDQUFDN0MsR0FBRCxDQUE1QjtBQUNIO0FBQ0o7OzsyQkFDTTZCLFEsRUFBNEM7QUFBQSxVQUF6QjVCLEdBQXlCLHVFQUFYLEdBQVc7QUFDL0MsV0FBS3VDLFlBQUwsQ0FBa0J2QyxHQUFsQixHQUF3QjRDLE1BQU0sQ0FBQzVDLEdBQUQsQ0FBOUI7O0FBQ0EsVUFBSTRCLFFBQUosRUFBYztBQUNWLGFBQUthLFVBQUwsQ0FBZ0J6QyxHQUFoQixHQUFzQjRDLE1BQU0sQ0FBQzVDLEdBQUQsQ0FBNUI7QUFDSDtBQUNKOzs7Ozs7SUFHQ1MsTTs7Ozs7Ozs7Ozs7eUJBSUdrQixNLEVBQXdCO0FBQ3pCLFdBQUtrQixZQUFMLENBQWtCbEIsTUFBbEI7QUFDQSxXQUFLbUIsV0FBTDtBQUNIOzs7aUNBRVluQixNLEVBQThCO0FBQ3ZDLFdBQUtvQixLQUFMLEdBQWFiLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFiO0FBQ0EsV0FBS1ksS0FBTCxDQUFXWCxTQUFYLENBQXFCQyxHQUFyQixDQUF5QixxQkFBekI7QUFDQVYsWUFBTSxDQUFDVyxNQUFQLENBQWMsS0FBS1MsS0FBbkI7QUFDSDs7O2tDQUVtQjtBQUNoQixXQUFLQyxLQUFMLEdBQWFkLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFiO0FBQ0EsV0FBS2EsS0FBTCxDQUFXWixTQUFYLENBQXFCQyxHQUFyQixDQUF5QixxQkFBekI7QUFDQSxXQUFLVSxLQUFMLENBQVdULE1BQVgsQ0FBa0IsS0FBS1UsS0FBdkI7QUFDSDs7Ozs7O0lBR0N0QyxXOzs7Ozs7Ozs7c0NBRWdCaUIsTSxFQUE4QjtBQUM1QyxXQUFLc0IsR0FBTCxHQUFXZixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWDtBQUNBLFdBQUtjLEdBQUwsQ0FBU2IsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsNEJBQXZCO0FBQ0FWLFlBQU0sQ0FBQ1csTUFBUCxDQUFjLEtBQUtXLEdBQW5CO0FBQ0g7OztnQ0FDV1AsSyxFQUFlM0MsRyxFQUFhQyxHLEVBQXFCO0FBQ3pELGFBQVEsQ0FBQzBDLEtBQUssR0FBRzNDLEdBQVQsS0FBaUJDLEdBQUcsR0FBR0QsR0FBdkIsQ0FBRCxHQUFnQyxHQUF2QztBQUNIOzs7K0JBQ1U2QixRLEVBQW1Cc0IsTyxFQUFtRDtBQUFBLFVBQWxDQyxZQUFrQyx1RUFBWFIsR0FBVzs7QUFDN0UsVUFBSWYsUUFBSixFQUFjO0FBQ1YsYUFBS3FCLEdBQUwsQ0FBU0YsS0FBVCxDQUFlSyxJQUFmLEdBQXNCRixPQUFPLEdBQUcsR0FBaEM7QUFDQSxhQUFLRCxHQUFMLENBQVNGLEtBQVQsQ0FBZU0sS0FBZixHQUF3QixNQUFNRixZQUFQLEdBQXVCLEdBQTlDO0FBQ0gsT0FIRCxNQUdPO0FBQ0gsYUFBS0YsR0FBTCxDQUFTRixLQUFULENBQWVNLEtBQWYsR0FBd0IsTUFBTUgsT0FBUCxHQUFrQixHQUF6QztBQUNBLGFBQUtELEdBQUwsQ0FBU0YsS0FBVCxDQUFlSyxJQUFmLEdBQXNCUixNQUFNLENBQUMsQ0FBRCxDQUE1QjtBQUNIO0FBQ0o7Ozs2QkFDUWhCLFEsRUFBbUJzQixPLEVBQXVCO0FBQy9DLFVBQUksQ0FBQ3RCLFFBQUwsRUFBZTtBQUNYLGFBQUtxQixHQUFMLENBQVNGLEtBQVQsQ0FBZUssSUFBZixHQUFzQkYsT0FBTyxHQUFHLEdBQWhDO0FBQ0EsYUFBS0QsR0FBTCxDQUFTRixLQUFULENBQWVNLEtBQWYsR0FBdUJULE1BQU0sQ0FBQyxDQUFELENBQTdCO0FBQ0g7QUFDSjs7Ozs7O0lBR0NqQyxLOzs7Ozs7Ozs7OztnQ0FLVWdCLE0sRUFBd0JDLFEsRUFBbUI7QUFDbkQsVUFBR0EsUUFBSCxFQUFhO0FBQ1QsYUFBSzBCLFlBQUwsR0FBb0JwQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBcEI7QUFDQSxhQUFLbUIsWUFBTCxDQUFrQmxCLFNBQWxCLENBQTRCQyxHQUE1QixDQUFnQyxxQkFBaEM7QUFDQSxhQUFLaUIsWUFBTCxDQUFrQmxCLFNBQWxCLENBQTRCQyxHQUE1QixDQUFnQywwQkFBaEM7QUFDQVYsY0FBTSxDQUFDVyxNQUFQLENBQWMsS0FBS2dCLFlBQW5CO0FBRUEsYUFBS0MsVUFBTCxHQUFrQnJCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFsQjtBQUNBLGFBQUtvQixVQUFMLENBQWdCbkIsU0FBaEIsQ0FBMEJDLEdBQTFCLENBQThCLHFCQUE5QjtBQUNBLGFBQUtrQixVQUFMLENBQWdCbkIsU0FBaEIsQ0FBMEJDLEdBQTFCLENBQThCLDJCQUE5QjtBQUNBVixjQUFNLENBQUNXLE1BQVAsQ0FBYyxLQUFLaUIsVUFBbkI7QUFDSCxPQVZELE1BVU87QUFDSCxhQUFLRCxZQUFMLEdBQW9CcEIsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQXBCO0FBQ0EsYUFBS21CLFlBQUwsQ0FBa0JFLFNBQWxCLEdBQThCLHFCQUE5QjtBQUNBN0IsY0FBTSxDQUFDVyxNQUFQLENBQWMsS0FBS2dCLFlBQW5CO0FBQ0g7QUFDSjs7OytCQUNVMUIsUSxFQUFtQnNCLE8sRUFBbUQ7QUFBQSxVQUFsQ0MsWUFBa0MsdUVBQVhSLEdBQVc7QUFDN0UsV0FBS1csWUFBTCxDQUFrQlAsS0FBbEIsQ0FBd0JLLElBQXhCLEdBQStCRixPQUFPLEdBQUcsR0FBekM7O0FBQ0EsVUFBSXRCLFFBQUosRUFBYztBQUNWLGFBQUsyQixVQUFMLENBQWdCUixLQUFoQixDQUFzQk0sS0FBdEIsR0FBK0IsTUFBTUYsWUFBUCxHQUF1QixHQUFyRDtBQUNIO0FBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUN4SEM1QyxJO0FBVUYsZ0JBQVlvQixNQUFaLEVBQWlDTSxJQUFqQyxFQUE2Q3dCLE1BQTdDLEVBQTZEQyxXQUE3RCxFQUF1RkMsS0FBdkYsRUFBcUc7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSxrQ0FzQjlGLFlBQU07QUFDVCxXQUFJLENBQUNDLGFBQUw7O0FBRUEsV0FBSSxDQUFDM0IsSUFBTCxDQUFVakIsSUFBVixDQUNJLEtBQUksQ0FBQzZDLE9BRFQsRUFFSSxLQUFJLENBQUM1QyxPQUFMLENBQWFaLE9BRmpCLEVBR0ksS0FBSSxDQUFDWSxPQUFMLENBQWFsQixHQUhqQixFQUlJLEtBQUksQ0FBQ2tCLE9BQUwsQ0FBYWpCLEdBSmpCOztBQU1BLFdBQUksQ0FBQ3lELE1BQUwsQ0FBWXpDLElBQVosQ0FBaUIsS0FBSSxDQUFDNkMsT0FBdEI7O0FBQ0EsV0FBSSxDQUFDSCxXQUFMLENBQWlCSSxpQkFBakIsQ0FBbUMsS0FBSSxDQUFDTCxNQUFMLENBQVlWLEtBQS9DOztBQUNBLFdBQUksQ0FBQ1ksS0FBTCxDQUFXSSxXQUFYLENBQXVCLEtBQUksQ0FBQ04sTUFBTCxDQUFZVixLQUFuQyxFQUEwQyxLQUFJLENBQUM5QixPQUFMLENBQWFaLE9BQXZEOztBQUlBLFdBQUksQ0FBQ2lCLFFBQUw7O0FBQ0EsV0FBSSxDQUFDMEMsVUFBTDs7QUFDQSxXQUFJLENBQUNOLFdBQUwsQ0FBaUJULEdBQWpCLENBQXFCZ0IsV0FBckIsR0FBbUMsVUFBQUMsSUFBSSxFQUFJO0FBQ3ZDLGFBQUksQ0FBQ0MsVUFBTCxDQUFnQkQsSUFBaEI7QUFDSCxPQUZEOztBQUdBLFdBQUksQ0FBQ1QsTUFBTCxDQUFZVCxLQUFaLENBQWtCaUIsV0FBbEIsR0FBZ0MsVUFBQUMsSUFBSSxFQUFJO0FBQ3BDLGFBQUksQ0FBQ0MsVUFBTCxDQUFnQkQsSUFBaEI7QUFDSCxPQUZEO0FBSUgsS0E5Q29HOztBQUFBLDJDQWdEckYsWUFBTTtBQUNsQixXQUFJLENBQUNMLE9BQUwsR0FBZTNCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFmOztBQUNBLFdBQUksQ0FBQzBCLE9BQUwsQ0FBYXpCLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLGNBQTNCOztBQUNBLFdBQUksQ0FBQ1YsTUFBTCxDQUFZVyxNQUFaLENBQW1CLEtBQUksQ0FBQ3VCLE9BQXhCO0FBQ0gsS0FwRG9HOztBQUFBLHNDQXNEMUYsWUFBTTtBQUNiLFdBQUksQ0FBQzVCLElBQUwsQ0FBVW1DLGFBQVYsQ0FBd0IsS0FBSSxDQUFDbkQsT0FBTCxDQUFhWixPQUFyQyxFQUE4QyxLQUFJLENBQUNZLE9BQUwsQ0FBYWhCLFlBQTNELEVBQXlFLEtBQUksQ0FBQ2dCLE9BQUwsQ0FBYWIsVUFBdEY7O0FBRUEsVUFBTWlFLFlBQW9CLEdBQUcsS0FBSSxDQUFDWCxXQUFMLENBQWlCWSxXQUFqQixDQUNqQkMsTUFBTSxDQUFDLEtBQUksQ0FBQ3RDLElBQUwsQ0FBVU0sWUFBVixDQUF1QkcsS0FBeEIsQ0FEVyxFQUVqQjZCLE1BQU0sQ0FBQyxLQUFJLENBQUN0QyxJQUFMLENBQVVNLFlBQVYsQ0FBdUJ4QyxHQUF4QixDQUZXLEVBR2pCd0UsTUFBTSxDQUFDLEtBQUksQ0FBQ3RDLElBQUwsQ0FBVU0sWUFBVixDQUF1QnZDLEdBQXhCLENBSFcsQ0FBN0I7O0FBTUEsVUFBTXdFLFVBQWtCLEdBQUcsS0FBSSxDQUFDdkMsSUFBTCxDQUFVUSxVQUFWLEdBQ3ZCLEtBQUksQ0FBQ2lCLFdBQUwsQ0FBaUJZLFdBQWpCLENBQ0lDLE1BQU0sQ0FBQyxLQUFJLENBQUN0QyxJQUFMLENBQVVRLFVBQVYsQ0FBcUJDLEtBQXRCLENBRFYsRUFFSTZCLE1BQU0sQ0FBQyxLQUFJLENBQUN0QyxJQUFMLENBQVVRLFVBQVYsQ0FBcUIxQyxHQUF0QixDQUZWLEVBR0l3RSxNQUFNLENBQUMsS0FBSSxDQUFDdEMsSUFBTCxDQUFVUSxVQUFWLENBQXFCekMsR0FBdEIsQ0FIVixDQUR1QixHQUtqQjJDLEdBTFY7O0FBUUEsV0FBSSxDQUFDZSxXQUFMLENBQWlCZSxVQUFqQixDQUE0QixLQUFJLENBQUN4RCxPQUFMLENBQWFaLE9BQXpDLEVBQWtEZ0UsWUFBbEQsRUFBZ0VHLFVBQWhFOztBQUVBLFVBQUksS0FBSSxDQUFDdkQsT0FBTCxDQUFhWCxnQkFBakIsRUFBbUM7QUFDL0IsYUFBSSxDQUFDb0QsV0FBTCxDQUFpQmdCLFFBQWpCLENBQTBCLEtBQUksQ0FBQ3pELE9BQUwsQ0FBYVosT0FBdkMsRUFBZ0RnRSxZQUFoRDtBQUNIOztBQUVELFdBQUksQ0FBQ1YsS0FBTCxDQUFXZ0IsVUFBWCxDQUFzQixLQUFJLENBQUMxRCxPQUFMLENBQWFaLE9BQW5DLEVBQTRDZ0UsWUFBNUMsRUFBMERHLFVBQTFEO0FBR0gsS0FoRm9HOztBQUFBLHdDQWlGeEYsWUFBTTtBQUNmLFdBQUksQ0FBQ3ZDLElBQUwsQ0FBVU0sWUFBVixDQUF1QnFDLGdCQUF2QixDQUF3QyxPQUF4QyxFQUFpRCxZQUFNO0FBQ25ELGFBQUksQ0FBQzNELE9BQUwsQ0FBYWhCLFlBQWIsR0FBNEJzRSxNQUFNLENBQUMsS0FBSSxDQUFDdEMsSUFBTCxDQUFVTSxZQUFWLENBQXVCRyxLQUF4QixDQUFsQzs7QUFDQSxhQUFJLENBQUNwQixRQUFMOztBQUNBLGFBQUksQ0FBQ0MsU0FBTCxDQUFlakMsT0FBZixDQUF1QixVQUFBa0MsUUFBUSxFQUFJO0FBQy9CQSxrQkFBUSxDQUFDcUQsV0FBVCxDQUFxQixTQUFyQixFQUFnQ04sTUFBTSxDQUFDLEtBQUksQ0FBQ3RDLElBQUwsQ0FBVU0sWUFBVixDQUF1QkcsS0FBeEIsQ0FBdEM7QUFDSCxTQUZEO0FBR0gsT0FORDs7QUFPQSxVQUFJLEtBQUksQ0FBQ3pCLE9BQUwsQ0FBYVosT0FBakIsRUFBMEI7QUFDdEIsYUFBSSxDQUFDNEIsSUFBTCxDQUFVUSxVQUFWLENBQXFCbUMsZ0JBQXJCLENBQXNDLE9BQXRDLEVBQStDLFlBQU07QUFDakQsZUFBSSxDQUFDM0QsT0FBTCxDQUFhYixVQUFiLEdBQTBCbUUsTUFBTSxDQUFDLEtBQUksQ0FBQ3RDLElBQUwsQ0FBVVEsVUFBVixDQUFxQkMsS0FBdEIsQ0FBaEM7O0FBQ0EsZUFBSSxDQUFDcEIsUUFBTDs7QUFDQSxlQUFJLENBQUNDLFNBQUwsQ0FBZWpDLE9BQWYsQ0FBdUIsVUFBQWtDLFFBQVEsRUFBSTtBQUMvQkEsb0JBQVEsQ0FBQ3FELFdBQVQsQ0FBcUIsT0FBckIsRUFBOEJOLE1BQU0sQ0FBQyxLQUFJLENBQUN0QyxJQUFMLENBQVVRLFVBQVYsQ0FBcUJDLEtBQXRCLENBQXBDO0FBQ0gsV0FGRDtBQUdILFNBTkQ7QUFPSDtBQUNKLEtBbEdvRzs7QUFDakcsU0FBS2YsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS00sSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS3dCLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiLENBTGlHLENBT3JHOztBQUNJLFNBQUsxQyxPQUFMLEdBQWU7QUFDWGxCLFNBQUcsRUFBRSxDQURNO0FBRVhDLFNBQUcsRUFBRSxHQUZNO0FBR1hDLGtCQUFZLEVBQUUsRUFISDtBQUlYRyxnQkFBVSxFQUFFLEVBSkQ7QUFLWEMsYUFBTyxFQUFFLElBTEU7QUFNWEMsc0JBQWdCLEVBQUU7QUFOUCxLQUFmO0FBU0EsU0FBS2lCLFNBQUwsR0FBaUIsRUFBakI7QUFDSDs7Ozs4QkFDU0MsUSxFQUF5QjtBQUMvQixXQUFLRCxTQUFMLENBQWVFLElBQWYsQ0FBb0JELFFBQXBCO0FBQ0g7OzsrQkE4RVUwQyxJLEVBQWtCO0FBQ3pCLFVBQU1ZLE1BQWUsR0FBRyxLQUFLckIsTUFBTCxDQUFZVCxLQUFaLENBQWtCK0IscUJBQWxCLEVBQXhCO0FBQ0EsVUFBTUMsTUFBYyxHQUFHRixNQUFNLENBQUN6QixLQUFQLEdBQWV5QixNQUFNLENBQUMxQixJQUE3QztBQUNBLFVBQU02QixlQUF1QixHQUFHZixJQUFJLENBQUNnQixLQUFMLEdBQWFKLE1BQU0sQ0FBQzFCLElBQXBEO0FBQ0EsVUFBTUYsT0FBZSxHQUFHK0IsZUFBZSxHQUFDRCxNQUFoQixHQUF5QixHQUFqRDtBQUVBLFVBQU1YLFlBQW9CLEdBQUcsS0FBS1gsV0FBTCxDQUFpQlksV0FBakIsQ0FDekJDLE1BQU0sQ0FBQyxLQUFLdEMsSUFBTCxDQUFVTSxZQUFWLENBQXVCRyxLQUF4QixDQURtQixFQUV6QjZCLE1BQU0sQ0FBQyxLQUFLdEMsSUFBTCxDQUFVTSxZQUFWLENBQXVCeEMsR0FBeEIsQ0FGbUIsRUFHekJ3RSxNQUFNLENBQUMsS0FBS3RDLElBQUwsQ0FBVU0sWUFBVixDQUF1QnZDLEdBQXhCLENBSG1CLENBQTdCO0FBS0EsVUFBTW9CLFFBQWdCLEdBQUcsS0FBSytELFNBQUwsQ0FBZWpDLE9BQWYsQ0FBekI7QUFDQSxVQUFNa0MsU0FBaUIsR0FBRyxDQUFDLEtBQUtuRSxPQUFMLENBQWFiLFVBQWIsR0FBMEIsS0FBS2EsT0FBTCxDQUFhaEIsWUFBeEMsSUFBd0QsQ0FBbEY7QUFFQSxVQUFNb0YsWUFBcUIsR0FBRyxLQUFLcEUsT0FBTCxDQUFhWixPQUFiLElBQXdCZSxRQUFRLEdBQUcsS0FBS0gsT0FBTCxDQUFhYixVQUE5RTtBQUNBLFVBQU1rRixVQUFVLEdBQUcsS0FBS3JFLE9BQUwsQ0FBYVosT0FBYixJQUF3QmUsUUFBUSxHQUFHZ0UsU0FBdEQ7O0FBRUEsVUFBR0MsWUFBWSxJQUFJQyxVQUFuQixFQUErQjtBQUMzQixhQUFLckQsSUFBTCxDQUFVUSxVQUFWLENBQXFCQyxLQUFyQixHQUE2QkUsTUFBTSxDQUFDeEIsUUFBRCxDQUFuQztBQUNBLGFBQUtILE9BQUwsQ0FBYWIsVUFBYixHQUEwQmdCLFFBQTFCO0FBRUEsYUFBS3VDLEtBQUwsQ0FBV2dCLFVBQVgsQ0FBc0IsS0FBSzFELE9BQUwsQ0FBYVosT0FBbkMsRUFBNENnRSxZQUE1QyxFQUEwRG5CLE9BQTFEO0FBRUEsYUFBS1EsV0FBTCxDQUFpQmUsVUFBakIsQ0FBNEIsS0FBS3hELE9BQUwsQ0FBYVosT0FBekMsRUFBa0RnRSxZQUFsRCxFQUFnRW5CLE9BQWhFO0FBRUEsYUFBSzNCLFNBQUwsQ0FBZWpDLE9BQWYsQ0FBdUIsVUFBQWtDLFFBQVEsRUFBSTtBQUMvQkEsa0JBQVEsQ0FBQ3FELFdBQVQsQ0FBcUIsT0FBckIsRUFBOEJ6RCxRQUE5QjtBQUNILFNBRkQ7QUFJSCxPQVpELE1BWU87QUFDSCxhQUFLYSxJQUFMLENBQVVNLFlBQVYsQ0FBdUJHLEtBQXZCLEdBQStCRSxNQUFNLENBQUN4QixRQUFELENBQXJDO0FBQ0EsYUFBS0gsT0FBTCxDQUFhaEIsWUFBYixHQUE0Qm1CLFFBQTVCO0FBRUEsYUFBS3VDLEtBQUwsQ0FBV2dCLFVBQVgsQ0FBc0IsS0FBSzFELE9BQUwsQ0FBYVosT0FBbkMsRUFBNEM2QyxPQUE1Qzs7QUFFQSxZQUFJLEtBQUtqQyxPQUFMLENBQWFYLGdCQUFqQixFQUFtQztBQUMvQixlQUFLb0QsV0FBTCxDQUFpQmdCLFFBQWpCLENBQTBCLEtBQUt6RCxPQUFMLENBQWFaLE9BQXZDLEVBQWdENkMsT0FBaEQ7QUFDSCxTQUZELE1BRU87QUFDSCxlQUFLUSxXQUFMLENBQWlCZSxVQUFqQixDQUE0QixLQUFLeEQsT0FBTCxDQUFhWixPQUF6QyxFQUFrRDZDLE9BQWxEO0FBQ0g7O0FBRUQsYUFBSzNCLFNBQUwsQ0FBZWpDLE9BQWYsQ0FBdUIsVUFBQWtDLFFBQVEsRUFBSTtBQUMvQkEsa0JBQVEsQ0FBQ3FELFdBQVQsQ0FBcUIsU0FBckIsRUFBZ0N6RCxRQUFoQztBQUNILFNBRkQ7QUFHSDtBQUNKOzs7OEJBQ1M4QixPLEVBRWtDO0FBQUEsVUFEeENuRCxHQUN3Qyx1RUFEMUIsS0FBS2tCLE9BQUwsQ0FBYWxCLEdBQ2E7QUFBQSxVQUF4Q0MsR0FBd0MsdUVBQTFCLEtBQUtpQixPQUFMLENBQWFqQixHQUFhO0FBQ3BDLFVBQUl1RixRQUFnQixHQUFHdkYsR0FBRyxHQUFHRCxHQUE3QjtBQUNBLGFBQU95RixJQUFJLENBQUNDLEtBQUwsQ0FBV0YsUUFBUSxJQUFJdkYsR0FBRyxHQUFLdUYsUUFBRCxHQUFhckMsT0FBZCxHQUF5QixHQUFuQyxDQUFuQixDQUFQO0FBQ1AiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vanF1ZXJ5Lm1haW4uZC50c1wiOiBcIi4vanF1ZXJ5Lm1haW4uZC50c1wiLFxuXHRcIi4vbWFpbi5zY3NzXCI6IFwiLi9tYWluLnNjc3NcIixcblx0XCIuL212Yy9jb250cm9sbGVyLnRzXCI6IFwiLi9tdmMvY29udHJvbGxlci50c1wiLFxuXHRcIi4vbXZjL21vZGVsLnRzXCI6IFwiLi9tdmMvbW9kZWwudHNcIixcblx0XCIuL212Yy9zdWJWaWV3cy50c1wiOiBcIi4vbXZjL3N1YlZpZXdzLnRzXCIsXG5cdFwiLi9tdmMvdmlldy50c1wiOiBcIi4vbXZjL3ZpZXcudHNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgXFxcXC4odHN8c2NzcykkXCI7IiwiZnVuY3Rpb24gaW1wb3J0QWxsKHIpIHtcbiAgci5rZXlzKCkuZm9yRWFjaChyKVxufVxuXG5pbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuLycsIHRydWUsIC9cXC4odHN8c2NzcykkLykpIiwiXG5pbXBvcnQge0Zvcm0sIFN0eWxlcywgUHJvZ3Jlc3NCYXIsIFRodW1ifSBmcm9tICcuL212Yy9zdWJWaWV3cy50cydcbmltcG9ydCB7Vmlld30gZnJvbSAnLi9tdmMvdmlldy50cydcbmltcG9ydCB7TW9kZWx9IGZyb20gJy4vbXZjL21vZGVsLnRzJ1xuaW1wb3J0IHtDb250cm9sbGVyfSBmcm9tICcuL212Yy9jb250cm9sbGVyJ1xuXG5cbihmdW5jdGlvbigkOiBKUXVlcnlTdGF0aWMpIHtcbiAgICAkLmZuLnJhbmdlU2xpZGVyID0gZnVuY3Rpb24oc2V0dGluZ3M6IHtcbiAgICAgICAgbWluPzogbnVtYmVyXG4gICAgICAgIG1heD86IG51bWJlclxuICAgICAgICBpbml0aWFsVmFsdWU/OiBudW1iZXJcbiAgICAgICAgbGVmdFZhbHVlPzogbnVtYmVyXG4gICAgICAgIGRlZmF1bHRWYWx1ZT86IG51bWJlclxuICAgICAgICByaWdodFZhbHVlPzogbnVtYmVyXG4gICAgICAgIGlzUmFuZ2U/OiBib29sZWFuXG4gICAgICAgIHJpZ2h0UHJvZ3Jlc3NCYXI/OiBib29sZWFuXG4gICAgfSkge1xuICAgICAgICBjb25zdCBwbHVnaW4gPSBuZXcgQ29udHJvbGxlcihcbiAgICAgICAgICAgIG5ldyBNb2RlbCh7XG4gICAgICAgICAgICAgICAgbWluOiBzZXR0aW5ncy5taW4sXG4gICAgICAgICAgICAgICAgbWF4OiBzZXR0aW5ncy5tYXgsXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBzZXR0aW5ncy5pbml0aWFsVmFsdWUgfHwgc2V0dGluZ3MubGVmdFZhbHVlLFxuICAgICAgICAgICAgICAgIHJpZ2h0VmFsdWU6IHNldHRpbmdzLnJpZ2h0VmFsdWUsXG4gICAgICAgICAgICAgICAgaXNSYW5nZTogc2V0dGluZ3MuaXNSYW5nZSxcbiAgICAgICAgICAgICAgICByaWdodFByb2dyZXNzQmFyOiBzZXR0aW5ncy5yaWdodFByb2dyZXNzQmFyXG4gICAgICAgICAgICB9KSwgXG4gICAgICAgICAgICBuZXcgVmlldyggXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBuZXcgRm9ybSgpLFxuICAgICAgICAgICAgICAgIG5ldyBTdHlsZXMoKSxcbiAgICAgICAgICAgICAgICBuZXcgUHJvZ3Jlc3NCYXIoKSxcbiAgICAgICAgICAgICAgICBuZXcgVGh1bWIoKSBcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICByZXR1cm4gcGx1Z2luXG4gICAgfVxufSkoalF1ZXJ5KVxuXG4kKCcjZmlyc3QtcmFuZ2Utc2xpZGVyJykucmFuZ2VTbGlkZXIoe1xuICAgIGlzUmFuZ2U6IHRydWUsXG4gICAgbGVmdFZhbHVlOiAxMCxcbiAgICByaWdodFZhbHVlOiA2MFxufSlcbiQoJyNzZWNvbmQtcmFuZ2Utc2xpZGVyJykucmFuZ2VTbGlkZXIoe1xuICAgIGlzUmFuZ2U6IHRydWUsXG4gICAgbGVmdFZhbHVlOiA0MCxcbiAgICByaWdodFZhbHVlOiA3MFxufSlcbiQoJyN0aGlyZC1yYW5nZS1zbGlkZXInKS5yYW5nZVNsaWRlcih7XG4gICAgbWluOiAwLFxuICAgIG1heDogMzAsXG4gICAgaW5pdGlhbFZhbHVlOiAyMCxcbiAgICByaWdodFByb2dyZXNzQmFyOiB0cnVlXG59KVxuJCgnI2ZvcnRoLXJhbmdlLXNsaWRlcicpLnJhbmdlU2xpZGVyKHtcbiAgICBpbml0aWFsVmFsdWU6IDIwLFxuICAgIHJpZ2h0UHJvZ3Jlc3NCYXI6IGZhbHNlXG59KVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYwMTA1MzA0NTc4MVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvaG9tZS94ZW5hL1JhbmdlLXNsaWRlci9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicmVsb2FkQWxsXCI6dHJ1ZSxcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsImltcG9ydCB7TW9kZWx9IGZyb20gJy4vbW9kZWwnXG5pbXBvcnQge1ZpZXd9IGZyb20gJy4vdmlldydcblxuY2xhc3MgQ29udHJvbGxlciB7XG4gICAgbW9kZWw6IE1vZGVsXG4gICAgdmlldzogVmlld1xuICAgIGNvbnN0cnVjdG9yKG1vZGVsOiBNb2RlbCwgdmlldzogVmlldykge1xuICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWxcbiAgICAgICAgdGhpcy52aWV3ID0gdmlld1xuICAgICAgICB0aGlzLnZpZXcub3B0aW9ucyA9IHRoaXMubW9kZWwuZGF0YUZvclZpZXdcbiAgICAgICAgdGhpcy5pbml0KCkgXG4gICAgfVxuICAgIGluaXQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMudmlldy5zdWJzY3JpYmUodGhpcylcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJzY3JpYmUodGhpcylcbiAgICAgICAgdGhpcy52aWV3LmluaXQoKVxuICAgIH1cbiAgICB1cGRhdGVNb2RlbChvcHRpb246IHN0cmluZywgbmV3VmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5tb2RlbC5pc1JhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmxpbWl0VG9nZ2xlKG9wdGlvbiwgbmV3VmFsdWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmRlZmF1bHRWYWx1ZSA9IG5ld1ZhbHVlXG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlVmlldygpIHtcbiAgICAgICAgdGhpcy52aWV3Lm9wdGlvbnMuZGVmYXVsdFZhbHVlID0gdGhpcy5tb2RlbC5kZWZhdWx0VmFsdWVcbiAgICAgICAgdGhpcy52aWV3Lm9wdGlvbnMucmlnaHRWYWx1ZSA9IHRoaXMubW9kZWwucmlnaHRWYWx1ZVxuICAgICAgICB0aGlzLnZpZXcuc2V0SW5wdXQoKVxuICAgIH1cbn1cblxuZXhwb3J0IHtDb250cm9sbGVyfSIsImludGVyZmFjZSBJRGF0YSB7XG4gICAgbWluOiBudW1iZXJcbiAgICBtYXg6IG51bWJlclxuICAgIGRlZmF1bHRWYWx1ZTogbnVtYmVyXG4gICAgcmlnaHRWYWx1ZTogbnVtYmVyXG4gICAgaXNSYW5nZTogYm9vbGVhblxuICAgIHJpZ2h0UHJvZ3Jlc3NCYXI6IGJvb2xlYW5cbn1cbmludGVyZmFjZSBJT2JzZXJ2ZXJNb2RlbCB7XG4gICAgdXBkYXRlVmlldygpOiB2b2lkXG59XG5cbmNsYXNzIE1vZGVsIHtcbiAgICBtaW46IG51bWJlclxuICAgIG1heDogbnVtYmVyXG4gICAgZGVmYXVsdFZhbHVlOiBudW1iZXJcbiAgICByaWdodFZhbHVlOiBudW1iZXJcbiAgICBpc1JhbmdlOiBib29sZWFuXG4gICAgcmlnaHRQcm9ncmVzc0JhcjogYm9vbGVhblxuICAgIGRhdGFGb3JWaWV3OiBJRGF0YVxuICAgIG9ic2VydmVyczogSU9ic2VydmVyTW9kZWxbXVxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElEYXRhKSB7XG4gICAgICAgIHRoaXMubWluID0gb3B0aW9ucy5taW4gPyBvcHRpb25zLm1pbiA6IDBcbiAgICAgICAgdGhpcy5tYXggPSBvcHRpb25zLm1heCA/IG9wdGlvbnMubWF4IDogMTAwXG4gICAgICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gb3B0aW9ucy5kZWZhdWx0VmFsdWUgPyBvcHRpb25zLmRlZmF1bHRWYWx1ZSA6IDUwXG4gICAgICAgIHRoaXMucmlnaHRWYWx1ZSA9IG9wdGlvbnMucmlnaHRWYWx1ZSA/IG9wdGlvbnMucmlnaHRWYWx1ZSA6IDYwXG4gICAgICAgIHRoaXMuaXNSYW5nZSA9IG9wdGlvbnMuaXNSYW5nZSA/IG9wdGlvbnMuaXNSYW5nZSA6IGZhbHNlXG4gICAgICAgIHRoaXMucmlnaHRQcm9ncmVzc0JhciA9IG9wdGlvbnMucmlnaHRQcm9ncmVzc0JhciA/IG9wdGlvbnMucmlnaHRQcm9ncmVzc0JhciA6IGZhbHNlXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW11cbiAgICAgICAgdGhpcy5kYXRhRm9yVmlldyA9IHtcbiAgICAgICAgICAgIG1pbjogdGhpcy5taW4sXG4gICAgICAgICAgICBtYXg6IHRoaXMubWF4LFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiB0aGlzLmRlZmF1bHRWYWx1ZSxcbiAgICAgICAgICAgIHJpZ2h0VmFsdWU6IHRoaXMucmlnaHRWYWx1ZSxcbiAgICAgICAgICAgIGlzUmFuZ2U6IHRoaXMuaXNSYW5nZSxcbiAgICAgICAgICAgIHJpZ2h0UHJvZ3Jlc3NCYXI6IHRoaXMucmlnaHRQcm9ncmVzc0JhclxuICAgICAgICB9XG4gICAgfVxuICAgIHN1YnNjcmliZShvYnNlcnZlcjogSU9ic2VydmVyTW9kZWwpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChvYnNlcnZlcilcbiAgICB9XG4gICAgbGltaXRUb2dnbGUob3B0aW9uOiBzdHJpbmcsIG5ld1ZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgc3dpdGNoIChvcHRpb24pIHtcbiAgICAgICAgICAgIGNhc2UoJ2RlZmF1bHQnKTpcblxuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA8IHRoaXMucmlnaHRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IG5ld1ZhbHVlXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51cGRhdGVWaWV3KClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FzZSgncmlnaHQnKTpcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA+IHRoaXMuZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRWYWx1ZSA9IG5ld1ZhbHVlXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51cGRhdGVWaWV3KClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59XG5cbmV4cG9ydCB7TW9kZWx9IiwiY2xhc3MgRm9ybSB7XG4gICAgZm9ybSE6IEhUTUxEaXZFbGVtZW50XG4gICAgZGVmYXVsdElucHV0ITogSFRNTElucHV0RWxlbWVudFxuICAgIHJpZ2h0SW5wdXQhOiBIVE1MSW5wdXRFbGVtZW50XG5cbiAgICBpbml0KHBhcmVudDogSFRNTERpdkVsZW1lbnQsIGlzRG91YmxlOiBib29sZWFuLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jcmVhdGVGb3JtKHBhcmVudClcbiAgICAgICAgdGhpcy5jcmVhdGVJbnB1dChpc0RvdWJsZSlcbiAgICAgICAgdGhpcy5zZXRNaW4oaXNEb3VibGUsIG1pbilcbiAgICAgICAgdGhpcy5zZXRNYXgoaXNEb3VibGUsIG1heClcbiAgICB9XG5cbiAgICBjcmVhdGVGb3JtKHBhcmVudDogSFRNTERpdkVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mb3JtID0gPEhUTUxEaXZFbGVtZW50Pihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSlcbiAgICAgICAgdGhpcy5mb3JtLmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fZm9ybScpXG4gICAgICAgIHBhcmVudC5hcHBlbmQodGhpcy5mb3JtKVxuICAgIH1cbiAgICBcbiAgICBjcmVhdGVJbnB1dChpc0RvdWJsZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAoaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQudHlwZSA9ICdyYW5nZSdcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9faW5wdXQnKSBcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9faW5wdXRfbGVmdCcpXG4gICAgICAgICAgICB0aGlzLmZvcm0uYXBwZW5kKHRoaXMuZGVmYXVsdElucHV0KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQudHlwZSA9ICdyYW5nZSdcbiAgICAgICAgICAgIHRoaXMucmlnaHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0JylcbiAgICAgICAgICAgIHRoaXMucmlnaHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0X3JpZ2h0JylcbiAgICAgICAgICAgIHRoaXMuZm9ybS5hcHBlbmQodGhpcy5yaWdodElucHV0KVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0LnR5cGUgPSAncmFuZ2UnXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0JylcbiAgICAgICAgICAgIHRoaXMuZm9ybS5hcHBlbmQodGhpcy5kZWZhdWx0SW5wdXQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0SW5wdXRWYWx1ZShpc0RvdWJsZTogYm9vbGVhbiwgdmFsdWU6IG51bWJlciwgcmlnaHRWYWx1ZTogbnVtYmVyID0gTmFOKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVmYXVsdElucHV0LnZhbHVlID0gU3RyaW5nKHZhbHVlKVxuICAgICAgICBpZiAoaXNEb3VibGUpIHsgICBcbiAgICAgICAgICAgIHRoaXMucmlnaHRJbnB1dC52YWx1ZSA9IFN0cmluZyhyaWdodFZhbHVlKVxuICAgICAgICB9XG4gICAgfVxuICAgIHNldE1pbihpc0RvdWJsZTogYm9vbGVhbiwgbWluOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQubWluID0gU3RyaW5nKG1pbilcbiAgICAgICAgaWYgKGlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQubWluID0gU3RyaW5nKG1pbilcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRNYXgoaXNEb3VibGU6IGJvb2xlYW4sIG1heDogbnVtYmVyID0gMTAwKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVmYXVsdElucHV0Lm1heCA9IFN0cmluZyhtYXgpXG4gICAgICAgIGlmIChpc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0Lm1heCA9IFN0cmluZyhtYXgpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIFN0eWxlcyB7XG4gICAgc3R5bGUhOiBIVE1MRGl2RWxlbWVudFxuICAgIHRyYWNrITogSFRNTERpdkVsZW1lbnRcblxuICAgIGluaXQocGFyZW50OiBIVE1MRGl2RWxlbWVudCkge1xuICAgICAgICB0aGlzLmNyZWF0ZVN0eWxlcyhwYXJlbnQpXG4gICAgICAgIHRoaXMuY3JlYXRlVHJhY2soKVxuICAgIH1cbiAgICBcbiAgICBjcmVhdGVTdHlsZXMocGFyZW50OiBIVE1MRGl2RWxlbWVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGhpcy5zdHlsZS5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3N0eWxlJylcbiAgICAgICAgcGFyZW50LmFwcGVuZCh0aGlzLnN0eWxlKVxuICAgIH1cbiAgICBcbiAgICBjcmVhdGVUcmFjaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50cmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRoaXMudHJhY2suY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190cmFjaycpXG4gICAgICAgIHRoaXMuc3R5bGUuYXBwZW5kKHRoaXMudHJhY2spXG4gICAgfVxufVxuXG5jbGFzcyBQcm9ncmVzc0JhciB7XG4gICAgYmFyITogSFRNTERpdkVsZW1lbnRcbiAgICBjcmVhdGVQcm9ncmVzc0JhcihwYXJlbnQ6IEhUTUxEaXZFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGhpcy5iYXIuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19wcm9ncmVzcy1iYXInKVxuICAgICAgICBwYXJlbnQuYXBwZW5kKHRoaXMuYmFyKVxuICAgIH1cbiAgICBjYWxjUGVyY2VudCh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gKCh2YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKSkgKiAxMDBcbiAgICB9XG4gICAgc2V0RGVmYXVsdChpc0RvdWJsZTogYm9vbGVhbiwgcGVyY2VudDogbnVtYmVyLCBwZXJjZW50UmlnaHQ6IG51bWJlciA9IE5hTik6IHZvaWQge1xuICAgICAgICBpZiAoaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLmxlZnQgPSBwZXJjZW50ICsgJyUnXG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5yaWdodCA9ICgxMDAgLSBwZXJjZW50UmlnaHQpICsgJyUnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5yaWdodCA9ICgxMDAgLSBwZXJjZW50KSArICclJ1xuICAgICAgICAgICAgdGhpcy5iYXIuc3R5bGUubGVmdCA9IFN0cmluZygwKVxuICAgICAgICB9XG4gICAgfVxuICAgIHNldFJpZ2h0KGlzRG91YmxlOiBib29sZWFuLCBwZXJjZW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFpc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy5iYXIuc3R5bGUubGVmdCA9IHBlcmNlbnQgKyAnJSdcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLnJpZ2h0ID0gU3RyaW5nKDApXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIFRodW1iIHtcblxuICAgIHRodW1iRGVmYXVsdCE6IEhUTUxEaXZFbGVtZW50XG4gICAgdGh1bWJSaWdodCE6IEhUTUxEaXZFbGVtZW50XG5cbiAgICBjcmVhdGVUaHVtYihwYXJlbnQ6IEhUTUxEaXZFbGVtZW50LCBpc0RvdWJsZTogYm9vbGVhbikge1xuICAgICAgICBpZihpc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYicpXG4gICAgICAgICAgICB0aGlzLnRodW1iRGVmYXVsdC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3RodW1iX2xlZnQnKVxuICAgICAgICAgICAgcGFyZW50LmFwcGVuZCh0aGlzLnRodW1iRGVmYXVsdClcblxuICAgICAgICAgICAgdGhpcy50aHVtYlJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHRoaXMudGh1bWJSaWdodC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3RodW1iJylcbiAgICAgICAgICAgIHRoaXMudGh1bWJSaWdodC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3RodW1iX3JpZ2h0JylcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmQodGhpcy50aHVtYlJpZ2h0KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQuY2xhc3NOYW1lID0gJ3JhbmdlLXNsaWRlcl9fdGh1bWInXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kKHRoaXMudGh1bWJEZWZhdWx0KVxuICAgICAgICB9XG4gICAgfVxuICAgIHBsYWNlVGh1bWIoaXNEb3VibGU6IGJvb2xlYW4sIHBlcmNlbnQ6IG51bWJlciwgcGVyY2VudFJpZ2h0OiBudW1iZXIgPSBOYU4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQuc3R5bGUubGVmdCA9IHBlcmNlbnQgKyAnJSdcbiAgICAgICAgaWYgKGlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLnRodW1iUmlnaHQuc3R5bGUucmlnaHQgPSAoMTAwIC0gcGVyY2VudFJpZ2h0KSArICclJ1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQge0Zvcm0sIFN0eWxlcywgUHJvZ3Jlc3NCYXIsIFRodW1ifSIsIlxuaW1wb3J0IHtGb3JtLCBTdHlsZXMsIFByb2dyZXNzQmFyLCBUaHVtYn0gZnJvbSAnLi9zdWJWaWV3cydcblxuaW50ZXJmYWNlIElEYXRhIHtcbiAgICBtaW46IG51bWJlclxuICAgIG1heDogbnVtYmVyXG4gICAgZGVmYXVsdFZhbHVlOiBudW1iZXJcbiAgICByaWdodFZhbHVlOiBudW1iZXJcbiAgICBpc1JhbmdlOiBib29sZWFuXG4gICAgcmlnaHRQcm9ncmVzc0JhcjogYm9vbGVhblxufVxuaW50ZXJmYWNlIElPYnNlcnZlclZpZXcge1xuICAgIHVwZGF0ZU1vZGVsKGFyZzA6IHN0cmluZywgYXJnMTogbnVtYmVyKTogdm9pZFxufVxuXG5jbGFzcyBWaWV3IHtcbiAgICBwYXJlbnQ6IEhUTUxFbGVtZW50XG4gICAgd3JhcHBlciE6IEhUTUxEaXZFbGVtZW50XG5cbiAgICBmb3JtOiBGb3JtXG4gICAgc3R5bGVzOiBTdHlsZXNcbiAgICBwcm9ncmVzc0JhcjogUHJvZ3Jlc3NCYXJcbiAgICB0aHVtYjogVGh1bWJcbiAgICBvcHRpb25zOiBJRGF0YVxuICAgIG9ic2VydmVyczogSU9ic2VydmVyVmlld1tdXG4gICAgY29uc3RydWN0b3IocGFyZW50OiBIVE1MRWxlbWVudCwgZm9ybTogRm9ybSwgc3R5bGVzOiBTdHlsZXMsIHByb2dyZXNzQmFyOiBQcm9ncmVzc0JhciwgdGh1bWI6IFRodW1iKSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50XG4gICAgICAgIHRoaXMuZm9ybSA9IGZvcm1cbiAgICAgICAgdGhpcy5zdHlsZXMgPSBzdHlsZXNcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JhciA9IHByb2dyZXNzQmFyXG4gICAgICAgIHRoaXMudGh1bWIgPSB0aHVtYlxuXG4gICAgLy8gZGVmYXVsdCBkYXRhXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiAxMCxcbiAgICAgICAgICAgIHJpZ2h0VmFsdWU6IDUwLFxuICAgICAgICAgICAgaXNSYW5nZTogdHJ1ZSxcbiAgICAgICAgICAgIHJpZ2h0UHJvZ3Jlc3NCYXI6IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9ic2VydmVycyA9IFtdXG4gICAgfVxuICAgIHN1YnNjcmliZShvYnNlcnZlcjogSU9ic2VydmVyVmlldykge1xuICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKVxuICAgIH1cbiAgICBpbml0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmNyZWF0ZVdyYXBwZXIoKVxuICAgICAgICBcbiAgICAgICAgdGhpcy5mb3JtLmluaXQoXG4gICAgICAgICAgICB0aGlzLndyYXBwZXIsIFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlzUmFuZ2UsIFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1pbiwgXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubWF4XG4gICAgICAgIClcbiAgICAgICAgdGhpcy5zdHlsZXMuaW5pdCh0aGlzLndyYXBwZXIpXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuY3JlYXRlUHJvZ3Jlc3NCYXIodGhpcy5zdHlsZXMuc3R5bGUpXG4gICAgICAgIHRoaXMudGh1bWIuY3JlYXRlVGh1bWIodGhpcy5zdHlsZXMuc3R5bGUsIHRoaXMub3B0aW9ucy5pc1JhbmdlKVxuICAgICAgICBcbiAgICAgICAgXG5cbiAgICAgICAgdGhpcy5zZXRJbnB1dCgpXG4gICAgICAgIHRoaXMuZXZlbnRJbnB1dCgpXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuYmFyLm9ubW91c2Vkb3duID0gZWxlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50Q2xpY2soZWxlbSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0eWxlcy50cmFjay5vbm1vdXNlZG93biA9IGVsZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5ldmVudENsaWNrKGVsZW0pXG4gICAgICAgIH1cbiAgXG4gICAgfSBcblxuICAgIGNyZWF0ZVdyYXBwZXIgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMud3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRoaXMud3JhcHBlci5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXInKVxuICAgICAgICB0aGlzLnBhcmVudC5hcHBlbmQodGhpcy53cmFwcGVyKVxuICAgIH1cblxuICAgIHNldElucHV0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmZvcm0uc2V0SW5wdXRWYWx1ZSh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgdGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSwgdGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBwbGFjZURlZmF1bHQ6IG51bWJlciA9IHRoaXMucHJvZ3Jlc3NCYXIuY2FsY1BlcmNlbnQoXG4gICAgICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0LnZhbHVlKSwgXG4gICAgICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0Lm1pbiksIFxuICAgICAgICAgICAgICAgICAgICBOdW1iZXIodGhpcy5mb3JtLmRlZmF1bHRJbnB1dC5tYXgpKVxuICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICBjb25zdCBwbGFjZVJpZ2h0OiBudW1iZXIgPSB0aGlzLmZvcm0ucmlnaHRJbnB1dCA/IFxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5jYWxjUGVyY2VudChcbiAgICAgICAgICAgICAgICBOdW1iZXIodGhpcy5mb3JtLnJpZ2h0SW5wdXQudmFsdWUpLCBcbiAgICAgICAgICAgICAgICBOdW1iZXIodGhpcy5mb3JtLnJpZ2h0SW5wdXQubWluKSwgXG4gICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5yaWdodElucHV0Lm1heCkpIFxuICAgICAgICAgICAgICAgIDogTmFOIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuc2V0RGVmYXVsdCh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGxhY2VEZWZhdWx0LCBwbGFjZVJpZ2h0KVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yaWdodFByb2dyZXNzQmFyKSB7IFxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5zZXRSaWdodCh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGxhY2VEZWZhdWx0KSBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGh1bWIucGxhY2VUaHVtYih0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGxhY2VEZWZhdWx0LCBwbGFjZVJpZ2h0KVxuXG4gICAgICAgIFxuICAgIH1cbiAgICBldmVudElucHV0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmZvcm0uZGVmYXVsdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSA9IE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0LnZhbHVlKVxuICAgICAgICAgICAgdGhpcy5zZXRJbnB1dCgpXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci51cGRhdGVNb2RlbCgnZGVmYXVsdCcsIE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0LnZhbHVlKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNSYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtLnJpZ2h0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUgPSBOdW1iZXIodGhpcy5mb3JtLnJpZ2h0SW5wdXQudmFsdWUpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJbnB1dCgpXG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVwZGF0ZU1vZGVsKCdyaWdodCcsIE51bWJlcih0aGlzLmZvcm0ucmlnaHRJbnB1dC52YWx1ZSkpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgZXZlbnRDbGljayhlbGVtOiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGNvb3JkczogRE9NUmVjdCA9IHRoaXMuc3R5bGVzLnRyYWNrLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIGNvbnN0IGxlbmd0aDogbnVtYmVyID0gY29vcmRzLnJpZ2h0IC0gY29vcmRzLmxlZnRcbiAgICAgICAgY29uc3QgY3VycmVudFBvc2l0aW9uOiBudW1iZXIgPSBlbGVtLnBhZ2VYIC0gY29vcmRzLmxlZnRcbiAgICAgICAgY29uc3QgcGVyY2VudDogbnVtYmVyID0gY3VycmVudFBvc2l0aW9uL2xlbmd0aCAqIDEwMFxuXG4gICAgICAgIGNvbnN0IHBsYWNlRGVmYXVsdDogbnVtYmVyID0gdGhpcy5wcm9ncmVzc0Jhci5jYWxjUGVyY2VudChcbiAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0LnZhbHVlKSwgXG4gICAgICAgICAgICBOdW1iZXIodGhpcy5mb3JtLmRlZmF1bHRJbnB1dC5taW4pLCBcbiAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0Lm1heCkpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBuZXdWYWx1ZTogbnVtYmVyID0gdGhpcy5jYWxjVmFsdWUocGVyY2VudClcbiAgICAgICAgY29uc3QgaGFsZk9mQmFyOiBudW1iZXIgPSAodGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUgKyB0aGlzLm9wdGlvbnMuZGVmYXVsdFZhbHVlKSAvIDJcbiAgICBcbiAgICAgICAgY29uc3QgaXNSaWdodFRyYWNrOiBib29sZWFuID0gdGhpcy5vcHRpb25zLmlzUmFuZ2UgJiYgbmV3VmFsdWUgPiB0aGlzLm9wdGlvbnMucmlnaHRWYWx1ZVxuICAgICAgICBjb25zdCBpc1JpZ2h0QmFyID0gdGhpcy5vcHRpb25zLmlzUmFuZ2UgJiYgbmV3VmFsdWUgPiBoYWxmT2ZCYXJcblxuICAgICAgICBpZihpc1JpZ2h0VHJhY2sgfHwgaXNSaWdodEJhcikge1xuICAgICAgICAgICAgdGhpcy5mb3JtLnJpZ2h0SW5wdXQudmFsdWUgPSBTdHJpbmcobmV3VmFsdWUpXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMucmlnaHRWYWx1ZSA9IG5ld1ZhbHVlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMudGh1bWIucGxhY2VUaHVtYih0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGxhY2VEZWZhdWx0LCBwZXJjZW50KVxuXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnNldERlZmF1bHQodGhpcy5vcHRpb25zLmlzUmFuZ2UsIHBsYWNlRGVmYXVsdCwgcGVyY2VudClcblxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIudXBkYXRlTW9kZWwoJ3JpZ2h0JywgbmV3VmFsdWUpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZvcm0uZGVmYXVsdElucHV0LnZhbHVlID0gU3RyaW5nKG5ld1ZhbHVlKVxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSA9IG5ld1ZhbHVlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMudGh1bWIucGxhY2VUaHVtYih0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGVyY2VudClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yaWdodFByb2dyZXNzQmFyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5zZXRSaWdodCh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGVyY2VudClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5zZXREZWZhdWx0KHRoaXMub3B0aW9ucy5pc1JhbmdlLCBwZXJjZW50KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci51cGRhdGVNb2RlbCgnZGVmYXVsdCcsIG5ld1ZhbHVlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYWxjVmFsdWUocGVyY2VudDogbnVtYmVyLCBcbiAgICAgICAgbWluOiBudW1iZXIgPSB0aGlzLm9wdGlvbnMubWluLCBcbiAgICAgICAgbWF4OiBudW1iZXIgPSB0aGlzLm9wdGlvbnMubWF4KTogbnVtYmVyIHtcbiAgICAgICAgICAgIGxldCBkaWFwYXNvbjogbnVtYmVyID0gbWF4IC0gbWluXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChkaWFwYXNvbiAtIChtYXggLSAoKGRpYXBhc29uKSAqIHBlcmNlbnQpIC8gMTAwKSlcbiAgICB9XG4gICAgXG4gICAgXG4gICAgXG59XG5cbmV4cG9ydCB7Vmlld31cbiJdLCJzb3VyY2VSb290IjoiIn0=