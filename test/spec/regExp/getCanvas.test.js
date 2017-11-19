const {Canvas} = require('../../../src/canvas/getCanvas.js');
const {expect} = require('chai');

describe('canvas', function () {
    it('canvas-height', function () {
        expect(new Canvas(100, 200).canvas.height).to.equal(200);
        // expect(new Canvas(100,200).canvas.width).to.equal(100);
    });
});

describe('canvas', function () {
    it('canvas-width', function () {
        // expect(new Canvas(100,200).canvas.height).to.equal(200);
        expect(new Canvas(100, 200).canvas.width).to.equal(100);
    });
});


















