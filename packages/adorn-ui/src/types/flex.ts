import type { Align, ComponentBaseProps, Justify, Size } from "."

export interface FlexProps extends ComponentBaseProps {
  vertical?: boolean
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  justify?: Justify
  align?: Align
  flex?: string
  gap?: Size | string | undefined
  tag?: string
}