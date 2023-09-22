---
title: Divider 分割线
lang: zh-CN
---


# Divider 分割线

区隔内容的分割线。

## 何时使用

- 对不同章节的文本段落进行分割。
- 对行内文字/链接进行分割，例如表格的操作列。

## 水平分割线

默认为水平分割线，可在中间加入文字。

<demo src="../../../../example/divider/basic.svelte"></demo>

## 带文字的分割线

分割线中带有文字，可以用`orientation`指定文字位置。

<demo src="../../../../example/divider/slot.svelte"></demo>

## 分割文字使用正文样式

使用`plain`可以设置为更轻量的分割文字样式。

<demo src="../../../../example/divider/plain.svelte"></demo>

## 垂直分割线

使用`type="vertical"`设置为行内的垂直分割线。

<demo src="../../../../example/divider/vertical.svelte"></demo>

## Props 属性

| 属性        | 说明                       | 类型                        | 默认值       | 版本 |
| ----------- | -------------------------- | --------------------------- | ------------ | ---- |
| dashed      | 是否虚线                   | `boolean`                   | `false`      |      |
| type        | 水平还是垂直类型           | `vertical  \| horizontal`   | `horizontal` |      |
| orientation | 分割线标题的位置           | `left  \| center  \| right` | `center`     |      |
| plain       | 文字是否显示为普通正文样式 | `boolean`                   | `false`      |      |

## Slots 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |