/* 
  26 https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/submissions/

  给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
  不要使用额外的数组空间，你必须在原地修改输入数组 并在使用 O(1) 额外**空间**的条件下完成。

  nums = [1,1,2]
  则函数应该返回 2，但输出为 [1, 2]（遍历原 nums 的前2位）。
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
      nums[i - j] = nums[i]
    } else {
      j++
    }
  }
  return nums.length - j
};

removeDuplicates(nums)