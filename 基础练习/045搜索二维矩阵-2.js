
/* 
  https://leetcode-cn.com/problems/search-a-2d-matrix/

  相比于1，使用了 matrix[m * n] 找 matrix 中对应的元素。
*/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let m = matrix.length
  if (m === 0) return false;
  let n = matrix[0].length

  let left = 0, right = m * n - 1, mid = 0
  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    let midElement = matrix[Math.floor(mid / n)][mid % n]
    if (midElement === target) {
      return true
    } else if (midElement < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return false
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]], 13))
// console.log(searchMatrix([[]], 13))