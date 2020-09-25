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
      var newValue;
      this.thumb.placeThumb(this.options.isRange, percent);
      this.progressBar.setDefault(this.options.isRange, percent);
      newValue = this.calcValue(percent);
      this.form.defaultInput.value = String(newValue);
      this.observers.forEach(function (observer) {
        observer.updateModel('default', newValue);
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4gc3luYyBcXC4odHN8c2NzcykkIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2pxdWVyeS5tYWluLmQudHMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5zY3NzIiwid2VicGFjazovLy8uL212Yy9jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL212Yy9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9tdmMvc3ViVmlld3MudHMiLCJ3ZWJwYWNrOi8vLy4vbXZjL3ZpZXcudHMiXSwibmFtZXMiOlsiaW1wb3J0QWxsIiwiciIsImtleXMiLCJmb3JFYWNoIiwicmVxdWlyZSIsIiQiLCJmbiIsInJhbmdlU2xpZGVyIiwic2V0dGluZ3MiLCJwbHVnaW4iLCJDb250cm9sbGVyIiwiTW9kZWwiLCJtaW4iLCJtYXgiLCJkZWZhdWx0VmFsdWUiLCJpbml0aWFsVmFsdWUiLCJsZWZ0VmFsdWUiLCJyaWdodFZhbHVlIiwiaXNSYW5nZSIsInJpZ2h0UHJvZ3Jlc3NCYXIiLCJWaWV3IiwiRm9ybSIsIlN0eWxlcyIsIlByb2dyZXNzQmFyIiwiVGh1bWIiLCJqUXVlcnkiLCJtb2RlbCIsInZpZXciLCJzdWJzY3JpYmUiLCJpbml0Iiwib3B0aW9ucyIsImRhdGFGb3JWaWV3Iiwib3B0aW9uIiwibmV3VmFsdWUiLCJsaW1pdFRvZ2dsZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRJbnB1dCIsIm9ic2VydmVycyIsIm9ic2VydmVyIiwicHVzaCIsInVwZGF0ZVZpZXciLCJwYXJlbnQiLCJpc0RvdWJsZSIsImNyZWF0ZUZvcm0iLCJjcmVhdGVJbnB1dCIsInNldE1pbiIsInNldE1heCIsImZvcm0iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmQiLCJkZWZhdWx0SW5wdXQiLCJ0eXBlIiwicmlnaHRJbnB1dCIsInZhbHVlIiwiTmFOIiwiU3RyaW5nIiwiY3JlYXRlU3R5bGVzIiwiY3JlYXRlVHJhY2siLCJzdHlsZSIsInRyYWNrIiwiYmFyIiwicGVyY2VudCIsInBlcmNlbnRSaWdodCIsImxlZnQiLCJyaWdodCIsInRodW1iRGVmYXVsdCIsInRodW1iUmlnaHQiLCJjbGFzc05hbWUiLCJzdHlsZXMiLCJwcm9ncmVzc0JhciIsInRodW1iIiwiY3JlYXRlV3JhcHBlciIsIndyYXBwZXIiLCJjcmVhdGVQcm9ncmVzc0JhciIsImNyZWF0ZVRodW1iIiwiZXZlbnRJbnB1dCIsIm9ubW91c2Vkb3duIiwiZWxlbSIsImV2ZW50Q2xpY2siLCJzZXRJbnB1dFZhbHVlIiwicGxhY2VEZWZhdWx0IiwiY2FsY1BlcmNlbnQiLCJOdW1iZXIiLCJwbGFjZVJpZ2h0Iiwic2V0RGVmYXVsdCIsInNldFJpZ2h0IiwicGxhY2VUaHVtYiIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1cGRhdGVNb2RlbCIsImNvb3JkcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlbmd0aCIsImN1cnJlbnRQb3NpdGlvbiIsInBhZ2VYIiwiY2FsY1ZhbHVlIiwiZGlhcGFzb24iLCJNYXRoIiwicm91bmQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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YVosT0FBbkMsRUFBNEMrQyxPQUE1QztBQUNBLFdBQUtRLFdBQUwsQ0FBaUJlLFVBQWpCLENBQTRCLEtBQUsxRCxPQUFMLENBQWFaLE9BQXpDLEVBQWtEK0MsT0FBbEQ7QUFDQWhDLGNBQVEsR0FBRyxLQUFLaUUsU0FBTCxDQUFlakMsT0FBZixDQUFYO0FBQ0EsV0FBS2pCLElBQUwsQ0FBVU0sWUFBVixDQUF1QkcsS0FBdkIsR0FBK0JFLE1BQU0sQ0FBQzFCLFFBQUQsQ0FBckM7QUFDQSxXQUFLSyxTQUFMLENBQWVuQyxPQUFmLENBQXVCLFVBQUFvQyxRQUFRLEVBQUk7QUFDL0JBLGdCQUFRLENBQUNxRCxXQUFULENBQXFCLFNBQXJCLEVBQWdDM0QsUUFBaEM7QUFDSCxPQUZEO0FBR0g7Ozs4QkFDU2dDLE8sRUFFa0M7QUFBQSxVQUR4Q3JELEdBQ3dDLHVFQUQxQixLQUFLa0IsT0FBTCxDQUFhbEIsR0FDYTtBQUFBLFVBQXhDQyxHQUF3Qyx1RUFBMUIsS0FBS2lCLE9BQUwsQ0FBYWpCLEdBQWE7QUFDcEMsVUFBSXNGLFFBQWdCLEdBQUd0RixHQUFHLEdBQUdELEdBQTdCO0FBQ0EsYUFBT3dGLElBQUksQ0FBQ0MsS0FBTCxDQUFXRixRQUFRLElBQUl0RixHQUFHLEdBQUtzRixRQUFELEdBQWFsQyxPQUFkLEdBQXlCLEdBQW5DLENBQW5CLENBQVA7QUFDUCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9qcXVlcnkubWFpbi5kLnRzXCI6IFwiLi9qcXVlcnkubWFpbi5kLnRzXCIsXG5cdFwiLi9tYWluLnNjc3NcIjogXCIuL21haW4uc2Nzc1wiLFxuXHRcIi4vbXZjL2NvbnRyb2xsZXIudHNcIjogXCIuL212Yy9jb250cm9sbGVyLnRzXCIsXG5cdFwiLi9tdmMvbW9kZWwudHNcIjogXCIuL212Yy9tb2RlbC50c1wiLFxuXHRcIi4vbXZjL3N1YlZpZXdzLnRzXCI6IFwiLi9tdmMvc3ViVmlld3MudHNcIixcblx0XCIuL212Yy92aWV3LnRzXCI6IFwiLi9tdmMvdmlldy50c1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLih0c3xzY3NzKSRcIjsiLCJmdW5jdGlvbiBpbXBvcnRBbGwocikge1xuICByLmtleXMoKS5mb3JFYWNoKHIpXG59XG5cbmltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4vJywgdHJ1ZSwgL1xcLih0c3xzY3NzKSQvKSkiLCJcbmltcG9ydCB7Rm9ybSwgU3R5bGVzLCBQcm9ncmVzc0JhciwgVGh1bWJ9IGZyb20gJy4vbXZjL3N1YlZpZXdzLnRzJ1xuaW1wb3J0IHtWaWV3fSBmcm9tICcuL212Yy92aWV3LnRzJ1xuaW1wb3J0IHtNb2RlbH0gZnJvbSAnLi9tdmMvbW9kZWwudHMnXG5pbXBvcnQge0NvbnRyb2xsZXJ9IGZyb20gJy4vbXZjL2NvbnRyb2xsZXInXG5cblxuKGZ1bmN0aW9uKCQ6IEpRdWVyeVN0YXRpYykge1xuICAgICQuZm4ucmFuZ2VTbGlkZXIgPSBmdW5jdGlvbihzZXR0aW5nczoge1xuICAgICAgICBtaW4/OiBudW1iZXJcbiAgICAgICAgbWF4PzogbnVtYmVyXG4gICAgICAgIGluaXRpYWxWYWx1ZT86IG51bWJlclxuICAgICAgICBsZWZ0VmFsdWU/OiBudW1iZXJcbiAgICAgICAgZGVmYXVsdFZhbHVlPzogbnVtYmVyXG4gICAgICAgIHJpZ2h0VmFsdWU/OiBudW1iZXJcbiAgICAgICAgaXNSYW5nZT86IGJvb2xlYW5cbiAgICAgICAgcmlnaHRQcm9ncmVzc0Jhcj86IGJvb2xlYW5cbiAgICB9KSB7XG4gICAgICAgIGNvbnN0IHBsdWdpbiA9IG5ldyBDb250cm9sbGVyKFxuICAgICAgICAgICAgbmV3IE1vZGVsKHtcbiAgICAgICAgICAgICAgICBtaW46IHNldHRpbmdzLm1pbixcbiAgICAgICAgICAgICAgICBtYXg6IHNldHRpbmdzLm1heCxcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IHNldHRpbmdzLmluaXRpYWxWYWx1ZSB8fCBzZXR0aW5ncy5sZWZ0VmFsdWUsXG4gICAgICAgICAgICAgICAgcmlnaHRWYWx1ZTogc2V0dGluZ3MucmlnaHRWYWx1ZSxcbiAgICAgICAgICAgICAgICBpc1JhbmdlOiBzZXR0aW5ncy5pc1JhbmdlLFxuICAgICAgICAgICAgICAgIHJpZ2h0UHJvZ3Jlc3NCYXI6IHNldHRpbmdzLnJpZ2h0UHJvZ3Jlc3NCYXJcbiAgICAgICAgICAgIH0pLCBcbiAgICAgICAgICAgIG5ldyBWaWV3KCBcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIG5ldyBGb3JtKCksXG4gICAgICAgICAgICAgICAgbmV3IFN0eWxlcygpLFxuICAgICAgICAgICAgICAgIG5ldyBQcm9ncmVzc0JhcigpLFxuICAgICAgICAgICAgICAgIG5ldyBUaHVtYigpIFxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIHJldHVybiBwbHVnaW5cbiAgICB9XG59KShqUXVlcnkpXG5cbiQoJyNmaXJzdC1yYW5nZS1zbGlkZXInKS5yYW5nZVNsaWRlcih7XG4gICAgaXNSYW5nZTogdHJ1ZSxcbiAgICBsZWZ0VmFsdWU6IDEwLFxuICAgIHJpZ2h0VmFsdWU6IDYwXG59KVxuJCgnI3NlY29uZC1yYW5nZS1zbGlkZXInKS5yYW5nZVNsaWRlcih7XG4gICAgaXNSYW5nZTogdHJ1ZSxcbiAgICBsZWZ0VmFsdWU6IDQwLFxuICAgIHJpZ2h0VmFsdWU6IDcwXG59KVxuJCgnI3RoaXJkLXJhbmdlLXNsaWRlcicpLnJhbmdlU2xpZGVyKHtcbiAgICBtaW46IDAsXG4gICAgbWF4OiAzMCxcbiAgICBpbml0aWFsVmFsdWU6IDIwLFxuICAgIHJpZ2h0UHJvZ3Jlc3NCYXI6IHRydWVcbn0pXG4kKCcjZm9ydGgtcmFuZ2Utc2xpZGVyJykucmFuZ2VTbGlkZXIoe1xuICAgIGluaXRpYWxWYWx1ZTogMjAsXG4gICAgcmlnaHRQcm9ncmVzc0JhcjogZmFsc2Vcbn0pXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjAxMDI4OTAwMjUxXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9ob21lL3hlbmEvUmFuZ2Utc2xpZGVyL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJyZWxvYWRBbGxcIjp0cnVlLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiaW1wb3J0IHtNb2RlbH0gZnJvbSAnLi9tb2RlbCdcbmltcG9ydCB7Vmlld30gZnJvbSAnLi92aWV3J1xuXG5jbGFzcyBDb250cm9sbGVyIHtcbiAgICBtb2RlbDogTW9kZWxcbiAgICB2aWV3OiBWaWV3XG4gICAgY29uc3RydWN0b3IobW9kZWw6IE1vZGVsLCB2aWV3OiBWaWV3KSB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbFxuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3XG4gICAgICAgIHRoaXMudmlldy5vcHRpb25zID0gdGhpcy5tb2RlbC5kYXRhRm9yVmlld1xuICAgICAgICB0aGlzLmluaXQoKSBcbiAgICB9XG4gICAgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy52aWV3LnN1YnNjcmliZSh0aGlzKVxuICAgICAgICB0aGlzLm1vZGVsLnN1YnNjcmliZSh0aGlzKVxuICAgICAgICB0aGlzLnZpZXcuaW5pdCgpXG4gICAgfVxuICAgIHVwZGF0ZU1vZGVsKG9wdGlvbjogc3RyaW5nLCBuZXdWYWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmlzUmFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwubGltaXRUb2dnbGUob3B0aW9uLCBuZXdWYWx1ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZGVmYXVsdFZhbHVlID0gbmV3VmFsdWVcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1vZGVsLmRlZmF1bHRWYWx1ZSlcbiAgICB9XG4gICAgdXBkYXRlVmlldygpIHtcbiAgICAgICAgdGhpcy52aWV3Lm9wdGlvbnMuZGVmYXVsdFZhbHVlID0gdGhpcy5tb2RlbC5kZWZhdWx0VmFsdWVcbiAgICAgICAgdGhpcy52aWV3Lm9wdGlvbnMucmlnaHRWYWx1ZSA9IHRoaXMubW9kZWwucmlnaHRWYWx1ZVxuICAgICAgICB0aGlzLnZpZXcuc2V0SW5wdXQoKVxuICAgIH1cbn1cblxuZXhwb3J0IHtDb250cm9sbGVyfSIsImludGVyZmFjZSBJRGF0YSB7XG4gICAgbWluOiBudW1iZXJcbiAgICBtYXg6IG51bWJlclxuICAgIGRlZmF1bHRWYWx1ZTogbnVtYmVyXG4gICAgcmlnaHRWYWx1ZTogbnVtYmVyXG4gICAgaXNSYW5nZTogYm9vbGVhblxuICAgIHJpZ2h0UHJvZ3Jlc3NCYXI6IGJvb2xlYW5cbn1cbmludGVyZmFjZSBJT2JzZXJ2ZXJNb2RlbCB7XG4gICAgdXBkYXRlVmlldygpOiB2b2lkXG59XG5cbmNsYXNzIE1vZGVsIHtcbiAgICBtaW46IG51bWJlclxuICAgIG1heDogbnVtYmVyXG4gICAgZGVmYXVsdFZhbHVlOiBudW1iZXJcbiAgICByaWdodFZhbHVlOiBudW1iZXJcbiAgICBpc1JhbmdlOiBib29sZWFuXG4gICAgcmlnaHRQcm9ncmVzc0JhcjogYm9vbGVhblxuICAgIGRhdGFGb3JWaWV3OiBJRGF0YVxuICAgIG9ic2VydmVyczogSU9ic2VydmVyTW9kZWxbXVxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElEYXRhKSB7XG4gICAgICAgIHRoaXMubWluID0gb3B0aW9ucy5taW4gPyBvcHRpb25zLm1pbiA6IDBcbiAgICAgICAgdGhpcy5tYXggPSBvcHRpb25zLm1heCA/IG9wdGlvbnMubWF4IDogMTAwXG4gICAgICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gb3B0aW9ucy5kZWZhdWx0VmFsdWUgPyBvcHRpb25zLmRlZmF1bHRWYWx1ZSA6IDUwXG4gICAgICAgIHRoaXMucmlnaHRWYWx1ZSA9IG9wdGlvbnMucmlnaHRWYWx1ZSA/IG9wdGlvbnMucmlnaHRWYWx1ZSA6IDYwXG4gICAgICAgIHRoaXMuaXNSYW5nZSA9IG9wdGlvbnMuaXNSYW5nZSA/IG9wdGlvbnMuaXNSYW5nZSA6IGZhbHNlXG4gICAgICAgIHRoaXMucmlnaHRQcm9ncmVzc0JhciA9IG9wdGlvbnMucmlnaHRQcm9ncmVzc0JhciA/IG9wdGlvbnMucmlnaHRQcm9ncmVzc0JhciA6IGZhbHNlXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW11cbiAgICAgICAgdGhpcy5kYXRhRm9yVmlldyA9IHtcbiAgICAgICAgICAgIG1pbjogdGhpcy5taW4sXG4gICAgICAgICAgICBtYXg6IHRoaXMubWF4LFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiB0aGlzLmRlZmF1bHRWYWx1ZSxcbiAgICAgICAgICAgIHJpZ2h0VmFsdWU6IHRoaXMucmlnaHRWYWx1ZSxcbiAgICAgICAgICAgIGlzUmFuZ2U6IHRoaXMuaXNSYW5nZSxcbiAgICAgICAgICAgIHJpZ2h0UHJvZ3Jlc3NCYXI6IHRoaXMucmlnaHRQcm9ncmVzc0JhclxuICAgICAgICB9XG4gICAgfVxuICAgIHN1YnNjcmliZShvYnNlcnZlcjogSU9ic2VydmVyTW9kZWwpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChvYnNlcnZlcilcbiAgICB9XG4gICAgbGltaXRUb2dnbGUob3B0aW9uOiBzdHJpbmcsIG5ld1ZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgc3dpdGNoIChvcHRpb24pIHtcbiAgICAgICAgICAgIGNhc2UoJ2RlZmF1bHQnKTpcblxuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA8IHRoaXMucmlnaHRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IG5ld1ZhbHVlXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51cGRhdGVWaWV3KClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FzZSgncmlnaHQnKTpcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA+IHRoaXMuZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRWYWx1ZSA9IG5ld1ZhbHVlXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51cGRhdGVWaWV3KClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59XG5cbmV4cG9ydCB7TW9kZWx9IiwiY2xhc3MgRm9ybSB7XG4gICAgZm9ybSE6IEhUTUxEaXZFbGVtZW50XG4gICAgZGVmYXVsdElucHV0ITogSFRNTElucHV0RWxlbWVudFxuICAgIHJpZ2h0SW5wdXQhOiBIVE1MSW5wdXRFbGVtZW50XG5cbiAgICBpbml0KHBhcmVudDogSFRNTERpdkVsZW1lbnQsIGlzRG91YmxlOiBib29sZWFuLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jcmVhdGVGb3JtKHBhcmVudClcbiAgICAgICAgdGhpcy5jcmVhdGVJbnB1dChpc0RvdWJsZSlcbiAgICAgICAgdGhpcy5zZXRNaW4oaXNEb3VibGUsIG1pbilcbiAgICAgICAgdGhpcy5zZXRNYXgoaXNEb3VibGUsIG1heClcbiAgICB9XG5cbiAgICBjcmVhdGVGb3JtKHBhcmVudDogSFRNTERpdkVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mb3JtID0gPEhUTUxEaXZFbGVtZW50Pihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSlcbiAgICAgICAgdGhpcy5mb3JtLmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fZm9ybScpXG4gICAgICAgIHBhcmVudC5hcHBlbmQodGhpcy5mb3JtKVxuICAgIH1cbiAgICBcbiAgICBjcmVhdGVJbnB1dChpc0RvdWJsZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAoaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQudHlwZSA9ICdyYW5nZSdcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9faW5wdXQnKSBcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9faW5wdXRfbGVmdCcpXG4gICAgICAgICAgICB0aGlzLmZvcm0uYXBwZW5kKHRoaXMuZGVmYXVsdElucHV0KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQudHlwZSA9ICdyYW5nZSdcbiAgICAgICAgICAgIHRoaXMucmlnaHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0JylcbiAgICAgICAgICAgIHRoaXMucmlnaHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0X3JpZ2h0JylcbiAgICAgICAgICAgIHRoaXMuZm9ybS5hcHBlbmQodGhpcy5yaWdodElucHV0KVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0LnR5cGUgPSAncmFuZ2UnXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0JylcbiAgICAgICAgICAgIHRoaXMuZm9ybS5hcHBlbmQodGhpcy5kZWZhdWx0SW5wdXQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0SW5wdXRWYWx1ZShpc0RvdWJsZTogYm9vbGVhbiwgdmFsdWU6IG51bWJlciwgcmlnaHRWYWx1ZTogbnVtYmVyID0gTmFOKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVmYXVsdElucHV0LnZhbHVlID0gU3RyaW5nKHZhbHVlKVxuICAgICAgICBpZiAoaXNEb3VibGUpIHsgICBcbiAgICAgICAgICAgIHRoaXMucmlnaHRJbnB1dC52YWx1ZSA9IFN0cmluZyhyaWdodFZhbHVlKVxuICAgICAgICB9XG4gICAgfVxuICAgIHNldE1pbihpc0RvdWJsZTogYm9vbGVhbiwgbWluOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQubWluID0gU3RyaW5nKG1pbilcbiAgICAgICAgaWYgKGlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQubWluID0gU3RyaW5nKG1pbilcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRNYXgoaXNEb3VibGU6IGJvb2xlYW4sIG1heDogbnVtYmVyID0gMTAwKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVmYXVsdElucHV0Lm1heCA9IFN0cmluZyhtYXgpXG4gICAgICAgIGlmIChpc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0Lm1heCA9IFN0cmluZyhtYXgpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIFN0eWxlcyB7XG4gICAgc3R5bGUhOiBIVE1MRGl2RWxlbWVudFxuICAgIHRyYWNrITogSFRNTERpdkVsZW1lbnRcblxuICAgIGluaXQocGFyZW50OiBIVE1MRGl2RWxlbWVudCkge1xuICAgICAgICB0aGlzLmNyZWF0ZVN0eWxlcyhwYXJlbnQpXG4gICAgICAgIHRoaXMuY3JlYXRlVHJhY2soKVxuICAgIH1cbiAgICBcbiAgICBjcmVhdGVTdHlsZXMocGFyZW50OiBIVE1MRGl2RWxlbWVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGhpcy5zdHlsZS5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3N0eWxlJylcbiAgICAgICAgcGFyZW50LmFwcGVuZCh0aGlzLnN0eWxlKVxuICAgIH1cbiAgICBcbiAgICBjcmVhdGVUcmFjaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50cmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRoaXMudHJhY2suY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190cmFjaycpXG4gICAgICAgIHRoaXMuc3R5bGUuYXBwZW5kKHRoaXMudHJhY2spXG4gICAgfVxufVxuXG5jbGFzcyBQcm9ncmVzc0JhciB7XG4gICAgYmFyITogSFRNTERpdkVsZW1lbnRcbiAgICBjcmVhdGVQcm9ncmVzc0JhcihwYXJlbnQ6IEhUTUxEaXZFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGhpcy5iYXIuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19wcm9ncmVzcy1iYXInKVxuICAgICAgICBwYXJlbnQuYXBwZW5kKHRoaXMuYmFyKVxuICAgIH1cbiAgICBjYWxjUGVyY2VudCh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gKCh2YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKSkgKiAxMDBcbiAgICB9XG4gICAgc2V0RGVmYXVsdChpc0RvdWJsZTogYm9vbGVhbiwgcGVyY2VudDogbnVtYmVyLCBwZXJjZW50UmlnaHQ6IG51bWJlciA9IE5hTik6IHZvaWQge1xuICAgICAgICBpZiAoaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLmxlZnQgPSBwZXJjZW50ICsgJyUnXG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5yaWdodCA9ICgxMDAgLSBwZXJjZW50UmlnaHQpICsgJyUnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5yaWdodCA9ICgxMDAgLSBwZXJjZW50KSArICclJ1xuICAgICAgICAgICAgdGhpcy5iYXIuc3R5bGUubGVmdCA9IFN0cmluZygwKVxuICAgICAgICB9XG4gICAgfVxuICAgIHNldFJpZ2h0KGlzRG91YmxlOiBib29sZWFuLCBwZXJjZW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFpc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy5iYXIuc3R5bGUubGVmdCA9IHBlcmNlbnQgKyAnJSdcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLnJpZ2h0ID0gU3RyaW5nKDApXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIFRodW1iIHtcblxuICAgIHRodW1iRGVmYXVsdCE6IEhUTUxEaXZFbGVtZW50XG4gICAgdGh1bWJSaWdodCE6IEhUTUxEaXZFbGVtZW50XG5cbiAgICBjcmVhdGVUaHVtYihwYXJlbnQ6IEhUTUxEaXZFbGVtZW50LCBpc0RvdWJsZTogYm9vbGVhbikge1xuICAgICAgICBpZihpc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYicpXG4gICAgICAgICAgICB0aGlzLnRodW1iRGVmYXVsdC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3RodW1iX2xlZnQnKVxuICAgICAgICAgICAgcGFyZW50LmFwcGVuZCh0aGlzLnRodW1iRGVmYXVsdClcblxuICAgICAgICAgICAgdGhpcy50aHVtYlJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHRoaXMudGh1bWJSaWdodC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3RodW1iJylcbiAgICAgICAgICAgIHRoaXMudGh1bWJSaWdodC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3RodW1iX3JpZ2h0JylcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmQodGhpcy50aHVtYlJpZ2h0KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQuY2xhc3NOYW1lID0gJ3JhbmdlLXNsaWRlcl9fdGh1bWInXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kKHRoaXMudGh1bWJEZWZhdWx0KVxuICAgICAgICB9XG4gICAgfVxuICAgIHBsYWNlVGh1bWIoaXNEb3VibGU6IGJvb2xlYW4sIHBlcmNlbnQ6IG51bWJlciwgcGVyY2VudFJpZ2h0OiBudW1iZXIgPSBOYU4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQuc3R5bGUubGVmdCA9IHBlcmNlbnQgKyAnJSdcbiAgICAgICAgaWYgKGlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLnRodW1iUmlnaHQuc3R5bGUucmlnaHQgPSAoMTAwIC0gcGVyY2VudFJpZ2h0KSArICclJ1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQge0Zvcm0sIFN0eWxlcywgUHJvZ3Jlc3NCYXIsIFRodW1ifSIsIlxuaW1wb3J0IHtGb3JtLCBTdHlsZXMsIFByb2dyZXNzQmFyLCBUaHVtYn0gZnJvbSAnLi9zdWJWaWV3cydcblxuaW50ZXJmYWNlIElEYXRhIHtcbiAgICBtaW46IG51bWJlclxuICAgIG1heDogbnVtYmVyXG4gICAgZGVmYXVsdFZhbHVlOiBudW1iZXJcbiAgICByaWdodFZhbHVlOiBudW1iZXJcbiAgICBpc1JhbmdlOiBib29sZWFuXG4gICAgcmlnaHRQcm9ncmVzc0JhcjogYm9vbGVhblxufVxuaW50ZXJmYWNlIElPYnNlcnZlclZpZXcge1xuICAgIHVwZGF0ZU1vZGVsKGFyZzA6IHN0cmluZywgYXJnMTogbnVtYmVyKTogdm9pZFxufVxuXG5jbGFzcyBWaWV3IHtcbiAgICBwYXJlbnQ6IEhUTUxFbGVtZW50XG4gICAgd3JhcHBlciE6IEhUTUxEaXZFbGVtZW50XG5cbiAgICBmb3JtOiBGb3JtXG4gICAgc3R5bGVzOiBTdHlsZXNcbiAgICBwcm9ncmVzc0JhcjogUHJvZ3Jlc3NCYXJcbiAgICB0aHVtYjogVGh1bWJcbiAgICBvcHRpb25zOiBJRGF0YVxuICAgIG9ic2VydmVyczogSU9ic2VydmVyVmlld1tdXG4gICAgY29uc3RydWN0b3IocGFyZW50OiBIVE1MRWxlbWVudCwgZm9ybTogRm9ybSwgc3R5bGVzOiBTdHlsZXMsIHByb2dyZXNzQmFyOiBQcm9ncmVzc0JhciwgdGh1bWI6IFRodW1iKSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50XG4gICAgICAgIHRoaXMuZm9ybSA9IGZvcm1cbiAgICAgICAgdGhpcy5zdHlsZXMgPSBzdHlsZXNcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JhciA9IHByb2dyZXNzQmFyXG4gICAgICAgIHRoaXMudGh1bWIgPSB0aHVtYlxuXG4gICAgLy8gZGVmYXVsdCBkYXRhXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiAxMCxcbiAgICAgICAgICAgIHJpZ2h0VmFsdWU6IDUwLFxuICAgICAgICAgICAgaXNSYW5nZTogdHJ1ZSxcbiAgICAgICAgICAgIHJpZ2h0UHJvZ3Jlc3NCYXI6IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9ic2VydmVycyA9IFtdXG4gICAgfVxuICAgIHN1YnNjcmliZShvYnNlcnZlcjogSU9ic2VydmVyVmlldykge1xuICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKVxuICAgIH1cbiAgICBpbml0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmNyZWF0ZVdyYXBwZXIoKVxuXG4gICAgICAgIHRoaXMuZm9ybS5pbml0KFxuICAgICAgICAgICAgdGhpcy53cmFwcGVyLCBcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pc1JhbmdlLCBcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5taW4sIFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1heFxuICAgICAgICApXG4gICAgICAgIHRoaXMuc3R5bGVzLmluaXQodGhpcy53cmFwcGVyKVxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLmNyZWF0ZVByb2dyZXNzQmFyKHRoaXMuc3R5bGVzLnN0eWxlKVxuICAgICAgICB0aGlzLnRodW1iLmNyZWF0ZVRodW1iKHRoaXMuc3R5bGVzLnN0eWxlLCB0aGlzLm9wdGlvbnMuaXNSYW5nZSlcbiAgICAgICAgXG4gICAgICAgIFxuXG4gICAgICAgIHRoaXMuc2V0SW5wdXQoKVxuICAgICAgICB0aGlzLmV2ZW50SW5wdXQoKVxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLmJhci5vbm1vdXNlZG93biA9IGVsZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5ldmVudENsaWNrKGVsZW0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdHlsZXMudHJhY2sub25tb3VzZWRvd24gPSBlbGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRDbGljayhlbGVtKVxuICAgICAgICB9XG4gIFxuICAgIH0gXG5cbiAgICBjcmVhdGVXcmFwcGVyID0gKCkgPT4ge1xuICAgICAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0aGlzLndyYXBwZXIuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyJylcbiAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kKHRoaXMud3JhcHBlcilcbiAgICB9XG5cbiAgICBzZXRJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5mb3JtLnNldElucHV0VmFsdWUodGhpcy5vcHRpb25zLmlzUmFuZ2UsIHRoaXMub3B0aW9ucy5kZWZhdWx0VmFsdWUsIHRoaXMub3B0aW9ucy5yaWdodFZhbHVlKVxuICAgICAgICBcbiAgICAgICAgY29uc3QgcGxhY2VEZWZhdWx0OiBudW1iZXIgPSB0aGlzLnByb2dyZXNzQmFyLmNhbGNQZXJjZW50KFxuICAgICAgICAgICAgICAgICAgICBOdW1iZXIodGhpcy5mb3JtLmRlZmF1bHRJbnB1dC52YWx1ZSksIFxuICAgICAgICAgICAgICAgICAgICBOdW1iZXIodGhpcy5mb3JtLmRlZmF1bHRJbnB1dC5taW4pLCBcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQubWF4KSlcbiAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgY29uc3QgcGxhY2VSaWdodDogbnVtYmVyID0gdGhpcy5mb3JtLnJpZ2h0SW5wdXQgPyBcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuY2FsY1BlcmNlbnQoXG4gICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5yaWdodElucHV0LnZhbHVlKSwgXG4gICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5yaWdodElucHV0Lm1pbiksIFxuICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0ucmlnaHRJbnB1dC5tYXgpKSBcbiAgICAgICAgICAgICAgICA6IE5hTiBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnNldERlZmF1bHQodGhpcy5vcHRpb25zLmlzUmFuZ2UsIHBsYWNlRGVmYXVsdCwgcGxhY2VSaWdodClcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmlnaHRQcm9ncmVzc0JhcikgeyBcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuc2V0UmlnaHQodGhpcy5vcHRpb25zLmlzUmFuZ2UsIHBsYWNlRGVmYXVsdCkgXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRodW1iLnBsYWNlVGh1bWIodGhpcy5vcHRpb25zLmlzUmFuZ2UsIHBsYWNlRGVmYXVsdCwgcGxhY2VSaWdodClcblxuICAgICAgICBcbiAgICB9XG4gICAgZXZlbnRJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5mb3JtLmRlZmF1bHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kZWZhdWx0VmFsdWUgPSBOdW1iZXIodGhpcy5mb3JtLmRlZmF1bHRJbnB1dC52YWx1ZSlcbiAgICAgICAgICAgIHRoaXMuc2V0SW5wdXQoKVxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIudXBkYXRlTW9kZWwoJ2RlZmF1bHQnLCBOdW1iZXIodGhpcy5mb3JtLmRlZmF1bHRJbnB1dC52YWx1ZSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlzUmFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5yaWdodElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5yaWdodFZhbHVlID0gTnVtYmVyKHRoaXMuZm9ybS5yaWdodElucHV0LnZhbHVlKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0SW5wdXQoKVxuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51cGRhdGVNb2RlbCgncmlnaHQnLCBOdW1iZXIodGhpcy5mb3JtLnJpZ2h0SW5wdXQudmFsdWUpKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIGV2ZW50Q2xpY2soZWxlbTogTW91c2VFdmVudCkge1xuICAgICAgICBsZXQgY29vcmRzOiBET01SZWN0ID0gdGhpcy5zdHlsZXMudHJhY2suZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgbGV0IGxlbmd0aDogbnVtYmVyID0gY29vcmRzLnJpZ2h0IC0gY29vcmRzLmxlZnRcbiAgICAgICAgbGV0IGN1cnJlbnRQb3NpdGlvbjogbnVtYmVyID0gZWxlbS5wYWdlWCAtIGNvb3Jkcy5sZWZ0XG4gICAgICAgIGxldCBwZXJjZW50OiBudW1iZXIgPSBjdXJyZW50UG9zaXRpb24vbGVuZ3RoICogMTAwXG4gICAgICAgIGxldCBuZXdWYWx1ZTogbnVtYmVyXG5cbiAgICAgICAgdGhpcy50aHVtYi5wbGFjZVRodW1iKHRoaXMub3B0aW9ucy5pc1JhbmdlLCBwZXJjZW50KVxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnNldERlZmF1bHQodGhpcy5vcHRpb25zLmlzUmFuZ2UsIHBlcmNlbnQpXG4gICAgICAgIG5ld1ZhbHVlID0gdGhpcy5jYWxjVmFsdWUocGVyY2VudClcbiAgICAgICAgdGhpcy5mb3JtLmRlZmF1bHRJbnB1dC52YWx1ZSA9IFN0cmluZyhuZXdWYWx1ZSlcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICBvYnNlcnZlci51cGRhdGVNb2RlbCgnZGVmYXVsdCcsIG5ld1ZhbHVlKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBjYWxjVmFsdWUocGVyY2VudDogbnVtYmVyLCBcbiAgICAgICAgbWluOiBudW1iZXIgPSB0aGlzLm9wdGlvbnMubWluLCBcbiAgICAgICAgbWF4OiBudW1iZXIgPSB0aGlzLm9wdGlvbnMubWF4KTogbnVtYmVyIHtcbiAgICAgICAgICAgIGxldCBkaWFwYXNvbjogbnVtYmVyID0gbWF4IC0gbWluXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChkaWFwYXNvbiAtIChtYXggLSAoKGRpYXBhc29uKSAqIHBlcmNlbnQpIC8gMTAwKSlcbiAgICB9XG4gICAgXG4gICAgXG59XG5cbmV4cG9ydCB7Vmlld31cbiJdLCJzb3VyY2VSb290IjoiIn0=