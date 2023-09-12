<script lang="ts">
  import Base from './Base.svelte'
  import type { BaseType, CopyConfig, EllipsisConfig } from './types'

  export let title: string | undefined = undefined
  // export let editable: boolean | EditConfig | undefined = undefined
  export let copyable: boolean | CopyConfig | undefined = undefined
  export let type: BaseType | undefined = undefined
  export let disabled: boolean | undefined = undefined
  export let ellipsis: boolean | EllipsisConfig | undefined = undefined
  export let keyboard: boolean | undefined = undefined
  export let mark: boolean | undefined = undefined
  export let underline: boolean | undefined = undefined
  export let deleted: boolean | undefined = undefined
  export { deleted as delete }
  export let strong: boolean | undefined = undefined
  export let italic: boolean | undefined = undefined

  export let level: 1 | 2 | 3 | 4 | 5 = 1
</script>

<Base
  tag={`h${level}`}
  {title}
  {copyable}
  {type}
  {disabled}
  {ellipsis}
  {keyboard}
  {mark}
  {underline}
  {deleted}
  {strong}
  {italic}
  {...$$restProps}
  on:click
  on:copy
>
  <slot />
</Base>
