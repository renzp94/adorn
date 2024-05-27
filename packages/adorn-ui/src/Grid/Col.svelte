<script lang="ts">
  import classes from '@renzp/classes'
  import { prefixConcat } from '../utils/tools'
  import { CONTEXT_ROW_GUTTER } from './index'
  import { getContext } from 'svelte'
  import type { ColProps } from '../types'
  import { isUnDef } from '@renzp/utils'

  let {
    flex,
    offset,
    order,
    push,
    pull,
    span,
    class: className,
    style,
    children,
    ...props
  }: ColProps = $props()

  const gutter = $derived(getContext(CONTEXT_ROW_GUTTER))

  const styles = $derived(
    classes([
      prefixConcat(gutter, 'padding: 0 ', `${(gutter as number) / 2}px;`),
      prefixConcat(flex, 'flex: ', `${flex};`),
      prefixConcat(order, 'order: ', `${order};`),
      style
    ])
  )
  const classList = $derived(
    classes([
      'adorn-col',
      className,
      { [`adorn-col-offset-${offset}`]: !isUnDef(offset) },
      { [`adorn-col-push-${push}`]: !isUnDef(push) },
      { [`adorn-col-pull-${pull}`]: !isUnDef(pull) },
      { [`adorn-col-${span}`]: !isUnDef(span) }
    ])
  )
</script>

<div {...props} class={classList} style={styles}>
  {@render children()}
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

  .col-loop(@counter) when (@counter>0) {
    &-@{counter} {
      max-width: calc(@counter / 24 * 100%);
      flex: 0 0 calc(@counter / 24 * 100%);
    }

    .col-loop((@counter)-1);
  }

  .offset-loop(@counter) when (@counter>0) {
    &-offset-@{counter} {
      margin-inline-start: calc(@counter / 24 * 100%);
    }

    .offset-loop((@counter)-1);
  }

  .push-loop(@counter) when (@counter>0) {
    &-push-@{counter} {
      inset-inline-start: calc(@counter / 24 * 100%);
    }

    .push-loop((@counter)-1);
  }

  .pull-loop(@counter) when (@counter>0) {
    &-pull-@{counter} {
      inset-inline-end: calc(@counter / 24 * 100%);
    }

    .pull-loop((@counter)-1);
  }
</style>
