<script lang="ts">
  import classes from '@renzp/classes'
  import type { FlexProps } from '../types'

  let {
    vertical,
    wrap = 'nowrap',
    justify = 'start',
    align = 'normal',
    flex,
    gap,
    tag = 'div',
    class: className,
    style,
    children,
    ...props
  }: FlexProps = $props()

  const isPresetGap = $derived(['small', 'middle', 'large'].includes(gap as string))

  const classList = $derived(
    classes([
      'adorn-flex',
      className,
      `adorn-flex--${wrap}`,
      `adorn-flex-justify--${justify}`,
      `adorn-flex-align--${align}`,
      { [`adorn-flex--${gap}`]: gap && isPresetGap }
    ])
  )

  const styles = $derived(
    classes([{ [`${flex};`]: flex }, { [`gap: ${gap};`]: gap && !isPresetGap }, style])
  )
</script>

<svelte:element this={tag} class:vertical {...props} class={classList} style={styles}>
  {@render children()}
</svelte:element>

<style lang="less" global>
  @wraps: {
    nowrap: nowrap;
    wrap: wrap;
    wrap-reverse: wrap-reverse;
  };
  @justifyList: {
    start: flex-start;
    end: flex-end;
    center: center;
    space-around: space-around;
    space-between: space-between;
    space-evenly: space-evenly;
  };
  @alignItemsList: {
    normal: normal;
    top: flex-start;
    middle: center;
    bottom: flex-end;
    stretch: stretch;
  };
  @gaps: {
    small: var(--adorn-size-sm);
    middle: var(--adorn-size);
    large: var(--adorn-size-xl);
  };

  .adorn-flex {
    display: flex;

    &.vertical {
      flex-direction: column;
    }

    each(@wraps, {
      &--@{key} {
        flex-wrap: @value;
      }
    });
    each(@justifyList, {
      &-justify--@{key} {
        justify-content: @value;
      }
    });
    each(@alignItemsList, {
      &-align--@{key} {
        align-items: @value;
      }
    });

    each(@gaps, {
      &--@{key} {
        gap: @value;
      }
    });
  }
</style>
