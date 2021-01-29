/* 
  https://leetcode-cn.com/problems/minimum-genetic-mutation/#/description
*/
/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
  let bankSet = new Set(bank)
  if (!bankSet.has(end)) return -1

  const dict = ['A', 'C', 'G', 'T']
  let count = 0
  let queue = [start]
  while (queue.length) {
    let n = queue.length
    while (n-- >0) {
      const node = queue.shift()
      if (node === end) return count
      for (let i = 0; i < node.length; i++) {
        for (const letter of dict) {
          const str = node.slice(0, i) + letter + node.slice(i+1)
          if (bankSet.has(str)) {
            bankSet.delete(str)
            queue.push(str)
          }
        }
      }
    }
    count++
  }
  return 0
};


var minMutation = function(start, end, bank) {
  let bankSet = new Set(bank)
  if (!bankSet.has(end)) return -1

  const dict = ['A', 'C', 'G', 'T']
  let count = Infinity
  dfs(start, 0)
  return count === Infinity ? -1 : count

  function dfs(start, level) {
    if (start === end) {
      count = Math.min(level, count)
      return
    }

    for (let i = 0; i < start.length; i++) {
      for (const letter of dict) {
        const str = start.slice(0, i) + letter + start.slice(i+1)
        if (bankSet.has(str)) {
          bankSet.delete(str)
          dfs(str, level + 1)
          bankSet.add(str)
        }
      }
    }
  }
};


console.log(minMutation('AACCGGTT', 'AAACGGTA', ["AACCGGTA", "AACCGCTA", "AAACGGTA"])) // 2
