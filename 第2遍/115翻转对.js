/* 
  https://leetcode-cn.com/problems/reverse-pairs/
*/
/**
 * 归并排序第2种方式
 * 拆分到最小时，假设前4个位  1 2 3 4
 * 则 1 和 2 比较，3 和 4 比较，
 * 合并到上一层，1和3，4比较，2和3，4比较，
 * 依次来推！这样就保证了都会遍历到。
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
  
}