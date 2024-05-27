<script lang="ts">
  import classes from '@renzp/classes'
  import { FloatButton } from '.'
  import { scrollTo } from '../utils/tools'
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import type { BackTopProps } from '../types'

  let {
    icon = 'arrow-up',
    description,
    type = 'default',
    shape = 'circle',
    href,
    duration = 450,
    target = window,
    visibilityHeight = 100,
    class: className,
    children,
    ...props
  }: BackTopProps = $props()

  const classList = $derived(classes(['adorn-float-btn__back-top', className]))

  let top = $state(0)
  const visible = $derived(top > visibilityHeight)
  let scrollEl: HTMLElement | Window | undefined = $state()

  let timer: any
  onMount(() => {
    scrollEl = target
    const onScroll = (e: Event) => {
      if ((e.target as any).scrollTop) {
        top = (e.target as any).scrollTop
      } else {
        top = window.document.documentElement.scrollTop ?? window.document.body.scrollTop
      }
    }
    target.addEventListener('scroll', onScroll)

    return () => {
      target.removeEventListener('scroll', onScroll)
      if (timer) {
        clearInterval(timer)
      }
    }
  })

  const _onClick = (e: MouseEvent) => {
    timer = scrollTo(scrollEl, duration)
    props?.onclick?.(e)
  }
</script>

{#if visible}
  <div role="button" tabindex="-1" {...props} class={classList} onclick={_onClick} transition:fade>
    {#if children}
      {@render children()}
    {:else}
      <FloatButton {icon} {description} {type} {shape} {href} />
    {/if}
  </div>
{/if}
