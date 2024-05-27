<script lang="ts">
  import { prefixConcat } from '../utils/tools'
  import classes from '@renzp/classes'
  import './fonts/remixicon.css'
  import type { IconProps } from '../types'

  let { color, name, size, style, class: className, ...props }: IconProps = $props()

  const styles = $derived(
    classes([{ [`font-size: ${size};`]: size }, { [`color: ${color};`]: color }, style])
  )

  const classList = $derived(classes(['adorn-icon', className, prefixConcat(name, 'adorn-icon-')]))
</script>

<i {...props} class={classList} style={styles}></i>

<style global>
  .adorn-icon {
    display: inline-block;
    line-height: 1;
    font-size: inherit;
    color: inherit;
  }
</style>
