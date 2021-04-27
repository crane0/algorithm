/* 
  https://leetcode-cn.com/problems/friend-circles/
*/
/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
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

  const uf = new unionFind(M.length)
  for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < i; j++) {
      if (M[i][j] === 1) {
        uf.union(i, j)
      }
    }
  }
  return uf.count
}
console.log(findCircleNum([
  [1,1,0],
  [1,1,0],
  [0,0,1]
]))