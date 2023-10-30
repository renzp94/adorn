<script>
  import { Checkbox, Divider } from 'adorn-ui'

  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ]

  let value = ['Apple']

  const onCheckAllChange = ({ detail }) => {
    if (detail) {
      value = options.map(item => item.value)
    } else {
      value = []
    }
  }

  $: checkAll = value.length === options.length
  $: indeterminate = value.length > 0 && !checkAll
</script>

<Checkbox {indeterminate} checked={checkAll} on:change={onCheckAllChange}>
  Check all
</Checkbox>
<Divider />
<Checkbox.Group {options} bind:value />
