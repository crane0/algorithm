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

  let dict = []
  for (let i = 97; i < 123; i++) {
    dict.push(String.fromCharCode(i))
  }

  let queue = [beginWord], count = 1
  while (queue.length > 0) {
    let length = queue.length
    while (length-- > 0) {
      const node = queue.shift()
      if (node === endWord) return count
      for (let i = 0; i < node.length; i++) {
        for (const letter of dict) {
          const nextWord = node.slice(0, i) + letter + node.slice(i+1)
          if (wordSet.has(nextWord)) {
            wordSet.delete(nextWord)
            queue.push(nextWord)
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

  let dict = []
  for (let i = 97; i < 123; i++) {
    dict.push(String.fromCharCode(i))
  }

  let queue = [[beginWord, 1]]
  while (queue.length > 0) {
    let length = queue.length
    while (length-- > 0) {
      const [node, count] = queue.shift()
      if (node === endWord) return count
      for (let i = 0; i < node.length; i++) {
        for (const letter of dict) {
          const nextWord = node.slice(0, i) + letter + node.slice(i+1)
          if (wordSet.has(nextWord)) {
            wordSet.delete(nextWord)
            queue.push([nextWord, count + 1])
          }
        }
      }
    }
  }
  return 0
}

// dfs
var ladderLength = function(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList)
  if (!wordSet.has(endWord)) return 0

  let dict = []
  for (let i = 97; i < 123; i++) {
    dict.push(String.fromCharCode(i))
  } 

  let count = Infinity
  dfs(1, beginWord)
  return count === Infinity ? 0 : count

  function dfs(level, node) {
    if (node === endWord) {
      count = Math.min(count, level)
      return
    }

    for (let i = 0; i < node.length; i++) {
      for (const letter of dict) {
        const nextWord = node.slice(0, i) + letter + node.slice(i+1)
        if (wordSet.has(nextWord)) {
          wordSet.delete(nextWord)
          dfs(level + 1, nextWord)
          wordSet.add(nextWord)
        }
      }
    }
  }
}

console.log(ladderLength('hit', 'cog', ["hot","dot","dog","lot","log","cog"]))


