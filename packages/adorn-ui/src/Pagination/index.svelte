<script lang="ts">
  import classes from '@renzp/classes'
  import { Button } from '..'
  import type { IconName } from '../utils/types'
  import type { KeyboardEventHandler } from 'svelte/elements'
  import type { PaginationProps } from '../types'

  let {
    current = $bindable(1),
    disabled,
    hideOnSinglePage,
    pageSize = 10,
    pageSizeOptions = [10, 20, 50, 100],
    showQuickJumper,
    showSizeChanger,
    showTitle = true,
    total = 0,
    class: className,
    onChange,
    onShowSizeChange,
    showTotal,
    ...props
  }: PaginationProps = $props()

  const pages = $derived(Array.from({ length: total / pageSize }).map((_, i) => i + 1))
  const hidden = $derived(hideOnSinglePage && pages.length < 2)
  const classList = $derived(classes(['adorn-pagination', className]))

  const showPages = $derived(
    pages
      .filter(page => {
        // 超过7个才省略
        if (pages.length <= 7) {
          return true
        }

        if (current > 4) {
          if (page === 1) {
            return true
          }

          if (
            page === current - 2 ||
            page === current - 1 ||
            page === current + 1 ||
            page === current + 2 ||
            page === current
          ) {
            return true
          }
        } else if (page <= 4) {
          return true
        }

        if (current > pages.length - 4) {
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
  )

  const onJumpPage = (page: number) => {
    current = page
    onChange?.({ page, pageSize })
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

  const onPrev = () => onJumpPage(current - 1)
  const prevDisabled = $derived(current === 1 || disabled)
  const onNext = () => onJumpPage(current + 1)
  const nextDisabled = $derived(current === pages.length || disabled)
  const getPageButtonType = (page: number) => (current === page ? 'primary' : 'text')

  const getEllipsisIcon = (page: number, index: number): IconName => {
    return ellipsisNumber !== page ? 'more' : `arrow-${index === 1 ? 'left' : 'right'}-double`
  }

  const onFastJumpPage = (index: number) => {
    if (disabled) {
      return
    }
    let jumpPage = 1
    let gap = 5
    if (index === 1) {
      jumpPage = current - gap
      jumpPage = jumpPage > 0 ? jumpPage : 1
    } else {
      jumpPage = current + gap
      jumpPage = jumpPage > pages.length ? pages.length : jumpPage
    }

    onJumpPage(jumpPage)
  }

  $effect(() => {
    if (total > 50) {
      showSizeChanger = true
    }
  })

  const onPageSizeChange = () => {
    let page = current
    if (pages.length < current) {
      page = pages.length
    }

    onShowSizeChange?.({ current: page, size: pageSize })
    onJumpPage(page)
  }
  let inputPage: number | undefined = $state()
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
  <div class={classList} {...props}>
    {#if showTotal}
      <span class="adorn-pagination-total">
        {showTotal(total, current)}
      </span>
    {/if}
    <span class="adorn-pagination--prev">
      <Button type="text" disabled={prevDisabled} icon="arrow-left-s" onclick={onPrev} />
    </span>
    {#each showPages as page, index}
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      {#if page < 0}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_interactive_supports_focus -->
        <span
          role="button"
          class="adorn-pagination--ellipsis"
          class:disabled
          onmouseenter={() => onMouseEnter(page)}
          onmouseleave={onMouseLeave}
          onclick={() => onFastJumpPage(index)}
        >
          <Button icon={getEllipsisIcon(page, index)} {disabled} type="text" />
        </span>
      {:else}
        <span
          class="adorn-pagination-item"
          title={showTitle ? `${page}` : undefined}
          onmouseenter={onMouseLeave}
        >
          <Button
            type={getPageButtonType(page)}
            ghost={current === page}
            {disabled}
            onclick={() => onJumpPage(page)}
          >
            {page}
          </Button>
        </span>
      {/if}
    {/each}
    <span class="adorn-pagination--next">
      <Button icon="arrow-right-s" type="text" disabled={nextDisabled} onclick={onNext} />
    </span>
    {#if showSizeChanger}
      <select
        class="adorn-pagination-options"
        bind:value={pageSize}
        {disabled}
        class:disabled
        onchange={onPageSizeChange}
      >
        {#each pageSizeOptions as item}
          <option value={item}>{item}条/页</option>
        {/each}
      </select>
    {/if}
    {#if showQuickJumper}
      <div class="adorn-pagination-jumper">
        <span>跳至</span>
        <!-- svelte-ignore deprecated_event_handler -->
        <input
          type="number"
          class="adorn-pagination-input"
          class:disabled
          {disabled}
          onkeyup={onSearchKeyup}
          onblur={onSearch}
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
