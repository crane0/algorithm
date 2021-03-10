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
    const mid = left + right >> 1
    if (nums[left] <= nums[mid]) {
      left = mid + 1
    } else {
      // 如果右半部分有序，最小值可能就是 mid，所以不能是 mid - 1
      right = mid
    }
  }
}
console.log(findMin([2,1]))