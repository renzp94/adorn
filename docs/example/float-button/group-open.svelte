<script>
  import { FloatButton } from 'adorn-ui'

  let open = $state(false)
</script>

<div>请看网站右下方，Github图标的按钮</div>
<FloatButton.Group
  icon="github-fill"
  trigger="hover"
  bind:open
  style="bottom: 140px;right: 130px;"
>
  <FloatButton icon="arrow-go-back" />
  <FloatButton icon="arrow-up" />
</FloatButton.Group>
<FloatButton.Group
  icon="github-fill"
  trigger="click"
  style="bottom: 140px;right: 180px;"
  bind:open
>
  <FloatButton icon="arrow-go-back" />
  <FloatButton icon="arrow-up" />
</FloatButton.Group>
