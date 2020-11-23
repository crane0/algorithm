/* 
  使用分治的思想
  将 nums 数组当前 index 的内容分为填充，和不填充到 list 中的2种情况。
  list 就是要填充到 ans 中的元素。
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  if (nums === null) return []

  let answer = [[]]
  for (const num of nums) {
    let temp = []
    for (const ans of answer) {
      temp.push([...ans, num])
    }
    // answer = [...answer, ...temp]
    answer.push(...temp)
  }
  return answer
};

console.log(subsets([1, 2, 3]))
