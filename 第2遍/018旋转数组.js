/* 
  https://leetcode-cn.com/problems/rotate-array/
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let count = k % nums.length
  nums.reverse()

  reverse(0, count-1)
  reverse(count, nums.length - 1)

  function reverse(left, right) {
    while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]]
      left++
      right--
    }
  }
};

console.log(rotate([1,2,3,4,5,6,7], 3)) // [5,6,7,1,2,3,4]
