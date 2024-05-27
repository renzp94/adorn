import type { ComponentBaseProps, Direction } from "."

export interface DividerProps extends ComponentBaseProps {
  dashed?: boolean
  type?: Direction
  orientation?: 'left' | 'center' | 'right'
  plain?: boolean
}