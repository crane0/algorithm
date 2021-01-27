/* 
  https://leetcode-cn.com/problems/powx-n/
*/
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  return n > 0 ? pow(x, n) : 1/pow(x, -n)

  function pow(x, n) {
    if (n === 0) return 1

    let d = Math.floor(n/2)

    let y = pow(x, d)

    return n % 2 === 0 ? y * y : x * y * y
  }
}