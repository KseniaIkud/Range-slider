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
  isRange: true
});
$('#second-range-slider').rangeSlider({
  rightProgressBar: true
});
$('#third-range-slider').rangeSlider({
  min: 10,
  max: 30,
  initialValue: 20
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Model = function Model(options) {
  _classCallCheck(this, Model);

  _defineProperty(this, "min", void 0);

  _defineProperty(this, "max", void 0);

  _defineProperty(this, "defaultValue", void 0);

  _defineProperty(this, "rightValue", void 0);

  _defineProperty(this, "isRange", void 0);

  _defineProperty(this, "rightProgressBar", void 0);

  _defineProperty(this, "dataForView", void 0);

  _defineProperty(this, "init", function () {
    console.log('from Model');
  });

  this.min = options.min ? options.min : 0;
  this.max = options.max ? options.max : 100;
  this.defaultValue = options.defaultValue ? options.defaultValue : 50;
  this.rightValue = options.rightValue ? options.rightValue : 60;
  this.isRange = options.isRange ? options.isRange : false;
  this.rightProgressBar = options.rightProgressBar ? options.rightProgressBar : false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4gc3luYyBcXC4odHN8c2NzcykkIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2pxdWVyeS5tYWluLmQudHMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5zY3NzIiwid2VicGFjazovLy8uL212Yy9jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL212Yy9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9tdmMvc3ViVmlld3MudHMiLCJ3ZWJwYWNrOi8vLy4vbXZjL3ZpZXcudHMiXSwibmFtZXMiOlsiaW1wb3J0QWxsIiwiciIsImtleXMiLCJmb3JFYWNoIiwicmVxdWlyZSIsIiQiLCJmbiIsInJhbmdlU2xpZGVyIiwic2V0dGluZ3MiLCJwbHVnaW4iLCJDb250cm9sbGVyIiwiTW9kZWwiLCJtaW4iLCJtYXgiLCJkZWZhdWx0VmFsdWUiLCJpbml0aWFsVmFsdWUiLCJsZWZ0VmFsdWUiLCJyaWdodFZhbHVlIiwiaXNSYW5nZSIsInJpZ2h0UHJvZ3Jlc3NCYXIiLCJWaWV3IiwiRm9ybSIsIlN0eWxlcyIsIlByb2dyZXNzQmFyIiwiVGh1bWIiLCJqUXVlcnkiLCJtb2RlbCIsInZpZXciLCJzdWJzY3JpYmUiLCJpbml0Iiwib3B0aW9ucyIsImRhdGFGb3JWaWV3Iiwib3B0aW9uIiwiTnVtYmVyIiwiZm9ybSIsImRlZmF1bHRJbnB1dCIsInZhbHVlIiwicmlnaHRJbnB1dCIsImNvbnNvbGUiLCJsb2ciLCJwYXJlbnQiLCJpc0RvdWJsZSIsImNyZWF0ZUZvcm0iLCJjcmVhdGVJbnB1dCIsInNldE1pbiIsInNldE1heCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsInR5cGUiLCJOYU4iLCJTdHJpbmciLCJjcmVhdGVTdHlsZXMiLCJjcmVhdGVUcmFjayIsInN0eWxlIiwidHJhY2siLCJiYXIiLCJwZXJjZW50IiwicGVyY2VudFJpZ2h0IiwibGVmdCIsInJpZ2h0IiwidGh1bWJEZWZhdWx0IiwidGh1bWJSaWdodCIsImNsYXNzTmFtZSIsInN0eWxlcyIsInByb2dyZXNzQmFyIiwidGh1bWIiLCJjcmVhdGVXcmFwcGVyIiwid3JhcHBlciIsImNyZWF0ZVByb2dyZXNzQmFyIiwiY3JlYXRlVGh1bWIiLCJzZXRJbnB1dCIsImV2ZW50SW5wdXQiLCJzZXRJbnB1dFZhbHVlIiwicGxhY2VEZWZhdWx0IiwiY2FsY1BlcmNlbnQiLCJwbGFjZVJpZ2h0Iiwic2V0RGVmYXVsdCIsInNldFJpZ2h0IiwicGxhY2VUaHVtYiIsImFkZEV2ZW50TGlzdGVuZXIiLCJvYnNlcnZlcnMiLCJvYnNlcnZlciIsInVwZGF0ZU1vZGVsIiwicHVzaCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FB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QixFQUFqQjtBQUNIOzs7OzhCQUNTQyxRLEVBQXFCO0FBQzNCLFdBQUtELFNBQUwsQ0FBZUcsSUFBZixDQUFvQkYsUUFBcEI7QUFDSCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9qcXVlcnkubWFpbi5kLnRzXCI6IFwiLi9qcXVlcnkubWFpbi5kLnRzXCIsXG5cdFwiLi9tYWluLnNjc3NcIjogXCIuL21haW4uc2Nzc1wiLFxuXHRcIi4vbXZjL2NvbnRyb2xsZXIudHNcIjogXCIuL212Yy9jb250cm9sbGVyLnRzXCIsXG5cdFwiLi9tdmMvbW9kZWwudHNcIjogXCIuL212Yy9tb2RlbC50c1wiLFxuXHRcIi4vbXZjL3N1YlZpZXdzLnRzXCI6IFwiLi9tdmMvc3ViVmlld3MudHNcIixcblx0XCIuL212Yy92aWV3LnRzXCI6IFwiLi9tdmMvdmlldy50c1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLih0c3xzY3NzKSRcIjsiLCJmdW5jdGlvbiBpbXBvcnRBbGwocikge1xuICByLmtleXMoKS5mb3JFYWNoKHIpXG59XG5cbmltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4vJywgdHJ1ZSwgL1xcLih0c3xzY3NzKSQvKSkiLCJpbXBvcnQge0Zvcm0sIFN0eWxlcywgUHJvZ3Jlc3NCYXIsIFRodW1ifSBmcm9tICcuL212Yy9zdWJWaWV3cy50cydcbmltcG9ydCB7Vmlld30gZnJvbSAnLi9tdmMvdmlldy50cydcbmltcG9ydCB7TW9kZWx9IGZyb20gJy4vbXZjL21vZGVsLnRzJ1xuaW1wb3J0IHtDb250cm9sbGVyfSBmcm9tICcuL212Yy9jb250cm9sbGVyJ1xuXG5cbihmdW5jdGlvbigkOiBKUXVlcnlTdGF0aWMpIHtcbiAgICAkLmZuLnJhbmdlU2xpZGVyID0gZnVuY3Rpb24oc2V0dGluZ3M6IHtcbiAgICAgICAgbWluPzogbnVtYmVyXG4gICAgICAgIG1heD86IG51bWJlclxuICAgICAgICBpbml0aWFsVmFsdWU/OiBudW1iZXJcbiAgICAgICAgbGVmdFZhbHVlPzogbnVtYmVyXG4gICAgICAgIGRlZmF1bHRWYWx1ZT86IG51bWJlclxuICAgICAgICByaWdodFZhbHVlPzogbnVtYmVyXG4gICAgICAgIGlzUmFuZ2U/OiBib29sZWFuXG4gICAgICAgIHJpZ2h0UHJvZ3Jlc3NCYXI/OiBib29sZWFuXG4gICAgfSkge1xuICAgICAgICBjb25zdCBwbHVnaW4gPSBuZXcgQ29udHJvbGxlcihcbiAgICAgICAgICAgIG5ldyBNb2RlbCh7XG4gICAgICAgICAgICAgICAgbWluOiBzZXR0aW5ncy5taW4sXG4gICAgICAgICAgICAgICAgbWF4OiBzZXR0aW5ncy5tYXgsXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBzZXR0aW5ncy5pbml0aWFsVmFsdWUgfHwgc2V0dGluZ3MubGVmdFZhbHVlLFxuICAgICAgICAgICAgICAgIHJpZ2h0VmFsdWU6IHNldHRpbmdzLnJpZ2h0VmFsdWUsXG4gICAgICAgICAgICAgICAgaXNSYW5nZTogc2V0dGluZ3MuaXNSYW5nZSxcbiAgICAgICAgICAgICAgICByaWdodFByb2dyZXNzQmFyOiBzZXR0aW5ncy5yaWdodFByb2dyZXNzQmFyXG4gICAgICAgICAgICB9KSwgXG4gICAgICAgICAgICBuZXcgVmlldyggXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBuZXcgRm9ybSgpLFxuICAgICAgICAgICAgICAgIG5ldyBTdHlsZXMoKSxcbiAgICAgICAgICAgICAgICBuZXcgUHJvZ3Jlc3NCYXIoKSxcbiAgICAgICAgICAgICAgICBuZXcgVGh1bWIoKSBcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICByZXR1cm4gcGx1Z2luXG4gICAgfVxufSkoalF1ZXJ5KVxuXG4kKCcjZmlyc3QtcmFuZ2Utc2xpZGVyJykucmFuZ2VTbGlkZXIoe1xuICAgIGlzUmFuZ2U6IHRydWVcbn0pXG4kKCcjc2Vjb25kLXJhbmdlLXNsaWRlcicpLnJhbmdlU2xpZGVyKHtcbiAgICByaWdodFByb2dyZXNzQmFyOiB0cnVlXG59KVxuJCgnI3RoaXJkLXJhbmdlLXNsaWRlcicpLnJhbmdlU2xpZGVyKHtcbiAgICBtaW46IDEwLFxuICAgIG1heDogMzAsXG4gICAgaW5pdGlhbFZhbHVlOiAyMCxcbn0pXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MDA5NjE3ODAxOTNcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL2hvbWUveGVuYS9SYW5nZS1zbGlkZXIvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInJlbG9hZEFsbFwiOnRydWUsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJpbXBvcnQge01vZGVsfSBmcm9tICcuL21vZGVsJ1xuaW1wb3J0IHtWaWV3fSBmcm9tICcuL3ZpZXcnXG5cbmNsYXNzIENvbnRyb2xsZXIge1xuICAgIG1vZGVsOiBNb2RlbFxuICAgIHZpZXc6IFZpZXdcbiAgICBjb25zdHJ1Y3Rvcihtb2RlbDogTW9kZWwsIHZpZXc6IFZpZXcpIHtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsXG4gICAgICAgIHRoaXMudmlldyA9IHZpZXdcbiAgICAgICAgdGhpcy52aWV3Lm9wdGlvbnMgPSB0aGlzLm1vZGVsLmRhdGFGb3JWaWV3XG4gICAgICAgIHRoaXMuaW5pdCgpIFxuICAgIH1cbiAgICBpbml0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnZpZXcuc3Vic2NyaWJlKHRoaXMpXG4gICAgICAgIHRoaXMudmlldy5pbml0KClcbiAgICAgICAgdGhpcy5tb2RlbC5pbml0KCkgIFxuICAgIH1cbiAgICB1cGRhdGVNb2RlbChvcHRpb246IHN0cmluZykge1xuICAgICAgICBpZiAob3B0aW9uID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZGVmYXVsdFZhbHVlID0gTnVtYmVyKHRoaXMudmlldy5mb3JtLmRlZmF1bHRJbnB1dC52YWx1ZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnJpZ2h0VmFsdWUgPSBOdW1iZXIodGhpcy52aWV3LmZvcm0ucmlnaHRJbnB1dC52YWx1ZSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHtDb250cm9sbGVyfSIsImludGVyZmFjZSBJRGF0YSB7XG4gICAgbWluOiBudW1iZXJcbiAgICBtYXg6IG51bWJlclxuICAgIGRlZmF1bHRWYWx1ZTogbnVtYmVyXG4gICAgcmlnaHRWYWx1ZTogbnVtYmVyXG4gICAgaXNSYW5nZTogYm9vbGVhblxuICAgIHJpZ2h0UHJvZ3Jlc3NCYXI6IGJvb2xlYW5cbn1cblxuY2xhc3MgTW9kZWwge1xuICAgIG1pbjogbnVtYmVyXG4gICAgbWF4OiBudW1iZXJcbiAgICBkZWZhdWx0VmFsdWU6IG51bWJlclxuICAgIHJpZ2h0VmFsdWU/OiBudW1iZXJcbiAgICBpc1JhbmdlOiBib29sZWFuXG4gICAgcmlnaHRQcm9ncmVzc0Jhcj86IGJvb2xlYW5cbiAgICBcbiAgICBkYXRhRm9yVmlldzogSURhdGFcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJRGF0YSkge1xuICAgICAgICB0aGlzLm1pbiA9IG9wdGlvbnMubWluID8gb3B0aW9ucy5taW4gOiAwXG4gICAgICAgIHRoaXMubWF4ID0gb3B0aW9ucy5tYXggPyBvcHRpb25zLm1heCA6IDEwMFxuICAgICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IG9wdGlvbnMuZGVmYXVsdFZhbHVlID8gb3B0aW9ucy5kZWZhdWx0VmFsdWUgOiA1MFxuICAgICAgICB0aGlzLnJpZ2h0VmFsdWUgPSBvcHRpb25zLnJpZ2h0VmFsdWUgPyBvcHRpb25zLnJpZ2h0VmFsdWUgOiA2MFxuICAgICAgICB0aGlzLmlzUmFuZ2UgPSBvcHRpb25zLmlzUmFuZ2UgPyBvcHRpb25zLmlzUmFuZ2UgOiBmYWxzZVxuICAgICAgICB0aGlzLnJpZ2h0UHJvZ3Jlc3NCYXIgPSBvcHRpb25zLnJpZ2h0UHJvZ3Jlc3NCYXIgPyBvcHRpb25zLnJpZ2h0UHJvZ3Jlc3NCYXIgOiBmYWxzZVxuICAgICAgICB0aGlzLmRhdGFGb3JWaWV3ID0ge1xuICAgICAgICAgICAgbWluOiB0aGlzLm1pbixcbiAgICAgICAgICAgIG1heDogdGhpcy5tYXgsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IHRoaXMuZGVmYXVsdFZhbHVlLFxuICAgICAgICAgICAgcmlnaHRWYWx1ZTogdGhpcy5yaWdodFZhbHVlLFxuICAgICAgICAgICAgaXNSYW5nZTogdGhpcy5pc1JhbmdlLFxuICAgICAgICAgICAgcmlnaHRQcm9ncmVzc0JhcjogdGhpcy5yaWdodFByb2dyZXNzQmFyXG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Zyb20gTW9kZWwnKVxuICAgIH1cbn1cblxuZXhwb3J0IHtNb2RlbH0iLCJjbGFzcyBGb3JtIHtcbiAgICBmb3JtITogSFRNTERpdkVsZW1lbnRcbiAgICBkZWZhdWx0SW5wdXQhOiBIVE1MSW5wdXRFbGVtZW50XG4gICAgcmlnaHRJbnB1dCE6IEhUTUxJbnB1dEVsZW1lbnRcblxuICAgIGluaXQocGFyZW50OiBIVE1MRGl2RWxlbWVudCwgaXNEb3VibGU6IGJvb2xlYW4sIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZUZvcm0ocGFyZW50KVxuICAgICAgICB0aGlzLmNyZWF0ZUlucHV0KGlzRG91YmxlKVxuICAgICAgICB0aGlzLnNldE1pbihpc0RvdWJsZSwgbWluKVxuICAgICAgICB0aGlzLnNldE1heChpc0RvdWJsZSwgbWF4KVxuICAgIH1cblxuICAgIGNyZWF0ZUZvcm0ocGFyZW50OiBIVE1MRGl2RWxlbWVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZvcm0gPSA8SFRNTERpdkVsZW1lbnQ+KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKVxuICAgICAgICB0aGlzLmZvcm0uY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19mb3JtJylcbiAgICAgICAgcGFyZW50LmFwcGVuZCh0aGlzLmZvcm0pXG4gICAgfVxuICAgIFxuICAgIGNyZWF0ZUlucHV0KGlzRG91YmxlOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGlmIChpc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC50eXBlID0gJ3JhbmdlJ1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19pbnB1dCcpIFxuICAgICAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19pbnB1dF9sZWZ0JylcbiAgICAgICAgICAgIHRoaXMuZm9ybS5hcHBlbmQodGhpcy5kZWZhdWx0SW5wdXQpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMucmlnaHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgIHRoaXMucmlnaHRJbnB1dC50eXBlID0gJ3JhbmdlJ1xuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9faW5wdXQnKVxuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9faW5wdXRfcmlnaHQnKVxuICAgICAgICAgICAgdGhpcy5mb3JtLmFwcGVuZCh0aGlzLnJpZ2h0SW5wdXQpXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQudHlwZSA9ICdyYW5nZSdcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9faW5wdXQnKVxuICAgICAgICAgICAgdGhpcy5mb3JtLmFwcGVuZCh0aGlzLmRlZmF1bHRJbnB1dClcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRJbnB1dFZhbHVlKGlzRG91YmxlOiBib29sZWFuLCB2YWx1ZTogbnVtYmVyLCByaWdodFZhbHVlOiBudW1iZXIgPSBOYU4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQudmFsdWUgPSBTdHJpbmcodmFsdWUpXG4gICAgICAgIGlmIChpc0RvdWJsZSkgeyAgIFxuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0LnZhbHVlID0gU3RyaW5nKHJpZ2h0VmFsdWUpXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0TWluKGlzRG91YmxlOiBib29sZWFuLCBtaW46IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC5taW4gPSBTdHJpbmcobWluKVxuICAgICAgICBpZiAoaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHRJbnB1dC5taW4gPSBTdHJpbmcobWluKVxuICAgICAgICB9XG4gICAgfVxuICAgIHNldE1heChpc0RvdWJsZTogYm9vbGVhbiwgbWF4OiBudW1iZXIgPSAxMDApOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQubWF4ID0gU3RyaW5nKG1heClcbiAgICAgICAgaWYgKGlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQubWF4ID0gU3RyaW5nKG1heClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgU3R5bGVzIHtcbiAgICBzdHlsZSE6IEhUTUxEaXZFbGVtZW50XG4gICAgdHJhY2shOiBIVE1MRGl2RWxlbWVudFxuXG4gICAgaW5pdChwYXJlbnQ6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuY3JlYXRlU3R5bGVzKHBhcmVudClcbiAgICAgICAgdGhpcy5jcmVhdGVUcmFjaygpXG4gICAgfVxuICAgIFxuICAgIGNyZWF0ZVN0eWxlcyhwYXJlbnQ6IEhUTUxEaXZFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0aGlzLnN0eWxlLmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fc3R5bGUnKVxuICAgICAgICBwYXJlbnQuYXBwZW5kKHRoaXMuc3R5bGUpXG4gICAgfVxuICAgIFxuICAgIGNyZWF0ZVRyYWNrKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRyYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGhpcy50cmFjay5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3RyYWNrJylcbiAgICAgICAgdGhpcy5zdHlsZS5hcHBlbmQodGhpcy50cmFjaylcbiAgICB9XG59XG5cbmNsYXNzIFByb2dyZXNzQmFyIHtcbiAgICBiYXIhOiBIVE1MRGl2RWxlbWVudFxuICAgIGNyZWF0ZVByb2dyZXNzQmFyKHBhcmVudDogSFRNTERpdkVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5iYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0aGlzLmJhci5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3Byb2dyZXNzLWJhcicpXG4gICAgICAgIHBhcmVudC5hcHBlbmQodGhpcy5iYXIpXG4gICAgfVxuICAgIGNhbGNQZXJjZW50KHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAoKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pKSAqIDEwMFxuICAgIH1cbiAgICBzZXREZWZhdWx0KGlzRG91YmxlOiBib29sZWFuLCBwZXJjZW50OiBudW1iZXIsIHBlcmNlbnRSaWdodDogbnVtYmVyID0gTmFOKTogdm9pZCB7XG4gICAgICAgIGlmIChpc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy5iYXIuc3R5bGUubGVmdCA9IHBlcmNlbnQgKyAnJSdcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLnJpZ2h0ID0gKDEwMCAtIHBlcmNlbnRSaWdodCkgKyAnJSdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLnJpZ2h0ID0gKDEwMCAtIHBlcmNlbnQpICsgJyUnXG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5sZWZ0ID0gU3RyaW5nKDApXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0UmlnaHQoaXNEb3VibGU6IGJvb2xlYW4sIHBlcmNlbnQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAoIWlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5sZWZ0ID0gcGVyY2VudCArICclJ1xuICAgICAgICAgICAgdGhpcy5iYXIuc3R5bGUucmlnaHQgPSBTdHJpbmcoMClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgVGh1bWIge1xuXG4gICAgdGh1bWJEZWZhdWx0ITogSFRNTERpdkVsZW1lbnRcbiAgICB0aHVtYlJpZ2h0ITogSFRNTERpdkVsZW1lbnRcblxuICAgIGNyZWF0ZVRodW1iKHBhcmVudDogSFRNTERpdkVsZW1lbnQsIGlzRG91YmxlOiBib29sZWFuKSB7XG4gICAgICAgIGlmKGlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLnRodW1iRGVmYXVsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB0aGlzLnRodW1iRGVmYXVsdC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3RodW1iJylcbiAgICAgICAgICAgIHRoaXMudGh1bWJEZWZhdWx0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdGh1bWJfbGVmdCcpXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kKHRoaXMudGh1bWJEZWZhdWx0KVxuXG4gICAgICAgICAgICB0aGlzLnRodW1iUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdGhpcy50aHVtYlJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdGh1bWInKVxuICAgICAgICAgICAgdGhpcy50aHVtYlJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdGh1bWJfcmlnaHQnKVxuICAgICAgICAgICAgcGFyZW50LmFwcGVuZCh0aGlzLnRodW1iUmlnaHQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRodW1iRGVmYXVsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB0aGlzLnRodW1iRGVmYXVsdC5jbGFzc05hbWUgPSAncmFuZ2Utc2xpZGVyX190aHVtYidcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmQodGhpcy50aHVtYkRlZmF1bHQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcGxhY2VUaHVtYihpc0RvdWJsZTogYm9vbGVhbiwgcGVyY2VudDogbnVtYmVyLCBwZXJjZW50UmlnaHQ6IG51bWJlciA9IE5hTik6IHZvaWQge1xuICAgICAgICB0aGlzLnRodW1iRGVmYXVsdC5zdHlsZS5sZWZ0ID0gcGVyY2VudCArICclJ1xuICAgICAgICBpZiAoaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMudGh1bWJSaWdodC5zdHlsZS5yaWdodCA9ICgxMDAgLSBwZXJjZW50UmlnaHQpICsgJyUnXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7Rm9ybSwgU3R5bGVzLCBQcm9ncmVzc0JhciwgVGh1bWJ9IiwiaW1wb3J0IHtGb3JtLCBTdHlsZXMsIFByb2dyZXNzQmFyLCBUaHVtYn0gZnJvbSAnLi9zdWJWaWV3cydcblxuaW50ZXJmYWNlIElEYXRhIHtcbiAgICBtaW46IG51bWJlclxuICAgIG1heDogbnVtYmVyXG4gICAgZGVmYXVsdFZhbHVlOiBudW1iZXJcbiAgICByaWdodFZhbHVlOiBudW1iZXJcbiAgICBpc1JhbmdlOiBib29sZWFuXG4gICAgcmlnaHRQcm9ncmVzc0JhcjogYm9vbGVhblxufVxuaW50ZXJmYWNlIElPYnNlcnZlciB7XG4gICAgdXBkYXRlTW9kZWwoYXJnMDogc3RyaW5nKTogdm9pZFxufVxuXG5jbGFzcyBWaWV3IHtcbiAgICBwYXJlbnQ6IEhUTUxFbGVtZW50XG4gICAgd3JhcHBlciE6IEhUTUxEaXZFbGVtZW50XG5cbiAgICBmb3JtOiBGb3JtXG4gICAgc3R5bGVzOiBTdHlsZXNcbiAgICBwcm9ncmVzc0JhcjogUHJvZ3Jlc3NCYXJcbiAgICB0aHVtYjogVGh1bWJcbiAgICBvcHRpb25zOiBJRGF0YVxuICAgIG9ic2VydmVyczogSU9ic2VydmVyW11cbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQ6IEhUTUxFbGVtZW50LCBmb3JtOiBGb3JtLCBzdHlsZXM6IFN0eWxlcywgcHJvZ3Jlc3NCYXI6IFByb2dyZXNzQmFyLCB0aHVtYjogVGh1bWIpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnRcbiAgICAgICAgdGhpcy5mb3JtID0gZm9ybVxuICAgICAgICB0aGlzLnN0eWxlcyA9IHN0eWxlc1xuICAgICAgICB0aGlzLnByb2dyZXNzQmFyID0gcHJvZ3Jlc3NCYXJcbiAgICAgICAgdGhpcy50aHVtYiA9IHRodW1iXG5cbiAgICAvLyBkZWZhdWx0IGRhdGFcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IDEwLFxuICAgICAgICAgICAgcmlnaHRWYWx1ZTogNTAsXG4gICAgICAgICAgICBpc1JhbmdlOiB0cnVlLFxuICAgICAgICAgICAgcmlnaHRQcm9ncmVzc0JhcjogZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW11cbiAgICB9XG4gICAgc3Vic2NyaWJlKG9ic2VydmVyOiBJT2JzZXJ2ZXIpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChvYnNlcnZlcilcbiAgICB9XG4gICAgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5jcmVhdGVXcmFwcGVyKClcblxuICAgICAgICB0aGlzLmZvcm0uaW5pdChcbiAgICAgICAgICAgIHRoaXMud3JhcHBlciwgXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaXNSYW5nZSwgXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubWluLCBcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tYXhcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnN0eWxlcy5pbml0KHRoaXMud3JhcHBlcilcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5jcmVhdGVQcm9ncmVzc0Jhcih0aGlzLnN0eWxlcy5zdHlsZSlcbiAgICAgICAgdGhpcy50aHVtYi5jcmVhdGVUaHVtYih0aGlzLnN0eWxlcy5zdHlsZSwgdGhpcy5vcHRpb25zLmlzUmFuZ2UpXG4gICAgICAgIFxuICAgICAgICBcblxuICAgICAgICB0aGlzLnNldElucHV0KClcbiAgICAgICAgdGhpcy5ldmVudElucHV0KClcbiAgXG4gICAgfSBcblxuICAgIGNyZWF0ZVdyYXBwZXIgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMud3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRoaXMud3JhcHBlci5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXInKVxuICAgICAgICB0aGlzLnBhcmVudC5hcHBlbmQodGhpcy53cmFwcGVyKVxuICAgIH1cblxuICAgIHNldElucHV0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmZvcm0uc2V0SW5wdXRWYWx1ZSh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgdGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSwgdGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBwbGFjZURlZmF1bHQ6IG51bWJlciA9IHRoaXMucHJvZ3Jlc3NCYXIuY2FsY1BlcmNlbnQoXG4gICAgICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0LnZhbHVlKSwgXG4gICAgICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0Lm1pbiksIFxuICAgICAgICAgICAgICAgICAgICBOdW1iZXIodGhpcy5mb3JtLmRlZmF1bHRJbnB1dC5tYXgpKVxuICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICBjb25zdCBwbGFjZVJpZ2h0OiBudW1iZXIgPSB0aGlzLmZvcm0ucmlnaHRJbnB1dCA/IFxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5jYWxjUGVyY2VudChcbiAgICAgICAgICAgICAgICBOdW1iZXIodGhpcy5mb3JtLnJpZ2h0SW5wdXQudmFsdWUpLCBcbiAgICAgICAgICAgICAgICBOdW1iZXIodGhpcy5mb3JtLnJpZ2h0SW5wdXQubWluKSwgXG4gICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5yaWdodElucHV0Lm1heCkpIFxuICAgICAgICAgICAgICAgIDogTmFOIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuc2V0RGVmYXVsdCh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGxhY2VEZWZhdWx0LCBwbGFjZVJpZ2h0KVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yaWdodFByb2dyZXNzQmFyKSB7IFxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5zZXRSaWdodCh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGxhY2VEZWZhdWx0KSBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGh1bWIucGxhY2VUaHVtYih0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGxhY2VEZWZhdWx0LCBwbGFjZVJpZ2h0KVxuXG4gICAgICAgIFxuICAgIH1cbiAgICBldmVudElucHV0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmZvcm0uZGVmYXVsdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSA9IE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0LnZhbHVlKVxuICAgICAgICAgICAgdGhpcy5zZXRJbnB1dCgpXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci51cGRhdGVNb2RlbCgnZGVmYXVsdCcpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlzUmFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5yaWdodElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5yaWdodFZhbHVlID0gTnVtYmVyKHRoaXMuZm9ybS5yaWdodElucHV0LnZhbHVlKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0SW5wdXQoKVxuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51cGRhdGVNb2RlbCgncmlnaHQnKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIFxufVxuXG5leHBvcnQge1ZpZXd9XG4iXSwic291cmNlUm9vdCI6IiJ9