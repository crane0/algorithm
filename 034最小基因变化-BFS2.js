/* 
  相比于第一种 BFS，只是 count 的计算位置略有不同。
  多了一层 while 循环，结束条件是“当前层”的 queue.length 都遍历完了，相当于遍历：上一次满足条件的改变了一个字母的添加到 queue 的所有 start 
  这样才能保证 count 计算正确。

  参考：https://leetcode-cn.com/problems/minimum-genetic-mutation/solution/javascript-bfs-by-jsyt/
*/
/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
  // new Set 传参为数组时，相当于一次 add 了多个元素 let d = new Set([123, 'ACG'])
  let bankSet = new Set(bank);
  if (!bankSet.has(end)) return -1;

  let dict = ["A", "C", "G", "T"];
  let count = 0
  let queue = [start]
  while (queue.length > 0) {
    let n = queue.length
    while (n-- > 0) {
      let node = queue.shift()
      if(node === end) return count
      for (let i = 0; i < node.length; i++) {
        for (let j = 0; j < dict.length; j++) {
          // 每次替换 start 中1个字母
          const str = node.slice(0, i) + dict[j] + node.slice(i + 1)
          if (bankSet.has(str)) {
            queue.push(str)
            // 因为是广度优先遍历，用过一次，不会再用了
            bankSet.delete(str)
          }
        }
      }
    }
    count++
  }
  return -1
};
