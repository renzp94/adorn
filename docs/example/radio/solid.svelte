<script>
  import { Radio } from 'adorn-ui'

  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: true },
  ]
</script>

<Radio.Group {options} value="Apple" optionType="button" buttonStyle="solid" />
