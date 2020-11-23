/* 
  关键点：从后向前贪心！
  如果前一个能跳到后一个，最终肯定是可以的。
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if (nums === null) return false;

  let endPoint = nums.length - 1
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] + i >= endPoint) {
      endPoint = i
    }
  }
  return endPoint === 0
};

console.log(canJump([2,3,1,1,4]))