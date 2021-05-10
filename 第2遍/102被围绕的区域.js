/* 
  https://leetcode-cn.com/problems/surrounded-regions/
*/
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  class unionFind {
    constructor(n) {
      this.count = n
      this.parent = new Array(n)
      this.size = new Array(n)
      for (let i = 0; i < n; i++) {
        this.parent[i] = i
        this.size[i] = i
      }
    }

    // 查找 x 的根节点
    find(x) {
      while (this.parent[x] !== x) {
        this.parent[x] = this.parent[this.parent[x]]
        x = this.parent[x]
      }
      return x
    }

    // 连通 p 和 q
    union(p, q) {
      let rootP = this.find(p)
      let rootQ = this.find(q)
      if (rootP === rootQ) return

      if (this.size[rootP] > this.size[rootQ]) {
        this.parent[rootQ] = rootP
        this.size[rootP] += this.size[rootQ]
      } else {
        this.parent[rootP] = rootQ
        this.size[rootQ] += this.size[rootP]
      }
      this.count--
    }

    // 判断 p 和 q 是否连通
    connected(p, q) {
      return this.find(p) === this.find(q)
    }
  }

  const directX = [0, 1, 0, -1]
  const directY = [1, 0, -1, 0]
  const rows = board.length, cols = board[0].length
  const faker = rows * cols + 1

  function getIndex(x, y) {
    return x * cols + y
  }

  let uf = new unionFind(faker)

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === 'O') {
        if (i === 0 || j === 0 || i === rows - 1 || j === cols - 1) {
          uf.union(getIndex(i, j), faker)
        } else {
          for (let k = 0; k < 4; k++) {
            const x = i + directX[k]
            const y = j + directY[k]
            if (board[x][y] === 'O') {
               // x 和 y 也可能是四周的，那 i 和 j 就和 Faker 连在一起了。和 faker 连在一起意味着不会被 X 围住（至少有一边不是 X）。
              uf.union(getIndex(i, j), getIndex(x, y))
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
}

let params = [
  ['X', 'X', 'X','X'],
  ['X', 'O', 'O','X'],
  ['X', 'X', 'O','X'],
  ['X', 'O', 'X','X'],
]
console.log(solve(params))