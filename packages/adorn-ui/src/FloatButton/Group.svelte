<script lang="ts">
  import classes from '@renzp/classes'
  import { setContext } from 'svelte'
  import { FLOAT_BUTTON_CONTEXT } from '.'
  import { FloatButton } from '.'
  import { fly } from 'svelte/transition'
  import { isDef, isUnDef } from '@renzp/utils'
  import { isFunction } from 'lodash-es'
  import type { GroupProps, IconName } from '../types'

  let {
    icon,
    description,
    type = 'default',
    shape = 'circle',
    href,
    target,
    trigger,
    open = $bindable(),
    class: className,
    children,
    onOpenChange,
    ...props
  }: GroupProps = $props()

  const hasGroupMain = $derived(isDef(trigger) && (icon || description))

  $effect(() => {
    setContext(FLOAT_BUTTON_CONTEXT, { shape, href, target })
  })

  $effect(() => {
    if (isDef(open)) {
      onOpenChange?.(open)
    }
  })

  const _onMouseEnter = (e: MouseEvent) => {
    open = true
    props?.onmouseenter?.(e)
  }
  const _onMouseLeave = (e: MouseEvent) => {
    open = false
    props?.onmouseleave?.(e)
  }
  const _onClick = (e: MouseEvent) => {
    open = !open
    props?.onclick?.(e)
  }

  const classList = $derived(
    classes(['adorn-float-btn-group', className, `adorn-float-btn-group-${shape}`])
  )
</script>

<div
  role="button"
  tabindex="-1"
  {...props}
  class={classList}
  onmouseenter={trigger === 'hover' ? _onMouseEnter : props?.onmouseenter}
  onmouseleave={trigger === 'hover' ? _onMouseLeave : props?.onmouseleave}
  onclick={trigger === 'click' ? _onClick : props?.onclick}
>
  {#if isUnDef(trigger) || (isDef(trigger) && open)}
    <div class="adorn-float-btn-group__list" transition:fly={{ duration: 300, y: '50%' }}>
      {@render children()}
    </div>
  {/if}
  {#if hasGroupMain}
    <div class="adorn-float-btn-group__main">
      {#if open}
        <FloatButton {type} icon="close" {shape} />
      {:else if isFunction(icon)}
        <FloatButton {type} {description} {shape}>
          {@render icon()}
        </FloatButton>
      {:else if isDef(icon)}
        <FloatButton {type} icon={icon as IconName} {shape} />
      {/if}
    </div>
  {/if}
</div>

<style lang="less" global>
  .adorn-float-btn-group {
    color: var(--adorn-text-color);
    font-size: var(--adorn-font-size);
    position: fixed;
    z-index: 99;
    width: 40px;
    height: auto;
    box-sizing: border-box;
    inset-inline-end: 24px;
    inset-block-end: 48px;
    border-radius: var(--adorn-radius);

    &-square {
      box-shadow:
        0 6px 16px 0 rgba(0, 0, 0, 0.08),
        0 3px 6px -4px rgba(0, 0, 0, 0.12),
        0 9px 28px 8px rgba(0, 0, 0, 0.05);
    }

    &-circle &__list {
      gap: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    &__main {
      padding-top: 16px;
    }

    :global(.adorn-float-btn) {
      position: static;
    }

    &-square {
      :global(.adorn-float-btn) {
        border-radius: 0;
        box-shadow: none;
        border-bottom: 1px solid var(--adorn-border-color);

        &:first-child {
          border-radius: var(--adorn-radius) var(--adorn-radius) 0 0;
        }

        &:last-child {
          border-bottom: none;
          border-radius: 0 0 var(--adorn-radius) var(--adorn-radius);
        }
      }
    }
  }
</style>
