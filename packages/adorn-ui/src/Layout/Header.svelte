<script lang="ts">
  import classes from '@renzp/classes'
  import type { ComponentBaseProps } from '../types'

  let { class: className, children, ...props }: ComponentBaseProps = $props()

  const classList = $derived(classes(['adorn-layout-header', className]))
</script>

<header {...props} class={classList}>
  {@render children()}
</header>

<style lang="less" global>
  .adorn-layout-header {
    height: 64px;
    line-height: 64px;
  }
</style>
