/* 
  https://leetcode-cn.com/problems/powx-n/
*/
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  return n > 0 ? recur(x, n) : 1/recur(x, -n)
  
  function recur(x, n) {
    if (n === 0) return 1

    const d = Math.floor(n/2)
    const y = recur(x, d)
    return n%2 === 0 ? y*y : y*y*x 
  }
}

console.log(myPow(2, 10))
