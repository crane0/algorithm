/* 
  https://leetcode-cn.com/problems/edit-distance/

  参考 https://leetcode-cn.com/problems/edit-distance/solution/bian-ji-ju-chi-by-leetcode-solution/
*/
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const m = word1.length, n = word2.length
  if (m === 0 || n === 0) {
    return m + n
  }

  let dp = Array(m+1).fill([])
  for (let i = 0; i < m+1; i++) {
    dp[i] = Array(n+1).fill(0)
  }

  for (let i = 0; i < m + 1; i++) {
    dp[i][0] = i
  }

  for (let i = 0; i < n + 1; i++) {
    dp[0][i] = i
  }

  /* 
    初始化为下面的形式，
    比如 m 的第一个字符变为 n，就需要走完第一行，也就是 3 次
    [
      [ 0, 1, 2, 3 ],
      [ 1, 0, 0, 0 ],
      [ 2, 0, 0, 0 ],
      [ 3, 0, 0, 0 ],
      [ 4, 0, 0, 0 ],
      [ 5, 0, 0, 0 ]
    ]
  */
  
  for (let i = 1; i < m+1; i++) {
    for (let j = 1; j < n+1; j++) {
      let dp1 = dp[i-1][j] + 1
      let dp2 = dp[i][j-1] + 1
      let dp3 = dp[i-1][j-1]

      if (word1[i-1] !== word2[j-1]) {
        dp3 += 1
      }
      dp[i][j] = Math.min(dp1, dp2, dp3)
    }
  }
  return dp[m][n]
};

console.log(minDistance('horse', 'ros'))
