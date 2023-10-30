---
title: Checkbox 多选框
lang: zh-CN
---

# Checkbox 多选框

多选框。

## 何时使用

- 在一组可选项中进行多项选择时
- 单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

## 基本使用

最简单的用法。

<demo src="../../../../example/checkbox/basic.svelte"></demo>

## 不可用

不可用。

<demo src="../../../../example/checkbox/disabled.svelte"></demo>

## Checkbox 组

方便的从数组生成`Checkbox`组。

<demo src="../../../../example/checkbox/group.svelte"></demo>


## 全选

在实现全选效果时，你可能会用到`indeterminate`属性。

<demo src="../../../../example/checkbox/indeterminate.svelte"></demo>


## 布局

`Checkbox.Group`内嵌`Checkbox`并与`Grid`组件一起使用，可以实现灵活的布局。

<demo src="../../../../example/checkbox/layout.svelte"></demo>


## Checkbox Props 属性

| 属性           | 说明                                                      | 类型               | 默认值  | 版本 |
| -------------- | --------------------------------------------------------- | ------------------ | ------- | ---- |
| checked        | 指定当前是否选中                                          | `boolean`          | `false` |      |
| defaultChecked | 初始是否选中                                              | `boolean`          | `false` |      |
| disabled       | 失效状态                                                  | `boolean`          | `false` |      |
| name           | `CheckboxGroup`下所有`input[type="checkbox"]`的`name`属性 | `string`           | -       |      |
| indeterminate  | 设置 indeterminate 状态，只负责样式控制                   | `boolean`          | `false` |      |
| value          | 指定选中的选项                                            | `string \| number` | -       |      |

## Checkbox Events 事件

| 事件   | 说明             | 类型                                             |
| ------ | ---------------- | ------------------------------------------------ |
| change | 变化时的回调函数 | `(value: CustomEvent<string \| number>) => void` |

## Checkbox Slots 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## Checkbox.Group Props 属性

| 属性         | 说明                                                      | 类型                    | 默认值  | 版本 |
| ------------ | --------------------------------------------------------- | ----------------------- | ------- | ---- |
| defaultValue | 默认选中的选项                                            | `(string \| number)[]`  | `[]`    |      |
| disabled     | 失效状态                                                  | `boolean`               | `false` |      |
| name         | `CheckboxGroup`下所有`input[type="checkbox"]`的`name`属性 | `string`                | -       |      |
| options      | 指定可选项                                                | `CheckboxGroupOption[]` | `[]`    |      |
| value        | 指定选中的选项                                            | `(string \| number)[]`  | `[]`    |      |

```ts
```

## Checkbox.Group Events 事件

| 事件   | 说明             | 类型                                                    |
| ------ | ---------------- | ------------------------------------------------------- |
| change | 变化时的回调函数 | `(value: CustomEvent<Array<string \| number>>) => void` |

## Checkbox.Group Slots 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |