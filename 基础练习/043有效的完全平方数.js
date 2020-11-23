/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num === 1) return true;
  let left = 0, right = num
  while (right - left > 1) {
    let mid = Math.floor((left + right) / 2)
    let squre = mid * mid
    if (num === squre) {
      return true
    } else if (num < squre) {
      right = mid
    } else {
      left = mid
    }
  }
  return false
};

console.log(isPerfectSquare(4))