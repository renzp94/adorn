---
title: Space 间距
lang: zh-CN
---

# Space 间距

设置组件之间的间距。

## 基本使用

相邻组件水平间距。

<demo src="../../../../example/space/basic.svelte"></demo>

## 垂直间距

相邻组件垂直间距。

<demo src="../../../../example/space/direction.svelte"></demo>

## 间距大小

间距预设大、中、小三种大小。

通过设置`size`为`large`、`middle`分别把间距设为大、中间距。若不设置`size`，则间距为小。

<demo src="../../../../example/space/size.svelte"></demo>

## 间距大小

间距预设大、中、小三种大小。

通过设置`size`为`large`、`middle`分别把间距设为大、中间距。若不设置`size`，则间距为小。

<demo src="../../../../example/space/align.svelte"></demo>

## 自动换行

自动换行。

<demo src="../../../../example/space/wrap.svelte"></demo>

## 分隔符

使用`#snippet split`可设置相邻组件分隔符。

<demo src="../../../../example/space/split.svelte"></demo>

## Props 属性

| 属性      | 说明         | 类型                                                 | 默认值     | 版本 |
| --------- | ------------ | ---------------------------------------------------- | ---------- | ---- |
| align     | 对齐方式     | `Omit<Align, 'stretch'> \| baseline`                 | `start`    |      |
| direction | 间距方向     | `Direction`                                          | `vertical` |      |
| size      | 间距大小     | `Size \| number \| [Size \| number, Size \| number]` | `small`    |      |
| wrap      | 是否自动换行 | `boolean`                                            | `true`     |      |

```ts
export type Align = 'top' | 'middle' | 'bottom' | 'stretch' | 'normal'
export type Direction = 'horizontal' | 'vertical'
export type Size = 'large' | 'middle' | 'small'
```

## Events 事件

支持所有原生事件

## Snippets 片段

| 插槽名 | 说明       |
| ------ | ---------- |
| split  | 设置分隔符 |