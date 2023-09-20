<script>
  import { Pagination } from 'adorn-ui'
</script>

<Pagination
  defaultCurrent={1}
  total={500}
  showQuickJumper
  showSizeChanger
  showTitle
>
  <span slot="total" let:total>总共{total}记录</span>
</Pagination>
