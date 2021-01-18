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
  if (digits[0] === 0) return [1, ...digits]
};

console.log(plusOne([1,2,3])) // [1,2,4]
console.log(plusOne([3,9])) // [4, 0]
console.log(plusOne([9,9])) // [1, 0, 0]