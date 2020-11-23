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
  // 复制给变量，不用每次都读 length
  const len = s.length
  for (let i = 0; i < len; i++) {
    const current = s.charAt(i) // s[i]
    if (current == '(' || current == '[' || current == '{') {
      stack.push(current)
      // 直接和栈顶元素进行匹配。如果失败，就说明不匹配。成功了，正好已经 pop 了
    } else if (current == ')' && stack.pop() !== '('){
      return false
    } else if (current == ']' && stack.pop() !== '[') {
      return false
    } else if (current == '}' && stack.pop() !== '{') {
      return false
    }
  }
  return !stack.length
}

console.log(isValid("(])"))