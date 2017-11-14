void

    function (w) {
        /**
         *
         * @param element
         * @returns {*}
         */
        //获取标签的内容（兼容所有浏览器）
        w['n'] = w['n'] || {};
        w['n'] = {
            getInnerText: function (element) {
                //能力检测(先判断如果这个能力有这个)
                if (typeof element.innerText === "string") { //火狐低版本不支持,IE678支持
                    //说明支持innerText
                    return element.innerText;
                } else {
                    //说明不支持innerText
                    return element.textContent; //火狐支持,IE678不支持
                }
            },
            /**
             *
             * @param element
             * @param value
             */
            //设置内容的方法（兼容性问题）
            setInnerText: function (element, value) {
                //能力检测
                if (typeof element.innerText === "string") {
                    element.innerText = value;

                } else {
                    element.textContent = value;
                }
            },

            //获取指定元素的第一个子元素
            getFirstElement: function (element) {
                //能力检测
                if (element.firstElementChild) {
                    return element.firstElementChild;
                } else {
                    //IE679
                    var node = element.firstChild;
                    while (node && node.nodeType != 1) {
                        //说明是一个节点
                        node = node.nextSibling;
                    }

                    return node;
                }
            },


            getLastElement: function (element) {
                //能力检测
                if (element.lastElementChild) {
                    return element.lastElementChild;
                } else {
                    var node = element.lastChild;
                    while (node && node.nodeType != 1) {
                        node = node.previousSibling;
                    }
                    return node;
                }
            },

            getNextElement: function (element) {
                if (element.nextElementSibling) {
                    return element.nextElementSibling;
                } else {
                    var node = element.nextSibling;
                    while (node && node.nodeType != 1) {
                        node = node.nextSibling;
                    }
                    return node;
                }
            },

            getPreviousElement: function (element) {
                if (element.previousElementSibling) {
                    return element.previousElementSibling;
                } else {
                    var node = element.previousSibling;
                    while (node && node.nodeType != 1) {
                        node = node.previousSibling;
                    }
                    return node;
                }
            },


            /**
             * 获取计算后的样式
             * @param obj
             * @param attr
             * @returns {*}
             */
            getStyle: function (obj, attr) {
                if (window.getComputedStyle) {
                    return window.getComputedStyle(obj, null)[attr];
                } else {
                    return obj.currentStyle[attr];
                }
            },


            /**
             * 获取获取浏览器被卷去的宽度高度
             * @returns {{top: (Number|number), left: (Number|number)}}
             */
            /*"scroll":function () {
             return {
             top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
             left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
             }
             }*/
            scroll: function () {
                return {
                    top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
                    left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
                }
            },

            /**
             * 获取可视区域的宽高
             * @returns {{width: (Number|number), henght: (Number|number)}}
             */
            client: function () {
                return {
                    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
                    henght: window.innerHeight || document.documentElement.clientWidth || document.body.clientWidth || 0
                }
            },


            getPageX: function (event) {
                if (event.pageX) {
                    return event.pageX;
                } else {
                    return event.clientX + scroll().left;
                }
            },

            getPageY: function (event) {
                if (event.pageY) {
                    return event.pageY;
                } else {
                    return event.clientY + scroll().top;
                }
            },


            /**
             * 给任意对象注册事件
             * @param element
             * @param type
             * @param fn
             */
            addEvent: function (element, type, fn) {
                if (element.addEventListener) {
                    element.addEventListener(type, fn, false)
                } else if (element.attachEvent) {
                    element.attachEvent("on" + type, fn)
                } else {
                    element["on" + type] = fn;
                }
            },


            /**
             * 移除对象事件
             * @param element
             * @param type
             * @param fn
             */
            removeEvent: function (element, type, fn) {
                if (element.removeEventListener) {
                    element.removeEventListener(type, fn, false)
                } else if (element.detachEvent) {
                    element.detachEvent("on" + type, fn);
                } else {
                    element["on" + type] = null;
                }
            },
            //通过id获取元素
            $: function (id) {
                return document.getElementById(id);
            },


            //清除选中的问题
            clearSelect: function (argument) {
                window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
            },

            /**
             * [formVal description]
             * @param  {[String]} str [使用$("#form").serialize()获取出来的字符串]
             * @return {[Object]}
             */
            strToObj: function (str) {
                str = decodeURIComponent(str);
                console.log(str)
                str = str.replace(/[\&\=]/g, ',');
                var arr = str.split(',')
                var obj = {};
                for (var i = 0, len = arr.length; i < len; i++) {
                    obj[arr[i]] = arr[i + 1];
                    i++;
                }
                console.log(obj);
                return obj;
            },
            /**
             * 对象转化成字符串  a=1&b=2
             * @param obj
             * @returns {string}
             */
            objToStr: function (obj) {
                var str = '';
                for (var key in obj) {
                    str += key + '=' + obj[key] + '&';
                }
                str = str.substr(0, str.length - 1);
                console.log(str)
                return str;
            },
            objToStr2: function (obj) {
                var temp = obj;
                temp = JSON.stringify(obj);
                temp = temp.substring(1, temp.length - 1);
                temp = temp.replace(/\"/g, '');
                temp = temp.replace(/\:/g, '\=');
                temp = temp.replace(/\,/g, '\&');
                return temp;
            },
        }
    }(window);



/**
 * 随机数
 * @param x 最小值
 * @param y 最大值
 * @returns {Number}
 */
getRandomNum(x, y) {
    if (x != '') {
        y = x;
        return Math.round(Math.random() * y);
    }
    return Math.round(Math.random() * y + (x - 0));
}

getRandomColor() {
    const hexColorArray = ['a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

    let _getRandomNum = () => {
        return hexColorArray[this.getRandomNum(0, 14)];
    }

    return `#${_getRandomNum()}${_getRandomNum()}${_getRandomNum()}${_getRandomNum()}${_getRandomNum()}${_getRandomNum()}`
}

getCodeImg(that) {
    let _this = this;
    that.$http({
        url: that.api.verificationCode
    }).then(function (result) {
        const data=result.data;
        // that.verificationCode=_this.getCanvase(data.result.verifiCode);
        that.verificationSrc = _this.getCanvase((data.result.verifiCode + '').split('').join(' '));
        that.verificationCode = data.result.verifiCode;
    })
}

Canvas(x, y) {
    // this.canvas = $('<canvas></canvas>')[0];
    this.canvas = document.createElement('canvas');
    this.canvas.width = x;
    this.canvas.height = y;
}

getCanvase(code) {
    const x = 90, y = 30;
    var canvas = (new this.Canvas(x, y)).canvas;
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = this.getRandomColor();
    ctx.fillRect(0, 0, x, y);

    //设置字体样式
    ctx.font = "25px Arial"; //必须有字体大小才会生效

    //设置字体填充颜色
    ctx.fillStyle = this.getRandomColor();

    //从坐标点(50,50)开始绘制文字
    ctx.fillText(code, 8, 25);

    for (let i = 0; i < 50; i++) {
        //设置对象起始点和终点
        ctx.moveTo(this.getRandomNum(x), this.getRandomNum(y));
        ctx.lineTo(this.getRandomNum(x), this.getRandomNum(y));//设置样式
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = this.getRandomColor();
        //绘制
        ctx.stroke();

        ctx.beginPath();

        ctx.fillStyle = this.getRandomColor();
        ctx.fillRect(this.getRandomNum(x), this.getRandomNum(y), 1, 1);
    }
    var dataURL = canvas.toDataURL('image/jpeg'); //转换图片为dataURL
    return dataURL;
}