/* 
  https://leetcode-cn.com/problems/sqrtx/
*/
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x === 0) return 0
  let left = 0, right = x, ret = 0
  while (left <= right) {
    const mid = left + right >> 1
    if (mid * mid <= x) {
      ret = mid
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return ret
}
console.log(mySqrt(8))