import type { ComponentBaseProps, Direction, IconName } from ".";

export interface StepsItemsProps extends ComponentBaseProps {
  description?: string
  // eslint-disable-next-line @typescript-eslint/ban-types
  icon?: IconName | Function
  title?: string
  status?: 'active' | 'finish' | 'wait'
}

export interface StepsProps extends ComponentBaseProps {
  current?: number
  direction?:  Direction
  items: StepsItemsProps[]
  labelPlacement?: Direction
  progressDot?: boolean
  size?: 'default' | 'small'
}