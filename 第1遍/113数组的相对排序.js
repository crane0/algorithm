/* 
  https://leetcode-cn.com/problems/relative-sort-array/
*/
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  let ret = []
  let temp = []
  let countMap = new Map()
  for (const item of arr1) {
    countMap.set(item, countMap.has(item) ? countMap.get(item) + 1 : 1)
  }
  for (const item of arr2) {
    ret.push(...Array(countMap.get(item)).fill(item))
    countMap.delete(item)
  }

  for (const item of arr1) {
    if (countMap.has(item)) {
      temp.push(item)
    }
  }
  temp = temp.sort((a, b) => a - b)
  return [...ret, ...temp]
}

let arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
console.log(relativeSortArray(arr1, arr2))
