<script>
  import { Button } from 'adorn-ui'
  let size = 'middle'
  const onChange = v => (size = v)
</script>

<p>
  <Button type="primary" on:click={() => onChange('large')}>large</Button>
  <Button type="primary" on:click={() => onChange('middle')}>middle</Button>
  <Button type="primary" on:click={() => onChange('small')}>small</Button>
</p>

<p>
  <Button type="primary" {size}>Primary</Button>
  <Button {size}>Default</Button>
  <Button type="dashed" {size}>Dashed</Button>
</p>
<p>
  <Button type="link" {size}>Link</Button>
</p>
<p>
  <Button type="primary" icon="download-cloud" {size} />
  <Button type="primary" shape="circle" icon="download-cloud" {size} />
  <Button type="primary" shape="round" icon="download-cloud" {size} />
  <Button type="primary" shape="round" icon="download-cloud" {size}
    >Download</Button
  >
</p>
<p>
  <Button type="primary" icon="download-cloud" {size}>Download</Button>
</p>
