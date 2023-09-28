<script>
  import { Input, Space } from 'adorn-ui'
</script>

<Space direction="vertical" style="width: 100%;">
  <Input.Password placeholder="请输入" />
  <Input.Password placeholder="请输入">
    <span slot="addonBefore">before</span>
  </Input.Password>
  <Input.Password placeholder="请输入">
    <span slot="addonAfter">after</span>
  </Input.Password>
  <Input.Password placeholder="请输入">
    <span slot="prefix">prefix</span>
  </Input.Password>
</Space>
