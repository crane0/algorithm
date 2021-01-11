/* 
  https://leetcode-cn.com/problems/generate-parentheses/
*/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let ret = []
  recur(0, 0, '')
  return ret

  function recur(right, left, currString) {
    if (right === n && left === n) {
      ret.push(currString)
      return
    }

    if (right < n) {
      recur(right+1, left, currString + '(')
    }
    if (left < right) {
      recur(right, left+1, currString + ')')
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
