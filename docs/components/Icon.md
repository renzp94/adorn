---
title: Icon 图标
lang: zh-CN
---

# Icon 图标

## 基本使用

通过指定`name`指定图标，通过`size`属性指定大小，通过`color`指定颜色，也可通过父元素的`color`和`font-size`指定颜色和大小。

<demo src="../../../../example/icon/basic.svelte"></demo>
<demo src="../../../../example/icon/index.svelte"></demo>

## Props 属性

| 属性  | 说明                                  | 类型     | 默认值 | 版本 |
| ----- | ------------------------------------- | -------- | ------ | ---- |
| color | 图标颜色(默认继承父元素的`color`)     | `string` | -      |      |
| name  | 图标名                                | `string` | -      |      |
| size  | 图标大小(默认继承父元素的`font-size`) | `string` | -      |      |