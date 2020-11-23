/* 
  在v1中，时间和空间复杂度都是 O(m * n)
  空间复杂度可以优化。O(2 * m)

  从 左上-->右下，因为每次计算只用到了当前行和上一行，所以 2个数组就可以完成。
  另外，如果每次只计算当前列和上一列，那就是 O(2 * n)
*/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  if (m === 1) return 1

  let row = new Array(m).fill(1)
  let col = row

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      row[j] = row[j-1] + col[j]
    }
    col = row
  }

  return row[m-1]
};

console.log(uniquePaths(7, 3))
