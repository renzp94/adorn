<script>
  import { Button, Space } from 'adorn-ui'
</script>

<Space size={[8, 16]} wrap>
  {#each new Array(20).fill(null) as i}
    <Button type="primary">Button</Button>
  {/each}
</Space>
