<script>
  import { Button, Space, Steps } from 'adorn-ui'
  let current = $state(0)

  let items = [
    {
      title: 'First',
      content: 'First-content',
    },
    {
      title: 'Second',
      content: 'Second-content',
    },
    {
      title: 'Last',
      content: 'Last-content',
    },
  ]
</script>

<Steps {current} {items} />
<div class="content">
  {items[current].content}
</div>
<Space>
  <Button
    type="primary"
    onclick={() => (current = current - 1)}
    disabled={current === 0}
  >
    上一步
  </Button>
  <Button
    type="primary"
    onclick={() => (current = current + 1)}
    disabled={current === items.length - 1}
  >
    下一步
  </Button>
</Space>

<style>
  .content {
    margin: 12px 0;
    height: 200px;
    background: var(--vp-code-tab-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
  }
</style>
