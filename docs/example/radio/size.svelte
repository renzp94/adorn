<script>
  import { Radio, Space } from 'adorn-ui'

  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: true },
  ]
</script>

<Space direction="vertical">
  <Radio.Group {options} optionType="button" size="large" />
  <Radio.Group {options} optionType="button" size="middle" />
  <Radio.Group {options} optionType="button" size="small" />
</Space>
