/**
 * 快速排序
 * @param {number[]} nums
 * @return {number[]} 
 */
var sort = function(nums) {
  return quickSort(nums, 0, nums.length - 1)
  function quickSort(arr, left, right) {
    if (arr.length <= 1) return arr
    if (left < right) { // 关键判断！！！
      const index = partition(arr, left, right)
      quickSort(arr, left, index - 1)
      quickSort(arr, index + 1, right)
    }
    return arr
  }

  function partition(arr, left, right) {
    let provt = left, index = left + 1
    for (let i = index; i <= right; i++) {
      if (arr[i] < arr[provt]) {
        [arr[i], arr[index]] = [arr[index], arr[i]];
        index++
      }
    }
    [arr[provt], arr[index - 1]] = [arr[index - 1], arr[provt]];
    return index - 1
  }
}

/**
 * 归并排序
 * 时间复杂度为什么是 nlogn
 * 因为首先分成了 logn 层，每次执行 merge 都要访问 left + right 次，每层的访问次数都是 n
 * 例：num.length = 8，拆分如下
 *        8
 *    4       4
 *  2   2   2   2
 * 1 1 1 1 1 1 1 1
 * 可以看到对第3层来说，子级第4层的 left 和 right 的长度都是 1，
 * 第3层执行了4次 merge，每次 merge 都访问了 left + right = 2，所以第3层总访问次数是 4*2 = 8
 * 其他层依次类推。 
 * @param {number[]} nums
 * @return {number[]} 
 */
var sort = function(nums) {
  return mergeSort(nums)

  function mergeSort(arr) {
    if (arr.length <= 1) return arr
    const mid = arr.length >> 1
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))
    return merge(left, right)
  }

  function merge(left, right) {
    let ret = []
    while (left.length && right.length) {
      ret.push(left[0] < right[0] ? left.shift() : right.shift())
    }
    while (left.length) {
      ret.push(left.shift())
    }
    while (right.length) {
      ret.push(right.shift())
    }
    return ret
  }
}

/**
 * 堆排序
 * @param {number[]} nums
 * @return {number[]} 
 */
var sort = function(nums) {
  return heapSort(nums)

  function heapSort(arr) {
    if (arr.length <= 1) return arr
    const len = arr.length 
    for (let i = (len - 1) >> 1; i >= 0; i--) {
      heapify(arr, i, len)
    }

    for (let i = len - 1; i >= 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]]
      heapify(arr, 0, i)
    }
    return arr
  }

  function heapify(arr, i, len) {
    const left = i * 2 + 1
    const right = i * 2 + 2
    let largest = i
    while (left < len && arr[left] > arr[largest]) {
      largest = left
    }
    while (right < len && arr[right] > arr[largest]) {
      largest = right
    }
    if (i !== largest) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]]
      heapify(arr, largest, len)
    }
  }
}

const params = [6, 2, 3, 5, 7, 10, 1, 9, 4]
console.log(sort(params))