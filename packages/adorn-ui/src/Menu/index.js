import Component from './Menu.svelte'
import MenuItem from './MenuItem.svelte'
import SubMenu from './SubMenu.svelte'

const Menu = Object.assign(
  Component,
  {
    MenuItem,
    SubMenu,
  }
)

export { Menu }
