<script lang="ts">
  import classes from '@renzp/classes'

  let className = ''
  export { className as class }

  $: classList = classes(['adorn-layout-header', className])
</script>

<header class={classList} {...$$restProps}>
  <slot />
</header>

<style lang="less" global>
  .adorn-layout-header {
    height: 64px;
    line-height: 64px;
  }
</style>
