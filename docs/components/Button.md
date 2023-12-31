---
title: Button 按钮
lang: zh-CN
---

# Button 按钮

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

在 Ant Design 中我们提供了五种按钮。

- 主按钮：用于主行动点，一个操作区域只能有一个主按钮。
- 默认按钮：用于没有主次之分的一组行动点。
- 虚线按钮：常用于添加操作。
- 文本按钮：用于最次级的行动点。
- 链接按钮：一般用于链接，即导航至某位置。

以及四种状态属性与上面配合使用。

- 危险：删除/移动/修改权限等危险操作，一般需要二次确认。
- 幽灵：用于背景色比较复杂的地方，常用在首页/产品页等展示场景。
- 禁用：行动点不可用的时候，一般需要文案解释。
- 加载中：用于异步操作等待反馈的时候，也可以避免多次提交。

## 按钮类型

按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。

<demo src="../../../../example/button/type.svelte"></demo>

## 图标按钮

当需要在`Button`内嵌入`Icon`时，可以设置`icon`属性，或者直接在`Button`内使用`Icon`组件。

如果想控制`Icon`具体的位置，只能直接使用`Icon`组件，而非`icon`属性。

<demo src="../../../../example/button/icon.svelte"></demo>


## 按钮尺寸

按钮有大、中、小三种尺寸。

通过设置`size`为`large`, `small`分别把按钮设为大、小尺寸。若不设置`size`，则尺寸为中。


<demo src="../../../../example/button/size.svelte"></demo>

## 不可用状态

添加`disabled`属性即可让按钮处于不可用状态，同时按钮样式也会改变。


<demo src="../../../../example/button/disabled.svelte"></demo>

## 加载中状态

添加`loading`属性即可让按钮处于加载状态，最后三个按钮演示点击后进入加载状态。


<demo src="../../../../example/button/loading.svelte"></demo>



## 幽灵按钮

幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。


<demo src="../../../../example/button/ghost.svelte"></demo>

## 危险按钮

危险按钮表示操作危险，常用在删除，不可逆更新操作。

<demo src="../../../../example/button/danger.svelte"></demo>

## Block 按钮

`block`属性将使按钮适合其父宽度。

<demo src="../../../../example/button/block.svelte"></demo>

## Props 属性

| 属性     | 说明                                                  | 类型                                           | 默认值    | 版本 |
| -------- | ----------------------------------------------------- | ---------------------------------------------- | --------- | ---- |
| block    | 将按钮宽度调整为其父宽度的选项                        | `boolean`                                      | `false`   |      |
| danger   | 设置危险按钮                                          | `boolean`                                      | `false`   |      |
| disabled | 设置按钮失效状态                                      | `boolean`                                      | `false`   |      |
| ghost    | 幽灵属性，使按钮背景透明                              | `boolean`                                      | `false`   |      |
| href     | 点击跳转的地址，指定此属性`button`的行为和`a`链接一致 | `string`                                       | -         |      |
| htmlType | 设置`button`原生的`type`值，可选值请参考`HTML`标准    | `string`                                       | -         |      |
| icon     | 设置按钮的图标组件                                    | `string`                                       | -         |      |
| loading  | 设置按钮载入状态                                      | `boolean`                                      | `false`   |      |
| shape    | 设置按钮形状                                          | `default  \| circle  \| round`                 | `default` |      |
| size     | 设置按钮大小                                          | `large  \| middle  \| small`                   | `middle`  |      |
| target   | 相当于`a`链接的`target`属性，`href`存在时生效         | `string`                                       | -         |      |
| type     | 设置按钮类型                                          | `primary  \| dashed  \| link\| text\| default` | `default` |      |

## Events 事件

| 事件  | 说明     | 类型                                        |
| ----- | -------- | ------------------------------------------- |
| click | 点击事件 | `MouseEventHandler<T> \| undefined \| null` |

## Slots 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |