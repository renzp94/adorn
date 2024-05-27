<script>
  import { Radio, Space } from 'adorn-ui'
</script>

<Space direction="vertical">
  <Radio.Group value="a">
    <Radio type="button" value="a">Hangzhou</Radio>
    <Radio type="button" value="b">Shanghai</Radio>
    <Radio type="button" value="c">Beijing</Radio>
    <Radio type="button" value="d">Chengdu</Radio>
  </Radio.Group>
  <Radio.Group value="a">
    <Radio type="button" value="a">Hangzhou</Radio>
    <Radio type="button" value="b" disabled>Shanghai</Radio>
    <Radio type="button" value="c">Beijing</Radio>
    <Radio type="button" value="d">Chengdu</Radio>
  </Radio.Group>
  <Radio.Group disabled value="a">
    <Radio type="button" value="a">Hangzhou</Radio>
    <Radio type="button" value="b">Shanghai</Radio>
    <Radio type="button" value="c">Beijing</Radio>
    <Radio type="button" value="d">Chengdu</Radio>
  </Radio.Group>.
</Space>
