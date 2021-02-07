/* 
  https://leetcode-cn.com/problems/search-a-2d-matrix/
*/
/**
 * midElement = matrix[Math.floor(mid/n)][mid%n]
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const m = matrix.length
  if (m === 0) return false
  const n = matrix[0].length

  let left = 0, right = m * n - 1
  while (left <= right) {
    const mid = (left + right) >> 1
    const midElement = matrix[Math.floor(mid/n)][mid%n]
    if (target === midElement) {
      return true
    } else if (target < midElement) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return false
}
// console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3))
// console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13))
console.log(searchMatrix([[1]], 0))
