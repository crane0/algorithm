/* 
  https://leetcode-cn.com/problems/lemonade-change/description/
*/
/**
 * 主要统计 5 和 10 的个数，在收到不同面额时计算判断。
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  if (bills.length === 0) return true
  if (bills[0] > 5) return false

  let c5 = 0, c10 = 0
  for (const money of bills) {
    if (money === 5) {
      c5++
    } else if (money === 10) {
      if (c5 > 0) {
        c5--
        c10++
      } else {
        return false
      }
    } else if (money === 20) {
      // 这样更合理，因为 c5 没有的话直接可以判断了。
      if (c5 > 0) {
        // 优先把 c10 找出去。
        if (c10 > 0) {
          c10--
          c5--
        } else if (c5 >= 3) {
          c5 -= 3
        } else {
          return false
        }
      } else {
        return false
      }
      // if (c10 > 0) {
      //   if (c5 > 0) {
      //     c10--
      //     c5--
      //   } else {
      //     return false
      //   }
      // } else {
      //   if (c5 >= 3) {
      //     c5 -= 3
      //   } else {
      //     return false
      //   }
      // }
    }
  }
  return true
};

console.log(lemonadeChange([10, 10]))
console.log(lemonadeChange([5,5,5,10,20]))
console.log(lemonadeChange([5,5,10,10,20]))