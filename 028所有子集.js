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
  var ans = []
  if (nums === null) return ans

  dfs(ans, nums, [], 0)
  return ans

  function dfs(ans, nums, list, index) {
    if (index === nums.length) {
      ans.push(list)
      return
    }

    dfs(ans, nums, list, index + 1) // not pick

    // list.push(nums[index])
    dfs(ans, nums, [...list, nums[index]], index + 1) // pick
    // list.pop(list[list.length - 1])
  }
};

console.log(subsets([1, 2, 3]))
