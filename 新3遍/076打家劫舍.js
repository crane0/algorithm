/* 
  https://leetcode-cn.com/problems/house-robber/
*/
/**
 * a[i] 表示 0--i 个房子的最大值，
 * 因为相邻的房子不能偷，所以分为 2种情况，偷或不偷第 i 个房子：
 * 这里升维，a[i][0或1]，0 表示不偷第 i 个房子，1 表示偷
 * a[i][0] = Math.max(a[i-1][1], a[i-1[0]])
 * a[i][1] = a[i-1][0] + nums[i]
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  
}

/**
 * O(n)，一维 dp 也可以解决
 * a[i] 表示 0--i 个房子的最大值
 * a[i] = Math.max(a[i-1], nums[i] + a[i-2])
 * @param {number[]} nums 
 * @return {number}
 */
var rob = function(nums) {
 
}

// console.log(rob([1,2,1,3]))
console.log(rob([2,7,9,3,1]))