/* 
  https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/

  9781s，差点超时！！
*/
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let sL = s.length, pL = p.length
  if (sL < pL) return [];

  let mapP = new Map()
  for (const charP of p) {
    mapP.set(charP, mapP.get(charP) ? mapP.get(charP) + 1 : 1)
  }

  let ret = []
  loop: for (let i = 0; i <= sL - pL; i++) {
    const tempS = s.slice(i, i + pL)
    let mapS = new Map()
    for (const charS of tempS) {
      mapS.set(charS, mapS.has(charS) ? mapS.get(charS) + 1 : 1)
    }

    for (const [key, value] of mapS) {
      if (mapP.get(key) !== value) {
        continue loop
      }
    }
    ret.push(i)
  }
  return ret
};

// console.log(findAnagrams("cbaebabacd", "abc"))
console.log(findAnagrams("abab", "ab"))
