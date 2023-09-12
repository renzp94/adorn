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