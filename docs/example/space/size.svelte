<script>
  import { Button, Divider, Space } from 'adorn-ui'
  let size = 'small'

  const onChange = v => (size = v)
</script>

<Space direction="vertical" style="width: 100%;">
  <Divider>默认大小类型</Divider>
  <Space>
    <Button type="primary" on:click={() => onChange('small')}>Small</Button>
    <Button type="primary" on:click={() => onChange('middle')}>Middle</Button>
    <Button type="primary" on:click={() => onChange('large')}>Large</Button>
  </Space>
  <Space {size}>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="link">Link</Button>
  </Space>
  <Divider>自定义大小: 32</Divider>
  <Space size={32}>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="link">Link</Button>
  </Space>
</Space>
