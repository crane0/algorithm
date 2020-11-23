/* 
  20 https://leetcode-cn.com/problems/valid-parentheses/

  给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
  有效字符串需满足：
    左括号必须用相同类型的右括号闭合。
    左括号必须以正确的顺序闭合。
    注意空字符串可被认为是有效字符串。
    true: "()", "()[]{}", "{[]}"
    false: "([)]", "(]"
*/

/* 
  使用栈解决的思路：
  如果是左括号，就压入栈中；
  如果做右括号，就和栈顶元素进行匹配。成功，就将栈顶的元素移除栈。
  如果最后栈为空，则说明完全匹配。
*/

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  if (s.trim() === '') {
    return true
  }
  // 我怎么没想到！
  if (s%2) {
    return false
  }
  const stack = []
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == '(' || s.charAt(i) == '[' || s.charAt(i) == '{') {
      stack.push(s.charAt(i))
    } else if (s.charAt(i) == ')' && stack[stack.length - 1] == '('){
      stack.pop()
    } else if (s.charAt(i) == ']' && stack[stack.length - 1] == '[') {
      stack.pop()
    } else if (s.charAt(i) == '}' && stack[stack.length - 1] == '{') {
      stack.pop()
    } else {
      // 还未出现左括号时，直接出现了右括号，返回 false
      return false
    }
  }
  return !stack.length
}

console.log(isValid("(])"))