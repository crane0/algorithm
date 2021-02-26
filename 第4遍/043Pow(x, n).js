/* 
  https://leetcode-cn.com/problems/powx-n/
*/
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0) return 1
  return n > 0 ? pow(x, n) : 1 / pow(x, -n)

  function pow(x, n) {
    if (n === 0) return 1

    const mid = Math.floor(n/2)
    const y = pow(x, mid)

    return n % 2 ? y * y * x : y * y 
  } 
}