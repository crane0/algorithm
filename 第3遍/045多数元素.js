/* 
  https://leetcode-cn.com/problems/majority-element/description/
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]

  return dfs(0, nums.length - 1)

  function dfs(begin, end) {
    if (begin === end) {
      return nums[begin]
    }

    const mid = begin + Math.floor((end - begin) / 2)
    const leftNumber = dfs(begin, mid)
    const rightNumber = dfs(mid+1, end)

    let ret = 0
    if (leftNumber === rightNumber) {
      ret = leftNumber
    } else {
      const leftCount = countInRange(leftNumber, begin, mid)
      const rightCount = countInRange(rightNumber, mid+1, end)
      ret = leftCount > rightCount ? leftNumber : rightNumber
    }
    return ret
  }

  function countInRange(number, begin, end) {
    let count = 0
    for (let i = begin; i <= end; i++) {
      if (number === nums[i]) {
        count++
      }
    }
    return count
  }
};


var majorityElement = function(nums) {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]

  let count = 0, ret = 0
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      ret = nums[i]
    }
    count += ret === nums[i] ? 1 : -1
  }
  return ret
}

console.log(majorityElement([3,2,3])) // 3
console.log(majorityElement([2,2,1,1,1,2,2])) // 2