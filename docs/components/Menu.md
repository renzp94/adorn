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

<demo src="../../../../example/menu/top.svelte"  github='Menu'></demo>

## 顶部导航滚动

水平的顶部导航菜单如果太多将出现可滚动的图标，可通过`scrollGap`属性来指定一次滚动几个菜单长度。

<demo src="../../../../example/menu/top-more.svelte"  github='Menu'></demo>

## 内嵌菜单

垂直菜单，子菜单内嵌在菜单区域。

<demo src="../../../../example/menu/inline.svelte"  github='Menu'></demo>

## 多级嵌套菜单

多级嵌套菜单。

<demo src="../../../../example/menu/submenu.svelte"  github='Menu'></demo>
