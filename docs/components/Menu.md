---
title: Menu 导航菜单
lang: zh-CN
---

# Menu 导航菜单

为页面和功能提供导航的菜单列表。

## 何时使用

导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。

## 开发者注意事项

`Menu`元素为`ul`，因而仅支持`li`以及`script-supporting`子元素。因而你的子节点元素应该都在`Menu.Item`内使用。

## 顶部导航

水平的顶部导航菜单。

<demo src="../../../../example/menu/top.svelte"></demo>

## 顶部导航滚动

水平的顶部导航菜单如果太多将出现可滚动的图标，可通过`scrollGap`属性来指定一次滚动几个菜单长度。

<demo src="../../../../example/menu/top-more.svelte"></demo>

## 内嵌菜单

垂直菜单，子菜单内嵌在菜单区域。

<demo src="../../../../example/menu/inline.svelte"></demo>

## 多级嵌套菜单

多级嵌套菜单。

<demo src="../../../../example/menu/submenu.svelte"></demo>

## Props 属性

| 属性                 | 说明                                         | 类型                               | 默认值     | 版本 |
| -------------------- | -------------------------------------------- | ---------------------------------- | ---------- | ---- |
| active               | 菜单项`key`                                  | `string`                           | -          |      |
| defaultOpenKeys      | 初始展开的`SubMenu`菜单项`key`数组           | `string[]`                         | -          |      |
| defaultActive        | 初始选中的菜单项`key`                        | `string`                           | -          |      |
| items                | 菜单内容                                     | `MenuItem[]`                       | -          |      |
| mode                 | 菜单类型，现在支持垂直、水平、和内嵌模式三种 | `vertical \| horizontal \| inline` | `vertical` |      |
| openKeys             | 当前展开的`SubMenu`菜单项`key`数组           | `string[]`                         | -          |      |
| triggerSubMenuAction | `SubMenu`展开/关闭的触发行为                 | `hover \| click`                   | `hover`    |      |

```ts
export interface MenuItem  {
  danger?: boolean
  disabled?: boolean
  icon?: IconName
  key: string
  label?: string
  title?: string
  children?: MenuItem[]
}
```

## Events 事件

| 事件       | 说明                   | 类型                                                       |
| ---------- | ---------------------- | ---------------------------------------------------------- |
| click      | 点击事件               | `(e: CustomEvent<string>) => void`                         |
| openChange | `SubMenu`开/关闭的回调 | `(e: CustomEvent<{ key: string; open: boolean }>) => void` |