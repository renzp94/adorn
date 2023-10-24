<script>
  import { Radio, Space } from 'adorn-ui'
</script>

<Space direction="vertical">
  <Radio.Group defaultValue="a">
    <Radio type="button" value="a">Hangzhou</Radio>
    <Radio type="button" value="b">Shanghai</Radio>
    <Radio type="button" value="c">Beijing</Radio>
    <Radio type="button" value="d">Chengdu</Radio>
  </Radio.Group>
  <Radio.Group defaultValue="a">
    <Radio type="button" value="a">Hangzhou</Radio>
    <Radio type="button" value="b" disabled>Shanghai</Radio>
    <Radio type="button" value="c">Beijing</Radio>
    <Radio type="button" value="d">Chengdu</Radio>
  </Radio.Group>
  <Radio.Group disabled defaultValue="a">
    <Radio type="button" value="a">Hangzhou</Radio>
    <Radio type="button" value="b">Shanghai</Radio>
    <Radio type="button" value="c">Beijing</Radio>
    <Radio type="button" value="d">Chengdu</Radio>
  </Radio.Group>.
</Space>
