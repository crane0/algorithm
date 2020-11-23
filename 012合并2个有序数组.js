/* 
  88 https://leetcode-cn.com/problems/merge-sorted-array/

  输入:
  nums1 = [1,2,3,0,0,0], m = 3
  nums2 = [2,5,6],       n = 3

  输出: [1,2,2,3,5,6]
*/
// var nums1 = [1, 2, 3, 0, 0, 0]
// var nums2 = [2, 5, 6]
/* 
  从后往前遍历，m 和 n 相当于 2 个指针，
  极端情况1，nums1 中所有的都 > nums2，
    则将 nums1 都移动到新长度的 nums1 的末尾，再将 nums2 替换 nums1 原来元素的位置。
  极端情况2，nums1 中所有的都 < nums2,
    则将 nums2 补到新长度的 nums1 的末尾。
  正常情况，因为 nums1 和 nums2 都是有序的，所有从末尾开始比较是合理的。
    m-1 和 n-1 对应指向 nums1 和 nums2 当前比较元素的位置。
*/
var nums1 = [0]
var nums2 = [1]
var merge = function (nums1, m, nums2, n) {
  let length = m + n
  while (n > 0) {
    if (m <= 0) {
      nums1[--length] = nums2[--n]
    }
    nums1[--length] = nums1[m - 1] > nums2[n - 1] ? nums1[--m] : nums2[--n]
  }
};
merge(nums1, 0, nums2, 1)
