<script>
  import { Button, Flex } from 'adorn-ui'
</script>

<Flex wrap="wrap" gap="small">
  {#each Array.from({ length: 16 }) as _}
    <Button type="primary">Primary</Button>
  {/each}
</Flex>
