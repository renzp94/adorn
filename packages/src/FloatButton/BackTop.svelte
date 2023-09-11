<script lang="ts">
  import classes from '@renzp/classes'
  import { FloatButton } from '.'
  import type { IconName } from '../utils/types'
  import { createEventDispatcher, onMount, tick } from 'svelte'
  import { fade } from 'svelte/transition'

  export let icon: IconName | undefined = 'arrow-up'
  export let description: string | undefined = undefined
  export let type: 'primary' | 'default' = 'default'
  export let shape: 'circle' | 'square' = 'circle'
  export let href = ''
  export let duration = 450
  export let target: HTMLElement | Window | undefined = undefined
  export let visibilityHeight = 100

  let className = ''
  export { className as class }
  $: classLst = classes(['adorn-float-btn__back-top', className])

  let top = 0
  $: visible = top > visibilityHeight
  let scrollEl: HTMLElement | Window

  const onScroll = (e: Event) => {
    top = (e.target as any).scrollTop
  }

  $: {
    if (target) {
      scrollEl.removeEventListener('scroll', onScroll)
      scrollEl = target
    } else {
      scrollEl = window
    }

    scrollEl.addEventListener('scroll', onScroll)
  }

  let timer: any
  onMount(() => {
    return () => {
      scrollEl.removeEventListener('scroll', onScroll)
      if (timer) {
        clearInterval(timer)
      }
    }
  })

  const dispatch = createEventDispatcher()
  const onClick = () => {
    const step = (top / duration) * 10
    timer = setInterval(() => {
      if (top <= 0) {
        clearInterval(timer)
        return
      }
      scrollEl?.scrollTo(0, top - step)
    }, 10)
    dispatch('click')
  }
</script>

{#if visible}
  <div class={classLst} {...$$restProps} transition:fade>
    <FloatButton {icon} {description} {type} {shape} {href} on:click={onClick} />
  </div>
{/if}
