/**
 * 有条件的拼接前缀
 * @param val 判断条件
 * @param prefix 拼接前缀
 * @param concatVal 要拼接的内容，为空则用val拼接
 * @returns 拼接结果
 */
export const prefixConcat = <T,K>(val: T, prefix = '', concatVal: K | undefined = undefined) =>
	val ? `${prefix}${concatVal ? concatVal : val}` : ''

/**
 * 判断是否未定义
 * @param v 变量
 * @returns 如果变量定义则返回true,否则返回false
*/
export const isUndef = (v: unknown): boolean => v === undefined || v === null

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
	let scrollTop = container instanceof Window ? container.document.body.scrollTop : container.scrollTop
	let scrollLeft = container instanceof Window ? container.document.body.scrollLeft : container.scrollLeft
	const topStep = ((scrollTop - top) / duration) * 10
	const leftStep = ((scrollLeft - left) / duration) * 10

	const timer = setInterval(() => {
		scrollTop = container instanceof Window ? container.document.body.scrollTop : container.scrollTop
		scrollLeft = container instanceof Window ? container.document.body.scrollLeft : container.scrollLeft
		if (scrollTop <= top) {
			clearInterval(timer)
			return
		}
		container?.scrollTo(scrollLeft - leftStep, scrollTop - topStep)
	}, 10)

	return timer
}