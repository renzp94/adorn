<script>
  import { Checkbox, Space } from 'adorn-ui'

  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ]

  const onChange = e => {
    console.log(e)
  }
</script>

<Space direction="vertical">
  <Checkbox.Group {options} value={['Apple']} on:change={onChange} />
  <Checkbox.Group {options} value={['Apple', 'Pear']} on:change={onChange} />
  <Checkbox.Group {options} disabled />
</Space>
