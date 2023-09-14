<script>
  import { Breadcrumb } from 'adorn-ui'

  const items = [
    {
      title: 'Project',
      path: '/project',
      icon: 'git-repository',
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
