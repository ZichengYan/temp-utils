(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var email = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
var idCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
var url = /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i;
var tel = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;

var device = {
    android: /android/i,
    ipad: /ipad/i,
    iphone: /iphone/i,
    macos: /macintosh/i,
    windows: /windows/i,
    isMobileTerminal: /(nokia|iphone|android|ipad|motorola|^mot\-|softbank|foma|docomo|kddi|up\.browser|up\.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam\-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte\-|longcos|pantech|gionee|^sie\-|portalmmm|jig\s browser|hiptop|^ucweb|^benq|haier|^lct|opera\s*mobi|opera\*mini|320x320|240x320|176x220)/i
};

var browser = {
    ie: /msie (\d+\.\d+)/i,
    webkit: /webkit/i,
    chrome: /chrome\/(\d+\.\d+)/i,
    fireFox: /firefox\/(\d+\.\d+)/i,
    opera: /opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i,
    safari: /version\/([\d.]+).*safari/i
};
module.exports = {
    email: email,
    idCard: idCard,
    url: url,
    tel: tel,
    device: device,
    browser: browser
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 随机数
 * @param x 最小值
 * @param y 最大值
 * @returns {Number}
 */
var getRandomNum = function getRandomNum(x, y) {
    if (x != '') {
        y = x;
        return Math.round(Math.random() * y);
    }
    return Math.round(Math.random() * y + (x - 0));
};

var getRandomColor = function getRandomColor() {
    var hexColorArray = ['a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    var _getRandomNum = function _getRandomNum() {
        return hexColorArray[getRandomNum(0, 14)];
    };
    return '#' + _getRandomNum() + _getRandomNum() + _getRandomNum() + _getRandomNum() + _getRandomNum() + _getRandomNum();
};

module.exports = {
    getRandomNum: getRandomNum,
    getRandomColor: getRandomColor
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _module$exports;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = __webpack_require__(3),
    Canvas = _require.Canvas;

var _require2 = __webpack_require__(4),
    formatDate = _require2.formatDate,
    formatTimeStampQuick = _require2.formatTimeStampQuick;

var _require3 = __webpack_require__(5),
    formatMoney = _require3.formatMoney;

var _require4 = __webpack_require__(6),
    whichBrowser = _require4.whichBrowser;

var _require5 = __webpack_require__(7),
    whichDevice = _require5.whichDevice;

var _require6 = __webpack_require__(8),
    isEmpty = _require6.isEmpty;

var _require7 = __webpack_require__(9),
    isJson = _require7.isJson;

var _require8 = __webpack_require__(1),
    getRandomNum = _require8.getRandomNum,
    getRandomColor = _require8.getRandomColor;

var _require9 = __webpack_require__(0),
    email = _require9.email,
    idCard = _require9.idCard,
    url = _require9.url,
    tel = _require9.tel,
    device = _require9.device,
    browser = _require9.browser;

module.exports = (_module$exports = {
    formatDate: formatDate, formatTimeStampQuick: formatTimeStampQuick,
    Canvas: Canvas
}, _defineProperty(_module$exports, 'formatDate', formatDate), _defineProperty(_module$exports, 'formatMoney', formatMoney), _defineProperty(_module$exports, 'whichBrowser', whichBrowser), _defineProperty(_module$exports, 'whichDevice', whichDevice), _defineProperty(_module$exports, 'isEmpty', isEmpty), _defineProperty(_module$exports, 'isJson', isJson), _defineProperty(_module$exports, 'getRandomNum', getRandomNum), _defineProperty(_module$exports, 'getRandomColor', getRandomColor), _defineProperty(_module$exports, 'email', email), _defineProperty(_module$exports, 'idCard', idCard), _defineProperty(_module$exports, 'url', url), _defineProperty(_module$exports, 'tel', tel), _defineProperty(_module$exports, 'device', device), _defineProperty(_module$exports, 'browser', browser), _module$exports);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = __webpack_require__(1),
    getRandomColor = _require.getRandomColor,
    getRandomNum = _require.getRandomNum;

var Canvas = function () {
    function Canvas(x, y) {
        _classCallCheck(this, Canvas);

        this.canvas = document.createElement('canvas');
        this.canvas.width = x;
        this.canvas.height = y;
        this.x = x;
        this.y = y;
    }

    _createClass(Canvas, [{
        key: 'getCanvase',
        value: function getCanvase(code) {
            var x = this.x,
                y = this.y;
            var canvas = new this.Canvas(x, y).canvas;
            var ctx = canvas.getContext('2d');
            ctx.fillStyle = getRandomColor();
            ctx.fillRect(0, 0, x, y);

            //设置字体样式
            ctx.font = "25px Arial"; //必须有字体大小才会生效

            //设置字体填充颜色
            ctx.fillStyle = getRandomColor();

            //从坐标点(50,50)开始绘制文字
            ctx.fillText(code, 8, 25);

            for (var i = 0; i < 50; i++) {
                //设置对象起始点和终点
                ctx.moveTo(getRandomNum(x), getRandomNum(y));
                ctx.lineTo(getRandomNum(x), getRandomNum(y)); //设置样式
                ctx.lineWidth = 0.5;
                ctx.strokeStyle = getRandomColor();
                //绘制
                ctx.stroke();

                ctx.beginPath();

                ctx.fillStyle = getRandomColor();
                ctx.fillRect(getRandomNum(x), getRandomNum(y), 1, 1);
            }
            var dataURL = canvas.toDataURL('image/jpeg'); //转换图片为dataURL
            return dataURL;
        }
    }]);

    return Canvas;
}();

module.exports = { Canvas: Canvas };

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    formatDate: function formatDate(date, format) {
        var aaaaaa = 1;
        console.log(aaaaaa);
        if (typeof date === "string") {
            var mts = date.match(/(\/Date\((\d+)\)\/)/);
            if (mts && mts.length >= 3) {
                date = parseInt(mts[2]);
            }
        }
        date = new Date(date);
        if (!date || date.toUTCString() == "Invalid Date") {
            return "";
        }
        var map = {
            "M": date.getMonth() + 1, //月份
            "d": date.getDate(), //日
            "h": date.getHours(), //小时
            "m": date.getMinutes(), //分
            "s": date.getSeconds(), //秒
            "S": date.getMilliseconds(), //毫秒,
            "q": Math.floor((date.getMonth() + 3) / 3) //季度
        };

        format = format.replace(/([yMdhmsqS])+/g, function (all, t) {
            var v = map[t];
            if (v !== undefined) {
                if (all.length > 1) {
                    v = '0' + v;
                    v = v.substr(v.length - 2);
                }
                return v;
            } else if (t === 'y') {
                return (date.getFullYear() + '').substr(4 - all.length);
            }
            return all;
        });
        return format;
    },
    formatTimeStampQuick: function formatTimeStampQuick(timeStamp) {
        // "2017/5/14 20:19"
        return new Date(parseInt(timeStamp || Date.now())).toLocaleString().replace(/:\d{1,2}$/, ' ');
    }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function formatMoney() {}
module.exports = { formatMoney: formatMoney };

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    browser = _require.browser;

function whichBrowser() {
    var userAgent = navigator.userAgent;
    var key = void 0,
        result = void 0;
    for (key in browser) {
        result = userAgent.match(browser[key]);
        if (result) {
            return result;
        }
    }
}
module.exports = { whichBrowser: whichBrowser };

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    device = _require.device;

function whichDevice() {
    var userAgent = navigator.userAgent;
}
module.exports = { whichDevice: whichDevice };

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isEmpty = function isEmpty(obj) {
    var key;
    for (key in obj) {
        return false;
    }
    return true;
};
module.exports = { isEmpty: isEmpty };

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isJson = function isJson(obj) {
    //判断obj是否为json对象
    var isjson = (typeof obj === "undefined" ? "undefined" : _typeof(obj)) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
    //obj.length 排除伪数组
    return isjson;
};
module.exports = { isJson: isJson };

/***/ })
/******/ ]);
});