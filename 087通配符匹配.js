/* 
  https://leetcode-cn.com/problems/wildcard-matching/
*/
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let m = s.length, n = p.length

  let dp = []
  for (let i = 0; i < m + 1; i++) {
    dp[i] = Array(n+1).fill(false)
  }
  dp[0][0] = true
  // 开始多个连续的 *
  for (let i = 1; i < n+1; i++) {
    if (p[i-1] !== '*') break;
    dp[0][i] = true
  }

  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (p[j-1] === s[i-1] || p[j-1] === '?') {
        dp[i][j] = dp[i-1][j-1]
      } else if (p[j-1] === '*') {
        // dp[i-1][j] * 匹配到一个字符，d[[i][j-1]] * 不匹配字符
        dp[i][j] = dp[i-1][j] || dp[i][j-1]
      }
    }
  }
  return dp[m][n]
};

console.log(isMatch('adceb', '*a*b'))
