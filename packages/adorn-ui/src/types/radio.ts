import type { ComponentBaseProps, Size, Value,  } from "."

export interface RadioGroupCtx {
  disabled?: boolean
  name?: string
  optionType: 'default' | 'button'
  size?: Size
  value?: Value
}

export interface RadioGroupOption {
  label: string
  value: string | number
  disabled?: boolean
}

export interface RadioProps extends ComponentBaseProps {
  buttonStyle?: 'outline' | 'solid'
  checked?: boolean
  disabled?: boolean
  name?: string
  size?: Size
  type?: 'default' | 'button' 
  value?: Value
}

export interface RadioGroupProps extends ComponentBaseProps {
  buttonStyle?: 'outline' | 'solid'
  disabled?: boolean
  name?: string
  options?: RadioGroupOption[]
  optionType?: 'default' | 'button' 
  size?: Size
  value?: Value
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  label?: (item: RadioGroupOption) => any
  onChange?: (v?: Value) => void
}