import Component from './Input.svelte'
import Number from './Number.svelte'
import Password from './Password.svelte'
import TextArea from './TextArea.svelte'

const Input = Object.assign(
  Component,
  {
    Number,
    Password,
    TextArea
  }
)

export { Input }