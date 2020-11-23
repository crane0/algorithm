// 此题不适合 DFS，部分测试样例会超时。
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  let visited = new Set()
  let minCount = Infinity

  function dfs(beginWord, endWord, wordList, visited, count) {
    if (beginWord === endWord) {
      minCount = Math.min(count, minCount)
      return
    }
    for (const word of wordList) {
      let diff = 0
      for (let i = 0; i < beginWord.length; i++) {
        if(beginWord[i] !== word[i]) diff++;
        if(diff > 1) break;
      }

      if (diff === 1 && !visited.has(word)) {
        visited.add(word)
        dfs(word, endWord, wordList, visited, count + 1)
        visited.delete(word)
      }
    }
  }

  dfs(beginWord, endWord, wordList, visited, 1)
  return minCount === Infinity ? 0 : minCount
};

console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]))