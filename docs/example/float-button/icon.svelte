<script>
  import { FloatButton, Icon } from 'adorn-ui'
</script>

<div>请看网站右下方，Home图标的按钮</div>
<FloatButton.Group
  icon="home"
  trigger="click"
  style="bottom: 140px;right: 230px;"
>
  <FloatButton icon="arrow-go-back" />
  <FloatButton icon="arrow-up" />
</FloatButton.Group>

<FloatButton.Group
  trigger="click"
  style="bottom: 140px;right: 280px;"
>
  {#snippet icon()}
    <Icon name="home" size="16px" color="#007aff" />
  {/snippet}
  <FloatButton icon="arrow-go-back" />
  <FloatButton icon="arrow-up" />
</FloatButton.Group>
