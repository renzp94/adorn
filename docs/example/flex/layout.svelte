<script>
  import { Flex } from 'adorn-ui'
</script>

<div class="card">
  <Flex gap="middle">
    <img
      class="thumb"
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      alt="thumb"
    />
    <Flex vertical justify="space-between">
      <Flex vertical gap="large">
        <div class="title">Adorn✨ 给您的UI加点彩</div>
        <div class="description">一款基于Svelte 4开发的组件库</div>
      </Flex>
      <Flex justify="space-between">
        <div class="tools-item">👍点赞</div>
        <div class="tools-item">查看详情</div>
      </Flex>
    </Flex>
  </Flex>
</div>

<style>
  .card {
    border-radius: 4px;
    margin: 12px;
    padding: 4px;
    width: 350px;
    border: 1px solid var(--vp-c-divider);
  }

  .card:hover {
    box-shadow:
      0 2px 4px rgba(0, 0, 0, 0.12),
      0 0 6px rgba(0, 0, 0, 0.04);
  }

  .thumb {
    border-radius: 4px;
    height: 100px;
    object-fit: cover;
  }

  .title {
    font-size: 20px;
    font-weight: 700;
    margin-top: 8px;
  }

  .description {
    color: var(--vp-c-text-2);
    font-size: 14px;
  }

  .tools-item {
    font-size: 12px;
    color: var(--vp-c-text-3);
    cursor: pointer;
  }
</style>
