import type { CommonProps } from "../utils/types"

export interface TypographyBaseProps extends CommonProps {
  tag?: string
  title?: string
  copyable: boolean | CopyConfig
  type?: BaseType
  disabled?: boolean
  ellipsis?: boolean | EllipsisConfig
  keyboard?: boolean
  code?: boolean
  mark?: boolean
  underline?: boolean
  deleted?: boolean
  strong?: boolean
  italic?: boolean
  onCopy?: (status: boolean) => void
}

export type BaseType = 'info'| "primary" | 'success' | 'warning' | 'danger'

export interface EllipsisConfig {
  rows?: number;
  // expandable?: boolean;
  // suffix?: string;
  // onExpand?: MouseEvent;
  // onEllipsis?: (ellipsis: boolean) => void;
}

export interface CopyConfig {
  text?: string;
  icon?: string;
  // tooltips?: boolean;
}

export interface EditConfig {
  editing?: boolean;
  icon?: string;
  tooltip?: boolean;
  onStart?: () => void;
  onChange?: (value: string) => void;
  onCancel?: () => void;
  onEnd?: () => void;
  maxLength?: number;
  autoSize?: boolean;
  triggerType?: ('icon' | 'text')[];
}
