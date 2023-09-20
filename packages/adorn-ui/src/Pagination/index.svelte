<script lang="ts">
  import classes from '@renzp/classes'
  import { Button } from '..'
  import type { IconName } from '../utils/types'
  import { createEventDispatcher } from 'svelte'
  import type { KeyboardEventHandler } from 'svelte/elements'

  export let current: number | undefined = undefined
  export let defaultCurrent = 1
  export let defaultPageSize = 10
  export let disabled: boolean | undefined = undefined
  export let hideOnSinglePage = false
  export let pageSize: number | undefined = undefined
  export let pageSizeOptions: number[] = [10, 20, 50, 100]
  export let showQuickJumper = false
  export let showSizeChanger: boolean | undefined = undefined
  export let showTitle = true
  export let total = 0

  const dispatch = createEventDispatcher()

  $: hidden = hideOnSinglePage && pages.length < 2

  let pageCurrent = (current ?? defaultCurrent) as number
  let pageCurrentSize = (pageSize ?? defaultPageSize) as number

  let className = ''
  export { className as class }
  $: classList = classes(['adorn-pagination', className])

  $: pages = Array.from({ length: total / pageCurrentSize }).map((_, i) => i + 1)

  $: showPages = pages
    .filter(page => {
      // 超过7个才省略
      if (pages.length <= 7) {
        return true
      }

      if (pageCurrent > 4) {
        if (page === 1) {
          return true
        }

        if (
          page === pageCurrent - 2 ||
          page === pageCurrent - 1 ||
          page === pageCurrent + 1 ||
          page === pageCurrent + 2 ||
          page === pageCurrent
        ) {
          return true
        }
      } else if (page <= 4) {
        return true
      }

      if (pageCurrent > pages.length - 4) {
        if (page >= pages.length - 4) {
          return true
        }
      } else if (page === pages.length) {
        return true
      }
    })
    .reduce((prev, page) => {
      const prevPage = prev.at(-1)
      const nextPages = [page]
      if (page - 1 > 0 && page - 1 !== prevPage) {
        const flag = prev.includes(-1) ? -2 : -1
        nextPages.unshift(flag)
      }

      return [...prev, ...nextPages]
    }, [] as number[])

  const onJumpPage = (page: number) => {
    pageCurrent = page
    dispatch('change', { page, pageSize: pageCurrentSize })
  }
  let ellipsisNumber = 0
  const onMouseEnter = (page: number) => {
    if (!disabled) {
      ellipsisNumber = page
    }
  }
  const onMouseLeave = () => {
    if (!disabled) {
      ellipsisNumber = 0
    }
  }

  const onPrev = () => onJumpPage(pageCurrent - 1)
  $: prevDisabled = pageCurrent === 1 || disabled
  const onNext = () => onJumpPage(pageCurrent + 1)
  $: nextDisabled = pageCurrent === pages.length || disabled
  $: getPageButtonType = (page: number) => (pageCurrent === page ? 'primary' : 'text')

  $: getEllipsisIcon = (page: number, index: number): IconName => {
    return ellipsisNumber !== page ? 'more' : `arrow-${index === 1 ? 'left' : 'right'}-double`
  }

  const onFastJumpPage = (index: number) => {
    if (disabled) {
      return
    }
    let jumpPage = 1
    let gap = 5
    if (index === 1) {
      jumpPage = pageCurrent - gap
      jumpPage = jumpPage > 0 ? jumpPage : 1
    } else {
      jumpPage = pageCurrent + gap
      jumpPage = jumpPage > pages.length ? pages.length : jumpPage
    }

    onJumpPage(jumpPage)
  }

  $: {
    if (total > 50) {
      showSizeChanger = true
    }
  }

  const onPageSizeChange = () => {
    let page = pageCurrent
    if (pages.length < pageCurrent) {
      page = pages.length
    }

    dispatch('showSizeChange', { current: page, size: pageCurrentSize })
    onJumpPage(page)
  }
  let inputPage: number | undefined
  const onSearchKeyup: KeyboardEventHandler<any> = e => {
    if (e.key === 'Enter') {
      onSearch()
    }
  }
  const onSearch = () => {
    if (inputPage) {
      let jumpPage = 1
      if (inputPage >= 1) {
        jumpPage = inputPage > pages.length ? pages.length : parseInt(`${inputPage}`)
      }

      onJumpPage(jumpPage)
      inputPage = undefined
    }
  }
</script>

{#if !hidden}
  <div class={classList}>
    {#if $$slots.total}
      <span class="adorn-pagination-total">
        <slot name="total" {total} />
      </span>
    {/if}
    <span class="adorn-pagination--prev">
      <Button type="text" disabled={prevDisabled} icon="arrow-left-s" on:click={onPrev} />
    </span>
    {#each showPages as page, index}
      {#if page < 0}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <span
          class="adorn-pagination--ellipsis"
          class:disabled
          on:mouseenter={() => onMouseEnter(page)}
          on:mouseleave={onMouseLeave}
          on:click={() => onFastJumpPage(index)}
        >
          <Button icon={getEllipsisIcon(page, index)} {disabled} type="text" />
        </span>
      {:else}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <span
          class="adorn-pagination-item"
          title={showTitle ? `${page}` : undefined}
          on:mouseenter={onMouseLeave}
        >
          <Button
            type={getPageButtonType(page)}
            ghost={pageCurrent === page}
            {disabled}
            on:click={() => onJumpPage(page)}
          >
            {page}
          </Button>
        </span>
      {/if}
    {/each}
    <span class="adorn-pagination--next">
      <Button icon="arrow-right-s" type="text" disabled={nextDisabled} on:click={onNext} />
    </span>
    {#if showSizeChanger}
      <select
        class="adorn-pagination-options"
        bind:value={pageCurrentSize}
        {disabled}
        class:disabled
        on:change={onPageSizeChange}
      >
        {#each pageSizeOptions as item}
          <option value={item}>{item}条/页</option>
        {/each}
      </select>
    {/if}
    {#if showQuickJumper}
      <div class="adorn-pagination-jumper">
        <span>跳至</span>
        <input
          type="number"
          class="adorn-pagination-input"
          class:disabled
          {disabled}
          on:keyup={onSearchKeyup}
          on:blur={onSearch}
          bind:value={inputPage}
        />
        <span>页</span>
      </div>
    {/if}
  </div>
{/if}

<style lang="less" global>
  .adorn-pagination {
    font-size: var(--adorn-font-size);

    :global(.adorn-btn) {
      padding: 0 !important;
      height: 32px;
      width: 32px;
    }

    &-item {
      margin-right: 8px;

      &:last-child {
        margin-right: 0;
      }
    }

    :global(.adorn-icon) {
      position: relative;
      top: 2px;
      font-size: 22px !important;
    }

    &--ellipsis {
      :global(.adorn-btn.adorn-btn--text) {
        color: var(--adorn-disabled-text-color);
        margin-right: 8px;

        &:hover {
          color: var(--adorn-primary-color);
        }
      }

      :global(.adorn-icon) {
        top: 4px;
      }

      &.disabled :global(.adorn-btn.adorn-btn--text:hover) {
        color: var(--adorn-disabled-text-color);
      }
    }

    &-options {
      cursor: pointer;
    }

    &-options,
    &-input {
      border: 1px solid var(--adorn-border-color);
      padding: var(--adorn-padding-mini) var(--adorn-padding);
      border-radius: var(--adorn-radius-sm);

      &.disabled {
        background-color: var(--adorn-disabled-bg-color);
        color: var(--adorn-disabled-text-color);
        cursor: not-allowed;
      }
    }

    &-jumper {
      display: inline-flex;
      align-items: center;
      margin-left: 8px;
    }
    &-input {
      width: 50px;
      margin: 0 8px;
    }
  }
</style>
