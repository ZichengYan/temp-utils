const {formatMoney} = require('../../../src/format/money.js');

describe('金钱格式化', function () {
    it('金钱格式化', function () {
        expect(formatMoney(13123.12312, '2', '$', ',', '.')).to.be.match(/^\$13,123.12$/);
    });
});