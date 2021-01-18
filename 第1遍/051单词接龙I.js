/* 
  https://leetcode-cn.com/problems/word-ladder/description/
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

  // 注意，因为 wordList 中大会有大量重复字符，如果不做过滤，数据量大的话会超时。
  // 1，可以使用 Set 过滤
  // let wordStr = new Set(wordList.join(''))
  // 2，因为都是小写字母，所以可以直接使用26个字母
  let wordStr = ''
  for (let i = 0; i < 26; i++) {
    wordStr += String.fromCharCode(i+97)
  }
  let queue = [beginWord], count = 1
  while (queue.length) {
    let n = queue.length
    while (n-- > 0) {
      const node = queue.shift()
      /* 
        hit --> hot --> dot --> dog --> cog
                    --> lot --> log --> cog 
      */
      if (node === endWord) return count
      for (let i = 0; i < node.length; i++) {
        for (const word of wordStr) {
          const str = node.slice(0, i) + word + node.slice(i+1)
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

/**
 * BFS 
 * 也可以每次都把 count 带上。
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  let wordSet = new Set(wordList)
  if (!wordSet.has(endWord)) return 0

  let wordStr = new Set(wordList.join(''))
  let queue = [[beginWord, 1]]
  while (queue.length) {
    let n = queue.length
    while (n-- > 0) {
      const [node, count] = queue.shift()
      console.log('node', [node, count])
      if (node === endWord) return count
      for (let i = 0; i < node.length; i++) {
        for (const word of wordStr) {
          const str = node.slice(0, i) + word + node.slice(i+1)
          if (wordSet.has(str)) {
            queue.push([str, count + 1])
            wordSet.delete(str)
          }
        }
      }
    }
  }
  return 0
}

// dfs
var ladderLength = function(beginWord, endWord, wordList) {
  let wordSet = new Set(wordList)
  if (!wordSet.has(endWord)) return 0

  let wordStr = new Set(wordList.join('')), count = Infinity
  dfs(beginWord, 1)
  return count === Infinity ? 0 : count

  function dfs(beginWord, level) {
    if (beginWord === endWord) {
      count = Math.min(count, level)
    }

    for (let i = 0; i < beginWord.length; i++) {
      for (const word of wordStr) {
        const str = beginWord.slice(0, i) + word + beginWord.slice(i+1)
        if (wordSet.has(str)) {
          wordSet.delete(str)
          dfs(str, level + 1)
          wordSet.add(str)
        }
      }
    }
    return 0
  }
}

console.log(ladderLength('hit', 'cog', ["hot","dot","dog","lot","log","cog"]))