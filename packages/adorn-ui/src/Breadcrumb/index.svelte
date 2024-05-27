<script lang="ts">
  import classes from '@renzp/classes'
  import { Icon } from '..'
  import { isString } from 'lodash-es'
  import type { BreadcrumbProps } from '../types'

  let {
    items = [],
    class: className,
    item: itemRender,
    separator = '/',
    onItemClick,
    ...props
  }: BreadcrumbProps = $props()

  const classLst = $derived(classes(['adorn-breadcrumb', className]))
</script>

<div {...props} class={classLst}>
  {#each items as item, index}
    <span class="adorn-breadcrumb__item" class:disabled={item.disabled} class:has-icon={item.icon}>
      {#if itemRender}
        {@render itemRender(item)}
      {:else}
        <svelte:element
          this={item.path ? 'a' : 'span'}
          role={item.path ? 'a' : 'span'}
          class="adorn-breadcrumb__item-content"
          href={item.disabled ? undefined : item.path}
          onclick={item.disabled ? undefined : () => onItemClick?.(item)}
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
        {#if isString(separator)}
          {separator}
        {:else}
          {@render separator()}
        {/if}
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
