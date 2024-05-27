<script lang="ts">
  import classes from '@renzp/classes'
  import { prefixConcat } from '../utils/tools'
  import { CONTEXT_ROW_GUTTER } from './index'
  import { setContext } from 'svelte'
  import type { RowProps } from '../types'

  let {
    align = 'top',
    gutter,
    justify = 'start',
    wrap = true,
    class: className,
    style,
    children,
    ...props
  }: RowProps = $props()

  let styles: string = $state('')
  $effect(() => {
    if (typeof gutter === 'number') {
      styles = `${prefixConcat(gutter, 'margin: ', `0 -${(gutter as number) / 2}px;`)}`
      setContext(CONTEXT_ROW_GUTTER, gutter)
    }

    if (gutter instanceof Array) {
      const [colGutter, rowGutter] = gutter
      setContext(CONTEXT_ROW_GUTTER, colGutter)
      styles = `${prefixConcat(
        colGutter,
        'margin: ',
        `0 -${(colGutter as number) / 2}px;`
      )}${prefixConcat(rowGutter, 'row-gap: ', `${rowGutter}px;`)}`
    }

    styles += style
  })

  const classList = $derived(
    classes([
      'adorn-row',
      className,
      { [`adorn-row-${align}`]: align },
      { [`adorn-row-${justify}`]: justify }
    ])
  )
</script>

<div class:wrap {...props} class={classList} style={styles}>
  {@render children()}
</div>

<style lang="less" global>
  @justifyList: {
    start: flex-start;
    end: flex-end;
    center: center;
    space-around: space-around;
    space-between: space-between;
    space-evenly: space-evenly;
  };
  @alignItemsList: {
    normal: normal;
    top: flex-start;
    middle: center;
    bottom: flex-end;
    stretch: stretch;
  };

  .adorn-row {
    display: flex;
    flex-flow: row nowrap;
    min-width: 0;
    font-size: var(--adorn-font-size);

    &.wrap {
      flex-wrap: wrap;
    }

    each(@justifyList, {
      &-@{key} {
        justify-content: @value;
      }
    });
    each(@alignItemsList, {
      &-@{key} {
        align-items: @value;
      }
    });
  }
</style>
