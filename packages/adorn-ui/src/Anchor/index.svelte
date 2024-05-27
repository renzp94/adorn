<script lang="ts">
  import classes from '@renzp/classes'
  import { Affix } from '..'
  import AnchorLink from './AnchorLink.svelte'
  import { onMount } from 'svelte'
  import type { AnchorProps } from '../types'

  let {
    affix = true,
    items = [],
    direction = 'vertical',
    offsetTop = 0,
    class: className,
    onItemClick,
    ...props
  }: AnchorProps = $props()

  let activeLink = $state(decodeURI(window.location.hash))

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

  const classList = $derived(
    classes(['adorn-anchor', className, { [`adorn-anchor--${direction}`]: direction }])
  )
</script>

{#snippet render()}
  <div {...props} class={classList}>
    {#each items as item (item.key)}
      <AnchorLink
        href={item.href}
        title={item.title}
        active={item.href === activeLink}
        onclick={() => onItemClick?.(item)}
      />
    {/each}
  </div>
{/snippet}

{#if affix}
  <Affix target="body" offset={offsetTop}>
    {@render render()}
  </Affix>
{:else}
  {@render render()}
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

      :global(.adorn-anchor-link.active::before) {
        top: 0;
        left: -2px;
        height: 100%;
        border-left: 2px solid var(--adorn-primary-color);
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

      :global(.adorn-anchor-link.active::before) {
        bottom: 0;
        left: 16px;
        width: calc(100% - 16px);
        border-bottom: 2px solid var(--adorn-primary-color);
      }
    }
  }
</style>
