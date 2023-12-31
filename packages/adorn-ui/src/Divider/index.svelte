<script lang="ts">
  import classes from '@renzp/classes'
  import type { Direction } from '../utils/types'

  let className = ''
  export { className as class }
  export let dashed: boolean = false
  export let type: Direction = 'horizontal'
  export let orientation: 'left' | 'center' | 'right' = 'center'
  export let plain: boolean = false

  $: classLst = classes([
    'adorn-divider',
    className,
    { [`adorn-divider-with-text`]: $$slots.default },
    { [`adorn-divider-with-text-${orientation}`]: $$slots.default },
    { [`adorn-divider-${$$slots.default ? 'horizontal' : type}`]: type }
  ])
</script>

<div class={classLst} {...$$restProps} class:dashed class:plain>
  {#if $$slots.default}
    <span class="adorn-divider-inner-text"><slot /></span>
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
