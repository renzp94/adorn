import type { ComponentBaseProps, IconName, Size, Target } from "."

export type ButtonType = 'primary' | 'dashed' | 'link' | 'text' | 'default'
export type ButtonHtmlType = 'submit' | 'reset' | 'button' | undefined | null
export type ButtonShape = 'default' | 'circle' | 'round'
export type ButtonTarget = '_self' | '_blank' | '_parent' | '_top' | string

export interface ButtonProps extends ComponentBaseProps {
  block?: boolean
  danger?: boolean
  disabled?: boolean
  ghost?: boolean
  href?: string
  htmlType?: ButtonHtmlType
  icon?: IconName
  loading?: boolean
  shape?: ButtonShape
  size?: Size
  target?: Target
  type?: ButtonType
}
