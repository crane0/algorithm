/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x === 0) return 0;
  let s = x

  return Math.floor(sqrt(x))

  function sqrt(x) {
    let res = (x + s / x) / 2
    if (Math.floor(res) === Math.floor(x)) {
      return x
    } else {
      return sqrt(res)
    }
  }
};

console.log(mySqrt(5))