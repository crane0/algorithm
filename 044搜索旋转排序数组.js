/* 
  https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
  参考了评论区的做法
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0, right = nums.length - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < nums[right]) { // 右半段有序
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    } else {
       // 左半部分有序，如果 target 不在左半部分，那就 left 右移。
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
  }
  return -1
};

// console.log(search([4,5,6,7,0,1,2], 0))
console.log(search([1, 3], 3))