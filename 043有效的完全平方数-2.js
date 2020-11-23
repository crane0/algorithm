/* 
  1
  4 = 1 + 3
  9 = 1 + 3 + 5
  16 = 1 + 3 + 5 + 7
  
  1 + 3 + ... + 2n - 1 = n^2

  时间复杂度 根号n
*/
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num === 1) return true;
  let i = 1
  while (num > 0) {
    num -= i
    i += 2
  }
  return num === 0
};

console.log(isPerfectSquare(3))