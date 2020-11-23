/* 
  在v2中，时间和空间复杂度都是 O(2 * m)
  空间复杂度可以优化。O(m)

  对比 v2 的版本，可以发现当前行 + 上一行，其实就是 row[j] += row[j-1]
*/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  if (m === 1) return 1

  let row = new Array(m).fill(1)

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      row[j] += row[j-1]
    }
  }

  return row[m-1]
};

console.log(uniquePaths(7, 3))
