<script lang="ts">
  import classes from '@renzp/classes'
  import { setContext } from 'svelte'
  import { CONTEXT_RADIO, CONTEXT_RADIO_CHANGE } from '.'
  import { writable, type Writable } from 'svelte/store'
  import Radio from './Radio.svelte'
  import type { RadioGroupCtx, RadioGroupProps, Value } from '../types'

  let {
    buttonStyle,
    disabled,
    name,
    options = [],
    optionType = 'default',
    size,
    value = $bindable(),
    class: className,
    children,
    label,
    onChange,
    ...props
  }: RadioGroupProps = $props()

  const _onChange = (v?: Value) => {
    value = v
    onChange?.(v)
  }

  const ctx = writable<RadioGroupCtx>({ disabled, name, optionType, size, value })
  $effect(() => {
    ctx.update(() => ({ disabled, name, optionType, size, value }))
  })
  setContext<Writable<RadioGroupCtx>>(CONTEXT_RADIO, ctx)
  setContext(CONTEXT_RADIO_CHANGE, _onChange)

  const classList = $derived(classes(['adorn-radio-group', className]))
</script>

<div {...props} class={classList}>
  {#if children}
    {@render children()}
  {:else}
    {#each options as item}
      <Radio
        {name}
        type={optionType}
        {buttonStyle}
        {size}
        value={item.value}
        disabled={item?.disabled}
      >
        {#if label}
          {@render label(item)}
        {:else}
          {item.label}
        {/if}
      </Radio>
    {/each}
  {/if}
</div>

<style lang="less">
  .adorn-radio-group {
    display: inline-flex;

    :global(.adorn-radio-btn-wrapper.checked + .adorn-radio-btn-wrapper) {
      border-left-width: 0;
    }
  }
</style>
