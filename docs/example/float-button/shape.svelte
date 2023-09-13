<script>
  import { FloatButton } from 'adorn-ui'
  import FloatButtonIframe from '../FloatButtonIframe.svelte'
</script>

<FloatButtonIframe>
  <FloatButton type="primary" shape="circle" icon="arrow-up" />
  <FloatButton
    type="primary"
    shape="square"
    icon="arrow-up"
    style="right: 94px;"
  />
</FloatButtonIframe>
