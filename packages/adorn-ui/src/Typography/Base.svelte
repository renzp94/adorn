<script lang="ts">
  import classes from '@renzp/classes'
  import type { CopyConfig, EllipsisConfig, TypographyBaseProps } from './types'
  import { Icon } from '..'
  import { copyText } from '../utils/tools'
  import type { IconName } from '../utils/types'

  let {
    tag = 'span',
    code,
    copyable = false,
    type,
    disabled,
    ellipsis = false,
    keyboard,
    mark,
    underline,
    deleted,
    strong,
    italic,
    class: className,
    style,
    children,
    onCopy,
    ...props
  }: TypographyBaseProps = $props()

  const classList = $derived(
    classes(['adorn-typography', className, { [`adorn-typography--${type}`]: !!type }])
  )
  let styles: string = $state('')

  $effect(() => {
    const rows = (ellipsis as EllipsisConfig)?.rows
    if (rows) {
      styles = `display: -webkit-box;-webkit-line-clamp: ${rows};-webkit-box-orient: vertical;white-space: wrap;${style}`
    }
  })

  let innerText: string = $state('')
  let isCopying = $state(false)
  const ready = (node: HTMLElement) => {
    innerText = node.innerText
  }

  const _onCopy = async () => {
    try {
      isCopying = true
      await copyText((copyable as CopyConfig)?.text ?? innerText)
      setTimeout(() => {
        isCopying = false
      }, 3000)
      onCopy?.(true)
    } catch (e) {
      isCopying = false
      console.log(e)
      onCopy?.(false)
    }
  }
  const copyIcon = $derived(((copyable as CopyConfig)?.icon ?? 'file-copy') as IconName)
</script>

{#snippet tagRender()}
  {#if mark}
    <mark>
      {@render children()}
    </mark>
  {:else if code}
    <code>
      {@render children()}
    </code>
  {:else}
    {@render children()}
  {/if}
{/snippet}

<svelte:element
  this={tag}
  role={tag}
  use:ready
  class:disabled
  class:underline
  class:deleted
  class:strong
  class:italic
  class:ellipsis
  {...props}
  class={classList}
  style={styles}
  onclick={disabled ? undefined : props?.onclick}
>
  {#if keyboard}
    <kbd>
      {@render tagRender()}
    </kbd>
  {:else}
    {@render tagRender()}
  {/if}
  {#if copyable}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <div class="adorn-typography-copy" role="button" tabindex="-1" onclick={_onCopy}>
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
