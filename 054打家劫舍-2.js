/* 
  https://leetcode-cn.com/problems/house-robber/

  相比 v1 版本，去掉了二维判断。一维也是可以的。
  a[i] 表示从 0--i 个房子中，能偷到的最大值，此时第 i 个房子偷不偷都可以。
  
  状态转移方程
  a[i] = Math.max(a[i-1], nums[i] + a[i-2])
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
// var rob = function(nums) {
//   const n = nums.length
//   if (n === 0) return 0;

//   let dp = []
//   dp[0] = nums[0];
//   dp[1] = Math.max(nums[0], nums[1])

//   for (let i = 2; i < n; i++) {
//     dp[i] = Math.max(dp[i-1], nums[i] + dp[i-2])
//   }
//   return Math.max(dp[n-1])
// };

// 既然只用到2个元素，那就不用数组存储了。
var rob = function(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let pre = nums[0];
  let now = Math.max(nums[0], nums[1])

  for (let i = 2; i < nums.length; i++) {
    [pre, now] = [now, Math.max(now, nums[i] + pre)]
  }
  return now
};


// console.log(rob([1,2,3,1]))
console.log(rob([2,7,9,3,1]))