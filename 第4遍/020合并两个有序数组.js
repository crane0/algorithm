/* 
  https://leetcode-cn.com/problems/merge-sorted-array/
*/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let length = m + n
  while (n > 0) {
    if (m <= 0) {
      nums1[--length] = nums2[--n]
      continue
    }
    nums1[--length] = nums1[m-1] > nums2[n-1] ? nums1[--m] : nums2[--n]
  }
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))
console.log(merge([2,0], 1, [1], 1))
