import { isUnDef } from "@renzp/utils"

/**
 * 有条件的拼接前缀
 * @param val 判断条件
 * @param prefix 拼接前缀
 * @param concatVal 要拼接的内容，为空则用val拼接
 * @returns 拼接结果
 */
export const prefixConcat = <T,K>(val: T, prefix = '', concatVal: K | undefined = undefined) =>
	val ? `${prefix}${concatVal ? concatVal : val}` : ''

export const copyText = async (text: string) => {
	// navigator.clipboard只能用于https或者localhost。
	if (navigator?.clipboard?.writeText) {
		navigator.clipboard.writeText(text)
		return
	}
	const input = document.createElement('input')
	document.body.appendChild(input)
	input.value = text
	input.select()
	document.execCommand('copy')
	document.body.removeChild(input)
}
/**
 *  * 滚动到
 * @param container 滚动视图
 * @param duration 滚动时长
 * @param param2 { top?:number;left?:number} 滚动到的位置
 * @returns 
 */
export const scrollTo = (container:HTMLElement | Window = window,duration = 450, {top = 0,left = 0}: {top?:number;left?:number} = {top:0,left:0}) => {
	const scrollEl = getElement(container)
	
	let scrollTop = scrollEl.scrollTop
	let scrollLeft = scrollEl.scrollLeft
	const topStep = ((scrollTop - top) / duration) * 10
	const leftStep = ((scrollLeft - left) / duration) * 10

	const timer = setInterval(() => {
		scrollTop = scrollEl.scrollTop
		scrollLeft = scrollEl.scrollLeft
		if (scrollTop <= top) {
			clearInterval(timer)
			return
		}
		scrollEl?.scrollTo(scrollLeft - leftStep, scrollTop - topStep)
	}, 10)

	return timer
}


const camelizeRE = /-(\w)/g;
const camelize = (str:string) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
}
export const getStyle = (element: HTMLElement,styleName:string) => {
  if (!element || !styleName) return ''

  let key = camelize(styleName)
  if (key === 'float') key = 'cssFloat'
  try {
    const style = (element.style as any)[key]
    if (style) return style
    const computed: any = document.defaultView?.getComputedStyle(element, '')
    return computed ? computed[key] : ''
  } catch {
    return (element.style as any)[key]
  }
}
export const isScroll = (el: HTMLElement, isVertical?: boolean): boolean => {

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const key = (
    {
      undefined: 'overflow',
      true: 'overflow-y',
      false: 'overflow-x',
    } as const
  )[String(isVertical)]!
  const overflow = getStyle(el, key)
  return ['scroll', 'auto', 'overlay'].some((s) => overflow.includes(s))
}

export const getScrollContainer = (
  el: HTMLElement,
  isVertical?: boolean
): Window | HTMLElement | undefined => {
  let parent: HTMLElement = el
  while (parent) {
    if ([window, document, document.documentElement].includes(parent))
      return window

    if (isScroll(parent, isVertical)) return parent

    parent = parent.parentNode as HTMLElement
  }

  return parent
}

export const getElement = (el?:Window|HTMLElement):HTMLElement => isUnDef(el) || el instanceof Window ? document.documentElement : el as HTMLElement
