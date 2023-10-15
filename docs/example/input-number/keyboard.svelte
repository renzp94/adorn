<script>
  import { Button, InputNumber, Space } from 'adorn-ui'
  let keyboard = false
  const onTrigger = () => (keyboard = !keyboard)
</script>

<Space>
  <InputNumber placeholder="0.0" min={1} max={10} {keyboard} />
  <Button on:click={onTrigger}>{keyboard ? '关闭' : '开启'}Keyboard</Button>
</Space>
