/* 
  https://leetcode-cn.com/problems/move-zeroes/
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let index = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index] = nums[i]
      if (index !== i) {
        nums[i] = 0 // 这里是 0
      }
      index++
    }
  }
  console.log(nums)
};
console.log(moveZeroes([0,1,0,3,12]))
