let turnDirection = function (base64, cb) {
    let srcBase64 = base64;
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    let img = new Image();
    img.src = srcBase64;
    img.onload = function () {
        // let dataURL = '';
        let scale = 1;
        let width = img.width;
        let height = img.height;
        // debugger;
        if (height > width) {
            canvas.width = height / scale;
            canvas.height = width / scale;
            ctx.save();
            ctx.translate(0, width);//设置画布上的(0,0)位置，也就是旋转的中心点
            ctx.rotate(-90 * Math.PI / 180);
            ctx.drawImage(img, 0, 0);
            ctx.restore();//恢复状态
        } else {
            canvas.height = height / scale;
            canvas.width = width / scale;
            ctx.drawImage(img, 0, 0);
        }
        // dataURL = canvas.toDataURL("image/png");
        cb && cb(canvas);
        return canvas;
    };
}


module.exports = {turnDirection};