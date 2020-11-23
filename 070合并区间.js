/* 
  https://leetcode-cn.com/problems/merge-intervals/
*/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (intervals.length <= 1) return intervals;
  
  // 归并排序，v2 版本用了 js 内部的 sort 函数而已。
  mergeSort(intervals, 0, intervals.length - 1)
  return mergeSub(intervals)

  function mergeSub(arr) {
    let result = []
    let n = arr.length - 1
    for (let i = 1; i <= n; i++) {
      // 说明有交集
      if (arr[i-1][1] >= arr[i][0]) {
        // 升序排序后，arr[i-1][0] 肯定是最小的，
        arr[i] = [arr[i-1][0], Math.max(arr[i-1][1], arr[i][1])]
      } else {
        result.push(arr[i-1])
      }
    }
    // 最后一个在 for 循环中没有添加
    result.push(arr[n])
    return result
  }

  function mergeSort(nums, left, right) {
    if (left >= right) return;
    const mid = (left + right) >> 1;
    mergeSort(nums, left, mid)
    mergeSort(nums, mid+1, right)
    merge1(nums, left, mid, right)
    return nums
  }

  function merge1(nums, left, mid, right) {
    let ret = []
    let i = left, j = mid + 1, k = 0;
    while (i <= mid) {
      while (j <= right && nums[j][0] <= nums[i][0]) {
        ret[k++] = [nums[j][0], nums[j][1]]
        j++
      }
      ret[k++] = [nums[i][0], nums[i][1]]
      i++
    }
    while (j <= right) {
      ret[k++] = [nums[j][0], nums[j][1]]
      j++
    }

    for (let p = 0; p < ret.length; p++) {
      nums[left + p] = ret[p]
    }
  }
};