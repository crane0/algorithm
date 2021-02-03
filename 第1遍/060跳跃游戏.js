/* 
  https://leetcode-cn.com/problems/jump-game/
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let len = nums.length - 1
  let index = len
  // 第一次 if 属于空跑，为了防止 nums.length === 1 的情况，所以 index 不能从 len - 1 开始
  while (index >= 0) {
    if (index + nums[index] >= len) {
      len = index
    }
    index--
  }
  return len === 0
}
console.log(canJump([2,3,1,1,4]))
console.log(canJump([3,2,1,0,4]))
console.log(canJump([3]))