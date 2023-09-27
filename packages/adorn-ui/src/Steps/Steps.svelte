<script lang="ts">
  import classes from '@renzp/classes'
  import type { Direction } from '../utils/types'
  import Item from './StepItem.svelte'
  import type { StepItem } from './types'
  import { Icon } from '..'

  export let current = 0
  export let direction: Direction = 'horizontal'
  export let items: StepItem[] = []
  export let labelPlacement: Direction = 'horizontal'
  export let progressDot = false
  export let size: 'default' | 'small' = 'default'

  let className = ''
  export { className as class }
  $: classList = classes([
    'adorn-step',
    className,
    `adorn-step--${direction}`,
    `adorn-step--${size}`,
    `adorn-step-label-${labelPlacement}`,
    { ['adorn-step--dot']: progressDot }
  ])

  $: getItemStatus = (index: number) => {
    if (current === index) {
      return 'active'
    }

    if (current > index) {
      return 'finish'
    }

    return 'wait'
  }
</script>

<div class={classList} {...$$restProps}>
  {#each items as item, index}
    {#if !item.icon}
      <Item status={getItemStatus(index)} {...item}>
        <span
          class={`adorn-step-item-${progressDot ? 'dot' : 'index'} ${getItemStatus(index)}`}
          class:dot={progressDot}
          slot="icon"
        >
          {#if !progressDot}
            {#if getItemStatus(index) === 'finish'}
              <Icon name="check" />
            {:else}
              {index + 1}
            {/if}
          {/if}
        </span>
      </Item>
    {:else}
      <Item status={getItemStatus(index)} {...item} />
    {/if}
  {/each}
</div>

<style lang="less" global>
  .adorn-step {
    width: 100%;
    display: flex;

    &--vertical {
      flex-direction: column;
    }

    &-item-index {
      padding: var(--adorn-padding);
      height: 32px;
      width: 32px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      flex: none;
      background-color: var(--adorn-bg-color);
      color: var(--adorn-text-color);

      &.active,
      &.finish {
        background-color: var(--adorn-primary-color);
        color: #fff;
      }
    }

    &-item-dot {
      position: relative;
      display: inline-block;
      padding: var(--adorn-padding-sm);
      height: 8px;
      width: 8px;
      border-radius: 50%;
      flex: none;
      background: var(--adorn-text-secondary);

      &::before,
      &::after {
        position: absolute;
        top: 3px;
        width: 9999px;
        height: 2px;
        background-color: var(--adorn-border-color);
        content: '';
      }

      &::before {
        right: 16px;
      }
      &::after {
        margin-left: 8px;
      }

      &.active,
      &.finish,
      &.active::before,
      &.finish::after {
        background-color: var(--adorn-primary-color);
      }
    }
  }
</style>
