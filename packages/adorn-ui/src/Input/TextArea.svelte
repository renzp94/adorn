<script lang="ts">
  import classes from '@renzp/classes'
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export let bordered = true
  export let defaultValue: string | undefined = ''
  export let disabled: boolean = false
  export let placeholder: string | undefined = undefined
  export let value: string | undefined = defaultValue
  export let maxLength: number | undefined = undefined
  export let showCount: boolean = false

  let className = ''
  export { className as class }
  $: classList = classes(['adorn-textarea', className, { 'adorn-textarea-has-count': showCount }])

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

<div class={classList} class:bordered class:disabled>
  <textarea
    class="adorn-textarea-content"
    {placeholder}
    maxlength={maxLength}
    {disabled}
    {...$$restProps}
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
    on:mousemove>{value}</textarea
  >
  {#if showCount}
    <span class="adorn-textarea-count">{value?.length ?? 0} / {maxLength}</span>
  {/if}
</div>

<style lang="less" global>
  .adorn-textarea {
    color: var(--adorn-text-color);
    font-size: var(--adorn-font-size);
    transition: all 0.3s;
    width: 100%;
    padding: var(--adorn-padding-sm) 1px 1px var(--adorn-padding);
    border-radius: var(--adorn-radius-sm);
    position: relative;

    &-content {
      width: 100%;
      padding: 0 var(--adorn-padding) var(--adorn-padding-sm) 0;
      vertical-align: bottom;

      &::placeholder {
        color: var(--adorn-disabled-text-color);
      }
    }

    &.bordered {
      border: 1px solid var(--adorn-border-color);
    }

    &.disabled,
    &.disabled &-content {
      background-color: var(--adorn-disabled-bg-color);
      cursor: not-allowed;
    }

    &:not(.disabled):hover,
    &:not(.disabled):focus {
      border-color: var(--adorn-primary-color);
    }

    &-count {
      position: absolute;
      right: 10px;
      bottom: -6px;
      font-size: var(--adorn-font-size);
      display: inline-block;
      width: 100%;
      color: var(--adorn-disabled-text-color);
      text-align: right;
    }
  }
</style>
