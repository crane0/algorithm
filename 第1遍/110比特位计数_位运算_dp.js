/* 
  https://leetcode-cn.com/problems/counting-bits/
*/
/**
 * 位运算
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  let ret = [0]
  for (let n = 1; n <= num; n++) {
    ret.push(getNumber(n))
  }
  return ret

  function getNumber(n) {
    let number = 0
    while (n !== 0) {
      number += n & 1
      n >>= 1
    }
    return number
  }
};

/**
 * dp + 位运算，最低有效位
 * 如果是偶数，那 >> 1 去掉的是末尾的0，并不影响 1 的个数，
 * 如果是奇数，那 >> 1 去掉的是末尾的1，在 +1 就是整体 1 的个数
 * @param {number} num
 * @return {number[]}
 */
 var countBits = function(num) {
  let bits = [0]
  for (let n = 1; n <= num; n++) {
    bits[n] = bits[n >> 1] + (n & 1)
  }
  return bits
};

/**
 * dp + 位运算，最高有效位
 * 可以对比 4-7的二进制规律，除了最高位是 1 之外，00-11 的变化就是 0-3 的二进制变化
 * @param {number} num
 * @return {number[]}
 */
 var countBits = function(num) {
  let bits = [0], highBit = 0
  for (let n = 1; n <= num; n++) {
    if ((n & (n - 1)) === 0) { // 2 的幂  0, 1, 2, 4, 8, 16
      highBit = n
    }
    bits[n] = bits[n - highBit] + 1
  }
  return bits
};

console.log(countBits(4))