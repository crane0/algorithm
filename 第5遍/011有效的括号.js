/* 
  https://leetcode-cn.com/problems/valid-parentheses/
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length % 2) return false

  let stack = []
  for (const str of s) {
    if (str === '(' || str === '[' || str === '{') {
      stack.push(str)
    } else if (str === ')' && stack.pop() !== '(' || str === ']' && stack.pop() !== '[' || str === '}' && stack.pop() !== '{') {
      return false
    }
  }
  return !stack.length
};

console.log(isValid("([)]"))
// console.log(isValid("()[]{}"))