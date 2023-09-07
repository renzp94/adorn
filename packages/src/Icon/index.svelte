<script lang="ts">
  import { prefixConcat } from '../utils/tools'
  import classes from '@renzp/classes'
  import type { IconName } from '../utils/types'

  let className: string = ''
  export { className as class }
  export let color: string | undefined = undefined
  export let name: IconName
  export let size: string = '14px'
  export let style: string | undefined = undefined

  $: styles = `font-size: ${size};${prefixConcat(color, 'color: ')};${style ?? ''}`
  $: classNames = classes(['adorn-icon', className, prefixConcat(name, 'adorn-icon-')])
</script>

<i {...$$restProps} class={classNames} style={styles} />

<style global>
  @import url('./fonts/remixicon.css');
  .adorn-icon {
    display: inline-block;
    line-height: 1;
  }
</style>
