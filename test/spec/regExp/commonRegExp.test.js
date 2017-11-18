const {
    email,
    idCard,
    url,
    tel,
    device: {
        android,
        ipad,
        iphone,
        macos,
        windows,
        isMobileTerminal
    },
    browser: {
        ie,
        webkit,
        chrome,
        fireFox,
        opera,
        safari
    }
} = require('../../../src/regExp/commonRegExp.js');
const {expect} = require('chai');

describe('正则匹配', function () {
    it('email', function () {expect('qwew@qq.com').to.be.match(email);});
    it('idCard', function () {expect('420300198802231345').to.be.match(idCard);});
    it('url', function () {expect('http://www.baidu.com').to.be.match(url);});
    it('tel', function () {expect('15219876789').to.be.match(tel);});
    it('android', function () {expect('str').to.be.match(android);});
    it('ipad', function () {expect('str').to.be.match(ipad);});
    it('iphone', function () {expect('str').to.be.match(iphone);});
    it('macos', function () {expect('str').to.be.match(macos);});
    it('windows', function () {expect('str').to.be.match(windows);});
    it('isMobileTerminal', function () {expect('str').to.be.match(isMobileTerminal);});
    it('ie', function () {expect('ie').to.be.match(ie);});
    it('webkit', function () {expect('webkit').to.be.match(webkit);});
    it('chrome', function () {expect('chrome').to.be.match(chrome);});
    it('fireFox', function () {expect('fireFox').to.be.match(fireFox);});
    it('opera', function () {expect('opera').to.be.match(opera);});
    it('safari', function () {expect('safari').to.be.match(safari);});
});


















