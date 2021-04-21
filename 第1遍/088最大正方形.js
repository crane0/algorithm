/* 
  https://leetcode-cn.com/problems/maximal-square/
*/
/**
 * dp[i][j] 表示从 (0,0) 到 (i,j) 能围成的最大正方形的边长
 * dp[i][j] = Math.min(dp[i-1][j-1], dp[i][j-1], dp[i-1][j]) + 1
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  const m = matrix.length, n = matrix[0].length
  if (m === 0 || n === 0) {
    return 0
  }
  let dp = [], maxSide = 0
  
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(0)
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '1') {
        if (i === 0 || j === 0) {
          dp[i][j] = 1
        } else {
          dp[i][j] = Math.min(dp[i-1][j-1], dp[i][j-1], dp[i-1][j]) + 1
        }
        maxSide = Math.max(maxSide, dp[i][j])
      }
      // dp[i][j] 默认值是 0，所以不做 else 判断了。
    }
  }
  return maxSide * maxSide
};

const matrix = [
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]
console.log(maximalSquare(matrix))