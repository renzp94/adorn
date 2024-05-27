import type { Align, ComponentBaseProps, Direction, Size } from "."

export interface SpaceProps extends ComponentBaseProps {
  align?: Omit<Align, 'stretch'> | 'baseline'
  direction?: Direction
  size?: Size | number | [Size | number, Size | number]
  wrap?: boolean
  // eslint-disable-next-line @typescript-eslint/ban-types
  split?: Function
}