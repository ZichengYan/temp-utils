const {isJson} = require('../../../src/isAny/isJson.js');
const {expect} = require('chai');

describe('是否为json', function () {
    it('是json', function () {
        let str={"a":"1"};
        expect(isJson(JSON.stringify(str))).to.be.true;
    });
    it('不是json', function () {
        expect(isJson({a: 1})).to.not.be.true;
    });
});
