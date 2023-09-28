<script lang="ts">
  import classes from '@renzp/classes'
  import type { Size } from '../utils/types'
  import { Icon } from '..'
  import { isUndef } from '../utils/tools'
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export let allowClear = false
  export let bordered = true
  export let defaultValue: string | undefined = ''
  export let disabled: boolean = false
  export let placeholder: string | undefined = undefined
  export let value: string | undefined = defaultValue
  export let id: string | undefined = undefined
  export let maxLength: number | undefined = undefined
  export let showCount: boolean = false
  export let size: Size = 'middle'
  export const type = 'text'

  let className = ''
  export { className as class }
  $: rootClass = classes([
    'adorn-input-wrapper',
    className,
    `adorn-input-wrapper--${size}`,
    { ['has-addon']: $$slots.addonBefore || $$slots.addonAfter },
    { ['has-only-addon-before']: $$slots.addonBefore && !$$slots.addonAfter },
    { ['has-only-addon-after']: $$slots.addonAfter && !$$slots.addonBefore }
  ])

  $: hasWrapper = Object.keys($$slots).length > 0 || allowClear || showCount
  $: classList = classes(['adorn-input', className, `adorn-input--${size}`])

  const onClear = () => {
    value = ''
    dispatch('clear')
    dispatch('change', value)
  }

  let isCompositionInput = false
  const onCompositionStart = (e: any) => {
    isCompositionInput = true
    dispatch('compositionstart', e.target.value)
  }
  const onCompositionEnd = (e: any) => {
    isCompositionInput = false
    value = e.target.value
    dispatch('input', value)
    dispatch('compositionend', value)
  }
  const onInput = (e: any) => {
    if (!isCompositionInput) {
      value = e.target.value
      dispatch('input', value)
    }
  }

  let focused = false
  const onFocus = () => {
    focused = true
    dispatch('focus')
  }
  const onBlur = () => {
    focused = false
    dispatch('blur')
  }
</script>

{#if hasWrapper}
  <div class={rootClass} class:disabled class:bordered class:focused>
    {#if $$slots.addonBefore}
      <div class="adorn-input-addon-before">
        <slot name="addonBefore" />
      </div>
    {/if}
    <div class="adorn-input" class:focused>
      {#if $$slots.prefix}
        <div class="adorn-input-prefix">
          <slot name="prefix" />
        </div>
      {/if}
      <input
        {id}
        {type}
        {value}
        class="adorn-input-content"
        {placeholder}
        {disabled}
        maxlength={maxLength}
        on:input={onInput}
        on:compositionstart={onCompositionStart}
        on:compositionend={onCompositionEnd}
        on:change
        on:blur={onBlur}
        on:focus={onFocus}
        on:keyup
        on:keydown
        on:keypress
        on:mouseenter
        on:mouseleave
        on:mousemove
      />
      {#if allowClear}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="adorn-input-clear-icon" style:opacity={`${!value ? 0 : 1}`} on:click={onClear}>
          <Icon name="close" />
        </div>
      {/if}
      {#if showCount}
        <div class="adorn-input-count">
          {value?.length ?? 0} / {maxLength}
        </div>
      {/if}
      {#if $$slots.suffix}
        <div class="adorn-input-suffix">
          <slot name="suffix" />
        </div>
      {/if}
    </div>
    {#if $$slots.addonAfter}
      <div class="adorn-input-addon-after">
        <slot name="addonAfter" />
      </div>
    {/if}
  </div>
{:else}
  <input
    {id}
    {type}
    {value}
    class={classList}
    class:bordered
    class:disabled
    {placeholder}
    {...$$restProps}
    {disabled}
    maxlength={maxLength}
    on:input={onInput}
    on:compositionstart={onCompositionStart}
    on:compositionend={onCompositionEnd}
    on:change
    on:blur={onBlur}
    on:focus={onFocus}
    on:keyup
    on:keydown
    on:keypress
    on:mouseenter
    on:mouseleave
    on:mousemove
  />
{/if}

<style lang="less" global>
  .adorn-input {
    color: var(--adorn-text-color);
    font-size: var(--adorn-font-size);
    transition: all 0.2s;
    width: 100%;
    padding: var(--adorn-padding-sm) var(--adorn-padding);
    border-radius: var(--adorn-radius-sm);
    box-sizing: border-box;
    line-height: 1.5715;
    transition: all 0.3s;

    &.bordered {
      border: 1px solid var(--adorn-border-color);
    }

    &.disabled {
      background-color: var(--adorn-disabled-bg-color);
      cursor: not-allowed;
    }

    &:not(.disabled):hover,
    &:not(.disabled):focus {
      border-color: var(--adorn-primary-color);
    }
    &::placeholder {
      color: var(--adorn-disabled-text-color);
    }

    &--small {
      padding: 0 var(--adorn-padding);
    }

    &--large {
      padding: var(--adorn-padding);
    }
  }

  .adorn-input-wrapper {
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    color: var(--adorn-text-color);
    font-size: var(--adorn-font-size);
    width: 100%;

    &.disabled {
      background-color: var(--adorn-disabled-bg-color);
      cursor: not-allowed;

      .adorn-input {
        &-content {
          cursor: not-allowed;
        }

        &:hover,
        &:focus {
          border-color: var(--adorn-border-color);
        }
      }
    }

    .adorn-input {
      padding: var(--adorn-padding-sm) var(--adorn-padding);
      border-radius: var(--adorn-radius-sm);
      display: inline-flex;
      align-items: center;

      &-content {
        width: 100%;
        &::placeholder {
          color: var(--adorn-disabled-text-color);
        }
      }

      &-prefix {
        margin-right: var(--adorn-padding-sm);
        &:empty {
          display: none;
        }
      }

      &-suffix {
        margin-left: var(--adorn-padding-sm);
        &:empty {
          display: none;
        }
      }

      &-addon-before,
      &-addon-after {
        padding: var(--adorn-padding-sm) var(--adorn-padding);
        background-color: var(--adorn-bg-color);
        line-height: 1.5715;
      }

      &-addon-before {
        border-radius: var(--adorn-radius-sm) 0 0 var(--adorn-radius-sm);
        &:empty {
          display: none;
        }
      }
      &-addon-after {
        border-radius: 0 var(--adorn-radius-sm) var(--adorn-radius-sm) 0;
        &:empty {
          display: none;
        }
      }

      &-clear-icon {
        height: 16px;
        line-height: 16px;
        padding: 0 var(--adorn-padding-mini);
        color: var(--adorn-text-color);
        background-color: var(--adorn-bg-color);
        border-radius: 50%;
        cursor: pointer;
      }

      &-count {
        flex: none;
        color: var(--adorn-disabled-text-color);
      }
    }

    &.bordered {
      .adorn-input {
        border: 1px solid var(--adorn-border-color);

        &:hover,
        &.focused {
          border-color: var(--adorn-primary-color);
        }

        &-addon-before {
          border: 1px solid var(--adorn-border-color);
          border-right: none;
        }
        &-addon-after {
          border: 1px solid var(--adorn-border-color);
          border-left: none;
        }
      }
    }

    &--small {
      .adorn-input {
        padding: 0 var(--adorn-padding);

        &-addon-before,
        &-addon-after {
          padding: 0 var(--adorn-padding);
        }
      }
    }

    &--large {
      .adorn-input {
        padding: var(--adorn-padding);

        &-addon-before,
        &-addon-after {
          padding: var(--adorn-padding);
        }
      }
    }

    &.has-addon {
      .adorn-input {
        border-radius: 0;
        line-height: 1.6512;
      }
    }
    &.has-only-addon-before {
      .adorn-input {
        border-radius: 0 var(--adorn-radius-sm) var(--adorn-radius-sm) 0;
      }
    }

    &.has-only-addon-after {
      .adorn-input {
        border-radius: var(--adorn-radius-sm) 0 0 var(--adorn-radius-sm);
      }
    }
  }
</style>
