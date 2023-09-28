<script lang="ts">
  import classes from '@renzp/classes'
  import Input from './Input.svelte'
  import { Icon } from '..'
  import type { Size } from '../utils/types'
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export let allowClear = false
  export let defaultValue: string | undefined = ''
  export let disabled: boolean = false
  export let placeholder: string | undefined = undefined
  export let value: string | undefined = defaultValue
  export let id: string | undefined = undefined
  export let maxLength: number | undefined = undefined
  export let showCount: boolean = false
  export let size: Size = 'middle'
  export let visible = false

  let className = ''
  export { className as class }
  $: classList = classes([
    'adorn-input-password',
    className,
    { ['has-addon']: $$slots.addonBefore || $$slots.addonAfter },
    { ['has-only-addon-before']: $$slots.addonBefore && !$$slots.addonAfter },
    { ['has-only-addon-after']: $$slots.addonAfter && !$$slots.addonBefore }
  ])

  const onVisibleChange = () => {
    visible = !visible
    dispatch('visibleChange', visible)
  }
</script>

<div class={classList} {...$$restProps}>
  <Input
    {allowClear}
    {defaultValue}
    {disabled}
    {placeholder}
    {value}
    {id}
    {maxLength}
    {showCount}
    {size}
    type={visible ? 'text' : 'password'}
    on:input
    on:compositionstart
    on:compositionend
    on:change
    on:blur
    on:focus
    on:keyup
    on:keydown
    on:keypress
    on:mouseenter
    on:mouseleave
    on:mousemove
  >
    <slot name="prefix" slot="prefix" />
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <span slot="suffix" on:click={onVisibleChange}>
      <Icon name={visible ? 'eye' : 'eye-close'} />
    </span>
    <slot name="addonBefore" slot="addonBefore" />
    <slot name="addonAfter" slot="addonAfter" />
  </Input>
</div>

<style lang="less" global>
  .adorn-input-password {
    :global(.adorn-input-wrapper.bordered .adorn-input) {
      border-radius: var(--adorn-radius-sm);
    }

    &.has-addon {
      border-radius: 0;
    }
    &.has-only-addon-before {
      :global(.adorn-input-wrapper.bordered .adorn-input) {
        border-radius: 0 var(--adorn-radius-sm) var(--adorn-radius-sm) 0;
      }
    }
    &.has-only-addon-after {
      :global(.adorn-input-wrapper.bordered .adorn-input) {
        border-radius: var(--adorn-radius-sm) 0 0 var(--adorn-radius-sm);
      }
    }
  }
</style>
