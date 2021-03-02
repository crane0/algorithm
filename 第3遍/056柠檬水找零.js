/* 
  https://leetcode-cn.com/problems/lemonade-change/description/
*/
/**
 * 主要统计 5 和 10 的个数，在收到不同面额时计算判断。
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let m5 = 0, m10 = 0
  for (const money of bills) {
    if (money === 5) {
      m5++
    } else { // 不是 5 就是 10 或 20
      if (m5 === 0) {
        return false
      }
      if (money === 10) {
        m10++
        m5--
      } else if (money === 20) {
        if (m10 > 0) {
          m10--
          m5--
        } else if (m10 === 0){
          if (m5 < 3) {
            return false
          } else {
            m5 -= 3
          }
        }
      }
    }
  }
  return true
};

console.log(lemonadeChange([10, 10]))
console.log(lemonadeChange([5,5,5,10,20]))
console.log(lemonadeChange([5,5,10,10,20])) // false