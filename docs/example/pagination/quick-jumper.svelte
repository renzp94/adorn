<script>
  import { Space, Pagination } from 'adorn-ui'
</script>

<Space direction="vertical">
  <Pagination current={1} total={50} showQuickJumper />
  <Pagination current={1} total={50} showQuickJumper disabled />
</Space>
