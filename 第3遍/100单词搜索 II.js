/* 
  https://leetcode-cn.com/problems/word-search-ii/
*/
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  let trie = Object.create(null)
  for (const word of words) {
    let node = trie
    for (const w of word) {
      node[w] = node[w] || {}
      node = node[w]
    }
    node.word = word
  }

  const directX = [0, 1, 0, -1]
  const directY = [1, 0, -1, 0]
  const m = board.length, n = board[0].length
  let set = new Set()

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
    const letter = board[i][j]
    node = node[letter]
    if (node.word) set.add(node.word);

    for (let k = 0; k < 4; k++) {
      const x = i + directX[k]
      const y = j + directY[k]
      board[i][j] = '.'
      dfs(x, y, node)
      board[i][j] = letter
    }
  }
}

// const board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
// const board = [["a"]], words = ["a"]
const board = [["a","a"]], words = ["aaa"]
// const board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain","hklf", "hf"]

console.log(findWords(board, words))