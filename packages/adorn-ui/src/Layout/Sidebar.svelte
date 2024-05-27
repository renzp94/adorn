<script lang="ts">
  import classes from '@renzp/classes'
  import type { ComponentBaseProps } from '../types'

  let { class: className, children, ...props }: ComponentBaseProps = $props()

  const classList = $derived(classes(['adorn-layout-sidebar', className]))
</script>

<sidebar {...props} class={classList}>
  {@render children()}
</sidebar>
