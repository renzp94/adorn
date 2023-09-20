<script lang="ts">
  import classes from '@renzp/classes'
  import { onMount } from 'svelte'
  import type { Direction } from '../utils/types'

  let className = ''
  export { className as class }
  export let direction: Direction = 'vertical'
  let layoutEl: HTMLElement

  onMount(() => {
    const hasSidebar = Array.from(layoutEl.children).some(item =>
      item.className.includes('adorn-layout-sidebar')
    )

    direction = hasSidebar ? 'horizontal' : direction
  })

  $: classList = classes(['adorn-layout', className, `adorn-layout-${direction}`])
</script>

<section bind:this={layoutEl} {...$$restProps} class={classList}>
  <slot />
</section>

<style lang="less" global>
  .adorn-layout {
    display: flex;
    flex-direction: column;
    flex: auto;

    &-horizontal {
      flex-direction: row;
    }
  }
</style>
