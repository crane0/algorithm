/* 
  https://leetcode-cn.com/problems/reverse-only-letters/

  双端指针
*/
/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
  const strDict = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let left = 0, right = S.length - 1, arr = S.split('')

  while (left < right) {
    if (strDict.indexOf(arr[left]) === -1) left++;
    if (strDict.indexOf(arr[right]) === -1) right--;

    if (strDict.indexOf(arr[left]) !== -1 && strDict.indexOf(arr[right]) !== -1) {
      [arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    }
  }

  return arr.join('')
};

console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"))
