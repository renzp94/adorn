<script>
  import { Radio } from 'adorn-ui'
  let value = 'Apple'

  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: true },
  ]
</script>

<Radio.Group bind:value {options}>
  <div slot="label" let:item>- {item.label}</div>
</Radio.Group>
