<script>
  import { Breadcrumb, Icon } from 'adorn-ui'

  const items = [
    {
      title: 'Project',
      path: '/project',
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

<Breadcrumb {items}>
  {#snippet  separator()}
    <Icon name="arrow-right-double" />
  {/snippet}
</Breadcrumb>
