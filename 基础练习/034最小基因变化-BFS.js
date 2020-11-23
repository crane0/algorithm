/* 
  BFS广度优先，
  第1次 while 循环，在 queue 中 shift 取出 start 后，每次替换 start 1个的字母为 dict 中的1个，在 bank 中找是否存在，
    存在则 count+1，并将其 push 到 queue 中，“这一层基因变异”都比较完，for 循环就结束了，得到所有满足条件的只改变了1个字母的 start（暂时称为 Y）。
    因为 queue 第一次只有一个，所有 for 循环结束，第1次 while 循环也就结束了。
  之后的 while 循环类似。只不多是扩散出去了，每一个 Y 都对应一个完整的 for 循环。

  关键技巧：将 start 和对应的 count 放到一个数组中，每次可以取出都是成对的！计算 count 每次都是带入的很方便。

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

  let queue = [[start, 0]]
  while (queue.length > 0) {
    let [node, count] = queue.shift()
    if(node === end) return count
    for (let i = 0; i < node.length; i++) {
      for (let j = 0; j < dict.length; j++) {
        // 每次替换 start 中1个字母
        const str = node.slice(0, i) + dict[j] + node.slice(i + 1)
        if (bankSet.has(str)) {
          queue.push([str, count + 1])
          // 因为是广度优先遍历，相同的不会再用了（不会再进入 if 判断了）
          bankSet.delete(str)
        }
      }
    }
  }
  return -1
};
