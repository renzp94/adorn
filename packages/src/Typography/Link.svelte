<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import Base from './Base.svelte'
  import type { BaseType, CopyConfig, EllipsisConfig } from './types'
  import type { Target } from '../utils/types'

  export let href: string | undefined = undefined
  export let target: Target = '_self'
  export let title: string | undefined = undefined
  // export let editable: boolean | EditConfig = false
  export let copyable: boolean | CopyConfig = false
  export let type: BaseType | undefined = undefined
  export let disabled: boolean = false
  export let ellipsis: boolean | EllipsisConfig = false
  export let underline: boolean = false
  export let deleted: boolean = false
  export let strong: boolean = false
  export let italic: boolean = false

  const dispatch = createEventDispatcher()
  const onClick = () => {
    dispatch('click')
    window.open(href, $$restProps.target ?? target)
  }
</script>

<Base
  tag="a"
  class="adorn-typography-link"
  {title}
  {copyable}
  {type}
  {disabled}
  {ellipsis}
  {underline}
  {deleted}
  {strong}
  {italic}
  {...$$restProps}
  on:click={onClick}
  on:copy
>
  <slot />
</Base>
