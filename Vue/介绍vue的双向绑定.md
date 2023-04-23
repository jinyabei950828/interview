## 😂介绍vue的双向绑定（v-model的原理）

双向数据绑定通常是指我们使用的`v-model`指令的实现，是`Vue`的一个特性，v-model 只是语法糖而已，v-model 在内部为不同的输入元素使用不同的 property 并抛出不同的事件：

- text 和 textarea 元素使用 value property 和 input 事件；
- checkbox 和 radio 使用 checked property 和 change 事件；
- select 字段将 value 作为 prop 并将 change 作为事件。