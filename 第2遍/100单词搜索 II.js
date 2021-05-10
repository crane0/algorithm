/* 
  https://leetcode-cn.com/problems/word-search-ii/
*/
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  const m = board.length, n = board[0].length
  class Trie {
    constructor() {
      this.root = {}
    }
    insert(word) {
      let node = this.root
      for (const w of word) {
        node[w] = node[w] || {}
        node = node[w]
      }
      node.word = word
    }
    find(word) {
      let node = this.root
      for (const w of word) {
        if (!node[w]) return false
        node = node[w]
      }
      return node.word === word
    }
    startsWith(prefix) {
      let node = this.root
      for (const w of prefix) {
        if (!node[w]) return false
        node = node[w]
      }
      return true
    }
  }

  let trie = new Trie()
  for (const w of words) {
    trie.insert(w)
  }

  const directX = [0, 1, 0, -1]
  const directY = [1, 0, -1, 0]
  let ret = new Set()

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (trie.find(board[i][j])) {
        ret.add(board[i][j])
      }
      if (trie.startsWith(board[i][j])) {
        dfs(i, j, board[i][j])
      }
    }
  }
  return [...ret]

  function dfs(i, j, pre) {
    for (let k = 0; k < 4; k++) {
      const x = i + directX[k]
      const y = j + directY[k]
      if (x < 0 || y < 0 || x >= m || y >= n || board[x][y] === '.') {
        continue
      }
      const newPrefix = pre + board[x][y]
      if (trie.find(newPrefix)) {
        ret.add(newPrefix)
      }
      if (trie.startsWith(newPrefix)) {
        const letter1 = board[i][j]
        const letter = board[x][y]
        board[i][j] = '.'
        board[x][y] = '.'
        dfs(x, y, newPrefix)
        board[i][j] = letter1
        board[x][y] = letter
      }
    }
  }
}

var findWords = function(board, words) {
  const m = board.length, n = board[0].length
  const directX = [0, 1, 0, -1]
  const directY = [1, 0, -1, 0]

  let trie = Object.create(null), set = new Set()
  for (const word of words) {
    let node = trie
    for (const w of word) {
      node[w] = node[w] || {}
      node = node[w]
    }
    node.word = word
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dfs(i, j, trie)
    }
  }
  return [...set]

  function dfs(i, j, node) {
    if (i < 0 || j < 0 || i >= m || j >= n || board[i][j] === '.' || !node[board[i][j]]) {
      return
    }
    const temp = board[i][j]
    node = node[temp]
    /* 
      找到满足的 word 后，还要继续，因为 words = ['oa', 'oaa]
      并且对 board = [["a"]], words = ["a"] 这样在四周扫描之前，就已经可以判断出了。
    */
    if (node.word) set.add(node.word);

    for (let k = 0; k < 4; k++) {
      const x = i + directX[k]
      const y = j + directY[k]
      board[i][j] = '.'
      dfs(x, y, node)
      board[i][j] = temp
    }
  }

  /* 
    错误范例！
    漏掉了第一次进入 dfs 时，进行赋值：board[i][j] = '.' 
    会导致第1次 dfs 后四周的点，又可以遍历回到原来的中心点，此时中心点才会被 = '.'
    这个例子就是 board = [["a","a"]], words = ["aaa"] 结果应该是 [] 而不是 ["aaa"]

    也说明了，dfs 的写法最后
  */
  function dfs(i, j, node) {
    for (let k = 0; k < 4; k++) {
      const x = i + directX[k]
      const y = j + directY[k]
      if (x < 0 || y < 0 || x >= m || y >= n || board[x][y] === '.' || !node[board[x][y]]) {
        continue
      }
      const temp = board[x][y]
      node = node[temp]
      board[x][y] = '.'
      if (node.word) set.add(node.word);
      dfs(x, y, node)
      board[x][y] = temp
    }
  }
}

// const board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
// const board = [["a"]], words = ["a"]
const board = [["a","a"]], words = ["aaa"]
// const board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain","hklf", "hf"]

console.log(findWords(board, words))