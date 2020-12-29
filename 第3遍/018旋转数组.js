/* 
  https://leetcode-cn.com/problems/rotate-array/
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  if (nums.length <= 1) return
  let count = k % nums.length

  _rotate(0, nums.length - 1)
  _rotate(0, count - 1)
  _rotate(count, nums.length - 1)
  function _rotate(i, j) {
    while (i < j) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
      i++
      j--
    }
  }
};

console.log(rotate([1,2,3,4,5,6,7], 3)) // [5,6,7,1,2,3,4]
