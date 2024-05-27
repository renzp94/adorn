<script>
  import { Pagination } from 'adorn-ui'
</script>

<Pagination
  current={1}
  total={500}
  showTotal={total => `总共${total}记录`}
  showQuickJumper
  showSizeChanger
  showTitle
/>
