<script>
  import { FloatButton } from 'adorn-ui'
  import FloatButtonIframe from './FloatButtonIframe.svelte'
</script>

<FloatButtonIframe>
  <FloatButton.Group>
    <FloatButton icon="arrow-go-back" />
    <FloatButton icon="settings" />
    <FloatButton icon="arrow-up" />
  </FloatButton.Group>
  <FloatButton.Group shape="square" style="right: 94px;">
    <FloatButton icon="arrow-go-back" />
    <FloatButton icon="settings" />
    <FloatButton icon="arrow-up" />
  </FloatButton.Group>
</FloatButtonIframe>
