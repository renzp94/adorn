<script lang="ts">
  import classes from '@renzp/classes'
  import type { IconName } from '../utils/types'
  import { Icon } from '..'
  import { createEventDispatcher, getContext } from 'svelte'
  import { MENU_CONTEXT } from '.'
  import type { Writable } from 'svelte/store'
  import type { MenuContext } from './types'

  const dispatch = createEventDispatcher()

  export let key: string | undefined = undefined
  export let label: string | undefined = undefined
  export let title: string | undefined = undefined
  export let icon: IconName | undefined = undefined
  export let disabled = false
  export let danger = false

  const ctx = getContext<Writable<MenuContext>>(MENU_CONTEXT)
  $: active = $ctx.activeKey === key

  let className = ''
  export { className as class }
  $: classList = classes(['adorn-menu-item', className, { 'adorn-menu-item--active': active }])

  const onClick = () => {
    if (disabled || active) {
      return
    }

    dispatch('click', key)
  }
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<li class={classList} class:disabled class:danger {title} {...$$restProps} on:click={onClick}>
  {#if icon}
    <span class="adorn-menu-item-icon">
      <Icon name={icon} />
    </span>
  {/if}
  {#if label}
    <span class="adorn-menu-item-text">{label}</span>
  {/if}
</li>

<style lang="less" global>
  .adorn-menu-item {
    display: inline-flex;
    align-items: center;
    list-style: none;
    font-size: 14px;
    margin-top: 0;
    margin-right: 16px;
    cursor: pointer;
    line-height: 42px;
    border-radius: var(--adorn-radius);
    transition: background-color 0.2s ease-out;

    &:hover {
      color: var(--adorn-primary-color);
    }

    &--active {
      color: var(--adorn-primary-color);
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 100%;
        height: 2px;
        border-radius: var(--adorn-radius);
        background-color: var(--adorn-primary-color);
      }

      &.disabled::after {
        opacity: 0.3;
      }
    }

    &.disabled {
      cursor: not-allowed;
      color: var(--adorn-disabled-text-color);
    }

    &:last-child {
      margin-right: 0;
    }

    &-icon {
      margin-right: 8px;
    }
  }

  :global(.adorn-menu--inline),
  :global(.adorn-menu--horizontal .adorn-menu-submenu) {
    .adorn-menu-item {
      padding: 0 12px;
      margin-right: 0;

      &--active {
        background-color: var(--adorn-primary-color);
        border-radius: var(--adorn-radius);
        color: #fff;

        &::after {
          display: none;
        }
      }
    }
  }
</style>
