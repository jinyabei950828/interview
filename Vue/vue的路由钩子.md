## 😂vue路由的钩子

1. 全局守卫 beforeEach、beforeResolve、afterEach
2. 路由守卫 beforeEnter
3. 组件守卫 beforeRouteEnter、beforeRouteLeave、beforeRouteUpdate

当点击切换路由时：beforeRouterLeave-->beforeEach-->beforeEnter-->beforeRouteEnter--beforeResolve-->afterEach-->beforeCreate-->created-->beforeMount-->mounted--
beforeRouteEnter的next的回调