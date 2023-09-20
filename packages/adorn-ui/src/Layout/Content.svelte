<script lang="ts">
  import classes from '@renzp/classes'

  let className = ''
  export { className as class }

  $: classList = classes(['adorn-layout-content', className])
</script>

<main class={classList} {...$$restProps}>
  <slot />
</main>

<style lang="less" global>
  .adorn-layout-content {
    flex: auto;
  }
</style>
