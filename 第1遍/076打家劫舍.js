/* 
  https://leetcode-cn.com/problems/house-robber/
*/
/**
 * a[i] 表示 0--i 个房子的最大值，
 * 因为相邻的房子不能偷，所以分为 2种情况，偷或不偷第 i 个房子：
 * 这里升维，a[i][0或1]，0 表示不偷第 i 个房子，1 表示偷
 * a[i][0] = Math.max(a[i-1][1], a[i-1[0]])
 * a[i][1] = a[i-1][0] + nums[i]
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const len = nums.length
  if (len === 1) return nums[0]

  let dp = []
  for (let i = 0; i < len; i++) {
    dp[i] = [0, 0]
  }
  dp[0][1] = nums[0]

  for (let i = 1; i < nums.length; i++) {
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1])
    dp[i][1] = dp[i-1][0] + nums[i]
  }
  return Math.max(dp[len-1][0], dp[len-1][1])
}

/**
 * O(n)，一维 dp 也可以解决
 * a[i] 表示 0--i 个房子的最大值
 * a[i] = Math.max(a[i-1], nums[i] + a[i-2])
 * @param {number[]} nums 
 * @return {number}
 */
var rob = function(nums) {
  const len = nums.length
  if (len === 1) return nums[0]

  let dp = new Array(len).fill(0)
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i-1], nums[i] + dp[i-2])
  }
  return dp[len-1]
}

// console.log(rob([1,2,1,3]))
console.log(rob([2,7,9,3,1]))