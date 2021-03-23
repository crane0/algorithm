/* 
  https://leetcode-cn.com/problems/maximum-product-subarray/
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if (nums.length === 1) return nums[0];

  let imin = 1, imax = 1, max = -Infinity
  for (const n of nums) {
    if (n < 0) {
      [imax, imin] = [imin, imax]
    }
    imax = Math.max(n * imax, n)
    imin = Math.min(n * imin, n)

    max = Math.max(max, imax)
  }
  return max
}
// console.log(maxProduct([2,3,-2,4])) // 6
console.log(maxProduct([-2,3,-4])) // 24