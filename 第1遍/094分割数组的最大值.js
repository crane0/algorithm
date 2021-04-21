/* 
  https://leetcode-cn.com/problems/split-array-largest-sum/
*/
/**
 * dp[i][j] 表示前 i 个数 nums[0, i-1] 被分为 j 段后，使得各个子数组各自和的最大值最小。 i >= j
 * 假设某个分割点 k = nums[0, k-1] 是前 j-1 段，则第 j 段的和 sub(nums[k, i-1])
 * 所以 dp[i][j] = Math.min(dp[i][j], Math.max(dp[k][j-1], sub(nums[k, i-1]))
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
  const len = nums.length
  let dp = []
  for (let i = 0; i <= len; i++) {
    dp[i] = new Array(m+1).fill(Infinity)
  }
  dp[0][0] = 0
  // 前 i 项和
  let sub = new Array(len+1).fill(0)
  for (let i = 0; i < len; i++) {
    sub[i+1] = sub[i] + nums[i]
  }

  for (let i = 1; i <= len; i++) {
    for (let j = 1; j <= Math.min(i, m); j++) {
      // 因为要保证 i >= j，而 k < i，所以对于不合法的 dp[k][j-1]，默认值就是 Infinity，从而 dp[i][j] 保持不变。
      for (let k = 0; k < i; k++) {
        dp[i][j] = Math.min(dp[i][j], Math.max(dp[k][j-1], sub[i] - sub[k]))
      }
    }
  }
  return dp[len][m]
};

/**
 * 二分法
 * 为什么可以用二分法？
 * 二分法的前提：单调，有上下界。
 * 在分割数组时，有以下特点：
 *    如果分割的【子数组和的最大值】越大，则子数组的数量越少，
 *    如果分割的【子数组和的最大值】越小，则子数组的数量越多，
 * 所以，可通过调整【子数组和的最大值】，达到分割的子数组数量 === m
 * 需要注意的是，当满足 分割的子数组数量 === m 时，还需进行题目要求的第二步，在【子数组和的最大值】中，找到最小值。
 * 所以，必须尝试缩小这个【子数组和的最大值】使得分割数 > m，最后一个超过的，就是最终的目标。
 * 
 * 二分法下限：数组中最大的元素（因为最大值，必然大于等于它），上限：所有元素的总和。
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
 var splitArray = function(nums, m) {
  const len = nums.length

  let left = 0, right = 0
  for (const num of nums) {
    right += num
    if (left < num) {
      left = num
    }
  }

  while (left <= right) {
    const mid = left + right >> 1
    if (checkCount(mid)) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return left

  // 计算子数组和 < mid 的的数量
  function checkCount(mid) {
    let sum = 0, count = 1
    for (const num of nums) {
      if (sum + num > mid) {
        sum = num
        count++
      } else {
        sum += num
      }
    }
    return count <= m
  }
};



console.log(splitArray([7,2,5,10,8], 2))