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