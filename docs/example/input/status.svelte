<script>
  import { Icon, Input, Space } from 'adorn-ui'
</script>

<Space direction="vertical" style="width: 100%;">
  <Input placeholder="请输入" />
  <Input placeholder="请输入" status="error" />
  <Input placeholder="请输入" status="warning" />
  <Input placeholder="请输入" status="error">
    <span slot="addonBefore">http://</span>
  </Input>
  <Input placeholder="请输入" status="warning">
    <Icon slot="addonAfter" name="search" />
  </Input>
  <Input placeholder="请输入" status="warning">
    <Icon slot="prefix" name="user" />
    <Icon slot="suffix" name="search" />
  </Input>
  <Input.TextArea rows="4" placeholder="请输入" status="warning" />
  <Input.Search placeholder="input search text" status="error" />
  <Input.Password placeholder="请输入" status="error" />
</Space>
