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
 
};


// O(n)
var minPathSum = function(grid) {
 
};

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]))