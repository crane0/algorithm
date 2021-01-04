/* 
  https://leetcode-cn.com/problems/rotate-array/
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  if (k === 0) return nums
  let count = k % nums.length

  revert(0, nums.length - 1)
  revert(0, count-1)
  revert(count, nums.length - 1)

  function revert(i, j) {
    for (i, j; i < j;) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
      i++
      j--
    }
  }
};

console.log(rotate([1,2,3,4,5,6,7], 3)) // [5,6,7,1,2,3,4]
