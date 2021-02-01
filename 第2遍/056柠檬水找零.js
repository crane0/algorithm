/* 
  https://leetcode-cn.com/problems/lemonade-change/description/
*/
/**
 * 主要统计 5 和 10 的个数，在收到不同面额时计算判断。
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  if (bills[0] > 5) return false

  let count5 = 0, count10 = 0
  for (const b of bills) {
    if (b === 5) {
      count5++
    } else if (b === 10) {
      if (count5 < 1) {
        return false
      } else {
        count10++
        count5--
      }
    } else if (b === 20) {
      if (count5 < 1) {
        return false
      } else {
        if (count10 < 1) {
          if (count5 < 3) {
            return false
          } else {
            count5 -= 3
          }
        } else {
          count10--
          count5--
        }
      }
    }
  }
  return true
};

console.log(lemonadeChange([10, 10]))
console.log(lemonadeChange([5,5,5,10,20]))
console.log(lemonadeChange([5,5,10,10,20])) // false