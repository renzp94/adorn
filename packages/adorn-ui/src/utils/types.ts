import type { DOMAttributes } from "svelte/elements"

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface CommonProps extends DOMAttributes<any> {
  class?: string | null
  style?: string | null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any
}

export type Direction = 'horizontal' | 'vertical'

export type Target = '_self' | '_blank' | '_parent' | '_top' | string

export type Size = 'large' | 'middle' | 'small'

export type Justify = 'start'
| 'end'
| 'center'
| 'space-around'
| 'space-between'
| 'space-evenly'

export type Align = 'top' | 'middle' | 'bottom' | 'stretch' | 'normal'
