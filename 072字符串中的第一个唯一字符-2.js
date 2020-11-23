/* 
  https://leetcode-cn.com/problems/first-unique-character-in-a-string/

  思路，s.indexOf(char) ! == -1 && s.indexOf(char) === s.lastIndexOf(char)
  那就说明是唯一的，所以只需要保证 s.indexOf(char) 是最小的索引即可。
*/
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let index = s.length
  for (const char of 'abcdefghijklmnopqrstuvwxyz') {
    let i = s.indexOf(char)
    if (i !== -1 && i === s.lastIndexOf(char)) {
      index = Math.min(i, index)
    }
  }
  return index === s.length ? -1 : index
};

// console.log(firstUniqChar("loveleetcode"))
console.log(firstUniqChar("leetcode"))
