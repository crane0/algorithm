/* 
  https://leetcode-cn.com/problems/unique-paths-ii/

  思路和 不同路径 v2 版本差不多，
  技巧在于，障碍物判断后，重置为 0 并continue 掉。
*/
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (obstacleGrid[0][0] === 1) return 0;

  let n = obstacleGrid.length, m = obstacleGrid[0].length
  let row = new Array(m).fill(0) // length 要有，否则 row[1] undefined
  row[0] = 1 // 初始化为1，否则无法累计
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (obstacleGrid[i][j] === 1) {
        row[j] = 0
        continue
      }
      if (j - 1 >= 0) {
        row[j] += row[j-1]
      }
    }
  }
  return row[m-1]
};

console.log(uniquePathsWithObstacles([
  [0,0,0],
  [0,1,0],
  [0,0,0]
]))