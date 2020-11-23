/* 
  https://leetcode-cn.com/problems/group-anagrams/

  算术基本定理，又称为正整数的唯一分解定理，
  即：每个大于1的自然数，要么本身就是质数，要么可以写为2个以上的质数的积，而且这些质因子按大小排列之后，写法仅有一种方式。
  
  prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103]
  
  可以将每个字符串都映射到一个正数上，
  比如，'abc'，'a' - 'a' = 0，'b' - 'a' = 1，'c' - 'a' = 2，所以 'abc' 可映射为 prime[0] * prime[1] * prime[2] = 30
*/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  if (strs.length === 0) return [];

  let map = new Map()
  const prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103]
  const aPoint = 'a'.charCodeAt()
  
  for (let i = 0; i < strs.length; i++) {
    let key = 1
    for (let j = 0; j < strs[i].length; j++) {
      key *= prime[strs[i][j].charCodeAt() - aPoint]
    }
    if (!map.get(key)) {
      map.set(key, [])
    }
    map.get(key).push(strs[i])
  }

  return [...map.values()]
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))