/* 
  https://leetcode-cn.com/problems/friend-circles/
  https://leetcode-cn.com/problems/number-of-provinces/
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
    find(x) {
      while (this.parent[x] !== x) {
        this.parent[x] = this.parent[this.parent[x]]
        x = this.parent[x]
      }
      return x
    }

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
  let visited = new Array(M.length).fill(false)
  let count = 0
  for (let i = 0; i < M.length; i++) {
    if (!visited[i]) {
      visited[i] = true
      count++
      bfs([i])
    }
  }
  return count

  function bfs(queue) {
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
  let visited = new Array(M.length).fill(false)
  let count = 0
  for (let i = 0; i < M.length; i++) {
    if (!visited[i]) {
      visited[i] = true
      count++
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


console.log(findCircleNum([
  [1,1,0],
  [1,1,0],
  [0,0,1]
]))