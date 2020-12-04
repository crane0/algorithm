/* 
  https://leetcode-cn.com/problems/move-zeroes/
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i]
      if (i !== j) {
        nums[i] = 0
      }
      j++
    }
  }
  console.log(nums)
};
console.log(moveZeroes([0,1,0,3,12]))
