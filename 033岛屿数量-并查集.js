/* 
  https://leetcode-cn.com/problems/number-of-islands/
  使用并查集


*/
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
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

  const rows = grid.length
  const cols = grid[0].length
  const faker = rows * cols
  // 多申请了一个，将所有的 0 都连成一个假的空间。
  let uf = new unionFind(faker + 1)

  // 只需考虑右 下。
  const rowOffset = [0, 1] // 左右
  const colOffset = [1, 0] // 上下
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === '0') {
        uf.union(getIndex(row, col), faker+1)
      }
      if (grid[row][col] === '1') {
        for (let i = 0; i < 2; i++) {
          const newRow = row + rowOffset[i]
          const newCol = col + colOffset[i]
          if (newRow < rows && newCol < cols && grid[newRow][newCol] === '1') {
            uf.union(getIndex(row, col), getIndex(newRow, newCol))
          }
        }
      }
    }
  }
  // 减去假的空间
  return uf.count - 1
};

let input = [
  ['1','1','0','0','0'],
  ['1','1','0','0','0'],
  ['0','0','1','0','0'],
  ['0','0','0','1','1']
]

console.log(numIslands(input))
