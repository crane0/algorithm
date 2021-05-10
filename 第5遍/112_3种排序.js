/**
 * 快速排序
 * @param {number[]} nums
 * @return {number[]} 
 */
var sort = function(nums) {

  function quickSort(arr, left, right) {
    
  }

  function partition(arr, left, right) {
    
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
    
  }

}

const params = [6, 2, 3, 5, 7, 10, 1, 9, 4]
console.log(sort(params))