/* 
  https://leetcode-cn.com/problems/move-zeroes/
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  // 索引 i 每次都会自增，索引 j 会在 nums[i] = 0 时停下来，标记 0 的位置。
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[j++], nums[i]] = [nums[i], nums[j]]
    }
  }
  console.log(nums)
};
console.log(moveZeroes([0,1,0,3,12]))


var moveZeroes2 = function(nums) {
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i]
      // 有可能 nums 中没有 0 
      if (i !== j) {
        nums[i] = 0
      }
      j++
    }
  }
  console.log(nums)
};