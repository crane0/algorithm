/* 
  https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
*/
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits === '') return []

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

  function dfs(s, level) {
    if (digits.length === level) {
      ret.push(s)
      return
    }

    const letters = map.get(digits.charAt(level))
    for (const letter of letters) {
      dfs(s + letter, level + 1)
    }
  }
}

console.log(letterCombinations('23'))