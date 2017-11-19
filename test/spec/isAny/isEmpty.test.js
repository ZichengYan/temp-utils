const {isEmpty} = require('../../../src/isAny/isEmpty');
const {expect} = require('chai');

describe('是否为空对象', function () {
    it('空对象', function () {
        expect(isEmpty({})).to.be.true;
    });
    it('非空对象', function () {
        expect(isEmpty({a: 1})).to.not.be.true;
    });
});

