const {Canvas} = require('./canvas/getCanvas.js');
const {formatDate, formatTimeStampQuick} = require('./format/date.js');
const {formatMoney} = require('./format/money.js');
const {whichBrowser} = require('./isAny/browser.js');
const {whichDevice} = require('./isAny/device.js');
const {isEmpty} = require('./isAny/isEmpty.js');
const {isJson} = require('./isAny/isJson.js');
const {getRandomNum, getRandomColor} = require('./random/random.js');
const {
    email,
    idCard,
    url,
    tel,
    device,
    browser
} = require('./regExp/commonRegExp.js');

module.exports = {
    formatDate, formatTimeStampQuick,
    Canvas,
    formatDate,
    formatMoney,
    whichBrowser,
    whichDevice,
    isEmpty,
    isJson,
    getRandomNum, getRandomColor,
    email, idCard, url, tel, device, browser
};