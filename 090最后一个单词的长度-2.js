/* 
  https://leetcode-cn.com/problems/length-of-last-word/
*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const arr = s.split(' ').reverse()
  console.log(arr)
  const retIndex = arr.findIndex(item => item !== '')
  console.log(retIndex)
  if (retIndex > -1) {
    return arr[retIndex].length
  } else {
    return 0
  }
};

console.log(lengthOfLastWord("a "))

