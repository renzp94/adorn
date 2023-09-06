# adorn

基于Svelte 4开发的组件库

## 安装

::: code-group

```bash [pnpm]
pnpm add adorn-ui
```

```bash [yarn]
yarn add adorn-ui
```

```bash [npm]
npm install adorn-ui
```

:::

## 使用

直接导入组件使用即可。

```svelte
<script>
  import { Button } from 'adorn-ui'
  let count = 0
</script>

<div>
  <Button type="primary" on:click={() => count--}>-</Button>
  {count}
  <Button type="primary" on:click={() => count++}>+</Button>
</div>
```

## 定制主题

`Adorn`使用`css变量`实现动态主题，可以通过调整变量来调整主题。

```css
:root{
  /* 大小 */
  --adorn-size-mini: 2px;
  --adorn-size-sm: 4px;
  --adorn-size: 8px;
  --adorn-size-xl: 12px;
  --adorn-size-xxl: 16px;
  --adorn-font-size: 14px;
  /* 圆角 */
  --adorn-radius-mini: var(--adorn-size-mini);
  --adorn-radius-sm: var(--adorn-size-sm);
  --adorn-radius: var(--adorn-size);
  --adorn-radius-xl: var(--adorn-size-xl);
  --adorn-radius-xxl: var(--adorn-size-xxl);

  /* 内边距 */
  --adorn-padding-mini: var(--adorn-size-mini);
  --adorn-padding-sm: var(--adorn-size-sm);
  --adorn-padding: var(--adorn-size);
  --adorn-padding-xl: var(--adorn-size-xl);
  --adorn-padding-xxl: var(--adorn-size-xxl);

  /* 主题色 */
  --adorn-primary-color: #4170FF;
  /* 成功色 */
  --adorn-success-color: #00C48C;
  /* 警告色 */
  --adorn-warn-color: #FFC245;
  /* 错误色 */
  --adorn-error-color: #FF4D4F;
  /* 文字色 */
  --adorn-text-color: #3C4761;
  --adorn-disabled-text-color: #C5CEE0;
  /* 白色 */
  --adorn-white-color: #FFF;
  /* 边框色 */
  --adorn-border-color: #C5CEE0;
  /* 背景色 */
  --adorn-bg-color: #F6F9FB;
  /* 禁用背景色 */
  --adorn-disabled-bg-color: #F6F9FB;
}
```