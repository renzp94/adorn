<script lang="ts">
  import classes from '@renzp/classes'
  import type { CheckboxGroupCtx, CheckboxGroupOption } from '../utils/types'
  import Checkbox from './Checkbox.svelte'
  import { writable, type Writable } from 'svelte/store'
  import { createEventDispatcher, setContext } from 'svelte'
  import { CONTEXT_CHECKBOX, CONTEXT_CHECKBOX_CHANGE } from '.'
  const dispatch = createEventDispatcher()

  export let defaultValue: Array<string | number> = []
  export let disabled = false
  export let name: string | undefined = undefined
  export let options: CheckboxGroupOption[] = []
  export let value = defaultValue

  const onChange = (v: string | number, checked: boolean) => {
    if (checked) {
      value = [...value, v]
    } else {
      value = value.filter(item => item !== v)
    }

    dispatch('change', value)
  }

  const ctx = writable<CheckboxGroupCtx>({
    disabled,
    name,
    value
  })
  $: ctx.update(() => ({ disabled, name, value }))
  setContext<Writable<CheckboxGroupCtx>>(CONTEXT_CHECKBOX, ctx)
  setContext(CONTEXT_CHECKBOX_CHANGE, onChange)

  let className = ''
  export { className as class }
  $: classList = classes([`adorn-checkbox-group`, className])
</script>

<div class={classList}>
  {#if $$slots.default}
    <slot />
  {:else}
    {#each options as item}
      <Checkbox value={item.value} disabled={item.disabled}>{item.label}</Checkbox>
    {/each}
  {/if}
</div>

<style lang="less" global>
  .adorn-checkbox-group {
    display: inline-flex;
    gap: var(--adorn-padding) var(--adorn-padding);
  }
</style>
