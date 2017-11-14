/**
 * 随机数
 * @param x 最小值
 * @param y 最大值
 * @returns {Number}
 */
getRandomNum = (x, y) => {
    if (x != '') {
        y = x;
        return Math.round(Math.random() * y);
    }
    return Math.round(Math.random() * y + (x - 0));
};

getRandomColor = () => {
    const hexColorArray = ['a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    let _getRandomNum = () => {
        return hexColorArray[getRandomNum(0, 14)];
    };
    return `#${_getRandomNum()}${_getRandomNum()}${_getRandomNum()}${_getRandomNum()}${_getRandomNum()}${_getRandomNum()}`;
};

module.exports = {
    getRandomNum,
    getRandomColor
};