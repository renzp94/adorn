<script>
  import { Button, Flex, Space } from 'adorn-ui'

  const justifys = [
    'start',
    'end',
    'center',
    'space-around',
    'space-between',
    'space-evenly',
  ]

  const aligns = ['flex-start', 'center', 'flex-end', 'stretch']

  let justify = 'start'
  let align = 'flex-start'
</script>

<Space direction="vertical" size="middle">
  <Space direction="vertical">
    <div>Justify:</div>
    <Space>
      {#each justifys as v}
        <Button
          key={v}
          type={justify === v ? 'primary' : undefined}
          on:click={() => (justify = v)}
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
          on:click={() => (align = v)}
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
