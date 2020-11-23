/* 
  189 https://leetcode-cn.com/problems/rotate-array/

  给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

  输入: [-1,-100,3,99] 和 k = 2
  输出: [3,99,-1,-100]
  解释:
    向右旋转 1 步: [99,-1,-100,3]
    向右旋转 2 步: [3,99,-1,-100]
*/

var nums = [1, 2, 3, 4, 5, 6, 7]
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop())
  }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
  nums.splice(0, 0, ...nums.splice(nums.length - k))
};