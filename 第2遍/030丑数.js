/* 
  https://leetcode-cn.com/problems/chou-shu-lcof/
*/
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  let ugly = [1]
  let i = 0, j = 0, k = 0
  for (let index = 1; index < n; index++) {
    let temp = Math.min(ugly[i] * 2, ugly[j] * 3, ugly[k] * 5)
    if (temp === ugly[i] * 2) i++
    if (temp === ugly[j] * 3) j++
    if (temp === ugly[k] * 5) k++
    ugly[index] = temp
  }
  return ugly[n-1]
};

console.log(nthUglyNumber(10)) // 12
