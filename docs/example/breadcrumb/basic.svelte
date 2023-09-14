<script>
  import { Breadcrumb } from 'adorn-ui'

  const items = [
    {
      title: 'Project',
      path: '/project',
      disabled: true,
    },
    {
      title: 'List',
      path: '/list',
    },
    {
      title: 'Details',
    },
  ]
</script>

<Breadcrumb {items} />
