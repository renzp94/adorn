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
    {
      label: 'Navigation 5',
      key: 'store',
      icon: 'store',
    },
    {
      label: 'Navigation 6',
      key: 'profile',
      icon: 'profile',
    },
    {
      label: 'Navigation 7',
      key: 'award',
    },
    {
      label: 'Navigation 9',
      key: 'calculator',
    },
    {
      label: 'Navigation 10',
      key: '10',
    },
    {
      label: 'Navigation 11',
      key: '11',
    },
    {
      label: 'Navigation 12',
      key: '12',
    },
    {
      label: 'Navigation 13',
      key: '13',
    },
  ]
</script>

<Menu {items} mode="horizontal" active="mail" />
