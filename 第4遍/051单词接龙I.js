/* 
  https://leetcode-cn.com/problems/word-ladder
  BFS + DFS 2种方法
*/
/**
 * BFS
 * 最小基因变化和该题是一模一样的，区别在于返回值的不同，
 * 前者返回变化的次数，后者返回总长度（也就是变化次数+1）
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  let wordSet = new Set(wordList)
  if (!wordSet.has(endWord)) return 0

  const letterDict = []
  for (let i = 0; i < 26; i++) {
    letterDict.push(String.fromCharCode(i+97))
  }
  let queue = [beginWord], count = 1
  while (queue.length) {
    let n = queue.length
    while (n-- > 0) {
      const node = queue.shift()
      for (let i = 0; i < node.length; i++) {
        for (const letter of letterDict) {
          const str = node.slice(0, i) + letter + node.slice(i+1)
          if (str === endWord) {
            return count + 1
          }
          if (wordSet.has(str)) {
            queue.push(str)
            wordSet.delete(str)
          }
        }
      }
    }
    count++
  }
  return 0
}


// DFS 会超时
var ladderLength = function(beginWord, endWord, wordList) {
  let wordSet = new Set(wordList)
  if (!wordSet.has(endWord)) return 0

  const letterDict = []
  for (let i = 0; i < 26; i++) {
    letterDict.push(String.fromCharCode(i+97))
  }
  let count = Infinity
  dfs(beginWord, 1)
  return count === Infinity ? 0 : count

  function dfs(beginWord, level) {
    if (beginWord === endWord) {
      count = Math.min(count, level)
      return
    }
    if (level >= count) {
      return
    }
    for (let i = 0; i < beginWord.length; i++) {
      for (const letter of letterDict) {
        const str = beginWord.slice(0, i) + letter + beginWord.slice(i+1)
        if (wordSet.has(str)) {
          wordSet.delete(str)
          dfs(str, level + 1)
          wordSet.add(str)
        }
      }
    }
  }
}

console.log(ladderLength('hit', 'cog', ["hot","dot","dog","lot","log","cog"]))