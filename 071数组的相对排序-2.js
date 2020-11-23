/* 
  https://leetcode-cn.com/problems/relative-sort-array/
  
  相比于 v1，如果没有 0 <= arr1[i], arr2[i] <= 1000 的限制，Java 中可以用 TreeMap，（二叉搜索树实现的）
  js 不没有这样的数据结构，只能用 object
  
*/
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  if (!arr1.length) return arr2;

  let countObj = {}
  let result = []
  let temp = []
  for (const num of arr1) {
    // value 也可以直接是数组，最后直接合并就可以了
    countObj[num] = countObj[num] ? countObj[num]+1: 1
  }

  for (const num of arr2) {
    // result = [...result, ...Array(countObj[num]).fill(num)]
    result.push(...Array(countObj[num]).fill(num))
    delete countObj[num]
  }

  for (const key in countObj) {
    // temp = [...temp, ...Array(countObj[key]).fill(+key)]
    temp.push(...Array(countObj[key]).fill(+key))
  }

  temp.sort((a, b) => a - b)
  return [...result, ...temp]
};

let arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6];

console.log(relativeSortArray(arr1, arr2))