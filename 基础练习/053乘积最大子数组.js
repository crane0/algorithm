/* 
  https://leetcode-cn.com/problems/maximum-product-subarray/description/

  f(i) = Math.max(f(i-1), nums[i])
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let imax = 1, imin = 1, max = -Infinity
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      [imax, imin] = [imin, imax]
    }
    imax = Math.max(nums[i] * imax, nums[i])
    imin = Math.min(nums[i] * imin, nums[i])

    max = Math.max(max, imax)
  }
  return max
};

// console.log(maxProduct([2,3,-2,4]))
// console.log(maxProduct([-2,0,-1]))
console.log(maxProduct([-2,3,-4]))