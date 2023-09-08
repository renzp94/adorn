<script>
  import { Button, Space } from 'adorn-ui'
</script>

<Space wrap>
  <div class="space-align-block">
    <Space align="center">
      center
      <Button type="primary">Primary</Button>
      <span class="mock-block">Block</span>
    </Space>
  </div>
  <div class="space-align-block">
    <Space align="start">
      start
      <Button type="primary">Primary</Button>
      <span class="mock-block">Block</span>
    </Space>
  </div>
  <div class="space-align-block">
    <Space align="end">
      end
      <Button type="primary">Primary</Button>
      <span class="mock-block">Block</span>
    </Space>
  </div>
  <div class="space-align-block">
    <Space align="baseline">
      baseline
      <Button type="primary">Primary</Button>
      <span class="mock-block">Block</span>
    </Space>
  </div>
</Space>

<style>
  .space-align-block {
    border: 1px solid dodgerblue;
    width: calc(50% - 16px);
    text-align: center;
    padding: 16px 0;
  }

  .mock-block {
    background-color: #e0e0e0;
    padding: 32px 8px 16px;
  }
</style>
