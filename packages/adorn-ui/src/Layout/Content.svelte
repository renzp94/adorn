<script lang="ts">
  import classes from '@renzp/classes'
  import type { ComponentBaseProps } from '../types'

  let { class: className, children, ...props }: ComponentBaseProps = $props()

  const classList = $derived(classes(['adorn-layout-content', className]))
</script>

<main {...props} class={classList}>
  {@render children()}
</main>

<style lang="less" global>
  .adorn-layout-content {
    flex: auto;
  }
</style>
