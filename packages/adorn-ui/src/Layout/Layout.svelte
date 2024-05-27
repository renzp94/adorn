<script lang="ts">
  import classes from '@renzp/classes'
  import { onMount } from 'svelte'
  import type { LayoutProps } from '../types'

  let { direction = 'vertical', class: className, children, ...props }: LayoutProps = $props()

  let layoutEl: HTMLElement

  onMount(() => {
    const hasSidebar = Array.from(layoutEl.children).some(item =>
      item.className.includes('adorn-layout-sidebar')
    )

    direction = hasSidebar ? 'horizontal' : direction
  })

  const classList = $derived(classes(['adorn-layout', className, `adorn-layout-${direction}`]))
</script>

<section bind:this={layoutEl} {...props} class={classList}>
  {@render children()}
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
