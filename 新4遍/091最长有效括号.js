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
  
};
console.log(longestValidParentheses(")()())"))