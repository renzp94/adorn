---
title: Pagination 分页
lang: zh-CN
---

# Pagination 分页

采用分页的形式分隔长列表，每次只加载一个页面。

## 基本使用

基本分页。

<demo src="../../../../example/pagination/basic.svelte"></demo>

## 更多

更多分页。

<demo src="../../../../example/pagination/more-page.svelte"></demo>


## 改变

改变每页显示条目数。

<demo src="../../../../example/pagination/size-options.svelte"></demo>

## 跳转

快速跳转到某一页。

<demo src="../../../../example/pagination/quick-jumper.svelte"></demo>

## 总计

使用`showTotal`展示自定义总计。

<demo src="../../../../example/pagination/total.svelte"></demo>

## 全部展示

展示所有配置选项。

<demo src="../../../../example/pagination/all.svelte"></demo>

## Props 属性

| 属性             | 说明                                                      | 类型                | 默认值              | 版本 |
| ---------------- | --------------------------------------------------------- | ------------------- | ------------------- | ---- |
| current          | 当前页数                                                  | `$bindable(number)` | `1`                 |      |
| disabled         | 禁用分页                                                  | `boolean`           | -                   |      |
| hideOnSinglePage | 只有一页时是否隐藏分页器                                  | `boolean`           | -                   |      |
| pageSize         | 每页条数                                                  | `number`            | `10`                |      |
| pageSizeOptions  | 指定每页可以显示多少条                                    | `number[]`          | `[10, 20, 50, 100]` |      |
| showQuickJumper  | 是否可以快速跳转至某页                                    | `boolean`           | -                   |      |
| showSizeChanger  | 是否展示 pageSize 切换器，当`total`大于`50`时默认为`true` | `boolean`           | -                   |      |
| showTitle        | 是否显示原生 tooltip 页码提示                             | `boolean`           | `true`              |      |
| total            | 数据总数                                                  | `number`            | `0`                 |      |

## Events 事件

| 事件             | 说明                                                     | 类型                                |
| ---------------- | -------------------------------------------------------- | ----------------------------------- |
| onChange         | 页码或 pageSize 改变的回调，参数是改变后的页码及每页条数 | `(value: {page, pageSize}) => void` |
| onShowSizeChange | pageSize 变化的回调                                      | `(value: {current, size}) => void`  |
