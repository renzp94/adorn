---
title: Typography 排版
lang: zh-CN
---

# Typography 排版

文本的基本格式。

## 何时使用

- 当需要展示标题、段落、列表内容时使用，如文章/博客/日志的文本样式。
- 当需要一列基于文本的基础操作时，如拷贝/省略/可编辑。

## 基本使用

展示文档样例。

<demo src="../../../../example/typography/basic.svelte"  github='Typography'></demo>

## 标题组件

展示不同级别的标题。

<demo src="../../../../example/typography/title.svelte"  github='Typography'></demo>

## 文本与超链接组件

内置不同样式的文本以及超链接组件。

<demo src="../../../../example/typography/text.svelte"  github='Typography'></demo>

## 省略号

多行文本省略。

<demo src="../../../../example/typography/ellipsis.svelte"  github='Typography'></demo>


## 可交互

提供可复制等额外的交互能力。可通过`copyable.icon`属性来指定复制图标。并通过`on:copy`监听复制事件

<demo src="../../../../example/typography/copy.svelte"  github='Typography'></demo>
