---
title: Layout 布局
lang: zh-CN
---

# Layout 布局

协助进行页面级整体布局。

## 基本使用

<demo src="../../../../example/layout/basic.svelte"></demo>

## Props 属性

| 属性      | 说明                                                | 类型                      | 默认值     | 版本 |
| --------- | --------------------------------------------------- | ------------------------- | ---------- | ---- |
| direction | 布局方式(子组件有`Sidebar`组件时自动为`horizontal`) | `horizontal  \| vertical` | `vertical` |      |

## Slots 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |