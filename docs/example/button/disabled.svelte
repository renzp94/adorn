<script>
  import { Button } from 'adorn-ui'
</script>

<p>
  <Button type="primary">Primary</Button>
  <Button type="primary" disabled>Primary(disabled)</Button>
</p>
<p>
  <Button>Default</Button>
  <Button disabled>Default(disabled)</Button>
</p>
<p>
  <Button type="dashed">Dashed</Button>
  <Button type="dashed" disabled>Dashed(disabled)</Button>
</p>
<p>
  <Button type="text">Text</Button>
  <Button type="text" disabled>Text(disabled)</Button>
</p>
<p>
  <Button type="link">Link</Button>
  <Button type="link" disabled>Link(disabled)</Button>
</p>
<p>
  <Button type="primary" href="https://ant.design/index-cn">
    Href Primary
  </Button>
  <Button type="primary" href="https://ant.design/index-cn" disabled>
    Href Primary(disabled)
  </Button>
</p>
<p>
  <Button danger>Danger Default</Button>
  <Button danger disabled>Danger Default(disabled)</Button>
</p>
<p>
  <Button danger type="text">Danger Text</Button>
  <Button danger type="text" disabled>Danger Text(disabled)</Button>
</p>
<p>
  <Button type="link" danger>Danger Link</Button>
  <Button type="link" danger disabled>Danger Link(disabled)</Button>
</p>
<p class="button-ghost-wrapper">
  <Button ghost>Ghost</Button>
  <Button ghost disabled>Ghost(disabled)</Button>
</p>

<style>
  .button-ghost-wrapper {
    background-color: gainsboro;
    padding: 8px;
  }
</style>
