const {getRandomNum, getRandomColor} = require('../../src/random/random.js');
const {expect} = require('chai');

console.log('chaichai', expect);

describe('随机数', function () {
    it('随机数在范围之内', function () {
        expect(getRandomNum(1, 10)).to.be.closeTo(1, 10);
    });
});


describe('随机颜色', function () {
    it('随机颜色匹配正则', function () {
        expect(getRandomColor()).to.be.match(/^#[\d|a-z]{6}$/i);
    });
});
