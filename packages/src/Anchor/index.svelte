<script lang="ts">
  import classes from '@renzp/classes'
  import { Affix } from '..'
  import AnchorLink from './AnchorLink.svelte'
  import type { Direction } from '../utils/types'
  import { onMount } from 'svelte'
  import { setContext } from 'svelte'
  import { ANCHOR_DIRECTION } from '.'

  interface AnchorItem {
    key: string
    title: string
    href: string
  }

  export let affix = true
  export let items: AnchorItem[] = []
  export let direction: Direction = 'vertical'
  export let offsetTop = 0

  let activeLink = decodeURI(window.location.hash)

  $: setContext(ANCHOR_DIRECTION, direction)

  onMount(() => {
    const topList = items
      .map(item => {
        const offsetTop = (document.querySelector(item.href) as HTMLElement)?.offsetTop
        return {
          ...item,
          offsetTop
        }
      })
      .sort((a, b) => b.offsetTop - a.offsetTop)

    const onScroll = () => {
      const scrollTop = window.document.documentElement.scrollTop
      const target = topList.find(item => item.offsetTop <= scrollTop)
      activeLink = decodeURI(target?.href ?? window.location.hash)
    }
    window.addEventListener('scroll', onScroll)
  })

  let className: string = ''
  export { className as class }
  $: classList = classes(['adorn-anchor', className, `adorn-anchor--${direction}`])
</script>

{#if affix}
  <Affix target="body" offset={offsetTop}>
    <div class={classList} {...$$restProps}>
      {#each items as item (item.key)}
        <AnchorLink
          href={item.href}
          title={item.title}
          active={item.href === activeLink}
          on:click
        />
      {/each}
    </div>
  </Affix>
{:else}
  <div class={classList} {...$$restProps}>
    {#each items as item (item.key)}
      <AnchorLink href={item.href} title={item.title} active={item.href === activeLink} on:click />
    {/each}
  </div>
{/if}

<style lang="less" global>
  .adorn-anchor {
    display: flex;
    flex-direction: column;
    position: relative;
    padding-left: 2px;

    &::before {
      position: absolute;
      inset-inline-start: 0;
      height: 100%;
      content: '';
      border-left: 2px solid var(--adorn-border-color);
    }

    &--vertical {
      &::before {
        top: 0;
      }
    }

    &--horizontal {
      flex-direction: row;

      &::before {
        height: 0;
        width: 100%;
        bottom: 0;
        border-bottom: 2px solid var(--adorn-border-color);
      }
    }
  }
</style>
