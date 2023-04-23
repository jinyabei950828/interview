### 😂vue-devtool调试的时候主要看哪里调试的，介绍常用的配置属性？

安装了 Vue-devtools 插件后会在浏览器网页的 window 对象当中注入`__VUE_DEVTOOLS_GLOBAL_HOOK__`对象，因此我们能够利用这个对象进行通知 Vue-devtools 插件进行开始调试工作。

```
window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('init', VueObj)
```

好了，经过一连串的骚操作后我们终于成功在生产环境的网页当中开启了 vue-devtools，能够愉快的在生产环境的进行对 Vue 项目进行调试了。

（components 、TimeLine、Routes、vuex）

