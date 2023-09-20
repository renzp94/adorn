<script lang="ts">
  import classes from '@renzp/classes'
  import { createEventDispatcher, setContext } from 'svelte'
  import { FLOAT_BUTTON_CONTEXT } from '.'
  import type { IconName } from '../utils/types'
  import FloatButton from './FloatButton.svelte'
  import { fly } from 'svelte/transition'
  import { isUndef } from '../utils/tools'

  type ButtonTarget = '_self' | '_blank' | '_parent' | '_top' | string

  export let icon: IconName | undefined = undefined
  export let description: string | undefined = undefined
  export let type: 'primary' | 'default' = 'default'
  export let shape: 'circle' | 'square' = 'circle'
  export let href = ''
  export let target: ButtonTarget = ''
  export let trigger: 'click' | 'hover' | undefined = undefined
  export let open: boolean | undefined = undefined

  $: isOpenModel = !isUndef(open)

  let btnGroupVisible = false
  $: hasGroupMain = $$slots.icon || icon || description

  $: {
    btnGroupVisible = isOpenModel ? (open as boolean) : !hasGroupMain
  }

  $: setContext(FLOAT_BUTTON_CONTEXT, { shape, href, target })

  const dispatch = createEventDispatcher()
  const _onMouseEnter = () => {
    if (trigger === 'hover') {
      isOpenModel ? dispatch('openChange', true) : (btnGroupVisible = true)
    }
  }
  const _onMouseLeave = () => {
    if (trigger === 'hover') {
      isOpenModel ? dispatch('openChange', false) : (btnGroupVisible = false)
    }
  }
  const _onClick = () => {
    if (trigger === 'click') {
      isOpenModel ? dispatch('openChange', !btnGroupVisible) : (btnGroupVisible = !btnGroupVisible)
    }
  }

  let className = ''
  export { className as class }
  $: classLst = classes(['adorn-float-btn-group', className, `adorn-float-btn-group-${shape}`])
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
  class={classLst}
  {...$$restProps}
  on:mouseenter={_onMouseEnter}
  on:mouseleave={_onMouseLeave}
  on:click={_onClick}
>
  {#if btnGroupVisible}
    <div class="adorn-float-btn-group__list" transition:fly={{ duration: 300, y: '50%' }}>
      <slot />
    </div>
  {/if}
  {#if hasGroupMain}
    <div class="adorn-float-btn-group__main">
      {#if btnGroupVisible}
        <FloatButton {type} icon="close" {shape} />
      {:else if $$slots.icon}
        <FloatButton {type} {icon} {description} {shape}>
          <slot slot="icon" name="icon" />
        </FloatButton>
      {:else}
        <FloatButton {type} {icon} {description} {shape} />
      {/if}
    </div>
  {/if}
</div>

<style lang="less" global>
  .adorn-float-btn-group {
    color: var(--adorn-text-color);
    font-size: var(--adorn-font-size);
    position: fixed;
    z-index: 99;
    width: 40px;
    height: auto;
    box-sizing: border-box;
    inset-inline-end: 24px;
    inset-block-end: 48px;
    border-radius: var(--adorn-radius);

    &-square {
      box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12),
        0 9px 28px 8px rgba(0, 0, 0, 0.05);
    }

    &-circle &__list {
      gap: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    &__main {
      padding-top: 16px;
    }

    :global(.adorn-float-btn) {
      position: static;
    }

    &-square {
      :global(.adorn-float-btn) {
        border-radius: 0;
        box-shadow: none;
        border-bottom: 1px solid var(--adorn-border-color);

        &:first-child {
          border-radius: var(--adorn-radius) var(--adorn-radius) 0 0;
        }

        &:last-child {
          border-bottom: none;
          border-radius: 0 0 var(--adorn-radius) var(--adorn-radius);
        }
      }
    }
  }
</style>
