---
title: Flex 弹性布局
lang: zh-CN
---

# Flex 弹性布局

弹性布局。

## 何时使用

- 适合设置元素之间的间距。
- 适合设置各种水平、垂直对齐方式。

## 基本使用

最简单的用法。

<demo src="../../../../example/flex/basic.svelte"></demo>

## 对齐方式

设置对齐方式。

<demo src="../../../../example/flex/flex.svelte"></demo>

## 设置间隙

使用`gap`设置元素之间的间距，预设了`small`、`middle`、`large`三种尺寸，也可以自定义间距。

<demo src="../../../../example/flex/size.svelte"></demo>

## 自动换行

自动换行。

<demo src="../../../../example/flex/wrap.svelte"></demo>

## 组合使用

嵌套使用，可以实现更复杂的布局。

<demo src="../../../../example/flex/layout.svelte"></demo>

## Props 属性

| 属性     | 说明                                                  | 类型                                                              | 默认值    | 版本 |
| -------- | ----------------------------------------------------- | ----------------------------------------------------------------- | --------- | ---- |
| vertical | flex 主轴的方向是否垂直，使用`flex-direction: column` | `boolean`                                                         | `false`   |      |
| wrap     | 设置元素单行显示还是多行显示                          | `nowrap \| wrap \| wrap-reverse`                                  | `no-wrap` |      |
| justify  | 设置元素在主轴方向上的对齐方式                        | `Justify`                                                         | `start`   |      |
| align    | 设置元素在交叉轴方向上的对齐方式                      | `Align`                                                           | `normal`  |      |
| flex     | flex CSS 简写属性                                     | 参考[flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex) | -         |      |
| gap      | 设置网格之间的间隙                                    | `Size \| string`                                                  | -         |      |
| tag      | 自定义元素类型                                        | `string`                                                          | `div`     |      |

```ts
export type Size = 'large' | 'middle' | 'small'
export type Justify = 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'
export type Align = 'top' | 'middle' | 'bottom' | 'stretch' | 'normal'
```

## Events 事件

支持所有原生事件

## Snippets 片段

| 插槽名   | 说明           |
| -------- | -------------- |
| children | 自定义默认内容 |