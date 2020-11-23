// 深度优先遍历
/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
  let visited = new Set();

  let minCount = Infinity
  function dfs(start, end, bank, visited, count) {
    if (start === end) {
      minCount = Math.min(minCount, count)
      return
    }

    for (let i = 0; i < bank.length; i++) {
      let diff = 0
      // 双层循环，找出 bank 中，和 start 只有一个字母差异的元素
      for (let j = 0; j < start.length; j++) {
        if (start[j] !== bank[i][j]) diff++;
        if (diff > 1) break;
      }

      // 如果只有一个字母差异，才可以继续进行（因为每次基因变化只能变一个字母）
      if (diff == 1 && !visited.has(bank[i])) {
        visited.add(bank[i])
        dfs(bank[i], end, bank, visited, count + 1);
        // 还原，因为如果 start 和 end 差好几个字母的情况下，基因变异的选择就有多种情况。
        visited.delete(bank[i])
      }
    }
  };
  dfs(start, end, bank, visited, 0)

  return minCount === Infinity ? -1 : minCount
};
