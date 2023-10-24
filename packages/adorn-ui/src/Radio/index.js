import Component from './Radio.svelte'
import Group from './RadioGroup.svelte'

const Radio = Object.assign(
  Component,
  {
    Group,
  }
)

export { Radio }
export const CONTEXT_RADIO  = 'context_radio'
export const CONTEXT_RADIO_CHANGE  = 'context_radio_change'