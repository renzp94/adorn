<script>
  import { Checkbox } from 'adorn-ui'

  const onChange = v => {
    console.log(v)
  }
</script>

<Checkbox on:change={onChange}>Checkbox</Checkbox>
