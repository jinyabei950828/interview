## HTML 基础

### 1.H5 的语义化标签以及语义化作用（1）

### 2.Web Worker 和 Web Socket(1)

### 3.HTML5 新特性 （1）

---

## CSS 基础

### 1.元素水平垂直居中(3)

    五种方法:
    --- 绝对定位（left:50%,top:50%）+transform:translate（-50%，-50%）--兼容性问题
    --- 绝对定位(left:0,right:0,top:0,bottom:0,margin:0 auto)--盒子有宽高
    ---绝对定位(left:50%,top:50%)+margin负值--盒子宽度已知
    ---flex align-item:center justify-content:center--兼容性问题
    ---grid justify-content:center  align-content: center --兼容性问题

### 2.两栏布局(3)

    五种方法:
    --- 浮动+margin(左侧：float:left,width:200px,右侧:margin-left:200px;width:auto)
    --- 浮动+overflow（左侧：float:left,width:200px,右侧:overflow:hidden）
    --- 父元素相对定位，左侧绝对定位+右侧margin值
    --- 父元素相对定位, 右侧绝对定位，且设置left值
    --- 设置父元素flex,(左侧:width:200px;右侧:flex:1)

### 3.三栏布局(2)

    五种方法:
    --- 浮动+margin（左右两侧向对应方向浮动，中间设置margin值）
    --- 左右绝对定位+中间设置margin值
    --- 设置父元素flex,左右固定，中间设置flex：1
    --- 圣杯布局（浮动+负边距(margin),父元素设置左右padding,子元素设置左浮动，中间一列最前面，通过margin赋值将后两列移动到上一行）
    --- 双飞翼布局(浮动+外负边距，设置中间一列子元素的margin)

### 4.CSS 引入方式 （2）

    ---行内样式
    ---内部样式表
    ---外部样式表（link、import）

### 5.样式优先级（2）

    --- id选择器（100）

    --- 类选择器 （10）
    --- 属性选择器
    --- 伪类选择器

    --- 标签选择器 （1）
    --- 伪元素选择器

    --- 相邻兄弟选择器 （0）
    --- 子代选择器
    --- 后代选择器
    --- 通配选择器

### 6.盒模型（2）

### 7.display 属性值以及区别 （1）

### 8.position 属性值以及区别（1）

### 9.flex（1）

### 10.自适应布局（1）

    ---rem+媒体查询
    ---vw实现
    ---rem+vw+flexible实现

### 11.px、em、rem 的区别（1）

### 12.less 和 Sass（1）

### 13.css 实现轮播图（1）

    ---可以通过使用js控制每张图片的相对位置来实现，在第一张图片之前和最后一张图片之后分别补充最后一张和第一张图片，在最后一张切换到第一张时将容器的left设置为0，实现无缝轮播
    ---通过CSS的动画实现，控制z-index和opacity，同时给每张图设置延时显示时间
    ---vue可以利用v-show和transition实现

### 14.如何触发硬件加速（1）

    --- transform
    --- opacity
    --- filters
    --- will-change

## JS 基础

### 1. JS 继承类型（3）

    6种方法：
    --- 原型链继承
    --- 借用构造函数继承
    --- 组合继承
    --- 原型式继承
    --- 寄生继承
    --- 寄生组合继承

### 2. JS 的基本数据类型（2）

### 3. 原始值和引用值类型及区别(2)

    区别：
    --1.存储类型不同--栈和堆（原始类型占据空间固定）
    --2.赋值方式
    --3.比较方式（原始类型是值比较、引用类型是地址比较）

### 4.判断数据类型（2）

    ---1.调用typeof
    ---2.使用instanceOf（构造函数的prototype属性是否出现在某个实例对象的原型链上，不能判断null和undefined）
    ---3.constructor
    ---4.object.prototype.toString.call

### 5.数组和类数组的区别及转换（2）

    ---1.通过call调用数组的slice方法
    ---2.通过call调用数组的map方法
    ---3.Array.from
    ---4.扩展预算符

### 6.常见的数组 api（2）

    map、reduce、forEach、flat、slice、push、pop、shift、unshift、splice、concat、every、fill、filter、findIndex、indexOf、join、keys、reverse

### 7.bind、call、apply 的区别，手动实现（2）

    bind创建一个新函数、新的函数的this指定为bind的第一个参数，其余参数作为新函数的参数，以参数列表的形式传递参数

### 8.===和==区别（1）

### 9.深拷贝与浅拷贝 (2)

    --浅拷贝(Obejct.assign(),扩展运算符)
    --深拷贝(解决对象嵌套问题)

### 10.防抖和节流（2）

### 11.作用域和作用域链(2)

### 12.JS 的垃圾回收机制(2)

### 13.addEventListener 和 onClick 区别(1)

    ---onClick:绑定多个事件，只有最后一个事件会被触发,之前的被覆盖，该事件只在冒泡阶段捕获
    ---addEventListener:绑定多个事件，触发多次。根据参数，可在冒泡和捕获阶段触发，对任何dom元素都生效，不只是html元素

### 14.JavaScript 中的事件循环机制，宏任务与微任务(1)

### 15.跨域、同源策略以及跨域解决方案(1)

    --- cors(缺点:会产生预检请求)
    --- jsnop
    --- document.domain（二级域名必须相同，协议和端口一致,否则无法使用）
    --- postMessage
    --- nginx反向代理
    --- node中间件代理（devServer:proxy）
    --- localtion.hash+iframe跨域
    --- window.name+iframe跨域
    --- websocket

### 16.说下浏览器对象(BOM)有哪些（1）

    ---navigator
    ---window
    ---localtion
    ---history
    ---screen

### 17.原型和原型链（1）

### 18.闭包及其作用（1）

### 19.如何正确判断 this（2）

    ---函数调用
    ---方法调用
    ---构造器调用
    ---call、apply、bind调用

---

## ES6

### 1.ES6 有哪些新特性（1）

    ---模板字符串、扩展运算符、startWith、endWith、reapted、Promise、Reflect、块级作用域(let、const、var)、解构赋值、箭头函数、set和map、Proxy

### 2.let、const、var 的区别（2）

### 3.解构赋值(1)

### 4.箭头函数和普通函数的区别（this 指向）(2)

    ---箭头函数比普通函数简洁
    ---箭头函数没有自己的this，箭头函数没有Prototype
    ---箭头函数继承来的this永远不会变，call、bind、apply没有办法修改箭头函数的指向，
    ---箭头函数不能作为构造函数调用
    ---箭头函数没有自己的arguments
    ---箭头函数不能作为genarator函数，不能使用yield关键字

### 5.Symbol (1)

### 6.Set 和 Map 数据结构 (1)

### 7.Proxy(1)

### 8.Promise(1)

### 9.for、forEach、for in、for of 比较(1)

    ---for in 是为对象而设计（会遍历出原型链对象上的属性，属性名出现时不确定的）

### 10. async 和 await (1)

### 11.ES6 模块加载和 CommonJS 加载的原理、区别(2)

    ---CommonJS输出的是值的拷贝，ES Module输出的是值的引用，即ES6 Module只存只读，不能改变其值，也就是指针指向不能变，类似const
    ---CommonJS是运行时加载（module.exports），ES Module是编译时输出接口
    ---CommonJS的require（）是同步加载模块，ESModule的import是异步加载模块，静态编译时加载，有独立的模块依赖解析
    ---CommonJS模块的顶层this指向当前模块，ES6模块中，顶层this指向undefined

---

## Http 协议和计算机网络

### 1.tcp 和 udp(1)

    ---是否连接 (udp无连接
    、tcp面向连接)
    ---是否可靠（udp不可靠传输，不使用流量控制和拥塞控制、tcp可靠传输）
    ---连接对象个数（udp一对一、一对多、多对一、多对多、tcp一对一）
    ---传输方式（udp面向报、tcp文面向字节流）
    ---首部开销（udp首部开销小，8字节、tcp首部最小20字节，最大60字节）
    ---使用场景 （udp实时应用（IP电话、视频会议、直播等）tcp适用于要求可靠传输的应用，比如文件传输）

### 2.TCP 三次握手，两次行不行，四次行不行，四次挥手？(1)

### 3.HTTP 请求方法有哪些、put 和 post 的区别（1）

    ---put是幂等操作，而post不是

### 4.get 和 post 的区别（1）

    --- 后退和刷新（get是无害的，post数据会被重复提交）
    --- 书签（get会被收藏，post不可被收藏为书签）
    --- 缓存
    --- 编码类型
    --- 历史
    --- 安全
    --- 可见性

### 5.http 状态码 301 和 302（1）

### 6.cookie 首部相关字段（1）

    --- size
    --- name
    --- value
    --- domain
    --- path
    --- expires/Max-Age
    --- secure
    --- http-only
    --- samesite

### 7.https 和 http 的区别，https 握手（1）

    ---https是需要ca证书，需要一定费用
    ---http是明文传输，https是具有安全性的ssl加密传输协议
    ---http和https适用于不同的连接方式（端口不同，http的端口为80，https的端口403）
    ---https加密传输，有身份认证，比http协议安全

### 8.中间人攻击(1)

### 9.防范中间人攻击（1）

### 10.web 攻击以及防御（1）

    ---xss攻击
    ---预防
    ---1.对代码做好转义
    ---2.使用csp（http-equiv="Content-Security-Policy）
    ---3.敏感信息保护(http-only)
    ---4.使用验证码

    ---csrf
    ---预防
    ---1.进行同源检测（referer、origin）
    ---2.CSRF TOKEN
    ---3.cookie双重验证
    ---4.Samesite

### 11.浏览器存储（1）

### 12.浏览器的缓存策略（1）

### 13.计算机网络模型以及各层协议（1）

    ---tcp/ip模型（应用层、传输层、网络层、数据链路层、物理层）
    ---osi七层模型（应用层、表示层、会话层、传输层、网络层、数据链路层、物理层）

### 14.http 报文结构（1）

    ---请求报文:请求行、请求头、空行、请求体
    ---响应报文:响应行、响应头、空行、响应体

---

## 手写题

### 1. 快排.js（2）

### 2. 防抖.js (2)

### 3. 节流.js (2)

### 4. 深拷贝.js (2)

### 5. 观察者模式.js （1）

### 6. 发布订阅者模块.js （2）

### 7. 数组去重.js (1)

### 8. 数组扁平化.js (2)

### 9. 手写 apply、call、bind（2）

### 10.手写函数柯里化、实现一个 add 方法（2）

### 11.手写 new 函数(2)

    ---首先创建了一个新的空对象
    ---设置原型，将对象的原型设置为函数的 prototype 对象。
    ---让函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）
    ---判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象

---
