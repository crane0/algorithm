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
  if (n === 0) return nums1
  let ret = []
  let index1 = 0, index2 = 0
  for (let i = 0; i < m + n; i++) {
    // 关键判断 index2 === n ，因为 nums2 中走完后，剩下的都是 nums1
    if (nums1[index1] < nums2[index2] && index1 < m || index2 === n) {
      ret.push(nums1[index1])
      index1++
    } else {
      ret.push(nums2[index2])
      index2++
    }
  }

  for (let i = 0; i < ret.length; i++) {
    nums1[i] = ret[i]
  }
  console.log(ret)
};


var merge = function(nums1, m, nums2, n) {
  if (n === 0) return nums1
  let length = m + n
  while (n > 0) {
    if (m <= 0) {
      nums1[--length] = nums2[--n]
      continue
    }
    nums1[--length] = nums1[m-1] > nums2[n-1] ? nums1[--m] : nums2[--n]
  }
  console.log(nums1)
};


console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))
console.log(merge([2,0], 1, [1], 1))
