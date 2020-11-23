/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if(digits === '') return []
  
  const map = new Map();
  map.set('2', 'abc')
  map.set('3', 'def')
  map.set('4', 'ghi')
  map.set('5', 'jkl')
  map.set('6', 'mno')
  map.set('7', 'pqrs')
  map.set('8', 'tuv')
  map.set('9', 'wxyz')

  let ret = []
  search('', 0)
  return ret

  /**
   * @param {string} s 当前拼接的字符串
   * @param {string} level 下探的层级，最深就是 digits 的长度
   * @return {string[]}
   */
  function search(s, level) {
    // 终止条件
    if(level === digits.length) return ret.push(s)

    // 拆分子问题
    // 当前层对应数字，其对应的字母
    let letters = map.get(digits.charAt(level))

    // 下探
    for (let i = 0; i < letters.length; i++) {
      // 拼接字符串
      search(s + letters.charAt(i), level + 1)
    }
  }
};


console.log(letterCombinations('23'))