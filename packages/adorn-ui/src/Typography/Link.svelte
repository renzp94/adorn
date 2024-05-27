<script lang="ts">
  import Base from './Base.svelte'
  import type { TypographyBaseProps } from './types'
  import type { Target } from '../utils/types'

  interface LinkProps extends Omit<TypographyBaseProps, 'tag' | 'keyboard' | 'mark' | 'code'> {
    href?: string
    target?: Target
  }

  let { href, target = '_self', ...props }: LinkProps = $props()

  const _onClick = (e: MouseEvent) => {
    window.open(href, target)
    props?.onclick?.(e)
  }
</script>

<Base tag="a" class="adorn-typography-link" {...props} onclick={_onClick} />
