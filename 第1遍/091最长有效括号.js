/* 
  https://leetcode-cn.com/problems/longest-valid-parentheses/
*/
/**
 * dp[i] 表示以 i 结尾的有效括号子串长度。
 * dp[i] = dp[i-2] + 2  ...()
 * dp[i] = dp[i-1] + 2 + dp[i-2-dp[i-1]]   ...))  比如 ()(())
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  const len = s.length
  let dp = new Array(len).fill(0), max = 0

  for (let i = 1; i < len; i++) {
    if (s[i] === ')') {
      if (s[i-1] === '(') {
        dp[i] = (i - 2 >= 0 ? dp[i-2] : 0) + 2
      } else if (i - 1 - dp[i-1] >= 0 && s[i-1-dp[i-1]] ==='(') {
        // ()(())  dp[i-1] 表示index为3和4的()，i-2 表示当前 index 占的(),
        dp[i] = dp[i-1] + ((i - 2 - dp[i-1] >= 0) ? dp[i-2-dp[i-1]] : 0) + 2 // 
      }
      max = Math.max(max, dp[i])
    }
  }
  return max
};
console.log(longestValidParentheses(")()())"))