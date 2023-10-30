<script lang="ts">
  import classes from '@renzp/classes'
  import { createEventDispatcher, getContext } from 'svelte'
  import { CONTEXT_CHECKBOX, CONTEXT_CHECKBOX_CHANGE } from '.'
  import type { CheckboxGroupCtx } from '../utils/types'
  import type { Writable } from 'svelte/store'
  const dispatch = createEventDispatcher()

  const ctx = getContext<Writable<CheckboxGroupCtx>>(CONTEXT_CHECKBOX)
  const onChange =
    getContext<(v: string | number, checked: boolean) => void>(CONTEXT_CHECKBOX_CHANGE)

  export let defaultChecked = false
  export let checked = defaultChecked
  export let disabled = $ctx?.disabled ?? false
  export let name: string | undefined = $ctx?.name
  export let indeterminate = false
  export let value: string | number | undefined = undefined

  let className = ''
  export { className as class }
  $: classList = classes([`adorn-checkbox`, className])

  let checkedModel = checked
  $: checkedModel = $ctx?.value ? !!value && $ctx?.value?.includes(value) : checked

  const onClick = () => {
    if (disabled) {
      return
    }
    checkedModel = !checkedModel
    dispatch('change', checkedModel)
    if (value) {
      onChange(value, checkedModel)
    }
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class={classList}
  on:click={onClick}
  class:checked={checkedModel}
  class:disabled
  class:indeterminate
>
  <input
    {name}
    {value}
    class="adorn-checkbox-input"
    type="checkbox"
    checked={checkedModel}
    {disabled}
  />
  <span class="adorn-checkbox-inner" />
  <span><slot /></span>
</div>

<style lang="less" global>
  .adorn-checkbox {
    font-size: var(--adorn-font-size);
    color: var(--adorn-text-color);
    display: inline-flex;
    align-items: center;
    cursor: pointer;

    &-input {
      display: none;
    }

    &-inner {
      display: inline-block;
      height: 16px;
      width: 16px;
      border-radius: var(--adorn-radius-sm);
      border: 1px solid var(--adorn-border-color);
      margin-right: 4px;
      position: relative;

      &::after {
        box-sizing: border-box;
        position: absolute;
        top: 50%;
        inset-inline-start: 21.5%;
        display: table;
        width: 5.7142857142857135px;
        height: 9.142857142857142px;
        border: 2px solid #fff;
        border-top: 0;
        border-inline-start: 0;
        transform: rotate(45deg) scale(0) translate(-50%, -50%);
        opacity: 0;
        content: '';
        transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
      }
    }

    &:not(.disabled):hover &-inner {
      border-color: var(--adorn-primary-color);
    }

    &.disabled {
      color: var(--adorn-disabled-text-color);
      cursor: not-allowed;

      .adorn-checkbox-inner {
        background-color: var(--adorn-disabled-bg-color);
      }
    }

    &:not(.indeterminate) {
      &.checked {
        &.disabled .adorn-checkbox-inner {
          background-color: var(--adorn-disabled-bg-color);

          &::after {
            opacity: 1;
            transform: rotate(45deg) scale(1) translate(-50%, -50%);
            transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
            border-color: var(--adorn-disabled-text-color);
          }
        }

        &:not(.disabled) .adorn-checkbox-inner {
          background-color: var(--adorn-primary-color);
          border-color: var(--adorn-primary-color);

          &::after {
            opacity: 1;
            transform: rotate(45deg) scale(1) translate(-50%, -50%);
            transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
          }
        }
      }
    }

    &.indeterminate &-inner::after {
      top: 50%;
      inset-inline-start: 50%;
      width: 8px;
      height: 8px;
      background-color: var(--adorn-primary-color);
      border: 0;
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
      content: '';
    }

    &.indeterminate.disabled &-inner::after {
      background-color: var(--adorn-disabled-text-color);
    }
  }
</style>
