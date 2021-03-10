/* 
  https://leetcode-cn.com/problems/valid-perfect-square/
*/
/**
 * 二分法
 * 为了查找一个数 a 满足 a*a === num，所以可用二分法，
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num === 0) return true
  let left = 0, right = num
  while (left <= right) {
    const mid = left + right >> 1
    if (mid * mid === num) {
      return true
    } else if (mid * mid > num) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return false
}

/* 
  完全平方数的性质
  1
  4 = 1 + 3
  9 = 1 + 3 + 5
  16 = 1 + 3 + 5 + 7
  
  1 + 3 + ... + 2n - 1 = n^2

  时间复杂度 根号n
*/
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num === 1) return true
  let n = 1
  while (num > 0) {
    num -= n
    n += 2
  }
  return num === 0
};

console.log(isPerfectSquare(14))