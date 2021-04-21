/* 
  https://leetcode-cn.com/problems/edit-distance/
*/
/**
 * dp[i][j] 表示 A 的前 i 个字符 到 B 的前 j 个字符的距离
 * 对 A 新增字符和对B删除字符是一样的。
 * 所以分为 A新增，B新增，A修改1个字符
 * 
 *  (i-1, j-1), (i-1, j),
 *  (i, j-1), (i, j),
 *
 * dp[i][j] 肯定是由其他 3 种变化而来，
 * 1，对 dp[i][j-1] 来说，已知 A 的前 i 个字符到 B 的前 j-1 个字符的距离，
 * 那么对 A 再新增1个字符，就是 A 的前 i 个字符到 B 的前 j 个字符的距离，
 * （换句话说，已知 a 到 ab 的距离，那 a 到 abc 的距离就是 + 1即可）
 * 2，dp[i-1][j] 同理
 * 3，对 dp[i-1][j-1] 来说，如果 A[i] === B[j]，那距离不变，否则就修改 A[i]，使其等于B[j]，距离上就是+1
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const m = word1.length, n = word2.length
  if (m === 0 || n === 0) {
    return m + n
  }

  let dp = []
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n+1).fill(0)
  }

  for (let i = 0; i <= m; i++) {
    dp[i][0] = i
  }

  for (let i = 0; i <= n; i++) {
    dp[0][i] = i
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      let dp1 = dp[i-1][j] + 1
      let dp2 = dp[i][j-1] + 1
      let dp3 = dp[i-1][j-1]
      if (word1[i-1] !== word2[j-1]) { // index 对 word 来说要 -1
        dp3 += 1
      }
      dp[i][j] = Math.min(dp1, dp2, dp3)
    }
  }
  return dp[m][n]
}

console.log(minDistance('horse', 'ros'))