function mergeSort(nums) {
  if (nums.length <= 1) return nums;
  const mid = nums.length >> 1
  const left = nums.slice(0, mid)
  const right = nums.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let result = []
  while (left.length && right.length) {
    result.push(left[0] < right[0] ? left.shift() : right.shift())
  }
  while (left.length) result.push(left.shift())
  while (right.length) result.push(right.shift())

  return result
}

const params = [6, 2, 3, 5, 7, 10, 1, 9, 4]
const params1 = [4, 2, 3, 5, 1, 6, 7, 9, 10]

console.log(mergeSort(params))