/* 
  https://leetcode-cn.com/problems/sqrtx/
*/
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x === 0) return 0
  let left = 0, right = x, ans = -1
  while (left <= right) {
    let mid = (right + left) >> 1
    if (mid * mid <= x) {
      ans = mid
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return ans
}
console.log(mySqrt(8))