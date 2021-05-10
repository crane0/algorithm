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
  
};

const matrix = [
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]
console.log(maximalSquare(matrix))