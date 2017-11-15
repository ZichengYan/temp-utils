const email = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
const idCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
const url = /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i;
const tel = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;

const device = {
    android: /android/i,
    ipad: /ipad/i,
    iphone: /iphone/i,
    macos: /macintosh/i,
    windows: /windows/i,
    isMobileTerminal: /(nokia|iphone|android|ipad|motorola|^mot\-|softbank|foma|docomo|kddi|up\.browser|up\.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam\-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte\-|longcos|pantech|gionee|^sie\-|portalmmm|jig\s browser|hiptop|^ucweb|^benq|haier|^lct|opera\s*mobi|opera\*mini|320x320|240x320|176x220)/i
}

const browser = {
    ie: /msie (\d+\.\d+)/i,
    webkit: /webkit/i,
    chrome: /chrome\/(\d+\.\d+)/i,
    fireFox: /firefox\/(\d+\.\d+)/i,
    opera: /opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i,
    safari: /version\/([\d.]+).*safari/i,
}
module.exports = {
    email,
    idCard,
    url,
    tel,
    device,
    browser
}