/* 
  https://leetcode-cn.com/problems/relative-sort-array/
  提示：
  arr1.length, arr2.length <= 1000
  0 <= arr1[i], arr2[i] <= 1000
  arr2 中的元素 arr2[i] 各不相同
  arr2 中的每个元素 arr2[i] 都出现在 arr1 中

  因为有上面的提示，所以非常适合计数排序，因为计数排序的缺点就是源数组有多大，需要的临时数组就得多大。
*/
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  if (!arr1.length) return arr2;

  let countArr = []
  let index = 0

  for (const num of arr1) {
    countArr[num] = countArr[num] ? countArr[num]+1 : 1
  }

  for (const num of arr2) {
    while (countArr[num]) {
      arr1[index++] = num
      countArr[num]--
    }
  }

  for (let i = 0; i < countArr.length; i++) {
    while (countArr[i]) {
      arr1[index++] = i
      countArr[i]--
    }
  }

  return arr1
};

let arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]

console.log(relativeSortArray(arr1, arr2))