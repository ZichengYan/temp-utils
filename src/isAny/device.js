const {device} = require('../regExp/commonRegExp.js');

function whichDevice() {
    const userAgent = navigator.userAgent;
    let key, result;
    for (key in device) {
        result = userAgent.match(device[key]);
        if (result) {
            return result;
        }
    }
}
module.exports={whichDevice}