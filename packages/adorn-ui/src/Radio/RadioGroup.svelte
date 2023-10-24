<script lang="ts">
  import classes from '@renzp/classes'
  import type { RadioGroupCtx, Size } from '../utils/types'
  import { createEventDispatcher, setContext } from 'svelte'
  import { CONTEXT_RADIO, CONTEXT_RADIO_CHANGE } from '.'
  import { writable, type Writable } from 'svelte/store'
  import Radio from './Radio.svelte'

  interface RadioGroupOption {
    label: string
    value: string | number
    disabled?: boolean
  }
  const dispatch = createEventDispatcher()

  export let buttonStyle: 'outline' | 'solid' = 'outline'
  export let defaultValue: number | string | undefined = undefined
  export let disabled = false
  export let name: string | undefined = undefined
  export let options: RadioGroupOption[] = []
  export let optionType: 'default' | 'button' = 'default'
  export let size: Size | undefined = undefined
  export let value = defaultValue

  const onChange = (v?: string | number) => {
    value = v
    dispatch('change', v)
  }

  const ctx = writable<RadioGroupCtx>({ disabled, name, optionType, size, value })
  $: ctx.update(() => ({ disabled, name, optionType, size, value }))
  setContext<Writable<RadioGroupCtx>>(CONTEXT_RADIO, ctx)
  setContext(CONTEXT_RADIO_CHANGE, onChange)

  let className = ''
  export { className as class }
  $: classList = classes(['adorn-radio-group', className])
</script>

<div class={classList} {...$$restProps}>
  {#if $$slots.default}
    <slot />
  {:else}
    {#each options as item}
      <Radio
        {name}
        type={optionType}
        {buttonStyle}
        {size}
        value={item.value}
        disabled={item?.disabled}
        on:change={() => onChange(item.value)}
      >
        {#if $$slots.label}
          <slot name="label" {item} />
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
