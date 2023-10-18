<script lang="ts">
  import classes from '@renzp/classes'
  import type { Align, Justify, Size } from '../utils/types'

  export let vertical = false
  export let wrap: 'nowrap' | 'wrap' | 'wrap-reverse' = 'nowrap'
  export let justify: Justify = 'start'
  export let align: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'normal' = 'normal'
  export let flex: string | undefined = undefined
  export let gap: 'small' | 'middle' | 'large' | string | undefined = undefined
  export let tag: string = 'div'

  $: isPresetGap = ['small', 'middle', 'large'].includes(gap as string)

  let className = ''
  export { className as class }
  $: classLst = classes([
    'adorn-flex',
    className,
    `adorn-flex--${wrap}`,
    `adorn-flex-justify--${justify}`,
    `adorn-flex-align--${align}`,
    { [`adorn-flex--${gap}`]: gap && isPresetGap }
  ])

  export let style: string | undefined = undefined
  $: styles = classes([{ [`${flex};`]: flex }, { [`gap: ${gap};`]: gap && !isPresetGap }, style])
</script>

<svelte:element this={tag} class={classLst} class:vertical style={styles} {...$$restProps}>
  <slot />
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
    flex-start: flex-start;
    center: center;
    flex-end: flex-end;
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
