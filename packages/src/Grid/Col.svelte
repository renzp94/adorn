<script lang="ts">
  import classes from '@renzp/classes'
  import { isUndef, prefixConcat } from '../utils/tools'
  import { CONTEXT_ROW_GUTTER } from './index'
  import { getContext } from 'svelte'

  let className = ''
  export { className as class }
  export let flex: string | number | undefined = undefined
  export let offset: number | undefined = undefined
  export let order: number | undefined = undefined
  export let push: number | undefined = undefined
  export let pull: number | undefined = undefined
  export let span: number | undefined = undefined
  export let style: string | undefined = undefined

  let gutter = getContext(CONTEXT_ROW_GUTTER)

  $: styles = classes([
    prefixConcat(gutter, 'padding: 0 ', `${(gutter as number) / 2}px;`),
    prefixConcat(flex, 'flex: ', `${flex};`),
    prefixConcat(order, 'order: ', `${order};`),
    style
  ])
  $: classLst = classes([
    'adorn-col',
    className,
    { [`adorn-col-offset-${offset}`]: !isUndef(offset) },
    { [`adorn-col-push-${push}`]: !isUndef(push) },
    { [`adorn-col-pull-${pull}`]: !isUndef(pull) },
    { [`adorn-col-${span}`]: !isUndef(span) }
  ])
</script>

<div {...$$restProps} class={classLst} style={styles}>
  <slot />
</div>

<style lang="less" global>
  .adorn-col {
    font-size: var(--adorn-font-size);
    max-width: 100%;
    position: relative;
    .col-loop(24);
    .offset-loop(24);
    .push-loop(24);
    .pull-loop(24);
  }

  .col-loop(@counter) when (@counter>0){
    &-@{counter}{
      max-width: calc(@counter / 24 * 100%);
      flex: 0 0 calc(@counter / 24 * 100%);
    }

    .col-loop((@counter)-1);
  }

  .offset-loop(@counter) when (@counter>0){
    &-offset-@{counter}{
      margin-inline-start: calc(@counter / 24 * 100%);
    }

    .offset-loop((@counter)-1);
  }

  .push-loop(@counter) when (@counter>0){
    &-push-@{counter}{
      inset-inline-start: calc(@counter / 24 * 100%);
    }

    .push-loop((@counter)-1);
  }

  .pull-loop(@counter) when (@counter>0){
    &-pull-@{counter}{
      inset-inline-end: calc(@counter / 24 * 100%);
    }

    .pull-loop((@counter)-1);
  }
</style>
