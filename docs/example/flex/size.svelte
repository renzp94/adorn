<script>
  import { Button, Flex, Space } from 'adorn-ui'

  const sizes = ['small', 'middle', 'large']

  let size = 'small'
</script>

<Space direction="vertical" size="middle">
  <Space>
    {#each sizes as v}
      <Button
        key={v}
        type={size === v ? 'primary' : undefined}
        on:click={() => (size = v)}
      >
        {v}
      </Button>
    {/each}
  </Space>
  <Flex gap={size}>
    {#each Array.from({ length: 4 }) as _}
      <Button type="primary">Primary</Button>
    {/each}
  </Flex>
</Space>
