/* 
  https://leetcode-cn.com/problems/longest-increasing-subsequence/
  参考 https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/dong-tai-gui-hua-er-fen-cha-zhao-tan-xin-suan-fa-p/
  尤其是关于「无后效性」的思想。
*/
/**
 * dp[i] 指：最长递增子序列的长度，但有个前提，最长递增子序列中必须包含 nums[i]！
 * 这样可以让 nums[i] 这个不确定的因素稳定下来。
 * 所以对于 [4,10,4] dp[2] = 1（而不是由4 10 组合的长度 2），这样就能保证类似这样的 [4,10,4,3,8,9]，能够正确的计算。
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  
};
// console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))
// console.log(lengthOfLIS([0,1,0,3,2,3]))
console.log(lengthOfLIS([4,10,4,3,8,9]))