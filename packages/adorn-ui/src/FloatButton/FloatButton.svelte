<script lang="ts">
  import classes from '@renzp/classes'
  import { Icon } from '..'
  import type { ButtonTarget } from '../types'
  import { getContext } from 'svelte'
  import { FLOAT_BUTTON_CONTEXT } from '.'
  import type { FloatButtonProps } from '../types'

  let {
    icon,
    description,
    type = 'default',
    shape = 'circle',
    href,
    target,
    class: className,
    children,
    ...props
  }: FloatButtonProps = $props()
  const ctx: {
    shape: 'circle' | 'square'
    href: String
    target: ButtonTarget
  } = $derived(getContext(FLOAT_BUTTON_CONTEXT) ?? { shape, href, target })

  const classList = $derived(
    classes([
      'adorn-float-btn',
      className,
      { [`adorn-float-btn--${type}`]: !!type },
      `adorn-float-btn-${ctx?.shape}`
    ])
  )
</script>

<svelte:element
  this={ctx?.href ? 'a' : 'button'}
  role={ctx?.href ? 'a' : 'button'}
  target={ctx?.target}
  {...props}
  class={classList}
>
  {#if children}
    {@render children()}
  {:else if icon}
    <Icon size="24px" name={icon} />
  {/if}
  {#if shape === 'square' && description}
    <span>{description}</span>
  {/if}
</svelte:element>

<style lang="less" global>
  .adorn-float-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--adorn-text-color);
    font-size: var(--adorn-font-size);
    position: fixed;
    cursor: pointer;
    background-color: #fff;
    z-index: 99;
    width: 40px;
    height: 40px;
    box-sizing: border-box;
    padding: var(--adorn-padding-mini);
    inset-inline-end: 24px;
    inset-block-end: 48px;
    box-shadow:
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05);

    &:not(.disabled):hover {
      filter: brightness(0.95);
    }

    &:not(.disabled):active {
      filter: brightness(0.9);
    }

    &--primary {
      background-color: var(--adorn-primary-color);
      color: #fff;

      &:not(.disabled):hover {
        filter: brightness(1.15);
      }

      &:not(.disabled):active {
        filter: brightness(0.9);
      }

      &.disabled {
        color: var(--adorn-disabled-text-color);
        cursor: not-allowed;
      }
    }

    &-circle {
      border-radius: 50%;
    }
    &-square {
      border-radius: var(--adorn-radius);
      min-height: 40px;
      height: auto;
    }
  }
</style>
