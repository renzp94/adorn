import type { ComponentBaseProps } from "."

export   interface AffixProps extends ComponentBaseProps {
  offset?: number
  position?: 'top' | 'bottom'
  target?: string
  zIndex?: number
  onChange?: (fixed: boolean) => void
  onScroll?: (value: { scrollTop: number; fixed: boolean }) => void
}