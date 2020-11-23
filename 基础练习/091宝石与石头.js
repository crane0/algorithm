/* 
  https://leetcode-cn.com/problems/jewels-and-stones/
*/
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let obj = {}
  for (const s of S) {
    obj[s] = obj[s] ? obj[s] + 1 : 1
  }
  let count = 0
  for (const j of J) {
    if (obj[j]) {
      count += obj[j]
    }
  }
  return count
};

// 更好的解法！
var numJewelsInStones2 = function(J, S) {
  let num = 0
  for(let i = 0; i < S.length; i++) {
      if (J.indexOf(S[i]) !== -1) {
          num += 1
      }
  }
  return num
};

// console.log(numJewelsInStones('aA', 'aAAbbbb'))
console.log(numJewelsInStones('z', 'ZZ'))
