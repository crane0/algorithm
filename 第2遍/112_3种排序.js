/**
 * 快速排序
 * @param {number[]} nums
 * @return {number[]} 
 */
var sort = function(nums) {
  return quickSort(nums, 0, nums.length - 1)
  function quickSort(arr, left, right) {
    if (arr.length <= 1) return arr
    if (left < right) {
      const index = partition(arr, left, right)
      quickSort(arr, left, index - 1)
      quickSort(arr, index + 1, right)
    }
    return arr
  }

  function partition(arr, left, right) {
    let privt = left, index = left + 1

    for (let i = index; i <= right; i++) {
      if (arr[i] < arr[privt]) {
        [arr[i], arr[index]] = [arr[index], arr[i]]
        index++
      }
    }

    [arr[privt], arr[index-1]] = [arr[index-1], arr[privt]]
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
    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)))
  }

  function merge(arr1, arr2) {
    let ret = []
    while (arr1.length && arr2.length) {
      ret.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift())
    }
    while (arr1.length) {
      ret.push(arr1.shift())
    }
    while (arr2.length) {
      ret.push(arr2.shift())
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
    let len = arr.length
    for (let i = len - 1 >> 1; i >= 0; i--) {
      heapify(arr, len, i)
    }
    for (let i = len - 1; i >= 0; i--) {
      [arr[i], arr[0]] = [arr[0], arr[i]]
      heapify(arr, i, 0)
    }
    return arr
  }

  function heapify(arr, len, i) {
    let left = i * 2 + 1
    let right = i * 2 + 2
    let largest = i
    while (left < len && arr[left] > arr[largest]) {
      largest = left
    }
    while (right < len && arr[right] > arr[largest]) {
      largest = right
    }
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]]
      heapify(arr, len, largest)
    }
  }
}

const params = [6, 2, 3, 5, 7, 10, 1, 9, 4]
console.log(sort(params))