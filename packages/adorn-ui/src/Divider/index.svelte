<script lang="ts">
  import classes from '@renzp/classes'
  import type { DividerProps } from '../types'

  let {
    dashed,
    type = 'horizontal',
    orientation = 'center',
    plain,
    class: className,
    children,
    ...props
  }: DividerProps = $props()

  const classLst = $derived(
    classes([
      'adorn-divider',
      className,
      { [`adorn-divider-with-text`]: children },
      { [`adorn-divider-with-text-${orientation}`]: children },
      { [`adorn-divider-${children ? 'horizontal' : type}`]: type }
    ])
  )
</script>

<div class:dashed class:plain {...props} class={classLst}>
  {#if children}
    <span class="adorn-divider-inner-text">
      {@render children()}
    </span>
  {/if}
</div>

<style lang="less" global>
  .adorn-divider {
    border-block-start: 1px solid var(--adorn-border-color);

    &-horizontal {
      margin: var(--adorn-padding-xxl) 0;
    }

    &-vertical {
      margin: 0 var(--adorn-padding);
      position: relative;
      top: -0.06em;
      display: inline-block;
      height: 0.9em;
      vertical-align: middle;
      border-inline-start: 1px solid var(--adorn-border-color);
    }

    &.dashed {
      border-block-start-style: dashed;
    }

    &-with-text {
      display: flex;
      align-items: center;
      border-block-start-width: 0;

      &::before,
      &::after {
        position: relative;
        width: 50%;
        border-block-start: 1px solid transparent;
        border-block-start-color: inherit;
        border-block-end: 0;
        transform: translateY(50%);
        content: '';
      }

      &-left {
        &::before {
          width: 5%;
        }
        &::after {
          width: 95%;
        }
      }

      &-center {
        &::before,
        &::after {
          width: 50%;
          transform: translateY(50%);
        }
      }

      &-right {
        &::before {
          width: 95%;
        }
        &::after {
          width: 5%;
        }
      }
    }

    &-inner-text {
      display: inline-block;
      color: var(--adorn-text-color);
      font-weight: 500;
      font-size: var(--adorn-font-size);
      text-align: center;
      white-space: nowrap;
      padding: 0 1em;
    }

    &-with-text.plain &-inner-text {
      font-weight: normal;
    }
  }
</style>
