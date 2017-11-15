const {browser} = require('../regExp/commonRegExp.js');

function whichBrowser() {
    const userAgent = navigator.userAgent;
    let key, result;
    for (key in browser) {
        result = userAgent.match(browser[key]);
        if (result) {
            return result;
        }
    }
}
module.exports={whichBrowser};