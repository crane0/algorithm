/* 
  https://leetcode-cn.com/problems/move-zeroes/
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let k = 0 // 始终标记不是 0 的位置
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[k] = nums[i]
      if (k !== i) { // 交换，比如 [0,0,0,0,1]
        nums[i] = 0
      }
      k++
    } 
  }
  console.log(nums)
};
console.log(moveZeroes([0,1,0,3,12]))
