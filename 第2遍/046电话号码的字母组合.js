/* 
  https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
*/
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length === 0) return []
  
  let map = new Map()
  map.set('2', 'abc')
  map.set('3', 'def')
  map.set('4', 'ghi')
  map.set('5', 'jkl')
  map.set('6', 'mno')
  map.set('7', 'pqrs')
  map.set('8', 'tuv')
  map.set('9', 'wxyz')

  let ret = []
  dfs('', 0)
  return ret

  function dfs(str, level) {
    if (level === digits.length) {
      ret.push(str)
      return
    }

    const letters = map.get(digits.charAt(level))
    for (const letter of letters) {
      dfs(str + letter, level + 1)
    }
  }
}

console.log(letterCombinations('23'))