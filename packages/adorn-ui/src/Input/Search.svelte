<script lang="ts">
  import classes from '@renzp/classes'
  import Input from './Input.svelte'
  import { Button } from '..'
  import type { Size } from '../utils/types'
  import { createEventDispatcher } from 'svelte'
  import type { KeyboardEventHandler } from 'svelte/elements'
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
  export let enterButton: boolean | string = false
  export let loading = false
  export const type = 'text'

  let className = ''
  export { className as class }
  $: classList = classes([
    'adorn-input-search',
    className,
    { ['has-only-addon-before']: $$slots.addonBefore }
  ])

  const onSearch = () => dispatch('search', value)

  const onKeydown: KeyboardEventHandler<any> = e => {
    if (e.key === 'Enter') {
      dispatch('search', value)
    }
    dispatch('keydown', e)
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
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
    {type}
    on:input
    on:compositionstart
    on:compositionend
    on:change
    on:blur
    on:focus
    on:keyup
    on:keydown={onKeydown}
    on:keypress
    on:mouseenter
    on:mouseleave
    on:mousemove
  >
    <slot name="prefix" slot="prefix" />
    <slot name="suffix" slot="suffix" />
    <slot name="addonBefore" slot="addonBefore" />
  </Input>
  <Button
    type={enterButton ? 'primary' : 'default'}
    icon={typeof enterButton === 'string' ? undefined : 'search'}
    {size}
    {loading}
    on:click={onSearch}
  >
    {#if typeof enterButton === 'string'}
      {enterButton}
    {/if}
  </Button>
</div>

<style lang="less" global>
  .adorn-input-search {
    display: inline-flex;

    &:hover,
    & :global(.adorn-input-wrapper.bordered.focused +) {
      :global(.adorn-btn) {
        border-left: 1px solid var(--adorn-primary-color);
      }
    }

    :global(.adorn-input-wrapper.bordered .adorn-input) {
      border-right: none;
      border-radius: var(--adorn-radius-sm) 0 0 var(--adorn-radius-sm);
    }

    &.has-addon {
      :global(.adorn-input) {
        border-radius: 0 !important;
      }
    }
    &.has-only-addon-before {
      :global(.adorn-input) {
        border-radius: 0 !important;
      }
    }

    :global(.adorn-btn) {
      line-height: 1.5715;
      // border-left: 0 !important;
      border-radius: 0 var(--adorn-radius-sm) var(--adorn-radius-sm) 0;
    }
  }
</style>
