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
  if (start === end) return 0

  let bankSet = new Set(bank)
  const dict = ['A', 'C', 'G', 'T']
  let count = 0
  let queue = [start]

  while (queue.length) {
    let n = queue.length
    while (n-- > 0) {
      let node = queue.shift()
      if (node === end) return count
      for (let i = 0; i < node.length; i++) {
        for (const d of dict) {
          const str = node.slice(0, i) + d + node.slice(i+1)
          if (bankSet.has(str)) {
            queue.push(str)
            bankSet.delete(str)
          }
        }
      }
    }
    count++
  }
  return -1
};

var minMutation = function(start, end, bank) {
  if (start === end) return 0
  let count = Infinity
  let bankSet = new Set(bank)
  const dict = ['A', 'C', 'G', 'T']
  dfs(start, 0)
  return count === Infinity ? -1 : count

  function dfs(start, num) {
    if (start === end) {
      count = Math.min(count, num)
      return
    }
    for (let i = 0; i < start.length; i++) {
      for (const d of dict) {
        const str = start.slice(0, i) + d + start.slice(i+1)
        if (bankSet.has(str)) {
          bankSet.delete(str)
          dfs(str, num+1)
          bankSet.add(str)
        }
      }
    }
  }
};

console.log(minMutation('AACCGGTT', 'AAACGGTA', ["AACCGGTA", "AACCGCTA", "AAACGGTA"])) // 2
