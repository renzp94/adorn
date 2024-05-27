<script>
  import { Button, Flex, Space } from 'adorn-ui'

  const justifies = [
    'start',
    'end',
    'center',
    'space-around',
    'space-between',
    'space-evenly',
  ]

  const aligns = ['top', 'middle', 'bottom', 'stretch']

  let justify = $state('start')
  let align = $state('top')
</script>

<Space direction="vertical" size="middle">
  <Space direction="vertical">
    <div>Justify:</div>
    <Space>
      {#each justifies as v}
        <Button
          key={v}
          type={justify === v ? 'primary' : undefined}
          onclick={() => (justify = v)}
        >
          {v}
        </Button>
      {/each}
    </Space>
  </Space>
  <Space direction="vertical">
    <div>Align:</div>
    <Space>
      {#each aligns as v}
        <Button
          key={v}
          type={align === v ? 'primary' : undefined}
          onclick={() => (align = v)}
        >
          {v}
        </Button>
      {/each}
    </Space>
  </Space>
  <Flex {justify} {align} style="height: 100px;">
    {#each Array.from({ length: 4 }) as _}
      <Button type="primary">Primary</Button>
    {/each}
  </Flex>
</Space>

<style>
  .flex-demo :global(.adorn-btn) {
    height: 32px;
  }
</style>
