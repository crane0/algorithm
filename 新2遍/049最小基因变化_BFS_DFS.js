/* 
  https://leetcode-cn.com/problems/minimum-genetic-mutation
*/
/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
  const bankSet = new Set(bank)
  if (!bankSet.has(end)) return -1

  const dict = ['A', 'C', 'G', 'T']

  let queue = [start], count = 0
  while (queue.length > 0) {
    let length = queue.length
    while (length-- > 0) {
      const node = queue.shift()
      for (let i = 0; i < node.length; i++) {
        for (const letter of dict) {
          const newWord = node.slice(0, i) + letter + node.slice(i+1)
          if (newWord === end) return count + 1
          if (bankSet.has(newWord)) {
            queue.push(newWord)
            bankSet.delete(newWord)
          }
        }
      }
    }
    count++
  }
  return -1
};

// dfs
var minMutation = function(start, end, bank) {
  const bankSet = new Set(bank)
  if (!bankSet.has(end)) return -1

  const dict = ['A', 'C', 'G', 'T']
  let count = Infinity
  dfs(0, start)
  return count === Infinity ? -1 : count

  function dfs(level, node) {
    if (node === end) {
      count = Math.min(count, level)
      return
    }
    
    for (let i = 0; i < node.length; i++) {
      for (const letter of dict) {
        const newWord = node.slice(0, i) + letter + node.slice(i+1)
        if (bankSet.has(newWord)) {
          bankSet.delete(newWord)
          dfs(level + 1, newWord)
          bankSet.add(newWord)
        }
      }
    }
  }
};

console.log(minMutation('AACCGGTT', 'AAACGGTA', ["AACCGGTA", "AACCGCTA", "AAACGGTA"])) // 2
