---
title: Affix 固钉
lang: zh-CN
---

# Affix 固钉

将页面元素固定在特定可视区域。

## 基本用法

通过设置`offset`属性来改变吸顶距离，默认值为`0`。

<demo src="../../../../example/affix/basic.svelte"></demo>

## 指定容器

通过设置`target`属性，让固钉始终保持在容器内， 超过范围则隐藏。
请注意容器避免出现滚动条。

<demo src="../../../../example/affix/target.svelte"></demo>

## 固定位置

通过设置`position`属性设置固定位置，默认为`top`。

<demo src="../../../../example/affix/position.svelte"></demo>

## Props 属性

| 属性     | 说明                  | 类型                         | 默认值   | 版本 |
| -------- | --------------------- | ---------------------------- | -------- | ---- |
| offset   | 偏移距离              | `number`                     | `0`      |      |
| position | 位置                  | `top  \| bottom`             | `top`    |      |
| target   | 设置按钮大小          | `large  \| middle  \| small` | `middle` |      |
| target   | 指定容器 (CSS 选择器) | `string`                     | -        |      |
| zIndex   | z-index               | `number`                     | `100`    |      |

## Events 事件

| 事件   | 说明                       | 类型                                                     |
| ------ | -------------------------- | -------------------------------------------------------- |
| change | fixed 状态改变时触发的事件 | `(fixed: boolean) => void`                               |
| scroll | 滚动时触发的事件           | `(value: { scrollTop: number, fixed: boolean }) => void` |

## Slots 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |