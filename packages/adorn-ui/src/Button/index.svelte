<script lang="ts">
  import classes from '@renzp/classes'
  import { Icon } from '..'
  import type { ButtonProps } from '../types'

  let {
    block,
    class: className,
    danger,
    disabled,
    ghost,
    loading,
    href,
    type = 'default',
    htmlType = 'button',
    shape = 'default',
    size = 'middle',
    icon,
    children,
    ...props
  }: ButtonProps = $props()

  const hasIcon = $derived(loading || icon)
  const classList = $derived(
    classes([
      'adorn-btn',
      className,
      { [`adorn-btn--${type}`]: !!type },
      { [`adorn-btn--${shape}`]: !!shape },
      { [`adorn-btn--${size}`]: !!size },
      { [`adorn-btn-has-icon`]: hasIcon }
    ])
  )

  const _disabled = $derived(disabled || loading)
</script>

<svelte:element
  this={href ? 'a' : 'button'}
  role={href ? 'a' : 'button'}
  class:block
  class:danger
  class:disabled
  class:ghost
  class:loading
  {href}
  disabled={_disabled}
  {...props}
  class={classList}
  type={href ? undefined : htmlType}
  onclick={_disabled ? undefined : props?.onclick}
>
  {#if loading}
    <Icon name="loader" />
  {:else if icon}
    <Icon name={icon} />
  {/if}
  {#if children}
    <span class="adorn-btn-text">
      {@render children()}
    </span>
  {/if}
</svelte:element>

<style lang="less" global>
  @import url('./css/default.less');
  @import url('./css/type.less');
  @import url('./css/bool-props.less');
  @import url('./css/shape.less');
  @import url('./css/size.less');
</style>
