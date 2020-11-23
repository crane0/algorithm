/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  let m = board.length,
      n = m && board[0].length || 0;

  if(n === 0) return [];

  let trie = Object.create(null);
  for(let w of words) {
      let root = trie;
      for(let i = 0, len1 = w.length; i < len1; i++) {
          if(!root[w[i]]) {
              root[w[i]] = {};
          }
          root = root[w[i]];
      }
      root.word = w;
  }

  let count = 0
  let youxiao = 0
  let res = new Set();

  for(let i = 0; i < m; i++) {
      for(let j = 0; j < n; j++) {
          let root = trie;
          dfs(i, j, root);
      }
  }

  let ans = Array.from(res)
  console.log(count, youxiao)
  return ans;

  function dfs(x, y, node) {
      count++
      if(x < 0 || y < 0 || x >= m || y >= n || board[x][y] === '.' || !node[board[x][y]]) {
          return;
      }
      youxiao++
      let tmp = board[x][y];
      node = node[tmp];
      board[x][y] = '.';
      if(node.word) {
          res.add(node.word);
      }
      dfs(x-1, y, node);
      dfs(x+1, y, node);
      dfs(x, y-1, node);
      dfs(x, y+1, node);

      board[x][y] = tmp;
      return;

  }
};

console.log(findWords([
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
], ["oath","pea","eat","rain", "oa"]))