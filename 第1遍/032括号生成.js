/* 
  https://leetcode-cn.com/problems/generate-parentheses/
*/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let ret = []
  function recur(level, param) {
    if (level === n) {
      return param
    }
    recur(level + 1, param + '(')
    recur(level + 1, param + ')')
  }
  ret = recur(0, '(')
  console.log(ret)
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
