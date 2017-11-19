const {whichBrowser} = require('../../../src/isAny/browser.js');
const {expect} = require('chai');

describe('判断浏览器', function () {
    it('浏览器', function () {
        expect(whichBrowser()).to.be.true;
    });
});

