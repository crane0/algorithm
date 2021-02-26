/* 
  https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
*/
/**
 * 'x'.charAt(index) 可以获取指定位置的字符
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

  let ret = [], queue = []
  dfs(0)
  return ret

  function dfs(level) {
    if (level === digits.length) {
      ret.push(queue.join(''))
      return
    }

    const number2str = map.get(digits.charAt(level))
    for (const letter of number2str) {
      queue.push(letter)
      dfs(level + 1)
      queue.pop(letter)
    }
  }
}

console.log(letterCombinations('23'))