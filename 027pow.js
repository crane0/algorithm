/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  return n >= 0 ? quickMul(x, n) : 1 / quickMul(x, -n)

  function quickMul(x, n) {
    // 递归终止条件
    if (n === 0) return 1

    // 拆分子问题
    d = Math.floor(n / 2)

    // 下探
    let y = quickMul(x, d)

    // 汇总子问题结果
    return n % 2 === 0 ? y * y : y * y * x
  }
};

console.log(myPow(2,3))