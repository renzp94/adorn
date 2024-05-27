<script lang="ts">
  import classes from '@renzp/classes'
  import { onMount } from 'svelte'
  import { getElement, getScrollContainer } from '../utils/tools'
  import type { AffixProps } from '../types'

  let {
    class: className,
    offset = 0,
    position = 'top',
    target,
    zIndex = 100,
    onChange,
    onScroll,
    children,
    ...props
  }: AffixProps = $props()

  const classList = $derived(classes(['adorn-affix', className]))

  let rootEl: HTMLElement | null = $state(null)
  let height = $state(0)
  let width = $state(0)
  let transform = $state(0)

  const rootStyles = $derived.by(() =>
    rootEl ? `height: ${height}px;width: ${width}px;` : undefined
  )
  const fixedStyles = $derived.by(
    () =>
      `${position}: ${offset}px;z-index: ${zIndex};${
        transform ? `transform: translateY(${transform}px);` : ''
      }${rootStyles ?? ''}`
  )

  let scrollTop = $state(0)
  let fixed = $state(false)

  $effect(() => {
    if (rootEl) {
      const isTop = position === 'top'
      let oldFixed = fixed

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
        const isFixed = scrollTop >= top + offset
        fixed = isTop ? isFixed : window.innerHeight - bottom < offset
      }

      if (oldFixed !== fixed) {
        onChange?.(fixed)
      }
    }
  })

  onMount(() => {
    if (rootEl) {
      const rootRect = rootEl.getBoundingClientRect()
      height = rootRect.height
      width = rootRect.width

      const scrollContainer = getScrollContainer(rootEl, true)
      const scrollEl = getElement(scrollContainer)
      scrollTop = scrollEl?.scrollTop ?? 0

      const onContainerScroll = () => {
        scrollTop = scrollEl?.scrollTop ?? 0
        onScroll?.({ scrollTop, fixed })
      }
      scrollContainer?.addEventListener('scroll', onContainerScroll, {
        capture: true,
        passive: true
      })

      return () => scrollContainer?.removeEventListener('scroll', onContainerScroll)
    }
  })
</script>

<div bind:this={rootEl} class={classList} style={rootStyles} {...props}>
  <div class="adorn-affix__container" class:fixed style={fixedStyles}>
    {@render children()}
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
