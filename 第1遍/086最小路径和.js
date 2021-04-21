/* 
  https://leetcode-cn.com/problems/minimum-path-sum/
*/
/**
 * dp[i][j] 表示从起点(0,0) 到 (i,j) 的最小距离
 * dp[i][j] = Math.min(dp[i][j-1],dp[i-1][j]) + grid[i][j]
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const m = grid.length, n = grid[0].length
  let dp = []
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(0)
  }
  dp[0][0] = grid[0][0]

  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i-1][0] + grid[i][0]
  }

  for (let i = 1; i < n; i++) {
    dp[0][i] = dp[0][i-1] + grid[0][i]
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i][j-1],dp[i-1][j]) + grid[i][j]
    }
  }
  return dp[m-1][n-1]
};


// O(n)
var minPathSum = function(grid) {
  const m = grid.length, n = grid[0].length
  let dp = new Array(n).fill(Infinity)
  dp[0] = 0

  for (let i = 0; i < m; i++) {
    dp[0] += grid[i][0]
    for (let j = 1; j < n; j++) {
      dp[j] = Math.min(dp[j], dp[j-1]) + grid[i][j]
    }
  }
  return dp[n-1]
};

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]))