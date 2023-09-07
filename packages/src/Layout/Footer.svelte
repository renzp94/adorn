<script lang="ts">
  import classes from '@renzp/classes'

  let className = ''
  export { className as class }

  $: classList = classes(['adorn-layout-footer', className])
</script>

<footer class={classList} {...$$restProps}>
  <slot />
</footer>

<style lang="less" global>
  .adorn-layout-footer {
    padding: var(--adorn-padding-xxl);
  }
</style>
