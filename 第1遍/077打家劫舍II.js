/* 
  https://leetcode-cn.com/problems/house-robber-ii

  和 198题:打家劫舍 区别是，所有的房子围成一个环，意味着第一个房子和最后一个房子不能同时偷。
  解法：分为不偷第一个房子的情况，和不偷最后一个房子的情况，最后取最大值
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 1) return nums[0]

  return Math.max(myRob(nums.slice(0, -1)), myRob(nums.slice(1)))

  function myRob(nums) {
    const len = nums.length
    if (nums.length === 1) return nums[0]

    let dp = new Array(len).fill(0)
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
    for (let i = 2; i < nums.length; i++) {
      dp[i] = Math.max(dp[i-1], nums[i] + dp[i-2])
    }
    return dp[len-1]
  }
}

/* 
  O(1) 的空间复杂度
  既然每次都是2个数比最大值，所以需要2个变量即可。
*/
var rob = function(nums) {
  if (nums.length === 1) return nums[0]

  return Math.max(myRob(nums.slice(0, -1)), myRob(nums.slice(1)))

  function myRob(nums) {
    const len = nums.length
    if (nums.length === 1) return nums[0]

    let pre = nums[0]
    let now = Math.max(nums[0], nums[1])
    for (let i = 2; i < nums.length; i++) {
      [pre, now] = [now, Math.max(now, nums[i] + pre)]
    }
    return now
  }
}
console.log(rob([1,2]))