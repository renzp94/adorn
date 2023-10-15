<script>
  import { Icon, InputNumber, Space } from 'adorn-ui'
</script>

<Space direction="vertical" style="width: 100%;">
  <InputNumber placeholder="请输入" size="small">
    <span slot="addonBefore">http://</span>
  </InputNumber>
  <InputNumber placeholder="请输入" size="small">
    <Icon slot="addonAfter" name="search" />
  </InputNumber>
  <InputNumber placeholder="请输入" size="small">
    <span slot="addonBefore">http://</span>
    <Icon slot="addonAfter" name="search" />
  </InputNumber>
  <InputNumber placeholder="请输入" size="middle">
    <span slot="addonBefore">http://</span>
    <Icon slot="addonAfter" name="search" />
  </InputNumber>
  <InputNumber placeholder="请输入" size="large">
    <span slot="addonBefore">http://</span>
    <Icon slot="addonAfter" name="search" />
  </InputNumber>
</Space>
