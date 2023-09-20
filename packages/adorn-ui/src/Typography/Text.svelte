<script lang="ts">
  import Base from './Base.svelte'
  import type { BaseType, CopyConfig, EllipsisConfig } from './types'

  export let tag = 'span'
  export let title: string | undefined = undefined
  // export let editable: boolean | EditConfig = false
  export let copyable: boolean | CopyConfig = false
  export let type: BaseType | undefined = undefined
  export let disabled: boolean = false
  export let ellipsis: boolean | EllipsisConfig = false
  export let keyboard: boolean = false
  export let mark: boolean = false
  export let underline: boolean = false
  export let deleted: boolean = false
  export let strong: boolean = false
  export let italic: boolean = false
</script>

<Base
  {tag}
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
