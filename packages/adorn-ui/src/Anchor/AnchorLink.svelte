<script lang="ts">
  import type { AnchorLinkProps } from '../types'
  import classes from '@renzp/classes'

  let { href, title, active, class: className, ...props }: AnchorLinkProps = $props()
  const classList = $derived(classes(['adorn-anchor-link', className]))
</script>

<div class:active {...props} class={classList}>
  <a class="adorn-anchor-link-title" {href}>
    {title}
  </a>
</div>

<style lang="less" global>
  .adorn-anchor-link {
    display: inline-block;
    position: relative;
    padding: 4px 0 4px 16px;
    cursor: pointer;

    &.active {
      .adorn-anchor-link-title {
        color: var(--adorn-primary-color);
      }

      &::before {
        position: absolute;
        content: '';
      }
    }

    &--horizontal {
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
