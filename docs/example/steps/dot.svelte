<script>
  import { Space, Steps } from 'adorn-ui'
  const description = 'This is a description.'

  let items = [
    {
      title: 'Finished',
      description,
    },
    {
      title: 'In Progress',
      description,
    },
    {
      title: 'Waiting',
      description,
    },
  ]
</script>

<Steps current={1} {items} progressDot />
<Steps current={1} {items} direction="vertical" progressDot />
