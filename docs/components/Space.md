---
title: Space
lang: zh-CN
---

# Space 间距

设置组件之间的间距。

## 基本使用

相邻组件水平间距。

<demo src="../../../../example/space/basic.svelte"  github='Space'></demo>

## 垂直间距

相邻组件垂直间距。

<demo src="../../../../example/space/direction.svelte"  github='Space'></demo>

## 间距大小

间距预设大、中、小三种大小。

通过设置`size`为`large`、`middle`分别把间距设为大、中间距。若不设置`size`，则间距为小。

<demo src="../../../../example/space/size.svelte"  github='Space'></demo>

## 间距大小

间距预设大、中、小三种大小。

通过设置`size`为`large`、`middle`分别把间距设为大、中间距。若不设置`size`，则间距为小。

<demo src="../../../../example/space/align.svelte"  github='Space'></demo>

## 自动换行

自动换行。

<demo src="../../../../example/space/wrap.svelte"  github='Space'></demo>

## 分隔符

相邻组件分隔符。

<demo src="../../../../example/space/split.svelte"  github='Space'></demo>


## API

### Props 属性

| 属性      | 说明         | 类型                                  | 默认值     | 版本 |
| --------- | ------------ | ------------------------------------- | ---------- | ---- |
| align     | 对齐方式     | `start  \| end  \| center\| baseline` | `start`    |      |
| direction | 间距方向     | `horizontal  \| vertical`             | `vertical` |      |
| size      | 间距大小     | `Size \| Size[]`                      | `small`    |      |
| wrap      | 是否自动换行 | `boolean`                             | `true`     |      |

```ts
type Size = 'small' | 'middle' | 'large' | number
```

### Slot 插槽


| 插槽名 | 说明         | 类型          | 默认值 | 版本 |
| ------ | ------------ | ------------- | ------ | ---- |
| split  | 设置拆分内容 | `HTMLElement` | -      |      |