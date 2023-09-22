<script>
  import { Menu } from 'adorn-ui'
  let items = [
    {
      label: 'Navigation 1',
      key: 'home',
      icon: 'home',
      children: [
        {
          label: 'Navigation 11',
          key: 'building1',
          icon: 'building',
          children: [
            {
              label: 'Navigation 111',
              key: 'building11',
              icon: 'building',
            },
            {
              label: 'Navigation 112',
              key: 'building12',
              icon: 'building',
            },
            {
              label: 'Navigation 113',
              key: 'building13',
              icon: 'building',
            },
            {
              label: 'Navigation 114',
              key: 'building14',
              icon: 'building',
            },
          ],
        },
        {
          label: 'Navigation 12',
          key: 'building2',
          icon: 'building',
        },
        {
          label: 'Navigation 13',
          key: 'building3',
          icon: 'building',
        },
        {
          label: 'Navigation 14',
          key: 'building4',
          icon: 'building',
        },
      ],
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

<Menu {items} mode="inline" active="mail" />
