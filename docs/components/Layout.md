---
title: Layout 布局
lang: zh-CN
---

# Layout 布局

协助进行页面级整体布局。

## 基本使用

<demo src="../../../../example/layout/basic.svelte"></demo>

## Props 属性

| 属性      | 说明                                                | 类型        | 默认值     | 版本 |
| --------- | --------------------------------------------------- | ----------- | ---------- | ---- |
| direction | 布局方式(子组件有`Sidebar`组件时自动为`horizontal`) | `Direction` | `vertical` |      |

```ts
export type Direction = 'horizontal' | 'vertical'
```

## Events 事件

支持所有原生事件

## Snippets 片段

| 插槽名   | 说明           |
| -------- | -------------- |
| children | 自定义默认内容 |