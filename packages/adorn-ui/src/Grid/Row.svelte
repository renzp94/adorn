<script lang="ts">
  import classes from '@renzp/classes'
  import { prefixConcat } from '../utils/tools'
  import { CONTEXT_ROW_GUTTER } from './index'
  import { setContext } from 'svelte'

  let className = ''
  export { className as class }
  export let align: 'top' | 'middle' | 'bottom' | 'stretch' = 'top'
  export let gutter: number | number[] | undefined = undefined
  export let style: string | undefined = undefined
  export let justify:
    | 'start'
    | 'end'
    | 'center'
    | 'space-around'
    | 'space-between'
    | 'space-evenly' = 'start'
  export let wrap: boolean = true

  let styles: string = ''

  $: {
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
  }
  $: classLst = classes([
    'adorn-row',
    className,
    { [`adorn-row-${align}`]: align },
    { [`adorn-row-${justify}`]: justify }
  ])
</script>

<div {...$$restProps} class={classLst} class:wrap style={styles}>
  <slot />
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
