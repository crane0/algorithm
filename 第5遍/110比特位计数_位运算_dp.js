/* 
  https://leetcode-cn.com/problems/counting-bits/
*/
/**
 * 位运算
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  
};

/**
 * dp + 位运算，最低有效位
 * 如果是偶数，那 >> 1 去掉的是末尾的0，并不影响 1 的个数，
 * 如果是奇数，那 >> 1 去掉的是末尾的1，在 +1 就是整体 1 的个数
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  
};

/**
 * dp + 位运算，最高有效位
 * 可以对比 4-7的二进制规律，除了最高位是 1 之外，00-11 的变化就是 0-3 的二进制变化
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  
};

console.log(countBits(4))