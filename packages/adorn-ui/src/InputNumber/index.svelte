<script lang="ts">
  import classes from '@renzp/classes'
  import { Icon, Input } from '../index'
  import type { IconName, Size } from '../utils/types'
  import { createEventDispatcher } from 'svelte'
  import type { KeyboardEventHandler } from 'svelte/elements'
  import { plus, isGreat, isLess, isGreatEqual, isLessEqual } from '@renzp/number-correct'
  import { isUnDef } from '@renzp/utils'
  const dispatch = createEventDispatcher()
  type Controls = { upIconName: IconName; downIconName: IconName }

  export let allowClear = false
  export let bordered = true
  export let controls: boolean | Controls = true
  export let defaultValue: string | undefined = undefined
  export let disabled: boolean = false
  export let formatter: ((value: string | undefined) => string) | undefined = undefined
  export let keyboard = true
  export let max: string | number | undefined = undefined
  export let min: string | number | undefined = undefined
  export let placeholder: string | undefined = undefined
  export let isParse = !!formatter
  export let value: string | undefined = defaultValue
  export let id: string | undefined = undefined
  export let maxLength: number | undefined = undefined
  export let precision: number | undefined = undefined
  export let step: number = 1
  export let size: Size = 'middle'

  const numberFilter = (v: string | undefined) => v?.replace(/[^-0-9\.]/g, '')

  const parseNumber = (v: string | undefined) => (!isUnDef(v) ? numberFilter(v) : undefined)
  const formatterStr = (v: string | undefined) => (formatter ? formatter(v) : v?.toString())

  let model: string | undefined
  $: model = formatterStr(value)

  let className = ''
  export { className as class }
  $: classList = classes([
    'adorn-input-number',
    className,
    `adorn-input-number--${size}`,
    { ['has-addon']: $$slots.addonBefore || $$slots.addonAfter },
    { ['has-only-addon-before']: $$slots.addonBefore && !$$slots.addonAfter },
    { ['has-only-addon-after']: $$slots.addonAfter && !$$slots.addonBefore }
  ])

  $: upIconName = (controls as Controls)?.upIconName ?? 'arrow-up-s'
  $: downIconName = (controls as Controls)?.downIconName ?? 'arrow-down-s'
  $: upDisabled = value !== undefined && max && isGreatEqual(value, max)
  $: downDisabled = value !== undefined && min && isLessEqual(value, min)

  const getRangeValue = (
    v: string,
    max: string | number | undefined,
    min: string | number | undefined
  ) => {
    let rangeValue = v
    if (max !== undefined && max !== null) {
      rangeValue = isGreat(rangeValue, max) ? max.toString() : rangeValue
    }
    if (min !== undefined && min !== null) {
      rangeValue = isLess(rangeValue, min) ? min.toString() : rangeValue
    }

    return rangeValue
  }

  const onStep = (type: 'up' | 'down') => {
    let v = model ? model : '0'
    v = plus(numberFilter(v) as string, type === 'up' ? step : -step)
    value = getRangeValue(v, max, min)

    dispatch('step', { value, type })
    dispatch('change', isParse ? value : model)
  }

  const onKeyup: KeyboardEventHandler<any> = e => {
    const { key } = e
    if (keyboard && ['ArrowUp', 'ArrowDown'].includes(key)) {
      onStep(key === 'ArrowUp' ? 'up' : 'down')
    }

    dispatch('keyup', key)
  }

  const onKeydown: KeyboardEventHandler<any> = e => {
    const { key } = e
    if (keyboard && ['ArrowUp', 'ArrowDown'].includes(key)) {
      e.preventDefault()
    }
    dispatch('keyup', key)
  }

  const getPassValue = (v: string) => {
    // 替换中文小数点
    let val = v.replace('。', '.')
    // 只能输入-、0-9、.
    val = val?.replace(/[^-0-9\.]/g, '')
    // 有负号且只能有一个，而且不在第一个则移除
    const hasMinusSign = v.includes('-')
    if (hasMinusSign) {
      val = val.replace(/-+/g, (_, offset) => (offset === 0 ? '-' : ''))
    }
    // 有且只能有一个小数点，而且不能在第一位
    const decimalPointCount = val.match(/\./g)?.length ?? 0
    const hasDecimalPoint = decimalPointCount > 0
    // 如果精度为0则只能输入整数
    if (precision === 0 && hasDecimalPoint) {
      return val
    }
    // 存在小数点
    if (hasDecimalPoint) {
      // 小数点在第一位则移除
      if (val.indexOf('.') === 0) {
        val = val.replace('.', '')
      }
      // 多个小数点则移除一个
      if (decimalPointCount > 1) {
        const [integer, decimal] = val.split('.')
        val = `${integer}.${decimal}`
      }
      if (precision && precision > 0) {
        let [integer, decimal] = val.split('.')
        decimal = decimal.slice(0, precision)
        val = `${integer}.${decimal}`
      }
    }

    return val
  }

  const validateNumber = (v: string) => /^[-\d.]+$/.test(v)
  const validateMinusSign = (v: string) => {
    const count = v.match(/\-/g)?.length ?? 0
    // 不含-✅
    if (count === 0) {
      return true
    }
    // 只有一个且在首位✅
    if (count === 1 && v.indexOf('-') === 0) {
      return true
    }

    return false
  }
  const validateDecimalPoint = (v: string) => {
    const count = v.match(/\./g)?.length ?? 0
    // 不含小数点✅
    if (count === 0) {
      return true
    }
    // 有小数点且不在首位✅
    if (count === 1 && v.indexOf('.') > 0) {
      return true
    }

    return false
  }
  const isValidator = (v: string) =>
    validateMinusSign(v) && validateDecimalPoint(v) && validateNumber(v)

  const onInput = (e: CustomEvent<string>) => {
    value = e.detail ? getPassValue(getRangeValue(e.detail, max, min)) : e.detail
    model = formatterStr(value)
    // 如果是有效输入才触发input事件
    if (!e.detail || isValidator(e.detail)) {
      dispatch('input', isParse ? value : model)
    }
    dispatch('input', isParse ? value : model)
  }
  const onChange = () => {
    // 此处主要是处理input事件中最后一位拼接的小数点
    value = parseNumber(value?.toString())
    dispatch('change', isParse ? value : model)
  }
</script>

<div class={classList} {...$$restProps} class:disabled>
  <Input
    {allowClear}
    {bordered}
    defaultValue={defaultValue?.toString()}
    {disabled}
    {placeholder}
    bind:value={model}
    {id}
    {maxLength}
    {size}
    type="text"
    on:input={onInput}
    on:compositionstart
    on:compositionend
    on:change={onChange}
    on:blur
    on:focus
    on:keyup={onKeyup}
    on:keydown={onKeydown}
    on:keypress
    on:mouseenter
    on:mouseleave
    on:mousemove
  >
    <slot name="prefix" slot="prefix" />
    <div class="adorn-input-number-arrow" slot="suffix">
      {#if controls}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="arrow-item" class:disabled={upDisabled} on:click={() => onStep('up')}>
          <Icon name={upIconName} size={size === 'small' ? '6px' : undefined} />
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="arrow-item" class:disabled={downDisabled} on:click={() => onStep('down')}>
          <Icon name={downIconName} size={size === 'small' ? '6px' : undefined} />
        </div>
      {/if}
    </div>
    <slot name="addonBefore" slot="addonBefore" />
    <slot name="addonAfter" slot="addonAfter" />
  </Input>
</div>

<style lang="less" global>
  .adorn-input-number {
    :global(.adorn-input-wrapper.bordered .adorn-input) {
      border-radius: var(--adorn-radius-sm);
      position: relative;
    }

    &.has-addon {
      :global(.adorn-input-wrapper.bordered .adorn-input) {
        border-radius: 0;
      }
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

    &-arrow {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      opacity: 0;
      transition: opacity 0.3s;
    }

    &:hover :global(.adorn-input-wrapper.bordered .adorn-input) {
      padding-right: 24px;
    }
    &:not(.disabled):hover &-arrow {
      opacity: 1;
    }

    .arrow-item {
      height: 50%;
      width: 24px;
      text-align: center;
      line-height: 14px;
      border-left: 1px solid var(--adorn-border-color);
      cursor: pointer;
      color: var(--adorn-disabled-text-color);
      transition: color 0.3s;

      &:not(.disabled):hover {
        color: var(--adorn-primary-color);
      }

      &.disabled {
        cursor: not-allowed;
      }

      &:first-child {
        border-radius: 0 var(--adorn-radius-sm) 0 0;
        border-bottom: 1px solid var(--adorn-border-color);
      }

      &:last-child {
        border-radius: 0 0 var(--adorn-radius-sm) 0;
      }
    }

    &--small .arrow-item {
      line-height: 6px;
    }
  }
</style>
