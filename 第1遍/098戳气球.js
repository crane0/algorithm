/* 
  https://leetcode-cn.com/problems/burst-balloons/
  参考：https://leetcode-cn.com/problems/burst-balloons/solution/zhe-ge-cai-pu-zi-ji-zai-jia-ye-neng-zuo-guan-jian-/
*/
/**
 * dp[i][j] 表示开区间(i, j)内可以获得的最大值。
 * 因为区间内元素有很多，我们先关注只剩下一个元素的情况，也就是区间内最后一个被戳破的🎈是哪个，假设是 k，
 * 则最后的🎈 i k j 都相邻，能获得的金额 nums[i] * nums[k] * nums[j],
 * 
 * 所以 total(i, j) = dp[i][k] + dp[k][j] + nums[i] * nums[k] * nums[j]
 * dp[i][k] 也意味着 i k 之间没有🎈了，全部被戳破了。dp[k][j] 同理，最后在加上只剩 k 的情况，就是 total(i, j) 
 * 而要计算dp[i][j]，也就是 max(total(i, j))，决定因素是 k，因为在 (i, j) 区间内可取多个，在区间内遍历 k 即可得到最大值。
 * 
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
  nums = [1, ...nums, 1] // 扩大范围，当原 nums 剩下最后一个🎈时，也能得到结果。
  const len = nums.length
  let dp = []
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len).fill(0)
  }

  // 开区间大小
  for (let qujian = 3; qujian <= len; qujian++) {
    // 开区间左端点
    for (let left = 0; left <= len - qujian; left++) {
      let max = 0
      // index 是开区间内的索引，遍历开区间。(注意是开区间，不包括2端，所以从 left+1开始，left + qujian - 1 结束)
      for (let index = left+1; index < left + qujian - 1; index++) {
        max = Math.max(max, dp[left][index] + dp[index][left + qujian - 1] + nums[left] * nums[index] * nums[left + qujian - 1])
      }
      dp[left][left + qujian - 1] = max
    }
  }
  return dp[0][len-1]
};

console.log(maxCoins([3,1,5,8]))
