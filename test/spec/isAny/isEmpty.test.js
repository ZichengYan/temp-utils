const {isEmpty} = require('../../../src/isAny/isEmpty');
const {expect} = require('chai');

describe('是否为空对象', function () {
    it('空对象', function () {
        expect(isEmpty({})).to.be.match(/^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/);
    });
    it('非空对象', function () {
        expect(isEmpty({a:1})).to.be.match(/^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/);
    });
});

