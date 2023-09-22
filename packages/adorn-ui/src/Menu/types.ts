import type { Direction, IconName } from "../utils/types"

export interface MenuItem  {
  danger?: boolean
  disabled?: boolean
  icon?: IconName
  key: string
  label?: string
  title?: string
  children?: MenuItem[]
}

export type MenuContext = { 
  activeKey?:string
  openKeys:string[]
  mode: Direction | "inline"
}