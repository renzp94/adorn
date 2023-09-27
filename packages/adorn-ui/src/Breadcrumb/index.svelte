<script lang="ts">
  import classes from '@renzp/classes'
  import type { IconName } from '../utils/types'
  import { Icon } from '..'
  import { createEventDispatcher } from 'svelte'

  interface BreadcrumbItem {
    title?: string
    path?: string
    icon?: IconName
    disabled?: boolean
  }
  export let items: BreadcrumbItem[] = []
  let className = ''
  export { className as class }
  $: classLst = classes(['adorn-breadcrumb', className])

  const dispatch = createEventDispatcher()
  const onClick = (target: BreadcrumbItem) => dispatch('click', target)
</script>

<div class={classLst}>
  {#each items as item, index}
    <span class="adorn-breadcrumb__item" class:disabled={item.disabled} class:has-icon={item.icon}>
      {#if $$slots.item}
        <slot name="item" {item} />
      {:else}
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <svelte:element
          this={item.path ? 'a' : 'span'}
          class="adorn-breadcrumb__item-content"
          href={item.disabled ? undefined : item.path}
          on:click={item.disabled ? undefined : () => onClick(item)}
        >
          {#if item.icon}
            <Icon name={item.icon} />
          {/if}
          {#if item.title}
            <span class="adorn-breadcrumb__title">{item.title}</span>
          {/if}
        </svelte:element>
      {/if}
    </span>
    {#if index < items.length - 1}
      <span class="adorn-breadcrumb__separator">
        <slot name="separator">/</slot>
      </span>
    {/if}
  {/each}
</div>

<style lang="less" global>
  .adorn-breadcrumb {
    color: var(--adorn-disabled-text-color);

    &__item {
      color: var(--adorn-disabled-text-color);
      display: inline-flex;
      align-items: center;
      justify-content: center;

      &-content {
        text-decoration: none;
        color: inherit;
      }

      &.disabled {
        color: var(--adorn-disabled-text-color);
        cursor: not-allowed;
      }

      &.has-icon .adorn-breadcrumb__title {
        margin-left: 2px;
      }

      &:not(.disabled):hover,
      &:not(.disabled):active,
      &:not(.disabled):hover &-content,
      &:not(.disabled):active &-content {
        color: var(--adorn-text-color);
      }

      &:last-child,
      &:last-child &-content {
        color: var(--adorn-text-color);
      }
    }

    &__separator {
      padding: 0 4px;
    }
  }
</style>
