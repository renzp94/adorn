<script>
  import { FloatButton } from 'adorn-ui'
  import FloatButtonIframe from '../FloatButtonIframe.svelte'
</script>

<FloatButtonIframe>
  <FloatButton.Group icon="tools-fill" trigger="hover">
    <FloatButton icon="arrow-go-back" />
    <FloatButton icon="arrow-up" />
  </FloatButton.Group>
  <FloatButton.Group icon="tools-fill" trigger="click" style="right: 94px;">
    <FloatButton icon="arrow-go-back" />
    <FloatButton icon="arrow-up" />
  </FloatButton.Group>
</FloatButtonIframe>
