<script>
  import { Radio, Space } from 'adorn-ui'
  let value = $state('Apple')

  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: true },
  ]
</script>

<Space direction="vertical">
  <Radio.Group bind:value {options} />
  <Radio.Group bind:value {options} optionType="button" />
</Space>
