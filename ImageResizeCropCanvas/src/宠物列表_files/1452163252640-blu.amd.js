define(function() { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _FileUpload = __webpack_require__(1);

	var _FileUpload2 = _interopRequireDefault(_FileUpload);

	var _PictureUpload = __webpack_require__(4);

	var _PictureUpload2 = _interopRequireDefault(_PictureUpload);

	var _webuploaderHtml5only = __webpack_require__(2);

	var _webuploaderHtml5only2 = _interopRequireDefault(_webuploaderHtml5only);

	__webpack_require__(5);

	__webpack_require__(6);

	__webpack_require__(7);

	__webpack_require__(8);

	__webpack_require__(9);

	__webpack_require__(10);

	__webpack_require__(11);

	__webpack_require__(12);

	__webpack_require__(13);

	__webpack_require__(14);

	__webpack_require__(15);

	__webpack_require__(16);

	__webpack_require__(17);

	__webpack_require__(18);

	__webpack_require__(19);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//'./js/lib/formvalidation/formValidation.js',
	//'./js/lib/formvalidation/framework/bootstrap.js',
	//'./js/lib/formvalidation/language/zh_CN.js',
	//'./js/lib/formvalidation/mandatoryIcon.js',
	//
	exports.default = {
	    //Tether:Tether,
	    FileUpload: _FileUpload2.default,
	    PictureUpload: _PictureUpload2.default,
	    WebUploader: _webuploaderHtml5only2.default
	};
	//import Tether from '../bower_components/tether/dist/js/tether.js'

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _webuploaderHtml5only = __webpack_require__(2);

	var _webuploaderHtml5only2 = _interopRequireDefault(_webuploaderHtml5only);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _typeof(obj) { return obj && obj.constructor === Symbol ? "symbol" : typeof obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FileUpload = (function ($, WebUploader) {

	    var NAME = 'fileupload';
	    var VERSION = '4.0.0';
	    var DATA_KEY = 'bs.' + NAME;
	    var EVENT_KEY = '.' + DATA_KEY;
	    var DATA_API_KEY = 'data-file-upload';
	    var JQUERY_NO_CONFLICT = $.fn[NAME];

	    var ClassName = {
	        FILE_LIST: NAME + '-file-list',
	        FILE_LIST_ITEM: NAME + '-file-item'
	    };

	    var Event = {
	        DND_ACCEPT: 'dndAccept' + EVENT_KEY,
	        BEFORE_FILE_QUEUED: 'beforeFileQueued' + EVENT_KEY,
	        FILE_QUEUED: 'fileQueued' + EVENT_KEY,
	        FILES_QUEUED: 'filesQueued' + EVENT_KEY,
	        FILE_DEQUEUED: 'fileDequeued' + EVENT_KEY,
	        RESET: 'reset' + EVENT_KEY,
	        START_UPLOAD: 'startUpload' + EVENT_KEY,
	        STOP_UPLOAD: 'stopUpload' + EVENT_KEY,
	        UPLOAD_FINISHED: 'uploadFinished' + EVENT_KEY,
	        UPLOAD_START: 'uploadStart' + EVENT_KEY,
	        UPLOAD_BEFORE_SEND: 'uploadBeforeSend' + EVENT_KEY,
	        UPLOAD_ACCEPT: 'uploadAccept' + EVENT_KEY,
	        UPLOAD_PROGRESS: 'uploadProgress' + EVENT_KEY,
	        UPLOAD_ERROR: 'uploadError' + EVENT_KEY,
	        UPLOAD_SUCCESS: 'uploadSuccess' + EVENT_KEY,
	        UPLOAD_COMPLETE: 'uploadComplete' + EVENT_KEY,
	        ERROR: 'error' + EVENT_KEY
	    };

	    var FileUpload = (function (_WebUploader$Uploader) {
	        _inherits(FileUpload, _WebUploader$Uploader);

	        function FileUpload(element, ops) {
	            _classCallCheck(this, FileUpload);

	            ops.pick = ops.pick || element;

	            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FileUpload).call(this, ops));

	            _this._element = element;
	            _this.instant();
	            _this._addEventListeners();
	            return _this;
	        }

	        _createClass(FileUpload, [{
	            key: '_addEventListeners',
	            value: function _addEventListeners() {
	                this.on('dndAccept', this._triggerDndAcceptEvent);
	                this.on('beforeFileQueued', this._triggerBeforeFileQueuedEvent);
	                this.on('fileQueued', this._triggerFileQueuedEvent);
	                this.on('filesQueued', this._triggerFilesQueuedEvent);
	                this.on('fileDequeued', this._triggerFileDequeuedEvent);
	                this.on('reset', this._triggerResetEvent);
	                this.on('startUpload', this._triggerStartUploadEvent);
	                this.on('stopUpload', this._triggerStopUploadEvent);
	                this.on('uploadFinished', this._triggerUploadFinishedEvent);
	                this.on('uploadStart', this._triggerUploadStartEvent);
	                this.on('uploadBeforeSend', this._triggerUploadBeforeSendEvent);
	                this.on('uploadAccept', this._triggerUploadAcceptEvent);
	                this.on('uploadProgress', this._triggerUploadProgressEvent);
	                this.on('uploadError', this._triggerUploadErrorEvent);
	                this.on('uploadSuccess', this._triggerUploadSuccessEvent);
	                this.on('uploadComplete', this._triggerUploadCompleteEvent);
	                this.on('error', this._triggerErrorEvent);
	            }
	        }, {
	            key: '_triggerDndAcceptEvent',
	            value: function _triggerDndAcceptEvent(file) {
	                var DndAcceptEvent = $.Event(Event.DND_ACCEPT);
	                $(this._element).trigger(DndAcceptEvent, [this].concat(Array.prototype.slice.call(arguments)));
	            }
	        }, {
	            key: '_triggerBeforeFileQueuedEvent',
	            value: function _triggerBeforeFileQueuedEvent(file) {
	                var BeforeFileQueuedEvent = $.Event(Event.BEFORE_FILE_QUEUED);
	                $(this._element).trigger(BeforeFileQueuedEvent, [this].concat(Array.prototype.slice.call(arguments)));
	            }
	        }, {
	            key: '_triggerFileQueuedEvent',
	            value: function _triggerFileQueuedEvent(file) {
	                var FileQueuedEvent = $.Event(Event.FILE_QUEUED);
	                $(this._element).trigger(FileQueuedEvent, [this].concat(Array.prototype.slice.call(arguments)));
	            }
	        }, {
	            key: '_triggerFilesQueuedEvent',
	            value: function _triggerFilesQueuedEvent(file) {
	                var FilesQueuedEvent = $.Event(Event.FILES_QUEUED);
	                $(this._element).trigger(FilesQueuedEvent, [this].concat(Array.prototype.slice.call(arguments)));
	            }
	        }, {
	            key: '_triggerFileDequeuedEvent',
	            value: function _triggerFileDequeuedEvent(file) {
	                var FileDequeuedEvent = $.Event(Event.FILE_DEQUEUED);
	                $(this._element).trigger(FileDequeuedEvent, [this].concat(Array.prototype.slice.call(arguments)));
	            }
	        }, {
	            key: '_triggerResetEvent',
	            value: function _triggerResetEvent(file) {
	                var ResetEvent = $.Event(Event.RESET);
	                $(this._element).trigger(ResetEvent, [this].concat(Array.prototype.slice.call(arguments)));
	            }
	        }, {
	            key: '_triggerStartUploadEvent',
	            value: function _triggerStartUploadEvent(file) {
	                var StartUploadEvent = $.Event(Event.START_UPLOAD);
	                $(this._element).trigger(StartUploadEvent, [this].concat(Array.prototype.slice.call(arguments)));
	            }
	        }, {
	            key: '_triggerStopUploadEvent',
	            value: function _triggerStopUploadEvent(file) {
	                var StopUploadEvent = $.Event(Event.STOP_UPLOAD);
	                $(this._element).trigger(StopUploadEvent, [this].concat(Array.prototype.slice.call(arguments)));
	            }
	        }, {
	            key: '_triggerUploadFinishedEvent',
	            value: function _triggerUploadFinishedEvent(file) {
	                var UploadFinishedEvent = $.Event(Event.UPLOAD_FINISHED);
	                $(this._element).trigger(UploadFinishedEvent, [this].concat(Array.prototype.slice.call(arguments)));
	            }
	        }, {
	            key: '_triggerUploadStartEvent',
	            value: function _triggerUploadStartEvent(file) {
	                var UploadStartEvent = $.Event(Event.UPLOAD_START);
	                $(this._element).trigger(UploadStartEvent, [this].concat(Array.prototype.slice.call(arguments)));
	            }
	        }, {
	            key: '_triggerUploadBeforeSendEvent',
	            value: function _triggerUploadBeforeSendEvent(file) {
	                var UploadBeforeSendEvent = $.Event(Event.UPLOAD_BEFORE_SEND);
	                $(this._element).trigger(UploadBeforeSendEvent, [this].concat(Array.prototype.slice.call(arguments)));
	            }
	        }, {
	            key: '_triggerUploadAcceptEvent',
	            value: function _triggerUploadAcceptEvent(file) {
	                var UploadAcceptEvent = $.Event(Event.UPLOAD_ACCEPT);
	                $(this._element).trigger(UploadAcceptEvent, [this].concat(Array.prototype.slice.call(arguments)));
	            }
	        }, {
	            key: '_triggerUploadProgressEvent',
	            value: function _triggerUploadProgressEvent(file) {
	                var UploadProgressEvent = $.Event(Event.UPLOAD_PROGRESS);
	                $(this._element).trigger(UploadProgressEvent, [this].concat(Array.prototype.slice.call(arguments)));
	            }
	        }, {
	            key: '_triggerUploadErrorEvent',
	            value: function _triggerUploadErrorEvent(file) {
	                var UploadErrorEvent = $.Event(Event.UPLOAD_ERROR);
	                $(this._element).trigger(UploadErrorEvent, [this].concat(Array.prototype.slice.call(arguments)));
	            }
	        }, {
	            key: '_triggerUploadSuccessEvent',
	            value: function _triggerUploadSuccessEvent(file) {
	                var UploadSuccessEvent = $.Event(Event.UPLOAD_SUCCESS);
	                $(this._element).trigger(UploadSuccessEvent, [this].concat(Array.prototype.slice.call(arguments)));
	            }
	        }, {
	            key: '_triggerUploadCompleteEvent',
	            value: function _triggerUploadCompleteEvent(file) {
	                var UploadCompleteEvent = $.Event(Event.UPLOAD_COMPLETE);
	                $(this._element).trigger(UploadCompleteEvent, [this].concat(Array.prototype.slice.call(arguments)));
	            }
	        }, {
	            key: '_triggerErrorEvent',
	            value: function _triggerErrorEvent(file) {
	                var ErrorEvent = $.Event(Event.ERROR);
	                $(this._element).trigger(ErrorEvent, [this].concat(Array.prototype.slice.call(arguments)));
	            }
	        }, {
	            key: 'instant',
	            value: function instant() {
	                if (this.options.fileList) {
	                    this.on('fileQueued filesQueued fileDequeued uploadProgress uploadError uploadSuccess', this.refreshFileList);
	                }
	            }
	        }, {
	            key: 'refreshFileList',
	            value: function refreshFileList() {
	                var $el = $(this._element);
	                var $list = $el.find('.' + ClassName.FILE_LIST);
	                var files = this.getFiles();
	                var arg1 = arguments[0];
	                var arg2 = arguments[1];
	                var percentage = null;
	                var error = null;
	                var res = null;
	                var nowFile = null;

	                if (!isNaN(arg2)) {
	                    nowFile = arg1;
	                    percentage = Math.round(arg2 * 100);
	                } else if ((typeof arg2 === 'undefined' ? 'undefined' : _typeof(arg2)) == 'object') {
	                    nowFile = arg1;
	                    res = arg2;
	                } else {
	                    error = arg2;
	                }

	                if (!$list.length) {
	                    $el.append($('<ul>', {
	                        class: ClassName.FILE_LIST
	                    }));
	                    $list = $el.find('.' + ClassName.FILE_LIST);
	                }

	                $list.empty();

	                files.forEach(function (file, i) {
	                    var $item = $('<li>', {
	                        class: ClassName.FILE_LIST_ITEM
	                    });

	                    var $label = $('<label>', {
	                        class: 'label label-info',
	                        text: file.name
	                    });
	                    var $progress = $('<progress>', {
	                        class: 'progress',
	                        max: 100, text: percentage
	                    });

	                    if (percentage && file.getStatus() == 'progress' && nowFile == file) {
	                        $progress.addClass('progress-main');
	                        $progress.val(percentage).text(percentage);
	                    } else if (file.getStatus() == 'complete') {
	                        $progress.addClass('progress-pass').val(100);
	                    } else if (error) {
	                        $progress.addClass('progress-wrong').val(100);
	                    }
	                    $item.append($label);
	                    $item.append($progress);
	                    $list.append($item);
	                });
	            }
	        }], [{
	            key: '_jQueryInterface',
	            value: function _jQueryInterface(config) {
	                return this.each(function () {
	                    var $element = $(this);
	                    var data = $element.data(DATA_KEY);

	                    if (!data) {
	                        data = new FileUpload(this, config);
	                        $element.data(DATA_KEY, data);
	                    }

	                    if (typeof config === 'string') {
	                        data[config].call(this);
	                    }
	                });
	            }
	        }]);

	        return FileUpload;
	    })(WebUploader.Uploader);

	    /**
	     * ------------------------------------------------------------------------
	     * jQuery
	     * ------------------------------------------------------------------------
	     */

	    $.fn[NAME] = FileUpload._jQueryInterface;
	    $.fn[NAME].Constructor = FileUpload;
	    $.fn[NAME].noConflict = function () {
	        $.fn[NAME] = JQUERY_NO_CONFLICT;
	        return FileUpload._jQueryInterface;
	    };

	    /**
	     * 声明式适配
	     */

	    $(document).ready(function () {
	        var uploaders = $('[' + DATA_API_KEY + ']');
	        uploaders.each(function (i, uploader) {
	            var $uploader = $(uploader);
	            $uploader.fileupload($uploader.data());
	        });
	    });

	    return FileUpload;
	})(jQuery, _webuploaderHtml5only2.default);

	exports.default = FileUpload;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';function _instanceof(left,right){if(right != null && right[Symbol.hasInstance]){return right[Symbol.hasInstance](left);}else {return left instanceof right;}}function _typeof(obj){return obj && obj.constructor === Symbol?"symbol":typeof obj;} /*! WebUploader 0.1.5 */ /**
	 * @fileOverview 让内部各个部件的代码可以用[amd](https://github.com/amdjs/amdjs-api/wiki/AMD)模块定义方式组织起来。
	 *
	 * AMD API 内部的简单不完全实现，请忽略。只有当WebUploader被合并成一个文件的时候才会引入。
	 */(function(root,factory){var modules={}, // 内部require, 简单不完全实现。
	// https://github.com/amdjs/amdjs-api/wiki/require
	_require=function _require(deps,callback){var args,len,i; // 如果deps不是数组，则直接返回指定module
	if(typeof deps === 'string'){return getModule(deps);}else {args = [];for(len = deps.length,i = 0;i < len;i++) {args.push(getModule(deps[i]));}return callback.apply(null,args);}}, // 内部define，暂时不支持不指定id.
	_define=function _define(id,deps,factory){if(arguments.length === 2){factory = deps;deps = null;}_require(deps || [],function(){setModule(id,factory,arguments);});}, // 设置module, 兼容CommonJs写法。
	setModule=function setModule(id,factory,args){var module={exports:factory},returned;if(typeof factory === 'function'){args.length || (args = [_require,module.exports,module]);returned = factory.apply(null,args);returned !== undefined && (module.exports = returned);}modules[id] = module.exports;}, // 根据id获取module
	getModule=function getModule(id){var module=modules[id] || root[id];if(!module){throw new Error('`' + id + '` is undefined');}return module;}, // 将所有modules，将路径ids装换成对象。
	exportsTo=function exportsTo(obj){var key,host,parts,part,last,ucFirst; // make the first character upper case.
	ucFirst = function(str){return str && str.charAt(0).toUpperCase() + str.substr(1);};for(key in modules) {host = obj;if(!modules.hasOwnProperty(key)){continue;}parts = key.split('/');last = ucFirst(parts.pop());while(part = ucFirst(parts.shift())) {host[part] = host[part] || {};host = host[part];}host[last] = modules[key];}return obj;},makeExport=function makeExport(dollar){root.__dollar = dollar; // exports every module.
	return exportsTo(factory(root,_define,_require));},origin;if(( false?'undefined':_typeof(module)) === 'object' && _typeof(module.exports) === 'object'){ // For CommonJS and CommonJS-like environments where a proper window is present,
	module.exports = makeExport();}else if(true){ // Allow using this built library as an AMD module
	// in another project. That other project will only
	// see this AMD call, not the internal modules in
	// the closure below.
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (makeExport), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else { // Browser globals case. Just assign the
	// result to a property on the global.
	origin = root.WebUploader;root.WebUploader = makeExport();root.WebUploader.noConflict = function(){root.WebUploader = origin;};}})(window,function(window,define,require){ /**
	     * @fileOverview jQuery or Zepto
	     */define('dollar-third',[],function(){var $=window.__dollar || window.jQuery || window.Zepto;if(!$){throw new Error('jQuery or Zepto not found!');}return $;}); /**
	     * @fileOverview Dom 操作相关
	     */define('dollar',['dollar-third'],function(_){return _;}); /**
	     * @fileOverview 使用jQuery的Promise
	     */define('promise-third',['dollar'],function($){return {Deferred:$.Deferred,when:$.when,isPromise:function isPromise(anything){return anything && typeof anything.then === 'function';}};}); /**
	     * @fileOverview Promise/A+
	     */define('promise',['promise-third'],function(_){return _;}); /**
	     * @fileOverview 基础类方法。
	     */ /**
	     * Web Uploader内部类的详细说明，以下提及的功能类，都可以在`WebUploader`这个变量中访问到。
	     *
	     * As you know, Web Uploader的每个文件都是用过[AMD](https://github.com/amdjs/amdjs-api/wiki/AMD)规范中的`define`组织起来的, 每个Module都会有个module id.
	     * 默认module id为该文件的路径，而此路径将会转化成名字空间存放在WebUploader中。如：
	     *
	     * * module `base`：WebUploader.Base
	     * * module `file`: WebUploader.File
	     * * module `lib/dnd`: WebUploader.Lib.Dnd
	     * * module `runtime/html5/dnd`: WebUploader.Runtime.Html5.Dnd
	     *
	     *
	     * 以下文档中对类的使用可能省略掉了`WebUploader`前缀。
	     * @module WebUploader
	     * @title WebUploader API文档
	     */define('base',['dollar','promise'],function($,promise){var noop=function noop(){},call=Function.call; // http://jsperf.com/uncurrythis
	// 反科里化
	function uncurryThis(fn){return function(){return call.apply(fn,arguments);};}function bindFn(fn,context){return function(){return fn.apply(context,arguments);};}function createObject(proto){var f;if(Object.create){return Object.create(proto);}else {f = function(){};f.prototype = proto;return new f();}} /**
	         * 基础类，提供一些简单常用的方法。
	         * @class Base
	         */return { /**
	             * @property {String} version 当前版本号。
	             */version:'0.1.5', /**
	             * @property {jQuery|Zepto} $ 引用依赖的jQuery或者Zepto对象。
	             */$:$,Deferred:promise.Deferred,isPromise:promise.isPromise,when:promise.when, /**
	             * @description  简单的浏览器检查结果。
	             *
	             * * `webkit`  webkit版本号，如果浏览器为非webkit内核，此属性为`undefined`。
	             * * `chrome`  chrome浏览器版本号，如果浏览器为chrome，此属性为`undefined`。
	             * * `ie`  ie浏览器版本号，如果浏览器为非ie，此属性为`undefined`。**暂不支持ie10+**
	             * * `firefox`  firefox浏览器版本号，如果浏览器为非firefox，此属性为`undefined`。
	             * * `safari`  safari浏览器版本号，如果浏览器为非safari，此属性为`undefined`。
	             * * `opera`  opera浏览器版本号，如果浏览器为非opera，此属性为`undefined`。
	             *
	             * @property {Object} [browser]
	             */browser:(function(ua){var ret={},webkit=ua.match(/WebKit\/([\d.]+)/),chrome=ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/),ie=ua.match(/MSIE\s([\d\.]+)/) || ua.match(/(?:trident)(?:.*rv:([\w.]+))?/i),firefox=ua.match(/Firefox\/([\d.]+)/),safari=ua.match(/Safari\/([\d.]+)/),opera=ua.match(/OPR\/([\d.]+)/);webkit && (ret.webkit = parseFloat(webkit[1]));chrome && (ret.chrome = parseFloat(chrome[1]));ie && (ret.ie = parseFloat(ie[1]));firefox && (ret.firefox = parseFloat(firefox[1]));safari && (ret.safari = parseFloat(safari[1]));opera && (ret.opera = parseFloat(opera[1]));return ret;})(navigator.userAgent), /**
	             * @description  操作系统检查结果。
	             *
	             * * `android`  如果在android浏览器环境下，此值为对应的android版本号，否则为`undefined`。
	             * * `ios` 如果在ios浏览器环境下，此值为对应的ios版本号，否则为`undefined`。
	             * @property {Object} [os]
	             */os:(function(ua){var ret={}, // osx = !!ua.match( /\(Macintosh\; Intel / ),
	android=ua.match(/(?:Android);?[\s\/]+([\d.]+)?/),ios=ua.match(/(?:iPad|iPod|iPhone).*OS\s([\d_]+)/); // osx && (ret.osx = true);
	android && (ret.android = parseFloat(android[1]));ios && (ret.ios = parseFloat(ios[1].replace(/_/g,'.')));return ret;})(navigator.userAgent), /**
	             * 实现类与类之间的继承。
	             * @method inherits
	             * @grammar Base.inherits( super ) => child
	             * @grammar Base.inherits( super, protos ) => child
	             * @grammar Base.inherits( super, protos, statics ) => child
	             * @param  {Class} super 父类
	             * @param  {Object | Function} [protos] 子类或者对象。如果对象中包含constructor，子类将是用此属性值。
	             * @param  {Function} [protos.constructor] 子类构造器，不指定的话将创建个临时的直接执行父类构造器的方法。
	             * @param  {Object} [statics] 静态属性或方法。
	             * @return {Class} 返回子类。
	             * @example
	             * function Person() {
	             *     console.log( 'Super' );
	             * }
	             * Person.prototype.hello = function() {
	             *     console.log( 'hello' );
	             * };
	             *
	             * var Manager = Base.inherits( Person, {
	             *     world: function() {
	             *         console.log( 'World' );
	             *     }
	             * });
	             *
	             * // 因为没有指定构造器，父类的构造器将会执行。
	             * var instance = new Manager();    // => Super
	             *
	             * // 继承子父类的方法
	             * instance.hello();    // => hello
	             * instance.world();    // => World
	             *
	             * // 子类的__super__属性指向父类
	             * console.log( Manager.__super__ === Person );    // => true
	             */inherits:function inherits(Super,protos,staticProtos){var child;if(typeof protos === 'function'){child = protos;protos = null;}else if(protos && protos.hasOwnProperty('constructor')){child = protos.constructor;}else {child = function(){return Super.apply(this,arguments);};} // 复制静态方法
	$.extend(true,child,Super,staticProtos || {}); /* jshint camelcase: false */ // 让子类的__super__属性指向父类。
	child.__super__ = Super.prototype; // 构建原型，添加原型方法或属性。
	// 暂时用Object.create实现。
	child.prototype = createObject(Super.prototype);protos && $.extend(true,child.prototype,protos);return child;}, /**
	             * 一个不做任何事情的方法。可以用来赋值给默认的callback.
	             * @method noop
	             */noop:noop, /**
	             * 返回一个新的方法，此方法将已指定的`context`来执行。
	             * @grammar Base.bindFn( fn, context ) => Function
	             * @method bindFn
	             * @example
	             * var doSomething = function() {
	             *         console.log( this.name );
	             *     },
	             *     obj = {
	             *         name: 'Object Name'
	             *     },
	             *     aliasFn = Base.bind( doSomething, obj );
	             *
	             *  aliasFn();    // => Object Name
	             *
	             */bindFn:bindFn, /**
	             * 引用Console.log如果存在的话，否则引用一个[空函数noop](#WebUploader:Base.noop)。
	             * @grammar Base.log( args... ) => undefined
	             * @method log
	             */log:(function(){if(window.console){return bindFn(console.log,console);}return noop;})(),nextTick:(function(){return function(cb){setTimeout(cb,1);}; // @bug 当浏览器不在当前窗口时就停了。
	// var next = window.requestAnimationFrame ||
	//     window.webkitRequestAnimationFrame ||
	//     window.mozRequestAnimationFrame ||
	//     function( cb ) {
	//         window.setTimeout( cb, 1000 / 60 );
	//     };
	// // fix: Uncaught TypeError: Illegal invocation
	// return bindFn( next, window );
	})(), /**
	             * 被[uncurrythis](http://www.2ality.com/2011/11/uncurrying-this.html)的数组slice方法。
	             * 将用来将非数组对象转化成数组对象。
	             * @grammar Base.slice( target, start[, end] ) => Array
	             * @method slice
	             * @example
	             * function doSomthing() {
	             *     var args = Base.slice( arguments, 1 );
	             *     console.log( args );
	             * }
	             *
	             * doSomthing( 'ignored', 'arg2', 'arg3' );    // => Array ["arg2", "arg3"]
	             */slice:uncurryThis([].slice), /**
	             * 生成唯一的ID
	             * @method guid
	             * @grammar Base.guid() => String
	             * @grammar Base.guid( prefx ) => String
	             */guid:(function(){var counter=0;return function(prefix){var guid=(+new Date()).toString(32),i=0;for(;i < 5;i++) {guid += Math.floor(Math.random() * 65535).toString(32);}return (prefix || 'wu_') + guid + (counter++).toString(32);};})(), /**
	             * 格式化文件大小, 输出成带单位的字符串
	             * @method formatSize
	             * @grammar Base.formatSize( size ) => String
	             * @grammar Base.formatSize( size, pointLength ) => String
	             * @grammar Base.formatSize( size, pointLength, units ) => String
	             * @param {Number} size 文件大小
	             * @param {Number} [pointLength=2] 精确到的小数点数。
	             * @param {Array} [units=[ 'B', 'K', 'M', 'G', 'TB' ]] 单位数组。从字节，到千字节，一直往上指定。如果单位数组里面只指定了到了K(千字节)，同时文件大小大于M, 此方法的输出将还是显示成多少K.
	             * @example
	             * console.log( Base.formatSize( 100 ) );    // => 100B
	             * console.log( Base.formatSize( 1024 ) );    // => 1.00K
	             * console.log( Base.formatSize( 1024, 0 ) );    // => 1K
	             * console.log( Base.formatSize( 1024 * 1024 ) );    // => 1.00M
	             * console.log( Base.formatSize( 1024 * 1024 * 1024 ) );    // => 1.00G
	             * console.log( Base.formatSize( 1024 * 1024 * 1024, 0, ['B', 'KB', 'MB'] ) );    // => 1024MB
	             */formatSize:function formatSize(size,pointLength,units){var unit;units = units || ['B','K','M','G','TB'];while((unit = units.shift()) && size > 1024) {size = size / 1024;}return (unit === 'B'?size:size.toFixed(pointLength || 2)) + unit;}};}); /**
	     * 事件处理类，可以独立使用，也可以扩展给对象使用。
	     * @fileOverview Mediator
	     */define('mediator',['base'],function(Base){var $=Base.$,slice=[].slice,separator=/\s+/,protos; // 根据条件过滤出事件handlers.
	function findHandlers(arr,name,callback,context){return $.grep(arr,function(handler){return handler && (!name || handler.e === name) && (!callback || handler.cb === callback || handler.cb._cb === callback) && (!context || handler.ctx === context);});}function eachEvent(events,callback,iterator){ // 不支持对象，只支持多个event用空格隔开
	$.each((events || '').split(separator),function(_,key){iterator(key,callback);});}function triggerHanders(events,args){var stoped=false,i=-1,len=events.length,handler;while(++i < len) {handler = events[i];if(handler.cb.apply(handler.ctx2,args) === false){stoped = true;break;}}return !stoped;}protos = { /**
	             * 绑定事件。
	             *
	             * `callback`方法在执行时，arguments将会来源于trigger的时候携带的参数。如
	             * ```javascript
	             * var obj = {};
	             *
	             * // 使得obj有事件行为
	             * Mediator.installTo( obj );
	             *
	             * obj.on( 'testa', function( arg1, arg2 ) {
	             *     console.log( arg1, arg2 ); // => 'arg1', 'arg2'
	             * });
	             *
	             * obj.trigger( 'testa', 'arg1', 'arg2' );
	             * ```
	             *
	             * 如果`callback`中，某一个方法`return false`了，则后续的其他`callback`都不会被执行到。
	             * 切会影响到`trigger`方法的返回值，为`false`。
	             *
	             * `on`还可以用来添加一个特殊事件`all`, 这样所有的事件触发都会响应到。同时此类`callback`中的arguments有一个不同处，
	             * 就是第一个参数为`type`，记录当前是什么事件在触发。此类`callback`的优先级比脚低，会再正常`callback`执行完后触发。
	             * ```javascript
	             * obj.on( 'all', function( type, arg1, arg2 ) {
	             *     console.log( type, arg1, arg2 ); // => 'testa', 'arg1', 'arg2'
	             * });
	             * ```
	             *
	             * @method on
	             * @grammar on( name, callback[, context] ) => self
	             * @param  {String}   name     事件名，支持多个事件用空格隔开
	             * @param  {Function} callback 事件处理器
	             * @param  {Object}   [context]  事件处理器的上下文。
	             * @return {self} 返回自身，方便链式
	             * @chainable
	             * @class Mediator
	             */on:function on(name,callback,context){var me=this,set;if(!callback){return this;}set = this._events || (this._events = []);eachEvent(name,callback,function(name,callback){var handler={e:name};handler.cb = callback;handler.ctx = context;handler.ctx2 = context || me;handler.id = set.length;set.push(handler);});return this;}, /**
	             * 绑定事件，且当handler执行完后，自动解除绑定。
	             * @method once
	             * @grammar once( name, callback[, context] ) => self
	             * @param  {String}   name     事件名
	             * @param  {Function} callback 事件处理器
	             * @param  {Object}   [context]  事件处理器的上下文。
	             * @return {self} 返回自身，方便链式
	             * @chainable
	             */once:function once(name,callback,context){var me=this;if(!callback){return me;}eachEvent(name,callback,function(name,callback){var once=function once(){me.off(name,once);return callback.apply(context || me,arguments);};once._cb = callback;me.on(name,once,context);});return me;}, /**
	             * 解除事件绑定
	             * @method off
	             * @grammar off( [name[, callback[, context] ] ] ) => self
	             * @param  {String}   [name]     事件名
	             * @param  {Function} [callback] 事件处理器
	             * @param  {Object}   [context]  事件处理器的上下文。
	             * @return {self} 返回自身，方便链式
	             * @chainable
	             */off:function off(name,cb,ctx){var events=this._events;if(!events){return this;}if(!name && !cb && !ctx){this._events = [];return this;}eachEvent(name,cb,function(name,cb){$.each(findHandlers(events,name,cb,ctx),function(){delete events[this.id];});});return this;}, /**
	             * 触发事件
	             * @method trigger
	             * @grammar trigger( name[, args...] ) => self
	             * @param  {String}   type     事件名
	             * @param  {*} [...] 任意参数
	             * @return {Boolean} 如果handler中return false了，则返回false, 否则返回true
	             */trigger:function trigger(type){var args,events,allEvents;if(!this._events || !type){return this;}args = slice.call(arguments,1);events = findHandlers(this._events,type);allEvents = findHandlers(this._events,'all');return triggerHanders(events,args) && triggerHanders(allEvents,arguments);}}; /**
	         * 中介者，它本身是个单例，但可以通过[installTo](#WebUploader:Mediator:installTo)方法，使任何对象具备事件行为。
	         * 主要目的是负责模块与模块之间的合作，降低耦合度。
	         *
	         * @class Mediator
	         */return $.extend({ /**
	             * 可以通过这个接口，使任何对象具备事件功能。
	             * @method installTo
	             * @param  {Object} obj 需要具备事件行为的对象。
	             * @return {Object} 返回obj.
	             */installTo:function installTo(obj){return $.extend(obj,protos);}},protos);}); /**
	     * @fileOverview Uploader上传类
	     */define('uploader',['base','mediator'],function(Base,Mediator){var $=Base.$; /**
	         * 上传入口类。
	         * @class Uploader
	         * @constructor
	         * @grammar new Uploader( opts ) => Uploader
	         * @example
	         * var uploader = WebUploader.Uploader({
	         *     swf: 'path_of_swf/Uploader.swf',
	         *
	         *     // 开起分片上传。
	         *     chunked: true
	         * });
	         */function Uploader(opts){this.options = $.extend(true,{},Uploader.options,opts);this._init(this.options);} // default Options
	// widgets中有相应扩展
	Uploader.options = {};Mediator.installTo(Uploader.prototype); // 批量添加纯命令式方法。
	$.each({upload:'start-upload',stop:'stop-upload',getFile:'get-file',getFiles:'get-files',addFile:'add-file',addFiles:'add-file',sort:'sort-files',removeFile:'remove-file',cancelFile:'cancel-file',skipFile:'skip-file',retry:'retry',isInProgress:'is-in-progress',makeThumb:'make-thumb',md5File:'md5-file',getDimension:'get-dimension',addButton:'add-btn',predictRuntimeType:'predict-runtime-type',refresh:'refresh',disable:'disable',enable:'enable',reset:'reset'},function(fn,command){Uploader.prototype[fn] = function(){return this.request(command,arguments);};});$.extend(Uploader.prototype,{state:'pending',_init:function _init(opts){var me=this;me.request('init',opts,function(){me.state = 'ready';me.trigger('ready');});}, /**
	             * 获取或者设置Uploader配置项。
	             * @method option
	             * @grammar option( key ) => *
	             * @grammar option( key, val ) => self
	             * @example
	             *
	             * // 初始状态图片上传前不会压缩
	             * var uploader = new WebUploader.Uploader({
	             *     compress: null;
	             * });
	             *
	             * // 修改后图片上传前，尝试将图片压缩到1600 * 1600
	             * uploader.option( 'compress', {
	             *     width: 1600,
	             *     height: 1600
	             * });
	             */option:function option(key,val){var opts=this.options; // setter
	if(arguments.length > 1){if($.isPlainObject(val) && $.isPlainObject(opts[key])){$.extend(opts[key],val);}else {opts[key] = val;}}else { // getter
	return key?opts[key]:opts;}}, /**
	             * 获取文件统计信息。返回一个包含一下信息的对象。
	             * * `successNum` 上传成功的文件数
	             * * `progressNum` 上传中的文件数
	             * * `cancelNum` 被删除的文件数
	             * * `invalidNum` 无效的文件数
	             * * `uploadFailNum` 上传失败的文件数
	             * * `queueNum` 还在队列中的文件数
	             * * `interruptNum` 被暂停的文件数
	             * @method getStats
	             * @grammar getStats() => Object
	             */getStats:function getStats(){ // return this._mgr.getStats.apply( this._mgr, arguments );
	var stats=this.request('get-stats');return stats?{successNum:stats.numOfSuccess,progressNum:stats.numOfProgress, // who care?
	// queueFailNum: 0,
	cancelNum:stats.numOfCancel,invalidNum:stats.numOfInvalid,uploadFailNum:stats.numOfUploadFailed,queueNum:stats.numOfQueue,interruptNum:stats.numofInterrupt}:{};}, // 需要重写此方法来来支持opts.onEvent和instance.onEvent的处理器
	trigger:function trigger(type /*, args...*/){var args=[].slice.call(arguments,1),opts=this.options,name='on' + type.substring(0,1).toUpperCase() + type.substring(1);if( // 调用通过on方法注册的handler.
	Mediator.trigger.apply(this,arguments) === false ||  // 调用opts.onEvent
	$.isFunction(opts[name]) && opts[name].apply(this,args) === false ||  // 调用this.onEvent
	$.isFunction(this[name]) && this[name].apply(this,args) === false ||  // 广播所有uploader的事件。
	Mediator.trigger.apply(Mediator,[this,type].concat(args)) === false){return false;}return true;}, /**
	             * 销毁 webuploader 实例
	             * @method destroy
	             * @grammar destroy() => undefined
	             */destroy:function destroy(){this.request('destroy',arguments);this.off();}, // widgets/widget.js将补充此方法的详细文档。
	request:Base.noop}); /**
	         * 创建Uploader实例，等同于new Uploader( opts );
	         * @method create
	         * @class Base
	         * @static
	         * @grammar Base.create( opts ) => Uploader
	         */Base.create = Uploader.create = function(opts){return new Uploader(opts);}; // 暴露Uploader，可以通过它来扩展业务逻辑。
	Base.Uploader = Uploader;return Uploader;}); /**
	     * @fileOverview Runtime管理器，负责Runtime的选择, 连接
	     */define('runtime/runtime',['base','mediator'],function(Base,Mediator){var $=Base.$,factories={}, // 获取对象的第一个key
	getFirstKey=function getFirstKey(obj){for(var key in obj) {if(obj.hasOwnProperty(key)){return key;}}return null;}; // 接口类。
	function Runtime(options){this.options = $.extend({container:document.body},options);this.uid = Base.guid('rt_');}$.extend(Runtime.prototype,{getContainer:function getContainer(){var opts=this.options,parent,container;if(this._container){return this._container;}parent = $(opts.container || document.body);container = $(document.createElement('div'));container.attr('id','rt_' + this.uid);container.css({position:'absolute',top:'0px',left:'0px',width:'1px',height:'1px',overflow:'hidden'});parent.append(container);parent.addClass('webuploader-container');this._container = container;this._parent = parent;return container;},init:Base.noop,exec:Base.noop,destroy:function destroy(){this._container && this._container.remove();this._parent && this._parent.removeClass('webuploader-container');this.off();}});Runtime.orders = 'html5,flash'; /**
	         * 添加Runtime实现。
	         * @param {String} type    类型
	         * @param {Runtime} factory 具体Runtime实现。
	         */Runtime.addRuntime = function(type,factory){factories[type] = factory;};Runtime.hasRuntime = function(type){return !!(type?factories[type]:getFirstKey(factories));};Runtime.create = function(opts,orders){var type,runtime;orders = orders || Runtime.orders;$.each(orders.split(/\s*,\s*/g),function(){if(factories[this]){type = this;return false;}});type = type || getFirstKey(factories);if(!type){throw new Error('Runtime Error');}runtime = new factories[type](opts);return runtime;};Mediator.installTo(Runtime.prototype);return Runtime;}); /**
	     * @fileOverview Runtime管理器，负责Runtime的选择, 连接
	     */define('runtime/client',['base','mediator','runtime/runtime'],function(Base,Mediator,Runtime){var cache;cache = (function(){var obj={};return {add:function add(runtime){obj[runtime.uid] = runtime;},get:function get(ruid,standalone){var i;if(ruid){return obj[ruid];}for(i in obj) { // 有些类型不能重用，比如filepicker.
	if(standalone && obj[i].__standalone){continue;}return obj[i];}return null;},remove:function remove(runtime){delete obj[runtime.uid];}};})();function RuntimeClient(component,standalone){var deferred=Base.Deferred(),runtime;this.uid = Base.guid('client_'); // 允许runtime没有初始化之前，注册一些方法在初始化后执行。
	this.runtimeReady = function(cb){return deferred.done(cb);};this.connectRuntime = function(opts,cb){ // already connected.
	if(runtime){throw new Error('already connected!');}deferred.done(cb);if(typeof opts === 'string' && cache.get(opts)){runtime = cache.get(opts);} // 像filePicker只能独立存在，不能公用。
	runtime = runtime || cache.get(null,standalone); // 需要创建
	if(!runtime){runtime = Runtime.create(opts,opts.runtimeOrder);runtime.__promise = deferred.promise();runtime.once('ready',deferred.resolve);runtime.init();cache.add(runtime);runtime.__client = 1;}else { // 来自cache
	Base.$.extend(runtime.options,opts);runtime.__promise.then(deferred.resolve);runtime.__client++;}standalone && (runtime.__standalone = standalone);return runtime;};this.getRuntime = function(){return runtime;};this.disconnectRuntime = function(){if(!runtime){return;}runtime.__client--;if(runtime.__client <= 0){cache.remove(runtime);delete runtime.__promise;runtime.destroy();}runtime = null;};this.exec = function(){if(!runtime){return;}var args=Base.slice(arguments);component && args.unshift(component);return runtime.exec.apply(this,args);};this.getRuid = function(){return runtime && runtime.uid;};this.destroy = (function(destroy){return function(){destroy && destroy.apply(this,arguments);this.trigger('destroy');this.off();this.exec('destroy');this.disconnectRuntime();};})(this.destroy);}Mediator.installTo(RuntimeClient.prototype);return RuntimeClient;}); /**
	     * @fileOverview 错误信息
	     */define('lib/dnd',['base','mediator','runtime/client'],function(Base,Mediator,RuntimeClent){var $=Base.$;function DragAndDrop(opts){opts = this.options = $.extend({},DragAndDrop.options,opts);opts.container = $(opts.container);if(!opts.container.length){return;}RuntimeClent.call(this,'DragAndDrop');}DragAndDrop.options = {accept:null,disableGlobalDnd:false};Base.inherits(RuntimeClent,{constructor:DragAndDrop,init:function init(){var me=this;me.connectRuntime(me.options,function(){me.exec('init');me.trigger('ready');});}});Mediator.installTo(DragAndDrop.prototype);return DragAndDrop;}); /**
	     * @fileOverview 组件基类。
	     */define('widgets/widget',['base','uploader'],function(Base,Uploader){var $=Base.$,_init2=Uploader.prototype._init,_destroy=Uploader.prototype.destroy,IGNORE={},widgetClass=[];function isArrayLike(obj){if(!obj){return false;}var length=obj.length,type=$.type(obj);if(obj.nodeType === 1 && length){return true;}return type === 'array' || type !== 'function' && type !== 'string' && (length === 0 || typeof length === 'number' && length > 0 && length - 1 in obj);}function Widget(uploader){this.owner = uploader;this.options = uploader.options;}$.extend(Widget.prototype,{init:Base.noop, // 类Backbone的事件监听声明，监听uploader实例上的事件
	// widget直接无法监听事件，事件只能通过uploader来传递
	invoke:function invoke(apiName,args){ /*
	                    {
	                        'make-thumb': 'makeThumb'
	                    }
	                 */var map=this.responseMap; // 如果无API响应声明则忽略
	if(!map || !(apiName in map) || !(map[apiName] in this) || !$.isFunction(this[map[apiName]])){return IGNORE;}return this[map[apiName]].apply(this,args);}, /**
	             * 发送命令。当传入`callback`或者`handler`中返回`promise`时。返回一个当所有`handler`中的promise都完成后完成的新`promise`。
	             * @method request
	             * @grammar request( command, args ) => * | Promise
	             * @grammar request( command, args, callback ) => Promise
	             * @for  Uploader
	             */request:function request(){return this.owner.request.apply(this.owner,arguments);}}); // 扩展Uploader.
	$.extend(Uploader.prototype,{ /**
	             * @property {String | Array} [disableWidgets=undefined]
	             * @namespace options
	             * @for Uploader
	             * @description 默认所有 Uploader.register 了的 widget 都会被加载，如果禁用某一部分，请通过此 option 指定黑名单。
	             */ // 覆写_init用来初始化widgets
	_init:function _init(){var me=this,widgets=me._widgets = [],deactives=me.options.disableWidgets || '';$.each(widgetClass,function(_,klass){(!deactives || ! ~deactives.indexOf(klass._name)) && widgets.push(new klass(me));});return _init2.apply(me,arguments);},request:function request(apiName,args,callback){var i=0,widgets=this._widgets,len=widgets && widgets.length,rlts=[],dfds=[],widget,rlt,promise,key;args = isArrayLike(args)?args:[args];for(;i < len;i++) {widget = widgets[i];rlt = widget.invoke(apiName,args);if(rlt !== IGNORE){ // Deferred对象
	if(Base.isPromise(rlt)){dfds.push(rlt);}else {rlts.push(rlt);}}} // 如果有callback，则用异步方式。
	if(callback || dfds.length){promise = Base.when.apply(Base,dfds);key = promise.pipe?'pipe':'then'; // 很重要不能删除。删除了会死循环。
	// 保证执行顺序。让callback总是在下一个 tick 中执行。
	return promise[key](function(){var deferred=Base.Deferred(),args=arguments;if(args.length === 1){args = args[0];}setTimeout(function(){deferred.resolve(args);},1);return deferred.promise();})[callback?key:'done'](callback || Base.noop);}else {return rlts[0];}},destroy:function destroy(){_destroy.apply(this,arguments);this._widgets = null;}}); /**
	         * 添加组件
	         * @grammar Uploader.register(proto);
	         * @grammar Uploader.register(map, proto);
	         * @param  {object} responseMap API 名称与函数实现的映射
	         * @param  {object} proto 组件原型，构造函数通过 constructor 属性定义
	         * @method Uploader.register
	         * @for Uploader
	         * @example
	         * Uploader.register({
	         *     'make-thumb': 'makeThumb'
	         * }, {
	         *     init: function( options ) {},
	         *     makeThumb: function() {}
	         * });
	         *
	         * Uploader.register({
	         *     'make-thumb': function() {
	         *         
	         *     }
	         * });
	         */Uploader.register = Widget.register = function(responseMap,widgetProto){var map={init:'init',destroy:'destroy',name:'anonymous'},klass;if(arguments.length === 1){widgetProto = responseMap; // 自动生成 map 表。
	$.each(widgetProto,function(key){if(key[0] === '_' || key === 'name'){key === 'name' && (map.name = widgetProto.name);return;}map[key.replace(/[A-Z]/g,'-$&').toLowerCase()] = key;});}else {map = $.extend(map,responseMap);}widgetProto.responseMap = map;klass = Base.inherits(Widget,widgetProto);klass._name = map.name;widgetClass.push(klass);return klass;}; /**
	         * 删除插件，只有在注册时指定了名字的才能被删除。
	         * @grammar Uploader.unRegister(name);
	         * @param  {string} name 组件名字
	         * @method Uploader.unRegister
	         * @for Uploader
	         * @example
	         *
	         * Uploader.register({
	         *     name: 'custom',
	         *     
	         *     'make-thumb': function() {
	         *         
	         *     }
	         * });
	         *
	         * Uploader.unRegister('custom');
	         */Uploader.unRegister = Widget.unRegister = function(name){if(!name || name === 'anonymous'){return;} // 删除指定的插件。
	for(var i=widgetClass.length;i--;) {if(widgetClass[i]._name === name){widgetClass.splice(i,1);}}};return Widget;}); /**
	     * @fileOverview DragAndDrop Widget。
	     */define('widgets/filednd',['base','uploader','lib/dnd','widgets/widget'],function(Base,Uploader,Dnd){var $=Base.$;Uploader.options.dnd = ''; /**
	         * @property {Selector} [dnd=undefined]  指定Drag And Drop拖拽的容器，如果不指定，则不启动。
	         * @namespace options
	         * @for Uploader
	         */ /**
	         * @property {Selector} [disableGlobalDnd=false]  是否禁掉整个页面的拖拽功能，如果不禁用，图片拖进来的时候会默认被浏览器打开。
	         * @namespace options
	         * @for Uploader
	         */ /**
	         * @event dndAccept
	         * @param {DataTransferItemList} items DataTransferItem
	         * @description 阻止此事件可以拒绝某些类型的文件拖入进来。目前只有 chrome 提供这样的 API，且只能通过 mime-type 验证。
	         * @for  Uploader
	         */return Uploader.register({name:'dnd',init:function init(opts){if(!opts.dnd || this.request('predict-runtime-type') !== 'html5'){return;}var me=this,deferred=Base.Deferred(),options=$.extend({},{disableGlobalDnd:opts.disableGlobalDnd,container:opts.dnd,accept:opts.accept}),dnd;this.dnd = dnd = new Dnd(options);dnd.once('ready',deferred.resolve);dnd.on('drop',function(files){me.request('add-file',[files]);}); // 检测文件是否全部允许添加。
	dnd.on('accept',function(items){return me.owner.trigger('dndAccept',items);});dnd.init();return deferred.promise();},destroy:function destroy(){this.dnd && this.dnd.destroy();}});}); /**
	     * @fileOverview 错误信息
	     */define('lib/filepaste',['base','mediator','runtime/client'],function(Base,Mediator,RuntimeClent){var $=Base.$;function FilePaste(opts){opts = this.options = $.extend({},opts);opts.container = $(opts.container || document.body);RuntimeClent.call(this,'FilePaste');}Base.inherits(RuntimeClent,{constructor:FilePaste,init:function init(){var me=this;me.connectRuntime(me.options,function(){me.exec('init');me.trigger('ready');});}});Mediator.installTo(FilePaste.prototype);return FilePaste;}); /**
	     * @fileOverview 组件基类。
	     */define('widgets/filepaste',['base','uploader','lib/filepaste','widgets/widget'],function(Base,Uploader,FilePaste){var $=Base.$; /**
	         * @property {Selector} [paste=undefined]  指定监听paste事件的容器，如果不指定，不启用此功能。此功能为通过粘贴来添加截屏的图片。建议设置为`document.body`.
	         * @namespace options
	         * @for Uploader
	         */return Uploader.register({name:'paste',init:function init(opts){if(!opts.paste || this.request('predict-runtime-type') !== 'html5'){return;}var me=this,deferred=Base.Deferred(),options=$.extend({},{container:opts.paste,accept:opts.accept}),paste;this.paste = paste = new FilePaste(options);paste.once('ready',deferred.resolve);paste.on('paste',function(files){me.owner.request('add-file',[files]);});paste.init();return deferred.promise();},destroy:function destroy(){this.paste && this.paste.destroy();}});}); /**
	     * @fileOverview Blob
	     */define('lib/blob',['base','runtime/client'],function(Base,RuntimeClient){function Blob(ruid,source){var me=this;me.source = source;me.ruid = ruid;this.size = source.size || 0; // 如果没有指定 mimetype, 但是知道文件后缀。
	if(!source.type && this.ext && ~'jpg,jpeg,png,gif,bmp'.indexOf(this.ext)){this.type = 'image/' + (this.ext === 'jpg'?'jpeg':this.ext);}else {this.type = source.type || 'application/octet-stream';}RuntimeClient.call(me,'Blob');this.uid = source.uid || this.uid;if(ruid){me.connectRuntime(ruid);}}Base.inherits(RuntimeClient,{constructor:Blob,slice:function slice(start,end){return this.exec('slice',start,end);},getSource:function getSource(){return this.source;}});return Blob;}); /**
	     * 为了统一化Flash的File和HTML5的File而存在。
	     * 以至于要调用Flash里面的File，也可以像调用HTML5版本的File一下。
	     * @fileOverview File
	     */define('lib/file',['base','lib/blob'],function(Base,Blob){var uid=1,rExt=/\.([^.]+)$/;function File(ruid,file){var ext;this.name = file.name || 'untitled' + uid++;ext = rExt.exec(file.name)?RegExp.$1.toLowerCase():''; // todo 支持其他类型文件的转换。
	// 如果有 mimetype, 但是文件名里面没有找出后缀规律
	if(!ext && file.type){ext = /\/(jpg|jpeg|png|gif|bmp)$/i.exec(file.type)?RegExp.$1.toLowerCase():'';this.name += '.' + ext;}this.ext = ext;this.lastModifiedDate = file.lastModifiedDate || new Date().toLocaleString();Blob.apply(this,arguments);}return Base.inherits(Blob,File);}); /**
	     * @fileOverview 错误信息
	     */define('lib/filepicker',['base','runtime/client','lib/file'],function(Base,RuntimeClent,File){var $=Base.$;function FilePicker(opts){opts = this.options = $.extend({},FilePicker.options,opts);opts.container = $(opts.id);if(!opts.container.length){throw new Error('按钮指定错误');}opts.innerHTML = opts.innerHTML || opts.label || opts.container.html() || '';opts.button = $(opts.button || document.createElement('div'));opts.button.html(opts.innerHTML);opts.container.html(opts.button);RuntimeClent.call(this,'FilePicker',true);}FilePicker.options = {button:null,container:null,label:null,innerHTML:null,multiple:true,accept:null,name:'file'};Base.inherits(RuntimeClent,{constructor:FilePicker,init:function init(){var me=this,opts=me.options,button=opts.button;button.addClass('webuploader-pick');me.on('all',function(type){var files;switch(type){case 'mouseenter':button.addClass('webuploader-pick-hover');break;case 'mouseleave':button.removeClass('webuploader-pick-hover');break;case 'change':files = me.exec('getFiles');me.trigger('select',$.map(files,function(file){file = new File(me.getRuid(),file); // 记录来源。
	file._refer = opts.container;return file;}),opts.container);break;}});me.connectRuntime(opts,function(){me.refresh();me.exec('init',opts);me.trigger('ready');});this._resizeHandler = Base.bindFn(this.refresh,this);$(window).on('resize',this._resizeHandler);},refresh:function refresh(){var shimContainer=this.getRuntime().getContainer(),button=this.options.button,width=button.outerWidth?button.outerWidth():button.width(),height=button.outerHeight?button.outerHeight():button.height(),pos=button.offset();width && height && shimContainer.css({bottom:'auto',right:'auto',width:width + 'px',height:height + 'px'}).offset(pos);},enable:function enable(){var btn=this.options.button;btn.removeClass('webuploader-pick-disable');this.refresh();},disable:function disable(){var btn=this.options.button;this.getRuntime().getContainer().css({top:'-99999px'});btn.addClass('webuploader-pick-disable');},destroy:function destroy(){var btn=this.options.button;$(window).off('resize',this._resizeHandler);btn.removeClass('webuploader-pick-disable webuploader-pick-hover ' + 'webuploader-pick');}});return FilePicker;}); /**
	     * @fileOverview 文件选择相关
	     */define('widgets/filepicker',['base','uploader','lib/filepicker','widgets/widget'],function(Base,Uploader,FilePicker){var $=Base.$;$.extend(Uploader.options,{ /**
	             * @property {Selector | Object} [pick=undefined]
	             * @namespace options
	             * @for Uploader
	             * @description 指定选择文件的按钮容器，不指定则不创建按钮。
	             *
	             * * `id` {Seletor|dom} 指定选择文件的按钮容器，不指定则不创建按钮。**注意** 这里虽然写的是 id, 但是不是只支持 id, 还支持 class, 或者 dom 节点。
	             * * `label` {String} 请采用 `innerHTML` 代替
	             * * `innerHTML` {String} 指定按钮文字。不指定时优先从指定的容器中看是否自带文字。
	             * * `multiple` {Boolean} 是否开起同时选择多个文件能力。
	             */pick:null, /**
	             * @property {Arroy} [accept=null]
	             * @namespace options
	             * @for Uploader
	             * @description 指定接受哪些类型的文件。 由于目前还有ext转mimeType表，所以这里需要分开指定。
	             *
	             * * `title` {String} 文字描述
	             * * `extensions` {String} 允许的文件后缀，不带点，多个用逗号分割。
	             * * `mimeTypes` {String} 多个用逗号分割。
	             *
	             * 如：
	             *
	             * ```
	             * {
	             *     title: 'Images',
	             *     extensions: 'gif,jpg,jpeg,bmp,png',
	             *     mimeTypes: 'image/*'
	             * }
	             * ```
	             */accept:null /*{
	                title: 'Images',
	                extensions: 'gif,jpg,jpeg,bmp,png',
	                mimeTypes: 'image/*'
	            }*/});return Uploader.register({name:'picker',init:function init(opts){this.pickers = [];return opts.pick && this.addBtn(opts.pick);},refresh:function refresh(){$.each(this.pickers,function(){this.refresh();});}, /**
	             * @method addButton
	             * @for Uploader
	             * @grammar addButton( pick ) => Promise
	             * @description
	             * 添加文件选择按钮，如果一个按钮不够，需要调用此方法来添加。参数跟[options.pick](#WebUploader:Uploader:options)一致。
	             * @example
	             * uploader.addButton({
	             *     id: '#btnContainer',
	             *     innerHTML: '选择文件'
	             * });
	             */addBtn:function addBtn(pick){var me=this,opts=me.options,accept=opts.accept,promises=[];if(!pick){return;}$.isPlainObject(pick) || (pick = {id:pick});$(pick.id).each(function(){var options,picker,deferred;deferred = Base.Deferred();options = $.extend({},pick,{accept:$.isPlainObject(accept)?[accept]:accept,swf:opts.swf,runtimeOrder:opts.runtimeOrder,id:this});picker = new FilePicker(options);picker.once('ready',deferred.resolve);picker.on('select',function(files){me.owner.request('add-file',[files]);});picker.init();me.pickers.push(picker);promises.push(deferred.promise());});return Base.when.apply(Base,promises);},disable:function disable(){$.each(this.pickers,function(){this.disable();});},enable:function enable(){$.each(this.pickers,function(){this.enable();});},destroy:function destroy(){$.each(this.pickers,function(){this.destroy();});this.pickers = null;}});}); /**
	     * @fileOverview Image
	     */define('lib/image',['base','runtime/client','lib/blob'],function(Base,RuntimeClient,Blob){var $=Base.$; // 构造器。
	function Image(opts){this.options = $.extend({},Image.options,opts);RuntimeClient.call(this,'Image');this.on('load',function(){this._info = this.exec('info');this._meta = this.exec('meta');});} // 默认选项。
	Image.options = { // 默认的图片处理质量
	quality:90, // 是否裁剪
	crop:false, // 是否保留头部信息
	preserveHeaders:false, // 是否允许放大。
	allowMagnify:false}; // 继承RuntimeClient.
	Base.inherits(RuntimeClient,{constructor:Image,info:function info(val){ // setter
	if(val){this._info = val;return this;} // getter
	return this._info;},meta:function meta(val){ // setter
	if(val){this._meta = val;return this;} // getter
	return this._meta;},loadFromBlob:function loadFromBlob(blob){var me=this,ruid=blob.getRuid();this.connectRuntime(ruid,function(){me.exec('init',me.options);me.exec('loadFromBlob',blob);});},resize:function resize(){var args=Base.slice(arguments);return this.exec.apply(this,['resize'].concat(args));},crop:function crop(){var args=Base.slice(arguments);return this.exec.apply(this,['crop'].concat(args));},getAsDataUrl:function getAsDataUrl(type){return this.exec('getAsDataUrl',type);},getAsBlob:function getAsBlob(type){var blob=this.exec('getAsBlob',type);return new Blob(this.getRuid(),blob);}});return Image;}); /**
	     * @fileOverview 图片操作, 负责预览图片和上传前压缩图片
	     */define('widgets/image',['base','uploader','lib/image','widgets/widget'],function(Base,Uploader,Image){var $=Base.$,throttle; // 根据要处理的文件大小来节流，一次不能处理太多，会卡。
	throttle = (function(max){var occupied=0,waiting=[],tick=function tick(){var item;while(waiting.length && occupied < max) {item = waiting.shift();occupied += item[0];item[1]();}};return function(emiter,size,cb){waiting.push([size,cb]);emiter.once('destroy',function(){occupied -= size;setTimeout(tick,1);});setTimeout(tick,1);};})(5 * 1024 * 1024);$.extend(Uploader.options,{ /**
	             * @property {Object} [thumb]
	             * @namespace options
	             * @for Uploader
	             * @description 配置生成缩略图的选项。
	             *
	             * 默认为：
	             *
	             * ```javascript
	             * {
	             *     width: 110,
	             *     height: 110,
	             *
	             *     // 图片质量，只有type为`image/jpeg`的时候才有效。
	             *     quality: 70,
	             *
	             *     // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
	             *     allowMagnify: true,
	             *
	             *     // 是否允许裁剪。
	             *     crop: true,
	             *
	             *     // 为空的话则保留原有图片格式。
	             *     // 否则强制转换成指定的类型。
	             *     type: 'image/jpeg'
	             * }
	             * ```
	             */thumb:{width:110,height:110,quality:70,allowMagnify:true,crop:true,preserveHeaders:false, // 为空的话则保留原有图片格式。
	// 否则强制转换成指定的类型。
	// IE 8下面 base64 大小不能超过 32K 否则预览失败，而非 jpeg 编码的图片很可
	// 能会超过 32k, 所以这里设置成预览的时候都是 image/jpeg
	type:'image/jpeg'}, /**
	             * @property {Object} [compress]
	             * @namespace options
	             * @for Uploader
	             * @description 配置压缩的图片的选项。如果此选项为`false`, 则图片在上传前不进行压缩。
	             *
	             * 默认为：
	             *
	             * ```javascript
	             * {
	             *     width: 1600,
	             *     height: 1600,
	             *
	             *     // 图片质量，只有type为`image/jpeg`的时候才有效。
	             *     quality: 90,
	             *
	             *     // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
	             *     allowMagnify: false,
	             *
	             *     // 是否允许裁剪。
	             *     crop: false,
	             *
	             *     // 是否保留头部meta信息。
	             *     preserveHeaders: true,
	             *
	             *     // 如果发现压缩后文件大小比原来还大，则使用原来图片
	             *     // 此属性可能会影响图片自动纠正功能
	             *     noCompressIfLarger: false,
	             *
	             *     // 单位字节，如果图片大小小于此值，不会采用压缩。
	             *     compressSize: 0
	             * }
	             * ```
	             */compress:{width:1600,height:1600,quality:90,allowMagnify:false,crop:false,preserveHeaders:true}});return Uploader.register({name:'image', /**
	             * 生成缩略图，此过程为异步，所以需要传入`callback`。
	             * 通常情况在图片加入队里后调用此方法来生成预览图以增强交互效果。
	             *
	             * 当 width 或者 height 的值介于 0 - 1 时，被当成百分比使用。
	             *
	             * `callback`中可以接收到两个参数。
	             * * 第一个为error，如果生成缩略图有错误，此error将为真。
	             * * 第二个为ret, 缩略图的Data URL值。
	             *
	             * **注意**
	             * Date URL在IE6/7中不支持，所以不用调用此方法了，直接显示一张暂不支持预览图片好了。
	             * 也可以借助服务端，将 base64 数据传给服务端，生成一个临时文件供预览。
	             *
	             * @method makeThumb
	             * @grammar makeThumb( file, callback ) => undefined
	             * @grammar makeThumb( file, callback, width, height ) => undefined
	             * @for Uploader
	             * @example
	             *
	             * uploader.on( 'fileQueued', function( file ) {
	             *     var $li = ...;
	             *
	             *     uploader.makeThumb( file, function( error, ret ) {
	             *         if ( error ) {
	             *             $li.text('预览错误');
	             *         } else {
	             *             $li.append('<img alt="" src="' + ret + '" />');
	             *         }
	             *     });
	             *
	             * });
	             */makeThumb:function makeThumb(file,cb,width,height){var opts,image;file = this.request('get-file',file); // 只预览图片格式。
	if(!file.type.match(/^image/)){cb(true);return;}opts = $.extend({},this.options.thumb); // 如果传入的是object.
	if($.isPlainObject(width)){opts = $.extend(opts,width);width = null;}width = width || opts.width;height = height || opts.height;image = new Image(opts);image.once('load',function(){file._info = file._info || image.info();file._meta = file._meta || image.meta(); // 如果 width 的值介于 0 - 1
	// 说明设置的是百分比。
	if(width <= 1 && width > 0){width = file._info.width * width;} // 同样的规则应用于 height
	if(height <= 1 && height > 0){height = file._info.height * height;}image.resize(width,height);}); // 当 resize 完后
	image.once('complete',function(){cb(false,image.getAsDataUrl(opts.type));image.destroy();});image.once('error',function(reason){cb(reason || true);image.destroy();});throttle(image,file.source.size,function(){file._info && image.info(file._info);file._meta && image.meta(file._meta);image.loadFromBlob(file.source);});},beforeSendFile:function beforeSendFile(file){var opts=this.options.compress || this.options.resize,compressSize=opts && opts.compressSize || 0,noCompressIfLarger=opts && opts.noCompressIfLarger || false,image,deferred;file = this.request('get-file',file); // 只压缩 jpeg 图片格式。
	// gif 可能会丢失针
	// bmp png 基本上尺寸都不大，且压缩比比较小。
	if(!opts || ! ~'image/jpeg,image/jpg'.indexOf(file.type) || file.size < compressSize || file._compressed){return;}opts = $.extend({},opts);deferred = Base.Deferred();image = new Image(opts);deferred.always(function(){image.destroy();image = null;});image.once('error',deferred.reject);image.once('load',function(){var width=opts.width,height=opts.height;file._info = file._info || image.info();file._meta = file._meta || image.meta(); // 如果 width 的值介于 0 - 1
	// 说明设置的是百分比。
	if(width <= 1 && width > 0){width = file._info.width * width;} // 同样的规则应用于 height
	if(height <= 1 && height > 0){height = file._info.height * height;}image.resize(width,height);});image.once('complete',function(){var blob,size; // 移动端 UC / qq 浏览器的无图模式下
	// ctx.getImageData 处理大图的时候会报 Exception
	// INDEX_SIZE_ERR: DOM Exception 1
	try{blob = image.getAsBlob(opts.type);size = file.size; // 如果压缩后，比原来还大则不用压缩后的。
	if(!noCompressIfLarger || blob.size < size){ // file.source.destroy && file.source.destroy();
	file.source = blob;file.size = blob.size;file.trigger('resize',blob.size,size);} // 标记，避免重复压缩。
	file._compressed = true;deferred.resolve();}catch(e) { // 出错了直接继续，让其上传原始图片
	deferred.resolve();}});file._info && image.info(file._info);file._meta && image.meta(file._meta);image.loadFromBlob(file.source);return deferred.promise();}});}); /**
	     * @fileOverview 文件属性封装
	     */define('file',['base','mediator'],function(Base,Mediator){var $=Base.$,idPrefix='WU_FILE_',idSuffix=0,rExt=/\.([^.]+)$/,statusMap={};function gid(){return idPrefix + idSuffix++;} /**
	         * 文件类
	         * @class File
	         * @constructor 构造函数
	         * @grammar new File( source ) => File
	         * @param {Lib.File} source [lib.File](#Lib.File)实例, 此source对象是带有Runtime信息的。
	         */function WUFile(source){ /**
	             * 文件名，包括扩展名（后缀）
	             * @property name
	             * @type {string}
	             */this.name = source.name || 'Untitled'; /**
	             * 文件体积（字节）
	             * @property size
	             * @type {uint}
	             * @default 0
	             */this.size = source.size || 0; /**
	             * 文件MIMETYPE类型，与文件类型的对应关系请参考[http://t.cn/z8ZnFny](http://t.cn/z8ZnFny)
	             * @property type
	             * @type {string}
	             * @default 'application/octet-stream'
	             */this.type = source.type || 'application/octet-stream'; /**
	             * 文件最后修改日期
	             * @property lastModifiedDate
	             * @type {int}
	             * @default 当前时间戳
	             */this.lastModifiedDate = source.lastModifiedDate || new Date() * 1; /**
	             * 文件ID，每个对象具有唯一ID，与文件名无关
	             * @property id
	             * @type {string}
	             */this.id = gid(); /**
	             * 文件扩展名，通过文件名获取，例如test.png的扩展名为png
	             * @property ext
	             * @type {string}
	             */this.ext = rExt.exec(this.name)?RegExp.$1:''; /**
	             * 状态文字说明。在不同的status语境下有不同的用途。
	             * @property statusText
	             * @type {string}
	             */this.statusText = ''; // 存储文件状态，防止通过属性直接修改
	statusMap[this.id] = WUFile.Status.INITED;this.source = source;this.loaded = 0;this.on('error',function(msg){this.setStatus(WUFile.Status.ERROR,msg);});}$.extend(WUFile.prototype,{ /**
	             * 设置状态，状态变化时会触发`change`事件。
	             * @method setStatus
	             * @grammar setStatus( status[, statusText] );
	             * @param {File.Status|String} status [文件状态值](#WebUploader:File:File.Status)
	             * @param {String} [statusText=''] 状态说明，常在error时使用，用http, abort,server等来标记是由于什么原因导致文件错误。
	             */setStatus:function setStatus(status,text){var prevStatus=statusMap[this.id];typeof text !== 'undefined' && (this.statusText = text);if(status !== prevStatus){statusMap[this.id] = status; /**
	                     * 文件状态变化
	                     * @event statuschange
	                     */this.trigger('statuschange',status,prevStatus);}}, /**
	             * 获取文件状态
	             * @return {File.Status}
	             * @example
	                     文件状态具体包括以下几种类型：
	                     {
	                         // 初始化
	                        INITED:     0,
	                        // 已入队列
	                        QUEUED:     1,
	                        // 正在上传
	                        PROGRESS:     2,
	                        // 上传出错
	                        ERROR:         3,
	                        // 上传成功
	                        COMPLETE:     4,
	                        // 上传取消
	                        CANCELLED:     5
	                    }
	             */getStatus:function getStatus(){return statusMap[this.id];}, /**
	             * 获取文件原始信息。
	             * @return {*}
	             */getSource:function getSource(){return this.source;},destroy:function destroy(){this.off();delete statusMap[this.id];}});Mediator.installTo(WUFile.prototype); /**
	         * 文件状态值，具体包括以下几种类型：
	         * * `inited` 初始状态
	         * * `queued` 已经进入队列, 等待上传
	         * * `progress` 上传中
	         * * `complete` 上传完成。
	         * * `error` 上传出错，可重试
	         * * `interrupt` 上传中断，可续传。
	         * * `invalid` 文件不合格，不能重试上传。会自动从队列中移除。
	         * * `cancelled` 文件被移除。
	         * @property {Object} Status
	         * @namespace File
	         * @class File
	         * @static
	         */WUFile.Status = {INITED:'inited', // 初始状态
	QUEUED:'queued', // 已经进入队列, 等待上传
	PROGRESS:'progress', // 上传中
	ERROR:'error', // 上传出错，可重试
	COMPLETE:'complete', // 上传完成。
	CANCELLED:'cancelled', // 上传取消。
	INTERRUPT:'interrupt', // 上传中断，可续传。
	INVALID:'invalid' // 文件不合格，不能重试上传。
	};return WUFile;}); /**
	     * @fileOverview 文件队列
	     */define('queue',['base','mediator','file'],function(Base,Mediator,WUFile){var $=Base.$,STATUS=WUFile.Status; /**
	         * 文件队列, 用来存储各个状态中的文件。
	         * @class Queue
	         * @extends Mediator
	         */function Queue(){ /**
	             * 统计文件数。
	             * * `numOfQueue` 队列中的文件数。
	             * * `numOfSuccess` 上传成功的文件数
	             * * `numOfCancel` 被取消的文件数
	             * * `numOfProgress` 正在上传中的文件数
	             * * `numOfUploadFailed` 上传错误的文件数。
	             * * `numOfInvalid` 无效的文件数。
	             * * `numofDeleted` 被移除的文件数。
	             * @property {Object} stats
	             */this.stats = {numOfQueue:0,numOfSuccess:0,numOfCancel:0,numOfProgress:0,numOfUploadFailed:0,numOfInvalid:0,numofDeleted:0,numofInterrupt:0}; // 上传队列，仅包括等待上传的文件
	this._queue = []; // 存储所有文件
	this._map = {};}$.extend(Queue.prototype,{ /**
	             * 将新文件加入对队列尾部
	             *
	             * @method append
	             * @param  {File} file   文件对象
	             */append:function append(file){this._queue.push(file);this._fileAdded(file);return this;}, /**
	             * 将新文件加入对队列头部
	             *
	             * @method prepend
	             * @param  {File} file   文件对象
	             */prepend:function prepend(file){this._queue.unshift(file);this._fileAdded(file);return this;}, /**
	             * 获取文件对象
	             *
	             * @method getFile
	             * @param  {String} fileId   文件ID
	             * @return {File}
	             */getFile:function getFile(fileId){if(typeof fileId !== 'string'){return fileId;}return this._map[fileId];}, /**
	             * 从队列中取出一个指定状态的文件。
	             * @grammar fetch( status ) => File
	             * @method fetch
	             * @param {String} status [文件状态值](#WebUploader:File:File.Status)
	             * @return {File} [File](#WebUploader:File)
	             */fetch:function fetch(status){var len=this._queue.length,i,file;status = status || STATUS.QUEUED;for(i = 0;i < len;i++) {file = this._queue[i];if(status === file.getStatus()){return file;}}return null;}, /**
	             * 对队列进行排序，能够控制文件上传顺序。
	             * @grammar sort( fn ) => undefined
	             * @method sort
	             * @param {Function} fn 排序方法
	             */sort:function sort(fn){if(typeof fn === 'function'){this._queue.sort(fn);}}, /**
	             * 获取指定类型的文件列表, 列表中每一个成员为[File](#WebUploader:File)对象。
	             * @grammar getFiles( [status1[, status2 ...]] ) => Array
	             * @method getFiles
	             * @param {String} [status] [文件状态值](#WebUploader:File:File.Status)
	             */getFiles:function getFiles(){var sts=[].slice.call(arguments,0),ret=[],i=0,len=this._queue.length,file;for(;i < len;i++) {file = this._queue[i];if(sts.length && ! ~$.inArray(file.getStatus(),sts)){continue;}ret.push(file);}return ret;}, /**
	             * 在队列中删除文件。
	             * @grammar removeFile( file ) => Array
	             * @method removeFile
	             * @param {File} 文件对象。
	             */removeFile:function removeFile(file){var me=this,existing=this._map[file.id];if(existing){delete this._map[file.id];file.destroy();this.stats.numofDeleted++;}},_fileAdded:function _fileAdded(file){var me=this,existing=this._map[file.id];if(!existing){this._map[file.id] = file;file.on('statuschange',function(cur,pre){me._onFileStatusChange(cur,pre);});}},_onFileStatusChange:function _onFileStatusChange(curStatus,preStatus){var stats=this.stats;switch(preStatus){case STATUS.PROGRESS:stats.numOfProgress--;break;case STATUS.QUEUED:stats.numOfQueue--;break;case STATUS.ERROR:stats.numOfUploadFailed--;break;case STATUS.INVALID:stats.numOfInvalid--;break;case STATUS.INTERRUPT:stats.numofInterrupt--;break;}switch(curStatus){case STATUS.QUEUED:stats.numOfQueue++;break;case STATUS.PROGRESS:stats.numOfProgress++;break;case STATUS.ERROR:stats.numOfUploadFailed++;break;case STATUS.COMPLETE:stats.numOfSuccess++;break;case STATUS.CANCELLED:stats.numOfCancel++;break;case STATUS.INVALID:stats.numOfInvalid++;break;case STATUS.INTERRUPT:stats.numofInterrupt++;break;}}});Mediator.installTo(Queue.prototype);return Queue;}); /**
	     * @fileOverview 队列
	     */define('widgets/queue',['base','uploader','queue','file','lib/file','runtime/client','widgets/widget'],function(Base,Uploader,Queue,WUFile,File,RuntimeClient){var $=Base.$,rExt=/\.\w+$/,Status=WUFile.Status;return Uploader.register({name:'queue',init:function init(opts){var me=this,deferred,len,i,item,arr,accept,runtime;if($.isPlainObject(opts.accept)){opts.accept = [opts.accept];} // accept中的中生成匹配正则。
	if(opts.accept){arr = [];for(i = 0,len = opts.accept.length;i < len;i++) {item = opts.accept[i].extensions;item && arr.push(item);}if(arr.length){accept = '\\.' + arr.join(',').replace(/,/g,'$|\\.').replace(/\*/g,'.*') + '$';}me.accept = new RegExp(accept,'i');}me.queue = new Queue();me.stats = me.queue.stats; // 如果当前不是html5运行时，那就算了。
	// 不执行后续操作
	if(this.request('predict-runtime-type') !== 'html5'){return;} // 创建一个 html5 运行时的 placeholder
	// 以至于外部添加原生 File 对象的时候能正确包裹一下供 webuploader 使用。
	deferred = Base.Deferred();this.placeholder = runtime = new RuntimeClient('Placeholder');runtime.connectRuntime({runtimeOrder:'html5'},function(){me._ruid = runtime.getRuid();deferred.resolve();});return deferred.promise();}, // 为了支持外部直接添加一个原生File对象。
	_wrapFile:function _wrapFile(file){if(!_instanceof(file,WUFile)){if(!_instanceof(file,File)){if(!this._ruid){throw new Error('Can\'t add external files.');}file = new File(this._ruid,file);}file = new WUFile(file);}return file;}, // 判断文件是否可以被加入队列
	acceptFile:function acceptFile(file){var invalid=!file || !file.size || this.accept &&  // 如果名字中有后缀，才做后缀白名单处理。
	rExt.exec(file.name) && !this.accept.test(file.name);return !invalid;}, /**
	             * @event beforeFileQueued
	             * @param {File} file File对象
	             * @description 当文件被加入队列之前触发，此事件的handler返回值为`false`，则此文件不会被添加进入队列。
	             * @for  Uploader
	             */ /**
	             * @event fileQueued
	             * @param {File} file File对象
	             * @description 当文件被加入队列以后触发。
	             * @for  Uploader
	             */_addFile:function _addFile(file){var me=this;file = me._wrapFile(file); // 不过类型判断允许不允许，先派送 `beforeFileQueued`
	if(!me.owner.trigger('beforeFileQueued',file)){return;} // 类型不匹配，则派送错误事件，并返回。
	if(!me.acceptFile(file)){me.owner.trigger('error','Q_TYPE_DENIED',file);return;}me.queue.append(file);me.owner.trigger('fileQueued',file);return file;},getFile:function getFile(fileId){return this.queue.getFile(fileId);}, /**
	             * @event filesQueued
	             * @param {File} files 数组，内容为原始File(lib/File）对象。
	             * @description 当一批文件添加进队列以后触发。
	             * @for  Uploader
	             */ /**
	             * @property {Boolean} [auto=false]
	             * @namespace options
	             * @for Uploader
	             * @description 设置为 true 后，不需要手动调用上传，有文件选择即开始上传。
	             * 
	             */ /**
	             * @method addFiles
	             * @grammar addFiles( file ) => undefined
	             * @grammar addFiles( [file1, file2 ...] ) => undefined
	             * @param {Array of File or File} [files] Files 对象 数组
	             * @description 添加文件到队列
	             * @for  Uploader
	             */addFile:function addFile(files){var me=this;if(!files.length){files = [files];}files = $.map(files,function(file){return me._addFile(file);});me.owner.trigger('filesQueued',files);if(me.options.auto){setTimeout(function(){me.request('start-upload');},20);}},getStats:function getStats(){return this.stats;}, /**
	             * @event fileDequeued
	             * @param {File} file File对象
	             * @description 当文件被移除队列后触发。
	             * @for  Uploader
	             */ /**
	             * @method removeFile
	             * @grammar removeFile( file ) => undefined
	             * @grammar removeFile( id ) => undefined
	             * @grammar removeFile( file, true ) => undefined
	             * @grammar removeFile( id, true ) => undefined
	             * @param {File|id} file File对象或这File对象的id
	             * @description 移除某一文件, 默认只会标记文件状态为已取消，如果第二个参数为 `true` 则会从 queue 中移除。
	             * @for  Uploader
	             * @example
	             *
	             * $li.on('click', '.remove-this', function() {
	             *     uploader.removeFile( file );
	             * })
	             */removeFile:function removeFile(file,remove){var me=this;file = file.id?file:me.queue.getFile(file);this.request('cancel-file',file);if(remove){this.queue.removeFile(file);}}, /**
	             * @method getFiles
	             * @grammar getFiles() => Array
	             * @grammar getFiles( status1, status2, status... ) => Array
	             * @description 返回指定状态的文件集合，不传参数将返回所有状态的文件。
	             * @for  Uploader
	             * @example
	             * console.log( uploader.getFiles() );    // => all files
	             * console.log( uploader.getFiles('error') )    // => all error files.
	             */getFiles:function getFiles(){return this.queue.getFiles.apply(this.queue,arguments);},fetchFile:function fetchFile(){return this.queue.fetch.apply(this.queue,arguments);}, /**
	             * @method retry
	             * @grammar retry() => undefined
	             * @grammar retry( file ) => undefined
	             * @description 重试上传，重试指定文件，或者从出错的文件开始重新上传。
	             * @for  Uploader
	             * @example
	             * function retry() {
	             *     uploader.retry();
	             * }
	             */retry:function retry(file,noForceStart){var me=this,files,i,len;if(file){file = file.id?file:me.queue.getFile(file);file.setStatus(Status.QUEUED);noForceStart || me.request('start-upload');return;}files = me.queue.getFiles(Status.ERROR);i = 0;len = files.length;for(;i < len;i++) {file = files[i];file.setStatus(Status.QUEUED);}me.request('start-upload');}, /**
	             * @method sort
	             * @grammar sort( fn ) => undefined
	             * @description 排序队列中的文件，在上传之前调整可以控制上传顺序。
	             * @for  Uploader
	             */sortFiles:function sortFiles(){return this.queue.sort.apply(this.queue,arguments);}, /**
	             * @event reset
	             * @description 当 uploader 被重置的时候触发。
	             * @for  Uploader
	             */ /**
	             * @method reset
	             * @grammar reset() => undefined
	             * @description 重置uploader。目前只重置了队列。
	             * @for  Uploader
	             * @example
	             * uploader.reset();
	             */reset:function reset(){this.owner.trigger('reset');this.queue = new Queue();this.stats = this.queue.stats;},destroy:function destroy(){this.reset();this.placeholder && this.placeholder.destroy();}});}); /**
	     * @fileOverview 添加获取Runtime相关信息的方法。
	     */define('widgets/runtime',['uploader','runtime/runtime','widgets/widget'],function(Uploader,Runtime){Uploader.support = function(){return Runtime.hasRuntime.apply(Runtime,arguments);}; /**
	         * @property {Object} [runtimeOrder=html5,flash]
	         * @namespace options
	         * @for Uploader
	         * @description 指定运行时启动顺序。默认会想尝试 html5 是否支持，如果支持则使用 html5, 否则则使用 flash.
	         *
	         * 可以将此值设置成 `flash`，来强制使用 flash 运行时。
	         */return Uploader.register({name:'runtime',init:function init(){if(!this.predictRuntimeType()){throw Error('Runtime Error');}}, /**
	             * 预测Uploader将采用哪个`Runtime`
	             * @grammar predictRuntimeType() => String
	             * @method predictRuntimeType
	             * @for  Uploader
	             */predictRuntimeType:function predictRuntimeType(){var orders=this.options.runtimeOrder || Runtime.orders,type=this.type,i,len;if(!type){orders = orders.split(/\s*,\s*/g);for(i = 0,len = orders.length;i < len;i++) {if(Runtime.hasRuntime(orders[i])){this.type = type = orders[i];break;}}}return type;}});}); /**
	     * @fileOverview Transport
	     */define('lib/transport',['base','runtime/client','mediator'],function(Base,RuntimeClient,Mediator){var $=Base.$;function Transport(opts){var me=this;opts = me.options = $.extend(true,{},Transport.options,opts || {});RuntimeClient.call(this,'Transport');this._blob = null;this._formData = opts.formData || {};this._headers = opts.headers || {};this.on('progress',this._timeout);this.on('load error',function(){me.trigger('progress',1);clearTimeout(me._timer);});}Transport.options = {server:'',method:'POST', // 跨域时，是否允许携带cookie, 只有html5 runtime才有效
	withCredentials:false,fileVal:'file',timeout:2 * 60 * 1000, // 2分钟
	formData:{},headers:{},sendAsBinary:false};$.extend(Transport.prototype,{ // 添加Blob, 只能添加一次，最后一次有效。
	appendBlob:function appendBlob(key,blob,filename){var me=this,opts=me.options;if(me.getRuid()){me.disconnectRuntime();} // 连接到blob归属的同一个runtime.
	me.connectRuntime(blob.ruid,function(){me.exec('init');});me._blob = blob;opts.fileVal = key || opts.fileVal;opts.filename = filename || opts.filename;}, // 添加其他字段
	append:function append(key,value){if((typeof key === 'undefined'?'undefined':_typeof(key)) === 'object'){$.extend(this._formData,key);}else {this._formData[key] = value;}},setRequestHeader:function setRequestHeader(key,value){if((typeof key === 'undefined'?'undefined':_typeof(key)) === 'object'){$.extend(this._headers,key);}else {this._headers[key] = value;}},send:function send(method){this.exec('send',method);this._timeout();},abort:function abort(){clearTimeout(this._timer);return this.exec('abort');},destroy:function destroy(){this.trigger('destroy');this.off();this.exec('destroy');this.disconnectRuntime();},getResponse:function getResponse(){return this.exec('getResponse');},getResponseAsJson:function getResponseAsJson(){return this.exec('getResponseAsJson');},getStatus:function getStatus(){return this.exec('getStatus');},_timeout:function _timeout(){var me=this,duration=me.options.timeout;if(!duration){return;}clearTimeout(me._timer);me._timer = setTimeout(function(){me.abort();me.trigger('error','timeout');},duration);}}); // 让Transport具备事件功能。
	Mediator.installTo(Transport.prototype);return Transport;}); /**
	     * @fileOverview 负责文件上传相关。
	     */define('widgets/upload',['base','uploader','file','lib/transport','widgets/widget'],function(Base,Uploader,WUFile,Transport){var $=Base.$,isPromise=Base.isPromise,Status=WUFile.Status; // 添加默认配置项
	$.extend(Uploader.options,{ /**
	             * @property {Boolean} [prepareNextFile=false]
	             * @namespace options
	             * @for Uploader
	             * @description 是否允许在文件传输时提前把下一个文件准备好。
	             * 对于一个文件的准备工作比较耗时，比如图片压缩，md5序列化。
	             * 如果能提前在当前文件传输期处理，可以节省总体耗时。
	             */prepareNextFile:false, /**
	             * @property {Boolean} [chunked=false]
	             * @namespace options
	             * @for Uploader
	             * @description 是否要分片处理大文件上传。
	             */chunked:false, /**
	             * @property {Boolean} [chunkSize=5242880]
	             * @namespace options
	             * @for Uploader
	             * @description 如果要分片，分多大一片？ 默认大小为5M.
	             */chunkSize:5 * 1024 * 1024, /**
	             * @property {Boolean} [chunkRetry=2]
	             * @namespace options
	             * @for Uploader
	             * @description 如果某个分片由于网络问题出错，允许自动重传多少次？
	             */chunkRetry:2, /**
	             * @property {Boolean} [threads=3]
	             * @namespace options
	             * @for Uploader
	             * @description 上传并发数。允许同时最大上传进程数。
	             */threads:3, /**
	             * @property {Object} [formData={}]
	             * @namespace options
	             * @for Uploader
	             * @description 文件上传请求的参数表，每次发送都会发送此对象中的参数。
	             */formData:{} /**
	             * @property {Object} [fileVal='file']
	             * @namespace options
	             * @for Uploader
	             * @description 设置文件上传域的name。
	             */ /**
	             * @property {Object} [method='POST']
	             * @namespace options
	             * @for Uploader
	             * @description 文件上传方式，`POST`或者`GET`。
	             */ /**
	             * @property {Object} [sendAsBinary=false]
	             * @namespace options
	             * @for Uploader
	             * @description 是否已二进制的流的方式发送文件，这样整个上传内容`php://input`都为文件内容，
	             * 其他参数在$_GET数组中。
	             */}); // 负责将文件切片。
	function CuteFile(file,chunkSize){var pending=[],blob=file.source,total=blob.size,chunks=chunkSize?Math.ceil(total / chunkSize):1,start=0,index=0,len,api;api = {file:file,has:function has(){return !!pending.length;},shift:function shift(){return pending.shift();},unshift:function unshift(block){pending.unshift(block);}};while(index < chunks) {len = Math.min(chunkSize,total - start);pending.push({file:file,start:start,end:chunkSize?start + len:total,total:total,chunks:chunks,chunk:index++,cuted:api});start += len;}file.blocks = pending.concat();file.remaning = pending.length;return api;}Uploader.register({name:'upload',init:function init(){var owner=this.owner,me=this;this.runing = false;this.progress = false;owner.on('startUpload',function(){me.progress = true;}).on('uploadFinished',function(){me.progress = false;}); // 记录当前正在传的数据，跟threads相关
	this.pool = []; // 缓存分好片的文件。
	this.stack = []; // 缓存即将上传的文件。
	this.pending = []; // 跟踪还有多少分片在上传中但是没有完成上传。
	this.remaning = 0;this.__tick = Base.bindFn(this._tick,this);owner.on('uploadComplete',function(file){ // 把其他块取消了。
	file.blocks && $.each(file.blocks,function(_,v){v.transport && (v.transport.abort(),v.transport.destroy());delete v.transport;});delete file.blocks;delete file.remaning;});},reset:function reset(){this.request('stop-upload',true);this.runing = false;this.pool = [];this.stack = [];this.pending = [];this.remaning = 0;this._trigged = false;this._promise = null;}, /**
	             * @event startUpload
	             * @description 当开始上传流程时触发。
	             * @for  Uploader
	             */ /**
	             * 开始上传。此方法可以从初始状态调用开始上传流程，也可以从暂停状态调用，继续上传流程。
	             *
	             * 可以指定开始某一个文件。
	             * @grammar upload() => undefined
	             * @grammar upload( file | fileId) => undefined
	             * @method upload
	             * @for  Uploader
	             */startUpload:function startUpload(file){var me=this; // 移出invalid的文件
	$.each(me.request('get-files',Status.INVALID),function(){me.request('remove-file',this);}); // 如果指定了开始某个文件，则只开始指定文件。
	if(file){file = file.id?file:me.request('get-file',file);if(file.getStatus() === Status.INTERRUPT){$.each(me.pool,function(_,v){ // 之前暂停过。
	if(v.file !== file){return;}v.transport && v.transport.send();});file.setStatus(Status.QUEUED);}else if(file.getStatus() === Status.PROGRESS){return;}else {file.setStatus(Status.QUEUED);}}else {$.each(me.request('get-files',[Status.INITED]),function(){this.setStatus(Status.QUEUED);});}if(me.runing){return;}me.runing = true;var files=[]; // 如果有暂停的，则续传
	$.each(me.pool,function(_,v){var file=v.file;if(file.getStatus() === Status.INTERRUPT){files.push(file);me._trigged = false;v.transport && v.transport.send();}});var file;while(file = files.shift()) {file.setStatus(Status.PROGRESS);}file || $.each(me.request('get-files',Status.INTERRUPT),function(){this.setStatus(Status.PROGRESS);});me._trigged = false;Base.nextTick(me.__tick);me.owner.trigger('startUpload');}, /**
	             * @event stopUpload
	             * @description 当开始上传流程暂停时触发。
	             * @for  Uploader
	             */ /**
	             * 暂停上传。第一个参数为是否中断上传当前正在上传的文件。
	             *
	             * 如果第一个参数是文件，则只暂停指定文件。
	             * @grammar stop() => undefined
	             * @grammar stop( true ) => undefined
	             * @grammar stop( file ) => undefined
	             * @method stop
	             * @for  Uploader
	             */stopUpload:function stopUpload(file,interrupt){var me=this;if(file === true){interrupt = file;file = null;}if(me.runing === false){return;} // 如果只是暂停某个文件。
	if(file){file = file.id?file:me.request('get-file',file);if(file.getStatus() !== Status.PROGRESS && file.getStatus() !== Status.QUEUED){return;}file.setStatus(Status.INTERRUPT);$.each(me.pool,function(_,v){ // 只 abort 指定的文件。
	if(v.file !== file){return;}v.transport && v.transport.abort();me._putback(v);me._popBlock(v);});return Base.nextTick(me.__tick);}me.runing = false;if(this._promise && this._promise.file){this._promise.file.setStatus(Status.INTERRUPT);}interrupt && $.each(me.pool,function(_,v){v.transport && v.transport.abort();v.file.setStatus(Status.INTERRUPT);});me.owner.trigger('stopUpload');}, /**
	             * @method cancelFile
	             * @grammar cancelFile( file ) => undefined
	             * @grammar cancelFile( id ) => undefined
	             * @param {File|id} file File对象或这File对象的id
	             * @description 标记文件状态为已取消, 同时将中断文件传输。
	             * @for  Uploader
	             * @example
	             *
	             * $li.on('click', '.remove-this', function() {
	             *     uploader.cancelFile( file );
	             * })
	             */cancelFile:function cancelFile(file){file = file.id?file:this.request('get-file',file); // 如果正在上传。
	file.blocks && $.each(file.blocks,function(_,v){var _tr=v.transport;if(_tr){_tr.abort();_tr.destroy();delete v.transport;}});file.setStatus(Status.CANCELLED);this.owner.trigger('fileDequeued',file);}, /**
	             * 判断`Uplaode`r是否正在上传中。
	             * @grammar isInProgress() => Boolean
	             * @method isInProgress
	             * @for  Uploader
	             */isInProgress:function isInProgress(){return !!this.progress;},_getStats:function _getStats(){return this.request('get-stats');}, /**
	             * 掉过一个文件上传，直接标记指定文件为已上传状态。
	             * @grammar skipFile( file ) => undefined
	             * @method skipFile
	             * @for  Uploader
	             */skipFile:function skipFile(file,status){file = file.id?file:this.request('get-file',file);file.setStatus(status || Status.COMPLETE);file.skipped = true; // 如果正在上传。
	file.blocks && $.each(file.blocks,function(_,v){var _tr=v.transport;if(_tr){_tr.abort();_tr.destroy();delete v.transport;}});this.owner.trigger('uploadSkip',file);}, /**
	             * @event uploadFinished
	             * @description 当所有文件上传结束时触发。
	             * @for  Uploader
	             */_tick:function _tick(){var me=this,opts=me.options,fn,val; // 上一个promise还没有结束，则等待完成后再执行。
	if(me._promise){return me._promise.always(me.__tick);} // 还有位置，且还有文件要处理的话。
	if(me.pool.length < opts.threads && (val = me._nextBlock())){me._trigged = false;fn = function(val){me._promise = null; // 有可能是reject过来的，所以要检测val的类型。
	val && val.file && me._startSend(val);Base.nextTick(me.__tick);};me._promise = isPromise(val)?val.always(fn):fn(val); // 没有要上传的了，且没有正在传输的了。
	}else if(!me.remaning && !me._getStats().numOfQueue && !me._getStats().numofInterrupt){me.runing = false;me._trigged || Base.nextTick(function(){me.owner.trigger('uploadFinished');});me._trigged = true;}},_putback:function _putback(block){var idx;block.cuted.unshift(block);idx = this.stack.indexOf(block.cuted);if(! ~idx){this.stack.unshift(block.cuted);}},_getStack:function _getStack(){var i=0,act;while(act = this.stack[i++]) {if(act.has() && act.file.getStatus() === Status.PROGRESS){return act;}else if(!act.has() || act.file.getStatus() !== Status.PROGRESS && act.file.getStatus() !== Status.INTERRUPT){ // 把已经处理完了的，或者，状态为非 progress（上传中）、
	// interupt（暂停中） 的移除。
	this.stack.splice(--i,1);}}return null;},_nextBlock:function _nextBlock(){var me=this,opts=me.options,act,next,done,preparing; // 如果当前文件还有没有需要传输的，则直接返回剩下的。
	if(act = this._getStack()){ // 是否提前准备下一个文件
	if(opts.prepareNextFile && !me.pending.length){me._prepareNextFile();}return act.shift(); // 否则，如果正在运行，则准备下一个文件，并等待完成后返回下个分片。
	}else if(me.runing){ // 如果缓存中有，则直接在缓存中取，没有则去queue中取。
	if(!me.pending.length && me._getStats().numOfQueue){me._prepareNextFile();}next = me.pending.shift();done = function(file){if(!file){return null;}act = CuteFile(file,opts.chunked?opts.chunkSize:0);me.stack.push(act);return act.shift();}; // 文件可能还在prepare中，也有可能已经完全准备好了。
	if(isPromise(next)){preparing = next.file;next = next[next.pipe?'pipe':'then'](done);next.file = preparing;return next;}return done(next);}}, /**
	             * @event uploadStart
	             * @param {File} file File对象
	             * @description 某个文件开始上传前触发，一个文件只会触发一次。
	             * @for  Uploader
	             */_prepareNextFile:function _prepareNextFile(){var me=this,file=me.request('fetch-file'),pending=me.pending,promise;if(file){promise = me.request('before-send-file',file,function(){ // 有可能文件被skip掉了。文件被skip掉后，状态坑定不是Queued.
	if(file.getStatus() === Status.PROGRESS || file.getStatus() === Status.INTERRUPT){return file;}return me._finishFile(file);});me.owner.trigger('uploadStart',file);file.setStatus(Status.PROGRESS);promise.file = file; // 如果还在pending中，则替换成文件本身。
	promise.done(function(){var idx=$.inArray(promise,pending);~idx && pending.splice(idx,1,file);}); // befeore-send-file的钩子就有错误发生。
	promise.fail(function(reason){file.setStatus(Status.ERROR,reason);me.owner.trigger('uploadError',file,reason);me.owner.trigger('uploadComplete',file);});pending.push(promise);}}, // 让出位置了，可以让其他分片开始上传
	_popBlock:function _popBlock(block){var idx=$.inArray(block,this.pool);this.pool.splice(idx,1);block.file.remaning--;this.remaning--;}, // 开始上传，可以被掉过。如果promise被reject了，则表示跳过此分片。
	_startSend:function _startSend(block){var me=this,file=block.file,promise; // 有可能在 before-send-file 的 promise 期间改变了文件状态。
	// 如：暂停，取消
	// 我们不能中断 promise, 但是可以在 promise 完后，不做上传操作。
	if(file.getStatus() !== Status.PROGRESS){ // 如果是中断，则还需要放回去。
	if(file.getStatus() === Status.INTERRUPT){me._putback(block);}return;}me.pool.push(block);me.remaning++; // 如果没有分片，则直接使用原始的。
	// 不会丢失content-type信息。
	block.blob = block.chunks === 1?file.source:file.source.slice(block.start,block.end); // hook, 每个分片发送之前可能要做些异步的事情。
	promise = me.request('before-send',block,function(){ // 有可能文件已经上传出错了，所以不需要再传输了。
	if(file.getStatus() === Status.PROGRESS){me._doSend(block);}else {me._popBlock(block);Base.nextTick(me.__tick);}}); // 如果为fail了，则跳过此分片。
	promise.fail(function(){if(file.remaning === 1){me._finishFile(file).always(function(){block.percentage = 1;me._popBlock(block);me.owner.trigger('uploadComplete',file);Base.nextTick(me.__tick);});}else {block.percentage = 1;me.updateFileProgress(file);me._popBlock(block);Base.nextTick(me.__tick);}});}, /**
	             * @event uploadBeforeSend
	             * @param {Object} object
	             * @param {Object} data 默认的上传参数，可以扩展此对象来控制上传参数。
	             * @param {Object} headers 可以扩展此对象来控制上传头部。
	             * @description 当某个文件的分块在发送前触发，主要用来询问是否要添加附带参数，大文件在开起分片上传的前提下此事件可能会触发多次。
	             * @for  Uploader
	             */ /**
	             * @event uploadAccept
	             * @param {Object} object
	             * @param {Object} ret 服务端的返回数据，json格式，如果服务端不是json格式，从ret._raw中取数据，自行解析。
	             * @description 当某个文件上传到服务端响应后，会派送此事件来询问服务端响应是否有效。如果此事件handler返回值为`false`, 则此文件将派送`server`类型的`uploadError`事件。
	             * @for  Uploader
	             */ /**
	             * @event uploadProgress
	             * @param {File} file File对象
	             * @param {Number} percentage 上传进度
	             * @description 上传过程中触发，携带上传进度。
	             * @for  Uploader
	             */ /**
	             * @event uploadError
	             * @param {File} file File对象
	             * @param {String} reason 出错的code
	             * @description 当文件上传出错时触发。
	             * @for  Uploader
	             */ /**
	             * @event uploadSuccess
	             * @param {File} file File对象
	             * @param {Object} response 服务端返回的数据
	             * @description 当文件上传成功时触发。
	             * @for  Uploader
	             */ /**
	             * @event uploadComplete
	             * @param {File} [file] File对象
	             * @description 不管成功或者失败，文件上传完成时触发。
	             * @for  Uploader
	             */ // 做上传操作。
	_doSend:function _doSend(block){var me=this,owner=me.owner,opts=me.options,file=block.file,tr=new Transport(opts),data=$.extend({},opts.formData),headers=$.extend({},opts.headers),requestAccept,ret;block.transport = tr;tr.on('destroy',function(){delete block.transport;me._popBlock(block);Base.nextTick(me.__tick);}); // 广播上传进度。以文件为单位。
	tr.on('progress',function(percentage){block.percentage = percentage;me.updateFileProgress(file);}); // 用来询问，是否返回的结果是有错误的。
	requestAccept = function(reject){var fn;ret = tr.getResponseAsJson() || {};ret._raw = tr.getResponse();fn = function(value){reject = value;}; // 服务端响应了，不代表成功了，询问是否响应正确。
	if(!owner.trigger('uploadAccept',block,ret,fn)){reject = reject || 'server';}return reject;}; // 尝试重试，然后广播文件上传出错。
	tr.on('error',function(type,flag){block.retried = block.retried || 0; // 自动重试
	if(block.chunks > 1 && ~'http,abort'.indexOf(type) && block.retried < opts.chunkRetry){block.retried++;tr.send();}else { // http status 500 ~ 600
	if(!flag && type === 'server'){type = requestAccept(type);}file.setStatus(Status.ERROR,type);owner.trigger('uploadError',file,type);owner.trigger('uploadComplete',file);}}); // 上传成功
	tr.on('load',function(){var reason; // 如果非预期，转向上传出错。
	if(reason = requestAccept()){tr.trigger('error',reason,true);return;} // 全部上传完成。
	if(file.remaning === 1){me._finishFile(file,ret);}else {tr.destroy();}}); // 配置默认的上传字段。
	data = $.extend(data,{id:file.id,name:file.name,type:file.type,lastModifiedDate:file.lastModifiedDate,size:file.size});block.chunks > 1 && $.extend(data,{chunks:block.chunks,chunk:block.chunk}); // 在发送之间可以添加字段什么的。。。
	// 如果默认的字段不够使用，可以通过监听此事件来扩展
	owner.trigger('uploadBeforeSend',block,data,headers); // 开始发送。
	tr.appendBlob(opts.fileVal,block.blob,file.name);tr.append(data);tr.setRequestHeader(headers);tr.send();}, // 完成上传。
	_finishFile:function _finishFile(file,ret,hds){var owner=this.owner;return owner.request('after-send-file',arguments,function(){file.setStatus(Status.COMPLETE);owner.trigger('uploadSuccess',file,ret,hds);}).fail(function(reason){ // 如果外部已经标记为invalid什么的，不再改状态。
	if(file.getStatus() === Status.PROGRESS){file.setStatus(Status.ERROR,reason);}owner.trigger('uploadError',file,reason);}).always(function(){owner.trigger('uploadComplete',file);});},updateFileProgress:function updateFileProgress(file){var totalPercent=0,uploaded=0;if(!file.blocks){return;}$.each(file.blocks,function(_,v){uploaded += (v.percentage || 0) * (v.end - v.start);});totalPercent = uploaded / file.size;this.owner.trigger('uploadProgress',file,totalPercent || 0);}});}); /**
	     * @fileOverview 各种验证，包括文件总大小是否超出、单文件是否超出和文件是否重复。
	     */define('widgets/validator',['base','uploader','file','widgets/widget'],function(Base,Uploader,WUFile){var $=Base.$,validators={},api; /**
	         * @event error
	         * @param {String} type 错误类型。
	         * @description 当validate不通过时，会以派送错误事件的形式通知调用者。通过`upload.on('error', handler)`可以捕获到此类错误，目前有以下错误会在特定的情况下派送错来。
	         *
	         * * `Q_EXCEED_NUM_LIMIT` 在设置了`fileNumLimit`且尝试给`uploader`添加的文件数量超出这个值时派送。
	         * * `Q_EXCEED_SIZE_LIMIT` 在设置了`Q_EXCEED_SIZE_LIMIT`且尝试给`uploader`添加的文件总大小超出这个值时派送。
	         * * `Q_TYPE_DENIED` 当文件类型不满足时触发。。
	         * @for  Uploader
	         */ // 暴露给外面的api
	api = { // 添加验证器
	addValidator:function addValidator(type,cb){validators[type] = cb;}, // 移除验证器
	removeValidator:function removeValidator(type){delete validators[type];}}; // 在Uploader初始化的时候启动Validators的初始化
	Uploader.register({name:'validator',init:function init(){var me=this;Base.nextTick(function(){$.each(validators,function(){this.call(me.owner);});});}}); /**
	         * @property {int} [fileNumLimit=undefined]
	         * @namespace options
	         * @for Uploader
	         * @description 验证文件总数量, 超出则不允许加入队列。
	         */api.addValidator('fileNumLimit',function(){var uploader=this,opts=uploader.options,count=0,max=parseInt(opts.fileNumLimit,10),flag=true;if(!max){return;}uploader.on('beforeFileQueued',function(file){if(count >= max && flag){flag = false;this.trigger('error','Q_EXCEED_NUM_LIMIT',max,file);setTimeout(function(){flag = true;},1);}return count >= max?false:true;});uploader.on('fileQueued',function(){count++;});uploader.on('fileDequeued',function(){count--;});uploader.on('reset',function(){count = 0;});}); /**
	         * @property {int} [fileSizeLimit=undefined]
	         * @namespace options
	         * @for Uploader
	         * @description 验证文件总大小是否超出限制, 超出则不允许加入队列。
	         */api.addValidator('fileSizeLimit',function(){var uploader=this,opts=uploader.options,count=0,max=parseInt(opts.fileSizeLimit,10),flag=true;if(!max){return;}uploader.on('beforeFileQueued',function(file){var invalid=count + file.size > max;if(invalid && flag){flag = false;this.trigger('error','Q_EXCEED_SIZE_LIMIT',max,file);setTimeout(function(){flag = true;},1);}return invalid?false:true;});uploader.on('fileQueued',function(file){count += file.size;});uploader.on('fileDequeued',function(file){count -= file.size;});uploader.on('reset',function(){count = 0;});}); /**
	         * @property {int} [fileSingleSizeLimit=undefined]
	         * @namespace options
	         * @for Uploader
	         * @description 验证单个文件大小是否超出限制, 超出则不允许加入队列。
	         */api.addValidator('fileSingleSizeLimit',function(){var uploader=this,opts=uploader.options,max=opts.fileSingleSizeLimit;if(!max){return;}uploader.on('beforeFileQueued',function(file){if(file.size > max){file.setStatus(WUFile.Status.INVALID,'exceed_size');this.trigger('error','F_EXCEED_SIZE',max,file);return false;}});}); /**
	         * @property {Boolean} [duplicate=undefined]
	         * @namespace options
	         * @for Uploader
	         * @description 去重， 根据文件名字、文件大小和最后修改时间来生成hash Key.
	         */api.addValidator('duplicate',function(){var uploader=this,opts=uploader.options,mapping={};if(opts.duplicate){return;}function hashString(str){var hash=0,i=0,len=str.length,_char;for(;i < len;i++) {_char = str.charCodeAt(i);hash = _char + (hash << 6) + (hash << 16) - hash;}return hash;}uploader.on('beforeFileQueued',function(file){var hash=file.__hash || (file.__hash = hashString(file.name + file.size + file.lastModifiedDate)); // 已经重复了
	if(mapping[hash]){this.trigger('error','F_DUPLICATE',file);return false;}});uploader.on('fileQueued',function(file){var hash=file.__hash;hash && (mapping[hash] = true);});uploader.on('fileDequeued',function(file){var hash=file.__hash;hash && delete mapping[hash];});uploader.on('reset',function(){mapping = {};});});return api;}); /**
	     * @fileOverview Runtime管理器，负责Runtime的选择, 连接
	     */define('runtime/compbase',[],function(){function CompBase(owner,runtime){this.owner = owner;this.options = owner.options;this.getRuntime = function(){return runtime;};this.getRuid = function(){return runtime.uid;};this.trigger = function(){return owner.trigger.apply(owner,arguments);};}return CompBase;}); /**
	     * @fileOverview Html5Runtime
	     */define('runtime/html5/runtime',['base','runtime/runtime','runtime/compbase'],function(Base,Runtime,CompBase){var type='html5',components={};function Html5Runtime(){var pool={},me=this,destroy=this.destroy;Runtime.apply(me,arguments);me.type = type; // 这个方法的调用者，实际上是RuntimeClient
	me.exec = function(comp,fn /*, args...*/){var client=this,uid=client.uid,args=Base.slice(arguments,2),instance;if(components[comp]){instance = pool[uid] = pool[uid] || new components[comp](client,me);if(instance[fn]){return instance[fn].apply(instance,args);}}};me.destroy = function(){ // @todo 删除池子中的所有实例
	return destroy && destroy.apply(this,arguments);};}Base.inherits(Runtime,{constructor:Html5Runtime, // 不需要连接其他程序，直接执行callback
	init:function init(){var me=this;setTimeout(function(){me.trigger('ready');},1);}}); // 注册Components
	Html5Runtime.register = function(name,component){var klass=components[name] = Base.inherits(CompBase,component);return klass;}; // 注册html5运行时。
	// 只有在支持的前提下注册。
	if(window.Blob && window.FileReader && window.DataView){Runtime.addRuntime(type,Html5Runtime);}return Html5Runtime;}); /**
	     * @fileOverview Blob Html实现
	     */define('runtime/html5/blob',['runtime/html5/runtime','lib/blob'],function(Html5Runtime,Blob){return Html5Runtime.register('Blob',{slice:function slice(start,end){var blob=this.owner.source,slice=blob.slice || blob.webkitSlice || blob.mozSlice;blob = slice.call(blob,start,end);return new Blob(this.getRuid(),blob);}});}); /**
	     * @fileOverview FilePaste
	     */define('runtime/html5/dnd',['base','runtime/html5/runtime','lib/file'],function(Base,Html5Runtime,File){var $=Base.$,prefix='webuploader-dnd-';return Html5Runtime.register('DragAndDrop',{init:function init(){var elem=this.elem = this.options.container;this.dragEnterHandler = Base.bindFn(this._dragEnterHandler,this);this.dragOverHandler = Base.bindFn(this._dragOverHandler,this);this.dragLeaveHandler = Base.bindFn(this._dragLeaveHandler,this);this.dropHandler = Base.bindFn(this._dropHandler,this);this.dndOver = false;elem.on('dragenter',this.dragEnterHandler);elem.on('dragover',this.dragOverHandler);elem.on('dragleave',this.dragLeaveHandler);elem.on('drop',this.dropHandler);if(this.options.disableGlobalDnd){$(document).on('dragover',this.dragOverHandler);$(document).on('drop',this.dropHandler);}},_dragEnterHandler:function _dragEnterHandler(e){var me=this,denied=me._denied || false,items;e = e.originalEvent || e;if(!me.dndOver){me.dndOver = true; // 注意只有 chrome 支持。
	items = e.dataTransfer.items;if(items && items.length){me._denied = denied = !me.trigger('accept',items);}me.elem.addClass(prefix + 'over');me.elem[denied?'addClass':'removeClass'](prefix + 'denied');}e.dataTransfer.dropEffect = denied?'none':'copy';return false;},_dragOverHandler:function _dragOverHandler(e){ // 只处理框内的。
	var parentElem=this.elem.parent().get(0);if(parentElem && !$.contains(parentElem,e.currentTarget)){return false;}clearTimeout(this._leaveTimer);this._dragEnterHandler.call(this,e);return false;},_dragLeaveHandler:function _dragLeaveHandler(){var me=this,handler;handler = function(){me.dndOver = false;me.elem.removeClass(prefix + 'over ' + prefix + 'denied');};clearTimeout(me._leaveTimer);me._leaveTimer = setTimeout(handler,100);return false;},_dropHandler:function _dropHandler(e){var me=this,ruid=me.getRuid(),parentElem=me.elem.parent().get(0),dataTransfer,data; // 只处理框内的。
	if(parentElem && !$.contains(parentElem,e.currentTarget)){return false;}e = e.originalEvent || e;dataTransfer = e.dataTransfer; // 如果是页面内拖拽，还不能处理，不阻止事件。
	// 此处 ie11 下会报参数错误，
	try{data = dataTransfer.getData('text/html');}catch(err) {}if(data){return;}me._getTansferFiles(dataTransfer,function(results){me.trigger('drop',$.map(results,function(file){return new File(ruid,file);}));});me.dndOver = false;me.elem.removeClass(prefix + 'over');return false;}, // 如果传入 callback 则去查看文件夹，否则只管当前文件夹。
	_getTansferFiles:function _getTansferFiles(dataTransfer,callback){var results=[],promises=[],items,files,file,item,i,len,canAccessFolder;items = dataTransfer.items;files = dataTransfer.files;canAccessFolder = !!(items && items[0].webkitGetAsEntry);for(i = 0,len = files.length;i < len;i++) {file = files[i];item = items && items[i];if(canAccessFolder && item.webkitGetAsEntry().isDirectory){promises.push(this._traverseDirectoryTree(item.webkitGetAsEntry(),results));}else {results.push(file);}}Base.when.apply(Base,promises).done(function(){if(!results.length){return;}callback(results);});},_traverseDirectoryTree:function _traverseDirectoryTree(entry,results){var deferred=Base.Deferred(),me=this;if(entry.isFile){entry.file(function(file){results.push(file);deferred.resolve();});}else if(entry.isDirectory){entry.createReader().readEntries(function(entries){var len=entries.length,promises=[],arr=[], // 为了保证顺序。
	i;for(i = 0;i < len;i++) {promises.push(me._traverseDirectoryTree(entries[i],arr));}Base.when.apply(Base,promises).then(function(){results.push.apply(results,arr);deferred.resolve();},deferred.reject);});}return deferred.promise();},destroy:function destroy(){var elem=this.elem; // 还没 init 就调用 destroy
	if(!elem){return;}elem.off('dragenter',this.dragEnterHandler);elem.off('dragover',this.dragOverHandler);elem.off('dragleave',this.dragLeaveHandler);elem.off('drop',this.dropHandler);if(this.options.disableGlobalDnd){$(document).off('dragover',this.dragOverHandler);$(document).off('drop',this.dropHandler);}}});}); /**
	     * @fileOverview FilePaste
	     */define('runtime/html5/filepaste',['base','runtime/html5/runtime','lib/file'],function(Base,Html5Runtime,File){return Html5Runtime.register('FilePaste',{init:function init(){var opts=this.options,elem=this.elem = opts.container,accept='.*',arr,i,len,item; // accetp的mimeTypes中生成匹配正则。
	if(opts.accept){arr = [];for(i = 0,len = opts.accept.length;i < len;i++) {item = opts.accept[i].mimeTypes;item && arr.push(item);}if(arr.length){accept = arr.join(',');accept = accept.replace(/,/g,'|').replace(/\*/g,'.*');}}this.accept = accept = new RegExp(accept,'i');this.hander = Base.bindFn(this._pasteHander,this);elem.on('paste',this.hander);},_pasteHander:function _pasteHander(e){var allowed=[],ruid=this.getRuid(),items,item,blob,i,len;e = e.originalEvent || e;items = e.clipboardData.items;for(i = 0,len = items.length;i < len;i++) {item = items[i];if(item.kind !== 'file' || !(blob = item.getAsFile())){continue;}allowed.push(new File(ruid,blob));}if(allowed.length){ // 不阻止非文件粘贴（文字粘贴）的事件冒泡
	e.preventDefault();e.stopPropagation();this.trigger('paste',allowed);}},destroy:function destroy(){this.elem.off('paste',this.hander);}});}); /**
	     * @fileOverview FilePicker
	     */define('runtime/html5/filepicker',['base','runtime/html5/runtime'],function(Base,Html5Runtime){var $=Base.$;return Html5Runtime.register('FilePicker',{init:function init(){var container=this.getRuntime().getContainer(),me=this,owner=me.owner,opts=me.options,label=this.label = $(document.createElement('label')),input=this.input = $(document.createElement('input')),arr,i,len,mouseHandler;input.attr('type','file');input.attr('name',opts.name);input.addClass('webuploader-element-invisible');label.on('click',function(){input.trigger('click');});label.css({opacity:0,width:'100%',height:'100%',display:'block',cursor:'pointer',background:'#ffffff'});if(opts.multiple){input.attr('multiple','multiple');} // @todo Firefox不支持单独指定后缀
	if(opts.accept && opts.accept.length > 0){arr = [];for(i = 0,len = opts.accept.length;i < len;i++) {arr.push(opts.accept[i].mimeTypes);}input.attr('accept',arr.join(','));}container.append(input);container.append(label);mouseHandler = function(e){owner.trigger(e.type);};input.on('change',function __inputChange(e){var fn=__inputChange,clone;me.files = e.target.files; // reset input
	clone = this.cloneNode(true);clone.value = null;this.parentNode.replaceChild(clone,this);input.off();input = $(clone).on('change',fn).on('mouseenter mouseleave',mouseHandler);owner.trigger('change');});label.on('mouseenter mouseleave',mouseHandler);},getFiles:function getFiles(){return this.files;},destroy:function destroy(){this.input.off();this.label.off();}});}); /**
	     * Terms:
	     *
	     * Uint8Array, FileReader, BlobBuilder, atob, ArrayBuffer
	     * @fileOverview Image控件
	     */define('runtime/html5/util',['base'],function(Base){var urlAPI=window.createObjectURL && window || window.URL && URL.revokeObjectURL && URL || window.webkitURL,createObjectURL=Base.noop,revokeObjectURL=createObjectURL;if(urlAPI){ // 更安全的方式调用，比如android里面就能把context改成其他的对象。
	createObjectURL = function(){return urlAPI.createObjectURL.apply(urlAPI,arguments);};revokeObjectURL = function(){return urlAPI.revokeObjectURL.apply(urlAPI,arguments);};}return {createObjectURL:createObjectURL,revokeObjectURL:revokeObjectURL,dataURL2Blob:function dataURL2Blob(dataURI){var byteStr,intArray,ab,i,mimetype,parts;parts = dataURI.split(',');if(~parts[0].indexOf('base64')){byteStr = atob(parts[1]);}else {byteStr = decodeURIComponent(parts[1]);}ab = new ArrayBuffer(byteStr.length);intArray = new Uint8Array(ab);for(i = 0;i < byteStr.length;i++) {intArray[i] = byteStr.charCodeAt(i);}mimetype = parts[0].split(':')[1].split(';')[0];return this.arrayBufferToBlob(ab,mimetype);},dataURL2ArrayBuffer:function dataURL2ArrayBuffer(dataURI){var byteStr,intArray,i,parts;parts = dataURI.split(',');if(~parts[0].indexOf('base64')){byteStr = atob(parts[1]);}else {byteStr = decodeURIComponent(parts[1]);}intArray = new Uint8Array(byteStr.length);for(i = 0;i < byteStr.length;i++) {intArray[i] = byteStr.charCodeAt(i);}return intArray.buffer;},arrayBufferToBlob:function arrayBufferToBlob(buffer,type){var builder=window.BlobBuilder || window.WebKitBlobBuilder,bb; // android不支持直接new Blob, 只能借助blobbuilder.
	if(builder){bb = new builder();bb.append(buffer);return bb.getBlob(type);}return new Blob([buffer],type?{type:type}:{});}, // 抽出来主要是为了解决android下面canvas.toDataUrl不支持jpeg.
	// 你得到的结果是png.
	canvasToDataUrl:function canvasToDataUrl(canvas,type,quality){return canvas.toDataURL(type,quality / 100);}, // imagemeat会复写这个方法，如果用户选择加载那个文件了的话。
	parseMeta:function parseMeta(blob,callback){callback(false,{});}, // imagemeat会复写这个方法，如果用户选择加载那个文件了的话。
	updateImageHead:function updateImageHead(data){return data;}};}); /**
	     * Terms:
	     *
	     * Uint8Array, FileReader, BlobBuilder, atob, ArrayBuffer
	     * @fileOverview Image控件
	     */define('runtime/html5/imagemeta',['runtime/html5/util'],function(Util){var api;api = {parsers:{0xffe1:[]},maxMetaDataSize:262144,parse:function parse(blob,cb){var me=this,fr=new FileReader();fr.onload = function(){cb(false,me._parse(this.result));fr = fr.onload = fr.onerror = null;};fr.onerror = function(e){cb(e.message);fr = fr.onload = fr.onerror = null;};blob = blob.slice(0,me.maxMetaDataSize);fr.readAsArrayBuffer(blob.getSource());},_parse:function _parse(buffer,noParse){if(buffer.byteLength < 6){return;}var dataview=new DataView(buffer),offset=2,maxOffset=dataview.byteLength - 4,headLength=offset,ret={},markerBytes,markerLength,parsers,i;if(dataview.getUint16(0) === 0xffd8){while(offset < maxOffset) {markerBytes = dataview.getUint16(offset);if(markerBytes >= 0xffe0 && markerBytes <= 0xffef || markerBytes === 0xfffe){markerLength = dataview.getUint16(offset + 2) + 2;if(offset + markerLength > dataview.byteLength){break;}parsers = api.parsers[markerBytes];if(!noParse && parsers){for(i = 0;i < parsers.length;i += 1) {parsers[i].call(api,dataview,offset,markerLength,ret);}}offset += markerLength;headLength = offset;}else {break;}}if(headLength > 6){if(buffer.slice){ret.imageHead = buffer.slice(2,headLength);}else { // Workaround for IE10, which does not yet
	// support ArrayBuffer.slice:
	ret.imageHead = new Uint8Array(buffer).subarray(2,headLength);}}}return ret;},updateImageHead:function updateImageHead(buffer,head){var data=this._parse(buffer,true),buf1,buf2,bodyoffset;bodyoffset = 2;if(data.imageHead){bodyoffset = 2 + data.imageHead.byteLength;}if(buffer.slice){buf2 = buffer.slice(bodyoffset);}else {buf2 = new Uint8Array(buffer).subarray(bodyoffset);}buf1 = new Uint8Array(head.byteLength + 2 + buf2.byteLength);buf1[0] = 0xFF;buf1[1] = 0xD8;buf1.set(new Uint8Array(head),2);buf1.set(new Uint8Array(buf2),head.byteLength + 2);return buf1.buffer;}};Util.parseMeta = function(){return api.parse.apply(api,arguments);};Util.updateImageHead = function(){return api.updateImageHead.apply(api,arguments);};return api;}); /**
	     * 代码来自于：https://github.com/blueimp/JavaScript-Load-Image
	     * 暂时项目中只用了orientation.
	     *
	     * 去除了 Exif Sub IFD Pointer, GPS Info IFD Pointer, Exif Thumbnail.
	     * @fileOverview EXIF解析
	     */ // Sample
	// ====================================
	// Make : Apple
	// Model : iPhone 4S
	// Orientation : 1
	// XResolution : 72 [72/1]
	// YResolution : 72 [72/1]
	// ResolutionUnit : 2
	// Software : QuickTime 7.7.1
	// DateTime : 2013:09:01 22:53:55
	// ExifIFDPointer : 190
	// ExposureTime : 0.058823529411764705 [1/17]
	// FNumber : 2.4 [12/5]
	// ExposureProgram : Normal program
	// ISOSpeedRatings : 800
	// ExifVersion : 0220
	// DateTimeOriginal : 2013:09:01 22:52:51
	// DateTimeDigitized : 2013:09:01 22:52:51
	// ComponentsConfiguration : YCbCr
	// ShutterSpeedValue : 4.058893515764426
	// ApertureValue : 2.5260688216892597 [4845/1918]
	// BrightnessValue : -0.3126686601998395
	// MeteringMode : Pattern
	// Flash : Flash did not fire, compulsory flash mode
	// FocalLength : 4.28 [107/25]
	// SubjectArea : [4 values]
	// FlashpixVersion : 0100
	// ColorSpace : 1
	// PixelXDimension : 2448
	// PixelYDimension : 3264
	// SensingMethod : One-chip color area sensor
	// ExposureMode : 0
	// WhiteBalance : Auto white balance
	// FocalLengthIn35mmFilm : 35
	// SceneCaptureType : Standard
	define('runtime/html5/imagemeta/exif',['base','runtime/html5/imagemeta'],function(Base,ImageMeta){var EXIF={};EXIF.ExifMap = function(){return this;};EXIF.ExifMap.prototype.map = {'Orientation':0x0112};EXIF.ExifMap.prototype.get = function(id){return this[id] || this[this.map[id]];};EXIF.exifTagTypes = { // byte, 8-bit unsigned int:
	1:{getValue:function getValue(dataView,dataOffset){return dataView.getUint8(dataOffset);},size:1}, // ascii, 8-bit byte:
	2:{getValue:function getValue(dataView,dataOffset){return String.fromCharCode(dataView.getUint8(dataOffset));},size:1,ascii:true}, // short, 16 bit int:
	3:{getValue:function getValue(dataView,dataOffset,littleEndian){return dataView.getUint16(dataOffset,littleEndian);},size:2}, // long, 32 bit int:
	4:{getValue:function getValue(dataView,dataOffset,littleEndian){return dataView.getUint32(dataOffset,littleEndian);},size:4}, // rational = two long values,
	// first is numerator, second is denominator:
	5:{getValue:function getValue(dataView,dataOffset,littleEndian){return dataView.getUint32(dataOffset,littleEndian) / dataView.getUint32(dataOffset + 4,littleEndian);},size:8}, // slong, 32 bit signed int:
	9:{getValue:function getValue(dataView,dataOffset,littleEndian){return dataView.getInt32(dataOffset,littleEndian);},size:4}, // srational, two slongs, first is numerator, second is denominator:
	10:{getValue:function getValue(dataView,dataOffset,littleEndian){return dataView.getInt32(dataOffset,littleEndian) / dataView.getInt32(dataOffset + 4,littleEndian);},size:8}}; // undefined, 8-bit byte, value depending on field:
	EXIF.exifTagTypes[7] = EXIF.exifTagTypes[1];EXIF.getExifValue = function(dataView,tiffOffset,offset,type,length,littleEndian){var tagType=EXIF.exifTagTypes[type],tagSize,dataOffset,values,i,str,c;if(!tagType){Base.log('Invalid Exif data: Invalid tag type.');return;}tagSize = tagType.size * length; // Determine if the value is contained in the dataOffset bytes,
	// or if the value at the dataOffset is a pointer to the actual data:
	dataOffset = tagSize > 4?tiffOffset + dataView.getUint32(offset + 8,littleEndian):offset + 8;if(dataOffset + tagSize > dataView.byteLength){Base.log('Invalid Exif data: Invalid data offset.');return;}if(length === 1){return tagType.getValue(dataView,dataOffset,littleEndian);}values = [];for(i = 0;i < length;i += 1) {values[i] = tagType.getValue(dataView,dataOffset + i * tagType.size,littleEndian);}if(tagType.ascii){str = ''; // Concatenate the chars:
	for(i = 0;i < values.length;i += 1) {c = values[i]; // Ignore the terminating NULL byte(s):
	if(c === '\u0000'){break;}str += c;}return str;}return values;};EXIF.parseExifTag = function(dataView,tiffOffset,offset,littleEndian,data){var tag=dataView.getUint16(offset,littleEndian);data.exif[tag] = EXIF.getExifValue(dataView,tiffOffset,offset,dataView.getUint16(offset + 2,littleEndian), // tag type
	dataView.getUint32(offset + 4,littleEndian), // tag length
	littleEndian);};EXIF.parseExifTags = function(dataView,tiffOffset,dirOffset,littleEndian,data){var tagsNumber,dirEndOffset,i;if(dirOffset + 6 > dataView.byteLength){Base.log('Invalid Exif data: Invalid directory offset.');return;}tagsNumber = dataView.getUint16(dirOffset,littleEndian);dirEndOffset = dirOffset + 2 + 12 * tagsNumber;if(dirEndOffset + 4 > dataView.byteLength){Base.log('Invalid Exif data: Invalid directory size.');return;}for(i = 0;i < tagsNumber;i += 1) {this.parseExifTag(dataView,tiffOffset,dirOffset + 2 + 12 * i, // tag offset
	littleEndian,data);} // Return the offset to the next directory:
	return dataView.getUint32(dirEndOffset,littleEndian);}; // EXIF.getExifThumbnail = function(dataView, offset, length) {
	//     var hexData,
	//         i,
	//         b;
	//     if (!length || offset + length > dataView.byteLength) {
	//         Base.log('Invalid Exif data: Invalid thumbnail data.');
	//         return;
	//     }
	//     hexData = [];
	//     for (i = 0; i < length; i += 1) {
	//         b = dataView.getUint8(offset + i);
	//         hexData.push((b < 16 ? '0' : '') + b.toString(16));
	//     }
	//     return 'data:image/jpeg,%' + hexData.join('%');
	// };
	EXIF.parseExifData = function(dataView,offset,length,data){var tiffOffset=offset + 10,littleEndian,dirOffset; // Check for the ASCII code for "Exif" (0x45786966):
	if(dataView.getUint32(offset + 4) !== 0x45786966){ // No Exif data, might be XMP data instead
	return;}if(tiffOffset + 8 > dataView.byteLength){Base.log('Invalid Exif data: Invalid segment size.');return;} // Check for the two null bytes:
	if(dataView.getUint16(offset + 8) !== 0x0000){Base.log('Invalid Exif data: Missing byte alignment offset.');return;} // Check the byte alignment:
	switch(dataView.getUint16(tiffOffset)){case 0x4949:littleEndian = true;break;case 0x4D4D:littleEndian = false;break;default:Base.log('Invalid Exif data: Invalid byte alignment marker.');return;} // Check for the TIFF tag marker (0x002A):
	if(dataView.getUint16(tiffOffset + 2,littleEndian) !== 0x002A){Base.log('Invalid Exif data: Missing TIFF marker.');return;} // Retrieve the directory offset bytes, usually 0x00000008 or 8 decimal:
	dirOffset = dataView.getUint32(tiffOffset + 4,littleEndian); // Create the exif object to store the tags:
	data.exif = new EXIF.ExifMap(); // Parse the tags of the main image directory and retrieve the
	// offset to the next directory, usually the thumbnail directory:
	dirOffset = EXIF.parseExifTags(dataView,tiffOffset,tiffOffset + dirOffset,littleEndian,data); // 尝试读取缩略图
	// if ( dirOffset ) {
	//     thumbnailData = {exif: {}};
	//     dirOffset = EXIF.parseExifTags(
	//         dataView,
	//         tiffOffset,
	//         tiffOffset + dirOffset,
	//         littleEndian,
	//         thumbnailData
	//     );
	//     // Check for JPEG Thumbnail offset:
	//     if (thumbnailData.exif[0x0201]) {
	//         data.exif.Thumbnail = EXIF.getExifThumbnail(
	//             dataView,
	//             tiffOffset + thumbnailData.exif[0x0201],
	//             thumbnailData.exif[0x0202] // Thumbnail data length
	//         );
	//     }
	// }
	};ImageMeta.parsers[0xffe1].push(EXIF.parseExifData);return EXIF;}); /**
	     * @fileOverview Image
	     */define('runtime/html5/image',['base','runtime/html5/runtime','runtime/html5/util'],function(Base,Html5Runtime,Util){var BLANK='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D';return Html5Runtime.register('Image',{ // flag: 标记是否被修改过。
	modified:false,init:function init(){var me=this,img=new Image();img.onload = function(){me._info = {type:me.type,width:this.width,height:this.height}; // 读取meta信息。
	if(!me._metas && 'image/jpeg' === me.type){Util.parseMeta(me._blob,function(error,ret){me._metas = ret;me.owner.trigger('load');});}else {me.owner.trigger('load');}};img.onerror = function(){me.owner.trigger('error');};me._img = img;},loadFromBlob:function loadFromBlob(blob){var me=this,img=me._img;me._blob = blob;me.type = blob.type;img.src = Util.createObjectURL(blob.getSource());me.owner.once('load',function(){Util.revokeObjectURL(img.src);});},resize:function resize(width,height){var canvas=this._canvas || (this._canvas = document.createElement('canvas'));this._resize(this._img,canvas,width,height);this._blob = null; // 没用了，可以删掉了。
	this.modified = true;this.owner.trigger('complete','resize');},crop:function crop(x,y,w,h,s){var cvs=this._canvas || (this._canvas = document.createElement('canvas')),opts=this.options,img=this._img,iw=img.naturalWidth,ih=img.naturalHeight,orientation=this.getOrientation();s = s || 1; // todo 解决 orientation 的问题。
	// values that require 90 degree rotation
	// if ( ~[ 5, 6, 7, 8 ].indexOf( orientation ) ) {
	//     switch ( orientation ) {
	//         case 6:
	//             tmp = x;
	//             x = y;
	//             y = iw * s - tmp - w;
	//             console.log(ih * s, tmp, w)
	//             break;
	//     }
	//     (w ^= h, h ^= w, w ^= h);
	// }
	cvs.width = w;cvs.height = h;opts.preserveHeaders || this._rotate2Orientaion(cvs,orientation);this._renderImageToCanvas(cvs,img,-x,-y,iw * s,ih * s);this._blob = null; // 没用了，可以删掉了。
	this.modified = true;this.owner.trigger('complete','crop');},getAsBlob:function getAsBlob(type){var blob=this._blob,opts=this.options,canvas;type = type || this.type; // blob需要重新生成。
	if(this.modified || this.type !== type){canvas = this._canvas;if(type === 'image/jpeg'){blob = Util.canvasToDataUrl(canvas,type,opts.quality);if(opts.preserveHeaders && this._metas && this._metas.imageHead){blob = Util.dataURL2ArrayBuffer(blob);blob = Util.updateImageHead(blob,this._metas.imageHead);blob = Util.arrayBufferToBlob(blob,type);return blob;}}else {blob = Util.canvasToDataUrl(canvas,type);}blob = Util.dataURL2Blob(blob);}return blob;},getAsDataUrl:function getAsDataUrl(type){var opts=this.options;type = type || this.type;if(type === 'image/jpeg'){return Util.canvasToDataUrl(this._canvas,type,opts.quality);}else {return this._canvas.toDataURL(type);}},getOrientation:function getOrientation(){return this._metas && this._metas.exif && this._metas.exif.get('Orientation') || 1;},info:function info(val){ // setter
	if(val){this._info = val;return this;} // getter
	return this._info;},meta:function meta(val){ // setter
	if(val){this._meta = val;return this;} // getter
	return this._meta;},destroy:function destroy(){var canvas=this._canvas;this._img.onload = null;if(canvas){canvas.getContext('2d').clearRect(0,0,canvas.width,canvas.height);canvas.width = canvas.height = 0;this._canvas = null;} // 释放内存。非常重要，否则释放不了image的内存。
	this._img.src = BLANK;this._img = this._blob = null;},_resize:function _resize(img,cvs,width,height){var opts=this.options,naturalWidth=img.width,naturalHeight=img.height,orientation=this.getOrientation(),scale,w,h,x,y; // values that require 90 degree rotation
	if(~[5,6,7,8].indexOf(orientation)){ // 交换width, height的值。
	width ^= height;height ^= width;width ^= height;}scale = Math[opts.crop?'max':'min'](width / naturalWidth,height / naturalHeight); // 不允许放大。
	opts.allowMagnify || (scale = Math.min(1,scale));w = naturalWidth * scale;h = naturalHeight * scale;if(opts.crop){cvs.width = width;cvs.height = height;}else {cvs.width = w;cvs.height = h;}x = (cvs.width - w) / 2;y = (cvs.height - h) / 2;opts.preserveHeaders || this._rotate2Orientaion(cvs,orientation);this._renderImageToCanvas(cvs,img,x,y,w,h);},_rotate2Orientaion:function _rotate2Orientaion(canvas,orientation){var width=canvas.width,height=canvas.height,ctx=canvas.getContext('2d');switch(orientation){case 5:case 6:case 7:case 8:canvas.width = height;canvas.height = width;break;}switch(orientation){case 2: // horizontal flip
	ctx.translate(width,0);ctx.scale(-1,1);break;case 3: // 180 rotate left
	ctx.translate(width,height);ctx.rotate(Math.PI);break;case 4: // vertical flip
	ctx.translate(0,height);ctx.scale(1,-1);break;case 5: // vertical flip + 90 rotate right
	ctx.rotate(0.5 * Math.PI);ctx.scale(1,-1);break;case 6: // 90 rotate right
	ctx.rotate(0.5 * Math.PI);ctx.translate(0,-height);break;case 7: // horizontal flip + 90 rotate right
	ctx.rotate(0.5 * Math.PI);ctx.translate(width,-height);ctx.scale(-1,1);break;case 8: // 90 rotate left
	ctx.rotate(-0.5 * Math.PI);ctx.translate(-width,0);break;}}, // https://github.com/stomita/ios-imagefile-megapixel/
	// blob/master/src/megapix-image.js
	_renderImageToCanvas:(function(){ // 如果不是ios, 不需要这么复杂！
	if(!Base.os.ios){return function(canvas){var args=Base.slice(arguments,1),ctx=canvas.getContext('2d');ctx.drawImage.apply(ctx,args);};} /**
	                 * Detecting vertical squash in loaded image.
	                 * Fixes a bug which squash image vertically while drawing into
	                 * canvas for some images.
	                 */function detectVerticalSquash(img,iw,ih){var canvas=document.createElement('canvas'),ctx=canvas.getContext('2d'),sy=0,ey=ih,py=ih,data,alpha,ratio;canvas.width = 1;canvas.height = ih;ctx.drawImage(img,0,0);data = ctx.getImageData(0,0,1,ih).data; // search image edge pixel position in case
	// it is squashed vertically.
	while(py > sy) {alpha = data[(py - 1) * 4 + 3];if(alpha === 0){ey = py;}else {sy = py;}py = ey + sy >> 1;}ratio = py / ih;return ratio === 0?1:ratio;} // fix ie7 bug
	// http://stackoverflow.com/questions/11929099/
	// html5-canvas-drawimage-ratio-bug-ios
	if(Base.os.ios >= 7){return function(canvas,img,x,y,w,h){var iw=img.naturalWidth,ih=img.naturalHeight,vertSquashRatio=detectVerticalSquash(img,iw,ih);return canvas.getContext('2d').drawImage(img,0,0,iw * vertSquashRatio,ih * vertSquashRatio,x,y,w,h);};} /**
	                 * Detect subsampling in loaded image.
	                 * In iOS, larger images than 2M pixels may be
	                 * subsampled in rendering.
	                 */function detectSubsampling(img){var iw=img.naturalWidth,ih=img.naturalHeight,canvas,ctx; // subsampling may happen overmegapixel image
	if(iw * ih > 1024 * 1024){canvas = document.createElement('canvas');canvas.width = canvas.height = 1;ctx = canvas.getContext('2d');ctx.drawImage(img,-iw + 1,0); // subsampled image becomes half smaller in rendering size.
	// check alpha channel value to confirm image is covering
	// edge pixel or not. if alpha value is 0
	// image is not covering, hence subsampled.
	return ctx.getImageData(0,0,1,1).data[3] === 0;}else {return false;}}return function(canvas,img,x,y,width,height){var iw=img.naturalWidth,ih=img.naturalHeight,ctx=canvas.getContext('2d'),subsampled=detectSubsampling(img),doSquash=this.type === 'image/jpeg',d=1024,sy=0,dy=0,tmpCanvas,tmpCtx,vertSquashRatio,dw,dh,sx,dx;if(subsampled){iw /= 2;ih /= 2;}ctx.save();tmpCanvas = document.createElement('canvas');tmpCanvas.width = tmpCanvas.height = d;tmpCtx = tmpCanvas.getContext('2d');vertSquashRatio = doSquash?detectVerticalSquash(img,iw,ih):1;dw = Math.ceil(d * width / iw);dh = Math.ceil(d * height / ih / vertSquashRatio);while(sy < ih) {sx = 0;dx = 0;while(sx < iw) {tmpCtx.clearRect(0,0,d,d);tmpCtx.drawImage(img,-sx,-sy);ctx.drawImage(tmpCanvas,0,0,d,d,x + dx,y + dy,dw,dh);sx += d;dx += dw;}sy += d;dy += dh;}ctx.restore();tmpCanvas = tmpCtx = null;};})()});}); /**
	     * @fileOverview Transport
	     * @todo 支持chunked传输，优势：
	     * 可以将大文件分成小块，挨个传输，可以提高大文件成功率，当失败的时候，也只需要重传那小部分，
	     * 而不需要重头再传一次。另外断点续传也需要用chunked方式。
	     */define('runtime/html5/transport',['base','runtime/html5/runtime'],function(Base,Html5Runtime){var noop=Base.noop,$=Base.$;return Html5Runtime.register('Transport',{init:function init(){this._status = 0;this._response = null;},send:function send(){var owner=this.owner,opts=this.options,xhr=this._initAjax(),blob=owner._blob,server=opts.server,formData,binary,fr;if(opts.sendAsBinary){server += (/\?/.test(server)?'&':'?') + $.param(owner._formData);binary = blob.getSource();}else {formData = new FormData();$.each(owner._formData,function(k,v){formData.append(k,v);});formData.append(opts.fileVal,blob.getSource(),opts.filename || owner._formData.name || '');}if(opts.withCredentials && 'withCredentials' in xhr){xhr.open(opts.method,server,true);xhr.withCredentials = true;}else {xhr.open(opts.method,server);}this._setRequestHeader(xhr,opts.headers);if(binary){ // 强制设置成 content-type 为文件流。
	xhr.overrideMimeType && xhr.overrideMimeType('application/octet-stream'); // android直接发送blob会导致服务端接收到的是空文件。
	// bug详情。
	// https://code.google.com/p/android/issues/detail?id=39882
	// 所以先用fileReader读取出来再通过arraybuffer的方式发送。
	if(Base.os.android){fr = new FileReader();fr.onload = function(){xhr.send(this.result);fr = fr.onload = null;};fr.readAsArrayBuffer(binary);}else {xhr.send(binary);}}else {xhr.send(formData);}},getResponse:function getResponse(){return this._response;},getResponseAsJson:function getResponseAsJson(){return this._parseJson(this._response);},getStatus:function getStatus(){return this._status;},abort:function abort(){var xhr=this._xhr;if(xhr){xhr.upload.onprogress = noop;xhr.onreadystatechange = noop;xhr.abort();this._xhr = xhr = null;}},destroy:function destroy(){this.abort();},_initAjax:function _initAjax(){var me=this,xhr=new XMLHttpRequest(),opts=this.options;if(opts.withCredentials && !('withCredentials' in xhr) && typeof XDomainRequest !== 'undefined'){xhr = new XDomainRequest();}xhr.upload.onprogress = function(e){var percentage=0;if(e.lengthComputable){percentage = e.loaded / e.total;}return me.trigger('progress',percentage);};xhr.onreadystatechange = function(){if(xhr.readyState !== 4){return;}xhr.upload.onprogress = noop;xhr.onreadystatechange = noop;me._xhr = null;me._status = xhr.status;if(xhr.status >= 200 && xhr.status < 300){me._response = xhr.responseText;return me.trigger('load');}else if(xhr.status >= 500 && xhr.status < 600){me._response = xhr.responseText;return me.trigger('error','server');}return me.trigger('error',me._status?'http':'abort');};me._xhr = xhr;return xhr;},_setRequestHeader:function _setRequestHeader(xhr,headers){$.each(headers,function(key,val){xhr.setRequestHeader(key,val);});},_parseJson:function _parseJson(str){var json;try{json = JSON.parse(str);}catch(ex) {json = {};}return json;}});}); /**
	     * @fileOverview 只有html5实现的文件版本。
	     */define('preset/html5only',['base', // widgets
	'widgets/filednd','widgets/filepaste','widgets/filepicker','widgets/image','widgets/queue','widgets/runtime','widgets/upload','widgets/validator', // runtimes
	// html5
	'runtime/html5/blob','runtime/html5/dnd','runtime/html5/filepaste','runtime/html5/filepicker','runtime/html5/imagemeta/exif','runtime/html5/image','runtime/html5/transport'],function(Base){return Base;});define('webuploader',['preset/html5only'],function(preset){return preset;});return require('webuploader');});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _webuploaderHtml5only = __webpack_require__(2);

	var _webuploaderHtml5only2 = _interopRequireDefault(_webuploaderHtml5only);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PictureUpload = (function ($, WebUploader) {

	    var NAME = 'pictureupload';
	    var VERSION = '4.0.0';
	    var DATA_KEY = 'bs.' + NAME;
	    var EVENT_KEY = '.' + DATA_KEY;
	    var DATA_API_KEY = 'data-picture-upload';
	    var JQUERY_NO_CONFLICT = $.fn[NAME];

	    var ClassName = {
	        FILE_LIST: NAME + '-file-list',
	        FILE_LIST_ITEM: NAME + '-file-item'
	    };

	    var Event = {
	        DND_ACCEPT: 'dndAccept' + EVENT_KEY,
	        BEFORE_FILE_QUEUED: 'beforeFileQueued' + EVENT_KEY,
	        FILE_QUEUED: 'fileQueued' + EVENT_KEY,
	        FILES_QUEUED: 'filesQueued' + EVENT_KEY,
	        FILE_DEQUEUED: 'fileDequeued' + EVENT_KEY,
	        RESET: 'reset' + EVENT_KEY,
	        START_UPLOAD: 'startUpload' + EVENT_KEY,
	        STOP_UPLOAD: 'stopUpload' + EVENT_KEY,
	        UPLOAD_FINISHED: 'uploadFinished' + EVENT_KEY,
	        UPLOAD_START: 'uploadStart' + EVENT_KEY,
	        UPLOAD_BEFORE_SEND: 'uploadBeforeSend' + EVENT_KEY,
	        UPLOAD_ACCEPT: 'uploadAccept' + EVENT_KEY,
	        UPLOAD_PROGRESS: 'uploadProgress' + EVENT_KEY,
	        UPLOAD_ERROR: 'uploadError' + EVENT_KEY,
	        UPLOAD_SUCCESS: 'uploadSuccess' + EVENT_KEY,
	        UPLOAD_COMPLETE: 'uploadComplete' + EVENT_KEY,
	        ERROR: 'error' + EVENT_KEY
	    };

	    var Attr = {
	        FILE_LIST_FILE_ID: DATA_API_KEY + '-id'
	    };
	    var default_accept = {
	        title: 'Images',
	        extensions: 'gif,jpg,jpeg,bmp,png',
	        mimeTypes: 'image/*'
	    };

	    var PictureUpload = (function (_WebUploader$Uploader) {
	        _inherits(PictureUpload, _WebUploader$Uploader);

	        function PictureUpload(element, ops) {
	            _classCallCheck(this, PictureUpload);

	            ops.pick = ops.pick || element;
	            ops.accept = ops.accept || default_accept;

	            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PictureUpload).call(this, ops));

	            _this._element = element;
	            _this.instant();
	            _this._addEventListeners();
	            return _this;
	        }

	        _createClass(PictureUpload, [{
	            key: '_addEventListeners',
	            value: function _addEventListeners() {
	                this.on('dndAccept', this._triggerDndAcceptEvent);
	                this.on('beforeFileQueued', this._triggerBeforeFileQueuedEvent);
	                this.on('fileQueued', this._triggerFileQueuedEvent);
	                this.on('filesQueued', this._triggerFilesQueuedEvent);
	                this.on('fileDequeued', this._triggerFileDequeuedEvent);
	                this.on('reset', this._triggerResetEvent);
	                this.on('startUpload', this._triggerStartUploadEvent);
	                this.on('stopUpload', this._triggerStopUploadEvent);
	                this.on('uploadFinished', this._triggerUploadFinishedEvent);
	                this.on('uploadStart', this._triggerUploadStartEvent);
	                this.on('uploadBeforeSend', this._triggerUploadBeforeSendEvent);
	                this.on('uploadAccept', this._triggerUploadAcceptEvent);
	                this.on('uploadProgress', this._triggerUploadProgressEvent);
	                this.on('uploadError', this._triggerUploadErrorEvent);
	                this.on('uploadSuccess', this._triggerUploadSuccessEvent);
	                this.on('uploadComplete', this._triggerUploadCompleteEvent);
	                this.on('error', this._triggerErrorEvent);
	            }
	        }, {
	            key: '_triggerDndAcceptEvent',
	            value: function _triggerDndAcceptEvent(file) {
	                var DndAcceptEvent = $.Event(Event.DND_ACCEPT);
	                $(this._element).trigger(DndAcceptEvent, [this].concat(Array.prototype.slice.call(arguments)));
	            }
	        }, {
	            key: '_triggerBeforeFileQueuedEvent',
	            value: function _triggerBeforeFileQueuedEvent(file) {
	                var BeforeFileQueuedEvent = $.Event(Event.BEFORE_FILE_QUEUED);
	                $(this._element).trigger(BeforeFileQueuedEvent, [this].concat(Array.prototype.slice.call(arguments)));
	            }
	        }, {
	            key: '_triggerFileQueuedEvent',
	            value: function _triggerFileQueuedEvent(file) {
	                var FileQueuedEvent = $.Event(Event.FILE_QUEUED);
	                $(this._element).trigger(FileQueuedEvent, [this].concat(Array.prototype.slice.call(arguments)));
	            }
	        }, {
	            key: '_triggerFilesQueuedEvent',
	            value: function _triggerFilesQueuedEvent(file) {
	                var FilesQueuedEvent = $.Event(Event.FILES_QUEUED);
	                $(this._element).trigger(FilesQueuedEvent, [this].concat(Array.prototype.slice.call(arguments)));
	            }
	        }, {
	            key: '_triggerFileDequeuedEvent',
	            value: function _triggerFileDequeuedEvent(file) {
	                var FileDequeuedEvent = $.Event(Event.FILE_DEQUEUED);
	                $(this._element).trigger(FileDequeuedEvent, [this].concat(Array.prototype.slice.call(arguments)));
	            }
	        }, {
	            key: '_triggerResetEvent',
	            value: function _triggerResetEvent(file) {
	                var ResetEvent = $.Event(Event.RESET);
	                $(this._element).trigger(ResetEvent, [this].concat(Array.prototype.slice.call(arguments)));
	            }
	        }, {
	            key: '_triggerStartUploadEvent',
	            value: function _triggerStartUploadEvent(file) {
	                var StartUploadEvent = $.Event(Event.START_UPLOAD);
	                $(this._element).trigger(StartUploadEvent, [this].concat(Array.prototype.slice.call(arguments)));
	            }
	        }, {
	            key: '_triggerStopUploadEvent',
	            value: function _triggerStopUploadEvent(file) {
	                var StopUploadEvent = $.Event(Event.STOP_UPLOAD);
	                $(this._element).trigger(StopUploadEvent, [this].concat(Array.prototype.slice.call(arguments)));
	            }
	        }, {
	            key: '_triggerUploadFinishedEvent',
	            value: function _triggerUploadFinishedEvent(file) {
	                var UploadFinishedEvent = $.Event(Event.UPLOAD_FINISHED);
	                $(this._element).trigger(UploadFinishedEvent, [this].concat(Array.prototype.slice.call(arguments)));
	            }
	        }, {
	            key: '_triggerUploadStartEvent',
	            value: function _triggerUploadStartEvent(file) {
	                var UploadStartEvent = $.Event(Event.UPLOAD_START);
	                $(this._element).trigger(UploadStartEvent, [this].concat(Array.prototype.slice.call(arguments)));
	            }
	        }, {
	            key: '_triggerUploadBeforeSendEvent',
	            value: function _triggerUploadBeforeSendEvent(file) {
	                var UploadBeforeSendEvent = $.Event(Event.UPLOAD_BEFORE_SEND);
	                $(this._element).trigger(UploadBeforeSendEvent, [this].concat(Array.prototype.slice.call(arguments)));
	            }
	        }, {
	            key: '_triggerUploadAcceptEvent',
	            value: function _triggerUploadAcceptEvent(file) {
	                var UploadAcceptEvent = $.Event(Event.UPLOAD_ACCEPT);
	                $(this._element).trigger(UploadAcceptEvent, [this].concat(Array.prototype.slice.call(arguments)));
	            }
	        }, {
	            key: '_triggerUploadProgressEvent',
	            value: function _triggerUploadProgressEvent(file) {
	                var UploadProgressEvent = $.Event(Event.UPLOAD_PROGRESS);
	                $(this._element).trigger(UploadProgressEvent, [this].concat(Array.prototype.slice.call(arguments)));
	            }
	        }, {
	            key: '_triggerUploadErrorEvent',
	            value: function _triggerUploadErrorEvent(file) {
	                var UploadErrorEvent = $.Event(Event.UPLOAD_ERROR);
	                $(this._element).trigger(UploadErrorEvent, [this].concat(Array.prototype.slice.call(arguments)));
	            }
	        }, {
	            key: '_triggerUploadSuccessEvent',
	            value: function _triggerUploadSuccessEvent(file) {
	                var UploadSuccessEvent = $.Event(Event.UPLOAD_SUCCESS);
	                $(this._element).trigger(UploadSuccessEvent, [this].concat(Array.prototype.slice.call(arguments)));
	            }
	        }, {
	            key: '_triggerUploadCompleteEvent',
	            value: function _triggerUploadCompleteEvent(file) {
	                var UploadCompleteEvent = $.Event(Event.UPLOAD_COMPLETE);
	                $(this._element).trigger(UploadCompleteEvent, [this].concat(Array.prototype.slice.call(arguments)));
	            }
	        }, {
	            key: '_triggerErrorEvent',
	            value: function _triggerErrorEvent(file) {
	                var ErrorEvent = $.Event(Event.ERROR);
	                $(this._element).trigger(ErrorEvent, [this].concat(Array.prototype.slice.call(arguments)));
	            }
	        }, {
	            key: 'instant',
	            value: function instant() {
	                //只能单选一个文件是在队列中将之前保存的文件删除
	                if (this.options.pick && this.options.pick.multiple == false) {
	                    this.on('beforeFileQueued', this._rejectExistFile);
	                }
	                if (this.options.fileList) {
	                    //this.on('fileQueued filesQueued fileDequeued uploadProgress uploadError uploadSuccess', this.refreshFileList);
	                    //在文件列表中同步队列中的文件
	                    this.on('filesQueued', this.syncFileList);
	                    //开始上传时，把文件列表中的文件改为上传状态
	                    this.on('uploadStart', this.setFileStartStatus);
	                    //文件上传的同时，把文件上传进度同步在文件列表中
	                    this.on('uploadProgress', this.setFileProgressStatus);
	                    //文件上传错误时，在文件列表中标注
	                    this.on('uploadError', this.setFileErrorStatus);
	                    //文件上传成功时，在文件列表中标注
	                    this.on('uploadSuccess', this.setFileSuccessStatus);
	                }
	            }
	        }, {
	            key: 'setFileStartStatus',
	            value: function setFileStartStatus(file) {
	                var $fileList = this._$fileList;
	                var $fileItem = $fileList.find('[' + Attr.FILE_LIST_FILE_ID + '="' + file.id + '"]');

	                $fileItem.find('progress').removeClass('progress-pass progress-caution progress-wrong').addClass('progress-main');
	            }
	        }, {
	            key: 'setFileProgressStatus',
	            value: function setFileProgressStatus(file, percentage) {
	                var $fileList = this._$fileList;
	                var $fileItem = $fileList.find('[' + Attr.FILE_LIST_FILE_ID + '="' + file.id + '"]');

	                $fileItem.find('progress').val(percentage);
	            }
	        }, {
	            key: 'setFileErrorStatus',
	            value: function setFileErrorStatus(file) {
	                var $fileList = this._$fileList;
	                var $fileItem = $fileList.find('[' + Attr.FILE_LIST_FILE_ID + '="' + file.id + '"]');

	                $fileItem.find('progress').removeClass('progress-pass progress-caution progress-main').addClass('progress-wrong');
	            }
	        }, {
	            key: 'setFileSuccessStatus',
	            value: function setFileSuccessStatus(file) {
	                var $fileList = this._$fileList;
	                var $fileItem = $fileList.find('[' + Attr.FILE_LIST_FILE_ID + '="' + file.id + '"]');

	                $fileItem.find('progress').removeClass('progress-main progress-caution progress-wrong').addClass('progress-pass').val(100);
	            }
	        }, {
	            key: 'syncFileList',
	            value: function syncFileList() {
	                var _this2 = this;

	                var $el = $(this._element);
	                var $list = $el.find('.' + ClassName.FILE_LIST);
	                var files = (function () {
	                    if (_this2.options.pick && _this2.options.pick.multiple === false) {
	                        return _this2.getFiles('inited');
	                    } else {
	                        return _this2.getFiles();
	                    }
	                })();

	                if (!$list.length) {
	                    $el.append($('<ul>', {
	                        class: ClassName.FILE_LIST
	                    }));
	                    $list = $el.find('.' + ClassName.FILE_LIST);
	                }

	                $list.empty();

	                files.forEach(function (file) {
	                    var percentage = file.getStatus() == 'complete' || file.getStatus() == 'cancelled' ? 100 : 0;
	                    var $item = $('<li>', {
	                        class: ClassName.FILE_LIST_ITEM
	                    }).attr('' + Attr.FILE_LIST_FILE_ID, file.id);

	                    var $label = $('<label>', {
	                        class: 'label label-info',
	                        text: file.name
	                    });
	                    var $progress = $('<progress>', {
	                        class: 'progress progress-sm',
	                        value: percentage,
	                        max: 100,
	                        text: 0
	                    }).addClass(function () {
	                        var status = file.getStatus();
	                        return 'progress-' + _this2._mateStatusClass(status);
	                    });

	                    var $img = $('<img>', {
	                        class: 'img-thumbnail'
	                    });
	                    _this2.makeThumb(file, function (error, src) {
	                        if (error) {
	                            $img.replaceWith('<span>不能预览</span>');
	                            return;
	                        }

	                        $img.attr('src', src);
	                    });
	                    $item.append($img);
	                    $item.append($progress);
	                    $item.append($label);
	                    $list.append($item);
	                });

	                this._$fileList = $list;
	            }
	        }, {
	            key: '_mateStatusClass',
	            value: function _mateStatusClass(status) {
	                switch (status) {
	                    case 'inited':
	                        {
	                            return 'main';
	                        }
	                    case 'queued':
	                        {
	                            return 'main';
	                        }
	                    case 'progress':
	                        {
	                            return 'main';
	                        }
	                    case 'complete':
	                        {
	                            return 'pass';
	                        }
	                    case 'error':
	                        {
	                            return 'wrong';
	                        }
	                    case 'interrupt':
	                        {
	                            return 'caution';
	                        }
	                    case 'invalid':
	                        {
	                            return 'terminate';
	                        }
	                    case 'cancelled':
	                        {
	                            return 'pass';
	                        }
	                    default:
	                        {
	                            return 'tacitly';
	                        }
	                }
	            }
	        }, {
	            key: '_rejectExistFile',
	            value: function _rejectExistFile(file) {
	                var _this3 = this;

	                var files = this.getFiles();
	                files.forEach(function (f) {
	                    _this3.removeFile(f, true);
	                });
	            }
	        }], [{
	            key: '_jQueryInterface',
	            value: function _jQueryInterface(config) {
	                return this.each(function () {
	                    var $element = $(this);
	                    var data = $element.data(DATA_KEY);

	                    if (!data) {
	                        data = new PictureUpload(this, config);
	                        $element.data(DATA_KEY, data);
	                    }

	                    if (typeof config === 'string') {
	                        data[config].call(this);
	                    }
	                });
	            }
	        }]);

	        return PictureUpload;
	    })(WebUploader.Uploader);

	    /**
	     * ------------------------------------------------------------------------
	     * jQuery
	     * ------------------------------------------------------------------------
	     */

	    $.fn[NAME] = PictureUpload._jQueryInterface;
	    $.fn[NAME].Constructor = PictureUpload;
	    $.fn[NAME].noConflict = function () {
	        $.fn[NAME] = JQUERY_NO_CONFLICT;
	        return PictureUpload._jQueryInterface;
	    };

	    /**
	     * 声明式适配
	     */

	    $(document).ready(function () {
	        var uploaders = $('[' + DATA_API_KEY + ']');
	        uploaders.each(function (i, uploader) {
	            var $uploader = $(uploader);
	            $uploader.pictureupload($uploader.data());
	        });
	    });

	    return PictureUpload;
	})(jQuery, _webuploaderHtml5only2.default);

	exports.default = PictureUpload;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	function _instanceof(left, right) { if (right != null && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

	/**
	 * @preserve jQuery DateTimePicker plugin v2.4.5
	 * @homepage http://xdsoft.net/jqplugins/datetimepicker/
	 * (c) 2014, Chupurnov Valeriy.
	 */
	/*global document,window,jQuery,setTimeout,clearTimeout,HighlightedDate,getCurrentValue*/
	;(function (factory) {
		// if ( typeof define === 'function' && define.amd ) {
		// 	// AMD. Register as an anonymous module.
		// 	define(['jquery', 'jquery-mousewheel', 'date-functions'], factory);
		// } else if (typeof exports === 'object') {
		// 	// Node/CommonJS style for Browserify
		// 	module.exports = factory;
		// } else {
		// Browser globals
		factory(jQuery);
		// }
	})(function ($) {
		'use strict';

		var default_options = {
			i18n: {
				ar: { // Arabic
					months: ["كانون الثاني", "شباط", "آذار", "نيسان", "مايو", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
					dayOfWeekShort: ["ن", "ث", "ع", "خ", "ج", "س", "ح"],
					dayOfWeek: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت", "الأحد"]
				},
				ro: { // Romanian
					months: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
					dayOfWeekShort: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"],
					dayOfWeek: ["Duminică", "Luni", "Marţi", "Miercuri", "Joi", "Vineri", "Sâmbătă"]
				},
				id: { // Indonesian
					months: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
					dayOfWeekShort: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
					dayOfWeek: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
				},
				is: { // Icelandic
					months: ["Janúar", "Febrúar", "Mars", "Apríl", "Maí", "Júní", "Júlí", "Ágúst", "September", "Október", "Nóvember", "Desember"],
					dayOfWeekShort: ["Sun", "Mán", "Þrið", "Mið", "Fim", "Fös", "Lau"],
					dayOfWeek: ["Sunnudagur", "Mánudagur", "Þriðjudagur", "Miðvikudagur", "Fimmtudagur", "Föstudagur", "Laugardagur"]
				},
				bg: { // Bulgarian
					months: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
					dayOfWeekShort: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
					dayOfWeek: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"]
				},
				fa: { // Persian/Farsi
					months: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
					dayOfWeekShort: ['یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'],
					dayOfWeek: ["یک‌شنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه", "یک‌شنبه"]
				},
				ru: { // Russian
					months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
					dayOfWeekShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
					dayOfWeek: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
				},
				uk: { // Ukrainian
					months: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
					dayOfWeekShort: ["Ндл", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Сбт"],
					dayOfWeek: ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"]
				},
				en: { // English
					months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
					dayOfWeekShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
					dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
				},
				el: { // Ελληνικά
					months: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
					dayOfWeekShort: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"],
					dayOfWeek: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"]
				},
				de: { // German
					months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
					dayOfWeekShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
					dayOfWeek: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
				},
				nl: { // Dutch
					months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
					dayOfWeekShort: ["zo", "ma", "di", "wo", "do", "vr", "za"],
					dayOfWeek: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]
				},
				tr: { // Turkish
					months: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
					dayOfWeekShort: ["Paz", "Pts", "Sal", "Çar", "Per", "Cum", "Cts"],
					dayOfWeek: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
				},
				fr: { //French
					months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
					dayOfWeekShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
					dayOfWeek: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
				},
				es: { // Spanish
					months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
					dayOfWeekShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
					dayOfWeek: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
				},
				th: { // Thai
					months: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
					dayOfWeekShort: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'],
					dayOfWeek: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์", "อาทิตย์"]
				},
				pl: { // Polish
					months: ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"],
					dayOfWeekShort: ["nd", "pn", "wt", "śr", "cz", "pt", "sb"],
					dayOfWeek: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]
				},
				pt: { // Portuguese
					months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
					dayOfWeekShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
					dayOfWeek: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
				},
				ch: { // Simplified Chinese
					months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
					dayOfWeekShort: ["日", "一", "二", "三", "四", "五", "六"]
				},
				se: { // Swedish
					months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
					dayOfWeekShort: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"]
				},
				kr: { // Korean
					months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
					dayOfWeekShort: ["일", "월", "화", "수", "목", "금", "토"],
					dayOfWeek: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
				},
				it: { // Italian
					months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
					dayOfWeekShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
					dayOfWeek: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"]
				},
				da: { // Dansk
					months: ["January", "Februar", "Marts", "April", "Maj", "Juni", "July", "August", "September", "Oktober", "November", "December"],
					dayOfWeekShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
					dayOfWeek: ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"]
				},
				no: { // Norwegian
					months: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
					dayOfWeekShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
					dayOfWeek: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag']
				},
				ja: { // Japanese
					months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
					dayOfWeekShort: ["日", "月", "火", "水", "木", "金", "土"],
					dayOfWeek: ["日曜", "月曜", "火曜", "水曜", "木曜", "金曜", "土曜"]
				},
				vi: { // Vietnamese
					months: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
					dayOfWeekShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
					dayOfWeek: ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"]
				},
				sl: { // Slovenščina
					months: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"],
					dayOfWeekShort: ["Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"],
					dayOfWeek: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota"]
				},
				cs: { // Čeština
					months: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
					dayOfWeekShort: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"]
				},
				hu: { // Hungarian
					months: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
					dayOfWeekShort: ["Va", "Hé", "Ke", "Sze", "Cs", "Pé", "Szo"],
					dayOfWeek: ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"]
				},
				az: { //Azerbaijanian (Azeri)
					months: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"],
					dayOfWeekShort: ["B", "Be", "Ça", "Ç", "Ca", "C", "Ş"],
					dayOfWeek: ["Bazar", "Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə"]
				},
				bs: { //Bosanski
					months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
					dayOfWeekShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
					dayOfWeek: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"]
				},
				ca: { //Català
					months: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
					dayOfWeekShort: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
					dayOfWeek: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"]
				},
				'en-GB': { //English (British)
					months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
					dayOfWeekShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
					dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
				},
				et: { //"Eesti"
					months: ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"],
					dayOfWeekShort: ["P", "E", "T", "K", "N", "R", "L"],
					dayOfWeek: ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"]
				},
				eu: { //Euskara
					months: ["Urtarrila", "Otsaila", "Martxoa", "Apirila", "Maiatza", "Ekaina", "Uztaila", "Abuztua", "Iraila", "Urria", "Azaroa", "Abendua"],
					dayOfWeekShort: ["Ig.", "Al.", "Ar.", "Az.", "Og.", "Or.", "La."],
					dayOfWeek: ['Igandea', 'Astelehena', 'Asteartea', 'Asteazkena', 'Osteguna', 'Ostirala', 'Larunbata']
				},
				fi: { //Finnish (Suomi)
					months: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
					dayOfWeekShort: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
					dayOfWeek: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"]
				},
				gl: { //Galego
					months: ["Xan", "Feb", "Maz", "Abr", "Mai", "Xun", "Xul", "Ago", "Set", "Out", "Nov", "Dec"],
					dayOfWeekShort: ["Dom", "Lun", "Mar", "Mer", "Xov", "Ven", "Sab"],
					dayOfWeek: ["Domingo", "Luns", "Martes", "Mércores", "Xoves", "Venres", "Sábado"]
				},
				hr: { //Hrvatski
					months: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
					dayOfWeekShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
					dayOfWeek: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"]
				},
				ko: { //Korean (한국어)
					months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
					dayOfWeekShort: ["일", "월", "화", "수", "목", "금", "토"],
					dayOfWeek: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
				},
				lt: { //Lithuanian (lietuvių)
					months: ["Sausio", "Vasario", "Kovo", "Balandžio", "Gegužės", "Birželio", "Liepos", "Rugpjūčio", "Rugsėjo", "Spalio", "Lapkričio", "Gruodžio"],
					dayOfWeekShort: ["Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "Šeš"],
					dayOfWeek: ["Sekmadienis", "Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis"]
				},
				lv: { //Latvian (Latviešu)
					months: ["Janvāris", "Februāris", "Marts", "Aprīlis ", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"],
					dayOfWeekShort: ["Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "St"],
					dayOfWeek: ["Svētdiena", "Pirmdiena", "Otrdiena", "Trešdiena", "Ceturtdiena", "Piektdiena", "Sestdiena"]
				},
				mk: { //Macedonian (Македонски)
					months: ["јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"],
					dayOfWeekShort: ["нед", "пон", "вто", "сре", "чет", "пет", "саб"],
					dayOfWeek: ["Недела", "Понеделник", "Вторник", "Среда", "Четврток", "Петок", "Сабота"]
				},
				mn: { //Mongolian (Монгол)
					months: ["1-р сар", "2-р сар", "3-р сар", "4-р сар", "5-р сар", "6-р сар", "7-р сар", "8-р сар", "9-р сар", "10-р сар", "11-р сар", "12-р сар"],
					dayOfWeekShort: ["Дав", "Мяг", "Лха", "Пүр", "Бсн", "Бям", "Ням"],
					dayOfWeek: ["Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба", "Ням"]
				},
				'pt-BR': { //Português(Brasil)
					months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
					dayOfWeekShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
					dayOfWeek: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
				},
				sk: { //Slovenčina
					months: ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"],
					dayOfWeekShort: ["Ne", "Po", "Ut", "St", "Št", "Pi", "So"],
					dayOfWeek: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"]
				},
				sq: { //Albanian (Shqip)
					months: ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"],
					dayOfWeekShort: ["Die", "Hën", "Mar", "Mër", "Enj", "Pre", "Shtu"],
					dayOfWeek: ["E Diel", "E Hënë", "E Martē", "E Mërkurë", "E Enjte", "E Premte", "E Shtunë"]
				},
				'sr-YU': { //Serbian (Srpski)
					months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
					dayOfWeekShort: ["Ned", "Pon", "Uto", "Sre", "čet", "Pet", "Sub"],
					dayOfWeek: ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota"]
				},
				sr: { //Serbian Cyrillic (Српски)
					months: ["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"],
					dayOfWeekShort: ["нед", "пон", "уто", "сре", "чет", "пет", "суб"],
					dayOfWeek: ["Недеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"]
				},
				sv: { //Svenska
					months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
					dayOfWeekShort: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"],
					dayOfWeek: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"]
				},
				'zh-TW': { //Traditional Chinese (繁體中文)
					months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
					dayOfWeekShort: ["日", "一", "二", "三", "四", "五", "六"],
					dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
				},
				zh: { //Simplified Chinese (简体中文)
					months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
					dayOfWeekShort: ["日", "一", "二", "三", "四", "五", "六"],
					dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
				},
				he: { //Hebrew (עברית)
					months: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
					dayOfWeekShort: ['א\'', 'ב\'', 'ג\'', 'ד\'', 'ה\'', 'ו\'', 'שבת'],
					dayOfWeek: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת", "ראשון"]
				},
				hy: { // Armenian
					months: ["Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս", "Հուլիս", "Օգոստոս", "Սեպտեմբեր", "Հոկտեմբեր", "Նոյեմբեր", "Դեկտեմբեր"],
					dayOfWeekShort: ["Կի", "Երկ", "Երք", "Չոր", "Հնգ", "Ուրբ", "Շբթ"],
					dayOfWeek: ["Կիրակի", "Երկուշաբթի", "Երեքշաբթի", "Չորեքշաբթի", "Հինգշաբթի", "Ուրբաթ", "Շաբաթ"]
				},
				kg: { // Kyrgyz
					months: ['Үчтүн айы', 'Бирдин айы', 'Жалган Куран', 'Чын Куран', 'Бугу', 'Кулжа', 'Теке', 'Баш Оона', 'Аяк Оона', 'Тогуздун айы', 'Жетинин айы', 'Бештин айы'],
					dayOfWeekShort: ["Жек", "Дүй", "Шей", "Шар", "Бей", "Жум", "Ише"],
					dayOfWeek: ["Жекшемб", "Дүйшөмб", "Шейшемб", "Шаршемб", "Бейшемби", "Жума", "Ишенб"]
				}
			},
			value: '',
			rtl: false,

			format: 'Y/m/d H:i',
			formatTime: 'H:i',
			formatDate: 'Y/m/d',

			startDate: false, // new Date(), '1986/12/08', '-1970/01/05','-1970/01/05',
			step: 60,
			monthChangeSpinner: true,

			closeOnDateSelect: false,
			closeOnTimeSelect: true,
			closeOnWithoutClick: true,
			closeOnInputClick: true,

			timepicker: true,
			datepicker: true,
			weeks: false,

			defaultTime: false, // use formatTime format (ex. '10:00' for formatTime:	'H:i')
			defaultDate: false, // use formatDate format (ex new Date() or '1986/12/08' or '-1970/01/05' or '-1970/01/05')

			minDate: false,
			maxDate: false,
			minTime: false,
			maxTime: false,
			disabledMinTime: false,
			disabledMaxTime: false,

			allowTimes: [],
			opened: false,
			initTime: true,
			inline: false,
			theme: '',

			onSelectDate: function onSelectDate() {},
			onSelectTime: function onSelectTime() {},
			onChangeMonth: function onChangeMonth() {},
			onChangeYear: function onChangeYear() {},
			onChangeDateTime: function onChangeDateTime() {},
			onShow: function onShow() {},
			onClose: function onClose() {},
			onGenerate: function onGenerate() {},

			withoutCopyright: true,
			inverseButton: false,
			hours12: false,
			next: 'xdsoft_next',
			prev: 'xdsoft_prev',
			dayOfWeekStart: 0,
			parentID: 'body',
			timeHeightInTimePicker: 25,
			timepickerScrollbar: true,
			todayButton: true,
			prevButton: true,
			nextButton: true,
			defaultSelect: true,

			scrollMonth: true,
			scrollTime: true,
			scrollInput: true,

			lazyInit: false,
			mask: false,
			validateOnBlur: true,
			allowBlank: true,
			yearStart: 1950,
			yearEnd: 2050,
			monthStart: 0,
			monthEnd: 11,
			style: '',
			id: '',
			fixed: false,
			roundTime: 'round', // ceil, floor
			className: '',
			weekends: [],
			highlightedDates: [],
			highlightedPeriods: [],
			disabledDates: [],
			disabledWeekDays: [],
			yearOffset: 0,
			beforeShowDay: null,

			enterLikeTab: true,
			showApplyButton: false
		};

		var globalLocaleDefault = 'en',
		    globalLocale = 'en';
		// for locale settings
		$.datetimepicker = {
			setLocale: function setLocale(locale) {
				globalLocale = default_options.i18n[locale] ? locale : globalLocaleDefault;
				// Override Parse and Format Library entities
				Date.monthNames = default_options.i18n[globalLocale].months;
				Date.dayNames = default_options.i18n[globalLocale].dayOfWeek;
			}
		};

		// fix for ie8
		if (!window.getComputedStyle) {
			window.getComputedStyle = function (el, pseudo) {
				this.el = el;
				this.getPropertyValue = function (prop) {
					var re = /(\-([a-z]){1})/g;
					if (prop === 'float') {
						prop = 'styleFloat';
					}
					if (re.test(prop)) {
						prop = prop.replace(re, function (a, b, c) {
							return c.toUpperCase();
						});
					}
					return el.currentStyle[prop] || null;
				};
				return this;
			};
		}
		if (!Array.prototype.indexOf) {
			Array.prototype.indexOf = function (obj, start) {
				var i, j;
				for (i = start || 0, j = this.length; i < j; i += 1) {
					if (this[i] === obj) {
						return i;
					}
				}
				return -1;
			};
		}
		Date.prototype.countDaysInMonth = function () {
			return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
		};
		$.fn.xdsoftScroller = function (percent) {
			return this.each(function () {
				var timeboxparent = $(this),
				    pointerEventToXY = function pointerEventToXY(e) {
					var out = { x: 0, y: 0 },
					    touch;
					if (e.type === 'touchstart' || e.type === 'touchmove' || e.type === 'touchend' || e.type === 'touchcancel') {
						touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
						out.x = touch.clientX;
						out.y = touch.clientY;
					} else if (e.type === 'mousedown' || e.type === 'mouseup' || e.type === 'mousemove' || e.type === 'mouseover' || e.type === 'mouseout' || e.type === 'mouseenter' || e.type === 'mouseleave') {
						out.x = e.clientX;
						out.y = e.clientY;
					}
					return out;
				},
				    move = 0,
				    timebox,
				    parentHeight,
				    height,
				    scrollbar,
				    scroller,
				    maximumOffset = 100,
				    start = false,
				    startY = 0,
				    startTop = 0,
				    h1 = 0,
				    touchStart = false,
				    startTopScroll = 0,
				    calcOffset = function calcOffset() {};
				if (percent === 'hide') {
					timeboxparent.find('.xdsoft_scrollbar').hide();
					return;
				}
				if (!$(this).hasClass('xdsoft_scroller_box')) {
					timebox = timeboxparent.children().eq(0);
					parentHeight = timeboxparent[0].clientHeight;
					height = timebox[0].offsetHeight;
					scrollbar = $('<div class="xdsoft_scrollbar"></div>');
					scroller = $('<div class="xdsoft_scroller"></div>');
					scrollbar.append(scroller);

					timeboxparent.addClass('xdsoft_scroller_box').append(scrollbar);
					calcOffset = function calcOffset(event) {
						var offset = pointerEventToXY(event).y - startY + startTopScroll;
						if (offset < 0) {
							offset = 0;
						}
						if (offset + scroller[0].offsetHeight > h1) {
							offset = h1 - scroller[0].offsetHeight;
						}
						timeboxparent.trigger('scroll_element.xdsoft_scroller', [maximumOffset ? offset / maximumOffset : 0]);
					};

					scroller.on('touchstart.xdsoft_scroller mousedown.xdsoft_scroller', function (event) {
						if (!parentHeight) {
							timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percent]);
						}

						startY = pointerEventToXY(event).y;
						startTopScroll = parseInt(scroller.css('margin-top'), 10);
						h1 = scrollbar[0].offsetHeight;

						if (event.type === 'mousedown') {
							if (document) {
								$(document.body).addClass('xdsoft_noselect');
							}
							$([document.body, window]).on('mouseup.xdsoft_scroller', function arguments_callee() {
								$([document.body, window]).off('mouseup.xdsoft_scroller', arguments_callee).off('mousemove.xdsoft_scroller', calcOffset).removeClass('xdsoft_noselect');
							});
							$(document.body).on('mousemove.xdsoft_scroller', calcOffset);
						} else {
							touchStart = true;
							event.stopPropagation();
							event.preventDefault();
						}
					}).on('touchmove', function (event) {
						if (touchStart) {
							event.preventDefault();
							calcOffset(event);
						}
					}).on('touchend touchcancel', function (event) {
						touchStart = false;
						startTopScroll = 0;
					});

					timeboxparent.on('scroll_element.xdsoft_scroller', function (event, percentage) {
						if (!parentHeight) {
							timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percentage, true]);
						}
						percentage = percentage > 1 ? 1 : percentage < 0 || isNaN(percentage) ? 0 : percentage;

						scroller.css('margin-top', maximumOffset * percentage);

						setTimeout(function () {
							timebox.css('marginTop', -parseInt((timebox[0].offsetHeight - parentHeight) * percentage, 10));
						}, 10);
					}).on('resize_scroll.xdsoft_scroller', function (event, percentage, noTriggerScroll) {
						var percent, sh;
						parentHeight = timeboxparent[0].clientHeight;
						height = timebox[0].offsetHeight;
						percent = parentHeight / height;
						sh = percent * scrollbar[0].offsetHeight;
						if (percent > 1) {
							scroller.hide();
						} else {
							scroller.show();
							scroller.css('height', parseInt(sh > 10 ? sh : 10, 10));
							maximumOffset = scrollbar[0].offsetHeight - scroller[0].offsetHeight;
							if (noTriggerScroll !== true) {
								timeboxparent.trigger('scroll_element.xdsoft_scroller', [percentage || Math.abs(parseInt(timebox.css('marginTop'), 10)) / (height - parentHeight)]);
							}
						}
					});

					timeboxparent.on('mousewheel', function (event) {
						var top = Math.abs(parseInt(timebox.css('marginTop'), 10));

						top = top - event.deltaY * 20;
						if (top < 0) {
							top = 0;
						}

						timeboxparent.trigger('scroll_element.xdsoft_scroller', [top / (height - parentHeight)]);
						event.stopPropagation();
						return false;
					});

					timeboxparent.on('touchstart', function (event) {
						start = pointerEventToXY(event);
						startTop = Math.abs(parseInt(timebox.css('marginTop'), 10));
					});

					timeboxparent.on('touchmove', function (event) {
						if (start) {
							event.preventDefault();
							var coord = pointerEventToXY(event);
							timeboxparent.trigger('scroll_element.xdsoft_scroller', [(startTop - (coord.y - start.y)) / (height - parentHeight)]);
						}
					});

					timeboxparent.on('touchend touchcancel', function (event) {
						start = false;
						startTop = 0;
					});
				}
				timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percent]);
			});
		};

		$.fn.datetimepicker = function (opt) {
			var KEY0 = 48,
			    KEY9 = 57,
			    _KEY0 = 96,
			    _KEY9 = 105,
			    CTRLKEY = 17,
			    DEL = 46,
			    ENTER = 13,
			    ESC = 27,
			    BACKSPACE = 8,
			    ARROWLEFT = 37,
			    ARROWUP = 38,
			    ARROWRIGHT = 39,
			    ARROWDOWN = 40,
			    TAB = 9,
			    F5 = 116,
			    AKEY = 65,
			    CKEY = 67,
			    VKEY = 86,
			    ZKEY = 90,
			    YKEY = 89,
			    ctrlDown = false,
			    options = $.isPlainObject(opt) || !opt ? $.extend(true, {}, default_options, opt) : $.extend(true, {}, default_options),
			    lazyInitTimer = 0,
			    createDateTimePicker,
			    destroyDateTimePicker,
			    lazyInit = function lazyInit(input) {
				input.on('open.xdsoft focusin.xdsoft mousedown.xdsoft', function initOnActionCallback(event) {
					if (input.is(':disabled') || input.data('xdsoft_datetimepicker')) {
						return;
					}
					clearTimeout(lazyInitTimer);
					lazyInitTimer = setTimeout(function () {

						if (!input.data('xdsoft_datetimepicker')) {
							createDateTimePicker(input);
						}
						input.off('open.xdsoft focusin.xdsoft mousedown.xdsoft', initOnActionCallback).trigger('open.xdsoft');
					}, 100);
				});
			};

			createDateTimePicker = function (input) {
				var datetimepicker = $('<div class="xdsoft_datetimepicker xdsoft_noselect"></div>'),
				    xdsoft_copyright = $('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'),
				    datepicker = $('<div class="xdsoft_datepicker active"></div>'),
				    mounth_picker = $('<div class="xdsoft_mounthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button>' + '<div class="xdsoft_label xdsoft_month"><span></span><i></i></div>' + '<div class="xdsoft_label xdsoft_year"><span></span><i></i></div>' + '<button type="button" class="xdsoft_next"></button></div>'),
				    calendar = $('<div class="xdsoft_calendar"></div>'),
				    timepicker = $('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'),
				    timeboxparent = timepicker.find('.xdsoft_time_box').eq(0),
				    timebox = $('<div class="xdsoft_time_variant"></div>'),
				    applyButton = $('<button type="button" class="xdsoft_save_selected blue-gradient-button">Save Selected</button>'),
				   
				/*scrollbar = $('<div class="xdsoft_scrollbar"></div>'),
	   scroller = $('<div class="xdsoft_scroller"></div>'),*/
				monthselect = $('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'),
				    yearselect = $('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>'),
				    triggerAfterOpen = false,
				    XDSoft_datetime,
				   
				//scroll_element,
				xchangeTimer,
				    timerclick,
				    current_time_index,
				    setPos,
				    timer = 0,
				    timer1 = 0,
				    _xdsoft_datetime;

				if (options.id) {
					datetimepicker.attr('id', options.id);
				}
				if (options.style) {
					datetimepicker.attr('style', options.style);
				}
				if (options.weeks) {
					datetimepicker.addClass('xdsoft_showweeks');
				}
				if (options.rtl) {
					datetimepicker.addClass('xdsoft_rtl');
				}

				datetimepicker.addClass('xdsoft_' + options.theme);
				datetimepicker.addClass(options.className);

				mounth_picker.find('.xdsoft_month span').after(monthselect);
				mounth_picker.find('.xdsoft_year span').after(yearselect);

				mounth_picker.find('.xdsoft_month,.xdsoft_year').on('mousedown.xdsoft', function (event) {
					var select = $(this).find('.xdsoft_select').eq(0),
					    val = 0,
					    top = 0,
					    visible = select.is(':visible'),
					    items,
					    i;

					mounth_picker.find('.xdsoft_select').hide();
					if (_xdsoft_datetime.currentTime) {
						val = _xdsoft_datetime.currentTime[$(this).hasClass('xdsoft_month') ? 'getMonth' : 'getFullYear']();
					}

					select[visible ? 'hide' : 'show']();
					for (items = select.find('div.xdsoft_option'), i = 0; i < items.length; i += 1) {
						if (items.eq(i).data('value') === val) {
							break;
						} else {
							top += items[0].offsetHeight;
						}
					}

					select.xdsoftScroller(top / (select.children()[0].offsetHeight - select[0].clientHeight));
					event.stopPropagation();
					return false;
				});

				mounth_picker.find('.xdsoft_select').xdsoftScroller().on('mousedown.xdsoft', function (event) {
					event.stopPropagation();
					event.preventDefault();
				}).on('mousedown.xdsoft', '.xdsoft_option', function (event) {

					if (_xdsoft_datetime.currentTime === undefined || _xdsoft_datetime.currentTime === null) {
						_xdsoft_datetime.currentTime = _xdsoft_datetime.now();
					}

					var year = _xdsoft_datetime.currentTime.getFullYear();
					if (_xdsoft_datetime && _xdsoft_datetime.currentTime) {
						_xdsoft_datetime.currentTime[$(this).parent().parent().hasClass('xdsoft_monthselect') ? 'setMonth' : 'setFullYear']($(this).data('value'));
					}

					$(this).parent().parent().hide();

					datetimepicker.trigger('xchange.xdsoft');
					if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {
						options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
					}

					if (year !== _xdsoft_datetime.currentTime.getFullYear() && $.isFunction(options.onChangeYear)) {
						options.onChangeYear.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
					}
				});

				datetimepicker.setOptions = function (_options) {
					var highlightedDates = {},
					    getCaretPos = function getCaretPos(input) {
						try {
							if (document.selection && document.selection.createRange) {
								var range = document.selection.createRange();
								return range.getBookmark().charCodeAt(2) - 2;
							}
							if (input.setSelectionRange) {
								return input.selectionStart;
							}
						} catch (e) {
							return 0;
						}
					},
					    setCaretPos = function setCaretPos(node, pos) {
						node = typeof node === "string" || _instanceof(node, String) ? document.getElementById(node) : node;
						if (!node) {
							return false;
						}
						if (node.createTextRange) {
							var textRange = node.createTextRange();
							textRange.collapse(true);
							textRange.moveEnd('character', pos);
							textRange.moveStart('character', pos);
							textRange.select();
							return true;
						}
						if (node.setSelectionRange) {
							node.setSelectionRange(pos, pos);
							return true;
						}
						return false;
					},
					    isValidValue = function isValidValue(mask, value) {
						var reg = mask.replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g, '\\$1').replace(/_/g, '{digit+}').replace(/([0-9]{1})/g, '{digit$1}').replace(/\{digit([0-9]{1})\}/g, '[0-$1_]{1}').replace(/\{digit[\+]\}/g, '[0-9_]{1}');
						return new RegExp(reg).test(value);
					};
					options = $.extend(true, {}, options, _options);

					if (_options.allowTimes && $.isArray(_options.allowTimes) && _options.allowTimes.length) {
						options.allowTimes = $.extend(true, [], _options.allowTimes);
					}

					if (_options.weekends && $.isArray(_options.weekends) && _options.weekends.length) {
						options.weekends = $.extend(true, [], _options.weekends);
					}

					if (_options.highlightedDates && $.isArray(_options.highlightedDates) && _options.highlightedDates.length) {
						$.each(_options.highlightedDates, function (index, value) {
							var splitData = $.map(value.split(','), $.trim),
							    exDesc,
							    hDate = new HighlightedDate(Date.parseDate(splitData[0], options.formatDate), splitData[1], splitData[2]),
							    // date, desc, style
							keyDate = hDate.date.dateFormat(options.formatDate);
							if (highlightedDates[keyDate] !== undefined) {
								exDesc = highlightedDates[keyDate].desc;
								if (exDesc && exDesc.length && hDate.desc && hDate.desc.length) {
									highlightedDates[keyDate].desc = exDesc + "\n" + hDate.desc;
								}
							} else {
								highlightedDates[keyDate] = hDate;
							}
						});

						options.highlightedDates = $.extend(true, [], highlightedDates);
					}

					if (_options.highlightedPeriods && $.isArray(_options.highlightedPeriods) && _options.highlightedPeriods.length) {
						highlightedDates = $.extend(true, [], options.highlightedDates);
						$.each(_options.highlightedPeriods, function (index, value) {
							var dateTest, // start date
							dateEnd, desc, hDate, keyDate, exDesc, style;
							if ($.isArray(value)) {
								dateTest = value[0];
								dateEnd = value[1];
								desc = value[2];
								style = value[3];
							} else {
								var splitData = $.map(value.split(','), $.trim);
								dateTest = Date.parseDate(splitData[0], options.formatDate);
								dateEnd = Date.parseDate(splitData[1], options.formatDate);
								desc = splitData[2];
								style = splitData[3];
							}

							while (dateTest <= dateEnd) {
								hDate = new HighlightedDate(dateTest, desc, style);
								keyDate = dateTest.dateFormat(options.formatDate);
								dateTest.setDate(dateTest.getDate() + 1);
								if (highlightedDates[keyDate] !== undefined) {
									exDesc = highlightedDates[keyDate].desc;
									if (exDesc && exDesc.length && hDate.desc && hDate.desc.length) {
										highlightedDates[keyDate].desc = exDesc + "\n" + hDate.desc;
									}
								} else {
									highlightedDates[keyDate] = hDate;
								}
							}
						});

						options.highlightedDates = $.extend(true, [], highlightedDates);
					}

					if (_options.disabledDates && $.isArray(_options.disabledDates) && _options.disabledDates.length) {
						options.disabledDates = $.extend(true, [], _options.disabledDates);
					}

					if (_options.disabledWeekDays && $.isArray(_options.disabledWeekDays) && _options.disabledWeekDays.length) {
						options.disabledWeekDays = $.extend(true, [], _options.disabledWeekDays);
					}

					if ((options.open || options.opened) && !options.inline) {
						input.trigger('open.xdsoft');
					}

					if (options.inline) {
						triggerAfterOpen = true;
						datetimepicker.addClass('xdsoft_inline');
						input.after(datetimepicker).hide();
					}

					if (options.inverseButton) {
						options.next = 'xdsoft_prev';
						options.prev = 'xdsoft_next';
					}

					if (options.datepicker) {
						datepicker.addClass('active');
					} else {
						datepicker.removeClass('active');
					}

					if (options.timepicker) {
						timepicker.addClass('active');
					} else {
						timepicker.removeClass('active');
					}

					if (options.value) {
						_xdsoft_datetime.setCurrentTime(options.value);
						if (input && input.val) {
							input.val(_xdsoft_datetime.str);
						}
					}

					if (isNaN(options.dayOfWeekStart)) {
						options.dayOfWeekStart = 0;
					} else {
						options.dayOfWeekStart = parseInt(options.dayOfWeekStart, 10) % 7;
					}

					if (!options.timepickerScrollbar) {
						timeboxparent.xdsoftScroller('hide');
					}

					if (options.minDate && /^[\+\-](.*)$/.test(options.minDate)) {
						options.minDate = _xdsoft_datetime.strToDateTime(options.minDate).dateFormat(options.formatDate);
					}

					if (options.maxDate && /^[\+\-](.*)$/.test(options.maxDate)) {
						options.maxDate = _xdsoft_datetime.strToDateTime(options.maxDate).dateFormat(options.formatDate);
					}

					applyButton.toggle(options.showApplyButton);

					mounth_picker.find('.xdsoft_today_button').css('visibility', !options.todayButton ? 'hidden' : 'visible');

					mounth_picker.find('.' + options.prev).css('visibility', !options.prevButton ? 'hidden' : 'visible');

					mounth_picker.find('.' + options.next).css('visibility', !options.nextButton ? 'hidden' : 'visible');

					if (options.mask) {
						input.off('keydown.xdsoft');

						if (options.mask === true) {
							options.mask = options.format.replace(/Y/g, '9999').replace(/F/g, '9999').replace(/m/g, '19').replace(/d/g, '39').replace(/H/g, '29').replace(/i/g, '59').replace(/s/g, '59');
						}

						if ($.type(options.mask) === 'string') {
							if (!isValidValue(options.mask, input.val())) {
								input.val(options.mask.replace(/[0-9]/g, '_'));
							}

							input.on('keydown.xdsoft', function (event) {
								var val = this.value,
								    key = event.which,
								    pos,
								    digit;

								if (key >= KEY0 && key <= KEY9 || key >= _KEY0 && key <= _KEY9 || key === BACKSPACE || key === DEL) {
									pos = getCaretPos(this);
									digit = key !== BACKSPACE && key !== DEL ? String.fromCharCode(_KEY0 <= key && key <= _KEY9 ? key - KEY0 : key) : '_';

									if ((key === BACKSPACE || key === DEL) && pos) {
										pos -= 1;
										digit = '_';
									}

									while (/[^0-9_]/.test(options.mask.substr(pos, 1)) && pos < options.mask.length && pos > 0) {
										pos += key === BACKSPACE || key === DEL ? -1 : 1;
									}

									val = val.substr(0, pos) + digit + val.substr(pos + 1);
									if ($.trim(val) === '') {
										val = options.mask.replace(/[0-9]/g, '_');
									} else {
										if (pos === options.mask.length) {
											event.preventDefault();
											return false;
										}
									}

									pos += key === BACKSPACE || key === DEL ? 0 : 1;
									while (/[^0-9_]/.test(options.mask.substr(pos, 1)) && pos < options.mask.length && pos > 0) {
										pos += key === BACKSPACE || key === DEL ? -1 : 1;
									}

									if (isValidValue(options.mask, val)) {
										this.value = val;
										setCaretPos(this, pos);
									} else if ($.trim(val) === '') {
										this.value = options.mask.replace(/[0-9]/g, '_');
									} else {
										input.trigger('error_input.xdsoft');
									}
								} else {
									if ([AKEY, CKEY, VKEY, ZKEY, YKEY].indexOf(key) !== -1 && ctrlDown || [ESC, ARROWUP, ARROWDOWN, ARROWLEFT, ARROWRIGHT, F5, CTRLKEY, TAB, ENTER].indexOf(key) !== -1) {
										return true;
									}
								}

								event.preventDefault();
								return false;
							});
						}
					}
					if (options.validateOnBlur) {
						input.off('blur.xdsoft').on('blur.xdsoft', function () {
							if (options.allowBlank && !$.trim($(this).val()).length) {
								$(this).val(null);
								datetimepicker.data('xdsoft_datetime').empty();
							} else if (!Date.parseDate($(this).val(), options.format)) {
								var splittedHours = +[$(this).val()[0], $(this).val()[1]].join(''),
								    splittedMinutes = +[$(this).val()[2], $(this).val()[3]].join('');

								// parse the numbers as 0312 => 03:12
								if (!options.datepicker && options.timepicker && splittedHours >= 0 && splittedHours < 24 && splittedMinutes >= 0 && splittedMinutes < 60) {
									$(this).val([splittedHours, splittedMinutes].map(function (item) {
										return item > 9 ? item : '0' + item;
									}).join(':'));
								} else {
									$(this).val(_xdsoft_datetime.now().dateFormat(options.format));
								}

								datetimepicker.data('xdsoft_datetime').setCurrentTime($(this).val());
							} else {
								datetimepicker.data('xdsoft_datetime').setCurrentTime($(this).val());
							}

							datetimepicker.trigger('changedatetime.xdsoft');
						});
					}
					options.dayOfWeekStartPrev = options.dayOfWeekStart === 0 ? 6 : options.dayOfWeekStart - 1;

					datetimepicker.trigger('xchange.xdsoft').trigger('afterOpen.xdsoft');
				};

				datetimepicker.data('options', options).on('mousedown.xdsoft', function (event) {
					event.stopPropagation();
					event.preventDefault();
					yearselect.hide();
					monthselect.hide();
					return false;
				});

				//scroll_element = timepicker.find('.xdsoft_time_box');
				timeboxparent.append(timebox);
				timeboxparent.xdsoftScroller();

				datetimepicker.on('afterOpen.xdsoft', function () {
					timeboxparent.xdsoftScroller();
				});

				datetimepicker.append(datepicker).append(timepicker);

				if (options.withoutCopyright !== true) {
					datetimepicker.append(xdsoft_copyright);
				}

				datepicker.append(mounth_picker).append(calendar).append(applyButton);

				$(options.parentID).append(datetimepicker);

				XDSoft_datetime = function () {
					var _this = this;
					_this.now = function (norecursion) {
						var d = new Date(),
						    date,
						    time;

						if (!norecursion && options.defaultDate) {
							date = _this.strToDateTime(options.defaultDate);
							d.setFullYear(date.getFullYear());
							d.setMonth(date.getMonth());
							d.setDate(date.getDate());
						}

						if (options.yearOffset) {
							d.setFullYear(d.getFullYear() + options.yearOffset);
						}

						if (!norecursion && options.defaultTime) {
							time = _this.strtotime(options.defaultTime);
							d.setHours(time.getHours());
							d.setMinutes(time.getMinutes());
						}
						return d;
					};

					_this.isValidDate = function (d) {
						if (Object.prototype.toString.call(d) !== "[object Date]") {
							return false;
						}
						return !isNaN(d.getTime());
					};

					_this.setCurrentTime = function (dTime) {
						_this.currentTime = typeof dTime === 'string' ? _this.strToDateTime(dTime) : _this.isValidDate(dTime) ? dTime : _this.now();
						datetimepicker.trigger('xchange.xdsoft');
					};

					_this.empty = function () {
						_this.currentTime = null;
					};

					_this.getCurrentTime = function (dTime) {
						return _this.currentTime;
					};

					_this.nextMonth = function () {

						if (_this.currentTime === undefined || _this.currentTime === null) {
							_this.currentTime = _this.now();
						}

						var month = _this.currentTime.getMonth() + 1,
						    year;
						if (month === 12) {
							_this.currentTime.setFullYear(_this.currentTime.getFullYear() + 1);
							month = 0;
						}

						year = _this.currentTime.getFullYear();

						_this.currentTime.setDate(Math.min(new Date(_this.currentTime.getFullYear(), month + 1, 0).getDate(), _this.currentTime.getDate()));
						_this.currentTime.setMonth(month);

						if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {
							options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
						}

						if (year !== _this.currentTime.getFullYear() && $.isFunction(options.onChangeYear)) {
							options.onChangeYear.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
						}

						datetimepicker.trigger('xchange.xdsoft');
						return month;
					};

					_this.prevMonth = function () {

						if (_this.currentTime === undefined || _this.currentTime === null) {
							_this.currentTime = _this.now();
						}

						var month = _this.currentTime.getMonth() - 1;
						if (month === -1) {
							_this.currentTime.setFullYear(_this.currentTime.getFullYear() - 1);
							month = 11;
						}
						_this.currentTime.setDate(Math.min(new Date(_this.currentTime.getFullYear(), month + 1, 0).getDate(), _this.currentTime.getDate()));
						_this.currentTime.setMonth(month);
						if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {
							options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
						}
						datetimepicker.trigger('xchange.xdsoft');
						return month;
					};

					_this.getWeekOfYear = function (datetime) {
						var onejan = new Date(datetime.getFullYear(), 0, 1);
						return Math.ceil(((datetime - onejan) / 86400000 + onejan.getDay() + 1) / 7);
					};

					_this.strToDateTime = function (sDateTime) {
						var tmpDate = [],
						    timeOffset,
						    currentTime;

						if (sDateTime && _instanceof(sDateTime, Date) && _this.isValidDate(sDateTime)) {
							return sDateTime;
						}

						tmpDate = /^(\+|\-)(.*)$/.exec(sDateTime);
						if (tmpDate) {
							tmpDate[2] = Date.parseDate(tmpDate[2], options.formatDate);
						}
						if (tmpDate && tmpDate[2]) {
							timeOffset = tmpDate[2].getTime() - tmpDate[2].getTimezoneOffset() * 60000;
							currentTime = new Date(_this.now(true).getTime() + parseInt(tmpDate[1] + '1', 10) * timeOffset);
						} else {
							currentTime = sDateTime ? Date.parseDate(sDateTime, options.format) : _this.now();
						}

						if (!_this.isValidDate(currentTime)) {
							currentTime = _this.now();
						}

						return currentTime;
					};

					_this.strToDate = function (sDate) {
						if (sDate && _instanceof(sDate, Date) && _this.isValidDate(sDate)) {
							return sDate;
						}

						var currentTime = sDate ? Date.parseDate(sDate, options.formatDate) : _this.now(true);
						if (!_this.isValidDate(currentTime)) {
							currentTime = _this.now(true);
						}
						return currentTime;
					};

					_this.strtotime = function (sTime) {
						if (sTime && _instanceof(sTime, Date) && _this.isValidDate(sTime)) {
							return sTime;
						}
						var currentTime = sTime ? Date.parseDate(sTime, options.formatTime) : _this.now(true);
						if (!_this.isValidDate(currentTime)) {
							currentTime = _this.now(true);
						}
						return currentTime;
					};

					_this.str = function () {
						return _this.currentTime.dateFormat(options.format);
					};
					_this.currentTime = this.now();
				};

				_xdsoft_datetime = new XDSoft_datetime();

				applyButton.on('click', function (e) {
					//pathbrite
					e.preventDefault();
					datetimepicker.data('changed', true);
					_xdsoft_datetime.setCurrentTime(getCurrentValue());
					input.val(_xdsoft_datetime.str());
					datetimepicker.trigger('close.xdsoft');
				});
				mounth_picker.find('.xdsoft_today_button').on('mousedown.xdsoft', function () {
					datetimepicker.data('changed', true);
					_xdsoft_datetime.setCurrentTime(0);
					datetimepicker.trigger('afterOpen.xdsoft');
				}).on('dblclick.xdsoft', function () {
					var currentDate = _xdsoft_datetime.getCurrentTime(),
					    minDate,
					    maxDate;
					currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
					minDate = _xdsoft_datetime.strToDate(options.minDate);
					minDate = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
					if (currentDate < minDate) {
						return;
					}
					maxDate = _xdsoft_datetime.strToDate(options.maxDate);
					maxDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
					if (currentDate > maxDate) {
						return;
					}
					input.val(_xdsoft_datetime.str());
					input.trigger('change');
					datetimepicker.trigger('close.xdsoft');
				});
				mounth_picker.find('.xdsoft_prev,.xdsoft_next').on('mousedown.xdsoft', function () {
					var $this = $(this),
					    timer = 0,
					    stop = false;

					(function arguments_callee1(v) {
						if ($this.hasClass(options.next)) {
							_xdsoft_datetime.nextMonth();
						} else if ($this.hasClass(options.prev)) {
							_xdsoft_datetime.prevMonth();
						}
						if (options.monthChangeSpinner) {
							if (!stop) {
								timer = setTimeout(arguments_callee1, v || 100);
							}
						}
					})(500);

					$([document.body, window]).on('mouseup.xdsoft', function arguments_callee2() {
						clearTimeout(timer);
						stop = true;
						$([document.body, window]).off('mouseup.xdsoft', arguments_callee2);
					});
				});

				timepicker.find('.xdsoft_prev,.xdsoft_next').on('mousedown.xdsoft', function () {
					var $this = $(this),
					    timer = 0,
					    stop = false,
					    period = 110;
					(function arguments_callee4(v) {
						var pheight = timeboxparent[0].clientHeight,
						    height = timebox[0].offsetHeight,
						    top = Math.abs(parseInt(timebox.css('marginTop'), 10));
						if ($this.hasClass(options.next) && height - pheight - options.timeHeightInTimePicker >= top) {
							timebox.css('marginTop', '-' + (top + options.timeHeightInTimePicker) + 'px');
						} else if ($this.hasClass(options.prev) && top - options.timeHeightInTimePicker >= 0) {
							timebox.css('marginTop', '-' + (top - options.timeHeightInTimePicker) + 'px');
						}
						timeboxparent.trigger('scroll_element.xdsoft_scroller', [Math.abs(parseInt(timebox.css('marginTop'), 10) / (height - pheight))]);
						period = period > 10 ? 10 : period - 10;
						if (!stop) {
							timer = setTimeout(arguments_callee4, v || period);
						}
					})(500);
					$([document.body, window]).on('mouseup.xdsoft', function arguments_callee5() {
						clearTimeout(timer);
						stop = true;
						$([document.body, window]).off('mouseup.xdsoft', arguments_callee5);
					});
				});

				xchangeTimer = 0;
				// base handler - generating a calendar and timepicker
				datetimepicker.on('xchange.xdsoft', function (event) {
					clearTimeout(xchangeTimer);
					xchangeTimer = setTimeout(function () {

						if (_xdsoft_datetime.currentTime === undefined || _xdsoft_datetime.currentTime === null) {
							_xdsoft_datetime.currentTime = _xdsoft_datetime.now();
						}

						var table = '',
						    start = new Date(_xdsoft_datetime.currentTime.getFullYear(), _xdsoft_datetime.currentTime.getMonth(), 1, 12, 0, 0),
						    i = 0,
						    j,
						    today = _xdsoft_datetime.now(),
						    maxDate = false,
						    minDate = false,
						    hDate,
						    day,
						    d,
						    y,
						    m,
						    w,
						    classes = [],
						    customDateSettings,
						    newRow = true,
						    time = '',
						    h = '',
						    line_time,
						    description;

						while (start.getDay() !== options.dayOfWeekStart) {
							start.setDate(start.getDate() - 1);
						}

						table += '<table><thead><tr>';

						if (options.weeks) {
							table += '<th></th>';
						}

						for (j = 0; j < 7; j += 1) {
							table += '<th>' + options.i18n[globalLocale].dayOfWeekShort[(j + options.dayOfWeekStart) % 7] + '</th>';
						}

						table += '</tr></thead>';
						table += '<tbody>';

						if (options.maxDate !== false) {
							maxDate = _xdsoft_datetime.strToDate(options.maxDate);
							maxDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate(), 23, 59, 59, 999);
						}

						if (options.minDate !== false) {
							minDate = _xdsoft_datetime.strToDate(options.minDate);
							minDate = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
						}

						while (i < _xdsoft_datetime.currentTime.countDaysInMonth() || start.getDay() !== options.dayOfWeekStart || _xdsoft_datetime.currentTime.getMonth() === start.getMonth()) {
							classes = [];
							i += 1;

							day = start.getDay();
							d = start.getDate();
							y = start.getFullYear();
							m = start.getMonth();
							w = _xdsoft_datetime.getWeekOfYear(start);
							description = '';

							classes.push('xdsoft_date');

							if (options.beforeShowDay && $.isFunction(options.beforeShowDay.call)) {
								customDateSettings = options.beforeShowDay.call(datetimepicker, start);
							} else {
								customDateSettings = null;
							}

							if (maxDate !== false && start > maxDate || minDate !== false && start < minDate || customDateSettings && customDateSettings[0] === false) {
								classes.push('xdsoft_disabled');
							} else if (options.disabledDates.indexOf(start.dateFormat(options.formatDate)) !== -1) {
								classes.push('xdsoft_disabled');
							} else if (options.disabledWeekDays.indexOf(day) !== -1) {
								classes.push('xdsoft_disabled');
							}

							if (customDateSettings && customDateSettings[1] !== "") {
								classes.push(customDateSettings[1]);
							}

							if (_xdsoft_datetime.currentTime.getMonth() !== m) {
								classes.push('xdsoft_other_month');
							}

							if ((options.defaultSelect || datetimepicker.data('changed')) && _xdsoft_datetime.currentTime.dateFormat(options.formatDate) === start.dateFormat(options.formatDate)) {
								classes.push('xdsoft_current');
							}

							if (today.dateFormat(options.formatDate) === start.dateFormat(options.formatDate)) {
								classes.push('xdsoft_today');
							}

							if (start.getDay() === 0 || start.getDay() === 6 || options.weekends.indexOf(start.dateFormat(options.formatDate)) !== -1) {
								classes.push('xdsoft_weekend');
							}

							if (options.highlightedDates[start.dateFormat(options.formatDate)] !== undefined) {
								hDate = options.highlightedDates[start.dateFormat(options.formatDate)];
								classes.push(hDate.style === undefined ? 'xdsoft_highlighted_default' : hDate.style);
								description = hDate.desc === undefined ? '' : hDate.desc;
							}

							if (options.beforeShowDay && $.isFunction(options.beforeShowDay)) {
								classes.push(options.beforeShowDay(start));
							}

							if (newRow) {
								table += '<tr>';
								newRow = false;
								if (options.weeks) {
									table += '<th>' + w + '</th>';
								}
							}

							table += '<td data-date="' + d + '" data-month="' + m + '" data-year="' + y + '"' + ' class="xdsoft_date xdsoft_day_of_week' + start.getDay() + ' ' + classes.join(' ') + '" title="' + description + '">' + '<div>' + d + '</div>' + '</td>';

							if (start.getDay() === options.dayOfWeekStartPrev) {
								table += '</tr>';
								newRow = true;
							}

							start.setDate(d + 1);
						}
						table += '</tbody></table>';

						calendar.html(table);

						mounth_picker.find('.xdsoft_label span').eq(0).text(options.i18n[globalLocale].months[_xdsoft_datetime.currentTime.getMonth()]);
						mounth_picker.find('.xdsoft_label span').eq(1).text(_xdsoft_datetime.currentTime.getFullYear());

						// generate timebox
						time = '';
						h = '';
						m = '';

						line_time = function line_time(h, m) {
							var now = _xdsoft_datetime.now(),
							    optionDateTime,
							    current_time,
							    isALlowTimesInit = options.allowTimes && $.isArray(options.allowTimes) && options.allowTimes.length;
							now.setHours(h);
							h = parseInt(now.getHours(), 10);
							now.setMinutes(m);
							m = parseInt(now.getMinutes(), 10);
							optionDateTime = new Date(_xdsoft_datetime.currentTime);
							optionDateTime.setHours(h);
							optionDateTime.setMinutes(m);
							classes = [];
							if (options.minDateTime !== false && options.minDateTime > optionDateTime || options.maxTime !== false && _xdsoft_datetime.strtotime(options.maxTime).getTime() < now.getTime() || options.minTime !== false && _xdsoft_datetime.strtotime(options.minTime).getTime() > now.getTime()) {
								classes.push('xdsoft_disabled');
							}
							if (options.minDateTime !== false && options.minDateTime > optionDateTime || options.disabledMinTime !== false && now.getTime() > _xdsoft_datetime.strtotime(options.disabledMinTime).getTime() && options.disabledMaxTime !== false && now.getTime() < _xdsoft_datetime.strtotime(options.disabledMaxTime).getTime()) {
								classes.push('xdsoft_disabled');
							}

							current_time = new Date(_xdsoft_datetime.currentTime);
							current_time.setHours(parseInt(_xdsoft_datetime.currentTime.getHours(), 10));

							if (!isALlowTimesInit) {
								current_time.setMinutes(Math[options.roundTime](_xdsoft_datetime.currentTime.getMinutes() / options.step) * options.step);
							}

							if ((options.initTime || options.defaultSelect || datetimepicker.data('changed')) && current_time.getHours() === parseInt(h, 10) && (!isALlowTimesInit && options.step > 59 || current_time.getMinutes() === parseInt(m, 10))) {
								if (options.defaultSelect || datetimepicker.data('changed')) {
									classes.push('xdsoft_current');
								} else if (options.initTime) {
									classes.push('xdsoft_init_time');
								}
							}
							if (parseInt(today.getHours(), 10) === parseInt(h, 10) && parseInt(today.getMinutes(), 10) === parseInt(m, 10)) {
								classes.push('xdsoft_today');
							}
							time += '<div class="xdsoft_time ' + classes.join(' ') + '" data-hour="' + h + '" data-minute="' + m + '">' + now.dateFormat(options.formatTime) + '</div>';
						};

						if (!options.allowTimes || !$.isArray(options.allowTimes) || !options.allowTimes.length) {
							for (i = 0, j = 0; i < (options.hours12 ? 12 : 24); i += 1) {
								for (j = 0; j < 60; j += options.step) {
									h = (i < 10 ? '0' : '') + i;
									m = (j < 10 ? '0' : '') + j;
									line_time(h, m);
								}
							}
						} else {
							for (i = 0; i < options.allowTimes.length; i += 1) {
								h = _xdsoft_datetime.strtotime(options.allowTimes[i]).getHours();
								m = _xdsoft_datetime.strtotime(options.allowTimes[i]).getMinutes();
								line_time(h, m);
							}
						}

						timebox.html(time);

						opt = '';
						i = 0;

						for (i = parseInt(options.yearStart, 10) + options.yearOffset; i <= parseInt(options.yearEnd, 10) + options.yearOffset; i += 1) {
							opt += '<div class="xdsoft_option ' + (_xdsoft_datetime.currentTime.getFullYear() === i ? 'xdsoft_current' : '') + '" data-value="' + i + '">' + i + '</div>';
						}
						yearselect.children().eq(0).html(opt);

						for (i = parseInt(options.monthStart, 10), opt = ''; i <= parseInt(options.monthEnd, 10); i += 1) {
							opt += '<div class="xdsoft_option ' + (_xdsoft_datetime.currentTime.getMonth() === i ? 'xdsoft_current' : '') + '" data-value="' + i + '">' + options.i18n[globalLocale].months[i] + '</div>';
						}
						monthselect.children().eq(0).html(opt);
						$(datetimepicker).trigger('generate.xdsoft');
					}, 10);
					event.stopPropagation();
				}).on('afterOpen.xdsoft', function () {
					if (options.timepicker) {
						var classType, pheight, height, top;
						if (timebox.find('.xdsoft_current').length) {
							classType = '.xdsoft_current';
						} else if (timebox.find('.xdsoft_init_time').length) {
							classType = '.xdsoft_init_time';
						}
						if (classType) {
							pheight = timeboxparent[0].clientHeight;
							height = timebox[0].offsetHeight;
							top = timebox.find(classType).index() * options.timeHeightInTimePicker + 1;
							if (height - pheight < top) {
								top = height - pheight;
							}
							timeboxparent.trigger('scroll_element.xdsoft_scroller', [parseInt(top, 10) / (height - pheight)]);
						} else {
							timeboxparent.trigger('scroll_element.xdsoft_scroller', [0]);
						}
					}
				});

				timerclick = 0;
				calendar.on('click.xdsoft', 'td', function (xdevent) {
					xdevent.stopPropagation(); // Prevents closing of Pop-ups, Modals and Flyouts in Bootstrap
					timerclick += 1;
					var $this = $(this),
					    currentTime = _xdsoft_datetime.currentTime;

					if (currentTime === undefined || currentTime === null) {
						_xdsoft_datetime.currentTime = _xdsoft_datetime.now();
						currentTime = _xdsoft_datetime.currentTime;
					}

					if ($this.hasClass('xdsoft_disabled')) {
						return false;
					}

					currentTime.setDate(1);
					currentTime.setFullYear($this.data('year'));
					currentTime.setMonth($this.data('month'));
					currentTime.setDate($this.data('date'));

					datetimepicker.trigger('select.xdsoft', [currentTime]);

					input.val(_xdsoft_datetime.str());

					if (options.onSelectDate && $.isFunction(options.onSelectDate)) {
						options.onSelectDate.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), xdevent);
					}

					datetimepicker.data('changed', true);
					datetimepicker.trigger('xchange.xdsoft');
					datetimepicker.trigger('changedatetime.xdsoft');
					if ((timerclick > 1 || options.closeOnDateSelect === true || options.closeOnDateSelect === false && !options.timepicker) && !options.inline) {
						datetimepicker.trigger('close.xdsoft');
					}
					setTimeout(function () {
						timerclick = 0;
					}, 200);
				});

				timebox.on('click.xdsoft', 'div', function (xdevent) {
					xdevent.stopPropagation();
					var $this = $(this),
					    currentTime = _xdsoft_datetime.currentTime;

					if (currentTime === undefined || currentTime === null) {
						_xdsoft_datetime.currentTime = _xdsoft_datetime.now();
						currentTime = _xdsoft_datetime.currentTime;
					}

					if ($this.hasClass('xdsoft_disabled')) {
						return false;
					}
					currentTime.setHours($this.data('hour'));
					currentTime.setMinutes($this.data('minute'));
					datetimepicker.trigger('select.xdsoft', [currentTime]);

					datetimepicker.data('input').val(_xdsoft_datetime.str());

					if (options.onSelectTime && $.isFunction(options.onSelectTime)) {
						options.onSelectTime.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), xdevent);
					}
					datetimepicker.data('changed', true);
					datetimepicker.trigger('xchange.xdsoft');
					datetimepicker.trigger('changedatetime.xdsoft');
					if (options.inline !== true && options.closeOnTimeSelect === true) {
						datetimepicker.trigger('close.xdsoft');
					}
				});

				datepicker.on('mousewheel.xdsoft', function (event) {
					if (!options.scrollMonth) {
						return true;
					}
					if (event.deltaY < 0) {
						_xdsoft_datetime.nextMonth();
					} else {
						_xdsoft_datetime.prevMonth();
					}
					return false;
				});

				input.on('mousewheel.xdsoft', function (event) {
					if (!options.scrollInput) {
						return true;
					}
					if (!options.datepicker && options.timepicker) {
						current_time_index = timebox.find('.xdsoft_current').length ? timebox.find('.xdsoft_current').eq(0).index() : 0;
						if (current_time_index + event.deltaY >= 0 && current_time_index + event.deltaY < timebox.children().length) {
							current_time_index += event.deltaY;
						}
						if (timebox.children().eq(current_time_index).length) {
							timebox.children().eq(current_time_index).trigger('mousedown');
						}
						return false;
					}
					if (options.datepicker && !options.timepicker) {
						datepicker.trigger(event, [event.deltaY, event.deltaX, event.deltaY]);
						if (input.val) {
							input.val(_xdsoft_datetime.str());
						}
						datetimepicker.trigger('changedatetime.xdsoft');
						return false;
					}
				});

				datetimepicker.on('changedatetime.xdsoft', function (event) {
					if (options.onChangeDateTime && $.isFunction(options.onChangeDateTime)) {
						var $input = datetimepicker.data('input');
						options.onChangeDateTime.call(datetimepicker, _xdsoft_datetime.currentTime, $input, event);
						delete options.value;
						$input.trigger('change');
					}
				}).on('generate.xdsoft', function () {
					if (options.onGenerate && $.isFunction(options.onGenerate)) {
						options.onGenerate.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
					}
					if (triggerAfterOpen) {
						datetimepicker.trigger('afterOpen.xdsoft');
						triggerAfterOpen = false;
					}
				}).on('click.xdsoft', function (xdevent) {
					xdevent.stopPropagation();
				});

				current_time_index = 0;

				setPos = function () {
					var offset = datetimepicker.data('input').offset(),
					    top = offset.top + datetimepicker.data('input')[0].offsetHeight - 1,
					    left = offset.left,
					    position = "absolute",
					    node;
					if (datetimepicker.data('input').parent().css('direction') == 'rtl') left -= datetimepicker.outerWidth() - datetimepicker.data('input').outerWidth();
					if (options.fixed) {
						top -= $(window).scrollTop();
						left -= $(window).scrollLeft();
						position = "fixed";
					} else {
						if (top + datetimepicker[0].offsetHeight > $(window).height() + $(window).scrollTop()) {
							top = offset.top - datetimepicker[0].offsetHeight + 1;
						}
						if (top < 0) {
							top = 0;
						}
						if (left + datetimepicker[0].offsetWidth > $(window).width()) {
							left = $(window).width() - datetimepicker[0].offsetWidth;
						}
					}

					node = datetimepicker[0];
					do {
						node = node.parentNode;
						if (window.getComputedStyle(node).getPropertyValue('position') === 'relative' && $(window).width() >= node.offsetWidth) {
							left = left - ($(window).width() - node.offsetWidth) / 2;
							break;
						}
					} while (node.nodeName !== 'HTML');
					datetimepicker.css({
						left: left,
						top: top,
						position: position
					});
				};
				datetimepicker.on('open.xdsoft', function (event) {
					var onShow = true;
					if (options.onShow && $.isFunction(options.onShow)) {
						onShow = options.onShow.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), event);
					}
					if (onShow !== false) {
						datetimepicker.show();
						setPos();
						$(window).off('resize.xdsoft', setPos).on('resize.xdsoft', setPos);

						if (options.closeOnWithoutClick) {
							$([document.body, window]).on('mousedown.xdsoft', function arguments_callee6() {
								datetimepicker.trigger('close.xdsoft');
								$([document.body, window]).off('mousedown.xdsoft', arguments_callee6);
							});
						}
					}
				}).on('close.xdsoft', function (event) {
					var onClose = true;
					mounth_picker.find('.xdsoft_month,.xdsoft_year').find('.xdsoft_select').hide();
					if (options.onClose && $.isFunction(options.onClose)) {
						onClose = options.onClose.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), event);
					}
					if (onClose !== false && !options.opened && !options.inline) {
						datetimepicker.hide();
					}
					event.stopPropagation();
				}).on('toggle.xdsoft', function (event) {
					if (datetimepicker.is(':visible')) {
						datetimepicker.trigger('close.xdsoft');
					} else {
						datetimepicker.trigger('open.xdsoft');
					}
				}).data('input', input);

				timer = 0;
				timer1 = 0;

				datetimepicker.data('xdsoft_datetime', _xdsoft_datetime);
				datetimepicker.setOptions(options);

				function getCurrentValue() {
					var ct = false,
					    time;

					if (options.startDate) {
						ct = _xdsoft_datetime.strToDate(options.startDate);
					} else {
						ct = options.value || (input && input.val && input.val() ? input.val() : '');
						if (ct) {
							ct = _xdsoft_datetime.strToDateTime(ct);
						} else if (options.defaultDate) {
							ct = _xdsoft_datetime.strToDateTime(options.defaultDate);
							if (options.defaultTime) {
								time = _xdsoft_datetime.strtotime(options.defaultTime);
								ct.setHours(time.getHours());
								ct.setMinutes(time.getMinutes());
							}
						}
					}

					if (ct && _xdsoft_datetime.isValidDate(ct)) {
						datetimepicker.data('changed', true);
					} else {
						ct = '';
					}

					return ct || 0;
				}

				_xdsoft_datetime.setCurrentTime(getCurrentValue());

				input.data('xdsoft_datetimepicker', datetimepicker).on('open.xdsoft focusin.xdsoft mousedown.xdsoft', function (event) {
					if (input.is(':disabled') || input.data('xdsoft_datetimepicker').is(':visible') && options.closeOnInputClick) {
						return;
					}
					clearTimeout(timer);
					timer = setTimeout(function () {
						if (input.is(':disabled')) {
							return;
						}

						triggerAfterOpen = true;
						_xdsoft_datetime.setCurrentTime(getCurrentValue());

						datetimepicker.trigger('open.xdsoft');
					}, 100);
				}).on('keydown.xdsoft', function (event) {
					var val = this.value,
					    elementSelector,
					    key = event.which;
					if ([ENTER].indexOf(key) !== -1 && options.enterLikeTab) {
						elementSelector = $("input:visible,textarea:visible");
						datetimepicker.trigger('close.xdsoft');
						elementSelector.eq(elementSelector.index(this) + 1).focus();
						return false;
					}
					if ([TAB].indexOf(key) !== -1) {
						datetimepicker.trigger('close.xdsoft');
						return true;
					}
				});
			};
			destroyDateTimePicker = function (input) {
				var datetimepicker = input.data('xdsoft_datetimepicker');
				if (datetimepicker) {
					datetimepicker.data('xdsoft_datetime', null);
					datetimepicker.remove();
					input.data('xdsoft_datetimepicker', null).off('.xdsoft');
					$(window).off('resize.xdsoft');
					$([window, document.body]).off('mousedown.xdsoft');
					if (input.unmousewheel) {
						input.unmousewheel();
					}
				}
			};
			$(document).off('keydown.xdsoftctrl keyup.xdsoftctrl').on('keydown.xdsoftctrl', function (e) {
				if (e.keyCode === CTRLKEY) {
					ctrlDown = true;
				}
			}).on('keyup.xdsoftctrl', function (e) {
				if (e.keyCode === CTRLKEY) {
					ctrlDown = false;
				}
			});
			return this.each(function () {
				var datetimepicker = $(this).data('xdsoft_datetimepicker'),
				    $input;
				if (datetimepicker) {
					if ($.type(opt) === 'string') {
						switch (opt) {
							case 'show':
								$(this).select().focus();
								datetimepicker.trigger('open.xdsoft');
								break;
							case 'hide':
								datetimepicker.trigger('close.xdsoft');
								break;
							case 'toggle':
								datetimepicker.trigger('toggle.xdsoft');
								break;
							case 'destroy':
								destroyDateTimePicker($(this));
								break;
							case 'reset':
								this.value = this.defaultValue;
								if (!this.value || !datetimepicker.data('xdsoft_datetime').isValidDate(Date.parseDate(this.value, options.format))) {
									datetimepicker.data('changed', false);
								}
								datetimepicker.data('xdsoft_datetime').setCurrentTime(this.value);
								break;
							case 'validate':
								$input = datetimepicker.data('input');
								$input.trigger('blur.xdsoft');
								break;
						}
					} else {
						datetimepicker.setOptions(opt);
					}
					return 0;
				}
				if ($.type(opt) !== 'string') {
					if (!options.lazyInit || options.open || options.inline) {
						createDateTimePicker($(this));
					} else {
						lazyInit($(this));
					}
				}
			});
		};
		$.fn.datetimepicker.defaults = default_options;

		function HighlightedDate(date, desc, style) {
			"use strict";

			this.date = date;
			this.desc = desc;
			this.style = style;
		}
	});
	/*!
	 * jQuery Mousewheel 3.1.13
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 */

	(function (factory) {
		// if ( typeof define === 'function' && define.amd ) {
		//     // AMD. Register as an anonymous module.
		//     define(['jquery'], factory);
		// } else if (typeof exports === 'object') {
		//     // Node/CommonJS style for Browserify
		//     module.exports = factory;
		// } else {
		// Browser globals
		factory(jQuery);
		// }
	})(function ($) {

		var toFix = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
		    toBind = 'onwheel' in document || document.documentMode >= 9 ? ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
		    slice = Array.prototype.slice,
		    nullLowestDeltaTimeout,
		    lowestDelta;

		if ($.event.fixHooks) {
			for (var i = toFix.length; i;) {
				$.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
			}
		}

		var special = $.event.special.mousewheel = {
			version: '3.1.12',

			setup: function setup() {
				if (this.addEventListener) {
					for (var i = toBind.length; i;) {
						this.addEventListener(toBind[--i], handler, false);
					}
				} else {
					this.onmousewheel = handler;
				}
				// Store the line height and page height for this particular element
				$.data(this, 'mousewheel-line-height', special.getLineHeight(this));
				$.data(this, 'mousewheel-page-height', special.getPageHeight(this));
			},

			teardown: function teardown() {
				if (this.removeEventListener) {
					for (var i = toBind.length; i;) {
						this.removeEventListener(toBind[--i], handler, false);
					}
				} else {
					this.onmousewheel = null;
				}
				// Clean up the data we added to the element
				$.removeData(this, 'mousewheel-line-height');
				$.removeData(this, 'mousewheel-page-height');
			},

			getLineHeight: function getLineHeight(elem) {
				var $elem = $(elem),
				    $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
				if (!$parent.length) {
					$parent = $('body');
				}
				return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
			},

			getPageHeight: function getPageHeight(elem) {
				return $(elem).height();
			},

			settings: {
				adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
				normalizeOffset: true // calls getBoundingClientRect for each event
			}
		};

		$.fn.extend({
			mousewheel: function mousewheel(fn) {
				return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
			},

			unmousewheel: function unmousewheel(fn) {
				return this.unbind('mousewheel', fn);
			}
		});

		function handler(event) {
			var orgEvent = event || window.event,
			    args = slice.call(arguments, 1),
			    delta = 0,
			    deltaX = 0,
			    deltaY = 0,
			    absDelta = 0,
			    offsetX = 0,
			    offsetY = 0;
			event = $.event.fix(orgEvent);
			event.type = 'mousewheel';

			// Old school scrollwheel delta
			if ('detail' in orgEvent) {
				deltaY = orgEvent.detail * -1;
			}
			if ('wheelDelta' in orgEvent) {
				deltaY = orgEvent.wheelDelta;
			}
			if ('wheelDeltaY' in orgEvent) {
				deltaY = orgEvent.wheelDeltaY;
			}
			if ('wheelDeltaX' in orgEvent) {
				deltaX = orgEvent.wheelDeltaX * -1;
			}

			// Firefox < 17 horizontal scrolling related to DOMMouseScroll event
			if ('axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
				deltaX = deltaY * -1;
				deltaY = 0;
			}

			// Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
			delta = deltaY === 0 ? deltaX : deltaY;

			// New school wheel delta (wheel event)
			if ('deltaY' in orgEvent) {
				deltaY = orgEvent.deltaY * -1;
				delta = deltaY;
			}
			if ('deltaX' in orgEvent) {
				deltaX = orgEvent.deltaX;
				if (deltaY === 0) {
					delta = deltaX * -1;
				}
			}

			// No change actually happened, no reason to go any further
			if (deltaY === 0 && deltaX === 0) {
				return;
			}

			// Need to convert lines and pages to pixels if we aren't already in pixels
			// There are three delta modes:
			//   * deltaMode 0 is by pixels, nothing to do
			//   * deltaMode 1 is by lines
			//   * deltaMode 2 is by pages
			if (orgEvent.deltaMode === 1) {
				var lineHeight = $.data(this, 'mousewheel-line-height');
				delta *= lineHeight;
				deltaY *= lineHeight;
				deltaX *= lineHeight;
			} else if (orgEvent.deltaMode === 2) {
				var pageHeight = $.data(this, 'mousewheel-page-height');
				delta *= pageHeight;
				deltaY *= pageHeight;
				deltaX *= pageHeight;
			}

			// Store lowest absolute delta to normalize the delta values
			absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));

			if (!lowestDelta || absDelta < lowestDelta) {
				lowestDelta = absDelta;

				// Adjust older deltas if necessary
				if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
					lowestDelta /= 40;
				}
			}

			// Adjust older deltas if necessary
			if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
				// Divide all the things by 40!
				delta /= 40;
				deltaX /= 40;
				deltaY /= 40;
			}

			// Get a whole, normalized value for the deltas
			delta = Math[delta >= 1 ? 'floor' : 'ceil'](delta / lowestDelta);
			deltaX = Math[deltaX >= 1 ? 'floor' : 'ceil'](deltaX / lowestDelta);
			deltaY = Math[deltaY >= 1 ? 'floor' : 'ceil'](deltaY / lowestDelta);

			// Normalise offsetX and offsetY properties
			if (special.settings.normalizeOffset && this.getBoundingClientRect) {
				var boundingRect = this.getBoundingClientRect();
				offsetX = event.clientX - boundingRect.left;
				offsetY = event.clientY - boundingRect.top;
			}

			// Add information to the event object
			event.deltaX = deltaX;
			event.deltaY = deltaY;
			event.deltaFactor = lowestDelta;
			event.offsetX = offsetX;
			event.offsetY = offsetY;
			// Go ahead and set deltaMode to 0 since we converted to pixels
			// Although this is a little odd since we overwrite the deltaX/Y
			// properties with normalized deltas.
			event.deltaMode = 0;

			// Add event and delta to the front of the arguments
			args.unshift(event, delta, deltaX, deltaY);

			// Clearout lowestDelta after sometime to better
			// handle multiple device types that give different
			// a different lowestDelta
			// Ex: trackpad = 3 and mouse wheel = 120
			if (nullLowestDeltaTimeout) {
				clearTimeout(nullLowestDeltaTimeout);
			}
			nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

			return ($.event.dispatch || $.event.handle).apply(this, args);
		}

		function nullLowestDelta() {
			lowestDelta = null;
		}

		function shouldAdjustOldDeltas(orgEvent, absDelta) {
			// If this is an older event and the delta is divisable by 120,
			// then we are assuming that the browser is treating this as an
			// older mouse wheel event and that we should divide the deltas
			// by 40 to try and get a more usable deltaFactor.
			// Side note, this actually impacts the reported scroll distance
			// in older browsers and can cause scrolling to be slower than native.
			// Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
			return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
		}
	});
	/*
	 * Copyright (C) 2004 Baron Schwartz <baron at sequent dot org>
	 * Modified by Jonathan Gotti aka malko <jgotti at jgotti dot org>
	 *
	 * This program is free software; you can redistribute it and/or modify it
	 * under the terms of the GNU Lesser General Public License as published by the
	 * Free Software Foundation, version 2.1.
	 *
	 * This program is distributed in the hope that it will be useful, but WITHOUT
	 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
	 * FOR A PARTICULAR PURPOSE.  See the GNU Lesser General Public License for more
	 * details.
	 */
	/* jshint laxbreak:true*/
	!(function (factory) {
		// if ( typeof define === 'function' && define.amd ) {
		// 	define([], factory);
		// } else if (typeof exports === 'object') {
		// 	module.exports = factory;
		// } else {
		factory();
		// }
	})(function () {
		"use strict";

		var parseFunctions = {};
		var parseRegexes = [];
		var formatFunctions = {};
		var charFormatters = {
			d: function d(date) {
				return stringLeftPad(date.getDate(), 2, '0');
			},
			D: function D(date) {
				return Date.dayNames[date.getDay()].substring(0, 3);
			},
			j: function j(date) {
				return date.getDate();
			},
			l: function l(date) {
				return Date.dayNames[date.getDay()];
			},
			S: function S(date) {
				return date.getSuffix();
			},
			w: function w(date) {
				return date.getDay();
			},
			z: function z(date) {
				return date.getDayOfYear();
			},
			W: function W(date) {
				return date.getWeekOfYear();
			},
			F: function F(date) {
				return Date.monthNames[date.getMonth()];
			},
			m: function m(date) {
				return stringLeftPad(date.getMonth() + 1, 2, '0');
			},
			M: function M(date) {
				return Date.monthNames[date.getMonth()].substring(0, 3);
			},
			n: function n(date) {
				return date.getMonth() + 1;
			},
			t: function t(date) {
				return date.getDaysInMonth();
			},
			L: function L(date) {
				return date.isLeapYear() ? 1 : 0;
			},
			Y: function Y(date) {
				return date.getFullYear();
			},
			y: function y(date) {
				return ('' + date.getFullYear()).substring(2, 4);
			},
			a: function a(date) {
				return date.getHours() < 12 ? 'am' : 'pm';
			},
			A: function A(date) {
				return date.getHours() < 12 ? 'AM' : 'PM';
			},
			g: function g(date) {
				return date.getHours() % 12 ? date.getHours() % 12 : 12;
			},
			G: function G(date) {
				return date.getHours();
			},
			h: function h(date) {
				return stringLeftPad(date.getHours() % 12 ? date.getHours() % 12 : 12, 2, '0');
			},
			H: function H(date) {
				return stringLeftPad(date.getHours(), 2, '0');
			},
			i: function i(date) {
				return stringLeftPad(date.getMinutes(), 2, '0');
			},
			s: function s(date) {
				return stringLeftPad(date.getSeconds(), 2, '0');
			},
			O: function O(date) {
				return date.getGMTOffset();
			},
			T: function T(date) {
				return date.getTimezone();
			},
			Z: function Z(date) {
				return date.getTimezoneOffset() * -60;
			}
		};

		Date.prototype.dateFormat = function (format) {
			formatFunctions[format] || createNewFormat(format);
			return formatFunctions[format](this);
		};

		function createNewFormat(format) {
			var formatters = [];
			var special = false;
			var ch = '';
			for (var i = 0; i < format.length; ++i) {
				ch = format.charAt(i);
				if (!special && ch === "\\") {
					special = true;
				} else if (special) {
					special = false;
					formatters.push(stringEscape(ch));
				} else {
					formatters.push(charFormatters[ch] || stringEscape(ch));
				}
			}
			formatFunctions[format] = getFormatter(formatters);
		}

		function getFormatter(formatters) {
			return function (date) {
				var res = [];
				for (var i = 0, l = formatters.length; i < l; i++) {
					res.push(typeof formatters[i] === 'string' ? formatters[i] : formatters[i](date));
				}
				return res.join('');
			};
		}

		Date.parseDate = function (input, format) {
			parseFunctions[format] || createParser(format);
			return parseFunctions[format](input);
		};

		function getParser(format, regexNum, assigns) {
			return function (input) {
				var d = new Date();
				var results = input.match(parseRegexes[regexNum]);
				if (results && results.length > 0) {
					results.y = d.getFullYear();
					results.m = d.getMonth();
					results.d = d.getDate();
					results.h = -1;
					results.i = -1;
					results.s = -1;
					for (var i = 0, l = assigns.length; i < l; i++) {
						assigns[i](results);
					}
					if (results.y > 0 && results.m >= 0 && results.d > 0 && results.h >= 0 && results.i >= 0 && results.s >= 0) {
						return new Date(results.y, results.m, results.d, results.h, results.i, results.s);
					} else if (results.y > 0 && results.m >= 0 && results.d > 0 && results.h >= 0 && results.i >= 0) {
						return new Date(results.y, results.m, results.d, results.h, results.i);
					} else if (results.y > 0 && results.m >= 0 && results.d > 0 && results.h >= 0) {
						return new Date(results.y, results.m, results.d, results.h);
					} else if (results.y > 0 && results.m >= 0 && results.d > 0) {
						return new Date(results.y, results.m, results.d);
					} else if (results.y > 0 && results.m >= 0) {
						return new Date(results.y, results.m);
					} else if (results.y > 0) {
						return new Date(results.y);
					}
				}
				return null;
			};
		}

		function createParser(format) {
			var regexNum = parseRegexes.length;
			var currentGroup = 1;
			var regex = "";
			var special = false;
			var ch = '';
			var assigns = [];
			var obj;
			for (var i = 0; i < format.length; ++i) {
				ch = format.charAt(i);
				if (!special && ch === "\\") {
					special = true;
				} else if (special) {
					special = false;
					regex += stringEscape(ch);
				} else {
					obj = formatCodeToRegex(ch, currentGroup);
					currentGroup += obj.g;
					regex += obj.s;
					if (obj.g && obj.a) {
						assigns.push(obj.a);
					}
				}
			}

			parseRegexes[regexNum] = new RegExp("^" + regex + "$");
			parseFunctions[format] = getParser(format, regexNum, assigns);
		}

		function formatCodeToRegex(character, currentGroup) {
			switch (character) {
				case "D":
					return { g: 0,
						s: "(?:Sun|Mon|Tue|Wed|Thu|Fri|Sat)" };
				case "j":
				case "d":
					return { g: 1,
						a: function a(results) {
							results.d = parseInt(results[currentGroup], 10);
						},
						s: "(\\d{1,2})"
					};
				case "l":
					return { g: 0,
						s: "(?:" + Date.dayNames.join("|") + ")" };
				case "S":
					return { g: 0,
						s: "(?:st|nd|rd|th)" };
				case "w":
					return { g: 0,
						s: "\\d" };
				case "z":
					return { g: 0,
						s: "(?:\\d{1,3})" };
				case "W":
					return { g: 0,
						s: "(?:\\d{2})" };
				case "F":
					return { g: 1,
						a: function a(results) {
							results.m = parseInt(Date.monthNumbers[results[currentGroup].substring(0, 3)], 10);
						},
						s: "(" + Date.monthNames.join("|") + ")" };
				case "M":
					return { g: 1,
						a: function a(results) {
							results.m = parseInt(Date.monthNumbers[results[currentGroup]], 10);
						},
						s: "(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)" };
				case "n":
				case "m":
					return { g: 1,
						a: function a(results) {
							results.m = parseInt(results[currentGroup], 10) - 1;
						},
						s: "(\\d{1,2})" };
				case "t":
					return { g: 0,
						s: "\\d{1,2}" };
				case "L":
					return { g: 0,
						s: "(?:1|0)" };
				case "Y":
					return { g: 1,
						a: function a(results) {
							results.y = parseInt(results[currentGroup], 10);
						},
						s: "(\\d{4})" };
				case "y":
					return { g: 1,
						a: function a(results) {
							var ty = parseInt(results[currentGroup], 10);
							results.y = ty > Date.y2kYear ? 1900 + ty : 2000 + ty;
						},
						s: "(\\d{1,2})" };
				case "a":
					return { g: 1,
						a: function a(results) {
							if (results[currentGroup] === 'am') {
								if (results.h == 12) {
									results.h = 0;
								}
							} else {
								if (results.h < 12) {
									results.h += 12;
								}
							}
						},
						s: "(am|pm)" };
				case "A":
					return { g: 1,
						a: function a(results) {
							if (results[currentGroup] === 'AM') {
								if (results.h == 12) {
									results.h = 0;
								}
							} else {
								if (results.h < 12) {
									results.h += 12;
								}
							}
						},
						s: "(AM|PM)" };
				case "g":
				case "G":
				case "h":
				case "H":
					return { g: 1,
						a: function a(results) {
							results.h = parseInt(results[currentGroup], 10);
						},
						s: "(\\d{1,2})" };
				case "i":
					return { g: 1,
						a: function a(results) {
							results.i = parseInt(results[currentGroup], 10);
						},
						s: "(\\d{2})" };
				case "s":
					return { g: 1,
						a: function a(results) {
							results.s = parseInt(results[currentGroup], 10);
						},
						s: "(\\d{2})" };
				case "O":
					return { g: 0,
						s: "[+-]\\d{4}" };
				case "T":
					return { g: 0,
						s: "[A-Z]{3}" };
				case "Z":
					return { g: 0,
						s: "[+-]\\d{1,5}" };
				default:
					return { g: 0,
						s: stringEscape(character) };
			}
		}

		Date.prototype.getTimezone = function () {
			return this.toString().replace(/^.*? ([A-Z]{3}) [0-9]{4}.*$/, "$1").replace(/^.*?\(([A-Z])[a-z]+ ([A-Z])[a-z]+ ([A-Z])[a-z]+\)$/, "$1$2$3");
		};

		Date.prototype.getGMTOffset = function () {
			return (this.getTimezoneOffset() > 0 ? "-" : "+") + stringLeftPad(Math.floor(this.getTimezoneOffset() / 60), 2, "0") + stringLeftPad(this.getTimezoneOffset() % 60, 2, "0");
		};

		Date.prototype.getDayOfYear = function () {
			var num = 0;
			Date.daysInMonth[1] = this.isLeapYear() ? 29 : 28;
			for (var i = 0; i < this.getMonth(); ++i) {
				num += Date.daysInMonth[i];
			}
			return num + this.getDate() - 1;
		};

		Date.prototype.getWeekOfYear = function () {
			// Skip to Thursday of this week
			var now = this.getDayOfYear() + (4 - this.getDay());
			// Find the first Thursday of the year
			var jan1 = new Date(this.getFullYear(), 0, 1);
			var then = 7 - jan1.getDay() + 4;
			return stringLeftPad((now - then) / 7 + 1, 2, "0");
		};

		Date.prototype.isLeapYear = function () {
			var year = this.getFullYear();
			return !!((year & 3) === 0 && (year % 100 || year % 400 === 0 && year));
		};

		Date.prototype.getFirstDayOfMonth = function () {
			var day = (this.getDay() - (this.getDate() - 1)) % 7;
			return day < 0 ? day + 7 : day;
		};

		Date.prototype.getLastDayOfMonth = function () {
			var day = (this.getDay() + (Date.daysInMonth[this.getMonth()] - this.getDate())) % 7;
			return day < 0 ? day + 7 : day;
		};

		Date.prototype.getDaysInMonth = function () {
			Date.daysInMonth[1] = this.isLeapYear() ? 29 : 28;
			return Date.daysInMonth[this.getMonth()];
		};

		Date.prototype.getSuffix = function () {
			switch (this.getDate()) {
				case 1:
				case 21:
				case 31:
					return "st";
				case 2:
				case 22:
					return "nd";
				case 3:
				case 23:
					return "rd";
				default:
					return "th";
			}
		};

		function stringEscape(string) {
			return string.replace(/('|\\)/g, "\\$1");
		}

		function stringLeftPad(val, size, ch) {
			var result = "" + val;
			ch = "" + ch || " ";
			while (result.length < size) {
				result = ch + result;
			}
			return result;
		}

		Date.daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		Date.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		Date.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		Date.y2kYear = 50;
		Date.monthNumbers = {
			Jan: 0,
			Feb: 1,
			Mar: 2,
			Apr: 3,
			May: 4,
			Jun: 5,
			Jul: 6,
			Aug: 7,
			Sep: 8,
			Oct: 9,
			Nov: 10,
			Dec: 11 };
		Date.patterns = {
			ISO8601LongPattern: "Y-m-d H:i:s",
			ISO8601ShortPattern: "Y-m-d",
			ShortDatePattern: "n/j/Y",
			LongDatePattern: "l, F d, Y",
			FullDateTimePattern: "l, F d, Y g:i:s A",
			MonthDayPattern: "F d",
			ShortTimePattern: "g:i A",
			LongTimePattern: "g:i:s A",
			SortableDateTimePattern: "Y-m-d\\TH:i:s",
			UniversalSortableDateTimePattern: "Y-m-d H:i:sO",
			YearMonthPattern: "F, Y" };
	});

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';function _instanceof(left,right){if(right != null && right[Symbol.hasInstance]){return right[Symbol.hasInstance](left);}else {return left instanceof right;}}function _typeof(obj){return obj && obj.constructor === Symbol?"symbol":typeof obj;} /*!
	 * FormValidation (http://formvalidation.io)
	 * The best jQuery plugin to validate form fields. Support Bootstrap, Foundation, Pure, SemanticUI, UIKit and custom frameworks
	 *
	 * @version     v0.6.1, built on 2015-02-24 10:14:10 PM
	 * @author      https://twitter.com/nghuuphuoc
	 * @copyright   (c) 2013 - 2015 Nguyen Huu Phuoc
	 * @license     http://formvalidation.io/license/
	 */ // Register the namespace
	window.FormValidation = {AddOn:{}, // Add-ons
	Framework:{}, // Supported frameworks
	I18n:{}, // i18n
	Validator:{} // Available validators
	};if(typeof jQuery === 'undefined'){throw new Error('FormValidation requires jQuery');}(function($){var version=$.fn.jquery.split(' ')[0].split('.');if(+version[0] < 2 && +version[1] < 9 || +version[0] === 1 && +version[1] === 9 && +version[2] < 1){throw new Error('FormValidation requires jQuery version 1.9.1 or higher');}})(jQuery);(function($){ // TODO: Remove backward compatibility in v0.7.0
	/**
	     * Constructor
	     *
	     * @param {jQuery|String} form The form element or selector
	     * @param {Object} options The options
	     * @param {String} [namespace] The optional namespace which is used for data-{namespace}-xxx attributes and internal data.
	     * Currently, it's used to support backward version
	     * @constructor
	     */FormValidation.Base = function(form,options,namespace){this.$form = $(form);this.options = $.extend({},$.fn.formValidation.DEFAULT_OPTIONS,options);this._namespace = namespace || 'fv';this.$invalidFields = $([]); // Array of invalid fields
	this.$submitButton = null; // The submit button which is clicked to submit form
	this.$hiddenButton = null; // Validating status
	this.STATUS_NOT_VALIDATED = 'NOT_VALIDATED';this.STATUS_VALIDATING = 'VALIDATING';this.STATUS_INVALID = 'INVALID';this.STATUS_VALID = 'VALID'; // Determine the event that is fired when user change the field value
	// Most modern browsers supports input event except IE 7, 8.
	// IE 9 supports input event but the event is still not fired if I press the backspace key.
	// Get IE version
	// https://gist.github.com/padolsey/527683/#comment-7595
	var ieVersion=(function(){var v=3,div=document.createElement('div'),a=div.all || [];while((div.innerHTML = '<!--[if gt IE ' + ++v + ']><br><![endif]-->',a[0])) {}return v > 4?v:!v;})();var el=document.createElement('div');this._changeEvent = ieVersion === 9 || !('oninput' in el)?'keyup':'input'; // The flag to indicate that the form is ready to submit when a remote/callback validator returns
	this._submitIfValid = null; // Field elements
	this._cacheFields = {};this._init();};FormValidation.Base.prototype = {constructor:FormValidation.Base, /**
	         * Check if the number of characters of field value exceed the threshold or not
	         *
	         * @param {jQuery} $field The field element
	         * @returns {Boolean}
	         */_exceedThreshold:function _exceedThreshold($field){var ns=this._namespace,field=$field.attr('data-' + ns + '-field'),threshold=this.options.fields[field].threshold || this.options.threshold;if(!threshold){return true;}var cannotType=$.inArray($field.attr('type'),['button','checkbox','file','hidden','image','radio','reset','submit']) !== -1;return cannotType || $field.val().length >= threshold;}, /**
	         * Init form
	         */_init:function _init(){var that=this,ns=this._namespace,options={addOns:{},autoFocus:this.$form.attr('data-' + ns + '-autofocus'),button:{selector:this.$form.attr('data-' + ns + '-button-selector') || this.$form.attr('data-' + ns + '-submitbuttons'), // Support backward
	disabled:this.$form.attr('data-' + ns + '-button-disabled')},control:{valid:this.$form.attr('data-' + ns + '-control-valid'),invalid:this.$form.attr('data-' + ns + '-control-invalid')},err:{clazz:this.$form.attr('data-' + ns + '-err-clazz'),container:this.$form.attr('data-' + ns + '-err-container') || this.$form.attr('data-' + ns + '-container'), // Support backward
	parent:this.$form.attr('data-' + ns + '-err-parent')},events:{formInit:this.$form.attr('data-' + ns + '-events-form-init'),formError:this.$form.attr('data-' + ns + '-events-form-error'),formSuccess:this.$form.attr('data-' + ns + '-events-form-success'),fieldAdded:this.$form.attr('data-' + ns + '-events-field-added'),fieldRemoved:this.$form.attr('data-' + ns + '-events-field-removed'),fieldInit:this.$form.attr('data-' + ns + '-events-field-init'),fieldError:this.$form.attr('data-' + ns + '-events-field-error'),fieldSuccess:this.$form.attr('data-' + ns + '-events-field-success'),fieldStatus:this.$form.attr('data-' + ns + '-events-field-status'),localeChanged:this.$form.attr('data-' + ns + '-events-locale-changed'),validatorError:this.$form.attr('data-' + ns + '-events-validator-error'),validatorSuccess:this.$form.attr('data-' + ns + '-events-validator-success')},excluded:this.$form.attr('data-' + ns + '-excluded'),icon:{valid:this.$form.attr('data-' + ns + '-icon-valid') || this.$form.attr('data-' + ns + '-feedbackicons-valid'), // Support backward
	invalid:this.$form.attr('data-' + ns + '-icon-invalid') || this.$form.attr('data-' + ns + '-feedbackicons-invalid'), // Support backward
	validating:this.$form.attr('data-' + ns + '-icon-validating') || this.$form.attr('data-' + ns + '-feedbackicons-validating'), // Support backward
	feedback:this.$form.attr('data-' + ns + '-icon-feedback')},live:this.$form.attr('data-' + ns + '-live'),locale:this.$form.attr('data-' + ns + '-locale'),message:this.$form.attr('data-' + ns + '-message'),onError:this.$form.attr('data-' + ns + '-onerror'),onSuccess:this.$form.attr('data-' + ns + '-onsuccess'),row:{selector:this.$form.attr('data-' + ns + '-row-selector') || this.$form.attr('data-' + ns + '-group'), // Support backward
	valid:this.$form.attr('data-' + ns + '-row-valid'),invalid:this.$form.attr('data-' + ns + '-row-invalid'),feedback:this.$form.attr('data-' + ns + '-row-feedback')},threshold:this.$form.attr('data-' + ns + '-threshold'),trigger:this.$form.attr('data-' + ns + '-trigger'),verbose:this.$form.attr('data-' + ns + '-verbose'),fields:{}};this.$form // Disable client side validation in HTML 5
	.attr('novalidate','novalidate').addClass(this.options.elementClass) // Disable the default submission first
	.on('submit.' + ns,function(e){e.preventDefault();that.validate();}).on('click.' + ns,this.options.button.selector,function(){that.$submitButton = $(this); // The user just click the submit button
	that._submitIfValid = true;});if(this.options.declarative === true || this.options.declarative === 'true'){ // Find all fields which have either "name" or "data-{namespace}-field" attribute
	this.$form.find('[name], [data-' + ns + '-field]').each(function(){var $field=$(this),field=$field.attr('name') || $field.attr('data-' + ns + '-field'),opts=that._parseOptions($field);if(opts){$field.attr('data-' + ns + '-field',field);options.fields[field] = $.extend({},opts,options.fields[field]);}});}this.options = $.extend(true,this.options,options); // Normalize the err.parent option
	if('string' === typeof this.options.err.parent){this.options.err.parent = new RegExp(this.options.err.parent);} // Support backward
	if(this.options.container){this.options.err.container = this.options.container;delete this.options.container;}if(this.options.feedbackIcons){this.options.icon = $.extend(true,this.options.icon,this.options.feedbackIcons);delete this.options.feedbackIcons;}if(this.options.group){this.options.row.selector = this.options.group;delete this.options.group;}if(this.options.submitButtons){this.options.button.selector = this.options.submitButtons;delete this.options.submitButtons;} // If the locale is not found, reset it to default one
	if(!FormValidation.I18n[this.options.locale]){this.options.locale = $.fn.formValidation.DEFAULT_OPTIONS.locale;} // Parse the add-on options from HTML attributes
	if(this.options.declarative === true || this.options.declarative === 'true'){this.options = $.extend(true,this.options,{addOns:this._parseAddOnOptions()});} // When pressing Enter on any field in the form, the first submit button will do its job.
	// The form then will be submitted.
	// I create a first hidden submit button
	this.$hiddenButton = $('<button/>').attr('type','submit').prependTo(this.$form).addClass('fv-hidden-submit').css({display:'none',width:0,height:0});this.$form.on('click.' + this._namespace,'[type="submit"]',function(e){ // #746: Check if the button click handler returns false
	if(!e.isDefaultPrevented()){var $target=$(e.target), // The button might contain HTML tag
	$button=$target.is('[type="submit"]')?$target.eq(0):$target.parent('[type="submit"]').eq(0); // Don't perform validation when clicking on the submit button/input
	// which aren't defined by the 'button.selector' option
	if(that.options.button.selector && !$button.is(that.options.button.selector) && !$button.is(that.$hiddenButton)){that.$form.off('submit.' + that._namespace).submit();}}});for(var field in this.options.fields) {this._initField(field);} // Init the add-ons
	for(var addOn in this.options.addOns) {if('function' === typeof FormValidation.AddOn[addOn].init){FormValidation.AddOn[addOn].init(this,this.options.addOns[addOn]);}}this.$form.trigger($.Event(this.options.events.formInit),{bv:this, // Support backward
	fv:this,options:this.options}); // Prepare the events
	if(this.options.onSuccess){this.$form.on(this.options.events.formSuccess,function(e){FormValidation.Helper.call(that.options.onSuccess,[e]);});}if(this.options.onError){this.$form.on(this.options.events.formError,function(e){FormValidation.Helper.call(that.options.onError,[e]);});}}, /**
	         * Init field
	         *
	         * @param {String|jQuery} field The field name or field element
	         */_initField:function _initField(field){var ns=this._namespace,fields=$([]);switch(typeof field === 'undefined'?'undefined':_typeof(field)){case 'object':fields = field;field = field.attr('data-' + ns + '-field');break;case 'string':fields = this.getFieldElements(field);fields.attr('data-' + ns + '-field',field);break;default:break;} // We don't need to validate non-existing fields
	if(fields.length === 0){return;}if(this.options.fields[field] === null || this.options.fields[field].validators === null){return;}var validatorName;for(validatorName in this.options.fields[field].validators) {if(!FormValidation.Validator[validatorName]){delete this.options.fields[field].validators[validatorName];}}if(this.options.fields[field].enabled === null){this.options.fields[field].enabled = true;}var that=this,total=fields.length,type=fields.attr('type'),updateAll=total === 1 || 'radio' === type || 'checkbox' === type,trigger=this._getFieldTrigger(fields.eq(0)),events=$.map(trigger,function(item){return item + '.update.' + ns;}).join(' ');for(var i=0;i < total;i++) {var $field=fields.eq(i),row=this.options.fields[field].row || this.options.row.selector,$parent=$field.closest(row), // Allow user to indicate where the error messages are shown
	// Support backward
	container='function' === typeof (this.options.fields[field].container || this.options.fields[field].err || this.options.err.container)?(this.options.fields[field].container || this.options.fields[field].err || this.options.err.container).call(this,$field,this):this.options.fields[field].container || this.options.fields[field].err || this.options.err.container,$message=container && container !== 'tooltip' && container !== 'popover'?$(container):this._getMessageContainer($field,row);if(container && container !== 'tooltip' && container !== 'popover'){$message.addClass(this.options.err.clazz);} // Remove all error messages and feedback icons
	$message.find('.' + this.options.err.clazz.split(' ').join('.') + '[data-' + ns + '-validator][data-' + ns + '-for="' + field + '"]').remove();$parent.find('i[data-' + ns + '-icon-for="' + field + '"]').remove(); // Whenever the user change the field value, mark it as not validated yet
	$field.off(events).on(events,function(){that.updateStatus($(this),that.STATUS_NOT_VALIDATED);}); // Create help block elements for showing the error messages
	$field.data(ns + '.messages',$message);for(validatorName in this.options.fields[field].validators) {$field.data(ns + '.result.' + validatorName,this.STATUS_NOT_VALIDATED);if(!updateAll || i === total - 1){$('<small/>').css('display','none').addClass(this.options.err.clazz).attr('data-' + ns + '-validator',validatorName).attr('data-' + ns + '-for',field).attr('data-' + ns + '-result',this.STATUS_NOT_VALIDATED).html(this._getMessage(field,validatorName)).appendTo($message);} // Init the validator
	if('function' === typeof FormValidation.Validator[validatorName].init){FormValidation.Validator[validatorName].init(this,$field,this.options.fields[field].validators[validatorName]);}} // Prepare the feedback icons
	// Available from Bootstrap 3.1 (http://getbootstrap.com/css/#forms-control-validation)
	if(this.options.fields[field].icon !== false && this.options.fields[field].icon !== 'false' && this.options.icon && this.options.icon.valid && this.options.icon.invalid && this.options.icon.validating && (!updateAll || i === total - 1)){ // $parent.removeClass(this.options.row.valid).removeClass(this.options.row.invalid).addClass(this.options.row.feedback);
	// Keep error messages which are populated from back-end
	$parent.addClass(this.options.row.feedback);var $icon=$('<i/>').css('display','none').addClass(this.options.icon.feedback).attr('data-' + ns + '-icon-for',field).insertAfter($field); // Store the icon as a data of field element
	(!updateAll?$field:fields).data(ns + '.icon',$icon);if('tooltip' === container || 'popover' === container){(!updateAll?$field:fields).on(this.options.events.fieldError,function(){$parent.addClass('fv-has-tooltip');}).on(this.options.events.fieldSuccess,function(){$parent.removeClass('fv-has-tooltip');});$field // Show tooltip/popover message when field gets focus
	.off('focus.container.' + ns).on('focus.container.' + ns,function(){that._showTooltip($field,container);}) // and hide them when losing focus
	.off('blur.container.' + ns).on('blur.container.' + ns,function(){that._hideTooltip($field,container);});}if('string' === typeof this.options.fields[field].icon && this.options.fields[field].icon !== 'true'){$icon.appendTo($(this.options.fields[field].icon));}else {this._fixIcon($field,$icon);}}} // Prepare the events
	fields.on(this.options.events.fieldSuccess,function(e,data){var onSuccess=that.getOptions(data.field,null,'onSuccess');if(onSuccess){FormValidation.Helper.call(onSuccess,[e,data]);}}).on(this.options.events.fieldError,function(e,data){var onError=that.getOptions(data.field,null,'onError');if(onError){FormValidation.Helper.call(onError,[e,data]);}}).on(this.options.events.fieldStatus,function(e,data){var onStatus=that.getOptions(data.field,null,'onStatus');if(onStatus){FormValidation.Helper.call(onStatus,[e,data]);}}).on(this.options.events.validatorError,function(e,data){var onError=that.getOptions(data.field,data.validator,'onError');if(onError){FormValidation.Helper.call(onError,[e,data]);}}).on(this.options.events.validatorSuccess,function(e,data){var onSuccess=that.getOptions(data.field,data.validator,'onSuccess');if(onSuccess){FormValidation.Helper.call(onSuccess,[e,data]);}}); // Set live mode
	this.onLiveChange(fields,'live',function(){if(that._exceedThreshold($(this))){that.validateField($(this));}});fields.trigger($.Event(this.options.events.fieldInit),{bv:this, // Support backward
	fv:this,field:field,element:fields});}, /**
	         * Check if the field is excluded.
	         * Returning true means that the field will not be validated
	         *
	         * @param {jQuery} $field The field element
	         * @returns {Boolean}
	         */_isExcluded:function _isExcluded($field){var ns=this._namespace,excludedAttr=$field.attr('data-' + ns + '-excluded'), // I still need to check the 'name' attribute while initializing the field
	field=$field.attr('data-' + ns + '-field') || $field.attr('name');switch(true){case !!field && this.options.fields && this.options.fields[field] && (this.options.fields[field].excluded === 'true' || this.options.fields[field].excluded === true):case excludedAttr === 'true':case excludedAttr === '':return true;case !!field && this.options.fields && this.options.fields[field] && (this.options.fields[field].excluded === 'false' || this.options.fields[field].excluded === false):case excludedAttr === 'false':return false;default:if(this.options.excluded){ // Convert to array first
	if('string' === typeof this.options.excluded){this.options.excluded = $.map(this.options.excluded.split(','),function(item){ // Trim the spaces
	return $.trim(item);});}var length=this.options.excluded.length;for(var i=0;i < length;i++) {if('string' === typeof this.options.excluded[i] && $field.is(this.options.excluded[i]) || 'function' === typeof this.options.excluded[i] && this.options.excluded[i].call(this,$field,this) === true){return true;}}}return false;}}, /**
	         * Get a field changed trigger event
	         *
	         * @param {jQuery} $field The field element
	         * @returns {String[]} The event names triggered on field change
	         */_getFieldTrigger:function _getFieldTrigger($field){var ns=this._namespace,trigger=$field.data(ns + '.trigger');if(trigger){return trigger;}var type=$field.attr('type'),name=$field.attr('data-' + ns + '-field'),event='radio' === type || 'checkbox' === type || 'file' === type || 'SELECT' === $field.get(0).tagName?'change':this._changeEvent;trigger = ((this.options.fields[name]?this.options.fields[name].trigger:null) || this.options.trigger || event).split(' '); // Since the trigger data is used many times, I need to cache it to use later
	$field.data(ns + '.trigger',trigger);return trigger;}, /**
	         * Get the error message for given field and validator
	         *
	         * @param {String} field The field name
	         * @param {String} validatorName The validator name
	         * @returns {String}
	         */_getMessage:function _getMessage(field,validatorName){if(!this.options.fields[field] || !FormValidation.Validator[validatorName] || !this.options.fields[field].validators || !this.options.fields[field].validators[validatorName]){return '';}switch(true){case !!this.options.fields[field].validators[validatorName].message:return this.options.fields[field].validators[validatorName].message;case !!this.options.fields[field].message:return this.options.fields[field].message;case !!FormValidation.I18n[this.options.locale] && !!FormValidation.I18n[this.options.locale][validatorName] && !!FormValidation.I18n[this.options.locale][validatorName]['default']:return FormValidation.I18n[this.options.locale][validatorName]['default'];default:return this.options.message;}}, /**
	         * Get the element to place the error messages
	         *
	         * @param {jQuery} $field The field element
	         * @param {String} row
	         * @returns {jQuery}
	         */_getMessageContainer:function _getMessageContainer($field,row){if(!this.options.err.parent){throw new Error('The err.parent option is not defined');}var $parent=$field.parent();if($parent.is(row)){return $parent;}var cssClasses=$parent.attr('class');if(!cssClasses){return this._getMessageContainer($parent,row);}if(this.options.err.parent.test(cssClasses)){return $parent;}return this._getMessageContainer($parent,row);}, /**
	         * Parse the add-on options from HTML attributes
	         *
	         * @returns {Object}
	         */_parseAddOnOptions:function _parseAddOnOptions(){var ns=this._namespace,names=this.$form.attr('data-' + ns + '-addons'),addOns=this.options.addOns || {};if(names){names = names.replace(/\s/g,'').split(',');for(var i=0;i < names.length;i++) {if(!addOns[names[i]]){addOns[names[i]] = {};}}} // Try to parse each add-on options
	var addOn,attrMap,attr,option;for(addOn in addOns) {if(!FormValidation.AddOn[addOn]){ // Add-on is not found
	delete addOns[addOn];continue;}attrMap = FormValidation.AddOn[addOn].html5Attributes;if(attrMap){for(attr in attrMap) {option = this.$form.attr('data-' + ns + '-addons-' + addOn.toLowerCase() + '-' + attr.toLowerCase());if(option){addOns[addOn][attrMap[attr]] = option;}}}}return addOns;}, /**
	         * Parse the validator options from HTML attributes
	         *
	         * @param {jQuery} $field The field element
	         * @returns {Object}
	         */_parseOptions:function _parseOptions($field){var ns=this._namespace,field=$field.attr('name') || $field.attr('data-' + ns + '-field'),validators={},validator,v, // Validator name
	attrName,enabled,optionName,optionAttrName,optionValue,html5AttrName,html5AttrMap;for(v in FormValidation.Validator) {validator = FormValidation.Validator[v];attrName = 'data-' + ns + '-' + v.toLowerCase(),enabled = $field.attr(attrName) + '';html5AttrMap = 'function' === typeof validator.enableByHtml5?validator.enableByHtml5($field):null;if(html5AttrMap && enabled !== 'false' || html5AttrMap !== true && ('' === enabled || 'true' === enabled || attrName === enabled.toLowerCase())){ // Try to parse the options via attributes
	validator.html5Attributes = $.extend({},{message:'message',onerror:'onError',onsuccess:'onSuccess',transformer:'transformer'},validator.html5Attributes);validators[v] = $.extend({},html5AttrMap === true?{}:html5AttrMap,validators[v]);for(html5AttrName in validator.html5Attributes) {optionName = validator.html5Attributes[html5AttrName];optionAttrName = 'data-' + ns + '-' + v.toLowerCase() + '-' + html5AttrName,optionValue = $field.attr(optionAttrName);if(optionValue){if('true' === optionValue || optionAttrName === optionValue.toLowerCase()){optionValue = true;}else if('false' === optionValue){optionValue = false;}validators[v][optionName] = optionValue;}}}}var opts={autoFocus:$field.attr('data-' + ns + '-autofocus'),err:$field.attr('data-' + ns + '-err-container') || $field.attr('data-' + ns + '-container'), // Support backward
	excluded:$field.attr('data-' + ns + '-excluded'),icon:$field.attr('data-' + ns + '-icon') || $field.attr('data-' + ns + '-feedbackicons') || (this.options.fields && this.options.fields[field]?this.options.fields[field].feedbackIcons:null), // Support backward
	message:$field.attr('data-' + ns + '-message'),onError:$field.attr('data-' + ns + '-onerror'),onStatus:$field.attr('data-' + ns + '-onstatus'),onSuccess:$field.attr('data-' + ns + '-onsuccess'),row:$field.attr('data-' + ns + '-row') || $field.attr('data-' + ns + '-group') || (this.options.fields && this.options.fields[field]?this.options.fields[field].group:null), // Support backward
	selector:$field.attr('data-' + ns + '-selector'),threshold:$field.attr('data-' + ns + '-threshold'),transformer:$field.attr('data-' + ns + '-transformer'),trigger:$field.attr('data-' + ns + '-trigger'),verbose:$field.attr('data-' + ns + '-verbose'),validators:validators},emptyOptions=$.isEmptyObject(opts), // Check if the field options are set using HTML attributes
	emptyValidators=$.isEmptyObject(validators); // Check if the field validators are set using HTML attributes
	if(!emptyValidators || !emptyOptions && this.options.fields && this.options.fields[field]){opts.validators = validators;return opts;}else {return null;}}, /**
	         * Called when all validations are completed
	         */_submit:function _submit(){var isValid=this.isValid();if(isValid === null){return;}var eventType=isValid?this.options.events.formSuccess:this.options.events.formError,e=$.Event(eventType);this.$form.trigger(e); // Call default handler
	// Check if whether the submit button is clicked
	if(this.$submitButton){isValid?this._onSuccess(e):this._onError(e);}}, // ~~~~~~
	// Events
	// ~~~~~~
	/**
	         * The default handler of error.form.fv event.
	         * It will be called when there is a invalid field
	         *
	         * @param {jQuery.Event} e The jQuery event object
	         */_onError:function _onError(e){if(e.isDefaultPrevented()){return;}if('submitted' === this.options.live){ // Enable live mode
	this.options.live = 'enabled';var that=this;for(var field in this.options.fields) {(function(f){var fields=that.getFieldElements(f);if(fields.length){that.onLiveChange(fields,'live',function(){if(that._exceedThreshold($(this))){that.validateField($(this));}});}})(field);}} // Determined the first invalid field which will be focused on automatically
	var ns=this._namespace;for(var i=0;i < this.$invalidFields.length;i++) {var $field=this.$invalidFields.eq(i),autoFocus=this.isOptionEnabled($field.attr('data-' + ns + '-field'),'autoFocus');if(autoFocus){ // Focus the field
	$field.focus();break;}}}, /**
	         * Called after validating a field element
	         *
	         * @param {jQuery} $field The field element
	         * @param {String} [validatorName] The validator name
	         */_onFieldValidated:function _onFieldValidated($field,validatorName){var ns=this._namespace,field=$field.attr('data-' + ns + '-field'),validators=this.options.fields[field].validators,counter={},numValidators=0,data={bv:this, // Support backward
	fv:this,field:field,element:$field,validator:validatorName,result:$field.data(ns + '.response.' + validatorName)}; // Trigger an event after given validator completes
	if(validatorName){switch($field.data(ns + '.result.' + validatorName)){case this.STATUS_INVALID:$field.trigger($.Event(this.options.events.validatorError),data);break;case this.STATUS_VALID:$field.trigger($.Event(this.options.events.validatorSuccess),data);break;default:break;}}counter[this.STATUS_NOT_VALIDATED] = 0;counter[this.STATUS_VALIDATING] = 0;counter[this.STATUS_INVALID] = 0;counter[this.STATUS_VALID] = 0;for(var v in validators) {if(validators[v].enabled === false){continue;}numValidators++;var result=$field.data(ns + '.result.' + v);if(result){counter[result]++;}}if(counter[this.STATUS_VALID] === numValidators){ // Remove from the list of invalid fields
	this.$invalidFields = this.$invalidFields.not($field);$field.trigger($.Event(this.options.events.fieldSuccess),data);} // If all validators are completed and there is at least one validator which doesn't pass
	else if((counter[this.STATUS_NOT_VALIDATED] === 0 || !this.isOptionEnabled(field,'verbose')) && counter[this.STATUS_VALIDATING] === 0 && counter[this.STATUS_INVALID] > 0){ // Add to the list of invalid fields
	this.$invalidFields = this.$invalidFields.add($field);$field.trigger($.Event(this.options.events.fieldError),data);}}, /**
	         * The default handler of success.form.fv event.
	         * It will be called when all the fields are valid
	         *
	         * @param {jQuery.Event} e The jQuery event object
	         */_onSuccess:function _onSuccess(e){if(e.isDefaultPrevented()){return;} // Submit the form
	this.disableSubmitButtons(true).defaultSubmit();}, // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// Abstract methods
	// Need to be implemented by sub-class that supports specific framework
	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	/**
	         * Specific framework might need to adjust the icon position
	         *
	         * @param {jQuery} $field The field element
	         * @param {jQuery} $icon The icon element
	         */_fixIcon:function _fixIcon($field,$icon){}, /**
	         * Create a tooltip or popover
	         * It will be shown when focusing on the field
	         *
	         * @param {jQuery} $field The field element
	         * @param {String} message The message
	         * @param {String} type Can be 'tooltip' or 'popover'
	         */_createTooltip:function _createTooltip($field,message,type){}, /**
	         * Destroy the tooltip or popover
	         *
	         * @param {jQuery} $field The field element
	         * @param {String} type Can be 'tooltip' or 'popover'
	         */_destroyTooltip:function _destroyTooltip($field,type){}, /**
	         * Hide a tooltip or popover
	         *
	         * @param {jQuery} $field The field element
	         * @param {String} type Can be 'tooltip' or 'popover'
	         */_hideTooltip:function _hideTooltip($field,type){}, /**
	         * Show a tooltip or popover
	         *
	         * @param {jQuery} $field The field element
	         * @param {String} type Can be 'tooltip' or 'popover'
	         */_showTooltip:function _showTooltip($field,type){}, // ~~~~~~~~~~~~~~
	// Public methods
	// ~~~~~~~~~~~~~~
	/**
	         * Submit the form using default submission.
	         * It also does not perform any validations when submitting the form
	         */defaultSubmit:function defaultSubmit(){var ns=this._namespace;if(this.$submitButton){ // Create hidden input to send the submit buttons
	$('<input/>').attr({'type':'hidden',name:this.$submitButton.attr('name')}).attr('data-' + ns + '-submit-hidden','').val(this.$submitButton.val()).appendTo(this.$form);} // Submit form
	this.$form.off('submit.' + ns).submit();}, /**
	         * Disable/enable submit buttons
	         *
	         * @param {Boolean} disabled Can be true or false
	         * @returns {FormValidation.Base}
	         */disableSubmitButtons:function disableSubmitButtons(disabled){if(!disabled){this.$form.find(this.options.button.selector).removeAttr('disabled').removeClass(this.options.button.disabled);}else if(this.options.live !== 'disabled'){ // Don't disable if the live validating mode is disabled
	this.$form.find(this.options.button.selector).attr('disabled','disabled').addClass(this.options.button.disabled);}return this;}, /**
	         * Retrieve the field elements by given name
	         *
	         * @param {String} field The field name
	         * @returns {null|jQuery[]}
	         */getFieldElements:function getFieldElements(field){if(!this._cacheFields[field]){if(this.options.fields[field] && this.options.fields[field].selector){ // Look for the field inside the form first
	var f=this.$form.find(this.options.fields[field].selector); // If not found, search in entire document
	this._cacheFields[field] = f.length?f:$(this.options.fields[field].selector);}else {this._cacheFields[field] = this.$form.find('[name="' + field + '"]');}}return this._cacheFields[field];}, /**
	         * Get the field value after applying transformer
	         *
	         * @param {String|jQuery} field The field name or field element
	         * @param {String} validatorName The validator name
	         * @returns {String}
	         */getFieldValue:function getFieldValue(field,validatorName){var $field,ns=this._namespace;if('string' === typeof field){$field = this.getFieldElements(field);if($field.length === 0){return null;}}else {$field = field;field = $field.attr('data-' + ns + '-field');}if(!field || !this.options.fields[field]){return $field.val();}var transformer=(this.options.fields[field].validators && this.options.fields[field].validators[validatorName]?this.options.fields[field].validators[validatorName].transformer:null) || this.options.fields[field].transformer;return transformer?FormValidation.Helper.call(transformer,[$field,validatorName,this]):$field.val();}, /**
	         * Get the namespace
	         *
	         * @returns {String}
	         */getNamespace:function getNamespace(){return this._namespace;}, /**
	         * Get the field options
	         *
	         * @param {String|jQuery} [field] The field name or field element. If it is not set, the method returns the form options
	         * @param {String} [validator] The name of validator. It null, the method returns form options
	         * @param {String} [option] The option name
	         * @return {String|Object}
	         */getOptions:function getOptions(field,validator,option){var ns=this._namespace;if(!field){return option?this.options[option]:this.options;}if('object' === (typeof field === 'undefined'?'undefined':_typeof(field))){field = field.attr('data-' + ns + '-field');}if(!this.options.fields[field]){return null;}var options=this.options.fields[field];if(!validator){return option?options[option]:options;}if(!options.validators || !options.validators[validator]){return null;}return option?options.validators[validator][option]:options.validators[validator];}, /**
	         * Get the validating result of field
	         *
	         * @param {String|jQuery} field The field name or field element
	         * @param {String} validatorName The validator name
	         * @returns {String} The status. Can be 'NOT_VALIDATED', 'VALIDATING', 'INVALID' or 'VALID'
	         */getStatus:function getStatus(field,validatorName){var ns=this._namespace;switch(typeof field === 'undefined'?'undefined':_typeof(field)){case 'object':return field.data(ns + '.result.' + validatorName);case 'string': /* falls through */default:return this.getFieldElements(field).eq(0).data(ns + '.result.' + validatorName);}}, /**
	         * Check whether or not a field option is enabled
	         *
	         * @param {String} field The field name
	         * @param {String} option The option name, "verbose", "autoFocus", for example
	         * @returns {Boolean}
	         */isOptionEnabled:function isOptionEnabled(field,option){if(this.options.fields[field] && (this.options.fields[field][option] === 'true' || this.options.fields[field][option] === true)){return true;}if(this.options.fields[field] && (this.options.fields[field][option] === 'false' || this.options.fields[field][option] === false)){return false;}return this.options[option] === 'true' || this.options[option] === true;}, /**
	         * Check the form validity
	         *
	         * @returns {Boolean|null} Returns one of three values
	         * - true, if all fields are valid
	         * - false, if there is one invalid field
	         * - null, if there is at least one field which is not validated yet or being validated
	         */isValid:function isValid(){for(var field in this.options.fields) {var isValidField=this.isValidField(field);if(isValidField === null){return null;}if(isValidField === false){return false;}}return true;}, /**
	         * Check if all fields inside a given container are valid.
	         * It's useful when working with a wizard-like such as tab, collapse
	         *
	         * @param {String|jQuery} container The container selector or element
	         * @returns {Boolean|null} Returns one of three values
	         * - true, if all fields inside the container are valid
	         * - false, if there is one invalid field inside the container
	         * - null, if the container consists of at least one field which is not validated yet or being validated
	         */isValidContainer:function isValidContainer(container){var that=this,ns=this._namespace,fields=[],$container='string' === typeof container?$(container):container;if($container.length === 0){return true;}$container.find('[data-' + ns + '-field]').each(function(){var $field=$(this);if(!that._isExcluded($field)){fields.push($field);}});var total=fields.length;for(var i=0;i < total;i++) {var $f=fields[i],field=$f.attr('data-' + ns + '-field'),$errors=$f.data(ns + '.messages').find('.' + this.options.err.clazz.split(' ').join('.') + '[data-' + ns + '-validator][data-' + ns + '-for="' + field + '"]');if($errors.filter('[data-' + ns + '-result="' + this.STATUS_INVALID + '"]').length > 0){return false;} // If the field is not validated
	if($errors.filter('[data-' + ns + '-result="' + this.STATUS_NOT_VALIDATED + '"]').length > 0 || $errors.filter('[data-' + ns + '-result="' + this.STATUS_VALIDATING + '"]').length > 0){return null;}}return true;}, /**
	         * Check if the field is valid or not
	         *
	         * @param {String|jQuery} field The field name or field element
	         * @returns {Boolean|null} Returns one of three values
	         * - true, if the field passes all validators
	         * - false, if the field doesn't pass any validator
	         * - null, if there is at least one validator which isn't validated yet or being validated
	         */isValidField:function isValidField(field){var ns=this._namespace,fields=$([]);switch(typeof field === 'undefined'?'undefined':_typeof(field)){case 'object':fields = field;field = field.attr('data-' + ns + '-field');break;case 'string':fields = this.getFieldElements(field);break;default:break;}if(fields.length === 0 || !this.options.fields[field] || this.options.fields[field].enabled === false){return true;}var type=fields.attr('type'),total='radio' === type || 'checkbox' === type?1:fields.length,$field,validatorName,status;for(var i=0;i < total;i++) {$field = fields.eq(i);if(this._isExcluded($field)){continue;}for(validatorName in this.options.fields[field].validators) {if(this.options.fields[field].validators[validatorName].enabled === false){continue;}status = $field.data(ns + '.result.' + validatorName);if(status === this.STATUS_VALIDATING || status === this.STATUS_NOT_VALIDATED){return null;}else if(status === this.STATUS_INVALID){return false;}}}return true;}, /**
	         * Detach a handler function for a field live change event
	         *
	         * @param {jQuery[]} $fields The field elements
	         * @param {String} namespace The event namespace
	         * @returns {FormValidation.Base}
	         */offLiveChange:function offLiveChange($fields,namespace){if($fields === null || $fields.length === 0){return this;}var ns=this._namespace,trigger=this._getFieldTrigger($fields.eq(0)),events=$.map(trigger,function(item){return item + '.' + namespace + '.' + ns;}).join(' ');$fields.off(events);return this;}, /**
	         * Attach a handler function for a field live change event
	         *
	         * @param {jQuery[]} $fields The field elements
	         * @param {String} namespace The event namespace
	         * @param {Function} handler The handler function
	         * @returns {FormValidation.Base}
	         */onLiveChange:function onLiveChange($fields,namespace,handler){if($fields === null || $fields.length === 0){return this;}var ns=this._namespace,trigger=this._getFieldTrigger($fields.eq(0)),events=$.map(trigger,function(item){return item + '.' + namespace + '.' + ns;}).join(' ');switch(this.options.live){case 'submitted':break;case 'disabled':$fields.off(events);break;case 'enabled': /* falls through */default:$fields.off(events).on(events,function(e){handler.apply(this,arguments);});break;}return this;}, /**
	         * Update the error message
	         *
	         * @param {String|jQuery} field The field name or field element
	         * @param {String} validator The validator name
	         * @param {String} message The message
	         * @returns {FormValidation.Base}
	         */updateMessage:function updateMessage(field,validator,message){var that=this,ns=this._namespace,$fields=$([]);switch(typeof field === 'undefined'?'undefined':_typeof(field)){case 'object':$fields = field;field = field.attr('data-' + ns + '-field');break;case 'string':$fields = this.getFieldElements(field);break;default:break;}$fields.each(function(){$(this).data(ns + '.messages').find('.' + that.options.err.clazz + '[data-' + ns + '-validator="' + validator + '"][data-' + ns + '-for="' + field + '"]').html(message);});}, /**
	         * Update all validating results of field
	         *
	         * @param {String|jQuery} field The field name or field element
	         * @param {String} status The status. Can be 'NOT_VALIDATED', 'VALIDATING', 'INVALID' or 'VALID'
	         * @param {String} [validatorName] The validator name. If null, the method updates validity result for all validators
	         * @returns {FormValidation.Base}
	         */updateStatus:function updateStatus(field,status,validatorName){var ns=this._namespace,fields=$([]);switch(typeof field === 'undefined'?'undefined':_typeof(field)){case 'object':fields = field;field = field.attr('data-' + ns + '-field');break;case 'string':fields = this.getFieldElements(field);break;default:break;}if(!field || !this.options.fields[field]){return this;}if(status === this.STATUS_NOT_VALIDATED){ // Reset the flag
	// To prevent the form from doing submit when a deferred validator returns true while typing
	this._submitIfValid = false;}var that=this,type=fields.attr('type'),row=this.options.fields[field].row || this.options.row.selector,total='radio' === type || 'checkbox' === type?1:fields.length;for(var i=0;i < total;i++) {var $field=fields.eq(i);if(this._isExcluded($field)){continue;}var $parent=$field.closest(row),$message=$field.data(ns + '.messages'),$allErrors=$message.find('.' + this.options.err.clazz.split(' ').join('.') + '[data-' + ns + '-validator][data-' + ns + '-for="' + field + '"]'),$errors=validatorName?$allErrors.filter('[data-' + ns + '-validator="' + validatorName + '"]'):$allErrors,$icon=$field.data(ns + '.icon'), // Support backward
	container='function' === typeof (this.options.fields[field].container || this.options.fields[field].err || this.options.err.container)?(this.options.fields[field].container || this.options.fields[field].err || this.options.err.container).call(this,$field,this):this.options.fields[field].container || this.options.fields[field].err || this.options.err.container,isValidField=null; // Update status
	if(validatorName){$field.data(ns + '.result.' + validatorName,status);}else {for(var v in this.options.fields[field].validators) {$field.data(ns + '.result.' + v,status);}} // Show/hide error elements and feedback icons
	$errors.attr('data-' + ns + '-result',status);switch(status){case this.STATUS_VALIDATING:isValidField = null;this.disableSubmitButtons(true);$field.removeClass(this.options.control.valid).removeClass(this.options.control.invalid);$parent.removeClass(this.options.row.valid).removeClass(this.options.row.invalid);if($icon){$icon.removeClass(this.options.icon.valid).removeClass(this.options.icon.invalid).addClass(this.options.icon.validating).show();}break;case this.STATUS_INVALID:isValidField = false;this.disableSubmitButtons(true);$field.removeClass(this.options.control.valid).addClass(this.options.control.invalid);$parent.removeClass(this.options.row.valid).addClass(this.options.row.invalid);if($icon){$icon.removeClass(this.options.icon.valid).removeClass(this.options.icon.validating).addClass(this.options.icon.invalid).show();}break;case this.STATUS_VALID:var isValidating=$allErrors.filter('[data-' + ns + '-result="' + this.STATUS_VALIDATING + '"]').length > 0,isNotValidated=$allErrors.filter('[data-' + ns + '-result="' + this.STATUS_NOT_VALIDATED + '"]').length > 0; // If the field is valid (passes all validators)
	isValidField = isValidating || isNotValidated? // There are some validators that have not done
	null:$allErrors.filter('[data-' + ns + '-result="' + this.STATUS_VALID + '"]').length === $allErrors.length; // All validators are completed
	$field.removeClass(this.options.control.valid).removeClass(this.options.control.invalid);if(isValidField === true){this.disableSubmitButtons(this.isValid() === false);$field.addClass(this.options.control.valid);}else if(isValidField === false){this.disableSubmitButtons(true);$field.addClass(this.options.control.invalid);}if($icon){$icon.removeClass(this.options.icon.invalid).removeClass(this.options.icon.validating).removeClass(this.options.icon.valid).addClass(isValidField === null?'':isValidField?this.options.icon.valid:isValidating?this.options.icon.validating:this.options.icon.invalid).show();}var isValidContainer=this.isValidContainer($parent);if(isValidContainer !== null){$parent.removeClass(this.options.row.valid).removeClass(this.options.row.invalid).addClass(isValidContainer?this.options.row.valid:this.options.row.invalid);}break;case this.STATUS_NOT_VALIDATED: /* falls through */default:isValidField = null;this.disableSubmitButtons(false);$field.removeClass(this.options.control.valid).removeClass(this.options.control.invalid);$parent.removeClass(this.options.row.valid).removeClass(this.options.row.invalid);if($icon){$icon.removeClass(this.options.icon.valid).removeClass(this.options.icon.invalid).removeClass(this.options.icon.validating).hide();}break;}if($icon && ('tooltip' === container || 'popover' === container)){isValidField === false? // Only show the first error message
	this._createTooltip($field,$allErrors.filter('[data-' + ns + '-result="' + that.STATUS_INVALID + '"]').eq(0).html(),container):this._destroyTooltip($field,container);}else {status === this.STATUS_INVALID?$errors.show():$errors.hide();} // Trigger an event
	$field.trigger($.Event(this.options.events.fieldStatus),{bv:this, // Support backward
	fv:this,field:field,element:$field,status:status});this._onFieldValidated($field,validatorName);}return this;}, /**
	         * Validate the form
	         *
	         * @returns {FormValidation.Base}
	         */validate:function validate(){if($.isEmptyObject(this.options.fields)){this._submit();return this;}this.disableSubmitButtons(true);this._submitIfValid = false;for(var field in this.options.fields) {this.validateField(field);}this._submit();this._submitIfValid = true;return this;}, /**
	         * Validate given field
	         *
	         * @param {String|jQuery} field The field name or field element
	         * @returns {FormValidation.Base}
	         */validateField:function validateField(field){var ns=this._namespace,fields=$([]);switch(typeof field === 'undefined'?'undefined':_typeof(field)){case 'object':fields = field;field = field.attr('data-' + ns + '-field');break;case 'string':fields = this.getFieldElements(field);break;default:break;}if(fields.length === 0 || !this.options.fields[field] || this.options.fields[field].enabled === false){return this;}var that=this,type=fields.attr('type'),total='radio' === type || 'checkbox' === type?1:fields.length,updateAll='radio' === type || 'checkbox' === type,validators=this.options.fields[field].validators,verbose=this.isOptionEnabled(field,'verbose'),validatorName,validateResult;for(var i=0;i < total;i++) {var $field=fields.eq(i);if(this._isExcluded($field)){continue;}var stop=false;for(validatorName in validators) {if($field.data(ns + '.dfs.' + validatorName)){$field.data(ns + '.dfs.' + validatorName).reject();}if(stop){break;} // Don't validate field if it is already done
	var result=$field.data(ns + '.result.' + validatorName);if(result === this.STATUS_VALID || result === this.STATUS_INVALID){this._onFieldValidated($field,validatorName);continue;}else if(validators[validatorName].enabled === false){this.updateStatus(updateAll?field:$field,this.STATUS_VALID,validatorName);continue;}$field.data(ns + '.result.' + validatorName,this.STATUS_VALIDATING);validateResult = FormValidation.Validator[validatorName].validate(this,$field,validators[validatorName]); // validateResult can be a $.Deferred object ...
	if('object' === (typeof validateResult === 'undefined'?'undefined':_typeof(validateResult)) && validateResult.resolve){this.updateStatus(updateAll?field:$field,this.STATUS_VALIDATING,validatorName);$field.data(ns + '.dfs.' + validatorName,validateResult);validateResult.done(function($f,v,response){ // v is validator name
	$f.removeData(ns + '.dfs.' + v).data(ns + '.response.' + v,response);if(response.message){that.updateMessage($f,v,response.message);}that.updateStatus(updateAll?$f.attr('data-' + ns + '-field'):$f,response.valid?that.STATUS_VALID:that.STATUS_INVALID,v);if(response.valid && that._submitIfValid === true){ // If a remote validator returns true and the form is ready to submit, then do it
	that._submit();}else if(!response.valid && !verbose){stop = true;}});} // ... or object { valid: true/false, message: 'dynamic message', otherKey: value, ... }
	else if('object' === (typeof validateResult === 'undefined'?'undefined':_typeof(validateResult)) && validateResult.valid !== undefined){$field.data(ns + '.response.' + validatorName,validateResult);if(validateResult.message){this.updateMessage(updateAll?field:$field,validatorName,validateResult.message);}this.updateStatus(updateAll?field:$field,validateResult.valid?this.STATUS_VALID:this.STATUS_INVALID,validatorName);if(!validateResult.valid && !verbose){break;}} // ... or a boolean value
	else if('boolean' === typeof validateResult){$field.data(ns + '.response.' + validatorName,validateResult);this.updateStatus(updateAll?field:$field,validateResult?this.STATUS_VALID:this.STATUS_INVALID,validatorName);if(!validateResult && !verbose){break;}}}}return this;}, // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// Useful APIs which aren't used internally
	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	/**
	         * Add a new field
	         *
	         * @param {String|jQuery} field The field name or field element
	         * @param {Object} [options] The validator rules
	         * @returns {FormValidation.Base}
	         */addField:function addField(field,options){var ns=this._namespace,fields=$([]);switch(typeof field === 'undefined'?'undefined':_typeof(field)){case 'object':fields = field;field = field.attr('data-' + ns + '-field') || field.attr('name');break;case 'string':delete this._cacheFields[field];fields = this.getFieldElements(field);break;default:break;}fields.attr('data-' + ns + '-field',field);var type=fields.attr('type'),total='radio' === type || 'checkbox' === type?1:fields.length;for(var i=0;i < total;i++) {var $field=fields.eq(i); // Try to parse the options from HTML attributes
	var opts=this._parseOptions($field);opts = opts === null?options:$.extend(true,options,opts);this.options.fields[field] = $.extend(true,this.options.fields[field],opts); // Update the cache
	this._cacheFields[field] = this._cacheFields[field]?this._cacheFields[field].add($field):$field; // Init the element
	this._initField('checkbox' === type || 'radio' === type?field:$field);}this.disableSubmitButtons(false); // Trigger an event
	this.$form.trigger($.Event(this.options.events.fieldAdded),{field:field,element:fields,options:this.options.fields[field]});return this;}, /**
	         * Destroy the plugin
	         * It will remove all error messages, feedback icons and turn off the events
	         */destroy:function destroy(){var ns=this._namespace,i,field,fields,$field,validator,$icon,row; // Destroy the validators first
	for(field in this.options.fields) {fields = this.getFieldElements(field);for(i = 0;i < fields.length;i++) {$field = fields.eq(i);for(validator in this.options.fields[field].validators) {if($field.data(ns + '.dfs.' + validator)){$field.data(ns + '.dfs.' + validator).reject();}$field.removeData(ns + '.result.' + validator).removeData(ns + '.response.' + validator).removeData(ns + '.dfs.' + validator); // Destroy the validator
	if('function' === typeof FormValidation.Validator[validator].destroy){FormValidation.Validator[validator].destroy(this,$field,this.options.fields[field].validators[validator]);}}}} // Remove messages and icons
	for(field in this.options.fields) {fields = this.getFieldElements(field);row = this.options.fields[field].row || this.options.row.selector;for(i = 0;i < fields.length;i++) {$field = fields.eq(i);$field // Remove all error messages
	.data(ns + '.messages').find('.' + this.options.err.clazz.split(' ').join('.') + '[data-' + ns + '-validator][data-' + ns + '-for="' + field + '"]').remove().end().end().removeData(ns + '.messages') // Remove feedback classes
	.closest(row).removeClass(this.options.row.valid).removeClass(this.options.row.invalid).removeClass(this.options.row.feedback).end() // Turn off events
	.off('.' + ns).removeAttr('data-' + ns + '-field'); // Remove feedback icons, tooltip/popover container
	// Support backward
	var container='function' === typeof (this.options.fields[field].container || this.options.fields[field].err || this.options.err.container)?(this.options.fields[field].container || this.options.fields[field].err || this.options.err.container).call(this,$field,this):this.options.fields[field].container || this.options.fields[field].err || this.options.err.container;if('tooltip' === container || 'popover' === container){this._destroyTooltip($field,container);}$icon = $field.data(ns + '.icon');if($icon){$icon.remove();}$field.removeData(ns + '.icon') // It's safe to remove trigger data here, because it might be used when destroying the validator
	.removeData(ns + '.trigger');}} // Destroy the add-ons
	for(var addOn in this.options.addOns) {if('function' === typeof FormValidation.AddOn[addOn].destroy){FormValidation.AddOn[addOn].destroy(this,this.options.addOns[addOn]);}}this.disableSubmitButtons(false); // Enable submit buttons
	this.$hiddenButton.remove(); // Remove the hidden button
	this.$form.removeClass(this.options.elementClass).off('.' + ns).removeData('bootstrapValidator') // Support backward
	.removeData('formValidation') // Remove generated hidden elements
	.find('[data-' + ns + '-submit-hidden]').remove().end().find('[type="submit"]').off('click.' + ns);}, /**
	         * Enable/Disable all validators to given field
	         *
	         * @param {String} field The field name
	         * @param {Boolean} enabled Enable/Disable field validators
	         * @param {String} [validatorName] The validator name. If null, all validators will be enabled/disabled
	         * @returns {FormValidation.Base}
	         */enableFieldValidators:function enableFieldValidators(field,enabled,validatorName){var validators=this.options.fields[field].validators; // Enable/disable particular validator
	if(validatorName && validators && validators[validatorName] && validators[validatorName].enabled !== enabled){this.options.fields[field].validators[validatorName].enabled = enabled;this.updateStatus(field,this.STATUS_NOT_VALIDATED,validatorName);} // Enable/disable all validators
	else if(!validatorName && this.options.fields[field].enabled !== enabled){this.options.fields[field].enabled = enabled;for(var v in validators) {this.enableFieldValidators(field,enabled,v);}}return this;}, /**
	         * Some validators have option which its value is dynamic.
	         * For example, the zipCode validator has the country option which might be changed dynamically by a select element.
	         *
	         * @param {jQuery|String} field The field name or element
	         * @param {String|Function} option The option which can be determined by:
	         * - a string
	         * - name of field which defines the value
	         * - name of function which returns the value
	         * - a function returns the value
	         *
	         * The callback function has the format of
	         *      callback: function(value, validator, $field) {
	         *          // value is the value of field
	         *          // validator is the BootstrapValidator instance
	         *          // $field is the field element
	         *      }
	         *
	         * @returns {String}
	         */getDynamicOption:function getDynamicOption(field,option){var $field='string' === typeof field?this.getFieldElements(field):field,value=$field.val(); // Option can be determined by
	// ... a function
	if('function' === typeof option){return FormValidation.Helper.call(option,[value,this,$field]);} // ... value of other field
	else if('string' === typeof option){var $f=this.getFieldElements(option);if($f.length){return $f.val();} // ... return value of callback
	else {return FormValidation.Helper.call(option,[value,this,$field]) || option;}}return null;}, /**
	         * Get the form element
	         *
	         * @returns {jQuery}
	         */getForm:function getForm(){return this.$form;}, /**
	         * Get the list of invalid fields
	         *
	         * @returns {jQuery[]}
	         */getInvalidFields:function getInvalidFields(){return this.$invalidFields;}, /**
	         * Get the current locale
	         *
	         * @return {String}
	         */getLocale:function getLocale(){return this.options.locale;}, /**
	         * Get the error messages
	         *
	         * @param {String|jQuery} [field] The field name or field element
	         * If the field is not defined, the method returns all error messages of all fields
	         * @param {String} [validator] The name of validator
	         * If the validator is not defined, the method returns error messages of all validators
	         * @returns {String[]}
	         */getMessages:function getMessages(field,validator){var that=this,ns=this._namespace,messages=[],$fields=$([]);switch(true){case field && 'object' === (typeof field === 'undefined'?'undefined':_typeof(field)):$fields = field;break;case field && 'string' === typeof field:var f=this.getFieldElements(field);if(f.length > 0){var type=f.attr('type');$fields = 'radio' === type || 'checkbox' === type?f.eq(0):f;}break;default:$fields = this.$invalidFields;break;}var filter=validator?'[data-' + ns + '-validator="' + validator + '"]':'';$fields.each(function(){messages = messages.concat($(this).data(ns + '.messages').find('.' + that.options.err.clazz + '[data-' + ns + '-for="' + $(this).attr('data-' + ns + '-field') + '"][data-' + ns + '-result="' + that.STATUS_INVALID + '"]' + filter).map(function(){var v=$(this).attr('data-' + ns + '-validator'),f=$(this).attr('data-' + ns + '-for');return that.options.fields[f].validators[v].enabled === false?'':$(this).html();}).get());});return messages;}, /**
	         * Returns the clicked submit button
	         *
	         * @returns {jQuery}
	         */getSubmitButton:function getSubmitButton(){return this.$submitButton;}, /**
	         * Remove a given field
	         *
	         * @param {String|jQuery} field The field name or field element
	         * @returns {FormValidation.Base}
	         */removeField:function removeField(field){var ns=this._namespace,fields=$([]);switch(typeof field === 'undefined'?'undefined':_typeof(field)){case 'object':fields = field;field = field.attr('data-' + ns + '-field') || field.attr('name');fields.attr('data-' + ns + '-field',field);break;case 'string':fields = this.getFieldElements(field);break;default:break;}if(fields.length === 0){return this;}var type=fields.attr('type'),total='radio' === type || 'checkbox' === type?1:fields.length;for(var i=0;i < total;i++) {var $field=fields.eq(i); // Remove from the list of invalid fields
	this.$invalidFields = this.$invalidFields.not($field); // Update the cache
	this._cacheFields[field] = this._cacheFields[field].not($field);}if(!this._cacheFields[field] || this._cacheFields[field].length === 0){delete this.options.fields[field];}if('checkbox' === type || 'radio' === type){this._initField(field);}this.disableSubmitButtons(false); // Trigger an event
	this.$form.trigger($.Event(this.options.events.fieldRemoved),{field:field,element:fields});return this;}, /**
	         * Reset given field
	         *
	         * @param {String|jQuery} field The field name or field element
	         * @param {Boolean} [resetValue] If true, the method resets field value to empty or remove checked/selected attribute (for radio/checkbox)
	         * @returns {FormValidation.Base}
	         */resetField:function resetField(field,resetValue){var ns=this._namespace,$fields=$([]);switch(typeof field === 'undefined'?'undefined':_typeof(field)){case 'object':$fields = field;field = field.attr('data-' + ns + '-field');break;case 'string':$fields = this.getFieldElements(field);break;default:break;}var total=$fields.length;if(this.options.fields[field]){for(var i=0;i < total;i++) {for(var validator in this.options.fields[field].validators) {$fields.eq(i).removeData(ns + '.dfs.' + validator);}}} // Mark field as not validated yet
	this.updateStatus(field,this.STATUS_NOT_VALIDATED);if(resetValue){var type=$fields.attr('type');'radio' === type || 'checkbox' === type?$fields.prop('checked',false).removeAttr('selected'):$fields.val('');}return this;}, /**
	         * Reset the form
	         *
	         * @param {Boolean} [resetValue] If true, the method resets field value to empty or remove checked/selected attribute (for radio/checkbox)
	         * @returns {FormValidation.Base}
	         */resetForm:function resetForm(resetValue){for(var field in this.options.fields) {this.resetField(field,resetValue);}this.$invalidFields = $([]);this.$submitButton = null; // Enable submit buttons
	this.disableSubmitButtons(false);return this;}, /**
	         * Revalidate given field
	         * It's used when you need to revalidate the field which its value is updated by other plugin
	         *
	         * @param {String|jQuery} field The field name of field element
	         * @returns {FormValidation.Base}
	         */revalidateField:function revalidateField(field){this.updateStatus(field,this.STATUS_NOT_VALIDATED).validateField(field);return this;}, /**
	         * Set the locale
	         *
	         * @param {String} locale The locale in format of countrycode_LANGUAGECODE
	         * @returns {FormValidation.Base}
	         */setLocale:function setLocale(locale){this.options.locale = locale;this.$form.trigger($.Event(this.options.events.localeChanged),{locale:locale,bv:this, // Support backward
	fv:this});return this;}, /**
	         * Update the option of a specific validator
	         *
	         * @param {String|jQuery} field The field name or field element
	         * @param {String} validator The validator name
	         * @param {String} option The option name
	         * @param {String} value The value to set
	         * @returns {FormValidation.Base}
	         */updateOption:function updateOption(field,validator,option,value){var ns=this._namespace;if('object' === (typeof field === 'undefined'?'undefined':_typeof(field))){field = field.attr('data-' + ns + '-field');}if(this.options.fields[field] && this.options.fields[field].validators[validator]){this.options.fields[field].validators[validator][option] = value;this.updateStatus(field,this.STATUS_NOT_VALIDATED,validator);}return this;}, /**
	         * Validate given container
	         * It can be used with isValidContainer() when you want to work with wizard form
	         *
	         * @param {String|jQuery} container The container selector or element
	         * @returns {FormValidation.Base}
	         */validateContainer:function validateContainer(container){var that=this,ns=this._namespace,fields=[],$container='string' === typeof container?$(container):container;if($container.length === 0){return this;}$container.find('[data-' + ns + '-field]').each(function(){var $field=$(this);if(!that._isExcluded($field)){fields.push($field);}});var total=fields.length;for(var i=0;i < total;i++) {this.validateField(fields[i]);}return this;}}; // Plugin definition
	$.fn.formValidation = function(option){var params=arguments;return this.each(function(){var $this=$(this),data=$this.data('formValidation'),options='object' === (typeof option === 'undefined'?'undefined':_typeof(option)) && option;if(!data){var framework=(options.framework || $this.attr('data-fv-framework') || 'bootstrap').toLowerCase(),clazz=framework.substr(0,1).toUpperCase() + framework.substr(1);if(typeof FormValidation.Framework[clazz] === 'undefined'){throw new Error('The class FormValidation.Framework.' + clazz + ' is not implemented');}data = new FormValidation.Framework[clazz](this,options);$this.addClass('fv-form-' + framework).data('formValidation',data);} // Allow to call plugin method
	if('string' === typeof option){data[option].apply(data,Array.prototype.slice.call(params,1));}});};$.fn.formValidation.Constructor = FormValidation.Base; // The default options
	// Sorted in alphabetical order
	$.fn.formValidation.DEFAULT_OPTIONS = { // The first invalid field will be focused automatically
	autoFocus:true, // Support declarative usage (setting options via HTML 5 attributes)
	// Setting to false can improve the performance
	declarative:true, // The form CSS class
	elementClass:'fv-form', // Use custom event name to avoid window.onerror being invoked by jQuery
	// See #630
	events:{ // Support backward
	formInit:'init.form.fv',formError:'err.form.fv',formSuccess:'success.form.fv',fieldAdded:'added.field.fv',fieldRemoved:'removed.field.fv',fieldInit:'init.field.fv',fieldError:'err.field.fv',fieldSuccess:'success.field.fv',fieldStatus:'status.field.fv',localeChanged:'changed.locale.fv',validatorError:'err.validator.fv',validatorSuccess:'success.validator.fv'}, // Indicate fields which won't be validated
	// By default, the plugin will not validate the following kind of fields:
	// - disabled
	// - hidden
	// - invisible
	//
	// The setting consists of jQuery filters. Accept 3 formats:
	// - A string. Use a comma to separate filter
	// - An array. Each element is a filter
	// - An array. Each element can be a callback function
	//      function($field, validator) {
	//          $field is jQuery object representing the field element
	//          validator is the BootstrapValidator instance
	//          return true or false;
	//      }
	//
	// The 3 following settings are equivalent:
	//
	// 1) ':disabled, :hidden, :not(:visible)'
	// 2) [':disabled', ':hidden', ':not(:visible)']
	// 3) [':disabled', ':hidden', function($field) {
	//        return !$field.is(':visible');
	//    }]
	excluded:[':disabled',':hidden',':not(:visible)'], // Map the field name with validator rules
	fields:null, // Live validating option
	// Can be one of 3 values:
	// - enabled: The plugin validates fields as soon as they are changed
	// - disabled: Disable the live validating. The error messages are only shown after the form is submitted
	// - submitted: The live validating is enabled after the form is submitted
	live:'enabled', // Locale in the format of languagecode_COUNTRYCODE
	locale:'zh_CN', // Default invalid message
	message:'This value is not valid', // The field will not be live validated if its length is less than this number of characters
	threshold:null, // Whether to be verbose when validating a field or not.
	// Possible values:
	// - true:  when a field has multiple validators, all of them will be checked, and respectively - if errors occur in
	//          multiple validators, all of them will be displayed to the user
	// - false: when a field has multiple validators, validation for this field will be terminated upon the first encountered error.
	//          Thus, only the very first error message related to this field will be displayed to the user
	verbose:true, // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// These options mostly are overridden by specific framework
	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	button:{ // The submit buttons selector
	// These buttons will be disabled to prevent the valid form from multiple submissions
	selector:'[type="submit"]', // The disabled class
	disabled:''},control:{ // The CSS class for valid control
	valid:'', // The CSS class for invalid control
	invalid:''},err:{ // The CSS class of each message element
	clazz:'', // The error messages container. It can be:
	// - 'tooltip' if you want to use Bootstrap tooltip to show error messages
	// - 'popover' if you want to use Bootstrap popover to show error messages
	// - a CSS selector indicating the container
	// In the first two cases, since the tooltip/popover should be small enough, the plugin only shows only one error message
	// You also can define the message container for particular field
	container:null, // Used to determine where the messages are placed
	parent:null}, // Shows ok/error/loading icons based on the field validity.
	icon:{valid:null,invalid:null,validating:null,feedback:''},row:{ // The CSS selector for indicating the element consists of the field
	// You should adjust this option if your form group consists of many fields which not all of them need to be validated
	selector:null,valid:'',invalid:'',feedback:''}};})(jQuery);;(function($){ // Helper methods, which can be used in validator class
	FormValidation.Helper = { /**
	         * Execute a callback function
	         *
	         * @param {String|Function} functionName Can be
	         * - name of global function
	         * - name of namespace function (such as A.B.C)
	         * - a function
	         * @param {Array} args The callback arguments
	         */call:function call(functionName,args){if('function' === typeof functionName){return functionName.apply(this,args);}else if('string' === typeof functionName){if('()' === functionName.substring(functionName.length - 2)){functionName = functionName.substring(0,functionName.length - 2);}var ns=functionName.split('.'),func=ns.pop(),context=window;for(var i=0;i < ns.length;i++) {context = context[ns[i]];}return typeof context[func] === 'undefined'?null:context[func].apply(this,args);}}, /**
	         * Validate a date
	         *
	         * @param {Number} year The full year in 4 digits
	         * @param {Number} month The month number
	         * @param {Number} day The day number
	         * @param {Boolean} [notInFuture] If true, the date must not be in the future
	         * @returns {Boolean}
	         */date:function date(year,month,day,notInFuture){if(isNaN(year) || isNaN(month) || isNaN(day)){return false;}if(day.length > 2 || month.length > 2 || year.length > 4){return false;}day = parseInt(day,10);month = parseInt(month,10);year = parseInt(year,10);if(year < 1000 || year > 9999 || month <= 0 || month > 12){return false;}var numDays=[31,28,31,30,31,30,31,31,30,31,30,31]; // Update the number of days in Feb of leap year
	if(year % 400 === 0 || year % 100 !== 0 && year % 4 === 0){numDays[1] = 29;} // Check the day
	if(day <= 0 || day > numDays[month - 1]){return false;}if(notInFuture === true){var currentDate=new Date(),currentYear=currentDate.getFullYear(),currentMonth=currentDate.getMonth(),currentDay=currentDate.getDate();return year < currentYear || year === currentYear && month - 1 < currentMonth || year === currentYear && month - 1 === currentMonth && day < currentDay;}return true;}, /**
	         * Format a string
	         * It's used to format the error message
	         * format('The field must between %s and %s', [10, 20]) = 'The field must between 10 and 20'
	         *
	         * @param {String} message
	         * @param {Array} parameters
	         * @returns {String}
	         */format:function format(message,parameters){if(!$.isArray(parameters)){parameters = [parameters];}for(var i in parameters) {message = message.replace('%s',parameters[i]);}return message;}, /**
	         * Implement Luhn validation algorithm
	         * Credit to https://gist.github.com/ShirtlessKirk/2134376
	         *
	         * @see http://en.wikipedia.org/wiki/Luhn
	         * @param {String} value
	         * @returns {Boolean}
	         */luhn:function luhn(value){var length=value.length,mul=0,prodArr=[[0,1,2,3,4,5,6,7,8,9],[0,2,4,6,8,1,3,5,7,9]],sum=0;while(length--) {sum += prodArr[mul][parseInt(value.charAt(length),10)];mul ^= 1;}return sum % 10 === 0 && sum > 0;}, /**
	         * Implement modulus 11, 10 (ISO 7064) algorithm
	         *
	         * @param {String} value
	         * @returns {Boolean}
	         */mod11And10:function mod11And10(value){var check=5,length=value.length;for(var i=0;i < length;i++) {check = ((check || 10) * 2 % 11 + parseInt(value.charAt(i),10)) % 10;}return check === 1;}, /**
	         * Implements Mod 37, 36 (ISO 7064) algorithm
	         * Usages:
	         * mod37And36('A12425GABC1234002M')
	         * mod37And36('002006673085', '0123456789')
	         *
	         * @param {String} value
	         * @param {String} [alphabet]
	         * @returns {Boolean}
	         */mod37And36:function mod37And36(value,alphabet){alphabet = alphabet || '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';var modulus=alphabet.length,length=value.length,check=Math.floor(modulus / 2);for(var i=0;i < length;i++) {check = ((check || modulus) * 2 % (modulus + 1) + alphabet.indexOf(value.charAt(i))) % modulus;}return check === 1;}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{base64:{'default':'Please enter a valid base 64 encoded'}}});FormValidation.Validator.base64 = { /**
	         * Return true if the input value is a base 64 encoded string.
	         *
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Can consist of the following keys:
	         * - message: The invalid message
	         * @returns {Boolean}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'base64');if(value === ''){return true;}return (/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(value));}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{between:{'default':'Please enter a value between %s and %s',notInclusive:'Please enter a value between %s and %s strictly'}}});FormValidation.Validator.between = {html5Attributes:{message:'message',min:'min',max:'max',inclusive:'inclusive'},enableByHtml5:function enableByHtml5($field){if('range' === $field.attr('type')){return {min:$field.attr('min'),max:$field.attr('max')};}return false;}, /**
	         * Return true if the input value is between (strictly or not) two given numbers
	         *
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Can consist of the following keys:
	         * - min
	         * - max
	         *
	         * The min, max keys define the number which the field value compares to. min, max can be
	         *      - A number
	         *      - Name of field which its value defines the number
	         *      - Name of callback function that returns the number
	         *      - A callback function that returns the number
	         *
	         * - inclusive [optional]: Can be true or false. Default is true
	         * - message: The invalid message
	         * @returns {Boolean|Object}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'between');if(value === ''){return true;}value = this._format(value);if(!$.isNumeric(value)){return false;}var locale=validator.getLocale(),min=$.isNumeric(options.min)?options.min:validator.getDynamicOption($field,options.min),max=$.isNumeric(options.max)?options.max:validator.getDynamicOption($field,options.max),minValue=this._format(min),maxValue=this._format(max);value = parseFloat(value);return options.inclusive === true || options.inclusive === undefined?{valid:value >= minValue && value <= maxValue,message:FormValidation.Helper.format(options.message || FormValidation.I18n[locale].between['default'],[min,max])}:{valid:value > minValue && value < maxValue,message:FormValidation.Helper.format(options.message || FormValidation.I18n[locale].between.notInclusive,[min,max])};},_format:function _format(value){return (value + '').replace(',','.');}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{bic:{'default':'Please enter a valid BIC number'}}});FormValidation.Validator.bic = { /**
	         * Validate an Business Identifier Code (BIC), also known as ISO 9362, SWIFT-BIC, SWIFT ID or SWIFT code
	         *
	         * For more information see http://en.wikipedia.org/wiki/ISO_9362
	         *
	         * @todo The 5 and 6 characters are an ISO 3166-1 country code, this could also be validated
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Can consist of the following keys:
	         * - message: The invalid message
	         * @returns {Object}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'bic');if(value === ''){return true;}return (/^[a-zA-Z]{6}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$/.test(value));}};})(jQuery);;(function($){FormValidation.Validator.blank = { /**
	         * Placeholder validator that can be used to display a custom validation message
	         * returned from the server
	         * Example:
	         *
	         * (1) a "blank" validator is applied to an input field.
	         * (2) data is entered via the UI that is unable to be validated client-side.
	         * (3) server returns a 400 with JSON data that contains the field that failed
	         *     validation and an associated message.
	         * (4) ajax 400 call handler does the following:
	         *
	         *      bv.updateMessage(field, 'blank', errorMessage);
	         *      bv.updateStatus(field, 'INVALID');
	         *
	         * @see https://github.com/formvalidation/formvalidation/issues/542
	         * @see https://github.com/formvalidation/formvalidation/pull/666
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Can consist of the following keys:
	         * - message: The invalid message
	         * @returns {Boolean}
	         */validate:function validate(validator,$field,options){return true;}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{callback:{'default':'Please enter a valid value'}}});FormValidation.Validator.callback = {html5Attributes:{message:'message',callback:'callback'}, /**
	         * Return result from the callback method
	         *
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Can consist of the following keys:
	         * - callback: The callback method that passes 2 parameters:
	         *      callback: function(fieldValue, validator, $field) {
	         *          // fieldValue is the value of field
	         *          // validator is instance of BootstrapValidator
	         *          // $field is the field element
	         *      }
	         * - message: The invalid message
	         * @returns {Deferred}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'callback'),dfd=new $.Deferred(),result={valid:true};if(options.callback){var response=FormValidation.Helper.call(options.callback,[value,validator,$field]);result = 'boolean' === typeof response?{valid:response}:response;}dfd.resolve($field,'callback',result);return dfd;}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{choice:{'default':'Please enter a valid value',less:'Please choose %s options at minimum',more:'Please choose %s options at maximum',between:'Please choose %s - %s options'}}});FormValidation.Validator.choice = {html5Attributes:{message:'message',min:'min',max:'max'}, /**
	         * Check if the number of checked boxes are less or more than a given number
	         *
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Consists of following keys:
	         * - min
	         * - max
	         *
	         * At least one of two keys is required
	         * The min, max keys define the number which the field value compares to. min, max can be
	         *      - A number
	         *      - Name of field which its value defines the number
	         *      - Name of callback function that returns the number
	         *      - A callback function that returns the number
	         *
	         * - message: The invalid message
	         * @returns {Object}
	         */validate:function validate(validator,$field,options){var locale=validator.getLocale(),ns=validator.getNamespace(),numChoices=$field.is('select')?validator.getFieldElements($field.attr('data-' + ns + '-field')).find('option').filter(':selected').length:validator.getFieldElements($field.attr('data-' + ns + '-field')).filter(':checked').length,min=options.min?$.isNumeric(options.min)?options.min:validator.getDynamicOption($field,options.min):null,max=options.max?$.isNumeric(options.max)?options.max:validator.getDynamicOption($field,options.max):null,isValid=true,message=options.message || FormValidation.I18n[locale].choice['default'];if(min && numChoices < parseInt(min,10) || max && numChoices > parseInt(max,10)){isValid = false;}switch(true){case !!min && !!max:message = FormValidation.Helper.format(options.message || FormValidation.I18n[locale].choice.between,[parseInt(min,10),parseInt(max,10)]);break;case !!min:message = FormValidation.Helper.format(options.message || FormValidation.I18n[locale].choice.less,parseInt(min,10));break;case !!max:message = FormValidation.Helper.format(options.message || FormValidation.I18n[locale].choice.more,parseInt(max,10));break;default:break;}return {valid:isValid,message:message};}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{color:{'default':'Please enter a valid color'}}});FormValidation.Validator.color = {html5Attributes:{message:'message',type:'type'},enableByHtml5:function enableByHtml5($field){return 'color' === $field.attr('type');},SUPPORTED_TYPES:['hex','rgb','rgba','hsl','hsla','keyword'],KEYWORD_COLORS:[ // Colors start with A
	'aliceblue','antiquewhite','aqua','aquamarine','azure', // B
	'beige','bisque','black','blanchedalmond','blue','blueviolet','brown','burlywood', // C
	'cadetblue','chartreuse','chocolate','coral','cornflowerblue','cornsilk','crimson','cyan', // D
	'darkblue','darkcyan','darkgoldenrod','darkgray','darkgreen','darkgrey','darkkhaki','darkmagenta','darkolivegreen','darkorange','darkorchid','darkred','darksalmon','darkseagreen','darkslateblue','darkslategray','darkslategrey','darkturquoise','darkviolet','deeppink','deepskyblue','dimgray','dimgrey','dodgerblue', // F
	'firebrick','floralwhite','forestgreen','fuchsia', // G
	'gainsboro','ghostwhite','gold','goldenrod','gray','green','greenyellow','grey', // H
	'honeydew','hotpink', // I
	'indianred','indigo','ivory', // K
	'khaki', // L
	'lavender','lavenderblush','lawngreen','lemonchiffon','lightblue','lightcoral','lightcyan','lightgoldenrodyellow','lightgray','lightgreen','lightgrey','lightpink','lightsalmon','lightseagreen','lightskyblue','lightslategray','lightslategrey','lightsteelblue','lightyellow','lime','limegreen','linen', // M
	'magenta','maroon','mediumaquamarine','mediumblue','mediumorchid','mediumpurple','mediumseagreen','mediumslateblue','mediumspringgreen','mediumturquoise','mediumvioletred','midnightblue','mintcream','mistyrose','moccasin', // N
	'navajowhite','navy', // O
	'oldlace','olive','olivedrab','orange','orangered','orchid', // P
	'palegoldenrod','palegreen','paleturquoise','palevioletred','papayawhip','peachpuff','peru','pink','plum','powderblue','purple', // R
	'red','rosybrown','royalblue', // S
	'saddlebrown','salmon','sandybrown','seagreen','seashell','sienna','silver','skyblue','slateblue','slategray','slategrey','snow','springgreen','steelblue', // T
	'tan','teal','thistle','tomato','transparent','turquoise', // V
	'violet', // W
	'wheat','white','whitesmoke', // Y
	'yellow','yellowgreen'], /**
	         * Return true if the input value is a valid color
	         *
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Can consist of the following keys:
	         * - message: The invalid message
	         * - type: The array of valid color types
	         * @returns {Boolean}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'color');if(value === ''){return true;} // Only accept 6 hex character values due to the HTML 5 spec
	// See http://www.w3.org/TR/html-markup/input.color.html#input.color.attrs.value
	if(this.enableByHtml5($field)){return (/^#[0-9A-F]{6}$/i.test(value));}var types=options.type || this.SUPPORTED_TYPES;if(!$.isArray(types)){types = types.replace(/s/g,'').split(',');}var method,type,isValid=false;for(var i=0;i < types.length;i++) {type = types[i];method = '_' + type.toLowerCase();isValid = isValid || this[method](value);if(isValid){return true;}}return false;},_hex:function _hex(value){return (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value));},_hsl:function _hsl(value){return (/^hsl\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/.test(value));},_hsla:function _hsla(value){return (/^hsla\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(value));},_keyword:function _keyword(value){return $.inArray(value,this.KEYWORD_COLORS) >= 0;},_rgb:function _rgb(value){var regexInteger=/^rgb\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){2}(\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*)\)$/,regexPercent=/^rgb\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/;return regexInteger.test(value) || regexPercent.test(value);},_rgba:function _rgba(value){var regexInteger=/^rgba\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/,regexPercent=/^rgba\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/;return regexInteger.test(value) || regexPercent.test(value);}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{creditCard:{'default':'Please enter a valid credit card number'}}});FormValidation.Validator.creditCard = { /**
	         * Return true if the input value is valid credit card number
	         * Based on https://gist.github.com/DiegoSalazar/4075533
	         *
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} [options] Can consist of the following key:
	         * - message: The invalid message
	         * @returns {Boolean|Object}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'creditCard');if(value === ''){return true;} // Accept only digits, dashes or spaces
	if(/[^0-9-\s]+/.test(value)){return false;}value = value.replace(/\D/g,'');if(!FormValidation.Helper.luhn(value)){return false;} // Validate the card number based on prefix (IIN ranges) and length
	var cards={AMERICAN_EXPRESS:{length:[15],prefix:['34','37']},DINERS_CLUB:{length:[14],prefix:['300','301','302','303','304','305','36']},DINERS_CLUB_US:{length:[16],prefix:['54','55']},DISCOVER:{length:[16],prefix:['6011','622126','622127','622128','622129','62213','62214','62215','62216','62217','62218','62219','6222','6223','6224','6225','6226','6227','6228','62290','62291','622920','622921','622922','622923','622924','622925','644','645','646','647','648','649','65']},JCB:{length:[16],prefix:['3528','3529','353','354','355','356','357','358']},LASER:{length:[16,17,18,19],prefix:['6304','6706','6771','6709']},MAESTRO:{length:[12,13,14,15,16,17,18,19],prefix:['5018','5020','5038','6304','6759','6761','6762','6763','6764','6765','6766']},MASTERCARD:{length:[16],prefix:['51','52','53','54','55']},SOLO:{length:[16,18,19],prefix:['6334','6767']},UNIONPAY:{length:[16,17,18,19],prefix:['622126','622127','622128','622129','62213','62214','62215','62216','62217','62218','62219','6222','6223','6224','6225','6226','6227','6228','62290','62291','622920','622921','622922','622923','622924','622925']},VISA:{length:[16],prefix:['4']}};var type,i;for(type in cards) {for(i in cards[type].prefix) {if(value.substr(0,cards[type].prefix[i].length) === cards[type].prefix[i] // Check the prefix
	 && $.inArray(value.length,cards[type].length) !== -1) // and length
	{return {valid:true,type:type};}}}return false;}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{cusip:{'default':'Please enter a valid CUSIP number'}}});FormValidation.Validator.cusip = { /**
	         * Validate a CUSIP number
	         * Examples:
	         * - Valid: 037833100, 931142103, 14149YAR8, 126650BG6
	         * - Invalid: 31430F200, 022615AC2
	         *
	         * @see http://en.wikipedia.org/wiki/CUSIP
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} [options] Can consist of the following keys:
	         * - message: The invalid message
	         * @returns {Boolean}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'cusip');if(value === ''){return true;}value = value.toUpperCase();if(!/^[0-9A-Z]{9}$/.test(value)){return false;}var converted=$.map(value.split(''),function(item){var code=item.charCodeAt(0);return code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0)? // Replace A, B, C, ..., Z with 10, 11, ..., 35
	code - 'A'.charCodeAt(0) + 10:item;}),length=converted.length,sum=0;for(var i=0;i < length - 1;i++) {var num=parseInt(converted[i],10);if(i % 2 !== 0){num *= 2;}if(num > 9){num -= 9;}sum += num;}sum = (10 - sum % 10) % 10;return sum === parseInt(converted[length - 1],10);}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{cvv:{'default':'Please enter a valid CVV number'}}});FormValidation.Validator.cvv = {html5Attributes:{message:'message',ccfield:'creditCardField'}, /**
	         * Bind the validator on the live change of the credit card field
	         *
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Consists of the following key:
	         * - creditCardField: The credit card number field
	         */init:function init(validator,$field,options){if(options.creditCardField){var creditCardField=validator.getFieldElements(options.creditCardField);validator.onLiveChange(creditCardField,'live_cvv',function(){var status=validator.getStatus($field,'cvv');if(status !== validator.STATUS_NOT_VALIDATED){validator.revalidateField($field);}});}}, /**
	         * Unbind the validator on the live change of the credit card field
	         *
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Consists of the following key:
	         * - creditCardField: The credit card number field
	         */destroy:function destroy(validator,$field,options){if(options.creditCardField){var creditCardField=validator.getFieldElements(options.creditCardField);validator.offLiveChange(creditCardField,'live_cvv');}}, /**
	         * Return true if the input value is a valid CVV number.
	         *
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Can consist of the following keys:
	         * - creditCardField: The credit card number field. It can be null
	         * - message: The invalid message
	         * @returns {Boolean}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'cvv');if(value === ''){return true;}if(!/^[0-9]{3,4}$/.test(value)){return false;}if(!options.creditCardField){return true;} // Get the credit card number
	var creditCard=validator.getFieldElements(options.creditCardField).val();if(creditCard === ''){return true;}creditCard = creditCard.replace(/\D/g,''); // Supported credit card types
	var cards={AMERICAN_EXPRESS:{length:[15],prefix:['34','37']},DINERS_CLUB:{length:[14],prefix:['300','301','302','303','304','305','36']},DINERS_CLUB_US:{length:[16],prefix:['54','55']},DISCOVER:{length:[16],prefix:['6011','622126','622127','622128','622129','62213','62214','62215','62216','62217','62218','62219','6222','6223','6224','6225','6226','6227','6228','62290','62291','622920','622921','622922','622923','622924','622925','644','645','646','647','648','649','65']},JCB:{length:[16],prefix:['3528','3529','353','354','355','356','357','358']},LASER:{length:[16,17,18,19],prefix:['6304','6706','6771','6709']},MAESTRO:{length:[12,13,14,15,16,17,18,19],prefix:['5018','5020','5038','6304','6759','6761','6762','6763','6764','6765','6766']},MASTERCARD:{length:[16],prefix:['51','52','53','54','55']},SOLO:{length:[16,18,19],prefix:['6334','6767']},UNIONPAY:{length:[16,17,18,19],prefix:['622126','622127','622128','622129','62213','62214','62215','62216','62217','62218','62219','6222','6223','6224','6225','6226','6227','6228','62290','62291','622920','622921','622922','622923','622924','622925']},VISA:{length:[16],prefix:['4']}};var type,i,creditCardType=null;for(type in cards) {for(i in cards[type].prefix) {if(creditCard.substr(0,cards[type].prefix[i].length) === cards[type].prefix[i] // Check the prefix
	 && $.inArray(creditCard.length,cards[type].length) !== -1) // and length
	{creditCardType = type;break;}}}return creditCardType === null?false:'AMERICAN_EXPRESS' === creditCardType?value.length === 4:value.length === 3;}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{date:{'default':'Please enter a valid date',min:'Please enter a date after %s',max:'Please enter a date before %s',range:'Please enter a date in the range %s - %s'}}});FormValidation.Validator.date = {html5Attributes:{message:'message',format:'format',min:'min',max:'max',separator:'separator'}, /**
	         * Return true if the input value is valid date
	         *
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Can consist of the following keys:
	         * - message: The invalid message
	         * - min: the minimum date
	         * - max: the maximum date
	         * - separator: Use to separate the date, month, and year.
	         * By default, it is /
	         * - format: The date format. Default is MM/DD/YYYY
	         * The format can be:
	         *
	         * i) date: Consist of DD, MM, YYYY parts which are separated by the separator option
	         * ii) date and time:
	         * The time can consist of h, m, s parts which are separated by :
	         * ii) date, time and A (indicating AM or PM)
	         * @returns {Boolean|Object}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'date');if(value === ''){return true;}options.format = options.format || 'MM/DD/YYYY'; // #683: Force the format to YYYY-MM-DD as the default browser behaviour when using type="date" attribute
	if($field.attr('type') === 'date'){options.format = 'YYYY-MM-DD';}var locale=validator.getLocale(),message=options.message || FormValidation.I18n[locale].date['default'],formats=options.format.split(' '),dateFormat=formats[0],timeFormat=formats.length > 1?formats[1]:null,amOrPm=formats.length > 2?formats[2]:null,sections=value.split(' '),date=sections[0],time=sections.length > 1?sections[1]:null;if(formats.length !== sections.length){return {valid:false,message:message};} // Determine the separator
	var separator=options.separator;if(!separator){separator = date.indexOf('/') !== -1?'/':date.indexOf('-') !== -1?'-':null;}if(separator === null || date.indexOf(separator) === -1){return {valid:false,message:message};} // Determine the date
	date = date.split(separator);dateFormat = dateFormat.split(separator);if(date.length !== dateFormat.length){return {valid:false,message:message};}var year=date[$.inArray('YYYY',dateFormat)],month=date[$.inArray('MM',dateFormat)],day=date[$.inArray('DD',dateFormat)];if(!year || !month || !day || year.length !== 4){return {valid:false,message:message};} // Determine the time
	var minutes=null,hours=null,seconds=null;if(timeFormat){timeFormat = timeFormat.split(':');time = time.split(':');if(timeFormat.length !== time.length){return {valid:false,message:message};}hours = time.length > 0?time[0]:null;minutes = time.length > 1?time[1]:null;seconds = time.length > 2?time[2]:null;if(hours === '' || minutes === '' || seconds === ''){return {valid:false,message:message};} // Validate seconds
	if(seconds){if(isNaN(seconds) || seconds.length > 2){return {valid:false,message:message};}seconds = parseInt(seconds,10);if(seconds < 0 || seconds > 60){return {valid:false,message:message};}} // Validate hours
	if(hours){if(isNaN(hours) || hours.length > 2){return {valid:false,message:message};}hours = parseInt(hours,10);if(hours < 0 || hours >= 24 || amOrPm && hours > 12){return {valid:false,message:message};}} // Validate minutes
	if(minutes){if(isNaN(minutes) || minutes.length > 2){return {valid:false,message:message};}minutes = parseInt(minutes,10);if(minutes < 0 || minutes > 59){return {valid:false,message:message};}}} // Validate day, month, and year
	var valid=FormValidation.Helper.date(year,month,day), // declare the date, min and max objects
	min=null,max=null,minOption=options.min,maxOption=options.max;if(minOption){if(isNaN(Date.parse(minOption))){minOption = validator.getDynamicOption($field,minOption);}min = _instanceof(minOption,Date)?minOption:this._parseDate(minOption,dateFormat,separator); // In order to avoid displaying a date string like "Mon Dec 08 2014 19:14:12 GMT+0000 (WET)"
	minOption = _instanceof(minOption,Date)?this._formatDate(minOption,options.format):minOption;}if(maxOption){if(isNaN(Date.parse(maxOption))){maxOption = validator.getDynamicOption($field,maxOption);}max = _instanceof(maxOption,Date)?maxOption:this._parseDate(maxOption,dateFormat,separator); // In order to avoid displaying a date string like "Mon Dec 08 2014 19:14:12 GMT+0000 (WET)"
	maxOption = _instanceof(maxOption,Date)?this._formatDate(maxOption,options.format):maxOption;}date = new Date(year,month - 1,day,hours,minutes,seconds);switch(true){case minOption && !maxOption && valid:valid = date.getTime() >= min.getTime();message = options.message || FormValidation.Helper.format(FormValidation.I18n[locale].date.min,minOption);break;case maxOption && !minOption && valid:valid = date.getTime() <= max.getTime();message = options.message || FormValidation.Helper.format(FormValidation.I18n[locale].date.max,maxOption);break;case maxOption && minOption && valid:valid = date.getTime() <= max.getTime() && date.getTime() >= min.getTime();message = options.message || FormValidation.Helper.format(FormValidation.I18n[locale].date.range,[minOption,maxOption]);break;default:break;}return {valid:valid,message:message};}, /**
	         * Return a date object after parsing the date string
	         *
	         * @param {String} date   The date string to parse
	         * @param {String} format The date format
	         * The format can be:
	         *   - date: Consist of DD, MM, YYYY parts which are separated by the separator option
	         *   - date and time:
	         *     The time can consist of h, m, s parts which are separated by :
	         * @param {String} separator The separator used to separate the date, month, and year
	         * @returns {Date}
	         */_parseDate:function _parseDate(date,format,separator){var minutes=0,hours=0,seconds=0,sections=date.split(' '),dateSection=sections[0],timeSection=sections.length > 1?sections[1]:null;dateSection = dateSection.split(separator);var year=dateSection[$.inArray('YYYY',format)],month=dateSection[$.inArray('MM',format)],day=dateSection[$.inArray('DD',format)];if(timeSection){timeSection = timeSection.split(':');hours = timeSection.length > 0?timeSection[0]:null;minutes = timeSection.length > 1?timeSection[1]:null;seconds = timeSection.length > 2?timeSection[2]:null;}return new Date(year,month - 1,day,hours,minutes,seconds);}, /**
	         * Format date
	         *
	         * @param {Date} date The date object to format
	         * @param {String} format The date format
	         * The format can consist of the following tokens:
	         *      d       Day of the month without leading zeros (1 through 31)
	         *      dd      Day of the month with leading zeros (01 through 31)
	         *      m       Month without leading zeros (1 through 12)
	         *      mm      Month with leading zeros (01 through 12)
	         *      yy      Last two digits of year (for example: 14)
	         *      yyyy    Full four digits of year (for example: 2014)
	         *      h       Hours without leading zeros (1 through 12)
	         *      hh      Hours with leading zeros (01 through 12)
	         *      H       Hours without leading zeros (0 through 23)
	         *      HH      Hours with leading zeros (00 through 23)
	         *      M       Minutes without leading zeros (0 through 59)
	         *      MM      Minutes with leading zeros (00 through 59)
	         *      s       Seconds without leading zeros (0 through 59)
	         *      ss      Seconds with leading zeros (00 through 59)
	         * @returns {String}
	         */_formatDate:function _formatDate(date,format){format = format.replace(/Y/g,'y').replace(/M/g,'m').replace(/D/g,'d').replace(/:m/g,':M').replace(/:mm/g,':MM').replace(/:S/,':s').replace(/:SS/,':ss');var replacer={d:function d(date){return date.getDate();},dd:function dd(date){var d=date.getDate();return d < 10?'0' + d:d;},m:function m(date){return date.getMonth() + 1;},mm:function mm(date){var m=date.getMonth() + 1;return m < 10?'0' + m:m;},yy:function yy(date){return ('' + date.getFullYear()).substr(2);},yyyy:function yyyy(date){return date.getFullYear();},h:function h(date){return date.getHours() % 12 || 12;},hh:function hh(date){var h=date.getHours() % 12 || 12;return h < 10?'0' + h:h;},H:function H(date){return date.getHours();},HH:function HH(date){var H=date.getHours();return H < 10?'0' + H:H;},M:function M(date){return date.getMinutes();},MM:function MM(date){var M=date.getMinutes();return M < 10?'0' + M:M;},s:function s(date){return date.getSeconds();},ss:function ss(date){var s=date.getSeconds();return s < 10?'0' + s:s;}};return format.replace(/d{1,4}|m{1,4}|yy(?:yy)?|([HhMs])\1?|"[^"]*"|'[^']*'/g,function(match){return replacer[match]?replacer[match](date):match.slice(1,match.length - 1);});}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{different:{'default':'Please enter a different value'}}});FormValidation.Validator.different = {html5Attributes:{message:'message',field:'field'}, /**
	         * Bind the validator on the live change of the field to compare with current one
	         *
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Consists of the following key:
	         * - field: The name of field that will be used to compare with current one
	         */init:function init(validator,$field,options){var fields=options.field.split(',');for(var i=0;i < fields.length;i++) {var compareWith=validator.getFieldElements(fields[i]);validator.onLiveChange(compareWith,'live_different',function(){var status=validator.getStatus($field,'different');if(status !== validator.STATUS_NOT_VALIDATED){validator.revalidateField($field);}});}}, /**
	         * Unbind the validator on the live change of the field to compare with current one
	         *
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Consists of the following key:
	         * - field: The name of field that will be used to compare with current one
	         */destroy:function destroy(validator,$field,options){var fields=options.field.split(',');for(var i=0;i < fields.length;i++) {var compareWith=validator.getFieldElements(fields[i]);validator.offLiveChange(compareWith,'live_different');}}, /**
	         * Return true if the input value is different with given field's value
	         *
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Consists of the following key:
	         * - field: The name of field that will be used to compare with current one
	         * - message: The invalid message
	         * @returns {Boolean}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'different');if(value === ''){return true;}var fields=options.field.split(','),isValid=true;for(var i=0;i < fields.length;i++) {var compareWith=validator.getFieldElements(fields[i]);if(compareWith == null || compareWith.length === 0){continue;}var compareValue=validator.getFieldValue(compareWith,'different');if(value === compareValue){isValid = false;}else if(compareValue !== ''){validator.updateStatus(compareWith,validator.STATUS_VALID,'different');}}return isValid;}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{digits:{'default':'Please enter only digits'}}});FormValidation.Validator.digits = { /**
	         * Return true if the input value contains digits only
	         *
	         * @param {FormValidation.Base} validator Validate plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} [options]
	         * @returns {Boolean}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'digits');if(value === ''){return true;}return (/^\d+$/.test(value));}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{ean:{'default':'Please enter a valid EAN number'}}});FormValidation.Validator.ean = { /**
	         * Validate EAN (International Article Number)
	         * Examples:
	         * - Valid: 73513537, 9780471117094, 4006381333931
	         * - Invalid: 73513536
	         *
	         * @see http://en.wikipedia.org/wiki/European_Article_Number
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Can consist of the following keys:
	         * - message: The invalid message
	         * @returns {Boolean}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'ean');if(value === ''){return true;}if(!/^(\d{8}|\d{12}|\d{13})$/.test(value)){return false;}var length=value.length,sum=0,weight=length === 8?[3,1]:[1,3];for(var i=0;i < length - 1;i++) {sum += parseInt(value.charAt(i),10) * weight[i % 2];}sum = (10 - sum % 10) % 10;return sum + '' === value.charAt(length - 1);}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{ein:{'default':'Please enter a valid EIN number'}}});FormValidation.Validator.ein = { // The first two digits are called campus
	// See http://en.wikipedia.org/wiki/Employer_Identification_Number
	// http://www.irs.gov/Businesses/Small-Businesses-&-Self-Employed/How-EINs-are-Assigned-and-Valid-EIN-Prefixes
	CAMPUS:{ANDOVER:['10','12'],ATLANTA:['60','67'],AUSTIN:['50','53'],BROOKHAVEN:['01','02','03','04','05','06','11','13','14','16','21','22','23','25','34','51','52','54','55','56','57','58','59','65'],CINCINNATI:['30','32','35','36','37','38','61'],FRESNO:['15','24'],KANSAS_CITY:['40','44'],MEMPHIS:['94','95'],OGDEN:['80','90'],PHILADELPHIA:['33','39','41','42','43','46','48','62','63','64','66','68','71','72','73','74','75','76','77','81','82','83','84','85','86','87','88','91','92','93','98','99'],INTERNET:['20','26','27','45','46'],SMALL_BUSINESS_ADMINISTRATION:['31']}, /**
	         * Validate EIN (Employer Identification Number) which is also known as
	         * Federal Employer Identification Number (FEIN) or Federal Tax Identification Number
	         *
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Can consist of the following keys:
	         * - message: The invalid message
	         * @returns {Object|Boolean}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'ein');if(value === ''){return true;}if(!/^[0-9]{2}-?[0-9]{7}$/.test(value)){return false;} // Check the first two digits
	var campus=value.substr(0,2) + '';for(var key in this.CAMPUS) {if($.inArray(campus,this.CAMPUS[key]) !== -1){return {valid:true,campus:key};}}return false;}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{emailAddress:{'default':'Please enter a valid email address'}}});FormValidation.Validator.emailAddress = {html5Attributes:{message:'message',multiple:'multiple',separator:'separator'},enableByHtml5:function enableByHtml5($field){return 'email' === $field.attr('type');}, /**
	         * Return true if and only if the input value is a valid email address
	         *
	         * @param {FormValidation.Base} validator Validate plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} [options]
	         * - multiple: Allow multiple email addresses, separated by a comma or semicolon; default is false.
	         * - separator: Regex for character or characters expected as separator between addresses; default is comma /[,;]/, i.e. comma or semicolon.
	         * @returns {Boolean}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'emailAddress');if(value === ''){return true;} // Email address regular expression
	// http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
	var emailRegExp=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,allowMultiple=options.multiple === true || options.multiple === 'true';if(allowMultiple){var separator=options.separator || /[,;]/,addresses=this._splitEmailAddresses(value,separator);for(var i=0;i < addresses.length;i++) {if(!emailRegExp.test(addresses[i])){return false;}}return true;}else {return emailRegExp.test(value);}},_splitEmailAddresses:function _splitEmailAddresses(emailAddresses,separator){var quotedFragments=emailAddresses.split(/"/),quotedFragmentCount=quotedFragments.length,emailAddressArray=[],nextEmailAddress='';for(var i=0;i < quotedFragmentCount;i++) {if(i % 2 === 0){var splitEmailAddressFragments=quotedFragments[i].split(separator),splitEmailAddressFragmentCount=splitEmailAddressFragments.length;if(splitEmailAddressFragmentCount === 1){nextEmailAddress += splitEmailAddressFragments[0];}else {emailAddressArray.push(nextEmailAddress + splitEmailAddressFragments[0]);for(var j=1;j < splitEmailAddressFragmentCount - 1;j++) {emailAddressArray.push(splitEmailAddressFragments[j]);}nextEmailAddress = splitEmailAddressFragments[splitEmailAddressFragmentCount - 1];}}else {nextEmailAddress += '"' + quotedFragments[i];if(i < quotedFragmentCount - 1){nextEmailAddress += '"';}}}emailAddressArray.push(nextEmailAddress);return emailAddressArray;}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{file:{'default':'Please choose a valid file'}}});FormValidation.Validator.file = {html5Attributes:{extension:'extension',maxfiles:'maxFiles',minfiles:'minFiles',maxsize:'maxSize',minsize:'minSize',maxtotalsize:'maxTotalSize',mintotalsize:'minTotalSize',message:'message',type:'type'}, /**
	         * Validate upload file. Use HTML 5 API if the browser supports
	         *
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Can consist of the following keys:
	         * - extension: The allowed extensions, separated by a comma
	         * - maxFiles: The maximum number of files
	         * - minFiles: The minimum number of files
	         * - maxSize: The maximum size in bytes
	         * - minSize: The minimum size in bytes
	         * - maxTotalSize: The maximum size in bytes for all files
	         * - minTotalSize: The minimum size in bytes for all files
	         * - message: The invalid message
	         * - type: The allowed MIME type, separated by a comma
	         * @returns {Boolean}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'file');if(value === ''){return true;}var ext,extensions=options.extension?options.extension.toLowerCase().split(','):null,types=options.type?options.type.toLowerCase().split(','):null,html5=window.File && window.FileList && window.FileReader;if(html5){ // Get FileList instance
	var files=$field.get(0).files,total=files.length,totalSize=0;if(options.maxFiles && total > parseInt(options.maxFiles,10) ||  // Check the maxFiles
	options.minFiles && total < parseInt(options.minFiles,10)) // Check the minFiles
	{return false;}for(var i=0;i < total;i++) {totalSize += files[i].size;ext = files[i].name.substr(files[i].name.lastIndexOf('.') + 1);if(options.minSize && files[i].size < parseInt(options.minSize,10) ||  // Check the minSize
	options.maxSize && files[i].size > parseInt(options.maxSize,10) // Check the maxSize
	 || extensions && $.inArray(ext.toLowerCase(),extensions) === -1 // Check file extension
	 || files[i].type && types && $.inArray(files[i].type.toLowerCase(),types) === -1) // Check file type
	{return false;}}if(options.maxTotalSize && totalSize > parseInt(options.maxTotalSize,10) ||  // Check the maxTotalSize
	options.minTotalSize && totalSize < parseInt(options.minTotalSize,10)) // Check the minTotalSize
	{return false;}}else { // Check file extension
	ext = value.substr(value.lastIndexOf('.') + 1);if(extensions && $.inArray(ext.toLowerCase(),extensions) === -1){return false;}}return true;}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{greaterThan:{'default':'Please enter a value greater than or equal to %s',notInclusive:'Please enter a value greater than %s'}}});FormValidation.Validator.greaterThan = {html5Attributes:{message:'message',value:'value',inclusive:'inclusive'},enableByHtml5:function enableByHtml5($field){var type=$field.attr('type'),min=$field.attr('min');if(min && type !== 'date'){return {value:min};}return false;}, /**
	         * Return true if the input value is greater than or equals to given number
	         *
	         * @param {FormValidation.Base} validator Validate plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Can consist of the following keys:
	         * - value: Define the number to compare with. It can be
	         *      - A number
	         *      - Name of field which its value defines the number
	         *      - Name of callback function that returns the number
	         *      - A callback function that returns the number
	         *
	         * - inclusive [optional]: Can be true or false. Default is true
	         * - message: The invalid message
	         * @returns {Boolean|Object}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'greaterThan');if(value === ''){return true;}value = this._format(value);if(!$.isNumeric(value)){return false;}var locale=validator.getLocale(),compareTo=$.isNumeric(options.value)?options.value:validator.getDynamicOption($field,options.value),compareToValue=this._format(compareTo);value = parseFloat(value);return options.inclusive === true || options.inclusive === undefined?{valid:value >= compareToValue,message:FormValidation.Helper.format(options.message || FormValidation.I18n[locale].greaterThan['default'],compareTo)}:{valid:value > compareToValue,message:FormValidation.Helper.format(options.message || FormValidation.I18n[locale].greaterThan.notInclusive,compareTo)};},_format:function _format(value){return (value + '').replace(',','.');}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{grid:{'default':'Please enter a valid GRId number'}}});FormValidation.Validator.grid = { /**
	         * Validate GRId (Global Release Identifier)
	         * Examples:
	         * - Valid: A12425GABC1234002M, A1-2425G-ABC1234002-M, A1 2425G ABC1234002 M, Grid:A1-2425G-ABC1234002-M
	         * - Invalid: A1-2425G-ABC1234002-Q
	         *
	         * @see http://en.wikipedia.org/wiki/Global_Release_Identifier
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Can consist of the following keys:
	         * - message: The invalid message
	         * @returns {Boolean}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'grid');if(value === ''){return true;}value = value.toUpperCase();if(!/^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(value)){return false;}value = value.replace(/\s/g,'').replace(/-/g,'');if('GRID:' === value.substr(0,5)){value = value.substr(5);}return FormValidation.Helper.mod37And36(value);}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{hex:{'default':'Please enter a valid hexadecimal number'}}});FormValidation.Validator.hex = { /**
	         * Return true if and only if the input value is a valid hexadecimal number
	         *
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Consist of key:
	         * - message: The invalid message
	         * @returns {Boolean}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'hex');if(value === ''){return true;}return (/^[0-9a-fA-F]+$/.test(value));}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{iban:{'default':'Please enter a valid IBAN number',country:'Please enter a valid IBAN number in %s',countries:{AD:'Andorra',AE:'United Arab Emirates',AL:'Albania',AO:'Angola',AT:'Austria',AZ:'Azerbaijan',BA:'Bosnia and Herzegovina',BE:'Belgium',BF:'Burkina Faso',BG:'Bulgaria',BH:'Bahrain',BI:'Burundi',BJ:'Benin',BR:'Brazil',CH:'Switzerland',CI:'Ivory Coast',CM:'Cameroon',CR:'Costa Rica',CV:'Cape Verde',CY:'Cyprus',CZ:'Czech Republic',DE:'Germany',DK:'Denmark',DO:'Dominican Republic',DZ:'Algeria',EE:'Estonia',ES:'Spain',FI:'Finland',FO:'Faroe Islands',FR:'France',GB:'United Kingdom',GE:'Georgia',GI:'Gibraltar',GL:'Greenland',GR:'Greece',GT:'Guatemala',HR:'Croatia',HU:'Hungary',IE:'Ireland',IL:'Israel',IR:'Iran',IS:'Iceland',IT:'Italy',JO:'Jordan',KW:'Kuwait',KZ:'Kazakhstan',LB:'Lebanon',LI:'Liechtenstein',LT:'Lithuania',LU:'Luxembourg',LV:'Latvia',MC:'Monaco',MD:'Moldova',ME:'Montenegro',MG:'Madagascar',MK:'Macedonia',ML:'Mali',MR:'Mauritania',MT:'Malta',MU:'Mauritius',MZ:'Mozambique',NL:'Netherlands',NO:'Norway',PK:'Pakistan',PL:'Poland',PS:'Palestine',PT:'Portugal',QA:'Qatar',RO:'Romania',RS:'Serbia',SA:'Saudi Arabia',SE:'Sweden',SI:'Slovenia',SK:'Slovakia',SM:'San Marino',SN:'Senegal',TN:'Tunisia',TR:'Turkey',VG:'Virgin Islands, British'}}}});FormValidation.Validator.iban = {html5Attributes:{message:'message',country:'country'}, // http://www.swift.com/dsp/resources/documents/IBAN_Registry.pdf
	// http://en.wikipedia.org/wiki/International_Bank_Account_Number#IBAN_formats_by_country
	REGEX:{AD:'AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12}', // Andorra
	AE:'AE[0-9]{2}[0-9]{3}[0-9]{16}', // United Arab Emirates
	AL:'AL[0-9]{2}[0-9]{8}[A-Z0-9]{16}', // Albania
	AO:'AO[0-9]{2}[0-9]{21}', // Angola
	AT:'AT[0-9]{2}[0-9]{5}[0-9]{11}', // Austria
	AZ:'AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}', // Azerbaijan
	BA:'BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2}', // Bosnia and Herzegovina
	BE:'BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2}', // Belgium
	BF:'BF[0-9]{2}[0-9]{23}', // Burkina Faso
	BG:'BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8}', // Bulgaria
	BH:'BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}', // Bahrain
	BI:'BI[0-9]{2}[0-9]{12}', // Burundi
	BJ:'BJ[0-9]{2}[A-Z]{1}[0-9]{23}', // Benin
	BR:'BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z][A-Z0-9]', // Brazil
	CH:'CH[0-9]{2}[0-9]{5}[A-Z0-9]{12}', // Switzerland
	CI:'CI[0-9]{2}[A-Z]{1}[0-9]{23}', // Ivory Coast
	CM:'CM[0-9]{2}[0-9]{23}', // Cameroon
	CR:'CR[0-9]{2}[0-9]{3}[0-9]{14}', // Costa Rica
	CV:'CV[0-9]{2}[0-9]{21}', // Cape Verde
	CY:'CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16}', // Cyprus
	CZ:'CZ[0-9]{2}[0-9]{20}', // Czech Republic
	DE:'DE[0-9]{2}[0-9]{8}[0-9]{10}', // Germany
	DK:'DK[0-9]{2}[0-9]{14}', // Denmark
	DO:'DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}', // Dominican Republic
	DZ:'DZ[0-9]{2}[0-9]{20}', // Algeria
	EE:'EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1}', // Estonia
	ES:'ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10}', // Spain
	FI:'FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1}', // Finland
	FO:'FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}', // Faroe Islands
	FR:'FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}', // France
	GB:'GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}', // United Kingdom
	GE:'GE[0-9]{2}[A-Z]{2}[0-9]{16}', // Georgia
	GI:'GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}', // Gibraltar
	GL:'GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}', // Greenland
	GR:'GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16}', // Greece
	GT:'GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20}', // Guatemala
	HR:'HR[0-9]{2}[0-9]{7}[0-9]{10}', // Croatia
	HU:'HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1}', // Hungary
	IE:'IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}', // Ireland
	IL:'IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13}', // Israel
	IR:'IR[0-9]{2}[0-9]{22}', // Iran
	IS:'IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10}', // Iceland
	IT:'IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}', // Italy
	JO:'JO[0-9]{2}[A-Z]{4}[0-9]{4}[0]{8}[A-Z0-9]{10}', // Jordan
	KW:'KW[0-9]{2}[A-Z]{4}[0-9]{22}', // Kuwait
	KZ:'KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13}', // Kazakhstan
	LB:'LB[0-9]{2}[0-9]{4}[A-Z0-9]{20}', // Lebanon
	LI:'LI[0-9]{2}[0-9]{5}[A-Z0-9]{12}', // Liechtenstein
	LT:'LT[0-9]{2}[0-9]{5}[0-9]{11}', // Lithuania
	LU:'LU[0-9]{2}[0-9]{3}[A-Z0-9]{13}', // Luxembourg
	LV:'LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}', // Latvia
	MC:'MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}', // Monaco
	MD:'MD[0-9]{2}[A-Z0-9]{20}', // Moldova
	ME:'ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}', // Montenegro
	MG:'MG[0-9]{2}[0-9]{23}', // Madagascar
	MK:'MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2}', // Macedonia
	ML:'ML[0-9]{2}[A-Z]{1}[0-9]{23}', // Mali
	MR:'MR13[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2}', // Mauritania
	MT:'MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}', // Malta
	MU:'MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3}', // Mauritius
	MZ:'MZ[0-9]{2}[0-9]{21}', // Mozambique
	NL:'NL[0-9]{2}[A-Z]{4}[0-9]{10}', // Netherlands
	NO:'NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1}', // Norway
	PK:'PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}', // Pakistan
	PL:'PL[0-9]{2}[0-9]{8}[0-9]{16}', // Poland
	PS:'PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}', // Palestinian
	PT:'PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2}', // Portugal
	QA:'QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}', // Qatar
	RO:'RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}', // Romania
	RS:'RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}', // Serbia
	SA:'SA[0-9]{2}[0-9]{2}[A-Z0-9]{18}', // Saudi Arabia
	SE:'SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1}', // Sweden
	SI:'SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2}', // Slovenia
	SK:'SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}', // Slovakia
	SM:'SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}', // San Marino
	SN:'SN[0-9]{2}[A-Z]{1}[0-9]{23}', // Senegal
	TN:'TN59[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}', // Tunisia
	TR:'TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16}', // Turkey
	VG:'VG[0-9]{2}[A-Z]{4}[0-9]{16}' // Virgin Islands, British
	}, /**
	         * Validate an International Bank Account Number (IBAN)
	         * To test it, take the sample IBAN from
	         * http://www.nordea.com/Our+services/International+products+and+services/Cash+Management/IBAN+countries/908462.html
	         *
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Can consist of the following keys:
	         * - message: The invalid message
	         * - country: The ISO 3166-1 country code. It can be
	         *      - A country code
	         *      - Name of field which its value defines the country code
	         *      - Name of callback function that returns the country code
	         *      - A callback function that returns the country code
	         * @returns {Boolean|Object}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'iban');if(value === ''){return true;}value = value.replace(/[^a-zA-Z0-9]/g,'').toUpperCase();var country=options.country;if(!country){country = value.substr(0,2);}else if(typeof country !== 'string' || !this.REGEX[country]){ // Determine the country code
	country = validator.getDynamicOption($field,country);}var locale=validator.getLocale();if(!this.REGEX[country]){return true;}if(!new RegExp('^' + this.REGEX[country] + '$').test(value)){return {valid:false,message:FormValidation.Helper.format(options.message || FormValidation.I18n[locale].iban.country,FormValidation.I18n[locale].iban.countries[country])};}value = value.substr(4) + value.substr(0,4);value = $.map(value.split(''),function(n){var code=n.charCodeAt(0);return code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0)? // Replace A, B, C, ..., Z with 10, 11, ..., 35
	code - 'A'.charCodeAt(0) + 10:n;});value = value.join('');var temp=parseInt(value.substr(0,1),10),length=value.length;for(var i=1;i < length;++i) {temp = (temp * 10 + parseInt(value.substr(i,1),10)) % 97;}return {valid:temp === 1,message:FormValidation.Helper.format(options.message || FormValidation.I18n[locale].iban.country,FormValidation.I18n[locale].iban.countries[country])};}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{id:{'default':'Please enter a valid identification number',country:'Please enter a valid identification number in %s',countries:{BA:'Bosnia and Herzegovina',BG:'Bulgaria',BR:'Brazil',CH:'Switzerland',CL:'Chile',CN:'China',CZ:'Czech Republic',DK:'Denmark',EE:'Estonia',ES:'Spain',FI:'Finland',HR:'Croatia',IE:'Ireland',IS:'Iceland',LT:'Lithuania',LV:'Latvia',ME:'Montenegro',MK:'Macedonia',NL:'Netherlands',PL:'Poland',RO:'Romania',RS:'Serbia',SE:'Sweden',SI:'Slovenia',SK:'Slovakia',SM:'San Marino',TH:'Thailand',ZA:'South Africa'}}}});FormValidation.Validator.id = {html5Attributes:{message:'message',country:'country'}, // Supported country codes
	COUNTRY_CODES:['BA','BG','BR','CH','CL','CN','CZ','DK','EE','ES','FI','HR','IE','IS','LT','LV','ME','MK','NL','PL','RO','RS','SE','SI','SK','SM','TH','ZA'], /**
	         * Validate identification number in different countries
	         *
	         * @see http://en.wikipedia.org/wiki/National_identification_number
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Consist of key:
	         * - message: The invalid message
	         * - country: The ISO 3166-1 country code. It can be
	         *      - One of country code defined in COUNTRY_CODES
	         *      - Name of field which its value defines the country code
	         *      - Name of callback function that returns the country code
	         *      - A callback function that returns the country code
	         * @returns {Boolean|Object}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'id');if(value === ''){return true;}var locale=validator.getLocale(),country=options.country;if(!country){country = value.substr(0,2);}else if(typeof country !== 'string' || $.inArray(country.toUpperCase(),this.COUNTRY_CODES) === -1){ // Determine the country code
	country = validator.getDynamicOption($field,country);}if($.inArray(country,this.COUNTRY_CODES) === -1){return true;}var method=['_',country.toLowerCase()].join('');return this[method](value)?true:{valid:false,message:FormValidation.Helper.format(options.message || FormValidation.I18n[locale].id.country,FormValidation.I18n[locale].id.countries[country.toUpperCase()])};}, /**
	         * Validate Unique Master Citizen Number which uses in
	         * - Bosnia and Herzegovina (country code: BA)
	         * - Macedonia (MK)
	         * - Montenegro (ME)
	         * - Serbia (RS)
	         * - Slovenia (SI)
	         *
	         * @see http://en.wikipedia.org/wiki/Unique_Master_Citizen_Number
	         * @param {String} value The ID
	         * @param {String} countryCode The ISO country code, can be BA, MK, ME, RS, SI
	         * @returns {Boolean}
	         */_validateJMBG:function _validateJMBG(value,countryCode){if(!/^\d{13}$/.test(value)){return false;}var day=parseInt(value.substr(0,2),10),month=parseInt(value.substr(2,2),10),year=parseInt(value.substr(4,3),10),rr=parseInt(value.substr(7,2),10),k=parseInt(value.substr(12,1),10); // Validate date of birth
	// FIXME: Validate the year of birth
	if(day > 31 || month > 12){return false;} // Validate checksum
	var sum=0;for(var i=0;i < 6;i++) {sum += (7 - i) * (parseInt(value.charAt(i),10) + parseInt(value.charAt(i + 6),10));}sum = 11 - sum % 11;if(sum === 10 || sum === 11){sum = 0;}if(sum !== k){return false;} // Validate political region
	// rr is the political region of birth, which can be in ranges:
	// 10-19: Bosnia and Herzegovina
	// 20-29: Montenegro
	// 30-39: Croatia (not used anymore)
	// 41-49: Macedonia
	// 50-59: Slovenia (only 50 is used)
	// 70-79: Central Serbia
	// 80-89: Serbian province of Vojvodina
	// 90-99: Kosovo
	switch(countryCode.toUpperCase()){case 'BA':return 10 <= rr && rr <= 19;case 'MK':return 41 <= rr && rr <= 49;case 'ME':return 20 <= rr && rr <= 29;case 'RS':return 70 <= rr && rr <= 99;case 'SI':return 50 <= rr && rr <= 59;default:return true;}},_ba:function _ba(value){return this._validateJMBG(value,'BA');},_mk:function _mk(value){return this._validateJMBG(value,'MK');},_me:function _me(value){return this._validateJMBG(value,'ME');},_rs:function _rs(value){return this._validateJMBG(value,'RS');}, /**
	         * Examples: 0101006500006
	         */_si:function _si(value){return this._validateJMBG(value,'SI');}, /**
	         * Validate Bulgarian national identification number (EGN)
	         * Examples:
	         * - Valid: 7523169263, 8032056031, 803205 603 1, 8001010008, 7501020018, 7552010005, 7542011030
	         * - Invalid: 8019010008
	         *
	         * @see http://en.wikipedia.org/wiki/Uniform_civil_number
	         * @param {String} value The ID
	         * @returns {Boolean}
	         */_bg:function _bg(value){if(!/^\d{10}$/.test(value) && !/^\d{6}\s\d{3}\s\d{1}$/.test(value)){return false;}value = value.replace(/\s/g,''); // Check the birth date
	var year=parseInt(value.substr(0,2),10) + 1900,month=parseInt(value.substr(2,2),10),day=parseInt(value.substr(4,2),10);if(month > 40){year += 100;month -= 40;}else if(month > 20){year -= 100;month -= 20;}if(!FormValidation.Helper.date(year,month,day)){return false;}var sum=0,weight=[2,4,8,5,10,9,7,3,6];for(var i=0;i < 9;i++) {sum += parseInt(value.charAt(i),10) * weight[i];}sum = sum % 11 % 10;return sum + '' === value.substr(9,1);}, /**
	         * Validate Brazilian national identification number (CPF)
	         * Examples:
	         * - Valid: 39053344705, 390.533.447-05, 111.444.777-35
	         * - Invalid: 231.002.999-00
	         *
	         * @see http://en.wikipedia.org/wiki/Cadastro_de_Pessoas_F%C3%ADsicas
	         * @param {String} value The ID
	         * @returns {Boolean}
	         */_br:function _br(value){value = value.replace(/\D/g,'');if(/^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(value)){return false;}var d1=0;for(var i=0;i < 9;i++) {d1 += (10 - i) * parseInt(value.charAt(i),10);}d1 = 11 - d1 % 11;if(d1 === 10 || d1 === 11){d1 = 0;}if(d1 + '' !== value.charAt(9)){return false;}var d2=0;for(i = 0;i < 10;i++) {d2 += (11 - i) * parseInt(value.charAt(i),10);}d2 = 11 - d2 % 11;if(d2 === 10 || d2 === 11){d2 = 0;}return d2 + '' === value.charAt(10);}, /**
	         * Validate Swiss Social Security Number (AHV-Nr/No AVS)
	         * Examples:
	         * - Valid: 756.1234.5678.95, 7561234567895
	         *
	         * @see http://en.wikipedia.org/wiki/National_identification_number#Switzerland
	         * @see http://www.bsv.admin.ch/themen/ahv/00011/02185/index.html?lang=de
	         * @param {String} value The ID
	         * @returns {Boolean}
	         */_ch:function _ch(value){if(!/^756[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{2}$/.test(value)){return false;}value = value.replace(/\D/g,'').substr(3);var length=value.length,sum=0,weight=length === 8?[3,1]:[1,3];for(var i=0;i < length - 1;i++) {sum += parseInt(value.charAt(i),10) * weight[i % 2];}sum = 10 - sum % 10;return sum + '' === value.charAt(length - 1);}, /**
	         * Validate Chilean national identification number (RUN/RUT)
	         * Examples:
	         * - Valid: 76086428-5, 22060449-7, 12531909-2
	         *
	         * @see http://en.wikipedia.org/wiki/National_identification_number#Chile
	         * @see https://palena.sii.cl/cvc/dte/ee_empresas_emisoras.html for samples
	         * @param {String} value The ID
	         * @returns {Boolean}
	         */_cl:function _cl(value){if(!/^\d{7,8}[-]{0,1}[0-9K]$/i.test(value)){return false;}value = value.replace(/\-/g,'');while(value.length < 9) {value = '0' + value;}var sum=0,weight=[3,2,7,6,5,4,3,2];for(var i=0;i < 8;i++) {sum += parseInt(value.charAt(i),10) * weight[i];}sum = 11 - sum % 11;if(sum === 11){sum = 0;}else if(sum === 10){sum = 'K';}return sum + '' === value.charAt(8).toUpperCase();}, /**
	         * Validate Chinese citizen identification number
	         *
	         * Rules:
	         * - For current 18-digit system (since 1st Oct 1999, defined by GB11643鈥�1999 national standard):
	         *     - Digit 0-5: Must be a valid administrative division code of China PR.
	         *     - Digit 6-13: Must be a valid YYYYMMDD date of birth. A future date is tolerated.
	         *     - Digit 14-16: Order code, any integer.
	         *     - Digit 17: An ISO 7064:1983, MOD 11-2 checksum.
	         *       Both upper/lower case of X are tolerated.
	         * - For deprecated 15-digit system:
	         *     - Digit 0-5: Must be a valid administrative division code of China PR.
	         *     - Digit 6-11: Must be a valid YYMMDD date of birth, indicating the year of 19XX.
	         *     - Digit 12-14: Order code, any integer.
	         * Lists of valid administrative division codes of China PR can be seen here:
	         * <http://www.stats.gov.cn/tjsj/tjbz/xzqhdm/>
	         * Published and maintained by National Bureau of Statistics of China PR.
	         * NOTE: Current and deprecated codes MUST BOTH be considered valid.
	         * Many Chinese citizens born in once existed administrative divisions!
	         *
	         * @see http://en.wikipedia.org/wiki/Resident_Identity_Card#Identity_card_number
	         * @param {String} value The ID
	         * @returns {Boolean}
	         */_cn:function _cn(value){ // Basic format check (18 or 15 digits, considering X in checksum)
	value = value.trim();if(!/^\d{15}$/.test(value) && !/^\d{17}[\dXx]{1}$/.test(value)){return false;} // Check China PR Administrative division code
	var adminDivisionCodes={11:{0:[0],1:[[0,9],[11,17]],2:[0,28,29]},12:{0:[0],1:[[0,16]],2:[0,21,23,25]},13:{0:[0],1:[[0,5],7,8,21,[23,33],[81,85]],2:[[0,5],[7,9],[23,25],27,29,30,81,83],3:[[0,4],[21,24]],4:[[0,4],6,21,[23,35],81],5:[[0,3],[21,35],81,82],6:[[0,4],[21,38],[81,84]],7:[[0,3],5,6,[21,33]],8:[[0,4],[21,28]],9:[[0,3],[21,30],[81,84]],10:[[0,3],[22,26],28,81,82],11:[[0,2],[21,28],81,82]},14:{0:[0],1:[0,1,[5,10],[21,23],81],2:[[0,3],11,12,[21,27]],3:[[0,3],11,21,22],4:[[0,2],11,21,[23,31],81],5:[[0,2],21,22,24,25,81],6:[[0,3],[21,24]],7:[[0,2],[21,29],81],8:[[0,2],[21,30],81,82],9:[[0,2],[21,32],81],10:[[0,2],[21,34],81,82],11:[[0,2],[21,30],81,82],23:[[0,3],22,23,[25,30],32,33]},15:{0:[0],1:[[0,5],[21,25]],2:[[0,7],[21,23]],3:[[0,4]],4:[[0,4],[21,26],[28,30]],5:[[0,2],[21,26],81],6:[[0,2],[21,27]],7:[[0,3],[21,27],[81,85]],8:[[0,2],[21,26]],9:[[0,2],[21,29],81],22:[[0,2],[21,24]],25:[[0,2],[22,31]],26:[[0,2],[24,27],[29,32],34],28:[0,1,[22,27]],29:[0,[21,23]]},21:{0:[0],1:[[0,6],[11,14],[22,24],81],2:[[0,4],[11,13],24,[81,83]],3:[[0,4],11,21,23,81],4:[[0,4],11,[21,23]],5:[[0,5],21,22],6:[[0,4],24,81,82],7:[[0,3],11,26,27,81,82],8:[[0,4],11,81,82],9:[[0,5],11,21,22],10:[[0,5],11,21,81],11:[[0,3],21,22],12:[[0,2],4,21,23,24,81,82],13:[[0,3],21,22,24,81,82],14:[[0,4],21,22,81]},22:{0:[0],1:[[0,6],12,22,[81,83]],2:[[0,4],11,21,[81,84]],3:[[0,3],22,23,81,82],4:[[0,3],21,22],5:[[0,3],21,23,24,81,82],6:[[0,2],4,5,[21,23],25,81],7:[[0,2],[21,24],81],8:[[0,2],21,22,81,82],24:[[0,6],24,26]},23:{0:[0],1:[[0,12],21,[23,29],[81,84]],2:[[0,8],21,[23,25],27,[29,31],81],3:[[0,7],21,81,82],4:[[0,7],21,22],5:[[0,3],5,6,[21,24]],6:[[0,6],[21,24]],7:[[0,16],22,81],8:[[0,5],11,22,26,28,33,81,82],9:[[0,4],21],10:[[0,5],24,25,81,[83,85]],11:[[0,2],21,23,24,81,82],12:[[0,2],[21,26],[81,83]],27:[[0,4],[21,23]]},31:{0:[0],1:[0,1,[3,10],[12,20]],2:[0,30]},32:{0:[0],1:[[0,7],11,[13,18],24,25],2:[[0,6],11,81,82],3:[[0,5],11,12,[21,24],81,82],4:[[0,2],4,5,11,12,81,82],5:[[0,9],[81,85]],6:[[0,2],11,12,21,23,[81,84]],7:[0,1,3,5,6,[21,24]],8:[[0,4],11,26,[29,31]],9:[[0,3],[21,25],28,81,82],10:[[0,3],11,12,23,81,84,88],11:[[0,2],11,12,[81,83]],12:[[0,4],[81,84]],13:[[0,2],11,[21,24]]},33:{0:[0],1:[[0,6],[8,10],22,27,82,83,85],2:[0,1,[3,6],11,12,25,26,[81,83]],3:[[0,4],22,24,[26,29],81,82],4:[[0,2],11,21,24,[81,83]],5:[[0,3],[21,23]],6:[[0,2],21,24,[81,83]],7:[[0,3],23,26,27,[81,84]],8:[[0,3],22,24,25,81],9:[[0,3],21,22],10:[[0,4],[21,24],81,82],11:[[0,2],[21,27],81]},34:{0:[0],1:[[0,4],11,[21,24],81],2:[[0,4],7,8,[21,23],25],3:[[0,4],11,[21,23]],4:[[0,6],21],5:[[0,4],6,[21,23]],6:[[0,4],21],7:[[0,3],11,21],8:[[0,3],11,[22,28],81],10:[[0,4],[21,24]],11:[[0,3],22,[24,26],81,82],12:[[0,4],21,22,25,26,82],13:[[0,2],[21,24]],14:[[0,2],[21,24]],15:[[0,3],[21,25]],16:[[0,2],[21,23]],17:[[0,2],[21,23]],18:[[0,2],[21,25],81]},35:{0:[0],1:[[0,5],11,[21,25],28,81,82],2:[[0,6],[11,13]],3:[[0,5],22],4:[[0,3],21,[23,30],81],5:[[0,5],21,[24,27],[81,83]],6:[[0,3],[22,29],81],7:[[0,2],[21,25],[81,84]],8:[[0,2],[21,25],81],9:[[0,2],[21,26],81,82]},36:{0:[0],1:[[0,5],11,[21,24]],2:[[0,3],22,81],3:[[0,2],13,[21,23]],4:[[0,3],21,[23,30],81,82],5:[[0,2],21],6:[[0,2],22,81],7:[[0,2],[21,35],81,82],8:[[0,3],[21,30],81],9:[[0,2],[21,26],[81,83]],10:[[0,2],[21,30]],11:[[0,2],[21,30],81]},37:{0:[0],1:[[0,5],12,13,[24,26],81],2:[[0,3],5,[11,14],[81,85]],3:[[0,6],[21,23]],4:[[0,6],81],5:[[0,3],[21,23]],6:[[0,2],[11,13],34,[81,87]],7:[[0,5],24,25,[81,86]],8:[[0,2],11,[26,32],[81,83]],9:[[0,3],11,21,23,82,83],10:[[0,2],[81,83]],11:[[0,3],21,22],12:[[0,3]],13:[[0,2],11,12,[21,29]],14:[[0,2],[21,28],81,82],15:[[0,2],[21,26],81],16:[[0,2],[21,26]],17:[[0,2],[21,28]]},41:{0:[0],1:[[0,6],8,22,[81,85]],2:[[0,5],11,[21,25]],3:[[0,7],11,[22,29],81],4:[[0,4],11,[21,23],25,81,82],5:[[0,3],5,6,22,23,26,27,81],6:[[0,3],11,21,22],7:[[0,4],11,21,[24,28],81,82],8:[[0,4],11,[21,23],25,[81,83]],9:[[0,2],22,23,[26,28]],10:[[0,2],[23,25],81,82],11:[[0,4],[21,23]],12:[[0,2],21,22,24,81,82],13:[[0,3],[21,30],81],14:[[0,3],[21,26],81],15:[[0,3],[21,28]],16:[[0,2],[21,28],81],17:[[0,2],[21,29]],90:[0,1]},42:{0:[0],1:[[0,7],[11,17]],2:[[0,5],22,81],3:[[0,3],[21,25],81],5:[[0,6],[25,29],[81,83]],6:[[0,2],6,7,[24,26],[82,84]],7:[[0,4]],8:[[0,2],4,21,22,81],9:[[0,2],[21,23],81,82,84],10:[[0,3],[22,24],81,83,87],11:[[0,2],[21,27],81,82],12:[[0,2],[21,24],81],13:[[0,3],21,81],28:[[0,2],22,23,[25,28]],90:[0,[4,6],21]},43:{0:[0],1:[[0,5],11,12,21,22,24,81],2:[[0,4],11,21,[23,25],81],3:[[0,2],4,21,81,82],4:[0,1,[5,8],12,[21,24],26,81,82],5:[[0,3],11,[21,25],[27,29],81],6:[[0,3],11,21,23,24,26,81,82],7:[[0,3],[21,26],81],8:[[0,2],11,21,22],9:[[0,3],[21,23],81],10:[[0,3],[21,28],81],11:[[0,3],[21,29]],12:[[0,2],[21,30],81],13:[[0,2],21,22,81,82],31:[0,1,[22,27],30]},44:{0:[0],1:[[0,7],[11,16],83,84],2:[[0,5],21,22,24,29,32,33,81,82],3:[0,1,[3,8]],4:[[0,4]],5:[0,1,[6,15],23,82,83],6:[0,1,[4,8]],7:[0,1,[3,5],81,[83,85]],8:[[0,4],11,23,25,[81,83]],9:[[0,3],23,[81,83]],12:[[0,3],[23,26],83,84],13:[[0,3],[22,24],81],14:[[0,2],[21,24],26,27,81],15:[[0,2],21,23,81],16:[[0,2],[21,25]],17:[[0,2],21,23,81],18:[[0,3],21,23,[25,27],81,82],19:[0],20:[0],51:[[0,3],21,22],52:[[0,3],21,22,24,81],53:[[0,2],[21,23],81]},45:{0:[0],1:[[0,9],[21,27]],2:[[0,5],[21,26]],3:[[0,5],11,12,[21,32]],4:[0,1,[3,6],11,[21,23],81],5:[[0,3],12,21],6:[[0,3],21,81],7:[[0,3],21,22],8:[[0,4],21,81],9:[[0,3],[21,24],81],10:[[0,2],[21,31]],11:[[0,2],[21,23]],12:[[0,2],[21,29],81],13:[[0,2],[21,24],81],14:[[0,2],[21,25],81]},46:{0:[0],1:[0,1,[5,8]],2:[0,1],3:[0,[21,23]],90:[[0,3],[5,7],[21,39]]},50:{0:[0],1:[[0,19]],2:[0,[22,38],[40,43]],3:[0,[81,84]]},51:{0:[0],1:[0,1,[4,8],[12,15],[21,24],29,31,32,[81,84]],3:[[0,4],11,21,22],4:[[0,3],11,21,22],5:[[0,4],21,22,24,25],6:[0,1,3,23,26,[81,83]],7:[0,1,3,4,[22,27],81],8:[[0,2],11,12,[21,24]],9:[[0,4],[21,23]],10:[[0,2],11,24,25,28],11:[[0,2],[11,13],23,24,26,29,32,33,81],13:[[0,4],[21,25],81],14:[[0,2],[21,25]],15:[[0,3],[21,29]],16:[[0,3],[21,23],81],17:[[0,3],[21,25],81],18:[[0,3],[21,27]],19:[[0,3],[21,23]],20:[[0,2],21,22,81],32:[0,[21,33]],33:[0,[21,38]],34:[0,1,[22,37]]},52:{0:[0],1:[[0,3],[11,15],[21,23],81],2:[0,1,3,21,22],3:[[0,3],[21,30],81,82],4:[[0,2],[21,25]],5:[[0,2],[21,27]],6:[[0,3],[21,28]],22:[0,1,[22,30]],23:[0,1,[22,28]],24:[0,1,[22,28]],26:[0,1,[22,36]],27:[[0,2],22,23,[25,32]]},53:{0:[0],1:[[0,3],[11,14],21,22,[24,29],81],3:[[0,2],[21,26],28,81],4:[[0,2],[21,28]],5:[[0,2],[21,24]],6:[[0,2],[21,30]],7:[[0,2],[21,24]],8:[[0,2],[21,29]],9:[[0,2],[21,27]],23:[0,1,[22,29],31],25:[[0,4],[22,32]],26:[0,1,[21,28]],27:[0,1,[22,30]],28:[0,1,22,23],29:[0,1,[22,32]],31:[0,2,3,[22,24]],34:[0,[21,23]],33:[0,21,[23,25]],35:[0,[21,28]]},54:{0:[0],1:[[0,2],[21,27]],21:[0,[21,29],32,33],22:[0,[21,29],[31,33]],23:[0,1,[22,38]],24:[0,[21,31]],25:[0,[21,27]],26:[0,[21,27]]},61:{0:[0],1:[[0,4],[11,16],22,[24,26]],2:[[0,4],22],3:[[0,4],[21,24],[26,31]],4:[[0,4],[22,31],81],5:[[0,2],[21,28],81,82],6:[[0,2],[21,32]],7:[[0,2],[21,30]],8:[[0,2],[21,31]],9:[[0,2],[21,29]],10:[[0,2],[21,26]]},62:{0:[0],1:[[0,5],11,[21,23]],2:[0,1],3:[[0,2],21],4:[[0,3],[21,23]],5:[[0,3],[21,25]],6:[[0,2],[21,23]],7:[[0,2],[21,25]],8:[[0,2],[21,26]],9:[[0,2],[21,24],81,82],10:[[0,2],[21,27]],11:[[0,2],[21,26]],12:[[0,2],[21,28]],24:[0,21,[24,29]],26:[0,21,[23,30]],29:[0,1,[21,27]],30:[0,1,[21,27]]},63:{0:[0],1:[[0,5],[21,23]],2:[0,2,[21,25]],21:[0,[21,23],[26,28]],22:[0,[21,24]],23:[0,[21,24]],25:[0,[21,25]],26:[0,[21,26]],27:[0,1,[21,26]],28:[[0,2],[21,23]]},64:{0:[0],1:[0,1,[4,6],21,22,81],2:[[0,3],5,[21,23]],3:[[0,3],[21,24],81],4:[[0,2],[21,25]],5:[[0,2],21,22]},65:{0:[0],1:[[0,9],21],2:[[0,5]],21:[0,1,22,23],22:[0,1,22,23],23:[[0,3],[23,25],27,28],28:[0,1,[22,29]],29:[0,1,[22,29]],30:[0,1,[22,24]],31:[0,1,[21,31]],32:[0,1,[21,27]],40:[0,2,3,[21,28]],42:[[0,2],21,[23,26]],43:[0,1,[21,26]],90:[[0,4]],27:[[0,2],22,23]},71:{0:[0]},81:{0:[0]},82:{0:[0]}};var provincial=parseInt(value.substr(0,2),10),prefectural=parseInt(value.substr(2,2),10),county=parseInt(value.substr(4,2),10);if(!adminDivisionCodes[provincial] || !adminDivisionCodes[provincial][prefectural]){return false;}var inRange=false,rangeDef=adminDivisionCodes[provincial][prefectural];for(var i=0;i < rangeDef.length;i++) {if($.isArray(rangeDef[i]) && rangeDef[i][0] <= county && county <= rangeDef[i][1] || !$.isArray(rangeDef[i]) && county === rangeDef[i]){inRange = true;break;}}if(!inRange){return false;} // Check date of birth
	var dob;if(value.length === 18){dob = value.substr(6,8);}else  /* length == 15 */{dob = '19' + value.substr(6,6);}var year=parseInt(dob.substr(0,4),10),month=parseInt(dob.substr(4,2),10),day=parseInt(dob.substr(6,2),10);if(!FormValidation.Helper.date(year,month,day)){return false;} // Check checksum (18-digit system only)
	if(value.length === 18){var sum=0,weight=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2];for(i = 0;i < 17;i++) {sum += parseInt(value.charAt(i),10) * weight[i];}sum = (12 - sum % 11) % 11;var checksum=value.charAt(17).toUpperCase() !== 'X'?parseInt(value.charAt(17),10):10;return checksum === sum;}return true;}, /**
	         * Validate Czech national identification number (RC)
	         * Examples:
	         * - Valid: 7103192745, 991231123
	         * - Invalid: 1103492745, 590312123
	         *
	         * @param {String} value The ID
	         * @returns {Boolean}
	         */_cz:function _cz(value){if(!/^\d{9,10}$/.test(value)){return false;}var year=1900 + parseInt(value.substr(0,2),10),month=parseInt(value.substr(2,2),10) % 50 % 20,day=parseInt(value.substr(4,2),10);if(value.length === 9){if(year >= 1980){year -= 100;}if(year > 1953){return false;}}else if(year < 1954){year += 100;}if(!FormValidation.Helper.date(year,month,day)){return false;} // Check that the birth date is not in the future
	if(value.length === 10){var check=parseInt(value.substr(0,9),10) % 11;if(year < 1985){check = check % 10;}return check + '' === value.substr(9,1);}return true;}, /**
	         * Validate Danish Personal Identification number (CPR)
	         * Examples:
	         * - Valid: 2110625629, 211062-5629
	         * - Invalid: 511062-5629
	         *
	         * @see https://en.wikipedia.org/wiki/Personal_identification_number_(Denmark)
	         * @param {String} value The ID
	         * @returns {Boolean}
	         */_dk:function _dk(value){if(!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(value)){return false;}value = value.replace(/-/g,'');var day=parseInt(value.substr(0,2),10),month=parseInt(value.substr(2,2),10),year=parseInt(value.substr(4,2),10);switch(true){case '5678'.indexOf(value.charAt(6)) !== -1 && year >= 58:year += 1800;break;case '0123'.indexOf(value.charAt(6)) !== -1:case '49'.indexOf(value.charAt(6)) !== -1 && year >= 37:year += 1900;break;default:year += 2000;break;}return FormValidation.Helper.date(year,month,day);}, /**
	         * Validate Estonian Personal Identification Code (isikukood)
	         * Examples:
	         * - Valid: 37605030299
	         *
	         * @see http://et.wikipedia.org/wiki/Isikukood
	         * @param {String} value The ID
	         * @returns {Boolean}
	         */_ee:function _ee(value){ // Use the same format as Lithuanian Personal Code
	return this._lt(value);}, /**
	         * Validate Spanish personal identity code (DNI)
	         * Support i) DNI (for Spanish citizens), ii) NIE (for foreign people)
	         * and iii) CIF (for legal entities)
	         *
	         * Examples:
	         * - Valid:
	         *      i) 54362315K, 54362315-K
	         *      ii) X2482300W, X-2482300W, X-2482300-W
	         *      iii) A58818501, A-58818501
	         * - Invalid:
	         *      i) 54362315Z
	         *      ii) X-2482300A
	         *      iii) K58818501, G58818507
	         *
	         * @see https://en.wikipedia.org/wiki/National_identification_number#Spain
	         * @param {String} value The ID
	         * @returns {Boolean}
	         */_es:function _es(value){var isDNI=/^[0-9]{8}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(value),isNIE=/^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(value),isCIF=/^[A-HNPQS][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-J]$/.test(value);if(!isDNI && !isNIE && !isCIF){return false;}value = value.replace(/-/g,'');var check;if(isDNI || isNIE){var index='XYZ'.indexOf(value.charAt(0));if(index !== -1){ // It is NIE number
	value = index + value.substr(1) + '';}check = parseInt(value.substr(0,8),10);check = 'TRWAGMYFPDXBNJZSQVHLCKE'[check % 23];return check === value.substr(8,1);}else {check = value.substr(1,7);var letter=value[0],control=value.substr(-1),sum=0; // The digits in the even positions are added to the sum directly.
	// The ones in the odd positions are multiplied by 2 and then added to the sum.
	// If the result of multiplying by 2 is 10 or higher, add the two digits
	// together and add that to the sum instead
	for(var i=0;i < check.length;i++) {if(i % 2 !== 0){sum += parseInt(check[i],10);}else {var tmp='' + parseInt(check[i],10) * 2;sum += parseInt(tmp[0],10);if(tmp.length === 2){sum += parseInt(tmp[1],10);}}} // The control digit is calculated from the last digit of the sum.
	// If that last digit is not 0, subtract it from 10
	var lastDigit=sum - Math.floor(sum / 10) * 10;if(lastDigit !== 0){lastDigit = 10 - lastDigit;}if('KQS'.indexOf(letter) !== -1){ // If the CIF starts with a K, Q or S, the control digit must be a letter
	return control === 'JABCDEFGHI'[lastDigit];}else if('ABEH'.indexOf(letter) !== -1){ // If it starts with A, B, E or H, it has to be a number
	return control === '' + lastDigit;}else { // In any other case, it doesn't matter
	return control === '' + lastDigit || control === 'JABCDEFGHI'[lastDigit];}}}, /**
	         * Validate Finnish Personal Identity Code (HETU)
	         * Examples:
	         * - Valid: 311280-888Y, 131052-308T
	         * - Invalid: 131052-308U, 310252-308Y
	         *
	         * @param {String} value The ID
	         * @returns {Boolean}
	         */_fi:function _fi(value){if(!/^[0-9]{6}[-+A][0-9]{3}[0-9ABCDEFHJKLMNPRSTUVWXY]$/.test(value)){return false;}var day=parseInt(value.substr(0,2),10),month=parseInt(value.substr(2,2),10),year=parseInt(value.substr(4,2),10),centuries={'+':1800,'-':1900,'A':2000};year = centuries[value.charAt(6)] + year;if(!FormValidation.Helper.date(year,month,day)){return false;}var individual=parseInt(value.substr(7,3),10);if(individual < 2){return false;}var n=value.substr(0,6) + value.substr(7,3) + '';n = parseInt(n,10);return '0123456789ABCDEFHJKLMNPRSTUVWXY'.charAt(n % 31) === value.charAt(10);}, /**
	         * Validate Croatian personal identification number (OIB)
	         * Examples:
	         * - Valid: 33392005961
	         * - Invalid: 33392005962
	         *
	         * @param {String} value The ID
	         * @returns {Boolean}
	         */_hr:function _hr(value){if(!/^[0-9]{11}$/.test(value)){return false;}return FormValidation.Helper.mod11And10(value);}, /**
	         * Validate Irish Personal Public Service Number (PPS)
	         * Examples:
	         * - Valid: 6433435F, 6433435FT, 6433435FW, 6433435OA, 6433435IH, 1234567TW, 1234567FA
	         * - Invalid: 6433435E, 6433435VH
	         *
	         * @see https://en.wikipedia.org/wiki/Personal_Public_Service_Number
	         * @param {String} value The ID
	         * @returns {Boolean}
	         */_ie:function _ie(value){if(!/^\d{7}[A-W][AHWTX]?$/.test(value)){return false;}var getCheckDigit=function getCheckDigit(value){while(value.length < 7) {value = '0' + value;}var alphabet='WABCDEFGHIJKLMNOPQRSTUV',sum=0;for(var i=0;i < 7;i++) {sum += parseInt(value.charAt(i),10) * (8 - i);}sum += 9 * alphabet.indexOf(value.substr(7));return alphabet[sum % 23];}; // 2013 format
	if(value.length === 9 && ('A' === value.charAt(8) || 'H' === value.charAt(8))){return value.charAt(7) === getCheckDigit(value.substr(0,7) + value.substr(8) + '');} // The old format
	else {return value.charAt(7) === getCheckDigit(value.substr(0,7));}}, /**
	         * Validate Iceland national identification number (Kennitala)
	         * Examples:
	         * - Valid: 120174-3399, 1201743399, 0902862349
	         *
	         * @see http://en.wikipedia.org/wiki/Kennitala
	         * @param {String} value The ID
	         * @returns {Boolean}
	         */_is:function _is(value){if(!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(value)){return false;}value = value.replace(/-/g,'');var day=parseInt(value.substr(0,2),10),month=parseInt(value.substr(2,2),10),year=parseInt(value.substr(4,2),10),century=parseInt(value.charAt(9),10);year = century === 9?1900 + year:(20 + century) * 100 + year;if(!FormValidation.Helper.date(year,month,day,true)){return false;} // Validate the check digit
	var sum=0,weight=[3,2,7,6,5,4,3,2];for(var i=0;i < 8;i++) {sum += parseInt(value.charAt(i),10) * weight[i];}sum = 11 - sum % 11;return sum + '' === value.charAt(8);}, /**
	         * Validate Lithuanian Personal Code (Asmens kodas)
	         * Examples:
	         * - Valid: 38703181745
	         * - Invalid: 38703181746, 78703181745, 38703421745
	         *
	         * @see http://en.wikipedia.org/wiki/National_identification_number#Lithuania
	         * @see http://www.adomas.org/midi2007/pcode.html
	         * @param {String} value The ID
	         * @returns {Boolean}
	         */_lt:function _lt(value){if(!/^[0-9]{11}$/.test(value)){return false;}var gender=parseInt(value.charAt(0),10),year=parseInt(value.substr(1,2),10),month=parseInt(value.substr(3,2),10),day=parseInt(value.substr(5,2),10),century=gender % 2 === 0?17 + gender / 2:17 + (gender + 1) / 2;year = century * 100 + year;if(!FormValidation.Helper.date(year,month,day,true)){return false;} // Validate the check digit
	var sum=0,weight=[1,2,3,4,5,6,7,8,9,1];for(var i=0;i < 10;i++) {sum += parseInt(value.charAt(i),10) * weight[i];}sum = sum % 11;if(sum !== 10){return sum + '' === value.charAt(10);} // Re-calculate the check digit
	sum = 0;weight = [3,4,5,6,7,8,9,1,2,3];for(i = 0;i < 10;i++) {sum += parseInt(value.charAt(i),10) * weight[i];}sum = sum % 11;if(sum === 10){sum = 0;}return sum + '' === value.charAt(10);}, /**
	         * Validate Latvian Personal Code (Personas kods)
	         * Examples:
	         * - Valid: 161175-19997, 16117519997
	         * - Invalid: 161375-19997
	         *
	         * @see http://laacz.lv/2006/11/25/pk-parbaudes-algoritms/
	         * @param {String} value The ID
	         * @returns {Boolean}
	         */_lv:function _lv(value){if(!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(value)){return false;}value = value.replace(/\D/g,''); // Check birth date
	var day=parseInt(value.substr(0,2),10),month=parseInt(value.substr(2,2),10),year=parseInt(value.substr(4,2),10);year = year + 1800 + parseInt(value.charAt(6),10) * 100;if(!FormValidation.Helper.date(year,month,day,true)){return false;} // Check personal code
	var sum=0,weight=[10,5,8,4,2,1,6,3,7,9];for(var i=0;i < 10;i++) {sum += parseInt(value.charAt(i),10) * weight[i];}sum = (sum + 1) % 11 % 10;return sum + '' === value.charAt(10);}, /**
	         * Validate Dutch national identification number (BSN)
	         * Examples:
	         * - Valid: 111222333, 941331490, 9413.31.490
	         * - Invalid: 111252333
	         *
	         * @see https://nl.wikipedia.org/wiki/Burgerservicenummer
	         * @param {String} value The ID
	         * @returns {Boolean}
	         */_nl:function _nl(value){while(value.length < 9) {value = '0' + value;}if(!/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(value)){return false;}value = value.replace(/\./g,'');if(parseInt(value,10) === 0){return false;}var sum=0,length=value.length;for(var i=0;i < length - 1;i++) {sum += (9 - i) * parseInt(value.charAt(i),10);}sum = sum % 11;if(sum === 10){sum = 0;}return sum + '' === value.charAt(length - 1);}, /**
	         * Validate Poland citizen number (PESEL)
	         *
	         * @see http://en.wikipedia.org/wiki/National_identification_number#Poland
	         * @see http://en.wikipedia.org/wiki/PESEL
	         * @param {String} value The ID
	         * @returns {Boolean}
	         */_pl:function _pl(value){if(!/^[0-9]{11}$/.test(value)){return false;}var sum=0,length=value.length,weight=[1,3,7,9,1,3,7,9,1,3,7];for(var i=0;i < length - 1;i++) {sum += weight[i] * parseInt(value.charAt(i),10);}sum = sum % 10;if(sum === 0){sum = 10;}sum = 10 - sum;return sum + '' === value.charAt(length - 1);}, /**
	         * Validate Romanian numerical personal code (CNP)
	         * Examples:
	         * - Valid: 1630615123457, 1800101221144
	         * - Invalid: 8800101221144, 1632215123457, 1630615123458
	         *
	         * @see http://en.wikipedia.org/wiki/National_identification_number#Romania
	         * @param {String} value The ID
	         * @returns {Boolean}
	         */_ro:function _ro(value){if(!/^[0-9]{13}$/.test(value)){return false;}var gender=parseInt(value.charAt(0),10);if(gender === 0 || gender === 7 || gender === 8){return false;} // Determine the date of birth
	var year=parseInt(value.substr(1,2),10),month=parseInt(value.substr(3,2),10),day=parseInt(value.substr(5,2),10), // The year of date is determined base on the gender
	centuries={'1':1900, // Male born between 1900 and 1999
	'2':1900, // Female born between 1900 and 1999
	'3':1800, // Male born between 1800 and 1899
	'4':1800, // Female born between 1800 and 1899
	'5':2000, // Male born after 2000
	'6':2000 // Female born after 2000
	};if(day > 31 && month > 12){return false;}if(gender !== 9){year = centuries[gender + ''] + year;if(!FormValidation.Helper.date(year,month,day)){return false;}} // Validate the check digit
	var sum=0,weight=[2,7,9,1,4,6,3,5,8,2,7,9],length=value.length;for(var i=0;i < length - 1;i++) {sum += parseInt(value.charAt(i),10) * weight[i];}sum = sum % 11;if(sum === 10){sum = 1;}return sum + '' === value.charAt(length - 1);}, /**
	         * Validate Swedish personal identity number (personnummer)
	         * Examples:
	         * - Valid: 8112289874, 811228-9874, 811228+9874
	         * - Invalid: 811228-9873
	         *
	         * @see http://en.wikipedia.org/wiki/Personal_identity_number_(Sweden)
	         * @param {String} value The ID
	         * @returns {Boolean}
	         */_se:function _se(value){if(!/^[0-9]{10}$/.test(value) && !/^[0-9]{6}[-|+][0-9]{4}$/.test(value)){return false;}value = value.replace(/[^0-9]/g,'');var year=parseInt(value.substr(0,2),10) + 1900,month=parseInt(value.substr(2,2),10),day=parseInt(value.substr(4,2),10);if(!FormValidation.Helper.date(year,month,day)){return false;} // Validate the last check digit
	return FormValidation.Helper.luhn(value);}, /**
	         * Validate Slovak national identifier number (RC)
	         * Examples:
	         * - Valid: 7103192745, 991231123
	         * - Invalid: 7103192746, 1103492745
	         *
	         * @param {String} value The ID
	         * @returns {Boolean}
	         */_sk:function _sk(value){ // Slovakia uses the same format as Czech Republic
	return this._cz(value);}, /**
	         * Validate San Marino citizen number
	         *
	         * @see http://en.wikipedia.org/wiki/National_identification_number#San_Marino
	         * @param {String} value The ID
	         * @returns {Boolean}
	         */_sm:function _sm(value){return (/^\d{5}$/.test(value));}, /**
	         * Validate Thailand citizen number
	         * Examples:
	         * - Valid: 7145620509547, 3688699975685, 2368719339716
	         * - Invalid: 1100800092310
	         *
	         * @see http://en.wikipedia.org/wiki/National_identification_number#Thailand
	         * @param {String} value The ID
	         * @returns {Boolean}
	         */_th:function _th(value){if(value.length !== 13){return false;}var sum=0;for(var i=0;i < 12;i++) {sum += parseInt(value.charAt(i),10) * (13 - i);}return (11 - sum % 11) % 10 === parseInt(value.charAt(12),10);}, /**
	         * Validate South African ID
	         * Example:
	         * - Valid: 8001015009087
	         * - Invalid: 8001015009287, 8001015009086
	         *
	         * @see http://en.wikipedia.org/wiki/National_identification_number#South_Africa
	         * @param {String} value The ID
	         * @returns {Boolean}
	         */_za:function _za(value){if(!/^[0-9]{10}[0|1][8|9][0-9]$/.test(value)){return false;}var year=parseInt(value.substr(0,2),10),currentYear=new Date().getFullYear() % 100,month=parseInt(value.substr(2,2),10),day=parseInt(value.substr(4,2),10);year = year >= currentYear?year + 1900:year + 2000;if(!FormValidation.Helper.date(year,month,day)){return false;} // Validate the last check digit
	return FormValidation.Helper.luhn(value);}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{identical:{'default':'Please enter the same value'}}});FormValidation.Validator.identical = {html5Attributes:{message:'message',field:'field'}, /**
	         * Bind the validator on the live change of the field to compare with current one
	         *
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Consists of the following key:
	         * - field: The name of field that will be used to compare with current one
	         */init:function init(validator,$field,options){var compareWith=validator.getFieldElements(options.field);validator.onLiveChange(compareWith,'live_identical',function(){var status=validator.getStatus($field,'identical');if(status !== validator.STATUS_NOT_VALIDATED){validator.revalidateField($field);}});}, /**
	         * Unbind the validator on the live change of the field to compare with current one
	         *
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Consists of the following key:
	         * - field: The name of field that will be used to compare with current one
	         */destroy:function destroy(validator,$field,options){var compareWith=validator.getFieldElements(options.field);validator.offLiveChange(compareWith,'live_identical');}, /**
	         * Check if input value equals to value of particular one
	         *
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Consists of the following key:
	         * - field: The name of field that will be used to compare with current one
	         * @returns {Boolean}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'identical'),compareWith=validator.getFieldElements(options.field);if(compareWith === null || compareWith.length === 0){return true;}var compareValue=validator.getFieldValue(compareWith,'identical');if(value === compareValue){validator.updateStatus(compareWith,validator.STATUS_VALID,'identical');return true;}return false;}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{imei:{'default':'Please enter a valid IMEI number'}}});FormValidation.Validator.imei = { /**
	         * Validate IMEI (International Mobile Station Equipment Identity)
	         * Examples:
	         * - Valid: 35-209900-176148-1, 35-209900-176148-23, 3568680000414120, 490154203237518
	         * - Invalid: 490154203237517
	         *
	         * @see http://en.wikipedia.org/wiki/International_Mobile_Station_Equipment_Identity
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Can consist of the following keys:
	         * - message: The invalid message
	         * @returns {Boolean}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'imei');if(value === ''){return true;}switch(true){case /^\d{15}$/.test(value):case /^\d{2}-\d{6}-\d{6}-\d{1}$/.test(value):case /^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(value):value = value.replace(/[^0-9]/g,'');return FormValidation.Helper.luhn(value);case /^\d{14}$/.test(value):case /^\d{16}$/.test(value):case /^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(value):case /^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(value):return true;default:return false;}}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{imo:{'default':'Please enter a valid IMO number'}}});FormValidation.Validator.imo = { /**
	         * Validate IMO (International Maritime Organization)
	         * Examples:
	         * - Valid: IMO 8814275, IMO 9176187
	         * - Invalid: IMO 8814274
	         *
	         * @see http://en.wikipedia.org/wiki/IMO_Number
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Can consist of the following keys:
	         * - message: The invalid message
	         * @returns {Boolean}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'imo');if(value === ''){return true;}if(!/^IMO \d{7}$/i.test(value)){return false;} // Grab just the digits
	var sum=0,digits=value.replace(/^.*(\d{7})$/,'$1'); // Go over each char, multiplying by the inverse of it's position
	// IMO 9176187
	// (9 * 7) + (1 * 6) + (7 * 5) + (6 * 4) + (1 * 3) + (8 * 2) = 147
	// Take the last digit of that, that's the check digit (7)
	for(var i=6;i >= 1;i--) {sum += digits.slice(6 - i,-i) * (i + 1);}return sum % 10 === parseInt(digits.charAt(6),10);}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{integer:{'default':'Please enter a valid number'}}});FormValidation.Validator.integer = {enableByHtml5:function enableByHtml5($field){return 'number' === $field.attr('type') && ($field.attr('step') === undefined || $field.attr('step') % 1 === 0);}, /**
	         * Return true if the input value is an integer
	         *
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Can consist of the following key:
	         * - message: The invalid message
	         * @returns {Boolean}
	         */validate:function validate(validator,$field,options){if(this.enableByHtml5($field) && $field.get(0).validity && $field.get(0).validity.badInput === true){return false;}var value=validator.getFieldValue($field,'integer');if(value === ''){return true;}return (/^(?:-?(?:0|[1-9][0-9]*))$/.test(value));}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{ip:{'default':'Please enter a valid IP address',ipv4:'Please enter a valid IPv4 address',ipv6:'Please enter a valid IPv6 address'}}});FormValidation.Validator.ip = {html5Attributes:{message:'message',ipv4:'ipv4',ipv6:'ipv6'}, /**
	         * Return true if the input value is a IP address.
	         *
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Can consist of the following keys:
	         * - ipv4: Enable IPv4 validator, default to true
	         * - ipv6: Enable IPv6 validator, default to true
	         * - message: The invalid message
	         * @returns {Boolean|Object}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'ip');if(value === ''){return true;}options = $.extend({},{ipv4:true,ipv6:true},options);var locale=validator.getLocale(),ipv4Regex=/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,ipv6Regex=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,valid=false,message;switch(true){case options.ipv4 && !options.ipv6:valid = ipv4Regex.test(value);message = options.message || FormValidation.I18n[locale].ip.ipv4;break;case !options.ipv4 && options.ipv6:valid = ipv6Regex.test(value);message = options.message || FormValidation.I18n[locale].ip.ipv6;break;case options.ipv4 && options.ipv6: /* falls through */default:valid = ipv4Regex.test(value) || ipv6Regex.test(value);message = options.message || FormValidation.I18n[locale].ip['default'];break;}return {valid:valid,message:message};}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{isbn:{'default':'Please enter a valid ISBN number'}}});FormValidation.Validator.isbn = { /**
	         * Return true if the input value is a valid ISBN 10 or ISBN 13 number
	         * Examples:
	         * - Valid:
	         * ISBN 10: 99921-58-10-7, 9971-5-0210-0, 960-425-059-0, 80-902734-1-6, 85-359-0277-5, 1-84356-028-3, 0-684-84328-5, 0-8044-2957-X, 0-85131-041-9, 0-943396-04-2, 0-9752298-0-X
	         * ISBN 13: 978-0-306-40615-7
	         * - Invalid:
	         * ISBN 10: 99921-58-10-6
	         * ISBN 13: 978-0-306-40615-6
	         *
	         * @see http://en.wikipedia.org/wiki/International_Standard_Book_Number
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} [options] Can consist of the following keys:
	         * - message: The invalid message
	         * @returns {Boolean}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'isbn');if(value === ''){return true;} // http://en.wikipedia.org/wiki/International_Standard_Book_Number#Overview
	// Groups are separated by a hyphen or a space
	var type;switch(true){case /^\d{9}[\dX]$/.test(value):case value.length === 13 && /^(\d+)-(\d+)-(\d+)-([\dX])$/.test(value):case value.length === 13 && /^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(value):type = 'ISBN10';break;case /^(978|979)\d{9}[\dX]$/.test(value):case value.length === 17 && /^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(value):case value.length === 17 && /^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(value):type = 'ISBN13';break;default:return false;} // Replace all special characters except digits and X
	value = value.replace(/[^0-9X]/gi,'');var chars=value.split(''),length=chars.length,sum=0,i,checksum;switch(type){case 'ISBN10':sum = 0;for(i = 0;i < length - 1;i++) {sum += parseInt(chars[i],10) * (10 - i);}checksum = 11 - sum % 11;if(checksum === 11){checksum = 0;}else if(checksum === 10){checksum = 'X';}return checksum + '' === chars[length - 1];case 'ISBN13':sum = 0;for(i = 0;i < length - 1;i++) {sum += i % 2 === 0?parseInt(chars[i],10):parseInt(chars[i],10) * 3;}checksum = 10 - sum % 10;if(checksum === 10){checksum = '0';}return checksum + '' === chars[length - 1];default:return false;}}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{isin:{'default':'Please enter a valid ISIN number'}}});FormValidation.Validator.isin = { // Available country codes
	// See http://isin.net/country-codes/
	COUNTRY_CODES:'AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW', /**
	         * Validate an ISIN (International Securities Identification Number)
	         * Examples:
	         * - Valid: US0378331005, AU0000XVGZA3, GB0002634946
	         * - Invalid: US0378331004, AA0000XVGZA3
	         *
	         * @see http://en.wikipedia.org/wiki/International_Securities_Identifying_Number
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Can consist of the following keys:
	         * - message: The invalid message
	         * @returns {Boolean}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'isin');if(value === ''){return true;}value = value.toUpperCase();var regex=new RegExp('^(' + this.COUNTRY_CODES + ')[0-9A-Z]{10}$');if(!regex.test(value)){return false;}var converted='',length=value.length; // Convert letters to number
	for(var i=0;i < length - 1;i++) {var c=value.charCodeAt(i);converted += c > 57?(c - 55).toString():value.charAt(i);}var digits='',n=converted.length,group=n % 2 !== 0?0:1;for(i = 0;i < n;i++) {digits += parseInt(converted[i],10) * (i % 2 === group?2:1) + '';}var sum=0;for(i = 0;i < digits.length;i++) {sum += parseInt(digits.charAt(i),10);}sum = (10 - sum % 10) % 10;return sum + '' === value.charAt(length - 1);}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{ismn:{'default':'Please enter a valid ISMN number'}}});FormValidation.Validator.ismn = { /**
	         * Validate ISMN (International Standard Music Number)
	         * Examples:
	         * - Valid: M230671187, 979-0-0601-1561-5, 979 0 3452 4680 5, 9790060115615
	         * - Invalid: 9790060115614
	         *
	         * @see http://en.wikipedia.org/wiki/International_Standard_Music_Number
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Can consist of the following keys:
	         * - message: The invalid message
	         * @returns {Boolean}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'ismn');if(value === ''){return true;} // Groups are separated by a hyphen or a space
	var type;switch(true){case /^M\d{9}$/.test(value):case /^M-\d{4}-\d{4}-\d{1}$/.test(value):case /^M\s\d{4}\s\d{4}\s\d{1}$/.test(value):type = 'ISMN10';break;case /^9790\d{9}$/.test(value):case /^979-0-\d{4}-\d{4}-\d{1}$/.test(value):case /^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(value):type = 'ISMN13';break;default:return false;}if('ISMN10' === type){value = '9790' + value.substr(1);} // Replace all special characters except digits
	value = value.replace(/[^0-9]/gi,'');var length=value.length,sum=0,weight=[1,3];for(var i=0;i < length - 1;i++) {sum += parseInt(value.charAt(i),10) * weight[i % 2];}sum = 10 - sum % 10;return sum + '' === value.charAt(length - 1);}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{issn:{'default':'Please enter a valid ISSN number'}}});FormValidation.Validator.issn = { /**
	         * Validate ISSN (International Standard Serial Number)
	         * Examples:
	         * - Valid: 0378-5955, 0024-9319, 0032-1478
	         * - Invalid: 0032-147X
	         *
	         * @see http://en.wikipedia.org/wiki/International_Standard_Serial_Number
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Can consist of the following keys:
	         * - message: The invalid message
	         * @returns {Boolean}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'issn');if(value === ''){return true;} // Groups are separated by a hyphen or a space
	if(!/^\d{4}\-\d{3}[\dX]$/.test(value)){return false;} // Replace all special characters except digits and X
	value = value.replace(/[^0-9X]/gi,'');var chars=value.split(''),length=chars.length,sum=0;if(chars[7] === 'X'){chars[7] = 10;}for(var i=0;i < length;i++) {sum += parseInt(chars[i],10) * (8 - i);}return sum % 11 === 0;}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{lessThan:{'default':'Please enter a value less than or equal to %s',notInclusive:'Please enter a value less than %s'}}});FormValidation.Validator.lessThan = {html5Attributes:{message:'message',value:'value',inclusive:'inclusive'},enableByHtml5:function enableByHtml5($field){var type=$field.attr('type'),max=$field.attr('max');if(max && type !== 'date'){return {value:max};}return false;}, /**
	         * Return true if the input value is less than or equal to given number
	         *
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Can consist of the following keys:
	         * - value: The number used to compare to. It can be
	         *      - A number
	         *      - Name of field which its value defines the number
	         *      - Name of callback function that returns the number
	         *      - A callback function that returns the number
	         *
	         * - inclusive [optional]: Can be true or false. Default is true
	         * - message: The invalid message
	         * @returns {Boolean|Object}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'lessThan');if(value === ''){return true;}value = this._format(value);if(!$.isNumeric(value)){return false;}var locale=validator.getLocale(),compareTo=$.isNumeric(options.value)?options.value:validator.getDynamicOption($field,options.value),compareToValue=this._format(compareTo);value = parseFloat(value);return options.inclusive === true || options.inclusive === undefined?{valid:value <= compareToValue,message:FormValidation.Helper.format(options.message || FormValidation.I18n[locale].lessThan['default'],compareTo)}:{valid:value < compareToValue,message:FormValidation.Helper.format(options.message || FormValidation.I18n[locale].lessThan.notInclusive,compareTo)};},_format:function _format(value){return (value + '').replace(',','.');}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{mac:{'default':'Please enter a valid MAC address'}}});FormValidation.Validator.mac = { /**
	         * Return true if the input value is a MAC address.
	         *
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Can consist of the following keys:
	         * - message: The invalid message
	         * @returns {Boolean}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'mac');if(value === ''){return true;}return (/^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/.test(value));}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{meid:{'default':'Please enter a valid MEID number'}}});FormValidation.Validator.meid = { /**
	         * Validate MEID (Mobile Equipment Identifier)
	         * Examples:
	         * - Valid: 293608736500703710, 29360-87365-0070-3710, AF0123450ABCDE, AF-012345-0ABCDE
	         * - Invalid: 2936087365007037101
	         *
	         * @see http://en.wikipedia.org/wiki/Mobile_equipment_identifier
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Can consist of the following keys:
	         * - message: The invalid message
	         * @returns {Boolean}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'meid');if(value === ''){return true;}switch(true){ // 14 digit hex representation (no check digit)
	case /^[0-9A-F]{15}$/i.test(value): // 14 digit hex representation + dashes or spaces (no check digit)
	case /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}[- ][0-9A-F]$/i.test(value): // 18 digit decimal representation (no check digit)
	case /^\d{19}$/.test(value): // 18 digit decimal representation + dashes or spaces (no check digit)
	case /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}[- ]\d$/.test(value): // Grab the check digit
	var cd=value.charAt(value.length - 1); // Strip any non-hex chars
	value = value.replace(/[- ]/g,''); // If it's all digits, luhn base 10 is used
	if(value.match(/^\d*$/i)){return FormValidation.Helper.luhn(value);} // Strip the check digit
	value = value.slice(0,-1); // Get every other char, and double it
	var cdCalc='';for(var i=1;i <= 13;i += 2) {cdCalc += (parseInt(value.charAt(i),16) * 2).toString(16);} // Get the sum of each char in the string
	var sum=0;for(i = 0;i < cdCalc.length;i++) {sum += parseInt(cdCalc.charAt(i),16);} // If the last digit of the calc is 0, the check digit is 0
	return sum % 10 === 0?cd === '0': // Subtract it from the next highest 10s number (64 goes to 70) and subtract the sum
	// Double it and turn it into a hex char
	cd === ((Math.floor((sum + 10) / 10) * 10 - sum) * 2).toString(16); // 14 digit hex representation (no check digit)
	case /^[0-9A-F]{14}$/i.test(value): // 14 digit hex representation + dashes or spaces (no check digit)
	case /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}$/i.test(value): // 18 digit decimal representation (no check digit)
	case /^\d{18}$/.test(value): // 18 digit decimal representation + dashes or spaces (no check digit)
	case /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}$/.test(value):return true;default:return false;}}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{notEmpty:{'default':'Please enter a value'}}});FormValidation.Validator.notEmpty = {enableByHtml5:function enableByHtml5($field){var required=$field.attr('required') + '';return 'required' === required || 'true' === required;}, /**
	         * Check if input value is empty or not
	         *
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options
	         * @returns {Boolean}
	         */validate:function validate(validator,$field,options){var type=$field.attr('type');if('radio' === type || 'checkbox' === type){var ns=validator.getNamespace();return validator.getFieldElements($field.attr('data-' + ns + '-field')).filter(':checked').length > 0;}if('number' === type && $field.get(0).validity && $field.get(0).validity.badInput === true){return true;}var value=validator.getFieldValue($field,'notEmpty');return $.trim(value) !== '';}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{numeric:{'default':'Please enter a valid float number'}}});FormValidation.Validator.numeric = {html5Attributes:{message:'message',separator:'separator'},enableByHtml5:function enableByHtml5($field){return 'number' === $field.attr('type') && $field.attr('step') !== undefined && $field.attr('step') % 1 !== 0;}, /**
	         * Validate decimal number
	         *
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Consist of key:
	         * - message: The invalid message
	         * - separator: The decimal separator. Can be "." (default), ","
	         * @returns {Boolean}
	         */validate:function validate(validator,$field,options){if(this.enableByHtml5($field) && $field.get(0).validity && $field.get(0).validity.badInput === true){return false;}var value=validator.getFieldValue($field,'numeric');if(value === ''){return true;}var separator=options.separator || '.';if(separator !== '.'){value = value.replace(separator,'.');}return !isNaN(parseFloat(value)) && isFinite(value);}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{phone:{'default':'Please enter a valid phone number',country:'Please enter a valid phone number in %s',countries:{AE:'United Arab Emirates',BG:'Bulgaria',BR:'Brazil',CN:'China',CZ:'Czech Republic',DE:'Germany',DK:'Denmark',ES:'Spain',FR:'France',GB:'United Kingdom',IN:'India',MA:'Morocco',NL:'Netherlands',PK:'Pakistan',RO:'Romania',RU:'Russia',SK:'Slovakia',TH:'Thailand',US:'USA',VE:'Venezuela'}}}});FormValidation.Validator.phone = {html5Attributes:{message:'message',country:'country'}, // The supported countries
	COUNTRY_CODES:['AE','BG','BR','CN','CZ','DE','DK','ES','FR','GB','IN','MA','NL','PK','RO','RU','SK','TH','US','VE'], /**
	         * Return true if the input value contains a valid phone number for the country
	         * selected in the options
	         *
	         * @param {FormValidation.Base} validator Validate plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Consist of key:
	         * - message: The invalid message
	         * - country: The ISO-3166 country code. It can be
	         *      - A country code
	         *      - Name of field which its value defines the country code
	         *      - Name of callback function that returns the country code
	         *      - A callback function that returns the country code
	         *
	         * @returns {Boolean|Object}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'phone');if(value === ''){return true;}var locale=validator.getLocale(),country=options.country;if(typeof country !== 'string' || $.inArray(country,this.COUNTRY_CODES) === -1){ // Try to determine the country
	country = validator.getDynamicOption($field,country);}if(!country || $.inArray(country.toUpperCase(),this.COUNTRY_CODES) === -1){return true;}var isValid=true;switch(country.toUpperCase()){case 'AE': // http://regexr.com/39tak
	value = $.trim(value);isValid = /^(((\+|00)?971[\s\.-]?(\(0\)[\s\.-]?)?|0)(\(5(0|2|5|6)\)|5(0|2|5|6)|2|3|4|6|7|9)|60)([\s\.-]?[0-9]){7}$/.test(value);break;case 'BG': // https://regex101.com/r/yE6vN4/1
	// See http://en.wikipedia.org/wiki/Telephone_numbers_in_Bulgaria
	value = value.replace(/\+|\s|-|\/|\(|\)/gi,'');isValid = /^(0|359|00)(((700|900)[0-9]{5}|((800)[0-9]{5}|(800)[0-9]{4}))|(87|88|89)([0-9]{7})|((2[0-9]{7})|(([3-9][0-9])(([0-9]{6})|([0-9]{5})))))$/.test(value);break;case 'BR': // http://regexr.com/399m1
	value = $.trim(value);isValid = /^(([\d]{4}[-.\s]{1}[\d]{2,3}[-.\s]{1}[\d]{2}[-.\s]{1}[\d]{2})|([\d]{4}[-.\s]{1}[\d]{3}[-.\s]{1}[\d]{4})|((\(?\+?[0-9]{2}\)?\s?)?(\(?\d{2}\)?\s?)?\d{4,5}[-.\s]?\d{4}))$/.test(value);break;case 'CN': // http://regexr.com/39dq4
	value = $.trim(value);isValid = /^((00|\+)?(86(?:-| )))?((\d{11})|(\d{3}[- ]{1}\d{4}[- ]{1}\d{4})|((\d{2,4}[- ]){1}(\d{7,8}|(\d{3,4}[- ]{1}\d{4}))([- ]{1}\d{1,4})?))$/.test(value);break;case 'CZ': // http://regexr.com/39hhl
	isValid = /^(((00)([- ]?)|\+)(420)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(value);break;case 'DE': // http://regexr.com/39pkg
	value = $.trim(value);isValid = /^(((((((00|\+)49[ \-/]?)|0)[1-9][0-9]{1,4})[ \-/]?)|((((00|\+)49\()|\(0)[1-9][0-9]{1,4}\)[ \-/]?))[0-9]{1,7}([ \-/]?[0-9]{1,5})?)$/.test(value);break;case 'DK': // Mathing DK phone numbers with country code in 1 of 3 formats and an
	// 8 digit phone number not starting with a 0 or 1. Can have 1 space
	// between each character except inside the country code.
	// http://regex101.com/r/sS8fO4/1
	value = $.trim(value);isValid = /^(\+45|0045|\(45\))?\s?[2-9](\s?\d){7}$/.test(value);break;case 'ES': // http://regex101.com/r/rB9mA9/1
	// Telephone numbers in Spain go like this:
	//     9: Landline phones and special prefixes.
	//     6, 7: Mobile phones.
	//     5: VoIP lines.
	//     8: Premium-rate services.
	// There are also special 5-digit and 3-digit numbers, but
	// maybe it would be overkill to include them all.
	value = $.trim(value);isValid = /^(?:(?:(?:\+|00)34\D?))?(?:5|6|7|8|9)(?:\d\D?){8}$/.test(value);break;case 'FR': // http://regexr.com/39a2p
	value = $.trim(value);isValid = /^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/.test(value);break;case 'GB': // http://aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers#Match_GB_telephone_number_in_any_format
	// http://regexr.com/38uhv
	value = $.trim(value);isValid = /^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|\#)\d+)?)$/.test(value);break;case 'IN': // http://stackoverflow.com/questions/18351553/regular-expression-validation-for-indian-phone-number-and-mobile-number
	// http://regex101.com/r/qL6eZ5/1
	// May begin with +91. Supports mobile and land line numbers
	value = $.trim(value);isValid = /((\+?)((0[ -]+)*|(91 )*)(\d{12}|\d{10}))|\d{5}([- ]*)\d{6}/.test(value);break;case 'MA': // http://en.wikipedia.org/wiki/Telephone_numbers_in_Morocco
	// http://regexr.com/399n8
	value = $.trim(value);isValid = /^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/.test(value);break;case 'NL': // http://en.wikipedia.org/wiki/Telephone_numbers_in_the_Netherlands
	// http://regexr.com/3aevr
	value = $.trim(value);isValid = /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/gm.test(value);break;case 'PK': // http://regex101.com/r/yH8aV9/2
	value = $.trim(value);isValid = /^0?3[0-9]{2}[0-9]{7}$/.test(value);break;case 'RO': // All mobile network and land line
	// http://regexr.com/39fv1
	isValid = /^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|\-)?([0-9]{3}(\s|\.|\-|)){2}$/g.test(value);break;case 'RU': // http://regex101.com/r/gW7yT5/5
	isValid = /^((8|\+7|007)[\-\.\/ ]?)?([\(\/\.]?\d{3}[\)\/\.]?[\-\.\/ ]?)?[\d\-\.\/ ]{7,10}$/g.test(value);break;case 'SK': // http://regexr.com/3a95f
	isValid = /^(((00)([- ]?)|\+)(421)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(value);break;case 'TH': // http://regex101.com/r/vM5mZ4/2
	isValid = /^0\(?([6|8-9]{2})*-([0-9]{3})*-([0-9]{4})$/.test(value);break;case 'VE': // http://regex101.com/r/eM2yY0/6
	value = $.trim(value);isValid = /^0(?:2(?:12|4[0-9]|5[1-9]|6[0-9]|7[0-8]|8[1-35-8]|9[1-5]|3[45789])|4(?:1[246]|2[46]))\d{7}$/.test(value);break;case 'US': /* falls through */default: // Make sure US phone numbers have 10 digits
	// May start with 1, +1, or 1-; should discard
	// Area code may be delimited with (), & sections may be delimited with . or -
	// http://regexr.com/38mqi
	isValid = /^(?:(1\-?)|(\+1 ?))?\(?(\d{3})[\)\-\.]?(\d{3})[\-\.]?(\d{4})$/.test(value);break;}return {valid:isValid,message:FormValidation.Helper.format(options.message || FormValidation.I18n[locale].phone.country,FormValidation.I18n[locale].phone.countries[country])};}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{regexp:{'default':'Please enter a value matching the pattern'}}});FormValidation.Validator.regexp = {html5Attributes:{message:'message',regexp:'regexp'},enableByHtml5:function enableByHtml5($field){var pattern=$field.attr('pattern');if(pattern){return {regexp:pattern};}return false;}, /**
	         * Check if the element value matches given regular expression
	         *
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Consists of the following key:
	         * - regexp: The regular expression you need to check
	         * @returns {Boolean}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'regexp');if(value === ''){return true;}var regexp='string' === typeof options.regexp?new RegExp(options.regexp):options.regexp;return regexp.test(value);}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{remote:{'default':'Please enter a valid value'}}});FormValidation.Validator.remote = {html5Attributes:{crossdomain:'crossDomain',data:'data',datatype:'dataType',delay:'delay',message:'message',name:'name',type:'type',url:'url',validkey:'validKey'}, /**
	         * Destroy the timer when destroying the FormValidation (using validator.destroy() method)
	         */destroy:function destroy(validator,$field,options){var ns=validator.getNamespace(),timer=$field.data(ns + '.remote.timer');if(timer){clearTimeout(timer);$field.removeData(ns + '.remote.timer');}}, /**
	         * Request a remote server to check the input value
	         *
	         * @param {FormValidation.Base} validator Plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Can consist of the following keys:
	         * - crossDomain {Boolean} [optional]
	         * - data {Object|Function} [optional]: By default, it will take the value
	         *  {
	         *      <fieldName>: <fieldValue>
	         *  }
	         * - dataType {String} [optional]: The type of data which is returned by remote server.
	         * It can be json (default), text, script
	         * - delay {Number} [optional]
	         * - headers {String[]} [optional]: Additional headers
	         * - message {String} [optional]: The invalid message
	         * - name {String} [optional]: Override the field name for the request.
	         * - type {String} [optional] Can be GET or POST (default)
	         * - url {String|Function}
	         * - validKey {String} [optional]: The valid key. It's "valid" by default
	         * This is useful when connecting to external remote server or APIs provided by 3rd parties
	         * @returns {Deferred}
	         */validate:function validate(validator,$field,options){var ns=validator.getNamespace(),value=validator.getFieldValue($field,'remote'),dfd=new $.Deferred();if(value === ''){dfd.resolve($field,'remote',{valid:true});return dfd;}var name=$field.attr('data-' + ns + '-field'),data=options.data || {},url=options.url,validKey=options.validKey || 'valid'; // Support dynamic data
	if('function' === typeof data){data = data.call(this,validator);} // Parse string data from HTML5 attribute
	if('string' === typeof data){data = JSON.parse(data);} // Support dynamic url
	if('function' === typeof url){url = url.call(this,validator);}data[options.name || name] = value;var ajaxOptions={data:data,dataType:options.dataType || 'json',headers:options.headers || {},type:options.type || 'GET',url:url};if(options.crossDomain !== null){ajaxOptions.crossDomain = options.crossDomain === true || options.crossDomain === 'true';}function runCallback(){var xhr=$.ajax(ajaxOptions);xhr.success(function(response){response.valid = response[validKey] === true || response[validKey] === 'true';dfd.resolve($field,'remote',response);}).error(function(response){dfd.resolve($field,'remote',{valid:false});});dfd.fail(function(){xhr.abort();});return dfd;}if(options.delay){ // Since the form might have multiple fields with the same name
	// I have to attach the timer to the field element
	if($field.data(ns + '.remote.timer')){clearTimeout($field.data(ns + '.remote.timer'));}$field.data(ns + '.remote.timer',setTimeout(runCallback,options.delay));return dfd;}else {return runCallback();}}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{rtn:{'default':'Please enter a valid RTN number'}}});FormValidation.Validator.rtn = { /**
	         * Validate a RTN (Routing transit number)
	         * Examples:
	         * - Valid: 021200025, 789456124
	         *
	         * @see http://en.wikipedia.org/wiki/Routing_transit_number
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Can consist of the following keys:
	         * - message: The invalid message
	         * @returns {Boolean}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'rtn');if(value === ''){return true;}if(!/^\d{9}$/.test(value)){return false;}var sum=0;for(var i=0;i < value.length;i += 3) {sum += parseInt(value.charAt(i),10) * 3 + parseInt(value.charAt(i + 1),10) * 7 + parseInt(value.charAt(i + 2),10);}return sum !== 0 && sum % 10 === 0;}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{sedol:{'default':'Please enter a valid SEDOL number'}}});FormValidation.Validator.sedol = { /**
	         * Validate a SEDOL (Stock Exchange Daily Official List)
	         * Examples:
	         * - Valid: 0263494, B0WNLY7
	         *
	         * @see http://en.wikipedia.org/wiki/SEDOL
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Can consist of the following keys:
	         * - message: The invalid message
	         * @returns {Boolean}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'sedol');if(value === ''){return true;}value = value.toUpperCase();if(!/^[0-9A-Z]{7}$/.test(value)){return false;}var sum=0,weight=[1,3,1,7,3,9,1],length=value.length;for(var i=0;i < length - 1;i++) {sum += weight[i] * parseInt(value.charAt(i),36);}sum = (10 - sum % 10) % 10;return sum + '' === value.charAt(length - 1);}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{siren:{'default':'Please enter a valid SIREN number'}}});FormValidation.Validator.siren = { /**
	         * Check if a string is a siren number
	         *
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Consist of key:
	         * - message: The invalid message
	         * @returns {Boolean}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'siren');if(value === ''){return true;}if(!/^\d{9}$/.test(value)){return false;}return FormValidation.Helper.luhn(value);}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{siret:{'default':'Please enter a valid SIRET number'}}});FormValidation.Validator.siret = { /**
	         * Check if a string is a siret number
	         *
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Consist of key:
	         * - message: The invalid message
	         * @returns {Boolean}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'siret');if(value === ''){return true;}var sum=0,length=value.length,tmp;for(var i=0;i < length;i++) {tmp = parseInt(value.charAt(i),10);if(i % 2 === 0){tmp = tmp * 2;if(tmp > 9){tmp -= 9;}}sum += tmp;}return sum % 10 === 0;}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{step:{'default':'Please enter a valid step of %s'}}});FormValidation.Validator.step = {html5Attributes:{message:'message',base:'baseValue',step:'step'}, /**
	         * Return true if the input value is valid step one
	         *
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Can consist of the following keys:
	         * - baseValue: The base value
	         * - step: The step
	         * - message: The invalid message
	         * @returns {Boolean|Object}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'step');if(value === ''){return true;}options = $.extend({},{baseValue:0,step:1},options);value = parseFloat(value);if(!$.isNumeric(value)){return false;}var round=function round(x,precision){var m=Math.pow(10,precision);x = x * m;var sign=x > 0 | -(x < 0),isHalf=x % 1 === 0.5 * sign;if(isHalf){return (Math.floor(x) + (sign > 0)) / m;}else {return Math.round(x) / m;}},floatMod=function floatMod(x,y){if(y === 0.0){return 1.0;}var dotX=(x + '').split('.'),dotY=(y + '').split('.'),precision=(dotX.length === 1?0:dotX[1].length) + (dotY.length === 1?0:dotY[1].length);return round(x - y * Math.floor(x / y),precision);};var locale=validator.getLocale(),mod=floatMod(value - options.baseValue,options.step);return {valid:mod === 0.0 || mod === options.step,message:FormValidation.Helper.format(options.message || FormValidation.I18n[locale].step['default'],[options.step])};}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{stringCase:{'default':'Please enter only lowercase characters',upper:'Please enter only uppercase characters'}}});FormValidation.Validator.stringCase = {html5Attributes:{message:'message','case':'case'}, /**
	         * Check if a string is a lower or upper case one
	         *
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Consist of key:
	         * - message: The invalid message
	         * - case: Can be 'lower' (default) or 'upper'
	         * @returns {Object}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'stringCase');if(value === ''){return true;}var locale=validator.getLocale(),stringCase=(options['case'] || 'lower').toLowerCase();return {valid:'upper' === stringCase?value === value.toUpperCase():value === value.toLowerCase(),message:options.message || ('upper' === stringCase?FormValidation.I18n[locale].stringCase.upper:FormValidation.I18n[locale].stringCase['default'])};}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{stringLength:{'default':'Please enter a value with valid length',less:'Please enter less than %s characters',more:'Please enter more than %s characters',between:'Please enter value between %s and %s characters long'}}});FormValidation.Validator.stringLength = {html5Attributes:{message:'message',min:'min',max:'max',trim:'trim',utf8bytes:'utf8Bytes'},enableByHtml5:function enableByHtml5($field){var options={},maxLength=$field.attr('maxlength'),minLength=$field.attr('minlength');if(maxLength){options.max = parseInt(maxLength,10);}if(minLength){options.min = parseInt(minLength,10);}return $.isEmptyObject(options)?false:options;}, /**
	         * Check if the length of element value is less or more than given number
	         *
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Consists of following keys:
	         * - min
	         * - max
	         * At least one of two keys is required
	         * The min, max keys define the number which the field value compares to. min, max can be
	         *      - A number
	         *      - Name of field which its value defines the number
	         *      - Name of callback function that returns the number
	         *      - A callback function that returns the number
	         *
	         * - message: The invalid message
	         * - trim: Indicate the length will be calculated after trimming the value or not. It is false, by default
	         * - utf8bytes: Evaluate string length in UTF-8 bytes, default to false
	         * @returns {Object}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'stringLength');if(options.trim === true || options.trim === 'true'){value = $.trim(value);}if(value === ''){return true;}var locale=validator.getLocale(),min=$.isNumeric(options.min)?options.min:validator.getDynamicOption($field,options.min),max=$.isNumeric(options.max)?options.max:validator.getDynamicOption($field,options.max), // Credit to http://stackoverflow.com/a/23329386 (@lovasoa) for UTF-8 byte length code
	utf8Length=function utf8Length(str){var s=str.length;for(var i=str.length - 1;i >= 0;i--) {var code=str.charCodeAt(i);if(code > 0x7f && code <= 0x7ff){s++;}else if(code > 0x7ff && code <= 0xffff){s += 2;}if(code >= 0xDC00 && code <= 0xDFFF){i--;}}return s;},length=options.utf8Bytes?utf8Length(value):value.length,isValid=true,message=options.message || FormValidation.I18n[locale].stringLength['default'];if(min && length < parseInt(min,10) || max && length > parseInt(max,10)){isValid = false;}switch(true){case !!min && !!max:message = FormValidation.Helper.format(options.message || FormValidation.I18n[locale].stringLength.between,[parseInt(min,10),parseInt(max,10)]);break;case !!min:message = FormValidation.Helper.format(options.message || FormValidation.I18n[locale].stringLength.more,parseInt(min,10));break;case !!max:message = FormValidation.Helper.format(options.message || FormValidation.I18n[locale].stringLength.less,parseInt(max,10));break;default:break;}return {valid:isValid,message:message};}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{uri:{'default':'Please enter a valid URI'}}});FormValidation.Validator.uri = {html5Attributes:{message:'message',allowlocal:'allowLocal',allowemptyprotocol:'allowEmptyProtocol',protocol:'protocol'},enableByHtml5:function enableByHtml5($field){return 'url' === $field.attr('type');}, /**
	         * Return true if the input value is a valid URL
	         *
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options
	         * - message: The error message
	         * - allowLocal: Allow the private and local network IP. Default to false
	         * - allowEmptyProtocol: Allow the URI without protocol. Default to false
	         * - protocol: The protocols, separated by a comma. Default to "http, https, ftp"
	         * @returns {Boolean}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'uri');if(value === ''){return true;} // Credit to https://gist.github.com/dperini/729294
	//
	// Regular Expression for URL validation
	//
	// Author: Diego Perini
	// Updated: 2010/12/05
	//
	// the regular expression composed & commented
	// could be easily tweaked for RFC compliance,
	// it was expressly modified to fit & satisfy
	// these test for an URL shortener:
	//
	//   http://mathiasbynens.be/demo/url-regex
	//
	// Notes on possible differences from a standard/generic validation:
	//
	// - utf-8 char class take in consideration the full Unicode range
	// - TLDs are mandatory unless `allowLocal` is true
	// - protocols have been restricted to ftp, http and https only as requested
	//
	// Changes:
	//
	// - IP address dotted notation validation, range: 1.0.0.0 - 223.255.255.255
	//   first and last IP address of each class is considered invalid
	//   (since they are broadcast/network addresses)
	//
	// - Added exclusion of private, reserved and/or local networks ranges
	//   unless `allowLocal` is true
	//
	// - Added possibility of choosing a custom protocol
	//
	// - Add option to validate without protocol
	//
	var allowLocal=options.allowLocal === true || options.allowLocal === 'true',allowEmptyProtocol=options.allowEmptyProtocol === true || options.allowEmptyProtocol === 'true',protocol=(options.protocol || 'http, https, ftp').split(',').join('|').replace(/\s/g,''),urlExp=new RegExp("^" +  // protocol identifier
	"(?:(?:" + protocol + ")://)" + ( // allow empty protocol
	allowEmptyProtocol?'?':'') +  // user:pass authentication
	"(?:\\S+(?::\\S*)?@)?" + "(?:" + ( // IP address exclusion
	// private & local networks
	allowLocal?'':"(?!(?:10|127)(?:\\.\\d{1,3}){3})" + "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" + "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})") +  // IP address dotted notation octets
	// excludes loopback network 0.0.0.0
	// excludes reserved space >= 224.0.0.0
	// excludes network & broadcast addresses
	// (first & last IP address of each class)
	"(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" + "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" + "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" + "|" +  // host name
	'(?:(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9]+)' +  // domain name
	'(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9])*' +  // TLD identifier
	'(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))' + ( // Allow intranet sites (no TLD) if `allowLocal` is true
	allowLocal?'?':'') + ")" +  // port number
	"(?::\\d{2,5})?" +  // resource path
	"(?:/[^\\s]*)?" + "$","i");return urlExp.test(value);}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{uuid:{'default':'Please enter a valid UUID number',version:'Please enter a valid UUID version %s number'}}});FormValidation.Validator.uuid = {html5Attributes:{message:'message',version:'version'}, /**
	         * Return true if and only if the input value is a valid UUID string
	         *
	         * @see http://en.wikipedia.org/wiki/Universally_unique_identifier
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Consist of key:
	         * - message: The invalid message
	         * - version: Can be 3, 4, 5, null
	         * @returns {Boolean|Object}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'uuid');if(value === ''){return true;} // See the format at http://en.wikipedia.org/wiki/Universally_unique_identifier#Variants_and_versions
	var locale=validator.getLocale(),patterns={'3':/^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,'4':/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,'5':/^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,all:/^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i},version=options.version?options.version + '':'all';return {valid:null === patterns[version]?true:patterns[version].test(value),message:options.version?FormValidation.Helper.format(options.message || FormValidation.I18n[locale].uuid.version,options.version):options.message || FormValidation.I18n[locale].uuid['default']};}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{vat:{'default':'Please enter a valid VAT number',country:'Please enter a valid VAT number in %s',countries:{AT:'Austria',BE:'Belgium',BG:'Bulgaria',BR:'Brazil',CH:'Switzerland',CY:'Cyprus',CZ:'Czech Republic',DE:'Germany',DK:'Denmark',EE:'Estonia',ES:'Spain',FI:'Finland',FR:'France',GB:'United Kingdom',GR:'Greek',EL:'Greek',HU:'Hungary',HR:'Croatia',IE:'Ireland',IS:'Iceland',IT:'Italy',LT:'Lithuania',LU:'Luxembourg',LV:'Latvia',MT:'Malta',NL:'Netherlands',NO:'Norway',PL:'Poland',PT:'Portugal',RO:'Romania',RU:'Russia',RS:'Serbia',SE:'Sweden',SI:'Slovenia',SK:'Slovakia',VE:'Venezuela',ZA:'South Africa'}}}});FormValidation.Validator.vat = {html5Attributes:{message:'message',country:'country'}, // Supported country codes
	COUNTRY_CODES:['AT','BE','BG','BR','CH','CY','CZ','DE','DK','EE','EL','ES','FI','FR','GB','GR','HR','HU','IE','IS','IT','LT','LU','LV','MT','NL','NO','PL','PT','RO','RU','RS','SE','SK','SI','VE','ZA'], /**
	         * Validate an European VAT number
	         *
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Consist of key:
	         * - message: The invalid message
	         * - country: The ISO 3166-1 country code. It can be
	         *      - One of country code defined in COUNTRY_CODES
	         *      - Name of field which its value defines the country code
	         *      - Name of callback function that returns the country code
	         *      - A callback function that returns the country code
	         * @returns {Boolean|Object}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'vat');if(value === ''){return true;}var locale=validator.getLocale(),country=options.country;if(!country){country = value.substr(0,2);}else if(typeof country !== 'string' || $.inArray(country.toUpperCase(),this.COUNTRY_CODES) === -1){ // Determine the country code
	country = validator.getDynamicOption($field,country);}if($.inArray(country,this.COUNTRY_CODES) === -1){return true;}var method=['_',country.toLowerCase()].join('');return this[method](value)?true:{valid:false,message:FormValidation.Helper.format(options.message || FormValidation.I18n[locale].vat.country,FormValidation.I18n[locale].vat.countries[country.toUpperCase()])};}, // VAT validators
	/**
	         * Validate Austrian VAT number
	         * Example:
	         * - Valid: ATU13585627
	         * - Invalid: ATU13585626
	         *
	         * @param {String} value VAT number
	         * @returns {Boolean}
	         */_at:function _at(value){if(/^ATU[0-9]{8}$/.test(value)){value = value.substr(2);}if(!/^U[0-9]{8}$/.test(value)){return false;}value = value.substr(1);var sum=0,weight=[1,2,1,2,1,2,1],temp=0;for(var i=0;i < 7;i++) {temp = parseInt(value.charAt(i),10) * weight[i];if(temp > 9){temp = Math.floor(temp / 10) + temp % 10;}sum += temp;}sum = 10 - (sum + 4) % 10;if(sum === 10){sum = 0;}return sum + '' === value.substr(7,1);}, /**
	         * Validate Belgian VAT number
	         * Example:
	         * - Valid: BE0428759497
	         * - Invalid: BE431150351
	         *
	         * @param {String} value VAT number
	         * @returns {Boolean}
	         */_be:function _be(value){if(/^BE[0]{0,1}[0-9]{9}$/.test(value)){value = value.substr(2);}if(!/^[0]{0,1}[0-9]{9}$/.test(value)){return false;}if(value.length === 9){value = '0' + value;}if(value.substr(1,1) === '0'){return false;}var sum=parseInt(value.substr(0,8),10) + parseInt(value.substr(8,2),10);return sum % 97 === 0;}, /**
	         * Validate Bulgarian VAT number
	         * Example:
	         * - Valid: BG175074752,
	         * BG7523169263, BG8032056031,
	         * BG7542011030,
	         * BG7111042925
	         * - Invalid: BG175074753, BG7552A10004, BG7111042922
	         *
	         * @param {String} value VAT number
	         * @returns {Boolean}
	         */_bg:function _bg(value){if(/^BG[0-9]{9,10}$/.test(value)){value = value.substr(2);}if(!/^[0-9]{9,10}$/.test(value)){return false;}var sum=0,i=0; // Legal entities
	if(value.length === 9){for(i = 0;i < 8;i++) {sum += parseInt(value.charAt(i),10) * (i + 1);}sum = sum % 11;if(sum === 10){sum = 0;for(i = 0;i < 8;i++) {sum += parseInt(value.charAt(i),10) * (i + 3);}}sum = sum % 10;return sum + '' === value.substr(8);} // Physical persons, foreigners and others
	else if(value.length === 10){ // Validate Bulgarian national identification numbers
	var egn=function egn(value){ // Check the birth date
	var year=parseInt(value.substr(0,2),10) + 1900,month=parseInt(value.substr(2,2),10),day=parseInt(value.substr(4,2),10);if(month > 40){year += 100;month -= 40;}else if(month > 20){year -= 100;month -= 20;}if(!FormValidation.Helper.date(year,month,day)){return false;}var sum=0,weight=[2,4,8,5,10,9,7,3,6];for(var i=0;i < 9;i++) {sum += parseInt(value.charAt(i),10) * weight[i];}sum = sum % 11 % 10;return sum + '' === value.substr(9,1);}, // Validate Bulgarian personal number of a foreigner
	pnf=function pnf(value){var sum=0,weight=[21,19,17,13,11,9,7,3,1];for(var i=0;i < 9;i++) {sum += parseInt(value.charAt(i),10) * weight[i];}sum = sum % 10;return sum + '' === value.substr(9,1);}, // Finally, consider it as a VAT number
	vat=function vat(value){var sum=0,weight=[4,3,2,7,6,5,4,3,2];for(var i=0;i < 9;i++) {sum += parseInt(value.charAt(i),10) * weight[i];}sum = 11 - sum % 11;if(sum === 10){return false;}if(sum === 11){sum = 0;}return sum + '' === value.substr(9,1);};return egn(value) || pnf(value) || vat(value);}return false;}, /**
	         * Validate Brazilian VAT number (CNPJ)
	         *
	         * @param {String} value VAT number
	         * @returns {Boolean}
	         */_br:function _br(value){if(value === ''){return true;}var cnpj=value.replace(/[^\d]+/g,'');if(cnpj === '' || cnpj.length !== 14){return false;} // Remove invalids CNPJs
	if(cnpj === '00000000000000' || cnpj === '11111111111111' || cnpj === '22222222222222' || cnpj === '33333333333333' || cnpj === '44444444444444' || cnpj === '55555555555555' || cnpj === '66666666666666' || cnpj === '77777777777777' || cnpj === '88888888888888' || cnpj === '99999999999999'){return false;} // Validate verification digits
	var length=cnpj.length - 2,numbers=cnpj.substring(0,length),digits=cnpj.substring(length),sum=0,pos=length - 7;for(var i=length;i >= 1;i--) {sum += parseInt(numbers.charAt(length - i),10) * pos--;if(pos < 2){pos = 9;}}var result=sum % 11 < 2?0:11 - sum % 11;if(result !== parseInt(digits.charAt(0),10)){return false;}length = length + 1;numbers = cnpj.substring(0,length);sum = 0;pos = length - 7;for(i = length;i >= 1;i--) {sum += parseInt(numbers.charAt(length - i),10) * pos--;if(pos < 2){pos = 9;}}result = sum % 11 < 2?0:11 - sum % 11;return result === parseInt(digits.charAt(1),10);}, /**
	         * Validate Swiss VAT number
	         *
	         * @param {String} value VAT number
	         * @returns {Boolean}
	         */_ch:function _ch(value){if(/^CHE[0-9]{9}(MWST)?$/.test(value)){value = value.substr(2);}if(!/^E[0-9]{9}(MWST)?$/.test(value)){return false;}value = value.substr(1);var sum=0,weight=[5,4,3,2,7,6,5,4];for(var i=0;i < 8;i++) {sum += parseInt(value.charAt(i),10) * weight[i];}sum = 11 - sum % 11;if(sum === 10){return false;}if(sum === 11){sum = 0;}return sum + '' === value.substr(8,1);}, /**
	         * Validate Cypriot VAT number
	         * Examples:
	         * - Valid: CY10259033P
	         * - Invalid: CY10259033Z
	         *
	         * @param {String} value VAT number
	         * @returns {Boolean}
	         */_cy:function _cy(value){if(/^CY[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(value)){value = value.substr(2);}if(!/^[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(value)){return false;} // Do not allow to start with "12"
	if(value.substr(0,2) === '12'){return false;} // Extract the next digit and multiply by the counter.
	var sum=0,translation={'0':1,'1':0,'2':5,'3':7,'4':9,'5':13,'6':15,'7':17,'8':19,'9':21};for(var i=0;i < 8;i++) {var temp=parseInt(value.charAt(i),10);if(i % 2 === 0){temp = translation[temp + ''];}sum += temp;}sum = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[sum % 26];return sum + '' === value.substr(8,1);}, /**
	         * Validate Czech Republic VAT number
	         * Can be:
	         * i) Legal entities (8 digit numbers)
	         * ii) Individuals with a RC (the 9 or 10 digit Czech birth number)
	         * iii) Individuals without a RC (9 digit numbers beginning with 6)
	         *
	         * Examples:
	         * - Valid: i) CZ25123891; ii) CZ7103192745, CZ991231123; iii) CZ640903926
	         * - Invalid: i) CZ25123890; ii) CZ1103492745, CZ590312123
	         *
	         * @param {String} value VAT number
	         * @returns {Boolean}
	         */_cz:function _cz(value){if(/^CZ[0-9]{8,10}$/.test(value)){value = value.substr(2);}if(!/^[0-9]{8,10}$/.test(value)){return false;}var sum=0,i=0;if(value.length === 8){ // Do not allow to start with '9'
	if(value.charAt(0) + '' === '9'){return false;}sum = 0;for(i = 0;i < 7;i++) {sum += parseInt(value.charAt(i),10) * (8 - i);}sum = 11 - sum % 11;if(sum === 10){sum = 0;}if(sum === 11){sum = 1;}return sum + '' === value.substr(7,1);}else if(value.length === 9 && value.charAt(0) + '' === '6'){sum = 0; // Skip the first (which is 6)
	for(i = 0;i < 7;i++) {sum += parseInt(value.charAt(i + 1),10) * (8 - i);}sum = 11 - sum % 11;if(sum === 10){sum = 0;}if(sum === 11){sum = 1;}sum = [8,7,6,5,4,3,2,1,0,9,10][sum - 1];return sum + '' === value.substr(8,1);}else if(value.length === 9 || value.length === 10){ // Validate Czech birth number (Rodn茅 膷铆slo), which is also national identifier
	var year=1900 + parseInt(value.substr(0,2),10),month=parseInt(value.substr(2,2),10) % 50 % 20,day=parseInt(value.substr(4,2),10);if(value.length === 9){if(year >= 1980){year -= 100;}if(year > 1953){return false;}}else if(year < 1954){year += 100;}if(!FormValidation.Helper.date(year,month,day)){return false;} // Check that the birth date is not in the future
	if(value.length === 10){var check=parseInt(value.substr(0,9),10) % 11;if(year < 1985){check = check % 10;}return check + '' === value.substr(9,1);}return true;}return false;}, /**
	         * Validate German VAT number
	         * Examples:
	         * - Valid: DE136695976
	         * - Invalid: DE136695978
	         *
	         * @param {String} value VAT number
	         * @returns {Boolean}
	         */_de:function _de(value){if(/^DE[0-9]{9}$/.test(value)){value = value.substr(2);}if(!/^[0-9]{9}$/.test(value)){return false;}return FormValidation.Helper.mod11And10(value);}, /**
	         * Validate Danish VAT number
	         * Example:
	         * - Valid: DK13585628
	         * - Invalid: DK13585627
	         *
	         * @param {String} value VAT number
	         * @returns {Boolean}
	         */_dk:function _dk(value){if(/^DK[0-9]{8}$/.test(value)){value = value.substr(2);}if(!/^[0-9]{8}$/.test(value)){return false;}var sum=0,weight=[2,7,6,5,4,3,2,1];for(var i=0;i < 8;i++) {sum += parseInt(value.charAt(i),10) * weight[i];}return sum % 11 === 0;}, /**
	         * Validate Estonian VAT number
	         * Examples:
	         * - Valid: EE100931558, EE100594102
	         * - Invalid: EE100594103
	         *
	         * @param {String} value VAT number
	         * @returns {Boolean}
	         */_ee:function _ee(value){if(/^EE[0-9]{9}$/.test(value)){value = value.substr(2);}if(!/^[0-9]{9}$/.test(value)){return false;}var sum=0,weight=[3,7,1,3,7,1,3,7,1];for(var i=0;i < 9;i++) {sum += parseInt(value.charAt(i),10) * weight[i];}return sum % 10 === 0;}, /**
	         * Validate Spanish VAT number (NIF - N煤mero de Identificaci贸n Fiscal)
	         * Can be:
	         * i) DNI (Documento nacional de identidad), for Spaniards
	         * ii) NIE (N煤mero de Identificaci贸n de Extranjeros), for foreigners
	         * iii) CIF (Certificado de Identificaci贸n Fiscal), for legal entities and others
	         *
	         * Examples:
	         * - Valid: i) ES54362315K; ii) ESX2482300W, ESX5253868R; iii) ESM1234567L, ESJ99216582, ESB58378431, ESB64717838
	         * - Invalid: i) ES54362315Z; ii) ESX2482300A; iii) ESJ99216583
	         *
	         * @param {String} value VAT number
	         * @returns {Boolean}
	         */_es:function _es(value){if(/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(value)){value = value.substr(2);}if(!/^[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(value)){return false;}var dni=function dni(value){var check=parseInt(value.substr(0,8),10);check = 'TRWAGMYFPDXBNJZSQVHLCKE'[check % 23];return check + '' === value.substr(8,1);},nie=function nie(value){var check=['XYZ'.indexOf(value.charAt(0)),value.substr(1)].join('');check = parseInt(check,10);check = 'TRWAGMYFPDXBNJZSQVHLCKE'[check % 23];return check + '' === value.substr(8,1);},cif=function cif(value){var first=value.charAt(0),check;if('KLM'.indexOf(first) !== -1){ // K: Spanish younger than 14 year old
	// L: Spanish living outside Spain without DNI
	// M: Granted the tax to foreigners who have no NIE
	check = parseInt(value.substr(1,8),10);check = 'TRWAGMYFPDXBNJZSQVHLCKE'[check % 23];return check + '' === value.substr(8,1);}else if('ABCDEFGHJNPQRSUVW'.indexOf(first) !== -1){var sum=0,weight=[2,1,2,1,2,1,2],temp=0;for(var i=0;i < 7;i++) {temp = parseInt(value.charAt(i + 1),10) * weight[i];if(temp > 9){temp = Math.floor(temp / 10) + temp % 10;}sum += temp;}sum = 10 - sum % 10;return sum + '' === value.substr(8,1) || 'JABCDEFGHI'[sum] === value.substr(8,1);}return false;};var first=value.charAt(0);if(/^[0-9]$/.test(first)){return dni(value);}else if(/^[XYZ]$/.test(first)){return nie(value);}else {return cif(value);}}, /**
	         * Validate Finnish VAT number
	         * Examples:
	         * - Valid: FI20774740
	         * - Invalid: FI20774741
	         *
	         * @param {String} value VAT number
	         * @returns {Boolean}
	         */_fi:function _fi(value){if(/^FI[0-9]{8}$/.test(value)){value = value.substr(2);}if(!/^[0-9]{8}$/.test(value)){return false;}var sum=0,weight=[7,9,10,5,8,4,2,1];for(var i=0;i < 8;i++) {sum += parseInt(value.charAt(i),10) * weight[i];}return sum % 11 === 0;}, /**
	         * Validate French VAT number (TVA - taxe sur la valeur ajout茅e)
	         * It's constructed by a SIREN number, prefixed by two characters.
	         *
	         * Examples:
	         * - Valid: FR40303265045, FR23334175221, FRK7399859412, FR4Z123456782
	         * - Invalid: FR84323140391
	         *
	         * @param {String} value VAT number
	         * @returns {Boolean}
	         */_fr:function _fr(value){if(/^FR[0-9A-Z]{2}[0-9]{9}$/.test(value)){value = value.substr(2);}if(!/^[0-9A-Z]{2}[0-9]{9}$/.test(value)){return false;}if(!FormValidation.Helper.luhn(value.substr(2))){return false;}if(/^[0-9]{2}$/.test(value.substr(0,2))){ // First two characters are digits
	return value.substr(0,2) === parseInt(value.substr(2) + '12',10) % 97 + '';}else { // The first characters cann't be O and I
	var alphabet='0123456789ABCDEFGHJKLMNPQRSTUVWXYZ',check; // First one is digit
	if(/^[0-9]{1}$/.test(value.charAt(0))){check = alphabet.indexOf(value.charAt(0)) * 24 + alphabet.indexOf(value.charAt(1)) - 10;}else {check = alphabet.indexOf(value.charAt(0)) * 34 + alphabet.indexOf(value.charAt(1)) - 100;}return (parseInt(value.substr(2),10) + 1 + Math.floor(check / 11)) % 11 === check % 11;}}, /**
	         * Validate United Kingdom VAT number
	         * Example:
	         * - Valid: GB980780684
	         * - Invalid: GB802311781
	         *
	         * @param {String} value VAT number
	         * @returns {Boolean}
	         */_gb:function _gb(value){if(/^GB[0-9]{9}$/.test(value) /* Standard */ || /^GB[0-9]{12}$/.test(value) /* Branches */ || /^GBGD[0-9]{3}$/.test(value) /* Government department */ || /^GBHA[0-9]{3}$/.test(value) /* Health authority */ || /^GB(GD|HA)8888[0-9]{5}$/.test(value)){value = value.substr(2);}if(!/^[0-9]{9}$/.test(value) && !/^[0-9]{12}$/.test(value) && !/^GD[0-9]{3}$/.test(value) && !/^HA[0-9]{3}$/.test(value) && !/^(GD|HA)8888[0-9]{5}$/.test(value)){return false;}var length=value.length;if(length === 5){var firstTwo=value.substr(0,2),lastThree=parseInt(value.substr(2),10);return 'GD' === firstTwo && lastThree < 500 || 'HA' === firstTwo && lastThree >= 500;}else if(length === 11 && ('GD8888' === value.substr(0,6) || 'HA8888' === value.substr(0,6))){if('GD' === value.substr(0,2) && parseInt(value.substr(6,3),10) >= 500 || 'HA' === value.substr(0,2) && parseInt(value.substr(6,3),10) < 500){return false;}return parseInt(value.substr(6,3),10) % 97 === parseInt(value.substr(9,2),10);}else if(length === 9 || length === 12){var sum=0,weight=[8,7,6,5,4,3,2,10,1];for(var i=0;i < 9;i++) {sum += parseInt(value.charAt(i),10) * weight[i];}sum = sum % 97;if(parseInt(value.substr(0,3),10) >= 100){return sum === 0 || sum === 42 || sum === 55;}else {return sum === 0;}}return true;}, /**
	         * Validate Greek VAT number
	         * Examples:
	         * - Valid: GR023456780, EL094259216
	         * - Invalid: EL123456781
	         *
	         * @param {String} value VAT number
	         * @returns {Boolean}
	         */_gr:function _gr(value){if(/^(GR|EL)[0-9]{9}$/.test(value)){value = value.substr(2);}if(!/^[0-9]{9}$/.test(value)){return false;}if(value.length === 8){value = '0' + value;}var sum=0,weight=[256,128,64,32,16,8,4,2];for(var i=0;i < 8;i++) {sum += parseInt(value.charAt(i),10) * weight[i];}sum = sum % 11 % 10;return sum + '' === value.substr(8,1);}, // EL is traditionally prefix of Greek VAT numbers
	_el:function _el(value){return this._gr(value);}, /**
	         * Validate Hungarian VAT number
	         * Examples:
	         * - Valid: HU12892312
	         * - Invalid: HU12892313
	         *
	         * @param {String} value VAT number
	         * @returns {Boolean}
	         */_hu:function _hu(value){if(/^HU[0-9]{8}$/.test(value)){value = value.substr(2);}if(!/^[0-9]{8}$/.test(value)){return false;}var sum=0,weight=[9,7,3,1,9,7,3,1];for(var i=0;i < 8;i++) {sum += parseInt(value.charAt(i),10) * weight[i];}return sum % 10 === 0;}, /**
	         * Validate Croatian VAT number
	         * Examples:
	         * - Valid: HR33392005961
	         * - Invalid: HR33392005962
	         *
	         * @param {String} value VAT number
	         * @returns {Boolean}
	         */_hr:function _hr(value){if(/^HR[0-9]{11}$/.test(value)){value = value.substr(2);}if(!/^[0-9]{11}$/.test(value)){return false;}return FormValidation.Helper.mod11And10(value);}, /**
	         * Validate Irish VAT number
	         * Examples:
	         * - Valid: IE6433435F, IE6433435OA, IE8D79739I
	         * - Invalid: IE8D79738J
	         *
	         * @param {String} value VAT number
	         * @returns {Boolean}
	         */_ie:function _ie(value){if(/^IE[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(value)){value = value.substr(2);}if(!/^[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(value)){return false;}var getCheckDigit=function getCheckDigit(value){while(value.length < 7) {value = '0' + value;}var alphabet='WABCDEFGHIJKLMNOPQRSTUV',sum=0;for(var i=0;i < 7;i++) {sum += parseInt(value.charAt(i),10) * (8 - i);}sum += 9 * alphabet.indexOf(value.substr(7));return alphabet[sum % 23];}; // The first 7 characters are digits
	if(/^[0-9]+$/.test(value.substr(0,7))){ // New system
	return value.charAt(7) === getCheckDigit(value.substr(0,7) + value.substr(8) + '');}else if('ABCDEFGHIJKLMNOPQRSTUVWXYZ+*'.indexOf(value.charAt(1)) !== -1){ // Old system
	return value.charAt(7) === getCheckDigit(value.substr(2,5) + value.substr(0,1) + '');}return true;}, /**
	         * Validate Icelandic VAT (VSK) number
	         * Examples:
	         * - Valid: 12345, 123456
	         * - Invalid: 1234567
	         *
	         * @params {String} value VAT number
	         * @returns {Boolean}
	         */_is:function _is(value){if(/^IS[0-9]{5,6}$/.test(value)){value = value.substr(2);}return (/^[0-9]{5,6}$/.test(value));}, /**
	         * Validate Italian VAT number, which consists of 11 digits.
	         * - First 7 digits are a company identifier
	         * - Next 3 are the province of residence
	         * - The last one is a check digit
	         *
	         * Examples:
	         * - Valid: IT00743110157
	         * - Invalid: IT00743110158
	         *
	         * @param {String} value VAT number
	         * @returns {Boolean}
	         */_it:function _it(value){if(/^IT[0-9]{11}$/.test(value)){value = value.substr(2);}if(!/^[0-9]{11}$/.test(value)){return false;}if(parseInt(value.substr(0,7),10) === 0){return false;}var lastThree=parseInt(value.substr(7,3),10);if(lastThree < 1 || lastThree > 201 && lastThree !== 999 && lastThree !== 888){return false;}return FormValidation.Helper.luhn(value);}, /**
	         * Validate Lithuanian VAT number
	         * It can be:
	         * - 9 digits, for legal entities
	         * - 12 digits, for temporarily registered taxpayers
	         *
	         * Examples:
	         * - Valid: LT119511515, LT100001919017, LT100004801610
	         * - Invalid: LT100001919018
	         *
	         * @param {String} value VAT number
	         * @returns {Boolean}
	         */_lt:function _lt(value){if(/^LT([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(value)){value = value.substr(2);}if(!/^([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(value)){return false;}var length=value.length,sum=0,i;for(i = 0;i < length - 1;i++) {sum += parseInt(value.charAt(i),10) * (1 + i % 9);}var check=sum % 11;if(check === 10){sum = 0;for(i = 0;i < length - 1;i++) {sum += parseInt(value.charAt(i),10) * (1 + (i + 2) % 9);}}check = check % 11 % 10;return check + '' === value.charAt(length - 1);}, /**
	         * Validate Luxembourg VAT number
	         * Examples:
	         * - Valid: LU15027442
	         * - Invalid: LU15027443
	         *
	         * @param {String} value VAT number
	         * @returns {Boolean}
	         */_lu:function _lu(value){if(/^LU[0-9]{8}$/.test(value)){value = value.substr(2);}if(!/^[0-9]{8}$/.test(value)){return false;}return parseInt(value.substr(0,6),10) % 89 + '' === value.substr(6,2);}, /**
	         * Validate Latvian VAT number
	         * Examples:
	         * - Valid: LV40003521600, LV16117519997
	         * - Invalid: LV40003521601, LV16137519997
	         *
	         * @param {String} value VAT number
	         * @returns {Boolean}
	         */_lv:function _lv(value){if(/^LV[0-9]{11}$/.test(value)){value = value.substr(2);}if(!/^[0-9]{11}$/.test(value)){return false;}var first=parseInt(value.charAt(0),10),sum=0,weight=[],i,length=value.length;if(first > 3){ // Legal entity
	sum = 0;weight = [9,1,4,8,3,10,2,5,7,6,1];for(i = 0;i < length;i++) {sum += parseInt(value.charAt(i),10) * weight[i];}sum = sum % 11;return sum === 3;}else { // Check birth date
	var day=parseInt(value.substr(0,2),10),month=parseInt(value.substr(2,2),10),year=parseInt(value.substr(4,2),10);year = year + 1800 + parseInt(value.charAt(6),10) * 100;if(!FormValidation.Helper.date(year,month,day)){return false;} // Check personal code
	sum = 0;weight = [10,5,8,4,2,1,6,3,7,9];for(i = 0;i < length - 1;i++) {sum += parseInt(value.charAt(i),10) * weight[i];}sum = (sum + 1) % 11 % 10;return sum + '' === value.charAt(length - 1);}}, /**
	         * Validate Maltese VAT number
	         * Examples:
	         * - Valid: MT11679112
	         * - Invalid: MT11679113
	         *
	         * @param {String} value VAT number
	         * @returns {Boolean}
	         */_mt:function _mt(value){if(/^MT[0-9]{8}$/.test(value)){value = value.substr(2);}if(!/^[0-9]{8}$/.test(value)){return false;}var sum=0,weight=[3,4,6,7,8,9,10,1];for(var i=0;i < 8;i++) {sum += parseInt(value.charAt(i),10) * weight[i];}return sum % 37 === 0;}, /**
	         * Validate Dutch VAT number
	         * Examples:
	         * - Valid: NL004495445B01
	         * - Invalid: NL123456789B90
	         *
	         * @param {String} value VAT number
	         * @returns {Boolean}
	         */_nl:function _nl(value){if(/^NL[0-9]{9}B[0-9]{2}$/.test(value)){value = value.substr(2);}if(!/^[0-9]{9}B[0-9]{2}$/.test(value)){return false;}var sum=0,weight=[9,8,7,6,5,4,3,2];for(var i=0;i < 8;i++) {sum += parseInt(value.charAt(i),10) * weight[i];}sum = sum % 11;if(sum > 9){sum = 0;}return sum + '' === value.substr(8,1);}, /**
	         * Validate Norwegian VAT number
	         *
	         * @see http://www.brreg.no/english/coordination/number.html
	         * @param {String} value VAT number
	         * @returns {Boolean}
	         */_no:function _no(value){if(/^NO[0-9]{9}$/.test(value)){value = value.substr(2);}if(!/^[0-9]{9}$/.test(value)){return false;}var sum=0,weight=[3,2,7,6,5,4,3,2];for(var i=0;i < 8;i++) {sum += parseInt(value.charAt(i),10) * weight[i];}sum = 11 - sum % 11;if(sum === 11){sum = 0;}return sum + '' === value.substr(8,1);}, /**
	         * Validate Polish VAT number
	         * Examples:
	         * - Valid: PL8567346215
	         * - Invalid: PL8567346216
	         *
	         * @param {String} value VAT number
	         * @returns {Boolean}
	         */_pl:function _pl(value){if(/^PL[0-9]{10}$/.test(value)){value = value.substr(2);}if(!/^[0-9]{10}$/.test(value)){return false;}var sum=0,weight=[6,5,7,2,3,4,5,6,7,-1];for(var i=0;i < 10;i++) {sum += parseInt(value.charAt(i),10) * weight[i];}return sum % 11 === 0;}, /**
	         * Validate Portuguese VAT number
	         * Examples:
	         * - Valid: PT501964843
	         * - Invalid: PT501964842
	         *
	         * @param {String} value VAT number
	         * @returns {Boolean}
	         */_pt:function _pt(value){if(/^PT[0-9]{9}$/.test(value)){value = value.substr(2);}if(!/^[0-9]{9}$/.test(value)){return false;}var sum=0,weight=[9,8,7,6,5,4,3,2];for(var i=0;i < 8;i++) {sum += parseInt(value.charAt(i),10) * weight[i];}sum = 11 - sum % 11;if(sum > 9){sum = 0;}return sum + '' === value.substr(8,1);}, /**
	         * Validate Romanian VAT number
	         * Examples:
	         * - Valid: RO18547290
	         * - Invalid: RO18547291
	         *
	         * @param {String} value VAT number
	         * @returns {Boolean}
	         */_ro:function _ro(value){if(/^RO[1-9][0-9]{1,9}$/.test(value)){value = value.substr(2);}if(!/^[1-9][0-9]{1,9}$/.test(value)){return false;}var length=value.length,weight=[7,5,3,2,1,7,5,3,2].slice(10 - length),sum=0;for(var i=0;i < length - 1;i++) {sum += parseInt(value.charAt(i),10) * weight[i];}sum = 10 * sum % 11 % 10;return sum + '' === value.substr(length - 1,1);}, /**
	         * Validate Russian VAT number (Taxpayer Identification Number - INN)
	         *
	         * @param {String} value VAT number
	         * @returns {Boolean}
	         */_ru:function _ru(value){if(/^RU([0-9]{10}|[0-9]{12})$/.test(value)){value = value.substr(2);}if(!/^([0-9]{10}|[0-9]{12})$/.test(value)){return false;}var i=0;if(value.length === 10){var sum=0,weight=[2,4,10,3,5,9,4,6,8,0];for(i = 0;i < 10;i++) {sum += parseInt(value.charAt(i),10) * weight[i];}sum = sum % 11;if(sum > 9){sum = sum % 10;}return sum + '' === value.substr(9,1);}else if(value.length === 12){var sum1=0,weight1=[7,2,4,10,3,5,9,4,6,8,0],sum2=0,weight2=[3,7,2,4,10,3,5,9,4,6,8,0];for(i = 0;i < 11;i++) {sum1 += parseInt(value.charAt(i),10) * weight1[i];sum2 += parseInt(value.charAt(i),10) * weight2[i];}sum1 = sum1 % 11;if(sum1 > 9){sum1 = sum1 % 10;}sum2 = sum2 % 11;if(sum2 > 9){sum2 = sum2 % 10;}return sum1 + '' === value.substr(10,1) && sum2 + '' === value.substr(11,1);}return false;}, /**
	         * Validate Serbian VAT number
	         *
	         * @param {String} value VAT number
	         * @returns {Boolean}
	         */_rs:function _rs(value){if(/^RS[0-9]{9}$/.test(value)){value = value.substr(2);}if(!/^[0-9]{9}$/.test(value)){return false;}var sum=10,temp=0;for(var i=0;i < 8;i++) {temp = (parseInt(value.charAt(i),10) + sum) % 10;if(temp === 0){temp = 10;}sum = 2 * temp % 11;}return (sum + parseInt(value.substr(8,1),10)) % 10 === 1;}, /**
	         * Validate Swedish VAT number
	         * Examples:
	         * - Valid: SE123456789701
	         * - Invalid: SE123456789101
	         *
	         * @param {String} value VAT number
	         * @returns {Boolean}
	         */_se:function _se(value){if(/^SE[0-9]{10}01$/.test(value)){value = value.substr(2);}if(!/^[0-9]{10}01$/.test(value)){return false;}value = value.substr(0,10);return FormValidation.Helper.luhn(value);}, /**
	         * Validate Slovenian VAT number
	         * Examples:
	         * - Valid: SI50223054
	         * - Invalid: SI50223055
	         * - Invalid: SI09999990
	         *
	         * @param {String} value VAT number
	         * @returns {Boolean}
	         */_si:function _si(value){ // The Slovenian VAT numbers don't start with zero
	var res=value.match(/^(SI)?([1-9][0-9]{7})$/);if(!res){return false;}if(res[1]){value = value.substr(2);}var sum=0,weight=[8,7,6,5,4,3,2];for(var i=0;i < 7;i++) {sum += parseInt(value.charAt(i),10) * weight[i];}sum = 11 - sum % 11;if(sum === 10){sum = 0;}return sum + '' === value.substr(7,1);}, /**
	         * Validate Slovak VAT number
	         * Examples:
	         * - Valid: SK2022749619
	         * - Invalid: SK2022749618
	         *
	         * @param {String} value VAT number
	         * @returns {Boolean}
	         */_sk:function _sk(value){if(/^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(value)){value = value.substr(2);}if(!/^[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(value)){return false;}return parseInt(value,10) % 11 === 0;}, /**
	         * Validate Venezuelan VAT number (RIF)
	         * Examples:
	         * - Valid: VEJ309272292, VEV242818101, VEJ000126518, VEJ000458324, J309272292, V242818101, J000126518, J000458324
	         * - Invalid: VEJ309272293, VEV242818100, J000126519, J000458323
	         *
	         * @param {String} value VAT number
	         * @returns {Boolean}
	         */_ve:function _ve(value){if(/^VE[VEJPG][0-9]{9}$/.test(value)){value = value.substr(2);}if(!/^[VEJPG][0-9]{9}$/.test(value)){return false;}var types={'V':4,'E':8,'J':12,'P':16,'G':20},sum=types[value.charAt(0)],weight=[3,2,7,6,5,4,3,2];for(var i=0;i < 8;i++) {sum += parseInt(value.charAt(i + 1),10) * weight[i];}sum = 11 - sum % 11;if(sum === 11 || sum === 10){sum = 0;}return sum + '' === value.substr(9,1);}, /**
	         * Validate South African VAT number
	         * Examples:
	         * - Valid: 4012345678
	         * - Invalid: 40123456789, 3012345678
	         *
	         * @params {String} value VAT number
	         * @returns {Boolean}
	         */_za:function _za(value){if(/^ZA4[0-9]{9}$/.test(value)){value = value.substr(2);}return (/^4[0-9]{9}$/.test(value));}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{vin:{'default':'Please enter a valid VIN number'}}});FormValidation.Validator.vin = { /**
	         * Validate an US VIN (Vehicle Identification Number)
	         *
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Consist of key:
	         * - message: The invalid message
	         * @returns {Boolean}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'vin');if(value === ''){return true;} // Don't accept I, O, Q characters
	if(!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(value)){return false;}value = value.toUpperCase();var chars={A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,J:1,K:2,L:3,M:4,N:5,P:7,R:9,S:2,T:3,U:4,V:5,W:6,X:7,Y:8,Z:9,'1':1,'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'0':0},weights=[8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2],sum=0,length=value.length;for(var i=0;i < length;i++) {sum += chars[value.charAt(i) + ''] * weights[i];}var reminder=sum % 11;if(reminder === 10){reminder = 'X';}return reminder + '' === value.charAt(8);}};})(jQuery);;(function($){FormValidation.I18n = $.extend(true,FormValidation.I18n || {},{'en_US':{zipCode:{'default':'Please enter a valid postal code',country:'Please enter a valid postal code in %s',countries:{AT:'Austria',BG:'Bulgaria',BR:'Brazil',CA:'Canada',CH:'Switzerland',CZ:'Czech Republic',DE:'Germany',DK:'Denmark',ES:'Spain',FR:'France',GB:'United Kingdom',IE:'Ireland',IN:'India',IT:'Italy',MA:'Morocco',NL:'Netherlands',PL:'Poland',PT:'Portugal',RO:'Romania',RU:'Russia',SE:'Sweden',SG:'Singapore',SK:'Slovakia',US:'USA'}}}});FormValidation.Validator.zipCode = {html5Attributes:{message:'message',country:'country'},COUNTRY_CODES:['AT','BG','BR','CA','CH','CZ','DE','DK','ES','FR','GB','IE','IN','IT','MA','NL','PL','PT','RO','RU','SE','SG','SK','US'], /**
	         * Return true if and only if the input value is a valid country zip code
	         *
	         * @param {FormValidation.Base} validator The validator plugin instance
	         * @param {jQuery} $field Field element
	         * @param {Object} options Consist of key:
	         * - message: The invalid message
	         * - country: The country
	         *
	         * The country can be defined by:
	         * - An ISO 3166 country code
	         * - Name of field which its value defines the country code
	         * - Name of callback function that returns the country code
	         * - A callback function that returns the country code
	         *
	         *  callback: function(value, validator, $field) {
	         *      // value is the value of field
	         *      // validator is the BootstrapValidator instance
	         *      // $field is jQuery element representing the field
	         *  }
	         *
	         * @returns {Boolean|Object}
	         */validate:function validate(validator,$field,options){var value=validator.getFieldValue($field,'zipCode');if(value === '' || !options.country){return true;}var locale=validator.getLocale(),country=options.country;if(typeof country !== 'string' || $.inArray(country,this.COUNTRY_CODES) === -1){ // Try to determine the country
	country = validator.getDynamicOption($field,country);}if(!country || $.inArray(country.toUpperCase(),this.COUNTRY_CODES) === -1){return true;}var isValid=false;country = country.toUpperCase();switch(country){ // http://en.wikipedia.org/wiki/List_of_postal_codes_in_Austria
	case 'AT':isValid = /^([1-9]{1})(\d{3})$/.test(value);break;case 'BG':isValid = /^([1-9]{1}[0-9]{3})$/.test($.trim(value));break;case 'BR':isValid = /^(\d{2})([\.]?)(\d{3})([\-]?)(\d{3})$/.test(value);break;case 'CA':isValid = /^(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}\s?[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}[0-9]{1}$/i.test(value);break;case 'CH':isValid = /^([1-9]{1})(\d{3})$/.test(value);break;case 'CZ': // Test: http://regexr.com/39hhr
	isValid = /^(\d{3})([ ]?)(\d{2})$/.test(value);break; // http://stackoverflow.com/questions/7926687/regular-expression-german-zip-codes
	case 'DE':isValid = /^(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})$/.test(value);break;case 'DK':isValid = /^(DK(-|\s)?)?\d{4}$/i.test(value);break; // Zip codes in Spain go from 01XXX to 52XXX.
	// Test: http://refiddle.com/1ufo
	case 'ES':isValid = /^(?:0[1-9]|[1-4][0-9]|5[0-2])\d{3}$/.test(value);break; // http://en.wikipedia.org/wiki/Postal_codes_in_France
	case 'FR':isValid = /^[0-9]{5}$/i.test(value);break;case 'GB':isValid = this._gb(value);break; // Indian PIN (Postal Index Number) validation
	// http://en.wikipedia.org/wiki/Postal_Index_Number
	// Test: http://regex101.com/r/kV0vH3/1
	case 'IN':isValid = /^\d{3}\s?\d{3}$/.test(value);break; // http://www.eircode.ie/docs/default-source/Common/prepare-your-business-for-eircode---published-v2.pdf?sfvrsn=2
	// Test: http://refiddle.com/1kpl
	case 'IE':isValid = /^(D6W|[ACDEFHKNPRTVWXY]\d{2})\s[0-9ACDEFHKNPRTVWXY]{4}$/.test(value);break; // http://en.wikipedia.org/wiki/List_of_postal_codes_in_Italy
	case 'IT':isValid = /^(I-|IT-)?\d{5}$/i.test(value);break; // http://en.wikipedia.org/wiki/List_of_postal_codes_in_Morocco
	case 'MA':isValid = /^[1-9][0-9]{4}$/i.test(value);break; // http://en.wikipedia.org/wiki/Postal_codes_in_the_Netherlands
	case 'NL':isValid = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(value);break; // http://en.wikipedia.org/wiki/List_of_postal_codes_in_Poland
	case 'PL':isValid = /^[0-9]{2}\-[0-9]{3}$/.test(value);break; // Test: http://refiddle.com/1l2t
	case 'PT':isValid = /^[1-9]\d{3}-\d{3}$/.test(value);break;case 'RO':isValid = /^(0[1-8]{1}|[1-9]{1}[0-5]{1})?[0-9]{4}$/i.test(value);break;case 'RU':isValid = /^[0-9]{6}$/i.test(value);break;case 'SE':isValid = /^(S-)?\d{3}\s?\d{2}$/i.test(value);break;case 'SG':isValid = /^([0][1-9]|[1-6][0-9]|[7]([0-3]|[5-9])|[8][0-2])(\d{4})$/i.test(value);break;case 'SK': // Test: http://regexr.com/39hhr
	isValid = /^(\d{3})([ ]?)(\d{2})$/.test(value);break;case 'US': /* falls through */default:isValid = /^\d{4,5}([\-]?\d{4})?$/.test(value);break;}return {valid:isValid,message:FormValidation.Helper.format(options.message || FormValidation.I18n[locale].zipCode.country,FormValidation.I18n[locale].zipCode.countries[country])};}, /**
	         * Validate United Kingdom postcode
	         * Examples:
	         * - Standard: EC1A 1BB, W1A 1HQ, M1 1AA, B33 8TH, CR2 6XH, DN55 1PT
	         * - Special cases:
	         * AI-2640, ASCN 1ZZ, GIR 0AA
	         *
	         * @see http://en.wikipedia.org/wiki/Postcodes_in_the_United_Kingdom
	         * @param {String} value The postcode
	         * @returns {Boolean}
	         */_gb:function _gb(value){var firstChar='[ABCDEFGHIJKLMNOPRSTUWYZ]', // Does not accept QVX
	secondChar='[ABCDEFGHKLMNOPQRSTUVWXY]', // Does not accept IJZ
	thirdChar='[ABCDEFGHJKPMNRSTUVWXY]',fourthChar='[ABEHMNPRVWXY]',fifthChar='[ABDEFGHJLNPQRSTUWXYZ]',regexps=[ // AN NAA, ANN NAA, AAN NAA, AANN NAA format
	new RegExp('^(' + firstChar + '{1}' + secondChar + '?[0-9]{1,2})(\\s*)([0-9]{1}' + fifthChar + '{2})$','i'), // ANA NAA
	new RegExp('^(' + firstChar + '{1}[0-9]{1}' + thirdChar + '{1})(\\s*)([0-9]{1}' + fifthChar + '{2})$','i'), // AANA NAA
	new RegExp('^(' + firstChar + '{1}' + secondChar + '{1}?[0-9]{1}' + fourthChar + '{1})(\\s*)([0-9]{1}' + fifthChar + '{2})$','i'),new RegExp('^(BF1)(\\s*)([0-6]{1}[ABDEFGHJLNPQRST]{1}[ABDEFGHJLNPQRSTUWZYZ]{1})$','i'), // BFPO postcodes
	/^(GIR)(\s*)(0AA)$/i, // Special postcode GIR 0AA
	/^(BFPO)(\s*)([0-9]{1,4})$/i, // Standard BFPO numbers
	/^(BFPO)(\s*)(c\/o\s*[0-9]{1,3})$/i, // c/o BFPO numbers
	/^([A-Z]{4})(\s*)(1ZZ)$/i, // Overseas Territories
	/^(AI-2640)$/i // Anguilla
	];for(var i=0;i < regexps.length;i++) {if(regexps[i].test(value)){return true;}}return false;}};})(jQuery);

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	function _typeof(obj) { return obj && obj.constructor === Symbol ? "symbol" : typeof obj; }

	/*!
	 * FormValidation (http://formvalidation.io)
	 * The best jQuery plugin to validate form fields. Support Bootstrap, Foundation, Pure, SemanticUI, UIKit and custom frameworks
	 *
	 * @version     v0.6.1, built on 2015-02-24 10:14:10 PM
	 * @author      https://twitter.com/nghuuphuoc
	 * @copyright   (c) 2013 - 2015 Nguyen Huu Phuoc
	 * @license     http://formvalidation.io/license/
	 */
	/**
	 * This class supports validating Bootstrap form (http://getbootstrap.com/)
	 */
	(function ($) {
	    FormValidation.Framework.Bootstrap = function (element, options, namespace) {
	        options = $.extend(true, {
	            button: {
	                selector: '[type="submit"]',
	                // The class of disabled button
	                // http://getbootstrap.com/css/#buttons-disabled
	                disabled: 'disabled'
	            },
	            err: {
	                // http://getbootstrap.com/css/#forms-help-text
	                clazz: 'help-block',
	                parent: '^(.*)col-(xs|sm|md|lg)-(offset-){0,1}[0-9]+(.*)$'
	            },
	            // This feature requires Bootstrap v3.1.0 or later (http://getbootstrap.com/css/#forms-control-validation).
	            // Since Bootstrap doesn't provide any methods to know its version, this option cannot be on/off automatically.
	            // In other word, to use this feature you have to upgrade your Bootstrap to v3.1.0 or later.
	            //
	            // Examples:
	            // - Use Glyphicons icons:
	            //  icon: {
	            //      valid: 'glyphicon glyphicon-ok',
	            //      invalid: 'glyphicon glyphicon-remove',
	            //      validating: 'glyphicon glyphicon-refresh',
	            //      feedback: 'form-control-feedback'
	            //  }
	            // - Use FontAwesome icons:
	            //  icon: {
	            //      valid: 'fa fa-check',
	            //      invalid: 'fa fa-times',
	            //      validating: 'fa fa-refresh',
	            //      feedback: 'form-control-feedback'
	            //  }
	            icon: {
	                valid: null,
	                invalid: null,
	                validating: null,
	                feedback: 'form-control-feedback'
	            },
	            row: {
	                // By default, each field is placed inside the <div class="form-group"></div>
	                // http://getbootstrap.com/css/#forms
	                selector: '.form-group',
	                valid: 'has-success',
	                invalid: 'has-error',
	                feedback: 'has-feedback'
	            }
	        }, options);

	        FormValidation.Base.apply(this, [element, options, namespace]);
	    };

	    FormValidation.Framework.Bootstrap.prototype = $.extend({}, FormValidation.Base.prototype, {
	        /**
	         * Specific framework might need to adjust the icon position
	         *
	         * @param {jQuery} $field The field element
	         * @param {jQuery} $icon The icon element
	         */
	        _fixIcon: function _fixIcon($field, $icon) {
	            var ns = this._namespace,
	                type = $field.attr('type'),
	                field = $field.attr('data-' + ns + '-field'),
	                row = this.options.fields[field].row || this.options.row.selector,
	                $parent = $field.closest(row);

	            // Place it after the container of checkbox/radio
	            // so when clicking the icon, it doesn't effect to the checkbox/radio element
	            if ('checkbox' === type || 'radio' === type) {
	                var $fieldParent = $field.parent();
	                if ($fieldParent.hasClass(type)) {
	                    $icon.insertAfter($fieldParent);
	                } else if ($fieldParent.parent().hasClass(type)) {
	                    $icon.insertAfter($fieldParent.parent());
	                }
	            }

	            // The feedback icon does not render correctly if there is no label
	            // https://github.com/twbs/bootstrap/issues/12873
	            if ($parent.find('label').length === 0) {
	                $icon.addClass('fv-icon-no-label');
	            }
	            // Fix feedback icons in input-group
	            if ($parent.find('.input-group').length !== 0) {
	                $icon.addClass('fv-bootstrap-icon-input-group').insertAfter($parent.find('.input-group').eq(0));
	            }
	        },

	        /**
	         * Create a tooltip or popover
	         * It will be shown when focusing on the field
	         *
	         * @param {jQuery} $field The field element
	         * @param {String} message The message
	         * @param {String} type Can be 'tooltip' or 'popover'
	         */
	        _createTooltip: function _createTooltip($field, message, type) {
	            var ns = this._namespace,
	                $icon = $field.data(ns + '.icon');
	            if ($icon) {
	                switch (type) {
	                    case 'popover':
	                        $icon.css({
	                            'cursor': 'pointer',
	                            'pointer-events': 'auto'
	                        }).popover('destroy').popover({
	                            container: 'body',
	                            content: message,
	                            html: true,
	                            placement: 'auto top',
	                            trigger: 'hover click'
	                        });
	                        break;

	                    case 'tooltip':
	                    /* falls through */
	                    default:
	                        $icon.css({
	                            'cursor': 'pointer',
	                            'pointer-events': 'auto'
	                        }).tooltip('destroy').tooltip({
	                            container: 'body',
	                            html: true,
	                            placement: 'auto top',
	                            title: message
	                        });
	                        break;
	                }
	            }
	        },

	        /**
	         * Destroy the tooltip or popover
	         *
	         * @param {jQuery} $field The field element
	         * @param {String} type Can be 'tooltip' or 'popover'
	         */
	        _destroyTooltip: function _destroyTooltip($field, type) {
	            var ns = this._namespace,
	                $icon = $field.data(ns + '.icon');
	            if ($icon) {
	                switch (type) {
	                    case 'popover':
	                        $icon.css({
	                            'cursor': '',
	                            'pointer-events': 'none'
	                        }).popover('destroy');
	                        break;

	                    case 'tooltip':
	                    /* falls through */
	                    default:
	                        $icon.css({
	                            'cursor': '',
	                            'pointer-events': 'none'
	                        }).tooltip('destroy');
	                        break;
	                }
	            }
	        },

	        /**
	         * Hide a tooltip or popover
	         *
	         * @param {jQuery} $field The field element
	         * @param {String} type Can be 'tooltip' or 'popover'
	         */
	        _hideTooltip: function _hideTooltip($field, type) {
	            var ns = this._namespace,
	                $icon = $field.data(ns + '.icon');
	            if ($icon) {
	                switch (type) {
	                    case 'popover':
	                        $icon.popover('hide');
	                        break;

	                    case 'tooltip':
	                    /* falls through */
	                    default:
	                        $icon.tooltip('hide');
	                        break;
	                }
	            }
	        },

	        /**
	         * Show a tooltip or popover
	         *
	         * @param {jQuery} $field The field element
	         * @param {String} type Can be 'tooltip' or 'popover'
	         */
	        _showTooltip: function _showTooltip($field, type) {
	            var ns = this._namespace,
	                $icon = $field.data(ns + '.icon');
	            if ($icon) {
	                switch (type) {
	                    case 'popover':
	                        $icon.popover('show');
	                        break;

	                    case 'tooltip':
	                    /* falls through */
	                    default:
	                        $icon.tooltip('show');
	                        break;
	                }
	            }
	        }
	    });

	    /**
	     * Plugin definition
	     * Support backward
	     * @deprecated It will be removed soon. Instead of using $(form).bootstrapValidator(), use
	     *  $(form).formValidation({
	     *      framework: 'bootstrap'  // It's equivalent to use data-fv-framework="bootstrap" for <form>
	     *  });
	     */
	    $.fn.bootstrapValidator = function (option) {
	        var params = arguments;
	        return this.each(function () {
	            var $this = $(this),
	                data = $this.data('formValidation') || $this.data('bootstrapValidator'),
	                options = 'object' === (typeof option === 'undefined' ? 'undefined' : _typeof(option)) && option;
	            if (!data) {
	                data = new FormValidation.Framework.Bootstrap(this, $.extend({}, {
	                    events: {
	                        // Support backward
	                        formInit: 'init.form.bv',
	                        formError: 'error.form.bv',
	                        formSuccess: 'success.form.bv',
	                        fieldAdded: 'added.field.bv',
	                        fieldRemoved: 'removed.field.bv',
	                        fieldInit: 'init.field.bv',
	                        fieldError: 'error.field.bv',
	                        fieldSuccess: 'success.field.bv',
	                        fieldStatus: 'status.field.bv',
	                        localeChanged: 'changed.locale.bv',
	                        validatorError: 'error.validator.bv',
	                        validatorSuccess: 'success.validator.bv'
	                    }
	                }, options), 'bv');

	                $this.addClass('fv-form-bootstrap').data('formValidation', data).data('bootstrapValidator', data);
	            }

	            // Allow to call plugin method
	            if ('string' === typeof option) {
	                data[option].apply(data, Array.prototype.slice.call(params, 1));
	            }
	        });
	    };

	    $.fn.bootstrapValidator.Constructor = FormValidation.Framework.Bootstrap;
	})(jQuery);

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	(function ($) {
	    /**
	     * Simplified Chinese language package
	     * Translated by @shamiao
	     */
	    FormValidation.I18n = $.extend(true, FormValidation.I18n, {
	        'zh_CN': {
	            base64: {
	                'default': '请输入有效的Base64编码'
	            },
	            between: {
	                'default': '请输入在 %s 和 %s 之间的数值',
	                notInclusive: '请输入在 %s 和 %s 之间(不含两端)的数值'
	            },
	            bic: {
	                'default': '请输入有效的BIC商品编码'
	            },
	            callback: {
	                'default': '请输入有效的值'
	            },
	            choice: {
	                'default': '请输入有效的值',
	                less: '请至少选中 %s 个选项',
	                more: '最多只能选中 %s 个选项',
	                between: '请选择 %s 至 %s 个选项'
	            },
	            color: {
	                'default': '请输入有效的颜色值'
	            },
	            creditCard: {
	                'default': '请输入有效的信用卡号码'
	            },
	            cusip: {
	                'default': '请输入有效的美国CUSIP代码'
	            },
	            cvv: {
	                'default': '请输入有效的CVV代码'
	            },
	            date: {
	                'default': '请输入有效的日期',
	                min: '请输入 %s 或之后的日期',
	                max: '请输入 %s 或以前的日期',
	                range: '请输入 %s 和 %s 之间的日期'
	            },
	            different: {
	                'default': '请输入不同的值'
	            },
	            digits: {
	                'default': '请输入有效的数字'
	            },
	            ean: {
	                'default': '请输入有效的EAN商品编码'
	            },
	            ein: {
	                'default': '请输入有效的EIN商品编码'
	            },
	            emailAddress: {
	                'default': '请输入有效的邮件地址'
	            },
	            file: {
	                'default': '请选择有效的文件'
	            },
	            greaterThan: {
	                'default': '请输入大于等于 %s 的数值',
	                notInclusive: '请输入大于 %s 的数值'
	            },
	            grid: {
	                'default': '请输入有效的GRId编码'
	            },
	            hex: {
	                'default': '请输入有效的16进制数'
	            },
	            iban: {
	                'default': '请输入有效的IBAN(国际银行账户)号码',
	                country: '请输入有效的 %s 国家或地区的IBAN(国际银行账户)号码',
	                countries: {
	                    AD: '安道​​尔',
	                    AE: '阿联酋',
	                    AL: '阿尔巴尼亚',
	                    AO: '安哥拉',
	                    AT: '奥地利',
	                    AZ: '阿塞拜疆',
	                    BA: '波斯尼亚和黑塞哥维那',
	                    BE: '比利时',
	                    BF: '布基纳法索',
	                    BG: '保加利亚',
	                    BH: '巴林',
	                    BI: '布隆迪',
	                    BJ: '贝宁',
	                    BR: '巴西',
	                    CH: '瑞士',
	                    CI: '科特迪瓦',
	                    CM: '喀麦隆',
	                    CR: '哥斯达黎加',
	                    CV: '佛得角',
	                    CY: '塞浦路斯',
	                    CZ: '捷克共和国',
	                    DE: '德国',
	                    DK: '丹麦',
	                    DO: '多米尼加共和国',
	                    DZ: '阿尔及利亚',
	                    EE: '爱沙尼亚',
	                    ES: '西班牙',
	                    FI: '芬兰',
	                    FO: '法罗群岛',
	                    FR: '法国',
	                    GB: '英国',
	                    GE: '格鲁吉亚',
	                    GI: '直布罗陀',
	                    GL: '格陵兰岛',
	                    GR: '希腊',
	                    GT: '危地马拉',
	                    HR: '克罗地亚',
	                    HU: '匈牙利',
	                    IE: '爱尔兰',
	                    IL: '以色列',
	                    IR: '伊朗',
	                    IS: '冰岛',
	                    IT: '意大利',
	                    JO: '约旦',
	                    KW: '科威特',
	                    KZ: '哈萨克斯坦',
	                    LB: '黎巴嫩',
	                    LI: '列支敦士登',
	                    LT: '立陶宛',
	                    LU: '卢森堡',
	                    LV: '拉脱维亚',
	                    MC: '摩纳哥',
	                    MD: '摩尔多瓦',
	                    ME: '黑山',
	                    MG: '马达加斯加',
	                    MK: '马其顿',
	                    ML: '马里',
	                    MR: '毛里塔尼亚',
	                    MT: '马耳他',
	                    MU: '毛里求斯',
	                    MZ: '莫桑比克',
	                    NL: '荷兰',
	                    NO: '挪威',
	                    PK: '巴基斯坦',
	                    PL: '波兰',
	                    PS: '巴勒斯坦',
	                    PT: '葡萄牙',
	                    QA: '卡塔尔',
	                    RO: '罗马尼亚',
	                    RS: '塞尔维亚',
	                    SA: '沙特阿拉伯',
	                    SE: '瑞典',
	                    SI: '斯洛文尼亚',
	                    SK: '斯洛伐克',
	                    SM: '圣马力诺',
	                    SN: '塞内加尔',
	                    TN: '突尼斯',
	                    TR: '土耳其',
	                    VG: '英属维尔京群岛'
	                }
	            },
	            id: {
	                'default': '请输入有效的身份证件号码',
	                country: '请输入有效的 %s 国家或地区的身份证件号码',
	                countries: {
	                    BA: '波黑',
	                    BG: '保加利亚',
	                    BR: '巴西',
	                    CH: '瑞士',
	                    CL: '智利',
	                    CN: '中国',
	                    CZ: '捷克共和国',
	                    DK: '丹麦',
	                    EE: '爱沙尼亚',
	                    ES: '西班牙',
	                    FI: '芬兰',
	                    HR: '克罗地亚',
	                    IE: '爱尔兰',
	                    IS: '冰岛',
	                    LT: '立陶宛',
	                    LV: '拉脱维亚',
	                    ME: '黑山',
	                    MK: '马其顿',
	                    NL: '荷兰',
	                    PL: '波兰',
	                    RO: '罗马尼亚',
	                    RS: '塞尔维亚',
	                    SE: '瑞典',
	                    SI: '斯洛文尼亚',
	                    SK: '斯洛伐克',
	                    SM: '圣马力诺',
	                    TH: '泰国',
	                    ZA: '南非'
	                }
	            },
	            identical: {
	                'default': '请输入相同的值'
	            },
	            imei: {
	                'default': '请输入有效的IMEI(手机串号)'
	            },
	            imo: {
	                'default': '请输入有效的国际海事组织(IMO)号码'
	            },
	            integer: {
	                'default': '请输入有效的整数值'
	            },
	            ip: {
	                'default': '请输入有效的IP地址',
	                ipv4: '请输入有效的IPv4地址',
	                ipv6: '请输入有效的IPv6地址'
	            },
	            isbn: {
	                'default': '请输入有效的ISBN(国际标准书号)'
	            },
	            isin: {
	                'default': '请输入有效的ISIN(国际证券编码)'
	            },
	            ismn: {
	                'default': '请输入有效的ISMN(印刷音乐作品编码)'
	            },
	            issn: {
	                'default': '请输入有效的ISSN(国际标准杂志书号)'
	            },
	            lessThan: {
	                'default': '请输入小于等于 %s 的数值',
	                notInclusive: '请输入小于 %s 的数值'
	            },
	            mac: {
	                'default': '请输入有效的MAC物理地址'
	            },
	            meid: {
	                'default': '请输入有效的MEID(移动设备识别码)'
	            },
	            notEmpty: {
	                'default': '请填写必填项目'
	            },
	            numeric: {
	                'default': '请输入有效的数值，允许小数'
	            },
	            phone: {
	                'default': '请输入有效的电话号码',
	                country: '请输入有效的 %s 国家或地区的电话号码',
	                countries: {
	                    AE: '阿联酋',
	                    BG: '保加利亚',
	                    BR: '巴西',
	                    CN: '中国',
	                    CZ: '捷克共和国',
	                    DE: '德国',
	                    DK: '丹麦',
	                    ES: '西班牙',
	                    FR: '法国',
	                    GB: '英国',
	                    IN: '印度',
	                    MA: '摩洛哥',
	                    NL: '荷兰',
	                    PK: '巴基斯坦',
	                    RO: '罗马尼亚',
	                    RU: '俄罗斯',
	                    SK: '斯洛伐克',
	                    TH: '泰国',
	                    US: '美国',
	                    VE: '委内瑞拉'
	                }
	            },
	            regexp: {
	                'default': '请输入符合正则表达式限制的值'
	            },
	            remote: {
	                'default': '请输入有效的值'
	            },
	            rtn: {
	                'default': '请输入有效的RTN号码'
	            },
	            sedol: {
	                'default': '请输入有效的SEDOL代码'
	            },
	            siren: {
	                'default': '请输入有效的SIREN号码'
	            },
	            siret: {
	                'default': '请输入有效的SIRET号码'
	            },
	            step: {
	                'default': '请输入在基础值上，增加 %s 的整数倍的数值'
	            },
	            stringCase: {
	                'default': '只能输入小写字母',
	                upper: '只能输入大写字母'
	            },
	            stringLength: {
	                'default': '请输入符合长度限制的值',
	                less: '最多只能输入 %s 个字符',
	                more: '需要输入至少 %s 个字符',
	                between: '请输入 %s 至 %s 个字符'
	            },
	            uri: {
	                'default': '请输入一个有效的URL地址'
	            },
	            uuid: {
	                'default': '请输入有效的UUID',
	                version: '请输入版本 %s 的UUID'
	            },
	            vat: {
	                'default': '请输入有效的VAT(税号)',
	                country: '请输入有效的 %s 国家或地区的VAT(税号)',
	                countries: {
	                    AT: '奥地利',
	                    BE: '比利时',
	                    BG: '保加利亚',
	                    BR: '巴西',
	                    CH: '瑞士',
	                    CY: '塞浦路斯',
	                    CZ: '捷克共和国',
	                    DE: '德国',
	                    DK: '丹麦',
	                    EE: '爱沙尼亚',
	                    ES: '西班牙',
	                    FI: '芬兰',
	                    FR: '法语',
	                    GB: '英国',
	                    GR: '希腊',
	                    EL: '希腊',
	                    HU: '匈牙利',
	                    HR: '克罗地亚',
	                    IE: '爱尔兰',
	                    IS: '冰岛',
	                    IT: '意大利',
	                    LT: '立陶宛',
	                    LU: '卢森堡',
	                    LV: '拉脱维亚',
	                    MT: '马耳他',
	                    NL: '荷兰',
	                    NO: '挪威',
	                    PL: '波兰',
	                    PT: '葡萄牙',
	                    RO: '罗马尼亚',
	                    RU: '俄罗斯',
	                    RS: '塞尔维亚',
	                    SE: '瑞典',
	                    SI: '斯洛文尼亚',
	                    SK: '斯洛伐克',
	                    VE: '委内瑞拉',
	                    ZA: '南非'
	                }
	            },
	            vin: {
	                'default': '请输入有效的VIN(美国车辆识别号码)'
	            },
	            zipCode: {
	                'default': '请输入有效的邮政编码',
	                country: '请输入有效的 %s 国家或地区的邮政编码',
	                countries: {
	                    AT: '奥地利',
	                    BG: '保加利亚',
	                    BR: '巴西',
	                    CA: '加拿大',
	                    CH: '瑞士',
	                    CZ: '捷克共和国',
	                    DE: '德国',
	                    DK: '丹麦',
	                    ES: '西班牙',
	                    FR: '法国',
	                    GB: '英国',
	                    IE: '爱尔兰',
	                    IN: '印度',
	                    IT: '意大利',
	                    MA: '摩洛哥',
	                    NL: '荷兰',
	                    PL: '波兰',
	                    PT: '葡萄牙',
	                    RO: '罗马尼亚',
	                    RU: '俄罗斯',
	                    SE: '瑞典',
	                    SG: '新加坡',
	                    SK: '斯洛伐克',
	                    US: '美国'
	                }
	            }
	        }
	    });
	})(jQuery);

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * mandatoryIcon add-on
	 * This add-ons shows required icons for mandatory fields
	 *
	 * @link        http://formvalidation.io/addons/mandatoryIcon/
	 * @license     http://formvalidation.io/license/
	 * @author      https://twitter.com/formvalidation
	 * @copyright   (c) 2013 - 2015 Nguyen Huu Phuoc
	 */
	(function ($) {
	    FormValidation.AddOn.mandatoryIcon = {
	        html5Attributes: {
	            icon: 'icon'
	        },

	        /**
	         * @param {FormValidation.Base} validator The validator instance
	         * @param {Object} options The add-on options that consists of keys:
	         * - icon {String}: The required icon classes
	         * For example
	         *      'glyphicon glyphicon-asterisk' (for Bootstrap)
	         *      'fa fa-asterisk' (for Font Awesome)
	         */
	        init: function init(validator, options) {
	            if (!options || !options.icon) {
	                return;
	            }

	            var that = this,
	                ns = validator.getNamespace(),
	                opts = validator.getOptions();

	            for (var field in opts.fields) {
	                validator.getFieldElements(field).each(function () {
	                    var $field = $(this),
	                        $icon = $field.data(ns + '.icon'),
	                        validators = opts.fields[field].validators; // The field validators

	                    if (validators.notEmpty && validators.notEmpty.enabled !== false && opts.fields[field].enabled !== false && that._isEmpty(validator, $field)) {
	                        // The field uses notEmpty validator and is empty
	                        // Add required icon
	                        $icon.addClass(options.icon).show();
	                    }
	                });
	            }

	            var icons = options.icon.split(' '),
	                removedIcons = {};

	            removedIcons[validator.STATUS_VALID] = [];
	            removedIcons[validator.STATUS_INVALID] = [];
	            removedIcons[validator.STATUS_VALIDATING] = [];

	            if (opts.icon) {
	                // Maybe the required icon consists of one which is in the list of valid/invalid/validating feedback icons (for example, fa, glyphicon)
	                var feedbackIcons = {};
	                feedbackIcons[validator.STATUS_VALID] = opts.icon.valid ? opts.icon.valid.split(' ') : [];
	                feedbackIcons[validator.STATUS_INVALID] = opts.icon.invalid ? opts.icon.invalid.split(' ') : [];
	                feedbackIcons[validator.STATUS_VALIDATING] = opts.icon.validating ? opts.icon.validating.split(' ') : [];

	                for (var status in feedbackIcons) {
	                    for (var i = 0; i < icons.length; i++) {
	                        if ($.inArray(icons[i], feedbackIcons[status]) === -1) {
	                            removedIcons[status].push(icons[i]);
	                        }
	                    }

	                    removedIcons[status] = removedIcons[status].join(' ');
	                }
	            }

	            validator.getForm().on(opts.events.fieldStatus, function (e, data) {
	                // Remove the required icon when the field updates its status
	                var $icon = data.element.data(ns + '.icon'),
	                    validators = data.fv.getOptions(data.field).validators; // The field validators

	                if (validators.notEmpty && validators.notEmpty.enabled !== false && opts.fields[data.field].enabled !== false) {
	                    opts.icon && (opts.icon.valid || opts.icon.invalid || opts.icon.validating) ? $icon.removeClass(removedIcons[data.status]) : $icon.removeClass(options.icon);

	                    // Show the icon when the field is empty after resetting
	                    // by resetForm(), resetField() methods
	                    if (data.status === validator.STATUS_NOT_VALIDATED && that._isEmpty(validator, data.element)) {
	                        $icon.addClass(options.icon).show();
	                    }
	                }
	            });
	        },

	        _isEmpty: function _isEmpty(validator, $field) {
	            return !FormValidation.Validator.notEmpty.validate(validator, $field);
	        }
	    };
	})(jQuery);

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	function _typeof(obj) { return obj && obj.constructor === Symbol ? "symbol" : typeof obj; }

	/**
	 * Created by wu.yixiang on 15/11/13.
	 */
	/**
	 * jQuery.query - Query String Modification and Creation for jQuery
	 * Written by Blair Mitchelmore (blair DOT mitchelmore AT gmail DOT com)
	 * Licensed under the WTFPL (http://sam.zoy.org/wtfpl/).
	 * Date: 2009/8/13
	 *
	 * @author Blair Mitchelmore
	 * @version 2.1.7
	 * @描述：url插件
	 * @使用方法介绍：http://www.cnblogs.com/dachie/archive/2010/09/16/1827840.html
	 **/
	new function (settings) {
	    // Various Settings
	    var $separator = settings.separator || '&';
	    var $spaces = settings.spaces === false ? false : true;
	    var $suffix = settings.suffix === false ? '' : '[]';
	    var $prefix = settings.prefix === false ? false : true;
	    var $hash = $prefix ? settings.hash === true ? "#" : "?" : "";
	    var $numbers = settings.numbers === false ? false : true;

	    jQuery.query = new function () {
	        var is = function is(o, t) {
	            return o != undefined && o !== null && (!!t ? o.constructor == t : true);
	        };
	        var parse = function parse(path) {
	            var m,
	                rx = /\[([^[]*)\]/g,
	                match = /^([^[]+)(\[.*\])?$/.exec(path),
	                base = match[1],
	                tokens = [];
	            while (m = rx.exec(match[2])) tokens.push(m[1]);
	            return [base, tokens];
	        };
	        var set = function set(target, tokens, value) {
	            var o,
	                token = tokens.shift();
	            if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) != 'object') target = null;
	            if (token === "") {
	                if (!target) target = [];
	                if (is(target, Array)) {
	                    target.push(tokens.length == 0 ? value : set(null, tokens.slice(0), value));
	                } else if (is(target, Object)) {
	                    var i = 0;
	                    while (target[i++] != null);
	                    target[--i] = tokens.length == 0 ? value : set(target[i], tokens.slice(0), value);
	                } else {
	                    target = [];
	                    target.push(tokens.length == 0 ? value : set(null, tokens.slice(0), value));
	                }
	            } else if (token && token.match(/^\s*[0-9]+\s*$/)) {
	                var index = parseInt(token, 10);
	                if (!target) target = [];
	                target[index] = tokens.length == 0 ? value : set(target[index], tokens.slice(0), value);
	            } else if (token) {
	                var index = token.replace(/^\s*|\s*$/g, "");
	                if (!target) target = {};
	                if (is(target, Array)) {
	                    var temp = {};
	                    for (var i = 0; i < target.length; ++i) {
	                        temp[i] = target[i];
	                    }
	                    target = temp;
	                }
	                target[index] = tokens.length == 0 ? value : set(target[index], tokens.slice(0), value);
	            } else {
	                return value;
	            }
	            return target;
	        };

	        var queryObject = function queryObject(a) {
	            var self = this;
	            self.keys = {};

	            if (a.queryObject) {
	                jQuery.each(a.get(), function (key, val) {
	                    self.SET(key, val);
	                });
	            } else {
	                jQuery.each(arguments, function () {
	                    var q = "" + this;
	                    q = q.replace(/^[?#]/, ''); // remove any leading ? || #
	                    q = q.replace(/[;&]$/, ''); // remove any trailing & || ;
	                    if ($spaces) q = q.replace(/[+]/g, ' '); // replace +'s with spaces

	                    jQuery.each(q.split(/[&;]/), function () {
	                        var key = decodeURIComponent(this.split('=')[0] || "");
	                        var val = decodeURIComponent(this.split('=')[1] || "");

	                        if (!key) return;

	                        if ($numbers) {
	                            if (/^[+-]?[0-9]+\.[0-9]*$/.test(val)) // simple float regex
	                                val = parseFloat(val);else if (/^[+-]?[0-9]+$/.test(val)) // simple int regex
	                                val = parseInt(val, 10);
	                        }

	                        val = !val && val !== 0 ? true : val;

	                        if (val !== false && val !== true && typeof val != 'number') val = val;

	                        self.SET(key, val);
	                    });
	                });
	            }
	            return self;
	        };

	        queryObject.prototype = {
	            queryObject: true,
	            has: function has(key, type) {
	                var value = this.get(key);
	                return is(value, type);
	            },
	            GET: function GET(key) {
	                if (!is(key)) return this.keys;
	                var parsed = parse(key),
	                    base = parsed[0],
	                    tokens = parsed[1];
	                var target = this.keys[base];
	                while (target != null && tokens.length != 0) {
	                    target = target[tokens.shift()];
	                }
	                return typeof target == 'number' ? target : target || "";
	            },
	            get: function get(key) {
	                var target = this.GET(key);
	                if (is(target, Object)) return jQuery.extend(true, {}, target);else if (is(target, Array)) return target.slice(0);
	                return target;
	            },
	            SET: function SET(key, val) {
	                var value = !is(val) ? null : val;
	                var parsed = parse(key),
	                    base = parsed[0],
	                    tokens = parsed[1];
	                var target = this.keys[base];
	                this.keys[base] = set(target, tokens.slice(0), value);
	                return this;
	            },
	            set: function set(key, val) {
	                return this.copy().SET(key, val);
	            },
	            REMOVE: function REMOVE(key) {
	                return this.SET(key, null).COMPACT();
	            },
	            remove: function remove(key) {
	                return this.copy().REMOVE(key);
	            },
	            EMPTY: function EMPTY() {
	                var self = this;
	                jQuery.each(self.keys, function (key, value) {
	                    delete self.keys[key];
	                });
	                return self;
	            },
	            load: function load(url) {
	                var hash = url.replace(/^.*?[#](.+?)(?:\?.+)?$/, "$1");
	                var search = url.replace(/^.*?[?](.+?)(?:#.+)?$/, "$1");
	                return new queryObject(url.length == search.length ? '' : search, url.length == hash.length ? '' : hash);
	            },
	            empty: function empty() {
	                return this.copy().EMPTY();
	            },
	            copy: function copy() {
	                return new queryObject(this);
	            },
	            COMPACT: function COMPACT() {
	                function build(orig) {
	                    var obj = (typeof orig === 'undefined' ? 'undefined' : _typeof(orig)) == "object" ? is(orig, Array) ? [] : {} : orig;
	                    if ((typeof orig === 'undefined' ? 'undefined' : _typeof(orig)) == 'object') {
	                        (function () {
	                            var add = function add(o, key, value) {
	                                if (is(o, Array)) o.push(value);else o[key] = value;
	                            };

	                            jQuery.each(orig, function (key, value) {
	                                if (!is(value)) return true;
	                                add(obj, key, build(value));
	                            });
	                        })();
	                    }
	                    return obj;
	                }
	                this.keys = build(this.keys);
	                return this;
	            },
	            compact: function compact() {
	                return this.copy().COMPACT();
	            },
	            toString: function toString() {
	                var i = 0,
	                    queryString = [],
	                    chunks = [],
	                    self = this;
	                var encode = function encode(str) {
	                    str = str + "";
	                    if ($spaces) str = str.replace(/ /g, "+");
	                    return encodeURIComponent(str);
	                };
	                var addFields = function addFields(arr, key, value) {
	                    if (!is(value) || value === false) return;
	                    var o = [encode(key)];
	                    if (value !== true) {
	                        o.push("=");
	                        o.push(encode(value));
	                    }
	                    arr.push(o.join(""));
	                };
	                var build = function build(obj, base) {
	                    var newKey = function newKey(key) {
	                        return !base || base == "" ? [key].join("") : [base, "[", key, "]"].join("");
	                    };
	                    jQuery.each(obj, function (key, value) {
	                        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') build(value, newKey(key));else addFields(chunks, newKey(key), value);
	                    });
	                };

	                build(this.keys);

	                if (chunks.length > 0) queryString.push($hash);
	                queryString.push(chunks.join($separator));

	                return queryString.join("");
	            }
	        };

	        return new queryObject(location.search, location.hash);
	    }();
	}(jQuery.query || {}); // Pass in jQuery.query as settings object

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	(function ($) {
	    $(document).ready(function () {
	        $('[data-datetimepicker]').datetimepicker();
	    });
	})(jQuery);

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	$.fn.serializeObject = function () {
	    var o = Object.create(null),
	        elementMapper = function elementMapper(element) {
	        element.name = $.camelCase(element.name);
	        return element;
	    },
	        appendToResult = function appendToResult(i, element) {
	        var node = o[element.name];

	        if ('undefined' != typeof node && node !== null) {
	            o[element.name] = node.push ? node.push(element.value) : [node, element.value];
	        } else {
	            o[element.name] = element.value;
	        }
	    };

	    $.each($.map(this.serializeArray(), elementMapper), appendToResult);
	    return o;
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Created by momo-wyx on 15/4/13.
	 */
	/*=====================================================================================
	 * data-img-src='url'
	 * data-card='momoid'
	 * data-tier  和  $().tier
	 * data-tier='<tag>'
	 * data-tier='selector'
	 * data-tier-lazy='true'
	 */
	!(function ($) {
	    function Tier($el, fn) {
	        $el.data('tier-fn', fn || function () {});
	        return $el;
	    }

	    Tier.box = '<div id="tierBox" class="box"></div>';
	    Tier.createCard = function (data) {
	        var html = '<div class="profile-box clearfix box">' + '<div class="column-left">' + Tier.createCard.leftBox(data) + '</div>' + '<div class="column-right">' + Tier.createCard.rightBox(data) + '</div>' + '</div>';
	        return html;
	    };
	    Tier.createCard.leftBox = function (data) {
	        var html = '',
	            profile = data.userinfo.profile || {},
	            sex = profile.sex,
	            vip = profile.normal_vip == true ? '<i class="icon-vip"></i>' : '',
	            vip = profile.year_vip == true ? '<i class="icon-vip-year"></i>' : vip;
	        html += '<p class="tit"><span class="' + sex + '"><i class="icon-' + sex + '"></i><span class="momoid">' + profile.momoid + '</span>' + vip + '</span></p>' + '<ul class="clearfix">';
	        if (profile.photos) {
	            for (var i = 0, len = profile.photos.length; i < len; i++) {
	                html += '<li><img src="' + profile.photos[i].s + '"></li>';
	            }
	        }
	        html += '</ul>' + '<p class="tit">' + Tier.createCard.dealBind(data.userinfo.bind) + '</p>';

	        if (data.userinfo.spam_regip) {
	            html += '<p class="normal_user_tip tit">注册IP:<a target="_blank" href="/admin/q1w2e3/userlist/?regip=' + data.userinfo.spam_regip.regip + '">' + data.userinfo.spam_regip.regip + '</a></p><p class="normal_user_tip tit">SPAM封禁：' + data.userinfo.spam_regip.count + '次</p>';
	        }
	        if (data.userinfo.spam_loginip) {
	            html += '<p class="normal_user_tip tit">登录IP:<a target="_blank" href="/admin/q1w2e3/userlist/?device_ip=' + data.userinfo.spam_loginip.loginip + '">' + data.userinfo.spam_loginip.loginip + '</a></p><p class="normal_user_tip tit">SPAM封禁：' + data.userinfo.spam_loginip.count + '次</p>';
	        }
	        if (data.userinfo.spam_uid) {
	            html += '<p class="normal_user_tip tit">UID:<a target="_blank" href="/admin/q1w2e3/userlist/?uid=' + data.userinfo.spam_uid.uid + '">' + data.userinfo.spam_uid.uid + '</a></p><p class="normal_user_tip tit">SPAM封禁：' + data.userinfo.spam_uid.count + '次</p>';
	        }
	        if (data.userinfo.spam_mac) {
	            html += '<p class="normal_user_tip tit">MAC:<a target="_blank" href="/admin/q1w2e3/userlist/?' + profile.device.client + '_mac=' + data.userinfo.spam_mac.mac + '">' + data.userinfo.spam_mac.mac + '</a></p><p class="normal_user_tip tit">SPAM封禁：' + data.userinfo.spam_mac.count + '次</p>';
	        }
	        if (data.userinfo.phone_city) {
	            html += '<p class="normal_user_tip tit">手机归属地：' + data.userinfo.phone_city + '</p>';
	        }
	        if (data.userinfo.vip) {
	            html += '<p class="normal_user_tip tit">是会员</p>';
	        }
	        if (data.userinfo.groups_count) {
	            html += '<p class="normal_user_tip tit">加入了' + data.userinfo.groups_count + '个群</p>';
	        }
	        if (data.userinfo.hot_city) {
	            html += '<p class="normal_user_tip tit">重点城市：' + data.userinfo.hot_city + '</p>';
	        }
	        if (data.userinfo.friends_count) {
	            html += '<p class="normal_user_tip tit">共有' + data.userinfo.friends_count + '个双向好友！</p>';
	        }
	        return html;
	    };
	    Tier.createCard.rightBox = function (data) {
	        var html = '',
	            profile = data.userinfo.profile || {};
	        html += '<dl class="dl-horizontal">';
	        if (profile.name) {
	            html += '<dt><i class="icon-user"></i></dt>' + '<dd>' + profile.name + '</dd>';
	        }
	        if (profile.sign) {
	            html += '<dt><i class="icon-pencil"></i></dt>' + '<dd>' + profile.sign + '</dd>';
	        }
	        if (profile.interest) {
	            html += '<dt><i class="icon-heart"></i></dt>' + '<dd>' + profile.interest + '</dd>';
	        }
	        if (profile.job) {
	            html += '<dt><i class="icon-briefcase"></i></dt>' + '<dd>' + profile.job + '</dd>';
	        }
	        if (profile.company) {
	            html += '<dt><i class="icon-map-marker"></i></dt>' + '<dd>' + profile.company + '</dd>';
	        }
	        if (profile.school) {
	            html += '<dt><i class="icon-book"></i></dt>' + '<dd>' + profile.school + '</dd>';
	        }
	        if (profile.hangout) {
	            html += '<dt><i class="icon-home"></i></dt>' + '<dd>' + profile.hangout + '</dd>';
	        }
	        if (profile.website) {
	            html += '<dt><i class="icon-leaf"></i></dt>' + '<dd>' + profile.website + '</dd>';
	        }
	        if (profile.languages) {
	            html += '<dt><i class="icon-font"></i></dt>' + '<dd>' + profile.languages + '</dd>';
	        }
	        html += '</dl>';
	        return html;
	    };

	    Tier.createCard.dealBind = function (data) {
	        var arr = ['email', 'phone', 'sina_weibo', 'sina_weibo_vip', 'qqwb', 'facebook', 'renren', 'twitter', 'douban'],
	            html = '';
	        if (data) {
	            for (var i = 0, len = data.length; i < len; i++) {
	                if ($.inArray(data[i], arr)) {
	                    html += '<i class="icon-' + data[i].split("_").join('-') + '"></i>';
	                }
	            }
	        }
	        return html;
	    };
	    Tier.location = function ($target, $box) {
	        //边界限定，定位
	        var $this = $target,
	            thisHeight = $this.outerHeight(),
	            thisWidth = $this.outerWidth(),
	            imgBoxHeight = $box.outerHeight(),
	            imgBoxWidth = $box.outerWidth(),
	            left = $this.offset().left + thisWidth + 'px',
	            top = $this.offset().top + 'px',
	            needHeight = $this.offset().top + imgBoxHeight,
	            maxHeight = $(window).height() + $(document).scrollTop(),
	            needWidth = $this.offset().left + thisWidth + imgBoxWidth,
	            maxWidth = $(window).width();

	        if (needHeight > maxHeight) {
	            top = Math.max(maxHeight - imgBoxHeight - thisHeight - 10, 0) + 'px';
	        }
	        if (needWidth > maxWidth) {
	            left = parseFloat(left) - imgBoxWidth - thisWidth + 'px';
	        }
	        $box.css({ top: top, left: left });
	    };
	    Tier.getHtml = function ($taget) {
	        var $this = $taget,
	            html = '',
	            deferred = $.Deferred();
	        if ($this.attr('data-card')) {
	            var momoid = $this.attr('data-card');
	            if ('JsonData' in window && JsonData.cardList && JsonData.cardList[momoid]) {
	                html = Tier.createCard(JsonData.cardList[momoid]);
	                deferred.resolve(html);
	            } else {
	                $.when($.post('/admin/q1w2e3/userinfo/' + momoid + '?action=getCardData')).then(function (data) {
	                    html = Tier.createCard(JSON.parse(data));
	                    deferred.resolve(html);
	                });
	            }
	        } else {
	            if ($this.attr('data-tier')) {
	                var tier = $this.attr('data-tier');
	                var isHTML = tier.match(/<.+>/g) != null;
	                html = isHTML ? tier : $(tier).html();
	            }
	            if ($this.data('tier-fn')) {
	                html = $this.data('tier-fn').call($this);
	            }
	            if ($this.attr('data-img-src')) {
	                html = new Image();
	                var w = $this.attr('data-img-width') ? $this.attr('data-img-width') : '300px';
	                html.src = $this.attr('data-img-src');
	                $(html).css({ 'width': w });
	            }
	            deferred.resolve(html);
	        }
	        return deferred.promise();
	    };
	    Tier.prototype = {
	        mouseenter: function mouseenter(e) {
	            var $this = $(this);
	            $.when(Tier.getHtml($this)).then(function (html) {
	                //Tier.getHtml($this) 内含同步或异步的操作，所以运用promise
	                var time = $this.attr('data-tier-time');
	                var newClass = $this.attr('data-tier-class') || '';
	                if (window.TIERLAZY) {
	                    clearTimeout(window.TIERLAZY);
	                }
	                if (time) {
	                    window.TIERLAZYTIME = setTimeout(function () {
	                        $('#tierBox').css('display', 'block').addClass(newClass).html(html);
	                    }, time * 1);
	                } else {
	                    $('#tierBox').css('display', 'block').addClass(newClass).html(html);
	                }
	                Tier.location($this, $('#tierBox'));
	            });
	        },
	        mouseleave: function mouseleave(event) {
	            var $this = $(this);
	            if (window.TIERLAZYTIME) {
	                clearTimeout(window.TIERLAZYTIME);
	            }
	            if ($this.is('[data-tier-lazy]')) {
	                window.TIERLAZY = setTimeout(function () {
	                    $('#tierBox').css('display', 'none').attr('class', 'box');
	                }, 200);
	            } else {
	                $('#tierBox').css('display', 'none').attr('class', 'box');
	            }
	        }
	    };
	    $.Tier = Tier;

	    $.fn.tier = function (fn) {
	        return new Tier($(this), fn);
	    };
	    $.fn.showImg = function () {
	        $(this).on('mouseenter', Tier.prototype.mouseenter).on('mouseleave', Tier.prototype.mouseleave);
	    };
	    $.fn.showTier = function () {
	        $(this).on('mouseenter', Tier.prototype.mouseenter).on('mouseleave', Tier.prototype.mouseleave);
	    };
	    $(function () {
	        $('body').append($(Tier.box));
	        $('#tierBox').on('mouseleave', function (e) {
	            window.TIERLAZY = setTimeout(function () {
	                $('#tierBox').css('display', 'none');
	            }, 200);
	        }).on('mouseenter', function () {
	            if (window.TIERLAZY) {
	                clearTimeout(window.TIERLAZY);
	            }
	        });
	        $(document).on('mouseenter', '[data-tier],[data-img-src],[data-card]', Tier.prototype.mouseenter).on('mouseleave', '[data-tier],[data-img-src],[data-card]', Tier.prototype.mouseleave);
	    });
	})($);

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	//==============================================================================================================
	/**
	 *  20140630--Yuwen Liu
	 *
	 *  级联下拉菜单
	 *  使用方法：<select name="year" id="year"></select><select name="month" id="month"></select><select name="day" id="day"></select>
	 *          <script>
	 *              var linkage = $.linkage(Arrar fieldsArray,Json data,String defaultOption);
	 *          </script>
	 *
	 *  fieldsArray : 下拉菜单id组成的数组，比如：［'year','month','day'］
	 *  data : 被渲染的数据
	 *  defaultOption：默认显示的值，比如："<option value='value'>请选择</option>"
	 *
	 *  数据格式：v:{d:"",v:"",c:{}}     v是option的value；d是option显示的值；c是选择该option以后下一级被渲染的值
	 *  比如：
	 *          data: {
	                    "14": {
	                        "d": "33",
	                        "v": "14",
	                        "c": {}
	                    },
	                    "26": {
	                        "d": "antiserver",
	                        "v": "26",
	                        "c": {
	                            "8": {
	                                "d": "\u53cdspam",
	                                "v": "8",
	                                "c": {}
	                            },
	                            "9": {
	                                "d": "\u5e10\u53f7\u5b89\u5168",
	                                "v": "9",
	                                "c": {}
	                            },
	                            "10": {
	                                "d": "\u53cd\u9ed1\u5361",
	                                "v": "10",
	                                "c": {}
	                            }
	                        }
	                    }
	                }
	 *
	 *  初始化:
	 *          var linkage = $.linkage(Arrar fieldsArray,Json data,String defaultOption);
	 *          //先初始化，在赋值
	 *          linkage.setValue({"year":"2014","month":"12","day","20"})
	 *
	 */
	!(function ($) {
	    function _linkage(idList, data, defaultOption) {
	        this.idList = idList;
	        this.data = data;
	        this.Pleavl = idList.length;
	        this.defaultOption = '';
	        return this.init(defaultOption);
	    }

	    _linkage.prototype = {
	        init: function init(defaultOption) {
	            this.defaultOption = defaultOption || '<option value="0">请选择</option>';
	            this.bind().fillNext();
	        },
	        bind: function bind() {
	            var that = this,
	                idl = that.idList;
	            for (var i = 0; i < idl.length - 1; i++) {
	                $("#" + idl[i]).bind('change', function () {
	                    var n = that.idList.indexOf($(this).attr('id'));
	                    that.clearAfter(n + 1);
	                    that.fillNext();
	                });
	            }
	            return that;
	        },
	        fillNext: function fillNext() {
	            var o = this.getValue(),
	                children = this.data,
	                _html = this.defaultOption,
	                nc = {},
	                nid = 0;
	            for (var k in o) {
	                children = children[o[k]]['c'];
	                nid = this.idList.indexOf(k) + 1;
	            }
	            var arr = Object.keys(children).sort();

	            for (var k = 0; k < arr.length; k++) {
	                nc = children[arr[k]];
	                _html += '<option value="' + nc['v'] + '">' + nc['d'] + '</option>';
	            }
	            $("#" + this.idList[nid]).html($(_html));
	        },
	        clearAfter: function clearAfter(n) {
	            if (n == this.Pleavl) return;
	            for (n; n < this.Pleavl; n++) {
	                $("#" + this.idList[n]).html($(this.defaultOption));
	            }
	            return this;
	        },
	        getValue: function getValue() {
	            var o = {},
	                l = this.idList,
	                v;
	            for (var k in l) {
	                v = $("#" + l[k]).val();
	                if (v == '' || parseInt(v) == 0 || v == null) break;
	                o[l[k]] = $("#" + l[k]).val();
	            }
	            return o;
	        },

	        setValue: function setValue(o) {
	            o = typeof o == 'string' ? eval('(' + o + ')') : o;
	            var type = Object.prototype.toString.call(o);
	            this.clearAfter(0).fillNext();
	            if (type.indexOf('Object') > -1) {
	                var i = 1;
	                for (var k in o) {
	                    $("#" + k).val(o[k]);
	                    this.fillNext(i++);
	                }
	            } else if (type.indexOf('Array') > -1) {
	                var l = this.idList;
	                for (var i = 0; i < l.length; i++) {
	                    this.fillNext(i + 1);
	                    $("#" + l[i]).val(o[i]);
	                }
	            }
	            return false;
	        }
	    };
	    $.extend({
	        linkage: function linkage(idList, data, defaultOption) {
	            return new _linkage(idList, data, defaultOption);
	        }
	    });
	})(jQuery);

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	//=====================================================================================
	// 加载css：$.loadCss(url,callback)
	!(function () {
	    function styleOnload(node, callback) {
	        // for IE6-9 and Opera
	        if (node.attachEvent) {
	            node.attachEvent('onload', callback);
	        } else {
	            setTimeout(function () {
	                poll(node, callback);
	            }, 0); // for cache
	        }
	    }

	    function poll(node, callback) {
	        if (callback.isCalled) {
	            return;
	        }
	        var isLoaded = false;
	        if (/webkit/i.test(navigator.userAgent)) {
	            //webkit
	            if (node['sheet']) {
	                isLoaded = true;
	            }
	        }
	        // for Firefox
	        else if (node['sheet']) {
	                try {
	                    if (node['sheet'].cssRules) {
	                        isLoaded = true;
	                    }
	                } catch (ex) {
	                    // NS_ERROR_DOM_SECURITY_ERR
	                    if (ex.code === 1000) {
	                        isLoaded = true;
	                    }
	                }
	            }
	        if (isLoaded) {
	            setTimeout(function () {
	                callback();
	            }, 1);
	        } else {
	            setTimeout(function () {
	                poll(node, callback);
	            }, 1);
	        }
	    }

	    $.loadCss = function (url, callback) {
	        var node = document.createElement("link");
	        node.setAttribute("rel", "stylesheet");
	        node.setAttribute("type", "text/css");
	        node.setAttribute("href", url);
	        document.body.appendChild(node);
	        styleOnload(node, function () {
	            callback();
	        });
	    };
	})();

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	/*=====================================================================================
	 * $.tip('str','error')
	 * $.tip('str','alert')
	 * $.tip('str','success')
	 */
	!(function ($) {
	    $(function () {
	        if ($('.handle-tip').length == 0) $('body').append('<div class="handle-tip"></div>');
	    });
	    $.extend({
	        tip: function tip(text, type) {
	            $('.handle-tip').html(text).autoShowAndHide(type);
	        }
	    });
	    $.fn.extend({
	        autoShowAndHide: function autoShowAndHide(type) {
	            var left = parseFloat($('.handle-tip').width()) / 2;
	            $('.handle-tip').css({
	                'opacity': '0',
	                'margin-left': '-' + left + 'px',
	                'display': 'block'
	            }).attr('class', 'handle-tip momo-hide handle-' + type).stop().animate({
	                'opacity': 1
	            }, 200, function () {
	                $(this).animate({ 'opacity': 0 }, 6000, function () {
	                    $(this).css('display', 'none');
	                });
	            });
	        }
	    });
	})(jQuery);

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	//=====================================================================================
	// 编辑器组件自动加载所需文件
	$(function () {
	    if ($('[data-role="uedit"]').length > 0) {
	        var css_url;
	        var js_url1;
	        var js_url2;
	        var js_url3;

	        (function () {
	            var loadjs = function loadjs() {
	                $.when($.getScript(js_url1), $.getScript(js_url2)).done(function () {
	                    // loading js_url3 here to preventing undefined 'UM' object
	                    // error.
	                    // As this is async.
	                    $.getScript(js_url3);
	                    var code = '';
	                    $('script[type="text/momo-uedit"]').each(function () {
	                        code += $(this).html() + ';';
	                    });
	                    eval(code);
	                }).fail(function () {
	                    loadjs();
	                });
	            };

	            css_url = '//cdnst.immomo.com/momofes/js/momobootstrap/lib/umeditor/themes/default/css/umeditor.css';
	            js_url1 = '//cdnst.immomo.com/momofes/js/momobootstrap/lib/umeditor/umeditor.config.js';
	            js_url2 = '//cdnst.immomo.com/momofes/js/momobootstrap/lib/umeditor/umeditor.min.js';
	            js_url3 = '//cdnst.immomo.com/momofes/js/momobootstrap/lib/umeditor/lang/zh-cn/zh-cn.js';

	            $.loadCss(css_url, function () {
	                loadjs();
	            });
	        })();
	    }
	});

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by wu.yixiang on 15/11/13.
	 */

	var pageTemplate = window.pageTemplate = (function () {
	    var $box,
	        JsonData,
	        actionParam,
	        isJump,
	        isSkip,
	        inputWidth,
	        showItem,
	        lastBtn,
	        nextBtn,
	        btnText,
	        nowPage = 1,
	        totalPages = 0,
	        totalRows = 0,
	        isDecodeURIComponent = false;

	    function _isHasLeft() {
	        return nowPage != 1 && totalPages != 0 ? '<li class="page-item"><a class="page-link" href="javascript:">' + lastBtn + '</a></li>' : '';
	    }

	    function _isHasRight() {
	        return totalPages != nowPage && totalPages != 0 ? '<li class="page-item"><a class="page-link" href="javascript:">' + nextBtn + '</a></li>' : '';
	    }

	    function _isHasLeftApostrophe() {
	        return nowPage > 3 ? '<li class="page-item"><a class="page-link">...</a></li>' : '';
	    }

	    function _isHasRightApostrophe() {
	        return totalPages - nowPage > 2 ? '<li class="page-item"><a class="page-link" href="javascript:">...</a></li>' : '';
	    }

	    function _less() {
	        var html = '',
	            active = '';
	        for (var i = 1; i <= totalPages; i++) {
	            active = nowPage == i ? "active" : "";
	            html += '<li class="page-item ' + active + '"><a class="page-link" href="javascript:">' + i + '</a></li>';
	        }
	        return html;
	    }

	    function _more() {
	        var html = '',
	            active = '';
	        if (nowPage <= showItem - 2) {
	            //------------1、右省略情况
	            for (var i = 1; i <= showItem - 1; i++) {
	                active = nowPage == i ? "active" : "";
	                html += '<li class="page-item ' + active + '"><a class="page-link" href="javascript:">' + i + '</a></li>';
	            }
	            html += '<li class="page-item"><a class="page-link" href="javascript:" disabled>...</a></li>' + '<li class="page-item" href="javascript:"><a class="page-link">' + totalPages + '</a></li>';
	        } else if (nowPage > showItem - 2 && nowPage < totalPages - showItem + 3) {
	            //-------------2、中间省略情况

	            html = '<li class="page-item"><a class="page-link" href="javascript:">1</a></li>' + '<li class="page-item"><a class="page-link" href="javascript:" disabled>...</a></li>';
	            if ((showItem - 2) % 2 == 1) {
	                //奇数
	                var startText = nowPage - parseInt((showItem - 3) / 2),
	                    len = showItem - 2;
	            } else {
	                //偶数
	                var startText = nowPage - parseInt((showItem - 2) / 2),
	                    len = showItem - 2;
	            }
	            for (var i = 0; i < len; i++) {
	                active = nowPage == startText + i ? "active" : "";
	                html += '<li class="page-item ' + active + '"><a class="page-link" href="javascript:">' + (startText + i) + '</a></li>';
	            }
	            html += '<li class="page-item"><a class="page-link" href="javascript:">...</a></li>' + '<li class="page-item"><a class="page-link" href="javascript:">' + totalPages + '</a></li>';
	        } else if (nowPage >= totalPages - showItem + 3) {
	            //-------------3、左省略情况
	            html = '<li class="page-item"><a class="page-link" href="javascript:">1</a></li>' + '<li class="page-item"><a class="page-link" href="javascript:">...</a></li>';
	            for (var i = showItem - 2; i >= 0; i--) {
	                active = nowPage == totalPages - i ? "active" : "";
	                html += '<li class="page-item ' + active + '"><a class="page-link" href="javascript:">' + (totalPages - i) + '</a></li>';
	            }
	        }
	        return html;
	    }

	    function _dealUrl(url, param) {
	        var param = isDecodeURIComponent ? decodeURIComponent(param) : param;
	        return url + param + '';
	    }

	    return {
	        render: function render(oParam) {
	            $box = oParam.$box;
	            JsonData = oParam.data;
	            actionParam = oParam.actionParam || 'p';
	            isJump = oParam.isJump || false;
	            isSkip = oParam.isSkip;
	            inputWidth = parseFloat(oParam.inputWidth);
	            showItem = oParam.showItem || 5;
	            btnText = oParam.btnText || 'GO';
	            lastBtn = oParam.lastBtn || '«';
	            nextBtn = oParam.nextBtn || '»';
	            isDecodeURIComponent = oParam.isDecodeURIComponent || false;
	            nowPage = JsonData.page.nowPage;
	            totalPages = JsonData.page.totalPages;
	            totalRows = JsonData.page.totalRows;

	            inputWidth = isNaN(inputWidth) ? undefined : inputWidth;

	            var html = '';
	            if (isJump) {
	                //-----------支持跳转部分
	                html += '<div class="input-group pull-xs-right col-sm-2"><input class="page-direct form-control" type="text" ' + (inputWidth == true ? 'style="width:' + inputWidth + 'px' : '') + '" placeholder="页码"/><span class="input-group-btn"><button class="btn btn-sm btn-primary direct-btn ">' + btnText + '</button></span></div>'; //-----------数据总量显示部分
	            }

	            //---------------------------------------------------------------分页显示部分
	            html += '<ul class="page-num pagination pagination-sm pull-xs-right">' + _isHasLeft();
	            if (totalPages <= showItem) {
	                html += _less();
	            } else {
	                html += _more();
	            }
	            html += _isHasRight() + '</ul>';
	            //---------------------------------------------------------------分页显示部分

	            html += '<ul class="page-all pagination pagination-sm pull-xs-right m-r"><li class="page-item"><a class="page-link">' + totalRows + '条记录</a></li></ul>'; //-----------数据总量显示部分

	            $box.html(html);
	            $box.find('.page-num').on('click', function (e) {
	                if (e.target.nodeName == 'A') {
	                    var $target = $(e.target),
	                        url = location.href.split('?')[0];
	                    if (!$target.parent().hasClass('active')) {
	                        if ($.isNumeric($target.html())) {
	                            if (isSkip) {
	                                var param = $.query.set(actionParam, $target.html()).toString();
	                                location.href = _dealUrl(url, param);
	                            } else {
	                                $box.trigger('changePage', [$target.html()]);
	                            }
	                        }
	                        if ($target.html() == nextBtn) {
	                            //下一页
	                            if (isSkip) {
	                                var param = $.query.set(actionParam, nowPage * 1 + 1).toString();
	                                location.href = _dealUrl(url, param);
	                            } else {
	                                $box.trigger('changePage', [nowPage * 1 + 1]);
	                            }
	                        }
	                        if ($target.html() == lastBtn) {
	                            //上一页
	                            if (isSkip) {
	                                var param = $.query.set(actionParam, nowPage * 1 - 1).toString();
	                                location.href = _dealUrl(url, param);
	                            } else {
	                                $box.trigger('changePage', [nowPage * 1 - 1]);
	                            }
	                        }
	                    }
	                }
	            });

	            $box.find('.direct-btn').on('click', function (e) {
	                var n = $.trim($box.find('.page-direct').val()),
	                    url = location.href.split('?')[0];
	                if (n && $.isNumeric(n) && $.isNumeric(parseInt(n)) && n >= 1 && n <= totalPages) {
	                    if (isSkip) {
	                        var param = $.query.set(actionParam, n).toString();
	                        location.href = _dealUrl(url, param);
	                    } else {
	                        $box.trigger('changePage', [n]);
	                    }
	                } else {
	                    var index = Math.round(Math.random());
	                    var aText = ['大哥，没有这一页！', '真没有这一页！您看是不是输入错了？'];
	                    $.tip(aText[index], 'error');
	                }
	            });
	        }
	    };
	})();
	//    var s = '{{$page_info}}';
	//    s = s.replace(/&quot;/g, "\"");
	//    var data = {page: JSON.parse(s)};
	//    var isJump = '{{$is_jump}}' == 'true' ? true : false;
	//    var isDecodeURIComponent = '{{$isDecodeURIComponent}}' == 'true' ? true : false;
	//    pageTemplate.render({
	//        $box: $('#paging'),    //*必选
	//        data: data,   //*必选
	////        actionParam: 'page',   //提交参数字段名  默认：'p'
	////        lastBtn: "上一页",     //按钮文体        默认：bootstrap效果
	////        nextBtn: "下一页",     //按钮文体        默认：bootstrap效果
	//        isJump: isJump,          //是否显示跳转框  默认：fasle
	////        inputWidth: 100,       //跳转输入框宽度  默认：40px
	//        btnText: '跳转',       //跳转按钮名称    默认："跳转"
	////        showItem: 8,           //总共展示的条目  默认：5个
	//        isDecodeURIComponent:isDecodeURIComponent      //是否支持decodeURIComponent  默认：false
	//    });
	exports.default = pageTemplate;

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by wu.yixiang on 15/11/9.
	 */
	var Loading = (function ($) {

	    var NAME = 'loading';
	    var VERSION = '4.0.0';
	    var DATA_KEY = 'bs.' + NAME;
	    var EVENT_KEY = '.' + DATA_KEY;
	    var DATA_API_KEY = 'data-loading';
	    var JQUERY_NO_CONFLICT = $.fn[NAME];

	    var ClassName = {};

	    var Event = {};

	    var Attr = {};

	    var Loading = (function () {
	        function Loading(container, ops) {
	            _classCallCheck(this, Loading);

	            this._$container = container;

	            container.addClass('loading');

	            if (ops.size) {
	                if (ops.size == 'sm') {
	                    container.addClass('loading-sm');
	                } else if (ops.size == 'lg') {
	                    container.addClass('loading-lg');
	                }
	            }
	        }

	        _createClass(Loading, [{
	            key: 'append',
	            value: function append(ops) {
	                var $cont = this._$container;
	                var css = ops || 'tacitly';
	                if ($cont.children('.loading').size() == 0) {
	                    var $loading = $('<div>', {
	                        class: 'loading loading-' + css
	                    });
	                    this._$loading = $loading;
	                    $cont.append($loading);
	                }
	                return $cont;
	            }
	        }, {
	            key: 'show',
	            value: function show() {
	                this._$loading.show();
	                return this._$container;
	            }
	        }, {
	            key: 'hide',
	            value: function hide() {
	                this._$loading.hide();
	                return this._$container;
	            }
	        }, {
	            key: 'remove',
	            value: function remove() {
	                this._$loading.remove();
	                return this._$container;
	            }
	        }], [{
	            key: '_jQueryInterface',
	            value: function _jQueryInterface(config, ops) {
	                return this.each(function () {
	                    var $element = $(this);
	                    var data = $element.data(DATA_KEY);

	                    if (!data) {
	                        data = new Loading($element, config);
	                        $element.data(DATA_KEY, data);
	                    }

	                    if (typeof config === 'string') {
	                        data[config].call(data, ops);
	                    }
	                });
	            }
	        }]);

	        return Loading;
	    })();

	    /**
	     * ------------------------------------------------------------------------
	     * jQuery
	     * ------------------------------------------------------------------------
	     */

	    $.fn[NAME] = Loading._jQueryInterface;
	    $.fn[NAME].Constructor = Loading;
	    $.fn[NAME].noConflict = function () {
	        $.fn[NAME] = JQUERY_NO_CONFLICT;
	        return Loading._jQueryInterface;
	    };

	    /**
	     * 声明式适配
	     */

	    $(document).ready(function () {
	        var loadings = $('[' + DATA_API_KEY + ']');
	        loadings.each(function (i, loading) {
	            var $loading = $(loading);
	            $loading.loading($loading.data());
	        });
	    });
	})(jQuery);

	exports.default = Loading;

/***/ }
/******/ ])});;