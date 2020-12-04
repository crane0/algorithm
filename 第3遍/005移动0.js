/* 
  https://leetcode-cn.com/problems/move-zeroes/
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let temp = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[temp] = nums[i]
      if (temp !== i) {
        nums[i] = 0
      }
      temp++
    }
  }
};
console.log(moveZeroes([0,1,0,3,12]))
