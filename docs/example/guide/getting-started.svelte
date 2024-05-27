<script>
  import { Button } from 'adorn-ui'
  let count = $state(0)
</script>

<div>
  <Button type="primary" onclick={() => count--}>-</Button>
  {count}
  <Button type="primary" onclick={() => count++}>+</Button>
</div>
