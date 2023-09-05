<script>
  import { Button } from 'adorn-ui'
  let count = 0
</script>

<div>
  <Button type="primary" on:click={() => count--}>-</Button>
  {count}
  <Button type="primary" on:click={() => count++}>+</Button>
</div>
