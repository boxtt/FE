// { "framework": "Vue" }
var mws;

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/Users/charick/FE/fec-mws01";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v("MWS测试页面")]), _c('polygon', [_vm._v("111")]), _c('richText', {
    attrs: {
      "tel": "12305"
    }
  }, [_vm._v("12305")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
/**
 * Entrance for MWS devtools.
 * Note: core runtime is weex instance related
 * @author smyle
 * @date 2017/09/13
 */
(function(){
    var __mws_start_ = Date.now(),
        __mws_dev__ = 'production' !== "dev",
        __mws_data__ = { time: {}, tasks: [] },
        __mws_modules__ = {},
        __mws_log_time__ = function(tag, category, additionals){
            var _additionals;
            category = category || 'default';
            __mws_data__.time[category] = __mws_data__.time[category] || {};
            _additionals = additionals ? (__mws_data__.time[category][tag] || {}) : null;
            __mws_data__.time[category] = __mws_data__.time[category] || {};
            return __mws_data__.time[category][tag] = (additionals ? Object.assign({}, _additionals, additionals) : (Date.now() - __mws_start_));
        },
        __mws_set_time__ = function(tag, category, time){
            category = category || 'default';
            __mws_data__.time[category][tag] = time;
        },
        __mws_get_time__ = function(tag, category){
            return __mws_data__.time[category][tag];
        },
        FixedQueue = function(options){
            var queue = [],
                index = 0,
                count = 0,
                fullfilled = false,
                MAX_TASK_NUM = 100;
            
            this.push = function(item) {
                MAX_TASK_NUM <= index && (index = 0, fullfilled = true);
                queue[index++] = item;
            };

            // first in first out
            this.forEach = function(callback) {
                var i, l;

                if ( !callback ) {
                    return;
                }

                if (fullfilled) {
                    for ( i = index, l = MAX_TASK_NUM-1; i <= l; ++i ) {
                        callback(queue[i]);
                    }
                    i = 0, l = index-1;
                }
                else {
                    i = 0, l = index-1;
                }

                for ( ; i <= l; ++i ){
                    callback(queue[i]);
                }
            };

            this.getLength = function() {
                return fullfilled ? MAX_TASK_NUM : index;
            };
        },
        taskQueue = new FixedQueue(),
        noop = function(){};

    mws = {
        perf: {
            logTime: function(tag, category){
                __mws_log_time__(tag, category);
            },
            getData: function(){
                return __mws_data__.time;
            }
        },
        task: {
            getData: function(){
                return taskQueue;
            },
            onSendTask: null
        }
    };

    mws.requireModule = function(moduleId){
        var weexModule, cachedModule = __mws_modules__[moduleId];

        if (cachedModule){
            return cachedModule;
        }
        
        weexModule = weex.requireModule(moduleId);

        if ('stream' === moduleId || 'mwsNetwork' === moduleId) {
            var requestCount = 1;
            __mws_modules__[moduleId] = cachedModule = Object.assign({}, weexModule, {
              fetch: function(options, callback){
                // var count = requestCount ++,
                    startTime = Date.now() - __mws_start_,
                    endTime,
                    _callback = function(response){
                        requestCount++
                        var data = {
                            end: Date.now() - __mws_start_,
                            status: response.ok ? 0 : 1,
                            no: count
                        };

                        if (__mws_dev__) {
                            data.options =  options;
                            data.response = response;
                        }
                        
                        if (requestCount === 2) {
                            mws.perf.logAfterFirstRequest();
                        }

                        __mws_log_time__(options.url, 'fetch', data);
                        return callback.apply(this, arguments);
                    };

                if (requestCount === 1) {
                    mws.perf.logBeforeFirstRequest();
                }

                __mws_log_time__(options.url, 'fetch', {start: startTime});
                return weexModule.fetch(options, _callback);
              }
            });
        }
        else if ('storage' === moduleId) {
            var storageCount = 1
            __mws_modules__[moduleId] = cachedModule = Object.assign({}, weexModule, {
                getItem: function(key, callback) {
                    var startTime = Date.now() - __mws_start_,
                    _callback = function(response) {
                        storageCount++
                        if (storageCount === 2) {
                            mws.perf.logAfterFirstGetStorage();
                        }
                        return callback.apply(this, arguments);
                    }
                    if (storageCount === 1) {
                        mws.perf.logBeforeFirstGetStorage();
                    }
                    __mws_log_time__(key, 'storage', {start: startTime});
                    return weexModule.getItem(key, _callback)
                },
                
            })
        }
        else {
          cachedModule = weexModule;
        }
        
        return cachedModule;
    };

    mws = Object.assign({}, weex, mws);

    'EnterCreated,LeaveCreated,EnterMounted,LeaveMounted,BeforeFirstRequest,AfterFirstRequest,BeforeFirstGetStorage,AfterFirstGetStorage,FirstDataUpdated'.split(',').map(function(e){
        mws.perf['log'+e] = function(){
            __mws_log_time__(e);
        };
    });

    var os = weex.document.taskCenter.send;
    
    weex.document.taskCenter.send = function(){
        var result = os.apply(this, arguments);
        taskQueue.push(arguments);
        return result;
    };
})();var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(1)
)

/* script */
__vue_exports__ = __webpack_require__(0)

/* template */
var __vue_template__ = __webpack_require__(2)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/charick/FE/fec-mws01/src/pages/App.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-435af4d9"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
var __options__ = module.exports;
/**
 * Proxy key hooks of Vue instances
 * @author smyle
 * @date 2017/09/13
 */
__options__ = __options__ || {};

var oc = __options__.created,
    om = __options__.mounted,
    proxyMethod = function(pre, executor, post){
        return function(){
            var result;
            pre && pre();
            executor && (result = executor.apply(this, arguments));
            post && post();
            return result;
        };
    };

__options__.created = proxyMethod(mws.perf.logEnterCreated, oc, mws.perf.logLeaveCreated );
__options__.mounted = proxyMethod(mws.perf.logEnterMounted, om, mws.perf.logLeaveMounted );
new Vue(__options__)


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDUzM2U1ZTYwZjZmODU3ODU4YTNiIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9BcHAudnVlPzEyOTciLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0FwcC52dWU/NDJhNiIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvQXBwLnZ1ZT85ZjJmIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9BcHAudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1VzZXJzL2NoYXJpY2svRkUvZmVjLW13czAxXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTMzZTVlNjBmNmY4NTc4NThhM2IiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxuZXhwb3J0cy5kZWZhdWx0ID0ge307XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtdnVlLWxvYWRlci9saWIvc2NyaXB0LWxvYWRlci5qcyEuL34vYmFiZWwtbG9hZGVyL2xpYiEuL34vd2VleC12dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXNjcmlwdCZpbmRleD0wIS4vc3JjL3BhZ2VzL0FwcC52dWVcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LXZ1ZS1sb2FkZXIvbGliL3N0eWxlLWxvYWRlci5qcyEuL34vd2VleC12dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtOTkyMDkyYTYhLi9+L3dlZXgtdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9wYWdlcy9BcHAudnVlXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdoMScsIFtfdm0uX3YoXCJNV1PmtYvor5XpobXpnaJcIildKSwgX2MoJ3BvbHlnb24nLCBbX3ZtLl92KFwiMTExXCIpXSksIF9jKCdyaWNoVGV4dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0ZWxcIjogXCIxMjMwNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiMTIzMDVcIildKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC12dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtOTkyMDkyYTYhLi9+L3dlZXgtdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3BhZ2VzL0FwcC52dWVcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG4vKipcbiAqIEVudHJhbmNlIGZvciBNV1MgZGV2dG9vbHMuXG4gKiBOb3RlOiBjb3JlIHJ1bnRpbWUgaXMgd2VleCBpbnN0YW5jZSByZWxhdGVkXG4gKiBAYXV0aG9yIHNteWxlXG4gKiBAZGF0ZSAyMDE3LzA5LzEzXG4gKi9cbihmdW5jdGlvbigpe1xuICAgIHZhciBfX213c19zdGFydF8gPSBEYXRlLm5vdygpLFxuICAgICAgICBfX213c19kZXZfXyA9ICdwcm9kdWN0aW9uJyAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYsXG4gICAgICAgIF9fbXdzX2RhdGFfXyA9IHsgdGltZToge30sIHRhc2tzOiBbXSB9LFxuICAgICAgICBfX213c19tb2R1bGVzX18gPSB7fSxcbiAgICAgICAgX19td3NfbG9nX3RpbWVfXyA9IGZ1bmN0aW9uKHRhZywgY2F0ZWdvcnksIGFkZGl0aW9uYWxzKXtcbiAgICAgICAgICAgIHZhciBfYWRkaXRpb25hbHM7XG4gICAgICAgICAgICBjYXRlZ29yeSA9IGNhdGVnb3J5IHx8ICdkZWZhdWx0JztcbiAgICAgICAgICAgIF9fbXdzX2RhdGFfXy50aW1lW2NhdGVnb3J5XSA9IF9fbXdzX2RhdGFfXy50aW1lW2NhdGVnb3J5XSB8fCB7fTtcbiAgICAgICAgICAgIF9hZGRpdGlvbmFscyA9IGFkZGl0aW9uYWxzID8gKF9fbXdzX2RhdGFfXy50aW1lW2NhdGVnb3J5XVt0YWddIHx8IHt9KSA6IG51bGw7XG4gICAgICAgICAgICBfX213c19kYXRhX18udGltZVtjYXRlZ29yeV0gPSBfX213c19kYXRhX18udGltZVtjYXRlZ29yeV0gfHwge307XG4gICAgICAgICAgICByZXR1cm4gX19td3NfZGF0YV9fLnRpbWVbY2F0ZWdvcnldW3RhZ10gPSAoYWRkaXRpb25hbHMgPyBPYmplY3QuYXNzaWduKHt9LCBfYWRkaXRpb25hbHMsIGFkZGl0aW9uYWxzKSA6IChEYXRlLm5vdygpIC0gX19td3Nfc3RhcnRfKSk7XG4gICAgICAgIH0sXG4gICAgICAgIF9fbXdzX3NldF90aW1lX18gPSBmdW5jdGlvbih0YWcsIGNhdGVnb3J5LCB0aW1lKXtcbiAgICAgICAgICAgIGNhdGVnb3J5ID0gY2F0ZWdvcnkgfHwgJ2RlZmF1bHQnO1xuICAgICAgICAgICAgX19td3NfZGF0YV9fLnRpbWVbY2F0ZWdvcnldW3RhZ10gPSB0aW1lO1xuICAgICAgICB9LFxuICAgICAgICBfX213c19nZXRfdGltZV9fID0gZnVuY3Rpb24odGFnLCBjYXRlZ29yeSl7XG4gICAgICAgICAgICByZXR1cm4gX19td3NfZGF0YV9fLnRpbWVbY2F0ZWdvcnldW3RhZ107XG4gICAgICAgIH0sXG4gICAgICAgIEZpeGVkUXVldWUgPSBmdW5jdGlvbihvcHRpb25zKXtcbiAgICAgICAgICAgIHZhciBxdWV1ZSA9IFtdLFxuICAgICAgICAgICAgICAgIGluZGV4ID0gMCxcbiAgICAgICAgICAgICAgICBjb3VudCA9IDAsXG4gICAgICAgICAgICAgICAgZnVsbGZpbGxlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICAgIE1BWF9UQVNLX05VTSA9IDEwMDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5wdXNoID0gZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgIE1BWF9UQVNLX05VTSA8PSBpbmRleCAmJiAoaW5kZXggPSAwLCBmdWxsZmlsbGVkID0gdHJ1ZSk7XG4gICAgICAgICAgICAgICAgcXVldWVbaW5kZXgrK10gPSBpdGVtO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gZmlyc3QgaW4gZmlyc3Qgb3V0XG4gICAgICAgICAgICB0aGlzLmZvckVhY2ggPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHZhciBpLCBsO1xuXG4gICAgICAgICAgICAgICAgaWYgKCAhY2FsbGJhY2sgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZnVsbGZpbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKCBpID0gaW5kZXgsIGwgPSBNQVhfVEFTS19OVU0tMTsgaSA8PSBsOyArK2kgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhxdWV1ZVtpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaSA9IDAsIGwgPSBpbmRleC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaSA9IDAsIGwgPSBpbmRleC0xO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAoIDsgaSA8PSBsOyArK2kgKXtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socXVldWVbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuZ2V0TGVuZ3RoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bGxmaWxsZWQgPyBNQVhfVEFTS19OVU0gOiBpbmRleDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIHRhc2tRdWV1ZSA9IG5ldyBGaXhlZFF1ZXVlKCksXG4gICAgICAgIG5vb3AgPSBmdW5jdGlvbigpe307XG5cbiAgICBtd3MgPSB7XG4gICAgICAgIHBlcmY6IHtcbiAgICAgICAgICAgIGxvZ1RpbWU6IGZ1bmN0aW9uKHRhZywgY2F0ZWdvcnkpe1xuICAgICAgICAgICAgICAgIF9fbXdzX2xvZ190aW1lX18odGFnLCBjYXRlZ29yeSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0RGF0YTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gX19td3NfZGF0YV9fLnRpbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHRhc2s6IHtcbiAgICAgICAgICAgIGdldERhdGE6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2tRdWV1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblNlbmRUYXNrOiBudWxsXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgbXdzLnJlcXVpcmVNb2R1bGUgPSBmdW5jdGlvbihtb2R1bGVJZCl7XG4gICAgICAgIHZhciB3ZWV4TW9kdWxlLCBjYWNoZWRNb2R1bGUgPSBfX213c19tb2R1bGVzX19bbW9kdWxlSWRdO1xuXG4gICAgICAgIGlmIChjYWNoZWRNb2R1bGUpe1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZE1vZHVsZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgd2VleE1vZHVsZSA9IHdlZXgucmVxdWlyZU1vZHVsZShtb2R1bGVJZCk7XG5cbiAgICAgICAgaWYgKCdzdHJlYW0nID09PSBtb2R1bGVJZCB8fCAnbXdzTmV0d29yaycgPT09IG1vZHVsZUlkKSB7XG4gICAgICAgICAgICB2YXIgcmVxdWVzdENvdW50ID0gMTtcbiAgICAgICAgICAgIF9fbXdzX21vZHVsZXNfX1ttb2R1bGVJZF0gPSBjYWNoZWRNb2R1bGUgPSBPYmplY3QuYXNzaWduKHt9LCB3ZWV4TW9kdWxlLCB7XG4gICAgICAgICAgICAgIGZldGNoOiBmdW5jdGlvbihvcHRpb25zLCBjYWxsYmFjayl7XG4gICAgICAgICAgICAgICAgLy8gdmFyIGNvdW50ID0gcmVxdWVzdENvdW50ICsrLFxuICAgICAgICAgICAgICAgICAgICBzdGFydFRpbWUgPSBEYXRlLm5vdygpIC0gX19td3Nfc3RhcnRfLFxuICAgICAgICAgICAgICAgICAgICBlbmRUaW1lLFxuICAgICAgICAgICAgICAgICAgICBfY2FsbGJhY2sgPSBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0Q291bnQrK1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBEYXRlLm5vdygpIC0gX19td3Nfc3RhcnRfLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogcmVzcG9uc2Uub2sgPyAwIDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBubzogY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfX213c19kZXZfXykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEub3B0aW9ucyA9ICBvcHRpb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcXVlc3RDb3VudCA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG13cy5wZXJmLmxvZ0FmdGVyRmlyc3RSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF9fbXdzX2xvZ190aW1lX18ob3B0aW9ucy51cmwsICdmZXRjaCcsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxdWVzdENvdW50ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIG13cy5wZXJmLmxvZ0JlZm9yZUZpcnN0UmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF9fbXdzX2xvZ190aW1lX18ob3B0aW9ucy51cmwsICdmZXRjaCcsIHtzdGFydDogc3RhcnRUaW1lfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdlZXhNb2R1bGUuZmV0Y2gob3B0aW9ucywgX2NhbGxiYWNrKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoJ3N0b3JhZ2UnID09PSBtb2R1bGVJZCkge1xuICAgICAgICAgICAgdmFyIHN0b3JhZ2VDb3VudCA9IDFcbiAgICAgICAgICAgIF9fbXdzX21vZHVsZXNfX1ttb2R1bGVJZF0gPSBjYWNoZWRNb2R1bGUgPSBPYmplY3QuYXNzaWduKHt9LCB3ZWV4TW9kdWxlLCB7XG4gICAgICAgICAgICAgICAgZ2V0SXRlbTogZnVuY3Rpb24oa2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnRUaW1lID0gRGF0ZS5ub3coKSAtIF9fbXdzX3N0YXJ0XyxcbiAgICAgICAgICAgICAgICAgICAgX2NhbGxiYWNrID0gZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VDb3VudCsrXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RvcmFnZUNvdW50ID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXdzLnBlcmYubG9nQWZ0ZXJGaXJzdEdldFN0b3JhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdG9yYWdlQ291bnQgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG13cy5wZXJmLmxvZ0JlZm9yZUZpcnN0R2V0U3RvcmFnZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF9fbXdzX2xvZ190aW1lX18oa2V5LCAnc3RvcmFnZScsIHtzdGFydDogc3RhcnRUaW1lfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB3ZWV4TW9kdWxlLmdldEl0ZW0oa2V5LCBfY2FsbGJhY2spXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY2FjaGVkTW9kdWxlID0gd2VleE1vZHVsZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGNhY2hlZE1vZHVsZTtcbiAgICB9O1xuXG4gICAgbXdzID0gT2JqZWN0LmFzc2lnbih7fSwgd2VleCwgbXdzKTtcblxuICAgICdFbnRlckNyZWF0ZWQsTGVhdmVDcmVhdGVkLEVudGVyTW91bnRlZCxMZWF2ZU1vdW50ZWQsQmVmb3JlRmlyc3RSZXF1ZXN0LEFmdGVyRmlyc3RSZXF1ZXN0LEJlZm9yZUZpcnN0R2V0U3RvcmFnZSxBZnRlckZpcnN0R2V0U3RvcmFnZSxGaXJzdERhdGFVcGRhdGVkJy5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbihlKXtcbiAgICAgICAgbXdzLnBlcmZbJ2xvZycrZV0gPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgX19td3NfbG9nX3RpbWVfXyhlKTtcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIHZhciBvcyA9IHdlZXguZG9jdW1lbnQudGFza0NlbnRlci5zZW5kO1xuICAgIFxuICAgIHdlZXguZG9jdW1lbnQudGFza0NlbnRlci5zZW5kID0gZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG9zLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIHRhc2tRdWV1ZS5wdXNoKGFyZ3VtZW50cyk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn0pKCk7dmFyIF9fdnVlX3N0eWxlc19fID0gW11cblxuLyogc3R5bGVzICovXG5fX3Z1ZV9zdHlsZXNfXy5wdXNoKHJlcXVpcmUoXCIhIXdlZXgtdnVlLWxvYWRlci9saWIvc3R5bGUtbG9hZGVyIXdlZXgtdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTk5MjA5MmE2IXdlZXgtdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0FwcC52dWVcIilcbilcblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISF3ZWV4LXZ1ZS1sb2FkZXIvbGliL3NjcmlwdC1sb2FkZXIhYmFiZWwtbG9hZGVyIXdlZXgtdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0FwcC52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhd2VleC12dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtOTkyMDkyYTYhd2VleC12dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9BcHAudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9jaGFyaWNrL0ZFL2ZlYy1td3MwMS9zcmMvcGFnZXMvQXBwLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuX192dWVfb3B0aW9uc19fLl9zY29wZUlkID0gXCJkYXRhLXYtNDM1YWY0ZDlcIlxuX192dWVfb3B0aW9uc19fLnN0eWxlID0gX192dWVfb3B0aW9uc19fLnN0eWxlIHx8IHt9XG5fX3Z1ZV9zdHlsZXNfXy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgZm9yICh2YXIgbmFtZSBpbiBtb2R1bGUpIHtcbiAgICBfX3Z1ZV9vcHRpb25zX18uc3R5bGVbbmFtZV0gPSBtb2R1bGVbbmFtZV1cbiAgfVxufSlcbmlmICh0eXBlb2YgX19yZWdpc3Rlcl9zdGF0aWNfc3R5bGVzX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3JlZ2lzdGVyX3N0YXRpY19zdHlsZXNfXyhfX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQsIF9fdnVlX3N0eWxlc19fKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xubW9kdWxlLmV4cG9ydHMuZWwgPSAndHJ1ZSdcbnZhciBfX29wdGlvbnNfXyA9IG1vZHVsZS5leHBvcnRzO1xuLyoqXG4gKiBQcm94eSBrZXkgaG9va3Mgb2YgVnVlIGluc3RhbmNlc1xuICogQGF1dGhvciBzbXlsZVxuICogQGRhdGUgMjAxNy8wOS8xM1xuICovXG5fX29wdGlvbnNfXyA9IF9fb3B0aW9uc19fIHx8IHt9O1xuXG52YXIgb2MgPSBfX29wdGlvbnNfXy5jcmVhdGVkLFxuICAgIG9tID0gX19vcHRpb25zX18ubW91bnRlZCxcbiAgICBwcm94eU1ldGhvZCA9IGZ1bmN0aW9uKHByZSwgZXhlY3V0b3IsIHBvc3Qpe1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgICAgICBwcmUgJiYgcHJlKCk7XG4gICAgICAgICAgICBleGVjdXRvciAmJiAocmVzdWx0ID0gZXhlY3V0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgICAgICAgICBwb3N0ICYmIHBvc3QoKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH07XG4gICAgfTtcblxuX19vcHRpb25zX18uY3JlYXRlZCA9IHByb3h5TWV0aG9kKG13cy5wZXJmLmxvZ0VudGVyQ3JlYXRlZCwgb2MsIG13cy5wZXJmLmxvZ0xlYXZlQ3JlYXRlZCApO1xuX19vcHRpb25zX18ubW91bnRlZCA9IHByb3h5TWV0aG9kKG13cy5wZXJmLmxvZ0VudGVyTW91bnRlZCwgb20sIG13cy5wZXJmLmxvZ0xlYXZlTW91bnRlZCApO1xubmV3IFZ1ZShfX29wdGlvbnNfXylcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3BhZ2VzL0FwcC52dWU/ZW50cnk9dHJ1ZVxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDbEJBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=