# vue Loading Toast

自定义以 Toast 弹出的 Loading 组件。

## 注册

注册组件，可以全局注册，也可以局部注册

```js
import Vue from 'vue'
import Loading from '../components/Loading'

Vue.use(Loading)
```

## 使用

```js
// 显示
this.$showLoading()
// 指定 title
this.$showLoading({
  title: 'loading'
})

// 隐藏
this.$hideLoading()
```
