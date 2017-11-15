const {getRandomColor, getRandomNum} = require('../random/random.js');

class Canvas {
    constructor(x, y) {
        this.canvas = document.createElement('canvas');
        this.canvas.width = x;
        this.canvas.height = y;
        this.x=x;
        this.y=y;
    }

    getCanvase(code) {
        const x = this.x, y = this.y;
        var canvas = (new this.Canvas(x, y)).canvas;
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = getRandomColor();
        ctx.fillRect(0, 0, x, y);

        //设置字体样式
        ctx.font = "25px Arial"; //必须有字体大小才会生效

        //设置字体填充颜色
        ctx.fillStyle = getRandomColor();

        //从坐标点(50,50)开始绘制文字
        ctx.fillText(code, 8, 25);

        for (let i = 0; i < 50; i++) {
            //设置对象起始点和终点
            ctx.moveTo(getRandomNum(x), getRandomNum(y));
            ctx.lineTo(getRandomNum(x), getRandomNum(y));//设置样式
            ctx.lineWidth = 0.5;
            ctx.strokeStyle = getRandomColor();
            //绘制
            ctx.stroke();

            ctx.beginPath();

            ctx.fillStyle = getRandomColor();
            ctx.fillRect(getRandomNum(x), getRandomNum(y), 1, 1);
        }
        var dataURL = canvas.toDataURL('image/jpeg'); //转换图片为dataURL
        return dataURL;
    }
}


module.exports = {Canvas};