/* 
  https://leetcode-cn.com/problems/student-attendance-record-ii/
*/
/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function(s) {
  let countA = 0, countL = 0
  for (const letter of s) {
    if (letter === 'A') {
      countA++
      countL = 0
      if (countA > 1) return false
    } else if (letter === 'L') {
      countL++
      if (countL > 2) return false
    } else {
      countL = 0
    }
  }
  return true
};

var checkRecord = function(s) {
  if (s.indexOf('LLL') > -1) return false
  
  let countA = 0
  for (const letter of s) {
    if (letter === 'A') {
      countA++
      if (countA > 1) return false
    } 
  }
  return true
};