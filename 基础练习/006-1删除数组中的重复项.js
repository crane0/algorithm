/* 
  双指针，
  j 始终标记重复的元素的第一个位置。
*/

var nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  let j = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[i-1]) {
      j++
      nums[j] = nums[i]
    }
  }
  return j+1
};

removeDuplicates(nums)