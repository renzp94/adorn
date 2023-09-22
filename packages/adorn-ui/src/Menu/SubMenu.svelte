<script lang="ts">
  import classes from '@renzp/classes'
  import { Icon } from '..'
  import { default as Item } from './MenuItem.svelte'
  import type { IconName } from '../utils/types'
  import type { MenuContext, MenuItem } from './types'
  import { createEventDispatcher, getContext, tick } from 'svelte'
  import { MENU_CONTEXT } from '.'
  import type { Writable } from 'svelte/store'
  import { slide } from 'svelte/transition'
  import { flattenDeepByKey } from '../utils/tools'

  const dispatch = createEventDispatcher()

  export let key: string | undefined = undefined
  export let label: string | undefined = undefined
  export let title: string | undefined = undefined
  export let icon: IconName | undefined = undefined
  export let children: MenuItem[] = []
  export let disabled = false
  export let danger = false
  export let hasSubmenu = false
  export let triggerSubMenuAction: 'hover' | 'click' = 'hover'
  let open = false
  let itemClick = false

  const ctx = getContext<Writable<MenuContext>>(MENU_CONTEXT)

  $: active = !!flattenDeepByKey(children, 'children').find(item => item.key === $ctx.activeKey)
  $: {
    if (!itemClick) {
      open = !!(key && $ctx.openKeys?.includes(key))
    } else {
      itemClick = false
    }
  }
  $: openIcon = `arrow-${hasSubmenu ? 'right' : open ? 'up' : 'down'}-s`

  let className = ''
  export { className as class }
  $: classList = classes(['adorn-menu-submenu', className])

  const onItemClick = (target: MenuItem) => {
    if (target.disabled || $ctx.activeKey === target.key) {
      return
    }

    dispatch('itemClick', target.key)
    if (triggerSubMenuAction === 'click') {
      itemClick = true
      open = false
    }
  }
  const onSubmenuItemClick = (e: CustomEvent<string>) => {
    dispatch('itemClick', e.detail)

    if (triggerSubMenuAction === 'click') {
      itemClick = true
      open = false
    }
  }

  const onClick = () => {
    if (disabled) {
      return
    }
    open = !open
    dispatch('openChange', { key, open })
  }
  const onSubmenuOpenChange = (e: CustomEvent<{ key: string; open: boolean }>) => {
    dispatch('openChange', e.detail)
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

  let rootEl: HTMLElement
  const onWindowClick = ({ target }: any) => {
    if (triggerSubMenuAction === 'click') {
      if (open && rootEl && target && !rootEl.contains(target)) {
        open = false
      }
    }
  }
</script>

<svelte:window on:click={onWindowClick} />
<li
  bind:this={rootEl}
  class={classList}
  class:disabled
  class:active
  class:hasSubmenu
  on:mouseenter={onMouseEnter}
  on:mouseleave={onMouseLeave}
>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="adorn-menu-submenu-title" on:click={onClick}>
    <Item {label} {title} {icon} {disabled} {danger} />
    <span class="adorn-menu-submenu-open-icon">
      <Icon name={openIcon} size="18px" />
    </span>
  </div>
  {#if open}
    <div class="adorn-menu-submenu-container" transition:slide>
      {#each children as item (item.key)}
        {#if item?.children?.length}
          <svelte:self
            {...item}
            {triggerSubMenuAction}
            on:itemClick={onSubmenuItemClick}
            on:openChange={onSubmenuOpenChange}
            hasSubmenu={$ctx.mode === 'horizontal'}
          />
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
    margin-bottom: var(--adorn-padding-sm);

    &:last-child {
      margin-bottom: 0;
    }

    &-title {
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      padding-right: 12px;

      &:hover {
        color: var(--adorn-primary-color);
      }
    }

    &-open-icon {
      position: relative;
      bottom: 1px;
    }

    &.active > &-title {
      color: var(--adorn-primary-color);
    }

    &-container {
      display: inline-flex;
      flex-direction: column;
      background-color: var(--adorn-bg-color);
      border-radius: var(--adorn-radius);
    }

    &.disabled &-title {
      color: var(--adorn-disabled-text-color);
    }
  }

  :global(.adorn-menu--horizontal) {
    .adorn-menu-submenu {
      &-container {
        position: absolute;
        top: 42px;
        left: 0;
        z-index: 99;
        padding: var(--adorn-padding-sm) var(--adorn-padding);
        background-color: #fff;
        box-shadow: 0px 16px 24px 0px rgba(96, 97, 112, 0.16),
          0px 2px 8px 0px rgba(40, 41, 61, 0.04);

        .adorn-menu-submenu-title::before,
        .adorn-menu-submenu-title::after {
          content: '';
          height: 42px;
          width: var(--adorn-padding);
          position: absolute;
          top: var(--adorn-padding-sm);
        }
        .adorn-menu-submenu-title::before {
          left: 0;
        }
        .adorn-menu-submenu-title::after {
          right: 0;
        }
      }

      &.hasSubmenu {
        .adorn-menu-submenu-container {
          left: calc(100% + 8px);
          top: 0;

          &::before {
            position: absolute;
            top: 0;
            left: -8px;
            content: '';
            height: 100%;
            width: 8px;
          }
        }
      }
    }
  }

  :global(.adorn-menu--inline) {
    .adorn-menu-submenu-container {
      padding: 4px 12px 4px 20px;
    }
  }
</style>
