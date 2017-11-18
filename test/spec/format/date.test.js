const {formatDate, formatTimeStampQuick} = require('../../../src/format/date.js');
const {expect} = require('chai');

describe('正则匹配', function () {
    it('时间戳格式化', function () {
        expect(formatDate(Date.now(),'yyyy-MM-dd hh:mm:ss')).to.be.match(/^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/);
    });

    it('时间戳快速生成', function () {
        expect(formatTimeStampQuick()).to.be.match(/^\d{4}\/\d{1,2}\/\d{1,2}\s\d{1,2}:\d{1,2}$/);
    });
});