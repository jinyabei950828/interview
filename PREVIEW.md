## CSS 基础

### 1.元素水平垂直居中(2)

    --- 绝对定位（left:50%,top:50%）+transform:translate（-50%，-50%）--兼容性问题
    --- 绝对定位(left:0,right:0,top:0,bottom:0,margin:0 auto)--盒子有宽高
    ---绝对定位(left:50%,top:50%)+margin负值--盒子宽度已知
    ---flex align-item:center justify-content:center--兼容性问题
    ---grid justify-content:center  align-content: center --兼容性问题

### 2.两栏布局(2)

    --- 浮动+margin(左侧：float:left,width:200px,右侧:margin-left:200px;width:auto)
    --- 浮动+overflow（左侧：float:left,width:200px,右侧:overflow:hidden）
    --- 父元素相对定位，左侧绝对定位+右侧margin值
    --- 父元素相对定位, 右侧绝对定位，且设置left值
    --- 设置父元素flex,(左侧:width:200px;右侧:flex:1)

### 2.三栏布局(2)

    --- 浮动+margin（左右两侧向对应方向浮动，中间设置margin值）
    --- 左右绝对定位+中间设置margin值
    --- 设置父元素flex,左右固定，中间设置flex：1
    --- 圣杯布局（浮动+负边距(margin),父元素设置左右padding,子元素设置左浮动，中间一列最前面，通过margin赋值将后两列移动到上一行）
    --- 双飞翼布局(浮动+外负边距，设置中间一列子元素的margin)

## JS 基础

### 1. JS 继承类型（2）

    --- 原型链继承
    --- 借用构造函数继承
    --- 组合继承
    --- 原型式继承
    --- 寄生继承
    --- 寄生组合继承

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

---
