作用域方面的题涉及严格模式，问输出
强缓存和协商缓存流程 cache-control 有哪些值都是什么含义
https 原理
http1->1.1->2 区别
TCP 和 UDP 区别
fetch 用过吗
promise 有几种状态
axios 的 timeout 如何实现的?用 fetch 和 promise 实现一个有 timeout 的请求
模仿 axios 的 timeout 功能.
讨论了半天 reflow 和 repaint。列举各种情况问是否有 reflow，现在只记得问到遮挡都能给我问懵。
用 fixed 定位 flex 是否生效
二面 编程
记得是 8 个题，想破脑袋，也只回忆起了 5 个。

css 水平垂直居中写出三种以上方案
作用域方面的题，问输出
实现节流防抖函数，说出区别
节流和防抖
经典问题，实现一个 new
实现 new
实现函数，传入两个数组 ,返回一个数组 （这道题到现在我都...，描述少）
//传入
["A1", "A2", "A3", "B1", "B2", "C1", "C2", "C3", "C4"][("A", "B", "C", "D")][
  //返回
  ("A1", "A2", "A3", "A", "B1", "B2", "B", "C1", "C2", "C3", "C4", "C", "D")
];
阿里-淘宝
一面 编程+简历
半小时笔试
实现 EatMan，达到以下效果。
EatMan
/**
 * 实现一个EatMan
 * 说明：实现一个EatMan，EatMan可以有以下一些行为
 * 示例：
 *  1. EatMan(“Hank”)输出:
 *   Hi! This is Hank!
 *  2. EatMan(“Hank”).eat(“dinner”).eat(“supper”)输出
 *   Hi This is Hank!
 *   Eat dinner~
 *   Eat supper~
 *  3. EatMan(“Hank”).eat('dinner').eatFirst(“lunch”)输出
 *   Eat lunch~
 *   Hi This is Hank!
 *   Eat supper~
 *  4. EatMan(“Hank”).eat('dinner').eatFirst(“lunch”).eatFirst("breakfast")输出
 *   Eat breakfast~
 *   Eat lunch~
 *   Hi This is Hank!
 *   Eat supper~
 */
实现 curry 函数 。接受两个参数，第一个参数是一个函数，第二个参数是参数个数。达到以下效果。
函数柯里化
let curAdd = curry((a, b) => a + b, 2);
let curMul = curry((a, b, c) => a * b * c, 3);

curAdd(1)(2); //3
curMul(1)(2)(3); //6
考察简历
时间很短，半小时以内。

generator 函数 、yaild 使用经验？和 async await 的区别？
asycn await 解决了前端的一个经典问题，是什么？
前后发送同一个请求多次，怎么中断后面的请求？
网易(offer)
(全程所有面试官包括hr都nice极了 o((>ω< ))o) (高帅单身小伙hr让我写面经q一下他)

一面 考察简历
css 伪元素使用时需要注意什么
水平垂直居中
service worker 了解过吗
单线程、异步、事件循环的关系
事件轮询流程说一下
前端缓存方案
前端存储方案
v-if、v-for 想要同时用怎么办
v-for 的 key 作用
vue 热更新的原理
vue 的双向绑定
前端路由两种模式的原理和优缺点
前端中应用到了哪些数据结构
https 加密原理
虚拟 DOM 干嘛的。随之出了一个数据结构树的题，记不清咋问的了
小程序和微信的通信，是怎么做的了解多少说多少
对于简历上的项目问了一些前端问题，在第二部分提到的问题范围内。
二面 编程+情景题
事件轮询方面的题，问输出
实现函数 找出两个数组的不重合部分，方法越多越好。
找数组不重合元素
实现 sleep 函数
sleep
实现函数找出 1-10000 中的对称数
找对称数
骨架图了解过吗
日志上报
怎么防刷
xss 和 crsf 原理和应对方案
前端优化
三面 项目+职业规划
职业规划方面
平时如何学习
滴滴(offer)
一面时间半小时，二面时间 45 分钟左右，面试时间最短，问的问题也最少，主要抓住一个点考深度，不会面面俱到的考每一项技术问题。
整体印象就是以上，但是能想起来的问题就这几个了，我好像失忆了。

小程序和 web 区别
vue 和 react 对比
vue3 比 vue2 哪些方面提升了？你觉得最重要的是哪个点？
jq 对比 vue （或者 react）。哪个性能好？
为什么要有虚拟 DOM?虚拟 DOM 是干嘛的？
操作一个 dom 节点，是 jq 快还是 vue 快。为什么？
字节-广告投放
（hr小哥哥小姐姐很友好）

一面 简历+编程
rem、em 区别
浏览器最小显示 12 像素字体，但是现在要求显示 10 像素的怎么办
页面的自适应
强缓存和协商缓存具体流程，相关请求头和响应头字段
v-for 时候的 key 是干嘛的
promise.all 是串行还是并发？一个串行的异步实现思路
实现节流防抖函数，说出区别
节流防抖
实现数组拍平方法（应用到 toString）
找对称数
对于简历上的项目问了一些前端问题，在第二部分提到的问题范围内。
二面 项目＋编程题
(最久的面试 100 分钟左右，没有之一，但这个面试官真的nice)
本来说要出两个编程题，但是由于时间关系，没来得及出第二题 hhh。

事件循环。setTimeout(fn,2000)。2s 后一定执行函数了吗？从事件表、事件队列、执行栈的方向说以下 2s 的时候内存在干嘛？
setTimeout 和 requestAnimation 在性能上的区别?
怎么进行前端的性能监控？哪些指标可以用来检测前端性能？
实现 Reader
Reader
let arr = [1, 2, 3, 4, 5, 6];
const reader = arr.getReader();
console.log(reader.read()); // [1]
console.log(reader.read("a")); // stirng is illegal
console.log(reader.read(1.5)); // decimal number is illegal
console.log(reader.read(-1)); // nagative number is illegal
console.log(reader.read(1)); // [2]
console.log(reader.read(2)); // [3, 4]
console.log(reader.read(3)); // [5, 6]
console.log(reader.read()); // []
console.log(arr); // [1, 2, 3, 4, 5, 6]
循环依赖怎么处理的
三面 项目＋编程题
用 requestAnimation 实现 _setTimeout 用requestAnimation实现setTimeout
_setTimeout(() => {
  console.log("2222");
}, 5000);
实现函数找出字符串中的最长升串最长升值子串
console.log(getMaxSort("124378925123456")); //123456
阿里-乌鸫科技(offer)
两轮技术都是电话面试，没有视频也不用手撸代码。
项目问的挺深的，前端基础问的时间比较短，中后期面试比较放松，所以印象也不怎么深刻了。。。

css 选择器顺序
flex:1 含义？集合了flex相关的哪些属性
axios 怎么取消请求
宏任务微任务谁的优先级谁高
协商缓存和强缓存流程
crsf和xss原理和应对方案
编程题
下面是我写的答案，仅仅仅供参考

axios timeout
function axiosTimeout(url,time) {
  return new Promise((resolve,reject)=>{
      let timer =  setTimeout(()=>{
          reject('timeout')
      },time)
      fetch(url).then((res)=>{
          resolve('success')
          clearTimeout(timer)
      })
  })
}
节流防抖
function debounce(fn, delay) {
  const ctx = this;
  let timer;
  return function () {
    const args = arguments;
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(ctx, args);
    }, delay);
  };
}
function throttle(fn, delay, wait) {
  const ctx = this;
  let start;
  let timer;
  return function () {
    const args = arguments;
    if (!start) {
      start = getNow();
    }
    const now = getNow();
    if (now - start < wait) {
      timer && clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(ctx, args);
      }, delay);
    } else {
      fn.apply(ctx, args);
      start = getNow();
    }
  };
}
function getNow() {
  return new Date().getTime();
}
写一个 new
const myNew = function (constructor) {
  let o = Object.create(constructor.prototype);
  const k = constructor.call(o);
  if (typeof k === "object") {
    return k;
  } else {
    return o;
  }
};
EatMan
class EatManClass {
  constructor(name) {
    this.normalEvents = [];
    this.firstEvents = [];
    this.sayHi(name);
    setTimeout(() => {
      this.doEat();
    });
  }
  sayHi(y) {
    const fn = (x) => {
      console.log(`Hi! This is ${x}!`);
    };
    this.normalEvents.push([y, fn]);
  }
  eat(y) {
    const fn = (x) => {
      console.log(`Eat ${x}~`);
    };
    this.normalEvents.push([y, fn]);

    return this;
  }
  eatFirst(y) {
    const fn = (x) => {
      console.log(`Eat ${x}~~~`);
    };
    this.firstEvents.push([y, fn]);

    return this;
  }
  doEat() {
    this.firstEvents.forEach(([param, fn]) => {
      fn(param);
    });
    this.normalEvents.reverse().forEach(([param, fn]) => {
      fn(param);
    });
  }
}
function EatMan(name) {
  return new EatManClass(name);
}
函数柯里化
function curryN(n, fn) {
  const args = [];
  function stepCurry(n, fn) {
    return (stepX) => {
      args.push(stepX);
      return n == 1 ? fn(...args) : stepCurry(n - 1, fn);
    };
  }
  return stepCurry(n, fn);
}
找两个数组不重合元素
方法1分别遍历

function findDifference(arr,brr) {
    const as = findSpecial(arr,brr)
    const bs = findSpecial(brr,arr)
    return [...as,...bs]
}

function findSpecial(x,y){
    return x.filter(item=>y.indexOf(item)==-1)
}
方法2计数的思路

            function notCommon(arr, brr) {
            
                //计数
                const statistics = staValues([...arr, ...brr])
                const result = []

                // 找出只出现一次的
                for (const [value, count] of statistics) {
                    if (count <= 1) {
                        result.push(value)
                    }
                }

                return result
            }


            function staValues(array) {
                const record = new Map()
                for (const value of array) {
                    const count = record.get(value)
                    if (count) {
                        record.set(value, count + 1)
                    } else {
                        record.set(value, 1)
                    }
                }
                return record
            }

sleep
function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
}
找对称数
方法一
function findSymNumber(params) {
    let result = []
    for (let n = 0; n < 10000; n++) {
        if (isSymmetrical(n)) {
            result.push(n)
        }
    }
    return result
}

function isSymmetrical(number) {
    let str = String(number)
    let li = Math.floor(str.length / 2)
    let ri = Math.ceil(str.length / 2)
    let left = str.slice(0, li)
    let right = str.slice(ri)
    let rightReverse = right.split('').reverse().join()
    return left == rightReverse
}


方法二

//findSymNumber函数不变

function isSymmetrical(number) {
    let arr = String(number).split('')
    let middle = Math.floor(arr.length / 2)
    let result = true
    for (let i = 0; i <= middle; i++) {
        const a = arr[i]
        const b = arr[arr.length - 1 - i]
        if (a != b) {
            result = false
            break
        }
    }
    return result
}
数组拍平
方法一
function flat(arr) {
  let result = [];
  function step(current) {
    if (Array.isArray(current)) {
      for (let ele of current) {
        step(ele);
      }
    } else {
      result.push(current);
    }
  }
  step(arr);
  return result;
}

方法二

function flatByStr(arr) {
  const str = String(arr);
  const str1 = str.replace(/[/,'').replace(/]/, "");
  const result = str1.split(",");
  return result;
}
Reader
Array.prototype.getReader = function () {
  let arr = this;
  let start = 0;
  return {
    read: function (len) {
      const type = typeof len;

      if (type == "undefined") {
        len = 1;
      }
      if (type !== "number" && type !== "undefined") {
        console.error(`${type} is illegal`);
        return;
      }
      if (len < 0) {
        console.error(`nagative number is illegal`);
        return;
      }
      if (String(len).split(".").length > 1) {
        console.error(`decimal number is illegal`);
      }

      let end = start + len;
      if (start >= arr.length) {
        return [];
      }

      try {
        const result = arr.slice(start, end);
        //console.log(result)
        start = end;

        return result;
      } catch (e) {
        console.log(e);
      }
    },
  };
};
用requestAnimation实现setTimeout
function _setTimeout(fn, delay) {
  let endTime = getCur() + delay;
  let timer;
  let step = () => {
    if (getCur() >= endTime) {
      fn();
      cancelAnimationFrame(timer);
    } else {
      requestAnimationFrame(step);
    }
  };
  timer = requestAnimationFrame(step);
}
function getCur() {
  return new Date().getTime();
}
最长升值子串
function getMaxSort(str) {
  let arr = str.split("");
  let maxArr = [];
  function step(start) {
    let base = arr[start];
    let sortArr = [base];
    let j = start + 1;
    while (j < arr.length) {
      let cur = arr[j];
      if (cur <= base) {
        break;
      }
      sortArr.push(cur);
      j++;
      base = cur;
    }
    if (maxArr.length < sortArr.length) {
      maxArr = sortArr;
    }
    if (j < arr.length) {
      step(j);
    }
  }
  step(0);
  return maxArr.join();
}