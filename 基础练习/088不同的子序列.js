/* 
  https://leetcode-cn.com/problems/distinct-subsequences/
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  let m = s.length, n = t.length
  let dp = []
  for (let i = 0; i < m + 1; i++) {
    dp[i] = Array(n+1).fill(0)
  }

  /* 
    dp[i][j] 表示，s 的前 i 个字符，可以组成 t 的前 j 个字符的，最多数量
  */

  // dp[0][0] = 1
  //  t 是 '' 时，'' 是任何字符串的子集。
  for (let i = 0; i < m + 1; i++) {
    dp[i][0] = 1
  }

  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (s[i-1] === t[j-1]) {
        /* 
          相等，分为用不用 s 的当前字符串，
          如果用，因为当前2个已经满足，那就在这2个都不要的情况下进行判断，所以从 s 的前 i-1 个和 t 的 j-1 个中找。
          如果不用，从前 s 的前 i-1 个字符中找。
        */
        dp[i][j] = dp[i-1][j] + dp[i-1][j-1]
      } else {
        // 不等，只能不用，所以从前 i-1 个字符中找匹配的子序列个数
        dp[i][j] = dp[i-1][j]
      }
    }
  }

  return dp[m][n]
};

// console.log(numDistinct("rabbbit", "rabbit"))
console.log(numDistinct("babgbag", "bag"))
