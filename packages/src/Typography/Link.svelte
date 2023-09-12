<script lang="ts">
  import Base from './Base.svelte'
  import type { BaseType, CopyConfig } from './types'

  export let href: string | undefined = undefined
  export let title: string | undefined = undefined
  // export let editable: boolean | EditConfig | undefined = undefined
  export let copyable: boolean | CopyConfig | undefined = undefined
  export let type: BaseType | undefined = undefined
  export let disabled: boolean | undefined = undefined
  // export let ellipsis: boolean | EllipsisConfig | undefined = undefined
  export let underline: boolean | undefined = undefined
  export let deleted: boolean | undefined = undefined
  export { deleted as delete }
  export let strong: boolean | undefined = undefined
  export let italic: boolean | undefined = undefined

  const onClick = () => {
    if (disabled) {
      return
    }

    window.open(href, $$restProps.target ?? '_self')
  }
</script>

<Base
  tag="a"
  class="adorn-typography-link"
  {title}
  {copyable}
  {type}
  {disabled}
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
