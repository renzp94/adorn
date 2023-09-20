<script lang="ts">
  import classes from '@renzp/classes'
  import type { Direction } from '../utils/types'
  const getGap = (size: Size) => {
    const gaps = {
      small: 8,
      middle: 16,
      large: 24
    }
    let gap: string = ''
    if (typeof size === 'number') {
      gap = `${size}px`
    } else if (typeof size === 'string') {
      gap = `${gaps[size]}px`
    }

    return gap
  }

  let className = ''
  export { className as class }
  export let align: 'start' | 'end' | 'center' | 'baseline' | undefined = undefined
  export let direction: Direction = 'horizontal'
  type Size = 'small' | 'middle' | 'large' | number
  export let size: Size | [Size, Size] = 'small'
  export let style: string | undefined = undefined
  export let wrap: boolean = false

  let styles: string
  $: {
    let gapValue: string
    if (size instanceof Array) {
      let [col, row] = size
      gapValue = `${getGap(col)} ${getGap(row)}`
    } else {
      gapValue = getGap(size)
    }

    styles = classes([{ [`gap: ${gapValue};`]: gapValue }, style]) ?? ''
  }

  $: classList = classes([
    'adorn-space',
    className,
    { [`adorn-space-${align}`]: align },
    { [`adorn-space-split`]: $$slots.split },
    `adorn-space-${direction}`
  ])

  let children: Element[] = []
  const ready = (node: HTMLElement) => {
    children = Array.from(node.children)
  }
</script>

<div use:ready {...$$restProps} class={classList} class:wrap style={styles}>
  {#if !$$slots.split || children.length === 0}
    <slot />
  {:else}
    {#each children as item, index}
      {#if index !== children.length - 1}
        {@html item.outerHTML}
        <slot name="split" />
      {:else}
        {@html item.outerHTML}
      {/if}
    {/each}
  {/if}
</div>

<style lang="less" global>
  .adorn-space {
    display: inline-flex;
    flex-wrap: nowrap;

    &-vertical {
      flex-direction: column;
    }

    &-split {
      align-items: center;
    }

    &.wrap {
      flex-wrap: wrap;
    }

    each(@alignItemsList, {
      &-@{key} {
        align-items: @value;
      }
    });
  }

  @alignItemsList: {
    start: flex-start;
    center: center;
    end: flex-end;
    baseline: baseline;
  };
</style>
