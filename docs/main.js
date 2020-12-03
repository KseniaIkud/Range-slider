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
    return new _mvc_controller_ts__WEBPACK_IMPORTED_MODULE_3__["Controller"](new _mvc_model_ts__WEBPACK_IMPORTED_MODULE_2__["Model"]({
      min: settings.min,
      max: settings.max,
      defaultValue: settings.isRange && settings.leftValue || settings.initialValue,
      rightValue: settings.rightValue,
      isRange: settings.isRange,
      rightProgressBar: settings.rightProgressBar,
      overThumbElement: settings.overThumbElement,
      step: settings.step,
      isVertical: settings.isVertical,
      isScale: settings.isScale
    }), new _mvc_view_ts__WEBPACK_IMPORTED_MODULE_1__["View"](this, new _mvc_subViews_ts__WEBPACK_IMPORTED_MODULE_0__["Form"](), new _mvc_subViews_ts__WEBPACK_IMPORTED_MODULE_0__["Styles"](), new _mvc_subViews_ts__WEBPACK_IMPORTED_MODULE_0__["ProgressBar"](), new _mvc_subViews_ts__WEBPACK_IMPORTED_MODULE_0__["Thumb"]()));
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

    this.min = Number(options.min || 0);
    this.max = Number(options.max === 0 ? 0 : options.max || 100);
    this.defaultValue = Number(options.defaultValue === 0 ? 0 : options.defaultValue || 50);
    this.rightValue = Number(options.rightValue === 0 ? 0 : options.rightValue || 50);
    this.step = Number(options.step || 1);
    this.isRange = options.isRange || false;
    this.rightProgressBar = options.rightProgressBar || false;
    this.overThumbElement = options.overThumbElement || false;
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

      // сделать проверку на подключение шкалы
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
      } // наоборот же, не? Если нет - добавить, если есть - не надо.

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
      if (this.thumbOutput) {
        this.thumbOutput.textContent = String(value);

        if (isDouble) {
          this.thumbOutputRight.textContent = String(rightValue);
        }
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

    _defineProperty(this, "singleInput", void 0);

    _defineProperty(this, "leftInput", void 0);

    _defineProperty(this, "rightInput", void 0);

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

      _this.createInputs();
    });

    _defineProperty(this, "createWrapper", function () {
      _this.wrapper = document.createElement('div');

      _this.wrapper.classList.add('range-slider');

      _this.parent.append(_this.wrapper);
    });

    _defineProperty(this, "createScale", function () {
      var scale = document.createElement('div');
      scale.classList.add('range-slider__scale');

      _this.wrapper.append(scale, _this.styles.style);

      var _loop = function _loop(i) {
        var divValue = document.createElement('div');
        divValue.classList.add('range-slider__value');
        var value = _this.options.scaleValues[i];
        divValue.textContent = String('– ' + value);
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
      return (0.42 * containerWidth + 777.8) / containerWidth;
    });

    _defineProperty(this, "createInputs", function () {
      if (_this.options.isRange) {
        var leftInput = document.createElement('input');
        leftInput.classList.add('range-slider__window-value');
        leftInput.placeholder = 'left value';
        leftInput.value = String(_this.options.defaultValue);
        _this.leftInput = leftInput;

        _this.wrapper.append(_this.leftInput);

        var rightInput = document.createElement('input');
        rightInput.classList.add('range-slider__window-value', 'range-slider__window-value_right');
        rightInput.placeholder = 'right value';
        rightInput.value = String(_this.options.rightValue);
        _this.rightInput = rightInput;

        _this.wrapper.append(_this.rightInput);
      } else {
        var singleInput = document.createElement('input');
        singleInput.classList.add('range-slider__window-value');
        singleInput.placeholder = 'value';
        singleInput.value = String(_this.options.defaultValue);
        _this.singleInput = singleInput;

        _this.wrapper.append(_this.singleInput);
      }
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

        if (_this.options.isRange) {
          _this.leftInput.value = String(_this.options.defaultValue);
        } else {
          _this.singleInput.value = String(_this.options.defaultValue);
        }
      });

      if (_this.options.isRange) {
        _this.form.rightInput.addEventListener('input', function () {
          _this.options.rightValue = Number(_this.form.rightInput.value);

          _this.setInput();

          _this.observers.forEach(function (observer) {
            observer.updateModel('right', Number(_this.form.rightInput.value));
          });

          _this.thumb.setThumbValue(_this.options.isRange, _this.options.defaultValue, _this.options.rightValue);

          _this.rightInput.value = String(_this.options.rightValue);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4gc3luYyBcXC4odHN8c2NzcykkIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2pxdWVyeS5tYWluLmQudHMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5zY3NzIiwid2VicGFjazovLy8uL212Yy9jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL212Yy9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9tdmMvc3ViVmlld3MudHMiLCJ3ZWJwYWNrOi8vLy4vbXZjL3ZpZXcudHMiXSwibmFtZXMiOlsiaW1wb3J0QWxsIiwiciIsImtleXMiLCJmb3JFYWNoIiwicmVxdWlyZSIsIiQiLCJmbiIsInJhbmdlU2xpZGVyIiwic2V0dGluZ3MiLCJDb250cm9sbGVyIiwiTW9kZWwiLCJtaW4iLCJtYXgiLCJkZWZhdWx0VmFsdWUiLCJpc1JhbmdlIiwibGVmdFZhbHVlIiwiaW5pdGlhbFZhbHVlIiwicmlnaHRWYWx1ZSIsInJpZ2h0UHJvZ3Jlc3NCYXIiLCJvdmVyVGh1bWJFbGVtZW50Iiwic3RlcCIsImlzVmVydGljYWwiLCJpc1NjYWxlIiwiVmlldyIsIkZvcm0iLCJTdHlsZXMiLCJQcm9ncmVzc0JhciIsIlRodW1iIiwialF1ZXJ5IiwibW9kZWwiLCJ2aWV3IiwiaW5pdCIsIm9wdGlvbnMiLCJkYXRhRm9yVmlldyIsInN1YnNjcmliZSIsIm9wdGlvbiIsIm5ld1ZhbHVlIiwidXBkYXRlIiwic2V0SW5wdXQiLCJzZXRTY2FsZSIsIk51bWJlciIsInNjYWxlVmFsdWVzIiwib2JzZXJ2ZXJzIiwib2JzZXJ2ZXIiLCJwdXNoIiwibGltaXRUb2dnbGUiLCJsaW1pdFN0ZXAiLCJhbGxWYWx1ZXMiLCJpIiwibGVuZ3RoIiwic2NhbGVTdGVwIiwiTWF0aCIsInJvdW5kIiwibGFzdFZhbHVlIiwiaW5kZXhPZiIsInVwZGF0ZVZpZXciLCJjYWxjTmVhcmVzdCIsInJvdW5kVG9NaW4iLCJwYXJlbnQiLCJpc0RvdWJsZSIsImNyZWF0ZUZvcm0iLCJjcmVhdGVJbnB1dCIsInNldE1pbiIsInNldE1heCIsImZvcm0iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmQiLCJkZWZhdWx0SW5wdXQiLCJ0eXBlIiwicmlnaHRJbnB1dCIsInZhbHVlIiwiTmFOIiwiU3RyaW5nIiwiY3JlYXRlU3R5bGVzIiwiY3JlYXRlVHJhY2siLCJzdHlsZSIsInRyYWNrIiwiYmFyIiwicGVyY2VudCIsInBlcmNlbnRSaWdodCIsImxlZnQiLCJyaWdodCIsInRvZ2dsZUVsZW1lbnQiLCJjcmVhdGVUaHVtYiIsImNyZWF0ZVRodW1iRWxlbWVudCIsInRodW1iRGVmYXVsdCIsInRodW1iUmlnaHQiLCJzZXRUaHVtYlZhbHVlIiwiY2xhc3NOYW1lIiwicmlnaHRQYXJlbnQiLCJ0aHVtYk91dHB1dFJpZ2h0IiwidGh1bWJPdXRwdXQiLCJ0ZXh0Q29udGVudCIsInN0eWxlcyIsInByb2dyZXNzQmFyIiwidGh1bWIiLCJjcmVhdGVXcmFwcGVyIiwid3JhcHBlciIsImNyZWF0ZVByb2dyZXNzQmFyIiwiZXZlbnRJbnB1dCIsIm9ubW91c2Vkb3duIiwiZWxlbSIsImNsaWNrT25CYXIiLCJldmVudEhvdmVyIiwiZXZlbnRBY3RpdmUiLCJjcmVhdGVTY2FsZSIsImNyZWF0ZUlucHV0cyIsInNjYWxlIiwiZGl2VmFsdWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnRDbGljayIsIm1hcmdpbkxlZnQiLCJwbGFjZVNjYWxlIiwiY29udGFpbmVyV2lkdGgiLCJvZmZzZXRXaWR0aCIsImxlZnRJbnB1dCIsInBsYWNlaG9sZGVyIiwic2luZ2xlSW5wdXQiLCJzZXRJbnB1dFZhbHVlIiwicGxhY2VEZWZhdWx0IiwiY2FsY1BlcmNlbnQiLCJwbGFjZVJpZ2h0Iiwic2V0RGVmYXVsdCIsInNldFJpZ2h0IiwicGxhY2VUaHVtYiIsInVwZGF0ZU1vZGVsIiwicmVtb3ZlIiwiY29vcmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmFuZ2UiLCJjdXJyZW50UG9zaXRpb24iLCJwYWdlWCIsInBhZ2VZIiwidG9wIiwiYm90dG9tIiwiaGFsZk9mQmFyIiwiaXNSaWdodFRyYWNrIiwiaXNSaWdodEJhciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBO1FBQ0EsMENBQTBDO1FBQzFDOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQSxvQkFBb0I7UUFDcEI7UUFDQTtRQUNBO1FBQ0Esd0JBQXdCO1FBQ3hCO1FBQ0E7UUFDQSxtQkFBbUIsNkJBQTZCO1FBQ2hEO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxtQkFBbUIsOEJBQThCO1FBQ2pEO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0EsS0FBSztRQUNMOztRQUVBOztRQUVBO1FBQ0EsaUNBQWlD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QUF5QixLQUFLMUQsT0FBTCxDQUFhbEIsT0FBdEMsRUFDSSxLQUFLa0IsT0FBTCxDQUFhbkIsWUFEakIsRUFDK0IsS0FBS21CLE9BQUwsQ0FBYWYsVUFENUM7QUFFSDtBQUNKIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBDU1MgY2h1bmtzXG4gXHR2YXIgaW5zdGFsbGVkQ3NzQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIHNjcmlwdCBwYXRoIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBqc29ucFNjcmlwdFNyYyhjaHVua0lkKSB7XG4gXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIENTUyBsb2FkaW5nXG4gXHRcdHZhciBjc3NDaHVua3MgPSB7XCIwXCI6MX07XG4gXHRcdGlmKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSkgcHJvbWlzZXMucHVzaChpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0pO1xuIFx0XHRlbHNlIGlmKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSAhPT0gMCAmJiBjc3NDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0dmFyIGhyZWYgPSBcIlwiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmNzc1wiO1xuIFx0XHRcdFx0dmFyIGZ1bGxocmVmID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgaHJlZjtcbiBcdFx0XHRcdHZhciBleGlzdGluZ0xpbmtUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaW5rXCIpO1xuIFx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nTGlua1RhZ3MubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0dmFyIHRhZyA9IGV4aXN0aW5nTGlua1RhZ3NbaV07XG4gXHRcdFx0XHRcdHZhciBkYXRhSHJlZiA9IHRhZy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIikgfHwgdGFnLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gXHRcdFx0XHRcdGlmKHRhZy5yZWwgPT09IFwic3R5bGVzaGVldFwiICYmIChkYXRhSHJlZiA9PT0gaHJlZiB8fCBkYXRhSHJlZiA9PT0gZnVsbGhyZWYpKSByZXR1cm4gcmVzb2x2ZSgpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0dmFyIGV4aXN0aW5nU3R5bGVUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzdHlsZVwiKTtcbiBcdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBleGlzdGluZ1N0eWxlVGFncy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgdGFnID0gZXhpc3RpbmdTdHlsZVRhZ3NbaV07XG4gXHRcdFx0XHRcdHZhciBkYXRhSHJlZiA9IHRhZy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIik7XG4gXHRcdFx0XHRcdGlmKGRhdGFIcmVmID09PSBocmVmIHx8IGRhdGFIcmVmID09PSBmdWxsaHJlZikgcmV0dXJuIHJlc29sdmUoKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHZhciBsaW5rVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gXHRcdFx0XHRsaW5rVGFnLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuIFx0XHRcdFx0bGlua1RhZy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuIFx0XHRcdFx0bGlua1RhZy5vbmxvYWQgPSByZXNvbHZlO1xuIFx0XHRcdFx0bGlua1RhZy5vbmVycm9yID0gZnVuY3Rpb24oZXZlbnQpIHtcbiBcdFx0XHRcdFx0dmFyIHJlcXVlc3QgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYyB8fCBmdWxsaHJlZjtcbiBcdFx0XHRcdFx0dmFyIGVyciA9IG5ldyBFcnJvcihcIkxvYWRpbmcgQ1NTIGNodW5rIFwiICsgY2h1bmtJZCArIFwiIGZhaWxlZC5cXG4oXCIgKyByZXF1ZXN0ICsgXCIpXCIpO1xuIFx0XHRcdFx0XHRlcnIuY29kZSA9IFwiQ1NTX0NIVU5LX0xPQURfRkFJTEVEXCI7XG4gXHRcdFx0XHRcdGVyci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiBcdFx0XHRcdFx0ZGVsZXRlIGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXVxuIFx0XHRcdFx0XHRsaW5rVGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGlua1RhZylcbiBcdFx0XHRcdFx0cmVqZWN0KGVycik7XG4gXHRcdFx0XHR9O1xuIFx0XHRcdFx0bGlua1RhZy5ocmVmID0gZnVsbGhyZWY7XG5cbiBcdFx0XHRcdHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xuIFx0XHRcdFx0aGVhZC5hcHBlbmRDaGlsZChsaW5rVGFnKTtcbiBcdFx0XHR9KS50aGVuKGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0aW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0XHR9KSk7XG4gXHRcdH1cblxuIFx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG4gXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuIFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07XG4gXHRcdFx0XHR9KTtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cbiBcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0XHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0XHRcdHZhciBvblNjcmlwdENvbXBsZXRlO1xuXG4gXHRcdFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcbiBcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG4gXHRcdFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHNjcmlwdC5zcmMgPSBqc29ucFNjcmlwdFNyYyhjaHVua0lkKTtcblxuIFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuIFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG4gXHRcdFx0XHRvblNjcmlwdENvbXBsZXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gXHRcdFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG4gXHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuIFx0XHRcdFx0XHRcdFx0Y2h1bmtbMV0oZXJyb3IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH07XG4gXHRcdFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiBcdFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSh7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSk7XG4gXHRcdFx0XHR9LCAxMjAwMDApO1xuIFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2pxdWVyeS5tYWluLmQudHNcIjogXCIuL2pxdWVyeS5tYWluLmQudHNcIixcblx0XCIuL21haW4uc2Nzc1wiOiBcIi4vbWFpbi5zY3NzXCIsXG5cdFwiLi9tdmMvY29udHJvbGxlci50c1wiOiBcIi4vbXZjL2NvbnRyb2xsZXIudHNcIixcblx0XCIuL212Yy9tb2RlbC50c1wiOiBcIi4vbXZjL21vZGVsLnRzXCIsXG5cdFwiLi9tdmMvc3ViVmlld3MudHNcIjogXCIuL212Yy9zdWJWaWV3cy50c1wiLFxuXHRcIi4vbXZjL3ZpZXcudHNcIjogXCIuL212Yy92aWV3LnRzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgcmVjdXJzaXZlIFxcXFwuKHRzfHNjc3MpJFwiOyIsIlxuZnVuY3Rpb24gaW1wb3J0QWxsKHIpIHtcbiAgci5rZXlzKCkuZm9yRWFjaChyKVxufVxuXG5pbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuLycsIHRydWUsIC9cXC4odHN8c2NzcykkLykpXG5pbXBvcnQgKCcuL2RlbW8vZGVtbycpXG5cbiIsIlxuaW1wb3J0IHtGb3JtLCBTdHlsZXMsIFByb2dyZXNzQmFyLCBUaHVtYn0gZnJvbSAnLi9tdmMvc3ViVmlld3MudHMnXG5pbXBvcnQge1ZpZXd9IGZyb20gJy4vbXZjL3ZpZXcudHMnXG5pbXBvcnQge01vZGVsfSBmcm9tICcuL212Yy9tb2RlbC50cydcbmltcG9ydCB7Q29udHJvbGxlcn0gZnJvbSAnLi9tdmMvY29udHJvbGxlci50cydcblxuXG4oZnVuY3Rpb24oJDogSlF1ZXJ5U3RhdGljKSB7XG4gICAgJC5mbi5yYW5nZVNsaWRlciA9IGZ1bmN0aW9uKHNldHRpbmdzOiB7XG4gICAgICAgIG1pbj86IG51bWJlclxuICAgICAgICBtYXg/OiBudW1iZXJcbiAgICAgICAgaW5pdGlhbFZhbHVlPzogbnVtYmVyXG4gICAgICAgIGxlZnRWYWx1ZT86IG51bWJlclxuICAgICAgICByaWdodFZhbHVlPzogbnVtYmVyXG4gICAgICAgIGlzUmFuZ2U/OiBib29sZWFuXG4gICAgICAgIHJpZ2h0UHJvZ3Jlc3NCYXI/OiBib29sZWFuXG4gICAgICAgIG92ZXJUaHVtYkVsZW1lbnQ/OiBib29sZWFuXG4gICAgICAgIHN0ZXA/OiBudW1iZXJcbiAgICAgICAgaXNWZXJ0aWNhbD86IGJvb2xlYW5cbiAgICAgICAgaXNTY2FsZT86IGJvb2xlYW5cbiAgICB9KSB7XG4gICAgICAgIHJldHVybiBuZXcgQ29udHJvbGxlcihcbiAgICAgICAgICAgIG5ldyBNb2RlbCh7XG4gICAgICAgICAgICAgICAgbWluOiBzZXR0aW5ncy5taW4sXG4gICAgICAgICAgICAgICAgbWF4OiBzZXR0aW5ncy5tYXgsXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBzZXR0aW5ncy5pc1JhbmdlICYmIHNldHRpbmdzLmxlZnRWYWx1ZSB8fCBzZXR0aW5ncy5pbml0aWFsVmFsdWUsXG4gICAgICAgICAgICAgICAgcmlnaHRWYWx1ZTogc2V0dGluZ3MucmlnaHRWYWx1ZSxcbiAgICAgICAgICAgICAgICBpc1JhbmdlOiBzZXR0aW5ncy5pc1JhbmdlLFxuICAgICAgICAgICAgICAgIHJpZ2h0UHJvZ3Jlc3NCYXI6IHNldHRpbmdzLnJpZ2h0UHJvZ3Jlc3NCYXIsXG4gICAgICAgICAgICAgICAgb3ZlclRodW1iRWxlbWVudDogc2V0dGluZ3Mub3ZlclRodW1iRWxlbWVudCxcbiAgICAgICAgICAgICAgICBzdGVwOiBzZXR0aW5ncy5zdGVwLFxuICAgICAgICAgICAgICAgIGlzVmVydGljYWw6IHNldHRpbmdzLmlzVmVydGljYWwsXG4gICAgICAgICAgICAgICAgaXNTY2FsZTogc2V0dGluZ3MuaXNTY2FsZVxuICAgICAgICAgICAgfSksIFxuICAgICAgICAgICAgbmV3IFZpZXcoIFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgbmV3IEZvcm0oKSxcbiAgICAgICAgICAgICAgICBuZXcgU3R5bGVzKCksXG4gICAgICAgICAgICAgICAgbmV3IFByb2dyZXNzQmFyKCksXG4gICAgICAgICAgICAgICAgbmV3IFRodW1iKCkgXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICB9XG59KShqUXVlcnkpXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MDY5ODU0NDc4OTVcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL2hvbWUveGVuYS9SYW5nZS1zbGlkZXIvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInJlbG9hZEFsbFwiOnRydWUsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJpbXBvcnQge01vZGVsfSBmcm9tICcuL21vZGVsJ1xuaW1wb3J0IHtWaWV3fSBmcm9tICcuL3ZpZXcnXG5cbmNsYXNzIENvbnRyb2xsZXIge1xuICAgIG1vZGVsOiBNb2RlbFxuICAgIHZpZXc6IFZpZXdcbiAgICBjb25zdHJ1Y3Rvcihtb2RlbDogTW9kZWwsIHZpZXc6IFZpZXcpIHtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsXG4gICAgICAgIHRoaXMudmlldyA9IHZpZXdcbiAgICAgICAgXG4gICAgICAgIHRoaXMuaW5pdCgpIFxuICAgIH1cbiAgICBpbml0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLm1vZGVsLmluaXQoKVxuICAgICAgICB0aGlzLnZpZXcub3B0aW9ucyA9IHRoaXMubW9kZWwuZGF0YUZvclZpZXdcbiAgICAgICAgdGhpcy52aWV3LmluaXQoKVxuXG4gICAgICAgIFxuICAgICAgICB0aGlzLm1vZGVsLnN1YnNjcmliZSh0aGlzKVxuICAgICAgICB0aGlzLnZpZXcuc3Vic2NyaWJlKHRoaXMpXG4gICAgICAgIFxuICAgIH1cbiAgICB1cGRhdGVNb2RlbChvcHRpb246IHN0cmluZywgbmV3VmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLm1vZGVsLnVwZGF0ZShvcHRpb24sIG5ld1ZhbHVlKVxuICAgIH1cbiAgICB1cGRhdGVWaWV3KCkge1xuICAgICAgICB0aGlzLnZpZXcub3B0aW9ucy5kZWZhdWx0VmFsdWUgPSB0aGlzLm1vZGVsLmRlZmF1bHRWYWx1ZVxuICAgICAgICB0aGlzLnZpZXcub3B0aW9ucy5yaWdodFZhbHVlID0gdGhpcy5tb2RlbC5yaWdodFZhbHVlXG4gICAgICAgIHRoaXMudmlldy5zZXRJbnB1dCgpXG4gICAgfVxufVxuXG5leHBvcnQge0NvbnRyb2xsZXJ9IiwiaW50ZXJmYWNlIElEYXRhIHtcbiAgICBtaW46IG51bWJlclxuICAgIG1heDogbnVtYmVyXG4gICAgZGVmYXVsdFZhbHVlOiBudW1iZXJcbiAgICByaWdodFZhbHVlOiBudW1iZXJcbiAgICBpc1JhbmdlOiBib29sZWFuXG4gICAgcmlnaHRQcm9ncmVzc0JhcjogYm9vbGVhblxuICAgIG92ZXJUaHVtYkVsZW1lbnQ6IGJvb2xlYW5cbiAgICBpc1ZlcnRpY2FsOiBib29sZWFuXG4gICAgc3RlcD86IG51bWJlclxuICAgIGlzU2NhbGU6IGJvb2xlYW5cbiAgICBzY2FsZVZhbHVlczogQXJyYXk8bnVtYmVyPlxufVxuaW50ZXJmYWNlIElPYnNlcnZlck1vZGVsIHtcbiAgICB1cGRhdGVWaWV3KCk6IHZvaWRcbn1cblxuY2xhc3MgTW9kZWwge1xuICAgIG1pbjogbnVtYmVyXG4gICAgbWF4OiBudW1iZXJcbiAgICBkZWZhdWx0VmFsdWU6IG51bWJlclxuICAgIHJpZ2h0VmFsdWU6IG51bWJlclxuICAgIGlzUmFuZ2U6IGJvb2xlYW5cbiAgICByaWdodFByb2dyZXNzQmFyOiBib29sZWFuXG4gICAgb3ZlclRodW1iRWxlbWVudDogYm9vbGVhblxuICAgIGRhdGFGb3JWaWV3OiBJRGF0YVxuICAgIHN0ZXA6IG51bWJlclxuICAgIGlzVmVydGljYWw6IGJvb2xlYW5cbiAgICBpc1NjYWxlOiBib29sZWFuXG4gICAgc2NhbGVWYWx1ZXM6IG51bWJlcltdXG4gICAgb2JzZXJ2ZXJzOiBJT2JzZXJ2ZXJNb2RlbFtdXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogSURhdGEpIHtcbiAgICAgICAgdGhpcy5taW4gPSBOdW1iZXIob3B0aW9ucy5taW4gfHwgMClcbiAgICAgICAgdGhpcy5tYXggPSBOdW1iZXIob3B0aW9ucy5tYXggPT09IDAgPyAwIDogKG9wdGlvbnMubWF4IHx8IDEwMCkpXG4gICAgICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gTnVtYmVyKG9wdGlvbnMuZGVmYXVsdFZhbHVlID09PSAwID8gMCA6IChvcHRpb25zLmRlZmF1bHRWYWx1ZSB8fCA1MCkpXG4gICAgICAgIHRoaXMucmlnaHRWYWx1ZSA9IE51bWJlcihvcHRpb25zLnJpZ2h0VmFsdWUgPT09IDAgPyAwIDogKG9wdGlvbnMucmlnaHRWYWx1ZSB8fCA1MCkpXG4gICAgICAgIHRoaXMuc3RlcCA9IE51bWJlcihvcHRpb25zLnN0ZXAgfHwgMSlcbiAgICAgICAgdGhpcy5pc1JhbmdlID0gb3B0aW9ucy5pc1JhbmdlIHx8IGZhbHNlXG4gICAgICAgIHRoaXMucmlnaHRQcm9ncmVzc0JhciA9IG9wdGlvbnMucmlnaHRQcm9ncmVzc0JhciB8fCBmYWxzZVxuICAgICAgICB0aGlzLm92ZXJUaHVtYkVsZW1lbnQgPSBvcHRpb25zLm92ZXJUaHVtYkVsZW1lbnQgfHwgZmFsc2VcbiAgICAgICAgdGhpcy5pc1ZlcnRpY2FsID0gb3B0aW9ucy5pc1ZlcnRpY2FsIHx8IGZhbHNlXG4gICAgICAgIHRoaXMuaXNTY2FsZSA9IG9wdGlvbnMuaXNTY2FsZSB8fCBmYWxzZVxuICAgICAgICB0aGlzLnNjYWxlVmFsdWVzID0gW11cbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXVxuICAgICAgICB0aGlzLmRhdGFGb3JWaWV3ID0ge1xuICAgICAgICAgICAgbWluOiB0aGlzLm1pbixcbiAgICAgICAgICAgIG1heDogdGhpcy5tYXgsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IHRoaXMuZGVmYXVsdFZhbHVlLFxuICAgICAgICAgICAgcmlnaHRWYWx1ZTogdGhpcy5yaWdodFZhbHVlLFxuICAgICAgICAgICAgaXNSYW5nZTogdGhpcy5pc1JhbmdlLFxuICAgICAgICAgICAgcmlnaHRQcm9ncmVzc0JhcjogdGhpcy5yaWdodFByb2dyZXNzQmFyLFxuICAgICAgICAgICAgb3ZlclRodW1iRWxlbWVudDogdGhpcy5vdmVyVGh1bWJFbGVtZW50LFxuICAgICAgICAgICAgaXNWZXJ0aWNhbDogdGhpcy5pc1ZlcnRpY2FsLFxuICAgICAgICAgICAgaXNTY2FsZTogdGhpcy5pc1NjYWxlLFxuICAgICAgICAgICAgc2NhbGVWYWx1ZXM6IHRoaXMuc2NhbGVWYWx1ZXNcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdWJzY3JpYmUob2JzZXJ2ZXI6IElPYnNlcnZlck1vZGVsKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpXG4gICAgfVxuICAgIGluaXQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U2NhbGUoKVxuICAgIH1cbiAgICB1cGRhdGUob3B0aW9uOiBzdHJpbmcsIG5ld1ZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5saW1pdFRvZ2dsZShvcHRpb24sIG5ld1ZhbHVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5saW1pdFN0ZXAobmV3VmFsdWUpXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0U2NhbGUoKSB7XG4gICAgICAgIC8vINGB0LTQtdC70LDRgtGMINC/0YDQvtCy0LXRgNC60YMg0L3QsCDQv9C+0LTQutC70Y7Rh9C10L3QuNC1INGI0LrQsNC70YtcbiAgICAgICAgbGV0IGFsbFZhbHVlczogbnVtYmVyW10gPSBbXVxuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gdGhpcy5taW47IGkgPD0gdGhpcy5tYXg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgJSB0aGlzLnN0ZXAgPT09IDApIHtcbiAgICAgICAgICAgICAgICBhbGxWYWx1ZXMucHVzaChpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhbGxWYWx1ZXMubGVuZ3RoIDw9IDExKSB7XG4gICAgICAgICAgICBhbGxWYWx1ZXMuZm9yRWFjaChpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjYWxlVmFsdWVzLnB1c2goaSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgc2NhbGVTdGVwID0gTWF0aC5yb3VuZChhbGxWYWx1ZXMubGVuZ3RoIC8gMTApXG4gICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgYWxsVmFsdWVzLmxlbmd0aDsgaSs9c2NhbGVTdGVwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2FsZVZhbHVlcy5wdXNoKGFsbFZhbHVlc1tpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgbGFzdFZhbHVlOiBudW1iZXIgPSBhbGxWYWx1ZXNbYWxsVmFsdWVzLmxlbmd0aCAtIDFdXG4gICAgICAgIGlmKHRoaXMuc2NhbGVWYWx1ZXMuaW5kZXhPZihsYXN0VmFsdWUpICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5zY2FsZVZhbHVlcy5wdXNoKGxhc3RWYWx1ZSlcbiAgICAgICAgfSAvLyDQvdCw0L7QsdC+0YDQvtGCINC20LUsINC90LU/INCV0YHQu9C4INC90LXRgiAtINC00L7QsdCw0LLQuNGC0YwsINC10YHQu9C4INC10YHRgtGMIC0g0L3QtSDQvdCw0LTQvi5cbiAgICAgICAgXG4gICAgfVxuICAgIGxpbWl0VG9nZ2xlKG9wdGlvbjogc3RyaW5nLCBuZXdWYWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHN3aXRjaCAob3B0aW9uKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UoJ2RlZmF1bHQnKTpcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUgPCB0aGlzLnJpZ2h0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saW1pdFN0ZXAobmV3VmFsdWUpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51cGRhdGVWaWV3KClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FzZSgncmlnaHQnKTpcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA+IHRoaXMuZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGltaXRTdGVwKG5ld1ZhbHVlLCAncmlnaHQnKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVwZGF0ZVZpZXcoKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICBsaW1pdFN0ZXAobmV3VmFsdWU6IG51bWJlciwgb3B0aW9uOiBzdHJpbmcgPSAnZGVmYXVsdCcpIHtcbiAgICAgICAgc3dpdGNoKG9wdGlvbikge1xuICAgICAgICAgICAgY2FzZSgnZGVmYXVsdCcpOiBcbiAgICAgICAgICAgIGlmKG5ld1ZhbHVlICUgdGhpcy5zdGVwID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0VmFsdWUgPSBuZXdWYWx1ZVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IHRoaXMuY2FsY05lYXJlc3QobmV3VmFsdWUpXG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVwZGF0ZVZpZXcoKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVha1xuXG5cbiAgICAgICAgICAgIGNhc2UoJ3JpZ2h0Jyk6XG4gICAgICAgICAgICBpZihuZXdWYWx1ZSAlIHRoaXMuc3RlcCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmlnaHRWYWx1ZSA9IG5ld1ZhbHVlXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmlnaHRWYWx1ZSA9IHRoaXMuY2FsY05lYXJlc3QobmV3VmFsdWUpXG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVwZGF0ZVZpZXcoKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgIH1cbiAgICBjYWxjTmVhcmVzdChuZXdWYWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHJvdW5kVG9NaW4gPSBuZXdWYWx1ZSAtIChuZXdWYWx1ZSAlIHRoaXMuc3RlcClcbiAgICAgICAgaWYgKChuZXdWYWx1ZSAlIHRoaXMuc3RlcCkgPiAodGhpcy5zdGVwIC8gMikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0ZXAgKyByb3VuZFRvTWluXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvdW5kVG9NaW5cbiAgICB9XG59XG5cbmV4cG9ydCB7TW9kZWx9XG4iLCJjbGFzcyBGb3JtIHtcbiAgICBmb3JtITogSFRNTERpdkVsZW1lbnRcbiAgICBkZWZhdWx0SW5wdXQhOiBIVE1MSW5wdXRFbGVtZW50XG4gICAgcmlnaHRJbnB1dCE6IEhUTUxJbnB1dEVsZW1lbnRcblxuICAgIGluaXQocGFyZW50OiBIVE1MRGl2RWxlbWVudCwgaXNEb3VibGU6IGJvb2xlYW4sIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZUZvcm0ocGFyZW50KVxuICAgICAgICB0aGlzLmNyZWF0ZUlucHV0KGlzRG91YmxlKVxuICAgICAgICB0aGlzLnNldE1pbihpc0RvdWJsZSwgbWluKVxuICAgICAgICB0aGlzLnNldE1heChpc0RvdWJsZSwgbWF4KVxuICAgIH1cblxuICAgIGNyZWF0ZUZvcm0ocGFyZW50OiBIVE1MRGl2RWxlbWVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZvcm0gPSA8SFRNTERpdkVsZW1lbnQ+KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKVxuICAgICAgICB0aGlzLmZvcm0uY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19mb3JtJylcbiAgICAgICAgcGFyZW50LmFwcGVuZCh0aGlzLmZvcm0pXG4gICAgfVxuICAgIFxuICAgIGNyZWF0ZUlucHV0KGlzRG91YmxlOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGlmIChpc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC50eXBlID0gJ3JhbmdlJ1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19pbnB1dCcpIFxuICAgICAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19pbnB1dF9sZWZ0JylcbiAgICAgICAgICAgIHRoaXMuZm9ybS5hcHBlbmQodGhpcy5kZWZhdWx0SW5wdXQpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMucmlnaHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgIHRoaXMucmlnaHRJbnB1dC50eXBlID0gJ3JhbmdlJ1xuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9faW5wdXQnKVxuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9faW5wdXRfcmlnaHQnKVxuICAgICAgICAgICAgdGhpcy5mb3JtLmFwcGVuZCh0aGlzLnJpZ2h0SW5wdXQpXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQudHlwZSA9ICdyYW5nZSdcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9faW5wdXQnKVxuICAgICAgICAgICAgdGhpcy5mb3JtLmFwcGVuZCh0aGlzLmRlZmF1bHRJbnB1dClcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRJbnB1dFZhbHVlKGlzRG91YmxlOiBib29sZWFuLCB2YWx1ZTogbnVtYmVyLCByaWdodFZhbHVlOiBudW1iZXIgPSBOYU4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQudmFsdWUgPSBTdHJpbmcodmFsdWUpXG4gICAgICAgIGlmIChpc0RvdWJsZSkgeyAgIFxuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0LnZhbHVlID0gU3RyaW5nKHJpZ2h0VmFsdWUpXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0TWluKGlzRG91YmxlOiBib29sZWFuLCBtaW46IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC5taW4gPSBTdHJpbmcobWluKVxuICAgICAgICBpZiAoaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHRJbnB1dC5taW4gPSBTdHJpbmcobWluKVxuICAgICAgICB9XG4gICAgfVxuICAgIHNldE1heChpc0RvdWJsZTogYm9vbGVhbiwgbWF4OiBudW1iZXIgPSAxMDApOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQubWF4ID0gU3RyaW5nKG1heClcbiAgICAgICAgaWYgKGlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQubWF4ID0gU3RyaW5nKG1heClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgU3R5bGVzIHtcbiAgICBzdHlsZSE6IEhUTUxEaXZFbGVtZW50XG4gICAgdHJhY2shOiBIVE1MRGl2RWxlbWVudFxuXG4gICAgaW5pdChwYXJlbnQ6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuY3JlYXRlU3R5bGVzKHBhcmVudClcbiAgICAgICAgdGhpcy5jcmVhdGVUcmFjaygpXG4gICAgfVxuICAgIFxuICAgIGNyZWF0ZVN0eWxlcyhwYXJlbnQ6IEhUTUxEaXZFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0aGlzLnN0eWxlLmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fc3R5bGUnKVxuICAgICAgICBwYXJlbnQuYXBwZW5kKHRoaXMuc3R5bGUpXG4gICAgfVxuICAgIFxuICAgIGNyZWF0ZVRyYWNrKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRyYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGhpcy50cmFjay5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3RyYWNrJylcbiAgICAgICAgdGhpcy5zdHlsZS5hcHBlbmQodGhpcy50cmFjaylcbiAgICB9XG59XG5cbmNsYXNzIFByb2dyZXNzQmFyIHtcbiAgICBiYXIhOiBIVE1MRGl2RWxlbWVudFxuICAgIGNyZWF0ZVByb2dyZXNzQmFyKHBhcmVudDogSFRNTERpdkVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5iYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0aGlzLmJhci5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3Byb2dyZXNzLWJhcicpXG4gICAgICAgIHBhcmVudC5hcHBlbmQodGhpcy5iYXIpXG4gICAgfVxuICAgIGNhbGNQZXJjZW50KHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAoKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pKSAqIDEwMFxuICAgIH1cbiAgICBzZXREZWZhdWx0KGlzRG91YmxlOiBib29sZWFuLCBwZXJjZW50OiBudW1iZXIsIHBlcmNlbnRSaWdodDogbnVtYmVyID0gTmFOKTogdm9pZCB7XG4gICAgICAgIGlmIChpc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy5iYXIuc3R5bGUubGVmdCA9IHBlcmNlbnQgKyAnJSdcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLnJpZ2h0ID0gKDEwMCAtIHBlcmNlbnRSaWdodCkgKyAnJSdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLnJpZ2h0ID0gKDEwMCAtIHBlcmNlbnQpICsgJyUnXG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5sZWZ0ID0gU3RyaW5nKDApXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0UmlnaHQoaXNEb3VibGU6IGJvb2xlYW4sIHBlcmNlbnQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAoIWlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5sZWZ0ID0gcGVyY2VudCArICclJ1xuICAgICAgICAgICAgdGhpcy5iYXIuc3R5bGUucmlnaHQgPSBTdHJpbmcoLTEpICsgJ3B4J1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBUaHVtYiB7XG5cbiAgICB0aHVtYkRlZmF1bHQhOiBIVE1MRGl2RWxlbWVudFxuICAgIHRodW1iUmlnaHQhOiBIVE1MRGl2RWxlbWVudFxuICAgIHRodW1iT3V0cHV0ITogSFRNTERpdkVsZW1lbnRcbiAgICB0aHVtYk91dHB1dFJpZ2h0PzogSFRNTERpdkVsZW1lbnRcblxuICAgIGluaXQgKHBhcmVudDogSFRNTERpdkVsZW1lbnQsIFxuICAgICAgICBpc0RvdWJsZTogYm9vbGVhbiwgXG4gICAgICAgIHRvZ2dsZUVsZW1lbnQ6IGJvb2xlYW4sIFxuICAgICAgICBkZWZhdWx0VmFsdWU6IG51bWJlciwgXG4gICAgICAgIHJpZ2h0VmFsdWU/OiBudW1iZXIpIHtcblxuICAgICAgICB0aGlzLmNyZWF0ZVRodW1iKHBhcmVudCwgaXNEb3VibGUpXG4gICAgICAgIGlmICh0b2dnbGVFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVRodW1iRWxlbWVudChpc0RvdWJsZSwgdGhpcy50aHVtYkRlZmF1bHQsIHRoaXMudGh1bWJSaWdodClcbiAgICAgICAgICAgIHRoaXMuc2V0VGh1bWJWYWx1ZShpc0RvdWJsZSwgZGVmYXVsdFZhbHVlLCByaWdodFZhbHVlKVxuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZVRodW1iKHBhcmVudDogSFRNTERpdkVsZW1lbnQsIGlzRG91YmxlOiBib29sZWFuKSB7XG4gICAgICAgIGlmKGlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLnRodW1iRGVmYXVsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB0aGlzLnRodW1iRGVmYXVsdC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3RodW1iJylcbiAgICAgICAgICAgIHRoaXMudGh1bWJEZWZhdWx0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdGh1bWJfbGVmdCcpXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kKHRoaXMudGh1bWJEZWZhdWx0KVxuXG4gICAgICAgICAgICB0aGlzLnRodW1iUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdGhpcy50aHVtYlJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdGh1bWInKVxuICAgICAgICAgICAgdGhpcy50aHVtYlJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdGh1bWJfcmlnaHQnKVxuICAgICAgICAgICAgcGFyZW50LmFwcGVuZCh0aGlzLnRodW1iUmlnaHQpXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGh1bWJEZWZhdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHRoaXMudGh1bWJEZWZhdWx0LmNsYXNzTmFtZSA9ICdyYW5nZS1zbGlkZXJfX3RodW1iJ1xuICAgICAgICAgICAgcGFyZW50LmFwcGVuZCh0aGlzLnRodW1iRGVmYXVsdClcblxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG4gICAgY3JlYXRlVGh1bWJFbGVtZW50KGlzRG91YmxlOiBib29sZWFuLCBwYXJlbnQ6IEhUTUxEaXZFbGVtZW50LCByaWdodFBhcmVudD86IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgICAgIGlmIChpc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy50aHVtYk91dHB1dFJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgICAgICB0aGlzLnRodW1iT3V0cHV0UmlnaHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX192YWx1ZS10aHVtYicpXG4gICAgICAgICAgICByaWdodFBhcmVudCEuYXBwZW5kKHRoaXMudGh1bWJPdXRwdXRSaWdodClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRodW1iT3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIHRoaXMudGh1bWJPdXRwdXQuY2xhc3NOYW1lID0gJ3JhbmdlLXNsaWRlcl9fdmFsdWUtdGh1bWInXG4gICAgICAgIHBhcmVudC5hcHBlbmQodGhpcy50aHVtYk91dHB1dClcbiAgICB9XG4gICAgc2V0VGh1bWJWYWx1ZShpc0RvdWJsZTogYm9vbGVhbiwgdmFsdWU6IG51bWJlciwgcmlnaHRWYWx1ZT86IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy50aHVtYk91dHB1dCkge1xuICAgICAgICAgICAgdGhpcy50aHVtYk91dHB1dC50ZXh0Q29udGVudCA9IFN0cmluZyh2YWx1ZSlcbiAgICAgICAgICAgIGlmIChpc0RvdWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGh1bWJPdXRwdXRSaWdodCEudGV4dENvbnRlbnQgPSBTdHJpbmcocmlnaHRWYWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG5cbiAgICBwbGFjZVRodW1iKGlzRG91YmxlOiBib29sZWFuLCBwZXJjZW50OiBudW1iZXIsIHBlcmNlbnRSaWdodDogbnVtYmVyID0gTmFOKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGh1bWJEZWZhdWx0LnN0eWxlLmxlZnQgPSBwZXJjZW50ICsgJyUnXG4gICAgICAgIGlmIChpc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy50aHVtYlJpZ2h0LnN0eWxlLnJpZ2h0ID0gKDEwMCAtIHBlcmNlbnRSaWdodCkgKyAnJSdcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHtGb3JtLCBTdHlsZXMsIFByb2dyZXNzQmFyLCBUaHVtYn0iLCJcbmltcG9ydCB7Rm9ybSwgU3R5bGVzLCBQcm9ncmVzc0JhciwgVGh1bWJ9IGZyb20gJy4vc3ViVmlld3MnXG5cbmludGVyZmFjZSBJRGF0YVZpZXcge1xuICAgIG1pbjogbnVtYmVyXG4gICAgbWF4OiBudW1iZXJcbiAgICBkZWZhdWx0VmFsdWU6IG51bWJlclxuICAgIHJpZ2h0VmFsdWU6IG51bWJlclxuICAgIGlzUmFuZ2U6IGJvb2xlYW5cbiAgICByaWdodFByb2dyZXNzQmFyOiBib29sZWFuXG4gICAgb3ZlclRodW1iRWxlbWVudDogYm9vbGVhblxuICAgIGlzVmVydGljYWw6IGJvb2xlYW5cbiAgICBpc1NjYWxlOiBib29sZWFuXG4gICAgc2NhbGVWYWx1ZXM6IG51bWJlcltdXG59XG5pbnRlcmZhY2UgSU9ic2VydmVyVmlldyB7XG4gICAgdXBkYXRlTW9kZWwoYXJnMDogc3RyaW5nLCBhcmcxOiBudW1iZXIpOiB2b2lkXG59XG5cbmNsYXNzIFZpZXcge1xuICAgIHBhcmVudDogSFRNTEVsZW1lbnRcbiAgICB3cmFwcGVyITogSFRNTERpdkVsZW1lbnRcbiAgICBzaW5nbGVJbnB1dD86IEhUTUxJbnB1dEVsZW1lbnRcbiAgICBsZWZ0SW5wdXQ/OiBIVE1MSW5wdXRFbGVtZW50XG4gICAgcmlnaHRJbnB1dD86IEhUTUxJbnB1dEVsZW1lbnRcbiAgICBmb3JtOiBGb3JtXG4gICAgc3R5bGVzOiBTdHlsZXNcbiAgICBwcm9ncmVzc0JhcjogUHJvZ3Jlc3NCYXJcbiAgICB0aHVtYjogVGh1bWJcbiAgICBvcHRpb25zOiBJRGF0YVZpZXdcbiAgICBvYnNlcnZlcnM6IElPYnNlcnZlclZpZXdbXVxuICAgIGNvbnN0cnVjdG9yKHBhcmVudDogSFRNTEVsZW1lbnQsIGZvcm06IEZvcm0sIHN0eWxlczogU3R5bGVzLCBwcm9ncmVzc0JhcjogUHJvZ3Jlc3NCYXIsIHRodW1iOiBUaHVtYikge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudFxuICAgICAgICB0aGlzLmZvcm0gPSBmb3JtXG4gICAgICAgIHRoaXMuc3R5bGVzID0gc3R5bGVzXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSBwcm9ncmVzc0JhclxuICAgICAgICB0aGlzLnRodW1iID0gdGh1bWJcblxuICAgIC8vIGRlZmF1bHQgZGF0YVxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogMTAsXG4gICAgICAgICAgICByaWdodFZhbHVlOiA1MCxcbiAgICAgICAgICAgIGlzUmFuZ2U6IHRydWUsXG4gICAgICAgICAgICByaWdodFByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgICAgICAgIG92ZXJUaHVtYkVsZW1lbnQ6IHRydWUsXG4gICAgICAgICAgICBpc1ZlcnRpY2FsOiBmYWxzZSxcbiAgICAgICAgICAgIGlzU2NhbGU6IGZhbHNlLFxuICAgICAgICAgICAgc2NhbGVWYWx1ZXM6IFtdXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9ic2VydmVycyA9IFtdXG4gICAgfVxuICAgIHN1YnNjcmliZShvYnNlcnZlcjogSU9ic2VydmVyVmlldykge1xuICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKVxuICAgIH1cbiAgICBcbiAgICBpbml0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmNyZWF0ZVdyYXBwZXIoKVxuICAgICAgICBcbiAgICAgICAgdGhpcy5mb3JtLmluaXQoXG4gICAgICAgICAgICB0aGlzLndyYXBwZXIsIFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlzUmFuZ2UsIFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1pbiwgXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubWF4XG4gICAgICAgIClcbiAgICAgICAgdGhpcy5zdHlsZXMuaW5pdCh0aGlzLndyYXBwZXIpXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuY3JlYXRlUHJvZ3Jlc3NCYXIodGhpcy5zdHlsZXMuc3R5bGUpXG4gICAgICAgIHRoaXMudGh1bWIuaW5pdChcbiAgICAgICAgICAgIHRoaXMuc3R5bGVzLnN0eWxlLFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlzUmFuZ2UsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMub3ZlclRodW1iRWxlbWVudCxcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kZWZhdWx0VmFsdWUsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMucmlnaHRWYWx1ZVxuICAgICAgICApXG4gICAgICAgIFxuICAgICAgICB0aGlzLnNldElucHV0KClcbiAgICAgICAgdGhpcy5ldmVudElucHV0KClcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5iYXIub25tb3VzZWRvd24gPSBlbGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xpY2tPbkJhcihlbGVtKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3R5bGVzLnRyYWNrLm9ubW91c2Vkb3duID0gZWxlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsaWNrT25CYXIoZWxlbSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmV2ZW50SG92ZXIoKVxuICAgICAgICB0aGlzLmV2ZW50QWN0aXZlKClcblxuXG5cbiAgICAgICAgaWYodGhpcy5vcHRpb25zLmlzVmVydGljYWwpIHtcbiAgICAgICAgICAgIHRoaXMud3JhcHBlci5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfdmVydGljYWwnKVxuICAgICAgICAgICAgaWYodGhpcy5vcHRpb25zLm92ZXJUaHVtYkVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iT3V0cHV0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdmFsdWUtdGh1bWJfdmVydGljYWwnKVxuICAgICAgICAgICAgICAgIHRoaXMudGh1bWIudGh1bWJPdXRwdXRSaWdodD8uY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX192YWx1ZS10aHVtYl92ZXJ0aWNhbCcpXG4gICAgICAgICAgICB9ICAgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pc1NjYWxlKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVNjYWxlKClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNyZWF0ZUlucHV0cygpXG4gICAgfSBcbiAgICBjcmVhdGVXcmFwcGVyID0gKCkgPT4ge1xuICAgICAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0aGlzLndyYXBwZXIuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyJylcbiAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kKHRoaXMud3JhcHBlcilcbiAgICB9XG4gICAgY3JlYXRlU2NhbGUgPSAoKSA9PiB7XG4gICAgICAgIGxldCBzY2FsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHNjYWxlLmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fc2NhbGUnKVxuICAgICAgICB0aGlzLndyYXBwZXIuYXBwZW5kKHNjYWxlLCB0aGlzLnN0eWxlcy5zdHlsZSlcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3B0aW9ucy5zY2FsZVZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZGl2VmFsdWU6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGRpdlZhbHVlLmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdmFsdWUnKVxuICAgICAgICAgICAgY29uc3QgdmFsdWU6IG51bWJlciA9IHRoaXMub3B0aW9ucy5zY2FsZVZhbHVlc1tpXVxuICAgICAgICAgICAgZGl2VmFsdWUudGV4dENvbnRlbnQgPSBTdHJpbmcoJ+KAkyAnICsgdmFsdWUpXG4gICAgICAgICAgICBzY2FsZS5hcHBlbmQoZGl2VmFsdWUpXG4gICAgICAgICAgICBjb25zdCBtaW4gPSB0aGlzLm9wdGlvbnMubWluXG4gICAgICAgICAgICBjb25zdCBtYXggPSB0aGlzLm9wdGlvbnMubWF4XG4gICAgICAgICAgICBjb25zdCBwZXJjZW50OiBudW1iZXIgPSBNYXRoLnJvdW5kKCgodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbikpICogMTAwKVxuICAgICAgICAgICAgZGl2VmFsdWUuc3R5bGUubGVmdCA9IHBlcmNlbnQgKyAnJSdcblxuICAgICAgICAgICAgZGl2VmFsdWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudENsaWNrKHZhbHVlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGRpdlZhbHVlLnN0eWxlLm1hcmdpbkxlZnQgPSAnLScgKyB0aGlzLnBsYWNlU2NhbGUoKSArICclJ1xuICAgICAgICB9XG4gICAgfVxuICAgIHBsYWNlU2NhbGUgPSAoKTogbnVtYmVyID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyV2lkdGg6IG51bWJlciA9IHRoaXMud3JhcHBlci5vZmZzZXRXaWR0aFxuICAgICAgICByZXR1cm4gKDAuNDIgKiBjb250YWluZXJXaWR0aCArIDc3Ny44KSAvIGNvbnRhaW5lcldpZHRoXG4gICAgfVxuICAgIGNyZWF0ZUlucHV0cyA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pc1JhbmdlKSB7XG4gICAgICAgICAgICBsZXQgbGVmdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgbGVmdElucHV0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fd2luZG93LXZhbHVlJylcbiAgICAgICAgICAgIGxlZnRJbnB1dC5wbGFjZWhvbGRlciA9ICdsZWZ0IHZhbHVlJ1xuICAgICAgICAgICAgbGVmdElucHV0LnZhbHVlID0gU3RyaW5nKHRoaXMub3B0aW9ucy5kZWZhdWx0VmFsdWUpXG4gICAgICAgICAgICB0aGlzLmxlZnRJbnB1dCA9IGxlZnRJbnB1dFxuICAgICAgICAgICAgdGhpcy53cmFwcGVyLmFwcGVuZCh0aGlzLmxlZnRJbnB1dClcblxuICAgICAgICAgICAgbGV0IHJpZ2h0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICByaWdodElucHV0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fd2luZG93LXZhbHVlJywgJ3JhbmdlLXNsaWRlcl9fd2luZG93LXZhbHVlX3JpZ2h0JylcbiAgICAgICAgICAgIHJpZ2h0SW5wdXQucGxhY2Vob2xkZXIgPSAncmlnaHQgdmFsdWUnXG4gICAgICAgICAgICByaWdodElucHV0LnZhbHVlID0gU3RyaW5nKHRoaXMub3B0aW9ucy5yaWdodFZhbHVlKVxuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0ID0gcmlnaHRJbnB1dFxuICAgICAgICAgICAgdGhpcy53cmFwcGVyLmFwcGVuZCh0aGlzLnJpZ2h0SW5wdXQpXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBzaW5nbGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgIHNpbmdsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fd2luZG93LXZhbHVlJylcbiAgICAgICAgICAgIHNpbmdsZUlucHV0LnBsYWNlaG9sZGVyID0gJ3ZhbHVlJ1xuICAgICAgICAgICAgc2luZ2xlSW5wdXQudmFsdWUgPSBTdHJpbmcodGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSlcbiAgICAgICAgICAgIHRoaXMuc2luZ2xlSW5wdXQgPSBzaW5nbGVJbnB1dFxuICAgICAgICAgICAgdGhpcy53cmFwcGVyLmFwcGVuZCh0aGlzLnNpbmdsZUlucHV0KVxuICAgICAgICB9XG4gICAgfVxuICAgIHNldElucHV0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmZvcm0uc2V0SW5wdXRWYWx1ZSh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgdGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSwgdGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUpXG4gICAgICAgIGNvbnN0IHBsYWNlRGVmYXVsdDogbnVtYmVyID0gdGhpcy5wcm9ncmVzc0Jhci5jYWxjUGVyY2VudChcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQudmFsdWUpLCBcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQubWluKSwgXG4gICAgICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0Lm1heCkpXG5cbiAgICAgICAgY29uc3QgcGxhY2VSaWdodDogbnVtYmVyID0gdGhpcy5mb3JtLnJpZ2h0SW5wdXQgPyBcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuY2FsY1BlcmNlbnQoXG4gICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5yaWdodElucHV0LnZhbHVlKSwgXG4gICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5yaWdodElucHV0Lm1pbiksIFxuICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0ucmlnaHRJbnB1dC5tYXgpKSBcbiAgICAgICAgICAgICAgICA6IE5hTlxuXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuc2V0RGVmYXVsdCh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGxhY2VEZWZhdWx0LCBwbGFjZVJpZ2h0KVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJpZ2h0UHJvZ3Jlc3NCYXIpIHsgXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnNldFJpZ2h0KHRoaXMub3B0aW9ucy5pc1JhbmdlLCBwbGFjZURlZmF1bHQpIFxuICAgICAgICB9XG4gICAgICAgIHRoaXMudGh1bWIucGxhY2VUaHVtYih0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGxhY2VEZWZhdWx0LCBwbGFjZVJpZ2h0KVxuICAgIH1cbiAgICBldmVudElucHV0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmZvcm0uZGVmYXVsdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSA9IE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0LnZhbHVlKVxuICAgICAgICAgICAgdGhpcy5zZXRJbnB1dCgpXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci51cGRhdGVNb2RlbCgnZGVmYXVsdCcsIE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0LnZhbHVlKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLnRodW1iLnNldFRodW1iVmFsdWUodGhpcy5vcHRpb25zLmlzUmFuZ2UsIFxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kZWZhdWx0VmFsdWUsIHRoaXMub3B0aW9ucy5yaWdodFZhbHVlKVxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pc1JhbmdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0SW5wdXQhLnZhbHVlID0gU3RyaW5nKHRoaXMub3B0aW9ucy5kZWZhdWx0VmFsdWUpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlSW5wdXQhLnZhbHVlID0gU3RyaW5nKHRoaXMub3B0aW9ucy5kZWZhdWx0VmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNSYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtLnJpZ2h0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUgPSBOdW1iZXIodGhpcy5mb3JtLnJpZ2h0SW5wdXQudmFsdWUpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJbnB1dCgpXG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVwZGF0ZU1vZGVsKCdyaWdodCcsIE51bWJlcih0aGlzLmZvcm0ucmlnaHRJbnB1dC52YWx1ZSkpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aGlzLnRodW1iLnNldFRodW1iVmFsdWUodGhpcy5vcHRpb25zLmlzUmFuZ2UsIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZGVmYXVsdFZhbHVlLCB0aGlzLm9wdGlvbnMucmlnaHRWYWx1ZSlcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQhLnZhbHVlID0gU3RyaW5nKHRoaXMub3B0aW9ucy5yaWdodFZhbHVlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjbGlja09uQmFyKGVsZW06IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgY29uc3QgY29vcmRzOiBET01SZWN0ID0gdGhpcy5zdHlsZXMudHJhY2suZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgbGV0IGxlbmd0aDogbnVtYmVyID0gY29vcmRzLnJpZ2h0IC0gY29vcmRzLmxlZnRcbiAgICAgICAgbGV0IHJhbmdlOiBudW1iZXIgPSB0aGlzLm9wdGlvbnMubWF4IC0gdGhpcy5vcHRpb25zLm1pblxuICAgICAgICBsZXQgY3VycmVudFBvc2l0aW9uOiBudW1iZXIgPSBlbGVtLnBhZ2VYIC0gY29vcmRzLmxlZnRcbiAgICAgICAgbGV0IHBlcmNlbnQ6IG51bWJlclxuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNWZXJ0aWNhbCkge1xuICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uID0gZWxlbS5wYWdlWSAtIGNvb3Jkcy50b3BcbiAgICAgICAgICAgIGxlbmd0aCA9IGNvb3Jkcy5ib3R0b20gLSBjb29yZHMudG9wXG4gICAgICAgICAgICBpZiAobGVuZ3RoIDwgY3VycmVudFBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uID0gbGVuZ3RoXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcGVyY2VudCA9IGN1cnJlbnRQb3NpdGlvbi9sZW5ndGggKiAxMDBcbiAgICAgICAgY29uc3QgbmV3VmFsdWU6IG51bWJlciA9IE1hdGgucm91bmQodGhpcy5vcHRpb25zLm1pbiArICgocmFuZ2UpICogcGVyY2VudCkgLyAxMDApXG4gICAgICAgIHRoaXMuZXZlbnRDbGljayhuZXdWYWx1ZSlcbiAgICB9XG4gICAgZXZlbnRDbGljayhuZXdWYWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGhhbGZPZkJhcjogbnVtYmVyID0gKHRoaXMub3B0aW9ucy5yaWdodFZhbHVlICsgdGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSkgLyAyIFxuICAgICAgICBjb25zdCBpc1JpZ2h0VHJhY2s6IGJvb2xlYW4gPSB0aGlzLm9wdGlvbnMuaXNSYW5nZSAmJiBuZXdWYWx1ZSA+IHRoaXMub3B0aW9ucy5yaWdodFZhbHVlIFxuICAgICAgICBjb25zdCBpc1JpZ2h0QmFyID0gdGhpcy5vcHRpb25zLmlzUmFuZ2UgJiYgbmV3VmFsdWUgPiBoYWxmT2ZCYXIgXG4gICAgICAgIGlmKGlzUmlnaHRUcmFjayB8fCBpc1JpZ2h0QmFyKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMucmlnaHRWYWx1ZSA9IG5ld1ZhbHVlXG4gICAgICAgICAgICB0aGlzLnNldElucHV0KClcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLnVwZGF0ZU1vZGVsKCdyaWdodCcsIG5ld1ZhbHVlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMudGh1bWIuc2V0VGh1bWJWYWx1ZSh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSwgdGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZGVmYXVsdFZhbHVlID0gbmV3VmFsdWVcbiAgICAgICAgICAgIHRoaXMuc2V0SW5wdXQoKVxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIudXBkYXRlTW9kZWwoJ2RlZmF1bHQnLCBuZXdWYWx1ZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLnRodW1iLnNldFRodW1iVmFsdWUodGhpcy5vcHRpb25zLmlzUmFuZ2UsIFxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kZWZhdWx0VmFsdWUsIHRoaXMub3B0aW9ucy5yaWdodFZhbHVlKVxuICAgICAgICB9XG4gICAgfVxuICAgIGV2ZW50SG92ZXIgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5vdmVyVGh1bWJFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHVtYi50aHVtYk91dHB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3ZhbHVlLXRodW1iX2JpZycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iRGVmYXVsdC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3RodW1iX2hvdmVyJylcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pc1JhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm0ucmlnaHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5vdmVyVGh1bWJFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGh1bWIudGh1bWJPdXRwdXRSaWdodD8uY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX192YWx1ZS10aHVtYl9iaWcnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iUmlnaHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYl9ob3ZlcicpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZvcm0uZGVmYXVsdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5vdmVyVGh1bWJFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHVtYi50aHVtYk91dHB1dC5jbGFzc0xpc3QucmVtb3ZlKCdyYW5nZS1zbGlkZXJfX3ZhbHVlLXRodW1iX2JpZycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iRGVmYXVsdC5jbGFzc0xpc3QucmVtb3ZlKCdyYW5nZS1zbGlkZXJfX3RodW1iX2hvdmVyJylcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pc1JhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm0ucmlnaHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm92ZXJUaHVtYkVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHVtYi50aHVtYk91dHB1dFJpZ2h0Py5jbGFzc0xpc3QucmVtb3ZlKCdyYW5nZS1zbGlkZXJfX3ZhbHVlLXRodW1iX2JpZycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudGh1bWIudGh1bWJSaWdodC5jbGFzc0xpc3QucmVtb3ZlKCdyYW5nZS1zbGlkZXJfX3RodW1iX2hvdmVyJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgZXZlbnRBY3RpdmUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50aHVtYi50aHVtYkRlZmF1bHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYl9hY3RpdmUnKVxuICAgICAgICB9KVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlzUmFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5yaWdodElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iUmlnaHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYl9hY3RpdmUnKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudGh1bWIudGh1bWJEZWZhdWx0LmNsYXNzTGlzdC5yZW1vdmUoJ3JhbmdlLXNsaWRlcl9fdGh1bWJfYWN0aXZlJylcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pc1JhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm0ucmlnaHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudGh1bWIudGh1bWJSaWdodC5jbGFzc0xpc3QucmVtb3ZlKCdyYW5nZS1zbGlkZXJfX3RodW1iX2FjdGl2ZScpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQge1ZpZXd9Il0sInNvdXJjZVJvb3QiOiIifQ==