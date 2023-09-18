<script lang="ts">
  import classes from '@renzp/classes'
  import { createEventDispatcher } from 'svelte'
  import type { IconName, Target } from '../utils/types'
  import { Icon } from '..'

  type ButtonType = 'primary' | 'dashed' | 'link' | 'text' | 'default'
  type ButtonHtmlType = 'submit' | 'reset' | 'button' | undefined | null
  type ButtonShape = 'default' | 'circle' | 'round'
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
  export let target: Target = ''
  export let icon: IconName | undefined = undefined
  $: classLst = classes([
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
  {...$$restProps}
  on:click={loading || disabled ? undefined : onClick}
  type={href ? undefined : htmlType}
>
  {#if loading}
    <Icon name="loader" />
  {:else if icon}
    <Icon name={icon} />
  {/if}
  {#if $$slots.default}
    <span><slot /></span>
  {/if}
</svelte:element>

<style lang="less" global>
  @import url('./css/default.less');
  @import url('./css/type.less');
  @import url('./css/bool-props.less');
  @import url('./css/shape.less');
  @import url('./css/size.less');
</style>
