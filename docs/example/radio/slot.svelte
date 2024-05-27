<script>
  import { Radio } from 'adorn-ui'
  let value = $state('Apple')

  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: true },
  ]
</script>

<Radio.Group bind:value {options}>
  {#snippet label(item)}
    <div>- {item.label}</div>
  {/snippet}
</Radio.Group>
