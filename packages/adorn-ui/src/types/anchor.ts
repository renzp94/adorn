import type { ComponentBaseProps, Direction } from "."

export interface AnchorLinkProps extends Omit<ComponentBaseProps, 'children'> {
  href?: string
  title?: string
  active?: boolean
}

export interface AnchorItem {
  key: string
  title: string
  href: string
}

export interface AnchorProps extends Omit<ComponentBaseProps, 'children'> {
  affix?: boolean
  items?: AnchorItem[]
  direction?: Direction
  offsetTop?: number
  onItemClick?: (v: AnchorItem) => void
}