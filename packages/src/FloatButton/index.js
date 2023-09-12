import Component from "./FloatButton.svelte";
import Group from "./Group.svelte";
import BackTop from "./BackTop.svelte";

const FloatButton = Object.assign(
  Component,
  {
    Group,
    BackTop,
  }
)

export { FloatButton }

export const FLOAT_BUTTON_CONTEXT = "float_button_context"