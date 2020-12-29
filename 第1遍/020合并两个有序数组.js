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
  if (n === 0) return nums1;
  let index1 = 0, index2 = 0, ret = []
  while (m + n > 0) {
    //  m > 0 是因为可能 nums1 的元素都小于 nums2 的元素，nums1 中剩下的 0 都要用 nums2 中的元素填充。
    //  n === 0 是因为 nums2 中的元素走完后，要继续走 nums1 剩下的，否则再次进入 else，push 的就是 undefined 了。
    if ((nums1[index1] <= nums2[index2] && m > 0) || n === 0) {
      m--
      ret.push(nums1[index1])
      index1++
    } else {
      n--
      ret.push(nums2[index2])
      index2++
    }
  }
  // 为了原地修改，直接 nums1 = ret 无法通过
  for (let i = 0; i < ret.length; i++) {
    nums1[i] = ret[i]
  }
  console.log(nums1)
};


var merge = function(nums1, m, nums2, n) {
  if (n === 0) return nums1;
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
