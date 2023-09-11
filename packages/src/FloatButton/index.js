/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import FloatButton from "./FloatButton.svelte";
import Group from "./Group.svelte";
import BackTop from "./BackTop.svelte";

FloatButton["Group"] = Group;
FloatButton["BackTop"] = BackTop;

export { FloatButton }

export const FLOAT_BUTTON_CONTEXT = "float_button_context"