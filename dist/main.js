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

      console.log(this.model.defaultValue);
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

      if (this.options.isRange && newValue > this.options.rightValue) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4gc3luYyBcXC4odHN8c2NzcykkIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2pxdWVyeS5tYWluLmQudHMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5zY3NzIiwid2VicGFjazovLy8uL212Yy9jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL212Yy9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9tdmMvc3ViVmlld3MudHMiLCJ3ZWJwYWNrOi8vLy4vbXZjL3ZpZXcudHMiXSwibmFtZXMiOlsiaW1wb3J0QWxsIiwiciIsImtleXMiLCJmb3JFYWNoIiwicmVxdWlyZSIsIiQiLCJmbiIsInJhbmdlU2xpZGVyIiwic2V0dGluZ3MiLCJwbHVnaW4iLCJDb250cm9sbGVyIiwiTW9kZWwiLCJtaW4iLCJtYXgiLCJkZWZhdWx0VmFsdWUiLCJpbml0aWFsVmFsdWUiLCJsZWZ0VmFsdWUiLCJyaWdodFZhbHVlIiwiaXNSYW5nZSIsInJpZ2h0UHJvZ3Jlc3NCYXIiLCJWaWV3IiwiRm9ybSIsIlN0eWxlcyIsIlByb2dyZXNzQmFyIiwiVGh1bWIiLCJqUXVlcnkiLCJtb2RlbCIsInZpZXciLCJzdWJzY3JpYmUiLCJpbml0Iiwib3B0aW9ucyIsImRhdGFGb3JWaWV3Iiwib3B0aW9uIiwibmV3VmFsdWUiLCJsaW1pdFRvZ2dsZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRJbnB1dCIsIm9ic2VydmVycyIsIm9ic2VydmVyIiwicHVzaCIsInVwZGF0ZVZpZXciLCJwYXJlbnQiLCJpc0RvdWJsZSIsImNyZWF0ZUZvcm0iLCJjcmVhdGVJbnB1dCIsInNldE1pbiIsInNldE1heCIsImZvcm0iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmQiLCJkZWZhdWx0SW5wdXQiLCJ0eXBlIiwicmlnaHRJbnB1dCIsInZhbHVlIiwiTmFOIiwiU3RyaW5nIiwiY3JlYXRlU3R5bGVzIiwiY3JlYXRlVHJhY2siLCJzdHlsZSIsInRyYWNrIiwiYmFyIiwicGVyY2VudCIsInBlcmNlbnRSaWdodCIsImxlZnQiLCJyaWdodCIsInRodW1iRGVmYXVsdCIsInRodW1iUmlnaHQiLCJjbGFzc05hbWUiLCJzdHlsZXMiLCJwcm9ncmVzc0JhciIsInRodW1iIiwiY3JlYXRlV3JhcHBlciIsIndyYXBwZXIiLCJjcmVhdGVQcm9ncmVzc0JhciIsImNyZWF0ZVRodW1iIiwiZXZlbnRJbnB1dCIsIm9ubW91c2Vkb3duIiwiZWxlbSIsImV2ZW50Q2xpY2siLCJzZXRJbnB1dFZhbHVlIiwicGxhY2VEZWZhdWx0IiwiY2FsY1BlcmNlbnQiLCJOdW1iZXIiLCJwbGFjZVJpZ2h0Iiwic2V0RGVmYXVsdCIsInNldFJpZ2h0IiwicGxhY2VUaHVtYiIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1cGRhdGVNb2RlbCIsImNvb3JkcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlbmd0aCIsImN1cnJlbnRQb3NpdGlvbiIsInBhZ2VYIiwiY2FsY1ZhbHVlIiwiZGlhcGFzb24iLCJNYXRoIiwicm91bmQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QUFFQSxZQUFJLEtBQUtuQyxPQUFMLENBQWFYLGdCQUFqQixFQUFtQztBQUMvQixlQUFLc0QsV0FBTCxDQUFpQmdCLFFBQWpCLENBQTBCLEtBQUszRCxPQUFMLENBQWFaLE9BQXZDLEVBQWdEK0MsT0FBaEQ7QUFDSCxTQUZELE1BRU87QUFDSCxlQUFLUSxXQUFMLENBQWlCZSxVQUFqQixDQUE0QixLQUFLMUQsT0FBTCxDQUFhWixPQUF6QyxFQUFrRCtDLE9BQWxEO0FBQ0g7O0FBRUQsYUFBSzNCLFNBQUwsQ0FBZW5DLE9BQWYsQ0FBdUIsVUFBQW9DLFFBQVEsRUFBSTtBQUMvQkEsa0JBQVEsQ0FBQ3FELFdBQVQsQ0FBcUIsU0FBckIsRUFBZ0MzRCxRQUFoQztBQUNILFNBRkQ7QUFHSDtBQUNKOzs7OEJBQ1NnQyxPLEVBRWtDO0FBQUEsVUFEeENyRCxHQUN3Qyx1RUFEMUIsS0FBS2tCLE9BQUwsQ0FBYWxCLEdBQ2E7QUFBQSxVQUF4Q0MsR0FBd0MsdUVBQTFCLEtBQUtpQixPQUFMLENBQWFqQixHQUFhO0FBQ3BDLFVBQUlzRixRQUFnQixHQUFHdEYsR0FBRyxHQUFHRCxHQUE3QjtBQUNBLGFBQU93RixJQUFJLENBQUNDLEtBQUwsQ0FBV0YsUUFBUSxJQUFJdEYsR0FBRyxHQUFLc0YsUUFBRCxHQUFhbEMsT0FBZCxHQUF5QixHQUFuQyxDQUFuQixDQUFQO0FBQ1AiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vanF1ZXJ5Lm1haW4uZC50c1wiOiBcIi4vanF1ZXJ5Lm1haW4uZC50c1wiLFxuXHRcIi4vbWFpbi5zY3NzXCI6IFwiLi9tYWluLnNjc3NcIixcblx0XCIuL212Yy9jb250cm9sbGVyLnRzXCI6IFwiLi9tdmMvY29udHJvbGxlci50c1wiLFxuXHRcIi4vbXZjL21vZGVsLnRzXCI6IFwiLi9tdmMvbW9kZWwudHNcIixcblx0XCIuL212Yy9zdWJWaWV3cy50c1wiOiBcIi4vbXZjL3N1YlZpZXdzLnRzXCIsXG5cdFwiLi9tdmMvdmlldy50c1wiOiBcIi4vbXZjL3ZpZXcudHNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgXFxcXC4odHN8c2NzcykkXCI7IiwiZnVuY3Rpb24gaW1wb3J0QWxsKHIpIHtcbiAgci5rZXlzKCkuZm9yRWFjaChyKVxufVxuXG5pbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuLycsIHRydWUsIC9cXC4odHN8c2NzcykkLykpIiwiXG5pbXBvcnQge0Zvcm0sIFN0eWxlcywgUHJvZ3Jlc3NCYXIsIFRodW1ifSBmcm9tICcuL212Yy9zdWJWaWV3cy50cydcbmltcG9ydCB7Vmlld30gZnJvbSAnLi9tdmMvdmlldy50cydcbmltcG9ydCB7TW9kZWx9IGZyb20gJy4vbXZjL21vZGVsLnRzJ1xuaW1wb3J0IHtDb250cm9sbGVyfSBmcm9tICcuL212Yy9jb250cm9sbGVyJ1xuXG5cbihmdW5jdGlvbigkOiBKUXVlcnlTdGF0aWMpIHtcbiAgICAkLmZuLnJhbmdlU2xpZGVyID0gZnVuY3Rpb24oc2V0dGluZ3M6IHtcbiAgICAgICAgbWluPzogbnVtYmVyXG4gICAgICAgIG1heD86IG51bWJlclxuICAgICAgICBpbml0aWFsVmFsdWU/OiBudW1iZXJcbiAgICAgICAgbGVmdFZhbHVlPzogbnVtYmVyXG4gICAgICAgIGRlZmF1bHRWYWx1ZT86IG51bWJlclxuICAgICAgICByaWdodFZhbHVlPzogbnVtYmVyXG4gICAgICAgIGlzUmFuZ2U/OiBib29sZWFuXG4gICAgICAgIHJpZ2h0UHJvZ3Jlc3NCYXI/OiBib29sZWFuXG4gICAgfSkge1xuICAgICAgICBjb25zdCBwbHVnaW4gPSBuZXcgQ29udHJvbGxlcihcbiAgICAgICAgICAgIG5ldyBNb2RlbCh7XG4gICAgICAgICAgICAgICAgbWluOiBzZXR0aW5ncy5taW4sXG4gICAgICAgICAgICAgICAgbWF4OiBzZXR0aW5ncy5tYXgsXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBzZXR0aW5ncy5pbml0aWFsVmFsdWUgfHwgc2V0dGluZ3MubGVmdFZhbHVlLFxuICAgICAgICAgICAgICAgIHJpZ2h0VmFsdWU6IHNldHRpbmdzLnJpZ2h0VmFsdWUsXG4gICAgICAgICAgICAgICAgaXNSYW5nZTogc2V0dGluZ3MuaXNSYW5nZSxcbiAgICAgICAgICAgICAgICByaWdodFByb2dyZXNzQmFyOiBzZXR0aW5ncy5yaWdodFByb2dyZXNzQmFyXG4gICAgICAgICAgICB9KSwgXG4gICAgICAgICAgICBuZXcgVmlldyggXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBuZXcgRm9ybSgpLFxuICAgICAgICAgICAgICAgIG5ldyBTdHlsZXMoKSxcbiAgICAgICAgICAgICAgICBuZXcgUHJvZ3Jlc3NCYXIoKSxcbiAgICAgICAgICAgICAgICBuZXcgVGh1bWIoKSBcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICByZXR1cm4gcGx1Z2luXG4gICAgfVxufSkoalF1ZXJ5KVxuXG4kKCcjZmlyc3QtcmFuZ2Utc2xpZGVyJykucmFuZ2VTbGlkZXIoe1xuICAgIGlzUmFuZ2U6IHRydWUsXG4gICAgbGVmdFZhbHVlOiAxMCxcbiAgICByaWdodFZhbHVlOiA2MFxufSlcbiQoJyNzZWNvbmQtcmFuZ2Utc2xpZGVyJykucmFuZ2VTbGlkZXIoe1xuICAgIGlzUmFuZ2U6IHRydWUsXG4gICAgbGVmdFZhbHVlOiA0MCxcbiAgICByaWdodFZhbHVlOiA3MFxufSlcbiQoJyN0aGlyZC1yYW5nZS1zbGlkZXInKS5yYW5nZVNsaWRlcih7XG4gICAgbWluOiAwLFxuICAgIG1heDogMzAsXG4gICAgaW5pdGlhbFZhbHVlOiAyMCxcbiAgICByaWdodFByb2dyZXNzQmFyOiB0cnVlXG59KVxuJCgnI2ZvcnRoLXJhbmdlLXNsaWRlcicpLnJhbmdlU2xpZGVyKHtcbiAgICBpbml0aWFsVmFsdWU6IDIwLFxuICAgIHJpZ2h0UHJvZ3Jlc3NCYXI6IGZhbHNlXG59KVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYwMTAzMDQxNzg1NlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvaG9tZS94ZW5hL1JhbmdlLXNsaWRlci9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicmVsb2FkQWxsXCI6dHJ1ZSxcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsImltcG9ydCB7TW9kZWx9IGZyb20gJy4vbW9kZWwnXG5pbXBvcnQge1ZpZXd9IGZyb20gJy4vdmlldydcblxuY2xhc3MgQ29udHJvbGxlciB7XG4gICAgbW9kZWw6IE1vZGVsXG4gICAgdmlldzogVmlld1xuICAgIGNvbnN0cnVjdG9yKG1vZGVsOiBNb2RlbCwgdmlldzogVmlldykge1xuICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWxcbiAgICAgICAgdGhpcy52aWV3ID0gdmlld1xuICAgICAgICB0aGlzLnZpZXcub3B0aW9ucyA9IHRoaXMubW9kZWwuZGF0YUZvclZpZXdcbiAgICAgICAgdGhpcy5pbml0KCkgXG4gICAgfVxuICAgIGluaXQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMudmlldy5zdWJzY3JpYmUodGhpcylcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJzY3JpYmUodGhpcylcbiAgICAgICAgdGhpcy52aWV3LmluaXQoKVxuICAgIH1cbiAgICB1cGRhdGVNb2RlbChvcHRpb246IHN0cmluZywgbmV3VmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5tb2RlbC5pc1JhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmxpbWl0VG9nZ2xlKG9wdGlvbiwgbmV3VmFsdWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmRlZmF1bHRWYWx1ZSA9IG5ld1ZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5tb2RlbC5kZWZhdWx0VmFsdWUpXG4gICAgfVxuICAgIHVwZGF0ZVZpZXcoKSB7XG4gICAgICAgIHRoaXMudmlldy5vcHRpb25zLmRlZmF1bHRWYWx1ZSA9IHRoaXMubW9kZWwuZGVmYXVsdFZhbHVlXG4gICAgICAgIHRoaXMudmlldy5vcHRpb25zLnJpZ2h0VmFsdWUgPSB0aGlzLm1vZGVsLnJpZ2h0VmFsdWVcbiAgICAgICAgdGhpcy52aWV3LnNldElucHV0KClcbiAgICB9XG59XG5cbmV4cG9ydCB7Q29udHJvbGxlcn0iLCJpbnRlcmZhY2UgSURhdGEge1xuICAgIG1pbjogbnVtYmVyXG4gICAgbWF4OiBudW1iZXJcbiAgICBkZWZhdWx0VmFsdWU6IG51bWJlclxuICAgIHJpZ2h0VmFsdWU6IG51bWJlclxuICAgIGlzUmFuZ2U6IGJvb2xlYW5cbiAgICByaWdodFByb2dyZXNzQmFyOiBib29sZWFuXG59XG5pbnRlcmZhY2UgSU9ic2VydmVyTW9kZWwge1xuICAgIHVwZGF0ZVZpZXcoKTogdm9pZFxufVxuXG5jbGFzcyBNb2RlbCB7XG4gICAgbWluOiBudW1iZXJcbiAgICBtYXg6IG51bWJlclxuICAgIGRlZmF1bHRWYWx1ZTogbnVtYmVyXG4gICAgcmlnaHRWYWx1ZTogbnVtYmVyXG4gICAgaXNSYW5nZTogYm9vbGVhblxuICAgIHJpZ2h0UHJvZ3Jlc3NCYXI6IGJvb2xlYW5cbiAgICBkYXRhRm9yVmlldzogSURhdGFcbiAgICBvYnNlcnZlcnM6IElPYnNlcnZlck1vZGVsW11cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJRGF0YSkge1xuICAgICAgICB0aGlzLm1pbiA9IG9wdGlvbnMubWluID8gb3B0aW9ucy5taW4gOiAwXG4gICAgICAgIHRoaXMubWF4ID0gb3B0aW9ucy5tYXggPyBvcHRpb25zLm1heCA6IDEwMFxuICAgICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IG9wdGlvbnMuZGVmYXVsdFZhbHVlID8gb3B0aW9ucy5kZWZhdWx0VmFsdWUgOiA1MFxuICAgICAgICB0aGlzLnJpZ2h0VmFsdWUgPSBvcHRpb25zLnJpZ2h0VmFsdWUgPyBvcHRpb25zLnJpZ2h0VmFsdWUgOiA2MFxuICAgICAgICB0aGlzLmlzUmFuZ2UgPSBvcHRpb25zLmlzUmFuZ2UgPyBvcHRpb25zLmlzUmFuZ2UgOiBmYWxzZVxuICAgICAgICB0aGlzLnJpZ2h0UHJvZ3Jlc3NCYXIgPSBvcHRpb25zLnJpZ2h0UHJvZ3Jlc3NCYXIgPyBvcHRpb25zLnJpZ2h0UHJvZ3Jlc3NCYXIgOiBmYWxzZVxuICAgICAgICB0aGlzLm9ic2VydmVycyA9IFtdXG4gICAgICAgIHRoaXMuZGF0YUZvclZpZXcgPSB7XG4gICAgICAgICAgICBtaW46IHRoaXMubWluLFxuICAgICAgICAgICAgbWF4OiB0aGlzLm1heCxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdGhpcy5kZWZhdWx0VmFsdWUsXG4gICAgICAgICAgICByaWdodFZhbHVlOiB0aGlzLnJpZ2h0VmFsdWUsXG4gICAgICAgICAgICBpc1JhbmdlOiB0aGlzLmlzUmFuZ2UsXG4gICAgICAgICAgICByaWdodFByb2dyZXNzQmFyOiB0aGlzLnJpZ2h0UHJvZ3Jlc3NCYXJcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdWJzY3JpYmUob2JzZXJ2ZXI6IElPYnNlcnZlck1vZGVsKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpXG4gICAgfVxuICAgIGxpbWl0VG9nZ2xlKG9wdGlvbjogc3RyaW5nLCBuZXdWYWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHN3aXRjaCAob3B0aW9uKSB7XG4gICAgICAgICAgICBjYXNlKCdkZWZhdWx0Jyk6XG5cbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUgPCB0aGlzLnJpZ2h0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0VmFsdWUgPSBuZXdWYWx1ZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudXBkYXRlVmlldygpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UoJ3JpZ2h0Jyk6XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUgPiB0aGlzLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0VmFsdWUgPSBuZXdWYWx1ZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudXBkYXRlVmlldygpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufVxuXG5leHBvcnQge01vZGVsfSIsImNsYXNzIEZvcm0ge1xuICAgIGZvcm0hOiBIVE1MRGl2RWxlbWVudFxuICAgIGRlZmF1bHRJbnB1dCE6IEhUTUxJbnB1dEVsZW1lbnRcbiAgICByaWdodElucHV0ITogSFRNTElucHV0RWxlbWVudFxuXG4gICAgaW5pdChwYXJlbnQ6IEhUTUxEaXZFbGVtZW50LCBpc0RvdWJsZTogYm9vbGVhbiwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3JlYXRlRm9ybShwYXJlbnQpXG4gICAgICAgIHRoaXMuY3JlYXRlSW5wdXQoaXNEb3VibGUpXG4gICAgICAgIHRoaXMuc2V0TWluKGlzRG91YmxlLCBtaW4pXG4gICAgICAgIHRoaXMuc2V0TWF4KGlzRG91YmxlLCBtYXgpXG4gICAgfVxuXG4gICAgY3JlYXRlRm9ybShwYXJlbnQ6IEhUTUxEaXZFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZm9ybSA9IDxIVE1MRGl2RWxlbWVudD4oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpXG4gICAgICAgIHRoaXMuZm9ybS5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2Zvcm0nKVxuICAgICAgICBwYXJlbnQuYXBwZW5kKHRoaXMuZm9ybSlcbiAgICB9XG4gICAgXG4gICAgY3JlYXRlSW5wdXQoaXNEb3VibGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKGlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0LnR5cGUgPSAncmFuZ2UnXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0JykgXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0X2xlZnQnKVxuICAgICAgICAgICAgdGhpcy5mb3JtLmFwcGVuZCh0aGlzLmRlZmF1bHRJbnB1dClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0LnR5cGUgPSAncmFuZ2UnXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19pbnB1dCcpXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19pbnB1dF9yaWdodCcpXG4gICAgICAgICAgICB0aGlzLmZvcm0uYXBwZW5kKHRoaXMucmlnaHRJbnB1dClcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC50eXBlID0gJ3JhbmdlJ1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19pbnB1dCcpXG4gICAgICAgICAgICB0aGlzLmZvcm0uYXBwZW5kKHRoaXMuZGVmYXVsdElucHV0KVxuICAgICAgICB9XG4gICAgfVxuICAgIHNldElucHV0VmFsdWUoaXNEb3VibGU6IGJvb2xlYW4sIHZhbHVlOiBudW1iZXIsIHJpZ2h0VmFsdWU6IG51bWJlciA9IE5hTik6IHZvaWQge1xuICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC52YWx1ZSA9IFN0cmluZyh2YWx1ZSlcbiAgICAgICAgaWYgKGlzRG91YmxlKSB7ICAgXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQudmFsdWUgPSBTdHJpbmcocmlnaHRWYWx1ZSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRNaW4oaXNEb3VibGU6IGJvb2xlYW4sIG1pbjogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVmYXVsdElucHV0Lm1pbiA9IFN0cmluZyhtaW4pXG4gICAgICAgIGlmIChpc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0Lm1pbiA9IFN0cmluZyhtaW4pXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0TWF4KGlzRG91YmxlOiBib29sZWFuLCBtYXg6IG51bWJlciA9IDEwMCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC5tYXggPSBTdHJpbmcobWF4KVxuICAgICAgICBpZiAoaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHRJbnB1dC5tYXggPSBTdHJpbmcobWF4KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBTdHlsZXMge1xuICAgIHN0eWxlITogSFRNTERpdkVsZW1lbnRcbiAgICB0cmFjayE6IEhUTUxEaXZFbGVtZW50XG5cbiAgICBpbml0KHBhcmVudDogSFRNTERpdkVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVTdHlsZXMocGFyZW50KVxuICAgICAgICB0aGlzLmNyZWF0ZVRyYWNrKClcbiAgICB9XG4gICAgXG4gICAgY3JlYXRlU3R5bGVzKHBhcmVudDogSFRNTERpdkVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRoaXMuc3R5bGUuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19zdHlsZScpXG4gICAgICAgIHBhcmVudC5hcHBlbmQodGhpcy5zdHlsZSlcbiAgICB9XG4gICAgXG4gICAgY3JlYXRlVHJhY2soKTogdm9pZCB7XG4gICAgICAgIHRoaXMudHJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0aGlzLnRyYWNrLmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdHJhY2snKVxuICAgICAgICB0aGlzLnN0eWxlLmFwcGVuZCh0aGlzLnRyYWNrKVxuICAgIH1cbn1cblxuY2xhc3MgUHJvZ3Jlc3NCYXIge1xuICAgIGJhciE6IEhUTUxEaXZFbGVtZW50XG4gICAgY3JlYXRlUHJvZ3Jlc3NCYXIocGFyZW50OiBIVE1MRGl2RWxlbWVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRoaXMuYmFyLmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fcHJvZ3Jlc3MtYmFyJylcbiAgICAgICAgcGFyZW50LmFwcGVuZCh0aGlzLmJhcilcbiAgICB9XG4gICAgY2FsY1BlcmNlbnQodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuICgodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbikpICogMTAwXG4gICAgfVxuICAgIHNldERlZmF1bHQoaXNEb3VibGU6IGJvb2xlYW4sIHBlcmNlbnQ6IG51bWJlciwgcGVyY2VudFJpZ2h0OiBudW1iZXIgPSBOYU4pOiB2b2lkIHtcbiAgICAgICAgaWYgKGlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5sZWZ0ID0gcGVyY2VudCArICclJ1xuICAgICAgICAgICAgdGhpcy5iYXIuc3R5bGUucmlnaHQgPSAoMTAwIC0gcGVyY2VudFJpZ2h0KSArICclJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5iYXIuc3R5bGUucmlnaHQgPSAoMTAwIC0gcGVyY2VudCkgKyAnJSdcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLmxlZnQgPSBTdHJpbmcoMClcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRSaWdodChpc0RvdWJsZTogYm9vbGVhbiwgcGVyY2VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICghaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLmxlZnQgPSBwZXJjZW50ICsgJyUnXG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5yaWdodCA9IFN0cmluZygwKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBUaHVtYiB7XG5cbiAgICB0aHVtYkRlZmF1bHQhOiBIVE1MRGl2RWxlbWVudFxuICAgIHRodW1iUmlnaHQhOiBIVE1MRGl2RWxlbWVudFxuXG4gICAgY3JlYXRlVGh1bWIocGFyZW50OiBIVE1MRGl2RWxlbWVudCwgaXNEb3VibGU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYoaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMudGh1bWJEZWZhdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHRoaXMudGh1bWJEZWZhdWx0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdGh1bWInKVxuICAgICAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYl9sZWZ0JylcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmQodGhpcy50aHVtYkRlZmF1bHQpXG5cbiAgICAgICAgICAgIHRoaXMudGh1bWJSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB0aGlzLnRodW1iUmlnaHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYicpXG4gICAgICAgICAgICB0aGlzLnRodW1iUmlnaHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYl9yaWdodCcpXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kKHRoaXMudGh1bWJSaWdodClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGh1bWJEZWZhdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHRoaXMudGh1bWJEZWZhdWx0LmNsYXNzTmFtZSA9ICdyYW5nZS1zbGlkZXJfX3RodW1iJ1xuICAgICAgICAgICAgcGFyZW50LmFwcGVuZCh0aGlzLnRodW1iRGVmYXVsdClcbiAgICAgICAgfVxuICAgIH1cbiAgICBwbGFjZVRodW1iKGlzRG91YmxlOiBib29sZWFuLCBwZXJjZW50OiBudW1iZXIsIHBlcmNlbnRSaWdodDogbnVtYmVyID0gTmFOKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGh1bWJEZWZhdWx0LnN0eWxlLmxlZnQgPSBwZXJjZW50ICsgJyUnXG4gICAgICAgIGlmIChpc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy50aHVtYlJpZ2h0LnN0eWxlLnJpZ2h0ID0gKDEwMCAtIHBlcmNlbnRSaWdodCkgKyAnJSdcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHtGb3JtLCBTdHlsZXMsIFByb2dyZXNzQmFyLCBUaHVtYn0iLCJcbmltcG9ydCB7Rm9ybSwgU3R5bGVzLCBQcm9ncmVzc0JhciwgVGh1bWJ9IGZyb20gJy4vc3ViVmlld3MnXG5cbmludGVyZmFjZSBJRGF0YSB7XG4gICAgbWluOiBudW1iZXJcbiAgICBtYXg6IG51bWJlclxuICAgIGRlZmF1bHRWYWx1ZTogbnVtYmVyXG4gICAgcmlnaHRWYWx1ZTogbnVtYmVyXG4gICAgaXNSYW5nZTogYm9vbGVhblxuICAgIHJpZ2h0UHJvZ3Jlc3NCYXI6IGJvb2xlYW5cbn1cbmludGVyZmFjZSBJT2JzZXJ2ZXJWaWV3IHtcbiAgICB1cGRhdGVNb2RlbChhcmcwOiBzdHJpbmcsIGFyZzE6IG51bWJlcik6IHZvaWRcbn1cblxuY2xhc3MgVmlldyB7XG4gICAgcGFyZW50OiBIVE1MRWxlbWVudFxuICAgIHdyYXBwZXIhOiBIVE1MRGl2RWxlbWVudFxuXG4gICAgZm9ybTogRm9ybVxuICAgIHN0eWxlczogU3R5bGVzXG4gICAgcHJvZ3Jlc3NCYXI6IFByb2dyZXNzQmFyXG4gICAgdGh1bWI6IFRodW1iXG4gICAgb3B0aW9uczogSURhdGFcbiAgICBvYnNlcnZlcnM6IElPYnNlcnZlclZpZXdbXVxuICAgIGNvbnN0cnVjdG9yKHBhcmVudDogSFRNTEVsZW1lbnQsIGZvcm06IEZvcm0sIHN0eWxlczogU3R5bGVzLCBwcm9ncmVzc0JhcjogUHJvZ3Jlc3NCYXIsIHRodW1iOiBUaHVtYikge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudFxuICAgICAgICB0aGlzLmZvcm0gPSBmb3JtXG4gICAgICAgIHRoaXMuc3R5bGVzID0gc3R5bGVzXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSBwcm9ncmVzc0JhclxuICAgICAgICB0aGlzLnRodW1iID0gdGh1bWJcblxuICAgIC8vIGRlZmF1bHQgZGF0YVxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogMTAsXG4gICAgICAgICAgICByaWdodFZhbHVlOiA1MCxcbiAgICAgICAgICAgIGlzUmFuZ2U6IHRydWUsXG4gICAgICAgICAgICByaWdodFByb2dyZXNzQmFyOiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXVxuICAgIH1cbiAgICBzdWJzY3JpYmUob2JzZXJ2ZXI6IElPYnNlcnZlclZpZXcpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChvYnNlcnZlcilcbiAgICB9XG4gICAgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5jcmVhdGVXcmFwcGVyKClcblxuICAgICAgICB0aGlzLmZvcm0uaW5pdChcbiAgICAgICAgICAgIHRoaXMud3JhcHBlciwgXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaXNSYW5nZSwgXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubWluLCBcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tYXhcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnN0eWxlcy5pbml0KHRoaXMud3JhcHBlcilcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5jcmVhdGVQcm9ncmVzc0Jhcih0aGlzLnN0eWxlcy5zdHlsZSlcbiAgICAgICAgdGhpcy50aHVtYi5jcmVhdGVUaHVtYih0aGlzLnN0eWxlcy5zdHlsZSwgdGhpcy5vcHRpb25zLmlzUmFuZ2UpXG4gICAgICAgIFxuICAgICAgICBcblxuICAgICAgICB0aGlzLnNldElucHV0KClcbiAgICAgICAgdGhpcy5ldmVudElucHV0KClcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5iYXIub25tb3VzZWRvd24gPSBlbGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRDbGljayhlbGVtKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3R5bGVzLnRyYWNrLm9ubW91c2Vkb3duID0gZWxlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50Q2xpY2soZWxlbSlcbiAgICAgICAgfVxuICBcbiAgICB9IFxuXG4gICAgY3JlYXRlV3JhcHBlciA9ICgpID0+IHtcbiAgICAgICAgdGhpcy53cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGhpcy53cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcicpXG4gICAgICAgIHRoaXMucGFyZW50LmFwcGVuZCh0aGlzLndyYXBwZXIpXG4gICAgfVxuXG4gICAgc2V0SW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuZm9ybS5zZXRJbnB1dFZhbHVlKHRoaXMub3B0aW9ucy5pc1JhbmdlLCB0aGlzLm9wdGlvbnMuZGVmYXVsdFZhbHVlLCB0aGlzLm9wdGlvbnMucmlnaHRWYWx1ZSlcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHBsYWNlRGVmYXVsdDogbnVtYmVyID0gdGhpcy5wcm9ncmVzc0Jhci5jYWxjUGVyY2VudChcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQudmFsdWUpLCBcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQubWluKSwgXG4gICAgICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0Lm1heCkpXG4gICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IHBsYWNlUmlnaHQ6IG51bWJlciA9IHRoaXMuZm9ybS5yaWdodElucHV0ID8gXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyLmNhbGNQZXJjZW50KFxuICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0ucmlnaHRJbnB1dC52YWx1ZSksIFxuICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0ucmlnaHRJbnB1dC5taW4pLCBcbiAgICAgICAgICAgICAgICBOdW1iZXIodGhpcy5mb3JtLnJpZ2h0SW5wdXQubWF4KSkgXG4gICAgICAgICAgICAgICAgOiBOYU4gXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5zZXREZWZhdWx0KHRoaXMub3B0aW9ucy5pc1JhbmdlLCBwbGFjZURlZmF1bHQsIHBsYWNlUmlnaHQpXG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJpZ2h0UHJvZ3Jlc3NCYXIpIHsgXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnNldFJpZ2h0KHRoaXMub3B0aW9ucy5pc1JhbmdlLCBwbGFjZURlZmF1bHQpIFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50aHVtYi5wbGFjZVRodW1iKHRoaXMub3B0aW9ucy5pc1JhbmdlLCBwbGFjZURlZmF1bHQsIHBsYWNlUmlnaHQpXG5cbiAgICAgICAgXG4gICAgfVxuICAgIGV2ZW50SW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZGVmYXVsdFZhbHVlID0gTnVtYmVyKHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQudmFsdWUpXG4gICAgICAgICAgICB0aGlzLnNldElucHV0KClcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLnVwZGF0ZU1vZGVsKCdkZWZhdWx0JywgTnVtYmVyKHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQudmFsdWUpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pc1JhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm0ucmlnaHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMucmlnaHRWYWx1ZSA9IE51bWJlcih0aGlzLmZvcm0ucmlnaHRJbnB1dC52YWx1ZSlcbiAgICAgICAgICAgICAgICB0aGlzLnNldElucHV0KClcbiAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudXBkYXRlTW9kZWwoJ3JpZ2h0JywgTnVtYmVyKHRoaXMuZm9ybS5yaWdodElucHV0LnZhbHVlKSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBldmVudENsaWNrKGVsZW06IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgY29uc3QgY29vcmRzOiBET01SZWN0ID0gdGhpcy5zdHlsZXMudHJhY2suZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgY29uc3QgbGVuZ3RoOiBudW1iZXIgPSBjb29yZHMucmlnaHQgLSBjb29yZHMubGVmdFxuICAgICAgICBjb25zdCBjdXJyZW50UG9zaXRpb246IG51bWJlciA9IGVsZW0ucGFnZVggLSBjb29yZHMubGVmdFxuICAgICAgICBjb25zdCBwZXJjZW50OiBudW1iZXIgPSBjdXJyZW50UG9zaXRpb24vbGVuZ3RoICogMTAwXG5cbiAgICAgICAgY29uc3QgcGxhY2VEZWZhdWx0OiBudW1iZXIgPSB0aGlzLnByb2dyZXNzQmFyLmNhbGNQZXJjZW50KFxuICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQudmFsdWUpLCBcbiAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0Lm1pbiksIFxuICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQubWF4KSlcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgY29uc3QgbmV3VmFsdWU6IG51bWJlciA9IHRoaXMuY2FsY1ZhbHVlKHBlcmNlbnQpXG4gICAgICAgIGlmKHRoaXMub3B0aW9ucy5pc1JhbmdlICYmIG5ld1ZhbHVlID4gdGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5yaWdodElucHV0LnZhbHVlID0gU3RyaW5nKG5ld1ZhbHVlKVxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUgPSBuZXdWYWx1ZVxuICAgICAgICAgICAgdGhpcy50aHVtYi5wbGFjZVRodW1iKHRoaXMub3B0aW9ucy5pc1JhbmdlLCBwbGFjZURlZmF1bHQsIHBlcmNlbnQpXG5cbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuc2V0RGVmYXVsdCh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGxhY2VEZWZhdWx0LCBwZXJjZW50KVxuXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci51cGRhdGVNb2RlbCgncmlnaHQnLCBuZXdWYWx1ZSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQudmFsdWUgPSBTdHJpbmcobmV3VmFsdWUpXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZGVmYXVsdFZhbHVlID0gbmV3VmFsdWVcbiAgICAgICAgICAgIHRoaXMudGh1bWIucGxhY2VUaHVtYih0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGVyY2VudClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yaWdodFByb2dyZXNzQmFyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5zZXRSaWdodCh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGVyY2VudClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5zZXREZWZhdWx0KHRoaXMub3B0aW9ucy5pc1JhbmdlLCBwZXJjZW50KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci51cGRhdGVNb2RlbCgnZGVmYXVsdCcsIG5ld1ZhbHVlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYWxjVmFsdWUocGVyY2VudDogbnVtYmVyLCBcbiAgICAgICAgbWluOiBudW1iZXIgPSB0aGlzLm9wdGlvbnMubWluLCBcbiAgICAgICAgbWF4OiBudW1iZXIgPSB0aGlzLm9wdGlvbnMubWF4KTogbnVtYmVyIHtcbiAgICAgICAgICAgIGxldCBkaWFwYXNvbjogbnVtYmVyID0gbWF4IC0gbWluXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChkaWFwYXNvbiAtIChtYXggLSAoKGRpYXBhc29uKSAqIHBlcmNlbnQpIC8gMTAwKSlcbiAgICB9XG4gICAgXG4gICAgXG4gICAgXG59XG5cbmV4cG9ydCB7Vmlld31cbiJdLCJzb3VyY2VSb290IjoiIn0=