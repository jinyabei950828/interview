## HTML 基础

### 1.H5 的语义化标签以及语义化作用（2）

### 2.Web Worker 和 Web Socket(1)

### 3.HTML5 新特性 （1）

### 4.src 和 href 的区别 （1）

### 5.svg 和 canvas 的区别（1）

    1、canvas时h5提供的新的绘图方法，svg已经有了十多年的历史
    2、canvas画图基于像素点，是位图，如果进行放大或缩小会失真 ；svg基于图形，用html标签描绘形状，放大缩小不会失真
    3、canvas需要在js中绘制,svg在html绘制
    4、canvas支持颜色比svg多
    5、canvas无法对已经绘制的图像进行修改、操作 ；svg可以获取到标签进行操作

---

## CSS 基础

### 1.元素水平垂直居中(4)

    五种方法:
    ---绝对定位（left:50%,top:50%）+transform:translate（-50%，-50%）--兼容性问题（宽度未知）
    ---绝对定位(left:0,right:0,top:0,bottom:0,margin:0 auto)--盒子有宽高
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

### 3.三栏布局(4)

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

### 5.样式优先级（4）

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

### 6.盒模型（6）

### 7.display 属性值以及区别 （1）

### 8.position 属性值以及区别（2）

### 9.flex（4）

    父容器
    --- flex-direction
    --- flex-wrap
    --- flex-flow:(flex-direction|flex-wrap)
    --- justify-content(主轴线的对齐方式)
    --- align-items(交叉线对齐方式)
    --- align-content
    子容器
    --- order
    --- flex-grow:0
    --- flex-shrink
    --- flex-basis
    --- flex:(0 1 auto)
    --- align-self

### 10.自适应布局（1）

    ---rem+媒体查询
    ---vw实现
    ---rem+vw+flexible实现

### 11.px、em、rem、vw、vh、rpx 的区别（2）

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

### 15.link 和 import 标签的区别（2）

### 16.如何清除浮动（2）

    --- 额外标签:clear:both
    --- overflow:hidden
    --- 使用伪类元素:after

### 17.什么是 BFC (5)

    BFC特性
    ---同一个BFC下margin会重叠
    ---计算BFC高度时会算上浮动元素
    ---BFC不会影响到外部元素
    ---BFC内部元素是垂直排列的
    ---BFC区域不会与float元素重叠
    如何创建BFC
    ---position设为absolute或者fixed
    ---float不为none
    ---overflow设置为hidden(overflow不为visible)
    ---display设置为inline-block或者inline-table或flex或者grid
    ---根元素

### 18.doctype 标签和 meta 标签(1)

### 19.first-of-type 和 first-child 有什么区别(1)

    ---first-of-type 匹配的是从第一个子元素开始数，匹配到的那个的第一个元素

### 20. 常见的替换元素和非替换元素？（1）

    ---标签的属性可以改变标签的显示方式就是替换元素（input、img、iframe）

### 21.行内元素和块级元素（2）

### 22.什么是 requestAnimationFrame （1）

### 23.什么是回流和重绘（2）

### 24.可继承元素（1）

    ---可继承
    visibility、cursor、text-indent、text-align、
    font(font-family、font-size、font-style、font-weight)、
    letter-spacing、word-spacing、white-space、line-height、color、text-transform、direction
    ---不可继承
    ---1.display
    ---2.文本属性:vertical-align、text-decoration、
    text-shadow、unicode-bidi
    ---3.盒子模型 border、padding、margin、width、height
    ---4.背景属性 background
    ---5.定位属性 float clear position
    ---6.生成内容属性 content
    ---7.轮廓样式属性 outline-style
    ---8.页面样式属性 size
    ---9.声音样式属性 pause

### 25.css hack (1)

    css hack:针对不同的浏览器或浏览器不同版本写相应的CSS的过程，就是CSS hack
    ---条件hack
    ---属性级hack
    ---选择符hack

### 26.如何实现自适应的正方形(1)

    ---width:100vw;height:100vw;
    ---width:100%;padding-bottom:10%;(margin-bottom:10%)

### 27.如何实现一个三角形(1)

    ---利用birder属性
    ---利用css3中的clip-path属性，旋转
    （clip-path: polygon(0px 0px, 0px 30px, 30px 0px); // 将坐标(0,0),(0,30),(30,0)连成一个三角形
    transform: rotate(225deg); // 旋转225，变成下三角）

### 28.说下页面的布局方式(1)

    ---flex布局
       1.容器属性(flex-direction flex-wrap flex-flow justify-content（水平主轴对齐方式） align-items align-content)
       2.元素属性(order flex-grow flex-shrink flex-basis flex align-self align-items)
    --- rem布局
        缺点:1.ie不支持、pc使用不多
             2.计算数据量大
    --- 百分比布局
        缺点:1.计算困难
             2.各属性使用百分比，相对父元素的属性并不是唯一的
    --- 浮动布局
        缺点:1.高度塌陷

### 29.隐藏页面的某个元素 （1）

    --- opactiy:0
    --- display:none(回流和重绘)
    --- visiblility:hidden（重绘）
    --- position:absolute
    --- z-index:负值
    --- clip/clip-path
    --- transform:scale(0,0)

### 30.sass 如何实现复用(1)

    --- sass使用@import来处理多个sass文件。sass的@import规则在生成css文件时就把相关文件导入进来，无需发起额外的下载请求。另外，所有在被导入文件中定义的变量和混合器（@mixin->@include）均可在导入文件中使用。

## JS 基础

### 1. JS 继承类型（5）

    6种方法：
    --- 原型链继承
    --- 借用构造函数继承
    --- 组合继承
    --- 原型式继承
    --- 寄生继承
    --- 寄生组合继承(extend)

### 2. JS 的基本数据类型（3）

### 3. 原始值和引用值类型及区别(2)

    区别：
    --1.存储类型不同--栈和堆（原始类型占据空间固定）
    --2.赋值方式
    --3.比较方式（原始类型是值比较、引用类型是地址比较）

### 4.判断数据类型（3）

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

    map、reduce、forEach、flat、slice、push、pop、
    shift:(头部添加元素)、
    unshift（头部删除元素）、splice、concat、every、fill、filter、findIndex、indexOf、join、keys、reverse

### 7.bind、call、apply 的区别，手动实现（3）

    bind创建一个新函数、新的函数的this指定为bind的第一个参数，其余参数作为新函数的参数，以参数列表的形式传递参数

### 8.===和==区别（3）

### 9.深拷贝与浅拷贝 (3)

    --浅拷贝(Obejct.assign(),扩展运算符)
    ---深拷贝(解决对象嵌套问题)
    ---1.json.parse&json.stringify
    ---2.lodash.cloneDeep()

### 10.防抖和节流（3）

### 11.作用域和作用域链(3)

    ---作用域：变量和函数可使用范围

### 12.JS 的垃圾回收机制(3)

### 13.addEventListener 和 onClick 区别(1)

    ---onClick:绑定多个事件，只有最后一个事件会被触发,之前的被覆盖，该事件只在冒泡阶段捕获
    ---addEventListener:绑定多个事件，触发多次。根据参数，可在冒泡和捕获阶段触发，对任何dom元素都生效，不只是html元素

### 14.JavaScript 中的事件循环机制，宏任务与微任务(2)

### 15.跨域、同源策略以及跨域解决方案(3)

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

### 17.原型和原型链（2）

### 18.闭包及其作用（4）

    闭包的应用
    ---单例模式
    ---for循环里面保存i
    ---防抖、节流、柯里化

### 19.如何正确判断 this（2）

    ---函数调用
    ---方法调用
    ---构造器调用
    ---call、apply、bind调用

### 20.什么是 dom 事件流？什么是事件委托？(5)

    --- dom2级事件模型(w3c标签模型)---事件捕获->事件处理->事件冒泡

### 21.defer 和 async 都表示什么 (1)

### 22.js 性能优化的方式（1）

    ---垃圾回收
    ---闭包中对象的清除
    ---防抖节流
    ---分批加载
    ---事件委托
    ---尾调用优化
    ---少用with
    ---requestAnimationFrame
    ---defer和async
    ---cdn

### 23.常用的设计模式(1)

    ---单例模式
    ---工厂模式
    ---构造函数模式
    ---发布订阅模式
    ---迭代器模式
    ---代理模式
    ---策略模式

### 24.事件冒泡和事件捕获有什么区别？（2）

### 25.localstorage 存满了怎么办?（1）

    ---划分域名
    ---跨页面传数据
    ---兜底方案:调用别人的存储

### 26.js 模块包装格式（1）

    ---commonjs（同步运行，不适合前端）
    ---amd(异步运行)
    ---cmd(异步运行，seajs规范)

### 27.exports 和 module.exports 有什么区别？(2)

    ---导出方式不一样
    ----exports.xxx='xxx'
    ----module.export = {}
    ---exports是module.exports的地址引用，两个指向的是用一个地址，而require能看到的只有module.exports

### 28.为什么要使用模块化(1)

    ---防止命名冲突
    ---更好的分离、按需加载
    ---更好的复用和可维护性

### 29.变量和函数怎么进行提升的？优先级是怎么样的（1）

### 30.Generator 是怎么样使用的以及各个阶段的变化如何 (1)

    状态变化：

    ---每当执行到yield属性的时候，都会返回一个对象,这时候生成器处于一个非阻塞的挂起状态
    ---调用迭代器的next方法的时候，生成器又从挂起状态改为执行状态，继续上一次的执行位置执行
    ---直到遇到下一次yield依次循环,直到代码没有yield了，就会返回一个结果对象done为true，value为undefined

### 31.如何实现异步编程(1)

### 32.js 为什么是单线程的（1）

### 33.内存泄漏(2)

### 34.什么是执行栈，什么是执行上下文（1）

### 35.字面量 new 出来的对象和 Object.create(null)创建出来的对象有什么区别（1）

    ---字面量和new创建出来的对象会继承Object的方法和属性，他们的隐式原型会指向Object的显式原型
    ---Object.create(null)创建出来的对象原型为null，作为原型链的顶端，自然也没有继承Object的方法和属性

### 36.为什么 typeof null 是 Object（1）

### 37.那既然 0.1 不是 0.1 了，为什么在 console.log(0.1)的时候还是 0.1 呢?

    ---在console.log的时候会二进制转换为十进制，十进制再会转为字符串的形式，在转换的过程中发生了取近似值，所以打印出来的是一个近似值的字符串

### 38.那为什么 0.2+0.3=0.5 呢?（1）

    0.2 和0.3分别转换为二进制进行计算：在内存中，它们的尾数位都是等于52位的，而他们相加必定大于52位，而他们相加又恰巧前52位尾数都是0，截取后，恰好就是0.5

### 39.在 JS 中为什么 0.2+0.1>0.3?（1）

    因为在JS中，浮点数是使用64位固定长度来表示的，其中的1位表示符号位，11位用来表示指数位，剩下的52位尾数位，由于只有52位表示尾数位，而0.1转为二进制是一个无限循环数，由于只能存储52位尾数位，所以会出现精度缺失，把它存到内存中再取出来转换成十进制就不是原来的0.1了

### 40.$(document).ready() 方法和 window.onload 有什么区别？（1）

    window.onload与ready的区别:
    ---window.onload会覆盖之前的,ready的区别，不会覆盖，会叠加
    ---window.onload等文档和资源都加载完成以后调用,ready只要文档加载完成以后就会调用

### 41.offsetWidth、clientWidth、scrollTop 的区别（1）

    ---offsetWidth：占位宽，包含 内容宽+左右padding+左右border
    ---clientWidth：可视宽，包含 内容宽+左右padding
    ---scrollTop：页面被卷去的高

### 42.dom 操作节点（1）

### 43.解释 JavaScript 中的 null 和 undefined（1）

### 44.插入几万个 dom，如何实现页面不卡顿?(1)

    ---分页、懒加载
    ---requestAnimationFrame
    ---virtual-scroll

---

## ES6

### 1.ES6 有哪些新特性（2）

    ---模板字符串、扩展运算符、startWith、endWith、reapted、Reflect、
    ---块级作用域(let、const、var)
    ---解构赋值
    ---Promise
    ---Proxy
    ---Class
    ---函数默认参数
    ---模板化
    ---箭头函数
    ---Set、Map
    ---Array.map

### 2.let、const、var 的区别（4）

### 3.解构赋值(1)

### 4.箭头函数和普通函数的区别（this 指向），箭头函数可以被当作构造函数 new 吗？(3)

    ---箭头函数比普通函数简洁
    ---箭头函数没有自己的this，箭头函数没有Prototype
    ---箭头函数继承来的this永远不会变，call、bind、apply没有办法修改箭头函数的指向，
    ---箭头函数不能作为构造函数调用
    ---箭头函数没有自己的arguments
    ---箭头函数不能作为genarator函数，不能使用yield关键字

### 5.Symbol (1)

### 6.Set 和 Map 数据结构 (1)

### 7.Proxy(1)

### 8.Promise(4)

### 9.for、forEach、for in、for of 比较(1)

    ---for in 是为对象而设计（会遍历出原型链对象上的属性，属性名出现时不确定的）

### 10. async 和 await (1)

### 11.ES6 模块加载和 CommonJS 加载的原理、区别(4)

    ---CommonJS输出的是值的拷贝，ES Module输出的是值的引用，即ES6 Module只存只读，不能改变其值，也就是指针指向不能变，类似const
    ---CommonJS是运行时加载（module.exports），ES Module是编译时输出接口
    ---CommonJS的require（）是同步加载模块，ESModule的import是异步加载模块，静态编译时加载，有独立的模块依赖解析
    ---CommonJS模块的顶层this指向当前模块，ES6模块中，顶层this指向undefined

---

## Http 协议和计算机网络

### 1.tcp 和 udp(2)

    ---是否连接 (udp无连接
    、tcp面向连接)
    ---是否可靠（udp不可靠传输，不使用流量控制和拥塞控制、tcp可靠传输）
    ---连接对象个数（udp一对一、一对多、多对一、多对多、tcp一对一）
    ---传输方式（udp面向报文、tcp面向字节流）
    ---首部开销（udp首部开销小，8字节、tcp首部最小20字节，最大60字节）
    ---使用场景 （udp实时应用（IP电话、视频会议、直播等）tcp适用于要求可靠传输的应用，比如文件传输）

### 2.TCP 三次握手，两次行不行，四次行不行，四次挥手？(2)

    ---三次握手:
    ----1.客户端先向服务端发起一个SYN包，进入SYN_SENT状态
    ----2.服务端收到SYN后，给客户端返回一个ACK+SYN包，表示已收到SYN，并进入SYN_RECEIVE状态，
    ----3.最后客户端再向服务端发送一个ACK包表示确认，双方进入establish状态。

    ---四次挥手:
    ----1.客户端向服务端发送一个FIN包，进入FIN_WAIT1状态
    ----2.服务端收到后，向客户端发送ACK确认包，进入CLOSE_WAIT状态
    ----3.然后客户端收到ACK包后进入FIN_WAIT2状态
    ----4.服务端再把自己剩余没传完的数据发送给客户端，发送完毕后在发送一个FIN+ACK包，进入LAST_ACK（最后确认）状态----5.客户端收到FIN+ACK包后，再向服务端发送ACK包，在等待两个周期后在关闭连接

### 3.HTTP 请求方法有哪些、put 和 post 的区别（1）

    ---put是幂等操作，而post不是

### 4.get 和 post 的区别（3）

    --- 后退和刷新（get是无害的，post数据会被重复提交）
    --- 书签（get会被收藏，post不可被收藏为书签）
    --- 缓存（幂等）
    --- 传参
    --- 参数长度
    --- 编码类型
    --- 历史
    --- 安全
    --- 可见性
    --- 发送数据（post请求头、请求体）

### 5.http 状态码 301 和 302（3）

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

### 7.https 和 http 的区别，https 握手（2）

    ---https是需要ca证书，需要一定费用
    ---http是明文传输，https是具有安全性的ssl加密传输协议
    ---http和https适用于不同的连接方式（端口不同，http的端口为80，https的端口403）
    ---https加密传输，有身份认证，比http协议安全
    --https实现原理⭐⭐⭐⭐⭐
    1.客户端向服务端发起一个随机值，以及一个加密算法
    2.服务端收到后返回一个协商好的加密算法，以及另一个随机值
    3.服务端在发送一个公钥CA
    4.客户端收到以后先验证CA是否有效，如果无效则报错弹窗，有过有效则进行下一步操作
    5.客户端使用之前的两个随机值和一个预主密钥组成一个会话密钥，在通过服务端传来的公钥加密把会话密钥发送给服务端
    6.服务端收到后使用私钥解密，得到两个随机值和预主密钥，然后组装成会话密钥
    7.客户端在向服务端发起一条信息，这条信息使用会话秘钥加密，用来验证服务端时候能收到加密的信息
    8.服务端收到信息后返回一个会话秘钥加密的信息，收到以后SSL层连接建立成功

### 8.中间人攻击(1)

### 9.防范中间人攻击（1）

### 10.web 攻击以及防御（2）

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

### 11.浏览器存储（3）

### 12.浏览器的缓存策略（3）

### 13.计算机网络模型以及各层协议（2）

    ---tcp/ip模型（应用层、传输层、网络层、数据链路层、物理层）
    ---osi七层模型（应用层、表示层、会话层、传输层（tcp）、网络层、数据链路层、物理层）

### 14.http 报文结构（1）

    ---请求报文:
    ----1.请求行（http版本号、url、请求方式）、
    ----2.请求头（cache-control、keep-alive、host）
    ----3.空行
    ----4.请求体

    ---响应报文:
    ----1.响应行（版本、状态码、原因）
    ----2.响应头（cache、control、etag、last-modified）
    ----3.空行
    ----4.响应体

### 15.10 项严重的安全风险列表都有那些？（1）

    ---sql注入
    ---失效的身份验证
    ---敏感数据泄露
    ---XML 外部实体
    ---失效的访问控制
    ---安全配置错误
    ---xss
    ---不安全的反序列化
    ---使用含有已知漏洞的组件
    ---不足的日志记录和监控

### 16.什么是 CDN?(1)

### 17.滑动窗口和拥塞窗口的区别？（1）

    ---滑动窗口
    ----发送窗口永远小于或等于接收窗口，发送窗口的大小取决于接收窗口的大小
    ----控制流量来保证TCP的可靠传输（不控制流量的话可能会溢出）
    ---发送方的数据分为
    ----1已发送，接收到ACK的
    ----2已发送，未接收到ACK的
    ----3未发送，但允许发送的
    ----4未发送，但不允许发送的
    ----2和3表示发送窗口
    ---接收方
    ----1.已接收
    ----2.未接受但准备接受
    ----3.未接受不准备接受

    ---拥塞窗口
    ----防止过多的数据注入到网络中，这样可以使网络中的路由器或链路不致过载。
    ----是一个全局性的过程
    ----方法
    ----慢开始、拥塞避免、快重传、快恢复

### 18.从浏览器输入 url 后都经历了什么（2）

### 19.http1.0 和 http1.1,还有 2.0 有什么区别？（1）

### 20.加载 css 的是否会阻塞浏览器的解析和渲染(1)

    --- 在 DOM 解析过程中，css 不会阻塞解析，在渲染过程中会阻塞渲染

---

## Vue

### 1.Vue-router 有哪几种钩子（2）

    ---全局守卫:beforeEach、beforeResolve、afterEach
    ---组件守卫:beforeRouteEnter,beforeRouteUpdate,beforeRouteLeave
    ---路由守卫:beforeEnter

### 2.组件通信的方式（3）

### 3.vue 组件中 key 的作用（1）

### 4.虚拟 dom 的优缺点（1）

### 5.diff 算法（1）

### 6.mvc 和 mvvm 有什么区别（1）

### 7.vue-router 的模式（2）

    ---hash模式
    监听hashchange事件实现前端路由，利用url中的hash来模拟一个hash，以保证url改变时，页面不会重新加载。
    ---history模式
    利用pushstate和replacestate来将url替换但不刷新，但是有一个致命点就是，一旦刷新的话，就会可能404，因为没有当前的真正路径，要想解决这一问题需要后端配合，将不存在的路径重定向到入口文件

### 8.vue 的优化方式（1）

### 9.computed 和 watch 的区别(1)

### 10.vue 中的 nextTick（1）

### 11.vue 中父子组件的生命周期（3）

### 12.vue 的生命周期（1）

### 13.vue 双向绑定的原理是什么（2）

    ---数据劫持+发布订阅模式实现的
    ----1.对observe递归遍历，加上setter和getter
    ----2.complie解析模板指令
    ----3.watcher是observe和complie的桥梁
        3.1在自身实例化时往属性订阅器(dep)里面添加自己
        3.2自身必须有一个 update()方法,待属性变动 dep.notice()通知时，能调用自身的 update() 方法，并触发 Compile 中绑定的回调，则功成身退。
        3.3MVVM 作为数据绑定的入口，整合 Observer、Compile 和 Watcher 三者，通过 Observer 来监听自己的 model 数据变化，通过 Compile 来解析编译模板指令，最终利用 Watcher 搭起 Observer 和 Compile 之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据 model 变更的双向绑定效果。

### 14.v-if 和 v-show 的不同点(1)

### 15.如何让 CSS 只在当前组件中起作用(1)

### 16.vue 中 ajax 请求代码应该写在组件的 methods 中还是 vuex 的 action 中(1)

    如果请求来的数据不是要被其他组件公用，仅仅在请求的组件内使用，就不需要放入 vuex 的 state 里

### 17.axios 是什么？怎么使用？描述使用它实现登录功能的流程(1)

    axios 是请求后台资源的模块。 npm i axios -S

    如果发送的是跨域请求，需在配置文件中 config/index.js 进行配置

### 18.Vuex 如何区分 state 是外部直接修改，还是通过 mutation 方法修改的(1)

    Vuex 中修改 state 的唯一渠道就是执行 commit('xx', payload) 方法，其底层通过执行 this._withCommit(fn) 设置_committing 标志变量为 true，然后才能修改 state，修改完毕还需要还原_committing 变量。外部修改虽然能够直接修改 state，但是并没有修改_committing 标志位，所以只要 watch 一下 state，state change 时判断是否_committing 值为 true，即可判断修改的合法性。

### 19.vuex 原理(1)

    vuex 只能使用在 vue 上，很大的程度是因为其高度依赖于 vue 的 computed, 依赖检测系统以及其插件系统，
    vuex 的实现方式完完全全的使用了 vue 自身的响应式设计，依赖监听、依赖收集都属于 vue 对对象 Property set get 方法的代理劫持。最后一句话结束 vuex 工作原理，vuex 中的 store 本质就是没有 template 的隐藏着的 vue 组件

### 20.不用 vuex 会带来什么问题(1)

    ---可维护性会下降
    ---可读性下降
    ---增加耦合，大量的上传派发

### 21.vuex 的 mutation 特性是什么(1)

    ---action 类似于 muation, 不同在于：action 提交的是 mutation,而不是直接变更状态
    ---action 可以包含任意异步操作
    ---如果被其他地方复用，请将请求放入 action 里，方便复用，并包装成 promise 返回

### 22.vuex 的 getter 特性是什么(1)

    ---getter 可以对 state 进行计算操作，它就是 store 的计算属性
    ---虽然在组件内也可以做计算属性，但是 getters 可以在多组件之间复用

### 23.vuex 的 store 特性是什么（1）

    ---vuex 就是一个仓库，仓库里放了很多对象。其中 state 就是数据源存放地
    ---state 里面存放的数据是响应式的，vue 组件从 store 读取数据，若是 store 中的数据发生改变，依赖这些数据的组件也会发生更新
    ---它通过 mapState 把全局的 state 和 getters 映射到当前组件的 computed 计算属性

### 24.vuex 有哪几种属性（2）

### 25.自定义指令(v-check, v-focus) 的方法有哪些? 它有哪些钩子函数? 还有哪些钩子函数参数?(1)

    ---钩子函数: bind(绑定事件出发)、inserted(节点插入时候触发)、update(组件内相关更新)

    ---钩子函数参数： el、binding

### 26.vue 优点（1）

    ---低耦合
    ---可重用性
    ---独立开发
    ---可测试

### 27.你知道的优化手段有哪些？(1)

    ---减少http请求（iconfont字体图标、精灵图、合并js、合并css）
    ---减少dns查询
    ---css放在页面上面,js放在页面下面
    ---压缩文件（压缩js和css、使用gzip）
    ---使用浏览器缓存、cdn缓存
    ---避免css层级嵌套过深
    ---高频事件使用防抖、节流
    ---使ajax可缓存

### 28.如何解决页面刷新后 Vuex 数据丢失的问题(1)

    ---vuex-persistedstate
    --- html5本地存储+Vuex.Store

---

## webpack

### 1.loader 和 plugin 的区别（1）

### 2.webpack 常用的几个对象及解释（1）

    ---entry
    ---output
    ---mode
    ---module（loader）
    ---plugin
    ---devServer
    ---resolve（extension、alias）
    ---babel

---

## 规范化

### 1.git 的常用命令（1）

    ---git reset soft head^ (提交后撤回)
    ---git branch xx 创建分支
    ---git checkout xx 切换分支
    添加：
    ---git add. 将修改加入缓存区
    ---git push
    ---git commit -m 备注修改内容

    ---git status 查看当前状态
    ---git checkout . 放弃分支上的修改
    ---git pull
    ---git log

---

## 手写题

### 1. 快排.js（3）

### 2. 防抖.js (4)

### 3. 节流.js (4)

### 4. 深拷贝.js (4)

### 5. 观察者模式.js （1）

### 6. 发布订阅者模块.js （3）

### 7. 数组去重.js (4)

### 8. 数组扁平化.js (3)

### 9. 手写 apply、call、bind（5）

### 10.手写函数柯里化、实现一个 add 方法（4）

### 11.手写 new 函数（5）

    ---首先创建了一个新的空对象
    ---设置原型，将对象的原型设置为函数的 prototype 对象。
    ---让函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）
    ---判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象

### 12.冒泡排序（2）

### 13.插入排序（1）

### 14.是否回文（1）

### 15.正则表达式,千分位分割（1）

### 16.斐波拉契数列（1）

### 17.手写 Promise（3）

### 18.手写 instanceof(2)

### 19.手写 ajax（1）

### 20.手写数组乱序（1）

### 21.手写 filter 算法(1)

### 22.实现一个 sleep 函数(1)

### 23.实现可以控制最大并发数的函数（1）

### 24.手写 jsonp(1)

### 25.手写实现 LazyMan(1)

---

框架（vue）
因为我一直用的都是 vue 框架，所以问的也都是跟 vue 相关的。vue 中的高频题也不外乎双向绑定、虚拟 dom、diff 算法这些。

watch 与 computed 的区别
vue 生命周期及对应的行为
vue 父子组件生命周期执行顺序
组件间通讯方法
如何实现一个指令
vue.nextTick 实现原理
diff 算法
如何做到的双向绑定
虚拟 dom 为什么快
如何设计一个组件

webpack
webpack 也基本上成了必考的内容，一般会问是否配置过 webpack、做过哪些优化之类的。

用过哪些 loader 和 plugin
loader 的执行顺序为什么是后写的先执行
webpack 配置优化
webpack 打包优化（happypack、dll）
plugin 与 loader 的区别
webpack 执行的过程
如何编写一个 loader、plugin
tree-shaking 作用，如何才能生效

性能优化

首屏加载如何优化
一个网页从请求到呈现花了很长时间，如何排查

￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥
【面经】寒冬中的一年半前端跳槽 (百度、头条、腾讯、小米)(opens new window)
字节跳动今日头条前端面经（4 轮技术面+hr 面）(超强实习生)(opens new window)
字节跳动 前端校招 一二三面+hr 面(opens new window)
【👍 6719】【1 月最新】前端 100 问：能搞懂 80% 的请把简历给我(opens new window)
【👍 5605】一个合格(优秀)的前端都应该阅读这些文章(opens new window)
【👍 4903】2018 前端面试总结，看完弄懂，工资少说加 3K | 掘金技术征文(opens new window)
【👍 4831】中高级前端大厂面试秘籍，为你保驾护航金三银四，直通大厂(上)(opens new window)
【👍 3091】2018 春招前端面试: 闯关记(精排精校) | 掘金技术征文(opens new window)
【👍 2751】前端面试考点多？看这些文章就够了（2019 年 6 月更新版）(opens new window)
【👍 2642】30 道 Vue 面试题，内含详细讲解（涵盖入门到精通，自测 Vue 掌握程度）(opens new window)
【👍 2580】「中高级前端面试」JavaScript 手写代码无敌秘籍(opens new window)
【👍 2320】如何写出一个惊艳面试官的深拷贝?(opens new window)
【👍 2265】四月前端知识集锦（每月不可错过的文章集锦）(opens new window)
【👍 2203】记录面试中一些回答不够好的题（Vue 居多） | 掘金技术征文(opens new window)
【👍 2103】[译] 送你 43 道 JavaScript 面试题(opens new window)
【👍 2069】【面试篇】寒冬求职季之你必须要懂的原生 JS(上)(opens new window)
【👍 2040】这儿有 20 道大厂面试题等你查收(opens new window)
【👍 2012】面试的信心来源于过硬的基础(opens new window)
【👍 1966】BAT 前端经典面试问题：史上最最最详细的手写 Promise 教程(opens new window)
【👍 1901】面试分享：两年工作经验成功面试阿里 P6 总结(opens new window)
【👍 1829】几道高级前端面试题解析(opens new window)
【👍 1816】JavaScript 工具函数大全（新）(opens new window)
【👍 1791】从 2.4 万篇文章中挑出的最棒的 JavaScript 学习指南（2018 版）(opens new window)
【👍 1764】小哥哥,小姐姐,我有一份 tcp、http 面试指南你要吗？(opens new window)
【👍 1645】16 年毕业的前端 er 在杭州求职 ing(opens new window)
【👍 1635】面试精选之 Promise(opens new window)
【👍 1616】面试完 50 个人后我写下这篇总结(opens new window)
【👍 1602】前端笔试&面试爬坑系列---算法(opens new window)
【👍 1551】3 月前端知识集锦(opens new window)
【👍 1500】面试官:请你实现一个深克隆(opens new window)
【👍 1485】腾讯前端面试篇（一）(opens new window)
【👍 1458】当面试官问你如何进行性能优化时，你该这么回答(一)(opens new window)
【👍 1447】面试官到底想看什么样的简历？(opens new window)
【👍 1398】前端笔试题面试题记录（上）(opens new window)
【👍 1390】深拷贝的终极探索（90%的人都不知道）(opens new window)
【👍 1356】毕业一年左右的前端妹子面经总结(opens new window)
【👍 1347】web 前端面试总结(自认为还算全面哈哈哈哈哈！！！！）(opens new window)
【👍 1342】面试分享：专科半年经验面试阿里前端 P6+总结(附面试真题及答案)(opens new window)
【👍 1334】(中篇)中高级前端大厂面试秘籍，寒冬中为您保驾护航，直通大厂(opens new window)
【👍 1294】面试官(6): 写过『通用前端组件』吗?(opens new window)
【👍 1257】一点感悟：当走完所有大厂的实习面试后(opens new window)
【👍 1241】社招中级前端笔试面试题总结(opens new window)
【👍 1231】2019 年前端面试都聊啥？一起来看看(opens new window)
【👍 1165】三年前端，面试思考（头条蚂蚁美团 offer）(opens new window)
【👍 1095】jsliang 的 2019 面试准备(opens new window)
【👍 989】大厂前端面试考什么? | 掘金技术征文(opens new window)
【👍 985】面试图谱：前端基础技术知识讲解(opens new window)
【👍 963】20W 字囊括上百个前端面试题的项目开源了(opens new window)
【👍 958】腾讯校招前端三面,虐完继续撸|掘金技术征文(opens new window)
【👍 957】公司要求会使用框架 vue，面试题会被问及哪些？(opens new window)
【👍 942】面试分享：2018 阿里巴巴前端面试总结 | 掘金技术征文(opens new window)
【👍 938】面试精选之 http 缓存(opens new window)
【👍 916】写给初级前端的面试经验(opens new window)
【👍 909】25 岁，毕业写前端的这三年(opens new window)
【👍 904】【面经】寒冬中的一年半前端跳槽(opens new window)
【👍 891】面试之 JavaScript 篇(opens new window)
【👍 824】如何通过饿了么 Node.js 面试(opens new window)
【👍 805】前端工程师面试必备（持续更新中）(opens new window)
【👍 789】2019 面试准备 - JS 原型与原型链(opens new window)
【👍 789】分享收集的一大波前端面试题和答案(opens new window)
【👍 780】你不知道的 js 中关于 this 绑定机制的解析[看完还不懂算我输](opens new window)
【👍 768】(建议收藏)TCP 协议灵魂之问，巩固你的网路底层基础(opens new window)
【👍 765】2019 年 17 道高频 React 面试题及详解(opens new window)
【👍 740】2019 面试准备 - JS 防抖与节流(opens new window)
【👍 716】记一次凉凉的小米面试(opens new window)
【👍 678】七年切图仔如何面试大厂 web 前端？（沟通软技能总结） | 掘金技术征文(opens new window)
【👍 677】面试前如何准备才能提高成功率（含前端面试押题）(opens new window)
【👍 672】大揭秘！“恐怖”的阿里一面，我究竟想问什么(opens new window)
【👍 670】[译] 以面试官的角度来看 React 工作面试(opens new window)
【👍 662】让我印象深刻的 JavaScript 面试题(opens new window)
【👍 645】如何轻松拿到淘宝前端 offer | 掘金技术征文(opens new window)
【👍 633】2018web 前端面试总结(opens new window)
【👍 610】杭州 17 届前端期待加入一个更好的团队(opens new window)
【👍 604】9 月，水了几个大中厂前端面试的一些总结分享 | 掘金技术征文(opens new window)
【👍 597】寒冬中的前端社招面试(opens new window)
【👍 588】JavaScript：面试频繁出现的几个易错点(opens new window)
【👍 563】26 个精选的 JavaScript 面试问题(opens new window)
【👍 536】转眼人到中年：前端老程序员无法忘怀的一次百度电话面试(opens new window)
【👍 536】面试分享：2018 阿里巴巴前端面试总结(题目+答案)(opens new window)
【👍 535】通过 20 个棘手的 ES6 面试问题来提高咱们的 JS 技能(opens new window)
【👍 524】世界顶级公司的前端面试都问些什么(opens new window)
【👍 519】【前方高能】新手到高级前端攻城狮都用的上的前端面试题库，备战明年金三银四(opens new window)
【👍 506】50 个 JS 必须懂的面试题为你助力金九银十(opens new window)
【👍 490】半年工作经验今日头条和美团面试题面经分享(opens new window)
【👍 482】(下篇)中高级前端大厂面试秘籍，寒冬中为您保驾护航，直通大厂(opens new window)
【👍 471】金三银四魔都两年半前端面经(opens new window)
【👍 469】2019 面试实战 - 第一回合(opens new window)
【👍 445】2019 面试系列 - 简历(opens new window)
【👍 441】中高级前端面试题（万字长文）(opens new window)
【👍 440】前端面试常考的手写代码不是背出来的！(opens new window)
【👍 438】看完这几道 JavaScript 面试题，让你与考官对答如流（下）(opens new window)
【👍 416】关于 IT 培训机构的个人看法(opens new window)
【👍 382】前端面经分享 | 腾讯(opens new window)
【👍 308】2019 前端面试题--这样准备，拿不到 offer 算我输！(opens new window)
【👍 277】【面试总结】记一次失败的 bilibili 面试总结(2)(opens new window)
【👍 256】2019 前端基础面试秘籍(opens new window)
【👍 244】【面试总结】记一次失败的 bilibili 面试总结(1)(opens new window)
【👍 228】【Step-By-Step】高频面试题深入解析 / 周刊 01(opens new window)
【👍 141】2019 前端面试题 | JS 部分（附带答案）(opens new window)
【👍 654】Web 前端年后跳槽面试复习指南(opens new window)
【👍 642】前端进阶系列-目录(opens new window)
【👍 625】前端工程师面试题(性能优化)(opens new window)
【👍 603】想偷懒的话，toLocaleString 了解一下？(opens new window)
【👍 584】那些年你踩过的坑，都在这里了～| 掘金技术征文(opens new window)
【👍 573】面试：页面加载海量数据(opens new window)
【👍 512】前端面试&笔试&错题指南(三）(opens new window)
【👍 506】让你瞬间提高工作效率的常用 js 函数汇总(持续更新)(opens new window)
【👍 479】面试题：说说事件循环机制(满分答案来了)(opens new window)
【👍 452】前端菜鸟帝都面试记 | 掘金技术征文(opens new window)
【👍 452】深度解析 Vue 响应式原理(opens new window)
【👍 446】一年前端面试打怪升级之路（一）(opens new window)
【👍 443】前端面试问题（持续更新）(opens new window)
【👍 429】2018 头条春招前端实习生面试题目总结(opens new window)
【👍 425】一个 Promise 面试题 (opens new window)
【👍 421】闭包详解一(opens new window)
【👍 421】做面试的不倒翁：浅谈 Vue 中 computed 实现原理(opens new window)
【👍 416】鹅厂视频部笔试及面试问题整理(opens new window)
【👍 408】2018 年 6 月前端面试经历(中)(opens new window)
【👍 398】JavaScript 深拷贝的一些坑(opens new window)
【👍 393】低门槛彻底理解 JavaScript 中的深拷贝和浅拷贝(opens new window)
【👍 383】看完这篇关于 MVVM 的文章，面试通过率提升了 80%(opens new window)
【👍 378】ES6 的 Symbol 竟然那么强大，面试中的加分点啊(opens new window)
【👍 377】道阻且长啊 TAT(前端面试总结) 附答案 － 上(opens new window)
【👍 371】刷《一年半经验，百度、有赞、阿里面试总结》·手记(opens new window)
【👍 365】前端性能优化三部曲(加载篇)(opens new window)
【👍 356】三年前端，面试思考（二）(opens new window)
【👍 354】“寒冬中”三年前端社招面试经验(opens new window)
【👍 351】大厂面试中遇到的几十道 webpack 与 react 面试题(opens new window)
【👍 342】2018 三月份前端面试总结 | 掘金技术征文(opens new window)
【👍 338】我在 9 家大厂的前端校招 offer 心得(opens new window)
【👍 337】【面试流水账】一年半经验前端年底求职路(opens new window)
【👍 330】腾讯前端面试篇（二）(opens new window)
【👍 330】流形：我是如何面试一位前端工程师(opens new window)
【👍 326】一年半经验如何准备阿里巴巴 P6 前端面试(opens new window)
【👍 325】面试官教你写简历之「中高级开发者简历指南」(opens new window)
【👍 310】我的 2019 春招（前端暑期实习）记录(opens new window)
【👍 309】[有赞社招-前端面试经历分享] 电话面+技术面+hr 面(opens new window)
【👍 309】两句话理解 js 中的 this(opens new window)
【👍 305】记一次前端面试的全过程(opens new window)
【👍 303】前端面试之 ES6 篇（高产似母猪）(opens new window)
【👍 300】鹅厂 4 面(opens new window)
【👍 299】面试小结--前端面试的几个雷点(opens new window)
【👍 298】致莫名其妙被关注的面试之补充篇(opens new window)
【👍 285】前端面试查漏补缺--(一) 防抖和节流(opens new window)
【👍 281】JS 基础知识（覆盖 JS 基础面试题）(opens new window)
【👍 277】前端面试查漏补缺--(十) 前端鉴权(opens new window)
【👍 277】秋招面试总结(2017-10-26)(opens new window)
【👍 276】面试官: 你对虚拟 DOM 原理的理解?(opens new window)
【👍 276】深入深入再深入 js 深拷贝对象(opens new window)
【👍 275】关于大厂面试中问到的二十几个 HTTP 面试题(opens new window)
【👍 274】2018 前端面试总结 js 部分【中】(opens new window)
【👍 267】Webpack 再深入再总结(opens new window)
【👍 266】阿里前端社招面试总结(opens new window)
【👍 266】支援一波 《面试数十人有感》(opens new window)
【👍 261】前端笔试题面试题记录（下）(opens new window)
【👍 258】前端面试题 2019 持续整理汇总(opens new window)
【👍 250】不要再去背面试的知识点了(opens new window)
【👍 246】面试篇 - 京东（商城用户体验设计部 - 前端架构组）(opens new window)
【👍 245】弹弹弹，弹走鱼尾纹的弹出菜单（vue）(opens new window)
【👍 243】自己写的面试题，自己想的答案(opens new window)
【👍 241】面向面试编程，面向掘金面试，一入掘金门，方知面试易(opens new window)
【👍 239】学习方法分享：为何一年半就能拿到大厂 offer(opens new window)
【👍 239】5 分钟谈前端面试(opens new window)
【👍 233】「前端面试题系列 1」今日头条 面试题和思路解析(opens new window)
【👍 230】中高级前端开发高频面试题(opens new window)
【👍 230】【译】面试 30 秒(opens new window)
【👍 227】【前端面试】同学，你会手写代码吗？(opens new window)
【👍 221】记一次 XX 前端面试(opens new window)
【👍 219】两年前端头条面试记(opens new window)
【👍 219】2017 前端面试题及答案总结|掘金技术征文(opens new window)
【👍 217】一年前端面试打怪升级之路（二）(opens new window)
【👍 216】头条前端实习岗凉经有感(opens new window)
【👍 214】聊一聊前端算法面试——递归(opens new window)
【👍 213】Vue 解析--如何应对面试官提问(opens new window)
【👍 212】JS 中的数组过滤，从简单筛选到多条件筛选(opens new window)
【👍 209】面试官问：能否模拟实现 JS 的 new 操作符(opens new window)
【👍 206】一道面试题引起的思考(opens new window)
【👍 203】「技术面试」问答中有什么十分实用的面试技巧?(opens new window)
【👍 195】🔥 《大前端吊打面试官系列》 之面试备战篇(近几十万字持续更新中，建议收藏~)(opens new window)
【👍 188】面试官问：JS 的 this 指向(opens new window)
【👍 187】从一道面试题认识函数柯里化(opens new window)
【👍 179】看完这几道 JavaScript 面试题，让你与考官对答如流（中）(opens new window)
【👍 177】我们不背诵 API，只实现 API(opens new window)
【👍 176】经常被面试官问道的 JavaScript 数据类型知识你真的懂吗？(opens new window)
【👍 174】2019 面试实战 - 第二回合(opens new window)
【👍 170】记一次腾讯社招前端面试（已拿到 offer 入职）(opens new window)
【👍 170】关于这些天杭州各厂面试汇总（从 JavaScript 各种原理到框架源码）(opens new window)
【👍 167】JTalk Online：面试官教你快速成为 leader 最欣赏的技术人(opens new window)
【👍 157】记录一次蚂蚁金服前端电话面试(opens new window)
【👍 151】前端高级面试题@JS 篇(opens new window)
【👍 148】100\*100 的 canvas 占多少内存？(opens new window)
【👍 130】腾讯面试篇（三）——终章(opens new window)
【👍 128】前端疫情下个人面试总结，目前找到合适的 offer（B 轮融资，人工智能行业），薪资保密。之前看过的同学请保密。谢谢(opens new window)
【👍 120】程序员谈薪指北(opens new window)
【👍 115】七篇前端面试必考知识点，助你一臂之力(opens new window)
【👍 301】面试官！让我们聊聊正则(opens new window)
【👍 300】【译】2017 年最受欢迎的 10 个编程挑战网站(opens new window)
【👍 295】前端面试之 js 相关问题（一）(opens new window)
【👍 259】前端面试之 webpack 篇(opens new window)
【👍 253】如何轻松拿到大厂面试 offer | 掘金技术征文(opens new window)
【👍 243】从输入 URL 到页面加载的过程？如何由一道题完善自己的前端知识体系！(opens new window)
【👍 226】Vuex 面试题汇总(opens new window)
【👍 223】10 分钟了解 JS 堆、栈以及事件循环的概念(opens new window)
【👍 223】面试分享：一年经验初探阿里巴巴前端社招(opens new window)
【👍 221】前端面试之 js 相关问题（二）(opens new window)
【👍 205】面试中必备的网络相关知识(opens new window)
【👍 202】前端菜鸟帝都面试记 plus | 掘金技术征文(opens new window)
【👍 201】前端面试（个人收藏总结）javascript 篇（一）(opens new window)
【👍 199】ES6 之---读懂 let 才能少踩坑(opens new window)
【👍 199】通过正则高效实现千位符（一行代码你敢信？）(opens new window)
【👍 198】有意思的前端函数面试题(opens new window)
【👍 196】node 基础面试事件环？微任务、宏任务？一篇带你飞(opens new window)
【👍 189】2018 年 6 月前端面试经历(下)(opens new window)
【👍 188】50 道 CSS 基础面试题（附答案）(opens new window)
【👍 184】2019 年,盘点一些我出过的前端面试题以及对求职者的建议(opens new window)
【👍 182】诚意满满的前端面试总结(opens new window)
【👍 180】前端面试&笔试&错题指南（二）(opens new window)
【👍 176】面试：你知道为什么会有 Generator 吗(opens new window)
【👍 173】一步步实现 VUE-MVVM 系列，储备面试技能(opens new window)
【👍 171】[转载]技术面试的时候该怎么样介绍自己？(opens new window)
【👍 164】【进阶 3-5 期】深度解析 new 原理及模拟实现(opens new window)
【👍 159】37 个 JavaScript 基本面试问题和解答(opens new window)
【👍 156】[英] 前端面试题目大全(opens new window)
【👍 153】详解高级前端面试常问的 EventLoop(opens new window)
【👍 152】《前端算法系列》如何让前端代码速度提高 60 倍(opens new window)
【👍 150】挑战一轮大厂后的面试总结 (含六个方向) - 浏览器 篇(opens new window)
【👍 150】「又是一年跳槽季 」380+篇掘金前端面试文章助你一臂之力 🔥(opens new window)
【👍 145】前端面试必考之 http 状态码有哪些(opens new window)
【👍 140】阿里实习转正 1 个月了，记录下从实习到校招的面试历程|掘金技术征文(opens new window)
【👍 139】手撕排序算法（JavaScript 实现）(opens new window)
【👍 138】（近 3 万字，持续更新中）从面试前到终面，全面为您保驾护航(opens new window)
【👍 138】一文搞懂 Web 中暗藏的密码学(opens new window)
【👍 137】[译] 在 JS 中，如何让(a===1 && a===2 && a === 3)(严格相等)的值为 true？(opens new window)
【👍 137】热乎的前端笔试/面试/跳坑笔记（指南)(opens new window)
【👍 137】前端学习路线及面试经验(opens new window)
【👍 137】前端面试问题小汇集(opens new window)
【👍 135】JavaScript 骚操作之遍历、枚举与迭代（下篇）(opens new window)
【👍 134】阿里 p6 面经(opens new window)
【👍 133】JavaScript 事件循环及异步原理（完全指北）(opens new window)
【👍 127】2019 面试准备 - 图片(opens new window)
【👍 126】面试官问：能否模拟实现 JS 的 call 和 apply 方法(opens new window)
【👍 124】【Step-By-Step】高频面试题深入解析 / 周刊 02(opens new window)
【👍 123】【进阶 4-1 期】详细解析赋值、浅拷贝和深拷贝的区别(opens new window)
【👍 122】面试经典：Event Loop(opens new window)
【👍 120】小菜鸡 🐔 面试の初体验，自闭路上渐行渐远......🏃‍♂️(opens new window)
【👍 119】来聊一道前端面试题吧(opens new window)
【👍 118】前端小生面试之看不懂的 []+{}(opens new window)
【👍 116】十几道含答案的大厂面试题总结(opens new window)
【👍 115】React Native 面试知识点(opens new window)
【👍 113】【Step-By-Step】高频面试题深入解析 / 周刊 06(opens new window)
【👍 113】新手引导动画的 4 种实现方式(opens new window)
【👍 112】JavaScript 知识点整理(opens new window)
【👍 112】【译】面试官：请你实现一个 PWA 我：😭(opens new window)
【👍 108】手写题:9 道字符串类高频面试题(opens new window)
【👍 105】前端面试汇总(opens new window)
