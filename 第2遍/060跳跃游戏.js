/* 
  https://leetcode-cn.com/problems/jump-game/
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let len = nums.length - 1
  for (let i = nums.length - 1; i >= 1; i--) {
    if (nums[i-1] + i-1 >= len) {
      len = i-1
    }
  }
  return len === 0
}
console.log(canJump([2,3,1,1,4]))
console.log(canJump([3,2,2,0,4]))
console.log(canJump([3]))
