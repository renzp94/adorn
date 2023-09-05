<script lang="ts">
  import classes from '@renzp/classes'
  import { createEventDispatcher } from 'svelte'

  type ButtonType = 'primary' | 'dashed' | 'link' | 'text' | 'default'
  type ButtonHtmlType = 'submit' | 'reset' | 'button' | undefined | null
  type ButtonShape = 'default' | 'circle' | 'round'
  type ButtonTarget = '_self' | '_blank' | '_parent' | '_top' | string
  type ButtonSize = 'large' | 'middle' | 'small'

  export let block = false
  let className = ''
  export { className as class }
  export let danger = false
  export let disabled = false
  export let ghost = false
  export let loading = false
  export let href = ''
  export let type: ButtonType = 'default'
  export let htmlType: ButtonHtmlType = 'button'
  export let shape: ButtonShape = 'default'
  export let size: ButtonSize = 'middle'
  export let target: ButtonTarget = ''
  const classLst = classes([
    'adorn-btn',
    className,
    { [`adorn-btn--${type}`]: !!type },
    { [`adorn-btn--${shape}`]: !!shape },
    { [`adorn-btn--${size}`]: !!size }
  ])

  const dispatcher = createEventDispatcher()
  const onClick = (e: Event) => dispatcher('click', e)
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
  this={href ? 'a' : 'button'}
  class:block
  class={classLst}
  class:danger
  class:disabled
  class:ghost
  class:loading
  {href}
  {target}
  on:click={loading || disabled ? undefined : onClick}
  {...$$restProps}
  type={href ? undefined : htmlType}
>
  <slot />
</svelte:element>

<style lang="less">
  @import url('./css/default.less');
  @import url('./css/type.less');
  @import url('./css/bool-props.less');
  @import url('./css/shape.less');
  @import url('./css/size.less');
</style>
