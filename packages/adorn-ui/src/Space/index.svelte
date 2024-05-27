<script lang="ts">
  import classes from '@renzp/classes'
  import type { Size, SpaceProps } from '../types'

  let {
    align,
    direction = 'horizontal',
    size = 'small',
    wrap,
    class: className,
    style,
    children,
    split,
    ...props
  }: SpaceProps = $props()

  const getGap = (size: Size | number) => {
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

  const styles = $derived.by(() => {
    let gapValue: string
    if (size instanceof Array) {
      let [col, row] = size
      gapValue = `${getGap(col)} ${getGap(row)}`
    } else {
      gapValue = getGap(size)
    }

    return classes([{ [`gap: ${gapValue};`]: gapValue }, style]) ?? ''
  })

  const classList = $derived(
    classes([
      'adorn-space',
      className,
      { [`adorn-space-${align}`]: align },
      { [`adorn-space-split`]: split },
      `adorn-space-${direction}`
    ])
  )

  let childElementList = $state.frozen<Element[]>([])
  const ready = (node: HTMLElement) => {
    childElementList = Array.from(node.children)
  }
</script>

<div use:ready {...props} class={classList} class:wrap style={styles}>
  {#if !split || childElementList.length === 0}
    {@render children()}
  {:else}
    {#each childElementList as item, index}
      {#if index !== childElementList.length - 1}
        {@html item.outerHTML}
        {@render split()}
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
    normal: normal;
    top: flex-start;
    middle: center;
    bottom: flex-end;
    baseline: baseline;
  };
</style>
