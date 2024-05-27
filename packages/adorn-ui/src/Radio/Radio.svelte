<script lang="ts">
  import classes from '@renzp/classes'
  import { CONTEXT_RADIO, CONTEXT_RADIO_CHANGE } from '.'
  import { getContext } from 'svelte'
  import type { RadioGroupCtx, Size } from '../utils/types'
  import type { Writable } from 'svelte/store'
  import type { RadioProps } from '../types'

  const ctx = getContext<Writable<RadioGroupCtx>>(CONTEXT_RADIO)

  let {
    buttonStyle = 'outline',
    checked = $bindable(),
    disabled = $ctx?.disabled,
    name = $ctx?.name,
    size,
    type = 'default',
    value,
    class: className,
    children,
    ...props
  }: RadioProps = $props()

  const classPrefix = $derived(type === 'button' ? '-btn' : '')

  const onChange = getContext<(v?: string | number) => void>(CONTEXT_RADIO_CHANGE)

  const classList = $derived(
    classes([
      `adorn-radio${classPrefix}-wrapper`,
      className,
      { checked },
      `adorn-radio${classPrefix}-wrapper-${buttonStyle}`,
      { [`adorn-radio-btn-wrapper--${size}`]: type === 'button' && size }
    ])
  )

  $effect(() => {
    checked = $ctx?.value ? $ctx?.value === value : checked
  })

  const onChecked = () => {
    if (disabled) {
      return
    }

    if ($ctx?.value) {
      ctx.update(v => ({ ...v, value }))
    } else {
      checked = true
    }
    onChange?.(value)
  }
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<label class:disabled {...props} class={classList} onclick={onChecked}>
  <span class={`adorn-radio${classPrefix}`}>
    <input
      {name}
      {value}
      class={`adorn-radio${classPrefix}-input`}
      type="radio"
      {checked}
      disabled
    />
    <span class={`adorn-radio${classPrefix}-inner`}></span>
  </span>
  <span class={`adorn-radio${classPrefix}-content`}>{@render children()}</span>
</label>

<style lang="less" global>
  .adorn-radio {
    position: relative;
    height: 16px;
    font-size: var(--adorn-font-size);

    &-wrapper {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      color: var(--adorn-text-color);
    }

    &-input {
      display: none;
    }

    &-inner {
      display: inline-block;
      position: relative;
      z-index: 2;
      height: 16px;
      width: 16px;
      background-color: #fff;
      border: 1px solid var(--adorn-border-color);
      border-radius: 50%;
      transition: all 0.3s;
    }

    &-wrapper.checked:not(.disabled) .adorn-radio-inner {
      border: 5px solid var(--adorn-primary-color);
    }
    &-wrapper:hover:not(.disabled) &-inner {
      border-color: var(--adorn-primary-color);
    }
    &-wrapper.disabled {
      color: var(--adorn-disabled-text-color);
      cursor: not-allowed;

      .adorn-radio-inner {
        background-color: var(--adorn-disabled-bg-color);
      }
      &.checked {
        .adorn-radio-inner {
          background-color: #fff;
          border: 5px solid var(--adorn-border-color);
        }
      }
    }

    &-content {
      margin: 0 8px;
    }
  }

  .adorn-radio-btn {
    cursor: pointer;

    &-wrapper {
      display: inline-block;
      font-size: var(--adorn-font-size);
      line-height: var(--adorn-line-height);
      white-space: nowrap;
      border: 1px solid var(--adorn-border-color);
      padding: var(--adorn-padding-sm) var(--adorn-padding-xl);
      margin: 0;
      cursor: pointer;
      transition: all 0.3s;
      position: relative;
      z-index: 2;

      &--small {
        padding: 0 var(--adorn-padding);
      }

      &--large {
        padding: var(--adorn-padding) var(--adorn-padding-xxl);
      }

      &:first-child {
        border-radius: var(--adorn-radius-sm) 0 0 var(--adorn-radius-sm);
      }

      &:last-child {
        border-radius: 0 var(--adorn-radius-sm) var(--adorn-radius-sm) 0;
      }

      &:not(:last-child) {
        border-right-width: 0;
      }

      &:not(.disabled):hover {
        color: var(--adorn-primary-color);
      }

      &:not(.disabled).checked {
        border-right-width: 1px;
        color: var(--adorn-primary-color);
        border-color: var(--adorn-primary-color);
      }

      &&-solid:not(.disabled).checked {
        border-right-width: 1px;
        color: var(--adorn-white-color);
        border-color: var(--adorn-primary-color);
        background-color: var(--adorn-primary-color);
      }

      &.disabled {
        background-color: var(--adorn-bg-color);
        color: var(--adorn-disabled-text-color);
        cursor: not-allowed;

        &.checked {
          border-right-width: 1px;
          background-color: var(--adorn-disabled-bg-color);
        }
      }
    }

    &-input {
      display: none;
    }
  }
</style>
