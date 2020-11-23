/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x === 1) return 1;
  let left = 0, right = x
  while (right - left > 1) {
    let mid = Math.floor((left + right) / 2)
    if (x / mid < mid) {
      right = mid
    } else {
      left = mid
    }
  }
  return Math.floor(left)
};

console.log(mySqrt(5))