/* 
  https://leetcode-cn.com/problems/minimum-genetic-mutation
*/
/**
 * bfs
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
  let bankSet = new Set(bank)
  if (!bankSet.has(end)) return -1

  const dict = ['A', 'C', 'G', 'T']
  let queue = [start], number = 0
  while (queue.length > 0) {
    let length = queue.length
    while (length-- > 0) {
      const node = queue.shift()
      for (let i = 0; i < node.length; i++) {
        for (const letter of dict) {
          const next = node.slice(0, i) + letter + node.slice(i+1)
          if (next === end) {
            return number + 1
          }
          if (bankSet.has(next)) {
            queue.push(next)
            bankSet.delete(next)
          }
        }
      }
    }
    number++
  }
  return -1
};

// dfs
var minMutation = function(start, end, bank) {
  let bankSet = new Set(bank)
  if (!bankSet.has(end)) return -1

  const dict = ['A', 'C', 'G', 'T']
  let number = Infinity
  dfs(0, start)
  return number === Infinity ? -1 : number

  function dfs(level, node) {
    if (node === end) {
      return number = Math.min(number, level)
    }

    for (let i = 0; i < node.length; i++) {
      for (const letter of dict) {
        const next = node.slice(0, i) + letter + node.slice(i+1)
        if (next === end) {
          return number = Math.min(number, level + 1)
        }
        if (bankSet.has(next)) {
          bankSet.delete(next)
          dfs(level + 1, next)
          bankSet.add(next)
        }
      }
    }
  }
};

console.log(minMutation('AACCGGTT', 'AAACGGTA', ["AACCGGTA", "AACCGCTA", "AAACGGTA"])) // 2
