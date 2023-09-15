---
title: FloatButton 悬浮按钮
lang: zh-CN
---

# FloatButton 悬浮按钮

## 基本使用

最基本的使用。

<demo src="../../../../example/float-button/basic.svelte"  github='FloatButton'></demo>

## 类型

通过`type`改变悬浮按钮的类型。

<demo src="../../../../example/float-button/type.svelte"  github='FloatButton'></demo>

## 形状

通过`shape`设置不同的形状。

<demo src="../../../../example/float-button/shape.svelte"  github='FloatButton'></demo>

## 描述

可以通过`description`设置文字内容。

> 仅当`shape`属性为`square`时支持。由于空间较小，推荐使用比较精简的双数文字。

<demo src="../../../../example/float-button/description.svelte"  github='FloatButton'></demo>

## 悬浮按钮组

按钮组合使用时，推荐使用`<FloatButton.Group />`，并通过设置`shape`属性改变悬浮按钮组的形状。悬浮按钮组的`shape`会覆盖内部`FloatButton`的`shape`属性。

<demo src="../../../../example/float-button/group-basic.svelte"  github='FloatButton'></demo>

## 菜单模式

设置`trigger`属性即可开启菜单模式。提供`hover`和`click`两种触发方式。

<demo src="../../../../example/float-button/group-trigger.svelte"  github='FloatButton'></demo>

## 受控模式

设置`open`设置组件为受控模式，需要配合`trigger`一起使用。

<demo src="../../../../example/float-button/group-open.svelte"  github='FloatButton'></demo>

## 回到顶部

返回页面顶部的操作按钮。

<demo src="../../../../example/float-button/back-top.svelte"  github='FloatButton'></demo>

## API

### 共同Props 属性

| 属性        | 说明                                                  | 类型               | 默认值   | 版本 |
| ----------- | ----------------------------------------------------- | ------------------ | -------- | ---- |
| icon        | 自定义图标                                            | `IconName`         | -        |      |
| description | 描述文字                                              | `string`           | -        |      |
| shape       | 设置按钮形状                                          | `circle \| square` | `circle` |      |
| href        | 点击跳转的地址，指定此属性`button`的行为和`a`链接一致 | `string`           | -        |      |
| target      | 相当于`a`标签的`target`属性，`href`存在时生效         | `string`           | -        |      |

### Slot 插槽


| 插槽名  | 说明           | 类型          | 默认值 | 版本 |
| ------- | -------------- | ------------- | ------ | ---- |
| default | 自定义内容     | `HTMLElement` | -      |      |
| icon    | 自定义图标元素 | `HTMLElement` | -      |      |


### FloatButton.Group

| 属性    | 说明                              | 类型               | 默认值   | 版本 |
| ------- | --------------------------------- | ------------------ | -------- | ---- |
| shape   | 设置包含的`FloatButton`按钮形状   | `circle \| square` | `circle` |      |
| trigger | 触发方式（有触发方式为菜单模式）  | `click \| hover`   | -        |      |
| open    | 受控展开，需配合`trigger`一起使用 | `boolean`          | -        |      |


### FloatButton.Group事件

| 事件       | 说明     | 类型                          |
| ---------- | -------- | ----------------------------- |
| openChange | 点击事件 | `({detail: boolean}) => void` |

### FloatButton.BackTop

| 属性             | 说明                               | 类型                    | 默认值 | 版本 |
| ---------------- | ---------------------------------- | ----------------------- | ------ | ---- |
| duration         | 回到顶部所需时间（ms）             | `number`                | 450    |      |
| target           | 设置需要监听其滚动事件的元素       | `HTMLElement \| Window` | window |      |
| visibilityHeight | 滚动高度达到此参数值才出现 BackTop | `number`                | 400    |      |


### FloatButton.BackTop事件

| 事件  | 说明     | 类型         |
| ----- | -------- | ------------ |
| click | 点击事件 | `() => void` |


