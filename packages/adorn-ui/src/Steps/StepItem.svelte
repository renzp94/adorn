<script lang="ts">
  import classes from '@renzp/classes'
  import { Icon } from '..'
  import type { StepsItemsProps } from '../types'
  import { isFunction } from '@renzp/utils'

  let {
    description,
    icon,
    title,
    status = 'wait',
    class: className,
    ...props
  }: StepsItemsProps = $props()

  const classList = $derived(classes(['adorn-step-item', className, `adorn-step-item--${status}`]))
</script>

<div {...props} class={classList}>
  <div class="adorn-step-item-tail"></div>
  <div class="adorn-step-item-indicator">
    {#if isFunction(icon)}
      {@render icon()}
    {:else if icon}
      <span class="adorn-step-item-icon">
        <Icon name={icon} />
      </span>
    {/if}
  </div>
  <div class="adorn-step-item-content">
    {#if title}
      <div class="adorn-step-item-title">
        {title}
      </div>
    {/if}
    {#if description}
      <div class="adorn-step-item-description">{description}</div>
    {/if}
  </div>
</div>

<style lang="less" global>
  .adorn-step-item {
    color: var(--adorn-text-color);
    font-size: var(--adorn-font-size);
    white-space: nowrap;
    position: relative;
    display: inline-flex;
    flex: 1;
    overflow: hidden;
    margin-right: 16px;

    &:last-child {
      padding-right: 0;

      .adorn-step-item-title::after {
        content: none;
      }
    }

    &-indicator {
      margin-right: 8px;
    }

    &-icon {
      color: var(--adorn-primary-color);
      font-size: 24px;
    }

    &-content {
      display: inline-block;
      flex-direction: column;
      flex: 1 0;
    }

    &--wait &-title {
      color: var(--adorn-text-secondary);
    }

    &--finish &-title::after {
      background: var(--adorn-primary-color);
    }

    &-title {
      position: relative;
      display: inline-block;
      padding-right: 16px;
      font-weight: 500;
      line-height: 32px;

      &::after {
        position: absolute;
        top: 16px;
        inset-inline-start: 100%;
        display: block;
        width: 9999px;
        height: 1px;
        background: var(--adorn-border-color);
        content: '';
      }
    }

    &-description {
      color: var(--adorn-disabled-text-color);
    }
  }

  .adorn-step {
    :global(&-item--finish &-item-index.active) {
      background-color: var(--adorn-primary-color-15) !important;
      color: var(--adorn-primary-color) !important;
    }

    :global(&--small &-item-index) {
      height: 24px !important;
      width: 24px !important;
    }

    :global(&--small &-item) {
      font-size: 12px !important;
    }

    :global(&--small &-item-icon) {
      font-size: 20px !important;
    }

    :global(&--small &-item-title) {
      line-height: 24px !important;
    }

    :global(&--small &-item-title::after) {
      top: 12px !important;
    }

    :global(&--vertical) {
      .adorn-step-item-title::after {
        content: none;
      }

      .adorn-step-item-tail {
        position: absolute;
        top: 0;
        inset-inline-start: 16px;
        padding: 35px 0 6px;
        width: 1px;
        height: 100%;

        &::after {
          display: inline-block;
          width: 1px;
          height: 100%;
          background: var(--adorn-border-color);
          border-radius: 1px;
          content: '';
        }
      }

      .adorn-step-item:last-child .adorn-step-item-tail {
        display: none;
      }

      .adorn-step-item--finish .adorn-step-item-tail::after {
        background: var(--adorn-primary-color);
      }
    }

    :global(&--vertical&--dot) {
      .adorn-step-item {
        flex-direction: row;
        margin-top: -4px;

        &:first-child {
          margin-top: 0;
        }
      }

      :global(.adorn-step-item-dot) {
        top: 3px;
      }
      :global(.adorn-step-item-dot::before) {
        content: none;
      }
      :global(.adorn-step-item-dot::after) {
        content: none;
      }

      :global(.adorn-step-item-tail) {
        inset-inline-start: 3px !important;
        top: 16px !important;
        padding-top: 12px !important;
        width: 2px !important;

        &::after {
          width: 2px !important;
        }
      }

      :global(.adorn-step-item-content) {
        text-align: left !important;
        margin-left: 8px;
      }
    }

    :global(&-label-vertical) {
      .adorn-step-item {
        flex-direction: column;
        margin-right: 0;

        &-indicator,
        &-content {
          text-align: center;
          margin-right: 0;
        }

        &-indicator {
          position: relative;

          &::before,
          &::after {
            position: absolute;
            top: 16px;
            width: 9999px;
            height: 2px;
            background-color: var(--adorn-border-color);
            content: '';
          }

          &::before {
            right: 133px;
          }
          &::after {
            margin-left: 8px;
          }

          &.active,
          &.finish {
            background-color: var(--adorn-primary-color);
          }
        }

        &--active .adorn-step-item-indicator::before,
        &--finish .adorn-step-item-indicator::after {
          background-color: var(--adorn-primary-color);
        }

        &:first-child .adorn-step-item-indicator::before,
        &:last-child .adorn-step-item-indicator::after {
          content: none;
        }

        &-title {
          padding-right: 0;

          &::after {
            content: none;
          }
        }
      }
    }

    :global(&--dot) {
      .adorn-step-item {
        flex-direction: column;
        justify-content: center;
        margin-right: 0;

        &:first-child :global(.adorn-step-item-dot::before) {
          display: none;
        }
        &:last-child :global(.adorn-step-item-dot::after) {
          display: none;
        }

        &-title {
          padding-right: 0;
        }

        &-title::after {
          content: none;
        }

        &-indicator {
          text-align: center;
          margin-right: 0;
        }

        &-content {
          text-align: center;
        }
      }
    }
  }
</style>
