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
  
};

console.log(maxCoins([3,1,5,8]))
