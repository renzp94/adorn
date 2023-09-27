<script>
  import { Icon, Input, Space } from 'adorn-ui'
</script>

<Space direction="vertical" style="width: 100%;">
  <Input placeholder="请输入" size="small">
    <span slot="addonBefore">http://</span>
  </Input>
  <Input placeholder="请输入" size="small">
    <Icon slot="addonAfter" name="search" />
  </Input>
  <Input placeholder="请输入" size="small">
    <span slot="addonBefore">http://</span>
    <Icon slot="addonAfter" name="search" />
  </Input>
  <Input placeholder="请输入" size="middle">
    <span slot="addonBefore">http://</span>
    <Icon slot="addonAfter" name="search" />
  </Input>
  <Input placeholder="请输入" size="large">
    <span slot="addonBefore">http://</span>
    <Icon slot="addonAfter" name="search" />
  </Input>
</Space>
