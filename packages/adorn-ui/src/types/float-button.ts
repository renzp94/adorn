import type { ComponentBaseProps, IconName, Target } from "."


export interface BackTopProps extends Omit<FloatButtonProps, 'target'> {
  target?: HTMLElement | Window
  duration?: number
  visibilityHeight?: number
}

export interface FloatButtonProps extends ComponentBaseProps {
  icon?: IconName
  description?: string
  type?: 'primary' | 'default'
  shape?: 'circle' | 'square'
  href?: string
  target?: Target
}


export interface GroupProps extends Omit<FloatButtonProps, 'icon'> {
  // eslint-disable-next-line @typescript-eslint/ban-types
  icon?: IconName | Function
  trigger?: 'click' | 'hover'
  open?: boolean
  onOpenChange?: (status: boolean) => void
}