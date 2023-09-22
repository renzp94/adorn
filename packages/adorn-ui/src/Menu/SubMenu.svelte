<script lang="ts">
  import classes from '@renzp/classes'
  import { Icon } from '..'
  import { default as Item } from './MenuItem.svelte'
  import type { IconName } from '../utils/types'
  import type { MenuContext, MenuItem } from './types'
  import { createEventDispatcher, getContext } from 'svelte'
  import { MENU_CONTEXT } from '.'
  import type { Writable } from 'svelte/store'
  import { slide } from 'svelte/transition'

  const dispatch = createEventDispatcher()

  export let key: string | undefined = undefined
  export let label: string | undefined = undefined
  export let title: string | undefined = undefined
  export let icon: IconName | undefined = undefined
  export let children: MenuItem[] = []
  export let disabled = false
  export let danger = false
  export let triggerSubMenuAction: 'hover' | 'click' = 'hover'
  let open = false

  const ctx = getContext<Writable<MenuContext>>(MENU_CONTEXT)

  $: active = !!children.find(item => item.key === $ctx.activeKey)
  $: {
    open = !!(key && $ctx.openKeys?.includes(key))
  }

  let className = ''
  export { className as class }
  $: classList = classes(['adorn-menu-submenu', className])

  const onItemClick = (target: MenuItem) => {
    if (target.disabled || $ctx.activeKey === target.key) {
      return
    }

    dispatch('itemClick', target.key)
  }

  const onClick = () => {
    if (disabled) {
      return
    }
    open = !open
    dispatch('openChange', { key, open })
  }

  $: isHoverOpen = !disabled && $ctx.mode === 'horizontal' && triggerSubMenuAction === 'hover'
  const onMouseEnter = () => {
    if (isHoverOpen) {
      open = true
    }
  }
  const onMouseLeave = () => {
    if (isHoverOpen) {
      open = false
    }
  }
</script>

<li
  class={classList}
  class:disabled
  class:active
  on:mouseenter={onMouseEnter}
  on:mouseleave={onMouseLeave}
>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="adorn-menu-submenu-title" on:click={onClick}>
    <Item {label} {title} {icon} {disabled} {danger} />
    <Icon name={`arrow-${open ? 'up' : 'down'}-s`} size="18px" />
  </div>
  {#if open}
    <div class="adorn-menu-submenu-container" transition:slide>
      {#each children as item (item.key)}
        {#if item?.children?.length}
          <svelte:self {...item} />
        {:else}
          <Item {...item} on:click={() => onItemClick(item)} />
        {/if}
      {/each}
    </div>
  {/if}
</li>

<style lang="less" global>
  .adorn-menu-submenu {
    display: inline-flex;
    flex-direction: column;

    &-title {
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      &:hover {
        color: var(--adorn-primary-color);
      }
    }

    &.active &-title {
      color: var(--adorn-primary-color);
    }

    &-container {
      display: inline-flex;
      flex-direction: column;
      padding: var(--adorn-padding);
      background-color: var(--adorn-bg-color);
      border-radius: var(--adorn-radius);
    }

    &.disabled &-title {
      color: var(--adorn-disabled-text-color);
    }
  }

  :global(.adorn-menu--horizontal) {
    .adorn-menu-submenu {
      &-title {
        margin-right: 16px;
      }

      &-container {
        position: absolute;
        top: 42px;
        left: 0;
        z-index: 99;
        background-color: #fff;
        box-shadow: 0px 16px 24px 0px rgba(96, 97, 112, 0.16),
          0px 2px 8px 0px rgba(40, 41, 61, 0.04);
      }
    }
  }
</style>
