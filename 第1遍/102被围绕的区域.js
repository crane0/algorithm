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

    // 寻找 x 的根节点
    find(x) {
      while (this.parent[x] !== x) {
        // 压缩路径
        this.parent[x] = this.parent[this.parent[x]]
        x = this.parent[x]
      }
      return x
    }

    // 将 p 和 q 连通，也就是合并根节点
    union(p, q) {
      const rootP = this.find(p)
      const rootQ = this.find(q)
      if (rootP === rootQ) return

      // 小数接到大树下较平衡
      if (this.size[rootP] > this.size[rootQ]) {
        this.parent[rootQ] = rootP
        this.size[rootP] +=this.size[rootQ]
      } else {
        this.parent[rootP] = rootQ
        this.size[rootQ] +=this.size[rootP]
      }
      this.count--
    }

    // 判断 p 和 q 是否互相连通，也就是是否有公共祖先
    connected(p, q) {
      const rootP = this.find(p)
      const rootQ = this.find(q)
      return rootP === rootQ
    }
  }

  const rows = board.length
  const cols = board[0].length

  function getIndex(x, y) {
    return cols * x + y
  }
  const faker = rows * cols
  const uf = new unionFind(faker)

  const directX = [0, 1, 0, -1]
  const directY = [1, 0, -1, 0]

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === 'O') {
        if (i === 0 || j === 0 || i === rows - 1 || j === cols - 1) {
          uf.union(getIndex(i, j), faker) // Faker 这个数字随便找的，只是需要保证当前满足的都连通。
        } else {
          for (let k = 0; k < 4; k++) {
            const x = i + directX[k]
            const y = j + directY[k]
            // 虽然有可能在边缘上，不过不影响，因为在边缘的已经和 Faker 相通了，之后判断赋值时只要和 Faker 相通的，都会置为 O
            if (x < rows && y < cols && board[x][y] === 'O') {
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