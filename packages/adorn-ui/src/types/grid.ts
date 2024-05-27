import type { Align, ComponentBaseProps, Justify } from "."

export interface RowProps extends ComponentBaseProps {
  align?: Align
  gutter?: number | number[]
  justify?: Justify
  wrap?: boolean
}

export interface ColProps extends ComponentBaseProps {
  flex?: string | number
  offset?: string | number
  order?: number
  push?: number
  pull?: number
  span?: number
}