/* 
  https://leetcode-cn.com/problems/powx-n/
*/
/**
 * 经典分治，1，终止条件，拆分子问题，下探，合并子问题
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  return n >= 0 ? pow(x, n) : 1 / pow(x, -n)

  function pow(x, n) {
    if (n === 0) return 1

    let d = Math.floor(n/2)

    let y = pow(x, d)

    return n % 2 === 0 ? y * y : x * y * y
  }
}

console.log(myPow(2, 10))