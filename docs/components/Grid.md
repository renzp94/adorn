---
title: Grid
lang: zh-CN
---


# Grid 栅格

## 概述

布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：

通过 row 在水平方向建立一组 column（简写 col）。
你的内容应当放置于 col 内，并且，只有 col 可以作为 row 的直接元素。
栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。例如，三个等宽的列可以使用 <Col span={8} /> 来创建。
如果一个 row 中的 col 总和超过 24，那么多余的 col 会作为一个整体另起一行排列。
我们的栅格化系统基于 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用 order 来定义元素的排列顺序。

布局是基于 24 栅格来定义每一个『盒子』的宽度，但不拘泥于栅格。

## 基础栅格

从堆叠到水平排列。

使用单一的一组`Row`和`Col`栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在`Row`内。

<demo src="../../../../example/grid/basic.svelte"  github='Grid/Row'></demo>

## 区块间隔

栅格常常需要和间隔进行配合，你可以使用`Row`的`gutter`属性，我们推荐使用 (16+8n)px 作为栅格间隔(n 是自然数)。

<demo src="../../../../example/grid/gutter.svelte"  github='Grid/Row'></demo>

## 左右偏移

使用`offset`可以将列向右侧偏。例如，`offset={4}`将元素向右侧偏移了 4 个列（column）的宽度。

<demo src="../../../../example/grid/offset.svelte"  github='Grid/Row'></demo>

## 栅格排序

通过使用`push`和`pull`类就可以很容易的改变列（column）的顺序。

<demo src="../../../../example/grid/push.svelte"  github='Grid/Row'></demo>

## 排版

布局基础。

子元素根据不同的值`start`、`center`、`end`、`space-between`、`space-around` 和 `space-evenly`，分别定义其在父节点里面的排版方式。

<demo src="../../../../example/grid/justify.svelte"  github='Grid/Row'></demo>

## 对齐

子元素垂直对齐。

<demo src="../../../../example/grid/align.svelte"  github='Grid/Row'></demo>

## 排序

通过`order`来改变元素的排序。

<demo src="../../../../example/grid/order.svelte"  github='Grid/Row'></demo>

## Flex 填充

`Col`提供`flex`属性以支持填充。

<demo src="../../../../example/grid/flex.svelte"  github='Grid/Row'></demo>
