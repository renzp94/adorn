<script>
  import { Typography, Space, Divider } from 'adorn-ui'
  const { Text } = Typography

  const onCopy = status => {
    if (status) {
      alert('copy success')
    } else {
      alert('copy error')
    }
  }
</script>

<Space direction="vertical" style="width: 100%;">
  <Divider>默认图标</Divider>
  <Text type="primary" copyable>Hello, Adorn UI</Text>
  <Divider>自定义图标</Divider>
  <Text type="primary" copyable={{ icon: 'clipboard' }} {onCopy}>
    Hello, Adorn UI
  </Text>
</Space>
