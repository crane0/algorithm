/* 
  https://leetcode-cn.com/problems/word-search-ii/
*/
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  class Trie {
    constructor() {
      this.root = {};
      this.endOfWord = "$";
    }
  
    insert(word) {
      let node = this.root;
      for (let ch of word) {
        node[ch] = node[ch] || {};
        node = node[ch];
      }
      node[this.endOfWord] = this.endOfWord;
      node.word = word
    }
  
    search(word) {
      let node = this.root;
      for (let ch of word) {
        if (!node[ch]) return false;
        node = node[ch];
      }
      return node[this.endOfWord] === this.endOfWord;
    }
  
    startsWith(word) {
      let node = this.root;
      for (let ch of word) {
        if (!node[ch]) return false;
        node = node[ch];
      }
      return true;
    }
  }

  let trie = new Trie();
  for (const word of words) {
    trie.insert(word)
  }

  let result = []
  let count = 0
  let _board = board

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (trie.startsWith(board[row][col])) {
        dfs(row, col, board[row][col], trie.root[board[row][col]])
      }
    }
  }
  console.log(count)
  return result
  
  function dfs(row, col, joinLetter, innerTrie) {
    count++
    if (innerTrie.word) {
      result.push(innerTrie.word)
      innerTrie.word = null
      // 这里不能 return，因为有 oa oath 这2种单词的情况。
    }

    const rowOffset = [-1, 0, 1, 0] // 左上右下
    const colOffset = [0, 1, 0, -1]

    const preLetter = _board[row][col]
    _board[row][col] = '#'

    for (let i = 0; i < 4; i++) {
      let newRow = row + rowOffset[i]
      let newCol = col + colOffset[i]

      if (newRow < 0 || newRow >= board.length || newCol < 0 || newCol >= board[row].length) {
        continue
      }
      const newLetter = _board[newRow][newCol]
      const tempJoin = joinLetter + newLetter
      if (trie.startsWith(tempJoin)) { // 剪枝
        dfs(newRow, newCol, tempJoin, innerTrie[newLetter])
      }
    }
    _board[row][col] = preLetter
  }
};

console.log(findWords([
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
], ["oath","pea","eat","rain", "oa"]))
