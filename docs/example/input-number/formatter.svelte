<script>
  import { InputNumber } from 'adorn-ui'

  let value = 1000

  $: {
    console.log(value)
  }
  const onInput = e => {
    console.log(e)
  }
</script>

<InputNumber
  placeholder="0.0"
  bind:value
  on:input={onInput}
  formatter={v => `$ ${v}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
  stringMode
/>
