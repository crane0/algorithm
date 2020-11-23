/* 
  https://leetcode-cn.com/problems/house-robber/

  a[i][0, 1] 表示从 0--i 个房子中，能偷到的最大值。
    这里增加了一维，0表示不偷这个房子，1表示偷
  
  所以需要2个方程
  a[i][0] = Math.max(a[i-1][0], a[i-1][1])  因为不偷 a[i]，所以取 a[i-1] 房子偷与不偷的最大值
  a[i][1] = a[i-1][0] + nums[i]  因为偷 a[i]，所以不能偷 a[i-1]，所以直接 + nums[i]（i 房子的钱）
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const n = nums.length
  if (n === 0) return 0;
  // let dp = Array(n).fill([0,0]); // 这样写有问题，在进行dp[0][1] 赋值时，会将所有的都赋值
  let dp = []
  for (let i = 0; i < n; i++) {
    dp[i] = [0, 0]
  }
  dp[0][0] = 0;
  dp[0][1] = nums[0];

  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1])
    dp[i][1] = dp[i-1][0] + nums[i]
  }

  return Math.max(dp[n-1][0], dp[n-1][1])
};

// console.log(rob([1,2,3,1]))
console.log(rob([2,7,9,3,1]))