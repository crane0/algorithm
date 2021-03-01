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

  const dict = ['A', 'C', 'G', 'T'], count = 0
  let queue = [start]
  while (queue.length) {
    let n = queue.length
    while (n-- > 0) {
      let node = queue.shift()
      for (let i = 0; i < node.length; i++) {
        for (const letter of dict) {
          let str = node.slice(0, i) + letter + node.slice(i+1)
          if (str === end) {
            return count + 1
          }
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


// 注意，dfs 第一次找到的不是最小值！
var minMutation = function(start, end, bank) {
  let bankSet = new Set(bank)
  if (!bankSet.has(end)) return -1

  const dict = ['A', 'C', 'G', 'T']
  let count = Infinity
  dfs(start, 0)
  return count === Infinity ? -1 : count

  function dfs(start, level) {
    if (start === end) {
      count = Math.min(count, level)
      return
    }

    for (let i = 0; i < start.length; i++) {
      for (const letter of dict) {
        let str = start.slice(0, i) + letter + start.slice(i+1)
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
