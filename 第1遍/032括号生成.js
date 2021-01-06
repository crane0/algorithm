/* 
  https://leetcode-cn.com/problems/generate-parentheses/
*/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let ret = []
  recur(0, '(')
  return ret

  function recur(level, param) {
    if (level === 2 * n) {
      ret.push(param)
      return
    }
    recur(level + 1, param + '(')
    recur(level + 1, param + ')')
  }
}

var generateParenthesis = function(n) {
  let ret = []
  recur(0, 0, '')
  return ret

  function recur(left, right, currntString) {
    if (left === n && right === n) {
      ret.push(currntString)
      return
    }
    if (left < n) {
      recur(left + 1, right, currntString + '(')
    }
    if (right < left) { // 不能先有右括号
      recur(left, right + 1, currntString + ')')
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
