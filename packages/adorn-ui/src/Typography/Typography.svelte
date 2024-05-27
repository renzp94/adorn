<script lang="ts">
  import type { TypographyBaseProps } from './types'

  type TypographyProps = Omit<TypographyBaseProps, 'keyboard' | 'mark' | 'code'>

  let { tag = 'article', children, ...props }: TypographyProps = $props()
</script>

<svelte:element this={tag} role={tag} {...props}>
  {@render children()}
</svelte:element>
