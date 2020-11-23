/* 
  给定一个非负整数数组，你最初位于数组的第一个位置。

  数组中的每个元素代表你在该位置可以跳跃的最大长度。

  你的目标是使用最少的跳跃次数到达数组的最后一个位置。

  示例:

  输入: [2,3,1,1,4]
  输出: 2
  解释: 跳到最后一个位置的最小跳跃数是 2。
       从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
  说明:

  假设你总是可以到达数组的最后一个位置。
*/

/* 
  从左到右，先找 index + nums[index] 可以到达的各个 index，找到 nums[index] 最大的那个，此时 step++
  在从该位置继续向后。也就是贪心！
  时间复杂度 n
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let step = 0
  let end = 0
  let maxPosition = 0
  for (let i = 0; i < nums.length - 1; i++) {
    // 注意要 + i，才是下个位置
    maxPosition = Math.max(maxPosition, i + nums[i])
    // 当前 index + nums[index] 如果一次可到达，就直接退出，稍微减少一些循环。
    if (maxPosition === nums.length - 1) {
      step++
      break
    }
    if (i === end) {
      end = maxPosition
      step++
    }
  }
  return step
};

console.log(jump([2,3,1,1,4]))