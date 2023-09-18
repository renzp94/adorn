---
title: Breadcrumb 面包屑
lang: zh-CN
---

# Breadcrumb 面包屑

显示当前页面在系统层级结构中的位置，并能向上返回。

## 何时使用

- 当系统拥有超过两级以上的层级结构时；
- 当需要告知用户『你在哪里』时；
- 当需要向上导航的功能时。

## 基本使用

最简单的用法。

<demo src="../../../../example/breadcrumb/basic.svelte"  github='Breadcrumb'></demo>

## 带图标的

图标放在文字前面。如果使用`icon`指定的话只能使用`Icon`组件支持的图标。

<demo src="../../../../example/breadcrumb/icon.svelte"  github='Breadcrumb'></demo>

## 自定义内容

可通过插槽`item`来自定义内容。

<demo src="../../../../example/breadcrumb/item.svelte"  github='Breadcrumb'></demo>

## 分隔符

可通过插槽`separator`来自定义分隔符。

<demo src="../../../../example/breadcrumb/separator.svelte"  github='Breadcrumb'></demo>

## Props 属性

| 属性  | 说明         | 类型               | 默认值 | 版本 |
| ----- | ------------ | ------------------ | ------ | ---- |
| items | 渲染元素数据 | `BreadcrumbItem[]` | -      |      |

```ts
interface BreadcrumbItem {
  title?: string
  path?: string
  icon?: IconName
  disabled?: boolean
}
```

## Events 事件

| 事件  | 说明     | 类型                                        |
| ----- | -------- | ------------------------------------------- |
| click | 点击事件 | `MouseEventHandler<T> \| undefined \| null` |


## Slots 插槽

| 事件      | 说明         |
| --------- | ------------ |
| item      | 自定义内容   |
| separator | 自定义分隔符 |