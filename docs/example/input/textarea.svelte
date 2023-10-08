<script>
  import { Input, Space } from 'adorn-ui'
</script>

<Space direction="vertical" style="width: 100%;">
  <Input.TextArea rows="4" placeholder="请输入" />
  <Input.TextArea rows="4" placeholder="请输入" disabled />
  <Input.TextArea rows="4" placeholder="请输入" showCount maxLength={300} />
</Space>
