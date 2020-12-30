/* 
  https://leetcode-cn.com/problems/plus-one/
*/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++
    digits[i] = digits[i] % 10
    if (digits[i] !== 0) return digits
  }
  // 循环走完还没有 return，说明所有的都进位了，每个元素都是 0 了。此时需要手动在最高位补 1
  digits = [1, ...digits]
  return digits
};

// console.log(plusOne([1,2,3])) // [1,2,4]
console.log(plusOne([3,9])) // [4, 0]