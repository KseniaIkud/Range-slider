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

      if (this.scaleValues.indexOf(lastValue) !== -1) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4gc3luYyBcXC4odHN8c2NzcykkIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2pxdWVyeS5tYWluLmQudHMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5zY3NzIiwid2VicGFjazovLy8uL212Yy9jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL212Yy9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9tdmMvc3ViVmlld3MudHMiLCJ3ZWJwYWNrOi8vLy4vbXZjL3ZpZXcudHMiXSwibmFtZXMiOlsiaW1wb3J0QWxsIiwiciIsImtleXMiLCJmb3JFYWNoIiwicmVxdWlyZSIsIiQiLCJmbiIsInJhbmdlU2xpZGVyIiwic2V0dGluZ3MiLCJwbHVnaW4iLCJDb250cm9sbGVyIiwiTW9kZWwiLCJtaW4iLCJtYXgiLCJkZWZhdWx0VmFsdWUiLCJpbml0aWFsVmFsdWUiLCJsZWZ0VmFsdWUiLCJyaWdodFZhbHVlIiwiaXNSYW5nZSIsInJpZ2h0UHJvZ3Jlc3NCYXIiLCJvdmVyVGh1bWJFbGVtZW50Iiwic3RlcCIsImlzVmVydGljYWwiLCJpc1NjYWxlIiwiVmlldyIsIkZvcm0iLCJTdHlsZXMiLCJQcm9ncmVzc0JhciIsIlRodW1iIiwialF1ZXJ5IiwibW9kZWwiLCJ2aWV3IiwiaW5pdCIsIm9wdGlvbnMiLCJkYXRhRm9yVmlldyIsInN1YnNjcmliZSIsIm9wdGlvbiIsIm5ld1ZhbHVlIiwidXBkYXRlIiwic2V0SW5wdXQiLCJzZXRTY2FsZSIsInNjYWxlVmFsdWVzIiwib2JzZXJ2ZXJzIiwib2JzZXJ2ZXIiLCJwdXNoIiwibGltaXRUb2dnbGUiLCJsaW1pdFN0ZXAiLCJhbGxWYWx1ZXMiLCJpIiwibGVuZ3RoIiwic2NhbGVTdGVwIiwiTWF0aCIsInJvdW5kIiwibGFzdFZhbHVlIiwiaW5kZXhPZiIsInVwZGF0ZVZpZXciLCJjb25zb2xlIiwibG9nIiwiY2FsY05lYXJlc3QiLCJyb3VuZFRvTWluIiwicGFyZW50IiwiaXNEb3VibGUiLCJjcmVhdGVGb3JtIiwiY3JlYXRlSW5wdXQiLCJzZXRNaW4iLCJzZXRNYXgiLCJmb3JtIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kIiwiZGVmYXVsdElucHV0IiwidHlwZSIsInJpZ2h0SW5wdXQiLCJ2YWx1ZSIsIk5hTiIsIlN0cmluZyIsImNyZWF0ZVN0eWxlcyIsImNyZWF0ZVRyYWNrIiwic3R5bGUiLCJ0cmFjayIsImJhciIsInBlcmNlbnQiLCJwZXJjZW50UmlnaHQiLCJsZWZ0IiwicmlnaHQiLCJ0b2dnbGVFbGVtZW50IiwiY3JlYXRlVGh1bWIiLCJjcmVhdGVUaHVtYkVsZW1lbnQiLCJ0aHVtYkRlZmF1bHQiLCJ0aHVtYlJpZ2h0Iiwic2V0VGh1bWJWYWx1ZSIsImNsYXNzTmFtZSIsInJpZ2h0UGFyZW50IiwidGh1bWJPdXRwdXRSaWdodCIsInRodW1iT3V0cHV0IiwidGV4dENvbnRlbnQiLCJzdHlsZXMiLCJwcm9ncmVzc0JhciIsInRodW1iIiwiY3JlYXRlV3JhcHBlciIsIndyYXBwZXIiLCJjcmVhdGVQcm9ncmVzc0JhciIsImV2ZW50SW5wdXQiLCJvbm1vdXNlZG93biIsImVsZW0iLCJjbGlja09uQmFyIiwiZXZlbnRIb3ZlciIsImV2ZW50QWN0aXZlIiwiY3JlYXRlU2NhbGUiLCJzY2FsZSIsImRpdlZhbHVlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Q2xpY2siLCJtYXJnaW5MZWZ0IiwicGxhY2VTY2FsZSIsImNvbnRhaW5lcldpZHRoIiwib2Zmc2V0V2lkdGgiLCJzY2FsZVNoaWZ0Iiwic2V0SW5wdXRWYWx1ZSIsInBsYWNlRGVmYXVsdCIsImNhbGNQZXJjZW50IiwiTnVtYmVyIiwicGxhY2VSaWdodCIsInNldERlZmF1bHQiLCJzZXRSaWdodCIsInBsYWNlVGh1bWIiLCJ1cGRhdGVNb2RlbCIsInJlbW92ZSIsImNvb3JkcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJhbmdlIiwiY3VycmVudFBvc2l0aW9uIiwicGFnZVgiLCJwYWdlWSIsInRvcCIsImJvdHRvbSIsImhhbGZPZkJhciIsImlzUmlnaHRUcmFjayIsImlzUmlnaHRCYXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTtRQUNBLDBDQUEwQztRQUMxQzs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0Esb0JBQW9CO1FBQ3BCO1FBQ0E7UUFDQTtRQUNBLHdCQUF3QjtRQUN4QjtRQUNBO1FBQ0EsbUJBQW1CLDZCQUE2QjtRQUNoRDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsbUJBQW1CLDhCQUE4QjtRQUNqRDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBLEtBQUs7UUFDTDs7UUFFQTs7UUFFQTtRQUNBLGlDQUFpQzs7UUFFakM7UUFDQTtRQUNB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QixVQUQ1QztBQUVILE9BUkQsTUFRTztBQUNILGFBQUtnQixPQUFMLENBQWFuQixZQUFiLEdBQTRCdUIsUUFBNUI7QUFDQSxhQUFLRSxRQUFMO0FBQ0EsYUFBS0csU0FBTCxDQUFldkMsT0FBZixDQUF1QixVQUFBd0MsUUFBUSxFQUFJO0FBQy9CQSxrQkFBUSxDQUFDcUYsV0FBVCxDQUFxQixTQUFyQixFQUFnQzNGLFFBQWhDO0FBQ0gsU0FGRDtBQUdBLGFBQUsrRCxLQUFMLENBQVdSLGFBQVgsQ0FBeUIsS0FBSzNELE9BQUwsQ0FBYWYsT0FBdEMsRUFDSSxLQUFLZSxPQUFMLENBQWFuQixZQURqQixFQUMrQixLQUFLbUIsT0FBTCxDQUFhaEIsVUFENUM7QUFFSDtBQUNKIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBDU1MgY2h1bmtzXG4gXHR2YXIgaW5zdGFsbGVkQ3NzQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIHNjcmlwdCBwYXRoIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBqc29ucFNjcmlwdFNyYyhjaHVua0lkKSB7XG4gXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIENTUyBsb2FkaW5nXG4gXHRcdHZhciBjc3NDaHVua3MgPSB7XCIwXCI6MX07XG4gXHRcdGlmKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSkgcHJvbWlzZXMucHVzaChpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0pO1xuIFx0XHRlbHNlIGlmKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSAhPT0gMCAmJiBjc3NDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0dmFyIGhyZWYgPSBcIlwiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmNzc1wiO1xuIFx0XHRcdFx0dmFyIGZ1bGxocmVmID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgaHJlZjtcbiBcdFx0XHRcdHZhciBleGlzdGluZ0xpbmtUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaW5rXCIpO1xuIFx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nTGlua1RhZ3MubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0dmFyIHRhZyA9IGV4aXN0aW5nTGlua1RhZ3NbaV07XG4gXHRcdFx0XHRcdHZhciBkYXRhSHJlZiA9IHRhZy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIikgfHwgdGFnLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gXHRcdFx0XHRcdGlmKHRhZy5yZWwgPT09IFwic3R5bGVzaGVldFwiICYmIChkYXRhSHJlZiA9PT0gaHJlZiB8fCBkYXRhSHJlZiA9PT0gZnVsbGhyZWYpKSByZXR1cm4gcmVzb2x2ZSgpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0dmFyIGV4aXN0aW5nU3R5bGVUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzdHlsZVwiKTtcbiBcdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBleGlzdGluZ1N0eWxlVGFncy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgdGFnID0gZXhpc3RpbmdTdHlsZVRhZ3NbaV07XG4gXHRcdFx0XHRcdHZhciBkYXRhSHJlZiA9IHRhZy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIik7XG4gXHRcdFx0XHRcdGlmKGRhdGFIcmVmID09PSBocmVmIHx8IGRhdGFIcmVmID09PSBmdWxsaHJlZikgcmV0dXJuIHJlc29sdmUoKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHZhciBsaW5rVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gXHRcdFx0XHRsaW5rVGFnLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuIFx0XHRcdFx0bGlua1RhZy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuIFx0XHRcdFx0bGlua1RhZy5vbmxvYWQgPSByZXNvbHZlO1xuIFx0XHRcdFx0bGlua1RhZy5vbmVycm9yID0gZnVuY3Rpb24oZXZlbnQpIHtcbiBcdFx0XHRcdFx0dmFyIHJlcXVlc3QgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYyB8fCBmdWxsaHJlZjtcbiBcdFx0XHRcdFx0dmFyIGVyciA9IG5ldyBFcnJvcihcIkxvYWRpbmcgQ1NTIGNodW5rIFwiICsgY2h1bmtJZCArIFwiIGZhaWxlZC5cXG4oXCIgKyByZXF1ZXN0ICsgXCIpXCIpO1xuIFx0XHRcdFx0XHRlcnIuY29kZSA9IFwiQ1NTX0NIVU5LX0xPQURfRkFJTEVEXCI7XG4gXHRcdFx0XHRcdGVyci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiBcdFx0XHRcdFx0ZGVsZXRlIGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXVxuIFx0XHRcdFx0XHRsaW5rVGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGlua1RhZylcbiBcdFx0XHRcdFx0cmVqZWN0KGVycik7XG4gXHRcdFx0XHR9O1xuIFx0XHRcdFx0bGlua1RhZy5ocmVmID0gZnVsbGhyZWY7XG5cbiBcdFx0XHRcdHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xuIFx0XHRcdFx0aGVhZC5hcHBlbmRDaGlsZChsaW5rVGFnKTtcbiBcdFx0XHR9KS50aGVuKGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0aW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0XHR9KSk7XG4gXHRcdH1cblxuIFx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG4gXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuIFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07XG4gXHRcdFx0XHR9KTtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cbiBcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0XHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0XHRcdHZhciBvblNjcmlwdENvbXBsZXRlO1xuXG4gXHRcdFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcbiBcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG4gXHRcdFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHNjcmlwdC5zcmMgPSBqc29ucFNjcmlwdFNyYyhjaHVua0lkKTtcblxuIFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuIFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG4gXHRcdFx0XHRvblNjcmlwdENvbXBsZXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gXHRcdFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG4gXHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuIFx0XHRcdFx0XHRcdFx0Y2h1bmtbMV0oZXJyb3IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH07XG4gXHRcdFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiBcdFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSh7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSk7XG4gXHRcdFx0XHR9LCAxMjAwMDApO1xuIFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2pxdWVyeS5tYWluLmQudHNcIjogXCIuL2pxdWVyeS5tYWluLmQudHNcIixcblx0XCIuL21haW4uc2Nzc1wiOiBcIi4vbWFpbi5zY3NzXCIsXG5cdFwiLi9tdmMvY29udHJvbGxlci50c1wiOiBcIi4vbXZjL2NvbnRyb2xsZXIudHNcIixcblx0XCIuL212Yy9tb2RlbC50c1wiOiBcIi4vbXZjL21vZGVsLnRzXCIsXG5cdFwiLi9tdmMvc3ViVmlld3MudHNcIjogXCIuL212Yy9zdWJWaWV3cy50c1wiLFxuXHRcIi4vbXZjL3ZpZXcudHNcIjogXCIuL212Yy92aWV3LnRzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgcmVjdXJzaXZlIFxcXFwuKHRzfHNjc3MpJFwiOyIsImZ1bmN0aW9uIGltcG9ydEFsbChyKSB7XG4gIHIua2V5cygpLmZvckVhY2gocilcbn1cblxuaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi8nLCB0cnVlLCAvXFwuKHRzfHNjc3MpJC8pKVxuaW1wb3J0ICgnLi9kZW1vL2RlbW8nKVxuXG4iLCJcbmltcG9ydCB7Rm9ybSwgU3R5bGVzLCBQcm9ncmVzc0JhciwgVGh1bWJ9IGZyb20gJy4vbXZjL3N1YlZpZXdzLnRzJ1xuaW1wb3J0IHtWaWV3fSBmcm9tICcuL212Yy92aWV3LnRzJ1xuaW1wb3J0IHtNb2RlbH0gZnJvbSAnLi9tdmMvbW9kZWwudHMnXG5pbXBvcnQge0NvbnRyb2xsZXJ9IGZyb20gJy4vbXZjL2NvbnRyb2xsZXIudHMnXG5cblxuKGZ1bmN0aW9uKCQ6IEpRdWVyeVN0YXRpYykge1xuICAgICQuZm4ucmFuZ2VTbGlkZXIgPSBmdW5jdGlvbihzZXR0aW5nczoge1xuICAgICAgICBtaW4/OiBudW1iZXJcbiAgICAgICAgbWF4PzogbnVtYmVyXG4gICAgICAgIGluaXRpYWxWYWx1ZT86IG51bWJlclxuICAgICAgICBsZWZ0VmFsdWU/OiBudW1iZXJcbiAgICAgICAgZGVmYXVsdFZhbHVlPzogbnVtYmVyXG4gICAgICAgIHJpZ2h0VmFsdWU/OiBudW1iZXJcbiAgICAgICAgaXNSYW5nZT86IGJvb2xlYW5cbiAgICAgICAgcmlnaHRQcm9ncmVzc0Jhcj86IGJvb2xlYW5cbiAgICAgICAgb3ZlclRodW1iRWxlbWVudD86IGJvb2xlYW5cbiAgICAgICAgc3RlcD86IG51bWJlclxuICAgICAgICBpc1ZlcnRpY2FsPzogYm9vbGVhblxuICAgICAgICBpc1NjYWxlPzogYm9vbGVhblxuICAgIH0pIHtcbiAgICAgICAgY29uc3QgcGx1Z2luID0gbmV3IENvbnRyb2xsZXIoXG4gICAgICAgICAgICBuZXcgTW9kZWwoe1xuICAgICAgICAgICAgICAgIG1pbjogc2V0dGluZ3MubWluLFxuICAgICAgICAgICAgICAgIG1heDogc2V0dGluZ3MubWF4LFxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogc2V0dGluZ3MuaW5pdGlhbFZhbHVlIHx8IHNldHRpbmdzLmxlZnRWYWx1ZSxcbiAgICAgICAgICAgICAgICByaWdodFZhbHVlOiBzZXR0aW5ncy5yaWdodFZhbHVlLFxuICAgICAgICAgICAgICAgIGlzUmFuZ2U6IHNldHRpbmdzLmlzUmFuZ2UsXG4gICAgICAgICAgICAgICAgcmlnaHRQcm9ncmVzc0Jhcjogc2V0dGluZ3MucmlnaHRQcm9ncmVzc0JhcixcbiAgICAgICAgICAgICAgICBvdmVyVGh1bWJFbGVtZW50OiBzZXR0aW5ncy5vdmVyVGh1bWJFbGVtZW50LFxuICAgICAgICAgICAgICAgIHN0ZXA6IHNldHRpbmdzLnN0ZXAsXG4gICAgICAgICAgICAgICAgaXNWZXJ0aWNhbDogc2V0dGluZ3MuaXNWZXJ0aWNhbCxcbiAgICAgICAgICAgICAgICBpc1NjYWxlOiBzZXR0aW5ncy5pc1NjYWxlXG4gICAgICAgICAgICB9KSwgXG4gICAgICAgICAgICBuZXcgVmlldyggXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBuZXcgRm9ybSgpLFxuICAgICAgICAgICAgICAgIG5ldyBTdHlsZXMoKSxcbiAgICAgICAgICAgICAgICBuZXcgUHJvZ3Jlc3NCYXIoKSxcbiAgICAgICAgICAgICAgICBuZXcgVGh1bWIoKSBcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICByZXR1cm4gcGx1Z2luXG4gICAgfVxufSkoalF1ZXJ5KVxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjAzMTI3MjAwMTA3XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9ob21lL3hlbmEvUmFuZ2Utc2xpZGVyL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJyZWxvYWRBbGxcIjp0cnVlLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiaW1wb3J0IHtNb2RlbH0gZnJvbSAnLi9tb2RlbCdcbmltcG9ydCB7Vmlld30gZnJvbSAnLi92aWV3J1xuXG5jbGFzcyBDb250cm9sbGVyIHtcbiAgICBtb2RlbDogTW9kZWxcbiAgICB2aWV3OiBWaWV3XG4gICAgY29uc3RydWN0b3IobW9kZWw6IE1vZGVsLCB2aWV3OiBWaWV3KSB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbFxuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3XG4gICAgICAgIFxuICAgICAgICB0aGlzLmluaXQoKSBcbiAgICB9XG4gICAgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5tb2RlbC5pbml0KClcbiAgICAgICAgdGhpcy52aWV3Lm9wdGlvbnMgPSB0aGlzLm1vZGVsLmRhdGFGb3JWaWV3XG4gICAgICAgIHRoaXMudmlldy5pbml0KClcblxuICAgICAgICBcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJzY3JpYmUodGhpcylcbiAgICAgICAgdGhpcy52aWV3LnN1YnNjcmliZSh0aGlzKVxuICAgICAgICBcbiAgICB9XG4gICAgdXBkYXRlTW9kZWwob3B0aW9uOiBzdHJpbmcsIG5ld1ZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5tb2RlbC51cGRhdGUob3B0aW9uLCBuZXdWYWx1ZSlcbiAgICB9XG4gICAgdXBkYXRlVmlldygpIHtcbiAgICAgICAgdGhpcy52aWV3Lm9wdGlvbnMuZGVmYXVsdFZhbHVlID0gdGhpcy5tb2RlbC5kZWZhdWx0VmFsdWVcbiAgICAgICAgdGhpcy52aWV3Lm9wdGlvbnMucmlnaHRWYWx1ZSA9IHRoaXMubW9kZWwucmlnaHRWYWx1ZVxuICAgICAgICB0aGlzLnZpZXcuc2V0SW5wdXQoKVxuICAgIH1cbn1cblxuZXhwb3J0IHtDb250cm9sbGVyfSIsImludGVyZmFjZSBJRGF0YSB7XG4gICAgbWluOiBudW1iZXJcbiAgICBtYXg6IG51bWJlclxuICAgIGRlZmF1bHRWYWx1ZTogbnVtYmVyXG4gICAgcmlnaHRWYWx1ZTogbnVtYmVyXG4gICAgaXNSYW5nZTogYm9vbGVhblxuICAgIHJpZ2h0UHJvZ3Jlc3NCYXI6IGJvb2xlYW5cbiAgICBvdmVyVGh1bWJFbGVtZW50OiBib29sZWFuXG4gICAgaXNWZXJ0aWNhbDogYm9vbGVhblxuICAgIHN0ZXA/OiBudW1iZXJcbiAgICBpc1NjYWxlOiBib29sZWFuXG4gICAgc2NhbGVWYWx1ZXM6IEFycmF5PG51bWJlcj5cbn1cbmludGVyZmFjZSBJT2JzZXJ2ZXJNb2RlbCB7XG4gICAgdXBkYXRlVmlldygpOiB2b2lkXG59XG5cbmNsYXNzIE1vZGVsIHtcbiAgICBtaW46IG51bWJlclxuICAgIG1heDogbnVtYmVyXG4gICAgZGVmYXVsdFZhbHVlOiBudW1iZXJcbiAgICByaWdodFZhbHVlOiBudW1iZXJcbiAgICBpc1JhbmdlOiBib29sZWFuXG4gICAgcmlnaHRQcm9ncmVzc0JhcjogYm9vbGVhblxuICAgIG92ZXJUaHVtYkVsZW1lbnQ6IGJvb2xlYW5cbiAgICBkYXRhRm9yVmlldzogSURhdGFcbiAgICBzdGVwOiBudW1iZXJcbiAgICBpc1ZlcnRpY2FsOiBib29sZWFuXG4gICAgaXNTY2FsZTogYm9vbGVhblxuICAgIHNjYWxlVmFsdWVzOiBudW1iZXJbXVxuICAgIG9ic2VydmVyczogSU9ic2VydmVyTW9kZWxbXVxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElEYXRhKSB7XG4gICAgICAgIHRoaXMubWluID0gb3B0aW9ucy5taW4gPyBvcHRpb25zLm1pbiA6IDBcbiAgICAgICAgdGhpcy5tYXggPSBvcHRpb25zLm1heCA/IG9wdGlvbnMubWF4IDogMTAwXG4gICAgICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gb3B0aW9ucy5kZWZhdWx0VmFsdWUgPyBvcHRpb25zLmRlZmF1bHRWYWx1ZSA6IDUwXG4gICAgICAgIHRoaXMucmlnaHRWYWx1ZSA9IG9wdGlvbnMucmlnaHRWYWx1ZSA/IG9wdGlvbnMucmlnaHRWYWx1ZSA6IDYwXG4gICAgICAgIHRoaXMuaXNSYW5nZSA9IG9wdGlvbnMuaXNSYW5nZSB8fCBmYWxzZVxuICAgICAgICB0aGlzLnJpZ2h0UHJvZ3Jlc3NCYXIgPSBvcHRpb25zLnJpZ2h0UHJvZ3Jlc3NCYXIgfHwgZmFsc2VcbiAgICAgICAgdGhpcy5vdmVyVGh1bWJFbGVtZW50ID0gb3B0aW9ucy5vdmVyVGh1bWJFbGVtZW50IHx8IGZhbHNlXG4gICAgICAgIHRoaXMuc3RlcCA9IG9wdGlvbnMuc3RlcCA/IG9wdGlvbnMuc3RlcCA6IDFcbiAgICAgICAgdGhpcy5pc1ZlcnRpY2FsID0gb3B0aW9ucy5pc1ZlcnRpY2FsIHx8IGZhbHNlXG4gICAgICAgIHRoaXMuaXNTY2FsZSA9IG9wdGlvbnMuaXNTY2FsZSB8fCBmYWxzZVxuICAgICAgICB0aGlzLnNjYWxlVmFsdWVzID0gW11cbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXVxuICAgICAgICB0aGlzLmRhdGFGb3JWaWV3ID0ge1xuICAgICAgICAgICAgbWluOiB0aGlzLm1pbixcbiAgICAgICAgICAgIG1heDogdGhpcy5tYXgsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IHRoaXMuZGVmYXVsdFZhbHVlLFxuICAgICAgICAgICAgcmlnaHRWYWx1ZTogdGhpcy5yaWdodFZhbHVlLFxuICAgICAgICAgICAgaXNSYW5nZTogdGhpcy5pc1JhbmdlLFxuICAgICAgICAgICAgcmlnaHRQcm9ncmVzc0JhcjogdGhpcy5yaWdodFByb2dyZXNzQmFyLFxuICAgICAgICAgICAgb3ZlclRodW1iRWxlbWVudDogdGhpcy5vdmVyVGh1bWJFbGVtZW50LFxuICAgICAgICAgICAgaXNWZXJ0aWNhbDogdGhpcy5pc1ZlcnRpY2FsLFxuICAgICAgICAgICAgaXNTY2FsZTogdGhpcy5pc1NjYWxlLFxuICAgICAgICAgICAgc2NhbGVWYWx1ZXM6IHRoaXMuc2NhbGVWYWx1ZXNcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdWJzY3JpYmUob2JzZXJ2ZXI6IElPYnNlcnZlck1vZGVsKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpXG4gICAgfVxuICAgIGluaXQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U2NhbGUoKVxuICAgIH1cbiAgICB1cGRhdGUob3B0aW9uOiBzdHJpbmcsIG5ld1ZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5saW1pdFRvZ2dsZShvcHRpb24sIG5ld1ZhbHVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5saW1pdFN0ZXAobmV3VmFsdWUpXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0U2NhbGUoKSB7XG4gICAgICAgIGxldCBhbGxWYWx1ZXM6IG51bWJlcltdID0gW11cbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IHRoaXMubWluOyBpIDw9IHRoaXMubWF4OyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpICUgdGhpcy5zdGVwID09PSAwKSB7XG4gICAgICAgICAgICAgICAgYWxsVmFsdWVzLnB1c2goaSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYWxsVmFsdWVzLmxlbmd0aCA8PSAxMSkge1xuICAgICAgICAgICAgYWxsVmFsdWVzLmZvckVhY2goaSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2FsZVZhbHVlcy5wdXNoKGkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHNjYWxlU3RlcCA9IE1hdGgucm91bmQoYWxsVmFsdWVzLmxlbmd0aCAvIDEwKVxuICAgICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGFsbFZhbHVlcy5sZW5ndGg7IGkrPXNjYWxlU3RlcCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NhbGVWYWx1ZXMucHVzaChhbGxWYWx1ZXNbaV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxhc3RWYWx1ZTogbnVtYmVyID0gYWxsVmFsdWVzW2FsbFZhbHVlcy5sZW5ndGggLSAxXVxuICAgICAgICBpZih0aGlzLnNjYWxlVmFsdWVzLmluZGV4T2YobGFzdFZhbHVlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGVWYWx1ZXMucHVzaChsYXN0VmFsdWUpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIGxpbWl0VG9nZ2xlKG9wdGlvbjogc3RyaW5nLCBuZXdWYWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHN3aXRjaCAob3B0aW9uKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UoJ2RlZmF1bHQnKTpcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUgPCB0aGlzLnJpZ2h0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saW1pdFN0ZXAobmV3VmFsdWUpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51cGRhdGVWaWV3KClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FzZSgncmlnaHQnKTpcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA+IHRoaXMuZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGltaXRTdGVwKG5ld1ZhbHVlLCAncmlnaHQnKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn0LDQu9GP0YDQvNCwJylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51cGRhdGVWaWV3KClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgbGltaXRTdGVwKG5ld1ZhbHVlOiBudW1iZXIsIG9wdGlvbjogc3RyaW5nID0gJ2RlZmF1bHQnKSB7XG4gICAgICAgIHN3aXRjaChvcHRpb24pIHtcbiAgICAgICAgICAgIGNhc2UoJ2RlZmF1bHQnKTogXG4gICAgICAgICAgICBpZihuZXdWYWx1ZSAlIHRoaXMuc3RlcCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gbmV3VmFsdWVcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0VmFsdWUgPSB0aGlzLmNhbGNOZWFyZXN0KG5ld1ZhbHVlKVxuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51cGRhdGVWaWV3KClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWtcblxuXG4gICAgICAgICAgICBjYXNlKCdyaWdodCcpOlxuICAgICAgICAgICAgaWYobmV3VmFsdWUgJSB0aGlzLnN0ZXAgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0VmFsdWUgPSBuZXdWYWx1ZVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0VmFsdWUgPSB0aGlzLmNhbGNOZWFyZXN0KG5ld1ZhbHVlKVxuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51cGRhdGVWaWV3KClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgY2FsY05lYXJlc3QobmV3VmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGxldCByb3VuZFRvTWluID0gbmV3VmFsdWUgLSAobmV3VmFsdWUgJSB0aGlzLnN0ZXApXG4gICAgICAgIGlmICgobmV3VmFsdWUgJSB0aGlzLnN0ZXApID4gKHRoaXMuc3RlcCAvIDIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGVwICsgcm91bmRUb01pblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb3VuZFRvTWluXG4gICAgfVxufVxuXG5leHBvcnQge01vZGVsfVxuIiwiY2xhc3MgRm9ybSB7XG4gICAgZm9ybSE6IEhUTUxEaXZFbGVtZW50XG4gICAgZGVmYXVsdElucHV0ITogSFRNTElucHV0RWxlbWVudFxuICAgIHJpZ2h0SW5wdXQhOiBIVE1MSW5wdXRFbGVtZW50XG5cbiAgICBpbml0KHBhcmVudDogSFRNTERpdkVsZW1lbnQsIGlzRG91YmxlOiBib29sZWFuLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jcmVhdGVGb3JtKHBhcmVudClcbiAgICAgICAgdGhpcy5jcmVhdGVJbnB1dChpc0RvdWJsZSlcbiAgICAgICAgdGhpcy5zZXRNaW4oaXNEb3VibGUsIG1pbilcbiAgICAgICAgdGhpcy5zZXRNYXgoaXNEb3VibGUsIG1heClcbiAgICB9XG5cbiAgICBjcmVhdGVGb3JtKHBhcmVudDogSFRNTERpdkVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mb3JtID0gPEhUTUxEaXZFbGVtZW50Pihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSlcbiAgICAgICAgdGhpcy5mb3JtLmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fZm9ybScpXG4gICAgICAgIHBhcmVudC5hcHBlbmQodGhpcy5mb3JtKVxuICAgIH1cbiAgICBcbiAgICBjcmVhdGVJbnB1dChpc0RvdWJsZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAoaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQudHlwZSA9ICdyYW5nZSdcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9faW5wdXQnKSBcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9faW5wdXRfbGVmdCcpXG4gICAgICAgICAgICB0aGlzLmZvcm0uYXBwZW5kKHRoaXMuZGVmYXVsdElucHV0KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQudHlwZSA9ICdyYW5nZSdcbiAgICAgICAgICAgIHRoaXMucmlnaHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0JylcbiAgICAgICAgICAgIHRoaXMucmlnaHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0X3JpZ2h0JylcbiAgICAgICAgICAgIHRoaXMuZm9ybS5hcHBlbmQodGhpcy5yaWdodElucHV0KVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0LnR5cGUgPSAncmFuZ2UnXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0JylcbiAgICAgICAgICAgIHRoaXMuZm9ybS5hcHBlbmQodGhpcy5kZWZhdWx0SW5wdXQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0SW5wdXRWYWx1ZShpc0RvdWJsZTogYm9vbGVhbiwgdmFsdWU6IG51bWJlciwgcmlnaHRWYWx1ZTogbnVtYmVyID0gTmFOKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVmYXVsdElucHV0LnZhbHVlID0gU3RyaW5nKHZhbHVlKVxuICAgICAgICBpZiAoaXNEb3VibGUpIHsgICBcbiAgICAgICAgICAgIHRoaXMucmlnaHRJbnB1dC52YWx1ZSA9IFN0cmluZyhyaWdodFZhbHVlKVxuICAgICAgICB9XG4gICAgfVxuICAgIHNldE1pbihpc0RvdWJsZTogYm9vbGVhbiwgbWluOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQubWluID0gU3RyaW5nKG1pbilcbiAgICAgICAgaWYgKGlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQubWluID0gU3RyaW5nKG1pbilcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRNYXgoaXNEb3VibGU6IGJvb2xlYW4sIG1heDogbnVtYmVyID0gMTAwKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVmYXVsdElucHV0Lm1heCA9IFN0cmluZyhtYXgpXG4gICAgICAgIGlmIChpc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0Lm1heCA9IFN0cmluZyhtYXgpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIFN0eWxlcyB7XG4gICAgc3R5bGUhOiBIVE1MRGl2RWxlbWVudFxuICAgIHRyYWNrITogSFRNTERpdkVsZW1lbnRcblxuICAgIGluaXQocGFyZW50OiBIVE1MRGl2RWxlbWVudCkge1xuICAgICAgICB0aGlzLmNyZWF0ZVN0eWxlcyhwYXJlbnQpXG4gICAgICAgIHRoaXMuY3JlYXRlVHJhY2soKVxuICAgIH1cbiAgICBcbiAgICBjcmVhdGVTdHlsZXMocGFyZW50OiBIVE1MRGl2RWxlbWVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGhpcy5zdHlsZS5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3N0eWxlJylcbiAgICAgICAgcGFyZW50LmFwcGVuZCh0aGlzLnN0eWxlKVxuICAgIH1cbiAgICBcbiAgICBjcmVhdGVUcmFjaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50cmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRoaXMudHJhY2suY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190cmFjaycpXG4gICAgICAgIHRoaXMuc3R5bGUuYXBwZW5kKHRoaXMudHJhY2spXG4gICAgfVxufVxuXG5jbGFzcyBQcm9ncmVzc0JhciB7XG4gICAgYmFyITogSFRNTERpdkVsZW1lbnRcbiAgICBjcmVhdGVQcm9ncmVzc0JhcihwYXJlbnQ6IEhUTUxEaXZFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGhpcy5iYXIuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19wcm9ncmVzcy1iYXInKVxuICAgICAgICBwYXJlbnQuYXBwZW5kKHRoaXMuYmFyKVxuICAgIH1cbiAgICBjYWxjUGVyY2VudCh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gKCh2YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKSkgKiAxMDBcbiAgICB9XG4gICAgc2V0RGVmYXVsdChpc0RvdWJsZTogYm9vbGVhbiwgcGVyY2VudDogbnVtYmVyLCBwZXJjZW50UmlnaHQ6IG51bWJlciA9IE5hTik6IHZvaWQge1xuICAgICAgICBpZiAoaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLmxlZnQgPSBwZXJjZW50ICsgJyUnXG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5yaWdodCA9ICgxMDAgLSBwZXJjZW50UmlnaHQpICsgJyUnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5yaWdodCA9ICgxMDAgLSBwZXJjZW50KSArICclJ1xuICAgICAgICAgICAgdGhpcy5iYXIuc3R5bGUubGVmdCA9IFN0cmluZygwKVxuICAgICAgICB9XG4gICAgfVxuICAgIHNldFJpZ2h0KGlzRG91YmxlOiBib29sZWFuLCBwZXJjZW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFpc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy5iYXIuc3R5bGUubGVmdCA9IHBlcmNlbnQgKyAnJSdcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLnJpZ2h0ID0gU3RyaW5nKC0xKSArICdweCdcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgVGh1bWIge1xuXG4gICAgdGh1bWJEZWZhdWx0ITogSFRNTERpdkVsZW1lbnRcbiAgICB0aHVtYlJpZ2h0ITogSFRNTERpdkVsZW1lbnRcbiAgICB0aHVtYk91dHB1dCE6IEhUTUxEaXZFbGVtZW50XG4gICAgdGh1bWJPdXRwdXRSaWdodD86IEhUTUxEaXZFbGVtZW50XG5cbiAgICBpbml0IChwYXJlbnQ6IEhUTUxEaXZFbGVtZW50LCBcbiAgICAgICAgaXNEb3VibGU6IGJvb2xlYW4sIFxuICAgICAgICB0b2dnbGVFbGVtZW50OiBib29sZWFuLCBcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBudW1iZXIsIFxuICAgICAgICByaWdodFZhbHVlPzogbnVtYmVyKSB7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVUaHVtYihwYXJlbnQsIGlzRG91YmxlKVxuICAgICAgICBpZiAodG9nZ2xlRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVUaHVtYkVsZW1lbnQoaXNEb3VibGUsIHRoaXMudGh1bWJEZWZhdWx0LCB0aGlzLnRodW1iUmlnaHQpXG4gICAgICAgICAgICB0aGlzLnNldFRodW1iVmFsdWUoaXNEb3VibGUsIGRlZmF1bHRWYWx1ZSwgcmlnaHRWYWx1ZSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVUaHVtYihwYXJlbnQ6IEhUTUxEaXZFbGVtZW50LCBpc0RvdWJsZTogYm9vbGVhbikge1xuICAgICAgICBpZihpc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYicpXG4gICAgICAgICAgICB0aGlzLnRodW1iRGVmYXVsdC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3RodW1iX2xlZnQnKVxuICAgICAgICAgICAgcGFyZW50LmFwcGVuZCh0aGlzLnRodW1iRGVmYXVsdClcblxuICAgICAgICAgICAgdGhpcy50aHVtYlJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHRoaXMudGh1bWJSaWdodC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3RodW1iJylcbiAgICAgICAgICAgIHRoaXMudGh1bWJSaWdodC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3RodW1iX3JpZ2h0JylcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmQodGhpcy50aHVtYlJpZ2h0KVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRodW1iRGVmYXVsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB0aGlzLnRodW1iRGVmYXVsdC5jbGFzc05hbWUgPSAncmFuZ2Utc2xpZGVyX190aHVtYidcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmQodGhpcy50aHVtYkRlZmF1bHQpXG5cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZVRodW1iRWxlbWVudChpc0RvdWJsZTogYm9vbGVhbiwgcGFyZW50OiBIVE1MRGl2RWxlbWVudCwgcmlnaHRQYXJlbnQ/OiBIVE1MRGl2RWxlbWVudCkge1xuICAgICAgICBpZiAoaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMudGh1bWJPdXRwdXRSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAgICAgdGhpcy50aHVtYk91dHB1dFJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdmFsdWUtdGh1bWInKVxuICAgICAgICAgICAgcmlnaHRQYXJlbnQhLmFwcGVuZCh0aGlzLnRodW1iT3V0cHV0UmlnaHQpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aHVtYk91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICB0aGlzLnRodW1iT3V0cHV0LmNsYXNzTmFtZSA9ICdyYW5nZS1zbGlkZXJfX3ZhbHVlLXRodW1iJ1xuICAgICAgICBwYXJlbnQuYXBwZW5kKHRoaXMudGh1bWJPdXRwdXQpXG4gICAgfVxuICAgIHNldFRodW1iVmFsdWUoaXNEb3VibGU6IGJvb2xlYW4sIHZhbHVlOiBudW1iZXIsIHJpZ2h0VmFsdWU/OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy50aHVtYk91dHB1dC50ZXh0Q29udGVudCA9IFN0cmluZyh2YWx1ZSlcbiAgICAgICAgaWYgKGlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLnRodW1iT3V0cHV0UmlnaHQhLnRleHRDb250ZW50ID0gU3RyaW5nKHJpZ2h0VmFsdWUpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cblxuICAgIHBsYWNlVGh1bWIoaXNEb3VibGU6IGJvb2xlYW4sIHBlcmNlbnQ6IG51bWJlciwgcGVyY2VudFJpZ2h0OiBudW1iZXIgPSBOYU4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQuc3R5bGUubGVmdCA9IHBlcmNlbnQgKyAnJSdcbiAgICAgICAgaWYgKGlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLnRodW1iUmlnaHQuc3R5bGUucmlnaHQgPSAoMTAwIC0gcGVyY2VudFJpZ2h0KSArICclJ1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQge0Zvcm0sIFN0eWxlcywgUHJvZ3Jlc3NCYXIsIFRodW1ifSIsIlxuaW1wb3J0IHtGb3JtLCBTdHlsZXMsIFByb2dyZXNzQmFyLCBUaHVtYn0gZnJvbSAnLi9zdWJWaWV3cydcblxuaW50ZXJmYWNlIElEYXRhVmlldyB7XG4gICAgbWluOiBudW1iZXJcbiAgICBtYXg6IG51bWJlclxuICAgIGRlZmF1bHRWYWx1ZTogbnVtYmVyXG4gICAgcmlnaHRWYWx1ZTogbnVtYmVyXG4gICAgaXNSYW5nZTogYm9vbGVhblxuICAgIHJpZ2h0UHJvZ3Jlc3NCYXI6IGJvb2xlYW5cbiAgICBvdmVyVGh1bWJFbGVtZW50OiBib29sZWFuXG4gICAgaXNWZXJ0aWNhbDogYm9vbGVhblxuICAgIGlzU2NhbGU6IGJvb2xlYW5cbiAgICBzY2FsZVZhbHVlczogbnVtYmVyW11cbn1cbmludGVyZmFjZSBJT2JzZXJ2ZXJWaWV3IHtcbiAgICB1cGRhdGVNb2RlbChhcmcwOiBzdHJpbmcsIGFyZzE6IG51bWJlcik6IHZvaWRcbn1cblxuY2xhc3MgVmlldyB7XG4gICAgcGFyZW50OiBIVE1MRWxlbWVudFxuICAgIHdyYXBwZXIhOiBIVE1MRGl2RWxlbWVudFxuICAgIGZvcm06IEZvcm1cbiAgICBzdHlsZXM6IFN0eWxlc1xuICAgIHByb2dyZXNzQmFyOiBQcm9ncmVzc0JhclxuICAgIHRodW1iOiBUaHVtYlxuICAgIG9wdGlvbnM6IElEYXRhVmlld1xuICAgIG9ic2VydmVyczogSU9ic2VydmVyVmlld1tdXG4gICAgY29uc3RydWN0b3IocGFyZW50OiBIVE1MRWxlbWVudCwgZm9ybTogRm9ybSwgc3R5bGVzOiBTdHlsZXMsIHByb2dyZXNzQmFyOiBQcm9ncmVzc0JhciwgdGh1bWI6IFRodW1iKSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50XG4gICAgICAgIHRoaXMuZm9ybSA9IGZvcm1cbiAgICAgICAgdGhpcy5zdHlsZXMgPSBzdHlsZXNcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JhciA9IHByb2dyZXNzQmFyXG4gICAgICAgIHRoaXMudGh1bWIgPSB0aHVtYlxuXG4gICAgLy8gZGVmYXVsdCBkYXRhXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiAxMCxcbiAgICAgICAgICAgIHJpZ2h0VmFsdWU6IDUwLFxuICAgICAgICAgICAgaXNSYW5nZTogdHJ1ZSxcbiAgICAgICAgICAgIHJpZ2h0UHJvZ3Jlc3NCYXI6IGZhbHNlLFxuICAgICAgICAgICAgb3ZlclRodW1iRWxlbWVudDogdHJ1ZSxcbiAgICAgICAgICAgIGlzVmVydGljYWw6IGZhbHNlLFxuICAgICAgICAgICAgaXNTY2FsZTogZmFsc2UsXG4gICAgICAgICAgICBzY2FsZVZhbHVlczogW11cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW11cbiAgICB9XG4gICAgc3Vic2NyaWJlKG9ic2VydmVyOiBJT2JzZXJ2ZXJWaWV3KSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpXG4gICAgfVxuICAgIFxuICAgIGluaXQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuY3JlYXRlV3JhcHBlcigpXG4gICAgICAgIFxuICAgICAgICB0aGlzLmZvcm0uaW5pdChcbiAgICAgICAgICAgIHRoaXMud3JhcHBlciwgXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaXNSYW5nZSwgXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubWluLCBcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tYXhcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnN0eWxlcy5pbml0KHRoaXMud3JhcHBlcilcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5jcmVhdGVQcm9ncmVzc0Jhcih0aGlzLnN0eWxlcy5zdHlsZSlcbiAgICAgICAgdGhpcy50aHVtYi5pbml0KFxuICAgICAgICAgICAgdGhpcy5zdHlsZXMuc3R5bGUsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaXNSYW5nZSxcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vdmVyVGh1bWJFbGVtZW50LFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSxcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5yaWdodFZhbHVlXG4gICAgICAgIClcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2V0SW5wdXQoKVxuICAgICAgICB0aGlzLmV2ZW50SW5wdXQoKVxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLmJhci5vbm1vdXNlZG93biA9IGVsZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5jbGlja09uQmFyKGVsZW0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdHlsZXMudHJhY2sub25tb3VzZWRvd24gPSBlbGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xpY2tPbkJhcihlbGVtKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXZlbnRIb3ZlcigpXG4gICAgICAgIHRoaXMuZXZlbnRBY3RpdmUoKVxuXG5cbiAgICAgICAgaWYodGhpcy5vcHRpb25zLmlzVmVydGljYWwpIHtcbiAgICAgICAgICAgIHRoaXMud3JhcHBlci5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfdmVydGljYWwnKVxuICAgICAgICAgICAgaWYodGhpcy5vcHRpb25zLm92ZXJUaHVtYkVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iT3V0cHV0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdmFsdWUtdGh1bWJfdmVydGljYWwnKVxuICAgICAgICAgICAgICAgIHRoaXMudGh1bWIudGh1bWJPdXRwdXRSaWdodD8uY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX192YWx1ZS10aHVtYl92ZXJ0aWNhbCcpXG4gICAgICAgICAgICB9ICAgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pc1NjYWxlKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVNjYWxlKClcbiAgICAgICAgfVxuICAgIH0gXG4gICAgY3JlYXRlV3JhcHBlciA9ICgpID0+IHtcbiAgICAgICAgdGhpcy53cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGhpcy53cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcicpXG4gICAgICAgIHRoaXMucGFyZW50LmFwcGVuZCh0aGlzLndyYXBwZXIpXG4gICAgfVxuICAgIGNyZWF0ZVNjYWxlID0gKCkgPT4ge1xuICAgICAgICBsZXQgc2NhbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBzY2FsZS5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3NjYWxlJylcbiAgICAgICAgdGhpcy53cmFwcGVyLmFwcGVuZChzY2FsZSlcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3B0aW9ucy5zY2FsZVZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZGl2VmFsdWU6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGRpdlZhbHVlLmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdmFsdWUnKVxuICAgICAgICAgICAgY29uc3QgdmFsdWU6IG51bWJlciA9IHRoaXMub3B0aW9ucy5zY2FsZVZhbHVlc1tpXVxuICAgICAgICAgICAgZGl2VmFsdWUudGV4dENvbnRlbnQgPSBTdHJpbmcodmFsdWUgKyAnIOKAkycpXG4gICAgICAgICAgICBzY2FsZS5hcHBlbmQoZGl2VmFsdWUpXG4gICAgICAgICAgICBjb25zdCBtaW4gPSB0aGlzLm9wdGlvbnMubWluXG4gICAgICAgICAgICBjb25zdCBtYXggPSB0aGlzLm9wdGlvbnMubWF4XG4gICAgICAgICAgICBjb25zdCBwZXJjZW50OiBudW1iZXIgPSBNYXRoLnJvdW5kKCgodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbikpICogMTAwKVxuICAgICAgICAgICAgZGl2VmFsdWUuc3R5bGUubGVmdCA9IHBlcmNlbnQgKyAnJSdcblxuICAgICAgICAgICAgZGl2VmFsdWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudENsaWNrKHZhbHVlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGRpdlZhbHVlLnN0eWxlLm1hcmdpbkxlZnQgPSAnLScgKyB0aGlzLnBsYWNlU2NhbGUoKSArICclJ1xuICAgICAgICB9XG4gICAgfVxuICAgIHBsYWNlU2NhbGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoOiBudW1iZXIgPSB0aGlzLndyYXBwZXIub2Zmc2V0V2lkdGhcbiAgICAgICAgY29uc3Qgc2NhbGVTaGlmdDogbnVtYmVyID0gKDAuNDIgKiBjb250YWluZXJXaWR0aCArIDc3Ny44KSAvIGNvbnRhaW5lcldpZHRoXG4gICAgICAgIHJldHVybiBzY2FsZVNoaWZ0XG4gICAgfVxuICAgIHNldElucHV0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmZvcm0uc2V0SW5wdXRWYWx1ZSh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgdGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSwgdGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUpXG4gICAgICAgIGNvbnN0IHBsYWNlRGVmYXVsdDogbnVtYmVyID0gdGhpcy5wcm9ncmVzc0Jhci5jYWxjUGVyY2VudChcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQudmFsdWUpLCBcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQubWluKSwgXG4gICAgICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0Lm1heCkpXG5cbiAgICAgICAgY29uc3QgcGxhY2VSaWdodDogbnVtYmVyID0gdGhpcy5mb3JtLnJpZ2h0SW5wdXQgPyBcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuY2FsY1BlcmNlbnQoXG4gICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5yaWdodElucHV0LnZhbHVlKSwgXG4gICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5yaWdodElucHV0Lm1pbiksIFxuICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0ucmlnaHRJbnB1dC5tYXgpKSBcbiAgICAgICAgICAgICAgICA6IE5hTlxuXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuc2V0RGVmYXVsdCh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGxhY2VEZWZhdWx0LCBwbGFjZVJpZ2h0KVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJpZ2h0UHJvZ3Jlc3NCYXIpIHsgXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnNldFJpZ2h0KHRoaXMub3B0aW9ucy5pc1JhbmdlLCBwbGFjZURlZmF1bHQpIFxuICAgICAgICB9XG4gICAgICAgIHRoaXMudGh1bWIucGxhY2VUaHVtYih0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGxhY2VEZWZhdWx0LCBwbGFjZVJpZ2h0KVxuICAgIH1cbiAgICBldmVudElucHV0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmZvcm0uZGVmYXVsdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSA9IE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0LnZhbHVlKVxuICAgICAgICAgICAgdGhpcy5zZXRJbnB1dCgpXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci51cGRhdGVNb2RlbCgnZGVmYXVsdCcsIE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0LnZhbHVlKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLnRodW1iLnNldFRodW1iVmFsdWUodGhpcy5vcHRpb25zLmlzUmFuZ2UsIFxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kZWZhdWx0VmFsdWUsIHRoaXMub3B0aW9ucy5yaWdodFZhbHVlKVxuICAgICAgICB9KVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlzUmFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5yaWdodElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5yaWdodFZhbHVlID0gTnVtYmVyKHRoaXMuZm9ybS5yaWdodElucHV0LnZhbHVlKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0SW5wdXQoKVxuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51cGRhdGVNb2RlbCgncmlnaHQnLCBOdW1iZXIodGhpcy5mb3JtLnJpZ2h0SW5wdXQudmFsdWUpKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy50aHVtYi5zZXRUaHVtYlZhbHVlKHRoaXMub3B0aW9ucy5pc1JhbmdlLCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSwgdGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNsaWNrT25CYXIoZWxlbTogTW91c2VFdmVudCkge1xuICAgICAgICBjb25zdCBjb29yZHM6IERPTVJlY3QgPSB0aGlzLnN0eWxlcy50cmFjay5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICBsZXQgbGVuZ3RoOiBudW1iZXIgPSBjb29yZHMucmlnaHQgLSBjb29yZHMubGVmdFxuICAgICAgICBsZXQgcmFuZ2U6IG51bWJlciA9IHRoaXMub3B0aW9ucy5tYXggLSB0aGlzLm9wdGlvbnMubWluXG4gICAgICAgIGxldCBjdXJyZW50UG9zaXRpb246IG51bWJlciA9IGVsZW0ucGFnZVggLSBjb29yZHMubGVmdFxuICAgICAgICBsZXQgcGVyY2VudDogbnVtYmVyXG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pc1ZlcnRpY2FsKSB7XG4gICAgICAgICAgICBjdXJyZW50UG9zaXRpb24gPSBlbGVtLnBhZ2VZIC0gY29vcmRzLnRvcFxuICAgICAgICAgICAgbGVuZ3RoID0gY29vcmRzLmJvdHRvbSAtIGNvb3Jkcy50b3BcbiAgICAgICAgICAgIGlmIChsZW5ndGggPCBjdXJyZW50UG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24gPSBsZW5ndGhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwZXJjZW50ID0gY3VycmVudFBvc2l0aW9uL2xlbmd0aCAqIDEwMFxuICAgICAgICBjb25zdCBuZXdWYWx1ZTogbnVtYmVyID0gTWF0aC5yb3VuZCh0aGlzLm9wdGlvbnMubWluICsgKChyYW5nZSkgKiBwZXJjZW50KSAvIDEwMClcbiAgICAgICAgdGhpcy5ldmVudENsaWNrKG5ld1ZhbHVlKVxuICAgIH1cbiAgICBldmVudENsaWNrKG5ld1ZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgaGFsZk9mQmFyOiBudW1iZXIgPSAodGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUgKyB0aGlzLm9wdGlvbnMuZGVmYXVsdFZhbHVlKSAvIDIgXG4gICAgICAgIGNvbnN0IGlzUmlnaHRUcmFjazogYm9vbGVhbiA9IHRoaXMub3B0aW9ucy5pc1JhbmdlICYmIG5ld1ZhbHVlID4gdGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUgXG4gICAgICAgIGNvbnN0IGlzUmlnaHRCYXIgPSB0aGlzLm9wdGlvbnMuaXNSYW5nZSAmJiBuZXdWYWx1ZSA+IGhhbGZPZkJhciBcbiAgICAgICAgaWYoaXNSaWdodFRyYWNrIHx8IGlzUmlnaHRCYXIpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5yaWdodFZhbHVlID0gbmV3VmFsdWVcbiAgICAgICAgICAgIHRoaXMuc2V0SW5wdXQoKVxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIudXBkYXRlTW9kZWwoJ3JpZ2h0JywgbmV3VmFsdWUpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy50aHVtYi5zZXRUaHVtYlZhbHVlKHRoaXMub3B0aW9ucy5pc1JhbmdlLCBcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZGVmYXVsdFZhbHVlLCB0aGlzLm9wdGlvbnMucmlnaHRWYWx1ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kZWZhdWx0VmFsdWUgPSBuZXdWYWx1ZVxuICAgICAgICAgICAgdGhpcy5zZXRJbnB1dCgpXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci51cGRhdGVNb2RlbCgnZGVmYXVsdCcsIG5ld1ZhbHVlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMudGh1bWIuc2V0VGh1bWJWYWx1ZSh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSwgdGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUpXG4gICAgICAgIH1cbiAgICB9XG4gICAgZXZlbnRIb3ZlciA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5mb3JtLmRlZmF1bHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm92ZXJUaHVtYkVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iT3V0cHV0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdmFsdWUtdGh1bWJfYmlnJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudGh1bWIudGh1bWJEZWZhdWx0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdGh1bWJfaG92ZXInKVxuICAgICAgICB9KVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlzUmFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5yaWdodElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm92ZXJUaHVtYkVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHVtYi50aHVtYk91dHB1dFJpZ2h0Py5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3ZhbHVlLXRodW1iX2JpZycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudGh1bWIudGh1bWJSaWdodC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3RodW1iX2hvdmVyJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZvcm0uZGVmYXVsdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5vdmVyVGh1bWJFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHVtYi50aHVtYk91dHB1dC5jbGFzc0xpc3QucmVtb3ZlKCdyYW5nZS1zbGlkZXJfX3ZhbHVlLXRodW1iX2JpZycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iRGVmYXVsdC5jbGFzc0xpc3QucmVtb3ZlKCdyYW5nZS1zbGlkZXJfX3RodW1iX2hvdmVyJylcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pc1JhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm0ucmlnaHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm92ZXJUaHVtYkVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHVtYi50aHVtYk91dHB1dFJpZ2h0Py5jbGFzc0xpc3QucmVtb3ZlKCdyYW5nZS1zbGlkZXJfX3ZhbHVlLXRodW1iX2JpZycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudGh1bWIudGh1bWJSaWdodC5jbGFzc0xpc3QucmVtb3ZlKCdyYW5nZS1zbGlkZXJfX3RodW1iX2hvdmVyJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgZXZlbnRBY3RpdmUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50aHVtYi50aHVtYkRlZmF1bHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYl9hY3RpdmUnKVxuICAgICAgICB9KVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlzUmFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5yaWdodElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iUmlnaHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYl9hY3RpdmUnKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudGh1bWIudGh1bWJEZWZhdWx0LmNsYXNzTGlzdC5yZW1vdmUoJ3JhbmdlLXNsaWRlcl9fdGh1bWJfYWN0aXZlJylcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pc1JhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm0ucmlnaHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudGh1bWIudGh1bWJSaWdodC5jbGFzc0xpc3QucmVtb3ZlKCdyYW5nZS1zbGlkZXJfX3RodW1iX2FjdGl2ZScpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQge1ZpZXd9Il0sInNvdXJjZVJvb3QiOiIifQ==