<script lang="ts">
  import Base from './Base.svelte'
  import type { TypographyBaseProps } from './types'

  interface TitleProps extends Omit<TypographyBaseProps, 'tag'> {
    level: 1 | 2 | 3 | 4 | 5
  }

  let {level = 1,...props}: TitleProps = $props()
</script>

<Base tag={`h${level}`} {...props} />
