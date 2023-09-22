<script lang="ts">
  import { default as Item } from './MenuItem.svelte'
  import type { MenuContext, MenuItem } from './types'
  import type { Direction, IconName } from '../utils/types'
  import classes from '@renzp/classes'
  import { createEventDispatcher, onMount, setContext } from 'svelte'
  import { Icon } from '..'
  import { throttle, uniq, values } from 'lodash-es'
  import SubMenu from './SubMenu.svelte'
  import { MENU_CONTEXT } from '.'
  import { writable, type Writable } from 'svelte/store'

  const dispatch = createEventDispatcher()

  export let defaultOpenKeys: string[] | undefined = undefined
  export let defaultActive: string | undefined = undefined
  export let inlineCollapsed = false
  export let inlineIndent = 24
  export let items: MenuItem[] = []
  export let mode: Direction | 'inline' = 'vertical'
  export let openKeys: string[] | undefined = defaultOpenKeys
  export let selectable = true
  export let active: string | undefined = defaultActive
  export let triggerSubMenuAction: 'hover' | 'click' = 'hover'

  const ctx = writable<MenuContext>({ activeKey: active, openKeys: openKeys ?? [], mode })
  $: setContext<Writable<MenuContext>>(MENU_CONTEXT, ctx)

  let className = ''
  export { className as class }
  $: classList = classes([
    'adorn-menu',
    className,
    `adorn-menu--${mode}`,
    { 'adorn-menu--no-scroll': scrollCount === 0 }
  ])

  let rootEl: HTMLElement
  let rootWidth: number
  let scrollCount: number = -1
  let scrollIndex = 0

  $: {
    if (mode === 'horizontal' && rootWidth) {
      const children = Array.from(
        (rootEl.querySelectorAll('.adorn-menu-item') as unknown as HTMLElement[]) ?? []
      )
      let childWidth = children.reduce(
        (prev, child) => prev + child.getBoundingClientRect().width,
        0
      )

      scrollCount = childWidth > rootWidth ? Math.floor(childWidth / (rootWidth / 2)) : 0
    }
  }

  onMount(() => {
    const onResize = () => {
      rootWidth = rootEl.getBoundingClientRect().width
    }
    onResize()
    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  })

  const onItemClick = (e: CustomEvent<string>) => {
    ctx.update(val => ({ ...val, activeKey: e.detail }))
    dispatch('click', e.detail)
  }
  const onOpenChange = (e: CustomEvent<{ key: string; open: boolean }>) => {
    const { key, open } = e.detail
    ctx.update(val => ({
      ...val,
      openKeys: open ? uniq([...val.openKeys, key]) : val.openKeys.filter(item => item !== key)
    }))
    dispatch('openChange', $ctx.openKeys)
  }
  const onScrollPrev = throttle(() => {
    if (scrollIndex === 0) {
      return
    }
    // 滚动距离
    let scrollWidth = rootWidth / 2
    // 剩余距离
    const width = scrollWidth * scrollIndex

    // 如果width小于rootWidth则说明不够滚动两次，则这次直接全部滚动
    if (width < rootWidth) {
      scrollWidth = rootWidth
    }
    rootEl.scrollBy({
      left: -scrollWidth,
      behavior: 'smooth'
    })
    scrollIndex--
  }, 500)
  const onScrollNext = throttle(() => {
    if (scrollIndex >= scrollCount) {
      return
    }

    // 滚动距离
    let scrollWidth = rootWidth / 2
    // 剩余距离
    const width = scrollWidth * (scrollCount - (scrollIndex + 1))
    // 如果width小于rootWidth则说明不够滚动两次，则这次直接全部滚动
    if (width < rootWidth) {
      scrollWidth = rootWidth
    }
    rootEl.scrollBy({
      left: scrollWidth,
      behavior: 'smooth'
    })
    scrollIndex++
  }, 500)
</script>

<div class={classList} {...$$restProps}>
  {#if scrollIndex > 0}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <span class="adorn-menu-arrow adorn-menu--prev" on:click={onScrollPrev}>
      <Icon name="arrow-left-circle" size="24px" />
    </span>
  {/if}
  <ul bind:this={rootEl} class="adorn-menu-container">
    {#each items as item (item.key)}
      {#if item?.children?.length}
        <SubMenu
          {...item}
          on:itemClick={onItemClick}
          on:openChange={onOpenChange}
          {triggerSubMenuAction}
        />
      {:else}
        <Item {...item} on:click={onItemClick} />
      {/if}
    {/each}
  </ul>
  <!-- {#if scrollIndex < scrollIndexList.length - 1} -->
  {#if scrollIndex < scrollCount - 1}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <span class="adorn-menu-arrow adorn-menu--next" on:click={onScrollNext}>
      <Icon name="arrow-right-circle" size="24px" />
    </span>
  {/if}
</div>

<style lang="less" global>
  .adorn-menu {
    display: inline-block;
    position: relative;
    border-bottom: 1px solid var(--adorn-border-color);

    &--horizontal {
      height: 42px;
      width: 100%;
    }

    &--no-scroll {
      width: auto;
    }

    &-container {
      padding: 0;
      list-style: none;
      margin: 0;
      display: inline-block;
    }
    &--vertical,
    &--inline {
      border: none;
    }

    &--vertical &-container,
    &--inline &-container {
      display: inline-flex;
      flex-direction: column;
    }

    &--horizontal &-container {
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
    }

    &-arrow {
      position: absolute;
      top: 0;
      padding-top: 10px;
      height: 42px;
      color: var(--adorn-disabled-text-color);
      border-bottom: 1px solid var(--adorn-border-color);
      cursor: pointer;
      background-color: #fff;
      z-index: 1;

      &:hover {
        color: var(--adorn-primary-color);
      }
    }

    &--prev {
      left: 0;
      padding-right: 16px;
    }

    &--next {
      right: 0;
      padding-left: 16px;
    }
  }
</style>
