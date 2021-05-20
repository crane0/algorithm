/* 
  https://leetcode-cn.com/problems/reverse-pairs/
*/
/**
 * 归并排序第2种方式
 * 拆分到最小时，假设前4个位  1 2 3 4
 * 则 1 和 2 比较，3 和 4 比较，
 * 合并到上一层，1和3，4比较，2和3，4比较，
 * 依次来推！这样就保证了都会遍历到。
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
  let count = 0
  mergeSort(nums, 0, nums.length - 1)
  function mergeSort(nums, left, right) {
    if (left >= right) return
    const mid = left + right >> 1
    mergeSort(nums, left, mid)
    mergeSort(nums, mid + 1, right)
    merge(nums, left, mid, right)
  }

  function merge(nums, left, mid, right) {
    let ret = []
    let i = left, j = mid + 1, k = 0, p = mid + 1
    while (i <= mid) {
      while (p <= right && nums[i] > 2 * nums[p]) {
        p++
      }
      count += p - (mid+1)
      while (j <= right && nums[i] >= nums[j]) {
        ret[k++] = nums[j++]
      }
      ret[k++] = nums[i++]
    }
    while (j <= right) {
      ret[k++] = nums[j++]
    }

    for (let x = 0; x < ret.length; x++) {
      nums[left+x] = ret[x]
    }
  }
  return count
}