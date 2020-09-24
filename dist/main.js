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
	"./mvc/contoller.ts": "./mvc/contoller.ts",
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
/* harmony import */ var _mvc_subViews__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mvc/subViews */ "./mvc/subViews.ts");
/* harmony import */ var _mvc_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mvc/view */ "./mvc/view.ts");
/* harmony import */ var _mvc_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mvc/model */ "./mvc/model.ts");
/* harmony import */ var _mvc_contoller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mvc/contoller */ "./mvc/contoller.ts");





(function ($) {
  $.fn.rangeSlider = function () {
    var plugin = new _mvc_contoller__WEBPACK_IMPORTED_MODULE_3__["Controller"](new _mvc_model__WEBPACK_IMPORTED_MODULE_2__["Model"](), new _mvc_view__WEBPACK_IMPORTED_MODULE_1__["View"](this, new _mvc_subViews__WEBPACK_IMPORTED_MODULE_0__["Form"](), new _mvc_subViews__WEBPACK_IMPORTED_MODULE_0__["Styles"](), new _mvc_subViews__WEBPACK_IMPORTED_MODULE_0__["ProgressBar"](), new _mvc_subViews__WEBPACK_IMPORTED_MODULE_0__["Thumb"]()));
    return plugin;
  };
})(jQuery);

$('#first-range-slider').rangeSlider();
$('#second-range-slider').rangeSlider();

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

/***/ "./mvc/contoller.ts":
/*!**************************!*\
  !*** ./mvc/contoller.ts ***!
  \**************************/
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

var Model = function Model() {
  _classCallCheck(this, Model);

  _defineProperty(this, "min", void 0);

  _defineProperty(this, "max", void 0);

  _defineProperty(this, "defaultValue", void 0);

  _defineProperty(this, "rightValue", void 0);

  _defineProperty(this, "isRange", void 0);

  _defineProperty(this, "rightProgressBar", void 0);

  _defineProperty(this, "isOutData", void 0);

  _defineProperty(this, "dataForView", void 0);

  _defineProperty(this, "init", function () {
    console.log('from Model');
  });

  this.min = 0;
  this.max = 100;
  this.defaultValue = 60;
  this.rightValue = 50;
  this.isRange = false;
  this.rightProgressBar = false;
  this.isOutData = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4gc3luYyBcXC4odHN8c2NzcykkIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2pxdWVyeS5tYWluLmQudHMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5zY3NzIiwid2VicGFjazovLy8uL212Yy9jb250b2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbXZjL21vZGVsLnRzIiwid2VicGFjazovLy8uL212Yy9zdWJWaWV3cy50cyIsIndlYnBhY2s6Ly8vLi9tdmMvdmlldy50cyJdLCJuYW1lcyI6WyJpbXBvcnRBbGwiLCJyIiwia2V5cyIsImZvckVhY2giLCJyZXF1aXJlIiwiJCIsImZuIiwicmFuZ2VTbGlkZXIiLCJwbHVnaW4iLCJDb250cm9sbGVyIiwiTW9kZWwiLCJWaWV3IiwiRm9ybSIsIlN0eWxlcyIsIlByb2dyZXNzQmFyIiwiVGh1bWIiLCJqUXVlcnkiLCJtb2RlbCIsInZpZXciLCJzdWJzY3JpYmUiLCJpbml0Iiwib3B0aW9ucyIsImRhdGFGb3JWaWV3Iiwib3B0aW9uIiwiZGVmYXVsdFZhbHVlIiwiTnVtYmVyIiwiZm9ybSIsImRlZmF1bHRJbnB1dCIsInZhbHVlIiwicmlnaHRWYWx1ZSIsInJpZ2h0SW5wdXQiLCJjb25zb2xlIiwibG9nIiwibWluIiwibWF4IiwiaXNSYW5nZSIsInJpZ2h0UHJvZ3Jlc3NCYXIiLCJpc091dERhdGEiLCJwYXJlbnQiLCJpc0RvdWJsZSIsImNyZWF0ZUZvcm0iLCJjcmVhdGVJbnB1dCIsInNldE1pbiIsInNldE1heCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsInR5cGUiLCJOYU4iLCJTdHJpbmciLCJjcmVhdGVTdHlsZXMiLCJjcmVhdGVUcmFjayIsInN0eWxlIiwidHJhY2siLCJiYXIiLCJwZXJjZW50IiwicGVyY2VudFJpZ2h0IiwibGVmdCIsInJpZ2h0IiwidGh1bWJEZWZhdWx0IiwidGh1bWJSaWdodCIsImNsYXNzTmFtZSIsInN0eWxlcyIsInByb2dyZXNzQmFyIiwidGh1bWIiLCJjcmVhdGVXcmFwcGVyIiwid3JhcHBlciIsImNyZWF0ZVByb2dyZXNzQmFyIiwiY3JlYXRlVGh1bWIiLCJzZXRJbnB1dCIsImV2ZW50SW5wdXQiLCJzZXRJbnB1dFZhbHVlIiwicGxhY2VEZWZhdWx0IiwiY2FsY1BlcmNlbnQiLCJwbGFjZVJpZ2h0Iiwic2V0RGVmYXVsdCIsInNldFJpZ2h0IiwicGxhY2VUaHVtYiIsImFkZEV2ZW50TGlzdGVuZXIiLCJvYnNlcnZlcnMiLCJvYnNlcnZlciIsInVwZGF0ZU1vZGVsIiwicHVzaCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FB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QUcsRUFBRSxHQUZNO0FBR1hWLGtCQUFZLEVBQUUsRUFISDtBQUlYSyxnQkFBVSxFQUFFLEVBSkQ7QUFLWE0sYUFBTyxFQUFFLElBTEU7QUFNWEMsc0JBQWdCLEVBQUU7QUFOUCxLQUFmO0FBU0EsU0FBSzZDLFNBQUwsR0FBaUIsRUFBakI7QUFDSDs7Ozs4QkFDU0MsUSxFQUFxQjtBQUMzQixXQUFLRCxTQUFMLENBQWVHLElBQWYsQ0FBb0JGLFFBQXBCO0FBQ0giLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vanF1ZXJ5Lm1haW4uZC50c1wiOiBcIi4vanF1ZXJ5Lm1haW4uZC50c1wiLFxuXHRcIi4vbWFpbi5zY3NzXCI6IFwiLi9tYWluLnNjc3NcIixcblx0XCIuL212Yy9jb250b2xsZXIudHNcIjogXCIuL212Yy9jb250b2xsZXIudHNcIixcblx0XCIuL212Yy9tb2RlbC50c1wiOiBcIi4vbXZjL21vZGVsLnRzXCIsXG5cdFwiLi9tdmMvc3ViVmlld3MudHNcIjogXCIuL212Yy9zdWJWaWV3cy50c1wiLFxuXHRcIi4vbXZjL3ZpZXcudHNcIjogXCIuL212Yy92aWV3LnRzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgcmVjdXJzaXZlIFxcXFwuKHRzfHNjc3MpJFwiOyIsImZ1bmN0aW9uIGltcG9ydEFsbChyKSB7XG4gIHIua2V5cygpLmZvckVhY2gocilcbn1cblxuaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi8nLCB0cnVlLCAvXFwuKHRzfHNjc3MpJC8pKSIsImltcG9ydCB7Rm9ybSwgU3R5bGVzLCBQcm9ncmVzc0JhciwgVGh1bWJ9IGZyb20gJy4vbXZjL3N1YlZpZXdzJ1xuaW1wb3J0IHtWaWV3fSBmcm9tICcuL212Yy92aWV3J1xuaW1wb3J0IHtNb2RlbH0gZnJvbSAnLi9tdmMvbW9kZWwnXG5pbXBvcnQge0NvbnRyb2xsZXJ9IGZyb20gJy4vbXZjL2NvbnRvbGxlcidcblxuXG4oZnVuY3Rpb24oJDogSlF1ZXJ5U3RhdGljKSB7XG4gICAgJC5mbi5yYW5nZVNsaWRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBwbHVnaW4gPSBuZXcgQ29udHJvbGxlcihcbiAgICAgICAgICAgIG5ldyBNb2RlbCgpLCBcbiAgICAgICAgICAgIG5ldyBWaWV3KCBcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIG5ldyBGb3JtKCksXG4gICAgICAgICAgICAgICAgbmV3IFN0eWxlcygpLFxuICAgICAgICAgICAgICAgIG5ldyBQcm9ncmVzc0JhcigpLFxuICAgICAgICAgICAgICAgIG5ldyBUaHVtYigpIFxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIHJldHVybiBwbHVnaW5cbiAgICB9XG59KShqUXVlcnkpXG5cbiQoJyNmaXJzdC1yYW5nZS1zbGlkZXInKS5yYW5nZVNsaWRlcigpXG4kKCcjc2Vjb25kLXJhbmdlLXNsaWRlcicpLnJhbmdlU2xpZGVyKCkiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjAwOTU5MDMzMzMyXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9ob21lL3hlbmEvUmFuZ2Utc2xpZGVyL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJyZWxvYWRBbGxcIjp0cnVlLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiaW1wb3J0IHtNb2RlbH0gZnJvbSAnLi9tb2RlbCdcbmltcG9ydCB7Vmlld30gZnJvbSAnLi92aWV3J1xuXG5jbGFzcyBDb250cm9sbGVyIHtcbiAgICBtb2RlbDogTW9kZWxcbiAgICB2aWV3OiBWaWV3XG4gICAgY29uc3RydWN0b3IobW9kZWw6IE1vZGVsLCB2aWV3OiBWaWV3KSB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbFxuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3XG4gICAgICAgIHRoaXMudmlldy5vcHRpb25zID0gdGhpcy5tb2RlbC5kYXRhRm9yVmlld1xuICAgICAgICB0aGlzLmluaXQoKSBcbiAgICB9XG4gICAgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy52aWV3LnN1YnNjcmliZSh0aGlzKVxuICAgICAgICB0aGlzLnZpZXcuaW5pdCgpXG4gICAgICAgIHRoaXMubW9kZWwuaW5pdCgpICBcbiAgICB9XG4gICAgdXBkYXRlTW9kZWwob3B0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKG9wdGlvbiA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmRlZmF1bHRWYWx1ZSA9IE51bWJlcih0aGlzLnZpZXcuZm9ybS5kZWZhdWx0SW5wdXQudmFsdWUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5yaWdodFZhbHVlID0gTnVtYmVyKHRoaXMudmlldy5mb3JtLnJpZ2h0SW5wdXQudmFsdWUpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7Q29udHJvbGxlcn1cbiIsImludGVyZmFjZSBJRGF0YSB7XG4gICAgbWluOiBudW1iZXJcbiAgICBtYXg6IG51bWJlclxuICAgIGRlZmF1bHRWYWx1ZTogbnVtYmVyXG4gICAgcmlnaHRWYWx1ZTogbnVtYmVyXG4gICAgaXNSYW5nZTogYm9vbGVhblxuICAgIHJpZ2h0UHJvZ3Jlc3NCYXI6IGJvb2xlYW5cbn1cblxuY2xhc3MgTW9kZWwge1xuICAgIG1pbjogbnVtYmVyXG4gICAgbWF4OiBudW1iZXJcbiAgICBkZWZhdWx0VmFsdWU6IG51bWJlclxuICAgIHJpZ2h0VmFsdWU/OiBudW1iZXJcbiAgICBpc1JhbmdlOiBib29sZWFuXG4gICAgcmlnaHRQcm9ncmVzc0Jhcj86IGJvb2xlYW5cbiAgICBpc091dERhdGE/OiBib29sZWFuXG4gICAgZGF0YUZvclZpZXc6IElEYXRhXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubWluID0gMFxuICAgICAgICB0aGlzLm1heCA9IDEwMFxuICAgICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IDYwXG4gICAgICAgIHRoaXMucmlnaHRWYWx1ZSA9IDUwXG4gICAgICAgIHRoaXMuaXNSYW5nZSA9IGZhbHNlXG4gICAgICAgIHRoaXMucmlnaHRQcm9ncmVzc0JhciA9IGZhbHNlXG4gICAgICAgIHRoaXMuaXNPdXREYXRhID0gZmFsc2VcbiAgICAgICAgdGhpcy5kYXRhRm9yVmlldyA9IHtcbiAgICAgICAgICAgIG1pbjogdGhpcy5taW4sXG4gICAgICAgICAgICBtYXg6IHRoaXMubWF4LFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiB0aGlzLmRlZmF1bHRWYWx1ZSxcbiAgICAgICAgICAgIHJpZ2h0VmFsdWU6IHRoaXMucmlnaHRWYWx1ZSxcbiAgICAgICAgICAgIGlzUmFuZ2U6IHRoaXMuaXNSYW5nZSxcbiAgICAgICAgICAgIHJpZ2h0UHJvZ3Jlc3NCYXI6IHRoaXMucmlnaHRQcm9ncmVzc0JhclxuICAgICAgICB9XG4gICAgfVxuICAgIGluaXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdmcm9tIE1vZGVsJylcbiAgICB9XG59XG5cbmV4cG9ydCB7TW9kZWx9IiwiY2xhc3MgRm9ybSB7XG4gICAgZm9ybSE6IEhUTUxEaXZFbGVtZW50XG4gICAgZGVmYXVsdElucHV0ITogSFRNTElucHV0RWxlbWVudFxuICAgIHJpZ2h0SW5wdXQhOiBIVE1MSW5wdXRFbGVtZW50XG5cbiAgICBpbml0KHBhcmVudDogSFRNTERpdkVsZW1lbnQsIGlzRG91YmxlOiBib29sZWFuLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jcmVhdGVGb3JtKHBhcmVudClcbiAgICAgICAgdGhpcy5jcmVhdGVJbnB1dChpc0RvdWJsZSlcbiAgICAgICAgdGhpcy5zZXRNaW4oaXNEb3VibGUsIG1pbilcbiAgICAgICAgdGhpcy5zZXRNYXgoaXNEb3VibGUsIG1heClcbiAgICB9XG5cbiAgICBjcmVhdGVGb3JtKHBhcmVudDogSFRNTERpdkVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mb3JtID0gPEhUTUxEaXZFbGVtZW50Pihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSlcbiAgICAgICAgdGhpcy5mb3JtLmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fZm9ybScpXG4gICAgICAgIHBhcmVudC5hcHBlbmQodGhpcy5mb3JtKVxuICAgIH1cbiAgICBcbiAgICBjcmVhdGVJbnB1dChpc0RvdWJsZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAoaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQudHlwZSA9ICdyYW5nZSdcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9faW5wdXQnKSBcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9faW5wdXRfbGVmdCcpXG4gICAgICAgICAgICB0aGlzLmZvcm0uYXBwZW5kKHRoaXMuZGVmYXVsdElucHV0KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQudHlwZSA9ICdyYW5nZSdcbiAgICAgICAgICAgIHRoaXMucmlnaHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0JylcbiAgICAgICAgICAgIHRoaXMucmlnaHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0X3JpZ2h0JylcbiAgICAgICAgICAgIHRoaXMuZm9ybS5hcHBlbmQodGhpcy5yaWdodElucHV0KVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0LnR5cGUgPSAncmFuZ2UnXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0JylcbiAgICAgICAgICAgIHRoaXMuZm9ybS5hcHBlbmQodGhpcy5kZWZhdWx0SW5wdXQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0SW5wdXRWYWx1ZShpc0RvdWJsZTogYm9vbGVhbiwgdmFsdWU6IG51bWJlciwgcmlnaHRWYWx1ZTogbnVtYmVyID0gTmFOKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVmYXVsdElucHV0LnZhbHVlID0gU3RyaW5nKHZhbHVlKVxuICAgICAgICBpZiAoaXNEb3VibGUpIHsgICBcbiAgICAgICAgICAgIHRoaXMucmlnaHRJbnB1dC52YWx1ZSA9IFN0cmluZyhyaWdodFZhbHVlKVxuICAgICAgICB9XG4gICAgfVxuICAgIHNldE1pbihpc0RvdWJsZTogYm9vbGVhbiwgbWluOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQubWluID0gU3RyaW5nKG1pbilcbiAgICAgICAgaWYgKGlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQubWluID0gU3RyaW5nKG1pbilcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRNYXgoaXNEb3VibGU6IGJvb2xlYW4sIG1heDogbnVtYmVyID0gMTAwKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVmYXVsdElucHV0Lm1heCA9IFN0cmluZyhtYXgpXG4gICAgICAgIGlmIChpc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0Lm1heCA9IFN0cmluZyhtYXgpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIFN0eWxlcyB7XG4gICAgc3R5bGUhOiBIVE1MRGl2RWxlbWVudFxuICAgIHRyYWNrITogSFRNTERpdkVsZW1lbnRcblxuICAgIGluaXQocGFyZW50OiBIVE1MRGl2RWxlbWVudCkge1xuICAgICAgICB0aGlzLmNyZWF0ZVN0eWxlcyhwYXJlbnQpXG4gICAgICAgIHRoaXMuY3JlYXRlVHJhY2soKVxuICAgIH1cbiAgICBcbiAgICBjcmVhdGVTdHlsZXMocGFyZW50OiBIVE1MRGl2RWxlbWVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGhpcy5zdHlsZS5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3N0eWxlJylcbiAgICAgICAgcGFyZW50LmFwcGVuZCh0aGlzLnN0eWxlKVxuICAgIH1cbiAgICBcbiAgICBjcmVhdGVUcmFjaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50cmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRoaXMudHJhY2suY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190cmFjaycpXG4gICAgICAgIHRoaXMuc3R5bGUuYXBwZW5kKHRoaXMudHJhY2spXG4gICAgfVxufVxuXG5jbGFzcyBQcm9ncmVzc0JhciB7XG4gICAgYmFyITogSFRNTERpdkVsZW1lbnRcblxuICAgIGNyZWF0ZVByb2dyZXNzQmFyKHBhcmVudDogSFRNTERpdkVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5iYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0aGlzLmJhci5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3Byb2dyZXNzLWJhcicpXG4gICAgICAgIHBhcmVudC5hcHBlbmQodGhpcy5iYXIpXG4gICAgfVxuICAgIGNhbGNQZXJjZW50KHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAoKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pKSAqIDEwMFxuICAgIH1cbiAgICBzZXREZWZhdWx0KGlzRG91YmxlOiBib29sZWFuLCBwZXJjZW50OiBudW1iZXIsIHBlcmNlbnRSaWdodDogbnVtYmVyID0gTmFOKTogdm9pZCB7XG4gICAgICAgIGlmIChpc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy5iYXIuc3R5bGUubGVmdCA9IHBlcmNlbnQgKyAnJSdcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLnJpZ2h0ID0gKDEwMCAtIHBlcmNlbnRSaWdodCkgKyAnJSdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLnJpZ2h0ID0gKDEwMCAtIHBlcmNlbnQpICsgJyUnXG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5sZWZ0ID0gU3RyaW5nKDApXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0UmlnaHQoaXNEb3VibGU6IGJvb2xlYW4sIHBlcmNlbnQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAoIWlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5sZWZ0ID0gcGVyY2VudCArICclJ1xuICAgICAgICAgICAgdGhpcy5iYXIuc3R5bGUucmlnaHQgPSBTdHJpbmcoMClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgVGh1bWIge1xuXG4gICAgdGh1bWJEZWZhdWx0ITogSFRNTERpdkVsZW1lbnRcbiAgICB0aHVtYlJpZ2h0ITogSFRNTERpdkVsZW1lbnRcblxuICAgIGNyZWF0ZVRodW1iKHBhcmVudDogSFRNTERpdkVsZW1lbnQsIGlzRG91YmxlOiBib29sZWFuKSB7XG4gICAgICAgIGlmKGlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLnRodW1iRGVmYXVsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB0aGlzLnRodW1iRGVmYXVsdC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3RodW1iJylcbiAgICAgICAgICAgIHRoaXMudGh1bWJEZWZhdWx0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdGh1bWJfbGVmdCcpXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kKHRoaXMudGh1bWJEZWZhdWx0KVxuXG4gICAgICAgICAgICB0aGlzLnRodW1iUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdGhpcy50aHVtYlJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdGh1bWInKVxuICAgICAgICAgICAgdGhpcy50aHVtYlJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdGh1bWJfcmlnaHQnKVxuICAgICAgICAgICAgcGFyZW50LmFwcGVuZCh0aGlzLnRodW1iUmlnaHQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRodW1iRGVmYXVsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB0aGlzLnRodW1iRGVmYXVsdC5jbGFzc05hbWUgPSAncmFuZ2Utc2xpZGVyX190aHVtYidcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmQodGhpcy50aHVtYkRlZmF1bHQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcGxhY2VUaHVtYihpc0RvdWJsZTogYm9vbGVhbiwgcGVyY2VudDogbnVtYmVyLCBwZXJjZW50UmlnaHQ6IG51bWJlciA9IE5hTik6IHZvaWQge1xuICAgICAgICB0aGlzLnRodW1iRGVmYXVsdC5zdHlsZS5sZWZ0ID0gcGVyY2VudCArICclJ1xuICAgICAgICBpZiAoaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMudGh1bWJSaWdodC5zdHlsZS5yaWdodCA9ICgxMDAgLSBwZXJjZW50UmlnaHQpICsgJyUnXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7Rm9ybSwgU3R5bGVzLCBQcm9ncmVzc0JhciwgVGh1bWJ9XG4iLCJpbXBvcnQge0Zvcm0sIFN0eWxlcywgUHJvZ3Jlc3NCYXIsIFRodW1ifSBmcm9tICcuL3N1YlZpZXdzJ1xuXG5pbnRlcmZhY2UgSURhdGEge1xuICAgIG1pbjogbnVtYmVyXG4gICAgbWF4OiBudW1iZXJcbiAgICBkZWZhdWx0VmFsdWU6IG51bWJlclxuICAgIHJpZ2h0VmFsdWU6IG51bWJlclxuICAgIGlzUmFuZ2U6IGJvb2xlYW5cbiAgICByaWdodFByb2dyZXNzQmFyOiBib29sZWFuXG59XG5pbnRlcmZhY2UgSU9ic2VydmVyIHtcbiAgICB1cGRhdGVNb2RlbChhcmcwOiBzdHJpbmcpOiB2b2lkXG59XG5cbmNsYXNzIFZpZXcge1xuICAgIHBhcmVudDogSFRNTEVsZW1lbnRcbiAgICB3cmFwcGVyITogSFRNTERpdkVsZW1lbnRcblxuICAgIGZvcm06IEZvcm1cbiAgICBzdHlsZXM6IFN0eWxlc1xuICAgIHByb2dyZXNzQmFyOiBQcm9ncmVzc0JhclxuICAgIHRodW1iOiBUaHVtYlxuICAgIG9wdGlvbnM6IElEYXRhXG4gICAgb2JzZXJ2ZXJzOiBJT2JzZXJ2ZXJbXVxuICAgIGNvbnN0cnVjdG9yKHBhcmVudDogSFRNTEVsZW1lbnQsIGZvcm06IEZvcm0sIHN0eWxlczogU3R5bGVzLCBwcm9ncmVzc0JhcjogUHJvZ3Jlc3NCYXIsIHRodW1iOiBUaHVtYikge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudFxuICAgICAgICB0aGlzLmZvcm0gPSBmb3JtXG4gICAgICAgIHRoaXMuc3R5bGVzID0gc3R5bGVzXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSBwcm9ncmVzc0JhclxuICAgICAgICB0aGlzLnRodW1iID0gdGh1bWJcblxuICAgIC8vIGRlZmF1bHQgZGF0YVxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogMTAsXG4gICAgICAgICAgICByaWdodFZhbHVlOiA1MCxcbiAgICAgICAgICAgIGlzUmFuZ2U6IHRydWUsXG4gICAgICAgICAgICByaWdodFByb2dyZXNzQmFyOiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXVxuICAgIH1cbiAgICBzdWJzY3JpYmUob2JzZXJ2ZXI6IElPYnNlcnZlcikge1xuICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKVxuICAgIH1cbiAgICBpbml0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmNyZWF0ZVdyYXBwZXIoKVxuXG4gICAgICAgIHRoaXMuZm9ybS5pbml0KFxuICAgICAgICAgICAgdGhpcy53cmFwcGVyLCBcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pc1JhbmdlLCBcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5taW4sIFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1heFxuICAgICAgICApXG4gICAgICAgIHRoaXMuc3R5bGVzLmluaXQodGhpcy53cmFwcGVyKVxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLmNyZWF0ZVByb2dyZXNzQmFyKHRoaXMuc3R5bGVzLnN0eWxlKVxuICAgICAgICB0aGlzLnRodW1iLmNyZWF0ZVRodW1iKHRoaXMuc3R5bGVzLnN0eWxlLCB0aGlzLm9wdGlvbnMuaXNSYW5nZSlcbiAgICAgICAgXG4gICAgICAgIFxuXG4gICAgICAgIHRoaXMuc2V0SW5wdXQoKVxuICAgICAgICB0aGlzLmV2ZW50SW5wdXQoKVxuICBcbiAgICB9IFxuXG4gICAgY3JlYXRlV3JhcHBlciA9ICgpID0+IHtcbiAgICAgICAgdGhpcy53cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGhpcy53cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcicpXG4gICAgICAgIHRoaXMucGFyZW50LmFwcGVuZCh0aGlzLndyYXBwZXIpXG4gICAgfVxuXG4gICAgc2V0SW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuZm9ybS5zZXRJbnB1dFZhbHVlKHRoaXMub3B0aW9ucy5pc1JhbmdlLCB0aGlzLm9wdGlvbnMuZGVmYXVsdFZhbHVlLCB0aGlzLm9wdGlvbnMucmlnaHRWYWx1ZSlcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHBsYWNlRGVmYXVsdDogbnVtYmVyID0gdGhpcy5wcm9ncmVzc0Jhci5jYWxjUGVyY2VudChcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQudmFsdWUpLCBcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQubWluKSwgXG4gICAgICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0Lm1heCkpXG4gICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IHBsYWNlUmlnaHQ6IG51bWJlciA9IHRoaXMuZm9ybS5yaWdodElucHV0ID8gXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyLmNhbGNQZXJjZW50KFxuICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0ucmlnaHRJbnB1dC52YWx1ZSksIFxuICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0ucmlnaHRJbnB1dC5taW4pLCBcbiAgICAgICAgICAgICAgICBOdW1iZXIodGhpcy5mb3JtLnJpZ2h0SW5wdXQubWF4KSkgXG4gICAgICAgICAgICAgICAgOiBOYU4gXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5zZXREZWZhdWx0KHRoaXMub3B0aW9ucy5pc1JhbmdlLCBwbGFjZURlZmF1bHQsIHBsYWNlUmlnaHQpXG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJpZ2h0UHJvZ3Jlc3NCYXIpIHsgXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnNldFJpZ2h0KHRoaXMub3B0aW9ucy5pc1JhbmdlLCBwbGFjZURlZmF1bHQpIFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50aHVtYi5wbGFjZVRodW1iKHRoaXMub3B0aW9ucy5pc1JhbmdlLCBwbGFjZURlZmF1bHQsIHBsYWNlUmlnaHQpXG5cbiAgICAgICAgXG4gICAgfVxuICAgIGV2ZW50SW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZGVmYXVsdFZhbHVlID0gTnVtYmVyKHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQudmFsdWUpXG4gICAgICAgICAgICB0aGlzLnNldElucHV0KClcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLnVwZGF0ZU1vZGVsKCdkZWZhdWx0JylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNSYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtLnJpZ2h0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUgPSBOdW1iZXIodGhpcy5mb3JtLnJpZ2h0SW5wdXQudmFsdWUpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJbnB1dCgpXG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVwZGF0ZU1vZGVsKCdyaWdodCcpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCB7Vmlld30iXSwic291cmNlUm9vdCI6IiJ9