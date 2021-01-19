/* 
  https://leetcode-cn.com/problems/generate-parentheses/
*/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let ret = []
  dfs(0, 0, '')
  return ret

  function dfs(right, left, currentStr) {
    if (right === n && left === n) {
      ret.push(currentStr)
      return
    }
    if (left < n) {
      dfs(right, left + 1, currentStr + '(')
    }
    if (right < left) {
      dfs(right + 1, left, currentStr + ')')
    }
  }
}

/* 
  [
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()"
  ]
*/
console.log(generateParenthesis(3))
