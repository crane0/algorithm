/* 
  https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if (nums.length === 1) return nums[0]

  let left = 0, right = nums.length - 1
  while (left <= right) {
    if (nums[left] <= nums[right]) {
      return nums[left]
    }
    const mid = (left + right) >> 1
    if (nums[left] <= nums[mid]) { // 左半部分有序，有等号是因为 mid 是向下取整的。
      left = mid + 1
    } else {
      right = mid
    }
  }
}
console.log(findMin([2,1]))