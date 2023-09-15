<script>
  import { FloatButton } from 'adorn-ui'
</script>

<div>请看网站右下方，淘宝图标的按钮</div>
<FloatButton.Group icon="taobao-fill" trigger="hover" style="bottom: 140px;">
  <FloatButton icon="arrow-go-back" />
  <FloatButton icon="arrow-up" />
</FloatButton.Group>
<FloatButton.Group
  icon="taobao-fill"
  trigger="click"
  style="bottom: 140px;right: 80px;"
>
  <FloatButton icon="arrow-go-back" />
  <FloatButton icon="arrow-up" />
</FloatButton.Group>
