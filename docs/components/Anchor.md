---
title: Anchor 锚点
lang: zh-CN
---

# Anchor 锚点

用于跳转到页面指定位置。

## 何时使用

需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。

## 基本使用

最简单的用法。

<demo src="../../../../example/anchor/basic.svelte"></demo>

## 横向 Anchor

横向 Anchor。

<demo src="../../../../example/anchor/direction.svelte"></demo>

## 静态位置

不浮动，状态不随页面滚动变化。

<demo src="../../../../example/anchor/affix.svelte"></demo>


## Props 属性

| 属性      | 说明                             | 类型                     | 默认值     | 版本 |
| --------- | -------------------------------- | ------------------------ | ---------- | ---- |
| affix     | 固定模式                         | `boolean`                | `true`     |      |
| items     | 锚点数组                         | `AnchorItem[]`           | `[]`       |      |
| offsetTop | 距离窗口顶部达到指定偏移量后触发 | `number`                 | `0`        |      |
| direction | 设置导航方向                     | `vertical \| horizontal` | `vertical` |      |

## Events 事件

| 事件        | 说明         | 类型                      |
| ----------- | ------------ | ------------------------- |
| onItemClick | 锚点点击事件 | `(v: AnchorItem) => void` |
