<script>
  import { Space, Steps } from 'adorn-ui'
  const description = 'This is a description.'

  let items = [
    {
      title: 'Finished',
      description,
      icon: 'home',
    },
    {
      title: 'In Progress',
      description,
      icon: 'home',
    },
    {
      title: 'Waiting',
      description,
      icon: 'home',
    },
  ]
</script>

<Space direction="vertical">
  <Steps current={1} {items} />
  <Steps current={1} {items} size="small" />
</Space>
