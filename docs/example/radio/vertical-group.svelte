<script>
  import { Radio, Space, Input } from 'adorn-ui'

  let value = 1
</script>

<Radio.Group bind:value>
  <Space direction="vertical">
    <Radio value={1}>Option A</Radio>
    <Radio value={2}>Option B</Radio>
    <Radio value={3}>Option C</Radio>
    <Radio value={4}>
      More...
      {#if value === 4}
        <Input style={{ width: 100, marginLeft: 10 }} />
      {/if}
    </Radio>
  </Space>
</Radio.Group>
