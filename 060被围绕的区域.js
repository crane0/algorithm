/* 
  https://leetcode-cn.com/problems/surrounded-regions/
  
  思路：并查集
  和边界 O 相邻的并为一个区域，剩下的 O 填充即可。
*/
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  if (board.length === 0) return;
  class unionFind {
    constructor(n) {
      this.count = n;
      this.parent = new Array(n);
      this.size = new Array(n);
      for (let i = 0; i < n; i++) {
        this.parent[i] = i;
        this.size[i] = i;
      }
    }
  
    /* 返回节点 x 的根节点 */
    find(x) {
      while (this.parent[x] !== x) {
        // 进行路径压缩
        /* 
          假设 x = 1, 此时 1 --> 2 --> 3
          下面代码表示： 1 --> 3 <-- 2
          注意 2 依然指向 3 没有变。
        */
        this.parent[x] = this.parent[this.parent[x]]; 
        x = this.parent[x];
      }
      return x;
    }
  
    /* 将 p 和 q 连通 */
    union(p, q) {
      let rootP = this.find(p);
      let rootQ = this.find(q);
      if (rootP === rootQ) return;
      // 小树接到大树下面，较平衡
      if (this.size[rootP] > this.size[rootQ]) {
        this.parent[rootQ] = rootP;
        this.size[rootP] += this.size[rootQ];
      } else {
        this.parent[rootP] = rootQ;
        this.size[rootQ] += this.size[rootP];
      }
      this.count--;
    }
  
    /* 判断 p 和 q 是否互相连通 */
    connected(p, q) {
      let rootP = this.find(p);
      let rootQ = this.find(q);
      // 处于同一棵树上的节点，相互连通
      return rootP == rootQ;
    }
  }

  // 二维数组累计的 index
  function getIndex(x, y) {
    return x * cols + y
  }

  const rows = board.length
  const cols = board[0].length
  const faker = rows * cols
  const uf = new unionFind(faker) // 不需要额外空间，直接用边界上的 O 的空间即可。

  // 需要4个方向，因为可能不在边界的 O 和在边界的 O 相连。
  const rowOffset = [-1, 0, 1, 0] // 左右
  const colOffset = [0, -1, 0, 1] // 上下
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === 'O') {
        if (i === 0 || j === 0 || i === rows - 1 || j === cols - 1) {
          uf.union(getIndex(i, j), faker)
        } else {
          for (let k = 0; k < 4; k++) {
            const newRow = i + rowOffset[k]
            const newCol = j + colOffset[k]
            if (newRow < rows && newCol < cols && board[newRow][newCol] === 'O') {
              uf.union(getIndex(i, j), getIndex(newRow, newCol))
            }
          }
        }
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (uf.connected(getIndex(i, j), faker)) {
        board[i][j] = 'O'
      } else {
        board[i][j] = 'X'
      }
    }
  }
  console.log(board)
};

// let params = [
//   ['X', 'X', 'X','X'],
//   ['X', 'O', 'O','X'],
//   ['X', 'X', 'O','X'],
//   ['X', 'O', 'X','X'],
// ]

// 主要检查 [1,1] 是否会变
let params2 = [
  ["X","O","O","X","X","X","O","X","O","O"],
  ["X","O","X","X","X","X","X","X","X","X"],
  ["X","X","X","X","O","X","X","X","X","X"],
  ["X","O","X","X","X","O","X","X","X","O"],
  ["O","X","X","X","O","X","O","X","O","X"],
  ["X","X","O","X","X","O","O","X","X","X"],
  ["O","X","X","O","O","X","O","X","X","O"],
  ["O","X","X","X","X","X","O","X","X","X"],
  ["X","O","O","X","X","O","X","X","O","O"],
  ["X","X","X","O","O","X","O","X","X","O"]
]
console.log(solve(params2))