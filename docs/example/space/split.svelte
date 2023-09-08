<script>
  import { Button, Divider, Space } from 'adorn-ui'
  let size = 'small'

  const onChange = v => (size = v)
</script>

<Space>
  <Divider type="vertical" slot="split" />
  <Button type="link">link</Button>
  <Button type="link">link</Button>
  <Button type="link">link</Button>
</Space>
