
export type BaseType = 'info'| "primary" | 'success' | 'warning' | 'danger'

export interface EllipsisConfig {
  rows?: number;
  // expandable?: boolean;
  // suffix?: string;
  // onExpand?: MouseEvent;
  // onEllipsis?: (ellipsis: boolean) => void;
}

export interface BlockProps  {
  title?: string;
  editable?: boolean | EditConfig;
  copyable?: boolean | CopyConfig;
  type?: BaseType;
  disabled?: boolean;
  ellipsis?: boolean | EllipsisConfig;
  // decorations
  code?: boolean;
  mark?: boolean;
  underline?: boolean;
  delete?: boolean;
  strong?: boolean;
  keyboard?: boolean;
  italic?: boolean;
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
