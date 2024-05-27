<script>
  import { Breadcrumb, Icon } from 'adorn-ui'

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

<Breadcrumb {items}>
  {#snippet item(item)}
    <span>{item.title}</span>
    {#if item.icon}
      <Icon name={item.icon} />
    {/if}
  {/snippet}
</Breadcrumb>
