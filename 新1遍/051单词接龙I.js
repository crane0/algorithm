/* 
  https://leetcode-cn.com/problems/word-ladder
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
  const wordSet = new Set(wordList)
  if (!wordSet.has(endWord)) return 0

  const letterDict = []
  for (let i = 97; i < 123; i++) {
    letterDict.push(String.fromCharCode(i))
  }

  let queue = [beginWord], count = 1
  while (queue.length > 0) {
    let length = queue.length
    while (length-- > 0) {
      const node = queue.shift()
      for (let i = 0; i < node.length; i++) {
        for (const letter of letterDict) {
          const newWord = node.slice(0, i) + letter + node.slice(i+1)
          if (newWord === endWord) return count + 1
          if (wordSet.has(newWord)) {
            queue.push(newWord)
            wordSet.delete(newWord)
          }
        }
      }
    }
    count++
  }
  return 0
}

/**
 * BFS 
 * 也可以每次都把 count 带上。
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList)
  if (!wordSet.has(endWord)) return 0

  const letterDict = []
  for (let i = 97; i < 123; i++) {
    letterDict.push(String.fromCharCode(i))
  }

  let queue = [[beginWord, 1]]
  while (queue.length > 0) {
    let length = queue.length
    while (length-- > 0) {
      let [node, count] = queue.shift()
      for (let i = 0; i < node.length; i++) {
        for (const letter of letterDict) {
          const newWord = node.slice(0, i) + letter + node.slice(i+1)
          if (newWord === endWord) return count + 1
          if (wordSet.has(newWord)) {
            queue.push([newWord, count+1])
            wordSet.delete(newWord)
          }
        }
      }
    }
  }
  return 0 
}

// dfs 超时
var ladderLength = function(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList)
  if (!wordSet.has(endWord)) return 0

  const letterDict = []
  for (let i = 97; i < 123; i++) {
    letterDict.push(String.fromCharCode(i))
  }

  let count = Infinity
  dfs(1, beginWord)
  return count === Infinity ? 0 : count

  function dfs(level, beginWord) {
    if (beginWord === endWord) {
      count = Math.min(count, level)
      return
    }
    for (let i = 0; i < beginWord.length; i++) {
      for (const letter of letterDict) {
        const newWord = beginWord.slice(0, i) + letter + beginWord.slice(i+1)
        if (wordSet.has(newWord)) {
          wordSet.delete(newWord)
          dfs(level + 1, newWord)
          wordSet.add(newWord)
        }
      }
    }
  }
}

console.log(ladderLength('hit', 'cog', ["hot","dot","dog","lot","log","cog"]))