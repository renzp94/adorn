import Component from './Input.svelte'
import Number from './Number.svelte'
import Password from './Password.svelte'
import Search from './Search.svelte'
import TextArea from './TextArea.svelte'

const Input = Object.assign(
  Component,
  {
    Number,
    Password,
    Search,
    TextArea
  }
)

export { Input }