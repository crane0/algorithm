/* 
  https://leetcode-cn.com/problems/longest-common-subsequence/
*/
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  if (!text1 || !text2) return 0
  const m = text1.length
  const n = text2.length

  let dp = []
  for (let i = 0; i < m + 1; i++) {
    dp[i] = new Array(n+1).fill(0)
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (text1[i] === text2[j]) {
        dp[i+1][j+1] = dp[i][j] + 1
      } else {
        dp[i+1][j+1] = Math.max(dp[i][j+1], dp[i+1][j])
      }
    }
  }
  return dp[m][n]
}

//  O(n)
var longestCommonSubsequence = function(text1, text2) {
  if (!text1 || !text2) return 0

  const m = text1.length
  const n = text2.length

  let dp = new Array(n+1).fill(0)
  let temp = 0, last = 0
  for (let i = 1; i <= m; i++) {
    last = 0
    for (let j = 1; j <= n; j++) {
      temp = dp[j]
      if (text1[i-1] === text2[j-1]) {
        dp[j] = last + 1 // 当 i = 2 时，进入第2次循环时，last 初始值还是 0，因为从table 的角度看，这是又从 text2 的开头进行匹配了。
      } else {
        dp[j] = Math.max(dp[j], dp[j-1])
      }
      last = temp
    }
  }
  return dp[n]
}

 console.log(longestCommonSubsequence('abcde', 'ace'))