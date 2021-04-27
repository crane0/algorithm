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

  let trie = Object.create(null)
  for (const word of words) {
    let node = trie
    for (const w of word) {
      node[w] = node[w] || {}
      node = node[w]
    }
    node.word = word
  }

  let set = new Set()
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dfs(i, j, trie)
    }
  }
  return Array.from(set)

  function dfs(x, y, node) {
    if (x < 0 || y < 0 || x >= m || y >=n || board[x][y] === '.' || !node[board[x][y]]) {
      return
    }
    let temp = board[x][y];
    node = node[temp];
    board[x][y] = '.'
    if (node.word) set.add(node.word);

    dfs(x, y+1, node)
    dfs(x, y-1, node)
    dfs(x+1, y, node)
    dfs(x-1, y, node)

    board[x][y] = temp
  }
}

const board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
console.log(findWords(board, words))