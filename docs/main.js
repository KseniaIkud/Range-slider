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
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		"main": 0
/******/ 	};
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
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"0":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "" + ({}[chunkId]||chunkId) + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
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
__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./demo/demo */ "./demo/demo.js"));

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
/* harmony import */ var _mvc_controller_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mvc/controller.ts */ "./mvc/controller.ts");





(function ($) {
  $.fn.rangeSlider = function (settings) {
    var plugin = new _mvc_controller_ts__WEBPACK_IMPORTED_MODULE_3__["Controller"](new _mvc_model_ts__WEBPACK_IMPORTED_MODULE_2__["Model"]({
      min: settings.min,
      max: settings.max,
      defaultValue: settings.initialValue || settings.leftValue,
      rightValue: settings.rightValue,
      isRange: settings.isRange,
      rightProgressBar: settings.rightProgressBar,
      overThumbElement: settings.overThumbElement,
      step: settings.step,
      isVertical: settings.isVertical,
      isScale: settings.isScale
    }), new _mvc_view_ts__WEBPACK_IMPORTED_MODULE_1__["View"](this, new _mvc_subViews_ts__WEBPACK_IMPORTED_MODULE_0__["Form"](), new _mvc_subViews_ts__WEBPACK_IMPORTED_MODULE_0__["Styles"](), new _mvc_subViews_ts__WEBPACK_IMPORTED_MODULE_0__["ProgressBar"](), new _mvc_subViews_ts__WEBPACK_IMPORTED_MODULE_0__["Thumb"]()));
    return plugin;
  };
})(jQuery);

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
      _this.model.init();

      _this.view.options = _this.model.dataForView;

      _this.view.init();

      _this.model.subscribe(_this);

      _this.view.subscribe(_this);
    });

    this.model = model;
    this.view = view;
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
    var _this = this;

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

    _defineProperty(this, "isScale", void 0);

    _defineProperty(this, "scaleValues", void 0);

    _defineProperty(this, "observers", void 0);

    _defineProperty(this, "init", function () {
      _this.setScale();
    });

    this.min = options.min ? options.min : 0;
    this.max = options.max ? options.max : 100;
    this.defaultValue = options.defaultValue ? options.defaultValue : 50;
    this.rightValue = options.rightValue ? options.rightValue : 60;
    this.isRange = options.isRange || false;
    this.rightProgressBar = options.rightProgressBar || false;
    this.overThumbElement = options.overThumbElement || false;
    this.step = options.step ? options.step : 1;
    this.isVertical = options.isVertical || false;
    this.isScale = options.isScale || false;
    this.scaleValues = [];
    this.observers = [];
    this.dataForView = {
      min: this.min,
      max: this.max,
      defaultValue: this.defaultValue,
      rightValue: this.rightValue,
      isRange: this.isRange,
      rightProgressBar: this.rightProgressBar,
      overThumbElement: this.overThumbElement,
      isVertical: this.isVertical,
      isScale: this.isScale,
      scaleValues: this.scaleValues
    };
  }

  _createClass(Model, [{
    key: "subscribe",
    value: function subscribe(observer) {
      this.observers.push(observer);
    }
  }, {
    key: "sum",
    value: function sum(arg1, arg2) {
      return arg1 + arg2;
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
    key: "setScale",
    value: function setScale() {
      var _this2 = this;

      var allValues = [];

      for (var i = this.min; i <= this.max; i++) {
        if (i % this.step === 0) {
          allValues.push(i);
        }
      }

      if (allValues.length <= 11) {
        allValues.forEach(function (i) {
          _this2.scaleValues.push(i);
        });
      } else {
        var scaleStep = Math.round(allValues.length / 10);

        for (var _i = 0; _i < allValues.length; _i += scaleStep) {
          this.scaleValues.push(allValues[_i]);
        }
      }

      var lastValue = allValues[allValues.length - 1];

      if (!this.scaleValues.includes(lastValue)) {
        this.scaleValues.push(lastValue);
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
        this.bar.style.right = String(-1) + 'px';
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
        _this.clickOnBar(elem);
      };

      _this.styles.track.onmousedown = function (elem) {
        _this.clickOnBar(elem);
      };

      _this.eventHover();

      _this.eventActive();

      if (_this.options.isVertical) {
        _this.wrapper.classList.add('range-slider_vertical');

        if (_this.options.overThumbElement) {
          var _this$thumb$thumbOutp;

          _this.thumb.thumbOutput.classList.add('range-slider__value-thumb_vertical');

          (_this$thumb$thumbOutp = _this.thumb.thumbOutputRight) === null || _this$thumb$thumbOutp === void 0 ? void 0 : _this$thumb$thumbOutp.classList.add('range-slider__value-thumb_vertical');
        }
      }

      if (_this.options.isScale) {
        _this.createScale();
      }
    });

    _defineProperty(this, "createWrapper", function () {
      _this.wrapper = document.createElement('div');

      _this.wrapper.classList.add('range-slider');

      _this.parent.append(_this.wrapper);
    });

    _defineProperty(this, "createScale", function () {
      var scale = document.createElement('div');
      scale.classList.add('range-slider__scale');

      _this.wrapper.append(scale);

      var _loop = function _loop(i) {
        var divValue = document.createElement('div');
        divValue.classList.add('range-slider__value');
        var value = _this.options.scaleValues[i];
        divValue.textContent = String(value + ' –');
        scale.append(divValue);
        var min = _this.options.min;
        var max = _this.options.max;
        var percent = Math.round((value - min) / (max - min) * 100);
        divValue.style.left = percent + '%';
        divValue.addEventListener('click', function () {
          _this.eventClick(value);
        });
        divValue.style.marginLeft = '-' + _this.placeScale() + '%';
      };

      for (var i = 0; i < _this.options.scaleValues.length; i++) {
        _loop(i);
      }
    });

    _defineProperty(this, "placeScale", function () {
      var containerWidth = _this.wrapper.offsetWidth;
      var scaleShift = (0.42 * containerWidth + 777.8) / containerWidth;
      return scaleShift;
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
      isVertical: false,
      isScale: false,
      scaleValues: []
    };
    this.observers = [];
  }

  _createClass(View, [{
    key: "subscribe",
    value: function subscribe(observer) {
      this.observers.push(observer);
    }
  }, {
    key: "clickOnBar",
    value: function clickOnBar(elem) {
      var coords = this.styles.track.getBoundingClientRect();
      var length = coords.right - coords.left;
      var range = this.options.max - this.options.min;
      var currentPosition = elem.pageX - coords.left;
      var percent;

      if (this.options.isVertical) {
        currentPosition = elem.pageY - coords.top;
        length = coords.bottom - coords.top;

        if (length < currentPosition) {
          currentPosition = length;
        }
      }

      percent = currentPosition / length * 100;
      var newValue = Math.round(this.options.min + range * percent / 100);
      this.eventClick(newValue);
    }
  }, {
    key: "eventClick",
    value: function eventClick(newValue) {
      var halfOfBar = (this.options.rightValue + this.options.defaultValue) / 2;
      var isRightTrack = this.options.isRange && newValue > this.options.rightValue;
      var isRightBar = this.options.isRange && newValue > halfOfBar;

      if (isRightTrack || isRightBar) {
        this.options.rightValue = newValue;
        this.setInput();
        this.observers.forEach(function (observer) {
          observer.updateModel('right', newValue);
        });
        this.thumb.setThumbValue(this.options.isRange, this.options.defaultValue, this.options.rightValue);
      } else {
        this.options.defaultValue = newValue;
        this.setInput();
        this.observers.forEach(function (observer) {
          observer.updateModel('default', newValue);
        });
        this.thumb.setThumbValue(this.options.isRange, this.options.defaultValue, this.options.rightValue);
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4gc3luYyBcXC4odHN8c2NzcykkIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2pxdWVyeS5tYWluLmQudHMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5zY3NzIiwid2VicGFjazovLy8uL212Yy9jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL212Yy9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9tdmMvc3ViVmlld3MudHMiLCJ3ZWJwYWNrOi8vLy4vbXZjL3ZpZXcudHMiXSwibmFtZXMiOlsiaW1wb3J0QWxsIiwiciIsImtleXMiLCJmb3JFYWNoIiwicmVxdWlyZSIsIiQiLCJmbiIsInJhbmdlU2xpZGVyIiwic2V0dGluZ3MiLCJwbHVnaW4iLCJDb250cm9sbGVyIiwiTW9kZWwiLCJtaW4iLCJtYXgiLCJkZWZhdWx0VmFsdWUiLCJpbml0aWFsVmFsdWUiLCJsZWZ0VmFsdWUiLCJyaWdodFZhbHVlIiwiaXNSYW5nZSIsInJpZ2h0UHJvZ3Jlc3NCYXIiLCJvdmVyVGh1bWJFbGVtZW50Iiwic3RlcCIsImlzVmVydGljYWwiLCJpc1NjYWxlIiwiVmlldyIsIkZvcm0iLCJTdHlsZXMiLCJQcm9ncmVzc0JhciIsIlRodW1iIiwialF1ZXJ5IiwibW9kZWwiLCJ2aWV3IiwiaW5pdCIsIm9wdGlvbnMiLCJkYXRhRm9yVmlldyIsInN1YnNjcmliZSIsIm9wdGlvbiIsIm5ld1ZhbHVlIiwidXBkYXRlIiwic2V0SW5wdXQiLCJzZXRTY2FsZSIsInNjYWxlVmFsdWVzIiwib2JzZXJ2ZXJzIiwib2JzZXJ2ZXIiLCJwdXNoIiwiYXJnMSIsImFyZzIiLCJsaW1pdFRvZ2dsZSIsImxpbWl0U3RlcCIsImFsbFZhbHVlcyIsImkiLCJsZW5ndGgiLCJzY2FsZVN0ZXAiLCJNYXRoIiwicm91bmQiLCJsYXN0VmFsdWUiLCJpbmNsdWRlcyIsInVwZGF0ZVZpZXciLCJjb25zb2xlIiwibG9nIiwiY2FsY05lYXJlc3QiLCJyb3VuZFRvTWluIiwicGFyZW50IiwiaXNEb3VibGUiLCJjcmVhdGVGb3JtIiwiY3JlYXRlSW5wdXQiLCJzZXRNaW4iLCJzZXRNYXgiLCJmb3JtIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kIiwiZGVmYXVsdElucHV0IiwidHlwZSIsInJpZ2h0SW5wdXQiLCJ2YWx1ZSIsIk5hTiIsIlN0cmluZyIsImNyZWF0ZVN0eWxlcyIsImNyZWF0ZVRyYWNrIiwic3R5bGUiLCJ0cmFjayIsImJhciIsInBlcmNlbnQiLCJwZXJjZW50UmlnaHQiLCJsZWZ0IiwicmlnaHQiLCJ0b2dnbGVFbGVtZW50IiwiY3JlYXRlVGh1bWIiLCJjcmVhdGVUaHVtYkVsZW1lbnQiLCJ0aHVtYkRlZmF1bHQiLCJ0aHVtYlJpZ2h0Iiwic2V0VGh1bWJWYWx1ZSIsImNsYXNzTmFtZSIsInJpZ2h0UGFyZW50IiwidGh1bWJPdXRwdXRSaWdodCIsInRodW1iT3V0cHV0IiwidGV4dENvbnRlbnQiLCJzdHlsZXMiLCJwcm9ncmVzc0JhciIsInRodW1iIiwiY3JlYXRlV3JhcHBlciIsIndyYXBwZXIiLCJjcmVhdGVQcm9ncmVzc0JhciIsImV2ZW50SW5wdXQiLCJvbm1vdXNlZG93biIsImVsZW0iLCJjbGlja09uQmFyIiwiZXZlbnRIb3ZlciIsImV2ZW50QWN0aXZlIiwiY3JlYXRlU2NhbGUiLCJzY2FsZSIsImRpdlZhbHVlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Q2xpY2siLCJtYXJnaW5MZWZ0IiwicGxhY2VTY2FsZSIsImNvbnRhaW5lcldpZHRoIiwib2Zmc2V0V2lkdGgiLCJzY2FsZVNoaWZ0Iiwic2V0SW5wdXRWYWx1ZSIsInBsYWNlRGVmYXVsdCIsImNhbGNQZXJjZW50IiwiTnVtYmVyIiwicGxhY2VSaWdodCIsInNldERlZmF1bHQiLCJzZXRSaWdodCIsInBsYWNlVGh1bWIiLCJ1cGRhdGVNb2RlbCIsInJlbW92ZSIsImNvb3JkcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJhbmdlIiwiY3VycmVudFBvc2l0aW9uIiwicGFnZVgiLCJwYWdlWSIsInRvcCIsImJvdHRvbSIsImhhbGZPZkJhciIsImlzUmlnaHRUcmFjayIsImlzUmlnaHRCYXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTtRQUNBLDBDQUEwQztRQUMxQzs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0Esb0JBQW9CO1FBQ3BCO1FBQ0E7UUFDQTtRQUNBLHdCQUF3QjtRQUN4QjtRQUNBO1FBQ0EsbUJBQW1CLDZCQUE2QjtRQUNoRDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsbUJBQW1CLDhCQUE4QjtRQUNqRDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBLEtBQUs7UUFDTDs7UUFFQTs7UUFFQTtRQUNBLGlDQUFpQzs7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QUFMLENBQWFmLE9BQXRDLEVBQ0ksS0FBS2UsT0FBTCxDQUFhbkIsWUFEakIsRUFDK0IsS0FBS21CLE9BQUwsQ0FBYWhCLFVBRDVDO0FBRUgsT0FSRCxNQVFPO0FBQ0gsYUFBS2dCLE9BQUwsQ0FBYW5CLFlBQWIsR0FBNEJ1QixRQUE1QjtBQUNBLGFBQUtFLFFBQUw7QUFDQSxhQUFLRyxTQUFMLENBQWV2QyxPQUFmLENBQXVCLFVBQUF3QyxRQUFRLEVBQUk7QUFDL0JBLGtCQUFRLENBQUN1RixXQUFULENBQXFCLFNBQXJCLEVBQWdDN0YsUUFBaEM7QUFDSCxTQUZEO0FBR0EsYUFBS2lFLEtBQUwsQ0FBV1IsYUFBWCxDQUF5QixLQUFLN0QsT0FBTCxDQUFhZixPQUF0QyxFQUNJLEtBQUtlLE9BQUwsQ0FBYW5CLFlBRGpCLEVBQytCLEtBQUttQixPQUFMLENBQWFoQixVQUQ1QztBQUVIO0FBQ0oiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIENTUyBjaHVua3NcbiBcdHZhciBpbnN0YWxsZWRDc3NDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gc2NyaXB0IHBhdGggZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIGpzb25wU2NyaXB0U3JjKGNodW5rSWQpIHtcbiBcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIlxuIFx0fVxuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4gQ1NTIGxvYWRpbmdcbiBcdFx0dmFyIGNzc0NodW5rcyA9IHtcIjBcIjoxfTtcbiBcdFx0aWYoaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdKSBwcm9taXNlcy5wdXNoKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSk7XG4gXHRcdGVsc2UgaWYoaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdICE9PSAwICYmIGNzc0NodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHR2YXIgaHJlZiA9IFwiXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuY3NzXCI7XG4gXHRcdFx0XHR2YXIgZnVsbGhyZWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBocmVmO1xuIFx0XHRcdFx0dmFyIGV4aXN0aW5nTGlua1RhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpbmtcIik7XG4gXHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZXhpc3RpbmdMaW5rVGFncy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgdGFnID0gZXhpc3RpbmdMaW5rVGFnc1tpXTtcbiBcdFx0XHRcdFx0dmFyIGRhdGFIcmVmID0gdGFnLmdldEF0dHJpYnV0ZShcImRhdGEtaHJlZlwiKSB8fCB0YWcuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcbiBcdFx0XHRcdFx0aWYodGFnLnJlbCA9PT0gXCJzdHlsZXNoZWV0XCIgJiYgKGRhdGFIcmVmID09PSBocmVmIHx8IGRhdGFIcmVmID09PSBmdWxsaHJlZikpIHJldHVybiByZXNvbHZlKCk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHR2YXIgZXhpc3RpbmdTdHlsZVRhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInN0eWxlXCIpO1xuIFx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nU3R5bGVUYWdzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdHZhciB0YWcgPSBleGlzdGluZ1N0eWxlVGFnc1tpXTtcbiBcdFx0XHRcdFx0dmFyIGRhdGFIcmVmID0gdGFnLmdldEF0dHJpYnV0ZShcImRhdGEtaHJlZlwiKTtcbiBcdFx0XHRcdFx0aWYoZGF0YUhyZWYgPT09IGhyZWYgfHwgZGF0YUhyZWYgPT09IGZ1bGxocmVmKSByZXR1cm4gcmVzb2x2ZSgpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0dmFyIGxpbmtUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiBcdFx0XHRcdGxpbmtUYWcucmVsID0gXCJzdHlsZXNoZWV0XCI7XG4gXHRcdFx0XHRsaW5rVGFnLnR5cGUgPSBcInRleHQvY3NzXCI7XG4gXHRcdFx0XHRsaW5rVGFnLm9ubG9hZCA9IHJlc29sdmU7XG4gXHRcdFx0XHRsaW5rVGFnLm9uZXJyb3IgPSBmdW5jdGlvbihldmVudCkge1xuIFx0XHRcdFx0XHR2YXIgcmVxdWVzdCA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjIHx8IGZ1bGxocmVmO1xuIFx0XHRcdFx0XHR2YXIgZXJyID0gbmV3IEVycm9yKFwiTG9hZGluZyBDU1MgY2h1bmsgXCIgKyBjaHVua0lkICsgXCIgZmFpbGVkLlxcbihcIiArIHJlcXVlc3QgKyBcIilcIik7XG4gXHRcdFx0XHRcdGVyci5jb2RlID0gXCJDU1NfQ0hVTktfTE9BRF9GQUlMRURcIjtcbiBcdFx0XHRcdFx0ZXJyLnJlcXVlc3QgPSByZXF1ZXN0O1xuIFx0XHRcdFx0XHRkZWxldGUgaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdXG4gXHRcdFx0XHRcdGxpbmtUYWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsaW5rVGFnKVxuIFx0XHRcdFx0XHRyZWplY3QoZXJyKTtcbiBcdFx0XHRcdH07XG4gXHRcdFx0XHRsaW5rVGFnLmhyZWYgPSBmdWxsaHJlZjtcblxuIFx0XHRcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XG4gXHRcdFx0XHRoZWFkLmFwcGVuZENoaWxkKGxpbmtUYWcpO1xuIFx0XHRcdH0pLnRoZW4oZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHRcdH0pKTtcbiBcdFx0fVxuXG4gXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuIFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdFx0dmFyIG9uU2NyaXB0Q29tcGxldGU7XG5cbiBcdFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c2NyaXB0LnNyYyA9IGpzb25wU2NyaXB0U3JjKGNodW5rSWQpO1xuXG4gXHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG4gXHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcbiBcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiBcdFx0XHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuIFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRcdFx0aWYoY2h1bmsgIT09IDApIHtcbiBcdFx0XHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcbiBcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuIFx0XHRcdFx0XHRvblNjcmlwdENvbXBsZXRlKHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KTtcbiBcdFx0XHRcdH0sIDEyMDAwMCk7XG4gXHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vanF1ZXJ5Lm1haW4uZC50c1wiOiBcIi4vanF1ZXJ5Lm1haW4uZC50c1wiLFxuXHRcIi4vbWFpbi5zY3NzXCI6IFwiLi9tYWluLnNjc3NcIixcblx0XCIuL212Yy9jb250cm9sbGVyLnRzXCI6IFwiLi9tdmMvY29udHJvbGxlci50c1wiLFxuXHRcIi4vbXZjL21vZGVsLnRzXCI6IFwiLi9tdmMvbW9kZWwudHNcIixcblx0XCIuL212Yy9zdWJWaWV3cy50c1wiOiBcIi4vbXZjL3N1YlZpZXdzLnRzXCIsXG5cdFwiLi9tdmMvdmlldy50c1wiOiBcIi4vbXZjL3ZpZXcudHNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgXFxcXC4odHN8c2NzcykkXCI7IiwiZnVuY3Rpb24gaW1wb3J0QWxsKHIpIHtcbiAgci5rZXlzKCkuZm9yRWFjaChyKVxufVxuXG5pbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuLycsIHRydWUsIC9cXC4odHN8c2NzcykkLykpXG5pbXBvcnQgKCcuL2RlbW8vZGVtbycpXG5cbiIsIlxuaW1wb3J0IHtGb3JtLCBTdHlsZXMsIFByb2dyZXNzQmFyLCBUaHVtYn0gZnJvbSAnLi9tdmMvc3ViVmlld3MudHMnXG5pbXBvcnQge1ZpZXd9IGZyb20gJy4vbXZjL3ZpZXcudHMnXG5pbXBvcnQge01vZGVsfSBmcm9tICcuL212Yy9tb2RlbC50cydcbmltcG9ydCB7Q29udHJvbGxlcn0gZnJvbSAnLi9tdmMvY29udHJvbGxlci50cydcblxuXG4oZnVuY3Rpb24oJDogSlF1ZXJ5U3RhdGljKSB7XG4gICAgJC5mbi5yYW5nZVNsaWRlciA9IGZ1bmN0aW9uKHNldHRpbmdzOiB7XG4gICAgICAgIG1pbj86IG51bWJlclxuICAgICAgICBtYXg/OiBudW1iZXJcbiAgICAgICAgaW5pdGlhbFZhbHVlPzogbnVtYmVyXG4gICAgICAgIGxlZnRWYWx1ZT86IG51bWJlclxuICAgICAgICBkZWZhdWx0VmFsdWU/OiBudW1iZXJcbiAgICAgICAgcmlnaHRWYWx1ZT86IG51bWJlclxuICAgICAgICBpc1JhbmdlPzogYm9vbGVhblxuICAgICAgICByaWdodFByb2dyZXNzQmFyPzogYm9vbGVhblxuICAgICAgICBvdmVyVGh1bWJFbGVtZW50PzogYm9vbGVhblxuICAgICAgICBzdGVwPzogbnVtYmVyXG4gICAgICAgIGlzVmVydGljYWw/OiBib29sZWFuXG4gICAgICAgIGlzU2NhbGU/OiBib29sZWFuXG4gICAgfSkge1xuICAgICAgICBjb25zdCBwbHVnaW4gPSBuZXcgQ29udHJvbGxlcihcbiAgICAgICAgICAgIG5ldyBNb2RlbCh7XG4gICAgICAgICAgICAgICAgbWluOiBzZXR0aW5ncy5taW4sXG4gICAgICAgICAgICAgICAgbWF4OiBzZXR0aW5ncy5tYXgsXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBzZXR0aW5ncy5pbml0aWFsVmFsdWUgfHwgc2V0dGluZ3MubGVmdFZhbHVlLFxuICAgICAgICAgICAgICAgIHJpZ2h0VmFsdWU6IHNldHRpbmdzLnJpZ2h0VmFsdWUsXG4gICAgICAgICAgICAgICAgaXNSYW5nZTogc2V0dGluZ3MuaXNSYW5nZSxcbiAgICAgICAgICAgICAgICByaWdodFByb2dyZXNzQmFyOiBzZXR0aW5ncy5yaWdodFByb2dyZXNzQmFyLFxuICAgICAgICAgICAgICAgIG92ZXJUaHVtYkVsZW1lbnQ6IHNldHRpbmdzLm92ZXJUaHVtYkVsZW1lbnQsXG4gICAgICAgICAgICAgICAgc3RlcDogc2V0dGluZ3Muc3RlcCxcbiAgICAgICAgICAgICAgICBpc1ZlcnRpY2FsOiBzZXR0aW5ncy5pc1ZlcnRpY2FsLFxuICAgICAgICAgICAgICAgIGlzU2NhbGU6IHNldHRpbmdzLmlzU2NhbGVcbiAgICAgICAgICAgIH0pLCBcbiAgICAgICAgICAgIG5ldyBWaWV3KCBcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIG5ldyBGb3JtKCksXG4gICAgICAgICAgICAgICAgbmV3IFN0eWxlcygpLFxuICAgICAgICAgICAgICAgIG5ldyBQcm9ncmVzc0JhcigpLFxuICAgICAgICAgICAgICAgIG5ldyBUaHVtYigpIFxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIHJldHVybiBwbHVnaW5cbiAgICB9XG59KShqUXVlcnkpXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MDIzNTI2NjY5MDhcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL2hvbWUveGVuYS9SYW5nZS1zbGlkZXIvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInJlbG9hZEFsbFwiOnRydWUsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJpbXBvcnQge01vZGVsfSBmcm9tICcuL21vZGVsJ1xuaW1wb3J0IHtWaWV3fSBmcm9tICcuL3ZpZXcnXG5cbmNsYXNzIENvbnRyb2xsZXIge1xuICAgIG1vZGVsOiBNb2RlbFxuICAgIHZpZXc6IFZpZXdcbiAgICBjb25zdHJ1Y3Rvcihtb2RlbDogTW9kZWwsIHZpZXc6IFZpZXcpIHtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsXG4gICAgICAgIHRoaXMudmlldyA9IHZpZXdcbiAgICAgICAgXG4gICAgICAgIHRoaXMuaW5pdCgpIFxuICAgIH1cbiAgICBpbml0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLm1vZGVsLmluaXQoKVxuICAgICAgICB0aGlzLnZpZXcub3B0aW9ucyA9IHRoaXMubW9kZWwuZGF0YUZvclZpZXdcbiAgICAgICAgdGhpcy52aWV3LmluaXQoKVxuXG4gICAgICAgIFxuICAgICAgICB0aGlzLm1vZGVsLnN1YnNjcmliZSh0aGlzKVxuICAgICAgICB0aGlzLnZpZXcuc3Vic2NyaWJlKHRoaXMpXG4gICAgICAgIFxuICAgIH1cbiAgICB1cGRhdGVNb2RlbChvcHRpb246IHN0cmluZywgbmV3VmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLm1vZGVsLnVwZGF0ZShvcHRpb24sIG5ld1ZhbHVlKVxuICAgIH1cbiAgICB1cGRhdGVWaWV3KCkge1xuICAgICAgICB0aGlzLnZpZXcub3B0aW9ucy5kZWZhdWx0VmFsdWUgPSB0aGlzLm1vZGVsLmRlZmF1bHRWYWx1ZVxuICAgICAgICB0aGlzLnZpZXcub3B0aW9ucy5yaWdodFZhbHVlID0gdGhpcy5tb2RlbC5yaWdodFZhbHVlXG4gICAgICAgIHRoaXMudmlldy5zZXRJbnB1dCgpXG4gICAgfVxufVxuXG5leHBvcnQge0NvbnRyb2xsZXJ9IiwiaW50ZXJmYWNlIElEYXRhIHtcbiAgICBtaW46IG51bWJlclxuICAgIG1heDogbnVtYmVyXG4gICAgZGVmYXVsdFZhbHVlOiBudW1iZXJcbiAgICByaWdodFZhbHVlOiBudW1iZXJcbiAgICBpc1JhbmdlOiBib29sZWFuXG4gICAgcmlnaHRQcm9ncmVzc0JhcjogYm9vbGVhblxuICAgIG92ZXJUaHVtYkVsZW1lbnQ6IGJvb2xlYW5cbiAgICBpc1ZlcnRpY2FsOiBib29sZWFuXG4gICAgc3RlcD86IG51bWJlclxuICAgIGlzU2NhbGU6IGJvb2xlYW5cbiAgICBzY2FsZVZhbHVlczogbnVtYmVyW11cbn1cbmludGVyZmFjZSBJT2JzZXJ2ZXJNb2RlbCB7XG4gICAgdXBkYXRlVmlldygpOiB2b2lkXG59XG5cbmNsYXNzIE1vZGVsIHtcbiAgICBtaW46IG51bWJlclxuICAgIG1heDogbnVtYmVyXG4gICAgZGVmYXVsdFZhbHVlOiBudW1iZXJcbiAgICByaWdodFZhbHVlOiBudW1iZXJcbiAgICBpc1JhbmdlOiBib29sZWFuXG4gICAgcmlnaHRQcm9ncmVzc0JhcjogYm9vbGVhblxuICAgIG92ZXJUaHVtYkVsZW1lbnQ6IGJvb2xlYW5cbiAgICBkYXRhRm9yVmlldzogSURhdGFcbiAgICBzdGVwOiBudW1iZXJcbiAgICBpc1ZlcnRpY2FsOiBib29sZWFuXG4gICAgaXNTY2FsZTogYm9vbGVhblxuICAgIHNjYWxlVmFsdWVzOiBudW1iZXJbXVxuICAgIG9ic2VydmVyczogSU9ic2VydmVyTW9kZWxbXVxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElEYXRhKSB7XG4gICAgICAgIHRoaXMubWluID0gb3B0aW9ucy5taW4gPyBvcHRpb25zLm1pbiA6IDBcbiAgICAgICAgdGhpcy5tYXggPSBvcHRpb25zLm1heCA/IG9wdGlvbnMubWF4IDogMTAwXG4gICAgICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gb3B0aW9ucy5kZWZhdWx0VmFsdWUgPyBvcHRpb25zLmRlZmF1bHRWYWx1ZSA6IDUwXG4gICAgICAgIHRoaXMucmlnaHRWYWx1ZSA9IG9wdGlvbnMucmlnaHRWYWx1ZSA/IG9wdGlvbnMucmlnaHRWYWx1ZSA6IDYwXG4gICAgICAgIHRoaXMuaXNSYW5nZSA9IG9wdGlvbnMuaXNSYW5nZSB8fCBmYWxzZVxuICAgICAgICB0aGlzLnJpZ2h0UHJvZ3Jlc3NCYXIgPSBvcHRpb25zLnJpZ2h0UHJvZ3Jlc3NCYXIgfHwgZmFsc2VcbiAgICAgICAgdGhpcy5vdmVyVGh1bWJFbGVtZW50ID0gb3B0aW9ucy5vdmVyVGh1bWJFbGVtZW50IHx8IGZhbHNlXG4gICAgICAgIHRoaXMuc3RlcCA9IG9wdGlvbnMuc3RlcCA/IG9wdGlvbnMuc3RlcCA6IDFcbiAgICAgICAgdGhpcy5pc1ZlcnRpY2FsID0gb3B0aW9ucy5pc1ZlcnRpY2FsIHx8IGZhbHNlXG4gICAgICAgIHRoaXMuaXNTY2FsZSA9IG9wdGlvbnMuaXNTY2FsZSB8fCBmYWxzZVxuICAgICAgICB0aGlzLnNjYWxlVmFsdWVzID0gW11cbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXVxuICAgICAgICB0aGlzLmRhdGFGb3JWaWV3ID0ge1xuICAgICAgICAgICAgbWluOiB0aGlzLm1pbixcbiAgICAgICAgICAgIG1heDogdGhpcy5tYXgsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IHRoaXMuZGVmYXVsdFZhbHVlLFxuICAgICAgICAgICAgcmlnaHRWYWx1ZTogdGhpcy5yaWdodFZhbHVlLFxuICAgICAgICAgICAgaXNSYW5nZTogdGhpcy5pc1JhbmdlLFxuICAgICAgICAgICAgcmlnaHRQcm9ncmVzc0JhcjogdGhpcy5yaWdodFByb2dyZXNzQmFyLFxuICAgICAgICAgICAgb3ZlclRodW1iRWxlbWVudDogdGhpcy5vdmVyVGh1bWJFbGVtZW50LFxuICAgICAgICAgICAgaXNWZXJ0aWNhbDogdGhpcy5pc1ZlcnRpY2FsLFxuICAgICAgICAgICAgaXNTY2FsZTogdGhpcy5pc1NjYWxlLFxuICAgICAgICAgICAgc2NhbGVWYWx1ZXM6IHRoaXMuc2NhbGVWYWx1ZXNcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdWJzY3JpYmUob2JzZXJ2ZXI6IElPYnNlcnZlck1vZGVsKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpXG4gICAgfVxuICAgIGluaXQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U2NhbGUoKVxuICAgIH1cbiAgICBzdW0oYXJnMTogbnVtYmVyLCBhcmcyOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIGFyZzEgKyBhcmcyXG4gICAgfVxuICAgIHVwZGF0ZShvcHRpb246IHN0cmluZywgbmV3VmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmxpbWl0VG9nZ2xlKG9wdGlvbiwgbmV3VmFsdWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxpbWl0U3RlcChuZXdWYWx1ZSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRTY2FsZSgpIHtcbiAgICAgICAgbGV0IGFsbFZhbHVlczogbnVtYmVyW10gPSBbXVxuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gdGhpcy5taW47IGkgPD0gdGhpcy5tYXg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgJSB0aGlzLnN0ZXAgPT09IDApIHtcbiAgICAgICAgICAgICAgICBhbGxWYWx1ZXMucHVzaChpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhbGxWYWx1ZXMubGVuZ3RoIDw9IDExKSB7XG4gICAgICAgICAgICBhbGxWYWx1ZXMuZm9yRWFjaChpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjYWxlVmFsdWVzLnB1c2goaSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgc2NhbGVTdGVwID0gTWF0aC5yb3VuZChhbGxWYWx1ZXMubGVuZ3RoIC8gMTApXG4gICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgYWxsVmFsdWVzLmxlbmd0aDsgaSs9c2NhbGVTdGVwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2FsZVZhbHVlcy5wdXNoKGFsbFZhbHVlc1tpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgbGFzdFZhbHVlOiBudW1iZXIgPSBhbGxWYWx1ZXNbYWxsVmFsdWVzLmxlbmd0aCAtIDFdXG4gICAgICAgIGlmICghdGhpcy5zY2FsZVZhbHVlcy5pbmNsdWRlcyhsYXN0VmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLnNjYWxlVmFsdWVzLnB1c2gobGFzdFZhbHVlKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICBsaW1pdFRvZ2dsZShvcHRpb246IHN0cmluZywgbmV3VmFsdWU6IG51bWJlcikge1xuICAgICAgICBzd2l0Y2ggKG9wdGlvbikge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXNlKCdkZWZhdWx0Jyk6XG4gICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlIDwgdGhpcy5yaWdodFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGltaXRTdGVwKG5ld1ZhbHVlKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudXBkYXRlVmlldygpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UoJ3JpZ2h0Jyk6XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUgPiB0aGlzLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpbWl0U3RlcChuZXdWYWx1ZSwgJ3JpZ2h0JylcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ9Cw0LvRj9GA0LzQsCcpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudXBkYXRlVmlldygpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIGxpbWl0U3RlcChuZXdWYWx1ZTogbnVtYmVyLCBvcHRpb246IHN0cmluZyA9ICdkZWZhdWx0Jykge1xuICAgICAgICBzd2l0Y2gob3B0aW9uKSB7XG4gICAgICAgICAgICBjYXNlKCdkZWZhdWx0Jyk6IFxuICAgICAgICAgICAgaWYobmV3VmFsdWUgJSB0aGlzLnN0ZXAgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IG5ld1ZhbHVlXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gdGhpcy5jYWxjTmVhcmVzdChuZXdWYWx1ZSlcbiAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudXBkYXRlVmlldygpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrXG5cblxuICAgICAgICAgICAgY2FzZSgncmlnaHQnKTpcbiAgICAgICAgICAgIGlmKG5ld1ZhbHVlICUgdGhpcy5zdGVwID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodFZhbHVlID0gbmV3VmFsdWVcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodFZhbHVlID0gdGhpcy5jYWxjTmVhcmVzdChuZXdWYWx1ZSlcbiAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudXBkYXRlVmlldygpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGNhbGNOZWFyZXN0KG5ld1ZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBsZXQgcm91bmRUb01pbiA9IG5ld1ZhbHVlIC0gKG5ld1ZhbHVlICUgdGhpcy5zdGVwKVxuICAgICAgICBpZiAoKG5ld1ZhbHVlICUgdGhpcy5zdGVwKSA+ICh0aGlzLnN0ZXAgLyAyKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RlcCArIHJvdW5kVG9NaW5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm91bmRUb01pblxuICAgIH1cbn1cblxuZXhwb3J0IHtNb2RlbH1cbiIsImNsYXNzIEZvcm0ge1xuICAgIGZvcm0hOiBIVE1MRGl2RWxlbWVudFxuICAgIGRlZmF1bHRJbnB1dCE6IEhUTUxJbnB1dEVsZW1lbnRcbiAgICByaWdodElucHV0ITogSFRNTElucHV0RWxlbWVudFxuXG4gICAgaW5pdChwYXJlbnQ6IEhUTUxEaXZFbGVtZW50LCBpc0RvdWJsZTogYm9vbGVhbiwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3JlYXRlRm9ybShwYXJlbnQpXG4gICAgICAgIHRoaXMuY3JlYXRlSW5wdXQoaXNEb3VibGUpXG4gICAgICAgIHRoaXMuc2V0TWluKGlzRG91YmxlLCBtaW4pXG4gICAgICAgIHRoaXMuc2V0TWF4KGlzRG91YmxlLCBtYXgpXG4gICAgfVxuXG4gICAgY3JlYXRlRm9ybShwYXJlbnQ6IEhUTUxEaXZFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZm9ybSA9IDxIVE1MRGl2RWxlbWVudD4oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpXG4gICAgICAgIHRoaXMuZm9ybS5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2Zvcm0nKVxuICAgICAgICBwYXJlbnQuYXBwZW5kKHRoaXMuZm9ybSlcbiAgICB9XG4gICAgXG4gICAgY3JlYXRlSW5wdXQoaXNEb3VibGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKGlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0LnR5cGUgPSAncmFuZ2UnXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0JykgXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0X2xlZnQnKVxuICAgICAgICAgICAgdGhpcy5mb3JtLmFwcGVuZCh0aGlzLmRlZmF1bHRJbnB1dClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0LnR5cGUgPSAncmFuZ2UnXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19pbnB1dCcpXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19pbnB1dF9yaWdodCcpXG4gICAgICAgICAgICB0aGlzLmZvcm0uYXBwZW5kKHRoaXMucmlnaHRJbnB1dClcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC50eXBlID0gJ3JhbmdlJ1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19pbnB1dCcpXG4gICAgICAgICAgICB0aGlzLmZvcm0uYXBwZW5kKHRoaXMuZGVmYXVsdElucHV0KVxuICAgICAgICB9XG4gICAgfVxuICAgIHNldElucHV0VmFsdWUoaXNEb3VibGU6IGJvb2xlYW4sIHZhbHVlOiBudW1iZXIsIHJpZ2h0VmFsdWU6IG51bWJlciA9IE5hTik6IHZvaWQge1xuICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC52YWx1ZSA9IFN0cmluZyh2YWx1ZSlcbiAgICAgICAgaWYgKGlzRG91YmxlKSB7ICAgXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQudmFsdWUgPSBTdHJpbmcocmlnaHRWYWx1ZSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRNaW4oaXNEb3VibGU6IGJvb2xlYW4sIG1pbjogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVmYXVsdElucHV0Lm1pbiA9IFN0cmluZyhtaW4pXG4gICAgICAgIGlmIChpc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0Lm1pbiA9IFN0cmluZyhtaW4pXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0TWF4KGlzRG91YmxlOiBib29sZWFuLCBtYXg6IG51bWJlciA9IDEwMCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC5tYXggPSBTdHJpbmcobWF4KVxuICAgICAgICBpZiAoaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHRJbnB1dC5tYXggPSBTdHJpbmcobWF4KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBTdHlsZXMge1xuICAgIHN0eWxlITogSFRNTERpdkVsZW1lbnRcbiAgICB0cmFjayE6IEhUTUxEaXZFbGVtZW50XG5cbiAgICBpbml0KHBhcmVudDogSFRNTERpdkVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVTdHlsZXMocGFyZW50KVxuICAgICAgICB0aGlzLmNyZWF0ZVRyYWNrKClcbiAgICB9XG4gICAgXG4gICAgY3JlYXRlU3R5bGVzKHBhcmVudDogSFRNTERpdkVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRoaXMuc3R5bGUuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19zdHlsZScpXG4gICAgICAgIHBhcmVudC5hcHBlbmQodGhpcy5zdHlsZSlcbiAgICB9XG4gICAgXG4gICAgY3JlYXRlVHJhY2soKTogdm9pZCB7XG4gICAgICAgIHRoaXMudHJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0aGlzLnRyYWNrLmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdHJhY2snKVxuICAgICAgICB0aGlzLnN0eWxlLmFwcGVuZCh0aGlzLnRyYWNrKVxuICAgIH1cbn1cblxuY2xhc3MgUHJvZ3Jlc3NCYXIge1xuICAgIGJhciE6IEhUTUxEaXZFbGVtZW50XG4gICAgY3JlYXRlUHJvZ3Jlc3NCYXIocGFyZW50OiBIVE1MRGl2RWxlbWVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRoaXMuYmFyLmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fcHJvZ3Jlc3MtYmFyJylcbiAgICAgICAgcGFyZW50LmFwcGVuZCh0aGlzLmJhcilcbiAgICB9XG4gICAgY2FsY1BlcmNlbnQodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuICgodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbikpICogMTAwXG4gICAgfVxuICAgIHNldERlZmF1bHQoaXNEb3VibGU6IGJvb2xlYW4sIHBlcmNlbnQ6IG51bWJlciwgcGVyY2VudFJpZ2h0OiBudW1iZXIgPSBOYU4pOiB2b2lkIHtcbiAgICAgICAgaWYgKGlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5sZWZ0ID0gcGVyY2VudCArICclJ1xuICAgICAgICAgICAgdGhpcy5iYXIuc3R5bGUucmlnaHQgPSAoMTAwIC0gcGVyY2VudFJpZ2h0KSArICclJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5iYXIuc3R5bGUucmlnaHQgPSAoMTAwIC0gcGVyY2VudCkgKyAnJSdcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLmxlZnQgPSBTdHJpbmcoMClcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRSaWdodChpc0RvdWJsZTogYm9vbGVhbiwgcGVyY2VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICghaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLmxlZnQgPSBwZXJjZW50ICsgJyUnXG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5yaWdodCA9IFN0cmluZygtMSkgKyAncHgnXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIFRodW1iIHtcblxuICAgIHRodW1iRGVmYXVsdCE6IEhUTUxEaXZFbGVtZW50XG4gICAgdGh1bWJSaWdodCE6IEhUTUxEaXZFbGVtZW50XG4gICAgdGh1bWJPdXRwdXQhOiBIVE1MRGl2RWxlbWVudFxuICAgIHRodW1iT3V0cHV0UmlnaHQ/OiBIVE1MRGl2RWxlbWVudFxuXG4gICAgaW5pdCAocGFyZW50OiBIVE1MRGl2RWxlbWVudCwgXG4gICAgICAgIGlzRG91YmxlOiBib29sZWFuLCBcbiAgICAgICAgdG9nZ2xlRWxlbWVudDogYm9vbGVhbiwgXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogbnVtYmVyLCBcbiAgICAgICAgcmlnaHRWYWx1ZT86IG51bWJlcikge1xuXG4gICAgICAgIHRoaXMuY3JlYXRlVGh1bWIocGFyZW50LCBpc0RvdWJsZSlcbiAgICAgICAgaWYgKHRvZ2dsZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVGh1bWJFbGVtZW50KGlzRG91YmxlLCB0aGlzLnRodW1iRGVmYXVsdCwgdGhpcy50aHVtYlJpZ2h0KVxuICAgICAgICAgICAgdGhpcy5zZXRUaHVtYlZhbHVlKGlzRG91YmxlLCBkZWZhdWx0VmFsdWUsIHJpZ2h0VmFsdWUpXG4gICAgICAgIH1cbiAgICB9XG4gICAgY3JlYXRlVGh1bWIocGFyZW50OiBIVE1MRGl2RWxlbWVudCwgaXNEb3VibGU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYoaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMudGh1bWJEZWZhdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHRoaXMudGh1bWJEZWZhdWx0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdGh1bWInKVxuICAgICAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYl9sZWZ0JylcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmQodGhpcy50aHVtYkRlZmF1bHQpXG5cbiAgICAgICAgICAgIHRoaXMudGh1bWJSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB0aGlzLnRodW1iUmlnaHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYicpXG4gICAgICAgICAgICB0aGlzLnRodW1iUmlnaHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYl9yaWdodCcpXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kKHRoaXMudGh1bWJSaWdodClcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQuY2xhc3NOYW1lID0gJ3JhbmdlLXNsaWRlcl9fdGh1bWInXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kKHRoaXMudGh1bWJEZWZhdWx0KVxuXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVUaHVtYkVsZW1lbnQoaXNEb3VibGU6IGJvb2xlYW4sIHBhcmVudDogSFRNTERpdkVsZW1lbnQsIHJpZ2h0UGFyZW50PzogSFRNTERpdkVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLnRodW1iT3V0cHV0UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgICAgIHRoaXMudGh1bWJPdXRwdXRSaWdodC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3ZhbHVlLXRodW1iJylcbiAgICAgICAgICAgIHJpZ2h0UGFyZW50IS5hcHBlbmQodGhpcy50aHVtYk91dHB1dFJpZ2h0KVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudGh1bWJPdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgdGhpcy50aHVtYk91dHB1dC5jbGFzc05hbWUgPSAncmFuZ2Utc2xpZGVyX192YWx1ZS10aHVtYidcbiAgICAgICAgcGFyZW50LmFwcGVuZCh0aGlzLnRodW1iT3V0cHV0KVxuICAgIH1cbiAgICBzZXRUaHVtYlZhbHVlKGlzRG91YmxlOiBib29sZWFuLCB2YWx1ZTogbnVtYmVyLCByaWdodFZhbHVlPzogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudGh1bWJPdXRwdXQudGV4dENvbnRlbnQgPSBTdHJpbmcodmFsdWUpXG4gICAgICAgIGlmIChpc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy50aHVtYk91dHB1dFJpZ2h0IS50ZXh0Q29udGVudCA9IFN0cmluZyhyaWdodFZhbHVlKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG5cbiAgICBwbGFjZVRodW1iKGlzRG91YmxlOiBib29sZWFuLCBwZXJjZW50OiBudW1iZXIsIHBlcmNlbnRSaWdodDogbnVtYmVyID0gTmFOKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGh1bWJEZWZhdWx0LnN0eWxlLmxlZnQgPSBwZXJjZW50ICsgJyUnXG4gICAgICAgIGlmIChpc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy50aHVtYlJpZ2h0LnN0eWxlLnJpZ2h0ID0gKDEwMCAtIHBlcmNlbnRSaWdodCkgKyAnJSdcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHtGb3JtLCBTdHlsZXMsIFByb2dyZXNzQmFyLCBUaHVtYn0iLCJcbmltcG9ydCB7Rm9ybSwgU3R5bGVzLCBQcm9ncmVzc0JhciwgVGh1bWJ9IGZyb20gJy4vc3ViVmlld3MnXG5cbmludGVyZmFjZSBJRGF0YVZpZXcge1xuICAgIG1pbjogbnVtYmVyXG4gICAgbWF4OiBudW1iZXJcbiAgICBkZWZhdWx0VmFsdWU6IG51bWJlclxuICAgIHJpZ2h0VmFsdWU6IG51bWJlclxuICAgIGlzUmFuZ2U6IGJvb2xlYW5cbiAgICByaWdodFByb2dyZXNzQmFyOiBib29sZWFuXG4gICAgb3ZlclRodW1iRWxlbWVudDogYm9vbGVhblxuICAgIGlzVmVydGljYWw6IGJvb2xlYW5cbiAgICBpc1NjYWxlOiBib29sZWFuXG4gICAgc2NhbGVWYWx1ZXM6IG51bWJlcltdXG59XG5pbnRlcmZhY2UgSU9ic2VydmVyVmlldyB7XG4gICAgdXBkYXRlTW9kZWwoYXJnMDogc3RyaW5nLCBhcmcxOiBudW1iZXIpOiB2b2lkXG59XG5cbmNsYXNzIFZpZXcge1xuICAgIHBhcmVudDogSFRNTEVsZW1lbnRcbiAgICB3cmFwcGVyITogSFRNTERpdkVsZW1lbnRcbiAgICBmb3JtOiBGb3JtXG4gICAgc3R5bGVzOiBTdHlsZXNcbiAgICBwcm9ncmVzc0JhcjogUHJvZ3Jlc3NCYXJcbiAgICB0aHVtYjogVGh1bWJcbiAgICBvcHRpb25zOiBJRGF0YVZpZXdcbiAgICBvYnNlcnZlcnM6IElPYnNlcnZlclZpZXdbXVxuICAgIGNvbnN0cnVjdG9yKHBhcmVudDogSFRNTEVsZW1lbnQsIGZvcm06IEZvcm0sIHN0eWxlczogU3R5bGVzLCBwcm9ncmVzc0JhcjogUHJvZ3Jlc3NCYXIsIHRodW1iOiBUaHVtYikge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudFxuICAgICAgICB0aGlzLmZvcm0gPSBmb3JtXG4gICAgICAgIHRoaXMuc3R5bGVzID0gc3R5bGVzXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSBwcm9ncmVzc0JhclxuICAgICAgICB0aGlzLnRodW1iID0gdGh1bWJcblxuICAgIC8vIGRlZmF1bHQgZGF0YVxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogMTAsXG4gICAgICAgICAgICByaWdodFZhbHVlOiA1MCxcbiAgICAgICAgICAgIGlzUmFuZ2U6IHRydWUsXG4gICAgICAgICAgICByaWdodFByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgICAgICAgIG92ZXJUaHVtYkVsZW1lbnQ6IHRydWUsXG4gICAgICAgICAgICBpc1ZlcnRpY2FsOiBmYWxzZSxcbiAgICAgICAgICAgIGlzU2NhbGU6IGZhbHNlLFxuICAgICAgICAgICAgc2NhbGVWYWx1ZXM6IFtdXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9ic2VydmVycyA9IFtdXG4gICAgfVxuICAgIHN1YnNjcmliZShvYnNlcnZlcjogSU9ic2VydmVyVmlldykge1xuICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKVxuICAgIH1cbiAgICBcbiAgICBpbml0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmNyZWF0ZVdyYXBwZXIoKVxuICAgICAgICBcbiAgICAgICAgdGhpcy5mb3JtLmluaXQoXG4gICAgICAgICAgICB0aGlzLndyYXBwZXIsIFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlzUmFuZ2UsIFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1pbiwgXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubWF4XG4gICAgICAgIClcbiAgICAgICAgdGhpcy5zdHlsZXMuaW5pdCh0aGlzLndyYXBwZXIpXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuY3JlYXRlUHJvZ3Jlc3NCYXIodGhpcy5zdHlsZXMuc3R5bGUpXG4gICAgICAgIHRoaXMudGh1bWIuaW5pdChcbiAgICAgICAgICAgIHRoaXMuc3R5bGVzLnN0eWxlLFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlzUmFuZ2UsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMub3ZlclRodW1iRWxlbWVudCxcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kZWZhdWx0VmFsdWUsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMucmlnaHRWYWx1ZVxuICAgICAgICApXG4gICAgICAgIFxuICAgICAgICB0aGlzLnNldElucHV0KClcbiAgICAgICAgdGhpcy5ldmVudElucHV0KClcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5iYXIub25tb3VzZWRvd24gPSBlbGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xpY2tPbkJhcihlbGVtKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3R5bGVzLnRyYWNrLm9ubW91c2Vkb3duID0gZWxlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsaWNrT25CYXIoZWxlbSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmV2ZW50SG92ZXIoKVxuICAgICAgICB0aGlzLmV2ZW50QWN0aXZlKClcblxuXG4gICAgICAgIGlmKHRoaXMub3B0aW9ucy5pc1ZlcnRpY2FsKSB7XG4gICAgICAgICAgICB0aGlzLndyYXBwZXIuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX3ZlcnRpY2FsJylcbiAgICAgICAgICAgIGlmKHRoaXMub3B0aW9ucy5vdmVyVGh1bWJFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHVtYi50aHVtYk91dHB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3ZhbHVlLXRodW1iX3ZlcnRpY2FsJylcbiAgICAgICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iT3V0cHV0UmlnaHQ/LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdmFsdWUtdGh1bWJfdmVydGljYWwnKVxuICAgICAgICAgICAgfSAgIFxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNTY2FsZSkge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVTY2FsZSgpXG4gICAgICAgIH1cbiAgICB9IFxuICAgIGNyZWF0ZVdyYXBwZXIgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMud3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRoaXMud3JhcHBlci5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXInKVxuICAgICAgICB0aGlzLnBhcmVudC5hcHBlbmQodGhpcy53cmFwcGVyKVxuICAgIH1cbiAgICBjcmVhdGVTY2FsZSA9ICgpID0+IHtcbiAgICAgICAgbGV0IHNjYWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgc2NhbGUuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19zY2FsZScpXG4gICAgICAgIHRoaXMud3JhcHBlci5hcHBlbmQoc2NhbGUpXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnMuc2NhbGVWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGRpdlZhbHVlOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBkaXZWYWx1ZS5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3ZhbHVlJylcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlOiBudW1iZXIgPSB0aGlzLm9wdGlvbnMuc2NhbGVWYWx1ZXNbaV1cbiAgICAgICAgICAgIGRpdlZhbHVlLnRleHRDb250ZW50ID0gU3RyaW5nKHZhbHVlICsgJyDigJMnKVxuICAgICAgICAgICAgc2NhbGUuYXBwZW5kKGRpdlZhbHVlKVxuICAgICAgICAgICAgY29uc3QgbWluID0gdGhpcy5vcHRpb25zLm1pblxuICAgICAgICAgICAgY29uc3QgbWF4ID0gdGhpcy5vcHRpb25zLm1heFxuICAgICAgICAgICAgY29uc3QgcGVyY2VudDogbnVtYmVyID0gTWF0aC5yb3VuZCgoKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pKSAqIDEwMClcbiAgICAgICAgICAgIGRpdlZhbHVlLnN0eWxlLmxlZnQgPSBwZXJjZW50ICsgJyUnXG5cbiAgICAgICAgICAgIGRpdlZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRDbGljayh2YWx1ZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBkaXZWYWx1ZS5zdHlsZS5tYXJnaW5MZWZ0ID0gJy0nICsgdGhpcy5wbGFjZVNjYWxlKCkgKyAnJSdcbiAgICAgICAgfVxuICAgIH1cbiAgICBwbGFjZVNjYWxlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXJXaWR0aDogbnVtYmVyID0gdGhpcy53cmFwcGVyLm9mZnNldFdpZHRoXG4gICAgICAgIGNvbnN0IHNjYWxlU2hpZnQ6IG51bWJlciA9ICgwLjQyICogY29udGFpbmVyV2lkdGggKyA3NzcuOCkgLyBjb250YWluZXJXaWR0aFxuICAgICAgICByZXR1cm4gc2NhbGVTaGlmdFxuICAgIH1cbiAgICBzZXRJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5mb3JtLnNldElucHV0VmFsdWUodGhpcy5vcHRpb25zLmlzUmFuZ2UsIHRoaXMub3B0aW9ucy5kZWZhdWx0VmFsdWUsIHRoaXMub3B0aW9ucy5yaWdodFZhbHVlKVxuICAgICAgICBjb25zdCBwbGFjZURlZmF1bHQ6IG51bWJlciA9IHRoaXMucHJvZ3Jlc3NCYXIuY2FsY1BlcmNlbnQoXG4gICAgICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0LnZhbHVlKSwgXG4gICAgICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0Lm1pbiksIFxuICAgICAgICAgICAgICAgICAgICBOdW1iZXIodGhpcy5mb3JtLmRlZmF1bHRJbnB1dC5tYXgpKVxuXG4gICAgICAgIGNvbnN0IHBsYWNlUmlnaHQ6IG51bWJlciA9IHRoaXMuZm9ybS5yaWdodElucHV0ID8gXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyLmNhbGNQZXJjZW50KFxuICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0ucmlnaHRJbnB1dC52YWx1ZSksIFxuICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0ucmlnaHRJbnB1dC5taW4pLCBcbiAgICAgICAgICAgICAgICBOdW1iZXIodGhpcy5mb3JtLnJpZ2h0SW5wdXQubWF4KSkgXG4gICAgICAgICAgICAgICAgOiBOYU5cblxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnNldERlZmF1bHQodGhpcy5vcHRpb25zLmlzUmFuZ2UsIHBsYWNlRGVmYXVsdCwgcGxhY2VSaWdodClcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yaWdodFByb2dyZXNzQmFyKSB7IFxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5zZXRSaWdodCh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGxhY2VEZWZhdWx0KSBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRodW1iLnBsYWNlVGh1bWIodGhpcy5vcHRpb25zLmlzUmFuZ2UsIHBsYWNlRGVmYXVsdCwgcGxhY2VSaWdodClcbiAgICB9XG4gICAgZXZlbnRJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5mb3JtLmRlZmF1bHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kZWZhdWx0VmFsdWUgPSBOdW1iZXIodGhpcy5mb3JtLmRlZmF1bHRJbnB1dC52YWx1ZSlcbiAgICAgICAgICAgIHRoaXMuc2V0SW5wdXQoKVxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIudXBkYXRlTW9kZWwoJ2RlZmF1bHQnLCBOdW1iZXIodGhpcy5mb3JtLmRlZmF1bHRJbnB1dC52YWx1ZSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy50aHVtYi5zZXRUaHVtYlZhbHVlKHRoaXMub3B0aW9ucy5pc1JhbmdlLCBcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZGVmYXVsdFZhbHVlLCB0aGlzLm9wdGlvbnMucmlnaHRWYWx1ZSlcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pc1JhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm0ucmlnaHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMucmlnaHRWYWx1ZSA9IE51bWJlcih0aGlzLmZvcm0ucmlnaHRJbnB1dC52YWx1ZSlcbiAgICAgICAgICAgICAgICB0aGlzLnNldElucHV0KClcbiAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudXBkYXRlTW9kZWwoJ3JpZ2h0JywgTnVtYmVyKHRoaXMuZm9ybS5yaWdodElucHV0LnZhbHVlKSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHRoaXMudGh1bWIuc2V0VGh1bWJWYWx1ZSh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kZWZhdWx0VmFsdWUsIHRoaXMub3B0aW9ucy5yaWdodFZhbHVlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjbGlja09uQmFyKGVsZW06IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgY29uc3QgY29vcmRzOiBET01SZWN0ID0gdGhpcy5zdHlsZXMudHJhY2suZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgbGV0IGxlbmd0aDogbnVtYmVyID0gY29vcmRzLnJpZ2h0IC0gY29vcmRzLmxlZnRcbiAgICAgICAgbGV0IHJhbmdlOiBudW1iZXIgPSB0aGlzLm9wdGlvbnMubWF4IC0gdGhpcy5vcHRpb25zLm1pblxuICAgICAgICBsZXQgY3VycmVudFBvc2l0aW9uOiBudW1iZXIgPSBlbGVtLnBhZ2VYIC0gY29vcmRzLmxlZnRcbiAgICAgICAgbGV0IHBlcmNlbnQ6IG51bWJlclxuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNWZXJ0aWNhbCkge1xuICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uID0gZWxlbS5wYWdlWSAtIGNvb3Jkcy50b3BcbiAgICAgICAgICAgIGxlbmd0aCA9IGNvb3Jkcy5ib3R0b20gLSBjb29yZHMudG9wXG4gICAgICAgICAgICBpZiAobGVuZ3RoIDwgY3VycmVudFBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uID0gbGVuZ3RoXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcGVyY2VudCA9IGN1cnJlbnRQb3NpdGlvbi9sZW5ndGggKiAxMDBcbiAgICAgICAgY29uc3QgbmV3VmFsdWU6IG51bWJlciA9IE1hdGgucm91bmQodGhpcy5vcHRpb25zLm1pbiArICgocmFuZ2UpICogcGVyY2VudCkgLyAxMDApXG4gICAgICAgIHRoaXMuZXZlbnRDbGljayhuZXdWYWx1ZSlcbiAgICB9XG4gICAgZXZlbnRDbGljayhuZXdWYWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGhhbGZPZkJhcjogbnVtYmVyID0gKHRoaXMub3B0aW9ucy5yaWdodFZhbHVlICsgdGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSkgLyAyIFxuICAgICAgICBjb25zdCBpc1JpZ2h0VHJhY2s6IGJvb2xlYW4gPSB0aGlzLm9wdGlvbnMuaXNSYW5nZSAmJiBuZXdWYWx1ZSA+IHRoaXMub3B0aW9ucy5yaWdodFZhbHVlIFxuICAgICAgICBjb25zdCBpc1JpZ2h0QmFyID0gdGhpcy5vcHRpb25zLmlzUmFuZ2UgJiYgbmV3VmFsdWUgPiBoYWxmT2ZCYXIgXG4gICAgICAgIGlmKGlzUmlnaHRUcmFjayB8fCBpc1JpZ2h0QmFyKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMucmlnaHRWYWx1ZSA9IG5ld1ZhbHVlXG4gICAgICAgICAgICB0aGlzLnNldElucHV0KClcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLnVwZGF0ZU1vZGVsKCdyaWdodCcsIG5ld1ZhbHVlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMudGh1bWIuc2V0VGh1bWJWYWx1ZSh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSwgdGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZGVmYXVsdFZhbHVlID0gbmV3VmFsdWVcbiAgICAgICAgICAgIHRoaXMuc2V0SW5wdXQoKVxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIudXBkYXRlTW9kZWwoJ2RlZmF1bHQnLCBuZXdWYWx1ZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLnRodW1iLnNldFRodW1iVmFsdWUodGhpcy5vcHRpb25zLmlzUmFuZ2UsIFxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kZWZhdWx0VmFsdWUsIHRoaXMub3B0aW9ucy5yaWdodFZhbHVlKVxuICAgICAgICB9XG4gICAgfVxuICAgIGV2ZW50SG92ZXIgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5vdmVyVGh1bWJFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHVtYi50aHVtYk91dHB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3ZhbHVlLXRodW1iX2JpZycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iRGVmYXVsdC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3RodW1iX2hvdmVyJylcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pc1JhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm0ucmlnaHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5vdmVyVGh1bWJFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGh1bWIudGh1bWJPdXRwdXRSaWdodD8uY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX192YWx1ZS10aHVtYl9iaWcnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iUmlnaHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYl9ob3ZlcicpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mb3JtLmRlZmF1bHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMub3ZlclRodW1iRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGh1bWIudGh1bWJPdXRwdXQuY2xhc3NMaXN0LnJlbW92ZSgncmFuZ2Utc2xpZGVyX192YWx1ZS10aHVtYl9iaWcnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50aHVtYi50aHVtYkRlZmF1bHQuY2xhc3NMaXN0LnJlbW92ZSgncmFuZ2Utc2xpZGVyX190aHVtYl9ob3ZlcicpXG4gICAgICAgIH0pXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNSYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtLnJpZ2h0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5vdmVyVGh1bWJFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGh1bWIudGh1bWJPdXRwdXRSaWdodD8uY2xhc3NMaXN0LnJlbW92ZSgncmFuZ2Utc2xpZGVyX192YWx1ZS10aHVtYl9iaWcnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iUmlnaHQuY2xhc3NMaXN0LnJlbW92ZSgncmFuZ2Utc2xpZGVyX190aHVtYl9ob3ZlcicpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIGV2ZW50QWN0aXZlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmZvcm0uZGVmYXVsdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudGh1bWIudGh1bWJEZWZhdWx0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdGh1bWJfYWN0aXZlJylcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pc1JhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm0ucmlnaHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHVtYi50aHVtYlJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdGh1bWJfYWN0aXZlJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZvcm0uZGVmYXVsdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iRGVmYXVsdC5jbGFzc0xpc3QucmVtb3ZlKCdyYW5nZS1zbGlkZXJfX3RodW1iX2FjdGl2ZScpXG4gICAgICAgIH0pXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNSYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtLnJpZ2h0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iUmlnaHQuY2xhc3NMaXN0LnJlbW92ZSgncmFuZ2Utc2xpZGVyX190aHVtYl9hY3RpdmUnKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHtWaWV3fSJdLCJzb3VyY2VSb290IjoiIn0=