const isJson = (obj) => {
    //判断obj是否为json对象
    var isjson = (typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length);
    //obj.length 排除伪数组
    return isjson;
}
module.exports = {isJson};