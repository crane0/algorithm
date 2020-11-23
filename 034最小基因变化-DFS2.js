/* 
  也是深度优先遍历，相比于第一个 DFS，没有使用 Set 数据结构判断 bank 中已经比较过的元素。
  直接将 bank[i] = null 和重置的操作，来判断。
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

  let minCount = Infinity
  function dfs(start, end, bank, count) {
    if (start === end) {
      minCount = Math.min(minCount, count)
      return
    }

    for (let i = 0; i < bank.length; i++) {
      let b = bank[i]

      if (b === null) continue; // bank 中已经比较过的元素跳过

      let diff = 0
      // 双层循环，找出 bank 中，和 start 只有一个字母差异的元素
      for (let j = 0; j < start.length; j++) {
        if (start[j] !== b[j]) diff++;
        if (diff > 1) break;
      }

      // 如果只有一个字母差异，才可以继续进行（因为每次基因变化只能变一个字母）
      if (diff == 1) {
        bank[i] = null; // bank 中已经比较过的元素置空,防止循环使用
        dfs(b, end, bank, count + 1);
        // 还原，因为如果 start 和 end 差好几个字母的情况下，基因变异的选择就有多种情况。
        bank[i] = b;
      }
    }
  };
  dfs(start, end, bank, 0)

  return minCount === Infinity ? -1 : minCount
};