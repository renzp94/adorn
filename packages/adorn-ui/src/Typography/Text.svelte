<script lang="ts">
  import Base from './Base.svelte'
  import type { TypographyBaseProps } from './types'

  type TextProps = TypographyBaseProps
  const {...props}: TextProps = $props()
</script>

<Base {...props} />
