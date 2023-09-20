<script lang="ts">
  import classes from '@renzp/classes'
  import { createEventDispatcher, onMount } from 'svelte'
  import { getElement, getScrollContainer } from '../utils/tools'

  let className = ''
  export { className as class }
  $: classList = classes(['adorn-affix', className])

  export let offset = 0
  export let position: 'top' | 'bottom' = 'top'
  export let target: string | undefined = undefined
  export let zIndex = 100

  let rootEl: HTMLElement
  let height = 0
  let width = 0
  let transform = 0

  $: rootStyles = rootEl ? `height: ${height}px;width: ${width}px;` : undefined
  $: fixedStyles = `${position}: ${offset}px;z-index: ${zIndex};${
    transform ? `transform: translateY(${transform}px);` : ''
  }${rootStyles ?? ''}`

  let scrollTop = 0
  let fixed = false

  $: {
    if (rootEl) {
      const isTop = position === 'top'

      if (target) {
        const { bottom: targetBottom, top: targetTop } = document
          .querySelector(target)
          ?.getBoundingClientRect?.() ?? {
          top: 0,
          bottom: 0
        }

        const rootRect = rootEl.getBoundingClientRect()

        const gap = isTop
          ? targetBottom - offset - height
          : window.innerHeight - targetTop - offset - height

        fixed = isTop
          ? offset > rootRect.top && targetBottom > 0
          : window.innerHeight - offset < rootRect.bottom && window.innerHeight > targetTop

        transform = gap < 0 ? (isTop ? gap : -gap) : 0
      } else {
        const { top, bottom } = rootEl.getBoundingClientRect()
        fixed = isTop ? scrollTop >= top + offset : window.innerHeight - bottom < offset
      }
    }
  }
  const dispatch = createEventDispatcher()
  $: dispatch('change', fixed)

  onMount(() => {
    const rootRect = rootEl.getBoundingClientRect()
    height = rootRect.height
    width = rootRect.width

    const scrollContainer = getScrollContainer(rootEl, true)
    const scrollEl = getElement(scrollContainer)
    scrollTop = scrollEl?.scrollTop ?? 0

    const onScroll = () => {
      scrollTop = scrollEl?.scrollTop ?? 0
      dispatch('scroll', { scrollTop, fixed })
    }
    scrollContainer?.addEventListener('scroll', onScroll, { capture: true, passive: true })

    return () => scrollContainer?.removeEventListener('scroll', onScroll)
  })
</script>

<div bind:this={rootEl} class={classList} style={rootStyles}>
  <div class="adorn-affix__container" class:fixed style={fixedStyles}>
    <slot />
  </div>
</div>

<style lang="less" global>
  .adorn-affix {
    display: inline-block;

    &__container.fixed {
      position: fixed;
    }
  }
</style>
