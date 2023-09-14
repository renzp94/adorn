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
  <svelte:fragment slot="item" let:item>
    <span>{item.title}</span>
    {#if item.icon}
      <Icon name={item.icon} />
    {/if}
  </svelte:fragment>
</Breadcrumb>
