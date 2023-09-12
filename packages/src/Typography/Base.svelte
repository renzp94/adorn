<script lang="ts">
  import classes from '@renzp/classes'
  import type { BaseType, CopyConfig, EditConfig, EllipsisConfig } from './types'
  import { Icon } from '..'
  import { copyText } from '../utils/tools'
  import type { IconName } from '../utils/types'
  import { createEventDispatcher } from 'svelte'

  export let tag = 'span'
  export let title: string | undefined = undefined
  // export let editable: boolean | EditConfig | undefined = undefined
  export let copyable: boolean | CopyConfig | undefined = undefined
  export let type: BaseType | undefined = undefined
  export let disabled: boolean | undefined = undefined
  export let ellipsis: boolean | EllipsisConfig | undefined = undefined
  export let keyboard: boolean | undefined = undefined
  export let mark: boolean | undefined = undefined
  export let underline: boolean | undefined = undefined
  export let deleted: boolean | undefined = undefined
  export let strong: boolean | undefined = undefined
  export let italic: boolean | undefined = undefined

  let className = ''
  export { className as class }
  $: classLst = classes(['adorn-typography', className, { [`adorn-typography--${type}`]: !!type }])
  let styles: string

  $: {
    const rows = (ellipsis as EllipsisConfig)?.rows
    if (rows) {
      styles = `display: -webkit-box;-webkit-line-clamp: ${rows};-webkit-box-orient: vertical;white-space: wrap;`
    }
  }

  let innerText: string
  let isCopying = false
  const ready = (node: HTMLElement) => {
    innerText = node.innerText
  }

  const dispatch = createEventDispatcher()
  const onCopy = async () => {
    isCopying = true
    await copyText((copyable as CopyConfig)?.text ?? innerText)
    setTimeout(() => {
      isCopying = false
    }, 3000)

    dispatch('copy')
  }

  $: copyIcon = ((copyable as CopyConfig)?.icon ?? 'file-copy') as IconName
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
  this={tag}
  use:ready
  {title}
  class={classLst}
  class:disabled
  class:underline
  class:deleted
  class:strong
  class:italic
  class:ellipsis
  style={styles}
  {...$$restProps}
  on:click
>
  {#if keyboard}
    <kbd>
      {#if mark}
        <mark>
          <slot />
        </mark>
      {:else}
        <slot />
      {/if}
    </kbd>
  {:else if mark}
    <mark>
      <slot />
    </mark>
  {:else}
    <slot />
  {/if}
  {#if copyable}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="adorn-typography-copy" on:click={onCopy}>
      <Icon name={isCopying ? 'check' : copyIcon} />
    </div>
  {/if}
</svelte:element>

<style lang="less" global>
  .adorn-typography {
    display: inline;
    color: var(--adorn-text-color);
    transition: color 0.3s;

    kbd {
      background-color: var(--adorn-bg-color);
      padding: var(--adorn-padding-sm);
      border-radius: var(--adorn-radius-sm);
      border: 1px solid var(--adorn-border-color);
      margin: 0 0.2em;
      padding-inline: 0.4em;
      padding-block: 0.15em 0.1em;
      font-size: 90%;
      border-bottom-width: 2px;
      border-radius: 3px;
    }

    &:not(.disabled):hover {
      filter: brightness(1.15);
    }
    &:not(.disabled):active {
      filter: brightness(0.98);
    }
    &.disabled {
      color: var(--adorn-disabled-text-color);
      cursor: not-allowed;
    }

    &.strong {
      font-weight: bold;
    }
    &.underline {
      text-decoration: underline;
    }
    &.deleted {
      text-decoration: line-through;
    }
    &.italic {
      font-style: italic;
    }
    &.ellipsis {
      width: 100%;
    }

    &.ellipsis {
      display: inline-block;
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    @colors: {
      info: var(--adorn-info-color);
      primary: var(--adorn-primary-color);
      danger: var(--adorn-error-color);
      warning: var(--adorn-warn-color);
      success: var(--adorn-success-color);
    };

    each(@colors,{
      &&--@{key}{
        &,
        &:hover,
        &:active{
          color: @value;
        }
      }
    });

    &-copy {
      display: inline-block;
      cursor: pointer;
    }
  }

  a.adorn-typography {
    text-decoration: none;
    outline: none;
    cursor: pointer;
    color: var(--adorn-primary-color);
  }

  @hList: 1, 2, 3, 4, 5;
  each(@hList, {
    h@{key}.adorn-typography{
      display: block;
      margin-bottom: 0.5em;
      font-weight: 600;
      font-size: calc(var(--adorn-font-size) + calc(4px * (6 - @value)));
      line-height: 1.5;
    }
  });
</style>
