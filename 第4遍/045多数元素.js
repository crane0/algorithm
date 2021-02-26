/* 
  https://leetcode-cn.com/problems/majority-element/description/
*/
/**
 * 还有一种方法：排序，可以用是因为众数的定义：必须大于 nums.length / 2 ，并且给定的 nums 一定存在众数。
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  if (nums.length === 1) return nums[0]
  return dfs(0, nums.length - 1)

  function dfs(begin, end) {
    if (begin === end) return nums[begin]

    const mid = begin + (end - begin >> 1)
    const leftNumber = dfs(begin, mid)
    const rightNumber = dfs(mid + 1, end)

    let ret = 0
    if (leftNumber === rightNumber) {
      ret = leftNumber
    } else {
      const leftCount = countInRange(begin, mid, leftNumber)
      const rightCount = countInRange(mid + 1, end, rightNumber)
      ret = leftCount > rightCount ? leftNumber : rightNumber
    }
    return ret
  }

  function countInRange(begin, end, number) {
    let count = 0
    for (let i = begin; i <= end; i++) {
      if (nums[i] === number) count++
    }
    return count
  }
};

// 投票计数法
var majorityElement = function(nums) {
  let houxuan = 0, count = 0
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      houxuan = nums[i]
    }
    count += houxuan === nums[i] ? 1 : -1
  }
  return houxuan
}


console.log(majorityElement([3,2,3])) // 3
console.log(majorityElement([2,2,1,1,1,2,2])) // 2