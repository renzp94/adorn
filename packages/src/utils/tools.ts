/**
 * 有条件的拼接前缀
 * @param val 判断条件
 * @param prefix 拼接前缀
 * @param concatVal 要拼接的内容，为空则用val拼接
 * @returns 拼接结果
 */
export const prefixConcat = (val:string|undefined, prefix = '', concatVal = undefined) =>
	val ? `${prefix}${concatVal ? concatVal : val}` : ''