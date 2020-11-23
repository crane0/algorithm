/* 
  https://leetcode-cn.com/problems/reverse-pairs/

  基于归并排序，v2 版本
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
  let count = 0
  mergeSort(nums, 0, nums.length - 1)
  return count

  function mergeSort(nums, left, right) {
    if (left >= right) return;
    let mid = (left + right) >> 1;

    mergeSort(nums, left, mid)
    mergeSort(nums, mid+1, right);
    merge(nums, left, mid, right)
  }

  function merge(nums, left, mid, right) {
    let ret = []
    let i = left, j = mid + 1, k = 0, p = mid + 1; // p 的初始化很精髓
    while (i <= mid) {
      // 去掉下面这2行，就是正常的归并排序
      while (p <= right && nums[i] > 2 * nums[p]) p++;
      count += p - (mid + 1);

      while (j <= right && nums[i] >= nums[j]) {
        ret[k++] = nums[j++]
      }
      ret[k++] = nums[i++]
    }
    while (j <= right) ret[k++] = nums[j++];

    for (let x = 0; x < ret.length; x++) {
      nums[left + x] = ret[x]
    }
  }
}

// const params = [1,3,2,3,1]
const params = [2,4,3,5,1]
console.log(reversePairs(params))