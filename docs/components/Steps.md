---
title: Steps 步骤条
lang: zh-CN
---

# Steps 步骤条

引导用户按照流程完成任务的导航条。

## 基本用法

简单的步骤条。

<demo src="../../../../example/steps/basic.svelte"></demo>

## 迷你版

迷你版的步骤条，通过设置`<Steps size="small">`启用。

<demo src="../../../../example/steps/small.svelte"></demo>

## 带图标的步骤条

通过设置`items`的`icon`属性，可以启用自定义图标。

<demo src="../../../../example/steps/icon.svelte"></demo>

## 步骤切换

通常配合内容及按钮使用，表示一个流程的处理进度。

<demo src="../../../../example/steps/content.svelte"></demo>

## 竖直方向的步骤条

简单的竖直方向的步骤条。

<demo src="../../../../example/steps/vertical.svelte"></demo>

## 点状步骤条

包含步骤点的进度条。

<demo src="../../../../example/steps/dot.svelte"></demo>

## 标签放置位置

修改标签放置位置为`vertical`。

<demo src="../../../../example/steps/label-vertical.svelte"></demo>

## Steps Props 属性

| 属性           | 说明                                                                     | 类型                      | 默认值       | 版本 |
| -------------- | ------------------------------------------------------------------------ | ------------------------- | ------------ | ---- |
| current        | 指定当前步骤，从`0`开始记数。                                            | `number`                  | `0`          |      |
| direction      | 指定步骤条方向。目前支持`水平（horizontal）`和`竖直（vertical）`两种方向 | `horizontal  \| vertical` | `horizontal` |      |
| labelPlacement | 指定标签放置位置，默认水平放图标右侧，可选`vertical`放图标下方           | `horizontal  \| vertical` | `horizontal` |      |
| progressDot    | 点状步骤条，`labelPlacement`将强制为`vertical`                           | `boolean`                 | `false`      |      |
| size           | 指定大小，目前支持`普通（default）`和`迷你（small）`                     | `default \| small`        | `default`    |      |
| items          | 配置选项卡内容                                                           | `StepItem[]`              | -            |      |


```ts
export interface StepItem {
  title?: string
  description?: string
  icon?: IconName
}
```

## StepItem Props 属性

| 属性        | 说明                 | 类型       | 默认值 | 版本 |
| ----------- | -------------------- | ---------- | ------ | ---- |
| description | 步骤的详情描述，可选 | `string`   | -      |      |
| icon        | 步骤图标的类型，可选 | `IconName` | -      |      |
| title       | 标题                 | `string`   | -      |      |
