/* 
  https://leetcode-cn.com/problems/search-a-2d-matrix/
*/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (matrix.length === 0) return false;

  // 如果 matrix[i] 都是空数组，则返回 false，但这样时间复杂度就变成了 O(matrix.length)
  // let ret = false
  // for (const m of matrix) {
  //   if (m.length) {
  //     ret = true
  //   }
  // }
  // if (!ret) {
  //   return false
  // }

  let outLeft = 0, outRight = matrix.length - 1
  while (outLeft <= outRight) {
    let outMid = Math.floor((outLeft + outRight) / 2)
    // 检测 matrix[i]，若为空数组，返回 false
    if (!matrix[outMid].length) {
      return false
    }
    let innerLeft = 0, innerRight = matrix[outMid].length - 1

    if (matrix[outMid][innerLeft] === target || target === matrix[outMid][innerRight]) {
      return true
    } else if (matrix[outMid][innerLeft] < target && target < matrix[outMid][innerRight]) {
      while (innerLeft <= innerRight) {
        let innerMid = Math.floor((innerLeft + innerRight) / 2)
        if (matrix[outMid][innerMid] === target) {
          return true
        } else if (matrix[outMid][innerMid] < target) {
          innerLeft = innerMid + 1
        } else {
          innerRight = innerMid - 1
        }
      }
      return false
    } else {
      if (matrix[outMid][innerLeft] > target) {
        outRight = outMid - 1
      } else if (matrix[outMid][innerRight] < target) {
        outLeft = outMid + 1
      }
    }
  }
  return false
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]], 13))
// console.log(searchMatrix([[]], 13))