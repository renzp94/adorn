<script>
  import { Menu } from 'adorn-ui'
  let items = [
    {
      label: 'Navigation 1',
      key: 'home',
      icon: 'home',
    },
    {
      label: 'Navigation 2',
      key: 'building',
      icon: 'building',
    },
    {
      label: 'Navigation 3',
      key: 'mail',
      icon: 'mail',
    },
    {
      label: 'Navigation 4',
      key: 'cloud',
      icon: 'cloud',
      disabled: true,
    },
  ]
</script>

<Menu {items} mode="horizontal" active="mail" />
