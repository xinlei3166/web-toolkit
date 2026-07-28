/**
 * 将对象转为 { key1, key2 } 形式的数组
 * @param {Record<string, any>} obj 源对象
 * @param {string} key1 键字段名
 * @param {string} key2 值字段名
 * @returns {Array<Record<string, any>>}
 */
export function convertMapToMapArray(obj, key1, key2) {
  const arr = []
  for (const k in obj) {
    arr.push({ [key1]: k, [key2]: obj[k] })
  }
  return arr
}
