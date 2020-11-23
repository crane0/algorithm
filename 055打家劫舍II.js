/* 
  https://leetcode-cn.com/problems/house-robber-ii/description/

  和 198题:打家劫舍 区别是，所有的房子围成一个环，意味着第一个房子和最后一个房子不能同时偷。
  解法：分为不偷第一个房子的情况，和不偷最后一个房子的情况，最后取最大值
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  function myRob(nums) {
    let pre = nums[0];
    let now = Math.max(nums[0], nums[1])
    for (let i = 2; i < nums.length; i++){
      [pre, now] = [now, Math.max(nums[i] + pre, now)]
    }
    return now
  }

  return Math.max(myRob(nums.slice(1)), myRob(nums.slice(0,-1)))
};

console.log(rob([2,3,2]))