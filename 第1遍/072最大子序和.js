/* 
  https://leetcode-cn.com/problems/maximum-subarray/
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
   if (nums.length === 1) return nums[0]
   let pre = 0, max = 0
   for (const n of nums) {
     pre = Math.max(pre + n, n)
     max = Math.max(pre, max)
   }
   return max
 }
 console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))