<script>
  import { FloatButton } from 'adorn-ui'
  import FloatButtonIframe from '../FloatButtonIframe.svelte'

  let open = false
  const onOpenChange = e => (open = e.detail)
</script>

<FloatButtonIframe>
  <FloatButton.Group
    icon="tools-fill"
    trigger="hover"
    {open}
    on:openChange={onOpenChange}
  >
    <FloatButton icon="arrow-go-back" />
    <FloatButton icon="arrow-up" />
  </FloatButton.Group>
  <FloatButton.Group
    icon="tools-fill"
    trigger="click"
    style="right: 94px;"
    {open}
    on:openChange={onOpenChange}
  >
    <FloatButton icon="arrow-go-back" />
    <FloatButton icon="arrow-up" />
  </FloatButton.Group>
</FloatButtonIframe>
