<script lang="ts">
  import classes from '@renzp/classes'
  import { FloatButton } from '.'
  import type { IconName } from '../utils/types'
  import { scrollTo } from '../utils/tools'
  import { createEventDispatcher, onMount, tick } from 'svelte'
  import { fade } from 'svelte/transition'

  export let icon: IconName | undefined = 'arrow-up'
  export let description: string | undefined = undefined
  export let type: 'primary' | 'default' = 'default'
  export let shape: 'circle' | 'square' = 'circle'
  export let href = ''
  export let duration = 450
  export let target: HTMLElement | Window = window
  export let visibilityHeight = 100

  let className = ''
  export { className as class }
  $: classLst = classes(['adorn-float-btn__back-top', className])

  let top = 0
  $: visible = top > visibilityHeight
  let scrollEl: HTMLElement | Window

  const onScroll = (e: Event) => {
    if ((e.target as any).scrollTop) {
      top = (e.target as any).scrollTop
    } else {
      top = window.document.documentElement.scrollTop ?? window.document.body.scrollTop
    }
  }

  let timer: any
  onMount(() => {
    scrollEl = target
    target.addEventListener('scroll', onScroll)

    return () => {
      target.removeEventListener('scroll', onScroll)
      if (timer) {
        clearInterval(timer)
      }
    }
  })

  const dispatch = createEventDispatcher()
  const onClick = () => {
    timer = scrollTo(scrollEl, duration)
    dispatch('click')
  }
</script>

{#if visible}
  <div class={classLst} {...$$restProps} transition:fade>
    <FloatButton {icon} {description} {type} {shape} {href} on:click={onClick} />
  </div>
{/if}
