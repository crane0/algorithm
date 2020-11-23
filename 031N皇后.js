/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  let ret = []
  let queens = new Array(n).fill(-1)
  let columns = new Set()
  let na = new Set() // 主对角线 二四象限
  let pie = new Set() // 副对角线 一三象限
  backtrack(ret, queens, n, 0, columns, pie, na)
  return ret

  /**
   * @param {number} row 层级，这里以每一行作为层级下探
   * @param {number[]} queens 最终放置皇后的数组
   */

  /* 
    解题思路参考 https://leetcode-cn.com/problems/n-queens/solution/gen-ju-di-46-ti-quan-pai-lie-de-hui-su-suan-fa-si-/
    为什么会出现函数内有 for 循环，循环内又递归的调用该函数？
    因为思路是这样（以 n = 4 为例）：
    从每一行开始递归，row 表示行数（也就是层级），for 循环遍历的是当前行的每一列。
    所以，row = 0 时，for 循环遍历，queens[0] = 0 满足，下探，
    row = 1 时，for 循环遍历，queens[1] = 2 满足，下探，
    row = 2 时，for 循环遍历，都不满足，不会继续下探，当前层代码执行完毕，返回上一层，
    row = 1 时，for 循环遍历，queens[1] = 3 满足，下探，
    以上依次判断，直到每一行都有皇后，也就是说 queens 的每一项都有值，说明就是一个解，generateBoard生成显示结果即可。
    提示：backtrack 函数第一次执行时，其 for 的每一项就是 row = 0 时，queens[0] = 0，1，2，3 每一个再依次下探row = 2
  */
  function backtrack(ret, queens, n, row, columns, pie, na) {
    // 终止条件
    // （因为是 n 个皇后放置在 n×n 的棋盘）下探到最后一行，再次递归进入后，进行最终格式的整理
    if(row === n) {
      let board = generateBoard(queens, n)
      return ret.push(board)
    }

    // 拆分子问题
    // 这里遍历的是一行中的每列，每个位置都会试到。
    for (let i = 0; i < n; i++) {
      // 列
      if (columns.has(i)) {
        continue
      }
      /* 
        24象限主对角线，横坐标 - 纵坐标 的值相等 （row 是横坐标， i 是纵坐标），比如
        [0,0] [1,1] [2,2]
        [0,1] [1,2] [2,3]
      */
      let na1 = row - i
      if (na.has(na1)) {
        continue
      }

      /* 
        13象限副对角线，横坐标 + 纵坐标 的值相等，比如
        [0,3] [1,2] [2,1]
        [0,2] [1,1] [2,0]
      */
      let pie1 = row + i
      if (pie.has(pie1)) {
        continue
      }
      

      // 上面判断都符合后，就在当前行的位置放皇后
      queens[row] = i
      // 当前层在皇后位置满足后，会将下一层需要判断不满足的位置放入，在下一层判断。
      columns.add(i)
      pie.add(pie1)
      na.add(na1)

      // 下探
      backtrack(ret, queens, n, row + 1, columns, pie, na)

      // 清理当前层
      // 代码执行，是从最深等级开始的，所以从里到外逐层清理。
      queens[row] = -1
      columns.delete(i)
      pie.delete(pie1)
      na.delete(na1)
    }
  }

  // 生成指定格式的结果
  /* 
     [".Q..",
      "...Q",
      "Q...",
      "..Q."]
  */
  function generateBoard(queens, n) {
    let board = []
    for (let i = 0; i < n; i++) {
      let row = new Array(n).fill('.')
      row[queens[i]] = 'Q'
      board.push(row.join(''))
    }
    return board
  }
};

console.log(solveNQueens(4))