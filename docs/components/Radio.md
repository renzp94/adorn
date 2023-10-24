---
title: Radio 单选框
lang: zh-CN
---

# Radio 单选框

单选框。

## 何时使用

- 用于在多个备选项中选中单个状态。
- 和`Select`的区别是，`Radio`所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

## 基本使用

最简单的用法。

<demo src="../../../../example/radio/basic.svelte"></demo>

## 不可用

`Radio`不可用。

<demo src="../../../../example/radio/disabled.svelte"></demo>

## 单选组合

一组互斥的`Radio`配合使用。

<demo src="../../../../example/radio/group.svelte"></demo>

## Radio.Group 垂直

垂直的`Radio.Group`，配合更多输入框选项。

<demo src="../../../../example/radio/vertical-group.svelte"></demo>

## Radio.Group 组合 - 配置方式

通过配置`options`参数来渲染单选框。也可通过`optionType`参数来设置`Radio`类型。

<demo src="../../../../example/radio/options.svelte"></demo>

## 按钮样式

按钮样式的单选组合。

<demo src="../../../../example/radio/button.svelte"></demo>

## 大小

大中小三种组合，可以和表单输入框进行对应配合。

<demo src="../../../../example/radio/size.svelte"></demo>

## 填底的按钮样式

实色填底的单选按钮样式。

<demo src="../../../../example/radio/solid.svelte"></demo>

## Group Option自定义label

如果使用`Radio.Group`的`options`选项想自定义label内容，则可以使用`label`插槽实现。

<demo src="../../../../example/radio/slot.svelte"></demo>


## Radio Props 属性

| 属性           | 说明                                         | 类型                       | 默认值    | 版本 |
| -------------- | -------------------------------------------- | -------------------------- | --------- | ---- |
| buttonStyle    | `button`的风格样式，目前有描边和填色两种风格 | `outline \| solid`         | `outline` |      |
| checked        | 指定当前是否选中                             | `boolean`                  | `false`   |      |
| defaultChecked | 初始是否选中                                 | `boolean`                  | `false`   |      |
| disabled       | 禁用                                         | `boolean`                  | `false`   |      |
| name           | `input[type="radio"]`的`name`属性            | `string`                   | -         |      |
| size           | `button`的大小                               | `large \| middle \| small` | -         |      |
| type           | `radio`的类型                                | `default \| button`        | `default` |      |
| value          | 根据`value`进行比较，判断是否选中            | `string \| number`         | -         |      |


## Radio Slots 插槽

| 事件    | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## Radio.Group Props 属性

| 属性           | 说明                                         | 类型                       | 默认值    | 版本 |
| -------------- | -------------------------------------------- | -------------------------- | --------- | ---- |
| buttonStyle    | `button`的风格样式，目前有描边和填色两种风格 | `outline \| solid`         | `outline` |      |
| defaultChecked | 初始是否选中                                 | `boolean`                  | `false`   |      |
| disabled       | 禁用                                         | `boolean`                  | `false`   |      |
| name           | `input[type="radio"]`的`name`属性            | `string`                   | -         |      |
| options        | 以配置形式设置子元素                         | `RadioGroupOption[]`       | -         |      |
| optionType     | 用于设置`Radio options`类型                  | `default \| button`        | `default` |      |
| size           | `button`的大小                               | `large \| middle \| small` | -         |      |
| value          | 根据`value`进行比较，判断是否选中            | `string \| number`         | -         |      |

```ts
interface RadioGroupOption {
  label: string
  value: string | number
  disabled?: boolean
}
```

## Radio.Group Events 事件

| 事件   | 说明         | 类型                                             |
| ------ | ------------ | ------------------------------------------------ |
| change | 选项改变事件 | `(value: CustomEvent<string \| number>) => void` |


## Radio.Group Slots 插槽

| 事件    | 说明            |
| ------- | --------------- |
| default | 自定义默认内容  |
| label   | 自定义渲染label |