import Component from './Checkbox.svelte'
import Group from './CheckboxGroup.svelte'

const Checkbox = Object.assign(
  Component,
  {
    Group,
  }
)

export { Checkbox }
export const CONTEXT_CHECKBOX  = 'context_checkbox'
export const CONTEXT_CHECKBOX_CHANGE  = 'context_checkbox_change'
