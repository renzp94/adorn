<script>
  import { FloatButton } from 'adorn-ui'

  let open = false
  const onOpenChange = e => (open = e.detail)
</script>

<div>请看网站右下方，淘宝图标的按钮</div>
<FloatButton.Group
  icon="github-fill"
  trigger="hover"
  {open}
  on:openChange={onOpenChange}
  style="bottom: 140px;right: 130px;"
>
  <FloatButton icon="arrow-go-back" />
  <FloatButton icon="arrow-up" />
</FloatButton.Group>
<FloatButton.Group
  icon="github-fill"
  trigger="click"
  style="bottom: 140px;right: 180px;"
  {open}
  on:openChange={onOpenChange}
>
  <FloatButton icon="arrow-go-back" />
  <FloatButton icon="arrow-up" />
</FloatButton.Group>
