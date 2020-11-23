function mergeSort(nums, left, right) {
  if (left >= right) return;
  let mid = (left + right) >> 1;

  mergeSort(nums, left, mid)
  mergeSort(nums, mid+1, right);
  merge(nums, left, mid, right)

  return nums
}

function merge(nums, left, mid, right) {
  let ret = []
  let i = left, j = mid + 1, k = 0;
  // 如果 i <= mid 走完了，不能确定 j 是否还有剩下的，所以下面还有一个循环。
  while (i <= mid) {
    while (j <= right && nums[i] >= nums[j]) {
      ret[k++] = nums[j++]
    }
    // j <= right 走完了，还有剩下的 i
    ret[k++] = nums[i++]
  }
  while (j <= right) ret[k++] = nums[j++];

  for (let x = 0; x < ret.length; x++) {
    nums[left + x] = ret[x]
  }
}


const params = [1,3,2,3,1]
// const params = [2,4,3,5,1]
console.log(mergeSort(params, 0, params.length - 1))