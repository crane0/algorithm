/* 
  https://leetcode-cn.com/problems/valid-perfect-square/
*/
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let left = 0, right = num
  while (left <= right) {
    const mid = (right + left) >> 1
    const midPow = mid * mid
    if (midPow === num) {
      return true
    } else if (midPow < num) {
      left = mid + 1
    } else {
      right = mid - 1
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
  if (num === 1) return true;
  let i = 1
  while (num > 0) {
    num -= i
    i += 2
  }
  return num === 0
};

console.log(isPerfectSquare(14))