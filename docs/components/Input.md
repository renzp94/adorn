---
title: Input 输入框
lang: zh-CN
---

# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 基本使用

基本使用。

<demo src="../../../../example/input/basic.svelte"></demo>

## 三种大小

我们为`<Input />`输入框定义了三种尺寸（大、默认、小），高度分别为`40px`、`32px` 和 `24px`。

<demo src="../../../../example/input/size.svelte"></demo>

## 前置/后置内容

使用`prefix`插槽自定义前置内容，`suffix`插槽自定义后置内容。

<demo src="../../../../example/input/prefix-suffix.svelte"></demo>

## 前置/后置标签

使用`addonBefore`插槽自定义前置标签，`addonAfter`插槽自定义后置标签。

<demo src="../../../../example/input/addon.svelte"></demo>

## 搜素框

带有搜索按钮的输入框。

<demo src="../../../../example/input/search.svelte"></demo>

## 密码框

密码框。

<demo src="../../../../example/input/password.svelte"></demo>

## 文本域

用于多行输入。

<demo src="../../../../example/input/textarea.svelte"></demo>

## 自定义状态

使用`status`为`Input`添加状态，可选`error`或者`warning`。

<demo src="../../../../example/input/status.svelte"></demo>

## Input Props 属性

| 属性         | 说明                                                                                                                                                                                           | 类型                       | 默认值   | 版本 |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | -------- | ---- |
| allowClear   | 可以点击清除图标删除内容                                                                                                                                                                       | `boolean`                  | `false`  |      |
| bordered     | 是否有边框                                                                                                                                                                                     | `boolean`                  | `true`   |      |
| defaultValue | 输入框默认内容                                                                                                                                                                                 | `string`                   | -        |      |
| disabled     | 设置按是否禁用状态                                                                                                                                                                             | `boolean`                  | `false`  |
| id           | 输入框的id                                                                                                                                                                                     | `string`                   | -        |      |
| maxLength    | 最大长度                                                                                                                                                                                       | `number`                   | -        |      |
| showCount    | 是否展示字数                                                                                                                                                                                   | `boolean`                  | `false`  |      |
| status       | 设置校验状态                                                                                                                                                                                   | `error \| warning`         | -        |      |
| size         | 控件大小。                                                                                                                                                                                     | `large \| middle \| small` | `middle` |      |
| type         | 声明`input`类型，同原生`input`标签的`type`属性，见：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#%E5%B1%9E%E6%80%A7)(请直接使用`Input.TextArea`代替`type="textarea"`) | `string`                   | `text`   |      |
| value        | 输入框内容                                                                                                                                                                                     | `string`                   | -        |      |

## Events 事件

| 事件       | 说明               | 类型                                                        |
| ---------- | ------------------ | ----------------------------------------------------------- |
| input      | 输入事件           | `(value: CustomEvent<string>) => void`                      |
| change     | 输入改变事件       | `ChangeEventHandler<HTMLInputElement> \| undefined \| null` |
| blur       | 失去焦点事件       | `FocusEventHandler<T> \| undefined \| null`                 |
| focus      | 获取焦点事件       | `FocusEventHandler<T> \| undefined \| null`                 |
| keyup      | 键盘抬起事件       | `KeyboardEventHandler<T> \| undefined \| null`              |
| keydown    | 键盘按下事件       | `KeyboardEventHandler<T> \| undefined \| null`              |
| keypress   | 键盘按下并松开事件 | `KeyboardEventHandler<T> \| undefined \| null`              |
| mouseenter | 鼠标移入事件       | `MouseEventHandler<T> \| undefined \| null`                 |
| mouseleave | 鼠标移出事件       | `MouseEventHandler<T> \| undefined \| null`                 |
| mousemove  | 鼠标移动事件       | `MouseEventHandler<T> \| undefined \| null`                 |

## Slots 插槽

| 插槽名      | 说明                          |
| ----------- | ----------------------------- |
| addonBefore | 带标签的`input`，设置前置标签 |
| addonAfter  | 带标签的`input`，设置后置标签 |
| prefix      | 带有前缀图标的`input`         |
| suffix      | 带有后缀图标的`input`         |

## Input.Search Props 属性

| 属性        | 说明                             | 类型      | 默认值  | 版本 |
| ----------- | -------------------------------- | --------- | ------- | ---- |
| enterButton | 是否有确认按钮，可设为按钮文字。 | `boolean` | `false` |      |
| loading     | 搜索 loading                     | `boolean` | `false` |      |

其余属性和`Input`一致。

## Events 事件

| 事件   | 说明                             | 类型                                   |
| ------ | -------------------------------- | -------------------------------------- |
| search | 点击搜索图标或按下回车键时的回调 | `(value: CustomEvent<string>) => void` |

其余事件和`Input`一致。

## Slots 插槽

除了没有`addonAfter`插槽，其他的和`Input`一致。

## Input.Password Props 属性

| 属性    | 说明         | 类型      | 默认值  | 版本 |
| ------- | ------------ | --------- | ------- | ---- |
| visible | 是否显示密码 | `boolean` | `false` |      |

其余属性和`Input`一致。

## Events 事件

| 事件          | 说明           | 类型                                    |
| ------------- | -------------- | --------------------------------------- |
| visibleChange | 显隐密码的回调 | `(value: CustomEvent<boolean>) => void` |

其余事件和`Input`一致。

## Slots 插槽

除了没有`suffix`插槽，其他的和`Input`一致。

## Input.TextArea Props 属性

| 属性         | 说明                     | 类型               | 默认值  | 版本 |
| ------------ | ------------------------ | ------------------ | ------- | ---- |
| allowClear   | 可以点击清除图标删除内容 | `boolean`          | `false` |      |
| bordered     | 是否有边框               | `boolean`          | `true`  |      |
| defaultValue | 输入框默认内容           | `string`           | -       |      |
| disabled     | 设置按是否禁用状态       | `boolean`          | `false` |
| maxLength    | 最大长度                 | `number`           | -       |      |
| showCount    | 是否展示字数             | `boolean`          | `false` |      |
| status       | 设置校验状态             | `error \| warning` | -       |      |
| value        | 输入框内容               | `string`           | -       |      |

## Events 事件

事件和`Input`一致。
