/*
  https://leetcode-cn.com/problems/longest-common-subsequence/

  参考：https://leetcode-cn.com/problems/longest-common-subsequence/solution/dong-tai-gui-hua-tu-wen-jie-xi-by-yijiaoqian/
*/

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  let m = text1.length
  let n = text2.length
  let dp = []

  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(m+1).fill(0)
  }
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (text2[i] === text1[j]) {
        // 为什么是对角线 + 1，因为要考虑 text1 和 text2 都不包含当前字符串的子序列长度。
        dp[i+1][j+1] = dp[i][j] + 1
      } else {
        // 不相等时，传递关系
        dp[i+1][j+1] = Math.max(dp[i][j+1], dp[i+1][j])
      }
    }
  }
  return dp[n][m]
};

console.log(longestCommonSubsequence('abcde', 'ace'))