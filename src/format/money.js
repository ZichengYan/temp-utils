/**
 *
 * @param number 被格式化数字
 * @param places 保留小数
 * @param symbol 钱符号
 * @param thousand 千位分隔符
 * @param decimal 小数点分隔号
 * @returns {string}
 */
function formatMoney(number, places, symbol, thousand, decimal) {
    var i, j, negative, j;
    number = number || 0;
    places = !isNaN(places = Math.abs(places)) ? places : 2;
    symbol = symbol !== undefined ? symbol : "￥";
    thousand = thousand || ",";
    decimal = decimal || ".";
    negative = number < 0 ? "-" : "";
    i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "";
    j = (j = i.length) > 3 ? j % 3 : 0;
    return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
}

module.exports = {formatMoney}