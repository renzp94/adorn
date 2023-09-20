<script>
  import { Space, Pagination } from 'adorn-ui'
</script>

<Space direction="vertical">
  <Pagination defaultCurrent={1} total={50} showQuickJumper />
  <Pagination defaultCurrent={1} total={50} showQuickJumper disabled />
</Space>
