// quickSort partition pivot
function quickSort(nums, left, right) {
  if (nums.length <= 1) return nums;
  if (left < right) {
    let index = partition(nums, left, right)
    quickSort(nums, left, index - 1)
    quickSort(nums, index + 1, right)
  }
  return nums
}


function partition(nums, left, right) {
  let pivot = left, index = left + 1;
  for (let i = index; i <= right; i++) {
    if (nums[i] < nums[pivot]) {
      [nums[i], nums[index]] = [nums[index], nums[i]]
      index++
    }
  }
  [nums[pivot], nums[index-1]] = [nums[index-1], nums[pivot]]
  return index - 1
}


const params = [6, 2, 3, 5, 7, 10, 1, 9, 4]
const params1 = [4, 2, 3, 5, 1, 6, 7, 9, 10]

console.log(quickSort(params, 0, params.length - 1))