import type { ComponentBaseProps, IconName } from "."

export interface BreadcrumbItem {
  title?: string
  path?: string
  icon?: IconName
  disabled?: boolean
}

export interface BreadcrumbProps extends Omit<ComponentBaseProps, 'children'> {
  items?: BreadcrumbItem[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: (v: BreadcrumbItem) => any
  // eslint-disable-next-line @typescript-eslint/ban-types
  separator?: string | Function
  onItemClick?: (v: BreadcrumbItem) => void
}
