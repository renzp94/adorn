<script lang="ts">
  import classes from '@renzp/classes'

  let className = ''
  export { className as class }

  $: classList = classes(['adorn-layout-sidebar', className])
</script>

<sidebar class={classList} {...$$restProps}>
  <slot />
</sidebar>
