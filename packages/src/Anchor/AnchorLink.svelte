<script lang="ts">
  import { getContext } from 'svelte'
  import type { Direction, Target } from '../utils/types'
  import { ANCHOR_DIRECTION } from './index'

  export let href: string
  export let title: string
  export let active = false

  const direction: Direction = getContext(ANCHOR_DIRECTION)
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class={`adorn-anchor-link adorn-anchor-link--${direction}`} class:active on:click>
  <a class="adorn-anchor-link-title" {href}>
    {title}
  </a>
</div>

<style lang="less" global>
  .adorn-anchor-link {
    display: inline-block;
    position: relative;
    padding: 4px 0 4px 16px;

    &.active {
      .adorn-anchor-link-title {
        color: var(--adorn-primary-color);
      }

      &::before {
        position: absolute;
        content: '';
      }
    }
    &--vertical.active::before {
      top: 0;
      left: -2px;
      height: 100%;
      border-left: 2px solid var(--adorn-primary-color);
    }

    &--horizontal {
      &.active::before {
        bottom: 0;
        left: 16px;
        width: calc(100% - 16px);
        border-bottom: 2px solid var(--adorn-primary-color);
      }

      &:first-child {
        padding-left: 0;

        &.active::before {
          bottom: 0;
          left: 0;
          width: 100%;
        }
      }
    }

    &-title {
      font-size: var(--adorn-font-size);
      color: var(--adorn-text-color);
      text-decoration: none;

      &:hover,
      &:active {
        color: var(--adorn-primary-color);
      }
    }
  }
</style>
