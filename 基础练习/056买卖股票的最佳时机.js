/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = Infinity
  let max = -Infinity
  let ret = 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i+1]) {
      if (min >= prices[i]) { // 当比之前的还小，需重新计算 min max。在此之前，要将之前的差值记录下。
        ret = max-min
        min = prices[i]
        max = prices[i+1]
        continue
      }
      max = Math.max(max, prices[i+1])
    }
  }
  return Math.max(ret, max-min)
};

// console.log(maxProfit([7,1,5,3,6,4]))
// console.log(maxProfit([7,6,4,3,1]))
console.log(maxProfit([2,1,2,0,1]))
// console.log(maxProfit([3,2,6,5,0,3]))