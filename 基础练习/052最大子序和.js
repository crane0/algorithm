/* 
  https://leetcode-cn.com/problems/maximum-subarray/

  状态转移方程:  f(i) = Math.max(f(i-1), nums[i])
  或者可以理解为： f(i) = Math.max(f(i-1), 0) + nums[i] 如果累计为负数，那就取 0 + nums[i]
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let pre = 0, maxAns = nums[0];
  nums.forEach((x) => {
      pre = Math.max(pre + x, x); // 如果 pre + x > x，说明一直累计的值最大，否则，就从 x 重新开始计算了。
      maxAns = Math.max(maxAns, pre);
  });
  return maxAns;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))