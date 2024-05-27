import type { ComponentBaseProps, Value } from ".";

export interface CheckboxProps extends ComponentBaseProps {
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  indeterminate?: boolean;
  value?: Value;
  onChange?: (checked: boolean) => void;
}

export interface CheckboxGroupProps extends ComponentBaseProps {
  name?: string;
  label?: string
  value?: Value[]
  disabled?: boolean
  options?: CheckboxGroupOption[]
  onChange?: (value: Value[]) => void;
}

export interface CheckboxGroupOption {
  label?: string
  value: Value
  disabled?: boolean
}

export interface CheckboxGroupCtx {
  disabled?: boolean
  name?: string | undefined
  value?: Value[]
}