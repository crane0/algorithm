/* 
  https://leetcode-cn.com/problems/friend-circles/
  https://leetcode-cn.com/problems/number-of-provinces/
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

    // 查找 x 的根节点
    find(x) {
      while (this.parent[x] !== x) {
        this.parent[x] = this.parent[this.parent[x]]
        x = this.parent[x]
      }
      return x
    }

    // 连通 p q
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

    // p 和 q 是否连通
    connected(p, q) {
      return this.find(p) === this.find(q)
    }
  }

  const m = M.length
  const uf = new unionFind(m)

  for (let i = 0; i < m; i++) {
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