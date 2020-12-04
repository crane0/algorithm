/* 
  https://leetcode-cn.com/problems/rotate-array/
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/* 
  splice 方法的第一个参数，如果是负数，等价于array.length-n
  但如果负数的绝对值大于数组的长度，则表示开始位置为第0位。

  所以这里不能用 -k，因为和 nums.length 有关系，比如 [1,2], 3
*/
var rotate = function(nums, k) {
  nums.splice(0, 0, ...nums.splice(nums.length-k))
  console.log(nums)
};

/* 
  n = k % nums.length，n 就是要反转的次数！
  既然是原地旋转，所以可先整体旋转，在分别旋转前 n 个元素，nums.length - n 个元素。
*/
var rotate = function(nums, k) {
  k %= nums.length
  nums.reverse()
  reverse(0, k-1)
  reverse(k, nums.length - 1)
  
  function reverse(start, end) {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]]
      start++;
      end--
    }
  }
};

console.log(rotate([1,2,3,4,5,6,7], 3)) // [5,6,7,1,2,3,4]
