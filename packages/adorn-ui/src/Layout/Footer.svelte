<script lang="ts">
  import classes from '@renzp/classes'
  import type { ComponentBaseProps } from '../types'

  let { class: className, children, ...props }: ComponentBaseProps = $props()

  const classList = $derived(classes(['adorn-layout-footer', className]))
</script>

<footer {...props} class={classList}>
  {@render children()}
</footer>

<style lang="less" global>
  .adorn-layout-footer {
    padding: var(--adorn-padding-xxl);
  }
</style>
