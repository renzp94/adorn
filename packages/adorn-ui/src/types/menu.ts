import type { ComponentBaseProps, Direction, IconName } from "."

export interface MenuProps extends ComponentBaseProps {
  inlineCollapsed?: boolean
  inlineIndent?: number
  items: MenuItem[]
  mode?: Direction | 'inline'
  openKeys?: string[]
  selectable?: boolean
  active?: string
  triggerSubMenuAction?: 'hover' | 'click'
  onClick?: (key: string) => void
  onOpenChange?: (v: string[]) => void
}

export interface MenuItemProps extends Omit<MenuItem, 'onclick' | 'children'> {
  danger?: boolean
  disabled?: boolean
  icon?: IconName
  key: string
  label?: string
  title?: string
  onclick?: (key: string) => void
}

export interface MenuItem extends ComponentBaseProps {
  danger?: boolean
  disabled?: boolean
  icon?: IconName
  key: string
  label?: string
  title?: string
  children?: MenuItem[]
}

export type MenuContext = {
  activeKey?: string
  openKeys: string[]
  mode: Direction | 'inline'
}

export interface SubMenuProps extends MenuItem {
  hasSubmenu?: boolean
  triggerSubMenuAction?: 'hover' | 'click'
  onItemClick?: (key: string) => void
  onOpenChange?: (v: { key: string; open: boolean }) => void
}