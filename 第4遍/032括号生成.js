/* 
  https://leetcode-cn.com/problems/generate-parentheses/
*/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let ret = []
  dfs('', 0, 0)
  return ret
  function dfs(currentStr, left, right) {
    if (currentStr.length === 2 * n) { // right === n && left === n
      ret.push(currentStr)
      return
    }

    if (left < n) {
      dfs(currentStr + '(', left + 1, right)
    }
    if (right < left) {
      dfs(currentStr + ')', left, right + 1)
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
