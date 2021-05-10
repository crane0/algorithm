/* 
  https://leetcode-cn.com/problems/friend-circles/
  https://leetcode-cn.com/problems/number-of-provinces/
  题目意思：
  M 是正方形（每个元素都是一个市），最多有 M.length 个省
  1，每一行（列）都是一个省
  2，因为 i 和 j 相通 等于 j 和 i 相通，所以如果 M[i][j] === 1，则 M[j][i] 也等于 1
  也就是说，如果一行（列）有2个1，则这2个省相联通，如下图示
  [
    [1,0,0,1],
    [0,1,1,0],
    [0,1,1,1],
    [1,0,1,1]
  ]
  [0][0] 和 [3][0] 都是1，说明第1个省和第4个省相通，那就合并为1个省。
  [1][1] 和 [2][1] 都是1，说明第2个省和第3个省相通，那就合并为1个省。
  综上所述，1和4联通，2和3联通，3和4联通，所以1和4联通，所以最终只有1个省。
*/
/**
 * 并查集
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
  class unionFind {
    constructor(n) {
      this.count = n
      this.parent = []
      this.size = []
      for (let i = 0; i < n; i++) {
        this.parent[i] = i
        this.size[i] = i
      }
    }

    // x 的根节点
    find(x) {
      while (this.parent[x] !== x) {
        this.parent[x] = this.parent[this.parent[x]]
        x = this.parent[x]
      }
      return x
    }

    // 联通
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

    // 是否联通（共同根节点）
    connected(p, q) {
      return this.find(p) === this.find(q)
    }
  }

  let uf = new unionFind(M.length)

  for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < i; j++) {
      if (M[i][j] === 1) {
        uf.union(i, j)
      }
    }
  }
  return uf.count
}

/**
 * BFS
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
  let count = 0
  let visited = new Array(M.length).fill(false)

  for (let i = 0; i < M.length; i++) {
    if (!visited[i]) {
      count++
      visited[i] = true
      bfs(i)
    }
  }
  return count

  function bfs(x) {
    let queue = [x]
    while (queue.length > 0) {
      let length = queue.length
      while (length-- > 0) {
        const i = queue.shift()
        for (let j = 0; j < M.length; j++) {
          if (M[i][j] === 1 && !visited[j]) {
            visited[j] = true
            queue.push(j)
          }
        }
      }
    }
  }
}


/**
 * DFS
 * @param {number[][]} M
 * @return {number}
 */
 var findCircleNum = function(M) {
  let count = 0
  let visited = new Array(M.length).fill(false)

  for (let i = 0; i < M.length; i++) {
    if (!visited[i]) {
      count++
      visited[i] = true
      dfs(i)
    }
  }
  return count

  function dfs(i) {
    for (let j = 0; j < M.length; j++) {
      if (M[i][j] === 1 && !visited[j]) {
        visited[j] = true
        dfs(j)
      }
    }
  }
}

// console.log(findCircleNum([
//   [1,1,0],
//   [1,1,0],
//   [0,0,1]
// ]))

console.log(findCircleNum([
  [1,0,0,1],
  [0,1,1,0],
  [0,1,1,1],
  [1,0,1,1]
]))
