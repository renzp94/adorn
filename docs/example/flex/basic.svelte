<script>
  import { Button, Flex, Space } from 'adorn-ui'

  let direction = $state('horizontal')
</script>

<Flex vertical gap="small">
  <Space>
    <Button
      type={direction === 'horizontal' ? 'primary' : undefined}
      onclick={() => (direction = 'horizontal')}
    >
      horizontal
    </Button>
    <Button
      type={direction === 'vertical' ? 'primary' : undefined}
      onclick={() => (direction = 'vertical')}
    >
      vertical
    </Button>
  </Space>
  <Flex vertical={direction === 'vertical'} wrap="wrap">
    {#each Array.from({ length: 4 }) as _, i}
      <div
        style:background={`${i % 2 ? '#1677ff' : '#1677ffbf'}`}
        style:width="20%"
        style:height="54px"
      ></div>
    {/each}
  </Flex>
</Flex>
