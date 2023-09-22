---
title: Typography 排版
lang: zh-CN
---

# Typography 排版

文本的基本格式。

## 何时使用

- 当需要展示标题、段落、列表内容时使用，如文章/博客/日志的文本样式。
- 当需要一列基于文本的基础操作时，如拷贝/省略/可编辑。

## 基本使用

展示文档样例。

<demo src="../../../../example/typography/basic.svelte"></demo>

## 标题组件

展示不同级别的标题。

<demo src="../../../../example/typography/title.svelte"></demo>

## 文本与超链接组件

内置不同样式的文本以及超链接组件。

<demo src="../../../../example/typography/text.svelte"></demo>

## 省略号

多行文本省略。

<demo src="../../../../example/typography/ellipsis.svelte"></demo>


## 可交互

提供可复制等额外的交互能力。可通过`copyable.icon`属性来指定复制图标。并通过`on:copy`监听复制事件

<demo src="../../../../example/typography/copy.svelte"></demo>

## Typography Props 属性

| 属性 | 说明             | 类型     | 默认值    | 版本 |
| ---- | ---------------- | -------- | --------- | ---- |
| tag  | 组件渲染元素标签 | `string` | `article` |      |


## Text/Link/Title Props 共同属性

| 属性      | 说明                                 | 类型                        | 默认值  | 版本 |
| --------- | ------------------------------------ | --------------------------- | ------- | ---- |
| title     | 元素`title`属性                      | `string`                    | -       |      |
| copyable  | 是否可拷贝，为对象时可进行各种自定义 | `boolean  \| CopyConfig `   | `false` |      |
| type      | 是否可拷贝，为对象时可进行各种自定义 | `BaseType`                  | -       |
| disabled  | 禁用文本                             | `boolean`                   | `false` |      |
| ellipsis  | 自动溢出省略                         | `boolean \| EllipsisConfig` | `false` |      |
| underline | 添加下划线样式                       | `boolean`                   | `false` |      |
| deleted   | 添加删除线样式                       | `boolean`                   | `false` |      |
| strong    | 是否加粗                             | `boolean`                   | `false` |      |
| italic    | 是否斜体                             | `boolean`                   | `false` |      |

## Typography.Text Props 属性

| 属性     | 说明             | 类型      | 默认值  | 版本 |
| -------- | ---------------- | --------- | ------- | ---- |
| tag      | 组件渲染元素标签 | `string`  | `span`  |      |
| keyboard | 添加键盘样式     | `boolean` | `false` |      |
| mark     | 添加标记样式     | `boolean` | `false` |      |


## Typography.Link Props 属性

| 属性   | 说明                  | 类型     | 默认值  | 版本 |
| ------ | --------------------- | -------- | ------- | ---- |
| href   | 跳转地址              | `string` | -       |      |
| target | `a`标签的`target`属性 | `string` | `_self` |      |


## Typography.Title Props 属性

| 属性     | 说明         | 类型      | 默认值  | 版本 |
| -------- | ------------ | --------- | ------- | ---- |
| keyboard | 添加键盘样式 | `boolean` | `false` |      |
| mark     | 添加标记样式 | `boolean` | `false` |      |


### Events 事件

| 事件  | 说明     | 类型                   |
| ----- | -------- | ---------------------- |
| click | 点击事件 | `MouseEventHandler<T>` |
| copy  | 拷贝事件 | `() => void`           |

## Slots 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |